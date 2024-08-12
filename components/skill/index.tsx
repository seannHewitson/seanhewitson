import Image from 'next/image'

import { Skill as SkillType } from 'types'

import { Icon, Item, Star, Text } from './styles'

type SkillProps = SkillType & {
  fontSize?: number | string
  size?: number
  scrollable?: boolean
}

export const Skill = ({
  name,
  favourite,
  fontSize = '1rem',
  icon,
  size = 40,
}: SkillProps) => (
  <Item>
    {icon && (
      <Icon>
        <Image
          alt={name}
          height={`${size}`}
          src={`/icons/${icon}`}
          style={{ pointerEvents: 'none' }}
          width={`${size}`}
        />
        {favourite && <Star />}
      </Icon>
    )}
    <Text fontSize={fontSize}>{name}</Text>
  </Item>
)
