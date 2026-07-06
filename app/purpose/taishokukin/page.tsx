import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/taishokukin/" },
  title: "退職金制度がある企業へ転職【DC・退職金の見極め方2026】",
  description:
    "退職金（退職一時金）と企業型DC（確定拠出年金）の違い、退職所得控除の仕組みを公的情報ベースで解説。求人での見極め方、転職時のポータビリティ、老後資金設計まで。",
};

const faqs = [
  {
    q: "退職金制度と企業型DC（確定拠出年金）は何が違いますか？",
    a: "退職一時金（いわゆる退職金）は、勤続年数や役職に応じて退職時に会社が支給する制度で、原則として会社が給付額を約束する『確定給付型』の性格を持ちます。一方、企業型DC（確定拠出年金）は、会社が毎月一定額を拠出し、その運用は従業員自身が行う仕組みで、最終的な受取額は運用成果によって変動します。給付を約束するのが退職金・確定給付型、拠出額を約束するのがDCと整理できます（出典：厚生労働省、確定拠出年金法）。",
  },
  {
    q: "退職金には税金がかかりますか？",
    a: "退職一時金として受け取る場合、退職所得として課税されますが、勤続年数に応じた『退職所得控除』があり、税負担が大きく軽減される仕組みになっています。勤続20年までは1年あたり40万円、20年を超える部分は1年あたり70万円が控除額の目安です。控除後の金額の2分の1に課税されるなど優遇があり、給与所得と比べて手取りが残りやすいのが特徴です（出典：国税庁 タックスアンサー No.1420 退職金を受け取ったとき）。",
  },
  {
    q: "転職すると退職金やDCはどうなりますか？",
    a: "退職一時金は退職時に精算され、勤続年数がリセットされるため、転職を繰り返すと一社あたりの勤続が短くなり、退職所得控除や支給額の面で不利になることがあります。一方、企業型DCの資産は、転職先に企業型DCがあれば移換、なければiDeCo（個人型確定拠出年金）へ移換できるポータビリティ（持ち運び）が認められており、原則として積み立てた資産を引き継げます。手続きには期限があるため、退職時に確認しましょう。",
  },
  {
    q: "求人で退職金制度の何を確認すべきですか？",
    a: "（1）退職一時金の有無と算定方式：勤続年数比例か、ポイント制か。（2）企業型DCの有無と会社拠出額：マッチング拠出（従業員追加拠出）の可否。（3）受給に必要な勤続年数：一定年数未満だと支給なし・減額の規定があることも。（4）退職金前払い（給与上乗せ）型か。求人票には詳細が書かれないことが多く、労働条件通知書や就業規則で確認するのが確実です。",
  },
  {
    q: "退職金がない会社は避けるべきですか？",
    a: "一概には言えません。近年は退職金制度を持たず、その分を月々の給与やDC拠出に上乗せする企業も増えています。重要なのは『退職金の有無』そのものより、生涯で受け取る総報酬と老後資産形成の手段が用意されているかです。退職金がなくても、企業型DCやiDeCo・つみたて投資で自分年金を作れる環境であれば、必ずしも不利とは限りません。総報酬の観点で比較しましょう。",
  },
  {
    q: "30-40代の転職で退職金はどう考えるべきですか？",
    a: "老後資金の柱として無視できない一方、転職で勤続がリセットされるデメリットもあります。一社に長く勤めて退職金を最大化する戦略と、転職で年収・市場価値を上げてDC・自助努力で資産形成する戦略は、どちらも合理的です。大切なのは、退職金・DC・年収・昇進機会を含めた『生涯の手取り総額』で意思決定すること。年収相場と合わせた判断は40代エンジニアの年収相場も参考にしてください。",
  },
];

export default function TaishokukinPage() {
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
        title="退職金制度がある企業へ転職【DC・退職金の見極め方2026】"
        description="退職金と企業型DCの違い、退職所得控除の仕組みを公的情報ベースで解説。求人での見極め方、転職時のポータビリティ、老後資金設計まで。"
        url="/purpose/taishokukin/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "退職金制度がある企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          退職金制度がある企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 退職金・DC・税制を理解して老後資産で選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国税庁 タックスアンサー No.1420（退職金を受け取ったとき・退職所得控除）",
            "厚生労働省／確定拠出年金法（企業型DC・ポータビリティ）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「退職金あり」は中身（一時金かDCか）で意味が変わる</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-amber-900">
              💡 <strong>「転職すると今の退職金・企業型DCはどうなる？」という手続きを知りたい方はこちら</strong>：
              <Link href="/knowledge/retirement-allowance/" className="underline font-bold">転職すると退職金はどうなる？退職所得控除・DC移換・脱退一時金の手続き</Link>
              （本ページは「退職金制度がある企業の選び方」を扱います）
            </p>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            退職金は30-40代の老後資産設計に直結する重要な制度ですが、「退職金制度あり」という表記の中身は企業によって大きく異なります。会社が給付額を約束する<strong>退職一時金</strong>と、拠出額を約束し運用は従業員に委ねる<strong>企業型DC（確定拠出年金）</strong>では、転職時の扱い・税制・リスクが変わります。本記事では、退職金とDCの違い・退職所得控除の仕組みを公的情報で整理し、求人での見極め方を転職時のポータビリティと老後資金設計の観点で解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 老後資金を意識して退職金のある会社へ転職したい30-40代</li>
              <li>- 退職一時金と企業型DCの違いを整理したい</li>
              <li>- 転職で退職金・DCがどうなるか（持ち運び）を知りたい</li>
              <li>- 退職金の有無を総報酬・税制まで含めて判断したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>退職金・DCの種類と税制</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（転職リセット・総報酬）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 退職金・DCの種類と税制</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">種類</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">転職・税制のポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "退職一時金（確定給付型）", desc: "勤続・役職に応じて退職時に会社が支給", note: "退職所得控除で優遇。勤続リセットの影響大" },
                  { type: "企業型DC（確定拠出年金）", desc: "会社が拠出、運用は従業員。受取額は運用次第", note: "iDeCo等へ移換可（ポータビリティ）" },
                  { type: "退職金前払い（給与上乗せ）", desc: "退職金分を毎月の給与に上乗せ", note: "退職所得控除の対象外。給与として課税される" },
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
            ※ 退職所得控除：勤続20年まで1年40万円、20年超は1年70万円が目安。控除後の2分の1に課税（国税庁No.1420）。制度内容は改正され得ます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "退職一時金か企業型DCかを確認する", desc: "『退職金あり』が一時金なのかDCなのかで、転職時の扱いも税制も変わります。両方ある会社もあります。" },
              { num: "2", title: "会社拠出額とマッチング拠出の可否を確認する", desc: "企業型DCの場合、会社が毎月いくら拠出するか、従業員が追加拠出（マッチング）できるかで資産形成の効率が変わります。" },
              { num: "3", title: "受給に必要な勤続年数を確認する", desc: "退職一時金は『勤続◯年未満は支給なし・減額』の規定があることがあります。短期離職リスクのある場合は要確認です。" },
              { num: "4", title: "算定方式を確認する", desc: "勤続年数比例か、評価に応じたポイント制か。ポイント制は成果・等級で差がつくため、自分の見込みを把握しておきます。" },
              { num: "5", title: "前払い型か（退職所得控除の対象外）を確認する", desc: "退職金を給与に上乗せする前払い型は、退職所得控除の優遇を受けられず、受け取り時の手取りが変わります。" },
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
            退職金・DCの整備状況は、企業の出自や規模で傾向が分かれます（金額・制度は変動するため傾向のみ示します）。
          </p>
          <div className="space-y-3">
            {[
              { type: "大手・上場企業／日系メーカー", point: "退職一時金＋企業型DCを併用する企業が多く、老後資産の柱になりやすい。" },
              { type: "インフラ・金融・伝統的大企業", point: "勤続年数比例の手厚い退職一時金が残る傾向。長期勤続でメリットが大きい。" },
              { type: "メガベンチャー・上場後の企業", point: "企業型DCを中心に据え、退職一時金は持たない／前払い型のことも。" },
              { type: "スタートアップ・小規模Web系", point: "退職金制度がない代わりに給与・SOで報いる設計が多い。総報酬で比較を。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（転職リセット・総報酬）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>転職で勤続がリセットされる：</strong>退職一時金は勤続年数で大きく増える設計が多く、転職を繰り返すと一社あたりの勤続が短くなり、支給額・退職所得控除の面で不利になることがあります。
            </p>
            <p>
              <strong>DCは持ち運べる：</strong>企業型DCの資産は転職先の企業型DCやiDeCoへ移換できます。手続きには期限があり、放置すると自動移換され不利になる場合があるため、退職時に必ず確認しましょう。
            </p>
            <p>
              <strong>退職金の有無だけで判断しない：</strong>退職金がなくても給与やDC拠出に上乗せされていれば、総報酬では有利なこともあります。生涯の手取り総額で比較するのが本質です。
            </p>
            <p>
              <strong>退職前後の手続きも確認を：</strong>退職金・DCの精算や移換は退職手続きと並行して進める必要があります。具体的な流れは
              <Link href="/knowledge/after-resignation-procedures/" className="text-petrol hover:underline">退職後の各種手続き</Link>
              も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">退職金制度のある企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">退職金・DCの中身まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "福利厚生が充実した企業へ転職", href: "/purpose/benefits/" },
              { name: "住宅手当・家賃補助がある企業へ転職", href: "/purpose/housing-allowance/" },
              { name: "退職後の各種手続き", href: "/knowledge/after-resignation-procedures/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "安定した企業への転職", href: "/purpose/stable/" },
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
