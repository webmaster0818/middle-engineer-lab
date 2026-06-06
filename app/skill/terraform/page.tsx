import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Terraform/IaCエンジニアの転職ガイド【インフラ自動化】年収・求人・将来性",
  description:
    "Terraform/IaCエンジニアの転職市場を徹底解説。平均年収600〜950万円、インフラ自動化需要の背景、Terraformエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Terraform/IaCエンジニアの平均年収は？",
    a: "30代で600万〜950万円が相場です。Terraform+AWS/GCPの組み合わせスキルを持つエンジニアは700万〜1,000万円、IaCアーキテクトクラスでは1,000万〜1,200万円の求人もあります。",
  },
  {
    q: "Terraformの需要は今後も続く？",
    a: "続きます。クラウドインフラのコード化（IaC）は業界標準になりつつあり、TerraformはマルチクラウドIaCツールのデファクトスタンダードです。OpenTofuの登場で選択肢は広がりましたが、Terraformのスキルは引き続き高い需要があります。",
  },
  {
    q: "Terraform以外のIaCツールも学ぶべき？",
    a: "Terraformが最も汎用的ですが、AWS CDK（AWS専用）、Pulumi（プログラミング言語でIaC）、Ansible（構成管理）なども知っておくと幅が広がります。まずはTerraformを深く学び、次に用途に応じた他ツールを習得するのがおすすめです。",
  },
  {
    q: "Terraformの求人はどんな企業が多い？",
    a: "クラウドネイティブ企業、SaaS企業、SIer（クラウド移行部門）、金融系IT企業に多いです。DevOps/SREチームの必須スキルとしてTerraformが挙げられるケースが増えています。",
  },
  {
    q: "インフラ未経験でもTerraformから始められる？",
    a: "基本的にはクラウドインフラ（AWS/GCP/Azure）の基礎知識が前提です。まずAWSの基本サービス（VPC、EC2、S3等）を理解した上でTerraformに進むのが効率的です。AWSの実務経験1年程度あれば、Terraformの習得は2〜3ヶ月が目安です。",
  },
  {
    q: "Terraformエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（インフラ・DevOps案件に強い）、ビズリーチ（ハイクラスSRE案件）、Geekly（クラウドネイティブ企業の求人）の3社がおすすめです。HashiCorp認定資格の取得も有効です。",
  },
];

export default function TerraformSkillPage() {
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
        title="Terraform/IaCエンジニアの転職ガイド【インフラ自動化】年収・求人・将来性"
        description="Terraform/IaCエンジニアの転職市場を徹底解説。平均年収600〜950万円、インフラ自動化需要の背景、Terraformエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/terraform/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Terraform/IaCエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Terraform/IaCエンジニアの転職ガイド【インフラ自動化】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Terraform/IaCエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Terraformはインフラをコードで管理（IaC）するためのツールとして、AWS、GCP、Azureなどマルチクラウド環境で広く使われています。DevOps/SREの実践に不可欠なスキルとして、転職市場での評価が年々上昇しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Terraform/IaCエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Terraformエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">600〜950万</p>
                <p className="text-sm text-slate-600 mt-1">30代Terraformエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+40%</p>
                <p className="text-sm text-slate-600 mt-1">Terraform求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.8倍</p>
                <p className="text-sm text-slate-600 mt-1">IaC求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terraformが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Terraform/IaCの需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドインフラのコード管理が標準化</h3>
              <p className="text-sm text-blue-700">
                手動でのインフラ構築はミスやセキュリティリスクの原因になるため、IaCによるインフラ管理が企業の標準プラクティスとなっています。TerraformはAWS、GCP、Azure全てに対応し、マルチクラウド戦略に最適です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">DevOps/SREの必須スキル化</h3>
              <p className="text-sm text-blue-700">
                SRE/DevOpsエンジニアの求人でTerraformが必須スキルとして挙げられるケースが急増しています。CI/CDパイプラインにTerraformを組み込み、インフラの変更も自動化する運用が一般的になっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ・コンプライアンス要件の高まり</h3>
              <p className="text-sm text-blue-700">
                Sentinel/OPAによるポリシー適用、tfsecによるセキュリティスキャンなど、TerraformのIaCコードにセキュリティチェックを組み込むことで、ガバナンスを自動化する需要が高まっています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Terraformエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "クラウドインフラエンジニア", range: "600万〜900万円", note: "Terraform+AWS/GCPでのインフラ構築・運用" },
              { role: "SRE/プラットフォームエンジニア", range: "750万〜1,100万円", note: "Terraform+Kubernetes+CI/CDの統合基盤構築" },
              { role: "IaCアーキテクト/コンサルタント", range: "900万〜1,300万円", note: "IaC戦略策定、マルチクラウド設計" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Terraformエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "HashiCorp Terraform認定資格を取得する", desc: "Terraform Associate認定資格は、Terraformの基礎スキルを証明する最も効果的な方法です。書類選考でのアドバンテージになるだけでなく、体系的な知識の整理にも役立ちます。" },
              { num: "2", title: "TerraformモジュールをGitHubに公開する", desc: "再利用可能なTerraformモジュールを設計・公開することで、IaCの設計力をアピールできます。Terraform Registryにモジュールを公開するのも効果的です。" },
              { num: "3", title: "CI/CDパイプラインとの統合経験を持つ", desc: "GitHub Actions/GitLab CI+Terraform Cloud/Spaceliftによる自動化、Pull Requestベースのインフラ変更フローなど、実務でのTerraform運用経験が差別化のポイントです。" },
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
          <h2 className="text-xl font-bold mb-3">Terraform/IaCのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            インフラ自動化の求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "AWS転職ガイド", href: "/skill/aws/" },
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
