import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const htmlPath = existsSync('out/index.html') ? 'out/index.html' : '.next/server/app/index.html'
const robotsPath = existsSync('out/robots.txt') ? 'out/robots.txt' : 'public/robots.txt'
const sitemapPath = existsSync('out/sitemap.xml') ? 'out/sitemap.xml' : 'public/sitemap.xml'

const [html, llmsTxt, llmsFullTxt] = await Promise.all([
  readFile(htmlPath, 'utf8'),
  readFile('public/llms.txt', 'utf8'),
  readFile('public/llms-full.txt', 'utf8'),
])

// 1. Verify exact 1 <h1> tag in raw pre-rendered HTML
assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, 'Raw HTML must contain exactly 1 <h1> tag')

// 2. Verify raw text length without JS > 500 characters
const plainText = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
assert.ok(plainText.length > 500, `Raw HTML text content length (${plainText.length}) should exceed 500 characters`)

// 3. Verify JSON-LD Schema Graphs
assert.match(html, /"@type":"Person"/, 'JSON-LD must include Person schema')
assert.match(html, /"@type":"WebSite"/, 'JSON-LD must include WebSite schema')
assert.match(html, /"@type":"ProfilePage"/, 'JSON-LD must include ProfilePage schema')
assert.match(html, /"alternateName":/, 'JSON-LD must include alternateName for brand discoverability')

// 4. Verify llms.txt and llms-full.txt presence and structure
assert.match(llmsTxt, /## When to Use This Site/, 'llms.txt must include "When to Use This Site" guidance')
assert.match(llmsFullTxt, /# Dhruv Sharma — Comprehensive AI & Backend Developer Profile/, 'llms-full.txt title check')

console.log('Static & Agentic readiness checks passed successfully.')
