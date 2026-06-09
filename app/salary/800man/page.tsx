import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収800万円のエンジニアに必要なスキル・役職・職種【到達ルート】";
const DESCRIPTION =
  "年収800万円のITエンジニアに必要なスキルレベル・役職・職種・求人傾向を、経産省ITSSレベルや厚労省job tag（令和7年）など出典付きで整理。ITSS L4〜L5の高度専門・指導者層という位置づけと、PM・ITコンサル・クラウド・セキュリティに集中する求人傾向を解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収800万円の位置づけと到達ルート" },
  { id: "position", label: "年収800万円はITSSのどのレベルか" },
  { id: "jobtag", label: "厚労省job tagでみる800万円クラスの職種" },
  { id: "jobs", label: "800万円に近い職種（doda）" },
  { id: "trend", label: "800万円求人の傾向" },
  { id: "route", label: "800万円への現実的なルート" },
  { id: "midlife", label: "30〜40代が800万円を狙うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const jobtagData = [
  { job: "基盤システムSE", salary: "889万円", age: "38.3歳", ratio: "求人倍率 2.28" },
  { job: "プロジェクトマネージャー（IT）", salary: "889万円", age: "—", ratio: "求人倍率 2.1" },
  { job: "ITコンサルタント", salary: "889万円", age: "—", ratio: "求人倍率 0.89" },
];

const route = [
  {
    title: "段階的にアップする（一気は警戒される）",
    desc: "現年収から800万円へ一気に飛ぶ希望は、選考で警戒されやすくなります。600万円→700万円→800万円と1段ずつ積み上げる設計のほうが、提示につながりやすいです。",
  },
  {
    title: "プログラミング＋マネジメントの両輪",
    desc: "純開発だけでは800万円帯の上流職種に接続しにくくなります。実装力に加え、チーム・進行・予算のマネジメント経験を重ねることが鍵です。",
  },
  {
    title: "方針提案・意思決定に関わる",
    desc: "言われた通り作るだけでなく、技術方針や課題解決の提案に関わった経験が、ITコンサル・プリセールス・PM系の評価を押し上げます。",
  },
  {
    title: "成果を数値化して語る",
    desc: "「コストを何%削減」「障害を何件削減」など、成果を数値で語れることが、高年収帯の交渉力を左右します。",
  },
];

const faqs = [
  {
    q: "年収800万円のエンジニアはITSSのどのレベルですか？",
    a: "おおむねITSS L4（平均726.1万円）からL5（937.8万円）の間に位置します（経済産業省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。L4は高度専門（プロ）、L5は社内をリードするハイレベルな専門家・管理者層であり、800万円は高度専門・指導者層の年収帯だと言えます。",
  },
  {
    q: "年収800万円に届きやすい職種は何ですか？",
    a: "厚生労働省 job tag（令和7年）では、基盤システムSE・プロジェクトマネージャー（IT）・ITコンサルタントがいずれも889万円という同一賃金区分の公表値で示されています。dodaの職種別ではPMの最高層、次いでプリセールス、セキュリティコンサルタント／アナリストなどが800万円に近い職種です。純開発職より、上流・希少な専門職に集中する傾向があります。",
  },
  {
    q: "基盤SE・PM・ITコンサルが同じ889万円なのはなぜですか？",
    a: "厚生労働省 job tagでは、これらが同一の賃金区分に分類されており、889万円はその区分の公表値です。職種ごとに精密に分けた値ではなく「同一区分の公表値」である点に注意が必要です。求人倍率は基盤システムSE 2.28、PM（IT）2.1、ITコンサルタント0.89と差があり、需給バランスは職種で異なります。",
  },
  {
    q: "800万円求人にはどんな傾向がありますか？",
    a: "PM・ITコンサル・クラウド・セキュリティ・プリセールスといった、上流または希少な専門領域に集中する傾向があります。純粋な開発職の延長線上というより、マネジメントや高度専門に軸足を移したポジションが中心です。",
  },
  {
    q: "800万円に届くための現実的なルートは？",
    a: "一気に大幅増を狙うと警戒されやすいため、600万円→700万円→800万円と段階的に上げるのが現実的です。プログラミング力に加え、マネジメント経験・方針提案の経験を積み、成果を数値で語れるようにすることが鍵になります。次の目標である1000万円帯のルートは専用ページで解説しています。",
  },
];

export default function Salary800Page() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/800man/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド", href: "/salary/" },
          { name: "年収800万円の必要スキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収800万円のエンジニアに必要なスキル・役職・職種【到達ルート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「金額→必要スキル・役職・職種」で読む年収800万円
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          年収800万円は、ITエンジニアにとって「高度専門・指導者層」の入口です。本記事では、この800万円という金額が<strong>どのスキルレベル・役職・職種に対応するのか</strong>を、経産省ITSSレベル別平均年収や厚労省job tag（令和7年）など出典付きで整理します。結論として、ITSS L4〜L5に相当し、PM・ITコンサル・クラウド・セキュリティといった上流・希少な専門職に集中する年収帯です。
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
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収800万円の位置づけと到達ルート</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収800万円は、経済産業省のITSSスキル標準レベルでみると<strong>L4（726.1万円）からL5（937.8万円）の間</strong>に位置します。L4は高度専門（プロ）、L5は社内をリードするハイレベル専門家・管理者層にあたり、800万円は<strong>高度専門・指導者層</strong>の年収帯です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              求人はPM・ITコンサル・クラウド・セキュリティ・プリセールスといった上流・希少な専門職に集中します。到達ルートは、一気に大幅増を狙うのではなく、<strong>段階的なアップ</strong>。プログラミング力に、マネジメント・方針提案・成果の数値化を積み上げることが鍵になります。
            </p>
          </div>
        </section>

        {/* 位置づけ */}
        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収800万円はITSSのどのレベルか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            800万円の位置を、ITSSレベル別の平均年収の中で確認します。600万円帯（L3後半〜L4手前）の一段上にあたります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">800万円との関係</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L3</td>
                  <td className="px-4 py-3 border border-slate-200">576.0万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">600万円帯。まだ手前</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">L4</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">726.1万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">高度専門。800万円の下限側</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">L5</td>
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">937.8万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-700 font-medium">指導者層。800万円の上限側</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-slate-500">L6・7</td>
                  <td className="px-4 py-3 border border-slate-200">1,129.9万円</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">1000万円帯。次の目標</td>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">厚労省job tagでみる800万円クラスの職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公的データでも、800万円台を超えるクラスの職種が確認できます。厚生労働省 job tag（令和7年）では、次の職種が示されています。
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
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.ratio.replace("求人倍率 ", "")}</td>
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
              <strong>注記：</strong>889万円は800万円を上回る区分値です。実際の800万円求人は、この区分に近い高度専門・上流職種の中で、経験・企業規模に応じて分布します。区分値はあくまで「このクラスの職種が存在する」ことの裏づけとして参照してください。
            </p>
          </div>
        </section>

        {/* doda職種 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">800万円に近い職種（doda）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            dodaの職種別データでは、800万円に近い職種として次が挙げられます。いずれも純開発の延長というより、マネジメントや高度専門に軸足を置いた職種です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">プロジェクトマネージャー（最高層）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">大規模・重要プロジェクトの統括。進行・予算・人の総合的なマネジメントが評価される、800万円帯の中心的職種です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">プリセールス</h3>
              <p className="text-sm text-slate-600 leading-relaxed">技術と提案の橋渡し。顧客課題を技術で解く提案力が高く評価され、高年収帯に届きやすい職種です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">セキュリティコンサルタント／アナリスト</h3>
              <p className="text-sm text-slate-600 leading-relaxed">需要に対し供給が少ない希少領域。専門性の高さがそのまま年収に反映されやすい職種です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">クラウド系の高度専門職</h3>
              <p className="text-sm text-slate-600 leading-relaxed">クラウド基盤の設計・運用を主導するポジション。需要の伸びが大きく、800万円帯への接続がよい領域です。</p>
            </div>
          </div>
        </section>

        {/* 求人傾向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">800万円求人の傾向</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              800万円帯の求人は、<strong>PM・ITコンサル・クラウド・セキュリティ・プリセールス</strong>に集中します。共通するのは「純粋な開発職よりも、上流または希少な専門領域である」という点です。実装力だけで到達するのは難しく、マネジメントか高度専門のいずれかに軸足を移したポジションが中心になります。逆に言えば、自分の軸をこのいずれかに定められれば、800万円帯の求人が見えてきます。
            </p>
          </div>
        </section>

        {/* ルート */}
        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">800万円への現実的なルート</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代が800万円を狙うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「マネジメントか高度専門か」の軸を決める</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                800万円帯では「どちらも中途半端」が最も評価されにくくなります。30〜40代のこれまでの経験から、PM・コンサル系のマネジメント軸か、クラウド・セキュリティ等の高度専門軸か、自分の強い軸を言語化することが到達の前提です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">段階的アップで「警戒」を避ける</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                現年収から一気に800万円を希望すると、ミドル層ほど選考で警戒されやすくなります。600万円帯で設計・リーダー経験を固め、次に上流・専門に移るという段階設計が、結果的に近道になります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の相場や汎用的な年収UP戦略は、
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>
            ・
            <Link href="/purpose/salary-up/" className="text-blue-600 hover:underline">年収アップを目指す転職ガイド</Link>
            ・
            <Link href="/compare/salary-ranking/" className="text-blue-600 hover:underline">年収アップに強いエージェント比較</Link>
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
          <h2 className="text-xl font-bold mb-3">800万円帯の求人があるか、無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス・IT特化エージェントに登録して、あなたの軸が活きる800万円求人を確認しましょう。
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
              { name: "年収1000万円エンジニアの必要スキル", href: "/salary/1000man/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
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
