import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "派遣エンジニアから正社員になる道｜紹介予定派遣・無期雇用派遣の比較",
  description:
    "派遣エンジニアが正社員になるための4つのルート（派遣先登用・紹介予定派遣・無期雇用派遣・転職）を解説。紹介予定派遣の直接雇用化率や派遣労働者数など厚労省の集計値をもとに、正社員化の現実的な道筋を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：派遣は『正社員への通過点』として設計できる" },
  { id: "what", label: "派遣の制度（派遣元との労働契約・3年ルール）" },
  { id: "routes", label: "正社員になる4つのルート" },
  { id: "shoukai", label: "紹介予定派遣の直接雇用化率（約56.5%）" },
  { id: "data", label: "派遣労働者の規模・賃金データ" },
  { id: "compare-routes", label: "4ルートの比較（安定度・待遇・スピード）" },
  { id: "strategy", label: "正社員化を成功させる進め方" },
  { id: "middle", label: "30代・40代が派遣から正社員を目指す視点" },
  { id: "faq", label: "よくある質問" },
];

const routeCompare: { route: string; stable: string; treat: string; speed: string }[] = [
  { route: "派遣先での正社員登用", stable: "◯（直接雇用になれば高い）", treat: "◯（正社員待遇）", speed: "△（評価・タイミング次第）" },
  { route: "紹介予定派遣", stable: "◯（前提が直接雇用）", treat: "◯（正社員待遇が多い）", speed: "◯（原則最長6か月で判断）" },
  { route: "無期雇用派遣", stable: "◯（派遣元と無期契約）", treat: "△（派遣先正社員ではない）", speed: "◯（切替で早い）" },
  { route: "正社員転職", stable: "◯（直接雇用）", treat: "◯（条件交渉可）", speed: "△（活動期間が必要）" },
];

const routes = [
  {
    title: "① 派遣先での正社員登用",
    desc: "就業中の派遣先が、派遣社員を直接雇用（正社員・契約社員）として迎える道。実務で評価されれば声がかかることもあります。同一組織単位での派遣就業は原則3年が上限のため、その節目が登用の検討タイミングになりやすいです。",
  },
  {
    title: "② 紹介予定派遣",
    desc: "最初から直接雇用を前提に、一定期間（原則最長6か月）派遣として働き、双方合意のうえで直接雇用に移行する仕組み。実際に働いて相性を確認してから正社員化を判断できるのが最大の利点です。",
  },
  {
    title: "③ 無期雇用派遣（正社員型派遣）",
    desc: "派遣元（派遣会社）と無期労働契約を結ぶ形態。派遣先が変わっても派遣元との雇用は続くため、雇用そのものは安定します。『正社員』ではなく派遣元の無期雇用社員という位置づけですが、有期派遣より安定度が高い選択肢です。",
  },
  {
    title: "④ 転職（正社員求人へ応募）",
    desc: "派遣で積んだ実務経験を武器に、正社員求人へ直接応募する道。実務経験は正社員転職でも評価されるため、待遇改善を最短で狙うなら有力です。転職エージェントで市場価値を把握してから動くのが効率的です。",
  },
];

const dataRows: [string, string][] = [
  ["派遣労働者総数", "約215万人（うち無期 828,638人／有期 1,317,815人）"],
  ["派遣労働者の賃金（平均）", "1日8時間換算で平均 15,968円"],
  ["派遣料金（平均）", "1日8時間換算で平均 24,909円"],
  ["紹介予定派遣の直接雇用化率", "約56.5%（26,313人中14,865人が直接雇用）"],
];

const faqs = [
  {
    q: "派遣エンジニアから正社員になれますか？",
    a: "なれます。主なルートは4つで、①派遣先での正社員登用、②紹介予定派遣、③無期雇用派遣（正社員型派遣）、④実務経験を武器にした正社員転職です。特に紹介予定派遣は直接雇用を前提とした仕組みで、厚生労働省の令和4年度集計では直接雇用化率が約56.5%（26,313人中14,865人）とされています（※原表の数値は引用時点の集計値で、最終的な数値は厚労省PDF原表でご確認ください。2026年6月時点引用）。",
  },
  {
    q: "紹介予定派遣はどのくらいの確率で直接雇用になりますか？",
    a: "厚生労働省の令和4年度の集計では、紹介予定派遣を経て直接雇用に結びついた割合は約56.5%でした（26,313人中14,865人が直接雇用）。半数強が直接雇用に至っている計算です。ただしこれは制度全体の集計値であり、個別の案件・本人の評価・企業の状況で結果は変わります（※2026年6月時点引用。原表は厚労省資料を最終確認推奨）。",
  },
  {
    q: "無期雇用派遣は正社員と同じですか？",
    a: "厳密には異なります。無期雇用派遣は『派遣元（派遣会社）と無期労働契約を結ぶ』形態で、派遣先が変わっても派遣元との雇用は継続するため雇用は安定します。ただし雇用主はあくまで派遣会社で、派遣先企業の正社員になるわけではありません。『有期派遣より安定しているが、派遣先正社員とは別物』と理解するのが正確です。",
  },
  {
    q: "派遣の3年ルールとは何ですか？",
    a: "労働者派遣法では、同一の組織単位（課などの単位）で派遣社員が働ける期間は原則3年が上限です。この期限が近づくと、派遣先での直接雇用、別の組織単位への異動、無期雇用派遣への切り替えなどが検討されます。正社員化を考えるうえで重要な節目になります。",
  },
  {
    q: "派遣エンジニアの平均賃金はどのくらいですか？",
    a: "厚生労働省の令和4年度集計では、派遣労働者の賃金は1日8時間換算で平均15,968円、派遣料金（派遣先が派遣元に支払う額）は平均24,909円とされています。賃金と料金の差は、派遣元の社会保険料負担・運営費・利益などに充てられます（出典：厚生労働省 令和4年度集計）。",
  },
  {
    q: "派遣から正社員を目指すなら、どのルートが有利ですか？",
    a: "目的によります。実際に働いて相性を見てから正社員化したいなら紹介予定派遣、まず雇用の安定を得たいなら無期雇用派遣、待遇改善を最短で狙うなら実務経験を武器にした正社員転職が有力です。複数のルートを並行して検討し、現職に残る場合と転職する場合を比較するのが現実的です。",
  },
  {
    q: "派遣の経験は正社員転職で評価されますか？",
    a: "評価されます。派遣として担当した開発・設計・運用の経験は、実務経験として正社員転職でもカウントされるのが一般的です。職務経歴書で担当領域・使用技術・成果を具体的に示せば、雇用形態を理由に不利になることは限定的です。",
  },
];

export default function DispatchPage() {
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
      <ArticleJsonLd
        title="派遣エンジニアから正社員になる道｜紹介予定派遣・無期雇用派遣の比較"
        description="派遣エンジニアが正社員になる4つのルートを解説。紹介予定派遣の直接雇用化率や派遣労働者数など厚労省集計値をもとに、正社員化の現実的な道筋を整理します。"
        url="/employment/dispatch/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド", href: "/employment/" },
          { name: "派遣→正社員" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          派遣エンジニアから正社員になる道｜紹介予定派遣・無期雇用派遣の比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 厚労省集計値で正社員化の道筋を整理
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          派遣エンジニアとして働く人の多くが、いずれ「正社員になりたい」と考えます。派遣は不安定と思われがちですが、実は<strong>正社員への通過点として設計できる働き方</strong>です。本記事では、正社員になるための4つのルートを整理し、紹介予定派遣の直接雇用化率（約56.5%）や派遣労働者の規模・賃金など、厚生労働省の集計値をもとに現実的な道筋を示します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 労働者派遣事業報告（令和4年度集計）",
            "厚生労働省 紹介予定派遣に関する集計",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：派遣は「正社員への通過点」として戦略的に使える</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              派遣から正社員になる道は1つではありません。なかでも<strong>紹介予定派遣は直接雇用を前提とした仕組み</strong>で、厚労省の令和4年度集計では直接雇用化率が約56.5%と、半数強が直接雇用に至っています。実際に働いて相性を確認してから正社員化を判断できるため、ミスマッチを避けたい人に向きます。雇用の安定をまず得たいなら無期雇用派遣、待遇改善を最短で狙うなら正社員転職と、目的に応じてルートを選べます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>正社員化のルートは「派遣先登用」「紹介予定派遣」「無期雇用派遣」「転職」の4つ。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>紹介予定派遣の直接雇用化率は約56.5%（厚労省 令和4年度集計／2026年6月時点引用）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>派遣の経験は実務経験として正社員転職でも評価される。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 派遣の制度 */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">派遣の制度（派遣元との労働契約・3年ルール）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            派遣は、<strong>派遣元（派遣会社）と労働契約を結び、実際の指揮命令は派遣先が行う</strong>働き方です。雇用主は派遣元なので、社会保険・雇用保険・労災は派遣元を通じて適用されます。派遣社員は労働者派遣法に基づく「労働者」であり、業務委託（事業主扱い）とは性質が異なります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのが<strong>3年ルール</strong>です。同一の組織単位での派遣就業は原則3年が上限で、この節目に派遣先での直接雇用、無期雇用派遣への切り替えなどが検討されます。雇用形態全体での位置づけは<Link href="/employment/" className="text-blue-600 hover:underline">エンジニアの雇用形態の違い</Link>で確認できます。
          </p>
        </section>

        {/* 4ルート */}
        <section id="routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員になる4つのルート</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            派遣から正社員（または安定雇用）を目指す道は、大きく次の4つに整理できます。
          </p>
          <div className="space-y-4">
            {routes.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 紹介予定派遣 */}
        <section id="shoukai" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">紹介予定派遣の直接雇用化率（約56.5%）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員化を狙ううえで最も有効なルートの一つが紹介予定派遣です。これは<strong>最初から直接雇用を前提</strong>に、原則最長6か月の派遣期間を経て、双方の合意で直接雇用に移行する仕組みです。実際に働いて職場との相性を確認できるため、ミスマッチによる早期離職を避けやすいのが特徴です。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-3">
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              厚生労働省の令和4年度の集計では、紹介予定派遣を経て直接雇用に結びついた割合は<strong>約56.5%（26,313人中14,865人が直接雇用）</strong>でした。半数強が直接雇用に至っている計算で、正社員化の現実的な手段として機能していることがわかります。
            </p>
          </div>
          <p className="text-xs text-slate-500">
            ※ 紹介予定派遣の直接雇用化率（約56.5%）は厚生労働省の集計値ですが、原表の数値は引用時点（2026年6月）のものです。最新かつ正確な数値は厚生労働省の原資料（PDF）で最終確認することを推奨します。
          </p>
        </section>

        {/* 規模・賃金データ */}
        <section id="data" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">派遣労働者の規模・賃金データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            派遣という働き方の全体像を、厚生労働省の令和4年度集計で確認します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {dataRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            出典: 厚生労働省 労働者派遣事業報告（令和4年度集計）。直接雇用化率の原表は引用時点の値（2026年6月引用）で、最終確認推奨。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm mb-4">
            注目したいのは、派遣労働者総数約215万人のうち、無期が約83万人、有期が約132万人という内訳です。無期雇用派遣（正社員型派遣）という安定した働き方が一定の規模で広がっていることがわかります。また、賃金平均15,968円に対し派遣料金平均24,909円という差は、派遣元が負担する社会保険料・運営費・利益に充てられる構造を示しています。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            この「賃金」と「派遣料金」の差を理解しておくと、自分の給与水準を冷静に捉えられます。派遣先が支払う料金がそのまま給与になるわけではなく、派遣元が社会保険料の事業主負担分やマージンを差し引いた額が手元に入ります。これは業務委託（フリーランス）が単価から社会保険料・税を自己負担するのと似た構造ですが、派遣の場合は労働者として保護を受けながら、派遣元が事務・保険手続きを担ってくれる点が異なります。
          </p>
        </section>

        {/* ルート比較 */}
        <section id="compare-routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4ルートの比較（安定度・待遇・スピード）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            4つのルートを「雇用の安定度」「待遇（正社員待遇に近いか）」「正社員化までのスピード」の3軸で並べると、自分の優先順位に合うルートが見えてきます。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs sm:text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ルート</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">雇用の安定度</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">待遇</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">スピード</th>
                </tr>
              </thead>
              <tbody>
                {routeCompare.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{r.route}</td>
                    <td className="px-3 py-3 border border-slate-200">{r.stable}</td>
                    <td className="px-3 py-3 border border-slate-200">{r.treat}</td>
                    <td className="px-3 py-3 border border-slate-200">{r.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">※ ◯△は一般的な傾向を示す目安で、個別の企業・案件・本人の状況により異なります。</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            たとえば「とにかく早く雇用を安定させたい」なら無期雇用派遣、「実際に働いて相性を見てから正社員になりたい」なら紹介予定派遣、「待遇を最大化したい」なら正社員転職、という具合に、優先順位から逆引きすると選びやすくなります。複数を並行して検討し、現職に残る場合と比較するのが現実的です。
          </p>
        </section>

        {/* 進め方 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員化を成功させる進め方</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ゴールを決める（安定 or 待遇改善）", desc: "雇用の安定を最優先するなら無期雇用派遣、待遇改善まで望むなら直接雇用（紹介予定派遣・登用・転職）と、目的を先に定めます。" },
              { num: "2", title: "3年ルールの節目を意識する", desc: "同一組織単位での就業上限3年が近づくタイミングは、直接雇用や切り替えの検討時期です。受け身で待たず、派遣元の担当者に意向を伝えておきます。" },
              { num: "3", title: "実務での評価を積む", desc: "直接雇用化は本人の評価が大きく影響します。担当業務での成果を具体的に積み上げ、数値で語れるようにしておきます。" },
              { num: "4", title: "転職という選択肢も並行検討", desc: "現職での正社員化が見込みづらい場合は、実務経験を武器にした正社員転職が待遇改善の近道になることも。まず転職エージェントで市場価値を把握します。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            実績の言語化は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>、市場価値の確認は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>を参考にしてください。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が派遣から正社員を目指す視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：紹介予定派遣を「お試し正社員」として使う</h3>
              <p className="text-sm text-blue-700">30代は実務経験が一定積み上がり、紹介予定派遣で直接雇用に至る確度を高めやすい時期です。直接雇用化率が約56.5%（厚労省 令和4年度集計）という数字も、30代の即戦力にとっては心強い目安です。職場との相性を確認してから正社員化できるため、ミスマッチによる早期離職を避けたい人に向いています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：実務経験を武器に直接雇用・転職を狙う</h3>
              <p className="text-sm text-blue-700">40代は派遣で積んだ設計・運用・リーダー経験が評価されやすく、派遣先での直接雇用や正社員転職の交渉材料になります。受け身で派遣を続けるより、3年ルールの節目を意識して直接雇用化や転職を能動的に仕掛けることが、待遇改善の近道です。40代の転職戦略は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職ガイド</Link>も参考になります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">社会保険・年金の継続性を確認する</h3>
              <p className="text-sm text-blue-700">派遣は派遣元を通じて厚生年金・健康保険に加入できますが、案件の切れ目で空白が生じると保険の継続に影響することがあります。無期雇用派遣に切り替えると雇用が継続するため、保険の面でも安定します。30代・40代は将来の年金にも関わるため、継続性を意識した形態選びが重要です。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">正社員化を目指すなら、まず市場価値の把握から</h2>
          <p className="text-blue-100 text-sm mb-4">
            派遣で積んだ実務経験は、正社員転職で評価されます。まず転職エージェントで提示年収レンジを知り、現職での正社員化と比較しましょう。
          </p>
          <Link href="/compare/agents/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            IT転職エージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エンジニアの雇用形態の違い", href: "/employment/" },
              { name: "契約社員と無期転換ルール", href: "/employment/contract-employee/" },
              { name: "業務委託エンジニアの実態", href: "/employment/contractor/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
