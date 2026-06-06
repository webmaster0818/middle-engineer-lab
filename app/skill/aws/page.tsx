import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "AWSエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "AWSエンジニアの転職市場を2026年最新データで徹底解説。平均年収600-800万円、SaaS・Fintech・メガベンチャーに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "AWSエンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で600万〜800万円が目安です。SRE/DevOpsエンジニアは700万〜1,000万円、クラウドアーキテクトは900万〜1,200万円に達することもあります。",
  },
  {
    q: "AWS認定資格は転職に有利ですか？",
    a: "非常に有利です。特にSolutions Architect Professional、DevOps Engineer Professionalは高く評価されます。資格保有者は年収が50万〜100万円程度高い傾向にあり、書類選考の通過率も上がります。",
  },
  {
    q: "AWSエンジニアの転職で有利なスキルは？",
    a: "Terraform/CloudFormationによるIaC経験、Kubernetes/ECS運用経験、CI/CDパイプライン構築、セキュリティ設計（IAM、VPC設計）が高く評価されます。マルチクラウド経験もプラスになります。",
  },
  {
    q: "オンプレミスからAWSへのキャリアチェンジは可能ですか？",
    a: "可能です。ネットワークやLinuxの基礎知識はクラウドでも活きます。AWS認定資格（SAA、SOA）を取得し、個人でハンズオン経験を積むことで、未経験からでもAWSエンジニアへの転職実績が多数あります。",
  },
  {
    q: "AWSエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT特化・クラウド求人多数）、ビズリーチ（ハイクラスSRE求人）、リクルートエージェントIT（大手企業のクラウド移行案件が豊富）の3社併用がおすすめです。",
  },
  {
    q: "40代のAWSエンジニアでも転職できますか？",
    a: "十分可能です。特にクラウドアーキテクトやSREマネージャーなど上流工程の経験がある40代エンジニアは需要が高いです。大規模インフラの設計・運用経験は年齢を問わず評価されます。",
  },
];

export default function AwsSkillPage() {
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
        title="AWSエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント"
        description="AWSエンジニアの転職市場を2026年最新データで徹底解説。平均年収600-800万円、SaaS・Fintech・メガベンチャーに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。"
        url="/skill/aws/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "AWSエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWSエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | AWS転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWSエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "急増（クラウド移行・SRE需要が継続拡大）"],
                  ["平均年収（30代）", "600万〜800万円"],
                  ["平均年収（40代・リーダー）", "800万〜1,200万円"],
                  ["注目の技術トレンド", "EKS / CDK / サーバーレス / FinOps"],
                  ["強い業界", "SaaS・Fintech・メガベンチャー"],
                  ["リモートワーク", "65〜75%の求人でリモート可"],
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
            AWSはクラウドインフラ市場で国内シェア1位を維持しており、企業のクラウド移行やDX推進に伴いAWSエンジニアの需要が急増しています。2026年現在、SRE（Site Reliability Engineering）やDevOpsの概念が浸透し、インフラをコードで管理できるエンジニアの需要が特に高まっています。AWS認定資格保有者は転職市場で優遇される傾向にあり、FinOps（クラウドコスト最適化）のスキルも新たな付加価値として注目されています。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWSエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                AWS上のシステム全体設計を担うクラウドアーキテクトへの道。年収900万〜1,300万円が目指せます。マルチアカウント戦略、セキュリティ設計、コスト最適化など、上流工程の設計力が求められます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE / プラットフォームエンジニア路線</h3>
              <p className="text-sm text-blue-700">
                サービスの信頼性とスケーラビリティを担保するSRE/プラットフォームエンジニアへのキャリアパス。年収700万〜1,100万円。Kubernetes運用、オブザーバビリティ、SLI/SLO設計など、モダンなインフラ運用スキルが身につきます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ・ガバナンス特化路線</h3>
              <p className="text-sm text-blue-700">
                クラウドセキュリティのスペシャリストとしてのキャリアパス。年収800万〜1,200万円。AWS Security Hub、GuardDuty、IAM設計、コンプライアンス対応など、企業のクラウドガバナンス体制の構築を担います。金融・ヘルスケア業界で特に需要が高いです。
              </p>
            </div>
          </div>
        </section>

        {/* Salary by experience */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別の年収目安</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">経験年数</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">主なポジション</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3〜5年", "500万〜650万円", "クラウドエンジニア"],
                  ["5〜8年", "600万〜800万円", "シニアSRE / DevOpsエンジニア"],
                  ["8〜12年", "750万〜1,050万円", "クラウドアーキテクト / SREリード"],
                  ["12年以上", "900万〜1,300万円", "インフラ部門マネージャー / CTO補佐"],
                ].map(([exp, salary, position], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{exp}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommended agents */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWSエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">クラウド・SRE求人が豊富。IT特化で技術に精通したアドバイザーが在籍。AWS認定資格者向けの高年収案件が充実。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">年収700万以上のハイクラスインフラ求人。クラウドアーキテクト・SREマネージャー向けのスカウトが充実。Fintech・メガベンチャー案件多数。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">大手企業のクラウド移行案件が豊富。求人数20万件以上で幅広い選択肢。エンタープライズ向けAWS案件に強い。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
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
          <h2 className="text-xl font-bold mb-3">AWSエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのAWSスキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
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
              { name: "インフラエンジニア", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニア", href: "/skill/security/" },
              { name: "Goエンジニア", href: "/skill/go/" },
              { name: "AI・機械学習エンジニア", href: "/skill/ai-ml/" },
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
