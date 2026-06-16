import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "MIXI（ミクシィ）の年収は平均791万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "MIXI（ミクシィ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収791万円（2025年3月期・単体）、モンスト/家族アルバム みてね等の技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2022年3月期", "711万円"],
  ["2023年3月期", "738万円"],
  ["2024年3月期", "746万円"],
  ["2025年3月期", "791万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社MIXI（東証プライム・2121）"],
  ["事業領域", "デジタルエンタメ（モンスターストライク等）・スポーツ（公営競技TIPSTAR等）・ライフスタイル（家族アルバム みてね）"],
  ["平均年間給与", "791万円（2025年3月期 有価証券報告書・提出会社単体）"],
  ["平均年齢", "37.4歳（2025年3月期 有価証券報告書・単体）"],
  ["従業員数", "1,259名（2025年3月期・単体／連結はこれを上回る）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック（公式情報ベース）", "Go / Ruby / PHP / TypeScript / React / Next.js / Swift / Kotlin / C++ / Flutter / MySQL / GCP / AWS"],
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
    q: "MIXIのエンジニア選考フローは？",
    a: "公開されている採用情報・選考体験談によると、エンジニア職はおおむね「書類選考」「コーディングテスト（paiza等）」「複数回の面接（人事・現場社員・役員）」の流れです。職種・新卒/中途により段階数は変動するため、各求人の募集要項で確認するのが確実です。",
  },
  {
    q: "MIXIの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書（提出会社単体）によると、平均年間給与は791万円、平均年齢は37.4歳です。これは技術職に限らない全社員平均値で、上場以降緩やかな上昇傾向にあります。エンジニア個人の年収は等級・職種により異なります。",
  },
  {
    q: "MIXIの技術スタックは？",
    a: "公式技術ブログ「ミクシル」等によると、プロダクトごとに最適な技術を選ぶ方針で、サーバーサイドにGo・Ruby・PHP、フロントエンドにTypeScript・React・Next.js、モバイルにSwift・Kotlin・Flutter、ゲーム（モンスト）にC++などが使われています。インフラはGCP・AWS中心です。",
  },
  {
    q: "MIXIは何の会社ですか？事業領域は？",
    a: "MIXIはスマホゲーム「モンスターストライク」を中心としたデジタルエンタメ事業、公営競技サービスTIPSTAR等のスポーツ事業、家族向け写真・動画アプリ「家族アルバム みてね」を含むライフスタイル事業を展開する東証プライム上場企業（証券コード2121）です。",
  },
  {
    q: "MIXIの残業や働き方の評判は？",
    a: "口コミプラットフォーム（2026年6月時点の傾向）では、プロダクトやフェーズにより繁閑の差がある一方、リモート・フレックス等の柔軟な働き方の制度が整っているという声が見られます。実態は配属チームにより異なります。",
  },
  {
    q: "30代・40代でもMIXIに転職できますか？",
    a: "単体の平均年齢は37.4歳（2025年3月期）と、年齢層に幅のある組織です。大規模サービスのサーバーサイド・モバイル・ゲーム開発、SRE、データ基盤などの専門性や実績があれば、30代・40代でも評価されやすい傾向です。",
  },
  {
    q: "MIXIへの転職難易度は高いですか？",
    a: "モンストのような大規模トラフィックを支える技術力に加え、プロダクト志向・チームでの協働姿勢が見られます。コーディングテストが課されるポジションも多く、技術・カルチャー両面の準備が必要です。",
  },
];

export default function MixiCompanyPage() {
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
      <ArticleJsonLd title="MIXI（ミクシィ）エンジニア転職ガイド" description="MIXI（ミクシィ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収791万円（2025年3月期・単体）、モンスト/家族アルバム みてね等の技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/mixi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Next.jsの転職ガイド", href: "/skill/nextjs/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "MIXI（ミクシィ）" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">MIXI（ミクシィ）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ゲーム・スポーツ・ライフスタイルを展開するエンタメ企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          MIXI（ミクシィ）は、スマホゲーム「モンスターストライク」、公営競技サービス「TIPSTAR」、家族向け写真・動画アプリ「家族アルバム みてね」などを展開する東証プライム上場（証券コード2121）のエンタメ企業です。本ページでは、有価証券報告書・公式採用情報・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "MIXI 有価証券報告書（2025年3月期）",
            "MIXI公式 採用ページ／技術ブログ（ミクシル）",
            "IRBANK（有報ベース推移データ）",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              MIXIは<strong>モンストのような大規模トラフィックを支えつつ、ゲーム・スポーツ・ライフスタイルと幅広い領域でプロダクト開発を行うエンタメ企業</strong>です。プロダクトごとに最適な技術を選ぶ文化で、技術の幅・深さの両方が活きます。単体の平均年収791万円（2025年3月期）はWeb系の中で標準的な水準です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：大規模サービスのサーバーサイド・モバイル・ゲーム開発の実務経験があり、プロダクト志向の強いエンジニア</li>
              <li>● <strong>向いていない人</strong>：受託・SIerのように仕様確定後の実装のみを志向する人</li>
              <li>● <strong>30代・40代</strong>：特定領域（SRE/データ基盤/ゲーム基盤等）の専門性があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年3月期 有価証券報告書の提出会社（単体）数値。技術スタックは公式技術ブログ等の公開情報ベース（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロダクトごとに最適な技術を選ぶ文化</h3>
              <p className="text-sm text-petrol-deep">公式技術ブログによると、MIXIはプロダクトごとに最適な技術を選定する方針です。モンストはサーバーサイドRuby・クライアントC++、みてねやFanstaはTypeScript/React/Ruby、minimoはGo/Reactなど、配属により使用技術が大きく異なります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模トラフィックを支える技術力</h3>
              <p className="text-sm text-petrol-deep">モンスターストライクや家族アルバム みてねは大規模ユーザーを抱え、可用性・スケーラビリティを意識した設計・運用が求められます。SRE・インフラ・データ基盤のポジションも継続的に募集されています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゲーム・スポーツ・ライフスタイルの3領域</h3>
              <p className="text-sm text-petrol-deep">単一サービスではなく、デジタルエンタメ・スポーツ・ライフスタイルの3領域でプロダクトを展開しているため、関心領域に合わせたキャリア選択がしやすいのが特徴です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MIXIは公式技術ブログ「ミクシル」等で各プロダクトの技術スタックを公開しています。プロダクトごとに最適な技術を選ぶ方針のため、配属により使用技術は異なります。主な要素は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：Go、Ruby（Rails）、PHP、Perl 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、React、Next.js</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>モバイル</strong>：iOS は Swift / Objective-C、Android は Kotlin / Java、クロスプラットフォームに Flutter</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ゲーム（モンスト等）</strong>：クライアント C++、サーバーサイド Ruby</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ・データ基盤</strong>：GCP、AWS、MySQL、クラウド/オンプレのハイブリッド構成</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: MIXI公式 技術ブログ「ミクシル」等の公開情報（2026年6月時点）。プロダクト別の構成です。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるMIXIは、有価証券報告書で提出会社（単体）の平均年間給与を開示しています。<strong>2025年3月期は791万円（平均年齢37.4歳・単体）</strong>で、緩やかな上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（単体）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: MIXI 有価証券報告書（各年3月期、提出会社単体）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・職種により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は全社員平均であり、エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報・選考体験談をもとにした一般的な流れです。最新の内容は<a href="https://mixi.co.jp/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>コーディングテスト（paiza等。ポジションにより実施）</li>
            <li>面接（複数回。人事・現場エンジニアによる技術面接）</li>
            <li>最終面接（役員・マネージャー等）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: MIXI公式 採用ページ／選考体験談の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>コーディングテスト・技術面接で示す実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模サービス開発・運用の経験（可用性・パフォーマンス）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロダクト志向・ユーザー価値への意識</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・技術的な意思決定の経験</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              MIXIは単体の平均年齢37.4歳（2025年3月期）と、Web・ゲーム系の中では年齢層に幅があります。モンストのような長期運用タイトルや、みてねのような成長プロダクトを抱えるため、<strong>運用・スケール・技術的負債との向き合いといったミドルエンジニアの強みが活きる場面</strong>が多いのが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。MIXIの単体平均（791万円）はこれを上回りますが、これは全社平均であり、入社時の提示は等級・職種次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              ゲーム基盤・SRE・データ基盤・モバイルなど、特定領域での深い経験はミドル層の差別化に有効です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">MIXI転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。ゲーム企業への提案実績が豊富で提案スピードが速い。" },
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
          <h2 className="text-xl font-bold mb-3">MIXIへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・エンタメ企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "グリー（GREE）エンジニア転職ガイド", href: "/company/gree/" },
              { name: "コロプラ エンジニア転職ガイド", href: "/company/colopl/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
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
