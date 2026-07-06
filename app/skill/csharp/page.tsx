import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "C#/.NETエンジニア転職ガイド｜年収・資格・求人の探し方";
const PAGE_DESC =
  "C#/.NETエンジニアの転職を年収データ・Azure認定資格・求人の探し方まで解説。求人ボックスやフリーランスボードの公表年収、レバテック年代別データを出典付きで掲載。30代・40代の参入ルートとおすすめエージェントも紹介します。";

const toc = [
  { id: "conclusion", label: "結論：C#/.NET転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "mid", label: "30代・40代視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "業務系アプリエンジニア",
    note: "ASP.NET Core・Entity Framework CoreでのWebアプリ・基幹業務システム開発。C#の最も安定した需要領域。",
    cert: "—（実務経験重視）",
  },
  {
    role: "Azureクラウドエンジニア",
    note: "C#＋Azureでのクラウドネイティブ設計、Azure Functions等のサーバーレス開発。",
    cert: "AZ-204（Azure Developer Associate）",
  },
  {
    role: "Unityエンジニア",
    note: "ゲーム開発に加え、XR・メタバース・産業用ビジュアライゼーションまで。C#がUnityの標準言語。",
    cert: "—（ポートフォリオ重視）",
  },
  {
    role: "テックリード／アーキテクト",
    note: ".NET基盤のシステム設計・技術選定・チームリード。クラウド設計資格があると強い。",
    cert: "AZ-305（Solutions Architect）等",
  },
];

const faqs = [
  {
    q: "C#/.NETエンジニアの年収はどれくらい？",
    a: "求人ボックスの給料ナビでは、C#エンジニアの平均年収は約550万円（公表値）とされています。これは募集中の求人票を集計した値です。フリーランス領域では、フリーランスボード調べでC#案件の平均年収が約810万円（2025年9月時点・公表値）と報告されており、雇用形態で大きく差が出ます。年代別の目安としては、レバテックが公表する正社員SEの平均年収（2025年）で30代約499万円・40代約618万円が参考になります。",
  },
  {
    q: "C#/.NETの将来性は？",
    a: ".NET 8/9系のクロスプラットフォーム対応により、Windows以外（Linux/macOS、モバイルのMAUI）でも動くようになり、活躍領域が広がっています。業務系・クラウド（Azure）・ゲーム（Unity）と用途が広く、エンタープライズ領域での需要は安定しているとされます。ただし求人動向は時期で変動するため、最新の求人数は各エージェントで確認してください。",
  },
  {
    q: "C#はWeb開発にも使える？",
    a: "使えます。ASP.NET CoreとBlazorにより、サーバーサイドからフロントエンドまでC#で統一的に開発できます。.NETのクロスプラットフォーム対応によりLinux/macOS上でも動作し、コンテナ化も容易です。Web系企業での.NET採用も見られるようになっています。",
  },
  {
    q: "C#の求人はどんな企業に多い？",
    a: "SIer、金融系企業、製造業のDX部門、ゲーム会社（Unity案件）、Microsoft系パートナー企業などで募集が見られます。Azure導入企業の増加に伴い、C#＋Azureのスキルセットを求める求人も見られます。",
  },
  {
    q: "レガシー.NET Frameworkの経験しかなくても転職できる？",
    a: "可能です。ただし.NET 8以降（旧.NET Core）への移行スキルを身につけることが重要です。ASP.NET Core、Entity Framework Core、Minimal APIなどモダンな.NETの知識を学び、レガシーとの違いを説明できる状態にしておくと選考で評価されやすくなります。",
  },
  {
    q: "Azure認定資格（AZ-204）は転職に有利？",
    a: "C#＋Azureのスキルを客観的に示せるため、クラウド寄りのポジションで評価されます。AZ-204（Azure Developer Associate）はAzure上でのアプリ開発スキルを検証する資格で、Azure Functions・App Service・コンテナ等のクラウドネイティブ開発が対象です（Microsoft Learnの認定制度より）。さらに上位のAZ-305（Solutions Architect）はアーキテクト志向の方に向いています。",
  },
  {
    q: "C#エンジニアにおすすめの転職エージェントは？",
    a: "業務系C#求人が豊富とされるレバテックキャリア、SIer系に強いマイナビIT AGENT、Unity/ゲーム系に強いGeeklyが候補です。狙う領域（業務系・クラウド・ゲーム）によって相性が変わるため、複数登録して比較するのが基本です。",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/skill/csharp/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

export default function CsharpSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/csharp/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "C#/.NETエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          C#/.NETエンジニア転職ガイド｜年収・資格・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | C#/.NETスキルを軸にした転職市場の攻め方を解説
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          C#はMicrosoftが開発した言語で、業務系システム・Webアプリ（ASP.NET）・ゲーム（Unity）・クラウド（Azure）と幅広い領域で使われています。本記事は求人数を競うのではなく、「年収相場の捉え方」「Azure認定資格の活かし方」「求人の探し方」という転職判断に必要な情報に絞って整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（C#・公表値）",
            "フリーランスボード C#案件調査（2025年9月時点・公表値）",
            "Microsoft Learn 認定制度（AZ-204）",
            "レバテック 年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：C#/.NET転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              C#/.NET転職は<strong>「モダン.NET＋専門ドメイン（業務系・クラウド・ゲーム）の組み合わせで売り込む」</strong>のが基本戦略です。安定したエンタープライズ需要を土台に、Azureを足すと年収帯が上がりやすいのが特徴です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① レガシー.NET Frameworkではなく、ASP.NET Core等のモダン.NETを学ぶ</li>
              <li>② 業務系・クラウド・ゲームのどのドメインで勝負するか軸を決める</li>
              <li>③ Azure認定（AZ-204等）でクラウドスキルを可視化し、年収帯を上げる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C#エンジニアの平均年収は、求人ボックスの給料ナビで<strong>約550万円（公表値）</strong>とされています。フリーランス領域では、フリーランスボード調べでC#案件の平均年収が<strong>約810万円（2025年9月時点・公表値）</strong>と報告されており、雇用形態で差が大きい点に注意が必要です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">金額</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典・時点</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">C#エンジニア平均（正社員）</td>
                  <td className="border border-slate-200 px-3 py-2">約550万円</td>
                  <td className="border border-slate-200 px-3 py-2">求人ボックス給料ナビ（公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">C#フリーランス案件平均</td>
                  <td className="border border-slate-200 px-3 py-2">約810万円</td>
                  <td className="border border-slate-200 px-3 py-2">フリーランスボード調べ（2025年9月時点・公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 30代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約499万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 40代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約618万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            高単価・高年収を狙うには、ASP.NET CoreやAzure連携、マイクロサービス設計、テスト自動化など周辺スキルを実務で示せることが有効とされています。求人数そのものは時期変動が大きいため、最新値は各エージェントで確認してください。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票に見られる要件の傾向を整理すると、おおむね次のように分かれます。実際の要件は企業・ポジションで異なるため目安として捉えてください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ジュニア（実務〜2年程度）</h3>
              <p className="text-sm text-slate-600">C#の基本文法、簡単なWebアプリやツールの開発経験。SIerの開発メンバー枠など。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ミドル（実務3〜7年）</h3>
              <p className="text-sm text-slate-600">ASP.NET Coreでの設計・実装、DB設計、Azureまたはオンプレ運用の経験。30代の中心レンジ。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">シニア／リード</h3>
              <p className="text-sm text-slate-600">アーキテクチャ設計、クラウドネイティブ設計、技術選定・チームリード。Azure資格があると強い。</p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C#のキャリアは「業務系」「クラウド（Azure）」「ゲーム（Unity）」「テックリード」に大別できます。安定領域を土台にしつつ、クラウドを足すと年収レンジが上がりやすいのが特徴です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-petrol font-medium mb-2">関連資格: {item.cert}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C#は領域が広いため、狙うドメインによって相性の良いエージェントが変わります。タイプの異なる3社を併用しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/levtech/" className="text-petrol-deep hover:underline">レバテックキャリア</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web特化。業務系・クラウド寄りのC#求人を探しやすく、高年収求人の比率が高いとされる（同社ガイド記事）。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/mynavi-it/" className="text-petrol-deep hover:underline">マイナビIT AGENT</Link>
              </h3>
              <p className="text-sm text-slate-600">20〜30代若手に強く、書類添削・面接対策が手厚いとされる。SIer系の業務系C#求人と相性が良い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/geekly/" className="text-petrol-deep hover:underline">Geekly（ギークリー）</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web/ゲーム特化で提案スピードに定評。Unity/ゲーム系のC#求人を探すならまず候補に。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            複数登録の使い分けは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>、ゲーム系の動向は<Link href="/skill/unity/" className="text-petrol hover:underline">Unity転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C#は学習リソースが豊富で、業務系の求人母数も多いため、経験浅めからでも入口を作りやすいスキルです。
          </p>
          <ol className="space-y-3">
            {[
              { t: "モダン.NETで小さく作る", d: "ASP.NET Core＋Entity Framework CoreでWeb APIやCRUDアプリを作り、GitHubに公開する。" },
              { t: "ドメインを一つ決める", d: "業務系・クラウド・ゲームのいずれかに絞り、関連知識を深めて訴求の軸にする。" },
              { t: "Azure認定で差別化する", d: "AZ-204等のクラウド資格は、同年代・同経験の中で差をつけやすい。" },
              { t: "SIer・パートナー企業の開発枠を狙う", d: "業務系C#は研修体制が整った企業が多く、実務経験を積む入口になりやすい。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.t}</h3>
                  <p className="text-sm text-slate-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              C#/.NETは、30代・40代のミドル層と相性が良いスキルです。<strong>業務系・基幹システムの安定需要</strong>があり、金融・製造などのドメイン知識を持つ人ほど評価されます。長年Windows業務系で培った経験を、モダン.NETやAzureへの移行スキルと接続できれば、年収アップの余地が生まれます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・レガシー.NET Frameworkの経験は「移行を語れる」資産として活かす</li>
              <li>・Azure資格でクラウド対応力を示し、年収帯を一段上げる</li>
              <li>・レバテック公表値で40代SE平均は約618万円（2025年）。ドメイン×クラウドで上振れを狙う</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              年代別の相場感は<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C#/.NETの学習は、モダン.NETの習得とクラウド資格の取得を軸に組み立てると効率的です。
          </p>
          <ul className="space-y-3 mb-4">
            {[
              { t: "モダン.NETを押さえる", d: "ASP.NET Core、Minimal API、Blazor、Entity Framework Core、.NET 8/9の新機能を学び、レガシーとの違いを説明できるようにする。" },
              { t: "Azure認定を取得する", d: "AZ-204（Developer Associate）でクラウド開発スキルを証明。アーキテクト志向ならAZ-305も視野に。" },
              { t: "テスト・CI/CDの実践", d: "テスト自動化やコンテナ化の実務経験は、設計力の裏付けとして評価されやすい。" },
            ].map((c, i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600">{c.d}</p>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            AZ-204はMicrosoft Learnの認定制度に基づく資格で、Azure上のアプリ開発スキルを検証します。継続学習の習慣化は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの学習を続けるコツ</Link>、成果物の見せ方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>も参考にどうぞ。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">C#/.NETのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            C#の求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "Unity転職ガイド", href: "/skill/unity/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/capcom/" className="text-petrol-deep hover:underline">カプコン</a></li><li><a href="/company/gungho/" className="text-petrol-deep hover:underline">ガンホー</a></li><li><a href="/company/koei-tecmo/" className="text-petrol-deep hover:underline">コーエーテクモ</a></li><li><a href="/company/konami/" className="text-petrol-deep hover:underline">コナミ</a></li><li><a href="/company/microsoft/" className="text-petrol-deep hover:underline">日本マイクロソフト</a></li><li><a href="/company/nri/" className="text-petrol-deep hover:underline">野村総合研究所(NRI)</a></li><li><a href="/company/sega-sammy/" className="text-petrol-deep hover:underline">セガ（セガサミーHD）</a></li><li><a href="/company/square-enix/" className="text-petrol-deep hover:underline">スクウェア・エニックス</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
