import React from 'react'

export default function ProjectCard({ level, title, copy, kicker, href, extra }) {
  return (
    <article className="project reveal interactive">
      <div className="visual">
        <div className="level-number">{level}</div>
        <div className="level-art">
          {extra}
          <div className="tile-copy">{copy}</div>
        </div>
      </div>
      <div className="kicker">{kicker}</div>
      <h3>{title}</h3>
      <p>{copy}</p>
      <div className="tag-row"></div>
      {href && <a className="project-link" href={href} target="_blank" rel="noreferrer">View repository</a>}
    </article>
  )
}
