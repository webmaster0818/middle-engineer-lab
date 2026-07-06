import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/area/saitama/" },
  title: "埼玉のIT転職事情【2026年】ベッドタウン×リモートの働き方",
  description:
    "埼玉のITエンジニア転職を30代・40代向けに解説。大宮・さいたま新都心などのエリア特徴、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：埼玉のIT転職市場の特徴" },
  { id: "areas", label: "埼玉のIT企業集積とエリア特徴" },
  { id: "workstyle", label: "働き方の選択肢（通勤圏・リモート併用）" },
  { id: "fit", label: "埼玉での転職が向いている人・向いていない人" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "埼玉に対応するエージェント" },
  { id: "combo", label: "エージェントの併用パターン" },
  { id: "process", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const areas = [
  {
    name: "大宮エリア",
    type: "SIer・大手系・通信",
    feature:
      "東北・上越・北陸新幹線が停車する交通結節点で、SIerや大手企業の開発拠点が分布します。広域へのアクセスの良さから、首都圏北部の拠点として位置づける企業が見られます。",
  },
  {
    name: "さいたま新都心エリア",
    type: "官公庁系IT・大規模オフィス",
    feature:
      "国の機関の地方拠点が集まる地区で、官公庁系のシステム関連や大規模オフィスの需要があります。計画的に整備された街並みで、安定性を重視する層に向いた環境です。",
  },
  {
    name: "川口・蕨エリア",
    type: "中小IT・Web制作・リモート拠点",
    feature:
      "東京に隣接し都心へのアクセスが良いエリア。家賃水準を抑えつつ都心に近いことから、小規模IT企業やリモート中心で働くエンジニアの居住地として選ばれやすい傾向があります。",
  },
  {
    name: "川越エリア",
    type: "製造系IT・物流系DX",
    feature:
      "県西部の中核都市で、製造業や物流のDX推進に伴うIT需要が見込まれます。生活環境と職場の両立を図りたい層に向いたエリアです。",
  },
  {
    name: "所沢・入間エリア",
    type: "開発拠点・組込み・テスト",
    feature:
      "西武線沿線にIT関連の拠点が点在します。都心と比べてコストを抑えた開発拠点として位置づけられるケースがあります。",
  },
];

const faqs = [
  {
    q: "埼玉はITエンジニア転職に向いていますか？",
    a: "埼玉県内で完結する求人の総量は東京に及びませんが、東京への通勤圏でありリモート併用の選択肢が広い点が最大の強みです。大宮・さいたま新都心などにSIerや官公庁系の拠点があり、ここに東京企業のリモート求人を組み合わせれば選択肢は大きく広がります。生活コストを抑えたい層に向いたエリアです。",
  },
  {
    q: "埼玉在住で東京の企業にリモート勤務できますか？",
    a: "可能なケースが多いエリアです。大宮から東京都心までのアクセスが良く、フルリモートやハイブリッドの東京企業に勤めながら埼玉に住む選択肢を取りやすいのが特徴です。生活費を抑えつつ首都圏の求人にアクセスできる点がメリットになります。出社頻度の運用は企業差が大きいため、面談で確認しましょう。",
  },
  {
    q: "埼玉のITエンジニアの年収はどのくらいですか？",
    a: "エリア単位の確定した平均値の断定は避けます。参考として、レバテックが公表する正社員SEの年代別平均年収は20代約378万円・30代約499万円・40代約618万円・50代約685万円（2025年・全国ベース）です。東京企業にリモート勤務する場合は東京水準の提示を受けられる可能性があり、埼玉の生活コストで首都圏水準の年収を得る組み合わせも狙えます。",
  },
  {
    q: "埼玉でIT転職するメリットは何ですか？",
    a: "東京への通勤圏でありながら、住宅・生活コストを抑えやすい点が大きなメリットです。リモートワークと組み合わせれば、首都圏の求人にアクセスしつつ通勤負担を減らせます。家族の生活拠点を変えずに転職したい層にも向いています。",
  },
  {
    q: "埼玉のIT転職におすすめのエージェントは？",
    a: "IT/Web特化で首都圏中心のレバテックキャリア、全国対応で求人数が多いdoda ITエンジニア、全国47都道府県57拠点を持つワークポートなどが候補です。フルリモート求人を軸に、東京の求人も視野に入れて複数登録するのが効率的です。",
  },
  {
    q: "未経験から埼玉でITエンジニアになれますか？",
    a: "未経験歓迎の求人は存在します。特化型エージェントは経験者向けが中心のため、経験浅めの場合は未経験歓迎求人も扱うワークポートなどの総合型を併用するとよいでしょう。学習実績やポートフォリオの準備が選考通過の鍵になります。",
  },
  {
    q: "埼玉から東京に通勤するITエンジニアは多いですか？",
    a: "大宮から都心まで30分前後でアクセスでき、通勤圏として一般的な選択肢です。近年はリモート勤務の普及で、週1〜2回の出社で済むハイブリッドを選ぶエンジニアも増えています。完全に通勤ゼロのフルリモートを選べる求人もあります。",
  },
  {
    q: "30代・40代でも埼玉で転職先は見つかりますか？",
    a: "見つかります。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いといえます。埼玉県内求人に加え、東京企業のリモート求人を含めれば、ミドル層の選択肢は十分に確保できます。",
  },
];

const related = [
  { name: "東京のIT転職事情", href: "/area/tokyo/" },
  { name: "横浜のIT転職事情", href: "/area/yokohama/" },
  { name: "千葉のIT転職事情", href: "/area/chiba/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

export default function SaitamaAreaPage() {
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
        title="埼玉のIT転職事情【2026年】ベッドタウン×リモートの働き方"
        description="埼玉のITエンジニア転職を30代・40代向けに解説。エリア特徴、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。"
        url="/area/saitama/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "埼玉のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          埼玉のIT転職事情【2026年】ベッドタウン×リモートの働き方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 埼玉エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            埼玉は、東京への通勤圏でありながら住宅・生活コストを抑えやすい「ベッドタウン×リモート」のポジションが魅力のエリアです。大宮・さいたま新都心にSIerや官公庁系の拠点がある一方、東京企業のリモート求人を組み合わせることで選択肢を大きく広げられます。本記事では、30代・40代のミドルエンジニアが埼玉で転職を検討する際に押さえたいエリアの特徴、働き方、年収の考え方、エージェントの選び方を公開情報をもとに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年公表の試算）",
            "各社公式サイト・会社概要",
          ]}
        />

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：埼玉のIT転職市場の特徴</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・<strong>通勤圏×リモートの相性が良い</strong>。東京企業のフルリモート／ハイブリッド求人を、埼玉の生活コストで両立しやすい。</li>
              <li>・<strong>県内は安定志向の求人が中心</strong>。大宮・さいたま新都心のSIerや官公庁系など、腰を据えて働ける拠点がある。</li>
              <li>・<strong>生活コストを抑えたい層に向く</strong>。住宅事情に余裕を持たせつつ、首都圏水準の求人を狙える。</li>
            </ul>
          </div>
        </section>

        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埼玉のIT企業集積とエリア特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            埼玉のIT求人は大宮・さいたま新都心を中心に、川口・川越・所沢などへ分布します。エリアごとの傾向を把握しておくと、求人選びや居住地の判断がしやすくなります。以下は公開情報をもとにした定性的な特徴です（求人数・企業数の断定は避けています）。
          </p>
          <div className="space-y-4">
            {areas.map((area, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-800">{area.name}</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{area.type}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{area.feature}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各エリアの記述は公開情報に基づく傾向です。エリア内の全企業を網羅するものではありません。
          </p>
        </section>

        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（通勤圏・リモート併用）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            埼玉はベッドタウンとしての性格が強く、リモートワークとの相性が良いエリアです。県内オフィスへの通勤と、東京企業へのリモート／ハイブリッドを組み合わせて選べます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>県内オフィス勤務:</strong> 大宮・さいたま新都心のSIerや官公庁系など。安定した就業環境を求める層に向く。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>東京企業へハイブリッド:</strong> 埼玉在住で週1〜2回ほど東京に出社する形。大宮から都心まで30分前後の利便性を活かせる。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>フルリモート:</strong> 東京や全国の企業に、埼玉に住んだまま勤務。Web系・SaaS企業を中心に求人が存在する。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            リモート可の求人でも、入社後に出社頻度が変わる場合があります。週何日出社か、制度が恒久的かを面談で必ず確認しましょう。リモート前提で探すなら
            <Link href="/area/remote/" className="text-petrol hover:underline">フルリモートIT転職ガイド</Link>
            や
            <Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワーク求人の探し方</Link>
            が参考になります。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            埼玉での転職が向いている人・向いていない人
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            埼玉は「生活コスト×通勤圏×リモート」のバランスを重視する人に向いたエリアです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 住宅・生活コストを抑えつつ首都圏の求人を狙いたい</li>
                <li>✓ 東京企業にリモート／ハイブリッドで勤めたい</li>
                <li>✓ 家族の生活拠点を変えずに転職したい</li>
                <li>✓ 大宮・さいたま新都心のSIerや官公庁系で安定して働きたい</li>
                <li>✓ 通勤負担を週1〜2回程度に抑えたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>・県内オフィス勤務のみで完結させたい（県内求人は幅が限られる場合）</li>
                <li>・最先端のWeb系自社開発に最大限こだわりたい（東京中心の傾向）</li>
                <li>・対面の社内コミュニケーションを重視し毎日出社したい</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            埼玉の強みはリモート併用との相性です。
            <Link href="/area/tokyo/" className="text-petrol hover:underline">東京</Link>
            の求人をリモート前提で探しつつ、県内求人も視野に入れると選択肢が広がります。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「埼玉のITエンジニアの平均年収は◯◯万円」という断定は行いません。エリア単位の確定統計が乏しいためです。年代別の参考データを起点に、自分の現在地を把握しましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員SE 平均年収</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-3 py-3 border border-slate-200">20代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約378万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">30代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約499万円</td><td className="px-3 py-3 border border-slate-200">8.01%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">40代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約618万円</td><td className="px-3 py-3 border border-slate-200">12.67%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">50代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約685万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典: レバテック公表の年代別平均年収（2025年）。全国ベースの参考値です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            埼玉の魅力は、東京企業にリモート勤務して首都圏水準の年収を得つつ、生活コストを抑えられる組み合わせにあります。年収を上げたいなら複数エージェントで求人を比較し、市場価値を把握して交渉しましょう。
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">転職で年収は上がる？</Link>
            も参照してください。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埼玉に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            埼玉では、フルリモート求人に強いIT特化型と、全国対応の総合型を組み合わせるのが基本です。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア（IT/Web特化）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                IT/Web特化で首都圏中心。埼玉在住のまま東京企業に転職する際の選択肢として、高年収・リモート可の求人を探しやすいとされます。書類添削・面接対策の丁寧さが評価される一方、未経験者には紹介されにくい声もあります。
                <Link href="/review/levtech/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">doda ITエンジニア（全国・総合型）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                対応エリアは全国で、国内最大級の求人数。埼玉県内の求人と東京のリモート求人の両方を探しやすいのが利点です。求人・連絡が多すぎるという声もあるため、希望条件を明確に伝えるとよいでしょう。
                <Link href="/review/doda-it/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ワークポート（全国・総合型）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                全国47都道府県57拠点を持つ総合型で、IT・ゲームに強み。未経験歓迎求人も豊富とされ、レスポンスの速さが評価されます。埼玉在住で東京拠点の求人も紹介を受けやすい併用先です。
                <Link href="/review/workport/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            各社の横並び比較は
            <Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント10社比較</Link>
            、リモート向きの比較は
            <Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート転職に強いエージェント比較</Link>
            を参照してください。
          </p>
        </section>

        <section id="combo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントの併用パターン</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            埼玉ではリモート求人を軸に、目的別にエージェントを組み合わせるのが有効です。担当者との相性も結果を左右するため、合わなければ担当変更や別社への切り替えも検討しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">東京リモートで年収を狙う場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                IT特化型のレバテックキャリアでリモート可・高年収求人を比較しつつ、全国対応のdoda ITエンジニアで求人の幅を補います。埼玉の生活コストで首都圏水準の年収を狙う組み合わせです。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">県内勤務も視野に入れる場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                全国対応のdoda ITエンジニアやワークポートで大宮・さいたま新都心の県内求人を拾いつつ、特化型で東京求人も比較します。通勤負担と求人の幅を見比べられます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">経験浅め・未経験寄りの場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                未経験歓迎求人も扱うワークポートを軸に、特化型を1社併用します。学習実績やポートフォリオで経験不足を補う戦略が現実的です。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            リモート向きの比較は
            <Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート転職に強いエージェント比較</Link>
            、年代別は
            <Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代向け比較</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <ol className="space-y-3">
            {[
              { t: "県内勤務かリモートかの方針決め", d: "埼玉県内のオフィス勤務を希望するか、東京企業のリモート求人を中心に探すかで紹介内容が変わります。最初に決めておくと効率的です。" },
              { t: "職務経歴書の準備", d: "プロジェクト規模・役割・技術スタック・成果を具体化。リモート希望なら、自走力やオンライン協業の実績も明記します。" },
              { t: "エージェント2〜3社に登録", d: "IT特化型＋総合型の組み合わせ。リモート求人を多く扱う社を1つ含めると幅が出ます。" },
              { t: "求人比較と応募", d: "出社頻度・リモート運用を面談で確認しつつ、複数を比較できるよう応募時期をそろえます。" },
              { t: "選考・条件交渉", d: "年収・勤務地・働き方の交渉はエージェント経由で進めやすくなります。" },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold shrink-0">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{s.t}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              埼玉はミドル層にとって、家庭の生活基盤を維持しながら首都圏の求人を狙えるバランスの良いエリアです。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いと考えられます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>30代</strong>：技術力と現場経験のバランスが評価される時期。東京企業へのリモート転職で、生活コストを抑えつつ年収を伸ばしやすい。<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link></li>
              <li>・<strong>40代</strong>：マネジメントや特定領域の専門性が武器。県内の安定した拠点と東京リモートの両にらみで選択肢を確保できる。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link></li>
              <li>・住宅ローンや子育てなど生活基盤を変えたくない層にとって、通勤圏×リモートの選択肢は特に相性が良いといえます。</li>
            </ul>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">埼玉×リモートでIT転職を始める</h2>
          <p className="text-blue-100 text-sm mb-4">
            生活コストを抑えつつ首都圏の求人を狙える埼玉。リモート求人に強いエージェントに登録して市場価値を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
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
