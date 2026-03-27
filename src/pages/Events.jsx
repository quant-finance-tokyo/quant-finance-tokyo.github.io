export default function Events() {
  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Events</div>
          <h1 className="section-title">イベント・今後の予定</h1>
          <p className="section-desc">
            勉強会や交流会を中心に、少しずつ活動を広げていきます
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="fade-in" style={{ fontSize: '1.35rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          今後の予定
        </h2>
        <div className="timeline">
          <div className="timeline-item fade-in">
            <div className="timeline-date">2026年3月</div>
            <h3>コミュニティ設立・Discord運用開始</h3>
            <p>Discordサーバーを開設し、情報共有を開始しました。</p>
          </div>
          <div className="timeline-item fade-in">
            <div className="timeline-date">2026年4月</div>
            <h3>新歓・メンバー募集</h3>
            <p>新学期に合わせた積極的なメンバー募集。各学科への告知を展開予定。</p>
          </div>
          <div className="timeline-item fade-in">
            <div className="timeline-date">2026年4月〜</div>
            <h3>勉強会・輪読会の開催</h3>
            <p>金融工学や確率論など、メンバーの関心に合わせたテーマで企画予定。</p>
          </div>
          <div className="timeline-item fade-in">
            <div className="timeline-date">不定期</div>
            <h3>交流会・食事会</h3>
            <p>メンバー同士の交流を深める食事会やカジュアルな交流イベント。</p>
          </div>
          <div className="timeline-item fade-in">
            <div className="timeline-date">将来的に</div>
            <h3>国際コンペティションへの参加</h3>
            <p>メンバーが増え体制が整い次第、チームでのコンペ参加を目指します。</p>
          </div>
        </div>

        <h2 className="fade-in" style={{ fontSize: '1.35rem', margin: '4rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          今後参加を検討しているコンペティション
        </h2>
        <p className="fade-in" style={{ color: 'var(--gray-500)', marginBottom: '2rem', lineHeight: 1.8 }}>
          以下のような国際的なクオンツ・データサイエンス系コンペティションへの参加を検討しています。
          興味のあるメンバーが集まり次第、チームを組んで挑戦したいと考えています。
        </p>
        <div className="card-grid">
          <div className="card fade-in">
            <h3>WorldQuant IQC</h3>
            <p>
              BRAINプラットフォーム上でアルファを構築する国際大会。
              チーム制（1〜4人）で、3ステージを勝ち上がります。
            </p>
            <a
              href="https://www.worldquant.com/brain/iqc/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}
            >
              詳細を見る &rarr;
            </a>
          </div>

          <div className="card fade-in">
            <h3>IMC Prosperity</h3>
            <p>
              仮想市場でPythonによるアルゴリズムトレーディングに挑戦する
              15日間のオンライン大会。
            </p>
            <a
              href="https://prosperity.imc.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}
            >
              詳細を見る &rarr;
            </a>
          </div>

          <div className="card fade-in">
            <h3>Citadel Terminal / Datathon</h3>
            <p>
              アルゴリズム対戦型のTerminalや、
              大規模データ分析のDatathonなど。
            </p>
            <a
              href="https://www.citadel.com/careers/programs-and-events/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', color: 'var(--blue-600)', textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}
            >
              詳細を見る &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
