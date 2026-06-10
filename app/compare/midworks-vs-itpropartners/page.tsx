import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "MidworksとITプロパートナーズ比較｜どっちがおすすめ【2026年6月】",
  description:
    "Midworks（ミッドワークス）とITプロパートナーズをどっちがおすすめか即答。保障・週稼働日数・単価構造・案件量・対象層を時点付き実データで徹底比較し、30代40代フリーランスエンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "stability", label: "保障・安定性で比較" },
  { id: "workstyle", label: "稼働日数・働き方で比較" },
  { id: "price", label: "単価・マージン構造で比較" },
  { id: "jobs", label: "案件量・対象領域で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", mid: "株式会社Branding Engineer（TWOSTONE&Sons傘下に統合・最新法人名は要確認）", itp: "株式会社Hajimari" },
  { item: "サービス種別", mid: "フリーランス案件紹介＋正社員並み保障", itp: "フリーランス・副業案件紹介（週2-3日／リモートに強い）" },
  { item: "案件数", mid: "常時1万件以上（非公開約80%）", itp: "約10,000件（二次情報・時点要確認）" },
  { item: "少日数案件", mid: "週5常駐前提の案件が中心", itp: "週2〜3日など少日数案件が全体の3〜4割" },
  { item: "契約形態・単価", mid: "保障の対価としてマージン約20%（媒体指摘・公式公表値ではない＝確認不可）", itp: "エンド直（直請け）が約9割で単価が高めになりやすい" },
  { item: "特徴的な仕組み", mid: "報酬保障（案件途切れ時に報酬の60%を保障・適用条件あり）・正社員並みの福利厚生", itp: "週2-3日・リモート案件・スタートアップ案件（副業/独立準備に好相性）" },
  { item: "登録者・企業数", mid: "登録者5万人（2025年4月時点・二次情報）", itp: "登録9万名以上・利用企業2,000社以上（2024年7月時点・二次情報）" },
  { item: "料金", mid: "フリーランス側は無料", itp: "フリーランス側は無料" },
];

const faqs = [
  { q: "MidworksとITプロパートナーズはどっちがおすすめ？", a: "「安定」を最優先するならMidworks、「柔軟な働き方（週2-3日・副業・独立準備）」を最優先するならITプロパートナーズです。Midworksは報酬保障と正社員並みの福利厚生で独立後の不安を抑える設計、ITプロパートナーズは少日数・リモート・エンド直9割で柔軟さと単価効率を両立する設計と、価値の方向性が異なります。両方無料のため、自分が何を最大化したいかで選び、迷う場合は併用して比較するのが効率的です。" },
  { q: "収入の安定を重視するならどっち？", a: "Midworksです。案件と案件の間で収入が途切れた際に報酬の60%を保障する仕組み（二次情報・適用条件あり）と、正社員並みの福利厚生があり、家族やローンを抱える層が独立に踏み出す際のセーフティネットになります。ITプロパートナーズは保障型ではないため、安定を最優先するならMidworksが向きます。" },
  { q: "週2〜3日・副業で働きたいならどっち？", a: "ITプロパートナーズです。週2〜3日など少日数案件が全体の3〜4割を占め、リモート案件も豊富で、本業と並行する副業・複業や独立準備のフェーズに適しています。Midworksは週5常駐前提の案件が中心のため、少日数で柔軟に働きたいならITプロパートナーズが向きます。" },
  { q: "単価・手取りが高くなりやすいのはどっち？", a: "単価構造だけ見ればITプロパートナーズが有利になりやすいです。エンド直（直請け）が約9割で中間マージンが抑えられ、単価が高めになりやすい傾向があります（二次情報）。Midworksはマージンが約20%とやや高め（媒体指摘・公式公表値ではない＝確認不可）ですが、これは報酬保障と福利厚生という付加価値の対価です。手取り最大化が目的か、安定込みの価値が目的かで評価が変わります。" },
  { q: "Midworksの「やばい」という評判は大丈夫？", a: "「Midworks やばい」というサジェストの中身は、多くがマージンの高さ（約20%・媒体指摘・確認不可）や保障の適用条件への評価に由来し、サービス自体が危険という意味ではないケースが中心です。面談でマージンの考え方と報酬保障の適用条件を確認し、自分の状況に合うかを見極めれば、不安は事前に潰せます。" },
  { q: "30代エンジニアにはどっち？", a: "結婚・育児・住宅ローンが重なりやすい30代は、安定を取るならMidworks、副業で市場価値を試しながら段階的に独立準備するならITプロパートナーズが向きます。まずITプロパートナーズの少日数案件で「自分の単価」を確認し、手応えがあれば単価重視のレバテックフリーランスへ広げる二段構えも堅実です。" },
  { q: "40代エンジニアにはどっち？", a: "扶養家族やローンの負担が大きい40代は、収入の安定が一段と重要です。Midworksの報酬保障・福利厚生は独立のセーフティネットになり、マネジメント・設計経験を活かせる案件を軸に据えやすいです。一方、収入を一本に絞るリスクを避けたい場合は、ITプロパートナーズの少日数案件で収入源を分散する選び方も合理的です。" },
  { q: "両方登録しても大丈夫？", a: "問題ありません。むしろ性質が異なるため、安定軸のMidworksと柔軟軸のITプロパートナーズを比較できる利点があります。単価をさらに最大化したい場合はレバテックフリーランスも含めた3社比較が有効です。同じ案件への重複応募は避け、稼働状況を自分で管理しておきましょう。" },
];

const midReviews = {
  good: ["正社員並みの保障・福利厚生で安心して独立できた", "案件が途切れたときの報酬保障が心強い", "案件量も最大手級で選択肢がある"],
  bad: ["マージンが約20%とやや高め（媒体指摘・確認不可）", "保障の適用条件が厳しいと感じる場合がある", "「やばい」サジェストへの不安（中身はコスト・条件評価）"],
};
const itpReviews = {
  good: ["週2〜3日・リモート案件が業界トップクラス", "エンド直9割で単価が高めになりやすい", "起業・独立準備のフェーズに合う"],
  bad: ["週5常駐フルタイム前提だと選択肢が他社より少ない", "正社員志向・安定重視には不向き", "実務経験が前提で未経験には厳しい"],
};

const relatedLinks = [
  { name: "Midworks（正社員並み保障）の詳細レビュー", href: "/review/midworks/" },
  { name: "ITプロパートナーズ（週2-3日）の詳細レビュー", href: "/review/itpropartners/" },
  { name: "レバテックフリーランス（単価・案件量）の評判", href: "/review/levtech-freelance/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "フリーランスと正社員どちらが得か", href: "/knowledge/freelance-vs-fulltime/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function MidworksVsItproPartnersPage() {
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
        title="MidworksとITプロパートナーズ比較｜どっちがおすすめ【2026年6月】"
        description="MidworksとITプロパートナーズをどっちがおすすめか即答。保障・週稼働日数・単価構造・案件量・対象層を時点付き実データで徹底比較します。"
        url="/compare/midworks-vs-itpropartners/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "Midworks vs ITプロパートナーズ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          MidworksとITプロパートナーズ比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ フリーランス支援2社を「安定」と「柔軟」の軸で徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          フリーランス案件紹介に正社員並みの保障を組み合わせたMidworks（ミッドワークス）と、週2〜3日・リモート・エンド直に強いITプロパートナーズ。どちらも30代・40代の独立希望者から支持を集めていますが、提供する価値の方向性は「安定」と「柔軟」で対照的です。本記事では各社が公表する数値と口コミ傾向をもとに、ミドルエンジニア視点で「どっちを選ぶべきか」を整理します。架空の体験談や数値は扱わず、出典のある情報のみに基づきます。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Midworks公式系の公表値",
            "ITプロパートナーズ公式系の公表値（多くが2024年7月時点）",
            "フリーランス系メディア集計値",
            "エンジニア向け口コミプラットフォーム（傾向要約）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              安定を最優先するなら「Midworks」、柔軟な働き方（週2-3日・副業・独立準備）を最優先するなら「ITプロパートナーズ」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① Midworksは報酬保障（案件途切れ時に報酬の60%を保障・適用条件あり）と正社員並みの福利厚生で、独立後の不安を抑える設計。家族・ローンを抱えるミドルの第一歩に向く。</li>
              <li>② ITプロパートナーズは少日数案件が全体の3〜4割・リモート豊富・エンド直9割で、柔軟さと単価効率を両立。副業・独立準備フェーズに好相性。</li>
              <li>③ 価値の方向性が異なるため、両方無料で登録し、自分が「安定」と「柔軟」のどちらを取るかで選ぶのが最も損のない判断。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Midworks</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ITプロパートナーズ</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.mid}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.itp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 案件数・登録者数・マージンは時期や算出条件により変動する二次情報です。Midworksのマージン約20%は媒体指摘・推定であり公式公表値ではありません（確認不可）。報酬保障・エンド直比率には条件・前提があります。
          </p>
        </section>

        <section id="stability" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保障・安定性で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Midworks：報酬保障＋福利厚生</h3>
              <p className="text-sm text-blue-700">
                案件と案件の間で収入が途切れた際に報酬の60%を保障する仕組み（二次情報・適用条件あり）と、正社員並みの福利厚生が最大の差別化点です。独立後の最大の不安である「案件が切れたときの収入」を抑えられます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ITプロパートナーズ：保障より柔軟性</h3>
              <p className="text-sm text-slate-600">
                報酬保障型ではありません。代わりに複数の少日数案件を組み合わせ、1社依存のリスクを下げる「収入源の分散」で安定に近づけるアプローチです。安定を制度で担保したいならMidworksが明確に有利です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            安定を「制度で担保したい」ならMidworks、「働き方の分散で作りたい」ならITプロパートナーズ、という整理になります。家族・ローン・貯蓄の状況に応じて、どちらの安定の作り方が自分に合うかで判断するのが実務的です。
          </p>
        </section>

        <section id="workstyle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">稼働日数・働き方で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            働き方の柔軟さはITプロパートナーズの最大の強みです。週2〜3日など少日数案件が全体の3〜4割を占め、リモート案件も豊富で、本業と並行する副業・複業や、起業・独立準備のフェーズに適しています。一方Midworksは週5常駐前提の案件が中心で、フルコミットで安定して稼ぎたい層に向きます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            「本業を続けながら試したい」「自分の事業に時間を割きたい」という段階的な独立を考えるなら、いきなりフルコミットせず少日数から始められるITプロパートナーズが現実的です。逆に、独立を決めて腰を据えて稼働するならMidworksの保障を土台にする選び方が合います。
          </p>
        </section>

        <section id="price" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・マージン構造で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Midworks：保障の対価としてのマージン</h3>
              <p className="text-sm text-blue-700">
                マージンは媒体指摘で約20%とされやや高めですが、これは公式公表値ではありません（確認不可）。報酬保障と福利厚生という付加価値の対価と捉えると評価が変わります。「安定のコストを払う」構造です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ITプロパートナーズ：エンド直9割で単価が高め</h3>
              <p className="text-sm text-slate-600">
                エンド企業からの直請けが約9割で、中間マージンが抑えられ単価が高めになりやすい構造です（二次情報）。少日数でも単価効率を確保しやすく、時間あたりの収入を重視する働き方に向きます。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            単価・手取りだけを最大化したいなら、さらに案件量最大手級の
            <Link href="/review/levtech-freelance/" className="text-blue-600 hover:underline">レバテックフリーランス</Link>
            も含めて提示単価を並べて比較するのが合理的です。保障が不要なら他社の方が手取りが増える可能性があり、保障が必要ならマージン差は「安心料」として納得しやすくなります。
          </p>
          <p className="text-xs text-slate-500">
            ※ 実際の単価はスキル・案件・時期により変動します。数値の単純比較ではなく、自分の案件で提示される条件を確認してください。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">案件量・対象領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Midworksが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["常時1万件以上", "非公開約80%", "週5常駐フルコミット", "報酬保障", "正社員並み福利厚生", "首都圏＋リモート"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 保障型でありながら案件量も最大手級。登録者5万人（2025年4月・二次情報）。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">ITプロパートナーズが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["約10,000件", "少日数案件3〜4割", "リモート", "エンド直9割", "副業・複業", "スタートアップ案件"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 利用企業2,000社以上・登録9万名以上（2024年7月時点・二次情報）。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、フリーランス系メディアやエンジニア向け口コミプラットフォームに見られる傾向を要約したものです（原文・スコア転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Midworksの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {midReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {midReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: フリーランス系メディア／エンジニア向け口コミプラットフォーム の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">ITプロパートナーズの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {itpReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {itpReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: フリーランス系メディア／エンジニア向け口コミプラットフォーム の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Midworksが向く人</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✓ 独立したいが不安定が怖い経験者</li>
                <li>✓ 家族・ローンがあり収入の安定を重視したい</li>
                <li>✓ 福利厚生・報酬保障を受けながら始めたい</li>
                <li>✓ 週5常駐フルコミットで腰を据えて稼ぎたい</li>
                <li>✓ 保障のためにマージンを払うことに納得できる</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">ITプロパートナーズが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ 週2〜3日・リモートで柔軟に働きたい</li>
                <li>✓ 副業・複業で本業と並行したい</li>
                <li>✓ 起業・独立の準備をしながら生活費を確保したい</li>
                <li>✓ エンド直で単価効率を確保したい</li>
                <li>✓ スタートアップ系の案件にも関心がある</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Midworksが向くケース", desc: "独立を決めてフルコミットしたい、家族・ローンがあり保障で安定を取りたい場合はMidworksを軸に。" },
                { num: "2", title: "ITプロパートナーズが向くケース", desc: "本業と並行して試したい、週2-3日・リモートで柔軟に働きたい、独立準備の生活費を確保したい場合はITプロパートナーズを軸に。" },
                { num: "3", title: "併用＋レバテックフリーランス", desc: "両方無料のため、安定軸のMidworksと柔軟軸のITプロパートナーズを比較。単価をさらに最大化したい場合はレバテックフリーランスも含めた3社で提示単価と条件を見比べると選択肢が最大化します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              フリーランス3社の住み分けは
              <Link href="/compare/freelance-agents/" className="text-blue-600 hover:underline">フリーランスエージェント比較</Link>
              で詳しく扱っています。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の独立は、収入の不安定さがライフイベントと直結します。Midworksは「不安定が怖い」というミドルの心理に最も寄り添う保障型で、報酬保障と福利厚生が独立の第一歩のセーフティネットになります。ITプロパートナーズは「いきなり完全独立せず段階的に試せる」点が強みで、副業・複業から市場価値を確認したい慎重派に向きます。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              <span className="font-bold text-slate-700">30代の場合：</span>スキルが評価され始め、独立による単価アップが見込める一方、結婚・育児・住宅ローンが重なりやすい年代です。まずITプロパートナーズの少日数案件で「自分の単価」を確認し、手応えがあれば単価重視のレバテックフリーランスへ広げる、あるいは安定を取ってMidworksで腰を据える、という選択になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              <span className="font-bold text-slate-700">40代の場合：</span>扶養家族やローンの負担が大きく、収入の安定が一段と重要です。Midworksの保障を土台にマネジメント・設計経験を活かす、またはITプロパートナーズで少日数案件を組み合わせて収入源を分散する、いずれも合理的です。「いつでも正社員に戻れる状態」を保つ意識も大切で、考え方は
              <Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスと正社員の比較</Link>
              を参照してください。
            </p>
            <p className="text-xs text-slate-500">
              ※ そもそも安定した正社員雇用を希望する場合は、正社員転職の<Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリア</Link>に相談するのが近道です。
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
          <h2 className="text-xl font-bold mb-3">迷ったら「安定」か「柔軟」かで選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">
            MidworksとITプロパートナーズは両方無料。安定を取るならMidworks、柔軟さを取るならITプロパートナーズ。両方登録して提示条件を比較しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
