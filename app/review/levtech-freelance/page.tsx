import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "レバテックフリーランスの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "レバテックフリーランスの評判・口コミを30代40代エンジニア目線で検証。平均単価68万円や案件量、高単価の理由、マージン非公表への不安、向き不向きをデータと出典付きで解説。正社員転職のレバテックキャリアとの違いも整理します。";
const URL = "/review/levtech-freelance/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/levtech-freelance/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "diff", label: "レバテックキャリアとの違い（重複回避）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "単価・マージンの考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス3社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "レバテック株式会社（レバレジーズグループ）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介・エンド直請け"],
  ["公開案件数", "公開1万件以上／公式系では約97,000件以上とも（二次情報・時点要確認）"],
  ["平均年収・単価", "利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（二次情報）"],
  ["対応エリア", "首都圏中心（二次情報。リモート案件あり）"],
  ["得意領域", "IT・Web系の高単価業務委託案件／実務経験者向け"],
  ["マージン", "非公表（業界相場10〜15%は推定＝確認不可）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "単価が高く直請け案件が多い",
    body: "フリーランススタートやレバテック公式の利用者データでは、平均単価68万円・中央値65万円という二次情報があり、エンド直（直請け）案件が中心のため中間マージンが抑えられ単価が高めという傾向の声が見られる。経験のあるエンジニアほど好条件を提示されやすい、という感想が複数のフリーランス系メディアで確認できる。",
  },
  {
    title: "案件量が業界最大手級で選択肢が広い",
    body: "Geek Jobsやエンジニアスタイル等の口コミ系では、公開案件が豊富で希望に合う案件を比較しながら選べたという傾向の声が見られる。レバテック公式系では満足度92.6%という二次情報もある（時期・調査主体に注意）。",
  },
  {
    title: "担当が技術・業界に詳しく交渉してくれる",
    body: "IT特化ゆえに技術スタックの会話が通じ、参画後の単価交渉や契約更新の相談にも乗ってもらえたという傾向の声がフリーランス系プラットフォームで見られる。",
  },
];

const badReviews = [
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が少なかったという傾向の声がエンジニア系の口コミで見られる。",
    cope: "実務経験が浅いうちは無理にフリーランス化せず、まず正社員で経験を積む選択肢が現実的。安定雇用で経験を積みたい場合は正社員転職の/review/levtech/（レバテックキャリア）を検討するとよい。",
  },
  {
    title: "首都圏中心で地方・フルリモート案件は限られる",
    body: "案件が首都圏（東京中心）に集中しており、地方在住だと選択肢が減ったという傾向の声が見られる。常駐前提の案件も一定数ある。",
    cope: "リモート可案件を明示的に希望条件として伝え、フルリモートに強い他社（ITプロパートナーズ等）も併用すると選択肢が広がる。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）が非公表のため、提示単価のうちどれだけが自分の取り分かが事前に分かりづらいという不安の声が見られる。業界相場10〜15%という数値は推定で、レバテック公式の公表値ではない（確認不可）。",
    cope: "提示されるのは原則「自分が受け取る単価」であることが多いため、面談時に手取りベースの単価と契約形態（準委任/請負）を必ず確認する。複数社の提示単価を並べて相対比較すると妥当性を判断しやすい。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代・40代エンジニア",
  "正社員より単価・年収を上げたい独立志向の経験者",
  "首都圏勤務またはリモート案件で参画できる",
  "案件量・選択肢の多さを重視したい",
  "技術に詳しい担当と単価交渉まで相談したい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "収入の安定や福利厚生を最優先したい（→Midworksや正社員転職）",
  "週2〜3日・副業ベースで始めたい（→ITプロパートナーズ）",
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
    body: "担当と面談（オンライン可）。技術スタック・希望単価・リモート可否・NG条件をすり合わせる。手取りベースの希望単価をここで明確に伝えると提案がぶれにくい。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合うエンド直案件の紹介を受け、応募する案件を決定。複数案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が同席・事前準備をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・更新サポート",
    body: "条件合意後に業務委託契約を締結し参画。参画後も単価交渉・契約更新・次案件の相談を継続して受けられる。",
  },
];

const faqs = [
  {
    q: "レバテックフリーランスとレバテックキャリアは何が違いますか？",
    a: "別サービスです。レバテックフリーランスはフリーランス（業務委託・準委任）の案件を紹介するサービスで、当記事の対象です。一方でレバテックキャリアは正社員としての転職を支援するエージェント（別記事/review/levtech/）です。同じレバテックブランドですが、雇用形態も契約の仕組みも異なります。安定した正社員雇用を希望する場合はレバテックキャリアを検討してください。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "業務委託案件は即戦力前提のため、IT実務経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公表です。業界相場として10〜15%という数値が語られることはありますが、これは推定でありレバテック公式の公表値ではありません（確認不可）。提示される単価が手取りベースか、契約形態が準委任か請負かを面談時に必ず確認してください。",
  },
  {
    q: "平均単価68万円というのは確実な数字ですか？",
    a: "平均年収881万円・平均単価68万円・中央値65万円・最高145万円といった数値は、フリーランス系メディアやレバテック公式系で見られる二次情報です。時点や算出条件により変動するため、自分のスキル・経験での提示単価は面談で個別に確認するのが確実です。",
  },
  {
    q: "地方在住・フルリモートでも使えますか？",
    a: "案件は首都圏中心という二次情報があり、常駐案件も一定数あります。リモート可案件もあるため、希望条件にリモートを明示しましょう。週2〜3日やフルリモート志向が強い場合は、ITプロパートナーズなどの併用も検討してください。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "独立が不安です。正社員に戻れますか？",
    a: "フリーランスで実績を積んだ後に正社員へ戻るルートもあります。考え方は/career/freelance-to-permanent/や/knowledge/freelance-vs-fulltime/で整理しています。不安が大きい場合は、正社員並みの保障があるMidworksから始める選択肢もあります。",
  },
];

const related = [
  { name: "正社員転職のレバテックキャリアの評判", href: "/review/levtech/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "ITプロパートナーズの評判（週2-3日）", href: "/review/itpropartners/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスと正社員どちらが得か", href: "/knowledge/freelance-vs-fulltime/" },
];

export default function LevtechFreelanceReview() {
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
          { name: "レバテックフリーランス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックフリーランスの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 業務委託（フリーランス）案件の実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          レバテックフリーランスは、IT・Web系エンジニア向けに<span className="font-bold">業務委託（フリーランス）案件</span>を紹介するサービスです。本記事では評判・口コミを実際の口コミプラットフォームの傾向と、各社が公表する数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。なお、正社員転職を支援する「レバテックキャリア」は<span className="font-bold">別サービス</span>です（後述）。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックフリーランス公式系の公表値",
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
              <span className="font-bold">総合評価：実務経験のある経験者が、高単価・案件量で独立を狙うなら最有力</span>。一言でいえば「単価と案件の選択肢を最大化したい独立志向の経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・エンド直請け中心で平均単価68万円・中央値65万円（二次情報）。高単価を狙いやすい。</li>
              <li>・公開案件は業界最大手級で選択肢が広い（公開1万件以上・公式系では約97,000件以上とも／確認不可）。</li>
              <li>・一方で実務経験が前提。安定・保障重視ならMidworks、週2-3日ならITプロパートナーズ、安定雇用ならレバテックキャリアへ。</li>
            </ul>
          </div>
        </section>

        {/* 重複回避：キャリアとの違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            「レバテックキャリア」とは別サービスです
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              検索で混同されやすいですが、<span className="font-bold">レバテックフリーランス（本記事）とレバテックキャリアは別サービス</span>です。同じレバレジーズグループのレバテックが運営していますが、扱う雇用形態が異なります。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "レバテックフリーランス（本記事）", "レバテックキャリア"],
                  ["雇用・契約", "業務委託（準委任など）", "正社員雇用"],
                  ["得られるもの", "案件・単価", "求人・年収"],
                  ["向く人", "独立志向・高単価狙いの経験者", "安定雇用で年収アップしたい人"],
                  ["当サイト記事", "このページ", "/review/levtech/"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-3 py-3 border-b border-slate-200 ${i === 0 || j === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}
                      >
                        {j === 3 && cell === "/review/levtech/" ? (
                          <Link href="/review/levtech/" className="text-petrol hover:underline">
                            /review/levtech/
                          </Link>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            「安定した正社員のまま年収を上げたい」方は、本記事ではなく
            <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリアの評判記事</Link>
            をご覧ください。本記事はフリーランス（業務委託）として働く前提の解説です。
          </p>
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
            ※案件数・単価は時期により変動が大きく、多くが二次情報です。公式LPで未確認の数値は「確認不可」と明示しています。マージンは非公表で、相場10〜15%は推定です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックフリーランスの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. エンド直請け中心で高単価を狙いやすい</h3>
              <p className="text-sm text-petrol-deep">
                エンド企業からの直請け案件が中心のため、多重下請けに比べて中間マージンが抑えられ、単価が高めになりやすいのが特徴です。利用者の平均単価68万円・中央値65万円・最高145万円という二次情報があります（時点・算出条件により変動）。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 案件量が業界最大手級</h3>
              <p className="text-sm text-petrol-deep">
                公開案件は1万件以上、公式系では約97,000件以上とも言われます（二次情報・確認不可）。案件数の多さは、希望条件に合う案件を比較しながら選べることに直結します。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. IT特化の担当と単価交渉・更新まで相談できる</h3>
              <p className="text-sm text-petrol-deep">
                技術に詳しい担当と進められ、参画後も単価交渉・契約更新・次案件の相談を継続して受けられる点が、フリーランス系の口コミでも評価されています。満足度92.6%という二次情報もあります（調査主体・時期に注意）。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 利用者の平均年収が高い層が中心</h3>
              <p className="text-sm text-petrol-deep">
                利用者の平均年収は881万円という二次情報があります。スキルの高い経験者が好条件を得やすい構造で、30代・40代の経験を単価に反映させやすいサービスです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・マージンの考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フリーランス案件を比較する際に最も気になるのが「マージン（エージェントの手数料）」です。レバテックフリーランスは<span className="font-bold">マージンを非公表</span>としています。「業界相場10〜15%」という数値が語られることはありますが、これは<span className="font-bold">推定であり公式の公表値ではありません（確認不可）</span>。出典のない断定は避け、自分の案件で示される単価を基準に判断するのが安全です。
            </p>
            <p>
              実務上は、提示される単価が「自分が受け取る単価（手取りベース）」であることが多いため、面談時に①提示単価が手取りか②契約形態（準委任／請負）③更新時の単価交渉余地、の3点を確認すれば、マージン非公表でも実質的な判断はできます。複数社の提示単価を並べて相対比較するのが最も確実です。
            </p>
            <p>
              なお、30代・40代で家族やローンがある場合、単価の高さだけでなく<span className="font-bold">案件が途切れたときの備え</span>も重要です。報酬保障の仕組みがあるMidworksや、週2〜3日で副業から始められるITプロパートナーズと比較したうえで、自分のリスク許容度に合うサービスを選ぶとよいでしょう（後述の使い分け表参照）。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。レバテックフリーランスは即戦力の経験者が高単価を得やすい構造のため、実務経験が厚くなる30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価されやすく、独立による単価アップの効果が大きい年代です。ただし独立直後は案件継続のリスクがあるため、最初の数案件は安全側に倒し、エンド直で実績を積むのが堅実です。「独立はしたいが不安」という段階なら、正社員並みの保障があるMidworksから入る選択肢もあります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              技術力に加えてマネジメント・アーキテクト経験を単価に反映させやすい年代です。一方、常駐型の案件では年齢を気にする声もあるため、リモート可・専門性の高い案件を軸に探すと選択肢を確保しやすくなります。家族構成やローンの状況次第では、単価最大化より<span className="font-bold">収入の安定</span>を優先し、保障型（Midworks）や副業並走（ITプロパートナーズ）を検討する判断も合理的です。
            </p>
            <p>
              「いつでも正社員に戻れる状態」を保っておくと、独立後のリスクは大きく下がります。考え方は
              <Link href="/career/freelance-to-permanent/" className="text-petrol hover:underline">フリーランスから正社員に戻るキャリア</Link>
              や
              <Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスと正社員の比較</Link>
              で詳しく整理しています。安定雇用を希望する場合は、正社員転職の
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
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
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
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
            フリーランスエージェントは「何を最大化したいか」で選ぶと失敗しにくいです。当サイトでレビューしている3社は、それぞれ強みが住み分けられています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["レバテックフリーランス（本記事）", "単価・案件量を最大化したい経験者。最大手級。"],
                  ["Midworks", "正社員並みの保障で安定して独立したい慎重派。"],
                  ["ITプロパートナーズ", "週2〜3日・副業から独立準備したい人。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className={`px-3 py-3 border-b border-slate-200 font-medium ${i === 0 ? "text-slate-700" : "text-slate-700"}`}>
                      {row[0]}
                    </td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/review/itpropartners/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ITプロパートナーズ（週2-3日）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
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
          <h2 className="text-xl font-bold mb-3">レバテックフリーランスに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、あなたのスキルでの単価レンジを確認してみませんか？
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
