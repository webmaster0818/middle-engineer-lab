import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "任天堂 エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "任天堂へのエンジニア転職を徹底解説。年収700〜1100万円、ゲーム開発・ハードウェア設計の世界トップ企業の技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "任天堂のエンジニア中途採用は行っている？", a: "はい、近年は中途採用を積極化しています。ゲーム開発、ネットワークサービス、組み込みシステム、AI/MLなどのポジションで募集があります。" },
  { q: "任天堂のエンジニア年収は？", a: "ジュニアで550〜750万円、ミドルで750〜950万円、シニアで950〜1200万円が目安です。賞与が充実しており、業績好調時は年収が大きく上がります。" },
  { q: "任天堂の面接の特徴は？", a: "書類選考 → 筆記試験 → 面接（2〜3回）の流れです。技術的な専門性に加え、任天堂のモノづくりへの哲学・姿勢への理解も重視されます。" },
  { q: "任天堂の開発環境は？", a: "自社開発のゲームエンジン・開発ツールが中心です。C/C++が主力言語で、ハードウェアに近いレイヤーでの最適化が求められます。" },
  { q: "任天堂の勤務地は？", a: "京都市南区の本社が中心です。東京にも開発拠点がありますが、京都勤務が基本です。リモートワークは限定的です。" },
  { q: "任天堂への転職で有利な経験は？", a: "ゲーム開発経験（C/C++）、組み込みシステム開発、3Dグラフィックス、ネットワークプログラミングの経験が有利です。ゲーム業界経験者が優遇されます。" },
];

export default function NintendoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="任天堂 エンジニア転職ガイド" description="任天堂へのエンジニア転職を徹底解説。年収700〜1100万円、ゲーム開発の世界トップ企業の技術基盤を現場目線でまとめました。" url="/company/nintendo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "任天堂" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">任天堂 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 世界を代表するゲーム・エンタテインメント企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","任天堂株式会社"],["業種","ゲーム・エンタテインメント"],["従業員数","約7,300名（連結）"],["平均年収","700〜1,100万円（エンジニア職）"],["本社所在地","京都府京都市"],["技術スタック","C / C++ / Python / 自社ゲームエンジン / Vulkan / Metal"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">世界をリードするゲーム開発</h3><p className="text-sm text-blue-700">マリオ、ゼルダ、ポケモンなど世界的IPのゲーム開発に携われます。ハードウェアの性能を最大限引き出す最適化技術、独自のゲームエンジン開発など、他社では得られない技術的チャレンジがあります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ハード×ソフトの一体開発</h3><p className="text-sm text-blue-700">Nintendo Switchなどのゲーム機本体からソフトウェアまで一体で開発する数少ない企業。ハードウェアの制約の中で最高の体験を追求する姿勢が特徴です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">安定した経営基盤と高い利益率</h3><p className="text-sm text-blue-700">無借金経営で財務基盤が盤石。ゲーム業界の中でも利益率が高く、安定した雇用環境と充実した賞与が特徴です。業績好調時は賞与が大幅に増えます。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C / C++ での低レイヤー開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ゲーム開発経験（コンソールゲーム推奨）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>3Dグラフィックス・シェーダープログラミング</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>パフォーマンス最適化・メモリ管理の深い知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>組み込みシステム・ハードウェア制御の経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ネットワークプログラミング（オンライン機能開発）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","550〜750万円"],["ミドルエンジニア","G3","750〜950万円"],["シニアエンジニア","G4","950〜1,200万円"],["テクニカルリード","G5","1,200〜1,500万円"],["マネージャー","M1+","1,100〜1,400万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">任天堂転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"Geekly",href:"/review/geekly/",desc:"ゲーム業界の求人に強い。任天堂の非公開求人を保有していることも。"},{name:"レバテックキャリア",href:"/review/levtech/",desc:"IT特化でゲーム企業の求人も充実。技術面接対策サポートあり。"},{name:"doda(IT)",href:"/review/doda-it/",desc:"大手メーカーの求人が豊富。任天堂の各ポジション求人を保有。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">任天堂への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"ソニーグループ",href:"/company/sony/"},{name:"バンダイナムコ",href:"/company/bandai-namco/"},{name:"DeNA",href:"/company/dena/"},{name:"サイバーエージェント",href:"/company/cyberagent/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
