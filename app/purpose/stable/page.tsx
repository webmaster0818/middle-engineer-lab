import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/stable/" },
  title: "安定重視のエンジニア転職【大企業・公共系・社内SE】",
  description:
    "安定を重視するエンジニア向けの転職先を解説。大企業、公共系、社内SE、金融系の特徴、年収、福利厚生を比較します。",
};

const faqs = [
  {
    q: "安定重視の転職で年収は下がる？",
    a: "スタートアップや外資系からの転職では下がる可能性がありますが、SIerや中小企業からの転職では上がるケースも多いです。大手メーカーの社内SEで500〜700万円、金融系で600〜800万円が相場です。",
  },
  {
    q: "社内SEは本当に楽？",
    a: "開発よりも運用・保守が中心のため、納期のプレッシャーは少ない傾向です。ただし社内調整、ベンダーマネジメント、経営層への報告などコミュニケーション能力が求められます。",
  },
  {
    q: "公共系システムの仕事内容は？",
    a: "官公庁、自治体、医療機関向けのシステム開発・運用が中心です。セキュリティ要件が厳しく、ウォーターフォール開発が多い傾向。安定した長期プロジェクトが多いです。",
  },
  {
    q: "大企業の福利厚生はどれくらい充実している？",
    a: "住宅手当（月3〜10万円）、退職金（勤続20年で1,000〜2,000万円）、企業年金、持株会、育児休暇（男性取得率上昇中）などが一般的です。年収+福利厚生で実質報酬は100〜200万円上乗せです。",
  },
  {
    q: "リストラされにくい企業は？",
    a: "インフラ系（電力、通信、鉄道）、金融系（メガバンク、保険）、公共系は景気変動の影響を受けにくいです。ただし近年はDX推進で外部人材を積極採用する傾向もあり、スキルの陳腐化には注意が必要です。",
  },
  {
    q: "安定重視でもスキルアップは可能？",
    a: "可能です。大企業のDX推進部門やクラウド移行プロジェクトに参画できれば、最新技術に触れる機会があります。社内の異動制度を活用して技術的な部署に移るのも有効です。",
  },
];

export default function StablePage() {
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
        title="安定重視のエンジニア転職【大企業・公共系・社内SE】"
        description="安定を重視するエンジニア向けの転職先を解説。大企業、公共系、社内SE、金融系の特徴、年収、福利厚生を比較します。"
        url="/purpose/stable/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "安定重視のエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          安定重視のエンジニア転職【大企業・公共系】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 安定とキャリアを両立する転職ガイド
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 住宅ローンを組むために安定企業に入りたい</li>
              <li>- 家族がいるため倒産リスクの低い企業で働きたい</li>
              <li>- 退職金・企業年金がある企業を希望している</li>
              <li>- 長期的にキャリアを築ける環境を求めている</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">安定企業タイプ比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">安定度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">福利厚生</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "大手メーカー社内SE", salary: "500〜750万円", stable: "非常に高い", benefits: "充実" },
                  { type: "メガバンクIT部門", salary: "600〜900万円", stable: "非常に高い", benefits: "非常に充実" },
                  { type: "通信キャリアIT部門", salary: "550〜850万円", stable: "非常に高い", benefits: "充実" },
                  { type: "公共系SIer", salary: "450〜700万円", stable: "高い", benefits: "充実" },
                  { type: "大手SaaS企業", salary: "550〜850万円", stable: "高い", benefits: "中程度" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.stable}</td>
                    <td className="px-4 py-3 text-slate-600">{row.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">安定重視の転職戦略</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "福利厚生込みの実質報酬で比較する", desc: "年収だけでなく、住宅手当、退職金、企業年金、持株会を含めた総合報酬で比較しましょう。大企業は実質+100〜200万円の価値があります。" },
              { num: "2", title: "業界の安定性を確認する", desc: "インフラ、金融、通信、医療は景気変動の影響を受けにくいです。IT投資を増やしている業界を選びましょう。" },
              { num: "3", title: "社内異動制度の有無を確認する", desc: "大企業は社内異動で部署変更が可能です。DX推進部門への異動で技術的なキャリアも維持できます。" },
              { num: "4", title: "離職率を確認する", desc: "離職率が低い企業は社員の満足度が高い証拠です。OpenWorkの口コミや企業の開示情報で確認しましょう。" },
              { num: "5", title: "副業可否を確認する", desc: "安定企業でも副業OKの企業が増えています。本業の安定+副業の収入で最適なバランスを取りましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "マイナビITエージェント", point: "大手企業・社内SE求人が豊富。福利厚生の詳細情報も提供してくれる。" },
              { name: "リクルートエージェント（IT）", point: "非公開求人数No.1。大手企業の求人が多い。" },
              { name: "doda ITエージェント", point: "大手SIer・メーカーの求人が充実。安定志向の転職サポートに強い。" },
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
          <h2 className="text-xl font-bold mb-3">安定企業への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            安定した大企業のITポジションをIT特化型エージェントが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "大企業ITポジションガイド", href: "/purpose/daikigyo/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "スタートアップ→大企業転職", href: "/career/startup-to-corporate/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
