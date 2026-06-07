import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "神戸・兵庫のITエンジニア転職事情【2026年】特徴と進め方",
  description:
    "神戸・兵庫のIT・Webエンジニア転職市場を解説。三宮や製造業の集積、働き方の選択肢、年代別年収の考え方、対応エージェント、大阪通勤、30代・40代の進め方まで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：神戸・兵庫のIT転職市場の特徴" },
  { id: "cluster", label: "神戸・兵庫のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢" },
  { id: "salary", label: "年収の考え方（年代別）" },
  { id: "agents", label: "神戸・兵庫に対応するエージェント" },
  { id: "howto", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "神戸のITエンジニアの年収はどのくらいが目安ですか？",
    a: "全国の正社員SEの年代別平均（レバテック公表・2025年）では30代約499万円、40代約618万円です。神戸・兵庫はメーカーや研究機関に近い専門求人がある一方、地方は首都圏より相場が下がる傾向もあります。具体的なレンジは企業規模・職種・スキルで大きく変わります。",
  },
  {
    q: "神戸から大阪への通勤は現実的ですか？",
    a: "三宮から大阪・梅田は鉄道で短時間でアクセスでき、大阪のIT企業へ通勤するエンジニアは多くいます。神戸の生活環境を保ちながら大阪の求人にアクセスできるため、神戸在住で大阪勤務という選択は現実的です。",
  },
  {
    q: "神戸と大阪、どちらがIT転職で有利ですか？",
    a: "求人の絶対数は大阪が多く、選択肢の広さでは大阪が有利です。神戸・兵庫は製造業・医療・研究機関といった特色ある求人があります。神戸に住みながら大阪の求人も合わせて探すのが現実的なアプローチです。",
  },
  {
    q: "神戸でフルリモートの求人は見つかりますか？",
    a: "Web系・SaaS企業を中心にリモート可の求人は存在し、大阪・東京本社の全国採用求人も対象になります。一方、製造業系や研究機関はセキュリティ・機密性の観点から出社中心の傾向があります。出社頻度は面談で必ず確認しましょう。",
  },
  {
    q: "神戸・兵庫のIT転職におすすめのエージェントは？",
    a: "IT特化で全国の求人を扱うレバテックキャリア、全国対応で求人量が多いdoda ITエンジニア、サポートが手厚いマイナビIT AGENTが基本の選択肢です。神戸だけでなく大阪の求人も合わせて提案してもらうと選択肢が広がります。",
  },
  {
    q: "30代・40代でも神戸で転職できますか？",
    a: "経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者の需要は底堅い状況です。神戸・兵庫の製造業・医療系は専門性やマネジメント経験が評価されやすく、実務経験があれば30代・40代でもチャンスがあります。",
  },
  {
    q: "兵庫の製造業DX求人にはどんなスキルが求められますか？",
    a: "クラウド（AWS/Azure）、データ分析、IoT、組込み、業務システム開発などが中心です。兵庫は重工業・電機・精密機器メーカーの拠点が多く、業務知識とITスキルを掛け合わせられる人材が評価されやすい傾向があります。",
  },
  {
    q: "神戸で未経験からITエンジニアに転職できますか？",
    a: "可能性はありますが、経験者向け求人に比べて数は限られます。未経験歓迎求人を多く扱う総合型エージェントを併用し、学習実績やポートフォリオで意欲を示すのが現実的です。30代以降は前職スキルとの掛け合わせが評価されやすくなります。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化で全国の求人を扱う。技術理解に基づく提案と年収交渉が強み。内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）。神戸・大阪を含む関西の求人を相談しやすい。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の国内最大級。IT・通信エンジニア求人は5万件超（2026年2月時点・二次経由）。メーカー・大手のDX求人を含め幅広くカバーし、神戸・大阪の求人を同時に探しやすい。",
  },
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    point:
      "20〜30代の若手層に強く、書類添削・面接対策が手厚い。転職メディア集計では定着率97.5%との数値もある。初めての転職で丁寧なサポートを求める人に向く。",
  },
];

export default function KobeAreaPage() {
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
        title="神戸・兵庫のITエンジニア転職事情【2026年】特徴と進め方"
        description="神戸・兵庫のIT・Webエンジニア転職市場を解説。製造業の集積、働き方、年代別年収の考え方、対応エージェント、大阪通勤、30代・40代の進め方まで網羅します。"
        url="/area/kobe/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "神戸のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          神戸・兵庫のITエンジニア転職事情【2026年】特徴と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 神戸・兵庫エリアのIT転職ガイド
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
            "各エージェント公式・転職メディア集計値",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：神戸は製造業の集積と大阪通勤圏を両立できるエリア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              神戸・兵庫は重工業・電機・精密機器など製造業の集積で知られ、DX関連の求人に特色があります。求人の絶対数は大阪より少ないものの、三宮から大阪・梅田へのアクセスが良く、神戸に住みながら大阪の企業に通勤・リモート勤務する人も多いエリアです。神戸・大阪を合わせて探すのが現実的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1 list-disc list-inside">
              <li>製造業の本社・拠点が多く、業務知識×ITが武器になりやすい</li>
              <li>三宮〜大阪の通勤圏で、求人の選択肢を大阪まで広げやすい</li>
              <li>生活環境・QOLを重視するUターン・Iターン層の受け皿になりやすい</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* IT企業集積 */}
        <section id="cluster" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">神戸・兵庫のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            神戸・兵庫のIT求人は、三宮を中心とした都心部と、製造業・研究機関の拠点が点在するエリアに分かれます。以下は公開情報から見える定性的な傾向であり、求人数・企業数の具体的な断定ではない点にご留意ください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">三宮・神戸都心部</h3>
              <p className="text-sm text-slate-600">
                神戸のビジネス中心地で、SIerの拠点やWeb系・通信のオフィスが集まります。大阪へのアクセスも良く、神戸で探しつつ大阪求人も狙える立地です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ポートアイランド・研究機関</h3>
              <p className="text-sm text-slate-600">
                神戸は医療・バイオ・研究機関の集積が進んでおり、医療・ライフサイエンス領域のIT求人が見られます。専門性の高い職種に関心がある人に向いた環境です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">製造業・重工業の拠点</h3>
              <p className="text-sm text-slate-600">
                兵庫には重工業・電機・精密機器メーカーの本社・開発拠点が立地します。組込み・IoT・業務システム刷新など、ハードウェアに近い領域のエンジニア求人が見られます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">播磨（明石・姫路方面）</h3>
              <p className="text-sm text-slate-600">
                播磨エリアは製造業のDX需要が中心です。地域の製造業のIT部門や中小IT企業の求人が見られ、業務知識を活かした転職の受け皿になります。
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              神戸・兵庫のIT市場を俯瞰すると、最大の特徴は「製造業の集積」と「大阪都市圏への近さ」の二点です。兵庫には重工業・電機・精密機器・医療機器など、ものづくりを軸とする企業の本社・拠点が多く、その業務システム・生産管理・組込み・IoTといった領域でエンジニア需要が生まれています。こうした求人は、Web系の華やかさはないものの、長期的に腰を据えて専門性を磨ける安定した環境が多く、業務知識とITスキルの掛け合わせが評価されやすいのが利点です。
            </p>
            <p className="text-slate-600 leading-relaxed">
              一方で、神戸単独の求人母数は大阪に大きく劣ります。ここで効いてくるのが三宮〜大阪・梅田の近さです。神戸に居住しながら大阪のIT企業に通勤・リモート勤務するエンジニアは多く、実務上は「神戸＋大阪」を一つの就業圏として捉えるのが現実的です。求人を探す際も、神戸市内に限定せず大阪まで範囲を広げることで、選択肢と年収レンジの両方を確保しやすくなります。神戸の生活環境を保ちつつ、求人の母数は大阪で補うという発想が、このエリアでは特に有効です。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            神戸・兵庫を拠点にする場合、働き方は大きく3パターンに分けられます。求人数が限られるぶん、大阪を視野に入れると選択肢が広がります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>神戸・兵庫の企業に勤める：</strong> 製造業・研究機関系は出社中心の傾向。専門性を深めたい人に向く。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>大阪の企業に通勤／リモート：</strong> 三宮〜大阪は通勤圏内。神戸のQOLを保ちながら大阪の求人にアクセスできる。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>東京企業にフルリモート：</strong> 居住地は神戸のまま首都圏水準の年収を狙える。全国採用のフルリモート求人が対象。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            神戸の場合、現実的に最も選択肢が広がるのは「神戸・兵庫の製造業系求人」と「大阪通勤・リモートの求人」を併せて検討するパターンです。三宮から大阪・梅田は通勤圏内のため、居住地を神戸に保ったまま大阪の事業会社・SIer・Web系まで対象を広げられます。さらにフルリモートを許容できれば、東京本社の全国採用求人も射程に入り、年収面の選択肢が一段と増えます。神戸の暮らしやすさを活かしつつ、求人の母数は大阪・東京で補うのが、このエリアでの基本戦略です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            出社頻度は同じ「ハイブリッド」でも企業によって幅が大きく、求人票の表記だけでは実態が読み取れないことが多いです。特に製造業系・研究機関系はセキュリティ要件から出社中心になりやすいため、リモートを重視するなら内定前に「現在の出社頻度」「チームのリモート比率」を必ず確認しておきましょう。
          </p>
          <p className="text-sm text-slate-500 mt-4">
            大阪の市場は
            <Link href="/area/osaka/" className="text-blue-600 hover:underline">大阪のIT転職事情</Link>
            、リモート前提の探し方は
            <Link href="/area/remote/" className="text-blue-600 hover:underline">リモートワーク求人の探し方</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリア単独の正確な平均年収データは公的に整備されていないため、ここでは全国の年代別データを基準に考え方を整理します。レバテックが公表した正社員SEの年代別平均年収（2025年）は次の通りです。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員SE 平均年収</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-3 border border-slate-200 font-medium">20代</td>
                  <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約378万円</td>
                  <td className="px-3 py-3 border border-slate-200">―</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-3 border border-slate-200 font-medium">30代</td>
                  <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約499万円</td>
                  <td className="px-3 py-3 border border-slate-200">8.01%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-3 border border-slate-200 font-medium">40代</td>
                  <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約618万円</td>
                  <td className="px-3 py-3 border border-slate-200">12.67%</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-3 border border-slate-200 font-medium">50代</td>
                  <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">約685万円</td>
                  <td className="px-3 py-3 border border-slate-200">―</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            出典：レバテック公表の年代別平均年収（2025年）。全国値であり、神戸・兵庫エリア固有の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            神戸・兵庫もこの全国平均を基準に考えられますが、地方は首都圏より相場が下がる傾向があります。一方で大阪通勤を選べば大阪水準の求人にアクセスでき、製造業の専門職は相応の待遇が期待できるケースもあります。年収を最優先するなら、大阪求人や東京企業のフルリモート求人を併用するのが有効です。年代別の考え方は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            も参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            神戸で年収を考える際は、大阪通勤を含めるかどうかで到達できるレンジが変わる点を押さえておきましょう。神戸ローカルの中堅企業と、大阪・東京拠点の全国採用枠とでは給与テーブルの前提が異なり、同じ職種でも提示額に差が出ることがあります。また製造業系は安定している一方、賞与比率や昇給の仕組みが企業ごとに大きく異なるため、提示額の数字だけでなく内訳・残業の扱い・福利厚生まで含めて総合的に比較することが大切です。エージェントには希望を具体的に伝え、提示額の背景まで確認しておきましょう。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">神戸・兵庫に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            神戸・兵庫の求人を扱うエージェントは、IT特化型と全国対応の総合型を組み合わせるのが基本です。以下はデータシートに基づく特徴です。
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
                <p className="text-sm text-blue-900 leading-relaxed">{a.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-4">
            各社の比較は
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>
            、複数登録のコツは
            <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェントの複数登録ガイド</Link>
            で解説しています。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            神戸での転職は、神戸・兵庫の求人だけで完結させようとすると選択肢が限られがちです。三宮〜大阪の近さを活かし、最初から「神戸＋大阪」を一つの就業圏として捉え、必要に応じてフルリモート求人まで対象を広げると、求人数と年収レンジの両方を確保しやすくなります。製造業系の専門求人を軸にしつつ、間口を広げておくのが現実的です。以下の4ステップを目安に進めましょう。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">1. 神戸に絞るか、大阪・リモートも含めるか決める</h3>
              <p className="text-sm text-slate-600">神戸単独は求人が限られるため、最初に対象範囲を決めると効率的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">2. IT特化＋総合型を2〜3社登録</h3>
              <p className="text-sm text-slate-600">神戸・大阪の求人提案量を比較します。<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">初回面談の準備</Link>を済ませておくとスムーズです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">3. 製造業×ITの掛け合わせを職務経歴書で言語化</h3>
              <p className="text-sm text-slate-600">業務知識を強みにするなら実績を具体的に。<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>を参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">4. 出社頻度・通勤負担を面談で確認</h3>
              <p className="text-sm text-slate-600">大阪通勤を含む場合は通勤時間も含めて条件を見極めましょう。</p>
            </div>
          </div>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              30代・40代が神戸・兵庫で転職する場合、求人数で勝負するより、専門性やマネジメント経験を評価する企業を狙うのが現実的です。神戸・兵庫の製造業・医療・研究機関系は、特定領域に深い経験を持つ人材を求める傾向があります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材が不足するとされており、経験者の需要は底堅い状況です。年齢よりも、業務知識や専門性、リード経験をどう言語化できるかが評価につながります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              家庭の事情や生活環境を優先して神戸を選ぶケースも多い年代です。年収だけでなく、通勤・出社頻度・将来のキャリアを総合して判断しましょう。
              <Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代転職の現実</Link>
              も参考になります。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">神戸での転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ 製造業・医療・研究機関のDXに関わりたい</li>
                <li>✓ 業務知識とITスキルを掛け合わせたい</li>
                <li>✓ 神戸に住みながら大阪求人も視野に入れたい</li>
                <li>✓ 生活環境・QOLを重視している</li>
                <li>✓ 腰を据えて専門性を磨きたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>・神戸市内だけで多くの求人を比較したい</li>
                <li>・Web系・SaaSの自社開発求人を層で選びたい</li>
                <li>・フルリモートを最優先したい</li>
                <li>・未経験から短期で正社員転職を目指している</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">該当する場合は、大阪求人や東京企業のフルリモート求人の併用が現実的です。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">神戸・兵庫のIT転職を始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            神戸・大阪・フルリモートを視野に、IT特化＋総合型のエージェントへ複数登録して求人提案量を比較しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "大阪のIT転職事情", href: "/area/osaka/" },
              { name: "京都のIT転職事情", href: "/area/kyoto/" },
              { name: "広島のIT転職事情", href: "/area/hiroshima/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "40代のIT転職", href: "/age/40s/" },
              { name: "リモートワーク求人の探し方", href: "/area/remote/" },
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
