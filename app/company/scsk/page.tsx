import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SCSKの年収は平均796万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "SCSK（9719）へのエンジニア転職を実データで解説。有価証券報告書の平均年収796万円（2026年3月期・全社員平均）、住友商事系の大手SIerとしての事業、Java・クラウド(AWS/Azure)の募集領域、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2022年3月期", "752万円"],
  ["2023年3月期", "746万円"],
  ["2024年3月期", "764万円"],
  ["2025年3月期", "787万円"],
  ["2026年3月期", "796万円"],
];

const basicData: [string, string][] = [
  ["企業名", "SCSK株式会社（東証プライム・9719／住友商事グループ）"],
  ["事業領域", "コンサルティング、システム開発、検証サービス、ITインフラ構築、ITマネジメント（運用）、ハード・ソフト販売、BPO等のフルラインナップITサービス"],
  ["平均年間給与", "796万円（2026年3月期 有価証券報告書・提出会社の全社員平均）"],
  ["平均年齢", "42.7歳（2026年3月期 有価証券報告書・提出会社）"],
  ["平均勤続年数", "約16.7年（2026年3月期 有価証券報告書・提出会社）"],
  ["本社所在地", "東京都江東区"],
  ["技術領域（公式採用情報）", "Java・Python等の開発、クラウド（AWS・Azure）、データ・AI活用、クラウドネイティブ、サイバーセキュリティ、UXデザイン"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術領域・募集職種（公式採用情報ベース）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "SCSKの平均年収はいくらですか？",
    a: "2026年3月期の有価証券報告書によると、提出会社（SCSK株式会社単体）の平均年間給与は796万円、平均年齢は約42.7歳、平均勤続年数は約16.7年です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・職務・評価により異なります。SCSKの年収は近年上昇傾向で、待遇改善の施策も継続しています。",
  },
  {
    q: "SCSKはどんな会社ですか？",
    a: "SCSKは2011年に住友商事グループのSIer「住商情報システム」と独立系SIer「CSK」が合併して誕生した、東証プライム上場（証券コード9719）の大手SIerです。コンサルティングからシステム開発、検証、ITインフラ構築、運用（ITマネジメント）、BPOまで、ビジネスに必要なITサービスをフルラインナップで提供しています。",
  },
  {
    q: "SCSKの技術領域・使用技術は？",
    a: "公式採用情報によると、Java・Python等の開発言語、クラウド（AWS・Azure）、データベース運用が基本スキルとして挙げられます。SCSKは「技術ビジョン2030」を掲げ、AI・データ活用、クラウドネイティブ、AI駆動型開発、サイバーセキュリティ、UXデザインなどの注力デジタル領域へ投資しています。具体的な使用技術は案件・ポジションにより異なります。",
  },
  {
    q: "SCSKは働きやすい会社ですか？",
    a: "SCSKは「働きやすい・やりがいのある会社」を掲げ、残業時間の削減や有給取得促進などの働き方改革を早くから進めてきた企業として知られます。OpenWork等の口コミでも、ワークライフバランスや福利厚生を評価する声が見られます（2026年6月時点の口コミ傾向）。一方で大手SIerゆえの調整業務に関する意見もあり、実態は部門・案件により異なります。",
  },
  {
    q: "SCSKへの転職難易度は高いですか？",
    a: "システム開発・運用の実務経験（目安3年以上）が一般的な基準とされ、Java等の開発経験やクラウド（AWS/Azure）の経験があると評価されやすい傾向です。中途採用比率も高く、即戦力のエンジニアを継続的に採用しています。上流工程・PM経験やドメイン知識があると、より高いポジションで挑戦できます。",
  },
  {
    q: "30代・40代でもSCSKに転職できますか？",
    a: "提出会社の平均年齢は約42.7歳、平均勤続年数は約16.7年と、ミドル・ベテラン層が中心の安定した組織です。30代・40代の中途採用は現実的で、システム開発・運用の実務経験やPM・上流工程の経験があると即戦力として歓迎されやすい傾向です。長期就業しやすい環境を求めるミドルにも向いています。",
  },
  {
    q: "SCSKは大手SIerの中でどんな位置づけですか？",
    a: "SCSKは住友商事グループの中核IT企業で、独立系・ユーザー系の両方の出自を持つ大手SIerです。コンサルから開発・運用・BPOまで一気通貫で提供できる点と、働き方改革・待遇改善に積極的な点が特徴とされます。NTTデータ・野村総合研究所（NRI）・アクセンチュア等と比較検討されることが多い企業です。",
  },
];

export default function ScskCompanyPage() {
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
      <ArticleJsonLd title="SCSK エンジニア転職ガイド" description="SCSKへのエンジニア転職を実データで解説。有価証券報告書の平均年収796万円（2026年3月期・全社員平均）、住友商事系大手SIerの事業、Java・クラウドの募集領域、選考フロー、30代40代の現実までまとめました。" url="/company/scsk/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "SCSK" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SCSK エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 住友商事グループの中核を担うフルラインナップ大手SIer</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          SCSK株式会社は、住友商事グループの中核IT企業として、コンサルティングからシステム開発・検証・ITインフラ構築・運用・BPOまでをフルラインナップで提供する東証プライム上場（証券コード9719）の大手SIerです。働き方改革と待遇改善に早くから取り組んできた企業としても知られます。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "SCSK株式会社 有価証券報告書（2026年3月期）",
            "SCSK公式 非財務情報（サステナビリティ）",
            "SCSK公式 キャリア採用ページ・採用情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              SCSKは<strong>住友商事グループの安定基盤の上で、コンサルから開発・運用まで一気通貫のITサービスを提供する大手SIer</strong>です。大規模案件と上流工程に関わりつつ、働きやすい環境で長く働きたいエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Java等の開発やクラウド（AWS/Azure）の実務経験があり、上流工程・大規模案件・安定基盤を重視するエンジニア</li>
              <li>● <strong>向いていない人</strong>：自社プロダクトを少人数で高速に作るスタートアップ的な働き方を最優先する人</li>
              <li>● <strong>30代・40代</strong>：平均年齢42.7歳・平均勤続16.7年のベテラン中心組織。経験者の中途は現実的で長期就業もしやすい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・平均勤続年数は2026年3月期 有価証券報告書に基づく提出会社（SCSK株式会社単体）の値。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">コンサルから運用まで一気通貫のフルラインナップ</h3>
              <p className="text-sm text-petrol-deep">SCSKはコンサルティング・システム開発・検証サービス・ITインフラ構築・ITマネジメント（運用）・BPOまで、ITサービスをフルラインナップで提供しています。上流から運用まで幅広い工程に関われるため、得意領域を深めることも、キャリアの幅を広げることもしやすい環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「技術ビジョン2030」とデジタル領域への投資</h3>
              <p className="text-sm text-petrol-deep">SCSKは「共創ITカンパニー」の実現に向け「技術ビジョン2030」を策定し、AI・データ活用、クラウドネイティブ、AI駆動型開発、サイバーセキュリティ、UXデザイン、先端技術といった注力デジタル領域へ戦略的に投資しています。従来型SIから先端デジタル領域へキャリアを広げたいエンジニアに機会があります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">働き方改革・待遇改善に積極的</h3>
              <p className="text-sm text-petrol-deep">SCSKは残業削減・有給取得促進などの働き方改革を早くから進めてきた企業として知られ、近年は給与水準の引き上げも継続しています。平均勤続年数が約16.7年と長く、安定して長く働ける環境を求めるミドルにとって魅力的な特徴です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SCSKは公式キャリア採用ページ（2026年6月時点）で、SE・インフラ・Webエンジニア等の技術職を募集しています。主な領域は以下の通りです。具体的な使用技術・必須スキルは案件・ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>システム開発</strong>：Java・Python等での設計・実装、上流工程・PM</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド・インフラ</strong>：AWS・Azure等のクラウド構築・運用、クラウドネイティブ</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ・AI</strong>：データ活用基盤、AI・AI駆動型開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>セキュリティ</strong>：サイバーセキュリティ</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>UX・コンサル・BPO</strong>：UXデザイン、ITコンサルティング、運用・BPO</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: SCSK公式 キャリア採用ページ・「技術ビジョン2030」（2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるSCSKは、有価証券報告書で提出会社（SCSK株式会社単体）の平均年間給与を開示しています。<strong>2026年3月期は796万円（平均年齢約42.7歳・全社員平均）</strong>で、近年は上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（提出会社・全社員平均）</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([year, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{year}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: SCSK株式会社 有価証券報告書（各年3月期）。2025年3月期は公式非財務情報でも「7,877千円（787.7万円）」と開示されています。いずれも技術職に限らない提出会社（単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・職務・評価により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は提出会社単体の全社員平均であり、職種別の公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。平均年齢が高め（約42.7歳）の組織のため平均年収も高く出やすい点に留意し、自分の等級・職務に該当する水準は個別求人・面談で確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SCSKのキャリア採用ページで公開されている一般的な流れです。最新の内容は<a href="https://www.scsk.jp/recruit/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集ポジションの確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>面接（複数回。職種によりスキル・経験の確認を含む）</li>
            <li>内定・条件提示</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: SCSK公式 キャリア採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>システム開発・運用の実務経験（目安3年以上）と、担当工程での具体的な役割</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Java等の開発スキル、クラウド（AWS/Azure）・DB運用の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>上流工程・プロジェクトマネジメントの経験、顧客折衝の力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チーム・パートナーと協働してプロジェクトを進める推進力</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、システム設計の準備は<Link href="/knowledge/system-design/" className="text-petrol hover:underline">システム設計面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              SCSKは提出会社の平均年齢約42.7歳・平均勤続年数約16.7年（2026年3月期）と、ミドル・ベテラン層が中心の安定した組織です。中途採用比率も高く、30代・40代のミドルエンジニアでも<strong>システム開発・運用の実務経験やPM・上流工程の経験があれば即戦力として歓迎されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。SCSKの全社員平均（796万円）はこれを上回りますが、これは管理職・上位等級・ベテラン層を含む全社平均であり、入社時の提示は職務・等級・経験次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              SCSKは働き方改革・待遇改善に積極的で、長く安定して働ける環境を求めるミドルに向いています。同じ大手SIer・コンサル領域では<Link href="/company/ntt-data/" className="text-petrol hover:underline">NTTデータ</Link>・<Link href="/company/nri/" className="text-petrol hover:underline">野村総合研究所（NRI）</Link>・<Link href="/company/accenture/" className="text-petrol hover:underline">アクセンチュア</Link>との比較もおすすめです。年代別の事情は<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、年収戦略は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SCSK転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。SIer・クラウド系の求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・ハイクラスに強く、大手SIerの専門職・管理職求人に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">SCSKへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手SIer・クラウド転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "野村総合研究所（NRI） エンジニア転職ガイド", href: "/company/nri/" },
              { name: "アクセンチュア エンジニア転職ガイド", href: "/company/accenture/" },
              { name: "SHIFT エンジニア転職ガイド", href: "/company/shift/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
