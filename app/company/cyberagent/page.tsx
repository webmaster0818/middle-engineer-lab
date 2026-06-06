import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "サイバーエージェント エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "サイバーエージェントへのエンジニア転職を徹底解説。年収600〜1000万円、AbemaTV・広告技術・AI研究の技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "サイバーエージェントのエンジニア採用プロセスは？",
    a: "書類選考 → コーディングテスト → 技術面接（2回）→ 役員面接の流れです。技術面接ではホワイトボードコーディングに加え、アーキテクチャ設計の議論も行われます。",
  },
  {
    q: "サイバーエージェントのエンジニア年収はどのくらい？",
    a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1100万円が目安です。ミッショングレード制で実力に応じた評価がされます。",
  },
  {
    q: "サイバーエージェントの技術的な強みは？",
    a: "広告配信技術、大規模動画配信（ABEMA）、AI研究所（CA研）、ゲーム開発（Cygames子会社）など、多彩な技術領域があります。",
  },
  {
    q: "サイバーエージェントの開発文化は？",
    a: "「挑戦と安心はセット」の文化で、若手にも大きな裁量が与えられます。技術ブログの発信文化が強く、社内技術カンファレンス「CA BASE CAMP」も定期開催されています。",
  },
  {
    q: "サイバーエージェントのワークライフバランスは？",
    a: "部署によって差がありますが、近年は働き方改革が進んでいます。リモートワークとオフィス勤務のハイブリッド体制で、フレックスタイム制を採用しています。",
  },
  {
    q: "サイバーエージェントへの転職で有利な経験は？",
    a: "広告技術（RTB/DSP）、動画配信技術、機械学習、ゲーム開発のいずれかの経験が有利です。TypeScript/Go/Pythonの実務経験者は特に需要があります。",
  },
];

export default function CyberagentCompanyPage() {
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
      <ArticleJsonLd title="サイバーエージェント エンジニア転職ガイド" description="サイバーエージェントへのエンジニア転職を徹底解説。年収600〜1000万円、AbemaTV・広告技術・AI研究の技術基盤を現場目線でまとめました。" url="/company/cyberagent/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "サイバーエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">サイバーエージェント エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ABEMA・広告・AI・ゲームの総合テック企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社サイバーエージェント"],
                ["業種", "インターネット広告・メディア・ゲーム"],
                ["従業員数", "約7,000名（連結）"],
                ["平均年収", "600〜1,000万円（エンジニア職）"],
                ["本社所在地", "東京都渋谷区"],
                ["技術スタック", "TypeScript / Go / Python / React / Kubernetes / GCP"],
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
              <h3 className="font-bold text-blue-800 mb-2">若手にも大きな裁量を与える文化</h3>
              <p className="text-sm text-blue-700">「21世紀を代表する会社を創る」をビジョンに掲げ、若手エンジニアにも新規事業の立ち上げや技術選定の裁量が与えられます。年齢に関係なくチャレンジできる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多彩な事業ドメイン</h3>
              <p className="text-sm text-blue-700">ABEMA（動画配信）、インターネット広告、ゲーム（Cygames等）、DX事業、AI研究所など、エンジニアのキャリアパスが非常に幅広いのが特徴です。社内異動も活発です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術ブランディングへの注力</h3>
              <p className="text-sm text-blue-700">技術ブログ「CyberAgent Developers Blog」や社内技術カンファレンス、OSS活動を積極的に推進。技術力を社外に発信する文化が根付いています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>TypeScript / Go / Python いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Webアプリケーションの設計・開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>GCP / AWS でのクラウドインフラ運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>広告技術・動画配信・ゲーム開発のドメイン知識（あれば加点）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>新規事業の立ち上げ経験やプロダクト開発への情熱</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術ブログやOSS活動などのアウトプット実績</li>
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
                  ["ジュニアエンジニア", "J1-J2", "450〜650万円"],
                  ["ミドルエンジニア", "S1", "650〜850万円"],
                  ["シニアエンジニア", "S2", "850〜1,100万円"],
                  ["リードエンジニア", "E1", "1,100〜1,400万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">サイバーエージェント転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "メガベンチャー求人に強い。サイバーエージェントの非公開求人も保有。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。サイバーエージェントグループへの転職実績豊富。" },
              { name: "Green", href: "/review/green/", desc: "IT企業の求人が充実。サイバーエージェントの直接求人も掲載されることが多い。" },
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
          <h2 className="text-xl font-bold mb-3">サイバーエージェントへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ", href: "/company/mercari/" },
              { name: "DeNA", href: "/company/dena/" },
              { name: "LINEヤフー", href: "/company/line-yahoo/" },
              { name: "楽天グループ", href: "/company/rakuten/" },
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
