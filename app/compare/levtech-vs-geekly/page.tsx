import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/levtech-vs-geekly/" },
  title: "レバテックキャリアとGeekly比較｜どっちがおすすめ【2026年6月】",
  description:
    "レバテックキャリアとGeekly（ギークリー）をどっちがおすすめか即答。求人数・年収アップ実績・サポート・スピード・対象層を時点付き実データで徹底比較し、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "jobs", label: "求人数で比較" },
  { id: "salary", label: "年収アップ実績で比較" },
  { id: "support", label: "サポート体制で比較" },
  { id: "speed", label: "提案スピードで比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", levtech: "レバテック株式会社（レバレジーズグループ・二次情報）", geekly: "株式会社Geekly（2011年8月設立・渋谷区／公式会社概要）" },
  { item: "公開求人数", levtech: "約5万件超（2026年6月時点・複数転職メディア集計）", geekly: "公開37,000件以上（2026年1月時点）／非公開含め46,000件以上（2026年5月時点・二次集計）" },
  { item: "対応エリア", levtech: "首都圏中心（二次情報）", geekly: "首都圏中心（二次情報）" },
  { item: "得意領域", levtech: "IT/Web全般。高年収求人比率が高い", geekly: "IT/Web/ゲーム業界に専門特化。提案スピードが強み" },
  { item: "年収アップ実績", levtech: "応募時年収との差70万円以上が3人に2人（2023年1月〜2024年3月実績）", geekly: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）" },
  { item: "利用者層", levtech: "利用者の約80%が20〜30代（公式系）", geekly: "実務経験者への提案数が多い（二次情報）" },
  { item: "料金", levtech: "求職者無料", geekly: "求職者無料" },
];

const faqs = [
  { q: "レバテックキャリアとGeeklyはどっちがおすすめ？", a: "IT/Web全般から高年収求人を幅広く見たいならレバテックキャリア、Web系・ゲーム業界に絞ってスピード感のある提案を受けたいならGeeklyがおすすめです。得意領域が異なるため、両方無料で登録して比較するのが効率的です。" },
  { q: "年収アップしやすいのはどっち？", a: "レバテックキャリアは内定承諾者のうち応募時年収との差が70万円以上の人が3人に2人（2023年1月〜2024年3月実績）。Geeklyは年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）を公表しています。集計基準が異なるため単純比較はできませんが、いずれも高年収帯の実績を打ち出しています。" },
  { q: "求人数が多いのはどっち？", a: "レバテックキャリアが約5万件超（2026年6月時点・複数転職メディア集計）、Geeklyは公開37,000件以上（2026年1月時点）・非公開含め46,000件以上（2026年5月時点・二次集計）です。いずれも時点と集計元が異なる二次情報のため、件数の多寡だけで優劣は判断しないことをおすすめします。" },
  { q: "Geeklyは連絡がしつこい？", a: "口コミプラットフォーム（Qiita Job Change等）では「レスポンスが早い」と評価する声がある一方、「連絡がしつこい」「勝手に応募されたとの報告例」という声も見られます。連絡頻度や応募範囲は初回面談で明確に希望を伝えておくと、ミスマッチを避けやすくなります。" },
  { q: "Geeklyは断られることがある？", a: "Geeklyは実務経験者への提案数が多いとされる一方、IT/Web/ゲーム特化のため、経験や希望条件によっては紹介が限定的になる場合があります。レバテックキャリアも「未経験者は紹介されにくい」との声が見られます。経験が浅い場合は総合型エージェントの併用も検討するとよいでしょう。" },
  { q: "30代エンジニアにはどっち？", a: "Web系・ゲーム業界志望でスピード重視ならGeekly、SIerやインフラ・社内SEも含め幅広く見たいならレバテックキャリアが向きます。レバテックは利用者の約80%が20〜30代（公式系）で、30代の利用実績が豊富です。" },
  { q: "40代エンジニアにはどっち？", a: "どちらも年代別の明確な実績公表はありませんが、求人レンジの広さからレバテックキャリアを軸に、Web系・ゲーム特化求人を見るためにGeeklyを併用する形が現実的です。40代は求人が絞られやすいため、複数登録で母数を確保することをおすすめします。" },
  { q: "両方登録しても大丈夫？退会は簡単？", a: "両方登録は問題なく、むしろ非公開求人の幅が広がるため推奨されます。退会はいずれも担当者へ連絡するか、登録時の手続き経由で可能です。同じ企業へ重複応募しないよう、応募状況を自分で管理しておきましょう。" },
];

const levtechReviews = {
  good: ["書類添削・面接対策が丁寧", "LINEで連絡が完結する", "高年収求人が多い"],
  bad: ["未経験者は紹介されにくい", "初回面談後の連絡が遅い場合がある", "希望と異なる求人提案の例"],
};
const geeklyReviews = {
  good: ["レスポンスが早い", "選考までスムーズ", "実務経験者への提案数が多い"],
  bad: ["連絡がしつこい", "担当者の質にばらつき", "勝手に応募されたとの報告例"],
};

const relatedLinks = [
  { name: "レバテックキャリアの詳細レビュー", href: "/review/levtech/" },
  { name: "Geekly（ギークリー）の詳細レビュー", href: "/review/geekly/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "提案スピードが速いエージェント比較", href: "/compare/speed/" },
  { name: "30代におすすめのエージェント", href: "/compare/30s-agents/" },
  { name: "エージェントの複数併用の進め方", href: "/knowledge/multiple-agents/" },
];

export default function LevtechVsGeeklyPage() {
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
        title="レバテックキャリアとGeekly比較｜どっちがおすすめ【2026年6月】"
        description="レバテックキャリアとGeeklyをどっちがおすすめか即答。求人数・年収アップ・サポート・スピード・対象層を時点付き実データで徹底比較します。"
        url="/compare/levtech-vs-geekly/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs Geekly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアとGeekly（ギークリー）比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化型エージェント2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT/Web特化型エージェントの代表格であるレバテックキャリアと、IT/Web/ゲーム業界に専門特化するGeekly（ギークリー）。どちらも経験者から支持を集めていますが、得意領域・提案スピード・年収アップの打ち出し方には明確な違いがあります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式系ガイド記事",
            "株式会社Geekly公式会社概要",
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
              幅広いIT/Web求人から高年収を狙うなら「レバテックキャリア」、Web系・ゲーム業界に絞りスピード重視なら「Geekly」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① レバテックキャリアは求人レンジが広く、高年収求人比率が高いとされる（二次情報）。LINEで連絡が完結する手軽さも評価されている。</li>
              <li>② GeeklyはIT/Web/ゲーム特化で提案スピードが強み。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）を公表。</li>
              <li>③ 得意領域が重ならない部分が多いため、両方無料で登録し非公開求人を比較するのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.levtech}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.geekly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数は時期により変動が大きく、媒体経由の二次集計値です。取得時点と出典が異なるため、件数の単純比較は推奨しません。
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
              <h3 className="font-bold text-slate-800 mb-2">Geekly：公開37,000件以上＋非公開</h3>
              <p className="text-sm text-slate-600">
                公開求人は37,000件以上（2026年1月時点）、非公開を含めると46,000件以上（2026年5月時点・二次集計）。IT/Web/ゲーム業界に特化した求人構成が特徴です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            件数はいずれも二次集計で取得時点が異なります。「どちらが多いか」よりも、自分の希望領域（Web系/ゲーム/SIer/インフラなど）にマッチした求人をどれだけ提案してもらえるかで判断するのが実務的です。
          </p>
        </section>

        {/* 年収アップ */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ実績で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-petrol-deep">
                内定承諾者のうち応募時年収との差が70万円以上の人が「3人に2人」（2023年1月〜2024年3月実績・公式系）。高年収求人の比率の高さが、年収交渉の土台になっています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600">
                年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）を公表。希望職種への定着率97%（二次）とされ、ミスマッチの少なさを打ち出しています。
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              参考までに、レバテック公表の年代別平均年収（2025年・正社員SE）は20代約378万／30代約499万／40代約618万／50代約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%です。現在の年収がこの水準より低い場合、年収アップの余地が大きいと考えられます。
            </p>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計期間・基準が各社で異なるため、数値の単純な大小比較はできません。あくまで各社の公表値・公表系の傾向として参照してください。
          </p>
        </section>

        {/* サポート */}
        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート体制で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックキャリアは書類添削・面接対策の丁寧さと、LINEで連絡が完結する手軽さが評価されています。GeeklyはIT/Web/ゲーム業界に精通した提案力と、選考までのスムーズさが強みです。どちらもIT特化型のため、総合型エージェントよりも技術的な文脈を理解した支援を受けやすい傾向があります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方で、両社とも「担当者の質にばらつき」「連絡頻度」に関する声が口コミに見られます。担当者との相性が合わない場合は、変更を申し出るか併用先の担当者をメインに据える判断も有効です。
          </p>
        </section>

        {/* スピード */}
        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提案スピードで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            提案スピードはGeeklyの強みとして語られることが多く、「レスポンスが早い」「選考までスムーズ」という声が口コミに見られます。一方、レバテックキャリアは「初回面談後の連絡が遅い場合がある」との声もあり、タイミングによって体感差が出ることがあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            在職中で転職活動の時間が限られる30代・40代にとって、レスポンスの速さは実利に直結します。スピードを最優先するならGeeklyを軸にしつつ、求人レンジの広さを補うためにレバテックキャリアを併用する形が現実的です。
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
              <p className="text-xs text-slate-500 mt-3">※ 利用者の約80%が20〜30代（公式系）。高年収求人比率の高さが特徴。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Geeklyが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["Web系", "ゲーム業界", "IT/Web特化", "提案スピード", "実務経験者への提案数"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ IT/Web/ゲーム業界専門特化。希望職種への定着率97%（二次）。</p>
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
              <h3 className="font-bold text-green-800 mb-3">Geeklyの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {geeklyReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {geeklyReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 2b-connect／転職アンテナ／Qiita Job Change 等の傾向</p>
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
                <li>✓ SIer・社内SE・インフラも視野に入れている</li>
                <li>✓ 高年収帯（600万円以上）を狙いたい</li>
                <li>✓ LINEで気軽にやり取りしたい</li>
                <li>✓ 書類添削・面接対策をしっかり受けたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Geeklyが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ Web系・ゲーム業界に絞って転職したい</li>
                <li>✓ スピード感を持って進めたい</li>
                <li>✓ 実務経験を活かした提案が欲しい</li>
                <li>✓ ミスマッチの少なさを重視する</li>
                <li>✓ 在職中で短期集中で動きたい</li>
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
                { num: "1", title: "レバテックキャリアが向くケース", desc: "SIer・インフラ・社内SEを含め幅広く比較したい、高年収求人の母数を増やしたい場合はレバテックキャリアを軸に。" },
                { num: "2", title: "Geeklyが向くケース", desc: "Web系・ゲーム業界に絞り、スピード感を持って選考を進めたい場合はGeeklyを軸に。" },
                { num: "3", title: "併用パターン", desc: "両方無料のため、まず2社に登録し非公開求人と担当者の提案を比較。相性の良い担当者をメインに据え、もう一方を補助的に使うと選択肢と交渉材料が最大化します。" },
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
              併用時は同じ企業への重複応募を避けるため、応募状況を自分で管理しておきましょう。詳しくは
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
              30代・40代の転職は、20代と違って「ポテンシャル」ではなく「これまでの実績と専門性」で評価されます。レバテックキャリアは利用者の約80%が20〜30代（公式系）で、30代の利用実績が厚い一方、高年収帯の求人を多く扱うため、ミドル層の年収交渉の土台になりやすいのが特徴です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              GeeklyはWeb系・ゲーム業界の実務経験者への提案数が多いとされ、現場の即戦力としてのキャリアを継続したい人に向きます。一方、両社とも年代別の明確な実績は公表していないため、40代では求人の母数が絞られやすい点に注意が必要です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの需要は構造的に存在します。だからこそ、年代でターゲットを絞り込みすぎず、複数のIT特化型エージェントで母数を確保し、自分の専門領域に強い担当者を見極めることが、30代・40代の転職成功の近道です。
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
            レバテックキャリアとGeeklyは両方無料。得意領域が異なるため、2社に登録して非公開求人と提案を比較しましょう。
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
