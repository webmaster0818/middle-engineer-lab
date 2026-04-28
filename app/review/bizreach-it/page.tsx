import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ビズリーチでエンジニア転職｜ハイクラスIT求人の評判",
  description:
    "ビズリーチのIT・エンジニア向け求人を30代・40代エンジニア目線で徹底レビュー。年収600万以上のハイクラス求人、CTO/VPoEクラスのポジション、ヘッドハンター経由のスカウト型転職の実態を検証します。",
};

const reviews = [
  {
    label: "30代後半 / バックエンドエンジニア",
    stars: 5,
    date: "2025年2月",
    text: "年収700万からの転職で、ビズリーチ経由で年収950万のオファーを獲得しました。スカウト型なので自分から動かなくても企業やヘッドハンターからオファーが届くのが便利です。特にメガベンチャーのテックリードポジションのスカウトが多く、選択肢が豊富でした。",
  },
  {
    label: "40代前半 / CTO候補",
    stars: 5,
    date: "2025年1月",
    text: "スタートアップのCTOポジションをヘッドハンター経由で紹介してもらいました。年収は1,200万円。ビズリーチにしかないハイクラス求人が多く、40代でも技術力とマネジメント経験があれば引く手あまたです。プラチナスカウトは企業の本気度が高いので面談の質も高い。",
  },
  {
    label: "30代前半 / フルスタックエンジニア",
    stars: 4,
    date: "2024年12月",
    text: "年収600万で登録しましたが、ハイクラス求人は年収800万以上が中心で、自分のレベルだと選択肢が限られる印象でした。ただ、ヘッドハンターとの面談でキャリアの棚卸しができたのは良かったです。もう少し経験を積んでから再度活用する予定です。",
  },
  {
    label: "30代後半 / SRE",
    stars: 4,
    date: "2024年11月",
    text: "AWS/Kubernetesの経験を評価されて、SaaS企業のSREリードとして年収200万UPの転職に成功。無料プランでも十分スカウトは来ますが、有料プランの方が企業の幅が広がります。IT特化エージェントと併用するのがベストだと感じました。",
  },
];

const faqs = [
  {
    q: "ビズリーチは無料で使えますか？",
    a: "基本的な機能は無料で利用できます。プラチナスカウトの受信・返信は無料プランでも可能です。有料プラン（プレミアムステージ）に加入すると、すべてのスカウトの閲覧・返信、求人検索が可能になります。",
  },
  {
    q: "ビズリーチでエンジニア向けの求人は多いですか？",
    a: "はい、IT・テクノロジー分野の求人は非常に豊富です。特に年収600万以上のハイクラスIT求人、CTO/VPoE/テックリードなどの技術マネジメント職の求人が充実しています。",
  },
  {
    q: "年収いくらからビズリーチを使うべき？",
    a: "現年収600万円以上が目安です。年収500万円台でもスキルや経験次第でスカウトは届きますが、ビズリーチの強みを最大限活かすなら600万以上が推奨です。",
  },
  {
    q: "ヘッドハンターとは何ですか？",
    a: "ビズリーチに登録している転職エージェントのことです。あなたの経歴を見てスカウトを送り、マッチする求人を紹介してくれます。IT業界に強いヘッドハンターを選ぶのがポイントです。",
  },
  {
    q: "スカウトを増やすコツは？",
    a: "職務経歴書を詳細に記載すること、特に使用技術（言語・フレームワーク・クラウド）、マネジメント経験、プロジェクト規模を具体的に書くとスカウト率が大幅に上がります。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "もちろん可能です。ビズリーチ（スカウト型）+ レバテックキャリア（IT特化）の組み合わせが30代エンジニアに人気です。",
  },
];

export default function BizreachItReview() {
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
          { name: "ビズリーチ(IT)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ビズリーチでエンジニア転職｜ハイクラスIT求人の評判
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2025年4月 | スカウト型ハイクラス転職サイトのIT求人を徹底検証
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社ビズリーチ（Visional）"],
                ["求人数", "127,000件以上"],
                ["対応エリア", "全国 + 海外"],
                ["得意分野", "ハイクラスIT・CTO/VPoE・テックリード"],
                ["年収帯", "年収600万円以上（800万以上が中心）"],
                ["対象年代", "30代〜50代（ハイクラス層）"],
                ["料金", "基本無料（プレミアムプランあり）"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ビズリーチのIT転職における強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スカウト型で待つだけで好条件オファーが届く</h3>
              <p className="text-sm text-blue-700">
                職務経歴書を登録しておくだけで、企業やヘッドハンターから直接スカウトが届きます。特にプラチナスカウトは企業の本気度が高く、書類選考免除で面談に進めるケースも多数。忙しいエンジニアでも効率的に転職活動ができます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収600万以上のハイクラスIT求人に特化</h3>
              <p className="text-sm text-blue-700">
                ビズリーチの求人は年収600万円以上が基本ライン。年収800万〜1,500万超のCTO、VPoE、テックリード、アーキテクトといったハイクラスポジションの求人が充実しています。年収アップを狙うミドルエンジニアに最適です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">CTO/VPoEクラスの経営層ポジション</h3>
              <p className="text-sm text-blue-700">
                スタートアップのCTO、メガベンチャーのVPoE、大企業のCDOなど、技術経営層のポジションはビズリーチが圧倒的に強い領域です。マネジメント経験のある40代エンジニアにとって、キャリアの次のステージを開く重要なプラットフォームです。
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
                  スカウト型で効率的に転職活動可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  ハイクラスIT求人が豊富
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  CTO/VPoEなど経営層ポジション多数
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  企業の本気度が高いプラチナスカウト
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  年収600万未満だと求人が限られる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  有料プランでないとフル活用できない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  ヘッドハンターの質にばらつきがある
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
          <h2 className="text-xl font-bold mb-3">ビズリーチに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたの市場価値を知るために、まずはスカウトを受けてみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料登録してスカウトを受ける
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "リクルートエージェントIT", href: "/review/recruit-it/" },
              { name: "Geekly", href: "/review/geekly/" },
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
