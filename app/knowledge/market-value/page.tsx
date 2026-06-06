import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "自分の市場価値の調べ方【エンジニア年収診断】| ミドルエンジニア転職ラボ",
  description:
    "エンジニアが自分の市場価値を正確に把握する方法を解説。年収診断ツール、転職エージェントの活用法、スキル別年収相場を30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "市場価値と現在の年収が大きく乖離しています。転職すべきですか？",
    a: "市場価値が現年収より100万円以上高い場合は、転職で年収アップの可能性が高いです。ただし、現職の福利厚生、退職金、ストックオプションなども含めた総合的な待遇で比較しましょう。転職エージェントに相談して具体的な求人の年収レンジを確認するのが確実です。",
  },
  {
    q: "年収診断ツールの結果はどの程度信頼できますか？",
    a: "あくまで目安です。同じスキルセットでも企業規模や地域で100〜200万円の差が出ます。より正確な市場価値を知るには、複数の転職エージェントに登録してアドバイザーの意見を比較することをおすすめします。",
  },
  {
    q: "マネジメント経験がない場合、市場価値は下がりますか？",
    a: "30代前半まではスペシャリストとして高い市場価値を持てます。35歳以降はマネジメント経験があると選択肢が広がりますが、技術的な専門性が突出している場合はスペシャリストとして高年収を維持できます。",
  },
  {
    q: "フリーランスと正社員では市場価値の考え方が違いますか？",
    a: "フリーランスの単価は正社員年収の1.3〜1.5倍が目安です。正社員年収600万円のスキルセットなら、フリーランス月単価65〜75万円程度になります。ただし社会保険料や安定性を考慮すると実質的な差は縮まります。",
  },
  {
    q: "市場価値を上げるために最も効果的なスキルは何ですか？",
    a: "2026年現在、クラウドネイティブ（AWS/GCP）、Kubernetes、Go/Rust、AI/ML関連技術の需要が高く、年収プレミアムがつきやすいです。ただし流行に振り回されず、自分の強みの延長線上にあるスキルを深掘りする方が市場価値は安定します。",
  },
  {
    q: "市場価値診断を無料で受けられるサービスはありますか？",
    a: "レバテックキャリア、Geekly、ビズリーチなどで無料の市場価値診断を受けられます。特にレバテックキャリアはIT特化型で精度が高く、具体的な求人の年収レンジと合わせて教えてもらえます。",
  },
];

export default function MarketValuePage() {
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
        title="自分の市場価値の調べ方【エンジニア年収診断】| ミドルエンジニア転職ラボ"
        description="エンジニアが自分の市場価値を正確に把握する方法を解説。年収診断ツール、転職エージェントの活用法、スキル別年収相場を30代・40代向けに紹介します。"
        url="/knowledge/market-value/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "市場価値の調べ方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          自分の市場価値の調べ方【エンジニア年収診断】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | スキル別年収相場と診断方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「自分の年収は適正なのか？」「転職したらいくら稼げるのか？」エンジニアとして働く中で、一度は疑問に思ったことがあるはずです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアが自分の市場価値を正確に把握するための方法と、スキル別の年収相場を解説します。
          </p>
        </section>

        {/* スキル別年収相場 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキル別・エンジニア年収相場（2026年版）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">スキル / 役割</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">経験3〜5年</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">経験5〜10年</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">経験10年以上</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">フロントエンド（React/Vue）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">450〜600万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">600〜800万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">800〜1,100万</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">バックエンド（Go/Java）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">500〜650万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">650〜900万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">900〜1,300万</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">インフラ / SRE</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">500〜700万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">700〜950万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">950〜1,400万</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">AI / ML エンジニア</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">550〜750万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">750〜1,100万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">1,100〜1,800万</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">EM / テックリード</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">600〜800万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">800〜1,100万</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">1,100〜1,500万</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※ 東京都内・正社員の相場。企業規模や業界により変動します。</p>
        </section>

        {/* 市場価値の調べ方 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場価値を調べる4つの方法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "転職エージェントの面談を受ける", desc: "最も確実な方法。IT特化型エージェントに登録し、自分のスキルセットでどの年収帯の求人を紹介してもらえるか確認しましょう。複数のエージェントを比較するとより正確な市場価値が分かります。" },
              { num: "2", title: "スカウトサービスの提示年収を見る", desc: "ビズリーチやForkwell等に経歴を登録し、届くスカウトの提示年収から市場価値を把握できます。高いスカウトと低いスカウトの中央値が目安です。" },
              { num: "3", title: "求人サイトの年収レンジを調査する", desc: "自分のスキルセットに合う求人を20〜30件ピックアップし、年収レンジの中央値を計算します。市場全体の相場感がつかめます。" },
              { num: "4", title: "年収診断ツールを活用する", desc: "各転職サイトが提供する年収診断ツールで概算を把握できます。あくまで参考値ですが、最初の目安として有効です。" },
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

        {/* 市場価値を上げるスキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場価値を上げる5つの戦略</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. T字型スキルを目指す</h3>
              <p className="text-sm text-blue-700">1つの深い専門性 + 幅広い周辺知識。例：バックエンドが専門でも、インフラやフロントエンドの基礎を理解していると市場価値が上がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ビジネスインパクトを意識する</h3>
              <p className="text-sm text-blue-700">技術だけでなく「その技術でどのくらいのビジネスインパクトを生んだか」を語れるエンジニアは高い評価を受けます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. アウトプットを増やす</h3>
              <p className="text-sm text-blue-700">技術ブログ、OSS貢献、登壇は市場価値を可視化する手段です。スカウトの数と質が明らかに変わります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. マネジメント経験を積む</h3>
              <p className="text-sm text-blue-700">35歳以降は技術力 + マネジメント力の掛け合わせで年収が大きく上がります。3〜5名のチームリード経験があると選択肢が広がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 需要の高い技術を習得する</h3>
              <p className="text-sm text-blue-700">クラウドネイティブ、Kubernetes、Go/Rust、AI/ML関連の技術は年収プレミアムがつきやすいです。自分の軸を持ちつつ取り入れましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">無料で市場価値診断を受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、あなたのスキルセットに基づいた正確な市場価値と年収レンジを教えてもらえます。
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
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
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
