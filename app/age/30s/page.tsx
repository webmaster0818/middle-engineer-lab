import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "30代エンジニア転職の完全ガイド｜年収相場と進め方【2026年6月】",
  description:
    "30代エンジニアの転職は今がチャンス。レバテック公表の30代平均年収約499万円や経産省のIT人材不足試算など実データで市場を解説し、前半・後半別の戦略、おすすめエージェント、進め方、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：30代エンジニアの転職は十分可能" },
  { id: "market", label: "30代エンジニアの市場データ" },
  { id: "company-needs", label: "企業が30代に求めるもの" },
  { id: "first-vs-second", label: "30代前半と後半の違い" },
  { id: "patterns", label: "成功パターンと失敗パターン" },
  { id: "strategy", label: "キャリア戦略（マネジメント vs スペシャリスト）" },
  { id: "agents", label: "30代におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const marketRows: [string, string][] = [
  ["SE平均年収（全年代）", "578.5万円（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["SE平均年齢", "37.1歳（同上）"],
  ["30代エンジニア平均年収", "約499万円（レバテック公表の年代別平均年収・2025年）"],
  ["年収1,000万円以上の割合", "30代で8.01%（レバテック公表・2025年）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const companyNeeds = [
  {
    title: "即戦力としての開発実務",
    desc: "30代に最も期待されるのは「採用直後から戦力になること」です。使用言語・フレームワーク、担当工程、チーム規模を具体的に示せると評価が安定します。",
  },
  {
    title: "自走力と意思決定",
    desc: "指示待ちではなく、要件の曖昧さを自分で詰め、技術選定や設計の理由を説明できること。30代では「任せられる範囲の広さ」が年収レンジを左右します。",
  },
  {
    title: "後進への影響・巻き込み",
    desc: "30代後半に近づくほど、コードレビュー・オンボーディング・チームの底上げなど、自分以外の生産性を上げる動きが求められます。",
  },
  {
    title: "学び続ける姿勢",
    desc: "技術トレンドの変化に対し、過去の実績だけでなく直近で何を学んだか・どう適応したかを語れることが、長期活躍の判断材料になります。",
  },
];

const successPatterns = [
  "実績を「規模・役割・成果（数値）」の3点セットで言語化できている",
  "IT特化型と総合型のエージェントを併用し、求人の幅と質を両取りしている",
  "在職中に活動を始め、複数内定を比較して条件交渉している",
  "転職軸（年収・技術・働き方）に優先順位をつけ、ブレずに企業を選んでいる",
];

const failurePatterns = [
  "年収の数字だけで決め、技術スタックやチーム文化のミスマッチが起きる",
  "1社のエージェントだけに依存し、相場観や比較材料を持てない",
  "現職の不満が動機の中心で、応募先で何を実現したいかが曖昧",
  "職務経歴書が作業の羅列で、成果や工夫が伝わらない",
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収600万円以上を狙う30代",
    reason:
      "IT/Web特化で高年収求人の比率が高い（二次情報では600万円以上が公開求人の約8割）。内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）。利用者の約80%が20〜30代で、まさに30代の主戦場。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    fit: "Web・ゲーム業界志望でスピード重視の30代",
    reason:
      "IT/Web/ゲーム業界に専門特化。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。提案スピードに強みがあり、在職中でも進めやすい。",
  },
  {
    name: "doda（IT・通信エンジニア）",
    href: "/review/doda-it/",
    fit: "幅広い選択肢からじっくり選びたい30代後半",
    reason:
      "国内最大級の求人数で、検索・エージェント・スカウトを併用できるハイブリッド型。転職者の約6割が年収アップ、IT・通信の平均決定年収は486万円（2024年度・doda公表値）。",
  },
];

const faqs = [
  {
    q: "30代エンジニアの転職は何社くらい応募すべき？",
    a: "明確な正解はありませんが、書類選考の通過率を踏まえると、本命を含めて10〜20社程度の応募に絞り、並行して5〜8社の選考を進めるのが一般的なペースです。応募数を増やすこと自体が目的化すると準備が薄くなるため、エージェントと相談して優先順位をつけ、量より「比較できる複数内定」を作ることを目標にしましょう。",
  },
  {
    q: "30代で転職すると年収は下がりますか？",
    a: "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされており、同職種・同レベルへの転職なら維持〜アップが一般的です。一方でSIerから自社開発へ、マネジメントからプレイヤーへなど大きなキャリアチェンジを伴う場合は一時的に下がることもあります。短期の年収だけでなく中期のキャリア価値で判断しましょう。",
  },
  {
    q: "30代エンジニアの平均年収はどのくらいですか？",
    a: "レバテック公表の年代別平均年収（2025年）では正社員SEの30代は約499万円です。厚労省 job tagの「システムエンジニア（受託開発）」は全年代平均で578.5万円・平均年齢37.1歳とされています。実際の到達年収は言語・領域・役割によって大きく変わるため、複数エージェントで市場価値を査定してもらうのが確実です。",
  },
  {
    q: "30代前半と後半で転職のしやすさは変わりますか？",
    a: "前半（30〜34歳）は即戦力としての求人が最も多く、キャリアチェンジの柔軟性も残っています。後半（35〜39歳）はリード・設計・マネジメント経験が評価軸に加わります。後半は求人の「数」よりも「自分の強みに合うポジションへの的確なアプローチ」が成功率を左右します。",
  },
  {
    q: "30代で未経験からエンジニアになれますか？",
    a: "30代前半であれば現実的な選択肢です。独学のみより、学習成果をポートフォリオで示し、前職の業務知識（社内SE・データ分析など）を足がかりにする方が通過率が上がります。ワークポートのように未経験歓迎求人を多く扱うエージェントの活用も検討材料になります。ただし完全未経験は後半になるほど難度が上がる点は理解しておきましょう。",
  },
  {
    q: "在職中と退職後、どちらで転職活動すべき？",
    a: "原則は在職中の活動を推奨します。収入が途切れず、焦って条件を妥協するリスクを避けられるためです。30代は家庭やローンなど固定費が増える時期でもあり、複数内定を比較して交渉する余裕を持つ意味でも在職中の活動が有利です。",
  },
  {
    q: "エージェントは複数使っても大丈夫ですか？",
    a: "問題ありません。エージェントごとに保有する非公開求人や得意領域が異なるため、IT特化型と総合型を2〜3社併用するのが定石です。ただし同じ求人に複数経由で応募すると企業側で重複し心証を損なうため、応募先はエージェント間で重複しないよう自分で管理しましょう。",
  },
  {
    q: "30代エンジニアの転職活動はどのくらいかかりますか？",
    a: "個人差はありますが、準備から内定承諾まで概ね2〜3か月が目安です。書類作成や面接準備に時間をかけるほど通過率は上がる傾向があります。長引く場合は応募ポジションの難度や書類の訴求が市場とずれていないか、エージェントにフィードバックを求めて軌道修正しましょう。",
  },
];

export default function Age30sPage() {
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
        title="30代エンジニア転職の完全ガイド｜年収相場と進め方【2026年6月】"
        description="30代エンジニアの転職事情を公的統計とエージェント公表値に基づいて解説。年収相場・市場・前半後半別の戦略・おすすめエージェント・進め方を網羅。"
        url="/age/30s/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "30代エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30代エンジニア転職の完全ガイド｜年収相場と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代前半・後半それぞれの転職戦略をデータで解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          30代はエンジニアとして即戦力の実務経験を持ちながら、キャリアの方向性を選び直せる柔軟性も残る年代です。IT人材不足を背景に需要は高い一方、30代前半と後半では企業の評価ポイントが変わるため、年齢に応じた戦略が欠かせません。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "doda「2024年度 決定年収レポート」（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：30代エンジニアの転職は十分に可能</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              30代は転職市場で最も需要の高い年代のひとつで、実務経験があれば年収アップを伴う転職も現実的です。年代や状況に合ったエージェントを併用し、実績を数値で語れるよう準備すれば、選択肢を広げられます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>経産省試算では2030年に最大約79万人のIT人材不足（2019年公表）で、需要の追い風が続く。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>レバテック公表ではSE30代の平均年収は約499万円、1,000万円以上も8.01%が存在（2025年）。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            まず、創作ではなく公的統計とエージェント公表値で30代エンジニアの市場を確認します。出典と時点を明記しているので、相場観の土台として活用してください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <tbody>
                {marketRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            注目すべきは、SEの平均年齢が37.1歳という点です（厚労省 job tag）。つまり30代はSEという職種の「中心層」であり、年齢的に不利とは言えません。経産省が2019年に公表した最大約79万人不足の試算が示すように構造的な人材不足が続いており、30代の経験者は引き合いが強い状況です。年収面でもレバテック公表値では30代の8.01%が1,000万円以上に到達しており、上振れの余地も十分にあります。
          </p>
        </section>

        {/* 企業が求めるもの */}
        <section id="company-needs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が30代エンジニアに求めるもの</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            20代の「ポテンシャル採用」とは異なり、30代には実務での再現性が求められます。次の4点を満たせているかが、書類・面接の評価を分けます。
          </p>
          <div className="space-y-4">
            {companyNeeds.map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 前半 vs 後半 */}
        <section id="first-vs-second" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代前半と後半の違い</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            同じ30代でも、前半と後半では求人の傾向と評価軸が変わります。自分がどちらのフェーズかを意識して戦略を立てましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">30代前半（30〜34歳）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>即戦力として求人が最も多い</li>
                <li>SIer→Web系などキャリアチェンジが比較的しやすい</li>
                <li>技術力重視のポジションが中心</li>
                <li>年収アップ転職を狙いやすいレンジ</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">30代後半（35〜39歳）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>リード・設計・マネジメント経験が武器になる</li>
                <li>専門領域の深い知見が問われる</li>
                <li>テックリード・アーキテクト求人が狙い目</li>
                <li>求人の「数」より「強みとの一致」が成否を分ける</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            「35歳限界説」が気になる方は<Link href="/age/35/" className="text-blue-600 hover:underline">35歳エンジニアの転職は限界？</Link>もあわせてご覧ください。後半に向けた具体的な突破戦略を解説しています。
          </p>
        </section>

        {/* 成功・失敗パターン */}
        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">成功パターンと失敗パターン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">うまくいく人の共通点</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {successPatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">つまずきやすいパターン</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {failurePatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            複数エージェントの使い分けについては<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの複数利用</Link>、職務経歴書の書き方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* キャリア戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリア戦略：マネジメント vs スペシャリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            30代は、この先の軸を「マネジメント」と「スペシャリスト」のどちらに置くかを意識し始める時期です。どちらが優れているということはなく、自分の志向と市場の需要が重なる方向を選ぶことが重要です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメント志向</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームの生産性やメンバーの成長にコミットする方向。エンジニアリングマネージャー（EM）やテックリードなどが該当します。ピープルマネジメントや採用・育成の経験が評価され、年収レンジも上がりやすい一方、コーディング比率は下がります。
              </p>
              <p className="text-xs text-blue-600">向いている人: チーム全体の成果に喜びを感じる／調整や育成が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリスト志向</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                特定領域を突き詰めるIndividual Contributor（IC）の道。アーキテクト、SRE、データエンジニア、セキュリティなどが該当します。近年はICパスを整備し、マネージャーと同水準の年収を用意する企業も増えています。
              </p>
              <p className="text-xs text-blue-600">向いている人: 技術そのものに没頭できる／深い専門性で勝負したい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリアの設計に迷う場合は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">エンジニアのキャリアプラン</Link>や<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値を知る方法</Link>も参考になります。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            30代はIT特化型を軸に、求人の幅を確保する総合型を併用するのが定石です。各社の公表値・特徴は下記の通りで、いずれも求職者は無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-blue-600 hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">こんな30代向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            30代向けの比較は<Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代エンジニアにおすすめのエージェント比較</Link>、選び方の基準は<Link href="/knowledge/how-to-choose/" className="text-blue-600 hover:underline">転職エージェントの選び方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "転職軸の整理と棚卸し", desc: "年収・技術・働き方の優先順位を決め、これまでの実績を「規模・役割・成果」で言語化します。市場価値を客観視するため、自己分析と相場確認をセットで行いましょう。" },
              { step: "STEP 2", title: "エージェント2〜3社に登録", desc: "IT特化型（レバテックキャリア等）と総合型（doda等）を併用し、初回面談で希望を共有。提案される求人の傾向から、自分の市場価値を把握します。" },
              { step: "STEP 3", title: "応募書類の作成・添削", desc: "職務経歴書はエージェントの添削を受けて精度を高めます。成果を数値で語れるかが通過率を左右します。" },
              { step: "STEP 4", title: "面接・選考", desc: "技術面接では設計判断や失敗からの学びを問われます。在職中なら無理のないスケジュールで複数社を並行させ、比較できる状態を作ります。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。承諾後は円満退職の段取りを進めます。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-blue-600 font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            全体のスケジュール感は<Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職活動のスケジュール</Link>、面談の進め方は<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">エージェントとの初回面談</Link>を参照してください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">30代エンジニアの転職、まずはプロに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料登録して、あなたの市場価値を確認してみませんか？
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニアの転職は厳しい？", href: "/age/40s/" },
              { name: "30代の年収アップ転職のリアル", href: "/knowledge/salary-30s/" },
              { name: "30代エージェント比較", href: "/compare/30s-agents/" },
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "エンジニアの市場価値の測り方", href: "/knowledge/market-value/" },
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
