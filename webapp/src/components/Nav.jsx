import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="nav-wrap">
        <Link className="brand" to="/" aria-label="Super Maxas home">
          <span className="brand-mark">MX</span>
          <span className="brand-copy">
            <strong>Super Maxas</strong>
            <span>Pixel quest portfolio</span>
          </span>
        </Link>

        <div className="nav-actions">
          <ul className="nav-links" id="navLinks">
            <li><Link to="/" data-route="home">Home</Link></li>
            <li><Link to="/about" data-route="about">About</Link></li>
            <li><Link to="/skills" data-route="skills">Skills</Link></li>
            <li><Link to="/projects" data-route="projects">Work</Link></li>
            <li><Link to="/contact" data-route="contact">Contact</Link></li>
          </ul>
          <a className="nav-cta" href="mailto:manaschauhan.ms@gmail.com">Start quest</a>
          <button className="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-controls="navLinks" aria-expanded="false">Menu</button>
        </div>
      </div>
    </nav>
  )
}
