import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/medpeer/" },
  title: "メドピアの年収は平均618万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "メドピア株式会社（6095）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収618万円(2024年9月期・単体全社員平均)、Ruby on Rails/TypeScript中心の技術スタック、選考フロー・面接観点、30代40代の戦い方まで。確認できない数値は記載していません。",
};

const salaryTrend: [string, string, string][] = [
  ["2020年9月期", "617万円", "—"],
  ["2021年9月期", "614万円", "—"],
  ["2022年9月期", "589万円", "—"],
  ["2023年9月期", "615万円", "—"],
  ["2024年9月期", "618万円", "35.8歳"],
];

const basicData: [string, string][] = [
  ["企業名", "メドピア株式会社（証券コード6095・東証プライム）"],
  ["事業領域", "医師向けプラットフォーム「MedPeer」、ヘルスケアソリューション、医療機関支援、予防医療・健康支援など医療×ITの各種サービス"],
  ["平均年間給与", "618万円（2024年9月期 有価証券報告書・メドピア単体／全社員平均）"],
  ["平均年齢", "35.8歳（2024年9月期 有価証券報告書・単体）"],
  ["平均勤続年数", "約3.7年（2024年9月期 有価証券報告書・単体）"],
  ["従業員数", "メドピア単体 約195名（2024年9月期 有価証券報告書）"],
  ["本社所在地", "東京都中央区"],
  ["技術スタック（公開情報）", "Ruby / Ruby on Rails / TypeScript（React / Vue 等）、AWS ほか（プロダクト・チームにより異なる）"],
  ["採用ページ", "medpeer.co.jp（採用・エンジニア採用）"],
];

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんなエンジニア向きか" },
  { id: "basic", label: "基本データ（企業概要・出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（有報）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代から見たメドピア" },
  { id: "agents", label: "メドピア転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "メドピアのエンジニア転職の難易度は高い？",
    a: "医療×ITのプラットフォーム企業として人気があり、Webアプリケーション開発の実務経験が前提になります。少数精鋭の組織で一人あたりの裁量が大きく、Ruby on Rails等のバックエンドやTypeScript等のフロント経験、医療・ヘルスケアドメインへの関心があると評価されやすい傾向です。プロダクト志向の30代・40代にとっては挑戦しやすい選択肢です。",
  },
  {
    q: "メドピアのエンジニアの平均年収はいくら？",
    a: "メドピア株式会社の有価証券報告書（2024年9月期・単体）に記載された全社員の平均年間給与は618万円、平均年齢は35.8歳です（エンジニア職に限った数値ではなく全社員平均）。近年は600万円前後で推移しています。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "メドピアの技術スタックは？",
    a: "メドピアのエンジニア採用情報・技術発信などの公開情報によると、バックエンドはRuby / Ruby on Rails、フロントエンドはTypeScript（React・Vue等）、インフラはAWSなどが中心とされています。プロダクト・チームにより採用技術は異なります。具体的な構成は求人票や技術ブログでご確認ください。",
  },
  {
    q: "メドピアの選考フローは？",
    a: "メドピア公式採用情報によると、カジュアル面談（任意）→ 書類選考 → 複数回の面接（技術面接を含む場合あり）→ 内定が基本的な流れです。エンジニア職では技術的な議論や実装に関する質問で実力を確認する選考が行われることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "メドピアはどんな事業をしている会社ですか？",
    a: "メドピアは、医師向けプラットフォーム「MedPeer」を中核に、ヘルスケアソリューション、医療機関支援、予防医療・健康支援など医療×ITの各種サービスを展開する東証プライム上場企業（証券コード6095）です。「Supporting Doctors, Helping Patients.（医師を支援し、患者を救う）」をミッションに掲げ、医療領域のDXを推進しています。",
  },
  {
    q: "メドピアはリモートワークできる？",
    a: "メドピアはリモートワークを併用できる体制を採っているとされます。OpenWork等の口コミでは、医療ドメインの社会的意義や裁量の大きさを評価する声がある一方、少数精鋭ゆえの責任の大きさやスピード感を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "メドピアへの転職で有利な経験は？",
    a: "Ruby on Rails等のバックエンド実務経験、TypeScript等でのフロント開発経験が基本です。プロダクトを主体的に改善した経験、AWS等のインフラ知見、医療・ヘルスケアドメインへの関心があると評価されやすい傾向です。少数精鋭の組織のため、自走力も重視されます。",
  },
];

export default function MedPeerCompanyPage() {
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
        title="メドピア エンジニア転職ガイド"
        description="メドピアへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収618万円(2024年9月期・単体)、Ruby on Rails/TypeScript中心の技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/medpeer/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "TypeScriptの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "メドピア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">メドピア エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 医師向けプラットフォームを核に医療DXを進めるヘルステック企業</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          メドピア株式会社（証券コード6095・東証プライム）は、医師向けプラットフォーム「MedPeer」を中核に、ヘルスケアソリューション・医療機関支援・予防医療などを展開する医療×ITのヘルステック企業です。
          このページでは、有価証券報告書・公式採用ページ・技術発信といった一次情報をもとに、メドピアへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "メドピア株式会社 有価証券報告書（2024年9月期・単体）",
            "メドピア採用・エンジニア採用情報（medpeer.co.jp）",
            "IRBANK（メドピア 平均年収推移・6095）",
            "OpenWork（メドピア 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：Ruby on Rails等のWeb開発経験があり、医療ドメインの社会的意義を重視するプロダクト志向のエンジニア向き。難易度は中。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Ruby on Rails・TypeScript中心のモダンなWeb開発経験が活きる。少数精鋭で裁量が大きい。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は618万円（2024年9月期 有報・単体）。ヘルステックSaaSとして堅実な水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>医師向けプラットフォームを軸に医療DXを推進。社会的意義のある事業に関わりたいミドルに向く。</li>
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
            出典: メドピア株式会社 有価証券報告書（2024年9月期・単体）／メドピア採用情報／IRBANK（6095）。平均年間給与はメドピア単体の全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">医療×ITの社会的意義のある事業</h3>
              <p className="text-sm text-petrol-deep">医師向けプラットフォーム「MedPeer」を中核に、医療機関支援・予防医療・健康支援など医療DXの多様な事業を展開しています。医療というドメインの社会的意義と、プロダクト開発の両方にやりがいを求めるエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">少数精鋭・裁量の大きい開発組織</h3>
              <p className="text-sm text-petrol-deep">メドピア単体は少数精鋭の組織で（2024年9月期 有報で単体約195名）、一人あたりの裁量・責任が大きいのが特徴です。プロダクトの企画から開発・改善まで主体的に関わりたい、自走できるエンジニアが力を発揮しやすい環境とされています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Ruby on Rails中心のモダンなWeb開発</h3>
              <p className="text-sm text-petrol-deep">Ruby on Rails・TypeScriptを中心としたモダンなWeb開発が行われており、技術発信も見られます。Web系のスキルを医療ドメインで活かしたいエンジニアにとって、技術と社会的意義を両立しやすい選択肢です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はメドピアのエンジニア採用情報・技術発信などの公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Ruby / Ruby on Rails ほか"],
                  ["フロントエンド", "TypeScript（React / Vue 等）"],
                  ["インフラ", "AWS ほか（プロダクト・チームにより異なる）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: メドピア エンジニア採用情報・技術発信等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            メドピアは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これはメドピア単体の全社員平均であり、エンジニア職に限った数値ではありません。</strong>
            職種・等級別の公式な年収表は公開されていないため、ここでは有報の推移のみを掲載します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">決算期</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（単体・全社員平均）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: メドピア株式会社 有価証券報告書（各期・単体）／IRBANK（6095）。最新は2024年9月期（メドピアは9月決算）。近年は600万円前後で推移しています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、メドピアの単体平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            メドピア公式採用情報に基づく標準的な流れです。最新の内容は<a href="https://medpeer.co.jp/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式サイト・採用情報</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考前にエンジニアや採用担当と話し、事業・技術文化を知れる機会。"],
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・技術スタックが確認される。"],
              ["面接（複数回）", "現場エンジニア・マネージャー等との面接。技術的な議論や設計・実装に関する質問が中心。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: メドピア公式採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報・技術発信などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Ruby on Rails等のバックエンド、TypeScript等のフロントの実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロダクトを主体的に改善・推進した経験、自走力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>AWS等のインフラ知見、設計を自分の言葉で説明できること</li>
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
                <li>医療ドメインの社会的意義・ミッションへの共感を評価する声（OpenWork）</li>
                <li>裁量が大きく、プロダクトに深く関われるという声（OpenWork）</li>
                <li>モダンな技術に取り組める環境への評価（OpenWork）</li>
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
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（メドピア 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たメドピア</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              メドピアは平均年齢35.8歳（2024年9月期・単体）の組織で、医師向けプラットフォームを軸に医療DXを推進するフェーズにあります。30代・40代のミドルエンジニアにとっては、「Web開発のスキルを、社会的意義のある医療ドメインで活かしたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              Ruby on Rails等でのWeb開発経験、プロダクトを主体的に改善・推進した経験、AWS等のインフラ知見は、年齢に見合った価値として評価されやすいでしょう。少数精鋭の組織のため、設計やプロダクトをリードした経験を持つミドルは特に力を発揮しやすい一方、「指示された範囲だけ実装する」スタンスだと裁量の大きい文化とは合いにくい面があります。
            </p>
            <p>
              年収面では、メドピアの単体平均618万円（有報）はヘルステックSaaSとして堅実な水準です。提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メドピア転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。SaaS・ヘルステックの求人にも対応。書類添削・面接対策に定評。" },
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
          <h2 className="text-xl font-bold mb-3">メドピアへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・ヘルステック企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "エムスリー の転職ガイド", href: "/company/m3/" },
              { name: "Ubie（ユビー） の転職ガイド", href: "/company/ubie/" },
              { name: "カケハシ の転職ガイド", href: "/company/kakehashi/" },
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
