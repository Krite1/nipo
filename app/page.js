import Link from 'next/link'
import { getPosts } from '../lib/getPosts'

export default async function Home() {
  const posts = await getPosts()

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Nipo — Blog Kimia</h2>
      <p className="mb-6 text-gray-700">Blog edukatif mengenai kimia — artikel singkat dan mudah dipahami.</p>
      <div className="grid gap-4">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <article className="p-4 border rounded-lg hover:shadow-sm">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <div className="text-sm text-gray-500">{p.date} · {p.author}</div>
              <p className="mt-2 text-gray-700">{p.content.slice(0, 140)}...</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
