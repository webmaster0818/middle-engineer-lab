import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ラクスの年収は平均664万円【2026年・有報】エンジニア転職・技術スタック解説",
  description:
    "ラクス（3923／楽楽精算・メールディーラー等）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収664万円(2026年3月期・全社員平均)、Java/PHP中心の技術スタック、選考フロー、口コミ傾向、30代40代の戦い方まで。ラクスル(4384)とは別会社です。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "619万円", "32.6歳"],
  ["2023年3月期", "643万円", "32.3歳"],
  ["2024年3月期", "641万円", "32.3歳"],
  ["2025年3月期", "648万円", "32.5歳"],
  ["2026年3月期", "664万円", "32.7歳"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ラクス（証券コード3923・東証プライム）"],
  ["事業領域", "クラウド事業（経費精算「楽楽精算」、電子請求書「楽楽明細」、「メールディーラー」等の自社SaaS）、IT人材事業"],
  ["平均年間給与", "664万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "32.7歳（2026年3月期 有価証券報告書）"],
  ["平均勤続年数", "約3.2年（2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック（公開情報）", "Java / PHP を主軸に Go・Python も、Spring Boot / Laravel、Vue.js / React / TypeScript（チームごとに選定）"],
  ["採用ページ", "career-recruit.rakus.co.jp（キャリア採用）"],
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
  { id: "middle", label: "30代・40代から見たラクス" },
  { id: "agents", label: "ラクス転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "ラクスのエンジニア転職の難易度は高い？",
    a: "「楽楽精算」などのSaaSで安定成長する人気企業ですが、Webアプリケーション開発の実務経験があれば挑戦しやすい部類です。Java・PHPいずれかの開発経験が基本で、複数プロダクトを継続的に成長させる開発のため通年で募集があります。学習意欲やチーム開発の姿勢が見られる傾向で、30代・40代でも実務経験があれば十分に挑戦できます。",
  },
  {
    q: "ラクスのエンジニアの平均年収はいくら？",
    a: "株式会社ラクスの有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は664万円、平均年齢32.7歳です（エンジニア職に限った数値ではなく全社員平均）。平均年齢が若めの組織でこの水準で、近年は緩やかな上昇傾向です。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "ラクスの技術スタックは？",
    a: "ラクス公式の採用ページ・技術ブログ（RAKUS Developers Blog）などの公開情報によると、主軸はJavaとPHPで、一部Go・Pythonも利用します。フレームワークはSpring Boot・Laravel等、フロントエンドはVue.js・React・TypeScript等が用いられます。チームごとに主体的に技術を選定する「ベスト・オブ・ブリード」型の開発が特徴とされています。プロダクト・チームにより採用技術は異なります。",
  },
  {
    q: "ラクスの選考フローは？",
    a: "公式キャリア採用ページによると、カジュアル面談（任意）→ 書類選考 → 複数回の面接（技術・適性の確認を含む）→ 内定が基本的な流れです。エンジニア職では技術的な経験やチーム開発の進め方が確認されることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "ラクスとラクスル（RAKSUL）は同じ会社ですか？",
    a: "いいえ、別会社です。このページで解説するラクス（RAKUS・証券コード3923）は「楽楽精算」などのSaaSを展開するクラウド企業です。一方ラクスル（RAKSUL・証券コード4384）は印刷・物流などの産業をデジタル化するプラットフォーム企業で、別の上場企業です。名前が似ているため混同に注意してください。",
  },
  {
    q: "ラクスはどんな事業をしている会社ですか？",
    a: "ラクスは経費精算「楽楽精算」、電子請求書発行「楽楽明細」、メール共有「メールディーラー」などの自社SaaSを展開するクラウド事業と、IT人材事業を手がける東証プライム上場企業（証券コード3923）です。バックオフィス業務の効率化に強みを持ち、安定した収益基盤の上で複数プロダクトを継続的に成長させています。",
  },
  {
    q: "ラクスへの転職で有利な経験は？",
    a: "Java・PHPいずれかでのWebアプリケーション開発の実務経験が基本です。SaaS・自社プロダクトの開発・運用経験、チーム開発でのコミュニケーション、継続的に学習・改善する姿勢があると評価されやすい傾向です。バックオフィス業務のドメイン知識があると加点される場合もあります。",
  },
];

export default function RakusCompanyPage() {
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
        title="ラクス エンジニア転職ガイド"
        description="ラクス（楽楽精算等）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収664万円(2026年3月期)、Java/PHP中心の技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/rakus/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "PHPの転職ガイド", href: "/skill/php/" }, { name: "TypeScriptの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ラクス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ラクス エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜「楽楽精算」などバックオフィスSaaSを展開する東証プライム企業</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社ラクス（証券コード3923・東証プライム）は、経費精算「楽楽精算」、電子請求書「楽楽明細」、メール共有「メールディーラー」などの自社SaaSを展開するクラウド企業です（印刷・物流のプラットフォーム企業ラクスル／RAKSUL・4384とは別会社です）。
          このページでは、有価証券報告書・公式採用ページ・公式技術ブログといった一次情報をもとに、ラクスへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社ラクス 有価証券報告書（2026年3月期）",
            "ラクス キャリア採用情報（career-recruit.rakus.co.jp）",
            "RAKUS Developers Blog（公式技術ブログ）",
            "OpenWork（ラクス 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：Java/PHPのWebアプリ開発経験があり、安定したSaaSをじっくり育てたいエンジニア向き。難易度は中。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Java・PHP中心のWeb開発経験が活き、複数プロダクトを継続的に成長させる安定したSaaS開発に関われる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は664万円（2026年3月期 有報）。平均年齢32.7歳と若めの組織でこの水準で、緩やかに上昇傾向。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>チームが主体的に技術を選定する文化。派手な急成長より、堅実にプロダクトを磨きたいエンジニアと相性が良い。</li>
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
            出典: 株式会社ラクス 有価証券報告書（2026年3月期）／ラクス キャリア採用情報・RAKUS Developers Blog（公式）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">複数の自社SaaSを継続的に育てる安定した開発</h3>
              <p className="text-sm text-petrol-deep">ラクスは「楽楽精算」「楽楽明細」「メールディーラー」など複数の自社SaaSを長期にわたって成長させています。新規プロダクトの立ち上げよりも、既存プロダクトを継続的に改善・拡張する堅実な開発スタイルが中心で、腰を据えてプロダクトを磨きたいエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">チームが主体的に選ぶ「ベスト・オブ・ブリード」型の技術選定</h3>
              <p className="text-sm text-petrol-deep">ラクスはJava・PHPを主軸としつつ、チームごとに主体的に技術を選定する「ベスト・オブ・ブリード」型の開発を掲げています。一部でGo・Pythonも利用され、フロントエンドはVue.js・React・TypeScript等が用いられます。技術選定に関わりたいエンジニアにとって裁量を持ちやすい環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術発信と育成への取り組み</h3>
              <p className="text-sm text-petrol-deep">RAKUS Developers Blog（公式技術ブログ）での技術発信や、エンジニアの育成・学習支援に取り組んでいます。バックオフィス業務という分かりやすいドメインで、ユーザーの業務効率化に直結するプロダクトを作れる点も特徴です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はラクス公式の採用ページ・公式技術ブログ（RAKUS Developers Blog）などの公開情報に基づく技術スタックです。チームごとに技術を選定するため、プロダクト・チームによって採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Java / PHP を主軸に、一部 Go・Python（Spring Boot・Laravel 等）"],
                  ["フロントエンド", "Vue.js / React / TypeScript / JavaScript（jQuery 等の資産も）"],
                  ["技術選定", "チームが主体的に選定する「ベスト・オブ・ブリード」型"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ラクス キャリア採用情報・RAKUS Developers Blog（tech-blog.rakus.co.jp）等の公開記事。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            ラクスは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社ラクス 有価証券報告書（各期）。平均年齢が32.7歳（2026年3月期）と若めの組織で、緩やかに上昇しています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、ラクスの全社員平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            ラクス公式キャリア採用ページに基づく標準的な流れです。最新の内容は<a href="https://career-recruit.rakus.co.jp/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考前にエンジニアや採用担当と話し、仕事内容や開発文化を知れる機会。"],
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・技術スタックが確認される。"],
              ["面接（複数回）", "現場エンジニア・マネージャー等との面接。技術的な経験やチーム開発の進め方が確認される。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: ラクス キャリア採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・技術ブログなどの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Java・PHPいずれかでのWebアプリケーション開発の実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>SaaS・自社プロダクトの開発・運用経験、設計の考え方</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チーム開発でのコミュニケーション、継続的に学習・改善する姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>バックオフィス業務など、ユーザーの課題に向き合う意識</li>
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
                <li>安定して成長するSaaS事業で、腰を据えてプロダクトに関われるという声（OpenWork）</li>
                <li>育成・学習支援や技術発信に前向きな文化への評価（OpenWork）</li>
                <li>バックオフィスSaaSという分かりやすいドメインで成果が見えやすいという声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>既存プロダクトの改善・運用が中心で、最先端技術の比重を期待する人には物足りない場合がある</li>
                <li>組織拡大に伴う制度・体制の変化への適応が求められる</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（ラクス 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たラクス</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              ラクスは上場済みで安定した収益基盤を持ち、複数の自社SaaSを長期的に成長させているフェーズにあります。30代・40代のミドルエンジニアにとっては、「急成長スタートアップの不確実性は避けつつ、自社プロダクトを腰を据えて育てたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が32.7歳（2026年3月期）と若めのため、40代は相対的にシニア寄りの立ち位置になります。設計・技術選定をリードした経験、チームを牽引した経験、長期運用・保守を見据えた開発の経験などは、年齢に見合った価値として評価されやすいでしょう。逆に「最先端技術を追い続けたい」志向だと、堅実な開発スタイルとはギャップを感じる場合があります。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、ラクスの全社員平均664万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              同じバックオフィス・業務系SaaSでは<Link href="/company/freee/" className="text-petrol hover:underline">freee</Link>・<Link href="/company/moneyforward/" className="text-petrol hover:underline">マネーフォワード</Link>との比較もおすすめです。年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ラクス転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。SaaS企業の非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "Green", href: "/review/green/", desc: "成功報酬型の転職サイト。IT/Webベンチャーに強く、カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SaaS系企業への転職実績が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">ラクスへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "エムスリー の転職ガイド", href: "/company/m3/" },
              { name: "ラクスル（RAKSUL） の転職ガイド", href: "/company/raksul/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
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
