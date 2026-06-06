import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "大阪のIT転職事情【2026年】求人数・年収・おすすめエージェント",
  description:
    "大阪のIT・Webエンジニア転職市場を徹底解説。梅田・難波・新大阪エリアの求人特徴、製造業DX需要、大阪万博効果、平均年収、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "大阪のITエンジニアの平均年収は？",
    a: "2026年時点で大阪のITエンジニアの平均年収は約520万円です。東京と比べると約100万円低いですが、生活コストを考慮すると実質的な差は小さくなります。30代で450〜650万円、40代で550〜800万円が目安です。",
  },
  {
    q: "大阪で求人が多いエリアはどこ？",
    a: "梅田（グランフロント周辺のIT企業集積地）、新大阪（SIer・メーカー系）、難波・本町（Web系・スタートアップ）が3大エリアです。2025年の万博効果で中之島エリアにも新規IT企業が進出しています。",
  },
  {
    q: "大阪の製造業DX需要はどのくらい？",
    a: "パナソニック、ダイキン、クボタなど大阪に本社を置く製造業大手のDX投資が加速しており、2026年はDXエンジニアの求人が前年比30%増加しています。IoT、データ分析、AI活用のスキルがあれば高年収が期待できます。",
  },
  {
    q: "大阪万博2025のIT業界への影響は？",
    a: "万博関連のシステム開発・運用で2024〜2025年に大量のIT人材需要が発生しました。万博後もスマートシティ構想、IR関連のシステム開発需要が続いており、大阪のIT市場は拡大傾向にあります。",
  },
  {
    q: "東京から大阪への転職は年収が下がる？",
    a: "平均的には50〜100万円程度下がるケースが多いですが、製造業DXやフルリモートの東京企業に就職するなど、年収を維持する方法もあります。大阪は家賃が東京の6〜7割程度なので、可処分所得で見ると同等以上になることも多いです。",
  },
  {
    q: "大阪のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（大阪の拠点あり、IT求人豊富）、doda（関西の求人に強い総合型）、マイナビIT AGENT（大阪支社あり、丁寧なサポート）の3社がおすすめです。大阪拠点があるエージェントを選ぶのがポイントです。",
  },
];

const areas = [
  { name: "梅田エリア", companies: "IT企業本社、Web系、SaaS", salary: "500〜750万円", feature: "グランフロント大阪を中心にIT企業が集積。楽天、ヤフーなどの大阪拠点も。", remote: "ハイブリッド中心" },
  { name: "新大阪エリア", companies: "SIer、メーカー系IT", salary: "450〜700万円", feature: "新幹線アクセスの良さから東京本社のSIer支社が多い。安定した大型案件が豊富。", remote: "週3〜4出社が主流" },
  { name: "難波・本町エリア", companies: "Web系、スタートアップ", salary: "450〜650万円", feature: "コスト重視のスタートアップが集積。裁量が大きくチャレンジングな環境。", remote: "フルリモート率 高" },
  { name: "中之島エリア", companies: "金融系IT、行政DX", salary: "550〜800万円", feature: "万博効果で企業進出が加速。大阪府・市のDXプロジェクトの拠点。", remote: "ハイブリッド中心" },
];

export default function OsakaAreaPage() {
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
        title="大阪のIT転職事情【2026年】求人数・年収・おすすめエージェント"
        description="大阪のIT・Webエンジニア転職市場を徹底解説。梅田・難波・新大阪エリアの求人特徴、製造業DX需要、大阪万博効果、おすすめエージェントを紹介します。"
        url="/area/osaka/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "大阪のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          大阪のIT転職事情【2026年】求人数・年収・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 大阪エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            大阪は東京に次ぐ日本第2のIT求人市場です。製造業DXの需要拡大と大阪万博2025の効果により、IT人材の需要は右肩上がりで推移しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、大阪のエリア別の求人特徴、年収相場、製造業DX需要、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約22,000件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">520万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">前年比+15%</p>
              <p className="text-sm text-blue-600">DXエンジニア求人増加率</p>
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

        {/* 製造業DX */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪の製造業DX需要</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              大阪は日本有数の製造業集積地です。パナソニック、ダイキン、クボタ、シャープなどの大手メーカーがDX投資を加速させており、ITエンジニアの採用を積極的に行っています。
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">IoTエンジニア</h3>
                <p className="text-xs text-slate-600">工場のスマートファクトリー化に伴い、センサーデータ収集・分析基盤の開発需要が拡大。年収500〜800万円。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">データエンジニア / AI エンジニア</h3>
                <p className="text-xs text-slate-600">製造データの分析・予測モデル構築。Python、TensorFlow/PyTorchのスキルが求められる。年収600〜900万円。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">クラウドインフラエンジニア</h3>
                <p className="text-xs text-slate-600">オンプレからクラウドへの移行プロジェクトが多数。AWS/Azure経験があれば高需要。年収550〜850万円。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 万博効果 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪万博2025のIT業界への効果</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">万博関連システム開発</h3>
              <p className="text-sm text-blue-700">
                チケット予約システム、入場管理、多言語対応アプリなどの開発で大量のIT人材需要が発生。万博後もレガシーとして運用・保守の仕事が継続。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スマートシティ・IR構想</h3>
              <p className="text-sm text-blue-700">
                夢洲エリアを中心としたスマートシティ構想により、IoT・AI・5G関連のIT需要が長期的に見込まれている。大阪のIT市場規模は今後も拡大傾向。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大阪のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                大阪にオフィスがあり、関西の企業との太いパイプを持つ。IT特化型ならではの技術理解が高く、年収交渉力も強い。大阪のIT求人を幅広くカバー。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda</h3>
              <p className="text-sm text-blue-700">
                関西エリアの求人数が豊富な総合型。製造業DXの求人にも強く、大手メーカーのIT部門への転職を狙うなら必須。大阪梅田に拠点あり。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. マイナビIT AGENT</h3>
              <p className="text-sm text-blue-700">
                大阪支社での対面面談が可能。30代前半までの転職に特に強く、丁寧なサポートが特徴。関西の中堅IT企業の独占求人も保有。
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
          <h2 className="text-xl font-bold mb-3">大阪のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            製造業DXと万博効果で活況の大阪IT市場。IT特化型エージェントに登録して、最新の求人情報を受け取りましょう。
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
              { name: "名古屋のIT転職事情", href: "/area/nagoya/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
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
