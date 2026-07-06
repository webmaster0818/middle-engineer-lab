import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Linuxスキルで転職する完全ガイド｜LPIC・年収・資格ルート【2026年】";
const PAGE_DESC =
  "Linuxスキルを軸にした転職を2026年最新データで解説。LPIC/LinuCの資格体系、LPIC→CCNA→AWSで年収600〜900万円を狙う王道ルート、具体スキル、未経験でのLPIC活用、インフラ・ネットワークとの違いを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/linux/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "まず：インフラ・ネットワークとの違い" },
  { id: "conclusion", label: "結論：Linuxスキルでの転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "LPIC / LinuC の資格体系" },
  { id: "route", label: "LPIC→CCNA→AWSの段階資格ルート" },
  { id: "skill", label: "身につける具体スキル" },
  { id: "entry", label: "未経験でのLPIC活用" },
  { id: "find", label: "求人の探し方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Linuxスキルでの転職は、インフラ・ネットワークエンジニアと何が違いますか？",
    a: "Linuxは「サーバOSを扱う基盤スキル」であり、インフラエンジニアやネットワークエンジニアという職種を支える土台です。インフラエンジニアはサーバ・OS・ミドルウェア全般、ネットワークエンジニアはルーター・スイッチ等の通信機器を主に扱います。Linuxスキルはその中でサーバ運用・構築の中核を担い、どちらの職種でも武器になります。本ページはLinux（とLPIC）を軸にした入り方・伸ばし方に絞り、職種としての全体像はインフラ・ネットワークの各ガイドへ送ります。",
  },
  {
    q: "LPICとLinuCの違いは何ですか？",
    a: "どちらもLinux技術者向けの資格で、レベル1→2→3の体系を持つ点は共通です。LPICはLPI（カナダに本部を置く団体）が運営する世界標準の資格、LinuCはLPI-Japanが日本市場向けに運営する資格です。国内求人ではどちらも評価されますが、海外も視野に入れるならLPIC、国内の日本語環境を重視するならLinuC、という使い分けが一つの目安です。学ぶ範囲は大きく重なります。",
  },
  {
    q: "Linux系の年収はどのくらいですか？",
    a: "Linux専用の公的な平均年収統計は確認できていないため、近接区分の参考値で見ると、求人ボックスのWebエンジニア平均は約462万円です（2026年6月時点・動的に変動する値のため参考）。ただしLinux条件の求人はインフラ運用が中心でやや低めに出やすく、ここから資格ルート（LPIC→CCNA→AWS）でクラウド・設計領域へ進むと、媒体情報では年収600〜900万円が王道レンジとして語られます（各社推定・幅あり）。マイナビでは「LPIC・初年度年収900万円以上」の特集求人も見られます。",
  },
  {
    q: "LPIC→CCNA→AWSのルートはなぜ王道なのですか？",
    a: "Linux（サーバ）→ネットワーク→クラウドという、現代のインフラに必要な3層を順に押さえられるからです。LPICでサーバOSの基礎を固め、CCNAでネットワークを理解し、AWSでクラウド設計に進む流れは、運用から構築・設計へキャリアを上げる自然な順序です。この3つを揃えると、インフラ運用の入口（年収やや低め）から、クラウドインフラの設計（600〜900万円帯）まで道筋が見えます（各社推定・幅あり）。",
  },
  {
    q: "未経験でもLPICは役に立ちますか？",
    a: "役に立ちます。未経験者にとってLPICは「Linuxの基礎知識を持っている」ことの客観的な証明になり、書類選考やインフラ運用の入口求人で有利に働きます。ただし資格だけで実務経験を完全に補うのは難しいため、自宅やクラウドの無料枠でLinuxサーバを構築・運用する手を動かした経験とセットにするのが効果的です。LPICはその第一歩として最適です。",
  },
  {
    q: "Linuxスキルだけで転職できますか？",
    a: "Linux単体よりも、Linuxを土台に何ができるかで評価されます。サーバ構築・運用、シェルスクリプト（bash）、ミドルウェア（Webサーバ・DB等）、セキュリティ、コンテナの土台理解まで広げると、インフラエンジニアとして通用します。さらにクラウド（AWS等）やIaCに接続すると市場価値が上がります。Linuxは「それ単体」より「すべての土台」として活かすスキルです。",
  },
  {
    q: "40代でもLinuxスキルで転職できますか？",
    a: "運用・構築の実務経験があれば可能です。ミドル層では、サーバ設計・障害対応の判断・運用設計・チームの取りまとめといった上流要素が評価されます。長年のオンプレ運用経験は、クラウド移行プロジェクトで「移行元を理解している人材」として活きます。LPIC→クラウドへ学びを足し、汎用的なインフラ設計力へ寄せておくと、年代を問わず通用します。",
  },
];

const certTable = [
  ["レベル1（LPIC-1 / LinuC-1）", "基本操作・システム管理の基礎", "未経験〜運用の入口。基礎証明として最初に狙う"],
  ["レベル2（LPIC-2 / LinuC-2）", "サーバ構築・ネットワーク・運用管理", "構築を任される中核層。転職での評価が一段上がる"],
  ["レベル3（LPIC-3 / LinuC-3）", "セキュリティ・大規模・混在環境等の専門", "上級・スペシャリスト領域の専門性を示す"],
];

export default function LinuxSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/linux/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Linuxスキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Linuxスキルで転職する完全ガイド｜LPIC・年収・資格ルート【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Linuxスキルを活かした転職を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          LinuxはサーバOSの事実上の標準であり、インフラ・クラウド・バックエンドのあらゆる現場を支える基盤スキルです。本記事は「Linuxスキルを転職市場でどう価値化するか」に絞り、LPIC/LinuCの資格体系と段階的な資格ルートを中心に、公表データをもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ Webエンジニア（2026年6月時点・動的値・近接区分の参考）",
            "マイナビ転職 求人特集（2026年6月時点）",
            "LPI / LPI-Japan 各公式（LPIC / LinuC）",
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

        {/* 違い（冒頭差別化） */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">まず：インフラ・ネットワークとの違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Linuxは「職種」ではなく、インフラ・ネットワークといった職種を支える<strong>基盤スキル</strong>です。最初にこの位置づけを押さえると、学習と求人選びの軸が定まります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Linux（本ページ）</strong>＝サーバOSを扱う土台スキル。LPIC/LinuCで証明し、運用・構築の中核を担う。</li>
              <li><strong>インフラエンジニア</strong>＝サーバ・OS・ミドルウェア全般を扱う職種。Linuxはその主要スキル。</li>
              <li><strong>ネットワークエンジニア</strong>＝ルーター・スイッチ等の通信機器を主に扱う職種。</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3 text-sm">
              職種としての全体像は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>・<Link href="/skill/network/" className="text-petrol hover:underline">ネットワークエンジニア転職ガイド</Link>へ。資格を深掘りするなら<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC資格ガイド</Link>が直接の続きです。本ページはLinuxスキルを軸にした入り方・伸ばし方に絞ります。
            </p>
          </div>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Linuxスキルでの転職の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Linuxスキルでの転職は、<strong>「コマンドが打てる」から「サーバを設計・運用し、クラウドへ接続できる」へ役割を上げて見せられるか</strong>で年収が大きく変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>LPIC/LinuC</strong>で基礎を証明し、運用の入口を確保する</li>
              <li>② <strong>LPIC→CCNA→AWS</strong>の段階ルートで600〜900万円帯を狙う（各社推定・幅あり）</li>
              <li>③ <strong>シェル・ミドルウェア・セキュリティ・コンテナ土台</strong>まで広げて設計力を示す</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Linux専用の年収統計は確認できていないため、近接区分の参考値で見ます。求人ボックスのWebエンジニア平均は<strong>約462万円</strong>です（2026年6月時点・動的に変動する値のため参考。Linux専用ではなく近接区分の代用です）。ただしLinux条件の求人はインフラ運用が中心のため、この近接値よりやや低めに出やすい点に注意してください。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一方で、資格ルートで運用から構築・クラウド設計へ進むと水準は上がります。媒体情報では<strong>LPIC→CCNA→AWSで年収600〜900万円</strong>が王道レンジとして語られ（各社推定・幅あり・単一の断定値ではありません）、マイナビ転職では「LPIC・初年度年収900万円以上」の特集求人も見られます（2026年6月時点）。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 近接平均は求人ボックス給料ナビ（2026年6月時点・動的値・参考）。資格ルートの年収レンジは各社の市場情報に基づく推定（各社推定・幅あり）。高年収特集はマイナビ転職（2026年6月時点・閲覧時点で変動）。市場全体では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しており、インフラ人材の需給も逼迫傾向が続く前提で語られます。
          </p>
        </section>

        {/* 資格体系 */}
        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LPIC / LinuC の資格体系</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Linuxの代表的な資格はLPICとLinuCの2系統です。LPICはLPI（カナダ本部）が運営する世界標準、LinuCはLPI-Japanが運営する日本市場向けで、いずれもレベル1→2→3の体系を持ちます。学ぶ範囲は大きく重なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">対象範囲</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職での位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([level, scope, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{scope}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: LPI（lpi.org）・LPI-Japan（linuc.org）各公式（2026年6月時点）。海外も視野ならLPIC、国内重視ならLinuCが一つの目安。</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            資格の詳細・学習順は<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC資格ガイド</Link>で解説しています。レベル2まで取得すると、構築を任される中核層として転職での評価が一段上がります。
          </p>
        </section>

        {/* 資格ルート */}
        <section id="route" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LPIC→CCNA→AWSの段階資格ルート</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Linuxを起点に年収600〜900万円帯（各社推定・幅あり）を狙う王道は、サーバ→ネットワーク→クラウドの3層を順に押さえるルートです。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "LPIC / LinuC（サーバOS）", d: "Linuxの基礎〜構築を固める。運用の入口求人に入り、手を動かす経験を積む。" },
              { n: "STEP 2", t: "CCNA（ネットワーク）", d: "ルーティング・スイッチングなどネットワークの基礎を習得。サーバとネットワークを両方語れる人材になる。" },
              { n: "STEP 3", t: "AWS（クラウド）", d: "クラウドインフラの設計・構築へ。オンプレ運用経験を移行の武器に変え、設計領域で年収を引き上げる。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            各資格の詳細は<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC</Link>・<Link href="/cert/ccna/" className="text-petrol hover:underline">CCNA</Link>・<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>の各ガイド、クラウドの転職戦略は<Link href="/skill/aws/" className="text-petrol hover:underline">AWS転職ガイド</Link>を参照してください。
          </p>
        </section>

        {/* 具体スキル */}
        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">身につける具体スキル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Linuxを土台に評価される実務スキルは次の通りです。資格学習と並行して手を動かすことが重要です。
          </p>
          <div className="space-y-3">
            {[
              { t: "シェル / bash", d: "コマンド操作とシェルスクリプトによる自動化。日々の運用効率を左右する基礎中の基礎。" },
              { t: "サーバ構築・運用", d: "OSインストール、ユーザ・権限管理、プロセス・サービス管理、ログ監視、障害対応。" },
              { t: "ミドルウェア", d: "Webサーバ（Apache/Nginx）、DB、各種ミドルウェアの設定・運用。アプリを動かす土台。" },
              { t: "セキュリティ", d: "ファイアウォール、SSH、権限設計、脆弱性対応などサーバの堅牢化。" },
              { t: "コンテナの土台", d: "Docker等の前提となるLinuxの仕組み（名前空間・cgroups等）の理解。クラウド・モダン運用への接続点。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 未経験 */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験でのLPIC活用</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            未経験者にとって、LPICは「Linuxの基礎を持っている」ことの客観的な証明になり、インフラ運用の入口求人で有利に働きます。ただし資格だけで実務経験を完全には補えないため、手を動かす経験とセットにするのが効果的です。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "LPIC-1取得＋自宅構築", d: "LPIC-1を学びつつ、自宅PCや無料枠でLinuxサーバを立て、基本操作を体に入れる。" },
              { n: "STEP 2", t: "運用の入口求人へ", d: "資格＋手を動かした経験を職務経歴書に落とし込み、インフラ運用ポジションに応募する。" },
              { n: "STEP 3", t: "LPIC-2＋資格ルートへ", d: "実務を積みながらLPIC-2、続いてCCNA・AWSへ。運用から構築・設計へキャリアを上げる。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            運用保守からインフラへの転向は<Link href="/career/support-to-infra/" className="text-petrol hover:underline">運用保守からインフラ・クラウドへの転向</Link>、30代未経験は<Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのITエンジニア転職</Link>が参考になります。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Linux・インフラ求人は運用から設計まで幅が広いため、サービスを使い分けるのが効率的です。以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。インフラ・クラウド求人を技術に明るいアドバイザー経由で探せます。設計領域へ進みたい場合に有効です。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数。運用の入口から構築・設計まで幅広く比較したい場合の併用先です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビITエージェント</h3>
              <p className="text-sm text-slate-600 mb-2">幅広い求人と20〜30代のサポートに定評。資格を活かした入口求人を探しやすいサービスです。</p>
              <Link href="/review/mynavi-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>、選び方の軸は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">転職エージェントの選び方</Link>を参考にしてください。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のLinux・インフラ転職では、<strong>「コマンドを打てる」より「サーバ・運用を設計し、障害時に判断できる」</strong>ことが評価軸になります。運用設計・障害対応の判断・チームの取りまとめといった上流要素が差を生みます。長年のオンプレ運用経験は、クラウド移行プロジェクトで「移行元を理解している人材」として高く評価されます。
            </p>
            <p>
              一方で注意点として、特定環境のレガシー運用に最適化されすぎた経験は横展開しにくい面があります。<strong>LPIC→CCNA→AWS</strong>のように汎用的なインフラ設計力・クラウドへ学びを足しておくことが、年代を問わず市場価値を保つ保険になります。資格は学び直しの起点としても有効です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>も合わせてご覧ください。
            </p>
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
          <h2 className="text-xl font-bold mb-3">Linuxスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            インフラ・クラウド求人に強いIT特化型エージェントで、あなたのLinuxスキルの市場価値を確認しましょう。
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
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "AWS転職ガイド", href: "/skill/aws/" },
              { name: "LPIC資格ガイド", href: "/cert/lpic/" },
              { name: "運用保守からインフラ・クラウドへの転向", href: "/career/support-to-infra/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
