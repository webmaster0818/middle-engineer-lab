import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/uturnable/" },
  title: "Uターン・Iターン×IT転職ガイド【地方で働くエンジニア】",
  description:
    "Uターン・Iターンで地方のIT企業に転職する方法を解説。地方IT企業の年収、リモートワーク活用法、地域別の求人状況を紹介します。",
};

const faqs = [
  {
    q: "地方のIT企業の年収は東京と比べてどれくらい低い？",
    a: "一般的に東京の70〜85%程度です。ただし生活コスト（住居費、物価）が大幅に低いため、実質的な可処分所得は同等かそれ以上になるケースも多いです。",
  },
  {
    q: "地方にIT企業はあるの？",
    a: "福岡、札幌、仙台、大阪、名古屋を中心に地方拠点を構えるIT企業が増えています。加えて地元のSIerやWeb制作会社、自治体DX案件もあります。フルリモート企業に地方から参加する選択肢もあります。",
  },
  {
    q: "UターンとIターンの違いは？",
    a: "Uターンは出身地に戻る転職、Iターンは出身地以外の地方に移住する転職です。Jターン（出身地の近くの都市部に転職）もあります。",
  },
  {
    q: "地方移住の支援制度はある？",
    a: "多くの自治体が移住支援金（最大100万円）、住居費補助、子育て支援金を提供しています。「移住支援金 対象法人」に登録されているIT企業もあります。自治体のWebサイトで確認しましょう。",
  },
  {
    q: "フルリモートで東京の企業に所属しながら地方に住むのは？",
    a: "最も年収を維持しやすい選択肢です。「居住地不問」のフルリモート企業なら東京水準の給与で地方に住めます。ただし月1回程度のオフサイトへの参加が必要なケースもあります。",
  },
  {
    q: "地方でのITエンジニアの将来性は？",
    a: "自治体DX、地方企業のクラウド移行、リモートワークの普及により、地方のIT需要は増加傾向です。特にインフラエンジニアとフルスタックエンジニアの需要が高いです。",
  },
];

export default function UturnablePage() {
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
      <ArticleJsonLd title="Uターン・Iターン×IT転職ガイド【地方で働くエンジニア】" description="Uターン・Iターンで地方のIT企業に転職する方法を解説。地方IT企業の年収、リモートワーク活用法、地域別の求人状況を紹介します。" url="/purpose/uturnable/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "Uターン・Iターン×IT転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Uターン・Iターン×IT転職ガイド</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 地方で働くエンジニアの転職完全ガイド</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 地元に戻ってITエンジニアとして働きたい</li>
              <li>- 地方の生活コストの低さを活かしたい</li>
              <li>- 自然豊かな環境で子育てしたい</li>
              <li>- フルリモートで地方から東京の企業に参加したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">地域別のIT転職状況</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">地域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">IT求人数</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">生活コスト</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: "福岡", salary: "400〜650万円", jobs: "多い", cost: "東京の60〜70%" },
                  { area: "大阪", salary: "450〜700万円", jobs: "多い", cost: "東京の70〜80%" },
                  { area: "名古屋", salary: "430〜680万円", jobs: "中程度", cost: "東京の65〜75%" },
                  { area: "札幌", salary: "370〜580万円", jobs: "中程度", cost: "東京の55〜65%" },
                  { area: "仙台", salary: "380〜600万円", jobs: "中程度", cost: "東京の55〜65%" },
                  { area: "フルリモート（地方在住）", salary: "500〜900万円", jobs: "増加中", cost: "居住地による" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.jobs}</td>
                    <td className="px-4 py-3 text-slate-600">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Uターン・Iターン転職のポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "フルリモート企業も視野に入れる", desc: "地方在住でも東京水準の給与で働ける選択肢。居住地不問のSaaS企業やスタートアップを探しましょう。" },
              { num: "2", title: "自治体の移住支援制度を活用する", desc: "移住支援金（最大100万円）、住居費補助、起業支援金など、多くの自治体がIT人材の移住を支援しています。" },
              { num: "3", title: "地方拠点のあるIT企業を探す", desc: "メガベンチャーやSaaS企業の地方拠点は、東京とほぼ同等の技術環境と給与水準を提供するケースが多いです。" },
              { num: "4", title: "生活コストを計算して比較する", desc: "東京で年収700万円 vs 地方で年収550万円。住居費が月5〜10万円下がると、実質的な可処分所得は同等以上になります。" },
              { num: "5", title: "地元のIT企業コミュニティに参加する", desc: "地方のITコミュニティ（勉強会、Meetup）に参加して情報収集。コネクション経由の紹介転職も有力です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
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
              { name: "レバテックキャリア", point: "地方拠点の求人やフルリモート求人が充実。Uターン転職の相談にも対応。" },
              { name: "doda ITエージェント", point: "全国の求人をカバー。地方企業の求人数が多い。" },
              { name: "Green", point: "フルリモート・地方勤務の求人フィルターあり。カジュアル面談で企業を確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">Uターン・Iターン転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">地方のIT求人やフルリモート求人をプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "福岡エリアの転職ガイド", href: "/area/fukuoka/" },
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
