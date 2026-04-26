import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マイナビIT AGENTの評判・口コミ | 30代・40代エンジニア向け徹底レビュー",
  description:
    "マイナビIT AGENTを30代・40代エンジニア目線で徹底レビュー。社内SE求人の豊富さ、大手の安定感を口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "30代前半 / 社内SE",
    stars: 5,
    date: "2024年11月",
    text: "SIerの客先常駐から、大手メーカーの社内SEに転職できました。マイナビの強みはやはり大手企業とのコネクション。非公開求人で紹介された企業は、待遇も職場環境も良好でした。年収は50万円UP、何より残業が激減したのが嬉しいです。",
  },
  {
    label: "30代前半 / インフラエンジニア",
    stars: 4,
    date: "2024年10月",
    text: "初めての転職でしたが、履歴書の書き方から面接対策まで丁寧にサポートしてもらえました。マイナビブランドの安心感は大きいです。紹介された求人はブラック企業がなく、安心して応募できました。最終的に情報システム部門のポジションで決まりました。",
  },
  {
    label: "30代後半 / アプリケーションエンジニア",
    stars: 4,
    date: "2024年9月",
    text: "Java/Springの経験を活かして自社開発企業に転職。マイナビIT AGENTは求人の質が安定していて、怪しい企業がないのがいい点です。ただ、ハイクラス求人（年収1000万以上）は少なめでした。年収は60万円UP。",
  },
  {
    label: "40代前半 / 情シス担当",
    stars: 3,
    date: "2024年8月",
    text: "40代で情シスからの転職を相談しましたが、紹介される求人が少なかったです。30代前半までがメインターゲットだと感じました。担当者の対応は丁寧でしたが、結果的にdoda経由で転職が決まりました。",
  },
];

const faqs = [
  {
    q: "マイナビIT AGENTの登録は無料ですか？",
    a: "はい、完全無料です。マイナビグループの転職支援サービスとして、すべてのサポートを無料で受けられます。",
  },
  {
    q: "マイナビIT AGENTとマイナビ転職の違いは？",
    a: "マイナビ転職は自分で求人を検索する転職サイト、マイナビIT AGENTはIT専門のキャリアアドバイザーがつく転職エージェントです。個別サポートを受けたい方はIT AGENTがおすすめです。",
  },
  {
    q: "社内SE求人が多いのは本当ですか？",
    a: "はい。マイナビグループの企業ネットワークを活かして、大手メーカーや商社の社内SE・情シスポジションを多数保有しています。業界トップクラスの取り扱い数です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国対応ですが、首都圏・関西・名古屋・福岡の求人が中心です。リモートワーク求人も増加傾向にあります。",
  },
  {
    q: "40代でも利用できますか？",
    a: "登録は可能ですが、20代後半〜30代前半の求人が中心です。40代の方はdoda(IT特化)やレバテックキャリアとの併用をおすすめします。",
  },
  {
    q: "非公開求人はどのくらいですか？",
    a: "全体の80%以上が非公開求人です。登録後にアドバイザーから直接紹介される形で、一般には公開されない好条件の求人にアクセスできます。",
  },
];

export default function MynaviItReview() {
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
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          マイナビIT AGENTの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2024年12月 | 大手の安定感と社内SE求人を徹底検証</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社マイナビ"],
                ["求人数", "非公開（80%以上が非公開求人）"],
                ["対応エリア", "全国（首都圏・関西中心）"],
                ["得意分野", "社内SE・情シス・大手メーカーIT"],
                ["年収帯", "400万〜800万円が中心"],
                ["対象年代", "20代後半〜30代前半がメイン"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">マイナビIT AGENTの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大手企業の社内SE求人に圧倒的な強み</h3>
              <p className="text-sm text-blue-700">マイナビグループの営業力を活かし、大手メーカー・商社・金融機関の社内SE・情報システム部門のポジションを多数保有。SIerからの脱出を目指すエンジニアに最適な選択肢を提供します。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">初めての転職でも安心のサポート体制</h3>
              <p className="text-sm text-blue-700">履歴書・職務経歴書の書き方から、面接対策、入社後のフォローまで一貫したサポート。特に初めての転職で不安な方に、丁寧なカウンセリングを提供しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">求人の質が安定している</h3>
              <p className="text-sm text-blue-700">マイナビブランドの審査基準をクリアした企業のみを掲載。ブラック企業が極めて少なく、労働環境・待遇面で安心して応募できる求人が揃っています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>社内SE・情シス求人が豊富</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>大手企業の非公開求人が多い</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>初めての転職でも丁寧なサポート</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>ブラック企業が少ない</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>40代向けの求人は少ない</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>ハイクラス（年収1000万以上）は弱い</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>スタートアップ系の求人は少なめ</li>
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
          <h2 className="text-xl font-bold mb-3">マイナビIT AGENTに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">社内SEへの転職を考えているなら、まずはマイナビに相談してみませんか？</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">無料カウンセリングを予約する</a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "Geekly", href: "/review/geekly/" },
              { name: "ワークポート", href: "/review/workport/" },
              { name: "doda(IT特化)", href: "/review/doda-it/" },
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
