import React from 'react'
import PixelButton from './PixelButton'

export default function Hero({ title = ['SUPER', 'MAXAS'], eyebrow = 'World 1-1 / Super Maxas', lead }) {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="hero-title">
            <span>{title[0]}</span>
            <span className="accent">{title[1]}</span>
          </h1>
          <p className="hero-lead">{lead || 'A pixel-powered portfolio built like a side-scrolling adventure: bold blocks, crisp motion, and a layout that feels alive on every screen.'}</p>
          <div className="cta-row">
            <a href="/projects" className="button primary">
              <PixelButton title="Enter the stages" />
            </a>
            <a href="mailto:manaschauhan.ms@gmail.com" className="button">Warp pipe contact</a>
          </div>
          <div className="badge-row">
            <span className="badge">Frontend power-up</span>
            <span className="badge">Product combo</span>
            <span className="badge">Mumbai save file</span>
            <span className="badge">Open for missions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
