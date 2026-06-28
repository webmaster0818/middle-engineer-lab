import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "IIJの年収は平均747万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "株式会社インターネットイニシアティブ（IIJ・3774）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収747万円(2026年3月期・全社員平均)、ネットワーク/クラウド/セキュリティの技術領域、選考フロー・面接観点、30代40代の戦い方まで。確認できない数値は記載していません。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "738万円", "—"],
  ["2023年3月期", "741万円", "—"],
  ["2024年3月期", "738万円", "37.6歳"],
  ["2025年3月期", "726万円", "37.4歳"],
  ["2026年3月期", "747万円", "37.5歳"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社インターネットイニシアティブ（IIJ・証券コード3774・東証プライム）"],
  ["事業領域", "法人向けネットワーク（バックボーン）、クラウド、セキュリティ、システムインテグレーション、モバイル（IIJmio含む）、ATM運営など"],
  ["平均年間給与", "747万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "37.5歳（2026年3月期 有価証券報告書）"],
  ["平均勤続年数", "約9.3年（2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都千代田区"],
  ["技術スタック（公開情報）", "ネットワーク（ルーティング/バックボーン）、クラウド基盤、セキュリティ、IoT、サービス開発。日本のインターネット黎明期からの技術発信で知られる"],
  ["採用ページ", "iij.ad.jp/recruit（採用サイト）"],
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
  { id: "middle", label: "30代・40代から見たIIJ" },
  { id: "agents", label: "IIJ転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "IIJのエンジニア転職の難易度は高い？",
    a: "日本のインターネットの草分けとして技術力に定評があり、ネットワーク・クラウド・セキュリティといった専門領域の実務経験が評価されます。職種が幅広く通年で募集しているため門戸はありますが、希望領域での実務経験や深い技術理解が求められる傾向です。インフラ・ネットワークのバックグラウンドを持つ30代・40代にとっては相性の良い選択肢です。",
  },
  {
    q: "IIJのエンジニアの平均年収はいくら？",
    a: "株式会社インターネットイニシアティブの有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は747万円、平均年齢は37.5歳です（エンジニア職に限った数値ではなく全社員平均）。近年は720〜740万円台で推移しています。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "IIJの技術スタックは？",
    a: "IIJは法人向けネットワーク（バックボーン）、クラウド基盤、セキュリティ、IoT、各種サービス開発を手がける企業で、ネットワーク技術（ルーティング・バックボーン運用）やクラウド・セキュリティの専門性が中核です。日本のインターネット黎明期からの技術発信で知られ、技術ブログやエンジニア向けの情報発信も活発です。部署・サービスにより扱う技術は大きく異なります。",
  },
  {
    q: "IIJの選考フローは？",
    a: "IIJ公式採用サイトによると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。希望領域・職種に応じて専門性や実務経験が確認されます。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "IIJはどんな事業をしている会社ですか？",
    a: "IIJ（インターネットイニシアティブ）は、日本で商用インターネット接続サービスを先駆的に開始した企業で、法人向けネットワーク（バックボーン）、クラウド、セキュリティ、システムインテグレーション、モバイル（IIJmio）などを展開する東証プライム上場企業（証券コード3774）です。社会の通信インフラを支える基盤事業に強みを持ちます。",
  },
  {
    q: "IIJはリモートワークできる？",
    a: "IIJはリモートワークを併用できる体制を採っているとされます。OpenWork等の口コミでは、技術力の高さや裁量、技術者を尊重する文化を評価する声がある一方、領域・職種により業務特性が異なる点を挙げる意見もあります（2026年6月時点の口コミ傾向）。最新の勤務条件は応募時に各求人で確認してください。",
  },
  {
    q: "IIJへの転職で有利な経験は？",
    a: "ネットワーク（ルーティング・バックボーン運用）、クラウド基盤の設計・構築・運用、セキュリティ、IoT・サービス開発などの実務経験が評価されやすい傾向です。30代・40代では、専門領域での深い経験に加えて、プロジェクト推進やチームをリードした経験が強みになります。",
  },
];

export default function IijCompanyPage() {
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
        title="IIJ エンジニア転職ガイド"
        description="IIJへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収747万円(2026年3月期)、ネットワーク/クラウド/セキュリティの技術領域、選考フロー、口コミ傾向まで。"
        url="/company/iij/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Goの転職ガイド", href: "/skill/go/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "IIJ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">IIJ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 日本のインターネットを支えてきたネットワーク・クラウドの老舗</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社インターネットイニシアティブ（IIJ・証券コード3774・東証プライム）は、日本で商用インターネット接続を先駆けて始めた企業で、法人向けネットワーク（バックボーン）・クラウド・セキュリティ・モバイル（IIJmio）などを展開する通信インフラの老舗です。
          このページでは、有価証券報告書・公式採用サイトといった一次情報をもとに、IIJへのエンジニア転職の難易度・年収・技術領域・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社インターネットイニシアティブ 有価証券報告書（2026年3月期）",
            "IIJ 採用サイト（iij.ad.jp/recruit）",
            "IRBANK（IIJ 平均年収推移・3774）",
            "OpenWork（IIJ 社員クチコミ）",
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
            <p className="font-bold text-blue-900 mb-3">結論：ネットワーク・クラウド・セキュリティの専門性を深めたいインフラ系エンジニア向き。難易度は中。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>日本のインターネットを支えてきた技術力の高い組織。ネットワーク・クラウド・セキュリティの経験が活きる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は747万円（2026年3月期 有報）。安定したインフラ事業を背景に堅実な水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>技術者を尊重する文化と技術発信の活発さ。専門性を軸にキャリアを築きたい30代・40代に向く。</li>
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
            出典: 株式会社インターネットイニシアティブ 有価証券報告書（2026年3月期）／IIJ採用サイト／IRBANK（3774）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">社会の通信インフラを支える基盤事業</h3>
              <p className="text-sm text-petrol-deep">IIJは法人向けネットワーク（バックボーン）やクラウド基盤など、社会の通信インフラに近い領域を担っています。ミッションクリティカルなネットワーク・クラウドの設計・運用に深く関わりたいエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術者を尊重する文化と活発な技術発信</h3>
              <p className="text-sm text-petrol-deep">日本のインターネット黎明期からの歴史を持ち、技術への深いこだわりと活発な技術発信で知られます。専門性を高く評価する文化があり、自分の技術領域を深く掘り下げたいエンジニアに適しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ネットワーク・クラウド・セキュリティ・IoTと幅広い領域</h3>
              <p className="text-sm text-petrol-deep">バックボーン運用からクラウド、セキュリティ、IoT、各種サービス開発まで幅広い技術領域を擁します。インフラ・ネットワークの専門性を軸にしつつ、隣接領域にも広げていきたいエンジニアにとって選択肢が豊富です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はIIJ採用サイト・技術発信などの公開情報に基づく技術領域です。ネットワーク・クラウド・セキュリティが中核ですが、部署・サービスにより扱う技術は大きく異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ネットワーク", "バックボーン運用 / ルーティング / 大規模ネットワーク設計・構築"],
                  ["クラウド・基盤", "自社クラウドサービス基盤、インフラ運用、サービス開発"],
                  ["セキュリティ・その他", "セキュリティ、IoT、モバイル（IIJmio）など。サービスにより技術は異なる"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: IIJ採用サイト・技術発信等の公開情報。具体的な使用言語の網羅的な公表は限定的なため、断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            IIJは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社インターネットイニシアティブ 有価証券報告書（各期）／IRBANK（3774）。近年は720〜740万円台で推移しています。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、IIJの全社員平均はこれを上回ります。
            個別のエンジニア求人の提示額はスキル評価で個別決定されるため、本ページでは確認できる出典のない等級別レンジは掲載していません。実際の提示額は求人票またはエージェント経由でご確認ください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            IIJ公式採用サイトに基づく標準的な流れです。最新の内容は<a href="https://www.iij.ad.jp/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用サイト</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "希望領域・職種から応募し書類を提出。専門性・実務経験が確認される。"],
              ["面接（複数回）", "現場エンジニア・マネージャー等との面接。技術的な深さや経験、適性が問われる。"],
              ["適性確認等", "ポジションにより適性検査や技術確認が行われる場合がある。"],
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
          <p className="text-xs text-slate-400 mt-3">出典: IIJ採用サイトの要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用サイト・技術発信などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ネットワーク（ルーティング・バックボーン運用）の実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド基盤の設計・構築・運用、セキュリティの知見</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>専門領域への深い理解と、技術を自分の言葉で語れること</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロジェクト推進・チームをリードした経験</li>
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
                <li>技術力の高さ・技術者を尊重する文化を評価する声（OpenWork）</li>
                <li>ネットワーク・クラウドなど専門性を深められる環境への評価（OpenWork）</li>
                <li>インフラ事業の安定性を評価する声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>領域・職種により業務特性や負荷が異なる</li>
                <li>急成長のWeb系と比べると年収の伸びは堅実型という見方もある</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（IIJ 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たIIJ</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              IIJは平均年齢37.5歳（2026年3月期）と落ち着いた組織で、技術者を尊重する文化を持ちます。30代・40代のミドルエンジニアにとっては、「ネットワーク・クラウド・セキュリティといった専門性を、安定した基盤事業の中で深めたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              バックボーン運用やクラウド基盤の設計・構築・運用、セキュリティといった専門領域での深い経験は、年齢に見合った価値として評価されやすいでしょう。インフラ・ネットワークのバックグラウンドを持つミドルにとっては、これまでの経験をそのまま活かしやすい環境です。
            </p>
            <p>
              年収面では、IIJの全社員平均747万円（有報）は安定したインフラ事業を背景にした堅実な水準です。急成長Web系のような大幅な伸びを最優先するなら他の選択肢との比較も有効ですが、専門性と安定性を重視するなら有力な候補になります。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IIJ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。インフラ・ネットワーク系の求人にも対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、インフラ・SI領域にも実績。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高い専門職の求人に対応。ミドル層に強み。" },
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
          <h2 className="text-xl font-bold mb-3">IIJへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ネットワーク・クラウド・インフラ系の転職に強いエージェントに無料相談してみませんか？</p>
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
              { name: "さくらインターネット の転職ガイド", href: "/company/sakura-internet/" },
              { name: "NTT（日本電信電話） の転職ガイド", href: "/company/ntt/" },
              { name: "KDDI の転職ガイド", href: "/company/kddi/" },
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
