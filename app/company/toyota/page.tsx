import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/toyota/" },
  title: "トヨタ自動車の年収は平均983万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "トヨタ自動車のエンジニア転職を実データで解説。有報の平均年収983万円(2025年3月期)、ソフトウェアファースト、Woven by Toyotaの選考・報酬、口コミ傾向、30代40代視点まで網羅。",
};

const toc = [
  { id: "conclusion", label: "結論：トヨタ転職の難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック・開発組織（Woven by Toyota）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "mid-career", label: "30代・40代から見たトヨタ転職" },
  { id: "agents", label: "おすすめ転職エージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "トヨタ自動車株式会社"],
  ["業種", "自動車・モビリティ"],
  ["ソフトウェア開発子会社", "Woven by Toyota株式会社（自動運転・ソフトウェア基盤を担う）"],
  ["従業員数", "連結 約38万人規模（公式IR・有報ベース。年度で変動）"],
  ["提出会社の平均年間給与", "983万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢 / 勤続年数", "40.7歳 / 15.6年（同 有価証券報告書）"],
  ["本社所在地", "愛知県豊田市（Woven by Toyotaは東京）"],
  ["公開されている主な技術領域", "車載ソフトウェア基盤「Arene」、自動運転、Woven City、クラウド、組み込み"],
];

const faqs = [
  {
    q: "トヨタ自動車のソフトウェアエンジニア中途採用は増えていますか？",
    a: "トヨタは「ソフトウェアファースト」「SDV（Software Defined Vehicle）」を掲げ、ソフトウェア人材の採用を強化しています。特に自動運転・ソフトウェア基盤を担うWoven by Toyotaがソフトウェアエンジニアを継続的に募集しています（出典：Woven by Toyota 公式採用ページ）。",
  },
  {
    q: "トヨタ自動車の平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、トヨタ自動車（提出会社）の従業員の平均年間給与は983万円、平均年齢40.7歳、平均勤続年数15.6年です。これは全従業員の平均であり、エンジニア職に限定した公式レンジではありません。前年から大きく上昇した点が複数の二次情報で報じられています。",
  },
  {
    q: "Woven by Toyotaとトヨタ本体は何が違いますか？",
    a: "Woven by Toyotaは自動運転やソフトウェア基盤の開発を担うグループ会社で、選考が主に英語で行われ、テックカンパニー型の選考プロセスを採用しています。報酬水準もソフトウェアエンジニア向けに高めに設定されているとの市場データがあります（出典：Woven by Toyota 公式採用ページ、Levels.fyi）。トヨタ本体は日本語のポジションも多く、部署により働き方が異なります。",
  },
  {
    q: "Woven by Toyotaの選考フローは？",
    a: "公開情報・面接体験談によると、書類選考 → テイクホーム課題（数時間規模・1週間以内に提出）→ 技術面接（ライブコーディング含む）→ 行動面接（バリュー・問題解決を問う）といった、外資テック企業に近い流れが報告されています。職種・時期で変動します（出典：Woven by Toyota 公式採用ページ、面接体験談）。",
  },
  {
    q: "トヨタ自動車で英語力は必要ですか？",
    a: "Woven by Toyotaは選考・業務で英語が前提となるポジションが多い一方、トヨタ本体は日本語のみで完結する部署も多くあります。グローバルプロジェクトや海外拠点連携の職種では英語力が評価されます。求人ごとの要件確認が必要です。",
  },
  {
    q: "Woven by Toyotaのエンジニア年収レンジは？",
    a: "市場データサイトLevels.fyiでは、Woven by Toyotaのソフトウェアエンジニアの報酬パッケージはおおむね年1,000万円台〜2,000万円超（中央値1,400万円台）と集計されています（時点：2026年6月確認の集計値、二次情報）。これは個人の報告に基づく集計であり公式値ではないため、目安として参照してください。",
  },
  {
    q: "トヨタ自動車の働き方や残業はどうですか？",
    a: "OpenWorkなどの口コミプラットフォームでは、ソフトウェアエンジニア職について「フレックスで残業を自分で調整しやすい」という肯定的な声がある一方、総合職では「プレッシャー・要求が高い」という声も見られ、職種・部署で評価が分かれます（出典：OpenWork、エンカイシャの評判の傾向要約）。",
  },
  {
    q: "未出典の等級別年収表はなぜ載せていないのですか？",
    a: "当サイトは確認できた一次情報・出典付き情報のみを掲載する方針です。トヨタ本体・Woven by Toyotaともに公式の等級別年収表は公表されていないため、推測による等級別レンジ表は掲載していません。具体額は求人票やエージェント経由で確認するのが現実的です。",
  },
];

export default function ToyotaCompanyPage() {
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
      <ArticleJsonLd title="トヨタ自動車 エンジニア転職ガイド" description="トヨタ自動車へのエンジニア転職を実データで解説。有報の平均年収983万円、ソフトウェアファースト、Woven by Toyotaの選考・報酬、口コミ傾向、30代40代視点まで網羅。" url="/company/toyota/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Rustの転職ガイド", href: "/skill/rust/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "組込みの転職ガイド", href: "/skill/embedded/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "トヨタ自動車" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">トヨタ自動車 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ ソフトウェアファースト・Woven by Toyotaで進化する世界最大級の自動車メーカー</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          トヨタ自動車は「ソフトウェアファースト」「SDV（Software Defined Vehicle）」を掲げ、自動車そのものをソフトウェアで進化させる方向へ舵を切っています。その中核を担うのが、自動運転・車載ソフトウェア基盤を開発するグループ会社<strong>Woven by Toyota</strong>です。本ガイドでは、有価証券報告書・公式採用ページ・市場データなど<strong>出典が確認できる情報のみ</strong>を使い、エンジニア転職の実態を整理します。製造業の現場知識を持つミドルエンジニアにとっても接点の多い企業です。
        </p>

        <DataNote surveyedAt="2026年6月" sources={["トヨタ自動車 2025年3月期 有価証券報告書", "Woven by Toyota 公式採用ページ", "Levels.fyi（報酬集計・二次情報）", "OpenWork（社員クチコミ傾向）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：トヨタ転職の難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>難易度は高め。特にWoven by Toyotaは外資テック型の選考で、英語・コーディング・行動面接の準備が必須。</strong></p>
            <p>・<strong>向く人</strong>：自動運転・組み込み・車載ソフトウェア・クラウド基盤の実務経験者、英語での開発に抵抗がない人、社会インフラ規模のスケールに魅力を感じる人。</p>
            <p>・<strong>向きにくい人</strong>：英語の選考・業務を避けたい人（→トヨタ本体の日本語ポジションを検討）、短サイクルのWebプロダクトのみを志向する人。</p>
            <p>・<strong>年収の目安</strong>：トヨタ本体の全社員平均は983万円（2025年3月期有報）。Woven by Toyotaのソフトウェアエンジニア報酬は二次集計で1,000万円台〜2,000万円超（Levels.fyi、目安）。</p>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与は提出会社（トヨタ自動車株式会社単体）の全社員平均で、職種別・Woven by Toyota・グループ全体の値とは異なります。従業員数は年度により変動します。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. ソフトウェアファースト／SDVへの転換</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">車載OS、自動運転、コネクテッドサービスなど、自動車をソフトウェアで進化させるSDV時代に向けてソフトウェアエンジニアの採用を強化しています。開発したソフトウェアが多数の車両に搭載される、社会インフラ規模のスケールが特徴です（出典：トヨタ・Woven by Toyota 公式情報）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. Woven by Toyotaは外資テック型の採用</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">自動運転・ソフトウェア基盤を担うWoven by Toyotaは、選考が主に英語で行われ、テイクホーム課題やライブコーディングを含むテックカンパニー型の選考を採用しています。GAFAM経験者も含むグローバルな開発環境が特徴です（出典：Woven by Toyota 公式採用ページ、面接体験談）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. トヨタ本体は日本語ポジションも多数</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">トヨタ本体や国内のIT/ソフトウェア関連部署には、日本語で完結するポジションも多くあります。英語に不安があってもトヨタグループのソフトウェア領域に関わる道は複数あり、求人ごとに言語要件を確認することが重要です。</p>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発組織（Woven by Toyota）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は公式採用ページ・公開情報から確認できる範囲の技術・開発組織です。具体的な使用言語・フレームワークは募集職種により異なるため、求人票の要件確認をおすすめします。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Woven by Toyota</strong>：自動運転・車載ソフトウェア基盤「Arene」、スマートシティ「Woven City」関連の開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>SDV／車載ソフトウェア</strong>：車載OS・コネクテッド・組み込みリアルタイム領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド／データ基盤</strong>：大規模なモビリティデータの処理・分析基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>機能安全・セキュリティ</strong>：車載系ポジションで重視される領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>開発言語の例</strong>：C++ / Python / Rust 等（職種により異なる。求人票で確認）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-3">※公式統一スタックは公表されていないため、公開情報で確認できた技術領域のみを記載しています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>有価証券報告書（2025年3月期）の全社員平均年収：983万円</strong><br />
              平均年齢40.7歳／平均勤続年数15.6年（提出会社＝トヨタ自動車株式会社単体の値）。全従業員の平均であり、エンジニア職に限定した公式レンジではありません。<br className="hidden md:block" />
              <strong className="block mt-2">Woven by Toyota（ソフトウェアエンジニア）の参考レンジ：年1,000万円台〜2,000万円超</strong>
              市場データサイトLevels.fyiの集計（中央値1,400万円台、2026年6月確認の二次情報）。個人報告に基づく集計のため、あくまで目安です。
            </p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            トヨタ本体・Woven by Toyotaともに<strong>等級別年収を公式に公表していません</strong>。当ガイドでは出典の取れない等級別年収表は掲載しません。具体的な提示額は経験・現年収・ポジションで変動するため、求人票か転職エージェント経由で確認するのが確実です。交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉ガイド</Link>を参照してください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">公開情報・面接体験談に基づく、Woven by Toyotaのソフトウェアエンジニア選考の一般的な流れです（職種・時期で変動）。トヨタ本体は書類選考→適性検査→面接（複数回）が基本です。</p>
          <ol className="space-y-3">
            {[
              ["書類選考", "職務経歴・成果が事業やチームに与えたインパクトが見られる。"],
              ["テイクホーム課題", "数時間規模の課題を1週間以内に提出（Woven by Toyota）。"],
              ["技術面接", "ソフトウェア設計・アルゴリズム・データ構造などをライブコーディング含めて確認。"],
              ["行動面接（バリュー）", "企業バリューや問題解決アプローチを問う、外資テック型の面接。"],
              ["内定・条件提示", "オファー提示を経て決定。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div><p className="font-medium text-slate-800 text-sm">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典：Woven by Toyota 公式採用ページ＋面接体験談の傾向要約。コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>を参照。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公開情報・面接体験談の傾向として、次の観点が重視されると言われています（実在しない質問リストの断定は避け、傾向のみ記載）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>アルゴリズム・データ構造・<strong>ライブコーディング</strong>での実装力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>自分の成果が<strong>事業・チームに与えたインパクト</strong>を説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>企業バリューに沿った<strong>問題解決アプローチ</strong>（行動面接・英語で問われる場合あり）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>自動運転・車載・機能安全など応募ポジションの専門要件との合致</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">出典：Woven by Toyota 公式採用ページ＋面接体験談の傾向要約。技術面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の準備</Link>を参照。</p>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たトヨタ転職</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>Woven by Toyotaはジョブ型・専門性重視のため、<strong>30代・40代の即戦力エンジニア</strong>が応募しやすい構造です。自動運転・組み込み・大規模基盤など特定領域の深い経験は、ミドル層の強みになります。ただし英語での選考・業務が前提のポジションが多く、語学準備の有無が結果を左右します。</p>
            <p>英語の選考に不安がある場合は、トヨタ本体や国内グループ会社の日本語ポジションも選択肢です。製造業の現場・品質・組み込み経験を持つエンジニアは、車載ソフトウェアの機能安全領域などで現場知識を武器にできます。<Link href="/industry/manufacturing/" className="text-petrol hover:underline">製造業からのIT転職ガイド</Link>で、その経験の活かし方を整理しておくと志望動機が強くなります。</p>
            <p>40代でテックカンパニー型の選考に臨む場合、ブランクのあるアルゴリズム・コーディング対策を早めに始めることが重要です。年代別の留意点は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>を参考にしてください。</p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">トヨタ自動車転職におすすめの転職エージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人量。トヨタ本体・グループ会社の幅広い求人を保有。検索とエージェントを併用できる。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。高年収求人比率が高く、Woven by Toyotaのような先進的なソフトウェア組織の求人にも強い。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。Woven by Toyotaなど高報酬ポジションのスカウトに出会いやすい。" },
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
          <h2 className="text-xl font-bold mb-3">トヨタ自動車への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカー・先進的なソフトウェア組織への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "製造業からのIT転職ガイド", href: "/industry/manufacturing/" },
              { name: "日立製作所 エンジニア転職ガイド", href: "/company/hitachi/" },
              { name: "パナソニック エンジニア転職ガイド", href: "/company/panasonic/" },
              { name: "ソニーグループ エンジニア転職ガイド", href: "/company/sony/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
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
