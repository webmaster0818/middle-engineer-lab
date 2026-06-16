import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "dodaXとリクルートダイレクトスカウト比較【2026年6月】",
  description:
    "dodaXとリクルートダイレクトスカウトを応募形態・得意領域・年収帯で比較。自分でも応募したいか完全に待ちたいか、IT特化でないハイクラススカウト型の使い分けと、dodaブランドの混同回避を30代40代視点で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "naming", label: "用語整理：dodaXとリクルートダイレクトスカウトとは" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "form", label: "違い①：応募形態（自己応募の可否）" },
  { id: "field", label: "違い②：得意領域・職種" },
  { id: "salary", label: "違い③：年収帯・求人ボリューム" },
  { id: "it", label: "ITエンジニアの使い方（IT特化ではない点に注意）" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "サービス形態", a: "ハイクラススカウト型『エージェント』（担当による紹介＋自己応募も可能）", b: "ハイクラススカウト型『サイト』（基本はスカウト経由の応募・AI活用）" },
  { item: "運営", a: "パーソルキャリア株式会社（旧iX転職・2022年10月にdoda Xへ改称）", b: "リクルート系（正式運営会社名は要確認）" },
  { item: "応募の動き方", a: "ヘッドハンターからの紹介に加え、自分でも求人に応募できる", b: "登録して待ち、届いたスカウトに応募するのが基本" },
  { item: "規模", a: "公開求人 106,491件・年収800万以上 95,069件・1,000万以上 50,902件（二次2026年5月）・ヘッドハンター約7,300人（2025年4月）", b: "公開求人 約59.3万件・年収800万以上 約34.7万件（二次2026年2月）・毎月約2万人新規登録" },
  { item: "得意領域", a: "IT/Web・メーカー・営業に強い", b: "メーカー・コンサル・商社に強い" },
  { item: "年収帯", a: "年収800〜1,000万円超のハイクラス全業種。再利用意向89.8%（二次）", b: "年収600〜2,000万のミドル〜ハイクラス。転職後平均年収950万（二次）" },
  { item: "料金", a: "完全無料", b: "完全無料" },
  { item: "IT特化", a: "IT特化ではない（IT/Webにも強い全業種ハイクラス）", b: "IT特化ではない（全業種のハイクラス）" },
];

const faqs = [
  { q: "dodaXとリクルートダイレクトスカウトの最大の違いは何ですか？", a: "応募の動き方が違います。dodaXはハイクラススカウト型の『エージェント』で、ヘッドハンターからの紹介に加えて自分でも求人に応募できます。リクルートダイレクトスカウトはハイクラススカウト型の『サイト』で、登録して待ち、届いたスカウトに応募するのが基本です。自分でも能動的に動きたいならdodaX、手間をかけず待ちたいならリクルートダイレクトスカウトが向きます。どちらも完全無料です。" },
  { q: "dodaXは、dodaやdoda ITと同じサービスですか？", a: "いずれも別サービスです。dodaXはハイクラススカウト型（旧iX転職・2022年10月にdoda Xへ改称）で、ヘッドハンターや企業からスカウトが届き、自己応募もできます。dodaのIT特化エージェント（doda IT）は担当が伴走するエージェント型、総合転職サービスのdodaはまた別の枠組みです。dodaブランドで混同しやすいので、ハイクラススカウト＋自己応募がdodaX、IT特化の伴走がdoda IT、と区別してください。" },
  { q: "リクルートダイレクトスカウトはリクルートエージェントと同じですか？", a: "別物です。リクルートダイレクトスカウトはスカウトを『待つ』ハイクラススカウト型サービスです。リクルートエージェントは担当が求人を『提案する』エージェント型です。名前は似ていますが仕組みが異なるため、混同にご注意ください。" },
  { q: "ITエンジニアにはどちらが向いていますか？", a: "IT/Web領域に強いのはdodaXです。dodaXはIT/Web・メーカー・営業を得意とし、エンジニアのハイクラス求人も扱います。リクルートダイレクトスカウトはメーカー・コンサル・商社に強く、求人量自体は豊富です。IT/Web中心に上方転職を狙うならdodaX、幅広い業種から量を当たるならリクルートダイレクトスカウト、と使い分けるとよいでしょう。ただしどちらもIT特化サービスではありません。" },
  { q: "どちらも完全無料ですか？", a: "はい、dodaXもリクルートダイレクトスカウトも求職者は完全無料です。追加費用なしで利用できるため、まず両方登録して、届くスカウトの質・量や自己応募できる求人を比較するのが効率的です。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "どちらも有効です。dodaXは再利用意向89.8%（二次）と満足度が高く、IT/Webに強いため、年収700万円超を狙う40代のマネージャー層や、自分でも応募して主体的に動きたい30代と相性が良い傾向です。リクルートダイレクトスカウトは完全無料・待ち型で求人量が豊富なため、手間をかけず相場を測りたい層に向きます。両方登録して比較するのが合理的です。" },
];

const goodDodaX = [
  "ヘッドハンター紹介だけでなく、自分でも応募したい",
  "IT/Web・メーカー・営業領域で上方転職を狙う",
  "年収800万円以上のハイクラスを目指す",
  "満足度・再利用意向の高いサービスを使いたい",
  "主体的に動きたい30代・年収700万超の40代",
];
const goodRDS = [
  "完全無料・手間をかけず待ちのスタイルが良い",
  "メーカー・コンサル・商社も視野にある",
  "とにかく多くの求人・スカウトに当たりたい",
  "年収600〜2,000万のミドル〜ハイクラスを狙う",
  "まず相場を測りたい",
];

export default function DodaXVsRdsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="dodaXとリクルートダイレクトスカウトの比較｜どっちがおすすめか" description="dodaXとリクルートダイレクトスカウトを応募形態・得意領域・年収帯で比較。dodaブランドの混同回避と、30代40代エンジニアの使い分けを解説します。" url="/compare/doda-x-vs-recruit-direct-scout/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "dodaX vs リクルートダイレクトスカウト" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">dodaXとリクルートダイレクトスカウトを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 自己応募もできるスカウト型エージェント と 待ち型スカウトサイト を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「dodaX リクルートダイレクトスカウト 比較」で検索する方の多くは、どちらのハイクラススカウトに登録すべきか、自分でも応募したいかどうかで迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを「応募形態」「得意領域」「年収帯」で比較し、dodaブランドの混同回避とIT特化ではない点を踏まえた使い分けまで整理しました。どちらも完全無料です。</p>

        <DataNote surveyedAt="2026年6月" sources={["dodaX公式（ヘッドハンター数2025年4月・再利用意向等）", "リクルートダイレクトスカウト公式", "各転職メディアの集計値（求人数2026年5月/2月等）", "みん評等の口コミメディア集計"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・自分でも応募したい・IT/Web/メーカー領域なら「dodaX」</strong>。ヘッドハンター紹介に加えて自己応募もできます。</li>
              <li><strong>・完全無料で手間をかけず待ちたいなら「リクルートダイレクトスカウト」</strong>。求人量が豊富で、登録して待つだけです。</li>
              <li><strong>・迷うなら両方登録（併用）</strong>。どちらも完全無料なので、自己応募できる求人と届くスカウトを比較するのが、30代・40代には合理的です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どちらもIT特化ではありませんが、dodaXはIT/Webに強く、年収レンジを上げる用途で有効です。詳しくは項目別に見ていきましょう。</p>
        </section>

        <section id="naming" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">用語整理：dodaXとリクルートダイレクトスカウトとは</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700">
            <p className="mb-2"><strong>名前が似ている／ブランドが重なるサービスとの混同に注意してください。</strong></p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>dodaX</strong>＝ハイクラススカウト型『エージェント』（旧iX転職・2022年10月改称）。スカウトに加えて自己応募も可能。<u>本記事の比較対象です</u>。総合転職サービスの<strong>doda</strong>や、IT特化エージェントの<strong>doda IT</strong>とは別物です。</li>
              <li><strong>リクルートダイレクトスカウト（RDS）</strong>＝スカウトを『待つ』ハイクラススカウト型サイト。<u>本記事の比較対象です</u>。担当が提案する<strong>リクルートエージェント</strong>とは別物です。</li>
            </ul>
            <p className="mt-2">「doda」「doda IT」「dodaX」、そして「リクルートエージェント」「リクルートダイレクトスカウト」は、それぞれ仕組みが異なる別サービスです。</p>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">dodaX</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートダイレクトスカウト</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・求人数・登録者数は2026年6月時点の公式または転職メディア集計値で、変動が大きく多くが二次情報です。dodaXの求人数は2026年5月時点、リクルートダイレクトスカウトの求人数は2026年2月時点の二次情報です。</p>
        </section>

        <section id="form" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い①：応募形態（自己応募の可否）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">最大の違いが応募の動き方です。dodaXはハイクラススカウト型の『エージェント』で、ヘッドハンター（約7,300人・2025年4月）からの紹介を受けられるだけでなく、自分でも気になる求人に応募できます。スカウトを待つだけでなく、能動的に動ける自由度の高さが特徴です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトはハイクラススカウト型の『サイト』で、レジュメを登録して待ち、届いたスカウトに応募するのが基本の流れです。AIを活用したマッチングで、手間をかけずに待てるのが利点です。「自分でも応募して主体的に動きたい」ならdodaX、「登録して待ちたい」ならリクルートダイレクトスカウト、という整理になります。</p>
        </section>

        <section id="field" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い②：得意領域・職種</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaXはIT/Web・メーカー・営業に強みがあります。ITエンジニアのハイクラス求人も扱うため、IT/Web領域で年収を上げたいエンジニアにとって相性が良いサービスです。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトはメーカー・コンサル・商社に強く、求人量自体が豊富（公開約59.3万件・二次2026年2月）です。IT以外の業種も視野に入れて幅広く当たりたい場合に向きます。IT/Web中心ならdodaX、業種を広く見るならリクルートダイレクトスカウト、という棲み分けです。</p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い③：年収帯・求人ボリューム</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaXは年収800万円以上の求人が95,069件、1,000万円以上が50,902件（いずれも二次2026年5月）と、ハイクラス帯の比率の高さが際立ちます。公開求人106,491件のうち高年収帯が厚く、再利用意向89.8%（二次）という満足度の高さも特徴です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトは公開求人約59.3万件と量が圧倒的で、年収800万円以上が約34.7万件（二次2026年2月）、転職後の平均年収は950万円（二次）とされています。年収600〜2,000万円のミドル〜ハイクラスを幅広くカバーします。高年収帯の比率ならdodaX、総量で当たるならリクルートダイレクトスカウト、という違いです。</p>
        </section>

        <section id="it" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITエンジニアの使い方（IT特化ではない点に注意）</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">dodaXもリクルートダイレクトスカウトもIT特化サービスではなく、全業種のハイクラス求人を扱います。<strong>ただし、ITエンジニアが年収レンジを一段上げる（特に管理職・上方転職）用途では有効</strong>です。とりわけdodaXはIT/Webに強いため、エンジニアのハイクラス転職と相性が良い側面があります。</p>
            <p>技術理解の深い提案や現場情報が欲しい場合は、IT特化のエージェント（<Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント10社比較</Link>）や、GitHub軸のスカウト型（<Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型サービス比較</Link>）との併用が安全です。</p>
          </div>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はみん評・各種転職メディア等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">dodaXの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>年収800万円以上の比率が高い</li><li>ヘッドハンターの質が良い</li><li>自分でも応募できて動きやすい</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>経歴次第でスカウトが来ない</li><li>ハイクラス未満には物足りない</li><li>IT特化ではない</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：みん評／各転職メディア集計</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートダイレクトスカウトの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>完全無料で使える</li><li>高年収・非公開求人が多い</li><li>求人量が豊富</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>経歴次第でスカウトが来ない</li><li>ヘッドハンターの質にばらつき</li><li>現職バレが不安という声</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：みん評／各転職メディア集計</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">dodaXが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodDodaX.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">リクルートダイレクトスカウトが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodRDS.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "dodaXで主体的に動く", desc: "IT/Web・メーカー領域でヘッドハンター紹介を受けつつ、気になる求人には自分でも応募。高年収帯の比率の高さを活かして上方転職を狙います。" },
                { num: "2", title: "リクルートダイレクトスカウトで量を当たる", desc: "完全無料・待ち型で求人量が豊富。レジュメを登録して、メーカー・コンサル・商社も含む幅広いスカウトを受け取ります。" },
                { num: "3", title: "併用で比較（推奨）", desc: "両方のスカウト・自己応募求人を比較し、年収レンジや本気度を見極めます。IT専門の提案が必要ならIT特化サービスを追加します。どちらも無料なので併用にコストはかかりません。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代の市場価値は高く、ハイクラススカウト型は「年収レンジを一段上げる」用途で力を発揮します。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>主体的に動きたい時期です。dodaXは自己応募もできるため、ヘッドハンター任せにせず自分のペースで上方転職を進められます。IT/Webに強い点もエンジニアに有利です。レバテック公表の年代別平均年収（2025年）では30代のSEは約499万円が一つの目安で、ハイクラス型で上限を知っておくと交渉に役立ちます。完全無料のリクルートダイレクトスカウトを併用すれば、業種の幅も広げられます。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>dodaXは再利用意向89.8%（二次）と満足度が高く、年収800万円以上の比率が厚いため、年収700万円超のマネージャー層の上方転職に向きます。年収1,000万円以上の割合は40代で12.67%（レバテック公表・2025年）とされ、上限を狙える層です。両サービスともIT特化ではないため、技術理解の深い提案が欲しい場面ではIT特化サービスを併せて確保しておくと安心です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">動きたいか、待ちたいか</h2>
          <p className="text-blue-100 text-sm mb-4">自分でも応募して主体的に動くならdodaX、完全無料で待ちたいならリクルートダイレクトスカウト。どちらも無料なので併用で比較するのが30代・40代に合理的です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "dodaXの評判・口コミ", href: "/review/doda-x/" },
              { name: "リクルートダイレクトスカウトの評判", href: "/review/recruit-direct-scout/" },
              { name: "ビズリーチ vs リクルートダイレクトスカウト 比較", href: "/compare/bizreach-vs-recruit-direct-scout/" },
              { name: "スカウト型サービス徹底比較", href: "/compare/scout-agents/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "doda IT のエージェント（doda-it レビュー）", href: "/review/doda-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
