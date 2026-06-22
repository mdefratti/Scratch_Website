'use client'
import { useInView } from '@/hooks/useInView'
import type { Repo } from '@/lib/github'

export default function ProjectCard({ repo }: { repo: Repo }) {
  const { ref, inView } = useInView()
  const langColor: Record<string, string> = {
    TypeScript: 'bg-blue-100 text-blue-700',
    Python: 'bg-yellow-100 text-yellow-700',
    Go: 'bg-cyan-100 text-cyan-700',
    Rust: 'bg-orange-100 text-orange-700',
    JavaScript: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <div
      ref={ref}
      className={`fade-up group p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 ${
        inView ? 'visible' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
          {repo.html_url === '#' ? (
            repo.name
          ) : (
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          )}
        </h3>
        {repo.language && (
          <span className={`text-xs font-medium px-2 py-1 rounded ${langColor[repo.language] || 'bg-gray-200 text-gray-700'}`}>
            {repo.language}
          </span>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
        {repo.description || 'No description available.'}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex gap-3">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
        {repo.homepage && repo.homepage !== '#' && (
          <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}
