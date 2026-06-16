import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "仙台のIT転職事情【2026年】東北の拠点とリモートの選択肢",
  description:
    "仙台・東北のIT・Webエンジニア転職を解説。東北の中核都市としての特徴、ニアショア開発、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを30代・40代向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：仙台IT転職市場の特徴" },
  { id: "market", label: "仙台・東北のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢（移住×リモート含む）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "仙台エリアに対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "仙台転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "東北の中核都市の安定性と、首都圏へのアクセスの良さを両立したい",
  "ニアショア開発で要件定義から実装まで幅広く担いたい",
  "住居費を抑え、可処分所得やQOLを上げる移住を検討している",
  "新幹線での通勤・出張を許容しつつ首都圏案件に関わりたい",
];

const fitNo = [
  "最先端のWeb/SaaS自社開発の選択肢を最大限に広げたい（首都圏の方が母数が多い）",
  "完全フルリモートのみを希望し、出社・ハイブリッドは考えていない（求人選びで明示が必要）",
  "短期間で大幅な年収アップだけを最優先したい（領域・スキル次第で差が大きい）",
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、フルリモート求人を介して仙台在住のまま首都圏企業を狙う転職と相性が良い。高年収求人比率の高さも特徴とされる。",
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
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、仙台の地元求人から首都圏フルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    point:
      "国内最大級の求人数で、非公開求人が豊富。全国対応のため仙台を含む地方拠点の求人にもアクセスしやすく、大手からスタートアップまで網羅している。",
  },
];

const faqs = [
  {
    q: "仙台のITエンジニアの年収はどのくらいですか？",
    a: "仙台エリア限定の公的平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）では30代で約499万円、40代で約618万円とされています。仙台は住居費を抑えやすいエリアのため、同じ額面でも可処分所得に差が出やすい点を踏まえて考えるのが現実的です。",
  },
  {
    q: "仙台が東北のIT拠点と言われるのはなぜですか？",
    a: "仙台は東北地方の中核都市として人口・企業・教育機関が集積し、大手SIerの支社や開発拠点が置かれることが多い都市です。首都圏へのアクセスも確保しやすく、ニアショア開発の拠点として機能する場合もあります。具体的な企業数・求人数は時期で変わるため、最新状況はエージェントで確認するのが確実です。",
  },
  {
    q: "仙台のニアショア開発とは何ですか？",
    a: "首都圏の企業が開発業務の一部を地方拠点で担う体制を一般にニアショア開発と呼びます。仙台は新幹線で首都圏とつながりやすく、こうした拠点が置かれることがあります。首都圏案件を仙台で担当する働き方につながる場合があり、地方にいながら首都圏の開発に関わりたい人の選択肢になります。",
  },
  {
    q: "仙台でフルリモートの求人は見つかりますか？",
    a: "仙台拠点の企業でもハイブリッドやフルリモートの選択肢が広がっているほか、首都圏企業のフルリモート求人に仙台在住のまま応募する方法もあります。エージェントに『仙台在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。",
  },
  {
    q: "仙台のIT転職におすすめのエージェントは？",
    a: "フルリモートで首都圏案件を狙うならレバテックキャリア、拠点網の広さとスピードを重視するならワークポート、求人量を重視するならdodaやリクルートエージェントITが候補です。複数併用して提案傾向を比較するのがおすすめです。",
  },
  {
    q: "仙台から首都圏企業に転職するのは現実的ですか？",
    a: "フルリモート前提であれば現実的な選択肢です。仙台は東北新幹線で首都圏とのアクセスが良く、出社頻度のある求人でも移動の負担を抑えやすい立地です。求人ごとの出社要件を早めに確認し、生活設計と両立できるかを軸に判断するのがおすすめです。",
  },
  {
    q: "仙台のIT企業の特徴は何ですか？",
    a: "大手SIerの支社や受託開発企業が一定の層を形成し、地元密着のWeb制作・自社開発の企業も見られます。ニアショア開発の拠点として首都圏案件を担うケースもあり、安定した就業環境を重視する人から、開発寄りのキャリアを志向する人まで、幅広い選択肢があります。",
  },
];

export default function SendaiAreaPage() {
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
        title="仙台のIT転職事情【2026年】東北の拠点とリモートの選択肢"
        description="仙台・東北のIT・Webエンジニア転職を解説。東北の中核都市としての特徴、ニアショア開発、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを紹介します。"
        url="/area/sendai/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "仙台のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          仙台のIT転職事情【2026年】東北の拠点とリモートの選択肢
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 仙台・東北エリアのIT転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            仙台は東北地方の中核都市として、大手SIerの支社や開発拠点が集まりやすい街です。東北新幹線で首都圏とのアクセスが良く、ニアショア開発の拠点として首都圏案件を担う働き方にもつながります。本記事では、公開情報をベースに仙台のIT転職市場の特徴、働き方の選択肢、年代別の年収の考え方、エリア対応エージェントを30代・40代向けに整理します。
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：仙台IT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              仙台のIT転職は「東北の中核都市の安定性」と「首都圏へのアクセスの良さ」を両立できる市場です。地元のSIer・受託・ニアショア開発の求人に加え、首都圏企業のフルリモート求人を組み合わせることで、年収と暮らしやすさのバランスを取りやすくなります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・東北の中核都市として大手SIerの拠点が集まりやすい</li>
              <li>・新幹線でのアクセスを活かしたニアショア開発・ハイブリッドの選択肢がある</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台・東北のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            仙台のIT市場は、大手SIerの支社や受託開発企業に加え、地元密着のWeb制作・自社開発、そして首都圏企業のニアショア開発拠点が組み合わさる構造です。東北の中核都市として人材・教育機関が集まり、新幹線で首都圏と結ばれていることが、拠点設置の背景として語られます。経済産業省が2019年3月に公表した「IT人材需給に関する調査」では2030年に最大約79万人のIT人材不足が試算されており、地方拠点でのDX・開発人材の需要は構造的に続くと見られます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">仙台駅・一番町エリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                仙台駅周辺から一番町にかけてはビジネス機能が集約され、大手SIerの東北拠点やIT企業、Web系・自社開発の企業が見られます。都市機能が集中しているため、出社・ハイブリッドいずれの働き方も選びやすいエリアです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">ニアショア・受託開発の層</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                仙台は新幹線で首都圏とつながりやすく、首都圏企業の開発拠点が置かれることがあります。首都圏案件を仙台で担うニアショア開発につながる場合があり、受託開発やBPO系の業務も一定の層を形成しています。安定した就業環境を重視する人の選択肢になります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">求められるスキルの傾向</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                受託・ニアショア寄りの領域では要件定義から実装まで担える幅広さが、Web/SaaS寄りでは一般的なWebアプリ開発スタックやクラウド、開発プロセスの経験が評価されやすい傾向です。自分の経験が地元の求人に向くか、首都圏フルリモート求人に向くかを見極めることが、仙台での求人探しの起点になります。
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
            仙台で働くエンジニアの選択肢は、大きく次の3つに整理できます。年収・出社頻度・生活コスト・首都圏とのアクセスのどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元企業に出社・ハイブリッドで勤務:</strong> 仙台中心部の都市機能を活かしつつ、通勤負担を抑えて働ける。地域に根ざしたキャリアを重視する人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>ニアショア開発拠点でハイブリッド:</strong> 首都圏案件を仙台で担いながら、新幹線での移動を活かして月数回出社する働き方。地方にいながら首都圏の開発に関わりたい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>仙台在住×首都圏企業のフルリモート:</strong> 仙台の生活コストを保ちつつ首都圏水準の年収を狙う選択肢。
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
            仙台エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。エリア・領域・スキルによって実際の提示額は上下する点に留意してください。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、仙台エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            仙台で年収を考えるときは、額面と生活コストのバランスが鍵になります。住居費を抑えやすいエリアでは同じ額面でも可処分所得が増えやすく、首都圏のフルリモート求人を選べば仙台の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            仙台での転職は、フルリモート求人に強いIT特化型と、全国対応の総合型を組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
              { step: "2", title: "エージェントを2〜3社登録", desc: "フルリモートに強いIT特化型と、全国対応の総合型を組み合わせて提案傾向を比較します。" },
              { step: "3", title: "出社要件・アクセスを確認", desc: "求人ごとの出社頻度を確認し、新幹線での通勤・出張の負担や、移住を伴う場合の住居費を試算します。" },
              { step: "4", title: "職務経歴書で強みを言語化", desc: "要件定義から実装まで担える幅広さやリーダー経験など、評価されやすい要素を具体的に示します。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方・アクセスを含めて総合判断します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。仙台・東北の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
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
            「慎重に検討したい人」に当てはまっても、仙台在住のまま首都圏のフルリモート求人を狙えば、希望と地域を両立できる場合があります。地元志向か首都圏志向か、出社かフルリモートかを面談で言語化しておくと、提案のミスマッチを防げます。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            仙台は、30代・40代のミドルエンジニアが「安定性とアクセスの良さ」を両立しながらキャリアを考えやすい市場です。フルリモートで首都圏の年収を保つ道も、ニアショア拠点で上流から担う道も選べます。
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
                マネジメントや高度専門など役割で評価される段階。地元企業の安定性とリモートでの選択肢拡大を天秤にかけ、生活設計と両立する形を選ぶのが現実的です。
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
          <h2 className="text-xl font-bold mb-3">仙台のIT転職を進めよう</h2>
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
              { name: "札幌のIT転職事情", href: "/area/sapporo/" },
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
