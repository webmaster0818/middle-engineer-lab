import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "日立製作所 エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "日立製作所へのエンジニア転職を徹底解説。年収650〜1000万円、Lumada・社会イノベーション・DX領域の技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "日立製作所のエンジニア採用プロセスは？",
    a: "書類選考 → 適性検査 → 技術面接（1〜2回）→ 最終面接の流れです。ジョブ型採用を導入しており、職種別の専門面接が行われます。",
  },
  {
    q: "日立製作所のエンジニア年収はどのくらい？",
    a: "ジュニアで550〜700万円、ミドルで700〜900万円、シニアで900〜1100万円が目安です。ジョブグレード制で成果に応じた評価がされます。",
  },
  {
    q: "Lumadaとは何ですか？",
    a: "日立のデジタルイノベーションプラットフォームです。IoT、AI、ビッグデータを活用した社会インフラのDXを推進し、エネルギー・交通・産業分野で展開しています。",
  },
  {
    q: "日立製作所で英語力は必要？",
    a: "グローバル事業比率が60%超のため英語力は重要です。Global Logic（海外IT子会社）との連携も多く、TOEIC 700点以上が目安です。",
  },
  {
    q: "日立製作所の働き方は？",
    a: "ジョブ型人事導入に伴い、テレワークやフレックスタイムが定着。従来の日本的大企業から、グローバル企業への変革が進んでいます。",
  },
  {
    q: "日立製作所への転職で有利な経験は？",
    a: "IoT/OT領域、クラウドインフラ、データ分析、エネルギー・交通などの社会インフラ知識が有利です。Java/Python/クラウド経験者は特に需要があります。",
  },
];

export default function HitachiCompanyPage() {
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
      <ArticleJsonLd title="日立製作所 エンジニア転職ガイド" description="日立製作所へのエンジニア転職を徹底解説。年収650〜1000万円、Lumada・社会イノベーションの技術基盤を現場目線でまとめました。" url="/company/hitachi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "日立製作所" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">日立製作所 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 社会イノベーション・Lumadaで変革する総合電機メーカー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社日立製作所"],
                ["業種", "総合電機・IT・社会インフラ"],
                ["従業員数", "約322,000名（連結）"],
                ["平均年収", "650〜1,000万円（エンジニア職）"],
                ["本社所在地", "東京都千代田区"],
                ["技術スタック", "Java / Python / C++ / AWS / Azure / Hadoop / IoT"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Lumadaプラットフォームによる社会DX</h3>
              <p className="text-sm text-blue-700">IoT・AI・ビッグデータを活用した「Lumada」プラットフォームで、エネルギー・鉄道・製造業などの社会インフラDXを推進。IT×OTの融合領域で独自の技術的チャレンジがあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバルIT企業への変革</h3>
              <p className="text-sm text-blue-700">GlobalLogic買収によりグローバルIT企業への変革を加速中。海外売上比率60%超で、グローバルプロジェクトに参画できる機会が増えています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ジョブ型人事で専門性を評価</h3>
              <p className="text-sm text-blue-700">ジョブ型人事制度の導入により、専門性の高いエンジニアが正当に評価される仕組みに。技術スペシャリストパスが整備され、マネジメントに進まなくても高い報酬を得られます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Python / C++ いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>IoT・データ分析・AI活用の実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウドインフラ（AWS / Azure）の構築・運用</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>社会インフラ（エネルギー・交通・製造）のドメイン知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロジェクトマネジメント・上流設計の経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語力（TOEIC 700点以上推奨）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアSE", "J1-J2", "500〜700万円"],
                  ["ミドルSE", "J3", "700〜900万円"],
                  ["シニアSE", "J4", "900〜1,100万円"],
                  ["テクニカルリード", "J5", "1,100〜1,400万円"],
                  ["マネージャー", "M1+", "1,100〜1,400万円"],
                ].map(([pos, level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日立製作所転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手メーカーの求人が充実。日立グループの求人を幅広く保有。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手企業への転職支援に強い。日立製作所との取引実績豊富。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス求人に特化。日立の管理職・スペシャリスト求人に強い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">日立製作所への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ", href: "/company/ntt-data/" },
              { name: "富士通", href: "/company/fujitsu/" },
              { name: "ソニーグループ", href: "/company/sony/" },
              { name: "パナソニック", href: "/company/panasonic/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
