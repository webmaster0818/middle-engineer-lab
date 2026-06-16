import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "42歳エンジニアの転職｜40代前半で経験を武器にする現実的戦略【2026年6月】",
  description:
    "42歳エンジニアの転職市場を実データで解説。レバテック公表の40代平均年収約618万円・1,000万円以上12.67%・SE平均年齢37.1歳などの公表値をもとに、40代前半でマネジメント・専門性・ドメインを武器にする戦い方、狙うべき求人、年収の考え方、おすすめエージェント、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：42歳は経験を武器に役割で勝負する" },
  { id: "position", label: "42歳という年齢の立ち位置（40代前半）" },
  { id: "market", label: "42歳エンジニアの市場データ" },
  { id: "strength", label: "42歳の強みと弱み" },
  { id: "jobs", label: "42歳が狙うべき求人" },
  { id: "salary", label: "42歳の年収の考え方" },
  { id: "strategy", label: "キャリア戦略（マネジメント vs スペシャリスト）" },
  { id: "agents", label: "42歳におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const marketRows: [string, string][] = [
  ["40代エンジニア平均年収", "約618万円（レバテック公表の年代別平均年収・2025年）"],
  ["年収1,000万円以上の割合", "40代で12.67%（レバテック公表・2025年。30代の8.01%より高い）"],
  ["SE平均年収（全年代）", "578.5万円（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["SE平均年齢", "37.1歳（同上）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const strengths = [
  "15年以上の実務から得た設計力・基盤技術の理解が、シニアアーキテクトとして評価される",
  "チームリードやプロジェクト管理の実績を持つ人が多く、EM・テックリードの要件に直結する",
  "特定業界での長年の経験が「技術 × ドメイン」の掛け算となり、DX推進などで希少性を生む",
  "40代でも前半は求人の母数が残っており、後半に比べてポジションの選択肢が広い",
];

const weaknesses = [
  "プレイヤー（プログラマー）枠で若手と同じ土俵に立つと不利になり、役割での勝負が前提になる",
  "完全未経験分野へのキャリアチェンジは難度が高く、隣接領域への移行が現実的になる",
  "実績が抽象的だと、マネジメントや専門性の貢献が伝わらず評価が伸びにくい",
  "「新しい技術についていけない」という懸念を持たれやすく、直近の学習実績で払拭する必要がある",
];

const jobs = [
  {
    title: "テックリード・エンジニアリングマネージャー（EM）",
    desc: "チームを牽引し、技術選定・設計・育成を担う枠。42歳のリード・マネジメント経験が直接要件に合致し、年収レンジも上がりやすい本命の狙い目です。",
  },
  {
    title: "シニアアーキテクト・スペシャリスト",
    desc: "クラウド設計、セキュリティ、データ基盤など上流の専門領域。15年以上の経験から得た基盤技術の深さがそのまま価値になり、ICパスとして高年収を狙えます。",
  },
  {
    title: "DX推進・テクニカルコンサル",
    desc: "特定業界のドメイン知識とITの掛け算が求められるポジション。42歳が培った業界理解は替えが利きにくく、事業会社のDX部門やコンサル領域で需要があります。",
  },
];

const agents = [
  {
    name: "doda（IT・通信エンジニア）",
    href: "/review/doda-it/",
    fit: "幅広い選択肢からじっくり選びたい42歳",
    reason:
      "国内最大級の求人数で、検索・エージェント・スカウトを併用できるハイブリッド型。母数が確保しやすく、40代向けポジションを探しやすい。転職者の約6割が年収アップ、IT・通信の平均決定年収は486万円（2024年度・doda公表値）。",
  },
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収800万円台のマネージャー・アーキテクト志向の42歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。技術に精通したアドバイザーが、42歳の経験に合うリード・設計ポジションを提案してくれる。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "ハイクラス・管理職ポジションを狙う42歳",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。外資・管理職に強く、レバテック公表で40代の12.67%が到達する1,000万円超のレンジを狙う際に相性が良い。無料会員でも利用可能。",
  },
];

const faqs = [
  {
    q: "42歳エンジニアの転職は厳しいですか？",
    a: "30代と比べると応募できる求人の母数は減りますが、それは要件に合わないポジションまで含めた話です。42歳は40代前半で母数がまだ残っており、マネジメント経験・アーキテクト経験・ドメインの専門性があれば希少人材として評価されます。レバテック公表では40代平均年収は約618万円、1,000万円以上も12.67%が到達。強みが活きる役割へ的確にアプローチできるかが分かれ目です。",
  },
  {
    q: "42歳と45歳以降で、転職市場の扱いは変わりますか？",
    a: "40代でも前半の42歳は、後半に比べて求人の母数がやや多く残っています。40代後半になるほどマネジメントや高度専門の要件が一層問われるため、42歳は「経験を役割に変える」動きを取りやすい局面です。プレイヤー枠に流れず、リード・EM・アーキテクトといった役割で勝負することが、40代前半を活かす鍵になります。",
  },
  {
    q: "42歳で転職すると年収は下がりますか？",
    a: "必ずしも下がりません。doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップで、同職種・同レベルなら維持〜アップが一般的です。レバテック公表では40代平均約618万円、1,000万円以上も12.67%。下がりやすいのはマネジメント→プレイヤーや異業種への転向など大きな方向転換を伴う場合です。中期のキャリア価値で判断しましょう。",
  },
  {
    q: "42歳でマネジメント経験がなくても転職できますか？",
    a: "可能です。マネジメントがなくても、特定領域を深く突き詰めたスペシャリスト（アーキテクト、SRE、セキュリティ、データエンジニアなど）の道があります。ICパスを整備する企業も増えており、プレイヤーとして高い専門性で勝負できます。自分の強みがマネジメントとスペシャリストのどちらの軸かを見極めることが重要です。",
  },
  {
    q: "42歳で未経験からエンジニアになれますか？",
    a: "正直に言えば、42歳で完全未経験からのエンジニア転職は難度が高いです。ただし前職でのIT関連経験（社内SE、VBA開発、データ分析など）があれば、それを足がかりにIT企業へ移ることは可能です。業界知識とIT知識の両方が求められるDX推進ポジションなどが、42歳の経験を活かせる現実的な狙い目になります。",
  },
  {
    q: "42歳のエンジニア転職で有利になるスキルは？",
    a: "技術面ではクラウドアーキテクチャ設計、セキュリティ、データ基盤構築などの上流スキルが有利です。加えてプロジェクトマネジメント経験、チームビルディング実績があると、テックリード・EMなどのポジションを狙えます。15年以上の経験が価値になる基盤技術領域や、特定業界のドメイン知識も42歳の強みになります。",
  },
  {
    q: "42歳の転職活動はどのくらいかかりますか？",
    a: "個人差はありますが、40代は30代より長期化しやすく、準備から内定承諾まで数か月単位を見込んでおくと安心です。要件に合うポジションが出るタイミングも重要なので、在職中に活動を始め、求人にアンテナを張り続けることが成功率を高めます。焦って条件を妥協しないことが何より大切です。",
  },
  {
    q: "エージェントは複数使っても大丈夫ですか？",
    a: "問題ありません。40代向け求人は母数が限られるため、IT特化型・総合型・ハイクラス型を2〜3社併用して網を広げるのが効果的です。ただし同じ求人に複数経由で応募すると企業側で重複し心証を損なうため、応募先が重複しないよう自分で管理しましょう。",
  },
];

export default function Age42Page() {
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
        title="42歳エンジニアの転職｜40代前半で経験を武器にする現実的戦略【2026年6月】"
        description="42歳エンジニアの立ち位置を公的統計とエージェント公表値で解説。40代前半でマネジメント・専門性・ドメインを武器にする戦い方、狙うべき求人、年収の考え方、おすすめエージェントまで。"
        url="/age/42/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "42歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          42歳エンジニアの転職｜40代前半で経験を武器にする現実的戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 40代前半の現実と、経験を役割に変える戦略
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          42歳は40代の前半。求人の母数こそ30代より絞られますが、40代後半に比べればまだ選択肢は残っています。鍵になるのは、プレイヤー枠で若手と競うのではなく、15年以上の経験を「役割」に変えて勝負することです。本記事では、42歳の現実を実データで率直に整理し、マネジメント・専門性・ドメインという武器を活かす戦略を具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "doda「2024年度 決定年収レポート」（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：42歳は経験を「役割」に変えて勝負する</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              42歳は求人の母数こそ絞られますが、マネジメント・専門性・ドメイン知識という40代固有の武器を活かせる役割を狙えば、年収を維持・アップする転職も現実的です。40代前半は後半より選択肢が残るため、「数を追う」のではなく「経験が要件になる役割へ的確に当てる」ことが成功の前提です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>レバテック公表では40代平均年収は約618万円で、1,000万円以上も12.67%（30代の8.01%より高い・2025年）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>経産省試算では2030年に最大約79万人のIT人材不足（2019年公表）で、経験者需要が続く。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 立ち位置 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳という年齢の立ち位置（40代前半）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            42歳は、40代に入って数年。30代までの「即戦力＋伸びしろ」での評価から、「経験そのものが要件になる」評価へと完全に移行した位置です。SE平均年齢37.1歳（厚労省 job tag）からは少し上ですが、40代前半は求人の母数がまだ残っており、40代後半に比べてポジションの選択肢が広いのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            重要なのは、この「前半の余裕」を役割の確立に使うことです。42歳でプレイヤー枠に応募すると若手と同じ土俵で比較され、年齢が不利に働きます。逆に、テックリード・EM・アーキテクト・DX推進といった「経験が要件になる役割」へ移れば、年齢はむしろ強みになります。40代後半になるほどこの傾向は強まるため、42歳のうちに役割を固めておくことが先々の選択肢を守ります。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            前後の年代との比較は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職は厳しい？</Link>や<Link href="/age/45/" className="text-petrol hover:underline">45歳エンジニアの転職</Link>、現実は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で42歳の現実を確認します。出典と時点を明記しています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <tbody>
                {marketRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            注目すべきは、年収のピークが40代に向けて上がっている点です。レバテック公表では30代平均約499万円に対し40代は約618万円、1,000万円以上の割合も30代8.01%から40代12.67%へと増えます。これは「経験が正当に評価されれば40代で年収はむしろ上がる」ことを示しています。なお、42歳「ピンポイント」の平均年収を断定する公的データは存在しないため、ここでは40代単位の公表値を傾向として参照しています。
          </p>
        </section>

        {/* 強みと弱み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳の強みと弱み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">42歳の強み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {strengths.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-700 mb-3">42歳が意識すべき弱み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {weaknesses.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0">!</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            実績の数値化は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、年齢の不安については<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">年齢と転職</Link>でも掘り下げています。
          </p>
        </section>

        {/* 狙うべき求人 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳が狙うべき求人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            42歳は、プレイヤー枠ではなく経験が要件になる役割を狙うのが定石です。代表的な狙い目は次の3つです。
          </p>
          <div className="space-y-4">
            {jobs.map((item, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳の年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            42歳の年収は、レバテック公表の40代平均約618万円を一つの目安にできます。テックリード・EM・アーキテクトなど役割を上げれば、40代の12.67%が到達する1,000万円超のレンジも視野に入ります。逆に、役割を下げるプレイヤー枠への転向は年収が下がりやすいため、42歳では「役割で上げる」設計が基本です。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされます。ただしこれらは40代単位の公表値であり、42歳「ピンポイント」の平均年収を断定する公的データは存在しません。短期の年収だけでなく、中期のキャリア価値と役割で判断することが、40代前半の年収を守り伸ばす鍵です。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            40代の年収は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収のリアル</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* キャリア戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリア戦略：マネジメント vs スペシャリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            42歳の転職は、自分の軸を「マネジメント」か「スペシャリスト」のどちらに置くかでアプローチ先が大きく変わります。プレイヤー枠で若手と競うのではなく、経験が活きる土俵を選ぶことが成功の鍵です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントパス</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームと組織の成果にコミットする道。エンジニアリングマネージャー（EM）、VPoE、テクニカルPMなどが該当します。ピープルマネジメント・採用・プロジェクト管理の実績が、42歳の最大の武器として評価されます。
              </p>
              <p className="text-xs text-petrol">向いている人: 組織やチームの成果に責任を持ちたい／調整・育成が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリストパス（IC）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                技術を突き詰める道。シニアアーキテクト、SRE、セキュリティ、データエンジニアなどが該当します。15年以上の経験から得た基盤技術の深さが、そのまま価値になります。ICパスを整備する企業も増えています。
              </p>
              <p className="text-xs text-petrol">向いている人: 技術の深さで勝負したい／マネジメントより手を動かしたい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">エンジニアのキャリアプラン</Link>、市場価値の確認は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値を知る方法</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">42歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            42歳は求人の母数が限られるため、求人量を確保できる総合型を軸に、IT特化型・ハイクラス型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-petrol hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-petrol font-medium">こんな42歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            40代向けの比較は<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代エージェント比較</Link>、ハイクラス志向なら<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "強みと役割の定義", desc: "マネジメント・専門性・ドメイン知識のうち、自分の核となる武器を特定し、それが活きる役割（EM・アーキテクト・DX推進等）を定義します。プレイヤー枠に流れないことが重要です。" },
              { step: "STEP 2", title: "実績の数値化", desc: "「30名のチームをマネジメント」「レスポンスを60%改善」など、貢献を数値で語れるよう棚卸しします。これが40代転職の必須条件です。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "総合型（doda等）で母数を確保しつつ、IT特化型・ハイクラス型を併用。在職中である旨を伝え、長期戦のスケジュールを共有します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "マネジメント・設計・ドメインの貢献が伝わる職務経歴書に磨き、面接では意思決定の背景や直近の学習を語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。焦って妥協せず、中期のキャリア価値で判断します。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-petrol font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策ガイド</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">42歳の経験を正当に評価する企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型・ハイクラス型エージェントなら、あなたのマネジメント経験・技術力を正しく評価する企業を紹介してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの転職は厳しい？", href: "/age/40s/" },
              { name: "45歳エンジニアの転職", href: "/age/45/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代の年収のリアル", href: "/knowledge/salary-40s/" },
              { name: "40代エージェント比較", href: "/compare/40s-agents/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
