import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "組込みエンジニアの転職市場ガイド｜年収・求人の探し方",
  description:
    "組込みエンジニアの転職市場を30代・40代視点で解説。経産省・レバテックの年収データ、求められる経験レベル、自動車・IoT・エッジAIのキャリアパス、求人の探し方、学習戦略、FAQを網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：組込み転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代視点" },
  { id: "learning", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "求人・転職支援の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "自動車ソフトウェアエンジニア",
    note: "ADAS/自動運転/車載OS/制御。SDV化で需要拡大。AUTOSAR・機能安全の知識が効く。",
    demand: "高",
  },
  {
    role: "IoT/エッジエンジニア",
    note: "IoTデバイス設計、省電力、通信、クラウド連携。Web/クラウドとの融合領域。",
    demand: "中〜高",
  },
  {
    role: "エッジAIエンジニア",
    note: "デバイス上でのAI推論（TinyML・組込み画像認識）。希少で市場価値が高い。",
    demand: "中（希少性高）",
  },
  {
    role: "半導体/FA・産業機器",
    note: "半導体ファーム、産業用ロボット・FA機器の制御。実務経験がそのまま価値になる。",
    demand: "中",
  },
];

const faqs = [
  {
    q: "組込みエンジニアの平均年収はどのくらい？",
    a: "経済産業省「IT関連産業の給与等に関する実態調査」では組込みエンジニアの平均年収は603.9万円とされています。またレバテックキャリアの集計では「組込・制御エンジニア」の求人から試算した平均年収は約580万円（2024年11月20日時点・30件抽出）でした。媒体により幅はありますが、IT職種の中でも比較的高めの水準です。",
  },
  {
    q: "組込みエンジニアの需要は今後も続く？",
    a: "自動車のEV化・ADAS・ソフトウェア定義車両（SDV）化、IoTデバイスの普及、産業用ロボットの高度化により、組込みソフトの需要は底堅いと考えられます。特に自動車領域はソフトウェア比率の上昇が続いており、人材需要を押し上げています。",
  },
  {
    q: "組込みエンジニアからWeb系に転向すべき？",
    a: "必ずしも転向する必要はありません。組込みの年収はWeb系と遜色なく、自動車・半導体領域ではむしろ高めです。ただしIoT/エッジAIのようにWeb・クラウドと融合する領域を押さえると、市場価値の振れ幅を抑えつつ年収を伸ばしやすくなります。",
  },
  {
    q: "組込みの求人はどんな企業が多い？",
    a: "自動車メーカー・Tier1サプライヤー、半導体メーカー、家電/精密機器メーカー、IoTスタートアップ、ロボティクス企業に分布します。自動車関連の求人が比較的多く、年収も高い傾向があります。地方拠点の求人が一定数あるのも特徴です。",
  },
  {
    q: "組込みエンジニアに必要なスキルは？",
    a: "C/C++が基本で、RTOS（FreeRTOS・Zephyr等）、マイコン（ARM Cortex-M等）、通信プロトコル（CAN・SPI・I2C等）の知識が中心です。近年はRust、Python（テスト自動化）、CI/CDの知識も評価対象になりつつあります。",
  },
  {
    q: "経験年数でどのくらい年収が変わる？",
    a: "解説記事ベースの一般的な目安では、新卒350万〜500万円、3年目500万〜700万円、10年目700万〜1,000万円程度、さらに経験を積むと1,000万円以上というレンジ感です（厳密な統計値ではなく目安）。AUTOSAR・機能安全・自動運転などの専門性で上振れします。",
  },
  {
    q: "組込みエンジニアにおすすめの転職エージェントは？",
    a: "IT全般＋組込み案件を扱い高年収帯に強いレバテックキャリア、自動車・半導体のハイクラス求人を狙えるスカウト型のビズリーチ、地方拠点も含め総合的に求人量の多いリクルートエージェントITの併用が現実的です。製造業の地方求人を取りこぼさないよう、総合型も1社入れるのがコツです。",
  },
];

export default function EmbeddedSkillPage() {
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
        title="組込みエンジニアの転職市場ガイド｜年収・求人の探し方"
        description="組込みエンジニアの転職市場を30代・40代視点で解説。経産省・レバテックの年収データ、キャリアパス、求人の探し方、学習戦略、FAQを網羅します。"
        url="/skill/embedded/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "組込みエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          組込みエンジニアの転職市場ガイド｜年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | 組込みエンジニアの転職市場を30代・40代視点で分析
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          組込みエンジニアは、自動車・IoTデバイス・家電・産業用ロボットなどに搭載されるソフトウェアを開発する専門職です。自動車のSDV化やIoT/エッジAIの広がりで重要性が増しています。本記事では求人DBサイトと同じ土俵で勝負するのではなく、ミドル層が「どの領域を狙い、どう年収を伸ばすか」という情報意図に絞って解説します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査",
            "レバテックキャリア（組込・制御エンジニアの年収集計）",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：組込み転職の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              組込みは「枯れたスキル」ではなく、自動車SDV化とエッジAIで再び需要が伸びている領域です。30代・40代は<strong>既存の制御/低レイヤー経験×伸びる領域（自動車・IoT・エッジAI）</strong>で年収を伸ばせます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 平均年収は約603.9万円（経産省調査）／約580万円（レバテック集計・2024年11月時点）とIT職の中でも高め。</li>
              <li>② 自動車（AUTOSAR・機能安全）やエッジAIなど専門性で上振れ。汎用C/C++だけでは差がつきにくい。</li>
              <li>③ 求人は地方拠点も多い。IT特化エージェント＋総合型を併用し、製造業の求人を取りこぼさないのがコツ。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みは公的調査と特化型エージェントの集計値が近く、年収の目安が立てやすい職種です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["平均年収（公的調査）", "603.9万円（経済産業省「IT関連産業の給与等に関する実態調査」）"],
                  ["平均年収（エージェント集計）", "約580万円（レバテックキャリア「組込・制御エンジニア」求人30件からの試算・2024年11月20日時点）"],
                  ["経験年数の目安（解説記事ベース）", "新卒350万〜500万円／3年目500万〜700万円／10年目700万〜1,000万円程度（厳密な統計ではなく目安）"],
                  ["年収が上振れしやすい領域", "自動車（ADAS/自動運転/AUTOSAR/機能安全）、エッジAI、半導体"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            ITエンジニア全体の年代別水準と比べると、組込みの平均（約580〜604万円）は同年代平均の中でも高めです。レバテックが公表する正社員SEの年代別平均年収は、20代約378万円／30代約499万円／40代約618万円／50代約685万円（2025年）。組込みの平均は30代SE平均を上回り、40代SE平均に迫る水準で、専門性が年収に反映されやすい職種だとわかります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            背景には構造的な人材不足があります。経済産業省「IT人材需給に関する調査」（2019年公表）では2030年に最大約79万人のIT人材不足が試算されており、とくに自動車のソフトウェア開発は人材の取り合いが続いています。なお「自動車ソフト求人の前年比＋◯%」「求人倍率◯倍」といった数値は確かな一次出典を確認できなかったため、本記事では断定しません。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込み求人は「C/C++が書ける」だけでなく、対象ハード・規格・安全要件の理解で評価が分かれます。求人票で頻出する要件は次の通りです。
          </p>
          <div className="space-y-3">
            {[
              { lv: "歓迎されやすい人", body: "C/C++の実務経験、マイコン（ARM Cortex-M等）やRTOSでの開発経験、CAN/SPI/I2C等の通信、ハードに近いデバッグ経験。" },
              { lv: "ミドル〜シニア要件", body: "アーキテクチャ設計、リアルタイム性/省電力の最適化、チームリード、品質プロセス（レビュー・テスト設計）の主導。" },
              { lv: "領域別の上乗せ要件", body: "自動車ならAUTOSAR・ISO 26262（機能安全）、エッジAIならTinyML/推論最適化、IoTならMQTT/BLE/クラウド連携、半導体ならファーム/ドライバ。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.lv}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ組込みでも、狙う領域で年収と働き方が変わります。代表的な方向性と求人の出やすさの目安は次の通りです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">方向性</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-28">求人の出やすさ</th>
                </tr>
              </thead>
              <tbody>
                {careerPaths.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{item.note}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 align-top">{item.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どの窓口が強いか）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みは製造業の地方拠点求人が多いため、IT特化だけでなく総合型も組み合わせると取りこぼしが減ります。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT全般＋組込み案件・高年収帯）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Web全般に強く高年収求人比率が高い特化型。組込・制御エンジニアの求人も扱い、年収レンジの目安を相談しやすい窓口です。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（自動車・半導体のハイクラス／スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上をハイクラスと定義するスカウト型。自動車・半導体の高年収ポジションや管理職求人に出会いやすく、専門性のある組込みエンジニアと相性が良い窓口です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（求人量・地方求人）</h3>
              <p className="text-sm text-slate-600 mb-2">
                国内最大級の求人数を持ち全国対応。製造業の地方拠点求人も含めて網羅できるため、地域を問わず探したい人の「取りこぼし防止」枠として有効です。
              </p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            製造業全体の事情は<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業のIT転職ガイド</Link>、併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの併用ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            電気電子/制御出身、あるいは別領域のソフト出身からの参入に現実的なルートです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "ハードに近い経験を組込みに接続する", desc: "電気電子・制御・FA出身なら、ハードの理解は強い武器。C/C++とマイコン開発を補えば、ハードを知らないソフト出身者との差別化になります。" },
              { num: "2", title: "個人でマイコン開発の成果物を作る", desc: "ARM系マイコンやRaspberry Pi/ESP32等でセンサー制御・通信の小作品を作り、回路とコードをセットで公開。実機を動かした証拠が効きます。" },
              { num: "3", title: "SES/受託から事業会社の内製チームへ", desc: "まずSES/受託で組込み実務の年数を積み、その後に自動車OEMやメーカーの内製チームへ。段階を踏むことで未経験ハードルを下げられます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            SESから抜けたい場合は<Link href="/industry/ses-exit/" className="text-blue-600 hover:underline">SES脱出の転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：経験の蓄積がそのまま価値になる</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みは流行り廃りの激しいWeb系と違い、ノウハウの蓄積が長く効く領域です。ハードの癖、リアルタイム制御、品質プロセスといった「経験でしか身につかない勘所」が評価されるため、ミドル層に向いた職種です。
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">専門規格の知識が長期の武器になる</h3>
              <p className="text-sm text-blue-700">
                AUTOSARや機能安全（ISO 26262）は習得に時間がかかる分、一度身につければ陳腐化しにくく、40代以降も評価され続けます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">地方求人が多く、暮らしと両立しやすい</h3>
              <p className="text-sm text-blue-700">
                製造業は地方拠点が多く、Uターン/Iターンや持ち家との両立を考えるミドルにとって選択肢が広いのが利点です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">伸びる領域を1つ足して年収を引き上げる</h3>
              <p className="text-sm text-blue-700">
                既存の制御経験にエッジAIやクラウド連携を足すと、平均（約580〜604万円）から一段上の提示を狙えます。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            40代の現実は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learning" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みは実機での経験が最も評価されます。座学だけでなく、動くものを作って語れる状態を目指しましょう。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>ARM系マイコンやESP32等で、センサー制御・通信の小作品を実機で動かす</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>RTOS（FreeRTOS/Zephyr）でのタスク設計・割り込み処理を一通り体験する</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>狙う領域（自動車/IoT/エッジAI）の規格・要素技術を1つ深掘りする</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>Rust（組込み）やPython（テスト自動化）など評価が上がりつつある言語に触れる</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>不具合解析・品質プロセスの経験を職務経歴書で言語化する</li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            学習継続は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">働きながら学び続ける方法</Link>、Rust併用なら<Link href="/skill/rust/" className="text-blue-600 hover:underline">Rustエンジニアの転職市場ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込み転職で強みを発揮しやすい人と、別の方向も検討した方がよい人の傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">組込み転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>C/C++やマイコン/RTOSでの開発経験がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>電気電子・制御・FAなどハードに近い経験を持つ</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>自動車（AUTOSAR/機能安全）やエッジAIで専門性を深めたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>地方拠点も含めて腰を据えて働きたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>長く陳腐化しにくい専門スキルを積み上げたい</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3 text-sm">向いていない可能性が高い人</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>Web/クラウドの最新トレンドを主戦場にしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>ハード/実機に触れる開発に関心が持てない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>短いリリースサイクルの開発スタイルを好む</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>厳格な品質プロセス/規格対応を負担に感じる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>都市部のWeb系求人だけを希望する</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            クラウド寄りに進みたい場合は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラ</Link>や<Link href="/skill/network/" className="text-blue-600 hover:underline">ネットワーク</Link>、安全性重視の言語なら<Link href="/skill/rust/" className="text-blue-600 hover:underline">Rust</Link>を併せて検討すると選択肢が広がります。
          </p>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人・転職支援の口コミ傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込み案件を扱うエージェントについて、Qiita Job Change・みん評・イーデス等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載は行いません）。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">レバテックキャリアに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                Qiita Job Change・イーデス等の口コミでは「書類添削・面接対策が丁寧」「高年収求人が多い」という声がある一方、「未経験者は紹介されにくい」という指摘も見られます。組込み実務の年数がある人ほど提案を受けやすい傾向です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">ビズリーチに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                ミライトーチ等の口コミでは「高年収求人が豊富」「市場価値を客観的に把握できる」という評価がある一方、「経歴次第でスカウトが来ない」という声も。自動車・半導体の専門性を職務経歴に書き込むほどスカウトが届きやすくなります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">リクルートエージェントITに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                Qiita Job Change等の口コミでは「圧倒的な求人数」「非公開求人が充実」という声がある一方、「対応が事務的」「連絡頻度が高い」という指摘も。地方の製造業求人まで網羅したい人の取りこぼし防止に向くと語られます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">組込みのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            組込み求人は地方拠点も多く、IT特化型と総合型の併用が有効です。複数登録で非公開求人も含めて探しましょう。
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
            {[
              { name: "Rustエンジニアの転職市場ガイド", href: "/skill/rust/" },
              { name: "ネットワークエンジニアの転職ガイド", href: "/skill/network/" },
              { name: "製造業のIT転職ガイド", href: "/industry/manufacturing/" },
              { name: "SES脱出の転職ガイド", href: "/industry/ses-exit/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/canon/" className="text-blue-700 hover:underline">キヤノン</a></li><li><a href="/company/denso/" className="text-blue-700 hover:underline">デンソー</a></li><li><a href="/company/keyence/" className="text-blue-700 hover:underline">キーエンス</a></li><li><a href="/company/kyocera/" className="text-blue-700 hover:underline">京セラ</a></li><li><a href="/company/murata/" className="text-blue-700 hover:underline">村田製作所</a></li><li><a href="/company/omron/" className="text-blue-700 hover:underline">オムロン</a></li><li><a href="/company/panasonic/" className="text-blue-700 hover:underline">パナソニック</a></li><li><a href="/company/renesas/" className="text-blue-700 hover:underline">ルネサスエレクトロニクス</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
