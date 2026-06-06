import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "富士通 エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "富士通へのエンジニア転職を徹底解説。年収600〜950万円、DX推進・量子コンピュータ・スーパーコンピュータ開発を現場目線でまとめました。",
};

const faqs = [
  {
    q: "富士通のエンジニア採用プロセスは？",
    a: "書類選考 → 適性検査 → 面接（2〜3回）の流れです。ジョブ型採用を導入しており、応募するポジションの専門性に合った経験が問われます。",
  },
  {
    q: "富士通のエンジニア年収はどのくらい？",
    a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1000万円が目安です。ジョブ型人事で専門性に応じた報酬設計になっています。",
  },
  {
    q: "富士通のDX推進はどう進んでいる？",
    a: "Fujitsu Uvanceブランドの下、DXコンサルティング、クラウドネイティブ開発、AI/データ分析を推進しています。従来のSI事業からの転換が進行中です。",
  },
  {
    q: "富士通のワークライフバランスは？",
    a: "テレワーク勤務制度が整備されており、フレックスタイム制も導入。働き方改革に積極的で、ワークライフバランスの満足度は比較的高いです。",
  },
  {
    q: "富士通の技術的な強みは？",
    a: "スーパーコンピュータ「富岳」、量子コンピュータ、5G/Beyond 5G、サイバーセキュリティなど、基礎研究から応用まで幅広い技術力を持っています。",
  },
  {
    q: "富士通への転職で有利な経験は？",
    a: "クラウド（AWS/Azure）の実務経験、DXプロジェクトの推進経験、セキュリティ、AI/MLの知識が有利です。SAP経験者も需要があります。",
  },
];

export default function FujitsuCompanyPage() {
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
      <ArticleJsonLd title="富士通 エンジニア転職ガイド" description="富士通へのエンジニア転職を徹底解説。年収600〜950万円、DX推進・量子コンピュータ開発を現場目線でまとめました。" url="/company/fujitsu/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "富士通" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">富士通 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | DX推進と最先端コンピューティングの総合ITベンダー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "富士通株式会社"],
                ["業種", "総合ITベンダー・SIer"],
                ["従業員数", "約124,000名（連結）"],
                ["平均年収", "600〜950万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "Java / Python / C / AWS / Azure / Kubernetes"],
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
              <h3 className="font-bold text-blue-800 mb-2">ジョブ型人事による専門性重視</h3>
              <p className="text-sm text-blue-700">2020年から段階的にジョブ型人事制度を導入。従来の年功序列から脱却し、専門性とスキルに応じた報酬体系に移行しています。高い技術力があれば年齢に関係なく高い処遇を得られます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Fujitsu Uvanceによる事業変革</h3>
              <p className="text-sm text-blue-700">DX推進ブランド「Fujitsu Uvance」の下、サステナブルな社会課題解決に向けた技術開発を推進。クラウドネイティブ、AI、セキュリティなどモダンな技術領域の人材を積極採用しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">最先端コンピューティング研究</h3>
              <p className="text-sm text-blue-700">スーパーコンピュータ「富岳」の開発実績、量子コンピュータ研究、Beyond 5G技術など、日本のITインフラを支える基礎研究に携われる数少ない企業です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Python / C いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / Azure でのクラウドインフラ構築経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>要件定義・設計などの上流工程経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>DXプロジェクトの推進・コンサルティング経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>セキュリティ・ネットワークの専門知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>情報処理技術者試験・クラウド資格（あれば加点）</li>
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
                  ["ジュニアSE", "G1-G2", "450〜600万円"],
                  ["ミドルSE", "G3", "600〜800万円"],
                  ["シニアSE", "G4", "800〜1,000万円"],
                  ["テクニカルリード", "G5", "1,000〜1,200万円"],
                  ["マネージャー", "M1+", "1,000〜1,300万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">富士通転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手ITベンダーの求人が充実。富士通の各事業部門の求人を網羅。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手SIerへの転職支援に強い。富士通との取引実績が豊富。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で富士通のDX部門やクラウド系ポジションの求人を保有。" },
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
          <h2 className="text-xl font-bold mb-3">富士通への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手ITベンダーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ", href: "/company/ntt-data/" },
              { name: "日立製作所", href: "/company/hitachi/" },
              { name: "野村総合研究所", href: "/company/nri/" },
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
