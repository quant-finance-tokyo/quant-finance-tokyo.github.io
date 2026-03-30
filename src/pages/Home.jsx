import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo-text fade-in-up">
            <span className="hero-logo-main">Quant Finance</span>
            <span className="hero-logo-sub">at UTokyo</span>
          </div>

          <div className="hero-since fade-in-up">{h.since}</div>

          <h1 className="fade-in-up">
            {h.heading1}<br />
            <span className="gradient-text">{h.heading2}</span>
          </h1>

          <p className="fade-in-up">{h.desc}</p>

          <div className="hero-buttons fade-in-up">
            <Link to="/join" className="btn-primary">{h.joinBtn} &rarr;</Link>
            <Link to="/about" className="btn-secondary">{h.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item fade-in-up">
          <div className="stat-number">3</div>
          <div className="stat-label">{h.statDivisions}</div>
        </div>
        <div className="stat-item fade-in-up">
          <div className="stat-number">6+</div>
          <div className="stat-label">{h.statDepts}</div>
        </div>
        <div className="stat-item fade-in-up">
          <div className="stat-number">2026</div>
          <div className="stat-label">{h.statFounded}</div>
        </div>
      </div>

      {/* What We Do */}
      <section className="section">
        <div className="section-header fade-in">
          <h2 className="section-title">{h.activityTitle}</h2>
          <p className="section-desc">{h.activityDesc}</p>
        </div>

        <div className="card-grid">
          <div className="card fade-in">
            <h3>{h.card1Title}</h3>
            <p>{h.card1Desc}</p>
            <div className="card-tag">CORE</div>
          </div>

          <div className="card fade-in">
            <h3>{h.card2Title}</h3>
            <p>{h.card2Desc}</p>
            <div className="card-tag">STUDY</div>
          </div>

          <div className="card fade-in">
            <h3>{h.card3Title}</h3>
            <p>{h.card3Desc}</p>
            <div className="card-tag">COMPETITION</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section fade-in-up">
        <h2>{h.ctaTitle}</h2>
        <p>{h.ctaDesc}</p>
        <Link to="/join" className="btn-primary">{h.ctaBtn} &rarr;</Link>
      </section>
    </>
  );
}
