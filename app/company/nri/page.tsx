import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/nri/" },
  title: "野村総合研究所(NRI)エンジニア転職ガイド【2026年】年収・選考",
  description:
    "野村総合研究所(NRI)へのエンジニア転職を解説。有報の平均年収(2026年3月期)、コンサル×ITの採用特徴、公式採用ページの選考フロー、口コミ傾向、30代・40代の狙い目を出典付きでまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんな人向きか" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック・領域" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basic: [string, string][] = [
  ["企業名", "株式会社野村総合研究所（NRI）"],
  ["業種", "ITソリューション・経営/システムコンサルティング"],
  ["上場区分", "東証プライム上場（証券コード4307）"],
  ["平均年収", "1,333万円（2026年3月期 有価証券報告書・全社員平均、平均年齢39.7歳）"],
  ["従業員数", "連結 約1.7万名規模（公式IR）"],
  ["本社所在地", "東京都千代田区"],
  ["主要事業領域", "金融IT・証券IT・資産運用IT・産業IT・コンサルティング・IT基盤"],
];

const features = [
  {
    h: "コンサルティングとITソリューションの両輪",
    p: "NRIは「ナビゲーション×ソリューション」を掲げ、経営/システムコンサルティングとシステム開発・運用を一社で完結させる体制が特徴です。上流の構想策定から実装・運用まで一気通貫で関わるため、要件定義より前の段階から事業に関与できます。",
  },
  {
    h: "金融・証券ドメインの基幹システムが主戦場",
    p: "公式の事業領域は金融ITソリューション・証券ITソリューション・資産運用ITソリューションが大きな柱。証券・銀行・運用会社のミッションクリティカルな基幹システムを多数手がけており、金融ドメインの知識が強く評価されます。",
  },
  {
    h: "キャリア採用を通年で強化",
    p: "NRIはキャリア採用サイト（career.nri.co.jp）を独立運営し、専門性を活かす中途人材を通年募集。リファラル（社員紹介）採用も通常選考と同じ基準で実施していることを公式に明記しています。",
  },
];

const salaryRows: [string, string][] = [
  ["全社員平均年収（2026年3月期）", "1,333万円（平均年齢39.7歳）"],
  ["出典", "野村総合研究所 有価証券報告書（2026年3月期）に基づく公表値"],
];

const flow = [
  "エントリー（公式キャリア採用サイト／エージェント経由）",
  "書類選考",
  "適性検査（Web。一般にSPI形式と案内される）",
  "面接 複数回（部門により2〜3回。経歴・専門性・推進力を確認）",
  "オファー面談（条件提示）→ 内定",
];

const faqs = [
  {
    q: "NRIのエンジニア転職の難易度は？",
    a: "コンサル職に比べるとエンジニア職（ITソリューション部門）は門戸が比較的広いとする転職メディアの解説が複数あります。とはいえ東証プライム上場の高年収企業のため、大規模システムの設計・開発経験や金融ドメイン知識があると有利です。出典：talentsquare等の転職メディア解説。",
  },
  {
    q: "NRIの平均年収はいくら？",
    a: "2026年3月期の有価証券報告書に基づく公表値で全社員平均1,333万円（平均年齢39.7歳）です。これは全社員平均であり、エンジニア職の個別年収レンジを示すものではありません。役職・等級で大きく幅があります。",
  },
  {
    q: "選考フローはどうなっている？",
    a: "公式採用情報・転職メディアによると、書類選考→Web適性検査（SPI形式）→面接複数回→オファー面談という流れが一般的です。部門によって面接回数やケース面接の有無が異なります。",
  },
  {
    q: "NRIのエンジニアとコンサルタントの違いは？",
    a: "NRIはコンサルティング部門とITソリューション部門があり、エンジニア（システムエンジニア／ITスペシャリスト）はシステムの設計・開発・運用を担います。両者が同じプロジェクトで協働する文化が特徴です。",
  },
  {
    q: "技術スタックは？",
    a: "金融・業務系の大規模開発が中心で、JavaやC#といったエンタープライズ言語、Oracle等のDB、AWS/Azureなどのクラウドが採用ページ・求人で示されています。詳細は応募ポジションごとに異なります。",
  },
  {
    q: "残業やワークライフバランスは？",
    a: "OpenWork等の口コミプラットフォームでは「残業は部署・プロジェクトによってばらつきが大きい」「待遇面の満足度は高い」という傾向の声が見られます。繁忙期は残業が増える部署もある一方、近年は抑制の流れという指摘もあります。",
  },
  {
    q: "SIerからWeb系も視野に入れるべき？",
    a: "NRIは大規模・高年収の安定路線が魅力ですが、モダンな自社開発志向ならWeb系も比較検討の価値があります。違いは「SIerからWeb系への転職」の解説をご覧ください。",
  },
  {
    q: "どのエージェントを使うべき？",
    a: "ハイクラスSIer求人を扱うビズリーチ、IT特化のレバテックキャリア、大手求人に強いdoda(IT)あたりを併用するのが現実的です。各レビューページも参考にしてください。",
  },
];

export default function NriCompanyPage() {
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
      <ArticleJsonLd title="野村総合研究所(NRI) エンジニア転職ガイド" description="NRIへのエンジニア転職を解説。有報の平均年収(2026年3月期)、選考フロー、口コミ傾向を出典付きでまとめました。" url="/company/nri/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "C#/.NETの転職ガイド", href: "/skill/csharp/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "野村総合研究所" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">野村総合研究所(NRI) エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 金融IT最高峰・コンサル×テクノロジーの融合企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】NRI（野村総合研究所）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 全社員平均の平均年収は1,333万円です（2026年3月期 有価証券報告書・全社員平均、平均年齢39.7歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・全社員平均年収 1,333万円（2026年3月期 有報、平均年齢39.7歳）。管理職・コンサル職を含む全社員平均です。前期（2025年3月期）の1,322万円から微増です。</li><li>・東証プライム上場（証券コード4307）の高年収企業で、役職・等級により年収の幅が大きい構造です。</li><li>・エンジニア職（ITソリューション部門）の個別レンジは非公表。実際の提示額は求人票・オファー面談での確認が必要です。</li></ul>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          野村総合研究所（NRI）は、経営/システムコンサルティングとITソリューションを一社で完結させる国内有数のIT企業です。本記事では、有価証券報告書の平均年収、公式採用ページの選考フロー、口コミの傾向を出典付きで整理し、30代・40代エンジニアが転職を判断するための材料をまとめます。
        </p>
        <DataNote surveyedAt="2026年8月" sources={["野村総合研究所 有価証券報告書（2026年3月期）", "NRIキャリア採用サイト（career.nri.co.jp）", "OpenWork等の口コミプラットフォーム", "厚生労働省 job tag", "経済産業省 IT人材需給調査（2019年公表）"]} />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんな人向きか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              <strong>結論：</strong>NRIは「金融ドメイン×大規模システム」で高い専門性と高年収（全社員平均1,333万円／2026年3月期 有報）を得たいエンジニアに向く企業です。コンサル職ほど狭き門ではなく、ITソリューション部門のエンジニア採用は通年で行われています。
            </p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・<strong>向いている人</strong>：金融・証券の基幹システム開発経験者、上流工程やPM経験者、安定した大手で専門性を深めたい人</li>
              <li>・<strong>向いていない人</strong>：少人数で内製・モダンな技術スタックを高速に回したい人（その場合は<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>も検討）</li>
              <li>・<strong>難易度の目安</strong>：転職メディアではエンジニア職は中程度の難易度との解説が見られます。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basic.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年収は有価証券報告書（2026年3月期）に基づく全社員平均で、職種別の年収を示すものではありません。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{f.h}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{f.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・領域</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            NRIのエンジニア職は金融・業務系の大規模開発が中心です。公式採用ページ・求人で示される技術要素は概ね以下の通りで、応募ポジションによって大きく異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>エンタープライズ言語：Java / C# / C・C++（通信系・業務系）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>データベース：Oracle 等のリレーショナルDB</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド：AWS / Azure（DX・基盤領域で活用）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>領域：金融IT・証券IT・資産運用IT・産業IT・IT基盤サービス</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">※具体的な使用技術は各求人票の記載が一次情報です。応募前に必ずご確認ください。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {salaryRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            参考までに、IT職全体の市場水準としては、レバテックの2025年公表値で正社員SEの30代平均が約499万円、40代平均が約618万円とされています。NRIの全社員平均1,322万円はこれを大きく上回りますが、これは管理職・コンサル職を含む全社員平均である点に注意してください。エンジニア職の実際の提示年収は、求人票・オファー面談で確認するのが確実です。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-sm text-slate-600 mb-4">公式キャリア採用情報・転職メディアの解説に基づく一般的な流れです（部門により異なります）。</p>
          <ol className="space-y-3">
            {flow.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-slate-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            公開情報・口コミの傾向から、面接では次のような点が確認されやすいと考えられます（断定ではなく傾向の整理です）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>論理的思考力と、課題を構造化して説明できる力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>大規模プロジェクトでの役割・推進経験の具体性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>金融・証券などのドメイン知識やシステム経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>顧客・チームとのコミュニケーション力</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">※具体的な質問内容は時期・面接官・ポジションで変わります。実体験談の創作は行っていません。</p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、NRIについて次のような傾向の声が見られます（原文の転載ではなく傾向の要約です）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-2">良い傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>・待遇・給与水準の満足度が高いとする声</li>
                <li>・専門性を深められる大規模案件が多い</li>
                <li>・近年は残業抑制の流れがあるとの指摘</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li>・残業時間は部署・プロジェクトでばらつきが大きい</li>
                <li>・ワークライフバランスは案件次第という指摘</li>
                <li>・評価制度が分かりにくいとの声</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork等の口コミプラットフォームに見られる傾向の要約。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代のミドルエンジニアにとってNRIは、これまでの大規模開発・上流工程・金融ドメインの経験を「市場価値の高い専門性」として評価してもらいやすい企業です。等級制度のもとで管理職・PM・スペシャリストといった複数のキャリアパスがあるため、マネジメントに寄せるか専門を深めるかを選びやすい点も30代・40代に向きます。
            </p>
            <p>
              一方で、モダンな内製開発を高速に回したいタイプには、SIer特有のレイヤーの多さが合わない場合もあります。年収の絶対額（全社員平均1,333万円）は魅力ですが、これは全社員平均である点を踏まえ、オファー面談で自分の等級・提示額を必ず確認しましょう。年代別の年収相場は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">NRI転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラスSIer・コンサル求人に強いスカウト型。NRI案件を扱うヘッドハンターが多い。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。金融系SIerやDX・クラウド系ポジションの提案に強み。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "国内最大級の求人数。大手SIerの各事業部門の求人を幅広く網羅。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数併用のコツ</Link>を参照。</p>
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
          <h2 className="text-xl font-bold mb-3">NRIへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ハイクラスSIerへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITハイクラス転職の比較（年収750万円以上）", href: "/compare/highclass/" },
              { name: "アクセンチュア の転職ガイド", href: "/company/accenture/" },
              { name: "NTTデータ の転職ガイド", href: "/company/ntt-data/" },
              { name: "富士通 の転職ガイド", href: "/company/fujitsu/" },
              { name: "日立製作所 の転職ガイド", href: "/company/hitachi/" },
              { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" },
              { name: "40代エンジニアの年収", href: "/knowledge/salary-40s/" },
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
