import { useState, useEffect, useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwra5s52emC-5xC8HF7hbtuQ5P_OhRGK97dcReLl85hxQelGCPtewo6pCidiUqMg_nH/exec';

function Math({ tex, display = false }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(tex, ref.current, { displayMode: display, throwOnError: false });
    }
  }, [tex, display]);
  return <span ref={ref} />;
}

export default function Join() {
  const { t, lang } = useLang();
  const j = t.join;

  const [form, setForm] = useState({
    name: '', email: '', affiliation: '', year: '',
    skills: '', contribution: '', examChoice: '', other: '',
  });
  const [pdfFile, setPdfFile] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
      setPdfFile(file);
    } else if (file) {
      alert(lang === 'ja' ? 'PDFファイル（5MB以下）を選択してください。' : 'Please select a PDF file (max 5MB).');
      e.target.value = '';
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert(lang === 'ja' ? '数理試験の回答PDFを添付してください。' : 'Please attach your exam answer PDF.');
      return;
    }
    setStatus('sending');
    try {
      const pdfBase64 = await fileToBase64(pdfFile);
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pdfFileName: pdfFile.name,
          pdfBase64: pdfBase64,
        }),
      });
      setStatus('success');
      setForm({ name: '', email: '', affiliation: '', year: '', skills: '', contribution: '', examChoice: '', other: '' });
      setPdfFile(null);
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
        {/* Steps */}
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

        {/* Exam Problems */}
        <div className="exam-section fade-in-up" id="exam">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
            {lang === 'ja' ? '数理試験問題' : 'Mathematics Screening Problems'}
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            {lang === 'ja'
              ? '以下の2問からいずれか1問を選択し、解答をPDFで提出してください。LaTeXでの作成を推奨します。'
              : 'Choose one of the following two problems and submit your solution as a PDF. We recommend using LaTeX.'}
          </p>

          <div className="exam-cards">
            <div className="exam-card">
              <div className="exam-card-header">
                <span className="exam-label">{lang === 'ja' ? '問題 A — 最適停止問題' : 'Problem A — Optimal Stopping'}</span>
              </div>
              <div className="exam-card-body">
                <p style={{ marginBottom: '0.75rem' }}>
                  {lang === 'ja'
                    ? <>公平な10面体サイコロ（出目は <Math tex="0, 1, \dots, 9" />）を何度でも振れる。出た目は得点に加算されるが、<strong>0 が出たらその時点で得点はすべて失われ、最終得点は 0</strong> になる。</>
                    : <>You may roll a fair 10-sided die (faces <Math tex="0, 1, \dots, 9" />) as many times as you like. Each roll is added to your score, but <strong>if you roll 0, you lose all points and your final score is 0</strong>.</>}
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  {lang === 'ja'
                    ? '各回の後で、もう1回振るか、やめて現在の得点を受け取るかを選べる。'
                    : 'After each roll, you may choose to roll again or stop and keep your current score.'}
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  {lang === 'ja'
                    ? <><strong>(1)</strong> 期待得点を最大にするには、どのような方針で止まるのが最適か。また、そのときの期待得点をおおよそ求めよ。</>
                    : <><strong>(1)</strong> What stopping strategy maximizes the expected score? Find the approximate expected score under that strategy.</>}
                </p>
                <p>
                  {lang === 'ja'
                    ? <><strong>(2)</strong> ただし、最初の1回だけは 0 を引いてもゲーム終了にならず、得点が 0 に戻るだけで続行できるとする。このとき、戦略はどう変わるか。</>
                    : <><strong>(2)</strong> Suppose that on the first roll only, rolling 0 does not end the game — your score simply resets to 0 and you continue. How does the optimal strategy change?</>}
                </p>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-card-header">
                <span className="exam-label">{lang === 'ja' ? '問題 B — 確率微分方程式' : 'Problem B — Stochastic Differential Equations'}</span>
              </div>
              <div className="exam-card-body">
                <p style={{ marginBottom: '0.75rem' }}>
                  {lang === 'ja'
                    ? <>資産価格 <Math tex="X_t" /> が幾何ブラウン運動</>
                    : <>Suppose the asset price <Math tex="X_t" /> follows a geometric Brownian motion</>}
                </p>
                <div className="exam-math">
                  <Math tex={String.raw`dX_t = \mu X_t \, dt + \sigma X_t \, dW_t`} display={true} />
                </div>
                <p style={{ marginTop: '0.75rem' }}>
                  {lang === 'ja'
                    ? <>に従うとする。伊藤の補題を用いて <Math tex={String.raw`Y_t = X_t^2`} /> の確率微分方程式を求め、その導出過程を示せ。</>
                    : <>Apply Itô's lemma to derive the stochastic differential equation for <Math tex={String.raw`Y_t = X_t^2`} />, showing the full derivation.</>}
                </p>
              </div>
            </div>
          </div>

          <p className="exam-note">
            {lang === 'ja'
              ? '※ 解答はLaTeXを用いて作成することが望ましいですが、手書きをスキャンしたPDFも受け付けます。'
              : '* Solutions prepared in LaTeX are preferred, but scanned handwritten PDFs are also accepted.'}
          </p>
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
                <input id="name" type="text" required placeholder={lang === 'ja' ? '山田 太郎' : 'Taro Yamada'}
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>

              <div className="form-group">
                <label htmlFor="email">{j.email} <span className="required">*</span></label>
                <input id="email" type="email" required placeholder="example@g.ecc.u-tokyo.ac.jp"
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: '0.2rem' }}>{j.emailNote}</span>
              </div>

              <div className="form-group">
                <label htmlFor="affiliation">{j.affiliation} <span className="required">*</span></label>
                <input id="affiliation" type="text" required
                  placeholder={lang === 'ja' ? '東京大学 工学部 計数工学科' : 'UTokyo, Faculty of Engineering, Math Engineering'}
                  value={form.affiliation} onChange={e => setForm({...form, affiliation: e.target.value})} />
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
                <label>
                  {lang === 'ja' ? '選択した問題' : 'Selected Problem'} <span className="required">*</span>
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label className={`exam-choice ${form.examChoice === 'A' ? 'selected' : ''}`}>
                    <input type="radio" name="examChoice" value="A" required
                      checked={form.examChoice === 'A'}
                      onChange={e => setForm({...form, examChoice: e.target.value})} />
                    {lang === 'ja' ? '問題 A（最適停止問題）' : 'Problem A (Optimal Stopping)'}
                  </label>
                  <label className={`exam-choice ${form.examChoice === 'B' ? 'selected' : ''}`}>
                    <input type="radio" name="examChoice" value="B"
                      checked={form.examChoice === 'B'}
                      onChange={e => setForm({...form, examChoice: e.target.value})} />
                    {lang === 'ja' ? '問題 B（確率微分方程式）' : 'Problem B (SDE)'}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pdf">
                  {lang === 'ja' ? '解答PDF' : 'Answer PDF'} <span className="required">*</span>
                </label>
                <input id="pdf" type="file" accept=".pdf" required onChange={handleFileChange}
                  style={{ padding: '0.75rem', background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '8px' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)', marginTop: '0.2rem' }}>
                  {lang === 'ja' ? 'PDF形式・5MB以下' : 'PDF format, max 5MB'}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="other">{j.other}</label>
                <textarea id="other" rows="2" placeholder={j.otherPlaceholder}
                  value={form.other} onChange={e => setForm({...form, other: e.target.value})} />
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
