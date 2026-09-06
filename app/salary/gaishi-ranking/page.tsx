import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "外資ITエンジニア年収ランキング【2026年9月実測】levels.fyi日本拠点データ横断比較";
const DESCRIPTION =
  "外資ITエンジニアの日本拠点年収をlevels.fyiの投稿集計から実測してランキング化(2026年9月6日取得・円換算)。Google中央値2,558万円・Indeed 2,433万円・Apple 2,386万円・Microsoft 1,790万円・Amazon 1,480万円。レベル別(L4/L5等)の総報酬とサンプル数まで transparent に掲載します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/gaishi-ranking/" },
  title: TITLE,
  description: DESCRIPTION,
};

const SURVEYED = "2026年9月6日";

const mains = [
  { rank: 1, slug: "google", name: "Google Japan", median: 2558, p10: 1390, p90: 4114, n: 48, levels: "L3 約1,593万／L4 約2,340万／L5 約3,177万／L6 約4,019万" },
  { rank: 2, slug: null, name: "Indeed Japan", median: 2433, p10: 1556, p90: 3388, n: 45, levels: "IC1相当 約1,425万／IC2相当 約2,214万（上位レベル 約3,008万）" },
  { rank: 3, slug: "apple", name: "Apple Japan", median: 2386, p10: 548, p90: 3613, n: 9, levels: "ICT2 約864万／ICT3 約1,906万／ICT4 約3,166万" },
  { rank: 4, slug: "microsoft", name: "Microsoft Japan", median: 1790, p10: 1198, p90: 2721, n: 13, levels: "Lv61 約1,259万／62 約1,872万／63 約1,990万／64 約2,594万" },
  { rank: 5, slug: "amazon", name: "Amazon / AWS Japan", median: 1480, p10: 607, p90: 2556, n: 37, levels: "L4 約1,267万／L5 約1,939万／L6 約2,295万" },
];

const refs = [
  { name: "Salesforce Japan", median: 1999 },
  { name: "NVIDIA Japan", median: 1570 },
  { name: "日本オラクル", median: 1181, slug: "oracle-japan" },
];

const faqs = [
  {
    q: "外資ITで日本拠点の年収が一番高いのはどこですか？",
    a: `当サイトがlevels.fyi（ユーザー投稿集計）の日本拠点ソフトウェアエンジニアデータを実測した範囲（${SURVEYED}取得・円換算）では、Google Japanが総報酬中央値 約2,558万円（サンプル48件）でトップです。次いでIndeed 約2,433万円（45件）、Apple 約2,386万円（9件）。ただしいずれも投稿ベースの集計値で、サンプル構成により変動します。`,
  },
  {
    q: "この年収は基本給ですか？",
    a: "いいえ、総報酬（Total Compensation）です。外資ITの報酬は「基本給＋株式報酬（RSU）＋賞与」の合計で構成され、特に上位レベルほど株式の比重が大きくなります。日本企業の有報平均年収（現金給与ベース）と単純比較すると外資が過大に見えるため、構成の違いに注意してください。",
  },
  {
    q: "有価証券報告書の年収ランキングとの違いは何ですか？",
    a: "国内企業は有報で平均年間給与を公表しますが、外資日本法人の多くは有報がなく公式の平均年収が存在しません。そこで当ページはlevels.fyiの投稿集計を出典・取得日・サンプル数つきで転記しています。国内IT57社の有報準拠ランキングは別ページで公開しており、出典の性質が異なる2つの表として使い分けてください。",
  },
  {
    q: "MetaやStripeなど他の外資は載せないのですか？",
    a: `掲載しない理由はデータがないためです。${SURVEYED}時点のlevels.fyiでは、Meta・SAP・Cisco・Adobe・Datadog・Stripe・Elasticの日本拠点ソフトウェアエンジニア集計は表示されませんでした（投稿不足）。推計で埋めることはせず、実測できた企業のみ掲載しています。`,
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function GaishiRankingPage() {
  return (
    <>
      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        url="/salary/gaishi-ranking/"
        datePublished="2026-09-06"
        dateModified="2026-09-06"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumb
        items={[
          { name: "年収ガイド", href: "/salary/" },
          { name: "外資ITエンジニア年収ランキング【実測】" },
        ]}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
          外資ITエンジニア年収ランキング【2026年9月実測・日本拠点】
        </h1>
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】外資ITの日本拠点エンジニア年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: levels.fyiの日本拠点ソフトウェアエンジニア集計（{SURVEYED}に当サイト実測・円換算）では、総報酬の中央値はGoogle 約2,558万円＞Indeed 約2,433万円＞Apple 約2,386万円＞Microsoft 約1,790万円＞Amazon 約1,480万円です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
            <li>・金額は基本給＋株式（RSU）＋賞与の<strong>総報酬</strong>。国内企業の有報平均年収（現金ベース）とは性質が異なります</li>
            <li>・全て投稿集計値でサンプル数を併記。サンプルが少ない企業は参考値として分離しています</li>
            <li>・円換算は取得時レート（1ドル=157.03円）。為替・株価で変動します</li>
          </ul>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          外資IT日本法人の多くは有価証券報告書がなく「公式の平均年収」が存在しません。
          当ページは報酬集計サイトlevels.fyiの日本拠点データを当サイトが同一日に横断実測し、
          <strong>中央値・レンジ・レベル別・サンプル数</strong>まで透明に掲載する実測ランキングです（毎月の定点更新枠）。
        </p>
        <DataNote
          surveyedAt={SURVEYED}
          sources={["levels.fyi（各社 Software Engineer・日本拠点・ユーザー投稿集計・円換算はサイト表示レート1ドル=157.03円）"]}
        />
        <p className="text-xs text-slate-500 mb-2">
          ※総報酬（Total Compensation）＝基本給＋株式＋賞与。投稿ベースの集計値であり、実際のオファーはレベル・経験・交渉で大きく変わります。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">実測ランキング（サンプル数つき）</h2>
        <div className="overflow-x-auto mt-2 mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-2 border-b-2 border-slate-300">順位</th>
                <th className="p-2 border-b-2 border-slate-300">企業</th>
                <th className="p-2 border-b-2 border-slate-300">総報酬 中央値</th>
                <th className="p-2 border-b-2 border-slate-300">レンジ(p10〜p90)</th>
                <th className="p-2 border-b-2 border-slate-300">件数</th>
                <th className="p-2 border-b-2 border-slate-300">レベル別 中央値</th>
              </tr>
            </thead>
            <tbody>
              {mains.map((c) => (
                <tr key={c.name} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-2 font-bold text-slate-500">{c.rank}</td>
                  <td className="p-2">
                    {c.slug ? (
                      <Link href={`/company/${c.slug}/`} className="font-bold text-petrol-deep hover:underline">{c.name}</Link>
                    ) : (
                      <span className="font-bold text-slate-800">{c.name}</span>
                    )}
                  </td>
                  <td className="p-2 font-bold text-slate-900">約{c.median.toLocaleString()}万円</td>
                  <td className="p-2 text-slate-600">約{c.p10.toLocaleString()}万〜{c.p90.toLocaleString()}万円</td>
                  <td className="p-2 text-slate-500">{c.n}件</td>
                  <td className="p-2 text-slate-600 text-xs">{c.levels}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">参考値（サンプル極小のため順位外）</h2>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          以下は{SURVEYED}時点で中央値の表示はあるものの、集計に使えるサンプル一覧が確認できなかった企業です。単一投稿ベースの可能性が高いため、順位を付けず参考値として分離しています。
        </p>
        <ul className="text-sm leading-7 text-slate-700 mb-8 list-disc pl-5">
          {refs.map((c) => (
            <li key={c.name}>
              {c.slug ? <Link href={`/company/${c.slug}/`} className="font-bold text-petrol-deep hover:underline">{c.name}</Link> : <strong>{c.name}</strong>}
              ：総報酬 中央値表示 約{c.median.toLocaleString()}万円
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 mb-8">
          ※Meta・SAP・Cisco・Adobe・Datadog・Stripe・Elasticは{SURVEYED}時点で日本拠点のソフトウェアエンジニア集計が表示されず（投稿不足）、掲載していません。推計での補完は行いません。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">読み方の注意——「総報酬」と「平均年収」は別物</h2>
        <p className="text-sm leading-7 text-slate-700 mb-4">
          外資の総報酬は株式（RSU）込みです。例えばAmazonのRSUは1年目5%・2年目15%・3〜4年目40%ずつのバックロード型で、
          <strong>入社初年度の現金収入は表の中央値より小さくなるのが普通</strong>です。
          また投稿集計は高報酬層に偏りやすく、同じ会社でも月により中央値が動きます（Amazonは7月約1,679万→9月約1,480万と3ヶ月で下方修正）。
          国内ITの有報準拠ランキング（<Link href="/salary/company-ranking/" className="text-petrol-deep font-bold hover:underline">57社版はこちら</Link>）と併読して、出典の性質ごと理解するのが実務的です。
        </p>

        <h2 className="text-xl font-bold text-slate-900 mt-8 mb-3">よくある質問</h2>
        <div className="space-y-3 mb-10">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white">
              <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-slate-800">{f.q}</summary>
              <p className="px-4 pb-4 text-sm leading-7 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="text-base font-bold text-slate-900 mb-2">あわせて読む</h2>
          <ul className="text-sm leading-7 text-petrol-deep">
            <li><Link href="/company/amazon/" className="hover:underline">→ Amazon／AWSジャパン転職ガイド（レベル別年収・OLP面接）</Link></li>
            <li><Link href="/company/google/" className="hover:underline">→ Google Japan転職ガイド</Link></li>
            <li><Link href="/company/microsoft/" className="hover:underline">→ Microsoft Japan転職ガイド</Link></li>
            <li><Link href="/salary/company-ranking/" className="hover:underline">→ 国内IT企業の平均年収ランキング57社【有報準拠】</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}
