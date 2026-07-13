import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/tis/" },
  title: "TISの年収は平均828万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "TIS株式会社（3626）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収828万円(2026年3月期・全社員平均)、Java/Python/AWS中心の技術スタック、選考フロー・面接観点、30代40代の戦い方まで。確認できない数値は記載していません。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "741万円", "—"],
  ["2023年3月期", "751万円", "—"],
  ["2024年3月期", "803万円", "—"],
  ["2025年3月期", "806万円", "40.6歳"],
  ["2026年3月期", "828万円", "40.7歳"],
];

const basicData: [string, string][] = [
  ["企業名", "TIS株式会社（証券コード3626・東証プライム / TISインテックグループ中核）"],
  ["事業領域", "システムインテグレーション（受託開発・運用）、クレジット・決済プラットフォーム、業種別ソリューション、クラウド・DX支援など"],
  ["平均年間給与", "828万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "40.7歳（2026年3月期 有価証券報告書）"],
  ["平均勤続年数", "約14.4年（2026年3月期 有価証券報告書）"],
  ["従業員数", "約6,066名（2026年3月期 有価証券報告書・TIS単体）"],
  ["本社所在地", "東京都新宿区"],
  ["技術スタック（公開情報）", "Java / Python / TypeScript（React）、AWS / Azure / GCP、クラウドネイティブ・生成AI活用（公式技術発信「Fintan」等）"],
  ["採用ページ", "tis.co.jp/career（キャリア採用）"],
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
  { id: "middle", label: "30代・40代から見たTIS" },
  { id: "agents", label: "TIS転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "TISのエンジニア転職の難易度は高い？",
    a: "国内大手SIerであり通年で幅広い職種を募集しているため、Web系の最先端企業と比べると門戸は広めです。一方で大規模システムの上流（要件定義・設計）やプロジェクト推進を担える人材が求められ、Java等での開発経験やSIの実務経験があると評価されやすい傾向です。平均年齢が40歳台と高めの組織のため、30代・40代の経験者にとっては相性の良い選択肢になり得ます。",
  },
  {
    q: "TISのエンジニアの平均年収はいくら？",
    a: "TIS株式会社の有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は828万円、平均年齢は40.7歳です（エンジニア職に限った数値ではなく全社員平均）。大手SIerの中でも高めの水準で、近年は700万円台後半から800万円台へと上昇傾向にあります。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "TISの技術スタックは？",
    a: "TISの公式技術情報サイト「Fintan」や採用情報などの公開情報によると、Java・Python・TypeScript（React）などを用いた開発、AWS・Azure・GCPを活用したクラウドネイティブ開発、生成AIの内製活用などが見られます。受託開発が中心のSIerのため、案件・顧客により採用技術は大きく異なります。",
  },
  {
    q: "TISの選考フローは？",
    a: "TIS公式キャリア採用サイトによると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。職務経歴・担当領域に応じてポジションが検討され、上流工程やマネジメント経験が確認されることがあります。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "TISはどんな事業をしている会社ですか？",
    a: "TISは、システムインテグレーション（受託開発・運用）を中核に、クレジット・決済プラットフォーム、業種別ソリューション、クラウド・DX支援などを展開する東証プライム上場の大手SIer（証券コード3626）です。TISインテックグループの中核会社で、金融・決済領域に強みを持ちます。",
  },
  {
    q: "TISはリモートワークできる？",
    a: "TISはリモートワークを併用できる体制を採っているとされます。OpenWork等の口コミでは、安定性や福利厚生、働き方改革への取り組みを評価する声がある一方、受託開発ゆえに案件・顧客により働き方が変わる点を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "TISへの転職で有利な経験は？",
    a: "Java等でのシステム開発経験、要件定義・基本設計などの上流工程経験、プロジェクトマネジメント経験、金融・決済ドメインの知見、クラウド（AWS等）の設計・構築経験などが評価されやすい傾向です。30代・40代では、技術力に加えて顧客折衝やチーム推進の経験が強みになります。",
  },
];

export default function TisCompanyPage() {
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
        title="TIS エンジニア転職ガイド"
        description="TISへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収828万円(2026年3月期)、Java/Python/AWS中心の技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/tis/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "TIS" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">TIS エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 決済・金融に強い国内大手SIer（TISインテックグループ中核）</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】TISの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: TIS株式会社の平均年間給与は828万円です（2026年3月期 有価証券報告書・全社員平均、平均年齢40.7歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 828万円（2026年3月期 有報）。全社員平均でエンジニア職に限った数値ではありません。</li><li>・推移は2022年3月期の741万円から上昇し、2026年3月期は828万円（各期 有報）。大手SIerの中でも高めの水準です。</li><li>・職種・等級別の公式な年収表は非公表。提示額はスキル評価で個別決定されるため、求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          TIS株式会社（証券コード3626・東証プライム）は、システムインテグレーションを中核に、クレジット・決済プラットフォーム、業種別ソリューション、クラウド・DX支援を展開する国内大手SIer（TISインテックグループの中核会社）です。
          このページでは、有価証券報告書・公式キャリア採用サイト・公式技術情報サイト「Fintan」といった一次情報をもとに、TISへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "TIS株式会社 有価証券報告書（2026年3月期）",
            "TISキャリア採用サイト（tis.co.jp/career）",
            "TIS 技術情報サイト Fintan（fintan.jp）",
            "OpenWork（TIS 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：大規模システムの上流・運用や決済ドメインに関わりたい経験者向き。難易度は中。30代・40代と相性が良い。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Javaを中心としたSI開発経験・上流工程・PM経験が活きる。金融/決済ドメインに強み。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は828万円（2026年3月期 有報）。大手SIerの中でも高めで、安定基盤と待遇を両立しやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>平均年齢40.7歳と経験者の多い組織。30代・40代のミドルが評価されやすく、長く働ける環境を求める人に向く。</li>
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
            出典: TIS株式会社 有価証券報告書（2026年3月期）／TISキャリア採用サイト・技術情報サイトFintan。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">決済・金融ドメインの大規模システムに関われる</h3>
              <p className="text-sm text-petrol-deep">TISはクレジット・決済プラットフォームに長年の実績を持ち、社会インフラに近い大規模システムの開発・運用に携われます。金融・決済ドメインの知見を深めたいエンジニアや、ミッションクリティカルな領域で経験を積みたい人に向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">上流工程・プロジェクト推進の機会が多い</h3>
              <p className="text-sm text-petrol-deep">受託開発が中心のSIerのため、要件定義・基本設計などの上流工程やプロジェクトマネジメントの機会が豊富です。コードを書くだけでなく、顧客折衝やチームの推進に踏み込みたい30代・40代に適しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウド・生成AIなど技術の内製発信も</h3>
              <p className="text-sm text-petrol-deep">公式技術情報サイト「Fintan」を通じて、クラウドネイティブ開発や生成AIの内製活用などの取り組みを発信しています。SIerの中でも技術の標準化・モダナイズに取り組む姿勢が見られます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はTISキャリア採用サイト・公式技術情報サイト「Fintan」などの公開情報に基づく技術スタックです。受託開発が中心のため、案件・顧客により採用技術は大きく異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Java を中心に Python ほか（案件・顧客により異なる）"],
                  ["フロントエンド", "TypeScript（React 等）"],
                  ["クラウド・基盤", "AWS / Azure / GCP、クラウドネイティブ開発、生成AIの内製活用"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: TISキャリア採用サイト・技術情報サイトFintan（fintan.jp）等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            TISは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: TIS株式会社 有価証券報告書（各期）。平均年齢40.7歳（2026年3月期）の経験者中心の組織で、近年は上昇傾向です。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、TISの全社員平均はこれを大きく上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            TIS公式キャリア採用サイトに基づく標準的な流れです。最新の内容は<a href="https://www.tis.co.jp/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用サイト</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・担当領域・上流経験が確認される。"],
              ["面接（複数回）", "現場マネージャー・人事等との面接。プロジェクト経験や役割、技術・推進力が問われる。"],
              ["適性確認等", "ポジションにより適性検査やスキル確認が行われる場合がある。"],
              ["内定（オファー）", "条件・配属の説明。担当領域・ミッションのすり合わせが行われる。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: TISキャリア採用サイトの要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用サイト・技術情報サイトなどの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Java等でのシステム開発経験、要件定義・基本設計などの上流工程経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロジェクトマネジメント・チーム推進・顧客折衝の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>金融・決済ドメインの知見、クラウド（AWS等）の設計・構築経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>標準化・モダナイズなど、組織的な改善に取り組む姿勢</li>
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
                <li>大手SIerとしての安定性・福利厚生を評価する声（OpenWork）</li>
                <li>働き方改革・在宅勤務など、働く環境の整備への評価（OpenWork）</li>
                <li>決済・金融など大規模ドメインに関われる点への評価（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>受託開発ゆえに案件・顧客により働き方や裁量が変わる</li>
                <li>大企業特有の調整・社内手続きに時間がかかる場面がある</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（TIS 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たTIS</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              TISは平均年齢40.7歳（2026年3月期）と経験者の多い組織で、30代・40代のミドルエンジニアにとっては相性の良い選択肢です。要件定義・設計などの上流工程やプロジェクトマネジメントの経験、金融・決済ドメインの知見は、年齢に見合った価値として評価されやすいでしょう。
            </p>
            <p>
              Web系メガベンチャーのようなコーディング偏重の選考ではなく、これまでのプロジェクト経験・役割・推進力が評価軸になりやすい点も、経験を積んだミドル層にとってフェアに働く面があります。一方で「最新技術だけを追いたい」という志向の場合は、受託開発中心という事業特性との相性を確認しておくとよいでしょう。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、TISの全社員平均828万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TIS転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。SIer・大手の非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高い大手・専門職の求人に対応。ミドル層に強み。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SI・自社開発の双方に実績。" },
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
          <h2 className="text-xl font-bold mb-3">TISへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手SIer・高年収企業への転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "SCSK の転職ガイド", href: "/company/scsk/" },
              { name: "NTTデータ の転職ガイド", href: "/company/ntt-data/" },
              { name: "野村総合研究所（NRI） の転職ガイド", href: "/company/nri/" },
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
