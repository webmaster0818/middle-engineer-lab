import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "レバテックキャリアとdoda比較｜どっちがおすすめ【2026年6月】",
  description:
    "レバテックキャリアとdoda（ITエンジニア）をどっちがおすすめか即答。IT特化型vs総合型の求人数・年収アップ・サポート・スピード・対象層を時点付き実データで徹底比較し、30代40代の選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "jobs", label: "求人数で比較" },
  { id: "salary", label: "年収アップ実績で比較" },
  { id: "support", label: "サポート体制で比較" },
  { id: "speed", label: "提案スピード・進め方で比較" },
  { id: "target", label: "対象層・得意領域で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "レバテック株式会社（レバレジーズグループ・二次情報）", b: "パーソルキャリア株式会社（1989年設立・従業員7,048名／doda公式）" },
  { item: "タイプ", a: "IT/Web特化型エージェント", b: "総合型（検索＋エージェント＋スカウトのハイブリッド）" },
  { item: "公開求人数", a: "約5万件超（2026年6月時点・複数転職メディア集計）", b: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）" },
  { item: "対応エリア", a: "首都圏中心（二次情報）", b: "全国（doda公式）" },
  { item: "得意領域", a: "IT/Web全般。高年収求人比率が高い", b: "国内最大級の求人数。IT含む全業種を幅広くカバー" },
  { item: "年収アップ実績", a: "応募時年収との差70万円以上が3人に2人（2023年1月〜2024年3月実績）", b: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万→486万円（2024年度／2025年5月公表）" },
  { item: "料金", a: "求職者無料", b: "求職者無料" },
];

const faqs = [
  { q: "レバテックキャリアとdodaはどっちがおすすめ？", a: "IT/Web領域で専門性の高い提案と高年収求人を重視するならレバテックキャリア、IT以外も含め幅広い選択肢や全国の求人、自分でも検索したい人にはdodaがおすすめです。タイプが異なるため、IT経験者はレバテックを軸にdodaを併用するのが効率的です。" },
  { q: "求人数が多いのはどっち？", a: "dodaは国内最大級の総合型で、IT・通信エンジニア求人だけでも5万件超（2026年2月時点・二次経由）。レバテックキャリアもIT/Web中心に約5万件超（2026年6月時点・複数転職メディア集計）です。IT特化の専門求人はレバテック、全業種の幅広さはdodaに強みがあります。" },
  { q: "年収アップしやすいのはどっち？", a: "レバテックキャリアは内定承諾者のうち応募時年収との差が70万円以上が3人に2人（2023年1月〜2024年3月実績）。dodaは転職者の約6割が年収アップ、IT・通信の平均決定年収は469万→486万円（2024年度・2025年5月パーソルキャリア公表）です。集計基準が異なるため単純比較はできません。" },
  { q: "doda ITは連絡が多すぎる？", a: "口コミプラットフォームでは「求人量が多い」と評価される一方、「求人・連絡が多すぎる」という声も見られます。総合型ゆえにスカウトや提案の量が多くなりやすいため、希望条件と連絡頻度を初回で明確に伝えておくとミスマッチを避けやすくなります。" },
  { q: "dodaはIT専門性が低い？", a: "口コミでは「IT専門性がやや低いとの声」「アドバイザーの質にばらつき」が見られます。一方でレバテックキャリアはIT/Web特化のため技術文脈の理解が得やすいとされます。専門的な技術相談を重視するならIT特化型を、幅広い選択肢を求めるなら総合型を、と使い分けるとよいでしょう。" },
  { q: "30代エンジニアにはどっち？", a: "IT経験が豊富な30代はレバテックキャリアを軸にすると専門求人と年収交渉の面で有利です。IT以外の業界（事業会社のDX部門など）も検討したい、初めての転職で選択肢を広く見たい場合はdodaの幅広さが安心材料になります。" },
  { q: "40代エンジニアにはどっち？", a: "どちらも年代別の明確な実績は公表していません。dodaは全国・全年代対応で求人母数が大きく、レバテックはIT/Web特化で高年収求人に強みがあります。40代は求人が絞られやすいため、両方登録して母数を確保するのが現実的です。" },
  { q: "両方登録しても大丈夫？退会は簡単？", a: "両方登録は問題なく、IT特化型と総合型を組み合わせることで非公開求人の重複が少なく選択肢が広がります。退会はいずれも担当者連絡やマイページ等から可能です。連絡量を抑えたい場合は配信設定や希望条件の調整を行いましょう。" },
];

const levtechReviews = {
  good: ["書類添削・面接対策が丁寧", "LINEで連絡が完結する", "高年収求人が多い"],
  bad: ["未経験者は紹介されにくい", "初回面談後の連絡が遅い場合がある", "希望と異なる求人提案の例"],
};
const dodaReviews = {
  good: ["求人量が多い", "好条件求人が多い", "2名体制サポートの場合あり"],
  bad: ["求人・連絡が多すぎる", "アドバイザーの質にばらつき", "IT専門性がやや低いとの声"],
};

const relatedLinks = [
  { name: "レバテックキャリアの詳細レビュー", href: "/review/levtech/" },
  { name: "doda ITエンジニアの詳細レビュー", href: "/review/doda-it/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "doda vs マイナビIT比較", href: "/compare/doda-vs-mynavi/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
  { name: "エージェントの複数併用の進め方", href: "/knowledge/multiple-agents/" },
];

export default function LevtechVsDodaPage() {
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
        title="レバテックキャリアとdoda比較｜どっちがおすすめ【2026年6月】"
        description="レバテックキャリアとdodaをどっちがおすすめか即答。IT特化型vs総合型を求人数・年収・サポート・スピード・対象層の実データで徹底比較します。"
        url="/compare/levtech-vs-doda/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs doda" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアとdoda比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化型 vs 総合型を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT/Web特化型エージェントの代表格・レバテックキャリアと、国内最大級の総合型・doda（ITエンジニア）。タイプの異なる2社をどう使い分けるべきかを、公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で整理します。結論から言えば、IT経験者はレバテックキャリアをメインに、dodaをサブで登録するのが効率的です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式系ガイド記事",
            "doda（パーソルキャリア）公式・2024年度決定年収レポート（2025年5月公表）",
            "Qiita Job Change等の口コミプラットフォーム（傾向要約）",
            "複数転職メディアの求人数集計値",
          ]}
        />

        {/* 目次 */}
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

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              IT/Web領域で専門性と高年収を狙うなら「レバテックキャリア」、全業種・全国の幅広い選択肢と自己検索も使いたいなら「doda」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① レバテックキャリアはIT/Web特化で高年収求人比率が高く、技術文脈を理解した提案を受けやすい。</li>
              <li>② dodaは国内最大級の総合型で、検索＋エージェント＋スカウトのハイブリッド。全国対応で母数が大きい。</li>
              <li>③ IT特化型と総合型は保有求人が重複しにくいため、両方無料で登録すると非公開求人の幅が大きく広がる。</li>
            </ul>
          </div>
        </section>

        {/* 基本データ比較表 */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">doda（IT）</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.a}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数は時期により変動が大きく、取得時点・出典が異なる二次集計値を含みます。件数の単純比較は推奨しません。
          </p>
        </section>

        {/* 求人数 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア：約5万件超（IT/Web中心）</h3>
              <p className="text-sm text-blue-700">
                2026年6月時点・複数転職メディアの集計で約52,000〜57,000件と幅があります。IT/Web全般をカバーし、高年収求人（600万円以上が公開求人の約8割との二次情報）の比率が高いとされます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda：IT・通信5万件超＋全業種</h3>
              <p className="text-sm text-slate-600">
                IT・通信エンジニア求人だけで5万件超（2026年2月時点・二次経由）。総合型のため、IT以外の業種やITコンサル・事業会社のDX部門なども含め、幅広い選択肢を確保できます。全国対応も強みです。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            IT特化の専門求人と高年収帯はレバテックキャリア、業種をまたいだ幅広さと全国の求人はdodaに強みがあります。求人量の数字だけでなく、自分の希望に合う求人をどれだけ提案してもらえるかで判断しましょう。
          </p>
        </section>

        {/* 年収アップ */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ実績で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                内定承諾者のうち応募時年収との差が70万円以上の人が「3人に2人」（2023年1月〜2024年3月実績・公式系）。IT/Web特化ゆえの高年収求人比率が、交渉の土台になっています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda</h3>
              <p className="text-sm text-slate-600">
                転職者の約6割が年収アップ。IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）（パーソルキャリア「決定年収レポート」2025年5月公表）。母集団の大きさが特徴です。
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              参考までに、レバテック公表の年代別平均年収（2025年・正社員SE）は20代約378万／30代約499万／40代約618万／50代約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%です。現年収と照らし合わせ、上振れ余地を見積もる目安になります。
            </p>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計期間・基準・母集団が各社で異なるため、数値の単純な大小比較はできません。各社の公表値・公表系の傾向としてご参照ください。
          </p>
        </section>

        {/* サポート */}
        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート体制で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックキャリアは書類添削・面接対策の丁寧さと、LINEで連絡が完結する手軽さ、そしてIT/Web特化ならではの技術理解が評価されています。dodaは求人量の多さに加え、2名体制でサポートする場合があるなど、総合型としての体制の厚さが特徴です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方、dodaは「IT専門性がやや低いとの声」「アドバイザーの質にばらつき」が口コミに見られます。技術的な深い相談を重視するならIT特化型のレバテックを、幅広い選択肢や全国求人を求めるなら総合型のdodaを、目的に応じて使い分けるのが賢明です。
          </p>
        </section>

        {/* スピード */}
        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提案スピード・進め方で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            dodaは検索＋エージェント＋スカウトのハイブリッド型で、自分で求人を検索しながら並行してスカウトも受けられるため、能動的に動きたい人に向きます。提案や連絡の量が多くなりやすく、「求人・連絡が多すぎる」という声もあるため、配信設定や希望条件の調整が快適に使うコツです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            レバテックキャリアは担当者経由の提案が中心で、IT/Web特化の絞り込まれた求人を受け取りやすい一方、「初回面談後の連絡が遅い場合がある」との声もあります。在職中で時間が限られる30代・40代は、自己検索のdodaと担当者提案のレバテックを併用し、進め方を二本立てにすると効率的です。
          </p>
        </section>

        {/* 対象層 */}
        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">レバテックキャリアが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["Web系全般", "SIer", "社内SE", "インフラ", "高年収求人", "20〜30代の利用が多い"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 利用者の約80%が20〜30代（公式系）。IT/Web特化で高年収求人比率が高い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">dodaが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["国内最大級の求人数", "全業種カバー", "全国対応", "DX部門・社内SE", "スカウト", "自己検索"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 検索＋エージェント＋スカウトのハイブリッド型。全国・全年代対応。</p>
            </div>
          </div>
        </section>

        {/* 口コミ傾向 */}
        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、Qiita Job Change・みん評・各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックキャリアの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {levtechReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {levtechReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: OUTSIDEMAGAZINE／Qiita Job Change／イーデス 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">dodaの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {dodaReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {dodaReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: studio-tale／best-w／freeconsul／HonNe 等の傾向</p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックキャリアが向く人</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✓ IT経験3年以上で年収アップを狙いたい</li>
                <li>✓ 技術文脈を理解した提案を受けたい</li>
                <li>✓ IT/Web領域に集中して転職したい</li>
                <li>✓ 高年収帯（600万円以上）を志望する</li>
                <li>✓ LINEで気軽にやり取りしたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">dodaが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ IT以外の業界も含め幅広く検討したい</li>
                <li>✓ 初めての転職で選択肢を多く見たい</li>
                <li>✓ 事業会社のDX部門・社内SEを志望する</li>
                <li>✓ 自分でも求人を検索したい</li>
                <li>✓ 全国・地方の求人も見たい</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 併用ガイド */}
        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "レバテックキャリアが向くケース", desc: "IT/Web領域で専門性の高い提案と高年収求人を重視し、技術文脈を理解した担当者に相談したい場合はレバテックキャリアを軸に。" },
                { num: "2", title: "dodaが向くケース", desc: "IT以外の業種や全国の求人も含め幅広く検討したい、自己検索とスカウトも併用したい場合はdodaを軸に。" },
                { num: "3", title: "併用パターン", desc: "IT特化型と総合型は保有求人が重複しにくいため、両方無料で登録すると非公開求人の幅が最大化。レバテックで専門求人を、dodaで幅広い選択肢と相場感を確保するのが定番です。" },
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
              併用時は同じ企業への重複応募を避けるため、応募状況を自分で管理しましょう。詳しくは
              <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェントの複数併用の進め方</Link>
              を参照してください。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の転職は、これまでの実績と専門性で評価されるフェーズです。レバテックキャリアはIT/Web特化で高年収求人の比率が高く、技術文脈を理解した担当者が年収交渉を支援しやすいのが強み。利用者の約80%が20〜30代（公式系）と、ミドル層の利用実績も厚めです。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方dodaは、IT・通信の平均決定年収が469万→486万円（2024年度・2025年5月公表）、転職者の約6割が年収アップという母集団の大きな実績を持ちます。全国・全年代対応で求人母数が大きいため、40代やIT以外の業種も視野に入れたい場合の選択肢確保に向きます。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの需要は構造的に存在します。30代・40代は「特化型で深く・総合型で広く」の二本立てで母数と相場感を確保し、自分の専門領域に強い担当者を見極めることが成功の近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ 厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。年収交渉時の相場感の参考になります。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型のレバテック×総合型のdoda。両方無料で、非公開求人の幅と相場感を最大化しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連記事 */}
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
