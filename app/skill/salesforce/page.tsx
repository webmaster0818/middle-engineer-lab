import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Salesforceエンジニアの転職ガイド【CRM/SFA】年収・求人・将来性",
  description:
    "Salesforceエンジニアの転職市場を徹底解説。平均年収550〜900万円、CRM/SFA需要の背景、Salesforceエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Salesforceエンジニアの平均年収は？",
    a: "30代で550万〜900万円が相場です。Salesforce認定資格を複数保有するエンジニアは700万〜1,000万円、Salesforceアーキテクトクラスでは1,000万〜1,300万円の求人もあります。需給バランスが良く、年収水準が高いのが特徴です。",
  },
  {
    q: "Salesforceの需要は今後も続く？",
    a: "続きます。SalesforceはCRM市場で世界シェアNo.1を維持しており、日本でも大企業から中小企業まで導入が拡大しています。AI機能（Einstein）の強化やSlack連携により、エコシステムが拡大し続けています。",
  },
  {
    q: "Salesforce未経験でも転職できる？",
    a: "転職可能です。SalesforceはTrailheadという無料学習プラットフォームを提供しており、未経験からでも体系的に学べます。Java/Apex等の開発経験があれば、Salesforce開発者として転職しやすいです。",
  },
  {
    q: "Salesforceの求人はどんな企業が多い？",
    a: "Salesforceパートナー企業（コンサルティング会社）、SaaS企業、金融機関、大手事業会社のDX部門に多いです。導入コンサルから開発・運用保守まで幅広いポジションがあります。",
  },
  {
    q: "Salesforce認定資格は転職に有利？",
    a: "非常に有利です。Salesforce認定アドミニストレーター、Platform Developer I/II、Salesforce認定アーキテクトなどの資格は、スキルの客観的証明として転職市場で高く評価されます。",
  },
  {
    q: "Salesforceエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT専門エージェント）、ビズリーチ（ハイクラスSalesforce案件）、マイナビIT AGENT（パートナー企業の求人が豊富）の3社がおすすめです。Salesforce専門の転職サイトもチェックしましょう。",
  },
];

export default function SalesforceSkillPage() {
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
        title="Salesforceエンジニアの転職ガイド【CRM/SFA】年収・求人・将来性"
        description="Salesforceエンジニアの転職市場を徹底解説。平均年収550〜900万円、CRM/SFA需要の背景、Salesforceエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/salesforce/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Salesforceエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Salesforceエンジニアの転職ガイド【CRM/SFA】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Salesforceエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SalesforceはCRM（顧客関係管理）市場で世界シェアNo.1のプラットフォームです。日本でもDX推進の一環としてSalesforce導入企業が急増しており、開発・カスタマイズ・運用ができるエンジニアの需要が供給を大きく上回っています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Salesforceエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Salesforceエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">550〜900万</p>
                <p className="text-sm text-slate-600 mt-1">30代Salesforceエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+30%</p>
                <p className="text-sm text-slate-600 mt-1">Salesforce求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.5倍</p>
                <p className="text-sm text-slate-600 mt-1">Salesforce求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Salesforceが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Salesforceエンジニアの需要が高い理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">CRM/SFA市場の継続的拡大</h3>
              <p className="text-sm text-blue-700">
                企業のDX推進により、顧客管理のデジタル化が急速に進んでいます。Salesforceは中小企業から大企業まで幅広く導入されており、導入・カスタマイズ・連携開発の需要が途切れません。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エコシステムの拡大</h3>
              <p className="text-sm text-blue-700">
                Sales Cloud、Service Cloud、Marketing Cloud、Commerce Cloud、Slack連携など、Salesforceの製品群は年々拡大しています。AI機能（Einstein）の進化もあり、専門エンジニアの活躍領域が広がっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">圧倒的な人材不足</h3>
              <p className="text-sm text-blue-700">
                Salesforceの導入企業数に対してエンジニアの供給が追いついておらず、求人倍率は他のIT職種と比較しても高い水準です。未経験からの参入もしやすく、キャリアチェンジの選択肢としても注目されています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Salesforceエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Salesforce開発者", range: "550万〜800万円", note: "Apex/Visualforce/LWCでのカスタマイズ開発" },
              { role: "Salesforceコンサルタント", range: "700万〜1,000万円", note: "導入設計、要件定義、プロジェクト管理" },
              { role: "Salesforceアーキテクト", range: "900万〜1,300万円", note: "全体設計、マルチクラウド連携、技術リード" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Salesforceエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Salesforce認定資格を取得する", desc: "認定アドミニストレーター、Platform Developer I/IIは転職で最も評価される資格です。Trailheadで無料で学習でき、資格取得により年収100万円以上のアップも期待できます。" },
              { num: "2", title: "Trailheadでスキルを証明する", desc: "Salesforceの公式学習プラットフォーム「Trailhead」でバッジやスーパーバッジを取得し、Trailblazerプロフィールを充実させましょう。採用担当者がプロフィールを確認するケースが多いです。" },
              { num: "3", title: "業務知識を掛け合わせる", desc: "営業プロセス、カスタマーサポート、マーケティングなどの業務知識を掛け合わせることで、ビジネス要件を理解した上で最適な設計ができるエンジニアとして高い評価を得られます。" },
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
          <h2 className="text-xl font-bold mb-3">Salesforceのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Salesforce求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "SAPエンジニア転職ガイド", href: "/skill/sap/" },
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
