import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/jigyoukaihatsu/" },
  title: "自社開発企業への転職ガイド【受託から自社サービスへ】",
  description:
    "受託開発から自社サービス開発企業への転職方法を解説。自社開発のメリット・デメリット、年収、必要スキル、企業の見分け方を紹介します。",
};

const faqs = [
  {
    q: "自社開発企業の定義は？",
    a: "自社でプロダクト（サービス・アプリ）を企画・開発・運営している企業です。SaaS企業、ECサイト運営、ゲーム会社、メディア企業などが該当します。受託開発とは異なり、自社の売上に直結するプロダクトを開発します。",
  },
  {
    q: "受託から自社開発に転職するメリットは？",
    a: "プロダクトの成長に長期的に関われる、ユーザーフィードバックを直接受けられる、技術選定の自由度が高い、納期のプレッシャーが比較的少ないのがメリットです。",
  },
  {
    q: "自社開発企業の年収は受託より高い？",
    a: "一概には言えませんが、SaaS企業やメガベンチャーは受託大手と同等以上の年収レンジです。特に成長期のSaaS企業は技術人材への投資が大きく、600〜900万円のレンジが一般的です。",
  },
  {
    q: "自社開発企業の面接で重視されるポイントは？",
    a: "技術力に加えて、プロダクト志向（ユーザー目線での開発力）、改善提案力、チーム開発への適性が重視されます。「なぜこの技術を選んだか」を論理的に説明できる力が重要です。",
  },
  {
    q: "自社開発と自社サービスの違いは？",
    a: "ほぼ同義ですが、自社開発は「自社で開発している」という事実を指し、自社サービスは「自社のサービスを提供している」というビジネスモデルを指します。SES企業の「自社開発」と混同しないよう注意が必要です。",
  },
  {
    q: "SES企業の「自社開発あり」は信用できる？",
    a: "注意が必要です。一部のSES企業は客先常駐がメインなのに「自社開発あり」と謳うケースがあります。面接で「自社開発と客先常駐の比率」「配属予定プロジェクト」を具体的に確認しましょう。",
  },
];

export default function JigyouKaihatsuPage() {
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
      <ArticleJsonLd title="自社開発企業への転職ガイド【受託から自社サービスへ】" description="受託開発から自社サービス開発企業への転職方法を解説。自社開発のメリット・デメリット、年収、必要スキル、企業の見分け方を紹介します。" url="/purpose/jigyoukaihatsu/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "自社開発企業への転職ガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">自社開発企業への転職ガイド</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 受託から自社サービスへの転職完全ガイド</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 受託開発の納期プレッシャーから解放されたい</li>
              <li>- 一つのプロダクトに長期的に関わりたい</li>
              <li>- ユーザーの反応を直接感じながら開発したい</li>
              <li>- 技術選定の自由度が高い環境で働きたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自社開発企業タイプ比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">技術自由度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">WLB</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "SaaS企業", salary: "550〜850万円", freedom: "高い", wlb: "良好" },
                  { type: "メガベンチャー", salary: "600〜1,000万円", freedom: "高い", wlb: "良好" },
                  { type: "ECプラットフォーム", salary: "550〜800万円", freedom: "中〜高", wlb: "良好" },
                  { type: "ゲーム会社", salary: "500〜800万円", freedom: "高い", wlb: "プロジェクト次第" },
                  { type: "メディア企業", salary: "450〜700万円", freedom: "中程度", wlb: "良好" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.freedom}</td>
                    <td className="px-4 py-3 text-slate-600">{row.wlb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自社開発企業への転職ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ポートフォリオで個人プロダクトを見せる", desc: "受託経験だけでは物足りません。個人でWebアプリやOSSを開発し、GitHubで公開しましょう。プロダクト志向をアピールできます。" },
              { num: "2", title: "プロダクト志向をアピール", desc: "「ユーザーにとって何が価値か」を考えて開発してきた経験をアピールしましょう。受託でも顧客提案の経験は活かせます。" },
              { num: "3", title: "モダンな技術スタックを習得する", desc: "自社開発企業はTypeScript、React、Go、Kubernetes等のモダン技術を使うケースが多いです。事前に学習しておきましょう。" },
              { num: "4", title: "SESの「自社開発あり」に注意", desc: "面接で「全社員のうち自社開発に携わる割合」「配属予定のプロジェクト」を具体的に確認しましょう。" },
              { num: "5", title: "カジュアル面談を活用する", desc: "GreenやWantedlyでカジュアル面談を申し込み、開発体制や技術スタックを直接確認しましょう。" },
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
              { name: "レバテックキャリア", point: "自社サービス企業の求人が豊富。技術力マッチングの精度が高い。" },
              { name: "Green", point: "自社開発企業が多く集まるプラットフォーム。カジュアル面談でミスマッチを防げる。" },
              { name: "Wantedly", point: "企業のビジョンや開発文化を詳しく知れる。自社開発スタートアップの求人が充実。" },
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
          <h2 className="text-xl font-bold mb-3">自社開発企業への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">自社サービス企業の求人に強いIT特化型エージェントが最適な企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SE→Web系エンジニア転職", href: "/career/se-to-web/" },
              { name: "技術力を伸ばせる企業の選び方", href: "/purpose/growth/" },
              { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
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
