export default function Resources() {
  return (
    <>
      <section className="about-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Resources</div>
          <h1 className="section-title">リソース</h1>
          <p className="section-desc">
            金融キャリアを目指すためのおすすめ教材・情報
          </p>
        </div>
      </section>

      <section className="section">
        <div className="resource-grid">
          <div className="resource-card">
            <h3>📖 おすすめ書籍</h3>
            <ul>
              <li>確率論 — ウィリアムズ『Probability with Martingales』</li>
              <li>金融工学 — Hull『Options, Futures, and Other Derivatives』</li>
              <li>統計的学習 — Bishop『Pattern Recognition and Machine Learning』</li>
              <li>クオンツ面接 — 『Heard on the Street』</li>
              <li>確率パズル — 『Fifty Challenging Problems in Probability』</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>💻 プログラミング</h3>
            <ul>
              <li>Python — NumPy, pandas, scikit-learn</li>
              <li>C++ — 競プロ（AtCoder）でアルゴリズム力強化</li>
              <li>SQL — データ分析の基礎</li>
              <li>
                <a href="https://quantconnect.com" target="_blank" rel="noopener noreferrer">
                  QuantConnect
                </a>
                {' '}— バックテストプラットフォーム
              </li>
              <li>
                <a href="https://worldquantbrain.com" target="_blank" rel="noopener noreferrer">
                  WorldQuant BRAIN
                </a>
                {' '}— アルファ構築
              </li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>🏆 コンペティション</h3>
            <ul>
              <li>
                <a href="https://www.worldquant.com/brain/iqc/" target="_blank" rel="noopener noreferrer">
                  WorldQuant IQC
                </a>
              </li>
              <li>
                <a href="https://prosperity.imc.com" target="_blank" rel="noopener noreferrer">
                  IMC Prosperity
                </a>
              </li>
              <li>
                <a href="https://www.citadel.com/careers/programs-and-events/terminal/" target="_blank" rel="noopener noreferrer">
                  Citadel Terminal
                </a>
              </li>
              <li>
                <a href="https://www.citadel.com/careers/programs-and-events/datathons/" target="_blank" rel="noopener noreferrer">
                  Citadel Datathon
                </a>
              </li>
              <li>AtCoder — 競技プログラミング</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>🎓 オンライン学習</h3>
            <ul>
              <li>MIT OCW — Mathematics for Computer Science</li>
              <li>Coursera — Financial Engineering and Risk Management</li>
              <li>
                <a href="https://weblab.t.u-tokyo.ac.jp/lecture/course-list/financial-machin-learning/" target="_blank" rel="noopener noreferrer">
                  東大松尾研 金融ML講座
                </a>
              </li>
              <li>Khan Academy — Statistics & Probability</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>🏢 主な就職先企業</h3>
            <ul>
              <li><strong>外資プロップ：</strong>Jane Street, Optiver, IMC, Five Rings</li>
              <li><strong>ヘッジファンド：</strong>Citadel, Two Sigma, DE Shaw</li>
              <li><strong>日系証券：</strong>野村, 大和, みずほ, SMBC日興</li>
              <li><strong>保険・年金：</strong>生保アクチュアリー, 信託銀行</li>
              <li><strong>テック：</strong>Google, Meta（ML/SWE枠）</li>
            </ul>
          </div>

          <div className="resource-card">
            <h3>🔗 SNS・コミュニティ</h3>
            <ul>
              <li>
                <a href="https://x.com/VertexUTokyo" target="_blank" rel="noopener noreferrer">
                  𝕏 @VertexUTokyo
                </a>
                {' '}— 公式Twitter
              </li>
              <li>Discord — メンバー限定（入会後にアクセス可能）</li>
              <li>LINEグループ — 応物（計数物工）金融系</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box" style={{ marginTop: '3rem' }}>
          <p>
            💡 より詳細なリソース・就活タイムラインはDiscordサーバー内で共有しています。
            <a href="#/join" style={{ color: 'var(--cyan-400)', marginLeft: '0.5rem' }}>入会はこちら →</a>
          </p>
        </div>
      </section>
    </>
  );
}
