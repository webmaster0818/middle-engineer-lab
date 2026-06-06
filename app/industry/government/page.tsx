import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "官公庁・公共系SEから民間IT転職【キャリアチェンジガイド】",
  description:
    "官公庁・公共系システム開発エンジニアから民間IT企業への転職方法を徹底解説。GovTech・セキュリティ・SaaS領域で公共系SEの知識が活きる職種と転職戦略を紹介します。",
};

const faqs = [
  {
    q: "官公庁系SEの経験は民間IT転職で評価されますか？",
    a: "評価されます。特にセキュリティ要件の厳しい環境での開発経験、大規模プロジェクトのマネジメント経験、法規制への対応力は民間IT企業でも高く評価されるスキルです。ガバメントクラウドやGovTech領域では、公共システムの知識が直接活きます。",
  },
  {
    q: "官公庁系SEから民間IT転職すると年収はどうなりますか？",
    a: "官公庁系SEの平均年収は400〜600万円程度ですが、民間IT企業では同水準以上が期待できます。特にセキュリティエンジニアやDXコンサルタントのポジションでは600〜1000万円レンジの求人があり、経験次第で年収UPが見込めます。SaaS企業のシニアポジションも700万円以上が一般的です。",
  },
  {
    q: "ウォーターフォール開発しか経験がなくても転職できますか？",
    a: "転職可能です。ウォーターフォールでの要件定義・設計スキルは、大規模エンタープライズ案件で求められます。また、アジャイル開発の基礎を独学で身につけ、個人プロジェクトで実践すれば、民間IT企業への転職ハードルは大きく下がります。",
  },
  {
    q: "官公庁系SEから民間IT転職で有利な資格はありますか？",
    a: "情報処理安全確保支援士（登録セキスペ）はセキュリティ領域で非常に高く評価されます。プロジェクトマネージャ試験もPM職への転職に有効です。AWS認定資格はクラウド移行案件で即戦力の証明になります。",
  },
  {
    q: "官公庁系の多重下請け構造から抜け出すにはどうすればいいですか？",
    a: "自社プロダクトを持つSaaS企業や事業会社のIT部門への転職が有効です。下請け構造から脱却するには、特定の技術領域（クラウド、セキュリティ、データ分析など）で専門性を磨くことが重要です。転職エージェントに「自社開発企業」を希望条件として明確に伝えましょう。",
  },
  {
    q: "官公庁系SEから民間IT転職に強いエージェントは？",
    a: "リクルートエージェントITは求人数が業界最多クラスで、大手企業からスタートアップまで幅広い求人に出会えます。レバテックキャリアは技術的なマッチングに強く、自社開発企業の求人が豊富です。2社以上に登録して比較検討するのがおすすめです。",
  },
];

export default function GovernmentPage() {
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
        title="官公庁・公共系SEから民間IT転職【キャリアチェンジガイド】"
        description="官公庁・公共系システム開発エンジニアから民間IT企業への転職方法を徹底解説。GovTech・セキュリティ・SaaS領域で公共系SEの知識が活きる職種と転職戦略を紹介します。"
        url="/industry/government/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "官公庁・公共系SEから民間IT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          官公庁・公共系SEから民間IT転職【キャリアチェンジガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 公共系SEのスキルを民間IT企業で活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            デジタル庁の設立とガバメントクラウドの推進により、官公庁のIT近代化が本格化しています。一方で、多重下請け構造や技術的制約に限界を感じ、民間IT企業への転職を考える公共系SEは増加傾向にあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、官公庁・公共系SEが民間IT企業に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公共系SEの民間IT転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">GovTech市場の急成長</h3>
              <p className="text-sm text-blue-700">
                デジタル庁主導のガバメントクラウド移行、マイナンバー連携の拡大により、GovTech市場は急成長しています。公共システムの仕様や調達プロセスを理解するエンジニアは、GovTech企業にとって即戦力です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ人材の深刻な不足</h3>
              <p className="text-sm text-blue-700">
                官公庁システムで培ったセキュリティ要件への対応力（ISMAP、政府統一基準群への準拠経験）は、民間企業でも極めて高く評価されます。セキュリティエンジニアの求人倍率は10倍を超え、年収も右肩上がりです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模プロジェクト経験の市場価値</h3>
              <p className="text-sm text-blue-700">
                官公庁の大規模システム開発（数億〜数十億円規模）で培ったプロジェクトマネジメント力、ステークホルダー調整力は、エンタープライズ向けSaaS企業やDXコンサルティングファームで高い評価を受けます。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公共系SE経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["GovTechエンジニア", "年収500〜800万円", "行政DX・ガバメントクラウド関連の開発"],
                  ["セキュリティエンジニア", "年収600〜1000万円", "セキュリティ設計・脆弱性診断・SOC運用"],
                  ["SaaSプロダクト開発", "年収500〜850万円", "エンタープライズ向けSaaSの設計・開発"],
                  ["DXコンサルタント", "年収600〜1100万円", "大企業・官公庁のDX戦略策定・推進支援"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">官公庁系SEから民間IT転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "モダン技術スタックを学ぶ", desc: "クラウド（AWS/Azure/GCP）、コンテナ（Docker/Kubernetes）、CI/CDの基礎を習得。官公庁系で多いJava経験をベースにSpring Bootなどモダンフレームワークも学ぶ。" },
              { step: "2", title: "公共系の経験を棚卸しする", desc: "携わったプロジェクトの規模（金額・期間・体制）、セキュリティ要件、法規制対応の実績を整理。PMO経験やステークホルダー調整の実績も数値化する。" },
              { step: "3", title: "民間IT企業の働き方を理解する", desc: "アジャイル開発、DevOps、スクラムなどの開発手法を学ぶ。個人開発やOSS貢献でアジャイル的な開発を体験しておくと面接で説得力が増す。" },
              { step: "4", title: "転職エージェントに登録", desc: "リクルートエージェントIT（求人数最多クラス）、レバテックキャリア（自社開発企業に強い）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">公共系SEのスキルを民間IT企業で活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            セキュリティ・GovTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
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
