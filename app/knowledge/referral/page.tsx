import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "リファラル転職のメリット・デメリット | ミドルエンジニア転職ラボ",
  description:
    "リファラル（社員紹介）転職のメリット・デメリットを徹底解説。30代・40代エンジニアがリファラルで転職する際の注意点と成功のコツを紹介します。",
};

const faqs = [
  {
    q: "リファラル転職は通常の選考と何が違いますか？",
    a: "書類選考が省略or通過率が大幅に上がること、社員から企業の内部情報を事前に得られること、入社後のミスマッチが少ないことが主な違いです。ただし面接は通常通り行われるため、技術力は問われます。",
  },
  {
    q: "知り合いに転職先の社員がいない場合はどうすれば？",
    a: "勉強会、カンファレンス、OSS活動、技術コミュニティで人脈を広げましょう。また、LinkedInで転職先企業の社員とつながりを作る方法もあります。人脈作りは転職活動前から始めることが重要です。",
  },
  {
    q: "紹介してくれた人に迷惑をかけませんか？",
    a: "短期で退職した場合は紹介者の評価に影響する可能性があります。そのため、入社前に企業の文化や仕事内容を十分に理解し、ミスマッチを防ぐことが重要です。紹介者にも正直に希望条件を伝えましょう。",
  },
  {
    q: "リファラルで応募すると年収交渉は不利になりますか？",
    a: "むしろ有利になることが多いです。企業はエージェント手数料（年収の30〜35%）を節約できるため、その分を候補者の年収に上乗せできる余地があります。",
  },
  {
    q: "不採用になった場合、紹介者との関係は悪くなりますか？",
    a: "通常は問題ありません。企業もリファラルが100%採用になるとは考えていません。不採用の場合は紹介者にお礼を伝え、今後の改善点を聞くと良い関係を維持できます。",
  },
  {
    q: "リファラルと転職エージェントは併用すべきですか？",
    a: "はい、併用をおすすめします。リファラルで数社、エージェント経由で数社に応募することで、比較検討の選択肢が広がります。特に年収の相場感はエージェントに確認すると交渉に有利です。",
  },
];

export default function ReferralPage() {
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
        title="リファラル転職のメリット・デメリット | ミドルエンジニア転職ラボ"
        description="リファラル（社員紹介）転職のメリット・デメリットを徹底解説。30代・40代エンジニアがリファラルで転職する際の注意点と成功のコツを紹介します。"
        url="/knowledge/referral/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "リファラル転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リファラル転職のメリット・デメリット
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 社員紹介で転職する際のポイント
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            リファラル転職（社員紹介）は、IT業界で最も成功率の高い転職方法の一つです。大手IT企業の中途採用の30〜40%がリファラル経由というデータもあります。
          </p>
        </section>

        {/* メリット・デメリット */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット比較</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・書類選考の通過率が高い（50〜70%）</li>
                <li>・企業の内部情報を事前に知れる</li>
                <li>・入社後のミスマッチが少ない</li>
                <li>・年収交渉の余地が大きい</li>
                <li>・入社後に知り合いがいて安心</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>・紹介者への気遣いが必要</li>
                <li>・不採用時に気まずくなる可能性</li>
                <li>・退職しづらくなる場合がある</li>
                <li>・人脈がないと活用できない</li>
                <li>・選択肢が限られる</li>
              </ul>
            </div>
          </div>
        </section>

        {/* リファラル転職の流れ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リファラル転職の流れ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "紹介者に転職意思を伝える", desc: "信頼できる知人に「転職を考えている」と相談。いきなり「紹介して」と頼むのではなく、まず情報交換から始めましょう。" },
              { num: "2", title: "企業の内部情報をヒアリング", desc: "技術スタック、開発文化、チームの雰囲気、残業の実態など、公開情報では分からない内容を聞きましょう。" },
              { num: "3", title: "紹介者経由で応募", desc: "紹介者が人事に推薦し、書類選考に進みます。推薦コメントが付くため通過率が高くなります。" },
              { num: "4", title: "通常の面接プロセス", desc: "面接自体は通常の選考と同じです。技術面接、カルチャーフィット面接を通過する必要があります。" },
              { num: "5", title: "内定・条件交渉", desc: "内定後の条件交渉は自分で行います。市場相場はエージェントに事前に確認しておくと有利です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
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

        {/* 成功のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リファラル転職を成功させるコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 日頃から技術コミュニティに参加する</h3>
              <p className="text-sm text-blue-700">勉強会、カンファレンス、OSS活動を通じて人脈を広げておくと、いざという時にリファラルのチャンスが生まれます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 紹介者に正直に希望条件を伝える</h3>
              <p className="text-sm text-blue-700">年収、働き方、キャリアの方向性について正直に伝えましょう。ミスマッチが事前に防げます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 面接準備は通常以上に丁寧に</h3>
              <p className="text-sm text-blue-700">リファラルでも面接は免除されません。紹介者の顔を立てるためにも、万全の準備で臨みましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 結果に関わらず紹介者にお礼を伝える</h3>
              <p className="text-sm text-blue-700">不採用でも紹介してくれたことへの感謝を伝えましょう。良い関係は次のチャンスにつながります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 年収の相場感はエージェントで確認</h3>
              <p className="text-sm text-blue-700">リファラルでは年収交渉を自分で行う必要があります。事前にエージェントで市場相場を把握しておくと交渉に有利です。</p>
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
          <h2 className="text-xl font-bold mb-3">リファラルと併用してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            リファラルだけでなく、IT特化型エージェントも活用すれば年収の相場感を把握でき、交渉にも有利です。
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
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
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
