import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "千葉のIT転職事情【2026年】幕張・通勤圏×リモートの働き方",
  description:
    "千葉のITエンジニア転職を30代・40代向けに解説。幕張新都心・柏の葉などのエリア特徴、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：千葉のIT転職市場の特徴" },
  { id: "areas", label: "千葉のIT企業集積とエリア特徴" },
  { id: "workstyle", label: "働き方の選択肢（通勤圏・リモート併用）" },
  { id: "fit", label: "千葉での転職が向いている人・向いていない人" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "千葉に対応するエージェント" },
  { id: "combo", label: "エージェントの併用パターン" },
  { id: "process", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const areas = [
  {
    name: "幕張新都心エリア",
    type: "大手・EC・通信",
    feature:
      "千葉を代表するビジネス拠点で、計画的に整備されたオフィス街です。ファッションEC大手のZOZO（千葉市）や流通大手イオン（千葉市）の本社が立地し、大型イベント施設も集まります。海沿いの環境で働ける点も特徴です。",
  },
  {
    name: "柏の葉エリア",
    type: "スマートシティ・先端技術",
    feature:
      "つくばエクスプレス沿線で、産学連携を軸にしたスマートシティの取り組みが進む地区です。先端技術系の取り組みやスタートアップの集積が見られ、新しい領域に関心のある層に向いています。",
  },
  {
    name: "船橋・市川エリア",
    type: "中小IT・Web制作・リモート拠点",
    feature:
      "東京に隣接し都心へのアクセスが良いエリア。家賃水準を抑えつつ都心に近いことから、小規模IT企業やリモート中心のエンジニアの居住地として選ばれやすい傾向があります。",
  },
  {
    name: "印西・成田エリア",
    type: "データセンター・物流系DX",
    feature:
      "印西はデータセンターの集積地として知られ、インフラ系の需要があります。成田空港周辺は物流のDX推進に伴うIT需要が見込まれるエリアです。",
  },
  {
    name: "千葉駅周辺エリア",
    type: "SIer・官公庁系・通信",
    feature:
      "県庁所在地として、官公庁関連のシステムやSIerの拠点が分布します。安定した就業環境を求める層に向いたエリアです。",
  },
];

const faqs = [
  {
    q: "千葉はITエンジニア転職に向いていますか？",
    a: "千葉県内で完結する求人の総量は東京に及びませんが、幕張新都心という独自のビジネス拠点を持ち、東京への通勤圏でもあるエリアです。県内求人に東京企業のリモート求人を組み合わせれば選択肢は広がります。データセンター集積によるインフラ系や、物流DXに関心のある人にも向いています。",
  },
  {
    q: "幕張エリアの特徴は何ですか？",
    a: "幕張新都心は計画的に整備されたオフィス街で、ZOZOやイオンといった大手企業の本社が立地します（いずれも千葉市内）。大型イベント施設が集まり、海沿いの環境で働ける点も特徴です。大手・EC・通信系の拠点があり、千葉県内では求人が集まりやすいエリアといえます。",
  },
  {
    q: "千葉のITエンジニアの年収はどのくらいですか？",
    a: "エリア単位の確定した平均値の断定は避けます。参考として、レバテックが公表する正社員SEの年代別平均年収は20代約378万円・30代約499万円・40代約618万円・50代約685万円（2025年・全国ベース）です。東京企業にリモート勤務する場合は東京水準の提示を受けられる可能性があります。",
  },
  {
    q: "千葉在住でフルリモートは可能ですか？",
    a: "可能なケースがあります。船橋・市川など東京寄りのエリアは通勤圏であり、フルリモートやハイブリッドの東京企業に勤めながら千葉に住む選択肢を取れます。幕張など県内拠点の求人と組み合わせて検討するとよいでしょう。出社頻度の運用は企業差が大きいため面談で確認しましょう。",
  },
  {
    q: "千葉のデータセンター・インフラ系求人とは？",
    a: "印西を中心に大規模データセンターが集積しており、サーバー・ネットワーク・クラウド基盤などインフラ領域の需要が見込まれます。物理的な作業を伴う領域は出社中心になりやすい点に留意してください。具体的な求人は各社公式やエージェント経由で確認しましょう。",
  },
  {
    q: "千葉のIT転職におすすめのエージェントは？",
    a: "IT/Web特化で首都圏中心のレバテックキャリア、全国対応で求人数の多いdoda ITエンジニア、国内最大級の求人数を持つリクルートエージェントITなどが候補です。フルリモート求人と県内求人の両方を視野に、複数登録するのが効率的です。",
  },
  {
    q: "未経験から千葉でITエンジニアになれますか？",
    a: "未経験歓迎の求人は存在します。特化型エージェントは経験者向けが中心のため、経験浅めの場合は未経験歓迎求人も扱うワークポートなどの総合型を併用するとよいでしょう。学習実績やポートフォリオの準備が選考通過の鍵です。",
  },
  {
    q: "30代・40代でも千葉で転職先は見つかりますか？",
    a: "見つかります。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いといえます。千葉県内求人に東京企業のリモート求人を加えれば、ミドル層の選択肢は十分に確保できます。",
  },
];

const related = [
  { name: "東京のIT転職事情", href: "/area/tokyo/" },
  { name: "横浜のIT転職事情", href: "/area/yokohama/" },
  { name: "埼玉のIT転職事情", href: "/area/saitama/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
];

export default function ChibaAreaPage() {
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
        title="千葉のIT転職事情【2026年】幕張・通勤圏×リモートの働き方"
        description="千葉のITエンジニア転職を30代・40代向けに解説。エリア特徴、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。"
        url="/area/chiba/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "千葉のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          千葉のIT転職事情【2026年】幕張・通勤圏×リモートの働き方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 千葉エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            千葉は、幕張新都心という独自のビジネス拠点を持ちつつ、東京への通勤圏でもあるエリアです。県内には大手・EC系の本社やデータセンターの集積地があり、これに東京企業のリモート求人を組み合わせることで選択肢を広げられます。本記事では、30代・40代のミドルエンジニアが千葉で転職を検討する際に押さえたいエリアの特徴、働き方、年収の考え方、エージェントの選び方を公開情報をもとに整理します。
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
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：千葉のIT転職市場の特徴</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・<strong>幕張新都心という県内拠点を持つ</strong>。大手・EC・通信系の本社や拠点が集まり、千葉で完結する求人も探せる。</li>
              <li>・<strong>東京通勤圏×リモート併用が可能</strong>。船橋・市川など東京寄りのエリアから、リモート／通勤を組み合わせて選べる。</li>
              <li>・<strong>インフラ・物流DXに独自性</strong>。印西のデータセンター集積や成田周辺の物流DXなど、特定領域の求人を狙える。</li>
            </ul>
          </div>
        </section>

        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">千葉のIT企業集積とエリア特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            千葉のIT求人は幕張新都心を中心に、柏の葉・船橋・印西・千葉駅周辺などへ分布します。エリアごとの傾向を把握しておくと、求人選びや居住地の判断がしやすくなります。以下は公開情報をもとにした定性的な特徴です（求人数・企業数の断定は避けています）。
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
            ※ 企業名は各社が公開する本社所在地等の公知情報に基づく代表例です。エリア内の全企業を網羅するものではありません。
          </p>
        </section>

        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（通勤圏・リモート併用）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            千葉では、県内オフィスへの通勤と、東京企業へのリモート／ハイブリッドを組み合わせて選べます。IT職種はリモート制度を導入する企業も多いものの、運用実態は企業ごとに差があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>県内オフィス勤務:</strong> 幕張・千葉駅周辺の大手・SIerなど。インフラ系やデータセンター関連は物理作業を伴い出社が前提になりやすい。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>東京企業へハイブリッド:</strong> 船橋・市川など東京寄りに住み、週数日だけ都心に出社する形。通勤負担を抑えやすい。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>フルリモート:</strong> 東京や全国の企業に、千葉に住んだまま勤務。Web系・SaaS企業を中心に求人が存在する。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            リモート可の求人でも、入社後に出社頻度が変わる場合があります。週何日出社か、制度が恒久的かを面談で必ず確認しましょう。リモート前提で探すなら
            <Link href="/area/remote/" className="text-blue-600 hover:underline">フルリモートIT転職ガイド</Link>
            も参考になります。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            千葉での転職が向いている人・向いていない人
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            千葉は幕張という県内拠点と東京通勤圏の両方を持つエリアです。優先順位と照らして判断しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 千葉に生活基盤があり、東京の求人もあわせて狙いたい</li>
                <li>✓ 幕張など県内拠点で大手・EC系に関わりたい</li>
                <li>✓ データセンター・インフラ領域に強みがある／関心がある</li>
                <li>✓ 船橋・市川など東京寄りでリモート併用したい</li>
                <li>✓ 生活コストを抑えつつ首都圏水準の年収を狙いたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>・求人の総量を最優先したい（東京の方が選択肢は多い）</li>
                <li>・最先端のWeb系自社開発に最大限こだわりたい（東京中心の傾向）</li>
                <li>・通勤時間を最小化したい（県東部からは都心が遠い場合がある）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            千葉の強みは、県内拠点と
            <Link href="/area/tokyo/" className="text-blue-600 hover:underline">東京</Link>
            リモートの組み合わせ、そしてインフラ領域の独自性です。居住地と勤務形態をセットで考えると現実的な選択ができます。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「千葉のITエンジニアの平均年収は◯◯万円」という断定は行いません。エリア単位の確定統計が乏しいためです。年代別の参考データを起点に、自分の現在地を把握しましょう。
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
                <tr><td className="px-3 py-3 border border-slate-200">20代</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約378万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">30代</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約499万円</td><td className="px-3 py-3 border border-slate-200">8.01%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">40代</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約618万円</td><td className="px-3 py-3 border border-slate-200">12.67%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200">50代</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約685万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典: レバテック公表の年代別平均年収（2025年）。全国ベースの参考値です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            東京企業にリモート勤務する場合は東京水準の提示を受けられる可能性があります。年収を上げたいなら複数エージェントで求人を比較し、市場価値を把握して交渉しましょう。
            <Link href="/knowledge/salary-change/" className="text-blue-600 hover:underline">転職で年収は上がる？</Link>
            も参照してください。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">千葉に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            千葉では、フルリモート求人に強いIT特化型と、全国対応で求人数の多い総合型を組み合わせるのが基本です。
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア（IT/Web特化）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                IT/Web特化で首都圏中心。千葉在住のまま東京企業に転職する際の選択肢として、高年収・リモート可の求人を探しやすいとされます。書類添削・面接対策の丁寧さが評価される一方、未経験者には紹介されにくい声もあります。
                <Link href="/review/levtech/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">doda ITエンジニア（全国・総合型）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                対応エリアは全国で、国内最大級の求人数。幕張など県内の大手求人と、東京のリモート求人の両方を探しやすいのが利点です。求人・連絡が多すぎるという声もあるため、希望条件を明確に伝えるとよいでしょう。
                <Link href="/review/doda-it/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リクルートエージェントIT（全国・総合型）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                国内最大級の求人数で、非公開求人も豊富とされます。千葉県内から東京まで幅広い選択肢を持ち、大手からスタートアップまで網羅します。対応が事務的という声や連絡頻度を指摘する声もあります。
                <Link href="/review/recruit-it/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            経験浅めなら、全国47都道府県57拠点を持ち未経験歓迎求人も扱うワークポートの併用も選択肢です（
            <Link href="/review/workport/" className="text-blue-600 hover:underline">ワークポートのレビュー</Link>
            ）。各社の横並び比較は
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>
            を参照してください。
          </p>
        </section>

        <section id="combo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントの併用パターン</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            千葉の求人を効率よく比較するには、目的別にエージェントを組み合わせるのが有効です。担当者との相性も結果を左右するため、合わなければ担当変更や別社への切り替えも検討しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">県内拠点と東京リモートを両天秤にかける場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                IT特化型のレバテックキャリアで首都圏のリモート可・高年収求人を比較しつつ、全国対応のdoda ITエンジニアやリクルートエージェントITで幕張など県内の大手求人も拾います。両方の選択肢を並べて検討できます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">インフラ・データセンター領域を狙う場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                求人数の多いリクルートエージェントITやdoda ITエンジニアでインフラ系求人を幅広く拾いつつ、対象企業の公式採用情報も併用します。物理作業を伴う領域は出社条件を面談で確認しましょう。
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
            目的別の比較は
            <Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代向けエージェント比較</Link>
            ・
            <Link href="/compare/40s-agents/" className="text-blue-600 hover:underline">40代向けエージェント比較</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <ol className="space-y-3">
            {[
              { t: "県内勤務かリモートかの方針決め", d: "幕張など県内オフィスを希望するか、東京企業のリモート求人を中心に探すかで紹介内容が変わります。最初に決めておくと効率的です。" },
              { t: "職務経歴書の準備", d: "プロジェクト規模・役割・技術スタック・成果を具体化。インフラ系なら基盤運用や構築の実績を明記すると差別化になります。" },
              { t: "エージェント2〜3社に登録", d: "IT特化型＋総合型の組み合わせで、求人の幅と専門性のバランスを取ります。" },
              { t: "求人比較と応募", d: "出社頻度・リモート運用を面談で確認しつつ、複数を比較できるよう応募時期をそろえます。" },
              { t: "選考・条件交渉", d: "年収・勤務地・働き方の交渉はエージェント経由で進めやすくなります。" },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold shrink-0">{i + 1}</span>
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
              千葉はミドル層にとって、生活基盤を維持しながら首都圏の求人を狙えるエリアです。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いと考えられます。特にインフラ・データセンター領域は千葉ならではの強みになり得ます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>30代</strong>：技術力と現場経験のバランスが評価される時期。県内拠点でのリードポジションや、東京企業へのリモート転職で年収を伸ばしやすい。<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職ガイド</Link></li>
              <li>・<strong>40代</strong>：マネジメントやインフラ・特定ドメインの専門性が武器。県内拠点と東京リモートの両にらみで選択肢を確保できる。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職ガイド</Link></li>
              <li>・家族の生活拠点を変えずに転職したい層にとって、通勤圏×リモートの選択肢は大きなメリットになります。</li>
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
          <h2 className="text-xl font-bold mb-3">千葉のIT転職を始める</h2>
          <p className="text-blue-100 text-sm mb-4">
            幕張の県内拠点も東京リモートも選べる千葉。IT特化型エージェントに登録して市場価値を確認しましょう。
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
