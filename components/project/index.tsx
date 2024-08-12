'use client'

import { LanguageRounded } from '@mui/icons-material'
import { Box } from '@mui/material'

import { Scroller } from 'components/scroller'

import { Project as ProjectProps } from '../constants'
import { Images } from '../images'
import { LinkButton } from '../linkButton'
import { ReadMore } from '../readmore'
import { Skill } from '../skill'
import { Bold, Obstacle, ProjectContainer, Subtitle, Subtitle2 } from './styles'

export const Project = ({
  description,
  images,
  name,
  obstacles,
  stack,
  url,
}: ProjectProps) => (
  <ProjectContainer>
    <Box>
      <LinkButton href={url} startIcon={<LanguageRounded />}>
        {name}
      </LinkButton>
      <ReadMore content={description} variant='body1' />
      <Box>
        <Subtitle variant='subtitle1'>Tech Stack:</Subtitle>
        <Scroller>
          {stack.map((tech) => (
            <Skill fontSize='.75rem' key={tech.name} size={20} {...tech} />
          ))}
        </Scroller>
      </Box>
      <Images images={images} />
      <Box>
        <Subtitle2 variant='subtitle1'>Obstacles:</Subtitle2>
        {obstacles.map(({ area, description }) => (
          <Obstacle key={area}>
            <Bold variant='body1'>{area}:</Bold>
            <ReadMore content={description} sx={{ px: 2 }} />
          </Obstacle>
        ))}
      </Box>
    </Box>
  </ProjectContainer>
)
