import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "レバテックフリーランスとギークスジョブ比較｜どっちがおすすめ【2026年6月】",
  description:
    "レバテックフリーランスとギークスジョブをどっちがおすすめか即答。ITフリーランス案件エージェント2社を、単価・案件数・リモート比率・福利厚生・マージンで時点付き実データで徹底比較。30代40代エンジニアの独立・案件探しの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "price", label: "単価・案件数で比較" },
  { id: "remote", label: "リモート比率・働き方で比較" },
  { id: "welfare", label: "福利厚生・マージンで比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", levtech: "レバテック株式会社（レバレジーズグループ）", geechs: "ギークス株式会社（geechs／東証スタンダード上場）" },
  { item: "サービス種別", levtech: "ITフリーランス（業務委託）向け案件紹介エージェント", geechs: "フリーランス（業務委託）向け案件紹介エージェント" },
  { item: "対象", levtech: "IT・Web系の高単価業務委託案件／実務経験者向け", geechs: "ITエンジニア・Webデザイナー等の実務経験者" },
  { item: "公開案件数", levtech: "公開1万件以上／公式系では約97,000件以上とも（二次情報・時点要確認）", geechs: "公開7,000件以上（二次情報・時点要確認）／取引企業約3,810社（二次情報）" },
  { item: "単価・年収の目安", levtech: "利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（二次情報）", geechs: "公式の平均単価値は確認範囲で非明示（高単価案件を扱う）" },
  { item: "リモート", levtech: "リモート案件あり（時点・比率は要確認）", geechs: "リモート案件が8割以上という二次情報（時点要確認）" },
  { item: "福利厚生", levtech: "フリーランス向け支援（時点・内容は要確認）", geechs: "『フリノベ』（健康診断・確定申告サポート・学習割引等）" },
  { item: "マージン", levtech: "非公表（業界相場10〜15%は推定＝確認不可）", geechs: "非公表（確認不可）" },
  { item: "料金", levtech: "フリーランス側は無料", geechs: "フリーランス側は無料" },
];

const faqs = [
  { q: "レバテックフリーランスとギークスジョブはどっちがおすすめ？", a: "案件量と高単価を重視するならレバテックフリーランス、リモート中心の働き方と福利厚生『フリノベ』の安心感を重視するならギークスジョブがおすすめです。どちらもフリーランス側は無料の案件紹介エージェントのため、両方登録して提示単価と案件を比較するのが効率的です。" },
  { q: "単価が高いのはどっち？", a: "レバテックフリーランスは利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（いずれも二次情報）と、高単価の実績値が公表系で出ています。ギークスジョブも高単価案件を扱いますが、公式の平均単価値は確認範囲で非明示のため断定はできません。単価重視ならレバテックフリーランスが目安として参考になります。" },
  { q: "案件数が多いのはどっち？", a: "レバテックフリーランスは公開1万件以上（公式系では約97,000件以上とも・二次情報）、ギークスジョブは公開7,000件以上（二次情報・取引企業約3,810社）です。いずれも時点・基準が異なる二次情報のため単純比較はできませんが、案件量の母数ではレバテックフリーランスが大きい傾向があります。" },
  { q: "リモート案件が多いのはどっち？", a: "ギークスジョブはリモート案件が8割以上という二次情報（時点要確認）があり、リモート中心の働き方を重視する人に向きます。レバテックフリーランスもリモート案件を扱いますが、比率は時点により変動します。リモート希望は面談時に明示的に条件として伝えるのが確実です。" },
  { q: "福利厚生があるのはどっち？", a: "ギークスジョブはフリーランス向け支援『フリノベ』（健康診断・確定申告サポート・オンライン学習割引等）を提供しており、独立後の事務・健康面の不安を補えます。レバテックフリーランスもフリーランス向け支援がありますが、内容・時点は要確認です。独立直後で保障面の安心を重視するならギークスジョブが選びやすいでしょう。" },
  { q: "マージンはどっちが安い？", a: "両社ともマージン（手数料）は非公表のため、事前に比較することはできません。提示されるのは原則『自分が受け取る単価』であることが多いため、面談時に手取りベースの単価と契約形態（準委任／請負）を必ず確認しましょう。マージンを公開しているPE-BANK（契約月数に応じ8〜12%）と比較すると相場感をつかみやすくなります。" },
  { q: "40代エンジニアでも案件はある？", a: "どちらも実務経験者向けのため、40代でも実務経験・スキルがあれば案件につながりやすい傾向があります。フリーランスは年齢よりスキルと実績が重視されるため、これまでのプロジェクト経験を具体的に伝えることが重要です。案件の幅を広げるため、両社を併用して母数を確保するのが現実的です。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろ提示単価・案件・リモート比率を比較できるため推奨されます。フリーランス側は両方無料です。同じ案件に重複してエントリーしないよう、エントリー状況は自分で管理しておきましょう。" },
];

const levtechReviews = {
  good: ["単価が高く直請け案件が多い", "案件量が豊富で比較しやすい", "IT特化で技術の話が通じる"],
  bad: ["マージン非公表で手取り感が読みにくい", "実務経験が浅いと案件が限定的", "リモート比率は時点により変動"],
};
const geechsReviews = {
  good: ["リモート案件が多く通勤負担が少ない", "福利厚生『フリノベ』で独立後も安心", "支援実績が長く安心感がある"],
  bad: ["マージン非公表で手取り感が読みにくい", "最新技術・Web系の高単価は他社が強いことも", "公式の単価値が非明示"],
};

const relatedLinks = [
  { name: "レバテックフリーランスの詳細レビュー", href: "/review/levtech-freelance/" },
  { name: "ギークスジョブの詳細レビュー", href: "/review/geechs/" },
  { name: "フリーランス向けエージェント比較", href: "/compare/freelance-agents/" },
  { name: "PE-BANK vs レバテックフリーランス", href: "/compare/pe-bank-vs-levtech-freelance/" },
  { name: "レバテックフリーランス vs Midworks", href: "/compare/levtech-freelance-vs-midworks/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
];

export default function LevtechFreelanceVsGeechsPage() {
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
      <ArticleJsonLd
        title="レバテックフリーランスとギークスジョブ比較｜どっちがおすすめ【2026年6月】"
        description="レバテックフリーランスとギークスジョブをどっちがおすすめか即答。単価・案件数・リモート比率・福利厚生・マージンを時点付き実データで徹底比較します。"
        url="/compare/levtech-freelance-vs-geechs/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックフリーランス vs ギークスジョブ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックフリーランスとギークスジョブ比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ITフリーランス案件エージェント2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          ITフリーランスの案件探しで定番のレバテックフリーランスとギークスジョブ。どちらも実務経験者向けの業務委託案件エージェントで、マージンは非公表という共通点がありますが、「高単価・案件量」のレバテックフリーランスと「リモート中心・福利厚生」のギークスジョブでは、強みの方向性が異なります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック株式会社（レバテックフリーランス）公式系・二次情報",
            "ギークス株式会社（geechs job）公式・二次情報",
            "フリーランススタート・エンジニアスタイル等の口コミプラットフォーム（傾向要約）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              高単価と案件量を重視するなら「レバテックフリーランス」、リモート中心の働き方と福利厚生の安心感を重視するなら「ギークスジョブ」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① レバテックフリーランスは案件量が豊富（公開1万件以上・公式系では約97,000件以上とも）で、利用者平均年収881万円・平均単価68万円（二次情報）と高単価実績が出ている。</li>
              <li>② ギークスジョブはリモート案件が8割以上という二次情報があり、福利厚生『フリノベ』（健康診断・確定申告サポート等）で独立後の不安を補える。</li>
              <li>③ どちらもマージン非公表でフリーランス側は無料。提示単価・案件・リモート比率を比較するため、両方登録するのが最も損のない選び方。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックフリーランス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ギークスジョブ</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.levtech}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.geechs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 案件数・単価・リモート比率は時期により変動が大きく、媒体経由の二次集計値です。マージンは両社とも非公表のため事前比較はできません。
          </p>
        </section>

        <section id="price" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・案件数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックフリーランス</h3>
              <p className="text-sm text-petrol-deep">
                公開案件1万件以上（公式系では約97,000件以上とも・二次情報）。利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（いずれも二次情報）。エンド直（直請け）案件が中心で中間マージンが抑えられ、単価が高めという傾向です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ギークスジョブ</h3>
              <p className="text-sm text-slate-600">
                公開案件7,000件以上（二次情報）、取引企業約3,810社（二次情報）。高単価案件を扱いますが、公式の平均単価値は確認範囲で非明示です。リモート比率の高さと福利厚生で総合的な手取り感を高める設計が特徴です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。レバテックフリーランスの単価値は公式系の二次情報、ギークスの単価値は非明示です。
          </p>
        </section>

        <section id="remote" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート比率・働き方で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ギークスジョブはリモート案件が8割以上という二次情報（時点要確認）があり、週3日など柔軟な稼働の案件も扱うとされます。通勤負担を抑えて参画したい人や、地方在住で都市圏の案件を受けたい人に向きます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            レバテックフリーランスもリモート案件を扱いますが、比率は時点により変動します。リモート希望は両社とも面談時に明示的な条件として伝えるのが確実です。働き方の柔軟性を最優先するならギークスジョブを軸に、案件量と単価を取りたいならレバテックフリーランスを併用する形が現実的です。
          </p>
        </section>

        <section id="welfare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福利厚生・マージンで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ギークスジョブはフリーランス向け支援『フリノベ』を提供しており、健康診断・確定申告サポート・オンライン学習割引などが利用できるという公式・二次情報があります。独立後の事務・健康面の不安を補える点が評価されています。レバテックフリーランスもフリーランス向け支援がありますが、内容・時点は要確認です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            マージン（手数料）は両社とも非公表のため、事前に比較することはできません。提示されるのは原則『自分が受け取る単価』であることが多いため、面談時に手取りベースの単価と契約形態（準委任／請負）を必ず確認しましょう。マージンを公開しているPE-BANK（契約月数に応じ8〜12%）と比較すると、相場感をつかみやすくなります。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">レバテックフリーランスが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["高単価", "案件量が豊富", "直請け案件", "IT/Web全般", "平均単価68万円（二次）"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 実務経験者向け。エンド直案件中心で単価が高めという傾向。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">ギークスジョブが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["リモート8割以上（二次）", "福利厚生フリノベ", "柔軟な稼働", "支援実績が長い", "全国拠点"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ リモート中心の働き方と福利厚生の安心感が特徴。実務経験者向け。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、フリーランススタート・エンジニアスタイル・各種フリーランス口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックフリーランスの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {levtechReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {levtechReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: フリーランススタート／エンジニアスタイル 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">ギークスジョブの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {geechsReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {geechsReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: フリーランススタート／エンジニアスタイル 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックフリーランスが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ 高単価の案件を狙いたい</li>
                <li>✓ 案件量を比較して選びたい</li>
                <li>✓ 直請け案件で単価を最大化したい</li>
                <li>✓ IT/Web全般の実務経験がある</li>
                <li>✓ 単価交渉・契約更新の相談もしたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">ギークスジョブが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ リモート中心で働きたい</li>
                <li>✓ 福利厚生『フリノベ』の安心が欲しい</li>
                <li>✓ 週3日など柔軟な稼働をしたい</li>
                <li>✓ 独立後の事務・健康面の不安を補いたい</li>
                <li>✓ 地方在住で都市圏案件を受けたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "レバテックフリーランスで単価・案件量を確保", desc: "案件量が豊富で高単価実績のあるレバテックフリーランスに登録し、市場の単価相場と案件の幅を把握します。" },
                { num: "2", title: "ギークスジョブでリモート・福利厚生を補う", desc: "リモート中心の働き方や福利厚生『フリノベ』を重視するなら、ギークスジョブで柔軟な稼働の案件を探します。" },
                { num: "3", title: "提示単価を手取りベースで比較", desc: "両社ともマージン非公表のため、面談で手取りベースの単価と契約形態を確認し、提示条件を突き合わせて最良の案件を選びます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              マージンの透明性を重視するなら
              <Link href="/compare/pe-bank-vs-levtech-freelance/" className="text-petrol hover:underline">PE-BANK vs レバテックフリーランス</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              フリーランス転向では、30代・40代は年齢よりも実務経験・スキル・実績が評価軸になります。レバテックフリーランスは平均年収881万円・平均単価68万円（二次情報）という高単価実績があり、経験を積んだミドルエンジニアが単価を最大化したい場合の軸になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方、フリーランスは会社員のような福利厚生がないため、独立後の健康・事務面の不安が課題になります。ギークスジョブの『フリノベ』やリモート中心の働き方は、こうした不安を補い、家庭やライフステージの変化が大きい30代・40代が無理なく続けられる環境を整えやすくします。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、即戦力のフリーランスエンジニアの需要は構造的に高い状況です。単価のレバテックフリーランスと働き方・保障のギークスジョブを併用し、収入と持続可能性の両方を確保するのが、ミドルのフリーランス転向を成功させる近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ マージン非公表のサービスでは、提示単価が手取りか否かを必ず確認しましょう。マージンを公開するPE-BANK（8〜12%）が相場感の比較材料になります。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            レバテックフリーランスとギークスジョブはフリーランス側ともに無料。単価・案件量と、リモート・福利厚生という強みが異なるため、2社で提示条件を比較しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめサービスランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
