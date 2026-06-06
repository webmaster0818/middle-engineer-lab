import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "スタートアップvs大企業【エンジニア転職】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "スタートアップと大企業のエンジニア転職を徹底比較。年収、裁量、安定性、技術、成長性を比較し、30代・40代エンジニアが自分に合った選択をするための判断ポイントを解説します。",
};

const faqs = [
  {
    q: "スタートアップの年収は大企業より低い？",
    a: "基本給はスタートアップの方が低い傾向ですが、ストックオプションを含めると逆転するケースもあります。シリーズB以降のスタートアップでは、大企業と同等以上のオファーが出ることも増えています。",
  },
  {
    q: "30代でスタートアップに転職するのは遅い？",
    a: "全く遅くありません。むしろ30代の実務経験は高く評価されます。シニアエンジニアやテックリードとして即戦力を発揮でき、若い組織に経験をもたらす存在として重宝されます。",
  },
  {
    q: "スタートアップのリスクはどのくらい？",
    a: "スタートアップの5年生存率は約15%と言われています。ただし、エンジニアは転職市場で需要が高いため、仮に企業が倒産しても次の職が見つかりやすいです。シリーズB以降の企業を選ぶことでリスクを軽減できます。",
  },
  {
    q: "大企業のエンジニアはスキルが伸びない？",
    a: "一概には言えません。大企業でもモダンな技術を使う部署はあります。ただし、レガシーシステムの保守が中心の部署では技術成長が限定的になるリスクがあります。配属先の技術スタックを事前に確認することが重要です。",
  },
  {
    q: "40代でスタートアップに転職するのは現実的？",
    a: "CTO、VPoE、テックリードなどのシニアポジションであれば十分現実的です。40代のエンジニアには「組織構築」「技術戦略」「メンタリング」のスキルが求められ、これらの経験がある方は歓迎されます。",
  },
  {
    q: "両方経験するのがベスト？",
    a: "キャリア全体で見ると、大企業とスタートアップの両方を経験しているエンジニアは市場価値が高い傾向にあります。大企業でスケールの大きいシステムを、スタートアップで0→1の立ち上げを経験することで、対応力が広がります。",
  },
];

const comparison = [
  { item: "年収（30代）", startup: "500〜800万円 + SO", enterprise: "600〜900万円" },
  { item: "年収（40代）", startup: "700〜1,200万円 + SO", enterprise: "750〜1,100万円" },
  { item: "裁量・自由度", startup: "非常に高い", enterprise: "部署・役職による" },
  { item: "安定性", startup: "低〜中（資金調達状況次第）", enterprise: "高い" },
  { item: "技術スタック", startup: "モダン（最新技術）", enterprise: "レガシー〜モダンまで" },
  { item: "成長スピード", startup: "非常に速い", enterprise: "ゆるやか〜中程度" },
  { item: "福利厚生", startup: "最小限〜充実まで", enterprise: "充実している" },
  { item: "チーム規模", startup: "5〜30名", enterprise: "50〜数百名" },
  { item: "意思決定速度", startup: "速い（即日〜1週間）", enterprise: "遅い（数週間〜数ヶ月）" },
  { item: "社会的信用", startup: "低い（住宅ローン等）", enterprise: "高い" },
];

export default function StartupVsEnterprisePage() {
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
        title="スタートアップvs大企業【エンジニア転職】どっちを選ぶべき？"
        description="スタートアップと大企業のエンジニア転職を徹底比較。年収、裁量、安定性、技術、成長性の比較と30代・40代の判断ポイントを解説します。"
        url="/knowledge/startup-vs-enterprise/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "スタートアップvs大企業" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スタートアップvs大企業【エンジニア転職】どっちを選ぶべき？
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | エンジニアのキャリア選択ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職で悩むポイントの一つが「スタートアップか大企業か」の選択です。特に30代・40代では、年収・安定性・成長性のバランスが重要な判断基準になります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、スタートアップと大企業を10項目で比較し、あなたに合った選択をするための判断ポイントを解説します。
          </p>
        </section>

        {/* 比較テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ vs 大企業 徹底比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">スタートアップ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">大企業</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.startup}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ SO = ストックオプション。スタートアップの年収はSOを含まない基本給ベース。</p>
        </section>

        {/* スタートアップ向きの人 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ向きのエンジニア</h2>
          <div className="bg-blue-50 rounded-lg p-5">
            <div className="space-y-3">
              {[
                "新しい技術に積極的にチャレンジしたい",
                "裁量を持って自分で意思決定したい",
                "プロダクトの0→1を経験したい",
                "成果が直接ビジネスに影響する環境が好き",
                "少人数チームで密にコミュニケーションしたい",
                "将来的にCTOや起業を目指している",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold shrink-0">-</span>
                  <p className="text-sm text-blue-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 大企業向きの人 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業向きのエンジニア</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="space-y-3">
              {[
                "安定した収入と福利厚生を重視する",
                "大規模システムの設計・運用を経験したい",
                "体系的な研修・教育制度を活用したい",
                "住宅ローンなど社会的信用が必要",
                "ワークライフバランスを重視する",
                "専門分野を深く極めたい",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-slate-600 font-bold shrink-0">-</span>
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30代・40代の判断ポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代での判断ポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代前半：チャレンジのベストタイミング</h3>
              <p className="text-sm text-blue-700">
                体力・学習意欲が高く、家族の状況も比較的柔軟な30代前半はスタートアップへのチャレンジに最適。失敗しても転職市場での需要が高いためリカバリーしやすい。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代後半：リスクとリターンの見極め</h3>
              <p className="text-sm text-blue-700">
                住宅ローン、子育てなどの家族の状況を考慮。スタートアップならシリーズB以降で資金的に安定した企業を選ぶと、リスクを抑えつつチャレンジできる。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験を活かせるポジションを選ぶ</h3>
              <p className="text-sm text-blue-700">
                スタートアップならCTO・VPoE・テックリードなどのシニアポジション。大企業ならDX推進部門やアーキテクト職。どちらを選ぶにしても、これまでの経験が最大限活かせるポジションかどうかが判断基準。
              </p>
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
          <h2 className="text-xl font-bold mb-3">あなたに合った転職先を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、スタートアップも大企業も幅広く紹介。あなたのキャリアプランに最適な企業を一緒に見つけましょう。
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
              { name: "福岡のIT転職事情（スタートアップ都市）", href: "/area/fukuoka/" },
              { name: "エンジニアからマネジメントへ", href: "/knowledge/management/" },
              { name: "副業しながら転職活動", href: "/knowledge/side-project/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
