'use client'

import { skills } from '../constants'
import { Scroller } from '../scroller'
import { Skill } from '../skill'
import { Comment } from '../styles'
import { SkillContainer, SkillText, SkillsContainer, Subtitle } from './styles'

export const Skills = () => (
  <SkillsContainer>
    <Comment>The skills I have acquired</Comment>
    <Subtitle variant='subtitle1'>
      I am language agnostic, so picking up new languages and frameworks comes
      with ease. I&apos;m comfortable using whichever stack is best suited for
      the task.
    </Subtitle>
    {Object.entries(skills).map(([set, skills]) => (
      <SkillContainer key={set}>
        <SkillText variant='h4'>
          {set.charAt(0).toUpperCase() + set.slice(1)}
        </SkillText>
        <Scroller ListProps={{ sx: { textAlign: 'center' } }}>
          {skills.map((skill) => (
            <Skill key={skill.name} scrollable={skills.length > 9} {...skill} />
          ))}
        </Scroller>
      </SkillContainer>
    ))}
  </SkillsContainer>
)
