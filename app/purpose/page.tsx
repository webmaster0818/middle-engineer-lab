import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "目的別エンジニア転職ガイド一覧【2026年版】12の転職目的に対応",
  description:
    "年収UP・ワークライフバランス・リモートワーク・大企業・英語力活用など、12の転職目的別にエンジニア向けの転職戦略とおすすめエージェントを紹介。",
};

const purposes = [
  { slug: "salary-up", title: "年収UPしたい", desc: "年収100万円以上アップを実現するための転職戦略。スキル別の年収プレミアムや交渉術を解説。" },
  { slug: "wlb", title: "ワークライフバランス重視", desc: "残業少なめ・有給消化率が高い企業への転職。フレックス・リモート制度が充実した企業の見つけ方。" },
  { slug: "remote-full", title: "フルリモートで働きたい", desc: "完全在宅勤務可能な企業・ポジションの探し方。フルリモート求人が多いエージェントも紹介。" },
  { slug: "daikigyo", title: "大企業に転職したい", desc: "メガベンチャー・大手SIer・製造業大手へのエンジニア転職ガイド。安定性と年収を両立。" },
  { slug: "stable", title: "安定した環境で働きたい", desc: "離職率が低く福利厚生が充実した企業への転職。長く安心して働ける職場の見極め方。" },
  { slug: "growth", title: "スキルアップ・成長したい", desc: "最新技術に触れられる環境への転職。技術投資が盛んな企業の選び方と学習支援制度。" },
  { slug: "english", title: "英語力を活かしたい", desc: "外資系IT・グローバル企業への転職戦略。英語力を年収に変えるためのキャリアプラン。" },
  { slug: "management-no", title: "マネジメントを避けたい", desc: "IC（Individual Contributor）として技術を極めるキャリアパス。スペシャリスト採用の求人を紹介。" },
  { slug: "no-overtime", title: "残業なしで働きたい", desc: "定時退社が文化として根付いた企業の見つけ方。残業月10時間以下の企業の特徴を解説。" },
  { slug: "second-new-grad", title: "第二新卒でIT転職", desc: "社会人経験1〜3年の第二新卒がIT業界に転職するためのガイド。未経験歓迎の求人も紹介。" },
  { slug: "uturnable", title: "Uターン・Iターン転職", desc: "地方へのUターン・Iターンを考えるエンジニア向け。地方IT企業の実態と年収事情を解説。" },
  { slug: "jigyoukaihatsu", title: "事業開発に携わりたい", desc: "エンジニアから事業開発・プロダクトオーナーへの転身。技術力を武器にビジネスサイドへ。" },
];

export default function PurposeIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "目的別エンジニア転職ガイド一覧",
    numberOfItems: purposes.length,
    itemListElement: purposes.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://middle-engineer.com/purpose/${p.slug}/`,
      name: p.title,
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="目的別エンジニア転職ガイド一覧【2026年版】"
        description="年収UP・ワークライフバランス・リモートワークなど、12の転職目的別にエンジニア向けの転職戦略を紹介。"
        url="/purpose/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          目的別エンジニア転職ガイド一覧【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          あなたの転職目的に合わせたガイドを全{purposes.length}パターン用意しました。目的を明確にして、最適な転職戦略を立てましょう。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {purposes.map((purpose) => (
            <Link
              key={purpose.slug}
              href={`/purpose/${purpose.slug}/`}
              className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
            >
              <h2 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {purpose.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">{purpose.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">転職の目的が決まったら</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、あなたの目的に合った求人を紹介してもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
