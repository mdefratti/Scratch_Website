export interface Trait {
  icon: string
  label: string
  description: string
}

export interface TechCategory {
  category: string
  items: string[]
}

export const traits: Trait[] = [
  {
    icon: '⚡',
    label: 'Fast Learner',
    description: 'Picks up new languages, frameworks, and domains quickly and applies them effectively.',
  },
  {
    icon: '🤝',
    label: 'Team Player',
    description: 'Collaborates across engineering, design, and product to ship things that matter.',
  },
  {
    icon: '🔍',
    label: 'Detail-Oriented',
    description: 'Cares deeply about code quality, UX polish, and handling edge cases properly.',
  },
  {
    icon: '🧩',
    label: 'Problem Solver',
    description: 'Breaks complex problems into clear, pragmatic solutions without over-engineering.',
  },
]

export const techStack: TechCategory[] = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'FastAPI', 'React Native'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'Figma'] },
  { category: 'Cloud / DB', items: ['AWS', 'GCP', 'PostgreSQL', 'Redis', 'Kafka'] },
]
