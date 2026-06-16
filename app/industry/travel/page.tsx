import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "旅行業界からトラベルテック転職【30代40代ガイド】",
  description:
    "旅行業界のエンジニアがトラベルテック（TravelTech）領域へ転職する道筋を解説。予約・在庫・価格の業務知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。",
};

const skillTable = [
  ["予約・在庫管理の仕組みの理解（GDS/CRS/OTA）", "そのまま強み", "予約フローや在庫連携を分かる人は限られ、トラベルテック企業で評価されやすい"],
  ["旅行商品の造成・料金設計の実務", "そのまま強み", "ダイナミックプライシングやパッケージ設計の前提知識が活きる"],
  ["多言語・決済まわりの運用知識", "差別化要素", "インバウンド向けサービスで決済・言語対応の理解が重宝される"],
  ["モダンWeb開発（React/Next.js等）", "埋めるギャップ", "OTA・予約プロダクトはWebアプリ中心。フロント/バックの実装力を補強したい"],
  ["API連携・外部システム接続", "埋めるギャップ", "GDS/OTA間や決済・地図など外部API連携の経験が問われやすい"],
  ["データ分析・ML基礎", "伸ばすと有利", "需要予測・価格最適化に関わるなら集計基盤やモデルの理解が役立つ"],
];

const jobTypes = [
  ["予約プロダクト・OTA開発", "OTA、メタサーチ、予約プラットフォーマー", "予約・検索体験の開発。予約・在庫の業務知識が直接活きる"],
  ["価格最適化・需要予測", "OTA、宿泊・交通系プラットフォーム", "ダイナミックプライシング。料金設計の理解＋データ素養が求められる"],
  ["データ分析・収益最適化", "旅行プラットフォーム全般", "顧客行動分析・収益管理。商流の理解が分析の質を高める"],
  ["インバウンド／多言語・決済", "インバウンド向けサービス、決済連携", "多言語対応・キャッシュレス連携。運用知識が強みになる"],
];

const faqs = [
  {
    q: "旅行業界の経験はトラベルテック転職で評価されますか？",
    a: "評価されやすい傾向があります。予約システム（GDS/CRS）、在庫管理、料金設計、旅行商品の造成プロセスを理解するエンジニアは、トラベルテック企業では持っている人が限られるためです。ただし求人によってはモダンWeb開発やAPI連携の経験を重視するため、評価されるかはポジションの要件次第です。職務経歴書では「予約・在庫・料金の業務知識」と「自分が実装できる技術」を分けて示すと伝わりやすくなります。",
  },
  {
    q: "旅行業界からトラベルテックに移ると年収はどう考えればいいですか？",
    a: "提示額は企業・等級・役割で幅があるため、求人ごとに確認するのが前提です。市場の目安としては、レバテックが公表する年代別の正社員SE平均年収（2025年）で30代約499万円、40代約618万円という水準が参考になります。転職での増減は現職の水準と応募先の役割で決まるため、エージェント経由で提示レンジを把握し、年収交渉の材料を整理してもらうと判断しやすくなります。",
  },
  {
    q: "トラベルテック企業ではどんな技術が求められますか？",
    a: "求人により幅がありますが、予約プロダクトはWebアプリが中心のため、バックエンド（Python/Java/Go等）やフロントエンド（React/Next.js等）が挙がることが多く、GDS/OTAや決済・地図など外部APIとの連携経験が問われやすいです。需要予測や価格最適化に関わるならデータ分析やMLの素養があると差別化しやすくなります。すべてを満たす必要はなく、現職の強い領域から狙うのが現実的です。",
  },
  {
    q: "30代・40代で旅行からトラベルテックに転職するのは遅いですか？",
    a: "年齢だけで難しくなると断定はできません。予約・在庫・料金設計の業務知識は経験を積んだ層ほど厚く、そこを軸にすると30代・40代の強みになります。一方でモダンWeb開発やAPI連携の経験が薄い場合は、在職中に小さくても動くものを作り、学習履歴を残す準備が効果的です。求人要件と自分の経験のギャップを早めに把握するため、IT特化型エージェントで市場感を確認することをおすすめします。",
  },
  {
    q: "インバウンド領域のエンジニア需要はどうですか？",
    a: "訪日旅行に関わるサービスでは、多言語対応の予約システムやキャッシュレス決済連携などの開発テーマが見られます。需要の強さは時期や市況に左右されるため、具体的な数値での断定は避けますが、業務知識（決済・言語・地域特性）を持つエンジニアは活きやすい領域です。最新の採用状況は各社の採用ページやエージェントで確認してください。",
  },
  {
    q: "旅行業界から転職しやすいIT職種はどれですか？",
    a: "業務知識を活かしやすいのは、予約プロダクト・OTA開発、価格最適化・需要予測、データ分析・収益最適化、インバウンド／多言語・決済まわりのポジションです。どれを狙うかは、自分が強いのが「業務知識」「実装力」「データ分析」のどこかで変わります。必須要件を満たせるものから応募するとミスマッチを減らせます。",
  },
  {
    q: "旅行業界出身者に向いているエージェントはどこですか？",
    a: "Web系サービス企業の求人を多く扱うGeekly、IT特化で幅広い求人を持つレバテックキャリア、異業種・経験補強層の支援に幅のあるワークポートあたりが候補です。1社に絞らず2〜3社を併用し、提案される求人の傾向や担当者との相性を比較すると、自分の経験の市場評価を把握しやすくなります。",
  },
];

const related = [
  { name: "小売・流通からECテック転職", href: "/industry/retail/" },
  { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
  { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
  { name: "30代エンジニアの転職年収", href: "/knowledge/salary-30s/" },
  { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

const toc = [
  ["conclusion", "結論：この転職の現実性"],
  ["trend", "旅行のIT化・採用動向"],
  ["skills", "活かせるスキル／埋めるギャップ"],
  ["patterns", "転職パターン（職種×企業タイプ）"],
  ["salary", "年収の考え方"],
  ["companies", "主な企業タイプ"],
  ["howto", "転職の進め方"],
  ["mid-career", "30代・40代視点"],
  ["faq", "よくある質問"],
];

export default function TravelPage() {
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
      <ArticleJsonLd title="旅行業界からトラベルテック転職【30代40代ガイド】" description="旅行業界のエンジニアがトラベルテック（TravelTech）領域へ転職する道筋を解説。予約・在庫・価格の業務知識を活かす方法、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。" url="/industry/travel/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "旅行業界からトラベルテック転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">旅行業界からトラベルテック転職【30代40代ガイド】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 予約・在庫・料金の業務知識をトラベルテック領域で活かす</p>

        <p className="text-slate-600 leading-relaxed mb-4">旅行業界のサービスは予約・検索・決済のいずれもソフトウェアで成り立っており、OTAやメタサーチを中心にプロダクト開発の人材需要があります。予約・在庫・料金設計の業務知識を持つエンジニアは、モダンWeb開発やAPI連携のスキルを足すことでトラベルテック領域に移りやすくなります。本記事では活かせる経験と埋めるべきギャップを30代・40代視点で整理します。</p>

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
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">予約・在庫・料金設計の業務知識を持つ旅行業界エンジニアにとって、トラベルテック領域への転職は十分に狙えるルートです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・予約フローや在庫連携、料金設計を分かる人は限られ、業務知識がそのまま差別化になりやすい。</li>
              <li>・求人の多くはモダンWeb開発やAPI連携の経験を求める。ここが主なギャップ。</li>
              <li>・30代・40代は業務知識の厚みが強み。実装面の不足は在職中の準備で補える。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">市場規模など断定できない数値は本記事では扱いません。年収・需給の話は公的・公表データに基づく目安として後述します。</p>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">旅行のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">旅行業界はオンライン予約の比重が高く、OTAやメタサーチ、宿泊・交通系プラットフォームが継続的に開発投資を行っています。以下は公開情報からうかがえる一般的な傾向で、個別企業の状況は採用ページ等で確認が必要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">予約・検索体験の高度化</h3>
              <p className="text-sm text-slate-600">OTA・メタサーチ間の競争を背景に、検索・予約のUX改善やコンバージョン向上のための開発が進んでいます。旅行の商流を理解するエンジニアが求められる場面があります。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">価格最適化・データ活用</h3>
              <p className="text-sm text-slate-600">ダイナミックプライシングや需要予測など、データを使った収益最適化のテーマでエンジニア需要が見られます。料金設計の前提知識が活きやすい領域です。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">多言語・決済まわりの整備</h3>
              <p className="text-sm text-slate-600">訪日旅行向けサービスでは、多言語対応やキャッシュレス決済連携といった開発テーマが見られます。運用知識を持つ人材が活きやすい領域です。</p>
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
          <p className="text-slate-600 leading-relaxed text-sm">「予約・在庫・料金の業務知識」を前面に出しつつ、求人で求められる技術のうち自分が満たせるものを明確にすることがポイントです。強い領域から応募先を選ぶとミスマッチが減ります。</p>
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
          <p className="text-slate-500 text-xs leading-relaxed">上記は職種・媒体横断の平均値であり、トラベルテック領域に限った数値ではありません。自分の現年収と応募先の提示レンジを並べて判断するのが基本です。</p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">トラベルテック領域の受け皿は、おおまかに次のタイプに分かれます。どこが自分の経験を活かせるかで応募戦略を決めます。</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["OTA・メタサーチ", "予約・検索プロダクト。予約・在庫の業務知識が直接活きる"],
              ["宿泊・交通系プラットフォーム", "在庫・料金管理。料金設計の理解が評価されやすい"],
              ["トラベルテック系スタートアップ", "新しいプロダクト開発。裁量が大きくモダンスタックが多い"],
              ["インバウンド／決済連携サービス", "多言語・決済まわり。運用知識が強みになる"],
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
              { step: "1", title: "経験の棚卸し（業務知識＋技術）", desc: "予約システム、在庫管理、料金設計、CRM、旅行商品の造成など関わった領域を整理。予約数やコンバージョン改善など、数値で語れる実績を抽出する。" },
              { step: "2", title: "ギャップの特定と学習", desc: "応募したい求人の必須要件を読み、不足するスタック（モダンWeb開発、API連携など）を把握。在職中に小さく作って学習履歴を残す。" },
              { step: "3", title: "エージェント登録で市場感を確認", desc: "Geekly、レバテックキャリアなどIT特化型に登録し、提案される求人の傾向と提示レンジを把握する。" },
              { step: "4", title: "職務経歴書で業務知識を翻訳", desc: "「予約・在庫・料金の実務知識」を、トラベルテック側の言葉（OTA、ダイナミックプライシング、API連携）に翻訳して伝える。必須要件への充足度を明示する。" },
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
            <p>30代・40代で旅行からトラベルテックへ移る場合、強みは「予約・在庫・料金設計の業務知識」です。旅行商品がどう作られ、どう在庫管理され、どう価格付けされるかを実務で理解している人材は、トラベルテック企業でも貴重で、若手にはない説得力を持てます。採用側はモダンな開発経験を見るため、ここを補う準備が鍵になります。</p>
            <p>40代では、開発力に加えてプロジェクトやチームをまとめる経験が評価されやすくなります。旅行事業で培った関係者調整やオペレーション改善の経験を、プロダクト開発の文脈で語れるよう整理しておくと選択肢が広がります。年収の考え方は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの転職年収</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">旅行の知識をトラベルテックで活かそう</h2>
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
