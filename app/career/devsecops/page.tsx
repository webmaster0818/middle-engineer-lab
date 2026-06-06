import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "DevSecOpsエンジニア転職ガイド【年収・スキル・将来性】",
  description:
    "DevSecOpsエンジニアへの転職方法を解説。セキュリティ×DevOpsのスキル、年収相場、おすすめ資格、転職成功事例を紹介します。",
};

const faqs = [
  {
    q: "DevSecOpsとDevOpsの違いは？",
    a: "DevOpsに「Security」を統合したのがDevSecOpsです。開発・運用のパイプラインにセキュリティチェックを組み込み、セキュリティを開発プロセスの一部として自動化します。Shift Left（セキュリティの前倒し）が核心の概念です。",
  },
  {
    q: "DevSecOpsエンジニアの年収は？",
    a: "600〜1,000万円が相場です。セキュリティ人材は慢性的に不足しているため、DevOps+セキュリティのスキルを持つ人材の市場価値は非常に高いです。",
  },
  {
    q: "DevSecOpsに必要な資格は？",
    a: "AWS Security Specialty、CompTIA Security+、CISSP（上級者向け）が有力です。CKS（Certified Kubernetes Security Specialist）もコンテナセキュリティの証明として評価されます。",
  },
  {
    q: "DevOpsエンジニアからDevSecOpsへの転身は容易？",
    a: "DevOpsの基盤があるため、セキュリティ知識を追加するだけで転身可能です。SAST/DAST、コンテナスキャン、シークレット管理の知識を3〜6ヶ月で習得できます。",
  },
  {
    q: "DevSecOpsの将来性は？",
    a: "セキュリティインシデントの増加とクラウドネイティブ化の進展により、需要は今後も拡大が見込まれます。特にサプライチェーンセキュリティの重要性が高まっています。",
  },
  {
    q: "DevSecOps導入企業はどこに多い？",
    a: "金融、医療、EC、SaaS企業に多いです。コンプライアンス要件が厳しい業界ほどDevSecOpsの需要が高く、専門チームを設置するケースが増えています。",
  },
];

export default function DevsecopsPage() {
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
        title="DevSecOpsエンジニア転職ガイド【年収・スキル・将来性】"
        description="DevSecOpsエンジニアへの転職方法を解説。セキュリティ×DevOpsのスキル、年収相場、おすすめ資格、転職成功事例を紹介します。"
        url="/career/devsecops/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "DevSecOps転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          DevSecOpsエンジニア転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | セキュリティ×DevOpsの専門キャリア
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            DevSecOpsは、開発・セキュリティ・運用を統合したアプローチです。サイバー攻撃の増加とクラウドネイティブ化に伴い、DevSecOpsエンジニアの需要は急増しています。セキュリティ人材の不足もあり、高い年収が期待できるキャリアパスです。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevSecOps関連ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">主な技術</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "DevSecOpsエンジニア", salary: "600〜1,000万円", diff: "★★★", tech: "CI/CD + SAST/DAST + IaC" },
                  { pos: "セキュリティエンジニア", salary: "550〜900万円", diff: "★★★", tech: "脆弱性診断 + 監査 + 対策" },
                  { pos: "クラウドセキュリティ", salary: "650〜1,100万円", diff: "★★★", tech: "AWS Security + IAM + 暗号化" },
                  { pos: "DevOpsエンジニア", salary: "500〜800万円", diff: "★★☆", tech: "CI/CD + IaC + コンテナ" },
                  { pos: "CSIRT", salary: "600〜950万円", diff: "★★★", tech: "インシデント対応 + フォレンジック" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevSecOpsに必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "CI/CDセキュリティ", desc: "GitHub Actions/GitLab CIにセキュリティスキャンを統合。SAST（Snyk、SonarQube）、DAST（OWASP ZAP）の導入経験。" },
              { num: "2", title: "コンテナセキュリティ", desc: "Dockerイメージスキャン（Trivy）、Kubernetesセキュリティポリシー（OPA/Gatekeeper）、ランタイムセキュリティ（Falco）。" },
              { num: "3", title: "IaCセキュリティ", desc: "Terraform/CloudFormationのセキュリティスキャン（tfsec、Checkov）、インフラ構成のコンプライアンスチェック。" },
              { num: "4", title: "シークレット管理", desc: "Vault、AWS Secrets Manager、SOPS等でのシークレットライフサイクル管理。Git履歴からのシークレット漏洩検知。" },
              { num: "5", title: "脅威モデリング", desc: "STRIDEフレームワークによるシステムの脅威分析。アーキテクチャレベルでのセキュリティ設計。" },
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
                <span className="text-slate-600">31歳 DevOpsエンジニア3年 / AWS + Terraform + Kubernetes</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">580万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">追加学習</span>
                <span className="text-slate-600">AWS Security Specialty + SAST/DAST導入経験（4ヶ月）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">FinTech企業 DevSecOpsエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">780万円（+200万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "セキュリティエンジニア求人が充実。技術面談の対策サポートも手厚い。" },
              { name: "マイナビITエージェント", point: "大手企業のセキュリティ部門求人が豊富。" },
              { name: "ビズリーチ", point: "ハイクラスのセキュリティポジションが多い。年収800万円以上の求人が充実。" },
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
          <h2 className="text-xl font-bold mb-3">DevSecOps転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            セキュリティ×DevOpsのキャリアをIT特化型エージェントがサポートします。
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
              { name: "セキュリティスキルガイド", href: "/skill/security/" },
              { name: "CRE転職ガイド", href: "/career/cre/" },
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
