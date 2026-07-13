import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/hitachi/" },
  title: "日立製作所の年収は平均961万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "日立製作所のエンジニア転職を実データで解説。有報の平均年収961万円(2025年3月期)、Lumada・GlobalLogic・ジョブ型採用、選考フロー、口コミ傾向、30代40代視点まで網羅。",
};

const toc = [
  { id: "conclusion", label: "結論：日立転職の難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック・DX組織（Lumada）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "mid-career", label: "30代・40代から見た日立転職" },
  { id: "agents", label: "おすすめ転職エージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社日立製作所"],
  ["業種", "総合電機・IT・社会インフラ"],
  ["セクター構成", "デジタルシステム&サービス / グリーンエナジー&モビリティ / コネクティブインダストリーズ"],
  ["従業員数", "連結 約28万人規模（公式IR・有報ベース。年度で変動）"],
  ["提出会社の平均年間給与", "961万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢 / 勤続年数", "42.6歳 / 18.7年（同 有価証券報告書）"],
  ["本社所在地", "東京都千代田区"],
  ["公開されている主な技術領域", "Lumada（IoT/AI/データ）、クラウド（AWS/Azure/GCP）、生成AI、OT×IT"],
];

const faqs = [
  {
    q: "日立製作所のエンジニア転職の難易度は高いですか？",
    a: "国内最大級の総合電機・社会インフラ企業であり、デジタルシステム&サービス部門は人気が高く難易度は高めとされます。一方でジョブ型採用に移行し職種別に通年でキャリア採用を行っているため、Lumada・クラウド・生成AIなど募集職種の要件に専門性が合致すれば、30代・40代の実務経験者にも十分チャンスがあります（出典：日立製作所 公式キャリア採用ページ）。",
  },
  {
    q: "日立製作所の平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（株式会社日立製作所単体）の従業員の平均年間給与は961万円、平均年齢42.6歳、平均勤続年数18.7年です。これは特定職種ではなく全社員平均の数字です。エンジニア職に限定した提示年収レンジは公式には公表されていません。",
  },
  {
    q: "Lumada（ルマーダ）とは何ですか？",
    a: "日立のデジタルイノベーションを支える事業基盤・コンセプトで、IoT・AI・データ分析を活用して顧客のDXを支援するものです。2024年7月には「生成AI活用プロフェッショナルサービス powered by Lumada」を提供開始するなど、生成AIとの組み合わせを強化しています（出典：日立製作所 公式ニュースリリース 2024年7月22日）。",
  },
  {
    q: "GlobalLogic（グローバルロジック）はどんな会社ですか？",
    a: "2021年に日立グループに加わった海外のデジタルエンジニアリング企業です。日立はGlobalLogicの先進技術と、製造・電力など現場で培ったOT（制御技術）を組み合わせた「IT×OT」を強みに掲げ、生成AI活用プロジェクトを推進しています（出典：日立製作所 公式・日経クロステック等）。",
  },
  {
    q: "日立製作所のキャリア採用の選考フローは？",
    a: "公式採用ページおよびキャリア採用ポータル（hitachi.jposting.net）によると、応募 → 書類選考 → 面接（複数回）→ 内定・条件提示が基本の流れです。ジョブ型・職種別採用のため、募集ポジションごとに専門面接が行われます。選考回数や内容は職種により異なります。",
  },
  {
    q: "日立製作所で英語力は必要ですか？",
    a: "海外売上比率が高くGlobalLogicなどグローバル拠点との連携も多いため、グローバル案件に関わる職種では英語力が評価されます。ただし国内向けのポジションも多数あり、必要水準は職種により異なります。求人ごとの要件を確認することをおすすめします。",
  },
  {
    q: "日立製作所の働き方や残業はどうですか？",
    a: "OpenWorkなどの口コミプラットフォームでは「部署によって働き方が大きく異なる」という声が目立ち、月の残業時間も10時間程度から40時間程度までと部署差が大きいと報告されています。ジョブ型移行に伴いテレワークやフレックスも整備されていますが、配属先による差が大きい点に留意が必要です（出典：OpenWork 社員クチコミ傾向）。",
  },
  {
    q: "未出典の等級別年収表はなぜ載せていないのですか？",
    a: "当サイトは確認できた一次情報・出典付き情報のみを掲載する方針です。日立製作所はエンジニア職の等級別年収を公式に公表していないため、推測による等級別レンジ表は掲載していません。年収の交渉は転職エージェント経由で行うのが現実的です。",
  },
];

export default function HitachiCompanyPage() {
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
      <ArticleJsonLd title="日立製作所 エンジニア転職ガイド" description="日立製作所へのエンジニア転職を実データで解説。有報の平均年収961万円、Lumada・GlobalLogic・ジョブ型採用、選考フロー、口コミ傾向、30代40代視点まで網羅。" url="/company/hitachi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "日立製作所" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">日立製作所 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ Lumada・GlobalLogic・ジョブ型採用で変革する総合電機・社会インフラ企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】日立製作所の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 日立製作所の平均年間給与は961万円です（2025年3月期 有価証券報告書・提出会社単体の全社員平均、平均年齢42.6歳・平均勤続18.7年）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 961万円（2025年3月期 有報）。株式会社日立製作所単体の全従業員平均で、特定職種の数値ではありません。</li><li>・エンジニア職に限定した公式の年収レンジは公表されていません。日本経済新聞の企業年収データなど二次情報も同水準（約961万円）を報じています。</li><li>・具体的な提示年収は募集職種・経験・現年収により変動するため、求人票かエージェント経由で確認するのが確実です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          日立製作所は「デジタルシステム&サービス」を中核に、IoT/AIプラットフォーム<strong>Lumada</strong>とGlobalLogicの買収を通じてグローバルなデジタルエンジニアリング企業への変革を進めています。本ガイドでは、有価証券報告書・公式採用ページ・口コミプラットフォームなど<strong>出典が確認できる情報のみ</strong>を使い、エンジニア転職に必要な実データを整理します。製造業・社会インフラの現場からIT/DX領域へキャリアを広げたいミドルエンジニアにとっても示唆の多い企業です。
        </p>

        <DataNote surveyedAt="2026年6月" sources={["日立製作所 2025年3月期 有価証券報告書", "日立製作所 公式キャリア採用ページ", "日立製作所 公式ニュースリリース（2024年7月）", "OpenWork（社員クチコミ傾向）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：日立転職の難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>難易度は高め。ただしジョブ型・職種別の通年採用のため、専門性が募集要件に合えば30代・40代でもチャンスは十分。</strong></p>
            <p>・<strong>向く人</strong>：Lumada／クラウド（AWS・Azure・GCP）／生成AI／データ基盤の実務経験者、電力・鉄道・製造などの社会インフラ×ITに関心がある人、OT×ITの融合領域に魅力を感じる人。</p>
            <p>・<strong>向きにくい人</strong>：少人数・スピード最優先のプロダクト開発のみを志向する人、配属部署による文化差を許容しにくい人。</p>
            <p>・<strong>年収の目安</strong>：全社員平均は961万円（2025年3月期有報）。エンジニア職の公式レンジは非公表のため、具体額はエージェント経由で確認するのが現実的です。</p>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与は提出会社（株式会社日立製作所単体）の全社員平均で、職種別・グループ全体の値とは異なります。従業員数・セクター構成は年度により変動します。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. ジョブ型・職種別の通年キャリア採用</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">日立はジョブ型人事を導入し、キャリア採用ポータル（hitachi.jposting.net）で職種別に通年で募集を行っています。Lumada／クラウド／生成AI／データ分析など、職種ごとに求める専門性が明確化されているため、自分の経験と募集要件の合致度が選考通過のカギになります（出典：日立製作所 公式キャリア採用ページ）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. デジタルシステム&サービス部門が中核</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">日立は事業を3セクターに再編し、その一つ「デジタルシステム&サービス」が顧客のDXを支える中核です。Lumadaを軸にしたソリューション開発、クラウド構築、生成AI活用などITエンジニアの活躍領域が広がっています（出典：日立製作所 公式・日経クロステック等）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. GlobalLogic買収によるグローバル・デジタルエンジニアリング強化</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">2021年にGlobalLogicがグループ入りし、海外のデジタルエンジニアリング力を取り込みました。日立は製造・電力の現場で培ったOT（制御技術）とIT・GlobalLogicの先進技術を掛け合わせた「IT×OT」を独自の強みに掲げています（出典：日立製作所 公式情報）。</p>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・DX組織（Lumada）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は公式採用ページ・公式ニュースリリース・技術解説記事など<strong>公開情報から確認できる範囲</strong>の技術領域です。日立は社内の全セクターで生成AIの活用を進めており、2024年7月には「生成AI活用プロフェッショナルサービス powered by Lumada」を提供開始しています（出典：日立製作所 公式ニュースリリース 2024年7月22日、日経クロステック）。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Lumada</strong>：IoT/AI/データ分析を活用したDXソリューション基盤。生成AIサービスとの統合を強化</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド</strong>：AWS / Azure / GCP を中心としたソリューション開発（公式募集職種に明記）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>生成AI</strong>：Lumada Solution Hub における生成AI関連ソリューション・サービス開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>OT×IT</strong>：電力・鉄道・製造など社会インフラの制御技術とITの融合領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>GlobalLogic連携</strong>：海外デジタルエンジニアリング拠点との協業プロジェクト</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-3">※プログラミング言語・フレームワークの公式統一スタックは公表されていないため、ここでは公開情報で確認できた技術領域のみを記載しています。具体的な使用技術は応募する募集職種の要件をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>有価証券報告書（2025年3月期）の全社員平均年収：961万円</strong><br />
              平均年齢42.6歳／平均勤続年数18.7年（提出会社＝株式会社日立製作所単体の値）。これは特定職種ではなく全従業員の平均で、エンジニア職に限定した公式レンジは公表されていません。日本経済新聞の企業年収データなど複数の二次情報も同水準（約961万円）を報じています。
            </p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            日立製作所はエンジニア職の<strong>等級別年収を公式に公表していません</strong>。そのため当ガイドでは、出典の取れない等級別年収表は掲載しません。実際の提示年収は募集職種・経験・現年収によって変動するため、具体的なレンジは応募先の求人票か転職エージェント経由で確認するのが確実です。年収交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉ガイド</Link>、ミドルの市場価値の考え方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の見極め方</Link>も参考にしてください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">公式採用ページ・キャリア採用ポータルに基づく一般的な流れは以下の通りです（職種により回数・内容は異なります）。</p>
          <ol className="space-y-3">
            {[
              ["応募（公式採用ページ／エージェント経由）", "職種別の募集に対し、職務経歴書・レジュメを提出。"],
              ["書類選考", "担当業務の規模・役割・成果・再現性が見られる。募集要件との合致が重要。"],
              ["面接（複数回）", "ジョブ型・職種別のため、専門面接が行われる。事業理解と経験の接続が問われる。"],
              ["内定・条件提示", "採用条件（待遇含む）の提示を経て決定。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div><p className="font-medium text-slate-800 text-sm">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典：日立製作所 公式採用情報（採用プロセス）・キャリア採用ポータル。選考ステップは職種・時期で変更される場合があります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公開情報・転職メディアの傾向として、書類・面接では次の観点が重視されると言われています（実在しない質問リストの断定は避け、傾向のみ記載）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>担当業務の<strong>規模・役割・成果・再現性</strong>を具体的な数字で説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>「<strong>なぜ日立か</strong>」を事業理解と自分の経験に接続して言語化できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>応募する募集職種（Lumada・クラウド・生成AI等）の<strong>専門要件との合致</strong></li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>社会インフラ・OT×IT領域への関心と、長期的に取り組む姿勢</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">出典：日立製作所 公式採用情報＋転職メディアの傾向要約。具体的な面接質問の内容は選考・時期により異なります。技術面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の準備</Link>を参照。</p>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た日立転職</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>日立はジョブ型・職種別採用へ移行しているため、<strong>30代・40代の実務経験者</strong>が即戦力ポジションで応募しやすい構造になっています。Lumada・クラウド・生成AIなど特定領域の深い経験は、ミドル層の強みとして評価されやすい一方、募集要件との合致が前提です。</p>
            <p>製造業・社会インフラの現場経験を持つエンジニアにとっては、OT×ITの融合領域が活きる場面が多くあります。<Link href="/industry/manufacturing/" className="text-petrol hover:underline">製造業からのIT転職ガイド</Link>で、現場知識を武器に変える考え方を整理しておくと、日立のような社会インフラ×IT企業への志望動機が説得力を増します。</p>
            <p>一方、口コミでは「部署による文化差が大きい」との声が目立ちます。30代・40代は配属先のミスマッチが転職後の満足度を大きく左右するため、面接段階で配属予定部署の業務・働き方を具体的に確認することが重要です。40代特有の留意点は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日立製作所転職におすすめの転職エージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人量。大手メーカー・日立グループ系の求人を幅広く保有。検索とエージェントを併用できる。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "書類添削・面接対策が手厚い。大手企業への転職支援に強みがあり、ジョブ型採用の準備をサポート。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。日立の管理職・スペシャリスト求人や非公開ポジションに出会いやすい。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数社の併用が一般的です。使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェント複数利用のコツ</Link>を参照してください。</p>
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">日立製作所への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカー・社会インフラ企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "製造業からのIT転職ガイド", href: "/industry/manufacturing/" },
              { name: "富士通 エンジニア転職ガイド", href: "/company/fujitsu/" },
              { name: "ソニーグループ エンジニア転職ガイド", href: "/company/sony/" },
              { name: "パナソニック エンジニア転職ガイド", href: "/company/panasonic/" },
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
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
