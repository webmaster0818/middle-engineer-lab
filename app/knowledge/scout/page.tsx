import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "スカウト型転職サービスの活用法 | ミドルエンジニア転職ラボ",
  description:
    "スカウト型転職サービスの効果的な活用法を解説。ビズリーチ、Forkwell、Green等のサービス比較と、スカウトを増やすプロフィールの書き方を紹介します。",
};

const faqs = [
  {
    q: "スカウト型サービスと転職エージェントの違いは？",
    a: "転職エージェントはアドバイザーが求人を紹介するのに対し、スカウト型サービスは企業やヘッドハンターが直接あなたにアプローチします。自分から動かなくても求人情報が届くため、忙しいエンジニアに向いています。",
  },
  {
    q: "スカウトメールは全て返信すべきですか？",
    a: "興味のあるスカウトのみ返信すれば問題ありません。ただし「プラチナスカウト」等の特別なスカウトは企業が本気で採用したい証拠なので、条件が合わなくても返信してカジュアル面談を受けると良い出会いにつながることがあります。",
  },
  {
    q: "スカウトの年収提示額は信頼できますか？",
    a: "スカウト段階の年収提示はあくまで想定レンジです。実際の年収は面接と条件交渉を経て確定します。ただし、提示額が低い企業は最終的にも低い傾向があるため、希望年収を下回るスカウトは見送っても良いでしょう。",
  },
  {
    q: "現職にバレずにスカウト型サービスを使えますか？",
    a: "ほとんどのサービスで現職の企業をブロックする機能があります。ビズリーチでは「企業ブロック」機能で現職や関連企業を非表示にできます。設定を忘れずに行いましょう。",
  },
  {
    q: "どのスカウト型サービスに登録すべきですか？",
    a: "エンジニアにおすすめなのは「ビズリーチ」（ハイクラス求人が豊富）、「Forkwell」（エンジニア特化）、「Green」（IT・Web業界特化）の3つです。それぞれ特徴が異なるため併用がベストです。",
  },
  {
    q: "スカウト型と転職エージェントは併用すべきですか？",
    a: "はい、併用をおすすめします。スカウト型で市場の反応を見ながら、エージェント経由で非公開求人にもアクセスすることで、最大限の選択肢を確保できます。",
  },
];

export default function ScoutPage() {
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
        title="スカウト型転職サービスの活用法 | ミドルエンジニア転職ラボ"
        description="スカウト型転職サービスの効果的な活用法を解説。ビズリーチ、Forkwell、Green等のサービス比較と、スカウトを増やすプロフィールの書き方を紹介します。"
        url="/knowledge/scout/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "スカウト型転職サービス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スカウト型転職サービスの活用法
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | スカウトを増やすプロフィールの書き方
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            スカウト型転職サービスは、プロフィールを登録するだけで企業やヘッドハンターからオファーが届く仕組みです。忙しいエンジニアでも効率的に転職活動を進められます。
          </p>
        </section>

        {/* サービス比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア向けスカウト型サービス比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">サービス</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">特徴</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収帯</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">おすすめ層</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">ビズリーチ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ハイクラス求人が豊富</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">600万〜2,000万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">経験7年以上</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">Forkwell</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">エンジニア特化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">450万〜1,200万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">経験3年以上</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">Green</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">IT・Web業界特化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">400万〜1,000万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">経験2年以上</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">YOUTRUST</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">SNS型・カジュアル</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">500万〜1,500万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">副業・転職どちらも</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* スカウトを増やす方法 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やすプロフィールの5つのポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "技術スタックを具体的に記載", desc: "「Webエンジニア」ではなく「Go / gRPC / Kubernetes / AWS / Terraform」のように具体的に。企業はキーワード検索でスカウトを送ります。" },
              { num: "2", title: "成果を数値で記載", desc: "「パフォーマンス改善」ではなく「API応答時間200ms→50ms改善」「月間1000万PVのサービス運用」のように数値化。" },
              { num: "3", title: "希望条件を明確に設定", desc: "年収、勤務地、リモートの可否、企業規模の希望を明確に設定。マッチ精度が上がりスカウトの質が向上します。" },
              { num: "4", title: "プロフィールを定期的に更新", desc: "最終更新日が古いとスカウトが減ります。月1回はプロフィールを見直し、新しいスキルや実績を追加しましょう。" },
              { num: "5", title: "ログイン頻度を上げる", desc: "多くのサービスでは最近ログインしたユーザーが優先表示されます。週2〜3回はログインしましょう。" },
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

        {/* スカウトの見極め */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良いスカウトの見極め方</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. パーソナライズされた内容か確認</h3>
              <p className="text-sm text-blue-700">あなたの経歴に具体的に言及しているスカウトは本気度が高いです。テンプレートの一斉送信は優先度を下げても良いでしょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 提示年収レンジを確認</h3>
              <p className="text-sm text-blue-700">希望年収を大幅に下回るスカウトは見送りましょう。逆に相場より高いスカウトは条件をよく確認しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 送信者のプロフィールを確認</h3>
              <p className="text-sm text-blue-700">採用担当者やCTOから直接届いたスカウトは本気度が高いです。ヘッドハンター経由のスカウトは企業名を確認しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. カジュアル面談を活用</h3>
              <p className="text-sm text-blue-700">気になるスカウトにはまずカジュアル面談を申し込みましょう。選考ではないため気軽に企業の情報を得られます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 市場の反応として活用</h3>
              <p className="text-sm text-blue-700">届くスカウトの数と質で自分の市場価値を客観的に把握できます。プロフィール変更による反応の変化も参考になります。</p>
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
          <h2 className="text-xl font-bold mb-3">スカウトと併用してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            スカウト型サービスに加え、IT特化型エージェントの非公開求人にもアクセスして選択肢を最大化しましょう。
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
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "複数エージェントの活用法", href: "/knowledge/multiple-agents/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
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
