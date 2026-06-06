import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "パナソニック エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "パナソニックへのエンジニア転職を徹底解説。年収600〜950万円、EV電池・IoT・スマートホームの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "パナソニックのエンジニア採用プロセスは？", a: "書類選考 → 適性検査 → 技術面接（1〜2回）→ 最終面接。事業会社ごとに選考プロセスが異なる場合があります。" },
  { q: "パナソニックのエンジニア年収は？", a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1050万円が目安です。持株会社制移行後、事業会社ごとに報酬体系が異なります。" },
  { q: "パナソニックの事業構造は？", a: "2022年に持株会社制に移行し、パナソニック コネクト、パナソニック エナジーなど複数の事業会社に分かれています。IT/ソフトウェアではコネクト社が中心です。" },
  { q: "パナソニックで注目の技術領域は？", a: "EV向け車載電池（テスラとの協業）、サプライチェーンDX、スマートホーム/IoT、ロボティクスが注目領域です。" },
  { q: "パナソニックの働き方は？", a: "フレックスタイム制、リモートワーク対応。大手メーカーならではの安定した福利厚生が充実しています。" },
  { q: "パナソニックへの転職で有利な経験は？", a: "組み込みシステム開発、IoT/エッジコンピューティング、クラウドインフラ、データ分析、電池/エネルギー技術の経験が有利です。" },
];

export default function PanasonicCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="パナソニック エンジニア転職ガイド" description="パナソニックへのエンジニア転職を徹底解説。年収600〜950万円、EV電池・IoTの技術基盤を現場目線でまとめました。" url="/company/panasonic/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "パナソニック" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">パナソニック エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | EV電池・IoT・DXで変革する総合電機メーカー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","パナソニック ホールディングス株式会社"],["業種","総合電機・エネルギー・IoT"],["従業員数","約233,000名（連結）"],["平均年収","600〜950万円（エンジニア職）"],["本社所在地","大阪府門真市"],["技術スタック","C / C++ / Python / Java / AWS / Azure / IoT"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">EV電池事業での世界的プレゼンス</h3><p className="text-sm text-blue-700">パナソニック エナジーはテスラをはじめとするEVメーカーに車載電池を供給。電池技術に加え、製造DX、品質管理AIなどの技術的チャレンジがあります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">パナソニック コネクトのDX推進</h3><p className="text-sm text-blue-700">サプライチェーン管理、現場プロセスのDX、映像セキュリティなどB2Bソリューションを展開。Blue Yonder買収でSCMプラットフォームも強化中です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">くらし×テクノロジーの融合</h3><p className="text-sm text-blue-700">スマートホーム、家電IoT、住宅設備のコネクテッド化など、人々の暮らしとテクノロジーの融合に取り組んでいます。組み込みシステムからクラウドまで幅広い技術領域です。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C / C++ / Python いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>組み込みシステム・IoTの開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウドインフラ（AWS / Azure）の構築経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>データ分析・AI/MLの活用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>製造業・SCMのドメイン知識（あれば加点）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語力（グローバルプロジェクトで有利）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","P1-P2","450〜600万円"],["ミドルエンジニア","P3","600〜800万円"],["シニアエンジニア","P4","800〜1,000万円"],["テクニカルリード","P5","1,000〜1,200万円"],["マネージャー","M1+","950〜1,200万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">パナソニック転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"doda(IT)",href:"/review/doda-it/",desc:"大手メーカーの求人が充実。パナソニックグループの各社求人を網羅。"},{name:"マイナビIT AGENT",href:"/review/mynavi-it/",desc:"大手メーカーへの転職支援に強い。パナソニックとの取引実績豊富。"},{name:"レバテックキャリア",href:"/review/levtech/",desc:"IT特化でメーカーのDX部門やIoT関連ポジションの求人を保有。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">パナソニックへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"ソニーグループ",href:"/company/sony/"},{name:"日立製作所",href:"/company/hitachi/"},{name:"トヨタ自動車",href:"/company/toyota/"},{name:"富士通",href:"/company/fujitsu/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
