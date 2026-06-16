import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ゲーム業界エンジニア転職ガイド｜職種・年収・進め方";
const DESCRIPTION =
  "ゲーム業界エンジニアの転職を徹底解説。Unity/Unreal Engine、サーバーサイド、XRなどの職種、求められるスキル、年収の考え方、ゲームに強いエージェントの選び方、30代・40代の戦略までガイドします。";

const toc = [
  { id: "conclusion", label: "結論：ゲーム業界転職はポートフォリオと専門性が鍵" },
  { id: "trend", label: "ゲーム業界の採用動向" },
  { id: "positions", label: "主要なエンジニアポジション" },
  { id: "skills", label: "活かせるスキル / 埋めるべきギャップ" },
  { id: "salary", label: "年収の考え方（公表データ）" },
  { id: "company-types", label: "主な企業タイプと具体例" },
  { id: "agents", label: "ゲームに強いエージェントの選び方" },
  { id: "steps", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const activeRows: [string, string][] = [
  ["C#/C++の実装力", "Unity（C#）・Unreal Engine（C++）の中核スキル。Web系のバックエンドにも転用しやすい"],
  ["リアルタイム・低遅延処理", "通信同期・パフォーマンスチューニングの経験は、ゲーム外でも希少価値が高い"],
  ["大規模トラフィック・インフラ", "ソーシャルゲームのサーバー運用経験は、Web系の高負荷システムでも評価される"],
  ["3D・グラフィックス・数学的素養", "シェーダーや描画最適化、XRなど専門領域で差別化できる"],
  ["プロダクト完成の経験", "リリースまでやり切った経験は、どの企業でも信頼につながる"],
];

const fillRows: [string, string][] = [
  ["プレイ可能なポートフォリオ", "Unity/UEで完成させた作品。コード品質・最適化・公開（itch.io等）まで示せると強い"],
  ["得意領域の明確化", "クライアント/サーバー/TA/XRのどこで勝負するかを定める"],
  ["最新トレンドの把握", "GDC・CEDEC等の情報から、技術的な議論ができる状態にする"],
  ["Web系へ広げる場合の基礎", "Go/Node.js・クラウド・CI/CDなど、サーバーサイドの一般技術を補強する"],
];

const positions: [string, string][] = [
  ["クライアントエンジニア", "Unity/Unreal Engineでのゲームクライアント開発（描画・UI・物理など）"],
  ["サーバーエンジニア", "Go/Node.js/Python等でのゲームサーバー・API・大規模インフラ開発"],
  ["テクニカルアーティスト（TA）", "シェーダー・エフェクト・制作パイプラインの開発で表現と効率を両立"],
  ["XRエンジニア", "VR/AR/MR向けのゲーム・コンテンツ開発。専門人材が不足しがち"],
];

const companyTypes: { title: string; desc: string; links: { name: string; href: string }[] }[] = [
  {
    title: "コンシューマー（家庭用）大手",
    desc: "据置・携帯機向けの開発を行う大手。高い技術水準と腰を据えた開発が特徴。長期的にプロダクトに関わりたい人に向く。",
    links: [
      { name: "任天堂", href: "/company/nintendo/" },
      { name: "ソニー", href: "/company/sony/" },
      { name: "バンダイナムコ", href: "/company/bandai-namco/" },
    ],
  },
  {
    title: "モバイル／ソーシャルゲーム",
    desc: "大規模トラフィックの運用やライブ運営が中心。サーバーサイドやインフラの経験が活きやすく、改善サイクルが速い。",
    links: [
      { name: "サイバーエージェント", href: "/company/cyberagent/" },
      { name: "DeNA", href: "/company/dena/" },
    ],
  },
];

const faqs = [
  {
    q: "ゲーム業界エンジニアの年収はどのくらいですか？",
    a: "職種・企業・経験で大きく幅があります。ゲーム職に限定した公的な平均値の公表は限られるため、当サイトでは断定を避けています。IT職全般の参考として、レバテック公表の年代別平均年収（2025年）では正社員SEの30代が約499万円、40代が約618万円です。大手のシニア層やテクニカルディレクターはこれより高いレンジも狙えますが、保証されるものではありません。",
  },
  {
    q: "ゲーム業界からWeb系に転職できますか？",
    a: "可能です。C#/C++の実装力、サーバーサイド（Go/Python）、大規模トラフィック処理やリアルタイム通信、パフォーマンスチューニングの経験はWeb系でも高く評価されます。これらは希少なスキルセットで、転職市場での選択肢は広いです。",
  },
  {
    q: "ゲーム業界の働き方は改善されていますか？",
    a: "長時間労働のイメージは根強いものの、ワークライフバランスやリモートワーク、フレックスを整備する企業は増えています。一方でリリース前の繁忙期には負荷が高まることもあります。働き方は企業差が大きいため、カジュアル面談や口コミで個別に確認するのが確実です。",
  },
  {
    q: "ゲーム業界未経験でも転職できますか？",
    a: "可能性はありますが、Unity/Unreal Engineで完成させた個人開発作品（ポートフォリオ）がほぼ必須です。itch.ioやストアに公開しておくと説得力が増します。Web系バックエンド経験者は、ゲームサーバー開発への転職が比較的しやすい傾向です。",
  },
  {
    q: "ゲーム業界で需要が高いスキルは何ですか？",
    a: "Unity（C#）、Unreal Engine（C++）が基本です。加えてサーバーサイド（Go/Node.js）、リアルタイム通信、シェーダープログラミング、XR、AI/ML（NPCの行動など）のスキルが求められます。どこか一つの専門性を深めると差別化しやすくなります。",
  },
  {
    q: "ゲーム業界に強い転職エージェントはどこですか？",
    a: "Geekly（ギークリー）はIT/Web/ゲーム業界に専門特化したエージェントで、ゲーム・エンタメ企業の求人に強みがあります。IT全般を広く見るならレバテックキャリアを併用し、求人と担当者を比較するのが基本です。複数登録で選択肢を広げましょう。",
  },
  {
    q: "ポートフォリオはどの程度作り込むべきですか？",
    a: "「最後までプレイできる」完成度が最重要です。そのうえで、応募先に合わせて得意分野（描画・サーバー・TAなど）が伝わる作りにし、コードをGitHubで公開、READMEで設計意図や工夫を説明できると評価が上がります。",
  },
  {
    q: "30代・40代でもゲーム業界に転職できますか？",
    a: "可能です。若手と同じポテンシャル枠ではなく、リードエンジニア・専門領域（サーバー/インフラ/TA/XR）・マネジメントなど、経験が活きるポジションを狙うのが現実的です。求人が絞られる年代ほど、非公開求人を持つエージェントの活用が効きます。",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function GamingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/industry/gaming/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "ゲーム業界エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ゲーム業界エンジニア転職ガイド｜職種・年収・進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | ゲーム業界のエンジニア転職市場を徹底分析</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          ゲーム業界はコンシューマー、モバイル、XR/メタバースと多様な領域で開発が続いています。リアルタイム処理、3Dグラフィックス、大規模インフラなど技術要求が高く、専門性とポートフォリオがものを言う世界です。
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          本記事では、ゲーム業界エンジニアの職種・採用動向、活かせるスキルと埋めるべきギャップ、年収の考え方、そしてゲームに強いエージェントの選び方までを解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）",
            "Geekly（株式会社Geekly）会社概要・公表値",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ゲーム業界転職はポートフォリオと専門性が鍵</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              ゲーム業界への転職は、技術力を「見える形」で示せるかで決まります。未経験ならポートフォリオ、経験者なら専門領域での実績が武器になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 職種はクライアント／サーバー／TA／XRに大別。どこで勝負するかを定める。</li>
              <li>② 未経験はUnity/UEの完成作品が事実上必須。Web系サーバー経験者は移行しやすい。</li>
              <li>③ ゲーム・エンタメに強いGeeklyなど専門エージェントの活用が効率的。</li>
            </ul>
          </div>
        </section>

        {/* 採用動向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム業界の採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本のゲーム企業はグローバル市場への展開を強めており、多言語対応やグローバルサーバー運用、海外プラットフォーム連携を担えるエンジニアの需要が見られます。また、Meta Quest や Apple Vision Pro などの普及を背景に、VR/ARやメタバース向けコンテンツの開発領域も広がっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            生成AIの活用も進み、コンテンツ生成やNPCの行動、プロシージャル生成などにAI/MLの知識を持つエンジニアが関わる場面が増えています。総じて、特定領域の専門性を持つエンジニアほど市場価値を出しやすい状況です。
          </p>
        </section>

        {/* ポジション */}
        <section id="positions" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要なエンジニアポジション</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム開発のエンジニア職は大きく4つに分かれます。自分の経験がどこに当てはまるか、どこを伸ばすかを意識しましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {positions.map(([title, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 whitespace-nowrap align-top">{title}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* スキル */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル / 埋めるべきギャップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム開発で培ったスキルは、業界内のキャリアアップにも、Web系など他業界への転身にも活きます。一方で、転職を成功させるために補強すべき点もあります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-bold text-emerald-800 mb-3 text-sm">活かせるスキル</p>
              <ul className="space-y-3">
                {activeRows.map(([k, v], i) => (
                  <li key={i} className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">{k}</span>
                    <br />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-800 mb-3 text-sm">埋めるべきギャップ</p>
              <ul className="space-y-3">
                {fillRows.map(([k, v], i) => (
                  <li key={i} className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">{k}</span>
                    <br />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            技術別の市場の攻め方は
            <Link href="/skill/unity/" className="text-petrol hover:underline">Unity転職ガイド</Link>
            ・
            <Link href="/skill/csharp/" className="text-petrol hover:underline">C#/.NET転職ガイド</Link>
            ・
            <Link href="/skill/go/" className="text-petrol hover:underline">Go転職ガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム職に限定した平均年収の公的な公表値は限られるため、当サイトでは断定を避け、IT職全般の公表データを参考値として示します。実際の提示額は職種・企業・経験で大きく変わります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代の平均年収（レバテック公表・2025年）", "約499万円"],
                  ["正社員SE 40代の平均年収（同）", "約618万円"],
                  ["年収1,000万円以上の割合 40代（同）", "12.67%"],
                  ["IT・通信の平均決定年収 2024年度（doda・2025年5月公表）", "486万円（前年度469万円）"],
                ].map(([label, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{label}</td>
                    <td className="px-4 py-3 text-petrol font-medium border-b border-slate-200 whitespace-nowrap">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            ※出典：レバテック公表の年代別平均年収（2025年）、doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）。ゲーム職固有の平均値ではなくIT職全般の参考値です。個別の年収を保証するものではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の詳しい考え方は
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がる？</Link>
            を参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと具体例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム企業はコンシューマー大手とモバイル／ソーシャル系で、求められる経験も開発文化も異なります。各社の採用情報や技術スタックは個別ページ（公開情報ベース）も参考にしてください。
          </p>
          <div className="space-y-4">
            {companyTypes.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((l, j) => (
                    <Link
                      key={j}
                      href={l.href}
                      className="text-xs font-medium text-petrol border border-[var(--line)] rounded-full px-3 py-1 hover:bg-petrol-soft"
                    >
                      {l.name} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲームに強いエージェントの選び方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム業界は専門性が高く、業界に精通した担当者がいるかどうかで提案の質が変わります。専門特化型と総合型を組み合わせるのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geekly（ギークリー）：IT/Web/ゲーム特化</h3>
              <p className="text-sm text-petrol-deep">
                株式会社Geekly（設立2011年8月・渋谷区）が運営するIT/Web/ゲーム業界専門のエージェント。提案スピードに強みがあり、実務経験者への提案数が多いとされます。公開求人は37,000件以上（2026年1月時点・非公開含め46,000件以上[2026年5月時点]の二次集計値）、年収アップ率は約81%・平均上昇額約76万円（2025年9月時点・公表値）とされています。ゲーム・エンタメ企業の求人を探す際の有力な選択肢です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア：IT全般＋ゲーム案件</h3>
              <p className="text-sm text-petrol-deep">
                IT/Web特化で高年収帯の求人比率が高いとされるエージェント。ゲームに限定せずIT全般を広く比較したい場合に、Geeklyと併用すると選択肢を広げられます。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mt-3">
            ※求人数・実績は調査時点の公表値・二次集計値です。最新情報は各社公式サイトをご確認ください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            各社の詳細は
            <Link href="/review/geekly/" className="text-petrol hover:underline">Geeklyの評判</Link>
            ・
            <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリアの評判</Link>
            、使い分けは
            <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用術</Link>
            を参考にしてください。
          </p>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ポートフォリオ作品を完成させる", desc: "Unity/Unreal Engineで実際にプレイできるゲームを開発する。完成度・コード品質・パフォーマンス最適化が見られる。" },
              { step: "2", title: "得意分野を明確にする", desc: "クライアント（描画・UI・物理）、サーバー（インフラ・API）、TA（シェーダー・エフェクト）、XRのいずれかに特化する。" },
              { step: "3", title: "業界トレンドを把握する", desc: "GDC講演やCEDEC資料、技術ブログで最新動向を学び、面接で技術的な議論ができる状態にする。" },
              { step: "4", title: "ゲームに強いエージェントに登録", desc: "Geekly（IT/Web/ゲーム特化）を軸に、IT全般のレバテックキャリアを併用。ポートフォリオの見せ方も相談する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層のゲームエンジニアは、若手と同じ土俵で実装速度を競うより、専門性・リード経験・マネジメントを軸にポジションを選ぶのが現実的です。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：専門領域で市場価値を高める</h3>
              <p className="text-sm text-petrol-deep">サーバー/インフラ、TA、XRなど一つの専門を深めると差別化しやすい。Web系への転身も視野に入れやすく、選択肢が広い時期。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：リード・マネジメントで勝負</h3>
              <p className="text-sm text-petrol-deep">リードエンジニア、テクニカルディレクター、開発マネジメントなど、チームを率いる経験が活きる。求人は絞られるため、非公開求人を持つエージェントの活用が鍵になる。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            年代別の戦略は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職ガイド</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職ガイド</Link>
            を参考にしてください。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ゲーム業界でキャリアアップを目指そう</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・エンタメに強いエージェントに相談して、年収アップと希望のポジションの可能性を探りましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Unity転職ガイド", href: "/skill/unity/" },
              { name: "C#/.NET転職ガイド", href: "/skill/csharp/" },
              { name: "Geeklyの評判", href: "/review/geekly/" },
              { name: "任天堂の転職難易度・年収", href: "/company/nintendo/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
