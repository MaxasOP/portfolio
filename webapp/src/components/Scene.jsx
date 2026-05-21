import React from 'react'
import '../styles/scene.css'

export default function Scene() {
  // Use runtime asset paths so missing images do not break the dev server.
  // Prefer vector placeholders so the scene renders while real pixel PNGs are added
  const clouds = '/src/assets/clouds.svg'
  const flag = '/src/assets/flag.svg'
  const hero = '/src/assets/hero.png'

  return (
    <aside className="scene-shell reveal tilt" aria-label="Game world preview">
      <div className="game-meta">
        <strong>LEVEL 1 / MAXAS KINGDOM</strong>
        <span>PRESS START</span>
      </div>
      <div className="scene interactive">
        <div className="scene-grid"></div>
        {/* Cloud artwork: drop-in bitmap if present at /src/assets/clouds.png */}
        <img src={clouds} className="cloud one" alt="clouds" />
        <img src={clouds} className="cloud two" alt="clouds" />
        <div className="hill one"></div>
        <div className="hill two"></div>
        <div className="ground"></div>
        <div className="block-run">
          <div className="block question"></div>
          <div className="block"></div>
          <div className="block question"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block question"></div>
        </div>
        <div className="coin one"></div>
        <div className="coin two"></div>
        <div className="star"></div>
        {/* Flag and pipe artwork: replaceable via assets */}
        <img src={flag} className="flag" alt="flag" />
        <div className="pipe"></div>
        <img src={hero} className="hero-sprite" alt="hero" />
      </div>
      <div className="scene-grid-2" style={{ marginTop: '0.9rem' }}>
        <div className="metric">
          <span>Current quest</span>
          <strong>Frontend + motion</strong>
          <p>Building interfaces that feel playful without losing structure.</p>
        </div>
        <div className="metric">
          <span>Special move</span>
          <strong>Product-first</strong>
          <p>Turning clean layouts into useful, memorable experiences.</p>
        </div>
      </div>
    </aside>
  )
}
