import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "レバテックキャリアの評判・口コミ | 30代・40代エンジニア向け徹底レビュー",
  description:
    "レバテックキャリアを30代・40代エンジニア目線で徹底レビュー。年収800万以上の求人が半数、IT特化No.1の実力を口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "30代前半 / バックエンドエンジニア",
    stars: 5,
    date: "2024年10月",
    text: "SIerから自社開発企業への転職で年収が120万円UPしました。担当アドバイザーがJavaやSpring Bootの技術トレンドに詳しく、企業の開発環境まで具体的に教えてくれたのが決め手です。面接対策では技術質問のシミュレーションまでしてもらえました。",
  },
  {
    label: "30代後半 / インフラエンジニア",
    stars: 4,
    date: "2024年9月",
    text: "AWS環境の設計経験を活かしてSaaS企業のSREポジションに転職。年収は80万円UP。クラウドインフラの求人が豊富で、技術的な会話がスムーズにできるアドバイザーだったので信頼できました。ただ地方の求人は少なかったです。",
  },
  {
    label: "40代前半 / プロジェクトマネージャー",
    stars: 4,
    date: "2024年8月",
    text: "PM経験を活かしてテックリードのポジションを紹介してもらいました。40代でもマネジメント経験があれば十分に求人がある印象です。年収は据え置きでしたが、より技術に近いポジションに移れたので満足しています。",
  },
  {
    label: "30代前半 / フロントエンドエンジニア",
    stars: 5,
    date: "2024年7月",
    text: "React/TypeScript経験3年で転職活動を開始。レバテック経由で5社応募し、3社から内定をもらえました。特にメガベンチャーの非公開求人を紹介してもらえたのが大きかったです。最終的に年収150万円UPで決まりました。",
  },
];

const faqs = [
  {
    q: "レバテックキャリアの登録は無料ですか？",
    a: "はい、完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料で利用できます。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "レバテックキャリアは未経験でも使えますか？",
    a: "IT業界での実務経験がある方が対象です。未経験の方はワークポートなど、未経験者向けのエージェントをおすすめします。",
  },
  {
    q: "レバテックキャリアの対応エリアは？",
    a: "東京・神奈川・千葉・埼玉の首都圏と、大阪・名古屋・福岡が中心です。リモートワーク求人も多数あるため、地方在住でも利用可能です。",
  },
  {
    q: "登録から内定までの期間はどのくらい？",
    a: "平均2〜3ヶ月程度です。ただし、すぐに転職しない情報収集目的での登録も可能です。",
  },
  {
    q: "レバテックキャリアとレバテックフリーランスの違いは？",
    a: "レバテックキャリアは正社員転職向け、レバテックフリーランスはフリーランス案件紹介サービスです。正社員で安定したい方はキャリア、収入を最大化したい方はフリーランスがおすすめです。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "もちろん可能です。むしろ2〜3社の併用が推奨されています。レバテックキャリア（IT特化）+ doda（総合型）の組み合わせが人気です。",
  },
];

export default function LevtechReview() {
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
          { name: "レバテックキャリア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2024年12月 | IT特化転職エージェントNo.1の実力を徹底検証
        </p>

        {/* Overview Table */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "レバテック株式会社"],
                ["求人数", "48,000件以上（非公開含む）"],
                ["対応エリア", "首都圏・関西・名古屋・福岡"],
                ["得意分野", "Web系・SaaS・メガベンチャー"],
                ["年収帯", "年収800万円以上が約50%"],
                ["対象年代", "20代後半〜40代（30代が中心）"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックキャリアの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">IT業界の求人に圧倒的な強み</h3>
              <p className="text-sm text-blue-700">
                IT・Web業界に完全特化しており、求人数は48,000件以上。特にWeb系自社開発企業、SaaS企業、メガベンチャーとの強いパイプラインを持っています。非公開求人も多く、一般には出回らない好条件の求人にアクセスできます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術に精通したアドバイザー</h3>
              <p className="text-sm text-blue-700">
                IT業界出身のアドバイザーが多数在籍。プログラミング言語やフレームワーク、クラウドサービスの知識があるため、技術的な相談がスムーズにできます。企業の開発環境・技術スタック・チーム体制まで詳しく把握しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収交渉力の高さ</h3>
              <p className="text-sm text-blue-700">
                年収800万円以上の求人が全体の約50%を占めるハイクラス寄りのエージェント。30代エンジニアの年収UPに強く、企業との年収交渉も積極的に行ってくれます。技術力を正当に評価してもらえる求人を厳選して紹介してくれるのが特徴です。
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
                  IT特化で求人の質が高い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  技術トレンドに詳しいアドバイザー
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  年収800万以上の求人が豊富
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  非公開求人でライバルが少ない
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  地方の求人が少ない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  IT未経験者には不向き
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  事務・管理系の求人はない
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

        {/* CTA + Related */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">レバテックキャリアに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、あなたの市場価値を確認してみませんか？
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
              { name: "Geekly", href: "/review/geekly/" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/" },
              { name: "ワークポート", href: "/review/workport/" },
              { name: "doda(IT特化)", href: "/review/doda-it/" },
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
