import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "データサイエンティストの転職ガイド【未経験からの道筋】",
  description:
    "データサイエンティストの転職市場を徹底解説。年収相場、未経験からの転職ルート、必要スキル、おすすめ転職エージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "データサイエンティストの平均年収は？",
    a: "30代で600万〜1,000万円、40代で800万〜1,200万円が相場です。外資系IT企業やAIスタートアップではさらに高い水準が期待できます。AI/ML領域の需要拡大により、年収は上昇傾向にあります。",
  },
  {
    q: "未経験からデータサイエンティストになれる？",
    a: "可能ですが、一定の学習期間が必要です。統計学、Python、SQL、機械学習の基礎を6ヶ月〜1年かけて習得し、Kaggleでの実績やポートフォリオを作ることが転職成功の鍵です。",
  },
  {
    q: "エンジニアからデータサイエンティストへの転向は有利？",
    a: "非常に有利です。プログラミングスキルとシステム開発の経験があるため、学習コストが低く、MLOps（モデルの本番運用）もカバーできる希少な人材として評価されます。",
  },
  {
    q: "データサイエンティストとMLエンジニアの違いは？",
    a: "データサイエンティストはデータ分析・可視化・ビジネスインサイト抽出が中心。MLエンジニアはモデルの設計・開発・本番デプロイが中心です。MLエンジニアの方がエンジニアリングスキルが求められ、年収もやや高い傾向です。",
  },
  {
    q: "どの資格を取るべき？",
    a: "統計検定2級以上、G検定（JDLA）、AWS Machine Learning Specialtyがおすすめです。ただし資格よりもKaggleの実績やポートフォリオの方が転職時の評価は高いです。",
  },
  {
    q: "データサイエンティストの転職に強いエージェントは？",
    a: "レバテックキャリア（AI/ML求人多数）、ビズリーチ（ハイクラスDS求人）、リクルートエージェントIT（大手企業のAI人材募集）がおすすめです。データサイエンス領域に特化した求人を持つエージェントを選びましょう。",
  },
];

export default function DataScientistPage() {
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
        title="データサイエンティストの転職ガイド【未経験からの道筋】"
        description="データサイエンティストの転職市場を徹底解説。年収相場、未経験からの転職ルート、必要スキル、おすすめ転職エージェントを30代・40代向けに紹介します。"
        url="/skill/data-scientist/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "データサイエンティスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データサイエンティストの転職ガイド【未経験からの道筋】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | データサイエンティストの転職市場と未経験からの道筋
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            AI・機械学習の需要拡大に伴い、データサイエンティストは最も注目されるキャリアの一つです。高い年収と将来性が魅力ですが、転職成功には戦略的な準備が必要です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、データサイエンティストの年収、求められるスキル、未経験からの転職ルートを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データサイエンティストの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">600〜1,000万</p>
                <p className="text-sm text-slate-600 mt-1">30代データサイエンティストの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+60%</p>
                <p className="text-sm text-slate-600 mt-1">データサイエンス求人の2年間増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4.5倍</p>
                <p className="text-sm text-slate-600 mt-1">データサイエンス職の求人倍率</p>
              </div>
            </div>
          </div>
        </section>

        {/* 必要スキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データサイエンティストに必要なスキル</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">カテゴリ</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">必須スキル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">あると有利</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "プログラミング", must: "Python, SQL", plus: "R, Scala, Julia" },
                  { cat: "統計・数学", must: "統計検定2級レベル", plus: "ベイズ統計、因果推論" },
                  { cat: "機械学習", must: "scikit-learn, 基本的なアルゴリズム", plus: "深層学習（PyTorch/TensorFlow）" },
                  { cat: "データ基盤", must: "BigQuery or Redshift", plus: "Spark, Airflow, dbt" },
                  { cat: "可視化", must: "Matplotlib, Tableau", plus: "Looker, Streamlit" },
                  { cat: "ビジネス", must: "課題定義力、プレゼン力", plus: "ドメイン知識（金融、EC等）" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.cat}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.must}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 未経験からのロードマップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験からデータサイエンティストになるロードマップ</h2>
          <div className="space-y-4">
            {[
              { period: "1〜3ヶ月目", title: "基礎学習", desc: "Python基礎、SQL基礎、統計学の基本（記述統計・推測統計）を学習。Udemyやコーセラの講座がおすすめです。" },
              { period: "4〜6ヶ月目", title: "機械学習入門", desc: "scikit-learnで基本的な機械学習アルゴリズム（回帰、分類、クラスタリング）を実践。Kaggleの入門コンペに参加しましょう。" },
              { period: "7〜9ヶ月目", title: "実践プロジェクト", desc: "実際のデータセットで分析プロジェクトを実施。結果をGitHubとブログで公開し、ポートフォリオを構築します。" },
              { period: "10〜12ヶ月目", title: "転職活動", desc: "データサイエンティスト求人に応募。未経験の場合はデータアナリストからスタートし、段階的にキャリアアップするのが現実的です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* エンジニアからの転向 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアからデータサイエンティストへの転向が有利な理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プログラミング力がアドバンテージ</h3>
              <p className="text-sm text-blue-700">
                非エンジニア出身のデータサイエンティストはプログラミングが弱点になりがちです。エンジニア出身なら、効率的なデータ処理、再現性のある分析パイプライン構築、本番環境への実装まで一貫して行えます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLOpsの需要が高い</h3>
              <p className="text-sm text-blue-700">
                機械学習モデルの本番運用（MLOps）は、ソフトウェアエンジニアリングの知識が不可欠です。モデル開発だけでなく、デプロイ・監視・再学習のパイプラインを構築できるMLエンジニアは年収1,000万円以上が狙えます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">データサイエンスの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            AI/ML領域に強いIT特化型エージェントに登録して、データサイエンティストのキャリアを無料で相談しましょう。
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
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "Go言語エンジニアの転職ガイド", href: "/skill/go/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
