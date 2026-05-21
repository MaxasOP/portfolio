import React from 'react'
import Hero from '../components/Hero'
import Scene from '../components/Scene'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <main>
      <div className="container hero-grid">
        <Hero />
        <Scene />
      </div>
      
      <section id="about">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-index">01</div>
            <div className="section-title-group">
              <div className="eyebrow">Origin story</div>
              <h2 className="section-title">Builder mindset with a coin-collector eye for detail.</h2>
              <p className="section-copy">I like pages that feel intentional, readable, and slightly magical - the kind of work where every block earns its place.</p>
            </div>
          </div>

          <div className="two-col">
            <article className="story-card reveal interactive">
              <p>I’m currently pursuing MBA Tech in Computer Engineering at NMIMS, Mumbai. My sweet spot sits between clean frontend execution and product thinking.</p>
              <p>If a motion, color, or word doesn’t improve the experience, I treat it like a hidden enemy and remove it.</p>

              <div className="orbital">
                <div className="mini-card"><span>01</span><strong>Clarity</strong><p>Make the path obvious before you add spectacle.</p></div>
                <div className="mini-card"><span>02</span><strong>Intent</strong><p>Every card should feel placed, not dropped randomly.</p></div>
                <div className="mini-card"><span>03</span><strong>Speed</strong><p>The site should move like a fast platforming run.</p></div>
              </div>
            </article>

            <aside className="timeline-item reveal interactive">
              <time>2025 - Present</time>
              <strong>Executive, PraNam Lifestyle</strong>
              <p>Building digital touchpoints, competitor analysis, and tracking footfall patterns and social engagement.</p>
              <time style={{ marginTop: '0.4rem' }}>2024 - 2025</time>
              <strong>Executive, 4C</strong>
              <p>Worked on market research, campaign execution, and data-backed decisions.</p>
              <time style={{ marginTop: '0.4rem' }}>2024 - Present</time>
              <strong>NMIMS, Mumbai</strong>
              <p>MBA Tech - Computer Engineering.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-index">02</div>
            <div className="section-title-group">
              <div className="eyebrow">Power-ups</div>
              <h2 className="section-title">A loadout built for product delivery.</h2>
              <p className="section-copy">I’m most useful where interface quality, technical clarity, and practical execution need to meet in the same stage.</p>
            </div>
          </div>

          <div className="skill-grid">
            <article className="skill-card reveal interactive">
              <div className="kicker">Frontend</div>
              <h3>Responsive interfaces</h3>
              <p>Motion polish, component discipline, and page systems that stay readable at speed.</p>
              <div className="meter-block"><div className="meter-label"><span>UI craft</span><span>High</span></div><div className="meter"><span style={{ width: '92%' }}></span></div></div>
              <div className="chip-row"><span className="chip">HTML</span><span className="chip">CSS</span><span className="chip">JavaScript</span><span className="chip">React</span></div>
            </article>

            <article className="skill-card reveal interactive">
              <div className="kicker">Programming</div>
              <h3>Practical code</h3>
              <p>Readable logic, dependable structure, and work that stays easy to extend later.</p>
              <div className="meter-block"><div className="meter-label"><span>Build power</span><span>Strong</span></div><div className="meter"><span style={{ width: '86%' }}></span></div></div>
              <div className="chip-row"><span className="chip">Java</span><span className="chip">Python</span><span className="chip">REST</span><span className="chip">Git</span></div>
            </article>

            <article className="skill-card reveal interactive">
              <div className="kicker">Business</div>
              <h3>Decision support</h3>
              <p>Research, brand thinking, and analysis that sharpen the direction before launch.</p>
              <div className="meter-block"><div className="meter-label"><span>Insight</span><span>Active</span></div><div className="meter"><span style={{ width: '79%' }}></span></div></div>
              <div className="chip-row"><span className="chip">Marketing</span><span className="chip">Research</span><span className="chip">Analytics</span><span className="chip">Strategy</span></div>
            </article>

            <article className="skill-card reveal interactive">
              <div className="kicker">Execution</div>
              <h3>Team momentum</h3>
              <p>Communication, collaboration, and keeping the whole run clean under pressure.</p>
              <div className="meter-block"><div className="meter-label"><span>Team play</span><span>Reliable</span></div><div className="meter"><span style={{ width: '88%' }}></span></div></div>
              <div className="chip-row"><span className="chip">Leadership</span><span className="chip">Communication</span><span className="chip">Collaboration</span><span className="chip">Problem solving</span></div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-index">03</div>
            <div className="section-title-group">
              <div className="eyebrow">Stages</div>
              <h2 className="section-title">Selected builds from the map.</h2>
              <p className="section-copy">Three projects, each with its own objective, from shipped builds to the current boss fight.</p>
            </div>
          </div>

          <div className="project-grid">
            {/* Project cards */}
            <ProjectCard
              level="1-1"
              title="CoreMatrix Fitness"
              kicker="Shipped build"
              copy="Fitness tracking platform focused on quick workflows, polished interactions, and dependable UI behavior for everyday use."
              href="https://github.com/MaxasOP/CoreMatrix-Fitness"
              extra={<div className="brick-run compact"><div className="block question"></div><div className="block"></div><div className="block question"></div><div className="block"></div></div>}
            />

            <ProjectCard
              level="2-2"
              title="BioMatrix Analyzer"
              kicker="Project"
              copy="Java-based analysis engine for biological datasets, designed with accuracy, performance, and maintainable architecture in mind."
              href="https://github.com/MaxasOP/BioMatrix-Analyzer"
              extra={<div className="pipe" style={{ position: 'static', width: '4.8rem', height: '4.4rem', marginLeft: 'auto' }}></div>}
            />

            <ProjectCard
              level="3-1"
              title="New build in progress"
              kicker="Work in progress"
              copy="A new product under development with an emphasis on interaction quality, speed, and a more distinctive visual voice."
              href="https://github.com/MaxasOP"
              extra={<div className="star" style={{ position: 'static', animationDuration: '2.1s' }}></div>}
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-head reveal">
            <div className="section-index">04</div>
            <div className="section-title-group">
              <div className="eyebrow">Warp pipe</div>
              <h2 className="section-title">Need a sharper build? Let’s launch it.</h2>
              <p className="section-copy">Open for internships, collaborations, and product-focused UI work where taste and execution both matter.</p>
            </div>
          </div>

          <div className="contact-grid">
            <article className="contact-card reveal interactive">
              <div className="kicker">Primary route</div>
              <strong>Email</strong>
              <p>Use this for proposals, collaborations, and direct project conversations.</p>
              <a className="tile-link primary" href="mailto:manaschauhan.ms@gmail.com">manaschauhan.ms@gmail.com</a>
            </article>

            <article className="contact-card reveal interactive">
              <div className="kicker">Social links</div>
              <strong>Connect</strong>
              <p>My public tracks for code, writing, and networked work.</p>
              <div className="contact-links">
                <a href="https://github.com/MaxasOP" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/MaxasOP</strong></a>
                <a href="https://www.linkedin.com/in/manas-chauhan-30777a329" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Manas Chauhan</strong></a>
                <a href="https://x.com/maxas0p" target="_blank" rel="noreferrer"><span>X / Twitter</span><strong>@maxas0p</strong></a>
              </div>
            </article>
          </div>
        </div>
      </section>

    </main>
  )
}
