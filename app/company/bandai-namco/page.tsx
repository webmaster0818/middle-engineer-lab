import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "バンダイナムコ エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "バンダイナムコへのエンジニア転職を徹底解説。年収600〜1000万円、ゲーム・IP活用・メタバースの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "バンダイナムコのエンジニア採用は？", a: "バンダイナムコエンターテインメント（ゲーム）、バンダイナムコスタジオ（開発）など複数会社で募集。ポジションにより応募先が異なります。" },
  { q: "バンダイナムコのエンジニア年収は？", a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1100万円が目安です。IPの好調さにより賞与が変動します。" },
  { q: "バンダイナムコの技術スタックは？", a: "Unreal Engine、Unity、C++が主力。モバイルゲームではKotlin/Swiftも。サーバーサイドはGo/Java、インフラはAWS/GCPを活用。" },
  { q: "バンダイナムコの面接の特徴は？", a: "書類選考 → 作品審査（ゲーム開発職の場合）→ 面接（2回）。ゲームへの情熱やIPへの理解が重視されます。" },
  { q: "バンダイナムコの開発文化は？", a: "「Fun for All into the Future」を掲げ、ガンダム、ドラゴンボール、テイルズなどの人気IPを活用したゲーム開発が中心。チーム規模は数十〜数百名の大規模プロジェクトも。" },
  { q: "バンダイナムコへの転職で有利な経験は？", a: "Unreal Engine/Unityでのゲーム開発経験、C++の深い知識、サーバーサイド開発経験、3Dグラフィックスの知識が有利です。" },
];

export default function BandaiNamcoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="バンダイナムコ エンジニア転職ガイド" description="バンダイナムコへのエンジニア転職を徹底解説。年収600〜1000万円、ゲーム・IP活用の技術基盤を現場目線でまとめました。" url="/company/bandai-namco/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "バンダイナムコ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">バンダイナムコ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 世界的IPを持つ総合エンタテインメント企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","株式会社バンダイナムコエンターテインメント"],["業種","ゲーム・エンタテインメント"],["従業員数","約10,000名（グループ連結）"],["平均年収","600〜1,000万円（エンジニア職）"],["本社所在地","東京都港区"],["技術スタック","C++ / Unreal Engine / Unity / Go / Java / AWS"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">世界的IPを活用したゲーム開発</h3><p className="text-sm text-blue-700">ガンダム、ドラゴンボール、鉄拳、テイルズなど世界的に人気のIPを活用したゲーム開発に携われます。コンソール、モバイル、オンラインと幅広いプラットフォームで展開しています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">大規模プロジェクトでの開発経験</h3><p className="text-sm text-blue-700">AAA級タイトルでは数百名規模の開発チームで2〜3年の開発期間。大規模プロジェクトのマネジメントやチーム開発のノウハウが身につきます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">IP×テクノロジーの新領域</h3><p className="text-sm text-blue-700">メタバース、VR/AR、ブロックチェーンなど新技術とIPの掛け合わせにも積極投資中。次世代エンタテインメントの開発に携われるチャンスがあります。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C++ / Unreal Engine でのゲーム開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Unity でのモバイルゲーム開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / Java でのサーバーサイド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>3Dグラフィックス・シェーダーの知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模チームでの開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ゲームへの情熱とIPへの理解</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","450〜650万円"],["ミドルエンジニア","G3","650〜850万円"],["シニアエンジニア","G4","850〜1,100万円"],["テクニカルディレクター","G5","1,100〜1,400万円"],["マネージャー","M1+","1,000〜1,300万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">バンダイナムコ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"Geekly",href:"/review/geekly/",desc:"ゲーム業界の求人に強い。バンダイナムコの非公開求人も保有。"},{name:"レバテックキャリア",href:"/review/levtech/",desc:"IT特化でゲーム企業の求人も充実。技術面接サポートあり。"},{name:"マイナビIT AGENT",href:"/review/mynavi-it/",desc:"大手エンタメ企業の求人も充実。バンダイナムコグループの求人を保有。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">バンダイナムコへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"任天堂",href:"/company/nintendo/"},{name:"ソニーグループ",href:"/company/sony/"},{name:"DeNA",href:"/company/dena/"},{name:"サイバーエージェント",href:"/company/cyberagent/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
