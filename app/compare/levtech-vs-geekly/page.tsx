import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "レバテックキャリア vs Geekly【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "レバテックキャリアとGeeklyを8項目で徹底比較。求人数、年収UP実績、得意分野、サポート体制の違いを解説し、30代・40代エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  {
    q: "レバテックキャリアとGeeklyの最大の違いは？",
    a: "最大の違いは得意分野です。レバテックキャリアはIT業界全般（Web、SIer、社内SE、インフラ）を幅広くカバーしている一方、GeeklyはWeb系・ゲーム業界に特に強く、マッチング精度の高さに定評があります。",
  },
  {
    q: "年収UPしやすいのはどっち？",
    a: "レバテックキャリアは年収UP率80%、Geeklyは平均年収UP額76万円という実績があります。高年収帯（800万円以上）ではレバテックキャリアの方が求人が多く、全体的な年収UP額ではGeeklyが優位な傾向です。",
  },
  {
    q: "30代におすすめなのはどっち？",
    a: "30代でWeb系・ゲーム業界を志望するならGeekly、SIerやインフラを含む幅広い選択肢を求めるならレバテックキャリアがおすすめです。迷ったら両方登録して比較するのが最善の策です。",
  },
  {
    q: "40代におすすめなのはどっち？",
    a: "40代にはレバテックキャリアの方がおすすめです。シニアエンジニアやEM/CTO向けの求人が多く、40代の転職実績も豊富です。Geeklyは30代中心の求人が多い傾向にあります。",
  },
  {
    q: "両方登録しても大丈夫？",
    a: "もちろん大丈夫です。むしろ両方登録するのがおすすめです。エージェントごとに保有する非公開求人が異なるため、2社に登録することで選択肢が大幅に広がります。同じ企業に重複応募しないよう注意すれば問題ありません。",
  },
  {
    q: "サポートの質はどちらが高い？",
    a: "レバテックキャリアはIT業界出身のアドバイザーが多く、技術面での理解が深い。Geeklyはマッチング精度と対応スピードに定評があります。どちらもIT特化型のため、総合型エージェントより格段にサポートの質が高いです。",
  },
];

const comparison = [
  { item: "求人数", levtech: "約25,000件", geekly: "約20,000件" },
  { item: "年収UP実績", levtech: "年収UP率80%", geekly: "平均年収UP額76万円" },
  { item: "得意分野", levtech: "IT全般（Web、SIer、インフラ、社内SE）", geekly: "Web系、ゲーム業界" },
  { item: "対象年代", levtech: "30代〜40代全般", geekly: "30代中心" },
  { item: "アドバイザーの質", levtech: "IT業界出身者が多い", geekly: "マッチング精度が高い" },
  { item: "対応エリア", levtech: "全国（東京・大阪・名古屋・福岡拠点）", geekly: "東京・大阪中心" },
  { item: "内定までの期間", levtech: "平均3〜4週間", geekly: "平均2〜3週間" },
  { item: "料金", levtech: "完全無料", geekly: "完全無料" },
];

export default function LevtechVsGeeklyPage() {
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
        title="レバテックキャリア vs Geekly【徹底比較】どっちを選ぶべき？"
        description="レバテックキャリアとGeeklyを8項目で徹底比較。求人数、年収UP実績、得意分野の違いを解説し、30代・40代エンジニアに最適なエージェント選びを支援します。"
        url="/compare/levtech-vs-geekly/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs Geekly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリア vs Geekly【徹底比較】どっちを選ぶべき？
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | IT特化型エージェント2大巨頭を比較
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            IT特化型転職エージェントの2大巨頭であるレバテックキャリアとGeekly。どちらもエンジニアから高い支持を得ていますが、得意分野やサポート体制には明確な違いがあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、8つの比較項目を通じて両社の違いを明らかにし、あなたに最適なエージェントの選び方を解説します。
          </p>
        </section>

        {/* 総合比較テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.levtech}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.geekly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。非公開求人を含む場合があります。</p>
        </section>

        {/* 求人数比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア：約25,000件</h3>
              <p className="text-sm text-blue-700">
                IT業界全般をカバーする求人ラインナップ。Web系、SIer、社内SE、インフラなど分野が幅広い。全国に拠点があるため、地方の求人も充実。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly：約20,000件</h3>
              <p className="text-sm text-slate-600">
                Web系・ゲーム業界に特化した求人が豊富。東京・大阪を中心にメガベンチャー・成長企業の求人が多い。非公開求人の割合が高い。
              </p>
            </div>
          </div>
        </section>

        {/* 年収UP実績比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収UP実績比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-blue-700 mb-2">
                年収UP率：80%（転職者の5人に4人が年収UP）
              </p>
              <p className="text-sm text-blue-700">
                特にシニアエンジニア（年収700万円以上）の転職で高いUP率を誇る。年収交渉力の高さが強み。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">
                平均年収UP額：76万円
              </p>
              <p className="text-sm text-slate-600">
                マッチング精度の高さにより、入社後のギャップが少ない。年収450〜700万円帯でのUP幅が特に大きい。
              </p>
            </div>
          </div>
        </section>

        {/* 得意分野比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">得意分野比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">レバテックキャリアが強い分野</h3>
              <div className="flex flex-wrap gap-2">
                {["Web系全般", "SIer", "社内SE", "インフラ", "セキュリティ", "PM/PL", "EM/CTO", "フリーランス連携"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{tag}</span>
                ))}
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Geeklyが強い分野</h3>
              <div className="flex flex-wrap gap-2">
                {["Web系スタートアップ", "ゲーム業界", "メガベンチャー", "SaaS", "デザイナー", "マーケター", "EC/Fintech"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* こんな人には */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはレバテックキャリア</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- IT業界全般から幅広く求人を見たい人</li>
              <li>- SIerや社内SE、インフラ職も視野に入れている人</li>
              <li>- 40代以上で、シニアポジションを探している人</li>
              <li>- 地方在住で、全国の求人を探したい人</li>
              <li>- EM/CTO/VPoEなどのマネジメント職を目指す人</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはGeekly</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- Web系・ゲーム業界に絞って転職したい人</li>
              <li>- スピード感を持って転職活動を進めたい人</li>
              <li>- 東京・大阪のメガベンチャーで働きたい人</li>
              <li>- マッチング精度の高さを重視する人</li>
              <li>- 30代でWeb系のキャリアアップを目指す人</li>
            </ul>
          </div>
        </section>

        {/* 両方使う理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "非公開求人が異なる", desc: "各社が持つ非公開求人は重複しないことが多いため、2社に登録するだけで選択肢が1.5〜2倍に広がります。" },
                { num: "2", title: "アドバイザーの意見を比較できる", desc: "同じ経歴でも、エージェントによって提案する方向性が異なります。2社の意見を比較することで、より客観的な判断ができます。" },
                { num: "3", title: "年収交渉の材料になる", desc: "複数のオファーがあると、年収交渉で有利に。「他社からこの条件で内定をもらっている」と伝えることで、年収を引き上げられます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            レバテックキャリアとGeeklyは両方無料。2社に登録して、非公開求人の幅を広げましょう。
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
              { name: "レバテックキャリアの詳細レビュー", href: "/review/levtech-career/" },
              { name: "Geeklyの詳細レビュー", href: "/review/geekly/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "年収UPランキング", href: "/compare/salary-ranking/" },
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
