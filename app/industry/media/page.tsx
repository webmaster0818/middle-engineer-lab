import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "メディア業界からデジタルメディア転職【30代40代ガイド】",
  description:
    "放送・出版・新聞などメディア業界のエンジニアがデジタルメディア領域へ転職する道筋を解説。活かせるスキル、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。",
};

const skillTable = [
  ["動画配信・コンテンツ配信の知識", "そのまま強み", "HLS/DASH、エンコード、CDN、DRM、字幕・送出の理解はOTT企業で希少" ],
  ["CMS・コンテンツ運用の実務", "そのまま強み", "編集ワークフロー、メタデータ設計、入稿フローの理解が活きる"],
  ["放送基準・著作権・権利処理の理解", "差別化要素", "コンプライアンス感覚はデジタル配信でも評価されやすい"],
  ["モダンWeb開発（React/Next.js等）", "埋めるギャップ", "SPA・SSR、TypeScript、コンポーネント設計の習得が必要なことが多い"],
  ["クラウド/インフラ運用", "埋めるギャップ", "AWS/GCP、IaC、CDN設定、監視などの実務経験を補強したい"],
  ["データ基盤・ML基礎", "伸ばすと有利", "レコメンドや視聴分析に関わるなら集計基盤・特徴量の理解が役立つ"],
];

const jobTypes = [
  ["配信・プラットフォーム開発", "OTT/動画配信、メディアプラットフォーマー", "配信安定性、トランスコード、視聴体験の改善。放送・配信の実務知識が直接活きる"],
  ["コンテンツ運用・CMS開発", "デジタルメディア、出版系Web", "編集・入稿フローの理解を持つWebエンジニアとして重宝される"],
  ["レコメンド・データ活用", "メディアテック、配信プラットフォーム", "視聴・閲覧データの活用。データ/ML方向への発展余地が大きい"],
  ["広告・収益化（CTV含む）", "メディア＋広告プラットフォーム", "SSAI/CSAIなど配信広告。広告領域への越境も視野に入る"],
];

const faqs = [
  {
    q: "放送・出版などメディア業界の経験はデジタルメディア転職で評価されますか？",
    a: "評価されやすい傾向があります。動画配信の技術（エンコード、CDN、DRM、字幕・送出）、コンテンツ管理システム、編集ワークフローの理解は、OTTやデジタルメディア企業では持っている人が限られるためです。ただし評価されるかは募集ポジションの要件次第で、モダンWeb開発やクラウド運用の経験を求められる求人も多くあります。職務経歴書で「配信・コンテンツ運用の実務知識」と「自分が書けるコード/扱える基盤」を分けて示すと伝わりやすくなります。",
  },
  {
    q: "メディア業界からデジタルメディアに移ると年収はどう考えればいいですか？",
    a: "具体的な提示額は企業・ポジション・経験により幅があるため、求人ごとに確認するのが前提です。市場全体の目安としては、レバテックが公表する年代別の正社員SE平均年収（2025年）で30代約499万円、40代約618万円という水準が参考になります。転職での増減は、現職の水準と応募先の等級・役割で決まります。エージェント経由なら提示レンジを事前に把握しやすく、年収交渉の材料も整理してもらえます。",
  },
  {
    q: "デジタルメディア企業ではどんな技術が求められますか？",
    a: "求人により幅がありますが、バックエンド（Go/Python/Java等）やフロントエンド（React/Next.js等）が基礎として挙がることが多く、動画配信に関わるポジションではHLS/DASH、トランスコード、CDNの知識が問われます。レコメンドや視聴分析の領域ではデータ基盤やMLの素養があると差別化しやすくなります。すべてを満たす必要はなく、現職の延長で強い領域から狙うのが現実的です。",
  },
  {
    q: "30代・40代でメディアからデジタルメディアに転職するのは遅いですか？",
    a: "年齢だけで難しくなると断定はできません。配信・コンテンツ運用の業務知識は経験を積んだ層ほど厚く、そこを軸にすると30代・40代の強みになります。一方で、モダンな開発スタックの経験が薄い場合は、在職中に小さくても動くものを作る・学習履歴を残すなどの準備が効果的です。求人要件と自分の経験のギャップを早めに把握するためにも、IT特化型エージェントで市場感を確認することをおすすめします。",
  },
  {
    q: "テレビ局や制作会社のエンジニアからの転職先にはどんな企業がありますか？",
    a: "動画配信プラットフォーム（OTT）、メディアプラットフォーマー、デジタルメディア運営企業、配信広告（CTV含む）に関わるテック企業などが想定されます。放送・配信技術の知識を活かしやすいのは配信インフラやプラットフォーム開発のポジションです。具体的な社名や採用状況は時期により変わるため、エージェントや各社の採用ページで最新情報を確認してください。",
  },
  {
    q: "未経験寄りの状態からでもデジタルメディア領域に入れますか？",
    a: "コンテンツ運用や配信オペレーションの経験はあるがコード経験が浅い、という状態であれば、まずは現職の知識が活きる領域（CMS開発、配信運用に近いポジション）から入るルートが現実的です。求人の必須要件と歓迎要件を分けて読み、必須を満たせるものから応募するとミスマッチを減らせます。ワークポートのように異業種・経験補強層の支援に幅のあるエージェントの併用も選択肢です。",
  },
  {
    q: "メディア業界出身者に向いているエージェントはどこですか？",
    a: "IT/Web/エンタメ領域の求人を多く扱うGeekly、IT特化で幅広い求人を持つレバテックキャリア、ハイクラス・スカウト型のビズリーチあたりが候補になります。1社に絞らず2〜3社を併用し、提案される求人の傾向や担当者との相性を比較すると、自分の経験が市場でどう評価されるか把握しやすくなります。",
  },
];

const related = [
  { name: "広告業界からアドテック転職", href: "/industry/advertising/" },
  { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
  { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
  { name: "30代エンジニアの転職年収", href: "/knowledge/salary-30s/" },
  { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

const toc = [
  ["conclusion", "結論：この転職の現実性"],
  ["trend", "メディアのIT化・採用動向"],
  ["skills", "活かせるスキル／埋めるギャップ"],
  ["patterns", "転職パターン（職種×企業タイプ）"],
  ["salary", "年収の考え方"],
  ["companies", "主な企業タイプ"],
  ["howto", "転職の進め方"],
  ["mid-career", "30代・40代視点"],
  ["faq", "よくある質問"],
];

export default function MediaPage() {
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
      <ArticleJsonLd title="メディア業界からデジタルメディア転職【30代40代ガイド】" description="放送・出版・新聞などメディア業界のエンジニアがデジタルメディア領域へ転職する道筋を解説。活かせるスキル、埋めるギャップ、職種×企業タイプ、年収の考え方を30代40代視点で整理します。" url="/industry/media/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "メディア業界からデジタルメディア転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">メディア業界からデジタルメディア転職【30代40代ガイド】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 放送・出版・新聞などの知識をデジタルメディア領域で活かす</p>

        <p className="text-slate-600 leading-relaxed mb-4">テレビ放送のデジタルシフト、動画配信プラットフォームの広がり、紙からWebへの移行により、メディア業界のエンジニアがデジタルメディア領域へ移るケースが増えています。配信・コンテンツ運用の実務知識はデジタル側でも活きやすく、モダンな開発スキルを足していくことでキャリアの選択肢が広がります。</p>

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
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">配信・コンテンツ運用の実務知識を持つメディア業界エンジニアにとって、デジタルメディア領域への転職は十分に狙えるルートです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・OTTやデジタルメディアでは「配信・編集ワークフローを分かる人」が限られ、業務知識がそのまま差別化になりやすい。</li>
              <li>・一方で求人の多くはモダンWeb開発やクラウド運用の経験を求める。ここが主なギャップ。</li>
              <li>・30代・40代は業務知識の厚みが強みになりやすい。コード/基盤面の不足は在職中の準備で補える。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">市場規模など断定できない数値は本記事では扱いません。年収・需給の話は公的・公表データに基づく目安として後述します。</p>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メディアのIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">放送・出版・新聞といった従来型メディアは、配信のデジタル化やWebサービス化を進めており、開発体制の内製化やプロダクト志向の採用が広がっています。以下は公開情報からうかがえる一般的な傾向で、個別企業の状況は採用ページ等で確認が必要です。</p>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">動画配信・OTTの広がり</h3>
              <p className="text-sm text-slate-600">放送局系・出版社系を含め、動画配信や会員制コンテンツの提供が一般化しています。配信インフラ、トランスコード、CDN、視聴体験の改善を担うエンジニアの募集が見られます。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">コンテンツ運用基盤のWeb化</h3>
              <p className="text-sm text-slate-600">編集・入稿・配信のワークフローをWebアプリ／CMSとして内製する動きがあり、編集現場を理解したWebエンジニアの価値が高まっています。</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">データ活用・広告連携</h3>
              <p className="text-sm text-slate-600">視聴・閲覧データを使ったレコメンドや、配信に連動した広告（CTV含む）の領域でエンジニア需要が見られます。データ／ML方向への発展余地があります。</p>
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
          <p className="text-slate-600 leading-relaxed text-sm">ポイントは「配信・コンテンツ運用の業務知識」を前面に出しつつ、求人で求められる開発スタックのうち自分が満たせるものを明確にすることです。すべてを揃える必要はなく、強い領域から応募先を選ぶとミスマッチが減ります。</p>
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
          <p className="text-slate-500 text-xs leading-relaxed">上記は職種・媒体横断の平均値であり、メディア／デジタルメディア領域に限った数値ではありません。自分の現年収と応募先の提示レンジを並べて判断するのが基本です。</p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">デジタルメディア領域の受け皿は、おおまかに次のタイプに分かれます。どこが自分の経験を活かせるかで応募戦略を決めます。</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["放送局・出版社系のデジタル部門", "既存メディアのWeb/配信サービス。業界知識との親和性が高い"],
              ["OTT・動画配信プラットフォーマー", "配信インフラ・視聴体験。放送・配信技術が直接活きる"],
              ["メディアテック系スタートアップ", "新しいプロダクト開発。裁量が大きくモダンスタックが多い"],
              ["広告／収益化プラットフォーム", "配信連動広告（CTV含む）。広告領域への越境ルート"],
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
              { step: "1", title: "経験の棚卸し（業務知識＋技術）", desc: "配信・送出・CMS・編集ワークフローなど関わった領域を整理。配信安定性の改善やコスト削減など、数値で語れる実績を抽出する。" },
              { step: "2", title: "ギャップの特定と学習", desc: "応募したい求人の必須要件を読み、自分に足りないスタック（モダンWeb開発、クラウド運用など）を把握。在職中に小さく作って学習履歴を残す。" },
              { step: "3", title: "エージェント登録で市場感を確認", desc: "Geekly、レバテックキャリアなどIT特化型に登録し、提案される求人の傾向と提示レンジを把握する。" },
              { step: "4", title: "職務経歴書で業務知識を翻訳", desc: "「放送・配信の実務知識」を、デジタル側の言葉（OTT、配信インフラ、CMS）に翻訳して伝える。必須要件に対する充足度を明示する。" },
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
            <p>30代・40代でメディアからデジタルメディアへ移る場合、強みは「業務知識の厚み」です。配信・編集・権利処理など、現場を分かっている人材はデジタル側でも貴重で、若手にはない説得力を持てます。一方で、採用側はモダンな開発経験の有無を見るため、ここを補う準備が鍵になります。</p>
            <p>40代では、プレイヤーとしての開発力に加えて、チームやプロダクトをまとめる経験が評価されやすくなります。メディア時代のプロジェクト推進・部門連携の経験を、デジタルプロダクト開発の文脈で語れるよう整理しておくと選択肢が広がります。年収の考え方は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの転職年収</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">メディアの知識をデジタルメディアで活かそう</h2>
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
