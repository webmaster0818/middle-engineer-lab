import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "札幌のIT転職事情【2026年】リモート移住・ニアショア・年収相場 | ミドルエンジニア転職ラボ",
  description:
    "札幌のIT・Webエンジニア転職市場を徹底解説。リモート移住先として人気の理由、ニアショア開発拠点、平均年収、エリア別求人特徴、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "札幌のITエンジニアの平均年収は？",
    a: "2026年時点で札幌のITエンジニアの平均年収は約430万円です。東京と比較すると190万円ほど低いですが、家賃が東京の半分以下のため可処分所得はそこまで変わりません。フルリモートなら東京水準の年収も可能です。",
  },
  {
    q: "札幌がリモート移住先として人気の理由は？",
    a: "家賃の安さ（東京比50%以下）、食事の美味しさ、自然環境の豊かさ、都市機能の充実（190万都市）が人気の理由です。空港からのアクセスも良く、月1回程度の東京出張も無理なくこなせます。",
  },
  {
    q: "札幌のニアショア開発とは？",
    a: "東京の企業が開発コストを抑えるため、札幌に開発拠点を設ける動きです。人件費が東京より20〜30%安く、優秀なエンジニアの確保もしやすいため、大手SIerやWeb企業の札幌オフィスが増加しています。",
  },
  {
    q: "札幌でフルリモートの求人は多い？",
    a: "札幌単体のフルリモート求人は限定的ですが、東京の企業がフルリモートOKで募集しているケースが多数あります。IT特化型エージェントに「札幌在住・フルリモート希望」と伝えれば、多くの選択肢を紹介してもらえます。",
  },
  {
    q: "札幌のIT企業の雰囲気は？",
    a: "東京と比較するとゆったりした雰囲気です。残業が少なく、ワークライフバランスを重視する企業が多い傾向にあります。スノーボードやアウトドアを楽しむエンジニアが多いのも特徴です。",
  },
  {
    q: "札幌のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人が最も豊富）、doda（札幌地元企業の求人に強い）、ビズリーチ（ハイクラスリモート求人）の3社がおすすめです。",
  },
];

const areas = [
  { name: "札幌駅周辺", companies: "SIer、大手IT支社、通信", salary: "430〜630万円", feature: "札幌最大のビジネス街。大手SIerやIT企業の北海道拠点が集中。ニアショア開発の中心地。", remote: "ハイブリッド中心" },
  { name: "大通・すすきの", companies: "Web系、スタートアップ、EC", salary: "380〜540万円", feature: "スタートアップやWeb制作会社が増加中。コワーキングスペースも充実。", remote: "フルリモート率 高" },
  { name: "北区（北大周辺）", companies: "AI、研究機関、アカデミア発SU", salary: "420〜620万円", feature: "北海道大学発のAIスタートアップが集積。研究機関との連携案件も。", remote: "ハイブリッド中心" },
  { name: "白石区・厚別区", companies: "BPO、テスト、コールセンター", salary: "350〜480万円", feature: "大手企業のBPO拠点。安定した就業環境で残業も少ない。", remote: "出社中心" },
  { name: "手稲区・西区", companies: "中小IT、Web制作", salary: "350〜480万円", feature: "住宅地近くの小規模IT企業。通勤負担が少なく生活との両立がしやすい。", remote: "出社中心" },
];

export default function SapporoAreaPage() {
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
        title="札幌のIT転職事情【2026年】リモート移住・ニアショア・年収相場"
        description="札幌のIT・Webエンジニア転職市場を徹底解説。リモート移住先としての魅力、ニアショア開発、おすすめエージェントを紹介します。"
        url="/area/sapporo/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "札幌のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          札幌のIT転職事情【2026年】リモート移住・ニアショア・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 札幌エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            札幌はリモート移住先としてエンジニアから絶大な人気を誇る都市です。190万人の大都市としての利便性を持ちながら、東京の半分以下の家賃と豊かな自然環境を享受できます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、札幌のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約3,500件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">430万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約35%</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              札幌はリモート移住先として全国トップクラスの人気を誇ります。東京の企業にフルリモートで勤務しながら札幌生活を楽しむエンジニアが急増中。ニアショア開発の拠点としても機能しています。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約20%）:</strong> 東京企業のリモート勤務が中心。札幌の生活費で東京水準の年収を獲得可能。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約15%）:</strong> 月1〜2回の東京出張。飛行機で約1.5時間。ニアショア開発拠点に多い。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約65%）:</strong> 地元SIer、BPO、コールセンター。札幌市内の通勤は非常に快適。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">札幌のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート求人が最も豊富。札幌移住×東京企業の転職パターンに強い。年収UP率80%で、リモートでも妥協しない年収交渉が可能。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                札幌地元のIT企業求人が充実。大手SIerの北海道拠点やニアショア開発企業の求人に強い。求人数の多さが魅力。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ビズリーチ</h3>
              <p className="text-sm text-blue-700">
                フルリモート対応のハイクラス求人が豊富。年収600万円以上の管理職・シニアエンジニアポジションを札幌から狙える。
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
          <h2 className="text-xl font-bold mb-3">札幌×リモートでIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            リモート移住先No.1の札幌。東京の年収×札幌の生活コストで最高のQOLを手に入れましょう。
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
              { name: "仙台のIT転職事情", href: "/area/sendai/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
              { name: "リモートワーク求人に強いエージェント比較", href: "/compare/remote-agents/" },
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
