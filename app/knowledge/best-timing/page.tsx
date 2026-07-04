import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニア転職は何月がベスト？【2026年】求人が増える時期と逆算スケジュール";
const DESCRIPTION =
  "転職に有利な時期を公表データで解説。dodaの転職求人倍率は2026年5月に2.44倍、エンジニア（IT・通信）は10.68倍（2026年3月）。求人が増える1〜3月・9〜10月の理由、ボーナスとの兼ね合い、応募から入社までの逆算スケジュールまで、30代・40代エンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：狙い目は「9〜10月」と「1〜3月」" },
  { id: "data", label: "公表データで見る転職市場の今" },
  { id: "monthly", label: "月別の求人動向カレンダー" },
  { id: "why", label: "なぜ9〜10月と1〜3月に求人が増えるのか" },
  { id: "schedule", label: "入社月から逆算するスケジュール" },
  { id: "bonus", label: "ボーナスとの兼ね合い" },
  { id: "faq", label: "よくある質問" },
];

const monthly = [
  { period: "1〜3月", level: "◎ 多い", note: "4月入社に向けて採用が本格化。年度末退職の欠員補充・採用予算の消化も重なる（リクルートエージェント・マイナビの公式解説）。dodaの新規求人数は1月が最多水準。" },
  { period: "4〜6月", level: "○ 安定", note: "新年度の組織固め後、新卒採用の充足不足を中途で補う動きと夏ボーナス後の退職に備えた採用が出る（マイナビは5〜6月を増加期に挙げる）。" },
  { period: "7〜8月", level: "△ やや少ない", note: "dodaの法人向け解説では8月は新規求人が少ない月。お盆休みで選考が間延びしやすい時期でもある。" },
  { period: "9〜10月", level: "◎ 多い", note: "下半期の事業計画に基づく増員と、9月末退職の欠員補充が重なる（リクルートエージェント公式解説）。dodaは10月を新規求人の最多月に挙げる。" },
  { period: "11〜12月", level: "△ 少ない", note: "dodaの法人向け解説では11月・12月は新規求人が少ない月。年末は選考も停滞しがちだが、競争率が下がる側面もある。" },
];

const faqs = [
  {
    q: "エンジニアの転職求人倍率はどのくらいですか？",
    a: "dodaの転職求人倍率レポートでは、職種別「エンジニア（IT・通信）」は10.68倍（2026年3月時点・前年同月差-1.15pt）と、引き続き10倍を超える高水準です。全体の転職求人倍率は2.44倍（2026年5月）なので、エンジニアは全職種平均の4倍以上の売り手市場が続いています。",
  },
  {
    q: "求人が増えるのは何月ですか？",
    a: "大手エージェントの公式解説が共通して挙げるのは「1〜3月」と「9〜10月」です。dodaの法人向け解説では新規求人数が最も多いのは1月と10月、少ないのは8月・11月・12月とされています。マイナビは5〜6月も増加期に挙げており、年間で複数の波があります。",
  },
  {
    q: "9〜10月の転職を狙うなら、いつから動くべきですか？",
    a: "転職活動は書類準備〜内定まで一般に2〜3ヶ月かかります。9〜10月の求人増を狙うなら7〜8月に職務経歴書の整備とエージェント登録を済ませ、求人が出始めたタイミングで即応募できる状態にしておくのが逆算の基本です。",
  },
  {
    q: "求人が少ない時期に活動するのは不利ですか？",
    a: "一概には言えません。求人数自体は減っても、応募者（ライバル）も減るため、競争率が下がる側面があります。通年採用のIT企業も多く、「いい求人が出たときに動ける準備」の方が時期よりも重要です。",
  },
  {
    q: "ボーナスをもらってから辞めるべきですか？",
    a: "夏賞与（6〜7月支給が多い）を受け取ってから活動を本格化すると、ちょうど9〜10月の求人増に乗れるため、時期の相性は良好です。ただし支給日在籍要件など就業規則の確認が前提です。詳しくはボーナス時期と転職タイミングの記事で解説しています。",
  },
  {
    q: "IT人材の不足は今後も続きますか？",
    a: "経済産業省の試算（2019年公表）では、IT人材の需給ギャップは2030年に中位シナリオで約45万人、最大で約79万人の不足とされています。また、IPAのDX動向2025では、DX推進人材が「不足している」と答えた日本企業は85.1%にのぼります。構造的な売り手市場は当面続くと見られますが、職種・スキルによる濃淡は広がっています。",
  },
];

const relatedLinks = [
  { href: "/knowledge/bonus-timing/", label: "ボーナス時期と転職タイミング" },
  { href: "/knowledge/resignation/", label: "退職の切り出し方" },
  { href: "/knowledge/smooth-resignation/", label: "円満退職の進め方" },
  { href: "/knowledge/resume/", label: "職務経歴書の書き方" },
];

export default function BestTimingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/best-timing/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職は何月がベスト？" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職は何月がベスト？求人が増える時期と逆算スケジュール
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 | 公表データにもとづく月別の求人動向と動き出しの目安
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「転職するなら何月がいいのか」。答えは公表データにかなりはっきり出ています。本記事では、dodaの転職求人倍率レポート・厚生労働省の一般職業紹介状況・大手エージェント各社の公式解説をもとに、求人が増える時期とその理由、そして狙った時期に間に合わせるための逆算スケジュールを解説します。
        </p>

        <DataNote
          surveyedAt="2026年7月"
          sources={[
            "doda 転職求人倍率レポート（パーソルキャリア、2026年5月分・2026年6月18日発表）",
            "doda転職求人倍率レポート 2026年4月発行版（法人向け・職種別）",
            "厚生労働省 一般職業紹介状況（令和8年5月分・2026年6月30日公表）",
            "リクルートエージェント・マイナビ転職エージェント・doda法人向けの各公式解説",
            "経済産業省 IT人材需給に関する調査（2019年）／IPA DX動向2025",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：狙い目は「9〜10月」と「1〜3月」</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              大手エージェントの公式解説が共通して挙げる求人の増加期は<strong>「1〜3月」と「9〜10月」</strong>です。dodaの法人向け解説では、新規求人数が最も多いのは<strong>1月と10月</strong>（企業の上期・下期の切り替わりが理由）とされています。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              いまから狙うなら<strong>次の波は9〜10月</strong>。応募〜内定は一般に2〜3ヶ月かかるため、<strong>7〜8月のうちに職務経歴書とエージェント登録を済ませておく</strong>のが逆算の答えです。
            </p>
            <p className="text-slate-700 leading-relaxed">
              なおエンジニア（IT・通信）の求人倍率は10.68倍（doda・2026年3月時点）と全職種平均（2.44倍）の4倍以上。「時期を待つ」より「いい求人が出た瞬間に動ける準備」の方が重要というのが、データが示すもう一つの結論です。
            </p>
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公表データで見る転職市場の今（2026年）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 text-left">指標</th>
                  <th className="p-3 text-left">数値</th>
                  <th className="p-3 text-left">出典・時点</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-t border-slate-100"><td className="p-3 font-semibold">転職求人倍率（全体）</td><td className="p-3">2.44倍（前月比+0.06pt・前年比+0.16pt）</td><td className="p-3">doda・2026年5月</td></tr>
                <tr className="border-t border-slate-100"><td className="p-3 font-semibold">エンジニア（IT・通信）</td><td className="p-3">10.68倍（前年同月差-1.15pt）</td><td className="p-3">doda・2026年3月</td></tr>
                <tr className="border-t border-slate-100"><td className="p-3 font-semibold">有効求人倍率（全体）</td><td className="p-3">1.17倍（季節調整値）</td><td className="p-3">厚生労働省・2026年5月</td></tr>
                <tr className="border-t border-slate-100"><td className="p-3 font-semibold">情報処理・通信技術者</td><td className="p-3">有効1.30倍・新規2.86倍（常用・原数値）</td><td className="p-3">厚生労働省・2026年5月</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            ※dodaはエージェントサービス登録者ベース、厚労省はハローワーク経由の求人のみの統計です。エージェント経由が主戦場のITエンジニア転職では、doda値（10倍超）の方が実感に近い一方、厚労省値でもIT技術者は職業計（有効0.99倍）を上回っています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            2026年上期の全体推移は、1月2.57倍→2月2.40倍→3月2.39倍→4月2.38倍→5月2.44倍。求人数は前年同月比+14.9%（5月）と増え続けており、市場全体は堅調です。
          </p>
        </section>

        {/* 月別カレンダー */}
        <section id="monthly" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">月別の求人動向カレンダー</h2>
          <div className="space-y-3">
            {monthly.map((m) => (
              <div key={m.period} className="border border-slate-200 rounded-xl p-4 flex gap-4 items-start">
                <div className="shrink-0 w-24">
                  <p className="font-bold text-slate-800">{m.period}</p>
                  <p className="text-sm text-petrol font-semibold">{m.level}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{m.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            ※増減の傾向はdoda（法人向け解説）・リクルートエージェント・マイナビ転職エージェントの公式解説にもとづく一般的な季節性です。年・業界により変動します。
          </p>
        </section>

        {/* なぜ増えるか */}
        <section id="why" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ9〜10月と1〜3月に求人が増えるのか</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">9〜10月：下半期の増員＋欠員補充</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                10月は多くの企業で下半期の始まり。下期の事業計画に基づく増員求人が出るのに加え、9月末退職（夏賞与後の退職を含む）の欠員補充が重なります。組織再編で新しいポジションが生まれやすいのもこの時期です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">1〜3月：4月入社への採用ラッシュ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                4月の期初入社に間に合わせるため、1月から採用活動が本格化します。年度末退職の欠員補充と、余った採用予算の消化が重なり、dodaの解説では1月が新規求人の最多月とされています。
              </p>
            </div>
          </div>
        </section>

        {/* 逆算スケジュール */}
        <section id="schedule" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社月から逆算するスケジュール（10月・1月入社の例）</h2>
          <div className="space-y-4">
            {[
              { step: "3ヶ月前", title: "準備（7月／10月）", desc: "職務経歴書の整備・ポートフォリオ更新・エージェント登録。この時点で市場の求人を眺めて相場観を作っておくと、増加期に即応募できます。" },
              { step: "2ヶ月前", title: "応募・面接（8月／11月）", desc: "求人が出始めたら応募開始。書類選考〜面接2〜3回で通常3〜6週間。並行応募で比較材料を作ります。" },
              { step: "1ヶ月前", title: "内定・退職交渉（9月／12月）", desc: "内定受諾後、現職へ退職を申し出て引き継ぎ。就業規則の退職予告期間（1ヶ月前が多い）を確認しておきます。" },
              { step: "入社月", title: "入社（10月／1月）", desc: "期初入社は受け入れ体制・研修が整いやすく、同時期入社の中途仲間ができやすいのも利点です。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-xl p-4">
                <span className="shrink-0 bg-petrol-soft text-petrol font-bold text-xs rounded-full px-3 py-1.5">{s.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ボーナス */}
        <section id="bonus" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ボーナスとの兼ね合い</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            夏賞与（6〜7月支給が多い）を受け取ってから動き出すと、ちょうど9〜10月の求人増加期に乗れるため、時期の相性は良好です。冬賞与（12月支給が多い）の場合も、受給後の1〜3月が増加期にあたります。つまり<strong>「賞与を取ってから次の増加期を狙う」波は年2回ある</strong>ということです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ただし賞与には支給日在籍要件などの規定があるため、就業規則の確認が前提です。詳しくは
            <Link href="/knowledge/bonus-timing/" className="text-petrol underline font-semibold">ボーナス時期と転職タイミング</Link>
            で解説しています。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-xl">
                <summary className="cursor-pointer p-4 font-semibold text-slate-800 text-sm">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-3">増加期に「即応募できる状態」を作るなら</h2>
          <p className="text-slate-300 text-sm mb-6">
            求人の波に乗る最大のコツは事前準備です。エージェントに登録しておくと、増加期の非公開求人をいち早く紹介してもらえます。
          </p>
          <Link href="/" className="inline-block bg-white text-slate-800 font-bold rounded-lg px-8 py-3 text-sm hover:bg-slate-100 transition-colors">
            転職エージェントおすすめランキングを見る
          </Link>
        </div>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="border border-slate-200 rounded-xl p-4 text-sm font-semibold text-petrol hover:border-petrol transition-colors">
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
