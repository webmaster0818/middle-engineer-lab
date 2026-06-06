import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "お役立ちガイド一覧 | エンジニア転職ナレッジ",
  description:
    "30代・40代エンジニアの転職に役立つガイド記事の一覧。職務経歴書の書き方、年収交渉、退職手続き、エージェント活用法など、転職活動で必要な知識を網羅しています。",
};

const knowledgePages = [
  {
    category: "30代エンジニア",
    items: [
      { name: "30代未経験からエンジニア転職は可能？", href: "/knowledge/inexperienced-30s/", desc: "成功パターンと注意点を解説" },
      { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/", desc: "言語・職種・経験年数別に分析" },
      { name: "エンジニアの転職回数は多いと不利？", href: "/knowledge/job-hopping/", desc: "3回以上でも大丈夫な理由" },
    ],
  },
  {
    category: "40代エンジニア",
    items: [
      { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/", desc: "データで見る実態と成功戦略" },
      { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/", desc: "年収維持・アップの方法" },
      { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/", desc: "40代はどっちが得？" },
    ],
  },
  {
    category: "エージェント活用",
    items: [
      { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/", desc: "失敗しない5つのポイント" },
      { name: "転職エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/", desc: "3社がベストな理由" },
    ],
  },
  {
    category: "転職準備ノウハウ",
    items: [
      { name: "職務経歴書の書き方", href: "/knowledge/resume/", desc: "テンプレート付き完全ガイド" },
      { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/", desc: "よく聞かれる質問と回答例" },
      { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/", desc: "書類選考突破のコツ" },
      { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/", desc: "100万円UPの実例" },
      { name: "退職の進め方", href: "/knowledge/resignation/", desc: "引き止め対策・引き継ぎガイド" },
      { name: "転職スケジュール", href: "/knowledge/timeline/", desc: "3ヶ月で内定を取る計画表" },
      { name: "転職で年収は上がる？", href: "/knowledge/salary-change/", desc: "年収アップの実態データ" },
    ],
  },
];

export default function KnowledgeIndexPage() {
  return (
    <>
      <ArticleJsonLd
        title="お役立ちガイド一覧 | エンジニア転職ナレッジ"
        description="30代・40代エンジニアの転職に役立つガイド記事の一覧。職務経歴書の書き方、年収交渉、退職手続き、エージェント活用法など、転職活動で必要な知識を網羅しています。"
        url="/knowledge/"
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "お役立ちガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          お役立ちガイド一覧
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | エンジニア転職に必要な知識を網羅
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed">
            30代・40代エンジニアの転職活動に必要な情報を、テーマ別にまとめています。職務経歴書の書き方から年収交渉、退職手続きまで、転職の全工程をカバーしています。
          </p>
        </section>

        {knowledgePages.map((group, gi) => (
          <section key={gi} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{group.category}</h2>
            <div className="grid grid-cols-1 gap-3">
              {group.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center justify-between border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-slate-400 text-sm ml-4 shrink-0">&rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転職活動を始める準備はできましたか？</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、プロのサポートを受けながら転職活動を進めましょう。全て無料です。
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
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
