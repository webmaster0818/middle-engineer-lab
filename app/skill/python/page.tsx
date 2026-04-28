import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Pythonエンジニアの転職ガイド【AI/データ分析】年収・将来性",
  description:
    "Pythonエンジニアの転職市場をAI/データ分析の観点から徹底解説。平均年収600-900万円、AI/ML需要急増の背景、データサイエンティスト転向、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Pythonエンジニアの平均年収は？",
    a: "30代で600万〜900万円が目安です。AI/機械学習エンジニアは700万〜1,200万円、データサイエンティストは650万〜1,000万円に達します。Web系Pythonエンジニアは500万〜700万円が中心帯です。",
  },
  {
    q: "PythonのAI/ML分野の将来性は？",
    a: "ChatGPT以降のAIブームにより、Python/AI/MLエンジニアの需要は2025年以降さらに加速しています。LLM活用、生成AIアプリ開発、データ基盤構築の需要は今後も拡大が予想されます。",
  },
  {
    q: "Web系PythonからAI/MLに転向できますか？",
    a: "可能です。Django/FastAPIなどのWeb開発経験に加え、NumPy/Pandas/scikit-learnなどのデータ分析ライブラリの学習、統計学の基礎知識があれば転向しやすいです。Kaggleでの実績も評価されます。",
  },
  {
    q: "データサイエンティストとMLエンジニアの違いは？",
    a: "データサイエンティストはデータ分析・可視化・ビジネスインサイト抽出が中心で、MLエンジニアはモデルの開発・最適化・本番環境へのデプロイが中心です。年収はMLエンジニアの方がやや高い傾向です。",
  },
  {
    q: "Pythonエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（AI/ML求人多数）、ビズリーチ（ハイクラスデータサイエンス求人）、リクルートエージェントIT（大手企業のAI人材募集）の3社がおすすめです。",
  },
  {
    q: "40代のPythonエンジニアの転職は厳しい？",
    a: "AI/ML領域は慢性的な人材不足のため、40代でも需要があります。特にMLOps、データ基盤設計、AI戦略策定ができるシニアエンジニアは非常に重宝されます。",
  },
];

export default function PythonSkillPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "Pythonエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Pythonエンジニアの転職ガイド【AI/データ分析】年収・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | AI/ML需要急増時代のPythonエンジニア転職を徹底解説
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "急増（AI/ML需要で前年比40%増）"],
                  ["平均年収（30代・Web系）", "500万〜700万円"],
                  ["平均年収（30代・AI/ML）", "700万〜1,000万円"],
                  ["平均年収（データサイエンティスト）", "650万〜1,000万円"],
                  ["注目の技術トレンド", "LLM / RAG / LangChain / MLOps"],
                  ["強い業界", "IT / 金融 / 製造 / ヘルスケア / コンサル"],
                  ["リモートワーク", "70%以上の求人でリモート可"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            PythonはAI/機械学習ブームの中心言語として、2026年現在も最も需要が高いプログラミング言語の一つです。ChatGPTをはじめとする生成AIの普及により、LLMを活用したアプリケーション開発、RAG（Retrieval-Augmented Generation）システムの構築、MLOps基盤の整備など、Pythonエンジニアの活躍の場はさらに広がっています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI/機械学習エンジニア</h3>
              <p className="text-sm text-blue-700">
                機械学習モデルの開発・学習・最適化を担当。TensorFlow/PyTorch、scikit-learn、LangChainなどを駆使し、実際のプロダクトにAI機能を組み込みます。年収700万〜1,200万円。LLM活用やRAGシステム構築のスキルが特に高く評価されています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データサイエンティスト</h3>
              <p className="text-sm text-blue-700">
                データ分析、統計モデリング、ビジネスインサイト抽出を担当。Pandas/NumPy/Matplotlib/Jupyter Notebookを活用し、経営判断に必要なデータドリブンな分析を行います。年収650万〜1,000万円。ビジネス理解力が重要です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLOps/データ基盤エンジニア</h3>
              <p className="text-sm text-blue-700">
                MLモデルの本番運用、データパイプラインの構築・運用を担当。Kubeflow、MLflow、Airflow、BigQuery、Snowflakeなどを活用し、データ基盤を安定運用します。年収700万〜1,100万円。インフラスキルとPythonの両方が求められます。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別の年収目安</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">経験年数</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安（Web系）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安（AI/ML）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3〜5年", "450万〜600万円", "600万〜800万円"],
                  ["5〜8年", "550万〜700万円", "750万〜1,000万円"],
                  ["8〜12年", "650万〜850万円", "900万〜1,200万円"],
                  ["12年以上", "700万〜950万円", "1,000万〜1,500万円"],
                ].map(([exp, web, ai], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{exp}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{web}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">AI/ML関連のPython求人が豊富。技術に精通したアドバイザーがデータサイエンス領域にも対応。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラスAI人材のスカウト多数。CDO/データ責任者クラスの求人もあり、年収1,000万以上を狙える。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">大手企業のAI人材採用に強い。金融・製造業のデータ分析ポジションが豊富。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
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
          <h2 className="text-xl font-bold mb-3">Pythonエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            AI/ML時代のPythonスキルがどう評価されるか、プロのアドバイザーに相談してみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のスキル別ガイドも見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Javaエンジニア", href: "/skill/java/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
              { name: "インフラエンジニア", href: "/skill/infrastructure/" },
              { name: "PM(プロジェクトマネージャー)", href: "/skill/pm/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
