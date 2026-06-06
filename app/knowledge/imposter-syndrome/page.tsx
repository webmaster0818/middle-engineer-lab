import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "インポスター症候群を乗り越える転職活動 | ミドルエンジニア転職ラボ",
  description:
    "エンジニアに多いインポスター症候群の克服法と、自信を持って転職活動を進める方法を解説。30代・40代ミドルエンジニアが自分の実力を正しく評価するコツを紹介します。",
};

const faqs = [
  {
    q: "インポスター症候群とは何ですか？",
    a: "自分の能力や実績を過小評価し、「自分は周囲に比べて劣っている」「いつか実力がバレる」と感じる心理状態です。優秀なエンジニアほど陥りやすく、Meta社の調査では58%のソフトウェアエンジニアが経験したと報告しています。",
  },
  {
    q: "インポスター症候群の人が転職活動で気をつけるべきことは？",
    a: "自分の実績を「客観的な事実」として書き出すことが重要です。「○○を改善した」ではなく「レスポンスタイムを200ms→50msに改善（75%削減）」のように数値化すると、主観を排除できます。転職エージェントの客観的な評価も自信を取り戻す助けになります。",
  },
  {
    q: "面接で自信を持って話すコツはありますか？",
    a: "事前に「実績ノート」を作りましょう。全プロジェクトの成果を数値で書き出し、面接前に見返すだけで自信が変わります。また、面接は「自分を売り込む場」ではなく「互いのマッチングを確認する場」と考えると緊張が和らぎます。",
  },
  {
    q: "周りのエンジニアと比較してしまいます",
    a: "SNSでの発信は「ハイライトリール」であり、全体像ではありません。他人の強みと自分の弱みを比較するのは不公平です。自分の「1年前」と比較して成長を実感する方が建設的です。",
  },
  {
    q: "年齢が上がるほどインポスター症候群になりやすいですか？",
    a: "30代後半〜40代で新しい役割（マネジメント等）に挑戦する時に起きやすくなります。「経験年数の割に○○ができない」と感じがちですが、キャリアチェンジ初期に完璧である必要はありません。",
  },
  {
    q: "インポスター症候群を克服するために有効なサポートは？",
    a: "転職エージェントのキャリアアドバイザーに客観的な市場価値を聞くことが効果的です。「あなたのスキルセットならこの年収レンジが妥当です」と第三者から言われることで、自分の実力を正しく認識できるようになります。",
  },
];

export default function ImposterSyndromePage() {
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
        title="インポスター症候群を乗り越える転職活動 | ミドルエンジニア転職ラボ"
        description="エンジニアに多いインポスター症候群の克服法と、自信を持って転職活動を進める方法を解説。30代・40代ミドルエンジニアが自分の実力を正しく評価するコツを紹介します。"
        url="/knowledge/imposter-syndrome/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "インポスター症候群と転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インポスター症候群を乗り越える転職活動
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 自分の実力を正しく評価する方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「自分には転職できるほどのスキルがない」「面接で見抜かれるのが怖い」。こうした不安を抱えているなら、あなたはインポスター症候群かもしれません。実はエンジニアの50%以上が同じ悩みを抱えています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、インポスター症候群の正体を理解し、自信を持って転職活動を進めるための具体的な方法を解説します。
          </p>
        </section>

        {/* インポスター症候群の5タイプ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インポスター症候群の5つのタイプ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">タイプ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">特徴</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">エンジニアでの例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">完璧主義者</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">100%でないと失敗と感じる</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">コードレビューの指摘を全否定と受け取る</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">スーパーヒーロー</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">人より多く働かないと価値がない</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">常に残業し続けて燃え尽きる</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">天才型</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">努力が必要 = 才能がない</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">新技術の習得に時間がかかると自信喪失</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">ソリスト</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">助けを借りたら能力不足</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">分からないことを同僚に聞けない</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">エキスパート</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">全てを知らないと専門家ではない</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">知らないFWがあると自分を素人だと感じる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 克服法 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動でインポスター症候群を克服する方法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "実績を数値で書き出す", desc: "主観を排除して客観的な事実として書き出す。「パフォーマンス改善した」→「レスポンスタイム75%短縮、月間インフラコスト30%削減」。数字は嘘をつきません。" },
              { num: "2", title: "周囲からのフィードバックを記録する", desc: "過去にもらったポジティブなフィードバックをメモしておく。1on1でのコメント、Slackでの感謝の言葉など、客観的な評価の証拠になります。" },
              { num: "3", title: "「完璧でなくていい」と認識する", desc: "面接は100点満点を求められる場ではありません。企業が求めているのは「一緒に成長できる人」です。全ての質問に完璧に答える必要はありません。" },
              { num: "4", title: "転職エージェントの客観評価を受ける", desc: "エージェントにスキルシートを見せて「自分の市場価値はどの程度か」を聞く。第三者の客観的な評価は自信の回復に最も効果的です。" },
              { num: "5", title: "小さな成功体験を積む", desc: "いきなり本命企業に応募せず、カジュアル面談やスカウトへの返信から始める。面接の場数を踏むことで自然と自信がつきます。" },
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

        {/* 思考の転換 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネガティブ思考をポジティブに転換する</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「10年もやってるのに○○もできない」</p>
              <p className="text-sm text-green-700">→ 「10年で○○と△△と□□を実務で身につけた。新しい分野はこれから学べばいい」</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「面接で技術力が不足していると思われそう」</p>
              <p className="text-sm text-green-700">→ 「面接は互いのマッチングを確認する場。合わなければお互いにとって良い結果」</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「周りのエンジニアはもっと優秀」</p>
              <p className="text-sm text-green-700">→ 「自分独自のスキルの組み合わせと経験は他の誰にも真似できない」</p>
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
          <h2 className="text-xl font-bold mb-3">客観的な市場価値診断を受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントのアドバイザーが、あなたのスキルを客観的に評価し、自信を持って転職活動を始められるようサポートします。
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
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
