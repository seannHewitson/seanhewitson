import { Skill } from 'types'

export const frameworks: Skill[] = [
  { icon: 'asp.svg', name: 'ASP.NET' },
  { icon: 'express.svg', name: 'Express' },
  { icon: 'next-js.svg', name: 'Next.js', favourite: true },
  { icon: 'react.svg', name: 'React', favourite: true },
  { icon: 'nestjs.svg', name: 'NestJS' },
  { icon: 'node.svg', name: 'Node.js', favourite: true },
  { icon: 'laravel.svg', name: 'Laravel' },
  { icon: 'koa.svg', name: 'Koa' },
]

export const languages: Skill[] = [
  { icon: 'c.svg', name: 'C#' },
  { icon: 'css.svg', name: 'CSS', favourite: true },
  { icon: 'html.svg', name: 'HTML' },
  { icon: 'java.svg', name: 'Java' },
  { icon: 'js.svg', name: 'JavaScript', favourite: true },
  { icon: 'php.svg', name: 'PHP' },
  { icon: 'python.svg', name: 'Python' },
  { icon: 'sql.svg', name: 'SQL (T-SQL, PostgreSQL, MySQL)' },
  { icon: 'ts.svg', name: 'TypeScript', favourite: true },
]

export const other: Skill[] = [
  { icon: 'apache.svg', name: 'Apache' },
  { icon: 'aws.svg', name: 'AWS' },
  { icon: 'docker.svg', name: 'Docker' },
  { icon: 'git.svg', name: 'Git' },
  { icon: 'jest.svg', name: 'Jest' },
  { icon: 'linux.svg', name: 'Linux' },
  { icon: 'mui.svg', name: 'Material-UI' },
  { icon: 'mongodb.svg', name: 'MongoDB' },
  // { icon: 'next-ui.svg', name: 'Next UI' },
  { icon: 'nginx.svg', name: 'NGINX' },
  { icon: 'rtl.svg', name: 'React Testing Library' },
  { icon: 'redux.svg', name: 'Redux' },
  { icon: 'resend.svg', name: 'Resend' },
  { icon: 'socketio.svg', name: 'Socket.IO' },
  { icon: 'supabase.svg', name: 'Supabase', favourite: true },
  { icon: 'storybook.svg', name: 'Storybook' },
  { icon: 'styled-components.svg', name: 'Styled Components' },
  { icon: 'vercel.svg', name: 'Vercel' },
  { name: 'The list goes on...' },
]

export const skills = { languages, frameworks, other }
