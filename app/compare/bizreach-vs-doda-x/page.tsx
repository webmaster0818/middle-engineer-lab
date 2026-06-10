import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ビズリーチとdoda X比較｜ハイクラスはどっちがおすすめ【2026年6月】",
  description:
    "ビズリーチとdoda X（旧iX転職）をどっちがおすすめか即答。ハイクラススカウト型2社を、料金・求人数・年収レンジ・スカウトの質で時点付き実データで徹底比較。30代40代エンジニアのハイクラス転職の選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "pricing", label: "料金で比較（最大の違い）" },
  { id: "jobs", label: "求人数・年収レンジで比較" },
  { id: "scout", label: "スカウトの質・仕組みで比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", bizreach: "株式会社ビズリーチ（ビジョナル株式会社グループ・東証プライム上場）", dodax: "パーソルキャリア株式会社" },
  { item: "サービス類型", bizreach: "ハイクラス・スカウト型（ヘッドハンター／企業から直接スカウト）", dodax: "ハイクラススカウト型（ヘッドハンター＋企業からのスカウトを待つ）" },
  { item: "料金", bizreach: "無料会員あり／有料プランはWeb決済5,478円/月（2022年11月改定・二次）", dodax: "求職者無料" },
  { item: "公開求人数", bizreach: "年収1,000万円以上求人が全体の約4割という二次情報", dodax: "約106,491件（二次情報・2026年5月時点）" },
  { item: "高年収求人", bizreach: "ハイクラス定義は年収750万円以上（二次情報）", dodax: "年収800万円以上 約95,069件／1,000万円以上 約50,902件（二次・2026年5月時点）" },
  { item: "対象年収レンジ", bizreach: "現年収750万円前後以上のミドル〜ハイクラス", dodax: "年収800〜1,000万円超のハイクラス全業種" },
  { item: "特徴", bizreach: "国内最大級の会員制ハイクラススカウト。有料プランで全機能解放", dodax: "完全無料で待ち型。dodaブランドのハイクラス版" },
  { item: "料金負担", bizreach: "求職者（有料プラン）／採用企業", dodax: "採用企業のみ" },
];

const faqs = [
  { q: "ビズリーチとdoda Xはどっちがおすすめ？", a: "有料でも全機能を使って国内最大級のハイクラス求人にアクセスしたいならビズリーチ、無料で待ち型のハイクラススカウトを受けたいならdoda Xがおすすめです。どちらもスカウト型のため、両方登録してスカウトの量と質を比較するのが効率的です。doda Xは完全無料なので、まず登録して損はありません。" },
  { q: "料金が違うって本当？", a: "はい、ここが最大の違いです。ビズリーチは無料会員もありますが、すべてのスカウト閲覧・返信や一部機能はWeb決済5,478円/月（2022年11月改定・二次）の有料プラン対象になる場合があります。doda Xは求職者完全無料です。まず無料のdoda Xと、ビズリーチの無料会員を併用し、ビズリーチの有料化はスカウト状況を見てから判断するのが堅実です。" },
  { q: "求人数・高年収求人が多いのはどっち？", a: "doda Xは公開求人約106,491件のうち年収800万円以上が約95,069件、1,000万円以上が約50,902件（いずれも二次情報・2026年5月時点）と高年収帯の比率が非常に高いのが特徴です。ビズリーチは件数の単一公表値より「年収1,000万円以上求人が全体の約4割」（二次情報）という構成比で語られることが多いサービスです。" },
  { q: "スカウトが来ないときは？", a: "どちらもレジュメ（職務経歴）を登録して待つ仕組みのため、経歴の解像度がスカウト量を左右します。使用技術・マネジメント経験・プロジェクト規模を数値で具体的に書くのが基本です。スカウトが乏しい場合は、自分から動けるエージェント型（doda IT・レバテックキャリア等）を併用すると機会損失を防げます。" },
  { q: "40代エンジニアにはどっち？", a: "どちらも年収750〜800万円以上のミドル〜ハイクラス層が主対象のため、相応の年収・経歴がある40代と相性が良いサービスです。まず無料のdoda Xでスカウト状況を確かめ、より広いハイクラス求人を狙うならビズリーチ有料プランを検討する流れが現実的です。" },
  { q: "現年収が低めでも使える？", a: "両社ともハイクラス帯（年収750〜800万円前後以上）が主対象のため、現年収が低めの場合はスカウトが届きにくいことがあります。その場合は求人母数の多い総合型（リクルートエージェントIT等）やIT特化型で市場価値を高め、レンジが上がってから本格活用するのが効率的です。" },
  { q: "ITエンジニアでも使える？", a: "どちらもIT特化ではありませんが、ハイクラスのIT・管理職・外資ポジションを多く扱っており、エンジニアでも利用できます。IT専門の提案を厚く受けたい場合は、doda ITやレバテックキャリアなどのIT特化型と併用するとよいでしょう。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろスカウトの量と質を比較できるため推奨されます。doda Xは無料なのでまず登録し、ビズリーチは無料会員で様子を見てから有料化を判断する形が損のない使い方です。" },
];

const bizreachReviews = {
  good: ["高年収・ハイクラス求人が豊富", "スカウト経由でキャリアアップにつながった", "企業発スカウトは書類選考免除のことも"],
  bad: ["全機能を使うには有料プランが必要", "スカウトの質にばらつきがある", "経歴次第ではスカウトが届きにくい"],
};
const dodaxReviews = {
  good: ["完全無料でハイクラススカウトが届く", "年収800万円以上の求人比率が高い", "登録して待つだけで非公開求人に出会える"],
  bad: ["経歴次第でスカウトが来ない", "ハイクラス未満には物足りない", "doda・doda ITと取り違えやすい"],
};

const relatedLinks = [
  { name: "ビズリーチの詳細レビュー", href: "/review/bizreach-it/" },
  { name: "doda Xの詳細レビュー", href: "/review/doda-x/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "ビズリーチ vs レバテックキャリア", href: "/compare/bizreach-vs-levtech/" },
  { name: "doda X vs リクルートダイレクトスカウト", href: "/compare/doda-x-vs-recruit-direct-scout/" },
  { name: "スカウト型サービス比較", href: "/compare/scout-agents/" },
];

export default function BizreachVsDodaXPage() {
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
        title="ビズリーチとdoda X比較｜ハイクラスはどっちがおすすめ【2026年6月】"
        description="ビズリーチとdoda Xをどっちがおすすめか即答。料金・求人数・年収レンジ・スカウトの質を時点付き実データで徹底比較します。"
        url="/compare/bizreach-vs-doda-x/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "ビズリーチ vs doda X" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ビズリーチとdoda X（旧iX転職）比較｜ハイクラスはどっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ハイクラススカウト型2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          年収750〜800万円以上のハイクラス転職で定番のビズリーチとdoda X（旧iX転職）。どちらも「レジュメを登録してスカウトを待つ」スカウト型ですが、料金体系（有料／無料）と求人の打ち出し方に明確な違いがあります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社ビズリーチ公式・転職メディア集計値",
            "パーソルキャリア（doda X）公式・転職メディア集計値",
            "イーデス・みん評等の口コミプラットフォーム（傾向要約）",
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
              国内最大級のハイクラス求人を有料でも本格活用するなら「ビズリーチ」、まず無料で待ち型のハイクラススカウトを受けるなら「doda X」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① ビズリーチは会員制ハイクラススカウトの代表格。年収1,000万円以上求人が全体の約4割（二次情報）。全機能を使うには有料プラン（Web決済5,478円/月）が必要な場合がある。</li>
              <li>② doda Xは求職者完全無料。公開求人約106,491件のうち年収800万円以上が約95,069件、1,000万円以上が約50,902件（二次・2026年5月時点）と高年収帯比率が高い。</li>
              <li>③ どちらもスカウト型のため、まず無料のdoda Xとビズリーチ無料会員を併用し、スカウトの量と質を比較してからビズリーチ有料化を判断するのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ビズリーチ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">doda X</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.bizreach}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.dodax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数・比率は時期により変動が大きく、媒体経由の二次集計値です。取得時点と出典が異なるため、件数の単純比較は推奨しません。
          </p>
        </section>

        <section id="pricing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">料金で比較（最大の違い）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビズリーチ：一部有料</h3>
              <p className="text-sm text-blue-700">
                無料会員でもスカウトの受信などは可能ですが、すべてのスカウトの閲覧・返信や一部求人検索はWeb決済5,478円/月（2022年11月改定・二次）の有料プラン対象になる場合があります。まず無料会員で自分宛のスカウト状況を見てから有料化を判断するのがおすすめです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda X：完全無料</h3>
              <p className="text-sm text-slate-600">
                doda Xは求職者完全無料で、費用は採用企業側が負担します。コストをかけずにハイクラススカウトを受けたい人にとっては、まず登録して損のないサービスです。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            「課金してでも国内最大級のハイクラス求人を取りに行く」ならビズリーチ、「まず無料で市場価値を確かめる」ならdoda X、という整理が実務的です。両方の無料範囲を併用し、ビズリーチの有料化はスカウトの量と質を見てから判断するのが堅実です。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数・年収レンジで比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-blue-700">
                ハイクラス定義は年収750万円以上（二次情報）。年収1,000万円以上求人が全体の約4割（二次情報）という構成比で語られることが多く、外資・管理職を含む高年収帯に強いサービスです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda X</h3>
              <p className="text-sm text-slate-600">
                公開求人約106,491件のうち、年収800万円以上が約95,069件、1,000万円以上が約50,902件（いずれも二次情報・2026年5月時点）。高年収帯の比率が非常に高い構成が特徴です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。あくまで各社の公表系の傾向として参照してください。
          </p>
        </section>

        <section id="scout" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトの質・仕組みで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            どちらもヘッドハンターと企業の双方からスカウトが届く仕組みです。ビズリーチは企業発の本気度が高いスカウトでは書類選考免除で面談に進めるケースもあり、スカウト元の実績を見て選別できるのが強みです。doda Xも登録して待つだけで非公開のハイクラス求人に出会える点が評価されています。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            両社とも「スカウトの質にばらつき」「経歴次第でスカウトが届きにくい」という声が口コミに見られます。レジュメの解像度（使用技術・マネジメント経験・プロジェクト規模を数値で記載）がスカウト量を大きく左右するため、登録時に職務経歴を充実させておくことが重要です。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">ビズリーチが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["年収750万円以上", "外資・管理職", "会員制スカウト", "ヘッドハンター", "年収1,000万円以上求人 約4割"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 国内最大級の会員制ハイクラススカウト。全機能は有料プラン対象の場合あり。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">doda Xが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["完全無料", "年収800万円以上が高比率", "待ち型スカウト", "全業種ハイクラス", "dodaブランド"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 年収800〜1,000万円超のハイクラス全業種が対象。求職者無料。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、イーデス・みん評・各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">ビズリーチの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {bizreachReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {bizreachReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: イーデス／みん評／各種転職メディア 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">doda Xの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {dodaxReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {dodaxReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: イーデス／みん評 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">ビズリーチが向く人</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✓ 現年収750万円以上のミドル〜ハイクラス層</li>
                <li>✓ 外資・管理職ポジションも視野に入れている</li>
                <li>✓ 課金してでも求人の幅を広げたい</li>
                <li>✓ 企業発の本気度の高いスカウトが欲しい</li>
                <li>✓ ヘッドハンターを選別して使いたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">doda Xが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ まず無料でハイクラススカウトを試したい</li>
                <li>✓ 在職中で待ち型の受け身活動をしたい</li>
                <li>✓ 年収800万円超を狙う30代後半〜40代</li>
                <li>✓ 非公開のハイクラス求人を知りたい</li>
                <li>✓ コストをかけずに市場価値を確かめたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "まず無料で2社に登録", desc: "完全無料のdoda Xとビズリーチ無料会員に登録し、レジュメを充実させてスカウトを受け取れる状態にします。" },
                { num: "2", title: "スカウトの量と質を比較", desc: "1〜2週間で届くスカウトの量・年収レンジ・スカウト元の実績を比較します。どちらが自分の経歴に強く反応するかを見極めます。" },
                { num: "3", title: "ビズリーチ有料化を判断", desc: "ビズリーチで魅力的なスカウトが多ければ、全機能を解放する有料プランを検討。スカウトが乏しい場合はエージェント型（doda IT等）の併用で機会損失を防ぎます。" },
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
              スカウト型の活用法は
              <Link href="/compare/scout-agents/" className="text-blue-600 hover:underline">スカウト型サービス比較</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              ハイクラススカウト型は、これまでの実績と年収レンジがそのまま「選ばれる材料」になります。現年収750〜800万円前後以上の30代後半〜40代エンジニアは、ビズリーチ・doda Xともに相性が良く、待ち型で在職中でも効率的に動けるのが利点です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方、現年収がハイクラス手前の場合は、両社ともスカウトが届きにくいことがあります。その場合は求人母数の多い総合型（リクルートエージェントIT）やIT特化型（レバテックキャリア・doda IT）で市場価値を高め、レンジが上がってから本格活用するのが現実的です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの市場価値は構造的に高まっています。レジュメの解像度を上げ、複数のスカウト型で市場の反応を取りに行くことが、ハイクラス転職成功の近道です。
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
          <h2 className="text-xl font-bold mb-3">まず無料の範囲で両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            doda Xは完全無料、ビズリーチも無料会員あり。スカウトの量と質を比較し、ビズリーチの有料化はそのあとで判断しましょう。
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
