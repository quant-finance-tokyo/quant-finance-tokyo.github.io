import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/divisions">部門紹介</Link>
        <Link to="/events">Events</Link>
        <Link to="/join">入会する</Link>
        <a href="https://x.com/VertexUTokyo" target="_blank" rel="noopener noreferrer">
          𝕏 Twitter
        </a>
      </div>
      <p className="footer-copy">&copy; 2026 Quant Finance at UTokyo. All rights reserved.</p>
    </footer>
  );
}
