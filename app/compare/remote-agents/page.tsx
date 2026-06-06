import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "リモートワーク求人に強いIT転職エージェント比較【2026年】 | ミドルエンジニア転職ラボ",
  description:
    "フルリモート・ハイブリッド勤務の求人に強いIT転職エージェントを徹底比較。リモート求人数、地方対応、年収への影響を比較し、リモートワーク転職を成功させるコツを解説します。",
};

const faqs = [
  { q: "リモート求人に強いエージェントの選び方は？", a: "フルリモート求人の保有数、地方在住者への対応実績、リモート勤務の詳細条件（出社頻度、交通費支給等）を確認しましょう。IT特化型エージェントの方がリモート求人の保有数が多い傾向です。" },
  { q: "フルリモートで年収は下がる？", a: "大半の企業はリモート勤務でも同等の年収を提示します。ただし一部企業では地域手当の調整（10〜15%程度の減額）があります。エージェントに事前確認すれば安心です。" },
  { q: "リモート求人の割合はどのくらい？", a: "2026年時点でIT業界全体の約25%がフルリモート、約35%がハイブリッド勤務です。合計約60%がリモート対応しており、選択肢は十分にあります。" },
  { q: "地方在住でも東京の企業に応募できる？", a: "フルリモートOKの企業なら全く問題ありません。面接もオンラインで完結するケースが約80%です。エージェントに「地方在住・フルリモート希望」と伝えましょう。" },
  { q: "リモート面接で気をつけることは？", a: "安定したネット環境、静かな場所、適切な照明、カメラ目線を意識しましょう。背景は白壁かバーチャル背景が無難です。音声テストも事前に行っておくと安心です。" },
  { q: "リモート求人は今後も増える？", a: "増加傾向が続く見込みです。IT人材不足が深刻化する中、リモートOKにしないと人材確保が困難になっており、企業側もリモート対応を進めています。" },
];

const agents = [
  { rank: 1, name: "レバテックキャリア", score: "4.8", remote: "約6,000件", point: "フルリモートIT求人数No.1。地方在住×東京企業の転職パターンに最も強い。年収UP率80%でリモートでも妥協しない年収交渉。" },
  { rank: 2, name: "Geekly", score: "4.5", remote: "約4,500件", point: "Web系企業のリモート求人が充実。メガベンチャーのフルリモートポジションに強い。マッチング精度が高い。" },
  { rank: 3, name: "ビズリーチ", score: "4.4", remote: "約15,000件", point: "ハイクラスのリモート求人が豊富。年収600万円以上のリモートポジションをスカウト型で効率的に探せる。" },
  { rank: 4, name: "Green", score: "4.2", remote: "約8,000件", point: "リモートOKフィルターで絞り込み可能。カジュアル面談でリモート勤務の実態を事前確認できる。" },
  { rank: 5, name: "doda（IT特化）", score: "4.0", remote: "約12,000件", point: "リモート求人の絶対数が多い。事業会社のリモート対応DX部門求人も充実。全国対応。" },
];

export default function RemoteAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="リモートワーク求人に強いIT転職エージェント比較【2026年】" description="フルリモート求人に強いIT転職エージェントを徹底比較。リモート求人数、地方対応を紹介します。" url="/compare/remote-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "リモートワーク求人に強いエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リモートワーク求人に強いIT転職エージェント比較【2026年】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | リモート求人に強いエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">フルリモートで働きたいITエンジニアにとって、リモート求人を多く保有するエージェント選びは転職成功の鍵です。特にIT特化型エージェントはリモート求人の保有数が多く、地方在住者への対応実績も豊富です。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、リモートワーク求人に強いIT転職エージェントを比較し、リモート転職成功のコツを解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人に強いエージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">リモート求人数</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.remote}</td><td className="px-3 py-3 border border-slate-200 font-bold">{a.score}/5.0</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.rank}位. {a.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{a.point}</p>
                <div className="flex gap-4 text-xs text-slate-500"><span>リモート求人数: {a.remote}</span></div>
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
          <h2 className="text-xl font-bold mb-3">フルリモートで理想の働き方を実現しよう</h2>
          <p className="text-blue-100 text-sm mb-4">場所に縛られない働き方で年収もQOLも最大化。リモート求人に強いエージェントに登録しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
              { name: "札幌のIT転職事情", href: "/area/sapporo/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
