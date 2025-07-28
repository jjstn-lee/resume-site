import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollList from '@/components/lightswind/scroll-list.tsx';
import { Navbar } from "@/components/Navbar.jsx";


const postFiles = import.meta.glob('/src/assets/posts/*.mdx', { as: 'raw' })

function parseFrontmatter(raw) {
  const frontmatterMatch = raw.match(/^---\n([\s\S]+?)\n---/)
  const metadata = {}

  if (frontmatterMatch) {
    const lines = frontmatterMatch[1].split('\n')
    for (const line of lines) {
      const [key, ...rest] = line.split(':')
      metadata[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '')
    }
  }

  return metadata
}


export function BlogIndex() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await Promise.all(
        Object.entries(postFiles).map(async ([path, loadRaw]) => {
          const raw = await loadRaw()
          const data = parseFrontmatter(raw)
          return {
            ...data,
            slug: data.slug || path.split('/').pop().replace(/\.mdx?$/, '')
          }
        })
      )

      loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

      setPosts(loadedPosts)
    }

    loadPosts()
  }, [])

  return (
    <div className="min-h-screen bg-base-100 text-primary overflow-x-hidden">
      <Navbar />  
      <main className="pt-20">
        <ScrollList
          data={posts}
          itemHeight={165} // or omit for default
          renderItem={(post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block border border-gray-200 rounded-xl p-4 mb-4 hover:bg-gray-50 transition"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
            </Link>
          )}
        />
      </main>
    </div>
  )
}

