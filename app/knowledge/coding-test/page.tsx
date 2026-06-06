import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "コーディングテスト対策ガイド【頻出問題と準備法】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職のコーディングテスト対策を徹底解説。頻出のアルゴリズム問題、準備期間の目安、おすすめ学習リソースを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "コーディングテストの準備にどのくらいの時間が必要ですか？",
    a: "経験やスキルレベルにもよりますが、2〜4週間が目安です。毎日1〜2問をLeetCodeやAtCoderで練習しましょう。ブランクがある場合は1〜2ヶ月の準備期間を確保することをおすすめします。",
  },
  {
    q: "どの言語で解くのが有利ですか？",
    a: "使い慣れた言語が最も有利です。ただし、Python は記述量が少なく、標準ライブラリが充実しているため人気があります。Java、Go、TypeScriptも問題なく使えます。企業が言語を指定する場合もあるので事前に確認しましょう。",
  },
  {
    q: "30代・40代でもコーディングテストは避けられませんか？",
    a: "メガベンチャーや外資系IT企業では年齢に関係なくコーディングテストが課されます。ただし日系企業の多くは経験者採用でコーディングテストを省略する場合もあります。エージェントに選考フローを確認しましょう。",
  },
  {
    q: "実務経験が長いのにアルゴリズム問題が苦手です",
    a: "実務とコーディングテストは別のスキルです。日常業務でアルゴリズムを意識する機会が少ないのは当然です。基本的なデータ構造（配列、ハッシュ、木、グラフ）と探索・ソートを復習すれば、多くの問題に対応できます。",
  },
  {
    q: "オンラインのコーディングテストと面接でのライブコーディングの違いは？",
    a: "オンラインテストは制限時間内に自力で解く形式で、正確さと効率が重視されます。ライブコーディングは面接官の前で思考プロセスを説明しながら解く形式で、コミュニケーション力も評価されます。",
  },
  {
    q: "コーディングテストが苦手な場合の転職戦略は？",
    a: "コーディングテストを課さない企業も多くあります。IT特化型の転職エージェントに「コーディングテストなしの企業」と条件を伝えると、選考フローに含まない求人を優先的に紹介してもらえます。",
  },
];

export default function CodingTestPage() {
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
        title="コーディングテスト対策ガイド【頻出問題と準備法】| ミドルエンジニア転職ラボ"
        description="エンジニア転職のコーディングテスト対策を徹底解説。頻出のアルゴリズム問題、準備期間の目安、おすすめ学習リソースを30代・40代エンジニア向けに紹介します。"
        url="/knowledge/coding-test/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "コーディングテスト対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          コーディングテスト対策ガイド【頻出問題と準備法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 頻出パターンと効率的な対策法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニア転職においてコーディングテストは避けて通れない関門です。特にメガベンチャーや外資系IT企業では、ほぼ確実にコーディングテストが課されます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが効率的にコーディングテストを対策するための方法と頻出パターンを解説します。
          </p>
        </section>

        {/* 頻出パターン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出のアルゴリズムパターン</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">パターン</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">出題頻度</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">代表的な問題</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">難易度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">配列・文字列操作</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">非常に高い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Two Sum、回文判定</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Easy〜Medium</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ハッシュマップ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">非常に高い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">頻度カウント、重複検出</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Easy〜Medium</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">二分探索</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">高い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ソート済み配列の探索</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Medium</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">BFS / DFS</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">高い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">木の走査、グラフ探索</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Medium〜Hard</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">動的計画法（DP）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">最長部分列、ナップサック</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Medium〜Hard</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スタック・キュー</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">括弧の整合性、最大スタック</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Easy〜Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 対策ステップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">効率的な対策ステップ（4週間プラン）</h2>
          <div className="space-y-4">
            {[
              { num: "Week1", title: "基礎固め", desc: "配列、文字列、ハッシュマップの基本問題を毎日2問。LeetCode Easy問題を中心に。計算量（Big O記法）の復習も行う。" },
              { num: "Week2", title: "中級パターン", desc: "二分探索、スタック・キュー、リンクリストのMedium問題に挑戦。解法パターンを整理してノートに記録。" },
              { num: "Week3", title: "グラフ・木・DP", desc: "BFS/DFS、動的計画法のMedium問題を練習。解けなくても解説を読んでパターンを理解することが重要。" },
              { num: "Week4", title: "模擬テスト", desc: "制限時間を設けて本番形式で練習。60分で2問を目標に。ライブコーディングの場合は声に出して思考プロセスを説明する練習も。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-14 h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
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

        {/* コツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コーディングテストで差がつく5つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. まずブルートフォースで解く</h3>
              <p className="text-sm text-blue-700">最適解にこだわるより、まず動くコードを書くことが重要。その後に最適化を考えましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. エッジケースを考慮する</h3>
              <p className="text-sm text-blue-700">空配列、単一要素、最大値・最小値、負の数などのエッジケースを必ず確認。テストケースを自分で追加する習慣をつけましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 思考プロセスを言語化する</h3>
              <p className="text-sm text-blue-700">ライブコーディングでは「今○○を考えています」「このアプローチを選んだ理由は○○です」と説明することで好印象を与えられます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 解けなくても部分点を狙う</h3>
              <p className="text-sm text-blue-700">完全に解けなくても、アプローチの説明や擬似コード、部分的な実装でも評価される場合があります。白紙で提出するのが最悪です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 時間配分を意識する</h3>
              <p className="text-sm text-blue-700">複数問題の場合、簡単な問題から確実に解いて得点を稼ぎましょう。難問に時間をかけすぎないことが重要です。</p>
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
          <h2 className="text-xl font-bold mb-3">選考フローの事前確認はエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、各企業のコーディングテストの有無や難易度を事前に教えてもらえます。
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
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
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
