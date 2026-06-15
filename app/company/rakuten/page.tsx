import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "楽天グループの年収は平均820万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "楽天グループへのエンジニア転職を実データで解説。有価証券報告書の平均年収820万円（2024年12月期・全社員平均）、英語公用語環境、Java等の技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "楽天グループ株式会社（東証プライム・4755）"],
  ["事業領域", "EC・フィンテック・モバイル通信・トラベル等の多角的事業"],
  ["平均年間給与", "820万円（2024年12月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "35.3歳（2024年12月期 有価証券報告書）"],
  ["本社所在地", "東京都世田谷区（二子玉川）"],
  ["技術スタック（公開情報）", "Java / Python / Ruby / Go / Kotlin / JavaScript / TypeScript ほか"],
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
    q: "楽天グループのエンジニア採用で英語力はどの程度必要ですか？",
    a: "公式採用情報によると、社内公用語は英語で、Asakai（朝会）や部の定例会議は進行・ドキュメントとも英語で行われます。開発部門は約半数が外国籍と公表されており、英語でのコミュニケーションが日常的に発生します。求められるレベルはポジションにより異なります。",
  },
  {
    q: "楽天グループの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、全社員平均の平均年間給与は820万円、平均年齢は35.3歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は職種・グレードにより異なります。",
  },
  {
    q: "楽天グループの技術スタックは？",
    a: "公式採用ページの募集情報では、Java、Python、Ruby、Go、Kotlin、JavaScript/TypeScriptなど複数の言語が職種ごとに挙げられています。特にJavaは多くの職種で言及される主要言語です。配属事業・プロダクトにより使用技術は異なります。",
  },
  {
    q: "楽天モバイルのエンジニア採用はありますか？",
    a: "楽天グループは通信事業（楽天モバイル）を含む多角的事業を展開しており、通信・クラウドネイティブ領域を含む幅広いエンジニアポジションを募集しています。詳細は公式中途採用ページで職種ごとに確認してください。",
  },
  {
    q: "楽天グループの残業や働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、残業時間は部署・役割により差が大きく、月10〜20時間程度という声から40時間という声まで見られます。組織はトップダウン傾向という指摘もあります（2026年6月時点の口コミ傾向）。",
  },
  {
    q: "楽天グループの福利厚生は？",
    a: "口コミ傾向では、育児休業・産休の取得が進み、子育てしやすい環境という声が見られます。二子玉川本社の設備面の評価も語られます。具体的な制度内容は公式採用ページで最新情報を確認してください。",
  },
  {
    q: "楽天グループへの転職で有利な経験は？",
    a: "Javaを中心としたバックエンド開発経験に加え、EC・フィンテック・通信・広告いずれかのドメイン経験、マイクロサービス・コンテナ技術、英語での協働経験があると評価されやすい傾向です（公開求人情報ベース）。",
  },
  {
    q: "30代・40代でも楽天グループに転職できますか？",
    a: "平均年齢35.3歳と幅のある組織で、年齢よりも担えるロールと専門性が重視される傾向です。70以上のサービスを抱えるため、特定ドメインの深い経験やマネジメント経験が活かしやすい環境です。",
  },
];

export default function RakutenCompanyPage() {
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
      <ArticleJsonLd title="楽天グループ エンジニア転職ガイド" description="楽天グループへのエンジニア転職を実データで解説。有価証券報告書の平均年収820万円（2024年12月期・全社員平均）、英語公用語環境、Java等の技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/rakuten/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Rubyの転職ガイド", href: "/skill/ruby/" }, { name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "楽天グループ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">楽天グループ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | EC・フィンテック・モバイルの総合テックカンパニー</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          楽天グループは、EC・フィンテック・モバイル通信など70以上のサービスを展開する東証プライム上場（証券コード4755）の総合テックカンパニーです。本ページでは、有価証券報告書・公式採用ページ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "楽天グループ 有価証券報告書（2024年12月期）",
            "楽天グループ公式 採用ページ",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              楽天グループは<strong>英語公用語のグローバル環境で、EC・金融・通信など多彩なドメインに挑戦できる大規模テック企業</strong>です。事業が広いぶんポジションも多様で、難易度はポジションにより幅があります。Javaを中心とした実務経験が活きやすい環境です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Java等での実務経験があり、英語環境・大規模サービス・多様なドメインに挑戦したいエンジニア</li>
              <li>● <strong>向いていない人</strong>：少人数・フラットな環境を強く好む人、トップダウンの意思決定が合わない人</li>
              <li>● <strong>30代・40代</strong>：特定ドメインの深い経験やマネジメント経験を活かしやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2024年12月期 有価証券報告書に基づく全社員平均値。技術スタックは公式採用ページの募集情報等の公開情報。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">英語公用語のグローバル環境</h3>
              <p className="text-sm text-blue-700">公式採用情報によると社内公用語は英語で、朝会（Asakai）や部の定例会議は進行・ドキュメントとも英語です。開発部門は約半数が外国籍と公表されており、多国籍チームでの開発が日常です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">楽天エコシステムの技術的チャレンジ</h3>
              <p className="text-sm text-blue-700">EC、フィンテック（カード・銀行・証券）、モバイル通信、トラベルなど70以上のサービスを展開。ドメインごとに異なる技術的チャレンジがあり、多様なキャリアパスがあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多言語・多様なポジション</h3>
              <p className="text-sm text-blue-700">公式の募集ではJavaを中心に、Python・Ruby・Go・Kotlin・JavaScript/TypeScriptなど多様な言語のポジションが用意されています。バックエンド・フロントエンド・DevOps・UI/UXなど職種も幅広いのが特徴です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用ページの募集情報で言及されている主な技術要素です。事業・プロダクトごとに採用技術が異なるため、応募の際は各求人の必須スキルを確認してください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>主要言語</strong>：Java（多くの職種で言及される主力）、Python、Ruby、Go、Kotlin、JavaScript / TypeScript など</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>職種</strong>：ソフトウェアエンジニア、アプリケーションエンジニア、UI/UXエンジニア、DevOpsエンジニア等の幅広い募集</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>ドメイン</strong>：EC、フィンテック、モバイル通信、広告など多角的事業ごとに固有の技術スタック</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 楽天グループ公式 採用ページの募集情報（公開情報）。具体的な構成は職種・プロダクトにより異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業である楽天グループは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2024年12月期は820万円（平均年齢35.3歳・平均勤続年数5.8年・全社員平均）</strong>です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["平均年間給与（全社員平均）", "820万円"],
                  ["平均年齢", "35.3歳"],
                  ["平均勤続年数", "5.8年"],
                  ["対象決算期", "2024年12月期"],
                ].map(([label, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: 楽天グループ 有価証券報告書（2024年12月期）。技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は職種・グレードにより異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定を避けています。実際の提示はポジション・グレードにより幅があるため、転職エージェント経由で個別の求人ごとに確認することを推奨します。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            中途採用は公式採用ページまたは転職エージェント経由での応募からスタートします。公開情報をもとにした一般的な流れは以下の通りです。最新の選考内容は<a href="https://corp.rakuten.co.jp/careers/midcareer/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>エントリー（公式採用ページ／エージェント経由）</li>
            <li>書類選考</li>
            <li>技術・人物面接（複数回。英語または日本語で実施される場合あり）</li>
            <li>マネージャー・人事面接</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: 楽天グループ公式採用ページの公開情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報や口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>応募ポジションに直結する技術スキルと実務経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語でのコミュニケーション（ポジションにより求められる程度は異なる）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>多国籍チームでの協働姿勢・カルチャーフィット</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>担当ドメイン（EC・金融・通信等）への理解・関心</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              楽天グループは平均年齢35.3歳（2024年12月期・全社員平均）で、70以上のサービスを抱える大規模組織です。30代・40代のミドルエンジニアにとっては、<strong>特定ドメイン（EC・金融・通信など）の深い経験やマネジメント経験を活かしやすい</strong>のが魅力です。一方、社内公用語が英語であるため、英語環境への適応は事前に意識しておきたいポイントです。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。楽天グループの全社員平均（820万円）はこれを上回りますが、これはグレード上位層を含む全社平均であり、入社時の提示はポジション・グレード次第です。30代・40代は個別求人で具体的なレンジを確認しましょう。
            </p>
            <p>
              働き方は部署により差があるという口コミ傾向があるため、面談時にチームの開発スタイル・残業傾向・英語の使用頻度を確認しておくと安心です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて確認してください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">楽天グループ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。大手・メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "doda ITエンジニア", href: "/review/doda-it/", desc: "国内最大級の求人数。大手企業の求人を幅広く網羅。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "書類添削・面接対策が手厚い。サポート重視の転職者向け。" },
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
          <h2 className="text-xl font-bold mb-3">楽天グループへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LINEヤフー エンジニア転職ガイド", href: "/company/line-yahoo/" },
              { name: "メルカリ エンジニア転職ガイド", href: "/company/mercari/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "リクルート エンジニア転職ガイド", href: "/company/recruit/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
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
