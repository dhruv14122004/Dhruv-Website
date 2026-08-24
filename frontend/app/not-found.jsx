import Link from 'next/link'
import { FiAlertTriangle, FiHome, FiFileText, FiMap } from 'react-icons/fi'

export const metadata = {
  title: '404 Not Found — Dhruv Sharma Portfolio',
  description: 'The requested route was not found on imdhruv.tech. Explore available sitemap and agent documentation.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-black text-snow">
      <div className="panel max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 border border-lilac/20">
        {/* Header */}
        <div className="flex items-center gap-3 text-orange font-mono">
          <FiAlertTriangle size={24} className="shrink-0" />
          <span className="text-sm font-semibold tracking-wider uppercase">404 // ROUTE_NOT_FOUND</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-snow mb-2">
            Page Not Found
          </h1>
          <p className="text-mist text-sm leading-relaxed">
            The path you requested does not exist on <code className="text-lilac">imdhruv.tech</code>.
            If you are an automated agent or web crawler, use the machine-readable sitemap and documentation links below to recover.
          </p>
        </div>

        {/* Machine-Readable & Navigation Links */}
        <div className="flex flex-col gap-2 font-mono text-xs pt-2 border-t border-white/10">
          <span className="text-snow/70 font-medium uppercase tracking-wider mb-1">
            Available Endpoints & Sitemap:
          </span>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-orange/10 hover:text-orange text-snow transition-colors border border-white/5"
          >
            <FiHome size={14} />
            <span>/ (Homepage &amp; Interactive Portfolio)</span>
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-orange/10 hover:text-orange text-snow transition-colors border border-white/5"
          >
            <FiFileText size={14} />
            <span>/projects (Projects Archive &amp; Specs)</span>
          </Link>
          <Link
            href="/llms.txt"
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-orange/10 hover:text-orange text-snow transition-colors border border-white/5"
          >
            <FiFileText size={14} />
            <span>/llms.txt (Agent Instructions &amp; When-to-Use)</span>
          </Link>
          <Link
            href="/llms-full.txt"
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-orange/10 hover:text-orange text-snow transition-colors border border-white/5"
          >
            <FiFileText size={14} />
            <span>/llms-full.txt (Full Technical Context)</span>
          </Link>
          <Link
            href="/sitemap.xml"
            className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-orange/10 hover:text-orange text-snow transition-colors border border-white/5"
          >
            <FiMap size={14} />
            <span>/sitemap.xml (XML Sitemap Index)</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
