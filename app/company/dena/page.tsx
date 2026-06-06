import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "DeNA エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "DeNAへのエンジニア転職を徹底解説。年収650〜1100万円、ゲーム・ヘルスケア・AI領域の技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "DeNAのエンジニア採用プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（2〜3回）→ カルチャーフィット面接の流れです。コーディングテストはアルゴリズム問題で、AtCoder ABC相当のレベルです。",
  },
  {
    q: "DeNAのエンジニア年収はどのくらい？",
    a: "ジュニアで550〜700万円、ミドルで700〜900万円、シニアで900〜1100万円が目安です。ストックオプションや業績賞与も加算されます。",
  },
  {
    q: "DeNAの事業領域は？",
    a: "ゲーム、スポーツ（横浜DeNAベイスターズ）、ヘルスケア、オートモーティブ、ライブストリーミング（Pococha）、AI事業など多角的に展開しています。",
  },
  {
    q: "DeNAの開発文化の特徴は？",
    a: "「こと」に向かう文化で、技術的な議論がフラットに行われます。技術勉強会やハッカソンが活発で、エンジニアの自己成長を支援する制度が充実しています。",
  },
  {
    q: "DeNAのワークライフバランスは？",
    a: "フレックスタイム制でリモートワークも可能。渋谷のヒカリエにある近代的なオフィスで、カフェや集中スペースも完備されています。",
  },
  {
    q: "DeNAへの転職で有利な経験は？",
    a: "ゲーム開発（Unity/サーバーサイド）、機械学習・AI、大規模Webサービスの開発経験が有利です。Go/Python/TypeScriptの実務経験者が特に求められています。",
  },
];

export default function DenaCompanyPage() {
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
      <ArticleJsonLd title="DeNA エンジニア転職ガイド" description="DeNAへのエンジニア転職を徹底解説。年収650〜1100万円、ゲーム・ヘルスケア・AI領域の技術基盤を現場目線でまとめました。" url="/company/dena/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "DeNA" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">DeNA エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ゲーム・ヘルスケア・AIの総合テック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社ディー・エヌ・エー"],
                ["業種", "ゲーム・スポーツ・ヘルスケア・AI"],
                ["従業員数", "約2,800名（連結）"],
                ["平均年収", "650〜1,100万円（エンジニア職）"],
                ["本社所在地", "東京都渋谷区"],
                ["技術スタック", "Go / Python / TypeScript / Unity / AWS / GCP"],
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
              <h3 className="font-bold text-blue-800 mb-2">「こと」に向かうフラットな技術文化</h3>
              <p className="text-sm text-blue-700">DeNAでは役職に関係なく技術的議論がフラットに行われます。エンジニアが技術的な意思決定に大きな裁量を持ち、良い技術を追求する文化が根付いています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多角的な事業で幅広い技術経験</h3>
              <p className="text-sm text-blue-700">ゲーム、Pococha（ライブ配信）、ヘルスケア、オートモーティブ、スポーツDXなど多様な事業があり、異なる技術ドメインでの経験が積めます。社内異動も推奨されています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI・ML領域の強化</h3>
              <p className="text-sm text-blue-700">AI技術の事業活用に積極的で、機械学習エンジニアやデータサイエンティストの採用を強化中。ゲームAI、推薦システム、自然言語処理などの研究開発も行っています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / Python / TypeScript いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Webアプリケーションの設計・開発・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / GCP でのクラウドインフラ経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チーム開発・コードレビューの経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ゲーム開発経験（Unity / サーバーサイド）（ゲーム部門の場合）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>機械学習・データ分析の実務経験（ML職の場合）</li>
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
                  ["ジュニアエンジニア", "G1-G2", "500〜700万円"],
                  ["ミドルエンジニア", "G3", "700〜900万円"],
                  ["シニアエンジニア", "G4", "900〜1,200万円"],
                  ["リードエンジニア", "G5", "1,200〜1,500万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">DeNA転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人に強い。DeNAの非公開求人を保有していることも。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。DeNAなどのゲーム系企業への転職実績が豊富。" },
              { name: "Green", href: "/review/green/", desc: "IT企業の求人に強い。DeNAの直接求人も頻繁に掲載。" },
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
          <h2 className="text-xl font-bold mb-3">DeNAへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "サイバーエージェント", href: "/company/cyberagent/" },
              { name: "メルカリ", href: "/company/mercari/" },
              { name: "任天堂", href: "/company/nintendo/" },
              { name: "バンダイナムコ", href: "/company/bandai-namco/" },
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
