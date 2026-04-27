import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職で年収は上がる？下がる？【データで解説】| ミドルエンジニア転職ラボ",
  description:
    "エンジニアが転職すると年収はどう変わるのか？年代別・職種別・業界別の年収データと、年収UPを実現するための具体的な戦略を解説します。",
};

const faqs = [
  {
    q: "エンジニア転職で年収UPする人の割合は？",
    a: "IT特化型エージェント経由の転職では、約60〜70%のエンジニアが年収UPを実現しています。特にレバテックキャリア利用者は年収800万以上の求人が半数、Geekly利用者は平均76万円の年収UPを実現しています。",
  },
  {
    q: "年収が下がるケースはどんな場合ですか？",
    a: "主に(1)SIer→スタートアップへの転職、(2)マネジメント→プレイヤーへの転向、(3)異業種からIT業界への転職、の3パターンです。ただし、中長期的にはスキルアップにより年収が回復・向上するケースが大半です。",
  },
  {
    q: "30代エンジニアの転職で年収はどのくらい上がりますか？",
    a: "30代エンジニアの転職での年収UP額は平均50〜100万円です。特にWeb系自社開発企業やSaaS企業への転職では100万円以上のUPも珍しくありません。スキルセットと転職先の組み合わせ次第では150万円以上のUPも可能です。",
  },
  {
    q: "年収交渉はどうすればいいですか？",
    a: "転職エージェントに年収交渉を任せるのが最も効果的です。エージェントは企業の予算感や他候補者の状況を把握しており、個人で交渉するよりも高い成果が期待できます。希望年収は正直に伝え、下限ラインも事前に決めておきましょう。",
  },
  {
    q: "フリーランスと正社員、どちらが年収が高いですか？",
    a: "フリーランスの方が額面の年収は高くなる傾向があります（正社員年収の1.2〜1.5倍程度）。ただし、社会保険料の自己負担、有給休暇なし、退職金なしなどを考慮すると、実質的な差は縮まります。安定性と収入のバランスで判断しましょう。",
  },
  {
    q: "年収1000万円を超えるにはどうすればいいですか？",
    a: "年収1000万円を超えるルートは主に3つ。(1)テックリード・アーキテクトとして技術を極める、(2)エンジニアリングマネージャー・VPoEとしてマネジメントに進む、(3)フリーランスとして高単価案件を受ける。いずれも5年以上の実務経験と明確な専門性が必要です。",
  },
];

export default function SalaryChangePage() {
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
          { name: "転職ナレッジ" },
          { name: "転職と年収の関係" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職で年収は上がる？下がる？【データで解説】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 年代別・職種別の年収データと年収UP戦略
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職で最も気になるのが年収の変動です。「転職すれば年収は上がる」と言われる一方で、「下がった」という声も聞きます。実際のところはどうなのでしょうか？
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアの転職における年収変動のリアルなデータと、年収UPを確実にするための戦略を解説します。
          </p>
        </section>

        {/* 年代別年収データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代別エンジニア年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職後UP額（平均）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">UP率</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20代後半", "400〜500万円", "+30〜60万円", "約70%"],
                  ["30代前半", "500〜650万円", "+50〜100万円", "約65%"],
                  ["30代後半", "600〜750万円", "+50〜80万円", "約60%"],
                  ["40代前半", "650〜800万円", "+30〜70万円", "約50%"],
                  ["40代後半", "700〜900万円", "±0〜50万円", "約45%"],
                ].map(([age, salary, up, rate], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-700 border-b border-slate-200">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200">{up}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            ※ IT特化型転職エージェント経由の転職データを基に算出。個人のスキル・経験により異なります。
          </p>
        </section>

        {/* 年収UPする人の特徴 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収UPを実現する人の5つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 市場価値の高いスキルセットを持つ</h3>
              <p className="text-sm text-blue-700">
                クラウド（AWS/GCP）、コンテナ技術（Docker/Kubernetes）、モダンフレームワーク（React/Next.js/Go）などの需要の高いスキルを持つエンジニアは、年収交渉で有利です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 複数のエージェントを活用している</h3>
              <p className="text-sm text-blue-700">
                2〜3社のエージェントに登録し、複数の内定を獲得して比較検討する人ほど年収UPの幅が大きい傾向にあります。1社だけでは年収交渉の材料が不足します。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 実績を数値で語れる</h3>
              <p className="text-sm text-blue-700">
                「パフォーマンスを改善した」ではなく「レスポンスタイムを40%改善し、CVRが15%向上した」のように数値で語れるエンジニアは、適正な市場評価を受けやすく、年収UPにつながります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 年収だけでなく総合的に判断する</h3>
              <p className="text-sm text-blue-700">
                基本給に加えて、賞与、SO（ストックオプション）、RSU、福利厚生、リモートワーク可否、残業時間も含めた総合パッケージで判断する人は、結果的に満足度の高い転職を実現しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. エージェントに年収交渉を任せる</h3>
              <p className="text-sm text-blue-700">
                自分で年収交渉するのは心理的ハードルが高く、遠慮して低く提示しがちです。IT特化型エージェントは企業の予算感を把握しており、プロの交渉力で年収UPを実現してくれます。
              </p>
            </div>
          </div>
        </section>

        {/* 年収が下がるケース */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収が下がるケースと対策</h2>
          <div className="space-y-4">
            {[
              { case_name: "SIer→スタートアップ", desc: "安定企業からアーリーステージのスタートアップに移ると年収が下がることが多い。ただしSOやRSUで長期的なリターンが見込める場合も。", advice: "SOの条件を詳細に確認し、IPOの見込みをリアルに評価すること。" },
              { case_name: "マネジメント→プレイヤー", desc: "管理職から現場エンジニアに戻ると、マネジメント手当分の年収が下がることがある。", advice: "テックリードなど、技術力とマネジメントのハイブリッドポジションを狙うと年収維持しやすい。" },
              { case_name: "異業種→IT業界", desc: "製造業や金融業からIT業界にキャリアチェンジする場合、一時的に年収が下がる傾向。", advice: "DX推進ポジションなど、前職の業界知識が活きるポジションを選べば年収維持しやすい。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.case_name}</h3>
                <p className="text-sm text-slate-600 mb-2">{item.desc}</p>
                <p className="text-xs text-blue-600 font-medium">対策: {item.advice}</p>
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
          <h2 className="text-xl font-bold mb-3">あなたの市場価値を無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、あなたのスキルセットに基づく適正年収を教えてもらえます。
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
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
