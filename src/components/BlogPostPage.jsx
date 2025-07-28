import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Navbar } from '@/components/Navbar'
import { cn } from '@/components/lib/utils.js';

// Load all MDX files in the /posts directory
const posts = import.meta.glob('@/assets/posts/*.mdx')
console.log(posts)

function BlogPost({ children, className }) {
  const components = {
    h1: (props) => (
      <h1
        className="text-3xl font-bold mt-4 mb-2"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-semibold mt-6 mb-3"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-xl font-semibold mt-5 mb-2"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mb-4 leading-relaxed"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="underline hover:text-secondary transition-colors"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="list-disc list-inside mb-4"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal list-inside mb-4"
        style={{ color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 pl-4 italic my-4"
        style={{ borderColor: "var(--color-secondary)", color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-base-200 px-1 rounded text-sm"
        style={{ backgroundColor: "var(--color-base-200)", color: "var(--color-base-content)" }}
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="bg-base-300 p-4 rounded overflow-x-auto mb-6"
        style={{ backgroundColor: "var(--color-base-300)", color: "var(--color-base-content)" }}
        {...props}
      />
    ),
  };

  return (
    <MDXProvider components={components}>
      <article
        className={cn("prose prose-lg max-w-3xl mx-auto p-4", className)}
        style={{ color: "var(--color-base-content)" }}
      >
        {children}
      </article>
    </MDXProvider>
  );
}

export default BlogPost;


export function BlogPostPage() {
  const { slug } = useParams()
  const [Post, setPost] = useState(null)

  useEffect(() => {
    console.log('All available post paths:', Object.keys(posts))


    console.log('Current slug from route:', slug)
    const foundPath = Object.keys(posts).find((path) => {
      const filename = path.split('/').pop()
      return filename === `${slug}.mdx`
    })

    Object.keys(posts).forEach((path) => {
      const filename = path.split('/').pop()
      console.log(`Comparing ${filename} to ${slug}.mdx`)
    })

    if (!foundPath) {
      setPost(() => () => <p>404 - Post not found.</p>)
      return
    }

    posts[foundPath]().then((mod) => {
      setPost(() => mod.default)
    })
  }, [slug])

  return (
    <div className="min-h-screen bg-base-100 text-primary overflow-x-hidden">
      <Navbar />
      <BlogPost className='pt-20'>
        <div style={{ color: "var(--color-base-content)" }}>Test color text</div>
        {Post ? <Post /> : <p>Loading...</p>}
      </BlogPost>
    </div>
  )
}
