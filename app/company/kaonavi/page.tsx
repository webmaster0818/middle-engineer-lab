import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "カオナビの年収は平均690万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "カオナビへのエンジニア転職を実データで解説。有価証券報告書の平均年収690万円（2025年3月期・全社員平均）、PHP/Go/Reactの技術スタック、選考フロー、TOBによる非公開化、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "589万円"],
  ["2022年3月期", "610万円"],
  ["2023年3月期", "626万円"],
  ["2024年3月期", "650万円"],
  ["2025年3月期", "690万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社カオナビ（旧 東証グロース・4435／2025年TOBにより非公開化）"],
  ["事業領域", "タレントマネジメントシステム「カオナビ」の開発・提供（HR Tech SaaS）"],
  ["平均年間給与", "690万円（2025年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "34.2歳（2025年3月期 有価証券報告書）"],
  ["従業員数", "連結413名／単体394名（2025年3月期 有価証券報告書）"],
  ["技術スタック（公開情報）", "PHP / Laravel / Go / Gin / TypeScript / React / Dart / Flutter / MySQL / AWS / Terraform / Docker"],
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
    q: "カオナビのエンジニア選考フローは？",
    a: "公式採用サイト・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「複数回の面接」「オファー面談」という流れです。選考では志望動機、これまでの開発物、好きな言語とその理由、将来のエンジニア像などが問われる傾向があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "カオナビの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、全社員平均の平均年間給与は690万円、平均年齢は34.2歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・スキル評価により異なります。なお同社は2025年のTOBにより非公開化されたため、これ以降の公開数値は限定されます。",
  },
  {
    q: "カオナビの技術スタックは？",
    a: "公式採用ページ・技術情報の公開情報によると、開発言語はPHP・Go・TypeScript・Dart、フレームワークはLaravel・Gin・React・Flutterを使用しています。コード管理はGitLab、DBはMySQL、インフラはAWS・Terraform・Dockerを採用しています。プロダクト・チームにより構成は異なります。",
  },
  {
    q: "カオナビは上場していますか？（TOBについて）",
    a: "カオナビは東証グロース市場の上場企業（証券コード4435）でしたが、2025年にカーライル・グループ傘下企業によるTOB（公開買付け）が成立し、同年6月に上場廃止・非公開化されました。非公開化後はカオナビ事業のさらなる成長・マルチプロダクト化を目指すと公表されています。",
  },
  {
    q: "カオナビはどんな事業をしていますか？",
    a: "カオナビは、社員の顔写真と情報を一元管理しタレントマネジメントを支援するクラウドサービス「カオナビ」を開発・提供するHR Tech企業です。タレントマネジメントシステム領域で国内シェア上位の実績を持ちます。",
  },
  {
    q: "カオナビで活きる経験は？",
    a: "PHP/LaravelやGoを用いたWebアプリケーション開発の実務経験が基本です。SaaSプロダクトの開発・運用経験、HR・人事領域のドメイン知識、React/TypeScriptでのフロントエンド開発経験などが活きやすい傾向です。",
  },
  {
    q: "30代・40代でもカオナビに転職できますか？",
    a: "平均年齢34.2歳（2025年3月期）とやや若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。SaaS開発・運用やマネジメントの経験、人事領域のドメイン理解など、年齢に見合う価値を示せれば、ミドル層でも挑戦できる環境です。",
  },
];

export default function KaonaviCompanyPage() {
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
      <ArticleJsonLd title="カオナビ エンジニア転職ガイド" description="カオナビへのエンジニア転職を実データで解説。有価証券報告書の平均年収690万円（2025年3月期・全社員平均）、PHP/Go/Reactの技術スタック、選考フロー、TOBによる非公開化、30代40代の現実までまとめました。" url="/company/kaonavi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "カオナビ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">カオナビ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | タレントマネジメントSaaSのリーディングカンパニーのエンジニア採用</p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 mb-6">
          <p>カオナビは2025年のTOB（公開買付け）成立により、同年6月に東証グロース市場を上場廃止・非公開化されました。本ページの有価証券報告書ベースの数値は、<strong>上場最終期である2025年3月期まで</strong>の公開情報に基づきます。非公開化以降の最新の年収・人員データは公開が限定されます。</p>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社カオナビは、タレントマネジメントシステム「カオナビ」を開発・提供するHR Tech企業です（旧 東証グロース・証券コード4435）。本ページでは、有価証券報告書・公式採用情報・技術情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社カオナビ 有価証券報告書（2025年3月期・上場最終期）",
            "カオナビ公式 採用サイト（corp.kaonavi.jp/recruit）",
            "カオナビ TOB・非公開化 関連リリース（2025年）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              カオナビは<strong>PHP/LaravelとGoでタレントマネジメントSaaSを開発する、HR Tech領域のリーディング企業</strong>です。Webアプリ開発の実務経験が前提で、難易度は中〜やや高。全社員平均年収690万円（2025年3月期 有報）はSaaS業界では高めの水準です。2025年のTOBで非公開化され、機動的な経営体制での非連続成長を掲げています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：PHP/LaravelやGoでの実務経験があり、HR・人事領域のSaaSやマルチプロダクト化に関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：上場企業であることを重視する人、ドメイン理解より純粋な技術追求を優先したい人</li>
              <li>● <strong>30代・40代</strong>：平均年齢34.2歳とやや若め。SaaS運用・設計やマネジメントの実績で価値を示せるかが鍵</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・従業員数は2025年3月期 有価証券報告書（上場最終期）に基づく値（平均給与・年齢は単体）。技術スタックは公式採用ページ・技術情報の公開情報（2026年6月時点で確認できる範囲）。非公開化以降の最新数値は公開が限定されます。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">HR Tech・タレントマネジメントというドメイン</h3>
              <p className="text-sm text-blue-700">タレントマネジメントシステム「カオナビ」は、社員情報を一元管理し人材活用を支援するSaaSで、国内シェア上位の実績があります。人事・組織課題というドメインに技術で向き合いたいエンジニアが活きる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">PHP/LaravelとGoのハイブリッドな構成</h3>
              <p className="text-sm text-blue-700">公開情報によると、開発言語はPHP・Go・TypeScript・Dart、フレームワークはLaravel・Gin・React・Flutterを採用しています。既存のPHPベースのコアと、Goやモダンフロントエンドを組み合わせた開発に関われる点が特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">非公開化後のマルチプロダクト化フェーズ</h3>
              <p className="text-sm text-blue-700">2025年のTOBによる非公開化後は、カオナビ事業のさらなる進化やマルチプロダクト化・提供サービスの拡大を掲げています（公式リリース）。事業拡大フェーズで新しいプロダクトづくりに関わりたいエンジニアに向いた局面です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下は公式採用ページ・技術情報の公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：PHP / Laravel、Go / Gin</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>モバイル</strong>：Dart / Flutter</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データ／インフラ</strong>：MySQL、AWS、Terraform、Docker。コード管理は GitLab</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: カオナビ公式 採用ページ・技術情報等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            カオナビは上場企業であった期間、有価証券報告書で全社員平均の平均年間給与を開示していました。<strong>上場最終期である2025年3月期は690万円（平均年齢34.2歳・全社員平均）</strong>で、一貫した上昇傾向にありました。
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社カオナビ 有価証券報告書（各年3月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。2025年の非公開化以降は同種の数値の公開が限定されます。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため、本ページでは断定しません。提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用サイト・採用媒体の公開情報をもとにした一般的な流れです。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。働き方やチームの雰囲気を確認）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。志望動機・開発物・技術選定の考え方などを確認）</li>
            <li>技術課題／コーディング確認（職種により実施される場合がある）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: カオナビ公式 採用サイト（corp.kaonavi.jp/recruit）／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>PHP/Laravelや Go 等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>SaaSプロダクトの開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>好きな言語・技術選定の理由を自分の言葉で語れるか</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>HR・人事領域への関心、チームでの協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              カオナビは平均年齢34.2歳（2025年3月期・全社員平均）とやや若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。30代・40代のミドルエンジニアは、<strong>SaaSの開発・運用やマネジメントの経験、HR・人事領域のドメイン理解</strong>など、年齢に見合う価値を示せるかが評価の分かれ目です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。カオナビの全社員平均（690万円）はこれを上回りますが、これは全社平均であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              非公開化後はマルチプロダクト化フェーズにあり、新規プロダクトや事業拡大に関わりたいミドル層にとっては挑戦の機会がある局面です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カオナビ転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">カオナビへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・HR Tech企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SmartHR エンジニア転職ガイド", href: "/company/smarthr/" },
              { name: "freee エンジニア転職ガイド", href: "/company/freee/" },
              { name: "マネーフォワード エンジニア転職ガイド", href: "/company/moneyforward/" },
              { name: "note エンジニア転職ガイド", href: "/company/note/" },
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
