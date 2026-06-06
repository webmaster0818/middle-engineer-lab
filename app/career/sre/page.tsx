import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "SRE(サイト信頼性エンジニア)転職ガイド【年収・スキル・求人】",
  description:
    "SRE（Site Reliability Engineer）への転職方法を解説。必要スキル、年収相場、インフラエンジニアとの違い、おすすめ求人を紹介します。",
};

const faqs = [
  {
    q: "SREとインフラエンジニアの違いは？",
    a: "インフラエンジニアはサーバー・ネットワークの構築運用が中心ですが、SREはソフトウェアエンジニアリングのアプローチでシステムの信頼性を向上させます。SLI/SLO の設定、トイルの削減、自動化が主要業務です。",
  },
  {
    q: "SREの年収相場は？",
    a: "550〜900万円が相場です。メガベンチャーや外資系では800〜1,500万円のレンジも。クラウドとコーディングの両方ができるSREは市場価値が非常に高いです。",
  },
  {
    q: "SREに必要な資格は？",
    a: "AWS SAP（ソリューションアーキテクトプロフェッショナル）、GCP Professional Cloud Architect、CKA（Certified Kubernetes Administrator）が有力です。資格は必須ではありませんがスキル証明に有効です。",
  },
  {
    q: "プログラミングスキルはどれくらい必要？",
    a: "Go、Python、Bashでの自動化スクリプト作成が最低限必要です。加えて、TerraformなどのIaCツール、CI/CDパイプラインの構築経験が求められます。",
  },
  {
    q: "SRE未経験からの転職は可能？",
    a: "インフラエンジニアやバックエンドエンジニアからの転身が一般的です。完全未経験は難しいですが、インフラ運用+プログラミングの基礎があれば可能性はあります。",
  },
  {
    q: "SREのオンコール対応は大変？",
    a: "オンコール対応は多くのSREチームで必要ですが、ローテーション制で月に数日程度が一般的です。SLOベースの運用で不要なアラートを減らす取り組みが進んでいます。",
  },
];

export default function SrePage() {
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
        title="SRE(サイト信頼性エンジニア)転職ガイド【年収・スキル・求人】"
        description="SRE（Site Reliability Engineer）への転職方法を解説。必要スキル、年収相場、インフラエンジニアとの違い、おすすめ求人を紹介します。"
        url="/career/sre/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SRE転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SRE(サイト信頼性エンジニア)転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | SREへの転職を成功させる完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SRE（Site Reliability Engineering）は、Googleが提唱したシステム信頼性を高めるための専門職です。インフラとソフトウェア開発の両方のスキルを持つSREは市場で非常に高い需要があり、年収も高水準です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SRE関連ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">コーディング比率</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "SRE（自社サービス）", salary: "600〜900万円", diff: "★★★", code: "50〜70%" },
                  { pos: "SRE（外資系）", salary: "900〜1,500万円", diff: "★★★", code: "60〜80%" },
                  { pos: "プラットフォームEng", salary: "600〜850万円", diff: "★★★", code: "60〜80%" },
                  { pos: "DevOpsエンジニア", salary: "500〜750万円", diff: "★★☆", code: "40〜60%" },
                  { pos: "インフラエンジニア", salary: "450〜700万円", diff: "★★☆", code: "20〜40%" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SRE転職に必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "クラウド（AWS/GCP）", desc: "主要サービスの設計・構築・運用経験。マルチAZ構成、オートスケーリング、障害対応の実践力。" },
              { num: "2", title: "コンテナ・オーケストレーション", desc: "Docker、Kubernetes（EKS/GKE）の運用経験。Helmチャートの作成やクラスタ管理ができるレベル。" },
              { num: "3", title: "IaC（Infrastructure as Code）", desc: "Terraform、Pulumi等でインフラをコード管理。GitOpsワークフローの実践経験があると強い。" },
              { num: "4", title: "プログラミング（Go/Python）", desc: "自動化ツール開発、カスタムコントローラー実装、運用スクリプト作成。SREはソフトウェアエンジニアです。" },
              { num: "5", title: "監視・オブザーバビリティ", desc: "Datadog、Prometheus+Grafana、OpenTelemetryでのメトリクス・ログ・トレースの統合監視。SLI/SLOの設計と運用。" },
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
                <span className="text-slate-600">30歳 インフラエンジニア4年 / AWS + Terraform</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">520万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">追加学習</span>
                <span className="text-slate-600">Go言語 + Kubernetes（4ヶ月）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">FinTech企業 SREチーム</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">700万円（+180万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "SRE求人が豊富。技術に詳しいアドバイザーが在籍。" },
              { name: "Findy", point: "技術力でマッチング。SRE/プラットフォームエンジニア向け求人が充実。" },
              { name: "転職ドラフト", point: "年収付きで指名が届く。SREの市場価値を確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">SRE転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            SREポジションに強いIT特化型エージェントが最適な求人を提案します。
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
              { name: "CRE転職ガイド", href: "/career/cre/" },
              { name: "DevSecOps転職ガイド", href: "/career/devsecops/" },
              { name: "AWSスキルガイド", href: "/skill/aws/" },
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
