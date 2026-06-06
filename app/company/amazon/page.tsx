import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Amazon Japan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Amazon Japanへのエンジニア転職を徹底解説。年収900〜1800万円、LP（リーダーシッププリンシプル）面接、技術スタックを現場目線でまとめました。",
};

const faqs = [
  {
    q: "Amazon Japanの面接で最も重視されるポイントは？",
    a: "LP（Leadership Principles）への適合性が最重視されます。16のリーダーシッププリンシプルに基づいた行動面接（STAR形式）が複数回行われます。",
  },
  {
    q: "Amazon Japanのエンジニア面接の流れは？",
    a: "オンラインアセスメント → 電話スクリーニング → オンサイト面接（4〜5ラウンド）の流れです。各ラウンドでコーディングとLP質問が組み合わされます。",
  },
  {
    q: "Amazon Japanのエンジニア年収はどのくらいですか？",
    a: "SDE I（ジュニア）で約900万円、SDE II（ミドル）で約1200〜1500万円、SDE III（シニア）で約1500〜1800万円が目安です。RSU込みの総報酬です。",
  },
  {
    q: "Amazon Japanの技術スタックは？",
    a: "AWS全般、Java、Python、TypeScript、React、DynamoDB、Lambda、ECSなど自社クラウドサービスを全面的に活用しています。",
  },
  {
    q: "Amazon Japanのワークライフバランスは？",
    a: "チームによって差がありますが、近年は改善傾向です。ただしローンチ前やPrime Dayなどイベント時期は忙しくなることがあります。",
  },
  {
    q: "Amazon JapanはAWS部門とリテール部門どちらがおすすめ？",
    a: "技術的チャレンジを求めるならAWS部門、プロダクト志向ならリテール部門がおすすめです。年収はAWS部門の方がやや高い傾向にあります。",
  },
];

export default function AmazonCompanyPage() {
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
        title="Amazon Japan エンジニア転職ガイド"
        description="Amazon Japanへのエンジニア転職を徹底解説。年収900〜1800万円、LP面接、技術スタックを現場目線でまとめました。"
        url="/company/amazon/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド", href: "/company/" },
          { name: "Amazon Japan" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Amazon Japan エンジニア転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | AWS・リテール両部門のエンジニア採用を徹底解説
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "アマゾンジャパン合同会社"],
                ["業種", "EC・クラウドコンピューティング"],
                ["従業員数", "約10,000名（日本法人）"],
                ["平均年収", "900〜1,800万円（エンジニア職）"],
                ["本社所在地", "東京都目黒区"],
                ["技術スタック", "Java / Python / TypeScript / AWS / DynamoDB / React"],
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
              <h3 className="font-bold text-blue-800 mb-2">LP（リーダーシッププリンシプル）面接</h3>
              <p className="text-sm text-blue-700">
                Amazonの16のリーダーシッププリンシプルに基づいた行動面接が特徴です。STAR形式（Situation, Task, Action, Result）で過去の経験を具体的に語る必要があります。Customer Obsession、Ownership、Dive Deepなどが特に重視されます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Two-Pizza Team文化</h3>
              <p className="text-sm text-blue-700">
                少人数チーム（ピザ2枚で足りる人数）で自律的に開発を進める文化です。エンジニアはオーナーシップを持ってサービスの設計・開発・運用まで一貫して担当します。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Bar Raiser制度</h3>
              <p className="text-sm text-blue-700">
                採用チーム外のBar Raiserが面接に参加し、採用基準の一貫性を担保します。「既存メンバーの平均以上の人材のみ採用する」という高い基準が維持されています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Python いずれかでの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWSサービスの利用経験（EC2, S3, Lambda, DynamoDB等）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マイクロサービスアーキテクチャの設計・実装経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ビジネスレベルの英語力（日常業務で英語使用）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>データ構造・アルゴリズムの理解（コーディング面接対策）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>オーナーシップを持ってプロジェクトを推進した経験</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ（総報酬）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SDE I（ジュニア）", "L4", "800〜1,100万円"],
                  ["SDE II（ミドル）", "L5", "1,100〜1,500万円"],
                  ["SDE III（シニア）", "L6", "1,500〜2,000万円"],
                  ["プリンシパルエンジニア", "L7", "2,000〜2,800万円"],
                  ["エンジニアリングマネージャー", "L6+", "1,800〜2,500万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Amazon Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で外資系企業のエンジニア求人に強い。LP面接対策もサポート。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "Amazon案件を扱うヘッドハンターが多数。ダイレクトスカウトで効率的。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。Amazon Japanの非公開求人を保有している場合も。" },
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
          <h2 className="text-xl font-bold mb-3">Amazon Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資IT企業への転職に強いエージェントに無料相談してみませんか？
          </p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google Japan", href: "/company/google/" },
              { name: "Microsoft Japan", href: "/company/microsoft/" },
              { name: "Meta Japan", href: "/company/meta/" },
              { name: "Apple Japan", href: "/company/apple/" },
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
