import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Midworksの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "Midworks（ミッドワークス）の評判・口コミを30代40代エンジニア目線で検証。正社員並みの保障や報酬保障、マージン約20%への評価、「やばい」の真相、向き不向きをデータと出典付きで解説。レバテックフリーランス等との使い分けも整理します。";
const URL = "/review/midworks/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み（正社員並み保障）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "マージン約20%と保障の考え方" },
  { id: "yabai", label: "「やばい」という検索の真相" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス3社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社Branding Engineer（TWOSTONE&Sons傘下に統合・最新法人名は要確認）"],
  ["サービス種別", "フリーランス案件紹介＋正社員並み保障"],
  ["公開案件数", "常時1万件以上（非公開約80%）"],
  ["登録者数", "5万人（2025年4月時点・二次情報）"],
  ["特徴的な保障", "報酬保障（案件途切れ時に報酬の60%を保障）・正社員並みの福利厚生"],
  ["マージン", "約20%（媒体指摘・やや高めとされる／公式公表値ではない＝確認不可）"],
  ["対応エリア", "首都圏中心（二次情報。リモート案件あり）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "正社員並みの保障・福利厚生で安心して独立できた",
    body: "フリーランス系メディアやエンジニア向け口コミでは、報酬保障や福利厚生といった「正社員並み」の仕組みがあることで、独立の不安が和らいだという傾向の声が見られる。家族がいる・ローンがあるといったミドル層から、安定面を評価する感想が複数確認できる。",
  },
  {
    title: "案件が途切れたときの報酬保障が心強い",
    body: "案件と案件の間で収入が途切れるリスクに対し、報酬保障（案件途切れ時に報酬の60%を保障）がある点を評価する傾向の声がフリーランス系プラットフォームで見られる（適用には条件があるため要確認）。",
  },
  {
    title: "案件量も最大手級で選択肢がある",
    body: "常時1万件以上・非公開約80%という案件規模で、保障型でありながら案件の選択肢も確保されているという傾向の声が見られる。",
  },
];

const badReviews = [
  {
    title: "マージンが約20%とやや高め",
    body: "媒体の指摘では、Midworksのマージンは約20%とされ、他社より高めという声がある。なお、これは媒体指摘・推定であり公式の公表値ではない（確認不可）。保障の手厚さとのトレードオフという見方もある。",
    cope: "保障・福利厚生という付加価値にコストを払う設計と捉え、単価だけを最大化したい場合はエンド直で単価が高めのレバテックフリーランスと提示単価を比較する。保障が不要なら他社の方が手取りが増える可能性がある。",
  },
  {
    title: "保障の適用条件が厳しいと感じる場合がある",
    body: "報酬保障や福利厚生は魅力だが、適用に条件があり、想定したほど手厚く使えなかったと感じたという傾向の声が見られる。",
    cope: "面談時に報酬保障の適用条件（稼働実績・継続条件など）と福利厚生の具体的な範囲を必ず書面・口頭で確認する。期待値を事前にすり合わせることでギャップを防げる。",
  },
  {
    title: "「やばい」と検索されることへの不安",
    body: "「Midworks やばい」というサジェストを見て不安になるという声がある。実際の中身は後述のとおりマージンや保障条件への評価が中心で、サービス自体が危険という意味ではないケースが多い。",
    cope: "「やばい」の中身を分解して確認することが大切。当記事の『やばいの真相』セクションで、何がそう言われるのかを整理している。",
  },
];

const fitYes = [
  "「独立したいが不安定が怖い」30代・40代の経験者",
  "家族・ローンがあり収入の安定を重視したい",
  "福利厚生や報酬保障を受けながらフリーランスを始めたい",
  "首都圏勤務またはリモート案件で参画できる",
  "保障のためにマージンを払うことに納得できる",
];

const fitNo = [
  "とにかく単価・手取りを最大化したい（→レバテックフリーランス）",
  "週2〜3日・副業ベースで始めたい（→ITプロパートナーズ）",
  "完全な正社員雇用と昇進を望む（→正社員転職）",
  "地方の常駐案件中心で探している",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力。在職中でも次の働き方の相談として登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。技術スタック・希望単価に加え、報酬保障・福利厚生の適用条件をここで具体的に確認しておくと後のギャップを防げる。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う案件（非公開含む）の紹介を受け、応募する案件を決定。保障を踏まえた手取りイメージを担当と確認する。",
  },
  {
    step: "STEP4",
    title: "商談・契約",
    body: "クライアントとの商談に臨み、条件合意後に契約。Midworks側の保障・福利厚生の手続きもこの段階で確認する。",
  },
  {
    step: "STEP5",
    title: "参画・継続サポート",
    body: "参画後も単価交渉・契約更新・次案件の相談に加え、案件が途切れた際の報酬保障の運用について継続的にサポートを受けられる。",
  },
];

const faqs = [
  {
    q: "Midworksの報酬保障とは何ですか？",
    a: "案件と案件の間で収入が途切れた場合に、報酬の60%を保障するという仕組みが二次情報として知られています。これにより独立後の収入の安定性を高められるのが特徴です。ただし適用には稼働実績などの条件があるため、面談で具体的な適用条件を必ず確認してください。",
  },
  {
    q: "マージンは何%ですか？高いと聞きました。",
    a: "媒体の指摘では約20%とされ、他社よりやや高めという見方があります。これは媒体指摘・推定であり、Midworks公式の公表値ではありません（確認不可）。マージンは報酬保障や福利厚生といった付加価値とのトレードオフと捉えるのが妥当です。単価・手取りだけを最大化したい場合は、エンド直で単価が高めのレバテックフリーランスと提示単価を比較してください。",
  },
  {
    q: "「Midworks やばい」と出てきますが大丈夫ですか？",
    a: "サジェストの「やばい」は、多くがマージンの高さや保障の適用条件への評価に由来します。サービス自体が危険という意味ではないケースが中心です。気になる点は面談で条件を確認し、納得したうえで利用するかを判断するとよいでしょう。",
  },
  {
    q: "未経験でも使えますか？",
    a: "フリーランス案件は基本的に即戦力前提のため、実務経験が浅い場合は紹介が限られます。経験が浅い方は、まず正社員で経験を積むのが現実的で、安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "レバテックフリーランスやITプロパートナーズとどう違いますか？",
    a: "Midworksは『正社員並みの保障で安定して独立したい人』向けです。単価・案件量を最大化したいならレバテックフリーランス、週2〜3日・副業から始めたいならITプロパートナーズが向いています。詳しくは本記事の使い分け表をご覧ください。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "独立が不安です。正社員に戻れますか？",
    a: "フリーランスで実績を積んでから正社員に戻るルートもあります。考え方は/career/freelance-to-permanent/や/knowledge/freelance-vs-fulltime/で整理しています。Midworksは保障型のため、独立の第一歩として比較的リスクを抑えやすい選択肢です。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（単価・案件量）", href: "/review/levtech-freelance/" },
  { name: "ITプロパートナーズの評判（週2-3日）", href: "/review/itpropartners/" },
  { name: "安定雇用ならレバテックキャリア", href: "/review/levtech/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスと正社員どちらが得か", href: "/knowledge/freelance-vs-fulltime/" },
];

export default function MidworksReview() {
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
          { name: "レビュー", href: "/#ranking" },
          { name: "Midworks" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Midworks（ミッドワークス）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 正社員並み保障のフリーランス支援を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Midworks（ミッドワークス）は、フリーランス（業務委託）案件の紹介に<span className="font-bold">正社員並みの保障・福利厚生</span>を組み合わせたサービスです。本記事では評判・口コミを実際の口コミプラットフォームの傾向と、各社が公表する数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Midworks公式系の公表値",
            "フリーランス系メディア集計値",
            "エンジニア向け口コミプラットフォーム",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：「独立したいが不安定が怖い」ミドルの第一歩に最適</span>。一言でいえば「正社員並みの保障を受けながら、安心してフリーランスを始めたい経験者」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・報酬保障（案件途切れ時に報酬の60%保障）と福利厚生で、独立後の不安を抑えやすい。</li>
              <li>・案件量も常時1万件以上（非公開約80%）と最大手級。</li>
              <li>・一方でマージンは約20%とやや高め（媒体指摘・確認不可）。単価最大化ならレバテックフリーランス、週2-3日ならITプロパートナーズへ。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-blue-700">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※案件数・登録者数・マージンは時期や算出条件により変動する二次情報です。マージン約20%は媒体指摘・推定であり公式公表値ではありません（確認不可）。報酬保障は適用条件があります。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Midworksの特徴・強み（正社員並み保障）</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 報酬保障で収入の途切れに備えられる</h3>
              <p className="text-sm text-blue-700">
                案件と案件の間で収入が途切れた場合に報酬の60%を保障するという仕組み（二次情報・適用条件あり）が、最大の差別化ポイントです。独立後の最大の不安である「案件が切れたときの収入」を抑えられる設計です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 正社員並みの福利厚生</h3>
              <p className="text-sm text-blue-700">
                福利厚生面でも正社員に近い支援を受けられる点が評価されています。フリーランスは福利厚生が弱点になりやすいため、ここを補える設計は安定志向のミドルに刺さります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 案件量も最大手級</h3>
              <p className="text-sm text-blue-700">
                常時1万件以上・非公開約80%という案件規模で、保障型でありながら案件の選択肢も確保されています。登録者数は5万人（2025年4月・二次情報）とされます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 「不安定が怖い」層の独立の第一歩に</h3>
              <p className="text-sm text-blue-700">
                保障と福利厚生があることで、家族やローンを抱える30代・40代でも独立に踏み出しやすいのが特徴です。単価最大化より安定を優先したいミドルの入り口として機能します。
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

        {/* 悪い評判 */}
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

        {/* マージンと保障 */}
        <section id="margin" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マージン約20%と保障の考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Midworksのマージンは、媒体の指摘では<span className="font-bold">約20%</span>とされ、他社よりやや高めという見方があります。ただしこれは<span className="font-bold">媒体指摘・推定であり、Midworks公式の公表値ではありません（確認不可）</span>。出典のない断定は避けて理解する必要があります。
            </p>
            <p>
              マージンの数字だけを見ると割高に映りますが、Midworksは<span className="font-bold">報酬保障と正社員並みの福利厚生</span>という付加価値を提供する設計です。「安定のコストをエージェントに払う」という構造として捉えると、評価が変わります。単価・手取りだけを最大化したいなら、エンド直で単価が高めの
              <Link href="/review/levtech-freelance/" className="text-blue-600 hover:underline">レバテックフリーランス</Link>
              の提示単価と並べて比較するのが合理的です。
            </p>
            <p>
              判断のコツは、①保障が自分に必要か（家族・ローン・貯蓄の状況）②保障の適用条件を満たせるか③同じ案件で他社が提示する単価との差、の3点を見ることです。保障が不要なら他社の方が手取りが増える可能性があり、保障が必要ならマージン差は「安心料」として納得しやすくなります。
            </p>
          </div>
        </section>

        {/* やばいの真相 */}
        <section id="yabai" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「Midworks やばい」という検索の真相</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              「Midworks やばい」というサジェストを見て不安になる方は少なくありません。実際に何が「やばい」と言われているのかを分解すると、主に次の2点に集約されます。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>マージンが約20%とやや高め（媒体指摘・確認不可）であること</li>
              <li>報酬保障・福利厚生の適用条件が想定より厳しいと感じたケースがあること</li>
            </ul>
            <p>
              いずれも<span className="font-bold">サービスが危険・詐欺的という意味ではなく、コストや条件への評価</span>が中心です。逆に言えば、面談時にマージンの考え方と保障の適用条件をきちんと確認し、自分の状況に合うかを見極めれば、「やばい」と感じる要因は事前に潰せます。検索サジェストのネガティブワードは、内容を分解して判断するのが正しい付き合い方です。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、Midworksは特に「独立したいが不安定が怖い」というミドル層の心理に最も寄り添うサービスだと位置づけています。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価され、独立による単価アップが見込める一方で、結婚・育児・住宅ローンなどライフイベントが重なりやすい年代です。最初から単価最大化に振り切るより、保障型のMidworksで実績を作り、慣れてから単価重視のレバテックフリーランスへ広げる二段構えが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              扶養家族やローンの負担が大きく、収入の安定が一段と重要になる年代です。報酬保障と福利厚生は、40代が独立に踏み出す際のセーフティネットとして機能します。マネジメント・設計経験を活かせる案件を軸に、保障を土台として参画するのが現実的です。
            </p>
            <p>
              「いつでも正社員に戻れる状態」を保つ意識も大切です。考え方は
              <Link href="/career/freelance-to-permanent/" className="text-blue-600 hover:underline">フリーランスから正社員に戻るキャリア</Link>
              や
              <Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスと正社員の比較</Link>
              を参照してください。そもそも安定した正社員雇用を希望する場合は、正社員転職の
              <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリア</Link>
              に相談するのが近道です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から参画までの流れ（5ステップ）</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-blue-700 font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* フリーランス3社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス3社の使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランスエージェントは「何を最大化したいか」で選ぶと失敗しにくいです。当サイトでレビューしている3社は、それぞれ強みが住み分けられています。Midworksは保障で安定を取りたい人向けです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["Midworks（本記事）", "正社員並みの保障で安定して独立したい慎重派。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。最大手級。"],
                  ["ITプロパートナーズ", "週2〜3日・副業から独立準備したい人。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700">{row[0]}</td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              レバテックフリーランス（単価・案件量）の評判 →
            </Link>
            <Link href="/review/itpropartners/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              ITプロパートナーズ（週2-3日）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              フリーランスエージェント比較 →
            </Link>
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
              安定雇用ならレバテックキャリア →
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Midworksに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料面談で、保障の条件と自分の単価レンジを確認してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            無料面談を予約する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
