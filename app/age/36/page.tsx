import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "36歳エンジニアの転職｜「35歳の壁」の先で勝つ戦い方【2026年6月】",
  description:
    "36歳エンジニアの転職市場を実データで解説。SE平均年齢37.1歳・30代平均年収約499万円などの公表値をもとに、35歳を過ぎた36歳ならではの「軸を確定して即戦力で勝負する」戦い方、狙うべき求人、年収の考え方、おすすめエージェント、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：36歳は軸を確定し即戦力で勝負する年" },
  { id: "position", label: "36歳という年齢の立ち位置（35歳の先）" },
  { id: "market", label: "36歳エンジニアの市場データ" },
  { id: "strength", label: "36歳の強みと弱み" },
  { id: "jobs", label: "36歳が狙うべき求人" },
  { id: "salary", label: "36歳の年収の考え方" },
  { id: "strategy", label: "軸を確定する（マネジメント vs スペシャリスト）" },
  { id: "agents", label: "36歳におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const marketRows: [string, string][] = [
  ["SE平均年齢", "37.1歳（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["SE平均年収（全年代）", "578.5万円（同上）"],
  ["30代エンジニア平均年収", "約499万円（レバテック公表の年代別平均年収・2025年）"],
  ["40代エンジニア平均年収", "約618万円（同上）"],
  ["年収1,000万円以上の割合", "30代8.01%／40代12.67%（レバテック公表・2025年）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const strengths = [
  "10年超の実務経験があり、設計判断やレビューでチームの質を底上げできる即戦力性が明確",
  "SE平均年齢37.1歳のほぼ真ん中に位置し、職種として年齢的な違和感がまったくない",
  "リードや小規模マネジメントの経験を持つ人が増え、ポジションの幅を広げやすい",
  "若手より採用直後の立ち上がりが速く、企業にとって「すぐ効く」採用になりやすい",
];

const weaknesses = [
  "ポテンシャル採用の窓はほぼ閉じ、「育てる前提」では見てもらえなくなる",
  "コーディング力だけでは20代・30代前半と差別化しにくく、設計・リード経験の言語化が必須になる",
  "完全未経験分野へのキャリアチェンジは難度が一段上がり、隣接領域への移行が現実的になる",
];

const jobs = [
  {
    title: "テックリード・リードエンジニア枠",
    desc: "プレイヤーとして高い技術力を発揮しつつ、技術選定やレビュー、設計の主導を担う枠。36歳の経験がそのまま要件に合致し、年収レンジも上がりやすい本命の狙い目です。",
  },
  {
    title: "スペシャリスト（アーキテクト・SRE・データ等）",
    desc: "特定領域を深く突き詰めるIndividual Contributorの道。ICパスを整備し、マネージャーと同水準の年収を用意する企業も増えています。36歳までに培った専門性が評価されます。",
  },
  {
    title: "エンジニアリングマネージャー（EM）入口",
    desc: "現職でリードやチーム調整の経験があれば、本格的なマネジメントへ踏み出す好機です。36歳は採用・育成・調整の素地を持つ人が増え、EMの入口に立ちやすい年齢です。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収600〜800万円台のリード・設計職を狙う36歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）。テックリード・アーキテクトなど36歳の経験が活きるポジションの提案を受けやすい。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "ハイクラス・管理職を視野に入れる36歳",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。市場価値を客観的に把握しやすく、36歳以降のキャリアアップ志向と相性が良い。無料会員でも利用可能。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    fit: "Web・ゲーム業界でスピード重視の36歳",
    reason:
      "IT/Web/ゲーム業界に専門特化。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。提案スピードに強みがあり、在職中でも効率よく進められます。",
  },
];

const faqs = [
  {
    q: "36歳エンジニアの転職は遅すぎますか？",
    a: "遅くありません。厚労省 job tagではSEの平均年齢が37.1歳で、36歳はほぼ職種の真ん中です。35歳を過ぎてポテンシャル採用の窓は閉じますが、その分「即戦力としてすぐ効く」価値で勝負できます。経産省試算では2030年に最大約79万人のIT人材不足とされ、経験者の需要は続いています。要は、強みに合うポジションへ的確にアプローチできるかです。",
  },
  {
    q: "35歳と36歳で、転職市場の扱いは変わりますか？",
    a: "市場の見方に大きな段差はありませんが、心構えは変わります。35歳前後で残っていた「育てる前提」のポテンシャル採用余地は、36歳ではほぼ閉じます。そのため、コーディング力の高さだけでなく、設計・リード・育成といった即戦力＋αの貢献を明確に語れることが、35歳のとき以上に重要になります。",
  },
  {
    q: "36歳でマネジメント経験がなくても転職できますか？",
    a: "可能です。マネジメントが必須というわけではなく、特定領域を深く突き詰めたスペシャリスト（アーキテクト、SRE、セキュリティ、データエンジニアなど）の道があります。ICパスを整備する企業も増えており、プレイヤーとして高い専門性で勝負できます。ただし36歳では「軸が定まっているか」が問われるため、IC方向で行くなら専門性を言語化しておきましょう。",
  },
  {
    q: "36歳から新しい技術分野に挑戦できますか？",
    a: "可能ですが、ゼロからの完全未経験より「これまでの経験を活かせる隣接領域への移行」が現実的です。バックエンド経験者がクラウドインフラへ、Web開発者がデータエンジニアリングへ、といった形なら過去の実績を土台に転換できます。36歳は移行の自由度がやや下がる年齢なので、リスクとリターンを冷静に見極めましょう。",
  },
  {
    q: "36歳で転職すると年収は下がりますか？",
    a: "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルなら維持〜アップが一般的です。レバテック公表では30代平均約499万円、40代平均約618万円と年代とともに上がる傾向があり、36歳はその上昇カーブの上にいます。下がりやすいのはマネジメント→プレイヤーや異業種への転向など大きな方向転換を伴う場合です。",
  },
  {
    q: "36歳エンジニアは何社くらい応募すべき？",
    a: "本命を含めて10〜20社程度に絞り、並行して数社の選考を進めるのが一般的です。36歳は求人の「数」より「自分の強みと一致するか」が成否を分けます。応募数を増やすこと自体を目的にせず、エージェントと優先順位を決めて複数内定を比較できる状態を目指しましょう。",
  },
  {
    q: "在職中と退職後、どちらで活動すべきですか？",
    a: "在職中の活動を推奨します。36歳は家庭やローンなど固定費が増える時期でもあり、収入を確保しながら焦らず複数内定を比較できる方が条件交渉でも有利です。求人ペースを保ちたい場合は、エージェントに在職中である旨を伝えてスケジュールを調整してもらいましょう。",
  },
];

export default function Age36Page() {
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
        title="36歳エンジニアの転職｜「35歳の壁」の先で勝つ戦い方【2026年6月】"
        description="36歳エンジニアの立ち位置を公的統計とエージェント公表値で解説。35歳を過ぎてからの即戦力勝負、軸の確定、狙うべき求人、年収の考え方、おすすめエージェントまで。"
        url="/age/36/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "36歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          36歳エンジニアの転職｜「35歳の壁」の先で勝つ戦い方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ポテンシャルの窓が閉じた後の即戦力勝負
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          36歳は、長く語られてきた「35歳の壁」を一歩越えた位置にあります。とはいえ厚労省 job tagではSEの平均年齢が37.1歳。36歳はほぼ職種の真ん中で、年齢的な不利はほとんどありません。変わるのは戦い方です。本記事では、ポテンシャル採用の窓が閉じた36歳が、即戦力＋αの価値で勝負するための具体策を実データで解説します。
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
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：36歳は「軸を確定して即戦力で勝負する」年</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              36歳は限界どころか、SE職種のほぼ中心です。35歳までの「これから育てる前提」の採用余地は閉じますが、その分「採用直後からすぐ効く」即戦力性で勝負できます。マネジメントかスペシャリストか、軸を定めて強みに合うポジションへ的確に当てれば、年収アップを伴う転職も十分に狙えます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>厚労省 job tagではSEの平均年齢は37.1歳。36歳はほぼ職種の真ん中で、年齢的に外れていない。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>レバテック公表では30代平均約499万円・40代平均約618万円。36歳は上昇カーブの上にいる。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 立ち位置 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳という年齢の立ち位置（35歳の先）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            33歳前後にあった「ポテンシャルと即戦力の両取り」の窓は、35歳を境に少しずつ閉じます。36歳はその窓がほぼ閉じきった直後の位置です。これは悪いニュースではありません。育てる前提での比較対象から外れる分、純粋に「即戦力としてすぐ効くか」「チームの質を上げられるか」という、経験者に有利な土俵で評価されるようになります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            一方で、36歳に求められるのは「軸の明確さ」です。35歳までは「まだ方向を探している」状態も許容されましたが、36歳では「マネジメントで行くのか、専門性で行くのか」がぼやけていると、評価が伸びにくくなります。33歳・35歳で先送りにしていた軸の確定を、ここで腹落ちさせることが転職成功の前提条件になります。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            前後の年代との比較は<Link href="/age/35/" className="text-blue-600 hover:underline">35歳エンジニアの転職は限界？</Link>や<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職は厳しい？</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で36歳の現実を確認します。出典と時点を明記しています。
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
            SEの平均年齢が37.1歳である点は、36歳にとって心強いデータです。36歳が「行き遅れ」なら、職種の平均年齢がこの水準になることはありません。年収面でもレバテック公表では30代平均約499万円・40代平均約618万円と上昇が続き、36歳はその途上にいます。なお、36歳「ピンポイント」の平均年収を断定する公的データは存在しないため、ここでは年代単位の公表値を傾向として参照しています。
          </p>
        </section>

        {/* 強みと弱み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳の強みと弱み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">36歳の強み</h3>
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
              <h3 className="font-bold text-amber-700 mb-3">36歳が意識すべき弱み</h3>
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
            自分の市場価値の測り方は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値を知る方法</Link>、年齢の不安については<Link href="/knowledge/age-discrimination/" className="text-blue-600 hover:underline">年齢と転職</Link>でも掘り下げています。
          </p>
        </section>

        {/* 狙うべき求人 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳が狙うべき求人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            36歳は、プレイヤー枠で若手と同じ土俵に立つより、経験が要件になるポジションを狙うのが定石です。代表的な狙い目は次の3つです。
          </p>
          <div className="space-y-4">
            {jobs.map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳の年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            36歳の年収は、レバテック公表の30代平均約499万円と40代平均約618万円の間にあると捉えると見通しが立ちます。リード・設計やスペシャリストのポジションに移れば、30代平均を上回る水準を狙うことも十分に現実的です。ただしこれらは年代単位の公表値であり、36歳「ピンポイント」の平均年収を断定する公的データは存在しません。スキルや業界による振れ幅を前提に参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされます。36歳は即戦力性が明確な分、現職と同等以上の役割で移れば年収アップを狙いやすい年齢です。逆に役割を下げる転向は年収が下がりやすいため、軸を確定したうえで「上げる方向」の転職を設計しましょう。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収レンジ別の狙い方は<Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収のリアル</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 軸を確定する */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">軸を確定する：マネジメント vs スペシャリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            36歳は、この先の軸を「仮説」から「確定」に近づけるタイミングです。どちらが上ということはなく、自分の志向と市場の需要が重なる方向を選ぶことが成功の鍵です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントパス</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームの生産性とメンバーの成長にコミットする道。エンジニアリングマネージャー（EM）やテックリードが該当します。採用・育成・調整の経験が評価され、年収レンジは上がりやすい一方、ハンズオンの比率は下がります。36歳はEMの入口に立ちやすい年齢です。
              </p>
              <p className="text-xs text-blue-600">向いている人: チーム全体の成果に喜びを感じる／育成・調整が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリストパス（IC）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                技術を突き詰めるIndividual Contributorの道。アーキテクト、SRE、データエンジニア、セキュリティなどが該当します。ICパスを整備し、マネージャーと同水準の年収を用意する企業も増えています。36歳までの専門性が武器になります。
              </p>
              <p className="text-xs text-blue-600">向いている人: 技術そのものに没頭できる／深い専門性で勝負したい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">エンジニアのキャリアプラン</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">36歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            36歳はIT特化型を軸に、ハイクラス型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-blue-600 hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">こんな36歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            年代別の比較は<Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代エージェント比較</Link>、ハイクラス志向なら<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "軸を確定する", desc: "マネジメントかスペシャリストか、36歳ではここを腹落ちさせます。軸が定まると応募ポジションと自己PRがぶれず、評価が伸びます。" },
              { step: "STEP 2", title: "即戦力＋αの言語化", desc: "コーディング力だけでなく、設計判断・レビュー・育成など「チームの質を上げた貢献」を具体例で語れるよう棚卸しします。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "IT特化型・ハイクラス型を併用し、初回面談で希望と軸を共有。提案傾向から自分の市場価値を把握します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "リード・設計の貢献が伝わる職務経歴書に磨き、技術面接では判断の根拠や失敗からの学びを語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。承諾後は円満退職を進めます。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-blue-600 font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接対策ガイド</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">36歳は、即戦力で勝負できる年齢</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、10年超の経験が要件になるポジションを見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニアの転職は厳しい？", href: "/age/40s/" },
              { name: "自分の市場価値を知る方法", href: "/knowledge/market-value/" },
              { name: "年齢と転職（年齢の壁を考える）", href: "/knowledge/age-discrimination/" },
              { name: "30代エージェント比較", href: "/compare/30s-agents/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
