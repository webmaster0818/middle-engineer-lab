import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "note（ノート）エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "note株式会社へのエンジニア転職を実データで解説。有価証券報告書の平均年収763万円（2025年11月期・全社員平均）、Ruby on Rails/Goの公式技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2022年11月期", "680万円"],
  ["2023年11月期", "700万円"],
  ["2024年11月期", "699万円"],
  ["2025年11月期", "763万円"],
];

const basicData: [string, string][] = [
  ["企業名", "note株式会社（東証グロース・5243）"],
  ["事業領域", "メディアプラットフォーム「note」運営・IP/コンテンツクリエーション事業"],
  ["平均年間給与", "763万円（2025年11月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "39.4歳（2025年11月期 有価証券報告書）"],
  ["従業員数", "単体154名（2025年11月期 有価証券報告書）"],
  ["本社所在地", "東京都千代田区"],
  ["技術スタック（公式）", "Ruby / Ruby on Rails / Go / TypeScript / Nuxt.js / Next.js / MySQL（Aurora）/ Redis / AWS / Terraform"],
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
    q: "noteのエンジニア選考フローは？",
    a: "公式採用情報・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「複数回の面接」「オファー面談」という流れです。職種により技術課題やコーディング確認が加わる場合があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "noteの平均年収はいくらですか？",
    a: "2025年11月期の有価証券報告書によると、全社員平均の平均年間給与は763万円、平均年齢は39.4歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・スキル評価により異なります。",
  },
  {
    q: "noteの技術スタックは？",
    a: "公式エンジニアブログ（noteエンジニアチーム）によると、サービス開始（2014年）以来Ruby on Railsを中心に開発しており、一部サブシステムでGoを使用しています。データストアはMySQL（AWS Aurora）・Redis・Elasticsearch等、フロントエンドはNuxt.jsからNext.jsへ段階的に移行中で、インフラはAWSをTerraformで管理しています。",
  },
  {
    q: "noteはどんな会社ですか？上場していますか？",
    a: "note株式会社は2022年12月に東京証券取引所グロース市場へ上場した（証券コード5243）メディアプラットフォーム企業です。クリエイターが文章・画像・音声・動画を投稿し、読者が応援できる「note」を運営しています。",
  },
  {
    q: "noteの平均年齢が高めなのはなぜですか？",
    a: "2025年11月期の有価証券報告書では平均年齢39.4歳で、Web系の中ではやや高めです。上場前後で経験豊富な人材を採用してきた経緯があり、平均年齢は数年で上昇傾向にあります。30代・40代のミドルエンジニアにとっては年齢で浮きにくい組織といえます。",
  },
  {
    q: "noteで活きる経験は？",
    a: "Ruby on Railsを中心としたWebアプリケーション開発の実務経験が基本です。大規模メディア・プラットフォームの運用経験、パフォーマンス改善、Nuxt.js/Next.jsでのフロントエンド開発経験などが活きやすい傾向です。",
  },
  {
    q: "30代・40代でもnoteに転職できますか？",
    a: "平均年齢39.4歳（2025年11月期）と相対的に年齢層に幅があり、年齢よりも実務での課題解決経験・専門性が問われます。プラットフォーム運用やアーキテクチャ設計の経験があれば、ミドル層でも十分挑戦できる環境です。",
  },
];

export default function NoteCompanyPage() {
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
      <ArticleJsonLd title="note エンジニア転職ガイド" description="note株式会社へのエンジニア転職を実データで解説。有価証券報告書の平均年収763万円（2025年11月期・全社員平均）、Ruby on Rails/Goの公式技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/note/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "note" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">note エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | メディアプラットフォーム企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          note株式会社は、クリエイターが文章・画像・音声・動画を投稿できるメディアプラットフォーム「note」を運営する東証グロース上場（証券コード5243）のテックカンパニーです。本ページでは、有価証券報告書・公式採用情報・公式エンジニアブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "note株式会社 有価証券報告書（2025年11月期）",
            "note公式 採用ページ／noteエンジニアチーム（技術ブログ）",
            "note株式会社 東証グロース上場関連リリース（2022年）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              noteは<strong>Ruby on Rails中心の大規模メディアプラットフォームを、コンテンツ文化への共感を持って開発するテック企業</strong>です。Webアプリ開発の実務経験が前提で、難易度は中〜やや高。全社員平均年収763万円（2025年11月期 有報）はWeb系の中でも高めの水準です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Rubyでの実務経験があり、メディア・プラットフォーム運用やクリエイターエコノミーに関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：toB/業務システム中心の開発を強く志向する人、新しい技術への移行に消極的な人</li>
              <li>● <strong>30代・40代</strong>：平均年齢39.4歳と年齢層に幅があり、運用・設計の実績があればハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年11月期 有価証券報告書に基づく全社員平均値（単体）。技術スタックはnoteエンジニアチームの公開記事（2026年6月時点で確認できる範囲）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Ruby on Rails中心の大規模メディアプラットフォーム</h3>
              <p className="text-sm text-blue-700">noteは2014年のサービス開始以来、Ruby on Railsを中核に開発を続けています（公式エンジニアブログ）。月間アクティブユーザー規模の大きいメディアを支えるため、パフォーマンスやスケーラビリティの課題に向き合えるエンジニアが活きる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クリエイターエコノミーというドメイン</h3>
              <p className="text-sm text-blue-700">クリエイターが創作を続けられる「街」をつくることをコンセプトに掲げており、コンテンツ・出版・IP領域のドメイン知識が活きます。技術だけでなく、誰のためにどんな価値を作るかへの当事者意識が問われやすい文化です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">モダンな技術への段階的移行</h3>
              <p className="text-sm text-blue-700">フロントエンドはNuxt.jsからNext.jsへ、インフラはEC2からEKSへ段階的に移行を進めてきました（公式エンジニアブログ）。レガシーの刷新とモダン化の両方に関わる経験を積みたいエンジニアに向いた環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下はnoteエンジニアチーム（公式技術ブログ）の公開記事に基づく技術スタックです。チーム・プロダクトにより採用技術は異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Ruby / Ruby on Rails（中心）、一部サブシステムで Go</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：Nuxt.js から Next.js へ段階的移行（TypeScript）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データストア</strong>：MySQL（AWS Aurora）、Redis、Elasticsearch、DynamoDB など</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>インフラ</strong>：AWS（EKS）、Terraform による構成管理</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: noteエンジニアチーム 公式技術ブログ（engineerteam.note.jp）等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるnoteは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年11月期は763万円（平均年齢39.4歳・全社員平均）</strong>で、上場以降は上昇傾向です。
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
          <p className="text-xs text-slate-400 mb-4">出典: note株式会社 有価証券報告書（各年11月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・スキル評価により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため、本ページでは断定しません。提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用ページ・採用媒体の公開情報をもとにした一般的な流れです。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。働き方やチームの雰囲気を確認）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術ディスカッション・カルチャーフィットを確認）</li>
            <li>技術課題／コーディング確認（職種により実施される場合がある）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: note公式 採用ページ／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模メディア・プラットフォームの運用・改善経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クリエイターエコノミー・コンテンツ文化への共感</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>課題を自分の言葉で定義し、技術選定の背景を説明できるか</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              noteは平均年齢39.4歳（2025年11月期・全社員平均）と、Web系の中では年齢層に幅があります。年齢よりも実務での課題解決経験・専門性が問われる傾向のため、30代・40代のミドルエンジニアでも<strong>運用・設計・刷新の実績があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。noteの全社員平均（763万円）はこれを上回りますが、これは全社平均であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              大規模Railsアプリの運用やモダン化の経験は、ミドル層の強みとして評価されやすい領域です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">note転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。SaaS・Web系の求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">noteへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ウォンテッドリー エンジニア転職ガイド", href: "/company/wantedly-inc/" },
              { name: "Sansan エンジニア転職ガイド", href: "/company/sansan/" },
              { name: "STORES エンジニア転職ガイド", href: "/company/stores/" },
              { name: "BASE エンジニア転職ガイド", href: "/company/base/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
