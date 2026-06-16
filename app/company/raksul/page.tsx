import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ラクスル（RAKSUL）の年収は平均742万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ラクスル（4384・東証プライム）へのエンジニア転職を実データで解説。有価証券報告書の平均年収742万円（2025年7月期・全社員平均）、Ruby on Rails/TypeScriptの技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年7月期", "647万円"],
  ["2022年7月期", "631万円"],
  ["2023年7月期", "703万円"],
  ["2024年7月期", "694万円"],
  ["2025年7月期", "742万円"],
];

const basicData: [string, string][] = [
  ["企業名", "ラクスル株式会社（東証プライム・4384）"],
  ["事業領域", "印刷ECなどのマーケティングプラットフォーム・調達プラットフォーム（産業のデジタル化）"],
  ["平均年間給与", "742万円（2025年7月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "35.9歳（2025年7月期 有価証券報告書）"],
  ["従業員数", "連結791名／単体385名（2025年7月期 有価証券報告書）"],
  ["本社所在地", "東京都品川区"],
  ["技術スタック（公開情報）", "Ruby / Ruby on Rails / TypeScript / Vue.js / Nuxt.js / AWS / GCP / Git・GitHub"],
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
    q: "ラクスルのエンジニア選考フローは？",
    a: "公式採用サイト・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「複数回の面接」「オファー面談」という流れで、選考期間は平均で約2か月とされています。職種により技術課題が加わる場合があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "ラクスルの平均年収はいくらですか？",
    a: "2025年7月期の有価証券報告書によると、全社員平均の平均年間給与は742万円、平均年齢は35.9歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・スキル評価により異なります。",
  },
  {
    q: "ラクスルの技術スタックは？",
    a: "公式技術ブログ（RAKSUL TechBlog）・採用ページの公開情報によると、バックエンドはRuby・Ruby on Railsが中心、フロントエンドはTypeScript・Vue.js・Nuxt.jsを使用しています。インフラはAWS（Aurora・ECS・S3等）・GCP（BigQuery等）を採用しています。プロダクトにより構成は異なります。",
  },
  {
    q: "ラクスルはどんな会社ですか？上場していますか？",
    a: "ラクスル株式会社は「仕組みを変えれば、世界はもっと良くなる」をビジョンに、印刷ECなどデジタル化が進んでいない伝統的産業をインターネットで変革する企業で、東証プライム上場（証券コード4384）です。マーケティングプラットフォームと調達プラットフォームの2セグメントで事業を展開しています。",
  },
  {
    q: "ラクスルのエンジニア組織はどんな構成ですか？",
    a: "公式技術ブログによると、エンジニアは日本のほかベトナム・インドのオフィスにも在籍し、グローバルな開発体制を採っています。レガシー産業のデジタル化という難度の高いドメインに、モダンな技術で取り組む点が特徴です。",
  },
  {
    q: "ラクスルで活きる経験は？",
    a: "Ruby on Railsを中心としたWebアプリケーション開発の実務経験が基本です。ECやプラットフォームの開発・運用経験、業務フローや産業構造を理解してプロダクトに落とし込む力、フロントエンド（Vue/Nuxt）の経験などが活きやすい傾向です。",
  },
  {
    q: "30代・40代でもラクスルに転職できますか？",
    a: "平均年齢35.9歳（2025年7月期）と相対的に年齢層に幅があり、年齢よりも実務経験・専門性が問われます。プラットフォーム設計やドメイン課題の解決経験、マネジメント経験があれば、ミドル層でも十分挑戦できる環境です。",
  },
];

export default function RaksulCompanyPage() {
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
      <ArticleJsonLd title="ラクスル エンジニア転職ガイド" description="ラクスル（4384・東証プライム）へのエンジニア転職を実データで解説。有価証券報告書の平均年収742万円（2025年7月期・全社員平均）、Ruby on Rails/TypeScriptの技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/raksul/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "Vue.jsの転職ガイド", href: "/skill/vue/" }, { name: "Nuxtの転職ガイド", href: "/skill/nuxt/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ラクスル" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ラクスル エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 産業のデジタル化を進めるプラットフォーム企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ラクスル株式会社は、印刷ECなどデジタル化が進んでいない伝統的産業をインターネットの仕組みで変革する東証プライム上場（証券コード4384）の企業です。本ページでは、有価証券報告書・公式採用情報・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ラクスル株式会社 有価証券報告書（2025年7月期）",
            "ラクスル公式 採用サイト（recruit.raksul.com）",
            "RAKSUL TechBlog（公式技術ブログ）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ラクスルは<strong>Ruby on Rails中心のモダンな開発で、レガシー産業のデジタル化に挑むプラットフォーム企業</strong>です。Webアプリ開発の実務経験が前提で、難易度は中〜やや高。全社員平均年収742万円（2025年7月期 有報）はWeb系の中でも高めの水準です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Rubyでの実務経験があり、産業構造や業務フローを理解してプロダクト化することに関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：toC娯楽サービス中心の開発を強く志向する人、ドメイン理解より純粋な技術追求を優先したい人</li>
              <li>● <strong>30代・40代</strong>：平均年齢35.9歳と年齢層に幅があり、設計・ドメイン課題解決の実績があればハンデになりにくい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年7月期 有価証券報告書に基づく値（平均給与・年齢は単体）。技術スタックはRAKSUL TechBlog・採用ページの公開情報（2026年6月時点で確認できる範囲）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レガシー産業のデジタル化というドメイン</h3>
              <p className="text-sm text-petrol-deep">「仕組みを変えれば、世界はもっと良くなる」をビジョンに、印刷・物流などデジタル化の遅れた産業にプラットフォームを提供しています。単なるWebサービスではなく、産業構造そのものを変える難度の高い課題に取り組める点が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Ruby on Rails中心のモダンな開発</h3>
              <p className="text-sm text-petrol-deep">公式技術ブログによると、日々の業務で最も使われる言語はRubyで、フロントエンドはTypeScript・Vue.js・Nuxt.jsを採用しています。インフラはAWS・GCPを活用し、モダンな開発環境が整備されています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバルな開発体制</h3>
              <p className="text-sm text-petrol-deep">エンジニアは日本のほかベトナム・インドのオフィスにも在籍し、複数拠点で開発を進めています（公式技術ブログ）。グローバルチームでの協働経験を積みたいエンジニアにとって魅力的な環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下はRAKSUL TechBlog（公式技術ブログ）・採用ページの公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>バックエンド</strong>：Ruby / Ruby on Rails（中心）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、Vue.js、Nuxt.js</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：AWS（Aurora、EC2、ECS、S3、RDS、Lambda 等）、GCP（Firebase、BigQuery 等）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>開発ツール</strong>：Git／GitHub、CI/CD（CodeBuild・CodePipeline 等）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: RAKSUL TechBlog（techblog.raksul.com）・採用ページ等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるラクスルは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年7月期は742万円（平均年齢35.9歳・全社員平均）</strong>で、近年は上昇傾向です。
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
          <p className="text-xs text-slate-400 mb-4">出典: ラクスル株式会社 有価証券報告書（各年7月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・スキル評価により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため、本ページでは断定しません。提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用サイト・採用媒体の公開情報をもとにした一般的な流れです。選考期間は平均で約2か月とされています。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。働き方や事業の理解を深める）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術ディスカッション・カルチャーフィットを確認）</li>
            <li>技術課題（職種により実施される場合がある）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ラクスル公式 採用サイト（recruit.raksul.com）／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Ruby on Rails等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>EC・プラットフォームの開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>産業構造・業務フローを理解しプロダクトへ落とし込む力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ビジョンへの共感・チームでの協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ラクスルは平均年齢35.9歳（2025年7月期・全社員平均）と、Web系の中では年齢層に幅があります。年齢よりも実務経験・専門性が問われる傾向のため、30代・40代のミドルエンジニアでも<strong>プラットフォーム設計やドメイン課題の解決実績があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ラクスルの全社員平均（742万円）はこれを上回りますが、これは全社平均であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              業務システムや産業領域の知見を持つミドル層にとっては、これまでの経験を新しい形で活かせる選択肢になり得ます。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ラクスル転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。SaaS・Web系の求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">ラクスルへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "freee エンジニア転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード エンジニア転職ガイド", href: "/company/moneyforward/" },
              { name: "Sansan エンジニア転職ガイド", href: "/company/sansan/" },
              { name: "note エンジニア転職ガイド", href: "/company/note/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
