import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "神戸のIT転職事情【2026年】医療×IT・神戸デジタル・年収相場 | ミドルエンジニア転職ラボ",
  description:
    "神戸のIT・Webエンジニア転職市場を徹底解説。医療×IT、神戸デジタル構想、三宮・ポートアイランドのエリア別求人特徴、年収相場、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "神戸のITエンジニアの平均年収は？",
    a: "2026年時点で神戸のITエンジニアの平均年収は約500万円です。医療×IT分野では600万円以上、30代で450〜620万円、40代で550〜780万円が目安です。",
  },
  {
    q: "神戸の医療×IT求人とは？",
    a: "神戸はスーパーコンピュータ「富岳」や理化学研究所があり、医療・バイオ分野のIT化が進んでいます。医療画像AI、電子カルテシステム、創薬DXなどの求人があり、専門性が高いため年収も高めです。",
  },
  {
    q: "神戸デジタル構想とは？",
    a: "神戸市が推進するデジタルトランスフォーメーション施策です。行政DX、スマートシティ構想、スタートアップ支援などを柱とし、IT人材の誘致・育成を進めています。関連するIT求人も増加中です。",
  },
  {
    q: "大阪と神戸、通勤は現実的？",
    a: "三宮から大阪梅田まで約25分と非常に近く、大阪のIT企業に通勤するエンジニアも多いです。神戸の家賃は大阪より10〜15%安いため、コスパの良い通勤圏として人気です。",
  },
  {
    q: "神戸でフルリモートの求人はある？",
    a: "フルリモート率は約15%ですが、大阪の企業にリモート勤務するケースを含めると選択肢は広がります。Web系企業やSaaS企業を中心にリモート求人は増加傾向です。",
  },
  {
    q: "神戸のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（関西全域のIT求人に強い）、doda（神戸の大手企業求人が充実）、マイナビIT AGENT（丁寧なサポート）の3社がおすすめです。",
  },
];

const areas = [
  { name: "三宮", companies: "SIer、Web系、通信", salary: "470〜680万円", feature: "神戸のビジネス中心地。IT企業のオフィスが集中。大阪へのアクセスも良好。", remote: "ハイブリッド中心" },
  { name: "ポートアイランド", companies: "医療IT、バイオ、研究機関", salary: "520〜780万円", feature: "理研・先端医療センターが立地。医療×IT・バイオインフォマティクスの求人が豊富。", remote: "出社中心" },
  { name: "ハーバーランド", companies: "スタートアップ、EC、Web制作", salary: "420〜600万円", feature: "コワーキングスペースが充実。若いスタートアップが増加中。海を臨むオフィス環境。", remote: "フルリモート率 高" },
  { name: "西神", companies: "製造業IT、組込み、電機", salary: "480〜700万円", feature: "川崎重工、シスメックスなどのメーカー系IT拠点。安定した雇用環境。", remote: "出社中心" },
  { name: "明石・加古川", companies: "製造業DX、中小IT", salary: "430〜620万円", feature: "播磨エリアの製造業DX需要。コスト意識の高い企業のIT部門が中心。", remote: "出社中心" },
];

export default function KobeAreaPage() {
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
        title="神戸のIT転職事情【2026年】医療×IT・神戸デジタル・年収相場"
        description="神戸のIT・Webエンジニア転職市場を徹底解説。医療×IT、神戸デジタル構想、エリア別求人特徴、おすすめエージェントを紹介します。"
        url="/area/kobe/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "神戸のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          神戸のIT転職事情【2026年】医療×IT・神戸デジタル・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 神戸エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            神戸は医療×ITという独自の強みを持つIT転職エリアです。スーパーコンピュータ「富岳」や理化学研究所を擁し、医療・バイオ分野のIT化で先端を走っています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、神戸のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">神戸IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約3,800件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">500万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約30%</p>
              <p className="text-sm text-blue-600">リモート対応求人率</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エリア別 求人特徴と年収相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">エリア</th>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エリアの詳細</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">神戸のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              神戸のIT企業では大阪と比較するとリモートワークの普及率はやや低めですが、三宮エリアのWeb系企業を中心に導入が進んでいます。大阪の企業にリモート勤務するパターンも選択肢の一つです。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約15%）:</strong> Web系・SaaS企業中心。大阪の企業にリモート勤務するケースも増加。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約15%）:</strong> 大手企業で週2〜3日出社。大阪への通勤組を含む。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約70%）:</strong> 医療IT、製造業系、研究機関。セキュリティ・機密性要件が高い。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">神戸のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                関西全域のIT求人が豊富。神戸の医療×IT関連企業や大手メーカーのDX求人も保有。年収UP率80%で交渉力が高い。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                神戸の大手製造業IT求人が充実。川崎重工、シスメックスなどのDX部門求人に強い。大阪の求人も合わせて紹介。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. マイナビIT AGENT</h3>
              <p className="text-sm text-blue-700">
                丁寧なサポートが魅力。神戸エリアの中小IT企業からスタートアップまで幅広くカバー。20代〜30代に特に強い。
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
          <h2 className="text-xl font-bold mb-3">神戸のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            医療×IT、製造業DXと独自の強みを持つ神戸。IT特化型エージェントに登録して市場価値を確認しましょう。
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
              { name: "大阪のIT転職事情", href: "/area/osaka/" },
              { name: "京都のIT転職事情", href: "/area/kyoto/" },
              { name: "広島のIT転職事情", href: "/area/hiroshima/" },
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
