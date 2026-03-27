export default function Join() {
  return (
    <>
      <section className="join-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Join Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            入会案内
          </h1>
          <p className="section-desc">
            金融キャリアに興味のある東大生を歓迎します
          </p>
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: '1.3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          入会の流れ
        </h2>
        <div className="join-steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>フォーム提出</h3>
            <p>入会フォームに必要事項を記入して送信してください。</p>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>審査</h3>
            <p>運営にて内容を確認し、結果をメールでお送りします。</p>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Discord参加</h3>
            <p>承認後、招待リンクからDiscordサーバーに参加！</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrNFYS8D1Cr1kksK2tymVpF_uzOjn7Kl5kqd1qhmZld_Q4gA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1.05rem', padding: '1rem 2.5rem' }}
          >
            𝕏 DMで入会フォームを受け取る →
          </a>
          <p style={{ color: 'var(--white-dim)', fontSize: '0.85rem', marginTop: '1rem' }}>
            @VertexUTokyo にDMをお送りください。入会フォームのリンクをお返しします。
          </p>
        </div>

        <h2 style={{ fontSize: '1.3rem', margin: '4rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          よくある質問
        </h2>

        <div className="faq-item">
          <h3>Q. 金融の知識がなくても入れますか？</h3>
          <p>
            はい、もちろんです。金融の事前知識は不要です。
            数理系の素養があり、金融キャリアに興味がある方であれば歓迎します。
          </p>
        </div>

        <div className="faq-item">
          <h3>Q. 東大生以外でも参加できますか？</h3>
          <p>
            現在は東京大学の学部生・大学院生を中心に運営しています。
            他大の方の受け入れもしておりますが審査が若干厳しくなります。
          </p>
        </div>

        <div className="faq-item">
          <h3>Q. どの学科・専攻が対象ですか？</h3>
          <p>
            学科・専攻は問いません。計数工学、物理工学、数理情報学、
            経済学部金融学科、システム創成、理情、農学部など、
            金融に興味のある方ならどなたでも。
          </p>
        </div>

        <div className="faq-item">
          <h3>Q. 活動頻度はどのくらいですか？</h3>
          <p>
            Discordでの情報共有は常時行っています。
            勉強会やイベントは不定期で企画予定です。
            強制参加のものはありませんので、自分のペースで関わることができます。
          </p>
        </div>

        <div className="faq-item">
          <h3>Q. 会費はかかりますか？</h3>
          <p>
            無料です。会費は一切かかりません。
          </p>
        </div>
      </section>
    </>
  );
}
