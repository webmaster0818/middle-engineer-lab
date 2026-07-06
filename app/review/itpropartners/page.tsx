import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ITプロパートナーズの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "ITプロパートナーズの評判・口コミを30代40代エンジニア目線で検証。週2-3日・リモート案件の多さ、エンド直9割の単価、副業・独立準備への向き不向きをデータと出典付きで解説。レバテックフリーランスやMidworksとの使い分けも整理します。";
const URL = "/review/itpropartners/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/itpropartners/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み（週2-3日・リモート）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "sidejob", label: "副業・複業・独立準備での使い方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス3社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社Hajimari"],
  ["サービス種別", "フリーランス・副業案件紹介（週2-3日／リモートに強い）"],
  ["公開案件数", "約10,000件（二次情報・時点要確認）"],
  ["利用企業数", "2,000社以上（2024年7月時点・二次情報）"],
  ["登録者数", "90,000名以上（2024年7月時点・二次情報）"],
  ["少日数案件の比率", "週2〜3日など少日数案件が全体の3〜4割"],
  ["契約形態", "エンド直（直請け）が約9割"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "週2〜3日・リモート案件が業界トップクラス",
    body: "フリーランス系メディアやエンジニア向け口コミでは、週2〜3日やリモートで参画できる案件の多さを評価する傾向の声が見られる。少日数案件が全体の3〜4割という規模感は、本業や複数案件と並行したい層から支持されている。",
  },
  {
    title: "エンド直9割で単価が高めになりやすい",
    body: "エンド企業からの直請けが約9割で、中間マージンが抑えられ単価が高めになりやすいという傾向の声がフリーランス系プラットフォームで見られる。少日数でも単価効率を確保しやすい点が評価されている。",
  },
  {
    title: "起業・独立準備のフェーズに合う",
    body: "起業準備中・独立準備中のエンジニアが、週数日の案件で生活費を確保しながら自分の事業に時間を割けたという傾向の声が見られる。スタートアップ系の案件も扱う点が、準備フェーズと相性が良い。",
  },
];

const badReviews = [
  {
    title: "週5常駐フルタイム前提だと選択肢が他社より少ない",
    body: "少日数・リモートに強い反面、週5常駐でがっつり稼ぎたい場合は、案件数の多い大手と比べて選択肢が少なく感じたという傾向の声が見られる。",
    cope: "週5常駐で単価・案件量を最大化したい場合は、案件数最大手級のレバテックフリーランスを主軸にし、ITプロパートナーズは少日数・副業案件の補完として併用するのが現実的。",
  },
  {
    title: "正社員志向・安定重視には不向き",
    body: "業務委託・少日数が中心のため、安定した収入や福利厚生を最優先したい層には合わなかったという傾向の声がある。",
    cope: "収入の安定を重視するなら、報酬保障・福利厚生があるMidworksや、正社員転職のレバテックキャリア（/review/levtech/）を検討する。働き方の分散と安定はトレードオフになりやすい。",
  },
  {
    title: "実務経験が前提で未経験には厳しい",
    body: "案件は即戦力前提のため、実務経験が浅い場合は紹介される案件が限られたという傾向の声が見られる。",
    cope: "実務経験が浅いうちは無理に独立せず、まず正社員で経験を積む。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いている。",
  },
];

const fitYes = [
  "週2〜3日・リモートで柔軟に働きたい30代・40代",
  "副業・複業で本業と並行して収入を分散したい",
  "起業・独立の準備をしながら生活費を確保したい",
  "エンド直で単価効率を確保したい経験者",
  "スタートアップ系の案件にも関心がある",
];

const fitNo = [
  "週5常駐でがっつり稼ぎたい（→レバテックフリーランス）",
  "報酬保障・福利厚生で安定を取りたい（→Midworks）",
  "正社員雇用と昇進を望む（→正社員転職）",
  "IT実務未経験・経験が浅い",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望稼働日数・リモート可否・希望単価を入力。在職中・本業と並行したい人も登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。週何日稼働したいか、リモート希望か、副業・独立準備など目的を具体的に伝えると、少日数案件の提案精度が上がる。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "週2〜3日やリモート可の案件を中心に紹介を受け、応募する案件を決定。エンド直案件が中心で単価交渉もしやすい。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。稼働日数・リモート条件・業務範囲をすり合わせる。複業の場合は稼働可能時間も確認する。",
  },
  {
    step: "STEP5",
    title: "契約・参画・継続サポート",
    body: "条件合意後に業務委託契約を締結し参画。参画後も稼働日数の調整・次案件・複業の組み合わせについて相談を継続できる。",
  },
];

const faqs = [
  {
    q: "本当に週2〜3日の案件が見つかりますか？",
    a: "ITプロパートナーズは週2〜3日など少日数案件が全体の3〜4割を占めるとされ、リモート・少日数に強いのが最大の特徴です（二次情報）。ただし職種・スキル・時期により案件状況は変動するため、面談で希望稼働日数を明確に伝えて確認してください。",
  },
  {
    q: "副業として本業と並行できますか？",
    a: "週2〜3日・リモート案件が多いため、本業と並行する副業・複業の使い方に向いています。起業・独立準備中に生活費を確保しながら自分の事業に時間を割く、という使い方をする利用者の傾向の声も見られます。なお本業の就業規則で副業可否を必ず確認してください。",
  },
  {
    q: "週5でがっつり働きたい場合は向いていますか？",
    a: "週5常駐フルタイムで単価・案件量を最大化したい場合は、案件数最大手級のレバテックフリーランスの方が選択肢が多い傾向です。ITプロパートナーズは少日数・副業・リモート軸での強みが大きいため、目的に応じて使い分けるか併用するのがおすすめです。",
  },
  {
    q: "単価は高いですか？",
    a: "エンド直（直請け）が約9割で、中間マージンが抑えられ単価が高めになりやすいという傾向の声があります（二次情報）。少日数でも単価効率を確保しやすい点が評価されています。具体的な単価はスキル・案件によるため面談で確認してください。",
  },
  {
    q: "未経験でも使えますか？",
    a: "案件は即戦力前提のため、実務経験が浅い場合は紹介が限られます。経験が浅い方はまず正社員で経験を積むのが現実的で、安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
  {
    q: "独立がうまくいかなかったら正社員に戻れますか？",
    a: "副業・複業で段階的に独立を準備し、合わなければ正社員に戻るルートもあります。考え方は/career/freelance-to-permanent/や/knowledge/freelance-vs-fulltime/で整理しています。少日数から始められるITプロパートナーズは、独立を試しながら準備するフェーズに適しています。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（単価・案件量）", href: "/review/levtech-freelance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "安定雇用ならレバテックキャリア", href: "/review/levtech/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスと正社員どちらが得か", href: "/knowledge/freelance-vs-fulltime/" },
];

export default function ItproPartnersReview() {
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
          { name: "ITプロパートナーズ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITプロパートナーズの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 週2-3日・リモートに強いフリーランス支援を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ITプロパートナーズは、<span className="font-bold">週2〜3日・リモート案件</span>に強いフリーランス・副業向けの案件紹介サービスです。本記事では評判・口コミを実際の口コミプラットフォームの傾向と、各社が公表する数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ITプロパートナーズ公式系の公表値",
            "フリーランス系メディア集計値",
            "エンジニア向け口コミプラットフォーム",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：週2-3日・副業・独立準備のミドルに最適</span>。一言でいえば「本業と並行したい、あるいは独立準備のために柔軟に働きたい経験者」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・週2〜3日など少日数案件が全体の3〜4割で、リモート・少日数は業界トップクラス。</li>
              <li>・エンド直9割で単価が高めになりやすく、少日数でも単価効率を確保しやすい。</li>
              <li>・一方で週5常駐ならレバテックフリーランス、安定保障ならMidworks、安定雇用ならレバテックキャリアへ。</li>
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
            ※案件数・登録者数・企業数は時期により変動する二次情報です（多くが2024年7月時点）。少日数案件3〜4割・エンド直約9割も二次情報に基づきます。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITプロパートナーズの特徴・強み（週2-3日・リモート）</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 週2〜3日・リモート案件の多さが業界トップクラス</h3>
              <p className="text-sm text-petrol-deep">
                少日数案件が全体の3〜4割を占めるとされ、リモート可案件も豊富です。週5常駐が前提になりがちなフリーランス市場の中で、柔軟な働き方を選べる点が最大の差別化ポイントです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. エンド直9割で単価が高め</h3>
              <p className="text-sm text-petrol-deep">
                エンド企業からの直請けが約9割で、中間マージンが抑えられ単価が高めになりやすい構造です。少日数でも単価効率を確保しやすく、時間あたりの収入を重視する働き方に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 起業・独立準備フェーズと相性が良い</h3>
              <p className="text-sm text-petrol-deep">
                スタートアップ系の案件も扱い、週数日の案件で生活費を確保しながら自分の事業や学習に時間を割く、という使い方ができます。独立を一気に決めずに段階的に準備したい層に適しています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 副業・複業で収入を分散できる</h3>
              <p className="text-sm text-petrol-deep">
                本業を持ちながら週数日の案件を組み合わせることで、収入源を分散できます。1社依存のリスクを下げたいミドル層にとって、ポートフォリオ的な働き方の入り口になります。
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

        {/* 副業・独立準備 */}
        <section id="sidejob" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業・複業・独立準備での使い方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ITプロパートナーズの本質的な価値は、「いきなり完全独立せず、段階的に試せる」ことにあります。週2〜3日・リモートの案件が多いため、次の3つの使い方が現実的です。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold text-slate-700">副業として併走：</span>
                正社員を続けながら週数日の案件で副収入を得て、フリーランスの実態（単価・業務範囲・契約）を体感する。本業の就業規則で副業可否を必ず確認する。
              </li>
              <li>
                <span className="font-bold text-slate-700">独立準備の生活費確保：</span>
                起業・自分の事業に時間を割きたい時期に、週数日の案件で生活費を確保する。スタートアップ系案件も扱うため、準備フェーズの環境に近い。
              </li>
              <li>
                <span className="font-bold text-slate-700">収入源の分散：</span>
                複数の少日数案件を組み合わせ、1社依存のリスクを下げる。1案件が終了しても収入がゼロにならない構成を作れる。
              </li>
            </ul>
            <p>
              この「試しながら準備する」アプローチは、家族やローンを抱える30代・40代がリスクを抑えて独立を検討するうえで合理的です。合わなければ正社員に戻る選択肢も残せます（
              <Link href="/career/freelance-to-permanent/" className="text-petrol hover:underline">フリーランスから正社員に戻るキャリア</Link>
              ）。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、ITプロパートナーズを「独立準備中の慎重派ミドル」に最も適したサービスと位置づけています。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが評価され始め、副業・複業で市場価値を試しやすい年代です。いきなり完全独立せず、本業を続けながら週数日の案件で「自分の単価」を確認し、手応えがあれば単価重視のレバテックフリーランスへ広げる、という二段構えが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              家族やローンの負担が大きく、収入を一本に絞るリスクを取りにくい年代です。少日数案件で収入を分散し、本業や複数案件を並走させることで、安定とチャレンジのバランスを取れます。マネジメント・設計など専門性の高い領域は、少日数でも高単価を得やすい傾向です。
            </p>
            <p>
              なお、安定や福利厚生を最優先するなら保障型の
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              、そもそも安定した正社員雇用を希望するなら正社員転職の
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              に相談するのが近道です。フリーランスと正社員のどちらが自分に合うかは
              <Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスと正社員の比較</Link>
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
            フリーランスエージェントは「何を最大化したいか」で選ぶと失敗しにくいです。当サイトでレビューしている3社は、それぞれ強みが住み分けられています。ITプロパートナーズは週2-3日・副業・独立準備向けです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["ITプロパートナーズ（本記事）", "週2〜3日・副業から独立準備したい人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。最大手級。"],
                  ["Midworks", "正社員並みの保障で安定して独立したい慎重派。"],
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
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（単価・案件量）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
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
          <h2 className="text-xl font-bold mb-3">ITプロパートナーズに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料相談で、週2〜3日・リモートで参画できる案件を確認してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料相談を予約する
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
