import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <>
      <section className="page-hero">
        <div className="section-header" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title">リソース</h1>
          <p className="section-desc">
            金融キャリアを目指すためのおすすめ教材・情報
          </p>
        </div>
      </section>

      <section className="section">
        <div className="resource-grid">
          <div className="resource-card fade-in">
            <h3>📖 おすすめ書籍</h3>
            <ul>
              <li>確率論 — Williams『Probability with Martingales』</li>
              <li>金融工学 — Hull『Options, Futures, and Other Derivatives』</li>
              <li>統計的学習 — Bishop『Pattern Recognition and Machine Learning』</li>
              <li>クオンツ面接 —『Heard on the Street』</li>
              <li>確率パズル —『Fifty Challenging Problems in Probability』</li>
            </ul>
          </div>

          <div className="resource-card fade-in">
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

          <div className="resource-card fade-in">
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

          <div className="resource-card fade-in">
            <h3>🎯 目指す就職先（参考）</h3>
            <ul>
              <li><strong>外資プロップ：</strong>Jane Street, Optiver, IMC, Five Rings</li>
              <li><strong>ヘッジファンド：</strong>Citadel, Two Sigma, DE Shaw</li>
              <li><strong>日系証券：</strong>野村, 大和, みずほ, SMBC日興</li>
              <li><strong>保険・年金：</strong>生保アクチュアリー, 信託銀行</li>
              <li><strong>テック：</strong>Google, Meta（ML/SWE枠）</li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>🏫 関連する東大の授業（参考）</h3>
            <ul>
              <li>確率統計 / 数理統計学</li>
              <li>金融工学関連科目</li>
              <li>最適化手法</li>
              <li>機械学習 / データサイエンス</li>
              <li>計量経済学</li>
            </ul>
          </div>

          <div className="resource-card fade-in">
            <h3>🔗 SNS・コミュニティ</h3>
            <ul>
              <li>
                <a href="https://x.com/VertexUTokyo" target="_blank" rel="noopener noreferrer">
                  𝕏 @VertexUTokyo
                </a>
                {' '}— 公式Twitter
              </li>
              <li>Discord — メンバー限定（入会後にアクセス可能）</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box fade-in" style={{ marginTop: '3rem' }}>
          <p>
            より詳細なリソース・就活タイムラインはDiscordサーバー内で共有しています。
            <Link to="/join" style={{ color: 'var(--blue-600)', marginLeft: '0.5rem' }}>入会はこちら &rarr;</Link>
          </p>
        </div>

        <div className="highlight-box-yellow fade-in" style={{ marginTop: '1rem' }}>
          <p>
            ※ 「目指す就職先」は、メンバーが関心を持つ企業の例です。
            コミュニティとしての実績や内定実績を示すものではありません。
          </p>
        </div>
      </section>
    </>
  );
}
