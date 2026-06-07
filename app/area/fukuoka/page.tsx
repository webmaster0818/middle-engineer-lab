import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "福岡のIT転職事情【2026年】スタートアップとリモート移住の選択肢",
  description:
    "福岡のIT・Webエンジニア転職を解説。スタートアップ支援で知られる都市の特徴、働き方の選択肢、年代別年収の考え方、エリア対応エージェント、移住の進め方を30代・40代向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：福岡IT転職市場の特徴" },
  { id: "market", label: "福岡のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢（移住×リモート含む）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "福岡エリアに対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "福岡転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "スタートアップ・自社開発で裁量や成長機会を重視したい",
  "住居費を抑え、可処分所得やQOLを上げる移住を検討している",
  "都市機能とコミュニティの活発さの両方を大切にしたい",
  "首都圏のフルリモート求人も含めて柔軟に選択肢を広げたい",
];

const fitNo = [
  "大企業の安定性や手厚い福利厚生を最優先したい（首都圏の方が母数が多い）",
  "特定領域の超大規模プロダクト開発に限定して携わりたい",
  "出社不要のフルリモートのみを希望し、移住や地元出社は考えていない（求人選びで明示が必要）",
];

const salaryByAge = [
  { age: "20代", salary: "約378万円", note: "第二新卒〜若手。ポテンシャル採用も多い層。" },
  { age: "30代", salary: "約499万円", note: "実務リーダー・専門性で評価される中核層。" },
  { age: "40代", salary: "約618万円", note: "マネジメントや高度専門で年収が伸びやすい層。" },
  { age: "50代", salary: "約685万円", note: "管理職・技術顧問など役割で差が大きい層。" },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、スタートアップ・自社開発を志向するエンジニアと相性が良い。首都圏中心とされるが、フルリモート求人で福岡在住でも選択肢を広げやすい。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。IT・ゲーム領域に強く、地方在住からの相談に向く。レスポンスの速さに定評があり、未経験歓迎求人も比較的多い。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、福岡の地元求人から首都圏のフルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "Green",
    href: "/review/green/",
    point:
      "成功報酬型の転職サイト（ダイレクトリクルーティング）。IT/Webベンチャー・スタートアップに強く、カジュアル面談で社風を把握しやすい。仲介サポートはない点に留意。",
  },
];

const faqs = [
  {
    q: "福岡のITエンジニアの年収はどのくらいですか？",
    a: "福岡エリア限定の公的平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）では30代で約499万円、40代で約618万円とされています。福岡は住居費を抑えやすいエリアのため、同じ額面でも可処分所得に差が出やすい点を踏まえて考えるのが現実的です。",
  },
  {
    q: "福岡がスタートアップに前向きな都市と言われるのはなぜですか？",
    a: "福岡市は創業・スタートアップ支援に積極的な都市として広く知られており、官民連携の支援拠点やエンジニア向けコミュニティ・勉強会が活発という定性的な評価があります。具体的な企業数や支援制度の最新内容は時期により変わるため、断定は避け、最新情報は公式の発表をご確認ください。",
  },
  {
    q: "東京から福岡への移住転職は現実的ですか？",
    a: "フルリモート前提であれば現実的な選択肢です。居住地を福岡に移し、首都圏企業の年収水準を保ちながら福岡の生活コストで暮らすという働き方を選ぶエンジニアもいます。一方、出社頻度のある求人では通勤・出張の負担を見積もる必要があります。求人ごとの出社要件を早めに確認しましょう。",
  },
  {
    q: "福岡でフルリモートの求人は見つかりますか？",
    a: "福岡拠点の企業でもハイブリッドやフルリモートの選択肢が広がっているほか、首都圏企業のフルリモート求人に福岡在住のまま応募する方法もあります。エージェントに『福岡在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。",
  },
  {
    q: "福岡のIT転職におすすめのエージェントは？",
    a: "IT特化で技術理解を重視するならレバテックキャリア、拠点網の広さとスピードを重視するならワークポート、求人量を重視するならdoda、スタートアップ志向ならダイレクトリクルーティングのGreenが候補です。複数併用して提案傾向を比較するのがおすすめです。",
  },
  {
    q: "福岡は生活コストが安いと聞きますが本当ですか？",
    a: "一般に住居費は首都圏より抑えやすいとされ、可処分所得の観点で魅力があると評価されます。ただし個々の家賃・生活費は条件次第で大きく異なるため、額面年収と生活コストの両面で具体的に試算して判断するのが確実です。",
  },
  {
    q: "福岡でスタートアップに転職する場合の注意点は？",
    a: "スタートアップは裁量や成長機会が大きい一方、事業フェーズによって安定性やストックオプションの扱いが異なります。給与・待遇・株式条件・キャッシュポジションなどを面談で具体的に確認することが重要です。大企業との違いは、スタートアップと大企業の比較記事もあわせて参考にしてください。",
  },
];

export default function FukuokaAreaPage() {
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
        title="福岡のIT転職事情【2026年】スタートアップとリモート移住の選択肢"
        description="福岡のIT・Webエンジニア転職を解説。スタートアップ支援で知られる都市の特徴、働き方の選択肢、年代別年収の考え方、エリア対応エージェント、移住の進め方を紹介します。"
        url="/area/fukuoka/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "福岡のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          福岡のIT転職事情【2026年】スタートアップとリモート移住の選択肢
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 福岡エリアのIT転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            福岡は、創業・スタートアップ支援に前向きな都市として広く知られ、エンジニア向けのコミュニティや勉強会が活発な土地柄です。加えて、住居費を抑えやすく生活コストの面で移住先として注目される都市でもあります。本記事では、公開情報をベースに福岡のIT転職市場の特徴、働き方の選択肢、年代別の年収の考え方、エリア対応エージェントを30代・40代向けに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "各エージェント公式・転職メディア集計",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：福岡IT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              福岡のIT転職は「スタートアップ・自社開発を志向するエンジニア」と「生活コストを抑えてQOLを上げたい移住希望者」の双方に選択肢が広い市場です。地元のWeb/スタートアップ求人と、首都圏のフルリモート求人を組み合わせて考えると、年収と働き方のバランスを取りやすくなります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・スタートアップ支援で知られ、Web/自社開発のコミュニティが活発</li>
              <li>・住居費を抑えやすく、可処分所得の観点で移住の魅力がある</li>
              <li>・首都圏フルリモート求人を併用すれば年収水準の選択肢が広がる</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 市場 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡のIT市場を語るうえで欠かせないのが、スタートアップに前向きな都市文化です。福岡市は創業支援に積極的な都市として広く知られ、エンジニア向けのイベントや勉強会、コワーキング拠点を中心としたコミュニティが活発という定性的な評価があります。経済産業省が2019年3月に公表した「IT人材需給に関する調査」では2030年に最大約79万人のIT人材不足が試算されており、地方の中核都市である福岡でもDX・開発人材の需要は構造的に続くと見られます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">天神・博多エリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                天神は再開発が進むビジネス中心地として知られ、IT企業の拠点やWeb系・自社開発の企業が見られます。博多駅周辺はSIerや受託開発企業が集まりやすく、業務系システムの案件も多い土地柄です。都市機能が集約されており、出社・ハイブリッドいずれの働き方も選びやすいのが特徴です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">スタートアップ・自社開発の層</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                福岡はスタートアップ支援で知られる都市として、Web/SaaS・自社開発を志向するエンジニアの受け皿が比較的厚いとされます。カジュアル面談を通じて社風を確かめながら選べる求人も見られ、裁量や成長機会を重視する人に向いた選択肢があります。一方で事業フェーズによる安定性の違いは、個別に確認が必要です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">求められるスキルの傾向</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Web/SaaS寄りの領域では一般的なWebアプリ開発スタック、クラウド、開発プロセスの経験が評価されやすい傾向です。スタートアップでは少人数で幅広く担える柔軟性も重視されます。自分の経験が地元の自社開発に向くか、首都圏フルリモート求人に向くかを見極めることが、福岡での求人探しの起点になります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（移住×リモート含む）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡で働くエンジニアの選択肢は、大きく次の3つに整理できます。年収・出社頻度・生活コストのどれを優先するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元企業に出社・ハイブリッドで勤務:</strong> 天神・博多の都市機能を活かしつつ、通勤負担を抑えて働ける。地域に根ざしたキャリアやコミュニティを重視する人に向きます。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>福岡のスタートアップ・自社開発でハイブリッド:</strong> 裁量や成長機会を重視するキャリア。カジュアル面談で社風を見極めながら、開発寄りのポジションを選べます。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>福岡在住×首都圏企業のフルリモート:</strong> 福岡の生活コストを保ちつつ首都圏水準の年収を狙う選択肢。
                <Link href="/area/remote/" className="text-blue-600 hover:underline">フルリモートIT転職ガイド</Link>
                や
                <Link href="/area/iiju/" className="text-blue-600 hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討する価値があります。
              </p>
            </div>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。エリア・領域・スキルによって実際の提示額は上下する点に留意してください。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員SE平均年収（2025年・全国）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">補足</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.age}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{row.salary}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、福岡エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            福岡で年収を考えるときは、額面と生活コストのバランスが鍵になります。住居費を抑えやすいエリアでは、同じ額面でも可処分所得が増えやすい一方、首都圏のフルリモート求人を選べば、福岡の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡での転職は、全国対応の総合型と、技術理解の高いIT特化型・ダイレクトリクルーティングを組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
          </p>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  {i + 1}.{" "}
                  <Link href={a.href} className="hover:underline">
                    {a.name}
                  </Link>
                </h3>
                <p className="text-sm text-blue-700 leading-relaxed">{a.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各社の対応エリア・求人傾向は時点により変動します。複数社の比較は
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント比較</Link>
            、リモート求人特化の比較は
            <Link href="/compare/remote-agents/" className="text-blue-600 hover:underline">リモート求人に強いエージェント比較</Link>
            を参照してください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・移住の進め方</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "軸を決める", desc: "「地元の自社開発」「スタートアップ」「首都圏フルリモート」のどれを中心に据えるかを先に決める。提案される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "IT特化型と全国対応の総合型を組み合わせ、スタートアップ志向ならGreenのようなダイレクト型も加える。" },
              { step: "3", title: "出社要件・移住計画を確認", desc: "求人ごとの出社頻度を確認し、移住を伴う場合は引っ越し・住居費の試算を並行して進めます。" },
              { step: "4", title: "職務経歴書で強みを言語化", desc: "幅広く担える柔軟性やドメイン経験など、福岡市場で評価されやすい要素を具体的に示します。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方を含めて総合判断します。" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3 border border-slate-200 rounded-lg p-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-white text-xs font-bold shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。福岡の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2">
                {fitYes.map((t, i) => (
                  <li key={i} className="text-sm text-green-900 leading-relaxed flex gap-2">
                    <span className="shrink-0">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</h3>
              <ul className="space-y-2">
                {fitNo.map((t, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-relaxed flex gap-2">
                    <span className="shrink-0">−</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、福岡在住のまま首都圏のフルリモート求人を狙えば、希望と地域を両立できる場合があります。スタートアップ志向か安定志向か、地元出社かフルリモートかを面談で言語化しておくと、提案のミスマッチを防げます。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡は、30代・40代のミドルエンジニアが「働き方とQOLを見直す」転職先として検討しやすい市場です。スタートアップで裁量を広げる道も、首都圏の年収を保ちつつ生活コストを下げる道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、スタートアップで裁量を広げるか、フルリモートで首都圏案件を経験するかを意識的に選ぶフェーズ。生活基盤を整えながらキャリアの幅を広げやすい時期です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。安定性と裁量のバランスを見極め、移住によるQOL向上と年収水準を両立できる形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            、スタートアップと大企業の違いは
            <Link href="/knowledge/startup-vs-enterprise/" className="text-blue-600 hover:underline">スタートアップvs大企業</Link>
            もあわせてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">福岡のIT転職・移住を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            スタートアップから首都圏フルリモートまで。エリア対応のエージェントに相談して、年収と働き方のバランスが取れる選択肢を見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
              { name: "名古屋のIT転職事情", href: "/area/nagoya/" },
              { name: "スタートアップvs大企業", href: "/knowledge/startup-vs-enterprise/" },
              { name: "リモート求人に強いエージェント比較", href: "/compare/remote-agents/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
