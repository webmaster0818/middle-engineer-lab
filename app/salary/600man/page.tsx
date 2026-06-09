import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収600万円のエンジニアに必要なスキルレベル・役職・職種【到達条件】";
const DESCRIPTION =
  "年収600万円のITエンジニアに必要なスキルレベル・役職・職種・求人傾向を、経産省ITSSレベルや厚労省job tag、doda職種別データなど出典付きで整理。ITSS L3後半〜L4手前という位置づけと、3年以上の実務＋設計・リーダー経験という到達条件を解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収600万円の位置づけと到達条件" },
  { id: "position", label: "年収600万円はITSSのどのレベルか" },
  { id: "jobs", label: "600万円を超えやすい職種" },
  { id: "skills", label: "600万円に必要なスキル要件" },
  { id: "jobcount", label: "求人ボリュームの傾向（参考値）" },
  { id: "midlife", label: "30〜40代が600万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const jobsData = [
  { job: "プリセールス", salary: "約718万円", note: "技術と提案を橋渡し。600万円台を大きく超える層" },
  { job: "プロジェクトマネージャー（PM）", salary: "約669万円", note: "進行・予算・人の管理。マネジメント評価が反映" },
  { job: "ITコンサルタント", salary: "約625万円", note: "上流の課題解決。600万円帯の入口にあたる職種" },
];

const skills = [
  {
    title: "全般スキルはITSS L2以上",
    desc: "担当工程を独力で完遂できる水準（ITSS L2＝499.2万円相当）を全領域で満たすことが土台になります。穴のない実装・運用力が前提です。",
  },
  {
    title: "得意分野でITSS L3以上",
    desc: "1つ以上の領域で応用・改善ができるL3水準（576.0万円相当）を持つことが、600万円帯への押し上げ要素になります（レベルとスキルの対応は個人見解を含む参考整理）。",
  },
  {
    title: "DB・API・アーキテクチャ設計",
    desc: "実装だけでなく、データベース設計・API設計・全体アーキテクチャの設計に関われることが評価されます。",
  },
  {
    title: "小規模でもリーダー経験",
    desc: "数人規模でもチームを束ねた経験があると、PM・コンサル系の入口職種への接続がよくなります。",
  },
];

const faqs = [
  {
    q: "年収600万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L3（平均576.0万円）の後半から、L4（726.1万円）の手前に位置します（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。公的統計では、厚生労働省 job tagの「システムエンジニア（受託開発）」が平均年収578.5万円・平均年齢37.1歳とされ、600万円はそのやや上に位置づけられます。",
  },
  {
    q: "年収600万円に届きやすい職種は何ですか？",
    a: "doda職種別やHiProの引用値では、プリセールス約718万円、プロジェクトマネージャー約669万円、ITコンサルタント約625万円などが600万円台を超えやすい職種です。純粋な開発職よりも、提案・マネジメント・上流に関わる職種のほうが600万円帯に届きやすい傾向があります。",
  },
  {
    q: "年収600万円になるにはどのくらいの経験が必要ですか？",
    a: "目安として、3年以上の実務経験に加え、DB・API・アーキテクチャの設計経験と、小規模でもリーダー経験が少しあれば射程に入ります。全領域でITSS L2以上、得意分野でL3以上が一つの基準です（レベルとスキルの対応は参考整理）。年齢よりも任せられる範囲が評価軸になります。",
  },
  {
    q: "600万円向けの求人はどのくらいありますか？",
    a: "マイナビなどの求人検索では、WEB系プログラマーで初年度600万円以上の求人が約4,501件、制御系SEで約1,515件といった件数が確認できる場合があります。ただし求人件数は閲覧時点で変動する参考値であり、最新の件数は各サービスの公式サイトでご確認ください。",
  },
  {
    q: "600万円の次は何を目指せばいいですか？",
    a: "600万円に到達したら、次は800万円帯（ITSS L4〜L5の高度専門・指導者層）が目標になります。PM・ITコンサル・クラウド・セキュリティ・プリセールスなど、より上流・希少な職種への展開が鍵です。詳しくは年収800万円の専用ページをご覧ください。",
  },
];

export default function Salary600Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/600man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収600万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収600万円のエンジニアに必要なスキルレベル・役職・職種【到達条件】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収600万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収600万円は、多くのITエンジニアにとって「現実的に狙える最初の節目」です。本記事では、この600万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag、doda職種別データなど出典付きで整理します。結論として、3年以上の実務に設計・リーダー経験が少し加われば射程に入る年収帯です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "厚生労働省 job tag システムエンジニア（受託開発）",
            "doda 職種別 / HiPro 引用値",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収600万円の位置づけと到達条件</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収600万円は、経済産業省のITSSスキル標準レベルでみると<strong>L3（平均576.0万円）の後半からL4（726.1万円）の手前</strong>にあたります。公的統計でも、厚生労働省 job tagの「システムエンジニア（受託開発）」が平均578.5万円・平均年齢37.1歳とされ、600万円はそのやや上の位置です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              到達条件はシンプルです。<strong>3年以上の実務経験</strong>に、<strong>DB・API・アーキテクチャの設計経験</strong>と<strong>小規模でもリーダー経験</strong>が少し加われば射程に入ります。プリセールス・PM・ITコンサルといった上流・提案系の職種に接続できると、600万円帯が一段現実的になります。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収600万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収600万円の「重さ」を理解するために、ITSSレベル別の平均年収の中に位置づけてみます。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">600万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L2</td>
                  <td className="px-4 py-3 border border-slate-200">499.2万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">まだ手前。土台となる水準</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">L3</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">576.0万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">この後半が600万円帯</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L4</td>
                  <td className="px-4 py-3 border border-slate-200">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">600万円のすぐ上。次の目標</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：経済産業省「IT関連産業の給与等に関する実態調査」ITSSスキル標準レベル別 平均年収（IPA ITSSレベル準拠／原典の調査年版は要最終確認）。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">公的統計での裏づけ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              厚生労働省 job tagの「システムエンジニア（受託開発）」は、平均年収578.5万円・平均年齢37.1歳と公表されています。これはITSS L3の平均（576.0万円）とほぼ重なります。つまり600万円は、標準的なSEの平均を少し上回る、現実的に到達可能な節目だと読めます。
            </p>
          </div>
        </section>

        {/* 職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">600万円を超えやすい職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じエンジニアでも、職種によって600万円への近さは変わります。doda職種別やHiProの引用値では、以下の職種が600万円台を超えやすいとされています。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">職種</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                {jobsData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.job}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ doda職種別・HiPro引用値。純粋な開発職より、提案・マネジメント・上流に関わる職種が600万円帯に届きやすい傾向があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">職種を変えずに600万円を狙う場合</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              開発職のまま600万円を目指すこと自体は不可能ではありません。ただしその場合は、得意領域でのITSS L3水準（応用・改善ができるレベル）を明確に示せること、そして給与水準の高い企業・商流の上位に身を置くことが条件になりやすくなります。同じスキルでも、受託の下請け構造の中にいると単価が圧縮され600万円に届きにくくなるため、職種を変えない場合は「どこで働くか」の比重が高まる点を意識しておくとよいでしょう。
            </p>
          </div>
        </section>

        {/* スキル */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">600万円に必要なスキル要件</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            金額から逆算した、600万円に必要なスキル要件は次の4点です。
          </p>
          <div className="space-y-4">
            {skills.map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ ITSSレベルとスキル要件の対応は、Qiita等での個人見解を含む参考整理です。実際の評価は企業・職種により異なります。
          </p>
        </section>

        {/* 求人 */}
        <section id="jobcount" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人ボリュームの傾向（参考値）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            実際にどれくらいの求人があるかも、目標設定の材料になります。マイナビなどの求人検索では、次のような件数が確認できる場合があります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-2xl font-bold text-blue-600 mb-1">約4,501件</p>
              <p className="text-sm text-slate-600">WEB系プログラマーで初年度600万円以上の求人</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-2xl font-bold text-blue-600 mb-1">約1,515件</p>
              <p className="text-sm text-slate-600">制御系SEの求人</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 求人件数はマイナビ等の検索結果に基づく、閲覧時点で変動する参考値です。最新の件数は各サービスの公式サイトでご確認ください。
          </p>
        </section>

        {/* ミドル視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が600万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">設計・リーダー経験の「言語化」がカギ</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                30〜40代の多くは、実は600万円帯に必要なDB・API・設計やリーダー経験をすでに持っています。問題はそれを職務経歴として言語化できているかです。棚卸しができれば、現職よりも提示レンジの高い求人に届きます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「開発のまま」より上流接続で伸ばす</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                純開発職のまま600万円を狙うより、プリセールス・PM・ITコンサルといった上流職種への接続を視野に入れると到達確率が上がります。30〜40代の業務知識はこれらの職種と相性が良い場合があります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の相場や汎用的な年収UP戦略は、
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>
            ・
            <Link href="/purpose/salary-up/" className="text-blue-600 hover:underline">年収アップを目指す転職ガイド</Link>
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
          <h2 className="text-xl font-bold mb-3">600万円が射程か、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化エージェントに登録して、いまのスキルで600万円求人に届くかを客観的に確認しましょう。
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
              { name: "年収を上げる転職の全体地図（TOP）", href: "/salary/" },
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
              { name: "年収1000万円エンジニアの必要スキル", href: "/salary/1000man/" },
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "年収アップに強いエージェント比較", href: "/compare/salary-ranking/" },
              { name: "年収アップを目指す転職ガイド", href: "/purpose/salary-up/" },
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
