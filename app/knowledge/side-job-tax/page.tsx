import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "副業の確定申告【エンジニアの副業と税金】";
const DESCRIPTION =
  "エンジニアの副業（受託開発・技術ブログ・登壇など）の確定申告を、20万円ルールの正しい意味、所得区分、経費、住民税の申告まで国税庁の情報に基づいて解説。会社にバレにくくする方法の誤解も整理した、30代・40代向けの実務ガイドです。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/side-job-tax/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：副業の申告で押さえる要点" },
  { id: "rule", label: "20万円ルールの正しい意味" },
  { id: "income", label: "副業の所得区分（事業所得・雑所得）" },
  { id: "expense", label: "経費にできるもの・帳簿づけ" },
  { id: "howto", label: "確定申告の流れ" },
  { id: "notes", label: "誤解しやすいポイント" },
  { id: "faq", label: "よくある質問" },
];

const incomeTypes = [
  {
    title: "事業所得",
    desc: "副業を継続的・反復的に、相当の規模で事業として行っている場合の区分です。一定の要件を満たし青色申告を選択すれば、青色申告特別控除などのメリットを受けられることがあります。",
  },
  {
    title: "雑所得",
    desc: "事業所得に当たらない副業収入は、雑所得として申告するのが一般的です。技術ブログの広告収入や単発の収入などが該当しやすい区分です。",
  },
  {
    title: "区分は実態で判断",
    desc: "事業所得か雑所得かは、収入金額・継続性・営利性などの実態で判断されます。判断に迷う場合は税務署や税理士に確認しましょう。",
  },
];

const faqs = [
  {
    q: "副業収入が20万円以下なら確定申告は不要ですか？",
    a: "給与を1か所から受けている会社員で、給与所得・退職所得以外の所得（副業の所得など）の合計が年間20万円以下の場合、所得税の確定申告が不要になる場合があります(国税庁)。ただしこれは所得税の話で、住民税についてはこの基準が適用されず、別途お住まいの市区町村への住民税申告が必要になることがあります。また医療費控除などで確定申告をする場合は、20万円以下の副業所得も含めて申告します。",
  },
  {
    q: "『所得』と『収入』は何が違いますか？",
    a: "収入（売上）から必要経費を差し引いたものが所得です。20万円の基準は『収入』ではなく『所得』で判断します。たとえば副業の売上が30万円でも、経費が15万円なら所得は15万円となります。経費を正しく計上することで所得が変わるため、領収書などの記録を残しておくことが大切です。",
  },
  {
    q: "副業の収入はどの所得区分になりますか？",
    a: "継続的・反復的に相当の規模で行う副業は事業所得、それに当たらないものは雑所得として申告するのが一般的です。エンジニアの受託開発、技術ブログの広告収入、登壇料などは、その規模や継続性によって区分が変わります。区分の判断は実態に基づくため、迷う場合は税務署や税理士に相談してください。",
  },
  {
    q: "エンジニアの副業で経費にできるものは何ですか？",
    a: "副業の業務に直接必要な支出が経費の対象になり得ます。たとえば開発用PCやソフトウェアの費用、技術書、クラウドやサーバーの利用料、業務に使う通信費の一部などです。プライベートと兼用するものは、業務に使った割合（家事按分）で計上します。何が経費になるかは個別事情によるため、判断に迷う場合は税務署や税理士に確認しましょう。",
  },
  {
    q: "副業が会社にバレない方法はありますか？",
    a: "確実に防ぐ方法を断定することはできません。一般に、住民税の徴収方法が給与天引き（特別徴収）だと、副業分を含めた住民税額から会社に気づかれる可能性が指摘されます。副業分の住民税を普通徴収（自分で納付）にできるかどうかは、自治体や給与所得との関係により取り扱いが異なります。まずは勤務先の就業規則で副業が認められているかを確認し、不安があれば市区町村や専門家に相談してください。",
  },
  {
    q: "申告しないとどうなりますか？",
    a: "申告が必要なのに行わないと、本来納めるべき税額に加えて、無申告加算税や延滞税などが課されることがあります。副業収入は支払元の支払調書などから把握される場合もあり、『少額だから大丈夫』と自己判断するのは危険です。要件に該当する場合は、期限内に正しく申告しましょう。",
  },
  {
    q: "確定申告はいつ・どこで行いますか？",
    a: "所得税の確定申告は、原則として対象となる年の翌年2月16日から3月15日までの間に行います(国税庁)。提出先は納税地を所轄する税務署で、国税庁のe-Tax（電子申告）、郵送、窓口のいずれでも提出できます。会計ソフトや国税庁の確定申告書等作成コーナーを使うと作成しやすくなります。",
  },
];

export default function SideJobTaxPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/side-job-tax/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "副業の確定申告" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          副業の確定申告【エンジニアの副業と税金】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 20万円ルールの誤解を解く
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】副業の確定申告、20万円以下なら本当に不要？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 所得税は「所得20万円以下」なら不要になる場合がありますが、住民税は別途申告が必要になることがあります。20万円基準は所得税だけのものと理解しておきましょう。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・判断は売上（収入）ではなく、経費を引いた「所得」で行う</li><li>・所得税が不要でも住民税の申告や、医療費控除等で確定申告する場合は20万円以下も含めて申告</li><li>・「会社に絶対バレない方法」は断定できない。まず就業規則で副業可否を確認する</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          受託開発、技術ブログ、登壇、OSS関連の収入など、エンジニアの副業の形は多様です。副業で収入を得たら気になるのが確定申告。「20万円以下なら申告不要」という話は有名ですが、これには住民税という落とし穴があります。本記事では、20万円ルールの正しい意味、所得区分、経費、申告の流れを、国税庁の情報に基づいて整理します。なお本記事は一般的な情報提供であり、個別の判断は税務署や税理士にご確認ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国税庁「給与所得者で確定申告が必要な人」",
            "国税庁「確定申告の手引き・所得の区分」",
            "各市区町村の住民税申告の案内",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：副業の申告で押さえる要点</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              会社員の副業では、<strong>給与・退職所得以外の所得の合計が年間20万円を超えると所得税の確定申告が必要</strong>になるのが基本です（1か所から給与を受けている場合、国税庁）。ここで重要なのは、判断するのは「収入」ではなく経費を引いた「所得」だという点です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              そして<strong>20万円以下で所得税の申告が不要でも、住民税の申告は別途必要になることがある</strong>のが最大の注意点です。この20万円基準は所得税のもので、住民税には適用されません。要件は個別事情で変わるため、判断に迷う場合は税務署や市区町村、税理士に確認しましょう。
            </p>
          </div>
        </section>

        {/* 20万円ルール */}
        <section id="rule" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">20万円ルールの正しい意味</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">所得税の確定申告の基準</h3>
              <p className="text-sm text-slate-600">1か所から給与を受けている会社員で、給与・退職所得以外の所得が年間20万円以下なら、所得税の確定申告が不要になる場合があります（国税庁）。これはあくまで所得税の話です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">『収入』ではなく『所得』で判断</h3>
              <p className="text-sm text-slate-600">20万円は売上（収入）ではなく、収入から経費を引いた所得で判断します。売上が大きくても経費を引いた所得が20万円以下になることもあります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">住民税には20万円基準が適用されない</h3>
              <p className="text-sm text-slate-600">所得税の申告が不要でも、住民税はこの基準の対象外です。副業の所得について、お住まいの市区町村への住民税申告が別途必要になることがあります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">確定申告をするなら20万円以下も含める</h3>
              <p className="text-sm text-slate-600">医療費控除やふるさと納税などで確定申告を行う場合は、20万円以下の副業所得も含めて申告する必要があります。</p>
            </div>
          </div>
        </section>

        {/* 所得区分 */}
        <section id="income" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業の所得区分（事業所得・雑所得）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            副業収入は、その実態に応じて主に次の区分で申告します。区分によって使える控除や取り扱いが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {incomeTypes.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            副業を本格化させて独立を視野に入れる場合は、
            <Link href="/knowledge/kaigyo/" className="text-petrol hover:underline">開業届の出し方</Link>
            や
            <Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員の比較</Link>
            もあわせて確認してください。
          </p>
        </section>

        {/* 経費 */}
        <section id="expense" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経費にできるもの・帳簿づけ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            副業の業務に直接必要な支出は、経費として所得から差し引ける場合があります。エンジニアの副業で対象になり得る代表例を挙げます（実際に認められるかは個別事情によります）。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">開発環境・ツールの費用</h3>
              <p className="text-sm text-slate-600">業務用PC・周辺機器、ソフトウェアやSaaSの利用料、クラウド・サーバーの利用料など。高額な資産は減価償却の対象になる場合があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">学習・情報収集の費用</h3>
              <p className="text-sm text-slate-600">業務に関連する技術書、オンライン講座、カンファレンス参加費など。業務との関連性を説明できるものが対象です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">通信費・家事按分</h3>
              <p className="text-sm text-slate-600">業務に使う通信費や、自宅作業の電気代など、プライベートと兼用するものは業務使用割合で按分して計上します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">記録・領収書の保存</h3>
              <p className="text-sm text-slate-600">経費を計上するには、領収書やレシート、取引の記録が必要です。会計ソフトを使うと記帳と申告書作成がスムーズになります。</p>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="howto" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">確定申告の流れ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "収入と経費を集計する", desc: "副業の売上と、業務に必要な経費を1年分集計します。日頃から記録しておくと年度末の負担が軽くなります。" },
              { num: "2", title: "所得区分と申告の要否を確認する", desc: "事業所得か雑所得か、所得税・住民税それぞれで申告が必要かを確認します。迷う場合は税務署や市区町村に相談します。" },
              { num: "3", title: "申告書を作成する", desc: "国税庁の確定申告書等作成コーナーや会計ソフトを使って申告書を作成します。控除がある場合はあわせて入力します。" },
              { num: "4", title: "期限内に提出・納税する", desc: "原則として翌年2月16日〜3月15日に、e-Tax・郵送・窓口で提出し、納税額がある場合は期限内に納めます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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

        {/* 誤解 */}
        <section id="notes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">誤解しやすいポイント</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「20万円以下なら一切申告不要」は誤り</h3>
              <p className="text-sm text-red-700 leading-relaxed">所得税が不要でも住民税の申告が必要になることがあります。20万円基準は所得税のものだと理解しておきましょう。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「会社に絶対バレない方法」は断定できない</h3>
              <p className="text-sm text-red-700 leading-relaxed">住民税の徴収方法による影響が指摘されますが、確実に防ぐ方法を断定することはできません。まず就業規則で副業可否を確認することが先決です。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「少額だから申告しなくていい」は危険</h3>
              <p className="text-sm text-red-700 leading-relaxed">支払元の記録などから収入が把握されることがあります。要件に該当する場合は、加算税などのリスクを避けるためにも正しく申告しましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">副業から独立まで案件を探す</h2>
          <p className="text-blue-100 text-sm mb-4">
            副業案件やフリーランス案件は、エンジニア特化のサービスで効率よく見つけられます。
          </p>
          <Link
            href="/review/levtech-freelance/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            フリーランス向けサービスを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "開業届の出し方", href: "/knowledge/kaigyo/" },
              { name: "インボイス制度とフリーランス", href: "/knowledge/invoice/" },
              { name: "フリーランスvs正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "業務委託の働き方", href: "/employment/gyomu-itaku/" },
              { name: "フリーランスの働き方", href: "/employment/freelance/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
