import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/layerx/" },
  title: "LayerXの評判・年収は？エンジニア転職ガイド【2026】｜技術スタック・選考",
  description:
    "LayerXの評判・口コミの傾向とエンジニア中途採用を、公式採用ページ・技術ブログ・口コミの一次情報から解説。バクラク／AI事業の技術スタック、トライアル入社、年収レンジ、30代40代の転職可否までまとめました。",
};

const tableRows: [string, string][] = [
  ["企業名", "株式会社LayerX（非上場）"],
  ["事業内容", "バクラク事業（法人支出管理SaaS）／Ai Workforce事業／Fintech事業／Security事業"],
  ["主な技術スタック", "Go／TypeScript／React／Python／AWS／GCP（公式採用・技術ブログの公開情報ベース）"],
  ["募集エンジニア職種", "シニアAI・LLMエンジニア／バックエンド／機械学習／フルスタック（HCM領域）／CRE／プロダクト連携基盤／Fintech 等"],
  ["選考の特徴", "トライアル入社・インターン選考を活用し相互理解を重視（公式）"],
  ["本社所在地", "東京都中央区"],
];

const sources = [
  "LayerX 採用情報（jobs.layerx.co.jp）",
  "PLAID/各社 技術ブログ・採用ページの公開情報",
  "OpenWork・転職会議 等の口コミ傾向",
  "doda「決定年収レポート」2025年5月公表",
];

const faqs = [
  {
    q: "LayerXのエンジニア転職難易度は高い？",
    a: "公開求人の多くがシニア／専門領域（AI・LLM、機械学習、Fintech等）であり、即戦力性が問われるためミドル以上では難易度は高めです。一方でトライアル入社・インターン選考といった相互理解の仕組みがあり、スキルとカルチャーフィットの両面で見極める設計になっています（LayerX公式採用ページ）。",
  },
  {
    q: "LayerXの選考フローは？",
    a: "公式採用ページでは、職種により選考途中にインターン選考やトライアル入社を組み込み、実際の業務に近い形で相互理解を図る方針が示されています。具体的な面接回数や質問は職種・時期で変わるため、応募時に各ポジションの最新の選考案内を確認してください。当ガイドでは公開されていない質問内容の断定は避けています。",
  },
  {
    q: "LayerXのエンジニア年収はどのくらい？",
    a: "LayerXは非上場のため有価証券報告書の平均年収は公表されていません。口コミ・年収調査サイト（OpenWork、各種年収調査サイト、2026年時点）では全社平均でおおむね650〜850万円台、レンジ600〜1,500万円程度との集計が見られますが、これらは二次集計値です。正確な提示額は公式求人と面談で確認してください。",
  },
  {
    q: "LayerXの技術スタックは？",
    a: "公式採用ページ・技術ブログの公開情報では、バックエンドにGo、フロントエンドにTypeScript／React、AI・機械学習領域でPython、インフラにAWS／GCPが用いられています。AIエージェント開発ではGitHub CopilotやCursor等のAI開発支援ツールの活用も進められています。",
  },
  {
    q: "LayerXは残業が多い？働き方は？",
    a: "OpenWork等の口コミでは、フルリモート・フレックスを採用し、残業代も実態に応じて支払われる「ホワイト寄り」との評価傾向が見られます（出典: OpenWork等の口コミ集計、2026年時点）。ただし成長フェーズゆえ繁忙の波がある点は他のSaaSと同様で、部署・時期による差は前提に考えるのが現実的です。",
  },
  {
    q: "LayerXへの転職で有利な経験は？",
    a: "公式の募集要件から見ると、Goでのバックエンド開発、AI・LLM／機械学習の実装経験、SaaSプロダクトの設計・運用経験、Fintechや会計・人的資本管理（HCM）領域のドメイン知識が有利に働きます。",
  },
  {
    q: "30代・40代でもLayerXに転職できる？",
    a: "年齢より、シニア／専門ポジションの要件を満たす実務経験が重視される傾向です。30代・40代でアーキテクチャ設計やドメイン専門性、AI活用の実装経験を持つ人はむしろマッチしやすい一方、要件はシニア寄りのため、未経験領域への挑戦としては難度が上がります。",
  },
  {
    q: "LayerXの求人はどこで見つかる？",
    a: "公式採用ページ（jobs.layerx.co.jp）が一次情報です。加えて、SaaS・スタートアップ求人に強いレバテックキャリアやGreen、IT特化のGeeklyなどのエージェント・媒体経由でも募集に出会えることがあります。非公開求人の有無はエージェントに確認するとよいでしょう。",
  },
];

const positions = [
  { name: "シニアAI・LLMエンジニア", desc: "AIエージェント開発全般をリード。LLMを用いた業務自動化プロダクトの設計・実装。" },
  { name: "シニアソフトウェアエンジニア（バックエンド／AI・ML領域）", desc: "Goを中心としたバックエンド設計と、AI・機械学習領域のアーキテクチャ。" },
  { name: "シニア機械学習エンジニア", desc: "機械学習モデルの設計・実装・運用（MLOps含む）。" },
  { name: "ソフトウェアエンジニア（フルスタック・HCM領域）", desc: "人的資本管理プロダクトのフロント〜バックエンド開発。" },
  { name: "ソフトウェアエンジニア（プロダクト改善自動化／CRE）", desc: "顧客課題を起点にしたプロダクト改善サイクルの構築。" },
  { name: "ソフトウェアエンジニア（プロダクト連携基盤）", desc: "API基盤・連携基盤の設計・開発・運用。" },
  { name: "プロダクトエンジニア（Fintech）", desc: "証券バックシステム等、Fintech領域の開発・運用。" },
];

const techStack = [
  { cat: "バックエンド", items: "Go（主力）／Python（AI・機械学習領域）" },
  { cat: "フロントエンド", items: "TypeScript／React" },
  { cat: "インフラ・クラウド", items: "AWS／GCP" },
  { cat: "AI開発支援", items: "GitHub Copilot／Cursor 等（AIエージェント開発で活用）" },
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
  { id: "review", label: "評判・口コミの傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
];

export default function LayerxCompanyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <ArticleJsonLd
        title="LayerX エンジニア転職ガイド【2026年版】"
        description="LayerXのエンジニア中途採用を、公式採用ページ・技術ブログ・口コミの一次情報から解説。技術スタック、選考、年収レンジ、30代40代の転職可否までまとめました。"
        url="/company/layerx/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "LayerX" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">LayerX エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | バクラク・AI事業で急成長する非上場SaaS企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】LayerXの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: LayerXは非上場のため、有価証券報告書による公式の平均年収は非公表です。口コミ・年収調査サイトの二次集計では全社平均でおおむね650〜850万円台とされます（2026年時点）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・公式平均は非公表（非上場のため有報開示なし）。</li><li>・二次集計値は全社平均650〜850万円台、レンジ600〜1,500万円程度（OpenWork等・2026年時点、変動大）。</li><li>・公開求人はシニア・専門職中心。正確な提示額は公式求人・面談での確認が前提です。</li></ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          LayerX（株式会社LayerX）は法人支出管理SaaS「バクラク」を主力に、Ai Workforce・Fintech・Securityの各事業を展開する非上場のテック企業です。
          本ガイドでは、公式採用ページ・公開されている技術情報・口コミサイトの傾向という一次／公開情報のみをもとに、エンジニア転職の実像を整理します。
          確認できない等級別の年収表や面接質問の断定は掲載していません。
        </p>

        <DataNote surveyedAt="2026年6月" sources={sources} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：LayerXはこんなエンジニアに向く</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-2">転職難易度：高め（シニア・専門領域中心）</p>
            <p className="text-sm text-blue-900 leading-relaxed">
              公開求人の多くがAI・LLM、機械学習、Fintechなどシニア／専門ポジションで、即戦力性が問われます。
              一方でトライアル入社・インターン選考で相互理解を図る独自の選考設計があり、スキルとカルチャーの両面で見極められます。
              <strong>Goでのバックエンド開発やAI・LLMの実装経験を持ち、急成長SaaSで裁量を持って働きたいミドル以上のエンジニア</strong>に向いています。
              年収は非上場のため公式の平均値は非公表で、提示額は公式求人・面談での確認が前提です。
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
          <p className="text-xs text-slate-400 mt-2">出典: LayerX公式採用ページ（jobs.layerx.co.jp）。技術スタックは公式採用・技術ブログの公開情報に基づく要約。</p>
        </section>

        <section id="hiring" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI・LLMの実務実装をリードできる</h3>
              <p className="text-sm text-petrol-deep">公式採用ページではAi Workforce事業を「企業と成長を共にするAIプラットフォーム」と位置づけ、AIエージェント開発をリードするシニア職を募集。請求書処理など実業務の自動化にLLMを落とし込む経験が積めます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マルチプロダクトの急成長SaaS</h3>
              <p className="text-sm text-petrol-deep">バクラク（法人支出管理）に加え、Ai Workforce・Fintech・Securityと複数事業を展開。各領域で異なる技術課題に取り組め、社内でのキャリアの広がりがあります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">相互理解を重視する選考設計</h3>
              <p className="text-sm text-petrol-deep">公式情報では、選考途中のインターン選考やトライアル入社を通じて、入社後の実務に近い形で相互理解を図る方針が示されています。ミスマッチを減らす狙いがあります。</p>
            </div>
          </div>
        </section>

        <section id="positions" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">募集しているエンジニア職種（公式）</h2>
          <p className="text-sm text-slate-600 mb-4">LayerX公式採用ページ（ポジション一覧）で確認できた主なエンジニア職種です。募集状況は時期により変動するため、最新は公式ページをご確認ください。</p>
          <div className="space-y-3">
            {positions.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
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
          <p className="text-xs text-slate-400 mt-2">出典: LayerX公式採用ページ・技術ブログ（note.layerx.co.jp 等）の公開情報を要約。具体的な構成はプロダクト・チームにより異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="border border-slate-200 rounded-lg p-5 space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>LayerXは非上場企業のため、有価証券報告書による全社員平均年収は公表されていません。</strong>
              当ガイドでは出典のない等級別年収表は掲載していません。
            </p>
            <p>
              口コミ・年収調査サイト（OpenWork、各種年収調査サイト・2026年時点）の二次集計では、全社平均でおおむね650〜850万円台、
              レンジは600〜1,500万円程度との数値が見られます。ただしこれらは二次集計値であり、職種・グレード・成果により大きく変動します。正確な提示額は公式求人と面談で確認してください。
            </p>
            <p>
              市場感の参考として、doda「決定年収レポート」（2025年5月公表）ではIT・通信の平均決定年収が2024年度で486万円。
              SaaS・スタートアップのシニア職はこれを上回るレンジが中心になりやすい一方、年俸制でみなし残業を含む設計が一般的な点は確認しておくとよいでしょう。年代別の市場相場は
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-2">
            <p>公式採用ページでは、職種により以下の要素を組み合わせた相互理解重視の選考が示されています。面接回数や順序はポジション・時期で変わります。</p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex gap-2"><span className="text-petrol">1.</span>書類選考・カジュアル面談</li>
              <li className="flex gap-2"><span className="text-petrol">2.</span>技術選考（職種により技術課題・コーディング等）</li>
              <li className="flex gap-2"><span className="text-petrol">3.</span>インターン選考／トライアル入社（実務に近い形で相互理解）</li>
              <li className="flex gap-2"><span className="text-petrol">4.</span>カルチャーフィット面接・オファー面談</li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">公開されていない具体的な質問内容は断定していません。最新の選考案内は各ポジションの募集要項でご確認ください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
            <p className="mb-3">転職会議等の口コミでは、LayerXは選考でカルチャーフィットを重視し、価値観や思考のスタイルを問う傾向があるとされています（出典: 転職会議・OpenWork等の口コミ集計、2026年時点）。技術面では、自身の設計判断や課題解決のプロセスを言語化できるかが見られやすいポイントです。</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ミッション・バリューへの共感とカルチャーフィット</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>設計・技術選定の意思決定プロセスの言語化</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>事業成長への貢献意欲・プロダクト志向</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">具体的な質問文や合否基準は公開情報からは断定できないため、当ガイドでは創作した質問リストは掲載していません。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LayerXの評判・口コミの傾向（出典名付き要約）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-3">
            <p><strong>良い評価の傾向：</strong>OpenWork・転職会議等の口コミプラットフォームでは、(1)フルリモート・フレックスで働き方の自由度が高い、(2)残業代が実態に応じて支払われる「ホワイト寄り」、(3)技術レベルが高く刺激的な環境、といった声が見られます（2026年時点）。</p>
            <p><strong>気をつけたい点の傾向：</strong>同サイトでは、(1)急成長フェーズゆえ繁忙の波がある、(2)裁量が大きい分、自走力・キャッチアップの速さが求められる、(3)成果主義で評価のメリハリが大きい、といった指摘も見られます。</p>
            <p className="text-xs text-slate-400">口コミは個人の主観であり、部署・時期・職種により実態は異なります。原文転載ではなく傾向の要約として記載しています。</p>
          </div>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>LayerXの公開求人はシニア／専門領域が中心のため、<strong>30代・40代でアーキテクチャ設計・ドメイン専門性・AI実装の経験を持つ層はむしろマッチしやすい</strong>傾向があります。年齢そのものより、シニア要件を満たす実務実績が重視される設計です。</p>
            <p>一方で、未経験領域（例: 機械学習未経験からのML職）への挑戦としては難度が上がります。家庭との両立という観点では、フルリモート・フレックスは追い風ですが、成長フェーズの繁忙の波は前提に置き、面談で実態を確認しておくのが現実的です。</p>
            <p>40代での意思決定の進め方は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>、自身の市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>も参考になります。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>Goでのバックエンド開発の実務経験がある</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>AI・LLM／機械学習をプロダクトに実装したい</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>急成長SaaSで裁量を持って働きたい</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>Fintech・会計・HCM等のドメインに関心がある</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>フルリモート・フレックスで自律的に働きたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 text-sm mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>手厚い研修やレールが整った環境を求める</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>繁忙の波を一切避けたい・稼働を完全に固定したい</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>未経験領域へのキャリアチェンジを狙っている</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>役割が明確に切り分けられた業務を好む</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>大企業の安定したブランドや制度を最優先する</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LayerX転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化で高年収求人に強い。SaaS・スタートアップの非公開求人を保有していることも。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャー・スタートアップに強い成功報酬型媒体。カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web・ゲーム特化。提案スピードが速く、急成長スタートアップの実務経験者に向く。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">エージェントの比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>もご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">LayerXへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">急成長SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "プレイド の転職ガイド", href: "/company/plaid/" },
              { name: "SmartHR の転職ガイド", href: "/company/smarthr/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "スタートアップ vs 大手の選び方", href: "/knowledge/startup-vs-enterprise/" },
            ].map((item, i) => (
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
