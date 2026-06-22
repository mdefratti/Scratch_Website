import { getRepos } from '@/lib/github'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default async function Home() {
  const repos = await getRepos()
  return (
    <main>
      <Nav />
      <Hero />
      <Projects repos={repos} />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
