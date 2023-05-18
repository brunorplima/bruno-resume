
type Graduation = {
  readonly name: string
  readonly institution: string
  readonly type: string
  readonly period: string
  readonly description: string
}

const graduations: Graduation[] = [
  {
    name: 'Applied Web Development',
    institution: 'British Columbia Institute of Technology',
    type: 'Associate Certificate',
    period: '2018 - 2019',
    description: 'Knowledge on the main technologies used for web and app development such as HTML, CSS, JavaScript and its derived libraries and frameworks such as React, Angular, Node, etc. Also Knowledge on databases both SQL and NoSQL.'
  },
  {
    name: 'Applied Software Development',
    institution: 'British Columbia Institute of Technology',
    type: 'Associate Certificate',
    period: '2017 - 2018',
    description: 'The foundation for software development with the focus on Java development. Foundation for software development life cycle and system analysis and design.'
  },
  {
    name: 'Customer Service',
    institution: 'Greystone College',
    type: 'Certificate',
    period: '2016 - 2017',
    description: 'Foundation and six months experience in the customer service industry. The foundation for increasing sales, managing networking among clients, co-workers, and employers. Understanding about the work environment and how to properly use it to improve customer service as well as the development of personal skills that incentives a growth in the customer service quality within a company.'
  }
]

export default graduations
