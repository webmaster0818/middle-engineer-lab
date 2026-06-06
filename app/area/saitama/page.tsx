import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "埼玉のIT転職事情【2026年】大宮・ベッドタウン×リモート | ミドルエンジニア転職ラボ",
  description:
    "埼玉のIT・Webエンジニア転職市場を徹底解説。大宮・さいたま新都心・川越のエリア別求人特徴、ベッドタウン×リモートの働き方、平均年収、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "埼玉のITエンジニアの平均年収は？",
    a: "2026年時点で埼玉のITエンジニアの平均年収は約490万円です。ただし東京の企業にフルリモート勤務する場合は東京水準（620万円前後）の年収を得ることも可能です。",
  },
  {
    q: "埼玉で求人が多いエリアはどこ？",
    a: "大宮（SIer・大手メーカー系）、さいたま新都心（官公庁系IT・コールセンター）、川口（中小IT・Web制作）が主要エリアです。東京へのアクセスの良さから、リモート×東京企業という選択肢も豊富です。",
  },
  {
    q: "埼玉在住でフルリモートの求人は多い？",
    a: "埼玉在住者向けのフルリモート求人は急増しています。東京の企業がフルリモートOKの求人を出すケースが多く、実質的に東京と同等の選択肢があります。埼玉の生活費で東京の年収を得られるメリットは大きいです。",
  },
  {
    q: "埼玉から東京に通勤するITエンジニアは多い？",
    a: "非常に多いです。大宮から東京まで約30分、都内主要駅へのアクセスが良好です。ただしコロナ後はリモート勤務が普及し、週1〜2回の通勤で済むハイブリッド勤務を選ぶエンジニアが増えています。",
  },
  {
    q: "埼玉でIT転職するメリットは？",
    a: "家賃が東京比で30〜40%安く、生活費を大幅に削減できます。リモートワークと組み合わせれば、東京水準の年収で埼玉の低コスト生活が実現。QOLの向上とキャリアアップの両立が可能です。",
  },
  {
    q: "埼玉のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人が豊富）、doda（埼玉県内の求人も多い）、ワークポート（対応スピードが速い）の3社がおすすめです。フルリモート求人を軸に東京の求人も視野に入れましょう。",
  },
];

const areas = [
  { name: "大宮", companies: "SIer、大手メーカー系、通信", salary: "480〜700万円", feature: "東北・上越新幹線の停車駅。大手SIerの開発拠点が複数。交通の利便性が高い。", remote: "ハイブリッド中心" },
  { name: "さいたま新都心", companies: "官公庁系IT、コールセンター", salary: "430〜620万円", feature: "官公庁系のシステム開発案件が多い。安定性重視のエンジニアに人気。", remote: "出社中心" },
  { name: "川口・蕨", companies: "中小IT、Web制作、スタートアップ", salary: "400〜580万円", feature: "東京に隣接し家賃が安い。小規模IT企業やリモートワーカーが増加中。", remote: "フルリモート率 高" },
  { name: "川越", companies: "製造業IT、物流系DX", salary: "420〜600万円", feature: "製造業のDX推進に伴うIT求人が増加。物流倉庫のシステム開発も。", remote: "出社中心" },
  { name: "所沢・入間", companies: "BPO、テスト、組込み", salary: "400〜560万円", feature: "西武線沿線にIT企業が点在。コストを抑えた開発拠点として注目。", remote: "週2〜3出社" },
];

export default function SaitamaAreaPage() {
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
        title="埼玉のIT転職事情【2026年】大宮・ベッドタウン×リモート"
        description="埼玉のIT・Webエンジニア転職市場を徹底解説。大宮・さいたま新都心のエリア別求人特徴、ベッドタウン×リモートの働き方、おすすめエージェントを紹介します。"
        url="/area/saitama/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "埼玉のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          埼玉のIT転職事情【2026年】大宮・ベッドタウン×リモート
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 埼玉エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            埼玉は「ベッドタウン×リモートワーク」で注目を集めるIT転職エリアです。東京へのアクセスの良さと生活コストの低さを活かし、フルリモートで東京企業に勤務するエンジニアが急増しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、埼玉のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埼玉IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約5,500件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">490万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約45%</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">埼玉のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              埼玉はベッドタウンとしてのポジションを活かし、リモートワークとの親和性が非常に高いエリアです。東京の企業にフルリモート勤務しながら、埼玉の低コスト生活を享受するエンジニアが増加しています。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約20%）:</strong> 東京企業のフルリモート勤務が主流。埼玉県内のIT企業でもリモート化が進行中。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約25%）:</strong> 週1〜2回の東京通勤。大宮から東京まで約30分で通える利便性。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約55%）:</strong> 埼玉県内のSIer、官公庁系、製造業IT。セキュリティ要件がある案件。</p>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埼玉のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート求人が豊富で、埼玉在住のまま東京企業に転職可能。年収UP率80%で、ベッドタウン生活×高年収を実現するのに最適。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                埼玉県内のIT求人も充実。大宮・さいたま新都心エリアの大手企業求人に強い。求人数の多さで幅広い選択肢を提供。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ワークポート</h3>
              <p className="text-sm text-blue-700">
                対応スピードの速さが魅力。埼玉在住でも東京拠点の求人を多数紹介。未経験からのキャリアチェンジにも強い。
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
          <h2 className="text-xl font-bold mb-3">埼玉×リモートでIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            埼玉の低コスト生活×東京水準の年収。フルリモート求人に強いIT特化型エージェントに登録しましょう。
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
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
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
