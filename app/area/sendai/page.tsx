import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "仙台のIT転職事情【2026年】東北IT拠点・復興DX・年収相場",
  description:
    "仙台のIT・Webエンジニア転職市場を徹底解説。東北最大のIT拠点としての求人特徴、復興DX需要、平均年収、リモートワーク事情、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "仙台のITエンジニアの平均年収は？",
    a: "2026年時点で仙台のITエンジニアの平均年収は約450万円です。東京と比較すると170万円ほど低いですが、生活コストを考慮すると実質的な可処分所得は大きく変わりません。30代で400〜550万円、40代で500〜700万円が目安です。",
  },
  {
    q: "仙台で求人が多いエリアはどこ？",
    a: "仙台駅周辺（SIer・大手IT）、青葉区一番町（Web系・スタートアップ）、泉区（大手メーカー系IT）が主要エリアです。仙台駅前にIT企業が集中しています。",
  },
  {
    q: "仙台の復興DX求人とは？",
    a: "東日本大震災からの復興に関連するIT需要です。防災システム、インフラ管理DX、地域活性化プラットフォームなどの開発案件があり、社会貢献性の高い仕事として人気があります。",
  },
  {
    q: "仙台から東京にフルリモートで働ける？",
    a: "十分可能です。東京の企業がフルリモートOKの求人を出すケースが増えており、仙台在住のまま東京水準の年収を得ることもできます。仙台は東北新幹線で東京まで約1.5時間とアクセスも良好です。",
  },
  {
    q: "仙台のIT企業の特徴は？",
    a: "東北のIT開発拠点として大手SIerの支社が多いほか、地元密着のWeb制作会社やスタートアップも増加中。ニアショア開発の拠点としても注目されており、東京の案件を仙台で開発するケースが増えています。",
  },
  {
    q: "仙台のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人が豊富）、doda（仙台拠点の求人に強い）、ワークポート（対応スピードが速い）の3社がおすすめです。フルリモート求人も視野に入れると選択肢が広がります。",
  },
];

const areas = [
  { name: "仙台駅周辺", companies: "SIer、大手IT支社、通信", salary: "440〜650万円", feature: "東北最大のビジネス街。NTTデータ、富士通など大手SIerの東北拠点が集中。", remote: "ハイブリッド中心" },
  { name: "青葉区一番町", companies: "Web系、スタートアップ、EC", salary: "380〜550万円", feature: "アーケード商店街沿いにIT企業が増加。コワーキングスペースも充実。", remote: "フルリモート率 中" },
  { name: "泉区", companies: "大手メーカー系IT、BPO", salary: "420〜620万円", feature: "郊外型のオフィスパーク。落ち着いた環境で長期プロジェクトに取り組める。", remote: "出社中心" },
  { name: "宮城野区", companies: "物流IT、建設DX", salary: "400〜580万円", feature: "仙台港周辺の物流関連IT。建設業DX需要も拡大中。", remote: "出社中心" },
  { name: "長町・太白区", companies: "中小IT、Web制作", salary: "370〜520万円", feature: "住宅地近くのIT企業。通勤負担が少なく、ワークライフバランス重視。", remote: "週2〜3出社" },
];

export default function SendaiAreaPage() {
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
        title="仙台のIT転職事情【2026年】東北IT拠点・復興DX・年収相場"
        description="仙台のIT・Webエンジニア転職市場を徹底解説。東北最大のIT拠点としての求人特徴、復興DX需要、おすすめエージェントを紹介します。"
        url="/area/sendai/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "仙台のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          仙台のIT転職事情【2026年】東北IT拠点・復興DX・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 仙台エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            仙台は東北最大のIT拠点として、大手SIerの支社やニアショア開発拠点が集積するエリアです。復興DX関連の独自の求人もあり、社会貢献とキャリアアップを両立できる転職先として注目されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、仙台のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約3,200件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">450万円</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              仙台ではニアショア開発の拠点としてリモートワーク環境が整備されつつあります。東京の案件を仙台から担当するケースが増えており、地方×リモートの成功例として注目されています。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約15%）:</strong> 東京企業のリモート勤務やニアショア開発。仙台の生活費で東京水準の年収。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約15%）:</strong> 月1〜2回の東京出張。新幹線で約1.5時間の利便性を活かした働き方。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約70%）:</strong> 地元SIer、官公庁系、製造業IT。仙台市内での通勤は東京と比較して大幅に楽。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仙台のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート求人が豊富で、仙台在住のまま東京企業に転職可能。年収UP率80%で、地方でも高年収を実現するパイプラインが強い。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                仙台エリアの地元企業求人が充実。大手SIerの東北拠点や地元IT企業の求人に強い。幅広い選択肢が魅力。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ワークポート</h3>
              <p className="text-sm text-blue-700">
                対応スピードの速さが魅力。仙台にも対応しており、未経験からのIT転職サポートにも強い。地方転職に理解が深い。
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
          <h2 className="text-xl font-bold mb-3">仙台のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            東北最大のIT拠点・仙台。ニアショア開発やフルリモート求人で東京水準の年収も可能。まずはエージェントに登録しましょう。
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
              { name: "札幌のIT転職事情", href: "/area/sapporo/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
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
