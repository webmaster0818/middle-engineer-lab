import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/square-enix/" },
  title: "スクウェア・エニックス エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "スクウェア・エニックスへのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社9684は提出会社27名平均1,427万円）の落とし穴、C++中心の内製エンジン技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2018年3月期", "1,391万円"],
  ["2019年3月期", "1,429万円"],
  ["2020年3月期", "1,487万円"],
  ["2021年3月期", "1,469万円"],
  ["2022年3月期", "1,427万円"],
];

const basicData: [string, string][] = [
  ["持株会社", "株式会社スクウェア・エニックス・ホールディングス（東証プライム・9684）"],
  ["主な開発会社", "株式会社スクウェア・エニックス（ゲーム企画・開発・販売）等"],
  ["事業領域", "デジタルエンタテインメント（FF・ドラクエ等）、アミューズメント、出版、ライツ・プロパティ"],
  ["平均年間給与", "1,427万円（持株会社=提出会社・全社員平均／後述の重要注意あり）"],
  ["平均年齢", "47.1歳（持株会社=提出会社）"],
  ["本社所在地", "東京都新宿区"],
  ["技術スタック（公式）", "C++ / C# / Java を中心に Python・Lua 等のスクリプト言語、自社エンジン・ツール"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
  ["salary", "年収データ（重要な注意点あり）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "スクウェア・エニックスの平均年収はいくらですか？",
    a: "有価証券報告書（9684）の平均年間給与は1,427万円（2022年3月期）ですが、これは持株会社=提出会社の全社員平均で、対象は27名と少数です。実際にゲームを開発する株式会社スクウェア・エニックス（事業会社）の従業員はこの数字には含まれません。エンジニアの提示年収は募集求人・等級により異なるため、個別に確認するのが確実です。",
  },
  {
    q: "スクウェア・エニックスの技術スタックは？",
    a: "公式採用情報によると、C++・C#・Javaをメインに、PHP・Python・Ruby・Perl・JavaScript・Lua・Squirrelなどのスクリプト言語、SQL、各種シェーダー言語、自社オリジナル言語まで、ゲームタイトルによって幅広い技術が使われています。大規模コンシューマからソーシャルゲームまでプロジェクトが多岐にわたります。",
  },
  {
    q: "スクウェア・エニックスのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認（コーディング・課題等）を経てオファーという流れです。最新かつ職種別の詳細は公式中途採用ページで確認してください。",
  },
  {
    q: "ゲーム開発未経験でもスクウェア・エニックスのエンジニアになれますか？",
    a: "公式情報では、ゲーム開発経験がなくても論理的思考力に基づく本質を見抜く力があれば、一部の専門性が高いセクションを除き応募可能とされています。実際にC++未経験での応募も多く、2024年度から新入社員向けに約3か月のエンジニア研修も実施されています（公式・働くストーリー）。",
  },
  {
    q: "C++の経験は必須ですか？",
    a: "ゲーム制作ではC++を使う場面が多いものの、公式情報ではC++未経験の応募も歓迎されています。ポジション（レンダリング、ツール、ITインフラ等）によって求められる経験は異なるため、各求人の必須・歓迎要件を確認することが重要です。",
  },
  {
    q: "30代・40代でもスクウェア・エニックスに転職できますか？",
    a: "中途採用では大規模開発から運用まで多様なプロジェクトがあり、特定領域（グラフィックス、サーバー、ツール等）の専門性や開発実績があれば年齢自体は大きなハンデになりにくい傾向です。提出会社の平均年齢が47.1歳と高めなのは少人数の持株会社の数字である点に注意してください。",
  },
  {
    q: "持株会社と事業会社のどちらに応募することになりますか？",
    a: "ゲーム開発職の多くは事業会社である株式会社スクウェア・エニックス等での募集です。有価証券報告書の年収は持株会社（9684・提出会社）の数字であり、開発現場の年収水準とは性質が異なる点に注意が必要です。",
  },
];

export default function SquareEnixCompanyPage() {
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
      <ArticleJsonLd title="スクウェア・エニックス エンジニア転職ガイド" description="スクウェア・エニックスへのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社9684は提出会社27名平均1,427万円）の落とし穴、C++中心の内製エンジン技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/square-enix/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "スクウェア・エニックス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">スクウェア・エニックス エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | FF・ドラクエを擁する大手ゲーム企業のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】スクウェア・エニックスの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 有価証券報告書上の平均年間給与は1,427万円ですが、これは持株会社スクウェア・エニックス・ホールディングス（9684・提出会社、対象27名の全社員平均、平均年齢47.1歳、2022年3月期）の数値で、ゲーム開発現場の水準ではありません。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・持株会社=提出会社の平均年間給与 1,427万円（2022年3月期 有報、対象27名の少数）。事業会社（株式会社スクウェア・エニックス）の従業員は含まれません。</li><li>・推移は2018年3月期1,391万円、2020年3月期1,487万円、2022年3月期1,427万円（各期 有報・持株会社）。</li><li>・実際にゲームを開発するのは事業会社で、エンジニアの提示額はポジション・等級により個別。求人で確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          スクウェア・エニックスは、「ファイナルファンタジー」「ドラゴンクエスト」などを擁する大手ゲーム企業です。上場しているのは持株会社の株式会社スクウェア・エニックス・ホールディングス（証券コード9684・東証プライム）で、実際のゲーム開発は事業会社である株式会社スクウェア・エニックス等が担います。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "スクウェア・エニックス・ホールディングス 有価証券報告書（9684）",
            "SQUARE ENIX 公式 中途採用ページ（エンジニア職）",
            "SQUARE ENIX 公式 採用 働くストーリー",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              スクウェア・エニックスは<strong>C++を中心とした大規模ゲーム開発に、特定領域の専門性で貢献するエンジニア</strong>を求めています。大規模コンシューマからソーシャルゲームまでプロジェクトが広く、在籍エンジニアのレベルは高めです。一方、有報の高年収（1,427万円）は持株会社の数字で、開発現場の水準とは別物である点に注意が必要です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：C/C++等での実務経験があり、レンダリング・ツール・サーバー等の専門性を深めたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：Web系の高速な技術更新やフルリモート前提を強く希望する人</li>
              <li>● <strong>30代・40代</strong>：特定領域の専門性・開発実績があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は有価証券報告書（9684）に基づく持株会社=提出会社の全社員平均値（対象27名）。ゲーム開発職の水準を示す数字ではない点に注意。技術スタックは公式中途採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模コンシューマからソーシャルまで幅広いプロジェクト</h3>
              <p className="text-sm text-petrol-deep">公式採用情報によると、大規模コンシューマーゲーム開発からソーシャルゲーム開発まで多様なプロジェクトがあり、在籍するエンジニア一人ひとりのレベルが高いとされています。配属プロジェクトにより使う技術・規模感は大きく異なります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">論理的思考力を重視・未経験応募も歓迎</h3>
              <p className="text-sm text-petrol-deep">ゲーム開発経験がなくても、論理的思考力に基づき本質を見抜く力があれば、一部の専門性が高いセクションを除き応募可能とされています。C++未経験の応募も多いのが特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独自のエンジニア研修</h3>
              <p className="text-sm text-petrol-deep">公式の働くストーリーによると、2024年度からプログラマー新入社員を対象に、プログラミングの基礎とゲーム制作全般の知識を身につける約3か月のエンジニア研修が実施されています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            スクウェア・エニックスは公式採用情報で使用技術を紹介しています。ゲームタイトルによって使われる言語・技術が異なるのが特徴です。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>主要言語</strong>：C++、C#、Java</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>スクリプト言語</strong>：PHP、Python、Ruby、Perl、JavaScript、Lua、Squirrel など</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>その他</strong>：SQL、VBA、各種シェーダー言語、C言語、アセンブリ言語、自社オリジナル言語</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>職種例</strong>：エンジニア（プログラマー）、ITインフラエンジニア など</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: SQUARE ENIX 公式 中途採用ページ（2026年6月時点）。タイトル・プロジェクトにより使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース・重要な注意点あり）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場している持株会社スクウェア・エニックス・ホールディングス（9684）は、有価証券報告書で平均年間給与を開示しています。<strong>ただしこれは持株会社=提出会社の数字で、対象は27名程度と少数</strong>です。実際にゲームを開発する事業会社（株式会社スクウェア・エニックス）の従業員はこの数字に含まれません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（持株会社=提出会社）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: スクウェア・エニックス・ホールディングス 有価証券報告書（各年3月期）。いずれも<strong>持株会社=提出会社</strong>の全社員平均で、開発現場のエンジニア年収を示す数字ではありません。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">ゲーム会社は持株会社（9684）と事業会社で有報の数字が異なります。本ページの年収表は持株会社の数字であり、ゲーム開発職の提示年収を表すものではありません。エンジニアの実際の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な中途採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.jp.square-enix.com/recruit/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（コーディング・課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: SQUARE ENIX 公式 中途採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す方針から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>論理的思考力・本質を見抜く力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>C/C++等での実装力と、応募領域（レンダリング・ツール・サーバー等）の専門性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>これまでの開発実績・ポートフォリオ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模開発でのチーム協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              スクウェア・エニックスの中途採用は、ゲーム業界の例にもれず<strong>専門性重視</strong>です。レンダリング、サーバーサイド、ツール、ITインフラなど、特定領域での実務経験・実績が問われます。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくいのが実情です。
            </p>
            <p>
              年収面では、有報の1,427万円は持株会社（提出会社・27名）の数字であり、ゲーム開発職の提示水準とは性質が異なります。参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。エンジニア職の提示はポジション・等級により幅があるため、自分が当てはまる水準を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。C++/C#まわりのスキル整理は<Link href="/skill/csharp/" className="text-petrol hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スクウェア・エニックス転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。ゲーム企業の求人も扱い、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。ゲーム業界の実務経験者への提案に強い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">スクウェア・エニックスへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム業界の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "カプコン エンジニア転職ガイド", href: "/company/capcom/" },
              { name: "コナミ エンジニア転職ガイド", href: "/company/konami/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
              { name: "任天堂 エンジニア転職ガイド", href: "/company/nintendo/" },
              { name: "C#エンジニアの市場価値", href: "/skill/csharp/" },
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
