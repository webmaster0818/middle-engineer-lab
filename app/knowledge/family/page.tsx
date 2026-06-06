import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "家庭持ちエンジニアの転職戦略 | ミドルエンジニア転職ラボ",
  description:
    "家庭を持つ30代・40代エンジニアが安心して転職するための戦略を解説。年収ダウンのリスク回避、家族への配慮、リモートワーク求人の探し方を紹介します。",
};

const faqs = [
  { q: "家庭持ちの転職でまず考えるべきことは？", a: "家族の生活を守りつつキャリアアップするために「最低限の年収ライン」「勤務地・リモートの希望」「転職活動期間中の生活費」の3点を事前に明確にしましょう。配偶者と十分に話し合うことが重要です。" },
  { q: "転職で年収が下がるリスクはどう回避すべきですか？", a: "転職前に複数のエージェントで市場価値を確認し、年収の下限を設定しましょう。内定が出てから現職を退職する「在職中の転職活動」が最もリスクが低いです。" },
  { q: "住宅ローンがある場合、転職に影響しますか？", a: "転職直後は住宅ローンの審査に通りにくくなるため、ローンを組む予定があるなら先に済ませましょう。既存のローンの返済に影響がない年収レンジで転職先を選ぶことが重要です。" },
  { q: "子供の転校が心配です。転勤のない企業はどう探せばいいですか？", a: "「勤務地固定」「リモートワーク可」を条件にエージェントに相談しましょう。IT企業は転勤が少ない傾向にあり、フルリモートの企業も増えています。" },
  { q: "配偶者に転職を反対されたらどうすべきですか？", a: "転職の理由、メリット（年収アップ、成長機会）、リスク対策（在職中に内定確保）を具体的に説明しましょう。エージェントから市場価値の客観的データをもらって見せると説得力が増します。" },
  { q: "家庭持ちに理解のある企業の見分け方は？", a: "「パパ・ママエンジニアの在籍率」「育休取得実績」「時短勤務制度」「子の看護休暇」などを確認しましょう。転職エージェントなら企業の内部情報を教えてもらえます。" },
];

export default function FamilyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="家庭持ちエンジニアの転職戦略 | ミドルエンジニア転職ラボ" description="家庭を持つ30代・40代エンジニアが安心して転職するための戦略を解説。年収ダウンのリスク回避、家族への配慮、リモートワーク求人の探し方を紹介します。" url="/knowledge/family/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "家庭持ちの転職戦略" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">家庭持ちエンジニアの転職戦略</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 家族を守りながらキャリアアップ</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">家庭を持つエンジニアにとって転職は、自分だけでなく家族の生活にも関わる大きな決断です。リスクを最小限に抑えつつキャリアアップを実現するには、計画的な転職戦略が必要です。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">家庭持ちエンジニアの転職チェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "家族と転職の方針を共有する", desc: "転職理由、希望条件、リスクを家族に説明。配偶者の理解を得ることが最優先です。" },
              { num: "2", title: "最低限の年収ラインを設定する", desc: "住宅ローン、教育費、生活費を計算し、絶対に下回れない年収を明確にしましょう。" },
              { num: "3", title: "在職中に転職活動を完了する", desc: "退職してからの転職活動はリスクが高い。有給を活用して面接を受けましょう。" },
              { num: "4", title: "転職先の福利厚生を確認する", desc: "リモートワーク、フレックス、育児支援制度、退職金制度を確認。年収だけでなく総合的な待遇で比較。" },
              { num: "5", title: "引越しの有無を確認する", desc: "転勤や勤務地変更がある場合は、子供の転校や配偶者の仕事への影響を考慮しましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">家庭持ちに優しい企業の条件</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">条件</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認方法</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">リモートワーク制度</td><td className="border border-slate-200 px-4 py-3 text-slate-600">求人票・面接で確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">フレックスタイム制</td><td className="border border-slate-200 px-4 py-3 text-slate-600">コアタイムの有無を確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">残業月20時間以内</td><td className="border border-slate-200 px-4 py-3 text-slate-600">口コミ・エージェント</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">育児支援制度</td><td className="border border-slate-200 px-4 py-3 text-slate-600">福利厚生ページ</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">退職金・企業年金</td><td className="border border-slate-200 px-4 py-3 text-slate-600">オファーレター</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リスクを最小化する5つのポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 生活防衛資金を確保する</h3><p className="text-sm text-blue-700">万が一に備えて生活費6ヶ月分の貯蓄を確保してから転職活動を始めましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. 複数の内定を比較する</h3><p className="text-sm text-blue-700">1社目の内定に飛びつかず、複数社を比較検討。エージェントに条件交渉を依頼しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 試用期間の条件を確認する</h3><p className="text-sm text-blue-700">試用期間中の給与や待遇が本採用時と同じか確認。差がある場合は交渉しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 入社時期を調整する</h3><p className="text-sm text-blue-700">子供の学期変わりや家族の行事を考慮した入社日を提案しましょう。多くの企業は調整に応じてくれます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. エージェントの内部情報を活用する</h3><p className="text-sm text-blue-700">企業の残業実態、有給取得率、リモートワークの運用状況など、求人票に載らない情報をエージェントから得ましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">家庭の事情に配慮した転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、リモートワーク可・残業少なめの求人を多数紹介。安心して転職できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
