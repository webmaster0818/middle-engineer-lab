import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "富士ソフトの年収は平均640万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "富士ソフト株式会社（9749）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収640万円(2024年12月期・全社員平均)、組込み/業務システム/インフラの幅広い技術領域、選考フロー・面接観点、30代40代の戦い方まで。確認できない数値は記載していません。",
};

const salaryTrend: [string, string, string][] = [
  ["2020年12月期", "590万円", "—"],
  ["2021年12月期", "600万円", "—"],
  ["2022年12月期", "620万円", "—"],
  ["2023年12月期", "600万円", "—"],
  ["2024年12月期", "640万円", "35.6歳"],
];

const basicData: [string, string][] = [
  ["企業名", "富士ソフト株式会社（証券コード9749・東証プライム）"],
  ["事業領域", "組込み系/制御系ソフトウェア、業務系システム開発（SI）、プロダクト・サービス、インフラ構築、AI・ロボットなど（独立系の総合SIer）"],
  ["平均年間給与", "640万円（2024年12月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "35.6歳（2024年12月期 有価証券報告書）"],
  ["平均勤続年数", "約10年（2024年12月期 有価証券報告書）"],
  ["従業員数", "連結 約9,806名（2024年12月期 有価証券報告書）"],
  ["本社所在地", "神奈川県横浜市"],
  ["技術スタック（公開情報）", "組込み/制御系（C/C++ 等）、業務系（Java 等）、Web・クラウド、AI・ロボット。案件・分野により採用技術は大きく異なる"],
  ["採用ページ", "fsi.co.jp（採用情報）"],
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
  { id: "middle", label: "30代・40代から見た富士ソフト" },
  { id: "agents", label: "富士ソフト転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "富士ソフトのエンジニア転職の難易度は高い？",
    a: "独立系の総合SIerで規模が大きく通年で幅広い職種を募集しているため、Web系の最先端企業と比べると門戸は広めです。組込み・制御系から業務システム、インフラ、AI・ロボットまで分野が広く、いずれかの実務経験があれば30代・40代でも挑戦しやすい傾向です。希望分野での経験とプロジェクト推進力が評価されます。",
  },
  {
    q: "富士ソフトのエンジニアの平均年収はいくら？",
    a: "富士ソフト株式会社の有価証券報告書（2024年12月期）に記載された全社員の平均年間給与は640万円、平均年齢は35.6歳です（エンジニア職に限った数値ではなく全社員平均）。近年は600万円前後から上昇傾向にあります。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "富士ソフトの技術スタックは？",
    a: "富士ソフトは組込み・制御系（C/C++等）、業務系システム開発（Java等）、Web・クラウド、AI・ロボットまで幅広い分野を手がける独立系の総合SIerです。受託開発が中心のため、案件・分野により採用技術は大きく異なります。具体的な使用技術は希望分野や求人票でご確認ください。",
  },
  {
    q: "富士ソフトの選考フローは？",
    a: "富士ソフト公式採用情報によると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。希望分野・職種に応じて実務経験やスキルが確認されます。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "富士ソフトはどんな事業をしている会社ですか？",
    a: "富士ソフトは、組込み・制御系ソフトウェアから業務系システム開発（SI）、プロダクト・サービス、インフラ構築、AI・ロボットまで幅広く手がける独立系の総合SIer（証券コード9749・東証プライム）です。横浜に本社を置き、特定資本に属さない独立系として多様な顧客・分野のシステム開発を担っています。",
  },
  {
    q: "富士ソフトはリモートワークできる？",
    a: "富士ソフトはリモートワークを併用できる体制を採っているとされます。OpenWork等の口コミでは、分野の幅広さや教育・キャリアの選択肢を評価する声がある一方、受託開発ゆえに案件・客先により働き方が変わる点を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "富士ソフトへの転職で有利な経験は？",
    a: "組込み・制御系（C/C++等）、業務系システム開発（Java等）、インフラ構築、AI・ロボットなどいずれかの分野の実務経験が評価されやすい傾向です。30代・40代では、技術力に加えて要件定義などの上流工程やプロジェクト推進・チームリードの経験が強みになります。",
  },
];

export default function FujiSoftCompanyPage() {
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
        title="富士ソフト エンジニア転職ガイド"
        description="富士ソフトへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収640万円(2024年12月期)、組込み/業務システム/インフラの技術領域、選考フロー、口コミ傾向まで。"
        url="/company/fujisoft/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "富士ソフト" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">富士ソフト エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 組込みから業務システム・AIまで幅広く手がける独立系総合SIer</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          富士ソフト株式会社（証券コード9749・東証プライム）は、組込み・制御系ソフトウェアから業務系システム開発（SI）、インフラ構築、AI・ロボットまで幅広く手がける独立系の総合SIerです。
          このページでは、有価証券報告書・公式採用ページといった一次情報をもとに、富士ソフトへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "富士ソフト株式会社 有価証券報告書（2024年12月期）",
            "富士ソフト公式採用情報（fsi.co.jp）",
            "IRBANK（富士ソフト 平均年収推移・9749）",
            "OpenWork（富士ソフト 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：組込みから業務システム・AIまで幅広い分野で経験を積みたいエンジニア向き。難易度は中。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>独立系の総合SIerで分野が広い。組込み・制御系/業務系/インフラ/AIのいずれかの経験が活きる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は640万円（2024年12月期 有報）。近年は上昇傾向で堅実な水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>規模が大きく通年募集。希望分野での経験とプロジェクト推進力があれば30代・40代でも挑戦しやすい。</li>
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
            出典: 富士ソフト株式会社 有価証券報告書（2024年12月期）／富士ソフト公式採用情報／IRBANK（9749）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">組込みから業務システム・AIまで幅広い分野</h3>
              <p className="text-sm text-petrol-deep">富士ソフトは独立系の総合SIerとして、組込み・制御系から業務系システム開発、インフラ、AI・ロボットまで幅広い分野を手がけています。これまでの経験を活かせる分野が見つけやすく、分野を横断してキャリアを広げたいエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独立系ゆえの多様な顧客・案件</h3>
              <p className="text-sm text-petrol-deep">特定資本に属さない独立系のため、業界・顧客を問わず多様な案件に関われます。さまざまなドメインのシステム開発を経験したい人や、特定領域に縛られず幅を広げたいミドルに適しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">規模を背景にした安定基盤と教育体制</h3>
              <p className="text-sm text-petrol-deep">連結で約9,806名（2024年12月期）の規模を持ち、安定した事業基盤と教育・キャリアの選択肢が特徴です。腰を据えて長く働きたい、技術の幅を広げたいというニーズに応えやすい体制です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は富士ソフト公式情報に基づく技術領域です。受託開発が中心で分野が広いため、案件・分野により採用技術は大きく異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["組込み・制御系", "C / C++ 等を用いた組込み/制御系ソフトウェア開発"],
                  ["業務系・Web", "Java 等を用いた業務システム開発、Web・クラウド開発"],
                  ["先端領域", "AI・ロボット、インフラ構築 など（案件・分野により技術は異なる）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 富士ソフト公式情報。受託開発のため案件ごとに技術が異なり、網羅的な使用言語の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            富士ソフトは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 富士ソフト株式会社 有価証券報告書（各期）／IRBANK（9749）。平均年間給与は富士ソフト単体の全社員平均です。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、富士ソフトの全社員平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            富士ソフト公式採用情報に基づく標準的な流れです。最新の内容は<a href="https://www.fsi.co.jp/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式サイト・採用情報</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "希望分野・職種から応募し書類を提出。職務経歴・実務経験が確認される。"],
              ["面接（複数回）", "現場・人事等との面接。希望分野での経験や役割、推進力が問われる。"],
              ["適性確認等", "ポジションにより適性検査やスキル確認が行われる場合がある。"],
              ["内定（オファー）", "条件・配属の説明。担当分野・ミッションのすり合わせが行われる。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: 富士ソフト公式採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>組込み・制御系（C/C++等）または業務系（Java等）の開発経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>インフラ構築、AI・ロボットなど希望分野での実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>要件定義などの上流工程やプロジェクト推進の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>多様な顧客・案件に適応できる柔軟性とコミュニケーション</li>
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
                <li>分野の幅広さ・経験できる領域の多さを評価する声（OpenWork）</li>
                <li>独立系・大規模ゆえの安定性を評価する声（OpenWork）</li>
                <li>教育・キャリアの選択肢が多い点への評価（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>受託開発ゆえに案件・客先により働き方や裁量が変わる</li>
                <li>配属分野によって扱う技術・環境の差が大きい</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（富士ソフト 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た富士ソフト</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              富士ソフトは平均年齢35.6歳（2024年12月期）で、独立系の総合SIerとして分野が広いのが特徴です。30代・40代のミドルエンジニアにとっては、「これまでの経験を活かせる分野を選びつつ、安定した基盤で長く働きたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              組込み・制御系、業務系、インフラ、AI・ロボットなど、いずれかの分野での実務経験や、要件定義などの上流工程・プロジェクト推進の経験は、年齢に見合った価値として評価されやすいでしょう。一方で受託開発が中心のため、案件・客先により働き方や裁量が変わる点は理解しておくとよいでしょう。
            </p>
            <p>
              年収面では、富士ソフトの全社員平均640万円（有報）は近年上昇傾向にある堅実な水準です。提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">富士ソフト転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で求人数が豊富。SIer・組込み・インフラ系の求人にも対応。書類添削・面接対策に定評。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SI・各分野に実績。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、専門職や上流ポジションの求人に対応。ミドル層に強み。" },
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
          <h2 className="text-xl font-bold mb-3">富士ソフトへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SIer・組込み・インフラ系の転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "TIS の転職ガイド", href: "/company/tis/" },
              { name: "SCSK の転職ガイド", href: "/company/scsk/" },
              { name: "NTTデータ の転職ガイド", href: "/company/ntt-data/" },
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
