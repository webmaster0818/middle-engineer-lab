import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "内定スピードが早いIT転職エージェント比較【2026年】 | ミドルエンジニア転職ラボ",
  description:
    "内定までのスピードが早いIT転職エージェントを徹底比較。最短1週間で内定可能なエージェント、スピード転職のコツ、注意点を解説します。",
};

const faqs = [
  { q: "最短でどのくらいで内定が出る？", a: "最短1〜2週間で内定が出るケースがあります。Geeklyは平均2〜3週間、ワークポートは登録翌日に求人紹介と業界最速クラス。ただしスピードだけでなくマッチング精度も重視しましょう。" },
  { q: "スピード転職のメリットは？", a: "転職活動の長期化による精神的負担の軽減、現職との並行期間の短縮、好条件の求人を逃さないこと、が主なメリットです。特にIT業界は求人の入れ替わりが速いため、スピードは武器になります。" },
  { q: "スピード転職で気をつけることは？", a: "焦って妥協しないことが最重要です。スピードは手段であり目的ではありません。年収・企業文化・成長機会をしっかり確認し、後悔のない転職を心がけましょう。" },
  { q: "面接回数が少ない企業はある？", a: "スタートアップやベンチャー企業は面接1〜2回で内定が出るケースが多いです。大手企業は3〜4回が一般的。カジュアル面談を面接にカウントしない企業もあります。" },
  { q: "内定をもらったらすぐ承諾すべき？", a: "回答期限は通常1〜2週間あります。複数のオファーを比較してから判断するのがベスト。エージェントに「他社の結果待ち」と伝えれば、期限の延長も可能な場合が多いです。" },
  { q: "在職中でもスピード転職は可能？", a: "可能です。オンライン面接の普及で、昼休みや夕方以降に面接を受けられる企業が増えています。有給休暇を使って集中的に面接を入れるのも効果的です。" },
];

const agents = [
  { rank: 1, name: "Geekly", score: "4.8", speed: "平均2〜3週間", point: "内定スピードNo.1のIT特化型エージェント。マッチング精度が高いため、ミスマッチなくスピーディに内定獲得。平均年収UP額76万円。" },
  { rank: 2, name: "ワークポート", score: "4.6", speed: "最短1週間〜", point: "対応スピード業界最速クラス。登録翌日に求人紹介も。未経験からのIT転職にも対応。全国対応。" },
  { rank: 3, name: "レバテックキャリア", score: "4.5", speed: "平均3〜4週間", point: "スピードと質のバランスが最も良い。年収UP率80%で妥協のない年収交渉。IT特化型No.1。" },
  { rank: 4, name: "Green", score: "4.2", speed: "企業による", point: "カジュアル面談でスピーディに企業と接点。自分のペースで進められるが、積極的に動けば最短2週間での内定も。" },
  { rank: 5, name: "type転職エージェント", score: "4.0", speed: "平均3〜4週間", point: "一都三県のIT転職に特化。少数精鋭のアドバイザーが迅速に対応。71%が年収UP。" },
];

export default function SpeedPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="内定スピードが早いIT転職エージェント比較【2026年】" description="内定までのスピードが早いIT転職エージェントを徹底比較。スピード転職のコツを解説します。" url="/compare/speed/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "内定スピードが早いエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">内定スピードが早いIT転職エージェント比較【2026年】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | スピード内定に強いエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">「今すぐ転職したい」「現職の退職日が決まっている」——スピードが求められるIT転職では、内定までの期間が短いエージェントの活用が重要です。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、内定スピードに定評のあるIT転職エージェントを比較し、スピード転職を成功させるコツを解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピード内定エージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">平均内定期間</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.speed}</td><td className="px-3 py-3 border border-slate-200 font-bold">{a.score}/5.0</td></tr>))}</tbody>
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
                <div className="flex gap-4 text-xs text-slate-500"><span>平均内定期間: {a.speed}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピード転職を成功させるコツ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>事前準備を徹底:</strong> 職務経歴書・ポートフォリオを事前に完成させておく。エージェント登録時にすぐ応募できる状態にする。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>複数社に同時登録:</strong> 2〜3社のエージェントに同時登録し、並行して求人紹介を受ける。最初の1週間で多くの求人に触れることが重要。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>面接日程を集中配置:</strong> 1〜2週間に面接を集中させ、複数企業の結果を同時期に出す。比較検討と年収交渉がしやすくなる。</p>
              </div>
            </div>
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
          <h2 className="text-xl font-bold mb-3">スピード×質の転職を実現しよう</h2>
          <p className="text-blue-100 text-sm mb-4">スピードだけでなくマッチング精度も重視。IT特化型エージェントで最短ルートの転職を。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
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
