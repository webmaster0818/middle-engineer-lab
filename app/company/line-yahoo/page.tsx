import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "LINEヤフー エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "LINEヤフーへのエンジニア転職を徹底解説。年収650〜1100万円、国内最大級のトラフィックを支える技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "LINEヤフーのエンジニア採用プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（2回）→ 最終面接の流れです。コーディングテストはAtCoder相当の問題が出題されます。",
  },
  {
    q: "LINEヤフーの合併後、エンジニア文化はどう変わった？",
    a: "旧LINE側のスピード重視の開発文化と、旧ヤフー側の大規模運用ノウハウが融合しつつあります。技術選定の自由度は高く、チームごとに最適な技術を選べます。",
  },
  {
    q: "LINEヤフーのエンジニア年収はどのくらいですか？",
    a: "ジュニアで550〜700万円、ミドルで700〜900万円、シニアで900〜1100万円が目安です。賞与は年2回で、業績連動部分もあります。",
  },
  {
    q: "LINEヤフーで英語力は必要ですか？",
    a: "旧LINEのチームでは韓国・タイなどのグローバルチームとの連携があり英語が有利です。旧ヤフー側のチームでは日本語のみで問題ないポジションも多いです。",
  },
  {
    q: "LINEヤフーのリモートワーク体制は？",
    a: "フルリモートが基本で、地方在住でも勤務可能です。オフィスは東京・大阪・福岡にあり、必要に応じて出社するハイブリッド体制です。",
  },
  {
    q: "LINEヤフーへの転職で有利な技術スキルは？",
    a: "Java/Kotlin（サーバーサイド）、React/TypeScript（フロントエンド）、Kubernetes/Docker（インフラ）の経験が特に有利です。大規模トラフィック経験も評価されます。",
  },
];

export default function LineYahooCompanyPage() {
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
      <ArticleJsonLd title="LINEヤフー エンジニア転職ガイド" description="LINEヤフーへのエンジニア転職を徹底解説。年収650〜1100万円、国内最大級のトラフィックを支える技術基盤を現場目線でまとめました。" url="/company/line-yahoo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "LINEヤフー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">LINEヤフー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 国内最大級のユーザー基盤を持つテック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "LINEヤフー株式会社"],
                ["業種", "インターネットサービス・メッセンジャー"],
                ["従業員数", "約28,000名（連結）"],
                ["平均年収", "650〜1,100万円（エンジニア職）"],
                ["本社所在地", "東京都千代田区"],
                ["技術スタック", "Java / Kotlin / React / TypeScript / Kubernetes / Hadoop"],
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
              <h3 className="font-bold text-blue-800 mb-2">国内最大級のトラフィック規模</h3>
              <p className="text-sm text-blue-700">LINEの月間アクティブユーザー9,600万人、Yahoo! JAPANの月間利用者8,000万人超。この規模のトラフィックを支える技術力が求められ、大規模分散システムの経験を積める稀有な環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フルリモート勤務が標準</h3>
              <p className="text-sm text-blue-700">地方在住でもフルリモートで勤務可能。居住地の制限がないため、全国から優秀なエンジニアが集まっています。必要に応じた出社のみのハイブリッド体制です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多様なサービスドメイン</h3>
              <p className="text-sm text-blue-700">メッセンジャー、検索、EC、決済、広告、AI、ブロックチェーンなど多岐にわたるサービスを展開。エンジニアのキャリアパスが幅広く、社内異動も活発です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Kotlin / TypeScript いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模Webアプリケーションの開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マイクロサービスアーキテクチャの理解</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Kubernetes / Docker を用いたコンテナ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>CI/CD環境の構築・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語力があるとグローバルチームへの配属で有利</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">グレード</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "S1-S2", "500〜700万円"],
                  ["ミドルエンジニア", "S3", "700〜900万円"],
                  ["シニアエンジニア", "S4", "900〜1,200万円"],
                  ["リードエンジニア", "S5", "1,200〜1,500万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,100〜1,400万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">LINEヤフー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人に強い。LINEヤフーの非公開求人を多数保有。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。LINEヤフーへの転職支援実績が豊富。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手IT企業の求人が充実。LINEヤフーの各ポジション求人を保有。" },
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
          <h2 className="text-xl font-bold mb-3">LINEヤフーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ", href: "/company/mercari/" },
              { name: "楽天グループ", href: "/company/rakuten/" },
              { name: "サイバーエージェント", href: "/company/cyberagent/" },
              { name: "DeNA", href: "/company/dena/" },
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
