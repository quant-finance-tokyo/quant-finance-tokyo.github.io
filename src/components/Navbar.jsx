import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/divisions', label: '部門紹介' },
    { to: '/events', label: 'Events' },
    { to: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <img src="/logo.png" alt="Logo" className="logo-mark-img" />
        <span>Quants Finance at UTokyo</span>
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
            入会する
          </Link>
        </li>
      </ul>
    </nav>
  );
}
