import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代エンジニアの年収相場【言語・職種・経験年数別】",
  description:
    "30代ITエンジニアの年収を言語別・職種別・経験年数別に徹底解説。年収600万円〜800万円を目指すキャリア戦略と、年収アップに効果的な転職エージェントの活用法を紹介します。",
};

const faqs = [
  {
    q: "30代エンジニアの平均年収は？",
    a: "30代前半で500万〜650万円、30代後半で600万〜750万円が相場です。マネジメント経験やクラウドインフラのスキルがあれば800万円以上も狙えます。日本全体の30代平均年収（約450万円）と比べて高い水準です。",
  },
  {
    q: "最も年収が高いプログラミング言語は？",
    a: "Go（650万〜950万円）、Scala（650万〜900万円）、Kotlin（600万〜850万円）が上位です。需要に対して供給が少ない言語ほど年収が高くなる傾向があります。一方でJavaやPHPは求人数が多い分、年収の中央値はやや控えめです。",
  },
  {
    q: "SIerとWeb系で年収に差はありますか？",
    a: "大手SIerは安定して高年収（600万〜800万円）ですが、上限が見えやすい傾向があります。Web系はスタートアップで400万〜600万円、メガベンチャーで700万〜1,000万円と幅が広いです。自社サービス企業はストックオプションなど報酬構造が異なる場合もあります。",
  },
  {
    q: "年収を上げるには転職と昇進どちらが有効？",
    a: "一般的に転職の方が年収アップ幅は大きいです。同じ会社での昇給は年3〜5%程度ですが、転職では10〜30%のアップが期待できます。特に30代は需要の高い年代であり、適切なタイミングで転職すれば大幅な年収アップが可能です。",
  },
  {
    q: "フリーランスになれば年収は上がる？",
    a: "スキルと経験が十分であれば上がる可能性が高いです。フリーランスの30代エンジニアの平均月単価は60万〜90万円（年収換算720万〜1,080万円）です。ただし社会保険料の自己負担、案件の途切れリスクを考慮する必要があります。",
  },
  {
    q: "30代で年収1,000万円を超えるには？",
    a: "外資系IT企業（GAFAMなど）、大手メガベンチャーのリードエンジニア、またはフリーランスで高単価案件を継続するのが主なルートです。マネジメント経験とスペシャリストとしての深い技術力の両方を持つ人が到達しやすいです。",
  },
];

export default function Salary30sPage() {
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
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "30代エンジニアの年収相場" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30代エンジニアの年収相場【言語・職種・経験年数別】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 30代エンジニアの年収データと年収UP戦略
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代はエンジニアとしてのキャリアの分岐点です。技術力を深めるか、マネジメントに進むか、フリーランスになるか。どの道を選ぶかで年収は大きく変わります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代エンジニアの年収を言語別・職種別・経験年数別にデータで解説し、年収アップのための具体的な戦略を紹介します。
          </p>
        </section>

        {/* 言語別年収 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プログラミング言語別の年収相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">言語</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">30代年収相場</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">求人数傾向</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { lang: "Go", salary: "650万〜950万円", demand: "急増中" },
                  { lang: "Scala", salary: "650万〜900万円", demand: "安定" },
                  { lang: "Kotlin", salary: "600万〜850万円", demand: "増加中" },
                  { lang: "TypeScript", salary: "550万〜800万円", demand: "急増中" },
                  { lang: "Python", salary: "550万〜800万円", demand: "急増中" },
                  { lang: "Java", salary: "500万〜750万円", demand: "安定（多い）" },
                  { lang: "PHP", salary: "450万〜650万円", demand: "安定" },
                  { lang: "Ruby", salary: "500万〜700万円", demand: "横ばい" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.lang}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 2026年4月時点の転職エージェント各社の公開データを基に作成</p>
        </section>

        {/* 職種別年収 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種別の年収相場</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", range: "550万〜800万円", note: "GoやRustの経験者は上限が高い" },
              { role: "フロントエンドエンジニア", range: "500万〜750万円", note: "React/Next.js経験者は需要大" },
              { role: "インフラ/SRE", range: "600万〜900万円", note: "AWS/GCP+Terraform経験で高年収" },
              { role: "データエンジニア", range: "600万〜900万円", note: "ビッグデータ基盤構築経験が鍵" },
              { role: "テックリード/EM", range: "700万〜1,000万円", note: "マネジメント経験5名以上が目安" },
              { role: "セキュリティエンジニア", range: "600万〜900万円", note: "資格保有者は優遇される" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-blue-600 font-bold mb-1">{item.range}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収UP戦略 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代で年収を上げる5つの戦略</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "需要の高い技術スタックへ移行する", desc: "Java/PHPからGo/TypeScript/Pythonへの技術転換は年収アップに直結します。特にクラウドネイティブ技術（Kubernetes、Terraform）の習得は年収50万〜100万円の上乗せ効果があります。" },
              { num: "2", title: "マネジメント経験を積む", desc: "テックリード、エンジニアリングマネージャーへの昇格は100万〜200万円の年収アップが期待できます。5名以上のチームマネジメント経験があると転職時に非常に有利です。" },
              { num: "3", title: "転職エージェントを活用する", desc: "自分の市場価値を正確に把握するために、IT特化型エージェントに相談しましょう。適切な年収交渉によって50万〜100万円のアップが可能です。" },
              { num: "4", title: "副業やOSS活動で実績を作る", desc: "副業での開発経験やOSSへのコントリビューションは、技術力の証明になります。GitHub上の活動は転職時のポートフォリオとして高く評価されます。" },
              { num: "5", title: "業界を変える", desc: "金融、ヘルスケア、AI/ML領域は年収水準が高い傾向があります。現在の業界の年収上限に不満がある場合は、高年収業界への転身を検討しましょう。" },
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
          <h2 className="text-xl font-bold mb-3">あなたの市場価値を無料で診断しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、現在のスキルに見合った年収レンジを無料で教えてもらえます。
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
              { name: "30代未経験からエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "エンジニアの転職回数と影響", href: "/knowledge/job-hopping/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
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
