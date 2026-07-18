import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/aws-japan/" },
  title: "AWSジャパンへの転職・年収・評判【2026年】クラウドエンジニア/SAの採用と難易度",
  description:
    "アマゾン ウェブ サービス ジャパン（AWSジャパン）への転職を、年収（levels.fyi集計）・評判（OpenWork）・選考（OLP/Bar Raiser）・職種（SDE/ソリューションアーキテクト/TAM）で解説。AWS認定資格の活かし方や、未経験・30代40代の現実までまとめた転職ガイドです。",
};

const basicData: [string, string][] = [
  ["企業名", "アマゾン ウェブ サービス ジャパン合同会社（AWSジャパン）"],
  ["事業", "クラウドコンピューティング（AWS）の法人向け提供・技術支援・営業"],
  ["主な所在地", "東京（目黒）ほか"],
  ["主なエンジニア職種", "ソフトウェア開発（SDE）／ソリューションアーキテクト（SA）／テクニカルアカウントマネージャー（TAM）／クラウドサポート"],
  ["評価軸", "Our Leadership Principles（OLP・16項目）"],
  ["技術", "AWS各種（Lambda・DynamoDB・ECS・S3 等）／ Java・Python・TypeScript 等"],
];

const salaryRows: [string, string][] = [
  ["L4（若手・SDE I 相当）", "総報酬 約1,300万円前後（$90K台）"],
  ["L5（中堅・SDE II 相当）", "総報酬 約1,700万円前後（$116K前後）"],
  ["L6（シニア・SDE III 相当）", "総報酬 約2,400万円前後（$167K前後）"],
  ["L7（Principal）", "上位レンジ（公開データ少・変動大）"],
];

const sources = [
  "AWS 採用プロセスのサポート（公式）",
  "Amazon Our Leadership Principles（公式）",
  "levels.fyi（2026年6月時点・日本拠点ソフトウェアエンジニア集計）",
  "OpenWork アマゾンジャパン／AWSジャパン（社員クチコミ集計）",
];

const faqs = [
  {
    q: "AWSジャパンの年収はどのくらいですか？",
    a: "AWSジャパンは有価証券報告書を公表しておらず公式の平均年収はありません。報酬集計サイトlevels.fyi（2026年6月時点）では、ソフトウェアエンジニアでL4（若手）約$90K台、L5（中堅）約$116K前後、L6（シニア）約$167K前後の総報酬です。RSU（株式報酬）は1年目5%・2年目15%・3〜4年目40%ずつのバックロード型のため、初年度は基本給＋サインオンボーナス中心になりやすい点に注意してください。",
  },
  {
    q: "AWS認定資格は転職に有利ですか？",
    a: "AWSの実務経験を補強する材料にはなりますが、資格だけで合格できるわけではありません。AWSジャパンの選考はOLP（行動・価値観）と技術力（設計・運用の実経験）が中心です。認定資格は『AWSを業務で使ってきた』ことの裏付けとして活き、ソリューションアーキテクト職などでは特に整合性が見られます。資格の費用や難易度は資格ガイドもご覧ください。",
  },
  {
    q: "ソリューションアーキテクト（SA）とエンジニア（SDE）の違いは？",
    a: "SDEはAWSのサービスそのものを開発する職種、SA（ソリューションアーキテクト）は顧客企業のクラウド設計・導入を技術支援する顧客向け職種です。SAは技術力に加えて提案・コミュニケーション力が求められ、英語を使う場面も多くなります。どちらもOLPベースの評価です。",
  },
  {
    q: "AWSジャパンの評判・働きやすさは？",
    a: "OpenWorkのクチコミでは「裁量が大きい」「有給消化率が高い」といった声がある一方、職種・チーム・繁忙期によって負荷が変わるという指摘もあります。ドキュメント文化が強く、文章で論理的に説明する力が求められます。配属チームの実態は面接の逆質問で確認するのがおすすめです。",
  },
  {
    q: "英語は必須ですか？",
    a: "AWSはグローバル組織のため、ポジションによっては英語が必須です。特にSAやグローバルチームと連携する職種では、ドキュメント・会議で英語を使う場面が多くなります。Writing（文章で論理的に説明する力）も重視されると一般に言われています。",
  },
];

export default function AwsJapanCompanyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
  };
  return (
    <>
      <ArticleJsonLd
        title="AWSジャパンへの転職・年収・評判【2026年】"
        description="アマゾン ウェブ サービス ジャパン（AWSジャパン）への転職を、年収・評判・選考・職種で解説。AWS認定資格の活かし方や30代40代の現実までまとめた転職ガイド。"
        url="/company/aws-japan/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "AWSジャパン" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">AWSジャパンへの転職・年収・評判【2026年】クラウドエンジニア/SA</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 年収・評判・選考（OLP）をクラウド職種の視点で解説</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】AWSジャパンの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: AWSジャパンは有価証券報告書を公表しておらず公式の平均年収は非公表です。levels.fyi（2026年6月時点）ではL5（中堅・SDE II相当）で約$116K前後（約1,700万円）が目安です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・ソフトウェアエンジニアの総報酬目安：L4 約1,300万円前後（$90K台）、L5 約1,700万円前後（$116K前後）、L6 約2,400万円前後（$167K前後）（levels.fyi・2026年6月時点、日本拠点SWE集計）。</li><li>・RSU（株式報酬）は1年目5%／2年目15%／3〜4年目40%ずつのバックロード型のため、初年度は基本給＋サインオンボーナス中心になりやすい点に注意。</li><li>・ユーザー投稿ベースの集計値で、為替・個人の交渉・RSUの株価により変動します。</li></ul>
          <p className="text-sm leading-7 text-slate-700 mt-3">有報を公表する国内IT企業の実額比較は<Link href="/salary/company-ranking/" className="text-petrol-deep underline font-medium">IT企業の平均年収ランキング（有報57社）</Link>をご覧ください（外資系は非公表のため本ランキングには含まれません）。</p>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          アマゾン ウェブ サービス ジャパン合同会社（AWSジャパン）は、世界最大級のクラウド「AWS」の法人向け提供・技術支援・開発を担う組織です。本ページは<strong>AWS（クラウド）職種</strong>に焦点を当て、年収（levels.fyi集計）・評判（OpenWork）・選考（OLP／Bar Raiser）・職種（SDE／ソリューションアーキテクト／TAM）を出典付きで整理します。年収は一次情報が存在しないため、出典・時点・変動の大きさを必ず添えています。
        </p>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-slate-700 mb-6">
           EC・デバイス・広告などを含むアマゾン全体の総合的な解説は <Link href="/company/amazon/" className="text-petrol-deep underline font-medium">Amazon／AWS Japan 転職ガイド</Link> をご覧ください。本ページはAWS（クラウド事業）に特化しています。
        </div>

        <DataNote surveyedAt="2026年6月" sources={sources} />

        <section className="mb-12 mt-6">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：難易度と向くエンジニア</h2>
            <p className="text-blue-900 text-sm leading-relaxed mb-3">AWSジャパンのエンジニア中途採用は<strong>最難関クラス</strong>。次の3点が揃う人に向きます。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>① <strong>AWS／分散システム</strong>の設計・運用の実務経験がある</li>
              <li>② <strong>オーナーシップ</strong>を持って完遂したエピソードをOLPで語れる</li>
              <li>③ コーディング／技術面接の基礎と、<strong>英語・文章での論理説明</strong>に抵抗がない</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">年収データ（出典付き）</h2>
          <p className="text-slate-600 text-sm mb-4">AWSジャパンは有報非公表のため、levels.fyi（2026年6月時点・日本拠点SWE集計）の総報酬レンジを掲載します。RSUはバックロード型（1年目5%／2年目15％／3〜4年目40%）です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">レベル</th>
                  <th className="p-2 border-b-2 border-slate-300">総報酬の目安</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([lv, sal]) => (
                  <tr key={lv} className="border-b border-slate-200">
                    <td className="p-2 font-medium">{lv}</td>
                    <td className="p-2 font-bold text-slate-900">{sal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：levels.fyi（2026年6月時点・ユーザー投稿集計）。為替・個人の交渉・RSUの株価で変動します。AWSジャパンは有価証券報告書を公表していません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">AWSの主なエンジニア職種</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
            <li><strong>ソフトウェア開発エンジニア（SDE）</strong>：AWSのサービス本体を開発。分散システム・大規模運用の経験が活きる。</li>
            <li><strong>ソリューションアーキテクト（SA）</strong>：顧客企業のクラウド設計・移行を技術支援する顧客向け職種。提案力・英語の比重が高い。</li>
            <li><strong>テクニカルアカウントマネージャー（TAM）</strong>：契約顧客の運用を継続的に支援。技術＋伴走力。</li>
            <li><strong>クラウドサポートエンジニア</strong>：技術的な問い合わせ対応。AWS認定資格が活きやすい入口職種。</li>
          </ul>
          <p className="text-slate-600 text-sm mt-3">AWS認定資格の費用・難易度は<Link href="/cert/salary/" className="text-petrol-deep underline">資格別の想定年収・資格手当</Link>や<Link href="/cert/compare/" className="text-petrol-deep underline">IT資格比較</Link>もご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">選考の特徴（OLP・Bar Raiser）</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            選考は<strong>Our Leadership Principles（OLP・16項目）</strong>への適合性が重視されます。書類→1次面接→ループ面接（複数面接官・各60分）→内定が一般的な流れで、採用対象チーム外の訓練された面接官「<strong>Bar Raiser</strong>」が基準の一貫性を担保します。OLP対策は<Link href="/knowledge/behavioral/" className="text-petrol-deep underline">行動面接（STAR法）</Link>、技術面は<Link href="/knowledge/coding-test/" className="text-petrol-deep underline">コーディングテスト対策</Link>から。詳しい選考フローは<Link href="/company/amazon/" className="text-petrol-deep underline">Amazon／AWS Japanガイド</Link>で解説しています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-lg p-4">
                <summary className="font-medium text-slate-800 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/company/amazon/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">Amazon／AWS Japan（総合）</Link>
            <Link href="/cert/salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">AWS認定など資格別年収</Link>
            <Link href="/salary/job-type-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">職種別年収（SA/SRE等）</Link>
            <Link href="/company/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業別ガイド一覧</Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">AWSジャパンの求人・想定年収を確認しよう</h2>
          <p className="text-blue-100 text-sm mb-4">AWS求人は非公開のことも多く、想定年収はエージェント経由で把握するのが確実です。IT特化エージェントに相談して、自分の経験で狙えるレベル・年収を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
      </article>
    </>
  );
}
