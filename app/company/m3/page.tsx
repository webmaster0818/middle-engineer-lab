import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/m3/" },
  title: "エムスリーの年収は平均975万円【2026年・有報】エンジニア転職・技術スタック解説",
  description:
    "エムスリー（2413）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収975万円(2026年3月期・全社員平均)、Kotlin/Scala/TypeScript中心の技術スタック、チーム裁量の技術選定、選考フロー、30代40代の戦い方まで。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "901万円", "34.7歳"],
  ["2023年3月期", "948万円", "34.7歳"],
  ["2024年3月期", "936万円", "34.6歳"],
  ["2025年3月期", "930万円", "34.7歳"],
  ["2026年3月期", "975万円", "34.8歳"],
];

const basicData: [string, string][] = [
  ["企業名", "エムスリー株式会社（証券コード2413・東証プライム）"],
  ["事業領域", "医療従事者向けプラットフォーム「m3.com」、医療×ITの各種サービス（製薬マーケティング支援、電子カルテ、治験、キャリア等）"],
  ["平均年間給与", "975万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "34.8歳（2026年3月期 有価証券報告書）"],
  ["平均勤続年数", "約4.5年（2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公開情報）", "Kotlin / Scala / TypeScript / Ruby / Go / Python、React / Vue、Spring Boot / Play / Rails ほか（チーム裁量で選定）"],
  ["採用ページ", "jobs.m3.com/engineer（エンジニア採用）"],
];

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんなエンジニア向きか" },
  { id: "basic", label: "基本データ（企業概要・出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（有報・公式求人）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代から見たエムスリー" },
  { id: "agents", label: "エムスリー転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "エムスリーのエンジニア転職の難易度は高い？",
    a: "医療×ITのリーディングカンパニーとして人気が高く、Webアプリケーション開発の実務経験は前提になります。一方で複数プロダクト・新規事業を抱え通年で募集しており、Kotlin・Scala・Ruby等いずれかのバックエンド経験とTypeScript等のフロント経験、課題解決志向があれば30代・40代でも十分に挑戦できます。少数精鋭で一人あたりの裁量が大きい点が特徴です。",
  },
  {
    q: "エムスリーのエンジニアの平均年収はいくら？",
    a: "エムスリー株式会社の有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は975万円、平均年齢34.8歳です（エンジニア職に限った数値ではなく全社員平均）。IT・SaaS企業の中でも高めの水準で、近年は900万円台で推移しています。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "エムスリーの技術スタックは？",
    a: "エムスリーエンジニア採用サイトや技術ブログなどの公開情報によると、バックエンドはKotlin・Scala・Ruby・Go・Java、フロントエンドはTypeScript（React・Vue）が中心です。上層部が技術を固定せず、事業フェーズやチームの判断で技術を選定する「ベスト・オブ・ブリード」型の文化が特徴とされています。プロダクト・チームにより採用技術は異なります。",
  },
  {
    q: "エムスリーの選考フローは？",
    a: "公式エンジニア採用サイトによると、カジュアル面談（任意）→ 書類選考 → 複数回の面接（技術面接・コーディング課題を含む場合あり）→ 内定が基本的な流れです。エンジニア職では技術的な議論や実装課題で実力を確認する選考が行われることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "エムスリーはどんな事業をしている会社ですか？",
    a: "エムスリーは医療従事者向けプラットフォーム「m3.com」を中核に、製薬企業のマーケティング支援、電子カルテ、治験、医療キャリアなど医療×ITの多様な事業を展開する東証プライム上場企業（証券コード2413）です。国内外で多数の事業・子会社を持ち、エンジニアは医療ドメインの社会的意義と事業の幅広さの両方に関われます。",
  },
  {
    q: "エムスリーはリモートワークできる？",
    a: "エムスリーはリモートワークを併用できる体制を採っています。OpenWork等の口コミでは、裁量の大きさや成長機会を評価する声が見られる一方、少数精鋭ゆえの責任の大きさやスピード感を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "エムスリーへの転職で有利な経験は？",
    a: "Kotlin・Scala・Ruby・Go・Java等いずれかのバックエンド実務経験、TypeScript等でのフロント開発経験が基本です。プロダクトを主体的に改善した経験、技術選定や設計を自分の言葉で説明できること、医療・ヘルスケアドメインへの関心があると評価されやすい傾向です。",
  },
];

export default function M3CompanyPage() {
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
      <ArticleJsonLd
        title="エムスリー エンジニア転職ガイド"
        description="エムスリーへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収975万円(2026年3月期)、Kotlin/Scala/TypeScript中心の技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/m3/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "Scalaの転職ガイド", href: "/skill/scala/" }, { name: "TypeScriptの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "エムスリー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エムスリー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 医療×ITのプラットフォームを牽引する高収益テック企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エムスリーの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: エムスリー株式会社の平均年間給与は975万円です（2026年3月期 有価証券報告書・全社員平均、平均年齢34.8歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 975万円（2026年3月期 有報）。全社員平均でエンジニア職限定の数値ではありません。</li><li>・近年は900万円台で推移し、2025年3月期930万円から2026年3月期975万円（各期 有報）。平均年齢34.8歳と若めの組織で高水準です。</li><li>・職種・等級別の公式な年収表は非公表。提示額はスキル評価で個別決定されるため求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          エムスリー株式会社（証券コード2413・東証プライム）は、医療従事者向けプラットフォーム「m3.com」を中核に、製薬マーケティング支援・電子カルテ・治験・医療キャリアなど、医療×ITの多様な事業を展開する高収益テック企業です。
          このページでは、有価証券報告書・公式エンジニア採用サイト・技術ブログといった一次情報をもとに、エムスリーへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "エムスリー株式会社 有価証券報告書（2026年3月期）",
            "エムスリーエンジニア採用サイト（jobs.m3.com/engineer）",
            "エムスリー Tech Blog（公式技術ブログ）",
            "OpenWork（エムスリー 社員クチコミ）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんなエンジニア向きか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">結論：Webアプリ開発の実務経験があり、技術選定の裁量と社会的意義を両立したいエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Kotlin・Scala・Ruby等のモダンなサーバーサイド経験が活き、チーム裁量で技術を選べる文化がある。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は975万円（2026年3月期 有報）。IT・SaaS業界でも高めの水準で、ミドル層の年収向上を狙いやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>少数精鋭で一人あたりの裁量・責任が大きい。医療ドメインの社会的意義と、多数の事業に関われる幅広さが魅力。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（企業概要・出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典: エムスリー株式会社 有価証券報告書（2026年3月期）／エムスリーエンジニア採用サイト・公式技術ブログ。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">チームに裁量がある「ベスト・オブ・ブリード」型の技術選定</h3>
              <p className="text-sm text-petrol-deep">エムスリーでは上層部が利用言語やプラットフォームを固定するのではなく、事業のフェーズ・プロダクトのゴール・メンバーの技術レベルなどを踏まえ、各チームが裁量をもって技術を決定するとされています。Kotlin・Scala・Ruby・Go・TypeScriptなど多様な技術が共存し、技術選定に主体的に関わりたいエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">少数精鋭・高い一人あたり生産性</h3>
              <p className="text-sm text-petrol-deep">エムスリーは高い収益性で知られ、エンジニア組織も少数精鋭で一人あたりの裁量・責任が大きいのが特徴です。新規プロダクトの立ち上げから運用まで幅広く担う機会があり、自走できるエンジニアが力を発揮しやすい環境とされています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">医療×ITの社会的意義と事業の幅広さ</h3>
              <p className="text-sm text-petrol-deep">医療従事者向けプラットフォームを中核に、製薬マーケティング・電子カルテ・治験・医療キャリアなど多数の事業を展開しています。医療というドメインの社会的意義と、複数事業・新規領域に関われる幅広さの両方を求めるエンジニアに向いています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はエムスリーエンジニア採用サイト・公式技術ブログなどの公開情報に基づく技術スタックです。チームが裁量をもって選定するため、プロダクト・チームによって採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Kotlin / Scala / Ruby / Go / Java（Spring Boot・Play・Rails 等）"],
                  ["フロントエンド", "TypeScript（React / Vue.js）"],
                  ["技術選定", "各チームが裁量をもって技術を決定する「ベスト・オブ・ブリード」型"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: エムスリーエンジニア採用サイト（jobs.m3.com/engineer）・公式技術ブログ等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            エムスリーは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
            職種・等級別の公式な年収表は公開されていないため、ここでは有報の推移のみを掲載します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">決算期</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（全社員平均）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年齢</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([y, s, age], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{y}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{s}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: エムスリー株式会社 有価証券報告書（各期）。平均年齢が34.8歳（2026年3月期）と若めの組織でこの水準は高めです。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、エムスリーの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            エムスリー公式エンジニア採用サイトに基づく標準的な流れです。最新の内容は<a href="https://jobs.m3.com/engineer/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式エンジニア採用サイト</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考前にエンジニアや採用担当と話し、仕事内容や技術文化を知れる機会。"],
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・技術スタックが確認される。"],
              ["面接（複数回）", "現場エンジニア・マネージャー等との面接。技術的な議論や設計・実装に関する質問が中心。"],
              ["技術課題／コーディング", "ポジションによっては実装課題やコーディング課題で実力を確認する場合がある。"],
              ["内定（オファー）", "条件・制度の説明。配属やミッションのすり合わせが行われる。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典: エムスリーエンジニア採用サイトの要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用サイト・技術ブログなどの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Kotlin・Scala・Ruby・Go等いずれかのバックエンド、TypeScript等のフロントの実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術選定・設計の背景を自分の言葉で説明できること（裁量の大きい文化との相性）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロダクトを主体的に改善・推進した経験、自走力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>医療・ヘルスケアドメインや社会的意義のある事業への関心</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策ガイド</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト攻略</Link>を参考にしてください。
          </p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            OpenWork等の口コミプラットフォームに投稿された傾向を、出典を挙げて要約します（原文転載はしていません）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2 text-sm">ポジティブな傾向</h3>
              <ul className="space-y-1.5 text-sm text-green-900">
                <li>裁量が大きく、若手でも事業・プロダクトに深く関われるという声（OpenWork）</li>
                <li>高い収益性を背景に、年収水準が高めという評価（OpenWork）</li>
                <li>成長機会が多く、技術選定に主体的に関われる文化への評価（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>少数精鋭ゆえに一人あたりの責任・業務範囲が広く、自走が求められる</li>
                <li>事業スピードが速く、変化への適応が前提となる</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（エムスリー 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たエムスリー</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              エムスリーは上場済みで高い収益基盤を持ちつつ、新規事業を継続的に立ち上げるフェーズにあります。30代・40代のミドルエンジニアにとっては、「安定した収益基盤の上で、新規プロダクトや技術選定に主体的に関わりたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が34.8歳（2026年3月期）と若めのため、40代は相対的にシニア寄りの立ち位置になります。設計・技術選定をリードした経験、複数プロダクトを横断した経験、チームを牽引した経験などは、年齢に見合った価値として評価されやすいでしょう。逆に「指示された範囲だけ実装する」スタンスだと、裁量の大きい文化とは合いにくい面があります。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、エムスリーの全社員平均975万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エムスリー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。テック企業の非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、Web系企業への転職実績が豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高いテック企業・専門職の求人に対応。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">各社の特徴は<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリアの評判</Link>などの個別レビューも参考にしてください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">エムスリーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">高年収のテック企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ラクス の転職ガイド", href: "/company/rakus/" },
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
              { name: "技術面接の対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "30代エンジニアの転職", href: "/age/30s/" },
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
