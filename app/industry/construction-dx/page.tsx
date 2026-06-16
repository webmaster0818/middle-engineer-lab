import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "建設DX業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "建設DX業界（施工管理SaaS・BIM/CIM・建設テック・スマートコンストラクション）へエンジニア転職する現実的な方法を解説。求められる技術とスキル、参入ルート、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：建設DX転職は現実的か" },
  { id: "overview", label: "建設DX業界の概要" },
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
  ["Webアプリ開発（フロント／バックエンド）", "中核スキル", "施工管理SaaSや建設テックの中心。一般的なWeb開発スキルがそのまま活きる"],
  ["クラウド・モバイルアプリ", "中核スキル", "現場でのスマホ・タブレット利用が多く、モバイル対応やクラウド基盤の経験が役立つ"],
  ["建設・現場ドメイン知識", "差別化要素", "施工管理や図面の理解があると要件定義で強みになる。社内に不足しがちな領域"],
  ["3D・BIM/CIM・地理空間（GIS）", "専門スキル", "BIM/CIMや3Dモデル、測量データを扱う領域。3D・GISの知見が役立つ"],
  ["IoT・データ・AI", "差別化要素", "建機の稼働データやドローン測量、画像認識などでIoT・MLの知見が活きる"],
  ["データ分析・可視化", "差別化要素", "工程・コスト・安全のデータ活用で、SQLやBIツールの経験が役立つ"],
];

const routes = [
  ["Webアプリエンジニア", "施工管理SaaS・建設テック", "施工管理や図面共有などのSaaSを開発。Web系経験者の王道ルート"],
  ["モバイルアプリエンジニア", "現場向けアプリ・SaaS", "現場で使うスマホ・タブレットアプリを開発。モバイル経験者に向く"],
  ["データ／AIエンジニア", "スマートコンストラクション・建機", "稼働データ分析、画像認識、ドローン測量など。データ・ML経験者に向く"],
  ["社内SE・DX推進", "ゼネコン・建設会社のDX部門", "業務システム刷新やクラウド移行のPM。大規模組織のDX推進経験が活きる"],
];

const companyTypes = [
  ["建設テック・施工管理SaaS", "施工管理、図面共有、現場コミュニケーションなどの自社プロダクト。モダンな技術と裁量が魅力。ANDPADなどが代表例", "スピード感・自社開発を志向する人"],
  ["建機・スマートコンストラクション", "建設機械の自動化・遠隔操作、稼働データ活用、ドローン測量など。IoT・データの技術が活きる。コマツなどが代表例", "IoTやハードウェア連携に関心がある人"],
  ["ゼネコン・建設会社のDX部門", "BIM/CIM、業務システム刷新、現場のデジタル化。大規模組織で腰を据えて取り組める", "大組織でDXを推進したい人"],
  ["建設特化SIer・コンサル", "建設業界向けの上流支援やシステム開発。業界知識とシステム両面が問われる", "顧客折衝・上流志向の人"],
];

const faqs = [
  {
    q: "建設業界の知識がなくても建設DX業界に転職できますか？",
    a: "可能性は十分あります。施工管理SaaSや建設テックの開発では、一般的なWebアプリ・モバイル・クラウドの技術が中心になります。建設・現場のドメイン知識は入社後にキャッチアップする前提で採用されるケースもあります。ドメイン知識を持つエンジニアは希少なため、後から学ぶことで差別化にもつながります。",
  },
  {
    q: "建設業界の出身者がエンジニアに転職する場合は？",
    a: "施工管理や設計などの現場経験は、建設DX企業で強みになります。プロダクトが解決すべき現場の課題を深く理解しているためです。Web開発の基礎を学んだうえで、ドメイン知識を武器に建設テック企業を目指すルートは現実的です。30代からの異業種挑戦に関する記事も参考にしてください。",
  },
  {
    q: "建設DXではどんな技術が求められますか？",
    a: "施工管理SaaSではWebアプリ（フロント／バックエンド）、クラウド、モバイルが中心です。スマートコンストラクションではIoT、データ分析、画像認識などが、BIM/CIM領域では3D・地理空間（GIS）の知見が問われます。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "建設DXとは具体的に何を指しますか？",
    a: "建設DXは、建設業界の設計・施工・維持管理などのプロセスを、デジタル技術で効率化・高度化する取り組みの総称です。施工管理SaaS、BIM/CIM、ドローン測量、建機の自動化、現場のIoT活用などが含まれます。労働力不足や生産性向上といった課題が背景にあります。",
  },
  {
    q: "建設DX業界の年収はどのくらいですか？",
    a: "断定はできません。本記事では業界別の確認できない平均値は記載せず、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円、2025年）を共通の目安として示しています。実際の提示額は企業・ポジション・スキルで大きく異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "30代・40代でも建設DXに転職できますか？",
    a: "Web開発の実務経験や、業務システム・大規模組織のマネジメント経験などが武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代は技術力、40代はマネジメントやドメイン知識との組み合わせを打ち出すと、ミドル層の強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "不動産業界から不動産テック転職", href: "/industry/realestate/" },
  { name: "製造業からのエンジニア転職", href: "/industry/manufacturing/" },
  { name: "フロントエンドエンジニア転職", href: "/skill/frontend/" },
  { name: "データ分析エンジニア転職", href: "/skill/data-analyst/" },
  { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function ConstructionDxPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/construction-dx/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "建設DX業界への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          建設DX業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 施工管理SaaS・BIM/CIM・スマートコンストラクション領域で技術を活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          建設業界は、労働力不足や生産性向上といった課題を背景に、デジタル化（DX）が進んでいます。施工管理SaaS、図面・現場のデジタル化、BIM/CIM、ドローン測量、建機の自動化など、ソフトウェアエンジニアが解決できる課題が数多くあります。Web開発の技術がそのまま活きやすく、ドメイン知識を学べば差別化もしやすい領域です。本記事では、エンジニアが建設DX業界へ転職する現実的な道筋を、求められる技術・スキル・参入ルート・年収傾向の観点から、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：建設DX転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：Web系エンジニアにとって、建設DX転職は参入しやすい領域のひとつです。</span>
              施工管理SaaSなどでは一般的なWeb・モバイル・クラウドの技術が中心で、建設ドメイン知識を学べば差別化にもつながります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Webアプリ・モバイル・クラウドの実務経験がそのまま活きやすい</li>
              <li>・建設・現場のドメイン知識は希少で、後から学ぶ価値が高い</li>
              <li>・IoT・データ・3D/GISなど領域ごとに専門性を掛け合わせられる</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「施工管理SaaS・スマートコンストラクション・BIM/CIM・社内DX」のどの領域で自分の経験が活きるかを見極め、必要に応じてドメイン知識を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界概要 */}
        <section id="overview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">建設DX業界の概要</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            建設DXは単一の職種ではなく、建設のプロセスをデジタルで進化させる横断的な領域です。代表的な領域には次のようなものがあります。市場規模や成長率の具体値は出典が確認できないため、本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">施工管理・現場SaaS</h3>
              <p className="text-sm text-slate-600">
                施工管理、図面・写真の共有、現場のコミュニケーションなどを支えるSaaS。Webアプリ・モバイルの技術が中心で、Web系エンジニアが活躍しやすい領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スマートコンストラクション・建機</h3>
              <p className="text-sm text-slate-600">
                建設機械の自動化・遠隔操作、稼働データの活用、ドローン測量など。IoTやデータ、画像認識の技術が活きる領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">BIM/CIM・3D・社内DX</h3>
              <p className="text-sm text-slate-600">
                3Dモデルを軸に設計・施工・維持管理を統合するBIM/CIM、ゼネコンの業務システム刷新など。3D・GISの知見や大規模システム経験が活きます。
              </p>
            </div>
          </div>
        </section>

        {/* 技術トレンド・採用動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術トレンドと採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            建設業界の人手不足や働き方改革、生産性向上の必要性を背景に、デジタル化の取り組みが広がっています（公開情報に基づく傾向）。技術面では次のようなトレンドが挙げられます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">現場のクラウド・モバイル化</h3>
              <p className="text-sm text-slate-600">
                紙やExcel中心だった現場業務が、クラウドやスマホ・タブレットのアプリへ移行しています。使いやすいUIと安定したクラウド基盤を作れるエンジニアが求められています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ドメイン知識の希少性</h3>
              <p className="text-sm text-slate-600">
                建設・施工の業務を理解したうえで開発できるエンジニアは多くありません。現場の課題を理解してプロダクトに落とし込める人材は重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。建設×ITのように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
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
            ポイントは「Web開発の地力を主役に、ドメイン知識や3D/IoTなどの専門性を補う」という見せ方です。職務経歴書では、開発したプロダクトのユーザー規模や、業務効率化に貢献した実績を具体化すると説得力が増します。関連スキルは
            <Link href="/skill/frontend/" className="text-petrol hover:underline">フロントエンド</Link>・
            <Link href="/skill/react/" className="text-petrol hover:underline">React</Link>・
            <Link href="/skill/data-analyst/" className="text-petrol hover:underline">データ分析</Link>
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
            建設の知識がない場合でも、施工管理SaaSのWebアプリ開発など、自分の技術が活きる領域から入り、ドメイン知識を業務で身につけてステップアップする道があります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            建設DX企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) ドメイン知識や3D/IoTで希少性を高める、(2) Web開発の地力で応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
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
            <Link href="/company/andpad/" className="text-petrol hover:underline">ANDPAD</Link>
            の企業ページも参考にしてください。建機・スマートコンストラクション領域ではコマツ（小松製作所）なども取り組みの例として知られています。
          </p>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "Webアプリ・モバイル・クラウド・データのうち、自分の強みを整理する。開発したプロダクトのユーザー規模や業務貢献は特に洗い出す。" },
              { step: "2", title: "ドメイン・専門知識を補う計画を立てる", desc: "建設・施工の基礎知識や、3D/GIS・IoTなど目指す領域で役立つ知識を学習する。建設出身者なら、Web開発の基礎を固める。" },
              { step: "3", title: "活きる領域を見極める", desc: "施工管理SaaS・スマートコンストラクション・BIM/CIM・社内DXのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：技術力＋ドメインの掛け合わせ</h3>
              <p className="text-sm text-petrol-deep">
                Web開発の実装力を磨きつつ、建設ドメインや3D/IoTに踏み込めると、純粋なWebエンジニアにも代えがたい価値になります。技術への投資効果が高い年代です。
                <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職事情</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントと業務理解を軸に</h3>
              <p className="text-sm text-petrol-deep">
                大規模システムのマネジメントや、業務・現場を深く理解したうえでの要件定義は、ゼネコンのDXや建設テックで評価されやすい強みです。組み合わせの価値を打ち出すのが現実的です。
                <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職事情</Link>
                も確認しておきましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、建設×ITという希少性で差別化するのがミドル層の定石です。
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
            建設DX転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。建設テックからゼネコンのDXまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
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
          <h2 className="text-xl font-bold mb-3">あなたの技術を建設DXで活かそう</h2>
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
