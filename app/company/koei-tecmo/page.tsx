import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "コーエーテクモ エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "コーエーテクモ（コーエーテクモホールディングス／コーエーテクモゲームス）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社3635は提出会社113名平均793万円）の注意点、内製Katana EngineとC++技術、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "633万円"],
  ["2022年3月期", "700万円"],
  ["2023年3月期", "737万円"],
  ["2024年3月期", "810万円"],
  ["2025年3月期", "793万円"],
];

const basicData: [string, string][] = [
  ["持株会社", "株式会社コーエーテクモホールディングス（東証プライム・3635）"],
  ["主な開発会社", "株式会社コーエーテクモゲームス（ゲームの企画・開発・販売）"],
  ["事業領域", "ゲームソフト（信長の野望、三國志、無双シリーズ、仁王 等）の開発・販売、IP・オンライン事業"],
  ["平均年間給与", "793万円（持株会社=提出会社・全社員平均／後述の注意あり）"],
  ["平均年齢", "38.2歳（持株会社=提出会社）"],
  ["本社所在地", "持株会社：神奈川県横浜市港北区／開発拠点：横浜・みなとみらい（コーエーテクモゲームス）"],
  ["技術スタック（公式）", "C++ を中心に、内製ゲームエンジン「Katana Engine」、DirectX/OpenGL"],
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
    q: "コーエーテクモの平均年収はいくらですか？",
    a: "コーエーテクモホールディングス（3635）の有価証券報告書によると、提出会社の平均年間給与は793万円、平均年齢は38.2歳（2025年3月期）です。ただしこれは持株会社の数字で、対象は約113名です。実際にゲームを開発する株式会社コーエーテクモゲームスの従業員はこの数字に含まれません（連結従業員数は約2,684名）。エンジニアの提示年収は個別求人で確認するのが確実です。",
  },
  {
    q: "コーエーテクモの技術スタックは？",
    a: "公式採用情報によると、コーエーテクモはゲーム開発ツールから内製しており、内製ゲームエンジン「Katana Engine」を提供しています。中途採用ではC++を使用したプログラム経験、DirectXまたはOpenGLを使用したプログラミング経験などが求められます。",
  },
  {
    q: "Katana Engineとは何ですか？",
    a: "Katana Engineはコーエーテクモが内製する独自ゲームエンジンです。公式情報では、クリエイターの新しい発想・やりたい表現をよりスピーディーに形にできるよう、ゲームエンジンの自社開発に注力していると説明されています。無双シリーズや仁王などのタイトル開発を支えています。",
  },
  {
    q: "コーエーテクモのエンジニア選考フローは？",
    a: "一般的には書類選考、複数回の面接、ポジションによる技術確認を経てオファーという流れです。新卒ではプログラマー、SP開発、企画、総合職など職種により選考フローが変わるとされています。最新かつ職種別の詳細は公式経験者採用ページで確認してください。",
  },
  {
    q: "コーエーテクモのエンジニアに必要な経験は？",
    a: "公式情報では、ゲーム業界またはネットワーク業界でのプログラミング実務経験、オンライン/ソーシャル/携帯ゲームの開発経験、C++を使用したプログラム経験、DirectXまたはOpenGLを使用したプログラミング経験などの条件から該当する経験が必須とされています（職種により異なる）。",
  },
  {
    q: "コーエーテクモに応募するのは持株会社ですか開発会社ですか？",
    a: "ゲーム開発職の多くは事業会社である株式会社コーエーテクモゲームスでの募集です。有価証券報告書の年収は持株会社コーエーテクモホールディングス（3635・提出会社）の数字であり、開発現場の水準とは性質が異なる点に注意が必要です。",
  },
  {
    q: "30代・40代でもコーエーテクモに転職できますか？",
    a: "C++での開発経験や、内製エンジン・グラフィックス等の専門性・実績が問われます。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくい傾向です。提出会社の平均年齢は38.2歳で、ミドル層も活躍しやすい年齢構成です。",
  },
];

export default function KoeiTecmoCompanyPage() {
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
      <ArticleJsonLd title="コーエーテクモ エンジニア転職ガイド" description="コーエーテクモ（コーエーテクモホールディングス／コーエーテクモゲームス）へのエンジニア転職を実データで解説。有価証券報告書の数字（持株会社3635は提出会社113名平均793万円）の注意点、内製Katana EngineとC++技術、選考フロー、30代40代の現実までまとめました。" url="/company/koei-tecmo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "コーエーテクモ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">コーエーテクモ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 無双・信長の野望・仁王等を擁する歴史IPに強いゲーム企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          コーエーテクモは、「信長の野望」「三國志」「無双シリーズ」「仁王」などを擁するゲーム企業です。上場しているのは持株会社の株式会社コーエーテクモホールディングス（証券コード3635・東証プライム）で、実際のゲーム開発は事業会社である株式会社コーエーテクモゲームスが担います。本ページでは、有価証券報告書・公式採用情報の公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "コーエーテクモホールディングス 有価証券報告書（3635・2025年3月期）",
            "コーエーテクモ 公式 経験者採用ページ",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              コーエーテクモは<strong>内製エンジン「Katana Engine」を含め開発ツールを自社内製し、C++でゲームを開発する企業</strong>です。ツールから内製する文化が特徴で、エンジン・グラフィックス等の専門性で勝負したいエンジニアに向きます。有報の年収（793万円）は持株会社の数字で、開発現場の水準とは別物である点に注意が必要です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：C++での実務経験があり、内製エンジン・グラフィックス・ツール等の専門性を深めたいエンジニア</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は有価証券報告書（3635・2025年3月期）に基づく持株会社=提出会社の全社員平均値（対象約113名）。ゲーム開発職の水準を示す数字ではない点に注意。技術スタックは公式採用ページ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">開発ツールから自社内製する文化</h3>
              <p className="text-sm text-blue-700">公式採用情報によると、コーエーテクモはゲーム開発用のツールから社内で独自開発しており、ゲームエンジン「Katana Engine」を提供しています。外部エンジンを使うケースが多い中、クリエイターの発想をスピーディーに形にできるよう自社開発に注力しているのが特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">C++・グラフィックスの実務経験を重視</h3>
              <p className="text-sm text-blue-700">中途採用ではC++を使用したプログラム経験、DirectXまたはOpenGLを使用したプログラミング経験などが求められます。歴史IPや無双系のアクションなど、独自の表現を支える技術力が問われます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">持株会社と開発会社で性質が異なる数字</h3>
              <p className="text-sm text-blue-700">上場は持株会社（3635）で、有報の従業員数（提出会社）は約113名ですが、連結従業員数は約2,684名（2025年3月末）です。開発の主体は事業会社のコーエーテクモゲームスである点を踏まえて応募先を確認しましょう。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            コーエーテクモの採用情報で公開されている技術要素をまとめます。配属プロジェクト・職種により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>主要言語</strong>：C++（ゲーム開発の中心）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>ゲームエンジン</strong>：内製「Katana Engine」、内製開発ツール群</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>グラフィックスAPI</strong>：DirectX / OpenGL</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>職種例</strong>：プログラマー（クライアント）、SP（スマートフォン）開発 ほか</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: コーエーテクモ 公式採用ページ（2026年6月時点）。プロジェクト・職種により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース・重要な注意点あり）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場している持株会社コーエーテクモホールディングス（3635）は、有価証券報告書で平均年間給与を開示しています。<strong>ただしこれは持株会社=提出会社の数字で、対象は約113名</strong>です。実際にゲームを開発する事業会社（株式会社コーエーテクモゲームス）の従業員はこの数字に含まれません。
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
          <p className="text-xs text-slate-400 mb-4">出典: コーエーテクモホールディングス 有価証券報告書（各年3月期）。いずれも<strong>持株会社=提出会社</strong>の全社員平均で、開発現場のエンジニア年収を示す数字ではありません。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">ゲーム会社は持株会社（3635）と事業会社で有報の数字が異なります。本ページの年収表は持株会社の数字であり、ゲーム開発職の提示年収を表すものではありません。エンジニアの実際の提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一般的な中途採用の流れをまとめます。最新かつ職種別の詳細は<a href="https://www.koeitecmo.co.jp/recruit/career/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">コーエーテクモ 公式経験者採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>面接（複数回。技術・志向・カルチャーフィットを確認）</li>
            <li>ポジションによる技術確認（課題等。職種により有無が異なる）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: コーエーテクモ 公式採用ページの要約。職種（プログラマー、SP開発等）により選考フローは異なります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式が示す要件から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C++での実装力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>DirectX/OpenGL等を用いたグラフィックスプログラミング経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ゲーム業界・ネットワーク業界での開発実績</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>これまでの開発実績・ポートフォリオ</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              コーエーテクモの中途採用は<strong>専門性重視</strong>です。内製エンジン（Katana Engine）、グラフィックス、ツール開発など、特定領域での実務経験・実績が問われます。30代・40代でも、その領域で価値を出せる実力があれば年齢自体は大きなハンデになりにくいのが実情です。提出会社の平均年齢は38.2歳で、ミドル層も活躍しやすい年齢構成です。
            </p>
            <p>
              年収面では、有報の793万円は持株会社（提出会社・約113名）の数字であり、ゲーム開発職の提示水準とは性質が異なります。参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。エンジニア職の提示はポジション・等級により幅があるため、自分が当てはまる水準を個別求人・面談で確認することが重要です。
            </p>
            <p>
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。C++/C#まわりのスキル整理は<Link href="/skill/csharp/" className="text-blue-600 hover:underline">C#エンジニアの市場価値</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コーエーテクモ転職におすすめのエージェント</h2>
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
          <h2 className="text-xl font-bold mb-3">コーエーテクモへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム業界の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スクウェア・エニックス エンジニア転職ガイド", href: "/company/square-enix/" },
              { name: "カプコン エンジニア転職ガイド", href: "/company/capcom/" },
              { name: "コナミ エンジニア転職ガイド", href: "/company/konami/" },
              { name: "セガ（セガサミーHD）エンジニア転職ガイド", href: "/company/sega-sammy/" },
              { name: "C#エンジニアの市場価値", href: "/skill/csharp/" },
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
