import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エリア別IT転職ガイド一覧【2026年版】全国14エリアの求人・年収情報",
  description:
    "東京・大阪・名古屋・福岡など全国14エリアのIT転職事情を徹底解説。エリア別の求人数目安・平均年収・おすすめエージェントをまとめました。",
};

const categories = [
  {
    name: "首都圏",
    areas: [
      { slug: "tokyo", name: "東京", jobs: "約85,000件", salary: "550〜800万円" },
      { slug: "yokohama", name: "横浜・神奈川", jobs: "約12,000件", salary: "500〜750万円" },
      { slug: "saitama", name: "さいたま・埼玉", jobs: "約5,000件", salary: "450〜700万円" },
      { slug: "chiba", name: "千葉", jobs: "約4,000件", salary: "450〜700万円" },
    ],
  },
  {
    name: "関西",
    areas: [
      { slug: "osaka", name: "大阪", jobs: "約18,000件", salary: "500〜750万円" },
      { slug: "kyoto", name: "京都", jobs: "約3,500件", salary: "480〜720万円" },
      { slug: "kobe", name: "神戸・兵庫", jobs: "約3,000件", salary: "470〜700万円" },
    ],
  },
  {
    name: "その他主要都市",
    areas: [
      { slug: "nagoya", name: "名古屋・愛知", jobs: "約10,000件", salary: "480〜730万円" },
      { slug: "fukuoka", name: "福岡", jobs: "約5,500件", salary: "450〜700万円" },
      { slug: "sapporo", name: "札幌・北海道", jobs: "約3,000件", salary: "420〜650万円" },
      { slug: "sendai", name: "仙台・宮城", jobs: "約2,500件", salary: "420〜650万円" },
      { slug: "hiroshima", name: "広島", jobs: "約2,000件", salary: "430〜660万円" },
    ],
  },
  {
    name: "リモート・移住",
    areas: [
      { slug: "remote", name: "フルリモート", jobs: "約20,000件", salary: "500〜800万円" },
      { slug: "iiju", name: "地方移住×IT転職", jobs: "約5,000件", salary: "400〜650万円" },
    ],
  },
];

const allAreas = categories.flatMap((c) => c.areas);

export default function AreaIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "エリア別IT転職ガイド一覧",
    numberOfItems: allAreas.length,
    itemListElement: allAreas.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://middle-engineer.com/area/${area.slug}/`,
      name: `${area.name}のIT転職ガイド`,
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="エリア別IT転職ガイド一覧【2026年版】"
        description="東京・大阪・名古屋・福岡など全国14エリアのIT転職事情を徹底解説。"
        url="/area/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エリア別IT転職ガイド一覧【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          全国{allAreas.length}エリアのIT転職事情を網羅。あなたの希望エリアの求人数・年収・おすすめエージェントをチェック。
        </p>

        {categories.map((category) => (
          <section key={category.name} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">IT求人数:</span> {area.jobs}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">平均年収:</span> {area.salary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">希望エリアの求人を探す</h2>
          <p className="text-blue-100 text-sm mb-4">
            エリアに強いIT転職エージェントに相談して、あなたの希望勤務地の求人を紹介してもらいましょう。
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
