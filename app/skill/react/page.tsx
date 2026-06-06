import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Reactエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "Reactエンジニアの転職市場を2026年最新データで徹底解説。平均年収500-700万円、Web系自社開発・EC・SaaSに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "Reactエンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で500万〜700万円が目安です。Next.jsを使ったフルスタック開発ができるエンジニアは650万〜900万円、フロントエンドアーキテクトは800万〜1,100万円に達することもあります。",
  },
  {
    q: "Reactの将来性は？",
    a: "ReactはフロントエンドフレームワークのシェアNo.1を維持しており、React Server Components、Next.js App Routerなど進化が続いています。Web系自社開発企業の標準技術として、2026年以降も安定した需要が見込まれます。",
  },
  {
    q: "Reactエンジニアの転職で有利なスキルは？",
    a: "Next.js（App Router）、TypeScript、状態管理（Zustand/Jotai）、テスト（Jest/Testing Library/Playwright）、パフォーマンス最適化の経験が高く評価されます。UI/UXデザインの知見やアクセシビリティ対応もプラスになります。",
  },
  {
    q: "Vue.jsからReactへのスキルチェンジは容易ですか？",
    a: "比較的容易です。コンポーネントベースの設計思想は共通しているため、JSXの記法とHooksの概念を理解すれば移行できます。1〜2ヶ月のキャッチアップで実務レベルに達するケースが多いです。",
  },
  {
    q: "Reactエンジニアにおすすめの転職エージェントは？",
    a: "Geekly（Web・ゲーム業界に強く、React求人が豊富）、レバテックキャリア（IT特化で高年収React案件多数）、Green（スタートアップ・ベンチャーのReact求人が充実）の3社併用がおすすめです。",
  },
  {
    q: "40代のReactエンジニアでも転職できますか？",
    a: "十分可能です。特にデザインシステム構築やパフォーマンス最適化の経験がある40代エンジニアは需要が高いです。テックリードやフロントエンドアーキテクトとして、チーム全体の技術力向上を牽引する役割が期待されます。",
  },
];

export default function ReactSkillPage() {
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
        title="Reactエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント"
        description="Reactエンジニアの転職市場を2026年最新データで徹底解説。平均年収500-700万円、Web系自社開発・EC・SaaSに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。"
        url="/skill/react/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "Reactエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Reactエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | React転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reactエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "高水準で安定（Web系自社開発企業の標準技術）"],
                  ["平均年収（30代）", "500万〜700万円"],
                  ["平均年収（40代・リーダー）", "650万〜950万円"],
                  ["注目の技術トレンド", "React Server Components / Next.js App Router / Remix"],
                  ["強い業界", "Web系自社開発・EC・SaaS"],
                  ["リモートワーク", "70〜80%の求人でリモート可"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            ReactはフロントエンドフレームワークとしてNo.1のシェアを持ち、2026年現在もWeb系自社開発企業の標準技術として広く採用されています。React Server ComponentsやNext.js App Routerの普及により、フロントエンドだけでなくフルスタック開発の基盤としても注目されています。EC、SaaS、メディアなど幅広い業界でReactエンジニアの求人があり、UI/UXへの関心が高いエンジニアにとって活躍の場が広がっています。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reactエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フロントエンドスペシャリスト路線</h3>
              <p className="text-sm text-blue-700">
                React/Next.jsを極め、デザインシステム構築、パフォーマンス最適化、アクセシビリティ対応のスペシャリストへの道。年収700万〜1,000万円が目指せます。大規模プロダクトのフロントエンド品質を担保する重要な役割です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">UI/UXエンジニア路線</h3>
              <p className="text-sm text-blue-700">
                Reactの技術力にUI/UXデザインの知見を組み合わせた、デザインエンジニアへのキャリアパス。年収600万〜900万円。Figmaとの連携、プロトタイピング、ユーザビリティテストなど、デザインと開発の橋渡し役として需要が高まっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フルスタック / テックリード路線</h3>
              <p className="text-sm text-blue-700">
                ReactにNode.js/Next.jsのバックエンド開発力を加え、プロダクト全体の技術的意思決定を担うテックリードへの道。年収800万〜1,200万円。チームの技術選定やアーキテクチャ設計を主導します。
              </p>
            </div>
          </div>
        </section>

        {/* Salary by experience */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別の年収目安</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">経験年数</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">主なポジション</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3〜5年", "400万〜550万円", "フロントエンドエンジニア"],
                  ["5〜8年", "500万〜700万円", "シニアフロントエンドエンジニア"],
                  ["8〜12年", "650万〜900万円", "テックリード / フロントエンドアーキテクト"],
                  ["12年以上", "750万〜1,100万円", "VPoE / エンジニアリングマネージャー"],
                ].map(([exp, salary, position], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{exp}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommended agents */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reactエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">Web・ゲーム業界に強く、React/Next.js求人が特に充実。企業の技術スタックや開発文化の詳細情報を提供してくれる。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT特化でフロントエンド求人が豊富。技術に精通したアドバイザーが在籍し、React案件のマッチング精度が高い。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">スタートアップ・ベンチャー企業のReact求人が豊富。カジュアル面談から始められ、企業文化を重視した転職ができる。</p>
              <Link href="/review/green/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
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
          <h2 className="text-xl font-bold mb-3">Reactエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのReactスキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のスキル別ガイドも見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "TypeScriptエンジニア", href: "/skill/typescript/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
              { name: "Javaエンジニア", href: "/skill/java/" },
              { name: "AI・機械学習エンジニア", href: "/skill/ai-ml/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
