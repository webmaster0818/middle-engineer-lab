import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/area/tokyo/" },
  title: "東京のIT・エンジニア転職【2026年】求人動向・年収・エージェント",
  description:
    "東京のITエンジニア転職を30代・40代向けに解説。渋谷・六本木・品川・大手町など主要エリアのIT企業集積、リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：東京のIT転職市場の特徴" },
  { id: "areas", label: "東京のIT企業集積とエリア特徴" },
  { id: "workstyle", label: "働き方の選択肢（通勤圏・リモート併用）" },
  { id: "fit", label: "東京での転職が向いている人・向いていない人" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "company-salary", label: "東京本社の主要IT企業と平均年収（有報実額）" },
  { id: "agents", label: "東京に対応するエージェント" },
  { id: "combo", label: "エージェントの併用パターン" },
  { id: "process", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const areas = [
  {
    name: "渋谷・恵比寿エリア",
    type: "メガベンチャー・Web系",
    feature:
      "サイバーエージェント、DeNA、ミクシィ、GMOインターネットグループなどの本社・主要拠点が集まる、いわゆる「ビットバレー」。Web/モバイルサービスの自社開発企業が多く、モダンな開発文化を持つ会社が集中する印象が強いエリアです。",
  },
  {
    name: "六本木・赤坂エリア",
    type: "外資系IT・ハイクラス",
    feature:
      "グローバル企業の日本法人や、ヘッドクオーターを構えるIT企業が点在します。メルカリの拠点もこのエリアにあります。英語を使う環境や、年収レンジの高いポジションを探す層が意識するエリアです。",
  },
  {
    name: "品川・大崎・五反田エリア",
    type: "大手・SIer・スタートアップ混在",
    feature:
      "ソニーグループや大手メーカー系、SIer系の拠点が多い一方、五反田は近年スタートアップの集積地として知られるようになりました。大規模システムから少人数の自社開発まで幅広い選択肢があります。",
  },
  {
    name: "大手町・丸の内・日本橋エリア",
    type: "金融系IT・コンサル",
    feature:
      "メガバンクや証券、保険など金融機関の本社が集まり、金融DXやコンサルティングファームのIT部門の需要があります。セキュリティ要件が厳しく、出社主体の働き方になりやすい傾向があります。",
  },
  {
    name: "新宿・四谷エリア",
    type: "通信・大手IT・受託",
    feature:
      "通信系や大手IT、受託開発企業の拠点が広く分布します。ターミナルとしてのアクセスの良さから、各方面から通勤しやすい点が特徴です。",
  },
];

const faqs = [
  {
    q: "東京はITエンジニア転職で本当に有利ですか？",
    a: "求人の選択肢という点では、IT・Web企業の本社や開発拠点が全国で最も集まっているのが東京です。自社開発・受託・SIer・外資・スタートアップなど企業タイプの幅が広く、希望条件に合う求人に出会いやすい環境といえます。一方で競争も激しいため、応募先の絞り込みと自己分析が重要になります。",
  },
  {
    q: "東京でフルリモートの求人は見つかりますか？",
    a: "IT職種はリモート制度を導入している企業が比較的多く、フルリモートやハイブリッドの求人も探せます。ただし制度は企業・職種・時期によって変わり、近年は出社回帰の動きもあります。求人票の記載だけで判断せず、面談で実際の運用（週何日出社か、入社後に変更の可能性があるか）を確認することをおすすめします。",
  },
  {
    q: "東京のITエンジニアの年収はどのくらいですか？",
    a: "エリア単位の確定した平均値を断定することは避けますが、参考としてレバテックが公表する正社員SEの年代別平均年収は、20代約378万円・30代約499万円・40代約618万円・50代約685万円（2025年）です。東京は高年収求人の比率が高いとされますが、最終的な提示額はスキル・経験・ポジションによって大きく異なります。",
  },
  {
    q: "地方在住でも東京の企業に転職できますか？",
    a: "オンライン面接が一般化したため、地方在住のまま東京企業の選考を受けるハードルは下がっています。フルリモート可の求人であれば居住地を変えずに働ける場合もあります。入社前後の出社条件は企業ごとに異なるため、エージェント経由でリモート前提の求人を優先的に紹介してもらうと効率的です。",
  },
  {
    q: "東京のIT転職におすすめのエージェントは？",
    a: "IT/Web特化で首都圏の求人に強いレバテックキャリア、IT/Web/ゲーム特化で提案スピードに定評のあるGeekly、首都圏（一都三県）中心で年収交渉に注力するtype転職エージェントITなどが候補になります。複数登録して比較するのが基本です。",
  },
  {
    q: "未経験から東京でITエンジニアになれますか？",
    a: "未経験歓迎の求人自体は存在しますが、特化型エージェントは実務経験者向けの紹介が中心になりがちです。未経験・経験浅めの場合は、未経験歓迎求人も扱う総合型のワークポートなどを併用するとよいでしょう。ポートフォリオや学習実績の準備が選考通過の鍵になります。",
  },
  {
    q: "30代・40代でも東京で転職先は見つかりますか？",
    a: "見つかります。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅いといえます。30代・40代はマネジメントや特定領域の深い経験が評価されやすく、年収アップにつながるケースもあります。",
  },
  {
    q: "エージェントは何社登録すればよいですか？",
    a: "2〜3社の併用が一般的です。特化型1〜2社に総合型1社を組み合わせると、求人の幅と専門性のバランスを取りやすくなります。担当者との相性もあるため、合わないと感じたら担当変更を申し出るか、別社をメインに切り替える判断も有効です。",
  },
];

const related = [
  { name: "横浜のIT転職事情", href: "/area/yokohama/" },
  { name: "埼玉のIT転職事情", href: "/area/saitama/" },
  { name: "千葉のIT転職事情", href: "/area/chiba/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function TokyoAreaPage() {
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
        title="東京のIT転職事情【2026年】エリア特徴・年収・エージェント"
        description="東京のITエンジニア転職を30代・40代向けに解説。主要エリアのIT企業集積、リモート併用の働き方、年代別年収の考え方、対応エージェントの選び方をまとめました。"
        url="/area/tokyo/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "東京のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          東京のIT転職事情【2026年】エリア特徴・年収・エージェント
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 東京エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            東京は、IT・Web企業の本社と開発拠点が全国で最も集まるエリアです。自社開発のメガベンチャーから外資系、SIer、金融系IT、スタートアップまで企業タイプの幅が広く、求人の選択肢という点では国内随一といえます。本記事では、30代・40代のミドルエンジニアが東京で転職を検討する際に押さえておきたいエリアの特徴、働き方、年収の考え方、エージェントの選び方を、公開情報をもとに整理します。
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

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              結論：東京のIT転職市場の特徴
            </h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>
                ・<strong>求人の選択肢が国内最大級</strong>。企業タイプ（自社開発・受託・SIer・外資・スタートアップ）と技術領域の幅が広く、希望条件に合う求人を探しやすい。
              </li>
              <li>
                ・<strong>高年収求人の比率が高い</strong>とされ、年収交渉やキャリアアップの選択肢を取りやすい。一方で競争も激しい。
              </li>
              <li>
                ・<strong>リモート・ハイブリッドの求人も探せる</strong>が、運用は企業差が大きいため面談での確認が前提。地方在住からの応募もしやすくなっている。
              </li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
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

        {/* エリア集積 */}
        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            東京のIT企業集積とエリア特徴
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            東京のIT求人は特定の駅・エリアに企業が集まる傾向があります。どのエリアにどんなタイプの企業が多いかを把握しておくと、求人を見る際の解像度が上がります。以下は公開情報をもとにした各エリアの定性的な特徴です（求人数や企業数の具体的な断定は避け、傾向として整理しています）。
          </p>
          <div className="space-y-4">
            {areas.map((area, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-800">{area.name}</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {area.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{area.feature}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 企業名は各社が公開する本社・拠点所在地等の公知情報に基づく代表例です。エリア内の全企業を網羅するものではありません。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            働き方の選択肢（通勤圏・リモート併用）
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            東京で働く場合、勤務形態は大きく「出社中心」「ハイブリッド」「フルリモート」に分かれます。IT職種はリモート制度を導入する企業が比較的多いものの、運用実態は企業ごとに差が大きいのが実情です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>出社中心:</strong> 金融系IT、セキュリティ要件の厳しい現場、ハードウェアを扱う領域などで多い傾向。都心オフィスへの通勤が前提になる。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>ハイブリッド:</strong> 週数日の出社とリモートを組み合わせる形。大手IT・メガベンチャーで広く採用されている。出社日数は企業・チームで異なる。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>フルリモート:</strong> Web系・SaaS企業を中心に求人が存在。神奈川・埼玉・千葉など近郊や、さらに遠方からの勤務が可能なケースもある。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            注意したいのは、求人票に「リモート可」とあっても、入社後に出社頻度が変わる可能性がある点です。週何日出社か、フルリモートが恒久的な制度か一時的な運用か、必ず面談で確認しましょう。リモート前提で探す場合は
            <Link href="/area/remote/" className="text-petrol hover:underline">フルリモートIT転職ガイド</Link>
            も参考になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            東京での転職が向いている人・向いていない人
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            東京は選択肢が多い分、すべての人にとって最適とは限りません。自分の優先順位と照らし合わせて判断しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ 求人の選択肢を最大化し、企業タイプを幅広く比較したい</li>
                <li>✓ 自社開発・モダンな技術環境にチャレンジしたい</li>
                <li>✓ 年収アップやハイクラス・管理職ポジションを狙いたい</li>
                <li>✓ 対面での面談やオフィス出社に抵抗がない、または通勤圏に住んでいる</li>
                <li>✓ 外資系で英語を活かす環境に関心がある</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>・生活コストを最優先で抑えたい（近郊＋リモート併用が現実的）</li>
                <li>・通勤負担を避けたい（フルリモート求人に絞る前提が必要）</li>
                <li>・特定地方に居住地を固定したい（東京企業のリモート可求人を探す）</li>
                <li>・落ち着いた環境で長期就業したい（出社主体の安定領域を選ぶ）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            東京の生活コストがネックになる場合でも、リモート併用で
            <Link href="/area/yokohama/" className="text-petrol hover:underline">横浜・神奈川</Link>、
            <Link href="/area/saitama/" className="text-petrol hover:underline">埼玉</Link>、
            <Link href="/area/chiba/" className="text-petrol hover:underline">千葉</Link>
            など近郊に住みながら東京企業で働く選択肢があります。居住地と勤務形態をセットで考えると、現実的な落としどころが見つかりやすくなります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            年収の考え方（年代別データ）
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「東京のITエンジニアの平均年収は◯◯万円」という断定はしません。エリア単位の確定した統計が乏しく、職種・スキル・企業規模で大きく振れるためです。代わりに、年代別の参考データを起点に自分の現在地を捉えることをおすすめします。
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
            出典: レバテック公表の年代別平均年収（2025年）。全国ベースの参考値で、東京限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            東京は高年収求人の比率が高いとされるため、上記より高い提示を受けられる可能性があります。年収アップを狙うなら、複数エージェントで求人を比較し、現在の市場価値を把握したうえで交渉することが効果的です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">転職で年収は上がる？</Link>
            も参照してください。
          </p>
        </section>

        <section id="company-salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">東京本社の主要IT企業と平均年収（有報実額）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            東京（首都圏）に本社を置く主要IT企業の平均年収を、各社の有価証券報告書の実額で並べました。エリアの年収水準を「実在する企業の実額」で掴めます。各社とも当サイトの企業別ガイドで選考情報まで解説しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">企業</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">平均年収（有報）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "野村総合研究所（NRI）", href: "/company/nri/", salary: "1,322万円", note: "2025年3月期" },
                  { name: "メルカリ", href: "/company/mercari/", salary: "1,176万円", note: "2025年6月期" },
                  { name: "リクルートHD", href: "/company/recruit/", salary: "1,145万円", note: "2025年3月期・持株全社員" },
                  { name: "NTTデータ", href: "/company/ntt-data/", salary: "923万円", note: "2025年3月期" },
                  { name: "サイバーエージェント", href: "/company/cyberagent/", salary: "913.8万円", note: "2025年9月期" },
                  { name: "LINEヤフー", href: "/company/line-yahoo/", salary: "884万円", note: "2025年3月期・二次集計" },
                  { name: "ソフトバンク", href: "/company/softbank/", salary: "849万円", note: "2025年3月期" },
                  { name: "楽天グループ", href: "/company/rakuten/", salary: "820万円", note: "2024年12月期" },
                  { name: "MIXI", href: "/company/mixi/", salary: "791万円", note: "2025年3月期・単体" },
                  { name: "Sansan", href: "/company/sansan/", salary: "780万円", note: "2025年5月期" },
                  { name: "freee", href: "/company/freee/", salary: "688万円", note: "2025年6月期" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-2.5 border border-slate-200"><Link href={r.href} className="text-petrol-deep hover:underline font-medium">{r.name}</Link></td>
                    <td className="px-3 py-2.5 border border-slate-200 font-bold text-petrol whitespace-nowrap">{r.salary}</td>
                    <td className="px-3 py-2.5 border border-slate-200 text-xs text-slate-500 whitespace-nowrap">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※各社の有価証券報告書に記載された全社員（または提出会社・持株会社）平均の実額で、エンジニア職に限定した値ではありません。詳細な出典・時点は各企業ガイドに記載しています。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            東京に対応するエージェント
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            東京の求人は多くのエージェントが扱いますが、IT特化型と首都圏特化型を軸に、必要に応じて総合型を併用するのが基本です。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア（IT/Web特化）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                IT/Web特化で首都圏中心。利用者の約8割が20〜30代とされ、高年収求人の比率が高いとされます。書類添削・面接対策の丁寧さやLINEで連絡が完結する点が評価される一方、未経験者には紹介されにくいという声もあります。
                <Link href="/review/levtech/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geekly（IT/Web/ゲーム特化）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                IT/Web/ゲーム業界に特化し、提案スピードが強みとされます。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。レスポンスの速さが評価される一方、連絡頻度や担当者の質のばらつきを指摘する声もあります。
                <Link href="/review/geekly/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">type転職エージェントIT（首都圏特化）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                首都圏（一都三県）中心で、年収交渉と面接対策に注力するエージェント。定着率の高さや首都圏非公開求人の豊富さが評価される一方、地方求人や未経験向けは手薄とされます。
                <Link href="/review/type-agent/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                年収750万円以上をハイクラスと位置づけるスカウト型サービス。年収1,000万円以上の求人が全体の約4割（二次情報）とされ、外資・管理職に強いとされます。CTOやVPoEなど上位ポジションを狙う層向け。
                <Link href="/review/bizreach-it/" className="underline ml-1">詳細レビュー</Link>
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            未経験・経験浅めの場合は、全国47都道府県57拠点を持ち未経験歓迎求人も扱うワークポートの併用も選択肢です（
            <Link href="/review/workport/" className="text-petrol hover:underline">ワークポートのレビュー</Link>
            ）。各社の比較は
            <Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント10社比較</Link>
            にまとめています。
          </p>
        </section>

        {/* 併用パターン */}
        <section id="combo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントの併用パターン</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            東京の求人を効率よく比較するには、目的別にエージェントを組み合わせるのが有効です。担当者との相性も結果を左右するため、合わないと感じたら担当変更を申し出るか、別社をメインに切り替える判断も持っておきましょう。代表的な組み合わせを挙げます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">年収アップ・キャリアアップを狙う場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                IT特化型のレバテックキャリアやGeeklyで高年収求人を比較しつつ、年収750万円以上を狙えるならビズリーチのスカウトを併用します。複数のオファーを並べることで、年収交渉の余地が広がります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">じっくり伴走してほしい場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                首都圏特化で面接対策に注力するtype転職エージェントITをメインに、求人の幅を補う総合型を1社併用します。書類添削や面接対策のサポートを受けながら進めたい人に向きます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">経験浅め・未経験寄りの場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                未経験歓迎求人も扱うワークポートを軸に、特化型を1社併用して市場の反応を見ます。応募の幅を確保しつつ、ポートフォリオや学習実績で経験不足を補う戦略が現実的です。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            目的別の比較は
            <Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代向けエージェント比較</Link>
            ・
            <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント比較</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <ol className="space-y-3">
            {[
              { t: "自己分析と希望条件の整理", d: "年収・勤務地・リモート可否・技術領域・マネジメント志向など、譲れない条件と妥協できる条件を分けて整理します。" },
              { t: "職務経歴書の準備", d: "担当プロジェクトの規模・役割・技術スタック・成果を具体的に記述。30代・40代はマネジメントや改善実績も明記します。" },
              { t: "エージェント2〜3社に登録", d: "特化型1〜2社＋総合型1社が基本。初回面談で希望を伝え、紹介求人の質を見ます。" },
              { t: "求人比較と応募", d: "複数オファーを比較できるよう、応募タイミングをある程度そろえます。リモート運用は面談で必ず確認。" },
              { t: "選考・条件交渉", d: "年収・働き方の交渉はエージェントを通すと進めやすい。複数内定があると交渉余地が広がります。" },
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

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              東京は若手向け求人の印象が強い一方、ミドル層にとっても選択肢の多いエリアです。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅いと考えられます。30代・40代の強みは、特定領域の深い実務経験とマネジメント・調整力です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>30代</strong>：技術力と現場経験のバランスが評価されやすい時期。リードエンジニアやテックリードのポジションで年収を伸ばしやすい。<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link></li>
              <li>・<strong>40代</strong>：マネジメント・アーキテクト・特定ドメインの専門性が武器。求人数は絞られるが、ハイクラス・スカウト型の活用で道が開ける。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link></li>
              <li>・東京の生活コストの高さは、リモート併用で近郊（神奈川・埼玉・千葉）に住む選択で緩和できる場合があります。</li>
            </ul>
          </div>
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
          <h2 className="text-xl font-bold mb-3">東京のIT転職を始める</h2>
          <p className="text-blue-100 text-sm mb-4">
            東京は求人の選択肢が国内最大級。IT特化型エージェントに登録して、まず自分の市場価値を確認しましょう。
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
