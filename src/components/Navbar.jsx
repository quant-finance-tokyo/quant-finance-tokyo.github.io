import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, t, toggleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/divisions', label: t.nav.divisions },
    { to: '/events', label: t.nav.events },
    { to: '/resources', label: t.nav.resources },
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
            {t.nav.join}
          </Link>
        </li>
        <li>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'ja' ? 'EN' : 'JP'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
