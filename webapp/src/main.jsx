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

const container = document.getElementById('root');
if (!window.__SUPER_MAXAS_ROOT) {
  window.__SUPER_MAXAS_ROOT = createRoot(container);
}
window.__SUPER_MAXAS_ROOT.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
