'use client'
import { useInView } from '@/hooks/useInView'
import type { Repo } from '@/lib/github'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

export default function Projects({ repos }: { repos: Repo[] }) {
  const { ref, inView } = useInView()

  return (
    <section id="projects" ref={ref} className={`py-20 px-6 fade-up ${inView ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Featured Work" title="Recent Projects" />

        <p className="text-gray-600 mt-4 mb-12 max-w-2xl">
          A selection of projects I've built recently. Most are open source—check them out on GitHub to see the full code and contribute if you'd like.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  )
}
