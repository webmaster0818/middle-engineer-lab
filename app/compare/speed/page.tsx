import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "対応が早い・スピード重視のIT転職エージェント【2026年6月】",
  description:
    "提案スピードが早いと評判のIT転職エージェントを、Geekly・ワークポートを中心に出典付きで比較。スピード転職のコツと、早さと質を両立させる注意点を30代・40代視点で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：スピード重視ならGeeklyとワークポート" },
  { id: "table", label: "スピードで選ぶエージェント比較表" },
  { id: "reviews", label: "スピードに関する口コミの傾向（出典付き）" },
  { id: "tips", label: "スピード転職を成功させるコツ" },
  { id: "select", label: "スピード重視ならではの選び方と注意点" },
  { id: "checklist", label: "スピード転職に向いている人・向いていない人" },
  { id: "age", label: "30代・40代がスピード転職で気をつけること" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

type Agent = {
  rank: number;
  name: string;
  company: string;
  speedPoint: string;
  field: string;
  fee: string;
  href: string;
  caution: string;
};

const agents: Agent[] = [
  {
    rank: 1,
    name: "Geekly",
    company: "株式会社Geekly（2011年設立・渋谷区）",
    speedPoint: "「レスポンスが早い」「選考までスムーズ」という声（出典: 2b-connect・転職アンテナ等）",
    field: "IT/Web/ゲーム業界専門。提案スピードが強み",
    fee: "求職者無料",
    href: "/review/geekly/",
    caution: "口コミでは「連絡がしつこい」「担当者の質にばらつき」という指摘もある",
  },
  {
    rank: 2,
    name: "ワークポート",
    company: "株式会社ワークポート（2003年設立）",
    speedPoint: "「レスポンスが早い」「紹介求人の量が多い」という声（出典: Qiita Job Change・morejob等）",
    field: "総合型でIT・ゲームが最も強い。スピード重視・全国47都道府県57拠点",
    fee: "求職者完全無料",
    href: "/review/workport/",
    caution: "口コミでは「連絡が多すぎる」「希望と異なる求人紹介」という指摘もある",
  },
  {
    rank: 3,
    name: "レバテックキャリア",
    company: "レバテック株式会社（レバレジーズグループ）",
    speedPoint: "「LINEで連絡が完結」しやり取りが速いという声（出典: OUTSIDEMAGAZINE・イーデス等）",
    field: "IT/Web特化。高年収求人比率が高い",
    fee: "求職者無料",
    href: "/review/levtech/",
    caution: "「初回面談後の連絡が遅い場合がある」という指摘もあり、担当により差が出る",
  },
  {
    rank: 4,
    name: "doda（ITエンジニア）",
    company: "パーソルキャリア株式会社（1989年設立）",
    speedPoint: "求人母数が大きく、自分でも検索しながら並行して動けるため着手が速い",
    field: "国内最大級。検索＋エージェント＋スカウトのハイブリッド型",
    fee: "求職者無料",
    href: "/review/doda-it/",
    caution: "「求人・連絡が多すぎる」という声があり、情報の取捨選択が必要",
  },
  {
    rank: 5,
    name: "Green",
    company: "株式会社アトラエ（東証プライム）",
    speedPoint: "企業と直接やり取りでき「速い」という声（出典: みん評等）",
    field: "IT/Webベンチャー・スタートアップ。直接応募・カジュアル面談中心",
    fee: "求職者無料",
    href: "/review/green/",
    caution: "エージェントの個別仲介サポートはなく、自分で進める前提",
  },
];

const goodPoints = [
  { agent: "Geekly", text: "「レスポンスが早い」「選考までスムーズ」「実務経験者への提案数が多い」という声", src: "2b-connect・転職アンテナ等" },
  { agent: "ワークポート", text: "「レスポンスが早い」「紹介求人の量が多い」「未経験歓迎求人が豊富」という声", src: "Qiita Job Change・morejob等" },
  { agent: "Green", text: "「企業と直接やり取りでき速い」「カジュアル面談が好評」という声", src: "みん評等" },
];

const badPoints = [
  { agent: "Geekly", text: "「連絡がしつこい」「担当者の質にばらつき」「勝手に応募されたとの報告例」という指摘", src: "Qiita Job Change等" },
  { agent: "ワークポート", text: "「連絡が多すぎる」「希望と異なる求人を紹介される」という指摘", src: "axxis・イーデス等" },
  { agent: "レバテックキャリア", text: "「初回面談後の連絡が遅い場合がある」という声", src: "OUTSIDEMAGAZINE・Qiita Job Change等" },
];

const fitYes = [
  "退職日が決まっている等、転職活動に明確な期限がある",
  "職務経歴書・ポートフォリオがすでに準備できている",
  "実務経験があり、すぐに提案を受けられる状態にある",
  "連絡が多めでもこまめに返信できる",
  "複数社を並行して効率的に進めたい",
];

const fitNo = [
  "じっくり時間をかけて納得いくまで企業を比較したい",
  "連絡頻度が多いとストレスに感じる",
  "未経験で、まず学習や職種選びから始める段階",
  "スピードを優先して条件面の確認を省きたくない",
];

const faqs = [
  { q: "提案スピードが早いのはどのエージェント？", a: "IT/Web/ゲーム特化のGeeklyは「提案スピードが強み」とされ、口コミでも『レスポンスが早い』『選考までスムーズ』という声が見られます（2b-connect・転職アンテナ等）。ワークポートも『スピード重視』『レスポンスが早い』と評されます（Qiita Job Change・morejob等）。具体的な日数は人や求人により異なるため、登録時に進め方の目安を確認しましょう。" },
  { q: "最短でどのくらいで内定が出る？", a: "内定までの日数は応募企業・選考フロー・本人の準備状況で大きく変わるため、特定の日数を断定することはできません。スタートアップは面接回数が少なく早い傾向、大手は選考が丁寧で時間がかかる傾向があります。早さを重視するなら、準備を整えたうえでスピードに定評のあるエージェントを使うのが近道です。" },
  { q: "スピード転職で気をつけることは？", a: "焦って条件面の確認を省かないことが最重要です。スピードは手段であって目的ではありません。年収・出社頻度・業務内容・企業文化を確認したうえで判断しましょう。口コミでGeeklyやワークポートに『勝手に応募された』『連絡が多すぎる』という指摘があるように、進め方の希望は最初に伝えておくと安心です。" },
  { q: "連絡がしつこいと聞くが大丈夫？", a: "Geekly・ワークポートともに『連絡がしつこい』『連絡が多すぎる』という口コミが見られます。これはスピード対応の裏返しでもあります。希望の連絡手段・頻度（メール中心、連絡は1日◯回までなど）を最初に伝えれば、負担を抑えつつスピードのメリットを活かせます。" },
  { q: "在職中でもスピード転職はできる？", a: "可能です。オンライン面接の普及で、就業時間外に面接を受けられる企業が増えています。事前に職務経歴書を仕上げ、面接候補日を複数まとめて提示できるようにしておくと、在職中でも短期間に活動を進められます。" },
  { q: "スピードを優先すると質は下がる？", a: "必ずしも下がりません。Geeklyのように特化型でマッチング提案が速いサービスもあります。ただしスピードを理由に条件確認を省くとミスマッチのリスクが上がります。『早く・かつ確認すべきことは確認する』を両立させましょう。" },
  { q: "何社登録すればスピードを出せる？", a: "2〜3社が目安です。スピードに定評のあるGeekly・ワークポートを軸に、母数の大きいdodaを足すと、最初の1〜2週間で多くの求人に触れられます。社数を増やしすぎると連絡管理が破綻し、かえって遅くなります。" },
  { q: "内定をもらったらすぐ承諾すべき？", a: "通常は回答期限があり、その範囲で複数のオファーを比較できます。『他社の結果を待っている』とエージェントに伝えれば、期限の相談ができる場合もあります。スピード転職でも、最終判断は条件を見比べてから行いましょう。" },
];

const related = [
  { name: "Geeklyの評判・口コミ", href: "/review/geekly/" },
  { name: "ワークポートの評判・口コミ", href: "/review/workport/" },
  { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
  { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
  { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

export default function SpeedPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="対応が早い・スピード重視のIT転職エージェント【2026年6月】" description="提案スピードが早いと評判のIT転職エージェントを、Geekly・ワークポートを中心に出典付きで比較します。" url="/compare/speed/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "スピード重視のエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">対応が早い・スピード重視のIT転職エージェント【2026年6月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 提案スピードが早いと評判のエージェントを出典付きで比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「今すぐ動きたい」「退職日が決まっている」——スピードが求められるIT転職では、<strong>提案・連絡のレスポンスが早いエージェント</strong>を選ぶことが効きます。この記事では、提案スピードに定評のあるGeekly・ワークポートを中心に、口コミの傾向を出典付きで整理し、早さと質を両立させるコツまで解説します。</p>

        <DataNote surveyedAt="2026年6月" sources={["各サービス公式サイト・会社概要", "2b-connect・転職アンテナ・Qiita Job Change・みん評等の口コミプラットフォーム"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：スピード重視ならGeeklyとワークポート</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">提案スピードを重視するなら、IT特化で「提案スピードが強み」とされる<strong>Geekly</strong>と、「スピード重視」「レスポンスが早い」と評される<strong>ワークポート</strong>の併用が現実的です。</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>① Geekly：IT/Web/ゲーム特化で提案が速く、選考までスムーズという声（2b-connect・転職アンテナ等）</li>
              <li>② ワークポート：スピード重視で「レスポンスが早い」という声（Qiita Job Change・morejob等）。全国対応</li>
              <li>③ いずれも口コミに「連絡が多い」という指摘があるため、連絡頻度の希望を最初に伝える</li>
            </ul>
          </div>
        </section>

        <section id="table" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピードで選ぶエージェント比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">運営会社</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">スピード面の評判（出典付き）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">注意点</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">料金</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {agents.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium"><Link href={a.href} className="text-blue-600 hover:underline">{a.name}</Link></td>
                    <td className="px-3 py-3 border border-slate-200">{a.company}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.speedPoint}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.field}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.caution}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※内定までの具体的な日数は企業の選考フローや本人の準備状況で大きく変わるため、本表では断定的な日数を掲載していません。</p>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピードに関する口コミの傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">※口コミプラットフォームに見られる傾向の要約です。原文転載ではありません。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">スピードが評価されている声</h3>
              <div className="space-y-3">
                {goodPoints.map((p, i) => (
                  <div key={i} className="border border-emerald-200 bg-emerald-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">スピードの裏返しとして気になる声</h3>
              <div className="space-y-3">
                {badPoints.map((p, i) => (
                  <div key={i} className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tips" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピード転職を成功させるコツ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>事前準備を徹底する:</strong> 職務経歴書・ポートフォリオを先に完成させ、登録後すぐ応募できる状態にしておく。準備不足はスピードを一番落とす要因。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>2〜3社に同時登録する:</strong> スピードに強いGeekly・ワークポートを軸に並行して提案を受ける。最初の1〜2週間で多くの求人に触れる。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>面接日程を集中させる:</strong> 候補日をまとめて提示し、複数企業の結果を同時期に出すと、比較検討と年収交渉がしやすくなる。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">4</span>
                <p className="text-sm text-slate-600"><strong>連絡ルールを最初に決める:</strong> 「勝手に応募しない」「連絡はメール中心」など希望を先に共有し、スピードの副作用を抑える。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="select" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピード重視ならではの選び方と注意点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 特化型の提案スピードを活かす</h3>
              <p>GeeklyのようなIT/Web/ゲーム特化型は、求人とのマッチング提案が速い傾向です。母数の大きい総合型より、希望にかみ合う求人を早く出してもらいやすい場面があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. 連絡頻度の希望を最初に伝える</h3>
              <p>スピードの裏返しで「連絡が多すぎる」という口コミがあります。希望の連絡手段・頻度を初回に共有すれば、スピードのメリットだけを受け取りやすくなります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. 「勝手に応募」を防ぐ</h3>
              <p>口コミには『勝手に応募された』という報告例もあります。応募前に必ず自分の確認を挟むよう依頼し、応募先を自分でコントロールしましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">4. 早さと条件確認を両立させる</h3>
              <p>スピードは目的ではなく手段です。年収・出社頻度・業務内容・企業文化の確認は省かず、「早く・かつ確認する」を徹底するとミスマッチを防げます。</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スピード転職に向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span><span>{t}</span></li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-500 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-slate-400 font-bold">×</span><span>{t}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="age" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がスピード転職で気をつけること</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>当サイトの読者は30代・40代のミドルエンジニアが中心です。この年代の強みは実務経験が豊富で、エージェントがすぐに具体的な求人を提案しやすい点です。だからこそ、準備を整えればスピード転職と相性が良い層でもあります。GeeklyやワークポートのようなIT特化・スピード型は、即戦力人材への提案が速い傾向があります。</p>
            <p>一方で、30代・40代は年収・役割・マネジメント範囲など確認すべき条件が20代より多くなります。スピードを優先するあまり、年収交渉やポジションの確認を省くと、入社後に「思っていた役割と違う」というミスマッチが起きやすくなります。早く動きつつ、譲れない条件（年収の下限、出社頻度、裁量範囲）はリスト化してエージェントに先に伝えておきましょう。</p>
            <p>また、この年代では複数オファーを比較してから決めるのが安全です。スピードは「早く動き出して選択肢を早く揃える」ために使い、最終判断は条件を見比べて行うのが後悔しないコツです。年代別の選び方は<Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代向け比較</Link>・<Link href="/compare/40s-agents/" className="text-blue-600 hover:underline">40代向け比較</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">スピードと質を両立させて動き出そう</h2>
          <p className="text-blue-100 text-sm mb-4">提案が速いGeekly・ワークポートを軸に、連絡ルールを決めて早く・確実に進めましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
