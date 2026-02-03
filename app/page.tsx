import { Bots } from 'components/sections/bots'
import { Experience } from 'components/sections/experience'
import { Hero } from 'components/sections/hero'
import { Packages } from 'components/sections/packages'
import { Projects } from 'components/sections/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Bots />
      <Packages />
      <Experience />
    </>
  )
}
