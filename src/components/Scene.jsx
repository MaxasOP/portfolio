import React from 'react'
import '../styles/scene.css'

import clouds from '../assets/clouds.svg'
import flag from '../assets/flag.svg'
import hero from '../assets/hero.png'

export default function Scene() {
  // Importing assets ensures Vite/bundlers resolve correct runtime paths

  return (
    <aside className="scene-shell reveal tilt" aria-label="Game world preview">
      <div className="game-meta">
        <strong>LEVEL 1 / MAXAS KINGDOM</strong>
        <span>PRESS START</span>
      </div>
      <div className="scene interactive">
        <div className="scene-grid"></div>
        {/* Cloud artwork: imported from src/assets so bundler serves it correctly */}
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
