import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ストックオプションがある企業へ転職【税制と見極め方2026】",
  description:
    "ストックオプション（SO）の仕組み・税制適格と非適格の違い・RSUとの違いを公的情報ベースで解説。求人での見極め方、上場前後のリスク、30-40代の判断軸まで。",
};

const faqs = [
  {
    q: "ストックオプションとは何ですか？",
    a: "ストックオプション（SO）は、あらかじめ定められた価格（行使価格）で自社株を購入できる権利を、従業員などに付与する制度です。将来株価が行使価格を上回れば、その差額が利益になります。スタートアップが、上場前は十分な現金報酬を出せない代わりに、上場・成長時のアップサイドを従業員と分け合う手段として用いるのが典型です。付与されても権利確定（ベスティング）まで一定の勤続が必要で、付与＝即収入ではありません。",
  },
  {
    q: "税制適格ストックオプションと非適格は何が違う？",
    a: "税制適格ストックオプションは、租税特別措置法第29条の2が定める要件（権利行使価額の年間合計の上限、付与対象者、行使期間など）を満たすもので、権利行使時には課税されず、取得した株式を売却した時点で譲渡所得として課税されます。要件を満たさない非適格(税制非適格)の場合、権利行使時に給与所得等として課税され、さらに売却時に譲渡所得課税が生じる二段階課税になります。手取りに大きく影響するため、付与契約が適格か非適格かの確認は重要です（出典：国税庁 タックスアンサー、租税特別措置法第29条の2）。",
  },
  {
    q: "ストックオプションとRSU（譲渡制限付株式）はどう違う？",
    a: "ストックオプションは「自社株を買う権利」で、株価が行使価格を下回れば価値がゼロになり得ます。RSU（Restricted Stock Unit）は条件達成で「株式そのもの」が付与される仕組みで、付与時点で株価がついていれば一定の価値が見込めます。外資系大手はRSU、国内スタートアップはストックオプションを採用する傾向があります。どちらも権利確定までの勤続条件があり、課税タイミングも異なります。",
  },
  {
    q: "求人票でストックオプションの何を確認すべき？",
    a: "（1）付与の有無と対象：全社員対象か、一定等級以上か。（2）税制適格／非適格の別：手取りに直結します。（3）行使価格・付与予定数・想定割合：会社の発行済株式に対する割合（持分）が実質的な価値を左右します。（4）ベスティング条件：何年勤務で何%確定するか、退職時の扱い。これらは求人票に書かれないことが多く、選考後半やオファー面談で確認するのが現実的です。",
  },
  {
    q: "ストックオプションは必ず利益になりますか？",
    a: "いいえ。価値が出るのは、会社が上場（IPO）またはM&Aなどで株式に流動性が生まれ、かつ株価が行使価格を上回った場合に限られます。上場できなければ権利が紙切れになることもあり、上場後も株価次第で利益が出ないことがあります。スタートアップの多くは上場に至らないという現実があるため、ストックオプションは「当たればアップサイド」の性質と理解し、現金報酬とのバランスで判断すべきです。当サイトでは特定企業の上場確度や金額の予測は行いません。",
  },
  {
    q: "30-40代でストックオプション目当ての転職はあり？",
    a: "アップサイドは魅力ですが、家庭・住宅ローンなど守るものが増える年代では、現金報酬を犠牲にしてSO比率の高いオファーを受けるのはリスクがあります。生活が成り立つ基本給を確保したうえで、SOは「上振れたら嬉しいボーナス」と位置づけるのが現実的です。スタートアップ転職全般の判断軸はスタートアップとエンタープライズの比較も合わせてご確認ください。",
  },
];

export default function StockOptionPage() {
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
        title="ストックオプションがある企業へ転職【税制と見極め方2026】"
        description="ストックオプションの仕組み・税制適格と非適格の違い・RSUとの違いを公的情報ベースで解説。求人での見極め方、上場前後のリスク、30-40代の判断軸まで。"
        url="/purpose/stock-option/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "ストックオプションがある企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ストックオプションがある企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 税制と条件を理解してアップサイドを正しく評価する完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国税庁 タックスアンサー（ストックオプション・株式報酬の課税）",
            "租税特別措置法 第29条の2（税制適格ストックオプションの要件）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SOは「税制」と「持分・確定条件」で価値が決まる</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            ストックオプション（SO）は、スタートアップが上場・成長時のアップサイドを従業員と分け合う仕組みです。ただし「SOあり」という言葉だけでは実質的な価値はわかりません。<strong>税制適格か非適格かで手取りが大きく変わり</strong>、発行済株式に対する持分・ベスティング（権利確定）条件・そもそも上場できるかで最終的なリターンが決まります。本記事では、SOの仕組みと税制を公的情報に基づいて整理し、求人での見極め方を30-40代の生活設計と結びつけて解説します。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- スタートアップのSO付きオファーを正しく評価したい</li>
              <li>- 税制適格・非適格・RSUの違いを整理したい30-40代</li>
              <li>- 現金報酬とアップサイドのバランスで転職先を選びたい</li>
              <li>- 「SOあり」の落とし穴（持分・確定条件・上場リスク）を知りたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>SO・RSUの仕組みと税制</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（上場リスク・現金とのバランス）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. SO・RSUの仕組みと税制</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">種類</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">課税のポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "税制適格SO", desc: "措置法29条の2の要件を満たす自社株購入権", note: "行使時は非課税、売却時に譲渡所得課税" },
                  { type: "税制非適格SO", desc: "要件を満たさないストックオプション", note: "行使時に給与所得等＋売却時に譲渡所得（二段階）" },
                  { type: "RSU（譲渡制限付株式）", desc: "条件達成で株式そのものを付与", note: "権利確定時の時価が課税対象になり得る。外資大手に多い" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 課税の扱いは個別事情・制度設計により異なります。実際の判断は契約内容と税理士・専門家への確認が必要です。出典：国税庁タックスアンサー、租税特別措置法第29条の2。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "税制適格か非適格かを確認する", desc: "手取りに直結します。求人票に明記されないことが多いため、オファー面談で『税制適格ストックオプションですか』と確認しましょう。" },
              { num: "2", title: "持分（発行済株式に対する割合）を確認する", desc: "付与株数だけでは価値は読めません。発行済株式総数に対して何%かが実質的な価値を左右します。希薄化（増資）の見込みも考慮を。" },
              { num: "3", title: "ベスティング条件を確認する", desc: "何年勤務で何%が確定するか（例：4年・1年クリフ）、自己都合退職時に権利がどうなるかを確認します。短期離職だと無価値になることも。" },
              { num: "4", title: "行使価格と想定タイムラインを把握する", desc: "行使価格が現在の株価評価とどう関係するか、上場・資金調達の想定時期を可能な範囲で確認します。確約はされない点に注意。" },
              { num: "5", title: "現金報酬とのトレードオフを見る", desc: "SO比率が高い代わりに基本給が市場相場より低いオファーは、生活コストの高い30-40代にはリスク。現金で生活が成り立つかを基準に。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 該当しやすい企業タイプ</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            ストックオプション・株式報酬は、企業のステージや出自によって傾向が分かれます。一般的な分類は次のとおりです（具体的な付与条件・金額は変動するため傾向のみ）。
          </p>
          <div className="space-y-3">
            {[
              { type: "国内スタートアップ（上場前）", point: "上場前は現金報酬を抑える代わりにSOでアップサイドを共有する典型。持分・確定条件の確認が必須。" },
              { type: "上場後のメガベンチャー", point: "上場後はRSUや有償SO、ESPP（従業員株式購入制度）など多様な株式報酬を導入する企業がある。" },
              { type: "外資系IT大手", point: "RSU（譲渡制限付株式）を総報酬の一部に組み込むケースが多い。SOとは課税・価値の性質が異なる。" },
              { type: "メーカー・伝統的大企業", point: "株式報酬の導入は限定的なことが多く、現金報酬・退職金中心の構成が一般的。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（上場リスク・現金とのバランス）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>上場できなければ価値が出ない：</strong>SOは株式に流動性が生まれて初めて現金化できます。上場やM&Aに至らなければ権利が無価値になることもあり、スタートアップの多くは上場に至らない現実を踏まえる必要があります。
            </p>
            <p>
              <strong>希薄化のリスク：</strong>その後の資金調達（増資）で発行済株式が増えると、保有持分の割合は下がります。付与時点の株数だけで価値を見積もると過大評価になりがちです。
            </p>
            <p>
              <strong>課税タイミングの落とし穴：</strong>非適格SOは権利行使時に課税されるため、売却前に納税資金が必要になる場合があります。手取りシミュレーションは税理士など専門家に確認しましょう。
            </p>
            <p>
              <strong>現金報酬を犠牲にしすぎない：</strong>住宅ローンや教育費を抱える
              <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニア</Link>
              は、SOのアップサイドより、まず生活が成り立つ現金報酬の確保を優先するのが安全です。
            </p>
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
          <h2 className="text-xl font-bold mb-3">SO付きの企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">株式報酬の条件まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "年収UPしたいエンジニアの転職戦略", href: "/purpose/salary-up/" },
              { name: "スタートアップとエンタープライズの比較", href: "/knowledge/startup-vs-enterprise/" },
              { name: "オファー条件の比較方法", href: "/knowledge/offer-compare/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "福利厚生が充実した企業へ転職", href: "/purpose/benefits/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
