import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収700万円のエンジニアに必要なスキル・役職・職種【到達ルート】";
const DESCRIPTION =
  "年収700万円のITエンジニアに必要なスキルレベル・役職・職種・求人傾向を、経産省ITSSレベルや厚労省job tag（令和7年）など出典付きで整理。ITSS L4（高度専門・プロ）に相当し、リーダー・上級SE・クラウド/インフラ高度専門に広がる求人傾向と、30〜40代の狙い方を解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/700man/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収700万円の位置づけと到達ルート" },
  { id: "position", label: "年収700万円はITSSのどのレベルか" },
  { id: "jobtag", label: "厚労省job tagでみる700万円クラスの職種" },
  { id: "jobs", label: "700万円に近い職種・役割" },
  { id: "trend", label: "700万円求人で求められる要件" },
  { id: "route", label: "700万円への現実的なルート" },
  { id: "midlife", label: "30〜40代が700万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const jobtagData = [
  { job: "基盤システムSE", salary: "889万円", age: "38.3歳", ratio: "2.28" },
  { job: "システムエンジニア（業務用システム）", salary: "550.5万円", age: "39.8歳", ratio: "1.93" },
  { job: "プロジェクトマネージャー（IT）", salary: "889万円", age: "—", ratio: "2.1" },
];

const route = [
  {
    title: "一人前から『リードする側』へ移る",
    desc: "700万円帯は、自分の作業を一人で回す段階（L3）から、チームの設計や後輩のレビューをリードする段階（L4）への移行ラインです。技術的にチームを引っ張る立場の経験が鍵になります。",
  },
  {
    title: "上流（要件定義・基本設計）を任される",
    desc: "実装だけでなく、要件定義・基本設計・技術選定など上流工程を任された経験が、700万円帯の評価を押し上げます。『何を作るか』に関わる経験が問われます。",
  },
  {
    title: "専門領域を一つ『深い』レベルにする",
    desc: "クラウド・セキュリティ・データ基盤・SREなど、市場で需要が高い領域の専門性を深めると、純開発の延長より700万円帯に届きやすくなります。",
  },
  {
    title: "成果と役割を数値・規模で語る",
    desc: "担当した規模・チーム人数・改善した指標などを数値で語れることが、L3とL4の評価差を生みます。職務経歴書で再現性のある成果として整理しましょう。",
  },
];

const faqs = [
  {
    q: "年収700万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L4（平均726.1万円）に相当し、L3（平均576.0万円）からL4にまたがる帯に位置します（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。L4は『高度専門（プロ）』として、チームの技術をリードしたり高度な専門領域を担う層です。700万円は、一人前から高度専門・リーダー層へ移る境界の年収帯だと言えます。",
  },
  {
    q: "年収700万円に届きやすい職種は何ですか？",
    a: "上級SE、テックリード、チームリーダー、クラウド・インフラの高度専門職、セキュリティ・データ基盤の専門職などです。厚生労働省 job tag（令和7年）では基盤システムSEが約889万円と高めの区分値で示されており、700万円帯はこうした上流・高度専門職の入口に位置します。純粋な実装職の延長というより、設計・技術リード・専門性のいずれかに軸足を移したポジションが中心です。",
  },
  {
    q: "700万円と800万円の違いは何ですか？",
    a: "ITSSでみると、700万円はL4（726.1万円）の中心付近、800万円はL4からL5（937.8万円）にまたがる帯です。700万円は高度専門・リーダーの『入口』、800万円はそこにマネジメントや希少専門性が加わりPM・ITコンサル・クラウド/セキュリティに集中する帯です。700万円→800万円は、技術リードに加えてマネジメントか希少専門のいずれかを強める段階になります。",
  },
  {
    q: "700万円求人ではどんな要件が求められますか？",
    a: "実務5年以上、上流工程（要件定義・基本設計）の経験、チームの技術リードやレビュー経験、特定領域の深い専門性が中心です。マネジメントは必須ではありませんが、リーダー経験があると評価が安定します。『一人で回せる』だけでなく『チームや設計をリードできる』ことが問われます。",
  },
  {
    q: "700万円から年収を上げるには？",
    a: "次の目標は800万円帯です。技術リードに加え、マネジメント経験か希少専門性（クラウド・セキュリティ等）のいずれかを強めることが鍵になります。具体的なルートは年収800万円ページで、年代別の相場は40代の年収相場ページで解説しています。",
  },
];

export default function Salary700Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/700man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収700万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収700万円のエンジニアに必要なスキル・役職・職種【到達ルート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収700万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収700万円は、ITエンジニアにとって「一人前から高度専門・リーダー層へ移る境界」の年収帯です。本記事では、この700万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag（令和7年）など出典付きで整理します。結論として、ITSS L4（高度専門・プロ）に相当し、上級SE・テックリード・クラウド/インフラ高度専門などに広がる年収帯です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "厚生労働省 job tag（令和7年・同一賃金区分の公表値）",
            "doda 職種別",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収700万円の位置づけと到達ルート</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収700万円は、経済産業省のITSSスキル標準レベルでみると<strong>L4（726.1万円）の中心付近</strong>に位置し、L3（576.0万円）からL4にまたがる帯です。L4は「高度専門（プロ）」として、チームの技術をリードしたり高度な専門領域を担う層にあたり、700万円は<strong>一人前から高度専門・リーダー層へ移る境界</strong>の年収帯です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              求人は上級SE・テックリード・チームリーダー・クラウド/インフラ/セキュリティの高度専門職などに広がります。到達ルートは、<strong>一人前からリードする側へ移り</strong>、上流（要件・設計）を任され、専門領域を一つ深いレベルにすることです。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収700万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            700万円の位置を、ITSSレベル別の平均年収の中で確認します。高度専門（プロ）であるL4の中心付近にあたります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">700万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L2</td>
                  <td className="px-4 py-3 border border-slate-200">478.6万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">500万円帯。まだ手前</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L3</td>
                  <td className="px-4 py-3 border border-slate-200">576.0万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">一人前。600万円帯。手前</td>
                </tr>
                <tr className="bg-petrol-soft">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">L4</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">高度専門（プロ）。700万円の中心</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L5</td>
                  <td className="px-4 py-3 border border-slate-200">937.8万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">指導者層。800〜900万円帯。次の目標</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：経済産業省「IT関連産業の給与等に関する実態調査」ITSSスキル標準レベル別 平均年収（IPA ITSSレベル準拠／原典の調査年版は要最終確認）。
          </p>
        </section>

        {/* job tag */}
        <section id="jobtag" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">厚労省job tagでみる700万円クラスの職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公的データでも、700万円前後〜それ以上のクラスの職種が確認できます。厚生労働省 job tag（令和7年）では、次の職種が示されています。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">職種</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年齢</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">求人倍率</th>
                </tr>
              </thead>
              <tbody>
                {jobtagData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.job}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.age}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：厚生労働省 job tag（令和7年）。基盤システムSE・PM（IT）の889万円は<strong>同一賃金区分の公表値</strong>であり、職種ごとに精密に分けた値ではない点に注意してください。700万円帯は、業務用システムSE（約550.5万円）の上、こうした上流・高度専門職（約889万円）の入口に位置します。
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>注記：</strong>700万円ちょうどの公表区分は限られますが、業務用システムSEの区分（約550.5万円）と基盤システムSE・PMの区分（約889万円）の間に位置する帯だと捉えると分かりやすいです。実際の700万円求人は、上級SE・テックリードなど、この移行帯の中で経験・企業規模に応じて分布します。
            </p>
          </div>
        </section>

        {/* 近い職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">700万円に近い職種・役割</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            700万円帯は、実装の延長というより、設計・技術リード・専門性のいずれかに軸足を移したポジションが中心です。代表的なものを挙げます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">上級SE・テックリード</h3>
              <p className="text-sm text-slate-600 leading-relaxed">設計・技術選定をリードし、チームの実装品質を引き上げる役割。700万円帯の中心的なポジションです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">クラウド・インフラ高度専門</h3>
              <p className="text-sm text-slate-600 leading-relaxed">クラウド基盤の設計・運用を主導する専門職。需要の伸びが大きく、専門性が年収に反映されやすい領域です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">SRE・データ基盤エンジニア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">信頼性やデータ基盤を担う専門職。希少性が高く、700万円帯に届きやすい領域です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">チームリーダー・PL</h3>
              <p className="text-sm text-slate-600 leading-relaxed">小〜中規模チームの進行と技術をまとめる役割。マネジメントの入口で、800万円帯への足がかりにもなります。</p>
            </div>
          </div>
        </section>

        {/* 求人傾向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">700万円求人で求められる要件</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              700万円帯の求人で問われるのは、<strong>「チームや設計をリードできるか」</strong>です。実務5年以上、上流工程（要件定義・基本設計）の経験、技術リードやレビュー経験、特定領域の深い専門性が中心になります。マネジメントは必須ではありませんが、リーダー経験があると評価が安定します。一人で回せるだけの段階から、周囲を引き上げ・方針を示せる段階へ移れているかが、700万円帯と500〜600万円帯を分けるポイントです。
            </p>
          </div>
        </section>

        {/* ルート */}
        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">700万円への現実的なルート</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が700万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">『リード経験』を言語化できるか</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                700万円帯では、実装力だけでなく「チームや設計をどうリードしたか」が評価軸になります。30〜40代は、これまでの現場で担った技術リードや設計判断の経験を、面接で語れる形に整理することが到達の前提です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">専門軸かマネジメント軸かを意識し始める</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                700万円は、この先800万円・1000万円へ進むときに「高度専門で行くか、マネジメントで行くか」の分岐が見え始める帯です。30〜40代のうちに自分の強い軸を意識しておくと、次の年収帯への設計がしやすくなります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の相場や汎用的な年収UP戦略は、
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
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
          <h2 className="text-xl font-bold mb-3">700万円帯の求人があるか、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化・ハイクラスエージェントに登録して、あなたのリード経験が活きる700万円求人を確認しましょう。
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
