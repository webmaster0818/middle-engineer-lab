import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "アクセンチュア エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "アクセンチュアへのエンジニア転職を徹底解説。年収700〜1500万円、テクノロジーコンサルティング×エンジニアリングのキャリアを現場目線でまとめました。",
};

const faqs = [
  {
    q: "アクセンチュアのエンジニア面接はどんな形式？",
    a: "ケース面接（論理思考テスト）＋技術面接＋カルチャーフィット面接の構成です。テクノロジー部門ではコーディングテストが追加される場合もあります。",
  },
  {
    q: "アクセンチュアのエンジニア年収はどのくらい？",
    a: "アナリストで500〜700万円、コンサルタントで700〜900万円、マネージャーで900〜1300万円、シニアマネージャー以上で1300万円超が目安です。",
  },
  {
    q: "アクセンチュアのテクノロジー部門とは？",
    a: "Technology部門はシステム開発・インフラ構築を担当し、Strategy & Consulting部門と協働してDXプロジェクトを推進します。エンジニアとコンサルの中間的なポジションです。",
  },
  {
    q: "アクセンチュアの研修制度は？",
    a: "入社後の研修が非常に充実しています。グローバル共通の研修プログラム、資格取得支援、海外研修など、スキルアップの機会が豊富です。",
  },
  {
    q: "アクセンチュアのワークライフバランスは改善された？",
    a: "近年は「Project PRIDE」として働き方改革を推進。残業時間の削減、リモートワーク、有給消化率の向上が進んでいます。ただしプロジェクトにより差があります。",
  },
  {
    q: "アクセンチュアへの転職で有利な経験は？",
    a: "クラウド（AWS/Azure/GCP）の実務経験、DXプロジェクトの推進経験、業界特化の専門知識（金融・製造・通信等）が有利です。SAP/Salesforce経験者も需要があります。",
  },
];

export default function AccentureCompanyPage() {
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
      <ArticleJsonLd title="アクセンチュア エンジニア転職ガイド" description="アクセンチュアへのエンジニア転職を徹底解説。年収700〜1500万円、テクノロジーコンサルティングのキャリアを現場目線でまとめました。" url="/company/accenture/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "アクセンチュア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">アクセンチュア エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 世界最大級のテクノロジーコンサルティング企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "アクセンチュア株式会社"],
                ["業種", "ITコンサルティング・テクノロジーサービス"],
                ["従業員数", "約21,000名（日本法人）"],
                ["平均年収", "700〜1,500万円（テクノロジー職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "Java / Python / AWS / Azure / GCP / SAP / Salesforce"],
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
              <h3 className="font-bold text-blue-800 mb-2">大規模DXプロジェクトに参画</h3>
              <p className="text-sm text-blue-700">日本の大手企業のDX推進を多数支援。戦略立案からシステム構築・運用まで一気通貫で関わるため、技術力だけでなくビジネス視点も身につきます。数十億〜数百億円規模のプロジェクトも珍しくありません。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバル規模の研修・キャリアパス</h3>
              <p className="text-sm text-blue-700">世界73万人超の組織で、グローバル共通の研修プログラムが充実。海外プロジェクトや海外オフィスへの異動も可能で、国際的なキャリアを築けます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">テクノロジー×コンサルの市場価値</h3>
              <p className="text-sm text-blue-700">アクセンチュア出身のエンジニアは転職市場での評価が非常に高いです。技術力＋コンサルスキル＋大規模プロジェクト経験の組み合わせは、その後のキャリアで大きなアドバンテージになります。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Python でのシステム開発経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウド（AWS / Azure / GCP）の設計・構築経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>DXプロジェクトの推進経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>業界特化の専門知識（金融・製造・通信・流通等）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>論理的思考力・プレゼンテーション能力</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語力（グローバルプロジェクトで有利）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">タイトル</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["アナリスト", "12", "450〜600万円"],
                  ["コンサルタント", "11", "600〜900万円"],
                  ["マネージャー", "8-10", "900〜1,300万円"],
                  ["シニアマネージャー", "7", "1,300〜1,800万円"],
                  ["マネジングディレクター", "6+", "2,000万円〜"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">アクセンチュア転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "コンサルファーム求人に強い。アクセンチュア案件を扱うヘッドハンター多数。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でコンサル×エンジニアポジションの求人が充実。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "アクセンチュアの各部門の求人を幅広く保有。初めての転職にも強い。" },
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
          <h2 className="text-xl font-bold mb-3">アクセンチュアへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">コンサル×テクノロジーの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "野村総合研究所", href: "/company/nri/" },
              { name: "NTTデータ", href: "/company/ntt-data/" },
              { name: "Google Japan", href: "/company/google/" },
              { name: "Microsoft Japan", href: "/company/microsoft/" },
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
