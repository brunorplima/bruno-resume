
export type Project = {
  readonly imgSrc: string
  readonly imgAlt: string
  readonly legend: string
  readonly description: string
  readonly link?: string
}

const projects: Project[] = [
  {
    imgSrc: '/project-dosh.png',
    imgAlt: 'Dosh',
    legend: 'Dosh',
    description: 'personal finance management app that helps users take control of their finances by providing an intuitive way to manage income and expenses, set budgets, and track progress towards financial goals.',
  },
  {
    imgSrc: '/project-divino-dog.png',
    imgAlt: 'Divino Dog',
    link: 'https://divinodogmenu.vercel.app/',
    legend: 'Divino Dog Menu App - Mobile',
    description: 'Order management for Divino Dog. Boosts productivity, improves customer experience, keeps track and record of all the orders.',
  },
  {
    imgSrc: '/project-providence.png',
    imgAlt: 'Providence Books & Press',
    link: 'https://providence-books-press-1vs0lpw8d-brunorplima.vercel.app/',
    legend: 'Providence Books & Press',
    description: 'Online bookstore with stock, user, and content management',
  },
  {
    imgSrc: '/project-ip.png',
    imgAlt: 'Inheritance Publications',
    link: 'https://inhpubli.vercel.app/',
    legend: 'Inheritance Publications',
    description: 'Online bookstore with more than 10 thousand products',
  },
  {
    imgSrc: '/project-minesweeper.png',
    imgAlt: "Bruno's Minesweeper",
    link: 'https://brunosminesweeper.web.app/',
    legend: "Bruno's Minesweeper",
    description: 'A minesweeper game optimized for mobile devices with score records and 3 levels of difficulty',
  },
  {
    imgSrc: '/project-allan.png',
    imgAlt: "Allan's Baby Shower",
    link: 'https://allanestachegando.web.app/',
    legend: "Allan's Baby Shower",
    description: 'Baby shower of my son with a gift list',
  }
]

export const getProjectKey = (project: Project) => {
  const { imgSrc, imgAlt, legend, description } = project
  return imgSrc + imgAlt + legend + description
}

export default projects
