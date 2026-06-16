import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ユーザベース（UZABASE）エンジニア転職ガイド【2026年版】年収・技術・選考",
  description:
    "ユーザベース（旧3991→3966）へのエンジニア転職を実データで解説。上場最終期付近の有価証券報告書の平均年収約760万円（全社員平均）、SPEEDA/NewsPicksの技術スタック（Elixir/Go/Next.js等）、選考、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2018年12月期", "約670万円"],
  ["2019年12月期", "約694万円"],
  ["2020年12月期", "約797万円"],
  ["2021年12月期", "約760万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ユーザベース（旧 東証マザーズ・3966／2023年TOBにより非公開化）"],
  ["事業領域", "経済情報プラットフォーム「スピーダ（SPEEDA）」・ソーシャル経済メディア「NewsPicks」等"],
  ["平均年間給与", "約760万円（2021年12月期 有価証券報告書・全社員平均／上場最終期付近）"],
  ["平均年齢", "33.0歳（2021年12月期 有価証券報告書）"],
  ["従業員数", "単体373名（2021年12月期 有価証券報告書）"],
  ["本社所在地", "東京都千代田区（丸の内）"],
  ["技術スタック（公開情報）", "Elixir / TypeScript / Go / Next.js / Rust / Java / Python / GCP / AWS / Docker / Kubernetes"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公開情報ベース）"],
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
    q: "ユーザベースのエンジニア選考フローは？",
    a: "公式採用情報・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「複数回の面接」「オファー面談」という流れです。職種により技術課題やコーディング確認が加わる場合があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "ユーザベースの平均年収はいくらですか？",
    a: "上場最終期付近（2021年12月期）の有価証券報告書によると、全社員平均の平均年間給与は約760万円、平均年齢は33.0歳です。これは技術職に限らない全社員平均値です。なお同社は2023年2月にTOBにより非公開化されたため、これ以降の同種の数値の公開は限定されます。",
  },
  {
    q: "ユーザベースの技術スタックは？",
    a: "公式技術ブログ（Uzabase for Engineers）の公開情報によると、SaaS事業（スピーダ）のプロダクトチームではElixir・TypeScript・Goを、NewsPicks領域ではNext.js・Rust・Goなどを用いています。Java・Go・Pythonでの開発、GCP/AWS、Docker/Kubernetesといったコンテナ技術も活用されています。チームにより使用技術は異なります。",
  },
  {
    q: "ユーザベースは上場していますか？（TOBについて）",
    a: "ユーザベースは東証マザーズ上場（証券コード3966）でしたが、2022年に米カーライル・グループによるTOB（公開買付け）が成立し、2023年2月に上場廃止・非公開化されました。非公開化後は3〜5年以内の再上場を目指した事業改革を進めると公表されています。",
  },
  {
    q: "ユーザベースはどんな事業をしていますか？",
    a: "ユーザベースは、企業・業界分析のための経済情報プラットフォーム「スピーダ（SPEEDA）」と、ソーシャル経済メディア「NewsPicks」を中心に展開する企業です。経済情報の力でビジネスを支えることをパーパスに掲げています。",
  },
  {
    q: "ユーザベースで活きる経験は？",
    a: "Web/SaaSアプリケーション開発の実務経験が基本です。Elixir・Go・TypeScript・Next.jsなどモダンな技術の経験、データ・情報プラットフォームの開発・運用経験、マイクロサービスやコンテナ基盤の経験などが活きやすい傾向です。チームごとに使用技術が異なるため、希望領域の技術を確認しましょう。",
  },
  {
    q: "30代・40代でもユーザベースに転職できますか？",
    a: "平均年齢33.0歳（2021年12月期）と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。SaaS・メディアの開発運用やマネジメントの経験、テックリードとしての設計経験など、年齢に見合う価値を示せれば、ミドル層でも挑戦できる環境です。",
  },
];

export default function UzabaseCompanyPage() {
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
      <ArticleJsonLd title="ユーザベース エンジニア転職ガイド" description="ユーザベースへのエンジニア転職を実データで解説。上場最終期付近の有価証券報告書の平均年収約760万円（全社員平均）、SPEEDA/NewsPicksの技術スタック（Elixir/Go/Next.js等）、選考、30代40代の現実までまとめました。" url="/company/uzabase/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "Next.jsの転職ガイド", href: "/skill/nextjs/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ユーザベース" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ユーザベース エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 経済情報プラットフォーム企業のエンジニア採用</p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 mb-6">
          <p>ユーザベースは2022年のTOB（公開買付け）成立により、2023年2月に東証マザーズ市場を上場廃止・非公開化されました。本ページの有価証券報告書ベースの数値は、<strong>上場最終期付近である2021年12月期まで</strong>の公開情報に基づきます。非公開化以降の最新の年収・人員データは公開が限定されます。</p>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社ユーザベースは、経済情報プラットフォーム「スピーダ（SPEEDA）」とソーシャル経済メディア「NewsPicks」を中心に展開する企業です（旧 東証マザーズ・証券コード3966）。本ページでは、有価証券報告書・公式採用情報・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社ユーザベース 有価証券報告書（2021年12月期ほか・上場最終期付近）",
            "ユーザベース公式 採用ページ（hrmos.co/pages/uzabase）",
            "Uzabase for Engineers（公式技術ブログ）",
            "ユーザベース TOB・非公開化 関連リリース（2022〜2023年）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ユーザベースは<strong>ElixirやGo、Next.jsなどモダンな技術で経済情報プラットフォームを開発する企業</strong>です。Web/SaaS開発の実務経験が前提で、難易度は中〜やや高。上場最終期付近の全社員平均年収は約760万円（2021年12月期 有報）でWeb系の中でも高めの水準でした。2023年のTOBで非公開化され、再上場を目指した改革フェーズにあります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Elixir/Go/TypeScript等での実務経験があり、経済・データ情報のプラットフォームに関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：上場企業であることを重視する人、画一的な技術環境を強く好む人（チームで技術が異なる）</li>
              <li>● <strong>30代・40代</strong>：平均年齢が若め。SaaS・メディア開発運用や設計の実績で価値を示せるかが鍵</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2021年12月期 有価証券報告書（上場最終期付近）に基づく値（単体）。技術スタックはUzabase for Engineers等の公開情報（2026年6月時点で確認できる範囲）。非公開化以降の最新数値は公開が限定されます。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経済情報プラットフォームというドメイン</h3>
              <p className="text-sm text-petrol-deep">「スピーダ」は企業・業界分析を支える経済情報プラットフォーム、「NewsPicks」はソーシャル経済メディアです。大量の経済データを扱い、情報の質と探索性で価値を生むドメインに技術で向き合えるエンジニアが活きる環境です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">チームごとに技術を選定する文化</h3>
              <p className="text-sm text-petrol-deep">公式技術ブログによると、チームごとに使用する言語や稼働を決めており、Elixir・Go・TypeScript・Next.js・Rustなど多様な技術が使われています。3〜6か月ごとにチーム移動が可能とされ、複数領域の技術に触れたいエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">非公開化後の再上場を目指す改革フェーズ</h3>
              <p className="text-sm text-petrol-deep">2023年のTOBによる非公開化後は、3〜5年以内の再上場を目指した事業改革を進めると公表されています。変化のなかでプロダクトと組織を成長させる局面に関わりたいエンジニアにとって挑戦の機会がある環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下はUzabase for Engineers（公式技術ブログ）の公開情報に基づく技術スタックです。チーム・プロダクトにより採用技術は大きく異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>スピーダ（SaaS）領域</strong>：Elixir、TypeScript、Go を中心に開発・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>NewsPicks 領域</strong>：Next.js、Rust、Go など</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>共通</strong>：Java、Go、Python を用いた開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：GCP、AWS、Docker、Kubernetes 等のコンテナ技術</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: Uzabase for Engineers（tech.uzabase.com）等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ユーザベースは上場企業であった期間、有価証券報告書で全社員平均の平均年間給与を開示していました。<strong>上場最終期付近の2021年12月期は約760万円（平均年齢33.0歳・全社員平均）</strong>です。
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社ユーザベース 有価証券報告書（各年12月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。2023年2月の非公開化以降は同種の数値の公開が限定されます。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため、本ページでは断定しません。提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用情報・採用媒体の公開情報をもとにした一般的な流れです。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。事業やチームの理解を深める）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術ディスカッション・カルチャーフィットを確認）</li>
            <li>技術課題／コーディング確認（職種により実施される場合がある）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ユーザベース公式 採用ページ（hrmos.co/pages/uzabase）／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Elixir／Go／TypeScript 等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>SaaS・メディア・情報プラットフォームの開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術選定の背景を自分の言葉で語れるか（チームで技術を選ぶ文化）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>パーパスへの共感・自律的に課題に向き合う姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ユーザベースは平均年齢33.0歳（2021年12月期・全社員平均）と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。30代・40代のミドルエンジニアは、<strong>SaaS・メディアの開発運用やアーキテクチャ設計、テックリードやマネジメントの経験</strong>など、年齢に見合う価値を示せるかが評価の分かれ目です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ユーザベースの上場最終期付近の全社員平均（約760万円）はこれを上回りますが、これは全社平均かつ過年度の値であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              チームで技術を選ぶ文化や再上場を目指す改革フェーズは、技術選定や組織づくりに踏み込みたいミドル層にとって魅力的な側面です。一方で非公開化中という前提は理解しておきましょう。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップと大企業の比較</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ユーザベース転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。SaaS・スタートアップの求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">ユーザベースへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・メディア企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "note エンジニア転職ガイド", href: "/company/note/" },
              { name: "SmartNews エンジニア転職ガイド", href: "/company/smartnews/" },
              { name: "Sansan エンジニア転職ガイド", href: "/company/sansan/" },
              { name: "ウォンテッドリー エンジニア転職ガイド", href: "/company/wantedly-inc/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
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
