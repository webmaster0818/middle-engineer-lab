import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "カスタマーリライアビリティエンジニア(CRE)転職ガイド【2026年版】",
  description:
    "CRE（カスタマーリライアビリティエンジニア）への転職方法を解説。仕事内容、年収相場、必要スキル、SREとの違い、求人の見つけ方を紹介します。",
};

const faqs = [
  {
    q: "CREとSREの違いは？",
    a: "SREはシステムの信頼性に焦点を当てますが、CREは顧客体験の信頼性に焦点を当てます。CREは顧客の技術的課題の解決、プロダクト改善への橋渡し、技術サポートの高度化が主な役割です。",
  },
  {
    q: "CREに必要な技術スキルは？",
    a: "プログラミング（Python/Go等）、クラウド（AWS/GCP）、データ分析、API設計の知識が必要です。加えて、顧客対応力とプロダクト理解力が求められます。",
  },
  {
    q: "CREの年収相場は？",
    a: "500〜800万円が相場です。SaaS企業や外資系ではさらに高く、800〜1,200万円のケースもあります。SRE経験者は上限寄りのオファーを受けやすいです。",
  },
  {
    q: "CREポジションがある企業は？",
    a: "Google（CREの発祥）、メルカリ、SmartHR、LayerXなどのテック企業に多いです。SaaS企業を中心にCREポジションの設置が増えています。",
  },
  {
    q: "カスタマーサポートとの違いは？",
    a: "カスタマーサポートは既知の問題対応が中心ですが、CREは技術的な課題解決に加え、プロダクトの信頼性向上の仕組みづくりまで担います。エンジニアリングスキルが必須です。",
  },
  {
    q: "CREへの転職に有利な経歴は？",
    a: "SRE、テクニカルサポートエンジニア、プリセールスエンジニア、バックエンドエンジニアの経験が有利です。顧客対応経験と技術力の両方を持つ人材が求められます。",
  },
];

export default function CrePage() {
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
        title="カスタマーリライアビリティエンジニア(CRE)転職ガイド【2026年版】"
        description="CRE（カスタマーリライアビリティエンジニア）への転職方法を解説。仕事内容、年収相場、必要スキル、SREとの違い、求人の見つけ方を紹介します。"
        url="/career/cre/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "CRE転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カスタマーリライアビリティエンジニア(CRE)転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | CREという新しいキャリアパスを徹底解説
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            CRE（Customer Reliability Engineering）はGoogleが提唱した比較的新しい職種で、顧客の信頼性を技術で向上させる役割です。SaaS企業を中心に求人が増加しており、エンジニアの新しいキャリアパスとして注目されています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CRE関連ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">顧客接点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "CRE", salary: "500〜800万円", diff: "★★☆", cust: "非常に高い" },
                  { pos: "SRE", salary: "550〜850万円", diff: "★★★", cust: "低い" },
                  { pos: "テクニカルサポートEng", salary: "400〜600万円", diff: "★★☆", cust: "非常に高い" },
                  { pos: "プリセールスEng", salary: "600〜900万円", diff: "★★☆", cust: "高い" },
                  { pos: "ソリューションアーキテクト", salary: "700〜1,100万円", diff: "★★★", cust: "高い" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.cust}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CREに必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "プログラミング力", desc: "Python/Go/TypeScriptでの自動化ツール開発、API連携、データ分析スクリプトの作成能力が必要です。" },
              { num: "2", title: "顧客コミュニケーション力", desc: "技術的な課題を非エンジニアにも分かりやすく説明し、解決策を提案する力。" },
              { num: "3", title: "プロダクト理解力", desc: "自社プロダクトのアーキテクチャ、機能、制約を深く理解し、顧客の課題に最適な解決策を提示する力。" },
              { num: "4", title: "データ分析力", desc: "顧客の利用データを分析し、プロアクティブな改善提案ができる能力。SQL、BIツールのスキルが必要。" },
              { num: "5", title: "SRE基礎知識", desc: "SLI/SLO、監視、障害対応の基礎知識。顧客向けのSLAと社内SLOの橋渡しができる力。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職成功事例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">29歳 テクニカルサポート3年 + バックエンド1年</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">420万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">SaaS企業 CREエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">580万円（+160万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "SaaS企業のCRE求人が充実。新しい職種への転職サポートに強い。" },
              { name: "Findy", point: "技術力でマッチング。CRE/SRE系のポジションが見つかりやすい。" },
              { name: "Green", point: "SaaS・テック企業の求人が豊富。カジュアル面談で企業文化を確認できる。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600">{agent.point}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">CRE転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            CREポジションに強いIT特化型エージェントが最適な求人を提案します。
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
              { name: "SRE転職ガイド", href: "/career/sre/" },
              { name: "DevSecOps転職ガイド", href: "/career/devsecops/" },
              { name: "技術力を伸ばせる企業の選び方", href: "/purpose/growth/" },
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
