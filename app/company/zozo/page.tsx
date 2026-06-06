import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ZOZO エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "ZOZOへのエンジニア転職を徹底解説。年収600〜1000万円、ZOZOTOWN・計測技術・ファッションテックの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "ZOZOのエンジニア採用プロセスは？", a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接。技術面接ではGoやTypeScriptでの設計力が問われます。" },
  { q: "ZOZOのエンジニア年収は？", a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1100万円。業績賞与やストックオプションも付与されます。" },
  { q: "ZOZOの技術的な強みは？", a: "ZOZOTOWNの大規模ECプラットフォーム運用、ZOZOSUIT/ZOZOMATなどの計測技術、ファッションAI/推薦システムが技術的な強みです。" },
  { q: "ZOZOの開発文化は？", a: "「世界中をカッコよく、世界中に笑顔を。」をミッションに、ファッション×テクノロジーの融合に取り組んでいます。技術ブログの発信も活発です。" },
  { q: "ZOZOのワークライフバランスは？", a: "フレックスタイム制、リモートワーク可。幕張の本社オフィスは快適な環境が整備されています。ワークライフバランスは良好です。" },
  { q: "ZOZOへの転職で有利な経験は？", a: "大規模ECサイトの開発経験、Go/TypeScriptの実務経験、推薦システム/ML経験、マイクロサービスアーキテクチャの経験が有利です。" },
];

export default function ZozoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ZOZO エンジニア転職ガイド" description="ZOZOへのエンジニア転職を徹底解説。年収600〜1000万円、ZOZOTOWN・ファッションテックの技術基盤を現場目線でまとめました。" url="/company/zozo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ZOZO" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ZOZO エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 日本最大級のファッションECプラットフォーム</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","株式会社ZOZO"],["業種","ファッションEC・テクノロジー"],["従業員数","約1,500名"],["平均年収","600〜1,000万円（エンジニア職）"],["本社所在地","千葉県千葉市（幕張）"],["技術スタック","Go / TypeScript / React / Python / AWS / Kubernetes"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">大規模ECプラットフォームの技術基盤</h3><p className="text-sm text-blue-700">年間取扱高5,000億円超のZOZOTOWNを支える大規模ECプラットフォーム。高トラフィック・高可用性が求められるシステムの設計・開発・運用経験が積めます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ファッション×テクノロジーの融合</h3><p className="text-sm text-blue-700">ZOZOMATによる足の3D計測、AIによるコーディネート推薦、バーチャル試着など、ファッション領域でのテクノロジー活用が活発。独自の技術チャレンジがあります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">リプレイスプロジェクトでのモダン化</h3><p className="text-sm text-blue-700">レガシーシステムからGoベースのマイクロサービスへの大規模リプレイスを推進中。モダンな技術スタックでの開発経験が積めます。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / TypeScript いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模Webサービスの開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マイクロサービスアーキテクチャの設計経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / Kubernetes でのインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>EC・推薦システムのドメイン知識（あれば加点）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>3D計測・画像処理の知識（計測技術チーム）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","450〜650万円"],["ミドルエンジニア","G3","650〜850万円"],["シニアエンジニア","G4","850〜1,100万円"],["リードエンジニア","G5","1,100〜1,300万円"],["EM","M1+","1,000〜1,300万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ZOZO転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"レバテックキャリア",href:"/review/levtech/",desc:"EC系企業の求人に強い。ZOZOの非公開求人を保有していることも。"},{name:"Geekly",href:"/review/geekly/",desc:"IT・Web業界特化。EC系企業への転職実績が豊富。"},{name:"Green",href:"/review/green/",desc:"IT企業の求人に強い。ZOZOの直接求人も掲載。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ZOZOへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">EC系企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"メルカリ",href:"/company/mercari/"},{name:"楽天グループ",href:"/company/rakuten/"},{name:"リクルート",href:"/company/recruit/"},{name:"サイバーエージェント",href:"/company/cyberagent/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
