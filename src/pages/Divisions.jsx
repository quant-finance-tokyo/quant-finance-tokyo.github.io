export default function Divisions() {
  return (
    <>
      <section className="about-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Divisions</div>
          <h1 className="section-title">部門紹介</h1>
          <p className="section-desc">
            3つの部門で、それぞれの金融キャリアに特化した情報を共有
          </p>
        </div>
      </section>

      <section className="section">
        <div className="division-card">
          <h3>📈 クオンツ部門</h3>
          <p>
            デリバティブプライシング、アルゴリズムトレーディング、
            リスク管理、クオンツリサーチなど、
            数理的手法を金融に応用する分野に興味のあるメンバー向け。
            Jane Street、Optiver、Citadel、Two Sigma等の
            海外プロップファーム・ヘッジファンドから、
            日系証券のクオンツ部門まで幅広くカバーします。
          </p>
          <div className="division-tags">
            <span>デリバティブ</span>
            <span>アルゴトレーディング</span>
            <span>マーケットメイキング</span>
            <span>クオンツリサーチ</span>
            <span>リスク管理</span>
          </div>
        </div>

        <div className="division-card">
          <h3>🔢 アクチュアリー部門</h3>
          <p>
            保険数理、年金数理、リスク評価など、
            アクチュアリー資格の取得を目指す方や、
            保険・年金業界でのキャリアに興味のあるメンバー向け。
            試験対策の情報共有や、業界の就活情報を集約します。
          </p>
          <div className="division-tags">
            <span>保険数理</span>
            <span>年金数理</span>
            <span>アクチュアリー試験</span>
            <span>ERM</span>
          </div>
        </div>

        <div className="division-card">
          <h3>💼 その他金融職部門</h3>
          <p>
            IBD、セールス＆トレーディング、アセットマネジメント、
            フィンテックなど、クオンツ・アクチュアリー以外の
            金融キャリアに興味のあるメンバー向け。
            幅広い金融業界の情報を共有します。
          </p>
          <div className="division-tags">
            <span>投資銀行</span>
            <span>S&T</span>
            <span>アセマネ</span>
            <span>フィンテック</span>
            <span>PE / VC</span>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            学科別チャンネル
          </h2>
          <p style={{ color: 'var(--white-dim)', lineHeight: 1.8, maxWidth: '700px' }}>
            Discordサーバーでは、部門別チャンネルに加えて学科別の雑談チャンネルも用意しています。
            同じ学科の仲間との交流や、授業・研究室の情報共有にご活用ください。
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
            {['計数工学', '物理工学', '経済金融', 'システム創成', '理情', '農学', 'その他'].map(d => (
              <span key={d} style={{
                padding: '0.4rem 0.8rem',
                background: 'rgba(201, 168, 76, 0.08)',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                borderRadius: '100px',
                fontSize: '0.85rem',
                color: 'var(--gold-300)'
              }}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
