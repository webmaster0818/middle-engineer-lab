import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ウォンテッドリー（Wantedly）エンジニア転職ガイド【2026年版】年収・技術・選考",
  description:
    "ウォンテッドリー株式会社（3991・東証グロース）へのエンジニア転職を実データで解説。有価証券報告書の平均年収681万円（全社員平均）、Ruby on Rails/Go/Reactの技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "ウォンテッドリー株式会社（東証グロース・3991）"],
  ["事業領域", "ビジネスSNS「Wantedly」（採用・つながり）等の運営"],
  ["平均年間給与", "約681万円（直近 有価証券報告書・全社員平均）"],
  ["平均年齢", "約30歳（直近 有価証券報告書・全社員平均）"],
  ["従業員数", "約104名（直近 有価証券報告書・単体）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公開情報）", "Ruby / Ruby on Rails / Go / gRPC / Python / React / TypeScript / GraphQL / GitHub Actions / CircleCI"],
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
    q: "ウォンテッドリーのエンジニア選考フローは？",
    a: "公式採用情報・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「複数回の面接」「オファー面談」という流れです。職種により技術課題やコーディング確認が加わる場合があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "ウォンテッドリーの平均年収はいくらですか？",
    a: "直近の有価証券報告書によると、全社員平均の平均年間給与は約681万円、平均年齢は約30歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・スキル評価により異なります。最新の数値は最新の有価証券報告書でご確認ください。",
  },
  {
    q: "ウォンテッドリーの技術スタックは？",
    a: "公式技術ブログ・採用ページの公開情報によると、フロントエンドはReact・TypeScript・GraphQL、バックエンドはRuby・Ruby on Rails・Go・gRPC・Protocol Buffers・Pythonを採用しています。当初はRailsで構築し、規模の大きいサービスでGoへの移行を進めてきた経緯があります。",
  },
  {
    q: "ウォンテッドリー社の企業ページと『Wantedlyエージェントの口コミ』は別ですか？",
    a: "はい、別物です。本ページはビジネスSNS「Wantedly」を運営するウォンテッドリー株式会社（証券コード3991）への転職を扱う企業ガイドです。転職サービスとしてのWantedlyの口コミ・使い方は別途エージェント・サービスのレビューページで扱っています。",
  },
  {
    q: "ウォンテッドリーは上場していますか？",
    a: "ウォンテッドリー株式会社は2017年9月に東京証券取引所マザーズ市場（現・グロース市場）へ上場した、証券コード3991の企業です。ビジネスSNS「Wantedly」を中心に事業を展開しています。",
  },
  {
    q: "ウォンテッドリーで活きる経験は？",
    a: "Ruby on RailsやGoを用いたWebアプリケーション開発の実務経験が基本です。SNS・マッチングプラットフォームの開発・運用経験、React/TypeScriptでのフロントエンド開発経験、マイクロサービス・gRPCの経験などが活きやすい傾向です。",
  },
  {
    q: "30代・40代でもウォンテッドリーに転職できますか？",
    a: "平均年齢は約30歳と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。テックリードやマネジメントの経験、プラットフォーム設計やGo移行のような大規模リアーキテクチャの経験など、年齢に見合う価値を示せるかが重要です。",
  },
];

export default function WantedlyIncCompanyPage() {
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
      <ArticleJsonLd title="ウォンテッドリー エンジニア転職ガイド" description="ウォンテッドリー株式会社（3991・東証グロース）へのエンジニア転職を実データで解説。有価証券報告書の平均年収681万円（全社員平均）、Ruby on Rails/Go/Reactの技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/wantedly-inc/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ウォンテッドリー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ウォンテッドリー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ビジネスSNSを運営するプラットフォーム企業のエンジニア採用</p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600 mb-6">
          <p>本ページは、ビジネスSNS「Wantedly」を<strong>運営する企業・ウォンテッドリー株式会社（証券コード3991）への転職</strong>を扱う企業ガイドです。転職サービスとしてのWantedlyの使い方・口コミとは別物として整理しています。</p>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          ウォンテッドリー株式会社は、「シゴトでココロオドルひとをふやす」をミッションに、ビジネスSNS「Wantedly」を中心に展開する東証グロース上場（証券コード3991）の企業です。本ページでは、有価証券報告書・公式採用情報・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ウォンテッドリー株式会社 有価証券報告書（直近期）",
            "ウォンテッドリー公式 採用ページ／技術ブログ",
            "ウォンテッドリー株式会社 東証マザーズ上場関連情報（2017年）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ウォンテッドリーは<strong>Ruby on RailsとGoでビジネスSNSを開発する、少数精鋭のプラットフォーム企業</strong>です。Webアプリ開発の実務経験が前提で、難易度は中〜やや高。全社員平均年収は約681万円（直近 有報）です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Ruby/Goでの実務経験があり、SNS・マッチングプラットフォームやマイクロサービスに関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：大規模組織での明確な役割分担を強く好む人、技術選定に関わりたくない人</li>
              <li>● <strong>30代・40代</strong>：平均年齢が若めのためシニア寄りの立ち位置。テックリード・設計の実績で価値を示せるかが鍵</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は直近の有価証券報告書に基づく全社員平均値（単体）。決算期により数値は変動するため、最新値は最新の有価証券報告書でご確認ください。技術スタックは公式技術ブログ・採用ページの公開情報（2026年6月時点で確認できる範囲）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビジネスSNSというドメイン</h3>
              <p className="text-sm text-blue-700">「Wantedly」は共感を軸に人と会社をつなぐビジネスSNSです。採用・マッチング・つながりといったソーシャルプラットフォーム特有の課題に向き合えるエンジニアが活きる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">RailsからGoへのリアーキテクチャ経験</h3>
              <p className="text-sm text-blue-700">公式技術ブログによると、当初はRuby on Railsで構築し、規模の大きいサービスを切り出す過程でGoへの移行を進めてきました。モノリスからマイクロサービスへの移行に技術的背景を持って取り組める点が特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">少数精鋭で技術選定に関われる</h3>
              <p className="text-sm text-blue-700">従業員規模が相対的にコンパクトなため、一人ひとりが幅広いプロダクトや技術選定に関わりやすい環境です。新規事業からグロースフェーズまで、複数プロダクトに横断的に貢献したいエンジニアに向いています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下は公式技術ブログ・採用ページの公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Ruby / Ruby on Rails、Go、gRPC / Protocol Buffers、Python</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：React、TypeScript、GraphQL</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>CI/CD</strong>：GitHub Actions、CircleCI</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>特徴</strong>：モノリス（Rails）から大規模サービスをGoのマイクロサービスへ移行してきた構成</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: ウォンテッドリー公式 技術ブログ・採用ページ等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるウォンテッドリーは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>直近の全社員平均は約681万円（平均年齢 約30歳）</strong>です。決算期により数値は変動するため、最新値は最新の有価証券報告書でご確認ください。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 mb-4">
            <p className="leading-relaxed">本ページでは出典の確実な単年の数値のみを掲載し、年度ごとの推移は創作せず明記を避けています。平均年間給与は技術職に限らない<strong>全社員平均</strong>であり、エンジニア個人の年収は等級・スキル評価により異なります。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため断定しません。</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            参考として、レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ウォンテッドリーの全社員平均はこれを上回りますが、提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。
          </p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用情報・採用媒体の公開情報をもとにした一般的な流れです。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。働き方やチームの雰囲気を確認）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術ディスカッション・カルチャーフィットを確認）</li>
            <li>技術課題／コーディング確認（職種により実施される場合がある）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: ウォンテッドリー公式 採用ページ／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails／Go等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>SNS・マッチングプラットフォームの開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術選定・リアーキテクチャの背景を語れるか</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ミッションへの共感・自律的に課題を見つける姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ウォンテッドリーは平均年齢が約30歳と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。30代・40代のミドルエンジニアは、<strong>テックリードやマネジメントの経験、プラットフォーム設計やGo移行のような大規模リアーキテクチャの経験</strong>など、年齢に見合う価値を明確に示せるかが評価の分かれ目です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。ウォンテッドリーの全社員平均（約681万円）はこれを上回りますが、これは全社平均であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              少数精鋭ゆえに、技術選定や横断的な改善に踏み込める裁量がある点はミドル層にとって魅力です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウォンテッドリー転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">ウォンテッドリーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "note エンジニア転職ガイド", href: "/company/note/" },
              { name: "ビズリーチ（Visional）エンジニア転職ガイド", href: "/company/visional/" },
              { name: "Sansan エンジニア転職ガイド", href: "/company/sansan/" },
              { name: "ラクスル エンジニア転職ガイド", href: "/company/raksul/" },
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
