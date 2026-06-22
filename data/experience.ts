export interface Job {
  company: string
  role: string
  start: string
  end: string
  location: string
  bullets: string[]
  tech: string[]
}

export const experience: Job[] = [
  {
    company: 'TechCorp Inc.',
    role: 'Senior Software Engineer',
    start: 'Jan 2022',
    end: 'Present',
    location: 'San Francisco, CA (Remote)',
    bullets: [
      'Led the redesign of the core API layer, reducing average response time by 40%.',
      'Mentored a team of 4 engineers, establishing code review standards and onboarding docs.',
      'Shipped a real-time notification system now serving 500k+ active users.',
      'Drove migration from a monolith to microservices, improving deployment frequency 3×.',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    company: 'StartupXYZ',
    role: 'Software Engineer',
    start: 'Jun 2020',
    end: 'Dec 2021',
    location: 'New York, NY',
    bullets: [
      'Built the company\'s first mobile app (React Native) from 0 to 10k downloads in 3 months.',
      'Implemented an event-driven data pipeline processing 2M+ events per day.',
      'Collaborated with design to ship 12 product features across 6 two-week sprints.',
    ],
    tech: ['React Native', 'Python', 'Kafka', 'Redis', 'GCP'],
  },
  {
    company: 'Agency ABC',
    role: 'Junior Web Developer',
    start: 'Aug 2018',
    end: 'May 2020',
    location: 'Austin, TX',
    bullets: [
      'Delivered 15+ client websites on time and within scope across a range of industries.',
      'Introduced a shared component library that cut average project build time by 25%.',
      'Translated Figma mockups into pixel-perfect, responsive UIs in close collaboration with design.',
    ],
    tech: ['JavaScript', 'React', 'HTML/CSS', 'WordPress', 'Figma'],
  },
]
