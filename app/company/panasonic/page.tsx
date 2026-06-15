import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "パナソニックの年収は平均956万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "パナソニックのエンジニア転職を実データで解説。有報の平均年収956万円(2025年3月期・HD)、持株会社制とコネクト社のDX、Blue Yonder、選考フロー、口コミ傾向、30代40代視点まで網羅。",
};

const toc = [
  { id: "conclusion", label: "結論：パナソニック転職の難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック・DX組織（コネクト・Blue Yonder）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "mid-career", label: "30代・40代から見たパナソニック転職" },
  { id: "agents", label: "おすすめ転職エージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名（持株会社）", "パナソニック ホールディングス株式会社"],
  ["業種", "総合電機・エネルギー・B2Bソリューション・IoT"],
  ["主な事業会社", "パナソニック コネクト（B2B・DX）、パナソニック エナジー（車載電池）ほか"],
  ["従業員数", "連結 約23万人規模（公式IR・有報ベース。年度で変動）"],
  ["提出会社（HD）の平均年間給与", "956万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢 / 勤続年数", "44.0歳 / 17.9年（同 有価証券報告書・HD提出会社ベース）"],
  ["本社所在地", "大阪府門真市"],
  ["公開されている主な技術領域", "B2B/SCM DX（Blue Yonder）、組み込み/IoT、エッジ、クラウド、AI/画像解析"],
];

const faqs = [
  {
    q: "パナソニックのエンジニア転職の難易度は？",
    a: "大手総合電機であり人気が高く難易度は高めとされますが、持株会社制のもと事業会社ごとに通年でキャリア採用を行っており、募集職種の要件に専門性が合致すれば30代・40代の経験者にもチャンスがあります。IT/ソフトウェアではパナソニック コネクトが中心です（出典：パナソニック コネクト 公式採用ページ）。",
  },
  {
    q: "パナソニックの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社であるパナソニック ホールディングス（HD）の従業員の平均年間給与は956万円、平均年齢44.0歳、平均勤続年数17.9年です。これは持株会社（HD）提出会社ベースの全社員平均であり、各事業会社やグループ全体の平均とは異なる点に注意が必要です。",
  },
  {
    q: "パナソニックの事業構造（持株会社制）はどうなっていますか？",
    a: "パナソニックは持株会社制を採用し、パナソニック ホールディングスの傘下に、B2B/DXを担うパナソニック コネクト、車載電池のパナソニック エナジーなど複数の事業会社があります。IT/ソフトウェアエンジニアの主戦場はパナソニック コネクトです（出典：パナソニック 公式情報）。",
  },
  {
    q: "Blue Yonder（ブルーヨンダー）とは何ですか？",
    a: "パナソニック コネクトが買収した、サプライチェーンマネジメント（SCM）領域のSaaS企業です。コネクト社はBlue Yonderの研究開発を強化し、パナソニックの現場データと組み合わせてSaaSの付加価値向上を図っています。近年AI関連プロジェクトが拡大しているとの情報があります（出典：パナソニック コネクト 公式・OpenWork傾向）。",
  },
  {
    q: "パナソニック コネクトの選考フローは？",
    a: "公式採用ページによると、応募時に履歴書・職務経歴書を提出し、書類選考を通過した方に面接を案内する流れです。面接は基本オンライン（職種によって一部対面）、平日9:00〜20:00で実施されると案内されています。選考ステップは職種により異なります（出典：パナソニック コネクト 公式採用ページ）。",
  },
  {
    q: "パナソニックで英語力は必要ですか？",
    a: "Blue Yonderは欧米に顧客を持つグローバルSaaS企業であり、海外連携のあるポジションでは英語力が評価されます。一方、国内向けの組み込み・IoT・SE職など日本語で完結するポジションも多数あります。求人ごとの要件を確認することをおすすめします。",
  },
  {
    q: "パナソニック（コネクト）の働き方や評判はどうですか？",
    a: "OpenWorkなどの口コミプラットフォームでは、パナソニック コネクトについて「2017年の社長交代以降カルチャー改革が進み、年功序列から成果ベースの評価への転換が進んだ」という声がある一方、「年齢層が高くキャリア形成に課題を感じる」という声も見られ、評価は分かれます（出典：OpenWork 社員クチコミ傾向）。",
  },
  {
    q: "未出典の等級別年収表はなぜ載せていないのですか？",
    a: "当サイトは確認できた一次情報・出典付き情報のみを掲載する方針です。パナソニックは事業会社ごとにエンジニア職の等級別年収を公式公表していないため、推測による等級別レンジ表は掲載していません。具体額は求人票やエージェント経由で確認するのが現実的です。",
  },
];

export default function PanasonicCompanyPage() {
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
      <ArticleJsonLd title="パナソニック エンジニア転職ガイド" description="パナソニックへのエンジニア転職を実データで解説。有報の平均年収956万円、持株会社制とコネクト社のDX、Blue Yonder、選考フロー、口コミ傾向、30代40代視点まで網羅。" url="/company/panasonic/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "組込みの転職ガイド", href: "/skill/embedded/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "パナソニック" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">パナソニック エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 持株会社制とコネクト社のB2B/DXで変革する総合電機メーカー</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          パナソニックは持株会社制（パナソニック ホールディングス傘下に事業会社が並ぶ構造）を採り、IT/ソフトウェアエンジニアの主戦場は<strong>B2B/DXを担うパナソニック コネクト</strong>です。同社はSCM領域のSaaS企業<strong>Blue Yonder</strong>を取り込み、現場データ×AIによる付加価値創出を進めています。本ガイドでは、有価証券報告書・公式採用ページ・口コミプラットフォームなど<strong>出典が確認できる情報のみ</strong>を使い、エンジニア転職の実態を整理します。製造業の現場知識を持つミドルエンジニアにも接点の多い企業です。
        </p>

        <DataNote surveyedAt="2026年6月" sources={["パナソニック ホールディングス 2025年3月期 有価証券報告書", "パナソニック コネクト 公式採用ページ", "OpenWork（社員クチコミ傾向）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：パナソニック転職の難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 text-sm text-blue-900 leading-relaxed space-y-2">
            <p><strong>難易度は高め。ただし事業会社ごとの通年採用のため、専門性が募集要件に合えば30代・40代でもチャンスは十分。IT/ソフトウェアはコネクト社が中心。</strong></p>
            <p>・<strong>向く人</strong>：B2B/SCMのDX・SaaS開発、組み込み/IoT/エッジ、クラウド、AI/画像解析の実務経験者、製造現場×ITに関心がある人。</p>
            <p>・<strong>向きにくい人</strong>：単一のWebプロダクトのみを志向する人、事業会社・部署による文化差を許容しにくい人。</p>
            <p>・<strong>年収の目安</strong>：HD提出会社の全社員平均は956万円（2025年3月期有報）。事業会社・職種別の公式レンジは非公表のため、具体額はエージェント経由で確認するのが現実的。</p>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与は提出会社（パナソニック ホールディングス）の全社員平均で、各事業会社・職種別・グループ全体の値とは異なります。従業員数は年度により変動します。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 持株会社制・事業会社ごとの採用</h3>
              <p className="text-sm text-blue-700 leading-relaxed">パナソニックは持株会社制のもと、事業会社ごとに採用・人事制度が分かれています。IT/ソフトウェアの中心はB2B/DXを担うパナソニック コネクトで、事業会社単位で求人と報酬体系が異なる点を踏まえて応募先を選ぶことが重要です（出典：パナソニック 公式情報）。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. パナソニック コネクトのB2B/DX・Blue Yonder活用</h3>
              <p className="text-sm text-blue-700 leading-relaxed">コネクト社はサプライチェーン管理、現場プロセスのDX、映像セキュリティなどのB2Bソリューションを展開。買収したSCM領域のSaaS企業Blue Yonderの研究開発を強化し、現場データ×AIによる付加価値創出に取り組んでいます（出典：パナソニック コネクト 公式・OpenWork傾向）。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. くらし×テクノロジー／車載電池などの幅広い技術領域</h3>
              <p className="text-sm text-blue-700 leading-relaxed">スマートホーム・家電IoTなど「くらし」の領域から、パナソニック エナジーの車載電池まで、組み込みからクラウドまで幅広い技術領域があります。製造DX・品質管理AIなど、現場とソフトウェアが交差する領域に強みがあります（出典：パナソニック 公式情報）。</p>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・DX組織（コネクト・Blue Yonder）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            以下は公式採用ページ・公開情報から確認できる範囲の技術・DX組織です。具体的な使用言語・フレームワークは事業会社・募集職種により異なるため、求人票の要件確認をおすすめします。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>B2B/SCM DX（Blue Yonder）</strong>：サプライチェーンSaaSの開発・AI活用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>組み込み/IoT/エッジ</strong>：家電・現場機器・映像セキュリティのコネクテッド化</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>クラウド／データ基盤</strong>：B2Bソリューション基盤の構築・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>AI/画像解析</strong>：現場プロセスの自動化・品質管理</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>製造DX／車載電池</strong>：エナジー社などでの製造現場×ソフトウェア領域</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-3">※公式統一スタックは公表されていないため、公開情報で確認できた技術領域のみを記載しています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>有価証券報告書（2025年3月期）の全社員平均年収：956万円</strong><br />
              平均年齢44.0歳／平均勤続年数17.9年（提出会社＝パナソニック ホールディングスの値）。<br className="hidden md:block" />
              <strong className="block mt-1">注意：</strong>この956万円は<strong>持株会社（HD）提出会社ベース</strong>の全社員平均で、パナソニック株式会社や各事業会社（コネクト等）、グループ全体の平均とは異なります。日本経済新聞の企業年収データなど複数の二次情報も同水準（約956万円）を報じています。
            </p>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            パナソニックは事業会社ごとにエンジニア職の<strong>等級別年収を公式に公表していません</strong>。当ガイドでは出典の取れない等級別年収表は掲載しません。実際の提示額は応募する事業会社・職種・経験で変動するため、求人票か転職エージェント経由で確認するのが確実です。交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉ガイド</Link>、市場価値の考え方は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の見極め方</Link>を参照してください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">パナソニック コネクト 公式採用ページに基づく一般的な流れです（職種により回数・内容は異なります）。</p>
          <ol className="space-y-3">
            {[
              ["応募（履歴書・職務経歴書を提出）", "公式採用ページまたはエージェント経由で応募。"],
              ["書類選考", "経験・スキルと募集要件の合致が見られる。"],
              ["面接（複数回）", "基本オンライン（職種により一部対面）。平日9:00〜20:00で実施と案内。"],
              ["内定・条件提示", "オファー提示を経て決定。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div><p className="font-medium text-slate-800 text-sm">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典：パナソニック コネクト 公式採用ページ（キャリア採用選考プロセス）。選考ステップは事業会社・職種・時期で異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公開情報・口コミの傾向として、次の観点が重視されると言われています（実在しない質問リストの断定は避け、傾向のみ記載）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>応募する事業会社・職種の<strong>専門要件との合致</strong>（B2B/SCM、組み込み、AI等）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>業務の<strong>規模・役割・成果</strong>を具体的に説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>カルチャー改革・成果ベース評価への適応姿勢</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>製造現場・SCMなどドメイン知識（あれば加点要素）</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">出典：パナソニック コネクト 公式採用情報＋口コミの傾向要約。技術面接対策は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の準備</Link>を参照。</p>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たパナソニック転職</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>パナソニックは事業会社ごとの通年・専門性重視の採用のため、<strong>30代・40代の即戦力エンジニア</strong>が応募しやすい構造です。B2B/SCM、組み込み/IoT、製造DXなど特定領域の深い経験は、ミドル層の強みになります。</p>
            <p>製造業・現場系の経験を持つエンジニアにとっては、パナソニックの「現場×ソフトウェア」の領域が経験を活かしやすい場面です。<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業からのIT転職ガイド</Link>で、現場知識を武器に変える考え方を整理しておくと、志望動機に説得力が増します。</p>
            <p>一方、口コミでは「カルチャー改革が進む事業会社（コネクト等）」と「年齢層が高くキャリア形成に課題を感じる現場」が混在するとの声があります。30代・40代は応募先の事業会社・部署のカルチャーと評価制度を面接段階で具体的に確認することが、転職後の満足度を左右します。40代の留意点は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">パナソニック転職におすすめの転職エージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人量。パナソニックグループ各事業会社の求人を幅広く保有。検索とエージェントを併用できる。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "書類添削・面接対策が手厚い。大手メーカーへの転職支援に強く、事業会社別の選考準備をサポート。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。メーカーのDX部門・SaaS・IoT関連ポジションの求人に強い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数社の併用が一般的です。使い分けは<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェント複数利用のコツ</Link>を参照してください。</p>
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
          <h2 className="text-xl font-bold mb-3">パナソニックへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカー・B2B/DX領域への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "製造業からのIT転職ガイド", href: "/industry/manufacturing/" },
              { name: "ソニーグループ エンジニア転職ガイド", href: "/company/sony/" },
              { name: "日立製作所 エンジニア転職ガイド", href: "/company/hitachi/" },
              { name: "トヨタ自動車 エンジニア転職ガイド", href: "/company/toyota/" },
              { name: "富士通 エンジニア転職ガイド", href: "/company/fujitsu/" },
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
