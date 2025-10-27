import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

const filePath = path.join(process.cwd(), 'data', 'posts.csv')

export async function getPosts() {
  const file = fs.readFileSync(filePath, 'utf8')
  const { data } = Papa.parse(file, { header: true })
  // Normalize: ensure keys exist and trim whitespace
  return data.filter(Boolean).map(p => ({
    title: p.title || '',
    slug: p.slug || '',
    date: p.date || '',
    author: p.author || '',
    category: p.category || '',
    image: p.image || '',
    content: p.content || ''
  })).filter(p => p.title)
}

export async function getPostBySlug(slug) {
  const posts = await getPosts()
  return posts.find(p => p.slug === slug) || null
}
