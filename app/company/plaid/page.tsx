import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "プレイド エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "プレイドへのエンジニア転職を徹底解説。年収650〜1100万円、CXプラットフォーム「KARTE」の技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "プレイドのエンジニア採用プロセスは？", a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接。技術面接ではシステム設計やリアルタイムデータ処理の議論が行われます。" },
  { q: "プレイドのエンジニア年収は？", a: "ジュニアで550〜700万円、ミドルで700〜900万円、シニアで900〜1200万円。ストックオプションも付与されます。" },
  { q: "KARTEとはどんなプロダクト？", a: "Webサイト・アプリの訪問者をリアルタイムで解析し、パーソナライズされた顧客体験を提供するCXプラットフォームです。大量のイベントデータをリアルタイム処理する技術的チャレンジがあります。" },
  { q: "プレイドの技術的な強みは？", a: "リアルタイムストリーム処理、大規模データパイプライン、機械学習による行動予測など、データエンジニアリングの最先端技術を活用しています。" },
  { q: "プレイドの開発文化は？", a: "「データによって人の価値を最大化する」をミッションに、技術的なチャレンジを奨励する文化。少数精鋭で裁量が大きいのが特徴です。" },
  { q: "プレイドへの転職で有利な経験は？", a: "リアルタイムデータ処理、Goの実務経験、BigQuery/Kafkaなどのデータ基盤経験、フロントエンドのパフォーマンス最適化経験が有利です。" },
];

export default function PlaidCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="プレイド エンジニア転職ガイド" description="プレイドへのエンジニア転職を徹底解説。年収650〜1100万円、CXプラットフォーム「KARTE」の技術基盤を現場目線でまとめました。" url="/company/plaid/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "プレイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">プレイド エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | CXプラットフォーム「KARTE」を提供するデータテック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","株式会社プレイド"],["業種","CXプラットフォーム・データテック"],["従業員数","約350名"],["平均年収","650〜1,100万円（エンジニア職）"],["本社所在地","東京都中央区"],["技術スタック","Go / TypeScript / React / BigQuery / Kafka / GCP / Kubernetes"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">リアルタイムデータ処理の最前線</h3><p className="text-sm text-blue-700">KARTEはWebサイト訪問者の行動をリアルタイムで解析し、ミリ秒単位で最適なアクションを配信。毎秒数万件のイベントを処理する大規模ストリーム処理基盤の設計・運用に携われます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">少数精鋭で大きな裁量</h3><p className="text-sm text-blue-700">従業員約350名で年間売上数十億円規模のプロダクトを運営。エンジニア1人あたりの責任範囲が広く、アーキテクチャの意思決定にも深く関われます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Googleとの戦略的パートナーシップ</h3><p className="text-sm text-blue-700">GoogleCloudのパートナーとして密接に連携。BigQuery、Cloud Pub/Sub、GKEなどGCPの最新機能をフル活用した開発環境です。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / TypeScript いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>リアルタイムデータ処理・ストリーム処理の経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>GCP / BigQuery / Kafka でのデータ基盤構築</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模SaaSプロダクトの開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>フロントエンドのパフォーマンス最適化経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>機械学習・推薦システムの知識（ML職の場合）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","500〜700万円"],["ミドルエンジニア","G3","700〜900万円"],["シニアエンジニア","G4","900〜1,200万円"],["リードエンジニア","G5","1,200〜1,500万円"],["EM","M1+","1,100〜1,400万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プレイド転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"レバテックキャリア",href:"/review/levtech/",desc:"SaaS企業の求人に強い。プレイドの非公開求人を保有していることも。"},{name:"Green",href:"/review/green/",desc:"IT企業の求人に強い。プレイドの直接求人も掲載。"},{name:"Geekly",href:"/review/geekly/",desc:"IT・Web業界特化。データテック企業への転職実績が豊富。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">プレイドへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"LayerX",href:"/company/layerx/"},{name:"Visional/ビズリーチ",href:"/company/visional/"},{name:"SmartHR",href:"/company/smarthr/"},{name:"freee",href:"/company/freee/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
