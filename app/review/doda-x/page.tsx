import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "doda X（旧iX転職）の評判｜40代エンジニアのハイクラス活用";
const DESCRIPTION =
  "doda X（旧iX転職）の評判・口コミを30代40代エンジニア目線で検証。ハイクラススカウト型の仕組み、年収800万以上の求人比率、dodaやdoda ITとの違い、スカウトが来ない不安と対処法までデータと出典付きで解説します。";
const URL = "/review/doda-x/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/doda-x/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "diff", label: "重要：doda / doda IT / doda X の違い" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "scope", label: "IT特化ではない点と、それでも有効な理由" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からスカウト・内定までの流れ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "パーソルキャリア株式会社"],
  ["旧サービス名", "iX転職（2022年10月に「doda X」へ改称）"],
  ["サービス類型", "ハイクラススカウト型（ヘッドハンター＋企業からのスカウトを待つ）"],
  ["公開求人数", "約106,491件（二次情報・2026年5月時点）"],
  ["年収800万円以上の求人", "約95,069件（二次情報・2026年5月時点）"],
  ["年収1,000万円以上の求人", "約50,902件（二次情報・2026年5月時点）"],
  ["登録ヘッドハンター数", "約7,300人（2025年4月時点・二次情報）"],
  ["対象年収レンジ", "年収800〜1,000万円超のハイクラス全業種"],
  ["再利用意向", "89.8%（二次情報）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "年収800万円以上の求人比率が高い",
    body: "イーデスやみん評等の口コミプラットフォームでは、提示されるスカウトや求人の年収レンジが高く、現職を上回るハイクラスポジションに出会えたという傾向の声が見られる。年収800万円以上が公開求人の多くを占める構成（二次情報）が背景にあると考えられる。",
  },
  {
    title: "ヘッドハンターの質が比較的高い",
    body: "OpenWork等では、担当ヘッドハンターの提案や業界知識が的確だったという傾向の声が見られる。約7,300人（2025年4月時点）のヘッドハンターが登録しており、再利用意向89.8%（二次情報）という数値もある。",
  },
  {
    title: "登録して待つだけで非公開求人に出会える",
    body: "イーデス等では、レジュメを登録しておくと企業やヘッドハンターからスカウトが届き、自分では見つけられなかった非公開のハイクラス求人を知れたという傾向の声が見られる。在職中で時間が取りづらいミドル層と相性が良い。",
  },
];

const badReviews = [
  {
    title: "経歴次第でスカウトが来ない",
    body: "スカウトを待つ仕組みのため、経歴や年収レンジが対象（年収800万円前後以上）に届かないとスカウトが乏しいと感じたという傾向の声がみん評等で見られる。",
    cope: "スカウトが来ない場合は、レジュメ（職務経歴）の解像度を上げる・実績を数値で書くのが基本。並行して、自分から動けるエージェント型（doda ITやレバテックキャリア）を併用すると機会損失を防げる。",
  },
  {
    title: "ハイクラス未満には物足りない",
    body: "年収800〜1,000万円超のハイクラスに照準を合わせたサービスのため、まだその水準に届かない場合は求人提案が物足りないと感じたという傾向の声がイーデス等で見られる。",
    cope: "現年収がハイクラス手前なら、まずは求人数の多い総合エージェント（doda）やIT特化型で市場価値を上げ、レンジが上がった段階でdoda Xを本格活用するのが現実的。",
  },
  {
    title: "doda・doda ITと混同して登録してしまう",
    body: "『doda』ブランドで名前が似ているため、エージェント型のdodaやdoda ITと、スカウト型のdoda Xを取り違えたという声が見られる。期待した使い方と違ったという混乱につながりやすい。",
    cope: "本記事の『doda / doda IT / doda X の違い』を確認のうえ登録すること。担当が伴走してほしいならエージェント型（doda・doda IT）、待ち型のハイクラスならdoda X、と用途で選ぶ。",
  },
];

const fitYes = [
  "年収700万円超で、さらに上を狙う30代後半〜40代エンジニア",
  "マネージャー・リード・スペシャリストとして上方転職したい",
  "在職中で時間がなく、スカウトを待つ受け身の活動をしたい",
  "非公開のハイクラス求人や、企業からの直接スカウトを受け取りたい",
  "自分の市場価値を高めの年収レンジで確かめたい",
];

const fitNo = [
  "現年収がハイクラス（800万円前後）に届いていない",
  "担当者に手厚く伴走してほしい（エージェント型が向く）",
  "IT専門の求人だけを効率よく見たい（IT特化型が向く）",
  "スカウトを待たず、自分でどんどん応募したい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・レジュメ作成",
    body: "公式サイトで職務経歴（レジュメ）を登録。ここの解像度がスカウトの量と質を左右するため、実績は数値で具体的に書くのがコツ。在職中でも登録可能。",
  },
  {
    step: "STEP2",
    title: "スカウトを受け取る",
    body: "登録したレジュメをもとに、ヘッドハンターや企業からスカウトが届く。年収800万円以上の求人比率が高い構成のため、ハイクラスの提案が中心になる。",
  },
  {
    step: "STEP3",
    title: "ヘッドハンター面談",
    body: "気になるスカウトに応じ、ヘッドハンターと面談。約7,300人（2025年4月時点）のヘッドハンターが在籍し、業界知識を踏まえた提案を受けられる。",
  },
  {
    step: "STEP4",
    title: "応募・選考",
    body: "提案された求人に応募し、選考に進む。ヘッドハンター経由の場合は面接対策や日程調整のサポートを受けられることが多い。",
  },
  {
    step: "STEP5",
    title: "内定・条件交渉・入社",
    body: "内定後はヘッドハンター・企業と条件を調整。ハイクラス転職は交渉余地が大きく、年収アップにつながりやすい。入社日を調整して完了。",
  },
];

const faqs = [
  {
    q: "doda X はdodaやdoda ITと何が違うのですか？",
    a: "同じパーソルキャリアが運営しますが、仕組みが別物です。【doda】は総合型のエージェント／求人サイト、【doda IT】はdodaのIT特化エージェント（担当が求人を提案するエージェント型）、【doda X】は旧iX転職を改称したハイクラススカウト型（レジュメを登録してヘッドハンターや企業からのスカウトを待つ）です。担当に伴走してほしいならエージェント型のdoda・doda IT、年収800万円前後以上のハイクラスを待ち型で狙うならdoda X、と用途で選んでください。当サイトのレビューでも『doda IT（エージェント型）』と『doda X（スカウト型）』は別記事として区別しています。",
  },
  {
    q: "doda X はIT特化のサービスですか？",
    a: "いいえ。doda X はIT特化ではなく、全業種を対象としたハイクラススカウト型です。ITポジションも扱いますが、IT専門の求人だけを効率よく見たい場合はdoda IT やレバテックキャリアなどのIT特化型が向いています。doda X は『IT専門ではないが、年収800万円前後以上のハイクラス転職という用途で有効』という位置づけです。",
  },
  {
    q: "スカウトが来ないのですが、どうすればいいですか？",
    a: "doda X はスカウトを待つ仕組みのため、経歴や年収レンジが対象（年収800万円前後以上）に届かないとスカウトが乏しくなりがちです。まずレジュメの解像度を上げ、実績を数値で書くことが基本です。並行して、自分から動けるエージェント型（doda IT・レバテックキャリア）を併用すると機会損失を防げます。",
  },
  {
    q: "年収はどのくらいの人が対象ですか？",
    a: "年収800〜1,000万円超のハイクラス層が主な対象です。公開求人約106,491件のうち年収800万円以上が約95,069件、1,000万円以上が約50,902件（いずれも二次情報・2026年5月時点）という構成で、高年収レンジに照準を合わせています。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。レジュメ登録・スカウト受信・ヘッドハンター面談・条件交渉まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "在職中の会社にバレませんか？",
    a: "一般にスカウト型サービスでは、現職企業など特定の企業に自分の情報を見せない設定（ブロック機能）が用意されていることが多く、doda X でも同様の配慮が可能です。最新の仕様は公式サイトでご確認ください。レジュメの公開範囲を調整しておくとバレ不安を下げられます。",
  },
  {
    q: "40代でも使えますか？",
    a: "使えます。むしろ年収700万円超の40代マネージャー・スペシャリストの上方転職と相性が良いサービスです。ただしハイクラスに照準を合わせているため、年収がその水準に届かない場合はスカウトが乏しくなることがあります。40代でハイクラス手前なら、JACリクルートメントなどミドル特化エージェントの併用も検討してください。",
  },
];

const related = [
  { name: "doda IT（エージェント型）の評判を見る", href: "/review/doda-it/" },
  { name: "ビズリーチ（IT）の評判を見る", href: "/review/bizreach-it/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/age/40s/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function DodaXReview() {
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
          { name: "doda X" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          doda X（旧iX転職）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ハイクラススカウト型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          doda X（旧iX転職／2022年10月改称）は、パーソルキャリアが運営するハイクラススカウト型サービスです。レジュメを登録し、ヘッドハンターや企業からのスカウトを待つ仕組みで、エージェント型のdodaやdoda ITとは性質が異なります。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公開データに基づき、30代・40代エンジニア視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "doda X 公式",
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
              <span className="font-bold">総合評価：年収700万円超の30代後半〜40代が、待ち型でハイクラス転職を狙う用途に強い</span>。一言でいえば「在職中で時間がなく、年収800万円前後以上のスカウトを受け取りたい経験者」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収800万円以上の求人が約95,069件・1,000万円以上が約50,902件（二次情報・2026年5月）と高年収レンジに照準。</li>
              <li>・ヘッドハンター約7,300人（2025年4月）・再利用意向89.8%（二次情報）。レジュメ登録で非公開求人に出会える。</li>
              <li>・一方でIT特化ではなく、経歴次第でスカウトが来ない・ハイクラス未満には物足りない点に注意。dodaやdoda ITとは別物。</li>
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

        {/* doda/doda IT/doda X の違い（重複回避） */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            重要：doda / doda IT / doda X は別物です
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              同じ「doda」ブランドでも、運営は同じパーソルキャリアながら<span className="font-bold">仕組みが3つに分かれており、混同が起きやすい</span>ため最初に整理します。当サイトでも別記事として区別しています。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["doda", "総合型のエージェント／求人サイト。幅広い業種・年代向け"],
                  ["doda IT", "dodaのIT特化エージェント型。担当が求人を提案・伴走（当サイトの review/doda-it で解説）"],
                  ["doda X（本記事）", "旧iX転職。ハイクラススカウト型。レジュメを登録し、ヘッドハンター・企業からのスカウトを待つ"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/4 border-b border-slate-200 align-top">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            ポイントは「担当に伴走してほしいか（エージェント型のdoda・doda IT）／スカウトを待ちたいか（doda X）」の違いです。doda ITのエージェント型レビューは
            <Link href="/review/doda-it/" className="text-petrol-deep underline">review/doda-it</Link>
            で別途扱っています。本記事はあくまでスカウト型のdoda Xのレビューです。
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
            ※求人数・年収別件数は二次情報（2026年5月時点）で変動します。ヘッドハンター数は2025年4月時点、再利用意向89.8%・満足度系は二次情報です。
          </p>
        </section>

        {/* IT特化でない点 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            IT特化ではない点と、それでもエンジニアに有効な理由
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            doda X は<span className="font-bold text-slate-700">IT特化ではなく、全業種を対象としたハイクラススカウト型</span>です。IT専門の求人だけを効率よく見たいなら、doda IT やレバテックキャリアのようなIT特化エージェントの方が向いています。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            それでもミドルエンジニアに有効なのは、<span className="font-bold text-slate-700">「年収800万円前後以上のハイクラス転職」「在職中で時間がない人の受け身の活動」「非公開求人・企業からの直接スカウト」</span>という用途が明確だからです。年収700万円を超えてくると、IT特化型でも高年収レンジの提案は細りがち。その空白を、ハイクラスに照準を合わせたdoda Xで埋める使い方ができます。「IT専門ではないが、ハイクラス・待ち型という用途で有効」という位置づけで併用するのが合理的です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">doda X の特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 年収800万円以上の求人比率が高い</h3>
              <p className="text-sm text-petrol-deep">
                公開求人約106,491件のうち、年収800万円以上が約95,069件、1,000万円以上が約50,902件（いずれも二次情報・2026年5月時点）。ハイクラスに明確に照準を合わせた構成で、年収を一段上げたいミドル層に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ヘッドハンターの質と再利用意向</h3>
              <p className="text-sm text-petrol-deep">
                約7,300人（2025年4月時点）のヘッドハンターが在籍し、再利用意向は89.8%（二次情報）。業界知識を踏まえた提案を受けやすく、リピートされる満足度の高さがうかがえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 待ち型で在職中でも進めやすい</h3>
              <p className="text-sm text-petrol-deep">
                レジュメを登録しておけばスカウトが届く受け身の仕組みのため、在職中で時間が取りづらいミドル層でも活動を続けやすいのが強みです。自分では見つけにくい非公開のハイクラス求人に出会えます。
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
            doda X はハイクラス（年収800万円前後以上）に照準を合わせています。自分の現年収が相場のどこにいるかを把握すると、スカウトの量や狙えるレンジの妥当性を判断しやすくなります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["システムエンジニア（受託開発）平均年収", "約578.5万円"],
                  ["同・平均年齢", "約37.1歳"],
                  ["doda X が照準を合わせる年収レンジ", "800〜1,000万円超"],
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
            厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（権威データ）。平均がこの水準ということは、doda Xが照準とする800万円以上は「平均より明確に上」のレンジです。現年収がここに届いていれば本格活用、手前なら市場価値を上げてから、という判断の目安になります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：厚生労働省 job tag。doda X の求人件数・年収別件数は二次情報（2026年5月時点）。年収は職種・地域・経験で大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、doda X を「年収700万円超のミドルが上方転職を狙うための待ち型ツール」と位置づけます。受け身で機会を集めつつ、本命の応募はエージェント型で進める、という併用が現実的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代後半の場合：</span>
              年収700万円前後に届いていれば、レジュメを登録してスカウトを集めるだけで「自分の市場価値が高めのレンジでどう見られるか」を確認できます。本命の応募はdoda ITやレバテックキャリアなどエージェント型で進め、doda Xは相場確認とハイクラスの選択肢収集に使うとよいでしょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              マネージャー・リード・スペシャリストとしての上方転職と相性が良い年代です。年齢が上がるとエージェント型でも提案が細りがちですが、ハイクラスに照準を合わせたdoda Xなら高年収レンジのスカウトに出会いやすくなります。ただしハイクラス手前の場合はスカウトが乏しくなるため、40代でその水準ならJACリクルートメントなどミドル特化エージェントの併用も有効です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は構造的に底堅いと考えられます。ハイクラス領域でも年齢を理由に弱気になりすぎず、市場価値の確認の場として活用する価値があります。
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

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            doda X はハイクラス・待ち型が強み。自分から動けるエージェント型のdoda IT、両面型でコンサルが伴走するJACリクルートメント、同じくスカウト型のビズリーチなどと使い分けるのが定石です。スカウト型同士（doda X・ビズリーチ）はレジュメを登録して待つ仕組みが共通します。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/doda-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              doda IT（エージェント型）の評判 →
            </Link>
            <Link href="/review/bizreach-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ（IT）の評判 →
            </Link>
            <Link href="/compare/highclass/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ハイクラス向けエージェント比較 →
            </Link>
            <Link href="/compare/40s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              40代エンジニア向けエージェント比較 →
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
            本記事の「良い評判／悪い評判の傾向」は、以下の口コミ・評判メディアで公開されているdoda X（旧iX転職）の情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各リンクは2026年7月17日時点で実在を確認しています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="https://www.a-tm.co.jp/top/job-change/best-job-change-site/ix-tenshoku/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">イーデス（doda X／旧iX転職の評判・口コミページ）</a>
            </li>
            <li>
              <a href="https://minhyo.jp/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">みん評（口コミプラットフォーム・トップ）</a>
            </li>
            <li>
              <a href="https://www.openwork.jp/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">OpenWork（口コミプラットフォーム・トップ）</a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">doda X に無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            レジュメを登録して、ハイクラスのスカウトを受け取ってみませんか？まずは市場価値の確認から。
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料でレジュメを登録する
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
