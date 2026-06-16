import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "名古屋のIT転職事情【2026年】製造業DXとエンジニアの選択肢",
  description:
    "名古屋・愛知のIT・Webエンジニア転職を解説。自動車産業を核とした製造DXの集積、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを30代・40代向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：名古屋IT転職市場の特徴" },
  { id: "market", label: "名古屋・愛知のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢（地方×リモート含む）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "名古屋エリアに対応するエージェント" },
  { id: "howto", label: "転職活動の進め方" },
  { id: "fit", label: "名古屋転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const fitYes = [
  "製造業・自動車関連のドメイン知識やものづくりの現場経験を活かしたい",
  "組み込み・車載・IoT・製造ラインのDXなど、ハードに近い領域に関心がある",
  "首都圏より通勤負担を抑え、地域に根ざした働き方をしたい",
  "額面年収と生活コストのバランス（可処分所得）を重視している",
];

const fitNo = [
  "最先端のWeb/SaaS自社開発の選択肢を最大限に広げたい（首都圏やフルリモートの方が母数が多い）",
  "完全フルリモートのみを希望し、地元企業の出社・ハイブリッドは考えていない",
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
      "IT/Web特化型。利用者の多くが20〜30代で、技術理解の高いアドバイザーが特徴。首都圏中心とされるが、フルリモート求人を介して名古屋在住でも選択肢を広げやすい。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "パーソルキャリアが運営する全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、地方の製造業系IT求人にも当たりやすい。求人量の多さが強み。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    point:
      "国内最大級の求人数。非公開求人が豊富で、大手からスタートアップまで網羅。全国対応のため、名古屋を含む地方拠点の求人にもアクセスしやすい。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。IT・ゲーム領域に強く、レスポンスの速さに定評。地方在住からの転職相談にも対応しやすい体制。",
  },
];

const faqs = [
  {
    q: "名古屋のITエンジニアの年収はどのくらいですか？",
    a: "公的・公表データとして、レバテックが公表する正社員SEの年代別平均年収（2025年）では、30代で約499万円、40代で約618万円とされています（career.levtech.jp等ガイド記事）。これは全国の値であり、名古屋特有の集計値ではありません。名古屋は製造業の業務知識を持つエンジニアが評価されやすい傾向があり、領域やスキルによって差が大きい点に注意してください。",
  },
  {
    q: "名古屋でIT企業が多いのはどのエリアですか？",
    a: "一般に名古屋駅周辺（名駅エリア）に大手SIerやITベンダーの拠点が集まり、伏見・栄エリアにはWeb系企業が見られます。愛知県内では豊田市・刈谷市・安城市など、自動車関連メーカーの集積地に組み込み・車載ソフトウェア開発の拠点が多い傾向です。具体的な企業数・求人数は媒体や時点で変動するため、各エージェントで最新状況を確認するのが確実です。",
  },
  {
    q: "トヨタは愛知の企業ですよね。関連の開発に携われますか？",
    a: "トヨタ自動車は愛知県に本社を置くことで広く知られています。グループ各社や周辺のサプライヤーを含め、車載ソフトウェア・コネクテッド・製造ラインのDXなど幅広い開発領域があります。採用方針や具体的な職種・年収は時期により変わるため、企業個別の情報は公式採用ページや、当サイトの企業解説（トヨタの転職難易度・採用の特徴）も参考にしてください。",
  },
  {
    q: "名古屋でフルリモートの求人は見つかりますか？",
    a: "製造業はセキュリティ要件から出社中心の職場も少なくありませんが、Web系・SaaS系を中心にハイブリッドやフルリモートの選択肢も広がっています。加えて、首都圏企業のフルリモート求人に名古屋在住のまま応募する方法もあります。エージェントに『名古屋在住・リモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。",
  },
  {
    q: "製造業の知識がないとIT転職で不利ですか？",
    a: "不利とは限りませんが、名古屋・愛知では製造現場やサプライチェーンの業務知識とITスキルの掛け合わせが評価されやすい土地柄です。Web/SaaS領域であれば業界知識より技術スタックや開発プロセスの経験が重視されます。自分の強みがどの領域で活きるかを、エージェントとの面談で整理するとよいでしょう。",
  },
  {
    q: "名古屋から東京の企業に転職するのは現実的ですか？",
    a: "フルリモート前提であれば現実的な選択肢です。居住地を変えずに首都圏水準の年収を狙えるケースもあります。一方で出社頻度のある求人は通勤・移住の検討が必要です。求人ごとの出社要件を早めに確認し、生活設計と両立できるかを軸に判断するのがおすすめです。",
  },
  {
    q: "名古屋のIT転職におすすめのエージェントは？",
    a: "IT特化で技術理解を重視するならレバテックキャリア、全国の求人量を重視するならdodaやリクルートエージェントIT、拠点網の広さとスピードを重視するならワークポートが候補です。複数社を併用し、提案される求人の傾向を比べると、自分に合うエリア・働き方が見極めやすくなります。",
  },
];

export default function NagoyaAreaPage() {
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
        title="名古屋のIT転職事情【2026年】製造業DXとエンジニアの選択肢"
        description="名古屋・愛知のIT・Webエンジニア転職を解説。自動車産業を核とした製造DXの集積、働き方の選択肢、年代別年収の考え方、エリア対応エージェントを紹介します。"
        url="/area/nagoya/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "名古屋のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          名古屋のIT転職事情【2026年】製造業DXとエンジニアの選択肢
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 名古屋・愛知エリアのIT転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            名古屋・愛知は自動車を中心とした製造業の集積地として知られ、近年はその製造業のDX需要を背景にITエンジニアの活躍領域が広がっています。本記事では、公開情報をベースに名古屋エリアのIT転職市場の特徴、働き方の選択肢、年代別の年収の考え方、エリア対応のエージェントを30代・40代エンジニア向けに整理します。
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：名古屋IT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              名古屋・愛知のIT転職は「製造業の業務ドメイン × ITスキル」の掛け合わせが評価されやすいのが最大の特徴です。組み込み・車載・製造ラインのDXなど、ものづくりに近い領域の求人が他エリアより厚い傾向があります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・自動車産業を核とした製造DX領域に独自の求人層がある</li>
              <li>・Web/SaaS領域に絞るなら、首都圏のフルリモート求人も有力な選択肢</li>
              <li>・全国対応エージェント＋IT特化エージェントの併用で選択肢を最大化できる</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">名古屋・愛知のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋・愛知のIT市場を理解するうえで欠かせないのが、製造業との近さです。自動車をはじめとするものづくり産業が地域経済の中心にあり、その業務効率化・自動化・データ活用のニーズがITエンジニアの仕事を生み出しています。経済産業省が2019年3月に公表した「IT人材需給に関する調査」では、2030年に最大約79万人のIT人材不足が試算されており、製造業の集積地である愛知でもDX人材の需要は構造的に続くと見られます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">名駅・伏見・栄エリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                名古屋駅周辺は大手SIerやITベンダーの拠点が集まるビジネス中心地で、再開発によりオフィス需要が高まっているエリアとして知られます。伏見・栄エリアにはWeb系企業や受託・自社開発の企業が見られ、コワーキングスペースを拠点とする小規模チームも増えています。業務系システム、社内DX、Webサービス開発など、領域は幅広いのが特徴です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">豊田市・刈谷市・安城市エリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                自動車メーカーやサプライヤーが集積するこのエリアは、組み込みシステム、車載ソフトウェア、製造ラインのDXといった、ものづくりに直結する開発が多い土地柄です。トヨタ自動車が愛知県に本社を置くことは広く知られており、グループや周辺企業を含めた開発領域の裾野は広いといえます。企業ごとの採用方針や職種は時期で変わるため、個別企業の情報は
                <Link href="/company/toyota/" className="text-petrol hover:underline">トヨタの転職・採用解説</Link>
                などもあわせて確認してください。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">求められるスキルの傾向</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                製造・車載寄りの領域ではC/C++や組み込み、IoT、データ基盤、クラウド（AWS/Azure/GCP）などが、Web/SaaS寄りの領域では一般的なWebアプリ開発スタックや開発プロセスの経験が評価されやすい傾向です。自分の経験がどちらの領域に近いかを見極めることが、エリア内での求人探しの起点になります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（地方×リモート含む）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋で働くエンジニアの選択肢は、大きく次の3つに整理できます。自分の希望する出社頻度・通勤負担・年収水準に合わせて、どのパターンを軸にするかを決めると、求人探しがぶれにくくなります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元企業に出社・ハイブリッドで勤務:</strong> 製造業系や地元SIerは出社中心の職場も多い一方、通勤負担が首都圏より軽いのが利点。地域に根ざした働き方を重視する人に向きます。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>名古屋拠点のWeb/SaaS企業でハイブリッド:</strong> 自社開発やWebサービス系では、週数回出社のハイブリッドが広がっています。地元での人的ネットワークを保ちつつ、開発寄りのキャリアを積みたい人向け。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>名古屋在住×首都圏企業のフルリモート:</strong> 居住地を変えずに首都圏水準の年収・案件を狙える選択肢。
                <Link href="/area/remote/" className="text-petrol hover:underline">フルリモートIT転職ガイド</Link>
                もあわせて検討する価値があります。
              </p>
            </div>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年）を参考値として示します。これは全国の集計値であり、エリア・領域・スキルによって実際の提示額は上下します。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、名古屋エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            名古屋で年収を考える際は、額面だけでなく生活コストとのバランスを見るのが現実的です。住居費が首都圏より抑えやすいエリアでは、同じ額面でも可処分所得に差が出ます。逆に首都圏のフルリモート求人を選べば、名古屋の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">名古屋エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋での転職では、全国対応の総合型と、技術理解の高いIT特化型を組み合わせるのが基本戦略です。とくにワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
            を参照してください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "軸を決める", desc: "「製造DX寄り」「Web/SaaS寄り」「リモート前提」のどれを中心に据えるかを最初に決める。これで紹介される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "IT特化型と全国対応の総合型を組み合わせ、提案傾向を比較する。地方在住なら拠点網の広いサービスを1社入れておくと安心です。" },
              { step: "3", title: "出社要件を早期に確認", desc: "求人ごとの出社頻度・勤務地を面談初期で確認。移住・通勤の可否を生活設計と照らし合わせます。" },
              { step: "4", title: "職務経歴書で強みを言語化", desc: "製造ドメイン知識やリーダー経験など、名古屋市場で評価されやすい要素を具体的なエピソードで示します。" },
              { step: "5", title: "比較して意思決定", desc: "複数の内定・提案を比べ、額面だけでなく働き方・生活コストを含めて総合判断します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">名古屋転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。名古屋・愛知の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
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
            「慎重に検討したい人」に当てはまっても、名古屋在住のまま首都圏のフルリモート求人を狙えば、希望と地域を両立できる場合があります。地元志向とリモート志向のどちらを軸にするかを、エージェントとの面談で言語化しておくとミスマッチを防げます。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋・愛知の市場は、30代・40代のミドルエンジニアにとって、これまでの業務経験を活かしやすい土地柄です。製造業のドメイン知識やプロジェクトをまとめた経験は、若手にはない差別化要素になります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の幅を広げつつ、リーダー・設計の経験を積み上げるフェーズ。製造DX領域でドメイン知識を深めるか、Web/SaaSで技術の市場価値を高めるか、方向性を意識して選ぶと年収も伸ばしやすくなります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門、業務とITの橋渡し役など、役割で評価される段階。地元企業の安定性と、リモートでの選択肢拡大の両方を天秤にかけ、生活設計と両立する形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>
            、自分の市場価値の測り方は
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の見極め方</Link>
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
          <h2 className="text-xl font-bold mb-3">名古屋のIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            製造DXからWeb/SaaS、フルリモートまで。エリア対応のエージェントに相談して、自分に合う働き方の選択肢を広げましょう。
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
              { name: "トヨタの転職・採用解説", href: "/company/toyota/" },
              { name: "大阪のIT転職事情", href: "/area/osaka/" },
              { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "市場価値の見極め方", href: "/knowledge/market-value/" },
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
