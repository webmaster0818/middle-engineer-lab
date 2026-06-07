import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "京都のITエンジニア転職事情【2026年】特徴と進め方",
  description:
    "京都のIT・Webエンジニア転職市場を解説。任天堂をはじめとする企業集積、研究機関連携、働き方の選択肢、年代別年収の考え方、対応エージェント、30代・40代の進め方まで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：京都のIT転職市場の特徴" },
  { id: "cluster", label: "京都のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢" },
  { id: "salary", label: "年収の考え方（年代別）" },
  { id: "agents", label: "京都に対応するエージェント" },
  { id: "howto", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "京都のITエンジニアの年収はどのくらいが目安ですか？",
    a: "全国の正社員SEの年代別平均（レバテック公表・2025年）では30代約499万円、40代約618万円です。京都はメーカーや研究機関に近い専門性の高い求人がある一方、地方は首都圏より相場が下がる傾向もあります。具体的なレンジは企業規模・職種・スキルで大きく変わります。",
  },
  {
    q: "京都に任天堂の本社があるのは本当ですか？",
    a: "はい、任天堂株式会社の本社は京都市にあります（公知の事実）。ゲーム・エンタメ領域に関心がある人にとって象徴的な企業ですが、中途採用の枠は限られます。採用情報の整理は当サイトの任天堂ページも参考にしてください。",
  },
  {
    q: "京都と大阪、どちらがIT転職で有利ですか？",
    a: "求人の絶対数は大阪が多く、選択肢の広さでは大阪が有利です。京都はメーカー・研究機関・大学発スタートアップなど特色ある求人が見られます。京都に住みながら大阪の企業に通勤・リモート勤務する人も多く、両都市を合わせて探すのが現実的です。",
  },
  {
    q: "京都でフルリモートの求人は見つかりますか？",
    a: "Web系・SaaS企業を中心にリモート可の求人は存在し、東京・大阪本社の全国採用求人も対象になります。一方、ゲーム開発や研究機関、メーカー系は機密性の観点から出社中心の傾向があります。出社頻度は面談で必ず確認しましょう。",
  },
  {
    q: "京都のIT転職におすすめのエージェントは？",
    a: "IT特化で全国の求人を扱うレバテックキャリア、ゲーム・Web/IT業界に強いGeekly、全国対応で求人量が多いdoda ITエンジニアが基本の選択肢です。京都だけでなく大阪の求人も合わせて提案してもらうと選択肢が広がります。",
  },
  {
    q: "30代・40代でも京都で転職できますか？",
    a: "経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれ、経験者の需要は底堅い状況です。京都のメーカー・研究機関系は専門性やマネジメント経験が評価されやすく、30代・40代でも実務経験があればチャンスがあります。",
  },
  {
    q: "京都の研究機関・大学発スタートアップで働くには？",
    a: "AI・データ・組込みなどの専門スキルが求められる傾向があります。アカデミア発の企業はカジュアル面談を実施することも多く、技術ブログや採用ページから直接応募できるケースもあります。エージェントと直接応募を併用すると間口が広がります。",
  },
  {
    q: "ゲーム業界に転職したい場合、京都は有利ですか？",
    a: "京都はゲーム・エンタメ領域の企業集積があり、関心の高い人には魅力的なエリアです。ただし人気職種は競争率が高く、ポートフォリオや実績が重要になります。ゲーム業界に強いエージェントの活用が近道です。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化で全国の求人を扱う。技術理解に基づく提案と年収交渉が強み。内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）。京都・大阪を含む関西の求人を相談しやすい。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    point:
      "IT/Web/ゲーム業界に専門特化。提案スピードが強みで、年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。ゲーム領域に関心がある人に向く。求人は首都圏中心のため京都求人の有無は要確認。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の国内最大級。IT・通信エンジニア求人は5万件超（2026年2月時点・二次経由）。メーカー・大手のDX求人を含め幅広くカバーし、京都・大阪の求人を同時に探しやすい。",
  },
];

export default function KyotoAreaPage() {
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
        title="京都のITエンジニア転職事情【2026年】特徴と進め方"
        description="京都のIT・Webエンジニア転職市場を解説。任天堂などの企業集積、研究機関連携、働き方、年代別年収の考え方、対応エージェント、30代・40代の進め方まで網羅します。"
        url="/area/kyoto/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "京都のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          京都のITエンジニア転職事情【2026年】特徴と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 京都エリアのIT転職ガイド
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：京都は特色ある専門求人と大阪通勤圏の両立エリア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              京都はゲーム・エンタメ、メーカー、大学・研究機関といった特色ある企業が集まる一方、求人の絶対数は大阪より少ないエリアです。京都に住みながら大阪の企業へ通勤・リモート勤務するスタイルも一般的で、京都・大阪を合わせて探すのが現実的です。任天堂株式会社の本社が京都にあることは公知の事実で、ゲーム領域に関心がある人には象徴的な土地でもあります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1 list-disc list-inside">
              <li>ゲーム・メーカー・研究機関など特色ある求人があり、専門性を活かしやすい</li>
              <li>求人数は大阪に劣るため、大阪求人やフルリモート求人との併用が前提</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">京都のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            京都のIT求人は、市内中心部のビジネス街と、メーカー・研究機関の拠点が点在するエリアに分かれます。以下は公開情報から見える定性的な傾向であり、求人数・企業数の具体的な断定ではない点にご留意ください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">京都駅周辺・四条烏丸</h3>
              <p className="text-sm text-slate-600">
                京都のビジネス中心地で、SIerの拠点やWeb系・EC・スタートアップのオフィスが見られます。交通の要所で大阪・東京へのアクセスも良好です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ゲーム・エンタメ領域</h3>
              <p className="text-sm text-slate-600">
                京都はゲーム・エンタメ企業の集積で知られます。任天堂株式会社の本社が京都市にあることは公知の事実で、関連・パートナー企業を含めた裾野が広い領域です。詳しくは
                <Link href="/company/nintendo/" className="text-blue-600 hover:underline">任天堂の転職・採用ページ</Link>
                をご覧ください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">メーカー・電子部品系</h3>
              <p className="text-sm text-slate-600">
                京都には電子部品・精密機器メーカーの本社・開発拠点が立地します。組込み・IoT・業務システムなど、ハードウェアに近い領域のエンジニア求人が見られます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">大学・研究機関連携</h3>
              <p className="text-sm text-slate-600">
                京都大学をはじめ大学・研究機関が多く、AI・データ領域の大学発スタートアップが生まれやすい土壌があります。専門性の高い職種に関心がある人に向いた環境です。
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              京都のIT市場を俯瞰すると、首都圏や大阪のように「Web系・SaaSの自社開発求人が層として厚い」というより、ゲーム・エンタメ、ハードウェアに近い組込み・制御、そしてアカデミア発のAI・データ領域といった、専門性で差別化された求人が点在しているのが特徴です。求人の母数自体は大阪に大きく劣るため、「京都で働く」を主目的にすると選択肢が一気に狭まります。一方で、ゲーム開発や精密機器の組込み、研究機関との連携プロジェクトなど、特定領域で経験を深めたい人にとっては、首都圏にも引けを取らない魅力的な環境が見つかることがあります。
            </p>
            <p className="text-slate-600 leading-relaxed">
              また、京都は学生数の多い学術都市であり、大学発スタートアップやリサーチ寄りの企業がカジュアル面談を通じて人材を探すケースが見られます。こうした企業は転職エージェント経由の求人だけでなく、採用ページや技術ブログからの直接応募で出会えることも多いため、エージェント登録と並行して気になる企業を直接チェックしておくと、間口を広げられます。求人の探し方を一つの経路に依存しないことが、京都のような市場では特に重要です。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            京都を拠点にする場合、働き方は大きく3パターンに分けられます。京都は求人数が限られるぶん、大阪・東京を視野に入れると選択肢が広がります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>京都の企業に勤める：</strong> ゲーム・メーカー・研究機関系は出社中心の傾向。専門性を深めたい人に向く。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>大阪の企業に通勤／リモート：</strong> 京都〜大阪は通勤圏内。京都のQOLを保ちながら大阪の求人にアクセスできる。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>東京企業にフルリモート：</strong> 居住地は京都のまま首都圏水準の年収を狙える。全国採用のフルリモート求人が対象。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            京都の場合、現実的に最も選択肢が広がるのは「京都の特色ある求人」と「大阪通勤・リモートの求人」を併せて検討するパターンです。京都〜大阪は通勤圏内のため、居住地を京都に保ったまま大阪の事業会社・SIer・Web系まで対象を広げられます。さらにフルリモートを許容できれば、東京本社の全国採用求人も射程に入り、年収面の選択肢が一段と増えます。京都という土地のQOLを活かしつつ、求人の母数は大阪・東京で補うという発想が、このエリアでは特に有効です。
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
            出典：レバテック公表の年代別平均年収（2025年）。全国値であり、京都エリア固有の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            京都もこの全国平均を基準に考えられますが、地方は首都圏より相場が下がる傾向があります。一方でメーカー・研究機関系の専門職は相応の待遇が期待できるケースもあります。年収を最優先するなら、大阪求人や東京企業のフルリモート求人を併用するのが有効です。年代別の考え方は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            も参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            京都で年収を考える際の注意点として、メーカー・研究機関系は安定している一方で、ベンチャーやスタートアップとは給与体系・賞与・ストックオプションの考え方が大きく異なります。提示額の数字だけで比較せず、賞与比率・固定残業・福利厚生・昇給の仕組みまで含めて総合的に見ることが大切です。専門性を活かして長く働きたいのか、短期的な年収アップを狙うのかによって、選ぶべき企業タイプは変わります。エージェントには希望を具体的に伝え、提示額の内訳まで確認しておきましょう。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">京都に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            京都の求人を扱うエージェントは、IT特化型・業界特化型・全国対応の総合型を組み合わせるのが基本です。以下はデータシートに基づく特徴です。
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
            京都での転職は、求人の母数が大阪より少ないぶん「対象範囲をどう設計するか」が成否を分けます。京都市内に閉じて探すか、大阪通勤・リモートまで広げるかで、出会える求人の数も年収レンジも大きく変わります。さらに京都は研究機関・スタートアップが直接応募で人材を探すケースもあるため、エージェント任せにせず複数の経路を併用するのが効果的です。以下の4ステップを目安に進めましょう。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">1. 京都に絞るか、大阪・リモートも含めるか決める</h3>
              <p className="text-sm text-slate-600">京都単独は求人が限られるため、最初に対象範囲を決めると効率的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">2. IT特化＋業界特化＋総合型を2〜3社登録</h3>
              <p className="text-sm text-slate-600">京都・大阪の求人提案量を比較します。<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">初回面談の準備</Link>を済ませておくとスムーズです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">3. 専門領域を職務経歴書で言語化</h3>
              <p className="text-sm text-slate-600">ゲーム・組込み・AIなど専門性を活かすなら実績を具体的に。<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>を参考に。</p>
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
              30代・40代が京都で転職する場合、求人数で勝負するより、専門性やマネジメント経験を評価する企業を狙うのが現実的です。京都のメーカー・研究機関・ゲーム系は、特定領域に深い経験を持つ人材を求める傾向があります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材が不足するとされており、経験者の需要は底堅い状況です。年齢よりも、これまで積み上げた専門性とリード経験をどう言語化できるかが鍵になります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              家庭の事情や生活環境を優先して京都を選ぶケースも多い年代です。年収だけでなく、通勤・出社頻度・将来のキャリアを総合して判断しましょう。
              <Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代転職の現実</Link>
              も参考になります。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">京都での転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ ゲーム・組込み・AIなど専門領域を深めたい</li>
                <li>✓ 京都に住みながら大阪求人も視野に入れたい</li>
                <li>✓ 学術都市ならではの研究寄り企業に関心がある</li>
                <li>✓ 生活環境・QOLを重視している</li>
                <li>✓ 直接応募とエージェントを併用できる</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>・京都市内だけで多くの求人を比較したい</li>
                <li>・Web系・SaaSの自社開発求人を層で選びたい</li>
                <li>・現職と同水準以上の高年収を最優先したい</li>
                <li>・通勤負担を最小限にしたい</li>
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
          <h2 className="text-xl font-bold mb-3">京都のIT転職を始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            京都・大阪・フルリモートを視野に、IT特化＋総合型のエージェントへ複数登録して求人提案量を比較しましょう。
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
              { name: "神戸のIT転職事情", href: "/area/kobe/" },
              { name: "任天堂の転職・採用", href: "/company/nintendo/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代のIT転職", href: "/age/30s/" },
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
