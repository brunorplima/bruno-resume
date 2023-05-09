
export type Links = {
  readonly site?: string
  readonly repo?: string
}

export type Project = {
  readonly imgSrc: string
  readonly imgAlt: string
  readonly legend: string
  readonly description: string
  readonly links: Links
  readonly longDescription: string
  readonly teckStack: string
  readonly inDevelopment?: boolean
  readonly privateRepo?: boolean
}

const projects: Project[] = [
  {
    imgSrc: '/project-dosh.png',
    imgAlt: 'Dosh',
    links: {
      repo: 'https://github.com/brunorplima/dosh',
    },
    legend: 'Dosh',
    description: 'Dosh is an intuitive finance management app that helps you track your income, expenses, and budgets with ease.',
    longDescription: 'Dosh is a powerful financial management tool designed to help you take control of your finances. With Dosh, you can easily log your income and expenses, categorize your spending, and set budgets for each category. Our app offers a dashboard view of your global balance and individual account balances, along with customizable reports and automatic notifications to keep you informed about your money. Whether you\'re looking to stick to a budget, save for a big purchase, or just keep track of your finances, Dosh has everything you need to stay on top of your financial life. Join the thousands of users who trust Dosh to help them achieve their financial goals.',
    teckStack: 'Ruby on Rails so far',
    inDevelopment: true
  },
  {
    imgSrc: '/project-divino-dog.png',
    imgAlt: 'Divino Dog',
    links: {
      site: 'https://divinodogmenu.vercel.app/',
      repo: 'https://github.com/brunorplima/divino-dog-menu-app'
    },
    legend: 'Divino Dog Menu App - Mobile',
    description: 'Order management for Divino Dog. Boosts productivity, improves customer experience, keeps track and record of all the orders.',
    longDescription: 'Divino Dog Menu is the ultimate mobile-focused web app for the food industry, specifically designed for the hot dog company Divino Dog. It allows customers to place orders, while keeping them up-to-date with their order\'s progress. With a simple and user-friendly interface, customers can easily place an order, which begins in an unpaid status. Once the order is placed, customers can track its progress, while the admin keeps track of all the orders on the admin panel.\nDivino Dog Menu offers different statuses for orders, including unpaid, paid, preparing, done, and canceled. This provides real-time feedback to the customer and streamlines the process from placing an order to receiving it. The app does not deal with payments, and customers can pay for their orders at the cashier with an order number issued to each order.\nThe admin has full control over the products area, where they can manage toppings, menu item options, categories, and promotions with expiration dates. The app also offers different user types, including regular users, admin users, and master users. The owners of Divino Dog are master users and can add or remove admin users from among regular users. This allows them to authorize employees to work as admin users.\nThe settings area allows for flexibility in managing current orders, adding toppings, and managing content for the about us page. Divino Dog Menu provides an efficient and effective way for Divino Dog to manage their business, and offers customers a seamless experience from placing an order to receiving it.',
    teckStack: 'Typescript, React, Next.js, Firebase, SCSS, Tailwind',
  },
  {
    imgSrc: '/project-providence.png',
    imgAlt: 'Providence Books & Press',
    links: {
      site: 'https://providence-books-press-1vs0lpw8d-brunorplima.vercel.app/',
      repo: 'https://github.com/brunorplima/Providence-Books_Press'
    },
    legend: 'Providence Books & Press',
    description: 'Online bookstore with stock, user, and content management',
    longDescription: 'I Designed and developed an e-commerce website to sell the company\'s products. The project contains user authentication to allow users to have a better experience and relationship with the company. The website has a platform for Christian articles and texts which users may interact with by leaving their comments. A built-in review system helps customers to choose the right products. At last, an admin panel was developed to allow the management of database, website content, history of purchases and user information.',
    teckStack: 'Typescript, React, Next.js, Firebase, SCSS',
  },
  {
    imgSrc: '/project-ip.png',
    imgAlt: 'Inheritance Publications',
    links: {
      site: 'https://inhpubli.vercel.app/'
    },
    legend: 'Inheritance Publications',
    description: 'Online bookstore with more than 10 thousand products',
    longDescription: 'An ecommerce website for Inheritance Publications. I improved their old website turning it into a modern looking website with better user experience resulted from the capabilities of searching, filtering and sorting of all more than 10 thousand products. It is a server-side rendered website, powered by Next.js. Since its implementation the website has been easier to maintain and adapt to new changes. It uses Paypal payment system API. All the feedback received was positive.',
    teckStack: 'Javascript, React, Next.js, Firebase, SCSS, Bootstrap',
    privateRepo: true
  },
  {
    imgSrc: '/project-minesweeper.png',
    imgAlt: "Bruno's Minesweeper",
    links: {
      site: 'https://brunosminesweeper.web.app/',
      repo: 'https://github.com/brunorplima/minesweeper'
    },
    legend: "Bruno's Minesweeper",
    description: 'A minesweeper game optimized for mobile devices with score records and 3 levels of difficulty',
    longDescription: 'Minesweeper is a game that requires logic and induction in order to win. Perhaps this is the reason I like it very much. I decided, then, to develop it with an interesting style (usually the style for this game is quite boring). It was developed using Typescript. The game has three different levels and it records the ten best times for each level separately',
    teckStack: 'Typescript, React, Firebase, CSS',
  },
  {
    imgSrc: '/project-allan.png',
    imgAlt: "Allan's Baby Shower",
    links: {
      site: 'https://allanestachegando.web.app/',
      repo: 'https://github.com/brunorplima/AllanBaltazar'
    },
    legend: "Allan's Baby Shower",
    description: 'Baby shower of my son with a gift list',
    longDescription: 'In times of COVID-19 I had the idea of celebrating my son\'s baby shower online. This website developed with Typescript allows our guests to interact with us by sending us a message. The message is stored into Firebase Firestore and it is rendered by \'/admin\' page using Firebase Authentication. The admin page allows the administrator to approve or delete any message.',
    teckStack: 'Typescript, React, Firebase, CSS',
  }
]

export default projects
