import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代エンジニアの年収戦略【維持・アップの方法】",
  description:
    "40代ITエンジニアが年収を維持・アップするための戦略を徹底解説。マネジメント路線とスペシャリスト路線の年収比較、交渉テクニック、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "40代エンジニアの平均年収は？",
    a: "40代前半で650万〜850万円、40代後半で700万〜900万円が相場です。マネジメント職であれば900万〜1,200万円、スペシャリストであれば800万〜1,100万円に達する人もいます。",
  },
  {
    q: "40代で年収が下がるケースはある？",
    a: "あります。特に技術のアップデートを怠っていた場合や、マネジメント経験もスペシャリティもない「なんでも屋」状態になっている場合は、転職で年収が下がるリスクがあります。",
  },
  {
    q: "40代からでも年収1,000万円は可能？",
    a: "可能です。外資系IT企業、大手メガベンチャーのEM/テックリード、フリーランスでの高単価案件など、複数のルートがあります。特にクラウドアーキテクト、セキュリティエンジニア、AI/MLエンジニアは高年収を狙いやすい職種です。",
  },
  {
    q: "マネジメントとスペシャリスト、どちらが年収が高い？",
    a: "一般的にはマネジメント職の方が年収上限が高いですが、近年はスペシャリストにも高い報酬を支払う企業が増えています。自分の強みと志向に合った方を選ぶべきです。",
  },
  {
    q: "40代で副業は年収アップに有効？",
    a: "非常に有効です。技術顧問、コンサルティング、スポットでのアーキテクチャレビューなど、40代の経験を活かした副業は月10万〜30万円の収入が見込めます。本業とのバランスを取りながら進めましょう。",
  },
  {
    q: "40代の年収交渉で気をつけるべきことは？",
    a: "市場相場を正確に把握した上で交渉に臨むことが重要です。転職エージェントに現在の市場価値を算出してもらい、客観的なデータをもとに希望年収を提示しましょう。希望額の根拠を示せることがポイントです。",
  },
];

export default function Salary40sPage() {
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
          { name: "40代エンジニアの年収戦略" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          40代エンジニアの年収戦略【維持・アップの方法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 40代エンジニアの年収維持・アップ戦略
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            40代エンジニアにとって「年収を維持できるか」「まだ上げられるのか」は大きな関心事です。結論として、戦略次第で40代からでも年収アップは十分に可能です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、40代エンジニアの年収の現実と、年収を維持・アップするための具体的な戦略を解説します。
          </p>
        </section>

        {/* キャリアパス別年収 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパス別の年収レンジ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">キャリアパス</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">40代年収相場</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { path: "エンジニアリングマネージャー", salary: "900万〜1,200万円", note: "チームマネジメント+技術判断" },
                  { path: "テックリード/アーキテクト", salary: "800万〜1,100万円", note: "技術の意思決定者" },
                  { path: "SRE/インフラスペシャリスト", salary: "750万〜1,000万円", note: "大規模システムの安定運用" },
                  { path: "セキュリティエンジニア", salary: "750万〜1,000万円", note: "需要増加中で高年収" },
                  { path: "プロジェクトマネージャー", salary: "700万〜950万円", note: "開発+プロジェクト管理" },
                  { path: "フリーランスエンジニア", salary: "840万〜1,440万円", note: "月単価70万〜120万円" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.path}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 年収アップ戦略 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代で年収を上げる5つの戦略</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "高年収ポジションに特化して応募する", desc: "40代は量より質の転職活動が重要です。年収800万円以上のテックリード、EM、アーキテクトポジションに絞って応募しましょう。ビズリーチやレバテックキャリアにはハイクラス求人が集まっています。" },
              { num: "2", title: "クラウド・セキュリティ領域のスキルを強化", desc: "AWS/GCPの上位資格（Solutions Architect Professional等）やセキュリティ資格（CISSP等）を取得すると、年収50万〜150万円の上乗せが期待できます。" },
              { num: "3", title: "外資系企業を選択肢に入れる", desc: "外資系IT企業は年功序列がなく、スキルベースで報酬が決まります。40代でも実力があれば年収1,000万〜1,500万円が狙えます。英語力が必要ですが、技術者レベルの英語力で十分な企業も多いです。" },
              { num: "4", title: "副業・技術顧問で収入源を増やす", desc: "本業以外に技術顧問やアドバイザリーの副業を持つことで、月10万〜30万円の追加収入が得られます。40代の豊富な経験はコンサルティングに最適です。" },
              { num: "5", title: "フリーランスへの転身を検討する", desc: "正社員の年収に上限を感じたら、フリーランスへの転身も選択肢です。40代のシニアエンジニアは月単価80万〜120万円で安定した需要があります。" },
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

        {/* 年収が下がるリスク */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代で年収が下がるリスク要因</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">技術スタックが古いまま</h3>
              <p className="text-sm text-red-700">
                10年以上同じ技術スタックだけで仕事をしてきた場合、市場価値が下がるリスクがあります。少なくとも直近のトレンド技術（コンテナ、CI/CD、クラウドネイティブ）のキャッチアップは必須です。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「なんでも屋」になっている</h3>
              <p className="text-sm text-red-700">
                「浅く広い」スキルセットだと40代では評価されにくくなります。「この領域なら任せてください」と言える専門性を少なくとも1つは持つことが重要です。
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
          <h2 className="text-xl font-bold mb-3">40代の年収アップをプロがサポート</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス向けエージェントに登録して、年収アップの可能性を無料で診断してもらいましょう。
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
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
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
