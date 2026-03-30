import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/divisions', label: 'Divisions' },
    { to: '/events', label: 'Events' },
    { to: '/resources', label: 'Resources' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <span>Quant Finance</span>
      </Link>

      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="メニュー">
        {open ? '✕' : '☰'}
      </button>

      <ul className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={location.pathname === l.to ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/join" className="navbar-cta" onClick={() => setOpen(false)}>
            Join
          </Link>
        </li>
      </ul>
    </nav>
  );
}
