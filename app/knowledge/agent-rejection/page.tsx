import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エージェントに断られた時の対処法 | ミドルエンジニア転職ラボ",
  description:
    "転職エージェントに断られた・登録を拒否された時の原因と対処法を解説。30代・40代エンジニアが別の転職ルートで成功する方法を紹介します。",
};

const faqs = [
  {
    q: "エージェントに断られる主な理由は何ですか？",
    a: "主な理由は「経験年数が少ない（3年未満）」「希望条件が厳しすぎる」「スキルと希望年収のミスマッチ」「登録者が多く対応しきれない」です。IT特化型でないエージェントはエンジニアの市場価値を正しく評価できず断るケースもあります。",
  },
  {
    q: "断られた場合、すぐに別のエージェントに登録すべきですか？",
    a: "はい、すぐに登録しましょう。エージェントごとに得意分野やサポート対象が異なるため、1社に断られても他社では歓迎されるケースが多いです。IT特化型のエージェントを中心に2〜3社に登録することをおすすめします。",
  },
  {
    q: "40代だとエージェントに断られやすいですか？",
    a: "年齢だけが理由で断られることは少なくなっています。ただし40代はスキルセットとマネジメント経験の有無が重要になります。ハイクラス向けエージェント（ビズリーチ等）やIT特化型エージェントなら40代の転職支援実績が豊富です。",
  },
  {
    q: "エージェントなしで転職活動する方法はありますか？",
    a: "直接応募、LinkedIn経由、リファラル（社員紹介）、スカウト型サービスなど選択肢は多数あります。特にWantedlyやGreenはエンジニアの直接応募に向いたプラットフォームです。",
  },
  {
    q: "断られた理由を教えてもらえますか？",
    a: "多くのエージェントは「ご紹介できる求人がない」という婉曲的な理由しか教えてくれません。より具体的なフィードバックが欲しい場合は、キャリア相談に特化したサービスや有料のキャリアコーチングを利用する方法もあります。",
  },
  {
    q: "スキルを上げてから再度登録しても良いですか？",
    a: "もちろんです。半年〜1年後にスキルや経験を積んでから再登録すれば、対応してもらえる可能性が高くなります。その間にポートフォリオの充実やAWS資格の取得など、市場価値を高める準備をしましょう。",
  },
];

export default function AgentRejectionPage() {
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
        title="エージェントに断られた時の対処法 | ミドルエンジニア転職ラボ"
        description="転職エージェントに断られた・登録を拒否された時の原因と対処法を解説。30代・40代エンジニアが別の転職ルートで成功する方法を紹介します。"
        url="/knowledge/agent-rejection/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "エージェントに断られた時" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エージェントに断られた時の対処法
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 断られても転職を成功させる方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職エージェントに登録したのに「現在ご紹介できる求人がございません」と断られた経験はありませんか？ショックを受けるかもしれませんが、これは決して珍しいことではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エージェントに断られる原因と、それでも転職を成功させるための具体的な対処法を解説します。
          </p>
        </section>

        {/* 断られる原因 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントに断られる5つの原因</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "経験やスキルがエージェントの得意分野と合わない", desc: "総合型エージェントはIT職に弱い場合があります。IT特化型エージェントに切り替えると対応してもらえるケースが多いです。" },
              { num: "2", title: "希望条件が市場価値とかけ離れている", desc: "「年収200万アップ＋フルリモート＋残業ゼロ」など条件が厳しすぎると紹介が難しくなります。条件に優先順位をつけましょう。" },
              { num: "3", title: "転職回数が多い（短期離職の繰り返し）", desc: "2年未満の在職期間が3回以上あると警戒される場合があります。ただし一貫したキャリアテーマがあれば説明可能です。" },
              { num: "4", title: "登録者が多くサポート枠が埋まっている", desc: "人気のエージェントは時期によって新規受付を制限することがあります。時期を変えて再登録すると対応してもらえることもあります。" },
              { num: "5", title: "勤務地の制約", desc: "地方在住でリモートワーク不可の求人のみ希望すると、紹介できる求人が極端に少なくなります。" },
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

        {/* 対処法 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断られた時の対処法</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">対処法</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体的なアクション</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">期待効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">別のエージェントに登録</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">IT特化型を2〜3社</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">高い確率で求人紹介を受けられる</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スカウト型サービスに登録</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ビズリーチ、Forkwell等</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">企業から直接オファーが届く</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">直接応募</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Wantedly、Green、企業採用ページ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">エージェントを介さない分柔軟</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">希望条件の見直し</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">優先順位の整理と妥協点の明確化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">マッチする求人が増える</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スキルアップしてから再挑戦</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">資格取得、ポートフォリオ充実</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">市場価値が上がり選択肢が広がる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* エージェント以外のルート */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント以外の転職ルート</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. LinkedIn活用</h3>
              <p className="text-sm text-blue-700">プロフィールを充実させておくと、企業の採用担当やリクルーターから直接スカウトが届きます。外資系IT企業への転職に特に有効です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. リファラル（社員紹介）</h3>
              <p className="text-sm text-blue-700">知人の紹介で応募する方法。書類選考通過率が格段に高く、企業の内部情報も事前に得られるメリットがあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 技術コミュニティ経由</h3>
              <p className="text-sm text-blue-700">勉強会やカンファレンスでの人脈作りが転職につながるケースも。OSS活動や技術ブログが企業の目に留まることもあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. カジュアル面談プラットフォーム</h3>
              <p className="text-sm text-blue-700">MeeTyやYOUTRUSTなどで気軽にカジュアル面談を受けられます。選考前に企業の雰囲気を知れるのがメリットです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 企業の採用ページから直接応募</h3>
              <p className="text-sm text-blue-700">気になる企業の採用ページを定期的にチェック。エージェント手数料が不要なため、企業側の採用ハードルが下がる場合もあります。</p>
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
          <h2 className="text-xl font-bold mb-3">IT特化型エージェントに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            総合型で断られた方も、IT特化型エージェントならエンジニアの市場価値を正しく評価してくれます。
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
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
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
