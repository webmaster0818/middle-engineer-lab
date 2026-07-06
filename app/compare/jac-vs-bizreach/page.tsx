import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/jac-vs-bizreach/" },
  title: "JACとビズリーチの比較｜40代ハイクラスはどっち【2026年6月】",
  description:
    "JACリクルートメントとビズリーチを求人数・サポート・40代適性で徹底比較。両面型エージェントとスカウト型プラットフォームの違い、競合ではなく補完として使う併用術、口コミ傾向まで30代40代エンジニア向けに解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：競合ではなく補完で使う" },
  { id: "confusion", label: "混同しやすいサービスの整理" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "type", label: "項目別比較①：サービス形態の違い" },
  { id: "kyujin", label: "項目別比較②：求人数と質" },
  { id: "support", label: "項目別比較③：サポート・交渉力" },
  { id: "target", label: "項目別比較④：40代ハイクラス適性" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "補完しあう併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "株式会社JACリクルートメント（東証プライム上場）", b: "株式会社ビズリーチ（ビジョナルグループ・東証プライム上場）" },
  { item: "サービス形態", a: "両面型エージェント（1人のコンサルが企業・求職者の双方を担当）", b: "ハイクラス特化のスカウト型プラットフォーム" },
  { item: "動き方", a: "コンサルが求人提案・推薦・交渉まで代行する「攻め」", b: "プロフィールを整えてスカウトを待つ「待ち」" },
  { item: "求人数", a: "媒体により割れ確認不可。約21,000件という二次値あり（2024年11月時点・二次）。数より質・非公開求人に強み", b: "約140,000件という二次値あり（2024年11月時点・二次）。導入企業41,800社以上（累計）" },
  { item: "対象層", a: "主に30〜50代。年収500万円以上が目安、600万円以上が一つのライン（二次）", b: "年収750万円以上が一つの目安とされるハイクラス全般（二次）" },
  { item: "得意領域", a: "上場企業・外資・管理職・専門職。ITも扱う（IT特化ではない）", b: "ハイクラス全般。外資・管理職・高年収。ITも扱う（IT特化ではない）" },
  { item: "40代対応", a: "40代でも応募可能な求人が複数。公式に40代向けIT特設ページあり", b: "利用者層に40代も多いとされる（割合は二次・時点に留意）" },
  { item: "料金", a: "求職者は完全無料", b: "無料会員あり。有料プランはWeb決済5,478円/月（2022年11月改定・二次）" },
];

const faqs = [
  { q: "JACリクルートメントとビズリーチの最大の違いは何ですか？", a: "動き方が真逆です。ビズリーチは年収750万円以上が一つの目安とされるハイクラス特化のスカウト型プラットフォームで、プロフィールを整えて企業やヘッドハンターからのスカウトを「待つ」仕組みです。JACリクルートメントは両面型エージェントで、1人のコンサルタントが企業側と求職者側の双方を担当し、求人提案・推薦・年収交渉まで代行してくれる「攻め」のサービスです。市場価値を測りたいならビズリーチ、交渉ごと任せたいならJACという整理ができます。" },
  { q: "JACとビズリーチはどちらか一方でよいですか？併用すべきですか？", a: "本記事の結論は「競合ではなく補完なので併用が最強」です。役割が重ならないためです。ビズリーチで届くスカウトから自分の市場価値と相場観を客観的に把握し、JACのコンサルタントに具体的な選考と年収交渉を任せる、という二段構えが30代・40代には最も合理的です。どちらも登録・利用は可能で、ビズリーチは無料会員から始められます。" },
  { q: "求人数はビズリーチの方が圧倒的に多いですが、JACを使う意味はありますか？", a: "あります。求人数は約21,000件（JAC）対約140,000件（ビズリーチ）という二次値（いずれも2024年11月時点・二次情報）があり、数だけ見ればビズリーチが多いのは事実です。ただしJACは「数より質」「非公開求人」に強みがあり、上場企業・外資・管理職といった求人の精度とコンサルの交渉力が価値です。母数を広く見るのがビズリーチ、絞り込んだ質と交渉でJAC、と役割が違います。" },
  { q: "40代のエンジニアでも門前払いされませんか？", a: "JACは公式に40代向けのIT特設ページを持ち、40代でも応募可能な求人が複数あるとされ、30〜50代を主なターゲットにしています。満足度93%（二次）という数値も公表されています。ただし年収500万円未満や未経験の場合は紹介が難しく門前払い感が出ることもあります。ビズリーチも経歴次第でスカウトの量が左右されます。実績を整理して伝えれば、40代でも両サービスとも十分に使えます。" },
  { q: "ビズリーチの有料プランは必要ですか？", a: "まずは無料会員で始められます。すべてのスカウトの閲覧や一部機能にはWeb決済5,478円/月（2022年11月改定・二次情報）の有料プランが用意されています。JACは求職者完全無料です。現実的には、ビズリーチ無料会員で届くスカウトの質を見たうえで有料化を判断しつつ、JACのコンサルに並行して動いてもらうのがコストを抑えた進め方です。" },
  { q: "JACリクルートメントはレバテックキャリアやレバテックフリーランスと何が違いますか？", a: "別物です。レバテックキャリアはIT/Web特化の正社員転職エージェント、レバテックフリーランスは業務委託（フリーランス）案件の紹介サービスで、両者も互いに別サービスです。JACリクルートメントはIT特化ではなく、上場・外資・管理職を含むハイクラス全般を扱う両面型エージェントです。IT現場の技術理解を重視するならレバテックキャリア、年収帯と交渉・非公開求人を重視するならJAC、という棲み分けになります。" },
  { q: "スカウトがしつこい、コンサルがしつこいといった評判はありますか？", a: "ビズリーチはスカウトの質にばらつきがあり希望と異なるスカウトが届くことがあるという声（talentsquare等の口コミ傾向）、JACは大手より求人数が少なく水準に満たないと門前払い感があるという声が見られます。いずれも傾向の要約で、受信設定や希望条件の明確な共有で調整できます。連絡頻度の希望は最初に伝えておくと負担を減らせます。" },
  { q: "年収交渉に強いのはどちらですか？", a: "交渉そのものを代行してもらえる点ではJACに分があります。両面型で企業側の事情も把握しているため、現実的な落としどころを踏まえた交渉がしやすい構造です。ビズリーチは複数のスカウトを並べて条件を比較できる点が交渉材料になります。理想は、ビズリーチで複数オファーの相場を作り、その材料をJACのコンサルに渡して交渉を任せる組み合わせです。" },
];

const goodJac = [
  "年収500万円以上、できれば600万円以上を狙う30〜50代",
  "上場企業・外資・管理職など求人の質を重視したい",
  "求人提案から推薦・年収交渉までプロに任せたい（攻め）",
  "非公開求人にアクセスしたい",
  "40代でハイクラス・マネジメント志向の転職をしたい",
];
const goodBiz = [
  "まず自分の市場価値を客観的に測りたい（届くスカウトで判断）",
  "幅広い業種の求人母数を広く見たい",
  "プロフィールを整えて待つスタイルが合っている",
  "管理職・外資・年収750万円以上の上限を狙う",
  "無料会員から気軽に始めたい",
];

export default function JacVsBizreachPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="JACリクルートメントとビズリーチの比較｜40代ハイクラスはどっち" description="JACリクルートメントとビズリーチを求人数・サポート・40代適性で徹底比較。競合ではなく補完として併用する戦略を解説します。" url="/compare/jac-vs-bizreach/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "JAC vs ビズリーチ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">JACリクルートメントとビズリーチを徹底比較｜40代ハイクラスはどっち？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 両面型エージェント と ハイクラス×スカウト型 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「JAC ビズリーチ 比較」で検索する40代エンジニアの多くは、ハイクラス転職で「待つべきか、任せるべきか」で迷っています。本記事の立場は明確です。両者は競合ではなく<strong>補完関係</strong>にあり、役割が重ならないため併用が最も合理的です。本記事は30代・40代のITエンジニア向けに、サービス形態・求人数・サポート・40代適性の4項目で比較し、口コミ傾向と補完しあう併用術まで整理しました。</p>

        <DataNote surveyedAt="2026年6月" sources={["JACリクルートメント公式", "ビズリーチ公式会社概要", "各社紹介・口コミメディア集計（二次情報）", "talentsquare", "みん評", "イーデス"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：競合ではなく補完で使う</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・まず市場価値を測るなら「ビズリーチ」</strong>。スカウト型で、届くオファーから自分の相場が見えます（待ち）。</li>
              <li><strong>・選考と年収交渉を任せるなら「JACリクルートメント」</strong>。両面型コンサルが推薦・交渉を代行します（攻め）。</li>
              <li><strong>・40代ハイクラスは両方登録が最強</strong>。役割が重ならないため、ビズリーチで相場を作り、JACに交渉を渡すのが最短ルートです。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">ビズリーチは無料会員から、JACは完全無料で始められます。なお両サービスともIT特化ではなく、上場・外資・管理職を含むハイクラス全般を扱う点が、レバテックキャリアのようなIT特化エージェントとの違いです（用途としてはハイクラスIT転職に有効）。理由は次の比較表と項目別解説で見ていきます。</p>
        </section>

        <section id="confusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">混同しやすいサービスの整理</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">比較に入る前に、名前が似たサービスの違いを整理します。</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>レバテックキャリア（正社員転職エージェント）≠ レバテックフリーランス（業務委託案件の紹介）</strong>。本記事のJAC・ビズリーチはいずれもこれらとは別物です。</li>
              <li><strong>ビズリーチ ≠ リクルートダイレクトスカウト</strong>。どちらもハイクラスのスカウト型ですが運営も仕組みも別サービスです。</li>
              <li><strong>JACリクルートメントはIT特化エージェントではありません</strong>。IT求人も扱いますが、上場・外資・管理職を含むハイクラス全般が対象です。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">JACリクルートメント</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ビズリーチ</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・年収帯・利用者構成は二次情報・時点付きの参考値です。求人数は時期により変動します。料金は2022年11月改定の二次情報です。満足度93%はJAC側の二次値です。</p>
        </section>

        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：サービス形態の違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">最大の違いは動き方です。ビズリーチは<strong>スカウト型プラットフォーム</strong>で、職務経歴を登録して企業やヘッドハンターからのスカウトを待ちます。自分から探すというより、整えたプロフィールにオファーが集まる構造です。市場価値を客観的に把握しやすい一方、能動的に動かないと進みにくい面があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">JACリクルートメントは<strong>両面型エージェント</strong>です。1人のコンサルタントが企業側と求職者側の双方を担当するため、企業の採用背景や求める人物像を踏まえた精度の高い提案ができ、推薦から年収交渉まで代行してくれます。「待ち」のビズリーチに対して、JACは「攻め」のサービスといえます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>受け身で市場価値を測るならビズリーチ、能動的に提案と交渉を任せるならJAC。この役割の違いこそが、両者を競合でなく補完にしている理由です。スカウト型の選び方は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラスIT転職エージェント比較</Link>もあわせてご覧ください。</p>
          </div>
        </section>

        <section id="kyujin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：求人数と質</h2>
          <p className="text-slate-600 leading-relaxed mb-4">求人数は、二次情報で約21,000件（JAC）対約140,000件（ビズリーチ）という値（いずれも2024年11月時点・二次）があり、母数ではビズリーチが大きく上回ります。幅広い業種を広く見たい段階ではビズリーチの量が有利です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ただしJACは<strong>「数より質」と非公開求人</strong>に強みがあります。上場企業・外資・管理職といったハイクラス求人の精度が高く、表に出ていない非公開ポジションをコンサル経由で紹介してもらえる点が価値です。求人数の少なさは、裏を返せば絞り込みの精度ともいえます。求人数自体は媒体により割れて確認しづらいため、数値は参考程度に捉えるのが安全です。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>母数の広さならビズリーチ、絞り込んだ質と非公開ならJAC。年収帯ごとの相場は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収ランキング</Link>もあわせてご確認ください。</p>
          </div>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート・交渉力</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">JACリクルートメント</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">両面型のため、企業側の事情を把握したコンサルが推薦・面接調整・年収交渉まで代行します。満足度93%（二次）という数値も公表されています。交渉ごとを任せたい人、現実的な落としどころを踏まえて動いてほしい人に向きます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">専任の伴走というより、企業や登録ヘッドハンター経由でやり取りが進みます。優秀なヘッドハンターに当たれば手厚い一方、質にばらつきがあるという声もあります（talentsquare等）。自走できる人がスカウトを活用する設計です。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">交渉を任せるならJAC、自分で複数オファーを並べて比較するならビズリーチ。<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>や<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">エージェントとの初回面談</Link>も参考にしてください。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：40代ハイクラス適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">JACは主に30〜50代をターゲットとし、年収500万円以上が目安、600万円以上が一つのライン（二次）とされます。公式に<strong>40代向けのIT特設ページ</strong>を持ち、40代でも応募可能な求人が複数あるとされる点は、40代エンジニアにとって心強い材料です。マネジメント・年収アップ・外資/上場を狙う層に噛み合います。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチも利用者層に40代が一定数いるとされますが、割合の数値は二次・時点に留意が必要です。経歴次第でスカウトの量が左右されるため、実績を整理してプロフィールに反映できる40代ほど効果が出ます。逆に、年収500万円未満や未経験に近い場合は、JAC・ビズリーチとも紹介・スカウトが届きにくく、門前払い感が出ることがあります。その場合は<Link href="/compare/agents/" className="text-petrol hover:underline">総合型エージェント</Link>の併用が安全です。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下は各種口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">JACリクルートメントの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>上場・外資・管理職求人が豊富</li><li>両面型でコンサルが企業情報に詳しい</li><li>40代でも応募できる求人があった</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>大手より求人数が少ない</li><li>水準に満たないと門前払い感</li><li>地域や職種で偏りがある</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：各転職メディア／みん評／イーデス等の傾向要約</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>高年収求人が豊富</li><li>市場価値を客観的に把握できる</li><li>スカウトでキャリアアップにつながった</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>スカウトの質にばらつきがある</li><li>経歴次第でスカウトが来ない</li><li>有料プラン前提との不満</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：ミライトーチ／morejob／talentsquare等の傾向要約</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">JACが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodJac.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">ビズリーチが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodBiz.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">補完しあう併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "まずビズリーチで市場価値を測る", desc: "プロフィールを整え、届くスカウトの年収帯やポジションから、自分の相場と立ち位置を客観的に把握します。ここは無料会員でも十分機能します。" },
                { num: "2", title: "JACに選考と交渉を任せる", desc: "把握した相場を踏まえ、JACのコンサルに具体的な求人提案・推薦・年収交渉を任せます。両面型なので企業側の事情も踏まえた現実的な交渉が期待できます。" },
                { num: "3", title: "オファーを並べて意思決定（推奨）", desc: "ビズリーチで複数スカウトの条件を並べ、その材料をJACの交渉に渡す。役割が重ならないからこそ、相場づくり×交渉代行で最も有利な条件に近づけます。" },
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
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだミドルエンジニアの市場価値は依然として高く、JACとビズリーチはその価値を現金化する手段として役割が異なります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>まだマネジメントか専門職か方向が定まっていない時期です。ビズリーチで届くスカウトから市場での見られ方を確認しつつ、JACのコンサルにキャリアの選択肢を相談すると視野が広がります。レバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円が一つの目安で、JACの「年収500万円以上」ラインに届くかどうかが一つの判断材料になります。<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">キャリアプランの立て方</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>ここが両サービス併用の本命層です。JACは40代向けIT特設ページを持ち、上場・外資・管理職といったハイクラス求人で40代でも応募可能なものが複数あるとされます。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、上限を狙える層でもあります。一方で40代は年齢を理由に書類段階で苦戦することもあるため、推薦状を書いて交渉まで動いてくれるJACのコンサル支援を確保しつつ、ビズリーチで相場を測る二段構えが失敗の少ない進め方です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">いずれの年代でも、競合と捉えて片方に絞るのではなく、補完として両方を使うのがミドルエンジニアにとって合理的です。</p>
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
          <h2 className="text-xl font-bold mb-3">40代ハイクラスは「相場づくり×交渉代行」で</h2>
          <p className="text-blue-100 text-sm mb-4">ビズリーチで市場価値を測り、JACリクルートメントに交渉を任せる。競合ではなく補完として併用するのが、40代エンジニアの年収アップに最短のルートです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ビズリーチ vs レバテックキャリア 比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
              { name: "JACリクルートメントの評判・口コミ", href: "/review/jac-recruitment/" },
              { name: "ビズリーチの評判・口コミ", href: "/review/bizreach-it/" },
              { name: "40代の転職事情", href: "/age/40s/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
