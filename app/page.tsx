'use client'

import Image from 'next/image'

import { Intro } from 'components/intro'
import { Skills } from 'components/skills'

export default function Page() {
  return (
    <div>
      <Image
        alt='logo'
        height='66'
        src='/logo.png'
        style={{ marginBottom: '3rem' }}
        width='244'
      />
      <Intro />
      <Skills />
    </div>
  )
}
