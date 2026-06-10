import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "GMOペパボ エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "GMOペパボへのエンジニア転職を実データで解説。有価証券報告書の平均年収（2024年12月期）、ホスティング・EC・ハンドメイドのサービス技術、Ruby/Go等のスタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "489万円"],
  ["2021年12月期", "501万円"],
  ["2022年12月期", "521万円"],
  ["2023年12月期", "534万円"],
  ["2024年12月期", "551万円"],
];

const basicData: [string, string][] = [
  ["企業名", "GMOペパボ株式会社（東証スタンダード・3633）"],
  ["事業領域", "ホスティング（ロリポップ等）・EC支援（カラーミーショップ）・ハンドメイドマーケット（minne）等"],
  ["平均年間給与", "551万円（2024年12月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "36.0歳（2024年12月期 有価証券報告書）"],
  ["従業員数", "単体 約400名規模（2024年12月期 有価証券報告書）"],
  ["本社所在地", "東京都渋谷区（福岡・鹿児島等にも拠点）"],
  ["技術スタック（公式）", "Ruby / Ruby on Rails / Go / TypeScript / React / PHP / Linux / Kubernetes / AWS / GCP"],
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
    q: "GMOペパボのエンジニア選考フローは？",
    a: "公式採用情報によると、一般的には「書類選考」「カジュアル面談（任意）」「複数回の面接」「オファー面談」の流れで、ポジションにより技術面接やコード提出が加わります。最新の内容は応募求人ごとに確認することが推奨されます。",
  },
  {
    q: "GMOペパボの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、全社員平均の平均年間給与は551万円、平均年齢は36.0歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は職種・グレードにより異なります。",
  },
  {
    q: "GMOペパボはどんなサービスを開発していますか？",
    a: "ホスティングサービス「ロリポップ！」、EC支援「カラーミーショップ」、ハンドメイドマーケット「minne」などを運営しています。インフラ寄りのホスティング基盤から、toC向けのWebアプリ・ECまで、複数の事業領域でエンジニアが活躍しています。",
  },
  {
    q: "GMOペパボの技術スタックは？",
    a: "公式技術ブログ・採用情報（2026年6月時点）では、バックエンドにRuby・Ruby on Rails・Go・PHP、フロントエンドにTypeScript・React、インフラにLinux・Kubernetes・AWS・GCPなどが挙げられています。サービスごとに技術が異なり、Ruby文化が強い一方でGoやモダンフロントの採用も進んでいます。",
  },
  {
    q: "GMOペパボは技術発信やOSS活動に積極的ですか？",
    a: "GMOペパボは技術ブログ（ペパボテックブログ）や技術カンファレンスへの登壇、OSS活動、社内の研究開発組織など、エンジニアの技術発信・探究を後押しする文化を公式に発信しています。アウトプット志向のエンジニアに向いた環境です。",
  },
  {
    q: "GMOペパボへの転職難易度は高いですか？",
    a: "Ruby on Rails等でのWebアプリ開発経験や、ホスティング基盤を支えるインフラ・SREの実務経験が評価されます。技術力に加え、サービス・ユーザーへの関心や、チームでの協働・発信姿勢が問われる傾向です。",
  },
  {
    q: "30代・40代でもGMOペパボに転職できますか？",
    a: "平均年齢36.0歳と幅のある組織で、年齢よりも実力・実績が問われます。Webアプリ開発・大規模ホスティング基盤・SREの専門性や、技術リード・マネジメントの経験があると、30代40代のミドルエンジニアでも年齢はハンデになりにくい傾向です。",
  },
];

export default function GmoPepaboCompanyPage() {
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
      <ArticleJsonLd title="GMOペパボ エンジニア転職ガイド" description="GMOペパボへのエンジニア転職を実データで解説。有価証券報告書の平均年収、ホスティング・EC・ハンドメイドのサービス技術、Ruby/Go等のスタック、選考フロー、30代40代の現実までまとめました。" url="/company/gmo-pepabo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "GMOペパボ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">GMOペパボ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ホスティングからEC・ハンドメイドまで手がけるテック企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          GMOペパボは、ホスティングサービス「ロリポップ！」、EC支援「カラーミーショップ」、ハンドメイドマーケット「minne」などを運営する東証スタンダード上場（証券コード3633）のテック企業です。インフラ寄りのホスティング基盤からtoC向けWebサービスまで、幅広い事業を持ち、Ruby文化と活発な技術発信で知られます。本ページでは、有価証券報告書・公式採用情報・技術ブログの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "GMOペパボ 有価証券報告書（2024年12月期）",
            "GMOペパボ公式 採用ページ／ペパボテックブログ",
            "GMOペパボ公式 企業情報・サービス紹介",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              GMOペパボは<strong>Ruby文化と活発な技術発信を特徴とし、ホスティング基盤からtoC向けWebサービスまで携われるテック企業</strong>です。Webアプリ開発・大規模ホスティング基盤・SREの実務経験が活き、アウトプットや技術コミュニティへの関心が高い人に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Ruby on Rails等でのWebアプリ開発や、ホスティング基盤を支えるインフラ／SRE経験があり、技術発信に前向きなエンジニア</li>
              <li>● <strong>向いていない人</strong>：技術発信やコミュニティ活動に関心が薄く、特定領域だけに閉じたい人</li>
              <li>● <strong>30代・40代</strong>：Web／インフラの専門性や技術リード経験があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2024年12月期 有価証券報告書に基づく全社員平均値。技術スタックは公式採用情報・テックブログ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ホスティングからtoCサービスまで幅広い事業</h3>
              <p className="text-sm text-blue-700">ロリポップ等のホスティング基盤、minne等のtoC向けマーケット、カラーミーショップ等のEC支援まで、性質の異なる複数事業があります。インフラ寄りからアプリ寄りまで、希望や強みに応じたキャリアが描けます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Ruby文化と活発な技術発信</h3>
              <p className="text-sm text-blue-700">Ruby／Ruby on Railsの文化が根付き、ペパボテックブログやカンファレンス登壇、OSS活動など技術発信が活発です。社内の研究開発的な取り組みもあり、技術を深め発信したい人に向いた環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">地方拠点・多様な働き方</h3>
              <p className="text-sm text-blue-700">福岡・鹿児島などにも開発拠点があり、リモートを含む多様な働き方が示されています。勤務地・勤務形態はポジションにより異なるため、各求人の条件を確認することが推奨されます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GMOペパボは公式技術ブログ・採用情報（2026年6月時点）で採用技術を公開しています。主な要素は以下の通りです。サービスごとに技術が異なり、Ruby文化が強い一方でGoやモダンフロントの採用も進んでいます。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Ruby、Ruby on Rails、Go、PHP</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>インフラ</strong>：Linux、Kubernetes、Docker、AWS、Google Cloud Platform</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データ</strong>：MySQL、PostgreSQL、各種DWH</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>運用</strong>：IaC、CI/CD、監視・オブザーバビリティ基盤</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: GMOペパボ公式 採用情報・ペパボテックブログ（2026年6月時点）。配属サービスにより技術構成は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるGMOペパボは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2024年12月期は551万円（平均年齢36.0歳・全社員平均）</strong>で、近年は緩やかな上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: GMOペパボ 有価証券報告書（各年12月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">全社員平均にはエンジニア以外の職種も含まれます。専門性の高いポジションや技術リード層では、全社平均と異なる水準が提示される場合があります。提示額は募集ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GMOペパボ公式採用ページで案内されている一般的な流れです。最新の内容は<a href="https://recruit.pepabo.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>カジュアル面談（任意・ポジションにより）</li>
            <li>面接（複数回。技術力・サービス理解・カルチャーフィットを確認）</li>
            <li>技術面接・コード提出（ポジションにより）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: GMOペパボ公式 採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails等でのWebアプリ実装力／設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ホスティング基盤などインフラ・SREの理解（該当ポジション）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>サービス・ユーザーへの関心と、技術発信・アウトプット姿勢</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チームでの協働姿勢・カルチャーフィット</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、技術ブログでの発信は<Link href="/knowledge/tech-blog/" className="text-blue-600 hover:underline">技術ブログの活用</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              GMOペパボは平均年齢36.0歳（2024年12月期・全社員平均）で、年齢層に幅のある組織です。年齢よりも実力・実績が問われるため、30代・40代のミドルエンジニアでも<strong>Webアプリ開発・大規模ホスティング基盤・SREの専門性や、技術リード経験があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。GMOペパボの全社員平均（551万円）はこのレンジ内の水準で、入社時の提示は職種・グレード次第です。30代・40代は「自分が当てはまるポジションの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              インフラ寄りのキャリアを志向するなら、<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラ</Link>や<Link href="/skill/aws/" className="text-blue-600 hover:underline">クラウド</Link>の実務に<Link href="/cert/aws-saa/" className="text-blue-600 hover:underline">AWS認定（SAA）</Link>などの資格を掛け合わせると専門性を示しやすくなります。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GMOペパボ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。Web系・インフラ求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">GMOペパボへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・インフラの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "さくらインターネット エンジニア転職ガイド", href: "/company/sakura-internet/" },
              { name: "MonotaRO エンジニア転職ガイド", href: "/company/monotaro/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "Rubyエンジニアのスキル", href: "/skill/ruby/" },
              { name: "インフラエンジニアのスキル", href: "/skill/infrastructure/" },
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
