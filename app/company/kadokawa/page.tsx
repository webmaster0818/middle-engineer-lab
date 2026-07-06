import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/kadokawa/" },
  title: "KADOKAWAの年収は平均885万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "KADOKAWA（ドワンゴ・ニコニコ含む）へのエンジニア転職を実データで解説。有価証券報告書の平均年収885万円（2025年3月期・単体）、Scala/TypeScript/Kotlin等の技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2023年3月期", "857万円"],
  ["2024年3月期", "885万円"],
  ["2025年3月期", "885万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社KADOKAWA（東証プライム・9468）"],
  ["主なグループ会社", "株式会社ドワンゴ（ニコニコ動画・N高等）等"],
  ["事業領域", "出版・IP（アニメ/ゲーム/実写）・教育（N高/角川ドワンゴ学園）・Webサービス（ニコニコ）"],
  ["平均年間給与", "885万円（2025年3月期 有価証券報告書・提出会社単体）"],
  ["平均年齢", "41.3歳（2025年3月期 有価証券報告書・単体）"],
  ["従業員数", "提出会社（単体）2,343名／連結は約6,900名規模（2025年3月期）"],
  ["本社所在地", "東京都千代田区（所沢にも拠点：ところざわサクラタウン）"],
  ["技術スタック（公式情報ベース）", "Scala / TypeScript / Go / PHP / Ruby / Java / Python / Kotlin / Swift / Node.js / MySQL / AWS（主にドワンゴのニコニコ等）"],
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
    q: "KADOKAWAのエンジニア選考フローは？",
    a: "KADOKAWAグループのエンジニア採用は、主にドワンゴ等の事業会社で行われます。公開情報によると、おおむね「書類選考」「複数回の面接（技術面接を含む）」「内定」の流れです。ニコニコ等のプロダクトでは技術課題が課される場合もあります。職種・会社により内容が異なるため、各求人で確認してください。",
  },
  {
    q: "KADOKAWAの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書（提出会社単体）によると、株式会社KADOKAWAの平均年間給与は885万円、平均年齢は41.3歳です。これは出版・IPを含む単体（約2,343名）の全社員平均で、出版業界水準としては高めです。エンジニアが多く所属するドワンゴ等の事業会社の水準とは分けて読む必要があります。",
  },
  {
    q: "KADOKAWAとドワンゴの関係は？エンジニア採用はどちら？",
    a: "ドワンゴはKADOKAWAグループの中核事業会社で、ニコニコ動画やN高（角川ドワンゴ学園）等のWebサービスを運営しています。エンジニアの多くはドワンゴ等の事業会社に所属します。上場会社・有報の数値は株式会社KADOKAWA（証券コード9468）のものです。",
  },
  {
    q: "KADOKAWA（ドワンゴ）の技術スタックは？",
    a: "公開情報によると、ニコニコ等のサービスではバックエンドにScala・Go・PHP・Ruby・TypeScript・Java、フロントエンドにTypeScript・JavaScript、モバイルにKotlin（Android）・Swift（iOS）などが使われています。インフラはAWS・MySQL等、CI/CDにはCircleCI等が用いられています。",
  },
  {
    q: "KADOKAWAは何の会社ですか？事業領域は？",
    a: "KADOKAWAは出版を起点に、アニメ・ゲーム・実写などのIP事業、教育（N高/角川ドワンゴ学園）、ニコニコ動画などのWebサービスを展開する東証プライム上場のメディアミックス企業（証券コード9468）です。コンテンツIPとテクノロジーの融合が特徴です。",
  },
  {
    q: "ニコニコの開発の特徴は？",
    a: "公開情報によると、ニコニコは大規模ユーザーを抱えるサービスながら現場の裁量が大きく、エンジニアからの技術提案でプロジェクトが始まることもあるとされています。ScalaとTypeScriptを軸に、サーバーサイドTypeScript化など技術的な進化に継続的に取り組んでいます。",
  },
  {
    q: "30代・40代でもKADOKAWA（ドワンゴ）に転職できますか？",
    a: "KADOKAWA単体の平均年齢は41.3歳（2025年3月期）と、Web系企業の中では年齢層が高めです。大規模Webサービスの設計・運用、Scala/TypeScript等での開発経験、メディア・コンテンツ領域への理解があれば、30代・40代のミドルエンジニアも評価されやすい傾向です。",
  },
];

export default function KadokawaCompanyPage() {
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
      <ArticleJsonLd title="KADOKAWA エンジニア転職ガイド" description="KADOKAWA（ドワンゴ・ニコニコ含む）へのエンジニア転職を実データで解説。有価証券報告書の平均年収885万円（2025年3月期・単体）、Scala/TypeScript/Kotlin等の技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/kadokawa/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "PHPの転職ガイド", href: "/skill/php/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "KADOKAWA" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">KADOKAWA エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 出版・IP・ニコニコ（ドワンゴ）を擁するメディアミックス企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          KADOKAWAは、出版を起点にアニメ・ゲーム・実写などのIP事業、教育（N高/角川ドワンゴ学園）、ニコニコ動画などのWebサービスを展開する東証プライム上場（証券コード9468）のメディアミックス企業です。エンジニアの多くは中核事業会社の株式会社ドワンゴ等に所属します。本ページでは、有価証券報告書・公式採用情報・公開技術情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "KADOKAWA 有価証券報告書（2025年3月期）",
            "ドワンゴ公式 採用ページ／技術情報",
            "IRBANK（有報ベース推移データ）",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              KADOKAWAは<strong>出版・IPの強みと、ニコニコ（ドワンゴ）の大規模Webサービス開発を併せ持つメディアミックス企業</strong>です。エンジニアの主戦場はドワンゴ等で、ScalaとTypeScriptを軸とした開発が特徴です。有報の単体平均年収885万円（2025年3月期）は出版を含む全社員平均で、エンジニア職の水準とは分けて読む必要があります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：大規模Webサービス（ニコニコ等）の開発・運用に関心があり、Scala/TypeScript等の経験を活かしたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：コンテンツ・メディア領域への関心が薄く、業務系一辺倒を志向する人</li>
              <li>● <strong>30代・40代</strong>：大規模サービス運用やメディア領域の経験があれば年齢層の高めな組織で活きやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・単体従業員数は2025年3月期 有価証券報告書の提出会社（株式会社KADOKAWA単体）数値で、出版・IPを含む全社員平均です。エンジニアが多く所属するドワンゴ等の数値とは異なります。技術スタックは公開情報ベース（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ニコニコという大規模Webサービス</h3>
              <p className="text-sm text-petrol-deep">ドワンゴが運営するニコニコは大規模ユーザーを抱えるサービスで、配信・動画・コメントなど特有の技術課題があります。ScalaやTypeScriptを軸に、可用性・スケールを意識した開発・運用の経験が活きます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">コンテンツIPとテクノロジーの融合</h3>
              <p className="text-sm text-petrol-deep">出版・アニメ・ゲーム・教育（N高）といったIP・コンテンツ資産と、Webサービス開発が融合しているのが特徴です。メディア・エンタメ領域に関心のあるエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">現場の裁量と技術提案の文化</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、ニコニコでは現場の裁量が大きく、エンジニアからの技術提案でプロジェクトが始まることもあるとされています。サーバーサイドのTypeScript化など、技術的な改善に継続的に取り組む姿勢が見られます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            KADOKAWAグループのエンジニア開発は主にドワンゴ等で行われ、サービスにより使用技術が異なります。公開情報で確認できる主な技術は以下の通りです（ニコニコ等のWebサービス中心）。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：Scala、Go、PHP、Ruby、TypeScript、Java、Python 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>モバイル</strong>：Android は Kotlin、iOS は Swift</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データベース・インフラ</strong>：MySQL、AWS、Docker</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>開発ツール</strong>：git/GitHub、CI/CD（CircleCI 等）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ドワンゴ公式 採用情報／技術発信等の公開情報（2026年6月時点）。サービス別の構成です。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるKADOKAWAは、有価証券報告書で提出会社（単体）の平均年間給与を開示しています。<strong>2025年3月期は885万円（平均年齢41.3歳・単体）</strong>で、出版業界水準としては高めです。ただしこれは出版・IPを含む全社員平均で、エンジニア職の水準とは分けて読む必要があります。
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
          <p className="text-xs text-slate-400 mb-4">出典: KADOKAWA 有価証券報告書（各年3月期、提出会社単体）。これは株式会社KADOKAWA単体（約2,343名）の<strong>全社員平均</strong>で、出版・IP職を含みます。エンジニアが多く所属するドワンゴ等の水準とは異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は株式会社KADOKAWA単体の全社員平均であり、エンジニア職（主にドワンゴ等）の提示年収をそのまま示すものではありません。提示額は応募する会社・ポジション・等級により幅があるため、個別求人・面談で確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報をもとにした一般的な流れです。最新の内容は<a href="https://recruit.dwango.co.jp/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">ドワンゴ採用ページ</a>等でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>技術課題・コーディング（ポジションにより実施）</li>
            <li>面接（複数回。現場エンジニアによる技術面接）</li>
            <li>最終面接</li>
            <li>内定・オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ドワンゴ公式 採用ページ等の要約。選考は会社・職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術課題・技術面接で示す実装力と設計の妥当性（Scala/TypeScript等）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模Webサービス（配信・動画等）の開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>メディア・コンテンツ・サービスへの理解と関心</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術提案・改善への主体性、チームでの協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              KADOKAWA単体の平均年齢は41.3歳（2025年3月期）と、Web系企業の中では年齢層が高めです。ニコニコのような長期運用サービスを抱えるため、<strong>大規模サービスの安定運用や技術的負債との向き合い、アーキテクチャ改善といったミドルエンジニアの強みが活きやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。KADOKAWA単体平均（885万円）はこれを上回りますが、これは出版・IPを含む全社員平均で、エンジニアの提示額は応募会社（ドワンゴ等）・ポジション次第です。30代・40代は応募先ごとの水準を確認することが重要です。
            </p>
            <p>
              Scala/TypeScript等の経験や、配信・動画といった大規模Web領域の知見はミドル層の差別化に有効です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">KADOKAWA転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー・メディア系求人に強く、非公開求人も豊富。" },
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
          <h2 className="text-xl font-bold mb-3">KADOKAWA（ドワンゴ）への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メディア・エンタメ企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "DMM.com エンジニア転職ガイド", href: "/company/dmm/" },
              { name: "MIXI（ミクシィ）エンジニア転職ガイド", href: "/company/mixi/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
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
