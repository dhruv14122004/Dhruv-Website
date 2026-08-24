import favicon from '../src/assets/favicon.webp'
import JsonLd from '../src/components/JsonLd'
import CustomCursor from '../src/components/CustomCursor'
import { projects } from '../src/data/projects'
import { person, SITE_URL } from '../src/data/site'
import '../src/index.css'

const title = 'Dhruv Sharma — AI & Scalable Backend Developer Portfolio'
const description = 'Dhruv Sharma is an AI and backend developer building scalable web platforms, intelligent systems, and reliable APIs. Explore his projects and experience.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    'Dhruv Sharma',
    'Dhruv Sharma Portfolio',
    'Dhruv Sharma AI Backend Developer',
    'imdhruv.tech',
    'Dhruv Sharma Jaipur',
    'Backend Developer Portfolio',
    'Agentic RAG Developer',
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  alternates: { canonical: '/' },
  icons: { icon: favicon.src },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Dhruv Sharma Portfolio',
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@nocapdhruv',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: person.name,
      jobTitle: person.jobTitle,
      url: SITE_URL,
      email: person.email.replace('mailto:', ''),
      sameAs: person.sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Dhruv Sharma Portfolio',
      alternateName: [
        'imdhruv.tech',
        'Dhruv Sharma Official Site',
        'Dhruv Sharma AI & Backend Developer',
      ],
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Dhruv Sharma — AI & Scalable Backend Developer Portfolio',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    ...projects.map((project) => ({
      '@type': 'SoftwareSourceCode',
      '@id': `${SITE_URL}/#${project.id}`,
      name: project.title,
      description: [project.description, project.achievement].filter(Boolean).join(' '),
      dateCreated: project.year,
      programmingLanguage: project.tags,
      codeRepository: project.github,
      url: project.demo && project.demo !== '#' ? project.demo : project.github,
      author: { '@id': `${SITE_URL}/#person` },
      mainEntityOfPage: `${SITE_URL}/#projects`,
    })),
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body>
        <CustomCursor />
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] pointer-events-none"></div>
        {children}
      </body>
    </html>
  )
}
