import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/sakura-internet/" },
  title: "さくらインターネット エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "さくらインターネットへのエンジニア転職を実データで解説。有価証券報告書の平均年収（2025年3月期）、データセンター・クラウド・GPUインフラの技術、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "519万円"],
  ["2022年3月期", "538万円"],
  ["2023年3月期", "557万円"],
  ["2024年3月期", "587万円"],
  ["2025年3月期", "612万円"],
];

const basicData: [string, string][] = [
  ["企業名", "さくらインターネット株式会社（東証プライム・3778）"],
  ["事業領域", "データセンター運営・クラウドコンピューティング（さくらのクラウド等）・GPUクラウド"],
  ["平均年間給与", "612万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "37.9歳（2025年3月期 有価証券報告書）"],
  ["従業員数", "単体 約700名規模（2025年3月期 有価証券報告書）"],
  ["本社所在地", "大阪府大阪市（東京・福岡等にも拠点）"],
  ["技術スタック（公式）", "Go / Python / Ruby / TypeScript / React / Linux / KVM / OpenStack / Kubernetes / Terraform"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
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
    q: "さくらインターネットのエンジニア選考フローは？",
    a: "公式採用情報によると、一般的には「書類選考」「カジュアル面談（任意）」「複数回の面接」「オファー面談」の流れで、ポジションにより技術面接が加わります。最新の内容は応募求人ごとに確認することが推奨されます。",
  },
  {
    q: "さくらインターネットの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、全社員平均の平均年間給与は612万円、平均年齢は37.9歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は職種・グレードにより異なります。",
  },
  {
    q: "さくらインターネットはどんなエンジニアが活躍していますか？",
    a: "データセンターを自社で運営し、IaaS（さくらのクラウド）やGPUクラウドを提供するインフラ企業のため、Linux・仮想化・ネットワーク・大規模クラウド基盤に強いインフラ／SREエンジニアや、クラウドのコントロールプレーンを開発するソフトウェアエンジニアが活躍しています。",
  },
  {
    q: "さくらインターネットの技術スタックは？",
    a: "公式技術ブログ・採用情報（2026年6月時点）では、バックエンドにGo・Python・Ruby、フロントエンドにTypeScript・React、基盤にLinux・KVM・OpenStack・Kubernetes・Terraformなどが挙げられています。自社クラウド基盤を開発・運用する性質上、低レイヤーからIaCまで幅広い技術が用いられます。",
  },
  {
    q: "さくらインターネットはGPUクラウドに力を入れていますか？",
    a: "さくらインターネットは生成AI向けのGPUクラウド基盤の整備・拡充を公式に発表しており、AI時代の計算基盤を提供する事業を強化しています。大規模GPUインフラの設計・運用に携われる点が、近年の特徴の一つです。",
  },
  {
    q: "さくらインターネットへの転職難易度は高いですか？",
    a: "Linux・仮想化・ネットワークなどインフラの基礎力に加え、大規模クラウド基盤やIaC（Terraform等）の実務経験が評価されます。自社クラウドを開発する企業ならではの低レイヤー理解が問われる傾向で、インフラ志向のエンジニアには適性が活きやすい環境です。",
  },
  {
    q: "30代・40代でもさくらインターネットに転職できますか？",
    a: "平均年齢37.9歳と幅のある組織で、年齢よりもインフラ・クラウドの専門性が問われます。データセンター運用・ネットワーク・大規模クラウド基盤・SREの経験があると、30代40代のミドルエンジニアでも年齢はハンデになりにくい傾向です。",
  },
];

export default function SakuraInternetCompanyPage() {
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
      <ArticleJsonLd title="さくらインターネット エンジニア転職ガイド" description="さくらインターネットへのエンジニア転職を実データで解説。有価証券報告書の平均年収、データセンター・クラウド・GPUインフラの技術、選考フロー、30代40代の現実までまとめました。" url="/company/sakura-internet/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "さくらインターネット" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">さくらインターネット エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | データセンター・クラウドを自社運営するインフラ企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          さくらインターネットは、データセンターを自社で運営し、IaaS「さくらのクラウド」や生成AI向けGPUクラウドを提供する東証プライム上場（証券コード3778）のインフラ企業です。レンタルサーバーから大規模クラウド基盤まで、低レイヤーを含むインフラ技術が事業の中核にある点が特徴です。本ページでは、有価証券報告書・公式採用情報・技術ブログの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "さくらインターネット 有価証券報告書（2025年3月期）",
            "さくらインターネット公式 採用ページ／技術ブログ（さくらのナレッジ等）",
            "さくらインターネット公式 企業情報・IRリリース（GPUクラウド関連）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              さくらインターネットは<strong>データセンターと自社クラウド基盤を運営し、低レイヤーから大規模クラウド・GPUインフラまで携われる国産インフラ企業</strong>です。Linux・仮想化・ネットワーク・IaCの実務経験が直接活きる、インフラ・SRE志向のエンジニアに適した環境です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Linux・仮想化・ネットワーク・大規模クラウド基盤に強く、低レイヤーの理解を深めたいインフラ／SREエンジニア</li>
              <li>● <strong>向いていない人</strong>：toC向けアプリのフロント開発に専念したい人、インフラに関心が薄い人</li>
              <li>● <strong>30代・40代</strong>：インフラ・クラウド・ネットワークの専門性があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書に基づく全社員平均値。技術スタックは公式採用情報・技術ブログ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データセンター・クラウド基盤を内製運営</h3>
              <p className="text-sm text-petrol-deep">物理データセンターから仮想化基盤、IaaSのコントロールプレーンまでを自社で開発・運用しています。クラウドの「中の人」として、低レイヤーから大規模分散システムまで携われるのが大きな特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">生成AI向けGPUクラウドへの投資</h3>
              <p className="text-sm text-petrol-deep">生成AI需要に応えるGPUクラウド基盤の整備・拡充を公式に発表しており、大規模GPUインフラの設計・運用という近年成長中の領域に携われます。AI時代の計算基盤を支える仕事です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">オープンな技術発信文化</h3>
              <p className="text-sm text-petrol-deep">技術ブログ（さくらのナレッジ等）やイベント登壇など、エンジニアの技術発信が活発です。OSSや低レイヤー技術への関心が高い人にとって、知見を深め発信しやすい文化があります。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            さくらインターネットは公式技術ブログ・採用情報（2026年6月時点）で採用技術を公開しています。主な要素は以下の通りです。自社クラウド基盤を開発・運用する性質上、低レイヤーからIaCまで幅広い技術が用いられます。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>バックエンド</strong>：Go、Python、Ruby</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>基盤・仮想化</strong>：Linux、KVM、OpenStack、Kubernetes</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>IaC・運用</strong>：Terraform、Ansible、監視・オブザーバビリティ基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ネットワーク</strong>：データセンター／クラウドのネットワーク設計・運用</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: さくらインターネット公式 採用情報・技術ブログ（2026年6月時点）。配属プロダクトにより技術構成は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるさくらインターネットは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年3月期は612万円（平均年齢37.9歳・全社員平均）</strong>で、近年は上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（全社員平均）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: さくらインターネット 有価証券報告書（各年3月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">全社員平均にはエンジニア以外の職種も含まれます。専門性の高いインフラ・SREポジションでは、全社平均と異なる水準が提示される場合があります。提示額は募集ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            さくらインターネット公式採用ページで案内されている一般的な流れです。最新の内容は<a href="https://www.sakura.ad.jp/corporate/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>カジュアル面談（任意・ポジションにより）</li>
            <li>面接（複数回。技術力・インフラ理解・カルチャーフィットを確認）</li>
            <li>技術面接（ポジションにより）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: さくらインターネット公式 採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Linux・仮想化・ネットワークなどインフラの基礎力と理解の深さ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模クラウド基盤・IaC（Terraform等）の設計／運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>低レイヤーや新技術への探究心・自走力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・技術発信への前向きさ</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、技術ブログでの発信は<Link href="/knowledge/tech-blog/" className="text-petrol hover:underline">技術ブログの活用</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              さくらインターネットは平均年齢37.9歳（2025年3月期・全社員平均）で、年齢層に幅のある組織です。年齢よりもインフラ・クラウドの専門性が問われるため、30代・40代のミドルエンジニアでも<strong>データセンター運用・ネットワーク・大規模クラウド基盤・SREの実務経験があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。さくらインターネットの全社員平均（612万円）はこのレンジに近い水準で、入社時の提示は職種・グレード次第です。30代・40代は「自分が当てはまるポジションの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              インフラ企業ならではの強みとして、<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>や<Link href="/skill/aws/" className="text-petrol hover:underline">クラウド</Link>の実務に、<Link href="/cert/aws-saa/" className="text-petrol hover:underline">AWS認定（SAA）</Link>や<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC</Link>などの資格を掛け合わせると、専門性を客観的に示しやすくなります。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">さくらインターネット転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。インフラ・SRE・クラウド求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。インフラ実務経験者への提案数が多い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャー・事業会社に強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">さくらインターネットへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">インフラ・SRE・クラウドの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "クラスメソッド エンジニア転職ガイド", href: "/company/classmethod/" },
              { name: "GMOペパボ エンジニア転職ガイド", href: "/company/gmo-pepabo/" },
              { name: "インフラエンジニアのスキル", href: "/skill/infrastructure/" },
              { name: "AWSエンジニアのスキル", href: "/skill/aws/" },
              { name: "LPIC（Linux技術者認定）", href: "/cert/lpic/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
