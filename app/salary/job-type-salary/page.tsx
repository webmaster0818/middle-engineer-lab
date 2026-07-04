import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ITエンジニア職種別 年収ランキング【2026年・公表値準拠】PM・データサイエンティスト・SEまで比較";
const PAGE_DESC =
  "ITエンジニアの職種別の平均年収を、doda平均年収ランキング2025と求人ボックス給料ナビ（2026年6月時点）の公表値だけで比較。プロジェクトマネージャー・データサイエンティスト・インフラ・フロントエンド・SE/PGなど、職種で年収がどう変わるかが出典付きでわかる年収データベースです。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// doda「平均年収ランキング2025」技術系（IT/通信）。対象期間2024年9月〜2025年8月末。
// 出典: パーソルキャリア doda https://doda.jp/guide/heikin/syokusyu/ / プレスリリース2025-12-01
const dodaRows = [
  { job: "プロジェクトマネジャー", salary: 707 },
  { job: "セキュリティコンサルタント／アナリスト", salary: 649 },
  { job: "プリセールス", salary: 642 },
  { job: "IT戦略／システム企画", salary: 614 },
  { job: "ITコンサルタント", salary: 601 },
  { job: "研究開発", salary: 587 },
  { job: "データサイエンティスト", salary: 539 },
  { job: "セキュリティエンジニア", salary: 497 },
  { job: "システム開発／運用", salary: 489 },
  { job: "サーバーエンジニア", salary: 469 },
  { job: "ネットワークエンジニア", salary: 455 },
  { job: "SE／プログラマ", salary: 435 },
];

// 求人ボックス 給料ナビ（2026年6月時点・各ページ取得で確認）。出典: 求人ボックス 給料ナビ
const kyujinboxRows = [
  { job: "データサイエンティスト", avg: "553万円", range: "461〜1,291万円" },
  { job: "AIエンジニア（機械学習）", avg: "557万円", range: "394〜1,161万円" },
  { job: "ソフトウェアエンジニア", avg: "531万円", range: "379〜968万円" },
  { job: "セキュリティエンジニア", avg: "495万円", range: "378〜1,104万円" },
  { job: "システムエンジニア（SE）", avg: "493万円", range: "330〜997万円" },
  { job: "インフラエンジニア", avg: "477万円", range: "322〜967万円" },
  { job: "プログラマー（PG）", avg: "455万円", range: "350〜836万円" },
  { job: "データベースエンジニア", avg: "453万円", range: "401〜1,022万円" },
  { job: "Webエンジニア（バックエンド等）", avg: "447万円", range: "347〜995万円" },
  { job: "フロントエンドエンジニア", avg: "446万円", range: "336〜971万円" },
];

const faqs = [
  {
    q: "ITエンジニアで年収が高い職種はどれですか？",
    a: "doda「平均年収ランキング2025」の技術系（IT/通信）では、プロジェクトマネジャーが707万円で最も高く、次いでセキュリティコンサルタント／アナリスト649万円、プリセールス642万円と続きます。マネジメント・上流・セキュリティ系の職種が上位に来る傾向があります（対象期間2024年9月〜2025年8月末）。",
  },
  {
    q: "フロントエンドとバックエンドではどちらが年収が高いですか？",
    a: "求人ボックス給料ナビ（2026年6月時点）では、フロントエンドエンジニアが平均446万円、Webエンジニア（バックエンド等）が447万円とほぼ同水準です。職種名そのものより、扱う技術範囲・上流への関与・経験年数で差がつくのが実態です。",
  },
  {
    q: "データサイエンティストの年収はどれくらいですか？",
    a: "doda 2025では539万円、求人ボックス給料ナビ（2026年6月）では平均553万円・レンジ461〜1,291万円です。上限が1,000万円を超えており、スキル・実績次第で高年収を狙いやすい職種といえます。",
  },
  {
    q: "なぜソースによって職種の年収が違うのですか？",
    a: "調査主体・集計対象（求人票ベースか、転職決定者ベースか）・時点・職種の区分けが異なるためです。本ページではdoda（転職サービス登録者ベース・2024年9月〜2025年8月）と求人ボックス（求人票ベース・2026年6月時点）を分けて掲載しています。どちらか一方を絶対視せず、傾向の目安として見るのが実務的です。",
  },
];

export default function JobTypeSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/job-type-salary/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2024/2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/job-type-salary/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "職種別年収ランキング" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ITエンジニア 職種別 年収ランキング【2026年・公表値準拠】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          ITエンジニアは<strong>職種によって平均年収が大きく変わります</strong>。本ページでは、推計値や口コミ集計ではなく、<strong>doda「平均年収ランキング2025」</strong>と<strong>求人ボックス給料ナビ（2026年6月時点）</strong>の<strong>公表値だけ</strong>を使って、職種別の年収を比較します。「どの職種が高いのか」「自分の職種の相場はいくらか」を出典付きで確認できます。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["doda 平均年収ランキング2025（職種別）", "求人ボックス 給料ナビ（職種別）"]} />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜数値は各社の公表値です。調査主体・対象・時点が異なるため、ソースをまたいだ単純比較ではなく職種内の相場の目安としてご覧ください。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">① doda 平均年収ランキング2025（技術系 IT/通信）</h2>
          <p className="text-slate-600 text-sm mb-4">転職サービスdodaの登録者データに基づく職種別の平均年収です（対象期間：2024年9月〜2025年8月末）。技術系IT/通信の全体平均は469万円でした。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">順位</th>
                  <th className="p-2 border-b-2 border-slate-300">職種（doda区分）</th>
                  <th className="p-2 border-b-2 border-slate-300">平均年収</th>
                </tr>
              </thead>
              <tbody>
                {dodaRows.map((r, i) => (
                  <tr key={r.job} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2 font-bold text-slate-500">{i + 1}</td>
                    <td className="p-2">{r.job}</td>
                    <td className="p-2 font-bold text-slate-900">{r.salary}万円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：パーソルキャリア「doda 平均年収ランキング2025」（職種別／技術系IT・通信）。対象期間2024年9月〜2025年8月末、2025年12月発表。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">② 求人ボックス 給料ナビ（職種別・2026年6月時点）</h2>
          <p className="text-slate-600 text-sm mb-4">求人票ベースで集計される求人ボックス給料ナビの職種別平均年収と給与レンジです。レンジ上限が1,000万円を超える職種は、スキル次第で高年収を狙える幅があることを示します。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">職種</th>
                  <th className="p-2 border-b-2 border-slate-300">平均年収</th>
                  <th className="p-2 border-b-2 border-slate-300">年収レンジ</th>
                </tr>
              </thead>
              <tbody>
                {kyujinboxRows.map((r) => (
                  <tr key={r.job} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2">{r.job}</td>
                    <td className="p-2 font-bold text-slate-900">{r.avg}</td>
                    <td className="p-2 text-slate-600">{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：求人ボックス 給料ナビ（各職種ページ、2026年6月時点で取得）。求人ボックスの数値は毎月更新されるため、最新値は各ページでご確認ください。バックエンドは「Webエンジニア」「ソフトウェアエンジニア」、機械学習は「AIエンジニア」の区分で掲載しています。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">データの読み方（3つの注意点）</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>上流・マネジメント・セキュリティが高い</strong>：doda 2025ではPM（707万）やセキュリティコンサル（649万）が上位。コードを書く職種から上流・管理・専門特化へ広げると年収レンジが上がる傾向があります。</li>
            <li><strong>職種名より「経験・技術範囲」で決まる</strong>：フロントとバックエンドの平均はほぼ同水準（求人ボックスで446万/447万）。同じ職種でも担当範囲や経験年数で大きく差がつきます。</li>
            <li><strong>ソースをまたいで単純比較しない</strong>：dodaは転職サービス登録者ベース・求人ボックスは求人票ベースで、時点も区分も異なります。職種内の相場感を掴む目安として使ってください。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">公開データが確認できなかった職種</h2>
          <p className="text-slate-600 text-sm">
            <strong>フルスタックエンジニア／SRE・DevOpsエンジニア／データエンジニア／システムアーキテクト／組込み・制御エンジニア</strong>は、doda・求人ボックスに独立した公表区分がなく、信頼できる一次の公開平均値を確認できませんでした。本ページでは推測値での補完は行いません（近い職種＝フルスタック/バックエンドは「Webエンジニア」、機械学習は「AIエンジニア」、上流設計は「IT戦略/システム企画614万」などを目安にしてください）。確実な数値が必要な場合は各転職サービスの最新の職種別統計をご確認ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連データ・ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業別 年収ランキング43社</Link>
            <Link href="/salary/tech-stack-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">技術スタック×企業年収</Link>
            <Link href="/salary/age-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">年代別 年収・転職難易度</Link>
            <Link href="/cert/salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">資格別 想定年収・資格手当</Link>
            <Link href="/cert/compare/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">IT資格 比較一覧</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-lg p-4">
                <summary className="font-medium text-slate-800 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">自分の職種の想定年収を把握しよう</h2>
          <p className="text-blue-100 text-sm mb-4">同じ職種でも経験・技術範囲でレンジは大きく変わります。IT特化エージェントに相談して、自分の市場価値と狙える年収を把握しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
        {/* 一次データ相互リンク（2026-07-04 リンク完全性の是正） */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">当サイトの一次データ集（あわせて読む）</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5">
            <li><Link href="/salary/tech-stack-salary/" className="text-petrol-deep hover:underline">技術スタック×企業年収の相関データ【有報43社】</Link></li>
            <li><Link href="/cert/compare/" className="text-petrol-deep hover:underline">IT資格の受験料・合格率 比較一覧【32資格】</Link></li>
            <li><Link href="/salary/age-salary/" className="text-petrol-deep hover:underline">年代別エンジニア年収・転職難易度 早見表</Link></li>
            <li><Link href="/cert/salary/" className="text-petrol-deep hover:underline">資格別の想定年収・資格手当データ</Link></li>
            <li><Link href="/knowledge/retirement-allowance/" className="text-petrol-deep hover:underline">転職すると退職金はどうなる？（手続き解説）</Link></li>
            <li><Link href="/salary/industry-salary/" className="text-petrol-deep hover:underline">業界別エンジニア年収ランキング【有報】</Link></li>
          </ul>
        </section>

      </article>
    </>
  );
}
