import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "LPIC・LinuCは転職に効くか｜違い・年収・取得ルート【2026年】";
const PAGE_DESC =
  "Linux技術者認定のLPICとLinuCの違い、転職での評価、保有者の年収相場（出典明記）を30代・40代向けに解説。未経験入口資格としての位置づけ、CCNA・AWSとの併取得戦略まで限界も含めて正直にまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：LPIC・LinuCは誰に効くか" },
  { id: "diff", label: "LPICとLinuCの違い" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収相場（レベル別）" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "求人例とポジション" },
  { id: "vendor", label: "資格としての特性と注意点" },
  { id: "middle", label: "30代・40代の価値＝実務×資格" },
  { id: "steps", label: "取得3ステップ／併取得すべき資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "LPICとLinuC、どちらを取るべきですか？",
    a: "国内中心で働くならLinuCで十分です。LinuCはLPI-Japanが運営する国内特化の認定で、仮想化・クラウド（AWS/Docker/Kubernetes）の出題が充実しています。LPICはLPI（国際団体）が運営し国際的に通用します。実務上の評価は両者ほぼ同価値とされるため、外資・海外志向ならLPIC、国内志向ならLinuCという選び方が現実的です。",
  },
  {
    q: "40代からLPIC/LinuCを取る意味はありますか？",
    a: "Linuxはインフラ・クラウド基盤として需要が安定しているため、知識の証明として一定の意味はあります。ただしLPIC1/LinuC1は未経験〜若手の入口資格という性格が強く、40代の場合は資格単体ではなく『実務経験＋上位レベル（LPIC2/3）』の組み合わせで価値が出ます。未経験ミドルは、なぜこの年齢でインフラ職を選ぶかの説明とセットで臨む必要があります。",
  },
  {
    q: "LPIC/LinuCに有効期限はありますか？",
    a: "あります。LPIC・LinuCともに有効期限は5年で、期限内に再認定（同レベルの再受験や上位レベルの取得）が必要です。AWS認定やCCNAの3年より長めですが、ベンダー／民間資格である以上は更新が前提となります（linuc.org 等、2026年6月時点）。",
  },
  {
    q: "未経験＋LPIC1で年収はどのくらい見込めますか？",
    a: "インフララボの集計（参考値）では、未経験＋LPIC1/LinuC1取得者の平均内定年収は約370.4万円で、無資格未経験と比べて約+50万円とされています。これはあくまで母集団・算定方法が公開されていない参考値であり、保証された数値ではありません。実際は地域・企業・面接での見せ方で変動します。",
  },
  {
    q: "LPIC/LinuCはレベル1だけでも転職に使えますか？",
    a: "未経験の入口としてはレベル1（LPIC1=101+102の2試験合格）でも一定の効果があります。ただしレベル1は基礎範囲のため、運用・構築フェーズで差別化したいならレベル2、設計・上位ポジションを狙うならレベル3まで進むのが望ましいです。経験者は資格だけでなく実際のサーバー構築・運用実績を必ず添えてください。",
  },
];

const salaryTable = [
  ["LPIC1（基礎）", "約474万円", "Linux基礎運用。未経験〜若手の入口"],
  ["LPIC2（中級）", "約618万円", "構築・運用設計を任される層"],
  ["LPIC3（上級）", "約696万円", "高可用性・セキュリティなど専門領域"],
  ["未経験＋LPIC1/LinuC1", "約370.4万円", "内定平均（無資格未経験比＋約50万円）"],
];

const overviewTable = [
  ["主催", "LPIC＝LPI（国際）／LinuC＝LPI-Japan（国内特化）"],
  ["レベル1の構成", "101試験＋102試験の2試験合格"],
  ["受験料", "各16,500円（レベル1は2試験で計33,000円）"],
  ["合格基準（LPIC）", "800点満点中500点"],
  ["有効期限", "5年（再認定が必要）"],
  ["LinuCの特徴", "国内特化。仮想化／クラウド（AWS/Docker/K8s）出題が充実"],
];

export default function LpicCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/lpic/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "LPIC／LinuC" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          LPIC・LinuCは転職に効くか｜違い・年収・取得ルート【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Linux技術者認定の転職価値を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          LPICとLinuCは、どちらもLinuxの技術力を証明する認定資格です。Linuxはサーバー・クラウド基盤の中核であり、知識需要は安定しています。本記事は「LPIC/LinuCを取れば転職で有利になるか」という疑問に対し、未経験の入口資格という性格を踏まえ、年代・経験・レベルで評価がどう変わるかを公開データと公式情報をもとに整理します。資格単体の効果を誇張せず、限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "LPI-Japan 公式（linuc.org）",
            "エイジレス思考 年収集計（参考値）",
            "インフララボ 内定年収集計（参考値）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：LPIC・LinuCは誰に効くか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              LPIC/LinuCは<strong>「未経験〜若手がLinux／インフラ職に入るための入口資格」</strong>であり、上位レベルは経験者の専門性証明になります。30〜40代の評価は経験とレベルで分かれます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>未経験のミドル</strong>：レベル1は間口を広げるが、年齢相応の志望動機・ポートフォリオが必須</li>
              <li>② <strong>インフラ経験者</strong>：レベル2/3＋実務でこそ価値が出る。基礎レベル単体では武器になりにくい</li>
              <li>③ <strong>国内中心ならLinuC、国際志向ならLPIC</strong>：実務評価はほぼ同価値</li>
            </ul>
          </div>
        </section>

        {/* 違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LPICとLinuCの違い</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            両者はよく混同されますが、運営団体と射程が異なります。
          </p>
          <div className="space-y-3">
            {[
              { t: "LPIC（国際）", d: "LPI（国際団体）が運営。世界共通の認定で、外資・海外案件でも通用する。試験範囲はLinux全般を体系的にカバー。" },
              { t: "LinuC（国内特化）", d: "LPI-Japanが運営。国内市場に最適化され、仮想化・クラウド（AWS/Docker/Kubernetes）の出題が充実。国内志向ならこちらで十分。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            実務上の評価は両者ほぼ同価値とされます。働く市場（国内か外資・海外か）に合わせて選ぶのが合理的です。
          </p>
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
            出典: LPI-Japan 公式（linuc.org）ほか（2026年6月時点）。レベル1は101・102の2試験合格が必要で、受験料は各16,500円（計33,000円）です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場（レベル別）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            レベルが上がるほど年収水準も上がる傾向ですが、これは資格そのものより「対応できる実務範囲」が広がるためです。以下は集計に基づく<strong>参考値</strong>で、断定的な数値ではありません。
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
            出典: レベル別年収はエイジレス思考の集計（参考値）、未経験＋LPIC1/LinuC1の内定平均約370.4万円（無資格未経験比＋約50万円）はインフララボの集計（参考値）。いずれも母集団・算定方法が明示されない集計値のため、当サイトでは権威データではなく参考値として扱います。公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "未経験者の書類スクリーニング通過", d: "Linuxの自走学習ができる証明として、未経験応募の書類段階で意欲の裏付けになる。" },
              { t: "サーバー運用・構築ポジションの歓迎要件", d: "Webサーバー・DBサーバーの運用構築求人でLPIC/LinuCが歓迎要件に挙がることが多い。" },
              { t: "クラウド基盤への接続", d: "LinuCの仮想化・コンテナ出題はDocker/Kubernetes/AWSへの橋渡しになり、クラウド職の土台を示せる。" },
              { t: "資格手当・評価制度の対象", d: "企業によってはレベルに応じた資格手当を設定しており、社内評価・昇給の根拠になる場合がある。" },
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
            LPIC/LinuCが活きる代表的なポジションの傾向です（求人票の頻出要件をもとにした一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "Linuxサーバー運用・監視", d: "Webサーバー・DBサーバーの監視、ログ確認、障害一次対応。未経験＋レベル1の主な入口。" },
              { t: "サーバー構築・キッティング", d: "OSセットアップ、ミドルウェア導入、検証。実務1〜3年層が中心。" },
              { t: "インフラ・クラウドエンジニア", d: "オンプレ／クラウド基盤の設計・構築。LinuC上位＋実務で年収が一段上がる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            領域全体の市場感は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>、クラウド方向は<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定の活かし方</Link>を参考にしてください。
          </p>
        </section>

        {/* 資格としての特性 */}
        <section id="vendor" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格としての特性と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LPIC/LinuCは民間の認定資格であり、IPA系の国家資格（基本情報・応用情報など）とは性格が異なります。取得を検討する前に、両者の違いとデメリットを正直に把握しておきましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">LPIC／LinuC（民間資格）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">基本情報など（国家資格）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["実務との距離", "Linux運用・構築に直結・実務的", "幅広い基礎知識・横断的"],
                  ["有効期限", "5年（再認定が必要）", "なし（生涯有効）"],
                  ["費用感", "レベル1で計33,000円＋更新コスト", "7,500円・更新不要"],
                  ["射程", "LinuCは仮想化・クラウド出題が充実", "IT全般の基礎を網羅"],
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
            正直なデメリットとして、LPIC/LinuCには<strong>5年の有効期限</strong>があり、期限内に再認定しないと失効します。またレベル1だけでは基礎範囲にとどまるため、運用・構築フェーズでの差別化には弱く、レベル2・3や実務経験との組み合わせが前提になります。受験料もレベル1で計33,000円（各16,500円×2試験）と、国家資格の7,500円と比べて高めです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方の強みは<strong>需要の安定性と実務直結性</strong>です。Linuxはオンプレミスからクラウドまで、サーバー基盤の中核技術であり続けています。特にLinuCは仮想化・コンテナ（Docker/Kubernetes）・クラウド（AWS）の出題が充実しており、学習がそのままモダンなインフラ・クラウド職への橋渡しになります。費用と有効期限を許容できるなら、Linux／インフラ職を目指す人にとって投資対効果は高いといえます。クラウド方向に広げるなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定の活かし方</Link>も併せて検討してください。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝実務×資格</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              LPIC1/LinuC1は、本来<strong>未経験〜若手の入口資格</strong>です。30〜40代の未経験者がこれだけで勝負すると、年齢を理由に書類で落ちる可能性があります。ミドルが入口として使うなら、<strong>前職経験との接続点と、なぜ今インフラ職なのかの納得感</strong>を必ず添えてください。
            </p>
            <p>
              一方、インフラ経験のあるミドルにとっては、<strong>レベル2・3＋実務</strong>の組み合わせが本領です。高可用性設計やセキュリティといった上位範囲は、設計・リードポジションへの説得力になります。Linuxはオンプレからクラウドまで基盤技術として汎用性が高く、「特定企業のレガシー運用に最適化されすぎた経験」を汎用スキルへ寄せる保険にもなります。
            </p>
            <p>
              30〜40代のキャリア戦略として現実的なのは、<strong>「LinuC＋クラウド」への接続</strong>です。オンプレのLinux運用経験を持つミドルが、LinuCの仮想化・コンテナ範囲を学び、そこからAWSなどのクラウド資格へ橋渡しすれば、「オンプレ実務 × クラウド知識」という掛け算で市場価値を上げられます。年代が上がるほど、単なる作業者ではなく『移行や設計を任せられる人』としての価値が問われます。LPIC/LinuCはその土台を客観的に示す一枚として機能します。資格取得後は、検証環境の構築手順や設定ファイルをポートフォリオ化し、実務で使える知識であることを可視化しましょう。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、未経験からの30代転職は<Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代未経験からのITエンジニア転職</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／併取得すべき資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "Linux環境を手元に用意", d: "VirtualBox等で仮想マシンを立て、実際にコマンドを打てる環境を作る。手を動かす前提を整える。" },
              { n: "STEP 2", t: "101→102を順に学習", d: "市販テキストで範囲を体系的に学び、コマンド操作・設定ファイル編集を実機で繰り返す。" },
              { n: "STEP 3", t: "模擬試験→受験→成果物化", d: "模擬問題で弱点を潰して受験。合格後はWebサーバー構築などの構成を手順書・GitHubで可視化する。" },
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
            併取得の方向性：ネットワーク側を固めるなら<Link href="/cert/ccna/" className="text-blue-600 hover:underline">CCNA</Link>、クラウドに広げるなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定</Link>、IT全般の基礎を国家資格で補うなら<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者</Link>が定番です。職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">Linux・インフラ職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            LPIC/LinuCを活かせる求人や、未経験からの現実的なルートをIT特化型エージェントで確認しましょう。
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
              { name: "基本情報技術者の転職価値", href: "/cert/basic-info/" },
              { name: "AWS認定資格の活かし方", href: "/skill/aws/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "30代未経験からのITエンジニア転職", href: "/knowledge/inexperienced-30s/" },
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
