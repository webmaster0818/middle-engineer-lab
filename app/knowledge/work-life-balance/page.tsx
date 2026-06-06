import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ワークライフバランス重視のIT転職 | ミドルエンジニア転職ラボ",
  description:
    "ワークライフバランスを重視したIT企業への転職方法を解説。リモートワーク、フレックス制度、残業時間の見極め方を30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "ワークライフバランスを重視すると年収は下がりますか？",
    a: "必ずしも下がりません。フルリモート・フレックスを導入しつつ高年収を提示する企業は増えています。特にメガベンチャーやSaaS企業はWLBと高年収を両立している企業が多いです。エージェント経由で内部情報を確認しましょう。",
  },
  {
    q: "求人票に「残業月20時間」と書いてあるのは信用できますか？",
    a: "あくまで平均値のため、配属チームやプロジェクトの状況で大きく異なります。OpenWork等の口コミサイトで実態を確認するか、転職エージェントに個別の部署の残業状況を聞くのが確実です。",
  },
  {
    q: "フルリモートの企業は増えていますか？",
    a: "2026年現在、IT企業の約40%がフルリモートまたはリモート中心の勤務形態を採用しています。ただしフルリモートを廃止して出社に戻す企業もあるため、最新の状況をエージェントで確認することが重要です。",
  },
  {
    q: "子育て中でも転職は可能ですか？",
    a: "十分可能です。むしろ子育てに理解のある企業を選ぶ良い機会です。フレックスタイム、時短勤務、病児保育補助などの制度が充実した企業をエージェントに条件として伝えましょう。",
  },
  {
    q: "WLB重視の転職で後悔するケースはありますか？",
    a: "「楽な環境」だけを基準にすると、技術的なチャレンジが少なく成長が止まるリスクがあります。WLBと技術的成長の両方を満たせる企業を選ぶことが重要です。",
  },
  {
    q: "WLB重視の企業を探すにはどうすればいいですか？",
    a: "IT特化型の転職エージェントに「リモートワーク可」「残業月20時間以内」「フレックス制度あり」と条件を伝えると効率的です。非公開求人にもWLB重視の好条件求人が多くあります。",
  },
];

export default function WorkLifeBalancePage() {
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
        title="ワークライフバランス重視のIT転職 | ミドルエンジニア転職ラボ"
        description="ワークライフバランスを重視したIT企業への転職方法を解説。リモートワーク、フレックス制度、残業時間の見極め方を30代・40代エンジニア向けに紹介します。"
        url="/knowledge/work-life-balance/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "ワークライフバランス重視の転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワークライフバランス重視のIT転職
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | リモート・フレックスで働ける企業の見つけ方
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代のエンジニアにとって、ワークライフバランスは年収と並ぶ重要な転職条件です。家庭の事情、健康面、自己成長の時間確保など、理由はさまざまですが、WLBを犠牲にした転職は長続きしません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、ワークライフバランスを重視しつつキャリアアップも実現する転職の方法を解説します。
          </p>
        </section>

        {/* WLBチェックポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業のWLBを見極める5つのポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "残業時間の実態", desc: "求人票の「月平均残業時間」はあくまで全社平均。配属予定チームの残業時間を面接やエージェント経由で確認しましょう。月20時間以内が理想的です。" },
              { num: "2", title: "リモートワーク制度", desc: "フルリモート、週3リモートなど制度内容を具体的に確認。「リモート可」でも実態は月1回程度しか使えない企業もあります。" },
              { num: "3", title: "フレックスタイム制度", desc: "コアタイムの時間帯、スーパーフレックス（コアタイムなし）の有無を確認。子育て中のエンジニアにとって特に重要です。" },
              { num: "4", title: "有給取得率", desc: "有給取得率70%以上が目安。IT企業の平均は約60%ですが、WLBの良い企業は80%以上の取得率を達成しています。" },
              { num: "5", title: "オンコール・休日対応", desc: "SREやインフラ職の場合、オンコールローテーションの頻度と手当を確認。月に何回、どの時間帯に対応が必要かは生活に大きく影響します。" },
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

        {/* WLBが良い企業タイプ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">WLBが良い傾向のIT企業タイプ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">企業タイプ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">WLBの傾向</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収レンジ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">BtoB SaaS企業</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">残業少なめ・リモート多い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">500〜900万</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">外資系IT企業</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">裁量大・成果主義</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">700〜1,500万</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">大手メガベンチャー</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">制度充実・フレックス</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">600〜1,200万</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">社内SE（事業会社）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">残業少・安定</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">450〜700万</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* WLBと成長を両立させるコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">WLBとキャリア成長を両立させるコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 「楽な環境」と「効率的な環境」を区別する</h3>
              <p className="text-sm text-blue-700">WLBが良い ≠ 仕事が楽。効率的に働ける環境を選ぶことで、労働時間を抑えつつ高い成果を出せます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 浮いた時間を自己投資に使う</h3>
              <p className="text-sm text-blue-700">残業が減った分の時間を技術学習や副業プロジェクトに充てることで、市場価値を維持・向上できます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 技術的チャレンジのある環境を選ぶ</h3>
              <p className="text-sm text-blue-700">モダンな技術スタックで開発効率が高い企業は、結果的にWLBも良い傾向があります。レガシーな環境ほど非効率な残業が発生しがちです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 面接で具体的に質問する</h3>
              <p className="text-sm text-blue-700">「チームの平均残業時間」「リモートの実運用状況」「直近の炎上プロジェクトの有無」を面接で確認しましょう。誠実に答えてくれる企業は信頼できます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. エージェントの内部情報を活用する</h3>
              <p className="text-sm text-blue-700">転職エージェントは求人企業の内部情報を持っています。公式サイトや求人票には載らない実態を教えてもらいましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">WLB重視の求人をプロに探してもらおう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、リモートワーク可・残業少なめの非公開求人を多数紹介してもらえます。
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
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "家庭持ちエンジニアの転職戦略", href: "/knowledge/family/" },
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
