import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/growth/" },
  title: "技術力を伸ばせる企業の選び方【成長環境の見極めポイント】",
  description:
    "エンジニアとして技術力を伸ばせる企業の選び方を解説。技術投資の指標、エンジニア文化の見極め方、成長環境のチェックリストを紹介します。",
};

const faqs = [
  {
    q: "技術力が伸びる企業の特徴は？",
    a: "テックブログの定期更新、カンファレンス登壇支援、書籍購入費補助、20%ルール（個人開発時間）、社内勉強会の活発さが指標になります。GitHubでOSSを公開している企業も技術力が高い傾向です。",
  },
  {
    q: "大企業とスタートアップ、どちらが技術力は伸びる？",
    a: "一概には言えません。大企業は大規模システムの設計・運用経験、スタートアップは幅広い技術を触れる経験が得られます。「何を伸ばしたいか」で選びましょう。",
  },
  {
    q: "受託開発でも技術力は伸びる？",
    a: "案件次第です。モダンな技術スタックを採用する受託企業もあります。面接で「直近の案件で使っている技術スタック」を確認しましょう。レガシー案件ばかりの企業は避けるべきです。",
  },
  {
    q: "技術力を伸ばすために転職すべき？",
    a: "現職で技術的な挑戦機会がない、新しい技術を導入する裁量がない、周囲のレベルが自分より低い場合は転職を検討すべきです。環境が成長の上限を決めます。",
  },
  {
    q: "面接で技術文化を確認する方法は？",
    a: "「コードレビューの文化はありますか？」「テストカバレッジの基準はありますか？」「技術的負債の解消にどう取り組んでいますか？」と質問しましょう。曖昧な回答の企業は要注意です。",
  },
  {
    q: "技術力が伸びる環境のチェックリストは？",
    a: "モダンな技術スタック、コードレビュー文化、CI/CD整備、テスト文化、勉強会・LT会の開催、書籍購入費補助、カンファレンス参加支援の7項目中5つ以上該当すれば良い環境です。",
  },
];

export default function GrowthPage() {
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
        title="技術力を伸ばせる企業の選び方【成長環境の見極めポイント】"
        description="エンジニアとして技術力を伸ばせる企業の選び方を解説。技術投資の指標、エンジニア文化の見極め方、成長環境のチェックリストを紹介します。"
        url="/purpose/growth/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "技術力を伸ばせる企業の選び方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          技術力を伸ばせる企業の選び方
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | エンジニアの成長環境を見極める方法
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 現職でレガシー技術ばかり触っている</li>
              <li>- 周囲のエンジニアのレベルが低く成長できない</li>
              <li>- モダンな技術スタックで開発したい</li>
              <li>- コードレビュー文化がない環境にいる</li>
              <li>- 技術的な挑戦ができる環境を求めている</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業タイプ別の技術成長度</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">企業タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">技術成長度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "メガベンチャー", salary: "600〜1,000万円", growth: "非常に高い", feat: "大規模+モダン技術" },
                  { type: "成長期SaaS企業", salary: "550〜850万円", growth: "非常に高い", feat: "幅広い技術挑戦" },
                  { type: "テック系スタートアップ", salary: "500〜800万円", growth: "高い", feat: "0→1の経験" },
                  { type: "外資系IT", salary: "800〜1,500万円", growth: "高い", feat: "グローバル基準" },
                  { type: "大手SIer", salary: "500〜750万円", growth: "中程度", feat: "大規模PJ経験" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.growth}</td>
                    <td className="px-4 py-3 text-slate-600">{row.feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術成長環境の見極め方</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "テックブログ・OSS活動を確認", desc: "テックブログを定期的に更新している企業は技術力への投資意欲が高いです。GitHubでOSSを公開しているかも確認しましょう。" },
              { num: "2", title: "技術スタックを確認", desc: "求人情報や面接で使用技術を確認。5年以上更新されていないフレームワークばかりの企業は成長しにくい環境です。" },
              { num: "3", title: "開発プロセスを確認", desc: "コードレビュー、CI/CD、テスト自動化、スプリントレトロスペクティブが整備されているかを確認しましょう。" },
              { num: "4", title: "学習支援制度を確認", desc: "書籍購入費補助、カンファレンス参加費支援、資格取得支援、20%ルール等の制度があるかを確認。" },
              { num: "5", title: "現場エンジニアと話す", desc: "カジュアル面談で現場エンジニアと直接話しましょう。日々の開発フロー、技術的な課題、成長を実感できているかを聞いてください。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "技術力を評価してくれる企業の紹介に強い。開発環境の詳細情報も提供。" },
              { name: "Findy", point: "スキル偏差値でマッチング。技術力が高い企業が多く集まる。" },
              { name: "Green", point: "カジュアル面談で現場エンジニアと直接話せる。企業の技術文化を事前確認。" },
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
          <h2 className="text-xl font-bold mb-3">成長できる環境への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            技術力が伸ばせる企業をIT特化型エージェントが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "自社開発企業への転職ガイド", href: "/purpose/jigyoukaihatsu/" },
              { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
              { name: "SE→Web系エンジニア転職", href: "/career/se-to-web/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
