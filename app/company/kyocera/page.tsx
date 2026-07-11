import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/kyocera/" },
  title: "京セラの転職難易度と年収は？平均693万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "京セラへのエンジニア転職を実データで解説。有価証券報告書の平均年収693万円（2025年3月期・全従業員平均）、電子部品・半導体部品・通信機器・組込の技術領域、選考の考え方、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "684万円"],
  ["2022年3月期", "725万円"],
  ["2023年3月期", "723万円"],
  ["2024年3月期", "692万円"],
  ["2025年3月期", "693万円"],
];

const basicData: [string, string][] = [
  ["企業名", "京セラ株式会社（東証プライム・6971）"],
  ["事業領域", "電子部品・半導体関連部品・ファインセラミック・通信機器（端末/通信モジュール）・産業機械・スマートエナジー等"],
  ["平均年間給与", "693万円（2025年3月期 有価証券報告書・提出会社単体／全従業員平均）"],
  ["平均年齢", "40.0歳（2025年3月期 有価証券報告書・提出会社単体）"],
  ["従業員数", "20,976名（2025年3月期 有価証券報告書・提出会社単体）"],
  ["本社所在地", "京都府京都市伏見区"],
  ["技術領域", "電子部品・半導体パッケージ・通信機器・組込ソフトウェア・IoT／DX（具体的言語・ツールは募集職種により異なる）"],
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
    q: "京セラの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（京セラ株式会社単体）の平均年間給与は693万円、平均年齢は40.0歳です。これは賞与・基準外賃金を含む全従業員平均値であり、技術職（エンジニア）に限定した値ではありません。エンジニア個人の年収は職種・等級・実績により異なります。",
  },
  {
    q: "京セラはエンジニアの中途採用をしていますか？",
    a: "はい。京セラはキャリア採用サイトを運営し、技術系を中心に幅広い職種で中途採用を行っています。電子部品・半導体関連部品・通信機器・組込ソフトウェア・IoT/DXなど多様な事業領域があり、募集職種は時期により変動します。最新の募集要項は公式キャリア採用サイトでご確認ください。",
  },
  {
    q: "京セラではどんな技術領域がありますか？",
    a: "京セラは多角化した事業を持ち、ファインセラミック・電子部品・半導体パッケージといったハードウェア領域から、通信機器・端末の組込ソフトウェア、社内のIoT/DX推進まで技術領域が広いのが特徴です。担当する事業・職種により求められるスキルが大きく異なるため、具体的な言語・ツールは各募集要項で確認が必要です。",
  },
  {
    q: "京セラの開発言語・技術スタックは？",
    a: "京セラは社外向けに統一された技術スタック一覧を体系公開していません。組込領域では一般にC/C++などが、社内システム・DX領域ではモダンな言語が想定されますが、当ガイドでは推測の言語一覧表は掲載していません。具体的な使用技術は応募する職種の募集要項で確認してください。",
  },
  {
    q: "京セラの選考フローは？",
    a: "京セラは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種により変動します。出典のない面接質問リストや等級別年収表は本ガイドでは掲載していません。最新の内容は応募時に確認してください。",
  },
  {
    q: "30代・40代でも京セラに転職できますか？",
    a: "提出会社単体の平均年齢は40.0歳（2025年3月期・有報）で、ミドル層が中核を占める組織です。電子部品・半導体・組込などの専門性を持つ30代・40代の即戦力にとっては、経験が直接活きるポジションが想定されます。年齢よりも、事業領域に合致する専門スキルと実績が評価の鍵になります。",
  },
  {
    q: "京セラの働き方や社風の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、大手メーカーとしての安定性・福利厚生を評価する声がある一方、京セラフィロソフィに代表される独自の経営理念・企業文化への適性が問われるという傾向の指摘も見られます（2026年6月時点の口コミ傾向）。実態は部署・職種により異なります。",
  },
];

export default function KyoceraCompanyPage() {
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
      <ArticleJsonLd title="京セラ エンジニア転職ガイド" description="京セラへのエンジニア転職を実データで解説。有価証券報告書の平均年収693万円（2025年3月期・全従業員平均）、電子部品・半導体部品・通信機器・組込の技術領域、選考、30代40代の現実までまとめました。" url="/company/kyocera/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "京セラ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">京セラ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 電子部品・半導体・通信のメーカー大手のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】京セラの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 京セラの有価証券報告書（2025年3月期・提出会社単体）に記載された平均年間給与は693万円、平均年齢は40.0歳です（技術職に限定しない全従業員平均）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与693万円（2025年3月期 有価証券報告書・提出会社単体／全従業員平均、平均年齢40.0歳）</li><li>・近年は680〜720万円台で推移（2022年3月期725万円→2024年3月期692万円→2025年3月期693万円）</li><li>・賞与・基準外賃金を含む全従業員平均で、エンジニア個人の年収は職種・等級・実績により異なる</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          京セラは、ファインセラミックを起点に電子部品・半導体関連部品・通信機器・産業機械など多角的に事業を展開する東証プライム上場（証券コード6971）の電子部品・電子機器メーカーです。本ページでは、有価証券報告書・公式キャリア採用情報・口コミプラットフォームの公開情報をもとに、30代・40代ミドルエンジニアの視点で転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "京セラ 有価証券報告書（2025年3月期・提出会社単体）",
            "京セラ公式 キャリア採用サイト",
            "IRBANK",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              京セラは<strong>電子部品・半導体関連部品・通信機器・組込まで技術領域が広い、多角化したメーカー大手</strong>です。年収は提出会社単体の全従業員平均で693万円（2025年3月期・有報）。製造業出身で電子部品・半導体・組込の専門性を持つミドルエンジニアにとって、これまでの業務知識が活きやすい環境です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：電子部品・半導体・通信・組込の実務経験があり、ハードウェアに近い領域で専門性を磨きたい人</li>
              <li>● <strong>向いていない人</strong>：純粋なWeb系のモダン開発のみを志向し、製造業ドメインに関心が持てない人</li>
              <li>● <strong>30代・40代</strong>：平均年齢40.0歳と年齢層に幅があり、専門性・実績があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年3月期 有価証券報告書（提出会社＝京セラ株式会社単体）に基づく全従業員平均値。賞与・基準外賃金を含み、技術職に限定した値ではありません。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多角化した事業による幅広い技術領域</h3>
              <p className="text-sm text-petrol-deep">京セラはファインセラミック・電子部品・半導体関連部品・通信機器・産業機械・スマートエナジーなど多角的な事業を持ち、ハードウェアから組込ソフト、社内DXまで技術領域が広いのが特徴です。配属事業によって求められるスキルセットが大きく異なります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">半導体・電子部品の需要拡大を背景とした登用</h3>
              <p className="text-sm text-petrol-deep">半導体・電子部品は中長期的に需要が拡大している領域で、製造業出身のミドルエンジニアの専門性が評価されやすい傾向があります。電子部品・半導体パッケージなどの実務経験は即戦力として親和性が高いと考えられます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独自の経営理念・企業文化</h3>
              <p className="text-sm text-petrol-deep">京セラフィロソフィに代表される独自の経営理念・企業文化を持つ点が特徴です（口コミ傾向）。技術力だけでなく、こうした文化への適性も中途入社後の活躍に影響しうるため、応募前に企業理念を理解しておくことが推奨されます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            京セラは社外向けに統一された技術スタック一覧を体系公開していないため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報・事業内容から確認できる技術領域は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>電子部品・半導体パッケージ</strong>：コンデンサ・コネクタ・半導体実装用部品などの設計・開発領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>通信機器・端末</strong>：通信モジュール・端末の組込ソフトウェア開発領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>組込ソフトウェア</strong>：機器制御に関わる組込開発領域。一般にC/C++等が想定されるが公式の統一情報はなし</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>IoT／DX・社内システム</strong>：製造現場のIoT化・DX推進領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>具体的な開発言語・内製ツールの統一一覧は公開されていないため、<strong>各募集要項で確認してください</strong>。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 京セラ公式 事業情報・キャリア採用サイトで確認できる技術領域に基づく記述。推測の言語表は掲載していません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業である京セラは、有価証券報告書で提出会社単体の平均年間給与を開示しています。<strong>2025年3月期は693万円（平均年齢40.0歳・全従業員平均）</strong>です。
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
          <p className="text-xs text-slate-400 mb-4">出典: 京セラ 有価証券報告書（各年3月期・提出会社単体）、IRBANK集計。いずれも技術職に限らない<strong>全従業員平均</strong>の平均年間給与（賞与・基準外賃金を含む）です。エンジニア個人の年収は職種・等級により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記はエンジニア単独の値ではなく、製造現場を含む全社員（技術職以外も含む）の平均です。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ガイドでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>京セラは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種や時期により変動します。最新の内容は<a href="https://www.kyocera.co.jp/recruit/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用サイト</a>でご確認ください。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>電子部品・半導体・通信・組込など、配属事業に合致する専門性と実績</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術力を基盤としたプロジェクトの実行力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>京セラフィロソフィに代表される経営理念・企業文化への適性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>長期的なキャリア形成・チームでの協働姿勢</li>
          </ul>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              京セラは提出会社単体の平均年齢40.0歳（2025年3月期・有報）と、ミドル層が中核を占める組織です。年齢構成的に30代・40代で中途入社しても浮きにくく、<strong>電子部品・半導体・組込などの専門性を持つミドルエンジニアにとって、これまでの業務知識が直接活きやすい</strong>のが特徴です。半導体・電子部品は需要が逼迫している領域で、製造業出身者の中途評価が高い傾向にあります。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。京セラの全従業員平均（693万円）はこれを上回りますが、これは製造現場を含む全社平均であり、入社時の提示は職種・等級次第です。30代・40代は「自分が当てはまる職種・等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              関連領域として<Link href="/skill/embedded/" className="text-petrol hover:underline">組込エンジニアの転職</Link>や<Link href="/industry/manufacturing/" className="text-petrol hover:underline">製造業エンジニアの転職</Link>、<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">京セラ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・組込・電子部品領域に強く、技術面接対策のサポートも受けられる。" },
              { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。大手メーカーの専門職・高年収ポジションのスカウトが届きやすい。" },
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・大手の求人を幅広くカバー。" },
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
          <h2 className="text-xl font-bold mb-3">京セラへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">電子部品・半導体・組込領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "村田製作所 エンジニア転職ガイド", href: "/company/murata/" },
              { name: "ルネサスエレクトロニクス 転職ガイド", href: "/company/renesas/" },
              { name: "オムロン エンジニア転職ガイド", href: "/company/omron/" },
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
