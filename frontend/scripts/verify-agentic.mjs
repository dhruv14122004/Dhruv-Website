import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { middleware } from '../middleware.js'

console.log('--- Running Agentic Readiness Verification Suite ---')

// Test 1: Machine-readable agent files
const llmsTxt = await readFile('public/llms.txt', 'utf8')
assert.ok(llmsTxt.includes('## When to Use This Site'), 'llms.txt contains "When to Use This Site" header')
assert.ok(llmsTxt.includes('https://imdhruv.tech/projects'), 'llms.txt references /projects')
assert.ok(llmsTxt.includes('dhruv.sharma122004@gmail.com'), 'llms.txt contains email contact')

const llmsFullTxt = await readFile('public/llms-full.txt', 'utf8')
assert.ok(llmsFullTxt.includes('## When to Use This Context'), 'llms-full.txt contains guidance section')
assert.ok(llmsFullTxt.includes('Aerilon Tech'), 'llms-full.txt contains work experience details')

// Test 2: Middleware Accept Markdown Content Negotiation
const reqMarkdownHome = {
  nextUrl: new URL('https://imdhruv.tech/'),
  headers: new Map([['accept', 'text/markdown']]),
}
const resMarkdownHome = middleware(reqMarkdownHome)
assert.equal(resMarkdownHome.headers.get('Content-Type'), 'text/markdown; charset=utf-8')
assert.equal(resMarkdownHome.headers.get('Vary'), 'Accept, Accept-Encoding')

// Test 3: Middleware Agent-friendly 404
const reqMarkdown404 = {
  nextUrl: new URL('https://imdhruv.tech/some-nonexistent-path'),
  headers: new Map([['accept', 'text/markdown']]),
}
const resMarkdown404 = middleware(reqMarkdown404)
assert.equal(resMarkdown404.status, 404, 'Agent 404 must return HTTP status 404')
assert.equal(resMarkdown404.headers.get('Content-Type'), 'text/markdown; charset=utf-8')
assert.equal(resMarkdown404.headers.get('Vary'), 'Accept, Accept-Encoding')

// Test 4: Middleware standard HTML Vary header
const reqHtmlHome = {
  nextUrl: new URL('https://imdhruv.tech/'),
  headers: new Map([['accept', 'text/html']]),
}
const resHtmlHome = middleware(reqHtmlHome)
assert.equal(resHtmlHome.headers.get('Vary'), 'Accept, Accept-Encoding')

console.log('✓ All 5 Agentic Readiness audit priority checks verified successfully!')
