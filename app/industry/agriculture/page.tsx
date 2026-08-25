import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/agriculture/" },
  title: "農業からアグリテック（AgriTech）転職【30代40代エンジニアガイド】",
  description:
    "農業・農業関連のエンジニアがアグリテック（AgriTech）領域へ転職する道筋を解説。現場知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。",
};

const skillTable = [
  ["栽培管理・農機・現場オペレーションの理解", "そのまま強み", "現場の課題を分かる人は技術側に少なく、AgriTech企業で評価されやすい"],
  ["土壌・気象・生育などのドメインデータ知識", "そのまま強み", "どのデータが意思決定に効くかを判断できると分析・設計の質が上がる"],
  ["流通・出荷・JA連携などの業務知識", "差別化要素", "トレーサビリティや出荷管理のシステム化で前提知識が活きる"],
  ["IoT・センサーデータ収集／制御", "埋めるギャップ", "圃場のセンサー連携やデータ収集基盤の実装経験を補強したい"],
  ["データ分析（Python/SQL）", "埋めるギャップ", "生育・収量予測など分析業務で扱える言語・基盤を広げたい"],
  ["画像認識・ロボティクス基礎", "伸ばすと有利", "病害虫診断・自動収穫などに関わるなら関連技術の理解が役立つ"],
];

const jobTypes = [
  ["スマート農業プラットフォーム開発", "AgriTechベンダー、農業系スタートアップ", "圃場データの収集・可視化・管理。現場知識が直接活きる"],
  ["農業データ分析・予測", "AgriTech、研究開発寄りの企業", "生育・収量・気象データの分析。ドメイン知識＋データ素養が求められる"],
  ["ドローン／ロボティクス", "農機・ロボティクス系企業", "防除・収穫の自動化。制御・画像認識の素養が問われる"],
  ["トレーサビリティ・流通テック", "フードテック、流通・物流寄り企業", "出荷・流通の可視化。業務知識が強みになる"],
];

const faqs = [
  {
    q: "農業の経験はアグリテック転職で評価されますか？",
    a: "評価されやすい傾向があります。栽培管理、農業機械、土壌・気象データ、流通・出荷の知識を持つエンジニアは、現場を理解した上で技術を設計できる人材として貴重だからです。ただし求人によってはIoTやデータ分析の実装経験を重視するため、評価されるかはポジションの要件次第です。職務経歴書では「農業現場・ドメインの業務知識」と「自分が実装できる技術」を分けて示すと伝わりやすくなります。",
  },
  {
    q: "農業からアグリテックに移ると年収はどう考えればいいですか？",
    a: "提示額は企業・等級・役割で幅があるため、求人ごとに確認するのが前提です。市場の目安としては、レバテックが公表する年代別の正社員SE平均年収（2025年）で30代約499万円、40代約618万円という水準が参考になります。AgriTechはスタートアップが多く、給与水準は企業の規模・ステージで差が出やすいため、提示レンジを事前に把握してから判断するのが安全です。エージェント経由なら年収交渉の材料も整理してもらえます。",
  },
  {
    q: "アグリテック企業ではどんな技術が求められますか？",
    a: "求人により幅がありますが、圃場データを扱うためIoT（センサーデータ収集・制御）やデータ分析（Python/SQL）が挙がることが多く、病害虫診断や自動収穫に関わるポジションでは画像認識やロボティクスの素養が問われます。トレーサビリティ領域ではサプライチェーンのデータ管理が中心になります。すべてを満たす必要はなく、現職の強い領域から狙うのが現実的です。",
  },
  {
    q: "アグリテック市場は成長していますか？",
    a: "本記事では市場規模や成長率の具体的な数値は断定しません（信頼できる出典を確認できないため）。一方で、農業の担い手不足という構造的な課題があり、政府も「みどりの食料システム戦略」などスマート農業の推進方針を示しています。こうした背景から、技術で省力化・データ活用を進める動きが各所で見られます。個別企業の成長性は採用ページや決算情報などで確認してください。",
  },
  {
    q: "30代・40代で農業からアグリテックに転職するのは遅いですか？",
    a: "年齢だけで難しくなると断定はできません。農業現場やドメインデータの知識は経験を積んだ層ほど厚く、そこを軸にすると30代・40代の強みになります。一方でIoTやデータ分析の実装経験が薄い場合は、在職中にPython/SQLを学び、小さくてもデータを扱う成果物を作る準備が効果的です。求人要件と自分の経験のギャップを早めに把握するため、IT特化型エージェントで市場感を確認することをおすすめします。",
  },
  {
    q: "農業から転職しやすいIT職種はどれですか？",
    a: "現場知識を活かしやすいのは、スマート農業プラットフォーム開発、農業データ分析・予測、ドローン／ロボティクス、トレーサビリティ・流通テックのポジションです。どれを狙うかは、自分が強いのが「現場知識」「データ分析」「制御・画像」のどこかで変わります。必須要件を満たせるものから応募するとミスマッチを減らせます。",
  },
  {
    q: "農業出身者に向いているエージェントはどこですか？",
    a: "テック系スタートアップの求人を扱うGeekly、IT特化で幅広い求人を持つレバテックキャリア、異業種・経験補強層の支援に幅のあるワークポートあたりが候補です。農業×ITの掛け合わせは珍しいため、1社に絞らず2〜3社を併用し、提案される求人の傾向や担当者との相性を比較すると自分の経験の市場評価を把握しやすくなります。",
  },
];

const related = [
  { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
  { name: "エネルギー業界からエネテック転職", href: "/industry/energy/" },
  { name: "組込みエンジニア転職ガイド", href: "/skill/embedded/" },
  { name: "30代エンジニアの転職年収", href: "/knowledge/salary-30s/" },
  { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

const toc = [
  ["conclusion", "結論：この転職の現実性"],
  ["trend", "農業のIT化・採用動向"],
  ["skills", "活かせるスキル／埋めるギャップ"],
  ["patterns", "転職パターン（職種×企業タイプ）"],
  ["salary", "年収の考え方"],
  ["companies", "主な企業タイプ"],
  ["howto", "転職の進め方"],
  ["mid-career", "30代・40代視点"],
  ["faq", "よくある質問"],
];

export default function AgriculturePage() {
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
      <ArticleJsonLd title="農業からアグリテック（AgriTech）転職【30代40代エンジニアガイド】" description="農業・農業関連のエンジニアがアグリテック（AgriTech）領域へ転職する道筋を解説。現場知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。" url="/industry/agriculture/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "農業からアグリテック転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">農業からアグリテック（AgriTech）転職【30代40代エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年8月 | 農業現場・ドメインの知識をアグリテック領域で活かす</p>

        {/* 直答box */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】アグリテック（AgriTech）転職はできる？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-2"><strong>結論: 農業現場・ドメインデータの知識を持つ人は、IoT（センサー収集）やデータ分析（Python/SQL）を補強すれば現実的に狙えます。</strong>現場を理解した上で技術を設計できる人材はAgriTech企業側に少なく、30代・40代の経験の厚さはむしろ強みになります。</p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1">
            <li>・主な職種は4系統: スマート農業プラットフォーム開発／農業データ分析・予測／ドローン・ロボティクス／トレーサビリティ・流通テック</li>
            <li>・年収目安は正社員SE平均で30代約499万円・40代約618万円（レバテック公表2025年）。スタートアップ中心のため企業ステージで差が大きい</li>
            <li>・準備の第一歩は「農業ドメイン知識」と「実装できる技術」を職務経歴書で分けて示すこと（詳細は本文）</li>
          </ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">担い手不足という構造的な課題を背景に、IoTセンサー、ドローン、画像認識、ロボティクスなどで農業を省力化・データ化する動きが各所で見られます。農業現場やドメインデータの知識を持つエンジニアは、IoTやデータ分析のスキルを足すことでアグリテック領域に移りやすくなります。本記事では活かせる経験と埋めるべきギャップを30代・40代視点で整理します。</p>

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
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">農業現場・ドメインの知識を持つエンジニアにとって、アグリテック領域への転職は十分に狙えるルートです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・現場の課題を分かる人は技術側に少なく、ドメイン知識がそのまま差別化になりやすい。</li>
              <li>・求人の多くはIoTやデータ分析の実装経験を求める。ここが主なギャップ。</li>
              <li>・AgriTechはスタートアップが多く、給与水準は企業の規模・ステージで差が出やすい点に注意。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">市場規模・成長率など断定できない数値は本記事では扱いません。年収・需給の話は公的・公表データに基づく目安として後述します。</p>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">農業のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">農業分野では、省力化とデータ活用を進めるスマート農業の取り組みが広がっています。以下は公開情報からうかがえる一般的な傾向で、個別企業の状況は採用ページ等で確認が必要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">担い手不足を背景にした省力化</h3>
              <p className="text-sm text-slate-600">労働力の確保が課題となるなか、自動化や遠隔・データによる管理を進める動きがあり、これを支える開発の需要が見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">政策的な後押し</h3>
              <p className="text-sm text-slate-600">政府は「みどりの食料システム戦略」などでスマート農業の推進方針を示しています。データ駆動型農業や環境負荷低減に関わる技術開発のテーマが見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">フードテック・トレーサビリティ</h3>
              <p className="text-sm text-slate-600">食の安全・流通の可視化への関心から、トレーサビリティやフードロス削減、植物工場の制御など、農業×テクノロジーの融合領域が広がっています。</p>
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
          <p className="text-slate-600 leading-relaxed text-sm">「農業現場・ドメインの業務知識」を前面に出しつつ、求人で求められる技術のうち自分が満たせるものを明確にすることがポイントです。強い領域から応募先を選ぶとミスマッチが減ります。</p>
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
          <p className="text-slate-500 text-xs leading-relaxed">上記は職種・媒体横断の平均値であり、アグリテック領域に限った数値ではありません。AgriTechはスタートアップが多く、ストックオプションなど現金以外の条件も含めて評価するとよいでしょう。</p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">アグリテック領域の受け皿は、おおまかに次のタイプに分かれます。どこが自分の経験を活かせるかで応募戦略を決めます。</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["AgriTech系スタートアップ", "圃場データ・営農支援プロダクト。現場知識が直接活きる"],
              ["農機・ロボティクス系企業", "ドローン・自動化機器。制御・画像の素養が求められる"],
              ["フードテック・流通テック", "トレーサビリティ・出荷管理。業務知識が評価されやすい"],
              ["研究開発・データ寄りの企業", "生育・収量予測などの分析。ドメインデータ知識が活きる"],
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
              { step: "1", title: "経験の棚卸し（業務知識＋技術）", desc: "栽培管理、農機連携、出荷管理、JA連携など関わった領域を整理。収量改善やコスト削減など、数値で語れる実績を抽出する。" },
              { step: "2", title: "ギャップの特定と学習", desc: "応募したい求人の必須要件を読み、不足するスタック（IoT、データ分析など）を把握。Python/SQLを在職中に学び、小さくてもデータを扱う成果物を作る。" },
              { step: "3", title: "エージェント登録で市場感を確認", desc: "Geekly、レバテックキャリアなどIT特化型に登録し、提案される求人の傾向と提示レンジを把握する。" },
              { step: "4", title: "職務経歴書で現場知識を翻訳", desc: "「農業現場・ドメインの実務知識」を、AgriTech側の言葉（営農支援、データ駆動型農業、トレーサビリティ）に翻訳して伝える。必須要件への充足度を明示する。" },
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
            <p>30代・40代で農業からアグリテックへ移る場合、強みは「現場・ドメインの業務知識」です。何が農業現場の本当の課題で、どのデータが意思決定に効くかを実務で理解している人材は、技術側に少なく貴重です。採用側はIoTやデータ分析の実装経験を見るため、ここを補う準備が鍵になります。</p>
            <p>40代では、開発力に加えてプロジェクトや関係者をまとめる経験が評価されやすくなります。農業事業で培った現場調整や改善の経験を、プロダクト開発の文脈で語れるよう整理しておくと選択肢が広がります。スタートアップ中心の領域のため、年収だけでなく事業の継続性も含めて検討するとよいでしょう。年収の考え方は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの転職年収</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">農業の知識をアグリテックで活かそう</h2>
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
