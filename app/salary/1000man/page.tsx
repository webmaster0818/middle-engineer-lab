import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収1000万円エンジニアの割合と3つの到達ルート【希少性と構造】";
const DESCRIPTION =
  "年収1000万円のITエンジニアの割合・必要スキル・職種を、レバテックやエンジニアtype、paiza言語別データなど出典付きで整理。ITSS L6相当という位置づけ、ハイクラス転職・マネジメント・スペシャリストの3ルート、商流と給与テーブルが天井を決める構造を解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/1000man/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：1000万円の希少性と3つのルート" },
  { id: "rarity", label: "年収1000万円エンジニアの割合（希少性）" },
  { id: "position", label: "1000万円はITSSのどのレベルか" },
  { id: "routes", label: "1000万円への3つの到達ルート" },
  { id: "structure", label: "天井を決めるのは商流と給与テーブル" },
  { id: "language", label: "言語別の年収プレミアム（paiza）" },
  { id: "companies", label: "1000万円に届く企業の例" },
  { id: "midlife", label: "30〜40代が1000万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const rarityData = [
  { src: "レバテック（2025）30代", value: "8.01%", note: "30代エンジニアで年収1,000万円以上の割合" },
  { src: "レバテック（2025）40代", value: "12.67%", note: "40代エンジニアで年収1,000万円以上の割合" },
  { src: "エンジニアtype", value: "約1.6%", note: "エンジニア全体での割合" },
  { src: "IT人材白書2020", value: "19.2%", note: "IT人材の割合（2020年・古い時点の値）" },
];

const routes = [
  {
    title: "ルート①：ハイクラス転職",
    desc: "外資IT、自社プロダクト企業、ITコンサル（DX領域）などへの転職。給与テーブルそのものが高い企業に移ることで、技術力を最も素直に年収へ反映できるルートです。",
  },
  {
    title: "ルート②：マネジメント",
    desc: "プライムSIerのPM（プロジェクトマネージャー）やEM（エンジニアリングマネージャー）など。人と事業を動かす責任が報酬に反映される、伝統的かつ堅実なルートです。",
  },
  {
    title: "ルート③：スペシャリスト",
    desc: "SaaSのバックエンド、クラウド、機械学習、データサイエンティスト、アーキテクトなど。マネジメントに進まなくても、希少な高度専門性で1000万円帯に届くルートです。",
  },
];

const langData = [
  { lang: "Go", value: "711万円" },
  { lang: "TypeScript", value: "698万円" },
  { lang: "Scala", value: "680万円" },
];

const faqs = [
  {
    q: "30代で年収1000万円のエンジニアは何割いますか？",
    a: "レバテックの公表（2025年）では、年収1,000万円以上の割合は30代で8.01%、40代で12.67%とされています。エンジニアtypeでは全体で約1.6%という値も示されており、母集団によって割合は変わります。いずれにせよ希少な層であり、軸を定めて実績を積んだ人が到達しているといえます。",
  },
  {
    q: "年収1000万円はITSSのどのレベルですか？",
    a: "経済産業省のITSSスキル標準レベル別平均年収では、最上位のL6・7が1,129.9万円です（IPA ITSSレベル準拠／原典の調査年版は要確認）。1000万円はこのL6相当、すなわち国内で著名・世界で通用するトップ層の年収帯にあたります。",
  },
  {
    q: "日系SIerでも年収1000万円に届きますか？",
    a: "届く可能性はありますが、ルートが限られます。プライムSIerのPM・EMといったマネジメント職が中心になります。背景には、商流（下請け階層による単価圧縮）と企業の給与テーブルが、技術力以上に年収の天井を決めるという構造があります（レバテックの構造論）。同じ技術力でも、商流の上位や給与テーブルの高い企業のほうが1000万円に届きやすい点に注意が必要です。",
  },
  {
    q: "1000万円にはマネジメントとスペシャリスト、どちらが近いですか？",
    a: "一概には言えません。マネジメント（PM・EM）は伝統的で堅実なルート、スペシャリスト（SaaSバックエンド・クラウド・ML・データサイエンス・アーキテクト）は近年広がっているルートです。重要なのは、自分の強みと志向に合った軸を選び、その軸が高く評価される企業（給与テーブルの高い企業）を狙うことです。",
  },
  {
    q: "年収が上がりやすいプログラミング言語はありますか？",
    a: "paizaの集計（2024年12月10日・求人票の中央値）では、Go 711万円、TypeScript 698万円、Scala 680万円などが上位に挙げられています。これは求人票ベースの中央値であり、言語自体が年収を保証するものではありませんが、需要の高い言語を扱う領域に身を置くことが、高年収帯への一つの材料になります。",
  },
];

export default function Salary1000Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/1000man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収1000万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収1000万円エンジニアの割合と3つの到達ルート【希少性と構造】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収1000万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収1000万円は、ITエンジニアにとって一つの到達点です。本記事では、まずその<strong>希少性</strong>をデータで確認し、ITSS L6相当という位置づけ、ハイクラス転職・マネジメント・スペシャリストという<strong>3つの到達ルート</strong>、そして「技術力だけでは決まらない天井の構造」を出典付きで解説します。1000万円は実力に加え、職種・役職・商流・企業の給与テーブルの選択が効いてくる年収帯です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表（2025年・年代別 年収1,000万円以上割合）",
            "エンジニアtype / IT人材白書2020",
            "paiza 言語別年収（2024/12/10・求人票中央値）",
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：1000万円の希少性と3つのルート</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収1000万円以上のエンジニアは、レバテック公表（2025年）で<strong>30代8.01%・40代12.67%</strong>、エンジニアtypeでは全体<strong>約1.6%</strong>とされる希少な層です。ITSSスキル標準レベルでは<strong>L6相当（1,129.9万円）</strong>、国内で著名・世界で通用するトップ層にあたります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              到達ルートは大きく3つ。<strong>①ハイクラス転職</strong>（外資IT・自社プロダクト・ITコンサルDX）、<strong>②マネジメント</strong>（プライムSIerのPM・EM）、<strong>③スペシャリスト</strong>（SaaSバックエンド・クラウド・ML・データサイエンス・アーキテクト）です。そして見落とされがちですが、最終的な天井は技術力以上に<strong>商流と企業の給与テーブル</strong>が決めます。
            </p>
          </div>
        </section>

        {/* 希少性 */}
        <section id="rarity" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収1000万円エンジニアの割合（希少性）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず1000万円の希少性を、複数のデータで確認します。母集団によって割合は大きく変わる点に注意してください。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">出典・母集団</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">1000万円以上の割合</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">補足</th>
                </tr>
              </thead>
              <tbody>
                {rarityData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.src}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">{row.value}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ レバテック公表（2025年）・エンジニアtype。IT人材白書2020の19.2%は2020年時点の古い値であり、定義・母集団が異なるため参考扱いです。
          </p>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1000万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収1000万円は、ITSSスキル標準レベルでみると最上位のL6相当です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">1000万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L4</td>
                  <td className="px-4 py-3 border border-slate-200">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">高度専門。800万円帯</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L5</td>
                  <td className="px-4 py-3 border border-slate-200">937.8万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">指導者層。1000万円の一歩手前</td>
                </tr>
                <tr className="bg-petrol-soft">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">L6・7</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">1,129.9万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">1000万円帯。国内で著名なレベル</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：経済産業省「IT関連産業の給与等に関する実態調査」ITSSスキル標準レベル別 平均年収（IPA ITSSレベル準拠／原典の調査年版は要最終確認）。
          </p>
        </section>

        {/* ルート */}
        <section id="routes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1000万円への3つの到達ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            1000万円に届く道は、大きく3つに整理できます。自分の志向と強みに合うルートを選ぶことが第一歩です。
          </p>
          <div className="space-y-4">
            {routes.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 構造 */}
        <section id="structure" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">天井を決めるのは商流と給与テーブル</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              1000万円帯を語るうえで最も重要なのが、この構造論です。レバテックの独自見解として、エンジニアの年収の天井は<strong>技術力以上に「商流」と「企業の給与テーブル」が決める</strong>とされています。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>商流</strong>とは、発注元から下請け・孫請けへと続く階層構造のことです。下請け階層に入るほど単価が圧縮され、どれだけ技術力が高くても受け取れる金額に天井ができます。
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>給与テーブル</strong>は、企業ごとに定められた等級と報酬の対応表です。同じ実力でも、給与テーブルの低い企業では1000万円に届かず、高い企業（外資IT・自社プロダクト等）では届きます。つまり1000万円を目指すなら、「自分の技術を上げる」だけでなく「商流の上位・給与テーブルの高い場所に身を置く」という選択が決定的に効いてきます。
            </p>
          </div>
        </section>

        {/* 言語別 */}
        <section id="language" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">言語別の年収プレミアム（paiza）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            扱う技術領域も年収に影響します。paizaの集計（2024年12月10日・求人票の中央値）では、次の言語が上位に挙げられています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
            {langData.map((l, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5 text-center">
                <p className="font-bold text-slate-800 mb-1">{l.lang}</p>
                <p className="text-2xl font-bold text-petrol">{l.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            ※ 出典：paiza（2024年12月10日・求人票の中央値）。言語自体が年収を保証するものではなく、需要の高い領域の指標として参照してください。
          </p>
        </section>

        {/* 企業例 */}
        <section id="companies" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1000万円に届く企業の例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            給与テーブルの高い企業の例として、二次情報・例示ベースで以下のような企業名が挙げられることがあります。あくまで「こうしたクラスの企業が存在する」という例示であり、個別の年収を保証するものではありません。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="text-sm text-slate-700 leading-relaxed">
              NRI（野村総合研究所）、キーエンス、アクセンチュア、シスコ、Google など。プライムSIer・外資IT・コンサル・グローバルテック企業など、商流の上位や高い給与テーブルを持つ企業がこのクラスにあたります。
            </p>
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が1000万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「技術を上げる」より「場所を変える」が効く年代</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30〜40代で技術力を一段上げるのは時間がかかります。一方、商流の上位・給与テーブルの高い企業へ移ることは、これまでの実績を武器に短期で実現しうる打ち手です。1000万円帯ほど「場所選び」の影響が大きくなります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3ルートのうち「勝てる軸」を1つに絞る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                ハイクラス転職・マネジメント・スペシャリストのうち、これまでの蓄積が最も活きる軸を1つに絞ることが重要です。40代では年収1000万円以上が12.67%に達しており、軸を定めて積み上げた層が到達していることがうかがえます。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の相場や汎用的な年収UP戦略は、
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>
            ・
            <Link href="/purpose/salary-up/" className="text-petrol hover:underline">年収アップを目指す転職ガイド</Link>
            をご覧ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">1000万円帯への「場所選び」をプロに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス・IT特化エージェントに登録して、給与テーブルの高い企業の求人を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "年収を上げる転職の全体地図（TOP）", href: "/salary/" },
              { name: "年収600万円エンジニアの必要スキル", href: "/salary/600man/" },
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "年収アップに強いエージェント比較", href: "/compare/salary-ranking/" },
              { name: "年収アップを目指す転職ガイド", href: "/purpose/salary-up/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
