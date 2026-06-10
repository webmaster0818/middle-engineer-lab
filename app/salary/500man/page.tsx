import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収500万円のエンジニアに必要なスキル・役職・職種【到達ルート】";
const DESCRIPTION =
  "年収500万円のITエンジニアに必要なスキルレベル・役職・職種・求人傾向を、経産省ITSSレベルや厚労省job tag（令和7年）など出典付きで整理。ITSS L3を中心とした一人前〜中堅層という位置づけと、Web系開発・社内SE・インフラに広がる求人傾向、30〜40代の狙い方を解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収500万円の位置づけと到達ルート" },
  { id: "position", label: "年収500万円はITSSのどのレベルか" },
  { id: "jobtag", label: "厚労省job tagでみる500万円クラスの職種" },
  { id: "jobs", label: "500万円に近い職種・働き方" },
  { id: "trend", label: "500万円求人で求められる要件" },
  { id: "route", label: "500万円への現実的なルート" },
  { id: "midlife", label: "30〜40代が500万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const jobtagData = [
  { job: "システムエンジニア（業務用システム）", salary: "550.5万円", age: "39.8歳", ratio: "1.93" },
  { job: "Webサイト開発者（プログラマー）", salary: "510.3万円", age: "37.4歳", ratio: "1.66" },
  { job: "運用・管理（システム運用）", salary: "486.9万円", age: "41.3歳", ratio: "—" },
];

const route = [
  {
    title: "まずは『一人前』として一人で任される状態に",
    desc: "500万円帯は、設計から実装・テストまでを一人で回せる「一人前」のラインです。先輩の指示待ちではなく、与えられた機能を自走して完成させられる状態を作ることが起点になります。",
  },
  {
    title: "得意領域（言語・基盤）を一つ深める",
    desc: "Web系・業務システム・インフラなど、自分が強みを語れる領域を一つ持つと、評価と提示年収が安定します。広く浅くより、軸を一つ深めるほうが500万円帯では効きます。",
  },
  {
    title: "上流（要件・設計）に少しずつ関わる",
    desc: "実装だけでなく、要件定義や基本設計の一部に関わった経験が、次の600万円帯への接続を作ります。500万円帯は『実装中心から上流に足を踏み入れる』移行期でもあります。",
  },
  {
    title: "実績を職務経歴書で語れる形にする",
    desc: "担当工程・規模・使用技術・役割を整理し、面接で再現性のある成果として語れるようにすることが、相場どおりの提示を引き出す近道です。",
  },
];

const faqs = [
  {
    q: "年収500万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L3（平均576.0万円）を中心に、L2（平均478.6万円）からL3にまたがる帯に位置します（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。L3は『要求された作業を独力で遂行できる』中堅・一人前のレベルにあたり、500万円は実務を一人で回せる中堅層の年収帯だと言えます。",
  },
  {
    q: "年収500万円に届きやすい職種は何ですか？",
    a: "厚生労働省 job tag（令和7年）では、システムエンジニア（業務用システム）が約550.5万円、Webサイト開発者（プログラマー）が約510.3万円と、500万円前後の公表値が示されています。Web系開発・業務システムSE・社内SE・インフラ運用など、幅広い職種が500万円帯に分布します。特定の希少スキルがなくても、実務経験の積み上げで届きやすいのが特徴です（出典付き公表値。企業規模・経験で変動します）。",
  },
  {
    q: "500万円は平均より高いですか低いですか？",
    a: "国税庁「民間給与実態統計調査（令和5年分）」によると給与所得者全体の平均給与は約460万円で、IT・情報通信業はこれより高めの水準にあります。エンジニアにとって500万円は『業界内では中堅クラスの入口、全産業平均と比べるとやや上』という位置づけです。低くも極端に高くもない、実務経験で現実的に狙える年収帯です（出典：国税庁 民間給与実態統計調査 令和5年分）。",
  },
  {
    q: "500万円求人ではどんな要件が求められますか？",
    a: "実務3〜5年程度の経験、特定言語や基盤での自走できる実装力、設計の一部を任せられる素地が中心です。マネジメント経験は必須ではなく、まずは『一人で任せられる即戦力か』が問われます。求人によってはチームリーダーやレビュー経験があると評価が上がります。",
  },
  {
    q: "500万円から年収を上げるには？",
    a: "次の目標は600万円帯です。設計・要件定義などの上流経験を増やし、得意領域を一つ深めることが鍵になります。具体的なルートは年収600万円ページで、年代別の相場は40代の年収相場ページで解説しています。",
  },
];

export default function Salary500Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/500man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収500万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収500万円のエンジニアに必要なスキル・役職・職種【到達ルート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収500万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収500万円は、ITエンジニアにとって「実務を一人で回せる中堅層」の年収帯です。本記事では、この500万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag（令和7年）など出典付きで整理します。結論として、ITSS L3を中心とした一人前〜中堅層に相当し、Web系開発・業務システムSE・社内SE・インフラ運用など幅広い職種に広がる、実務経験で現実的に狙える年収帯です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "厚生労働省 job tag（令和7年・同一賃金区分の公表値）",
            "国税庁 民間給与実態統計調査（令和5年分）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収500万円の位置づけと到達ルート</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収500万円は、経済産業省のITSSスキル標準レベルでみると<strong>L2（478.6万円）からL3（576.0万円）にまたがる帯</strong>に位置します。L3は「要求された作業を独力で遂行できる」中堅・一人前のレベルにあたり、500万円は<strong>実務を一人で回せる中堅層</strong>の年収帯です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              求人はWeb系開発・業務システムSE・社内SE・インフラ運用など幅広く分布し、特定の希少スキルがなくても実務経験の積み上げで届きやすいのが特徴です。到達ルートは、まず<strong>一人で任せられる即戦力</strong>になり、得意領域を一つ深め、上流（要件・設計）に少しずつ関わっていくことです。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収500万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            500万円の位置を、ITSSレベル別の平均年収の中で確認します。一人前として独力で作業を遂行できるL3を中心とした帯にあたります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">500万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L1</td>
                  <td className="px-4 py-3 border border-slate-200">438.6万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">入門・新人。500万円の手前</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">L2</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">478.6万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">上位者の指導下で遂行。500万円の下限側</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">L3</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">576.0万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">独力で遂行できる一人前。500万円の中心〜上限側</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L4</td>
                  <td className="px-4 py-3 border border-slate-200">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">高度専門。700万円帯。次の目標の先</td>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">厚労省job tagでみる500万円クラスの職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公的データでも、500万円前後の職種が確認できます。厚生労働省 job tag（令和7年）では、次の職種が示されています。
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
                    <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.age}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：厚生労働省 job tag（令和7年）。各値は同一賃金区分の公表値であり、職種ごとに精密に分けた値ではない点に注意してください。実際の年収は企業規模・経験・地域で変動します。
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>注記：</strong>システムエンジニアの550.5万円は500万円をやや上回る区分値です。実際の500万円求人は、この区分に近い中堅職種の中で、経験・企業規模に応じて分布します。区分値は「このクラスの職種が500万円前後に実在する」ことの裏づけとして参照してください。
            </p>
          </div>
        </section>

        {/* 近い職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">500万円に近い職種・働き方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            500万円帯は、特定の希少職種に偏らず、実務を一人で回せる中堅職種に広く分布します。代表的なものを挙げます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">Web系アプリケーション開発者</h3>
              <p className="text-sm text-slate-600 leading-relaxed">フロント・バックエンドの実装を一人で担う中堅エンジニア。言語・フレームワークの実装力が評価され、500万円帯の中心となる職種です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">業務システムSE</h3>
              <p className="text-sm text-slate-600 leading-relaxed">基幹・業務システムの開発を担当。設計の一部に関わり始めるポジションで、500万円帯から上流への移行口になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">社内SE</h3>
              <p className="text-sm text-slate-600 leading-relaxed">事業会社の情報システム部門で社内システムを支える職種。安定性が高く、ワークライフバランスを重視するミドル層に人気の選択肢です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">インフラ・運用エンジニア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">サーバー・ネットワークの構築・運用を担う職種。運用から構築・自動化へ広げることで500万円帯に届きやすい領域です。</p>
            </div>
          </div>
        </section>

        {/* 求人傾向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">500万円求人で求められる要件</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              500万円帯の求人で問われるのは、まず<strong>「一人で任せられる即戦力かどうか」</strong>です。実務3〜5年程度の経験、特定言語や基盤での自走できる実装力、設計の一部を任せられる素地が中心になります。マネジメント経験は必須ではなく、PM・コンサルのような上流専門職に移る必要もありません。逆に言えば、現場の実装を確実にこなし、得意領域を一つ語れれば、500万円帯の求人は幅広く見えてきます。
            </p>
          </div>
        </section>

        {/* ルート */}
        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">500万円への現実的なルート</h2>
          <div className="space-y-4">
            {route.map((r, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が500万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経験年数に見合う相場かを確認する</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                30〜40代で実務経験がある場合、500万円は『相場どおり』か『やや控えめ』のことが多い帯です。現職が相場より低いなら、同じ実装スキルでも転職で500万円台に届く余地があります。まずは自分の市場価値を把握することが起点になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">上流への足がかりを意識する</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                500万円帯は、実装中心から要件・設計などの上流に足を踏み入れる移行期です。30〜40代は、ここで上流経験を少しでも積むことが、次の600万円帯・700万円帯への分岐点になります。
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
          <h2 className="text-xl font-bold mb-3">500万円帯の求人があるか、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化エージェントに登録して、あなたの実務経験が活きる500万円求人を確認しましょう。
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
              { name: "年収600万円エンジニアの必要スキル", href: "/salary/600man/" },
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
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
