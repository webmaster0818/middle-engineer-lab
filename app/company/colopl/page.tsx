import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/colopl/" },
  title: "コロプラの年収は平均681万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "コロプラへのエンジニア転職を実データで解説。有価証券報告書の平均年収681万円（2025年9月期・単体）、Unity/C#/PHP/Go等の技術スタック、技術テスト、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2023年9月期", "661万円"],
  ["2024年9月期", "671万円"],
  ["2025年9月期", "681万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社コロプラ（東証プライム・3668）"],
  ["事業領域", "モバイルオンラインゲーム（白猫プロジェクト等）・VR/位置ゲー等のエンタテインメント"],
  ["平均年間給与", "681万円（2025年9月期 有価証券報告書・提出会社単体）"],
  ["平均年齢", "36.6歳（2025年9月期 有価証券報告書・単体）"],
  ["従業員数", "676名（2025年9月期・単体）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック（公式情報ベース）", "PHP（Laravel）/ Go / C#（Unity）/ TypeScript / JavaScript / MySQL / Cloud Spanner / TiDB / Redis / Google Cloud / AWS"],
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
    q: "コロプラのエンジニア選考フローは？",
    a: "公開されている採用情報・選考体験談によると、おおむね「書類選考」「技術テスト（コーディングを含む）」「複数回の面接」「内定」の流れです。コロプラは技術テストの過去問形式を一部公開しており、計算機基礎やコーディング問題が出題されます。職種・新卒/中途により内容は変動します。",
  },
  {
    q: "コロプラの平均年収はいくらですか？",
    a: "2025年9月期の有価証券報告書（提出会社単体）によると、平均年間給与は681万円、平均年齢は36.6歳です。これは技術職に限らない全社員平均値で、近年は緩やかな上昇傾向にあります。エンジニア個人の年収は等級・職種により異なります。",
  },
  {
    q: "コロプラの技術スタックは？",
    a: "公式採用情報によると、言語はPHP（Laravel）・TypeScript・JavaScript・C#（Unity）・Goなど、ミドルウェアはnginx・MySQL・Cloud Spanner・TiDB・Redis・fluentdなど、クラウドはGoogle CloudとAWSを利用しています。開発ツールにDocker・GitHub・GitLab・Jenkins・Unity等が使われています。",
  },
  {
    q: "コロプラは何の会社ですか？事業領域は？",
    a: "コロプラは「白猫プロジェクト」などのモバイルオンラインゲームを主力とするエンタテインメント企業です。位置情報ゲームやVRなどの技術にも取り組んできた東証プライム上場企業（証券コード3668）で、ゲーム開発が事業の中核です。",
  },
  {
    q: "コロプラの技術テストはどんな内容ですか？",
    a: "コロプラは採用サイトで技術テストの過去問形式を一部公開しています。サーバーサイド・インフラ志望では計算機基礎・OS・ネットワーク・データベース・Web全般・セキュリティの選択問題に加え、複数言語から選べるコーディング問題が出題されます。事前にアルゴリズム・基礎知識の整理をしておくと有利です。",
  },
  {
    q: "コロプラの開発文化の特徴は？",
    a: "公式情報によると、心理的安全性を重視し、課金・ガチャのような重要案件には組織横断レビューを実施、CI/CDを実践しています。他タイトルのソースコード閲覧権限を付与するなど、オープンな情報共有の文化が示されています。",
  },
  {
    q: "30代・40代でもコロプラに転職できますか？",
    a: "単体の平均年齢は36.6歳（2025年9月期）です。ゲームサーバーの大規模運用、Unityクライアント開発、インフラ・SREなどの専門性や実績があれば、30代・40代のミドルエンジニアも評価されやすい傾向です。",
  },
];

export default function ColoplCompanyPage() {
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
      <ArticleJsonLd title="コロプラ エンジニア転職ガイド" description="コロプラへのエンジニア転職を実データで解説。有価証券報告書の平均年収681万円（2025年9月期・単体）、Unity/C#/PHP/Go等の技術スタック、技術テスト、選考フロー、30代40代の現実までまとめました。" url="/company/colopl/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "PHPの転職ガイド", href: "/skill/php/" }, { name: "Laravelの転職ガイド", href: "/skill/laravel/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "コロプラ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">コロプラ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | モバイルゲームを主力とするエンタテインメント企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          コロプラは、「白猫プロジェクト」などのモバイルオンラインゲームを主力とする東証プライム上場（証券コード3668）のエンタテインメント企業です。位置情報ゲームやVRなどの技術にも取り組んできました。本ページでは、有価証券報告書・公式採用情報・公開された技術テスト情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "コロプラ 有価証券報告書（2025年9月期）",
            "コロプラ公式 採用ページ（Be-ars等）",
            "IRBANK（有報ベース推移データ）",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              コロプラは<strong>モバイルゲームの大規模サーバー運用と、Unityクライアント開発を軸とするゲーム企業</strong>です。技術テストを公開するなど、技術力の見極めを重視する文化があります。単体の平均年収681万円（2025年9月期）はゲーム業界で標準的な水準です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：ゲームサーバー（PHP/Go）やUnityクライアント開発の経験があり、大規模トラフィックの運用に前向きなエンジニア</li>
              <li>● <strong>向いていない人</strong>：ゲーム・エンタメ領域への関心が薄い人、技術テストの準備に消極的な人</li>
              <li>● <strong>30代・40代</strong>：ゲーム基盤・SRE・運用の専門性があれば年齢はハンデになりにくい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年9月期 有価証券報告書の提出会社（単体）数値。技術スタックは公式採用情報ベース（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模ゲームサーバーの運用技術</h3>
              <p className="text-sm text-petrol-deep">サーバーサイドはPHP（Laravel）・Goを中心に、Cloud Spanner・TiDB・Redisなどを用いて大規模トラフィックを支えています。ガチャ・課金など可用性が極めて重要な機能の設計・運用経験が活きます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Unityによるクライアント開発</h3>
              <p className="text-sm text-petrol-deep">ゲームクライアントはC#（Unity）で開発されており、クライアントエンジニアの募集も継続的に行われています。サーバー／クライアント双方の専門職が分かれている点が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術テストと心理的安全性の文化</h3>
              <p className="text-sm text-petrol-deep">採用サイトで技術テストの形式を一部公開し、技術力を重視する姿勢を示しています。一方で心理的安全性を重視し、組織横断レビューやオープンな情報共有（他タイトルのコード閲覧権限付与等）といった開発文化が紹介されています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            コロプラは公式採用情報で開発環境を公開しています。タイトル・職種により使用技術は異なります。主な要素は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：PHP（Laravel）、Go</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ゲームクライアント</strong>：C#（Unity）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Web/ツール系</strong>：TypeScript、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ミドルウェア・データ基盤</strong>：nginx、MySQL、Cloud Spanner、TiDB、Redis、fluentd</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド・開発ツール</strong>：Google Cloud、AWS、Docker、GitHub、GitLab、Jenkins、JetBrains IDE</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: コロプラ公式 採用情報（2026年6月時点）。タイトル・職種別の構成です。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるコロプラは、有価証券報告書で提出会社（単体）の平均年間給与を開示しています。<strong>2025年9月期は681万円（平均年齢36.6歳・単体）</strong>で、近年は緩やかな上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（単体）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: コロプラ 有価証券報告書（各年9月期、提出会社単体）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・職種により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は全社員平均であり、エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報・選考体験談をもとにした一般的な流れです。最新の内容は<a href="https://colopl.co.jp/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>技術テスト（計算機基礎・コーディング問題。ポジションにより実施）</li>
            <li>面接（複数回。現場エンジニアによる技術面接）</li>
            <li>最終面接</li>
            <li>内定・オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: コロプラ公式 採用ページ／選考体験談の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接・技術テストで重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>計算機基礎・アルゴリズム・コーディング力（技術テスト）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模ゲームサーバー／クライアント開発・運用の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ゲーム・エンタメ領域への理解と関心</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・レビュー文化への適応</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              コロプラは単体の平均年齢36.6歳（2025年9月期）です。長期運用タイトルを抱えるため、<strong>大規模サーバーの安定運用や、技術的負債と向き合いながら改善を進めるミドルエンジニアの強みが活きやすい</strong>環境です。サーバー／クライアントの専門職が分かれているため、深い専門性を評価してもらいやすい点も特徴です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。コロプラの単体平均（681万円）はこれを上回りますが、これは全社平均であり、入社時の提示は等級・職種次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              技術テストが課されるため、アルゴリズムや計算機基礎の事前準備はミドル層でも有効です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コロプラ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。ゲーム企業への提案実績が豊富で提案スピードが速い。" },
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
          <h2 className="text-xl font-bold mb-3">コロプラへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・エンタメ企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "MIXI（ミクシィ）エンジニア転職ガイド", href: "/company/mixi/" },
              { name: "グリー（GREE）エンジニア転職ガイド", href: "/company/gree/" },
              { name: "バンダイナムコ エンジニア転職ガイド", href: "/company/bandai-namco/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
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
