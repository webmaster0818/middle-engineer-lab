import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SmartHR エンジニア転職ガイド｜年収・技術スタック・選考【2026年版】",
  description:
    "SmartHRへのエンジニア転職を公式採用ページ・技術ブログの一次情報で解説。非上場のため有報なし。公式求人の想定年収レンジ、Rails/React技術スタック、選考フロー、口コミ傾向、30代40代視点まで。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんなエンジニア向きか" },
  { id: "basic", label: "基本データ（企業概要・出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（公式求人の提示レンジ）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代から見たSmartHR" },
  { id: "agents", label: "SmartHR転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社SmartHR（非上場）"],
  ["事業領域", "人事・労務クラウド「SmartHR」を中心としたHR SaaS"],
  ["平均年収", "非上場のため有価証券報告書なし。公式求人の想定年収レンジを下記に掲載"],
  ["本社所在地", "東京都港区"],
  ["技術スタック", "Ruby on Rails / React / TypeScript ほか（SmartHR Tech Blog）"],
  ["働き方", "フルフレックス・基本リモート（職種により異なる）"],
  ["採用ページ", "recruit.smarthr.co.jp ／ エンジニア採用 hello-world.smarthr.co.jp"],
];

const faqs = [
  {
    q: "SmartHRのエンジニア転職の難易度は高い？",
    a: "人事労務SaaSの代表的企業として人気が高く、Webアプリケーション開発の実務経験は前提です。一方でプロダクトエンジニアを通年で複数募集しており、Ruby on Rails / Reactでの開発経験と、職能に縛られずプロダクトに向き合う姿勢があれば30代・40代でも挑戦できます。転職メディアの難易度評価では「中程度（難易度B）」とされることが多いです。",
  },
  {
    q: "SmartHRのエンジニアの想定年収はいくら？",
    a: "SmartHRは非上場のため有価証券報告書による全社員平均年収は公開されていません。中途求人（doda掲載の技術職など）では、ポジションにより想定年収700万〜1,000万円台、シニア層で1,000万〜1,500万円台のレンジが提示される例が確認できます（2026年6月時点）。実際の額は月次給与×12＋成果給で、年2回の評価に基づき個別の等級・金額が決定されます。",
  },
  {
    q: "SmartHRの技術スタックは？",
    a: "SmartHR Tech Blog等の公開情報によると、バックエンドはRuby on Rails、フロントエンドはReactが基本の組み合わせで、Next.jsの導入も進めています。その他にTypeScript、GraphQL、Python/FastAPI、Google Cloud、Terraform、Docker、GitHub Actions、Sentry、New Relicなどが用いられています。OSSのデザインシステム「SmartHR UI」を自社開発・公開しています。",
  },
  {
    q: "SmartHRの選考フローは？",
    a: "公式・エージェント経由での応募 → 書類選考 → 面接（職種により1〜3回程度）が基本です。カジュアル面談も実施しています。エンジニア職向けにはエージェント説明会の内容を技術ブログで公開するなど、選考情報の透明性が高いのが特徴です。",
  },
  {
    q: "SmartHRはフルリモートで働ける？",
    a: "SmartHRはフルフレックス・基本リモートの体制で、地方在住のエンジニアも在籍しています。ただしOpenWorkのクチコミによると部署・職種によって出社頻度は異なり、ビジネス職など一部はハイブリッド形態の場合があります。最新の勤務条件は各求人で確認してください。",
  },
  {
    q: "SmartHRの開発文化の特徴は？",
    a: "SmartHRのエンジニアは「プロダクトエンジニア」として、実装・テスト・レビュー・検証・リリースまでを職能に縛られず横断的に担います。Slackで情報がオープンに共有され、ドキュメンテーションや透明性が高い文化だという社員の声が見られます。",
  },
  {
    q: "SmartHRへの転職で有利な経験は？",
    a: "Ruby on Railsの実務経験、React/TypeScriptでのフロントエンド開発経験、SaaSプロダクトの開発・運用経験が基本です。デザインシステムやアクセシビリティへの関心、人事労務領域のドメイン知識があると評価されやすい傾向です。",
  },
  {
    q: "成果主義と聞きましたが年収は下がることもある？",
    a: "OpenWorkのクチコミでは、成果主義のため継続的に成果を出せないと年収が変動しうるという指摘が見られます。グロース期SaaSとして変化と成長のスピードが速い分、その環境を前向きに捉えられるかが定着のポイントになります。",
  },
];

export default function SmarthrCompanyPage() {
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
      <ArticleJsonLd
        title="SmartHR エンジニア転職ガイド"
        description="SmartHRへのエンジニア転職を公式採用ページ・技術ブログの一次情報で解説。公式求人の想定年収レンジ、技術スタック、選考フロー、口コミ傾向まで。"
        url="/company/smarthr/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "SmartHR" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SmartHR エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 人事労務SaaSのリーディングカンパニー</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社SmartHRは、人事・労務クラウド「SmartHR」を中心にHR領域のSaaSを展開する企業です。
          このページでは、公式採用ページ・公式技術ブログ（SmartHR Tech Blog）・公開求人といった一次情報をもとに、SmartHRへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。<strong>SmartHRは非上場のため有価証券報告書による全社員平均年収は存在せず</strong>、年収は公式求人で提示された想定レンジのみを掲載します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "SmartHR 採用サイト（recruit.smarthr.co.jp）",
            "SmartHR エンジニア採用（hello-world.smarthr.co.jp）",
            "SmartHR Tech Blog",
            "doda 株式会社SmartHR 求人情報",
            "OpenWork（SmartHR 社員クチコミ）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんなエンジニア向きか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">結論：Rails/Reactの実務経験があり、プロダクトに当事者意識を持って横断的に動けるエンジニア向き。難易度は中程度。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>「プロダクトエンジニア」として実装からリリースまで横断的に担うため、特定領域だけでなく幅広く動ける人が活躍しやすい。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>公式求人ではポジションにより想定年収700万〜1,500万円台が提示される例があり、ミドル層が年収を伸ばしやすい水準（2026年6月時点）。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>フルフレックス・基本リモートで地方在住エンジニアも在籍。成果主義のため、自律的に成果を出し続けられる人に向く。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（企業概要・出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典: SmartHR 採用サイト・SmartHR Tech Blog（公式）。SmartHRは非上場のため有価証券報告書による全社員平均年収は公開されていません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OSSで公開されるデザインシステム「SmartHR UI」</h3>
              <p className="text-sm text-blue-700">SmartHRはデザインシステム「SmartHR UI」をOSSとして公開し、構築・運用のノウハウを社外に発信しています。デザインシステムやアクセシビリティに関心のあるエンジニアにとって、技術的チャレンジと社会への発信を両立できる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">職能に縛られない「プロダクトエンジニア」</h3>
              <p className="text-sm text-blue-700">SmartHRのエンジニアは、新機能開発や既存機能の改修を中心に、実装・テストコード追加・レビュー・検証・リリースまでをプロダクト視点で横断的に担います。技術的な実装だけでなく、ユーザー課題の理解やプロダクトの方向性への貢献が求められます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">オープンで透明性の高い情報共有文化</h3>
              <p className="text-sm text-blue-700">エンジニア採用にあたりエージェント向け説明会の内容を技術ブログで公開するなど、選考情報の透明性が高いのが特徴です。社員クチコミでも「Slackで全部オープン、社内会話の透明性が高い」という声が見られます。フルフレックス・基本リモートで自律的に働けます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下はSmartHR Tech Blog・採用ページなどの公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["バックエンド", "Ruby on Rails が中心。Python / FastAPI も利用"],
                  ["フロントエンド", "React（jQueryからの移行を完了）、Next.jsの導入、TypeScript、GraphQL"],
                  ["インフラ／基盤", "Google Cloud、Terraform、Docker、GitHub Actions、CircleCI"],
                  ["監視ほか", "Sentry、New Relic"],
                  ["デザインシステム", "「SmartHR UI」をOSSとして自社開発・公開"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: SmartHR Tech Blog（tech.smarthr.jp）・エンジニア採用ページ等の公開記事。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（公式求人の提示レンジ）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            <strong>SmartHRは非上場のため、有価証券報告書による全社員平均年収は存在しません。</strong>
            ここでは公式求人（doda掲載の技術職など）で確認できた想定年収レンジのみを掲載します（2026年6月時点）。等級別の正式な年収表は公開されていません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">確認できた想定年収レンジ（求人例）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["技術職（一般ポジション例）", "700万〜1,000万円台"],
                  ["技術職（上位・シニアポジション例）", "1,000万〜1,500万円台"],
                ].map(([label, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{label}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: doda 株式会社SmartHR 技術職求人（2026年6月時点）。ポジションにより異なり、実際の額は個別決定です。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            想定年収は「月次給与×12ヶ月＋成果給」で算出され、スキルに応じて個別に等級・金額が決定されます。昇給・成果給は年2回の評価に基づきます。
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、SmartHRの提示レンジはこれを大きく上回る水準です。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・エンジニア採用ページの公開情報に基づく標準的な流れです。職種・ポジションにより回数は変わります。
          </p>
          <ol className="space-y-3">
            {[
              ["カジュアル面談（任意）", "選考前に現場メンバーと話せる場。働き方や活躍する人物像を確認できる。"],
              ["応募・書類選考", "公式採用ページまたはエージェント経由で応募し、職務経歴を提出。"],
              ["面接（職種により1〜3回程度）", "現場メンバー・マネージャー等との面接。エンジニア職ではプロダクトへの向き合い方・技術的な議論が中心。職種によっては1回程度のこともある。"],
              ["内定・オファー面談", "条件・等級・制度の説明。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典: SmartHR 採用サイト・SmartHR Tech Blog（エージェント説明会公開記事）。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用ページ・技術ブログの公開情報から読み取れる傾向です。質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>職能に縛られずプロダクトに向き合えるか（実装からリリース・検証まで当事者として動けるか）。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Rails/Reactでの開発経験の深さと、設計・技術選定の意図を説明できるか。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ユーザー課題（人事労務領域）への理解と、プロダクト改善への姿勢。</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>オープンな情報共有・ドキュメンテーション文化に馴染めるか。</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策ガイド</Link>、設計面接の練習は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>を参考にしてください。
          </p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            OpenWork等の口コミプラットフォームに投稿された傾向を、出典を挙げて要約します（原文転載はしていません）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2 text-sm">ポジティブな傾向</h3>
              <ul className="space-y-1.5 text-sm text-green-900">
                <li>フルフレックス・基本リモートで働きやすいという声（OpenWork）</li>
                <li>Slackで情報がオープンに共有され、透明性が高いというエンジニアの評価（OpenWork）</li>
                <li>成果を出せば評価されやすい実力主義の環境という声（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>成果主義のため継続的に成果を出せないと年収が変動しうるという指摘（OpenWork）</li>
                <li>変化・成長のスピードが速く、ついていく負荷を感じる人もいる（OpenWork）</li>
                <li>リモート可否は部署・職種で差があり、一部はハイブリッドの場合がある</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（SmartHR 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たSmartHR</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              SmartHRはグロース期のSaaSとして、相応の年収水準（公式求人で700万〜1,500万円台の例）と、フルリモート・フルフレックスという柔軟な働き方を両立できる点が30代・40代に魅力です。育児や介護と両立しながらキャリアを伸ばしたいミドル層にとって、地方在住でもフルリモートで挑戦できるのは大きな利点です。
            </p>
            <p>
              一方で「プロダクトエンジニア」として職能横断で動くことが求められるため、特定技術のスペシャリストとして閉じこもるより、上流の課題定義からリリース・改善まで一気通貫で関われる人が評価されます。マネジメント経験やドメイン理解、チームの開発生産性を上げた実績は、ミドルの強みとして活きます。
            </p>
            <p>
              非上場のため有報の全社員平均は参照できませんが、求人の提示レンジは高水準です。現職で年収やキャリアが頭打ちと感じる30代・40代は、<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>と<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>を押さえた上で臨むと、提示額を最大化しやすくなります。
            </p>
            <p>
              リモート前提のキャリア設計は<Link href="/knowledge/remote-work/" className="text-blue-600 hover:underline">リモートワーク転職の実態</Link>、年代別の動向は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SmartHR転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。SaaS企業の求人に強く、書類添削・面接対策に定評。" },
              { name: "Green", href: "/review/green/", desc: "成功報酬型の転職サイト。IT/Webベンチャーに強く、カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SaaS系企業への転職実績が豊富。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">各社の特徴は<Link href="/review/green/" className="text-blue-600 hover:underline">Greenの評判</Link>などの個別レビューも参考にしてください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">SmartHRへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

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

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード の転職ガイド", href: "/company/moneyforward/" },
              { name: "Sansan の転職ガイド", href: "/company/sansan/" },
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
              { name: "リモートワーク転職の実態", href: "/knowledge/remote-work/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
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
