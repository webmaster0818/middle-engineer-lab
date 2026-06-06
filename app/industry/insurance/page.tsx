import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "保険業界からInsurTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ",
  description:
    "保険業界エンジニアからInsurTech領域への転職方法を徹底解説。保険の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "保険業界の経験はInsurTech転職で評価されますか？",
    a: "非常に高く評価されます。保険の引受、査定、保全、損害調査のプロセスを理解するエンジニアはInsurTech企業で極めて希少です。特にアクチュアリー知識やリスク評価の理解は大きなアドバンテージになります。",
  },
  {
    q: "保険業界からInsurTech転職すると年収はどうなりますか？",
    a: "保険系SEの平均年収は450〜600万円程度ですが、InsurTech企業では550〜900万円レンジが一般的です。AIアンダーライティングやリスクモデリングのシニアエンジニアでは800〜1,100万円の求人もあります。",
  },
  {
    q: "InsurTech企業ではどんな技術が求められますか？",
    a: "バックエンド（Java/Python/Go）、データ分析（SQL/Python/R）、API設計が基本です。加えてML（リスク予測・不正検知）、画像認識（損害査定AI）、ブロックチェーン（スマートコントラクト保険）の知識があると差別化できます。",
  },
  {
    q: "保険業界のDXは進んでいますか？",
    a: "急速に進んでいます。ダイレクト保険、オンライン申込、AIチャットボット、テレマティクス保険、ペット保険×IoTなど、デジタル化が加速しています。レガシーシステムのモダナイゼーション需要も膨大です。",
  },
  {
    q: "保険業界から転職しやすいIT職種は何ですか？",
    a: "InsurTechプロダクトエンジニア、保険データサイエンティスト、AIアンダーライター開発エンジニア、保険プラットフォームエンジニアが転職しやすいポジションです。justInCase、Finatext等が採用を強化しています。",
  },
  {
    q: "保険業界からInsurTech転職に強いエージェントは？",
    a: "レバテックキャリア（IT特化型で金融系求人に強い）、ビズリーチ（ハイクラスInsurTech案件）、マイナビIT AGENT（保険・金融系IT求人が豊富）の3社がおすすめです。保険ドメイン×技術力の掛け合わせをアピールしましょう。",
  },
];

export default function InsurancePage() {
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
      <ArticleJsonLd title="保険業界からInsurTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ" description="保険業界エンジニアからInsurTech領域への転職方法を徹底解説。保険の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。" url="/industry/insurance/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "保険業界からInsurTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">保険業界からInsurTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 保険の知識をInsurTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">保険業界はAIアンダーライティング、テレマティクス保険、オンダイレクト保険など、テクノロジーによる革新が進んでいます。保険の商品設計・引受・査定プロセスを理解するエンジニアの需要が高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、保険業界エンジニアがInsurTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保険エンジニアのInsurTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AIによる引受・査定の自動化</h3>
              <p className="text-sm text-blue-700">AIアンダーライティング、画像認識による損害査定、不正請求検知AIなど、保険業務のAI自動化が本格化しています。保険の業務プロセスを理解した上でAIモデルを設計できるエンジニアは極めて希少です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">テレマティクス保険の普及</h3>
              <p className="text-sm text-blue-700">IoTデバイスから取得した運転データ・健康データに基づく個別最適保険（テレマティクス保険・ヘルスケア保険）が拡大中です。リアルタイムデータ分析とリスクモデリングのスキルが求められています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">オンライン保険・エンベデッド保険の成長</h3>
              <p className="text-sm text-blue-700">ECサイトや旅行予約サイトに保険を組み込む「エンベデッド保険」や、完全オンラインで完結するダイレクト保険の需要が拡大しています。API設計・マイクロサービス構築のスキルが活きます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保険経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["InsurTechプロダクトエンジニア", "年収550〜850万円", "保険プラットフォーム・SaaSの開発"],
                  ["AIアンダーライティングエンジニア", "年収650〜1,000万円", "AI引受モデル・リスク評価システム開発"],
                  ["保険データサイエンティスト", "年収600〜950万円", "アクチュアリー分析・不正検知・リスクモデリング"],
                  ["エンベデッド保険エンジニア", "年収550〜800万円", "保険API設計・他サービスとの連携開発"],
                ].map(([title, salary, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">{title}</th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200 whitespace-nowrap">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保険業界からInsurTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "データ分析・ML スキルを習得", desc: "Python、SQL、統計学の基礎を学ぶ。scikit-learn/TensorFlowでの予測モデル構築やリスク分析の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "保険業界の経験を棚卸しする", desc: "保険システム開発、引受・査定プロセス、保全業務のシステム化など携わった案件を整理。処理時間短縮率やコスト削減額など定量的な実績を準備する。" },
              { step: "3", title: "InsurTech業界のトレンドをリサーチ", desc: "テレマティクス保険、エンベデッド保険、パラメトリック保険、P2P保険などのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "レバテックキャリア（金融系IT求人に強い）、ビズリーチ（InsurTechハイクラス案件）に登録して市場価値を確認する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">保険の知識をInsurTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">InsurTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "金融業界からFinTech転職", href: "/industry/finance/" },
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
