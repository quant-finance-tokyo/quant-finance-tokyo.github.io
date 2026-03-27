export default function Join() {
  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            入会案内
          </h1>
          <p className="section-desc">
            金融キャリアに興味のある東大生を歓迎します
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          入会の流れ
        </h2>
        <div className="join-steps">
          <div className="step-card fade-in-up">
            <div className="step-number">01</div>
            <h3>お問い合わせ</h3>
            <p>TwitterのDMまたはフォームからご連絡ください。</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">02</div>
            <h3>簡単な確認</h3>
            <p>運営にて内容を確認し、ご案内をお送りします。</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">03</div>
            <h3>Discord参加</h3>
            <p>招待リンクからDiscordサーバーに参加！</p>
          </div>
        </div>

        <div className="fade-in-up" style={{ textAlign: 'center', margin: '3rem 0' }}>
          <a
            href="https://x.com/VertexUTokyo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
          >
            𝕏 DMで入会について問い合わせる &rarr;
          </a>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', marginTop: '1rem' }}>
            @VertexUTokyo にDMをお送りください
          </p>
        </div>

        <h2 className="fade-in" style={{ fontSize: '1.3rem', margin: '4rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          よくある質問
        </h2>

        <div className="faq-item fade-in">
          <h3>Q. 金融の知識がなくても入れますか？</h3>
          <p>
            はい、もちろんです。金融の事前知識は不要です。
            金融キャリアに興味がある方であれば歓迎します。
          </p>
        </div>

        <div className="faq-item fade-in">
          <h3>Q. 東大生以外でも参加できますか？</h3>
          <p>
            東大生を中心に運営していますが、他大学の方も歓迎しています。
            入会時に簡単な審査がありますので、あらかじめご了承ください。
          </p>
        </div>

        <div className="faq-item fade-in">
          <h3>Q. どの学科・専攻が対象ですか？</h3>
          <p>
            学科・専攻は問いません。計数工学、物理工学、経済学部金融学科、
            システム創成、理情、農学部など、どの学科からでも参加できます。
          </p>
        </div>

        <div className="faq-item fade-in">
          <h3>Q. 活動頻度はどのくらいですか？</h3>
          <p>
            Discordでの情報共有は常時行っています。
            勉強会や食事会は不定期で企画予定です。
            強制参加のものはなく、自分のペースで関われます。
          </p>
        </div>

        <div className="faq-item fade-in">
          <h3>Q. 会費はかかりますか？</h3>
          <p>
            無料です。会費は一切かかりません。
          </p>
        </div>
      </section>
    </>
  );
}
