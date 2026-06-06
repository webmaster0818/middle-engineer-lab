import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "大企業→スタートアップ転職ガイド【年収・カルチャー・リスク】",
  description:
    "大企業エンジニアからスタートアップへ転職する際の年収変化、カルチャーギャップ、メリット・デメリット、成功のポイントを解説します。",
};

const faqs = [
  {
    q: "大企業からスタートアップに転職すると年収は下がる？",
    a: "基本給は下がるケースが多いですが、ストックオプション（SO）を含めた総報酬では上回る可能性があります。シリーズB以降の企業であれば基本給も大企業並みのケースが増えています。",
  },
  {
    q: "大企業のどんな経験がスタートアップで活きる？",
    a: "大規模システムの設計・運用経験、セキュリティやコンプライアンスの知識、組織横断プロジェクトの経験が特に重宝されます。スタートアップが成長フェーズで必要とするスキルです。",
  },
  {
    q: "スタートアップのリスクは？",
    a: "倒産リスク、SOの無価値化、長時間労働、福利厚生の薄さが主なリスクです。ただしシリーズB以降で黒字化済みの企業を選べばリスクは大幅に軽減されます。",
  },
  {
    q: "どのフェーズのスタートアップがおすすめ？",
    a: "初めてのスタートアップならシリーズB〜Cがおすすめです。資金調達済みで事業の方向性が固まっており、かつまだ組織が小さいため裁量を持って働けます。",
  },
  {
    q: "カルチャーギャップに慣れるコツは？",
    a: "意思決定の速さ、ドキュメントよりも口頭コミュニケーション、マルチタスクの多さに戸惑うことが多いです。入社前にカジュアル面談で現場の雰囲気を確認することが重要です。",
  },
  {
    q: "スタートアップに合わない人の特徴は？",
    a: "明確な指示がないと動けない人、専門領域以外に手を出したくない人、安定を最優先する人には向きません。逆に自走力があり、不確実性を楽しめる人に向いています。",
  },
];

export default function CorporateToStartupPage() {
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
        title="大企業→スタートアップ転職ガイド【年収・カルチャー・リスク】"
        description="大企業エンジニアからスタートアップへ転職する際の年収変化、カルチャーギャップ、メリット・デメリット、成功のポイントを解説します。"
        url="/career/corporate-to-startup/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "大企業→スタートアップ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          大企業→スタートアップ転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 大手からスタートアップへの転職を成功させる方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            大企業のエンジニアがスタートアップへ転職するケースが増えています。裁量の大きさ、技術的な挑戦、ストックオプションによる大きなリターンが魅力です。一方でリスクもあるため、事前の情報収集が重要です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ転職先の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SO期待値</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "CTO/VPoE", salary: "800〜1,500万円", diff: "★★★", so: "大（0.5〜3%）" },
                  { pos: "テックリード", salary: "650〜1,000万円", diff: "★★★", so: "中（0.1〜0.5%）" },
                  { pos: "シニアエンジニア", salary: "600〜900万円", diff: "★★☆", so: "小（0.05〜0.2%）" },
                  { pos: "フルスタック", salary: "550〜850万円", diff: "★★☆", so: "小〜中" },
                  { pos: "EM（エンジニアリングマネージャー）", salary: "700〜1,100万円", diff: "★★★", so: "中（0.1〜0.5%）" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.so}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ転職の判断ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "資金調達状況を確認する", desc: "直近の調達額、ラウンド、投資家を確認しましょう。シリーズB以降で著名VCが入っている企業はリスクが低めです。" },
              { num: "2", title: "プロダクトのPMFを確認する", desc: "売上成長率、ユーザー数の推移、チャーンレートなどを面接で確認しましょう。PMF達成済みの企業は安定成長が見込めます。" },
              { num: "3", title: "SOの条件を細かく確認する", desc: "付与割合、行使条件、ベスティングスケジュール、行使価格を必ず書面で確認しましょう。口頭の約束は無効です。" },
              { num: "4", title: "カルチャーフィットを確認する", desc: "カジュアル面談で現場エンジニアと話しましょう。開発プロセス、意思決定のスピード、働き方を具体的に質問してください。" },
              { num: "5", title: "退職条件を整理する", desc: "大企業の退職金、企業年金、持株会の精算条件を事前に確認しましょう。転職の総合的な損得を計算することが重要です。" },
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
                <span className="text-slate-600">35歳 大手SIer 10年 / PM兼アーキテクト</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">780万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">シリーズC SaaS企業 テックリード</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">850万円 + SO 0.2%（+70万円UP + SO）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "プロコミット", point: "スタートアップ転職に特化。経営者との直接面談をアレンジしてくれる。" },
              { name: "ビズリーチ", point: "シリーズB以降のスタートアップからスカウトが届く。SO付きポジションが豊富。" },
              { name: "Findy", point: "技術力を可視化してスタートアップとマッチング。エンジニア特化。" },
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
          <h2 className="text-xl font-bold mb-3">スタートアップ転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            大企業経験を最大限に活かせるスタートアップをプロが提案します。
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
              { name: "スタートアップ→大企業転職", href: "/career/startup-to-corporate/" },
              { name: "PM→CTO/VPoEキャリアパス", href: "/career/pm-to-cto/" },
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
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
