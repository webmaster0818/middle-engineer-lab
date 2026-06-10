import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "CISSPは転職に効くか｜セキュリティ管理職の加点資格と年収【2026年】";
const PAGE_DESC =
  "ISC2のCISSP（Certified Information Systems Security Professional）を、セキュリティ経験者・管理職志望者の加点資格という観点から30代・40代向けに解説。受験料749 USD、5年の実務要件とEndorsement、Associate of ISC2、3年・120CPEの更新まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：CISSPは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "requirements", label: "前提要件：5年実務とEndorsement" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "上位資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝管理職への加点装置" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "CISSPは40代の転職で意味がありますか？",
    a: "意味があります。CISSPはセキュリティ実務を前提とした上位資格で、特にセキュリティ管理職・マネジメント層・高年収帯で評価されます。5年の実務経験を要件とするため、経験豊富な30〜40代こそ価値を出しやすい資格です。CISO候補・セキュリティ責任者・コンサルといった役割への移行で、客観的な専門性の証明として機能します。ただし資格単体ではなく、セキュリティ実務とセットで効く点が前提です。",
  },
  {
    q: "CISSPの受験料はいくらですか？",
    a: "CISSPの試験登録料は749 USD（米州ほか標準価格）です（ISC2公式、2026年6月時点）。日本円の支払額は為替で変動します。これに加え、認定維持のための年会費（AMF）が別途かかります。受験料が高額なため、十分な学習計画と合格の見込みを立ててから申し込むのが現実的です。",
  },
  {
    q: "CISSPの前提要件（実務経験）は何ですか？",
    a: "CISSPは、8ドメインのうち2つ以上で累計5年の有給・常勤の実務経験が必要です（特定の学位や認定保有で1年分を免除可能）。さらに合格後にISC2の正会員によるEndorsement（推薦）が必要です。実務経験がまだ足りない場合は、先に試験に合格して「Associate of ISC2」となり、その後最大6年以内に必要な実務経験を満たす道があります（ISC2公式、2026年6月時点）。",
  },
  {
    q: "CISSPに有効期限はありますか？",
    a: "認定そのものに失効する固定期限はありませんが、維持には3年ごとに120 CPE（継続教育）クレジットの取得と年会費の支払いが必要です（年間40 CPEが目安）。CPEや年会費を怠ると認定が停止・失効します。長期的に維持するコストと手間を前提に取得を計画するのが賢明です（ISC2公式、2026年6月時点）。",
  },
  {
    q: "CISSPの合格率はどのくらいですか？",
    a: "ISC2は試験ごとの合格率を公表していません。したがって当サイトでは具体的な合格率の数値は提示しません（創作を避けるため）。試験はCAT（コンピュータ適応型）方式で、最小100問〜最大150問、最大3時間です。8ドメインの広範な知識と実務的判断が問われるため、相応の準備が必要とされます。",
  },
  {
    q: "セキュリティ未経験でもCISSPは取れますか？",
    a: "試験自体は受験できますが、未経験では実務要件を満たせないため、合格しても正式なCISSPにはならず「Associate of ISC2」という扱いになります。未経験からセキュリティ職を目指す場合は、まず実務に就き、入口資格や応用情報などで基礎を固めてからCISSPを狙うのが現実的です。CISSPは経験者向けの上位資格と理解してください。",
  },
];

const overviewTable = [
  ["主催", "ISC2（International Information System Security Certification Consortium）"],
  ["位置づけ", "セキュリティの上位・マネジメント寄り資格"],
  ["受験料", "749 USD（標準価格・別途年会費AMF）"],
  ["試験形式", "CAT（適応型）／最小100問〜最大150問／最大3時間"],
  ["前提要件", "8ドメイン中2つ以上で累計5年の実務（1年免除可）＋Endorsement"],
  ["実務不足時", "Associate of ISC2として最大6年以内に要件充足"],
  ["有効期限", "3年ごとに120 CPE＋年会費で維持（怠ると失効）"],
  ["合格率", "ISC2非公表（当サイトは創作しません）"],
];

export default function CisspCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/cissp/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "CISSP" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CISSPは転職に効くか｜セキュリティ管理職の加点資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ISC2の上位認定CISSPの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          CISSP（Certified Information Systems Security Professional）は、ISC2が認定する<strong>情報セキュリティの代表的な上位資格</strong>です。本記事は「CISSPを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『セキュリティ管理職・上位職への加点資格』</strong>という性格を軸に、高年収帯での評価・5年実務要件・更新コストを含め、公式情報をもとに整理します。資格単体では効かないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ISC2 公式（isc2.org）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CISSPは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              CISSPは<strong>「セキュリティ経験者・管理職志望者の加点資格」</strong>です。入口資格とは性格が異なり、すでにセキュリティ実務経験のあるミドルが<strong>管理職・上位職・高年収帯へ役割を広げる土台</strong>として最も効きます。5年の実務要件があること自体が、経験者向け資格であることを物語っています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>セキュリティ実務経験のある30〜40代</strong>：管理職・CISO候補への土台・専門性の証明として加点される</li>
              <li>② <strong>未経験のミドル</strong>：実務要件を満たせず入口には不向き。まず実務と基礎資格を固めるべき</li>
              <li>③ <strong>高年収・上位職志望</strong>：マネジメント・コンサル領域で国際的に通用する権威性を持つ</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・有効期限）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: ISC2 公式（isc2.org、2026年6月時点）。試験登録料は749 USD（標準価格）で、別途認定維持の年会費（AMF）がかかります。試験はCAT（適応型）方式で最小100問〜最大150問、最大3時間。8ドメインの広範な知識が問われます。認定維持には3年ごとに120 CPEクレジットの取得が必要です。合格率はISC2が公表していないため、当サイトでは数値を創作していません。
          </p>
        </section>

        {/* 前提要件 */}
        <section id="requirements" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">前提要件：5年実務とEndorsement</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CISSPの最大の特徴は、試験合格だけでは認定されない点です。正式なCISSPになるには、実務経験とEndorsement（推薦）の両方を満たす必要があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>実務経験</strong>：8ドメイン中2つ以上で累計5年の有給・常勤実務（学位・特定認定で1年免除可）</li>
              <li>・<strong>Endorsement</strong>：合格後、ISC2正会員による推薦が必要（推薦自体に追加料金はなし）</li>
              <li>・<strong>実務不足時</strong>：先に合格して「Associate of ISC2」になり、最大6年以内に要件を満たす</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: ISC2 公式（isc2.org、2026年6月時点）。実務経験は試験合格の前後どちらで満たしてもよく、足りない場合はAssociate of ISC2として猶予期間内に充足できます。Endorserが見つからない場合はISC2自身が推薦する仕組みもあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CISSPは高年収帯のセキュリティ職・管理職で評価される資格として知られますが、CISSP保有者に限定した日本国内の公的な年収統計は存在しません。したがって当サイトでは<strong>CISSP単独の年収数値は提示しません</strong>。年収はセキュリティ実務の深さ・役割・マネジメント範囲で決まります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・CISSP保有者限定の国内公的年収統計は<strong>存在しない（創作しない）</strong></li>
              <li>・評価される領域：<strong>セキュリティ管理職・CISO候補・コンサルなど高年収帯</strong></li>
              <li>・実態：<strong>年収は実務経験・役割で決まり、CISSPは権威性の補強材</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を参考にしてください。CISSPはセキュリティ上位職での評価が高い資格ですが、正確な保有者平均年収の公開データは乏しいため、当サイトでは断定を避け、実務経験との掛け算で評価することを推奨します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "セキュリティ管理職・CISO候補への登用", d: "8ドメインを横断する体系知識が、組織のセキュリティを統括するマネジメント層への適性を裏付ける。" },
              { t: "国際的な権威性の客観証明", d: "CISSPは世界的に認知された上位資格で、外資・グローバル案件でも通用する専門性の証明になる。" },
              { t: "セキュリティコンサル・監査領域", d: "リスクマネジメント・ガバナンスの知識が、コンサルティングや監査ポジションで評価される。" },
              { t: "資格手当・評価制度の対象", d: "CISSPを資格手当・昇格要件に設定する企業があり、社内評価の根拠になりやすい。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CISSPが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "セキュリティマネージャー／CISO候補", d: "組織のセキュリティ戦略・体制を統括する立場。8ドメインの体系知識が意思決定の土台になる。" },
              { t: "セキュリティコンサルタント", d: "リスク評価・ガバナンス・コンプライアンスを助言する立場。国際資格の信頼性が提案力を高める。" },
              { t: "セキュリティアーキテクト／上級SE", d: "セキュアな基盤設計を担う立場。設計判断の根拠として上位資格が評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            セキュリティ方向のキャリアは<Link href="/skill/security/" className="text-blue-600 hover:underline">セキュリティエンジニア転職ガイド</Link>、マネジメント方向は<Link href="/skill/pm/" className="text-blue-600 hover:underline">PM・マネジメント転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 上位資格としての活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上位資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CISSPは「入口資格」ではなく「上位の加点資格」です。この前提を理解すると、入口資格や国内の基礎資格とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">基礎・入口資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CISSP（上位の加点資格）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "未経験〜若手・基礎の証明", "セキュリティ実務5年以上の経験者"],
                  ["狙い", "セキュリティ職への入口・基礎", "管理職・上位職・高年収帯への土台"],
                  ["効き方", "書類通過・間口を広げる", "マネジメント登用・国際的な権威性"],
                  ["要件", "受験のみで取得可能なものが多い", "5年実務＋Endorsement＋3年ごと120CPE"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            活用戦略は3つに整理できます。第一に<strong>管理職・上位職への足がかり</strong>。8ドメインを横断する体系知識で、組織のセキュリティを統括する適性を示せます。第二に<strong>国際的な権威性</strong>。CISSPは世界的に認知され、外資・グローバル案件でも通用します。第三に<strong>高年収帯での差別化</strong>。セキュリティ管理職・コンサルの求人で、専門性の客観的な裏付けになります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。CISSPは<strong>受験料が749 USDと高額で、実務5年要件と3年ごと120CPE・年会費という維持コストがかかります</strong>。効果が出るのは「セキュリティ実務 × 資格」の掛け算が成立したときで、未経験者がいきなり狙う資格ではありません。逆に言えば、すでにセキュリティ現場経験があり管理職・上位職を目指す30〜40代にとっては、投資する価値が明確な資格です。基礎が不安な場合は、まず<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>や<Link href="/cert/security-specialist/" className="text-blue-600 hover:underline">情報処理安全確保支援士</Link>で土台を固めてから臨むのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝管理職への加点装置</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              CISSPは、入口資格とは<strong>立ち位置が逆</strong>です。入口資格が「セキュリティ職に入るための入口」なのに対し、CISSPは<strong>「すでに現場にいる経験者が、管理職・上位職へ役割を上げるための加点装置」</strong>として最も効きます。5年の実務要件がある以上、経験豊富な30〜40代こそ価値を出しやすい資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。CISSPを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「セキュリティ実務 × 資格」の掛け算</strong>のとき。インシデント対応・設計・ガバナンスなどの実務と組み合わせて初めて、管理職ポジションや高年収帯という形で結実します。さらに受験料・年会費・CPE取得という継続コストも、長期的に維持する前提で計画する必要があります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "8ドメインを体系的に学習", d: "リスク管理・資産・アーキテクチャ・ネットワーク・IAM・運用など8ドメインを公式ガイドで網羅する。" },
              { n: "STEP 2", t: "CAT形式に対応し合格", d: "適応型試験は実務的な判断を問う。模試で出題傾向に慣れ、最大3時間の集中力も準備する。" },
              { n: "STEP 3", t: "Endorsement→更新計画", d: "合格後、5年実務とEndorsementで正式認定。3年ごと120CPE・年会費の維持計画を立てる。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-blue-600 shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            前段の基礎が不安なら<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>や国家資格の<Link href="/cert/security-specialist/" className="text-blue-600 hover:underline">情報処理安全確保支援士</Link>から、基盤・ネットワーク側を補強するなら<Link href="/cert/ccnp/" className="text-blue-600 hover:underline">CCNP</Link>、クラウドセキュリティを見据えるなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定</Link>との組み合わせも有効です。
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
          <h2 className="text-xl font-bold mb-3">セキュリティ管理職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            CISSPを活かせる管理職・上位セキュリティ求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "情報処理安全確保支援士の転職価値", href: "/cert/security-specialist/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "CCNPの転職価値", href: "/cert/ccnp/" },
              { name: "PM・マネジメント転職ガイド", href: "/skill/pm/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
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
