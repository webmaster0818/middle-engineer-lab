import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "メルカリの年収は平均1176万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "メルカリへのエンジニア転職を実データで解説。有価証券報告書の平均年収1,176万円（2025年6月期・全社員平均）、Go/GCP等の公式技術スタック、英語要件、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年6月期", "920万円"],
  ["2022年6月期", "968万円"],
  ["2023年6月期", "1,035万円"],
  ["2024年6月期", "1,166万円"],
  ["2025年6月期", "1,176万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社メルカリ（東証プライム・4385）"],
  ["事業領域", "フリマアプリ（メルカリ）・フィンテック（メルペイ）等"],
  ["平均年間給与", "1,176万円（2025年6月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "36.3歳（2025年6月期 有価証券報告書）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公式）", "Go / Python / TypeScript / React / Next.js / Kotlin / Swift / GCP / AWS / Kubernetes"],
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
    q: "メルカリのエンジニア選考フローは？",
    a: "公式エンジニアリングブログによると、原則「書類選考」「技術課題（コーディングテストを含む）」「複数回の面接」「オファー面談」の流れです。コーディングテストはオンラインで都合のよい時間に受験でき、技術領域によっては実装課題が追加されます。",
  },
  {
    q: "メルカリの平均年収はいくらですか？",
    a: "2025年6月期の有価証券報告書によると、全社員平均の平均年間給与は1,176万円、平均年齢は36.3歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収はグレード（職務等級）により異なります。",
  },
  {
    q: "メルカリで英語力は必要ですか？",
    a: "公式採用情報によると、所属エンジニアの約半数が外国籍で、実際に英語で業務が行われています。ポジションにより求められる英語レベルは異なるため、応募要項で各求人の要件を確認することが推奨されます。",
  },
  {
    q: "メルカリの技術スタックは？",
    a: "公式技術スタックページ（2026年6月時点）では、バックエンドにGo・Python、WebフロントエンドにTypeScript・React・Next.js・Vue.js、iOSにSwift/SwiftUI、AndroidにKotlin/Jetpack Compose、インフラにDocker・Kubernetes・GCP・AWSなどが挙げられています。",
  },
  {
    q: "メルカリの残業や働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、基本給にみなし残業が含まれる一方、長時間労働・激務という印象は強くないという傾向の声が見られます（2026年6月時点の口コミ傾向）。実態はチームにより異なります。",
  },
  {
    q: "メルカリの年収はグレードでどう決まりますか？",
    a: "口コミ傾向では、年齢ではなくグレード（職務等級）基準で報酬が決まる点が特徴とされ、固定給の割合が高い設計と言われています。ボーナスはグレードにより変動します。提示額は個別求人・面談で確認するのが確実です。",
  },
  {
    q: "メルカリへの転職難易度は高いですか？",
    a: "技術力に加え、ミッション・バリューへの共感とカルチャーフィットが重視されます。公式ブログでも面接は『ミッションへの共感』『バリューの体現』『カルチャーフィット』を判断するためと明言されており、技術とカルチャーの両面で準備が必要です。",
  },
  {
    q: "30代・40代でもメルカリに転職できますか？",
    a: "平均年齢36.3歳と相対的に幅のある組織で、年齢よりもグレードに見合う実力・実績が問われます。マイクロサービスや特定領域の専門性、英語での協働経験があると評価されやすい傾向です。",
  },
];

export default function MercariCompanyPage() {
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
      <ArticleJsonLd title="メルカリ エンジニア転職ガイド" description="メルカリへのエンジニア転職を実データで解説。有価証券報告書の平均年収1,176万円（2025年6月期・全社員平均）、Go/GCP等の公式技術スタック、英語要件、選考フロー、30代40代の現実までまとめました。" url="/company/mercari/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Vue.jsの転職ガイド", href: "/skill/vue/" }, { name: "Next.jsの転職ガイド", href: "/skill/nextjs/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "メルカリ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">メルカリ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 日本発グローバルテック企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          メルカリは、フリマアプリ「メルカリ」と決済サービス「メルペイ」を主力とする東証プライム上場（証券コード4385）のテックカンパニーです。本ページでは、有価証券報告書・公式採用情報・公式技術スタックページ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "メルカリ 有価証券報告書（2025年6月期）",
            "メルカリ公式 採用ページ／エンジニアリングブログ",
            "メルカリ公式 技術スタックページ",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              メルカリは<strong>Go/GCPベースのマイクロサービスを英語環境で開発する、グローバル志向のテック企業</strong>です。技術力に加えミッション・バリューへの共感が重視され、難易度は高めです。年収水準（全社員平均1,176万円）はWeb系の中でもトップクラスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Go等での実務経験があり、マイクロサービス・英語での協働に前向きなエンジニア</li>
              <li>● <strong>向いていない人</strong>：日本語のみで完結する環境を強く希望する人、明確な役割分担を好む人</li>
              <li>● <strong>30代・40代</strong>：グレードに見合う専門性・実績があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年6月期 有価証券報告書に基づく全社員平均値。技術スタックは公式技術スタックページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">英語が日常的に使われるグローバル開発環境</h3>
              <p className="text-sm text-petrol-deep">公式採用情報によると、所属エンジニアの約半数が外国籍で、実際に英語で業務が行われています。海外からの転職者も在籍し、グローバルスタンダードの開発プロセスが整備されています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Go・GCPベースのマイクロサービス</h3>
              <p className="text-sm text-petrol-deep">バックエンドはGo・Pythonを中心に、Docker・Kubernetes・GCP/AWSでマイクロサービスを運用しています（公式技術スタックページ）。サービスごとに最適な技術を選ぶ方針が示されています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミッション・バリュー重視の選考</h3>
              <p className="text-sm text-petrol-deep">公式ブログによると、面接は「ミッションへの共感」「バリューの体現」「カルチャーフィット」を判断するために行われます。技術力だけでなくカルチャー適合が明確に評価軸に含まれています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            メルカリは公式の技術スタックページ（2026年6月時点）で採用技術を公開しています。主な要素は以下の通りです。サービスごとに最適な技術を選ぶ方針のため、配属プロダクトにより使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>バックエンド</strong>：Go、Python</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、React、Next.js、Vue.js</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>モバイル</strong>：iOS は Swift / SwiftUI、Android は Kotlin / Jetpack Compose</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：Docker、Kubernetes、Google Cloud Platform、Amazon Web Services</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ基盤</strong>：Cloud Spanner、MySQL、PostgreSQL、Redis、TiDB、BigQuery、Elasticsearch など</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>機械学習・AIツール</strong>：Python（PyTorch / scikit-learn）、GitHub Copilot 等</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: メルカリ公式 技術スタックページ（2026年6月時点）。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるメルカリは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年6月期は1,176万円（平均年齢36.3歳・全社員平均）</strong>で、上場以降一貫した上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: メルカリ 有価証券報告書（各年6月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収はグレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">メルカリは年齢ではなくグレード（職務等級）基準で報酬が決まる設計と言われています（口コミ傾向）。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            メルカリのエンジニアリングブログで公開されている選考プロセスをもとにした一般的な流れです。最新の内容は<a href="https://careers.mercari.com/jobs/engineering/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>技術課題（コーディングテストを含む。オンラインで都合のよい時間に受験）</li>
            <li>技術課題（領域により、仕様を満たすコードを実装する課題が追加。社内エンジニアが評価基準に沿って確認）</li>
            <li>面接（複数回。ミッション共感・バリュー体現・カルチャーフィットを判断）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: メルカリ公式 エンジニアリングブログ／採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が明言する評価軸と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>コーディングテスト・技術課題で示す実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ミッションへの共感とバリュー（Go Bold等）の体現</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>カルチャーフィット・チームでの協働姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>英語を含むコミュニケーション（ポジションにより程度は異なる）</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              メルカリは平均年齢36.3歳（2025年6月期・全社員平均）と、Web系の中では年齢層に幅があります。年齢ではなくグレード基準で評価される設計のため、30代・40代のミドルエンジニアでも<strong>グレードに見合う専門性・実績があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。メルカリの全社員平均（1,176万円）はこれを大きく上回りますが、これは高グレード層を含む全社平均であり、入社時の提示はグレード次第です。30代・40代は「自分が当てはまるグレードの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              英語環境は、これまで英語での業務経験がない場合でもポジションによっては挑戦可能ですが、各求人の語学要件を必ず確認しましょう。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メルカリ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー求人に強く、非公開求人も豊富。" },
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
          <h2 className="text-xl font-bold mb-3">メルカリへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LINEヤフー エンジニア転職ガイド", href: "/company/line-yahoo/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
              { name: "楽天グループ エンジニア転職ガイド", href: "/company/rakuten/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
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
