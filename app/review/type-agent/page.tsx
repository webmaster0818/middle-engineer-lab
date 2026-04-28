import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "type転職エージェントIT｜一都三県エンジニアの口コミ",
  description:
    "type転職エージェントITを30代・40代エンジニア目線で徹底レビュー。東京・神奈川・千葉・埼玉に特化、IT/Web業界に強い老舗キャリアデザインセンター運営の実力を検証します。",
};

const reviews = [
  {
    label: "30代前半 / Webエンジニア",
    stars: 5,
    date: "2025年3月",
    text: "東京都内のWeb企業に転職しました。type転職エージェントは首都圏特化なだけあって、都内のIT企業の内部情報に非常に詳しかったです。残業時間、チームの雰囲気、技術スタックまで具体的に教えてもらえたので、入社後のギャップがほとんどありませんでした。年収は80万UP。",
  },
  {
    label: "30代後半 / サーバーサイドエンジニア",
    stars: 4,
    date: "2025年1月",
    text: "神奈川県在住で都内勤務の求人を中心に紹介してもらいました。リモートワーク可の求人も多く、通勤負担を考慮した提案をしてもらえたのが良かったです。担当者の対応が丁寧で、転職活動のペースを自分でコントロールできました。",
  },
  {
    label: "30代前半 / QAエンジニア",
    stars: 4,
    date: "2024年11月",
    text: "QAエンジニアという比較的ニッチな職種でしたが、首都圏のIT企業の中からしっかりマッチする求人を紹介してもらえました。他の大手エージェントでは開発エンジニアの求人ばかり紹介されがちでしたが、type転職エージェントは職種の理解が深かった印象です。",
  },
  {
    label: "40代前半 / SE",
    stars: 3,
    date: "2024年10月",
    text: "一都三県以外の求人がほとんどないので、地方への転職を考えている方には不向きです。ただ、首都圏のIT求人に関しては企業との結びつきが強く、他では見ない独自求人もあります。40代でもSE/PM経験があれば求人はありました。",
  },
];

const faqs = [
  {
    q: "type転職エージェントITの登録は無料ですか？",
    a: "はい、完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料でサポートしてもらえます。",
  },
  {
    q: "type転職エージェントの対応エリアは？",
    a: "東京・神奈川・千葉・埼玉の一都三県が中心です。首都圏以外の求人は少ないため、地方転職を希望する方は他のエージェントとの併用をおすすめします。",
  },
  {
    q: "type転職エージェントの運営会社は？",
    a: "株式会社キャリアデザインセンターが運営しています。転職サイト「type」や「女の転職type」なども運営する老舗の人材サービス企業です。",
  },
  {
    q: "IT未経験でも使えますか？",
    a: "IT業界での実務経験がある方が対象です。完全未経験の方は、未経験者向けのプログラミングスクールや研修付きエージェントを検討してください。",
  },
  {
    q: "type転職サイトとtype転職エージェントの違いは？",
    a: "type転職サイトは自分で求人を探して応募する転職サイト、type転職エージェントは担当アドバイザーが求人を紹介してくれるエージェントサービスです。エージェントの方が非公開求人にアクセスでき、年収交渉も代行してくれます。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "もちろん可能です。type転職エージェント（首都圏特化）+ レバテックキャリア（IT特化）の組み合わせで、首都圏のIT求人を網羅的にカバーできます。",
  },
];

export default function TypeAgentReview() {
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
          { name: "type転職エージェントIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          type転職エージェントIT｜一都三県エンジニアの口コミ
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2025年4月 | 首都圏IT転職に強い老舗エージェントを徹底検証
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社キャリアデザインセンター"],
                ["求人数", "29,000件以上（非公開含む）"],
                ["対応エリア", "一都三県（東京・神奈川・千葉・埼玉）"],
                ["得意分野", "IT/Web業界・首都圏のIT企業"],
                ["年収帯", "年収500万〜800万が中心"],
                ["対象年代", "20代後半〜40代前半"],
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">type転職エージェントITの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">一都三県のIT企業に圧倒的な情報力</h3>
              <p className="text-sm text-blue-700">
                東京・神奈川・千葉・埼玉の首都圏に特化しているため、エリア内のIT企業との結びつきが強いのが特徴です。企業の社風、残業時間、開発環境、チーム構成まで詳細な情報を持っており、入社後のミスマッチを最小限に抑えられます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">老舗キャリアデザインセンターの信頼性</h3>
              <p className="text-sm text-blue-700">
                転職サイト「type」を長年運営するキャリアデザインセンターのエージェントサービス。IT業界での転職支援実績が豊富で、企業との太いパイプラインを持っています。特に都内のWeb系企業、SaaS企業との関係が深いです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">丁寧なカウンセリングと的確なマッチング</h3>
              <p className="text-sm text-blue-700">
                一人ひとりのキャリアプランに寄り添った丁寧なカウンセリングが好評です。求人数の多さよりも、マッチングの精度を重視したエージェントで、紹介される求人の的中率が高いと利用者から評価されています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  首都圏IT企業の内部情報が豊富
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  老舗ならではの企業との太いパイプ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  丁寧で的確なマッチング
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  独自求人・非公開求人あり
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  一都三県以外の求人がほぼない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  求人数は大手エージェントに劣る
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  ハイクラス求人は少なめ
                </li>
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
          <h2 className="text-xl font-bold mb-3">type転職エージェントITに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            首都圏でのIT転職をお考えなら、まずは無料カウンセリングから始めてみませんか？
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
              { name: "リクルートエージェントIT", href: "/review/recruit-it/" },
              { name: "Geekly", href: "/review/geekly/" },
              { name: "Green", href: "/review/green/" },
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
