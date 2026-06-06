import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ソフトバンク エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "ソフトバンクへのエンジニア転職を徹底解説。年収700〜1100万円、通信×AI×DXの技術基盤を現場目線でまとめました。",
};

const faqs = [
  { q: "ソフトバンクのエンジニア採用プロセスは？", a: "書類選考 → 適性検査 → 技術面接（1〜2回）→ 最終面接の流れです。技術力に加え、ソフトバンクの事業ビジョンへの共感も重視されます。" },
  { q: "ソフトバンクのエンジニア年収は？", a: "ジュニアで550〜750万円、ミドルで750〜950万円、シニアで950〜1200万円が目安。インセンティブやRSUも加算されます。" },
  { q: "ソフトバンクの技術領域は？", a: "5G/Beyond 5G、AI/データ分析、クラウドインフラ、IoT、法人向けDXソリューション、自動運転（BOLDLY）など幅広い技術領域があります。" },
  { q: "ソフトバンクで英語力は必要？", a: "グローバルチーム（AI研究等）では英語が必要ですが、国内通信事業や法人事業では日本語のみのポジションも多数あります。" },
  { q: "ソフトバンクの開発文化は？", a: "スピード重視の実行力が特徴。新規事業の立ち上げが活発で、エンジニアにも起業家精神（アントレプレナーシップ）が求められます。" },
  { q: "ソフトバンクへの転職で有利な経験は？", a: "通信ネットワーク技術、クラウドインフラ、AI/ML、法人向けSI/DXの経験が有利。大規模システムの構築・運用経験も評価されます。" },
];

export default function SoftbankCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ソフトバンク エンジニア転職ガイド" description="ソフトバンクへのエンジニア転職を徹底解説。年収700〜1100万円、通信×AI×DXの技術基盤を現場目線でまとめました。" url="/company/softbank/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ソフトバンク" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ソフトバンク エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 通信×AI×DXの総合テクノロジー企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm"><tbody>
            {[["企業名","ソフトバンク株式会社"],["業種","通信・AI・DX"],["従業員数","約55,000名（連結）"],["平均年収","700〜1,100万円（エンジニア職）"],["本社所在地","東京都港区"],["技術スタック","Python / Java / Go / AWS / GCP / Kubernetes / 5G"]].map(([label,value],i)=>(
              <tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
            ))}
          </tbody></table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">AI×通信の融合で新サービス創出</h3><p className="text-sm text-blue-700">5G/Beyond 5Gとデータ基盤を武器に、AI活用のDXソリューションを大規模に展開。通信インフラとAI技術の両方に携われるのはソフトバンクならではの強みです。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">法人DX事業の急成長</h3><p className="text-sm text-blue-700">企業のDX推進を支援する法人事業が急成長中。クラウドインフラ構築、データ分析基盤、セキュリティなどのエンジニアを積極採用しています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">新規事業への積極投資</h3><p className="text-sm text-blue-700">自動運転（BOLDLY）、FinTech（PayPay）、ヘルスケアなど新規事業に積極投資。エンジニアにもアントレプレナーシップが求められ、事業を作る経験ができます。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Python / Java / Go いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウドインフラ（AWS / GCP）の構築・運用</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>通信ネットワーク技術（5G / NFV / SDN）の知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AI/ML・データ分析の実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模システムの設計・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>法人向けDXプロジェクトの推進経験</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th></tr></thead>
              <tbody>{[["ジュニアエンジニア","G1-G2","500〜700万円"],["ミドルエンジニア","G3","700〜950万円"],["シニアエンジニア","G4","950〜1,200万円"],["テクニカルリード","G5","1,200〜1,500万円"],["マネージャー","M1+","1,100〜1,400万円"]].map(([pos,level,range],i)=>(<tr key={i} className={i%2===0?"bg-white":"bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td><td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ソフトバンク転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{name:"doda(IT)",href:"/review/doda-it/",desc:"大手通信企業の求人が充実。ソフトバンクの各事業部門の求人を網羅。"},{name:"レバテックキャリア",href:"/review/levtech/",desc:"IT特化でソフトバンクのエンジニア求人に強い。非公開求人も保有。"},{name:"ビズリーチ",href:"/review/bizreach-it/",desc:"ハイクラス求人に特化。ソフトバンクからのスカウトも届く。"}].map((agent,i)=>(<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq,i)=>(<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ソフトバンクへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{name:"NTTデータ",href:"/company/ntt-data/"},{name:"楽天グループ",href:"/company/rakuten/"},{name:"LINEヤフー",href:"/company/line-yahoo/"},{name:"Visional/ビズリーチ",href:"/company/visional/"}].map((item,i)=>(<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} の転職ガイド →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
