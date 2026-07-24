import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Relance（リランス）の評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "Relance（リランス）の評判・口コミを30代40代エンジニア目線で検証。スリーシェイク運営の高単価フリーランス案件、自社開発・プライム案件中心、フルリモート70%超、マージン非公開への向き合い方をデータと出典付きで解説します。";
const URL = "/review/relance/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/relance/" },
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
  { id: "compare", label: "フリーランス各社との使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社スリーシェイク（3-shake Inc.／SRE領域のテックカンパニー）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント"],
  ["案件の特徴", "自社開発・プライム案件中心（公式LPは「約95%以上」と表記）"],
  ["平均年収・単価", "利用者平均年収1,000万円（週5稼働想定・公式表記）／掲載例 月額86〜130万円"],
  ["リモート", "フルリモート案件70%以上（公式表記）"],
  ["対応エリア", "首都圏中心（リモート案件あり）"],
  ["得意領域", "Go・TypeScript等モダン開発／スタートアップ・ベンチャーの高単価案件"],
  ["マージン", "非公開（業界相場の数値は推定＝確認不可）"],
  ["支払いサイト", "25日（二次情報）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "自社開発・プライム案件が多く単価が高め",
    body: "フリーランスHubやコエテコキャリア等のエージェント情報・口コミでは、エンド直請け（プライム）や自社開発案件の比率が高く、中間マージンが抑えられて単価が高めになりやすいという傾向の声が見られる。公式LPでも自社開発・プライム案件中心とうたわれており、経験のあるエンジニアほど好条件を得やすいという感想が確認できる。",
  },
  {
    title: "フルリモート・モダン開発案件が探しやすい",
    body: "エンジニアスタイルやフリーランススタート等の案件・口コミ系では、フルリモート可案件やGo・TypeScriptといったモダンな技術スタックの案件が見つけやすいという傾向の声が見られる。公式でもフルリモート案件70%以上と表記されている。",
  },
  {
    title: "運営がエンジニア主体で技術の話が通じる",
    body: "Relanceはスリーシェイク（SREのプロ集団）が運営し、エンジニアが主体となって案件を分析する体制を掲げている。フリーランス系メディアでは、技術スタックの会話が通じてミスマッチが起きにくかったという傾向の声が見られる。",
  },
];

const badReviews = [
  {
    title: "ハイスキル前提で経験が浅いと案件が出にくい",
    body: "ハイスキルなフリーランスエンジニア向けと位置づけられており、フリーランス系の口コミでも、実務経験やモダン技術の経験が浅い場合は紹介案件が限られたという傾向の声が見られる。",
    cope: "経験が浅いうちは無理に独立せず、まず正社員や別エージェントで経験を積むのが現実的。案件量を最優先するなら、業界最大手級のレバテックフリーランスなど案件数の多い他社を併用して比較軸を持つとよい。",
  },
  {
    title: "案件総数の公表が限定的で全体像が読みにくい",
    body: "公式LPでは「Web公開可能な一部案件のみ」と明記されており、総案件数の数値は公表されていない。フリーランス系メディアでも、登録前に全体のボリュームが把握しづらいという指摘がある。",
    cope: "公開案件だけで判断せず、面談で自分のスキルに合う非公開案件のレンジを確認する。案件数の網羅性を補いたい場合は、フリーランススタートのような案件検索エンジンで相場感を掴んでから登録すると判断しやすい。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）は非公表で、提示単価のうち自分の取り分がどれだけかは事前に分かりづらいという不安の声が見られる。「業界相場20〜30%」「10〜15%」といった数値は二次情報の推定で、公式の公表値ではない（確認不可）。",
    cope: "面談時に①提示単価が手取りベースか②契約形態（準委任／請負）③支払いサイトの3点を確認する。複数社の提示単価を並べて相対比較すれば、マージン非公表でも実質的な判断ができる。",
  },
];

const fitYes = [
  "Go・TypeScript等モダン開発の実務経験がある30代・40代",
  "スタートアップ・ベンチャーの高単価案件を狙いたい",
  "フルリモートで参画できる案件を重視したい",
  "技術に詳しい担当とミスマッチなく進めたい",
  "正社員より単価・年収を上げたい独立志向の経験者",
];

const fitNo = [
  "IT実務経験が浅く即戦力アピールが難しい",
  "案件総数の多さ・網羅性を最優先したい（→レバテックフリーランス等）",
  "週2〜3日・副業ベースで始めたい（→ITプロパートナーズ）",
  "収入の安定や保障を最優先したい（→Midworksや正社員）",
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
    body: "エンジニア主体の担当と面談（オンライン可）。技術スタック・希望単価・リモート可否・NG条件をすり合わせる。手取りベースの希望単価をここで明確に伝えると提案がぶれにくい。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う自社開発・プライム案件の紹介を受け、応募する案件を決定。複数案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備や同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・更新サポート",
    body: "条件合意後に業務委託契約を締結し参画。参画後も単価交渉・契約更新・次案件の相談を継続して受けられる。",
  },
];

const faqs = [
  {
    q: "Relance（リランス）はどんな会社が運営していますか？",
    a: "SRE（Site Reliability Engineering）領域で知られるテックカンパニー、株式会社スリーシェイク（3-shake Inc.）が運営しています。エンジニアが主体となって案件を分析する体制を掲げている点が、一般的な人材会社運営のエージェントとの違いです。",
  },
  {
    q: "未経験・経験が浅くても案件を紹介してもらえますか？",
    a: "Relanceはハイスキルなフリーランスエンジニア向けと位置づけられており、即戦力前提です。実務経験やモダン技術の経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で経験を積むか、案件数の多い他社で実績を作ることを検討してください。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公開です。「業界相場20〜30%」「10〜15%」といった数値が語られることはありますが、これは二次情報の推定でありRelance公式の公表値ではありません（確認不可）。提示単価が手取りベースか、契約形態（準委任／請負）かを面談時に必ず確認してください。",
  },
  {
    q: "平均年収1,000万円というのは確実な数字ですか？",
    a: "公式LPに「平均年収1,000万円」という表記がありますが、これは週5フル稼働を想定した数値とされています。実際の年収は稼働日数・スキル・参画案件の単価で大きく変わるため、自分の条件での見込みは面談で個別に確認するのが確実です。",
  },
  {
    q: "本当にフルリモート案件が多いですか？",
    a: "公式LPではフルリモート案件70%以上と表記されています。地方在住でもリモート前提なら参画できる可能性がありますが、常駐前提の案件も一部あります。希望条件にリモートを明示して提案を受けるのが確実です。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "独立が不安です。保障のあるサービスはありますか？",
    a: "案件が途切れたときの保障を重視するなら、正社員並みの報酬保障を掲げるMidworksから始める選択肢があります。週2〜3日・副業から準備したい場合はITプロパートナーズも検討してください。考え方は当サイトのフリーランスと正社員の比較記事で整理しています。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（案件量最大手級）", href: "/review/levtech-freelance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "ITプロパートナーズの評判（週2-3日）", href: "/review/itpropartners/" },
  { name: "フリーランススタートの評判（案件検索）", href: "/review/freelance-start/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
];

export default function RelanceReview() {
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
          { name: "Relance" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Relance（リランス）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ スリーシェイク運営の高単価フリーランス案件を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Relance（リランス）は、SRE領域のテックカンパニー<span className="font-bold">株式会社スリーシェイク</span>が運営する、フリーランスITエンジニア向けの<span className="font-bold">業務委託案件紹介エージェント</span>です。本記事では評判・口コミを実際の口コミプラットフォームの傾向と、公式・各社が公表する数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Relance（リランス）公式サイト",
            "フリーランスHub",
            "コエテコキャリア",
            "フリーランススタート",
            "エンジニアスタイル",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：モダン開発の経験者が、自社開発・プライムの高単価案件を狙うなら有力</span>。一言でいえば「Go・TypeScript等の実務経験があり、フルリモートで高単価を狙いたい独立志向の経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・運営はテックカンパニーのスリーシェイク。自社開発・プライム案件中心で単価が高めという傾向。</li>
              <li>・フルリモート案件70%以上、利用者平均年収1,000万円（週5稼働想定）という公式表記。</li>
              <li>・一方でハイスキル前提・案件総数は非公表・マージン非公開。認識合わせと相対比較が鍵。</li>
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
            ※平均年収・リモート率・自社開発/プライム比率は公式LP表記、支払いサイト等は二次情報です。マージンは非公表で、相場の数値は推定（確認不可）です。案件数・単価は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Relanceの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 自社開発・プライム案件中心で高単価を狙いやすい</h3>
              <p className="text-sm text-petrol-deep">
                公式LPでは保有案件の自社開発・プライム比率が高いとうたわれており、多重下請けに比べて中間マージンが抑えられ単価が高めになりやすいのが特徴です。掲載案件例では月額86〜130万円といったレンジも見られます（時点・条件により変動）。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 運営がエンジニア主体のテックカンパニー</h3>
              <p className="text-sm text-petrol-deep">
                運営元のスリーシェイクはSRE領域のプロ集団で、エンジニアが主体となって案件を分析する体制を掲げています。技術スタックの会話が通じ、ミスマッチが起きにくいという傾向の声が口コミで見られます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. フルリモート・モダン開発に強い</h3>
              <p className="text-sm text-petrol-deep">
                フルリモート案件70%以上（公式表記）で、Go・TypeScriptなどモダンな技術スタックの案件が探しやすいのが特徴です。在職中で時間が限られる30代・40代でも、リモート前提で参画先を探しやすくなります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 高年収層が中心で経験を単価に反映しやすい</h3>
              <p className="text-sm text-petrol-deep">
                公式LPには利用者平均年収1,000万円（週5稼働想定）という表記があります。スキルの高い経験者が好条件を得やすい構造で、30代・40代の経験を単価に反映させやすいサービスです。
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
              フリーランス案件を比較する際に最も気になるのが「マージン（エージェントの手数料）」です。Relanceは<span className="font-bold">マージンを非公開</span>としています。「業界相場20〜30%」や「10〜15%」という数値が語られることはありますが、これは<span className="font-bold">二次情報の推定であり公式の公表値ではありません（確認不可）</span>。出典のない断定は避け、自分の案件で示される単価を基準に判断するのが安全です。
            </p>
            <p>
              一方でRelanceは自社開発・プライム案件中心をうたっており、多重下請けに比べて構造的に取り分が大きくなりやすい点はメリットです。実務上は、面談時に①提示単価が手取りベースか②契約形態（準委任／請負）③支払いサイト（二次情報では25日）の3点を確認すれば、マージン非公表でも実質的な判断ができます。複数社の提示単価を並べて相対比較するのが最も確実です。
            </p>
            <p>
              なお、30代・40代で家族やローンがある場合、単価の高さだけでなく<span className="font-bold">案件が途切れたときの備え</span>も重要です。報酬保障の仕組みがあるMidworksや、週2〜3日で副業から始められるITプロパートナーズと比較したうえで、自分のリスク許容度に合うサービスを選ぶとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。Relanceはモダン開発の即戦力が高単価を得やすい構造のため、実務経験が厚くなる30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              モダンな技術スキルが市場で評価されやすく、独立による単価アップの効果が大きい年代です。スタートアップ・ベンチャーの高単価案件に挑戦しやすい一方、独立直後は案件継続のリスクがあるため、最初の数案件は安全側に倒すのが堅実です。「独立はしたいが不安」という段階なら、正社員並みの保障があるMidworksから入る選択肢もあります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              技術力に加えてアーキテクト・SRE・マネジメント経験を単価に反映させやすい年代です。フルリモート案件が多いため、年齢を理由に常駐で不利になりにくい点もメリットです。家族構成やローンの状況次第では、単価最大化より<span className="font-bold">収入の安定</span>を優先し、保障型（Midworks）や副業並走（ITプロパートナーズ）を検討する判断も合理的です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、モダン開発の経験あるミドル層への需要は底堅いと考えられます。案件量の網羅性を補いたい場合は、案件検索エンジンの
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
                  ["Relance（本記事）", "自社開発・プライムの高単価×フルリモートを狙うモダン開発経験者。"],
                  ["レバテックフリーランス", "案件量・選択肢を最大化したい経験者。最大手級。"],
                  ["Midworks", "正社員並みの保障で安定して独立したい慎重派。"],
                  ["ITプロパートナーズ", "週2〜3日・副業から独立準備したい人。"],
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
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/review/itpropartners/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ITプロパートナーズ（週2-3日）の評判 →
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
            本記事の「良い評判・悪い評判の傾向」は、以下の口コミ・評判・案件情報メディアの公開情報を参照し、傾向として要約したものです（原文・スコアの転載は行っていません）。最終確認日：2026年7月17日。
          </p>
          <ul className="space-y-2 text-sm">
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://freelance-hub.jp/agent/detail/18/"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                Relance（リランス）のエージェント情報（フリーランスHub）
              </a>
            </li>
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://coeteco.jp/career/services/relance"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                Relance（リランス）の評判・口コミ（コエテコキャリア）
              </a>
            </li>
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://freelance-start.com/agents/134/review"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                Relance（リランス）の評判・口コミ（フリーランススタート）
              </a>
            </li>
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://engineer-style.jp/agents/48"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                Relance（リランス）のエージェント情報（エンジニアスタイル）
              </a>
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
          <h2 className="text-xl font-bold mb-3">Relanceに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、あなたのスキルでの単価レンジとリモート案件を確認してみませんか？
          </p>
          <a href="https://relance.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
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
