export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">About Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Quants Finance at UTokyoとは
          </h1>
          <p className="section-desc">
            東大の学科を越えた、金融系キャリアコミュニティ
          </p>
        </div>
      </section>

      <div className="about-content">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
          ミッション
        </h2>
        <p>
          東京大学には、クオンツやアクチュアリーといった金融専門職に必要な
          数理的素養を持つ学生が多く在籍しています。
          しかし、金融キャリアに関する<strong>就活・インターン情報は学科ごとに分断</strong>されており、
          計数工学科や数理情報学専攻の学生が、経済学部金融学科やシステム創成学科と
          同じ情報にアクセスすることは容易ではありません。
        </p>

        <div className="highlight-box">
          <p>
            Quants Finance at UTokyoは、この<strong>情報の非対称性を解消</strong>し、
            学科の壁を越えて金融キャリアに関する情報を共有するコミュニティです。
          </p>
        </div>

        <p>
          私たちが最も重視しているのは、<strong>就活・インターン情報の共有</strong>です。
          どの企業がいつ募集を開始するか、選考のタイムライン、
          インターンの応募時期と優先度——こうした情報を、
          学科横断で共有できる場を提供します。
        </p>

        <p>
          数学やプログラミングの学習は個人でも進められますが、
          業界特有の就活情報は、コミュニティでなければ得られません。
          それこそがQuants Finance at UTokyoの存在意義です。
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          対象メンバー
        </h2>
        <p>
          クオンツ（デリバティブ、マーケットメイキング、リサーチ）、アクチュアリー、
          その他金融専門職に興味のある東京大学の学部生・大学院生を中心に、
          幅広く歓迎しています。金融の事前知識は不要です。
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)' }}>
          代表
        </h2>
        <p>
          <strong>Gentaro TOKI</strong><br />
          東京大学 工学部 計数工学科 B3<br />
          金融工学・機械学習・量子情報を専攻予定。語学が趣味で現在第5外国語学習中。
        </p>
      </div>

      <div style={{ height: '6rem' }} />
    </>
  );
}
