import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "フルリモートIT転職ガイド【2026年】地方在住×東京企業の年収・求人",
  description:
    "フルリモートIT転職を徹底解説。地方在住のまま東京企業で働く方法、リモート求人の探し方、年収への影響、おすすめエージェント、成功のコツを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "フルリモートだと年収は下がる？",
    a: "フルリモートだからといって年収が下がるわけではありません。多くの東京企業はリモート勤務でも東京水準の年収を提示します。ただし一部の企業では地域手当の調整があり、10〜15%程度の差が生じるケースもあります。",
  },
  {
    q: "フルリモート求人はどうやって探す？",
    a: "IT特化型エージェント（レバテックキャリア、Geekly等）に「フルリモート希望」と伝えるのが最も効率的です。求人サイトでも「フルリモート」「リモートOK」で絞り込みが可能ですが、非公開求人はエージェント経由でしか見つかりません。",
  },
  {
    q: "フルリモートで採用されやすい職種は？",
    a: "バックエンドエンジニア、フロントエンドエンジニア、インフラエンジニア（クラウド系）、データサイエンティスト、SREが特に採用されやすいです。一方、組込み開発やハードウェア連携が必要な職種はリモートが難しい傾向です。",
  },
  {
    q: "フルリモートのデメリットは？",
    a: "主なデメリットは、コミュニケーション不足、孤独感、オン/オフの切り替え難しさ、昇進への影響（出社組と比較して）です。対策として、定期的な1on1、コワーキングスペースの活用、明確な業務時間の設定が効果的です。",
  },
  {
    q: "地方在住でも東京の企業に転職できる？",
    a: "オンライン面接が普及した現在、地方在住でも東京の企業に転職できるケースが大幅に増えています。面接は全てオンライン、入社後もフルリモートという企業が約25%あります。エージェントに相談すれば、地方在住OKの求人を優先的に紹介してもらえます。",
  },
  {
    q: "フルリモート転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人数No.1）、ビズリーチ（ハイクラスリモート求人）、Green（カジュアル面談でリモート可否を確認しやすい）の3社がおすすめです。",
  },
];

const areas = [
  { name: "Web系・SaaS企業", companies: "スタートアップ、メガベンチャー", salary: "500〜900万円", feature: "フルリモート率が最も高い。技術的な裁量が大きく、最新技術を使える環境が多い。", remote: "フルリモート率 高" },
  { name: "SIer・受託開発", companies: "大手SIer、中堅SIer", salary: "450〜750万円", feature: "プロジェクトによりリモート可否が異なる。クラウド案件はリモート率が高い。", remote: "ハイブリッド中心" },
  { name: "コンサル・PMO", companies: "ITコンサル、PMOベンダー", salary: "600〜1,200万円", feature: "年収水準が高い。リモートOKの案件が増加しているが、クライアント先出社もあり。", remote: "ハイブリッド中心" },
  { name: "社内SE・情シス", companies: "事業会社のIT部門", salary: "450〜700万円", feature: "安定した就業環境。リモート勤務できるかは企業の方針に大きく依存。", remote: "企業により異なる" },
  { name: "フリーランス", companies: "業務委託、SES", salary: "600〜1,500万円", feature: "フルリモート案件が最も多い。月額単価60〜120万円。スキルに応じて高収入も可能。", remote: "フルリモート率 最高" },
];

export default function RemoteAreaPage() {
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
      <ArticleJsonLd
        title="フルリモートIT転職ガイド【2026年】地方在住×東京企業の年収・求人"
        description="フルリモートIT転職を徹底解説。地方在住のまま東京企業で働く方法、リモート求人の探し方、おすすめエージェントを紹介します。"
        url="/area/remote/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "フルリモートIT転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フルリモートIT転職ガイド【2026年】地方在住×東京企業の年収・求人
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | フルリモートIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            フルリモートは地方在住エンジニアにとって最高の選択肢です。東京の高年収求人に地方から応募し、生活コストの安い環境で働くことで、実質的な可処分所得を大幅に増やせます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、フルリモート求人の現状、年収への影響、職種別のリモート率、成功のコツ、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモートIT転職の市場概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約25%</p>
              <p className="text-sm text-blue-600">IT求人のフルリモート率</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">580万円</p>
              <p className="text-sm text-blue-600">フルリモート求人の平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">年15%増</p>
              <p className="text-sm text-blue-600">フルリモート求人の増加率</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業種別 フルリモート率と年収相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">業種</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な企業タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収レンジ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リモート</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{area.name}</td>
                    <td className="px-3 py-3 border border-slate-200">{area.companies}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{area.salary}</td>
                    <td className="px-3 py-3 border border-slate-200">{area.remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 年収レンジは2026年6月時点の概算。スキル・経験・ポジションにより異なります。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各業種の詳細</h2>
          <div className="space-y-4">
            {areas.map((area, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{area.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{area.feature}</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>企業タイプ: {area.companies}</span>
                  <span>年収: {area.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモート転職を成功させるコツ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>IT特化型エージェントを利用:</strong> フルリモート求人の多くは非公開。エージェント経由でしかアクセスできない求人が多数。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>自走力をアピール:</strong> フルリモートではセルフマネジメント能力が重視されます。過去のリモートワーク経験や自己管理の実績を伝えましょう。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>ポートフォリオを充実:</strong> リモート採用では成果物による判断が重視されます。GitHubやブログで技術力を可視化しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモート転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート求人数No.1。地方在住×東京企業の転職パターンに最も強い。年収UP率80%で、リモートでも妥協しない年収交渉が可能。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ビズリーチ</h3>
              <p className="text-sm text-blue-700">
                年収600万円以上のハイクラスリモート求人が豊富。スカウト型で、プロフィールを登録しておけばリモートOKの企業からオファーが届く。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. Green</h3>
              <p className="text-sm text-blue-700">
                IT/Web業界特化の求人サイト。「リモートOK」で絞り込みが可能。カジュアル面談でリモート勤務の詳細を直接確認できるのが強み。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">フルリモートでIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            場所に縛られない働き方で、年収もQOLも最大化。まずはフルリモート求人に強いエージェントに登録しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
              { name: "札幌のIT転職事情", href: "/area/sapporo/" },
              { name: "リモートワーク求人に強いエージェント比較", href: "/compare/remote-agents/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
