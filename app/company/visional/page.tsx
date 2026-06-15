import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ビジョナル/ビズリーチの年収は平均861万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ビジョナル（東証プライム・4194／ビズリーチ運営）のエンジニア中途採用を一次情報で解説。有価証券報告書の平均年収、Scala中心の技術スタック、選考フロー、口コミ傾向、30代40代の転職可否までまとめました。",
};

const tableRows: [string, string][] = [
  ["企業名", "ビジョナル株式会社（東証プライム・証券コード4194）"],
  ["主要サービス", "ビズリーチ（ダイレクトリクルーティング）、HRMOS（人事管理）等のHRテック／SaaS"],
  ["全社員平均年収", "861万円（2025年7月期・有価証券報告書／平均年齢38.6歳）"],
  ["主な技術スタック", "Scala／Java／Kotlin／Ruby／React・Angular・Vue／AWS（公式採用・技術ブログ）"],
  ["募集エンジニア職種", "サーバーサイド／フロントエンド／データ／機械学習／SRE／DBRE／セキュリティ／LLMアプリ開発 等"],
  ["本社所在地", "東京都渋谷区"],
];

const sources = [
  "ビジョナル 有価証券報告書（2025年7月期、IRBANK集計）",
  "Visional キャリア採用情報（visional.inc）",
  "Visional Engineering Blog（engineering.visional.inc）",
  "ビズリーチ サービスデータ（datasheet 2026年6月）",
  "OpenWork・就活会議 等の口コミ傾向",
];

const salaryHistory: [string, string, string][] = [
  ["2025年7月期", "861万円", "38.6歳"],
  ["2024年7月期", "854万円", "38.5歳"],
  ["2023年7月期", "867万円", "38.3歳"],
  ["2022年7月期", "881万円", "37.0歳"],
];

const techStack = [
  { cat: "バックエンド（主力）", items: "Scala（関数型を実践）。Java／Kotlin／Rubyも利用" },
  { cat: "フロントエンド", items: "React／Angular／Vue（プロダクトにより異なる）" },
  { cat: "インフラ・クラウド", items: "AWS（クラウドエンジニア・SRE・DBRE職を募集）" },
  { cat: "データ・ML", items: "データエンジニア／機械学習／MLOps／LLMアプリ開発の職種あり" },
];

const positions = [
  "サーバーサイドエンジニア", "フロントエンドエンジニア", "フルスタックエンジニア",
  "データエンジニア", "機械学習エンジニア", "SRE（Site Reliability Engineer）",
  "DBRE（Database Reliability Engineer）", "クラウドエンジニア（AWS）",
  "セキュリティエンジニア", "MLOpsエンジニア", "LLMアプリケーション開発エンジニア",
];

const faqs = [
  {
    q: "ビジョナル（ビズリーチ）のエンジニア転職難易度は？",
    a: "サーバーサイドはScala中心で関数型プログラミングを実践しており、設計力が問われるため難易度は中〜高めです。ただし公開選考体験談ではコーディングテストの難度は比較的標準的で、現状スキルよりポテンシャルも見られる傾向があるとされ、Java／Scala経験のあるミドルにはチャンスがあります。",
  },
  {
    q: "ビジョナルのエンジニア年収はどのくらい？",
    a: "有価証券報告書（2025年7月期）の全社員平均年収は861万円（平均年齢38.6歳）です。これは全社員平均で、職種・グレードにより差があります。エンジニア職に限った統一公開レンジはないため、正確な提示額は公式求人・面談で確認してください。",
  },
  {
    q: "ビズリーチとビジョナルの関係は？",
    a: "ビジョナル株式会社（東証プライム上場）が持株会社で、その傘下でハイクラス転職サービス「ビズリーチ」を運営しています。ビズリーチは導入企業累計41,800社以上、登録ヘッドハンター9,700人以上、登録者282万人（2025年4月時点・二次情報）の規模で、年収1,000万円以上の求人が全体の約4割（二次）とされるハイクラス領域に強みがあります。",
  },
  {
    q: "ビジョナルの技術スタックは？",
    a: "公式採用ページ・技術ブログによると、バックエンドはScalaが主力で、関数型プログラミングを実践。Java・Kotlin・Rubyも利用されます。フロントエンドはReact・Angular・Vueがプロダクトにより使い分けられ、インフラはAWS中心です。SRE・DBRE・セキュリティ・MLOps・LLMアプリ開発など専門職種も募集されています。",
  },
  {
    q: "ビジョナルの選考フローは？",
    a: "中途では、採用担当やエンジニアによる30分〜1時間程度のカジュアル面談から始まり、コーディングテスト・複数回の面接・最終面接という流れが一般的です（公開選考体験談ベース）。具体的な質問はポジション・時期で変わるため、当ガイドでは公開されていない質問内容の断定は避けています。",
  },
  {
    q: "ビジョナルへの転職で有利な経験は？",
    a: "Scala／Java／Kotlinの実務経験、関数型プログラミングの理解、HRテック・SaaSプロダクトの開発・運用経験、AWSでのインフラ運用経験が有利に働きます。専門職（SRE・DBRE・ML等）は各領域の実務実績が重視されます。",
  },
  {
    q: "ビジョナルは上場後も成長している？",
    a: "ビジョナルは2021年に上場し、東証プライムに区分されています。有価証券報告書ベースの全社員平均年収は2022年7月期881万円から2025年7月期861万円と高水準で推移しています。上場企業の安定感とプロダクト志向の開発文化を両立した環境です。",
  },
  {
    q: "30代・40代でもビジョナルに転職できる？",
    a: "平均年齢38歳台とミドル層が中心の組織で、Scala／Java等の専門性やHRドメインの知見を持つ30代・40代はマッチしやすい傾向です。年齢より、プロダクトの技術課題に貢献できる実務経験が重視されます。",
  },
];

const toc = [
  { id: "conclusion", label: "結論：難易度とどんな人向けか" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "hiring", label: "エンジニア採用の特徴" },
  { id: "positions", label: "募集職種（公式）" },
  { id: "tech", label: "技術スタック" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミの傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
];

export default function VisionalCompanyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <ArticleJsonLd
        title="ビジョナル(ビズリーチ) エンジニア転職ガイド【2026年版】"
        description="ビジョナル（東証プライム・4194／ビズリーチ運営）のエンジニア中途採用を一次情報で解説。平均年収、技術スタック、選考、口コミ、30代40代の転職可否までまとめました。"
        url="/company/visional/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Vue.jsの転職ガイド", href: "/skill/vue/" }, { name: "Angularの転職ガイド", href: "/skill/angular/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ビジョナル/ビズリーチ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ビジョナル(ビズリーチ) エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | ハイクラス転職「ビズリーチ」を運営する東証プライム上場のHRテック企業</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          ビジョナル株式会社（証券コード4194）は、ハイクラス転職サービス「ビズリーチ」やHRMOS等を展開する東証プライム上場のHRテック企業です。
          本ガイドでは、有価証券報告書・公式採用ページ・技術ブログ・口コミサイトの傾向という一次／公開情報のみをもとに、エンジニア転職の実像を整理します。
          確認できない等級別の年収表や面接質問の断定は掲載していません。
        </p>

        <DataNote surveyedAt="2026年6月" sources={sources} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ビジョナルはこんなエンジニアに向く</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-2">転職難易度：中〜高め（Scala・関数型の専門性）</p>
            <p className="text-sm text-blue-900 leading-relaxed">
              サーバーサイドはScala中心で関数型プログラミングを実践でき、日本では数少ない環境です。
              <strong>Scala／Javaの実務経験を持ち、HRテック・SaaSで腰を据えて開発したいミドルエンジニア</strong>に向いています。
              全社員平均年収は有価証券報告書（2025年7月期）で861万円。上場企業の安定感とプロダクト志向の開発文化を両立し、SRE・DBRE・ML・LLMなど専門職の選択肢も豊富です。
            </p>
          </div>
        </section>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {tableRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ビジョナル有価証券報告書（2025年7月期、IRBANK集計）、Visional公式採用ページ・技術ブログ。</p>
        </section>

        <section id="hiring" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Scala中心の関数型プログラミング</h3>
              <p className="text-sm text-blue-700">ビズリーチのバックエンドはScalaが主力で、関数型プログラミングの実践的な経験が積めます。型安全性と表現力の高いコードベースで開発できる環境は日本でも数少ないものです（出典: Visional Engineering Blog）。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マルチプロダクト×専門職の幅</h3>
              <p className="text-sm text-blue-700">ビズリーチ、HRMOSなど複数プロダクトを展開し、サーバーサイド／フロント／データ／MLに加え、SRE・DBRE・セキュリティ・LLMアプリ開発など専門職の募集も豊富。キャリアの選択肢が広がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">上場企業の安定×プロダクト志向</h3>
              <p className="text-sm text-blue-700">2021年上場・東証プライムの安定感と、エンジニアがプロダクトの意思決定に深く関わる開発文化を両立。CTOがAIネイティブ化への注力を語るなど、AI領域への投資も進んでいます。</p>
            </div>
          </div>
        </section>

        <section id="positions" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">募集しているエンジニア職種（公式）</h2>
          <p className="text-sm text-slate-600 mb-4">Visional公式キャリア採用ページで確認できた主なエンジニア職種です。募集状況は時期により変動します。</p>
          <div className="flex flex-wrap gap-2">
            {positions.map((p, i) => (
              <span key={i} className="inline-block border border-slate-200 bg-white rounded-full px-3 py-1.5 text-xs text-slate-600">{p}</span>
            ))}
          </div>
        </section>

        <section id="tech" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {techStack.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{t.cat}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{t.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: Visional Engineering Blog（engineering.visional.inc）・公式採用ページの公開情報を要約。構成はプロダクト・チームにより異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            上場企業のため、有価証券報告書で<strong>全社員平均年収</strong>が公表されています（直近は2025年7月期で861万円）。以下は全社員平均であり、エンジニア職に限定した値ではありません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">決算期</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">全社員平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年齢</th>
                </tr>
              </thead>
              <tbody>
                {salaryHistory.map(([term, salary, age], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{term}</td>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-3">出典: ビジョナル有価証券報告書（各年7月期、IRBANK集計）。いずれも全社員平均で、職種・グレードによる差を含みます。</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            エンジニア職に限った提示レンジは公式に統一公開されていないため、当ガイドでは未出典の等級別年収表は掲載していません。年代別の市場相場は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>も参考にしてください。
          </p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開選考体験談ベース）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-2">
            <p>中途採用では、以下の流れが一般的とされています（ワンキャリア等の公開選考体験談）。面接回数・順序はポジション・時期により変わります。</p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex gap-2"><span className="text-blue-600">1.</span>カジュアル面談（採用担当やエンジニアによる30分〜1時間程度、オンライン）</li>
              <li className="flex gap-2"><span className="text-blue-600">2.</span>コーディングテスト（基礎的なアルゴリズムの理解が中心との体験談）</li>
              <li className="flex gap-2"><span className="text-blue-600">3.</span>複数回の面接（技術・カルチャーフィット）</li>
              <li className="flex gap-2"><span className="text-blue-600">4.</span>最終面接・オファー面談</li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">公開されていない具体的な質問内容は断定していません。最新は公式採用ページ（visional.inc）でご確認ください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
            <p className="mb-3">公開選考体験談では、コーディングテストは現状スキルよりポテンシャルも見られる傾向があるとされ、技術知識と組織へのカルチャーフィットの双方が評価されるとされています。</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>基礎的なアルゴリズム・設計の理解</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>「ビジョナル・ウェイ」等の価値観へのフィット</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロダクト・ユーザー価値に向き合う姿勢</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">具体的な質問文や合否基準は公開情報からは断定できないため、創作した質問リストは掲載していません。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典名付き要約）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-3">
            <p><strong>良い評価の傾向：</strong>OpenWork・就活会議・エン カイシャの評判等の口コミプラットフォームでは、(1)新卒研修やメンター制度など成長環境が充実、(2)若手でも早期にマネージャー登用される事例がある、(3)プロダクト志向で裁量が大きい、といった声が見られます（2026年時点）。</p>
            <p><strong>気をつけたい点の傾向：</strong>同サイトでは、(1)成長スピードへの期待が高く負荷を感じる時期がある、(2)プロダクト・部署により文化や進め方に差がある、といった指摘も見られます。</p>
            <p className="text-xs text-slate-400">口コミは個人の主観であり、部署・時期・職種により実態は異なります。原文転載ではなく傾向の要約として記載しています。</p>
          </div>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>平均年齢38歳台とミドル層が中心の組織で、<strong>Scala／Java等の専門性やHRドメインの知見を持つ30代・40代はマッチしやすい</strong>傾向です。年齢より、プロダクトの技術課題に貢献できる実務経験が重視されます。SRE・DBRE・MLなど専門職の選択肢が多い点も、ミドルの強みを活かしやすい要素です。</p>
            <p>上場企業の安定感は、家庭やライフプランを重視する層にとって安心材料になりやすい一方、成長スピードへの期待は高めです。自身の市場価値の測り方は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>、40代の意思決定は<Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代エンジニア転職の現実</Link>も参考になります。なお、ビズリーチはハイクラス向けスカウトサービスとしても活用でき、利用は<Link href="/review/bizreach-it/" className="text-blue-600 hover:underline">ビズリーチの評判・レビュー</Link>をご覧ください。</p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ビジョナル転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化で高年収求人に強い。HRテック・SaaSの非公開求人を保有していることも。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web・ゲーム特化。提案スピードが速く、実務経験者への提案が豊富。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型媒体。カジュアル面談で社風を把握しやすい。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">エージェントの比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">転職エージェント比較</Link>もご覧ください。</p>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ビジョナルへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">HRテック・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SmartHR の転職ガイド", href: "/company/smarthr/" },
              { name: "リクルート の転職ガイド", href: "/company/recruit/" },
              { name: "プレイド の転職ガイド", href: "/company/plaid/" },
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
              { name: "ビズリーチ（サービス）の評判", href: "/review/bizreach-it/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
