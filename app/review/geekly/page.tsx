import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Geeklyの評判・口コミ | 30代・40代エンジニア向け徹底レビュー",
  description:
    "Geeklyを30代・40代エンジニア目線で徹底レビュー。平均年収UP76万円、書類選考通過率3.4倍の実力を口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "30代前半 / ゲームエンジニア",
    stars: 5,
    date: "2024年11月",
    text: "ソーシャルゲーム企業からコンソールゲーム開発会社に転職。年収が90万円UPしました。ゲーム業界の求人は他のエージェントでは少なかったのですが、Geeklyは独占求人が多く選択肢が広がりました。Unity/Unreal Engineの経験をしっかり評価してもらえました。",
  },
  {
    label: "30代後半 / Webエンジニア",
    stars: 4,
    date: "2024年10月",
    text: "書類選考が全然通らず悩んでいたところ、Geeklyに相談。職務経歴書を一から作り直してもらい、通過率が大幅に改善しました。最終的にメガベンチャーのバックエンドポジションで内定。年収は70万円UP。対応も早くて助かりました。",
  },
  {
    label: "30代前半 / データエンジニア",
    stars: 5,
    date: "2024年9月",
    text: "データ基盤構築の経験を活かして、AI系スタートアップに転職できました。Geeklyのアドバイザーはデータ周りの技術にも詳しく、MLOpsやデータパイプラインについても具体的な相談ができました。内定まで3週間と非常にスピーディでした。",
  },
  {
    label: "40代前半 / PM・ディレクター",
    stars: 3,
    date: "2024年8月",
    text: "40代のPM経験者として登録しましたが、紹介される求人は30代向けが中心でした。結局、別のエージェントで決まりましたが、書類添削は非常に丁寧でした。若手向けのエージェントという印象が強いです。",
  },
];

const faqs = [
  {
    q: "Geeklyの登録は無料ですか？",
    a: "はい、完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料で利用できます。",
  },
  {
    q: "Geeklyはどんな業界に強いですか？",
    a: "IT・Web・ゲーム業界に特化しています。特にゲーム・エンタメ業界の求人は業界トップクラスの取り扱い数です。",
  },
  {
    q: "平均年収UP76万円は本当ですか？",
    a: "Geekly公式発表のデータです。IT業界特化でマッチング精度が高いため、スキルに見合った年収を提示する企業とのマッチングが実現しやすいです。",
  },
  {
    q: "書類選考通過率3.4倍とは？",
    a: "一般的な転職サイト経由の応募と比較して、Geekly経由の応募は書類選考通過率が3.4倍高いというデータです。職務経歴書の添削が手厚いことが要因です。",
  },
  {
    q: "地方の求人はありますか？",
    a: "首都圏（東京・神奈川・千葉・埼玉）が中心ですが、フルリモート求人も増えています。地方在住でも首都圏のリモート求人に応募可能です。",
  },
  {
    q: "登録から内定までの平均期間は？",
    a: "平均25日と業界でもトップクラスのスピードです。急いで転職したい方にもおすすめです。",
  },
];

export default function GeeklyReview() {
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
          { name: "レビュー", href: "/#ranking" },
          { name: "Geekly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Geeklyの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2024年12月 | 平均年収UP76万円の実力を徹底検証
        </p>

        {/* Overview Table */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社Geekly"],
                ["求人数", "30,000件以上（独占求人多数）"],
                ["対応エリア", "首都圏中心（リモート求人あり）"],
                ["得意分野", "IT・Web・ゲーム・エンタメ"],
                ["年収UP実績", "平均76万円UP"],
                ["対象年代", "20代〜30代が中心"],
                ["料金", "完全無料"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Geeklyの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゲーム・エンタメ業界に圧倒的な強み</h3>
              <p className="text-sm text-blue-700">
                ゲーム業界への転職を考えるなら、Geeklyが第一選択。コンソール、スマホゲーム、VR/ARなど幅広いゲーム関連求人を保有。Unity、Unreal Engine、Cocos2d-xなどのエンジン別の求人検索も可能です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">書類選考通過率3.4倍</h3>
              <p className="text-sm text-blue-700">
                職務経歴書の添削が非常に手厚く、IT業界に特化した書き方のノウハウを提供。技術スタックの見せ方、プロジェクト経験の書き方など、書類選考の通過率を大幅に向上させます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独自AIマッチングシステム</h3>
              <p className="text-sm text-blue-700">
                独自開発のAIマッチングシステムにより、スキル・経験・希望条件を総合的に分析し、最適な求人を提案。ミスマッチを減らし、効率的な転職活動を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>ゲーム・エンタメ業界の求人が豊富</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>書類添削が手厚く通過率が高い</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>内定までのスピードが早い（平均25日）</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>平均年収UP76万円の実績</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>IT業界以外の求人はない</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>首都圏中心で地方求人が少ない</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>40代向けの求人は限られる</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用者の口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-slate-700">{review.label}</span>
                  <span className="text-yellow-500 text-sm">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
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
          <h2 className="text-xl font-bold mb-3">Geeklyに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・Web業界への転職は、業界特化のGeeklyに相談しませんか？</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/" },
              { name: "ワークポート", href: "/review/workport/" },
              { name: "doda(IT特化)", href: "/review/doda-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の詳細レビュー →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
