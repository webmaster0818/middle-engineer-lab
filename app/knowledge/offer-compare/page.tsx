import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "複数内定の比較方法【オファー交渉術】| ミドルエンジニア転職ラボ",
  description:
    "複数の内定を比較する方法とオファー交渉のコツを解説。30代・40代エンジニアが最適な転職先を選ぶための判断基準とスコアリング手法を紹介します。",
};

const faqs = [
  {
    q: "複数内定が出た場合、いつまでに回答すべきですか？",
    a: "一般的に内定の回答期限は1〜2週間です。他社の選考状況を正直に伝え、期限の延長を依頼することも可能です。エージェント経由なら期限調整を代行してもらえます。",
  },
  {
    q: "年収だけで判断して良いですか？",
    a: "年収は重要な要素ですが、それだけで判断するのは危険です。技術スタック、成長機会、ワークライフバランス、企業文化、通勤時間など総合的に比較しましょう。年収が高くても働く環境が合わなければ長続きしません。",
  },
  {
    q: "オファー交渉で年収はどのくらい上がりますか？",
    a: "一般的に提示額から5〜15%の上乗せが可能です。他社の内定を交渉材料にする場合は10〜20%アップの実例もあります。ただし根拠のない高額要求は逆効果になるため注意しましょう。",
  },
  {
    q: "内定を辞退する場合のマナーは？",
    a: "できるだけ早く、丁寧に辞退の意思を伝えましょう。理由は詳しく説明する必要はありませんが、「他社とのご縁を頂きました」のように簡潔に伝えます。エージェント経由なら辞退の連絡もエージェントが代行してくれます。",
  },
  {
    q: "入社日は交渉できますか？",
    a: "はい、多くの企業で入社日の調整は可能です。現職の退職手続きに1.5〜2ヶ月、有給消化に2〜4週間を考慮し、無理のないスケジュールを提案しましょう。",
  },
  {
    q: "オファー交渉はエージェントに任せるべきですか？",
    a: "エージェント経由の場合は任せるのがベストです。エージェントは交渉のプロであり、候補者が直接言いにくいことも代行してくれます。直接応募の場合は自分で交渉する必要があります。",
  },
];

export default function OfferComparePage() {
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
        title="複数内定の比較方法【オファー交渉術】| ミドルエンジニア転職ラボ"
        description="複数の内定を比較する方法とオファー交渉のコツを解説。30代・40代エンジニアが最適な転職先を選ぶための判断基準とスコアリング手法を紹介します。"
        url="/knowledge/offer-compare/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "複数内定の比較方法" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          複数内定の比較方法【オファー交渉術】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 後悔しない転職先の選び方
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            複数の企業から内定をもらえるのは嬉しい反面、どの企業を選ぶべきか悩むものです。「年収が高い方」「知名度のある方」と安易に決めてしまうと、入社後に後悔するリスクがあります。
          </p>
        </section>

        {/* 比較スコアリング */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファー比較スコアリング表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">比較項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度（例）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年収（基本給 + 賞与）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★★★</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">オファーレター</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術スタック・成長機会</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★★★</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">面接・技術ブログ</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ワークライフバランス</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★★☆</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">口コミ・エージェント</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">リモートワーク制度</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★★☆</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">求人票・面接で確認</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">企業の安定性・将来性</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★☆☆</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">IR情報・ニュース</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">福利厚生（退職金・SO等）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">★★★☆☆</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">オファーレター</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※ 重要度は個人の価値観に応じてカスタマイズしてください。</p>
        </section>

        {/* オファー交渉術 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファー交渉の5つのコツ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "他社のオファーを交渉材料にする", desc: "「他社から年収○○万円の提示をいただいております」と伝えると、年収の引き上げに応じてもらえるケースが多いです。ただし嘘は厳禁です。" },
              { num: "2", title: "年収以外の条件も交渉する", desc: "基本給が上がらなくても、入社時の一時金（サインオンボーナス）、リモートワークの日数、有給の追加付与など別の条件で交渉できます。" },
              { num: "3", title: "市場相場を根拠にする", desc: "「同等のスキル・経験を持つエンジニアの市場相場は○○〜○○万円です」と客観的なデータを示すと説得力が増します。" },
              { num: "4", title: "交渉は1回で完結させる", desc: "何度も交渉を繰り返すと印象が悪くなります。希望条件を整理し、1回の交渉で伝えましょう。" },
              { num: "5", title: "エージェントを活用する", desc: "エージェント経由なら交渉を全て代行してもらえます。候補者が直接言いにくいことも、プロが適切に伝えてくれます。" },
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

        {/* 判断のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最終判断で迷った時の考え方</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 3年後の自分をイメージする</h3>
              <p className="text-sm text-blue-700">その企業で3年後にどのようなエンジニアになっているかをイメージしましょう。成長している姿が描ける方が正解です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 「消去法」ではなく「積極的な理由」で選ぶ</h3>
              <p className="text-sm text-blue-700">「他の会社よりマシだから」ではなく「この会社で○○がしたいから」という積極的な理由がある方を選びましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 面接で会った人の印象を重視する</h3>
              <p className="text-sm text-blue-700">面接で会ったエンジニアやマネージャーの雰囲気は、入社後の職場環境をよく反映しています。「一緒に働きたい」と思えた企業を選びましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">オファー交渉をプロに任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、年収交渉や入社日調整を全て代行。最適な条件で入社できるようサポートします。
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
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "カウンターオファーへの対応", href: "/knowledge/counter-offer/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
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
