import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "札幌のIT転職事情【2026年】リモート移住と北海道の選択肢",
  description:
    "札幌・北海道のIT・Webエンジニア転職を解説。リモート移住先としての特徴、ニアショア開発、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを30代・40代向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：札幌IT転職市場の特徴" },
  { id: "market", label: "札幌・北海道のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢（移住×リモート含む）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "札幌エリアに対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "札幌転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "都市機能を保ちつつ住居費を抑え、QOLを上げる移住を検討している",
  "フルリモートで首都圏案件に関わりながら北海道で暮らしたい",
  "ニアショア開発で要件定義から実装まで幅広く担いたい",
  "自然環境やアウトドアを含めた暮らし方を重視している",
];

const fitNo = [
  "毎日出社が必須の働き方で、冬季の通勤負担を避けたい（働き方の選択で調整が必要）",
  "最先端のWeb/SaaS自社開発の選択肢を最大限に広げたい（首都圏の方が母数が多い）",
  "本州への頻繁な出張・移動を負担に感じる（フルリモート求人で軽減可能）",
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、フルリモート求人を介して札幌在住のまま首都圏企業を狙う転職と相性が良い。高年収求人比率の高さも特徴とされる。",
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
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、札幌の地元求人から首都圏フルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    point:
      "ハイクラス・スカウト型。年収750万円以上の求人やフルリモート対応のシニア・管理職ポジションを、札幌在住のまま探したい人に向く。市場価値を客観的に把握しやすい。",
  },
];

const faqs = [
  {
    q: "札幌のITエンジニアの年収はどのくらいですか？",
    a: "札幌エリア限定の公的平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）では30代で約499万円、40代で約618万円とされています。札幌は住居費を抑えやすいエリアのため、同じ額面でも可処分所得に差が出やすい点を踏まえて考えるのが現実的です。",
  },
  {
    q: "札幌がリモート移住先として人気と言われるのはなぜですか？",
    a: "札幌は政令指定都市としての都市機能と、首都圏より抑えやすい住居費、豊かな自然環境を併せ持つ都市として、定性的に移住先の魅力が語られます。新千歳空港経由で本州へのアクセスも確保しやすく、月数回の出社・出張を伴う働き方とも両立しやすい点が評価されています。",
  },
  {
    q: "札幌のニアショア開発とは何ですか？",
    a: "首都圏の企業が開発業務の一部を地方拠点で担う体制を一般にニアショア開発と呼びます。札幌にはこうした開発拠点が置かれることがあり、首都圏案件を札幌で担当する働き方につながる場合があります。具体的な拠点数や企業名は時期で変わるため、最新状況はエージェントで確認するのが確実です。",
  },
  {
    q: "札幌でフルリモートの求人は見つかりますか？",
    a: "札幌拠点の企業でもハイブリッドやフルリモートの選択肢が広がっているほか、首都圏企業のフルリモート求人に札幌在住のまま応募する方法もあります。エージェントに『札幌在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。",
  },
  {
    q: "札幌のIT転職におすすめのエージェントは？",
    a: "フルリモートで首都圏案件を狙うならレバテックキャリア、拠点網の広さとスピードを重視するならワークポート、求人量を重視するならdoda、ハイクラスのリモート求人を狙うならビズリーチが候補です。複数併用して提案傾向を比較するのがおすすめです。",
  },
  {
    q: "冬の通勤や生活は転職に影響しますか？",
    a: "冬季は積雪・寒冷の影響があり、出社中心の働き方では通勤への配慮が必要な場面があります。一方、フルリモートやハイブリッドを選べば天候の影響を受けにくくなります。働き方の選択次第で生活のしやすさが変わるため、出社頻度を求人選びの軸に含めるとよいでしょう。",
  },
  {
    q: "札幌から首都圏企業に転職するのは現実的ですか？",
    a: "フルリモート前提であれば現実的な選択肢です。居住地を変えずに首都圏水準の年収・案件を狙えるケースもあります。出社頻度のある求人では航空便での移動コストや時間を見積もる必要があるため、求人ごとの出社要件を早めに確認しましょう。",
  },
];

export default function SapporoAreaPage() {
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
        title="札幌のIT転職事情【2026年】リモート移住と北海道の選択肢"
        description="札幌・北海道のIT・Webエンジニア転職を解説。リモート移住先としての特徴、ニアショア開発、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを紹介します。"
        url="/area/sapporo/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "札幌のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          札幌のIT転職事情【2026年】リモート移住と北海道の選択肢
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 札幌・北海道エリアのIT転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            札幌は、政令指定都市としての利便性と、首都圏より抑えやすい住居費、豊かな自然環境を併せ持つ都市として、リモート移住先の選択肢に挙がりやすい街です。ニアショア開発の拠点が置かれることもあり、首都圏案件を北海道で担う働き方にもつながります。本記事では、公開情報をベースに札幌のIT転職市場の特徴、働き方の選択肢、年代別の年収の考え方、エリア対応エージェントを30代・40代向けに整理します。
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
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：札幌IT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              札幌のIT転職は「リモート移住で生活の質を上げたいエンジニア」と相性の良い市場です。地元のSIer・Web・ニアショア開発の求人に加え、首都圏企業のフルリモート求人を組み合わせることで、年収と暮らしやすさのバランスを取りやすくなります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・都市機能を保ちながら住居費を抑えやすく、移住の魅力がある</li>
              <li>・ニアショア開発を含め、首都圏案件を北海道で担う選択肢がある</li>
              <li>・首都圏フルリモート求人の併用で年収水準の選択肢が広がる</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 市場 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌・北海道のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            札幌のIT市場は、地元密着のSIerやWeb制作・自社開発の企業に加え、首都圏企業のニアショア開発拠点が組み合わさる構造です。北海道の中核都市として人材・教育機関が集まり、首都圏より抑えやすいコストで開発体制を構えられる点が、拠点設置の背景として語られます。経済産業省が2019年3月に公表した「IT人材需給に関する調査」では2030年に最大約79万人のIT人材不足が試算されており、地方拠点でのDX・開発人材の需要は構造的に続くと見られます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">札幌駅・大通エリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                札幌駅から大通にかけてはビジネス機能が集約され、SIerやIT企業の北海道拠点、Web系・自社開発の企業が見られます。都市機能が集中しているため、出社・ハイブリッドいずれの働き方も選びやすいエリアです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">ニアショア・受託開発の層</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                札幌には首都圏企業の開発拠点が置かれることがあり、首都圏案件を札幌で担うニアショア開発につながる場合があります。受託開発やBPO系の業務も一定の層を形成しており、安定した就業環境を重視する人の選択肢になります。具体的な拠点・企業は時期で変わるため、最新状況はエージェントで確認するのが確実です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">求められるスキルの傾向</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Web/SaaS寄りの領域では一般的なWebアプリ開発スタック、クラウド、開発プロセスの経験が、受託・ニアショア寄りでは要件定義から実装まで担える幅広さが評価されやすい傾向です。自分の経験が地元の求人に向くか、首都圏フルリモート求人に向くかを見極めることが、札幌での求人探しの起点になります。
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
            札幌で働くエンジニアの選択肢は、大きく次の3つに整理できます。年収・出社頻度・生活コスト・冬季の通勤事情のどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元企業に出社・ハイブリッドで勤務:</strong> 札幌中心部の都市機能を活かしつつ働ける。地域に根ざしたキャリアを重視する人向け。冬季の通勤負担は出社頻度で調整します。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>ニアショア開発拠点でハイブリッド:</strong> 首都圏案件を札幌で担いながら、月数回の出社・出張で連携する働き方。地方にいながら首都圏の開発に関わりたい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>札幌在住×首都圏企業のフルリモート:</strong> 札幌の生活コストを保ちつつ首都圏水準の年収を狙う選択肢。天候の影響を受けにくいのも利点です。
                <Link href="/area/remote/" className="text-petrol hover:underline">フルリモートIT転職ガイド</Link>
                や
                <Link href="/area/iiju/" className="text-petrol hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            札幌エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。エリア・領域・スキルによって実際の提示額は上下する点に留意してください。
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
                    <td className="px-3 py-3 border border-slate-200 font-bold text-petrol">{row.salary}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、札幌エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            札幌で年収を考えるときは、額面と生活コストのバランスが鍵になります。住居費を抑えやすいエリアでは同じ額面でも可処分所得が増えやすく、首都圏のフルリモート求人を選べば札幌の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            札幌での転職は、フルリモート求人に強いIT特化型と、全国対応の総合型を組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
          </p>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  {i + 1}.{" "}
                  <Link href={a.href} className="hover:underline">
                    {a.name}
                  </Link>
                </h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{a.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各社の対応エリア・求人傾向は時点により変動します。複数社の比較は
            <Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント比較</Link>
            、リモート求人特化の比較は
            <Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート求人に強いエージェント比較</Link>
            を参照してください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・移住の進め方</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "軸を決める", desc: "「地元企業」「ニアショア開発」「首都圏フルリモート」のどれを中心に据えるかを先に決める。提案される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "フルリモートに強いIT特化型と、全国対応の総合型を組み合わせ、ハイクラスを狙うならビズリーチも加える。" },
              { step: "3", title: "出社要件・冬季の通勤を確認", desc: "求人ごとの出社頻度を確認し、移住を伴う場合は冬季の通勤・住居費も含めて試算します。" },
              { step: "4", title: "職務経歴書で強みを言語化", desc: "要件定義から実装まで担える幅広さやリーダー経験など、評価されやすい要素を具体的に示します。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方・天候を含めて総合判断します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。札幌・北海道の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
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
            「慎重に検討したい人」に当てはまっても、札幌在住のまま首都圏のフルリモート求人を選べば、出社・天候の負担を抑えつつ希望の案件に関われる場合があります。出社頻度を求人選びの軸に含めると、北海道での暮らしと両立しやすくなります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            札幌は、30代・40代のミドルエンジニアが「働き方と暮らしの質を見直す」転職先として検討しやすい市場です。フルリモートで首都圏の年収を保つ道も、ニアショア拠点で地に足のついたキャリアを築く道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、フルリモートで首都圏案件を経験するか、ニアショア拠点で上流から担う経験を積むかを意識的に選ぶフェーズ。生活基盤を整えながらキャリアの幅を広げやすい時期です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。ハイクラスのリモート求人で年収を維持しつつ、移住によるQOL向上を両立できる形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>
            、リモート前提の働き方は
            <Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワークの実情</Link>
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
          <h2 className="text-xl font-bold mb-3">札幌×リモートでIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            ニアショア開発から首都圏フルリモートまで。エリア対応のエージェントに相談して、年収と暮らしのバランスが取れる選択肢を見つけましょう。
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
              { name: "仙台のIT転職事情", href: "/area/sendai/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
              { name: "リモート求人に強いエージェント比較", href: "/compare/remote-agents/" },
              { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
