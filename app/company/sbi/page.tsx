import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SBIホールディングス エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "SBIホールディングスへのエンジニア転職を実データで解説。有価証券報告書の平均年収（2025年3月期）、フィンテック・ネット証券・ネット銀行のシステム、技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "977万円"],
  ["2022年3月期", "1,030万円"],
  ["2023年3月期", "1,041万円"],
  ["2024年3月期", "1,055万円"],
  ["2025年3月期", "1,062万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社SBIホールディングス（東証プライム・8473）"],
  ["事業領域", "金融サービス（ネット証券・ネット銀行・保険）、資産運用、暗号資産・Web3 等"],
  ["平均年間給与", "1,062万円（2025年3月期 有価証券報告書・持株会社単体／全社員平均）"],
  ["平均年齢", "41.0歳（2025年3月期 有価証券報告書・単体）"],
  ["従業員数", "単体 約1,400名／連結 約2万名規模（2025年3月期 有価証券報告書）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公式）", "Java / Python / Go / TypeScript / React / AWS / GCP / Kubernetes / ブロックチェーン関連"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
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
    q: "SBIホールディングスのエンジニア選考フローは？",
    a: "グループ各社・ポジションにより異なりますが、一般的には「書類選考」「複数回の面接」「適性検査」「オファー面談」の流れで、ポジションにより技術面接やコーディング課題が加わります。最新の内容はSBIグループ各社の採用ページで確認することが推奨されます。",
  },
  {
    q: "SBIホールディングスの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書（持株会社単体）によると、平均年間給与は1,062万円、平均年齢は41.0歳です。これは持株会社単体・全社員平均の値で、SBI証券・SBI新生銀行などグループ各社では水準・体系が異なります。エンジニア個人の年収は所属会社・職種・グレードにより異なります。",
  },
  {
    q: "SBIで働くエンジニアはどのようなシステムを担当しますか？",
    a: "SBIグループはネット証券（SBI証券）・ネット銀行（住信SBIネット銀行等）・保険・資産運用・暗号資産など幅広い金融サービスを展開しており、大規模な金融取引システム、フィンテック、ブロックチェーン／Web3関連まで担当領域が広いのが特徴です。所属会社により扱う技術・ドメインが異なります。",
  },
  {
    q: "SBIの技術スタックは？",
    a: "グループ各社の技術ブログ・採用情報（2026年6月時点）では、Java・Python・Go・TypeScript・React、インフラにAWS・GCP・Kubernetes、暗号資産・Web3領域でブロックチェーン関連技術などが挙げられています。金融基幹系から新規フィンテックまで幅広く、配属会社・プロダクトにより使用技術は大きく異なります。",
  },
  {
    q: "SBIはフィンテック・Web3に力を入れていますか？",
    a: "SBIグループは暗号資産取引・ブロックチェーン・デジタル資産など、いわゆるWeb3・フィンテック領域に積極的に投資・参入していることを公式に発信しています。新しい金融技術に挑戦したいエンジニアにとって、関連ポジションが存在する点が特徴です。",
  },
  {
    q: "SBIへの転職難易度は高いですか？",
    a: "金融×ITの掛け合わせが評価されるため、金融ドメイン知識や、可用性・セキュリティを意識した大規模システムの実務経験があると有利です。フィンテック・クラウドの経験に加え、規制業種ならではの品質意識が問われる傾向です。",
  },
  {
    q: "30代・40代でもSBIに転職できますか？",
    a: "持株会社単体の平均年齢41.0歳と、相対的に年齢層が高めの組織です。金融ドメイン・大規模システム・セキュリティの専門性や、マネジメント経験が評価されやすく、30代40代のミドル層にとって専門性を活かしやすい環境と言えます。",
  },
];

export default function SbiCompanyPage() {
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
      <ArticleJsonLd title="SBIホールディングス エンジニア転職ガイド" description="SBIホールディングスへのエンジニア転職を実データで解説。有価証券報告書の平均年収、フィンテック・ネット証券・ネット銀行のシステム、技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/sbi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "SBIホールディングス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SBIホールディングス エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | フィンテックを牽引する総合金融グループのエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          SBIホールディングスは、ネット証券（SBI証券）・ネット銀行・保険・資産運用・暗号資産など幅広い金融サービスを展開する東証プライム上場（証券コード8473）の総合金融グループです。大規模な金融取引システムからフィンテック・Web3まで、エンジニアの担当領域が広いのが特徴です。本ページでは、有価証券報告書・公式採用情報・グループ各社の技術発信の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "SBIホールディングス 有価証券報告書（2025年3月期）",
            "SBIグループ各社 公式 採用ページ／技術ブログ",
            "SBIホールディングス公式 企業情報（会社概要・事業内容）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              SBIは<strong>金融×ITの掛け合わせで、ネット証券・銀行からWeb3まで幅広いフィンテック領域に携われる総合金融グループ</strong>です。可用性・セキュリティを重視した大規模システムの実務経験や、金融ドメイン知識が活きます。所属会社により技術・働き方が異なる点に注意が必要です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：金融ドメインに関心があり、可用性・セキュリティを意識した大規模システム開発の経験があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：規制・品質要件の厳しさを敬遠する人、単一の小規模プロダクトに集中したい人</li>
              <li>● <strong>30代・40代</strong>：金融ドメイン・セキュリティ・マネジメントの専門性を活かしやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書（持株会社単体）の全社員平均値。グループ各社（SBI証券等）では水準・体系が異なります。技術スタックはグループ各社の公式採用情報・技術ブログ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ネット証券・銀行を支える大規模金融システム</h3>
              <p className="text-sm text-petrol-deep">SBI証券・ネット銀行などは膨大な取引を高い可用性で処理する必要があり、ミッションクリティカルな金融システムの開発・運用に携われます。品質・信頼性を重視する開発文化が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フィンテック・Web3への積極投資</h3>
              <p className="text-sm text-petrol-deep">暗号資産・ブロックチェーン・デジタル資産など、新しい金融技術にグループとして積極的に参入していることを公式に発信しています。最新の金融技術に挑戦できる関連ポジションが存在します。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グループ各社で多様なキャリア</h3>
              <p className="text-sm text-petrol-deep">証券・銀行・保険・資産運用など多数のグループ会社があり、扱うドメイン・技術が幅広いのが特徴です。所属会社により開発スタイル・働き方が異なるため、応募時にどの会社・領域かを確認することが重要です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SBIグループ各社の技術ブログ・採用情報（2026年6月時点）で公開されている主な技術要素は以下の通りです。金融基幹系から新規フィンテックまで幅広く、配属会社・プロダクトにより使用技術は大きく異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>バックエンド</strong>：Java、Python、Go</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：AWS、Google Cloud Platform、Docker、Kubernetes</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ・分析</strong>：各種RDB、DWH、データ分析基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>暗号資産・Web3</strong>：ブロックチェーン関連技術（該当領域）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: SBIグループ各社 公式 採用情報・技術ブログ（2026年6月時点）。所属会社・プロダクトにより技術構成は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるSBIホールディングスは、有価証券報告書で持株会社単体の平均年間給与を開示しています。<strong>2025年3月期は1,062万円（平均年齢41.0歳・持株会社単体／全社員平均）</strong>です。なお、この値は持株会社単体のものであり、SBI証券などグループ各社では水準が異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（持株会社単体）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: SBIホールディングス 有価証券報告書（各年3月期）。いずれも<strong>持株会社単体・全社員平均</strong>の平均年間給与です。グループ各社・エンジニア個人の年収は所属会社・職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">有価証券報告書の数値は持株会社単体のものであり、実際の配属先となるグループ事業会社（SBI証券・銀行・フィンテック子会社等）の年収体系とは一致しません。提示額は応募する会社・ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SBIグループ各社の採用ページで案内されている一般的な流れです。最新の内容は<a href="https://www.sbigroup.co.jp/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">SBIグループ採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>面接（複数回。技術力・金融ドメイン理解・カルチャーフィットを確認）</li>
            <li>技術面接・コーディング課題（ポジションにより）</li>
            <li>適性検査</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: SBIグループ各社 採用ページの要約。選考は所属会社・職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模・高可用性システムを意識した設計・実装力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>金融ドメイン・規制業種ならではの品質／セキュリティ意識</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>事業・サービス理解と、ビジネス視点での技術選定</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チーム・他部門との協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              SBIホールディングス（持株会社単体）の平均年齢は41.0歳（2025年3月期）と、相対的に年齢層が高めの組織です。年齢よりも金融ドメイン・大規模システム・セキュリティの専門性が問われるため、30代・40代のミドルエンジニアにとって<strong>これまでの専門性やマネジメント経験を活かしやすい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。SBIホールディングス（持株会社単体）の平均（1,062万円）はこれを大きく上回りますが、これは持株会社単体・全社平均であり、実際の配属先となるグループ各社の体系とは異なります。30代・40代は「応募する会社・グレードの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              30代40代では、クラウド（<Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link>）や<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>の実務に、<Link href="/cert/aws-saa/" className="text-petrol hover:underline">AWS認定（SAA）</Link>などの資格や金融ドメイン知識を掛け合わせると評価につながりやすい領域です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SBI転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。金融系・大規模システムの求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラス・管理職に強く、金融×ITのミドル・シニア層の支援に定評。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "スカウト型。金融・フィンテックのハイクラス求人が集まりやすい。" },
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
          <h2 className="text-xl font-bold mb-3">SBIグループへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">金融×ITの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "PayPay エンジニア転職ガイド", href: "/company/paypay/" },
              { name: "マネーフォワード エンジニア転職ガイド", href: "/company/moneyforward/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "AWSエンジニアのスキル", href: "/skill/aws/" },
              { name: "セキュリティエンジニアのスキル", href: "/skill/security/" },
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
