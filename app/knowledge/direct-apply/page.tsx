import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "直接応募vs転職エージェント【メリット比較】| ミドルエンジニア転職ラボ",
  description:
    "直接応募と転職エージェント経由の違いを徹底比較。30代・40代エンジニアがどちらの方法で転職活動すべきか、メリット・デメリットと使い分け方を解説します。",
};

const faqs = [
  {
    q: "直接応募とエージェント経由、どちらが内定率が高いですか？",
    a: "一般的にエージェント経由の方が内定率は高い傾向にあります。推薦状の添付、事前の情報共有、面接対策のサポートが書類選考の通過率を上げるためです。ただし、リファラルや企業の採用ページからの直接応募もエンジニアでは好まれます。",
  },
  {
    q: "直接応募の場合、年収交渉は自分でやるのですか？",
    a: "はい、自分で交渉するか、内定後に条件を承認するかになります。年収交渉に不安がある場合はエージェント経由が安心です。エージェントは年収交渉のプロであり、候補者が直接言いにくいことも代行してくれます。",
  },
  {
    q: "エージェント経由だと企業の採用コストが高いから不利になりますか？",
    a: "IT業界では優秀なエンジニアの採用難が続いており、エージェント手数料（年収の30〜35%）を払ってでも採用したい企業がほとんどです。手数料が理由で不採用になることはまずありません。",
  },
  {
    q: "直接応募とエージェント経由を併用しても良いですか？",
    a: "併用が最も効果的です。ただし同じ企業に両方のルートから応募するのは避けましょう。企業側が混乱し、印象が悪くなるリスクがあります。事前にどの企業をどのルートで受けるか整理しておくと良いです。",
  },
  {
    q: "スタートアップ企業は直接応募の方が良いですか？",
    a: "スタートアップはWantedlyやGreenでの直接応募が効果的です。採用予算が限られているスタートアップはエージェント手数料を避ける傾向があり、直接応募を歓迎するケースが多いです。",
  },
  {
    q: "結局どちらが良いのですか？",
    a: "最適な方法は人によって異なります。初めての転職や年収交渉に不安がある方はエージェント経由、志望企業が明確で交渉力に自信がある方は直接応募がおすすめです。多くの方にはIT特化型エージェントと直接応募の併用をおすすめします。",
  },
];

export default function DirectApplyPage() {
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
        title="直接応募vs転職エージェント【メリット比較】| ミドルエンジニア転職ラボ"
        description="直接応募と転職エージェント経由の違いを徹底比較。30代・40代エンジニアがどちらの方法で転職活動すべきか、メリット・デメリットと使い分け方を解説します。"
        url="/knowledge/direct-apply/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "直接応募vsエージェント" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          直接応募vs転職エージェント【メリット比較】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | どちらが有利？使い分け方を解説
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動を始める時、「エージェントに登録すべきか」「企業に直接応募すべきか」で迷う方は多いでしょう。結論から言えば、それぞれにメリット・デメリットがあり、状況に応じた使い分けが最も効果的です。
          </p>
        </section>

        {/* 比較表 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">直接応募 vs エージェント経由 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">比較項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">直接応募</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">エージェント経由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">書類通過率</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">10〜20%</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">30〜50%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">年収交渉</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">自分で交渉</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">エージェントが代行</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">非公開求人</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">アクセス不可</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">アクセス可能</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">面接対策</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">自分で準備</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">企業別の対策あり</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">スピード</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">自分のペース</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">エージェントと連携</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">企業の内部情報</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">口コミサイト程度</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">詳細な内部情報あり</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">費用</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">無料</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">無料（企業負担）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 使い分け */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人はこちらがおすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">直接応募が向いている人</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・志望企業が明確に決まっている</li>
                <li>・年収交渉に自信がある</li>
                <li>・スタートアップを志望している</li>
                <li>・自分のペースで活動したい</li>
                <li>・リファラルで紹介を受けられる</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">エージェントが向いている人</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>・初めての転職で不安がある</li>
                <li>・年収交渉を代行してほしい</li>
                <li>・非公開求人にアクセスしたい</li>
                <li>・面接対策のサポートが欲しい</li>
                <li>・市場価値を客観的に知りたい</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 併用のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用する場合の5つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 応募先の管理表を作る</h3>
              <p className="text-sm text-blue-700">どの企業にどのルートで応募したかスプレッドシートで管理。重複応募を防ぎましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. エージェントには正直に伝える</h3>
              <p className="text-sm text-blue-700">直接応募している企業があることをエージェントに伝えましょう。隠すとトラブルの原因になります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 大手企業はエージェント経由が有利</h3>
              <p className="text-sm text-blue-700">大手IT企業は推薦状付きの応募を好む傾向があります。書類選考の通過率に大きな差が出ます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. スタートアップは直接応募が効果的</h3>
              <p className="text-sm text-blue-700">採用予算が限られているスタートアップはWantedlyやGreenからの直接応募を歓迎します。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 内定の比較にエージェントを活用</h3>
              <p className="text-sm text-blue-700">複数内定が出た際の比較検討や条件交渉はエージェントの力を借りると有利に進められます。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">まずはIT特化型エージェントに相談してみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            エージェントは完全無料。登録だけしておけば、自分に合った非公開求人を紹介してもらえます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "リファラル転職のメリット・デメリット", href: "/knowledge/referral/" },
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
