import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "テスター→開発エンジニアへの転職ガイド【2026年版】",
  description:
    "QAテスター・テストエンジニアから開発エンジニアへ転職するための具体的なステップ、必要スキル、年収変化、成功事例を解説します。",
};

const faqs = [
  {
    q: "テスターから開発エンジニアへの転職は難しい？",
    a: "決して不可能ではありません。テスト経験で培った品質意識やバグの原因追求力は開発でも重宝されます。ただし、プログラミングスキルの習得は必須で、独学またはスクールで3〜6ヶ月の学習が必要です。",
  },
  {
    q: "テスター経験は開発職で評価される？",
    a: "はい、テスト設計力、品質保証の知識、バグの再現手順を明確にする能力は開発現場で高く評価されます。特にTDD（テスト駆動開発）を採用するチームでは、テスト経験者の視点が重宝されます。",
  },
  {
    q: "テスト自動化の経験があれば有利？",
    a: "非常に有利です。Selenium、Cypress、Playwrightなどのテスト自動化ツールの経験は、プログラミングスキルの証明になります。自動テストからSETI（Software Engineer in Test）への転身も選択肢です。",
  },
  {
    q: "開発言語は何から学ぶべき？",
    a: "Pythonが最も入りやすいです。テスト自動化でも使えますし、Web開発（Django/Flask）にも展開できます。Web系を目指すならTypeScript+Reactも有力な選択肢です。",
  },
  {
    q: "年齢制限はある？",
    a: "30代前半までが最も転職しやすい年齢帯ですが、テスト自動化やCI/CDの経験があれば35歳以降でも可能性はあります。SETI（テスト開発エンジニア）というポジションなら年齢のハードルは低めです。",
  },
  {
    q: "転職活動はどう進めるべき？",
    a: "まずGitHubにポートフォリオを公開し、テスト経験を活かした開発プロジェクトを見せましょう。IT特化型エージェントに相談すると、テスト経験を評価してくれる企業を紹介してもらえます。",
  },
];

export default function TesterToDeveloperPage() {
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
        title="テスター→開発エンジニアへの転職ガイド【2026年版】"
        description="QAテスター・テストエンジニアから開発エンジニアへ転職するための具体的なステップ、必要スキル、年収変化、成功事例を解説します。"
        url="/career/tester-to-developer/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "テスター→開発エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テスター→開発エンジニアへの転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | QAから開発へキャリアチェンジする方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            テストエンジニア・QAエンジニアから開発エンジニアへの転職は、テスト経験で培った品質意識を武器にできるキャリアチェンジです。近年はSETI（Software Engineer in Test）という新しいポジションも生まれ、選択肢が広がっています。
          </p>
        </section>

        {/* 現状分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テスター→開発の転職市場</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職難易度</span>
                <span className="text-slate-600">中〜高（プログラミング経験の有無で大きく変わる）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">年収変化</span>
                <span className="text-slate-600">横ばい〜+100万円（スキル次第）</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] gap-2">
                <span className="font-medium text-slate-700">有利な経験</span>
                <span className="text-slate-600">テスト自動化、CI/CD、API テスト</span>
              </div>
            </div>
          </div>
        </section>

        {/* 転職先テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テスターからの転職先比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">テスト経験の活用度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "SETI（テスト開発）", salary: "450〜700万円", diff: "★★☆", use: "非常に高い" },
                  { pos: "バックエンド開発", salary: "400〜650万円", diff: "★★★", use: "中程度" },
                  { pos: "フロントエンド開発", salary: "400〜600万円", diff: "★★★", use: "中程度" },
                  { pos: "DevOpsエンジニア", salary: "500〜750万円", diff: "★★☆", use: "高い" },
                  { pos: "QAマネージャー", salary: "550〜800万円", diff: "★★☆", use: "非常に高い" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 必要スキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発転身に必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "プログラミング基礎（2〜3ヶ月）", desc: "Python or TypeScriptから始めましょう。変数、関数、クラス、非同期処理の概念をしっかり理解することが重要です。" },
              { num: "2", title: "Webフレームワーク（1〜2ヶ月）", desc: "Django/Flask（Python）またはNext.js（TypeScript）でCRUDアプリを作れるレベルを目指しましょう。" },
              { num: "3", title: "データベース（2〜4週間）", desc: "SQLの基本操作、テーブル設計、ORMの使い方を学びましょう。テスト経験があればデータの整合性の重要性は理解しているはずです。" },
              { num: "4", title: "Git/チーム開発（2〜4週間）", desc: "ブランチ戦略、プルリクエスト、コードレビューの文化を学びましょう。OSSへの貢献も実績になります。" },
              { num: "5", title: "ポートフォリオ作成（1〜2ヶ月）", desc: "テスト経験を活かし、テストコードが充実したアプリケーションを作りましょう。TDDで開発したプロジェクトは高評価です。" },
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
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">28歳 QAエンジニア3年 / Selenium + API テスト経験</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">380万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">学習期間</span>
                <span className="text-slate-600">4ヶ月（Python + Django + AWS）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">SaaS企業 SETIエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">500万円（+120万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "SETI・QAエンジニア向け求人が豊富。キャリアチェンジのサポートにも強い。" },
              { name: "マイナビITエージェント", point: "未経験開発職への転職サポートが手厚い。ポートフォリオの添削もしてくれる。" },
              { name: "Wantedly", point: "カジュアル面談で企業文化を確認できる。テスター→開発のキャリアチェンジ実績がある企業を探しやすい。" },
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
          <h2 className="text-xl font-bold mb-3">開発エンジニアへの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            テスト経験を活かせる開発ポジションをIT特化型エージェントが提案します。
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
              { name: "Pythonスキルガイド", href: "/skill/python/" },
              { name: "技術力を伸ばせる企業の選び方", href: "/purpose/growth/" },
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
