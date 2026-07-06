import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/daikigyo/" },
  title: "大企業ITエンジニアポジションガイド【社内SE・DX推進・IT子会社】",
  description:
    "大企業のITエンジニアポジションを解説。社内SE、DX推進、IT子会社、情シスの年収、仕事内容、転職方法を紹介します。",
};

const faqs = [
  {
    q: "大企業の社内SEの仕事内容は？",
    a: "社内システムの企画・導入・運用管理、ベンダーマネジメント、セキュリティ対策、IT戦略の策定が主な業務です。コーディングよりも企画・管理業務が多い傾向があります。",
  },
  {
    q: "大企業のIT子会社はおすすめ？",
    a: "親会社の安定性を享受しながら、IT専門職としてキャリアを築けます。ただし親会社のシステム開発が中心のため、技術スタックがレガシーになりやすい点は要注意です。DX推進系の部門があれば成長環境として良い選択肢です。",
  },
  {
    q: "大企業のDX推進部門は狙い目？",
    a: "非常に狙い目です。新しい技術スタックの導入、クラウド移行、データ活用基盤の構築など、技術的な挑戦ができます。年収も700〜1,000万円と高めのレンジです。",
  },
  {
    q: "大企業に中途で入るのは難しい？",
    a: "以前よりもハードルは下がっています。DX推進の波で大企業がIT人材を積極的に中途採用しています。特にクラウドやデータエンジニアリングの経験者は引く手あまたです。",
  },
  {
    q: "大企業の面接で聞かれることは？",
    a: "技術力に加えて、ステークホルダーとの調整力、プロジェクト管理の経験、組織への適応力が問われます。STAR法で過去の経験を整理しておきましょう。",
  },
  {
    q: "大企業のエンジニア年収は？",
    a: "社内SE: 500〜750万円、DX推進: 600〜1,000万円、IT子会社: 450〜700万円が相場です。加えて退職金、企業年金、住宅手当等の福利厚生が充実しています。",
  },
];

export default function DaiKigyoPage() {
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
      <ArticleJsonLd title="大企業ITエンジニアポジションガイド【社内SE・DX推進・IT子会社】" description="大企業のITエンジニアポジションを解説。社内SE、DX推進、IT子会社、情シスの年収、仕事内容、転職方法を紹介します。" url="/purpose/daikigyo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "大企業ITポジションガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">大企業ITエンジニアポジションガイド</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 大企業のITポジションを徹底比較</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 大企業の安定した環境でITキャリアを築きたい</li>
              <li>- 充実した福利厚生（退職金・企業年金）が欲しい</li>
              <li>- 大規模システムに関わりたい</li>
              <li>- DX推進に携わりたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業ITポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">技術力</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">安定度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "社内SE（情シス）", salary: "500〜750万円", tech: "中程度", stable: "非常に高い" },
                  { pos: "DX推進部門", salary: "600〜1,000万円", tech: "高い", stable: "高い" },
                  { pos: "IT子会社エンジニア", salary: "450〜700万円", tech: "中〜高", stable: "高い" },
                  { pos: "大手SIer", salary: "500〜800万円", tech: "中〜高", stable: "非常に高い" },
                  { pos: "メーカー組み込み", salary: "500〜750万円", tech: "高い（専門的）", stable: "非常に高い" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.tech}</td>
                    <td className="px-4 py-3 text-slate-600">{row.stable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業IT転職の攻略法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "DX推進部門を優先的に狙う", desc: "新しい技術に触れられ、年収レンジも高い。大企業のDX推進は今後も拡大が見込まれます。" },
              { num: "2", title: "非公開求人を活用する", desc: "大企業のIT求人の多くはエージェント経由の非公開求人です。複数エージェントに登録して網を広げましょう。" },
              { num: "3", title: "ソフトスキルをアピール", desc: "大企業ではステークホルダーとの調整力、ドキュメンテーション力、チームでの協調性が重視されます。" },
              { num: "4", title: "福利厚生込みの実質年収で判断", desc: "退職金（勤続20年で1,000〜2,000万円）、企業年金、住宅手当を含めると実質+100〜200万円です。" },
              { num: "5", title: "異動制度を確認する", desc: "入社後に別部門への異動ができるかを確認。キャリアの幅を広げる手段として社内異動は大企業ならではの利点です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "リクルートエージェント（IT）", point: "大手企業の非公開求人数No.1。DX推進ポジションが豊富。" },
              { name: "マイナビITエージェント", point: "社内SE・大手企業の求人が充実。福利厚生の情報も詳しい。" },
              { name: "doda ITエージェント", point: "大手SIer・メーカーの求人が多い。面接対策サポートが手厚い。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600">{agent.point}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">大企業への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">大企業のITポジションに強いエージェントが最適な求人を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "安定重視のエンジニア転職", href: "/purpose/stable/" },
              { name: "スタートアップ→大企業転職", href: "/career/startup-to-corporate/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
