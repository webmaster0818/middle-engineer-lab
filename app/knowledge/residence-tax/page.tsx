import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "住民税と転職【退職時期で変わる徴収方法に注意】";
const DESCRIPTION =
  "住民税は前年所得に課税される後払いの税金。転職・退職の時期によって特別徴収・普通徴収・一括徴収のどれになるかが変わり、退職後にまとめて請求されることがあります。30代・40代が想定外の出費を避けるための実務ガイドです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：住民税で損しないために" },
  { id: "basic", label: "住民税の基本（前年所得課税・後払い）" },
  { id: "methods", label: "2つの徴収方法（特別徴収・普通徴収）" },
  { id: "timing", label: "退職時期で変わる徴収パターン" },
  { id: "cases", label: "ケース別の注意点" },
  { id: "tips", label: "備えておきたいこと" },
  { id: "faq", label: "よくある質問" },
];

const cases = [
  {
    title: "1〜5月に退職する場合",
    desc: "原則として、退職する月から5月までの未徴収分の住民税が、最後の給与や退職金から一括徴収されるのが基本です。手取りが想定より減ることがあるため、事前に確認しておきましょう。",
  },
  {
    title: "6〜12月に退職する場合",
    desc: "残りの住民税は、本人が自分で納める普通徴収に切り替わるのが一般的です（一括徴収を希望することも可能な場合があります）。後日、市区町村から納付書が届きます。",
  },
  {
    title: "転職先がすぐ決まっている場合",
    desc: "転職先で引き続き給与天引き（特別徴収）を継続できる場合があります。手続きの要否は、退職元・転職先・市区町村の取り扱いを確認しましょう。",
  },
];

const faqs = [
  {
    q: "住民税はいつの所得にかかりますか？",
    a: "住民税は前年（1月1日〜12月31日）の所得をもとに計算され、原則として翌年の6月以降に課税・徴収されます。つまり後払いの税金です。退職して収入がなくなった年でも、前年に所得があれば住民税の支払いが続く点に注意が必要です。",
  },
  {
    q: "なぜ退職後に住民税の請求が来るのですか？",
    a: "住民税は前年所得に対する後払いのため、退職して無収入になっても、前年に所得があれば支払い義務が残るからです。在職中は給与から毎月天引き（特別徴収）されていた分が、退職後は自分で納める普通徴収に切り替わり、納付書が届くことがあります。想定外の出費にならないよう備えておきましょう。",
  },
  {
    q: "退職する月によって徴収方法は変わりますか？",
    a: "変わります。一般的に、1月〜5月に退職する場合は、その年の5月までの残りの住民税が最後の給与や退職金から一括徴収されるのが原則です。6月〜12月に退職する場合は、残りが普通徴収（自分で納付）に切り替わるのが一般的で、本人が希望すれば一括徴収にできる場合もあります。詳しい取り扱いは勤務先や市区町村に確認してください。",
  },
  {
    q: "特別徴収と普通徴収の違いは何ですか？",
    a: "特別徴収は、勤務先が毎月の給与から住民税を天引きして本人に代わって納める方法です。普通徴収は、市区町村から送られてくる納付書を使って本人が自分で納める方法で、年4回程度に分けて納めるのが一般的です。退職すると特別徴収から普通徴収へ切り替わることがあります。",
  },
  {
    q: "転職先でも給与天引きを続けられますか？",
    a: "前職から転職先へ間を空けずに移る場合などは、所定の手続きを行えば転職先で引き続き特別徴収（給与天引き）を継続できることがあります。手続きの要否や方法は、退職元・転職先の担当部署や市区町村に確認してください。",
  },
  {
    q: "フリーランスになると住民税はどうなりますか？",
    a: "会社を辞めてフリーランスになると、住民税は普通徴収となり、市区町村から届く納付書で自分で納めます。前年に会社員として高い所得があった場合、独立直後に前年所得ベースの住民税の請求が来るため、資金繰りに余裕をもっておくことが大切です。",
  },
  {
    q: "住民税の支払いに備えるにはどうすればいいですか？",
    a: "退職前に、退職時期によってどの徴収方法になるか、いつ・いくら請求が来そうかを勤務先や市区町村に確認し、必要な金額を手元に残しておくのが基本です。特に前年所得が高かった人や、退職後に収入が下がる人は、後払いの住民税分を見込んで資金計画を立てましょう。",
  },
];

export default function ResidenceTaxPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/residence-tax/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "住民税と転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          住民税と転職【退職時期で変わる徴収方法に注意】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 後払いの税金で慌てないために
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職や退職で意外と見落とされがちなのが住民税です。住民税は前年の所得にかかる「後払い」の税金のため、退職して収入が減っても支払いが続き、退職時期によっては最後の給与からまとめて引かれたり、後日まとめて請求が来たりします。本記事では、住民税の仕組みと、退職時期で変わる徴収パターンを整理します。なお、徴収方法の取り扱いは勤務先や市区町村によって異なるため、本記事は一般的な情報提供である点をご了承ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "総務省 個人住民税の概要",
            "各市区町村の個人住民税（特別徴収・普通徴収）案内",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：住民税で損しないために</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              住民税は<strong>前年の所得に課税される後払いの税金</strong>です。そのため、退職して収入が減った年でも、前年に所得があれば支払いが続きます。これが「辞めた後に住民税の請求が来て驚く」原因です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              ポイントは退職時期です。一般に<strong>1〜5月の退職は最後の給与・退職金から一括徴収</strong>されることが多く、<strong>6〜12月の退職は残りが普通徴収（自分で納付）に切り替わる</strong>のが一般的です。前年所得が高かった人ほど影響が大きいため、退職前に勤務先や市区町村へ確認し、住民税分の資金を手元に残しておきましょう。
            </p>
          </div>
        </section>

        {/* 基本 */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">住民税の基本（前年所得課税・後払い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            住民税は、お住まいの都道府県・市区町村に納める地方税です。次の特徴を押さえておくと、転職時の混乱を避けられます。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">前年の所得に対して課税される</h3>
              <p className="text-sm text-slate-600">住民税は前年（1月〜12月）の所得をもとに計算され、原則として翌年6月以降に課税・徴収されます。当年の収入ではなく前年の所得が基準です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">後払いのため退職後も支払いが続く</h3>
              <p className="text-sm text-slate-600">後払いの性質上、退職して無収入になっても前年に所得があれば支払い義務が残ります。これが退職後の想定外の出費につながります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">1月1日時点の居住地で課税される</h3>
              <p className="text-sm text-slate-600">その年の1月1日に住んでいた市区町村が課税します。引っ越しても、1月1日時点の自治体に納める点に注意しましょう。</p>
            </div>
          </div>
        </section>

        {/* 徴収方法 */}
        <section id="methods" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2つの徴収方法（特別徴収・普通徴収）</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">特別徴収（給与天引き）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                勤務先が毎月の給与から住民税を天引きし、本人に代わって納める方法です。会社員の多くはこの方法で、住民税を意識しないまま納めています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">普通徴収（自分で納付）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                市区町村から届く納付書で本人が自分で納める方法です。年4回程度に分けて納めるのが一般的です。退職して給与天引きができなくなると、こちらに切り替わることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* 退職時期 */}
        <section id="timing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職時期で変わる徴収パターン</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職する時期によって、残りの住民税の扱いが変わります。代表的なパターンを確認しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cases.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-4">
            ※ 徴収方法の具体的な取り扱いは勤務先や市区町村によって異なります。退職前に必ず勤務先の担当部署やお住まいの市区町村にご確認ください。
          </p>
        </section>

        {/* ケース別 */}
        <section id="cases" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ケース別の注意点</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">転職でブランクがある場合</h3>
              <p className="text-sm text-amber-700 leading-relaxed">退職から次の入社まで間が空くと、その間の住民税は普通徴収になり、自分で納付書を使って納めます。前年所得が高いと負担が大きくなるため、見込み額を確認しておきましょう。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">年収が下がる転職をする場合</h3>
              <p className="text-sm text-amber-700 leading-relaxed">住民税は前年所得ベースのため、年収が下がった転職直後でも前年の高い所得に基づく住民税がかかります。新しい年収に対して住民税が重く感じられることがあります。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">フリーランスへ転向する場合</h3>
              <p className="text-sm text-amber-700 leading-relaxed">独立初年度は、会社員時代の前年所得に基づく住民税が普通徴収で請求されます。売上が安定しない時期に重なりやすいため、資金繰りに余裕をもたせましょう。</p>
            </div>
          </div>
        </section>

        {/* 備え */}
        <section id="tips" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">備えておきたいこと</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "退職前に徴収方法を確認する", desc: "退職時期によって一括徴収・普通徴収のどちらになるか、勤務先の担当部署や市区町村に確認します。" },
              { num: "2", title: "住民税分の資金を手元に残す", desc: "後払いの住民税に備え、特に前年所得が高かった人は必要額を見込んで現金を確保しておきます。" },
              { num: "3", title: "納付書が届いたら期限内に納める", desc: "普通徴収になった場合、市区町村から届く納付書を使い、納期限までに納付します。納め忘れに注意します。" },
              { num: "4", title: "転職先での特別徴収継続を検討する", desc: "間を空けずに転職する場合、所定の手続きで転職先での給与天引きを継続できることがあります。" },
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
          <h2 className="text-xl font-bold mb-3">退職のタイミングも含めて相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化エージェントなら、入社時期の調整も含めて転職の段取りをサポートしてくれます。
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
              { name: "健康保険の任意継続vs国保", href: "/knowledge/health-insurance/" },
              { name: "iDeCo・企業型DCと転職", href: "/knowledge/ideco/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
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
