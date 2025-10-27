import Image from 'next/image'
import { getPostBySlug } from '../../../lib/getPosts'

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return <div>Artikel tidak ditemukan</div>

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{post.date} · {post.author}</div>
      {post.image && (
        <div className="mb-4">
          <Image src={post.image} alt={post.title} width={900} height={400} className="rounded" />
        </div>
      )}
      <div className="prose max-w-none text-gray-800 whitespace-pre-wrap">{post.content}</div>
    </article>
  )
}
