import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "フルリモート勤務のエンジニア求人ガイド【2026年版】",
  description:
    "フルリモートで働けるエンジニア求人の見つけ方を解説。フルリモート企業の特徴、年収、注意点、おすすめ企業タイプを紹介します。",
};

const faqs = [
  {
    q: "フルリモートの求人は減っている？",
    a: "2024年のオフィス回帰トレンド後、2026年現在はハイブリッド（週1〜2出社）が主流です。ただしIT業界ではフルリモート求人も依然として一定数あり、特にSaaS企業やスタートアップに多いです。",
  },
  {
    q: "フルリモートで年収は下がる？",
    a: "企業によります。地方在住でも東京水準の給与を支払う企業もあれば、居住地で給与を調整する企業もあります。求人情報で「居住地不問」「全国一律給与」を確認しましょう。",
  },
  {
    q: "フルリモートのデメリットは？",
    a: "コミュニケーション不足、孤独感、オンオフの切り替えの難しさ、キャリアアップの機会減少（可視性の低下）が主なデメリットです。自律的に働ける人でないと厳しい面があります。",
  },
  {
    q: "フルリモートで地方移住は可能？",
    a: "「居住地不問」の企業であれば可能です。ただし月1回程度のオフサイトミーティングへの参加が求められるケースもあるため、交通アクセスは考慮しましょう。",
  },
  {
    q: "フルリモートに向いている職種は？",
    a: "バックエンド、フロントエンド、SRE、データエンジニア、テクニカルライターが特に向いています。逆にハードウェア関連やセキュリティ系は出社が必要なケースが多いです。",
  },
  {
    q: "フルリモートの面接はどう進む？",
    a: "全てオンラインで完結するケースがほとんどです。ビデオ面接ツール（Zoom/Google Meet）とコーディングツール（CoderPad等）を使った技術面接が一般的です。",
  },
];

export default function RemoteFullPage() {
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
      <ArticleJsonLd
        title="フルリモート勤務のエンジニア求人ガイド【2026年版】"
        description="フルリモートで働けるエンジニア求人の見つけ方を解説。フルリモート企業の特徴、年収、注意点、おすすめ企業タイプを紹介します。"
        url="/purpose/remote-full/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "フルリモート勤務ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フルリモート勤務のエンジニア求人ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | フルリモートで働く完全ガイド</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 通勤時間をゼロにして生産性を上げたい</li>
              <li>- 地方在住のまま東京水準の給与で働きたい</li>
              <li>- 子育て・介護と両立したい</li>
              <li>- 自分のペースで集中して仕事したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモート企業タイプ別比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">居住地制限</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">出社頻度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "フルリモートSaaS", salary: "550〜850万円", loc: "不問", office: "月0〜1回" },
                  { type: "リモートファーストスタートアップ", salary: "500〜800万円", loc: "不問", office: "四半期1回" },
                  { type: "大手IT（リモート可）", salary: "600〜900万円", loc: "関東圏", office: "月2〜4回" },
                  { type: "外資系IT", salary: "800〜1,500万円", loc: "不問が多い", office: "月0〜2回" },
                  { type: "フリーランス（フルリモート案件）", salary: "月60〜100万円", loc: "不問", office: "なし" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.loc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモート企業を見極めるポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "「フルリモート」の定義を確認", desc: "完全出社不要なのか、月1回出社ありなのか。「居住地不問」と明記されているかを確認しましょう。" },
              { num: "2", title: "給与体系を確認", desc: "全国一律給与か、居住地による調整ありか。リモートワーク手当（月5,000〜15,000円）の有無も確認。" },
              { num: "3", title: "リモートワークの文化を確認", desc: "非同期コミュニケーション（Slack/Notion）の活用度、ドキュメント文化の充実度を確認しましょう。" },
              { num: "4", title: "評価制度を確認", desc: "成果ベースの評価制度が整っているか。「可視性が低い=評価されない」にならない仕組みがあるかを確認。" },
              { num: "5", title: "チームビルディング施策を確認", desc: "オフサイトミーティング、オンライン懇親会、1on1の頻度など、孤立感を防ぐ施策があるかを確認。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "フルリモート求人のフィルタリングが可能。企業のリモート文化の情報も提供。" },
              { name: "Green", point: "リモート求人が豊富。企業のリモートワーク実態を口コミで確認できる。" },
              { name: "Reworker", point: "リモートワーク求人に特化した転職サイト。フルリモート求人を効率的に探せる。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600">{agent.point}</p>
              </div>
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
          <h2 className="text-xl font-bold mb-3">フルリモート求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">フルリモートで働ける優良企業をIT特化型エージェントが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "Uターン・Iターン×IT転職", href: "/purpose/uturnable/" },
              { name: "残業少なめIT企業の見極め方", href: "/purpose/no-overtime/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
