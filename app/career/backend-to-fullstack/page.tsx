import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "バックエンド→フルスタックエンジニアへの転身ガイド【2026年版】",
  description:
    "バックエンドエンジニアからフルスタックエンジニアへ転身するための学習ロードマップ、年収変化、転職成功事例を詳しく解説します。",
};

const faqs = [
  {
    q: "フルスタックエンジニアに明確な定義はある？",
    a: "明確な定義はありませんが、一般的にフロントエンド・バックエンド・インフラの3領域をカバーできるエンジニアを指します。すべてを極める必要はなく、メイン領域+他領域の実装力があれば十分です。",
  },
  {
    q: "バックエンドからフルスタックになるのに何ヶ月かかる？",
    a: "フロントエンドの基礎習得に3〜6ヶ月、実務レベルに到達するにはさらに6ヶ月程度が目安です。業務でフロント案件に積極的に手を挙げることで習得を加速できます。",
  },
  {
    q: "フルスタックエンジニアの年収相場は？",
    a: "500〜900万円が相場です。特にTypeScript+Go/Rust+AWSのスキルセットを持つフルスタックエンジニアは800万円以上のオファーも珍しくありません。",
  },
  {
    q: "フロントエンドの学習は何から始めるべき？",
    a: "まずTypeScriptを学び、次にReactの基礎を身につけましょう。Next.jsでSSR/SSGを実装できるレベルを目指すのが最短ルートです。CSSフレームワークはTailwind CSSがおすすめです。",
  },
  {
    q: "フルスタックエンジニアの需要は今後も続く？",
    a: "スタートアップや中小企業では今後も高い需要が続きます。大企業では専門特化型が好まれる傾向がありますが、技術選定やアーキテクチャ設計を担えるフルスタック人材は非常に重宝されます。",
  },
  {
    q: "インフラ知識はどこまで必要？",
    a: "AWS/GCPの主要サービス（コンピュート、ストレージ、DB、CDN）の理解と、Docker/Kubernetes、CI/CDパイプラインの構築経験があれば十分です。IaCツール（Terraform等）まで使えると差別化できます。",
  },
];

export default function BackendToFullstackPage() {
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
        title="バックエンド→フルスタックエンジニアへの転身ガイド【2026年版】"
        description="バックエンドエンジニアからフルスタックエンジニアへ転身するための学習ロードマップ、年収変化、転職成功事例を詳しく解説します。"
        url="/career/backend-to-fullstack/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "バックエンド→フルスタック転身" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          バックエンド→フルスタックエンジニアへの転身ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | フルスタックエンジニアへのキャリアアップ完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            バックエンドエンジニアがフルスタックへ転身することで、キャリアの選択肢と年収レンジが大幅に広がります。特にスタートアップや自社サービス企業では、フルスタックエンジニアへの需要が急増しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、バックエンドの強みを活かしながらフルスタックエンジニアへ転身するための具体的なステップを解説します。
          </p>
        </section>

        {/* 現状分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタック転身の現状</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">求人増加率</span>
                <span className="text-slate-600">前年比+35%（2025→2026年）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">年収レンジ</span>
                <span className="text-slate-600">500〜900万円（バックエンド専門より+50〜150万円）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">主要技術</span>
                <span className="text-slate-600">TypeScript / React / Next.js / Go / AWS</span>
              </div>
            </div>
          </div>
        </section>

        {/* 転職先テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタックエンジニアの転職先比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "スタートアップCTO候補", salary: "600〜1,000万円", diff: "★★★", feat: "技術選定から参画。SO有り" },
                  { pos: "自社サービス企業", salary: "550〜800万円", diff: "★★☆", feat: "プロダクト志向の開発" },
                  { pos: "メガベンチャー", salary: "600〜900万円", diff: "★★★", feat: "大規模トラフィック経験" },
                  { pos: "受託開発リード", salary: "500〜750万円", diff: "★★☆", feat: "幅広い技術経験が積める" },
                  { pos: "フリーランス", salary: "720〜1,200万円", diff: "★★★", feat: "高単価。月80〜100万円" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 必要スキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタック転身のスキルロードマップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "TypeScript（2〜4週間）", desc: "型安全なJavaScriptとしてフロント・バック両方で使えます。バックエンドの型思考を活かせるため、習得は比較的スムーズです。" },
              { num: "2", title: "React + Next.js（2〜3ヶ月）", desc: "コンポーネント設計、State管理、SSR/SSGの概念を理解しましょう。Server Componentsが主流になっているため、最新のNext.js App Routerを学びましょう。" },
              { num: "3", title: "CSS/Tailwind CSS（2〜4週間）", desc: "レスポンシブデザインとTailwind CSSの実践的な使い方をマスターしましょう。デザインシステムの理解も重要です。" },
              { num: "4", title: "インフラ/DevOps（1〜2ヶ月）", desc: "Docker、CI/CD、AWS/GCPの主要サービス、IaCツール（Terraform）を学びましょう。バックエンド経験があるので習得しやすい領域です。" },
              { num: "5", title: "個人プロジェクト（1〜2ヶ月）", desc: "フロントからインフラまで一人で構築するプロジェクトを完成させましょう。これがフルスタックエンジニアとしてのポートフォリオになります。" },
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

        {/* 成功事例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職成功事例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">33歳 バックエンドエンジニア / PHP + MySQL 6年</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">550万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">学習内容</span>
                <span className="text-slate-600">TypeScript + React + Next.js + AWS（6ヶ月間）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">HR系SaaS企業 フルスタックエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">680万円（+130万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタック転職におすすめのエージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "フルスタック求人が豊富。技術面談の対策サポートも手厚い。" },
              { name: "Findy", point: "スキル偏差値でマッチング。フルスタック人材向けのハイクラス求人が多い。" },
              { name: "転職ドラフト", point: "企業から年収付きで指名が届く。フルスタックエンジニアの市場価値を確認できる。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600">{agent.point}</p>
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
          <h2 className="text-xl font-bold mb-3">フルスタック転職を無料で相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントがバックエンドの強みを活かせるフルスタックポジションを提案します。
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
              { name: "SE→Web系エンジニア転職", href: "/career/se-to-web/" },
              { name: "TypeScriptスキルガイド", href: "/skill/typescript/" },
              { name: "Reactスキルガイド", href: "/skill/react/" },
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
