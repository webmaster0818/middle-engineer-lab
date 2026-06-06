import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Microsoft Japan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Microsoft Japanへのエンジニア転職を徹底解説。年収1000〜1800万円、Azure中心の技術スタック、面接プロセスを現場目線でまとめました。",
};

const faqs = [
  {
    q: "Microsoft Japanの面接はどのような形式ですか？",
    a: "電話スクリーニング → テクニカル面接（3〜4回）→ As Appropriate面接（最終）の流れです。コーディング、システムデザイン、行動面接がバランスよく出題されます。",
  },
  {
    q: "Microsoft Japanの面接は英語必須ですか？",
    a: "チームによります。グローバルチームは英語必須ですが、日本市場向けチームでは日本語面接の場合もあります。ただし英語力があると選択肢が広がります。",
  },
  {
    q: "Microsoft Japanのエンジニア年収はどのくらいですか？",
    a: "SDE（Level 59-61）で約1000〜1400万円、Senior SDE（Level 62-63）で約1400〜1800万円、Principal（Level 64+）で2000万円超が目安です。",
  },
  {
    q: "Microsoft Japanの働き方はどうですか？",
    a: "ワークライフバランスは外資系の中でもトップクラスに良好です。フレックスタイム、リモートワーク、有給消化が推奨されており、育休取得率も高いです。",
  },
  {
    q: "Microsoft JapanではAzureの経験が必須ですか？",
    a: "必須ではありませんが、Azure関連のポジションが多いため、クラウド経験があると有利です。AWS経験者も歓迎されます。",
  },
  {
    q: "Microsoft Japanに転職するベストな方法は？",
    a: "LinkedIn経由の直接応募、転職エージェント経由、社員リファラルの3つが主要ルートです。リファラルが最も通過率が高いと言われています。",
  },
];

export default function MicrosoftCompanyPage() {
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
        title="Microsoft Japan エンジニア転職ガイド"
        description="Microsoft Japanへのエンジニア転職を徹底解説。年収1000〜1800万円、Azure中心の技術スタック、面接プロセスを現場目線でまとめました。"
        url="/company/microsoft/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Microsoft Japan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Microsoft Japan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | Azure・AI時代を牽引する巨大テック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "日本マイクロソフト株式会社"],
                ["業種", "ソフトウェア・クラウドサービス"],
                ["従業員数", "約3,000名（日本法人）"],
                ["平均年収", "1,000〜1,800万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "C# / TypeScript / Python / Azure / .NET / React"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Growth Mindset重視の採用文化</h3>
              <p className="text-sm text-blue-700">サティア・ナデラCEO就任以降、「Growth Mindset」が組織文化の中心に。面接では技術力に加え、学習意欲・変化への適応力・チーム貢献が評価されます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI・クラウド領域の採用強化</h3>
              <p className="text-sm text-blue-700">Azure OpenAI Service、Copilotなど AI関連サービスの拡大に伴い、ML/AIエンジニア、クラウドアーキテクトの採用を積極的に強化しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">外資系随一のワークライフバランス</h3>
              <p className="text-sm text-blue-700">週休3日制のトライアル実績もあり、フレックスタイム・リモートワークが定着。Googleよりも「働きやすさ」で選ぶエンジニアも多いです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C# / TypeScript / Python いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Azure または AWS でのクラウド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>分散システム・マイクロサービスの設計経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語でのコミュニケーション力（チームにより必須度が異なる）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アルゴリズム・データ構造の基礎理解</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>OSS貢献や技術コミュニティでの活動実績（あれば加点）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ（総報酬）</th>
              </tr></thead>
              <tbody>
                {[
                  ["SDE（ジュニア）", "59-61", "900〜1,200万円"],
                  ["SDE II（ミドル）", "61-62", "1,200〜1,500万円"],
                  ["Senior SDE", "63", "1,500〜2,000万円"],
                  ["Principal SDE", "64+", "2,000〜2,800万円"],
                  ["エンジニアリングマネージャー", "63+", "1,800〜2,500万円"],
                ].map(([pos, level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Microsoft Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で外資系エンジニア転職に強い。Azure関連求人も保有。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス外資求人が豊富。Microsoft案件を扱うヘッドハンター多数。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "総合型ながらMicrosoft Japanの求人も取り扱い。幅広い選択肢。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
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
          <h2 className="text-xl font-bold mb-3">Microsoft Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google Japan", href: "/company/google/" },
              { name: "Amazon Japan", href: "/company/amazon/" },
              { name: "Apple Japan", href: "/company/apple/" },
              { name: "Meta Japan", href: "/company/meta/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
