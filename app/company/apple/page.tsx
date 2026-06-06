import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Apple Japan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Apple Japanへのエンジニア転職を徹底解説。年収900〜1600万円、秘密主義の開発文化、面接プロセスを現場目線でまとめました。",
};

const faqs = [
  {
    q: "Apple Japanのエンジニア職にはどんなポジションがありますか？",
    a: "ハードウェアエンジニア、ソフトウェアエンジニア（iOS/macOS）、MLエンジニア、SREなどがあります。日本法人ではQAやローカライゼーション関連のポジションも多いです。",
  },
  {
    q: "Apple Japanの面接の特徴は？",
    a: "秘密主義が徹底されており、面接で扱うプロジェクト内容が非公開のことが多いです。技術面接ではコーディングとシステムデザインが中心で、Appleのプロダクトへの理解も問われます。",
  },
  {
    q: "Apple Japanの年収水準は？",
    a: "エンジニア職で900〜1600万円程度。RSU（株式報酬）が付与されますが、GoogleやMetaと比較するとやや控えめです。ただしApple製品の社員割引もあります。",
  },
  {
    q: "Apple Japanで英語力はどの程度必要ですか？",
    a: "グローバルチームとの連携が多いため、ビジネスレベルの英語力は必須です。特にクパチーノ本社とのやり取りが日常的に発生します。",
  },
  {
    q: "Apple Japanの開発環境の特徴は？",
    a: "自社開発ツール・フレームワークの使用が多く、OSSよりもApple独自のエコシステムで開発することが特徴です。Swift、Objective-Cの経験が重宝されます。",
  },
  {
    q: "Apple Japanへの転職で有利な経験は？",
    a: "iOS/macOS開発経験、組み込みシステム経験、機械学習経験が特に有利です。Appleのプロダクトを深く理解していることも重要な評価ポイントです。",
  },
];

export default function AppleCompanyPage() {
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
      <ArticleJsonLd title="Apple Japan エンジニア転職ガイド" description="Apple Japanへのエンジニア転職を徹底解説。年収900〜1600万円、秘密主義の開発文化、面接プロセスを現場目線でまとめました。" url="/company/apple/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Apple Japan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Apple Japan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 世界最高峰のプロダクトを支えるエンジニア組織</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "Apple Japan合同会社"],
                ["業種", "ハードウェア・ソフトウェア"],
                ["従業員数", "約4,000名（日本法人・リテール含む）"],
                ["平均年収", "900〜1,600万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "Swift / Objective-C / Python / C++ / Metal / CoreML"],
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
              <h3 className="font-bold text-blue-800 mb-2">極めて高い秘密主義</h3>
              <p className="text-sm text-blue-700">Appleは情報管理が非常に厳格です。面接時にもNDAが求められ、入社後も担当プロジェクト以外の情報にはアクセスできません。この文化に適応できるかも評価ポイントです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロダクトへの深い情熱を重視</h3>
              <p className="text-sm text-blue-700">技術力はもちろん、Appleのプロダクトやデザイン哲学への理解・共感が強く求められます。面接では「なぜAppleで働きたいのか」が深掘りされます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ハードウェア×ソフトウェアの融合</h3>
              <p className="text-sm text-blue-700">Apple特有の強みとして、ハードウェアとソフトウェアの統合的な開発環境があります。チップ設計からOS、アプリまで一貫して手がけるため、幅広い技術領域に触れられます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Swift / Objective-C / C++ いずれかの深い実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>iOS / macOS アプリケーション開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>パフォーマンス最適化・メモリ管理の知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ビジネスレベルの英語力</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ユーザー体験に対する高い感度</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>機械学習・コンピュータビジョンの経験（ML系ポジション）</li>
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
                  ["ジュニアエンジニア", "ICT2", "800〜1,100万円"],
                  ["ミドルエンジニア", "ICT3", "1,100〜1,400万円"],
                  ["シニアエンジニア", "ICT4", "1,400〜1,800万円"],
                  ["スタッフエンジニア", "ICT5", "1,800〜2,200万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,600〜2,200万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Apple Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "Apple案件を扱うヘッドハンターが在籍。ハイクラス求人に強い。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で外資系エンジニア転職に強い。iOS開発者向け求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT・Web業界特化。外資系メーカーの求人も取り扱い。" },
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
          <h2 className="text-xl font-bold mb-3">Apple Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google Japan", href: "/company/google/" },
              { name: "Amazon Japan", href: "/company/amazon/" },
              { name: "Microsoft Japan", href: "/company/microsoft/" },
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
