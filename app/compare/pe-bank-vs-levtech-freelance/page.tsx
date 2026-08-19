import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/pe-bank-vs-levtech-freelance/" },
  title: "PE-BANKとレバテックフリーランス比較｜どっちがおすすめ【2026年8月】",
  description:
    "PE-BANKとレバテックフリーランスをどっちがおすすめか即答。マージン完全公開（8〜12%）と共済会のPE-BANK、高単価・案件量のレバテックフリーランスを、手数料・案件数・福利厚生・対応エリアで時点付き実データで徹底比較。30代40代エンジニアの独立の選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "margin", label: "マージン（手数料）で比較（最大の違い）" },
  { id: "price", label: "単価・案件数で比較" },
  { id: "welfare", label: "福利厚生・対応エリアで比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", pebank: "株式会社PE-BANK（前身は1989年設立の首都圏コンピュータ技術者協同組合）", levtech: "レバテック株式会社（レバレジーズグループ）" },
  { item: "サービス種別", pebank: "ITフリーランス向け案件紹介（協同組合を母体とする老舗）", levtech: "ITフリーランス（業務委託）向け案件紹介エージェント" },
  { item: "対象", pebank: "ITフリーランスエンジニア（実務経験者）", levtech: "IT・Web系の高単価業務委託案件／実務経験者向け" },
  { item: "マージン（手数料）", pebank: "完全公開。契約月数に応じ12%（1〜12ヶ月）→10%（13〜24ヶ月）→8%（25ヶ月以上）", levtech: "非公表（業界相場10〜15%は推定＝確認不可）" },
  { item: "公開案件数", pebank: "公式値は確認範囲で要確認（老舗で取引実績は長い）", levtech: "公開1万件以上／公式系では約97,000件以上とも（二次情報・時点要確認）" },
  { item: "単価・年収の目安", pebank: "公式の平均単価値は確認範囲で要確認（長期安定・透明性が軸）", levtech: "利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（二次情報）" },
  { item: "福利厚生", pebank: "共済会（月2,500〜12,850円）：所得補償・生命/がん共済・連鎖倒産防止・資格取得支援等", levtech: "フリーランス向け支援（内容・時点は要確認）" },
  { item: "対応エリア", pebank: "全国12拠点（東京・大阪・愛知・北海道・東北・岡山・広島・九州 等）", levtech: "首都圏中心（二次情報）" },
  { item: "料金", pebank: "フリーランス側は無料（手数料は上記のとおり公開）", levtech: "フリーランス側は無料" },
];

const faqs = [
  { q: "PE-BANKとレバテックフリーランスはどっちがおすすめ？", a: "手数料の透明性・共済会の保障・全国対応で長く安定して働きたいならPE-BANK、高単価と案件量を重視するならレバテックフリーランスがおすすめです。手数料が公開か非公開かという大きな違いがあるため、両方登録して提示単価と手取り感を比較するのが効率的です。" },
  { q: "マージンが公開されているのはどっち？", a: "PE-BANKです。契約月数に応じて12%（1〜12ヶ月）→10%（13〜24ヶ月）→8%（25ヶ月以上）と完全公開しており、続けるほど手数料が下がる設計です。手取りが事前に読めるのが最大の強みです。レバテックフリーランスはマージン非公表（業界相場10〜15%は推定で確認不可）のため、面談で手取りベースの単価を確認する必要があります。" },
  { q: "単価が高いのはどっち？", a: "レバテックフリーランスは利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（いずれも二次情報）と高単価実績が公表系で出ています。PE-BANKは公式の平均単価値が要確認ですが、手数料が公開で続けるほど下がるため、長期参画では手取りが安定しやすい設計です。短期の高単価ならレバテック、長期の手取り安定ならPE-BANKと整理できます。" },
  { q: "案件数が多いのはどっち？", a: "レバテックフリーランスは公開1万件以上（公式系では約97,000件以上とも・二次情報）と案件量が豊富です。PE-BANKは老舗で取引実績は長いものの、公開案件数の公式値は要確認です。案件の母数を重視するならレバテックフリーランスが目安になります。" },
  { q: "保障・福利厚生があるのはどっち？", a: "PE-BANKです。共済会（月2,500〜12,850円）に加入すると、所得補償・生命/がん共済・連鎖倒産防止制度・資格取得支援などが利用でき、独立後の保障面を補えます。全国12拠点で地方でも案件を探しやすい点も強みです。共済会は任意ですが費用がかかるため、必要性を見極めて加入を判断しましょう。" },
  { q: "地方在住でも使えるのはどっち？", a: "PE-BANKは全国12拠点（東京・大阪・愛知・北海道・東北・岡山・広島・九州 等）を構えており、地方在住でも案件を探しやすいのが強みです。レバテックフリーランスは首都圏中心（二次情報）のため、地方在住の場合はリモート案件中心になります。地方拠点での対面サポートを重視するならPE-BANKが向きます。" },
  { q: "40代エンジニアでも案件はある？", a: "どちらも実務経験者向けのため、40代でも実務経験・スキルがあれば案件につながりやすい傾向があります。フリーランスは年齢よりスキルと実績が重視されます。長期安定と保障を重視するならPE-BANK、単価最大化を狙うならレバテックフリーランスを軸にし、両社を併用して母数を確保するのが現実的です。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろ手数料が公開のPE-BANKと高単価のレバテックフリーランスを比較することで、手取りベースの最適な案件を選べます。フリーランス側は両方無料です。同じ案件に重複してエントリーしないよう、エントリー状況は自分で管理しておきましょう。" },
];

const pebankReviews = {
  good: ["マージンが完全公開で手取りが読める", "続けるほど手数料が下がる（8〜12%）", "共済会の保障と全国12拠点で安心"],
  bad: ["最新技術・Web系の高単価は他社が強いことも", "共済会は任意だが月額費用がかかる", "公開案件数の公式値が要確認"],
};
const levtechReviews = {
  good: ["単価が高く直請け案件が多い", "案件量が豊富で比較しやすい", "IT特化で技術の話が通じる"],
  bad: ["マージン非公表で手取り感が読みにくい", "首都圏中心で地方は限定的", "実務経験が浅いと案件が限定的"],
};

const relatedLinks = [
  { name: "PE-BANKの詳細レビュー", href: "/review/pe-bank/" },
  { name: "レバテックフリーランスの詳細レビュー", href: "/review/levtech-freelance/" },
  { name: "フリーランス向けエージェント比較", href: "/compare/freelance-agents/" },
  { name: "レバテックフリーランス vs ギークスジョブ", href: "/compare/levtech-freelance-vs-geechs/" },
  { name: "レバテックフリーランス vs Midworks", href: "/compare/levtech-freelance-vs-midworks/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
];

export default function PeBankVsLevtechFreelancePage() {
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
        title="PE-BANKとレバテックフリーランス比較｜どっちがおすすめ【2026年8月】"
        description="PE-BANKとレバテックフリーランスをどっちがおすすめか即答。マージン・単価・案件数・福利厚生・対応エリアを時点付き実データで徹底比較します。"
        url="/compare/pe-bank-vs-levtech-freelance/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "PE-BANK vs レバテックフリーランス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PE-BANKとレバテックフリーランス比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ITフリーランス案件エージェント2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          ITフリーランスの案件探しで、対照的な強みを持つPE-BANKとレバテックフリーランス。「マージンを完全公開し、共済会と全国拠点で長く安定して働ける」PE-BANKと、「高単価・案件量で稼ぎを最大化する」レバテックフリーランス。最大の違いは手数料が公開か非公開かという透明性の差です。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社PE-BANK公式（マージン・共済会・拠点）",
            "レバテック株式会社（レバテックフリーランス）公式系・二次情報",
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
              手数料の透明性・保障・全国対応で長く安定して働くなら「PE-BANK」、高単価と案件量で稼ぎを最大化するなら「レバテックフリーランス」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① PE-BANKはマージンを完全公開（12%→10%→8%・契約月数に応じて低下）。共済会の保障と全国12拠点で、長期安定・地方対応に強い老舗。</li>
              <li>② レバテックフリーランスは案件量が豊富（公開1万件以上）で、利用者平均年収881万円・平均単価68万円（二次情報）と高単価実績が出ている。首都圏中心。</li>
              <li>③ 手数料が公開か非公開かが最大の違い。手取りの読みやすさと保障のPE-BANK、単価と案件量のレバテックフリーランスを、両方無料で登録して比較するのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">PE-BANK</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックフリーランス</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.pebank}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.levtech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 案件数・単価は時期により変動が大きく、媒体経由の二次集計値や要確認の値を含みます。PE-BANKのマージンは公式公開値、レバテックフリーランスのマージンは非公表です。
          </p>
        </section>

        <section id="margin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マージン（手数料）で比較（最大の違い）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">PE-BANK：完全公開（8〜12%）</h3>
              <p className="text-sm text-petrol-deep">
                契約月数に応じて12%（1〜12ヶ月）→10%（13〜24ヶ月）→8%（25ヶ月以上）と完全公開しています。続けるほど手数料が下がる設計で、手取りが事前に読めるのが最大の強みです。透明性を重視する人に向きます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックフリーランス：非公表</h3>
              <p className="text-sm text-slate-600">
                マージンは非公表で、業界相場10〜15%という数値は推定でレバテック公式の公表値ではありません（確認不可）。提示されるのは原則『自分が受け取る単価』であることが多いため、面談で手取りベースの単価を確認することが重要です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            「手取りを事前に正確に把握したい」ならPE-BANK、「マージンより提示単価の高さで判断する」ならレバテックフリーランス、という整理が実務的です。長期参画を見込むなら、手数料が下がるPE-BANKの設計は手取りの面で有利になりやすいです。
          </p>
        </section>

        <section id="price" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・案件数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">PE-BANK</h3>
              <p className="text-sm text-petrol-deep">
                公式の平均単価値は確認範囲で要確認ですが、手数料が公開で続けるほど下がるため、長期参画では手取りが安定しやすい設計です。老舗で取引実績が長く、長期安定の軸として使いやすいのが特徴です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックフリーランス</h3>
              <p className="text-sm text-slate-600">
                公開案件1万件以上（公式系では約97,000件以上とも・二次情報）。利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円（いずれも二次情報）と、高単価・案件量の両面で母数が大きいのが特徴です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。PE-BANKの単価値は要確認、レバテックフリーランスの単価値は公式系の二次情報です。
          </p>
        </section>

        <section id="welfare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福利厚生・対応エリアで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PE-BANKは共済会（月2,500〜12,850円）に加入すると、所得補償・生命/がん共済・連鎖倒産防止制度・資格取得支援などが利用でき、独立後の保障面を補えます。全国12拠点（東京・大阪・愛知・北海道・東北・岡山・広島・九州 等）を構え、地方在住でも対面サポートを受けやすいのが強みです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            レバテックフリーランスもフリーランス向け支援がありますが、内容・時点は要確認で、対応は首都圏中心（二次情報）です。地方在住で対面サポートや保障を重視するならPE-BANK、首都圏で案件量と単価を取りに行くならレバテックフリーランス、という整理が現実的です。共済会は任意ですが費用がかかるため、必要性を見極めて加入を判断しましょう。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">PE-BANKが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["マージン完全公開", "共済会の保障", "全国12拠点", "長期安定", "地方対応"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 協同組合を母体とする老舗。透明性と保障、長期安定が軸。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">レバテックフリーランスが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["高単価", "案件量が豊富", "直請け案件", "IT/Web全般", "平均単価68万円（二次）"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 首都圏中心。エンド直案件中心で単価が高めという傾向。</p>
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
              <h3 className="font-bold text-blue-800 mb-3">PE-BANKの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {pebankReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {pebankReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: フリーランススタート／エンジニアスタイル 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">レバテックフリーランスの口コミ傾向</h3>
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
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">PE-BANKが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ 手数料の透明性を重視する</li>
                <li>✓ 手取りを事前に正確に把握したい</li>
                <li>✓ 共済会の保障で独立後の不安を補いたい</li>
                <li>✓ 地方在住で対面サポートを受けたい</li>
                <li>✓ 長期で安定して参画したい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">レバテックフリーランスが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ 高単価の案件を狙いたい</li>
                <li>✓ 案件量を比較して選びたい</li>
                <li>✓ 直請け案件で単価を最大化したい</li>
                <li>✓ 首都圏で案件を探している</li>
                <li>✓ IT/Web全般の実務経験がある</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "レバテックフリーランスで単価相場を把握", desc: "案件量が豊富で高単価実績のあるレバテックフリーランスに登録し、市場の単価相場と案件の幅を把握します。" },
                { num: "2", title: "PE-BANKで手取りと保障を確認", desc: "マージンが公開のPE-BANKで、手数料を差し引いた手取りベースの単価と、共済会の保障内容を確認します。長期参画なら手数料低下の恩恵も比較材料に。" },
                { num: "3", title: "手取りと持続可能性で選ぶ", desc: "提示単価だけでなく、手数料・保障・対応エリアを含めた総合的な手取りと働きやすさで案件を選びます。透明性重視ならPE-BANK、単価重視ならレバテックフリーランスを主軸に。" },
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
              リモート・福利厚生を含めた比較は
              <Link href="/compare/levtech-freelance-vs-geechs/" className="text-petrol hover:underline">レバテックフリーランス vs ギークスジョブ</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              フリーランス転向では、30代・40代は年齢よりも実務経験・スキル・実績が評価軸になります。レバテックフリーランスは平均年収881万円・平均単価68万円（二次情報）という高単価実績があり、稼ぎを最大化したいミドルエンジニアの軸になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方、家庭やライフステージの変化が大きい30代・40代にとっては、収入の安定と保障も重要です。PE-BANKは手数料を完全公開し、続けるほど手数料が下がる設計に加え、共済会の所得補償や全国12拠点のサポートで、長期的に安心して働ける環境を整えやすいのが強みです。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、即戦力のフリーランスエンジニアの需要は構造的に高い状況です。短期の単価最大化（レバテックフリーランス）と長期の手取り安定・保障（PE-BANK）を併用し、収入と持続可能性の両方を確保するのが、ミドルのフリーランス転向を成功させる近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ マージン非公表のサービスでは提示単価が手取りか否かを必ず確認しましょう。マージンを公開するPE-BANK（8〜12%）が相場感の比較材料になります。
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
            PE-BANKとレバテックフリーランスはフリーランス側ともに無料。手数料の透明性・保障と、高単価・案件量という強みが異なるため、2社で手取りベースの条件を比較しましょう。
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
