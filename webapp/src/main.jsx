import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/super-maxas.css'
import App from './App.jsx'
import { initSuperMaxas } from './lib/super-maxas'

function Root() {
  useEffect(() => {
    initSuperMaxas()
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
