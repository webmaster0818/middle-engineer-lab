import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "インフラエンジニアの転職ガイド【AWS/Azure】クラウド時代のキャリア",
  description:
    "インフラエンジニアの転職市場をAWS/Azure/GCPの観点から徹底解説。平均年収550-850万円、クラウド移行需要、SRE転向、おすすめ転職エージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "インフラエンジニアの平均年収は？",
    a: "30代で550万〜850万円が目安です。クラウドアーキテクトは800万〜1,200万円、SREは700万〜1,100万円に達します。AWS/Azure/GCPの認定資格を持つと年収が50万〜100万円上がる傾向があります。",
  },
  {
    q: "オンプレミスからクラウドに転向できますか？",
    a: "十分可能です。ネットワーク、OS、セキュリティの基礎知識はクラウドでもそのまま活きます。AWS Solutions Architect AssociateやAzure Administrator Associateの資格取得から始めるのがおすすめです。",
  },
  {
    q: "SREとインフラエンジニアの違いは？",
    a: "インフラエンジニアはインフラの構築・運用が中心、SREはサービスの信頼性（可用性、レイテンシ、エラー率）をソフトウェアエンジニアリングで改善する役割です。SREはコーディング能力（Go/Python等）も求められます。",
  },
  {
    q: "AWS/Azure/GCP、どれを学ぶべき？",
    a: "日本の求人市場ではAWSが最も多く、次いでAzure、GCPの順です。まずはAWSを学び、余裕があればAzureも押さえるのがおすすめです。GCPはデータエンジニアリング分野で強い需要があります。",
  },
  {
    q: "インフラエンジニアにおすすめの資格は？",
    a: "AWS Solutions Architect Associate/Professional、Azure Administrator Associate、Google Cloud Professional Cloud Architectが転職市場で高く評価されます。LinuC/LPICも基礎力の証明になります。",
  },
  {
    q: "40代のインフラエンジニアの転職は？",
    a: "インフラ領域は経験がものを言う分野のため、40代でも需要は安定しています。特にクラウド移行プロジェクトのリード、セキュリティ設計、大規模インフラの設計経験がある方は高い評価を受けます。",
  },
];

export default function InfrastructureSkillPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "インフラエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インフラエンジニアの転職ガイド【AWS/Azure】クラウド時代のキャリア
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | クラウド移行需要で変わるインフラエンジニアのキャリアを徹底解説
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インフラエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "増加（クラウド移行・DX需要で堅調）"],
                  ["平均年収（30代）", "550万〜850万円"],
                  ["平均年収（クラウドアーキテクト）", "800万〜1,200万円"],
                  ["平均年収（SRE）", "700万〜1,100万円"],
                  ["注目の技術トレンド", "Kubernetes / Terraform / GitOps / Platform Engineering"],
                  ["強い業界", "SaaS / 金融 / 大手IT / コンサル"],
                  ["リモートワーク", "60〜70%の求人でリモート可"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            クラウド移行（リフト&シフト/リアーキテクチャ）の需要は2026年も衰えず、インフラエンジニアの転職市場は好調です。特にAWS/Azure上でのインフラ設計・構築経験、IaC（Terraform/CloudFormation）、コンテナ（Docker/Kubernetes）のスキルを持つエンジニアの需要が高まっています。従来のオンプレミス運用からクラウドネイティブな開発・運用へのシフトが加速しています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インフラエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト</h3>
              <p className="text-sm text-blue-700">
                AWS/Azure/GCP上でのシステムアーキテクチャ設計を担当。マルチクラウド戦略、コスト最適化、セキュリティ設計など、全体最適の視点が求められます。年収800万〜1,200万円。AWS SAP/Azureのアーキテクト資格が強力な武器になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE (Site Reliability Engineer)</h3>
              <p className="text-sm text-blue-700">
                サービスの信頼性をソフトウェアエンジニアリングで改善する役割。SLI/SLO設計、オブザーバビリティ基盤構築、自動化（Terraform/Ansible）、インシデント対応の仕組み化を担います。年収700万〜1,100万円。Go/Pythonのコーディング能力が必須です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Platform Engineer</h3>
              <p className="text-sm text-blue-700">
                開発者の生産性を最大化する内部プラットフォームの構築を担当。Kubernetes基盤、CI/CDパイプライン、開発者ポータルの設計・運用を行います。年収700万〜1,000万円。2026年注目のキャリアパスで、求人が急増しています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウド別の年収・求人比較</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">クラウド</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">求人数傾向</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">強い業界</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AWS", "600万〜1,000万円", "最多", "Web / SaaS / スタートアップ"],
                  ["Azure", "600万〜950万円", "増加中", "金融 / 大手企業 / 官公庁"],
                  ["GCP", "650万〜1,050万円", "増加中", "データ分析 / AI / メガベンチャー"],
                ].map(([cloud, salary, trend, industry], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{cloud}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{trend}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">AWS/クラウドインフラ求人が豊富。SaaS企業のSREポジションや、自社開発企業のインフラ求人が多い。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">大手企業・金融機関のクラウド移行プロジェクト求人が豊富。Azure系の求人に特に強い。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">クラウドアーキテクト・SREリードのハイクラス求人多数。年収800万以上のスカウトが届きやすい。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
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
          <h2 className="text-xl font-bold mb-3">インフラエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            AWS/Azureのスキルが今の市場でどう評価されるか、プロに相談してみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のスキル別ガイドも見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Javaエンジニア", href: "/skill/java/" },
              { name: "Pythonエンジニア", href: "/skill/python/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
              { name: "PM(プロジェクトマネージャー)", href: "/skill/pm/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
