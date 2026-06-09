import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "50代エンジニアの転職｜需給ギャップと役職別年収の分散を読む",
  description:
    "50代エンジニアの転職を、doda年代別平均年収やJAC登録者の役職別年収、経産省のIT人材需給ギャップ試算で読み解く。50代は「下がりやすい」のか、それとも役職・企業で分散が大きいのか。50代固有の戦い方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：50代は「下がる」より「分散が大きい」" },
  { id: "salary", label: "50代エンジニアの年収データ（doda・JAC）" },
  { id: "dispersion", label: "役職・企業による年収の大きな分散" },
  { id: "gap", label: "IT人材の需給ギャップが50代に追い風" },
  { id: "value", label: "50代に求められる『実力主義』の価値" },
  { id: "law", label: "年齢制限は原則禁止（法律の根拠）" },
  { id: "process", label: "50代の転職を成功させる進め方" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows: [string, string][] = [
  ["50代以上 IT通信エンジニア平均", "711万円（doda・2024年9月〜2025年8月・約60万人・パーソルキャリア発表）"],
  ["40代 IT通信エンジニア平均（比較）", "652万円（同上）"],
  ["JAC登録者 50代ITエンジニア平均", "1,069.2万円（JAC登録者の実績値＝市場平均より高い母集団）"],
];

const dispersionRows: [string, string][] = [
  ["課長未満", "971万円"],
  ["部長以上", "1,317.5万円"],
  ["本部長以上", "1,372.1万円"],
  ["日系企業", "1,359.2万円"],
  ["外資系企業", "976.4万円"],
];

const faqs = [
  {
    q: "50代エンジニアの平均年収はどのくらいですか？",
    a: "dodaの集計（2024年9月〜2025年8月・約60万人・パーソルキャリア発表）では、50代以上のIT通信エンジニアの平均年収は711万円で、40代の652万円より高い結果でした。一方、ハイクラス特化のJAC登録者では50代ITエンジニアの平均が1,069.2万円と公表されていますが、これはJAC登録者という市場平均より高い母集団の実績値である点に注意が必要です。母集団によって見える数字が大きく異なります。",
  },
  {
    q: "50代は転職で年収が下がりやすいと聞きますが本当ですか？",
    a: "「下がりやすい」という言説は定性的な記述であり、データとは必ずしも一致しません。dodaでは50代以上IT通信エンジニアの平均が711万円と40代より高く、単純に下がるとは言えません。実態は『役職・企業によって分散が非常に大きい』ことです。JAC登録者では課長未満971万円に対し部長以上1,317.5万円、本部長以上1,372.1万円と、役職で数百万円の差が生じます。一律に下がるのではなく、ポジション次第で大きく上にも下にも振れる、というのが正確な理解です。",
  },
  {
    q: "50代でも転職先はありますか？",
    a: "あります。経済産業省・みずほ情報総研の試算（2019年3月公表）では、2030年にIT人材が中位シナリオで約45万人不足、先端IT人材は約55万人不足とされ、従来型ITが約10万人余剰となる一方で先端分野の不足が際立ちます。経験豊富な50代に対する需要は、特に基幹システム・ERP刷新の主導や、若手育成・技術伝承といった領域で根強く存在します。需給ギャップが50代の経験者にとって追い風になっています。",
  },
  {
    q: "50代エンジニアに企業は何を求めますか？",
    a: "実務力に加えて、マネジメント力と経営視点の掛け算が求められます。具体的には、ERP・基幹システムの刷新を主導する力、プロジェクト全体を統括する力、若手への技術伝承・育成、そして技術を経営課題と結びつける視点です。単なる手を動かすプレイヤーではなく、組織の成果と次世代の育成に責任を持てる人材として評価されます。",
  },
  {
    q: "50代と40代で、転職の戦い方はどう違いますか？",
    a: "40代は「経験が活きるポジションを狙う」ことが軸でしたが、50代はそれに加えて『役職・企業による分散の大きさ』を前提に、どのポジションに自分を位置づけるかをより戦略的に選ぶ必要があります。課長未満と本部長以上で年収が数百万円変わる世界なので、自分の経験がどの役職レンジで評価されるかを見極めることが重要です。40代の基本戦略は40代エンジニアの転職ガイドを参照してください。",
  },
  {
    q: "50代で年齢を理由に不採用にされるのは違法ですか？",
    a: "募集・採用において年齢を理由に応募を制限することは、労働施策総合推進法により原則禁止されています（平成19年に義務化）。一部に例外規定はありますが、「年齢不問」とされた求人で年齢のみを理由に落とすことは法の趣旨に反します。50代でも、経験・スキルという要件を満たしていれば、年齢を理由に応募をためらう必要はありません。",
  },
  {
    q: "50代からフリーランスや業務委託に転じる選択はありますか？",
    a: "あります。設計・テックリード・大規模改修などシニアの経験が単価に反映されやすい一方、社会保険・税・案件途切れリスクを自分で抱える設計が必要です。正社員と業務委託の損得はフリーランスvs正社員で、正社員に戻る道はフリーランスから正社員へで解説しています。50代は年金・保障の長期設計も重要になるため、形態の選択は慎重に行いましょう。",
  },
];

export default function Age50sPage() {
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
        title="50代エンジニアの転職｜需給ギャップと役職別年収の分散を読む"
        description="50代エンジニアの転職を、doda年代別平均年収やJAC登録者の役職別年収、経産省のIT人材需給ギャップ試算で読み解く。50代固有の戦い方を解説します。"
        url="/age/50s/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "50代エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          50代エンジニアの転職｜需給ギャップと役職別年収の分散を読む
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | doda・JAC・経産省データで50代を読み解く
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          50代エンジニアの転職には、「年収が下がる」「求人が少ない」といった悲観論がつきまといます。しかし実際のデータを見ると、その印象は単純すぎます。50代の実像は「一律に下がる」のではなく、<strong>役職・企業によって年収の分散が極めて大きい</strong>という点にあります。本記事では、doda・JAC・経済産業省のデータをもとに、50代固有の戦い方を読み解きます。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "doda 年代別 平均年収（パーソルキャリア・2024年9月〜2025年8月）",
            "JAC登録者の年収実績値（50代ITエンジニア）",
            "経済産業省・みずほ情報総研 IT人材需給に関する調査（2019年3月公表）",
            "労働施策総合推進法（年齢制限禁止）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：50代は「下がる」のではなく「分散が大きい」</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              dodaの集計では50代以上IT通信エンジニアの平均年収は711万円で、40代の652万円より高い結果です。「50代は下がる」という言説は定性的な印象に過ぎず、実態は<strong>役職・企業による分散が非常に大きい</strong>こと。JAC登録者では課長未満971万円に対し本部長以上は1,372.1万円と、ポジションで数百万円の差が生じます。50代の戦略は「下がるのを恐れる」のではなく「分散の上側に自分を位置づける」ことにあります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>50代以上IT通信エンジニア平均711万円（doda）。40代652万円より高い。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>役職で大きく分散：JAC登録者で課長未満971万〜本部長以上1,372.1万（実績値）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>2030年に先端IT人材 約55万人不足の試算（経産省）で、経験者需要は根強い。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 年収データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">50代エンジニアの年収データ（doda・JAC）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            まず客観的な数字を押さえます。母集団が異なる2つのデータを並べることで、50代の年収の実像が見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {salaryRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">
            出典: doda 年代別平均年収（パーソルキャリア発表・2024年9月〜2025年8月・約60万人）、JAC登録者の年収実績値。JACの数値は市場平均より高い母集団（ハイクラス登録者）の実績値です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            注目すべきは、dodaの公的に近い大規模集計で<strong>50代以上の平均（711万円）が40代（652万円）を上回っている</strong>点です。これは「50代になると一律に年収が下がる」という通説と矛盾します。一方、JAC登録者の平均1,069.2万円は、ハイクラス層という偏った母集団の実績値であり、これをそのまま50代全体の平均と捉えるのは誤りです。データは母集団を理解して読む必要があります。
          </p>
        </section>

        {/* 分散 */}
        <section id="dispersion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">役職・企業による年収の大きな分散</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            50代の年収を理解する鍵は「平均」ではなく「分散」です。JAC登録者（ハイクラス層の実績値）の内訳を見ると、役職と企業区分によって年収が大きく開いていることがわかります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {dispersionRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">
            出典: JAC登録者 50代ITエンジニアの年収実績値（市場平均より高い母集団の実績値）。役職区分・企業区分による内訳です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            課長未満971万円に対し、部長以上1,317.5万円、本部長以上1,372.1万円——役職が上がるごとに数百万円単位で年収が増えます。また日系1,359.2万円と外資976.4万円のように、企業区分でも差が出ます。これが50代の本質です。<strong>「50代だから下がる／上がる」ではなく、「どの役職レンジ・どの企業区分に自分を位置づけられるか」で年収が決まる</strong>のです。50代の転職戦略は、この分散の上側を狙うことに尽きます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              なお、ここで興味深いのは日系（1,359.2万円）が外資（976.4万円）を上回っている点です。一般に「外資＝高年収」のイメージがありますが、JAC登録者の50代ITエンジニアという母集団では、部長以上・本部長以上の管理職層が日系の数字を押し上げていると考えられます。つまり50代では、外資のベース水準より、日系大手で上位の役職に就いているかどうかが年収を大きく左右する、という構造が見て取れます。平均の比較だけでなく、その背後にある役職構成まで読むことが、自分の立ち位置を見極めるうえで重要です。
            </p>
          </div>
        </section>

        {/* 需給ギャップ */}
        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT人材の需給ギャップが50代に追い風</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            50代の転職市場を支える構造的な要因が、IT人材の需給ギャップです。経済産業省・みずほ情報総研の試算（2019年3月公表）が、その規模を示しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-xs text-blue-600 mb-1">2030年 IT人材不足（中位）</p>
              <p className="text-lg font-bold text-blue-700">約45万人</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="text-xs text-blue-600 mb-1">先端IT人材 不足</p>
              <p className="text-lg font-bold text-blue-700">約55万人</p>
            </div>
            <div className="bg-slate-100 rounded-lg p-4 text-center">
              <p className="text-xs text-slate-500 mb-1">従来型IT人材 余剰</p>
              <p className="text-lg font-bold text-slate-600">約10万人</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            注意したいのは、不足するのは<strong>先端IT人材</strong>であり、従来型ITは約10万人の余剰が見込まれる点です。つまり50代がこの追い風を受けるには、過去の経験に安住せず、需要のある領域（クラウド・データ・セキュリティ・基幹刷新など）に経験を接続することが鍵になります。経験豊富な50代が先端領域でも価値を出せれば、需給ギャップは強力な追い風になります。
          </p>
        </section>

        {/* 実力主義の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">50代に求められる「実力主義」の価値</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            50代の採用は、年功ではなく実力で評価される世界です。企業が50代に期待するのは、次の掛け算ができる人材です。
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">実務 × マネジメント × 経営視点</h3>
              <p className="text-sm text-blue-700">手を動かす実務力、チーム・プロジェクトを統括するマネジメント力、技術を経営課題に結びつける視点。この3つの掛け算が、50代の市場価値を決めます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ERP・基幹システム刷新の主導</h3>
              <p className="text-sm text-blue-700">大規模な基幹システムやERPの刷新を主導できる経験は、50代固有の希少価値です。長年の業務理解とプロジェクト統括力が、若手では代替しにくい強みになります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">若手育成・技術伝承</h3>
              <p className="text-sm text-blue-700">次世代エンジニアの育成と、組織への技術伝承。これは50代に強く期待される役割で、組織の持続性に直結する価値として評価されます。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            マネジメントの進め方は<Link href="/knowledge/management/" className="text-blue-600 hover:underline">エンジニアのマネジメント</Link>、年収戦略の土台は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収戦略</Link>も参考になります。
          </p>
        </section>

        {/* 法律 */}
        <section id="law" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢制限は原則禁止（法律の根拠）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-5">
            <p className="text-amber-900 leading-relaxed text-sm">
              募集・採用において、年齢を理由に応募を制限することは<strong>労働施策総合推進法により原則禁止</strong>されています（平成19年に義務化）。一部に例外規定はありますが、「年齢不問」とされた求人で実質的に年齢のみを理由に不採用とすることは、法の趣旨に反します。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            50代でも、経験・スキル・マネジメント力という「要件」を満たしているなら、年齢を理由に応募をためらう必要はありません。むしろ需給ギャップと実力主義が進むなか、50代の経験を求める企業は確実に存在します。法律という後ろ盾も踏まえ、自信を持って臨んでよい領域です。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">50代の転職を成功させる進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            50代は「分散が大きい」年代です。分散の上側に自分を位置づけるには、戦略的な準備が欠かせません。次の手順で進めましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "自分が評価される役職レンジを見極める", desc: "課長未満・部長以上・本部長以上で年収が数百万円変わる世界です。これまでの役職・統括規模から、自分がどのレンジで評価されるかを冷静に把握し、その層のポジションに狙いを定めます。" },
              { num: "2", title: "経験を先端領域に接続する", desc: "需給ギャップで不足するのは先端IT人材です。過去の経験を、クラウド・データ・セキュリティ・基幹刷新など需要のある領域にどう接続できるかを言語化します。「従来型のまま」では余剰側に分類されかねません。" },
              { num: "3", title: "実務×マネジメント×経営視点を実績で示す", desc: "3つの掛け算を、具体的な実績（統括規模・改善数値・育成実績・経営貢献）で語れるよう棚卸しします。50代は実力主義で評価されるため、抽象的な肩書きより具体的な成果が効きます。" },
              { num: "4", title: "ハイクラス・IT特化エージェントを活用する", desc: "50代の経験を高く評価するポジションは、ハイクラス・IT特化のエージェントに集まりやすい傾向があります。複数を併用し、役職レンジに合う求人を引き出します。" },
              { num: "5", title: "雇用形態の選択肢も含めて比較する", desc: "正社員だけでなく、業務委託（フリーランス）も視野に入る年代です。社会保険・税・年金・案件リスクを踏まえ、手取りと保障の合計で比較して判断します。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            雇用形態の比較は<Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスvs正社員</Link>、正社員に戻る道は<Link href="/career/freelance-to-permanent/" className="text-blue-600 hover:underline">フリーランスから正社員へ</Link>を参照してください。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">50代は「分散の上側」を狙おう</h2>
          <p className="text-blue-100 text-sm mb-4">
            役職・企業で年収が数百万円変わる50代。あなたの経験を高く評価する企業を見つけるには、ハイクラス・IT特化のエージェント活用が近道です。
          </p>
          <Link href="/compare/highclass/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            ハイクラス向けエージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "45歳エンジニアの転職", href: "/age/45/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "フリーランスから正社員へ", href: "/career/freelance-to-permanent/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
