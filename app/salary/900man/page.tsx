import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収900万円のエンジニアに必要なスキル・役職・職種【到達ルート】";
const DESCRIPTION =
  "年収900万円のITエンジニアに必要なスキルレベル・役職・職種・求人傾向を、経産省ITSSレベルや厚労省job tag（令和7年）など出典付きで整理。ITSS L5（指導者層）に相当し、PM・ITコンサル・スペシャリスト・マネージャーに集中する求人傾向と、30〜40代の現実的な狙い方を解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収900万円の位置づけと到達ルート" },
  { id: "position", label: "年収900万円はITSSのどのレベルか" },
  { id: "jobtag", label: "厚労省job tagでみる900万円クラスの職種" },
  { id: "jobs", label: "900万円に近い職種・役割" },
  { id: "trend", label: "900万円求人で求められる要件" },
  { id: "route", label: "900万円への現実的なルート" },
  { id: "midlife", label: "30〜40代が900万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const jobtagData = [
  { job: "基盤システムSE", salary: "889万円", age: "38.3歳", ratio: "2.28" },
  { job: "プロジェクトマネージャー（IT）", salary: "889万円", age: "—", ratio: "2.1" },
  { job: "ITコンサルタント", salary: "889万円", age: "—", ratio: "0.89" },
];

const route = [
  {
    title: "技術リードから『指導者・統括』の立場へ",
    desc: "900万円帯は、ITSSのL5（社内をリードする指導者層）にあたります。チームの技術リード（L4）から、複数チームや組織の方針・人を統括する立場へ移る経験が問われます。",
  },
  {
    title: "マネジメントか希少スペシャリストの軸を確立する",
    desc: "PM・エンジニアリングマネージャーのマネジメント軸か、アーキテクト・セキュリティ・データなどの希少スペシャリスト軸か、自分の軸を明確に確立することが900万円帯の前提です。",
  },
  {
    title: "事業・経営への接続を意識する",
    desc: "技術判断が事業成果（売上・コスト・リスク）にどう効くかを語れることが、900万円帯では評価を左右します。技術を経営の言葉に翻訳する力が問われ始めます。",
  },
  {
    title: "成果を組織規模・事業インパクトで語る",
    desc: "個人の成果ではなく、率いたチーム規模・事業への貢献・改善した経営指標で語れることが、L4とL5の評価差を生みます。",
  },
];

const faqs = [
  {
    q: "年収900万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L5（平均937.8万円）に相当します（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。L5は『社内をリードするハイレベルな専門家・管理者』の指導者層であり、900万円は技術リード（L4）から指導者・統括層（L5）へ移った位置の年収帯だと言えます。L4の726.1万円とL6・7の1,129.9万円の間にあたります。",
  },
  {
    q: "年収900万円に届きやすい職種は何ですか？",
    a: "プロジェクトマネージャー、ITコンサルタント、エンジニアリングマネージャー、アーキテクト、セキュリティ・データの高度スペシャリストなどです。厚生労働省 job tag（令和7年）では基盤システムSE・PM（IT）・ITコンサルタントがいずれも約889万円と、900万円に近い区分値で示されています。純粋な開発職の延長ではなく、マネジメントか希少スペシャリストに軸足を置いた職種が中心です。",
  },
  {
    q: "基盤SE・PM・ITコンサルが同じ889万円なのはなぜですか？",
    a: "厚生労働省 job tagでは、これらが同一の賃金区分に分類されており、889万円はその区分の公表値です。職種ごとに精密に分けた値ではなく『同一区分の公表値』である点に注意が必要です。求人倍率は基盤システムSE 2.28、PM（IT）2.1、ITコンサルタント0.89と差があり、需給バランスは職種で異なります。",
  },
  {
    q: "900万円求人ではどんな要件が求められますか？",
    a: "実務10年前後、複数チーム・組織を統括した経験、PMやエンジニアリングマネージャーとしてのマネジメント経験、またはアーキテクト・セキュリティ等の希少な高度専門性が中心です。技術力に加え、事業・経営への接続や人の統括が問われ始める帯で、純粋な実装力だけでは届きにくくなります。",
  },
  {
    q: "900万円から1000万円・1200万円へはどう進む？",
    a: "1000万円以降は、外資・上場メガベンチャー・管理職・希少スペシャリストなど、限られた層になっていきます。900万円で確立したマネジメントまたはスペシャリストの軸をさらに深め、事業インパクトで成果を語れるようにすることが鍵です。具体的なルートは年収1000万円・1200万円ページで解説しています。",
  },
];

export default function Salary900Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/900man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収900万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収900万円のエンジニアに必要なスキル・役職・職種【到達ルート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収900万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収900万円は、ITエンジニアにとって「指導者・統括層」の年収帯です。本記事では、この900万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag（令和7年）など出典付きで整理します。結論として、ITSS L5（指導者層）に相当し、PM・ITコンサル・エンジニアリングマネージャー・希少スペシャリストに集中する年収帯です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収900万円の位置づけと到達ルート</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収900万円は、経済産業省のITSSスキル標準レベルでみると<strong>L5（937.8万円）</strong>に相当します。L5は「社内をリードするハイレベルな専門家・管理者」の指導者層にあたり、900万円は<strong>技術リード（L4）から指導者・統括層（L5）へ移った位置</strong>の年収帯です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              求人はPM・ITコンサル・エンジニアリングマネージャー・アーキテクト・希少スペシャリストに集中します。到達ルートは、<strong>マネジメントか希少スペシャリストの軸を確立し</strong>、技術判断を事業成果に接続し、成果を組織規模・事業インパクトで語れるようにすることです。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収900万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            900万円の位置を、ITSSレベル別の平均年収の中で確認します。指導者層であるL5の中心付近にあたります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">900万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L3</td>
                  <td className="px-4 py-3 border border-slate-200">576.0万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">一人前。600万円帯。手前</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L4</td>
                  <td className="px-4 py-3 border border-slate-200">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">高度専門。700万円帯。手前</td>
                </tr>
                <tr className="bg-petrol-soft">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">L5</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">937.8万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">指導者層。900万円の中心</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L6・7</td>
                  <td className="px-4 py-3 border border-slate-200">1,129.9万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">最上位。1000万円帯。次の目標</td>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">厚労省job tagでみる900万円クラスの職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公的データでも、900万円に近いクラスの職種が確認できます。厚生労働省 job tag（令和7年）では、次の職種が示されています。
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
            ※ 出典：厚生労働省 job tag（令和7年）。基盤システムSE・PM（IT）・ITコンサルタントの889万円は<strong>同一賃金区分の公表値</strong>であり、職種ごとに精密に分けた値ではない点に注意してください。求人倍率は職種で差があります（基盤SE 2.28／PM 2.1／コンサル 0.89）。
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>注記：</strong>889万円は900万円のすぐ手前の区分値です。実際の900万円求人は、この区分に近い指導者・統括クラスの職種の中で、経験・企業規模・事業成果に応じて分布します。区分値は「このクラスの職種が900万円前後に実在する」ことの裏づけとして参照してください。
            </p>
          </div>
        </section>

        {/* 近い職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">900万円に近い職種・役割</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            900万円帯は、マネジメントか希少スペシャリストに軸足を置いた職種が中心です。代表的なものを挙げます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">プロジェクトマネージャー（PM）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">大規模・重要プロジェクトの統括。進行・予算・人の総合マネジメントが評価される、900万円帯の中心的職種です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">エンジニアリングマネージャー</h3>
              <p className="text-sm text-slate-600 leading-relaxed">エンジニア組織の採用・育成・評価・技術方針を担う役割。人と技術の両面のマネジメントが900万円帯に接続します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ソフトウェアアーキテクト</h3>
              <p className="text-sm text-slate-600 leading-relaxed">システム全体の設計方針を統括する高度専門職。希少性が高く、スペシャリスト軸で900万円帯に届く代表例です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">セキュリティ・データの高度専門職</h3>
              <p className="text-sm text-slate-600 leading-relaxed">需要に対し供給が少ない希少領域のスペシャリスト。専門性の高さがそのまま年収に反映されやすい職種です。</p>
            </div>
          </div>
        </section>

        {/* 求人傾向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">900万円求人で求められる要件</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              900万円帯の求人で問われるのは、<strong>「組織を統括できるか、希少な高度専門性を持つか」</strong>です。実務10年前後、複数チーム・組織を統括したマネジメント経験、またはアーキテクト・セキュリティ等の希少な専門性が中心になります。加えて、技術判断を事業成果（売上・コスト・リスク）に接続して語れることが評価を左右します。純粋な実装力の延長では届きにくく、マネジメントかスペシャリストのいずれかに軸足を定められているかが分岐点です。
            </p>
          </div>
        </section>

        {/* ルート */}
        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">900万円への現実的なルート</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が900万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">『マネジメント軸かスペシャリスト軸か』を決め切る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                900万円帯では「どちらも中途半端」が最も評価されにくくなります。30〜40代のこれまでの経験から、PM・EMのマネジメント軸か、アーキテクト・セキュリティ等のスペシャリスト軸か、自分の軸を決め切ることが到達の前提です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術を『事業の言葉』に翻訳できるか</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                900万円帯から先は、技術判断が事業にどう効くかを語れることが重要になります。30〜40代のうちに、自分の技術的な意思決定を売上・コスト・リスクの観点で説明する練習をしておくと、上位帯への設計がしやすくなります。
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
          <h2 className="text-xl font-bold mb-3">900万円帯の求人があるか、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス・IT特化エージェントに登録して、あなたの軸が活きる900万円求人を確認しましょう。
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
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
              { name: "年収1000万円エンジニアの必要スキル", href: "/salary/1000man/" },
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
