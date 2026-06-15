import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "マネーフォワードの年収は平均723万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "マネーフォワード（3994）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収723万円(2025年11月期)、Ruby/Go/Kotlinの技術スタック、選考フロー、口コミ傾向、30代40代視点まで。",
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
  { id: "middle", label: "30代・40代から見たマネーフォワード" },
  { id: "agents", label: "転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社マネーフォワード（証券コード3994・東証プライム）"],
  ["事業領域", "個人向け家計簿「マネーフォワード ME」、法人向け「マネーフォワード クラウド」等のフィンテックSaaS"],
  ["平均年間給与", "723万円（2025年11月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "34.3歳（2025年11月期 有価証券報告書）"],
  ["平均勤続年数", "2.9年（2025年11月期 有価証券報告書）"],
  ["本社所在地", "東京都港区（東京・福岡・京都等に開発拠点）"],
  ["技術スタック", "Ruby on Rails / Go / Kotlin / React / TypeScript ほか（公式技術ブログ）"],
  ["採用ページ", "recruit.moneyforward.com"],
];

const salaryTrend: [string, string, string][] = [
  ["2021年11月期", "648万円", "33.4歳"],
  ["2022年11月期", "647万円", "33.3歳"],
  ["2023年11月期", "665万円", "33.6歳"],
  ["2024年11月期", "711万円", "34.0歳"],
  ["2025年11月期", "723万円", "34.3歳"],
];

const faqs = [
  {
    q: "マネーフォワードのエンジニア転職の難易度は高い？",
    a: "フィンテックSaaSの代表的企業として人気が高く、Webアプリケーション開発の実務経験は前提です。一方でバックエンドを中心に通年で多くのエンジニアを募集しており、Ruby on RailsやGoでの開発経験と、ユーザーファーストへの共感、技術アウトプットの姿勢があれば30代・40代でも挑戦できます。",
  },
  {
    q: "マネーフォワードのエンジニアの平均年収はいくら？",
    a: "株式会社マネーフォワードの有価証券報告書（2025年11月期）に記載された全社員の平均年間給与は723万円、平均年齢34.3歳です（エンジニア職に限った数値ではなく全社員平均）。直近5年で648万円→723万円へ上昇傾向にあります。職種・等級別の正式な年収表は公開されていません。",
  },
  {
    q: "マネーフォワードの技術スタックは？",
    a: "公式技術ブログ等の公開情報によると、歴史的経緯からRuby on Railsで開発されたサービスが多く、近年はマイクロサービス化に伴いGo（gRPC等）やサーバーサイドKotlinを環境に応じて採用しています。フロントエンドはReact/TypeScript。「この技術スタックを必ず使う」という制約はかけず、チームが技術選定できる方針が公表されています。",
  },
  {
    q: "マネーフォワードの選考フローは？",
    a: "公式採用ページによると、応募 → 書類選考 → 複数回の面接が基本です。書類選考では業務経験に加え「対外的な情報発信（GitHubやブログ等のアウトプット）」が見られるとされ、面接ではミッション・ビジョン・行動方針への共感とユーザーファーストの姿勢が重視されます。",
  },
  {
    q: "マネーフォワードの開発文化は？",
    a: "「User Focus（ユーザーファースト）」を重視し、ユーザー課題の解決に向き合う文化です。RubyKaigiやGo Conferenceへのスポンサーシップ、技術ブログの発信、カンファレンス登壇など、エンジニアの外部発信を積極的に奨励しています。",
  },
  {
    q: "マネーフォワードのワークライフバランスは？",
    a: "フレックス・リモートワークに対応しており、OpenWorkのクチコミではエンジニア職は有給取得率が高い傾向が見られます。一方で部署によっては繁忙期に残業が増えるという声もあり、職種・時期で差があります。最新の勤務条件は各求人で確認してください。",
  },
  {
    q: "マネーフォワードへの転職で有利な経験は？",
    a: "Ruby on Rails / Goいずれかの実務経験、SaaSプロダクトの開発・運用経験が基本です。フィンテック・会計領域のドメイン知識、マイクロサービスアーキテクチャの理解、技術的なアウトプット（登壇・ブログ・OSS）があると評価されやすい傾向です。",
  },
  {
    q: "マネーフォワードはマイクロサービス移行中と聞きましたが？",
    a: "公式技術ブログによると、クラウド会計Plusなどで2018年ごろまではRails中心だった構成からマイクロサービスへの移行とGoの導入を進めています。レガシーのモダナイゼーションや分散システムの設計に関わりたいエンジニアに向いた環境です。",
  },
];

export default function MoneyforwardCompanyPage() {
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
        title="マネーフォワード エンジニア転職ガイド"
        description="マネーフォワードへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収723万円(2025年11月期)、技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/moneyforward/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Ruby on Railsの転職ガイド", href: "/skill/rails/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "マネーフォワード" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">マネーフォワード エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ フィンテックSaaSのリーディングカンパニー</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社マネーフォワード（証券コード3994・東証プライム）は、個人向け家計簿アプリ「マネーフォワード ME」や法人向けクラウドサービス「マネーフォワード クラウド」などを展開するフィンテックSaaSの代表的企業です。
          このページでは、有価証券報告書・公式採用ページ・公式技術ブログといった一次情報をもとに、マネーフォワードへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社マネーフォワード 有価証券報告書（2025年11月期）",
            "マネーフォワード 採用情報（recruit.moneyforward.com）",
            "マネーフォワード 公式技術ブログ",
            "OpenWork（マネーフォワード 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：Rails/Goの実務経験があり、ユーザーファーストとアウトプットを楽しめるエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Rails中心の歴史的資産とGo/Kotlinによるマイクロサービス化が並走し、レガシー改善から新規設計まで幅広い経験を積める。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は723万円（2025年11月期 有報）で直近5年は上昇傾向。SaaS業界では上位の水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>登壇・ブログ・OSSなど技術的アウトプットを評価・奨励する文化。発信を続けてきたミドルエンジニアと相性が良い。</li>
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
            出典: 株式会社マネーフォワード 有価証券報告書（2025年11月期）／マネーフォワード 採用情報・公式技術ブログ。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">個人・法人にまたがるフィンテックの二本柱</h3>
              <p className="text-sm text-blue-700">家計簿アプリ「マネーフォワード ME」やクラウド会計「マネーフォワード クラウド」など、個人・法人双方に向けたフィンテックサービスを展開。金融データの取り扱いに関する高度な技術力と、セキュリティ・データ保護への高い意識が求められます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マイクロサービスへの移行とモダナイゼーション</h3>
              <p className="text-sm text-blue-700">公式技術ブログによると、Rails中心だった構成からGo（gRPC等）やサーバーサイドKotlinを用いたマイクロサービスへの段階的移行を進めています。レガシーコードの改善や分散システムの設計に取り組める環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術コミュニティへの積極貢献とアウトプット文化</h3>
              <p className="text-sm text-blue-700">RubyKaigiやGo Conferenceへのスポンサーシップ、技術ブログの発信、カンファレンス登壇を積極的に行っています。採用でも「対外的な情報発信をしているか」が見られるとされ、エンジニアの外部発信を強く奨励する文化です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は公式技術ブログ等の公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Ruby on Rails（歴史的に多い）、Go（gRPC含む）、サーバーサイドKotlin"],
                  ["フロントエンド", "React / TypeScript"],
                  ["アーキテクチャ", "モノリスからマイクロサービスへ段階的移行"],
                  ["技術選定方針", "「必ずこの技術を使う」という制約をかけず、チームが環境・特徴に応じて選定（公式公表）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: マネーフォワード 公式技術ブログ等の公開記事。記載のない基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            マネーフォワードは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社マネーフォワード 有価証券報告書（各期）。直近5年で648万円→723万円へ上昇傾向。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、マネーフォワードの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・採用FAQの公開情報に基づく標準的な流れです。ポジションにより回数・内容は変わります。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考前に現場や採用担当と話せる場。事業や働き方を確認できる。"],
              ["応募・書類選考", "業務経験に加え、GitHubやブログなど対外的な情報発信（アウトプット）が見られるとされる。"],
              ["面接（複数回）", "現場メンバー・マネージャー等との面接。ミッション・ビジョン・行動方針への共感、ユーザーファーストの姿勢、技術的な議論が中心。"],
              ["内定・オファー面談", "条件・制度の説明。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: マネーフォワード 採用情報・採用FAQ（recruit.moneyforward.com）。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・採用担当インタビュー（レバテックキャリア掲載）などの公開情報から読み取れる傾向です。質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>徹底したユーザー志向（User Focus）。ユーザーに何を提供したいかを語れるか。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ミッション・ビジョン・行動方針への共感とマッチ。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術的なアウトプット（登壇・ブログ・GitHub・OSS）の有無と姿勢。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Rails/Goでの設計・実装力、マイクロサービスや分散システムへの理解。</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策ガイド</Link>、設計面接は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>を参考にしてください。
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
                <li>事業成長が速く、テレワーク・フレックスなど柔軟な働き方が整っているという声（OpenWork）</li>
                <li>フラットで風通しが良いという評価が複数（OpenWork）</li>
                <li>高い技術力と、成果を出せば昇進が早いという働きがいの声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>スピードについていけず苦しく感じる人もいるという指摘（OpenWork）</li>
                <li>部署によっては繁忙期に残業が増えるという声（OpenWork）</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（マネーフォワード 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たマネーフォワード</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              マネーフォワードは東証プライム上場のフィンテックSaaSで、全社員平均年収は723万円（2025年11月期 有報）と直近5年で上昇傾向にあります。30代・40代にとっては、上場企業の事業基盤と、Rails資産のモダナイゼーション・マイクロサービス化という「やりがいのある技術課題」を両立できるのが魅力です。
            </p>
            <p>
              平均年齢34.3歳・平均勤続年数2.9年と、若く流動性の高い組織です。40代はシニア寄りの立ち位置になるため、レガシー改善の経験、分散システム・大規模データの設計経験、テックリードやマネジメントの実績が年齢に見合う価値として評価されやすいでしょう。登壇やブログなど発信を続けてきた人は、採用でアウトプットが見られる文化とも相性が良いです。
            </p>
            <p>
              金融データを扱うためセキュリティ意識が重要で、過去にミッションクリティカルな領域を担ってきた30代・40代の経験は強みになります。年収の妥当性を見極めるには、<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>と<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>を押さえておくとよいでしょう。
            </p>
            <p>
              スタートアップ的なスピードと大企業的な安定の比較は<Link href="/knowledge/startup-vs-enterprise/" className="text-blue-600 hover:underline">スタートアップと大企業の比較</Link>、年代別の動向は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。フィンテック・SaaS企業の求人に強く、書類添削・面接対策に定評。" },
              { name: "Green", href: "/review/green/", desc: "成功報酬型の転職サイト。IT/Webベンチャーに強く、カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、フィンテック系企業への転職実績が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">マネーフォワードへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・フィンテック企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "Sansan の転職ガイド", href: "/company/sansan/" },
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "30代エンジニアの転職", href: "/age/30s/" },
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
