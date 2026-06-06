import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "広告業界からAdTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ",
  description:
    "広告業界エンジニアからAdTech領域への転職方法を徹底解説。広告の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "広告業界の経験はAdTech転職で評価されますか？",
    a: "高く評価されます。広告配信の仕組み（DSP/SSP/DMP）、メディアバイイング、効果測定の知識を持つエンジニアはAdTech企業で希少人材です。特にプログラマティック広告の実務経験は大きなアドバンテージになります。",
  },
  {
    q: "広告業界からAdTech転職すると年収はどうなりますか？",
    a: "広告系SEの平均年収は400〜600万円程度ですが、AdTech企業では550〜900万円レンジが一般的です。リアルタイムビッディング（RTB）や広告AI/MLのシニアエンジニアでは800〜1,100万円の求人もあります。",
  },
  {
    q: "AdTech企業ではどんな技術が求められますか？",
    a: "大規模データ処理（Spark/Flink）、リアルタイム処理（Kafka/Kinesis）、ML（CTR予測・レコメンド）が基本です。加えてGo/Rust（高パフォーマンス処理）、プライバシーテック（Cookie代替技術）の知識があると差別化できます。",
  },
  {
    q: "Cookie規制でAdTechの将来は大丈夫？",
    a: "サードパーティCookie廃止後もAdTechは進化し続けています。ファーストパーティデータ活用、コンテキストターゲティング、プライバシーサンドボックス（Topics API等）など、新たな技術開発が活発化しており、エンジニアの需要はむしろ増加しています。",
  },
  {
    q: "広告業界から転職しやすいIT職種は何ですか？",
    a: "AdTechエンジニア（DSP/SSP開発）、データエンジニア（広告データパイプライン）、MLエンジニア（CTR予測・レコメンド）、プライバシーエンジニア（Cookie代替技術）が転職しやすいポジションです。",
  },
  {
    q: "広告業界からAdTech転職に強いエージェントは？",
    a: "Geekly（AdTech/マーケテック企業の求人豊富）、レバテックキャリア（IT特化型）、ビズリーチ（ハイクラスAdTech案件）の3社がおすすめです。大規模データ処理の経験をアピールしましょう。",
  },
];

export default function AdvertisingPage() {
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
      <ArticleJsonLd title="広告業界からAdTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ" description="広告業界エンジニアからAdTech領域への転職方法を徹底解説。広告の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。" url="/industry/advertising/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "広告業界からAdTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">広告業界からAdTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 広告の知識をAdTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">デジタル広告市場は3兆円を超え、プログラマティック広告、リテールメディア、CTV広告など新たな領域が急成長しています。広告配信の仕組みを理解するエンジニアの需要は、プライバシー規制の強化と相まってさらに高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、広告業界エンジニアがAdTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広告エンジニアのAdTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プライバシー規制への技術対応</h3>
              <p className="text-sm text-blue-700">サードパーティCookieの廃止により、ファーストパーティデータ活用、プライバシーサンドボックス、クリーンルーム技術など新たなアドテクの開発需要が急増しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リテールメディアの急成長</h3>
              <p className="text-sm text-blue-700">Amazon、楽天、ウォルマートなど小売企業が自社の購買データを活用した広告プラットフォーム（リテールメディア）を展開しており、このエコシステムを構築するエンジニアの需要が高まっています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI/MLによる広告最適化</h3>
              <p className="text-sm text-blue-700">CTR予測、コンバージョン予測、クリエイティブ自動生成など、AIを活用した広告最適化の開発需要が拡大しています。大規模データ処理+ML の経験を持つエンジニアは引く手あまたです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広告経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["AdTechエンジニア", "年収550〜900万円", "DSP/SSP/DMPの開発・運用"],
                  ["データエンジニア", "年収600〜900万円", "広告データパイプライン・DWH構築"],
                  ["MLエンジニア", "年収650〜1,000万円", "CTR予測・レコメンド・入札最適化"],
                  ["プライバシーエンジニア", "年収600〜900万円", "Cookie代替技術・クリーンルーム開発"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">広告業界からAdTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "大規模データ処理スキルを習得", desc: "SQL、Python、Spark/Flinkの基礎を学ぶ。リアルタイムストリーム処理（Kafka）やデータウェアハウス（BigQuery/Snowflake）の知識も重要。" },
              { step: "2", title: "広告業界の経験を棚卸しする", desc: "広告配信システムの開発・運用、レポーティング、トラッキング実装など携わった案件を整理。CPA改善率やインプレッション数など定量的な実績を準備する。" },
              { step: "3", title: "AdTech業界のトレンドをリサーチ", desc: "プライバシーサンドボックス、Topics API、リテールメディア、CTV広告などのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（AdTech/マーケテック企業に強い）、ビズリーチ（ハイクラスAdTech案件）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">広告の知識をAdTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">AdTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "放送・メディア転職ガイド", href: "/industry/media/" },
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
