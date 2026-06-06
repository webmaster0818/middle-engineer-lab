import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "名古屋のIT転職事情【2026年】求人数・年収・おすすめエージェント",
  description:
    "名古屋のIT・Webエンジニア転職市場を徹底解説。トヨタ系製造DX、自動運転関連求人、名駅エリアの求人特徴、平均年収、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "名古屋のITエンジニアの平均年収は？",
    a: "2026年時点で名古屋のITエンジニアの平均年収は約490万円です。ただしトヨタ系やデンソーなどの自動車メーカー関連のIT部門では600〜800万円以上の求人も多く、分野による差が大きい傾向にあります。",
  },
  {
    q: "名古屋でIT求人が多いエリアはどこ？",
    a: "名古屋駅周辺（名駅エリア）に大手SIerやIT企業が集中しています。伏見・栄エリアにはWeb系企業、豊田市周辺にはトヨタ関連のIT企業が多くあります。名駅エリアは再開発で企業進出が加速しています。",
  },
  {
    q: "トヨタ系の製造DX求人はどんなスキルが必要？",
    a: "組み込みシステム開発（C/C++）、IoTプラットフォーム開発、データ分析（Python）、クラウドインフラ（AWS/Azure）のスキルが求められます。自動運転関連ではAI/ML、画像認識、LiDARデータ処理の経験が評価されます。",
  },
  {
    q: "名古屋はリモートワーク求人が少ない？",
    a: "東京に比べるとフルリモート求人は少なめですが、ハイブリッド勤務は増加傾向にあります。製造業はセキュリティ要件から出社中心ですが、Web系企業やSaaS企業ではフルリモートも増えています。東京のフルリモート企業に就職し名古屋在住で働く選択肢もあります。",
  },
  {
    q: "名古屋のIT転職で年収を上げるコツは？",
    a: "トヨタ系・デンソー系の製造DX案件は年収水準が高いため、製造業の業務知識とITスキルの掛け合わせが最も効果的です。また、自動運転・コネクテッドカー関連のスキルがあれば市場価値が大幅にUPします。",
  },
  {
    q: "名古屋のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（IT特化型で名古屋の求人もカバー）、doda（名古屋の製造業DX求人に強い）、リクルートエージェント（名古屋拠点あり、トヨタ系の求人豊富）の3社がおすすめです。",
  },
];

const areas = [
  { name: "名駅エリア", companies: "大手SIer、IT企業本社", salary: "480〜700万円", feature: "名古屋駅の再開発で企業進出が加速。JRゲートタワー周辺にIT企業が集積。", remote: "ハイブリッド中心" },
  { name: "伏見・栄エリア", companies: "Web系、スタートアップ", salary: "430〜600万円", feature: "コワーキングスペースが充実。名古屋発のスタートアップが増加中。", remote: "フルリモート率 やや高" },
  { name: "豊田市周辺", companies: "トヨタ系、自動車IT", salary: "550〜850万円", feature: "トヨタ、デンソー、アイシンなどの自動車メーカーIT部門。自動運転・コネクテッドカー関連。", remote: "出社中心" },
  { name: "刈谷・安城エリア", companies: "製造業系IT、組み込み", salary: "480〜750万円", feature: "デンソー本社周辺。組み込みシステム、車載ソフトウェア開発の拠点。", remote: "出社中心" },
];

export default function NagoyaAreaPage() {
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
        title="名古屋のIT転職事情【2026年】求人数・年収・おすすめエージェント"
        description="名古屋のIT・Webエンジニア転職市場を徹底解説。トヨタ系製造DX、自動運転関連求人、名駅エリアの求人特徴、おすすめエージェントを紹介します。"
        url="/area/nagoya/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "名古屋のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          名古屋のIT転職事情【2026年】求人数・年収・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 名古屋エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            名古屋は自動車産業を中心とした製造業の集積地であり、DX需要の高まりからITエンジニアの需要が急増しています。特にトヨタグループの自動運転・コネクテッドカー関連の開発需要は全国トップクラスです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、名古屋のエリア別の求人特徴、年収相場、自動車産業DXの最新動向、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        {/* 市場概要 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">名古屋IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約12,000件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">490万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">前年比+25%</p>
              <p className="text-sm text-blue-600">自動運転関連求人増加率</p>
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

        {/* トヨタ系製造DX */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">トヨタ系製造DXと自動運転求人</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              トヨタグループは「ソフトウェアファースト」を掲げ、IT人材の大量採用を進めています。Woven by Toyota（旧Woven Planet）を中心に、自動運転・コネクテッドカー・スマートシティの開発が活発です。
            </p>
            <div className="space-y-3">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">自動運転ソフトウェアエンジニア</h3>
                <p className="text-xs text-slate-600">C++/Python、ROS、センサーフュージョン、経路計画。年収700〜1,200万円。世界トップレベルの技術に携われる。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">コネクテッドカー基盤エンジニア</h3>
                <p className="text-xs text-slate-600">クラウド（AWS/GCP）、IoT、データパイプライン構築。年収600〜900万円。車両データのリアルタイム処理。</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1">製造ライン DXエンジニア</h3>
                <p className="text-xs text-slate-600">IoT、エッジコンピューティング、予知保全システム。年収500〜750万円。スマートファクトリー推進。</p>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">名古屋のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                IT特化型で名古屋エリアの求人もしっかりカバー。技術理解の高いアドバイザーが、トヨタ系を含むIT求人を的確に紹介。オンライン面談対応。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. doda</h3>
              <p className="text-sm text-blue-700">
                名古屋の製造業DX求人に特に強い総合型エージェント。トヨタ系、デンソー系の非公開求人も豊富。名古屋に拠点があり対面面談も可能。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. リクルートエージェント</h3>
              <p className="text-sm text-blue-700">
                名古屋拠点あり。トヨタグループをはじめとする製造業IT部門の求人が豊富。大手ならではの情報量と交渉力が魅力。
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
          <h2 className="text-xl font-bold mb-3">名古屋のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            自動車産業DXで注目の名古屋IT市場。IT特化型エージェントに登録して、トヨタ系を含む最新求人をチェックしましょう。
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
              { name: "大阪のIT転職事情", href: "/area/osaka/" },
              { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
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
