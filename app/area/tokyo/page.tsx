import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "東京のIT転職事情【2026年】求人数・年収・おすすめエージェント",
  description:
    "東京のIT・Webエンジニア転職市場を徹底解説。渋谷・六本木・品川・大手町のエリア別求人特徴、平均年収、リモートワーク事情、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "東京のITエンジニアの平均年収は？",
    a: "2026年時点で東京のITエンジニアの平均年収は約620万円です。30代で550〜750万円、40代で650〜950万円が目安です。外資系やメガベンチャーでは30代でも800万円以上の求人が多くあります。",
  },
  {
    q: "東京で求人が多いエリアはどこ？",
    a: "渋谷（Web系スタートアップ・メガベンチャー）、六本木（外資系・IT大手）、品川（SIer・大手メーカー）、大手町（金融系・コンサル）が4大エリアです。近年は五反田・目黒もスタートアップが集積しています。",
  },
  {
    q: "東京でフルリモートの求人は多い？",
    a: "IT業界ではフルリモート求人が約25%、ハイブリッド勤務を含めると約60%がリモート対応しています。特にWeb系企業やSaaS企業はフルリモート率が高い傾向にあります。",
  },
  {
    q: "地方から東京への転職は難しい？",
    a: "オンライン面接が普及したため、地方からの転職ハードルは大幅に下がりました。エージェントに登録すればリモート面接可能な企業を優先的に紹介してもらえます。入社前に1〜2回の対面面接がある企業が多いですが、交通費を負担してくれるケースもあります。",
  },
  {
    q: "東京のIT転職で年収を上げるコツは？",
    a: "IT特化型エージェント（レバテックキャリア、Geeklyなど）を利用し、複数のオファーを比較することが最も効果的です。東京は企業間の採用競争が激しいため、スキルを適切にアピールすれば年収100万円以上のUPも十分可能です。",
  },
  {
    q: "東京のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（東京の求人が最多）、Geekly（渋谷・六本木エリアに強い）、ビズリーチ（年収800万円以上のハイクラス）の3社がおすすめです。東京はエージェントの拠点も多く、対面面談も受けやすい環境です。",
  },
];

const areas = [
  { name: "渋谷エリア", companies: "メガベンチャー、Web系スタートアップ", salary: "600〜900万円", feature: "サイバーエージェント、DeNA、ミクシィなど。最新技術を使った開発環境が多い。", remote: "フルリモート率 高" },
  { name: "六本木エリア", companies: "外資系IT、コンサル、大手IT", salary: "700〜1,200万円", feature: "Google、Amazon、メルカリなど。英語力があれば年収大幅UP。", remote: "ハイブリッド中心" },
  { name: "品川エリア", companies: "SIer、大手メーカー系", salary: "550〜800万円", feature: "NTTデータ、ソニー、日立など。安定性とスケールの大きいPJが魅力。", remote: "週2〜3出社が主流" },
  { name: "大手町エリア", companies: "金融系IT、コンサル", salary: "650〜1,000万円", feature: "金融DX需要が拡大。Fintech系スタートアップも増加中。", remote: "出社中心（セキュリティ要件）" },
  { name: "五反田・目黒", companies: "SaaS、スタートアップ", salary: "500〜800万円", feature: "急成長スタートアップが集積。裁量が大きく技術的チャレンジが豊富。", remote: "フルリモート率 高" },
];

export default function TokyoAreaPage() {
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
        title="東京のIT転職事情【2026年】求人数・年収・おすすめエージェント"
        description="東京のIT・Webエンジニア転職市場を徹底解説。渋谷・六本木・品川・大手町のエリア別求人特徴、平均年収、リモートワーク事情、おすすめエージェントを紹介します。"
        url="/area/tokyo/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "東京のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          東京のIT転職事情【2026年】求人数・年収・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 東京エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            東京は日本最大のIT求人市場です。2026年時点で全国のIT求人の約55%が東京に集中しており、年収水準も全国平均を大きく上回ります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、東京のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">東京IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約85,000件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">620万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約60%</p>
              <p className="text-sm text-blue-600">リモート対応求人率</p>
            </div>
          </div>
        </section>

        {/* エリア別特徴テーブル */}
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

        {/* エリア詳細 */}
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

        {/* リモートワーク事情 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">東京のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              東京のIT企業では、コロナ後もリモートワークが定着しています。特にWeb系企業・SaaS企業ではフルリモートが標準になりつつあり、地方在住のまま東京の企業で働くエンジニアも増えています。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約25%）:</strong> Web系、SaaS企業を中心に拡大中。地方在住OK。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約35%）:</strong> 週1〜3日出社が主流。大手IT、メガベンチャーに多い。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約40%）:</strong> SIer、金融系、セキュリティ要件の高い業界。</p>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">東京のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                東京のIT求人数No.1。渋谷にオフィスがあり、対面面談も可能。年収UP率80%で、東京の企業との太いパイプが魅力。30代・40代のミドル層に特に強い。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. Geekly</h3>
              <p className="text-sm text-blue-700">
                渋谷・六本木エリアのWeb系・ゲーム系企業に強い。平均年収UP額76万円。マッチング精度の高さに定評があり、スピード感のある転職が可能。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ビズリーチ</h3>
              <p className="text-sm text-blue-700">
                年収800万円以上のハイクラス求人が豊富。外資系IT企業やCTO・VPoEなどの管理職ポジションを狙うなら必須。スカウト型で効率的に転職活動ができる。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">東京のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            東京は求人数・年収ともに全国トップ。IT特化型エージェントに登録して、あなたの市場価値を確認しましょう。
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
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
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
