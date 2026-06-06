import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "金融業界からフィンテック転職【キャリアチェンジ完全ガイド】",
  description:
    "銀行・証券・保険業界からFinTech・決済・仮想通貨領域への転職方法を徹底解説。金融業界の知識が活きるIT職種と年収・転職戦略を紹介します。",
};

const faqs = [
  {
    q: "金融業界の経験はフィンテック転職で評価されますか？",
    a: "非常に高く評価されます。金融規制（銀行法・資金決済法）の知識、リスク管理、コンプライアンスの実務経験は、フィンテック企業が最も求めるスキルセットです。特に決済・融資・保険領域では、金融業務の理解がプロダクト開発に不可欠とされています。",
  },
  {
    q: "金融業界からフィンテック転職すると年収はどうなりますか？",
    a: "金融系SEの平均年収は450〜650万円程度ですが、フィンテック企業では同水準以上が期待できます。特にブロックチェーンエンジニアや金融DXコンサルタントのポジションでは700〜1200万円レンジの求人もあり、スキル次第で大幅な年収UPが見込めます。",
  },
  {
    q: "金融系SEからフィンテック転職に必要なスキルは？",
    a: "基盤スキルとしてPython、Java、SQLは必須です。加えて、API開発（REST/GraphQL）、クラウド（AWS/GCP）、セキュリティの知識があると強みになります。ブロックチェーン領域を目指す場合はSolidityやWeb3技術の学習も有効です。",
  },
  {
    q: "銀行のレガシーシステム経験しかなくても転職できますか？",
    a: "転職可能です。COBOLやメインフレームの経験は、金融系マイグレーション案件やモダナイゼーション推進で高く評価されます。並行してPythonやクラウドの基礎を3〜6ヶ月学習すれば、金融DXポジションで市場価値を発揮できます。",
  },
  {
    q: "金融業界からフィンテック転職で有利な資格はありますか？",
    a: "AWS認定ソリューションアーキテクトや情報処理安全確保支援士は技術力の証明になります。また、金融業界固有のFP（ファイナンシャルプランナー）や証券アナリスト資格を既に持っていれば、金融 x ITの掛け合わせで差別化できます。",
  },
  {
    q: "金融業界からフィンテック転職に強いエージェントは？",
    a: "レバテックキャリアはフィンテック企業の求人が豊富で、技術的なマッチングに強みがあります。ビズリーチはハイクラス求人が多く、金融DXコンサルタントや上流ポジションの求人に出会えます。2社以上に登録して比較検討するのがおすすめです。",
  },
];

export default function FinancePage() {
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
        title="金融業界からフィンテック転職【キャリアチェンジ完全ガイド】"
        description="銀行・証券・保険業界からFinTech・決済・仮想通貨領域への転職方法を徹底解説。金融業界の知識が活きるIT職種と年収・転職戦略を紹介します。"
        url="/industry/finance/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "金融業界からフィンテック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          金融業界からフィンテック転職【キャリアチェンジ完全ガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 金融の専門知識をフィンテック業界で活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            キャッシュレス決済の普及、暗号資産市場の成熟、銀行APIのオープン化により、金融業界とIT業界の境界は急速に溶け始めています。銀行・証券・保険で培った金融規制の知識、リスク管理の実務経験は、フィンテック企業で圧倒的な武器になります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、金融業界エンジニアがフィンテック・決済・暗号資産領域に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">金融エンジニアのフィンテック転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フィンテック市場の急成長</h3>
              <p className="text-sm text-blue-700">
                日本のフィンテック市場規模は年率20%以上で成長し、2026年には1兆円を超える見込みです。決済、融資、保険、資産運用の各領域でスタートアップが急増し、金融業務を理解するエンジニアの採用競争が激化しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">金融規制知識の希少価値</h3>
              <p className="text-sm text-blue-700">
                フィンテック企業の最大の参入障壁は金融規制です。銀行法、資金決済法、割販法などの規制を理解し、コンプライアンスを考慮したシステム設計ができるエンジニアは極めて少なく、高い報酬で迎えられます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">メガバンクのDX投資拡大</h3>
              <p className="text-sm text-blue-700">
                三菱UFJ・三井住友・みずほの3メガバンクだけでDX関連投資は年間数千億円規模です。金融機関のレガシーシステムモダナイゼーションやAPI基盤構築の案件が急増し、金融 x IT人材の需要は右肩上がりです。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">金融経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["フィンテックエンジニア", "年収550〜900万円", "決済・融資・資産運用サービスの開発"],
                  ["ブロックチェーンエンジニア", "年収600〜1200万円", "分散台帳技術を活用した金融サービス開発"],
                  ["金融DXコンサルタント", "年収700〜1200万円", "金融機関のデジタル変革戦略の策定・推進"],
                  ["リスク分析エンジニア", "年収600〜1000万円", "AIを活用した与信・不正検知モデルの開発"],
                ].map(([title, salary, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">
                      {title}
                    </th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200 whitespace-nowrap">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 転職準備 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">金融業界からフィンテック転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "モダン技術スタックを学ぶ", desc: "Python、TypeScript、クラウド（AWS/GCP）、API設計の基礎を習得。金融系のレガシー技術からの脱却を3〜6ヶ月で目指す。" },
              { step: "2", title: "金融業務の経験を棚卸しする", desc: "銀行勘定系、決済、リスク管理、コンプライアンスなど、携わった業務領域を具体的に整理。規制対応やシステム移行の実績を数値化する。" },
              { step: "3", title: "フィンテック業界をリサーチする", desc: "BaaS、BNPL、エンベデッドファイナンスなど最新トレンドを把握。自分の金融知識がどの領域で価値を発揮するかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "レバテックキャリア（フィンテック求人豊富）、ビズリーチ（ハイクラス金融DX求人）に登録して市場価値を確認する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">金融の専門知識をフィンテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            フィンテック人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
