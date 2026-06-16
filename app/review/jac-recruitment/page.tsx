import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "JACリクルートメントの評判｜40代エンジニアの本音と活用法";
const DESCRIPTION =
  "JACリクルートメントの評判・口コミを30代40代エンジニア目線で検証。両面型ハイクラス支援の強み、40代でも応募できる求人、年収500万以上の目安、断られる不安や対処法までデータと出典付きで解説します。";
const URL = "/review/jac-recruitment/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "scope", label: "IT特化ではない点と、それでも有効な理由" },
  { id: "strength", label: "特徴・強み（両面型とは）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "40代エンジニアにこそ最有力な理由" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社JACリクルートメント（東証プライム上場）"],
  ["サービス類型", "両面型（1人のコンサルが企業・求職者の双方を担当）ハイクラス／ミドル特化エージェント"],
  ["求人数", "媒体により値が割れており確認不可（IT求人も扱う総合・ハイクラス型）"],
  ["対象年齢", "主に30〜50代。30〜40代のミドル層が中心"],
  ["年収目安", "年収500万円以上が目安。600万円以上が一つのライン"],
  ["得意領域", "上場・外資系・管理職／専門職（ITポジションも含む）"],
  ["利用者満足度", "93%（二次情報・時点により変動）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "両面型ならではの企業情報の深さ",
    body: "イーデスやみん評等の口コミプラットフォームでは、同じコンサルタントが企業側も担当しているため、社風や求める人物像、選考の通過ポイントまで具体的に共有してもらえたという傾向の声が見られる。求人票だけではわからない内部情報を踏まえて応募できた、という感想が複数確認できる。",
  },
  {
    title: "40代でも応募できる求人を紹介された",
    body: "OpenWork等では、年齢を理由に門前払いされず、40代でも応募可能なハイクラス求人を複数提示されたという傾向の声が見られる。JAC公式には40代・IT向けの特設ページがあり、ミドル層を主対象に据えている点が背景にあると考えられる。",
  },
  {
    title: "上場・外資系の質の高い求人",
    body: "イーデス等では、上場企業や外資系、管理職・専門職といった年収レンジの高い求人提案を受けられたという声が見られる。年収を一段上げたいミドル層との相性が良いという傾向の感想が確認できる。",
  },
];

const badReviews = [
  {
    title: "一定の年収・経歴がないと求人が限られる",
    body: "年収500万円以上が一つの目安とされるため、水準に満たない場合は紹介求人が少なく『門前払いに感じた』という傾向の声がみん評等で見られる。ハイクラス特化ゆえの構造的な側面である。",
    cope: "現年収や経歴が目安に届かない場合は、IT特化で求人数の多いレバテックキャリアや、総合型のdodaを軸にしつつ、市場価値が上がった段階でJACに再登録する選択肢が現実的。",
  },
  {
    title: "大手総合型より求人の絶対数は少なめ",
    body: "ハイクラス・ミドル特化のため、求人の網羅性という点では大手総合型エージェントに見劣りすると感じたという傾向の声がイーデス等で見られる。",
    cope: "求人数の幅は総合型（doda・リクルート系）で補い、質と企業情報の深さをJACで取りに行く併用が定石。2〜3社併用が一般に推奨される。",
  },
  {
    title: "担当によって温度差を感じることがある",
    body: "両面型・分業の少ない体制ゆえに、担当コンサルタントの専門領域や相性で体験が変わると感じたという傾向の声がOpenWork等で見られる。",
    cope: "得意領域がずれていると感じたら、担当変更を申し出るか、面談時に希望業界・技術領域を具体的に伝えて最初からミスマッチを減らすとよい。",
  },
];

const fitYes = [
  "年収500万円以上で、さらに年収を上げたい30〜40代エンジニア",
  "上場・外資系・管理職／専門職ポジションを狙いたい",
  "40代で『年齢で断られるのでは』と不安だが応募の幅を確保したい",
  "求人票に載らない企業の内部情報を踏まえて応募したい",
  "マネジメント・アーキテクト等の専門性を武器にしたい",
];

const fitNo = [
  "現年収500万円未満・実務経験が浅い／未経験",
  "とにかく求人の絶対数を多く比較したい（網羅性最優先）",
  "純粋な開発職にこだわり、管理・上流に関心がない（IT特化エージェント向き）",
  "地方の対面サポートだけで完結させたい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約5分）",
    body: "公式サイトから経歴・希望年収・希望業界を入力。在職中でも登録でき、情報収集目的の登録も可能。年収目安（500万円以上）を意識して経歴を整理しておくとよい。",
  },
  {
    step: "STEP2",
    title: "コンサルタントとの面談",
    body: "両面型のコンサルタントと面談（オンライン可）。企業側も知る担当だからこそ、技術スタックやマネジメント経験を踏まえて狙えるポジションのレンジをすり合わせられる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募",
    body: "上場・外資・管理職などハイクラス求人の紹介を受け、応募先を決定。求人票に載らない社風・選考ポイントの共有を受けてから応募できる。",
  },
  {
    step: "STEP4",
    title: "面接対策・選考",
    body: "企業ごとの選考傾向を踏まえた面接対策を受ける。両面型ゆえに『この企業が何を重視するか』の精度が高いのが強み。日程調整は担当が代行。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後の年収・条件交渉を担当がサポート。ハイクラス転職では交渉余地が大きいため、ミドル層の年収アップに効きやすい。入社日を調整して完了。",
  },
];

const faqs = [
  {
    q: "JACリクルートメントはIT特化のエージェントですか？",
    a: "いいえ。JACリクルートメントはIT特化ではなく、上場・外資系・管理職／専門職を中心に幅広い業界を扱うハイクラス・ミドル特化の総合型エージェントです。ただしITポジションも豊富に扱っており、公式には40代・IT向けの特設ページもあります。『IT専門ではないが、年収アップ・管理職・外資系といった用途では有効』という位置づけで活用するのが実態に合っています。純粋な開発職にこだわる場合はレバテックキャリアなどのIT特化型が向いています。",
  },
  {
    q: "40代エンジニアでも使えますか？断られませんか？",
    a: "JACは主に30〜50代のミドル層を対象にしており、40代エンジニアにとって最有力候補の一つです。OpenWork等の口コミでも40代で応募可能な求人を複数紹介されたという傾向の声があります。一方で年収500万円以上が一つの目安とされ、水準に満たない経歴では紹介求人が限られることがあります。その場合はIT特化のレバテックキャリアや総合型のdodaを併用するのが現実的です。",
  },
  {
    q: "両面型とは何ですか？普通のエージェントと何が違いますか？",
    a: "両面型とは、1人のコンサルタントが企業側（求人を出す会社）と求職者の双方を担当する方式です。一般的な分業型（企業担当と求職者担当が分かれる）と違い、求人票に載らない社風や選考ポイントを直接共有してもらいやすいのが特徴です。企業の内部情報を踏まえて応募できる点が、ミドル層のミスマッチ回避に効きます。",
  },
  {
    q: "年収はどのくらいが目安ですか？",
    a: "年収500万円以上が目安、600万円以上が一つのラインとされています（二次情報）。これに満たない場合は紹介求人が限られることがあるため、市場価値を上げてから登録するか、求人数の多いサービスとの併用を検討してください。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・面接対策・年収交渉まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。JACで質の高いハイクラス求人と企業情報を取りに行き、求人数の幅をdodaなど総合型で、IT専門性をレバテックキャリアで補う使い分けが効果的です。",
  },
  {
    q: "エンジニアからITコンサルやPMへ進みたい場合にも向いていますか？",
    a: "管理職・専門職を扱うため上流・マネジメント志向とは相性が良い一方、コンサル業界に本格的に挑戦したい場合は、コンサル業界特化のアクシスコンサルティング（AXIS Agent）の方が選考対策まで踏み込んでもらえます。キャリアチェンジの全体像は当サイトの『エンジニアからコンサルへ』の記事も参考にしてください。",
  },
];

const related = [
  { name: "ビズリーチ（IT）の評判を見る", href: "/review/bizreach-it/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/age/40s/" },
  { name: "エンジニアからコンサルへのキャリア", href: "/career/engineer-to-consultant/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function JacRecruitmentReview() {
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
          { name: "JACリクルートメント" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          JACリクルートメントの評判・口コミ【40代エンジニアに最有力】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 両面型ハイクラス・ミドル特化エージェントの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          JACリクルートメントは、上場・外資系・管理職／専門職を中心に扱う「ハイクラス・ミドル特化」の両面型エージェントです。IT専門ではありませんが、ITポジションも豊富で、公式には40代・IT向けの特設ページもあります。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公開データに基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "JACリクルートメント公式（40代・IT向け特設ページ等）",
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
              <span className="font-bold">総合評価：年収500万円以上の30〜40代、とくに40代エンジニアの年収アップ・ハイクラス転職に最有力の一つ</span>。一言でいえば「年齢で諦めず、上場・外資・管理職クラスを狙いたい経験者」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・両面型（1人のコンサルが企業・求職者双方を担当）で企業の内部情報が深い。利用者満足度93%（二次情報）。</li>
              <li>・主に30〜50代が対象で、40代でも応募可能な求人を扱う数少ないハイクラス型。公式に40代・IT特設ページあり。</li>
              <li>・一方でIT特化ではなく、年収500万円未満・未経験には不向き。求人の絶対数も大手総合型より少なめ。</li>
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
            ※求人数は媒体により値が割れており、ここでは断定を避けています。満足度93%は二次情報で時点により変動します。年収目安は二次情報です。
          </p>
        </section>

        {/* IT特化でない点 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            IT特化ではない点と、それでもエンジニアに有効な理由
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              最初に明確にしておくと、JACリクルートメントは<span className="font-bold">IT特化のエージェントではありません</span>。上場・外資系・管理職／専門職を幅広く扱う総合的なハイクラス・ミドル特化型です。レバテックキャリアやGeeklyのようなIT専業とは性質が異なります。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            では、なぜ当サイト（30〜40代エンジニア向け）でJACを厚く扱うのか。理由は、<span className="font-bold text-slate-700">「年収アップ」「管理職・上流ポジション」「外資・上場企業」「40代でも応募可能」という、ミドルエンジニアが直面しがちな課題に対して有効な用途が明確だから</span>です。IT専業エージェントは技術職の求人に強い一方、年収レンジが上がるほど、また年齢が上がるほど提案が細る傾向があります。JACはその空白を埋める使い方ができます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            逆に、純粋な開発職（コードを書き続けたい・上流や管理に関心がない）にこだわるなら、IT特化型の方が求人の量・質ともに合います。JACは「IT専門ではないが、年収・役職・企業ブランドを一段上げたい用途で有効」という位置づけで併用するのが、もっとも合理的な使い方です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JACリクルートメントの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 両面型で企業の内部情報が深い</h3>
              <p className="text-sm text-petrol-deep">
                1人のコンサルタントが企業側と求職者の双方を担当する両面型のため、求人票に載らない社風・求める人物像・選考通過のポイントを直接共有してもらいやすいのが最大の強みです。ミドル層の転職で起きやすいミスマッチを事前に減らせます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 上場・外資系・管理職の質の高い求人</h3>
              <p className="text-sm text-petrol-deep">
                年収500万円以上を目安に、上場企業・外資系・管理職／専門職の求人を扱います。年収を一段上げたい、役職や裁量を上げたいミドルエンジニアの「上方転職」に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 30〜50代を主対象とするミドル特化</h3>
              <p className="text-sm text-petrol-deep">
                利用者の中心が30〜50代で、40代でも応募可能な求人を扱う点は、年齢を理由に提案が細りがちな他サービスとの大きな違いです。公式に40代・IT向けの特設ページが用意されている点も、ミドル層を本気で対象にしている証左といえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 東証プライム上場の運営基盤</h3>
              <p className="text-sm text-petrol-deep">
                運営は東証プライム上場の株式会社JACリクルートメント。利用者満足度93%（二次情報）という数値もあり、ハイクラス領域での実績の蓄積が、企業とのリレーションや交渉力につながっていると考えられます。
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
            JACは年収500万円以上が目安のため、自分の年代の相場を把握しておくと、紹介求人や年収交渉の妥当性を判断しやすくなります。公的データで相場感を確認しておきましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["システムエンジニア（受託開発）平均年収", "約578.5万円"],
                  ["同・平均年齢", "約37.1歳"],
                  ["JACの年収目安", "500万円以上（600万円以上が一つのライン）"],
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
            厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（権威データ）。ボリュームゾーンの平均がこの水準ということは、平均的なミドルエンジニアであればJACの年収目安（500万円以上）に届きうる、ということでもあります。逆に平均を下回る場合は、まず市場価値を上げてからの登録が現実的です。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：厚生労働省 job tag。年収は職種・地域・経験により大きく異なります。JACの年収目安は二次情報です。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            40代エンジニアにこそ最有力な理由（30代の使い方も）
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、JACを「40代エンジニアに最有力の一つ」と位置づけています。理由はシンプルで、<span className="font-bold text-slate-700">年齢が上がるほど提案が細りがちな他サービスに対し、JACは30〜50代を主対象に据え、40代でも応募可能な求人を実際に扱っているから</span>です。公式に40代・IT向けの特設ページがある点も、口先でなくミドルを対象にしている裏付けといえます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              本サイトの読者にとっての本命の一つです。20年近い実務、マネジメント、アーキテクチャ設計、特定ドメインの深い知見といった「40代ならではの強み」は、JACが扱う上場・外資・管理職ポジションでこそ評価されます。面談では「年齢で諦めている希望」をあえて口に出してすり合わせると、両面型コンサルが現実的に狙えるレンジを提示してくれます。年齢を理由に弱気になりすぎず、市場価値の確認の場としても価値があります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              年収500万円前後に届いていれば、年収アップ・役職アップの「上方転職」の本命として使えます。技術力はIT特化型（レバテックキャリア等）で評価してもらいつつ、年収レンジと企業ブランドを上げる選択肢としてJACを併用すると、提案の幅と質の両取りができます。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は構造的に底堅いと考えられます。40代だからと応募をためらう必要はなく、むしろハイクラス領域に強いJACのようなエージェントを使う価値が高い年代です。
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
            JACはハイクラス・ミドル特化で「質と企業情報の深さ・40代対応」が強み。求人の網羅性やIT専門性は他サービスで補うのが定石です。なお、ビズリーチ（スカウト型）やリクルートダイレクトスカウトは「待ち型」、JACは「コンサルが伴走する両面型」で仕組みが異なります。エンジニアからコンサル・PMへの本格的なキャリアチェンジを狙うなら、コンサル特化のアクシスコンサルティング（AXIS Agent）の方が選考対策に踏み込めます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/compare/highclass/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ハイクラス向けエージェント比較 →
            </Link>
            <Link href="/compare/40s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              40代エンジニア向けエージェント比較 →
            </Link>
            <Link href="/review/bizreach-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ（IT）の評判 →
            </Link>
            <Link href="/career/engineer-to-consultant/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              エンジニアからコンサルへのキャリア →
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
          <h2 className="text-xl font-bold mb-3">JACリクルートメントに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            40代でも諦めない。まずは無料面談で、狙えるハイクラス求人のレンジを確認してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料面談を予約する
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
