import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/biprogy/" },
  title: "BIPROGY（旧日本ユニシス）の年収・給与は平均884万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "BIPROGY（旧日本ユニシス・8056）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年間給与884万円(2026年3月期 有報・全社員平均)、Java/クラウド/DXを軸とする大手SIerの技術領域、選考フロー、30代40代の戦い方まで。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "810万円", "46.1歳"],
  ["2023年3月期", "816万円", "46.3歳"],
  ["2024年3月期", "850万円", "46.4歳"],
  ["2025年3月期", "846万円", "46.4歳"],
  ["2026年3月期", "884万円", "46.3歳"],
];

const basicData: [string, string][] = [
  ["企業名", "ＢＩＰＲＯＧＹ株式会社（旧 日本ユニシス・証券コード8056・東証プライム）"],
  ["事業領域", "金融・流通・製造・公共・社会インフラ等のシステム開発・運用、クラウド/DX支援、デジタルプラットフォーム事業"],
  ["平均年間給与", "884万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "46.3歳（2026年3月期 有価証券報告書）"],
  ["従業員数", "約4,300名（単体・2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都江東区"],
  ["技術スタック（公開情報）", "Java / Spring Boot / Flutter ほか、Azure 等のクラウド、Jira・Bitbucket 等の開発基盤（案件・部門により異なる）"],
  ["採用ページ", "biprogy.com/recruit（採用情報）"],
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
  { id: "middle", label: "30代・40代から見たBIPROGY" },
  { id: "agents", label: "BIPROGY転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "BIPROGY（旧日本ユニシス）のエンジニア転職の難易度は高い？",
    a: "BIPROGYは旧日本ユニシスを前身とする大手SIerで、金融・流通・製造・公共など幅広い業界の大規模システムを手がけています。システム開発・インフラ・クラウドのいずれかの実務経験が前提になりますが、DX・クラウド領域で中途採用も活発で、上流工程やプロジェクト推進の経験があれば30代・40代でも十分に挑戦できます。難易度は中〜やや高です。",
  },
  {
    q: "BIPROGYのエンジニアの平均年収はいくら？",
    a: "BIPROGY株式会社の有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は884万円、平均年齢は46.3歳です（エンジニア職に限った数値ではなく全社員平均）。大手SIerとして高めの水準で、近年は800万円台後半で推移しています。平均年齢が高めで平均勤続年数も長く、その分平均年収も高く出やすい組織です。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごとに決定されます。",
  },
  {
    q: "BIPROGYの技術スタックは？",
    a: "公式採用情報の公開情報によると、新規事業・研究開発ではFlutter・Java・Spring Boot・Azure・Jira・Bitbucketなどが用いられています。基幹システムから新規プロダクト、クラウド・DXまで幅広く手がけており、案件・部門により採用技術は異なります。本ページでは公開情報の範囲で記載しています。",
  },
  {
    q: "BIPROGYの選考フローは？",
    a: "公式採用サイトによると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。職務経歴・担当工程・技術領域が確認され、ポジションによっては適性検査が行われる場合があります。最新の内容は公式採用サイトでご確認ください。",
  },
  {
    q: "BIPROGYはどんな事業をしている会社ですか？",
    a: "BIPROGY株式会社は、旧社名を日本ユニシス株式会社といい2022年に社名変更した大手SIerです（証券コード8056・東証プライム）。金融・流通・製造・公共・社会インフラなど幅広い業界のシステム開発・運用に加え、クラウド・DX支援やデジタルプラットフォーム事業を展開しています。",
  },
  {
    q: "BIPROGYはリモートワークできる？",
    a: "BIPROGYはリモートワークを併用できる体制を採っています。OpenWork等の口コミでは、大手SIerとしての安定性や福利厚生、働きやすさを評価する声が見られる一方、組織規模ゆえの調整業務やプロジェクトによる差を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "BIPROGYへの転職で有利な経験は？",
    a: "Java等での開発経験、クラウド（Azure等）の構築経験、上流工程やプロジェクトマネジメントの経験が基本です。DX・新規プロダクト開発の経験、金融・流通・製造など特定業界の業務知識があると評価されやすい傾向です。",
  },
];

export default function BiprogyCompanyPage() {
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
        title="BIPROGY（旧日本ユニシス） エンジニア転職ガイド"
        description="BIPROGY（旧日本ユニシス）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収884万円(2026年3月期)、Java/クラウド/DXの技術領域、選考フロー、口コミ傾向まで。"
        url="/company/biprogy/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "TypeScriptの転職ガイド", href: "/skill/typescript/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "BIPROGY" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">BIPROGY（旧日本ユニシス） エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ DXを推進する大手SIer（旧日本ユニシス）</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】BIPROGY（旧日本ユニシス）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: BIPROGY株式会社の有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は884万円、平均年齢は46.3歳です（エンジニア職に限った値ではなく全社員平均）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与884万円（2026年3月期 有価証券報告書・全社員平均、平均年齢46.3歳）</li><li>・近年は800万円台後半で推移（2024年3月期850万円→2025年3月期846万円→2026年3月期884万円）</li><li>・全社員平均でエンジニア単独の数値ではなく、職種・等級別の公式年収表は未公開。提示額は求人ごとに個別決定</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          ＢＩＰＲＯＧＹ株式会社（旧 日本ユニシス・証券コード8056・東証プライム）は、金融・流通・製造・公共・社会インフラなど幅広い業界にシステム開発・運用、クラウド・DX支援、デジタルプラットフォーム事業を提供する大手SIerです。
          このページでは、有価証券報告書・公式採用サイトといった一次情報をもとに、BIPROGYへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ＢＩＰＲＯＧＹ株式会社 有価証券報告書（2026年3月期）",
            "BIPROGY 採用情報（biprogy.com/recruit）",
            "BIPROGY公式サイト（事業・クラウド/DX）",
            "OpenWork（BIPROGY 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：システム開発・クラウド・上流工程の経験があり、大手の安定基盤でDX・新規領域に関わりたいエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Java・クラウド（Azure等）の経験が活き、基幹システムからDX・新規プロダクトまで幅広く関われる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は884万円（2026年3月期 有報）。大手SIerでも高めの水準で、ミドル層の年収向上を狙いやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>旧日本ユニシスを前身とする安定基盤の上で、デジタルプラットフォーム事業など新規領域にも挑戦できる。</li>
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
            出典: ＢＩＰＲＯＧＹ株式会社 有価証券報告書（2026年3月期・第82期）／BIPROGY公式採用サイト。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">基幹システムからDX・デジタルプラットフォームまで</h3>
              <p className="text-sm text-petrol-deep">BIPROGYは旧日本ユニシスを前身とし、金融・流通・製造・公共など幅広い業界の基幹システムを手がけてきた実績があります。近年はクラウド・DX支援やデジタルプラットフォーム事業にも注力しており、安定基盤と新規領域の両方に関われる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドDX・成長領域への投資</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、BIPROGYはクラウド活用の解決策提示から構築・移行、運用までをワンストップで提供する専任組織（クラウドDXセンター）を擁し、DX人材の採用・育成に注力しています。クラウド・新規プロダクト開発に関わりたいエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大手SIerならではの待遇水準</h3>
              <p className="text-sm text-petrol-deep">大手SIerとして年収水準は高めで、有報の全社員平均は800万円台後半です。平均年齢・勤続年数が長めの組織で、長期的にキャリアを築きたいエンジニアに向いています（全社平均でありエンジニア職に限った値ではありません）。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はBIPROGY公式採用情報・公式サイトなどの公開情報に基づく技術領域です。SIerのため案件・部門・顧客により採用技術は大きく異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["開発言語・FW", "Java / Spring Boot / Flutter ほか（案件・新規開発により多様）"],
                  ["クラウド・基盤", "Microsoft Azure 等のクラウド、クラウドDX"],
                  ["開発基盤・領域", "Jira / Bitbucket 等の開発基盤、基幹システム / DX / デジタルプラットフォーム"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: BIPROGY公式採用情報・公式サイト等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            BIPROGYは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: ＢＩＰＲＯＧＹ株式会社 有価証券報告書（各期）。平均年齢が46歳前後と高めで、勤続年数も長い組織であることが高めの平均年収の一因です。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、BIPROGYの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            BIPROGY公式採用サイトに基づく標準的な流れです。最新の内容は<a href="https://www.biprogy.com/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用サイト</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・担当工程・技術領域が確認される。"],
              ["面接（複数回）", "現場マネージャー・人事等との面接。経験・技術・プロジェクト推進力が確認される。"],
              ["適性検査（ポジションによる）", "ポジションによっては適性検査が行われる場合がある。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: BIPROGY公式採用サイトの要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Java等での開発、クラウド（Azure等）構築の実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>上流工程・プロジェクトマネジメント・顧客折衝の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>DX・新規プロダクト開発の経験、課題解決と提案の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>金融・流通・製造など特定業界の業務知識</li>
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
                <li>大手SIerとしての安定性と福利厚生を評価する声（OpenWork）</li>
                <li>働きやすさ・ワークライフバランスへの評価（OpenWork）</li>
                <li>DX・クラウド領域への投資や新規領域への挑戦を挙げる声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>大規模組織ゆえの調整業務・意思決定スピードを挙げる声</li>
                <li>部署・プロジェクトによって働き方や使う技術に差がある</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（BIPROGY 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たBIPROGY</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              BIPROGYは旧日本ユニシスを前身とする上場済みの大手SIerで、安定した収益基盤の上でDX・クラウド領域への投資を続けるフェーズにあります。30代・40代のミドルエンジニアにとっては、「安定した大手の基盤の上で、上流工程やDX・新規領域に関わりたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が46.3歳（2026年3月期）と高めで、平均勤続年数も長い組織です。40代のミドルエンジニアも年齢的に違和感なく溶け込みやすく、設計・上流工程をリードした経験、プロジェクトマネジメントの経験、特定業界の業務知識やクラウドの専門性は、年齢に見合った価値として評価されやすいでしょう。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、BIPROGYの全社員平均884万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">BIPROGY転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。大手SIerの非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高い大手SIer・専門職の求人に対応。" },
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
          <h2 className="text-xl font-bold mb-3">BIPROGYへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">高年収の大手SIerへの転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "CTC（伊藤忠テクノソリューションズ） の転職ガイド", href: "/company/ctc/" },
              { name: "SCSK の転職ガイド", href: "/company/scsk/" },
              { name: "DTS の転職ガイド", href: "/company/dts/" },
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
