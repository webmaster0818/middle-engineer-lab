import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "LayerX エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "LayerXへのエンジニア転職を徹底解説。年収700〜1200万円、バクラク・AI・ブロックチェーンの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "LayerXのエンジニア採用プロセスは？", a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接。技術面接ではGoでの設計力やアーキテクチャの議論が行われます。" },
  { q: "LayerXのエンジニア年収は？", a: "ジュニアで600〜750万円、ミドルで750〜1000万円、シニアで1000〜1300万円。ストックオプションも付与されます。急成長中のため報酬水準は上昇傾向です。" },
  { q: "LayerXの事業内容は？", a: "法人支出管理SaaS「バクラク」シリーズが主力事業。その他、AI/LLM事業、FinTech事業を展開。元々はブロックチェーン企業からピボットした経緯があります。" },
  { q: "LayerXの技術的な強みは？", a: "Go言語でのバックエンド開発、AI/LLMの実務活用（OCR、請求書処理の自動化）、プロダクトドリブンな開発文化が強みです。" },
  { q: "LayerXの開発文化は？", a: "「すべての経済活動を、デジタル化する。」をミッションに、高い技術力とビジネス感覚の両立を求める文化。代表の福島良典氏（元Gunosy CEO）のリーダーシップの下、急成長中です。" },
  { q: "LayerXへの転職で有利な経験は？", a: "Goの実務経験、SaaSプロダクトの開発経験、AI/LLMの活用経験、フィンテック・会計領域のドメイン知識が有利です。" },
];

export default function LayerxCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="LayerX エンジニア転職ガイド" description="LayerXへのエンジニア転職を徹底解説。年収700〜1200万円、バクラク・AI・ブロックチェーンの技術基盤を現場目線でまとめました。" url="/company/layerx/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "LayerX" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">LayerX エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | バクラク・AI事業で急成長中のSaaS企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","株式会社LayerX"],["業種","SaaS・AI・フィンテック"],["従業員数","約300名"],["平均年収","700〜1,200万円（エンジニア職）"],["本社所在地","東京都中央区"],["技術スタック","Go / TypeScript / React / Python / AWS / GCP / Terraform"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">AI/LLMの実務活用をリード</h3><p className="text-sm text-blue-700">請求書OCR、経費精算の自動化など、AI/LLMをプロダクトに実装して実際のビジネス価値を生み出しています。最新のAI技術をプロダクトに落とし込む経験が積めます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">急成長SaaSでの開発経験</h3><p className="text-sm text-blue-700">「バクラク」シリーズ（請求書処理、経費精算、法人カード等）はARR急成長中。急成長フェーズのSaaSプロダクトの設計・スケーリングに取り組めます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">少数精鋭・高い技術力</h3><p className="text-sm text-blue-700">元Gunosy、元メルカリ、元Google出身のエンジニアが在籍。少数精鋭で技術レベルが高く、お互いに刺激し合える環境です。Go言語のコミュニティへの貢献も活発です。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go での実務経験（バックエンド主力言語）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / TypeScript でのフロントエンド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>SaaSプロダクトの設計・開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / GCP でのクラウドインフラ経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AI/LLMの活用経験（AI事業部の場合）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロダクト志向で事業成長に貢献する姿勢</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","550〜750万円"],["ミドルエンジニア","G3","750〜1,000万円"],["シニアエンジニア","G4","1,000〜1,300万円"],["リードエンジニア","G5","1,300〜1,600万円"],["EM","M1+","1,200〜1,500万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LayerX転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"レバテックキャリア",href:"/review/levtech/",desc:"SaaS企業の求人に強い。LayerXの非公開求人を保有していることも。"},{name:"Green",href:"/review/green/",desc:"IT企業の求人に強い。LayerXの直接求人も掲載されることが多い。"},{name:"Geekly",href:"/review/geekly/",desc:"IT・Web業界特化。急成長スタートアップへの転職実績が豊富。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">LayerXへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">急成長SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"freee",href:"/company/freee/"},{name:"マネーフォワード",href:"/company/moneyforward/"},{name:"プレイド",href:"/company/plaid/"},{name:"SmartHR",href:"/company/smarthr/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
