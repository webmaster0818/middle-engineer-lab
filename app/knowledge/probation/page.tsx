import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "試用期間中の転職は不利？【対策と注意点】| ミドルエンジニア転職ラボ",
  description:
    "試用期間中に転職を考える際の注意点と対策を解説。30代・40代エンジニアが試用期間中の退職を職歴にどう書くか、次の転職で不利にならない方法を紹介します。",
};

const faqs = [
  {
    q: "試用期間中に退職するのは法的に問題ありますか？",
    a: "法的には問題ありません。試用期間中でも通常の雇用関係と同じく、2週間前に退職の意思を伝えれば退職できます。ただし就業規則で退職手続きの期間が定められている場合はそれに従いましょう。",
  },
  {
    q: "試用期間中の退職は職歴に書くべきですか？",
    a: "3ヶ月以上在籍した場合は記載するのが一般的です。3ヶ月未満の場合は記載しなくても問題ないケースが多いですが、社会保険の加入記録は残るため、バレた場合の方がリスクが高くなります。",
  },
  {
    q: "試用期間中の退職は次の転職に不利ですか？",
    a: "1回であれば、明確な理由があれば大きなマイナスにはなりません。「入社前に聞いていた業務内容と実態が異なった」「技術スタックが面接時の説明と違っていた」など、合理的な理由を説明できれば理解してもらえます。",
  },
  {
    q: "試用期間中の退職理由はどう説明すべきですか？",
    a: "面接では「入社前と入社後のギャップ」を具体的かつ前向きに伝えましょう。「○○の技術に携われると聞いていたが実際は△△だった。自分のキャリアプランに合った環境で○○に取り組みたい」のようにポジティブに変換します。",
  },
  {
    q: "試用期間中に解雇される可能性はありますか？",
    a: "法的には試用期間中でも解雇は簡単にはできません。ただし「著しい能力不足」「経歴詐称」などの理由があれば解雇される可能性があります。試用期間中も通常の雇用と同じ労働者保護が適用されます。",
  },
  {
    q: "試用期間中の転職をエージェントに相談できますか？",
    a: "もちろんできます。転職エージェントは試用期間中の転職事例も多く扱っています。退職理由の伝え方や、試用期間中の経歴をポジティブに見せる方法をアドバイスしてもらえます。",
  },
];

export default function ProbationPage() {
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
        title="試用期間中の転職は不利？【対策と注意点】| ミドルエンジニア転職ラボ"
        description="試用期間中に転職を考える際の注意点と対策を解説。30代・40代エンジニアが試用期間中の退職を職歴にどう書くか、次の転職で不利にならない方法を紹介します。"
        url="/knowledge/probation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "試用期間中の転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          試用期間中の転職は不利？【対策と注意点】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 試用期間中でも転職を成功させる方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「入社してみたら想像と違った」「技術スタックが面接の説明と異なる」。試用期間中にこうした不満を感じるエンジニアは少なくありません。試用期間中の転職は可能ですが、正しい対処法を知っておくことが重要です。
          </p>
        </section>

        {/* 判断基準 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間中に辞めるべきか判断する基準</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "入社前の説明と実態に大きなギャップがある", desc: "「Reactで開発」と言われて入社したのにレガシーなjQuery案件ばかり、など技術面のミスマッチは改善が難しいです。" },
              { num: "2", title: "ハラスメントや違法な労働環境", desc: "パワハラ、長時間労働の強要、残業代の未払いなどは即座に離れるべき理由です。我慢する必要はありません。" },
              { num: "3", title: "3ヶ月経っても環境に馴染めない", desc: "人間関係や企業文化の不適合は時間で解決する場合もありますが、3ヶ月が目安です。改善の兆しがなければ決断を。" },
              { num: "4", title: "健康に影響が出ている", desc: "不眠、食欲不振、慢性的な体調不良が続くなら、健康を最優先に判断しましょう。" },
              { num: "5", title: "キャリアの停滞が確実", desc: "成長機会がなく、市場価値が下がり続ける環境なら早期の判断が重要です。1年後にはさらに不利になります。" },
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

        {/* 対策 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間中の転職を成功させる5つのポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 退職理由をポジティブに変換する</h3>
              <p className="text-sm text-blue-700">「想像と違った」ではなく「自分のキャリアプランに合った環境で○○に取り組みたい」と前向きな理由に変換しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 短期離職を繰り返さない覚悟を示す</h3>
              <p className="text-sm text-blue-700">「次こそ長期的にコミットしたい」という姿勢を見せましょう。転職先の企業研究を徹底的に行い、ミスマッチを防ぐ努力を伝えます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. エージェントに正直に相談する</h3>
              <p className="text-sm text-blue-700">試用期間中であることを隠す必要はありません。エージェントは適切な求人を紹介し、面接対策もサポートしてくれます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 次の転職先が決まってから退職する</h3>
              <p className="text-sm text-blue-700">ブランクがあると不利になるため、在職中に次の内定を確保してから退職するのがベストです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. スキルや実績をしっかりアピールする</h3>
              <p className="text-sm text-blue-700">短期離職のマイナスをスキルや実績でカバーしましょう。前々職の実績をメインにアピールする戦略も有効です。</p>
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
          <h2 className="text-xl font-bold mb-3">試用期間中でも相談OK</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、試用期間中の転職にも対応。あなたの状況に合った最適な求人を紹介してもらえます。
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
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "円満退職の方法", href: "/knowledge/resignation/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "転職回数が多い場合の対策", href: "/knowledge/job-hopping/" },
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
