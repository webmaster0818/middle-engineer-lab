import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Sansanの年収は平均780万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "Sansan（4443）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収780万円(2025年5月期)、Bill Oneの技術スタック、選考フロー、口コミ傾向、30代40代視点まで。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんなエンジニア向きか" },
  { id: "basic", label: "基本データ（企業概要・出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（有報）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代から見たSansan" },
  { id: "agents", label: "Sansan転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "Sansan株式会社（証券コード4443・東証プライム）"],
  ["事業領域", "法人向け「Sansan」、請求書受領「Bill One」、契約データベース「Contract One」、個人向け名刺アプリ「Eight」等のBtoB SaaS"],
  ["ミッション", "「出会いからイノベーションを生み出す」"],
  ["平均年間給与", "780万円（2025年5月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "31.7歳（2025年5月期 有価証券報告書）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック", "Ruby on Rails / Kotlin / TypeScript / React ほか（Sansan Tech Blog）"],
  ["採用ページ", "jp.corp-sansan.com/recruit/midcareer ／ 技術本部 media.sansan-engineering.com"],
];

const salaryTrend: [string, string, string][] = [
  ["2021年5月期", "621万円", "32.3歳"],
  ["2022年5月期", "640万円", "32.2歳"],
  ["2023年5月期", "700万円", "32.3歳"],
  ["2024年5月期", "750万円", "32.1歳"],
  ["2025年5月期", "780万円", "31.7歳"],
];

const faqs = [
  {
    q: "Sansanのエンジニア転職の難易度は高い？",
    a: "名刺管理で高い市場シェアを持つBtoB SaaSの代表的企業として人気が高く、Webアプリケーション開発の実務経験は前提です。一方でBill Oneなど複数プロダクトで通年採用しており、Ruby on RailsやKotlinでの開発経験があれば30代・40代でも挑戦できます。転職メディアの難易度評価では「中程度（難易度B）」とされることが多いです。",
  },
  {
    q: "Sansanのエンジニアの平均年収はいくら？",
    a: "Sansan株式会社の有価証券報告書（2025年5月期）に記載された全社員の平均年間給与は780万円、平均年齢31.7歳です（エンジニア職に限った数値ではなく全社員平均）。直近5年で621万円→780万円へ大きく上昇しています。職種・等級別の正式な年収表は公開されていません。",
  },
  {
    q: "Sansanの技術スタックは？",
    a: "Sansan Tech Blogや公開資料によると、プロダクトにより異なります。例えばBill One開発ではバックエンドにKotlin/Ktor、フロントエンドにTypeScript/React、インフラにGCP（Cloud Run等）、DBにPostgreSQL（Cloud SQL）を採用。主力の「Sansan」はRuby on Railsが中心です。名刺のデジタル化ではOCR・画像処理・機械学習も活用されています。",
  },
  {
    q: "Sansanの選考フローは？",
    a: "公式採用ページ（中途採用）によると、エンジニア職は書類選考 → 技術試験（ポジションにより実施）→ 面接3回程度 → 内定を想定しています。面接は基本1時間でオンライン/来社を選択でき、選考期間は平均1ヶ月程度です。カジュアル面談も随時実施しています。",
  },
  {
    q: "Sansanの事業領域は？",
    a: "法人向け名刺管理「Sansan」、請求書受領「Bill One」、契約データベース「Contract One」、個人向け名刺アプリ「Eight」などを展開しています。複数プロダクトを抱えるため、社内異動でキャリアの幅を広げやすいのが特徴です。",
  },
  {
    q: "Sansanの開発文化は？",
    a: "「出会いからイノベーションを生み出す」をミッションに、ビジネスインフラの構築に取り組んでいます。技術勉強会やTech Blog（buildersbox）での発信が活発で、フラットな組織文化だという社員の声が見られます。",
  },
  {
    q: "Sansanへの転職で有利な経験は？",
    a: "Ruby on Rails / Kotlin / Goいずれかの実務経験、BtoB SaaSプロダクトの開発・運用経験が基本です。ML系ポジションでは画像処理・OCR・機械学習の知識、フロントエンドではReact/TypeScriptの経験が評価されやすい傾向です。",
  },
  {
    q: "Sansanは体育会系の文化と聞きましたが？",
    a: "OpenWorkのクチコミでは、営業組織は数字志向で体育会系的な雰囲気があるという声がある一方、エンジニア組織はフラットでメンバーの提案も取り込まれやすいという評価が見られます。組織・職種によって雰囲気は異なるため、カジュアル面談で実態を確認するとよいでしょう。",
  },
];

export default function SansanCompanyPage() {
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
        title="Sansan エンジニア転職ガイド"
        description="Sansanへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収780万円(2025年5月期)、技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/sansan/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Sansan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Sansan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ ビジネスインフラSaaSのリーディングカンパニー</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Sansan株式会社（証券コード4443・東証プライム）は、法人向け名刺管理「Sansan」や請求書受領「Bill One」などを展開するBtoB SaaSの代表的企業です。
          このページでは、有価証券報告書・公式採用ページ・公式技術ブログといった一次情報をもとに、Sansanへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Sansan株式会社 有価証券報告書（2025年5月期）",
            "Sansan 採用情報（jp.corp-sansan.com）",
            "Sansan 技術本部 採用情報・Sansan Tech Blog",
            "OpenWork（Sansan 社員クチコミ）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんなエンジニア向きか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">結論：Rails/Kotlinの実務経験があり、複数プロダクトで技術の幅を広げたいエンジニア向き。難易度は中程度。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>「Sansan」「Bill One」など複数プロダクトで異なる技術課題に取り組め、社内異動でキャリアの幅を広げやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は780万円（2025年5月期 有報）で、直近5年で大きく上昇。SaaS業界では上位の水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>OCR・画像処理・機械学習を扱う領域もあり、ML/データ系のバックグラウンドを持つミドルにも選択肢が広い。</li>
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
            出典: Sansan株式会社 有価証券報告書（2025年5月期）／Sansan 採用情報・Sansan Tech Blog（公式）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マルチプロダクト戦略による技術的多様性</h3>
              <p className="text-sm text-blue-700">「Sansan」「Bill One」「Contract One」「Eight」と複数プロダクトを展開。各プロダクトで異なる技術課題（言語・基盤も異なる）に取り組め、社内異動によってキャリアの幅を広げられます。急成長中のBill Oneなど、新規プロダクトの立ち上げ・拡大フェーズに関わるチャンスもあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OCR・画像処理・機械学習の活用</h3>
              <p className="text-sm text-blue-700">名刺や請求書のデジタル化でOCR・画像処理・機械学習を活用しており、大量のビジネスデータを高精度に処理する技術的チャレンジがあります。研究開発（R&D）部門ではAI技術の研究も行われ、ML/データ系のバックグラウンドを活かせるポジションもあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">アウトプットと技術研鑽を支援する文化</h3>
              <p className="text-sm text-blue-700">Sansan Tech Blog（buildersbox）での技術発信や勉強会が活発で、OSS貢献・カンファレンス登壇の支援も行われています。フラットな組織で、メンバーレベルの提案を組織として取り込んでいくという社員の声も見られます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はSansan Tech Blog・公開資料に基づく技術スタックです。<strong>プロダクトによって採用技術が大きく異なる</strong>のが特徴で、下記はその一例です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["主力「Sansan」", "Ruby on Rails が中心"],
                  ["「Bill One」バックエンド", "Kotlin / Ktor"],
                  ["「Bill One」フロントエンド", "TypeScript / React"],
                  ["「Bill One」インフラ・DB", "GCP（Cloud Run / Cloud Functions / Cloud Tasks）、PostgreSQL（Cloud SQL）"],
                  ["データ／AI領域", "OCR・画像処理・機械学習（R&D部門）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: Sansan Tech Blog（buildersbox.corp-sansan.com）・Bill One 開発エンジニア紹介資料等の公開情報。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Sansanは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: Sansan株式会社 有価証券報告書（各期）。直近5年で621万円→780万円へ上昇。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、Sansanの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ（中途採用 よくある質問）に基づく標準的な流れです。ポジションにより内容は変わります。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "Sansanで働くことに興味がある人向けに随時実施。活躍する人物像や働き方を確認できる。"],
              ["書類選考", "職務経歴を提出。"],
              ["技術試験（ポジションにより実施）", "エンジニア職・クリエイター職はポジションによって技術試験を実施。"],
              ["面接（3回程度）", "基本1時間。オンライン/来社を希望に合わせて調整可。アーキテクチャ設計やコードレビューの議論、カルチャーフィットの確認が行われる。"],
              ["内定", "選考期間は平均1ヶ月程度（希望により調整可）。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典: Sansan 採用情報「中途採用 よくある質問」（jp.corp-sansan.com/recruit/midcareer/faq）。具体的な内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・技術本部採用情報などの公開情報から読み取れる傾向です。質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アーキテクチャ設計・コードレビューに関する議論への対応力。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>「出会いからイノベーションを生み出す」というミッションへの共感・カルチャーフィット。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Rails/Kotlin等での設計・実装力と、技術選定の意図を説明できるか。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ML系ポジションでは画像処理・OCR・機械学習の知識と実装経験。</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策ガイド</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト攻略</Link>を参考にしてください。
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
                <li>エンジニアが優秀で、プロダクトの進化・アップデートが速いという評価（OpenWork）</li>
                <li>フラットな組織で、メンバーの提案も組織として取り込まれるという声（OpenWork）</li>
                <li>名刺管理で高い市場シェアを持ち、事業基盤が安定しているという評価（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>営業組織は数字志向で体育会系的な雰囲気があり、合う・合わないが分かれるという声（OpenWork）</li>
                <li>独特の価値観・組織文化への適合が重要という指摘（OpenWork）</li>
                <li>口コミは個人の主観であり、部署・職種・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（Sansan 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たSansan</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Sansanは東証プライム上場のBtoB SaaSで、全社員平均年収は780万円（2025年5月期 有報）と直近5年で大きく上昇しています。30代・40代にとっては、上場企業の安定感と、複数プロダクトを横断して技術の幅を広げられる環境を両立できるのが魅力です。Bill OneのようにKotlin/GCPでゼロから設計されたプロダクトもあり、モダンな技術での挑戦も可能です。
            </p>
            <p>
              平均年齢31.7歳と若い組織のため、40代はシニア寄りの立ち位置になります。アーキテクチャ設計やコードレビューの議論が選考で重視されることからも、設計力・レビュー力・チームをリードした経験を持つミドルが評価されやすいでしょう。OCR・画像処理・機械学習を扱う領域もあるため、データ/ML系のバックグラウンドを持つ30代・40代にも選択肢が広いのが特徴です。
            </p>
            <p>
              一方で、営業文化の強さや独特のカルチャーへの適合が課題になる場合もあるため、カジュアル面談で現場の雰囲気を確かめることをおすすめします。年収の妥当性を見極めるには、<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>と<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>を押さえておくとよいでしょう。
            </p>
            <p>
              年代別の動向は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>、職務経歴書の書き方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の作り方</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Sansan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。BtoB SaaS企業の求人に強く、書類添削・面接対策に定評。" },
              { name: "Green", href: "/review/green/", desc: "成功報酬型の転職サイト。IT/Webベンチャーに強く、カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、BtoB SaaS企業への転職実績が豊富。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">各社の特徴は<Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリアの評判</Link>などの個別レビューも参考にしてください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Sansanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">BtoB SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
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
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "SmartHR の転職ガイド", href: "/company/smarthr/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
              { name: "技術面接の対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
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
