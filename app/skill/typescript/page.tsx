import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "TypeScriptエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "TypeScriptエンジニアの転職市場を2026年最新データで徹底解説。平均年収550-750万円、Web系・SaaS・スタートアップに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "TypeScriptエンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で550万〜750万円が目安です。フルスタックエンジニアやテックリードは700万〜1,000万円、SaaS企業のシニアエンジニアは800万〜1,100万円に達することもあります。",
  },
  {
    q: "TypeScriptの将来性は？",
    a: "TypeScriptはJavaScriptの上位互換として、フロントエンドからバックエンド（Node.js/Deno）まで幅広く採用が拡大しています。React、Next.js、NestJSなどのエコシステムが充実しており、2026年以降も高い需要が続く見通しです。",
  },
  {
    q: "TypeScriptエンジニアの転職で有利なスキルは？",
    a: "React/Next.jsの実務経験、GraphQL、REST API設計、CI/CDパイプライン構築、テスト（Jest/Vitest/Playwright）の経験が高く評価されます。AWS/GCPでのデプロイ経験やフルスタック開発力もプラスになります。",
  },
  {
    q: "JavaScriptからTypeScriptへのスキルチェンジは容易ですか？",
    a: "比較的容易です。TypeScriptはJavaScriptの拡張なので、既存のJS知識がそのまま活かせます。型システムの理解とジェネリクスの習得に1〜2ヶ月程度かけると実務レベルに達します。",
  },
  {
    q: "TypeScriptエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT特化・Web系求人多数）、Geekly（Web・ゲーム業界に強い）、Green（スタートアップ・ベンチャー求人が豊富）の3社併用がおすすめです。",
  },
  {
    q: "40代のTypeScriptエンジニアでも転職できますか？",
    a: "十分可能です。特にフルスタック経験やテックリード・アーキテクト経験のある40代エンジニアは需要が高いです。SaaS企業やメガベンチャーでは技術力のあるシニアエンジニアを積極採用しています。",
  },
];

export default function TypeScriptSkillPage() {
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
        title="TypeScriptエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント"
        description="TypeScriptエンジニアの転職市場を2026年最新データで徹底解説。平均年収550-750万円、Web系・SaaS・スタートアップに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。"
        url="/skill/typescript/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "TypeScriptエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          TypeScriptエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | TypeScript転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "急増（Web系・SaaS企業を中心に需要拡大）"],
                  ["平均年収（30代）", "550万〜750万円"],
                  ["平均年収（40代・リーダー）", "700万〜1,000万円"],
                  ["注目の技術トレンド", "Next.js App Router / React Server Components / Bun"],
                  ["強い業界", "Web系自社開発・SaaS・スタートアップ"],
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
            TypeScriptはフロントエンド開発のデファクトスタンダードとなり、バックエンド（Node.js/Deno/Bun）やモバイル（React Native）まで活用範囲が拡大しています。2026年現在、SaaS企業やスタートアップを中心にTypeScriptエンジニアの求人が急増しており、特にReact/Next.jsを用いたフルスタック開発ができるエンジニアの需要が非常に高い状況です。リモートワーク対応率も高く、柔軟な働き方を求めるエンジニアにとって魅力的な選択肢です。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フルスタックエンジニア路線</h3>
              <p className="text-sm text-blue-700">
                TypeScript + Next.js + Node.jsでフロントからバックエンドまで一貫して開発できるフルスタックエンジニアへの道。年収700万〜1,000万円が目指せます。SaaS企業やスタートアップで特に需要が高く、少数精鋭チームのコアメンバーとして活躍できます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フロントエンドアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                デザインシステム構築、パフォーマンス最適化、アクセシビリティ対応など、フロントエンド技術のスペシャリストとしてのキャリアパス。年収800万〜1,200万円。大規模プロダクトの技術的意思決定を担い、チーム全体の開発生産性を向上させます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">テックリード・VPoE路線</h3>
              <p className="text-sm text-blue-700">
                技術選定やチームビルディングを担うテックリードから、VPoE（VP of Engineering）やCTOへのキャリアパス。年収800万〜1,500万円。TypeScriptの技術基盤を持ちながら、エンジニアリング組織全体のマネジメントを行います。
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
                  ["3〜5年", "450万〜600万円", "フロントエンドエンジニア"],
                  ["5〜8年", "550万〜750万円", "シニアエンジニア / フルスタック"],
                  ["8〜12年", "700万〜950万円", "テックリード / アーキテクト"],
                  ["12年以上", "800万〜1,200万円", "VPoE / エンジニアリングマネージャー"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">Web系・SaaS企業のTypeScript求人が豊富。IT特化で技術トレンドに精通したアドバイザーが在籍。フルスタック案件の紹介実績が多数。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">Web・ゲーム業界に強く、TypeScript/React求人が充実。企業の開発文化や技術スタックの情報提供が手厚い。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">スタートアップ・ベンチャー企業の求人が豊富。カジュアル面談から始められ、企業と直接やりとりできるダイレクトリクルーティング型。</p>
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
          <h2 className="text-xl font-bold mb-3">TypeScriptエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのTypeScriptスキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
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
              { name: "Reactエンジニア", href: "/skill/react/" },
              { name: "AWSエンジニア", href: "/skill/aws/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
              { name: "Pythonエンジニア", href: "/skill/python/" },
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
