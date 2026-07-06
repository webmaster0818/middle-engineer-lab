import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ギークスジョブの評判・口コミ｜30代40代フリーランスエンジニア";
const DESCRIPTION =
  "ギークスジョブ（geechs job／ギークス株式会社運営）の評判・口コミを30代40代エンジニア目線で検証。リモート案件比率、福利厚生フリノベ、マージン非公開、支援実績20年、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/geechs/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/geechs/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "単価・マージン・福利厚生の考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "ギークス株式会社（geechs／東証スタンダード上場）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント"],
  ["対象", "ITエンジニア・Webデザイナー等の実務経験者"],
  ["公開案件数", "公開7,000件以上（二次情報・時点要確認）／取引企業約3,810社という二次情報"],
  ["支援実績", "20年以上の支援実績という二次情報。登録者約23,000人という二次情報"],
  ["リモート", "リモートワーク案件が8割以上という二次情報（時点要確認）"],
  ["福利厚生", "フリーランス向け支援『フリノベ』（健康診断・確定申告サポート・学習割引等）"],
  ["マージン", "非公表（確認不可）"],
  ["対応エリア", "東京・大阪・名古屋・福岡に拠点（二次情報）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "リモート案件の比率が高く働き方を選びやすい",
    body: "フリーランススタートやエンジニアスタイル等の口コミ系では、リモート案件が多く（二次情報では8割以上）、通勤負担を抑えて参画できたという傾向の声が見られる。週3日など柔軟な稼働の案件も扱うとされる。",
  },
  {
    title: "福利厚生『フリノベ』が独立後の不安を補う",
    body: "ギークスはフリーランス向け支援『フリノベ』を提供しており、健康診断・確定申告サポート・オンライン学習割引などが利用できるという公式・二次情報がある。独立後の事務・健康面の不安を補える点が評価されている。",
  },
  {
    title: "上場企業の運営・長年の実績で安心感がある",
    body: "東証スタンダード上場のギークス株式会社が運営し、20年以上の支援実績という二次情報がある。取引企業数の多さもあり、安定して案件を探せたという傾向の声が見られる。",
  },
];

const badReviews = [
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が限られたという傾向の声がエンジニア系の口コミで見られる。",
    cope: "実務経験が浅いうちは無理に独立せず、まず正社員で経験を積むのが現実的。安定雇用で経験を積みたい場合は正社員転職のレバテックキャリア（/review/levtech/）を検討するとよい。",
  },
  {
    title: "案件・拠点が都市圏中心",
    body: "拠点が東京・大阪・名古屋・福岡中心という二次情報があり、地方の常駐案件は限られるという傾向の声がある。リモート比率は高いものの、地域差は残る。",
    cope: "リモート可案件を明示的に希望条件として伝える。地方在住なら全国12拠点のPE-BANK等も併用すると選択肢が広がる。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）が非公表のため、提示単価のうちどれだけが自分の取り分かが事前に分かりづらいという不安の声が見られる。",
    cope: "提示されるのは原則「自分が受け取る単価」であることが多いため、面談時に手取りベースの単価と契約形態（準委任／請負）を必ず確認する。マージンを公開するPE-BANKと比較すると相場感をつかみやすい。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代・40代エンジニア",
  "リモート中心で柔軟に働きたい独立志向の経験者",
  "福利厚生（フリノベ）で独立後の不安を補いたい",
  "上場企業運営の安心感を重視したい",
  "週3日など柔軟な稼働も視野に入れたい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "マージンが完全公開されたサービスで選びたい（→PE-BANK）",
  "収入の安定・正社員並み保障を最優先したい（→Midworks）",
  "地方の常駐案件中心で探している",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・カウンセリング予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力。在職中・現案件参画中でも次の案件探しとして登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。技術スタック・希望単価・リモート可否・稼働日数・NG条件をすり合わせる。手取りベースの希望単価をここで明確に伝える。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う案件の紹介を受け、応募する案件を決定。リモート可案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備・同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・フリノベ活用",
    body: "条件合意後に業務委託契約を締結し参画。参画後はフリノベの福利厚生や、単価交渉・次案件の相談を継続して受けられる。",
  },
];

const faqs = [
  {
    q: "ギークスジョブの運営会社はどこですか？",
    a: "東証スタンダード上場のギークス株式会社（geechs）が運営しています。20年以上の支援実績という二次情報があり、ITエンジニア・Webデザイナー向けの業務委託（フリーランス）案件を紹介するエージェントです。",
  },
  {
    q: "フリノベとは何ですか？",
    a: "フリノベはギークスが提供するフリーランス向け支援サービスで、健康診断・確定申告サポート・オンライン学習サービスの割引などが含まれるとされています。独立後に手薄になりがちな健康・事務面を補える点が特徴です。最新の内容は公式サイトでご確認ください。",
  },
  {
    q: "リモート案件は多いですか？",
    a: "リモートワーク案件が8割以上という二次情報があります（時点要確認）。通勤負担を抑えて参画したい人に向きますが、案件ごとに稼働条件は異なるため、リモート希望は面談で明示してください。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公表です（確認不可）。提示される単価が手取りベースか、契約形態が準委任か請負かを面談時に必ず確認してください。マージンを公開しているPE-BANKと比較すると、相場感をつかみやすくなります。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "業務委託案件は即戦力前提のため、IT実務経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "実務経験のある30代・40代と相性が良いサービスです。リモート比率が高く柔軟な働き方を選びやすいため、家庭の事情がある層にも向きます。常駐前提の案件では年齢を気にする声もあるため、リモート・専門性の高い案件を軸に探すとよいでしょう。",
  },
];

const related = [
  { name: "PE-BANKの評判（マージン公開）", href: "/review/pe-bank/" },
  { name: "レバテックフリーランスの評判（高単価）", href: "/review/levtech-freelance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスという働き方の基礎", href: "/employment/freelance/" },
];

export default function GeechsReview() {
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
          { name: "ギークスジョブ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ギークスジョブの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ リモート比率の高いフリーランス案件の実力を口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ギークスジョブ（geechs job）は、東証スタンダード上場のギークス株式会社が運営する、IT・Web系エンジニア向けに<span className="font-bold">業務委託（フリーランス）案件</span>を紹介するエージェントです。リモート案件比率の高さと福利厚生『フリノベ』が特徴です。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ギークス株式会社公式・geechs job公式",
            "フリーランススタート",
            "エンジニアスタイル",
            "複数フリーランス系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：リモート中心＋福利厚生で、安心して独立したい経験者向け</span>。一言でいえば「リモートで柔軟に働きつつ、独立後の不安も補いたいIT実務経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・リモート案件が8割以上という二次情報。柔軟な働き方を選びやすい。</li>
              <li>・福利厚生『フリノベ』で健康診断・確定申告サポート等を補える。上場企業運営の安心感。</li>
              <li>・一方で実務経験が前提・マージン非公表。手取りは面談で確認、地方はPE-BANK併用が現実的。</li>
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
            ※運営会社・上場区分・フリノベは公式情報、案件数・登録者数・リモート比率は二次情報（時点要確認）です。マージンは非公表で確認不可です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ギークスジョブの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. リモート案件比率が高い</h3>
              <p className="text-sm text-petrol-deep">
                リモートワーク案件が8割以上という二次情報があり、通勤負担を抑えて働きやすいのが特徴です。週3日など柔軟な稼働の案件も扱うとされ、ライフスタイルに合わせた参画を選びやすい構造です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 福利厚生『フリノベ』</h3>
              <p className="text-sm text-petrol-deep">
                フリーランス向け支援『フリノベ』を提供しており、健康診断・確定申告サポート・オンライン学習サービスの割引などが利用できるとされます。独立後に手薄になりがちな健康・事務面を補える点が他社との差別化要素です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 上場企業運営・長年の実績</h3>
              <p className="text-sm text-petrol-deep">
                東証スタンダード上場のギークス株式会社が運営し、20年以上の支援実績という二次情報があります。取引企業約3,810社という二次情報もあり、安定して案件を探せる土台があります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 案件量と登録者基盤</h3>
              <p className="text-sm text-petrol-deep">
                公開案件7,000件以上、登録者約23,000人という二次情報があります。案件数の多さは、希望条件に合う案件を比較しながら選べることに直結します（数値は時点により変動）。
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

        {/* 単価・マージン */}
        <section id="margin" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・マージン・福利厚生の考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ギークスジョブは<span className="font-bold">マージンを非公表</span>としています（確認不可）。一方で福利厚生『フリノベ』という形で間接的な還元があるのが特徴です。マージンの数値だけで他社と単純比較するのではなく、「提示される単価＋福利厚生で得られる価値」を総合的に見るのが妥当です。
            </p>
            <p>
              実務上は、提示される単価が「自分が受け取る単価（手取りベース）」であることが多いため、面談時に①提示単価が手取りか②契約形態（準委任／請負）③稼働日数・リモート可否、の3点を確認すれば判断できます。マージンを完全公開している
              <Link href="/review/pe-bank/" className="text-petrol hover:underline">PE-BANK</Link>
              と並べて比較すると、相場感をつかみやすくなります。
            </p>
            <p>
              なお、30代・40代で家族やローンがある場合、単価やリモート可否だけでなく<span className="font-bold">案件が途切れたときの備え</span>も重要です。報酬保障の仕組みがある
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              などと比較したうえで、自分のリスク許容度に合うサービスを選ぶとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。ギークスジョブはリモート比率と福利厚生が武器のため、家庭の事情や健康管理を重視する30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価されやすく、リモートで働きながら単価アップを狙える年代です。フリノベで確定申告・健康面の不安を補いつつ、最初の数案件は安全側に倒して実績を積むのが堅実です。独立に不安があれば、保障型のMidworksと比較して入口を選びましょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              技術力に加えてマネジメント・アーキテクト経験を単価に反映させやすい年代です。常駐型では年齢を気にする声もあるため、リモート可・専門性の高い案件を軸に探すと選択肢を確保しやすくなります。家族構成次第では、単価最大化より収入の安定を優先する判断も合理的です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。「いつでも正社員に戻れる状態」を保っておくと、独立後のリスクは大きく下がります。安定雇用を希望する場合は、正社員転職の
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              も検討してください。
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
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* フリーランス比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス各社の使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランスエージェントは「何を重視するか」で選ぶと失敗しにくいです。ギークスジョブは「リモート＋福利厚生」が強みで、単価最大化やマージン透明性を重視するなら他社との併用が有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["ギークスジョブ（本記事）", "リモート中心＋福利厚生で安心して独立したい人。"],
                  ["PE-BANK", "マージンを完全公開。透明性と全国拠点を重視する人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。"],
                  ["Midworks", "正社員並みの保障で安定して独立したい慎重派。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700">
                      {row[0]}
                    </td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/pe-bank/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              PE-BANK（マージン公開）の評判 →
            </Link>
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（高単価）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
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
          <h2 className="text-xl font-bold mb-3">ギークスジョブに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            リモート中心で柔軟に働きたい方は、福利厚生のあるギークスジョブに相談してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料カウンセリングを予約する
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
