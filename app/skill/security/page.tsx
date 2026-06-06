import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "セキュリティエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント",
  description:
    "セキュリティエンジニアの転職市場を2026年最新データで徹底解説。平均年収550-800万円、金融・通信・官公庁・SaaSに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "セキュリティエンジニアの平均年収は？",
    a: "経験年数や役職によりますが、30代で550万〜800万円が目安です。SOCアナリストは500万〜700万円、ペネトレーションテスターは650万〜900万円、CISOクラスは1,000万〜1,500万円に達することもあります。",
  },
  {
    q: "セキュリティエンジニアの将来性は？",
    a: "サイバー攻撃の高度化・増加に伴い、セキュリティ人材の不足は深刻化しています。経済産業省の試算では2026年時点で約19万人の人材不足が見込まれており、需要は今後も拡大し続ける見通しです。",
  },
  {
    q: "セキュリティエンジニアの転職で有利な資格は？",
    a: "CISSP、CEH（Certified Ethical Hacker）、情報処理安全確保支援士（登録セキスペ）が高く評価されます。AWS Security SpecialtyやGoogle Cloud Security Engineer認定もクラウドセキュリティ分野で有利です。",
  },
  {
    q: "インフラエンジニアからセキュリティへの転向は可能ですか？",
    a: "非常に相性が良い転向です。ネットワーク、サーバー、クラウドの知識はセキュリティの基盤になります。情報処理安全確保支援士やCISSPの取得と、CTFへの参加やセキュリティツールのハンズオン経験を積むことで転向が可能です。",
  },
  {
    q: "セキュリティエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（IT特化・セキュリティ求人多数）、リクルートエージェントIT（金融・通信系のセキュリティ求人が豊富）、ビズリーチ（CISOクラスのハイクラス求人）の3社併用がおすすめです。",
  },
  {
    q: "40代のセキュリティエンジニアでも転職できますか？",
    a: "非常に有利です。セキュリティは経験と知見が重視される分野であり、40代のベテランエンジニアの需要は高いです。特にCSIRT構築経験やセキュリティポリシー策定経験がある人材は、金融や官公庁で引く手あまたです。",
  },
];

export default function SecuritySkillPage() {
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
        title="セキュリティエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント"
        description="セキュリティエンジニアの転職市場を2026年最新データで徹底解説。平均年収550-800万円、金融・通信・官公庁・SaaSに強い求人動向、おすすめ転職エージェントを30代・40代エンジニア向けに紹介します。"
        url="/skill/security/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "セキュリティエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          セキュリティエンジニアの転職ガイド【2026年】年収・求人・おすすめエージェント
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | セキュリティ転職市場の最新動向を30代・40代エンジニア向けに解説
        </p>

        {/* Market Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セキュリティエンジニアの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "急増（サイバー攻撃増加・法規制強化で需要拡大）"],
                  ["平均年収（30代）", "550万〜800万円"],
                  ["平均年収（40代・リーダー）", "750万〜1,200万円"],
                  ["注目の技術トレンド", "ゼロトラスト / SASE / クラウドセキュリティ / AI脅威対策"],
                  ["強い業界", "金融・通信・官公庁・SaaS"],
                  ["リモートワーク", "50〜65%の求人でリモート可"],
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
            サイバー攻撃の高度化とランサムウェア被害の増加を背景に、セキュリティエンジニアの需要は過去最高水準に達しています。2026年現在、改正個人情報保護法やNIST CSFへの対応需要に加え、ゼロトラストアーキテクチャの導入、クラウドセキュリティの強化が急務となっています。人材不足が深刻なため、経験者には好条件のオファーが提示されるケースが多く、転職市場は売り手市場が続いています。
          </p>
        </section>

        {/* Career Path */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セキュリティエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                企業全体のセキュリティアーキテクチャを設計・構築するスペシャリストへの道。年収800万〜1,300万円が目指せます。ゼロトラスト設計、クラウドセキュリティ戦略、セキュリティフレームワークの策定を担います。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ペネトレーションテスター / レッドチーム路線</h3>
              <p className="text-sm text-blue-700">
                攻撃者の視点でシステムの脆弱性を発見するペネトレーションテスター、レッドチームリーダーへのキャリアパス。年収650万〜1,100万円。高度な技術力と倫理観が求められ、専門性の高さから希少価値が非常に高いポジションです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">CISO / セキュリティマネジメント路線</h3>
              <p className="text-sm text-blue-700">
                CSIRT運営、セキュリティポリシー策定、経営層へのリスク報告を担うCISO（最高情報セキュリティ責任者）への道。年収1,000万〜1,500万円。技術とビジネスの両面からセキュリティ戦略を推進する経営幹部ポジションです。
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
                  ["3〜5年", "450万〜650万円", "SOCアナリスト / セキュリティエンジニア"],
                  ["5〜8年", "550万〜800万円", "シニアセキュリティエンジニア"],
                  ["8〜12年", "700万〜1,050万円", "セキュリティアーキテクト / CSIRTリーダー"],
                  ["12年以上", "900万〜1,400万円", "CISO / セキュリティ部門長"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">セキュリティエンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT特化でセキュリティ専門求人が豊富。SOC、CSIRT、脆弱性診断など幅広いセキュリティポジションをカバー。技術に精通したアドバイザーが在籍。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">金融・通信・官公庁系のセキュリティ求人が豊富。大手企業のCSIRT構築やセキュリティコンサルティング案件に強い。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">年収800万以上のハイクラスセキュリティ求人。CISOクラスやセキュリティアーキテクト向けのスカウトが充実。外資系企業の求人も多い。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
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
          <h2 className="text-xl font-bold mb-3">セキュリティエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのセキュリティスキルが今の市場でどう評価されるか、無料カウンセリングで確認してみませんか？
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
              { name: "AWSエンジニア", href: "/skill/aws/" },
              { name: "インフラエンジニア", href: "/skill/infrastructure/" },
              { name: "AI・機械学習エンジニア", href: "/skill/ai-ml/" },
              { name: "Goエンジニア", href: "/skill/go/" },
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
