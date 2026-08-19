import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/remote-agents/" },
  title: "リモートワークに強いエンジニア転職エージェント【2026年8月】",
  description:
    "フルリモート・ハイブリッド求人の探し方を、Green・Geekly・dodaなどの特徴から解説。リモート求人は変動が大きいため件数の断定を避け、確実に絞り込む方法を30代・40代視点で紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：IT特化＋直接応募型の併用が探しやすい" },
  { id: "table", label: "リモート求人を探しやすいサービス比較表" },
  { id: "howto", label: "リモート求人の現実的な探し方" },
  { id: "select", label: "リモート希望者ならではの選び方" },
  { id: "reviews", label: "口コミの傾向（出典付き）" },
  { id: "checklist", label: "リモート転職に向いている人・向いていない人" },
  { id: "age", label: "30代・40代のリモート転職で押さえたいこと" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

type Service = {
  name: string;
  type: string;
  company: string;
  field: string;
  remote: string;
  fee: string;
  href: string;
};

const services: Service[] = [
  {
    name: "Green",
    type: "成功報酬型転職サイト（直接応募・スカウト）",
    company: "株式会社アトラエ（東証プライム）",
    field: "IT/Webベンチャー・スタートアップに強い",
    remote: "求人検索で勤務形態を絞り込みやすく、カジュアル面談でリモートの実態を確認しやすい",
    fee: "求職者無料",
    href: "/review/green/",
  },
  {
    name: "Geekly",
    type: "IT特化型転職エージェント",
    company: "株式会社Geekly（2011年設立・渋谷区）",
    field: "IT/Web/ゲーム業界専門。提案スピードが強み",
    remote: "Web系企業の案件に強く、希望条件にリモートを含めて提案を受けやすい",
    fee: "求職者無料",
    href: "/review/geekly/",
  },
  {
    name: "レバテックキャリア",
    type: "IT特化型転職エージェント",
    company: "レバテック株式会社（レバレジーズグループ）",
    field: "IT/Web特化。高年収求人比率が高い",
    remote: "首都圏中心だが、リモート前提で首都圏企業に応募する地方在住パターンに対応しやすい",
    fee: "求職者無料",
    href: "/review/levtech/",
  },
  {
    name: "doda（ITエンジニア）",
    type: "総合型（検索＋エージェント＋スカウト）",
    company: "パーソルキャリア株式会社（1989年設立）",
    field: "国内最大級の求人数。全国対応",
    remote: "求人母数が大きく、自分で勤務形態を検索しながらリモート求人を探せる",
    fee: "求職者無料",
    href: "/review/doda-it/",
  },
  {
    name: "ビズリーチ",
    type: "ハイクラス・スカウト型",
    company: "株式会社ビズリーチ（ビジョナル株式会社グループ・東証プライム）",
    field: "年収750万円以上のハイクラス。外資・管理職に強い",
    remote: "高年収帯でリモート可のポジションをスカウト型で受け取りやすい",
    fee: "無料会員あり（有料プランは別）",
    href: "/review/bizreach-it/",
  },
];

const goodPoints = [
  { agent: "Green", text: "「企業と直接やり取りでき速い」「ベンチャー求人が豊富」「カジュアル面談が好評」という声", src: "みん評等" },
  { agent: "Geekly", text: "「レスポンスが早い」「選考までスムーズ」「実務経験者への提案数が多い」という声", src: "2b-connect・転職アンテナ等" },
  { agent: "doda", text: "「求人量が多い」「好条件求人が多い」という声", src: "studio-tale・best-w等" },
];

const badPoints = [
  { agent: "Green", text: "「地方求人が少ない」「エージェント支援がない」「内定に繋がりにくい場合がある」という指摘", src: "axxis・HonNe等" },
  { agent: "Geekly", text: "「連絡がしつこい」「担当者の質にばらつき」という声", src: "Qiita Job Change等" },
  { agent: "レバテックキャリア", text: "「首都圏中心」「未経験者は紹介されにくい」という指摘", src: "OUTSIDEMAGAZINE・Qiita Job Change等" },
];

const fitYes = [
  "通勤を減らし、働く場所の自由度を高めたい",
  "地方在住で、首都圏企業のリモート求人に応募したい",
  "Web系・クラウド系など比較的リモートと相性の良い領域の実務経験がある",
  "オンライン面談・チャット中心のやり取りに抵抗がない",
  "求人の勤務形態を自分でも検索して確認したい",
];

const fitNo = [
  "対面でのオンボーディングやチーム連携を重視する",
  "インフラ常駐・現場対応など出社前提の領域が中心",
  "求人件数の多さだけで決めたい（リモート条件は変動が大きい）",
  "完全フルリモートに固執し、ハイブリッドを一切許容できない",
];

const faqs = [
  { q: "リモート求人に強いエージェントの選び方は？", a: "IT/Web特化型のサービスを軸に、求人の勤務形態（フルリモート・一部リモート）を検索や提案で絞り込めるかを確認しましょう。Greenのように企業と直接やり取りできる媒体や、Geekly・dodaのように母数が大きいサービスを併用すると、リモート条件の合う求人に出会いやすくなります。" },
  { q: "リモート求人の件数はどのくらい？", a: "リモート求人は企業の方針変更や時期によって増減が大きく、特定の件数を断定するのは適切ではありません。『フルリモート希望』とエージェントに伝えたうえで、その時点で紹介可能な求人を確認するのが現実的です。求人票の勤務形態は応募前に必ず最新情報をチェックしてください。" },
  { q: "地方在住でも首都圏企業のリモート求人に応募できる？", a: "フルリモート可の求人であれば応募できます。面接もオンラインで完結するケースが増えています。レバテックキャリアのように首都圏中心のエージェントでも、リモート前提なら地方在住者が首都圏企業に応募する形は珍しくありません。ただし出社頻度や交通費の条件は求人ごとに異なるため確認が必要です。" },
  { q: "フルリモートにすると年収は下がる？", a: "企業の方針によります。同等の年収を提示する企業もあれば、勤務地域に応じた手当の調整を行う企業もあります。断定はできないため、応募前にエージェント経由で年収・手当・出社頻度の条件をまとめて確認しましょう。" },
  { q: "リモート面接で気をつけることは？", a: "安定したネット環境、静かな場所、適切な照明とカメラ位置を準備しましょう。背景は無地かバーチャル背景が無難です。接続トラブルに備え、開始前に音声・映像のテストをしておくと安心です。" },
  { q: "Greenはエージェントではないと聞いたが？", a: "そのとおりです。Greenは成功報酬型の転職サイト（ダイレクトリクルーティング）で、企業との直接応募・スカウト・カジュアル面談が中心です。エージェントのような書類添削や面接同行といった個別仲介サポートはありません。手厚いサポートが欲しい場合はGeeklyやdodaなどのエージェントと併用するのがおすすめです。" },
  { q: "リモート求人は今後も増える？", a: "増加が期待される一方、企業ごとに出社回帰の動きもあり一律には言えません。求人の勤務形態は変動するため、転職活動のタイミングで最新の条件を確認することが大切です。" },
  { q: "リモート希望は何社登録すれば良い？", a: "2〜3社が目安です。直接応募型（Green）と仲介型（Geekly・doda等）を組み合わせると、リモート条件の合う求人を取りこぼしにくくなります。" },
];

const related = [
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "Greenの評判・口コミ", href: "/review/green/" },
  { name: "Geeklyの評判・口コミ", href: "/review/geekly/" },
  { name: "Relance（フルリモート・高単価フリーランス）の評判", href: "/review/relance/" },
  { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
  { name: "札幌のIT転職事情", href: "/area/sapporo/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

export default function RemoteAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="リモートワークに強いエンジニア転職エージェント【2026年8月】" description="フルリモート・ハイブリッド求人の探し方を、Green・Geekly・dodaなどの特徴から解説します。" url="/compare/remote-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "リモート求人に強いエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リモートワークに強いエンジニア転職エージェント【2026年8月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | フルリモート・ハイブリッド求人の現実的な探し方</p>

        <p className="text-slate-600 leading-relaxed mb-4">リモートワーク中心で働きたいエンジニアにとって大切なのは、「リモート求人が多いと宣伝するサービス」を選ぶことではなく、<strong>勤務形態でしっかり絞り込めるサービスを組み合わせる</strong>ことです。リモート求人は企業方針や時期で変動が大きいため、この記事では具体的な件数の断定を避け、Green・Geekly・dodaなどの特徴と、取りこぼさない探し方を出典付きで整理します。</p>

        <DataNote surveyedAt="2026年6月" sources={["各サービス公式サイト・会社概要", "Qiita Job Change・みん評等の口コミプラットフォーム"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：IT特化＋直接応募型を併用する</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">リモート求人は、自分で勤務形態を絞り込める<strong>Green</strong>のような直接応募型と、提案力のある<strong>Geekly</strong>・母数の大きい<strong>doda</strong>などのエージェントを併用すると探しやすくなります。</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>① Green：勤務形態で絞り込みやすく、カジュアル面談でリモートの実態を確認できる（仲介サポートはなし）</li>
              <li>② Geekly：IT/Web特化で提案が速く、希望にリモートを含めて求人を出してもらいやすい</li>
              <li>③ リモート求人は変動が大きいため、件数では選ばず「条件で絞れるか」「実態を確認できるか」で選ぶ</li>
            </ul>
          </div>
        </section>

        <section id="table" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人を探しやすいサービス比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">種別</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">運営会社</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リモート求人の探しやすさ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">料金</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {services.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium"><Link href={s.href} className="text-petrol hover:underline">{s.name}</Link></td>
                    <td className="px-3 py-3 border border-slate-200">{s.type}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.company}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.field}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.remote}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※リモート求人の件数は時期・企業方針により変動が大きいため、本表では具体件数を掲載していません。最新の求人状況は各公式サイト・担当者にご確認ください。</p>
        </section>

        <section id="howto" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人の現実的な探し方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>勤務形態を最初に明言する:</strong> 「フルリモート希望」「週◯日まで出社可」など許容範囲をエージェントに伝え、条件に合う求人だけを提案してもらう。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>直接応募型で自分でも検索する:</strong> Greenのような媒体で勤務形態を絞り込み、エージェント提案と二重に探すと取りこぼしが減る。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>カジュアル面談で実態を確認する:</strong> 求人票が「リモート可」でも、実際の出社頻度やチーム文化は企業差が大きい。面談で運用実態を聞く。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">4</span>
                <p className="text-sm text-slate-600"><strong>応募直前に勤務形態を再確認する:</strong> リモート条件は変動するため、応募前に最新の求人票・担当者情報で条件を再チェックする。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="select" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート希望者ならではの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 「件数の多さ」より「絞り込みやすさ」</h3>
              <p>リモート求人数は変動が大きく、宣伝上の件数はあてになりにくいものです。勤務形態で検索・提案を絞り込めるか、出社頻度まで確認できるかを基準に選びましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. IT/Web特化型を軸にする</h3>
              <p>Web系・クラウド系はリモートと相性が良い領域です。Geeklyやレバテックキャリアなどの専門エージェントは、こうした領域の求人にアクセスしやすい傾向があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. 直接応募型と仲介型を併用する</h3>
              <p>Green（直接応募・カジュアル面談）と、Geekly・doda（仲介サポート）を併用すると、リモート条件の合う求人を取りこぼしにくくなります。サポートが欲しい部分は仲介型に頼りましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">4. ハイクラス帯はスカウト型も</h3>
              <p>年収を上げつつリモートを狙うなら、ビズリーチのようなハイクラス・スカウト型で高年収帯のリモート可ポジションを受け取る選択肢もあります。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">※口コミプラットフォームに見られる傾向の要約です。原文転載ではありません。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">良い評判の傾向</h3>
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
              <h3 className="font-bold text-slate-700 mb-2 text-sm">気になる評判の傾向</h3>
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

        <section id="checklist" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート転職に向いている人・向いていない人</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代のリモート転職で押さえたいこと</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>当サイトの読者は30代・40代のミドルエンジニアが中心です。この年代がリモート転職を狙うときの強みは、すでに実務経験があり「リモートでも自走できる人材」として評価されやすい点です。Web系・クラウド系など自走しやすい領域の経験があるほど、リモート求人の選択肢は広がります。</p>
            <p>一方で注意点もあります。リモート前提の転職では、入社後のオンボーディングや人間関係の構築が対面より難しくなりがちです。30代・40代はチームを牽引する立場を期待されることも多いため、カジュアル面談の段階で「リモート下でのコミュニケーション設計」「出社頻度の実態」を確認しておくと、入社後のミスマッチを避けられます。</p>
            <p>また、リモート可の求人は条件が変動しやすく、件数も時期で増減します。焦って件数の多さだけで選ぶより、勤務形態を明言して条件の合う求人を着実に絞り込む方が、結果的に満足度の高い転職につながります。地方在住で首都圏企業を狙う場合は、<Link href="/area/remote/" className="text-petrol hover:underline">フルリモートIT転職ガイド</Link>や<Link href="/area/iiju/" className="text-petrol hover:underline">地方移住×IT転職</Link>も合わせて確認してください。</p>
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
          <h2 className="text-xl font-bold mb-3">リモート求人は「絞り込み」で取りこぼさない</h2>
          <p className="text-blue-100 text-sm mb-4">直接応募型と仲介型を併用し、勤務形態を明言して条件の合う求人を確実に拾いましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
