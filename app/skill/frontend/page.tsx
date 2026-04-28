import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "フロントエンドエンジニアの転職ガイド【React/Vue】30代の市場価値",
  description:
    "フロントエンドエンジニアの転職市場をReact/Vue/Next.jsの観点から徹底解説。平均年収500-800万円、フリーランスvs正社員比較、30代の市場価値、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "フロントエンドエンジニアの平均年収は？",
    a: "30代で500万〜800万円が目安です。React/Next.jsのスペシャリストは700万〜1,000万円、フロントエンドアーキテクトは800万〜1,200万円に達することもあります。フリーランスの場合は月単価60万〜100万円が相場です。",
  },
  {
    q: "ReactとVue、どちらを学ぶべき？",
    a: "2026年現在、求人数ではReact（Next.js含む）が圧倒的に多いです。ただし、Vueも国内企業では一定の需要があります。転職市場での有利さを考えるとReact/Next.jsの習得がおすすめです。",
  },
  {
    q: "30代のフロントエンドエンジニアの市場価値は？",
    a: "React/Vue + TypeScript + テスト設計の経験がある30代は非常に高い市場価値があります。特にNext.js/Nuxtでのフルスタック開発や、デザインシステム構築経験があるとさらに評価されます。",
  },
  {
    q: "フリーランスと正社員、どちらがよい？",
    a: "収入面ではフリーランスが有利（月単価60-100万）ですが、安定性・福利厚生は正社員が優位です。30代前半は正社員でスキルを磨き、35歳以降にフリーランスへ転向するパターンが多いです。",
  },
  {
    q: "バックエンドからフロントエンドに転向できますか？",
    a: "可能です。TypeScript経験があるバックエンドエンジニアは、React/Next.jsへの転向がスムーズです。API設計の知識はフルスタック開発で大きな強みになります。",
  },
  {
    q: "フロントエンドエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（React/Vue求人多数）、Green（Web系スタートアップ）、Geekly（IT特化）の3つがフロントエンドエンジニアに人気です。",
  },
];

export default function FrontendSkillPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "フロントエンドエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フロントエンドエンジニアの転職ガイド【React/Vue】30代の市場価値
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | React/Vue/Next.js時代のフロントエンド転職を徹底解説
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンドエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "高水準で安定（React求人が過半数）"],
                  ["平均年収（30代）", "500万〜800万円"],
                  ["平均年収（アーキテクト）", "800万〜1,200万円"],
                  ["フリーランス月単価", "60万〜100万円"],
                  ["注目の技術トレンド", "Next.js App Router / RSC / Tailwind CSS"],
                  ["強い業界", "Web系 / SaaS / メガベンチャー / EC"],
                  ["リモートワーク", "75%以上の求人でリモート可"],
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
            フロントエンドエンジニアの需要は2026年も高水準を維持しています。特にReact/Next.jsを使ったモダンフロントエンド開発の求人が急増しており、TypeScriptの必須化も進んでいます。Server Components、Streaming SSR、Edge Runtimeなど新しいパラダイムの理解が市場価値を大きく左右する時代になっています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンドエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フロントエンドアーキテクト</h3>
              <p className="text-sm text-blue-700">
                デザインシステムの設計、フロントエンドアーキテクチャの策定、パフォーマンス最適化を担当。年収800万〜1,200万円。大規模SPAの設計経験、アクセシビリティ、テスト戦略の知識が求められます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フルスタックエンジニア</h3>
              <p className="text-sm text-blue-700">
                Next.js/Nuxtを軸に、フロントエンドとバックエンドの両方をカバー。年収600万〜1,000万円。API設計、データベース設計、インフラ構築まで一貫して対応できるスキルセットが求められます。スタートアップで特に需要が高いです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フリーランス独立</h3>
              <p className="text-sm text-blue-700">
                React/Next.jsのフリーランス案件は月単価60万〜100万円。年収換算で720万〜1,200万円。正社員の1.3〜1.5倍の収入が見込めますが、案件の安定性や福利厚生面は自己管理が必要です。35歳前後での独立が多いです。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック別の年収比較</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">技術スタック</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">求人数傾向</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["React + TypeScript", "550万〜850万円", "非常に多い"],
                  ["Next.js (App Router)", "600万〜900万円", "急増中"],
                  ["Vue.js + Nuxt", "500万〜750万円", "安定"],
                  ["React Native / Flutter", "550万〜800万円", "増加中"],
                  ["Angular", "500万〜700万円", "微減"],
                ].map(([stack, salary, trend], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{stack}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">React/Vue求人が豊富。フロントエンドの技術トレンドに詳しいアドバイザーが在籍し、的確なマッチングが期待できる。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">Web系スタートアップのフロントエンド求人が多数。カジュアル面談で企業の技術文化を事前に確認できる。</p>
              <Link href="/review/green/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT・Web業界特化でフロントエンド求人の質が高い。メガベンチャーの非公開求人にアクセス可能。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
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
          <h2 className="text-xl font-bold mb-3">フロントエンドエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            React/Vueのスキルが今の市場でどう評価されるか、無料で確認してみませんか？
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
              { name: "Javaエンジニア", href: "/skill/java/" },
              { name: "Pythonエンジニア", href: "/skill/python/" },
              { name: "インフラエンジニア", href: "/skill/infrastructure/" },
              { name: "PM(プロジェクトマネージャー)", href: "/skill/pm/" },
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
