import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "千葉のIT転職事情【2026年】幕張・物流DX・年収相場",
  description:
    "千葉のIT・Webエンジニア転職市場を徹底解説。幕張新都心・柏の葉・成田のエリア別求人特徴、物流DX需要、平均年収、リモートワーク事情、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "千葉のITエンジニアの平均年収は？",
    a: "2026年時点で千葉のITエンジニアの平均年収は約480万円です。ただし幕張エリアの大手企業では550〜750万円、物流DX系では600万円以上の求人も増えています。",
  },
  {
    q: "千葉で求人が多いエリアはどこ？",
    a: "幕張新都心（大手IT・通信）、柏の葉（スマートシティ関連）、船橋・市川（中小IT・Web制作）が主要エリアです。幕張は千葉最大のIT集積地です。",
  },
  {
    q: "千葉の物流DX求人とは？",
    a: "成田空港・千葉港を中心とした物流業界のDX推進に関するIT求人です。倉庫管理システム、配送最適化AI、RPA導入などの案件が増えており、年収500〜700万円の求人が多いです。",
  },
  {
    q: "千葉在住でフルリモートは可能？",
    a: "十分可能です。東京の企業がフルリモートOKの求人を多く出しており、千葉在住のまま高年収の東京企業に勤務できます。幕張エリアでは地元企業のリモート求人も増加中です。",
  },
  {
    q: "幕張エリアの特徴は？",
    a: "イオン、ZOZOの本社があるほか、NTT系列やSIer大手の拠点が集中。大型カンファレンス施設もあり、IT業界の情報収集にも便利。海沿いの環境で働けるのも魅力です。",
  },
  {
    q: "千葉のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人が豊富）、doda（千葉県内の大手企業求人に強い）、リクルートエージェント（求人数最多で幅広い選択肢）の3社がおすすめです。",
  },
];

const areas = [
  { name: "幕張新都心", companies: "大手IT、通信、EC", salary: "520〜750万円", feature: "ZOZO、イオン、NTT系列などの本社・拠点が集中。千葉最大のITビジネスエリア。", remote: "ハイブリッド中心" },
  { name: "柏の葉", companies: "スマートシティ、AI、IoT", salary: "500〜700万円", feature: "つくばエクスプレス沿線のスマートシティ構想。先端技術系スタートアップが集積。", remote: "フルリモート率 中" },
  { name: "船橋・市川", companies: "中小IT、Web制作、SIer", salary: "430〜600万円", feature: "東京に隣接しアクセス良好。小規模IT企業やフリーランスエンジニアが多い。", remote: "フルリモート率 高" },
  { name: "成田・印西", companies: "物流DX、データセンター", salary: "480〜680万円", feature: "物流DX需要が拡大。印西はデータセンター集積地でインフラ系求人が豊富。", remote: "出社中心" },
  { name: "千葉駅周辺", companies: "SIer、官公庁系、通信", salary: "450〜630万円", feature: "千葉県庁関連のIT案件やSIer拠点。安定した就業環境が特徴。", remote: "週2〜3出社" },
];

export default function ChibaAreaPage() {
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
        title="千葉のIT転職事情【2026年】幕張・物流DX・年収相場"
        description="千葉のIT・Webエンジニア転職市場を徹底解説。幕張新都心・柏の葉のエリア別求人特徴、物流DX需要、おすすめエージェントを紹介します。"
        url="/area/chiba/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "千葉のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          千葉のIT転職事情【2026年】幕張・物流DX・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 千葉エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            千葉は幕張新都心を中心としたIT集積地と、物流DXという独自の強みを持つ転職エリアです。データセンターの集積地としても注目され、インフラエンジニアの需要が特に高まっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、千葉のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">千葉IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約4,800件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">480万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約40%</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">千葉のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              千葉は東京へのアクセスが良好なため、リモート×ハイブリッドの働き方が浸透しています。船橋・市川エリアでは東京企業にフルリモート勤務するエンジニアが多く、幕張ではオフィス勤務も快適な環境です。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約15%）:</strong> 東京企業のリモート勤務が中心。千葉県内IT企業でも導入が進む。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約25%）:</strong> 幕張の大手企業を中心に週2〜3日出社。東京通勤のケースも。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約60%）:</strong> データセンター、物流系DX、官公庁系。物理的な作業が伴う現場。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">千葉のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート・ハイブリッド求人が豊富。千葉在住のまま東京水準の年収を得る転職パターンに強い。年収UP率80%。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                幕張エリアの大手企業求人に強い。物流DXやデータセンター関連のIT求人も充実。求人数の多さが魅力。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. リクルートエージェント（IT）</h3>
              <p className="text-sm text-blue-700">
                求人数最多。千葉県内から東京まで幅広い選択肢を提供。大手メーカー系IT子会社の求人にも強い。
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
          <h2 className="text-xl font-bold mb-3">千葉のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            幕張を中心にIT求人が拡大中。物流DX・データセンター需要も追い風。まずはIT特化型エージェントに登録しましょう。
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
              { name: "東京のIT転職事情", href: "/area/tokyo/" },
              { name: "横浜のIT転職事情", href: "/area/yokohama/" },
              { name: "埼玉のIT転職事情", href: "/area/saitama/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
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
