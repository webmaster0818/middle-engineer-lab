import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "健康保険の任意継続 vs 国保【退職後の選び方】";
const DESCRIPTION =
  "退職後の健康保険を、任意継続（最長2年・全額自己負担・期限20日）と国民健康保険のどちらにすべきか、保険料の決まり方・手続き期限・比較の手順まで全国健康保険協会などの情報に基づいて解説。30代・40代が損をしないための実務ガイドです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：退職後の健康保険の選び方" },
  { id: "options", label: "退職後の3つの選択肢" },
  { id: "ninkei", label: "任意継続の仕組みと期限" },
  { id: "kokuho", label: "国民健康保険の仕組み" },
  { id: "compare", label: "どちらが得かを比較する手順" },
  { id: "notes", label: "注意したいポイント" },
  { id: "faq", label: "よくある質問" },
];

const options = [
  {
    title: "1. 任意継続",
    desc: "退職前の健康保険（協会けんぽや健康保険組合）に、最長2年間継続して加入する制度。退職翌日から20日以内の申請が必要で、保険料は原則全額自己負担になります。",
  },
  {
    title: "2. 国民健康保険（国保）",
    desc: "市区町村が運営する健康保険に加入する方法。保険料は前年の所得などをもとに自治体ごとに計算されます。お住まいの市区町村の窓口で手続きします。",
  },
  {
    title: "3. 家族の被扶養者になる",
    desc: "配偶者など家族が加入する健康保険の被扶養者になる方法。収入要件などを満たす必要があります。要件を満たせば保険料の負担を抑えられる場合があります。",
  },
];

const faqs = [
  {
    q: "任意継続と国保はどちらが安いですか？",
    a: "一概には言えず、人によって異なります。任意継続は在職時の保険料の会社負担分も自分が払うため原則全額自己負担になりますが、標準報酬月額には上限があります(協会けんぽの令和8年度の上限は標準報酬月額32万円)。国保は前年所得などで決まり、所得が高かった人は国保の方が高くなることもあります。両方の保険料を試算して比較するのが確実です。",
  },
  {
    q: "任意継続の申請期限はいつまでですか？",
    a: "資格喪失日（退職日の翌日）から20日以内に申請する必要があります。全国健康保険協会（協会けんぽ）の場合、この期限を過ぎると原則として任意継続に加入できません。退職前から準備し、退職後すぐに手続きすることが重要です。健康保険組合に加入していた場合は、その組合の規定を確認してください。",
  },
  {
    q: "任意継続はいつまで続けられますか？",
    a: "任意継続被保険者でいられるのは最長2年間です。2年を過ぎると資格を失い、その後は国民健康保険に加入するか、家族の被扶養者になるなどの選択が必要になります。途中で就職して別の健康保険に加入した場合などは、その時点で任意継続の資格を失います。",
  },
  {
    q: "任意継続の保険料はどう決まりますか？",
    a: "原則として退職時の標準報酬月額に基づいて計算されますが、上限が設けられています。協会けんぽの場合、令和8年度の任意継続被保険者の標準報酬月額の上限は32万円です(全国健康保険協会)。在職中は会社と折半していた保険料を全額自分で負担するため、額面が増える点に注意してください。具体的な保険料は加入先に確認しましょう。",
  },
  {
    q: "国民健康保険の保険料はどう決まりますか？",
    a: "国保の保険料は、前年の所得などをもとに、お住まいの市区町村ごとの料率で計算されます。自治体によって計算方法や料率が異なるため、同じ所得でも金額が変わります。正確な金額は市区町村の窓口で試算してもらえます。前年の所得が高かった人は国保が高くなりやすい点に注意してください。",
  },
  {
    q: "どちらにするか迷ったらどう決めればいいですか？",
    a: "任意継続の保険料は加入していた健康保険(協会けんぽや健康保険組合)に、国保の保険料はお住まいの市区町村に問い合わせて、両方を試算して比較するのが確実です。任意継続は申請期限が退職翌日から20日と短いため、退職前に両方の見込み額を確認しておくと判断がスムーズです。",
  },
  {
    q: "退職後に手続きしないとどうなりますか？",
    a: "日本では国民皆保険のため、何らかの公的医療保険に加入する必要があります。手続きをしないと無保険状態になり、医療費が全額自己負担になるリスクがあります。国保は加入の届出が原則必要で、遅れても加入日にさかのぼって保険料がかかることがあります。退職後は速やかに手続きしましょう。",
  },
];

export default function HealthInsurancePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/health-insurance/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "健康保険の任意継続vs国保" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          健康保険の任意継続 vs 国保【退職後の選び方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 退職後20日以内に判断を
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          退職してから次の入社まで間が空く場合や、フリーランスになる場合、健康保険を自分で選ぶ必要があります。選択肢は主に「任意継続」と「国民健康保険」。任意継続は退職翌日から20日以内という短い期限があるため、判断を後回しにできません。本記事では、両者の仕組みと比較の手順を、全国健康保険協会などの情報に基づいて整理します。なお保険料は加入先や自治体により異なるため、本記事は一般的な情報提供である点をご了承ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "全国健康保険協会（協会けんぽ）任意継続被保険者制度",
            "全国健康保険協会「令和8年度 任意継続被保険者の標準報酬月額の上限について」",
            "厚生労働省 国民健康保険制度の概要",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：退職後の健康保険の選び方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              退職後の主な選択肢は<strong>「任意継続」と「国民健康保険」</strong>です。どちらが安いかは人によって異なるため、両方の保険料を試算して比較するのが確実です。任意継続は<strong>退職翌日から20日以内の申請</strong>が必要なので、退職前に見込み額を確認しておきましょう。
            </p>
            <p className="text-slate-700 leading-relaxed">
              任意継続は<strong>最長2年間・原則全額自己負担</strong>ですが、標準報酬月額に上限があり（協会けんぽの令和8年度上限は32万円）、在職時の給与が高かった人は割安になることもあります。国保は前年所得で決まるため、前年の所得が高い人は国保が高くなりやすい傾向です。最終的な金額は加入先・市区町村に確認してください。
            </p>
          </div>
        </section>

        {/* 選択肢 */}
        <section id="options" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職後の3つの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職して次の会社の健康保険に入らない期間は、主に次の選択肢があります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {options.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 任意継続 */}
        <section id="ninkei" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">任意継続の仕組みと期限</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">最長2年間継続できる</h3>
              <p className="text-sm text-slate-600">退職前に加入していた健康保険に、被保険者として最長2年間継続加入できる制度です。2年を過ぎると資格を失います。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">申請期限は退職翌日から20日以内</h3>
              <p className="text-sm text-slate-600">協会けんぽの場合、資格喪失日（退職日の翌日）から20日以内に申請が必要です。期限を過ぎると原則加入できないため、退職前からの準備が重要です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">保険料は原則全額自己負担（上限あり）</h3>
              <p className="text-sm text-slate-600">在職中は会社と折半だった保険料を全額自分で負担します。ただし標準報酬月額には上限があり、協会けんぽの令和8年度上限は32万円です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">加入には在職期間の要件がある</h3>
              <p className="text-sm text-slate-600">資格喪失の日の前日まで継続して2か月以上の被保険者期間があることなどの要件があります。詳細は加入先に確認してください。</p>
            </div>
          </div>
        </section>

        {/* 国保 */}
        <section id="kokuho" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">国民健康保険の仕組み</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">市区町村が運営する</h3>
              <p className="text-sm text-slate-600">お住まいの市区町村が運営する公的医療保険です。会社の健康保険を脱退した人や自営業者などが加入します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">保険料は前年所得などで決まる</h3>
              <p className="text-sm text-slate-600">前年の所得などをもとに、自治体ごとの料率で計算されます。前年の所得が高かった人は保険料が高くなりやすい傾向があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">減免制度がある場合も</h3>
              <p className="text-sm text-slate-600">所得が大きく減った場合や非自発的失業の場合などに、保険料の軽減・減免を受けられることがあります。該当するかは市区町村に確認しましょう。</p>
            </div>
          </div>
        </section>

        {/* 比較 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">どちらが得かを比較する手順</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "任意継続の保険料を確認する", desc: "在職時に加入していた協会けんぽや健康保険組合に、任意継続した場合の保険料を問い合わせます。上限により割安になるケースもあります。" },
              { num: "2", title: "国保の保険料を試算してもらう", desc: "お住まいの市区町村の窓口で、国保に加入した場合の保険料を試算してもらいます。前年所得が反映されます。" },
              { num: "3", title: "扶養に入れるか確認する", desc: "配偶者など家族の健康保険の被扶養者になれる場合は、収入要件を確認します。要件を満たせば負担を抑えられることがあります。" },
              { num: "4", title: "期限内に手続きする", desc: "比較した結果を踏まえ、任意継続なら退職翌日から20日以内に申請します。期限が短いため早めの判断が肝心です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section id="notes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意したいポイント</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">任意継続は途中で「やっぱり国保」が難しい場合がある</h3>
              <p className="text-sm text-amber-700 leading-relaxed">任意継続は2年間の継続を前提とした制度で、保険料を納付期日までに納めないと資格を失うなどのルールがあります。切り替え条件は加入先に確認しましょう。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">年金（国民年金）の切り替えも忘れずに</h3>
              <p className="text-sm text-amber-700 leading-relaxed">退職して会社の厚生年金を抜けると、国民年金（第1号被保険者）への切り替えが必要です。健康保険とあわせて市区町村で手続きします。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">扶養の収入要件は事前に確認する</h3>
              <p className="text-sm text-amber-700 leading-relaxed">家族の被扶養者になる場合、収入要件があります。フリーランスとして収入が見込まれる場合は要件を満たさないことがあるため、加入先に確認しましょう。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">転職のブランクを最小限にしよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            次の職場が早く決まれば、保険切り替えの負担も抑えられます。IT特化エージェントで効率よく探しましょう。
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
              { name: "失業保険の受給と転職", href: "/knowledge/unemployment-insurance/" },
              { name: "住民税と転職", href: "/knowledge/residence-tax/" },
              { name: "iDeCo・企業型DCと転職", href: "/knowledge/ideco/" },
              { name: "開業届の出し方", href: "/knowledge/kaigyo/" },
              { name: "フリーランスvs正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
