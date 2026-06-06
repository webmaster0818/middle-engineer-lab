import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "楽天グループ エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "楽天グループへのエンジニア転職を徹底解説。年収600〜1000万円、英語公用語環境、楽天モバイルなど多角的事業の技術基盤を解説します。",
};

const faqs = [
  {
    q: "楽天グループのエンジニア採用で英語力はどの程度必要？",
    a: "社内公用語が英語のため、TOEIC 800点以上が目安です。ただしチームによっては日本語主体の業務もあり、入社後に英語力を伸ばすサポート制度もあります。",
  },
  {
    q: "楽天グループのエンジニア年収はどのくらいですか？",
    a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1000万円が目安です。楽天ポイントやストックオプションなどの福利厚生も充実しています。",
  },
  {
    q: "楽天グループのエンジニアの働き方は？",
    a: "ハイブリッド勤務が基本です。東京本社（二子玉川）を中心に、大阪・福岡にもオフィスがあります。フレックスタイム制を採用しています。",
  },
  {
    q: "楽天モバイルのエンジニア採用は？",
    a: "楽天モバイルでは完全仮想化ネットワーク（vRAN）の開発を進めており、通信系・クラウドネイティブのエンジニアを積極採用しています。",
  },
  {
    q: "楽天グループへの転職で有利な経験は？",
    a: "EC、フィンテック、モバイル通信、広告技術のいずれかの開発経験が有利です。Java/Spring Bootの経験者は特に需要があります。",
  },
  {
    q: "楽天グループの面接プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（1〜2回）→ マネージャー面接 → 人事面接の流れです。面接は英語または日本語で行われます。",
  },
];

export default function RakutenCompanyPage() {
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
      <ArticleJsonLd title="楽天グループ エンジニア転職ガイド" description="楽天グループへのエンジニア転職を徹底解説。年収600〜1000万円、英語公用語環境、楽天モバイルなど多角的事業の技術基盤を解説します。" url="/company/rakuten/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "楽天グループ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">楽天グループ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | EC・フィンテック・モバイルの総合テックカンパニー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "楽天グループ株式会社"],
                ["業種", "EC・フィンテック・モバイル通信"],
                ["従業員数", "約32,000名（連結）"],
                ["平均年収", "600〜1,000万円（エンジニア職）"],
                ["本社所在地", "東京都世田谷区（二子玉川）"],
                ["技術スタック", "Java / Spring Boot / React / Kubernetes / AWS / Kafka"],
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
              <h3 className="font-bold text-blue-800 mb-2">英語公用語によるグローバル環境</h3>
              <p className="text-sm text-blue-700">2012年から英語を社内公用語としており、70カ国以上の国籍のエンジニアが在籍。グローバルな環境で働きたいエンジニアにとって魅力的な選択肢です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">楽天エコシステムの技術的チャレンジ</h3>
              <p className="text-sm text-blue-700">EC、フィンテック（楽天カード・銀行・証券）、モバイル通信、トラベルなど70以上のサービスを展開。各ドメインで異なる技術的チャレンジがあり、社内異動も活発です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">充実した福利厚生</h3>
              <p className="text-sm text-blue-700">無料の社員食堂（三食）、楽天ポイント付与、ストックオプション制度など、年収以外の福利厚生が非常に充実しています。二子玉川の近代的なオフィスも魅力です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Spring Boot での実務経験（バックエンド中心）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / TypeScript でのフロントエンド開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>TOEIC 800点以上相当の英語力</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マイクロサービス・コンテナ技術の実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>EC・フィンテック・広告技術のドメイン知識（あれば加点）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アジャイル開発（Scrum）の実践経験</li>
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
                  ["ジュニアエンジニア", "B1-B2", "450〜650万円"],
                  ["ミドルエンジニア", "B3", "650〜850万円"],
                  ["シニアエンジニア", "B4", "850〜1,100万円"],
                  ["リードエンジニア", "B5", "1,100〜1,400万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,000〜1,300万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">楽天グループ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人が豊富。楽天グループの非公開求人も保有。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手企業の求人が充実。楽天グループの各事業部門の求人を網羅。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手IT企業への転職支援に強い。楽天グループとの取引実績豊富。" },
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
          <h2 className="text-xl font-bold mb-3">楽天グループへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LINEヤフー", href: "/company/line-yahoo/" },
              { name: "メルカリ", href: "/company/mercari/" },
              { name: "サイバーエージェント", href: "/company/cyberagent/" },
              { name: "リクルート", href: "/company/recruit/" },
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
