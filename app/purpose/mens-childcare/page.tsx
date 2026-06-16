import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "男性育休が取りやすい企業へ転職【取得率の見極め方2026】",
  description:
    "男性の育児休業の法定ルール（産後パパ育休・育休制度）と、求人での取りやすさの見極め方を公的情報ベースで解説。取得率の確認方法、該当しやすい企業タイプまで。",
};

const faqs = [
  {
    q: "男性も育児休業は取れますか？法律ではどうなっていますか？",
    a: "はい、育児・介護休業法に基づき、性別を問わず原則として子が1歳（一定の場合は最長2歳）になるまで育児休業を取得できます。加えて2022年10月に施行された「産後パパ育休（出生時育児休業）」により、子の出生後8週間以内に最大4週間（28日）まで、2回に分割して取得できる仕組みが整いました。さらに育児休業自体も分割取得が可能になっています（出典：厚生労働省 育児・介護休業法、産後パパ育休制度）。",
  },
  {
    q: "産後パパ育休（出生時育児休業）とは何ですか？",
    a: "産後パパ育休は、子の出生後8週間以内に最大4週間（28日）まで取得できる、男性（配偶者の出産を支える側）を主な対象とした制度です。2回に分割でき、労使協定があれば休業中に一定の範囲で就業することも可能です。通常の育児休業とは別枠で取得できるため、出産直後の最も支援が必要な時期に柔軟に休めるのが特徴です（出典：厚生労働省）。",
  },
  {
    q: "育児休業中の収入はどうなりますか？",
    a: "一定の要件を満たすと、雇用保険から育児休業給付金が支給されます。一般に、休業開始から180日目までは休業開始時賃金日額の67%、その後は50%が支給対象とされています。また育児休業中は社会保険料が免除される仕組みもあり、手取りベースでの目減りは額面の割合ほど大きくないケースがあります。給付の要件・上限額・最新の制度内容は変わり得るため、ハローワーク・厚生労働省の公式情報で確認してください（出典：厚生労働省・ハローワーク 育児休業給付）。",
  },
  {
    q: "「男性育休が取りやすい会社」かどうかは何で見分けますか？",
    a: "制度の有無だけでなく『実際の取得実績』が重要です。常時雇用1,000人を超える企業には、男性の育児休業等取得率の公表が義務づけられており（育児・介護休業法）、自社サイトや厚生労働省『両立支援のひろば』で確認できる場合があります。くるみん・プラチナくるみん認定の有無、面接で『直近で男性の育休取得実績はありますか』と具体的に聞くことも有効です。制度はあっても取得者ゼロの会社もあるため、実績で見極めましょう。",
  },
  {
    q: "育休を取りたいと面接で言うと不利になりませんか？",
    a: "育児休業の取得を理由とする不利益取扱いは育児・介護休業法で禁止されています。とはいえ運用実態は企業差があるため、聞き方は工夫すると安心です。『御社の男性育休の取得実績や、復帰後の働き方の事例を教えてください』のように、制度の運用実績を尋ねる形にすると、自分の希望を伝えつつ会社の本気度も測れます。回答が曖昧・実績が出てこない場合は、運用が進んでいないサインと捉えられます。",
  },
  {
    q: "育休後にエンジニアとしてキャリアが止まらないか不安です。",
    a: "短期間の育休でスキルが陳腐化することは通常ありません。むしろ復帰後の働き方（時短・リモート・フレックス）が整っているかが、その後のキャリア継続を左右します。育休制度の手厚さと合わせて、復帰後の柔軟な働き方が用意されているかを確認しましょう。家庭とキャリアの両立の考え方は、当サイトの家庭とエンジニアキャリアの両立も参考になります。",
  },
];

export default function MensChildcarePage() {
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
        title="男性育休が取りやすい企業へ転職【取得率の見極め方2026】"
        description="男性の育児休業の法定ルールと、求人での取りやすさの見極め方を公的情報ベースで解説。取得率の確認方法、該当しやすい企業タイプまで。"
        url="/purpose/mens-childcare/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "男性育休が取りやすい企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          男性育休が取りやすい企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 制度ではなく「取得実績」で見極める完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 育児・介護休業法（産後パパ育休・育児休業制度）",
            "厚生労働省 育児休業給付（雇用保険）",
            "厚生労働省 両立支援のひろば／くるみん認定",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：制度は法定で整っている。差は「取得実績」に出る</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            男性の育児休業は、育児・介護休業法によって権利として保障されており、2022年10月施行の<strong>産後パパ育休（出生時育児休業）</strong>で取得の柔軟性も高まりました。つまり「制度があるか」は多くの企業で差がつきません。本当に重要なのは<strong>実際に男性が取得できているか（取得率・取得実績）</strong>です。本記事では、男性育休の法定ルールを公的情報で整理し、求人で「取りやすい会社」を見極める方法を、30-40代の家庭とキャリアの両立の観点から解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 出産・育児を控え、実際に育休を取れる会社へ転職したい30-40代</li>
              <li>- 制度の有無ではなく「取得実績」で会社を見極めたい</li>
              <li>- 育休中の収入（給付金・社会保険料免除）の仕組みを正確に知りたい</li>
              <li>- 復帰後の働き方（時短・リモート）まで含めて判断したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>男性育休の法定ルール</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（運用実態・復帰後）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 男性育休の法定ルール</h2>
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
                  { type: "産後パパ育休", desc: "出生後8週以内に最大4週間（28日）", note: "2回に分割可。労使協定で休業中の一定就業も可（2022年10月施行）" },
                  { type: "育児休業", desc: "原則 子が1歳（最長2歳）まで", note: "男女問わず取得可。2回まで分割取得が可能" },
                  { type: "育児休業給付", desc: "雇用保険から給付", note: "180日目まで67%、以降50%（要件あり）。休業中の社会保険料免除制度も" },
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
            ※ 給付率・要件・分割回数などの制度内容は改正され得ます。最新は厚生労働省・ハローワークの公式情報をご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "男性育休取得率の公表を確認する", desc: "常時雇用1,000人超の企業は男性育休取得率の公表義務があります。自社採用サイトや厚生労働省『両立支援のひろば』で数値を探しましょう。" },
              { num: "2", title: "くるみん・プラチナくるみん認定を確認する", desc: "子育てサポート企業として国の認定を受けているかは、両立支援への本気度の一つの目安になります。" },
              { num: "3", title: "面接で『直近の男性育休取得実績』を具体的に聞く", desc: "制度の有無ではなく『直近1〜2年で男性が何人取得したか』を尋ねます。具体的な事例が即答できる会社は運用が進んでいます。" },
              { num: "4", title: "取得期間と分割の柔軟性を確認する", desc: "数日だけの『取得したことにする』運用か、まとまった期間を分割で取れるかで実態は大きく違います。" },
              { num: "5", title: "復帰後の働き方をセットで確認する", desc: "育休後に時短・リモート・フレックスが使えるかまで見ておくと、育児期全体を支える環境かが判断できます。" },
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
            男性育休が実際に取りやすい会社には、一定の傾向があります（取得率は年度・企業で変動するため、具体名・数値は割愛し傾向のみ示します）。
          </p>
          <div className="space-y-3">
            {[
              { type: "両立支援に積極的なWeb系・SaaS企業", point: "柔軟な働き方を制度化している企業が多く、男性育休も実例が出やすい傾向。" },
              { type: "くるみん認定の大手・上場企業", point: "次世代育成支援の取り組みを公表・認定取得しており、取得実績の確認がしやすい。" },
              { type: "公表義務のある大企業（1,000人超）", point: "男性育休取得率を開示しているため、入社前に数値で比較できる。" },
              { type: "人手の薄い小規模・受託現場", point: "制度はあっても代替要員の確保が難しく、実際の取得ハードルが高い場合がある。要確認。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（運用実態・復帰後）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>制度＝取れる、ではない：</strong>法定の制度はどの会社にもありますが、職場の雰囲気や人員体制で『言い出しにくい』ことがあります。取得実績の有無が実態を映す最良の指標です。
            </p>
            <p>
              <strong>不利益取扱いは禁止されている：</strong>育休取得を理由とする降格・減給などの不利益取扱いは法律で禁止されています。もし示唆されるような言動があれば、その会社の運用姿勢を疑うべきサインです。
            </p>
            <p>
              <strong>給付・免除で手取りは思ったより減らない：</strong>育児休業給付と社会保険料免除を合わせると、手取りベースの減少は額面の割合ほど大きくないことがあります。家計シミュレーションは公式情報で行いましょう。
            </p>
            <p>
              <strong>復帰後の環境までセットで：</strong>育休はゴールではなくスタートです。復帰後に
              <Link href="/purpose/short-hours/" className="text-petrol hover:underline">時短勤務</Link>
              や
              <Link href="/purpose/remote-full/" className="text-petrol hover:underline">リモートワーク</Link>
              が使えるかまで含めて、育児期を通して働ける環境かを判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">育休実績のある企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">両立支援の実態まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "時短勤務ができる企業へ転職", href: "/purpose/short-hours/" },
              { name: "フルリモートで働けるIT求人", href: "/purpose/remote-full/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "家庭とエンジニアキャリアの両立", href: "/knowledge/family/" },
              { name: "福利厚生が充実した企業へ転職", href: "/purpose/benefits/" },
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
