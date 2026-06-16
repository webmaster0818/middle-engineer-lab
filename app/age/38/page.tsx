import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "38歳エンジニアの転職｜40代を見据えた30代ラストの一手【2026年6月】",
  description:
    "38歳エンジニアの転職市場を実データで解説。SE平均年齢37.1歳・30代平均年収約499万円・40代約618万円などの公表値をもとに、30代最後の局面でのポジショニング、40代を見据えた軸づくり、狙うべき求人、年収の考え方、おすすめエージェント、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：38歳は40代への布石を打つ30代ラスト" },
  { id: "position", label: "38歳という年齢の立ち位置（30代の最終局面）" },
  { id: "market", label: "38歳エンジニアの市場データ" },
  { id: "strength", label: "38歳の強みと弱み" },
  { id: "jobs", label: "38歳が狙うべき求人" },
  { id: "salary", label: "38歳の年収の考え方" },
  { id: "strategy", label: "40代を見据えたキャリア設計" },
  { id: "agents", label: "38歳におすすめのエージェント" },
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
  "10年超の実務に加え、リードや設計の主導経験を持つ人が増え、即戦力＋牽引力で評価される",
  "SE平均年齢37.1歳をわずかに上回るだけで、年齢的な不利はほとんどない",
  "特定ドメインの深い知見が蓄積され、「技術 × 業界」の掛け算で希少性を作りやすい",
  "40代より求人の母数が多く、30代のうちにポジションを固められる最後の局面にいる",
];

const weaknesses = [
  "純粋なプレイヤー（プログラマー）枠は若手と比較され、38歳では勝ちにくくなる",
  "軸が定まらないまま40代を迎えると、求人の母数が一段絞られてから戦うことになる",
  "完全未経験分野へのキャリアチェンジは難度が高く、30代のうちに動くなら今が現実的な最後のライン",
];

const jobs = [
  {
    title: "テックリード・リードエンジニア／プロジェクトリード",
    desc: "技術選定・設計・レビューを主導し、チームを牽引する枠。38歳の経験がそのまま要件に合致し、40代でのEM・アーキテクトへの土台にもなる本命の狙い目です。",
  },
  {
    title: "ドメイン特化のシニア／アーキテクト",
    desc: "金融・医療・物流など特定業界での経験とITの掛け算が評価されるポジション。38歳までに蓄えたドメイン知見は替えが利きにくく、DX推進やテクニカルコンサルでも価値を生みます。",
  },
  {
    title: "エンジニアリングマネージャー（EM）",
    desc: "現職でチーム調整や育成の経験があれば、40代でのマネジメント職に向けた助走として有力です。採用・育成・調整の実績を語れる38歳はEM候補として迎え入れられやすくなります。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収700〜800万円台のリード・アーキテクト職を狙う38歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）。38歳の設計・リード経験が活きるポジションの提案を受けやすい。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "ハイクラス・管理職を視野に40代を見据える38歳",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。市場価値を客観的に把握しやすく、40代の12.67%が到達する1,000万円超を見据えるなら相性が良い。無料会員でも利用可能。",
  },
  {
    name: "doda（IT・通信エンジニア）",
    href: "/review/doda-it/",
    fit: "幅広い求人から選択肢を比べたい38歳",
    reason:
      "国内最大級の求人数で、検索・エージェント・スカウトを併用できるハイブリッド型。母数が大きいため、40代に入る前に相場観をつかみ選択肢を比較するのに向きます。転職者の約6割が年収アップ、IT・通信の平均決定年収は486万円（2024年度・doda公表値）。",
  },
];

const faqs = [
  {
    q: "38歳エンジニアの転職はもう厳しいですか？",
    a: "厳しくありません。厚労省 job tagではSEの平均年齢が37.1歳で、38歳はそれをわずかに上回るだけ、ほぼ職種の中心です。ただし純粋なプレイヤー枠は若手と比較されやすくなるため、リード・設計・専門性が要件のポジションを狙うのが定石です。経産省試算では2030年に最大約79万人のIT人材不足とされ、経験者需要は続いています。",
  },
  {
    q: "38歳と40歳で、転職のしやすさは変わりますか？",
    a: "40代に入ると応募できる求人の母数が一段絞られる傾向があるため、30代のうちに動ける38歳には母数の面で優位があります。40代では要件に合うポジションへ的確に当てる戦い方が一層重要になります。38歳は「30代のうちにポジションと軸を固めておく」最後の局面と捉えると、動き方の優先順位が見えてきます。",
  },
  {
    q: "38歳でマネジメント経験がなくても転職できますか？",
    a: "可能です。マネジメントが必須ではなく、特定領域を深く突き詰めたスペシャリスト（アーキテクト、SRE、セキュリティ、データエンジニアなど）の道があります。ICパスを整備する企業も増えています。ただし、40代を見据えるなら「マネジメントで行くのか専門性で行くのか」を38歳のうちに固めておくと、次の選択肢が広がります。",
  },
  {
    q: "38歳から新しい技術分野に挑戦できますか？",
    a: "可能ですが、ゼロからの完全未経験より「これまでの経験を活かせる隣接領域への移行」が現実的です。バックエンド経験者がクラウドインフラへ、Web開発者がデータエンジニアリングへ、といった形なら過去の実績を土台に転換できます。完全未経験への挑戦を30代のうちに行うなら、38歳が現実的な最後のラインと考えておきましょう。",
  },
  {
    q: "38歳で転職すると年収は下がりますか？",
    a: "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルなら維持〜アップが一般的です。レバテック公表では30代平均約499万円、40代平均約618万円と年代とともに上がる傾向があり、38歳はその上昇カーブの上にいます。下がりやすいのはマネジメント→プレイヤーや異業種への転向など大きな方向転換を伴う場合です。",
  },
  {
    q: "38歳エンジニアは何社くらい応募すべき？",
    a: "本命を含めて10〜15社程度に絞り、並行して数社の選考を進めるのが現実的です。38歳は求人の「数」より「強みとの一致」が成否を分けます。リード・設計・ドメインのどの軸で勝負するかを定め、エージェントと優先順位を決めて複数内定を比較できる状態を目指しましょう。",
  },
  {
    q: "在職中と退職後、どちらで活動すべきですか？",
    a: "在職中の活動を推奨します。38歳は家庭やローンなど固定費が増える時期でもあり、収入を確保しながら焦らず複数内定を比較できる方が条件交渉でも有利です。求人ペースを保ちたい場合は、エージェントに在職中である旨を伝えてスケジュールを調整してもらいましょう。",
  },
];

export default function Age38Page() {
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
        title="38歳エンジニアの転職｜40代を見据えた30代ラストの一手【2026年6月】"
        description="38歳エンジニアの立ち位置を公的統計とエージェント公表値で解説。30代最後の局面でのポジショニング、40代を見据えた軸づくり、狙うべき求人、年収の考え方、おすすめエージェントまで。"
        url="/age/38/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "38歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          38歳エンジニアの転職｜40代を見据えた30代ラストの一手
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代最後の局面で、40代の選択肢を広げる
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          38歳は、30代の最終局面です。厚労省 job tagのSE平均年齢37.1歳をわずかに上回るだけで、年齢的な不利はほとんどありません。しかし、ここで打つ一手は40代の選択肢を大きく左右します。本記事では、38歳の立ち位置を実データで整理し、30代のうちにポジションと軸を固め、40代を有利に迎えるための戦略を具体的に解説します。
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：38歳は40代への布石を打つ30代ラスト</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              38歳は限界ではなく、30代最後の好機です。40代に入ると求人の母数が一段絞られる傾向があるため、母数が多い30代のうちにリード・設計・ドメインの軸を固めておくことが、40代の選択肢を大きく広げます。即戦力＋牽引力で勝負すれば、年収アップを伴う転職も十分に狙えます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>厚労省 job tagではSEの平均年齢は37.1歳。38歳はそれをわずかに上回るだけで、年齢的に外れていない。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>レバテック公表では30代平均約499万円・40代平均約618万円。38歳は上昇カーブの上にいる。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳という年齢の立ち位置（30代の最終局面）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            38歳は、30代として動ける最後の数年に入った位置です。36歳までに軸を確定した人が、その軸でポジションを固めていく段階とも言えます。SE平均年齢37.1歳をわずかに上回るだけなので、年齢そのものは障壁になりません。重要なのは、40代に入る前に「自分はこの軸で勝負する」という旗をはっきり立てておくことです。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            40代に入ると、応募できる求人は要件に合うポジションへと一段絞られます。逆に言えば、38歳の今は40代より母数が多く、リード・アーキテクト・EMといった「40代で本命になる役割」に、まだ余裕をもって移れる局面です。ここで役割を一段上げておけるかどうかが、40代のキャリアと年収のレンジを左右します。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            前後の年代との比較は<Link href="/age/35/" className="text-petrol hover:underline">35歳エンジニアの転職は限界？</Link>や<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職は厳しい？</Link>、40代の実態は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で38歳の現実を確認します。出典と時点を明記しています。
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
            38歳が注目すべきは、30代平均約499万円と40代平均約618万円の差です（レバテック公表）。この差は、30代から40代にかけて役割が上がることで年収が伸びることを示しています。38歳はその上昇カーブの後半にいて、リード・専門職へ移れば40代水準に近づけます。なお、38歳「ピンポイント」の平均年収を断定する公的データは存在しないため、ここでは年代単位の公表値を傾向として参照しています。
          </p>
        </section>

        {/* 強みと弱み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳の強みと弱み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">38歳の強み</h3>
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
              <h3 className="font-bold text-amber-700 mb-3">38歳が意識すべき弱み</h3>
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
            自分の市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値を知る方法</Link>、実績の語り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>を参考にしてください。
          </p>
        </section>

        {/* 狙うべき求人 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳が狙うべき求人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            38歳は、プレイヤー枠で若手と競うより、40代でも通用する役割へ一段上げる転職を狙うのが定石です。代表的な狙い目は次の3つです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳の年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            38歳の年収は、レバテック公表の30代平均約499万円を起点に、リード・アーキテクト・EMへ役割を上げることで40代平均約618万円に近づける、という構図で捉えると見通しが立ちます。年収1,000万円以上の割合も30代8.01%から40代12.67%へ増えるため、38歳で役割を上げておくことが、40代でのハイレンジ到達の布石になります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされます。ただしこれらは年代単位の公表値であり、38歳「ピンポイント」の平均年収を断定する公的データは存在しません。目先の年収だけでなく、40代の年収レンジを引き上げる役割に就けるかという中期視点で判断するのが、38歳の賢い選び方です。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収レンジ別の狙い方は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収のリアル</Link>、40代の年収は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収のリアル</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 40代を見据えたキャリア設計 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代を見据えたキャリア設計</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            38歳の転職は、単なる現職からの脱出ではなく「40代でどんな役割に就きたいか」から逆算して設計するのが効果的です。マネジメントとスペシャリストのどちらに進むにせよ、40代の本命ポジションへの助走として今の一手を位置づけましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントパス（EM・VPoEへ）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                38歳でリード・チーム調整の実績を作り、40代でのEM・VPoEにつなげる道。採用・育成・プロジェクト管理の経験は、40代で最大の武器になります。今のうちにマネジメントの実績を積み上げておくことが鍵です。
              </p>
              <p className="text-xs text-petrol">向いている人: 組織やチームの成果に責任を持ちたい／調整・育成が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリストパス（シニアアーキテクトへ）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                38歳までの専門性を深め、40代でシニアアーキテクトやテクニカルフェローを狙う道。基盤技術やドメインの深さは経験年数がそのまま価値になります。ICパスを整備する企業も増えています。
              </p>
              <p className="text-xs text-petrol">向いている人: 技術の深さで勝負したい／マネジメントより手を動かしたい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">エンジニアのキャリアプラン</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">38歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            38歳はIT特化型を軸に、ハイクラス型と総合型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
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
                <p className="text-xs text-petrol font-medium">こんな38歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            年代別の比較は<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代エージェント比較</Link>、40代を見据えるなら<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代エージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "40代の目標から逆算", desc: "40代でどんな役割に就きたいかを先に描き、そこへの助走として今の転職を位置づけます。マネジメントか専門性か、軸を旗として立てます。" },
              { step: "STEP 2", title: "役割を一段上げる準備", desc: "リード・設計・ドメインのうち自分の核を特定し、それが要件になるポジションへ移れるよう実績を数値で棚卸しします。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "IT特化型・ハイクラス型・総合型を併用し、初回面談で40代を見据えた希望を共有。提案傾向から市場価値を把握します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "リード・設計・ドメインの貢献が伝わる職務経歴書に磨き、面接では意思決定の背景や直近の学習を語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・40代へのつながりで比較し、必要なら条件交渉をエージェント経由で行います。承諾後は円満退職を進めます。" },
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
          <h2 className="text-xl font-bold mb-3">38歳の一手が、40代のキャリアを決める</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型・ハイクラス型エージェントに相談して、40代の選択肢を広げる役割への一手を打ちましょう。
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
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニアの転職は厳しい？", href: "/age/40s/" },
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
