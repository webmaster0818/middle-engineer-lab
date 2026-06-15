import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プログラミング言語別の平均年収ランキング【2026年・出典付き】レバテック/求人ボックス公表データ";
const DESCRIPTION =
  "プログラミング言語・IT職種別の平均年収を、レバテックキャリア収入統計（正社員・2025年1月時点）と求人ボックス給料ナビ（2026年5月）の公表データで整理。出典・調査時点つきで、TypeScript・Go・Scalaなど言語別、データサイエンティスト等の職種別を一覧化しています。";

export const metadata: Metadata = { title: TITLE, description: DESCRIPTION };

export default function SkillSalaryRankingPage() {
  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/skill-ranking/" datePublished="2026-06-15" dateModified="2026-06-15" />
      <Breadcrumb items={[{ name: "年収ガイド", href: "/salary/" }, { name: "言語・スキル別年収ランキング" }]} />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">プログラミング言語別の平均年収ランキング【出典付き】</h1>
        <p className="text-slate-600 mb-6 leading-relaxed">
          言語・スキル別の年収は、調査会社によって集計条件（正社員かフリーランスか、平均か中央値か、調査時点）が大きく異なります。当ページでは<strong>「同じ調査の中で横断比較できる」公表データ</strong>のみを、出典・時点つきで整理しました。ソースをまたいだ単純比較はできない点にご注意ください。各言語名はスキル別の転職ガイドにリンクしています。
        </p>
        <DataNote surveyedAt="2026年6月15日" sources={["レバテックキャリア 収入統計（2025年1月時点）", "求人ボックス 給料ナビ（2026年5月7日更新）"]} />

        <h2 className="text-xl font-bold text-slate-900 mb-2 mt-8">言語別 平均年収（レバテックキャリア・正社員）</h2>
        <p className="text-sm text-slate-500 mb-3">出典: レバテックキャリア 収入統計（掲載求人ベース・2025年1月時点）。平均年収・中央値を同一基準で比較できます。</p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-slate-100 text-left"><th className="p-2 border-b-2 border-slate-300">順位</th><th className="p-2 border-b-2 border-slate-300">言語</th><th className="p-2 border-b-2 border-slate-300">平均年収</th><th className="p-2 border-b-2 border-slate-300">中央値</th></tr></thead>
            <tbody><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">1</td><td className="p-2"><a href="/skill/typescript/" className="text-blue-700 hover:underline">TypeScript</a></td><td className="p-2 font-bold text-slate-900">539万円</td><td className="p-2 text-slate-600">550万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">2</td><td className="p-2"><a href="/skill/go/" className="text-blue-700 hover:underline">Go</a></td><td className="p-2 font-bold text-slate-900">527万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">3</td><td className="p-2"><a href="/skill/scala/" className="text-blue-700 hover:underline">Scala</a></td><td className="p-2 font-bold text-slate-900">518万円</td><td className="p-2 text-slate-600">550万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">4</td><td className="p-2"><a href="/skill/kotlin/" className="text-blue-700 hover:underline">Kotlin</a></td><td className="p-2 font-bold text-slate-900">512万円</td><td className="p-2 text-slate-600">550万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">5</td><td className="p-2"><a href="/skill/python/" className="text-blue-700 hover:underline">Python</a></td><td className="p-2 font-bold text-slate-900">500万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">6</td><td className="p-2"><a href="/skill/ruby/" className="text-blue-700 hover:underline">Ruby</a></td><td className="p-2 font-bold text-slate-900">495万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">7</td><td className="p-2"><a href="/skill/swift/" className="text-blue-700 hover:underline">Swift</a></td><td className="p-2 font-bold text-slate-900">490万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">8</td><td className="p-2">JavaScript</td><td className="p-2 font-bold text-slate-900">480万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">9</td><td className="p-2"><a href="/skill/java/" className="text-blue-700 hover:underline">Java</a></td><td className="p-2 font-bold text-slate-900">471万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">10</td><td className="p-2"><a href="/skill/php/" className="text-blue-700 hover:underline">PHP</a></td><td className="p-2 font-bold text-slate-900">464万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">11</td><td className="p-2"><a href="/skill/csharp/" className="text-blue-700 hover:underline">C#</a></td><td className="p-2 font-bold text-slate-900">451万円</td><td className="p-2 text-slate-600">450万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">12</td><td className="p-2"><a href="/skill/cpp/" className="text-blue-700 hover:underline">C++</a></td><td className="p-2 font-bold text-slate-900">446万円</td><td className="p-2 text-slate-600">450万円</td></tr></tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-2">職種別 平均年収（レバテックキャリア・正社員）</h2>
        <p className="text-sm text-slate-500 mb-3">出典: レバテックキャリア 収入統計（2025年1月時点）。上の言語別と同一基準のため、言語と職種を並べて比較できます。</p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-slate-100 text-left"><th className="p-2 border-b-2 border-slate-300">職種</th><th className="p-2 border-b-2 border-slate-300">平均年収</th><th className="p-2 border-b-2 border-slate-300">中央値</th></tr></thead>
            <tbody><tr className="border-b border-slate-200"><td className="p-2"><a href="/skill/data-scientist/" className="text-blue-700 hover:underline">データサイエンティスト</a></td><td className="p-2 font-bold text-slate-900">526万円</td><td className="p-2 text-slate-600">550万円</td></tr><tr className="border-b border-slate-200"><td className="p-2"><a href="/skill/security/" className="text-blue-700 hover:underline">セキュリティエンジニア</a></td><td className="p-2 font-bold text-slate-900">511万円</td><td className="p-2 text-slate-600">550万円</td></tr><tr className="border-b border-slate-200"><td className="p-2"><a href="/skill/infrastructure/" className="text-blue-700 hover:underline">インフラエンジニア</a></td><td className="p-2 font-bold text-slate-900">443万円</td><td className="p-2 text-slate-600">450万円</td></tr></tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-2">職種別 平均年収（求人ボックス・別ソース）</h2>
        <p className="text-sm text-slate-500 mb-3">出典: 求人ボックス 給料ナビ（求人票ベース・2026年5月7日更新）。上のレバテックとは集計元が違うため、<strong>この表内でのみ</strong>比較してください。SAPや機械学習などレバテックに無い職種を補完します。</p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="bg-slate-100 text-left"><th className="p-2 border-b-2 border-slate-300">順位</th><th className="p-2 border-b-2 border-slate-300">職種</th><th className="p-2 border-b-2 border-slate-300">平均年収</th></tr></thead>
            <tbody><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">1</td><td className="p-2"><a href="/skill/data-scientist/" className="text-blue-700 hover:underline">データサイエンティスト</a></td><td className="p-2 font-bold text-slate-900">598万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">2</td><td className="p-2"><a href="/skill/sap/" className="text-blue-700 hover:underline">SAP</a></td><td className="p-2 font-bold text-slate-900">597万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">3</td><td className="p-2"><a href="/skill/ai-ml/" className="text-blue-700 hover:underline">機械学習エンジニア(AI)</a></td><td className="p-2 font-bold text-slate-900">569万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">4</td><td className="p-2"><a href="/skill/swift/" className="text-blue-700 hover:underline">モバイルエンジニア</a></td><td className="p-2 font-bold text-slate-900">549万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">5</td><td className="p-2"><a href="/skill/security/" className="text-blue-700 hover:underline">セキュリティエンジニア</a></td><td className="p-2 font-bold text-slate-900">496万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">6</td><td className="p-2"><a href="/skill/aws/" className="text-blue-700 hover:underline">クラウドエンジニア</a></td><td className="p-2 font-bold text-slate-900">488万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">7</td><td className="p-2"><a href="/skill/infrastructure/" className="text-blue-700 hover:underline">インフラエンジニア</a></td><td className="p-2 font-bold text-slate-900">475万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">8</td><td className="p-2"><a href="/skill/java/" className="text-blue-700 hover:underline">Javaエンジニア</a></td><td className="p-2 font-bold text-slate-900">447万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">9</td><td className="p-2"><a href="/skill/react/" className="text-blue-700 hover:underline">フロントエンドエンジニア</a></td><td className="p-2 font-bold text-slate-900">446万円</td></tr><tr className="border-b border-slate-200"><td className="p-2 font-bold text-slate-500">10</td><td className="p-2"><a href="/skill/kotlin/" className="text-blue-700 hover:underline">Androidエンジニア</a></td><td className="p-2 font-bold text-slate-900">358万円</td></tr></tbody>
          </table>
        </div>

        <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 mb-8">
          <h2 className="font-bold text-slate-900 mb-2">この数値を読むときの注意</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
            <li><strong>ソースをまたいで比較しない</strong>: 正社員/フリーランス、平均/中央値、調査時点が異なります。比較は必ず同じ表の中で。</li>
            <li><strong>言語＝年収ではない</strong>: 同じ言語でも役職・経験年数・企業の給与テーブルで大きく変わります。年収帯ごとの到達条件は<Link href="/salary/" className="text-blue-700 hover:underline">年収を上げる転職ガイド</Link>を参照。</li>
            <li>フリーランスの単価ベース年収（レバテックフリーランス等）はさらに高く出ますが、社会保険・税の自己負担で手取りは目減りします。</li>
          </ul>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">関連ガイド</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/skill/" className="text-blue-700 hover:underline">スキル・言語別 転職ガイド一覧</Link></li>
            <li><Link href="/salary/company-ranking/" className="text-blue-700 hover:underline">IT企業の平均年収ランキング43社【有報準拠】</Link></li>
            <li><Link href="/salary/" className="text-blue-700 hover:underline">エンジニアが年収を上げる転職｜ITSSレベル×年収の地図</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}
