import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "NTTデータ エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "NTTデータへのエンジニア転職を徹底解説。年収600〜1000万円、国内最大級SIerの技術基盤、グローバル展開を現場目線でまとめました。",
};

const faqs = [
  {
    q: "NTTデータのエンジニア採用プロセスは？",
    a: "書類選考 → 適性検査（SPI）→ 面接（2〜3回）の流れです。技術的な深掘りよりもプロジェクトマネジメント経験やコミュニケーション能力が重視される傾向があります。",
  },
  {
    q: "NTTデータのエンジニア年収はどのくらい？",
    a: "ジュニアで500〜650万円、ミドルで650〜850万円、シニアで850〜1100万円が目安です。管理職になると1200万円超も可能です。",
  },
  {
    q: "NTTデータはSIerですがモダンな開発もできますか？",
    a: "はい、近年はDX推進やクラウドネイティブ開発に力を入れています。AWSやAzureのパートナーとしてクラウド案件が増加しており、アジャイル開発も広がっています。",
  },
  {
    q: "NTTデータの福利厚生は？",
    a: "大手企業ならではの充実した福利厚生が特徴です。住宅手当、家族手当、企業年金、確定拠出年金、カフェテリアプランなどが整備されています。",
  },
  {
    q: "NTTデータのグローバル展開は？",
    a: "世界50カ国以上に展開し、従業員数19万人超の世界有数のITサービス企業です。海外プロジェクトや海外赴任のチャンスもあります。",
  },
  {
    q: "NTTデータへの転職で有利な経験は？",
    a: "大規模SIプロジェクトの経験、PMO/PM経験、金融・公共・通信業界のドメイン知識、クラウド（AWS/Azure）の資格が有利です。",
  },
];

export default function NttDataCompanyPage() {
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
      <ArticleJsonLd title="NTTデータ エンジニア転職ガイド" description="NTTデータへのエンジニア転職を徹底解説。年収600〜1000万円、国内最大級SIerの技術基盤を現場目線でまとめました。" url="/company/ntt-data/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "NTTデータ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">NTTデータ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 国内最大級SIer・グローバルITサービス企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社NTTデータグループ"],
                ["業種", "システムインテグレーション・ITサービス"],
                ["従業員数", "約195,000名（連結）"],
                ["平均年収", "600〜1,000万円（エンジニア職）"],
                ["本社所在地", "東京都江東区"],
                ["技術スタック", "Java / Python / AWS / Azure / SAP / Salesforce"],
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
              <h3 className="font-bold text-blue-800 mb-2">社会インフラを支える大規模プロジェクト</h3>
              <p className="text-sm text-blue-700">金融（銀行・証券・保険）、公共（官公庁・自治体）、通信など、社会インフラを支えるミッションクリティカルなシステム開発に携われます。数百億円規模のプロジェクトも珍しくありません。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">DX推進・クラウドネイティブへの転換</h3>
              <p className="text-sm text-blue-700">従来のSI事業に加え、DXコンサルティング、クラウドネイティブ開発、データ分析基盤構築などモダンな領域の比重が増えています。AWS/Azureのプレミアパートナーです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">安定した雇用環境と充実した福利厚生</h3>
              <p className="text-sm text-blue-700">NTTグループならではの安定性と充実した福利厚生が魅力です。平均勤続年数が長く、長期的なキャリアを築きやすい環境です。研修制度も充実しています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / Python でのシステム開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>要件定義・基本設計などの上流工程経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS / Azure のクラウド資格・実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロジェクトマネジメント経験（PMO/PM）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>金融・公共・通信のドメイン知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>情報処理技術者試験・クラウド資格（加点要素）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">等級</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアSE", "G1-G2", "450〜600万円"],
                  ["ミドルSE", "G3", "600〜800万円"],
                  ["シニアSE / PL", "G4", "800〜1,050万円"],
                  ["プロジェクトマネージャー", "G5", "1,050〜1,300万円"],
                  ["統括マネージャー", "G6+", "1,300〜1,600万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">NTTデータ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手SIerの求人が充実。NTTデータとの取引実績が豊富。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手企業の求人が充実。NTTグループ各社の求人も網羅。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でSIerのDX部門やクラウド系ポジションの求人が豊富。" },
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
          <h2 className="text-xl font-bold mb-3">NTTデータへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手SIerへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/mynavi-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "富士通", href: "/company/fujitsu/" },
              { name: "日立製作所", href: "/company/hitachi/" },
              { name: "野村総合研究所", href: "/company/nri/" },
              { name: "アクセンチュア", href: "/company/accenture/" },
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
