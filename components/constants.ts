import { Skill } from 'types'

const favourite = true

export const frameworks: Skill[] = [
  { icon: 'asp.svg', name: 'ASP.NET' },
  { icon: 'express.svg', name: 'Express' },
  { icon: 'next-js.svg', name: 'Next.js', favourite },
  { icon: 'react.svg', name: 'React', favourite },
  { icon: 'nestjs.svg', name: 'NestJS' },
  { icon: 'node.svg', name: 'Node.js', favourite },
  { icon: 'laravel.svg', name: 'Laravel' },
  { icon: 'koa.svg', name: 'Koa' },
]

export const languages: Skill[] = [
  { icon: 'c.svg', name: 'C#' },
  { icon: 'css.svg', name: 'CSS', favourite },
  { icon: 'html.svg', name: 'HTML' },
  { icon: 'java.svg', name: 'Java' },
  { icon: 'js.svg', name: 'JavaScript', favourite },
  { icon: 'php.svg', name: 'PHP' },
  { icon: 'python.svg', name: 'Python' },
  { icon: 'sql.svg', name: 'SQL', favourite },
  { icon: 'ts.svg', name: 'TypeScript', favourite },
]

export const other: Skill[] = [
  { icon: 'apache.svg', name: 'Apache' },
  { icon: 'aws.svg', name: 'AWS' },
  { icon: 'docker.svg', name: 'Docker' },
  { icon: 'git.svg', name: 'Git' },
  { icon: 'jest.svg', name: 'Jest' },
  { icon: 'linux.svg', name: 'Linux' },
  { icon: 'mui.svg', name: 'Material-UI', favourite },
  { icon: 'mongodb.svg', name: 'MongoDB' },
  // { icon: 'next-ui.svg', name: 'Next UI' },
  { icon: 'nginx.svg', name: 'NGINX' },
  { icon: 'rtl.svg', name: 'React Testing Library' },
  { icon: 'redux.svg', name: 'Redux' },
  { icon: 'resend.svg', name: 'Resend', favourite },
  { icon: 'socketio.svg', name: 'Socket.IO' },
  { icon: 'supabase.svg', name: 'Supabase', favourite },
  { icon: 'storybook.svg', name: 'Storybook' },
  { icon: 'styled-components.svg', name: 'Styled Components' },
  { icon: 'vercel.svg', name: 'Vercel', favourite },
  { name: 'The list goes on...' },
]

export type Project = {
  description: string
  name: string
  images: string[]
  obstacles: {
    area: string
    description: string
  }[]
  stack: Skill[]
  url: string
}

export const projects: Project[] = [
  {
    name: 'LootLink.co.uk',
    description: `LootLink is an online competition site where users can purchase entries/tickets to win prizes. It's essentially an ecommerce site with a twist.
    <br />
    Overall I really enjoyed working on this project and I am proud of the end result.
    <br />
    I learned a great amount from this project, especially in the areas of payments and emails.
    <br />
    The project consists of three main areas, public site, admin dashboard and player(user) dashboard.
    <br />
    The public site displays anything which doesn't require authentication to view, such as the landing page, competitions, winners, about & the entry lists.
    <br />
    The admin dashboard allows admin users to manage the site, creating competitions, managing users, viewing entries, KPI's etc.
    <br />
    The player dashboard allows users to view their entries, account details, etc.
    <br />
    <br />
    - The project is far from finished and I will continue to add new features and improve the site over time.`,
    obstacles: [
      {
        area: 'Payments/Ticketing',
        description:
          'Initially I had Designed the payment & ticketing system to work around Revolut, however the business was rejected by Revolut for their business account. In the end I had to redesign the payment & ticketing system to work with Viva payments.',
      },
    ],
    images: ['lootlink.png', 'lootlink-mobile.png'],
    url: 'https://lootlink.co.uk',
    stack: [
      { icon: 'axios.svg', name: 'Axios', favourite },
      { icon: 'mui.svg', name: 'Material-UI', favourite },
      { icon: 'next-js.svg', name: 'Next.js', favourite },
      { icon: 'react.svg', name: 'React', favourite },
      { icon: 'resend.svg', name: 'Resend', favourite },
      { icon: 'supabase.svg', name: 'Supabase', favourite },
      { icon: 'ts.svg', name: 'TypeScript', favourite },
      { icon: 'vercel.svg', name: 'Vercel', favourite },
    ],
  },
  {
    name: 'Seann.tv',
    description: `Seann.tv or project-tv as I call it, is a hobby site I created to discover new TV shows to binge.
    <br />
    After struggling to find new shows on other sites, I decided to create an algorithm which aggregates a users watch history to recommend new shows.
    <br />
    Although the recommendations may not be perfect, I have found that it's accurate enough that I have enjoyed many of the shows it has suggested to me.
    <br />
    <br />
    - This project has been temporarily put on hold whilst I work on more important projects. Eventually I will return to it with some great new features. (Swipe to match with your partner/friends/housemates on what to watch next, movies, games, etc)`,
    images: ['seann-tv.png', 'seann-tv-mobile.png'],
    url: 'https://seann.tv',
    obstacles: [
      {
        area: 'Data Population',
        description: `For this project I used a free API to populate the data for the TV shows (https://www.themoviedb.org/).
        I didn't want to solely rely on the API for the data, and I didn't want redundant data in the database. I created a solution which would populate the database based on users input only but display new & popular data from the API, whilst keeping the database up to date.`,
      },
      {
        area: 'User Interface',
        description: `This is the first project I have worked on where I have had to consider the user interface and user experience.
        I have a few iterations of the design/flow of the site, and different UI Libraries. I first created the site using Next UI, the version I was using quickly became deprecated and I chose to switch to Material-UI. I am happy with the end result.
        I have learned a lot from this project and I am excited to apply what I have learned to future projects.`,
      },
      {
        area: 'Mobile UI',
        description: `I first decided this site would would be private and only for me to use, so I didn't bother with a mobile UI. After showing a few friends the site, they suggested I make it public.
        I then started creating a Mobile UI for the site before starting on LootLink, so there are a few areas which are not perfectly mobile friendly. This will also be resolved once I begin working on the project again.`,
      },
    ],
    stack: [
      { icon: 'axios.svg', name: 'Axios', favourite },
      { icon: 'mui.svg', name: 'Material-UI', favourite },
      { icon: 'next-js.svg', name: 'Next.js', favourite },
      { icon: 'react.svg', name: 'React', favourite },
      { icon: 'storybook.svg', name: 'Storybook', favourite },
      { icon: 'supabase.svg', name: 'Supabase', favourite },
      { icon: 'ts.svg', name: 'TypeScript', favourite },
      { icon: 'vercel.svg', name: 'Vercel', favourite },
    ],
  },
]

export const skills = { languages, frameworks, other }
