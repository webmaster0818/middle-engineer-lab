import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/itpro-vs-levtech-freelance/" },
  title: "ITプロパートナーズとレバテックフリーランス比較｜副業か常駐か【2026年6月】",
  description:
    "ITプロパートナーズとレバテックフリーランスを稼働日数・単価・案件量で徹底比較。週2〜3日の副業・独立準備か、週5常駐の高単価かで選ぶ判断軸、口コミ傾向まで30代40代エンジニア向けに解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：副業少日数か、常駐高単価か" },
  { id: "confusion", label: "混同しやすいサービスの整理" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "kadoubi", label: "項目別比較①：稼働日数・働き方（主戦場）" },
  { id: "tanka", label: "項目別比較②：単価・直請け" },
  { id: "kensu", label: "項目別比較③：案件量・対象" },
  { id: "fukugyo", label: "項目別比較④：副業・独立準備のしやすさ" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "株式会社Hajimari", b: "レバテック株式会社（レバレジーズグループ）" },
  { item: "サービス種別", a: "フリーランス／副業案件。週2〜3日・リモートに強い", b: "フリーランス（業務委託）案件の紹介に強い最大手級" },
  { item: "稼働日数の強み", a: "週2〜3日・リモートが業界トップクラス。少日数案件が3〜4割", b: "週5常駐の高単価案件が中心。少日数は相対的に少なめ" },
  { item: "案件数", a: "公開約10,000件。利用企業2,000社以上・登録90,000名以上（2024年7月時点・二次）", b: "公開1万件以上。公式約97,000件以上という二次値あり（時点要確認・二次）" },
  { item: "直請け", a: "エンド直約9割で単価高め", b: "エンド直請けに強い" },
  { item: "単価・年収", a: "少日数でも単価高めだが、週5前提では選択肢が他社より少ない", b: "利用者平均年収881万円・平均単価68万円・中央値65万円（二次・時点に留意）" },
  { item: "得意な層", a: "副業・複業で収入分散、起業/独立準備中の慎重派", b: "週5常駐でしっかり稼ぎたい独立志向の経験者" },
  { item: "料金", a: "求職者（フリーランス）は無料", b: "求職者（フリーランス）は無料" },
];

const faqs = [
  { q: "ITプロパートナーズとレバテックフリーランスの最大の違いは何ですか？", a: "「稼働日数」が主戦場です。ITプロパートナーズは週2〜3日・リモートの案件に業界トップクラスで強く、少日数案件が3〜4割（二次）とされ、副業や独立準備に向きます。レバテックフリーランスは週5常駐の高単価案件が中心の最大手級で、しっかり稼ぎたい層に向きます。週2〜3日で働きたいならITプロパートナーズ、週5でフルに稼ぎたいならレバテックフリーランス、という整理です。" },
  { q: "レバテックフリーランスはレバテックキャリアと同じですか？", a: "別物です。レバテックフリーランスは業務委託（フリーランス）案件を紹介するサービス、レバテックキャリアは正社員転職を支援するエージェントです。運営は同じレバテック株式会社ですが、扱う契約形態が異なります。本記事はフリーランス・副業案件の比較であり、正社員転職を希望する場合はレバテックキャリアなど正社員エージェントを検討してください。" },
  { q: "会社員をしながら副業で使えますか？", a: "副業との相性が良いのはITプロパートナーズです。週2〜3日・リモートの案件が業界トップクラスに多く、本業を続けながら稼働しやすいためです。レバテックフリーランスは週5常駐の高単価案件が中心のため、会社員の副業には日数が合いにくい傾向があります。ただし副業の可否は勤務先の就業規則によります。始める前に必ず副業規定を確認してください。" },
  { q: "「公開案件の約6割が週3日以下」といった数字は本当ですか？", a: "そうした割合は媒体によって紹介され方が異なり、時点や集計方法でばらつきます。本記事では確定値として断定せず、ITプロパートナーズについては「少日数案件が3〜4割」（2024年7月時点・二次）という値を参考として挙げるにとどめています。少日数案件に強いという定性的な傾向は一致していますが、具体的な割合は契約時に最新の案件状況で確認するのが安全です。" },
  { q: "単価が高いのはどちらですか？", a: "前提が違うため単純比較はできません。レバテックフリーランスは利用者平均年収881万円・平均単価68万円・中央値65万円という二次値があり（時点に留意）、週5常駐でフルに稼ぐ前提での水準です。ITプロパートナーズはエンド直約9割で少日数でも単価高めとされますが、週2〜3日では総額は週5より下がります。同じ稼働なら高単価を狙えるのはレバテックフリーランス、少日数で効率を取るならITプロパートナーズです。" },
  { q: "独立・起業の準備段階に向いているのはどちらですか？", a: "ITプロパートナーズです。週2〜3日の案件で生活費を確保しつつ、残りの時間を自分の事業や学習に充てる、という独立準備の働き方を作りやすいためです。エンド直約9割で単価も確保しやすく、収入を分散させながら徐々に独立へ移行できます。一方、すでに独立してフルに稼ぐ段階ならレバテックフリーランスの週5高単価が合います。" },
  { q: "30代・40代でも案件はありますか？", a: "両サービスとも実務経験のある30代・40代エンジニアが主な対象です。レバテックフリーランスは週5でしっかり稼ぐ経験者、ITプロパートナーズは副業・複業で収入を分散したい、あるいは起業準備中の慎重派ミドルと相性が良い設計です。いずれも実務経験が前提のため、未経験に近い場合は紹介が難しい点に注意してください。" },
];

const goodItpro = [
  "週2〜3日・リモートで働きたい",
  "会社員をしながら副業案件を持ちたい",
  "起業・独立の準備中で収入を分散したい",
  "少日数でもエンド直で単価を確保したい",
  "いきなり週5常駐はリスクが高いと感じる慎重派",
];
const goodLev = [
  "週5常駐でフルにしっかり稼ぎたい",
  "高単価・高年収の案件量を重視する",
  "すでに独立済みで稼働を切らさず回せる",
  "エンド直請けの最大手級の安心感がほしい",
  "選択肢の多さから案件を選びたい",
];

export default function ItproVsLevtechFreelancePage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ITプロパートナーズとレバテックフリーランスの比較｜副業か常駐か" description="ITプロパートナーズとレバテックフリーランスを稼働日数・単価・案件量で徹底比較。週2〜3日の副業か週5常駐の高単価かで選ぶ判断軸を解説します。" url="/compare/itpro-vs-levtech-freelance/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ITプロパートナーズ vs レバテックフリーランス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ITプロパートナーズとレバテックフリーランスを徹底比較｜副業か常駐か？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 週2〜3日の副業・独立準備 と 週5常駐の高単価 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「ITプロパートナーズ レバテックフリーランス 比較」で検索する方の多くは、<strong>週2〜3日の副業・独立準備で使うか、週5常駐でフルに稼ぐか</strong>で迷っています。本記事は30代・40代のITエンジニア向けに、稼働日数を主戦場として両サービスを比較し、単価・案件量・口コミ傾向まで整理しました。冒頭で前提を一つ。<strong>レバテックフリーランスは業務委託案件の紹介サービスで、正社員転職のレバテックキャリアとは別物です。</strong></p>

        <DataNote surveyedAt="2026年6月" sources={["ITプロパートナーズ公式（二次集計含む）", "レバテックフリーランス公式（二次集計含む）", "フリーランス向け口コミメディアの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：副業少日数か、常駐高単価か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・週2〜3日の副業・独立準備なら「ITプロパートナーズ」</strong>。週2〜3日・リモート案件が業界トップクラスで、少日数案件が3〜4割（二次）あります。</li>
              <li><strong>・週5常駐でフルに高単価を稼ぐなら「レバテックフリーランス」</strong>。エンド直請けに強い最大手級で、案件量と単価が魅力です。</li>
              <li><strong>・迷うなら稼働日数で決める</strong>。本業がある・独立準備中ならITプロパートナーズ、すでに独立してフルに稼ぐならレバテックフリーランスです。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どちらもフリーランス（求職者）側は無料で利用できます。理由は次の比較表と項目別解説で見ていきます。</p>
        </section>

        <section id="confusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">混同しやすいサービスの整理</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">名前が似ているため、違いを押さえてから読み進めてください。</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>レバテックフリーランス（業務委託案件の紹介）≠ レバテックキャリア（正社員転職エージェント）</strong>。運営は同じレバテック株式会社ですが契約形態が違います。</li>
              <li>本記事はいずれも<strong>フリーランス・副業案件</strong>の比較です。正社員転職を希望する場合は対象外です。</li>
            </ul>
            <p className="mt-2">正社員かフリーランスかで迷う方は<Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスと正社員の比較</Link>を先にご覧ください。</p>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ITプロパートナーズ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックフリーランス</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 案件数・登録者数・単価・少日数比率は二次情報・時点付きの参考値です。稼働日数の割合は媒体により幅があり断定しません。求人数・案件数は時期により変動します。</p>
        </section>

        <section id="kadoubi" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：稼働日数・働き方（主戦場）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">この比較の主戦場は稼働日数です。<strong>ITプロパートナーズは週2〜3日・リモートの案件が業界トップクラス</strong>で、少日数案件が3〜4割（2024年7月時点・二次）とされます。本業や自分の事業と並行しやすく、フルコミットではない働き方を作れるのが最大の強みです。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>レバテックフリーランスは週5常駐の高単価案件が中心</strong>で、少日数案件は相対的に少なめです。フルに稼働して収入を最大化する設計のため、すでに独立して稼働を切らさず回せる経験者に向きます。なお「公開案件の約6割が週3日以下」といった割合は媒体によって示され方が異なり、時点や集計でばらつくため、本記事では断定しません。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p><strong>まとめ：</strong>週2〜3日で柔軟に働くならITプロパートナーズ、週5でフルに稼ぐならレバテックフリーランス。リモート希望なら<Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート求人に強いエージェント比較</Link>もあわせてご覧ください。</p>
          </div>
        </section>

        <section id="tanka" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：単価・直請け</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ITプロパートナーズは<strong>エンド直約9割</strong>で、間に多重下請けが入りにくいぶん少日数でも単価が高めとされます。週2〜3日でも一定の単価を確保できる点が、副業・独立準備層に支持される理由です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックフリーランスは利用者平均年収881万円・平均単価68万円・中央値65万円・最高145万円という二次値があります（時点に留意。異なる時点の値は並べないのが安全です）。これは週5常駐でフルに稼ぐ前提での水準であり、同じ稼働量なら高単価を狙いやすいのはレバテックフリーランスです。単価そのものの上限を取りに行くか、少日数で効率を取るかの違いになります。</p>
        </section>

        <section id="kensu" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：案件量・対象</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ITプロパートナーズは公開約10,000件、利用企業2,000社以上、登録90,000名以上（2024年7月時点・二次）という規模です。スタートアップ・ベンチャー系の案件や、少日数で参画できる案件に強みがあります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックフリーランスは公開1万件以上（公式で約97,000件以上という二次値あり・時点要確認）と案件量が豊富な最大手級で、週5常駐の高単価案件の母数が大きいのが特徴です。どちらも実務経験のあるエンジニアが対象で、未経験に近い場合は紹介が難しい点は共通します。なお保障の有無で迷う場合は<Link href="/compare/levtech-freelance-vs-midworks/" className="text-petrol hover:underline">レバテックフリーランス vs Midworks</Link>もご覧ください。</p>
        </section>

        <section id="fukugyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：副業・独立準備のしやすさ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">副業・独立準備という観点では、ITプロパートナーズが明確に向いています。週2〜3日の案件で生活費や運転資金を確保しつつ、残りの時間を自分の事業・学習・OSS活動などに充てる、という移行のしやすさが理由です。エンド直約9割で単価も確保しやすく、いきなり週5にコミットするリスクを避けながら独立に近づけます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">一方、すでに独立してフルに稼ぐ段階なら、レバテックフリーランスの週5高単価が合います。副業の可否は勤務先の就業規則に左右されるため、会社員のうちは必ず副業規定を確認してください。副業・複業の進め方は<Link href="/knowledge/side-project/" className="text-petrol hover:underline">副業・サイドプロジェクトの始め方</Link>も参考になります。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はフリーランス向け口コミメディアで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ITプロパートナーズの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>週2〜3日・リモート案件が豊富</li><li>エンド直で単価が高め</li><li>独立・起業準備に使いやすい</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>週5常駐前提だと選択肢が他社より少ない</li><li>正社員志向には不向き</li><li>案件はスタートアップ寄りの傾向</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：各フリーランス系メディアの傾向要約</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックフリーランスの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>高単価・エンド直請けの案件が多い</li><li>案件量が豊富で選択肢が広い</li><li>最大手級で安心感がある</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>少日数・週2〜3日案件は少なめ</li><li>実務経験前提で未経験には不向き</li><li>首都圏中心で地方案件が少ない</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：各フリーランス系メディアの傾向要約</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">ITプロパートナーズが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodItpro.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックフリーランスが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodLev.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだミドルは、稼働日数を自分でデザインできる立場にあります。30代と40代では、最適な稼働の作り方が変わります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>本業で技術を磨きつつ、ITプロパートナーズの週2〜3日案件で複数の現場経験や収入源を作る、という攻め方が有効です。将来の独立・起業に向けて少しずつ準備したい30代に、少日数案件は実験の場になります。フルに独立して稼ぐ段階に入ったら、レバテックフリーランスの週5高単価に切り替える流れが自然です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>家族・住宅ローンなど固定費が大きくなる年代です。いきなり週5フルコミットの独立はリスクが高いと感じるなら、<strong>ITプロパートナーズの週2〜3日案件で収入を分散させながら独立に慣れていく</strong>のが現実的です。マネジメントや要件定義の経験を持つ40代は、少日数でも高めの単価を提示されやすい傾向があります。一方、稼働を管理でき体力にも余裕があるなら、レバテックフリーランスの週5高単価で手取りを最大化する選択も十分あります。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">安定雇用を手放すことに迷いがあるなら、正社員エージェントの活用も選択肢です。フリーランス全体の比較は<Link href="/compare/freelance-agents/" className="text-petrol hover:underline">フリーランスエージェント比較</Link>をご覧ください。</p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">独立は「稼働日数」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">週2〜3日の副業・独立準備ならITプロパートナーズ、週5常駐でフルに稼ぐならレバテックフリーランス。自分の働き方に合うほうを選びましょう。</p>
          <Link href="/compare/freelance-agents/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">フリーランスエージェント比較を見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックフリーランス vs Midworks 比較", href: "/compare/levtech-freelance-vs-midworks/" },
              { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
              { name: "フリーランスと正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "ITプロパートナーズの評判・口コミ", href: "/review/itpropartners/" },
              { name: "レバテックフリーランスの評判・口コミ", href: "/review/levtech-freelance/" },
              { name: "副業・サイドプロジェクトの始め方", href: "/knowledge/side-project/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
