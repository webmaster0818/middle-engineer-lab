import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "リクルートダイレクトスカウトの評判・口コミ｜30代40代の本音";
const DESCRIPTION =
  "リクルートダイレクトスカウトはレジュメを登録して待つハイクラススカウト型。30代40代エンジニア目線で評判・口コミ、高年収求人、スカウトが来ない原因、リクルートエージェントとの違いを出典付きで解説します。";
const URL = "/review/recruit-direct-scout/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/recruit-direct-scout/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "type", label: "リクルートエージェントとの違い（最重要）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からスカウト・内定までの流れ" },
  { id: "compare", label: "他サービスとの使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "リクルート系（正式な運営会社名は要確認）"],
  ["サービス種別", "ハイクラススカウト型（レジュメを登録してスカウトを待つ）"],
  ["スカウト主体", "ヘッドハンター・企業からのスカウト"],
  ["公開求人数", "約59.3万件（二次情報・2026年2月時点）"],
  ["年収800万円以上求人", "約34.7万件（二次情報・2026年2月時点）"],
  ["新規登録", "毎月約2万人が新規登録（二次情報）"],
  ["対象年収帯", "年収600〜2,000万円のミドル〜ハイクラス・全業種"],
  ["転職後平均年収", "約950万円（二次情報）"],
  ["IT特化", "IT特化ではない（IT求人も扱う総合ハイクラス）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "高年収・非公開の求人に出会える",
    body: "みん評やエンジニア向けブログ等では、年収800万円以上のレンジの求人やヘッドハンター経由の非公開求人に出会えたという傾向の声が見られる。現職の年収では届かなかった層のポジションを提示されたという感想がある。",
  },
  {
    title: "登録して待つだけで市場価値がわかる",
    body: "OpenWork等の口コミの傾向として、レジュメを登録しておくだけでスカウトが届き、自分の経歴がどの年収帯・どんな企業から評価されるかを把握できたという声が見られる。在職中で忙しくても受け身で進められる点が評価されている。",
  },
  {
    title: "求人量が多く選択肢が広い",
    body: "公開求人約59.3万件・年収800万円以上約34.7万件（いずれも二次情報・2026年2月）という規模感もあり、全業種にわたって選択肢が広いという傾向の声が確認できる。エンジニア以外の周辺職種への可能性も見える。",
  },
];

const badReviews = [
  {
    title: "経歴次第でスカウトが来ない",
    body: "ハイクラス向けのため、現時点の年収や経歴によってはスカウトがほとんど届かなかったという傾向の声がみん評等で見られる。待ち型ゆえに自分から動けず手応えがないと感じることがある。",
    cope: "レジュメを具体的に書き込み（実績・数値・マネジメント範囲を明記）、希望条件を広めに設定する。スカウトが来にくい場合は、担当が能動的に求人提案するエージェント型（リクルートエージェント等）を併用して受け身一辺倒を避ける。",
  },
  {
    title: "ヘッドハンターの質にばらつきがある",
    body: "個人のヘッドハンターが介在する仕組みのため、提案の質や連絡の丁寧さに差があったという傾向の声が見られる。担当によって体験が変わりやすい。",
    cope: "複数のヘッドハンターからのスカウトを比較し、実績や提案内容で見極める。合わないと感じたら無理に進めず、別のスカウトや他サービスを使う。",
  },
  {
    title: "現職に転職活動が知られないか不安",
    body: "レジュメを公開する性質上、現職の関係者に見られないか不安だという傾向の声がある。",
    cope: "多くのスカウトサービスには特定企業へのレジュメ公開をブロックする設定があるため、現職や関連会社をブロック対象に登録しておくとよい。最新の設定方法は公式サイトで確認する。",
  },
];

const fitYes = [
  "年収600万円以上で、さらに上を狙いたい30代・40代",
  "在職中で、受け身でも転職活動を進めたい",
  "自分の市場価値・想定年収を客観的に確認したい",
  "IT以外も含めて幅広い選択肢を見たい",
  "マネジメント・専門性で評価される経歴がある",
];

const fitNo = [
  "現年収が低めで、ハイクラス求人の対象に届きにくい",
  "IT特化のサポートや技術に詳しい担当を最優先したい",
  "担当者に手取り足取り伴走してほしい（待ち型が苦手）",
  "未経験・第二新卒からのIT転職を考えている",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・レジュメ作成",
    body: "公式サイトから登録し、職務経歴（レジュメ）を入力。実績・数値・マネジメント範囲を具体的に書くほどスカウトの質が上がる。在職中・情報収集目的の登録も可能。",
  },
  {
    step: "STEP2",
    title: "公開設定・ブロック設定",
    body: "レジュメの公開範囲を設定。現職や関連会社に知られたくない場合は、ブロック設定で特定企業への公開を防ぐ。",
  },
  {
    step: "STEP3",
    title: "スカウト受信",
    body: "ヘッドハンターや企業からスカウトが届く。年収800万円以上の求人も多く（約34.7万件・二次情報・2026年2月）、現職の年収帯を超えるポジションの打診が来ることがある。",
  },
  {
    step: "STEP4",
    title: "面談・選考",
    body: "興味のあるスカウトに返信し、ヘッドハンターや企業と面談・選考へ。担当ヘッドハンターが選考対策や条件交渉をサポートする場合がある（質にばらつきあり）。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認して入社。複数スカウトを比較し、年収・役割・働き方を総合的に判断するとよい。",
  },
];

const faqs = [
  {
    q: "リクルートダイレクトスカウトとリクルートエージェントは何が違いますか？",
    a: "仕組みが根本的に異なります。リクルートエージェントは担当キャリアアドバイザーが付き、あなたに合う求人を能動的に提案・伴走する『エージェント型』です。一方リクルートダイレクトスカウトは、レジュメを登録してヘッドハンターや企業からのスカウトを『待つ』ハイクラススカウト型です。前者は伴走重視、後者は受け身で高年収を狙う用途に向きます。同じリクルート系でも別サービスとして使い分けてください。",
  },
  {
    q: "IT・エンジニアの転職に使えますか？",
    a: "使えますが、IT特化サービスではなく全業種を扱う総合ハイクラス型です。そのため、技術に精通した担当の細かいサポートや技術面接対策を重視する場合は、IT特化のレバテックキャリアやリクルートエージェントのIT部門を併用するのが現実的です。リクルートダイレクトスカウトは高年収求人の母数と市場価値の確認に強みがあります。",
  },
  {
    q: "スカウトが来ません。原因は？",
    a: "ハイクラス向けのため、現年収や経歴が対象帯に届いていない、レジュメの記載が薄い、希望条件が狭すぎる、などが考えられます。実績を数値で具体化し、希望を広めに設定してください。待ち型で手応えがない場合は、能動的に提案するエージェント型の併用が有効です。",
  },
  {
    q: "求人数や年収帯のデータは正確ですか？",
    a: "本記事の公開求人約59.3万件・年収800万円以上約34.7万件・毎月約2万人新規登録などはいずれも二次情報（2026年2月時点）で、変動が大きい数値です。最新かつ正確な数値は公式サイトでご確認ください。当サイトでは確認できた範囲で出典・時点を明記しています。",
  },
  {
    q: "現職にバレませんか？",
    a: "レジュメを公開する性質上の不安はありますが、特定企業への公開をブロックする設定を使うことで、現職や関連会社に見られるリスクを下げられます。設定の最新の手順は公式サイトでご確認ください。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。費用は採用企業側が負担する仕組みです（確認できた範囲）。",
  },
];

const related = [
  { name: "リクルートエージェント（IT）の評判・口コミ", href: "/review/recruit-it/" },
  { name: "ビズリーチ（IT）の評判・口コミ", href: "/review/bizreach-it/" },
  { name: "スカウト型サービスの使い方", href: "/knowledge/scout/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
];

export default function RecruitDirectScoutReview() {
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
          { name: "リクルートダイレクトスカウト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リクルートダイレクトスカウトの評判・口コミ【30代・40代向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ハイクラススカウト型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          リクルートダイレクトスカウトは、レジュメを登録してヘッドハンターや企業からのスカウトを待つ、ハイクラス向けのスカウト型サービスです。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公開データに基づき、30代・40代エンジニアの視点で整理します。なお<span className="font-bold">同じリクルート系でも、担当が求人を提案するエージェント型の「リクルートエージェント」とは仕組みが別物</span>です（後述）。架空の体験談やスコアの転載は行わず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "リクルートダイレクトスカウト公式サイト",
            "みん評／OpenWork等の口コミ",
            "エンジニア向けブログ",
            "複数転職メディア集計値（2026年2月時点の二次情報を含む）",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：年収600万円超のミドルが、受け身で高年収を狙う・市場価値を測るのに向く</span>。一言でいえば「在職中でも登録して待つだけで、高年収のスカウトと自分の市場価値を確認したいハイクラス層」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・公開求人約59.3万件・年収800万円以上約34.7万件（二次情報・2026年2月）と母数が大きい。</li>
              <li>・IT特化ではない総合ハイクラス型。IT特化の細かいサポートは別サービスで補完。</li>
              <li>・エージェント型のリクルートエージェントとは仕組みが別物（待ち型 vs 伴走型）。</li>
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

        {/* 違い（最重要） */}
        <section id="type" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            リクルートエージェントとの違い（最重要）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              名前が似ているため混同されがちですが、<span className="font-bold">「リクルートダイレクトスカウト」と「リクルートエージェント」は仕組みの異なる別サービス</span>です。ここを理解しておくと選び方を間違えません。
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-medium">観点</th>
                  <th className="px-4 py-3 text-left font-medium">リクルートダイレクトスカウト</th>
                  <th className="px-4 py-3 text-left font-medium">リクルートエージェント</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ["型", "スカウト型（待つ）", "エージェント型（提案・伴走）"],
                  ["主体", "ヘッドハンター・企業がスカウト", "担当アドバイザーが求人提案"],
                  ["年収帯", "ミドル〜ハイクラス中心", "幅広い層に対応"],
                  ["進め方", "受け身でも進む", "二人三脚で能動的に進む"],
                  ["向く人", "高年収狙い・市場価値確認", "伴走・幅広い求人紹介を希望"],
                ] as [string, string, string][]).map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{b}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            エージェント型の詳細は
            <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェント（IT）の評判・口コミ</Link>
            で解説しています。また、同じスカウト型でもFindy・LAPRAS・Forkwellは「エンジニアの技術活動を可視化する」仕組みで、年収帯でスカウトする本サービスとは評価軸が異なります。技術発信で評価されたい場合は
            <Link href="/review/findy/" className="text-petrol hover:underline">Findy</Link>
            や
            <Link href="/review/lapras/" className="text-petrol hover:underline">LAPRAS</Link>
            を検討してください。
          </p>
        </section>

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
            ※求人数・登録者数・転職後平均年収などは二次情報（2026年2月時点を含む）で、変動が大きい数値です。運営会社の正式名称を含め、最新の正確な情報は公式サイトでご確認ください。当サイトは確認できた範囲で出典・時点を併記しています。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リクルートダイレクトスカウトの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 高年収・非公開求人の母数</h3>
              <p className="text-sm text-petrol-deep">
                公開求人約59.3万件、うち年収800万円以上が約34.7万件（いずれも二次情報・2026年2月）とされ、ハイクラス求人の母数が大きいのが特徴です。ヘッドハンター経由の非公開求人にも出会える可能性があります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 登録して待つだけの受け身運用</h3>
              <p className="text-sm text-petrol-deep">
                レジュメを登録しておけばスカウトが届く待ち型のため、在職中で忙しいミドル層でも負担なく進められます。毎月約2万人が新規登録するとされ（二次情報）、利用者の裾野は広いといえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 市場価値・想定年収の可視化</h3>
              <p className="text-sm text-petrol-deep">
                どの年収帯・どんな企業から声がかかるかで、自分の市場価値を客観的に把握できます。転職後平均年収は約950万円とされ（二次情報）、現職より上のレンジを狙う交渉材料の確認に使えます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 全業種対応で選択肢が広い</h3>
              <p className="text-sm text-petrol-deep">
                IT特化ではなく全業種を扱うため、エンジニア職に限らずPM・テックリード・事業会社のDX人材など、周辺の高年収ポジションまで視野に入れられます。キャリアの選択肢を広く確認したい人に向きます。
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

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。リクルートダイレクトスカウトは「待ち型」で「ハイクラス」が前提のため、ある程度の経験・年収がある30代・40代ほど効果を発揮します。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              年収600万円前後を超えてきた層なら、上方のスカウトを受けながら市場価値を測るのに向きます。すぐ転職しなくても、想定年収の相場観を得る目的で登録しておく価値があります。技術面の細かいサポートが欲しいときは、IT特化サービスを併用しましょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              マネジメントや専門性で評価されやすい年代であり、年収700万円超の40代やマネージャーの上方転職と相性が良いサービスです。「40代は書類で不利」という不安に対し、待ち型で声がかかる経験は心理的にも有効です。ただしIT特化ではない点を踏まえ、技術面接対策などは
              <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェント（IT）</Link>
              や
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              で補完するのが堅実です。年収相場は
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収相場</Link>
              もあわせてご確認ください。
            </p>
            <p>
              いずれの年代でも、待ち型に依存しすぎず、能動的に動けるエージェント型と組み合わせるのが堅実です。
              <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウト型サービスの使い方</Link>
              や
              <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェント比較</Link>
              も参考にしてください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録からスカウト・内定までの流れ</h2>
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

        {/* 比較・使い分け */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            リクルートダイレクトスカウトは「待ち型・ハイクラス・全業種」が特徴です。能動的な伴走が欲しいならエージェント型、技術発信で評価されたいならエンジニア特化のスカウト型、というように、目的に応じて併用すると機会を広げられます。ハイクラス領域ではビズリーチも同系統のサービスとして比較されます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/recruit-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              リクルートエージェント（IT）の評判・口コミ →
            </Link>
            <Link href="/review/bizreach-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ（IT）の評判・口コミ →
            </Link>
            <Link href="/review/findy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Findyの評判・口コミ →
            </Link>
            <Link href="/compare/highclass/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ハイクラス向けエージェント比較 →
            </Link>
          </div>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判・悪い評判の傾向」は、以下の口コミ・評判メディアの公開情報を参照し、傾向として要約したものです（原文・スコアの転載は行っていません）。最終確認日：2026年7月17日。
          </p>
          <ul className="space-y-2 text-sm">
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://jobs.qiita.com/directscout-recruit/"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                リクルートダイレクトスカウトの評判・口コミ（Qiita Job Change）
              </a>
            </li>
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://minhyo.jp/"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                みん評（口コミサイト・トップ）
              </a>
              <span className="text-xs text-slate-400 block mt-1">
                ※本サービス専用の口コミページは確認できなかったため、口コミサイトのトップを掲載しています。
              </span>
            </li>
          </ul>
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
          <h2 className="text-xl font-bold mb-3">リクルートダイレクトスカウトで市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            レジュメを登録して、あなたにどんな高年収スカウトが届くか確かめてみませんか？
          </p>
          <a href="https://directscout.recruit.co.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で登録する
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
