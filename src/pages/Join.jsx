import { useState } from 'react';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwglaxhUHej97v6XSeEZ7EOTLji2oXeQWx4eMWlC_lKJcmCT0vNe5zxUb1Z57myMird0g/exec';

export default function Join() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    interest: [],
    motivation: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const interests = ['クオンツ', 'アクチュアリー', '投資銀行', 'S&T', 'アセマネ', 'フィンテック', 'PE/VC', 'その他'];

  const handleInterest = (item) => {
    setForm(prev => ({
      ...prev,
      interest: prev.interest.includes(item)
        ? prev.interest.filter(i => i !== item)
        : [...prev.interest, item]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          interest: form.interest.join(', '),
        }),
      });
      setStatus('success');
      setForm({ name: '', email: '', department: '', year: '', interest: [], motivation: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            入会案内
          </h1>
          <p className="section-desc">
            金融キャリアに興味のある学生を歓迎します
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>
          入会の流れ
        </h2>
        <div className="join-steps three-steps">
          <div className="step-card fade-in-up">
            <div className="step-number">1</div>
            <h3>フォーム送信</h3>
            <p>下記の入会フォームに必要事項を記入して送信してください。</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">2</div>
            <h3>審査</h3>
            <p>運営にて内容を確認し、メールで結果をお送りします。</p>
          </div>
          <div className="step-card fade-in-up">
            <div className="step-number">3</div>
            <h3>入会・Discord参加</h3>
            <p>承認後、招待リンクをお送りします。Discordサーバーに参加して活動開始！</p>
          </div>
        </div>

        {/* 入会フォーム */}
        <div className="form-section fade-in-up" id="form">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
            入会フォーム
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            以下の項目を入力して送信してください。審査の上、ご連絡いたします。
          </p>

          {status === 'success' ? (
            <div className="form-success">
              <h3>送信完了しました</h3>
              <p>ご応募ありがとうございます。審査の上、メールにてご連絡いたします。</p>
              <button
                className="btn-secondary"
                onClick={() => setStatus('idle')}
                style={{ marginTop: '1rem' }}
              >
                もう一度送信する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-group">
                <label htmlFor="name">氏名 <span className="required">*</span></label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="山田 太郎"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="example@g.ecc.u-tokyo.ac.jp"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department">学科・専攻 <span className="required">*</span></label>
                  <input
                    id="department"
                    type="text"
                    required
                    placeholder="計数工学科"
                    value={form.department}
                    onChange={e => setForm({...form, department: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year">学年 <span className="required">*</span></label>
                  <select
                    id="year"
                    required
                    value={form.year}
                    onChange={e => setForm({...form, year: e.target.value})}
                  >
                    <option value="">選択してください</option>
                    <option value="B1">学部1年</option>
                    <option value="B2">学部2年</option>
                    <option value="B3">学部3年</option>
                    <option value="B4">学部4年</option>
                    <option value="M1">修士1年</option>
                    <option value="M2">修士2年</option>
                    <option value="D">博士課程</option>
                    <option value="Other">その他</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>興味のある分野（複数選択可）</label>
                <div className="interest-chips">
                  {interests.map(item => (
                    <button
                      key={item}
                      type="button"
                      className={`interest-chip ${form.interest.includes(item) ? 'selected' : ''}`}
                      onClick={() => handleInterest(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="motivation">志望動機・一言（任意）</label>
                <textarea
                  id="motivation"
                  rows="3"
                  placeholder="入会のきっかけや興味のあることなど"
                  value={form.motivation}
                  onChange={e => setForm({...form, motivation: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}
              >
                {status === 'sending' ? '送信中...' : '入会を申し込む'}
              </button>

              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>
                  送信に失敗しました。時間を置いて再度お試しください。
                </p>
              )}
            </form>
          )}
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
