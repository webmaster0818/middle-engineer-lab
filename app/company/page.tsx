import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "企業別エンジニア転職ガイド一覧【30社】業態別に分類",
  description:
    "外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲームの全30社をエンジニア転職の視点で業態分類。各社の年収レンジ・技術スタックの傾向と、企業研究の進め方を解説します。",
};

const categories = [
  {
    name: "外資系ビッグテック",
    intro: "GAFAM中心。高年収だが英語力とアルゴリズム面接など独自の選考対策が必須の領域です。",
    companies: [
      { slug: "google", name: "Google Japan", salary: "1,200〜2,000万円", tech: "Go / Python / Kubernetes / GCP", desc: "コーディング面接の比重が高い世界水準のテック企業。" },
      { slug: "amazon", name: "Amazon Japan", salary: "1,000〜1,800万円", tech: "Java / AWS / Python / TypeScript", desc: "Leadership Principlesに沿った行動面接が特徴。" },
      { slug: "apple", name: "Apple Japan", salary: "1,000〜1,800万円", tech: "Swift / Objective-C / C++ / ML", desc: "プロダクト志向。ハード×ソフトの統合領域が強み。" },
      { slug: "meta", name: "Meta Japan", salary: "1,200〜2,200万円", tech: "React / Hack / Python / C++", desc: "大規模分散システムとフロント技術の最先端。" },
      { slug: "microsoft", name: "Microsoft Japan", salary: "1,000〜1,800万円", tech: "C# / TypeScript / Azure / Python", desc: "クラウド・エンタープライズに強い外資。働き方も柔軟。" },
    ],
  },
  {
    name: "メガベンチャー",
    intro: "Web系自社開発の中核。技術的裁量と成長環境を求めるエンジニアに人気の選択肢です。",
    companies: [
      { slug: "mercari", name: "メルカリ", salary: "700〜1,200万円", tech: "Go / Kubernetes / GCP / Microservices", desc: "マイクロサービス基盤と多国籍チームが特徴。" },
      { slug: "line-yahoo", name: "LINEヤフー", salary: "600〜1,100万円", tech: "Java / Kotlin / Spring / Kubernetes", desc: "国内最大級のトラフィックを扱う大規模開発。" },
      { slug: "cyberagent", name: "サイバーエージェント", salary: "600〜1,000万円", tech: "Go / React / AWS / MLOps", desc: "広告・メディア・ゲームと幅広い事業領域。" },
      { slug: "rakuten", name: "楽天グループ", salary: "600〜1,000万円", tech: "Java / Spring / AWS / React", desc: "社内英語公用化。EC〜フィンテックまで横断。" },
      { slug: "dena", name: "DeNA", salary: "600〜1,100万円", tech: "Go / Python / AWS / Unity", desc: "ゲーム・ヘルスケア・モビリティと多角的。" },
      { slug: "recruit", name: "リクルート", salary: "650〜1,100万円", tech: "Java / React / GCP / Python", desc: "事業ドメインが広く、データ活用に積極的。" },
      { slug: "zozo", name: "ZOZO", salary: "600〜1,000万円", tech: "Go / Kotlin / AWS / Microservices", desc: "ファッションECの技術刷新を推進。研究組織も。" },
      { slug: "visional", name: "Visional（ビズリーチ）", salary: "600〜1,000万円", tech: "Scala / TypeScript / AWS / Kubernetes", desc: "HR Tech領域。プロダクト志向のエンジニア組織。" },
      { slug: "softbank", name: "ソフトバンク", salary: "600〜1,000万円", tech: "Java / Python / AWS / AI/ML", desc: "通信×AI。大規模インフラと新規事業の両輪。" },
    ],
  },
  {
    name: "SaaS・フィンテック",
    intro: "プロダクト改善とドメイン知識が両立する成長企業群。年収も高め水準が中心です。",
    companies: [
      { slug: "freee", name: "freee", salary: "600〜1,000万円", tech: "Ruby / React / GCP / Kubernetes", desc: "会計SaaSの先駆。開発文化の発信に積極的。" },
      { slug: "smarthr", name: "SmartHR", salary: "600〜1,000万円", tech: "Ruby / React / AWS / GraphQL", desc: "労務SaaSで急成長。アクセシビリティ重視の開発。" },
      { slug: "moneyforward", name: "マネーフォワード", salary: "600〜950万円", tech: "Ruby / Go / React / AWS", desc: "家計・バックオフィスSaaSを多数展開。" },
      { slug: "sansan", name: "Sansan", salary: "600〜950万円", tech: "Kotlin / TypeScript / AWS / ML", desc: "名刺・契約管理SaaS。データ活用に強み。" },
      { slug: "plaid", name: "プレイド", salary: "600〜1,000万円", tech: "Go / TypeScript / GCP / BigQuery", desc: "CX領域のデータ処理基盤が技術的に先進。" },
      { slug: "layerx", name: "LayerX", salary: "600〜1,000万円", tech: "Go / TypeScript / AWS / Blockchain", desc: "業務効率化SaaSとフィンテックを推進。" },
    ],
  },
  {
    name: "SIer・コンサル",
    intro: "大規模案件と上流工程が中心。安定基盤と高めの待遇を両立しやすい領域です。",
    companies: [
      { slug: "accenture", name: "アクセンチュア", salary: "600〜1,200万円", tech: "Java / SAP / AWS / Azure", desc: "戦略〜実装まで担う総合コンサル。育成体制が手厚い。" },
      { slug: "nri", name: "野村総合研究所（NRI）", salary: "700〜1,200万円", tech: "Java / AWS / Salesforce / SAP", desc: "金融系に強い国内大手。コンサル×SIの両面。" },
      { slug: "ntt-data", name: "NTTデータ", salary: "550〜950万円", tech: "Java / AWS / Azure / Spring", desc: "官公庁・金融の大規模システムに実績多数。" },
    ],
  },
  {
    name: "メーカー・製造業大手",
    intro: "組込み・IoT・社内DX。製造業出身ミドルが業務知識を活かしやすい選択肢です。",
    companies: [
      { slug: "toyota", name: "トヨタ自動車", salary: "600〜950万円", tech: "C++ / Python / ROS / AWS", desc: "自動運転・モビリティのソフトウェア投資を強化。" },
      { slug: "sony", name: "ソニーグループ", salary: "650〜1,100万円", tech: "Python / C++ / AWS / AI/ML", desc: "ハード×AIの研究開発から事業まで幅広い。" },
      { slug: "hitachi", name: "日立製作所", salary: "600〜950万円", tech: "Java / Python / Azure / IoT", desc: "社会インフラ×ITのLumadaを軸にDXを推進。" },
      { slug: "panasonic", name: "パナソニック", salary: "550〜900万円", tech: "C++ / Python / AWS / Embedded", desc: "家電〜車載まで組込みソフトの裾野が広い。" },
      { slug: "fujitsu", name: "富士通", salary: "550〜900万円", tech: "Java / Python / Azure / Cloud", desc: "ジョブ型へ移行。クラウド・DX人材を募集強化。" },
    ],
  },
  {
    name: "ゲーム・エンタメ",
    intro: "ゲーム好きが本領を発揮できる領域。C++/C#やゲームエンジンの経験が評価されます。",
    companies: [
      { slug: "nintendo", name: "任天堂", salary: "600〜950万円", tech: "C++ / C# / Unity / 自社エンジン", desc: "ハード一体型開発。独自エンジンの知見が中心。" },
      { slug: "bandai-namco", name: "バンダイナムコ", salary: "550〜900万円", tech: "C++ / C# / Unreal Engine / Unity", desc: "IP×ゲームの大規模開発。多様な職種を擁する。" },
    ],
  },
];

const allCompanies = categories.flatMap((c) => c.companies);

const toc = [
  { id: "guide", label: "企業研究の使い方" },
  ...categories.map((c, i) => ({ id: `cat-${i}`, label: c.name })),
];

export default function CompanyIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "企業別エンジニア転職ガイド一覧",
    description:
      "外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲームの全30社をエンジニア転職の視点で業態分類した一覧ページ。",
    url: "https://middle-engineer.com/company/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allCompanies.length,
      itemListElement: allCompanies.map((company, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/company/${company.slug}/`,
        name: `${company.name} エンジニア転職ガイド`,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="企業別エンジニア転職ガイド一覧【30社】業態別に分類"
        description="外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲームの全30社をエンジニア転職の視点で業態分類した一覧ページ。"
        url="/company/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          企業別エンジニア転職ガイド一覧【30社】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          GAFAMから国内メガベンチャー、SaaS、SIer、メーカー、ゲームまで、全{allCompanies.length}社を業態別に分類しました。同じ「エンジニア採用」でも、業態によって求められる経験・選考スタイル・年収レンジは大きく異なります。気になる企業のガイドでは、採用の特徴・技術スタック・年収データ・選考フロー・30代40代視点での向き不向きまで掘り下げています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式採用ページ・技術ブログ", "上場企業の有価証券報告書", "口コミサイト集計値"]}
        />

        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月｜年収レンジは公式求人の提示レンジや口コミサイト集計値の傾向であり、職種・等級により変動します。
        </p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: 企業研究の使い方 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業研究の使い方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            企業別ガイドは「応募する/しない」を決める前の比較材料として使うのが効果的です。ミドル層が企業研究で見るべきポイントは、知名度ではなく次の4点に絞られます。
          </p>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 mb-4">
            <li>
              <span className="font-medium text-slate-700">技術スタックと自分の経験の重なり</span>
              ：使用言語・クラウドが現職と近いほど即戦力として評価され、年代のハードルが下がります。
            </li>
            <li>
              <span className="font-medium text-slate-700">選考スタイル</span>
              ：外資ビッグテックはコーディング・アルゴリズム面接、SIerやメーカーは経歴と業務知識重視など、対策の方向性が業態で変わります。
            </li>
            <li>
              <span className="font-medium text-slate-700">年収の構造</span>
              ：上場企業は有価証券報告書の平均年収が一つの目安になりますが、これは全社平均であり、エンジニア職や等級によってレンジは上下します。提示レンジは求人ベースで確認しましょう。
            </li>
            <li>
              <span className="font-medium text-slate-700">働き方とカルチャー</span>
              ：リモート可否・評価制度・組織規模は、30代40代が長く働けるかを左右する重要な判断軸です。
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            まず業態カテゴリで方向性を絞り、2〜3社のガイドを横断して比較すると、自分に合う企業タイプが見えてきます。具体的な求人や非公開の選考情報は、その業態に強いエージェント経由で集めるのが現実的です。
          </p>
        </section>

        {/* カテゴリ別 */}
        {categories.map((category, ci) => (
          <section key={category.name} id={`cat-${ci}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{category.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.companies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/company/${company.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{company.desc}</p>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">年収目安:</span> {company.salary}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">技術:</span> {company.tech}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* 関連 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">企業選びに役立つガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/knowledge/startup-vs-enterprise/" className="text-blue-600 hover:underline">→ スタートアップvs大企業の選び方</Link>
            <Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">→ 技術面接対策ガイド</Link>
            <Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">→ 複数オファーの比較方法</Link>
            <Link href="/skill/" className="text-blue-600 hover:underline">→ スキル別の転職戦略を見る</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">あなたに合った企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料相談して、最適な企業をマッチングしてもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
