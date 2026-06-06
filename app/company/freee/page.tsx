import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "freee エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "freeeへのエンジニア転職を徹底解説。年収600〜1000万円、クラウド会計SaaSのリーディングカンパニーの技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "freeeのエンジニア採用プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（2回）→ カルチャーフィット面接の流れです。ペアプログラミング形式の面接が特徴的です。",
  },
  {
    q: "freeeのエンジニア年収はどのくらい？",
    a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1100万円が目安です。ストックオプションも付与されます。",
  },
  {
    q: "freeeの技術スタックは？",
    a: "バックエンドはRuby on Rails、フロントエンドはReact/TypeScript。インフラはAWS/Kubernetes。近年はGoやRustも部分的に導入しています。",
  },
  {
    q: "freeeの開発文化の特徴は？",
    a: "「マジ価値」（ユーザーに本質的な価値を届ける）を掲げ、プロダクト志向の開発文化が根付いています。エンジニアもビジネス課題の理解が求められます。",
  },
  {
    q: "freeeのワークライフバランスは？",
    a: "フレックスタイム制、リモートワーク可。開発合宿やハッカソンなどの社内イベントも活発で、働きやすい環境が整っています。",
  },
  {
    q: "freeeへの転職で有利な経験は？",
    a: "Ruby on Railsの実務経験、SaaSプロダクトの開発経験、フィンテック・会計領域のドメイン知識が有利です。アクセシビリティへの関心も高く評価されます。",
  },
];

export default function FreeeCompanyPage() {
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
      <ArticleJsonLd title="freee エンジニア転職ガイド" description="freeeへのエンジニア転職を徹底解説。年収600〜1000万円、クラウド会計SaaSの技術基盤を現場目線でまとめました。" url="/company/freee/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "freee" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">freee エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | クラウド会計SaaSのリーディングカンパニー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "freee株式会社"],
                ["業種", "クラウドSaaS・フィンテック"],
                ["従業員数", "約1,300名"],
                ["平均年収", "600〜1,000万円（エンジニア職）"],
                ["本社所在地", "東京都品川区"],
                ["技術スタック", "Ruby on Rails / React / TypeScript / Go / AWS / Kubernetes"],
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
              <h3 className="font-bold text-blue-800 mb-2">「マジ価値」を追求するプロダクト開発</h3>
              <p className="text-sm text-blue-700">「スモールビジネスを、世界の主役に。」をミッションに、会計・人事労務・会社設立などのバックオフィスSaaSを展開。ユーザーに本質的な価値を届けるプロダクト志向の開発文化です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">アクセシビリティへの強いコミットメント</h3>
              <p className="text-sm text-blue-700">日本のSaaS企業の中でもアクセシビリティへの取り組みがトップクラス。全盲のエンジニアも在籍しており、多様な視点からのプロダクト開発が行われています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">成長中のSaaS市場でのチャレンジ</h3>
              <p className="text-sm text-blue-700">日本のSaaS市場は急成長中で、freeeは会計・人事労務クラウドのリーダーポジション。IPO済みの安定感とスタートアップの成長性を両立した環境です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails / Go いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / TypeScript でのフロントエンド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>SaaSプロダクトの開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / Kubernetes でのインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アクセシビリティやUXへの関心</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>会計・人事労務のドメイン知識（あれば加点）</li>
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
                  ["ジュニアエンジニア", "G1-G2", "500〜650万円"],
                  ["ミドルエンジニア", "G3", "650〜850万円"],
                  ["シニアエンジニア", "G4", "850〜1,100万円"],
                  ["リードエンジニア", "G5", "1,100〜1,300万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,000〜1,300万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">freee転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "SaaS企業の求人に強い。freeeの非公開求人を保有していることも。" },
              { name: "Green", href: "/review/green/", desc: "IT企業の求人に強い。freeeの直接求人も掲載されることが多い。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。SaaSスタートアップへの転職実績が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">freeeへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SmartHR", href: "/company/smarthr/" },
              { name: "マネーフォワード", href: "/company/moneyforward/" },
              { name: "Sansan", href: "/company/sansan/" },
              { name: "LayerX", href: "/company/layerx/" },
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
