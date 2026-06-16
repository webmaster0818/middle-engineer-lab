import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "リクルートエージェントとdodaの比較｜IT転職どっち【2026年6月】",
  description:
    "リクルートエージェントITとdoda ITを求人数・年収・サポート・スピード・対象層で徹底比較。総合型2大エージェントのIT求人の違い、30代40代エンジニアの選び方、口コミ傾向、IT特化型との併用術まで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "kyujin", label: "項目別比較①：求人数・求人の傾向" },
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
  { item: "運営会社", a: "株式会社リクルート（1977年創業・二次）", b: "パーソルキャリア株式会社（1989年設立・従業員7,048名）" },
  { item: "サービス形態", a: "総合型エージェント（IT領域含む）", b: "総合型。検索＋エージェント＋スカウトのハイブリッド" },
  { item: "IT公開求人数", a: "IT公開求人110,840件／非公開101,680件（2026年5月22日時点・二次集計）", b: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）" },
  { item: "対応エリア", a: "全国", b: "全国" },
  { item: "得意領域（IT傾向）", a: "国内最大級の求人数。大手〜スタートアップまで網羅。非公開求人が豊富", b: "求人量が多く好条件求人が多い。検索とスカウトの併用が可能" },
  { item: "年収アップ実績", a: "統一された公式アップ率は未確認（断定なし）", b: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万→486万円（2024年度・公表値）" },
  { item: "サポート", a: "書類添削・面接対策が丁寧。サポート期間は3か月との声", b: "2名体制でのサポートになる場合あり。コンテンツが充実" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

const faqs = [
  { q: "リクルートエージェントとdodaの最大の違いは何ですか？", a: "どちらも国内最大級の総合型ですが、リクルートエージェントは求人数の多さが際立ちます（IT公開求人110,840件・非公開101,680件／2026年5月22日時点の二次集計）。dodaは「検索＋エージェント＋スカウト」のハイブリッド型で、自分でも求人を探せる自由度が特徴です。受け身で提案を待つならリクルート、自分でも動きたいならdodaという整理ができます。" },
  { q: "IT求人が多いのはどちらですか？", a: "求人数の絶対値ではリクルートエージェントが多く、IT公開求人110,840件・非公開101,680件（2026年5月22日時点・二次集計）です。dodaもIT・通信エンジニア求人5万件超（2026年2月時点・二次経由）と豊富で、検索機能で自分の条件に合う求人を直接探せます。数を重視するならリクルート、探しやすさも重視するならdodaです。" },
  { q: "年収アップを狙うならどちらがおすすめですか？", a: "dodaは運営元パーソルキャリアの『2024年度 決定年収レポート』（2025年5月公表）で、転職者の約6割が年収アップ、IT・通信の平均決定年収が469万円（2023年度）から486万円（2024年度）に上昇したと公表しています。リクルートエージェントは統一された公式アップ率が未確認のため断定はできませんが、求人数の多さから条件の良い求人に出会える機会が多い構造です。" },
  { q: "サポートが手厚いのはどちらですか？", a: "リクルートエージェントは実績に基づく書類添削・面接対策が丁寧という評判がある一方、サポート期間が3か月で短い、対応が事務的という声もあります（Qiita Job Change等）。dodaは2名体制でサポートされる場合があり、自己分析ツールなどコンテンツが充実しています。ただしどちらもアドバイザー個人の力量に左右される点は共通です。" },
  { q: "連絡が多い・しつこいという口コミは本当ですか？", a: "両社とも求人・連絡が多すぎるという声が見られます（リクルートは連絡頻度が高い、dodaは求人・連絡が多すぎるとの指摘）。これは求人量が多いことの裏返しでもあります。希望条件と連絡手段・頻度を最初に明確に伝えることで、配信量をコントロールできます。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "どちらも全年代に対応します。求人の絶対数が多いリクルートエージェントは、40代の管理職求人や地方求人も含め選択肢を広く確保しやすい傾向です。dodaは検索とスカウトを併用でき、自分のペースで進めたい30代のキャリアアップ転職と相性が良い傾向です。詳しくは記事内の「30代・40代の視点」をご覧ください。" },
  { q: "退会や連絡停止は簡単にできますか？", a: "両サービスとも会員ページや担当者への連絡で退会・配信停止が可能です。連絡が多いと感じる場合は、退会の前にまず連絡頻度や希望条件の見直しを依頼すると、必要な求人だけを受け取れるようになります。" },
  { q: "IT特化型エージェントと併用すべきですか？", a: "おすすめです。総合型2社を重ねるより、リクルートまたはdodaのどちらか1社に、レバテックキャリアやGeeklyなどIT特化型を組み合わせる方が効率的です。総合型は1社で十分な求人数を確保でき、IT特化型は技術理解の深いアドバイザーが補完してくれます。" },
];

const goodRec = [
  "とにかく多くの求人から選びたい",
  "大手からスタートアップまで幅広く比較したい",
  "非公開求人にもアクセスしたい",
  "書類添削・面接対策を実績ベースで受けたい",
  "40代で管理職・地方求人も視野に入れている",
];
const goodDoda = [
  "エージェント任せでなく自分でも求人を探したい",
  "スカウト機能も使って受け身の発見もしたい",
  "年収アップの実績データを重視したい",
  "自己分析ツールなどコンテンツを活用したい",
  "自分のペースでじっくり進めたい",
];

export default function RecruitVsDodaPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="リクルートエージェントとdodaの比較｜IT転職はどっち" description="リクルートエージェントITとdoda ITを求人数・年収・サポート・スピード・対象層で徹底比較。30代40代エンジニアの選び方を解説します。" url="/compare/recruit-vs-doda/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "リクルートエージェントIT vs doda IT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リクルートエージェントとdodaをIT転職で徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 国内最大級の総合型エージェント2社をIT視点で比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「リクルートエージェント doda IT 比較」で検索する方は、どちらの総合型に登録すべきか迷っているはずです。本記事は30代・40代のITエンジニア向けに、両サービスを求人数・年収・サポート・スピード・対象層の5項目で比較し、口コミ傾向とIT特化型との併用術まで整理しました。</p>

        <DataNote surveyedAt="2026年6月" sources={["doda公式・パーソルキャリア決定年収レポート（2025年5月公表）", "リクルートエージェントIT 求人数の転職メディア集計（2026年5月22日時点）", "Qiita Job Change", "studio-tale", "HonNe等の口コミメディア集計"]} />

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
              <li><strong>・求人数の多さと選択肢の広さを最優先するなら「リクルートエージェント」</strong>。IT公開求人110,840件・非公開101,680件（2026年5月22日時点・二次集計）と国内最大級です。</li>
              <li><strong>・自分でも求人を探したい・年収アップ実績を重視するなら「doda」</strong>。検索＋エージェント＋スカウトのハイブリッドで、転職者の約6割が年収アップ（公表値）。</li>
              <li><strong>・最適解は「どちらか1社＋IT特化型」</strong>。総合型は1社で十分な求人数を確保でき、IT特化型が技術理解の深さを補います。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">両社とも完全無料です。理由は次の比較表と項目別解説で詳しく見ていきましょう。</p>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートエージェントIT</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">doda IT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数はリクルート＝2026年5月22日時点、doda＝2026年2月時点の転職メディア集計（二次情報）です。求人数は時期により変動します。年収アップ実績はパーソルキャリア公表値（2025年5月公表）に基づきます。</p>
        </section>

        <section id="kyujin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：求人数・求人の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートエージェントは国内最大級の求人数が最大の武器です。IT公開求人110,840件に加え、非公開求人101,680件（いずれも2026年5月22日時点・二次集計）を保有し、大手からスタートアップまで網羅します。非公開求人が豊富なため、エージェント経由でしか出会えない案件にアクセスできるのが強みです。</p>
          <p className="text-slate-600 leading-relaxed mb-4">dodaはIT・通信エンジニア求人5万件超（2026年2月時点・二次経由）を保有し、検索＋エージェント＋スカウトのハイブリッド型である点が特徴です。自分で求人を検索して直接応募することも、アドバイザーに提案してもらうことも、スカウトを待つこともできます。求人量と「探しやすさ」を両立したい人に向きます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p><strong>まとめ：</strong>非公開求人を含む総量の多さならリクルート、自分でも探せる柔軟さならdoda。なお、いずれも総合型のためIT専門性は<Link href="/compare/levtech-vs-doda/" className="text-petrol hover:underline">IT特化型エージェント</Link>に一歩譲る場面があり、併用が前提になります。</p>
          </div>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：年収アップ実績</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは運営元パーソルキャリアの『2024年度 決定年収レポート』（2025年5月公表）で、転職者の約6割が年収アップしたこと、IT・通信の平均決定年収が469万円（2023年度）から486万円（2024年度）へ上昇したことを公表しています。年収アップの実績が公的なレポートとして示されている点は、判断材料として大きな安心感があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートエージェントは統一された公式の年収アップ率が確認できないため、ここでは断定を避けます。ただし、求人数が国内最大級であること自体が、より条件の良い求人に出会える機会の多さにつながります。複数の選択肢を比較できる環境は、結果として年収交渉の余地を広げます。</p>
          <p className="text-slate-600 leading-relaxed text-sm">年代別の年収相場は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収ランキング</Link>、交渉の具体策は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>もあわせてご確認ください。</p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート体制</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リクルートエージェント</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">蓄積された実績に基づく書類添削・面接対策が丁寧という評判があります（Qiita Job Change等）。一方で、対応が事務的という声や、サポート期間が3か月で短いという指摘もあり、期間内に集中して動ける人に向きます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda</h3>
              <p className="text-sm text-slate-600 leading-relaxed">2名体制でサポートされる場合があり、求人紹介とサポートが分業されることがあります。自己分析ツールやコンテンツが充実しており、自分で考えながら進めたい人に向きます。アドバイザーの質にばらつきがあるという声も見られます（freeconsul／HonNe等）。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どちらもアドバイザー個人の力量に左右されるため、相性が合わない場合は担当変更を申し出るのが有効です。<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">初回面談の進め方</Link>も参考にしてください。</p>
        </section>

        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：スピード・連絡頻度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">両社とも求人数が多いぶん、登録直後から多くの求人紹介・連絡が届く傾向があります。リクルートエージェントは連絡頻度が高い、dodaは求人・連絡が多すぎるという声がそれぞれ見られます（Qiita Job Change／freeconsul等）。</p>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは自分で検索して応募できるため、エージェントの提案を待たずに自分のペースで進められる点でスピード感を自分でコントロールしやすい設計です。連絡が多いと感じる場合は、希望条件と連絡頻度を最初に明確に伝えることで配信量を抑えられます。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較⑤：対象層・年代適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">リクルートエージェントは全国・全年代・全領域をカバーする求人量が強みで、40代の管理職求人や地方求人も含め幅広い選択肢を確保しやすい傾向です。選択肢を最大化したい人に向きます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは検索・エージェント・スカウトを使い分けられるため、自分の市場価値を測りながら能動的に動きたい30代のキャリアアップ層と相性が良い設計です。なお、どちらも総合型のためIT専門性の深さでは特化型に譲る場面があり、IT特化型の併用が現実的です。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita Job Change・studio-tale・best-w・freeconsul・HonNe等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>圧倒的な求人数</li><li>非公開求人が充実</li><li>書類添削・面接対策が丁寧</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>対応が事務的との声</li><li>連絡頻度が高い</li><li>サポート期間が3か月で短い</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita Job Change等</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">dodaの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>求人量が多い</li><li>好条件求人が多い</li><li>2名体制サポートの場合あり</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>求人・連絡が多すぎる</li><li>アドバイザーの質にばらつき</li><li>IT専門性がやや低いとの声</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：studio-tale／best-w／freeconsul／HonNe等</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">リクルートエージェントが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodRec.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">dodaが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodDoda.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "リクルートが向くケース", desc: "選択肢を最大化したい、非公開求人を含めて幅広く比較したい場合。求人数の多さを軸に据えます。" },
                { num: "2", title: "dodaが向くケース", desc: "自分でも求人を探したい、年収アップの実績データを重視したい場合。検索とスカウトを使い分けます。" },
                { num: "3", title: "併用パターン（推奨）", desc: "総合型はどちらか1社に絞り、レバテックキャリアやGeeklyなどIT特化型を1〜2社加える。総合型で量を、IT特化型で専門性を確保します。" },
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
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験のある30代・40代エンジニアにとって追い風の市場ですが、総合型2社は活かし方が少し異なります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>キャリアの方向性を広げたい時期には、dodaの「検索＋エージェント＋スカウト」のハイブリッドが有効です。自分で求人を探して相場観を養いつつ、スカウトで思わぬ選択肢にも出会えます。dodaの公表値ではIT・通信の平均決定年収が486万円（2024年度）まで上昇しており、30代の年収アップ転職の現実的な目安になります。能動的に動きたい30代に向いた設計です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>40代は求人の母数そのものが選考突破率を左右します。リクルートエージェントはIT公開求人110,840件・非公開101,680件（2026年5月22日時点・二次集計）という国内最大級の求人量で、管理職ポジションや地方求人まで含めて選択肢を広く確保できます。ただしサポート期間が3か月との声があるため、登録後は集中的に動くのが得策です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">いずれの年代でも、総合型1社で求人の母数を確保しつつ、IT特化型で技術理解の深いサポートを補う二段構えが、ミドルエンジニアの失敗を減らす進め方です。</p>
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
          <h2 className="text-xl font-bold mb-3">総合型は1社＋IT特化型で死角をなくす</h2>
          <p className="text-blue-100 text-sm mb-4">リクルートまたはdodaで求人の母数を確保し、IT特化型で専門性を補う。30代・40代エンジニアに最適な組み合わせです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs doda 比較", href: "/compare/levtech-vs-doda/" },
              { name: "doda vs マイナビIT 比較", href: "/compare/doda-vs-mynavi/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
              { name: "dodaの評判・口コミ", href: "/review/doda-it/" },
              { name: "リクルートエージェントITの評判", href: "/review/recruit-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
