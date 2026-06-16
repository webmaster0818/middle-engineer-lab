import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "CCNAは転職に使えるか｜年代別の価値・年収・取得ルート【2026年】";
const PAGE_DESC =
  "Cisco認定CCNAが転職で評価される場面を、未経験入口資格としての位置づけから30代・40代向けに整理。受験概要、保有者の年収相場（出典明記）、未経験ルートの現実、併取得すべき資格まで正直に解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：CCNAは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収相場（年代・レベル別）" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "求人例とポジション" },
  { id: "vendor", label: "ベンダー資格としての特性と注意点" },
  { id: "middle", label: "30代・40代の価値＝実務×資格" },
  { id: "steps", label: "取得3ステップ／併取得すべき資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "40代からCCNAを取る意味はありますか？",
    a: "「資格単体で年収が上がる」という意味では薄いですが、ネットワーク領域への入口を示す証明としては意味があります。CCNAはもともと未経験〜若手の入口資格という性格が強く、40代の場合は『CCNA＋なぜこの年齢でインフラ職に移るのか』という納得感のあるストーリーが必須になります。前職でのIT運用・保守経験、マネジメント経験と組み合わせて初めて評価につながると考えてください。",
  },
  {
    q: "未経験・無資格でもCCNAがあれば転職できますか？",
    a: "可能性は上がりますが、CCNAだけで内定が確約されるわけではありません。インフララボの集計（参考値）では、未経験かつ無資格の想定年収が280〜320万円なのに対し、未経験＋CCNA保有では330〜370万円とされ、入口の年収・通過率に差が出る傾向があります。ただしこれは20代を中心とした傾向で、30〜40代未経験はさらにポートフォリオや志望動機の説得力が問われます。",
  },
  {
    q: "CCNAの合格点は何点ですか？",
    a: "Ciscoは200-301の合格点を公式には非公開としています。通説として1000点満点中825点前後（約70%）が目安と語られますが、これはあくまで受験者間で共有される目安であり、公式な基準ではない点に注意してください（cisco.com、2026年6月時点）。",
  },
  {
    q: "CCNAに有効期限はありますか？",
    a: "あります。CCNAの有効期限は取得から3年で、期限内に再認定（同等以上の試験合格や継続教育）が必要です。ベンダー資格は実務に直結する一方で有効期限がある点が、IPA系の国家資格（有効期限なし）との大きな違いです（cisco.com、2026年6月時点）。",
  },
  {
    q: "CCNAとLPIC、どちらを先に取るべきですか？",
    a: "目指す領域で選びます。ネットワーク機器（ルーター・スイッチ）の構築・運用に進みたいならCCNA、Linuxサーバーの構築・運用やクラウド基盤に進みたいならLPIC/LinuCが入口になります。インフラエンジニアは両方の知識が活きるため、最終的には片方を取得して実務に入り、もう片方を後追いするのが現実的です。",
  },
  {
    q: "CCNAの学習はどのくらいの期間が必要ですか？",
    a: "前提知識や学習時間によって幅がありますが、未経験から独学の場合はおおむね3〜6か月が一つの目安とされます。重要なのは座学だけで終わらせず、Cisco Packet Tracerなどのシミュレータや実機でコマンドを打ち、手を動かすことです。30〜40代は学習時間の確保が課題になりやすいため、平日の隙間時間と休日のハンズオンを組み合わせ、無理のない計画を立てることをおすすめします。",
  },
];

const salaryTable = [
  ["未経験＋無資格", "約280〜320万円", "入口の想定年収。間口は広いが単価は低い"],
  ["未経験＋CCNA", "約330〜370万円", "資格で入口の通過率・初年度年収がやや上がる"],
  ["運用・監視（実務あり）", "約350〜450万円", "監視・障害一次対応など運用フェーズ"],
  ["構築・設計（実務あり）", "約500〜700万円", "設計・構築を任される中核層。CCNP級が視野に"],
];

const overviewTable = [
  ["主催", "Cisco Systems"],
  ["試験コード", "200-301 CCNA"],
  ["試験時間", "120分"],
  ["受験料", "300 USD（約42,900〜47,000円・為替変動あり）"],
  ["合格点", "非公開（通説825/1000・約70%は『目安』）"],
  ["有効期限", "3年（再認定が必要）"],
  ["言語", "日本語／英語"],
];

export default function CcnaCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/ccna/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "CCNA" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CCNAは転職に使えるか｜年代別の価値・年収・取得ルート【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Cisco認定CCNAの転職価値を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          CCNA（Cisco Certified Network Associate）は、ネットワークの基礎を体系的に証明できるベンダー資格です。本記事は「CCNAを取れば転職で有利になるか」という疑問に対し、未経験の入口資格という性格を踏まえ、年代と経験の有無で評価がどう変わるかを公開データと公式情報をもとに整理します。資格単体の効果を誇張せず、限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Cisco 公式（cisco.com）",
            "インフララボ 年収集計（参考値）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CCNAは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              CCNAは<strong>「未経験〜若手がネットワーク／インフラ職に入るための入口資格」</strong>です。30〜40代の評価は、経験の有無で大きく分かれます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>未経験のミドル</strong>：CCNAは間口を広げるが、『なぜこの年齢でインフラ職か』の納得感とセットで初めて効く</li>
              <li>② <strong>IT運用・保守の経験者</strong>：基礎の客観証明として機能し、構築・設計フェーズへのステップになる</li>
              <li>③ <strong>共通</strong>：資格はスタートライン。実機・検証環境で手を動かした実績を必ず添える</li>
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
            出典: Cisco 公式（cisco.com、2026年6月時点）。受験料は米ドル建てのため、為替により円換算額は変動します。合格点は公式に非公開で、通説の数値はあくまで目安です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場（年代・レベル別）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CCNA保有者の年収は、資格そのものより「実務フェーズ（運用か構築か）」で決まります。以下はインフララボの集計に基づく<strong>参考値</strong>で、断定的な数値ではありません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル・状況</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">想定年収（参考値）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryTable.map(([lv, sal, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{lv}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{sal}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: インフララボ 年収集計（参考値）。同集計ではCCNA関連企業の平均年収を385.1万円（2025）としています。母集団・算定方法が明示されない集計値のため、当サイトでは権威データではなく参考値として扱い、断定を避けています。公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "未経験者の書類スクリーニング通過", d: "ネットワーク基礎の自走学習ができる証明として、未経験応募の書類段階で『学ぶ意欲』の裏付けになる。" },
              { t: "運用・監視ポジションの歓迎要件", d: "NOC・運用監視の求人でCCNAが歓迎要件に挙がることが多く、面接でTCP/IP・ルーティングの会話が成立する。" },
              { t: "保守から構築・設計へのステップ", d: "運用経験者がCCNPやネットワーク設計案件に進む際、基礎の体系的理解を示す土台になる。" },
              { t: "資格手当・評価制度の対象", d: "企業によってはCCNAを資格手当や昇給評価の対象に設定しており、社内評価の根拠になる場合がある。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人例 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人例とポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CCNAが活きる代表的なポジションの傾向です（求人票の頻出要件をもとにした一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "ネットワーク運用・監視（NOC）", d: "24時間監視、障害一次対応、機器のリプレース作業。未経験＋CCNAの主な入口。" },
              { t: "ネットワーク構築・キッティング", d: "ルーター・スイッチの設定投入、現地作業、検証。実務1〜3年層が中心。" },
              { t: "インフラエンジニア（NW寄り）", d: "ネットワーク設計、社内インフラ、データセンター業務。構築設計フェーズで年収が一段上がる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            領域全体の市場感は<Link href="/skill/network/" className="text-petrol hover:underline">ネットワークエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* ベンダー資格としての特性 */}
        <section id="vendor" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ベンダー資格としての特性と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CCNAはCisco社の認定であり、IPA系の国家資格（基本情報・応用情報など）とは性格が異なります。転職戦略を立てるうえで、この違いを理解しておくと「いつ・どの資格を取るか」の判断がぶれません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CCNA（ベンダー資格）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">基本情報など（国家資格）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["実務との距離", "ネットワーク機器に直結・実務的", "幅広い基礎知識・横断的"],
                  ["有効期限", "3年（再認定が必要）", "なし（生涯有効）"],
                  ["普遍性", "Cisco製品中心。技術トレンドの影響を受ける", "特定ベンダーに依存しない"],
                  ["費用感", "受験料が高め（300USD・為替変動）＋更新コスト", "7,500円・更新不要"],
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
            正直なデメリットとして、CCNAには<strong>3年の有効期限と再認定コスト</strong>があります。実務でネットワークに関わり続ける人には更新が自然ですが、取得後にネットワークから離れると、せっかくの認定が失効してしまう点は要注意です。受験料も米ドル建てで300USD（約42,900〜47,000円・為替変動あり）と、国家資格の7,500円と比べて高めです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方の強みは<strong>実務直結性</strong>です。ルーティング・スイッチング・サブネット設計といったCCNAの学習範囲は、運用・構築の現場でそのまま使えます。「資格のための勉強」が「現場で使う知識」と一致しやすいため、学習投資が実務に還元されやすいのがベンダー資格の利点です。費用と有効期限を許容できるなら、ネットワーク／インフラ職を目指す人にとって合理的な選択になります。クラウド方向に広げるなら、同じベンダー資格の<Link href="/skill/aws/" className="text-petrol hover:underline">AWS認定の活かし方</Link>も併せて検討してください。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝実務×資格</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              はっきり言えば、CCNAは<strong>20代の未経験者に最も効きやすい資格</strong>です。30〜40代がそのまま同じ土俵で戦うと、年齢を理由に書類で落ちるリスクがあります。ミドルがCCNAを武器にするには、<strong>「資格＋これまでの経験＋なぜ今この年齢でインフラ職を選ぶのか」</strong>という掛け算の説明が不可欠です。
            </p>
            <p>
              一方、すでにIT運用・保守の経験があるミドルにとっては、CCNAは「基礎を体系的に理解している」ことの客観証明として機能します。この層は資格を入口にするのではなく、<strong>構築・設計フェーズへ役割を上げる足がかり</strong>として活用するのが正解です。実機検証ログや小規模構成の設定例など、手を動かした証拠を必ず添えましょう。
            </p>
            <p>
              ミドルが特に意識したいのは、<strong>「資格＋年齢相応の付加価値」</strong>という発想です。20代の未経験者なら資格と意欲だけで通る求人でも、30〜40代には『チームでの調整経験』『顧客折衝』『前職での改善実績』など、年齢に見合う何かが求められます。CCNAはあくまでネットワーク基礎の証明であり、それ単体で年齢のハンデを覆すものではありません。前職で培った社会人としての強みと掛け合わせて初めて、ミドルの転職で武器になります。逆に言えば、その掛け算ができる人にとってCCNAは費用対効果の良い投資になり得ます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、未経験からの30代転職は<Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのITエンジニア転職</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／併取得すべき資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "基礎理解とテキスト学習", d: "TCP/IP、ルーティング、スイッチング、サブネット計算を体系的に学ぶ。市販テキスト1冊を軸に。" },
              { n: "STEP 2", t: "ハンズオン（実機・シミュレータ）", d: "Cisco Packet Tracerや中古機材で実際にコマンドを打つ。設定例をログとして残す。" },
              { n: "STEP 3", t: "模擬試験で仕上げ→受験", d: "出題範囲を模擬問題で詰め、弱点を潰してから受験。合格後は検証構成をポートフォリオ化する。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            併取得の方向性：サーバー／Linux側を固めるなら<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC／LinuC</Link>、IT全般の基礎知識を国家資格で補うなら<Link href="/cert/basic-info/" className="text-petrol hover:underline">基本情報技術者</Link>、クラウド基盤に広げるなら<Link href="/skill/aws/" className="text-petrol hover:underline">AWS認定</Link>が定番の組み合わせです。職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も参考にしてください。
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
            CCNAを活かせる求人や、未経験からの現実的なルートをIT特化型エージェントで確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
              { name: "基本情報技術者の転職価値", href: "/cert/basic-info/" },
              { name: "AWS認定資格の活かし方", href: "/skill/aws/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "30代未経験からのITエンジニア転職", href: "/knowledge/inexperienced-30s/" },
            ].map((item, i) => (
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
