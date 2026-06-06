import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "リクルート エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "リクルートへのエンジニア転職を徹底解説。年収700〜1200万円、データドリブン経営、多彩なプロダクト開発を現場目線でまとめました。",
};

const faqs = [
  {
    q: "リクルートのエンジニア採用プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（2回）→ 最終面接の流れです。技術面接ではシステム設計やアーキテクチャの議論が中心で、ビジネス課題への技術的アプローチも問われます。",
  },
  {
    q: "リクルートのエンジニア年収はどのくらい？",
    a: "ジュニアで600〜800万円、ミドルで800〜1000万円、シニアで1000〜1300万円が目安です。ミッショングレード制で実力に応じた報酬が得られます。",
  },
  {
    q: "リクルートにはどんなプロダクトがある？",
    a: "SUUMO、ホットペッパー、じゃらん、リクナビ、Airシリーズ、スタディサプリなど多数のプロダクトがあります。各プロダクトで異なる技術的チャレンジがあります。",
  },
  {
    q: "リクルートのエンジニア文化は？",
    a: "「自ら機会を創り出し、機会によって自らを変えよ」の精神で、エンジニアにも大きな裁量と自主性が求められます。データドリブンな意思決定文化が強いです。",
  },
  {
    q: "リクルートのワークライフバランスは？",
    a: "フレックスタイム制、リモートワーク可、年間休日145日以上と非常に充実しています。有給消化率も高く、ワークライフバランスは良好です。",
  },
  {
    q: "リクルートへの転職で有利な経験は？",
    a: "大規模Webサービスの開発経験、データ分析・ML活用経験、プロダクトマネジメント経験が有利です。TypeScript/Python/Goの実務経験者が特に求められています。",
  },
];

export default function RecruitCompanyPage() {
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
      <ArticleJsonLd title="リクルート エンジニア転職ガイド" description="リクルートへのエンジニア転職を徹底解説。年収700〜1200万円、データドリブン経営、多彩なプロダクト開発を現場目線でまとめました。" url="/company/recruit/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "リクルート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リクルート エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 国内最大級のプロダクト群を持つテック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社リクルート"],
                ["業種", "人材・住宅・飲食・教育プラットフォーム"],
                ["従業員数", "約50,000名（連結）"],
                ["平均年収", "700〜1,200万円（エンジニア職）"],
                ["本社所在地", "東京都千代田区"],
                ["技術スタック", "TypeScript / Python / Go / React / AWS / GCP / BigQuery"],
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
              <h3 className="font-bold text-blue-800 mb-2">多彩なプロダクトでの開発経験</h3>
              <p className="text-sm text-blue-700">SUUMO、ホットペッパー、じゃらん、Airシリーズなど日本最大級のプロダクト群を保有。各プロダクトで異なるドメインの技術的チャレンジがあり、社内異動も活発です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データドリブン経営の最前線</h3>
              <p className="text-sm text-blue-700">数億件のユーザーデータを活用したAI/ML基盤が充実。ABテストやデータ分析に基づいた意思決定文化が根付いており、データエンジニア・MLエンジニアの活躍フィールドが広いです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年間休日145日以上の好待遇</h3>
              <p className="text-sm text-blue-700">年間休日145日以上（週休約3日相当）、フレックスタイム制、リモートワーク可と、ワークライフバランスが非常に充実しています。年収も高水準で、総合的な待遇は国内トップクラスです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>TypeScript / Python / Go いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模Webサービスの設計・開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / GCP でのクラウドインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>データ分析・ABテストの実践経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロダクト開発への情熱と自走力</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チームでのアジャイル開発経験</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "MG3-4", "550〜750万円"],
                  ["ミドルエンジニア", "MG5", "750〜1,000万円"],
                  ["シニアエンジニア", "MG6", "1,000〜1,300万円"],
                  ["リードエンジニア", "MG7", "1,300〜1,600万円"],
                  ["エンジニアリングマネージャー", "M+", "1,200〜1,500万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">リクルート転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人に強い。リクルートの非公開求人を保有していることも。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス求人に特化。リクルートからのスカウトも多い。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。リクルートへの転職支援実績が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">リクルートへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ", href: "/company/mercari/" },
              { name: "LINEヤフー", href: "/company/line-yahoo/" },
              { name: "楽天グループ", href: "/company/rakuten/" },
              { name: "サイバーエージェント", href: "/company/cyberagent/" },
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
