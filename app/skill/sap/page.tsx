import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "SAPエンジニアの転職ガイド【ERP/S4HANA】年収・求人・将来性",
  description:
    "SAPエンジニアの転職市場を徹底解説。平均年収600〜1100万円、S/4HANA移行需要の背景、SAPエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "SAPエンジニアの平均年収は？",
    a: "30代で600万〜1,100万円が相場です。SAP認定コンサルタント（FI/CO/MM/SD等）は700万〜1,000万円、S/4HANA移行のプロジェクトマネージャーやアーキテクトは1,000万〜1,500万円の求人もあり、IT業界の中でもトップクラスの年収水準です。",
  },
  {
    q: "SAPの需要は今後も続く？",
    a: "当面は非常に高い需要が続きます。SAP ECC 6.0のサポート終了（2027年末）に伴うS/4HANA移行プロジェクトが大量に発生しており、2030年まではSAPエンジニアの需要は逼迫が続く見込みです。",
  },
  {
    q: "SAP未経験でも転職できる？",
    a: "完全未経験からは難しいですが、業務系システム開発（会計、在庫管理、販売管理等）の経験があれば、SAPコンサルティング会社のポテンシャル採用枠に応募できます。ABAP開発の経験があればさらに有利です。",
  },
  {
    q: "SAPの求人はどんな企業が多い？",
    a: "大手コンサルティングファーム（Accenture、Deloitte等）、SAPパートナー企業、大手SIer（NTTデータ、富士通等）、グローバル製造業のIT部門に多いです。特にS/4HANA移行の人材需要が急増しています。",
  },
  {
    q: "SAP認定資格は転職に有利？",
    a: "非常に有利です。SAP Certified Associate/Professional資格は、スキルの客観的証明として転職市場で高く評価されます。特にS/4HANAに関する資格は、移行プロジェクト参画に直結します。",
  },
  {
    q: "SAPエンジニアにおすすめの転職エージェントは？",
    a: "ビズリーチ（ハイクラスSAP案件が豊富）、レバテックキャリア（IT特化型で専門アドバイザー在籍）、JACリクルートメント（外資系コンサルのSAP求人）の3社がおすすめです。年収交渉力のあるエージェントを選びましょう。",
  },
];

export default function SapSkillPage() {
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
        title="SAPエンジニアの転職ガイド【ERP/S4HANA】年収・求人・将来性"
        description="SAPエンジニアの転職市場を徹底解説。平均年収600〜1100万円、S/4HANA移行需要の背景、SAPエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/sap/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "SAPエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SAPエンジニアの転職ガイド【ERP/S4HANA】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | SAPエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SAPは世界最大のERPパッケージベンダーであり、日本の大手企業の多くがSAPを基幹システムとして利用しています。2027年末のSAP ECC 6.0サポート終了に伴うS/4HANA移行需要により、SAPエンジニアの市場価値は過去最高水準に達しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、SAPエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SAPエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">600〜1,100万</p>
                <p className="text-sm text-slate-600 mt-1">30代SAPエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+45%</p>
                <p className="text-sm text-slate-600 mt-1">S/4HANA求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">5.0倍</p>
                <p className="text-sm text-slate-600 mt-1">SAP求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* SAPが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SAPエンジニアの需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">S/4HANA移行の期限が迫っている</h3>
              <p className="text-sm text-blue-700">
                SAP ECC 6.0のサポートが2027年末に終了するため、日本の大手企業の多くがS/4HANAへの移行を急いでいます。移行プロジェクトは2〜3年かかるため、今がSAPエンジニアの需要がピークに達しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">圧倒的な人材不足</h3>
              <p className="text-sm text-blue-700">
                S/4HANA移行需要に対してSAPエンジニアの供給が全く追いついておらず、求人倍率は5倍を超えています。結果としてSAPエンジニアの年収は高騰しており、年収1,000万円超の求人も珍しくありません。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバル展開の基盤としてのSAP</h3>
              <p className="text-sm text-blue-700">
                グローバルに事業展開する企業にとって、SAPは会計・在庫・販売・人事を統合管理する基幹システムとして不可欠です。海外拠点との連携や多通貨対応など、SAPの専門知識を持つエンジニアの価値は非常に高いです。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SAPエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "SAP ABAP開発者", range: "600万〜850万円", note: "ABAP/Fioriでのカスタマイズ開発" },
              { role: "SAPモジュールコンサルタント", range: "750万〜1,100万円", note: "FI/CO/MM/SD等の導入・設定コンサルティング" },
              { role: "SAPアーキテクト/PM", range: "1,000万〜1,500万円", note: "S/4HANA移行の全体設計、プロジェクト統括" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-blue-600 font-bold mb-1">{item.range}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 転職のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SAPエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "SAP認定資格を取得する", desc: "SAP Certified Associate/Professional資格は転職で非常に有利です。特にS/4HANAに関する資格（SAP Certified Application Associate - SAP S/4HANA等）は、移行プロジェクトへの参画に直結します。" },
              { num: "2", title: "特定モジュールの専門性を深める", desc: "FI（財務会計）、CO（管理会計）、MM（在庫管理）、SD（販売管理）など、特定モジュールの深い専門性を持つことで、コンサルタントとして高い年収を得られます。" },
              { num: "3", title: "S/4HANA移行経験をアピールする", desc: "既存ECC環境からS/4HANAへの移行プロジェクト経験は、最も高く評価されるスキルです。Brownfield/Greenfield/Bluefieldの移行方式の理解もアピールポイントになります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">SAPのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            SAP求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Salesforce転職ガイド", href: "/skill/salesforce/" },
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
