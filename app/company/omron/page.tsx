import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "オムロンの年収は平均820万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "オムロンへのエンジニア転職を実データで解説。有価証券報告書の平均年収820万円（2025年3月期・全従業員平均）、制御機器（FA）・センサ・組込・画像処理／AI・ヘルスケア機器の技術領域、選考の考え方、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "803万円"],
  ["2022年3月期", "849万円"],
  ["2023年3月期", "898万円"],
  ["2024年3月期", "873万円"],
  ["2025年3月期", "820万円"],
];

const basicData: [string, string][] = [
  ["企業名", "オムロン株式会社（東証プライム・6645）"],
  ["事業領域", "制御機器（ファクトリーオートメーション／FA）・電子部品・ソーシアルシステム・ヘルスケア機器等"],
  ["平均年間給与", "820万円（2025年3月期 有価証券報告書・提出会社単体／全従業員平均）"],
  ["平均年齢", "44.5歳（2025年3月期 有価証券報告書・提出会社単体）"],
  ["従業員数", "3,873名（2025年3月期 有価証券報告書・提出会社単体）"],
  ["本社所在地", "京都府京都市下京区"],
  ["技術領域", "FA制御機器の組込ソフトウェア・センサ・画像処理／AI・制御アルゴリズム・ヘルスケア機器組込（具体的言語・ツールは募集職種により異なる）"],
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
    q: "オムロンの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（オムロン株式会社単体）の平均年間給与は820万円、平均年齢は44.5歳です。これは賞与等を含む全従業員平均値であり、技術職（エンジニア）に限定した値ではありません。エンジニア個人の年収は職種・等級・実績により異なります。",
  },
  {
    q: "オムロンはエンジニアの中途採用をしていますか？",
    a: "はい。オムロンはFA（ファクトリーオートメーション）制御機器の組込ソフトウェア・センサ・画像処理/AI・制御アルゴリズム・ヘルスケア機器など多様な技術職でキャリア採用を行っています。募集職種は時期により変動するため、最新の募集要項は公式採用サイトでご確認ください。",
  },
  {
    q: "オムロンではどんな技術領域がありますか？",
    a: "オムロンは制御機器（FA）で世界的な強みを持ち、PLC・センサ・画像処理装置などの制御機器を動かす組込ソフトウェア、画像処理・AIを用いた検査・制御、制御アルゴリズム、さらにヘルスケア機器（血圧計等）の組込まで技術領域が広いのが特徴です。担当する事業・職種により求められるスキルが異なります。",
  },
  {
    q: "オムロンの開発言語・技術スタックは？",
    a: "オムロンは社外向けに統一された技術スタック一覧を体系公開していません。組込・制御領域ではC/C++等が、画像処理・AI領域ではC++/Python等が想定されますが、当ガイドでは推測の言語一覧表は掲載していません。具体的な使用技術は応募する職種の募集要項で確認してください。",
  },
  {
    q: "オムロンの選考フローは？",
    a: "オムロンは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種により変動します。出典のない面接質問リストや等級別年収表は本ガイドでは掲載していません。最新の内容は応募時に確認してください。",
  },
  {
    q: "30代・40代でもオムロンに転職できますか？",
    a: "提出会社単体の平均年齢は44.5歳（2025年3月期・有報）で、ミドル層が中核を占める組織です。FA・組込・画像処理・制御アルゴリズムなどの専門性を持つ30代・40代の即戦力にとっては経験が直接活きるポジションが想定されます。年齢よりも、事業領域に合致する専門スキルと実績が評価の鍵になります。",
  },
  {
    q: "オムロンのFA・制御の経験はどう評価されますか？",
    a: "オムロンは制御機器（FA）で世界的な強みを持つため、PLC・センサ・モーション制御・画像処理といったFA関連の実務経験は親和性が高く評価されやすい傾向があります。製造業出身でFA・組込・制御の業務知識を持つミドルエンジニアにとって、これまでの経験を直接活かしやすいフィールドです。",
  },
];

export default function OmronCompanyPage() {
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
      <ArticleJsonLd title="オムロン エンジニア転職ガイド" description="オムロンへのエンジニア転職を実データで解説。有価証券報告書の平均年収820万円（2025年3月期・全従業員平均）、制御機器（FA）・センサ・組込・画像処理／AI・ヘルスケア機器の技術領域、選考、30代40代の現実までまとめました。" url="/company/omron/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "オムロン" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">オムロン エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 制御機器（FA）・ヘルスケアのメーカー大手のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          オムロンは、制御機器（ファクトリーオートメーション／FA）で世界的な強みを持つ東証プライム上場（証券コード6645）のメーカーです。PLC・センサ・画像処理装置といったFA機器を中核に、ソーシアルシステム・ヘルスケア機器（血圧計など）まで幅広く展開しています。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、30代・40代ミドルエンジニアの視点で転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "オムロン 有価証券報告書（2025年3月期・提出会社単体）",
            "オムロン公式 採用サイト",
            "IRBANK",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              オムロンは<strong>制御機器（FA）で世界的な強みを持つメーカー大手</strong>で、FA制御機器の組込ソフト・センサ・画像処理/AI・制御アルゴリズム・ヘルスケア機器と技術領域が広いのが特徴です。年収は提出会社単体の全従業員平均で820万円（2025年3月期・有報）。製造業出身でFA・組込・画像処理・制御の専門性を持つミドルエンジニアの業務知識が活きやすい環境です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：FA・組込・画像処理・制御アルゴリズムの実務経験があり、製造ドメインで専門性を磨きたい人</li>
              <li>● <strong>向いていない人</strong>：純粋なWeb系のモダン開発のみを志向し、制御・ハードウェアに関心が持てない人</li>
              <li>● <strong>30代・40代</strong>：平均年齢44.5歳と年齢層に幅があり、専門性・実績があれば年齢はハンデになりにくい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年3月期 有価証券報告書（提出会社＝オムロン株式会社単体）に基づく全従業員平均値。技術職に限定した値ではありません。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">制御機器（FA）の世界的な強み</h3>
              <p className="text-sm text-blue-700">オムロンは制御機器（FA）で世界的な強みを持ち、PLC・センサ・画像処理装置などの制御機器を支える組込ソフトウェア・制御アルゴリズムの専門人材を求めています。FA関連の実務経験は親和性が高く評価されやすい傾向があります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">組込・画像処理・AIまで幅広い技術領域</h3>
              <p className="text-sm text-blue-700">制御機器を動かす組込ソフトから、検査・制御に用いる画像処理・AI、制御アルゴリズム、さらにヘルスケア機器の組込まで技術領域が広いのが特徴です。配属する事業・職種により求められるスキルが大きく異なります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">社会課題解決を掲げる企業文化</h3>
              <p className="text-sm text-blue-700">オムロンは「企業は社会の公器である」といった理念のもと、社会課題の解決を事業の軸に据えています（口コミ傾向）。技術力に加え、こうした理念への共感もミドル層の定着・活躍に影響しうるため、応募前に企業理念を理解しておくことが推奨されます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            オムロンは社外向けに統一された技術スタック一覧を体系公開していないため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報・事業内容から確認できる技術領域は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>FA制御機器の組込ソフトウェア</strong>：PLC・センサ・制御機器を動かす組込開発領域。一般にC/C++等が想定される</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>制御アルゴリズム・モーション制御</strong>：高精度な機器制御に関わるアルゴリズム領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>画像処理・AI</strong>：検査・制御に用いる画像処理／機械学習領域。一般にC++/Python等が想定される</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>ヘルスケア機器の組込</strong>：血圧計などのヘルスケア機器に関わる組込開発領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span>具体的な開発言語・内製ツールの統一一覧は公開されていないため、<strong>各募集要項で確認してください</strong>。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: オムロン公式 事業情報・採用サイトで確認できる技術領域に基づく記述。推測の言語表は掲載していません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるオムロンは、有価証券報告書で提出会社単体の平均年間給与を開示しています。<strong>2025年3月期は820万円（平均年齢44.5歳・全従業員平均）</strong>です。
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
          <p className="text-xs text-slate-400 mb-4">出典: オムロン 有価証券報告書（各年3月期・提出会社単体）、IRBANK集計。いずれも技術職に限らない<strong>全従業員平均</strong>の平均年間給与です。エンジニア個人の年収は職種・等級により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記はエンジニア単独の値ではなく全社員（技術職以外も含む）の平均です。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ガイドでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>オムロンは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種や時期により変動します。最新の内容は公式採用サイトでご確認ください。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>FA・組込・画像処理・制御アルゴリズムなど、配属領域に合致する専門性と実績</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ハードウェアと連携した課題解決力・現物への理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>社会課題解決を掲げる企業理念への共感</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チームでの協働姿勢と長期的なキャリア形成への意欲</li>
          </ul>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              オムロンは提出会社単体の平均年齢44.5歳（2025年3月期・有報）と、ミドル層が中核を占める組織です。年齢構成的に30代・40代で中途入社しても浮きにくく、<strong>FA・組込・画像処理・制御アルゴリズムなどの専門性を持つミドルエンジニアにとって、これまでの業務知識が直接活きやすい</strong>のが特徴です。制御機器（FA）で世界的な強みを持つため、製造業出身者の中途評価が高い傾向にあります。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。オムロンの全従業員平均（820万円）はこれを上回りますが、これは全社平均であり、入社時の提示は職種・等級次第です。30代・40代は「自分が当てはまる職種・等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              関連領域として<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込エンジニアの転職</Link>や<Link href="/skill/ai-ml/" className="text-blue-600 hover:underline">AI・機械学習エンジニアの転職</Link>、<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業エンジニアの転職</Link>、<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オムロン転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・組込・制御領域に強く、技術面接対策のサポートも受けられる。" },
              { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。大手メーカーの専門職・高年収ポジションのスカウトが届きやすい。" },
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・大手の求人を幅広くカバー。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">特定企業の求人保有状況は時期により変動します。複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">オムロンへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">FA・組込・画像処理領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "京セラ エンジニア転職ガイド", href: "/company/kyocera/" },
              { name: "村田製作所 エンジニア転職ガイド", href: "/company/murata/" },
              { name: "Preferred Networks 転職ガイド", href: "/company/preferred-networks/" },
              { name: "組込エンジニアの転職", href: "/skill/embedded/" },
              { name: "製造業エンジニアの転職", href: "/industry/manufacturing/" },
              { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" },
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
