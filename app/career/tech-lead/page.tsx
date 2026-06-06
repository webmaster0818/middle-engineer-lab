import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "テックリードへのキャリアアップガイド【年収・スキル・転職戦略】",
  description:
    "テックリードになるための必要スキル、年収相場、キャリアパス、転職戦略を解説。シニアエンジニアからテックリードへのステップアップ方法を紹介します。",
};

const faqs = [
  {
    q: "テックリードとシニアエンジニアの違いは？",
    a: "シニアエンジニアは個人の技術力がメインですが、テックリードはチームの技術方針決定、コードレビュー、メンタリング、アーキテクチャ設計など「チームの技術レベルを引き上げる」役割を担います。",
  },
  {
    q: "テックリードの年収相場は？",
    a: "700〜1,100万円が相場です。外資系やメガベンチャーでは1,000〜1,500万円のレンジも。マネジメントとICのちょうど中間で、両方のスキルが求められるため高い年収が期待できます。",
  },
  {
    q: "テックリードからのキャリアパスは？",
    a: "EM（エンジニアリングマネージャー）へのマネジメントトラック、スタッフエンジニア・プリンシパルエンジニアへのICトラック、CTO/VPoEへの経営トラックの3つが主なパスです。",
  },
  {
    q: "テックリードに必要なソフトスキルは？",
    a: "コードレビュー力、メンタリング力、技術的な意思決定力、ステークホルダーとのコミュニケーション力、ドキュメンテーション力が重要です。技術だけではなく人を動かすスキルが必要です。",
  },
  {
    q: "テックリードは何歳くらいでなれる？",
    a: "エンジニア経験5〜8年（30代前半）でテックリードに就くケースが多いです。ただし年齢よりも技術力とリーダーシップの実績が重視されます。",
  },
  {
    q: "テックリードはコードを書く時間はある？",
    a: "チームサイズによりますが、40〜60%程度のコーディング時間を確保できるのが理想です。大きなチームではコードレビューとアーキテクチャ設計がメインになることもあります。",
  },
];

export default function TechLeadPage() {
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
        title="テックリードへのキャリアアップガイド【年収・スキル・転職戦略】"
        description="テックリードになるための必要スキル、年収相場、キャリアパス、転職戦略を解説。シニアエンジニアからテックリードへのステップアップ方法を紹介します。"
        url="/career/tech-lead/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "テックリードキャリアガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テックリードへのキャリアアップガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 技術リーダーへのステップアップ完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            テックリードは、技術力とリーダーシップを兼ね備えたエンジニアのキャリアパスとして人気が高まっています。「コードを書きながらチームを導く」という役割は、マネジメントに完全に移行したくないエンジニアにとって理想的なポジションです。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テックリード関連ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">マネジメント比率</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "テックリード", salary: "700〜1,100万円", diff: "★★★", mgmt: "30〜50%" },
                  { pos: "スタッフエンジニア", salary: "900〜1,500万円", diff: "★★★", mgmt: "10〜20%" },
                  { pos: "EM（エンジニアリングマネージャー）", salary: "800〜1,200万円", diff: "★★★", mgmt: "70〜90%" },
                  { pos: "シニアエンジニア", salary: "600〜900万円", diff: "★★☆", mgmt: "0〜10%" },
                  { pos: "アーキテクト", salary: "800〜1,300万円", diff: "★★★", mgmt: "10〜30%" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.mgmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テックリードに必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "アーキテクチャ設計力", desc: "システム全体の設計判断ができること。技術的負債の管理、スケーラビリティ、セキュリティを考慮した設計ができる力。" },
              { num: "2", title: "コードレビュー力", desc: "バグの検出だけでなく、設計の改善、可読性の向上、チームの技術レベル向上につながる建設的なフィードバック力。" },
              { num: "3", title: "技術選定・意思決定力", desc: "フレームワーク、ライブラリ、インフラの選定を、チームのスキルセットと事業要件を考慮して判断する力。" },
              { num: "4", title: "メンタリング力", desc: "ジュニア・ミドルエンジニアの成長を支援する力。1on1、ペアプログラミング、技術勉強会のファシリテーション。" },
              { num: "5", title: "ステークホルダーとの折衝力", desc: "PdM、デザイナー、ビジネスサイドとの技術的な合意形成。技術的制約をビジネス言語で説明する力。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職成功事例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">34歳 シニアバックエンドエンジニア6年 / Go + AWS</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">700万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">SaaS企業 テックリード（5人チーム）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">900万円（+200万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "テックリード求人が豊富。技術力の高さを正しく評価してくれる。" },
              { name: "Findy", point: "スキル偏差値でマッチング。テックリード・スタッフエンジニア向け求人が多い。" },
              { name: "転職ドラフト", point: "年収付きで指名が届く。テックリードの市場価値を確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">テックリード転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            テックリードポジションに強いIT特化型エージェントが最適な求人を提案します。
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
              { name: "PM→CTO/VPoEキャリアパス", href: "/career/pm-to-cto/" },
              { name: "マネジメントしたくない人の転職", href: "/purpose/management-no/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
