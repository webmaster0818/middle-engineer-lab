import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ネットワークエンジニアの転職ガイド【Cisco/5G】年収・求人・将来性",
  description:
    "ネットワークエンジニアの転職市場を徹底解説。平均年収450〜750万円、5G・SD-WAN・ゼロトラスト需要の背景、ネットワークエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "ネットワークエンジニアの平均年収は？",
    a: "30代で450万〜750万円が相場です。CCIE保有者やセキュリティネットワークの専門家は700万〜1,000万円、ネットワークアーキテクトクラスでは900万〜1,200万円の求人もあります。クラウドネットワークのスキルで年収アップが狙えます。",
  },
  {
    q: "ネットワークエンジニアの需要は今後も続く？",
    a: "続きますが、求められるスキルが変化しています。従来のオンプレミスネットワーク構築に加え、SD-WAN、ゼロトラストネットワーク、クラウドネットワーク（AWS VPC、Azure VNet等）、5G対応のスキルが必要になっています。",
  },
  {
    q: "ネットワークエンジニアからクラウドエンジニアに転向できる？",
    a: "転向しやすいキャリアパスです。ネットワークの基礎知識（TCP/IP、DNS、ルーティング、ファイアウォール）はクラウドインフラでも不可欠で、AWS/GCP/Azureのネットワークサービス（VPC、Transit Gateway等）は既存スキルの延長線上にあります。",
  },
  {
    q: "ネットワークの求人はどんな企業が多い？",
    a: "通信キャリア（NTT、KDDI等）、SIer、データセンター運営企業、セキュリティベンダー、クラウド系企業に多いです。ゼロトラストネットワークの導入案件が増加しており、セキュリティとネットワークの両方を理解するエンジニアの需要が高いです。",
  },
  {
    q: "CCNA/CCNPは転職に有利？",
    a: "有利です。CCNAはネットワークエンジニアの基本資格として広く認知されており、書類選考でのアドバンテージになります。CCNPやCCIE、AWS Advanced Networkingなどの上位資格はさらに年収アップに直結します。",
  },
  {
    q: "ネットワークエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（インフラ・ネットワーク案件に強い）、マイナビIT AGENT（SIer系ネットワーク求人が豊富）、ビズリーチ（ハイクラスインフラ案件）の3社がおすすめです。Cisco認定資格と実務経験をアピールしましょう。",
  },
];

export default function NetworkSkillPage() {
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
        title="ネットワークエンジニアの転職ガイド【Cisco/5G】年収・求人・将来性"
        description="ネットワークエンジニアの転職市場を徹底解説。平均年収450〜750万円、5G・SD-WAN・ゼロトラスト需要の背景、ネットワークエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/network/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "ネットワークエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ネットワークエンジニアの転職ガイド【Cisco/5G】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | ネットワークエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            ネットワークエンジニアは、企業のネットワークインフラを設計・構築・運用する専門職です。5G、SD-WAN、ゼロトラストネットワーク、クラウドネットワークの普及により、求められるスキルが進化しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、ネットワークエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネットワークエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">450〜750万</p>
                <p className="text-sm text-slate-600 mt-1">30代ネットワークエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+15%</p>
                <p className="text-sm text-slate-600 mt-1">ゼロトラスト関連求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.2倍</p>
                <p className="text-sm text-slate-600 mt-1">NW求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* NWが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネットワークエンジニアの需要が変化している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゼロトラストネットワークへの移行</h3>
              <p className="text-sm text-blue-700">
                リモートワークの定着とサイバー攻撃の高度化により、従来の境界型セキュリティからゼロトラストモデルへの移行が進んでいます。SASE、SDP、マイクロセグメンテーションの設計・導入ができるエンジニアの需要が高まっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SD-WAN/SASEの普及</h3>
              <p className="text-sm text-blue-700">
                拠点間ネットワークのSD-WAN化とSASE（Secure Access Service Edge）の導入が企業で加速しています。Cisco Viptela、Fortinet、Zscalerなどの製品知識を持つエンジニアが求められています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5G/ローカル5Gの展開</h3>
              <p className="text-sm text-blue-700">
                5Gの商用展開とローカル5G（企業専用5G）の導入が進んでおり、5Gネットワークの設計・構築ができるエンジニアの需要が新たに生まれています。製造業やスマートシティでのローカル5G案件が増加中です。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネットワークエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "ネットワークエンジニア", range: "450万〜700万円", note: "LAN/WAN設計・構築・運用" },
              { role: "セキュリティネットワークエンジニア", range: "600万〜900万円", note: "ゼロトラスト設計、SASE導入" },
              { role: "クラウドネットワークアーキテクト", range: "750万〜1,100万円", note: "AWS/Azure/GCPのネットワーク設計" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネットワークエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "クラウドネットワークのスキルを身につける", desc: "AWS VPC、Azure VNet、GCP VPCの設計・構築経験があると、クラウド時代のネットワークエンジニアとして市場価値が大幅に上がります。AWS Advanced Networking認定資格の取得も有効です。" },
              { num: "2", title: "ゼロトラスト/SASEの知識を持つ", desc: "ゼロトラストアーキテクチャの設計、SASE（Zscaler、Prisma Access等）の導入経験は、セキュリティ要件が厳しい企業からの評価が非常に高いです。" },
              { num: "3", title: "ネットワーク自動化（IaC）を学ぶ", desc: "Ansible、Terraform、Pythonを使ったネットワーク自動化のスキルがあると、従来型のネットワークエンジニアとの差別化が図れます。Network as Code（NaC）の実践経験が求められます。" },
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
          <h2 className="text-xl font-bold mb-3">ネットワークのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ネットワーク求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
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
