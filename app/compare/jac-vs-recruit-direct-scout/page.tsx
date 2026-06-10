import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "JACリクルートメントとリクルートダイレクトスカウト比較｜どっちがおすすめ【2026年6月】",
  description:
    "JACリクルートメントとリクルートダイレクトスカウトをどっちがおすすめか即答。両面型エージェントとハイクラススカウト型を、仕組み・求人数・年収レンジ・対象層で時点付き実データで徹底比較。30代40代エンジニアのハイクラス転職の選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "type", label: "仕組みで比較（最大の違い）" },
  { id: "jobs", label: "求人数・年収レンジで比較" },
  { id: "support", label: "サポート・伴走で比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", jac: "株式会社JACリクルートメント（東証プライム上場）", rds: "リクルート系（正式な運営会社名は要確認）" },
  { item: "サービス類型", jac: "両面型（1人のコンサルが企業・求職者の双方を担当）ハイクラス／ミドル特化エージェント", rds: "ハイクラススカウト型（レジュメを登録してスカウトを待つ）" },
  { item: "支援スタイル", jac: "コンサルタントが提案・伴走（エージェント型）", rds: "ヘッドハンター・企業からのスカウトを待つ" },
  { item: "公開求人数", jac: "媒体により値が割れており確認不可（IT求人も扱う総合・ハイクラス型）", rds: "約59.3万件（二次情報・2026年2月時点）／年収800万円以上 約34.7万件" },
  { item: "対象年齢・年収", jac: "主に30〜50代（30〜40代のミドル中心）／年収500万円以上が目安（600万円以上が一つのライン）", rds: "年収600〜2,000万円のミドル〜ハイクラス・全業種" },
  { item: "得意領域", jac: "上場・外資系・管理職／専門職（ITポジションも含む）", rds: "総合ハイクラス（IT特化ではない／IT求人も扱う）" },
  { item: "特徴", jac: "利用者満足度93%（二次情報・時点により変動）。両面型で企業情報に精通", rds: "転職後平均年収約950万円（二次情報）。毎月約2万人が新規登録" },
  { item: "料金", jac: "求職者無料", rds: "求職者無料" },
];

const faqs = [
  { q: "JACリクルートメントとリクルートダイレクトスカウトはどっちがおすすめ？", a: "コンサルタントに提案・伴走してもらいながらハイクラス転職を進めたいならJACリクルートメント、レジュメを登録してヘッドハンターや企業からのスカウトを待ちたいならリクルートダイレクトスカウトがおすすめです。エージェント型と待ち型で動き方が異なるため、両方無料で登録して使い分けるのが効率的です。" },
  { q: "仕組みが違うって本当？", a: "はい、ここが最大の違いです。JACリクルートメントは両面型（1人のコンサルタントが企業・求職者の双方を担当）のエージェント型で、コンサルが求人を提案し選考まで伴走します。リクルートダイレクトスカウトはレジュメを登録してヘッドハンター・企業からのスカウトを待つスカウト型です。能動的に伴走してほしいならJAC、受け身で待ちたいならリクルートダイレクトスカウトと整理できます。" },
  { q: "求人数・年収レンジが大きいのはどっち？", a: "リクルートダイレクトスカウトは公開求人約59.3万件、うち年収800万円以上が約34.7万件（いずれも二次情報・2026年2月時点）と母数が大きく、転職後平均年収は約950万円（二次情報）とされます。JACリクルートメントは求人数が媒体により割れて確認不可ですが、年収500万円以上（600万円以上が一つのライン）を目安とするハイクラス／ミドル特化です。" },
  { q: "伴走サポートが手厚いのはどっち？", a: "JACリクルートメントです。両面型のため1人のコンサルタントが企業の内情に精通しており、求人提案から面接対策、条件交渉まで一貫して伴走します。リクルートダイレクトスカウトは基本的に待ち型で、スカウト後はヘッドハンター経由で進むため、伴走の手厚さはスカウト元によります。" },
  { q: "30代エンジニアにはどっち？", a: "コンサルの提案を受けながら管理職・専門職を狙う30代はJACリクルートメント、レジュメを登録して幅広いハイクラススカウトを受けたい30代はリクルートダイレクトスカウトが向きます。JACは30〜40代のミドル層が中心で、30代後半以降と特に相性が良いサービスです。" },
  { q: "40代エンジニアにはどっち？", a: "どちらも30〜50代のミドル〜ハイクラスが主対象のため、40代と相性が良いサービスです。管理職・専門職で伴走支援を受けたいならJAC、年収レンジの広いスカウトを受け身で受けたいならリクルートダイレクトスカウトを軸にし、両方併用すると機会損失を防げます。" },
  { q: "現年収が低めでも使える？", a: "両社ともハイクラス〜ミドル（JACは年収500万円以上が目安、リクルートダイレクトスカウトは600〜2,000万円）が主対象のため、現年収が低めだと紹介・スカウトが限定的になることがあります。その場合は求人母数の多い総合型（リクルートエージェントIT）やIT特化型で市場価値を高めてから本格活用するのが効率的です。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろエージェント型（JAC）と待ち型（リクルートダイレクトスカウト）を併用することで、能動的な提案と受け身のスカウトの両方を取りに行けます。両方無料です。同じ企業への重複応募を避けるため、応募状況は自分で管理しておきましょう。" },
];

const jacReviews = {
  good: ["コンサルが企業の内情に詳しい", "管理職・専門職の提案が的確", "面接対策・条件交渉の伴走が手厚い"],
  bad: ["現年収が低めだと紹介が限定的", "コンサルとの相性で体感差が出る", "求人数が媒体により割れ全体像が掴みにくい"],
};
const rdsReviews = {
  good: ["登録して待つだけで幅広いスカウトが届く", "年収レンジが高い求人が多い", "在職中でも受け身で活動できる"],
  bad: ["経歴次第でスカウトが乏しいことがある", "IT特化ではないため絞り込みが必要", "スカウト後の伴走はスカウト元による"],
};

const relatedLinks = [
  { name: "JACリクルートメントの詳細レビュー", href: "/review/jac-recruitment/" },
  { name: "リクルートダイレクトスカウトの詳細レビュー", href: "/review/recruit-direct-scout/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "JAC vs ビズリーチ", href: "/compare/jac-vs-bizreach/" },
  { name: "ビズリーチ vs リクルートダイレクトスカウト", href: "/compare/bizreach-vs-recruit-direct-scout/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
];

export default function JacVsRecruitDirectScoutPage() {
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
        title="JACリクルートメントとリクルートダイレクトスカウト比較｜どっちがおすすめ【2026年6月】"
        description="JACリクルートメントとリクルートダイレクトスカウトをどっちがおすすめか即答。仕組み・求人数・年収レンジ・対象層を時点付き実データで徹底比較します。"
        url="/compare/jac-vs-recruit-direct-scout/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "JACリクルートメント vs リクルートダイレクトスカウト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          JACリクルートメントとリクルートダイレクトスカウト比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 両面型エージェントとハイクラススカウト型を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          ハイクラス・ミドル転職の定番、JACリクルートメントとリクルートダイレクトスカウト。どちらも30〜50代のミドル層を主対象としますが、「コンサルが提案・伴走する」両面型エージェントのJACと、「レジュメを登録してスカウトを待つ」スカウト型のリクルートダイレクトスカウトでは、動き方が大きく異なります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社JACリクルートメント公式・二次情報",
            "リクルートダイレクトスカウト公式・転職メディア集計値（2026年2月時点等）",
            "各種転職口コミメディア（傾向要約）",
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
              コンサルに提案・伴走してもらうなら「JACリクルートメント」、レジュメを登録して幅広いハイクラススカウトを待つなら「リクルートダイレクトスカウト」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① JACリクルートメントは両面型（1人のコンサルが企業・求職者の双方を担当）のエージェント。上場・外資・管理職に強く、年収500万円以上（600万円以上が一つのライン）が目安。利用者満足度93%（二次情報）。</li>
              <li>② リクルートダイレクトスカウトは待ち型のハイクラススカウト。公開求人約59.3万件・年収800万円以上 約34.7万件（二次・2026年2月時点）、転職後平均年収約950万円（二次情報）。</li>
              <li>③ エージェント型（JAC）と待ち型（リクルートダイレクトスカウト）で動き方が逆のため、両方無料で登録し「提案」と「スカウト」の両方を取りに行くのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">JACリクルートメント</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートダイレクトスカウト</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.jac}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.rds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数・年収レンジは時期により変動が大きく、媒体経由の二次集計値です。JACの求人数は媒体により割れているため断定していません。
          </p>
        </section>

        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕組みで比較（最大の違い）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">JAC：両面型エージェント（提案・伴走）</h3>
              <p className="text-sm text-blue-700">
                1人のコンサルタントが企業・求職者の双方を担当する両面型のため、企業の内情に精通した提案を受けられます。求人提案から面接対策、条件交渉まで一貫して伴走するスタイルです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートダイレクトスカウト：待ち型スカウト</h3>
              <p className="text-sm text-slate-600">
                レジュメを登録し、ヘッドハンター・企業からのスカウトを待つ仕組みです。毎月約2万人が新規登録（二次情報）する大規模なスカウト型で、在職中でも受け身で活動できます。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            能動的に提案・伴走してほしいならJAC、受け身でスカウトを待ちたいならリクルートダイレクトスカウト、という整理が実務的です。両方使えば、コンサルからの提案と幅広いスカウトの両方を同時に受けられます。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数・年収レンジで比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">JACリクルートメント</h3>
              <p className="text-sm text-blue-700">
                求人数は媒体により値が割れて確認不可ですが、年収500万円以上（600万円以上が一つのライン）を目安とするハイクラス／ミドル特化です。上場・外資・管理職・専門職に強く、ITポジションも含みます。利用者満足度93%（二次情報・時点により変動）。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートダイレクトスカウト</h3>
              <p className="text-sm text-slate-600">
                公開求人約59.3万件、うち年収800万円以上が約34.7万件（いずれも二次情報・2026年2月時点）。対象年収帯は600〜2,000万円で、転職後平均年収は約950万円（二次情報）とされます。母数の大きさが魅力です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。あくまで各社の公表系の傾向として参照してください。
          </p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート・伴走で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            JACリクルートメントは両面型のため、コンサルタントが企業の採用背景や組織の内情まで把握したうえで提案します。面接で何が評価されるか、年収交渉の余地はどこかといった踏み込んだ伴走が強みで、利用者満足度93%（二次情報）に表れています。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            リクルートダイレクトスカウトは基本的に待ち型で、スカウト後はヘッドハンター経由で進むため、伴走の手厚さはスカウト元のヘッドハンターによります。優良なヘッドハンターを選別できれば手厚い支援を受けられますが、自分で見極める力が求められます。伴走の安定感を重視するならJAC、母数とスピードを重視するならリクルートダイレクトスカウトと整理できます。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">JACリクルートメントが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["上場・外資系", "管理職・専門職", "両面型の伴走", "30〜40代ミドル", "年収500万円以上が目安"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 両面型で企業情報に精通。利用者満足度93%（二次情報）。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">リクルートダイレクトスカウトが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["年収600〜2,000万円", "総合ハイクラス", "待ち型スカウト", "求人約59.3万件", "転職後平均約950万円"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ IT特化ではない総合ハイクラス。毎月約2万人が新規登録（二次情報）。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">JACリクルートメントの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {jacReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {jacReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 各種転職口コミメディア 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">リクルートダイレクトスカウトの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {rdsReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {rdsReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 各種転職口コミメディア 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">JACリクルートメントが向く人</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✓ コンサルに提案・伴走してほしい</li>
                <li>✓ 上場・外資・管理職を狙いたい</li>
                <li>✓ 企業の内情を踏まえた面接対策が欲しい</li>
                <li>✓ 年収500万円以上のミドル〜ハイクラス層</li>
                <li>✓ 条件交渉まで任せたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">リクルートダイレクトスカウトが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ レジュメを登録して待ち型で活動したい</li>
                <li>✓ 幅広いハイクラススカウトを受けたい</li>
                <li>✓ 年収600〜2,000万円を狙いたい</li>
                <li>✓ 在職中で時間が取りづらい</li>
                <li>✓ 求人母数の大きさを重視する</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "JACで提案・伴走を受ける", desc: "両面型のJACリクルートメントに登録し、コンサルから企業内情を踏まえた提案と面接・交渉の伴走を受けます。" },
                { num: "2", title: "リクルートダイレクトスカウトでスカウトを待つ", desc: "並行してレジュメを登録し、ヘッドハンター・企業からの幅広いスカウトを受け身で受け取ります。市場価値の確認にもなります。" },
                { num: "3", title: "提案とスカウトを突き合わせる", desc: "JACの提案とスカウトの内容を突き合わせると、年収レンジや求人の妥当性を客観的に判断できます。優良なスカウト元はJACと比較して見極めましょう。" },
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
              他のハイクラスサービスとの比較は
              <Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代のハイクラス・ミドル転職では、これまでの実績とマネジメント・専門性が評価軸になります。JACリクルートメントは30〜40代のミドル層が中心で、両面型コンサルが企業の内情を踏まえて提案・伴走するため、管理職・専門職を狙うエンジニアの後ろ盾になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              リクルートダイレクトスカウトは年収600〜2,000万円の幅広いレンジをカバーし、母数が大きいため、在職中で時間が取りづらいミドル層が受け身で市場価値を確かめるのに向きます。ただしIT特化ではないため、IT専門の提案を厚く受けたい場合はレバテックキャリアなどのIT特化型を併用するとよいでしょう。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの市場価値は構造的に高まっています。伴走のJACと母数のリクルートダイレクトスカウトを併用し、提案とスカウトの両面から最良のオファーを引き出すのが成功の近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ 厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。ハイクラス帯はこれを大きく上回る年収レンジが対象です。
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
            JACリクルートメントとリクルートダイレクトスカウトは両方無料。エージェント型の伴走と待ち型のスカウトという強みが異なるため、2社で提案を比較しましょう。
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
