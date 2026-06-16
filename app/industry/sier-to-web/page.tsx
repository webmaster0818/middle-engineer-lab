import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SIerからWeb系に転職するには｜現実と進め方を徹底解説";
const DESCRIPTION =
  "SIerからWeb系自社開発企業への転職を、技術ギャップ・文化ギャップ・年収の現実から徹底解説。30代・40代SIer出身者が押さえるべき準備、職種選び、エージェントの使い方までガイドします。";

const toc = [
  { id: "conclusion", label: "結論：SIerからWeb系は十分狙える。ただし準備で差がつく" },
  { id: "trend", label: "Web系がSIer出身者を採用する背景" },
  { id: "gap", label: "技術ギャップ・文化ギャップの正体" },
  { id: "salary", label: "年収の現実（公的・公表データ）" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "company-types", label: "主な企業タイプと具体例" },
  { id: "steps", label: "転職の進め方5ステップ" },
  { id: "translate", label: "SIer経験を“翻訳”する職務経歴書の見せ方" },
  { id: "middle", label: "30代・40代SIer出身者の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows: [string, string, string][] = [
  ["バージョン管理", "SVN・社内ツール・Excel管理も残る", "Git/GitHub・GitHub Flowが前提"],
  ["開発手法", "ウォーターフォール・工程分業", "アジャイル/スクラム・職能横断チーム"],
  ["リリース", "数か月〜年単位・手動も多い", "CI/CDで週次〜デイリー自動デプロイ"],
  ["インフラ", "オンプレ・物理/仮想サーバー", "クラウド（AWS/GCP）・IaC・コンテナ"],
  ["言語・FW", "Java/C#・ベンダー製品依存も", "TypeScript/Go/Ruby・モダンFW"],
  ["評価軸", "工程管理・ドキュメント品質", "プロダクトへの貢献・コードと設計"],
  ["働き方", "客先常駐が一定割合残る", "自社オフィス/フルリモートが多い"],
];

const activeRows: [string, string][] = [
  ["要件定義・業務理解", "顧客課題を仕様に落とす力は、Web系の「プロダクト仕様策定」で高く評価される"],
  ["設計・ドキュメント力", "アーキテクチャ設計やADR（設計判断記録）に直結。属人化を嫌うチームほど重宝される"],
  ["品質・テスト意識", "テスト戦略・障害対応の経験は、SREやQA、リリース品質の観点で武器になる"],
  ["大規模・基幹システム経験", "可用性・トランザクション・データ整合性の勘所はSaaSのバックエンドで効く"],
  ["プロジェクト推進力", "見積もり・進捗管理・利害調整は、テックリードやEMの土台になる"],
];

const fillRows: [string, string][] = [
  ["Git/GitHubの実務運用", "ブランチ運用・PR・コードレビュー文化に慣れる。個人開発でも日常的に使う"],
  ["モダンFWとTypeScript", "React/Next.jsやGo等。Java/C#経験者はTypeScriptへの移行が比較的スムーズ"],
  ["クラウドとCI/CD", "AWS/GCPの基礎、GitHub Actions等によるデプロイ自動化、Dockerの基礎"],
  ["プロダクト志向", "「言われた通り作る」から「数値・ユーザーを見て改善する」への発想転換"],
  ["公開できる成果物", "GitHubのポートフォリオで「コードを書けるSIer出身者」であることを証明する"],
];

const companyTypes: { title: string; desc: string; links: { name: string; href: string }[] }[] = [
  {
    title: "メガベンチャー・大手Web",
    desc: "規模が大きく、SIer出身者の受け入れ実績も豊富。基幹・大規模システムの経験が評価されやすく、年収を落とさず移れる可能性も高い。",
    links: [
      { name: "サイバーエージェント", href: "/company/cyberagent/" },
      { name: "DeNA", href: "/company/dena/" },
      { name: "楽天", href: "/company/rakuten/" },
    ],
  },
  {
    title: "SaaS・BtoB事業会社",
    desc: "業務システムの知識やドメイン理解がそのまま活きやすい。腰を据えてプロダクトを育てたいミドル層と相性が良い。",
    links: [
      { name: "freee", href: "/company/freee/" },
      { name: "マネーフォワード", href: "/company/moneyforward/" },
      { name: "Sansan", href: "/company/sansan/" },
    ],
  },
  {
    title: "スタートアップ",
    desc: "裁量と技術選定の自由度が大きい一方、年収は一時的に下がる場合もある。ストックオプションや成長フェーズを含めて判断したい。",
    links: [
      { name: "LayerX", href: "/company/layerx/" },
      { name: "SmartHR", href: "/company/smarthr/" },
      { name: "Plaid", href: "/company/plaid/" },
    ],
  },
];

const faqs = [
  {
    q: "SIerからWeb系に転職すると年収は下がりますか？",
    a: "一概に下がるとは言えません。大手SIerから少人数のスタートアップに移る場合は一時的に下がるケースもありますが、メガベンチャーやSaaS企業では同等以上を狙えます。参考としてレバテック公表の年代別平均年収（2025年）では正社員SEの30代が約499万円、40代が約618万円です。doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）でも、転職者の約6割が年収アップ、IT・通信の平均決定年収は2024年度486万円とされています。重要なのは応募する企業タイプと、自分のスキルの市場価値を把握することです。",
  },
  {
    q: "SIer経験は何年あればWeb系に転職できますか？",
    a: "年数より「実際にコードを書き、設計に関わってきたか」が重視されます。目安として3年程度の開発経験があれば選択肢は広がりますが、上流工程やマネジメント中心だった場合は、個人開発のポートフォリオでコーディング力を補う準備が有効です。",
  },
  {
    q: "SIerとWeb系で最も大きな違いは何ですか？",
    a: "開発の進め方とエンジニアの裁量です。SIerはウォーターフォール型で工程を分業するのに対し、Web系はアジャイルで企画からデプロイまでチームが一貫して担います。技術選定の自由度、リリースサイクルの速さ、プロダクトへの当事者意識の強さがWeb系の特徴です。",
  },
  {
    q: "Web系転職のために何を学ぶべきですか？",
    a: "Git/GitHubの実務運用、モダンなWebフレームワーク（React/Next.jsなど）、クラウド（AWS/GCP）、CI/CDとDockerの基礎が中心です。これらを使って個人開発のアプリを作りGitHubで公開しておくと、書類選考の通過率が上がりやすくなります。",
  },
  {
    q: "30代後半・40代でもSIerからWeb系に転職できますか？",
    a: "可能です。ただし若手と同じ「ポテンシャル枠」ではなく、テックリード・アーキテクト・EM・DX推進など、設計力やマネジメント、業務知識を活かせるポジションを狙うのが現実的です。IT特化型エージェントに相談すると、経験に合った求人を紹介してもらいやすくなります。",
  },
  {
    q: "客先常駐（SES寄り）のSIer経験でも評価されますか？",
    a: "評価されます。担当した技術・規模・役割を具体的に語れることが鍵です。「どのプロジェクトで、何の技術を使い、どんな課題をどう解決したか」を整理しましょう。SES形態からの脱出を主眼にする場合は、別記事も参考にしてください。",
  },
  {
    q: "ポートフォリオは必須ですか？",
    a: "必須ではありませんが、上流工程中心だった方やコーディングのブランクがある方には強く推奨します。完成したアプリのコード、README、テスト、CI/CDの設定まで見せられると「現場で書ける」印象を与えられます。",
  },
  {
    q: "SIerからWeb系転職に強いエージェントはどこですか？",
    a: "IT/Web特化のレバテックキャリアや、IT/Web/ゲームに強いGeeklyが定番です。複数社に登録して求人と担当者を比較するのが基本戦略です。各社の特徴は当サイトのレビュー記事や比較記事で確認できます。",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function SierToWebPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/industry/sier-to-web/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "SIerからWeb系への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SIerからWeb系に転職するには｜現実と進め方を徹底解説
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | SIer→Web系キャリアチェンジの現実と全工程</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          SIerで培った設計力・業務知識・推進力は、Web系企業でも確かに通用します。一方で、開発の進め方やツール、評価のされ方は大きく異なり、ここを甘く見ると「思っていた仕事と違う」というミスマッチが起きやすいのも事実です。
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          本記事では、SIerからWeb系への転職を「技術ギャップ」「文化ギャップ」「年収の現実」という3つの観点から深掘りし、30代・40代のミドルエンジニアが取るべき具体的な進め方まで解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SIerからWeb系は十分狙える。ただし準備で差がつく</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              SIer出身者のWeb系転職は現実的です。設計・要件定義・大規模システムの経験は、SaaSやメガベンチャーで明確に武器になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 技術ギャップ（Git/クラウド/モダンFW）は、独学と個人開発で十分に埋められる範囲。</li>
              <li>② 文化ギャップ（アジャイル・プロダクト志向）の理解こそが、ミスマッチを防ぐ最大のポイント。</li>
              <li>③ 年収は企業タイプ次第。メガベンチャー・SaaSなら維持〜上昇、初期スタートアップは一時的な下落も想定する。</li>
            </ul>
          </div>
        </section>

        {/* 採用動向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web系がSIer出身者を採用する背景</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            事業会社のIT内製化とDXの流れの中で、基幹システムや業務ドメインを理解したエンジニアの価値は高まっています。経済産業省の「IT人材需給に関する調査」（2019年3月公表）では、2030年に最大約79万人のIT人材不足が試算されており、Web系企業も即戦力の確保に積極的です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            特にBtoB SaaSや金融・人事・経理など業務領域を扱うプロダクトでは、「ドメイン知識を持つエンジニア」が不足しがちです。SIerで業務システムに深く関わってきた経験は、こうした企業にとって希少性のある強みになります。ただし採用の現場では「アジャイルでチーム開発ができるか」「自分でコードを書き、デプロイまで回せるか」が必ず確認されます。
          </p>
        </section>

        {/* ギャップ */}
        <section id="gap" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術ギャップ・文化ギャップの正体</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まずはSIerとWeb系の違いを具体的に把握しましょう。下表は一般的な傾向であり、SIerにもアジャイル・内製寄りの組織はあります。あくまで「自分の現職がどちら寄りか」を測る物差しとして使ってください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/4 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">SIer（傾向）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Web系（傾向）</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map(([item, sier, web], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-700 border-b border-slate-200">{item}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{sier}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-slate-800 mb-2 mt-6">技術ギャップ：埋められる範囲がほとんど</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Git/GitHub、クラウド、CI/CD、モダンFWは、SIerでJava/C#などの開発をしてきた方なら独学で十分キャッチアップできます。むしろ難所は「ツールの使い方」ではなく、コードレビューやPRを通じてチームで品質を担保する“運用文化”に慣れることです。最初は個人開発でブランチ運用・PR・自動テストを一通り体験しておくと、入社後の立ち上がりが速くなります。
          </p>

          <h3 className="font-bold text-slate-800 mb-2 mt-6">文化ギャップ：ここが本当の関門</h3>
          <p className="text-slate-600 leading-relaxed mb-2">
            より本質的なのは文化の違いです。Web系では「仕様書通りに作って終わり」ではなく、リリース後の数値やユーザーの反応を見て継続的に改善することが当たり前です。意思決定がチームに委ねられる分、自走力と当事者意識が求められます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            「指示を待つ」「ドキュメントを完璧に固めてから着手する」働き方に慣れていると、スピードや曖昧さに戸惑うことがあります。逆に、SIerで培った「仕様を整理し、抜け漏れを潰す力」はアジャイルの現場でも価値があるため、文化に適応しつつ自分の強みを翻訳して提示することが成功の分かれ目になります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の現実（公的・公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「Web系=高年収」というイメージは半分正解で半分誤解です。実際には企業タイプと自分の市場価値で大きく変わります。公表されているデータを基準に、現実的な期待値を持ちましょう。
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
                  ["正社員SE 40代の平均年収（レバテック公表・2025年）", "約618万円"],
                  ["年収1,000万円以上の割合 30代（同）", "8.01%"],
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
            ※出典：レバテック公表の年代別平均年収（2025年）、doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）。数値は調査時点の公表値であり、個別企業の提示額を保証するものではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ポイントは、メガベンチャーやSaaSの中核ポジションであればSIer時代と同等以上を狙える一方、シードに近いスタートアップでは一時的に下がることもある点です。年収交渉は転職活動の終盤で大きく効くため、エージェントに相場を確認しながら進めるのが安全です。年収の考え方は
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がる？</Link>
            、30代・40代の相場は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 転職パターン */}
        <section id="patterns" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIer経験を活かせる代表的な移行パターンを整理します。「今のスキルに最も近いルート」から検討すると、ギャップを最小化できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "バックエンドエンジニア", desc: "Java/C#の経験がそのまま活きる。Go/TypeScriptへの転向も比較的容易で、王道のルート。" },
              { title: "SRE / インフラエンジニア", desc: "基盤設計・運用の経験がクラウドインフラ・IaCで評価される。可用性設計の勘所が強み。" },
              { title: "テックリード / EM", desc: "設計力とプロジェクト推進力が武器に。30代後半・40代が狙いやすいポジション。" },
              { title: "DX推進・社内SE", desc: "業務知識×技術力で事業会社のDXを推進。安定環境を求める方にも適する。" },
            ].map((pos, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{pos.title}</h3>
                <p className="text-sm text-slate-600">{pos.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-slate-800 mb-3 mt-8">活かせるスキル / 埋めるべきギャップ</h3>
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
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと具体例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            一口に「Web系」と言っても、メガベンチャー・SaaS・スタートアップでは求められるものも年収レンジも異なります。各企業の採用情報・技術スタックは個別ページも参考にしてください（各社の特徴は公開情報ベースで解説しています）。
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

        {/* ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方5ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "モダン技術のキャッチアップ", desc: "Git/GitHub、Docker、CI/CD、モダンFW（React/Next.js等）、クラウド（AWS/GCP）の基礎を学ぶ。Java/C#経験者はTypeScriptへの移行が比較的スムーズ。" },
              { step: "2", title: "個人開発でポートフォリオを作成", desc: "学んだ技術でWebアプリを作りGitHubで公開。README・テスト・CI/CDまで整えると「コードを書けるSIer出身者」であることを証明できる。" },
              { step: "3", title: "SIer経験の棚卸しと再定義", desc: "要件定義→プロダクト仕様策定、基本設計→アーキテクチャ設計、品質管理→テスト戦略のように、経験をWeb系の文脈に翻訳する。" },
              { step: "4", title: "IT特化型エージェントに登録", desc: "Web系の求人とパイプを持つエージェントに複数登録。SIerからの転職実績がある担当者に、相場と現実的な選択肢を確認する。" },
              { step: "5", title: "カルチャーフィットを確認する", desc: "面接やカジュアル面談で「なぜWeb系か」「どんなチームで働きたいか」を言語化。文化の合う企業を見極めることがミスマッチ防止の決め手。" },
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

        {/* 職務経歴書の翻訳 */}
        <section id="translate" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIer経験を“翻訳”する職務経歴書の見せ方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerの職務経歴書は工程名や役割が中心になりがちですが、Web系の採用担当には「何を作り、何に貢献したか」が伝わる表現に変換すると刺さりやすくなります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <p className="text-xs font-bold text-slate-500 mb-2">Before（SIer的な書き方）</p>
              <p className="text-sm text-slate-600">基本設計・詳細設計を担当。10名規模のプロジェクトでスケジュール管理と品質管理を実施。</p>
            </div>
            <div className="border border-[var(--line)] rounded-lg p-5 bg-petrol-soft">
              <p className="text-xs font-bold text-petrol mb-2">After（Web系に伝わる書き方）</p>
              <p className="text-sm text-slate-700">基幹システムのアーキテクチャ設計を主導。Javaでバックエンドを実装し、テスト戦略を整備して障害率を低減。10名チームの技術的な意思決定をリードした。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            使用技術・規模・自分の役割・成果（できれば数値）の4点を具体的に書くのが基本です。書き方の詳細は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            、面接準備は
            <Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策ガイド</Link>
            を参考にしてください。なお、客先常駐中心の経験から抜け出したい場合は
            <Link href="/career/se-to-web/" className="text-petrol hover:underline">SEからWebエンジニアへのキャリアチェンジ</Link>
            も役立ちます。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代SIer出身者の視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層のSIer出身者は、若手と同じ土俵で「ポテンシャル」を競うのではなく、これまでの蓄積を活かせるポジションを選ぶことが成功率を大きく左右します。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代前半：王道ルートを狙える</h3>
              <p className="text-sm text-petrol-deep">バックエンドやSREへの転向がしやすい時期。モダン技術のキャッチアップとポートフォリオで、コーディング力を示せれば選択肢は広い。年収を維持・向上させやすい層でもある。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代後半：設計力・推進力で勝負</h3>
              <p className="text-sm text-petrol-deep">純粋なコーディング速度より、設計・技術選定・チームの牽引が評価される。テックリードやEM、難易度の高いドメインのバックエンドが狙い目。SaaSのドメイン知識マッチングも有効。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメント・DXで価値を出す</h3>
              <p className="text-sm text-petrol-deep">EM・アーキテクト・DX推進・社内SEなど、業務知識とリーダーシップが活きる領域が現実的。求人数は絞られるため、ハイクラス向けやエージェントの非公開求人の活用が鍵になる。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            年代別の戦略は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職ガイド</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職ガイド</Link>
            で詳しく解説しています。
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
          <h2 className="text-xl font-bold mb-3">SIerからWeb系への転職、プロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、SIer出身者のキャリアチェンジ支援実績が豊富です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SESから脱出！転職成功ガイド", href: "/industry/ses-exit/" },
              { name: "SEからWebエンジニアへのキャリアチェンジ", href: "/career/se-to-web/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
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
