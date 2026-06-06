import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニアの転職回数は多いと不利？【3回以上でも大丈夫な理由】",
  description:
    "エンジニアの転職回数が多いと不利になるのか？IT業界の転職回数の平均、企業が気にするポイント、転職回数が多くても評価される職務経歴書の書き方を解説します。",
};

const faqs = [
  {
    q: "エンジニアの転職回数は何回までOK？",
    a: "IT業界では3〜4回までは一般的です。30代で3回、40代で4〜5回程度であれば、ほとんどの企業でマイナス評価にはなりません。ただし1社あたりの在籍期間が1年未満の短期離職が連続すると懸念されます。",
  },
  {
    q: "転職回数が多い場合、書類選考で落ちやすくなる？",
    a: "企業によります。大手SIerや金融系は転職回数を重視する傾向がありますが、Web系企業やスタートアップはスキルと実績を重視するため、転職回数だけで落とすケースは少ないです。",
  },
  {
    q: "短期離職があると不利になりますか？",
    a: "1社だけの短期離職なら大きな問題にはなりません。ただし2社以上連続で1年未満の在籍期間があると、「定着しない人」と見なされるリスクがあります。面接では離職理由を前向きに説明する準備が必要です。",
  },
  {
    q: "転職回数が多い人はどう自己PRすべき？",
    a: "各社で得たスキルや経験の「一貫したテーマ」を示すことが重要です。「バックエンドの技術力を段階的に深めてきた」「フロントからインフラまで幅広い経験を積んだ」など、転職がキャリアの成長につながっていることを説明しましょう。",
  },
  {
    q: "転職回数が多い人に強い転職エージェントは？",
    a: "レバテックキャリアやGeeklyなどIT特化型エージェントがおすすめです。エンジニアの転職回数に理解があり、転職回数をカバーする職務経歴書の書き方や面接対策をアドバイスしてくれます。",
  },
  {
    q: "転職回数を減らすために次の会社選びで注意すべきことは？",
    a: "技術スタック、開発文化、評価制度、リモートワーク制度、年収の伸びしろを事前に確認しましょう。転職エージェントを通じて企業の内部情報を入手し、入社後のミスマッチを防ぐことが大切です。",
  },
];

export default function JobHoppingPage() {
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
        title="エンジニアの転職回数は多いと不利？【3回以上でも大丈夫な理由】"
        description="エンジニアの転職回数が多いと不利になるのか？IT業界の転職回数の平均、企業が気にするポイント、転職回数が多くても評価される職務経歴書の書き方を解説します。"
        url="/knowledge/job-hopping/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職回数は多いと不利？" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの転職回数は多いと不利？【3回以上でも大丈夫な理由】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | IT業界の転職回数の実態と対策
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアは他の職種と比べて転職回数が多い傾向があります。「転職回数が多いと不利になるのでは」と不安に思う方も多いですが、IT業界では転職回数そのものよりも「何を経験し、何ができるか」が重視されます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアの転職回数の実態、企業側の本音、転職回数が多くても不利にならない戦略を解説します。
          </p>
        </section>

        {/* 転職回数データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT業界の転職回数の実態</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.8回</p>
                <p className="text-sm text-slate-600 mt-1">30代ITエンジニアの平均転職回数</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.5回</p>
                <p className="text-sm text-slate-600 mt-1">40代ITエンジニアの平均転職回数</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">73%</p>
                <p className="text-sm text-slate-600 mt-1">転職3回以上のエンジニアの割合</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            IT業界は他業界と比べて転職が一般的です。技術の変化が速く、キャリアアップのために転職する文化が根付いています。転職回数が多いこと自体がネガティブに捉えられにくい業界です。
          </p>
        </section>

        {/* 企業の本音 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が本当に気にしていること</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">在籍期間のパターン</h3>
              <p className="text-sm text-blue-700">
                転職回数よりも「1社あたりの在籍期間」を重視する企業が多いです。2〜3年以上の在籍経験が複数あれば安心材料になります。逆に全社1年未満だと「定着しない人」と判断されるリスクがあります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">転職理由の一貫性</h3>
              <p className="text-sm text-blue-700">
                「技術力を高めるため」「より大規模な開発に携わるため」など、キャリアの方向性が一貫していれば、転職回数はむしろプラスに評価されます。場当たり的な転職に見えないよう、ストーリーを整理しましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スキルの成長</h3>
              <p className="text-sm text-blue-700">
                転職のたびにスキルが向上し、担当範囲や責任が広がっていることが伝われば、転職回数は「成長の証」として評価されます。各社での具体的な成果を数値で示しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 転職回数別の対策 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職回数別の面接対策</h2>
          <div className="space-y-4">
            {[
              { count: "3回", advice: "IT業界では一般的な回数。特別な対策は不要ですが、各社での成長ストーリーを整理しておきましょう。" },
              { count: "4〜5回", advice: "30代後半〜40代なら問題ない範囲。キャリアの一貫したテーマ（技術深化、マネジメント経験など）を明確に説明できるようにしましょう。" },
              { count: "6回以上", advice: "直近の在籍期間が2年以上あること、今後のキャリアビジョンが明確であることが重要です。「次の転職を最後にしたい」という覚悟を伝えましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[60px] h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.count}
                </span>
                <p className="text-sm text-slate-600">{item.advice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 職務経歴書の書き方 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職回数が多い人の職務経歴書のコツ</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">冒頭に「キャリアサマリー」を置く</h3>
              <p className="text-sm text-slate-600">
                職歴を時系列で並べる前に、3〜5行のキャリアサマリーで全体像を示しましょう。「Java→Kotlin→Goとバックエンド技術を深化させ、直近ではチーム5名のテックリードとしてマイクロサービス設計を推進」のように、一貫したストーリーを伝えます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">直近の経歴を厚く書く</h3>
              <p className="text-sm text-slate-600">
                5年以上前の経験は概要のみにとどめ、直近2〜3社の経験を詳細に書きましょう。古い経験を長々と書くと、読む側の負担が増え、現在のスキルレベルが伝わりにくくなります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">各社の成果を数値で示す</h3>
              <p className="text-sm text-slate-600">
                「レスポンスタイム50%改善」「テストカバレッジ80%達成」「チーム生産性30%向上」など、各社で残した具体的な成果を数値で示すことで、転職のたびに成長していることを証明できます。
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
          <h2 className="text-xl font-bold mb-3">転職回数が多くても大丈夫。プロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、転職回数をカバーする職務経歴書の書き方から面接対策まで無料でサポートしてくれます。
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
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
