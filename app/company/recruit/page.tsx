import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/recruit/" },
  title: "リクルートの年収は平均1145万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "株式会社リクルートのエンジニア（テクノロジー職）中途採用を一次情報で解説。持株会社の有価証券報告書平均年収、技術スタック、ミッショングレード、選考フロー、口コミ傾向、30代40代の視点をまとめました。",
};

const tableRows: [string, string][] = [
  ["企業名", "株式会社リクルート（リクルートホールディングス傘下の事業会社・非上場）"],
  ["持株会社", "株式会社リクルートホールディングス（東証プライム・証券コード6098）"],
  ["主なプロダクト", "SUUMO、ホットペッパー、じゃらん、リクナビ、Airシリーズ、スタディサプリ 等"],
  ["主なエンジニア職種", "プロダクト開発エンジニア／プロダクト開発ディレクター／データ／社内ICT・DX推進（テクノロジー職）"],
  ["評価制度", "ミッショングレード制（職務価値に応じてグレードを設定）"],
  ["本社所在地", "東京都千代田区"],
];

const sources = [
  "リクルートホールディングス 有価証券報告書（2025年3月期）",
  "株式会社リクルート キャリア採用（recruit.co.jp）",
  "リクルート Tech Blog（技術発信）",
  "OpenWork 等の口コミ傾向",
  "doda「決定年収レポート」2025年5月公表",
];

const techStack = [
  { cat: "言語", items: "TypeScript／Python／Go／Java 等（プロダクトにより多様）" },
  { cat: "クラウド", items: "AWS／GCP" },
  { cat: "データ基盤", items: "BigQuery 等の大規模データ基盤（データドリブンな意思決定文化）" },
  { cat: "領域", items: "Webサービス開発／データサイエンス／ML／社内ICT・DX" },
];

const positions = [
  { name: "プロダクト開発エンジニア", desc: "各プロダクトの設計・開発・運用。事業戦略と直結した技術貢献を担う。" },
  { name: "プロダクト開発ディレクター", desc: "プロダクト開発の方向づけ・推進。中長期視点でのプロダクト育成。" },
  { name: "データ", desc: "国内トップクラスのデータ資産を活用した分析・データサイエンス・ML。" },
  { name: "社内ICT・DX推進", desc: "社内システム・業務プロセスのデジタル化・DX推進。" },
];

const faqs = [
  {
    q: "リクルートのエンジニア転職難易度は？",
    a: "大規模Webサービスの開発経験やデータ活用経験が問われ、難易度は高めとされます。テクノロジー職は複数言語の知識やシステム開発経験が求められる傾向です。ミッショングレード制で年次より職務価値が重視されるため、即戦力性を示せるかが鍵になります。",
  },
  {
    q: "リクルートのエンジニア年収はどのくらい？",
    a: "事業会社の株式会社リクラート自体は非上場のため、同社単独の有価証券報告書はありません。持株会社の株式会社リクルートホールディングス（6098）の有価証券報告書（2025年3月期）では全社員平均年収1,145万円（平均年齢40.5歳）が公表されています。これは持株会社の全社員平均であり、エンジニア職に限定した値ではありません。",
  },
  {
    q: "リクルートにはどんなプロダクトがある？",
    a: "SUUMO、ホットペッパー、じゃらん、リクナビ、Airシリーズ、スタディサプリなど、住宅・飲食・旅行・人材・教育にまたがる国内最大級のプロダクト群があります。プロダクトごとに異なるドメインの技術課題があり、社内での職務の幅が広いのが特徴です。",
  },
  {
    q: "ミッショングレード制とは？",
    a: "年次や経験ではなく、半期ごとに個人が担う職務の価値に応じてグレードを設定し、報酬を決める制度です。高い価値の職務を担うエンジニアには高いグレードが設定されるため、実力・成果が報酬に反映されやすい設計です（リクルート公式の説明ベース）。",
  },
  {
    q: "リクルートの選考フローは？",
    a: "一般的には書類選考、複数回（2〜3回程度）の面接、条件提示という流れです。面接では応募職種の現場マネージャーや部長クラスが登場し、技術力に加え事業課題への技術的アプローチが問われる傾向があります。具体的な質問はポジション・時期で変わるため、当ガイドでは公開されていない質問内容の断定は避けています。",
  },
  {
    q: "リクルートの働き方・ワークライフバランスは？",
    a: "年間休日145日（実質週休3日相当）、フレックスタイム制、リモートワーク可と休日・柔軟性は充実しています。OpenWorkの集計（2026年時点）では月平均残業はおおむね30時間前後、有休消化率は約64%。働き方改革で長時間労働のイメージは改善したとの声が多い一方、部署・時期による差はあります。",
  },
  {
    q: "リクルートへの転職で有利な経験は？",
    a: "大規模Webサービスの設計・開発・運用経験、データ分析・ABテスト・ML活用経験、プロダクトマネジメント経験が有利です。TypeScript／Python／Go等の実務経験者が求められる傾向です。",
  },
  {
    q: "30代・40代でもリクルートに転職できる？",
    a: "ミッショングレード制で年次より職務価値が重視されるため、大規模サービスやデータ領域の専門性を持つ30代・40代は評価されやすい傾向です。年間休日145日・リモート可など、家庭との両立を重視するミドルにとって働き方の条件は整っています。",
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

export default function RecruitCompanyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <ArticleJsonLd
        title="リクルート エンジニア転職ガイド【2026年版】"
        description="株式会社リクルートのエンジニア（テクノロジー職）中途採用を一次情報で解説。平均年収、技術スタック、ミッショングレード、選考、口コミ、30代40代の視点をまとめました。"
        url="/company/recruit/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "リクルート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リクルート エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 国内最大級のプロダクト群を持つテック企業</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社リクルートは、SUUMO・ホットペッパー・Airシリーズなど国内最大級のプロダクト群を運営する事業会社で、東証プライム上場のリクルートホールディングス（6098）傘下にあります。
          本ガイドでは、持株会社の有価証券報告書・公式採用ページ・技術発信・口コミサイトの傾向という一次／公開情報のみをもとに、エンジニア（テクノロジー職）転職の実像を整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：リクルートはこんなエンジニアに向く</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-2">転職難易度：高め（大規模サービス・データ活用の経験）</p>
            <p className="text-sm text-blue-900 leading-relaxed">
              国内最大級のプロダクト群と豊富なデータ資産が強みで、大規模Webサービスやデータ活用の経験が問われます。
              <strong>TypeScript／Python／Go等での大規模開発・データドリブンな開発を経験し、ミッショングレード制で実力評価を受けたいミドルエンジニア</strong>に向いています。
              年間休日145日・リモート可など働き方の条件が整い、家庭との両立を重視する30代・40代にも適した環境です。
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
          <p className="text-xs text-slate-400 mt-2">出典: リクルートホールディングス有価証券報告書（2025年3月期）、株式会社リクルート公式キャリア採用ページ（recruit.co.jp）。</p>
        </section>

        <section id="hiring" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多彩なプロダクトでの開発経験</h3>
              <p className="text-sm text-petrol-deep">SUUMO、ホットペッパー、じゃらん、Airシリーズなど国内最大級のプロダクト群を保有。各プロダクトで異なるドメインの技術課題に取り組め、社内での職務の幅が広いのが特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">国内トップクラスのデータ資産</h3>
              <p className="text-sm text-petrol-deep">公式採用ページでも「国内トップクラスのデータ資産を武器に」と打ち出しており、データドリブンな意思決定文化が根付いています。データ・MLエンジニアの活躍フィールドが広い環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミッショングレード制と充実した休日</h3>
              <p className="text-sm text-petrol-deep">年次より職務価値で評価するミッショングレード制を採用。年間休日145日（実質週休3日相当）、フレックス、リモート可と、働き方の条件が整っています。</p>
            </div>
          </div>
        </section>

        <section id="positions" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">募集しているエンジニア職種（公式）</h2>
          <p className="text-sm text-slate-600 mb-4">株式会社リクルート公式キャリア採用ページ（テクノロジー職）で確認できた主な職種カテゴリです。募集状況は時期により変動します。</p>
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
          <p className="text-xs text-slate-400 mt-2">出典: リクルートTech Blog・公式採用ページの公開情報を要約。リクルートは多数のプロダクトを抱えるため、技術構成はプロダクト・チームにより大きく異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="border border-slate-200 rounded-lg p-5 space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>事業会社の株式会社リクルート自体は非上場</strong>のため、同社単独の有価証券報告書による平均年収はありません。
              上場している持株会社・株式会社リクルートホールディングス（証券コード6098）の有価証券報告書（2025年3月期）では、
              <strong>全社員平均年収1,145万円（平均年齢40.5歳）</strong>が公表されています。
            </p>
            <p>
              この1,145万円は持株会社の全社員平均であり、エンジニア（テクノロジー職）に限定した値ではない点に注意してください。
              エンジニア職に限った提示レンジは公式に統一公開されていないため、当ガイドでは未出典の等級別年収表は掲載していません。正確な提示額は公式求人と面談で確認してください。
            </p>
            <p>
              市場感の参考として、doda「決定年収レポート」（2025年5月公表）ではIT・通信の平均決定年収が2024年度で486万円。
              リクルートはミッショングレード制で職務価値に応じて報酬が決まるため、高い価値の職務を担うほど水準は上がります。年代別の市場相場は
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-2">
            <p>一般的には以下の流れで構成されます。面接回数・順序はポジション・時期により変わります。</p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex gap-2"><span className="text-petrol">1.</span>公式採用ページまたはエージェント経由での応募・書類選考</li>
              <li className="flex gap-2"><span className="text-petrol">2.</span>複数回（2〜3回程度）の面接（現場マネージャー・部長クラス等が登場）</li>
              <li className="flex gap-2"><span className="text-petrol">3.</span>条件提示・オファー面談</li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">公開されていない具体的な質問内容は断定していません。最新は公式採用ページ（recruit.co.jp）でご確認ください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
            <p className="mb-3">公開情報・口コミの傾向では、技術力に加えて事業課題に技術でどう向き合うかという視点が問われやすいとされています。「自ら機会を創り出す」という同社のスタンスに沿った自走力も見られやすいポイントです。</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>システム設計・アーキテクチャに関する技術的な議論</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>事業課題への技術的アプローチ・ビジネス感覚</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>自走力・データドリブンな意思決定の経験</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">具体的な質問文や合否基準は公開情報からは断定できないため、創作した質問リストは掲載していません。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典名付き要約）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-3">
            <p><strong>良い評価の傾向：</strong>OpenWork等の口コミプラットフォームでは、(1)年間休日145日・リモート可など柔軟な働き方、(2)仕事の裁量が大きくキャリア開発の機会が多い、(3)働き方改革で長時間労働のイメージが改善した、といった声が見られます（2026年時点）。</p>
            <p><strong>気をつけたい点の傾向：</strong>同サイトでは、(1)部署・時期により繁忙の波がある（月平均残業はおおむね30時間前後、有休消化率約64%との集計）、(2)成果や自走への期待が高い、といった指摘も見られます。</p>
            <p className="text-xs text-slate-400">口コミは個人の主観であり、部署・時期・職種により実態は異なります。原文転載ではなく傾向の要約として記載しています。</p>
          </div>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>ミッショングレード制で<strong>年次より職務価値が重視されるため、大規模サービスやデータ領域の専門性を持つ30代・40代は評価されやすい</strong>傾向です。社内に多様なプロダクトがあり、ドメインを変えながらキャリアを継続できる点もミドルの強みを活かしやすい要素です。</p>
            <p>年間休日145日・フレックス・リモート可という働き方の条件は、家庭やライフプランを重視する層にとって大きな魅力です。一方で成果・自走への期待は高めなので、面談で配属チームの実態を確認しておくと安心です。市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>、40代の意思決定は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>も参考になります。</p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リクルート転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化で高年収求人に強い。大手・メガベンチャーの非公開求人を保有していることも。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。職務価値の高いポジションのスカウトを受けやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web特化。提案スピードが速く、実務経験者への提案が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">リクルートへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャー・大手テック企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ の転職ガイド", href: "/company/mercari/" },
              { name: "LINEヤフー の転職ガイド", href: "/company/line-yahoo/" },
              { name: "楽天グループ の転職ガイド", href: "/company/rakuten/" },
              { name: "サイバーエージェント の転職ガイド", href: "/company/cyberagent/" },
              { name: "ビジョナル/ビズリーチ の転職ガイド", href: "/company/visional/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
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
