import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/dts/" },
  title: "DTSの年収は平均658万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "株式会社DTS（9682）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年間給与658万円(2026年3月期 有報・全社員平均)、Java/Python中心の独立系トータルSIerの技術領域、選考フロー、30代40代の戦い方まで。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "600万円", "39.8歳"],
  ["2023年3月期", "601万円", "39.6歳"],
  ["2024年3月期", "612万円", "39.8歳"],
  ["2025年3月期", "643万円", "39.6歳"],
  ["2026年3月期", "658万円", "39.7歳"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ＤＴＳ（証券コード9682・東証プライム）"],
  ["事業領域", "金融・公共・産業・通信など幅広い業界のシステム開発・運用、インフラ構築、DX支援（独立系トータルSIer）"],
  ["平均年間給与", "658万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "39.7歳（2026年3月期 有価証券報告書）"],
  ["従業員数", "約3,200名（単体・2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都中央区"],
  ["技術スタック（公開情報）", "Java / Python / JavaScript を中心とした開発、AWS・OCI・Azure 等のクラウド、ウォーターフォール／アジャイル（案件により異なる）"],
  ["採用ページ", "dts.co.jp/recruit/career（キャリア採用）"],
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
  { id: "middle", label: "30代・40代から見たDTS" },
  { id: "agents", label: "DTS転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "DTSのエンジニア転職の難易度は高い？",
    a: "DTSは創業50年以上、一度も赤字がない盤石経営の独立系トータルSIerで、事業拡大により通年でエンジニアを募集しています。Java・Python等での開発経験やインフラ構築の経験があれば応募しやすく、上流工程やプロジェクト推進の経験があれば30代・40代でも十分に挑戦できます。難易度は中程度で、特定ベンダーに縛られない独立系の幅広い案件が特徴です。",
  },
  {
    q: "DTSのエンジニアの平均年収はいくら？",
    a: "株式会社DTSの有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は658万円、平均年齢は39.7歳です（エンジニア職に限った数値ではなく全社員平均）。近年は600万円台で堅調に推移しており、賃上げにより上昇傾向にあります。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "DTSの技術スタックは？",
    a: "公式採用ページの公開情報によると、開発言語はJava・Python・JavaScriptを中心とし、開発手法は各プロジェクトの特性に応じてウォーターフォール型・アジャイル型を選択しています。AWS・OCI・AzureなどのクラウドやAI・IoTの知見も歓迎条件とされます。SIerのため案件により採用技術は異なります。",
  },
  {
    q: "DTSの選考フローは？",
    a: "公式キャリア採用サイトによると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。職務経歴・担当工程・開発経験が確認され、ポジションによっては適性検査が行われる場合があります。最新の内容は公式キャリア採用サイトでご確認ください。",
  },
  {
    q: "DTSはどんな事業をしている会社ですか？",
    a: "株式会社DTSは、金融・公共・産業・通信など幅広い業界に向けてシステム開発・運用、インフラ構築、DX支援を提供する東証プライム上場の独立系トータルSIer（証券コード9682）です。創業50年以上の歴史を持ち、特定の資本系列に縛られない独立系として安定した経営基盤を築いています。",
  },
  {
    q: "DTSはリモートワークできる？",
    a: "DTSはリモートワークを併用できる体制を採っています。OpenWork等の口コミでは、安定性やワークライフバランス、独立系ゆえの幅広い案件を評価する声が見られる一方、SIer特有の客先常駐やプロジェクトによる差を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "DTSへの転職で有利な経験は？",
    a: "Java・Python・JavaScript等での開発経験、アジャイル型開発や各種パッケージ製品による開発経験、インフラ構築の経験が基本です。AWS・OCI・Azure等のクラウドやAI・IoTの知見、上流工程・プロジェクトマネジメントの経験があると評価されやすい傾向です。",
  },
];

export default function DtsCompanyPage() {
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
        title="DTS エンジニア転職ガイド"
        description="株式会社DTSへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収658万円(2026年3月期)、Java/Python中心の技術領域、選考フロー、口コミ傾向まで。"
        url="/company/dts/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "DTS" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">DTS エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 創業50年以上の独立系トータルSIer</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】DTSの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 株式会社DTSの平均年間給与は658万円です（2026年3月期 有価証券報告書・全社員平均、平均年齢39.7歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 658万円（2026年3月期 有報）。全社員平均でエンジニア職限定の数値ではありません。</li><li>・推移は2022年3月期600万円から賃上げで上昇し、2025年3月期643万円・2026年3月期658万円（各期 有報）。</li><li>・職種・等級別の公式な年収表は非公表。提示額はスキル評価で個別決定されるため、求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社ＤＴＳ（証券コード9682・東証プライム）は、金融・公共・産業・通信など幅広い業界にシステム開発・運用、インフラ構築、DX支援を提供する独立系のトータルSIerです。
          このページでは、有価証券報告書・公式採用サイトといった一次情報をもとに、DTSへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社ＤＴＳ 有価証券報告書（2026年3月期）",
            "DTS キャリア採用サイト（dts.co.jp/recruit/career）",
            "DTS公式サイト（事業・技術領域）",
            "OpenWork（DTS 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：システム開発・インフラ構築の経験があり、独立系の安定基盤で幅広い業界の案件に関わりたいエンジニア向き。難易度は中程度。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>Java・Python・JavaScript等の開発経験が活き、特定ベンダーに縛られない独立系の幅広い案件に関われる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は658万円（2026年3月期 有報）。近年は賃上げで上昇傾向にあり、安定した収入を得やすい。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>創業50年以上・一度も赤字がない盤石経営の独立系SIerで、安定性とワークライフバランスを重視する人に向く。</li>
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
            出典: 株式会社ＤＴＳ 有価証券報告書（2026年3月期）／DTS公式採用サイト。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独立系トータルSIerの幅広い案件</h3>
              <p className="text-sm text-petrol-deep">DTSは特定の資本系列に縛られない独立系のトータルSIerとして、金融・公共・産業・通信など幅広い業界の案件を手がけています。アプリケーション開発からインフラ構築まで一気通貫で対応でき、多様なドメイン・技術に触れられる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">創業50年以上・盤石経営の安定性</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、DTSは創業50年以上で一度も赤字がない盤石経営を続けてきた企業です。安定した経営基盤の上で、長く腰を据えてキャリアを築きたいエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">DX・クラウド・先端技術への取り組み</h3>
              <p className="text-sm text-petrol-deep">DTSは「お客様のビジネスをDXで強くするトータルSIer」を掲げ、新しいシステム開発手法・先端技術の検証やプロジェクトへの適用、新ソリューションの創出にも取り組んでいます。AWS・OCI・AzureなどのクラウドやAI・IoTの知見が歓迎されます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はDTS公式採用サイト・公式サイトなどの公開情報に基づく技術領域です。SIerのため案件・顧客により採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["開発言語", "Java / Python / JavaScript を中心とした開発"],
                  ["クラウド・基盤", "AWS / Oracle Cloud(OCI) / Azure などのクラウド、インフラ構築"],
                  ["開発手法・領域", "ウォーターフォール／アジャイル（案件特性で選択）、AI・IoT・各種パッケージ"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: DTS公式採用サイト・公式サイト等の公開情報。記載のない言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報・公式求人）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            DTSは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社ＤＴＳ 有価証券報告書（各期）。近年は賃上げにより600万円台で堅調に上昇しています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、DTSの全社員平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            DTS公式キャリア採用サイトに基づく標準的な流れです。最新の内容は<a href="https://www.dts.co.jp/recruit/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用サイト</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・担当工程・開発経験が確認される。"],
              ["面接（複数回）", "現場・人事等との面接。経験・技術・プロジェクト推進力が確認される。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: DTSキャリア採用サイトの要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用サイトなどの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Java・Python・JavaScript等での開発経験、インフラ構築の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>アジャイル型開発や各種パッケージ製品による開発経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>AWS・OCI・Azure等のクラウド、AI・IoTの知見</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>上流工程・プロジェクトマネジメント・顧客折衝の経験</li>
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
                <li>独立系・盤石経営の安定性を評価する声（OpenWork）</li>
                <li>ワークライフバランスや働きやすさへの評価（OpenWork）</li>
                <li>幅広い業界・技術の案件に関われるという声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>SIer特有の客先常駐やプロジェクトによる働き方の差</li>
                <li>大手Web系と比べると最先端技術への露出は案件依存</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（DTS 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たDTS</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              DTSは上場済みで安定した収益基盤を持つ独立系トータルSIerです。30代・40代のミドルエンジニアにとっては、「安定した基盤の上で、幅広い業界の案件に長く関わりたい」「ワークライフバランスを保ちたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              平均年齢が39.7歳（2026年3月期）と、ミドル層が中心の組織構成です。アプリケーション開発・インフラ構築の実務経験に加え、上流工程やプロジェクトマネジメントの経験、特定業界の業務知識やクラウドの知見は、年齢に見合った価値として評価されやすいでしょう。SIerの特性上、技術力に加えて顧客折衝・調整力も重視される傾向があります。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、DTSの全社員平均658万円（有報）は一つの目安になります。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DTS転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で求人が豊富。SIerの非公開求人を扱うことも。書類添削・面接対策に定評。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SIer・IT企業への転職実績が豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高いSIer・専門職の求人に対応。" },
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
          <h2 className="text-xl font-bold mb-3">DTSへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">安定した独立系SIerへの転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "BIPROGY の転職ガイド", href: "/company/biprogy/" },
              { name: "SCSK の転職ガイド", href: "/company/scsk/" },
              { name: "TIS の転職ガイド", href: "/company/tis/" },
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
