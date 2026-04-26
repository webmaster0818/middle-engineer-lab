import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "doda(IT特化)の評判・口コミ | 30代・40代エンジニア向け徹底レビュー",
  description:
    "doda(IT特化)を30代・40代エンジニア目線で徹底レビュー。求人数最多級、40代エンジニア向け求人の豊富さを口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "40代前半 / バックエンドエンジニア",
    stars: 5,
    date: "2024年11月",
    text: "40代の転職は厳しいと聞いていましたが、dodaのIT特化サービスでは年齢に合った求人を多数紹介してもらえました。マネジメント経験とJava/AWSの技術力を組み合わせた提案をしてもらい、最終的にSaaS企業のテックリードとして年収100万円UPで転職できました。",
  },
  {
    label: "30代後半 / フルスタックエンジニア",
    stars: 4,
    date: "2024年10月",
    text: "エージェントサービスと転職サイトの両方を使えるのがdodaの最大の強み。自分でも求人を探しつつ、エージェントからの提案も受けられるので、網羅的に転職活動ができました。ただ求人数が多すぎて、絞り込みに時間がかかりました。",
  },
  {
    label: "40代後半 / インフラエンジニア",
    stars: 4,
    date: "2024年9月",
    text: "40代後半でも10社以上紹介してもらえました。他のIT特化エージェントでは断られることもある年代ですが、dodaは年齢で切らない印象です。年収査定ツールで自分の市場価値を確認できたのも良かったです。最終的に大手SIerの上流工程ポジションに決まりました。",
  },
  {
    label: "30代前半 / Webエンジニア",
    stars: 3,
    date: "2024年8月",
    text: "dodaは求人数が多い反面、スカウトメールが大量に来て管理が大変でした。IT特化アドバイザーの技術知識はレバテックほど深くなく、技術的な相談は物足りなさを感じました。ただ、幅広い選択肢を見たい場合にはdodaが最適だと思います。",
  },
];

const faqs = [
  {
    q: "dodaのIT特化サービスとは？",
    a: "dodaの中でIT・エンジニア求人に特化した専門チームです。IT業界の知識を持つアドバイザーが担当し、通常のdodaサービスに加えてIT特化の非公開求人も紹介してもらえます。",
  },
  {
    q: "dodaの登録は無料ですか？",
    a: "はい、完全無料です。エージェントサービスも転職サイトサービスも、すべて無料で利用できます。",
  },
  {
    q: "エージェントとサイトの違いは？",
    a: "エージェントは担当アドバイザーがつき、求人紹介・書類添削・面接対策をサポート。サイトは自分で求人を検索して直接応募する形式です。dodaは両方を同時に利用できるのが強みです。",
  },
  {
    q: "40代エンジニアでも求人はありますか？",
    a: "はい、dodaは40代向けの求人が業界最多級です。マネジメント経験やアーキテクト経験がある方は特に求人が豊富で、PM・テックリード・CTOクラスのポジションも多数あります。",
  },
  {
    q: "年収査定ツールとは？",
    a: "dodaが提供する無料サービスで、あなたの経歴・スキルを入力すると、市場価値に基づいた適正年収を算出してくれます。転職活動の方向性を決める参考になります。",
  },
  {
    q: "スカウトメールを減らす方法は？",
    a: "マイページの通知設定でスカウトの頻度や条件を細かく設定できます。「IT特化のみ」「年収○○万以上のみ」など条件を絞ることで、関連度の高いスカウトだけを受け取れます。",
  },
];

export default function DodaItReview() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "doda(IT特化)" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          doda(IT特化)の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2024年12月 | 求人数最多級、40代エンジニアの転職を徹底検証</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "パーソルキャリア株式会社"],
                ["求人数", "200,000件以上（IT求人含む）"],
                ["対応エリア", "全国"],
                ["得意分野", "総合型 + IT特化チーム"],
                ["年収帯", "400万〜1,000万円と幅広い"],
                ["対象年代", "全年代対応（40代実績も豊富）"],
                ["料金", "完全無料"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">doda(IT特化)の強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">圧倒的な求人数で選択肢が広い</h3>
              <p className="text-sm text-blue-700">総合型エージェントとして業界最多級の求人数を誇り、その中からIT特化チームが最適な求人をピックアップ。SIer、自社開発、コンサル、社内SEなど、あらゆるタイプのIT求人を網羅しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エージェント + サイトの二刀流</h3>
              <p className="text-sm text-blue-700">転職エージェント（担当者つき）と転職サイト（自分で検索）を同時に利用できる唯一無二のサービス。自分のペースで探しつつ、プロのアドバイスも受けられる柔軟性が魅力です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代エンジニアの転職実績が豊富</h3>
              <p className="text-sm text-blue-700">年齢で門前払いしない方針で、40代のエンジニア転職実績が業界トップクラス。マネジメント職、アーキテクト、テックリードなど、経験を活かしたポジションの提案に強みがあります。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>業界最多級の求人数</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>エージェントとサイト両方使える</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>40代エンジニアの求人が豊富</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>年収査定など無料ツールが充実</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>求人が多すぎて絞り込みが大変</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>IT専門性はレバテックに劣る</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>スカウトメールが大量に届く</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用者の口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-slate-700">{review.label}</span>
                  <span className="text-yellow-500 text-sm">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
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
          <h2 className="text-xl font-bold mb-3">doda(IT特化)に無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">40代エンジニアの転職も、dodaなら豊富な求人から最適な1社が見つかります。</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">無料カウンセリングを予約する</a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "Geekly", href: "/review/geekly/" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/" },
              { name: "ワークポート", href: "/review/workport/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の詳細レビュー →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
