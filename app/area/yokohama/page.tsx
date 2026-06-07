import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "横浜・神奈川のIT転職事情【2026年】エリア特徴と年収",
  description:
    "横浜・神奈川のITエンジニア転職を30代・40代向けに解説。みなとみらい・新横浜などのIT企業集積、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：横浜・神奈川のIT転職市場の特徴" },
  { id: "areas", label: "横浜・神奈川のIT企業集積とエリア特徴" },
  { id: "workstyle", label: "働き方の選択肢（通勤圏・リモート併用）" },
  { id: "fit", label: "横浜・神奈川での転職が向いている人・向いていない人" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "横浜・神奈川に対応するエージェント" },
  { id: "combo", label: "エージェントの併用パターン" },
  { id: "process", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const areas = [
  {
    name: "みなとみらい21エリア",
    type: "大手IT・製造系・コンサル",
    feature:
      "横浜を代表するビジネス拠点で、大手企業のオフィスが集まります。富士ソフトの本社や、日産自動車のグローバル本社が立地し、近年は再開発に伴いIT企業の拠点進出も続いてきました。職住近接を実現しやすいエリアとして人気があります。",
  },
  {
    name: "新横浜エリア",
    type: "製造系IT・組込み・SIer",
    feature:
      "新幹線停車駅としてのアクセスの良さから、製造業系IT企業やSIerの拠点が点在します。組込み・IoT・制御系など、ハードウェアに近い領域の求人を探しやすい傾向があります。",
  },
  {
    name: "関内・桜木町エリア",
    type: "中小IT・Web制作・スタートアップ",
    feature:
      "横浜市庁舎周辺の市街地で、中小IT企業やWeb制作会社、スタートアップが分布します。都心と比べてオフィスコストを抑えやすく、小規模ながら裁量の大きい環境を探す層に向いています。",
  },
  {
    name: "横浜駅周辺エリア",
    type: "通信・SaaS・カスタマー系",
    feature:
      "ターミナルとしての利便性が高く、各方面からの通勤がしやすいエリア。通信系やカスタマーサクセス系のIT企業の拠点が見られます。",
  },
  {
    name: "川崎エリア（神奈川）",
    type: "大手IT・研究開発・データセンター",
    feature:
      "東京と横浜の中間に位置し、大手メーカー系の研究開発拠点やデータセンター関連の需要があります。京浜工業地帯の系譜から、製造×ITの領域に強みがあります。",
  },
];

const faqs = [
  {
    q: "横浜・神奈川はITエンジニア転職に向いていますか？",
    a: "東京に隣接し通勤圏である一方、みなとみらいを中心に大手企業やIT拠点が集まり、神奈川県内で完結する選択肢も持てるエリアです。求人数の総量では東京に及びませんが、東京の求人とあわせて検討すれば選択肢は十分に広がります。製造×ITの領域に関心がある人にも向いています。",
  },
  {
    q: "横浜で働くと東京勤務よりメリットはありますか？",
    a: "みなとみらいなど横浜内のIT拠点に勤める場合、東京都心への通勤ラッシュを避けられ、職住近接を実現しやすい点がメリットです。生活環境や住宅事情の選択肢も広がります。一方で、最先端のWeb系自社開発などは東京に集中する傾向があるため、希望領域によっては東京求人も視野に入れるのが現実的です。",
  },
  {
    q: "横浜・神奈川のITエンジニアの年収はどのくらいですか？",
    a: "エリア単位の確定した平均値の断定は避けます。参考として、レバテックが公表する正社員SEの年代別平均年収は20代約378万円・30代約499万円・40代約618万円・50代約685万円（2025年・全国ベース）です。東京企業にリモート勤務する場合は東京水準の提示を受けられる可能性もあり、最終的な額はスキル・ポジションで変わります。",
  },
  {
    q: "横浜在住で東京の企業にリモート勤務できますか？",
    a: "可能なケースがあります。横浜・川崎は東京への通勤圏であり、フルリモートやハイブリッドの東京企業に勤めながら神奈川に住む選択肢を取れます。出社頻度の運用は企業差が大きいため、面談で実態を確認することが重要です。",
  },
  {
    q: "横浜・神奈川のIT転職におすすめのエージェントは？",
    a: "IT/Web特化で首都圏中心のレバテックキャリア、IT/Web/ゲーム特化のGeekly、製造業DXなど幅広い求人を持つdoda ITエンジニアなどが候補です。神奈川は首都圏のエージェントが対応範囲に含むため、複数登録して比較するとよいでしょう。",
  },
  {
    q: "未経験から横浜でITエンジニアになれますか？",
    a: "未経験歓迎の求人は存在しますが、特化型エージェントは経験者向けが中心です。経験浅めの場合は、全国47都道府県57拠点を持ち未経験歓迎求人も扱うワークポートなどの総合型を併用するとよいでしょう。",
  },
  {
    q: "製造・自動車系のIT求人はどう探せばよいですか？",
    a: "横浜・川崎は製造業の拠点が多く、組込み・制御・データ活用などの領域で求人が見込めます。doda ITエンジニアのように幅広い業界の求人を扱うエージェントや、対象企業の公式採用ページを併用して探すのが効率的です。実在企業の採用情報は各社公式で確認しましょう。",
  },
  {
    q: "30代・40代でも横浜で転職先は見つかりますか？",
    a: "見つかります。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いといえます。ミドル層は深い実務経験やマネジメントが評価されやすく、東京求人も含めて探せば選択肢は広がります。",
  },
];

const related = [
  { name: "東京のIT転職事情", href: "/area/tokyo/" },
  { name: "埼玉のIT転職事情", href: "/area/saitama/" },
  { name: "千葉のIT転職事情", href: "/area/chiba/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
];

export default function YokohamaAreaPage() {
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
        title="横浜・神奈川のIT転職事情【2026年】エリア特徴と年収"
        description="横浜・神奈川のITエンジニア転職を30代・40代向けに解説。IT企業集積、東京通勤圏×リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。"
        url="/area/yokohama/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "横浜・神奈川のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          横浜・神奈川のIT転職事情【2026年】エリア特徴と年収
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 横浜・神奈川エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            横浜・神奈川は、東京への通勤圏でありながら、みなとみらいを中心に大手企業やIT拠点が集まる独自のポジションを持つエリアです。神奈川県内で完結する求人と、東京企業へのリモート・通勤を組み合わせる選択肢の両方を取れる点が特徴です。本記事では、30代・40代のミドルエンジニアが横浜・神奈川で転職を検討する際に押さえたいエリアの特徴、働き方、年収の考え方、エージェントの選び方を公開情報をもとに整理します。
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              結論：横浜・神奈川のIT転職市場の特徴
            </h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・<strong>東京通勤圏×県内拠点の二刀流</strong>。みなとみらいなど横浜内のIT拠点と、東京企業へのリモート／通勤を組み合わせて選べる。</li>
              <li>・<strong>製造×ITの領域に強み</strong>。自動車・電機など製造業の拠点が多く、組込み・制御・データ活用の求人を探しやすい。</li>
              <li>・<strong>職住近接とQOLを重視する層に向く</strong>。都心の通勤ラッシュを避けつつ、首都圏の求人にアクセスできる。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">横浜・神奈川のIT企業集積とエリア特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            神奈川のIT求人は、横浜のみなとみらい・新横浜・関内、そして川崎を中心に分布します。エリアごとに集まる企業タイプの傾向を把握しておくと、求人選びの解像度が上がります。以下は公開情報をもとにした定性的な特徴です（求人数・企業数の断定は避けています）。
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
            ※ 企業名は各社が公開する本社・拠点所在地等の公知情報に基づく代表例です。エリア内の全企業を網羅するものではありません。
          </p>
        </section>

        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（通勤圏・リモート併用）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            横浜・神奈川では、神奈川県内のオフィスに通う形と、東京企業にリモート／通勤する形の両方が取れます。IT職種はリモート制度を導入する企業も多いものの、運用実態は企業ごとに差があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>県内オフィス勤務:</strong> みなとみらい・新横浜・川崎などの拠点に通勤。職住近接を実現しやすく、製造系・組込み系では出社が前提になりやすい。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>東京企業へハイブリッド:</strong> 神奈川在住で、週数日だけ東京都心に出社する形。通勤時間と出社頻度のバランスを取りやすい。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>フルリモート:</strong> Web系・SaaS企業を中心に、神奈川に住んだまま東京や全国の企業で働ける求人が存在する。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            リモート可の求人でも入社後に出社頻度が変わることがあります。週何日出社か、制度が恒久的かを面談で必ず確認しましょう。リモート前提で探すなら
            <Link href="/area/remote/" className="text-blue-600 hover:underline">フルリモートIT転職ガイド</Link>
            も参考になります。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            横浜・神奈川での転職が向いている人・向いていない人
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            横浜・神奈川は東京と地方の中間的なポジションを持つエリアです。自分の優先順位と照らして判断しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 神奈川に生活基盤があり、東京の求人もあわせて狙いたい</li>
                <li>✓ 都心の通勤ラッシュを避けつつ職住近接を実現したい</li>
                <li>✓ 製造・自動車・電機など製造×ITの領域に関心がある</li>
                <li>✓ みなとみらいなどの大手・拠点系で腰を据えて働きたい</li>
                <li>✓ 東京企業のリモート求人と県内求人を両天秤にかけたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>・最先端のWeb系自社開発に最大限こだわりたい（東京中心の傾向）</li>
                <li>・求人の総量を最優先したい（東京の方が選択肢は多い）</li>
                <li>・神奈川県内のみで完結させたい（県内求人だけだと幅が限られる場合）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            横浜・神奈川は、
            <Link href="/area/tokyo/" className="text-blue-600 hover:underline">東京</Link>
            の求人とあわせて検討することで強みが最大化します。県内拠点と東京リモートを組み合わせ、勤務形態と居住地をセットで考えるのがおすすめです。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「神奈川のITエンジニアの平均年収は◯◯万円」という断定は行いません。エリア単位の確定統計が乏しく、職種・スキル・企業規模で大きく振れるためです。年代別の参考データを起点に自分の現在地を把握しましょう。
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
            東京企業にリモート勤務する場合は東京水準の提示を受けられる可能性があります。年収を上げたいなら複数エージェントで求人を比較し、市場価値を把握したうえで交渉することが効果的です。
            <Link href="/knowledge/salary-change/" className="text-blue-600 hover:underline">転職で年収は上がる？</Link>
            も参照してください。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">横浜・神奈川に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            神奈川の求人は首都圏のエージェントが対応範囲に含みます。IT特化型を軸に、製造系や幅広い求人を扱う総合型を併用するとよいでしょう。
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア（IT/Web特化）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                IT/Web特化で首都圏中心。高年収求人の比率が高いとされ、書類添削・面接対策の丁寧さが評価されます。一方で未経験者には紹介されにくいという声もあります。
                <Link href="/review/levtech/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geekly（IT/Web/ゲーム特化）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                IT/Web/ゲーム特化で提案スピードが強みとされます。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。連絡頻度や担当者の質のばらつきを指摘する声もあります。
                <Link href="/review/geekly/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">doda ITエンジニア（全国・総合型）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                対応エリアは全国で、国内最大級の求人数を持つハイブリッド型。製造業DXを含む幅広い業界の求人を扱い、神奈川の大手・メーカー系の求人も探しやすいとされます。求人・連絡が多すぎるという声もあります。
                <Link href="/review/doda-it/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ワークポート（全国・総合型）</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                全国47都道府県57拠点を持つ総合型で、IT・ゲームに強み。未経験歓迎求人も豊富とされ、経験浅めの併用先として有効です。レスポンスの速さが評価される一方、連絡量を指摘する声もあります。
                <Link href="/review/workport/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            各社の横並び比較は
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>
            にまとめています。
          </p>
        </section>

        <section id="combo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントの併用パターン</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            神奈川の求人を効率よく比較するには、目的別にエージェントを組み合わせるのが有効です。担当者との相性も結果を左右するため、合わなければ担当変更や別社への切り替えも検討しましょう。代表的な組み合わせを挙げます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">県内拠点と東京リモートを両天秤にかける場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                IT特化型のレバテックキャリアで首都圏のリモート可・高年収求人を比較しつつ、全国対応のdoda ITエンジニアで神奈川県内の大手・メーカー系求人も拾います。両方の選択肢を並べて検討できます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">製造×IT領域を狙う場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                幅広い業界を扱うdoda ITエンジニアを軸に、対象企業の公式採用ページも併用します。組込み・制御・データ活用などドメイン色の強い求人は、エージェントと公式情報を突き合わせて確認するのが確実です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">経験浅め・未経験寄りの場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                未経験歓迎求人も扱うワークポートを軸に、特化型を1社併用します。応募の幅を確保しつつ、学習実績やポートフォリオで経験不足を補う戦略が現実的です。
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
              { t: "希望条件の整理（県内 or 東京リモート）", d: "神奈川県内勤務に絞るか、東京企業のリモート／通勤も含めるかで紹介求人が変わります。最初に方針を決めておくと効率的です。" },
              { t: "職務経歴書の準備", d: "プロジェクト規模・役割・技術スタック・成果を具体化。製造×IT領域はドメイン知識も明記すると差別化になります。" },
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
              横浜・神奈川はミドル層にとって、生活基盤を維持しながら首都圏の求人にアクセスできるバランスの良いエリアです。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者需要は底堅いと考えられます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>30代</strong>：技術力と現場経験のバランスが評価される時期。県内拠点でのリードポジションや、東京企業へのリモート転職で年収を伸ばしやすい。<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職ガイド</Link></li>
              <li>・<strong>40代</strong>：マネジメントや特定ドメインの専門性が武器。製造×ITの経験は神奈川で活きやすい。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職ガイド</Link></li>
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
          <h2 className="text-xl font-bold mb-3">横浜・神奈川のIT転職を始める</h2>
          <p className="text-blue-100 text-sm mb-4">
            県内拠点も東京リモートも選べる横浜・神奈川。IT特化型エージェントに登録して市場価値を確認しましょう。
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
