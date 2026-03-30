import { useLang } from '../i18n/LanguageContext';

export default function Events() {
  const { t } = useLang();
  const e = t.events;

  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">{e.title}</h1>
          <p className="section-desc">{e.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="fade-in" style={{ fontSize: '1.35rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          {e.scheduleTitle}
        </h2>
        <div className="timeline">
          {e.timeline.map((item, i) => (
            <div key={i} className="timeline-item fade-in">
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="fade-in" style={{ fontSize: '1.35rem', margin: '4rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          {e.compTitle}
        </h2>
        <p className="fade-in" style={{ color: 'var(--gray-500)', marginBottom: '2rem', lineHeight: 1.8 }}>
          {e.compDesc}
        </p>
        <div className="card-grid">
          <div className="card fade-in">
            <h3>WorldQuant IQC</h3>
            <p>{e.wqDesc}</p>
            <a href="https://www.worldquant.com/brain/iqc/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>
              {e.details} &rarr;
            </a>
          </div>

          <div className="card fade-in">
            <h3>IMC Prosperity</h3>
            <p>{e.imcDesc}</p>
            <a href="https://prosperity.imc.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>
              {e.details} &rarr;
            </a>
          </div>

          <div className="card fade-in">
            <h3>Citadel Terminal / Datathon</h3>
            <p>{e.citadelDesc}</p>
            <a href="https://www.citadel.com/careers/programs-and-events/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>
              {e.details} &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
