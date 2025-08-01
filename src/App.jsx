import '@/index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '@/pages/Home.jsx';
import { ThemeProvider } from '@/components/ThemeProvider.jsx';
import { useState, useEffect } from "react";
import { BlogIndex } from '@/pages/BlogIndex';
import { BlogPostPage } from '@/components/BlogPostPage';

function App() {

  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'literary')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* <Route path="*" element={<NotFound />}/> */}
            {/* <Route path="*" element={<NotFound />}/> */}

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App
