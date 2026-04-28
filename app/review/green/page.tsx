import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Green（グリーン）｜IT/Web業界特化の転職サイトの評判",
  description:
    "Green（グリーン）を30代・40代エンジニア目線で徹底レビュー。カジュアル面談文化、スタートアップ求人多数、「気になる」機能、エンジニア直接応募の実力を口コミで検証します。",
};

const reviews = [
  {
    label: "30代前半 / フロントエンドエンジニア",
    stars: 5,
    date: "2025年3月",
    text: "Greenの「気になる」機能を使って10社以上とカジュアル面談しました。面接ではなくカジュアルに話を聞ける文化が根付いているので、企業の雰囲気を事前に知ることができます。最終的にスタートアップのリードエンジニアとして年収100万UPで転職しました。",
  },
  {
    label: "30代後半 / バックエンドエンジニア",
    stars: 4,
    date: "2025年1月",
    text: "エージェントを介さず企業と直接やりとりできるのが気に入りました。自分のペースで転職活動ができるので、忙しいエンジニアに向いています。求人はWeb系・スタートアップが中心で、SIer系の求人は少なめです。",
  },
  {
    label: "30代前半 / iOSエンジニア",
    stars: 4,
    date: "2024年12月",
    text: "モバイルアプリ開発の求人が豊富で助かりました。企業からのスカウトも多く、選択肢に困りませんでした。ただ、年収交渉は自分でやる必要があるので、エージェントサービスとの併用がおすすめです。",
  },
  {
    label: "40代前半 / エンジニアマネージャー",
    stars: 3,
    date: "2024年10月",
    text: "スタートアップ求人が中心なので、40代のマネージャー向け求人は少なめでした。若手〜30代前半のエンジニアに最もフィットするサービスだと思います。ただ、一部メガベンチャーの求人もあり、情報収集には使えました。",
  },
];

const faqs = [
  {
    q: "Greenの利用は無料ですか？",
    a: "はい、求職者は完全無料で利用できます。企業側が掲載料金を支払うビジネスモデルです。",
  },
  {
    q: "Greenはエージェントサービスですか？",
    a: "いいえ、Greenは転職サイト（ダイレクトリクルーティング型）です。エージェントを介さず、企業と直接やりとりします。担当アドバイザーはつきませんが、自分のペースで活動できます。",
  },
  {
    q: "「気になる」機能とは何ですか？",
    a: "企業に対して気軽に興味を示せる機能です。「気になる」を送ると企業側に通知が届き、企業も興味があればカジュアル面談の打診が来ます。マッチングアプリのような仕組みです。",
  },
  {
    q: "カジュアル面談とは？",
    a: "選考を前提としない情報交換の場です。企業の雰囲気、開発環境、チーム体制などを気軽に質問でき、ミスマッチを防げます。Greenでは多くの企業がカジュアル面談を実施しています。",
  },
  {
    q: "どんな企業の求人が多いですか？",
    a: "Web系企業、スタートアップ、メガベンチャーの求人が中心です。IT/Web業界に特化しているため、SIerや製造業の求人は少ないです。",
  },
  {
    q: "エージェントサービスと併用すべきですか？",
    a: "おすすめです。Green（自分で探す）+ レバテックキャリア（エージェント）の組み合わせで、自分で気になる企業を探しつつ、エージェントからの提案も受けられます。",
  },
];

export default function GreenReview() {
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
          { name: "Green" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Green（グリーン）｜IT/Web業界特化の転職サイトの評判
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2025年4月 | カジュアル面談文化のIT転職サイトを徹底検証
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社アトラエ"],
                ["求人数", "30,000件以上"],
                ["対応エリア", "全国（東京中心）"],
                ["得意分野", "Web系・スタートアップ・メガベンチャー"],
                ["年収帯", "年収400万〜800万が中心"],
                ["対象年代", "20代後半〜30代（若手〜ミドル）"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Greenの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">カジュアル面談文化でミスマッチを防ぐ</h3>
              <p className="text-sm text-blue-700">
                Greenの最大の特徴は、選考前にカジュアル面談ができること。企業の雰囲気、開発環境、チームの働き方を事前に確認でき、入社後のミスマッチを大幅に減らせます。多くのIT企業がこの文化を受け入れており、気軽に話を聞けます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スタートアップ・Web系の求人が豊富</h3>
              <p className="text-sm text-blue-700">
                IT/Web業界に特化したGreenは、スタートアップ企業やメガベンチャーの求人が非常に豊富です。モダンな技術スタックを使う企業、フレックス制度やリモートワークを導入している企業の求人が多く、働き方を重視するエンジニアに人気です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「気になる」機能で気軽にアプローチ</h3>
              <p className="text-sm text-blue-700">
                正式応募の前に「気になる」を送ることで、企業とのマッチング度合いを確認できます。企業側も「気になる」を返してくれるので、双方の温度感を確認してから面談・選考に進めます。効率的な転職活動が可能です。
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
                  カジュアル面談でミスマッチ防止
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  スタートアップ求人が豊富
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  自分のペースで転職活動可能
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  企業と直接やりとりできる
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  年収交渉は自分でやる必要あり
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  SIer・製造業の求人は少ない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  40代向けの求人は限定的
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
          <h2 className="text-xl font-bold mb-3">Greenに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは「気になる」を送って、カジュアルに企業との出会いを始めてみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料登録して求人を見る
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "paiza転職", href: "/review/paiza/" },
              { name: "type転職エージェントIT", href: "/review/type-agent/" },
              { name: "Geekly", href: "/review/geekly/" },
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
