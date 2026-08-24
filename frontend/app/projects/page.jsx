import Link from 'next/link'
import KeyboardNavigation from '../../src/components/KeyboardNavigation'
import Projects from '../../src/components/Projects'
import Quote from '../../src/components/Quote'

export const metadata = {
  title: 'Projects — Dhruv Sharma',
  description: 'Explore all AI, backend, and full-stack software projects built by Dhruv Sharma.',
}

export const dynamic = 'force-static'

export default function ProjectsPage() {
  return (
    <>
      <KeyboardNavigation />
      <main className="min-h-screen relative pt-8 pb-10">
        <div className="site-container flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
            <Link
              href="/"
              className="btn-ghost text-xs font-mono inline-flex items-center gap-2 group transition-all hover:border-[var(--lilac)]"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
            </Link>
            <span className="font-mono text-xs text-mist uppercase tracking-widest">
              All Projects
            </span>
          </div>

          <Projects />
        </div>

        <Quote />
      </main>
    </>
  )
}
