import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "40代エンジニアの年収相場と維持・アップ戦略【2026年版】";
const DESCRIPTION =
  "40代ITエンジニアの年収相場を公的統計とエージェント公表値で解説。レバテック公表の40代平均約618万円・年収1,000万円以上12.67%などを時点付きで紹介し、年収を維持・アップする戦略と下落リスクの対策をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-40s/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：40代の年収相場と戦略" },
  { id: "data", label: "40代エンジニアの年収データ（出典付き）" },
  { id: "career", label: "キャリアの軸と年収の関係" },
  { id: "strategy", label: "40代で年収を維持・アップする5つの戦略" },
  { id: "risk", label: "40代で年収が下がるリスクと対策" },
  { id: "checklist", label: "年収を守るためのチェックリスト" },
  { id: "midlife", label: "40代という年代の独自事情" },
  { id: "faq", label: "よくある質問" },
];

const salaryData = [
  { age: "20代", salary: "約378万円", note: "経験を積む時期" },
  { age: "30代", salary: "約499万円", note: "キャリアの軸が分かれ始める" },
  { age: "40代", salary: "約618万円", note: "役職・専門性で最も差が開く" },
  { age: "50代", salary: "約685万円", note: "管理職・高度専門職が牽引" },
];

const careerAxes = [
  {
    title: "マネジメント路線",
    desc: "エンジニアリングマネージャー、開発部長、PMなど。チームと事業を動かす責任が報酬に反映されます。技術判断と人・予算のマネジメントを両立できる人材は、40代でも提示レンジが高くなりやすい傾向です。",
  },
  {
    title: "スペシャリスト路線",
    desc: "アーキテクト、SRE、セキュリティ、データなどの高度専門職。近年は専門性に高い報酬を払う企業が増えており、マネジメントに進まなくても年収を伸ばす道が広がっています。",
  },
  {
    title: "ハイブリッド（テックリード）",
    desc: "技術の意思決定とチームの牽引を兼ねるポジション。マネジメントに振り切りたくない人が年収を維持しやすい選択肢で、40代の求人でも需要があります。",
  },
];

const strategies = [
  {
    num: "1",
    title: "量より質の転職活動に切り替える",
    desc: "40代は応募数を増やすより、自分の強みが活きる求人に絞るほうが結果につながります。役職・専門性が評価される求人を見極めるために、ハイクラス・IT特化のエージェントを併用するのが効率的です。",
  },
  {
    num: "2",
    title: "需要の伸びる領域のスキルを補強する",
    desc: "クラウド基盤、SRE、セキュリティ、データ領域など需要の高い分野の経験や資格は、年収レンジを一段引き上げる材料になります。長く同じ技術にとどまっている場合は、直近トレンドのキャッチアップが必須です。",
  },
  {
    num: "3",
    title: "マネジメント／スペシャリストの軸を明確にする",
    desc: "40代で『どちらも中途半端』の状態は評価されにくくなります。これまでの経験から自分の強い軸を言語化し、その軸が活きるポジションを狙うことで、年収維持・アップの確度が上がります。",
  },
  {
    num: "4",
    title: "市場価値を客観的に把握してから動く",
    desc: "40代の転職は年収維持が一つの目標になります。まずエージェントで現在の想定年収レンジを確認し、現職に残った場合と比較して判断します。思い込みで動くと年収ダウンのリスクが高まります。",
  },
  {
    num: "5",
    title: "副業・技術顧問で収入源を分散する",
    desc: "40代の豊富な経験は、技術顧問やアドバイザリーなどスポットの仕事と相性が良い場合があります。本業の年収に上限を感じる場合、副業で収入源を増やす選択肢も検討に値します。",
  },
];

const risks = [
  {
    title: "技術スタックが古いまま",
    desc: "長年同じ技術だけで業務を続けてきた場合、市場価値が下がるリスクがあります。コンテナ・CI/CD・クラウドなど、直近トレンドのキャッチアップが最低限求められます。",
    advice: "まずは現職の業務に取り入れられる新技術を1つ選び、小さな実績を作る。",
  },
  {
    title: "「なんでも屋」になっている",
    desc: "広く浅いスキルセットは、40代では評価されにくくなります。『この領域なら任せられる』という専門性が見えないと、提示レンジが伸び悩みます。",
    advice: "これまでの経験を棚卸しし、最も強い1〜2領域を専門軸として打ち出す。",
  },
  {
    title: "役職と報酬を混同している",
    desc: "現職での役職手当を前提に高い年収を希望すると、役職なしの提示で大きく下がることがあります。役職に依存しない実力ベースの市場価値を把握することが重要です。",
    advice: "役職を外した『純粋な技術・マネジメント力』での市場相場をエージェントに確認する。",
  },
];

const checklist = [
  "直近3年で需要の高いスキルを1つも増やせていない",
  "「この領域の専門家」と言える軸がない",
  "自分の市場価値を客観的に確認したことがない",
  "現職の役職手当を前提に年収を考えている",
  "転職市場での需要を把握しないまま不安だけが先行している",
  "マネジメントとスペシャリストの方向性が定まっていない",
];

const faqs = [
  {
    q: "40代エンジニアの平均年収はいくらですか？",
    a: "レバテックが公表する2025年の年代別平均年収では、正社員エンジニアの40代は約618万円です（career.levtech.jp / freelance.levtech.jpガイド記事・2025年）。参考として、厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）と公表されています。役職や専門性により個人差が大きい年代です。",
  },
  {
    q: "40代で年収1,000万円を超える人はどのくらいいますか？",
    a: "レバテック公表（2025年）では、年収1,000万円以上の割合は40代で12.67%とされています。30代の8.01%より高く、マネジメントや高度専門職など、軸を定めて実績を積んだ人が到達していることがうかがえます。",
  },
  {
    q: "40代で年収が下がるケースはありますか？",
    a: "あります。技術のアップデートを怠っていた場合や、マネジメント経験も明確な専門性もない『なんでも屋』状態の場合、また現職の役職手当を前提に高い希望を出した場合などに、転職で年収が下がるリスクがあります。対策は本文の『下がるリスクと対策』で解説しています。",
  },
  {
    q: "マネジメントとスペシャリスト、どちらが年収が高いですか？",
    a: "従来はマネジメント職の上限が高い傾向でしたが、近年はスペシャリストに高い報酬を払う企業も増えています。一概にどちらが高いとは言えず、自分の強みと志向に合った軸を選び、その軸が評価される企業を狙うのが現実的です。",
  },
  {
    q: "40代からでも年収アップ転職はできますか？",
    a: "可能です。需要の高い領域の専門性やマネジメント経験など、40代ならではの強みを言語化し、それが評価される求人に絞ることが鍵です。応募数を増やすより、質を重視した転職活動が向いています。",
  },
  {
    q: "40代の年収交渉で気をつけることは？",
    a: "市場相場を正確に把握したうえで臨むことが重要です。役職手当を前提にした希望ではなく、実力ベースの市場価値を根拠にしましょう。エージェント経由なら、企業の予算感を踏まえた交渉を任せられます。詳しくは年収交渉の記事を参照してください。",
  },
  {
    q: "IT人材の需要は40代にも続きますか？",
    a: "経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算では、2030年に最大約79万人のIT人材不足が見込まれています。あくまで2019年公表の試算ですが、経験者へのニーズが中長期的に底堅いことを示す材料として参照されています。",
  },
];

export default function Salary40sPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/salary-40s/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "40代エンジニアの年収相場" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          40代エンジニアの年収相場と維持・アップ戦略【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 公的統計・エージェント公表値でみる40代の年収
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          40代エンジニアにとって「年収を維持できるか」「まだ上げられるか」は大きな関心事です。結論から言えば、戦略次第で40代からの年収維持・アップは十分に可能です。本記事では、公的統計とエージェント公表値をもとに40代の年収相場を確認し、維持・アップの戦略と、年収が下がるリスクへの対策を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "厚生労働省 job tag システムエンジニア（受託開発）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
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

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】40代エンジニアの年収相場はいくら？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: レバテック公表（2025年）の年代別平均では、正社員エンジニアの40代は約618万円が相場の目安です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・レバテック公表（2025年）で40代の平均は約618万円。年収1,000万円以上は40代で12.67%（30代の8.01%を上回る）。</li><li>・厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収578.5万円・平均年齢37.1歳。</li><li>・40代は個人差が最も開く年代。マネジメントかスペシャリストかの軸を明確にすることが鍵。</li><li>・古い技術のまま／「なんでも屋」のままだと年収が下がるリスクがあり、専門性の打ち出しが重要。</li></ul>
          </div>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：40代の年収相場と戦略</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              レバテックが公表する2025年の年代別平均年収では、正社員エンジニアの<strong>40代は約618万円</strong>。年収1,000万円以上の割合は<strong>40代で12.67%</strong>とされ、30代の8.01%を上回ります。公的統計では、厚生労働省 job tagの「システムエンジニア（受託開発）」が平均年収<strong>578.5万円・平均年齢37.1歳</strong>です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              40代の鍵は、(1) マネジメントかスペシャリストかの軸を明確にする、(2) 量より質の転職活動に切り替える、(3) 役職に依存しない実力ベースの市場価値を把握する、の3点です。古い技術にとどまったり『なんでも屋』のままだと年収が下がるリスクがあるため、専門性の打ち出しが特に重要になります。
            </p>
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの年収データ（出典付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックが公表する2025年の年代別平均年収（正社員・システムエンジニア等）は以下の通りです。40代は30代から平均が大きく伸びる一方、個人差が最も開く年代でもあります。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">傾向</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr key={i} className={row.age === "40代" ? "bg-petrol-soft" : "hover:bg-slate-50"}>
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.age}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ レバテック公表の年代別平均年収（2025年・career.levtech.jp / freelance.levtech.jpガイド記事）。年収1,000万円以上の割合は30代8.01%・40代12.67%と公表されています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">公的統計での裏づけ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              厚生労働省 job tagの「システムエンジニア（受託開発）」は、平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）と公表されています。平均年齢が30代後半〜40代付近にあることから、40代エンジニアの実勢を読む参考値になります。IT人材の需要は経済産業省の試算（2019年3月公表）で2030年に最大約79万人不足とされており、経験者へのニーズは底堅いと見られています。
            </p>
          </div>
        </section>

        {/* キャリア軸 */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアの軸と年収の関係</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            40代の年収は「どの軸で評価されているか」に大きく左右されます。代表的な3つの軸を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerAxes.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            軸の選び方に迷う場合は、
            <Link href="/knowledge/career-plan/" className="text-petrol hover:underline">キャリアプランの立て方</Link>
            や
            <Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント職への移行</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 戦略 */}
        <section id="strategy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代で年収を維持・アップする5つの戦略</h2>
          <div className="space-y-4">
            {strategies.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* リスク */}
        <section id="risk" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代で年収が下がるリスクと対策</h2>
          <div className="space-y-4">
            {risks.map((item, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{item.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed mb-2">{item.desc}</p>
                <p className="text-xs text-slate-700 font-medium">対策: {item.advice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収を守るためのチェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            以下に2つ以上当てはまる場合、年収ダウンを避けるために早めの対策をおすすめします。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 40代視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代という年代の独自事情</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収の「個人差」が最大化する年代</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は平均約618万円でありながら、年収1,000万円以上が12.67%いる一方で、年収が伸び悩む層もいます。30代でどの軸を選び、何を積み上げたかが、この差として表面化します。40代は『これまでの蓄積を換金する』年代であり、専門性の有無が年収を大きく分けます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「年収維持」も立派な成功</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代の転職では、年収を大きく上げることより『下げずに維持しつつ、より良い環境に移る』ことが現実的な目標になる場合があります。家族のライフイベントや働き方を含めた総合的な判断が、20代・30代以上に重要になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">求人の「数」より「質」で勝負する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代向けの求人は数が絞られる分、自分の強みが活きるポジションを見極める力が求められます。ハイクラス・IT特化のエージェントを使い、応募の質を高めることが成功率を左右します。
              </p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">40代の年収アップをプロがサポート</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス向けエージェントに登録して、年収維持・アップの可能性を無料で診断してもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((item, i) => (
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
