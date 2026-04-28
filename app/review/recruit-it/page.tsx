import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "リクルートエージェントIT｜30代40代エンジニアの口コミと評判",
  description:
    "リクルートエージェントITを30代・40代エンジニア目線で徹底レビュー。求人数業界最多級20万件以上、幅広い業種、面接対策が手厚い、40代求人も豊富な実力を口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "30代前半 / Webエンジニア",
    stars: 4,
    date: "2025年3月",
    text: "求人数がとにかく多いです。他のエージェントでは見つからなかったニッチな業界のIT求人も紹介してもらえました。面接対策が非常に丁寧で、技術面接と人物面接の両方に対応した模擬面接を3回実施してもらえたのが大きかったです。年収は100万円UPで転職成功しました。",
  },
  {
    label: "40代前半 / インフラエンジニア",
    stars: 5,
    date: "2025年1月",
    text: "40代の転職は厳しいと覚悟していましたが、リクルートエージェントは求人の幅が広く、年齢を理由に断られることはありませんでした。大手SIerからユーザー企業の情シスに転職。年収は据え置きですが、ワークライフバランスが大幅に改善しました。",
  },
  {
    label: "30代後半 / PM",
    stars: 4,
    date: "2024年12月",
    text: "IT特化のエージェントと併用しましたが、非IT企業のDX推進ポジションはリクルートの方が圧倒的に強かったです。製造業のDX推進マネージャーとして年収150万円UPで転職できました。業界横断で求人を探せるのがリクルートの最大の強みだと思います。",
  },
  {
    label: "30代前半 / データエンジニア",
    stars: 3,
    date: "2024年11月",
    text: "求人数は多いですが、担当アドバイザーのIT知識にはばらつきがあります。最初の担当者は技術的な話が通じず、変更を依頼しました。2人目の担当者はIT業界出身で、技術スタックの話もスムーズにできました。担当者の当たり外れはあると感じます。",
  },
];

const faqs = [
  {
    q: "リクルートエージェントITの登録は無料ですか？",
    a: "はい、完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料で利用できます。",
  },
  {
    q: "リクルートエージェントのIT求人数はどのくらい？",
    a: "公開・非公開合わせて20万件以上の求人を保有しています。IT・Web業界の求人も数万件規模で、業界最多級です。",
  },
  {
    q: "40代エンジニアでも利用できますか？",
    a: "はい、40代以上のエンジニアの転職実績も豊富です。特にPM/PL経験者や、特定の業界知識を持つエンジニアは40代でも十分な求人があります。",
  },
  {
    q: "IT特化のエージェントとどちらを使うべき？",
    a: "併用がおすすめです。リクルートエージェントは非IT企業のDX求人や幅広い業種の求人に強く、IT特化エージェントとは異なる求人にアクセスできます。",
  },
  {
    q: "面接対策はどの程度してもらえますか？",
    a: "模擬面接、想定質問の共有、企業ごとの面接傾向の情報提供など、手厚いサポートを受けられます。技術面接の対策にも対応しています。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "全国の求人を取り扱っており、地方在住でもオンライン面談で利用可能です。リモートワーク求人も多数あります。",
  },
];

export default function RecruitItReview() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "レビュー", href: "/#ranking" },
          { name: "リクルートエージェントIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リクルートエージェントIT｜30代40代エンジニアの口コミと評判
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2025年4月 | 求人数業界最多級の総合型エージェントをエンジニア視点で徹底検証
        </p>

        {/* Overview Table */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社リクルート"],
                ["求人数", "200,000件以上（非公開含む）"],
                ["対応エリア", "全国（47都道府県）"],
                ["得意分野", "全業種横断・DX推進・大手企業"],
                ["年収帯", "幅広い（400万〜1,000万超）"],
                ["対象年代", "20代〜40代（幅広い年代に対応）"],
                ["料金", "完全無料"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                    {label}
                  </th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リクルートエージェントITの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">求人数業界最多級の20万件以上</h3>
              <p className="text-sm text-blue-700">
                IT・Web業界はもちろん、製造業・金融・商社・コンサルなど全業種のIT求人をカバー。非IT企業のDX推進ポジションや情報システム部門など、IT特化エージェントでは見つからない求人にアクセスできるのが最大の強みです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">面接対策の手厚さが業界トップクラス</h3>
              <p className="text-sm text-blue-700">
                模擬面接、企業ごとの面接傾向データ、過去の質問例の共有など、面接対策のサポートが非常に充実しています。技術面接と人物面接の両方に対応した準備ができるため、内定率が高いと評判です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代エンジニアの転職実績が豊富</h3>
              <p className="text-sm text-blue-700">
                IT特化エージェントでは30代までの求人が中心ですが、リクルートエージェントは40代以上の求人も豊富。特にPM・PL経験者や特定業界の知識を持つエンジニアに対して、マネジメントポジションや専門職の求人を多数紹介してくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  求人数が圧倒的に多い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  全業種のIT求人にアクセス可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  面接対策が非常に手厚い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  40代以上の転職実績が豊富
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  担当アドバイザーのIT知識にばらつき
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  Web系スタートアップの求人は少なめ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  求人が多すぎて選びにくい場合がある
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用者の口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-slate-700">{review.label}</span>
                  <span className="text-yellow-500 text-sm">
                    {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                  </span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">リクルートエージェントITに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            業界最多級の求人から、あなたに最適なIT求人を見つけてみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "ビズリーチ(IT)", href: "/review/bizreach-it/" },
              { name: "doda(IT特化)", href: "/review/doda-it/" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の詳細レビュー →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
