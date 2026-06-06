import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報・サイトについて",
  description:
    "ミドルエンジニア転職ラボの運営者情報、サイトの使命、編集チーム紹介、データソース、更新頻度について説明しています。",
};

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "運営者情報 - ミドルエンジニア転職ラボ",
    url: "https://middle-engineer.com/about/",
    mainEntity: {
      "@type": "Organization",
      name: "ミドルエンジニア転職ラボ",
      url: "https://middle-engineer.com",
      description: "30代・40代のITエンジニアに特化した転職エージェント比較サイト",
      foundingDate: "2024",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "運営者情報" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
          運営者情報・サイトについて
        </h1>

        {/* サイトミッション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サイトの使命</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              「ミドルエンジニア転職ラボ」は、<strong>30代・40代のITエンジニアの転職を支援する</strong>ことを使命としています。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              エンジニアとしてのキャリアを積んできた30代・40代は、転職市場で非常に高い価値を持っています。しかし「年齢的に転職は難しいのでは？」「今の経験を活かせる転職先はあるのか？」という不安を抱える方も多いのが現状です。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              当サイトでは、実際の転職データ・利用者の声・エージェント取材をもとに、ミドルエンジニアが最適な転職を実現するための情報を提供しています。
            </p>
          </div>
        </section>

        {/* 編集チーム */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">編集チーム</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              当サイトの記事は、<strong>IT業界経験10年以上のエンジニア集団</strong>が執筆・監修しています。
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                Webアプリケーション開発、インフラ構築、プロジェクトマネジメントなど多様な実務経験を持つメンバーで構成
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                メンバー自身が30代・40代での転職を経験しており、当事者目線での情報提供が可能
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                転職エージェントへの取材・ヒアリングを定期的に実施し、最新の市場動向を反映
              </li>
            </ul>
          </div>
        </section>

        {/* データソース */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データソース</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              当サイトで掲載している情報は、以下のソースに基づいています。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公式求人データ</h3>
                <p className="text-xs text-slate-500">各転職エージェントの公式サイトに掲載されている求人数・対応エリア・年収レンジ等のデータ</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">利用者アンケート</h3>
                <p className="text-xs text-slate-500">実際にエージェントを利用した30代・40代エンジニアへのアンケート調査（年2回実施）</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">エージェント取材</h3>
                <p className="text-xs text-slate-500">主要転職エージェントの担当者への取材・ヒアリング（随時実施）</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公的統計データ</h3>
                <p className="text-xs text-slate-500">厚生労働省「賃金構造基本統計調査」、経済産業省「IT人材需給調査」等の公的データ</p>
              </div>
            </div>
          </div>
        </section>

        {/* 更新頻度 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">更新頻度</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                <strong>ランキング・比較記事:</strong> 月次更新（毎月最新データに基づき順位・情報を見直し）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                <strong>企業別・エリア別ガイド:</strong> 四半期ごとに更新
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">●</span>
                <strong>エージェント情報:</strong> 料金・サービス変更があった場合は随時更新
              </li>
            </ul>
          </div>
        </section>

        {/* 関連ページリンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/editorial/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              記事制作ポリシー →
            </Link>
            <Link href="/terms/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              利用規約 →
            </Link>
            <Link href="/privacy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              プライバシーポリシー →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
