import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ソニーグループ エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "ソニーグループへのエンジニア転職を徹底解説。年収800〜1300万円、PlayStation・半導体・AI・音楽など多彩な技術領域を現場目線でまとめました。",
};

const faqs = [
  {
    q: "ソニーグループのエンジニア採用プロセスは？",
    a: "書類選考 → 適性検査 → 技術面接（2回）→ 最終面接の流れです。技術面接では専門分野に関する深い議論が行われ、実際のプロジェクト経験を詳しく聞かれます。",
  },
  {
    q: "ソニーグループのエンジニア年収はどのくらい？",
    a: "ジュニアで600〜800万円、ミドルで800〜1100万円、シニアで1100〜1400万円が目安です。ジョブグレード制で専門性に応じた評価がされます。",
  },
  {
    q: "ソニーグループにはどんなエンジニアポジションがある？",
    a: "PlayStation開発、半導体（イメージセンサー）設計、AI/ML研究、クラウドサービス、音楽・映画のデジタル技術など、非常に幅広いポジションがあります。",
  },
  {
    q: "ソニーグループで英語力は必要？",
    a: "グローバルプロジェクトでは英語が必要ですが、日本国内のプロジェクトでは日本語のみで問題ないポジションも多いです。ただし英語力があるとキャリアの幅が広がります。",
  },
  {
    q: "ソニーグループの開発環境の特徴は？",
    a: "研究開発（R&D）への投資が大きく、最先端技術の研究に携われます。ハードウェアとソフトウェアの両方を手がけるため、幅広い技術スキルが身につきます。",
  },
  {
    q: "ソニーグループへの転職で有利な経験は？",
    a: "組み込みシステム開発、画像処理、機械学習、ゲームエンジン開発、半導体設計のいずれかの経験が有利です。C/C++のスキルが特に重宝されます。",
  },
];

export default function SonyCompanyPage() {
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
      <ArticleJsonLd title="ソニーグループ エンジニア転職ガイド" description="ソニーグループへのエンジニア転職を徹底解説。年収800〜1300万円、PlayStation・半導体・AI・音楽など多彩な技術領域を現場目線でまとめました。" url="/company/sony/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ソニーグループ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ソニーグループ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | PlayStation・半導体・AIの総合テクノロジー企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "ソニーグループ株式会社"],
                ["業種", "エレクトロニクス・エンタテインメント・半導体"],
                ["従業員数", "約113,000名（連結）"],
                ["平均年収", "800〜1,300万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "C++ / Python / Rust / Unity / AWS / TensorFlow"],
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
              <h3 className="font-bold text-blue-800 mb-2">世界をリードする技術研究開発</h3>
              <p className="text-sm text-blue-700">イメージセンサー世界シェアNo.1、PlayStation、AIロボティクスなど、世界をリードする技術の研究開発に携われます。R&D投資は年間1兆円規模で、最先端技術への投資が惜しみなく行われます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ジョブ型人事でスペシャリスト重視</h3>
              <p className="text-sm text-blue-700">2022年からジョブ型人事制度を導入し、専門性の高いエンジニアが正当に評価される仕組みに。技術スペシャリストとマネジメントの2つのキャリアパスが明確に整備されています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ハードウェア×ソフトウェアの融合</h3>
              <p className="text-sm text-blue-700">半導体からOS、アプリケーション、クラウドまでフルスタックで手がける数少ない日本企業。ハードとソフトの両方を理解するエンジニアが特に重宝されます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C++ / Python / Rust いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>組み込みシステム・画像処理・信号処理の知識</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>機械学習・ディープラーニングの実装経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>コンピュータサイエンスの学位（修士以上推奨）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語でのコミュニケーション力（グローバルプロジェクト）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>論文投稿や特許出願の実績（研究職の場合）</li>
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
                  ["ジュニアエンジニア", "I5-I6", "550〜800万円"],
                  ["ミドルエンジニア", "I7", "800〜1,100万円"],
                  ["シニアエンジニア", "I8", "1,100〜1,400万円"],
                  ["プリンシパルエンジニア", "I9+", "1,400〜1,800万円"],
                  ["エンジニアリングマネージャー", "M1+", "1,200〜1,600万円"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ソニーグループ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "大手メーカーのエンジニア求人も充実。ソニーグループの非公開求人を保有。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス求人に特化。ソニーグループのスカウトが届くことも。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手メーカーの求人が豊富。ソニーグループの各事業会社の求人を網羅。" },
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
          <h2 className="text-xl font-bold mb-3">ソニーグループへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "トヨタ自動車", href: "/company/toyota/" },
              { name: "パナソニック", href: "/company/panasonic/" },
              { name: "日立製作所", href: "/company/hitachi/" },
              { name: "任天堂", href: "/company/nintendo/" },
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
