import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "IT企業の平均年収ランキング43社【2026年・有価証券報告書準拠】エンジニア転職の給与データベース";
const DESCRIPTION =
  "IT・テック企業43社の平均年収を有価証券報告書（有報）の公表値だけでランキング化。キーエンス2,039万円から各社の最新有報数値と決算期を一覧掲載し、各社のエンジニア転職ガイドへリンク。出典が明確な年収データベースです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const companies = [
  { rank: 1, slug: "keyence", name: "キーエンス", salary: 2039, period: "2025年3月期・全従業員平均" },
  { rank: 2, slug: "tokyo-electron", name: "東京エレクトロン", salary: 1354, period: "2025年3月期・全従業員平均" },
  { rank: 3, slug: "bandai-namco", name: "バンダイナムコ", salary: 1216, period: "2025年3月期" },
  { rank: 4, slug: "mercari", name: "メルカリ", salary: 1176, period: "2025年6月期・全社員平均" },
  { rank: 5, slug: "recruit", name: "リクルート", salary: 1145, period: "直近有報" },
  { rank: 6, slug: "fujifilm", name: "富士フイルム", salary: 1124, period: "2025年3月期・HD単体全従業員平均" },
  { rank: 7, slug: "sony", name: "ソニーグループ", salary: 1118, period: "2025年3月期" },
  { rank: 8, slug: "ntt", name: "NTT（日本電信電話）", salary: 1069, period: "2025年3月期" },
  { rank: 9, slug: "kddi", name: "KDDI", salary: 1018, period: "2025年3月期・全社員平均" },
  { rank: 10, slug: "toyota", name: "トヨタ自動車", salary: 983, period: "2025年3月期" },
  { rank: 11, slug: "nintendo", name: "任天堂", salary: 966, period: "2025年3月期" },
  { rank: 12, slug: "nec", name: "NEC", salary: 963, period: "2025年3月期・単体全従業員" },
  { rank: 13, slug: "hitachi", name: "日立製作所", salary: 961, period: "2025年3月期" },
  { rank: 14, slug: "panasonic", name: "パナソニック", salary: 956, period: "2025年3月期・HD" },
  { rank: 15, slug: "plaid", name: "プレイド", salary: 939, period: "直近有報" },
  { rank: 16, slug: "capcom", name: "カプコン", salary: 918, period: "2025年3月期・単体全社員平均" },
  { rank: 17, slug: "kadokawa", name: "KADOKAWA", salary: 885, period: "2025年3月期・単体" },
  { rank: 18, slug: "line-yahoo", name: "LINEヤフー", salary: 884, period: "2025年3月期" },
  { rank: 19, slug: "gree", name: "グリー（GREE）", salary: 865, period: "2025年6月期・持株会社単体" },
  { rank: 20, slug: "denso", name: "デンソー", salary: 863, period: "2025年3月期・全従業員平均" },
  { rank: 21, slug: "visional", name: "ビジョナル/ビズリーチ", salary: 861, period: "直近有報" },
  { rank: 22, slug: "ricoh", name: "リコー", salary: 860, period: "2025年3月期・全社員平均" },
  { rank: 23, slug: "softbank", name: "ソフトバンク", salary: 849, period: "2025年3月期" },
  { rank: 24, slug: "omron", name: "オムロン", salary: 820, period: "2025年3月期・全従業員平均" },
  { rank: 25, slug: "rakuten", name: "楽天グループ", salary: 820, period: "2024年12月期・全社員平均" },
  { rank: 26, slug: "renesas", name: "ルネサスエレクトロニクス", salary: 809, period: "2024年12月期・全従業員平均" },
  { rank: 27, slug: "murata", name: "村田製作所", salary: 803, period: "2025年3月期・全従業員平均" },
  { rank: 28, slug: "mixi", name: "MIXI（ミクシィ）", salary: 791, period: "2025年3月期・単体" },
  { rank: 29, slug: "sansan", name: "Sansan", salary: 780, period: "2025年5月期" },
  { rank: 30, slug: "note", name: "note（ノート）", salary: 763, period: "2025年11月期・全社員平均" },
  { rank: 31, slug: "gungho", name: "ガンホー", salary: 750, period: "2024年12月期・単体全社員平均" },
  { rank: 32, slug: "raksul", name: "ラクスル（RAKSUL）", salary: 742, period: "2025年7月期・全社員平均" },
  { rank: 33, slug: "moneyforward", name: "マネーフォワード", salary: 723, period: "2025年11月期" },
  { rank: 34, slug: "apple", name: "Apple Japan", salary: 700, period: "直近有報" },
  { rank: 35, slug: "base", name: "BASE", salary: 700, period: "2024年12月期" },
  { rank: 36, slug: "gmo-internet", name: "GMOインターネットグループ", salary: 693, period: "2024年12月期・持株会社単体" },
  { rank: 37, slug: "kyocera", name: "京セラ", salary: 693, period: "2025年3月期・全従業員平均" },
  { rank: 38, slug: "kaonavi", name: "カオナビ", salary: 690, period: "2025年3月期・全社員平均" },
  { rank: 39, slug: "freee", name: "freee", salary: 688, period: "2025年6月期" },
  { rank: 40, slug: "colopl", name: "コロプラ", salary: 681, period: "2025年9月期・単体" },
  { rank: 41, slug: "wantedly-inc", name: "ウォンテッドリー（Wantedly）", salary: 681, period: "直近有報" },
  { rank: 42, slug: "zozo", name: "ZOZO", salary: 656, period: "2025年3月期・全社員平均" },
  { rank: 43, slug: "timee", name: "タイミー（Timee）", salary: 594, period: "2024年10月期・全社員平均" }
];

export default function CompanySalaryRankingPage() {
  return (
    <>
      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        url="/salary/company-ranking/"
        datePublished="2026-06-12"
        dateModified="2026-06-12"
      />
      <Breadcrumb
        items={[
          { name: "年収ガイド", href: "/salary/" },
          { name: "IT企業 平均年収ランキング【有報準拠】" },
        ]}
      />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
          IT企業の平均年収ランキング43社【2026年・有報準拠】
        </h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          当サイトに掲載しているIT・テック企業のうち、有価証券報告書（有報）で平均年間給与を公表している43社をランキング化しました。
          推計値や口コミ集計ではなく、<strong>各社が金融庁に提出した有報の公表値のみ</strong>を採用しています（決算期を併記）。
          社名をクリックすると、技術スタック・選考・エンジニア職の給与レンジまで掘り下げた各社の転職ガイドに移動できます。
        </p>
        <DataNote
          surveyedAt="2026年6月12日"
          sources={["各社 有価証券報告書（平均年間給与・全従業員平均）"]}
        />
        <p className="text-xs text-slate-500 mb-2">
          ※有報の平均年間給与は全従業員平均であり、エンジニア職単体の平均ではありません。持株会社はHD単体の数値です。決算期は表内に併記しています。
        </p>
        <div className="overflow-x-auto mt-6 mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-2 border-b-2 border-slate-300">順位</th>
                <th className="p-2 border-b-2 border-slate-300">企業</th>
                <th className="p-2 border-b-2 border-slate-300">平均年収（有報）</th>
                <th className="p-2 border-b-2 border-slate-300">対象期</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => (
                <tr key={c.slug} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-2 font-bold text-slate-500">{c.rank}</td>
                  <td className="p-2">
                    <Link href={`/company/${c.slug}/`} className="font-bold text-petrol-deep hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="p-2 font-bold text-slate-900">{c.salary.toLocaleString()}万円</td>
                  <td className="p-2 text-slate-500">{c.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-3">このランキングの読み方（3つの注意点）</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 mb-8">
          <li>
            <strong>全従業員平均である</strong>：有報の平均年間給与は管理部門や工場勤務者等も含む全社平均です。エンジニア職の実際のオファーレンジは各社ガイド内の職種別データをご覧ください。
          </li>
          <li>
            <strong>平均年齢・残業時間が異なる</strong>：平均年齢が高い企業ほど平均年収は高く出る傾向があります。単純な横並び比較ではなく「同じ会社の経年変化」も合わせて見るのが実務的です。
          </li>
          <li>
            <strong>非上場企業は載っていない</strong>：Google日本法人・AWSジャパン・スタートアップ各社など有報のない企業はこの表に含まれません（各社ガイドでは公表レンジ・水準感を解説しています）。
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 mb-3">年収帯から探す</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["600man", "700man", "800man", "900man", "1000man", "1200man", "1500man", "2000man"].map((band) => (
            <Link
              key={band}
              href={`/salary/${band}/`}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
            >
              年収{band.replace("man", "")}万円
            </Link>
          ))}
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">関連ガイド</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/salary/job-type-salary/" className="text-petrol-deep hover:underline">職種別 年収ランキング（PM・データサイエンティスト・SE…）</Link></li>
            <li><Link href="/salary/age-salary/" className="text-petrol-deep hover:underline">年代別 年収・転職難易度 早見表</Link></li>
            <li><Link href="/salary/tech-stack-salary/" className="text-petrol-deep hover:underline">技術スタック×企業年収 相関データ（使用言語から逆引き）</Link></li>
            <li><Link href="/salary/" className="text-petrol-deep hover:underline">エンジニアが年収を上げる転職｜ITSSレベル×年収の地図</Link></li>
            <li><Link href="/knowledge/salary-30s/" className="text-petrol-deep hover:underline">30代エンジニアの年収相場</Link></li>
            <li><Link href="/company/" className="text-petrol-deep hover:underline">企業別エンジニア転職ガイド一覧</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}
