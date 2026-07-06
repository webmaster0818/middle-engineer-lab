import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/plaid/" },
  title: "プレイドの年収は平均939万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "プレイド（東証グロース・4165）のエンジニア中途採用を一次情報で解説。有価証券報告書の平均年収、KARTEの技術スタック、選考フロー、口コミ傾向、30代40代の転職可否までまとめました。",
};

const tableRows: [string, string][] = [
  ["企業名", "株式会社プレイド（東証グロース・証券コード4165）"],
  ["事業内容", "CXプラットフォーム「KARTE」シリーズの開発・提供"],
  ["全社員平均年収", "939万円（2025年9月期・有価証券報告書／平均年齢35.2歳）"],
  ["従業員数", "396名（2025年9月期・有価証券報告書）"],
  ["主な技術スタック", "TypeScript／Node.js／Vue.js・React／BigQuery・Bigtable・Spanner／GCP（公式採用・技術ブログ）"],
  ["本社所在地", "東京都中央区"],
];

const sources = [
  "プレイド 有価証券報告書（2025年9月期、IRBANK集計）",
  "PLAID 採用情報（recruit.plaid.co.jp）",
  "PLAID Engineer Blog（tech.plaid.co.jp）",
  "OpenWork・転職会議 等の口コミ傾向",
];

const salaryHistory: [string, string, string][] = [
  ["2025年9月期", "939万円", "35.2歳"],
  ["2024年9月期", "955万円", "35.1歳"],
  ["2023年9月期", "1,040万円", "34.6歳"],
  ["2022年9月期", "976万円", "34.1歳"],
  ["2021年9月期", "949万円", "33.7歳"],
];

const techStack = [
  { cat: "言語（管理画面）", items: "TypeScript（フロント・バック双方）" },
  { cat: "フロントエンド", items: "Vue.js／React" },
  { cat: "バックエンド", items: "Node.js（マイクロサービス構成）" },
  { cat: "解析基盤（Blitz）", items: "JavaScript／SDK設計。数百ms以内に応答するリアルタイム解析基盤" },
  { cat: "データ基盤", items: "BigQuery／Bigtable／Spanner（GCP）" },
  { cat: "AI開発支援", items: "GitHub Copilot／Cursor／Devin 等" },
];

const faqs = [
  {
    q: "プレイドのエンジニア転職難易度は高い？",
    a: "KARTEは毎秒大量のイベントをリアルタイム処理する技術的難度の高いプロダクトで、設計力・データ処理経験が問われるため難易度は高めです。一方で公開選考体験談ではポテンシャルも見られる傾向があり、TypeScript／Node.jsやデータ基盤の実務経験があるミドルには十分チャンスがあります。",
  },
  {
    q: "プレイドのエンジニア年収はどのくらい？",
    a: "有価証券報告書（2025年9月期）の全社員平均年収は939万円（平均年齢35.2歳）です。これは全社員平均であり、職種・グレードにより差があります。OpenWork等の口コミではエンジニア職の体感レンジに幅があるとの声もあるため、正確な提示額は公式求人・面談で確認してください。",
  },
  {
    q: "KARTEとはどんなプロダクト？",
    a: "Webサイト・アプリの訪問者をリアルタイムで解析し、パーソナライズした顧客体験（CX）を提供するプラットフォームです。KARTE Web／for App／Datahub／Blocks／Signals／Message／Craft 等の製品群で構成され、大量のイベントデータをリアルタイム処理する技術的チャレンジがあります（出典: PLAID公式採用ページ）。",
  },
  {
    q: "プレイドの技術スタックは？",
    a: "公式採用ページ・技術ブログによると、管理画面はフロント・バック双方TypeScript、フロントはVue.jsまたはReact、バックエンドはNode.jsのマイクロサービス構成です。解析基盤「Blitz」は数百ms以内で応答するリアルタイム処理で、データ基盤にBigQuery・Bigtable・Spanner（GCP）を活用しています。",
  },
  {
    q: "プレイドの選考フローは？",
    a: "一般的には書類選考・カジュアル面談・複数回の面接で構成され、職種によりコーディング課題や技術面接が含まれます。具体的な回数・質問はポジション・時期で変わるため、当ガイドでは公開されていない質問内容の断定は避けています。最新は公式採用ページでご確認ください。",
  },
  {
    q: "プレイドは残業が多い？働き方は？",
    a: "OpenWorkの集計（2026年時点）では月平均残業はおおむね26時間前後、有休消化率は約72%とインターネット業界平均並みとされ、フレックスを活用しやすいとの声があります。一方で繁忙の波があるとの指摘もあり、部署・時期による差は前提に考えるのが現実的です。",
  },
  {
    q: "プレイドへの転職で有利な経験は？",
    a: "リアルタイムデータ処理・ストリーム処理の経験、TypeScript／Node.jsの実務経験、BigQuery等GCPのデータ基盤構築経験、フロントエンドのパフォーマンス最適化経験が有利に働きます。",
  },
  {
    q: "30代・40代でもプレイドに転職できる？",
    a: "平均年齢35歳前後とミドル層が中心の組織で、データ処理やプロダクト設計の専門性を持つ30代・40代はマッチしやすい傾向です。年齢より、KARTEの技術課題に貢献できる実務経験が重視されます。",
  },
];

const toc = [
  { id: "conclusion", label: "結論：難易度とどんな人向けか" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "hiring", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミの傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
];

export default function PlaidCompanyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };

  return (
    <>
      <ArticleJsonLd
        title="プレイド エンジニア転職ガイド【2026年版】"
        description="プレイド（東証グロース・4165）のエンジニア中途採用を一次情報で解説。平均年収、KARTEの技術スタック、選考、口コミ、30代40代の転職可否までまとめました。"
        url="/company/plaid/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Vue.jsの転職ガイド", href: "/skill/vue/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Node.jsの転職ガイド", href: "/skill/nodejs/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "プレイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">プレイド エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | CXプラットフォーム「KARTE」を提供する東証グロース上場のデータテック企業</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社プレイド（証券コード4165）は、Webサイト・アプリの訪問者をリアルタイム解析するCXプラットフォーム「KARTE」を提供する上場テック企業です。
          本ガイドでは、有価証券報告書・公式採用ページ・技術ブログ・口コミサイトの傾向という一次／公開情報のみをもとに、エンジニア転職の実像を整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：プレイドはこんなエンジニアに向く</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-2">転職難易度：高め（リアルタイムデータ処理の専門性）</p>
            <p className="text-sm text-blue-900 leading-relaxed">
              KARTEは毎秒大量のイベントを数百ms以内で処理する技術難度の高いプロダクトで、設計力・データ処理経験が問われます。
              <strong>TypeScript／Node.jsの実務経験と、ストリーム処理やGCPのデータ基盤に強みを持つミドルエンジニア</strong>に向いています。
              全社員平均年収は有価証券報告書（2025年9月期）で939万円と高水準。少数精鋭で裁量が大きく、データエンジニアリングの最先端に関わりたい人に適した環境です。
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
          <p className="text-xs text-slate-400 mt-2">出典: プレイド有価証券報告書（2025年9月期、IRBANK集計）、PLAID公式採用ページ・技術ブログ。</p>
        </section>

        <section id="hiring" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リアルタイムデータ処理の最前線</h3>
              <p className="text-sm text-petrol-deep">KARTEは訪問者の行動をリアルタイムで解析し最適なアクションを配信。解析基盤「Blitz」は数百ms以内で応答する設計で、大規模なリアルタイム処理基盤の開発・運用に携われます（出典: PLAID公式採用ページ）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">少数精鋭で大きな裁量</h3>
              <p className="text-sm text-petrol-deep">従業員約400名（2025年9月期）でKARTEシリーズを運営。エンジニア一人あたりの責任範囲が広く、アーキテクチャの意思決定にも深く関われます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">GCPを軸にしたデータ基盤</h3>
              <p className="text-sm text-petrol-deep">BigQuery・Bigtable・Spannerなど、GCPのデータ基盤をフル活用。AI開発支援ツール（Copilot・Cursor・Devin等）の導入も進められています。</p>
            </div>
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
          <p className="text-xs text-slate-400 mt-2">出典: PLAID Engineer Blog（tech.plaid.co.jp）・公式採用ページの公開情報を要約。構成はプロダクト・チームにより異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            上場企業のため、有価証券報告書で<strong>全社員平均年収</strong>が公表されています（直近は2025年9月期で939万円）。以下は全社員平均であり、エンジニア職に限定した値ではありません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">決算期</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">全社員平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年齢</th>
                </tr>
              </thead>
              <tbody>
                {salaryHistory.map(([term, salary, age], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{term}</td>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-3">出典: プレイド有価証券報告書（各年9月期、IRBANK集計）。いずれも全社員平均で、職種・グレードによる差を含みます。</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            エンジニア職に限った提示レンジは公式に統一公開されていないため、当ガイドでは未出典の等級別年収表は掲載していません。市場相場は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
          </p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-2">
            <p>一般的には以下の流れで構成されます。面接回数・順序はポジション・時期により変わります。</p>
            <ul className="space-y-1.5 mt-2">
              <li className="flex gap-2"><span className="text-petrol">1.</span>書類選考・カジュアル面談</li>
              <li className="flex gap-2"><span className="text-petrol">2.</span>技術選考（職種によりコーディング課題・技術面接）</li>
              <li className="flex gap-2"><span className="text-petrol">3.</span>複数回の面接（設計・カルチャーフィット）</li>
              <li className="flex gap-2"><span className="text-petrol">4.</span>最終面接・オファー面談</li>
            </ul>
            <p className="text-xs text-slate-400 mt-2">公開されていない具体的な質問内容は断定していません。最新は公式採用ページ（recruit.plaid.co.jp）でご確認ください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
            <p className="mb-3">公開情報・口コミの傾向からは、リアルタイム処理という事業特性に直結する技術的な思考力と、裁量の大きい環境で自走できるかが見られやすいポイントです。</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>システム設計・データ処理に関する技術的な議論</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>裁量の大きい環境での自走力・課題解決の進め方</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>プロダクト・ユーザー価値への関心</li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">具体的な質問文や合否基準は公開情報からは断定できないため、創作した質問リストは掲載していません。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典名付き要約）</h2>
          <div className="border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed space-y-3">
            <p><strong>良い評価の傾向：</strong>OpenWork・転職会議等の口コミプラットフォームでは、(1)個人が持てる裁量が大きい、(2)職場の人間関係・チームワークが良い、(3)フレックスで働き方を調整しやすい、といった声が見られます（2026年時点）。</p>
            <p><strong>気をつけたい点の傾向：</strong>同サイトでは、(1)激務の波があり安定した稼働を保ちにくい時期がある、(2)トップダウンで物事が決まる側面がある、といった指摘も見られます。月平均残業はおおむね26時間前後、有休消化率は約72%との集計です。</p>
            <p className="text-xs text-slate-400">口コミは個人の主観であり、部署・時期・職種により実態は異なります。原文転載ではなく傾向の要約として記載しています。</p>
          </div>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>平均年齢35歳前後とミドル層が中心の組織で、<strong>データ処理・プロダクト設計の専門性を持つ30代・40代はマッチしやすい</strong>傾向です。年齢より、KARTEの技術課題に貢献できる実務経験が重視されます。</p>
            <p>裁量が大きい分、自走力とキャッチアップ速度が求められます。家庭との両立という観点では、フレックスは追い風ですが、繁忙の波は前提に置き、面談で実態を確認しておくのが現実的です。市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>、40代の意思決定は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>も参考になります。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>TypeScript／Node.jsの実務経験がある</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>リアルタイム処理・ストリーム処理に関心がある</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>BigQuery等GCPのデータ基盤を扱いたい</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>少数精鋭で大きな裁量を持って働きたい</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>データエンジニアリングの最先端に関わりたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 text-sm mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>繁忙の波を一切避けたい</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>明確な指示・レールが整った環境を好む</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>大規模データ処理に関心がない</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>トップダウンの意思決定に抵抗がある</li>
                <li className="flex items-start gap-2"><span className="text-rose-500 shrink-0">×</span>大企業の安定したブランド・制度を最優先する</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プレイド転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化で高年収求人に強い。SaaS・データテックの非公開求人を保有していることも。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型媒体。カジュアル面談で社風を把握しやすい。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web特化。提案スピードが速く、データテック企業の実務経験者に向く。" },
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
          <h2 className="text-xl font-bold mb-3">プレイドへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・データテック企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LayerX の転職ガイド", href: "/company/layerx/" },
              { name: "Visional/ビズリーチ の転職ガイド", href: "/company/visional/" },
              { name: "SmartHR の転職ガイド", href: "/company/smarthr/" },
              { name: "freee の転職ガイド", href: "/company/freee/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
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
