import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "CCNPは転職に効くか｜ネットワーク中級者の加点資格と年収【2026年】";
const PAGE_DESC =
  "CiscoのプロフェッショナルレベルCCNP（Cisco Certified Network Professional）を、ネットワーク経験者の加点資格という観点から30代・40代向けに解説。受験料、コア＋コンセントレーション試験の構成、3年の有効期限、実務とセットで効く理由を限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：CCNPは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "CCNAとの違いと活用戦略" },
  { id: "middle", label: "30代・40代の価値＝経験者の加点装置" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "CCNPは40代の転職で意味がありますか？",
    a: "意味があります。CCNPはCCNAのような入口資格ではなく、ネットワーク実務経験を前提とした『プロフェッショナルレベル』の加点資格です。すでにネットワーク構築・運用の経験がある30〜40代が、設計・上位運用へ役割を広げる土台として機能します。ただし資格単体で年収が跳ねるわけではなく、実機での構築・トラブルシュート経験との掛け算が前提です。",
  },
  {
    q: "CCNPの受験料はいくらですか？",
    a: "CCNP Enterpriseの場合、コア試験（350-401 ENCOR）が400 USD、コンセントレーション試験が1科目300 USDで、合計約700 USDが目安です（Cisco公式、2026年6月時点）。日本円の支払額は為替や税で変動します。なお試験は英語圏価格を基準にしているため、円安局面では負担が大きくなる点に注意が必要です。",
  },
  {
    q: "CCNPに有効期限はありますか？",
    a: "あります。CCNP認定の有効期限は取得から3年です。維持するには、有効期限内にCiscoの再認定試験に合格するか、継続教育（CE：Continuing Education）クレジットを取得する必要があります。基本情報・応用情報のような国家資格と違い、放置すると失効する点は転職タイミングと合わせて管理が必要です（Cisco公式、2026年6月時点）。",
  },
  {
    q: "CCNAを飛ばしていきなりCCNPを受けられますか？",
    a: "受けられます。現在のCisco認定制度ではCCNPの前提資格としてCCNAの保有は必須ではありません。ただしCCNPはコア試験＋コンセントレーション試験の2科目構成で難度が高く、CCNA相当の基礎知識と実務経験がないと合格は困難です。実務経験が浅い場合は、まずCCNAで土台を作るのが現実的です。",
  },
  {
    q: "CCNPの合格率はどのくらいですか？",
    a: "Ciscoは試験ごとの合格率を公表していません。したがって当サイトでは具体的な合格率の数値は提示しません（創作を避けるため）。一般にプロフェッショナルレベルはアソシエイト（CCNA）より難度が高く、コア試験は範囲が広い点が知られています。学習時間の目安は前提知識により大きく異なります。",
  },
  {
    q: "CCNPはクラウド時代でも価値がありますか？",
    a: "あります。オンプレからクラウドへの移行が進んでも、データセンター・拠点間接続・SD-WAN・ハイブリッド環境のネットワーク設計需要は残ります。むしろクラウドとオンプレをつなぐ中級〜上位のネットワーク知識は引き続き評価されます。クラウド側のスキルと組み合わせると市場価値が高まります。",
  },
];

const overviewTable = [
  ["主催", "Cisco Systems"],
  ["位置づけ", "プロフェッショナルレベル（CCNAの上位）"],
  ["受験料", "コア400 USD＋コンセントレーション300 USD＝約700 USD（Enterprise例）"],
  ["構成", "コア試験1科目＋コンセントレーション試験1科目"],
  ["有効期限", "3年（再認定試験またはCEクレジットで更新）"],
  ["前提資格", "CCNA保有は必須ではない（ただし基礎知識・実務が前提）"],
  ["合格率", "Cisco非公表（当サイトは創作しません）"],
];

export default function CcnpCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/ccnp/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "CCNP" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CCNPは転職に効くか｜ネットワーク中級者の加点資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Ciscoプロフェッショナル認定CCNPの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          CCNP（Cisco Certified Network Professional）は、Cisco認定の中で<strong>アソシエイト（CCNA）の上位に位置するプロフェッショナルレベル</strong>のネットワーク資格です。本記事は「CCNPを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『ネットワーク経験者の加点資格』</strong>という性格を軸に、設計・上位運用への土台としての価値を、公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Cisco 公式（cisco.com）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CCNPは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              CCNPは<strong>「ネットワーク経験者の加点資格」</strong>です。CCNAのような未経験入口資格とは性格が異なり、すでにネットワーク構築・運用の実務経験があるミドルが<strong>設計・上位運用へ役割を広げる土台</strong>として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>ネットワーク実務経験のある30〜40代</strong>：設計・上位運用への土台・専門性の証明として加点される</li>
              <li>② <strong>未経験のミドル</strong>：難度が高く入口には不向き。まずCCNAで土台を作るべき</li>
              <li>③ <strong>インフラ専門を深めたい人</strong>：SD-WAN・データセンター等の専門領域を体系化できる</li>
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
            出典: Cisco 公式（cisco.com、2026年6月時点）。CCNPはEnterprise／Security／Data Center／Service Provider／Collaboration等のトラックがあり、いずれもコア試験1科目＋コンセントレーション試験1科目の構成です。CCNP Enterpriseの場合はコア試験（350-401 ENCOR）400 USDとコンセントレーション試験300 USDで合計約700 USDが目安。認定の有効期限は3年で、再認定試験合格または継続教育（CE）クレジットで更新します。合格率はCiscoが公表していないため、当サイトでは数値を創作していません。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CCNP保有者に限定した公的な年収統計は存在しません。したがって当サイトでは<strong>CCNP単独の年収数値は提示しません</strong>。年収はネットワーク実務の深さ・役割・担当規模で決まり、CCNPはそれを補強する位置づけと捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・CCNP保有者限定の公的年収統計は<strong>存在しない（創作しない）</strong></li>
              <li>・年収を決めるのは<strong>設計・運用の実務経験と担当規模</strong></li>
              <li>・実態：<strong>CCNPは中級〜上位ネットワーク職の専門性を裏付ける補強材</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を参考にしてください。CCNP保有を条件にした正確な平均年収は公開データが乏しいため、当サイトでは断定を避け、実務経験との掛け算で評価することを推奨します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "設計・上位運用への配置転換", d: "ルーティング・スイッチング・SD-WANなどの中級〜上位知識を体系的に示し、設計担当への移行で加点される。" },
              { t: "インフラ専門性の客観証明", d: "CCNAを超えるプロフェッショナルレベルの認定が、ネットワーク専門職としての深さを裏付ける。" },
              { t: "資格手当・SIerの評価制度", d: "CiscoパートナーやSIerではCCNP保有を評価・手当の対象とする企業が多く、社内評価の根拠になりやすい。" },
              { t: "提案・上流案件への参画", d: "ネットワーク設計提案やマルチベンダー案件で、認定資格が信頼性の担保として働く。" },
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
            CCNPが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "ネットワークエンジニア（設計寄り）", d: "拠点間接続・データセンター・SD-WANの設計を担う。CCNPの体系知識が設計判断の土台になる。" },
              { t: "インフラエンジニア／基盤担当", d: "ネットワークを含むITインフラ全体を見る立場。中級〜上位のネットワーク知識が信頼性を高める。" },
              { t: "プリセールス・提案エンジニア", d: "Cisco製品を扱うSIer・パートナーでの提案職。認定資格が技術的信頼の裏付けになる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            ネットワーク方向のキャリアは<Link href="/skill/network/" className="text-blue-600 hover:underline">ネットワークエンジニア転職ガイド</Link>、基盤全体は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* CCNAとの違いと活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CCNAとの違いと活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CCNPは「入口資格」ではなく「加点資格」です。この前提を理解すると、入口資格であるCCNAとは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CCNA（アソシエイト・入口）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CCNP（プロフェッショナル・加点）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "未経験〜若手・ネットワーク入門者", "ネットワーク実務経験のある中堅"],
                  ["狙い", "ネットワーク職への入口・基礎の証明", "設計・上位運用への土台・専門性の証明"],
                  ["構成", "1科目（200-301 CCNA）", "コア試験＋コンセントレーション試験の2科目"],
                  ["難度", "基礎〜入門レベル", "プロフェッショナルレベル（範囲が広い）"],
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
            活用戦略は3つに整理できます。第一に<strong>設計・上位運用への足がかり</strong>。ルーティング・スイッチングの深い理解とSD-WANなどの専門知識を客観的に示せます。第二に<strong>トラック選択による専門化</strong>。Enterprise／Security／Data Centerなどから自分の実務に合うコンセントレーションを選び、専門性を尖らせられます。第三に<strong>SIer・パートナーでの評価・手当</strong>。Cisco製品を扱う現場ではCCNP保有が評価対象になりやすく、実利があります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。CCNPは<strong>取得しても単体で年収が跳ねる資格ではありません</strong>。あくまで実機での構築・トラブルシュート経験を補強する位置づけで、効果が出るのは「経験 × 資格」の掛け算が成立したときです。また有効期限が3年であり、更新を怠ると失効します。逆に言えば、すでにネットワーク現場経験があり設計・上位運用を目指す30〜40代にとっては、投資する価値が明確な資格です。基礎が不安な場合は、まず<Link href="/cert/ccna/" className="text-blue-600 hover:underline">CCNA</Link>で土台を固めてから臨むのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝経験者の加点装置</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              CCNPは、CCNAのような<strong>未経験の入口資格とは立ち位置が逆</strong>です。CCNAが「ネットワーク職に入るための入口」なのに対し、CCNPは<strong>「すでに現場にいる経験者が、設計・上位運用へ役割を上げるための加点装置」</strong>として最も効きます。ネットワーク実務経験のある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。CCNPを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。実機での構築・運用・トラブルシュート経験と組み合わせて初めて、設計ポジションや資格手当という形で結実します。さらに有効期限が3年である点も、転職や更新のタイミングと合わせて計画的に管理する必要があります。
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
              { n: "STEP 1", t: "トラックとコンセントレーションを選ぶ", d: "Enterprise／Security／Data Centerなどから自分の実務に合うトラックと専門科目を決める。" },
              { n: "STEP 2", t: "コア試験を実機演習で固める", d: "コア試験は範囲が広い。ルーティング・スイッチング・自動化を実機・シミュレータで反復する。" },
              { n: "STEP 3", t: "コンセントレーションで専門化→3年更新を計画", d: "専門科目に合格してCCNP認定。有効期限3年を見据え、再認定やCEクレジットの計画も立てる。" },
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
            前段の基礎が不安なら<Link href="/cert/ccna/" className="text-blue-600 hover:underline">CCNA</Link>から、サーバー・OS側を補強するなら<Link href="/cert/lpic/" className="text-blue-600 hover:underline">LPIC／LinuC</Link>、クラウド連携を見据えるなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定</Link>との組み合わせも有効です。セキュリティ方向に進むなら<Link href="/cert/cissp/" className="text-blue-600 hover:underline">CISSP</Link>も視野に入ります。
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
          <h2 className="text-xl font-bold mb-3">ネットワーク・インフラ職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            CCNPを活かせる設計・上位運用求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "CCNAの転職価値", href: "/cert/ccna/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
              { name: "CISSPの転職価値", href: "/cert/cissp/" },
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
