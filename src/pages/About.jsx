import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {a.title}
          </h1>
          <p className="section-desc">{a.subtitle}</p>
        </div>
      </section>

      <div className="about-content">
        <h2 className="fade-in" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          {a.missionTitle}
        </h2>
        <p className="fade-in">
          {a.mission1}<strong>{a.mission1Bold}</strong>{a.mission1End}
        </p>

        <div className="highlight-box fade-in">
          <p>
            {a.highlight}<strong>{a.highlightBold}</strong>{a.highlightEnd}
          </p>
        </div>

        <p className="fade-in">
          {a.mission2}<strong>{a.mission2Bold}</strong>{a.mission2End}
        </p>

        <p className="fade-in">
          {a.mission3}<strong>{a.mission3Bold}</strong>{a.mission3End}
        </p>

        <h2 className="fade-in" style={{ fontSize: '1.4rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          {a.membersTitle}
        </h2>
        <p className="fade-in">{a.membersDesc}</p>

        <h2 className="fade-in" style={{ fontSize: '1.4rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          {a.founderTitle}
        </h2>

        <div className="founder-card fade-in">
          <h3>{a.founderName}</h3>
          <div className="founder-title">{a.founderRole}</div>
          <p>{a.founderDesc1}</p>
          <p>{a.founderDesc2}</p>
          <div className="founder-interests">
            {a.founderTags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </>
  );
}
