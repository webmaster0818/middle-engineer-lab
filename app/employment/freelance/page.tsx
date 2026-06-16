import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "フリーランスエンジニアの実態｜年収傾向・案件確保・メリットデメリット",
  description:
    "フリーランスエンジニアの定義（業務委託との違い）、年収・単価傾向、案件の確保方法、社会保険・税の現実、エンジニア側・企業側の二軸メリットデメリットを出典付きで解説。2024年の労災特別加入・新法、30代40代の選び方も整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：自由と単価の裏に『案件確保と保障の自己責任』がある" },
  { id: "what", label: "フリーランスとは（業務委託との違い）" },
  { id: "price", label: "単価・年収の傾向（母集団に注意）" },
  { id: "case", label: "案件の確保方法（エージェント・直契約）" },
  { id: "merit", label: "メリット・デメリット（エンジニア側／企業側）" },
  { id: "law", label: "2024年の制度変化（新法・労災特別加入）" },
  { id: "fit", label: "フリーランスに向いている人・向いていない人" },
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
  "確定申告・帳簿付けなど事務負担が発生し、社会的信用も得にくい",
];

const meritCompany = [
  "必要なスキルを必要な期間だけ確保でき、採用・育成コストを抑えられる",
  "社会保険の会社負担が発生しない",
  "プロジェクトの繁閑に合わせて柔軟に体制を調整できる",
];

const demeritCompany = [
  "指揮命令ができない（実態が労働なら偽装請負のリスク）",
  "ノウハウが社内に蓄積しにくく、定着しない",
  "2024年のフリーランス新法で取引条件明示などの義務が増えた",
];

const faqs = [
  {
    q: "フリーランスと業務委託は何が違うのですか？",
    a: "「フリーランス」は組織に属さず独立して働く立場・働き方を指す言葉で、「業務委託」はその際に結ぶ契約の形態（準委任・請負）を指す言葉です。多くのフリーランスエンジニアは業務委託契約で案件を受けますが、両者は指す対象が異なります。つまり『フリーランスという働き方』を実現する手段の一つが『業務委託という契約』だと整理すると分かりやすいです。契約面の詳細は業務委託の記事で解説しています。",
  },
  {
    q: "フリーランスエンジニアの単価・年収はどのくらいですか？",
    a: "レバテックフリーランスが公表した2024年1月時点・週5稼働の目安では、プログラマー約68万円、システムエンジニア約71万円、インフラエンジニア約67万円（いずれも月額）とされています。また同社の登録者平均年収は約881万円と公表されていますが、これは実際に稼働している高稼働・高スキル層を中心とした実績値であり、フリーランス全体の平均ではない点に注意が必要です（出典：レバテックフリーランス公表値。案件・スキル・時期で変動します）。",
  },
  {
    q: "フリーランスは案件をどうやって確保するのですか？",
    a: "主な経路は、フリーランス専門エージェント経由、過去の取引先や知人からの直接契約（直請け）、クラウドソーシング、自己営業・SNS発信などです。安定して稼働するには、複数のエージェントに登録して案件の選択肢を確保しつつ、信頼できる直契約を育てるのが一般的です。案件が途切れると即収入減につながるため、継続的な確保の仕組みが重要になります。",
  },
  {
    q: "フリーランスは社会保険・年金で不利ですか？",
    a: "正社員と比べると、健康保険は国民健康保険、年金は国民年金が基本で、会社の折半負担がなく、厚生年金もないため将来の年金額に差が出やすくなります。雇用保険（失業給付）も対象外です。一方、2024年11月からは労災保険の特別加入が可能になりました。iDeCo・国民年金基金・小規模企業共済などで自助の保障を組むことが、フリーランスでは特に重要です（出典：各制度の公的説明、厚生労働省 特別加入制度）。",
  },
  {
    q: "未経験からフリーランスエンジニアになれますか？",
    a: "現実的には難度が高い選択です。フリーランスの案件は即戦力を前提とするものが多く、初級でも実務3〜5年程度の経験が目安とされます。未経験から目指す場合は、まず正社員などで実務経験を積み、設計やリーダー経験を得てから独立するのが安全な順序です。",
  },
  {
    q: "フリーランスから正社員に戻ることはできますか？",
    a: "可能です。実務で磨いた即戦力性は正社員転職でも評価されます。ただしフリーランス期間の業務内容・役割を職務経歴書で再現性のある形に整理することが鍵です。正社員復帰の考え方はフリーランスから正社員への記事で詳しく解説しています。生活防衛資金を持ち、正社員に戻る道を残しておくと、フリーランスの選択にも安心感が生まれます。",
  },
];

export default function FreelancePage() {
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
        title="フリーランスエンジニアの実態｜年収傾向・案件確保・メリットデメリット"
        description="フリーランスエンジニアの定義・単価年収傾向・案件確保・社会保険・二軸メリットデメリットを出典付きで解説。業務委託との違いや30代40代の選び方も整理。"
        url="/employment/freelance/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド", href: "/employment/" },
          { name: "フリーランス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランスエンジニアの実態｜年収傾向・案件確保・メリットデメリット
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 自由・単価・案件確保・保障を実データで整理
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          フリーランスは、組織に属さず独立して働く立場・働き方です。多くは業務委託契約で案件を受け、高い単価と自由度が魅力ですが、その裏で案件の確保・社会保険・税・保障をすべて自分で抱える「事業主」でもあります。本記事では、フリーランスの正確な定義（業務委託との違い）、単価・年収の傾向、案件の確保方法、エンジニア側・企業側のメリットデメリット、そして2024年の制度変化までを、出典付きで整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックフリーランス公表の単価データ（2024年1月時点）",
            "厚生労働省 労災保険 特別加入制度ページ（2024年11月1日施行）",
            "フリーランス・事業者間取引適正化等法（フリーランス新法・2024年施行）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：自由と単価の裏に「案件確保と保障の自己責任」がある</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              フリーランスは、単価と働き方の自由で正社員を上回ることがあります。しかし案件の確保、社会保険・税の自己負担、保障の欠如をすべて自分で引き受ける働き方です。額面の単価だけで判断せず、稼働できない期間・社会保険・信用面まで含めて設計し、複数の案件確保ルートと生活防衛資金を整えてから選ぶのが安全です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>「フリーランス＝独立した働き方」「業務委託＝契約形態」で、指す対象が異なる。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>単価目安：SE約71万／PG約68万（月額・週5・レバテックフリーランス2024年1月）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>登録者平均年収約881万円は「高稼働者中心の実績値」で全体平均ではない。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* フリーランスとは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスとは（業務委託との違い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フリーランスは、特定の企業に雇用されず、<strong>独立して仕事を請け負う立場・働き方</strong>を指す言葉です。法律上の専用の定義語ではなく、実務上は個人事業主（または一人法人）として、複数のクライアントから案件を受けて働く人を指します。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            よく混同される「業務委託」は、フリーランスが案件を受けるときに結ぶ<strong>契約の形態</strong>（準委任・請負）を指す言葉です。両者は指す対象が異なり、「フリーランスという働き方」を実現する手段の一つが「業務委託という契約」だと整理すると分かりやすいです。契約面の詳細は<Link href="/employment/gyomu-itaku/" className="text-petrol hover:underline">業務委託（準委任・請負）の記事</Link>で解説しています。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            雇用形態全体の中での位置づけは<Link href="/employment/" className="text-petrol hover:underline">エンジニアの雇用形態の違い</Link>で横断的に整理しています。
          </p>
        </section>

        {/* 単価・年収 */}
        <section id="price" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・年収の傾向（母集団に注意）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            レバテックフリーランスが公表した2024年1月時点・週5稼働の単価目安です。案件・スキル・時期で変動するため、相場感の参考としてご覧ください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["プログラマー（PG）", "月68万円前後"],
                  ["システムエンジニア（SE）", "月71万円前後"],
                  ["インフラエンジニア", "月67万円前後"],
                  ["Java", "月69万円前後"],
                  ["PHP", "月72万円前後"],
                  ["Ruby", "月80万円前後"],
                ] as [string, string][]).map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">出典: レバテックフリーランス公表の単価データ（2024年1月時点・週5稼働）。数値は時点・案件で変動します。</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            レバテックの登録者平均年収は約881万円と公表されていますが、これは実際に稼働している高稼働・高スキル層を中心とした「稼働者の実績値」であり、フリーランス全体の平均ではありません。母集団を理解したうえで参考にしてください。実際の年収は稼働率・単価・案件継続性で大きく変動します。手取りの試算方法は<Link href="/employment/contractor/" className="text-petrol hover:underline">業務委託（単価・手取り）</Link>で解説しています。
          </p>
        </section>

        {/* 案件確保 */}
        <section id="case" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">案件の確保方法（エージェント・直契約）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            フリーランスの収入は、案件を継続的に確保できるかにかかっています。主な経路を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">フリーランス専門エージェント</h3>
              <p className="text-sm text-slate-600 leading-relaxed">案件紹介・単価交渉・契約事務を代行してくれる経路。安定確保の中心になりやすい一方、マージンが単価から差し引かれます。複数登録で選択肢を広げるのが定石です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">直契約（直請け）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">過去の取引先・知人から直接受注する経路。マージンがない分単価は高くなりやすいですが、営業・契約・請求を自分で担う必要があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">クラウドソーシング</h3>
              <p className="text-sm text-slate-600 leading-relaxed">小規模案件や実績作りに向く経路。単価は抑えめのことが多く、主軸というより補助的に使われることが多いです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">自己発信・人脈</h3>
              <p className="text-sm text-slate-600 leading-relaxed">技術ブログ・SNS・登壇・OSSなどから案件につなげる経路。時間はかかりますが、単価と裁量の高い直契約につながりやすくなります。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            案件が途切れると即収入減につながるため、複数経路を併用し、稼働の空白を作らない仕組みづくりが重要です。エージェントの比較は<Link href="/compare/freelance-agents/" className="text-petrol hover:underline">フリーランス向けエージェント比較</Link>を参照してください。
          </p>
        </section>

        {/* メリデメ二軸 */}
        <section id="merit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット（エンジニア側／企業側）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            フリーランスは、働くエンジニア側と発注する企業側で見え方が異なります。両者の視点を理解すると、案件選びや条件交渉に役立ちます。
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

        {/* 2024制度変化 */}
        <section id="law" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2024年の制度変化（新法・労災特別加入）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            立場の弱いフリーランスの保護が、2024年に制度面で前進しました。押さえておきたい二つの変化です。
          </p>
          <div className="border border-[var(--line)] rounded-lg p-5 mb-4">
            <h3 className="font-bold text-blue-800 mb-2">フリーランス新法（2024年施行）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              フリーランス・事業者間取引適正化等法により、発注者には取引条件の明示や報酬支払期日の設定などが義務づけられました。報酬の支払遅延の禁止など、立場の弱いフリーランスを守るルールが整備されています（出典：フリーランス新法）。
            </p>
          </div>
          <div className="border border-[var(--line)] rounded-lg p-5 mb-4">
            <h3 className="font-bold text-blue-800 mb-2">労災保険の特別加入（2024年11月1日施行）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              業種・職種を問わず、フリーランスが労災保険に特別加入できるようになりました。ITエンジニアも対象で、業務中・通勤中のケガや病気に任意で備えられます。従来の弱点だった「労災なし」が一部緩和された形です（出典：厚生労働省 特別加入制度ページ）。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ただし、これらでフリーランスが正社員並みの保障を得たわけではありません。労災は任意、雇用保険は依然対象外で、賞与・退職金・有給がない構造も変わりません。「弱点が一部緩和された」という正確な理解のもと、自助の備えを整えることが前提になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスに向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            フリーランスは誰にでも合う働き方ではありません。単価の高さだけで選ぶと、案件途切れや事務負担につまずきがちです。自分の状況と照らし合わせて判断しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>{m}</li>
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
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：ライフイベントと信用のタイミング</h3>
              <p className="text-sm text-petrol-deep">住宅ローン・賃貸審査では、フリーランスは収入の安定性証明に開業後の実績年数を求められる傾向があります。住宅購入などの予定があるなら、正社員のうちに済ませてから独立する選択も。単価の高さに引っ張られず、信用が必要なイベントの順序を先に設計しましょう。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験の市場性とリスク許容度</h3>
              <p className="text-sm text-petrol-deep">設計・テックリード・大規模改修などシニアの経験が単価に反映されやすい一方、案件の波や契約途切れへの備えが重要になります。複数エージェント登録と生活防衛資金、そして正社員に戻る道を残しておくと安心です。正社員復帰は<Link href="/career/freelance-to-permanent/" className="text-petrol hover:underline">フリーランスから正社員へ</Link>を参照してください。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年金・保障の長期設計</h3>
              <p className="text-sm text-petrol-deep">フリーランスは厚生年金がなく国民年金のみのため、将来の年金額に差が出やすくなります。iDeCo・国民年金基金・小規模企業共済などで自助の保障を組み、2024年から可能になった労災特別加入もあわせて検討するのが、30代・40代では特に重要です。</p>
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
            フリーランスの単価と、正社員としての提示年収・保障を並べて比較してから判断するのが安全です。まずは市場価値の把握から。
          </p>
          <Link href="/compare/freelance-agents/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            フリーランス向けエージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エンジニアの雇用形態の違い", href: "/employment/" },
              { name: "業務委託（準委任・請負）", href: "/employment/gyomu-itaku/" },
              { name: "業務委託（単価・手取り）", href: "/employment/contractor/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "フリーランスから正社員へ", href: "/career/freelance-to-permanent/" },
              { name: "フリーランス向けエージェント比較", href: "/compare/freelance-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
