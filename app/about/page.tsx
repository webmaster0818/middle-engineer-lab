import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/about/" },
  title: "運営者情報・サイトについて",
  description:
    "CareeHUB for Mid Engineerの運営者情報、サイトの使命、編集体制、データソース、更新頻度についてご説明します。",
};

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "運営者情報 - CareeHUB for Mid Engineer",
    url: "https://middle-engineer.com/about/",
    mainEntity: {
      "@type": "Organization",
      name: "CareeHUB for Mid Engineer",
      url: "https://middle-engineer.com",
      description: "30代・40代のITエンジニアを対象とした転職エージェント比較サイトです。",
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
          <div className="bg-petrol-soft border border-[var(--line)] rounded-lg p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              「CareeHUB for Mid Engineer」は、<strong>30代・40代のITエンジニアの転職を支援する</strong>ことを使命としています。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              エンジニアとしてのキャリアを積んできた30代・40代は、転職市場で高く評価される経験を持っています。一方で、年齢による転職の難しさや、これまでの経験を活かせる転職先の有無について不安を抱える方も少なくありません。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              当サイトでは、実際の転職データ・利用者の声・エージェント取材をもとに、ミドルエンジニアの転職に役立つ情報を提供しています。
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
                <span className="text-petrol shrink-0">●</span>
                Webアプリケーション開発、インフラ構築、プロジェクトマネジメントなど多様な実務経験を持つメンバーで構成しています。
              </li>
              <li className="flex items-start gap-2">
                <span className="text-petrol shrink-0">●</span>
                メンバー自身が30代・40代での転職を経験しており、当事者の視点から情報を提供しています。
              </li>
              <li className="flex items-start gap-2">
                <span className="text-petrol shrink-0">●</span>
                転職エージェントへの取材・ヒアリングを定期的に実施し、最新の市場動向を反映しています。
              </li>
            </ul>
          </div>
        </section>

        {/* データソース */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データソース</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              当サイトに掲載している情報は、以下のソースにもとづいています。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公式求人データ</h3>
                <p className="text-xs text-slate-500">各転職エージェントの公式サイトに掲載されている求人数・対応エリア・年収レンジ等のデータです。</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公開口コミ・評判の分析</h3>
                <p className="text-xs text-slate-500">口コミプラットフォームやSNS上で公開されている利用者の声を、出典を明記したうえで傾向を分析しています（出典は各記事内に記載しています）。</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公式発表・プレスリリース</h3>
                <p className="text-xs text-slate-500">各社の公式発表、決算資料、プレスリリース等の一次情報です。</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 text-sm mb-1">公的統計データ</h3>
                <p className="text-xs text-slate-500">厚生労働省「賃金構造基本統計調査」、経済産業省「IT人材需給調査」等の公的データです。</p>
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
                <span className="text-petrol shrink-0">●</span>
                <strong>ランキング・比較記事:</strong> 月次で更新しています（毎月、最新データにもとづき順位・情報を見直しています）。
              </li>
              <li className="flex items-start gap-2">
                <span className="text-petrol shrink-0">●</span>
                <strong>企業別・エリア別ガイド:</strong> 四半期ごとに更新しています。
              </li>
              <li className="flex items-start gap-2">
                <span className="text-petrol shrink-0">●</span>
                <strong>エージェント情報:</strong> 料金・サービス内容に変更があった場合は、随時更新しています。
              </li>
            </ul>
          </div>
        </section>

        {/* 関連ページリンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/editorial/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              記事制作ポリシー →
            </Link>
            <Link href="/terms/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              利用規約 →
            </Link>
            <Link href="/privacy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              プライバシーポリシー →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
