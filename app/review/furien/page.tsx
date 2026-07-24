import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フリエン（現ココナラテック）の評判・口コミ｜30代40代エンジニア";
const DESCRIPTION =
  "フリエン（furien／現ココナラテック）の評判・口コミを30代40代エンジニア目線で検証。ココナラグループ運営の業務委託案件、最高単価200万円、直請け中心、選べる支払いサイト、マージン非公開への向き合い方をデータと出典付きで解説します。";
const URL = "/review/furien/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/furien/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "rename", label: "「フリエン」は現在ココナラテックに名称変更" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "単価・マージン・支払いサイトの考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社との使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "フリエン（furien）→ 現在は「ココナラテック」に名称変更"],
  ["運営会社", "coconala tech Inc.（株式会社ココナラテック／ココナラグループ）"],
  ["サービス種別", "フリーランスITエンジニア向け 業務委託案件紹介エージェント"],
  ["案件数", "直近半年間で約20,132件（公式）。旧フリエン時代は3万件超とも（二次情報）"],
  ["最高単価", "月額200万円（公式）"],
  ["単価傾向", "平均単価72万円・最高180万円は旧フリエン時代の二次情報（時点要確認）"],
  ["直請け", "直請け案件中心（関連サービス「チョクフリ」は直請け100%）"],
  ["支払いサイト", "先払い／即日払い（審査あり）／15日払いから選択可（公式）"],
  ["対象", "実務経験者向け（年齢制限の明記なし・20〜60代対応）"],
  ["マージン", "非公開（業界相場の数値は推定＝確認不可）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "直請け中心で高単価案件が見つかる",
    body: "フリーランスHubやマーケタイムス等のエージェント情報・口コミでは、直請け（プライム）案件が中心で、最高単価200万円（公式）といった高単価案件が見られる点が評価されている。旧フリエン時代から業界最大級のフリーエンジニア専門求人メディアとして知られてきたという傾向の声がある。",
  },
  {
    title: "支払いサイトを選べてキャッシュフローを管理しやすい",
    body: "公式では先払い・即日払い（審査あり）・15日払いから支払いサイトを選べると説明されている。独立直後で資金繰りが不安なフリーランスにとって、報酬の受け取りタイミングを選べる点はメリットだという傾向の声が見られる。",

  },
  {
    title: "ココナラグループの基盤と幅広い対象",
    body: "現在は日本最大級のスキルマーケット「ココナラ」のグループ企業が運営しており、ココナラに登録する多数の企業から案件紹介が受けられるとされる。年齢制限の明記がなく20〜60代まで対応という点も、ミドル・シニアのエンジニアに評価されている。",
  },
];

const badReviews = [
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が少なかったという傾向の声がエンジニア系の口コミで見られる。",
    cope: "実務経験が浅いうちは無理にフリーランス化せず、まず正社員で経験を積む選択肢が現実的。案件量を比較したい場合は、案件検索エンジンのフリーランススタートで相場感を掴んでから登録するとよい。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）は非公表で、提示単価のうち自分の取り分がどれだけかが事前に分かりづらいという不安の声が見られる。「概ね20%、稀に10〜15%」といった数値は二次情報の推定で、公式の公表値ではない（確認不可）。",
    cope: "面談時に①提示単価が手取りベースか②契約形態（準委任／請負）③支払いサイトの3点を確認する。複数社の提示単価を並べて相対比較すれば、マージン非公表でも実質的な判断ができる。",
  },
  {
    title: "サービス名変更で情報が混在している",
    body: "「フリエン（furien）」から「ココナラテック」へ名称が変わったため、検索すると新旧の情報や数値（案件数・単価）が混在し、どれが最新か分かりにくいという指摘がある。",
    cope: "案件数・単価などの数値は、必ず現行の「ココナラテック」の公式情報で最新を確認する。古い二次情報の数値は時点を疑い、登録後に自分のスキルでの実際のレンジを面談で確かめるのが安全。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代・40代エンジニア",
  "直請け中心の高単価案件を狙いたい独立志向の経験者",
  "報酬の支払いサイトを選んでキャッシュフローを管理したい",
  "ミドル・シニア（40〜60代）でも案件を探したい",
  "ココナラグループの基盤で案件を探したい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "収入の安定や保障を最優先したい（→Midworksや正社員転職）",
  "週2〜3日・副業ベースで始めたい（→ITプロパートナーズ）",
  "案件総数の網羅性を最優先したい（→レバテックフリーランス等）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・カウンセリング予約",
    body: "公式サイト（ココナラテック）から経歴・希望単価・稼働条件を入力。在職中・現案件参画中でも次の案件探しとして登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。技術スタック・希望単価・リモート可否・NG条件をすり合わせる。手取りベースの希望単価と希望する支払いサイトをここで伝えると提案がぶれにくい。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う直請け中心の案件の紹介を受け、応募する案件を決定。複数案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備や同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・支払いサイト選択",
    body: "条件合意後に業務委託契約を締結し参画。先払い・即日払い・15日払いなどから支払いサイトを選び、参画後も単価交渉・次案件の相談を受けられる。",
  },
];

const faqs = [
  {
    q: "フリエンとココナラテックは同じサービスですか？",
    a: "はい、同じサービスです。「フリエン（furien）」は名称が変わり、現在は「ココナラテック」として運営されています。運営会社は日本最大級のスキルマーケット「ココナラ」のグループ企業、coconala tech Inc.（株式会社ココナラテック）です。検索すると新旧の情報が混在するため、数値は現行のココナラテック公式で最新を確認してください。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "業務委託案件は即戦力前提のため、IT実務経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公開です。「概ね20%、稀に10〜15%」といった数値が語られることはありますが、これは二次情報の推定であり公式の公表値ではありません（確認不可）。提示される単価が手取りベースか、契約形態が準委任か請負かを面談時に必ず確認してください。",
  },
  {
    q: "案件数や単価はどのくらいですか？",
    a: "公式では直近半年間で約20,132件、最高単価は月額200万円とされています。旧フリエン時代の「案件3万件超・平均単価72万円・最高180万円」は二次情報で時点が古い可能性があります。自分のスキルでの単価は面談で個別に確認するのが確実です。",
  },
  {
    q: "支払いサイトは選べますか？",
    a: "公式では先払い・即日払い（審査あり）・15日払いから選択できるとされています。独立直後で資金繰りが不安な場合、報酬の受け取りタイミングを早められる点はメリットです。条件の詳細は登録後に確認してください。",
  },
  {
    q: "40代・50代でも使えますか？",
    a: "年齢制限の明記はなく、公式では20〜60代に対応とされています。実務経験のあるミドル・シニアのエンジニアでも案件を探しやすいサービスです。ただし常駐案件では年齢を気にする声もあるため、リモート可・専門性の高い案件を軸に探すと選択肢を確保しやすくなります。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（案件量最大手級）", href: "/review/levtech-freelance/" },
  { name: "Relance（リランス）の評判（高単価プライム）", href: "/review/relance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "フリーランススタートの評判（案件検索）", href: "/review/freelance-start/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
];

export default function FurienReview() {
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
          { name: "フリエン" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリエン（現ココナラテック）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 直請け中心の業務委託案件を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          フリエン（furien）は、フリーランスITエンジニア向けに<span className="font-bold">業務委託（フリーランス）案件</span>を紹介するエージェントです。現在は<span className="font-bold">「ココナラテック」</span>に名称変更され、日本最大級のスキルマーケット「ココナラ」のグループ企業が運営しています。本記事では評判・口コミを口コミプラットフォームの傾向と公式の公表データに基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ココナラテック（旧フリエン）公式サイト",
            "フリーランスHub",
            "マーケタイムス",
            "複数フリーランス系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：直請け中心の高単価案件を、支払いサイトも選びながら探したい経験者向け</span>。一言でいえば「IT実務経験があり、直請けの高単価案件とキャッシュフロー管理を両立したい30代・40代」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・現在はココナラグループ運営の「ココナラテック」。直請け中心・最高単価月200万円（公式）。</li>
              <li>・先払い・即日払い・15日払いから支払いサイトを選べる。20〜60代対応で年齢制限の明記なし。</li>
              <li>・一方で実務経験が前提・マージン非公開・名称変更で情報が混在。最新は公式確認が必須。</li>
            </ul>
          </div>
        </section>

        {/* 名称変更の注意 */}
        <section id="rename" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            「フリエン」は現在「ココナラテック」に名称変更
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              「フリエン（furien）」は、現在<span className="font-bold">「ココナラテック」</span>に名称が変わっています。運営は日本最大級のスキルマーケット「ココナラ」のグループ企業、coconala tech Inc.（株式会社ココナラテック）です。同じサービスですが、検索すると<span className="font-bold">旧名フリエン時代の古い数値と現行の数値が混在</span>するため注意が必要です。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            本記事では、案件数（直近半年で約20,132件）・最高単価（月200万円）など<span className="font-bold">現行ココナラテックの公式数値</span>を優先して扱い、旧フリエン時代の数値（案件3万件超・平均単価72万円・最高180万円など）は「二次情報・時点要確認」として区別しています。登録前に最新の公式情報を確認してください。
          </p>
        </section>

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
            ※案件数・最高単価・支払いサイトは現行ココナラテックの公式情報、平均単価等は旧フリエン時代の二次情報（時点要確認）です。マージンは非公表で、相場の数値は推定（確認不可）です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリエン（ココナラテック）の特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 直請け中心で高単価を狙いやすい</h3>
              <p className="text-sm text-petrol-deep">
                直請け（プライム）案件が中心で、最高単価は月額200万円（公式）。多重下請けに比べて中間マージンが抑えられ、単価が高めになりやすい構造です。関連サービス「チョクフリ」は直請け100%をうたっています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 支払いサイトを選べる</h3>
              <p className="text-sm text-petrol-deep">
                先払い・即日払い（審査あり）・15日払いから支払いサイトを選べます。独立直後で資金繰りが不安なフリーランスにとって、報酬の受け取りタイミングを早められるのは大きな安心材料です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ココナラグループの基盤</h3>
              <p className="text-sm text-petrol-deep">
                現在は日本最大級のスキルマーケット「ココナラ」のグループ企業が運営し、ココナラに登録する多数の企業から案件紹介が受けられるとされます。エージェント実績も長く、案件供給の基盤がしっかりしています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 幅広い年代に対応</h3>
              <p className="text-sm text-petrol-deep">
                年齢制限の明記がなく、公式では20〜60代に対応とされています。実務経験のあるミドル・シニアのエンジニアでも案件を探しやすく、40代以降のキャリアでも活用しやすいサービスです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・マージン・支払いサイトの考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フリーランス案件を比較する際に最も気になるのが「マージン（エージェントの手数料）」です。フリエン（ココナラテック）は<span className="font-bold">マージンを非公開</span>としています。「概ね20%、稀に10〜15%」という数値が語られることはありますが、これは<span className="font-bold">二次情報の推定であり公式の公表値ではありません（確認不可）</span>。出典のない断定は避け、自分の案件で示される単価を基準に判断するのが安全です。
            </p>
            <p>
              一方で本サービスは直請け中心をうたっており、多重下請けに比べて構造的に取り分が大きくなりやすい点はメリットです。実務上は、面談時に①提示単価が手取りベースか②契約形態（準委任／請負）③支払いサイトの3点を確認すれば、マージン非公表でも実質的な判断ができます。
            </p>
            <p>
              特にフリエン（ココナラテック）の特徴は<span className="font-bold">支払いサイトを選べる</span>点です。先払い・即日払い（審査あり）・15日払いから選択でき、独立直後で家族やローンがある30代・40代にとって、報酬の受け取りタイミングを早められるのは資金繰り上の安心材料になります。単価の高さだけでなく、こうしたキャッシュフロー面も含めて他社と比較するとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。フリエン（ココナラテック）は即戦力の経験者が直請けで高単価を得やすい構造のため、実務経験が厚くなる30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価されやすく、独立による単価アップの効果が大きい年代です。独立直後は案件継続のリスクがあるため、支払いサイトを早めに設定してキャッシュフローを安定させつつ、最初の数案件は安全側に倒すのが堅実です。「独立はしたいが不安」という段階なら、正社員並みの保障があるMidworksから入る選択肢もあります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              年齢制限の明記がなく20〜60代対応のため、ミドル・シニアでも案件を探しやすいのが利点です。技術力に加えてマネジメント・アーキテクト経験を単価に反映させやすい一方、常駐型では年齢を気にする声もあるため、リモート可・専門性の高い案件を軸に探すと選択肢を確保しやすくなります。家族構成やローンの状況次第では、収入の安定を優先し保障型（Midworks）も検討する判断が合理的です。
            </p>
            <p>
              案件量の網羅性を補いたい場合は、案件検索エンジンの
              <Link href="/review/freelance-start/" className="text-petrol hover:underline">フリーランススタート</Link>
              や最大手級の
              <Link href="/review/levtech-freelance/" className="text-petrol hover:underline">レバテックフリーランス</Link>
              を併用するとよいでしょう。
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

        {/* フリーランス各社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス各社との使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランスエージェントは「何を最大化したいか」で選ぶと失敗しにくいです。当サイトでレビューしている各社は、それぞれ強みが住み分けられています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["フリエン／ココナラテック（本記事）", "直請け中心の高単価×支払いサイトを選びたい経験者。20〜60代対応。"],
                  ["レバテックフリーランス", "案件量・選択肢を最大化したい経験者。最大手級。"],
                  ["Relance（リランス）", "自社開発・プライムの高単価×フルリモート狙い。"],
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
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（案件量）の評判 →
            </Link>
            <Link href="/review/relance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Relance（高単価プライム）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
          </div>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判・悪い評判の傾向」は、以下の各メディアに掲載された口コミ・レビューを参照して傾向を要約したものです（原文・スコアの転載ではありません）。最新の内容は各リンク先でご確認ください。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5 bg-slate-50">
            <li className="flex items-start gap-2">
              <span className="text-petrol shrink-0">›</span>
              <a href="https://freelance-hub.jp/agent/detail/9/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">
                フリーランスHub：ココナラテック（旧フリエン）のエージェント情報・案件
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-petrol shrink-0">›</span>
              <a href="https://marketimes.jp/furien-review/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">
                マーケタイムス：フリエン（furien）の評判・口コミ調査
              </a>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">
            ※各リンク先の実在は2026年7月時点で確認しています。外部サイトの内容・URLは予告なく変更される場合があります。案件数・単価などの数値は現行「ココナラテック」の公式情報で最新をご確認ください。
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
          <h2 className="text-xl font-bold mb-3">フリエン（ココナラテック）に無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、直請け案件の単価レンジと選べる支払いサイトを確認してみませんか？
          </p>
          <a href="https://furien.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
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
