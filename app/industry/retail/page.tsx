import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "小売・流通業界からECテック転職【DXエンジニアガイド】| ミドルエンジニア転職ラボ",
  description:
    "小売・流通業界エンジニアからECテック・リテールテック・OMO領域への転職方法を徹底解説。小売業界の知識が活きるIT職種と転職戦略を紹介します。",
};

const faqs = [
  {
    q: "小売・流通業界の経験はECテック転職で評価されますか？",
    a: "高く評価されます。POS連携、在庫管理、物流最適化、顧客データ分析など、小売業界の業務プロセスを理解しているエンジニアはECテック・リテールテック企業で希少人材です。特にOMO（Online Merges with Offline）戦略の推進には、実店舗運営の知識が不可欠です。",
  },
  {
    q: "小売業界からECテック転職すると年収はどうなりますか？",
    a: "小売系SEの平均年収は380〜550万円程度ですが、ECプラットフォーム企業やリテールテック企業では500〜800万円レンジが一般的です。データアナリストやOMOエンジニアのシニアポジションでは800〜1000万円の求人もあり、スキル次第で大幅な年収UPが見込めます。",
  },
  {
    q: "ECサイトの開発経験がなくても転職できますか？",
    a: "転職可能です。小売業界のPOSシステム、在庫管理システム、基幹システムの開発・運用経験は、リテールテック企業で高く評価されます。並行してPython、SQL、Webフレームワーク（React/Next.js）の基礎を学ぶと、より幅広いポジションに応募できます。",
  },
  {
    q: "小売業界からECテック転職で有利な資格はありますか？",
    a: "Google Analytics個人認定資格（GAIQ）やデータ分析系の資格（統計検定2級など）は、ECサイト運営に直結するスキルの証明になります。AWS認定資格やGCP認定資格も、クラウドベースのECプラットフォーム開発に有利です。",
  },
  {
    q: "小売業界から転職しやすいIT職種は何ですか？",
    a: "ECプラットフォームエンジニア、リテールテックエンジニア、データアナリスト（購買データ分析）が転職しやすいポジションです。また、Shopify・BASE等のECプラットフォーム企業やOMOソリューションを提供するスタートアップも、小売業の知識を持つエンジニアを求めています。",
  },
  {
    q: "小売業界からECテック転職に強いエージェントは？",
    a: "GeeklyはEC・リテールテック企業の求人に強く、業界特化の転職支援に定評があります。ワークポートは異業種からIT業界への転職支援実績が豊富で、未経験領域へのキャリアチェンジもサポートしています。2社以上に登録して比較検討するのがおすすめです。",
  },
];

export default function RetailPage() {
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
        title="小売・流通業界からECテック転職【DXエンジニアガイド】| ミドルエンジニア転職ラボ"
        description="小売・流通業界エンジニアからECテック・リテールテック・OMO領域への転職方法を徹底解説。小売業界の知識が活きるIT職種と転職戦略を紹介します。"
        url="/industry/retail/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "小売・流通業界からECテック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          小売・流通業界からECテック転職【DXエンジニアガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 小売・流通の知識をECテック・リテールテックで活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            EC市場の拡大とOMO（Online Merges with Offline）戦略の普及により、小売・流通業界のDXが加速しています。POSシステム、在庫管理、サプライチェーンの知識を持つエンジニアは、ECテック・リテールテック業界で引く手あまたの存在です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、小売・流通業界エンジニアがECテック・リテールテック領域に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">小売エンジニアのECテック転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">EC市場の継続的拡大</h3>
              <p className="text-sm text-blue-700">
                日本のBtoC-EC市場規模は25兆円を超え、毎年成長を続けています。EC化率は今後も上昇が見込まれ、ECプラットフォームの開発・運用を担うエンジニアの需要は増加の一途をたどっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OMO戦略の本格化</h3>
              <p className="text-sm text-blue-700">
                オンラインとオフラインの融合が小売業の最重要テーマとなっています。店舗のデジタル化、モバイルオーダー、ダイナミックプライシングなど、実店舗の運営知識を理解した上でシステム設計できるエンジニアの価値が急上昇しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">サプライチェーンDXの需要</h3>
              <p className="text-sm text-blue-700">
                需要予測AI、自動発注システム、倉庫自動化（WMS）など、サプライチェーンのデジタル化が急速に進んでいます。物流・在庫管理の実務を理解するエンジニアは、サプライチェーンテック企業から高い評価を受けています。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">小売・流通経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ECプラットフォームエンジニア", "年収500〜800万円", "ECサイト・モール型プラットフォームの開発"],
                  ["リテールテックエンジニア", "年収500〜850万円", "店舗DX・POS連携・無人店舗システムの開発"],
                  ["データアナリスト", "年収500〜900万円", "購買データ分析・需要予測・レコメンド最適化"],
                  ["OMOエンジニア", "年収550〜850万円", "オンラインとオフラインを統合するシステム設計"],
                ].map(([title, salary, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">
                      {title}
                    </th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200 whitespace-nowrap">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 転職準備 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">小売業界からECテック転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Web開発・データ分析スキルを習得", desc: "Python、SQL、JavaScript（React/Next.js）の基礎を学ぶ。ECサイト構築ならShopifyやWordPressの知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "小売・流通業界の経験を棚卸しする", desc: "POS連携、在庫管理、物流システム、顧客管理（CRM）など携わった案件を整理。売上改善率やコスト削減額など、定量的な成果を準備する。" },
              { step: "3", title: "ECテック・リテールテック業界をリサーチ", desc: "OMO、ライブコマース、ダイナミックプライシング、リテールメディアなどのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（EC・リテールテック企業に強い）、ワークポート（異業種転職支援が充実）に登録して市場価値を確認する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
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
          <h2 className="text-xl font-bold mb-3">小売・流通の知識をECテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            ECテック・リテールテック人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
