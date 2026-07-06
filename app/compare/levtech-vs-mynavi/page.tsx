import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/levtech-vs-mynavi/" },
  title: "レバテックキャリアとマイナビIT比較｜どっち【2026年6月】",
  description:
    "レバテックキャリアとマイナビIT AGENTをどっちがおすすめか即答。求人数・年収アップ・サポート・スピード・対象層を時点付き実データで徹底比較し、30代40代エンジニアの選び方を解説します。",
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
  { item: "運営会社", a: "レバテック株式会社（レバレジーズグループ・二次情報）", b: "株式会社マイナビ" },
  { item: "タイプ", a: "IT/Web特化型エージェント", b: "IT特化型エージェント（マイナビIT AGENT）" },
  { item: "公開求人数", a: "約5万件超（2026年6月時点・複数転職メディア集計）", b: "総数の公式値は確認不可（断定なし）" },
  { item: "対応エリア", a: "首都圏中心（二次情報）", b: "二次情報。ハイクラス・地方求人は手薄との声" },
  { item: "得意領域", a: "IT/Web全般。高年収求人比率が高い", b: "20〜30代若手層に強い。書類添削・面接対策が手厚い" },
  { item: "実績", a: "応募時年収との差70万円以上が3人に2人（2023年1月〜2024年3月実績）", b: "転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）" },
  { item: "料金", a: "求職者無料", b: "求職者無料" },
];

const faqs = [
  { q: "レバテックキャリアとマイナビIT AGENTはどっちがおすすめ？", a: "IT/Web全般から高年収求人を幅広く見たいならレバテックキャリア、20〜30代若手層で手厚いサポートを受けたいならマイナビIT AGENTがおすすめです。得意な対象層が異なるため、両方無料で登録して比較するのが効率的です。" },
  { q: "年収アップしやすいのはどっち？", a: "レバテックキャリアは内定承諾者のうち応募時年収との差が70万円以上が3人に2人（2023年1月〜2024年3月実績）。マイナビIT AGENTは年収アップ率73.7%（二次情報・転職メディア集計）です。集計基準が異なるため単純比較はできませんが、高年収求人の比率の高さからレバテックは年収レンジの上振れを狙いやすいとされます。" },
  { q: "求人数が多いのはどっち？", a: "レバテックキャリアは約5万件超（2026年6月時点・複数転職メディア集計）。マイナビIT AGENTは公開求人の総数について信頼できる公式値が確認できないため、当サイトでは件数を断定しません。求人量を重視する場合はレバテックや総合型の併用も検討してください。" },
  { q: "マイナビIT AGENTは連絡が多い？しつこい？", a: "口コミプラットフォームでは「サポートが手厚い」と評価される一方、「連絡が多い」という声も見られます。サポートが丁寧な分やり取りが多くなる傾向があるため、連絡頻度や希望条件を初回面談で伝えておくと快適に使えます。" },
  { q: "マイナビIT AGENTは断られる・求人が少ないことがある？", a: "口コミでは「紹介求人数が少ない場合」「ハイクラス・地方求人が手薄」との声が見られます。20〜30代若手層に強い一方、ハイクラス志向や地方在住の場合は紹介が限定的になることがあります。その場合はレバテックや全国対応の総合型を併用すると母数を補えます。" },
  { q: "30代エンジニアにはどっち？", a: "30代前半でサポートの手厚さを重視するならマイナビIT AGENT、30代中盤以降で高年収求人や幅広いIT/Web求人を見たいならレバテックキャリアが向きます。レバテックは利用者の約80%が20〜30代（公式系）で、30代の利用実績が豊富です。" },
  { q: "40代エンジニアにはどっち？", a: "マイナビIT AGENTは20〜30代若手層に強いとされ、口コミでもハイクラス・地方求人の手薄さが指摘されます。求人レンジの広さからは、40代はレバテックキャリアを軸にする方が現実的です。母数確保のため全国対応の総合型併用も検討しましょう。" },
  { q: "両方登録しても大丈夫？退会は簡単？", a: "両方登録は問題なく、得意な対象層が異なるため非公開求人の幅が広がります。退会はいずれも担当者へ連絡するか登録時の手続き経由で可能です。同じ企業への重複応募を避けるため、応募状況は自分で管理しておきましょう。" },
];

const levtechReviews = {
  good: ["書類添削・面接対策が丁寧", "LINEで連絡が完結する", "高年収求人が多い"],
  bad: ["未経験者は紹介されにくい", "初回面談後の連絡が遅い場合がある", "希望と異なる求人提案の例"],
};
const mynaviReviews = {
  good: ["サポートが手厚い", "担当がIT業界に詳しい", "初めての転職でも安心"],
  bad: ["連絡が多い", "紹介求人数が少ない場合", "ハイクラス・地方求人が手薄"],
};

const relatedLinks = [
  { name: "レバテックキャリアの詳細レビュー", href: "/review/levtech/" },
  { name: "マイナビIT AGENTの詳細レビュー", href: "/review/mynavi-it/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "30代におすすめのエージェント", href: "/compare/30s-agents/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
  { name: "エージェントの複数併用の進め方", href: "/knowledge/multiple-agents/" },
];

export default function LevtechVsMynaviPage() {
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
        title="レバテックキャリアとマイナビIT AGENT比較｜どっちがおすすめ【2026年6月】"
        description="レバテックキャリアとマイナビIT AGENTをどっちがおすすめか即答。求人数・年収・サポート・スピード・対象層を実データで徹底比較します。"
        url="/compare/levtech-vs-mynavi/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs マイナビIT AGENT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアとマイナビIT AGENT比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化型エージェント2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT/Web特化型エージェントの代表格・レバテックキャリアと、丁寧なサポートに定評のあるマイナビIT AGENT。どちらもIT特化型ですが、得意とする対象層やサポートスタイルに明確な違いがあります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式系ガイド記事",
            "マイナビIT AGENTに関する転職メディア集計値（実績は二次情報）",
            "Qiita Job Change等の口コミプラットフォーム（傾向要約）",
            "複数転職メディアの求人数集計値",
          ]}
        />

        {/* 目次 */}
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

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              幅広いIT/Web求人から高年収を狙うなら「レバテックキャリア」、20〜30代若手層で手厚いサポートを受けたいなら「マイナビIT AGENT」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① レバテックキャリアは求人レンジが広く高年収求人比率が高い。利用者の約80%が20〜30代（公式系）で、ミドル層の利用実績も厚い。</li>
              <li>② マイナビIT AGENTは20〜30代若手層に強く、書類添削・面接対策が手厚い。定着率97.5%・年収アップ率73.7%（二次情報）を打ち出す。</li>
              <li>③ 得意な対象層が異なるため、両方無料で登録し非公開求人とサポートを比較するのが損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th>
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
            ※ マイナビIT AGENTの実績値は転職メディア集計の二次情報です。公開求人の総数について信頼できる公式値が確認できないため、件数は断定していません。
          </p>
        </section>

        {/* 求人数 */}
        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア：約5万件超</h3>
              <p className="text-sm text-petrol-deep">
                2026年6月時点・複数転職メディアの集計で約52,000〜57,000件と幅があります。IT/Web全般をカバーし、高年収求人（600万円以上が公開求人の約8割との二次情報）の比率が高いとされます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT：公式総数は確認不可</h3>
              <p className="text-sm text-slate-600">
                公開求人の総数について信頼できる公式値が確認できないため、当サイトでは件数を断定していません。口コミでは「紹介求人数が少ない場合」との声もあり、量より質・サポートの手厚さで選ばれる傾向があります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            求人量を最優先するならレバテックキャリアや全国対応の総合型が有利です。マイナビIT AGENTは紹介数より、20〜30代向けの丁寧な選考支援に価値があるエージェントと位置づけると選びやすくなります。
          </p>
        </section>

        {/* 年収アップ */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ実績で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-petrol-deep">
                内定承諾者のうち応募時年収との差が70万円以上の人が「3人に2人」（2023年1月〜2024年3月実績・公式系）。高年収求人比率の高さが、年収交渉の土台になっています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT</h3>
              <p className="text-sm text-slate-600">
                転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）。手厚い選考支援によるミスマッチの少なさと、着実な年収アップを打ち出しています。
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              参考までに、レバテック公表の年代別平均年収（2025年・正社員SE）は20代約378万／30代約499万／40代約618万／50代約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%です。現年収と照らし合わせ、上振れ余地の目安にできます。
            </p>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計期間・基準・母集団が各社で異なるため、数値の単純な大小比較はできません。各社の公表値・二次情報の傾向としてご参照ください。
          </p>
        </section>

        {/* サポート */}
        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート体制で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            マイナビIT AGENTの最大の強みは、書類添削・面接対策の手厚さです。「サポートが手厚い」「担当がIT業界に詳しい」「初めての転職でも安心」という声が口コミに見られ、転職活動に不安のある人を後押しする体制が評価されています。レバテックキャリアも書類添削・面接対策が丁寧で、加えてLINEで連絡が完結する手軽さと技術理解の深さが特徴です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方、マイナビIT AGENTは丁寧な分「連絡が多い」との声もあります。サポートの手厚さと連絡頻度はトレードオフになりやすいため、希望する連絡ペースを初回面談で共有しておくと快適です。
          </p>
        </section>

        {/* スピード */}
        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提案スピード・進め方で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            マイナビIT AGENTは一人ひとりに丁寧に伴走するスタイルのため、選考準備にしっかり時間をかけたい人に向きます。レバテックキャリアはLINEで連絡が完結する手軽さがある一方、「初回面談後の連絡が遅い場合がある」との声もあり、タイミングで体感差が出ることがあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            在職中で時間が限られる30代・40代は、丁寧な選考支援（マイナビ）と求人レンジの広さ・手軽な連絡（レバテック）を併用し、進め方を二本立てにすると効率的です。スピード重視で求人量も欲しい場合は、提案スピードに定評のあるエージェントの併用も検討しましょう。
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
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 利用者の約80%が20〜30代（公式系）。IT/Web特化で高年収求人比率が高い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">マイナビIT AGENTが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["20〜30代若手層", "手厚いサポート", "書類添削", "面接対策", "初めての転職"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ ハイクラス・地方求人は手薄との声あり。定着率97.5%（二次情報）。</p>
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
              <h3 className="font-bold text-green-800 mb-3">マイナビIT AGENTの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {mynaviReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {mynaviReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: Qiita Job Change／OUTSIDEMAGAZINE／axxis 等の傾向</p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックキャリアが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ IT/Web全般から幅広く求人を見たい</li>
                <li>✓ 高年収帯（600万円以上）を狙いたい</li>
                <li>✓ 30代中盤以降のミドルエンジニア</li>
                <li>✓ 技術文脈を理解した提案を受けたい</li>
                <li>✓ LINEで気軽にやり取りしたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">マイナビIT AGENTが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ 20〜30代前半の若手エンジニア</li>
                <li>✓ 転職が初めてで手厚いサポートが欲しい</li>
                <li>✓ 書類添削・面接対策をしっかり受けたい</li>
                <li>✓ ミスマッチを避け着実に進めたい</li>
                <li>✓ 担当者に丁寧に伴走してほしい</li>
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
                { num: "1", title: "レバテックキャリアが向くケース", desc: "高年収求人や幅広いIT/Web求人を見たい、30代中盤以降で年収アップを重視する場合はレバテックキャリアを軸に。" },
                { num: "2", title: "マイナビIT AGENTが向くケース", desc: "20〜30代前半で転職が初めて、書類添削・面接対策を手厚く受けたい場合はマイナビIT AGENTを軸に。" },
                { num: "3", title: "併用パターン", desc: "得意な対象層が異なるため、両方無料で登録し、レバテックで求人の幅と高年収帯を、マイナビで丁寧な選考支援を受けると、選択肢と準備の質を両立できます。" },
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
              併用時は同じ企業への重複応募を避けるため、応募状況を自分で管理しましょう。詳しくは
              <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェントの複数併用の進め方</Link>
              を参照してください。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の転職では、サポートの手厚さよりも「求人レンジの広さ」と「年収交渉力」が成否を分けやすくなります。マイナビIT AGENTは20〜30代若手層に強く、書類添削・面接対策の手厚さが魅力ですが、口コミでは「ハイクラス・地方求人が手薄」との声もあり、ミドル・シニア層では求人が絞られやすい点に注意が必要です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              レバテックキャリアは高年収求人の比率が高く、利用者の約80%が20〜30代（公式系）と30代の利用実績が厚いため、30代中盤以降のミドル層が年収アップを狙う際の軸になりやすいエージェントです。40代は両社とも年代別の明確な実績公表がないため、複数登録で母数を確保するのが現実的です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの需要は構造的に存在します。30代前半まではマイナビの手厚い支援、30代中盤以降はレバテックの求人レンジと年収交渉、というように年代とフェーズで主軸を切り替えるのが、ミドルエンジニアの賢い使い方です。
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
            レバテックキャリアとマイナビIT AGENTは両方無料。得意な対象層が異なるため、2社に登録して非公開求人とサポートを比較しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
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
