import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IT転職エージェントの選び方【失敗しない5つのポイント】",
  description:
    "IT転職エージェントの選び方を5つのポイントで解説。IT特化型vs総合型の違い、担当者の見極め方、失敗しないための注意点を30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "IT特化型と総合型、どちらを選ぶべき？",
    a: "エンジニアの転職にはIT特化型がおすすめです。IT業界の技術トレンドや年収相場に精通したアドバイザーが多く、的確な求人紹介が受けられます。総合型は求人数が多い反面、技術的なマッチングの精度は低い傾向があります。",
  },
  {
    q: "転職エージェントは無料で使える？",
    a: "はい、全て無料です。転職エージェントは採用企業から成功報酬を受け取るビジネスモデルのため、求職者は一切費用がかかりません。面談、求人紹介、書類添削、面接対策、年収交渉まで全て無料です。",
  },
  {
    q: "エージェントを変更したい場合はどうすれば？",
    a: "担当者との相性が悪い場合は、遠慮なく担当変更を依頼しましょう。各社のお問い合わせ窓口に連絡すれば対応してもらえます。また、退会して別のエージェントに登録し直すことも自由です。",
  },
  {
    q: "すぐに転職する気はないが登録してもいい？",
    a: "はい、情報収集目的での登録も問題ありません。「市場価値を確認したい」「いい求人があれば検討したい」というスタンスで登録する人は多いです。最初の面談で転職意欲の度合いを正直に伝えれば大丈夫です。",
  },
  {
    q: "エージェントから紹介された求人は断ってもいい？",
    a: "もちろん断っても問題ありません。むしろ自分の希望に合わない求人を断ることで、アドバイザーがあなたの希望をより正確に理解し、次回以降の紹介精度が上がります。断る際は理由を伝えましょう。",
  },
  {
    q: "エージェント経由と直接応募、どちらが有利？",
    a: "エージェント経由の方が有利な場合が多いです。非公開求人へのアクセス、年収交渉の代行、面接後のフォローアップなど、エージェントを通すことで得られるメリットは大きいです。ただし企業の採用サイトからの直接応募を推奨する企業もあります。",
  },
];

export default function HowToChoosePage() {
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
          { name: "IT転職エージェントの選び方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          IT転職エージェントの選び方【失敗しない5つのポイント】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | エンジニアのためのエージェント選び完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            IT転職エージェントは数十社以上あり、どれを選べばいいか迷う方も多いでしょう。エージェント選びを間違えると、的外れな求人ばかり紹介されたり、年収交渉で損をしたりするリスクがあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアがIT転職エージェントを選ぶ際に確認すべき5つのポイントと、失敗を防ぐための注意点を解説します。
          </p>
        </section>

        {/* 5つのポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">失敗しないエージェント選びの5つのポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "IT/Web業界に特化しているか", desc: "IT特化型エージェントは技術トレンドや企業の開発文化に精通しています。「Kubernetesの実務経験2年以上」「Go言語でのマイクロサービス開発」など、具体的な技術要件を理解できるアドバイザーがいるかが重要です。" },
              { num: "2", title: "担当者の技術理解度", desc: "初回面談でアドバイザーの技術理解度を確認しましょう。「あなたの経験されたGo言語でのAPI開発について詳しく聞かせてください」と具体的に質問してくるアドバイザーは信頼できます。" },
              { num: "3", title: "非公開求人の質と量", desc: "公開求人だけでなく、非公開求人をどの程度保有しているかも重要です。大手エージェントは全求人の60〜80%が非公開求人です。登録後に紹介される非公開求人の質で判断しましょう。" },
              { num: "4", title: "年収交渉力", desc: "エージェントの腕の見せどころは年収交渉です。過去の年収アップ実績や交渉のアプローチ方法を確認しましょう。平均で50万〜100万円のアップを実現しているエージェントが優秀です。" },
              { num: "5", title: "対応スピードと面接対策", desc: "求人紹介のスピード、面接日程の調整力、面接対策の質も重要です。面接前に企業ごとの想定質問や面接官の特徴を教えてくれるエージェントは信頼度が高いです。" },
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

        {/* IT特化型vs総合型 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT特化型 vs 総合型エージェントの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">IT特化型</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">総合型</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "技術理解度", special: "高い", general: "低い〜普通" },
                  { item: "IT求人数", special: "多い（専門性高い）", general: "多い（幅広い）" },
                  { item: "年収交渉力", special: "高い（相場を熟知）", general: "普通" },
                  { item: "面接対策", special: "技術面接に対応", general: "一般的な対策" },
                  { item: "代表的なサービス", special: "レバテック、Geekly", general: "doda、リクルート" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.special}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント利用時の注意点</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">希望と異なる求人を紹介され続ける場合</h3>
              <p className="text-sm text-red-700">
                希望条件を明確に伝えているにもかかわらず的外れな求人が続く場合は、担当者の変更を依頼するか、別のエージェントに切り替えましょう。我慢して付き合う必要はありません。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">急かされる場合は要注意</h3>
              <p className="text-sm text-red-700">
                「この求人は今週中に応募しないと締め切られます」と頻繁に急かしてくるエージェントは、自社の売上を優先している可能性があります。納得のいくペースで転職活動を進めましょう。
              </p>
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
          <h2 className="text-xl font-bold mb-3">IT特化型エージェントに無料で相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンジニアの転職に精通したアドバイザーが、あなたのキャリアに合った求人を無料で紹介してくれます。
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
              { name: "転職エージェント複数登録のすすめ", href: "/knowledge/multiple-agents/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
