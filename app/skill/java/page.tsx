import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Javaエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "Javaエンジニアの転職市場を2026年最新データで徹底解説。平均年収550-700万円、金融・業務系に強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "Javaエンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で550万〜700万円が目安です。金融系のJavaエンジニアは700万〜900万円、テックリードやアーキテクトは800万〜1,100万円に達することもあります。",
  },
  {
    q: "Javaの将来性は？",
    a: "Javaは企業のミッションクリティカルなシステム（金融、保険、物流など）で広く使われており、安定した需要があります。Spring Boot/Cloud、マイクロサービス化の需要もあり、今後も一定の需要が続く見通しです。",
  },
  {
    q: "Javaエンジニアの転職で有利なスキルは？",
    a: "Spring Boot/Spring Cloud、マイクロサービスアーキテクチャ、AWS/Azure上でのJavaアプリ運用経験、CI/CDパイプライン構築経験が高く評価されます。Kotlin経験もプラスになります。",
  },
  {
    q: "SIerから自社開発に転職できますか？",
    a: "可能です。SIerで培ったJava開発経験は自社開発企業でも評価されます。ただし、モダンなフレームワーク（Spring Boot等）の経験やアジャイル開発の理解があるとより有利です。ポートフォリオやGitHubの活動実績も準備しましょう。",
  },
  {
    q: "Javaエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT特化・Java求人多数）、リクルートエージェントIT（金融系Java求人に強い）、ビズリーチ（ハイクラスJava求人）の3社併用がおすすめです。",
  },
  {
    q: "40代のJavaエンジニアでも転職できますか？",
    a: "十分可能です。特にPM/PL経験のある40代Javaエンジニアは需要が高いです。金融・保険業界ではJavaの業務知識を持つベテランエンジニアの需要が安定しています。",
  },
];

export default function JavaSkillPage() {
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
          { name: "Javaエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Javaエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | Java転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "安定〜微増（DX需要で業務系Java堅調）"],
                  ["平均年収（30代）", "550万〜700万円"],
                  ["平均年収（40代・リーダー）", "700万〜1,000万円"],
                  ["注目の技術トレンド", "Spring Boot 3 / Spring Cloud / Kotlin"],
                  ["強い業界", "金融・保険・物流・製造・官公庁"],
                  ["リモートワーク", "50〜60%の求人でリモート可"],
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
            Javaはプログラミング言語の中で最も安定した需要を誇る言語の一つです。2026年現在も、金融機関の基幹システム、大規模ECプラットフォーム、業務系Webアプリケーションなどで広く使われています。特にDX推進の波に乗り、レガシーJavaシステムのモダナイゼーション（Spring Boot移行、マイクロサービス化、クラウドリフト）の需要が急増しています。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術スペシャリスト路線</h3>
              <p className="text-sm text-blue-700">
                Javaアーキテクト、Spring Boot/Cloudのスペシャリスト、マイクロサービスアーキテクトへの道。年収800万〜1,200万円が目指せます。深い技術力と設計能力が求められ、システム全体のアーキテクチャ設計を担います。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネジメント路線</h3>
              <p className="text-sm text-blue-700">
                PL→PM→開発部門マネージャーへのキャリアパス。年収700万〜1,000万円。Java開発の技術的バックグラウンドを持ちながら、チームマネジメントやプロジェクト管理を担当します。40代のJavaエンジニアに最も多いキャリアパスです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Kotlin/モダンJVM言語への転向</h3>
              <p className="text-sm text-blue-700">
                JavaからKotlinへのスキル拡張は比較的容易で、Android開発やサーバーサイドKotlinの求人に幅が広がります。Scalaへの転向でデータエンジニアリング領域への進出も可能です。
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
                  ["3〜5年", "450万〜600万円", "ジュニア〜ミドルエンジニア"],
                  ["5〜8年", "550万〜750万円", "シニアエンジニア / PL"],
                  ["8〜12年", "650万〜900万円", "テックリード / アーキテクト"],
                  ["12年以上", "750万〜1,100万円", "PM / エンジニアリングマネージャー"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">Java/Spring Boot求人が豊富。IT特化で技術に精通したアドバイザーが在籍。年収800万以上の求人が約50%。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">金融・保険系のJava求人が豊富。求人数20万件以上で幅広い選択肢。40代の転職実績も多数。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">年収600万以上のハイクラスJava求人。アーキテクト・テックリード向けのスカウトが充実。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
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
          <h2 className="text-xl font-bold mb-3">Javaエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのJavaスキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
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
              { name: "Pythonエンジニア", href: "/skill/python/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
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
