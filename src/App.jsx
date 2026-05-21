import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import { initSuperMaxas } from './lib/super-maxas'

function RouterSync() {
  const location = useLocation()
  useEffect(() => {
    // re-run legacy DOM wiring after route changes
    const cleanup = initSuperMaxas()
    // clean up listeners on component unmount
    return cleanup
  }, [location.pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <RouterSync />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
