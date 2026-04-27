import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代エンジニアの転職完全ガイド【2026年最新】| ミドルエンジニア転職ラボ",
  description:
    "30代エンジニアの転職事情を徹底解説。年収相場・成功率・おすすめエージェント・キャリアパスをデータに基づいて紹介。30代前半・後半それぞれの戦略が分かります。",
};

const faqs = [
  {
    q: "30代エンジニアの転職成功率はどのくらいですか？",
    a: "30代エンジニアの転職成功率は約70〜80%と高水準です。特に30代前半は即戦力として最も市場価値が高く、実務経験3年以上あれば複数社から内定を得るケースが一般的です。30代後半でも専門性やマネジメント経験があれば十分に転職可能です。",
  },
  {
    q: "30代エンジニアの平均年収はどのくらいですか？",
    a: "経済産業省の調査によると、30代ITエンジニアの平均年収は約550〜650万円です。転職エージェント経由で転職した場合、平均50〜100万円の年収UPが期待でき、スキルや経験次第では年収800万円以上も十分に狙えます。",
  },
  {
    q: "30代でプログラミング未経験からエンジニアになれますか？",
    a: "30代前半であれば十分可能です。ただし独学よりも、プログラミングスクールや職業訓練を活用し、ポートフォリオを作成した上で転職活動するのが現実的です。ワークポートの無料スクール「みんスク」など、転職支援と一体化したサービスの活用がおすすめです。",
  },
  {
    q: "30代エンジニアが転職で失敗しやすいパターンは？",
    a: "よくある失敗パターンは、(1)年収だけで企業を選び技術スタックのミスマッチが起きる、(2)1社だけのエージェントに頼り比較検討しない、(3)現職の不満だけが動機で転職軸が曖昧、の3つです。複数エージェントを活用し、技術面・待遇面・カルチャー面を総合的に判断しましょう。",
  },
  {
    q: "30代エンジニアにおすすめの転職エージェントは？",
    a: "30代エンジニアにはIT特化型エージェントの利用が最適です。レバテックキャリアは年収800万以上の求人が豊富、Geeklyは平均年収UP76万円の実績があります。2〜3社に登録して比較検討するのが転職成功の鉄則です。",
  },
  {
    q: "30代後半でも転職できますか？年齢制限はありますか？",
    a: "法律上、年齢を理由にした採用拒否は禁止されています。30代後半はマネジメント経験、アーキテクト経験、特定領域の専門性が強みになります。doda(IT特化)やレバテックキャリアは30代後半〜40代の転職実績が豊富で、この年代に強いエージェントです。",
  },
];

export default function Age30sPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "30代エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30代エンジニアの転職完全ガイド【2026年最新】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 30代前半・後半それぞれの転職戦略を徹底解説
        </p>

        {/* 導入 */}
        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代はエンジニアとして最も市場価値が高い年代です。即戦力としての実務経験がありながら、まだキャリアチェンジの柔軟性も残されています。しかし、30代前半と後半では転職市場での評価ポイントが異なるため、年齢に応じた戦略が必要です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代エンジニアの転職市場の現実、年収相場、成功するためのポイント、おすすめの転職エージェントまで、データに基づいて徹底解説します。
          </p>
        </section>

        {/* 30代エンジニアの転職市場 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアの転職市場の現状</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人倍率", "約8〜10倍（IT業界全体）"],
                  ["平均年収", "550〜650万円（30代全体）"],
                  ["転職後の年収UP率", "約65%が年収UP"],
                  ["転職活動期間", "平均2〜3ヶ月"],
                  ["求人の中心", "Web系・SaaS・DX推進"],
                  ["求められるスキル", "即戦力レベルの開発経験3年以上"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            IT人材の不足は年々深刻化しており、2026年現在もエンジニアの求人倍率は全業種平均を大きく上回っています。特に30代エンジニアは「実務経験あり + まだ伸びしろがある」と評価され、企業からの需要が最も高い年代です。
          </p>
        </section>

        {/* 30代前半 vs 後半 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代前半と後半の違い</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">30代前半（30〜34歳）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">--</span>
                  即戦力として最も求人が多い年代
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">--</span>
                  キャリアチェンジ（SIer→Web系など）が比較的容易
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">--</span>
                  年収600〜800万円が現実的なレンジ
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">--</span>
                  技術力重視のポジションが中心
                </li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">30代後半（35〜39歳）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">--</span>
                  マネジメント経験が大きな武器になる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">--</span>
                  専門領域の深い知見が求められる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">--</span>
                  テックリード・アーキテクト求人が狙い目
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">--</span>
                  年収700〜1000万円も十分可能
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 成功のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアの転職成功ポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 転職軸を明確にする</h3>
              <p className="text-sm text-blue-700">
                年収UP、技術力向上、ワークライフバランス、マネジメントへの挑戦など、転職で何を実現したいのかを明確にしましょう。軸が曖昧だと企業選びがブレて、入社後のミスマッチにつながります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 市場価値を客観的に把握する</h3>
              <p className="text-sm text-blue-700">
                自分のスキルセットが市場でどの程度評価されるかを知ることが重要です。IT特化型エージェントに登録すれば、無料で市場価値の査定を受けられます。複数社の評価を比較することで、より正確な把握が可能です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 複数のエージェントを活用する</h3>
              <p className="text-sm text-blue-700">
                エージェントごとに保有する非公開求人が異なります。IT特化型（レバテックキャリアなど）と総合型（dodaなど）の2〜3社に登録し、求人の幅を広げることが転職成功の鉄則です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 技術力の棚卸しと言語化</h3>
              <p className="text-sm text-blue-700">
                使用技術、プロジェクト規模、役割、成果を具体的に整理しましょう。「Reactで管理画面を開発」ではなく「React + TypeScriptで月間10万PVの管理画面をリード開発し、表示速度を40%改善」のように数値で語れることが差別化のポイントです。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            {[
              {
                name: "レバテックキャリア",
                reason: "IT特化No.1。年収800万以上の求人が半数を占め、30代エンジニアの年収UP実績が豊富。技術に精通したアドバイザーが的確な提案をしてくれる。",
                best: "年収600万以上を目指す30代エンジニア",
              },
              {
                name: "Geekly",
                reason: "IT/Web/ゲーム特化で平均年収UP76万円の実績。書類選考通過率が業界平均の3.4倍と高く、転職スピードも早い。",
                best: "Web系・ゲーム業界志望の30代エンジニア",
              },
              {
                name: "doda(IT特化)",
                reason: "業界最多級の求人数を保有。エージェントとサイトの両方が使え、幅広い選択肢の中から自分に合った求人を見つけやすい。",
                best: "じっくり比較検討したい30代後半エンジニア",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{agent.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">おすすめ: {agent.best}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">30代エンジニアの転職、まずはプロに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料登録して、あなたの市場価値を確認してみませんか？
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
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
