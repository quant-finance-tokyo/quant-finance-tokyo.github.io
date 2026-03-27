import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo-row fade-in-up">
            <svg className="hero-ginkgo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="ginkgo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#eab308'}} />
                  <stop offset="100%" style={{stopColor:'#ca8a04'}} />
                </linearGradient>
              </defs>
              <path d="M50 95 C50 95 50 60 50 55 C35 55 15 45 12 25 C10 15 20 5 50 15 C50 15 50 5 50 5 C50 5 50 15 50 15 C80 5 90 15 88 25 C85 45 65 55 50 55 C50 60 50 95 50 95Z" fill="url(#ginkgo-grad)" opacity="0.9"/>
            </svg>
            <div className="hero-org-name">
              Quants Finance<br />at UTokyo
              <small>東京大学 金融キャリアコミュニティ</small>
            </div>
          </div>

          <div className="hero-badge fade-in-up">Since 2026</div>

          <h1 className="fade-in-up">
            学科を越えて、<br />
            <span className="gradient-text">金融キャリアを拓く。</span>
          </h1>

          <p className="fade-in-up">
            Quants Finance at UTokyoは、クオンツ・アクチュアリー・金融職を目指す
            東大生のための情報共有コミュニティです。
            就活・インターン情報、授業の情報、コンペティション情報を
            学科の壁を越えて共有し、一人ひとりのキャリアを加速させます。
          </p>

          <div className="hero-buttons fade-in-up">
            <a
              href="https://x.com/VertexUTokyo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              入会について &rarr;
            </a>
            <Link to="/about" className="btn-secondary">詳しく見る</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item fade-in-up">
          <div className="stat-number">3</div>
          <div className="stat-label">部門（予定）</div>
        </div>
        <div className="stat-item fade-in-up">
          <div className="stat-number">6+</div>
          <div className="stat-label">対象学科</div>
        </div>
        <div className="stat-item fade-in-up">
          <div className="stat-number">2026</div>
          <div className="stat-label">設立</div>
        </div>
      </div>

      {/* What We Do */}
      <section className="section">
        <div className="section-header fade-in">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">活動内容</h2>
          <p className="section-desc">
            設立したばかりのコミュニティですが、以下の活動を進めています
          </p>
        </div>

        <div className="card-grid">
          <div className="card fade-in">
            <div className="card-icon">📊</div>
            <h3>就活・インターン情報共有</h3>
            <p>
              クオンツ・アクチュアリー・金融職の選考情報、
              募集タイムライン、説明会の感想などを
              学科を越えて共有します。
            </p>
            <div className="card-tag">CORE</div>
          </div>

          <div className="card fade-in">
            <div className="card-icon">📚</div>
            <h3>授業・勉強会情報の共有</h3>
            <p>
              金融キャリアに関連する東大の授業情報や、
              勉強会・輪読会を企画・開催していきます。
            </p>
            <div className="card-tag">STUDY</div>
          </div>

          <div className="card fade-in">
            <div className="card-icon">🏆</div>
            <h3>コンペティション情報共有</h3>
            <p>
              WorldQuant IQCやIMC Prosperityなどの
              国際コンペティションの情報を共有。
              今後チームでの参加も目指します。
            </p>
            <div className="card-tag">COMPETITION</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section fade-in-up">
        <h2>一緒にコミュニティを育てよう。</h2>
        <p>
          設立メンバーとして、学科・学年を問わず金融キャリアに興味のある東大生を募集しています。
        </p>
        <Link to="/join" className="btn-primary">入会について &rarr;</Link>
      </section>
    </>
  );
}
