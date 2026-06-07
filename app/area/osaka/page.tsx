import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "大阪のITエンジニア転職事情【2026年】特徴と進め方",
  description:
    "大阪のIT・Webエンジニア転職市場を解説。梅田・本町などのIT企業集積、製造業DX、働き方の選択肢、年代別年収の考え方、対応エージェント、30代・40代の進め方まで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：大阪のIT転職市場の特徴" },
  { id: "cluster", label: "大阪のIT企業集積と特徴" },
  { id: "workstyle", label: "働き方の選択肢" },
  { id: "salary", label: "年収の考え方（年代別）" },
  { id: "agents", label: "大阪に対応するエージェント" },
  { id: "howto", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "大阪のITエンジニアの年収はどのくらいが目安ですか？",
    a: "全国の正社員SEの年代別平均（レバテック公表・2025年）では30代約499万円、40代約618万円です。大阪は東京に次ぐ求人規模を持つ一方、首都圏より相場がやや下がる傾向があります。生活コストも東京より低いため、可処分所得で考えると差は縮まりやすいと言えます。具体的なレンジは企業規模・スキル・ポジションで大きく変わります。",
  },
  {
    q: "大阪と東京、どちらがIT転職で有利ですか？",
    a: "求人の絶対数は東京が圧倒的に多く、選択肢の広さでは東京が有利です。ただし大阪は西日本最大のIT集積地で、製造業のDX案件やSIer、Web系まで一通りそろいます。Uターン・Iターンで関西に拠点を移したい人や、フルリモートで東京企業に勤めたい人には大阪を起点にする選択も現実的です。",
  },
  {
    q: "東京から大阪へ移ると年収は下がりますか？",
    a: "一般論として地方は首都圏より相場が下がる傾向があり、同じ職種でも提示額が下がるケースはあります。一方で、東京本社のフルリモート求人に応募して年収を維持する、関西に開発拠点を持つ大手で待遇を保つ、といった手段もあります。エージェントに「年収を下げたくない」と明確に伝えることが重要です。",
  },
  {
    q: "大阪でフルリモートの求人は見つかりますか？",
    a: "Web系・SaaS企業を中心に、リモート可・フルリモートの求人は存在します。さらに東京本社の企業がフルリモート前提で全国採用するケースも増えており、居住地が大阪でも応募できる求人は広がっています。出社頻度は企業ごとに差が大きいため、面談時に必ず確認しましょう。",
  },
  {
    q: "大阪のIT転職におすすめのエージェントは？",
    a: "IT特化で全国の求人を扱うレバテックキャリア、全国対応で求人量が多いdoda ITエンジニア、サポートが手厚いマイナビIT AGENTが基本の選択肢です。複数登録して関西の求人をどれだけ提案してくれるかを比較するのがおすすめです。",
  },
  {
    q: "30代・40代でも大阪で転職できますか？",
    a: "経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅い状況です。30代・40代はマネジメントや特定領域の専門性が評価されやすく、大阪でも実務経験があれば十分にチャンスがあります。",
  },
  {
    q: "大阪で未経験からITエンジニアに転職できますか？",
    a: "可能性はありますが、経験者向け求人に比べると数は限られます。未経験歓迎求人を多く扱う総合型エージェントを併用し、ポートフォリオや学習実績で意欲を示すことが現実的なルートです。30代以降は前職スキルとの掛け合わせが評価されやすくなります。",
  },
  {
    q: "大阪の製造業DX求人にはどんなスキルが求められますか？",
    a: "クラウド（AWS/Azure）、データ分析、IoT、組込み、業務システム開発などが中心です。大阪は製造業の本社・拠点が多く、業務知識とITスキルを掛け合わせられる人材が評価されやすい傾向があります。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化で全国の求人を扱う。利用者の約80%が20〜30代という二次情報があり、技術理解に基づく提案と年収交渉が強み。内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の国内最大級。IT・通信エンジニア求人は5万件超（2026年2月時点・二次経由）。検索＋エージェント＋スカウトのハイブリッド型で、製造業DXを含む幅広い求人にアクセスしやすい。",
  },
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    point:
      "20〜30代の若手層に強く、書類添削・面接対策が手厚い。転職メディア集計では定着率97.5%との数値もある。初めての転職で丁寧なサポートを求める人に向く。",
  },
];

export default function OsakaAreaPage() {
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
        title="大阪のITエンジニア転職事情【2026年】特徴と進め方"
        description="大阪のIT・Webエンジニア転職市場を解説。IT企業集積、製造業DX、働き方、年代別年収の考え方、対応エージェント、30代・40代の進め方まで網羅します。"
        url="/area/osaka/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "大阪のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          大阪のITエンジニア転職事情【2026年】特徴と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 大阪エリアのIT転職ガイド
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：大阪は西日本最大のIT転職市場</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              大阪は東京に次ぐ規模を持つ西日本最大のIT転職エリアです。SIer・Web系・スタートアップに加え、製造業の本社・拠点が多いためDX関連の求人が厚いのが特徴です。求人の絶対数は東京に及ばず、相場も首都圏よりやや下がる傾向はありますが、生活コストを踏まえれば実質的な差は縮まります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1 list-disc list-inside">
              <li>SIerからWeb系・自社開発まで職種の幅が広く、Uターン・Iターンの受け皿になりやすい</li>
              <li>製造業DXという関西ならではの需要があり、業務知識×ITが武器になる</li>
              <li>フルリモートなら東京企業に在籍したまま大阪在住という選択も現実的</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪のIT企業集積と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            大阪のIT求人は、都心部のオフィス街とその周辺に分散して集積しています。エリアごとに企業タイプの傾向が分かれるため、自分が狙う職種に合わせて勤務地を考えると効率的です。以下は公開情報から見える定性的な傾向であり、求人数・企業数の具体的な断定ではない点にご留意ください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">梅田・グランフロント周辺</h3>
              <p className="text-sm text-slate-600">
                大阪のビジネス中枢で、IT企業のオフィスや大手企業の関西拠点が集まります。Web系・SaaSから受託開発まで幅広く、求人の選択肢が比較的多いエリアです。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">本町・淀屋橋・中之島</h3>
              <p className="text-sm text-slate-600">
                金融・商社・メーカーの本社が集まるビジネス街で、業務システムや社内DXを担う求人が見られます。安定志向で大手・準大手を狙う人に向いた立地です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">難波・心斎橋</h3>
              <p className="text-sm text-slate-600">
                Web制作・EC・スタートアップ系のオフィスが見られるエリア。裁量が大きくチャレンジングな環境を求める層に選ばれやすい傾向があります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">新大阪</h3>
              <p className="text-sm text-slate-600">
                新幹線アクセスの良さから、東京本社のSIerの支社・拠点が置かれやすいエリアです。大型の受託・SES案件に関わる求人が見られます。
              </p>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-3">関西の製造業とDX需要</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              大阪・関西圏には、パナソニックホールディングス（本社：大阪府門真市）、ダイキン工業（本社：大阪市）、クボタ（本社：大阪市）など製造業大手の本社が集まります（各社の本社所在地は公知の事実）。こうした企業のDX投資により、クラウド移行・データ活用・IoT・業務システム刷新を担うエンジニア需要が生まれています。製造業の業務知識とITスキルを掛け合わせられる人材は、関西で評価されやすい傾向があります。パナソニックの採用情報は
              <Link href="/company/panasonic/" className="text-blue-600 hover:underline">パナソニックの転職・採用ページ</Link>
              でも整理しています。
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              大阪のIT市場をもう少し俯瞰すると、職種の分布が首都圏とやや異なる点が特徴です。首都圏は自社開発のWeb系・SaaS企業の比率が高い一方、大阪は受託開発・SIer・SES、そして事業会社の社内IT・情報システム部門の比率が相対的に高い傾向があります。これは、関西に製造業・商社・金融といった伝統的な大企業の本社が集まっていることと無関係ではありません。したがって「自社プロダクトをモダンな技術で開発したい」という志向の人は求人を選り好みする必要がある一方、「業務システムや基幹システムの上流から関わりたい」「事業会社側でDXを推進したい」という志向の人には、むしろ首都圏より相性の良い求人が見つかることもあります。
            </p>
            <p className="text-slate-600 leading-relaxed">
              また、大阪は東京・名古屋・福岡と並ぶ全国採用の拠点都市でもあるため、東京本社の大手IT企業・SIerが大阪に開発拠点やデリバリーセンターを構えているケースが少なくありません。こうした拠点では、東京本社と同じ給与テーブル・評価制度が適用されることもあり、「勤務地は大阪だが処遇は全国水準」という求人に出会える可能性があります。エリアで求人を絞り込む際は、企業の本社所在地だけでなく「その企業が大阪拠点をどう位置づけているか」まで確認すると、年収面での取りこぼしを防げます。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            大阪を拠点にする場合、働き方は大きく3パターンに分けられます。どれを選ぶかで応募できる求人の幅と年収レンジが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
              <p className="text-sm text-slate-600"><strong>大阪の企業に勤める：</strong> 通勤前提〜ハイブリッドが中心。関西の企業文化に馴染みやすく、地域に根ざしたキャリアを築ける。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
              <p className="text-sm text-slate-600"><strong>東京企業にフルリモート：</strong> 居住地は大阪のまま首都圏水準の年収を狙える。全国採用のフルリモート求人が対象。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
              <p className="text-sm text-slate-600"><strong>フリーランス：</strong> 大阪は案件数が首都圏より少ないが、リモート前提の案件を含めれば選択肢は広がる。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            この3パターンは排他的ではなく、転職活動の中で並行して検討するのが現実的です。たとえば「第一志望は大阪の事業会社、ただし条件が合わなければ東京企業のフルリモートも視野に入れる」というように、軸を一つに絞り込まず幅を持たせておくと、年収と働き方の両面で選択肢を確保できます。特に30代・40代は家族の生活拠点を動かしにくいケースが多いため、居住地を大阪に固定したうえで「通勤可能な大阪求人」と「全国採用のリモート求人」を両輪で探すアプローチが有効です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            出社頻度は同じ「ハイブリッド」でも企業によって週1〜週4と幅が大きく、求人票の表記だけでは実態が読み取れないことが多いです。内定前の段階で「現在の出社頻度」「チーム内のリモート比率」「将来的に出社方針が変わる可能性」をエージェント経由で確認しておくと、入社後のミスマッチを避けられます。
          </p>
          <p className="text-sm text-slate-500 mt-4">
            リモート前提で探す場合は、
            <Link href="/area/remote/" className="text-blue-600 hover:underline">リモートワーク求人の探し方</Link>
            も合わせて参考にしてください。
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
            出典：レバテック公表の年代別平均年収（2025年）。全国値であり、大阪エリア固有の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            大阪はこの全国平均に対し、一般論として地方は首都圏より相場が下がる傾向があります。一方で大阪の家賃・生活コストは東京より低めのため、可処分所得で見れば差は縮まりやすいと言えます。年収を最優先するなら、東京企業のフルリモート求人を併用するのが有効です。年代別の詳しい考え方は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            も参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            年収を考える際は、提示額の数字だけでなく前提条件も合わせて見ることが大切です。みなし残業の有無、賞与の比率、固定残業時間、リモート手当や通勤補助の扱いなどによって、同じ提示額でも手取りや働きやすさは大きく変わります。特に大阪では「東京拠点と同じ給与テーブルが適用される全国採用枠」と「大阪ローカルの給与テーブル」が同じ求人サイト上に並ぶことがあり、額面が近くても背景が異なるケースがあります。エージェントを通じて、提示額の内訳と昇給の見込みまで確認しておくと、入社後のギャップを防げます。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            大阪の求人を扱うエージェントは、IT特化型と全国対応の総合型を組み合わせるのが基本です。以下はデータシートに基づく特徴です。
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
            で詳しく解説しています。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            大阪での転職は、基本的な流れ自体は他エリアと変わりませんが、「どこまで対象範囲を広げるか」を最初に決めておくと活動がスムーズになります。エリアと働き方の軸が定まらないまま動き出すと、エージェントから提案される求人の方向性がぶれ、比較検討に時間がかかってしまうためです。以下の4ステップを目安に進めると、限られた時間でも効率よく選択肢を絞り込めます。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">1. 軸を決める（勤務地・働き方・年収）</h3>
              <p className="text-sm text-slate-600">大阪通勤か、東京企業フルリモートか。最初に方針を固めると求人の絞り込みが速くなります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">2. IT特化＋総合型を2〜3社登録</h3>
              <p className="text-sm text-slate-600">関西求人の提案量を比較し、相性の良い担当を見極めます。<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">初回面談の準備</Link>を済ませておくと効率的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">3. 職務経歴書を整える</h3>
              <p className="text-sm text-slate-600">関西の製造業DXを狙うなら業務知識との掛け合わせを強調。<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>を参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1 text-sm">4. 出社頻度・年収を面談で確認</h3>
              <p className="text-sm text-slate-600">リモート可否は企業差が大きいため、内定前に必ず実態を確認します。</p>
            </div>
          </div>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              30代・40代が大阪で転職する場合、若手と同じ土俵で求人数を競うより、これまでの経験を活かせるポジションを狙うのが現実的です。大阪は製造業・金融・商社などの本社・拠点が多く、業務知識を持つエンジニアやマネジメント経験者の受け皿があります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材が不足するとされており、経験者の需要は底堅い状況です。年齢を理由に消極的になるより、特定領域の専門性やリード経験を言語化することが評価につながります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Uターン・Iターンで家庭の事情を優先するケースも多い年代です。年収だけでなく通勤・出社頻度・将来のキャリアを総合して判断しましょう。詳しくは
              <Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代転職の現実</Link>
              も参考になります。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">大阪での転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ 関西にUターン・Iターンしたい</li>
                <li>✓ 製造業・金融・商社など事業会社のDXに関わりたい</li>
                <li>✓ 業務知識とITスキルを掛け合わせたい</li>
                <li>✓ 東京より生活コストを抑えて暮らしたい</li>
                <li>✓ 大阪通勤とリモートを柔軟に組み合わせたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>・特定領域の自社開発求人を数多く比較したい</li>
                <li>・現職と同水準以上の高年収を最優先したい</li>
                <li>・先端技術スタックの求人を幅広く選びたい</li>
                <li>・未経験から短期で正社員転職を目指している</li>
              </ul>
              <p className="text-xs text-slate-500 mt-3">該当する場合は、東京企業のフルリモート求人の併用を検討すると選択肢が広がります。</p>
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
          <h2 className="text-xl font-bold mb-3">大阪のIT転職を始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化＋総合型のエージェントに複数登録し、関西の求人提案量を比較するところから。
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
              { name: "京都のIT転職事情", href: "/area/kyoto/" },
              { name: "神戸のIT転職事情", href: "/area/kobe/" },
              { name: "東京のIT転職事情", href: "/area/tokyo/" },
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
