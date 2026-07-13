import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/renesas/" },
  title: "ルネサスエレクトロニクスの年収は平均809万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ルネサスエレクトロニクスへのエンジニア転職を実データで解説。有価証券報告書の平均年収809万円（2024年12月期・全従業員平均）、半導体（マイコン/SoC/アナログ）・組込・EDA・ファームウェアの技術領域、選考の考え方、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "791万円"],
  ["2021年12月期", "882万円"],
  ["2022年12月期", "874万円"],
  ["2023年12月期", "889万円"],
  ["2024年12月期", "809万円"],
];

const basicData: [string, string][] = [
  ["企業名", "ルネサスエレクトロニクス株式会社（東証プライム・6723）"],
  ["事業領域", "半導体（マイコン・SoC・アナログ・パワー半導体）の設計・開発・製造"],
  ["平均年間給与", "809万円（2024年12月期 有価証券報告書・提出会社単体／全従業員平均）"],
  ["平均年齢", "48.5歳（2024年12月期 有価証券報告書・提出会社単体）"],
  ["従業員数", "6,482名（2024年12月期 有価証券報告書・提出会社単体）"],
  ["本社所在地", "東京都江東区"],
  ["技術領域", "半導体設計（回路/論理/物理）・EDA・組込ソフトウェア／ファームウェア・ドライバ・AI（具体的言語・ツールは募集職種により異なる）"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術領域（公開情報の範囲）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フローについて"],
  ["interview", "評価で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "ルネサスエレクトロニクスの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、提出会社（ルネサスエレクトロニクス株式会社単体）の平均年間給与は809万円、平均年齢は48.5歳です。これは賞与等を含む全従業員平均値であり、技術職（エンジニア）に限定した値ではありません。エンジニア個人の年収は職種・等級・実績により異なります。",
  },
  {
    q: "ルネサスはエンジニアの中途採用をしていますか？",
    a: "はい。ルネサスは半導体の設計開発・組込ソフトウェア・ファームウェア・EDA・AIなど多様な技術職でキャリア採用を行っています。半導体は世界的に需要が逼迫している領域で中途人材の評価が高く、募集職種は時期により変動します。最新の募集要項は公式採用サイトでご確認ください。",
  },
  {
    q: "ルネサスではどんな技術領域がありますか？",
    a: "ルネサスはマイコン・SoC・アナログ・パワー半導体を手がける半導体大手で、回路設計・論理設計・物理設計といった半導体設計からEDA（設計自動化）、製品に載せる組込ソフトウェア・ファームウェア・ドライバ、車載・産業向けAIまで技術領域が広いのが特徴です。担当領域により求められるスキルが大きく異なります。",
  },
  {
    q: "ルネサスの開発言語・技術スタックは？",
    a: "ルネサスは社外向けに統一された技術スタック一覧を体系公開していません。半導体設計ではVerilog/SystemVerilog/VHDL等のHDLやEDAツールが、組込ソフト・ファームウェアではC/C++等が、AI領域ではPython等が想定されますが、当ガイドでは推測の言語一覧表は掲載していません。具体的な使用技術は応募する職種の募集要項で確認してください。",
  },
  {
    q: "ルネサスの選考フローは？",
    a: "ルネサスは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種により変動します。出典のない面接質問リストや等級別年収表は本ガイドでは掲載していません。最新の内容は応募時に確認してください。",
  },
  {
    q: "30代・40代でもルネサスに転職できますか？",
    a: "提出会社単体の平均年齢は48.5歳（2024年12月期・有報）と、ミドル〜シニア層が中核の組織です。半導体設計・組込・ファームウェアなどの専門性を持つ40代エンジニアにとっては経験が直接活きるポジションが想定されます。半導体は需要逼迫で経験者評価が高く、年齢よりも専門スキルと実績が評価の鍵になります。",
  },
  {
    q: "なぜ半導体エンジニアは中途で評価されやすいのですか？",
    a: "半導体は世界的に需要が逼迫している一方、回路設計・組込・ファームウェアといった専門人材が不足しています。経験者は育成に時間がかかるため、即戦力となるミドルエンジニアの市場価値が高い傾向にあります。製造業・電子部品出身で半導体に近い業務知識を持つ人にとってもキャリアの選択肢になりえます。",
  },
];

export default function RenesasCompanyPage() {
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
      <ArticleJsonLd title="ルネサスエレクトロニクス エンジニア転職ガイド" description="ルネサスへのエンジニア転職を実データで解説。有価証券報告書の平均年収809万円（2024年12月期・全従業員平均）、半導体（マイコン/SoC/アナログ）・組込・EDA・ファームウェアの技術領域、選考、30代40代の現実までまとめました。" url="/company/renesas/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ルネサスエレクトロニクス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ルネサスエレクトロニクス エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 半導体（マイコン・SoC）大手のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ルネサスエレクトロニクスの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: ルネサスエレクトロニクス株式会社（提出会社単体）の平均年間給与は809万円です（2024年12月期 有価証券報告書・平均年齢48.5歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 809万円（2024年12月期 有報・提出会社単体）。技術職に限らない全従業員平均です。</li><li>・推移は2023年12月期889万円から2024年12月期809万円へ低下（各期 有報・単体）。</li><li>・エンジニア職に限定した公式な提示レンジは非公開。半導体は需要逼迫で経験者評価が高く、実額は職種・等級により個別求人で確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          ルネサスエレクトロニクスは、マイコン・SoC・アナログ・パワー半導体を手がける東証プライム上場（証券コード6723）の半導体メーカーです。車載・産業・IoTなど幅広い分野に半導体を供給しています。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、30代・40代ミドルエンジニアの視点で転職の実態を整理します。半導体は需要逼迫により中途人材の評価が高い領域です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ルネサスエレクトロニクス 有価証券報告書（2024年12月期・提出会社単体）",
            "ルネサスエレクトロニクス公式 採用サイト",
            "IRBANK",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ルネサスは<strong>マイコン・SoC・アナログ・パワー半導体を手がける半導体大手</strong>で、半導体設計・EDA・組込ソフト・ファームウェアと技術領域が広いのが特徴です。年収は提出会社単体の全従業員平均で809万円（2024年12月期・有報）。半導体は需要逼迫で経験者の市場価値が高く、製造業・電子部品出身で半導体に近い専門性を持つミドルエンジニアの業務知識が活きやすい環境です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：半導体設計（HDL/EDA）・組込・ファームウェアの実務経験があり、半導体ドメインで専門性を磨きたい人</li>
              <li>● <strong>向いていない人</strong>：純粋なWeb系のモダン開発のみを志向し、半導体・低レイヤーに関心が持てない人</li>
              <li>● <strong>30代・40代</strong>：平均年齢48.5歳とシニア層も多く、専門性・実績があれば年齢はハンデになりにくい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2024年12月期 有価証券報告書（提出会社＝ルネサスエレクトロニクス株式会社単体）に基づく全従業員平均値。技術職に限定した値ではありません。ルネサスの決算期は12月です。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">半導体の需要逼迫を背景とした積極採用</h3>
              <p className="text-sm text-petrol-deep">半導体は車載・産業・IoTの拡大とともに世界的に需要が逼迫しており、回路設計・組込・ファームウェアといった専門人材が不足しています。育成に時間がかかるため、即戦力となるミドルエンジニアの市場価値が高い傾向があります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">半導体設計から組込ソフトまで幅広いレイヤー</h3>
              <p className="text-sm text-petrol-deep">回路設計・論理設計・物理設計といった半導体設計から、EDA（設計自動化）、製品に載せる組込ソフトウェア・ファームウェア・ドライバまで技術領域が広く、低レイヤーに近い専門性を磨ける環境です。配属領域により求められるスキルが大きく異なります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバルな開発体制</h3>
              <p className="text-sm text-petrol-deep">ルネサスは海外拠点・グローバルチームでの開発体制を持ち、ポジションによっては英語を含むコミュニケーションが求められます（口コミ傾向）。グローバル環境で半導体の専門性を発揮したいミドル層に向きます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ルネサスは社外向けに統一された技術スタック一覧を体系公開していないため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報・事業内容から確認できる技術領域は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>半導体設計</strong>：回路設計・論理設計・物理設計などの設計領域。一般にVerilog/SystemVerilog/VHDL等のHDLが想定される</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>EDA（設計自動化）</strong>：半導体設計フローを支えるツール・自動化領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>組込ソフトウェア・ファームウェア・ドライバ</strong>：マイコン・SoC上で動くソフトの開発領域。一般にC/C++等が想定される</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI・エッジ向け技術</strong>：車載・産業向けのAI・エッジ推論に関わる領域。一般にPython等が想定される</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>具体的な開発言語・EDAツールの統一一覧は公開されていないため、<strong>各募集要項で確認してください</strong>。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ルネサス公式 事業情報・採用サイトで確認できる技術領域に基づく記述。推測の言語表は掲載していません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるルネサスは、有価証券報告書で提出会社単体の平均年間給与を開示しています。<strong>2024年12月期は809万円（平均年齢48.5歳・全従業員平均）</strong>です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（提出会社単体・全従業員平均）</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([year, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{year}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: ルネサスエレクトロニクス 有価証券報告書（各年12月期・提出会社単体）、IRBANK集計。いずれも技術職に限らない<strong>全従業員平均</strong>の平均年間給与です。エンジニア個人の年収は職種・等級により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記はエンジニア単独の値ではなく全社員（技術職以外も含む）の平均です。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ガイドでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。なお半導体の専門人材は需要逼迫により、ポジションによっては高めの提示が期待できる領域でもあります。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>ルネサスは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種や時期により変動します。最新の内容は公式採用サイトでご確認ください。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>半導体設計・組込・ファームウェアなど、配属領域に合致する深い専門性と実績</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>低レイヤー・ハードウェアに近い領域での課題解決力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>グローバルチームでの協働を含むコミュニケーション（ポジションにより程度は異なる）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>長期的に半導体の専門性を磨くキャリア志向</li>
          </ul>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ルネサスは提出会社単体の平均年齢48.5歳（2024年12月期・有報）と、ミドル〜シニア層が中核を占める組織です。年齢構成的に30代・40代で中途入社しても浮きにくく、<strong>半導体設計・組込・ファームウェアなどの専門性を持つミドルエンジニアにとって、これまでの業務知識が直接活きやすい</strong>のが特徴です。半導体は需要逼迫により経験者の市場価値が高く、製造業・電子部品出身者の中途評価も高い傾向にあります。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ルネサスの全従業員平均（809万円）はこれを上回りますが、これは全社平均であり、入社時の提示は職種・等級次第です。半導体の専門人材は需要逼迫で高めの提示が期待できる領域でもあるため、30代・40代は「自分の専門性の市場価値」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              関連領域として<Link href="/skill/embedded/" className="text-petrol hover:underline">組込エンジニアの転職</Link>や<Link href="/industry/manufacturing/" className="text-petrol hover:underline">製造業エンジニアの転職</Link>、<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ルネサス転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・組込・半導体領域に強く、技術面接対策のサポートも受けられる。" },
              { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。半導体・大手メーカーの専門職スカウトが届きやすい。" },
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。半導体・メーカーの求人を幅広くカバー。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">特定企業の求人保有状況は時期により変動します。複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ルネサスへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">半導体・組込・ファームウェア領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "東京エレクトロン 転職ガイド", href: "/company/tokyo-electron/" },
              { name: "京セラ エンジニア転職ガイド", href: "/company/kyocera/" },
              { name: "村田製作所 エンジニア転職ガイド", href: "/company/murata/" },
              { name: "組込エンジニアの転職", href: "/skill/embedded/" },
              { name: "製造業エンジニアの転職", href: "/industry/manufacturing/" },
              { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" },
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
