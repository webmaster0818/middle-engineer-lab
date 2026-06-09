import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ビズリーチとリクルートダイレクトスカウト比較【2026年6月】",
  description:
    "ビズリーチとリクルートダイレクトスカウトを審査・料金・スカウト主体・年収帯で比較。無料で気軽に使うか質で選ぶか、IT特化でないハイクラススカウト型の使い分けと30代40代エンジニアの併用術を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "naming", label: "用語整理：リクルートダイレクトスカウトとは" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "shinsa", label: "違い①：審査の有無" },
  { id: "ryokin", label: "違い②：料金体系" },
  { id: "scout", label: "違い③：スカウトの主体（企業担当 vs ヘッドハンター）" },
  { id: "salary", label: "違い④：年収帯・求人の質" },
  { id: "it", label: "ITエンジニアの使い方（IT特化ではない点に注意）" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "サービス形態", a: "ハイクラス特化のスカウト型プラットフォーム（審査あり）", b: "ハイクラススカウト型サービス（審査なし・完全無料）" },
  { item: "運営", a: "株式会社ビズリーチ（ビジョナルグループ・東証プライム上場）", b: "リクルート系（正式運営会社名は要確認）" },
  { item: "審査", a: "登録時に審査あり（経歴次第で利用範囲に差）", b: "審査なし。誰でも登録可能" },
  { item: "料金", a: "無料会員あり。一部機能は有料プラン（Web決済5,478円/月・2022年11月改定・二次）前提", b: "完全無料" },
  { item: "スカウト主体", a: "企業の採用担当・登録ヘッドハンター", b: "ヘッドハンター・企業スカウト" },
  { item: "規模", a: "導入企業41,800社以上・登録ヘッドハンター9,700人以上（2025年4月・二次）・登録282万人（2025年4月・二次）", b: "公開求人 約59.3万件・年収800万以上 約34.7万件（二次2026年2月）・毎月約2万人新規登録" },
  { item: "年収帯", a: "年収1,000万円以上の求人が全体の約4割（二次）。年収750万以上が一つの目安", b: "年収600〜2,000万のミドル〜ハイクラス。転職後平均年収950万（二次）" },
  { item: "IT特化", a: "IT特化ではない（全業種のハイクラス）", b: "IT特化ではない（全業種のハイクラス）" },
];

const faqs = [
  { q: "ビズリーチとリクルートダイレクトスカウトの最大の違いは何ですか？", a: "大きな違いは『審査』と『料金』の2点です。ビズリーチは登録時に審査があり、すべてのスカウト閲覧など一部機能は有料プラン（Web決済5,478円/月・2022年11月改定の二次情報）が前提です。リクルートダイレクトスカウトは審査なしで誰でも登録でき、完全無料です。無料で気軽に始めたいならリクルートダイレクトスカウト、スカウトの質や厳選された求人を重視するならビズリーチが向きます。" },
  { q: "リクルートダイレクトスカウトはリクルートエージェントと同じですか？", a: "別物です。リクルートダイレクトスカウトはスカウトを『待つ』ハイクラススカウト型サービスで、ヘッドハンターや企業から声がかかります。リクルートエージェントは担当が求人を『提案する』エージェント型です。名前が似ていますが仕組みが異なるため、混同にご注意ください。" },
  { q: "どちらも無料で使えますか？", a: "リクルートダイレクトスカウトは完全無料です。ビズリーチには無料会員プランがありますが、すべてのスカウト閲覧など一部機能は有料プラン（Web決済5,478円/月・2022年11月改定の二次情報）が前提になります。まずは両方無料で登録し、ビズリーチのスカウトの質を見てから有料化を検討するのが現実的です。" },
  { q: "ITエンジニアでも使えますか？IT特化ではないと聞きました。", a: "どちらもIT特化サービスではなく、全業種のハイクラス求人を扱います。ただし、ITエンジニアが年収レンジを一段上げる（特に管理職・上方転職）用途では有効です。IT専門の現場情報や技術理解を求める場合は、IT特化のエージェントやスカウトサービスとの併用が安全です。スカウト型全体の選び方は記事内のリンクをご覧ください。" },
  { q: "経歴に自信がないとスカウトは来ませんか？", a: "ビズリーチはハイクラス特化のため、経歴次第ではスカウトが来にくいという声があります（口コミ傾向）。リクルートダイレクトスカウトも経歴次第でスカウトの量が左右されますが、審査なしで登録できるため、まず登録して市場の反応を見る使い方ができます。実務経験のあるエンジニアであれば、両方登録して反応を比較するのがおすすめです。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "どちらも有効です。ビズリーチはCTO・VPoE・EMなどの管理職スカウトや外資求人に強く、マネジメント志向の40代と相性が良い傾向です。リクルートダイレクトスカウトは完全無料・審査なしで気軽に市場価値を測れるため、まず相場を確認したい30代・40代に向きます。両方登録して、届くスカウトの質と量を比較するのが合理的です。" },
];

const goodBiz = [
  "厳選された質の高いスカウトを受けたい",
  "CTO・VPoE・EMなど管理職／経営層を狙う",
  "外資系やコンサルにも興味がある",
  "有料プランを使ってでも本格的に動きたい",
  "市場価値を客観的に測りたい（審査の通過自体が指標になる）",
];
const goodRDS = [
  "完全無料で気軽に始めたい",
  "審査なしでまず登録してみたい",
  "手間をかけず待ちのスタイルで市場価値を測りたい",
  "年収600万円以上のミドル〜ハイクラスを狙う",
  "メーカー・コンサル・商社など幅広い業種も視野にある",
];

export default function BizreachVsRdsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ビズリーチとリクルートダイレクトスカウトの比較｜どっちがおすすめか" description="ビズリーチとリクルートダイレクトスカウトを審査・料金・スカウト主体・年収帯で比較。30代40代エンジニアの使い分けと併用術を解説します。" url="/compare/bizreach-vs-recruit-direct-scout/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ビズリーチ vs リクルートダイレクトスカウト" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ビズリーチとリクルートダイレクトスカウトを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 審査あり・有料プラン型 と 審査なし・完全無料型 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「ビズリーチ リクルートダイレクトスカウト 比較」で検索する方の多くは、どちらのハイクラススカウトに登録すべきか、料金をかけるべきかで迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを「審査」「料金」「スカウト主体」「年収帯」で比較し、IT特化ではない点を踏まえた使い分けと併用術まで整理しました。</p>

        <DataNote surveyedAt="2026年6月" sources={["ビズリーチ公式会社概要", "リクルートダイレクトスカウト公式", "各転職メディアの集計値（求人数・登録者数等）", "みん評等の口コミメディア集計"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・無料で気軽に始めたいなら「リクルートダイレクトスカウト」</strong>。審査なし・完全無料で、まず市場価値を測れます。</li>
              <li><strong>・スカウトの質・厳選された求人を重視するなら「ビズリーチ」</strong>。審査ありで、ハイクラスに特化しています。</li>
              <li><strong>・迷うなら両方登録（併用）</strong>。完全無料のリクルートダイレクトスカウトで反応を見つつ、ビズリーチで質の高いスカウトを比較するのが、30代・40代には合理的です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どちらもIT特化ではありませんが、年収レンジを一段上げる用途では有効です。詳しくは項目別に見ていきましょう。</p>
        </section>

        <section id="naming" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">用語整理：リクルートダイレクトスカウトとは</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700">
            <p className="mb-2"><strong>名前が似ているサービスとの混同に注意してください。</strong></p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>リクルートダイレクトスカウト（RDS）</strong>＝スカウトを『待つ』ハイクラススカウト型サービス。ヘッドハンターや企業から声がかかります。<u>本記事で比較しているのはこれ</u>です。</li>
              <li><strong>リクルートエージェント</strong>＝担当が求人を『提案する』エージェント型サービス。仕組みが異なります。</li>
            </ul>
            <p className="mt-2">本記事はビズリーチと『リクルートダイレクトスカウト』の比較です。リクルートエージェントとは別物としてお読みください。</p>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ビズリーチ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートダイレクトスカウト</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・求人数・登録者数は2026年6月時点の公式または転職メディア集計値で、変動が大きく多くが二次情報です。料金は2022年11月改定の二次情報、リクルートダイレクトスカウトの求人数は2026年2月時点の二次情報です。</p>
        </section>

        <section id="shinsa" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い①：審査の有無</h2>
          <p className="text-slate-600 leading-relaxed mb-4">最初の大きな違いが審査です。ビズリーチは登録時に審査があり、経歴次第で利用範囲に差が出ます。ハイクラスに振り切っているため、審査を通過すること自体が一つの市場価値の目安にもなります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトは審査がなく、誰でも登録できます。まず登録して市場の反応（届くスカウトの量と質）を見たい人にとって、敷居が低いのが利点です。「気軽に試したい」ならリクルートダイレクトスカウト、「ハイクラスの厳選環境で動きたい」ならビズリーチという整理になります。</p>
        </section>

        <section id="ryokin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い②：料金体系</h2>
          <p className="text-slate-600 leading-relaxed mb-4">2つ目の違いが料金です。リクルートダイレクトスカウトは完全無料で、追加費用なしですべての機能を使えます。コストをかけずにハイクラススカウトを試せる点が最大の強みです。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチには無料会員プランがありますが、すべてのスカウトの閲覧や一部機能の利用には有料プラン（Web決済5,478円/月・2022年11月改定の二次情報）が前提になります。質の高いスカウト環境を有料で確保するという考え方です。まずは両方無料で試し、ビズリーチのスカウトの質を確認してから有料化を判断するのが現実的です。</p>
        </section>

        <section id="scout" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い③：スカウトの主体（企業担当 vs ヘッドハンター）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチでは、企業の採用担当者と登録ヘッドハンター（9,700人以上・2025年4月・二次）の双方からスカウトが届きます。企業から直接届くスカウトは志望度が伝わりやすく、ヘッドハンター経由は非公開求人や交渉のサポートが期待できます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトもヘッドハンターと企業からのスカウトが中心で、ヘッドハンターの質にばらつきがあるという声もあります（口コミ傾向）。どちらもヘッドハンター主導の側面があるため、誰から届いたスカウトかを確認し、本気度を見極めることが大切です。スカウトの見分け方は<Link href="/compare/scout-agents/" className="text-blue-600 hover:underline">スカウト型サービス比較</Link>の「怪しいスカウトの見分け方」をご覧ください。</p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違い④：年収帯・求人の質</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチは年収750万円以上が一つの目安とされ、年収1,000万円以上の求人が全体の約4割（二次情報）と、上限の高さが際立ちます。導入企業41,800社以上・登録282万人（いずれも2025年4月・二次）という規模で、ハイクラス求人の厚みがあります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートダイレクトスカウトは公開求人約59.3万件・年収800万円以上が約34.7万件（二次2026年2月）と量が豊富で、転職後の平均年収は950万円（二次）とされています。年収600〜2,000万円のミドル〜ハイクラスを幅広くカバーします。上限の質ならビズリーチ、無料で量を当たるならリクルートダイレクトスカウト、という棲み分けです。</p>
        </section>

        <section id="it" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITエンジニアの使い方（IT特化ではない点に注意）</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">どちらもIT特化サービスではなく、全業種のハイクラス求人を扱います。そのため、IT専門の現場情報や技術理解の深いサポートを期待するサービスではありません。<strong>ただし、ITエンジニアが年収レンジを一段上げる（特に管理職・上方転職）用途では有効</strong>です。</p>
            <p>技術理解の深い提案や現場情報が欲しい場合は、IT特化のエージェント（<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>）や、GitHub軸のスカウト型（<Link href="/compare/findy-vs-levtech/" className="text-blue-600 hover:underline">Findy vs レバテック</Link>）との併用が安全です。</p>
          </div>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はみん評・各種転職メディア等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>高年収求人が豊富</li><li>市場価値を客観的に把握できる</li><li>厳選された質の高いスカウト</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>経歴次第でスカウトが来ない</li><li>有料プラン前提との不満</li><li>スカウトの質にばらつき</li></ul>
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
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">ビズリーチが向いている人</h3>
              <ul className="space-y-2 text-sm text-blue-700">{goodBiz.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
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
                { num: "1", title: "まずリクルートダイレクトスカウト（無料）", desc: "審査なし・完全無料で登録し、届くスカウトの量と質で市場の反応を確認します。コストゼロで相場感をつかめます。" },
                { num: "2", title: "ビズリーチで質を確認", desc: "審査を通過してハイクラスの厳選環境に入り、スカウトの質を比較。有料プランは、無料で手応えを感じてから検討します。" },
                { num: "3", title: "併用で比較（推奨）", desc: "両方のスカウトを並べて、企業担当・ヘッドハンターの本気度や年収レンジを比較。最も有利な条件で意思決定します。IT専門サポートが必要ならIT特化サービスを追加します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント複数利用のコツ</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代の市場価値は高く、ハイクラススカウト型は「年収レンジを一段上げる」用途で力を発揮します。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>まだ年収の伸びしろが大きい時期です。完全無料のリクルートダイレクトスカウトで気軽に相場を測り、手応えがあればビズリーチで質の高いスカウトを比較する流れが負担なく進められます。レバテック公表の年代別平均年収（2025年）では30代のSEは約499万円が一つの目安で、ハイクラス型のスカウトで上限を知っておくと交渉に役立ちます。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>ビズリーチはCTO・VPoE・EMといった管理職・経営層ポジションのスカウトや外資求人に強く、マネジメント経験のある40代と噛み合います。年収1,000万円以上の割合は40代で12.67%（レバテック公表・2025年）とされ、上限を狙える層です。一方、両サービスともIT特化ではないため、技術理解の深い提案が欲しい場面ではIT特化サービスを併せて確保しておくと安心です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>もご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">無料で測って、質で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">完全無料のリクルートダイレクトスカウトで相場を測り、ビズリーチで質の高いスカウトを比較。30代・40代の年収アップに合理的な二段構えです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ビズリーチの評判・口コミ", href: "/review/bizreach-it/" },
              { name: "リクルートダイレクトスカウトの評判", href: "/review/recruit-direct-scout/" },
              { name: "dodaX vs リクルートダイレクトスカウト 比較", href: "/compare/doda-x-vs-recruit-direct-scout/" },
              { name: "ビズリーチ vs レバテック 比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "スカウト型サービス徹底比較", href: "/compare/scout-agents/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
