import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "モビリティ・自動車IT業界へのエンジニア転職ガイド｜30代40代";
const DESC =
  "モビリティ・自動車IT業界（CASE・自動運転・車載ソフト・MaaS）へエンジニア転職する現実的な方法を解説。求められる技術とスキル、参入ルート、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：モビリティ・自動車IT転職は現実的か" },
  { id: "overview", label: "モビリティ・自動車IT業界の概要" },
  { id: "trend", label: "技術トレンドと採用動向" },
  { id: "skills", label: "求められる技術・スキル" },
  { id: "routes", label: "参入ルート（職種×企業タイプ）" },
  { id: "salary", label: "年収傾向" },
  { id: "company-types", label: "代表的な企業タイプと例" },
  { id: "steps", label: "参入の進め方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "agents", label: "相談先エージェント" },
  { id: "faq", label: "よくある質問" },
];

const skills = [
  ["C/C++・組込みソフトウェア開発", "中核スキル", "車載ECUやリアルタイム制御の中心。組込み経験はこの業界で直接的に評価される"],
  ["車載通信・規格（CAN/AUTOSAR等）", "専門スキル", "車載ネットワークやAUTOSARなどの規格理解が車載ソフト開発で問われる"],
  ["自動運転・認識（C++/Python・ROS等）", "専門スキル", "センサーフュージョンや認識・制御の開発。ロボティクスやMLの素養が活きる"],
  ["クラウド・バックエンド（コネクテッド）", "中核スキル", "コネクテッドカーやMaaSのデータ基盤・APIを担う。Web系のクラウド経験が活きる"],
  ["機能安全・品質（ISO 26262等）", "差別化要素", "安全規格を踏まえた開発プロセスの理解は、車載領域で希少価値が高い"],
  ["AI/ML・データ分析", "差別化要素", "認識モデルや走行データ分析でMLの知見が役立つ。データエンジニアにも門戸がある"],
];

const routes = [
  ["車載ソフトウェアエンジニア", "自動車メーカー・部品メーカー", "C/C++でECUや制御ソフトを開発。組込み経験者の王道ルート"],
  ["自動運転・ADASエンジニア", "メーカー・自動運転開発企業", "認識・制御・センサーフュージョン。ロボティクスやML経験者に向く"],
  ["コネクテッド・MaaSエンジニア", "メーカーのデジタル部門・モビリティSaaS", "クラウド・API・アプリ開発。Web系のバックエンド経験が活きる"],
  ["データ／AIエンジニア", "メーカー・サプライヤー・スタートアップ", "走行データ分析や認識モデルの開発。データ分析・ML経験者に向く"],
];

const companyTypes = [
  ["完成車メーカー（OEM）", "車両全体のソフト開発、車載OS、コネクテッド、自動運転まで幅広い。大規模かつ安全性が前提。トヨタなどが代表例", "大規模・高品質な開発を志向する人"],
  ["部品メーカー（Tier1サプライヤー）", "ECU、ADAS、車載システムの開発。組込みと先端技術の両面を担う。デンソーなどが代表例", "組込み技術を深めたい人"],
  ["コネクテッド・MaaS／モビリティIT", "車載クラウド、配車・カーシェア、モビリティアプリ。Web系の技術が活きる", "クラウド・アプリ寄りの志向がある人"],
  ["自動運転・先端技術スタートアップ", "自動運転やロボティクスの先端開発。少人数でモダンな技術に取り組める", "先端領域でスピード感を求める人"],
];

const faqs = [
  {
    q: "Web系の経験しかなくてもモビリティ・自動車IT業界に転職できますか？",
    a: "可能性はあります。コネクテッドカーやMaaSの領域では、クラウド・API・アプリ開発などWeb系の技術が直接活きます。一方、車載ECUや制御ソフトの開発はC/C++や組込みの専門性が前提となるため、その領域を目指す場合は学習投資が必要です。まずは自分の技術が活きるコネクテッド・データ系から入るのが現実的です。",
  },
  {
    q: "組込みエンジニアの経験は評価されますか？",
    a: "高く評価されやすい領域です。C/C++やリアルタイム制御、車載通信の経験は、車載ソフトウェア開発の中核とそのまま重なります。機能安全（ISO 26262など）の知見があるとさらに希少価値が高まります。組込みエンジニアのキャリアも参考にしてください。",
  },
  {
    q: "モビリティ・自動車IT業界ではどんな技術が求められますか？",
    a: "車載領域ではC/C++、組込み、車載通信（CAN/AUTOSARなど）、機能安全が中心です。自動運転ではC++/Python、ROS、ML、センサー処理が問われます。コネクテッド・MaaSではクラウド（AWS/GCP）、API、アプリ開発が中心です。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "CASEとは何ですか？",
    a: "CASEは、Connected（コネクテッド）、Autonomous（自動運転）、Shared & Services（シェアリング・サービス）、Electric（電動化）の頭文字をとった言葉で、自動車業界の変化を表すキーワードとして広く使われています。それぞれの領域で求められるエンジニアのスキルは異なります。",
  },
  {
    q: "自動車・組込みの年収はWeb系より低いと聞きますが？",
    a: "断定はできません。本記事では業界別の確認できない平均値は記載せず、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円、2025年）を共通の目安として示しています。実際の提示額は企業・ポジション・スキルで大きく異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "30代・40代でもこの業界に転職できますか？",
    a: "組込みや制御の経験、品質・安全への意識、大規模開発のマネジメント経験などが武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代は先端技術の習得、40代は品質・安全・マネジメントの組み合わせを打ち出すと、ミドル層の強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "組込みエンジニアの転職", href: "/skill/embedded/" },
  { name: "C++エンジニアの転職", href: "/skill/cpp/" },
  { name: "製造業からのエンジニア転職", href: "/industry/manufacturing/" },
  { name: "AI・機械学習エンジニア転職", href: "/skill/ai-ml/" },
  { name: "AWSエンジニアの転職", href: "/skill/aws/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function MobilityPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/mobility/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "モビリティ・自動車IT業界への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          モビリティ・自動車IT業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | CASE・自動運転・車載ソフト・MaaS領域で技術を活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          自動車業界は、CASE（コネクテッド・自動運転・シェアリング・電動化）と呼ばれる変化のなかで、ソフトウェアの重要性が急速に高まっています。クルマは「走るコンピュータ」とも言われ、車載ソフトウェア、自動運転、コネクテッドサービス、MaaS（Mobility as a Service）など、エンジニアの活躍領域が広がっています。本記事では、エンジニアがモビリティ・自動車IT業界へ転職する現実的な道筋を、求められる技術・スキル・参入ルート・年収傾向の観点から、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：モビリティ・自動車IT転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：組込み経験者にもWeb系経験者にも、それぞれ現実的なルートがあります。</span>
              車載ソフトは組込みの専門性が、コネクテッド・MaaSはWeb系の技術が活きる、と領域で求めるものが分かれます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・C/C++・組込み経験は車載ソフト・自動運転で直接評価される</li>
              <li>・クラウド・API・アプリ経験はコネクテッド・MaaSで活きる</li>
              <li>・機能安全や品質への意識はミドル層の差別化要素になる</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「車載ソフト・自動運転・コネクテッド・MaaS」のどの領域で自分の経験が活きるかを見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界概要 */}
        <section id="overview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">モビリティ・自動車IT業界の概要</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            モビリティ・自動車ITは単一の職種ではなく、クルマと移動をテクノロジーで進化させる横断的な領域です。代表的な領域には次のようなものがあります。市場規模や成長率の具体値は出典が確認できないため、本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">車載ソフトウェア・制御</h3>
              <p className="text-sm text-slate-600">
                ECUの制御ソフト、車載OS、AUTOSARなどの規格に基づく開発。リアルタイム性と安全性が厳しく問われる領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">自動運転・ADAS</h3>
              <p className="text-sm text-slate-600">
                センサーによる認識、経路計画、制御など。C++/Python、ML、ロボティクスの技術が組み合わされる先端領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">コネクテッド・MaaS</h3>
              <p className="text-sm text-slate-600">
                車両データのクラウド連携、配車・カーシェア、モビリティアプリなど。Web系のクラウド・API・アプリ開発が活きる領域です。
              </p>
            </div>
          </div>
        </section>

        {/* 技術トレンド・採用動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術トレンドと採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            電動化や自動運転、ソフトウェア定義車両（SDV）への流れを背景に、ソフトウェア人材の採用ニーズが見られます（公開情報に基づく傾向）。技術面では次のようなトレンドが挙げられます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ソフトウェア定義車両（SDV）化</h3>
              <p className="text-sm text-slate-600">
                ハードウェア中心からソフトウェア中心へと開発の重心が移り、車載OSやOTAアップデートなど、ソフトウェアエンジニアの役割が拡大しています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">機能安全とセキュリティの両立</h3>
              <p className="text-sm text-slate-600">
                人命に関わるため、ISO 26262などの機能安全や車載セキュリティが前提です。安全規格を踏まえた開発プロセスを理解する人材は希少です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。組込みと先端技術を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
          </div>
        </section>

        {/* 求められるスキル */}
        <section id="skills" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる技術・スキル</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">スキル・経験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 whitespace-nowrap">位置づけ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">補足</th>
                </tr>
              </thead>
              <tbody>
                {skills.map(([s, j, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「自分の強み（組込み or Web系）を主役に、足りない領域を補う」という見せ方です。職務経歴書では、扱った制御対象やリアルタイム性、品質・安全への取り組みを具体化すると説得力が増します。関連スキルは
            <Link href="/skill/embedded/" className="text-petrol hover:underline">組込み</Link>・
            <Link href="/skill/cpp/" className="text-petrol hover:underline">C++</Link>・
            <Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習</Link>
            のページも参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="routes" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入ルート（職種×企業タイプ）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">職種</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">主な企業タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">向いている人・特徴</th>
                </tr>
              </thead>
              <tbody>
                {routes.map(([r, c, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top whitespace-nowrap">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Web系から車載に入る場合は、いきなり制御ソフトの中核を狙うより、コネクテッドやデータ基盤など自分の技術が活きる領域から入り、車載特有の知識を業務で身につけてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            モビリティ・自動車IT領域の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代 平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SE 40代 平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（30代）", "8.01%", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（40代）", "12.67%", "レバテック公表（2025年）"],
                  ["IT・通信の平均決定年収", "486万円（2024年度）", "doda 決定年収レポート（2025年5月公表）"],
                ].map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{k}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) 組込み×先端技術や機能安全など希少性を高める、(2) 応募できる領域の幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下は代表的な企業タイプの整理です。挙げた企業名は実在する有名企業をタイプの例として示したもので、各社の採用状況を保証するものではありません。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-petrol-deep">向いている人：{fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 leading-relaxed text-xs mt-4">
            個社の特徴は
            <Link href="/company/toyota/" className="text-petrol hover:underline">トヨタ</Link>・
            <Link href="/company/denso/" className="text-petrol hover:underline">デンソー</Link>・
            <Link href="/company/sony/" className="text-petrol hover:underline">ソニー</Link>・
            <Link href="/company/renesas/" className="text-petrol hover:underline">ルネサス</Link>
            の各ページも参考にしてください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "組込み・制御・クラウド・データのうち、自分の強みを整理する。扱った対象のリアルタイム性や品質・安全への取り組みは特に洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "車載なら機能安全やAUTOSAR、コネクテッドならクラウド・APIなど、目指す領域で問われやすい技術を学習する。" },
              { step: "3", title: "活きる領域を見極める", desc: "車載ソフト・自動運転・コネクテッド・MaaSのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "IT特化のレバテックキャリアと、ハイクラス志向ならビズリーチなどに登録。求人と担当者を比較し、市場価値を客観的に把握する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：組込み×先端技術の掛け合わせ</h3>
              <p className="text-sm text-petrol-deep">
                組込みの基礎を持ちながら、自動運転やコネクテッドなど先端領域に踏み込めると、希少性の高い人材になれます。技術への投資効果が高い年代です。
                <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職事情</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：品質・安全・マネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                機能安全や品質保証、大規模開発のマネジメント経験は、人命に関わる自動車領域で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
                <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職事情</Link>
                も確認しておきましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、組込み×ソフトや品質・安全という希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            モビリティ・自動車IT転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や専門ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。メーカーからモビリティITまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
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
          <h2 className="text-xl font-bold mb-3">あなたの技術をモビリティで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
