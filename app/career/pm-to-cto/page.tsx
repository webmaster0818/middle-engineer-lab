import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "PM→CTO/VPoEへのキャリアパス【年収・必要スキル・転職戦略】",
  description:
    "プロジェクトマネージャーからCTO・VPoEへキャリアアップするためのスキル、経験、年収変化、具体的な転職戦略を解説します。",
};

const faqs = [
  {
    q: "PMからCTOになるにはコーディングスキルは必須？",
    a: "必須ではありませんが、技術的な意思決定を行うためにはコードが読める程度の技術理解は必要です。特にアーキテクチャ設計の知識やシステム全体を俯瞰する力が求められます。",
  },
  {
    q: "CTOとVPoEの違いは？",
    a: "CTOは技術戦略の責任者で、技術選定やアーキテクチャ設計がメイン業務です。VPoEはエンジニア組織のマネジメント責任者で、採用・評価・組織設計が主な役割です。PMの延長線上にはVPoEの方がフィットしやすいです。",
  },
  {
    q: "PMからCTOになるまでの期間は？",
    a: "一般的には5〜10年かかります。スタートアップであれば3〜5年で到達するケースもあります。PMとしての実績に加え、技術的なキャッチアップが必要です。",
  },
  {
    q: "CTO/VPoEの年収相場は？",
    a: "スタートアップのCTOで800〜1,500万円＋SO、上場企業のVPoEで1,200〜2,000万円が相場です。ストックオプションを含めると総報酬はさらに大きくなります。",
  },
  {
    q: "PMからCTO/VPoEへの転職でおすすめのエージェントは？",
    a: "ハイクラス転職に強いビズリーチ、CxOポジションに特化したプロコミットやクライス&カンパニーがおすすめです。ヘッドハンターとの関係構築が重要です。",
  },
  {
    q: "スタートアップと大企業、どちらのCTOを目指すべき？",
    a: "初めてのCTOポジションならスタートアップがおすすめです。少人数のため技術選定から組織づくりまで幅広く経験できます。大企業CTOは政治力や組織運営力がより重要になります。",
  },
];

export default function PmToCtoPage() {
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
        title="PM→CTO/VPoEへのキャリアパス【年収・必要スキル・転職戦略】"
        description="プロジェクトマネージャーからCTO・VPoEへキャリアアップするためのスキル、経験、年収変化、具体的な転職戦略を解説します。"
        url="/career/pm-to-cto/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "PM→CTO/VPoEキャリアパス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PM→CTO/VPoEへのキャリアパス
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 技術マネジメント最上位ポジションを目指す
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            PMとしてプロジェクトを成功に導いてきた経験は、CTO・VPoEへのキャリアアップにおいて大きなアドバンテージです。特にVPoEは「エンジニア組織のPM」とも言える役割で、PM経験が直接活きます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CTO/VPoEポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">主な役割</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "スタートアップCTO", salary: "800〜1,500万円+SO", diff: "★★★", role: "技術選定・アーキテクチャ・採用" },
                  { pos: "上場企業VPoE", salary: "1,200〜2,000万円", diff: "★★★", role: "エンジニア組織設計・評価制度" },
                  { pos: "テックリード/EM", salary: "700〜1,000万円", diff: "★★☆", role: "チーム技術力向上・メンタリング" },
                  { pos: "プロダクトCTO", salary: "900〜1,500万円", diff: "★★★", role: "プロダクト×技術の意思決定" },
                  { pos: "社外CTO（顧問）", salary: "月50〜100万円", diff: "★★★", role: "技術戦略アドバイザリー" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CTO/VPoEに必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "技術戦略策定力", desc: "事業フェーズに合った技術スタックの選定、技術負債の管理、中長期の技術ロードマップ策定ができる力が必要です。" },
              { num: "2", title: "エンジニア組織マネジメント", desc: "採用、評価制度設計、1on1、チームビルディング。エンジニアが最大限パフォーマンスを発揮できる環境を作る力です。" },
              { num: "3", title: "経営層とのコミュニケーション", desc: "技術の言葉をビジネスの言葉に翻訳し、経営判断に必要な情報を提供する力。PM経験が最も活きるスキルです。" },
              { num: "4", title: "アーキテクチャ設計の理解", desc: "マイクロサービス、モノリス、イベント駆動等のアーキテクチャパターンを理解し、意思決定に関われる技術力が必要です。" },
              { num: "5", title: "採用ブランディング", desc: "テックブログ、カンファレンス登壇、OSS活動などを通じて企業の技術ブランドを向上させる力も重要です。" },
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
                <span className="text-slate-600">38歳 PM歴8年 / SIer→メガベンチャーPM</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">850万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">シリーズB スタートアップ VPoE</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">1,100万円 + SO（+250万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "ビズリーチ", point: "CxOポジションのスカウトが届く。ハイクラス求人に特化。" },
              { name: "プロコミット", point: "スタートアップCTO/VPoEの求人に強い。経営者との直接面談を設定してくれる。" },
              { name: "レバテックキャリア", point: "技術マネジメント系のハイクラス求人が充実。年収交渉力が高い。" },
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
          <h2 className="text-xl font-bold mb-3">CTO/VPoEポジションを無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス転職のプロがPM経験を活かせるCxOポジションを提案します。
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
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
              { name: "PMスキルガイド", href: "/skill/pm/" },
              { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
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
