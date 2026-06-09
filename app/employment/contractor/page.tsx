import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "業務委託エンジニアの実態｜単価相場・手取り・メリットデメリット",
  description:
    "業務委託（フリーランス）エンジニアの単価相場、社会保険・税を差し引いた手取りの考え方、エンジニア側・企業側の二軸メリットデメリットを解説。2024年11月の労災特別加入によるデメリット緩和まで実データで整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：単価は高いが『事業主』としての設計が必要" },
  { id: "what", label: "業務委託とは（準委任・請負の正確な定義）" },
  { id: "price", label: "単価相場（職種別・言語別・経験別）" },
  { id: "takehome", label: "手取りシミュレーションの考え方" },
  { id: "merit", label: "メリット・デメリット（エンジニア側／企業側）" },
  { id: "law2024", label: "2024年11月 労災特別加入でデメリット緩和" },
  { id: "fit", label: "業務委託に向いている人・向いていない人" },
  { id: "middle", label: "30代・40代がフリーランスを選ぶ視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "実務3〜5年以上の経験があり、即戦力として案件に入れる",
  "特定技術（言語・クラウド・設計など）に深い専門性がある",
  "自己管理・自己投資ができ、確定申告などの事務も回せる",
  "収入変動に耐える貯蓄があり、案件の途切れに備えられる",
  "住宅ローンなど社会的信用が必要なイベントを済ませている、または予定がない",
];

const fitNo = [
  "実務経験が浅く、指導を受けながら成長したい段階",
  "安定収入が必要な家族構成・ライフステージ",
  "近く住宅ローンや大型ローンを組む予定がある",
  "確定申告・帳簿付けなどの事務負担を避けたい",
  "研修・OJTなど会社の育成環境で力を伸ばしたい",
];

const priceRows: [string, string][] = [
  ["プログラマー（PG）", "月68万円前後"],
  ["システムエンジニア（SE）", "月71万円前後"],
  ["インフラエンジニア", "月67万円前後"],
  ["Java", "月69万円前後"],
  ["PHP", "月72万円前後"],
  ["Ruby", "月80万円前後"],
  ["ITコンサル（職種別1位）", "月82万円前後"],
];

const experienceRows: [string, string][] = [
  ["初級（実務3〜5年）", "月80〜100万円が目安"],
  ["中級（実務5〜10年）", "月100〜120万円が目安"],
  ["上級（実務10年以上）", "月120〜200万円超も"],
];

const meritEngineer = [
  "単価が高くなりやすく、スキル次第で正社員時代より報酬が伸びる余地がある",
  "案件・働き方・稼働時間を自分で選べる自由度が高い",
  "経費を計上でき、税務上の工夫の余地がある",
  "複数案件・リモートなど多様な働き方を組みやすい",
];

const demeritEngineer = [
  "社会保険（健保・年金）が全額自己負担で、額面ほど手取りが増えない",
  "雇用保険・有給・賞与・退職金がなく、休めば収入が減る",
  "案件の途切れ・単価変動のリスクを自分で吸収する必要がある",
  "確定申告・帳簿付けなど事務負担が発生する",
];

const meritCompany = [
  "必要なスキルを必要な期間だけ確保でき、採用・育成コストを抑えられる",
  "社会保険の会社負担が発生しない",
  "プロジェクトの繁閑に合わせて柔軟に体制を調整できる",
];

const demeritCompany = [
  "指揮命令ができない（実態が労働なら偽装請負のリスク）",
  "ノウハウが社内に蓄積しにくい",
  "2024年のフリーランス新法で取引条件明示などの義務が増えた",
];

const faqs = [
  {
    q: "業務委託エンジニアの単価はどのくらいですか？",
    a: "レバテックフリーランスが公表した2024年1月時点の週5稼働の目安では、プログラマー約68万円、システムエンジニア約71万円、インフラエンジニア約67万円（いずれも月額）とされています。言語別ではJava約69万円、PHP約72万円、Ruby約80万円、2024年の職種別1位はITコンサルで約82万円でした（出典：レバテックフリーランス公表値。案件・スキル・時期により変動します）。",
  },
  {
    q: "フリーランスの平均年収はどのくらいですか？",
    a: "レバテックの登録者平均年収は約881万円と公表されていますが、これはレバテックで実際に稼働している比較的高稼働・高スキル層を中心とした実績値です。フリーランス全体の平均を表すものではない点に注意が必要です。実際の年収は稼働率・単価・案件継続性で大きく変動します（出典：レバテック稼働者の実績値）。",
  },
  {
    q: "業務委託は手取りが多いって本当ですか？",
    a: "額面（単価）は正社員時代より高くなりやすいですが、健康保険・年金が全額自己負担、雇用保険なし、賞与・退職金なしのため、手取りは想定ほど増えないことがあります。実質手取りは『単価 − マージン − 社会保険料 − 税 − 稼働できない期間』で試算し、正社員の手取り＋会社負担＋保障と並べて比較するのが妥当です。",
  },
  {
    q: "業務委託は労災保険に入れますか？",
    a: "2024年11月1日から、業種・職種を問わずフリーランスが労災保険に特別加入できるようになりました。ITエンジニアのフリーランスも対象で、業務中・通勤中のケガや病気に備えられます。これにより、従来の業務委託の弱点だった『労災なし』が任意加入で補える形になり、デメリットが一部緩和されました（出典：厚生労働省 特別加入制度ページ）。",
  },
  {
    q: "業務委託と正社員、どちらが将来有利ですか？",
    a: "一概には言えません。業務委託は単価・自由度で勝り、正社員は社会保険の会社負担・雇用安定・福利厚生・厚生年金で勝ります。ライフイベント（住宅ローン・教育費など）や将来の年金、リスク許容度によって最適解は変わります。詳しい損得比較はフリーランスvs正社員の記事をご覧ください。",
  },
  {
    q: "未経験から業務委託になれますか？",
    a: "現実的には難度が高い選択です。業務委託の案件は即戦力を前提とするものが多く、初級でも実務3〜5年程度の経験が目安とされます。未経験から目指す場合は、まず正社員などで実務経験を積み、設計やリーダー経験を得てから独立するのが安全な順序です。",
  },
  {
    q: "業務委託になる前に何を準備すべきですか？",
    a: "案件を継続的に確保できる見込み（複数エージェント登録）、社会保険・税の自己負担を踏まえた手取り試算、案件が途切れた場合の生活防衛資金、確定申告の準備、そして2024年から可能になった労災特別加入の検討です。事業主としての設計を整えてから移行することがリスクを下げます。",
  },
];

export default function ContractorPage() {
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
        title="業務委託エンジニアの実態｜単価相場・手取り・メリットデメリット"
        description="業務委託（フリーランス）エンジニアの単価相場、社会保険・税を差し引いた手取りの考え方、メリットデメリットを実データで解説。2024年11月の労災特別加入まで整理。"
        url="/employment/contractor/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド", href: "/employment/" },
          { name: "業務委託" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          業務委託エンジニアの実態｜単価相場・手取り・メリットデメリット
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 単価・手取り・二軸メリデメを実データで整理
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          業務委託（フリーランス）は、エンジニアの雇用形態の中で最も単価が高くなりやすい一方、社会保険・税・労災を自分で抱える「事業主」としての働き方です。本記事では、職種別・言語別・経験別の単価相場、額面と手取りの違い、エンジニア側・企業側それぞれのメリットデメリット、そして2024年11月の労災特別加入による変化までを、出典付きで整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックフリーランス公表の単価データ（2024年1月時点）",
            "厚生労働省 労災保険 特別加入制度ページ（2024年11月1日施行）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：単価は高い。ただし「事業主としての設計」が前提</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              業務委託は週5稼働でSE月71万円前後（レバテックフリーランス公表・2024年1月時点）など、正社員より高い額面が期待できます。しかし社会保険・税・労災・案件途切れリスクを自分で引き受けるため、手取りは額面ほど増えません。「高い単価＝会社が負担していたコストを自分が引き受ける対価」と理解し、事業主としての設計を整えてから選ぶのが安全です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>単価目安：PG約68万／SE約71万／インフラ約67万（月額・週5・レバテックフリーランス2024年1月）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>登録者平均年収約881万円は「高稼働者中心の実績値」で、全体平均ではない。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>2024年11月の労災特別加入で、最大の弱点だった「労災なし」が一部緩和された。</li>
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

        {/* 業務委託とは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業務委託とは（準委任・請負の正確な定義）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「業務委託契約」という名称の法律用語は厳密には存在せず、実態は<strong>準委任契約</strong>（業務の遂行に対して報酬が支払われる）か<strong>請負契約</strong>（仕事の完成に対して報酬が支払われる）のいずれかです。いずれも民法上の契約で、労働契約ではありません。そのため、業務委託エンジニアは法律上「労働者」ではなく「事業主（個人事業主）」として扱われます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            この違いから、社会保険は国民健康保険・国民年金が基本、雇用保険なし、所得税は確定申告という構造が生まれます。雇用形態全体の中での位置づけは<Link href="/employment/" className="text-blue-600 hover:underline">エンジニアの雇用形態の違い</Link>で横断的に整理しています。
          </p>
        </section>

        {/* 単価相場 */}
        <section id="price" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価相場（職種別・言語別・経験別）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            レバテックフリーランスが公表した2024年1月時点・週5稼働の単価目安です。案件・スキル・時期により変動するため、あくまで相場感の参考としてご覧ください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {priceRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">出典: レバテックフリーランス公表の単価データ（2024年1月時点・週5稼働）。数値は時点・案件で変動します。</p>

          <h3 className="font-bold text-slate-800 mb-3">経験年数別の単価目安</h3>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {experienceRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            なお、レバテックの登録者平均年収は約881万円と公表されていますが、これは実際に稼働している高稼働・高スキル層を中心とした「レバテック稼働者の実績値」であり、フリーランス全体の平均ではありません。母集団を理解したうえで参考にしてください。
          </p>
        </section>

        {/* 手取りシミュレーション */}
        <section id="takehome" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">手取りシミュレーションの考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            業務委託の手取りは、単価から複数のコストを差し引いて初めて見えてきます。具体的な税額・保険料は個人の状況で大きく異なるため、ここでは「何を差し引くべきか」という考え方を示します。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5">
            <p className="text-sm font-bold text-slate-700 mb-3">実質手取りの考え方</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              <span className="font-mono bg-white border border-slate-200 rounded px-2 py-1 text-xs">単価 − エージェントマージン − 社会保険料（国保・国民年金 全額） − 所得税・住民税 − 経費 −（稼働できない月の損失）</span>
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span className="text-slate-400">▸</span>エージェント経由の場合、マージンが単価から差し引かれる（または上乗せされた商流で提示される）</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>健康保険・年金は会社が半額負担してくれないため、正社員時代の約2倍の負担感になり得る</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>案件の空白期間・病気・長期休暇は、そのまま収入ゼロにつながる</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ※ 税・社会保険の具体的な金額は個別の状況で異なります。正確な試算は税理士・税務署・年金事務所にご確認ください。正社員との損得の並べ方は<Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスvs正社員</Link>で詳しく解説しています。
          </p>
        </section>

        {/* メリデメ二軸 */}
        <section id="merit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット（エンジニア側／企業側）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            業務委託は、働くエンジニア側と発注する企業側で見え方が異なります。両者の視点を理解すると、案件を選ぶ際の交渉や条件確認に役立ちます。
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

        {/* 2024法改正 */}
        <section id="law2024" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2024年11月 労災特別加入でデメリットが緩和</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            業務委託の最大の弱点は、長らく「労災保険の対象外」であることでした。労働者ではないため、業務中のケガや病気に労災が使えなかったのです。この点が2024年に大きく変わりました。
          </p>
          <div className="border border-blue-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-blue-800 mb-2">労災保険の特別加入（2024年11月1日施行）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              業種・職種を問わず、フリーランスが労災保険に特別加入できるようになりました。ITエンジニアのフリーランスも対象です。任意加入ではありますが、業務中・通勤中のケガや病気に対して労災給付を受けられる選択肢が生まれ、業務委託のリスクを下げる手段が増えました（出典：厚生労働省 特別加入制度ページ）。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mb-4">
            あわせて、2024年にはフリーランス新法により発注者の取引条件明示が義務化され、報酬の支払遅延の禁止なども定められました。立場の弱いフリーランスの保護が制度面で前進しています。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            ただし、これらの改正で業務委託が正社員並みの保護を得たわけではありません。労災は任意の特別加入であり、雇用保険（失業給付）は依然として対象外です。賞与・退職金・有給がない構造も変わりません。「弱点が一部緩和された」という正確な理解のもとで、自助の備え（労災特別加入の検討、生活防衛資金、年金の上乗せ設計）を整えることが、業務委託を選ぶ際の前提になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業務委託に向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            業務委託は誰にでも合う働き方ではありません。単価の高さだけで選ぶと、事務負担や収入変動につまずきがちです。自分の状況と照らし合わせて判断しましょう。
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
              <h3 className="font-bold text-slate-700 mb-3">向いていない人（正社員が無難）</h3>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がフリーランスを選ぶときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：ライフイベントと信用のタイミング</h3>
              <p className="text-sm text-blue-700">住宅ローン・賃貸審査では、フリーランスは収入の安定性証明に開業後の実績年数を求められる傾向があります。住宅購入などの予定があるなら、正社員のうちに済ませてから独立する選択も。単価の高さに引っ張られず、信用が必要なイベントの順序を先に設計しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験の市場性とリスク許容度</h3>
              <p className="text-sm text-blue-700">設計・テックリード・大規模改修などシニアの経験が単価に反映されやすい一方、案件の波や契約途切れへの備えが重要になります。複数エージェント登録と生活防衛資金、そして正社員に戻る道を残しておくと安心です。正社員復帰の考え方は<Link href="/career/freelance-to-permanent/" className="text-blue-600 hover:underline">フリーランスから正社員へ</Link>を参照してください。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年金・保障の長期設計</h3>
              <p className="text-sm text-blue-700">業務委託は厚生年金がなく国民年金のみのため、将来の年金額に差が出やすくなります。iDeCo・国民年金基金・小規模企業共済などで自助の保障を組み、2024年から可能になった労災特別加入もあわせて検討するのが、30代・40代では特に重要です。</p>
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
          <h2 className="text-xl font-bold mb-3">独立の前に「正社員としての市場価値」を確認</h2>
          <p className="text-blue-100 text-sm mb-4">
            業務委託の単価と、正社員としての提示年収・保障を並べて比較してから判断するのが安全です。まずは市場価値の把握から始めましょう。
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
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "フリーランスから正社員へ", href: "/career/freelance-to-permanent/" },
              { name: "契約社員と無期転換ルール", href: "/employment/contract-employee/" },
              { name: "派遣から正社員になる道", href: "/employment/dispatch/" },
              { name: "フリーランス向けエージェント比較", href: "/compare/freelance-agents/" },
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
