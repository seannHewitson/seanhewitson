'use client'

import { Box } from '@mui/material'

import { projects } from '../constants'
import { Project } from '../project'
import { Comment } from '../styles'
import { ProjectContainer, Subtitle } from './styles'

export const Showcase = () => (
  <Box>
    <Comment>Showcase Sean</Comment>
    <Subtitle variant='subtitle1'>
      Here are some of the recent projects I have worked on over the past year.
    </Subtitle>
    <ProjectContainer>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </ProjectContainer>
  </Box>
)
