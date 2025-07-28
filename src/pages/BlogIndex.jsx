import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollList from '@/components/lightswind/scroll-list'
import { Navbar } from "@/components/Navbar"
import { useTheme } from "@/components/ThemeProvider"
import glitch from "../assets/glitch.jpg"

const postFiles = import.meta.glob('@/assets/posts/*.mdx', { eager: true })

function shouldShowGrain(currentTheme) {
    if (currentTheme == 'literary') {
        return true;
    } else {
        return false;
    }
}

export const BlogIndex = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { currentTheme } = useTheme()

  useEffect(() => {
    const loadPosts = () => {
      try {
        setLoading(true)
        setError(null)
        
        const loadedPosts = Object.entries(postFiles).map(([path, mod]) => {
          try {
            const metadata = mod.meta || {}
            return {
              ...metadata,
              slug: metadata.slug || path.split('/').pop().replace(/\.mdx?$/, '')
            }
          } catch (err) {
            console.error(`Failed to process post at ${path}:`, err)
            return null
          }
        })

        // Filter out failed loads and sort by date
        const validPosts = loadedPosts
          .filter(post => post !== null)
          .sort((a, b) => {
            const dateA = a.date ? new Date(a.date) : new Date(0)
            const dateB = b.date ? new Date(b.date) : new Date(0)
            return dateB - dateA
          })

        setPosts(validPosts)
      } catch (err) {
        console.error('Failed to load posts:', err)
        setError('Failed to load blog posts')
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading posts...</p>
        </div>
      )
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )
    }

    if (posts.length === 0) {
      return (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">No blog posts found.</p>
        </div>
      )
    }

    return (
      <ScrollList
        data={posts}
        itemHeight={165}
        renderItem={(post, index) => (
          <Link
            key={post.slug || index}
            to={`/blog/${post.slug}`}
            className="block border border-gray-200 rounded-xl p-4 mb-4 hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold">{post.title || 'Untitled'}</h2>
            <p className="text-sm text-gray-500">{post.date || 'No date'}</p>
            <p className="text-gray-700">{post.summary || 'No summary available'}</p>
          </Link>
        )}
      />
    )
  }

  return (
    <div className="min-h-screen bg-base-100 text-primary overflow-x-hidden">
        <div className="relative">
          <div
              className="fixed top-0 left-0 w-[300%] h-[300%] opacity-5 pointer-events-none z-50"
              style={{
              backgroundImage: `url(${shouldShowGrain(currentTheme)
                  ? 'https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png'
                  : glitch
              })`,
                  backgroundRepeat: 'no-repeat',       // prevent tiling
                  backgroundSize: 'cover',              // stretch & crop to cover container
                  backgroundPosition: 'center center', // center the image nicely
            }}
          />
        </div>
      <Navbar />  
      <main className="pt-20">
        {renderContent()}
      </main>
    </div>
  )
}