import { NextResponse } from 'next/server'

const KNOWN_PATHS = new Set([
  '/',
  '/projects',
  '/projects/',
  '/llms.txt',
  '/llms-full.txt',
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.ico',
])

export function middleware(request) {
  const { pathname } = request.nextUrl
  const accept = request.headers.get('accept') || ''
  const isMarkdownRequest = accept.toLowerCase().includes('text/markdown')

  // Ignore Next.js internal files and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    // For direct static files like /llms.txt or /llms-full.txt, set Vary and Content-Type
    const response = NextResponse.next()
    response.headers.set('Vary', 'Accept, Accept-Encoding')
    if (pathname === '/llms.txt' || pathname === '/llms-full.txt') {
      response.headers.set('Content-Type', 'text/markdown; charset=utf-8')
    }
    return response
  }

  const isKnownRoute = KNOWN_PATHS.has(pathname)

  // 1. Non-existent path handling (Agent-friendly 404)
  if (!isKnownRoute) {
    if (isMarkdownRequest) {
      const markdown404 = `# 404 Not Found\n\nThe requested path \`${pathname}\` does not exist on imdhruv.tech.\n\n## Available Resources & Sitemap\n- [Homepage](https://imdhruv.tech/)\n- [Projects Archive](https://imdhruv.tech/projects)\n- [Agent Instructions (llms.txt)](https://imdhruv.tech/llms.txt)\n- [Full Technical Context (llms-full.txt)](https://imdhruv.tech/llms-full.txt)\n- [XML Sitemap](https://imdhruv.tech/sitemap.xml)\n`
      return new NextResponse(markdown404, {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding',
        },
      })
    }
    // For HTML requests to unknown paths, let Next.js render app/not-found.jsx with 404 status
    const response = NextResponse.next()
    response.headers.set('Vary', 'Accept, Accept-Encoding')
    return response
  }

  // 2. Accept: text/markdown Content Negotiation for existing pages
  if (isMarkdownRequest) {
    const targetFile = pathname.includes('projects') ? '/llms-full.txt' : '/llms.txt'
    const response = NextResponse.rewrite(new URL(targetFile, request.url))
    response.headers.set('Content-Type', 'text/markdown; charset=utf-8')
    response.headers.set('Vary', 'Accept, Accept-Encoding')
    return response
  }

  // 3. Standard HTML response headers
  const response = NextResponse.next()
  response.headers.set('Vary', 'Accept, Accept-Encoding')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
