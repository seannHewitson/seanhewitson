import got from 'got'
import { NextResponse } from 'next/server'
import { CookieJar } from 'tough-cookie'

type PlymouthLookupRow = {
  Date?: string
  Round_Type?: 'DO' | 'RE' | string
}

type PlymouthLookupResponse = {
  integration?: {
    transformed?: {
      rows_data?: Record<string, PlymouthLookupRow>
    }
  }
}

type BinType = 'brown' | 'green' | 'unknown'

type BinCollection = {
  date: string
  bin: BinType
  label: string
}

const HOSTNAME = 'plymouth-self.achieveservice.com'
const BASE_URL = `https://${HOSTNAME}`

const INITIAL_URL =
  `${BASE_URL}/en/AchieveForms/?form_uri=` +
  `sandbox-publish://AF-Process-31283f9a-3ae7-4225-af71-bf3884e0ac1b/` +
  `AF-Stagedba4a7d5-e916-46b6-abdb-643d38bec875/definition.json` +
  `&redirectlink=%2Fen&cancelRedirectLink=%2Fen&consentMessage=yes`

const AUTH_URL = `${BASE_URL}/authapi/isauthenticated`
const AUTH_TEST_URL = `${BASE_URL}/apibroker/domain/${HOSTNAME}`
const LOOKUP_URL = `${BASE_URL}/apibroker/runLookup`
const LOOKUP_ID = '5c99439d85f83'

const USER_AGENT =
  'Mozilla/5.0 (compatible; BinDayIndicator/1.0; +https://your-domain.example)'

function mapRoundType(roundType?: string): { bin: BinType; label: string } {
  switch (roundType) {
    case 'DO':
      return { bin: 'brown', label: 'Brown bin' }
    case 'RE':
      return { bin: 'green', label: 'Green bin' }
    default:
      return { bin: 'unknown', label: 'Unknown bin' }
  }
}

function normaliseDate(input?: string): string {
  if (!input) return ''

  const trimmed = input.trim()

  const ukMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (ukMatch) {
    const [, dd, mm, yyyy] = ukMatch
    return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`
  }

  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (isoMatch) {
    return `${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`
  }

  const parsed = new Date(trimmed)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10)
  }

  return trimmed
}

async function getCollectionsFromPlymouth(
  uprn: string
): Promise<BinCollection[]> {
  const cookieJar = new CookieJar()

  const client = got.extend({
    cookieJar,
    headers: {
      'user-agent': USER_AGENT,
      accept: 'application/json,text/plain,*/*',
    },
    followRedirect: true,
    timeout: {
      request: 20000,
    },
    retry: {
      limit: 0,
    },
  })

  // 1) Start session and collect cookies
  const initialRes = await client.get(INITIAL_URL)
  const finalFormUrl = initialRes.url

  // 2) Ask AchieveForms for auth session
  const authJson = await client
    .get(AUTH_URL, {
      searchParams: {
        uri: finalFormUrl,
        hostname: HOSTNAME,
        withCredentials: 'true',
      },
      responseType: 'json',
    })
    .json<{ 'auth-session'?: string }>()

  const sid = authJson['auth-session']

  if (!sid) {
    throw new Error('No auth session returned')
  }

  // 3) Domain check, keeping same cookies
  await client.get(AUTH_TEST_URL, {
    searchParams: {
      sid,
      _: Date.now().toString(),
    },
  })

  // 4) Perform lookup with same cookie jar
  const lookupJson = await client
    .post(LOOKUP_URL, {
      searchParams: {
        id: LOOKUP_ID,
        repeat_against: '',
        noRetry: 'false',
        getOnlyTokens: 'undefined',
        log_id: '',
        app_name: 'AF-Renderer::Self',
        _: Date.now().toString(),
        sid,
      },
      json: {
        formValues: {
          'Section 1': {
            number1: { value: uprn },
            nextncoll: { value: '9' },
          },
        },
      },
      responseType: 'json',
      headers: {
        'content-type': 'application/json',
        referer: finalFormUrl,
        origin: BASE_URL,
      },
    })
    .json<PlymouthLookupResponse>()

  const rows = Object.values(
    lookupJson.integration?.transformed?.rows_data ?? {}
  )

  return rows
    .map((row) => {
      const mapped = mapRoundType(row.Round_Type)
      return {
        date: normaliseDate(row.Date),
        bin: mapped.bin,
        label: mapped.label,
      }
    })
    .filter((row) => row.date)
}

export async function GET() {
  try {
    const uprn = process.env.PLYMOUTH_UPRN?.trim()

    if (!uprn) {
      return NextResponse.json(
        { error: 'Missing PLYMOUTH_UPRN environment variable' },
        { status: 500 }
      )
    }

    const collections = await getCollectionsFromPlymouth(uprn)
    const thisWeek = collections[0] ?? null

    return NextResponse.json(
      {
        council: 'Plymouth City Council',
        updatedAt: new Date().toISOString(),
        thisWeek,
        upcoming: collections,
      },
      {
        headers: {
          'Cache-Control': 's-maxage=21600, stale-while-revalidate=3600',
        },
      }
    )
  } catch (error: unknown) {
    console.error('Bin day lookup failed', error)

    return NextResponse.json(
      {
        error: 'Bin day lookup failed',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
