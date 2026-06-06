import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ヘルプデスク→インフラエンジニアへの転職ガイド【2026年版】",
  description:
    "ヘルプデスク・ITサポートからインフラエンジニアへ転職するための資格、スキル、年収変化、具体的なロードマップを解説します。",
};

const faqs = [
  {
    q: "ヘルプデスクからインフラエンジニアへの転職は現実的？",
    a: "非常に現実的です。ヘルプデスクで培ったネットワークやOS知識はインフラエンジニアの基礎そのものです。資格（CCNA、AWS SAA等）を取得すれば、未経験扱いにならないケースも多いです。",
  },
  {
    q: "インフラエンジニアに必要な資格は？",
    a: "まずはLPIC Level 1またはLinuC Level 1でLinuxの基礎を固めましょう。次にAWS SAA（ソリューションアーキテクトアソシエイト）を取得するとクラウド系の求人に応募しやすくなります。",
  },
  {
    q: "年収はどれくらい上がる？",
    a: "ヘルプデスクの平均年収300〜400万円に対し、インフラエンジニアは450〜650万円が相場です。クラウドエンジニアやSREまで成長すれば700万円以上も可能です。",
  },
  {
    q: "クラウドとオンプレ、どちらから学ぶべき？",
    a: "2026年現在はクラウド（AWS/GCP/Azure）を優先すべきです。求人数もクラウド系が圧倒的に多く、年収レンジも高いです。ただしオンプレの基礎知識も持っておくとクラウド理解が深まります。",
  },
  {
    q: "プログラミングスキルは必要？",
    a: "必須ではありませんが、Bash/Python程度のスクリプティング能力があると大幅に有利です。IaC（Terraform、Ansible）を使うためにもコードを読み書きできる力は重要です。",
  },
  {
    q: "転職活動のコツは？",
    a: "ヘルプデスク経験をインフラ視点でアピールしましょう。「ネットワーク障害対応の経験」「Active Directory管理」「監視ツール運用」など、インフラ寄りの業務経験を具体的に言語化することがポイントです。",
  },
];

export default function SupportToInfraPage() {
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
        title="ヘルプデスク→インフラエンジニアへの転職ガイド【2026年版】"
        description="ヘルプデスク・ITサポートからインフラエンジニアへ転職するための資格、スキル、年収変化、具体的なロードマップを解説します。"
        url="/career/support-to-infra/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "ヘルプデスク→インフラエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ヘルプデスク→インフラエンジニアへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | ITサポートからインフラへのキャリアアップ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            ヘルプデスクやITサポートの経験は、インフラエンジニアへの転職において強力な武器になります。日常的にネットワーク、サーバー、OSに触れている経験は、インフラエンジニアの基礎スキルそのものです。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職先ポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">おすすめ資格</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "サーバーエンジニア", salary: "400〜600万円", diff: "★★☆", cert: "LPIC / LinuC" },
                  { pos: "ネットワークエンジニア", salary: "420〜620万円", diff: "★★☆", cert: "CCNA / CCNP" },
                  { pos: "クラウドエンジニア", salary: "500〜750万円", diff: "★★★", cert: "AWS SAA / GCP ACE" },
                  { pos: "SREエンジニア", salary: "550〜850万円", diff: "★★★", cert: "AWS SAP + 開発経験" },
                  { pos: "セキュリティエンジニア", salary: "500〜800万円", diff: "★★★", cert: "CompTIA Security+" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インフラ転職のスキルロードマップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Linux基礎（1〜2ヶ月）", desc: "コマンドライン操作、ファイルシステム、プロセス管理、パーミッション設定をマスターしましょう。LPIC Level 1の取得を目標に。" },
              { num: "2", title: "ネットワーク基礎（1ヶ月）", desc: "TCP/IP、DNS、HTTP、ファイアウォール、VPNの仕組みを理解しましょう。ヘルプデスク経験があれば基礎は固まっているはずです。" },
              { num: "3", title: "クラウド（AWS/GCP）（2〜3ヶ月）", desc: "EC2、VPC、S3、RDS、IAM等の主要サービスを実際に構築してみましょう。AWS SAA資格の取得が転職に直結します。" },
              { num: "4", title: "IaC・自動化（1〜2ヶ月）", desc: "Terraform、Ansibleでインフラをコード化する技術を学びましょう。手作業からの脱却がインフラエンジニアの価値を高めます。" },
              { num: "5", title: "監視・運用（1ヶ月）", desc: "Datadog、Prometheus、Grafanaなどの監視ツールを使えるようになりましょう。ヘルプデスクの障害対応経験が活きる領域です。" },
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
                <span className="text-slate-600">27歳 ヘルプデスク3年 / Windows Server + AD管理</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">350万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">取得資格</span>
                <span className="text-slate-600">LPIC Level 1 + AWS SAA（3ヶ月で取得）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">MSP企業 クラウドエンジニア</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">480万円（+130万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "マイナビITエージェント", point: "インフラ系求人が豊富。資格取得後のキャリアチェンジサポートに強い。" },
              { name: "レバテックキャリア", point: "クラウドエンジニア求人が充実。技術アドバイザーの質が高い。" },
              { name: "doda ITエージェント", point: "大手SIerからMSP企業まで幅広くカバー。求人数の多さが魅力。" },
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
          <h2 className="text-xl font-bold mb-3">インフラエンジニアへの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ヘルプデスク経験を活かせるインフラポジションをプロが提案します。
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
              { name: "インフラスキルガイド", href: "/skill/infrastructure/" },
              { name: "AWSスキルガイド", href: "/skill/aws/" },
              { name: "SRE転職ガイド", href: "/career/sre/" },
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
