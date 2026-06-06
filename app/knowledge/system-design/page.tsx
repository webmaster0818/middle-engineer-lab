import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "システム設計面接の対策【30代・40代向け】| ミドルエンジニア転職ラボ",
  description:
    "システム設計面接（System Design Interview）の対策方法を徹底解説。30代・40代エンジニアが経験を活かして合格するためのフレームワークと頻出テーマを紹介します。",
};

const faqs = [
  {
    q: "システム設計面接はどのような企業で課されますか？",
    a: "主にメガベンチャー（メルカリ、LINE、サイバーエージェント等）や外資系IT企業（Google、Amazon、Meta等）で課されます。シニアエンジニア以上のポジションで出題されることが多く、30代・40代の転職で重要な選考ステップです。",
  },
  {
    q: "コーディングテストとシステム設計面接の違いは？",
    a: "コーディングテストはアルゴリズムの実装力を評価するのに対し、システム設計面接は大規模システムの設計力を評価します。正解は一つではなく、トレードオフを理解し、適切な設計判断ができるかが問われます。",
  },
  {
    q: "準備にどのくらいの時間が必要ですか？",
    a: "2〜4週間が目安です。頻出テーマ（URL短縮サービス、SNSフィード、チャットシステム等）を10個程度、それぞれ30分で説明できるよう練習しましょう。実務経験が豊富な30代・40代は比較的短期間で準備できます。",
  },
  {
    q: "実務経験がないテーマが出たらどうすればいいですか？",
    a: "基本的なフレームワーク（要件定義→概算→設計→詳細設計→ボトルネック対策）に沿って進めれば、初見のテーマでも対応できます。「このパターンは経験がありませんが、○○の知識を応用して考えます」と正直に伝えましょう。",
  },
  {
    q: "図を描くべきですか？",
    a: "必ず描きましょう。ホワイトボードやオンラインツール（Excalidraw等）でアーキテクチャ図を描きながら説明すると、面接官の理解が深まり評価も上がります。コンポーネント間のデータフローを視覚化することが重要です。",
  },
  {
    q: "システム設計面接の対策におすすめのリソースは？",
    a: "「System Design Interview」（Alex Xu著）が定番書です。日本語では「大規模サービス技術入門」もおすすめ。実務経験をベースに、エージェントから企業ごとの出題傾向を聞くのも効果的です。",
  },
];

export default function SystemDesignPage() {
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
        title="システム設計面接の対策【30代・40代向け】| ミドルエンジニア転職ラボ"
        description="システム設計面接（System Design Interview）の対策方法を徹底解説。30代・40代エンジニアが経験を活かして合格するためのフレームワークと頻出テーマを紹介します。"
        url="/knowledge/system-design/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "システム設計面接" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          システム設計面接の対策【30代・40代向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 経験を活かして合格する設計面接対策
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            システム設計面接は、シニアエンジニア以上のポジションで重要な選考ステップです。30代・40代のエンジニアにとって、実務経験を武器にできる面接でもあります。
          </p>
        </section>

        {/* フレームワーク */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">システム設計面接の進め方（45分の場合）</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "要件の明確化（5分）", desc: "機能要件と非機能要件を確認。「1日のアクティブユーザー数は？」「読み取りと書き込みの比率は？」「可用性の要件は？」など質問して曖昧さを解消します。" },
              { num: "2", title: "概算の見積もり（5分）", desc: "トラフィック量、データ量、必要な帯域幅を概算。「1日1億リクエスト → 約1,200 RPS」のように計算して設計の基盤にします。" },
              { num: "3", title: "ハイレベル設計（15分）", desc: "主要コンポーネント（API Gateway、サービス、データベース、キャッシュ、メッセージキュー）を配置したアーキテクチャ図を描きます。" },
              { num: "4", title: "詳細設計（15分）", desc: "面接官が深掘りしたい部分を重点的に設計。データベーススキーマ、API設計、スケーリング戦略などを具体的に説明します。" },
              { num: "5", title: "ボトルネック対策（5分）", desc: "単一障害点の除去、キャッシュ戦略、シャーディング、CDNなどのスケーラビリティ対策を議論します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 頻出テーマ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出テーマと重要ポイント</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">テーマ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要ポイント</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">出題頻度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">URL短縮サービス</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ハッシュ生成、リダイレクト、分析機能</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">非常に高い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">SNSフィード</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Fan-out、タイムライン生成、キャッシュ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">高い</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">チャットシステム</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">WebSocket、メッセージング、既読管理</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">高い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ECサイト</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">在庫管理、決済、検索機能</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">分散キャッシュ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Consistent Hashing、TTL、Eviction</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 評価されるポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で高く評価されるポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. トレードオフを議論できる</h3>
              <p className="text-sm text-blue-700">「SQLとNoSQLのどちらを選ぶか」「一貫性と可用性のどちらを優先するか」など、設計判断の根拠を説明できることが重要です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. スケーラビリティを意識する</h3>
              <p className="text-sm text-blue-700">現在の規模だけでなく、10倍・100倍にスケールした場合のボトルネックと対策を考えましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 実務経験を絡める</h3>
              <p className="text-sm text-blue-700">「前職で同様のシステムを設計した経験から○○が重要」と実体験を交えると説得力が増します。30代・40代の強みです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 質問して曖昧さを解消する</h3>
              <p className="text-sm text-blue-700">要件を勝手に仮定せず、面接官に質問して確認する姿勢が評価されます。実務での要件定義力が問われています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 図を描いて説明する</h3>
              <p className="text-sm text-blue-700">アーキテクチャ図、シーケンス図、データフロー図を描きながら説明すると理解度が格段に上がります。</p>
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
          <h2 className="text-xl font-bold mb-3">企業ごとの面接対策はエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接出題傾向や対策のポイントを事前に教えてもらえます。
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
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
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
