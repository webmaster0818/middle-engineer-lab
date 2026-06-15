import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "KDDIの年収は平均1018万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "KDDIへのエンジニア転職を実データで解説。有価証券報告書の平均年収1,018万円（2025年3月期・全社員平均）、5G・クラウド（AWS/GCP/Azure/KCPS）・データ・AIの募集職種、ジョブ型人事、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "954万円"],
  ["2022年3月期", "957万円"],
  ["2023年3月期", "974万円"],
  ["2024年3月期", "988万円"],
  ["2025年3月期", "1,018万円"],
];

const basicData: [string, string][] = [
  ["企業名", "KDDI株式会社（東証プライム・9433）"],
  ["事業領域", "パーソナル（au等の通信・5G）、ビジネス（法人DX・クラウド）、金融、エネルギー、グローバル等"],
  ["平均年間給与", "1,018万円（2025年3月期 有価証券報告書・提出会社の全社員平均）"],
  ["平均年齢", "42.0歳（2025年3月期 有価証券報告書・提出会社）"],
  ["本社所在地", "東京都千代田区"],
  ["技術領域（公式採用情報）", "5G・通信ネットワーク、クラウド（AWS/Azure/GCP/KCPS）、データ基盤・AI、法人DX、セキュリティ"],
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
    q: "KDDIのエンジニア選考フローは？",
    a: "公式キャリア採用ページによると、原則「応募（エントリー）」「書類選考」「面接（複数回）」「内定」という流れです。職種・時期により選考回数や内容は変動します。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "KDDIの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（KDDI株式会社単体）の平均年間給与は1,018万円、平均年齢は42.0歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・職務（ジョブ）により異なります。",
  },
  {
    q: "KDDIはどんな技術領域でエンジニアを募集していますか？",
    a: "公式採用情報によると、5G・通信ネットワーク、クラウド（AWS・Azure・GCPに加え自社クラウドKCPS）、データ基盤・AI、法人DX、セキュリティなどの領域で募集があります。データ基盤ではSnowflake・Tableau・Hadoop・Spark・Kafka等の経験が求められる求人もあります。",
  },
  {
    q: "KDDIのジョブ型人事制度とは？",
    a: "KDDIは「KDDI版ジョブ型人事制度」を導入しており、職務（ジョブ）に応じて役割・処遇が決まります。エンジニアは専門性を高めること自体が評価される設計とされ、中途のスペシャリスト採用と相性が良い仕組みです。",
  },
  {
    q: "KDDIの働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、通信大手としての安定性・福利厚生・在宅勤務などの柔軟な働き方を評価する声が見られます（2026年6月時点の口コミ傾向）。一方で大企業ゆえの調整業務に関する意見もあり、実態は部門により異なります。",
  },
  {
    q: "KDDIへの転職難易度は高いですか？",
    a: "クラウド・データ・AI・5Gといった専門領域で即戦力を求める採用が中心です。AWS等のクラウドや大規模分散処理の実務経験があれば挑戦の余地は十分にあり、ジョブ型のため専門性が明確なほど評価されやすい傾向です。",
  },
  {
    q: "30代・40代でもKDDIに転職できますか？",
    a: "提出会社の平均年齢は42.0歳とミドル層が中心で、専門性のある中途採用は現実的です。クラウド・データ・AI・通信などの実績と、大規模システムの設計・運用経験があると評価されやすい傾向です。",
  },
];

export default function KddiCompanyPage() {
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
      <ArticleJsonLd title="KDDI エンジニア転職ガイド" description="KDDIへのエンジニア転職を実データで解説。有価証券報告書の平均年収1,018万円（2025年3月期・全社員平均）、5G・クラウド・データ・AIの募集職種、ジョブ型人事、選考フロー、30代40代の現実までまとめました。" url="/company/kddi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "KDDI" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">KDDI エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 通信×IT・クラウドを軸に事業領域を広げる通信大手のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          KDDIは「au」を中核に、5G通信・法人DX・クラウド・金融・エネルギーなどを展開する東証プライム上場（証券コード9433）の通信大手です。近年は通信とIT・クラウド・AIを融合させたトランスフォーメーションを掲げ、エンジニア採用を強化しています。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "KDDI 有価証券報告書（2025年3月期）",
            "KDDI公式 キャリア採用ページ・採用オウンドメディア",
            "KDDIグループ各社の採用情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              KDDIは<strong>5G通信という巨大インフラを土台に、クラウド・データ・AIで事業を拡張している通信大手</strong>です。ジョブ型人事のもとで専門性が評価されやすく、通信×ITの大規模領域で力を発揮したいエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：クラウド（AWS/GCP/Azure）・データ基盤・AI・通信ネットワークの実務経験があり、大規模インフラに関わりたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：少人数の裁量重視・スピード最優先のスタートアップ的働き方を求める人</li>
              <li>● <strong>30代・40代</strong>：平均年齢42.0歳のミドル中心組織で、専門性があれば中途の枠は現実的</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書に基づく提出会社（KDDI株式会社単体）の全社員平均値。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5G通信×IT・クラウドの大規模インフラ</h3>
              <p className="text-sm text-blue-700">国内屈指の通信ネットワークを基盤に、5G・クラウド・AI領域へ事業を拡張しています。AWS・Azure・GCPといったメガクラウドに加え、自社クラウドサービスKCPSも展開し、提案・設計・構築までを担うクラウドエンジニアを募集しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ジョブ型人事制度で専門性を評価</h3>
              <p className="text-sm text-blue-700">「KDDI版ジョブ型人事制度」を導入し、職務に応じて役割・処遇が決まります。エンジニアは専門性を高めること自体が評価される設計とされ、スペシャリスト志向の中途採用と相性が良いのが特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ・AI領域の強化</h3>
              <p className="text-sm text-blue-700">AI活用に不可欠な大規模計算基盤の整備を進めており、データ基盤・AI領域の求人ではSnowflake・Tableau等のBI、Hadoop・Spark・Kafka等の並列分散処理の経験が求められる募集も見られます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            KDDIは公式キャリア採用ページ（2026年6月時点）で、通信×ITを支える技術職を募集しています。主な領域は以下の通りです。具体的な使用技術・必須スキルは募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>クラウド</strong>：AWS／Azure／GCP、自社クラウドKCPSの提案・設計・構築・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データ基盤・AI</strong>：Snowflake・Tableau等のBI、Hadoop・Spark・Kafka等の並列分散処理、機械学習</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>通信ネットワーク</strong>：5G・コアネットワーク、ネットワーク基盤の設計・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>法人DX・アプリケーション</strong>：法人向けDXソリューション、業務システム開発</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>セキュリティ</strong>：通信・クラウド基盤のセキュリティ</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: KDDI公式 キャリア採用ページ（2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるKDDIは、有価証券報告書で提出会社（KDDI株式会社単体）の平均年間給与を開示しています。<strong>2025年3月期は1,018万円（平均年齢42.0歳・全社員平均）</strong>で、近年は上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: KDDI 有価証券報告書（各年3月期）。いずれも技術職に限らない提出会社（単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・職務（ジョブ）により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は提出会社単体の全社員平均であり、エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。ジョブ型のため提示額は職務・等級により幅があり、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            KDDIのキャリア採用ページで公開されている一般的な流れです。最新の内容は<a href="https://career.kddi.com/career/recruit/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集ポジションの確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>面接（複数回。職種により技術面接を含む）</li>
            <li>内定・条件提示</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: KDDI公式 キャリア採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウド・データ・AI・通信など募集職務（ジョブ）における実務経験と専門性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模インフラ・大量データを扱うシステムの設計・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>通信とITの融合領域・事業変革に貢献する姿勢</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>多部門・パートナーと協働してプロジェクトを進める推進力</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、システム設計の準備は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              KDDIは提出会社の平均年齢42.0歳（2025年3月期・全社員平均）と、通信大手らしくミドル層が中心の組織です。ジョブ型人事のもとで専門性が評価されるため、30代・40代のミドルエンジニアでも<strong>クラウド・データ・AI・通信などの専門領域の実績があれば即戦力として歓迎されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。KDDIの全社員平均（1,018万円）はこれを大きく上回りますが、これは管理職・上位等級を含む全社平均であり、入社時の提示は職務（ジョブ）・等級次第です。30代・40代は「自分が当てはまるジョブの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              通信という巨大インフラと、クラウド・データ・AIといったソフトウェア領域を橋渡しできる人材は希少です。通信・金融など社会基盤系の<Link href="/industry/finance/" className="text-blue-600 hover:underline">金融業界のエンジニア転職</Link>や<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>、<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">KDDI転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。クラウド・データ・通信系の求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・外資・ハイクラスに強く、通信大手の専門職・管理職求人に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">KDDIへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">通信×ITの大手転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ソフトバンク エンジニア転職ガイド", href: "/company/softbank/" },
              { name: "NTT エンジニア転職ガイド", href: "/company/ntt/" },
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "金融業界のエンジニア転職", href: "/industry/finance/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
