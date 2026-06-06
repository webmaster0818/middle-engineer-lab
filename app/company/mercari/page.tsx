import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "メルカリ エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "メルカリへのエンジニア転職を徹底解説。年収700〜1200万円、マイクロサービス技術、グローバルな開発文化を現場目線でまとめました。",
};

const faqs = [
  {
    q: "メルカリのエンジニア採用で重視されるポイントは？",
    a: "技術力に加えて、メルカリのバリュー（Go Bold、All for One、Be a Pro）への共感が重視されます。コーディングテスト＋技術面接＋カルチャーフィット面接の構成です。",
  },
  {
    q: "メルカリのエンジニア年収はどのくらいですか？",
    a: "ジュニアで600〜800万円、ミドルで800〜1000万円、シニアで1000〜1200万円が目安です。RSU（株式報酬）も付与されます。",
  },
  {
    q: "メルカリで英語力は必要ですか？",
    a: "はい、社内公用語が英語のため、ビジネスレベルの英語力が求められます。ドキュメント、Slack、ミーティングすべて英語で行われます。",
  },
  {
    q: "メルカリのエンジニア組織の特徴は？",
    a: "多国籍チームで、エンジニアの約半数が外国籍です。マイクロサービスアーキテクチャを採用し、各チームが自律的に開発を進めるスタイルです。",
  },
  {
    q: "メルカリの技術スタックは？",
    a: "バックエンドはGo、フロントエンドはReact/TypeScript、モバイルはSwift/Kotlin。インフラはGCP/Kubernetes。マイクロサービス構成でgRPCを活用しています。",
  },
  {
    q: "メルカリへの転職でおすすめの準備は？",
    a: "Go言語の習得、マイクロサービスの理解、英語でのコミュニケーション力の強化が重要です。GitHub上でのOSS活動や技術ブログもアピールポイントになります。",
  },
];

export default function MercariCompanyPage() {
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
      <ArticleJsonLd title="メルカリ エンジニア転職ガイド" description="メルカリへのエンジニア転職を徹底解説。年収700〜1200万円、マイクロサービス技術、グローバルな開発文化を現場目線でまとめました。" url="/company/mercari/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "メルカリ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">メルカリ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 日本発グローバルテック企業のエンジニア採用</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社メルカリ"],
                ["業種", "フリマアプリ・フィンテック"],
                ["従業員数", "約2,300名（連結）"],
                ["平均年収", "700〜1,200万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "Go / React / TypeScript / Swift / Kotlin / GCP / Kubernetes"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">英語公用語のグローバル開発環境</h3>
              <p className="text-sm text-blue-700">エンジニアの約半数が外国籍で、社内公用語は英語です。グローバルスタンダードの開発プロセスが整備されており、海外企業からの転職者も多数在籍しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Goベースのマイクロサービス</h3>
              <p className="text-sm text-blue-700">バックエンドはGoを主力言語とし、数百のマイクロサービスで構成されています。gRPCによるサービス間通信、GCP/Kubernetes基盤でのインフラ運用など、モダンな技術スタックです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">メルペイ（フィンテック）のチャレンジ</h3>
              <p className="text-sm text-blue-700">決済サービス「メルペイ」ではフィンテック領域の技術的チャレンジがあります。高い可用性・セキュリティが求められ、金融系のエンジニア経験者にも魅力的なポジションです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / TypeScript / Swift / Kotlin いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マイクロサービスアーキテクチャの設計・実装経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>GCP または AWS でのクラウドインフラ経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ビジネスレベルの英語力（社内公用語が英語）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>CI/CDパイプラインの構築・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チームでのアジャイル開発経験</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "L3", "600〜800万円"],
                  ["ミドルエンジニア", "L4", "800〜1,000万円"],
                  ["シニアエンジニア", "L5", "1,000〜1,300万円"],
                  ["リードエンジニア", "L6", "1,300〜1,600万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,200〜1,500万円"],
                ].map(([pos, level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メルカリ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人に強い。メルカリの非公開求人を保有していることも。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。メルカリなどのメガベンチャー転職実績が豊富。" },
              { name: "Green", href: "/review/green/", desc: "IT企業の求人に強い転職サイト。メルカリの直接求人も掲載。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
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
          <h2 className="text-xl font-bold mb-3">メルカリへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LINEヤフー", href: "/company/line-yahoo/" },
              { name: "サイバーエージェント", href: "/company/cyberagent/" },
              { name: "DeNA", href: "/company/dena/" },
              { name: "楽天グループ", href: "/company/rakuten/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
