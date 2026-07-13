import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/trendmicro/" },
  title: "トレンドマイクロの年収は平均988万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "トレンドマイクロ（4704）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年間給与988万円(2025年12月期 有報・全社員平均)、サイバーセキュリティを軸とする技術領域、選考フロー、30代40代の戦い方まで。",
};

const salaryTrend: [string, string, string][] = [
  ["2021年12月期", "941万円", "40.0歳"],
  ["2022年12月期", "885万円", "40.4歳"],
  ["2023年12月期", "（前後の期を参照）", "—"],
  ["2024年12月期", "900万円", "40.3歳"],
  ["2025年12月期", "988万円", "40.3歳"],
];

const basicData: [string, string][] = [
  ["企業名", "トレンドマイクロ株式会社（証券コード4704・東証プライム）"],
  ["事業領域", "サイバーセキュリティのプラットフォーム・ソリューション（クラウド/ネットワーク/エンドポイントのセキュリティ、脅威インテリジェンス、リサーチ等）"],
  ["平均年間給与", "988万円（2025年12月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "40.3歳（2025年12月期 有価証券報告書）"],
  ["従業員数", "約725名（単体・2025年12月期 有価証券報告書）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック（公開情報）", "C/C++・Python・Go 等（セキュリティ製品・脅威解析）、クラウド基盤（AWS等）、機械学習（領域・チームにより異なる）"],
  ["採用ページ", "trendmicro.com/ja_jp/about/careers.html（採用情報）"],
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
  { id: "middle", label: "30代・40代から見たトレンドマイクロ" },
  { id: "agents", label: "トレンドマイクロ転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "トレンドマイクロのエンジニア転職の難易度は高い？",
    a: "サイバーセキュリティのグローバル大手として専門性が重視され、インフラ・システム開発・セキュリティのいずれかで一定年数の実務経験が実質的な応募ラインになります。一方で、未経験者向けの有給人材育成プログラムを設けるなど人材投資にも積極的で、関連経験と継続的に学ぶ姿勢があれば30代・40代でも挑戦できます。",
  },
  {
    q: "トレンドマイクロのエンジニアの平均年収はいくら？",
    a: "トレンドマイクロ株式会社の有価証券報告書（2025年12月期）に記載された全社員の平均年間給与は988万円、平均年齢は40.3歳です（エンジニア職に限った数値ではなく全社員平均）。セキュリティ専業のグローバル企業として高めの水準で、近年は900万円前後で推移し直近期に上昇しています。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごとに決定されます。",
  },
  {
    q: "トレンドマイクロの技術スタックは？",
    a: "公式採用情報や技術リサーチの公開情報によると、セキュリティ製品・脅威解析ではC/C++・Python・Goなどが用いられ、クラウド（AWS等）やネットワーク、機械学習を活用した脅威インテリジェンスが中核とされます。製品・チームにより採用技術は異なり、本ページでは公開情報の範囲で記載しています。",
  },
  {
    q: "トレンドマイクロの選考フローは？",
    a: "公式採用情報によると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。職務経歴・専門領域が確認され、ポジションによっては技術的な質問や課題が含まれることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "トレンドマイクロはどんな事業をしている会社ですか？",
    a: "トレンドマイクロは、クラウド・ネットワーク・エンドポイントを横断するサイバーセキュリティのプラットフォーム・ソリューションを提供する東証プライム上場のグローバル企業（証券コード4704）です。脅威インテリジェンスやリサーチにも強みを持ち、世界中の企業・組織のセキュリティを支えています。",
  },
  {
    q: "トレンドマイクロはリモートワークできる？",
    a: "トレンドマイクロはリモートワークを併用できる体制を採っています。OpenWork等の口コミでは、グローバルな環境やセキュリティの専門性、福利厚生を評価する声が見られる一方、英語を使う場面や専門領域ゆえの学習負荷を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "トレンドマイクロへの転職で有利な経験は？",
    a: "インフラ・システム開発・ネットワーク・セキュリティのいずれかの実務経験が基本です。C/C++・Python・Go等の開発経験、クラウド（AWS等）の知見、脅威解析・機械学習の経験、英語でのコミュニケーション力があると評価されやすい傾向です。",
  },
];

export default function TrendmicroCompanyPage() {
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
        title="トレンドマイクロ エンジニア転職ガイド"
        description="トレンドマイクロへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収988万円(2025年12月期)、サイバーセキュリティの技術領域、選考フロー、口コミ傾向まで。"
        url="/company/trendmicro/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Goの転職ガイド", href: "/skill/go/" }, { name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "トレンドマイクロ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">トレンドマイクロ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ サイバーセキュリティのグローバル大手</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】トレンドマイクロの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: トレンドマイクロ株式会社の平均年間給与は988万円です（2025年12月期 有価証券報告書・全社員平均、平均年齢40.3歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 988万円（2025年12月期 有報）。全社員平均でエンジニア職に限った数値ではありません。</li><li>・推移は2022年12月期885万円・2024年12月期900万円から上昇し、2025年12月期は988万円（各期 有報。一部の期は公表値が確認できず）。</li><li>・職種・等級別の公式な年収表は非公表。提示額はスキル評価で個別決定されるため、求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          トレンドマイクロ株式会社（証券コード4704・東証プライム）は、クラウド・ネットワーク・エンドポイントを横断するサイバーセキュリティのプラットフォームを提供するグローバル企業です。
          このページでは、有価証券報告書・公式採用情報・技術リサーチといった一次情報をもとに、トレンドマイクロへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "トレンドマイクロ株式会社 有価証券報告書（2025年12月期）",
            "トレンドマイクロ 採用情報（trendmicro.com/ja_jp/about/careers.html）",
            "トレンドマイクロ 公式サイト（事業・技術リサーチ）",
            "OpenWork（トレンドマイクロ 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：開発・インフラ・セキュリティの実務経験があり、専門性とグローバルな環境を両立したいエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>C/C++・Python・Go等の開発経験やクラウド・ネットワークの知見が、セキュリティ製品・脅威解析で活きる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は988万円（2025年12月期 有報）。セキュリティ専業として高めの水準で、ミドル層の年収向上を狙いやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>グローバルなセキュリティ企業として、専門性を深めながら世界規模の脅威に向き合える環境が魅力。</li>
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
            出典: トレンドマイクロ株式会社 有価証券報告書（2025年12月期）／トレンドマイクロ公式採用情報。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。技術スタックは公開情報の範囲で記載しています。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">サイバーセキュリティの専門性とグローバル環境</h3>
              <p className="text-sm text-petrol-deep">トレンドマイクロはクラウド・ネットワーク・エンドポイントを横断するセキュリティプラットフォームを世界規模で提供しています。脅威インテリジェンスやリサーチに強みを持ち、最新の攻撃手法と向き合う専門性の高い開発・解析に関われる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">人材育成プログラム</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、トレンドマイクロは日本リージョンでセキュリティ未経験者向けの有給人材育成プログラムを実施し、専門知識を習得してサイバーセキュリティ人材を育てる取り組みを行っているとされます。一方でエンジニア職では関連分野の一定年数の実務経験が実質的な応募ラインになります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ専業ならではの待遇水準</h3>
              <p className="text-sm text-petrol-deep">セキュリティ専業のグローバル企業として年収水準は高めで、有報の全社員平均は900万円台後半です（全社平均でありエンジニア職に限った値ではありません）。専門性に応じた評価が受けやすい環境とされています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はトレンドマイクロ公式採用情報・技術リサーチなどの公開情報に基づく技術領域です。製品・チームにより採用技術は異なります。断定できない技術は記載していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["開発・解析", "C / C++ / Python / Go 等（セキュリティ製品・脅威解析、領域により異なる）"],
                  ["クラウド・基盤", "AWS等のクラウド基盤、ネットワークセキュリティ"],
                  ["注力領域", "脅威インテリジェンス / 機械学習を活用した検知 / クラウド・エンドポイントセキュリティ"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: トレンドマイクロ公式採用情報・技術リサーチ等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            トレンドマイクロは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: トレンドマイクロ株式会社 有価証券報告書（各期）。2025年12月期は前年比で上昇し988万円となりました。一部の期は公表値が確認できないため空欄としています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、トレンドマイクロの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            トレンドマイクロ公式採用情報に基づく標準的な流れです。最新の内容は<a href="https://www.trendmicro.com/ja_jp/about/careers.html" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・専門領域が確認される。"],
              ["面接（複数回）", "現場・マネージャー等との面接。技術的な質問や専門領域の議論が行われる。"],
              ["技術確認（ポジションによる）", "ポジションによっては技術課題や専門知識の確認が含まれることがある。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: トレンドマイクロ公式採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>C/C++・Python・Go等の開発、インフラ・ネットワーク・セキュリティの実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド（AWS等）の知見、脅威解析・機械学習の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>継続的に学ぶ姿勢、最新の攻撃手法・技術への関心</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>グローバルなチームでのコミュニケーション力（英語を使う場面がある）</li>
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
                <li>セキュリティの専門性を深められる環境を評価する声（OpenWork）</li>
                <li>グローバルな環境と高めの年収水準・福利厚生への評価（OpenWork）</li>
                <li>ワークライフバランスや柔軟な働き方を挙げる声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>英語を使う場面があり、グローバル連携の負荷を挙げる声</li>
                <li>セキュリティ専門領域ゆえの継続的な学習が前提となる</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（トレンドマイクロ 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たトレンドマイクロ</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              トレンドマイクロは上場済みで安定した収益基盤を持つグローバルなセキュリティ企業です。30代・40代のミドルエンジニアにとっては、「専門性を深めながら、世界規模の脅威に向き合う仕事に関わりたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が40.3歳（2025年12月期）と、ミドル層が中心の組織構成です。開発・インフラ・ネットワークの実務経験に加え、セキュリティの専門性、脅威解析・機械学習の経験は、年齢に見合った価値として評価されやすいでしょう。グローバルなチームで働くため、英語でのコミュニケーション力も一つの武器になります。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、トレンドマイクロの全社員平均988万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">トレンドマイクロ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。セキュリティ・外資系の非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "外資・ハイクラスに強く、年収帯の高いセキュリティ・専門職の求人に対応。" },
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
          <h2 className="text-xl font-bold mb-3">トレンドマイクロへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">高年収のセキュリティ・外資系企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "IIJ の転職ガイド", href: "/company/iij/" },
              { name: "NEC の転職ガイド", href: "/company/nec/" },
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
