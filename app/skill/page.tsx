import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "スキル別エンジニア転職ガイド一覧",
  description:
    "プログラミング言語・職種別のエンジニア転職ガイド一覧。Java、Python、Go、フロントエンド、インフラ、データサイエンティストなど、スキルに合った転職戦略を見つけましょう。",
};

const skillPages = [
  {
    category: "プログラミング言語",
    items: [
      { name: "Javaエンジニアの転職ガイド", href: "/skill/java/", desc: "安定した需要と幅広い求人。業務系から大規模システムまで。" },
      { name: "Pythonエンジニアの転職ガイド【AI/データ分析】", href: "/skill/python/", desc: "AI/ML需要急増。データサイエンスへの転向も。" },
      { name: "Go言語エンジニアの転職ガイド【需要急増中】", href: "/skill/go/", desc: "マイクロサービス需要で年収トップクラス。" },
    ],
  },
  {
    category: "職種・ポジション",
    items: [
      { name: "フロントエンドエンジニアの転職ガイド", href: "/skill/frontend/", desc: "React/Next.js需要。UI/UXの知識が差別化のポイント。" },
      { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/", desc: "クラウド・SRE需要拡大。AWS/GCP資格で年収UP。" },
      { name: "PMの転職ガイド", href: "/skill/pm/", desc: "開発経験を持つPMは希少。年収800万円以上も。" },
      { name: "データサイエンティストの転職ガイド", href: "/skill/data-scientist/", desc: "AI/ML領域で最も注目のキャリア。未経験からの道筋も。" },
    ],
  },
];

export default function SkillIndexPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スキル別エンジニア転職ガイド一覧
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | あなたのスキルに合った転職戦略を見つけよう
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed">
            エンジニアの転職は、持っているスキルによって戦略が大きく異なります。言語別・職種別のガイドを参考に、自分に合った転職戦略を見つけましょう。
          </p>
        </section>

        {skillPages.map((group, gi) => (
          <section key={gi} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{group.category}</h2>
            <div className="grid grid-cols-1 gap-4">
              {group.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors"
                >
                  <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたのスキルに合った求人を探そう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、あなたのスキルセットに最適な求人を無料で紹介してもらえます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連コンテンツ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "お役立ちガイド一覧", href: "/knowledge/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
