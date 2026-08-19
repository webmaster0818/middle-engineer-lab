import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/bizreach-vs-levtech/" },
  title: "ビズリーチとレバテックの比較｜どっちがおすすめ？【2026年8月】",
  description:
    "ビズリーチとレバテックキャリアを求人数・年収・サポート・スピード・対象層で徹底比較。ハイクラス×スカウト型とIT特化エージェント型の違い、30代40代エンジニアの選び方、口コミ傾向、併用術まで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "kyujin", label: "項目別比較①：求人数・求人の質" },
  { id: "salary", label: "項目別比較②：年収アップ実績" },
  { id: "support", label: "項目別比較③：サポート体制" },
  { id: "speed", label: "項目別比較④：スピード・連絡頻度" },
  { id: "target", label: "項目別比較⑤：対象層・年代適性" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "株式会社ビズリーチ（ビジョナル株式会社グループ・東証プライム上場）", b: "レバテック株式会社（レバレジーズグループ）" },
  { item: "サービス形態", a: "ハイクラス特化のスカウト型プラットフォーム", b: "IT/Web特化の紹介型エージェント" },
  { item: "求人数", a: "導入企業41,800社以上（累計）・登録ヘッドハンター9,700人以上（2025年4月時点・二次集計）", b: "公開求人 約5万件超（2026年5〜6月時点・複数転職メディア集計）" },
  { item: "対応エリア", a: "全国（スカウト型のため地域を問わず利用可能）", b: "首都圏中心（二次情報）" },
  { item: "得意領域", a: "ハイクラス全般（年収750万円以上が一つの目安・二次）。外資・管理職に強い", b: "IT/Webエンジニア全般。高年収求人比率が高い" },
  { item: "年収帯の傾向", a: "年収1,000万円以上の求人が全体の約4割（二次）", b: "公開求人の約8割が年収600万円以上（二次情報）" },
  { item: "サポート", a: "ヘッドハンター・企業からのスカウト経由（担当により差）", b: "IT業界に精通した専任アドバイザーが伴走" },
  { item: "料金", a: "無料会員あり。有料プランはWeb決済5,478円/月（2022年11月改定・二次）", b: "求職者は完全無料" },
];

const faqs = [
  { q: "ビズリーチとレバテックキャリアの最大の違いは何ですか？", a: "ビズリーチは年収750万円以上が一つの目安とされるハイクラス特化のスカウト型プラットフォームで、登録ヘッドハンターや企業から直接スカウトが届く仕組みです（登録ヘッドハンター9,700人以上・2025年4月時点の二次集計）。レバテックキャリアはIT/Web業界に特化した紹介型エージェントで、専任アドバイザーが求人を提案します。受け身で待つか、伴走してもらうかが最大の違いです。" },
  { q: "年収アップを狙うならどちらがおすすめですか？", a: "ビズリーチは年収1,000万円以上の求人が全体の約4割（二次情報）とされ、上限の高さが魅力です。一方レバテックキャリアは内定承諾者のうち応募時年収との差が70万円以上の人が3人に2人（2023年1月〜2024年3月実績の公式系数値）と、確実な年収アップ実績を公表しています。上限を狙うならビズリーチ、堅実な上積みならレバテックという整理ができます。" },
  { q: "ビズリーチは無料でも使えますか？有料プランは必要ですか？", a: "ビズリーチには無料会員プランがあり、まずは無料で始められます。すべてのスカウトの閲覧や一部機能の利用には有料プラン（Web決済5,478円/月・2022年11月改定の二次情報）が用意されています。レバテックキャリアは求職者完全無料です。まずは両方無料で試し、ビズリーチのスカウトの質を見てから有料化を検討するのが現実的です。" },
  { q: "未経験や経歴に自信がなくても使えますか？", a: "ビズリーチはハイクラス特化のため、経歴次第ではスカウトが来にくいという声があります（talentsquare等の口コミ傾向）。レバテックキャリアもIT実務経験者向けで、未経験者は紹介されにくいという評判が見られます。実務経験のあるエンジニアであればどちらも有効ですが、経験が浅い場合は総合型や未経験歓迎枠の多いサービスの併用が安全です。" },
  { q: "スカウトがしつこい・連絡が多いと聞きますが本当ですか？", a: "ビズリーチはスカウトの質にばらつきがあるという声があり（talentsquare等）、希望と異なるスカウトが届くこともあります。レバテックキャリアは初回面談後の連絡が遅い場合があるという逆方向の指摘も見られます（Qiita Job Change等）。スカウトの受信設定や、担当への希望条件の明確な共有で調整可能です。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "どちらも有効です。ビズリーチはCTO・VPoE・EMなどの管理職スカウトや外資求人に強く、マネジメント志向の40代と相性が良い傾向です。レバテックキャリアは利用者の約80%が20〜30代（二次情報）で、技術を理解したアドバイザーが現場志向のキャリア相談に向きます。詳しくは記事内の「30代・40代の視点」をご覧ください。" },
  { q: "退会やスカウト停止は簡単にできますか？", a: "両サービスとも会員ページから退会手続きが可能です。ビズリーチは有料プランを契約している場合、解約と退会の手続きが別になることがあるため、課金状況を確認してから進めてください。スカウトが多すぎる場合は、退会前に通知設定や公開範囲の調整を試すと負担を減らせます。" },
  { q: "両方登録するメリットはありますか？", a: "あります。ビズリーチで市場価値を測りながらハイクラスのスカウトを受け、レバテックキャリアで技術理解の深いアドバイザーに伴走してもらう「受動×能動」の組み合わせが効果的です。2社のオファー条件を比較することで、年収交渉でも有利に動けます。" },
];

const goodBiz = [
  "年収750万円以上を一つの目安にしたハイクラス転職を狙う",
  "CTO・VPoE・EMなど管理職／経営層ポジションを目指す",
  "外資系IT企業やコンサルにも興味がある",
  "まず市場価値を客観的に測りたい（届くスカウトで判断できる）",
  "プロフィールを整えて待つスタイルが合っている",
];
const goodLev = [
  "IT/Web業界内で技術を活かしてキャリアアップしたい",
  "技術スタックや現場を理解したアドバイザーに相談したい",
  "年収交渉や書類添削をプロに任せたい",
  "完全無料で追加費用なしに使いたい",
  "能動的にIT特化の求人を提案してほしい",
];

export default function BizreachVsLevtechPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ビズリーチとレバテックの比較｜どっちがおすすめか" description="ビズリーチとレバテックキャリアを求人数・年収・サポート・スピード・対象層で徹底比較。30代40代エンジニアの選び方を解説します。" url="/compare/bizreach-vs-levtech/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ビズリーチ vs レバテックキャリア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ビズリーチとレバテックキャリアを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ ハイクラス×スカウト型 と IT特化エージェント型を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「ビズリーチ レバテック 比較」で検索する方の多くは、ハイクラスを狙うべきか、IT特化のサポートを受けるべきかで迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを求人数・年収・サポート・スピード・対象層の5項目で比較し、口コミ傾向と併用術まで整理しました。</p>

        <DataNote surveyedAt="2026年6月" sources={["ビズリーチ公式会社概要", "レバテックキャリア公式ガイド記事", "Qiita Job Change", "みん評", "イーデス等の口コミメディア集計"]} />

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
              <li><strong>・年収750万円以上のハイクラス・管理職・外資を狙うなら「ビズリーチ」</strong>。スカウト型で市場価値も測れます。</li>
              <li><strong>・IT/Web業界内で技術を活かしてキャリアアップするなら「レバテックキャリア」</strong>。専任アドバイザーが伴走します。</li>
              <li><strong>・迷うなら両方登録</strong>。受け身のスカウト（ビズリーチ）と能動的な提案（レバテック）を組み合わせるのが、30代・40代には最も合理的です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どちらも無料で始められます（ビズリーチは無料会員あり）。理由は次の比較表と項目別解説で詳しく見ていきましょう。</p>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ビズリーチ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・求人数・年収帯は2026年6月時点の公式または転職メディア集計値に基づきます。求人数は時期により変動します。料金は2022年11月改定の二次情報です。</p>
        </section>

        <section id="kyujin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：求人数・求人の質</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチは累計の導入企業数41,800社以上、登録ヘッドハンター9,700人以上（2025年4月時点・二次集計）という規模で、全業種のハイクラス求人を扱います。年収1,000万円以上の求人が全体の約4割（二次）とされ、求人の「上限の高さ」が際立ちます。求人を探すというより、登録したプロフィールに対してスカウトが集まる構造です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは公開求人約5万件超（2026年5〜6月時点・複数転職メディア集計）をIT/Webに特化して保有し、公開求人の約8割が年収600万円以上（二次情報）と、ボリュームゾーンが高めです。技術職に絞った求人の「密度」が強みで、首都圏中心（二次情報）という地域特性があります。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>上限の高い求人・幅広い業種ならビズリーチ、IT特化の求人密度ならレバテックキャリア。地方在住の場合はレバテックが首都圏中心である点に注意し、<Link href="/compare/agents/" className="text-petrol hover:underline">総合型エージェント</Link>の併用も検討しましょう。</p>
          </div>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：年収アップ実績</h2>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは、内定承諾者のうち応募時年収との差が70万円以上だった人が「3人に2人」（2023年1月〜2024年3月実績の公式系数値）と公表しています。具体的な年収交渉力が数値で示されている点は、堅実に年収を上げたいエンジニアにとって安心材料です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチは統一された年収アップ率の公表値はありませんが、年収1,000万円以上求人が全体の約4割（二次）という求人構成自体が、上限を引き上げる余地の大きさを示します。スカウト経由で複数のオファーを比較しやすく、結果的に交渉力が高まりやすい構造です。</p>
          <p className="text-slate-600 leading-relaxed text-sm">参考として、レバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円・40代約618万円、年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。年収帯ごとの相場は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収ランキング</Link>もあわせてご確認ください。</p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート体制</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">専任の伴走支援というより、企業や登録ヘッドハンターからのスカウト経由でやり取りが進みます。優秀なヘッドハンターに当たれば手厚いサポートが受けられますが、質にばらつきがあるという声もあります（talentsquare等）。能動的に動ける人に向きます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">IT業界に精通した専任アドバイザーが書類添削・面接対策・年収交渉まで伴走します。書類添削や面接対策が丁寧、LINEで連絡が完結するといった評判が見られます（OUTSIDEMAGAZINE／Qiita Job Change／イーデス）。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">伴走型のサポートを重視するならレバテックキャリア、自走できる人がスカウトを活用するならビズリーチ、という棲み分けです。<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">エージェントとの初回面談の進め方</Link>も参考にしてください。</p>
        </section>

        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：スピード・連絡頻度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチはスカウト型のため、プロフィールを充実させた直後からスカウトが届き始めるスピード感があります。一方で、希望と異なるスカウトが混ざることがあり、選別の手間が生じる場合があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアはLINEでの連絡が完結する手軽さが評価される一方、初回面談後の連絡が遅い場合があるという指摘も見られます（Qiita Job Change等）。連絡頻度の希望は最初に明確に伝えておくと、テンポを調整しやすくなります。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較⑤：対象層・年代適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">ビズリーチは年収750万円以上が一つの目安とされ、管理職・外資・高年収を狙う層に向いています。経歴次第でスカウトの量が左右されるため、実績を整理してプロフィールに反映できる人ほど効果が出ます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは利用者の約80%が20〜30代（二次情報）とされ、IT実務経験のある現場志向のエンジニアと相性が良い設計です。未経験者は紹介されにくいという評判があるため、経験の浅い方は<Link href="/compare/inexperienced/" className="text-petrol hover:underline">未経験向けの選択肢</Link>も検討しましょう。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita Job Change・みん評・イーデス・talentsquare等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>高年収求人が豊富</li><li>スカウトでキャリアアップにつながった</li><li>市場価値を客観的に把握できる</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>スカウトの質にばらつきがある</li><li>経歴次第でスカウトが来ない</li><li>有料プラン前提との不満</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：ミライトーチ／morejob／talentsquare等</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリアの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>書類添削・面接対策が丁寧</li><li>LINEで連絡が完結して手軽</li><li>高年収求人が多い</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>未経験者は紹介されにくい</li><li>初回面談後の連絡が遅い場合がある</li><li>希望と異なる求人提案の例</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：OUTSIDEMAGAZINE／Qiita Job Change／イーデス等</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">ビズリーチが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodBiz.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">レバテックキャリアが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodLev.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "ビズリーチが向くケース", desc: "現職の市場価値をまず測りたい、管理職・外資・年収750万円以上を狙う場合。プロフィールを整え、届いたスカウトの質で立ち位置を確認します。" },
                { num: "2", title: "レバテックが向くケース", desc: "IT/Web業界内で技術を軸にキャリアアップしたい、書類添削や年収交渉を任せたい場合。専任アドバイザーに伴走してもらいます。" },
                { num: "3", title: "併用パターン（推奨）", desc: "ビズリーチでスカウトを受けて市場価値と上限を把握しつつ、レバテックで能動的に求人提案を受ける。2社のオファーを比較し、最も有利な条件で意思決定します。" },
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
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代エンジニアの市場価値は依然として高く、この2社はその価値を現金化する手段として相性が異なります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>レバテックキャリアは利用者の約80%が20〜30代（二次情報）で、技術スタックを理解したアドバイザーが現場志向のキャリア相談に乗ってくれます。マネジメントか専門職かでまだ方向が定まっていない30代は、レバテックを軸に、市場価値の確認用としてビズリーチを併用すると視野が広がります。レバテック公表の年代別平均年収（2025年）では30代のSEは約499万円が一つの目安です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>ビズリーチはCTO・VPoE・EMといった管理職・経営層ポジションのスカウトや外資求人に強く、マネジメント経験のある40代と噛み合います。年収1,000万円以上の割合は40代で12.67%（レバテック公表・2025年）とされ、上限を狙える層です。一方で40代は年齢を理由に書類段階で苦戦することもあるため、伴走して推薦状を書いてくれるレバテックのアドバイザー支援も併せて確保しておくと安心です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">いずれの年代でも、まずビズリーチで市場価値を測り、レバテックで実際の選考を伴走してもらう二段構えが、ミドルエンジニアにとって失敗の少ない進め方です。</p>
        </section>

        <BusySeasonNote />

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
          <h2 className="text-xl font-bold mb-3">ハイクラスIT転職は「スカウト×伴走」の両輪で</h2>
          <p className="text-blue-100 text-sm mb-4">ビズリーチで市場価値を測り、レバテックキャリアで選考を伴走してもらう。30代・40代エンジニアの年収アップに最短のルートです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs doda 比較", href: "/compare/levtech-vs-doda/" },
              { name: "レバテック vs Geekly 比較", href: "/compare/levtech-vs-geekly/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "ビズリーチの評判・口コミ", href: "/review/bizreach-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
