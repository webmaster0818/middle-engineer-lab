import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "野村総合研究所(NRI) エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "野村総合研究所(NRI)へのエンジニア転職を徹底解説。年収800〜1400万円、金融系ITの最高峰、コンサル×テクノロジーの強みを現場目線でまとめました。",
};

const faqs = [
  {
    q: "NRIのエンジニア年収が高い理由は？",
    a: "金融機関向けの高単価システム開発が主力事業で、1人あたり売上が業界トップクラス。利益率も高く、社員への還元が大きいことが高年収の理由です。",
  },
  {
    q: "NRIの面接プロセスは？",
    a: "書類選考 → 適性検査（SPI）→ 面接（2〜3回）の流れです。論理的思考力、プロジェクト推進力、コミュニケーション能力が重視されます。",
  },
  {
    q: "NRIのエンジニアとコンサルタントの違いは？",
    a: "エンジニアはシステムの設計・開発・運用を担当、コンサルタントはIT戦略立案や業務改革を担当します。技術的な専門性を活かすならエンジニア職がおすすめです。",
  },
  {
    q: "NRIの主な顧客は？",
    a: "野村證券をはじめとする金融機関が主要顧客です。その他、流通・製造業・官公庁のシステムも手がけています。",
  },
  {
    q: "NRIのワークライフバランスは？",
    a: "プロジェクトの繁忙期は忙しくなりますが、近年は働き方改革が進んでいます。平均残業時間の削減やリモートワーク制度の導入が進んでいます。",
  },
  {
    q: "NRIへの転職で有利な経験は？",
    a: "金融系システムの開発経験、大規模SIプロジェクトの経験、基盤設計・アーキテクチャ設計の経験が有利です。証券・銀行業務のドメイン知識も高く評価されます。",
  },
];

export default function NriCompanyPage() {
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
      <ArticleJsonLd title="野村総合研究所(NRI) エンジニア転職ガイド" description="NRIへのエンジニア転職を徹底解説。年収800〜1400万円、金融系ITの最高峰を現場目線でまとめました。" url="/company/nri/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "野村総合研究所" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">野村総合研究所(NRI) エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 金融系IT最高峰・コンサル×テクノロジーの融合企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "株式会社野村総合研究所"],
                ["業種", "ITコンサルティング・SIer"],
                ["従業員数", "約16,000名（連結）"],
                ["平均年収", "800〜1,400万円（エンジニア職）"],
                ["本社所在地", "東京都千代田区"],
                ["技術スタック", "Java / C# / Python / AWS / Azure / Oracle"],
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
              <h3 className="font-bold text-blue-800 mb-2">業界トップクラスの高年収</h3>
              <p className="text-sm text-blue-700">平均年収1,200万円超でSIer業界トップ。金融機関向け高付加価値システムの開発が収益の柱で、高い利益率が社員への報酬に反映されています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">金融×テクノロジーの最前線</h3>
              <p className="text-sm text-blue-700">証券・銀行・保険など金融機関の基幹システムを多数構築。ミッションクリティカルなシステムの設計・開発を通じて、高い技術力と金融ドメイン知識が身につきます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">コンサルとエンジニアの協働</h3>
              <p className="text-sm text-blue-700">ITコンサルタントとシステムエンジニアが一体となってプロジェクトを推進する文化。技術だけでなくビジネス視点も身につき、キャリアの幅が広がります。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Java / C# での大規模システム開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>金融系システムのドメイン知識（証券・銀行・保険）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>要件定義・基本設計などの上流工程経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>プロジェクトマネジメント経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>論理的思考力・コミュニケーション能力</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウド（AWS / Azure）の活用経験（DX領域）</li>
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
                  ["ジュニアSE", "P1-P2", "600〜800万円"],
                  ["ミドルSE", "P3", "800〜1,100万円"],
                  ["シニアSE / PL", "P4", "1,100〜1,400万円"],
                  ["プロジェクトマネージャー", "P5", "1,400〜1,700万円"],
                  ["上級マネージャー", "M1+", "1,500〜2,000万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">NRI転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラスSIer求人に強い。NRI案件を扱うヘッドハンターが多数。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で金融系SIerの求人も充実。NRIの非公開求人を保有。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手SIerの求人が豊富。NRIの各事業部門の求人を網羅。" },
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
          <h2 className="text-xl font-bold mb-3">NRIへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ハイクラスSIerへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "アクセンチュア", href: "/company/accenture/" },
              { name: "NTTデータ", href: "/company/ntt-data/" },
              { name: "富士通", href: "/company/fujitsu/" },
              { name: "日立製作所", href: "/company/hitachi/" },
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
