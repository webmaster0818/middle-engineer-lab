import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "レバテックキャリアの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "レバテックキャリアの評判・口コミを30代40代エンジニア目線で検証。求人数や年収アップ実績、良い評判と悪い評判、断られる・しつこいといった不安、退会方法までデータと出典付きで解説します。";
const URL = "/review/levtech/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/levtech/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "レバテック株式会社（レバレジーズグループ）"],
  ["公開求人数", "約5万件超（2026年6月時点・複数転職メディア集計）"],
  ["対応エリア", "首都圏中心（二次情報。リモート求人あり）"],
  ["得意領域", "IT・Web系エンジニア／高年収求人"],
  [
    "年収アップ実績",
    "内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績・公式系）",
  ],
  ["利用者層", "利用者の約80%が20〜30代（公式ガイド記事）"],
  ["サポート", "書類添削・面接対策・年収交渉（求職者無料）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "書類添削・面接対策が丁寧",
    body: "OUTSIDEMAGAZINEやイーデス等の口コミプラットフォームでは、職務経歴書の添削や面接前の準備が具体的で助かったという声が見られる。IT特化ゆえに技術的な経歴の見せ方まで踏み込んでもらえた、という傾向の感想が複数確認できる。",
  },
  {
    title: "LINEで連絡が完結してやり取りが楽",
    body: "Qiita Job Change等では、連絡がLINEで完結するためレスポンスが取りやすく、在職中でも転職活動を進めやすかったという傾向の声が見られる。",
  },
  {
    title: "高年収・好条件の求人が多い",
    body: "イーデス等では、提案される求人の年収レンジが高めで、現職より条件の良いポジションを紹介してもらえたという声が見られる。レバテック公式ガイド記事では600万円以上が公開求人の約8割という二次情報もある（時期により変動）。",
  },
];

const badReviews = [
  {
    title: "未経験者には紹介されにくい",
    body: "IT実務経験を前提とするため、未経験・異業種からの転職では紹介求人が少なかったという傾向の声がOUTSIDEMAGAZINE等で見られる。",
    cope: "IT実務経験が浅い場合は、未経験歓迎求人も扱うワークポートを併用するのが現実的。経験を積んでから改めてレバテックに登録する選択肢もある。",
  },
  {
    title: "初回面談後の連絡が遅いことがある",
    body: "Qiita Job Change等では、繁忙期などに初回面談後の連絡ペースが落ちたと感じたという声が一部見られる。",
    cope: "希望時期と連絡手段（LINE優先など）を初回に明示しておくと行き違いが減る。返信が滞ったら自分から状況確認の連絡を入れるとよい。",
  },
  {
    title: "希望と異なる求人を提案された例",
    body: "イーデス等では、希望条件とずれた求人を提案されたと感じたという傾向の声が見られる。担当者との認識合わせが不十分な初期に起きやすい。",
    cope: "NG条件（勤務地・年収下限・SES不可など）を最初に具体的に伝える。提案がずれた場合は理由をフィードバックすると精度が上がる。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代エンジニア",
  "技術に詳しい担当者と会話しながら進めたい",
  "現職より年収を上げたい・市場価値を確かめたい",
  "首都圏勤務またはリモート求人を希望している",
  "LINE中心でテンポよくやり取りしたい",
];

const fitNo = [
  "IT実務未経験・異業種から初めて転職する",
  "地方の対面サポートを最優先したい",
  "事務・管理系などIT以外の求人を探している",
  "求人を自分で大量に検索して比較したい（サイト型希望）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約3分）",
    body: "公式サイトから氏名・経歴・希望条件を入力。在職中でも登録でき、すぐに転職しない情報収集目的の登録も可能。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "担当アドバイザーと面談（オンライン可）。これまでの経験・技術スタック・希望年収やNG条件をすり合わせる。ここで条件を具体的に伝えるほど後の提案精度が上がる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募",
    body: "条件に合う公開・非公開求人の紹介を受け、応募先を決定。職務経歴書の添削を受けてから応募するとよい。",
  },
  {
    step: "STEP4",
    title: "面接対策・選考",
    body: "企業ごとの面接対策を受けて選考に臨む。日程調整は担当者が代行。技術面接のポイント共有を受けられる場合がある。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件交渉を担当者がサポート。複数内定時の比較や退職交渉の相談も可能。入社日を調整して完了。",
  },
];

const faqs = [
  {
    q: "レバテックキャリアは未経験でも登録できますか？断られることはありますか？",
    a: "IT・Webの実務経験がある方が主な対象のため、未経験・異業種からの場合は紹介できる求人が少ないことがあります。経歴によっては面談まで進めても求人紹介が限られるケースがあるため、実務経験が浅い方はワークポートなど未経験歓迎求人を扱うサービスの併用が現実的です。",
  },
  {
    q: "連絡がしつこいという評判は本当ですか？",
    a: "口コミプラットフォームではむしろLINEで連絡が完結して楽という声が多く見られます。連絡頻度が気になる場合は、希望の連絡手段・頻度・時間帯を初回面談で伝えておくと調整してもらえます。",
  },
  {
    q: "退会・解約の方法は？",
    a: "担当アドバイザーへ退会の意向を伝えるか、公式サイトの問い合わせ窓口から退会手続きを依頼します。転職が決まった場合や活動を中断する場合も、連絡しておくと求人紹介の連絡が止まります。最新の手順は公式サイトでご確認ください。",
  },
  {
    q: "登録は無料ですか？費用はかかりますか？",
    a: "求職者は無料です。求人紹介・書類添削・面接対策・年収交渉まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "対応エリアはどこですか？地方在住でも使えますか？",
    a: "首都圏中心という二次情報があります。リモートワーク求人も扱われているため、地方在住でもリモート前提なら利用できる可能性があります。対面の地方サポートを重視する場合は全国対応のdodaなどの併用を検討してください。",
  },
  {
    q: "年収はどのくらい上がりますか？",
    a: "公式系の実績として「内定承諾者のうち応募時年収との差が70万円以上＝3人に2人」（2023年1月〜2024年3月実績）という数値が公表されています。実際の上がり幅は個人の経験・スキル・応募ポジションによって異なります。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。IT特化のレバテックキャリアと、求人数が多い総合型のdodaを組み合わせる使い方がよく知られています。",
  },
  {
    q: "在職中でも利用できますか？",
    a: "在職中の利用が可能です。面談はオンライン対応があり、連絡もLINE中心で進められるため、働きながらでも活動しやすいサービスです。",
  },
];

const related = [
  { name: "レバテックキャリアとGeeklyを比較", href: "/compare/levtech-vs-geekly/" },
  { name: "レバテックキャリアとdodaを比較", href: "/compare/levtech-vs-doda/" },
  { name: "ビズリーチとレバテックを比較", href: "/compare/bizreach-vs-levtech/" },
  { name: "type転職エージェントITとレバテックを比較", href: "/compare/type-it-vs-levtech/" },
  { name: "30代エンジニア向けエージェント比較", href: "/compare/30s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
  { name: "テックゴーの評判（IT特化・年収交渉に強み）", href: "/review/techgo/" },
];

export default function LevtechReview() {
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
          { name: "レバテックキャリア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化転職エージェントの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          レバテックキャリアはIT・Web業界に特化した転職エージェントです。本記事では「評判・口コミ」を実際の口コミプラットフォームの傾向と、各社が公表する数値に基づいて、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式ガイド記事",
            "OUTSIDEMAGAZINE",
            "Qiita Job Change",
            "イーデス",
            "複数転職メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：IT実務経験がある30代エンジニアの年収アップに強い</span>。一言でいえば「技術に詳しい担当者と、高年収のIT求人を狙いたい在職中の経験者」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT/Web特化で、利用者の約80%が20〜30代（公式ガイド記事）。30代の主戦場。</li>
              <li>・内定承諾者の3人に2人が応募時年収＋70万円以上（2023年1月〜2024年3月実績・公式系）。</li>
              <li>・一方で未経験者・地方対面・IT以外の求人には不向き。その場合は併用が前提。</li>
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
            ※求人数は時期により変動が大きく、複数転職メディアの集計値です。年収アップ実績は公式系の公表値（計測期間2023年1月〜2024年3月）です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックキャリアの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. IT・Web特化で求人の質が高い</h3>
              <p className="text-sm text-petrol-deep">
                IT・Web業界に特化し、複数転職メディアの集計では公開求人が約5万件超（2026年6月時点）とされています。公式ガイド記事では600万円以上が公開求人の約8割という二次情報もあり（時期により変動）、高年収レンジの求人を狙いやすいのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 技術に精通した担当者</h3>
              <p className="text-sm text-petrol-deep">
                IT特化ゆえに、言語・フレームワーク・クラウドなど技術的な会話が通じる担当者と進めやすいのが強みです。口コミでも書類添削・面接対策が具体的という傾向の声が見られます。技術経歴の見せ方まで相談できる点は経験者に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 年収アップ実績と交渉サポート</h3>
              <p className="text-sm text-petrol-deep">
                公式系の公表値では、内定承諾者のうち応募時年収との差が70万円以上の人が3人に2人（2023年1月〜2024年3月実績）。利用者の約80%が20〜30代という層構成（公式ガイド記事）とあわせ、30代の年収アップ転職と相性が良いといえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. LINE完結でテンポよく進む</h3>
              <p className="text-sm text-petrol-deep">
                Qiita Job Change等では、連絡がLINEで完結して在職中でも進めやすいという傾向の声が見られます。働きながら効率的に活動したい30代・40代に向いた連絡スタイルです。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載ではありません）。
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4">
            本記事で「傾向」として紹介した評判・口コミは、以下の外部メディアのレバテックキャリア該当ページを参照しています（原文転載ではなく傾向の要約です）。リンク先の最終確認日：2026年7月。
          </p>
          <ul className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
            <li className="px-4 py-3 text-sm">
              <a href="https://www.a-tm.co.jp/top/job-change/levtech/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                イーデス｜レバテックキャリアの評判・口コミ
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://outside.no-limit.careers/levateccareer-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                OUTSIDEMAGAZINE｜レバテックキャリアの評判・口コミ
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://jobs.qiita.com/levtechcareer/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                Qiita Job Change｜レバテックキャリアの評判・口コミ
              </a>
            </li>
          </ul>
        </section>

        {/* 年収相場データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの年収相場データ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            レバテックキャリアを評価するうえで、まず自分の年代の年収相場を把握しておくと、提案された求人や年収交渉の妥当性を判断しやすくなります。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["20代", "約378万円"],
                  ["30代", "約499万円"],
                  ["40代", "約618万円"],
                  ["50代", "約685万円"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。高年収レンジの求人比率が高いレバテックキャリアは、相場より上を狙う交渉の土台として使いやすいといえます。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）で、ミドル層がボリュームゾーンであることがわかります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。レバテック公表の年代別平均年収（2025年）は、正社員SEで30代約499万円・40代約618万円。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。経験を年収に反映させやすい年代だからこそ、エージェント選びが結果を左右します。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              レバテックキャリアの利用者の中心層（約80%が20〜30代）であり、もっとも提案を受けやすい年代です。技術スタックを軸に年収アップを狙う本命として使い、面談では「上げたい年収」と「使いたい技術」を明確に伝えると提案がぶれにくくなります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              IT特化ゆえに技術力の評価は受けやすい一方、利用者層の中心が20〜30代である点は踏まえる必要があります。マネジメント・アーキテクト経験など「40代ならではの強み」を前面に出し、求人の幅を確保するために40代の実績が豊富なdodaを併用するのが堅実です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は構造的に底堅いと考えられます。年齢を理由に弱気になりすぎず、市場価値を確認する目的で登録するだけでも価値があります。
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
            レバテックキャリアはIT特化・高年収・首都圏寄りが強みです。求人数の網羅性や全国対応、40代の幅を補うなら総合型の併用が有効です。具体的な比較は以下の記事で詳しく解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/compare/levtech-vs-geekly/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテック vs Geekly の比較 →
            </Link>
            <Link href="/compare/levtech-vs-doda/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテック vs doda の比較 →
            </Link>
            <Link href="/compare/bizreach-vs-levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ vs レバテック の比較 →
            </Link>
            <Link href="/compare/30s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              30代エンジニア向けエージェント比較 →
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
          <h2 className="text-xl font-bold mb-3">レバテックキャリアに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、あなたの市場価値を確認してみませんか？
          </p>
          <a href="https://career.levtech.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
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
