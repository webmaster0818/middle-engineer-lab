import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "企業別エンジニア転職ガイド一覧【2026年版】GAFAM・メガベンチャー30社",
  description:
    "GAFAM・メガベンチャー・製造業大手・SaaS・コンサル・ゲーム業界の30社別エンジニア転職ガイド。年収レンジ・技術スタック・面接対策を企業ごとに徹底解説。",
};

const categories = [
  {
    name: "GAFAM（外資系ビッグテック）",
    companies: [
      { slug: "google", name: "Google Japan", salary: "1,200〜2,000万円", tech: "Go / Python / Kubernetes / GCP" },
      { slug: "amazon", name: "Amazon Japan", salary: "1,000〜1,800万円", tech: "Java / AWS / Python / TypeScript" },
      { slug: "apple", name: "Apple Japan", salary: "1,000〜1,800万円", tech: "Swift / Objective-C / C++ / ML" },
      { slug: "meta", name: "Meta Japan", salary: "1,200〜2,200万円", tech: "React / Hack / Python / C++" },
      { slug: "microsoft", name: "Microsoft Japan", salary: "1,000〜1,800万円", tech: "C# / TypeScript / Azure / Python" },
    ],
  },
  {
    name: "メガベンチャー",
    companies: [
      { slug: "mercari", name: "メルカリ", salary: "700〜1,200万円", tech: "Go / Kubernetes / GCP / Microservices" },
      { slug: "line-yahoo", name: "LINEヤフー", salary: "600〜1,100万円", tech: "Java / Kotlin / Spring / Kubernetes" },
      { slug: "cyberagent", name: "サイバーエージェント", salary: "600〜1,000万円", tech: "Go / React / AWS / MLOps" },
      { slug: "rakuten", name: "楽天グループ", salary: "600〜1,000万円", tech: "Java / Spring / AWS / React" },
      { slug: "dena", name: "DeNA", salary: "600〜1,100万円", tech: "Go / Python / AWS / Unity" },
      { slug: "recruit", name: "リクルート", salary: "650〜1,100万円", tech: "Java / React / GCP / Python" },
      { slug: "zozo", name: "ZOZO", salary: "600〜1,000万円", tech: "Go / Kotlin / AWS / Microservices" },
      { slug: "visional", name: "Visional（ビズリーチ）", salary: "600〜1,000万円", tech: "Scala / TypeScript / AWS / Kubernetes" },
      { slug: "softbank", name: "ソフトバンク", salary: "600〜1,000万円", tech: "Java / Python / AWS / AI/ML" },
    ],
  },
  {
    name: "製造業大手",
    companies: [
      { slug: "toyota", name: "トヨタ自動車", salary: "600〜950万円", tech: "C++ / Python / ROS / AWS" },
      { slug: "sony", name: "ソニーグループ", salary: "650〜1,100万円", tech: "Python / C++ / AWS / AI/ML" },
      { slug: "hitachi", name: "日立製作所", salary: "600〜950万円", tech: "Java / Python / Azure / IoT" },
      { slug: "panasonic", name: "パナソニック", salary: "550〜900万円", tech: "C++ / Python / AWS / Embedded" },
      { slug: "fujitsu", name: "富士通", salary: "550〜900万円", tech: "Java / Python / Azure / Cloud" },
    ],
  },
  {
    name: "SaaS・フィンテック",
    companies: [
      { slug: "freee", name: "freee", salary: "600〜1,000万円", tech: "Ruby / React / GCP / Kubernetes" },
      { slug: "smarthr", name: "SmartHR", salary: "600〜1,000万円", tech: "Ruby / React / AWS / GraphQL" },
      { slug: "moneyforward", name: "マネーフォワード", salary: "600〜950万円", tech: "Ruby / Go / React / AWS" },
      { slug: "sansan", name: "Sansan", salary: "600〜950万円", tech: "Kotlin / TypeScript / AWS / ML" },
      { slug: "plaid", name: "プレイド", salary: "600〜1,000万円", tech: "Go / TypeScript / GCP / BigQuery" },
      { slug: "layerx", name: "LayerX", salary: "600〜1,000万円", tech: "Go / TypeScript / AWS / Blockchain" },
    ],
  },
  {
    name: "コンサル・SIer",
    companies: [
      { slug: "accenture", name: "アクセンチュア", salary: "600〜1,200万円", tech: "Java / SAP / AWS / Azure" },
      { slug: "nri", name: "野村総合研究所（NRI）", salary: "700〜1,200万円", tech: "Java / AWS / Salesforce / SAP" },
      { slug: "ntt-data", name: "NTTデータ", salary: "550〜950万円", tech: "Java / AWS / Azure / Spring" },
    ],
  },
  {
    name: "ゲーム・エンタメ",
    companies: [
      { slug: "nintendo", name: "任天堂", salary: "600〜950万円", tech: "C++ / C# / Unity / 自社エンジン" },
      { slug: "bandai-namco", name: "バンダイナムコ", salary: "550〜900万円", tech: "C++ / C# / Unreal Engine / Unity" },
    ],
  },
];

const allCompanies = categories.flatMap((c) => c.companies);

export default function CompanyIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "企業別エンジニア転職ガイド一覧",
    numberOfItems: allCompanies.length,
    itemListElement: allCompanies.map((company, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://middle-engineer.com/company/${company.slug}/`,
      name: `${company.name} エンジニア転職ガイド`,
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="企業別エンジニア転職ガイド一覧【2026年版】"
        description="GAFAM・メガベンチャー・製造業大手・SaaS・コンサル・ゲーム業界の30社別エンジニア転職ガイド。"
        url="/company/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          企業別エンジニア転職ガイド一覧【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          GAFAM・メガベンチャー・製造業大手など全{allCompanies.length}社のエンジニア転職情報を網羅。年収レンジ・技術スタック・面接対策をチェック。
        </p>

        {categories.map((category) => (
          <section key={category.name} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.companies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/company/${company.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-2 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">年収:</span> {company.salary}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">技術:</span> {company.tech}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">あなたに合った企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料相談して、最適な企業をマッチングしてもらいましょう。
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
