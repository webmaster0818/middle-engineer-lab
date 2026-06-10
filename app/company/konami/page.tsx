import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "コナミ エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "コナミ（コナミグループ／コナミデジタルエンタテインメント）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社9766は提出会社250名平均789万円）の注意点、C/C++/C#の技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "683万円"],
  ["2022年3月期", "744万円"],
  ["2023年3月期", "725万円"],
  ["2024年3月期", "710万円"],
  ["2025年3月期", "789万円"],
];

const basicData: [string, string][] = [
  ["持株会社", "コナミグループ株式会社（東証プライム・9766）"],
  ["主な開発会社", "株式会社コナミデジタルエンタテインメント（ゲーム等の企画・開発・販売）"],
  ["事業領域", "デジタルエンタテインメント、アミューズメント、ゲーミング&システム、スポーツ"],
  ["平均年間給与", "789万円（持株会社=提出会社・全社員平均／後述の注意あり）"],
  ["平均年齢", "35.6歳（持株会社=提出会社）"],
  ["本社所在地", "東京都中央区"],
  ["技術スタック（公式）", "C / C++ / C# を中心に、DirectX/OpenGL、Unity、各種シェーダー、サーバーサイド"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
  ["salary", "年収データ（重要な注意点あり）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "コナミの平均年収はいくらですか？",
    a: "コナミグループ株式会社（9766）の有価証券報告書によると、提出会社の平均年間給与は789万円、平均年齢は35.6歳（2025年3月期）です。ただしこれは持株会社の数字で、対象は約250名です。実際にゲームを開発する株式会社コナミデジタルエンタテインメントの従業員はこの数字に含まれません。エンジニアの提示年収は個別求人で確認するのが確実です。",
  },
  {
    q: "コナミの技術スタックは？",
    a: "公式中途採用情報によると、ゲームクライアントプログラマーではC/C++/C#でのプログラミング経験が求められます。レンダリングエンジニアではOpenGLまたはDirectXをC/C++で扱う経験、GPU/シェーダーの理解、物理ベースレンダリングの知識などが挙げられています。家庭用・モバイル・トレーディングカードなど幅広いコンテンツを扱います。",
  },
  {
    q: "コナミのエンジニア職にはどんな種類がありますか？",
    a: "公式情報では、システムプログラマー、ゲームクライアントプログラマー、レンダリングエンジニア、AIプログラマーなどの専門職が募集されています。ゲームクライアントプログラマーはキャラクター制御、敵AI、エフェクト/シェーダー、UI、システム設計など、ゲームらしさを作る幅広い領域を担当します。",
  },
  {
    q: "コナミのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認を経てオファーという流れです。最新かつ職種別の詳細はコナミグループ中途採用ページで確認してください。",
  },
  {
    q: "コナミの開発環境は？",
    a: "公式情報によると、開発者には個別のワークステーション（Windows PC、iOS開発が必要な場合はMac、デュアルモニタ、開発機など）が用意され、好みのソフトウェアを使える環境が整えられているとされています。",
  },
  {
    q: "コナミに応募するのは持株会社ですか開発会社ですか？",
    a: "ゲーム開発職の多くは事業会社である株式会社コナミデジタルエンタテインメント等での募集です。有価証券報告書の年収は持株会社コナミグループ株式会社（9766・提出会社）の数字であり、開発現場の水準とは性質が異なる点に注意が必要です。",
  },
  {
    q: "30代・40代でもコナミに転職できますか？",
    a: "C/C++/C#での開発経験や、ゲーム開発タイトル経験（役割を問わず1タイトル以上）など、専門性・実績が問われます。30代・40代でも、レンダリングやシステム、サーバー等の領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくい傾向です。",
  },
];

export default function KonamiCompanyPage() {
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
      <ArticleJsonLd title="コナミ エンジニア転職ガイド" description="コナミ（コナミグループ／コナミデジタルエンタテインメント）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社9766は提出会社250名平均789万円）の注意点、C/C++/C#の技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/konami/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "コナミ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">コナミ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | eFootball・遊戯王・桃鉄等を擁する総合エンタメ企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          コナミは、「eFootball」「遊戯王」「桃太郎電鉄」「メタルギア」などを擁する総合エンタテインメント企業です。上場しているのは持株会社のコナミグループ株式会社（証券コード9766・東証プライム）で、実際のゲーム開発は事業会社である株式会社コナミデジタルエンタテインメント等が担います。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "コナミグループ 有価証券報告書（9766・2025年3月期）",
            "コナミグループ 中途採用情報（エンジニア／プログラマー）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              コナミは<strong>家庭用・モバイル・カード等の幅広いコンテンツを、C/C++/C#で開発する総合エンタメ企業</strong>です。レンダリング・システム・AI・サーバー等、専門領域ごとに採用しています。有報の年収（789万円）は持株会社の数字で、開発現場の水準とは別物である点に注意が必要です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：C/C++/C#での実務経験があり、レンダリング・システム・サーバー等の専門性を深めたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：単一技術のWeb系モダンスタックやフルリモート前提を強く希望する人</li>
              <li>● <strong>30代・40代</strong>：特定領域の専門性・開発実績があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は有価証券報告書（9766・2025年3月期）に基づく持株会社=提出会社の全社員平均値（対象約250名）。ゲーム開発職の水準を示す数字ではない点に注意。技術スタックは公式中途採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">幅広いコンテンツと専門職の細分化</h3>
              <p className="text-sm text-blue-700">公式情報によると、家庭用ゲーム、モバイルゲーム、トレーディングカードなど幅広いコンテンツを扱い、システムプログラマー、ゲームクライアントプログラマー、レンダリングエンジニア、AIプログラマーなど専門職が細分化されています。自分の強みが活きる領域を選びやすい構造です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゲームらしさを作るクライアント開発</h3>
              <p className="text-sm text-blue-700">ゲームクライアントプログラマーは、キャラクター制御、敵AI、エフェクト/シェーダー、UI、システム設計など、ゲームらしさを作る最も中核的な部分を担当するとされています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">整備された開発環境</h3>
              <p className="text-sm text-blue-700">公式情報では、開発者ごとにWindows PC、必要に応じてiOS開発用のMac、デュアルモニタ、開発機などが用意され、好みのソフトウェアを使える環境が整えられているとされています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            コナミグループの中途採用情報で公開されている技術要素をまとめます。配属プロジェクト・職種により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>主要言語</strong>：C / C++ / C#</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>グラフィックス</strong>：OpenGL / DirectX、GPU・プログラマブルシェーダー、物理ベースレンダリング</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>基盤理解</strong>：メモリ、スレッド、ファイル管理などシステムの理解</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>職種例</strong>：システムプログラマー、ゲームクライアントプログラマー、レンダリングエンジニア、AIプログラマー、サーバーサイド</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: コナミグループ 中途採用情報（エンジニア／プログラマー、2026年6月時点）。プロジェクト・職種により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース・重要な注意点あり）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場している持株会社コナミグループ株式会社（9766）は、有価証券報告書で平均年間給与を開示しています。<strong>ただしこれは持株会社=提出会社の数字で、対象は約250名</strong>です。実際にゲームを開発する事業会社（株式会社コナミデジタルエンタテインメント）の従業員はこの数字に含まれません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（持株会社=提出会社）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: コナミグループ 有価証券報告書（各年3月期）。いずれも<strong>持株会社=提出会社</strong>の全社員平均で、開発現場のエンジニア年収を示す数字ではありません。持株会社化の経緯により対象人数・数字の連続性に留意が必要です。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">ゲーム会社は持株会社（9766）と事業会社で有報の数字が異なります。本ページの年収表は持株会社の数字であり、ゲーム開発職の提示年収を表すものではありません。エンジニアの実際の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な中途採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.konami.com/jobs/ja/jk/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">コナミグループ中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: コナミグループ 中途採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す要件から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C/C++/C#での実装力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ゲーム開発タイトル経験（役割を問わず1タイトル以上）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>メモリ・スレッド・ファイル管理などシステムの理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>応募領域（レンダリング・AI・サーバー等）の専門性</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              コナミの中途採用は<strong>専門性重視</strong>です。レンダリング、システム、AI、サーバーサイドなど、特定領域での実務経験・実績が問われます。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくいのが実情です。
            </p>
            <p>
              年収面では、有報の789万円は持株会社（提出会社・約250名）の数字であり、ゲーム開発職の提示水準とは性質が異なります。参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。エンジニア職の提示はポジション・等級により幅があるため、自分が当てはまる水準を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。C#まわりのスキル整理は<Link href="/skill/csharp/" className="text-blue-600 hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コナミ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。ゲーム企業の求人も扱い、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。ゲーム業界の実務経験者への提案に強い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">コナミへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム業界の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スクウェア・エニックス エンジニア転職ガイド", href: "/company/square-enix/" },
              { name: "カプコン エンジニア転職ガイド", href: "/company/capcom/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
              { name: "任天堂 エンジニア転職ガイド", href: "/company/nintendo/" },
              { name: "C#エンジニアの市場価値", href: "/skill/csharp/" },
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
