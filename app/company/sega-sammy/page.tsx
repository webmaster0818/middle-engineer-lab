import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/sega-sammy/" },
  title: "セガ（セガサミーHD）エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "セガ（セガサミーホールディングス／株式会社セガ）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社6460は提出会社平均939万円）の注意点、内製Hedgehog Engineや内製/Unreal/UnityのC++/C#技術、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "744万円"],
  ["2022年3月期", "805万円"],
  ["2023年3月期", "831万円"],
  ["2024年3月期", "879万円"],
  ["2025年3月期", "939万円"],
];

const basicData: [string, string][] = [
  ["持株会社", "セガサミーホールディングス株式会社（東証プライム・6460）"],
  ["主な開発会社", "株式会社セガ（家庭用・モバイル等のゲーム開発）等"],
  ["事業領域", "エンタテインメントコンテンツ（ゲーム）、遊技機、リゾート等"],
  ["平均年間給与", "939万円（持株会社=提出会社・全社員平均／後述の注意あり）"],
  ["平均年齢", "42.6歳（持株会社=提出会社）"],
  ["本社所在地", "東京都品川区（住友不動産大崎ガーデンタワー）"],
  ["技術スタック（公式）", "C++ / C# を中心に、内製エンジン（Hedgehog Engine）、Unreal Engine、Unity、サーバーサイド（Java/PHP等）"],
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
    q: "セガの平均年収はいくらですか？",
    a: "セガサミーホールディングス（6460）の有価証券報告書によると、提出会社の平均年間給与は939万円、平均年齢は42.6歳（2025年3月期）です。ただしこれは持株会社の数字で、実際にゲームを開発する株式会社セガ等の従業員はこの数字に含まれません。エンジニアの提示年収は個別求人で確認するのが確実です。",
  },
  {
    q: "セガの技術スタックは？",
    a: "公式中途採用情報によると、家庭用/PCゲーム開発ではC++でのアプリケーション開発経験やC#が求められ、内製ゲームエンジン・Unreal Engine・Unityを用いた開発が行われています。プラットフォームはPS4/PS5、Nintendo Switch、Xbox、Windows/Steamなど。サーバープログラマーはJava・PHP等での経験が求められます。",
  },
  {
    q: "Hedgehog Engineとは何ですか？",
    a: "Hedgehog Engineはセガが内製する独自ゲームエンジンで、ソニックシリーズなどに採用されてきました。セガでは内製エンジンに加え、タイトルに応じてUnreal EngineやUnityも併用しており、配属プロジェクトにより使う技術が異なります。",
  },
  {
    q: "セガのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認を経てオファーという流れです。最新かつ職種別の詳細は株式会社セガの公式中途採用ページで確認してください。",
  },
  {
    q: "セガのサーバーサイドエンジニアの仕事は？",
    a: "公式情報によると、サーバープログラマーはJava・PHP等を用いた3年以上の経験、データベース開発経験、Linuxコマンドの知識などが求められます。オンライン要素を持つタイトルの運用基盤を支える役割です。",
  },
  {
    q: "セガに応募するのは持株会社ですか開発会社ですか？",
    a: "ゲーム開発職の多くは事業会社である株式会社セガ等での募集です。有価証券報告書の年収は持株会社セガサミーホールディングス（6460・提出会社）の数字であり、開発現場の水準とは性質が異なる点に注意が必要です。",
  },
  {
    q: "30代・40代でもセガに転職できますか？",
    a: "C++/C#での開発経験や、内製エンジン・Unreal/Unity、サーバーサイド等の専門性・実績が問われます。提出会社の平均年齢が42.6歳と高めで、ミドル層も活躍しやすい年齢構成です。専門領域で価値を出せれば年齢自体は大きなハンデになりにくい傾向です。",
  },
];

export default function SegaSammyCompanyPage() {
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
      <ArticleJsonLd title="セガ（セガサミーHD）エンジニア転職ガイド" description="セガ（セガサミーホールディングス／株式会社セガ）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社6460は提出会社平均939万円）の注意点、内製Hedgehog Engineや内製/Unreal/UnityのC++/C#技術、選考フロー、30代40代の現実までまとめました。" url="/company/sega-sammy/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "セガ（セガサミーHD）" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">セガ（セガサミーHD）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ソニック・龍が如く等を擁する大手ゲーム企業のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】セガ（セガサミーHD）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 有価証券報告書上の平均年間給与は939万円ですが、これは持株会社セガサミーHD（6460・提出会社／全社員平均、平均年齢42.6歳、2025年3月期）の数値で、開発現場の水準ではありません。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・持株会社=提出会社の平均年間給与 939万円（2025年3月期 有報）。ゲーム開発を担う株式会社セガ等の従業員は含まれません。</li><li>・推移は2021年3月期744万円から2025年3月期939万円へ増加（各期 有報・持株会社）。</li><li>・実際にゲームを開発するのは事業会社（株式会社セガ等）で、エンジニアの提示額はポジション・等級により個別。求人で確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          セガは、「ソニック」「龍が如く」「ペルソナ」などを擁する大手ゲーム企業です。上場しているのは持株会社のセガサミーホールディングス株式会社（証券コード6460・東証プライム）で、実際のゲーム開発は事業会社である株式会社セガ等が担います。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "セガサミーホールディングス 有価証券報告書（6460・2025年3月期）",
            "株式会社セガ 公式 中途採用ページ",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              セガは<strong>内製エンジン（Hedgehog Engine）に加えUnreal/Unityも併用し、C++/C#で大規模ゲームを開発する企業</strong>です。クライアントからサーバーまで専門領域ごとに採用しています。有報の年収（939万円）は持株会社の数字で、開発現場の水準とは別物である点に注意が必要です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：C++/C#の実務経験があり、内製エンジン・Unreal/Unity・サーバー等の専門性を深めたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：単一技術のWeb系モダンスタックやフルリモート前提を強く希望する人</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は有価証券報告書（6460・2025年3月期）に基づく持株会社=提出会社の全社員平均値。ゲーム開発職の水準を示す数字ではない点に注意。技術スタックは株式会社セガ 公式中途採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">内製エンジンとUnreal/Unityの併用</h3>
              <p className="text-sm text-petrol-deep">公式採用情報によると、内製ゲームエンジンに加え、タイトルに応じてUnreal EngineやUnityも用いた開発が行われています。プラットフォームはPS4/PS5、Nintendo Switch、Xbox、Windows/Steamなど幅広く、配属プロジェクトにより使う技術が変わります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グラフィックスからサーバーまで幅広い職種</h3>
              <p className="text-sm text-petrol-deep">グラフィックスプログラミング、システムアーキテクチャ、ツール開発、サーバーサイドエンジニアリングなど、複数の専門領域で募集が行われています。自分の強みが活きる領域を選びやすい構造です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">オンライン運用を支えるサーバー開発</h3>
              <p className="text-sm text-petrol-deep">サーバープログラマーはJava・PHP等での3年以上の経験、データベース開発経験、Linuxコマンドの知識などが求められ、オンライン要素を持つタイトルの運用基盤を支えます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            株式会社セガの中途採用情報で公開されている技術要素をまとめます。配属プロジェクト・職種により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>主要言語</strong>：C++、C#（クライアント開発の中心）、Python</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ゲームエンジン</strong>：内製エンジン（Hedgehog Engine）、Unreal Engine、Unity</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>プラットフォーム</strong>：PS4/PS5、Nintendo Switch、Xbox、Windows/Steam</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：Java、PHP 等、データベース、Linux</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 株式会社セガ 公式中途採用ページ（2026年6月時点）。プロジェクト・職種により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース・重要な注意点あり）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場している持株会社セガサミーホールディングス（6460）は、有価証券報告書で平均年間給与を開示しています。<strong>ただしこれは持株会社=提出会社の数字</strong>で、実際にゲームを開発する事業会社（株式会社セガ等）の従業員はこの数字に含まれません。
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
          <p className="text-xs text-slate-400 mb-4">出典: セガサミーホールディングス 有価証券報告書（各年3月期）。いずれも<strong>持株会社=提出会社</strong>の全社員平均で、開発現場のエンジニア年収を示す数字ではありません。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">ゲーム会社は持株会社（6460）と事業会社で有報の数字が異なります。本ページの年収表は持株会社の数字であり、ゲーム開発職の提示年収を表すものではありません。エンジニアの実際の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な中途採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.sega.co.jp/recruit/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">株式会社セガ 公式中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: 株式会社セガ 公式中途採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す要件から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>C++/C#での実装力（クライアント開発）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>内製エンジン・Unreal/Unityの経験、応募領域の専門性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>サーバー職はJava/PHP等・DB・Linuxの経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>これまでの開発実績・ポートフォリオ</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              セガの中途採用は<strong>専門性重視</strong>です。内製エンジン・Unreal/Unity、グラフィックス、サーバーサイドなど、特定領域での実務経験・実績が問われます。提出会社の平均年齢が42.6歳と高めで、ミドル層も活躍しやすい年齢構成です。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくいのが実情です。
            </p>
            <p>
              年収面では、有報の939万円は持株会社（提出会社）の数字であり、ゲーム開発職の提示水準とは性質が異なります。参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。エンジニア職の提示はポジション・等級により幅があるため、自分が当てはまる水準を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。Unity・C#まわりのスキル整理は<Link href="/skill/unity/" className="text-petrol hover:underline">Unityエンジニアの市場価値</Link>や<Link href="/skill/csharp/" className="text-petrol hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セガ転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">セガへの転職を相談する</h2>
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
              { name: "Unityエンジニアの市場価値", href: "/skill/unity/" },
              { name: "C#エンジニアの市場価値", href: "/skill/csharp/" },
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
