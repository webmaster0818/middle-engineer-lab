import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "広島のIT転職事情【2026年】マツダDX・製造業IT・年収相場 | ミドルエンジニア転職ラボ",
  description:
    "広島のIT・Webエンジニア転職市場を徹底解説。マツダDXを中心とした製造業IT需要、平均年収、エリア別求人特徴、リモートワーク事情、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "広島のITエンジニアの平均年収は？",
    a: "2026年時点で広島のITエンジニアの平均年収は約460万円です。マツダ関連のDX求人では600万円以上、30代で420〜580万円、40代で500〜720万円が目安です。",
  },
  {
    q: "広島のマツダDX求人とは？",
    a: "マツダの本社がある広島では、自動車のコネクテッド化・電動化に伴うIT需要が拡大しています。組込みソフトウェア、クラウド基盤、データ分析、AI活用などのポジションがあり、自動車業界未経験でもIT経験があれば応募可能な求人が多いです。",
  },
  {
    q: "広島で求人が多いエリアはどこ？",
    a: "広島駅周辺（SIer・大手IT）、紙屋町・八丁堀（Web系・スタートアップ）、安芸郡府中町（マツダ本社エリア）が主要エリアです。",
  },
  {
    q: "広島のリモートワーク事情は？",
    a: "フルリモート率は約12%とまだ低めですが、東京・大阪の企業にリモート勤務するパターンが増えています。新幹線で大阪まで約1.5時間、福岡まで約1時間とアクセスも良好です。",
  },
  {
    q: "広島のIT企業の特徴は？",
    a: "製造業DXを中心としたIT需要が強いのが特徴です。マツダ以外にもシャープの工場やJFEスチールなど、大手製造業のDX推進に関連するIT企業が集積しています。",
  },
  {
    q: "広島のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（IT特化で年収UP率が高い）、doda（広島の製造業DX求人が充実）、リクルートエージェント（幅広い選択肢）の3社がおすすめです。",
  },
];

const areas = [
  { name: "広島駅周辺", companies: "SIer、大手IT支社、通信", salary: "440〜640万円", feature: "中四国最大のビジネス街。NTTデータや富士通など大手SIerの中国地方拠点が集中。", remote: "ハイブリッド中心" },
  { name: "紙屋町・八丁堀", companies: "Web系、スタートアップ、EC", salary: "400〜560万円", feature: "広島の繁華街。Web制作会社やスタートアップが増加中。飲食街も近く交流が盛ん。", remote: "フルリモート率 中" },
  { name: "安芸郡府中町", companies: "自動車DX、製造業IT", salary: "500〜750万円", feature: "マツダ本社エリア。自動車DX関連のIT求人が集中。年収水準が高い。", remote: "出社中心" },
  { name: "西区・佐伯区", companies: "製造業IT、組込み", salary: "430〜620万円", feature: "工業地域に近く、製造業のIT化に関連する企業が点在。安定した雇用環境。", remote: "出社中心" },
  { name: "東広島", companies: "半導体関連IT、研究機関", salary: "450〜650万円", feature: "広島大学周辺。半導体関連のIT需要や産学連携プロジェクトが増加中。", remote: "週2〜3出社" },
];

export default function HiroshimaAreaPage() {
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
        title="広島のIT転職事情【2026年】マツダDX・製造業IT・年収相場"
        description="広島のIT・Webエンジニア転職市場を徹底解説。マツダDXを中心とした製造業IT需要、エリア別求人特徴、おすすめエージェントを紹介します。"
        url="/area/hiroshima/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "広島のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          広島のIT転職事情【2026年】マツダDX・製造業IT・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 広島エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            広島はマツダを中心とした自動車DXと製造業IT需要が特徴的な転職エリアです。中四国最大の都市として、SIer支社やWeb系企業も集積しており、地方の中では求人の選択肢が豊富です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、広島のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約2,800件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">460万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約25%</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              広島のIT企業ではリモートワークの導入がゆるやかに進んでいます。製造業DX関連は出社が多いですが、Web系企業やSIerではハイブリッド勤務が増加中です。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約12%）:</strong> Web系企業中心。東京・大阪の企業にリモート勤務するケースも増加。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約13%）:</strong> SIerや大手IT企業で週2〜3日出社。広島市内の通勤は東京比で大幅に快適。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約75%）:</strong> 製造業DX、組込み開発、自動車関連。現場密着型の開発が多い。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                IT特化で年収UP率80%。広島の製造業DX関連求人やフルリモート求人を保有。全国対応で地方からも利用しやすい。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                広島エリアの製造業DX求人が充実。マツダ関連やメーカー系IT子会社の求人に強い。地元密着型の求人も多い。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. リクルートエージェント（IT）</h3>
              <p className="text-sm text-blue-700">
                求人数最多で広島エリアもカバー。大手企業からスタートアップまで幅広い選択肢。全国転勤可能な求人も充実。
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
          <h2 className="text-xl font-bold mb-3">広島のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            マツダDXを中心に製造業ITの求人が充実する広島。IT特化型エージェントで市場価値を確認しましょう。
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
              { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
              { name: "神戸のIT転職事情", href: "/area/kobe/" },
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
