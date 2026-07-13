import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/gree/" },
  title: "グリー（GREE）の年収は平均865万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "グリー（GREEグループ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収865万円（2025年6月期・持株会社単体）、Go/PHP/Unity等の技術スタック、選考フロー、30代40代の現実までまとめました。持株会社移行に伴う数字の読み方も明記。",
};

const salaryTrend: [string, string][] = [
  ["2014年6月期", "743万円"],
  ["2025年6月期", "865万円"],
];

const basicData: [string, string][] = [
  ["企業名", "グリーホールディングス株式会社（東証プライム・3632）※2024年10月持株会社移行"],
  ["主な事業会社", "グリー株式会社（ゲーム・メタバース等の事業運営）"],
  ["事業領域", "ゲーム・メタバース（REALITY等）・DX・コマース・広告（アドテク）等"],
  ["平均年間給与", "865万円（2025年6月期 有価証券報告書・提出会社=持株会社単体）"],
  ["平均年齢", "40.2歳（2025年6月期 有価証券報告書・持株会社単体）"],
  ["従業員数", "連結1,489名／提出会社（持株会社）単体123名（2025年6月期）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公式情報ベース）", "PHP / Go / Java / C++ / C# / Ruby / Python / TypeScript / JavaScript / Swift / Kotlin / Rust / SQL"],
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
    q: "グリーのエンジニア選考フローは？",
    a: "公開されている採用情報・選考体験談によると、おおむね「書類選考（エントリーシート）」「複数回の面接（技術面接を含む）」「内定」の流れです。職種・新卒/中途により段階数が変動するため、各求人の募集要項で確認するのが確実です。",
  },
  {
    q: "グリーの平均年収はいくらですか？",
    a: "2025年6月期の有価証券報告書によると、提出会社（グリーホールディングス＝持株会社）単体の平均年間給与は865万円、平均年齢は40.2歳です。ただしこれは2024年10月の持株会社移行後の数字で、持株会社単体の在籍者は123名と少数です。実際の開発を担うのは事業会社グリー株式会社等であり、この単体平均がエンジニア全体の給与水準をそのまま示すものではない点に注意が必要です。",
  },
  {
    q: "グリーは持株会社になったのですか？数字の見方は？",
    a: "グリーは2024年10月にグリーホールディングス株式会社へ商号変更し、持株会社体制へ移行しました。証券コード3632は持株会社のものです。有価証券報告書の「提出会社（単体）」の数値は持株会社の在籍者（2025年6月期で123名）に基づくため、エンジニアが多数所属する事業会社グリー株式会社の実態とは分けて読む必要があります。連結従業員数は1,489名（2025年6月期）です。",
  },
  {
    q: "グリーの技術スタックは？",
    a: "公式採用情報によると、Java・C・C++・C#・PHP・Ruby・Python・Swift・Kotlin・Rust・Go・TypeScript・JavaScript・SQLなど幅広い言語に対応しています。ゲーム開発ではUnity（C#）、サーバーサイドではPHP・Goなどがプロダクトにより使い分けられています。",
  },
  {
    q: "グリーは何の会社ですか？事業領域は？",
    a: "グリーグループはゲーム事業を中核に、メタバースサービス「REALITY」、DX事業、コマース事業、アドテク（広告）事業などを展開しています。SNS「GREE」発祥の企業で、現在はゲーム・メタバースを軸とした多角的なエンタメ・テック企業です。",
  },
  {
    q: "30代・40代でもグリーに転職できますか？",
    a: "持株会社単体の平均年齢は40.2歳（2025年6月期）と、相対的に年齢層が高めの組織です。ゲーム基盤・サーバーサイド・メタバース技術などの専門性や運用経験があれば、30代・40代のミドルエンジニアも評価されやすい傾向です。",
  },
  {
    q: "グリーへの転職難易度は高いですか？",
    a: "ゲーム・メタバースという専門領域で、技術力と該当ドメインへの理解が見られます。事業会社・プロダクトにより求める技術が異なるため、応募ポジションに合わせた準備が重要です。",
  },
];

export default function GreeCompanyPage() {
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
      <ArticleJsonLd title="グリー（GREE）エンジニア転職ガイド" description="グリー（GREEグループ）へのエンジニア転職を実データで解説。有価証券報告書の平均年収865万円（2025年6月期・持株会社単体）、Go/PHP/Unity等の技術スタック、選考フロー、30代40代の現実までまとめました。持株会社移行に伴う数字の読み方も明記。" url="/company/gree/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "PHPの転職ガイド", href: "/skill/php/" }, { name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "グリー（GREE）" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">グリー（GREE）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ゲーム・メタバースを軸とするエンタメ・テック企業のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】グリー（GREE）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: グリーホールディングスの平均年間給与は865万円です（2025年6月期 有価証券報告書・提出会社＝持株会社単体、平均年齢40.2歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 865万円（2025年6月期 有報）。ただし2024年10月の持株会社移行後の数字で、持株会社単体の在籍者は123名と少数です。</li><li>・実際の開発を担うのは事業会社グリー株式会社等であり、この単体平均がエンジニア全体の給与水準をそのまま示すものではありません。</li><li>・エンジニア職の提示額は応募する事業会社・ポジション・等級により幅があるため、個別求人・面談で確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          グリー（GREEグループ）は、ゲーム事業を中核に、メタバースサービス「REALITY」、DX・コマース・広告事業を展開するエンタメ・テック企業です。2024年10月に持株会社体制へ移行し、上場会社はグリーホールディングス株式会社（東証プライム・証券コード3632）、実際の事業運営はグリー株式会社等が担います。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "グリーホールディングス 有価証券報告書（2025年6月期）",
            "グリーグループ公式 採用ページ",
            "IRBANK（有報ベース推移データ）",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              グリーは<strong>ゲーム・メタバースを軸に、幅広い言語・技術で開発を行うエンタメ・テック企業</strong>です。2024年10月に持株会社化しており、有報の単体平均年収865万円（2025年6月期）は<strong>持株会社（在籍123名）の数字</strong>である点に注意が必要です。実際の開発は事業会社が担い、ポジション・事業会社により技術も待遇も異なります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：ゲーム・メタバース領域に関心があり、サーバーサイドやクライアント（Unity等）の実務経験があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：エンタメ領域への関心が薄く、業務系・受託のみを志向する人</li>
              <li>● <strong>30代・40代</strong>：ゲーム基盤・メタバース・運用などの専門性があれば年齢層が高めの組織で活きやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年6月期 有価証券報告書の提出会社（持株会社単体）数値。持株会社移行（2024年10月）に伴い、単体在籍者は123名と少数です。技術スタックは公式採用情報ベース（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">幅広い言語・技術に対応する開発環境</h3>
              <p className="text-sm text-petrol-deep">公式採用情報によると、Java・C・C++・C#・PHP・Ruby・Python・Swift・Kotlin・Rust・Go・TypeScriptなど非常に幅広い言語に対応しています。歴史あるサービスと新規プロダクトが混在し、レガシーの保守からモダンな開発まで関わる機会があります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゲーム・メタバースという専門領域</h3>
              <p className="text-sm text-petrol-deep">ゲーム開発（Unity/C++等）に加え、メタバースサービス「REALITY」のようなリアルタイム配信・3D技術を扱うプロダクトがあります。エンタメ・コミュニケーション領域の技術に関心があるエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">持株会社体制・事業会社ごとの採用</h3>
              <p className="text-sm text-petrol-deep">2024年10月に持株会社へ移行しており、採用は事業会社・プロダクト単位で行われるのが基本です。応募時はどの事業会社・どのプロダクトのポジションかを確認することが重要です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            グリーグループは公式採用情報で対応言語・技術を公開しています。事業会社・プロダクトにより使用技術は大きく異なります。主な要素は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：PHP、Go、Java、Ruby、Python 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ゲーム/クライアント</strong>：C#（Unity）、C++</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>モバイル</strong>：iOS は Swift、Android は Kotlin</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>その他</strong>：Rust、Lua、R、SQL 等にも対応</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: グリーグループ公式 採用情報（2026年6月時点）。対応言語の一覧であり、配属プロダクトにより実際の使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場会社であるグリーホールディングスは、有価証券報告書で提出会社（持株会社単体）の平均年間給与を開示しています。<strong>2025年6月期は865万円（平均年齢40.2歳）</strong>です。ただし2024年10月の持株会社移行後の数字で、持株会社単体の在籍者は123名と少数のため、エンジニア全体の給与水準とは分けて読む必要があります。
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
          <p className="text-xs text-slate-400 mb-4">出典: グリーホールディングス 有価証券報告書（各年6月期、提出会社単体）。2014年比で約120万円上昇していますが、2024年10月の持株会社化により、最新値は持株会社単体（在籍123名）の平均である点に注意してください。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">持株会社移行後の単体平均は、エンジニアが多数所属する事業会社の実態をそのまま示すものではありません。エンジニア職の提示年収は応募する事業会社・ポジション・等級により幅があるため、個別求人・面談で確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報・選考体験談をもとにした一般的な流れです。最新の内容は<a href="https://hd.gree.net/jp/ja/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">グループ採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（エントリーシート・職務経歴書）</li>
            <li>面接（複数回。技術面接を含む）</li>
            <li>最終面接</li>
            <li>内定・オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: グリーグループ公式 採用ページ／選考体験談の要約。選考は事業会社・職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術面接で示す実装力・設計力（応募ポジションの言語/領域）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ゲーム・メタバース等のドメインへの理解・関心</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>サービス運用・スケールの経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・主体性</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              グリーは持株会社単体の平均年齢が40.2歳（2025年6月期）と、Web・ゲーム系の中では年齢層が高めの組織です。歴史あるサービスの保守・改善や、ゲーム基盤・メタバース技術といった<strong>専門領域での深い経験を持つミドルエンジニアが活きやすい</strong>環境といえます。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。グリーの単体平均（865万円）はこれを上回りますが、これは持株会社の少数在籍者の平均であり、エンジニアの提示額は事業会社・ポジション次第です。30代・40代は応募先の事業会社ごとに水準を確認することが重要です。
            </p>
            <p>
              ゲーム・メタバース・アドテクなど、関心領域に合わせて事業会社を選べる点はミドル層にとってメリットです。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">グリー転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">グリーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・エンタメ企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "MIXI（ミクシィ）エンジニア転職ガイド", href: "/company/mixi/" },
              { name: "コロプラ エンジニア転職ガイド", href: "/company/colopl/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
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
