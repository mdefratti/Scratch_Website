'use client'
import { useInView } from '@/hooks/useInView'
import { traits, techStack } from '@/data/skills'
import SectionHeader from './SectionHeader'

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" ref={ref} className={`py-20 px-6 fade-up ${inView ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="About Me" title="Skills & Traits" />

        <div className="mt-12 mb-16">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Personal Traits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {traits.map((trait, i) => (
              <div
                key={i}
                className={`fade-up p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:shadow-sm transition-all ${
                  inView ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{trait.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{trait.label}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Tech Stack</h3>
          <div className="space-y-6">
            {techStack.map((group, i) => (
              <div key={i} className={`fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${(i + 4) * 80}ms` }}>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
