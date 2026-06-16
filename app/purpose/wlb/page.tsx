import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ワークライフバランス重視のIT転職先【残業少なめ企業の見つけ方】",
  description:
    "ワークライフバランスを重視するエンジニア向けの転職先選び方を解説。残業少なめIT企業の特徴、年収とのバランス、おすすめ企業タイプを紹介します。",
};

const faqs = [
  {
    q: "WLB重視の転職で年収は下がる？",
    a: "必ずしも下がりません。自社サービス企業やSaaS企業は残業が少なくても年収600〜800万円のレンジが一般的です。SIerの長時間労働で500万円より、WLB重視で600万円の企業も多数あります。",
  },
  {
    q: "残業が少ないIT企業の見分け方は？",
    a: "OpenWorkやLighthouseの口コミで平均残業時間を確認しましょう。月20時間以下が目安です。面接では「直近3ヶ月の平均残業時間」「休日出勤の頻度」を具体的に質問してください。",
  },
  {
    q: "フルリモートの方がWLBは良い？",
    a: "通勤時間がなくなる分、自由な時間は増えます。ただしオンオフの切り替えが難しく、かえって長時間労働になるケースも。フレックス+リモートの組み合わせが最もWLBに良いとされています。",
  },
  {
    q: "子育て中のエンジニアにおすすめの働き方は？",
    a: "フレックスタイム（コアタイム短め or なし）+ リモートワーク可の企業がおすすめです。時短勤務制度や看護休暇の充実度も確認しましょう。SmartHRやサイボウズ等の先進的な企業が参考になります。",
  },
  {
    q: "SIerからWeb系に転職するとWLBは改善される？",
    a: "一般的にはYesです。Web系自社サービス企業はスプリント単位で作業を管理するため、無理な納期に追われにくい傾向があります。ただし成長期のスタートアップは例外です。",
  },
  {
    q: "受託開発と自社開発、どちらがWLBが良い？",
    a: "自社開発の方がWLBは良い傾向です。受託開発は納期やクライアント都合で残業が発生しやすいですが、自社開発はスプリント計画で作業量をコントロールしやすいです。",
  },
];

export default function WlbPage() {
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
        title="ワークライフバランス重視のIT転職先【残業少なめ企業の見つけ方】"
        description="ワークライフバランスを重視するエンジニア向けの転職先選び方を解説。残業少なめIT企業の特徴、年収とのバランス、おすすめ企業タイプを紹介します。"
        url="/purpose/wlb/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "ワークライフバランス重視の転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワークライフバランス重視のIT転職先
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 残業少なめIT企業の見つけ方
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 月残業40時間以上で体力的に限界を感じている</li>
              <li>- 子育てや介護との両立を考えている</li>
              <li>- プライベートの時間を確保して自己投資したい</li>
              <li>- 年収が多少下がってもWLBを優先したい</li>
              <li>- リモートワーク・フレックスで働きたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業タイプ別WLB比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">平均残業</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">リモート</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "大手SaaS企業", salary: "550〜850万円", ot: "月10〜20h", remote: "フルリモート可" },
                  { type: "Web系メガベンチャー", salary: "600〜900万円", ot: "月15〜25h", remote: "ハイブリッド" },
                  { type: "社内SE（大企業）", salary: "500〜700万円", ot: "月10〜15h", remote: "週2〜3日" },
                  { type: "公共系SI", salary: "450〜650万円", ot: "月5〜15h", remote: "出社メイン" },
                  { type: "受託開発（中小）", salary: "400〜600万円", ot: "月20〜40h", remote: "企業による" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ot}</td>
                    <td className="px-4 py-3 text-slate-600">{row.remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">WLB重視の転職で確認すべきポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "平均残業時間を具体的に確認", desc: "OpenWorkの口コミ、面接での直接質問、エージェント経由の情報を総合して判断しましょう。月20時間以下が目安です。" },
              { num: "2", title: "リモートワーク制度の実態を確認", desc: "制度があっても実際に使えるかは別問題。チームの利用率やマネージャーの理解度を確認しましょう。" },
              { num: "3", title: "フレックスの運用実態を確認", desc: "コアタイムの長さ、実際の運用状況を確認。コアタイムなしのスーパーフレックスが最も自由度が高いです。" },
              { num: "4", title: "有給取得率を確認", desc: "有給取得率70%以上が目安。エンジニアのチームで実際に取得できているかも重要です。" },
              { num: "5", title: "オンコール・休日対応の有無を確認", desc: "SRE/インフラ系はオンコールの可能性があります。ローテーションの頻度と手当を確認しましょう。" },
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
              { name: "マイナビITエージェント", point: "WLB重視の求人が豊富。残業時間や制度面の情報提供が手厚い。" },
              { name: "レバテックキャリア", point: "自社サービス企業の求人が充実。カルチャーマッチングの精度が高い。" },
              { name: "Green", point: "カジュアル面談で実際の働き方を事前確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">WLB重視の転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            残業少なめ・リモート可の企業をIT特化型エージェントが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "残業少なめIT企業の見極め方", href: "/purpose/no-overtime/" },
              { name: "安定重視のエンジニア転職", href: "/purpose/stable/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
