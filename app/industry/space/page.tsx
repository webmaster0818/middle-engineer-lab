import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "宇宙・宇宙開発IT業界へのエンジニア転職ガイド｜30代40代";
const DESC =
  "宇宙・宇宙開発IT業界（衛星・ロケット・地上系・衛星データ活用）へエンジニア転職する現実的な方法を解説。求められる技術とスキル、参入ルート、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：宇宙・宇宙開発IT転職は現実的か" },
  { id: "overview", label: "宇宙・宇宙開発IT業界の概要" },
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
  ["C/C++・組込みソフトウェア開発", "中核スキル", "衛星・ロケットの機器制御や搭載ソフトで使われる。組込み経験が直接活きる"],
  ["クラウド・バックエンド・データ基盤", "中核スキル", "地上系システムや衛星データ処理基盤を担う。Web系のクラウド経験が活きる"],
  ["衛星データ・地理空間処理（Python等）", "専門スキル", "衛星画像・観測データの解析。Python・GIS・画像処理の素養が役立つ"],
  ["分散システム・高信頼設計", "差別化要素", "ミッションクリティカルで再現が難しい運用のため、高信頼な設計力が問われる"],
  ["AI/ML・画像解析", "差別化要素", "衛星画像の解析や異常検知でMLの知見が役立つ。データサイエンス人材にも門戸がある"],
  ["数値計算・シミュレーション", "専門スキル", "軌道計算や物理シミュレーション。数理・科学計算のバックグラウンドが活きる"],
];

const routes = [
  ["衛星・搭載ソフトエンジニア", "衛星メーカー・宇宙スタートアップ", "C/C++で機器制御や搭載ソフトを開発。組込み・制御経験者に向く"],
  ["地上系・運用システムエンジニア", "メーカー・運用企業・官公庁系", "衛星運用や管制の地上システム。バックエンド・インフラ経験が活きる"],
  ["衛星データ・解析エンジニア", "衛星データ活用スタートアップ", "衛星画像・観測データの処理と解析。Python・GIS・ML経験者に向く"],
  ["クラウド・プラットフォームエンジニア", "衛星データ基盤・SaaS", "大量データを扱うクラウド基盤の構築。Web系のクラウド経験が活きる"],
];

const companyTypes = [
  ["大手重工・電機メーカー", "ロケット、人工衛星、宇宙ステーション機器などの開発。大規模かつ高信頼が前提。三菱重工、IHI、NECなどが代表例", "大規模・高信頼な開発を志向する人"],
  ["宇宙スタートアップ", "小型衛星、ロケット、軌道上サービスなどの開発。少人数でモダンな技術に取り組める。ispace、アクセルスペースなどが代表例", "先端領域でスピード感を求める人"],
  ["衛星データ活用・地上系", "衛星画像・観測データの解析や、それを活用したサービス。Web系・データ系の技術が活きる", "データ・クラウド寄りの志向がある人"],
  ["官公庁・研究機関関連", "JAXAや関連機関のプロジェクトを支える開発・運用。安定基盤で大規模ミッションに関われる", "公共性の高いミッションに関わりたい人"],
];

const faqs = [
  {
    q: "Web系・IT系の経験しかなくても宇宙業界に転職できますか？",
    a: "可能性はあります。近年は衛星データの活用や地上系システム、クラウドを使ったデータ処理基盤など、Web系・データ系の技術が活きる領域が広がっています。衛星・ロケットの搭載ソフトは組込みや制御の専門性が前提ですが、まずは自分の技術が活きる地上系・データ系から入るのが現実的です。",
  },
  {
    q: "組込みエンジニアの経験は宇宙業界で評価されますか？",
    a: "高く評価されやすい領域です。衛星やロケットの機器制御・搭載ソフトでは、C/C++やリアルタイム制御、高信頼設計の経験が直接活きます。宇宙環境は再現や修理が難しいため、ミッションクリティカルな品質意識を語れることが強みになります。組込みエンジニアのキャリアも参考にしてください。",
  },
  {
    q: "宇宙業界ではどんな技術が求められますか？",
    a: "搭載・制御系ではC/C++、組込み、高信頼設計が中心です。地上系・データ活用ではクラウド（AWS/GCP）、バックエンド、Python、画像・地理空間処理、MLなどが問われます。軌道計算など数値計算・シミュレーションの知見が役立つ場面もあります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "宇宙工学のバックグラウンドがないと無理でしょうか？",
    a: "領域によります。搭載・制御系では宇宙・航空のバックグラウンドが有利ですが、地上系システムや衛星データ活用のサービス開発では、一般的なソフトウェアエンジニアリングの力が中心になります。専門知識は業務を通じて補える部分も多いため、まずは自分の技術が活きる領域を探すとよいでしょう。",
  },
  {
    q: "宇宙業界の年収はどのくらいですか？",
    a: "断定はできません。本記事では業界別の確認できない平均値は記載せず、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円、2025年）を共通の目安として示しています。大手メーカーとスタートアップでは報酬体系も異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "30代・40代でも宇宙業界に転職できますか？",
    a: "高信頼設計や品質への意識、大規模システムのマネジメント経験などが武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代は専門技術の習得、40代は品質・信頼性・マネジメントの組み合わせを打ち出すと、ミドル層の強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "組込みエンジニアの転職", href: "/skill/embedded/" },
  { name: "C++エンジニアの転職", href: "/skill/cpp/" },
  { name: "データサイエンティスト転職", href: "/skill/data-scientist/" },
  { name: "AI・機械学習エンジニア転職", href: "/skill/ai-ml/" },
  { name: "製造業からのエンジニア転職", href: "/industry/manufacturing/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
];

export default function SpacePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/space/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "宇宙・宇宙開発IT業界への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          宇宙・宇宙開発IT業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 衛星・ロケット・地上系・衛星データ活用領域で技術を活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          宇宙開発は、かつては官公庁や大手重工メーカーが中心でしたが、近年は民間スタートアップの参入により裾野が広がっています。人工衛星、ロケット、地上の運用システム、そして衛星データを活用したサービスまで、ソフトウェアエンジニアの活躍領域が増えています。本記事では、エンジニアが宇宙・宇宙開発IT業界へ転職する現実的な道筋を、求められる技術・スキル・参入ルート・年収傾向の観点から、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：宇宙・宇宙開発IT転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：地上系・データ活用の領域なら、IT系エンジニアにも現実的な入り口があります。</span>
              搭載・制御系は組込みや宇宙工学の専門性が前提ですが、衛星データやクラウド基盤はWeb系・データ系の技術が活きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・組込み・制御経験は衛星・ロケットの搭載ソフトで直接評価される</li>
              <li>・クラウド・データ・MLの経験は地上系・衛星データ活用で活きる</li>
              <li>・高信頼設計や品質への意識はミドル層の差別化要素になる</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「搭載・制御系・地上系・衛星データ活用」のどの領域で自分の経験が活きるかを見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界概要 */}
        <section id="overview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">宇宙・宇宙開発IT業界の概要</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            宇宙・宇宙開発ITは単一の職種ではなく、宇宙にまつわる開発を支える横断的な領域です。代表的な領域には次のようなものがあります。市場規模や成長率の具体値は出典が確認できないため、本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">衛星・ロケット（搭載・制御系）</h3>
              <p className="text-sm text-slate-600">
                人工衛星やロケットの機器制御、搭載ソフトウェアの開発。リアルタイム性と高信頼性が極めて重視される領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">地上系・運用システム</h3>
              <p className="text-sm text-slate-600">
                衛星の運用・管制、テレメトリ処理、ミッション計画などを担う地上のシステム。バックエンドやインフラの技術が活きます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">衛星データ活用・サービス</h3>
              <p className="text-sm text-slate-600">
                衛星画像や観測データを処理・解析し、農業・防災・物流などに活用するサービス。クラウド・データ・MLの技術が中心です。
              </p>
            </div>
          </div>
        </section>

        {/* 技術トレンド・採用動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術トレンドと採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            小型衛星の普及や民間スタートアップの参入、衛星データのビジネス活用などを背景に、ソフトウェア人材の採用ニーズが見られます（公開情報に基づく傾向）。技術面では次のようなトレンドが挙げられます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">宇宙の民間化（ニュースペース）</h3>
              <p className="text-sm text-slate-600">
                小型衛星やコンステレーション、軌道上サービスなど、スタートアップが先端開発を担う動きが広がっています。モダンな開発手法やクラウドを取り入れる企業も増えています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">衛星データのビジネス活用</h3>
              <p className="text-sm text-slate-600">
                衛星画像・観測データを解析し、農業・防災・インフラ監視などに役立てる動きが進んでいます。クラウド・データ・MLの技術を持つエンジニアの活躍の場が増えています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という背景</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。高信頼設計やデータ処理など専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
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
            ポイントは「自分の強み（組込み or クラウド・データ）を主役に、足りない領域を補う」という見せ方です。職務経歴書では、高信頼性が求められた開発や、扱ったデータの規模・性質を具体化すると説得力が増します。関連スキルは
            <Link href="/skill/embedded/" className="text-petrol hover:underline">組込み</Link>・
            <Link href="/skill/data-scientist/" className="text-petrol hover:underline">データサイエンティスト</Link>・
            <Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>
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
            IT系から宇宙に入る場合は、いきなり搭載ソフトの中核を狙うより、地上系や衛星データ活用など自分の技術が活きる領域から入り、宇宙特有の知識を業務で身につけてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            宇宙・宇宙開発IT領域の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) 組込み×高信頼設計やデータ解析など希少性を高める、(2) 応募できる領域の幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下は代表的な企業タイプの整理です。挙げた企業名は実在する有名企業・スタートアップをタイプの例として示したもので、各社の採用状況を保証するものではありません。
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
            関連する大手メーカーとしては
            <Link href="/company/nec/" className="text-petrol hover:underline">NEC</Link>・
            <Link href="/company/sony/" className="text-petrol hover:underline">ソニー</Link>
            などの各ページも参考にしてください（宇宙関連事業の有無・規模は各社で異なります）。
          </p>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "組込み・制御・クラウド・データ・数値計算のうち、自分の強みを整理する。高信頼性が求められた開発や扱ったデータの規模は特に洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "搭載系なら高信頼設計、データ活用ならPython・画像/地理空間処理など、目指す領域で問われやすい技術を学習する。" },
              { step: "3", title: "活きる領域を見極める", desc: "搭載・制御系・地上系・衛星データ活用のうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：専門技術の習得に投資する</h3>
              <p className="text-sm text-petrol-deep">
                組込みの高信頼設計や、衛星データ解析・MLなど、宇宙領域で活きる専門技術に投資できれば、希少性の高い人材になれます。技術への投資効果が高い年代です。
                <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職事情</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：品質・信頼性・マネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                高信頼システムの設計や品質保証、大規模プロジェクトのマネジメント経験は、再現の難しい宇宙ミッションで評価されやすい強みです。組み合わせの価値を打ち出すのが現実的です。
                <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職事情</Link>
                も確認しておきましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、高信頼設計やデータ解析という希少性で差別化するのがミドル層の定石です。
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
            宇宙・宇宙開発IT転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や専門ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。大手メーカーからスタートアップまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
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
          <h2 className="text-xl font-bold mb-3">あなたの技術を宇宙開発で活かそう</h2>
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
