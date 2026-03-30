export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Quant Finance at UTokyoとは
          </h1>
          <p className="section-desc">
            東大の学科を越えた、金融系キャリアコミュニティ
          </p>
        </div>
      </section>

      <div className="about-content">
        <h2 className="fade-in" style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          ミッション
        </h2>
        <p className="fade-in">
          東京大学には、クオンツやアクチュアリーといった金融専門職に必要な
          数理的素養を持つ学生が多く在籍しています。
          しかし、金融キャリアに関する<strong>就活・インターン情報は学科ごとに分断</strong>されており、
          同じ金融キャリアを目指していても、学科が違えば
          得られる情報に大きな差が生まれているのが現状です。
        </p>

        <div className="highlight-box fade-in">
          <p>
            Quant Finance at UTokyoは、この<strong>情報の非対称性を解消</strong>し、
            学科の壁を越えて金融キャリアに関する情報を共有するために
            2026年3月に設立されたコミュニティです。
          </p>
        </div>

        <p className="fade-in">
          私たちが最も重視しているのは、<strong>就活・インターン情報の共有</strong>です。
          どの企業がいつ募集を開始するか、選考のタイムライン、
          インターンの応募時期——こうした情報を、
          学科横断で共有できる場を提供します。
        </p>

        <p className="fade-in">
          加えて、金融キャリアに関連する<strong>東大の授業情報</strong>や、
          国際コンペティションの情報共有、勉強会の開催なども
          今後進めていく予定です。
          まだ設立したばかりの小さなコミュニティですが、
          メンバーと一緒に育てていきたいと考えています。
        </p>

        <h2 className="fade-in" style={{ fontSize: '1.4rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          対象メンバー
        </h2>
        <p className="fade-in">
          クオンツ、アクチュアリー、投資銀行、アセットマネジメントなど、
          金融業界でのキャリアに興味のある東京大学の学部生・大学院生を歓迎しています。
          金融の事前知識は不要です。「金融に興味がある」という気持ちがあれば十分です。
        </p>

        <h2 className="fade-in" style={{ fontSize: '1.4rem', margin: '3rem 0 1.5rem', fontFamily: 'var(--font-display)', color: 'var(--gray-900)' }}>
          設立者
        </h2>

        <div className="founder-card fade-in">
          <h3>土岐 弦太郎（Gentaro TOKI）</h3>
          <div className="founder-title">
            東京大学 工学部 計数工学科 B3 ／ 大阪出身
          </div>
          <p>
            金融工学・統計学・量子情報に関心を持ち、
            数理的な視点から金融の世界を探求しています。
            プログラミングを活用したデータ分析や数理モデリングに取り組む傍ら、
            語学学習を趣味として続けており、現在は第5外国語を学習中です。
          </p>
          <p>
            このコミュニティを設立したのは、金融キャリアに関する情報が
            学科ごとに閉じていることへの課題感からです。
            自分自身が情報を集める中で感じた「もっと横のつながりがあれば」という思いを形にしました。
            将来的には、東大から世界の金融業界へ挑戦する学生が
            最良の情報と仲間を得られるコミュニティに育てていきたいと考えています。
          </p>
          <div className="founder-interests">
            <span>金融工学</span>
            <span>統計学</span>
            <span>量子情報</span>
            <span>プログラミング</span>
            <span>多言語学習</span>
          </div>
        </div>
      </div>
    </>
  );
}
