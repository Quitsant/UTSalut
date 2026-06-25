import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer2 from './components/footer2'
import Dashboard from './pages/dashboard'
import Feature1 from './pages/feature1'

function ScrollAnimate({ children }: { children: React.ReactNode }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.15 }); 

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

// --- APP UTAMA ---
function App() {

  // Auto Reset Webpage ke atas halaman
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Header />
    
      <ScrollAnimate>
        <Dashboard />
      </ScrollAnimate>

      <ScrollAnimate>
        <Feature1 />
      </ScrollAnimate>

      <Footer2 />
    </>
  )
}

export default App