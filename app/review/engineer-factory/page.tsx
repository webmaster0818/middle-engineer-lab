import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニアファクトリーの評判・口コミ｜30代40代フリーランス";
const DESCRIPTION =
  "エンジニアファクトリー（アイムファクトリー株式会社運営）の評判・口コミを30代40代エンジニア目線で検証。エンド直の高単価案件、平均単価、東京・大阪中心の対応エリア、マージン非公開、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/engineer-factory/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/engineer-factory/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "単価・マージンの考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社の使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "アイムファクトリー株式会社"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント（IT・Web）"],
  ["対象", "ITフリーランスエンジニア（20代〜50代まで対応という二次情報）"],
  ["案件の特徴", "低マージンのエンド直（直請け）高単価案件が多いという二次情報"],
  ["取引社数・案件", "取引1,700社以上・非公開案件3,000件以上という二次情報（時点要確認）"],
  ["平均単価", "案件の平均単価76万円/月という二次情報（時点・算出条件要確認）"],
  ["マージン", "非公表（二次情報では10〜20%程度との推測。確認不可）"],
  ["対応エリア", "東京・大阪周辺中心（二次情報）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "エンド直の高単価案件が多い",
    body: "サクフリやノマド家等の口コミ系では、低マージンのエンド直（直請け）案件が多く、単価が高めだったという傾向の声が見られる。案件の平均単価76万円/月という二次情報もあり、経験者ほど好条件を得やすいという感想がある。",
  },
  {
    title: "幅広い年代・経験に対応してくれる",
    body: "二次情報では、経験の浅い20代から経験豊富な50代まで幅広く対応可能とされ、年代を問わず相談しやすかったという傾向の声がある。取引1,700社以上という案件基盤も選択肢の広さにつながっている。",
  },
  {
    title: "提案・サポートが丁寧という声",
    body: "イーデス等の口コミ系では、希望条件のヒアリングや案件提案が丁寧だったという傾向の声が見られる。エンド直中心ゆえに条件交渉の相談にも乗ってもらえたという感想がある。",
  },
];

const badReviews = [
  {
    title: "対応エリアが東京・大阪周辺に限られる",
    body: "対応エリアが東京・大阪周辺中心という二次情報があり、地方在住だと選択肢が減ったという傾向の声がある。地方の常駐案件は限られる。",
    cope: "リモート可案件を明示的に希望条件として伝える。地方在住なら全国12拠点のPE-BANK等も併用すると選択肢が広がる。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）が非公表のため、提示単価のうちどれだけが自分の取り分かが事前に分かりづらいという不安の声がある。二次情報では10〜20%程度と推測されるが、これは推定で公式値ではない（確認不可）。",
    cope: "提示されるのは原則「自分が受け取る単価」であることが多いため、面談時に手取りベースの単価と契約形態（準委任／請負）を必ず確認する。マージンを公開するPE-BANKと比較すると相場感をつかみやすい。",
  },
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が限られたという傾向の声がある。",
    cope: "経験が浅いうちは無理に独立せず、まず正社員で経験を積むのが現実的。安定雇用で経験を積みたい場合は正社員転職のレバテックキャリア（/review/levtech/）を検討するとよい。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代・40代エンジニア",
  "低マージン・エンド直の高単価案件を狙いたい経験者",
  "東京・大阪周辺で参画できる、またはリモート可案件を希望",
  "幅広い年代に対応してほしい",
  "丁寧なヒアリング・条件交渉の相談をしたい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "東京・大阪以外の地方常駐案件を中心に探している",
  "マージンが完全公開されたサービスで選びたい（→PE-BANK）",
  "正社員並みの報酬保障を最優先したい（→Midworks）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力。在職中・現案件参画中でも次の案件探しとして登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。技術スタック・希望単価・エリア・リモート可否・NG条件をすり合わせる。手取りベースの希望単価をここで明確に伝える。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合うエンド直案件の紹介を受け、応募する案件を決定。高単価案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備・同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・更新サポート",
    body: "条件合意後に業務委託契約を締結し参画。参画後も単価交渉・契約更新・次案件の相談を継続して受けられる。",
  },
];

const faqs = [
  {
    q: "エンジニアファクトリーの運営会社はどこですか？",
    a: "アイムファクトリー株式会社が運営する、ITフリーランスエンジニア向けの業務委託（フリーランス）案件紹介エージェントです。低マージンのエンド直（直請け）高単価案件が多いという二次情報があります。",
  },
  {
    q: "単価は高いですか？平均単価はどのくらいですか？",
    a: "案件の平均単価76万円/月という二次情報があります（時点・算出条件要確認）。低マージンのエンド直案件が多いため単価が高めとされますが、実際の単価は個人のスキル・経験で変動します。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公表です。二次情報では10〜20%程度と推測されることがありますが、これは推定で公式の公表値ではありません（確認不可）。提示される単価が手取りベースか、契約形態が準委任か請負かを面談時に必ず確認してください。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "対応エリアは東京・大阪周辺中心という二次情報があります。リモート可案件もあるため、希望条件にリモートを明示しましょう。地方の常駐案件を重視する場合は、全国12拠点のPE-BANKなどの併用を検討してください。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "幅広い年代に対応するとされますが、業務委託案件は即戦力前提のため、IT実務経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "20代〜50代まで幅広く対応するとされ、実務経験のある30代・40代と相性が良いサービスです。低マージン・エンド直の高単価案件は、経験を単価に反映させたいミドル層に向きます。東京・大阪以外はリモート可案件を軸に探すとよいでしょう。",
  },
];

const related = [
  { name: "PE-BANKの評判（マージン公開・全国）", href: "/review/pe-bank/" },
  { name: "レバテックフリーランスの評判（案件量）", href: "/review/levtech-freelance/" },
  { name: "TechReachの評判（支払いが早い）", href: "/review/techreach/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスという働き方の基礎", href: "/employment/freelance/" },
];

export default function EngineerFactoryReview() {
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
          { name: "エンジニアファクトリー" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアファクトリーの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 低マージン・エンド直の高単価案件を口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          エンジニアファクトリーは、アイムファクトリー株式会社が運営する、ITフリーランスエンジニア向けの<span className="font-bold">業務委託（フリーランス）案件</span>紹介エージェントです。低マージンのエンド直（直請け）高単価案件が多いという特徴があり、東京・大阪周辺が主な対応エリアです。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "エンジニアファクトリー公式（アイムファクトリー株式会社）",
            "サクフリ",
            "ノマド家",
            "イーデス転職",
            "複数フリーランス系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：東京・大阪圏で、低マージン・エンド直の高単価を狙いたい経験者向け</span>。一言でいえば「都市圏（またはリモート）で単価を取りに行きたいIT実務経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・低マージンのエンド直案件が多く、平均単価76万円/月という二次情報。</li>
              <li>・取引1,700社以上・非公開案件3,000件以上（二次情報）。20代〜50代まで幅広く対応。</li>
              <li>・一方で対応は東京・大阪周辺中心・マージン非公表。地方はPE-BANK併用が現実的。</li>
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
            ※運営会社・サービス種別は公式情報、取引社数・案件数・平均単価・対応エリアは二次情報（時点要確認）です。マージンは非公表で、10〜20%という数値は二次情報の推測（確認不可）です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアファクトリーの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 低マージンのエンド直高単価案件</h3>
              <p className="text-sm text-petrol-deep">
                低マージンのエンド直（直請け）案件が多く、中間マージンが抑えられ単価が高めになりやすいという二次情報があります。案件の平均単価76万円/月という数値もあり、経験者ほど好条件を得やすい構造です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 幅広い年代・経験に対応</h3>
              <p className="text-sm text-petrol-deep">
                経験の浅い20代から経験豊富な50代まで幅広く対応可能という二次情報があり、年代を問わず相談しやすいのが特徴です。30代・40代のミドル層も含め、経験に応じた案件提案を受けやすい構造です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 取引社数・案件基盤の広さ</h3>
              <p className="text-sm text-petrol-deep">
                取引1,700社以上・非公開案件3,000件以上という二次情報があり、希望条件に合う案件を比較しながら選べます。案件基盤の広さは、複数の選択肢を持ちたい人に有利です（数値は時点により変動）。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 丁寧なヒアリング・交渉サポート</h3>
              <p className="text-sm text-petrol-deep">
                希望条件のヒアリングや案件提案が丁寧だったという傾向の声があり、エンド直中心ゆえに条件交渉の相談にも乗ってもらえたという感想があります。
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
              エンジニアファクトリーは低マージンのエンド直案件を強みに掲げる一方、<span className="font-bold">マージン（手数料）は非公表</span>です。二次情報で「10〜20%程度」と語られることがありますが、これは<span className="font-bold">推定であり公式の公表値ではありません（確認不可）</span>。出典のない断定は避け、自分の案件で示される単価を基準に判断するのが安全です。
            </p>
            <p>
              実務上は、提示される単価が「自分が受け取る単価（手取りベース）」であることが多いため、面談時に①提示単価が手取りか②契約形態（準委任／請負）③対応エリア・リモート可否、の3点を確認すれば判断できます。マージンを完全公開している
              <Link href="/review/pe-bank/" className="text-petrol hover:underline">PE-BANK</Link>
              の手数料（8〜12%）と提示単価を並べて相対比較するのが最も確実です。
            </p>
            <p>
              なお、30代・40代で家族やローンがある場合、単価の高さだけでなく<span className="font-bold">案件が途切れたときの備え</span>も重要です。報酬保障の仕組みがある
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              と比較したうえで、自分のリスク許容度に合うサービスを選ぶとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。エンジニアファクトリーは低マージン・エンド直の高単価が武器のため、即戦力の経験者が単価を取りに行く30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価されやすく、独立による単価アップの効果が大きい年代です。東京・大阪圏で参画できるなら本命の一つになります。最初の数案件は安全側に倒し、案件量を補うためレバテックフリーランス等と併用するのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              技術力に加えてマネジメント・アーキテクト経験を単価に反映させやすい年代です。幅広い年代に対応する点は40代にとって安心材料ですが、対応エリアが東京・大阪中心のため、地方在住ならリモート可案件を軸に探すか、全国対応のPE-BANKを併用すると選択肢を確保できます。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。「いつでも正社員に戻れる状態」を保っておくと安心です。安定雇用を希望する場合は、正社員転職の
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
            フリーランスエージェントは「何を重視するか」で選ぶと失敗しにくいです。エンジニアファクトリーは「東京・大阪圏でのエンド直高単価」が強みで、全国対応・案件量・透明性を重視するなら他社との併用が有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["エンジニアファクトリー（本記事）", "東京・大阪圏で低マージン・エンド直の高単価を狙う人。"],
                  ["PE-BANK", "マージン公開・全国12拠点。透明性と地方対応を重視する人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。"],
                  ["TechReach", "エンド直の高単価＋支払いの速さを重視する人。"],
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
              PE-BANK（マージン公開・全国）の評判 →
            </Link>
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（案件量）の評判 →
            </Link>
            <Link href="/review/techreach/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              TechReach（支払いが早い）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
          </div>
        </section>

        {/* 参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4">
            本記事が傾向としてまとめた口コミ・評判は、以下のメディアの該当ページを参照しています（原文・スコアの転載は行っていません）。詳細は各リンク先をご確認ください。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              ・
              <a href="https://www.a-tm.co.jp/top/job-change/engineer-factory/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                イーデス｜エンジニアファクトリーの評判・口コミ
              </a>
            </li>
            <li>
              ・
              <a href="https://sakufuri.jp/media/engineer-factory/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                サクフリ｜エンジニアファクトリーの口コミ・評判
              </a>
            </li>
            <li>
              ・
              <a href="https://nomadoya.ne.jp/engineer-factory/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                ノマド家｜エンジニアファクトリーの口コミ・評判
              </a>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">
            ※リンク先は各メディアの記事です。掲載内容・URLは変更される場合があります。最終リンク確認：2026年7月。
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
          <h2 className="text-xl font-bold mb-3">エンジニアファクトリーに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            東京・大阪圏で低マージン・エンド直の高単価案件を探してみませんか？
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
