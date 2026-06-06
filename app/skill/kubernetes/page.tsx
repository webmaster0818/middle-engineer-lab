import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Kubernetes/コンテナエンジニアの転職ガイド【DevOps】年収・求人・将来性",
  description:
    "Kubernetes/コンテナエンジニアの転職市場を徹底解説。平均年収600〜1000万円、DevOps需要の背景、Kubernetesエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Kubernetes/コンテナエンジニアの平均年収は？",
    a: "30代で600万〜1,000万円が相場です。CKA/CKADなどの認定資格を持つエンジニアは700万〜1,000万円、SRE/プラットフォームエンジニアとしてKubernetesを運用するポジションでは800万〜1,200万円も狙えます。",
  },
  {
    q: "Kubernetesの需要は今後も続く？",
    a: "続きます。マイクロサービスアーキテクチャの普及、クラウドネイティブ化の推進により、Kubernetesはコンテナオーケストレーションのデファクトスタンダードとして確固たる地位を築いています。EKS、GKE、AKSの導入企業も増加中です。",
  },
  {
    q: "Kubernetes未経験からどう学ぶ？",
    a: "まずDockerの基礎を習得し、次にMinikubeやkindでローカルKubernetesクラスターを構築して学びましょう。CKA（Certified Kubernetes Administrator）の学習コースは体系的な理解に最適です。",
  },
  {
    q: "Kubernetesの求人はどんな企業が多い？",
    a: "クラウドベンダー（AWS、GCP、Azure関連）、メガベンチャー、SaaS企業、金融系IT企業に多いです。SRE/プラットフォームエンジニアの募集でKubernetes経験が必須要件になるケースが増えています。",
  },
  {
    q: "CKA/CKADの資格は転職に有利？",
    a: "非常に有利です。CKA（Certified Kubernetes Administrator）は企業がKubernetesスキルを判断する際の最も信頼される指標です。CKADやCKSも取得すると、専門性の高さを証明できます。",
  },
  {
    q: "Kubernetesエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（インフラ・DevOps案件に強い）、ビズリーチ（ハイクラスSRE案件）、Geekly（クラウドネイティブ企業の求人）の3社がおすすめです。Kubernetesのスキルレベルに応じた求人を紹介してくれます。",
  },
];

export default function KubernetesSkillPage() {
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
        title="Kubernetes/コンテナエンジニアの転職ガイド【DevOps】年収・求人・将来性"
        description="Kubernetes/コンテナエンジニアの転職市場を徹底解説。平均年収600〜1000万円、DevOps需要の背景、Kubernetesエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/kubernetes/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Kubernetes/コンテナエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Kubernetes/コンテナエンジニアの転職ガイド【DevOps】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Kubernetes/コンテナエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Kubernetesはコンテナオーケストレーションのデファクトスタンダードとして、クラウドネイティブなシステム運用に不可欠な技術です。マイクロサービスアーキテクチャの普及とともに、Kubernetesエンジニアの需要は急速に拡大しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Kubernetes/コンテナエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kubernetesエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">600〜1,000万</p>
                <p className="text-sm text-slate-600 mt-1">30代Kubernetesエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+50%</p>
                <p className="text-sm text-slate-600 mt-1">Kubernetes求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4.0倍</p>
                <p className="text-sm text-slate-600 mt-1">Kubernetes求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kubernetesが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kubernetesの需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マイクロサービスアーキテクチャの標準化</h3>
              <p className="text-sm text-blue-700">
                モノリシックなシステムからマイクロサービスへの移行が企業で加速しており、数十〜数百のコンテナを効率的に管理できるKubernetesは必須の技術となっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネージドKubernetesの普及</h3>
              <p className="text-sm text-blue-700">
                AWS EKS、Google GKE、Azure AKSなどマネージドKubernetesサービスの普及により、導入のハードルが下がっています。一方で、運用・最適化・トラブルシューティングのできるエンジニアが不足しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">GitOps・Platform Engineeringの台頭</h3>
              <p className="text-sm text-blue-700">
                ArgoCD、Flux CDを使ったGitOps運用や、Internal Developer Platformの構築など、Kubernetesを基盤としたPlatform Engineeringが注目されています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kubernetesエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "SRE（Site Reliability Engineer）", range: "700万〜1,100万円", note: "Kubernetes基盤の信頼性担保、オブザーバビリティ" },
              { role: "プラットフォームエンジニア", range: "750万〜1,200万円", note: "Internal Developer Platform構築、GitOps運用" },
              { role: "DevOpsコンサルタント", range: "800万〜1,300万円", note: "Kubernetes導入支援、アーキテクチャ設計" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kubernetesエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "CKA/CKAD資格を取得する", desc: "CKA（Certified Kubernetes Administrator）は転職市場で最も評価されるKubernetes資格です。実技試験のため実践スキルの証明になり、書類選考で大きなアドバンテージになります。" },
              { num: "2", title: "Helm Chart・ArgoCD・Prometheusのスキルを持つ", desc: "Kubernetes本体だけでなく、Helm Chartによるパッケージ管理、ArgoCDによるGitOps、Prometheus+Grafanaによる監視のスキルセットが求められます。" },
              { num: "3", title: "クラウドプロバイダーの知識を掛け合わせる", desc: "AWS EKS+Terraform、GKE+Istio、Azure AKS+Azure DevOpsなど、特定のクラウドプロバイダーとの組み合わせ経験があると、より具体的なポジションに応募できます。" },
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
          <h2 className="text-xl font-bold mb-3">Kubernetesのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            DevOps/SRE求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
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
