import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0npx1EH-f-VzBbCqXbDlgjQAxg7COud2W7KuLYnFMysmMCwjYuohF6Hy5N0gQ0I2l/exec';

export default function Join() {
  const { t } = useLang();
  const j = t.join;

  const [form, setForm] = useState({
    name: '', email: '', university: '', department: '',
    year: '', interest: [], skills: '', contribution: '', motivation: '',
  });
  const [status, setStatus] = useState('idle');

  const handleInterest = (item) => {
    setForm(prev => ({
      ...prev,
      interest: prev.interest.includes(item)
        ? prev.interest.filter(i => i !== item)
        : [...prev.interest, item]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interest: form.interest.join(', ') }),
      });
      setStatus('success');
      setForm({ name: '', email: '', university: '', department: '', year: '', interest: [], skills: '', contribution: '', motivation: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            {j.title}
          </h1>
          <p className="section-desc">{j.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <h2 className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          {j.flowTitle}
        </h2>
        <div className="join-steps three-steps">
          <div className="step-card fade-in-up">
            <div className="step-number">1</div>
            <h3>{j.step1Title}</h3>
            <p>{j.step1Desc}</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">2</div>
            <h3>{j.step2Title}</h3>
            <p>{j.step2Desc}</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">3</div>
            <h3>{j.step3Title}</h3>
            <p>{j.step3Desc}</p>
          </div>
        </div>

        {/* Form */}
        <div className="form-section fade-in-up" id="form">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
            {j.formTitle}
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            {j.formDesc}
          </p>

          {status === 'success' ? (
            <div className="form-success">
              <h3>{j.successTitle}</h3>
              <p>{j.successDesc}</p>
              <button className="btn-secondary" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>
                {j.successBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-group">
                <label htmlFor="name">{j.name} <span className="required">*</span></label>
                <input id="name" type="text" required placeholder="山田 太郎"
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>

              <div className="form-group">
                <label htmlFor="email">{j.email} <span className="required">*</span></label>
                <input id="email" type="email" required placeholder="example@g.ecc.u-tokyo.ac.jp"
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>

              <div className="form-group">
                <label htmlFor="university">{j.university} <span className="required">*</span></label>
                <input id="university" type="text" required placeholder="東京大学"
                  value={form.university} onChange={e => setForm({...form, university: e.target.value})} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department">{j.department} <span className="required">*</span></label>
                  <input id="department" type="text" required placeholder="計数工学科"
                    value={form.department} onChange={e => setForm({...form, department: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="year">{j.year} <span className="required">*</span></label>
                  <select id="year" required value={form.year}
                    onChange={e => setForm({...form, year: e.target.value})}>
                    <option value="">{j.yearPlaceholder}</option>
                    {Object.entries(j.years).map(([val, label]) => (
                      <option key={val} value={val}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>{j.interest}</label>
                <div className="interest-chips">
                  {j.interests.map(item => (
                    <button key={item} type="button"
                      className={`interest-chip ${form.interest.includes(item) ? 'selected' : ''}`}
                      onClick={() => handleInterest(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="skills">{j.skills} <span className="required">*</span></label>
                <textarea id="skills" rows="3" required placeholder={j.skillsPlaceholder}
                  value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} />
              </div>

              <div className="form-group">
                <label htmlFor="contribution">{j.contribution} <span className="required">*</span></label>
                <textarea id="contribution" rows="3" required placeholder={j.contributionPlaceholder}
                  value={form.contribution} onChange={e => setForm({...form, contribution: e.target.value})} />
              </div>

              <div className="form-group">
                <label htmlFor="motivation">{j.motivation}</label>
                <textarea id="motivation" rows="3" placeholder={j.motivationPlaceholder}
                  value={form.motivation} onChange={e => setForm({...form, motivation: e.target.value})} />
              </div>

              <button type="submit" className="btn-primary" disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                {status === 'sending' ? j.sending : j.submitBtn}
              </button>

              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>
                  {j.error}
                </p>
              )}
            </form>
          )}
        </div>

        <h2 className="fade-in" style={{ fontSize: '1.3rem', margin: '4rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          {j.faqTitle}
        </h2>

        {j.faq.map((item, i) => (
          <div key={i} className="faq-item fade-in">
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>
    </>
  );
}
