import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ITコンサルタント→エンジニアへの転職ガイド【2026年版】",
  description:
    "ITコンサルタントからエンジニアへ転職するための具体的なスキル習得法、年収変化、転職先候補、成功事例を解説します。",
};

const faqs = [
  {
    q: "ITコンサルからエンジニアになる理由で多いのは？",
    a: "「もっと手を動かしたい」「技術を深掘りしたい」「資料作成やクライアント対応に疲れた」「プロダクトづくりに関わりたい」が上位の理由です。",
  },
  {
    q: "コンサル経験はエンジニア転職で評価される？",
    a: "非常に評価されます。要件定義力、クライアントコミュニケーション、プロジェクト管理、論理的思考力は開発現場でも重要なスキルです。特にPdM（プロダクトマネージャー）やテックリード寄りのポジションで高評価です。",
  },
  {
    q: "年収は下がる？",
    a: "コンサル業界は報酬水準が高いため、純粋なエンジニアポジションでは100〜200万円下がるケースがあります。ただしテックリードやEMポジションならコンサル時代と同等の年収も可能です。",
  },
  {
    q: "プログラミングスキルはどれくらい必要？",
    a: "実務でコードレビューやアーキテクチャ設計を行えるレベルが理想です。最低限、一つの言語で小規模なWebアプリケーションを構築できるスキルが必要です。",
  },
  {
    q: "コンサル→エンジニアの最短ルートは？",
    a: "技術コンサルタントの場合は3〜6ヶ月で転職可能です。戦略系コンサルタントからの場合はプログラミング学習に6ヶ月〜1年かけた後の転職が現実的です。",
  },
  {
    q: "おすすめの転職エージェントは？",
    a: "レバテックキャリア（技術力評価が高い）、ビズリーチ（ハイクラス求人）、リクルートエージェントIT（幅広い求人）の併用がおすすめです。",
  },
];

export default function ConsultantToEngineerPage() {
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
        title="ITコンサルタント→エンジニアへの転職ガイド【2026年版】"
        description="ITコンサルタントからエンジニアへ転職するための具体的なスキル習得法、年収変化、転職先候補、成功事例を解説します。"
        url="/career/consultant-to-engineer/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "ITコンサル→エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITコンサルタント→エンジニアへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | コンサルからエンジニアへキャリアチェンジ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            ITコンサルタントからエンジニアへ転職する人が増えています。「もっと手を動かしたい」「技術を深掘りしたい」という動機が多く、コンサル経験を活かしてテックリードやEMとして活躍するケースが目立ちます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職先ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">コンサル経験の活用度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "テックリード", salary: "700〜1,000万円", diff: "★★★", use: "非常に高い" },
                  { pos: "PdM（プロダクトマネージャー）", salary: "650〜950万円", diff: "★★☆", use: "非常に高い" },
                  { pos: "バックエンドエンジニア", salary: "500〜750万円", diff: "★★★", use: "中程度" },
                  { pos: "SREエンジニア", salary: "600〜850万円", diff: "★★★", use: "中程度" },
                  { pos: "EM（エンジニアリングマネージャー）", salary: "750〜1,100万円", diff: "★★★", use: "非常に高い" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア転身のスキルロードマップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "プログラミング言語の習得（2〜4ヶ月）", desc: "TypeScript or Goがおすすめ。コンサルの論理的思考力があれば、プログラミングの習得は比較的スムーズです。" },
              { num: "2", title: "Webアプリケーション開発（2〜3ヶ月）", desc: "フレームワーク（Next.js/Gin等）を使って、CRUD機能のあるWebアプリケーションを一から構築しましょう。" },
              { num: "3", title: "システム設計の実践（1〜2ヶ月）", desc: "コンサルで培った設計力をコードレベルに落とし込む練習をしましょう。DDD（ドメイン駆動設計）との親和性が高いです。" },
              { num: "4", title: "チーム開発の経験（継続的）", desc: "OSSへのコントリビューションや個人プロジェクトでGitHub上のチーム開発を経験しましょう。" },
              { num: "5", title: "技術発信（継続的）", desc: "技術ブログやカンファレンス登壇で、コンサル×技術の独自視点を発信しましょう。転職時の強力なアピール材料になります。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職成功事例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">30歳 ITコンサルタント4年 / 大手ファーム</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">800万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">学習期間</span>
                <span className="text-slate-600">6ヶ月（TypeScript + React + Go）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">FinTech企業 テックリード</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">780万円（-20万円だが技術深堀り実現）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "技術力を正しく評価。コンサル出身者の転職実績が豊富。" },
              { name: "ビズリーチ", point: "テックリード・EMのハイクラス求人が充実。" },
              { name: "リクルートエージェント（IT）", point: "大手企業からスタートアップまで幅広くカバー。" },
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
          <h2 className="text-xl font-bold mb-3">エンジニア転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            コンサル経験を活かせるエンジニアポジションをプロが提案します。
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
              { name: "エンジニア→ITコンサル転職", href: "/career/engineer-to-consultant/" },
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
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
