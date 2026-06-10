import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "正社員エンジニアの実態｜年収傾向・社会保険・メリットデメリット",
  description:
    "正社員エンジニアの定義、年収傾向、社会保険・税の仕組み、エンジニア側・企業側の二軸メリットデメリットを解説。業務委託・派遣・契約社員との違いと、30代・40代が正社員を選ぶ視点を出典付きで整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：安定と保障の基盤。額面以上の『見えない給与』がある" },
  { id: "what", label: "正社員とは（無期雇用・期間の定めなし）" },
  { id: "salary", label: "年収傾向（公的データ・職種別）" },
  { id: "insurance", label: "社会保険・税の仕組み（会社が半分負担）" },
  { id: "merit", label: "メリット・デメリット（エンジニア側／企業側）" },
  { id: "diff", label: "業務委託・派遣・契約社員との違い" },
  { id: "fit", label: "正社員に向いている人・向いていない人" },
  { id: "middle", label: "30代・40代が正社員を選ぶ視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "安定した収入と社会的信用（住宅ローン等）を重視したい",
  "社会保険の会社負担・福利厚生・退職金などの保障を受けたい",
  "教育・OJTなど会社の育成環境で長期的に力を伸ばしたい",
  "事業の上流やマネジメントなど、組織内でのキャリアを積みたい",
  "収入変動や事務（確定申告等）の負担を避けたい",
];

const fitNo = [
  "単価の高さや働き方の自由度を何より優先したい",
  "特定技術で即戦力として案件単位で稼ぎたい",
  "組織の制約（評価・異動・人間関係）を避けたい",
  "副業・複数案件を主軸に収入を組みたい",
  "勤務時間や場所に縛られない働き方を最優先したい",
];

const meritEngineer = [
  "毎月安定した固定給があり、収入が読みやすい",
  "社会保険（健保・厚生年金）の保険料を会社が半分負担してくれる",
  "雇用保険・有給・賞与・退職金など保障や福利厚生がある",
  "住宅ローン・賃貸審査など社会的信用を得やすい",
  "研修・OJTなど会社の育成環境でスキルを伸ばしやすい",
];

const demeritEngineer = [
  "案件や単価に直接連動しないため、報酬の上限が緩やかになりやすい",
  "勤務時間・勤務地・異動・評価など組織の制約を受ける",
  "働き方（稼働時間・場所）の自由度が業務委託より低い",
  "経費計上などの税務上の工夫の余地が小さい",
];

const meritCompany = [
  "ノウハウや育成成果を社内に長期で蓄積できる",
  "指揮命令ができ、業務分担や異動を柔軟に行える",
  "チームの一体感・継続性を保ちやすい",
];

const demeritCompany = [
  "社会保険の会社負担（労使折半）など固定的な人件費が発生する",
  "繁閑に応じた即時の体制調整がしにくい",
  "採用・育成・退職に時間とコストがかかる",
];

const faqs = [
  {
    q: "正社員エンジニアの年収はどのくらいですか？",
    a: "厚生労働省 job tag（令和7年）では、システムエンジニア（業務用システム）が約550.5万円、基盤システムSE・プロジェクトマネージャー（IT）・ITコンサルタントが約889万円などの区分値で示されています。また経済産業省の調査ではITSSスキルレベル別にL3で約576万円、L4で約726万円などとされます。職種・経験・企業規模で大きく変動しますが、IT・情報通信業は国税庁の全産業平均（令和5年分 約460万円）より高めの水準にあります（出典：厚生労働省 job tag、経済産業省 IT関連産業の給与等に関する実態調査、国税庁 民間給与実態統計調査）。",
  },
  {
    q: "正社員は『額面以上に得』というのは本当ですか？",
    a: "額面の給与だけを業務委託の単価と比べると見落としが生じます。正社員は健康保険・厚生年金の保険料を会社が約半分負担し、雇用保険・有給・賞与・退職金・福利厚生といった『見えない給与』が上乗せされています。業務委託の単価と比較する際は、こうした会社負担分と保障を含めて並べるのが妥当です。",
  },
  {
    q: "正社員エンジニアの社会保険はどうなっていますか？",
    a: "正社員は会社の社会保険（健康保険・厚生年金保険）に加入し、保険料は会社と本人で折半（労使折半）します。さらに雇用保険・労災保険にも加入するため、失業給付や業務中のケガへの備えがあります。これらは業務委託（国民健康保険・国民年金が基本、雇用保険なし）との大きな違いです。",
  },
  {
    q: "正社員と業務委託・フリーランス、どちらが有利ですか？",
    a: "一概には言えません。業務委託・フリーランスは単価・自由度で勝り、正社員は社会保険の会社負担・雇用安定・福利厚生・厚生年金で勝ります。ライフイベント（住宅ローン・教育費）、将来の年金、リスク許容度で最適解は変わります。詳しい損得比較はフリーランスvs正社員の記事で解説しています。",
  },
  {
    q: "30代・40代から正社員に転職するのは不利ですか？",
    a: "実務経験のある30代・40代エンジニアは、即戦力やマネジメント候補として正社員の需要があります。年齢だけで不利になるわけではなく、経験・スキルの言語化と相場感の把握が鍵です。年代別の相場や狙い方は年収相場の記事を参照してください。",
  },
  {
    q: "正社員でも副業はできますか？",
    a: "会社の就業規則によります。近年は副業を認める企業が増えていますが、禁止・許可制の企業もあります。副業可の正社員という働き方は、安定基盤を保ちながら収入や経験を広げる選択肢として注目されています。許可の有無と競業避止の範囲を事前に確認することが重要です。",
  },
];

export default function SeishainPage() {
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
        title="正社員エンジニアの実態｜年収傾向・社会保険・メリットデメリット"
        description="正社員エンジニアの定義・年収傾向・社会保険・二軸メリットデメリットを出典付きで解説。業務委託・派遣・契約社員との違いと30代40代の選び方も整理。"
        url="/employment/seishain/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド", href: "/employment/" },
          { name: "正社員" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          正社員エンジニアの実態｜年収傾向・社会保険・メリットデメリット
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 安定・保障・年収を二軸メリデメで整理
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          正社員は、エンジニアの雇用形態の中で最も安定と保障に厚い働き方です。期間の定めのない無期雇用で、社会保険の会社負担・雇用保険・賞与・退職金・福利厚生といった「見えない給与」が額面に上乗せされています。本記事では、正社員の正確な定義、職種別の年収傾向、社会保険・税の仕組み、エンジニア側・企業側それぞれのメリットデメリット、業務委託・派遣・契約社員との違いまでを、出典付きで整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（令和7年・同一賃金区分の公表値）",
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "国税庁 民間給与実態統計調査（令和5年分）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：安定と保障の基盤。額面以上の「見えない給与」がある</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              正社員は、単価では業務委託に劣ることがあっても、社会保険の会社負担・雇用安定・賞与・退職金・福利厚生という「見えない給与」を含めると、総合的な手取りと安心感で強みがあります。額面だけで他の雇用形態と比べるのではなく、会社負担分と保障を含めて比較するのが正しい見方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>無期雇用（期間の定めなし）で、収入と立場が安定しやすい。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>健康保険・厚生年金を会社が約半分負担（労使折半）。雇用保険・労災もある。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>住宅ローン等の社会的信用を得やすく、ライフイベントに強い。</li>
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

        {/* 正社員とは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員とは（無期雇用・期間の定めなし）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            正社員は、<strong>期間の定めのない労働契約（無期雇用）</strong>でフルタイム勤務する働き方を指す一般的な呼称です。法律に「正社員」という明確な定義語があるわけではありませんが、実務上は無期・フルタイム・直接雇用で、就業規則上の正規従業員として扱われる従業員を指します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            労働契約であるため、労働基準法をはじめとする労働法の保護を受け、社会保険（健康保険・厚生年金）への加入、雇用保険・労災保険の適用、有給休暇の付与などが基本となります。雇用形態全体の中での位置づけは<Link href="/employment/" className="text-blue-600 hover:underline">エンジニアの雇用形態の違い</Link>で横断的に整理しています。
          </p>
        </section>

        {/* 年収傾向 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向（公的データ・職種別）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員エンジニアの年収は、職種・経験・企業規模で大きく異なります。公的データを手がかりに、おおまかな傾向を確認します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["システムエンジニア（業務用システム）", "約550.5万円"],
                  ["基盤システムSE", "約889万円（同一区分の公表値）"],
                  ["プロジェクトマネージャー（IT）", "約889万円（同一区分の公表値）"],
                  ["ITコンサルタント", "約889万円（同一区分の公表値）"],
                ] as [string, string][]).map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">出典: 厚生労働省 job tag（令和7年）。基盤SE・PM・ITコンサルの889万円は同一賃金区分の公表値で、職種ごとに精密に分けた値ではありません。実際の年収は企業規模・経験・地域で変動します。</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            参考として、経済産業省の調査ではITSSスキルレベル別の平均年収がL3で約576万円、L4で約726万円、L5で約937.8万円とされています。また国税庁「民間給与実態統計調査（令和5年分）」の全産業平均給与は約460万円で、IT・情報通信業はこれより高めの水準にあります。年収帯ごとの必要スキルは<Link href="/salary/" className="text-blue-600 hover:underline">年収帯別ガイド</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 社会保険 */}
        <section id="insurance" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社会保険・税の仕組み（会社が半分負担）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員の大きな価値は、社会保険の会社負担にあります。額面の数字には表れない「見えない給与」を理解しましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5">
            <p className="text-sm font-bold text-slate-700 mb-3">正社員の保険・税のポイント</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-slate-400">▸</span>健康保険・厚生年金の保険料は会社と本人で<strong>折半（労使折半）</strong>。実質的に会社が約半分を負担している</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>厚生年金は国民年金に上乗せされるため、将来の年金額が手厚くなりやすい</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>雇用保険に加入し、失業時の基本手当（失業給付）の対象になる</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>所得税・住民税は会社が源泉徴収・年末調整するため、確定申告の手間が原則不要</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ※ 具体的な保険料・税額は給与・自治体・年度で異なります。正社員と業務委託の損得の並べ方は<Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスvs正社員</Link>で詳しく解説しています。
          </p>
        </section>

        {/* メリデメ二軸 */}
        <section id="merit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット（エンジニア側／企業側）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員は、働くエンジニア側と雇用する企業側で見え方が異なります。両者の視点を理解すると、条件交渉やキャリア選択に役立ちます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">エンジニア側のメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {meritEngineer.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">エンジニア側のデメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {demeritEngineer.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3">企業側のメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {meritCompany.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-slate-500 shrink-0">＋</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3">企業側のデメリット・制約</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {demeritCompany.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-slate-500 shrink-0">−</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業務委託・派遣・契約社員との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員の位置づけは、他の雇用形態と並べると明確になります。最大の違いは「無期雇用か」「直接雇用か」「労働者か事業主か」の3点です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">雇用形態</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">契約・立場</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">社会保険・特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">正社員</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">無期・直接雇用の労働者</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">社会保険を会社が折半。安定・保障に厚い</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">契約社員</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">有期・直接雇用の労働者</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">社会保険あり。5年で無期転換ルールの対象</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">派遣</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">派遣会社の労働者（指揮命令は派遣先）</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">派遣会社の社会保険。同一派遣先は原則3年</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">業務委託</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">事業主（労働者ではない）</td>
                  <td className="px-4 py-3 border border-slate-200 text-slate-600">国保・国民年金が基本。単価・自由度が高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            それぞれの詳細は<Link href="/employment/contract-employee/" className="text-blue-600 hover:underline">契約社員と無期転換ルール</Link>・<Link href="/employment/dispatch/" className="text-blue-600 hover:underline">派遣エンジニア</Link>・<Link href="/employment/gyomu-itaku/" className="text-blue-600 hover:underline">業務委託エンジニア</Link>で解説しています。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員に向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            正社員は安定と保障に厚い一方、自由度や単価では他の形態に譲ります。自分の優先順位と照らし合わせて判断しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3">他形態が合う可能性がある人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-slate-400 shrink-0">−</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が正社員を選ぶときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：信用と保障を土台にキャリアを積み上げる</h3>
              <p className="text-sm text-blue-700">住宅ローンや家族の保障が現実になる30代は、社会的信用と社会保険の手厚さが効いてくる時期です。正社員の安定を土台に、上流・マネジメントなど次のキャリアの選択肢を広げる戦略が有効です。市場価値の把握から始めましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験を活かした即戦力・マネジメント採用</h3>
              <p className="text-sm text-blue-700">40代の正社員転職は、即戦力やマネジメント候補としての需要があります。年齢で一律に不利になるわけではなく、経験の言語化と相場感が鍵です。フリーランス経験者が正社員に戻る場合の考え方は<Link href="/career/freelance-to-permanent/" className="text-blue-600 hover:underline">フリーランスから正社員へ</Link>を参照してください。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">将来の年金・保障で他形態と比較する</h3>
              <p className="text-sm text-blue-700">正社員は厚生年金により将来の年金が手厚くなりやすく、雇用保険・労災もあります。業務委託・フリーランスとの損得は、目先の額面だけでなく、年金や保障の長期差まで含めて比較するのが30代・40代では特に重要です。</p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">正社員としての市場価値を無料で確認</h2>
          <p className="text-blue-100 text-sm mb-4">
            正社員での提示年収・保障を客観的に把握してから判断するのが安全です。まずは市場価値の把握から始めましょう。
          </p>
          <Link href="/compare/agents/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            IT転職エージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エンジニアの雇用形態の違い", href: "/employment/" },
              { name: "業務委託エンジニア", href: "/employment/gyomu-itaku/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "契約社員と無期転換ルール", href: "/employment/contract-employee/" },
              { name: "派遣エンジニア", href: "/employment/dispatch/" },
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
