import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "カウンターオファーへの対応方法 | ミドルエンジニア転職ラボ",
  description:
    "退職を申し出た際のカウンターオファー（引き留め提案）への正しい対応方法を解説。年収アップ提示を受けた場合の判断基準と、30代・40代エンジニアが後悔しない選択をするコツを紹介します。",
};

const faqs = [
  {
    q: "カウンターオファーとは何ですか？",
    a: "退職を申し出た際に現職の上司や人事から提示される引き留め条件のことです。年収アップ、昇進、部署異動、リモートワーク導入など、退職を思いとどまらせるための条件が提示されます。",
  },
  {
    q: "カウンターオファーを受け入れる人はどのくらいですか？",
    a: "約30〜40%の人がカウンターオファーを受け入れますが、その後6ヶ月以内に再び転職活動を始める人が50%以上というデータがあります。根本的な不満が解消されないケースが多いためです。",
  },
  {
    q: "年収が大幅にアップする場合は残るべきですか？",
    a: "年収アップだけが転職理由なら検討の余地がありますが、「なぜ退職を申し出るまで年収を上げてくれなかったのか」を考えましょう。今回上がっても、次の昇給が期待できるとは限りません。",
  },
  {
    q: "カウンターオファーを受けると社内での評価は変わりますか？",
    a: "「いつ辞めてもおかしくない人」というレッテルが貼られるリスクがあります。昇進候補から外される、重要なプロジェクトのアサインが減るなどの影響が出ることもあります。",
  },
  {
    q: "カウンターオファーの断り方は？",
    a: "「検討しましたが、今回の転職は自分のキャリアプランに基づいた決断です」と伝えましょう。具体的な条件で揺さぶられないよう、事前に断る意志を固めておくことが重要です。",
  },
  {
    q: "カウンターオファーについてエージェントに相談できますか？",
    a: "はい、転職エージェントはカウンターオファーへの対応経験が豊富です。客観的な立場から「受け入れるべきか」「断るべきか」のアドバイスをもらえます。感情に流されず冷静に判断するためにも相談をおすすめします。",
  },
];

export default function CounterOfferPage() {
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
        title="カウンターオファーへの対応方法 | ミドルエンジニア転職ラボ"
        description="退職を申し出た際のカウンターオファー（引き留め提案）への正しい対応方法を解説。年収アップ提示を受けた場合の判断基準と、30代・40代エンジニアが後悔しない選択をするコツを紹介します。"
        url="/knowledge/counter-offer/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "カウンターオファーへの対応" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カウンターオファーへの対応方法
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 引き留めに対する正しい判断基準
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            退職を申し出たら、上司から「年収を上げるから残ってくれ」と言われた。こんな経験をする30代・40代のエンジニアは少なくありません。カウンターオファーへの対応を間違えると、キャリアに大きな影響を与えます。
          </p>
        </section>

        {/* カウンターオファーの種類 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくあるカウンターオファーの種類</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">種類</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年収アップ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年収50〜100万円の引き上げ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">次回の昇給に影響する可能性</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">昇進・役職変更</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">マネージャー昇進の約束</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">口約束の場合は実現しないリスク</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">部署異動</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">希望の技術チームへの移動</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">異動先の雰囲気は事前に確認</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">働き方変更</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">リモートワーク導入・フレックス</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">制度として定着するか不明</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 判断基準 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カウンターオファーを判断する5つの基準</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "転職理由の根本が解決されるか", desc: "年収不満が理由で年収アップが提示されたなら検討余地あり。技術的な停滞や人間関係が理由なら、年収アップでは根本解決になりません。" },
              { num: "2", title: "提示された条件は書面で確認できるか", desc: "口頭の約束は守られない可能性があります。年収変更は必ず書面で確認しましょう。昇進の約束は時期を明確にしてもらいましょう。" },
              { num: "3", title: "社内での評価に影響しないか", desc: "退職を申し出た事実は社内に広まる可能性があります。その後の昇進や重要プロジェクトへのアサインに影響が出ないか考えましょう。" },
              { num: "4", title: "転職先のオファーと総合比較する", desc: "カウンターオファーと転職先のオファーを、年収・技術・成長機会・WLBの全項目でスコアリング比較しましょう。" },
              { num: "5", title: "直感を大切にする", desc: "退職を決意した時点で、現職に対する不満は相当なものです。カウンターオファーで気持ちが完全に変わるのでなければ、初志を貫く方が後悔が少ないです。" },
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

        {/* 統計データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カウンターオファーを受けた場合のデータ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">50%+</p>
                <p className="text-sm text-slate-600 mt-1">6ヶ月以内に再転職活動を開始</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">80%</p>
                <p className="text-sm text-slate-600 mt-1">1年以内に退職</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">39%</p>
                <p className="text-sm text-slate-600 mt-1">昇進が遅れたと感じた割合</p>
              </div>
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
          <h2 className="text-xl font-bold mb-3">カウンターオファーの相談もエージェントへ</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、カウンターオファーへの対応経験が豊富。客観的な判断をサポートします。
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
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "円満退職の方法", href: "/knowledge/resignation/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
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
