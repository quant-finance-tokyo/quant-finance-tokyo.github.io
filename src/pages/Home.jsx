import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="grid-bg" />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">東京大学 金融数理コミュニティ</div>
          <h1>
            学科を越えて、
            <br />
            <span className="gradient-text">金融キャリアを拓く。</span>
          </h1>
          <p>
            Quants Finance at UTokyoは、クオンツ・アクチュアリー・金融職を目指す
            東大生のための情報共有コミュニティです。
            就活・インターン情報を学科の壁を越えて共有し、
            一人ひとりのキャリアを加速させます。
          </p>
          <div className="hero-buttons">
            <Link to="/join" className="btn-primary">入会フォーム →</Link>
            <Link to="/about" className="btn-secondary">詳しく見る</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">部門</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">6+</div>
          <div className="stat-label">対象学科</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2026</div>
          <div className="stat-label">設立</div>
        </div>
      </div>

      {/* What We Do */}
      <section className="section">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">活動内容</h2>
          <p className="section-desc">
            学科内だけでは拾いきれない情報を、横のつながりで共有する
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-icon">📊</div>
            <h3>就活・インターン情報共有</h3>
            <p>
              クオンツ・アクチュアリー・金融職の選考タイムライン、
              募集情報、説明会の感想などを部門別に共有します。
            </p>
            <div className="card-tag">CORE</div>
          </div>

          <div className="card">
            <div className="card-icon">🏆</div>
            <h3>国際コンペへの参加</h3>
            <p>
              WorldQuant IQC、IMC Prosperity、Citadel Terminalなど、
              国際大会にチームで参加。実践的なスキルと実績を積みます。
            </p>
            <div className="card-tag">COMPETITION</div>
          </div>

          <div className="card">
            <div className="card-icon">📚</div>
            <h3>勉強会・輪読会</h3>
            <p>
              金融工学、確率論、機械学習など、
              キャリアに直結するトピックの勉強会を企画・開催します。
            </p>
            <div className="card-tag">STUDY</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">一緒にキャリアを切り拓こう。</h2>
        <p className="section-desc" style={{ marginBottom: '2rem' }}>
          学科・学年を問わず、金融キャリアに興味のある東大生を募集しています。
        </p>
        <Link to="/join" className="btn-primary">入会する →</Link>
      </section>
    </>
  );
}
