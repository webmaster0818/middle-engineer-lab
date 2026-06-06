import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Visional(ビズリーチ) エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Visional(ビズリーチ)へのエンジニア転職を徹底解説。年収650〜1100万円、HRテック×SaaSの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "Visionalのエンジニア採用プロセスは？", a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接。ビズリーチ、HRMOS、M&Aサクシードなどプロダクト別に選考。" },
  { q: "Visionalのエンジニア年収は？", a: "ジュニアで550〜700万円、ミドルで700〜900万円、シニアで900〜1200万円。ストックオプションも付与されます。" },
  { q: "Visionalの技術スタックは？", a: "Scala / TypeScript / React がメイン。インフラはAWS/Kubernetes。関数型プログラミングを積極的に取り入れている点が特徴です。" },
  { q: "Visionalの開発文化は？", a: "「ビジョナル・ウェイ」に基づき、プロダクト志向の開発文化。エンジニアがプロダクトの意思決定に深く関わり、ユーザー価値の最大化を追求します。" },
  { q: "Visionalのワークライフバランスは？", a: "フレックスタイム制、リモートワーク可。エンジニアの働きやすさに配慮した環境が整備されています。" },
  { q: "Visionalへの転職で有利な経験は？", a: "Scala/TypeScriptの実務経験、HRテック・SaaSプロダクトの開発経験、関数型プログラミングの知識が有利です。" },
];

export default function VisionalCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Visional(ビズリーチ) エンジニア転職ガイド" description="Visionalへのエンジニア転職を徹底解説。年収650〜1100万円、HRテック×SaaSの技術基盤を現場目線でまとめました。" url="/company/visional/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Visional/ビズリーチ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Visional(ビズリーチ) エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | HRテック×SaaSのリーディングカンパニー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","ビジョナル株式会社"],["業種","HRテック・SaaS"],["従業員数","約1,800名（連結）"],["平均年収","650〜1,100万円（エンジニア職）"],["本社所在地","東京都渋谷区"],["技術スタック","Scala / TypeScript / React / AWS / Kubernetes / Kafka"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Scalaを中心とした関数型プログラミング</h3><p className="text-sm text-blue-700">ビズリーチのバックエンドはScalaで構築されており、関数型プログラミングの実践的な経験が積めます。型安全性と表現力の高いコードベースでの開発は日本でも数少ない環境です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">マルチプロダクト戦略</h3><p className="text-sm text-blue-700">ビズリーチ（ダイレクトリクルーティング）、HRMOS（人事管理）、M&Aサクシード（事業承継）など複数プロダクトを展開。各プロダクトで異なる技術課題に取り組めます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">IPO後も成長を続ける安定×成長企業</h3><p className="text-sm text-blue-700">2021年のIPO以降も高い成長率を維持。上場企業の安定感とスタートアップの成長性を両立した環境で、エンジニアに大きな裁量が与えられます。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Scala / Java / TypeScript いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>関数型プログラミングの理解（Scala推奨）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / TypeScript でのフロントエンド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / Kubernetes でのインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>SaaSプロダクトの設計・開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロダクト志向でユーザー価値に向き合える姿勢</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Visional転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"レバテックキャリア",href:"/review/levtech/",desc:"SaaS企業の求人に強い。Visionalの非公開求人を保有していることも。"},{name:"Geekly",href:"/review/geekly/",desc:"IT・Web業界特化。Visionalへの転職支援実績が豊富。"},{name:"Green",href:"/review/green/",desc:"IT企業の求人に強い。Visionalの直接求人も掲載。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Visionalへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"SmartHR",href:"/company/smarthr/"},{name:"リクルート",href:"/company/recruit/"},{name:"freee",href:"/company/freee/"},{name:"プレイド",href:"/company/plaid/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
