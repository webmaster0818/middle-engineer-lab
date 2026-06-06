import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "キャリアパス別エンジニア転職ガイド一覧【2026年版】15の転職ルート",
  description:
    "エンジニアのキャリアチェンジ・キャリアアップ・職種特化の15パターンを徹底解説。難易度、年収変化、必要スキルをキャリアパス別にまとめました。",
};

const categories = [
  {
    name: "キャリアチェンジ",
    paths: [
      { slug: "se-to-web", from: "SE（SIer）", to: "Web系エンジニア", difficulty: "中", salaryChange: "+50〜150万円" },
      { slug: "consultant-to-engineer", from: "ITコンサルタント", to: "エンジニア", difficulty: "中", salaryChange: "-50〜+50万円" },
      { slug: "tester-to-developer", from: "テスター/QA", to: "開発エンジニア", difficulty: "中〜高", salaryChange: "+50〜200万円" },
      { slug: "support-to-infra", from: "ヘルプデスク/運用", to: "インフラエンジニア", difficulty: "中", salaryChange: "+50〜150万円" },
      { slug: "engineer-to-consultant", from: "エンジニア", to: "ITコンサルタント", difficulty: "中", salaryChange: "+100〜300万円" },
      { slug: "domestic-to-foreign", from: "日系企業", to: "外資系IT企業", difficulty: "高", salaryChange: "+200〜500万円" },
    ],
  },
  {
    name: "キャリアアップ",
    paths: [
      { slug: "pm-to-cto", from: "PM", to: "CTO/VPoE", difficulty: "高", salaryChange: "+200〜500万円" },
      { slug: "tech-lead", from: "シニアエンジニア", to: "テックリード", difficulty: "中", salaryChange: "+100〜200万円" },
      { slug: "corporate-to-startup", from: "大企業エンジニア", to: "スタートアップCTO", difficulty: "高", salaryChange: "±0〜+SO" },
      { slug: "startup-to-corporate", from: "スタートアップ", to: "大企業エンジニア", difficulty: "低〜中", salaryChange: "+50〜200万円" },
      { slug: "freelance-to-permanent", from: "フリーランス", to: "正社員", difficulty: "低", salaryChange: "-100〜+50万円" },
    ],
  },
  {
    name: "職種特化",
    paths: [
      { slug: "backend-to-fullstack", from: "バックエンド", to: "フルスタック", difficulty: "中", salaryChange: "+50〜150万円" },
      { slug: "sre", from: "インフラ/開発", to: "SRE", difficulty: "中〜高", salaryChange: "+100〜250万円" },
      { slug: "devsecops", from: "開発/インフラ", to: "DevSecOps", difficulty: "中〜高", salaryChange: "+100〜200万円" },
      { slug: "cre", from: "CS/開発", to: "CRE（顧客信頼性）", difficulty: "中", salaryChange: "+50〜150万円" },
    ],
  },
];

const allPaths = categories.flatMap((c) => c.paths);

export default function CareerIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "キャリアパス別エンジニア転職ガイド一覧",
    numberOfItems: allPaths.length,
    itemListElement: allPaths.map((path, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://middle-engineer.com/career/${path.slug}/`,
      name: `${path.from}→${path.to}キャリアパス`,
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="キャリアパス別エンジニア転職ガイド一覧【2026年版】"
        description="エンジニアのキャリアチェンジ・キャリアアップ・職種特化の15パターンを徹底解説。"
        url="/career/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          キャリアパス別エンジニア転職ガイド一覧【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          エンジニアの15の転職ルートを網羅。現在の職種から理想のキャリアへのロードマップを確認しましょう。
        </p>

        {categories.map((category) => (
          <section key={category.name} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.paths.map((path) => (
                <Link
                  key={path.slug}
                  href={`/career/${path.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {path.from} → {path.to}
                  </h3>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      難易度: {path.difficulty}
                    </span>
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
                      年収 {path.salaryChange}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">キャリアチェンジを相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントがあなたの経歴に合ったキャリアパスを提案してくれます。
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
