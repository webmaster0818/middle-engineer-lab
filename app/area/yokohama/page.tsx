import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "横浜のIT転職事情【2026年】みなとみらい・自動車DX・年収相場",
  description:
    "横浜のIT・Webエンジニア転職市場を徹底解説。みなとみらい・新横浜・関内のエリア別求人特徴、自動車系DX需要、平均年収、リモートワーク事情、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "横浜のITエンジニアの平均年収は？",
    a: "2026年時点で横浜のITエンジニアの平均年収は約560万円です。30代で500〜680万円、40代で600〜850万円が目安です。日産やDeNAなど大手企業のDX部門では700万円以上の求人も多くあります。",
  },
  {
    q: "横浜で求人が多いエリアはどこ？",
    a: "みなとみらい（大手IT・自動車DX）、新横浜（組込み・製造業系）、関内（中小IT・SIer）が3大エリアです。近年はみなとみらいにIT企業の移転・新設が加速しています。",
  },
  {
    q: "横浜でフルリモートの求人は多い？",
    a: "フルリモート求人は約20%、ハイブリッド勤務を含めると約50%がリモート対応しています。東京に本社がある企業の横浜オフィス勤務で、週2〜3日リモートが主流です。",
  },
  {
    q: "東京ではなく横浜で働くメリットは？",
    a: "通勤ラッシュの回避、家賃の安さ（東京比で約20%安い）、生活環境の良さがメリットです。みなとみらいエリアは職住近接が実現しやすく、QOLを重視するエンジニアに人気です。",
  },
  {
    q: "横浜の自動車系DX求人とは？",
    a: "日産自動車を中心とした自動運転・コネクテッドカー・EV関連のIT求人です。組込みソフトウェア、AI・機械学習、クラウドインフラなどの技術が求められ、年収700万円以上の高待遇求人が多いです。",
  },
  {
    q: "横浜のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（横浜の求人が豊富）、Geekly（みなとみらいエリアに強い）、doda（製造業DX求人が多い）の3社がおすすめです。横浜は東京のエージェントが対応可能な範囲内です。",
  },
];

const areas = [
  { name: "みなとみらい", companies: "大手IT、自動車DX、コンサル", salary: "550〜850万円", feature: "日産、富士ソフト、DeNA横浜オフィスなど。再開発で大手IT企業の進出が加速中。", remote: "ハイブリッド中心" },
  { name: "新横浜", companies: "組込み、製造業系IT、SIer", salary: "500〜750万円", feature: "製造業系IT企業が集積。組込みソフトウェア、IoTなど。新幹線アクセス良好。", remote: "週2〜3出社" },
  { name: "関内・桜木町", companies: "中小IT、Web制作、SIer", salary: "450〜650万円", feature: "スタートアップや中小IT企業が増加中。家賃が安くオフィスコストを抑えたい企業に人気。", remote: "フルリモート率 中" },
  { name: "横浜駅周辺", companies: "通信系、SaaS、営業支援", salary: "500〜700万円", feature: "アクセスの良さからコールセンター・カスタマーサクセス系IT企業が多い。", remote: "出社中心" },
  { name: "戸塚・港南台", companies: "SIer、BPO、テスト", salary: "420〜600万円", feature: "大手SIerの開発センターが立地。安定した就業環境で長期プロジェクトが多い。", remote: "出社中心" },
];

export default function YokohamaAreaPage() {
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
        title="横浜のIT転職事情【2026年】みなとみらい・自動車DX・年収相場"
        description="横浜のIT・Webエンジニア転職市場を徹底解説。みなとみらい・新横浜・関内のエリア別求人特徴、自動車系DX需要、平均年収、おすすめエージェントを紹介します。"
        url="/area/yokohama/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "横浜のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          横浜のIT転職事情【2026年】みなとみらい・自動車DX・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 横浜エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            横浜は東京に次ぐ首都圏第2のIT拠点です。みなとみらいの再開発を中心に大手IT企業の進出が加速しており、自動車DXを軸とした高年収求人も増加しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、横浜のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">横浜IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約12,000件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">560万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約50%</p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">横浜のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              横浜のIT企業では東京と同様にリモートワークが浸透しています。東京本社の横浜オフィス勤務ではハイブリッド型が主流で、みなとみらいエリアではフルリモート可の求人も増加中です。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約20%）:</strong> Web系企業、SaaS企業を中心に増加。東京の企業にリモート勤務するケースも。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約30%）:</strong> 週1〜3日出社。みなとみらい・新横浜の大手企業に多い。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約50%）:</strong> 製造業系IT、組込み開発、SIerに多い。セキュリティ要件がある業界。</p>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">横浜のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                横浜・神奈川エリアのIT求人が豊富。みなとみらいの大手企業や自動車DX関連の非公開求人も多く保有。年収UP率80%で交渉力にも定評あり。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. Geekly</h3>
              <p className="text-sm text-blue-700">
                みなとみらいエリアのWeb系企業に強い。DeNA横浜オフィスなどのメガベンチャー求人が充実。平均年収UP額76万円のマッチング力。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                製造業DX・自動車関連IT求人が充実。横浜の大手メーカー系IT子会社の求人が豊富で、安定志向のエンジニアにおすすめ。
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
          <h2 className="text-xl font-bold mb-3">横浜のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            横浜はみなとみらいを中心にIT求人が急増中。IT特化型エージェントに登録して、あなたの市場価値を確認しましょう。
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
              { name: "埼玉のIT転職事情", href: "/area/saitama/" },
              { name: "千葉のIT転職事情", href: "/area/chiba/" },
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
