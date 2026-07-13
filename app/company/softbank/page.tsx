import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/softbank/" },
  title: "ソフトバンクの年収は平均849万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "ソフトバンクのエンジニア転職を実データで解説。有報の平均年収849万円(2025年3月期)、AI・5G・法人DXの募集職種と選考フロー、口コミ傾向、30代40代視点まで網羅。",
};

const toc = [
  { id: "conclusion", label: "結論：ソフトバンク転職の難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術領域・募集職種（AI・5G・DX）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "mid-career", label: "30代・40代から見たソフトバンク転職" },
  { id: "agents", label: "おすすめ転職エージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "ソフトバンク株式会社（証券コード9434）"],
  ["業種", "通信・AI・法人DX"],
  ["事業領域", "コンシューマ通信、法人DX、メディア・EC、ファイナンス、先端技術（AI等）"],
  ["従業員数", "連結 約5万人規模（公式IR・有報ベース。年度で変動）"],
  ["提出会社の平均年間給与", "849万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢 / 勤続年数", "41.7歳 / 14.5年（同 有価証券報告書）"],
  ["本社所在地", "東京都港区"],
  ["公開されている主な技術領域", "AI/ML、AIプラットフォーム、AI-RAN、5G、クラウド、法人DX"],
];

const faqs = [
  {
    q: "ソフトバンクのエンジニア中途採用はどんな職種がありますか？",
    a: "公式キャリア採用ページでは、AI/MLエンジニア、AIプラットフォーム構築エンジニア、AIエンジニア【AI-RAN】など、AI・データ・研究開発領域の募集職種が公開されています。これに加え、通信ネットワーク、クラウド、法人DXソリューションなど幅広い技術職を通年で募集しています（出典：ソフトバンク 公式キャリア採用ページ）。",
  },
  {
    q: "ソフトバンクの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、ソフトバンク株式会社（提出会社）の従業員の平均年間給与は849万円、平均年齢41.7歳、平均勤続年数14.5年です。これは全従業員の平均であり、エンジニア職に限定した公式レンジではありません。日本経済新聞の企業年収データなど複数の二次情報も同水準（約849万円）を報じています。",
  },
  {
    q: "ソフトバンクのAIエンジニア職にはどんな経験が求められますか？",
    a: "公式の募集職種例では、AI／MLエンジニアは非構造化データ（自然言語・画像など）を処理するシステムの企画・設計・開発・導入、エッジAIデバイスの画像解析基盤開発などを担当します。Pythonでの実装経験（3年以上を目安とする職種あり）、機械学習エンジニアとしての実績、海外企業とのコミュニケーション力などが要件として挙げられています（出典：ソフトバンク 公式キャリア採用ページ）。",
  },
  {
    q: "ソフトバンクのキャリア採用の選考フローは？",
    a: "公式の応募・選考フローによると、応募 → 書類選考 → 面接（複数回の場合あり）→ 内定の流れです。選考ステップは応募職種・選考時期・状況によって変更される場合があると案内されています（出典：ソフトバンク 公式キャリア採用 応募・選考フロー）。",
  },
  {
    q: "ソフトバンクで英語力は必要ですか？",
    a: "AI・研究開発などグローバルチームや海外企業と連携する職種では英語が求められる場合があります。一方、国内通信事業や法人事業など日本語で完結するポジションも多数あります。求人ごとの要件を確認することをおすすめします。",
  },
  {
    q: "ソフトバンクの開発文化や働き方の評判は？",
    a: "OpenWork・転職会議などの口コミプラットフォームでは、「挑戦とスピード」の文化や、通信に加えAI・ロボティクス・投資など新規事業に若いうちから関われる成長環境を評価する声がある一方、部署や個人の適性によって評価が大きく分かれ、評価制度や業務量に課題を感じる声も見られます（出典：OpenWork・転職会議の傾向要約）。",
  },
  {
    q: "ソフトバンクの給与にインセンティブはありますか？",
    a: "口コミプラットフォームでは、給与水準は同業他社・同年代比で高めで、賞与やインセンティブが業績連動で大きくなることが多いとの声が見られます。ただし具体的な制度内容は公式に詳細公表されていないため、提示条件は求人票・エージェント経由で確認するのが確実です（出典：OpenWork等の傾向要約）。",
  },
  {
    q: "未出典の等級別年収表はなぜ載せていないのですか？",
    a: "当サイトは確認できた一次情報・出典付き情報のみを掲載する方針です。ソフトバンクはエンジニア職の等級別年収を公式公表していないため、推測による等級別レンジ表は掲載していません。具体額は求人票やエージェント経由で確認するのが現実的です。",
  },
];

export default function SoftbankCompanyPage() {
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
      <ArticleJsonLd title="ソフトバンク エンジニア転職ガイド" description="ソフトバンクへのエンジニア転職を実データで解説。有報の平均年収849万円、AI・5G・法人DXの募集職種と選考フロー、口コミ傾向、30代40代視点まで網羅。" url="/company/softbank/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AI・機械学習の転職ガイド", href: "/skill/ai-ml/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ソフトバンク" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ソフトバンク エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 通信×AI×法人DXの総合テクノロジー企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ソフトバンクの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: ソフトバンク株式会社（9434・提出会社）の平均年間給与は849万円です（2025年3月期 有価証券報告書・全社員平均、平均年齢41.7歳／平均勤続14.5年）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 849万円（2025年3月期 有報・提出会社の全社員平均）。エンジニア職限定の数値ではありません。</li><li>・ソフトバンクグループ（9984）とは別法人。日本経済新聞の企業年収データなど二次情報も同水準（約849万円）です。</li><li>・職種別の公式年収レンジは非公表。賞与・インセンティブが業績連動で上振れするとの口コミあり。提示条件は求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          ソフトバンク株式会社（証券コード9434）は、コンシューマ通信を基盤に、<strong>AI・5G・法人DX</strong>へ事業を広げる総合テクノロジー企業です。公式キャリア採用ページでは、AI/MLエンジニアやAIプラットフォーム構築エンジニア、AI-RAN関連など、AI・データ・研究開発領域の募集職種が具体的に公開されています。本ガイドでは、有価証券報告書・公式採用ページ・口コミプラットフォームなど<strong>出典が確認できる情報のみ</strong>を使い、エンジニア転職の実態を整理します。
        </p>

        <DataNote surveyedAt="2026年6月" sources={["ソフトバンク株式会社 2025年3月期 有価証券報告書", "ソフトバンク 公式キャリア採用ページ", "OpenWork・転職会議（社員クチコミ傾向）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ソフトバンク転職の難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>難易度は中〜高。AI・通信・法人DXを通年で幅広く募集しており、専門性と「スピード文化」への適性が合えば30代・40代にもチャンスが多い。</strong></p>
            <p>・<strong>向く人</strong>：AI/ML・データ基盤、5G/通信ネットワーク、クラウド、法人向けSI/DXの実務経験者、スピード重視・新規事業に挑戦したい人。</p>
            <p>・<strong>向きにくい人</strong>：腰を据えた長期開発のみを好む人、評価制度・業務量の変動を許容しにくい人。</p>
            <p>・<strong>年収の目安</strong>：全社員平均は849万円（2025年3月期有報）。賞与・インセンティブが業績連動で上振れする傾向との口コミあり。職種別の公式レンジは非公表。</p>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与は提出会社（ソフトバンク株式会社）の全社員平均で、職種別・グループ各社の値とは異なります。ソフトバンクグループ（証券コード9984）とは別法人です。従業員数は年度により変動します。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. AI領域の募集職種が具体的に公開されている</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">公式キャリア採用ページでは、AI/MLエンジニア、AIプラットフォーム構築エンジニア、AI-RAN関連エンジニアなど、AI・データ・研究開発の募集職種が明確に公開されています。非構造化データ処理、エッジAI、AIプラットフォーム構築など、職種ごとの担当領域が具体的に示されているのが特徴です（出典：ソフトバンク 公式キャリア採用ページ）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 通信×AIの融合と法人DXの成長</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">5G/Beyond 5Gの通信基盤とデータを武器に、AI活用のソリューションや法人DXを展開しています。通信インフラとAIの両方に携われる点はソフトバンクならではの強みで、法人事業の成長に伴いクラウド・データ・セキュリティ系のエンジニアを積極採用しています（出典：ソフトバンク 公式情報）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. スピードと挑戦の文化／新規事業</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">口コミでは「挑戦とスピード」がカルチャーとして挙げられ、通信に加えAI・ロボティクス・新規事業に若いうちから関われる成長環境が評価される一方、評価制度や業務量に課題を感じる声もあり、部署・個人の適性で評価が分かれます（出典：OpenWork・転職会議の傾向要約）。</p>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（AI・5G・DX）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は公式キャリア採用ページで確認できる募集職種・技術領域の例です。具体的な使用技術・要件は各求人票をご確認ください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI／MLエンジニア</strong>：自然言語・画像など非構造化データ処理システムの企画・設計・開発・導入、エッジAIデバイスの画像解析基盤開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AIプラットフォーム構築エンジニア</strong>：AI事業横断のAIプラットフォームの設計・構築・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AIエンジニア【AI-RAN】</strong>：次世代インフラ基盤上のAIアプリの企画・開発・技術検証</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>通信ネットワーク</strong>：5G/Beyond 5G、ネットワーク基盤領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド／法人DX</strong>：法人向けソリューションのインフラ・データ・セキュリティ</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-3">※要件例として、AI職ではPython 3年以上の実装経験や機械学習エンジニアとしての実績、海外企業とのコミュニケーション力が挙げられる募集があります（出典：ソフトバンク 公式キャリア採用ページ）。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>有価証券報告書（2025年3月期）の全社員平均年収：849万円</strong><br />
              平均年齢41.7歳／平均勤続年数14.5年（提出会社＝ソフトバンク株式会社の値）。全従業員の平均であり、エンジニア職に限定した公式レンジではありません。日本経済新聞の企業年収データなど複数の二次情報も同水準（約849万円）を報じています。
            </p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            ソフトバンクはエンジニア職の<strong>等級別年収を公式に公表していません</strong>。当ガイドでは出典の取れない等級別年収表は掲載しません。口コミでは賞与・インセンティブが業績連動で上振れする傾向との声がありますが、制度の詳細は公式公表されていないため、提示条件は求人票か転職エージェント経由で確認するのが確実です。交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉ガイド</Link>、市場価値の考え方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の見極め方</Link>を参照してください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">ソフトバンク 公式キャリア採用「応募・選考フロー」に基づく一般的な流れです（職種・時期で変動）。</p>
          <ol className="space-y-3">
            {[
              ["応募（公式採用ページ／エージェント経由）", "希望の募集職種に応募。"],
              ["書類選考", "経験・スキルと募集要件の合致が見られる。"],
              ["面接（複数回の場合あり）", "応募職種・選考時期・状況により面接を複数回実施することがある。"],
              ["内定・条件提示", "オファー提示を経て決定。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div><p className="font-medium text-slate-800 text-sm">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典：ソフトバンク 公式キャリア採用 応募・選考フロー。選考ステップは応募職種・時期・状況で変更される場合があります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公開情報・口コミの傾向として、次の観点が重視されると言われています（実在しない質問リストの断定は避け、傾向のみ記載）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>応募職種（AI/ML・通信・法人DX等）の<strong>専門要件との合致</strong></li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>業務の<strong>規模・役割・成果</strong>を具体的に説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>「挑戦とスピード」の文化への適性・新規事業への意欲</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>大規模システムの設計・運用、または事業を作る視点</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">出典：ソフトバンク 公式採用情報＋口コミの傾向要約。技術面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の準備</Link>を参照。</p>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たソフトバンク転職</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>ソフトバンクは通信・AI・法人DXを通年で幅広く募集しており、<strong>30代・40代の即戦力エンジニア</strong>が応募しやすい構造です。AI/ML・大規模基盤・法人SI/DXなど特定領域の深い経験は、ミドル層の強みになります。スピード文化に適応でき、新規事業に挑戦したい人にはフィットしやすい環境です。</p>
            <p>SIer・通信業界出身で大規模システムや法人案件の経験があるエンジニアは、その知見を活かしやすい場面が多くあります。Web/モダン開発への移行を考える場合は<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>の整理も役立ちます。</p>
            <p>一方、口コミでは部署・個人の適性で評価が大きく分かれ、評価制度や業務量への不満も見られます。30代・40代は配属予定部署の業務内容・評価制度・働き方を面接段階で具体的に確認することが、転職後の満足度を左右します。年代別の留意点は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ソフトバンク転職におすすめの転職エージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人量。大手通信・IT企業の求人を幅広く保有。検索とエージェントを併用できる。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。高年収求人比率が高く、AI・クラウドなど先端領域のエンジニア求人に強い。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。AI・法人DXの上位ポジションのスカウトに出会いやすい。" },
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
          <h2 className="text-xl font-bold mb-3">ソフトバンクへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手通信・AI・法人DX領域への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "楽天グループ エンジニア転職ガイド", href: "/company/rakuten/" },
              { name: "LINEヤフー エンジニア転職ガイド", href: "/company/line-yahoo/" },
              { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" },
              { name: "技術面接の準備", href: "/knowledge/tech-interview/" },
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
