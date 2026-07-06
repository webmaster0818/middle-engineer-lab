import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/gmo-internet/" },
  title: "GMOインターネットグループの年収は平均693万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "GMOインターネットグループへのエンジニア転職を実データで解説。有価証券報告書の平均年収693万円（2024年12月期・持株会社単体）、ドメイン/クラウド/決済/金融のインフラ技術、選考フロー、30代40代の現実までまとめました。グループ各社の数字の読み方も明記。",
};

const salaryTrend: [string, string][] = [
  ["2022年12月期", "660万円"],
  ["2023年12月期", "677万円"],
  ["2024年12月期", "693万円"],
];

const basicData: [string, string][] = [
  ["企業名", "GMOインターネットグループ株式会社（東証プライム・9449）※持株会社"],
  ["主な事業会社", "GMOインターネット株式会社、GMOペイメントゲートウェイ、GMOクリック証券（GMOフィナンシャルHD配下）等のグループ各社"],
  ["事業領域", "インターネットインフラ（ドメイン・クラウド・セキュリティ・決済・EC）・広告/メディア・金融・暗号資産"],
  ["平均年間給与", "693万円（2024年12月期 有価証券報告書・提出会社=持株会社単体）"],
  ["平均年齢", "37.9歳（2024年12月期 有価証券報告書・持株会社単体）"],
  ["従業員数", "提出会社（持株会社）単体723名／連結は数千名規模（2024年12月期）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック（公式情報ベース）", "Go / PHP / Java（Spring Boot）/ Ruby / Python / TypeScript / React / Next.js / MySQL / AWS / Docker / Kubernetes（事業会社により異なる）"],
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
    q: "GMOインターネットグループのエンジニア選考フローは？",
    a: "公開されている採用情報によると、おおむね「書類選考」「複数回の面接（技術面接を含む）」「内定」の流れです。GMOはグループ各社・各事業で採用を行うため、応募する事業会社・ポジションにより選考内容が異なります。最新は各社の募集要項で確認するのが確実です。",
  },
  {
    q: "GMOインターネットグループの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、提出会社（GMOインターネットグループ＝持株会社）単体の平均年間給与は693万円、平均年齢は37.9歳です。これは持株会社単体（約723名）の数字で、グループ各事業会社（GMOインターネット、GMOペイメントゲートウェイ等）の待遇はそれぞれ異なります。",
  },
  {
    q: "GMOは持株会社ですか？グループ各社の数字の見方は？",
    a: "GMOインターネットグループ株式会社（証券コード9449）は持株会社で、傘下にGMOインターネット株式会社、GMOペイメントゲートウェイ、GMOフィナンシャルホールディングス（GMOクリック証券等）など多数の上場・非上場の事業会社があります。有報の提出会社（単体）の平均年収693万円は持株会社のもので、エンジニアが多く所属する事業会社の水準とは分けて読む必要があります。",
  },
  {
    q: "GMOインターネットグループの技術スタックは？",
    a: "事業会社により大きく異なります。公開情報ではGo・PHP・Java（Spring Boot）・Ruby・Python・TypeScript・React・Next.jsなどの言語、MySQL、AWS、Docker/Kubernetesなどが用いられています。ドメイン・クラウド・決済・金融といったインフラ寄りの基盤を扱うため、信頼性・セキュリティを意識した開発が求められます。",
  },
  {
    q: "GMOインターネットグループは何の会社ですか？事業領域は？",
    a: "GMOインターネットグループは、ドメイン・クラウド・セキュリティ・決済・ECなどのインターネットインフラ事業を中核に、広告・メディア事業、金融（証券・銀行）事業、暗号資産事業などを展開する持株会社です。社会基盤としてのインターネットインフラを支える点が特徴です。",
  },
  {
    q: "GMOのエンジニア比率は？",
    a: "公式採用情報によると、グループのエンジニア（パートナー）比率は約半数とされており（2026年時点の公表値）、技術者が多く在籍する組織です。インフラ・決済・金融といった領域でエンジニアの需要が継続的にあります。",
  },
  {
    q: "30代・40代でもGMOに転職できますか？",
    a: "持株会社単体の平均年齢は37.9歳（2024年12月期）です。決済・金融・インフラといった信頼性が重視される領域では、運用・セキュリティ・大規模システムの経験を持つミドルエンジニアが評価されやすい傾向です。応募先の事業会社により求める専門性が異なります。",
  },
];

export default function GmoCompanyPage() {
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
      <ArticleJsonLd title="GMOインターネットグループ エンジニア転職ガイド" description="GMOインターネットグループへのエンジニア転職を実データで解説。有価証券報告書の平均年収693万円（2024年12月期・持株会社単体）、ドメイン/クラウド/決済/金融のインフラ技術、選考フロー、30代40代の現実までまとめました。" url="/company/gmo-internet/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Next.jsの転職ガイド", href: "/skill/nextjs/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "GMOインターネットグループ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">GMOインターネットグループ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | インターネットインフラ・決済・金融を支えるメガベンチャーのエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          GMOインターネットグループは、ドメイン・クラウド・セキュリティ・決済・ECなどのインターネットインフラ事業を中核に、広告/メディア・金融・暗号資産事業を展開する東証プライム上場（証券コード9449）の持株会社です。上場会社はGMOインターネットグループ株式会社（持株会社）で、実際の事業はGMOインターネット株式会社、GMOペイメントゲートウェイ等のグループ各社が担います。本ページでは、有価証券報告書・公式採用情報・公開技術情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "GMOインターネットグループ 有価証券報告書（2024年12月期）",
            "GMOインターネットグループ公式 採用ページ／GMO Developers",
            "IRBANK（有報ベース推移データ）",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              GMOインターネットグループは<strong>ドメイン・クラウド・決済・金融といった社会インフラを支える、エンジニア比率の高いメガベンチャー</strong>です。持株会社体制でグループ各社が事業を運営しており、有報の単体平均年収693万円（2024年12月期）は<strong>持株会社の数字</strong>である点に注意が必要です。応募先の事業会社により技術も待遇も異なります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：インフラ・決済・金融など信頼性が重視される領域で、運用・セキュリティ・大規模システムの経験を活かしたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：単一プロダクトに深く長く関わりたい人（グループは事業領域が非常に広い）</li>
              <li>● <strong>30代・40代</strong>：基盤・運用・セキュリティの専門性があればミドル層も活きやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2024年12月期 有価証券報告書の提出会社（持株会社単体）数値。グループ全体の規模はこれを大きく上回ります。技術スタックは公式採用情報・GMO Developers等の公開情報ベース（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">インターネットインフラを支える基盤技術</h3>
              <p className="text-sm text-petrol-deep">ドメイン・クラウド・セキュリティ・決済といった、止められない社会インフラを扱う事業が中核です。可用性・セキュリティ・大規模トラフィックを前提とした堅牢な設計・運用の経験が活きます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">決済・金融という専門ドメイン</h3>
              <p className="text-sm text-petrol-deep">GMOペイメントゲートウェイ（決済）やGMOクリック証券（金融）など、決済・金融領域の事業会社を擁します。規制・信頼性の要求が高い領域での開発経験を積める点が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エンジニア比率が高い「技術の会社」</h3>
              <p className="text-sm text-petrol-deep">公式採用情報によると、グループのエンジニア（パートナー）比率は約半数とされ、技術ブログ「GMO Developers」やカンファレンスなど技術発信にも積極的です。技術志向の強い文化があります。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GMOは持株会社のため、技術スタックは事業会社・プロダクトにより大きく異なります。公開情報で確認できる主な技術は以下の通りです。応募先の事業会社の求人で実際の構成を確認してください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：Go、PHP、Java（Spring Boot）、Ruby、Python 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、React、Next.js</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データベース</strong>：MySQL 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：AWS、Docker、Kubernetes（自社データセンター・基盤も保有）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>領域特性</strong>：ドメイン・決済・金融など信頼性/セキュリティ要件の高い基盤開発</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: GMOインターネットグループ公式 採用情報／GMO Developers等の公開情報（2026年6月時点）。事業会社別の構成です。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場会社であるGMOインターネットグループは、有価証券報告書で提出会社（持株会社単体）の平均年間給与を開示しています。<strong>2024年12月期は693万円（平均年齢37.9歳・単体）</strong>で、緩やかな上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（提出会社単体）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: GMOインターネットグループ 有価証券報告書（各年12月期、提出会社単体）。これは持株会社単体（約723名）の<strong>全社員平均</strong>であり、エンジニアが多く所属する各事業会社の水準とは異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">GMOは持株会社のため、上記の単体平均はグループ全体やエンジニア職の水準をそのまま示すものではありません。提示年収は応募する事業会社（GMOインターネット、GMOペイメントゲートウェイ等）・ポジション・等級により幅があるため、個別求人・面談で確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報をもとにした一般的な流れです。最新の内容は<a href="https://recruit.group.gmo/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">グループ採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術面接を含む）</li>
            <li>最終面接</li>
            <li>内定・オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: GMOインターネットグループ公式 採用ページの要約。選考は事業会社・職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術面接で示す実装力・設計力（応募事業会社の技術領域）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>可用性・セキュリティ・大規模システムの運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>決済・金融・インフラなど該当ドメインへの理解</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・主体性</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              GMOインターネットグループは持株会社単体の平均年齢が37.9歳（2024年12月期）です。決済・金融・インフラといった<strong>止められないシステムを扱う領域は、堅牢性・運用・セキュリティの経験を持つミドルエンジニアの強みが活きやすい</strong>のが特徴です。事業領域が非常に広いため、これまでの専門性に合う事業会社・ポジションを選べます。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。GMOの持株会社単体平均（693万円）はこれを上回りますが、これは持株会社の全社員平均で、エンジニアの提示額は応募先の事業会社次第です。30代・40代は事業会社ごとの水準を確認することが重要です。
            </p>
            <p>
              インフラ・決済・金融といった領域での深い経験はミドル層の差別化に有効です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GMO転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">GMOへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "DMM.com エンジニア転職ガイド", href: "/company/dmm/" },
              { name: "楽天グループ エンジニア転職ガイド", href: "/company/rakuten/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "PayPay エンジニア転職ガイド", href: "/company/paypay/" },
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
