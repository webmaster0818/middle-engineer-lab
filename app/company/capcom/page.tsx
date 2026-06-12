import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "カプコンの年収は平均918万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "カプコンへのエンジニア転職を実データで解説。有価証券報告書の平均年収918万円（2025年3月期・単体全社員平均）、内製エンジンRE ENGINE中心のC++技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "603万円"],
  ["2022年3月期", "712万円"],
  ["2023年3月期", "766万円"],
  ["2024年3月期", "832万円"],
  ["2025年3月期", "918万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社カプコン（東証プライム・9697）"],
  ["事業領域", "家庭用・モバイル・PC向けゲームソフトの開発・販売（モンスターハンター、ストリートファイター等）"],
  ["平均年間給与", "918万円（2025年3月期 有価証券報告書・単体全社員平均）"],
  ["平均年齢", "38.0歳（2025年3月期 有価証券報告書）"],
  ["従業員数", "3,379名（2025年3月期 提出会社=単体）"],
  ["本社所在地", "大阪府大阪市中央区"],
  ["技術スタック（公式）", "C++ を中心に、内製ゲームエンジン「RE ENGINE」、DirectX/OpenGL、各種シェーダー"],
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
    q: "カプコンの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（単体）の平均年間給与は918万円、平均年齢は38.0歳です。これは技術職に限らない全社員平均で、2021年3月期の603万円から年々上昇しています。背景には業績連動型の報酬制度や年収水準・初任給の引き上げがあります。",
  },
  {
    q: "カプコンの技術スタックは？",
    a: "公式採用情報によると、内製ゲームエンジン「RE ENGINE」を中心にC++での開発が行われています。レンダリング、VFX、物理シミュレーション、AI、モーション、ネットワーク、サーバー、プラットフォーム、テスト/ビルド、ツールなど専門領域ごとのエンジニアを募集しています。",
  },
  {
    q: "カプコンのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認を経てオファーという流れです。現在募集中の職種がない場合でも、経歴を登録しておけるキャリア登録の仕組みがあります。最新の詳細は公式経験者採用ページで確認してください。",
  },
  {
    q: "RE ENGINEとは何ですか？",
    a: "RE ENGINEはカプコンが内製する独自のゲームエンジンで、近年のモンスターハンターやバイオハザード、ストリートファイター等の主要タイトルに採用されています。エンジン開発職では、機能開発、コンソールプラットフォーム対応、アートアセットのパイプライン支援ツール開発などを担います。",
  },
  {
    q: "カプコンのエンジニアに必要な経験は？",
    a: "公式情報では、内製エンジン開発などのポジションで、コンシューマ・オンライン・モバイルゲーム開発におけるプログラマー経験3年以上が求められる例があります。レンダリングやサーバー等、領域ごとに必須・歓迎要件が異なるため、各求人で確認が必要です。",
  },
  {
    q: "カプコンの年収が上がっている理由は？",
    a: "業績好調を背景に、業績連動型の報酬制度のもとで年収水準や初任給の引き上げが続いてきたためです。2022年3月期以降、複数回の昇給・初任給増額が実施され、平均年収は5年間で300万円以上上昇しています（有価証券報告書ベース）。",
  },
  {
    q: "30代・40代でもカプコンに転職できますか？",
    a: "平均年齢38.0歳で、特定領域（エンジン、レンダリング、サーバー等）の専門性や開発実績があれば年齢自体は大きなハンデになりにくい傾向です。ゲーム業界の中途は専門性重視であり、自分の強みが活きるポジションを見極めることが重要です。",
  },
];

export default function CapcomCompanyPage() {
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
      <ArticleJsonLd title="カプコン エンジニア転職ガイド" description="カプコンへのエンジニア転職を実データで解説。有価証券報告書の平均年収918万円（2025年3月期・単体全社員平均）、内製エンジンRE ENGINE中心のC++技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/capcom/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "カプコン" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">カプコン エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 内製エンジンRE ENGINEを擁する大手ゲーム企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          カプコンは、「モンスターハンター」「ストリートファイター」「バイオハザード」などを擁する東証プライム上場（証券コード9697）の大手ゲーム企業です。持株会社を持たず上場会社自身が開発・販売を行うため、有価証券報告書の数字が比較的そのまま現場像に近いのが特徴です。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "カプコン 有価証券報告書（2025年3月期）",
            "カプコン公式 経験者採用ページ／エンジン開発求人",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              カプコンは<strong>内製エンジン「RE ENGINE」を軸にC++で大規模ゲームを開発する、技術志向の強いゲーム企業</strong>です。レンダリング・物理・AI・サーバー等、専門領域ごとに採用しており、専門性で勝負したいエンジニアに向きます。業績好調を背景に平均年収は5年で300万円以上上昇しています（単体全社員平均918万円）。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：C/C++での実務経験があり、エンジン・レンダリング・サーバー等の専門性を深めたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：Web系のモダンスタックやフルリモート前提を強く希望する人</li>
              <li>● <strong>30代・40代</strong>：特定領域の専門性・開発実績があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年3月期 有価証券報告書に基づく提出会社（単体）の全社員平均値。技術スタックは公式採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">内製エンジン「RE ENGINE」を中核とした開発</h3>
              <p className="text-sm text-blue-700">公式採用情報によると、RE ENGINEの機能開発、コンソールプラットフォーム対応、アートアセットのパイプライン支援ツール開発などを担うエンジン開発エンジニアを募集しています。トップレベルのエンジニアが集まり、新技術についての技術討論が日常的に行われる文化があるとされています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">専門領域ごとのエンジニア募集</h3>
              <p className="text-sm text-blue-700">レンダリング、VFX、物理シミュレーション、AI、モーション、ネットワーク、サーバー、プラットフォーム、テスト/ビルド、ツールなど、専門領域ごとにポジションが分かれています。自分の強みが活きる領域を選びやすい構造です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">業績連動で上昇する報酬水準</h3>
              <p className="text-sm text-blue-700">業績連動型の報酬制度のもと、平均年収は2021年3月期の603万円から2025年3月期の918万円へと5年で300万円以上上昇しています（有価証券報告書ベース）。会社の成長が報酬に反映されやすい設計です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            カプコンは公式採用情報で、内製エンジンRE ENGINEを中心とした開発体制を紹介しています。主な要素は以下の通りです。配属領域により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>主要言語</strong>：C++（ゲーム/エンジン開発の中心）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>ゲームエンジン</strong>：内製「RE ENGINE」</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>グラフィックスAPI</strong>：DirectX / OpenGL、各種シェーダー</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>職種例</strong>：エンジン開発、レンダリング、VFX、物理、AI、モーション、ネットワーク、サーバー、プラットフォーム、ツール</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: カプコン公式 経験者採用ページ／エンジン開発求人（2026年6月時点）。プロジェクト・領域により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場会社であるカプコンは、有価証券報告書で提出会社（単体）の平均年間給与を開示しています。<strong>2025年3月期は918万円（平均年齢38.0歳・単体全社員平均）</strong>で、業績連動の報酬制度を背景に一貫した上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: カプコン 有価証券報告書（各年3月期）。いずれも技術職に限らない<strong>提出会社（単体）の全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・ポジションにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">表の金額は技術職に限らない全社員平均で、営業・管理部門も含みます。エンジニア職の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。カプコンは持株会社を介さず上場会社自身が開発を行うため、有報の数字が現場像に比較的近いのが特徴です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な経験者採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.capcom.co.jp/recruit/mid-career/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式経験者採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: カプコン公式 経験者採用ページの要約。募集中の職種がない場合はキャリア登録が可能です。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す要件・方針から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C/C++での実装力と、応募領域（エンジン・レンダリング・サーバー等）の専門性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>コンシューマ・オンライン・モバイル等での開発経験（ポジションにより年数要件あり）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>これまでの開発実績・ポートフォリオ</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>新技術への関心とチームでの知識共有姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              カプコンの中途採用は<strong>専門性重視</strong>です。RE ENGINE関連、レンダリング、物理、AI、サーバーサイドなど、特定領域での実務経験・実績が問われます。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくいのが実情です。平均年齢38.0歳と、ミドル層も十分に活躍できる年齢構成です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。カプコンの単体全社員平均（918万円）はこれを上回りますが、これは高等級層も含む全社平均で、入社時の提示は等級・ポジション次第です。30代・40代は「自分が当てはまる水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。C++/C#まわりのスキル整理は<Link href="/skill/csharp/" className="text-blue-600 hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カプコン転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。ゲーム企業の求人も扱い、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。ゲーム業界の実務経験者への提案に強い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">カプコンへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム業界の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スクウェア・エニックス エンジニア転職ガイド", href: "/company/square-enix/" },
              { name: "コナミ エンジニア転職ガイド", href: "/company/konami/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
              { name: "任天堂 エンジニア転職ガイド", href: "/company/nintendo/" },
              { name: "C#エンジニアの市場価値", href: "/skill/csharp/" },
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
