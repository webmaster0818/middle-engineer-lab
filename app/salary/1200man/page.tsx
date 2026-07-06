import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収1200万円のエンジニアに必要なスキル・役職・職種【到達ルート】";
const DESCRIPTION =
  "年収1200万円のITエンジニアに必要なスキルレベル・役職・職種を、経産省ITSSレベルや厚労省job tag（令和7年）など出典付きで整理。ITSS L6・7（最上位）に相当し、外資・上場メガベンチャー・管理職・トップスペシャリストなど限られた層である現実と、30〜40代の狙い方を誠実に解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/1200man/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収1200万円の位置づけと到達ルート" },
  { id: "position", label: "年収1200万円はITSSのどのレベルか" },
  { id: "jobtag", label: "公的データでみる高年収クラスの実在" },
  { id: "jobs", label: "1200万円に近い職種・座" },
  { id: "trend", label: "1200万円求人の傾向と限られた層である現実" },
  { id: "route", label: "1200万円への現実的なルート" },
  { id: "midlife", label: "30〜40代が1200万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const route = [
  {
    title: "事業・組織の意思決定に責任を持つ立場へ",
    desc: "1200万円帯は、ITSSのL6・7（最上位）にあたります。技術や組織の方針を決め、事業成果に直接責任を負う立場の経験が問われます。一プレイヤーの延長では届きにくい帯です。",
  },
  {
    title: "市場が高く払う場所（外資・上場メガベンチャー等）を選ぶ",
    desc: "同じスキルでも、報酬テーブルの高い環境（外資系IT、上場メガベンチャー、ストックオプションのある成長企業など）でなければ1200万円は出にくいのが現実です。実力に加えて『どこで戦うか』が効きます。",
  },
  {
    title: "トップ層の希少スペシャリティを確立する",
    desc: "マネジメントに進まない場合は、アーキテクト・AI/機械学習・セキュリティ・大規模基盤など、市場で取り合いになるトップ層の専門性が必要です。代替の利かない専門家であることが条件になります。",
  },
  {
    title: "事業インパクトで実績を語れるようにする",
    desc: "個人の技術成果ではなく、率いた組織・動かした事業・改善した経営指標で語れることが、この帯では必須です。技術を経営の言葉で説明できることが評価を決めます。",
  },
];

const faqs = [
  {
    q: "年収1200万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L6・7（平均1,129.9万円）に相当する最上位帯です（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。L6・7は社内のみならず市場でも認知される最高レベルの専門家・統括者層であり、1200万円はこの最上位の実力者の年収帯だと言えます。エンジニア全体の中では限られた割合の層です。",
  },
  {
    q: "1200万円はどんな人が到達していますか？",
    a: "外資系IT企業のシニアエンジニア・マネージャー、上場メガベンチャーの上級ポジション、開発組織を統括するエンジニアリングマネージャー／VPoE、アーキテクト・AI・セキュリティなどのトップスペシャリスト、ITコンサルのマネージャー層などです。共通するのは『報酬テーブルの高い環境』に『代替の利かない実力』で入っている点で、誰でも到達できる帯ではない点は正直にお伝えします。",
  },
  {
    q: "国内の一般的なSIerやSESでも1200万円は狙えますか？",
    a: "可能性はゼロではありませんが、一般的な国内SIer・SESの給与テーブルでは、1200万円は管理職や限られた上位ポジションに偏り、容易ではありません。多くのケースでは、外資・上場メガベンチャー・ハイクラス転職など、報酬水準の高い環境への移動が現実的な前提になります。環境を変えずに到達するのは難しいと正直に捉えるべき帯です。",
  },
  {
    q: "1200万円求人ではどんな要件が求められますか？",
    a: "事業・組織の意思決定に責任を持つマネジメント経験、または市場で取り合いになるトップ層の専門性が中心です。加えて、英語力（外資の場合）、事業インパクトを語れる実績、ハイクラス求人にアクセスできる経路（ヘッドハンティング・スカウト型）が重要になります。純粋な実装力だけでは届きにくい帯です。",
  },
  {
    q: "1200万円を目指すなら何から始めるべきですか？",
    a: "まず自分の市場価値を客観的に把握すること、そしてハイクラス・スカウト型のエージェントやヘッドハンティングの経路を持つことです。900万円・1000万円で確立したマネジメントまたはスペシャリストの軸を、報酬テーブルの高い環境で発揮できるかが分岐点になります。1000万円帯のルートは専用ページで解説しています。",
  },
];

export default function Salary1200Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/1200man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収1200万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収1200万円のエンジニアに必要なスキル・役職・職種【到達ルート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収1200万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収1200万円は、ITエンジニアにとって「最上位の実力者」の年収帯であり、外資・上場メガベンチャー・管理職・トップスペシャリストなど<strong>限られた層</strong>が到達する水準です。本記事では、この1200万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag（令和7年）など出典付きで整理します。誰でも到達できる帯ではない点も含め、誠実に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "厚生労働省 job tag（令和7年・同一賃金区分の公表値）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収1200万円の位置づけと到達ルート</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収1200万円は、経済産業省のITSSスキル標準レベルでみると<strong>L6・7（1,129.9万円）</strong>に相当する最上位帯です。L6・7は社内のみならず市場でも認知される最高レベルの専門家・統括者層にあたり、1200万円は<strong>最上位の実力者</strong>の年収帯です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              到達者は、外資系IT・上場メガベンチャー・VPoE/EM・アーキテクト/AI/セキュリティのトップスペシャリストなどに限られます。重要なのは、実力に加えて<strong>「報酬テーブルの高い環境を選ぶこと」</strong>。一般的な国内SIer・SESの給与テーブルのままでは届きにくく、環境を変えずに到達するのは容易ではないと正直に捉えるべき帯です。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収1200万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            1200万円の位置を、ITSSレベル別の平均年収の中で確認します。最上位のL6・7にあたります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">1200万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L4</td>
                  <td className="px-4 py-3 border border-slate-200">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">高度専門。700万円帯。手前</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L5</td>
                  <td className="px-4 py-3 border border-slate-200">937.8万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">指導者層。900万円帯。手前</td>
                </tr>
                <tr className="bg-petrol-soft">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">L6・7</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">1,129.9万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">最上位。1200万円が含まれる帯</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：経済産業省「IT関連産業の給与等に関する実態調査」ITSSスキル標準レベル別 平均年収（IPA ITSSレベル準拠／原典の調査年版は要最終確認）。L6・7はITSSの最上位区分で、1,129.9万円はその平均値です。1200万円はこの平均をやや上回る位置にあたります。
          </p>
        </section>

        {/* 公的データ */}
        <section id="jobtag" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公的データでみる高年収クラスの実在</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省 job tag（令和7年）では、基盤システムSE・プロジェクトマネージャー（IT）・ITコンサルタントがいずれも約889万円という区分値で示されています。これは900万円前後のクラスであり、1200万円はその<strong>さらに上</strong>に位置します。公的な職種別区分の多くは900万円前後までであり、1200万円帯は公表区分の延長線上にある「上位の例外的な水準」だと理解するのが正確です。
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>注記：</strong>1200万円ちょうどの公的な職種別平均値は乏しく、この帯は「平均」ではなく「上位層の実例」で語るべき水準です。本ページでは、出典のあるITSS L6・7平均（1,129.9万円）と職種区分（約889万円）を手がかりに位置を示しています。具体的な1200万円の提示額は、企業・経験・市場で大きく変動するため、特定の平均値・割合は断定しません。
            </p>
          </div>
        </section>

        {/* 近い職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1200万円に近い職種・座</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            1200万円帯に届くのは、報酬テーブルの高い環境で、マネジメントまたはトップスペシャリストの座にある層です。代表的なものを挙げます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">外資系ITのシニアエンジニア／マネージャー</h3>
              <p className="text-sm text-slate-600 leading-relaxed">報酬水準が高く、実力次第で1200万円超に届きやすい環境。英語力と高い技術力が前提になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">VPoE・エンジニアリングマネージャー</h3>
              <p className="text-sm text-slate-600 leading-relaxed">開発組織全体を統括する役割。人・技術・事業の責任を負うポジションで、上場企業では1200万円帯に接続します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">トップアーキテクト・AI/MLスペシャリスト</h3>
              <p className="text-sm text-slate-600 leading-relaxed">市場で取り合いになる希少なトップ専門職。代替の利かない専門性が、マネジメントを経ずとも高年収に直結します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ITコンサルのマネージャー層</h3>
              <p className="text-sm text-slate-600 leading-relaxed">大規模案件を統括し、顧客の事業課題を解くマネージャー。コンサルファームの報酬体系で1200万円帯に届きます。</p>
            </div>
          </div>
        </section>

        {/* 求人傾向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1200万円求人の傾向と限られた層である現実</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              1200万円帯の求人は、<strong>外資・上場メガベンチャー・コンサル・希少スペシャリスト</strong>に集中します。多くはヘッドハンティングやスカウト型で動き、一般公募に出ないことも珍しくありません。
            </p>
            <p className="text-slate-700 leading-relaxed">
              正直に言えば、この帯は<strong>限られた層の水準</strong>です。実力があっても、報酬テーブルの低い環境にいれば届きにくく、逆に環境を選べば同じ実力で大きく変わります。「到達は容易ではない」「環境選択が決定的に効く」という二点を誠実に理解したうえで、長期の設計として狙う帯です。
            </p>
          </div>
        </section>

        {/* ルート */}
        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1200万円への現実的なルート</h2>
          <div className="space-y-4">
            {route.map((r, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{r.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が1200万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">『環境を変える』ことを前提に考える</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30〜40代で1200万円を狙うなら、今の会社の昇給延長で考えるより、報酬テーブルの高い環境（外資・上場メガベンチャー）への移動を前提に設計するほうが現実的です。実力の磨き込みと並行して、戦う場所の選択が決定的に効きます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スカウト・ヘッドハンティングの経路を持つ</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                この帯の求人は表に出にくく、ハイクラス・スカウト型エージェントやヘッドハンターとの接点が重要になります。すぐ転職しなくても、市場価値を客観視し続けるために経路を持っておくことが、30〜40代では有効です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の相場や汎用的な年収UP戦略は、
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
            ・
            <Link href="/purpose/salary-up/" className="text-petrol hover:underline">年収アップを目指す転職ガイド</Link>
            ・
            <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェント比較</Link>
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
          <h2 className="text-xl font-bold mb-3">1200万円帯の求人があるか、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス・スカウト型エージェントに登録して、あなたの市場価値と1200万円求人を確認しましょう。
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
              { name: "年収1000万円エンジニアの必要スキル", href: "/salary/1000man/" },
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
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
