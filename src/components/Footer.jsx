import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">{t.nav.home}</Link>
        <Link to="/about">{t.nav.about}</Link>
        <Link to="/divisions">{t.nav.divisions}</Link>
        <Link to="/events">{t.nav.events}</Link>
        <Link to="/join">{t.nav.join}</Link>
        <a href="https://x.com/VertexUTokyo" target="_blank" rel="noopener noreferrer">
          𝕏 Twitter
        </a>
      </div>
      <p className="footer-copy">{t.footer.copyright}</p>
    </footer>
  );
}
