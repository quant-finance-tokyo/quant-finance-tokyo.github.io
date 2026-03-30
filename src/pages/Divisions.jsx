import { useLang } from '../i18n/LanguageContext';

export default function Divisions() {
  const { t } = useLang();
  const d = t.divisions;

  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">{d.title}</h1>
          <p className="section-desc">{d.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="highlight-box-yellow fade-in" style={{ marginBottom: '2.5rem' }}>
          <p>{d.notice}</p>
        </div>

        <div className="division-card fade-in">
          <div className="future-note">{d.futureNote}</div>
          <h3>{d.quant}</h3>
          <p>{d.quantDesc}</p>
          <div className="division-tags">
            {d.quantTags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="division-card fade-in">
          <div className="future-note">{d.futureNote}</div>
          <h3>{d.actuary}</h3>
          <p>{d.actuaryDesc}</p>
          <div className="division-tags">
            {d.actuaryTags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="division-card fade-in">
          <div className="future-note">{d.futureNote}</div>
          <h3>{d.other}</h3>
          <p>{d.otherDesc}</p>
          <div className="division-tags">
            {d.otherTags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="fade-in" style={{ marginTop: '3rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
            {d.channelsTitle}
          </h2>
          <p style={{ color: 'var(--gray-500)', lineHeight: 1.8, maxWidth: '700px' }}>
            {d.channelsDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {d.depts.map(dept => (
              <span key={dept} style={{
                padding: '0.4rem 0.8rem',
                background: 'var(--yellow-100)',
                border: '1px solid rgba(234, 179, 8, 0.25)',
                borderRadius: '100px',
                fontSize: '0.85rem',
                color: 'var(--gray-700)'
              }}>
                {dept}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
