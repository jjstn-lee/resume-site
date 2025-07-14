import '@/index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '@/pages/Home.jsx';
import { ThemeProvider } from '@/components/ThemeProvider.jsx';
import { useState, useEffect } from "react";

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
            {/* <Route path="*" element={<NotFound />}/> */}

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App
