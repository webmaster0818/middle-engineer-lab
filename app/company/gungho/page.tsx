import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/gungho/" },
  title: "ガンホーの年収は平均750万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ガンホー（パズドラ運営）へのエンジニア転職を実データで解説。有価証券報告書の平均年収750万円（2024年12月期・単体全社員平均）、Unity/C#・サーバーサイドの技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "645万円"],
  ["2021年12月期", "656万円"],
  ["2022年12月期", "750万円"],
  ["2023年12月期", "730万円"],
  ["2024年12月期", "750万円"],
];

const basicData: [string, string][] = [
  ["企業名", "ガンホー・オンライン・エンターテイメント株式会社（東証プライム・3765）"],
  ["事業領域", "スマートフォンゲーム（パズル＆ドラゴンズ、Ragnarok 等）、PCオンライン・家庭用ゲームの企画・開発・運営・配信"],
  ["平均年間給与", "750万円（2024年12月期 有価証券報告書・単体全社員平均）"],
  ["平均年齢", "41.7歳（2024年12月期 有価証券報告書）"],
  ["従業員数", "444名（2024年12月期 提出会社=単体）"],
  ["本社所在地", "東京都千代田区（パシフィックセンチュリープレイス丸の内）"],
  ["技術スタック（公式）", "Unity / C#（モバイル）、C/C++、サーバーサイド、iOS（Objective-C/Swift）、Android（Java）"],
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
    q: "ガンホーの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、提出会社（単体）の平均年間給与は750万円、平均年齢は41.7歳です。これは技術職に限らない全社員平均で、2020年12月期の645万円から緩やかな上昇傾向にあります。ガンホーは12月決算である点に注意してください。",
  },
  {
    q: "ガンホーの技術スタックは？",
    a: "公式採用情報によると、スマートフォンタイトルではC#を用いたUnityなどの開発ミドルウェアでの開発が中心です。ゲームプログラマーはUnityでのC/C++/C#による開発経験が必須要件とされ、iOS（Objective-C/Swift）、Android（Java）の経験が歓迎されます。パズドラのサーバーサイドは大規模な負荷を扱う運用も担います。",
  },
  {
    q: "ガンホーのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認を経てオファーという流れです。ゲーム開発部門、ゲーム運営部門、システム部門など部門別に募集職種が公開されています。最新かつ職種別の詳細は公式採用ページで確認してください。",
  },
  {
    q: "ガンホーのサーバーサイドエンジニアの仕事は？",
    a: "公式の社員紹介によると、パズドラのサーバーエンジニアは日本・北米・香港/台湾・韓国・欧州版など大規模なゲームのサーバーサイド開発から運用フェーズまで携わり、ユーザーが快適にプレイできるよう負荷低減を模索しています。長期運用タイトルの安定運用が重要な役割です。",
  },
  {
    q: "コンシューマ開発の実務経験がなくても応募できますか？",
    a: "公式情報では、コンシューマータイトルについては実務経験がなくても学校で勉強した方は可とされています。一方でスマートフォンタイトルではUnity/C#での開発経験が求められるなど、領域により要件が異なるため、各求人の必須・歓迎要件を確認することが重要です。",
  },
  {
    q: "ガンホーはどんなタイトルを扱っていますか？",
    a: "主力はスマートフォンゲーム「パズル＆ドラゴンズ」で、ほかに「Ragnarok Origin」「Ragnarok M:Eternal Love」「サモンズボード」などがあります。PCオンラインの「ラグナロクオンライン」や家庭用・携帯型ゲーム機向けのコンシューマ事業も展開しています。",
  },
  {
    q: "30代・40代でもガンホーに転職できますか？",
    a: "Unity/C#でのモバイル開発経験や、大規模サービスのサーバーサイド運用経験など、専門性・実績が問われます。提出会社の平均年齢が41.7歳と高めで、ミドル層も活躍しやすい年齢構成です。長期運用タイトルの安定運用や負荷対策の経験は強みになりやすい傾向です。",
  },
];

export default function GungHoCompanyPage() {
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
      <ArticleJsonLd title="ガンホー エンジニア転職ガイド" description="ガンホー（パズドラ運営）へのエンジニア転職を実データで解説。有価証券報告書の平均年収750万円（2024年12月期・単体全社員平均）、Unity/C#・サーバーサイドの技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/gungho/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ガンホー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ガンホー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | パズドラを運営するモバイル/オンラインゲーム企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ガンホー・オンライン・エンターテイメントは、「パズル＆ドラゴンズ（パズドラ）」を主力とする東証プライム上場（証券コード3765）のゲーム企業です。モバイルゲームを中心に、PCオンライン・家庭用ゲームの企画・開発・運営・配信を行います。コンシューマ専業の各社とは異なり、長期運用タイトルのサーバーサイドやUnity/C#でのモバイル開発が中心です。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ガンホー・オンライン・エンターテイメント 有価証券報告書（3765・2024年12月期）",
            "ガンホー公式 採用ページ／社員紹介（エンジニア）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ガンホーは<strong>パズドラ等の長期運用タイトルを、Unity/C#のモバイル開発と大規模サーバーサイドで支える企業</strong>です。新規開発だけでなく運用・負荷対策の比重が高いのが特徴です。有報の平均年収は単体全社員平均で750万円（2024年12月期）と、コンシューマ大手と比べると中位の水準です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Unity/C#のモバイル開発、または大規模サービスのサーバーサイド運用に強みのあるエンジニア</li>
              <li>● <strong>向いていない人</strong>：完全新規・短サイクルの受託開発を強く志向する人</li>
              <li>● <strong>30代・40代</strong>：長期運用・負荷対策・サーバー設計の専門性があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2024年12月期 有価証券報告書に基づく提出会社（単体）の全社員平均値。ガンホーは12月決算です。技術スタックは公式採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">長期運用タイトルの開発・運営</h3>
              <p className="text-sm text-petrol-deep">主力のパズドラは長期にわたり運営されるタイトルで、新規機能開発だけでなく安定運用・負荷対策の比重が高いのが特徴です。公式の社員紹介でも、日本・北米・香港/台湾・韓国・欧州版など各地域版のサーバーサイドを担う事例が紹介されています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Unity/C#中心のモバイル開発</h3>
              <p className="text-sm text-petrol-deep">スマートフォンタイトルではC#を用いたUnityなどの開発ミドルウェアでの開発が中心です。ゲームプログラマーはUnityでのC/C++/C#による開発経験が求められ、iOS（Objective-C/Swift）、Android（Java）の経験が歓迎されます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">部門別の募集</h3>
              <p className="text-sm text-petrol-deep">公式採用情報では、ゲーム開発部門、ゲーム運営部門、マーケティング部門、システム部門などに分かれて募集が行われています。自分の志向に合った部門・役割を選びやすい構造です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ガンホーの採用情報・社員紹介で公開されている技術要素をまとめます。配属タイトル・職種により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>モバイルクライアント</strong>：Unity、C#（C/C++も）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>iOS</strong>：Objective-C、Swift（歓迎）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Android</strong>：Java（歓迎）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：大規模ゲームの開発・運用、負荷低減</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>職種例</strong>：ゲームプログラマー、サーバーエンジニア、システム部門 ほか</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ガンホー公式 採用ページ／社員紹介（2026年6月時点）。配属タイトル・職種により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場会社であるガンホーは、有価証券報告書で提出会社（単体）の平均年間給与を開示しています。<strong>2024年12月期は750万円（平均年齢41.7歳・単体全社員平均）</strong>で、2020年12月期の645万円から緩やかな上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（単体全社員平均）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: ガンホー・オンライン・エンターテイメント 有価証券報告書（各年12月期）。いずれも技術職に限らない<strong>提出会社（単体）の全社員平均</strong>の平均年間給与です。ガンホーは12月決算です。エンジニア個人の年収は等級・ポジションにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">表の金額は技術職に限らない全社員平均で、運営・管理部門も含みます。エンジニア職の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。ガンホーは持株会社を介さず上場会社自身が開発・運営を行うため、有報の数字が現場像に比較的近いのが特徴です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な中途採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.gungho.co.jp/jp/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">ガンホー公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ガンホー公式採用ページの要約。部門・職種により選考フローは異なります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す要件から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>UnityでのC/C++/C#による開発力（モバイル）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>サーバーサイド職は大規模サービスの開発・運用・負荷対策の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>iOS（Objective-C/Swift）・Android（Java）の経験（歓迎）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>これまでの開発実績・ポートフォリオ</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ガンホーの中途採用は<strong>専門性重視</strong>です。Unity/C#のモバイル開発、または大規模サービスのサーバーサイド運用・負荷対策など、特定領域での実務経験・実績が問われます。提出会社の平均年齢が41.7歳と高めで、ミドル層が活躍しやすい年齢構成です。長期運用タイトルの安定運用経験は、30代・40代の強みとして評価されやすい傾向です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ガンホーの単体全社員平均（750万円）はこれを上回りますが、これは全社平均で、入社時の提示は等級・ポジション次第です。30代・40代は「自分が当てはまる水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。Unity・C#まわりのスキル整理は<Link href="/skill/unity/" className="text-petrol hover:underline">Unityエンジニアの市場価値</Link>や<Link href="/skill/csharp/" className="text-petrol hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ガンホー転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">ガンホーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム業界の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "セガ（セガサミーHD）エンジニア転職ガイド", href: "/company/sega-sammy/" },
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
