import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ZOZOの年収は平均656万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ZOZOへのエンジニア転職を実データで解説。有価証券報告書の平均年収656万円（2025年3月期・全社員平均）、Go/Kubernetes等の技術スタック、コーディングテストなしの選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "547万円"],
  ["2022年3月期", "573万円"],
  ["2023年3月期", "645万円"],
  ["2024年3月期", "692万円"],
  ["2025年3月期", "656万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ZOZO（東証プライム・3092）"],
  ["事業領域", "ファッションEC（ZOZOTOWN）・計測技術・ファッションテック"],
  ["平均年間給与", "656万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "34.3歳（2025年3月期 有価証券報告書）"],
  ["本社所在地", "千葉県千葉市（幕張）"],
  ["技術スタック（公開情報）", "Go / Java / Kotlin / Swift / TypeScript / Python / Kubernetes（EKS）/ AWS"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公開情報ベース）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "ZOZOのエンジニア中途採用の選考フローは？",
    a: "公式・公開インタビューによると、書類選考と面接2〜3回が基本で、コーディングテストは実施していないと公表されています。技術力は現場のメンバーやリーダークラスのエンジニアとの面接での対話を通じて評価され、応募から内定まで1ヶ月程度が目安とされています。",
  },
  {
    q: "ZOZOの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、全社員平均の平均年間給与は656万円、平均年齢は34.3歳です。これは技術職に限らない全社員平均値であり、前期（2024年3月期692万円）からは減少しています。エンジニア個人の年収は職種・グレードにより異なります。",
  },
  {
    q: "ZOZOの技術スタックは？",
    a: "公式技術ブログ「ZOZO TECH BLOG」では、ZOZOTOWNのマイクロサービス移行でGoを採用し、AWS上のEKS（マネージドKubernetes）でコンテナ基盤を運用している事例が公開されています。アプリ領域ではKotlin・Swift、ほかにJava・TypeScript・Pythonなども用いられています。",
  },
  {
    q: "ZOZOのワークライフバランスの評判は？",
    a: "OpenWork等の口コミプラットフォームでは、コアタイムなしのフレックス制度があり残業は少なめ・有給を取得しやすいという傾向の声が見られます。一方で部署によって差があるという指摘もあります（2026年6月時点の口コミ傾向）。",
  },
  {
    q: "ZOZOで有利な経験は？",
    a: "大規模ECサイトの開発・運用経験、Goやマイクロサービスの経験、AWS/Kubernetesでのインフラ経験、推薦・機械学習や計測技術（画像処理・3D）の経験が評価されやすい傾向です（公開技術情報・求人傾向ベース）。",
  },
  {
    q: "ZOZOの開発の特徴は？",
    a: "年間取扱高の大きいZOZOTOWNを支える大規模ECプラットフォームの開発が中心です。モノリスからGoベースのマイクロサービスへの段階的移行を進めており、カナリアリリースやサービス間通信の信頼性向上などモダンな取り組みが技術ブログで公開されています。",
  },
  {
    q: "ZOZOへの転職難易度は高いですか？",
    a: "コーディングテストはない一方、現場エンジニアとの面接で技術力と『一緒に働きたいか』を双方が見極める形式です。実務経験と対話力の両面が問われるため、これまでの開発の意思決定を言語化できる準備が有効です。",
  },
  {
    q: "30代・40代でもZOZOに転職できますか？",
    a: "平均年齢34.3歳の組織で、年齢よりも担えるロールと専門性が重視される傾向です。大規模EC・マイクロサービス・計測技術などの経験を活かせるかが鍵になります。",
  },
];

export default function ZozoCompanyPage() {
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
      <ArticleJsonLd title="ZOZO エンジニア転職ガイド" description="ZOZOへのエンジニア転職を実データで解説。有価証券報告書の平均年収656万円（2025年3月期・全社員平均）、Go/Kubernetes等の技術スタック、コーディングテストなしの選考フロー、30代40代の現実までまとめました。" url="/company/zozo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "App Storeにアプリを公開するの転職ガイド", href: "/skill/swift/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ZOZO" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ZOZO エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 日本最大級のファッションECプラットフォーム</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ZOZOは、ファッションEC「ZOZOTOWN」と計測技術などのファッションテックを展開する東証プライム上場（証券コード3092）のテックカンパニーです。本ページでは、有価証券報告書・公式採用ページ・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ZOZO 有価証券報告書（2025年3月期）",
            "ZOZO公式 中途採用ページ／公開インタビュー",
            "ZOZO TECH BLOG",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ZOZOは<strong>大規模ファッションECをGoベースのマイクロサービスへ刷新中の、技術投資に積極的なテック企業</strong>です。コーディングテストはなく、現場エンジニアとの面接で技術力と相性を見極める選考が特徴。働き方は比較的柔軟という口コミ傾向です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：大規模EC・マイクロサービス・Go/Kubernetes等の経験があり、対話で技術を語れるエンジニア</li>
              <li>● <strong>向いていない人</strong>：英語環境や超高年収を最優先する人（全社員平均は656万円）</li>
              <li>● <strong>30代・40代</strong>：大規模EC・計測技術・基盤刷新の経験を活かせるかが鍵</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書に基づく全社員平均値。技術スタックは公式技術ブログ等の公開情報。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模ECプラットフォームの技術基盤</h3>
              <p className="text-sm text-blue-700">ZOZOTOWNを支える大規模ECプラットフォームの開発・運用が中心です。高トラフィック・高可用性が求められるシステムの設計経験を積める環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Goベースのマイクロサービスへの段階的移行</h3>
              <p className="text-sm text-blue-700">公式技術ブログ「ZOZO TECH BLOG」では、モノリスからGoベースのマイクロサービスへの段階的移行、AWS/EKS上のコンテナ運用、カナリアリリースやサービス間通信の信頼性向上などモダンな取り組みが公開されています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ファッション×テクノロジーの融合</h3>
              <p className="text-sm text-blue-700">足の計測などの計測技術や、ファッション領域での推薦・機械学習の活用など、ファッション×テクノロジーならではの技術チャレンジがあります。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式技術ブログ「ZOZO TECH BLOG」や公開インタビューで言及されている主な技術要素です。事業・プロダクトごとに採用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：ZOZOTOWNのマイクロサービス移行でGoを採用。軽量・起動速度・並行処理の強みを評価した技術選定が公開されています。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>インフラ</strong>：AWS上のEKS（マネージドKubernetes）でコンテナ基盤を運用。IaC/CI/CDやセキュリティ標準（govulncheck・ECRイメージスキャン等）の事例が公開されています。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>アプリ・フロント</strong>：Kotlin / Swift（モバイル）、TypeScript（Web）など。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>その他</strong>：Java、Python なども領域により使用されています。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ZOZO TECH BLOG・公開インタビュー（公開情報）。記載は公開事例に基づく要約であり、全社・全プロダクトの構成を示すものではありません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるZOZOは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年3月期は656万円（平均年齢34.3歳・全社員平均）</strong>で、前期（692万円）からは減少しています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（全社員平均）</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([year, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{year}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: ZOZO 有価証券報告書（各年3月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。ZOZOは販売・物流など多様な職種を含むため、エンジニア個人の年収は職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は全職種を含む全社員平均です。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定を避けています。実際の提示はポジション・グレードにより幅があるため、転職エージェント経由で個別の求人ごとに確認することを推奨します。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式・公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ZOZOの中途採用は、コーディングテストを実施せず、現場エンジニアとの面接で技術力を見極めるのが特徴です。公開情報をもとにした一般的な流れは以下の通りです。最新の選考内容は<a href="https://corp.zozo.com/recruit/mid-career/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>エントリー（公式採用ページ／エージェント経由）</li>
            <li>書類選考</li>
            <li>面接2〜3回（現場メンバー・リーダークラスのエンジニアが担当。技術力と相性を双方で確認）</li>
            <li>オファー（応募から内定まで1ヶ月程度が目安）</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ZOZO公式中途採用ページ・公開インタビューの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報や口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>実務での開発経験と、技術的な意思決定を対話で説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>現場エンジニアとの「一緒に働きたいか」という相互理解・カルチャーフィット</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模EC・マイクロサービス等のドメインへの理解・関心</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>自分の強み・志向を自分の言葉で語れるか</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ZOZOは平均年齢34.3歳（2025年3月期・全社員平均）の組織です。コーディングテストがなく対話重視の選考は、<strong>これまでの実務経験と意思決定を言語化できる30代・40代のミドルエンジニアにとってはアピールしやすい形式</strong>と言えます。大規模EC・マイクロサービス移行・計測技術などの経験を活かせるかが評価の鍵です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ZOZOの全社員平均（656万円）は販売・物流など全職種を含む値であり、エンジニア職の提示はポジション・グレード次第です。前期から全社平均が減少している点も踏まえ、提示額は個別求人で必ず確認しましょう。
            </p>
            <p>
              働き方は、コアタイムなしのフレックスで残業少なめ・有給を取得しやすいという口コミ傾向がある一方、部署差の指摘もあります。面談時にチームの開発スタイルや働き方を確認しておくと安心です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて確認してください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ZOZO転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。EC系・メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。EC系企業への提案実績が豊富で提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webに強い成功報酬型転職サイト。カジュアル面談で社風を把握しやすい。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ZOZOへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">EC系・Web系企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ エンジニア転職ガイド", href: "/company/mercari/" },
              { name: "楽天グループ エンジニア転職ガイド", href: "/company/rakuten/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "リクルート エンジニア転職ガイド", href: "/company/recruit/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
