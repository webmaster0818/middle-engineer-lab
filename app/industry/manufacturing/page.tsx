import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "製造業エンジニアからIT転職【業界チェンジ成功法】| ミドルエンジニア転職ラボ",
  description:
    "製造業エンジニアからIT業界への転職方法を徹底解説。製造DX・IoT・スマートファクトリーなど、製造業の知識が活きるIT職種と転職戦略を紹介します。",
};

const faqs = [
  {
    q: "製造業エンジニアの経験はIT転職で評価されますか？",
    a: "高く評価されます。特にDX推進、IoT、スマートファクトリー関連では、製造業の業務知識を持つITエンジニアは希少人材です。生産管理、品質管理、設備保全の知識とITスキルの掛け合わせは、他のIT人材にはない強みになります。",
  },
  {
    q: "製造業からIT転職すると年収はどうなりますか？",
    a: "製造業エンジニアの平均年収は400〜600万円程度ですが、IT業界に転職すると同レベルか、DX推進やIoTエンジニアのポジションでは年収UPが期待できます。特に製造DXコンサルタントやIoTアーキテクトのポジションは700〜1000万円レンジの求人もあります。",
  },
  {
    q: "プログラミング未経験でもIT転職できますか？",
    a: "30代前半までであれば、製造業での技術的バックグラウンドを活かして転職可能です。ワークポートの無料プログラミングスクール「みんスク」を活用したり、PythonやSQLなどの基礎を独学で身につけてから転職活動を始めるのが現実的です。",
  },
  {
    q: "製造業からIT転職で有利な資格はありますか？",
    a: "基本情報技術者試験、AWS認定資格（クラウドプラクティショナーなど）は基礎力の証明になります。加えて、製造業系の資格（品質管理検定、生産管理系）も持っていると、製造DX領域で差別化ポイントになります。",
  },
  {
    q: "製造業から転職しやすいIT職種は何ですか？",
    a: "製造DXエンジニア、IoTエンジニア、生産管理系業務システムのSE、DXコンサルタントが最も転職しやすいポジションです。また、製造業向けSaaSを提供する企業のカスタマーサクセスやプリセールスも、製造業の知識が直接活きる職種です。",
  },
  {
    q: "製造業からIT転職に強いエージェントは？",
    a: "ワークポートは異業種からIT業界への転職支援に強く、製造業出身者の転職実績も豊富です。doda(IT特化)は求人数が多く、製造DXやIoT関連の求人も充実しています。2社以上に登録して比較検討するのがおすすめです。",
  },
];

export default function ManufacturingPage() {
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
          { name: "業界別ガイド" },
          { name: "製造業からIT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          製造業エンジニアからIT転職【業界チェンジ成功法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 製造業の知識を武器にIT業界で活躍する方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            製造業のDX（デジタルトランスフォーメーション）が加速する中、製造業の業務知識とITスキルの両方を持つ人材の需要が急増しています。製造業エンジニアのあなたが持つ生産管理、品質管理、設備保全の知識は、IT業界で大きな武器になります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、製造業エンジニアがIT業界に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">製造業エンジニアのIT転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">製造DX市場の急拡大</h3>
              <p className="text-sm text-blue-700">
                スマートファクトリー、予知保全、デジタルツインなど、製造業のDX市場は年率15%以上で成長しています。製造業の現場を知るITエンジニアは、この成長市場で不可欠な存在です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「業界知識 x IT」の希少性</h3>
              <p className="text-sm text-blue-700">
                ITスキルだけのエンジニアは多くいますが、製造業の業務フローや課題を理解しているITエンジニアは極めて少数です。この希少性が、高い市場価値と年収につながります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">製造業向けSaaS企業の急成長</h3>
              <p className="text-sm text-blue-700">
                生産管理SaaS、品質管理プラットフォーム、サプライチェーン最適化ツールなど、製造業向けSaaS企業が次々と成長しています。これらの企業は製造業の知識を持つエンジニアを積極的に採用しています。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">製造業経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["製造DXエンジニア", "年収500〜800万円", "工場のデジタル化を技術面で推進"],
                  ["IoTエンジニア", "年収500〜900万円", "センサー・デバイスとクラウドの連携開発"],
                  ["DXコンサルタント", "年収600〜1000万円", "製造業企業のDX戦略策定を支援"],
                  ["製造業SaaSのプロダクト開発", "年収500〜800万円", "生産管理・品質管理SaaSの開発"],
                  ["プリセールス / CS", "年収500〜800万円", "製造業向けITソリューションの提案・導入支援"],
                ].map(([title, salary, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">
                      {title}
                    </th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200 whitespace-nowrap">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 転職準備 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">製造業からIT転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ITの基礎知識を身につける", desc: "Python、SQL、クラウド（AWS/Azure）の基礎を学ぶ。Udemyや公式チュートリアルで3〜6ヶ月が目安。" },
              { step: "2", title: "製造業の経験を棚卸しする", desc: "生産管理、品質管理、設備保全、工程改善の経験を具体的に整理。数値で成果を表現できるようにする。" },
              { step: "3", title: "製造DX関連の情報をキャッチアップ", desc: "IoT、デジタルツイン、予知保全などのトレンドを把握。製造業 x ITの文脈で自分の経験を語れるようにする。" },
              { step: "4", title: "転職エージェントに登録", desc: "ワークポート（異業種転職に強い）、doda IT特化（求人数豊富）に登録して市場価値を確認する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
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
          <h2 className="text-xl font-bold mb-3">製造業の経験をIT業界で活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            製造DX人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
