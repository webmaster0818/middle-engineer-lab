import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "教育業界からEdTech転職【エンジニアガイド】",
  description:
    "教育業界エンジニアからEdTech領域への転職方法を徹底解説。教育の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "教育業界の経験はEdTech転職で評価されますか？",
    a: "高く評価されます。学習管理システム（LMS）、教材コンテンツ開発、学習データ分析など、教育現場の課題を理解しているエンジニアはEdTech企業で希少人材です。特にカリキュラム設計やアダプティブラーニングの知識は大きなアドバンテージになります。",
  },
  {
    q: "教育業界からEdTech転職すると年収はどうなりますか？",
    a: "教育系SEの平均年収は350〜500万円程度ですが、EdTech企業では500〜800万円レンジが一般的です。データサイエンティスト（学習データ分析）やプロダクトマネージャーのシニアポジションでは800〜1,000万円の求人もあり、大幅な年収UPが見込めます。",
  },
  {
    q: "EdTech企業ではどんな技術が求められますか？",
    a: "フロントエンド（React/Next.js）、バックエンド（Python/Node.js）、データ分析（Python/SQL）が基本です。加えてAI/ML（アダプティブラーニング）、動画配信技術（HLS/WebRTC）、LTI規格（学習ツール連携）の知識があると差別化できます。",
  },
  {
    q: "教育業界からEdTech転職で有利な資格はありますか？",
    a: "AWS認定資格（クラウドベースのEdTechプラットフォーム開発に有利）、統計検定（学習データ分析）、Google認定教育者（教育×IT知識の証明）が挙げられます。技術資格よりも教育ドメインの深い理解が重視される傾向があります。",
  },
  {
    q: "教育業界から転職しやすいIT職種は何ですか？",
    a: "EdTechプロダクトエンジニア、学習データアナリスト、LMSエンジニア、コンテンツテクノロジストが転職しやすいポジションです。教育業界の知見を活かしたプロダクト開発に貢献できる点をアピールしましょう。",
  },
  {
    q: "教育業界からEdTech転職に強いエージェントは？",
    a: "Geekly（EdTech系スタートアップの求人に強い）、ワークポート（異業種からIT業界への転職支援実績が豊富）、レバテックキャリア（IT特化型で幅広い求人）の3社がおすすめです。2社以上に登録して比較検討しましょう。",
  },
];

export default function EdtechPage() {
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
        title="教育業界からEdTech転職【エンジニアガイド】"
        description="教育業界エンジニアからEdTech領域への転職方法を徹底解説。教育の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。"
        url="/industry/edtech/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "教育業界からEdTech転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          教育業界からEdTech転職【エンジニアガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 教育の知識をEdTech領域で活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            GIGAスクール構想の推進やリスキリング需要の拡大により、EdTech（教育テクノロジー）市場は急成長しています。LMS、オンライン学習プラットフォーム、アダプティブラーニングなど、教育の知識を持つエンジニアの需要は高まる一方です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、教育業界エンジニアがEdTech領域に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">教育エンジニアのEdTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">EdTech市場の急成長</h3>
              <p className="text-sm text-blue-700">
                日本のEdTech市場は年率20%以上で成長しており、2027年には5,000億円規模に達すると予想されています。GIGAスクール構想、企業のリスキリング投資、生涯学習の需要拡大が成長を後押ししています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI×教育の革新</h3>
              <p className="text-sm text-blue-700">
                生成AIの登場により、パーソナライズド学習、自動問題生成、学習データ分析による個別最適化など、AI×教育の革新が加速しています。教育の文脈を理解した上でAIを活用できるエンジニアの価値が急上昇しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リスキリング需要の爆発</h3>
              <p className="text-sm text-blue-700">
                政府の「リスキリング推進」政策と企業のDX人材育成需要により、社会人向けオンライン学習プラットフォームの需要が急増しています。Udemy、Schoo、Progateなどの企業が積極的にエンジニアを採用しています。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">教育経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["EdTechプロダクトエンジニア", "年収500〜800万円", "学習プラットフォーム・LMSの開発"],
                  ["学習データアナリスト", "年収550〜850万円", "学習ログ分析・効果測定・個別最適化"],
                  ["AIチューター開発エンジニア", "年収600〜900万円", "生成AI活用の学習支援システム開発"],
                  ["コンテンツテクノロジスト", "年収450〜700万円", "動画教材・インタラクティブ教材の開発"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">教育業界からEdTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Web開発・データ分析スキルを習得", desc: "Python、JavaScript（React/Next.js）、SQLの基礎を学ぶ。LMS関連ならLTI規格やSCORMの知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "教育業界の経験を棚卸しする", desc: "学習管理システムの導入・運用、教材デジタル化、学習データ分析など携わった案件を整理。学習成果の改善率など定量的な実績を準備する。" },
              { step: "3", title: "EdTech業界のトレンドをリサーチ", desc: "アダプティブラーニング、マイクロラーニング、ゲーミフィケーション、AIチューターなどのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（EdTech系スタートアップに強い）、ワークポート（異業種転職支援が充実）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">教育の知識をEdTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            EdTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
              { name: "AI/ML転職ガイド", href: "/skill/ai-ml/" },
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
