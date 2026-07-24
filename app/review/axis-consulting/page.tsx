import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "アクシスコンサルティングの評判｜エンジニアのコンサル転職";
const DESCRIPTION =
  "アクシスコンサルティング（AXIS Agent）の評判・口コミを30代40代エンジニア目線で検証。コンサル業界特化の強み、非公開求人約77%、ITコンサル・PM・DXへのキャリアチェンジ用途、純開発志向には不向きな点までデータと出典付きで解説します。";
const URL = "/review/axis-consulting/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/axis-consulting/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "scope", label: "コンサル特化＝純開発志向には不向き" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "エンジニアからコンサルへのキャリアチェンジ視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "アクシスコンサルティング株式会社（2002年設立・2023年東証グロース上場）"],
  ["サービス名", "AXIS Agent（旧称：アクシスコンサルティング）"],
  ["サービス類型", "コンサル業界特化の転職エージェント（CxO層ネットワーク）"],
  ["非公開求人比率", "約77%（公開総数は確認不可）"],
  ["対象", "コンサルファーム転職／ポストコンサル／IT・DXコンサル／CxO"],
  ["得意領域", "コンサル業界の知識・選考対策、非公開ハイクラス求人"],
  ["対応エリア", "東京中心（二次情報）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "コンサル業界特化の知識と選考対策",
    body: "イーデスやみん評等の口コミプラットフォームでは、コンサルファーム特有のケース面接やフェルミ推定など、業界に特化した選考対策が具体的で役立ったという傾向の声が見られる。一般的な総合エージェントでは得にくい、ファームごとの傾向に踏み込んだ支援が評価されている。",
  },
  {
    title: "サポートが手厚い",
    body: "OpenWork等では、面談から選考、内定後までのサポートが丁寧で、コンサル未経験からの挑戦でも伴走してもらえたという傾向の声が見られる。キャリアチェンジに不安のある層との相性が良いという感想が確認できる。",
  },
  {
    title: "非公開のハイクラス求人に出会える",
    body: "イーデス等では、非公開求人比率が高く（約77%）、CxO層ネットワークを通じて表に出ないポジションを紹介してもらえたという傾向の声が見られる。コンサル業界・ポストコンサルの選択肢を広げたい層に向いている。",
  },
];

const badReviews = [
  {
    title: "コンサル以外の求人には不向き",
    body: "コンサル業界に特化しているため、純粋な開発職や事業会社の一般的なエンジニア求人を探す場合は紹介が乏しいと感じたという傾向の声がみん評等で見られる。これは特化型ゆえの構造的な側面である。",
    cope: "純開発志向ならIT特化エージェント（レバテックキャリア等）が本筋。アクシスは『コンサル／DX人材へキャリアチェンジしたい』場合に限って使うのが適切。方向性に迷うなら、まず当サイトの『エンジニアからコンサルへ』の記事で適性を確認すると良い。",
  },
  {
    title: "東京中心で地方は選択肢が限られる",
    body: "コンサルファームの求人が東京に集中する性質上、地方在住・地方勤務希望では選択肢が限られると感じたという傾向の声がOpenWork等で見られる。",
    cope: "リモート前提のコンサルポジションを面談で確認するか、地方の事業会社も視野に入れるなら総合型・IT特化型を併用する。",
  },
  {
    title: "経歴次第で断られることがある",
    body: "コンサル業界はポテンシャルと論理的思考力が問われるため、経歴や年齢、志望動機の整合性次第では紹介が難しいと感じたという傾向の声がイーデス等で見られる。",
    cope: "なぜコンサル／DXに進みたいのかを、これまでのエンジニア経験と結びつけて言語化しておくことが重要。面談前に『技術者としての強みをどうコンサルで活かすか』を整理しておくと通過率が上がる。",
  },
];

const fitYes = [
  "エンジニアからITコンサル・PM・DX人材へキャリアチェンジしたい30〜40代",
  "技術力を土台に、上流・経営に近い立場で価値を出したい",
  "年収を一段上げる手段としてコンサル業界を検討している",
  "コンサルファーム特有の選考（ケース面接等）の対策を受けたい",
  "非公開のコンサル・ポストコンサル求人を知りたい",
];

const fitNo = [
  "純粋な開発職にこだわり、コードを書き続けたい（IT特化型が向く）",
  "コンサル業界に関心がなく、事業会社のエンジニアを探している",
  "地方勤務を最優先したい（東京中心のため）",
  "コンサル特有の働き方（高負荷・論理思考の徹底）に抵抗がある",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約5分）",
    body: "公式サイト（AXIS Agent）から経歴・希望を入力。コンサル未経験でも登録可能。なぜコンサル／DXに進みたいかを軽く整理しておくと面談がスムーズ。",
  },
  {
    step: "STEP2",
    title: "コンサルタントとの面談",
    body: "コンサル業界に精通した担当と面談（オンライン可）。エンジニア経験をコンサルでどう活かすか、狙えるファーム・ポジションのレンジをすり合わせる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募",
    body: "非公開求人（比率約77%）を含むコンサル・ポストコンサル求人の紹介を受け、応募先を決定。ファームごとの特徴の説明を受けてから選べる。",
  },
  {
    step: "STEP4",
    title: "選考対策（ケース面接等）",
    body: "コンサル特有のケース面接・フェルミ推定・志望動機の整理など、業界特化の選考対策を受ける。ここがアクシスの最大の価値といえる。",
  },
  {
    step: "STEP5",
    title: "内定・条件交渉・入社",
    body: "内定後の条件交渉をサポート。キャリアチェンジでも年収を上げられるケースがある一方、入社後のギャップを避けるため働き方の確認も行う。",
  },
];

const faqs = [
  {
    q: "アクシスコンサルティングとAXIS Agentは同じですか？",
    a: "同じサービスです。アクシスコンサルティング株式会社が運営する転職エージェントで、サービス名は「AXIS Agent」です。社名・サービス名の表記が併存しているため混同されがちですが、別物ではありません。本記事では新旧を併記しています。",
  },
  {
    q: "純粋な開発職を続けたいエンジニアにも向いていますか？",
    a: "向いていません。アクシスコンサルティング（AXIS Agent）はコンサル業界に特化したエージェントで、ITコンサル・PM・DX人材といった上流・経営に近いポジションが中心です。コードを書き続けたい・純粋な開発職にこだわる場合は、レバテックキャリアなどのIT特化エージェントが本筋です。アクシスは『エンジニアからコンサル／DX人材へキャリアチェンジしたい』場合に限って有効、という位置づけで考えてください。",
  },
  {
    q: "エンジニアからITコンサルやDX人材に転身できますか？",
    a: "可能性はあります。技術力を土台に上流・経営に近い立場で価値を出したい層には、コンサル業界特化のアクシスが適しています。ただし、なぜコンサル／DXに進みたいのかをエンジニア経験と結びつけて言語化できることが重要です。キャリアチェンジの全体像や適性は、当サイトの『エンジニアからコンサルへ』の記事で詳しく解説しているので、方向性に迷う場合はそちらを先に読むことをおすすめします。",
  },
  {
    q: "非公開求人はどのくらいありますか？",
    a: "非公開求人の比率は約77%とされています（公開求人の総数は確認不可）。CxO層ネットワークを通じて、表に出ないコンサル・ポストコンサルのハイクラス求人を扱う点が特徴です。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "コンサルファームの求人は東京に集中する性質があり、地方勤務希望では選択肢が限られることがあります（二次情報）。リモート前提のポジションを面談で確認するか、地方の事業会社も視野に入れるなら総合型・IT特化型の併用を検討してください。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・選考対策・条件交渉まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "コンサルではなく年収アップだけが目的でも使えますか？",
    a: "年収アップを「コンサル業界への転身」という手段で実現したい場合には有効ですが、コンサルに関心がなく単に高年収を狙うだけなら、ハイクラス・ミドル特化のJACリクルートメントやスカウト型のdoda Xの方が幅広く合います。アクシスはあくまでコンサル特化である点を踏まえて選んでください。",
  },
];

const related = [
  { name: "エンジニアからコンサルへのキャリア", href: "/career/engineer-to-consultant/" },
  { name: "JACリクルートメントの評判（ハイクラス・ミドル特化）", href: "/review/jac-recruitment/" },
  { name: "明光キャリアパートナーズの評判（明光義塾グループ）", href: "/review/meiko-career/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/age/40s/" },
  { name: "自己分析でキャリアの軸を決める", href: "/knowledge/self-analysis/" },
];

export default function AxisConsultingReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "アクシスコンサルティング" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          アクシスコンサルティング（AXIS Agent）の評判・口コミ【エンジニアのコンサル転職】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ コンサル業界特化エージェントの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          アクシスコンサルティング（サービス名：AXIS Agent）は、コンサル業界に特化した転職エージェントです。CxO層ネットワークを背景に、コンサルファーム転職・ポストコンサル・IT／DXコンサル・CxOポジションを扱います。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公開データに基づき、コンサルへのキャリアチェンジを考える30代・40代エンジニア視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "アクシスコンサルティング（AXIS Agent）公式",
            "イーデス",
            "OpenWork",
            "みん評",
            "厚生労働省 job tag",
            "複数転職メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：エンジニアから「ITコンサル・PM・DX人材」へキャリアチェンジしたい30〜40代に有効</span>。一言でいえば「技術力を土台に、上流・経営に近い立場へ進みたい」人向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・コンサル業界特化の選考対策（ケース面接等）とCxO層ネットワーク。非公開求人比率は約77%。</li>
              <li>・年収を一段上げる手段としてのコンサル転身と相性が良い。サポートが手厚い。</li>
              <li>・<span className="font-bold">純粋な開発職にこだわる人には不向き</span>。コンサル以外・地方中心・経歴次第で断られる点に注意。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            基本データ表（2026年6月時点）
          </h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※非公開求人比率約77%は二次情報で、公開求人の総数は確認不可です。対応エリアの東京中心も二次情報です。社名・サービス名（アクシスコンサルティング／AXIS Agent）は併記しています。
          </p>
        </section>

        {/* コンサル特化＝純開発には不向き */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            コンサル特化＝純開発志向のエンジニアには不向き（最初に明記）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              先に率直にお伝えすると、アクシスコンサルティング（AXIS Agent）は<span className="font-bold">純粋な開発職にこだわるエンジニアには向いていません</span>。コンサル業界に特化しており、ITコンサル・PM・DX人材といった上流・経営に近いポジションが中心だからです。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            「コードを書き続けたい」「事業会社の開発組織で技術を深めたい」という志向なら、IT特化エージェント（レバテックキャリア等）が本筋です。アクシスは<span className="font-bold text-slate-700">「エンジニアとしての技術力を土台にしつつ、コンサル／DX人材へキャリアチェンジしたい」場合に限って有効</span>、という位置づけで考えてください。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            そもそもコンサルに進むべきか迷っている段階なら、まず当サイトの
            <Link href="/career/engineer-to-consultant/" className="text-petrol-deep underline">エンジニアからコンサルへのキャリア</Link>
            の記事で、向き不向き・年収・働き方の現実を確認することをおすすめします。方向性が定まってからアクシスのような特化エージェントに相談する方が、ミスマッチを避けられます。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アクシスコンサルティングの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. コンサル業界特化の選考対策</h3>
              <p className="text-sm text-petrol-deep">
                ケース面接・フェルミ推定・志望動機の整理など、コンサルファーム特有の選考に踏み込んだ対策を受けられるのが最大の価値です。一般的な総合エージェントでは得にくい、ファームごとの傾向に基づく支援が期待できます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. CxO層ネットワークと非公開求人</h3>
              <p className="text-sm text-petrol-deep">
                CxO層とのネットワークを背景に、非公開求人比率は約77%。表に出ないコンサル・ポストコンサルのハイクラスポジションを扱い、選択肢を広げられます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. キャリアチェンジへの手厚いサポート</h3>
              <p className="text-sm text-petrol-deep">
                コンサル未経験からの挑戦でも伴走してもらえるサポート体制が、口コミでも評価されています。エンジニアからのキャリアチェンジという不安の大きい転職と相性が良いといえます。運営は2023年東証グロース上場のアクシスコンサルティング株式会社です。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載・スコア転載ではありません）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 text-sm">◎ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判と対処法 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、ネガティブな傾向の声と、それぞれへの現実的な対処法もまとめます。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-red-600 mb-2 text-sm">△ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-bold">対処法：</span>
                    {r.cope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 年収相場データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの年収相場データ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            コンサルへの転身は年収アップの手段になり得ますが、その妥当性を判断するには、まずエンジニアとしての現在地（相場）を把握しておくことが大切です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["システムエンジニア（受託開発）平均年収", "約578.5万円"],
                  ["同・平均年齢", "約37.1歳"],
                  ["コンサル転身で狙う方向性", "上流・経営に近いポジションで年収を一段上げる"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（権威データ）。コンサルファームはこの水準より上の年収レンジを提示するケースもありますが、その分だけ求められる論理的思考力・成果へのプレッシャーも上がります。年収だけでなく働き方の変化も含めて、転身の是非を判断することが重要です。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：厚生労働省 job tag。年収は職種・地域・経験・ファームにより大きく異なります。
          </p>
        </section>

        {/* キャリアチェンジ視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            エンジニアからコンサルへのキャリアチェンジ視点（30代・40代）
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、アクシスコンサルティングを「コンサル／PM／DXへのキャリアチェンジを決めた人が使う特化エージェント」と位置づけます。裏を返せば、まだ純開発を続けたい人や、コンサルに迷いがある人が最初に登録する先ではありません。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              技術力を土台に、ITコンサル・DX人材として上流・経営に近い領域へ広げたいなら、転身のタイミングとして現実的な年代です。エンジニア経験（要件定義・技術選定・チームリード）はコンサルでも武器になります。面談前に「技術者としての強みをどうコンサルで活かすか」を言語化しておくと、選考対策が活きます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              ポテンシャル採用の側面があるコンサル業界では、40代でのキャリアチェンジは30代より難度が上がる傾向があります。ただし、特定ドメインの深い知見やマネジメント経験を「DX推進・PMO・ITコンサル」として位置づけ直せれば道はあります。年収一段アップの手段として現実的かは、まず
              <Link href="/career/engineer-to-consultant/" className="text-petrol-deep underline">エンジニアからコンサルへのキャリア</Link>
              で適性を確認したうえで判断してください。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、DX推進を担えるIT×コンサル人材への需要は構造的に底堅いと考えられます。純開発か、コンサル／上流かは優劣ではなく適性の問題です。自分の軸を定めてから特化エージェントを使うのが、後悔のない選択につながります。
            </p>
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            向いている人／向いていない人チェックリスト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの流れ（5ステップ）</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            アクシスはコンサル特化が強み。コンサルに限らず上場・外資・管理職を広く狙うならJACリクルートメント、純開発を続けるならIT特化型が向きます。そもそもコンサルに進むべきか迷うなら、キャリアの方向性を整理してから特化エージェントを使うのが鉄則です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/career/engineer-to-consultant/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              エンジニアからコンサルへのキャリア →
            </Link>
            <Link href="/review/jac-recruitment/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              JACリクルートメントの評判 →
            </Link>
            <Link href="/compare/highclass/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ハイクラス向けエージェント比較 →
            </Link>
            <Link href="/knowledge/self-analysis/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              自己分析でキャリアの軸を決める →
            </Link>
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判／悪い評判の傾向」は、以下の口コミ・評判メディアで公開されているアクシスコンサルティング（AXIS Agent）の情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各リンクは2026年7月17日時点で実在を確認しています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="https://www.a-tm.co.jp/top/job-change/tenshoku-agent/axis-consulting/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">イーデス（アクシスコンサルティングの評判・口コミページ）</a>
            </li>
            <li>
              <a href="https://minhyo.jp/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">みん評（口コミプラットフォーム・トップ）</a>
            </li>
            <li>
              <a href="https://www.openwork.jp/company.php?m_id=a0C30000003CJ1M" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">OpenWork（アクシスコンサルティングの社員クチコミページ）</a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">アクシスコンサルティング（AXIS Agent）に無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            コンサル・DXへのキャリアチェンジを決めたら、業界特化の選考対策を受けてみませんか？
          </p>
          <a href="https://www.axc.ne.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料相談を予約する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
