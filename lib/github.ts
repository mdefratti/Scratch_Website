export interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
}

const PLACEHOLDER_REPOS: Repo[] = [
  {
    id: 1,
    name: 'project-alpha',
    description: 'A full-stack web application with real-time collaboration features built using React and WebSockets.',
    html_url: '#',
    homepage: '#',
    stargazers_count: 128,
    forks_count: 24,
    language: 'TypeScript',
    topics: ['react', 'websockets', 'nodejs', 'postgresql'],
  },
  {
    id: 2,
    name: 'ml-pipeline',
    description: 'An end-to-end machine learning pipeline for data ingestion, training, and model serving at scale.',
    html_url: '#',
    homepage: null,
    stargazers_count: 87,
    forks_count: 15,
    language: 'Python',
    topics: ['machine-learning', 'fastapi', 'docker'],
  },
  {
    id: 3,
    name: 'devtools-cli',
    description: 'A command-line toolkit for automating repetitive development workflows and project scaffolding.',
    html_url: '#',
    homepage: null,
    stargazers_count: 214,
    forks_count: 41,
    language: 'Go',
    topics: ['cli', 'automation', 'developer-tools'],
  },
  {
    id: 4,
    name: 'ui-component-library',
    description: 'A collection of accessible, composable React components built on Radix UI primitives with full dark mode support.',
    html_url: '#',
    homepage: '#',
    stargazers_count: 56,
    forks_count: 12,
    language: 'TypeScript',
    topics: ['react', 'design-system', 'accessibility', 'storybook'],
  },
  {
    id: 5,
    name: 'distributed-cache',
    description: 'A lightweight distributed caching layer with LRU eviction, TTL support, and consistent hashing.',
    html_url: '#',
    homepage: null,
    stargazers_count: 73,
    forks_count: 9,
    language: 'Rust',
    topics: ['distributed-systems', 'caching', 'performance'],
  },
  {
    id: 6,
    name: 'api-gateway',
    description: 'A configurable API gateway with rate limiting, JWT auth, and request/response transformation middleware.',
    html_url: '#',
    homepage: '#',
    stargazers_count: 98,
    forks_count: 19,
    language: 'Go',
    topics: ['api-gateway', 'microservices', 'kubernetes'],
  },
]

export async function getRepos(): Promise<Repo[]> {
  const username = process.env.GITHUB_USERNAME
  if (!username) return PLACEHOLDER_REPOS

  try {
    const headers: HeadersInit = {}
    if (process.env.GH_API_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GH_API_TOKEN}`
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=12&type=owner`,
      { headers, cache: 'force-cache' },
    )

    if (!res.ok) return PLACEHOLDER_REPOS

    const data: (Repo & { fork: boolean })[] = await res.json()
    return data.filter((r) => !r.fork).slice(0, 9)
  } catch {
    return PLACEHOLDER_REPOS
  }
}
