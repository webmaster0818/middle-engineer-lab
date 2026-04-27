import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "35歳エンジニアの転職は限界？【リアルな実態と突破法】| ミドルエンジニア転職ラボ",
  description:
    "35歳限界説は本当か？35歳エンジニアの転職市場のリアルな実態を、データと成功事例で検証。35歳からのキャリア戦略と具体的な突破法を解説します。",
};

const faqs = [
  {
    q: "35歳エンジニアの転職限界説は本当ですか？",
    a: "結論から言えば、35歳限界説はもはや過去の話です。IT業界の深刻な人材不足を背景に、35歳以上のエンジニア採用は年々増加しています。ただし、30代前半と比較してポジションの選び方が重要になるのは事実です。マネジメント経験や専門領域の深い知見があれば、35歳以降もキャリアアップ転職は十分に可能です。",
  },
  {
    q: "35歳で転職すると年収は上がりますか？下がりますか？",
    a: "同業種・同レベルのポジションへの転職であれば、年収維持〜UPが一般的です。IT特化型エージェント経由の場合、35歳エンジニアの約55%が年収UPを実現しています。ただし、SIer→自社開発など大きなキャリアチェンジを伴う場合は、一時的に年収が下がることもあります。",
  },
  {
    q: "35歳エンジニアに求められるスキルレベルは？",
    a: "35歳では即戦力としての技術力に加え、チームリード経験、技術選定の判断力、後輩育成の実績が求められます。プレイヤーとして応募する場合も、単なるコーディング能力ではなく、設計力やアーキテクチャの知見が評価ポイントになります。",
  },
  {
    q: "35歳からでも新しい技術分野に挑戦できますか？",
    a: "可能です。ただし、ゼロからのスタートではなく、これまでの経験を活かせる形での技術転換が現実的です。例えば、バックエンド経験者がクラウドインフラに移行する、Web開発者がデータエンジニアリングに挑戦するなど、隣接領域への展開がおすすめです。",
  },
  {
    q: "35歳エンジニアの転職活動で注意すべき点は？",
    a: "最も注意すべきは「焦り」です。35歳は転職市場で十分に戦える年齢ですが、焦って条件を妥協すると後悔します。在職中に活動を始め、最低でも3社のエージェントから情報を集め、じっくり比較検討しましょう。",
  },
  {
    q: "35歳でマネジメント経験がなくても転職できますか？",
    a: "可能です。近年は「Individual Contributor（IC）」パスを整備する企業が増えており、プレイヤーとして高い技術力を発揮するポジションの需要も高まっています。特定技術のスペシャリスト、テクニカルアーキテクト、SREなどが狙い目です。",
  },
];

export default function Age35Page() {
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
          { name: "年代別ガイド" },
          { name: "35歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          35歳エンジニアの転職は限界？【リアルな実態と突破法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 「35歳限界説」の真実と具体的な突破戦略
        </p>

        {/* 導入 */}
        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「エンジニア35歳限界説」は以前からよく語られてきました。しかし2026年現在、IT人材の深刻な不足を背景に、この説は完全に過去のものになりつつあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            とはいえ、35歳を境に転職市場での戦い方が変わるのは事実です。本記事では、35歳エンジニアの転職市場のリアルな実態をデータで示し、この年齢だからこそ成功できる具体的な戦略を解説します。
          </p>
        </section>

        {/* 35歳限界説の検証 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「35歳限界説」をデータで検証する</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["35歳以上のIT求人数推移", "2020年比で約1.8倍に増加"],
                  ["35歳エンジニアの転職成功率", "約60〜70%"],
                  ["35歳の平均転職年収UP額", "約50〜80万円"],
                  ["35歳以上を積極採用する企業", "IT企業の約65%"],
                  ["IT人材不足の見通し", "2030年に最大79万人不足（経産省）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            データが示す通り、35歳以上のエンジニア需要は年々増加しています。「限界説」が語られた背景には、かつてのIT業界の若年層偏重がありましたが、DX推進やテック企業の成熟に伴い、経験豊富なエンジニアの価値が再認識されています。
          </p>
        </section>

        {/* 35歳で変わること */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳を境に変わること・変わらないこと</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">変わらないこと</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  技術力がある人材への需要
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  IT人材不足という追い風
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  年収UP転職の可能性
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  エージェントの無料サポート
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">変わること</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  応募可能な求人の数が減る
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  技術力だけでなくリーダーシップも問われる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  キャリアチェンジの難易度が上がる
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  転職活動期間が長くなる傾向
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 突破戦略 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳からの転職を成功させる突破法</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">突破法1: 「掛け算キャリア」で差別化する</h3>
              <p className="text-sm text-blue-700">
                35歳以降は「技術 x ドメイン知識」「技術 x マネジメント」「技術 x ビジネス理解」のように、複数の強みを掛け合わせて差別化しましょう。単一スキルではなく、組み合わせの希少性が市場価値を決めます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">突破法2: ICパスとマネジメントパスを見極める</h3>
              <p className="text-sm text-blue-700">
                技術を突き詰めるIC（Individual Contributor）パスと、チームを率いるマネジメントパスのどちらが自分に合うかを明確にしましょう。近年はICパスを整備する企業が増え、プレイヤーとして高い年収を得ることも可能になっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">突破法3: エージェントを戦略的に使い分ける</h3>
              <p className="text-sm text-blue-700">
                35歳以降はエージェント選びが特に重要です。IT特化型（レバテックキャリア、Geekly）でハイクラス求人にアクセスしつつ、総合型（doda）で幅広い選択肢を確保する。最低2社、理想は3社に登録して網を広げましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">突破法4: 職務経歴書で「ストーリー」を語る</h3>
              <p className="text-sm text-blue-700">
                35歳は10年以上のキャリアがあります。単なるスキルの羅列ではなく、キャリアの一貫したストーリー（成長の軌跡、技術的な挑戦、組織への貢献）を語れることが書類選考突破の鍵です。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳からの主要キャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "テックリード / リードエンジニア", salary: "700〜1000万円", desc: "技術選定・設計をリードしながらハンズオンで開発も行う" },
              { title: "エンジニアリングマネージャー", salary: "800〜1200万円", desc: "チームの生産性・メンバーの成長にコミットする" },
              { title: "アーキテクト / SRE", salary: "800〜1200万円", desc: "システム全体の設計・信頼性に責任を持つ" },
              { title: "テクニカルPM / PdM", salary: "700〜1100万円", desc: "技術理解をベースにプロダクトの方向性を決める" },
            ].map((path, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{path.title}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">年収目安: {path.salary}</p>
                <p className="text-sm text-slate-600">{path.desc}</p>
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
          <h2 className="text-xl font-bold mb-3">35歳は限界ではなく、キャリアの転換点</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、あなたの10年以上の経験を最大限に活かせるポジションを見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
