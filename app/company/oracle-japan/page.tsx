import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/oracle-japan/" },
  title: "日本オラクルの年収は平均1,259万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "日本オラクル（4716）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年間給与1,259万円(2025年5月期 有報・全社員平均)、Oracle Database/OCIを軸とするクラウド企業の技術領域、選考フロー、30代40代の戦い方まで。",
};

const salaryTrend: [string, string, string][] = [
  ["2021年5月期", "1,073万円", "43.6歳"],
  ["2022年5月期", "1,121万円", "43.4歳"],
  ["2023年5月期", "1,126万円", "44.3歳"],
  ["2024年5月期", "1,160万円", "44.2歳"],
  ["2025年5月期", "1,259万円", "44.1歳"],
];

const basicData: [string, string][] = [
  ["企業名", "日本オラクル株式会社（証券コード4716・東証スタンダード）"],
  ["事業領域", "Oracle Databaseをはじめとするデータベース、クラウド（OCI/SaaS/PaaS/IaaS）、ERP/HCM等のクラウドアプリケーション、コンサルティング・サポート"],
  ["平均年間給与", "1,259万円（2025年5月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "44.1歳（2025年5月期 有価証券報告書）"],
  ["従業員数", "約2,300名（単体・2025年5月期 有価証券報告書）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公開情報）", "Oracle Database / Oracle Cloud Infrastructure(OCI) / SaaS・PaaS・IaaS、ERP/HCM等のクラウド製品（職種・部門により異なる）"],
  ["採用ページ", "oracle.com/jp/careers（採用情報）"],
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
  { id: "middle", label: "30代・40代から見た日本オラクル" },
  { id: "agents", label: "日本オラクル転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "日本オラクルのエンジニア転職の難易度は高い？",
    a: "外資系大手クラウド企業として専門性が重視され、Oracle Databaseやクラウド（OCI等）、特定領域の導入・運用の実務経験が前提になります。エンジニア・コンサルタント・セールスといった職種があり、データベースやクラウドの専門性、自律的に学び続ける姿勢があれば30代・40代でも挑戦できます。難易度は中〜やや高で、英語を使う場面もあります。",
  },
  {
    q: "日本オラクルのエンジニアの平均年収はいくら？",
    a: "日本オラクル株式会社の有価証券報告書（2025年5月期）に記載された全社員の平均年間給与は1,259万円、平均年齢は44.1歳です（エンジニア職に限った数値ではなく全社員平均）。外資系クラウド企業として国内トップクラスの水準で、近年は1,000万円超で推移し直近期に大きく上昇しました。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごとに決定されます。",
  },
  {
    q: "日本オラクルの技術スタックは？",
    a: "公式情報によると、Oracle Databaseを核に、Oracle Cloud Infrastructure(OCI)、SaaS・PaaS・IaaS、ERP/HCMなどのクラウドアプリケーションが中心です。エンジニアは設計・構築・運用やクラウド導入のコンサルティングまで幅広く担います。職種・部門により扱う製品・技術は異なります。",
  },
  {
    q: "日本オラクルの選考フローは？",
    a: "公式採用情報によると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。職務経歴・専門領域が確認され、ポジションによっては技術的な質問や英語でのやり取りが含まれることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "日本オラクルはどんな事業をしている会社ですか？",
    a: "日本オラクルは、米Oracle Corporationの日本法人で、Oracle Databaseをはじめとするデータベース、クラウド（OCI/SaaS/PaaS/IaaS）、ERP/HCM等のクラウドアプリケーション、コンサルティング・サポートを提供する東証スタンダード上場企業（証券コード4716）です。近年はクラウド事業を成長の軸としています。",
  },
  {
    q: "日本オラクルはリモートワークできる？",
    a: "日本オラクルはリモートワークを併用できる体制を採っています。OpenWork等の口コミでは、高い年収水準やグローバルな環境、専門性を評価する声が見られる一方、外資系ゆえの成果主義や英語を使う場面を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "日本オラクルへの転職で有利な経験は？",
    a: "Oracle Databaseやクラウド（OCI等）の設計・構築・運用の経験、クラウド導入・移行（オンプレからクラウドまで）の経験が基本です。ERP/HCM等の業務知識、コンサルティング経験、英語でのコミュニケーション力、自律的に学び続ける姿勢があると評価されやすい傾向です。",
  },
];

export default function OracleJapanCompanyPage() {
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
        title="日本オラクル エンジニア転職ガイド"
        description="日本オラクルへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収1,259万円(2025年5月期)、Oracle Database/OCIの技術領域、選考フロー、口コミ傾向まで。"
        url="/company/oracle-japan/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "日本オラクル" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">日本オラクル エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ データベース×クラウドの外資系大手</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】日本オラクルの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 日本オラクル株式会社の平均年間給与は1,259万円です（2025年5月期 有価証券報告書・全社員平均、平均年齢44.1歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 1,259万円（2025年5月期 有報・全社員平均）。営業・コンサル等も含む全社員平均で、エンジニアに限った値ではありません。</li><li>・推移は2021年5月期1,073万円→2023年5月期1,126万円→2024年5月期1,160万円→2025年5月期1,259万円と直近期に大きく上昇（各期 有報）。</li><li>・職種・等級別の正式な年収表は非公表。外資系のため提示額は求人ごとに個別決定され、求人・面談での確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          日本オラクル株式会社（証券コード4716・東証スタンダード）は、米Oracle Corporationの日本法人として、Oracle Databaseを核に、クラウド（OCI/SaaS/PaaS/IaaS）、ERP/HCM等のクラウドアプリケーション、コンサルティング・サポートを提供する外資系大手です。
          このページでは、有価証券報告書・公式採用情報といった一次情報をもとに、日本オラクルへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "日本オラクル株式会社 有価証券報告書（2025年5月期）",
            "日本オラクル 採用情報（oracle.com/jp/careers）",
            "Oracle公式サイト（事業・クラウド製品）",
            "OpenWork（日本オラクル 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：データベース・クラウドの専門性があり、外資系の成果主義で高年収を狙いたいエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Oracle Databaseやクラウド（OCI等）の設計・構築・運用、クラウド導入の経験が直接活きる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は1,259万円（2025年5月期 有報）。外資系クラウド企業として国内トップクラスの水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>クラウド事業を成長の軸とするグローバル企業で、専門性を深めつつ高年収を狙いたい人に向く。</li>
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
            出典: 日本オラクル株式会社 有価証券報告書（2025年5月期）／Oracle公式採用情報。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データベース×クラウドの専門性</h3>
              <p className="text-sm text-petrol-deep">日本オラクルはOracle Databaseを核に、OCIをはじめとするクラウド（SaaS/PaaS/IaaS）を展開しています。データベースやクラウドの設計・構築・運用、導入コンサルティングなど、専門性の高い領域に深く関われる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">職種の幅と外資系の成果主義</h3>
              <p className="text-sm text-petrol-deep">職種は大きく「エンジニア」「コンサルタント」「セールス」に分かれ、エンジニアはOracle DBの活用・導入・運用やクラウド導入の設計・構築・改善提案までを担います。外資系企業として成果主義の評価制度があり、専門性と成果に応じた高めの待遇が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウド事業の成長と継続学習</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、近年はクラウド事業（OCI）を成長の軸としており、オンプレからクラウドまで幅広い案件があります。変化の激しいIT領域で自ら学び続ける自律的な姿勢が、採用でも重視されるとされています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はOracle公式採用情報・公式サイトなどの公開情報に基づく技術領域です。職種・部門により扱う製品・技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["データベース", "Oracle Database（設計・構築・運用・チューニング）"],
                  ["クラウド基盤", "Oracle Cloud Infrastructure(OCI) / SaaS / PaaS / IaaS"],
                  ["アプリ・領域", "ERP / HCM 等のクラウドアプリケーション、クラウド導入コンサルティング"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: Oracle公式採用情報・公式サイト等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            日本オラクルは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 日本オラクル株式会社 有価証券報告書（各期）。2025年5月期は前年比で大きく上昇し1,259万円となりました。営業・コンサル等も含む全社平均です。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、日本オラクルの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            日本オラクル公式採用情報に基づく標準的な流れです。最新の内容は<a href="https://www.oracle.com/jp/careers/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・専門領域が確認される。"],
              ["面接（複数回）", "現場・マネージャー等との面接。技術的な質問や専門領域の議論が行われる。"],
              ["技術・英語確認（ポジションによる）", "ポジションによっては技術的な確認や英語でのやり取りが含まれることがある。"],
              ["内定（オファー）", "条件・配属の説明。ミッションのすり合わせが行われる。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: 日本オラクル公式採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Oracle Database・クラウド（OCI等）の設計・構築・運用の実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド導入・移行（オンプレからクラウドまで）の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ERP/HCM等の業務知識、コンサルティング・改善提案の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>自律的に学び続ける姿勢、英語でのコミュニケーション力</li>
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
                <li>外資系として高い年収水準を評価する声（OpenWork）</li>
                <li>データベース・クラウドの専門性を深められる環境への評価（OpenWork）</li>
                <li>グローバルな環境や柔軟な働き方を挙げる声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>外資系ゆえの成果主義・目標達成へのプレッシャーを挙げる声</li>
                <li>英語を使う場面があり、グローバル連携の負荷がある</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（日本オラクル 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た日本オラクル</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              日本オラクルは上場済みのグローバルなクラウド企業で、クラウド事業（OCI）を成長の軸とするフェーズにあります。30代・40代のミドルエンジニアにとっては、「データベース・クラウドの専門性を活かし、外資系の成果主義で高年収を狙いたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が44.1歳（2025年5月期）と高めで、ミドル・シニア層が中心の組織構成です。Oracle Databaseやクラウドの設計・構築・運用の経験、クラウド導入・移行の経験、ERP/HCM等の業務知識やコンサルティング経験は、年齢に見合った価値として評価されやすいでしょう。外資系のため、技術力に加えて成果へのコミットや英語力も武器になります。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、日本オラクルの全社員平均1,259万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本オラクル転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。外資・クラウドの非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "外資・ハイクラスに強く、年収帯の高いクラウド・専門職の求人に対応。英文レジュメ対策も。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、IT企業への転職実績が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">日本オラクルへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">高年収の外資系クラウド企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "Microsoft Japan の転職ガイド", href: "/company/microsoft/" },
              { name: "AWSジャパン の転職ガイド", href: "/company/aws-japan/" },
              { name: "CTC（伊藤忠テクノソリューションズ） の転職ガイド", href: "/company/ctc/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
              { name: "技術面接の対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
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
