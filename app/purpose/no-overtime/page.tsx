import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "残業少なめIT企業の見極め方【月20時間以下の企業を見つける】",
  description:
    "残業が少ないIT企業の見極め方を解説。口コミの読み方、面接での確認方法、残業が少ない企業の特徴、おすすめ企業タイプを紹介します。",
};

const faqs = [
  {
    q: "IT業界で残業月20時間以下は現実的？",
    a: "はい、自社サービス企業やSaaS企業では月10〜20時間が標準的です。受託開発でも工程管理がしっかりしている企業は月20時間以内に収まるケースが多いです。",
  },
  {
    q: "残業が少ない企業の特徴は？",
    a: "自社サービス開発、アジャイル開発の導入、フレックスタイム制、コードレビュー文化（品質担保で手戻り減少）、適切な人員配置が特徴です。",
  },
  {
    q: "口コミサイトの残業時間は信頼できる？",
    a: "OpenWorkやLighthouseの口コミは参考になりますが、部署やプロジェクトで大きく異なります。面接で「配属予定チームの直近3ヶ月の平均残業時間」を具体的に質問しましょう。",
  },
  {
    q: "残業が少ない代わりに年収は低い？",
    a: "必ずしもそうではありません。効率的な開発体制の企業は利益率が高く、年収も相応です。残業込みの高年収より、残業なしで同等以上の年収を実現する企業は多数あります。",
  },
  {
    q: "面接で残業時間を聞くのは失礼？",
    a: "全く失礼ではありません。むしろ働き方への関心は当然です。「チームの平均残業時間」「繁忙期の残業時間」「休日出勤の頻度」を具体的に質問しましょう。",
  },
  {
    q: "みなし残業（固定残業代）の企業は残業が多い？",
    a: "一概には言えません。みなし残業30時間だが実際は10時間という企業もあります。重要なのは実際の残業時間です。みなし残業時間=実際の残業時間ではないことを理解しましょう。",
  },
];

export default function NoOvertimePage() {
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
        title="残業少なめIT企業の見極め方【月20時間以下の企業を見つける】"
        description="残業が少ないIT企業の見極め方を解説。口コミの読み方、面接での確認方法、残業が少ない企業の特徴、おすすめ企業タイプを紹介します。"
        url="/purpose/no-overtime/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "残業少なめIT企業の見極め方" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">残業少なめIT企業の見極め方</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 月20時間以下の企業を見つける方法</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 現職の残業が月40時間以上で改善したい</li>
              <li>- 残業が少ない環境でプライベートを充実させたい</li>
              <li>- 定時退社して自己学習や副業の時間を確保したい</li>
              <li>- 健康面で長時間労働を続けられない</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業タイプ別の平均残業時間</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">平均残業</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">残業の特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "自社SaaS企業", ot: "月10〜20h", salary: "550〜850万円", feat: "スプリント管理で安定" },
                  { type: "社内SE", ot: "月5〜15h", salary: "500〜700万円", feat: "定常業務が中心" },
                  { type: "公共系SI", ot: "月10〜20h", salary: "450〜650万円", feat: "納期が長めで安定" },
                  { type: "受託開発（大手）", ot: "月20〜35h", salary: "500〜750万円", feat: "案件による変動大" },
                  { type: "成長期スタートアップ", ot: "月25〜45h", salary: "500〜800万円", feat: "裁量は大きいが忙しい" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ot}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">残業少なめ企業の見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "口コミサイトで部署別残業を確認", desc: "OpenWork、Lighthouseで部署別・職種別の残業時間を確認。全社平均ではなく配属予定チームの情報を探しましょう。" },
              { num: "2", title: "面接で具体的な数字を質問", desc: "「直近3ヶ月のチーム平均残業時間は？」「繁忙期はいつで、その時の残業時間は？」と聞きましょう。" },
              { num: "3", title: "みなし残業時間を確認", desc: "みなし残業45時間の企業は実際に残業が多い可能性大。みなし20時間以下の企業が目安です。" },
              { num: "4", title: "開発プロセスを確認", desc: "アジャイル開発でスプリント管理されている企業は残業が少ない傾向。ウォーターフォール+タイトな納期は要注意。" },
              { num: "5", title: "エージェントに内部情報を確認", desc: "エージェントは企業の内部情報を持っています。残業の実態や離職率など、求人票に載らない情報を聞きましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
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
              { name: "マイナビITエージェント", point: "残業少なめの求人を条件指定で検索可能。企業の内部情報にも詳しい。" },
              { name: "レバテックキャリア", point: "自社サービス企業の求人が豊富。働き方に関する情報提供も手厚い。" },
              { name: "doda ITエージェント", point: "大手企業・安定企業の求人が多い。残業月20h以下の条件で絞り込み可能。" },
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
          <h2 className="text-xl font-bold mb-3">残業少なめの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">残業月20時間以下の優良IT企業をプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "安定重視のエンジニア転職", href: "/purpose/stable/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
