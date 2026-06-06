import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "SE→Web系エンジニアへの転職ロードマップ【2026年版】",
  description:
    "SIer・社内SEからWeb系エンジニアへ転職するためのロードマップを解説。必要スキル、年収変化、おすすめ転職先、成功事例を具体的に紹介します。",
};

const faqs = [
  {
    q: "SIerからWeb系への転職は何歳まで可能？",
    a: "35歳前後が一つの区切りですが、スキル次第では40代でも可能です。特にバックエンド経験が豊富なSEはWeb系でも即戦力として評価されます。ただし30代前半までの方が選択肢は広がります。",
  },
  {
    q: "Web系に転職すると年収は下がる？",
    a: "初年度は50〜100万円程度下がるケースもありますが、スキルアップとともに回復・上昇する傾向があります。特にモダンな技術スタックを身につければ、2〜3年で前職を超える年収も十分可能です。",
  },
  {
    q: "SIer経験はWeb系で評価される？",
    a: "大規模システムの設計経験、要件定義力、プロジェクト管理スキルは高く評価されます。一方、レガシー言語（COBOL、VBなど）のみの経験だと、追加のスキル習得が必要です。",
  },
  {
    q: "Web系転職に必要な最低限のスキルは？",
    a: "Git操作、HTML/CSS/JavaScriptの基礎、サーバーサイド言語（PHP/Ruby/Python/Goのいずれか）、SQL、REST APIの理解が最低限必要です。加えてDockerの基礎知識があると有利です。",
  },
  {
    q: "ポートフォリオは必須？",
    a: "未経験に近い場合は必須です。GitHubで個人プロジェクトを公開し、READMEをしっかり書きましょう。SIer経験者なら業務で培ったスキルを技術ブログで発信するのも効果的です。",
  },
  {
    q: "Web系転職におすすめの転職エージェントは？",
    a: "レバテックキャリア、マイナビITエージェント、Greenが定番です。特にレバテックキャリアはWeb系求人が豊富で、技術に詳しいアドバイザーが在籍しています。複数登録して比較するのがおすすめです。",
  },
];

export default function SeToWebPage() {
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
        title="SE→Web系エンジニアへの転職ロードマップ【2026年版】"
        description="SIer・社内SEからWeb系エンジニアへ転職するためのロードマップを解説。必要スキル、年収変化、おすすめ転職先、成功事例を具体的に紹介します。"
        url="/career/se-to-web/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SE→Web系エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SE→Web系エンジニアへの転職ロードマップ【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | SIerからWeb系への転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerや社内SEからWeb系企業への転職は、エンジニアのキャリアチェンジとして最も人気のあるルートです。モダンな技術スタック、アジャイル開発、自社サービス開発など、SIerでは得にくい経験を積むことができます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、SE→Web系転職を成功させるための具体的なロードマップを、実際の転職成功事例とともに解説します。
          </p>
        </section>

        {/* 現状分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SE→Web系転職の現状分析</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職成功率</span>
                <span className="text-slate-600">SIer経験3年以上で約70%（エージェント経由）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">平均転職期間</span>
                <span className="text-slate-600">2〜4ヶ月（スキル習得期間含まず）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">年齢層</span>
                <span className="text-slate-600">25〜35歳が中心（最多は28〜32歳）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">初年度年収変化</span>
                <span className="text-slate-600">±50万円（スキルとポジションによる）</span>
              </div>
            </div>
          </div>
        </section>

        {/* 転職先テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web系転職先の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "Webバックエンド", salary: "450〜700万円", diff: "★★☆", skill: "PHP/Ruby/Go + SQL + API設計" },
                  { pos: "Webフロントエンド", salary: "400〜650万円", diff: "★★☆", skill: "React/Vue + TypeScript" },
                  { pos: "フルスタック", salary: "500〜800万円", diff: "★★★", skill: "フロント＋バック＋インフラ" },
                  { pos: "SREエンジニア", salary: "550〜850万円", diff: "★★★", skill: "AWS/GCP + Docker + CI/CD" },
                  { pos: "自社サービス開発", salary: "450〜750万円", diff: "★★☆", skill: "モダン言語 + アジャイル経験" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 必要スキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web系転職に必要なスキルロードマップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Git/GitHub（1〜2週間）", desc: "バージョン管理は必須スキル。ブランチ戦略、プルリクエスト、コードレビューの文化に慣れましょう。" },
              { num: "2", title: "モダン言語の習得（1〜3ヶ月）", desc: "Go、Ruby、Python、TypeScriptのいずれかを深く学びましょう。SIer経験者にはGoが特におすすめです。" },
              { num: "3", title: "Webフレームワーク（1〜2ヶ月）", desc: "Next.js、Rails、Django、Ginなど、選んだ言語のメジャーフレームワークを一つマスターしましょう。" },
              { num: "4", title: "Docker/コンテナ（2〜4週間）", desc: "コンテナの概念、Dockerfile作成、docker-composeでの開発環境構築は必須です。" },
              { num: "5", title: "クラウド基礎（1〜2ヶ月）", desc: "AWS/GCPの基本サービス（EC2、S3、RDS、CloudFront等）を理解し、実際にデプロイできるようになりましょう。" },
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
                <span className="text-slate-600">31歳 SIer勤務5年 / Java + Oracle経験</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">520万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">学習期間</span>
                <span className="text-slate-600">3ヶ月（Go + Docker + AWS）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">Web系メガベンチャー バックエンドエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">580万円（+60万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SE→Web系転職におすすめのエージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "Web系求人数No.1。技術に精通したアドバイザーが在籍し、スキルマッチングの精度が高い。" },
              { name: "マイナビITエージェント", point: "大手〜中堅Web企業の求人が豊富。未経験Web系への転職サポートにも強い。" },
              { name: "Green", point: "IT・Web業界特化の転職サイト。カジュアル面談から始められるので、情報収集に最適。" },
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
          <h2 className="text-xl font-bold mb-3">Web系転職のプロに無料で相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントがあなたのSE経験を最大限に活かせるWeb系企業を提案します。
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
              { name: "バックエンド→フルスタック転身", href: "/career/backend-to-fullstack/" },
              { name: "フロントエンドスキルガイド", href: "/skill/frontend/" },
              { name: "React転職ガイド", href: "/skill/react/" },
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
