import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "医療・製薬業界からヘルステック転職【IT転職ガイド】",
  description:
    "医療系SE・製薬業界エンジニアからヘルステック・医療AI・遠隔医療領域への転職方法を徹底解説。医療業界の知識が活きるIT職種と転職戦略を紹介します。",
};

const faqs = [
  {
    q: "医療系SEの経験はヘルステック転職で評価されますか？",
    a: "非常に高く評価されます。電子カルテ、医事会計、DICOM、HL7 FHIRなどの医療情報システムの知識を持つエンジニアは、ヘルステック業界で希少人材です。医療現場のワークフローや法規制（医療法・個人情報保護法）の理解は、他のIT人材にはない大きな強みです。",
  },
  {
    q: "医療系からヘルステック転職すると年収はどうなりますか？",
    a: "医療系SEの平均年収は400〜600万円程度ですが、ヘルステックスタートアップや医療AI企業では同水準以上が期待できます。特に医療AIエンジニアや医療DXコンサルタントのポジションは650〜1000万円レンジの求人があり、経験次第で年収UPが見込めます。",
  },
  {
    q: "プログラミング経験が浅くてもヘルステック転職できますか？",
    a: "医療業界の業務知識があれば、プログラミングスキルが中級レベルでも転職可能です。特に医療SaaSのプロダクトマネージャーやカスタマーサクセス、医療DXコンサルタントは、医療知識の方が重視されるポジションです。並行してPythonやSQLを習得すると選択肢が広がります。",
  },
  {
    q: "医療系からヘルステック転職で有利な資格はありますか？",
    a: "医療情報技師は業界理解の証明として高く評価されます。加えて、AWS認定資格やPython関連資格（Python3エンジニア認定など）があると技術力もアピールできます。薬剤師や看護師など医療系国家資格を持っていれば、プロダクト開発での差別化が可能です。",
  },
  {
    q: "電子カルテベンダーからの転職先はどこがおすすめですか？",
    a: "クラウド型電子カルテのスタートアップ（CLINICSやカケハシなど）は即戦力として歓迎されます。また、遠隔医療プラットフォーム、医療AIスタートアップ、医療データ分析企業なども有力な転職先です。大手ではエムスリーやPHCなどが医療ITの知識を高く評価しています。",
  },
  {
    q: "医療系からヘルステック転職に強いエージェントは？",
    a: "レバテックキャリアはヘルステック企業の求人が増加しており、技術面でのマッチングに強みがあります。doda IT特化は求人数が豊富で、医療系IT企業の求人も充実しています。医療業界特化のエージェントと併用すると、より幅広い選択肢が得られます。",
  },
];

export default function HealthcarePage() {
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
        title="医療・製薬業界からヘルステック転職【IT転職ガイド】"
        description="医療系SE・製薬業界エンジニアからヘルステック・医療AI・遠隔医療領域への転職方法を徹底解説。医療業界の知識が活きるIT職種と転職戦略を紹介します。"
        url="/industry/healthcare/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "医療・製薬業界からヘルステック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          医療・製薬業界からヘルステック転職【IT転職ガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 医療の専門知識をヘルステック業界で活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            医療DXの推進、遠隔医療の普及、医療AIの実用化が加速する中、医療業界の業務知識とITスキルの両方を持つ人材の需要が急増しています。電子カルテ、医事会計、臨床データの知識は、ヘルステック業界で大きな武器になります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、医療系SE・製薬業界エンジニアがヘルステック・医療AI領域に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        {/* なぜ今がチャンスか */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">医療系エンジニアのヘルステック転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ヘルステック市場の急拡大</h3>
              <p className="text-sm text-blue-700">
                日本のヘルステック市場は年率18%以上で成長しており、遠隔医療、医療AI、PHR（パーソナルヘルスレコード）など多様な領域でスタートアップが急増しています。医療現場を理解するエンジニアは、この成長市場で不可欠な存在です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">医療データ活用の本格化</h3>
              <p className="text-sm text-blue-700">
                電子カルテの標準化（HL7 FHIR）、次世代医療基盤法の施行により、医療データの二次利用が本格化しています。医療データの構造や法規制を理解し、適切にデータを扱えるエンジニアの需要は極めて高い状況です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">医療AI・SaMDの実用化</h3>
              <p className="text-sm text-blue-700">
                AI画像診断支援、AI問診、SaMD（Software as a Medical Device）が相次いで薬事承認を取得しています。医療機器規制やPMDA対応の知識を持つエンジニアは、医療AIスタートアップから高い評価を受けています。
              </p>
            </div>
          </div>
        </section>

        {/* 狙い目ポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">医療経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ヘルステックエンジニア", "年収500〜800万円", "医療系Webサービス・アプリの開発"],
                  ["医療AIエンジニア", "年収600〜1000万円", "画像診断AI・自然言語処理による診断支援開発"],
                  ["医療SaaSプロダクト開発", "年収500〜850万円", "クラウド型電子カルテ・医事会計システム開発"],
                  ["医療DXコンサルタント", "年収600〜1000万円", "医療機関のデジタル化戦略策定・推進"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">医療業界からヘルステック転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "モダン開発スキルを習得する", desc: "Python、TypeScript、クラウド（AWS/GCP）の基礎を学ぶ。医療AI志望ならPythonの機械学習ライブラリ（scikit-learn、TensorFlow）も習得する。" },
              { step: "2", title: "医療業界の経験を棚卸しする", desc: "電子カルテ導入、医事会計システム開発、院内ネットワーク構築など、携わった案件と成果を具体的に整理。医療情報標準規格（HL7、DICOM）の知識も明記する。" },
              { step: "3", title: "ヘルステック業界をリサーチする", desc: "遠隔医療、医療AI、PHR、デジタル治療（DTx）などのトレンドを把握。自分の医療知識がどの領域で価値を発揮するかを見極める。" },
              { step: "4", title: "転職エージェントに登録", desc: "レバテックキャリア（ヘルステック求人増加中）、doda IT特化（医療IT求人充実）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">医療の専門知識をヘルステックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            ヘルステック人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
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
