import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "福岡のIT転職事情【2026年】求人数・年収・おすすめエージェント",
  description:
    "福岡のIT・Webエンジニア転職市場を徹底解説。スタートアップ都市としての魅力、天神ビッグバン効果、リモートワーク移住、平均年収、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "福岡のITエンジニアの平均年収は？",
    a: "2026年時点で福岡のITエンジニアの平均年収は約450万円です。東京と比べると約170万円低いですが、家賃は東京の5〜6割程度であり、生活コストを考慮すると実質的な差は縮まります。スタートアップでストックオプション込みの高待遇も増えています。",
  },
  {
    q: "福岡がスタートアップ都市と呼ばれる理由は？",
    a: "福岡市は2014年に国家戦略特区に指定され、スタートアップ支援に積極的です。法人設立の簡素化、税制優遇、官民連携のインキュベーション施設「Fukuoka Growth Next」など、創業支援の環境が充実しています。2026年時点でIT系スタートアップ数は500社を超えています。",
  },
  {
    q: "天神ビッグバンとは？",
    a: "福岡市天神地区の大規模再開発プロジェクトです。老朽ビルの建替えを促進し、2024年までに30棟のビルが建替え予定。IT企業のオフィス需要も高まっており、LINEやメルカリの福岡拠点をはじめ、多くのIT企業が天神エリアに進出しています。",
  },
  {
    q: "東京から福岡への転職・移住は現実的？",
    a: "フルリモートの東京企業に勤めながら福岡に移住するエンジニアが増えています。東京の年収のまま福岡の生活コストで暮らせるため、可処分所得が大幅にUP。飛行機で東京まで約2時間、LCCを使えば片道5,000円程度とアクセスも良好です。",
  },
  {
    q: "福岡でフルリモートの求人は見つかる？",
    a: "福岡のIT企業のフルリモート率は約20%ですが、東京本社のフルリモート求人に福岡から応募するケースが増加中です。エージェントに「福岡在住・フルリモート希望」と伝えれば、全国対応のリモート求人を紹介してもらえます。",
  },
  {
    q: "福岡のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（福岡拠点あり、IT特化で求人豊富）、ワークポート（福岡発のIT特化型エージェント）、doda（福岡の総合求人に強い）の3社がおすすめです。特にワークポートは福岡本社のため、地元企業との繋がりが強いです。",
  },
];

const areas = [
  { name: "天神エリア", companies: "IT大手拠点、Web系、スタートアップ", salary: "430〜650万円", feature: "天神ビッグバンで再開発中。LINE、メルカリ、GMOなど大手の福岡拠点が集積。", remote: "ハイブリッド中心" },
  { name: "博多エリア", companies: "SIer、受託開発", salary: "400〜600万円", feature: "JR博多駅周辺にSIerや受託開発企業が集積。安定した案件が多い。", remote: "週3〜4出社が主流" },
  { name: "福岡市全域", companies: "スタートアップ、フリーランス", salary: "350〜700万円", feature: "Fukuoka Growth Next周辺にスタートアップが集積。コワーキングスペースも豊富。", remote: "フルリモート率 高" },
  { name: "北九州市", companies: "製造業IT、IoT", salary: "400〜600万円", feature: "TOTOや安川電機などの製造業DX。IoT・ロボティクス関連の開発。", remote: "出社中心" },
];

export default function FukuokaAreaPage() {
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
        title="福岡のIT転職事情【2026年】求人数・年収・おすすめエージェント"
        description="福岡のIT・Webエンジニア転職市場を徹底解説。スタートアップ都市としての魅力、天神ビッグバン効果、リモートワーク移住、おすすめエージェントを紹介します。"
        url="/area/fukuoka/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "福岡のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          福岡のIT転職事情【2026年】求人数・年収・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 福岡エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            福岡は「スタートアップ都市」として急成長しているIT市場です。天神ビッグバンによる再開発、国家戦略特区によるスタートアップ支援、そしてリモートワーク移住の受け皿として注目を集めています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、福岡のエリア別の求人特徴、年収相場、スタートアップ環境、リモートワーク移住の実情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約8,000件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">450万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">500社以上</p>
              <p className="text-sm text-blue-600">ITスタートアップ数</p>
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

        {/* スタートアップ都市 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ都市・福岡の魅力</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              福岡市は国家戦略特区として、スタートアップの創業を全面支援しています。法人設立の簡素化、雇用規制の緩和、オフィス賃料の補助など、エンジニアにとっても魅力的な環境が整っています。
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">Fukuoka Growth Next</h3>
                <p className="text-xs text-slate-600">官民連携のスタートアップ支援施設。コワーキング、メンタリング、投資家とのマッチングイベントを定期開催。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">エンジニアフレンドリーシティ</h3>
                <p className="text-xs text-slate-600">福岡市が「エンジニアフレンドリーシティ」を宣言。エンジニア向けイベント、勉強会が活発で、コミュニティが充実。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">生活コストの安さ</h3>
                <p className="text-xs text-slate-600">家賃は東京の5〜6割、食費も安い。空港から市街地まで地下鉄で11分というアクセスの良さも魅力。</p>
              </div>
            </div>
          </div>
        </section>

        {/* リモートワーク移住 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡へのリモートワーク移住</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">東京の年収 × 福岡の生活コスト</h3>
              <p className="text-sm text-blue-700">
                フルリモートの東京企業に勤めながら福岡で暮らすエンジニアが急増中。東京年収700万円の場合、福岡では家賃差だけで年間60〜100万円の節約に。実質年収800万円以上の生活が可能です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">アクセスの良さ</h3>
              <p className="text-sm text-blue-700">
                福岡空港は市街地から地下鉄11分。東京まで飛行機で約2時間、LCC利用なら片道5,000円〜。月1回の東京出張も負担なく対応可能です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ワークライフバランス</h3>
              <p className="text-sm text-blue-700">
                通勤時間の短さ、自然の豊かさ、食事の美味しさ。福岡はエンジニアのQOLを大幅に向上させる環境が整っています。ストレスの少ない環境でパフォーマンスを最大化しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">福岡のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                福岡に拠点があり、地元IT企業との太いパイプを持つ。IT特化型ならではの技術理解が高く、福岡のスタートアップ求人も豊富。対面面談にも対応。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ワークポート</h3>
              <p className="text-sm text-blue-700">
                福岡発のIT特化型エージェント。地元企業との繋がりが最も強く、非公開求人が豊富。対応スピードの速さにも定評がある。福岡のIT転職なら必ず登録すべき。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. doda</h3>
              <p className="text-sm text-blue-700">
                福岡拠点あり。総合型の強みを活かした幅広い求人ラインナップ。フルリモート可能な東京企業の求人も紹介してもらえる。
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
          <h2 className="text-xl font-bold mb-3">福岡のIT転職・移住を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            スタートアップ都市・福岡でのIT転職を実現。エージェントに登録して、福岡の最新求人とリモートワーク求人をチェックしましょう。
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
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
              { name: "スタートアップvs大企業", href: "/knowledge/startup-vs-enterprise/" },
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
