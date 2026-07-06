import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/monotaro/" },
  title: "MonotaRO（モノタロウ） エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "MonotaRO（モノタロウ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収（2024年12月期）、Python/AWS等の技術スタック、内製ECとデータ基盤の特徴、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "601万円"],
  ["2021年12月期", "624万円"],
  ["2022年12月期", "651万円"],
  ["2023年12月期", "668万円"],
  ["2024年12月期", "686万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社MonotaRO（東証プライム・3064）"],
  ["事業領域", "事業者向け（BtoB）間接資材のEコマース"],
  ["平均年間給与", "686万円（2024年12月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "35.7歳（2024年12月期 有価証券報告書）"],
  ["従業員数", "単体 約2,600名（2024年12月期 有価証券報告書）"],
  ["本社所在地", "兵庫県尼崎市"],
  ["技術スタック（公式）", "Python / Django / JavaScript / TypeScript / React / Go / AWS / GCP / Kubernetes / BigQuery"],
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
    q: "MonotaRO（モノタロウ）のエンジニア選考フローは？",
    a: "公式採用情報によると、一般的には「書類選考」「カジュアル面談（任意）」「複数回の面接」「オファー面談」の流れで、ポジションにより技術課題やコーディングテストが加わります。最新の内容は応募求人ごとに確認することが推奨されます。",
  },
  {
    q: "MonotaRO（モノタロウ）の平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、全社員平均の平均年間給与は686万円、平均年齢は35.7歳です。これは技術職に限らない全社員平均値であり、物流・カスタマーサポート部門も含むため、エンジニア個人の年収はグレードや職種により異なります。",
  },
  {
    q: "MonotaRO（モノタロウ）のエンジニア組織の特徴は？",
    a: "MonotaROは外部ベンダー依存ではなく、ECサイトとデータ基盤を内製開発する方針を公式に掲げています。Pythonを中心としたバックエンドと、BigQuery等を活用したデータドリブンな意思決定が特徴で、検索・レコメンド・需要予測などデータ活用領域が広いのが強みです。",
  },
  {
    q: "MonotaRO（モノタロウ）の技術スタックは？",
    a: "公式技術ブログ・採用情報（2026年6月時点）では、バックエンドにPython・Django・Go、フロントエンドにJavaScript・TypeScript・React、インフラにAWS・GCP・Kubernetes、データ基盤にBigQuery等が挙げられています。配属プロダクトにより使用技術は異なります。",
  },
  {
    q: "MonotaRO（モノタロウ）はリモートワークできますか？",
    a: "公式採用情報では、職種により在宅勤務とオフィス勤務を組み合わせるハイブリッドな働き方が示されています。開発拠点は東京・大阪などにあり、ポジションごとに勤務形態が異なるため、各求人の条件を確認することが推奨されます。",
  },
  {
    q: "MonotaRO（モノタロウ）への転職難易度は高いですか？",
    a: "BtoB ECという安定した事業基盤の上で、データ活用・大規模トラフィック対応の実務経験が評価されます。Python/データ基盤の経験や、ビジネス指標を意識した開発姿勢があると評価されやすい傾向です。技術とビジネス理解の両面で準備が有効です。",
  },
  {
    q: "30代・40代でもMonotaRO（モノタロウ）に転職できますか？",
    a: "平均年齢35.7歳と幅のある組織で、年齢よりも実力・実績が問われます。データ基盤・大規模EC・クラウドインフラの専門性があると、30代40代のミドルエンジニアでも年齢はハンデになりにくい傾向です。",
  },
];

export default function MonotaroCompanyPage() {
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
      <ArticleJsonLd title="MonotaRO（モノタロウ） エンジニア転職ガイド" description="MonotaRO（モノタロウ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収、Python/AWS等の技術スタック、内製ECとデータ基盤の特徴、選考フロー、30代40代の現実までまとめました。" url="/company/monotaro/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "MonotaRO" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">MonotaRO（モノタロウ） エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 内製EC・データ基盤を軸にするBtoBテック企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          MonotaRO（モノタロウ）は、工場・工事現場・自動車整備などの事業者向け間接資材を販売するBtoB Eコマースを主力とする東証プライム上場（証券コード3064）企業です。1,800万点超とも言われる商品データを扱う大規模ECを自社で内製開発している点が特徴です。本ページでは、有価証券報告書・公式採用情報・技術ブログの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "MonotaRO 有価証券報告書（2024年12月期）",
            "MonotaRO公式 採用ページ／エンジニア向け技術ブログ",
            "MonotaRO公式 企業情報（会社概要）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              MonotaROは<strong>Python中心の内製ECと、BigQuery等のデータ基盤を強みとするデータドリブンなBtoBテック企業</strong>です。検索・レコメンド・需要予測などデータ活用の実務経験が活きる領域が広く、安定した事業基盤の上で大規模システムに携われます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Python・データ基盤・大規模EC運用の経験があり、ビジネス指標を意識して開発できるエンジニア</li>
              <li>● <strong>向いていない人</strong>：toC寄りの華やかなプロダクト志向が強い人、新規事業の不確実性を好む人</li>
              <li>● <strong>30代・40代</strong>：データ基盤・クラウドインフラの専門性があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2024年12月期 有価証券報告書に基づく全社員平均値。技術スタックは公式採用情報・技術ブログ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模ECの内製開発</h3>
              <p className="text-sm text-petrol-deep">MonotaROは外部ベンダー依存ではなく、ECサイトと基幹システムを自社で内製開発する方針を掲げています。膨大な商品点数・受注を扱う大規模トラフィック環境での開発経験が積める点が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データドリブンな意思決定</h3>
              <p className="text-sm text-petrol-deep">検索・レコメンド・需要予測など、データ活用がビジネスの中核に位置づけられています。BigQuery等を用いた分析基盤が整備されており、データエンジニア・MLエンジニアの活躍領域が広いのが強みです。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">安定した事業基盤の上での開発</h3>
              <p className="text-sm text-petrol-deep">BtoBの間接資材ECという継続課金型に近い安定事業を背景に、長期目線でのシステム改善・基盤投資が行いやすい環境です。腰を据えて技術的負債と向き合いたいエンジニアに向いています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MonotaROは公式採用情報・技術ブログ（2026年6月時点）で採用技術を公開しています。主な要素は以下の通りです。配属プロダクトにより使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>バックエンド</strong>：Python、Django、Go</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>フロントエンド</strong>：JavaScript、TypeScript、React</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：AWS、Google Cloud Platform、Docker、Kubernetes</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ基盤</strong>：BigQuery、各種DWH、機械学習基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>機械学習・AI</strong>：Python（検索・レコメンド・需要予測）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: MonotaRO公式 採用情報・技術ブログ（2026年6月時点）。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるMonotaROは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2024年12月期は686万円（平均年齢35.7歳・全社員平均）</strong>で、近年は緩やかな上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: MonotaRO 有価証券報告書（各年12月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与で、物流・カスタマーサポート部門も含みます。エンジニア個人の年収は職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">全社員平均にはエンジニア以外の多数の職種が含まれるため、エンジニア職の提示年収は全社平均と一致しません。専門性の高いポジションでは、より高い水準が提示される場合があります。提示額は募集ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MonotaRO公式採用ページで案内されている一般的な流れです。最新の内容は<a href="https://www.monotaro.com/saiyo/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>カジュアル面談（任意・ポジションにより）</li>
            <li>技術課題・コーディングテスト（ポジションにより）</li>
            <li>面接（複数回。技術力・データ活用への理解・カルチャーフィットを確認）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: MonotaRO公式 採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Python等での実装力と、大規模システムを意識した設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>データ活用・分析をビジネス成果につなげた経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>事業・顧客理解と、指標を意識した開発姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・継続的な改善志向</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              MonotaROは平均年齢35.7歳（2024年12月期・全社員平均）で、年齢層に幅のある組織です。年齢よりも実力・実績が問われるため、30代・40代のミドルエンジニアでも<strong>データ基盤・大規模EC・クラウドインフラの専門性があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。MonotaROの全社員平均（686万円）はこれを上回りますが、これは多職種を含む全社平均であり、入社時の提示は職種・グレード次第です。30代・40代は「自分が当てはまる職種・グレードの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              30代40代では、クラウド（<Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link>）やインフラ（<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>）の実務に、<Link href="/cert/aws-saa/" className="text-petrol hover:underline">AWS認定（SAA）</Link>などの資格を掛け合わせると評価につながりやすい領域です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">MonotaRO転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。事業会社の開発・データ系求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャー・事業会社に強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">MonotaROへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">事業会社の開発・データ系転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "さくらインターネット エンジニア転職ガイド", href: "/company/sakura-internet/" },
              { name: "GMOペパボ エンジニア転職ガイド", href: "/company/gmo-pepabo/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "AWSエンジニアのスキル", href: "/skill/aws/" },
              { name: "AWS認定ソリューションアーキテクト（SAA）", href: "/cert/aws-saa/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
