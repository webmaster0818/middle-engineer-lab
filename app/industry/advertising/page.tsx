import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "広告業界からアドテック転職【30代40代エンジニアガイド】",
  description:
    "広告業界のエンジニアがアドテック（AdTech）領域へ転職する道筋を解説。活かせるスキル、埋めるギャップ、職種×企業タイプ、年収の考え方、進め方を30代40代視点で整理します。",
};

const skillTable = [
  ["広告配信の仕組みの理解（DSP/SSP/DMP）", "そのまま強み", "プラットフォーム間の商流を分かる人は限られ、アドテック企業で評価されやすい"],
  ["効果測定・トラッキング・レポーティングの実務", "そのまま強み", "計測設計やデータ定義の理解は移行後すぐ活きる"],
  ["大規模データ処理（SQL/分散処理）", "埋めるギャップ", "Spark/Flinkなど大量ログ処理の経験を補強したい求人が多い"],
  ["リアルタイム処理（Kafka等）", "埋めるギャップ", "入札・配信のストリーム処理を扱うポジションで問われやすい"],
  ["ML基礎（CTR予測・レコメンド）", "伸ばすと有利", "最適化・予測に関わるなら特徴量設計やモデル運用の理解が役立つ"],
  ["プライバシー関連技術の知識", "差別化要素", "Cookie代替・同意管理などの理解は新しい開発テーマで重宝される"],
];

const jobTypes = [
  ["アドテック開発（DSP/SSP/DMP）", "アドテックベンダー、プラットフォーマー", "配信・入札基盤の開発。広告商流の理解が直接活きる"],
  ["データエンジニア（広告データ基盤）", "アドテック、マーケテック企業", "広告ログのパイプライン・DWH構築。計測の実務知識が強み"],
  ["MLエンジニア（最適化・予測）", "アドテック、プラットフォーマー", "CTR予測・入札最適化。データ＋MLの素養が求められる"],
  ["プライバシー／計測領域", "アドテック、マーケテック", "Cookie代替・同意管理・クリーンルーム。新しいテーマで需要が見られる"],
];

const faqs = [
  {
    q: "広告業界の経験はアドテック転職で評価されますか？",
    a: "評価されやすい傾向があります。広告配信の仕組み（DSP/SSP/DMP）、メディアバイイング、効果測定の理解を持つエンジニアは、アドテック企業では持っている人が限られるためです。ただし求人によっては大規模データ処理やリアルタイム処理の経験を重視するため、評価されるかはポジションの要件次第です。職務経歴書では「広告商流の業務知識」と「自分が扱えるデータ基盤・言語」を分けて示すと伝わりやすくなります。",
  },
  {
    q: "広告業界からアドテックに移ると年収はどう考えればいいですか？",
    a: "提示額は企業・等級・役割で幅があるため、求人ごとに確認するのが前提です。市場の目安としては、レバテックが公表する年代別の正社員SE平均年収（2025年）で30代約499万円、40代約618万円という水準が参考になります。転職での増減は現職の水準と応募先の役割で決まるため、エージェント経由で提示レンジを把握し、年収交渉の材料を整理してもらうと判断しやすくなります。",
  },
  {
    q: "アドテック企業ではどんな技術が求められますか？",
    a: "求人により幅がありますが、大量の広告ログを扱うため大規模データ処理（SQL、分散処理）やリアルタイム処理（Kafka/Kinesis等）が挙がることが多く、最適化・予測に関わるポジションではMLの素養が問われます。高パフォーマンス処理でGo/Rustが使われることもあります。すべてを満たす必要はなく、現職の強い領域から狙うのが現実的です。",
  },
  {
    q: "サードパーティCookie規制でアドテックの将来は大丈夫ですか？",
    a: "サードパーティCookieを取り巻く環境は変化していますが、アドテック領域そのものがなくなるとは言えません。ファーストパーティデータの活用、コンテキストターゲティング、同意管理、クリーンルームなど、計測・配信を成り立たせる新しい技術テーマが生まれており、むしろエンジニアの取り組むべき課題が増えている側面があります。最新の規制・仕様は流動的なので、応募先がどの方向に投資しているかを面談で確認するとよいでしょう。",
  },
  {
    q: "30代・40代で広告からアドテックに転職するのは遅いですか？",
    a: "年齢だけで難しくなると断定はできません。広告商流や計測設計の業務知識は経験を積んだ層ほど厚く、そこを軸にすると30代・40代の強みになります。一方で大規模データ処理やリアルタイム処理の経験が薄い場合は、在職中にSQLや分散処理を学び、扱えるデータ規模を広げる準備が効果的です。求人要件と自分の経験のギャップを早めに把握するため、IT特化型エージェントで市場感を確認することをおすすめします。",
  },
  {
    q: "広告業界から転職しやすいIT職種はどれですか？",
    a: "広告商流の理解を活かしやすいのは、アドテック開発（DSP/SSP）、データエンジニア（広告データパイプライン）、MLエンジニア（CTR予測・最適化）、計測・プライバシー領域のポジションです。どれを狙うかは、自分が強いのが「業務知識」「データ基盤」「ML」のどこかで変わります。必須要件を満たせるものから応募するとミスマッチを減らせます。",
  },
  {
    q: "広告業界出身者に向いているエージェントはどこですか？",
    a: "アドテック・マーケテック企業の求人を多く扱うGeekly、IT特化で幅広い求人を持つレバテックキャリア、ハイクラス・スカウト型のビズリーチあたりが候補です。1社に絞らず2〜3社を併用し、提案される求人の傾向や担当者との相性を比較すると、自分の経験の市場評価を把握しやすくなります。",
  },
];

const related = [
  { name: "メディア業界からデジタルメディア転職", href: "/industry/media/" },
  { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
  { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
  { name: "30代エンジニアの転職年収", href: "/knowledge/salary-30s/" },
  { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

const toc = [
  ["conclusion", "結論：この転職の現実性"],
  ["trend", "広告のIT化・採用動向"],
  ["skills", "活かせるスキル／埋めるギャップ"],
  ["patterns", "転職パターン（職種×企業タイプ）"],
  ["salary", "年収の考え方"],
  ["companies", "主な企業タイプ"],
  ["howto", "転職の進め方"],
  ["mid-career", "30代・40代視点"],
  ["faq", "よくある質問"],
];

export default function AdvertisingPage() {
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
      <ArticleJsonLd title="広告業界からアドテック転職【30代40代エンジニアガイド】" description="広告業界のエンジニアがアドテック（AdTech）領域へ転職する道筋を解説。活かせるスキル、埋めるギャップ、職種×企業タイプ、年収の考え方、進め方を30代40代視点で整理します。" url="/industry/advertising/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "広告業界からアドテック転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">広告業界からアドテック転職【30代40代エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 広告の業務知識をアドテック領域で活かす</p>

        <p className="text-slate-600 leading-relaxed mb-4">プログラマティック広告、リテールメディア、配信連動広告などデジタル広告の領域は拡大と再編が続いています。広告配信の仕組みを理解するエンジニアは、データ基盤やリアルタイム処理のスキルを足すことでアドテック領域に移りやすくなります。本記事では、活かせる経験と埋めるべきギャップを30代・40代視点で整理します。</p>

        <DataNote surveyedAt="2026年6月" sources={["レバテック公表 年代別平均年収（2025年）", "doda（パーソルキャリア）決定年収レポート（2025年5月公表）", "厚生労働省 job tag", "経済産業省 IT人材需給に関する調査（2019年公表）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a></li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：この転職の現実性</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">広告配信の仕組みと計測の実務知識を持つエンジニアにとって、アドテック領域への転職は十分に狙えるルートです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・DSP/SSP/DMPや効果測定の理解は、アドテック企業で「分かる人」が限られるため差別化になりやすい。</li>
              <li>・求人の多くは大規模データ処理・リアルタイム処理の経験を求める。ここが主なギャップ。</li>
              <li>・30代・40代は業務知識の厚みが強み。データ基盤面の不足は在職中の学習で補える。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">市場規模など断定できない数値は本記事では扱いません。年収・需給の話は公的・公表データに基づく目安として後述します。</p>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広告のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">デジタル広告は配信・計測・最適化のいずれもソフトウェアで成り立っており、アドテック企業は継続的にエンジニアを採用しています。以下は公開情報からうかがえる一般的な傾向で、個別企業の状況は採用ページ等で確認が必要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">プライバシー対応という技術課題</h3>
              <p className="text-sm text-slate-600">サードパーティCookieを取り巻く変化を受け、ファーストパーティデータ活用、同意管理、クリーンルームなど新しい技術テーマが生まれ、これらに対応する開発の需要が見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リテールメディア・新しい配信面</h3>
              <p className="text-sm text-slate-600">小売の購買データを活用した広告プラットフォームや、配信連動広告（CTV含む）など、扱う配信面が広がっています。基盤を構築・運用するエンジニアの募集が見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">データ＋MLによる最適化</h3>
              <p className="text-sm text-slate-600">CTR予測やコンバージョン予測、入札最適化など、大規模データとMLを組み合わせる領域が中心的なテーマになっています。</p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">参考：IT人材全体については経済産業省「IT人材需給に関する調査」（2019年公表）が、2030年に最大約79万人のIT人材不足になり得るとの試算を示しています（あくまで2019年公表時点の試算）。</p>
        </section>

        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル／埋めるギャップ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-600">
                  <th className="px-4 py-3 font-medium">経験・スキル</th>
                  <th className="px-4 py-3 font-medium whitespace-nowrap">位置づけ</th>
                  <th className="px-4 py-3 font-medium">補足</th>
                </tr>
              </thead>
              <tbody>
                {skillTable.map(([s, pos, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-t border-slate-200 whitespace-nowrap align-top">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">「広告商流の業務知識」を前面に出しつつ、求人で求められるデータ基盤・処理基盤のうち自分が満たせるものを明確にすることがポイントです。強い領域から応募先を選ぶとミスマッチが減ります。</p>
        </section>

        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="space-y-3">
            {jobTypes.map(([role, type, note], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-slate-800">{role}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{type}</span>
                </div>
                <p className="text-sm text-slate-600">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">個別ポジションの提示額は企業・等級・役割で大きく変わるため、ここでは公表データを目安として示します。実際のレンジは求人ごとに確認してください。</p>
          <ul className="space-y-3 text-sm text-slate-700 mb-4">
            <li className="bg-white border border-slate-200 rounded-lg p-4">レバテックが公表する正社員SEの年代別平均年収（2025年）は、20代約378万円／30代約499万円／40代約618万円／50代約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。</li>
            <li className="bg-white border border-slate-200 rounded-lg p-4">doda（パーソルキャリア）「決定年収レポート」（2025年5月公表）では、IT・通信の平均決定年収が2023年度469万円→2024年度486万円。転職者の約6割が年収アップという結果が示されています。</li>
            <li className="bg-white border border-slate-200 rounded-lg p-4">厚生労働省 job tag では、システムエンジニア（受託開発）の平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）と示されています。</li>
          </ul>
          <p className="text-slate-500 text-xs leading-relaxed">上記は職種・媒体横断の平均値であり、アドテック領域に限った数値ではありません。自分の現年収と応募先の提示レンジを並べて判断するのが基本です。</p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">アドテック領域の受け皿は、おおまかに次のタイプに分かれます。どこが自分の経験を活かせるかで応募戦略を決めます。</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["アドテックベンダー／プラットフォーマー", "DSP/SSP/DMPなど配信基盤。広告商流の理解が直接活きる"],
              ["マーケテック企業", "MA・CDP・計測。データ活用とプロダクト開発の両面"],
              ["事業会社のマーケ／データ部門", "自社サービスの広告・データ活用。業務理解が評価されやすい"],
              ["リテールメディア／新しい配信面", "小売・配信事業の広告基盤。成長余地のある領域"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-800 text-sm mb-1">{t}</p>
                <p className="text-xs text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">具体的な社名・採用状況は時期で変動するため、各社の採用ページやエージェント情報で最新を確認してください。</p>
        </section>

        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験の棚卸し（業務知識＋技術）", desc: "広告配信システム、計測・トラッキング、レポーティングなど関わった領域を整理。CPA改善やインプレッション規模など、数値で語れる実績を抽出する。" },
              { step: "2", title: "ギャップの特定と学習", desc: "応募したい求人の必須要件を読み、不足するスタック（大規模データ処理、リアルタイム処理など）を把握。SQLや分散処理を在職中に学び、扱えるデータ規模を広げる。" },
              { step: "3", title: "エージェント登録で市場感を確認", desc: "Geekly、レバテックキャリアなどIT特化型に登録し、提案される求人の傾向と提示レンジを把握する。" },
              { step: "4", title: "職務経歴書で業務知識を翻訳", desc: "「広告商流の実務知識」を、アドテック側の言葉（DSP/SSP、データパイプライン、最適化）に翻訳して伝える。必須要件への充足度を明示する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代で広告からアドテックへ移る場合、強みは「広告商流と計測の業務知識」です。広告がどう配信され、どう測られ、どこで最適化されるかを実務で理解している人材は、アドテック企業でも貴重で、若手にはない説得力を持てます。採用側はデータ基盤やリアルタイム処理の経験を見るため、ここを補う準備が鍵になります。</p>
            <p>40代では、開発力に加えてプロジェクトやチームをまとめる経験が評価されやすくなります。広告運用・開発で培った推進力や関係者調整の経験を、プロダクト開発の文脈で語れるよう整理しておくと選択肢が広がります。年収の考え方は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの転職年収</Link>も参考にしてください。</p>
            <p>自分の市場価値が分かりにくい場合は、<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の測り方</Link>を確認し、複数エージェントで提案を比較するのが現実的です。年齢に関する不安は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職事情</Link>も合わせてどうぞ。</p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">広告の知識をアドテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">まずはIT特化型エージェントに相談して、あなたの経験が市場でどう評価されるかを確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
