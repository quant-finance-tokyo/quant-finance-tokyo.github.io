import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

export default function Resources() {
  const { t } = useLang();
  const r = t.resources;

  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">{r.title}</h1>
          <p className="section-desc">{r.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="resource-grid">
          <div className="resource-card fade-in">
            <h3>{r.books}</h3>
            <ul>
              <li>Williams — <em>Probability with Martingales</em></li>
              <li>Hull — <em>Options, Futures, and Other Derivatives</em></li>
              <li>Bishop — <em>Pattern Recognition and Machine Learning</em></li>
              <li><em>Heard on the Street</em></li>
              <li><em>Fifty Challenging Problems in Probability</em></li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>{r.programming}</h3>
            <ul>
              <li>Python — NumPy, pandas, scikit-learn</li>
              <li>C++ — <a href="https://atcoder.jp" target="_blank" rel="noopener noreferrer">AtCoder</a></li>
              <li>SQL</li>
              <li><a href="https://quantconnect.com" target="_blank" rel="noopener noreferrer">QuantConnect</a></li>
              <li><a href="https://worldquantbrain.com" target="_blank" rel="noopener noreferrer">WorldQuant BRAIN</a></li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>{r.competitions}</h3>
            <ul>
              <li><a href="https://www.worldquant.com/brain/iqc/" target="_blank" rel="noopener noreferrer">WorldQuant IQC</a></li>
              <li><a href="https://prosperity.imc.com" target="_blank" rel="noopener noreferrer">IMC Prosperity</a></li>
              <li><a href="https://www.citadel.com/careers/programs-and-events/terminal/" target="_blank" rel="noopener noreferrer">Citadel Terminal</a></li>
              <li><a href="https://www.citadel.com/careers/programs-and-events/datathons/" target="_blank" rel="noopener noreferrer">Citadel Datathon</a></li>
              <li><a href="https://atcoder.jp" target="_blank" rel="noopener noreferrer">AtCoder</a></li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>{r.targets}</h3>
            <ul>
              <li><strong>Prop:</strong> Jane Street, Optiver, IMC, Five Rings</li>
              <li><strong>HF:</strong> Citadel, Two Sigma, DE Shaw</li>
              <li><strong>JP:</strong> Nomura, Daiwa, Mizuho, SMBC Nikko</li>
              <li><strong>Insurance:</strong> Life Insurance Actuary, Trust Banks</li>
              <li><strong>Tech:</strong> Google, Meta (ML/SWE)</li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>{r.courses}</h3>
            <ul>
              <li>Probability & Statistics</li>
              <li>Financial Engineering</li>
              <li>Optimization</li>
              <li>Machine Learning / Data Science</li>
              <li>Econometrics</li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>{r.sns}</h3>
            <ul>
              <li><a href="https://x.com/VertexUTokyo" target="_blank" rel="noopener noreferrer">𝕏 @VertexUTokyo</a></li>
              <li>Discord — Members only</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box fade-in" style={{ marginTop: '3rem' }}>
          <p>
            {r.discordNote}
            <Link to="/join" style={{ color: 'var(--blue-600)', marginLeft: '0.5rem' }}>{r.joinLink} &rarr;</Link>
          </p>
        </div>

        <div className="highlight-box-yellow fade-in" style={{ marginTop: '1rem' }}>
          <p>{r.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
