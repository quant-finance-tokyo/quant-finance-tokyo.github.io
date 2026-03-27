export default function Events() {
  return (
    <>
      <section className="about-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Events & Competitions</div>
          <h1 className="section-title">イベント・大会</h1>
          <p className="section-desc">
            勉強会の開催から国際大会への参加まで
          </p>
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          📅 今後の予定
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2026年3月</div>
            <h3>コミュニティ発足・Discord運用開始</h3>
            <p>LINEグループでの交流を経て、Discordサーバーでの本格運用を開始。</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2026年4月</div>
            <h3>新歓・メンバー募集</h3>
            <p>新学期に合わせた積極的なメンバー募集。各学科への告知を展開。</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2026年4月〜</div>
            <h3>IMC Prosperity 4 チーム参加</h3>
            <p>Pythonを使ったアルゴリズムトレーディングの国際大会にチームで挑戦。</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2026年 通年</div>
            <h3>WorldQuant IQC 2026</h3>
            <p>BRAINプラットフォーム上でアルファ構築に取り組む国際大会。3月〜9月。</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">企画中</div>
            <h3>初回勉強会・輪読会</h3>
            <p>テーマは調整中。メンバーの興味に合わせて企画予定。</p>
          </div>
        </div>

        <h2 style={{ fontSize: '1.5rem', margin: '4rem 0 2rem', fontFamily: 'var(--font-display)' }}>
          🏆 参加可能な国際大会
        </h2>
        <div className="card-grid">
          <div className="card">
            <h3>WorldQuant IQC</h3>
            <p>
              BRAINプラットフォーム上でアルファを構築。
              チーム制（1〜4人）、3ステージ勝ち上がり。
              賞金$100,000。決勝はシンガポール。
            </p>
            <div className="card-tag">登録受付中</div>
          </div>

          <div className="card">
            <h3>IMC Prosperity 4</h3>
            <p>
              仮想市場でPythonトレーディング。
              15日間のオンライン大会。
              賞金$50,000。登録締切 4/13。
            </p>
            <div className="card-tag">チュートリアル期間中</div>
          </div>

          <div className="card">
            <h3>Citadel Terminal</h3>
            <p>
              タワーディフェンス型アルゴリズム対戦。
              APAC大会は4/13〜4/20。
              賞金 + Citadel採用機会。
            </p>
            <div className="card-tag">APAC 応募締切 3/29</div>
          </div>

          <div className="card">
            <h3>Citadel Datathon</h3>
            <p>
              大規模データセットの分析コンペ。
              チーム制。Asia Datathon は随時開催。
              賞金 + 面接機会。
            </p>
            <div className="card-tag">年間通じて開催</div>
          </div>
        </div>
      </section>
    </>
  );
}
