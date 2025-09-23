import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Navbar } from '@/components/Navbar'
import { cn } from '@/components/lib/utils'
import { useTheme } from '@/components/ThemeProvider'
import glitch from "@/assets/glitch.jpg"

function shouldShowGrain(currentTheme) {
    if (currentTheme == 'literary') {
        return true;
    } else {
        return false;
    }
}

const loadPosts = () => {
  const modules = import.meta.glob('@/assets/posts/*.mdx', { eager: true });
  
  return Object.entries(modules).map(([path, mod]) => {
    return {
      slug: (mod.meta && mod.meta.slug) || path.split('/').pop().replace('.mdx', ''),
      Component: mod.default,
      meta: mod.meta || {},
    };
  });
};

const posts = loadPosts();
console.log(posts); // should be an array of { slug, Component, meta }

function BlogPost({ children, className }) {
  const { currentTheme } = useTheme();
  
  const getFontFamily = () => {
    switch (currentTheme) {
      case 'literary':
        return 'var(--font-literary)';
      case 'cyber':
        return 'var(--font-cyber)';
      default:
        return 'Georgia, serif'; // fallback
    }
  };

  const shouldShowGrain = (theme) => {
    return theme === 'literary';
  };

  const fontFamily = getFontFamily();

  const styleElement = (
    <style>
      {`
        .blog-post-override h1,
        .blog-post-override h1[style],
        article.blog-post-override h1 {
          font-size: 36px !important;
          font-weight: bold !important;
          font-family: ${fontFamily} !important;
          margin-top: 32px !important;
          margin-bottom: 16px !important;
          line-height: 1.1 !important;
          display: block !important;
        }
        
        .blog-post-override h2,
        .blog-post-override h2[style],
        article.blog-post-override h2 {
          font-size: 30px !important;
          font-weight: bold !important;
          font-family: ${fontFamily} !important;
          margin-top: 32px !important;
          margin-bottom: 16px !important;
          line-height: 1.2 !important;
          display: block !important;
        }
        
        .blog-post-override h3,
        .blog-post-override h3[style],
        article.blog-post-override h3 {
          font-size: 24px !important;
          font-weight: bold !important;
          font-family: ${fontFamily} !important;
          margin-top: 24px !important;
          margin-bottom: 12px !important;
          line-height: 1.3 !important;
          display: block !important;
        }
        
        .blog-post-override p,
        .blog-post-override p[style],
        article.blog-post-override p {
          font-size: 18px !important;
          font-family: ${fontFamily} !important;
          margin-bottom: 24px !important;
          line-height: 1.75 !important;
        }
        
        .blog-post-override ul,
        .blog-post-override ul[style],
        article.blog-post-override ul {
          font-family: ${fontFamily} !important;
          font-size: 18px !important;
        }
        
        .blog-post-override ol,
        .blog-post-override ol[style],
        article.blog-post-override ol {
          font-family: ${fontFamily} !important;
          font-size: 18px !important;
        }
        
        .blog-post-override blockquote,
        .blog-post-override blockquote[style],
        article.blog-post-override blockquote {
          font-family: ${fontFamily} !important;
          font-size: 18px !important;
        }
        .blog-post-override ol,
        .blog-post-override ol[style],
        article.blog-post-override ol {
          font-family: ${fontFamily} !important;
          font-size: 18px !important;
          list-style-type: decimal !important;
          list-style-position: outside !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1rem !important;
        }

        .blog-post-override ul,
        .blog-post-override ul[style],
        article.blog-post-override ul {
          font-family: ${fontFamily} !important;
          font-size: 18px !important;
          list-style-type: disc !important;
          list-style-position: outside !important;
          padding-left: 1.5rem !important;
          margin-bottom: 1rem !important;
        }

        .blog-post-override li,
        .blog-post-override li[style],
        article.blog-post-override li {
          margin-bottom: 0.5rem !important;
          display: list-item !important;
        }

        .blog-post-override strong,
        .blog-post-override strong[style],
        article.blog-post-override strong {
          font-weight: bold !important;
          font-family: ${fontFamily} !important;
          color: var(--color-base-content) !important;
        }
        
        .blog-post-override em,
        .blog-post-override em[style],
        article.blog-post-override em {
          font-style: italic !important;
          font-family: ${fontFamily} !important;
          color: var(--color-base-content) !important;
        }
        
        /* Bold italic combination */
        .blog-post-override strong em,
        .blog-post-override em strong,
        article.blog-post-override strong em,
        article.blog-post-override em strong {
          font-weight: bold !important;
          font-style: italic !important;
          font-family: ${fontFamily} !important;
          color: var(--color-base-content) !important;
        }
      `}
    </style>
  );

  const components = {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    p: (props) => <p {...props} />,
    a: (props) => (
      <a
        style={{
          color: "var(--color-base-content)",
          textDecoration: "underline",
          transition: "colors 0.2s"
        }}
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        style={{
          color: "var(--color-base-content)",
          listStyleType: "disc",
          listStylePosition: "outside",
          marginBottom: "1rem",
          paddingLeft: "1.5rem"
        }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        style={{
          color: "var(--color-base-content)",
          listStyleType: "decimal",
          listStylePosition: "outside",
          marginBottom: "1rem",
          paddingLeft: "1.5rem"
        }}
        {...props}
      />
    ),
    li: (props) => (
      <li
        style={{
          marginBottom: "0.5rem",
        }}
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        style={{
          borderLeft: "4px solid var(--color-secondary)",
          paddingLeft: "1rem",
          fontStyle: "italic",
          margin: "1rem 0",
          color: "var(--color-base-content)"
        }}
        {...props}
      />
    ),
    code: (props) => (
      <code
        style={{
          backgroundColor: "var(--color-base-200)",
          padding: "0.125rem 0.25rem",
          borderRadius: "0.25rem",
          fontSize: "1rem",
          color: "var(--color-base-content)"
        }}
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        style={{
          backgroundColor: "var(--color-base-300)",
          padding: "1rem",
          borderRadius: "0.25rem",
          overflowX: "auto",
          marginBottom: "1.5rem",
          fontSize: "0.875rem",
          color: "var(--color-base-content)"
        }}
        {...props}
      />
    ),
      // Bold text support
    strong: (props) => (
      <strong
        style={{
          fontWeight: "bold",
          color: "var(--color-base-content)",
          fontFamily: "inherit" // inherits from parent element's font
        }}
        {...props}
      />
    ),
    em: (props) => (
      <em
        style={{
          fontStyle: "italic",
          color: "var(--color-base-content)",
          fontFamily: "inherit"
        }}
        {...props}
      />
    ),
  };

  return (
    <MDXProvider components={components}>
      {styleElement}
      {shouldShowGrain(currentTheme) && (
        <div className="relative">
          <div
            className="fixed top-0 left-0 w-[300%] h-[300%] opacity-5 pointer-events-none z-50"
            style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          />
        </div>
      )}
      <article
        className="blog-post-override"
        style={{ 
          color: "var(--color-base-content)",
          width: "100%",
          maxWidth: "none",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "6rem", // add top padding to account for navbar
          textAlign: "left"
        }}
      >
        {children}
      </article>
    </MDXProvider>
  );
}

export default BlogPost;

export function BlogPostPage() {
  const { slug } = useParams();
  const [Post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentTheme } = useTheme()

  useEffect(() => {
    console.log('Available slugs:', posts.map(p => p.slug));
    console.log('Current slug from route:', slug);

    if (!slug) {
      setError('No slug provided');
      setLoading(false);
      return;
    }

    const matchedPost = posts.find((p) => p.slug === slug);

    if (!matchedPost) {
      setError('Post not found');
      setPost(null);
    } else {
      setPost(() => matchedPost.Component);
      setError(null);
    }
    
    setLoading(false);
  }, [slug]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    
    if (error) {
      return <p>404 - {error}.</p>;
    }
    
    if (Post) {
      return <Post />;
    }
    
    return <p>No content available.</p>;
  };

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
      <BlogPost className="pt-20">
        {renderContent()}
      </BlogPost>
    </div>
  );
}