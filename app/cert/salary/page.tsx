import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "IT資格別 想定年収・資格手当の相場【2026年】基本情報・支援士・AWSなど求人公表値で比較";
const PAGE_DESC =
  "IT資格保有者の想定年収を、求人ボックス給料ナビ（2026年6月時点）の資格名求人の平均年収で比較。基本情報技術者491万、情報処理安全確保支援士746万など実ページ取得値と、資格手当・合格報奨金の相場をまとめました。IPAは資格別年収を公表していないため、民間求人データの正しい読み方も解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 求人ボックス給料ナビ「資格名」ページで平均年収が確認できた資格（2026年6月取得）
const confirmedRows = [
  { cert: "情報処理安全確保支援士", salary: "746万円", range: "428〜1,286万円" },
  { cert: "E資格（JDLA）", salary: "697万円", range: "477〜1,117万円" },
  { cert: "データベーススペシャリスト", salary: "610万円", range: "354〜1,104万円" },
  { cert: "オラクルマスター（Oracle Master）", salary: "583万円", range: "350〜837万円" },
  { cert: "基本情報技術者", salary: "491万円", range: "332〜967万円" },
  { cert: "LPIC（レベル2）", salary: "474万円", range: "360〜935万円" },
];

// 月給のみ/レンジのみ/近接職種代替（参考値）
const referenceRows = [
  { cert: "応用情報技術者", val: "平均月給 約38.3万円（年換算 約456万円）", note: "求人ボックスに資格名の平均年収表記がなく月給ベース" },
  { cert: "ネットワークスペシャリスト", val: "平均月給 約38.1万円（年換算 約457万円）", note: "同上（月給ベースの参考換算）" },
  { cert: "CCNA（Cisco）", val: "平均月給 約34.7万円（年換算 約416万円）", note: "同上（月給ベースの参考換算）" },
  { cert: "Azure（AZ-305 等）", val: "求人例 約500〜900万円", note: "「Microsoft Azure」求人のレンジ。単一の平均値は抽出不可" },
  { cert: "AWS認定（SAA 等）", val: "約487万円（クラウドエンジニア職で代替）", note: "資格名の平均年収ページがなく近接職種で代替" },
  { cert: "PMP", val: "約692万円（プロジェクトマネージャー職で代替）", note: "資格名の平均年収ページがなく近接職種で代替" },
];

// 資格手当・合格報奨金の相場（出典: Geekly Media 2026年3月30日更新）
const allowanceRows = [
  { cert: "基本情報技術者", monthly: "5,000〜10,000円", bonus: "20,000〜100,000円" },
  { cert: "応用情報技術者", monthly: "5,000〜20,000円", bonus: "50,000〜200,000円" },
  { cert: "ネットワークスペシャリスト", monthly: "10,000〜20,000円", bonus: "80,000円" },
  { cert: "データベーススペシャリスト", monthly: "10,000〜20,000円", bonus: "80,000円" },
  { cert: "ITストラテジスト", monthly: "20,000〜30,000円", bonus: "80,000円〜（高額事例あり）" },
  { cert: "プロジェクトマネージャ（IPA）", monthly: "10,000〜20,000円", bonus: "120,000円" },
  { cert: "シスコ技術者認定（CCNA等）", monthly: "5,000〜20,000円", bonus: "—" },
  { cert: "Linux技術者認定（LPIC）", monthly: "5,000〜30,000円", bonus: "—" },
];

const faqs = [
  {
    q: "IT資格を取ると年収はいくら上がりますか？",
    a: "「この資格で年収が◯◯円上がる」という公的な確定統計は存在しません。IPA（情報処理推進機構）も資格別の年収は公表していません。本ページの年収は、求人ボックス給料ナビで『その資格名を含む求人』の平均年収であり、資格保有による上乗せ額そのものではない点に注意してください。資格の効果は『応募できる求人が増える』『資格手当が付く』という形で現れます。",
  },
  {
    q: "年収が高いIT資格はどれですか？",
    a: "求人ボックス給料ナビ（2026年6月時点）で資格名の平均年収が確認できたものでは、情報処理安全確保支援士746万円、E資格（JDLA）697万円、データベーススペシャリスト610万円が上位です。セキュリティ・AI・高度試験（スペシャリスト系）が高い傾向にあります。",
  },
  {
    q: "基本情報技術者の年収はどれくらいですか？",
    a: "求人ボックス給料ナビ（2026年6月時点）で『基本情報技術者』を含む求人の平均年収は491万円（レンジ332〜967万円）でした。資格手当としては月5,000〜10,000円、合格報奨金2〜10万円程度を設ける企業があります（Geekly調べ）。",
  },
  {
    q: "資格手当はどれくらいもらえますか？",
    a: "IT人材紹介のGeeklyの調査（2026年3月更新）では、基本情報技術者で月5,000〜10,000円、高度試験（スペシャリスト系）で月10,000〜20,000円、ITストラテジストで月20,000〜30,000円が目安です。合格時の一時金（報奨金）を別途支給する企業もあります。金額は企業により大きく異なります。",
  },
];

export default function CertSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/cert/salary/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/salary/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "資格", href: "/cert/" }, { name: "資格別 想定年収・資格手当" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">IT資格別 想定年収・資格手当の相場【2026年】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          「この資格を取ったら年収はどれくらい？」に、<strong>求人ボックス給料ナビ（2026年6月時点）</strong>の資格名求人の平均年収と、<strong>資格手当・合格報奨金の相場</strong>でお答えします。基本情報技術者・情報処理安全確保支援士・AWS・CCNAなど、需要の高い資格を出典付きで比較できます。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["求人ボックス 給料ナビ（資格名・職種別）", "Geekly Media 資格手当の相場一覧"]} />

        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 my-6 text-sm text-slate-700">
          <p className="font-bold mb-1">⚠ データの読み方（最初にご確認ください）</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>IPA（情報処理推進機構）は資格別の年収を公表していません。</strong> 出回る「◯◯資格の年収」はすべて民間求人サイト等の独自集計です。</li>
            <li>下表の年収は「<strong>その資格名を含む求人</strong>」の平均であり、<strong>資格保有による上乗せ額ではありません</strong>。</li>
            <li>求人ボックスの数値は<strong>月次で変動</strong>します（本ページは2026年6月時点の取得値）。最新値は各ページでご確認ください。</li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">① 資格名求人の平均年収（求人ボックスで確認できた資格）</h2>
          <p className="text-slate-600 text-sm mb-4">求人ボックス給料ナビの資格名ページで「平均年収」が明示されていた資格です（2026年6月取得）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">資格</th>
                  <th className="p-2 border-b-2 border-slate-300">平均年収</th>
                  <th className="p-2 border-b-2 border-slate-300">年収レンジ</th>
                </tr>
              </thead>
              <tbody>
                {confirmedRows.map((r) => (
                  <tr key={r.cert} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2 font-medium">{r.cert}</td>
                    <td className="p-2 font-bold text-slate-900">{r.salary}</td>
                    <td className="p-2 text-slate-600">{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：求人ボックス 給料ナビ 各資格名ページ（2026年6月時点で取得）。セキュリティ・AI・高度試験系が高い傾向。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">② 参考値（月給ベース・レンジ・近接職種での代替）</h2>
          <p className="text-slate-600 text-sm mb-4">資格名ページに「平均年収」がなく、月給のみ・レンジのみ・近接職種で代替したものです。年換算は参考値としてご覧ください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">資格</th>
                  <th className="p-2 border-b-2 border-slate-300">想定年収（参考）</th>
                  <th className="p-2 border-b-2 border-slate-300">備考</th>
                </tr>
              </thead>
              <tbody>
                {referenceRows.map((r) => (
                  <tr key={r.cert} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2 font-medium">{r.cert}</td>
                    <td className="p-2 text-slate-900">{r.val}</td>
                    <td className="p-2 text-slate-500 text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：求人ボックス 給料ナビ（2026年6月時点）。月給の年換算・近接職種での代替は当サイトによる参考算出で、資格保有者の確定平均ではありません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">③ 資格手当・合格報奨金の相場</h2>
          <p className="text-slate-600 text-sm mb-4">資格による収入アップは「手当」として現れることも多いです。IT人材紹介Geeklyの調査（2026年3月更新）による目安です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">資格</th>
                  <th className="p-2 border-b-2 border-slate-300">月額手当の目安</th>
                  <th className="p-2 border-b-2 border-slate-300">合格報奨金（一時金）</th>
                </tr>
              </thead>
              <tbody>
                {allowanceRows.map((r) => (
                  <tr key={r.cert} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2 font-medium">{r.cert}</td>
                    <td className="p-2 text-slate-900">{r.monthly}</td>
                    <td className="p-2 text-slate-600">{r.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Geekly Media「資格手当の相場一覧」（2026年3月30日更新）。金額は企業により大きく異なります。AWS・PMP・Azureの月額手当相場は同記事に記載がないため掲載していません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連データ・ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/cert/compare/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">IT資格 比較一覧（受験料×合格率）</Link>
            <Link href="/cert/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">資格別 転職ガイド</Link>
            <Link href="/salary/job-type-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">職種別 年収ランキング</Link>
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業別 年収ランキング43社</Link>
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
          <h2 className="text-xl font-bold mb-3">資格を活かして年収を上げる転職を</h2>
          <p className="text-blue-100 text-sm mb-4">資格は「応募できる求人の幅」を広げます。IT特化エージェントに相談して、資格を活かせる求人と想定年収を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
      </article>
    </>
  );
}
