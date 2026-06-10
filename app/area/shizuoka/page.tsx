import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "静岡のIT転職事情【2026年】リモート活用と東京通勤圏の両立",
  description:
    "静岡市・静岡県中部のITエンジニア転職を30代・40代向けに解説。模型・ものづくりなど地場産業の特徴、新幹線による東京通勤圏×首都圏フルリモートという選択肢、静岡県の移住支援金、年収の考え方、対応エージェントを公開情報をもとに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：静岡のIT転職市場の特徴" },
  { id: "market", label: "静岡のIT・産業の集積と現実" },
  { id: "workstyle", label: "働き方の選択肢（リモート×新幹線通勤）" },
  { id: "iju", label: "移住支援制度（UIターンを使う）" },
  { id: "salary", label: "年収の考え方（地方転職で下がる場合も）" },
  { id: "agents", label: "静岡に対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "静岡転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const fitYes = [
  "首都圏のフルリモート求人で年収を保ちつつ、静岡で暮らしたい",
  "東海道新幹線を使い、東京への通勤・出社も視野に入れたい",
  "温暖な気候と都市機能を保ちつつ住居費を抑えたい",
  "模型・ものづくり・食品など事業会社の社内IT・DXに関わりたい",
];

const fitNo = [
  "毎日通える範囲で求人の母数を最大化したい（公開求人は首都圏比で限定的）",
  "最先端Web/SaaS自社開発の選択肢を最大限に広げたい（首都圏の方が母数が多い）",
  "短期間で大幅な年収アップだけを最優先したい（地方は額面が下がる場合もある）",
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、首都圏のフルリモート求人を介して静岡在住のまま応募する転職と相性が良い。高年収求人比率の高さも特徴とされる。",
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
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、静岡の地元求人から首都圏フルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    point:
      "ハイクラス・スカウト型。年収750万円以上の求人やフルリモート対応のシニア・管理職ポジションを、静岡在住のまま探したい人に向く。市場価値を客観的に把握しやすい。",
  },
];

const faqs = [
  {
    q: "静岡にはITエンジニアの求人はどのくらいありますか？",
    a: "公開求人は首都圏に比べて限定的というのが正直なところです。静岡市・県中部には地場のSIer・受託開発や、模型・食品・製造業など事業会社の社内IT求人が一定数あります。ただし件数の断定は避けるべき性質のもので、実数は時期で変動します。静岡は東海道新幹線で東京・名古屋双方にアクセスしやすいため、首都圏フルリモートや東京通勤も含めて母数を広げるのが現実的です。最新の求人状況は地方在住の相談に対応するエージェントで確認しましょう。",
  },
  {
    q: "静岡に転職すると年収は下がりますか？",
    a: "地場企業への転職では、首都圏水準より額面が下がるケースもあります。一方で住居費など生活コストを抑えやすいため、可処分所得で見ると必ずしも生活が苦しくなるとは限りません。年収を保ちたい場合は、静岡に住みながら首都圏企業のフルリモート求人を選ぶか、新幹線通勤圏として東京の求人を狙うことで、都市部水準の額面を狙える可能性があります。",
  },
  {
    q: "静岡にはどんなIT・産業の集積がありますか？",
    a: "静岡市・県中部は、地場のSIer・受託開発に加え、模型・ホビー産業（タミヤ、ハセガワ、アオシマなど静岡県は国内プラモデル出荷額の大半を占めるとされます）や、食品・製造業など多様な産業の集積があります。こうした事業会社の社内システムやDX推進に関わる求人につながる場合があります。特定企業の求人数を断定することは避けますが、地元に根ざしたキャリアを築きたい人には選択肢があります。",
  },
  {
    q: "静岡へのUIターンに使える移住支援制度はありますか？",
    a: "静岡県・市町村が共同で実施する移住支援金制度があります。これは内閣府の「地方創生移住支援事業」を静岡県が運用するもので、東京圏（埼玉・千葉・東京・神奈川）から移住して就業・テレワーク・起業等を行う方が対象です。世帯移住で原則100万円、18歳未満の世帯員1人につき加算がある枠組みです（金額・要件は年度・市町村で変わるため、必ず静岡県・静岡市の公式情報で最新条件を確認してください）。出典：静岡県公式サイト・内閣府 地方創生移住支援事業の概要。",
  },
  {
    q: "静岡から東京の企業に通勤・転職するのは現実的ですか？",
    a: "静岡駅からは東海道新幹線で東京へのアクセスがよく、週数回出社のハイブリッド求人なら新幹線通勤を選ぶ人もいます。フルリモート前提なら居住地を変えずに首都圏企業の選考を受けられます。ただし新幹線通勤は交通費が高額になりやすいため、出社頻度と通勤手当の上限を求人ごとに確認することが大切です。",
  },
  {
    q: "静岡のIT転職におすすめのエージェントは？",
    a: "フルリモートで首都圏案件を狙うならレバテックキャリア、拠点網の広さとスピードを重視するならワークポート、求人量を重視するならdoda、ハイクラスのリモート求人を狙うならビズリーチが候補です。地方は1社では求人が偏りやすいため、複数併用して提案傾向を比較するのがおすすめです。",
  },
  {
    q: "30代・40代でも静岡で転職先は見つかりますか？",
    a: "見つかる可能性はありますが、地場の公開求人は限られるため、首都圏フルリモートや東京通勤圏の求人との併用が現実的です。経済産業省が2019年3月に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は構造的に続くと見られます。要件定義・マネジメント・特定領域の専門性は地方でもリモートでも評価されやすい強みです。",
  },
];

const related = [
  { name: "浜松のIT転職事情", href: "/area/hamamatsu/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
  { name: "UターンしやすいIT求人の探し方", href: "/purpose/uturnable/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "転職で年収が下がるケース", href: "/knowledge/salary-down/" },
];

export default function ShizuokaAreaPage() {
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
        title="静岡のIT転職事情【2026年】リモート活用と東京通勤圏の両立"
        description="静岡市・静岡県中部のITエンジニア転職を30代・40代向けに解説。地場産業の特徴、新幹線通勤圏×首都圏フルリモートという選択肢、移住支援金、年収の考え方、対応エージェントを整理します。"
        url="/area/shizuoka/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "静岡のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          静岡のIT転職事情【2026年】リモート活用と東京通勤圏の両立
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 静岡市・静岡県中部エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            静岡市・静岡県中部は、温暖な気候と都市機能を併せ持ち、東海道新幹線で東京・名古屋双方にアクセスしやすいエリアです。ただしITエンジニアの公開求人数は、正直に言えば首都圏に比べて限定的です。本記事では、模型・ものづくりなど地場産業の現実を踏まえつつ、首都圏フルリモートや新幹線通勤圏という現実的な選択肢、UIターンに使える公的な移住支援制度、地方転職での年収の考え方を、公開情報をもとに30代・40代向けに整理します。求人件数や平均年収を架空に断定することはせず、定性的な傾向と確かな出典に絞ってお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年・全国）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "静岡県 移住支援金制度 公式サイト",
            "内閣府 地方創生移住支援事業の概要",
            "静岡市「ホビーのまち静岡」推進事業ほか公開情報",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：静岡のIT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              静岡のIT転職は、「地場企業に通勤で勤める」「首都圏フルリモート求人を活用する」「新幹線通勤圏として東京の求人を狙う」の三択を軸に考えると整理しやすい市場です。公開求人は首都圏比で限定的なため、リモートや新幹線通勤の活用が現実的な選択肢になります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・地場のIT公開求人は<strong>首都圏比で限定的</strong>。母数を求めるならリモート併用が現実的。</li>
              <li>・東海道新幹線で<strong>東京通勤圏としての選択肢</strong>もあり、首都圏求人を狙いやすい。</li>
              <li>・UIターンには<strong>静岡県の移住支援金</strong>（公的制度）が使える場合がある。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">静岡のIT・産業の集積と現実</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず正直にお伝えすると、静岡のITエンジニアの公開求人は、首都圏に比べて限定的です。求人件数や平均年収を断定的な数値で示すことは、この記事ではしません。一方で、地域の産業構造を理解しておくと、どんな求人に出会いやすいかの解像度は上がります。静岡市・県中部は、模型・ホビー産業（静岡県は国内プラモデル出荷額の大半を占めるとされ、タミヤ・ハセガワ・アオシマなどが集積）をはじめ、食品・製造業まで産業の裾野が広く、事業会社のDX需要が生まれやすい土地柄です。経済産業省が2019年3月に公表した「IT人材需給に関する調査」では2030年に最大約79万人のIT人材不足が試算されており、地方でもDX人材の需要は構造的に続くと見られます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">地場のSIer・受託開発</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                静岡市内には地域の企業・行政等にシステムを提供する地場IT企業が存在します。要件定義から実装・運用まで幅広く担う働き方が多く、特定領域の深さより「広く対応できる」経験が評価されやすい傾向があります。地域に根ざしたキャリアを築きたい人の受け皿になります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">模型・ものづくり・食品など事業会社のIT・DX</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                静岡県は模型・ホビー、食品、製造業など多様な産業の集積があり、こうした事業会社の社内IT部門や生産管理システム、DX推進に関わる求人につながる場合があります。事業会社側で腰を据えて働きたい人に向く選択肢です。具体的な求人数・企業名は時期で変わるため、最新状況はエージェントで確認するのが確実です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">首都圏フルリモート・東京通勤圏という母数</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                地場の公開求人が限られるぶん、静岡在住のまま首都圏企業のフルリモート求人に応募する、あるいは新幹線通勤圏として東京の求人を狙う選択肢が現実的です。静岡は東京・名古屋双方にアクセスしやすく、母数の広げ方に幅があるのが強みです。「静岡に住む」ことと「どの企業で働くか」を切り離して考えるのが基本戦略です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数や、エリアの平均年収の断定は避けています。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（リモート×新幹線通勤）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            静岡で働くエンジニアの選択肢は、大きく次の3つに整理できます。求人の母数・年収・通勤負担のどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地場企業に出社・ハイブリッドで勤務:</strong> 地域に根ざしたキャリアを重視する人向け。求人の母数は限られるが、要件定義から運用まで幅広く担える経験を積みやすい。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>静岡在住×首都圏企業のフルリモート:</strong> 静岡の生活コストを保ちつつ首都圏水準の年収・案件を狙う選択肢。求人の母数を最も広げやすい。
                <Link href="/area/remote/" className="text-blue-600 hover:underline">フルリモートIT転職ガイド</Link>
                も参考になります。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>新幹線通勤圏として東京の求人を狙う:</strong> 週数回出社のハイブリッド求人を新幹線通勤でこなす選択肢。交通費が高額になりやすいため、出社頻度と通勤手当の上限を確認することが前提です。UIターン移住なら
                <Link href="/area/iiju/" className="text-blue-600 hover:underline">地方移住×IT転職ガイド</Link>
                も参照を。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移住支援制度（UIターンを使う）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            首都圏から静岡へのUIターンを考えるなら、公的な移住支援制度の活用を検討しましょう。以下は調査時点（2026年6月）の公開情報に基づく概要です。金額・要件は年度・市町村で変わるため、申請前に必ず静岡県・静岡市の公式サイトで最新条件を確認してください。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">静岡県の移住支援金</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                静岡県と県内市町村が共同で実施する制度。東京圏（埼玉・千葉・東京・神奈川）から静岡県内へ移住し、就業・テレワーク・起業等を行う方が対象です。世帯移住で原則100万円、18歳未満の世帯員1人につき加算がある枠組みです（単身は金額が異なります）。市町村ごとに上乗せや独自要件がある場合があります。出典：静岡県公式サイト。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">国の地方創生移住支援事業（共通の枠組み）</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                上記は、内閣府が示す全国共通の「地方創生移住支援事業」を静岡県が運用するものです。移住直前の在住・通勤要件（東京23区在住、または東京圏在住で23区へ通勤など）や、対象求人への就業・テレワーク継続といった条件があります。起業支援金との併用枠もあります。出典：内閣府 地方創生移住支援事業の概要。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 制度の有無・金額・要件は年度や予算で変動します。本記事は調査時点の概要であり、申請可否の保証ではありません。必ず静岡県・静岡市・内閣府の公式情報で最新の条件をご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（地方転職で下がる場合も）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            静岡エリア固有の平均年収を断定できる公的データは限られます。地場企業への転職では首都圏水準より額面が下がるケースもあるのが現実です。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。エリア・領域・スキルによって実際の提示額は上下する点に留意してください。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。全国の値で、静岡エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            静岡で年収を考えるときは、額面と生活コストのバランスが鍵になります。住居費を抑えやすいエリアでは同じ額面でも可処分所得が増えやすく、首都圏のフルリモート求人を選べば静岡の生活コストのまま高めの額面を狙える可能性もあります。地方転職で額面が下がる場合の考え方は
            <Link href="/knowledge/salary-down/" className="text-blue-600 hover:underline">転職で年収が下がるケース</Link>
            、年代別の戦略は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">静岡に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            地方の転職は、フルリモート求人に強いIT特化型と、全国対応の総合型を組み合わせるのが基本戦略です。地場の公開求人が限られるため、1社だけでは求人が偏りやすく、複数併用が特に有効です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
              { step: "1", title: "軸を決める", desc: "「地場企業」「首都圏フルリモート」「新幹線通勤で東京求人」のどれを中心に据えるかを先に決める。提案される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "フルリモートに強いIT特化型と、全国対応の総合型を組み合わせ、ハイクラスを狙うならビズリーチも加える。地方は1社では母数が偏るため複数併用が有効。" },
              { step: "3", title: "移住支援制度・通勤条件を確認", desc: "UIターンを伴う場合は静岡県・静岡市の移住支援金を確認。新幹線通勤を考えるなら出社頻度と通勤手当の上限を求人ごとに確認します。" },
              { step: "4", title: "職務経歴書で強みを言語化", desc: "要件定義から実装・運用まで担える幅広さやリーダー経験など、地方・リモート双方で評価されやすい要素を具体的に示します。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方・通勤コストを含めて総合判断します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">静岡転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。静岡の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
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
            「慎重に検討したい人」に当てはまっても、静岡在住のまま首都圏のフルリモート求人を選べば、求人の母数と年収水準を確保しつつ静岡での暮らしを両立できる場合があります。求人の母数を求めるなら、居住地と勤務先を切り離して考えるのが現実的です。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            静岡は、30代・40代のミドルエンジニアが「働き方と暮らしの質を見直す」転職先として検討しやすいエリアです。地場の公開求人は限られますが、フルリモートで首都圏の年収を保つ道も、新幹線通勤で東京の求人を狙う道も、UIターンで地に足のついたキャリアを築く道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、フルリモートで首都圏案件を続けるか、地場企業で上流から幅広く担う経験を積むかを意識的に選ぶフェーズ。生活基盤を整えながらキャリアの幅を広げやすい時期です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。ハイクラスのリモート求人で年収を維持しつつ、UIターンによるQOL向上を両立できる形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            、リモート前提の働き方は
            <Link href="/knowledge/remote-work/" className="text-blue-600 hover:underline">リモートワークの実情</Link>
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
          <h2 className="text-xl font-bold mb-3">静岡×リモートでIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地場求人は限られても、首都圏フルリモートや新幹線通勤圏の求人を組み合わせれば選択肢は広がります。エリア対応のエージェントに相談して、年収と暮らしのバランスが取れる選択肢を見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
