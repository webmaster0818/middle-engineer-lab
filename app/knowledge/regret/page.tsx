import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職を後悔しないための7つのチェックリスト | ミドルエンジニア転職ラボ",
  description:
    "転職後に後悔しないための7つの事前チェックリストを解説。30代・40代エンジニアがミスマッチを防ぎ、満足度の高い転職を実現する方法を紹介します。",
};

const faqs = [
  { q: "転職を後悔する人はどのくらいいますか？", a: "一般的に転職者の20〜30%が「思っていたのと違った」と感じるというデータがあります。特に「年収だけで判断した」「企業文化を確認しなかった」「面接で質問しなかった」人ほど後悔する傾向が強いです。" },
  { q: "転職先の企業文化を事前に確認する方法は？", a: "OpenWork等の口コミサイト、技術ブログ、エンジニアの登壇資料、カジュアル面談が有効です。転職エージェントなら企業の内部情報を教えてもらえるため、ミスマッチを大幅に減らせます。" },
  { q: "面接で聞くべき質問は？", a: "「チームの開発フロー」「残業の実態」「リモートの運用状況」「技術的な意思決定の方法」「直近で最も困ったプロジェクト」など、実態に踏み込む質問をしましょう。" },
  { q: "転職後に後悔した場合はどうすべきですか？", a: "まず3ヶ月は続けてみましょう。初期の違和感は時間とともに解消されることが多いです。3ヶ月経っても状況が改善しなければ、上司や人事に相談し、それでもダメなら再転職を検討しましょう。" },
  { q: "年収が上がっても後悔するケースはありますか？", a: "あります。年収が上がってもWLBが悪化、技術的なチャレンジがない、人間関係が合わないなどの理由で後悔するケースは多いです。年収以外の条件もバランスよく確認することが重要です。" },
  { q: "後悔しない転職をするために最も重要なことは？", a: "「自分が転職で何を実現したいか」を明確にすることです。年収、技術、WLB、成長機会など優先順位を決め、それに基づいて判断しましょう。転職エージェントに客観的な意見をもらうことも有効です。" },
];

export default function RegretPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="転職を後悔しないための7つのチェックリスト | ミドルエンジニア転職ラボ" description="転職後に後悔しないための7つの事前チェックリストを解説。30代・40代エンジニアがミスマッチを防ぎ、満足度の高い転職を実現する方法を紹介します。" url="/knowledge/regret/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "後悔しないためのチェックリスト" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">転職を後悔しないための7つのチェックリスト</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ミスマッチを防ぐ事前確認リスト</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">「こんなはずじゃなかった」。転職後にそう感じないために、入社前に確認すべき7つのポイントを解説します。特に30代・40代のエンジニアは家庭やキャリアへの影響が大きいため、慎重な確認が必要です。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7つのチェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "年収は「基本給 + 賞与 + 手当」の総額で確認", desc: "月給だけでなく、賞与の実績、残業手当、家賃補助、退職金、ストックオプションも含めた総合的な待遇で比較しましょう。見せかけの高年収に騙されないことが重要です。" },
              { num: "2", title: "技術スタックと開発環境は面接で直接確認", desc: "「モダンな技術を使っている」と言われても、実際はレガシーな環境かもしれません。具体的にどの言語・フレームワーク・インフラを使っているか面接で確認しましょう。" },
              { num: "3", title: "残業時間と有給取得率は口コミで裏取り", desc: "求人票の「月平均残業20時間」はあくまで平均。配属予定のチームの実態をOpenWorkやエージェント経由で確認しましょう。" },
              { num: "4", title: "リモートワークの「実態」を確認", desc: "「リモートワーク可」でも「週1のみ」「入社後半年は出社必須」など制約がある場合があります。入社直後の運用を具体的に確認しましょう。" },
              { num: "5", title: "チームの雰囲気は面接官の印象で判断", desc: "面接で会ったエンジニアの雰囲気は入社後の職場環境をよく反映しています。「この人と一緒に働きたいか」を直感で判断しましょう。" },
              { num: "6", title: "成長機会とキャリアパスを確認", desc: "「3年後にどのようなポジションを目指せるか」「技術的なチャレンジの機会はあるか」を面接で質問しましょう。昇進の仕組みが不透明な企業は要注意です。" },
              { num: "7", title: "退職理由が「この会社なら解決する」か確認", desc: "現職の不満が転職先で解決されるかを冷静に考えましょう。「年収が低い」が理由なら年収が上がる企業を、「技術が古い」が理由ならモダンな環境の企業を選ぶ。当たり前のことですが、転職の焦りで見落としがちです。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職後に後悔する主な原因</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">後悔の原因</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">割合</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">事前確認方法</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">仕事内容のミスマッチ</td><td className="border border-slate-200 px-4 py-3 text-slate-600">35%</td><td className="border border-slate-200 px-4 py-3 text-slate-600">面接で具体的な業務内容を確認</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">企業文化が合わない</td><td className="border border-slate-200 px-4 py-3 text-slate-600">25%</td><td className="border border-slate-200 px-4 py-3 text-slate-600">口コミ、カジュアル面談</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">人間関係</td><td className="border border-slate-200 px-4 py-3 text-slate-600">20%</td><td className="border border-slate-200 px-4 py-3 text-slate-600">面接官の印象、エージェント情報</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">待遇面の不満</td><td className="border border-slate-200 px-4 py-3 text-slate-600">15%</td><td className="border border-slate-200 px-4 py-3 text-slate-600">オファーレターの詳細確認</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">その他</td><td className="border border-slate-200 px-4 py-3 text-slate-600">5%</td><td className="border border-slate-200 px-4 py-3 text-slate-600">-</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">後悔しない転職のための心構え</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 「完璧な会社」は存在しない</h3><p className="text-sm text-blue-700">全ての条件が100%の企業はありません。自分にとって最も重要な条件が満たされるかを基準に判断しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. 焦って決めない</h3><p className="text-sm text-blue-700">「早く転職したい」という焦りが最大の敵です。内定に回答期限があっても、延長を依頼することは可能です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 第三者の意見を聞く</h3><p className="text-sm text-blue-700">転職エージェント、信頼できる友人、家族など第三者の意見を聞くことで、視野が広がります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 入社後も「正解」にする努力をする</h3><p className="text-sm text-blue-700">転職先が100%正解かは事前には分かりません。入社後の行動で「正解にしていく」という姿勢が大切です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. 定期的にキャリアを振り返る</h3><p className="text-sm text-blue-700">入社後3ヶ月、6ヶ月、1年のタイミングでキャリアを振り返り、方向性を再確認しましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ミスマッチを防ぐ企業情報をエージェントに聞こう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、企業の内部情報を教えてもらえるため、入社後のミスマッチを大幅に防げます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "オンボーディング成功法", href: "/knowledge/onboarding/" },
              { name: "試用期間中の転職", href: "/knowledge/probation/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
