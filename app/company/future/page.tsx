import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "フューチャー（Future） エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "フューチャー（Future）へのエンジニア転職を実データで解説。有価証券報告書の平均年収（2024年12月期）、IT戦略コンサルから実装まで一気通貫の特徴、技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "773万円"],
  ["2021年12月期", "789万円"],
  ["2022年12月期", "810万円"],
  ["2023年12月期", "828万円"],
  ["2024年12月期", "841万円"],
];

const basicData: [string, string][] = [
  ["企業名", "フューチャー株式会社（東証プライム・4722）"],
  ["事業領域", "ITコンサルティング（戦略立案から設計・実装・運用まで一気通貫）、自社プロダクト・SaaS 等"],
  ["平均年間給与", "841万円（2024年12月期 有価証券報告書・親会社単体／全社員平均）"],
  ["平均年齢", "35.4歳（2024年12月期 有価証券報告書・親会社単体）"],
  ["従業員数", "連結 約3,000名規模（2024年12月期 有価証券報告書）"],
  ["本社所在地", "東京都品川区"],
  ["技術スタック（公式）", "Java / Go / Python / TypeScript / React / Vue.js / AWS / GCP / Azure / Kubernetes / Terraform"],
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
    q: "フューチャー（Future）のエンジニア選考フローは？",
    a: "公式採用情報によると、一般的には「書類選考」「複数回の面接」「適性検査やスキル確認」「オファー面談」の流れで、ポジションにより技術面接やコーディング課題が加わります。最新の内容は応募求人ごとに確認することが推奨されます。",
  },
  {
    q: "フューチャー（Future）の平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書（親会社単体）によると、平均年間給与は841万円、平均年齢は35.4歳です。これは技術職に限らない親会社単体・全社員平均の値で、エンジニア個人の年収はグレード・職種により異なります。",
  },
  {
    q: "フューチャー（Future）はどんな会社ですか？",
    a: "フューチャーは、IT戦略の立案から要件定義・設計・実装・運用までを一気通貫で手がけるITコンサルティング企業です。技術力を強みとし、上流のコンサルティングと実際のシステム開発の両方に関われる点が特徴で、自社プロダクト・SaaSの開発も行っています。",
  },
  {
    q: "フューチャー（Future）の技術スタックは？",
    a: "公式技術ブログ（フューチャー技術ブログ）・採用情報（2026年6月時点）では、Java・Go・Python・TypeScript・React・Vue.js、クラウドにAWS・Google Cloud・Azure、基盤にKubernetes・Terraformなどが挙げられています。プロジェクト・顧客により使用技術は幅広く異なります。",
  },
  {
    q: "コンサルとエンジニアリングのどちらに比重がありますか？",
    a: "フューチャーはコンサルティングと実装の両方を重視する点が特徴です。上流の戦略・要件定義に関わりつつ、自らコードを書いてシステムを作り上げる『手を動かすコンサルタント／エンジニア』としての働き方が想定されます。ポジションにより比重は異なります。",
  },
  {
    q: "フューチャー（Future）への転職難易度は高いですか？",
    a: "技術力に加え、顧客の課題を理解し解決へ導くコンサルティング力が問われます。アーキテクチャ設計や大規模システムの開発経験、クラウドの実務に加え、論理的思考・課題解決力があると評価されやすい傾向です。",
  },
  {
    q: "30代・40代でもフューチャー（Future）に転職できますか？",
    a: "親会社単体の平均年齢35.4歳と幅のある組織で、年齢よりも技術力・コンサルティング力が問われます。アーキテクチャ設計・クラウド・プロジェクトマネジメントの経験があると、30代40代のミドルエンジニアでも専門性を活かしやすい環境です。",
  },
];

export default function FutureCompanyPage() {
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
      <ArticleJsonLd title="フューチャー（Future） エンジニア転職ガイド" description="フューチャー（Future）へのエンジニア転職を実データで解説。有価証券報告書の平均年収、IT戦略コンサルから実装まで一気通貫の特徴、技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/future/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "フューチャー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">フューチャー（Future） エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 戦略から実装まで一気通貫するITコンサルティング企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          フューチャー（Future）は、IT戦略の立案から要件定義・設計・実装・運用までを一気通貫で手がける東証プライム上場（証券コード4722）のITコンサルティング企業です。技術力を強みとし、上流のコンサルティングと実際のシステム開発の両方に関われる点が特徴で、自社プロダクト・SaaSの開発も行っています。本ページでは、有価証券報告書・公式採用情報・技術ブログの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "フューチャー 有価証券報告書（2024年12月期）",
            "フューチャー公式 採用ページ／フューチャー技術ブログ",
            "フューチャー公式 企業情報・事業内容",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              フューチャーは<strong>IT戦略コンサルから設計・実装まで一気通貫で携われる、技術志向のITコンサルティング企業</strong>です。アーキテクチャ設計・大規模システム開発・クラウドの実務に、課題解決のコンサルティング力を掛け合わせられるエンジニアに向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：上流から実装まで幅広く関わりたく、技術力とコンサルティング力の両方を伸ばしたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：顧客折衝や上流工程を避け、特定領域の実装だけに集中したい人</li>
              <li>● <strong>30代・40代</strong>：アーキテクチャ設計・クラウド・PMの経験があれば専門性を活かしやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2024年12月期 有価証券報告書（親会社単体）の全社員平均値。技術スタックは公式採用情報・フューチャー技術ブログ（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">戦略から実装まで一気通貫</h3>
              <p className="text-sm text-blue-700">IT戦略の立案・要件定義といった上流から、設計・実装・運用までを一貫して手がけます。上流のコンサルティングに閉じず、自ら手を動かしてシステムを作り上げる『手を動かすコンサルタント／エンジニア』としての働き方が特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術力を重視する文化</h3>
              <p className="text-sm text-blue-700">フューチャー技術ブログやOSS活動など、技術発信・探究を重視する文化があります。最新技術のキャッチアップや、アーキテクチャ設計力を磨きたいエンジニアに向いた環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多様な業界・大規模案件</h3>
              <p className="text-sm text-blue-700">流通・金融・製造など多様な業界の大規模システムに携われます。クラウド移行やモダナイゼーション、自社プロダクト・SaaS開発など、幅広いテーマで技術と業務知識の両方を伸ばせます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フューチャーは公式採用情報・フューチャー技術ブログ（2026年6月時点）で扱う技術を公開しています。主な要素は以下の通りです。プロジェクト・顧客により使用技術は幅広く異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Java、Go、Python</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React、Vue.js、JavaScript</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>クラウド</strong>：AWS、Google Cloud Platform、Microsoft Azure</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>基盤・IaC</strong>：Docker、Kubernetes、Terraform、CI/CD</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データ</strong>：各種RDB、DWH、データ分析・AI活用</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: フューチャー公式 採用情報・フューチャー技術ブログ（2026年6月時点）。プロジェクトにより技術構成は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるフューチャーは、有価証券報告書で親会社単体の平均年間給与を開示しています。<strong>2024年12月期は841万円（平均年齢35.4歳・親会社単体／全社員平均）</strong>で、近年は上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（親会社単体）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: フューチャー 有価証券報告書（各年12月期）。いずれも技術職に限らない<strong>親会社単体・全社員平均</strong>の平均年間給与です。エンジニア個人の年収はグレード・職種により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">全社員平均には多様な職種・グレードが含まれます。コンサル・アーキテクトなど上位グレードでは、全社平均と異なる水準が提示される場合があります。提示額は募集ポジション・グレードにより幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フューチャー公式採用ページで案内されている一般的な流れです。最新の内容は<a href="https://www.future.co.jp/recruit/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>面接（複数回。技術力・コンサルティング力・カルチャーフィットを確認）</li>
            <li>技術面接・コーディング課題（ポジションにより）</li>
            <li>適性検査・スキル確認</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: フューチャー公式 採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アーキテクチャ設計・大規模システム開発の実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>顧客課題の理解と、解決へ導くコンサルティング力・論理的思考</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウド・モダン技術へのキャッチアップ姿勢</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チーム・顧客との協働姿勢、上流から実装まで関わる意欲</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フューチャー（親会社単体）の平均年齢は35.4歳（2024年12月期）で、年齢層に幅のある組織です。年齢よりも技術力・コンサルティング力が問われるため、30代・40代のミドルエンジニアでも<strong>アーキテクチャ設計・クラウド・プロジェクトマネジメントの経験があれば年齢自体は大きなハンデになりにくい</strong>のが特徴です。むしろ上流から実装まで見渡せるミドル層の経験が評価されやすい領域です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。フューチャーの全社員平均（841万円）はこれを上回りますが、これは全社平均であり、入社時の提示はグレード次第です。30代・40代は「自分が当てはまるグレードの水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              30代40代では、<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>などクラウドや<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラ</Link>の実務に、<Link href="/cert/aws-saa/" className="text-blue-600 hover:underline">AWS認定（SAA）</Link>や<Link href="/cert/pmp/" className="text-blue-600 hover:underline">PMP</Link>などの資格を掛け合わせると、コンサル×実装の評価につながりやすい領域です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フューチャー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。コンサル・SIer・事業会社まで幅広く、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラス・管理職に強く、ITコンサル領域のミドル・シニア支援に定評。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "スカウト型。ITコンサル・アーキテクトのハイクラス求人が集まりやすい。" },
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
          <h2 className="text-xl font-bold mb-3">フューチャーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ITコンサル・アーキテクトの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "クラスメソッド エンジニア転職ガイド", href: "/company/classmethod/" },
              { name: "アクセンチュア エンジニア転職ガイド", href: "/company/accenture/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "AWSエンジニアのスキル", href: "/skill/aws/" },
              { name: "AWS認定ソリューションアーキテクト（SAA）", href: "/cert/aws-saa/" },
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
