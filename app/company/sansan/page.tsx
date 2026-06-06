import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Sansan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Sansanへのエンジニア転職を徹底解説。年収600〜950万円、名刺管理SaaS・Bill Oneの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "Sansanのエンジニア採用プロセスは？", a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接。技術面接ではアーキテクチャ設計やコードレビューの議論が行われます。" },
  { q: "Sansanのエンジニア年収は？", a: "ジュニアで500〜650万円、ミドルで650〜800万円、シニアで800〜1000万円が目安です。ストックオプションも付与されます。" },
  { q: "Sansanの技術スタックは？", a: "バックエンドはRuby on Rails/Kotlin/Go。フロントはReact/TypeScript。名刺のOCR処理にはPython/機械学習も活用。インフラはAWS中心です。" },
  { q: "Sansanの事業領域は？", a: "法人向け名刺管理「Sansan」、個人向け名刺アプリ「Eight」、請求書受領「Bill One」、契約データベース「Contract One」を展開しています。" },
  { q: "Sansanの開発文化は？", a: "「出会いからイノベーションを生み出す」をミッションに、ビジネスインフラの構築に取り組んでいます。技術勉強会やハッカソンが活発です。" },
  { q: "Sansanへの転職で有利な経験は？", a: "Ruby on Rails/Kotlin/Goの実務経験、OCR/画像処理/MLの経験、BtoB SaaSの開発経験が有利です。" },
];

export default function SansanCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Sansan エンジニア転職ガイド" description="Sansanへのエンジニア転職を徹底解説。年収600〜950万円、名刺管理SaaSの技術基盤を現場目線でまとめました。" url="/company/sansan/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Sansan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Sansan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ビジネスインフラSaaSのリーディングカンパニー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","Sansan株式会社"],["業種","BtoB SaaS・名刺管理・請求書管理"],["従業員数","約1,500名"],["平均年収","600〜950万円（エンジニア職）"],["本社所在地","東京都渋谷区"],["技術スタック","Ruby on Rails / Kotlin / Go / React / TypeScript / AWS"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">OCR・画像処理技術の最前線</h3><p className="text-sm text-blue-700">名刺のデジタル化でOCR技術・画像処理・機械学習を活用。大量のビジネスデータを高精度で処理する技術的チャレンジがあります。R&D部門ではAI技術の研究開発も行われています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">マルチプロダクト戦略での技術的多様性</h3><p className="text-sm text-blue-700">Sansan、Eight、Bill One、Contract Oneと複数プロダクトを展開。各プロダクトで異なる技術課題に取り組め、社内異動によるキャリアの幅も広がります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Katanuki制度で技術研鑽を支援</h3><p className="text-sm text-blue-700">業務時間の一部を自身の技術研鑽に充てられる「Katanuki」制度があります。OSS貢献やカンファレンス登壇の支援も充実しています。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails / Kotlin / Go いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / TypeScript でのフロントエンド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>BtoB SaaSプロダクトの開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS でのインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>画像処理・OCR・機械学習の知識（ML系ポジション）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チーム開発・アジャイル開発の経験</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","450〜600万円"],["ミドルエンジニア","G3","600〜800万円"],["シニアエンジニア","G4","800〜1,050万円"],["リードエンジニア","G5","1,050〜1,250万円"],["EM","M1+","950〜1,200万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Sansan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"レバテックキャリア",href:"/review/levtech/",desc:"SaaS企業の求人に強い。Sansanの非公開求人を保有していることも。"},{name:"Green",href:"/review/green/",desc:"IT企業の求人に強い。Sansanの直接求人も掲載。"},{name:"Geekly",href:"/review/geekly/",desc:"IT・Web業界特化。BtoB SaaS企業への転職実績が豊富。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Sansanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"freee",href:"/company/freee/"},{name:"SmartHR",href:"/company/smarthr/"},{name:"マネーフォワード",href:"/company/moneyforward/"},{name:"LayerX",href:"/company/layerx/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
