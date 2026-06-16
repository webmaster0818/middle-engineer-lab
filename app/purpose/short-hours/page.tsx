import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "時短勤務ができる企業へ転職【制度と求人の見極め方2026】",
  description:
    "短時間勤務（時短）の法定ルールと、求人での見極め方を公的情報ベースで解説。育児・介護の時短、給与への影響、該当しやすい企業タイプ、30-40代の働き方設計まで。",
};

const faqs = [
  {
    q: "時短勤務（短時間勤務制度）は法律で決まっていますか？",
    a: "育児・介護休業法により、3歳に満たない子を養育する労働者から請求があった場合、事業主は原則1日6時間を基本とする短時間勤務制度を設ける義務があります（一定の要件あり）。また、要介護状態の家族を介護する労働者についても、短時間勤務等の措置を講じることが事業主に義務づけられています。つまり育児・介護を理由とする時短は、多くの企業で利用できる権利です（出典：厚生労働省 育児・介護休業法）。",
  },
  {
    q: "時短勤務にすると給与はどうなりますか？",
    a: "短時間勤務にすると、一般に労働時間の短縮分に応じて給与が減額されるのが原則です（ノーワーク・ノーペイの原則）。たとえば8時間勤務を6時間に短縮すれば、おおむねその割合で基本給が調整されることが多いです。ただし手当の扱いは会社によって異なります。なお、育児のための所定外労働（残業）の制限や深夜業の制限など、給与を直接下げずに負担を軽くする制度も法定で用意されています。具体的な計算方法は各社の就業規則で確認してください。",
  },
  {
    q: "子が3歳を超えても時短勤務は続けられますか？",
    a: "法定の短時間勤務義務は『3歳未満の子』が基準ですが、それを超える年齢まで時短を認めるかは各社の制度次第です。小学校就学前まで、あるいは小学校低学年まで時短を利用できる企業もあれば、3歳で打ち切る企業もあります。長く時短を使いたい場合は、求人・面接で『時短はいつまで利用できるか』を必ず確認しましょう。なお制度の最新動向として、柔軟な働き方を求める改正の流れもあるため、公式情報の確認をおすすめします。",
  },
  {
    q: "求人で時短勤務の何を確認すべきですか？",
    a: "（1）対象と期間：育児・介護に限るか、理由を問わないか。何歳まで利用可か。（2）勤務時間の選択肢：6時間固定か、5〜7時間など幅があるか。（3）給与・評価への影響：減額の計算方法、時短中の昇給・評価の扱い。（4）実際の利用者：制度はあっても利用者ゼロでないか。求人票には書かれないことが多いため、面接や口コミで補完しましょう。エンジニアは成果が見えやすい職種のため、時短でも評価されやすい環境かを重視すると良いです。",
  },
  {
    q: "時短勤務だとエンジニアとして評価が下がりませんか？",
    a: "時短取得を理由とする不利益な評価・取扱いは育児・介護休業法で禁止されています。とはいえ運用は企業差があります。エンジニアは成果物・アウトプットで評価しやすい職種のため、稼働時間ではなく成果で評価する文化のある企業（自社開発・SaaS系に比較的多い傾向）を選ぶと、時短でも正当に評価されやすくなります。面接で評価制度の考え方を確認すると、その会社の姿勢が見えます。",
  },
  {
    q: "時短勤務とフレックス・リモートはどう使い分ける？",
    a: "時短は『1日の労働時間そのものを短くする』制度で給与も時間に応じて減ります。フレックスは『総労働時間は維持しつつ始業・終業を柔軟にする』制度、リモートは『勤務場所を柔軟にする』制度で、これらは給与を減らさずに時間の使い方を調整できます。育児・介護の状況によっては、時短ではなくフレックス＋リモートの組み合わせで十分なこともあります。自分の事情に合う制度設計を持つ会社を選びましょう。",
  },
];

export default function ShortHoursPage() {
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
        title="時短勤務ができる企業へ転職【制度と求人の見極め方2026】"
        description="短時間勤務の法定ルールと、求人での見極め方を公的情報ベースで解説。育児・介護の時短、給与への影響、該当しやすい企業タイプまで。"
        url="/purpose/short-hours/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "時短勤務ができる企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          時短勤務ができる企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 法定の権利と「いつまで・どう評価されるか」で選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 育児・介護休業法（短時間勤務制度・所定外労働の制限）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：時短は法定の権利。差は「期間」と「評価」に出る</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            育児・介護を理由とする短時間勤務は、育児・介護休業法によって多くの企業で利用できる<strong>法定の権利</strong>です。3歳未満の子を養育する労働者には、原則1日6時間の短時間勤務制度を設ける義務が事業主に課されています。つまり「時短制度があるか」だけで会社を選ぶと差がつきにくく、本当に見るべきは<strong>何歳まで使えるか・時短中も正当に評価されるか</strong>です。本記事では、時短の法定ルールを公的情報で整理し、求人での見極め方を30-40代の育児・介護と仕事の両立の観点で解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 育児・介護のために時短で働ける会社へ転職したい30-40代</li>
              <li>- 「時短はいつまで使えるか」を入社前に見極めたい</li>
              <li>- 時短中も評価が下がらない成果主義の環境を探したい</li>
              <li>- 時短・フレックス・リモートの違いを整理して選びたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>時短勤務の法定ルール</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（給与・評価・期間）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 時短勤務の法定ルール</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">制度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "育児の短時間勤務", desc: "3歳未満の子を養育する労働者が請求", note: "原則1日6時間を基本とする制度を設ける義務（事業主）" },
                  { type: "介護の短時間勤務等", desc: "要介護家族を介護する労働者向け", note: "短時間勤務等の措置を講じる義務。利用回数・期間に定めあり" },
                  { type: "所定外労働の制限", desc: "残業・深夜業の制限", note: "時短にせず給与を減らさずに負担を軽くする選択肢" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 対象年齢・利用期間・要件などの制度内容は改正され得ます。最新は厚生労働省の公式情報をご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "時短が使える対象と期間を確認する", desc: "育児・介護に限るか、理由を問わないか。子が何歳になるまで（3歳・就学前・小学校低学年など）利用できるかで長期の働き方が変わります。" },
              { num: "2", title: "勤務時間の選択肢を確認する", desc: "6時間固定か、5〜7時間など幅から選べるか。送り迎えの時間に合わせて柔軟に設定できるかが実用性を左右します。" },
              { num: "3", title: "給与・賞与・昇給への影響を確認する", desc: "短縮分の減額計算、時短中の昇給・賞与・評価の扱いを確認します。時短を理由に昇給が止まる運用は要注意です。" },
              { num: "4", title: "実際の利用者がいるかを確認する", desc: "制度はあっても利用者ゼロの会社もあります。面接で『時短勤務をしている社員の例』を尋ね、口コミでも補完しましょう。" },
              { num: "5", title: "成果で評価する文化かを確認する", desc: "エンジニアは成果が見えやすい職種。稼働時間ではなくアウトプットで評価する文化なら、時短でも正当に評価されやすいです。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 該当しやすい企業タイプ</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            時短勤務が実際に使いやすい会社には、一定の傾向があります（運用実態は企業差が大きいため、傾向のみ示します）。
          </p>
          <div className="space-y-3">
            {[
              { type: "成果主義のWeb系・SaaS企業", point: "稼働時間より成果で評価する文化が根づいていれば、時短でも正当に評価されやすい。" },
              { type: "両立支援に積極的な大手・上場企業", point: "時短を就学前・低学年まで延長するなど、法定を上回る制度を持つ企業がある。" },
              { type: "リモート・フレックス併用企業", point: "時短に頼らずフレックス＋リモートで両立できる設計があり、給与を減らさず調整しやすい。" },
              { type: "受託・常駐中心の現場", point: "クライアント先常駐だと時短が運用しにくいことがある。配属形態を要確認。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（給与・評価・期間）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>給与は時間に応じて減るのが原則：</strong>時短は労働時間の短縮分だけ給与が下がるのが基本です。家計への影響を試算したうえで、給与を減らさずに済むフレックス・残業免除などの代替手段も検討しましょう。
            </p>
            <p>
              <strong>不利益な評価は禁止されている：</strong>時短取得を理由とする降格・減給・低評価は法律で禁止されています。ただし運用は企業差があるため、評価制度の考え方を面接で確認すると安心です。
            </p>
            <p>
              <strong>利用期間の上限に注意：</strong>法定義務は3歳未満が基準です。子の成長後も時短を続けたい場合は、会社独自の延長制度があるかを必ず確認しましょう。
            </p>
            <p>
              <strong>時短だけが選択肢ではない：</strong>
              <Link href="/purpose/flextime/" className="text-petrol hover:underline">フレックスタイム</Link>
              や
              <Link href="/purpose/remote-full/" className="text-petrol hover:underline">フルリモート</Link>
              を組み合わせれば、給与を減らさずに育児・介護と両立できる場合があります。自分の事情に合う制度を選びましょう。
            </p>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">時短で働ける企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">両立支援の実態まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フレックスタイム求人の見極め方", href: "/purpose/flextime/" },
              { name: "フルリモートで働けるIT求人", href: "/purpose/remote-full/" },
              { name: "男性育休が取りやすい企業へ転職", href: "/purpose/mens-childcare/" },
              { name: "家庭とエンジニアキャリアの両立", href: "/knowledge/family/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
