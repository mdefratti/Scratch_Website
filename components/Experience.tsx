'use client'
import { useInView } from '@/hooks/useInView'
import { experience } from '@/data/experience'
import SectionHeader from './SectionHeader'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" ref={ref} className={`py-20 px-6 bg-gray-50 fade-up ${inView ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Work History" title="Experience" />

        <div className="mt-12 space-y-8">
          {experience.map((job, i) => (
            <div
              key={i}
              className={`fade-up group pl-8 border-l-2 border-emerald-200 hover:border-emerald-500 transition-colors pb-8 ${
                inView ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />

              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                <p className="text-emerald-600 font-medium">{job.company}</p>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {job.start} – {job.end} · {job.location}
              </p>

              <ul className="space-y-2 text-gray-700 mb-4">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-emerald-500 mt-1">·</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border border-gray-300 text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
