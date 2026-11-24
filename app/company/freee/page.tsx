import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/freee/" },
  title: "freeeの年収は平均688万円【2026年・有報】エンジニア転職・技術スタック解説",
  description:
    "freee（4478）へのエンジニア転職について、有価証券報告書・公式採用ページの一次情報をもとに平均年収688万円(2025年6月期)、技術スタック、選考フロー、口コミサイトの評点、30代40代の進め方までを解説します。",
};

const toc = [
  { id: "conclusion", label: "転職難易度と向いている人" },
  { id: "basic", label: "基本データ（企業概要・出典明記）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（有価証券報告書・公式求人）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の掲載状況" },
  { id: "middle", label: "30代・40代から見たfreee" },
  { id: "agents", label: "freee転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "freee株式会社（証券コード4478・東証グロース）"],
  ["事業領域", "クラウド会計・人事労務などの統合型バックオフィスSaaS"],
  ["ミッション", "「スモールビジネスを、世界の主役に。」"],
  ["平均年間給与", "688万円（2025年6月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "33.1歳（2025年6月期 有価証券報告書）"],
  ["本社所在地", "東京都品川区"],
  ["技術スタック", "Ruby on Rails / React / TypeScript ほか（freee Developers Hub）"],
  ["採用ページ", "jobs.freee.co.jp（キャリア採用）"],
];

const salaryTrend: [string, string, string][] = [
  ["2021年6月期", "705万円", "32.9歳"],
  ["2022年6月期", "716万円", "33.0歳"],
  ["2023年6月期", "685万円", "33.1歳"],
  ["2024年6月期", "678万円", "32.7歳"],
  ["2025年6月期", "688万円", "33.1歳"],
];

const faqs = [
  {
    q: "freeeのエンジニア転職の難易度は高いですか？",
    a: "クラウド会計のリーディングSaaSとして人気が高く、Webアプリケーション開発の実務経験は前提になります。一方で職種ごとに通年で複数ポジションを募集しており、Ruby on Railsなどモダンな技術での開発経験と、ユーザー課題に向き合う姿勢があれば30代・40代でも十分に挑戦できます。学歴よりも実務での課題解決経験が見られる傾向があります。",
  },
  {
    q: "freeeのエンジニアの平均年収はいくらですか？",
    a: "freee株式会社の有価証券報告書（2025年6月期）に記載された全社員の平均年間給与は688万円、平均年齢33.1歳です（エンジニア職に限った数値ではなく全社員平均）。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "freeeの技術スタックを教えてください。",
    a: "freee Developers Hub（公式技術ブログ）などの公開情報によると、バックエンドはRuby on Rails、フロントエンドはReact/TypeScriptが中心です。社内デザインシステム「Vibes」を整備し、複数プロダクト横断での技術標準化（API仕様・インフラ管理・ログ基盤等）を進めています。",
  },
  {
    q: "freeeの選考フローを教えてください。",
    a: "公式採用ページ（キャリア採用）によると、任意のカジュアル面談 → エントリー（書類選考）→ 面接約3回 → 内定（オファー面談）が基本です。エンジニア職では選考過程でコードテストが実施される場合があり、全職種でリファレンスチェックが行われることがあります。",
  },
  {
    q: "freeeはアクセシビリティに力を入れていると聞きましたが、本当ですか？",
    a: "freeeは日本のSaaS企業の中でもアクセシビリティへの取り組みを公式に発信している企業の一つで、アクセシビリティガイドラインを公開しています。プロダクト開発でアクセシビリティやUXへの関心があると評価されやすい環境があります。",
  },
  {
    q: "freeeはリモートワークできますか？残業は多いですか？",
    a: "freeeはフレックスタイム制とリモートワークを併用できる体制を採っています。OpenWork の集計値（2026年11月24日確認・回答者285人）では、月間残業時間23.4時間、有給休暇消化率81.1%です（全職種の集計）。職種・時期によって変動します。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "freeeへの転職で有利になる経験を教えてください。",
    a: "Ruby on Railsを中心としたWebアプリケーションの実務経験、SaaSプロダクトの開発・運用経験が基本です。会計・人事労務などバックオフィス領域のドメイン知識、アクセシビリティやUXへの関心があると加点されやすい傾向があります。",
  },
  {
    q: "freeeはエージェント経由と直接応募のどちらがよいですか？",
    a: "freeeは公式採用ページから直接応募もカジュアル面談も受け付けています。書類添削や年収交渉のサポートが欲しい場合はSaaSに強いエージェント経由、自分のペースで進めたい場合は直接応募と、目的で使い分けるのがおすすめです。複数経路の併用も可能です。",
  },
];

export default function FreeeCompanyPage() {
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
        title="freee エンジニア転職ガイド"
        description="freeeへのエンジニア転職について、有価証券報告書・公式採用ページの一次情報をもとに平均年収688万円(2025年6月期)、技術スタック、選考フロー、口コミサイトの評点までを解説します。"
        url="/company/freee/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Ruby on Railsの転職ガイド", href: "/skill/rails/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "freee" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">freee エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ クラウド会計SaaSのリーディングカンパニー</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】freeeの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>freee株式会社の平均年間給与は688万円です（2025年6月期 有価証券報告書・全社員平均、平均年齢33.1歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 688万円です（2025年6月期 有価証券報告書）。全社員平均でエンジニア職限定の数値ではありません。</li><li>・推移は2022年6月期の716万円をピークに微減し、2025年6月期は688万円に回復しています（各期 有価証券報告書）。</li><li>・職種・等級別の公式な年収表は非公表です。提示額はスキル評価で個別決定されるため、求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          freee株式会社（証券コード4478・東証グロース）は、クラウド会計「freee会計」やクラウド人事労務などを展開する統合型バックオフィスSaaSの代表的企業です。
          このページでは、有価証券報告書・公式採用ページ・公式技術ブログといった一次情報をもとに、freeeへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミサイトの評点を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "freee株式会社 有価証券報告書（2025年6月期）",
            "freee 採用情報（jobs.freee.co.jp）",
            "freee Developers Hub",
            "OpenWork・就活会議・ワンキャリア転職（評点・件数のみ・2026年11月24日確認）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職難易度と向いている人</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">Webアプリ開発の実務経験があり、ユーザー課題に深く向き合いたいエンジニアに向いています。難易度は中〜やや高めです。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Ruby on Rails中心のモダンなSaaS開発経験が活き、上場済みの安定感と成長企業のスピードを両立できます。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は688万円です（2025年6月期 有価証券報告書）。SaaS業界では高めの水準で、ミドル層にとって年収維持・向上の選択肢になり得ます。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>「マジ価値」を掲げるプロダクト志向の文化で、技術力だけでなくユーザー課題への当事者意識が問われます。手を動かすだけの人より、課題を定義できる人が評価されやすい傾向があります。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（企業概要・出典明記）</h2>
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
            出典: freee株式会社 有価証券報告書（2025年6月期）／freee 採用情報・freee Developers Hub（公式）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「マジ価値」を追求するプロダクト志向の開発</h3>
              <p className="text-sm text-petrol-deep">「スモールビジネスを、世界の主役に。」をミッションに、会計・人事労務・会社設立などのバックオフィスSaaSを展開しています。ユーザーに本質的な価値（freeeでは「マジ価値」）を届けることを重視し、エンジニアもビジネス課題の理解を求められる文化です。freeeの採用担当インタビュー（レバテックキャリア掲載）でも、変化を楽しみ新しいことへ挑戦する姿勢が重視されると語られています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">アクセシビリティへの公式なコミットメント</h3>
              <p className="text-sm text-petrol-deep">freeeは日本のSaaS企業の中でもアクセシビリティへの取り組みを公式に発信している企業の一つで、社内向けのアクセシビリティガイドラインを公開しています。多様なユーザーが使えるプロダクトづくりに関心のあるエンジニアにとって、技術的チャレンジと社会的意義を両立できる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">統合型プラットフォームを志向する複数プロダクト体制</h3>
              <p className="text-sm text-petrol-deep">freeeは複数プロダクトを「統合型経営プラットフォーム」として連携させる方針を掲げ、技術選定・ログ形式・インフラ管理・連携API仕様などの標準化を進めています。プロダクト単体だけでなく、横断的な基盤づくりに関わりたいエンジニアに向いた環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はfreee Developers Hub（公式技術ブログ）や採用ページなどの公開情報に基づく技術スタックです。プロダクト・チームによって採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Ruby on Rails が中心"],
                  ["フロントエンド", "React / TypeScript（社内デザインシステム「Vibes」を整備）"],
                  ["取り組み", "アクセシビリティ標準化、プロダクト横断の技術標準化（API・インフラ・ログ基盤）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: freee Developers Hub（developers.freee.co.jp）等の公開記事。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            freeeは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
            職種・等級別の公式な年収表は公開されていないため、ここでは有価証券報告書の推移のみを掲載します。
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
          <p className="text-xs text-slate-400 mb-4">出典: freee株式会社 有価証券報告書（各期）。2022年6月期の716万円をピークに微減し、2025年6月期は688万円に回復しています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、freeeの全社員平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            freee公式採用ページ（キャリア採用 選考プロセス）に基づく標準的な流れです。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考要素のない1on1で、現場メンバーから実際の働き方や仕事の魅力を聞けます。オンライン（Google Meet）が基本で、オフラインも可能です。"],
              ["エントリー（書類選考）", "募集職種から応募し書類を提出します。合否に関わらず1週間以内に連絡があるとされます。"],
              ["面接（約3回）", "現場メンバー・マネージャー等との面接が行われます。エンジニア職の初回は技術ディスカッション中心で、課題解決経験・技術研鑽・サービス運営経験などを問われます。"],
              ["コードテスト／リファレンスチェック", "エンジニア職では選考過程でコードテストが実施される場合があります。全職種でリファレンスチェックが行われることがあります。"],
              ["内定（オファー面談）", "条件・制度の説明を受けます。オフィス訪問での面談も可能です。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: freee 採用情報「選考プロセス（キャリア）」（jobs.freee.co.jp）。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・採用担当インタビュー（レバテックキャリア掲載）などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ユーザー課題への当事者意識（「マジ価値」への共感）と、技術選定の背景を語れるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>変化やチャレンジを楽しめる姿勢と、新しい技術・領域への適応力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>課題解決経験の具体性と、なぜその設計・実装にしたかを自分の言葉で説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>サービス運営・運用の経験と、技術研鑽（学習やアウトプット）への姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策ガイド</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト攻略</Link>を参考にしてください。
          </p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">freeeの口コミ・評判の掲載状況（2026年11月24日確認）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-3">
            <p>第三者の社員クチコミサイトで、当サイトが確認できた評点と件数は次のとおりです。口コミの本文は転載・要約していません。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr><th className="px-3 py-2 text-left">サイト</th><th className="px-3 py-2 text-left">評点</th><th className="px-3 py-2 text-left">件数・回答者</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200"><td className="px-3 py-2"><a href="https://www.openwork.jp/company.php?m_id=a0C1000000sgO4l" rel="nofollow noopener" target="_blank" className="text-petrol underline">OpenWork（フリー株式会社）</a></td><td className="px-3 py-2">社員による会社評価スコア 3.95</td><td className="px-3 py-2">回答者285人・社員クチコミ1,330件。同ページの集計値は月間残業時間23.4時間・有給休暇消化率81.1%</td></tr>
                  <tr className="border-t border-slate-200"><td className="px-3 py-2"><a href="https://syukatsu-kaigi.jp/companies/165737" rel="nofollow noopener" target="_blank" className="text-petrol underline">就活会議（フリー株式会社）</a></td><td className="px-3 py-2">総合評価 4.0</td><td className="px-3 py-2">口コミ回答数214件（転職会議からの転載と表記）</td></tr>
                  <tr className="border-t border-slate-200"><td className="px-3 py-2"><a href="https://plus.onecareer.jp/companies/383/company_evaluations" rel="nofollow noopener" target="_blank" className="text-petrol underline">ワンキャリア転職（社員クチコミ）</a></td><td className="px-3 py-2">企業全体の評点は画面に表示されていません</td><td className="px-3 py-2">クチコミ88件</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">出典：上記3サイト（2026年11月24日確認）。評点は投稿者個人の主観の集計で、部署・職種・時期によって実態は異なります。エンジニア職に限った値ではありません。</p>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たfreee</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              freeeは上場済みで事業基盤が安定しつつ、SaaS市場の成長を取り込めるフェーズにあります。30代・40代のミドルエンジニアにとっては、「スタートアップの不確実性は避けたいが、レガシーで停滞した環境にも戻りたくない」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が33.1歳（2025年6月期）と若めのため、40代は相対的にシニア寄りの立ち位置になります。マネジメントやテックリードとしての経験、ドメイン（会計・人事労務）への理解、プロダクト横断の標準化を推進した経験などは、年齢に見合った価値として評価されやすいと考えられます。一方で、「コードを書くだけ」のポジション期待だと、若手との差別化が難しくなります。
            </p>
            <p>
              年収面では、現職が事業会社の維持・運用中心で頭打ちになっている30代・40代にとって、freeeの全社員平均688万円（有価証券報告書）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">freee転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人の比率が高い傾向があります。SaaS企業の非公開求人を扱うことがあります。書類添削・面接対策に定評があります。" },
              { name: "Green", href: "/review/green/", desc: "成功報酬型の転職サイトです。IT/Webベンチャーに強く、カジュアル面談で社風を把握しやすくなります。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲームに特化しています。提案スピードが強みで、SaaS系企業への転職実績が豊富です。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">各社の特徴は<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリアの評判</Link>などの個別レビュー、<Link href="/compare/levtech-vs-geekly/" className="text-petrol hover:underline">レバテック×Geekly比較</Link>も参考にしてください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">freeeへの転職を相談する</h2>
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
              { name: "SmartHR の転職ガイド", href: "/company/smarthr/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "Sansan の転職ガイド", href: "/company/sansan/" },
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
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
