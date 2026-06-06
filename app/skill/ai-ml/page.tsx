import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "AI・機械学習エンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "AI・機械学習エンジニアの転職市場を2026年最新データで徹底解説。平均年収600-900万円、テック企業・ヘルスケア・金融・自動車に強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "AI・機械学習エンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で600万〜900万円が目安です。MLOpsエンジニアは650万〜950万円、リサーチサイエンティストは800万〜1,200万円、AI部門責任者は1,000万〜1,500万円に達することもあります。",
  },
  {
    q: "AI・機械学習エンジニアの将来性は？",
    a: "生成AI（LLM）の急速な普及により、AI・機械学習エンジニアの需要は過去最高水準です。企業のAI活用が全産業に拡大しており、2026年以降もエンジニア不足が続く見通しです。特にLLMアプリケーション開発やMLOpsの需要が急増しています。",
  },
  {
    q: "AI・機械学習エンジニアの転職で有利なスキルは？",
    a: "Python/PyTorch/TensorFlowの実務経験、LLM活用（RAG、ファインチューニング）、MLOps（MLflow、Kubeflow、SageMaker）、データパイプライン構築経験が高く評価されます。論文読解力や統計学の知識もプラスになります。",
  },
  {
    q: "バックエンドエンジニアからAI・MLへの転向は可能ですか？",
    a: "可能です。Pythonの開発経験があればキャッチアップしやすく、特にMLOpsやデータエンジニアリングの領域ではバックエンドのスキルが直接活きます。Kaggleへの参加やオンラインコース（Coursera、fast.ai）での学習を通じて転向する事例が増えています。",
  },
  {
    q: "AI・機械学習エンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT特化・AI/ML求人多数）、ビズリーチ（ハイクラスAI求人・外資系テック企業）、Geekly（Web系企業のAI活用ポジション）の3社併用がおすすめです。",
  },
  {
    q: "40代のAI・機械学習エンジニアでも転職できますか？",
    a: "十分可能です。特にAIプロジェクトのマネジメント経験やビジネスサイドとの折衝経験がある40代エンジニアは需要が高いです。MLチームのリードや、AI戦略の策定を担うポジションで活躍の場が広がっています。",
  },
];

export default function AiMlSkillPage() {
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
        title="AI・機械学習エンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント"
        description="AI・機械学習エンジニアの転職市場を2026年最新データで徹底解説。平均年収600-900万円、テック企業・ヘルスケア・金融・自動車に強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。"
        url="/skill/ai-ml/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "AI・機械学習エンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AI・機械学習エンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | AI・機械学習転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AI・機械学習エンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "急増（生成AI普及で全産業でAI人材需要が拡大）"],
                  ["平均年収（30代）", "600万〜900万円"],
                  ["平均年収（40代・リーダー）", "800万〜1,500万円"],
                  ["注目の技術トレンド", "LLM / RAG / エージェントAI / MLOps / マルチモーダル"],
                  ["強い業界", "テック企業・ヘルスケア・金融・自動車"],
                  ["リモートワーク", "70〜80%の求人でリモート可"],
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
            生成AI（LLM）の急速な普及により、AI・機械学習エンジニアの需要はかつてないほど高まっています。2026年現在、ChatGPTやClaudeなどのLLMを業務に組み込む企業が急増し、RAG（検索拡張生成）やAIエージェントの開発需要が特に伸びています。テック企業だけでなく、ヘルスケア（画像診断AI）、金融（不正検知・信用スコアリング）、自動車（自動運転・ADAS）など、あらゆる産業でAI人材の採用が活発化しています。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AI・機械学習エンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLエンジニア / MLOps路線</h3>
              <p className="text-sm text-blue-700">
                機械学習モデルの本番運用・自動化基盤を構築するMLエンジニア / MLOpsスペシャリストへの道。年収700万〜1,100万円が目指せます。モデルのデプロイ、監視、再学習パイプラインの構築など、AIをプロダクションで安定稼働させる重要な役割です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リサーチサイエンティスト路線</h3>
              <p className="text-sm text-blue-700">
                最先端のAI研究とプロダクト応用を両立するリサーチサイエンティストへのキャリアパス。年収800万〜1,500万円。論文の読解・執筆力、新しいアルゴリズムの実装力が求められます。大手テック企業やAIスタートアップの研究開発部門で活躍できます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI事業責任者 / CTO路線</h3>
              <p className="text-sm text-blue-700">
                AI技術のビジネス応用を推進するAI事業責任者やCTOへのキャリアパス。年収1,000万〜2,000万円。技術とビジネスの双方を理解し、AI戦略の策定、チームビルディング、プロダクトの方向性を決定する経営幹部ポジションです。
              </p>
            </div>
          </div>
        </section>

        {/* Salary by experience */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別の年収目安</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">経験年数</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">主なポジション</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3〜5年", "500万〜700万円", "MLエンジニア / データサイエンティスト"],
                  ["5〜8年", "650万〜950万円", "シニアMLエンジニア / MLOpsリード"],
                  ["8〜12年", "800万〜1,200万円", "プリンシパルエンジニア / リサーチリード"],
                  ["12年以上", "1,000万〜1,800万円", "AI部門責任者 / CTO"],
                ].map(([exp, salary, position], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{exp}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommended agents */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AI・機械学習エンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT特化でAI/ML専門求人が豊富。LLM活用案件やMLOpsポジションの紹介実績が多数。技術トレンドに精通したアドバイザーが在籍。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">年収800万以上のハイクラスAI求人。外資系テック企業やAIスタートアップのスカウトが充実。リサーチサイエンティスト求人も豊富。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">Web系企業のAI活用ポジションに強い。SaaS企業やメガベンチャーのMLエンジニア求人が充実。企業の技術文化や開発環境の情報提供が手厚い。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
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
          <h2 className="text-xl font-bold mb-3">AI・機械学習エンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのAI・機械学習スキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
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
              { name: "Pythonエンジニア", href: "/skill/python/" },
              { name: "データサイエンティスト", href: "/skill/data-scientist/" },
              { name: "AWSエンジニア", href: "/skill/aws/" },
              { name: "セキュリティエンジニア", href: "/skill/security/" },
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
