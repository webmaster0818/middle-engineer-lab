import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/energy/" },
  title: "エネルギー業界からエネテック転職【30代40代ガイド】",
  description:
    "電力・エネルギー業界のエンジニアがエネテック（CleanTech/GreenTech）領域へ転職する道筋を解説。系統・制御の知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。",
};

const skillTable = [
  ["電力系統・SCADA・監視制御の理解", "そのまま強み", "系統や制御を分かる人は技術側に少なく、エネテック企業で評価されやすい"],
  ["再エネ設備・EMSの運用知識", "そのまま強み", "需給制御や設備監視の前提知識がプロダクト設計で活きる"],
  ["電力市場・規制まわりの業務知識", "差別化要素", "需給調整・取引・排出量算定など制度面の理解が重宝される"],
  ["IoT・時系列データ処理", "埋めるギャップ", "センサーデータ収集・制御や時系列の分析基盤の経験を補強したい"],
  ["クラウド／データ分析（Python/SQL）", "埋めるギャップ", "可視化・最適化のための言語・基盤を扱える幅を広げたい"],
  ["最適化アルゴリズム基礎", "伸ばすと有利", "需給最適化・充電制御などに関わるなら関連手法の理解が役立つ"],
];

const jobTypes = [
  ["EMS／エネルギー管理プロダクト開発", "エネテックベンダー、電力系スタートアップ", "需給の可視化・制御。系統・設備の業務知識が直接活きる"],
  ["スマートグリッド・需給最適化", "電力・系統寄りの企業", "系統制御・最適化。制御知識＋データ／アルゴリズム素養が求められる"],
  ["EV充電インフラ・V2G", "充電インフラ・モビリティ系企業", "充電制御・スマートチャージング。電力制御の理解が活きる"],
  ["カーボン／排出量管理", "カーボンテック、サステナ系企業", "排出量算定・クレジット管理。制度・業務知識が強みになる"],
];

const faqs = [
  {
    q: "エネルギー業界の経験はエネテック転職で評価されますか？",
    a: "評価されやすい傾向があります。電力系統、スマートグリッド、SCADA、再生可能エネルギー、EMSの知識を持つエンジニアは、エネテック企業では持っている人が限られるためです。ただし求人によってはIoTやデータ処理の実装経験を重視するため、評価されるかはポジションの要件次第です。職務経歴書では「系統・制御・設備の業務知識」と「自分が実装できる技術」を分けて示すと伝わりやすくなります。",
  },
  {
    q: "エネルギー業界からエネテックに移ると年収はどう考えればいいですか？",
    a: "提示額は企業・等級・役割で幅があるため、求人ごとに確認するのが前提です。市場の目安としては、レバテックが公表する年代別の正社員SE平均年収（2025年）で30代約499万円、40代約618万円という水準が参考になります。エネテックは大手企業の新規事業からスタートアップまで受け皿の幅が広く、給与水準も差が出やすいため、提示レンジを事前に把握してから判断するのが安全です。エージェント経由なら年収交渉の材料も整理してもらえます。",
  },
  {
    q: "エネテック企業ではどんな技術が求められますか？",
    a: "求人により幅がありますが、設備や系統のデータを扱うためIoT（センサーデータ収集・制御）や時系列データ処理、クラウド（AWS/GCP等）が挙がることが多く、需給最適化や充電制御に関わるポジションでは最適化アルゴリズムの素養が問われます。すべてを満たす必要はなく、現職の強い領域から狙うのが現実的です。",
  },
  {
    q: "カーボンニュートラルの流れでエンジニア需要は増えますか？",
    a: "本記事では需要の増減を数値で断定はしません（信頼できる出典を確認できないため）。一方で、日本は2050年カーボンニュートラルを掲げており、再エネ導入やEV充電インフラ、排出量算定などの取り組みが各所で進んでいます。こうした背景から、エネルギー分野のソフトウェア開発テーマが広がっている状況がうかがえます。個別企業の採用状況は採用ページ等で確認してください。",
  },
  {
    q: "30代・40代でエネルギーからエネテックに転職するのは遅いですか？",
    a: "年齢だけで難しくなると断定はできません。系統・制御・設備の知識は経験を積んだ層ほど厚く、そこを軸にすると30代・40代の強みになります。一方でIoTやデータ処理の実装経験が薄い場合は、在職中にPython/SQLや時系列データ分析を学び、小さくてもデータを扱う成果物を作る準備が効果的です。求人要件と自分の経験のギャップを早めに把握するため、IT特化型エージェントで市場感を確認することをおすすめします。",
  },
  {
    q: "エネルギー業界から転職しやすいIT職種はどれですか？",
    a: "業務知識を活かしやすいのは、EMS／エネルギー管理プロダクト開発、スマートグリッド・需給最適化、EV充電インフラ・V2G、カーボン／排出量管理のポジションです。どれを狙うかは、自分が強いのが「系統・制御の知識」「データ処理」「制度・業務知識」のどこかで変わります。必須要件を満たせるものから応募するとミスマッチを減らせます。",
  },
  {
    q: "エネルギー業界出身者に向いているエージェントはどこですか？",
    a: "IT特化で幅広い求人を持つレバテックキャリア、ハイクラス・スカウト型のビズリーチ、スタートアップの求人を扱うGeeklyあたりが候補です。エネルギー×ITは専門性が高いため、1社に絞らず2〜3社を併用し、提案される求人の傾向や担当者との相性を比較すると自分の経験の市場評価を把握しやすくなります。",
  },
];

const related = [
  { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
  { name: "農業からアグリテック転職", href: "/industry/agriculture/" },
  { name: "組込みエンジニア転職ガイド", href: "/skill/embedded/" },
  { name: "30代エンジニアの転職年収", href: "/knowledge/salary-30s/" },
  { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

const toc = [
  ["conclusion", "結論：この転職の現実性"],
  ["trend", "エネルギーのIT化・採用動向"],
  ["skills", "活かせるスキル／埋めるギャップ"],
  ["patterns", "転職パターン（職種×企業タイプ）"],
  ["salary", "年収の考え方"],
  ["companies", "主な企業タイプ"],
  ["howto", "転職の進め方"],
  ["mid-career", "30代・40代視点"],
  ["faq", "よくある質問"],
];

export default function EnergyPage() {
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
      <ArticleJsonLd title="エネルギー業界からエネテック転職【30代40代ガイド】" description="電力・エネルギー業界のエンジニアがエネテック（CleanTech/GreenTech）領域へ転職する道筋を解説。系統・制御の知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。" url="/industry/energy/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "エネルギー業界からエネテック転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エネルギー業界からエネテック転職【30代40代ガイド】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 系統・制御・設備の知識をエネテック領域で活かす</p>

        <p className="text-slate-600 leading-relaxed mb-4">カーボンニュートラルに向けたエネルギー転換のなかで、再生可能エネルギー、EV充電インフラ、需給最適化など、エネルギー分野のソフトウェア開発テーマが広がっています。電力系統・制御・設備の知識を持つエンジニアは、IoTやデータ処理のスキルを足すことでエネテック（CleanTech/GreenTech）領域に移りやすくなります。本記事では活かせる経験と埋めるべきギャップを30代・40代視点で整理します。</p>

        <DataNote surveyedAt="2026年6月" sources={["レバテック公表 年代別平均年収（2025年）", "doda（パーソルキャリア）決定年収レポート（2025年5月公表）", "厚生労働省 job tag", "経済産業省 IT人材需給に関する調査（2019年公表）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className="text-petrol hover:underline">{label}</a></li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：この転職の現実性</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">系統・制御・設備の知識を持つエネルギー業界エンジニアにとって、エネテック領域への転職は十分に狙えるルートです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・電力系統やSCADA、EMSを分かる人は技術側に少なく、業務知識がそのまま差別化になりやすい。</li>
              <li>・求人の多くはIoTや時系列データ処理の実装経験を求める。ここが主なギャップ。</li>
              <li>・受け皿は大手の新規事業からスタートアップまで幅広く、給与・働き方の差が出やすい点に注意。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">市場規模・需要の増減など断定できない数値は本記事では扱いません。年収・需給の話は公的・公表データに基づく目安として後述します。</p>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エネルギーのIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">エネルギー分野では、再エネ導入や電化の進展に伴い、データと制御を扱うソフトウェアの重要性が高まっています。以下は公開情報からうかがえる一般的な傾向で、個別企業の状況は採用ページ等で確認が必要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">カーボンニュートラルに向けた取り組み</h3>
              <p className="text-sm text-slate-600">日本は2050年カーボンニュートラルを掲げており、再エネ導入や省エネ、排出量算定（GHGプロトコル等）に関わるシステム開発のテーマが見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">EV充電インフラ・電化の進展</h3>
              <p className="text-sm text-slate-600">EVの普及に伴い、充電ステーションの管理、電力需給に応じた充電制御、V2G（Vehicle-to-Grid）などの開発テーマが見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">分散型エネルギー・需給最適化</h3>
              <p className="text-sm text-slate-600">太陽光＋蓄電池を束ねるVPP（仮想発電所）、デマンドレスポンスなど、分散リソースの管理・最適化システムの開発需要が見られます。</p>
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
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 whitespace-nowrap align-top">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">「系統・制御・設備の業務知識」を前面に出しつつ、求人で求められる技術のうち自分が満たせるものを明確にすることがポイントです。強い領域から応募先を選ぶとミスマッチが減ります。</p>
        </section>

        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="space-y-3">
            {jobTypes.map(([role, type, note], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-bold text-slate-800">{role}</span>
                  <span className="text-xs bg-petrol-soft text-petrol-deep px-2 py-0.5 rounded">{type}</span>
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
          <p className="text-slate-500 text-xs leading-relaxed">上記は職種・媒体横断の平均値であり、エネテック領域に限った数値ではありません。受け皿は大手の新規事業からスタートアップまで幅広いため、提示レンジと働き方を合わせて判断するのが基本です。</p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">エネテック領域の受け皿は、おおまかに次のタイプに分かれます。どこが自分の経験を活かせるかで応募戦略を決めます。</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["電力・エネルギー大手の新規事業／IT部門", "既存事業のデジタル化。系統・制御の知識との親和性が高い"],
              ["エネテック系スタートアップ", "需給管理・EMSなどのプロダクト開発。裁量が大きい"],
              ["EV充電・モビリティ系企業", "充電制御・インフラ管理。電力制御の理解が活きる"],
              ["カーボンテック・サステナ系企業", "排出量算定・クレジット管理。制度・業務知識が評価されやすい"],
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
              { step: "1", title: "経験の棚卸し（業務知識＋技術）", desc: "SCADA運用、電力系統管理、再エネ設備の監視制御、EMSなど関わった領域を整理。効率改善やコスト削減など、数値で語れる実績を抽出する。" },
              { step: "2", title: "ギャップの特定と学習", desc: "応募したい求人の必須要件を読み、不足するスタック（IoT、時系列データ処理など）を把握。Python/SQLや時系列分析を在職中に学び、成果物を作る。" },
              { step: "3", title: "エージェント登録で市場感を確認", desc: "レバテックキャリア、ビズリーチ、GeeklyなどIT特化型・ハイクラス型に登録し、提案される求人の傾向と提示レンジを把握する。" },
              { step: "4", title: "職務経歴書で業務知識を翻訳", desc: "「系統・制御・設備の実務知識」を、エネテック側の言葉（EMS、需給最適化、充電制御、排出量管理）に翻訳して伝える。必須要件への充足度を明示する。" },
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

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代でエネルギーからエネテックへ移る場合、強みは「系統・制御・設備の業務知識」です。電力がどう流れ、どう監視・制御され、どんな制約があるかを実務で理解している人材は、技術側に少なく貴重です。採用側はIoTやデータ処理の実装経験を見るため、ここを補う準備が鍵になります。</p>
            <p>40代では、開発力に加えてプロジェクトや関係者をまとめる経験が評価されやすくなります。エネルギー事業で培った安全管理・関係者調整の経験を、プロダクト開発の文脈で語れるよう整理しておくと選択肢が広がります。受け皿の幅が広い領域のため、年収だけでなく事業の方向性や働き方も含めて検討するとよいでしょう。年収の考え方は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの転職年収</Link>も参考にしてください。</p>
            <p>自分の市場価値が分かりにくい場合は、<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の測り方</Link>を確認し、複数エージェントで提案を比較するのが現実的です。年齢に関する不安は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職事情</Link>も合わせてどうぞ。</p>
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
          <h2 className="text-xl font-bold mb-3">エネルギーの知識をエネテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">まずはIT特化型エージェントに相談して、あなたの経験が市場でどう評価されるかを確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
