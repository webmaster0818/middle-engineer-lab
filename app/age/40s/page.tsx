import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代エンジニアの転職完全ガイド【現実と成功法】| ミドルエンジニア転職ラボ",
  description:
    "40代エンジニアの転職は本当に厳しいのか？年収データ・成功事例・おすすめエージェントを交えて、40代のリアルな転職事情と成功戦略を解説します。",
};

const faqs = [
  {
    q: "40代エンジニアの転職は本当に厳しいですか？",
    a: "30代と比較すると求人数は減りますが、「厳しい」とは限りません。マネジメント経験、アーキテクト経験、特定ドメインの専門知識がある40代エンジニアは、むしろ希少人材として高い評価を受けます。重要なのは、40代の強みを活かせるポジションに的確にアプローチすることです。",
  },
  {
    q: "40代エンジニアの平均年収はどのくらいですか？",
    a: "40代ITエンジニアの平均年収は約650〜800万円です。マネージャークラスであれば800〜1200万円、CTOクラスであれば1000万円以上も珍しくありません。転職で年収が下がるケースもありますが、それは主にキャリアチェンジを伴う場合です。",
  },
  {
    q: "40代で未経験からエンジニアになれますか？",
    a: "正直に言えば、40代で完全未経験からのエンジニア転職は非常に難しいです。ただし、前職でのIT関連経験（社内SE、VBA開発、データ分析など）があれば、それを足がかりにIT企業への転職は可能です。DX推進ポジションなど、業界知識とIT知識の両方が求められる職種が狙い目です。",
  },
  {
    q: "40代のエンジニア転職で有利になるスキルは？",
    a: "技術面ではクラウドアーキテクチャ設計、セキュリティ、データ基盤構築などの上流スキルが有利です。加えて、プロジェクトマネジメント経験、チームビルディング実績、技術戦略の策定経験があると、テックリード・VPoEなどのハイクラスポジションを狙えます。",
  },
  {
    q: "40代エンジニアにおすすめの転職エージェントは？",
    a: "40代エンジニアにはdoda(IT特化)が最もおすすめです。求人数が業界最多級で40代向け求人も豊富。レバテックキャリアはハイクラス求人に強く、年収800万以上を目指す方に適しています。2社以上に登録して比較することをおすすめします。",
  },
  {
    q: "40代で転職すると年収は下がりますか？",
    a: "必ずしも下がるわけではありません。同職種・同レベルのポジションへの転職であれば、年収維持〜UPが一般的です。ただし、マネジメント→プレイヤーへの転向や、異業種への転職では一時的に年収が下がることがあります。長期的なキャリアプランで判断することが重要です。",
  },
];

export default function Age40sPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "40代エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          40代エンジニアの転職完全ガイド【現実と成功法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 40代エンジニアのリアルな転職事情と成功戦略
        </p>

        {/* 導入 */}
        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「40代エンジニアの転職は厳しい」という声を耳にすることがあります。確かに30代と比べて求人数は減りますが、マネジメント経験や深い専門性を持つ40代エンジニアは、企業にとって替えの利かない貴重な人材です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、40代エンジニアの転職市場のリアルな実態、成功のための具体的な戦略、おすすめの転職エージェントまで、データと事例を交えて徹底解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの転職市場データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人倍率", "約4〜6倍（30代の半分程度だが他業種より高い）"],
                  ["平均年収", "650〜800万円（マネージャー800〜1200万円）"],
                  ["転職後の年収変動", "約50%が年収維持〜UP"],
                  ["転職活動期間", "平均3〜6ヶ月（30代より長め）"],
                  ["求人の中心", "テックリード・EM・アーキテクト・PM"],
                  ["評価ポイント", "マネジメント経験・専門性・ドメイン知識"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 40代の強み */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアが持つ3つの武器</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. マネジメント・リーダーシップ経験</h3>
              <p className="text-sm text-blue-700">
                チームビルディング、ピープルマネジメント、プロジェクト管理の実績は、30代にはない40代固有の強みです。エンジニアリングマネージャー（EM）やVPoEといったポジションは、まさに40代の経験が活きる領域です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 深い技術的専門性</h3>
              <p className="text-sm text-blue-700">
                15年以上の実務経験から得られる技術の深い理解は、シニアアーキテクトやテクニカルフェローとして高く評価されます。特にセキュリティ、データベース、インフラ設計などの基盤技術は、経験年数がそのまま価値になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ドメイン知識と業界人脈</h3>
              <p className="text-sm text-blue-700">
                特定業界での長年の経験は、DX推進やテクニカルコンサルティングの分野で大きな価値を生みます。金融、医療、製造業などの業界知識とIT技術の掛け算ができる人材は、年齢に関係なく引く手あまたです。
              </p>
            </div>
          </div>
        </section>

        {/* 成功戦略 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの転職成功戦略</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ポジション選びを戦略的に行う</h3>
              <p className="text-sm text-slate-600">
                40代で「プログラマー」ポジションに応募するのは得策ではありません。テックリード、アーキテクト、EM、PM、CTOなど、経験と知見が活きるポジションに狙いを定めましょう。IT特化型エージェントのアドバイザーに相談すれば、あなたの経験に最適なポジションを提案してもらえます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">転職活動は長期戦を覚悟する</h3>
              <p className="text-sm text-slate-600">
                40代の転職は平均3〜6ヶ月かかります。在職中に転職活動を始め、焦って条件を妥協しないことが重要です。複数エージェントに登録し、常に求人情報にアンテナを張っておきましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">実績を数値で語れるように準備する</h3>
              <p className="text-sm text-slate-600">
                「30名のチームをマネジメント」「年間売上20%向上のシステムを設計」「レスポンスタイムを60%改善」など、具体的な数値で実績を語れることが40代転職の必須条件です。職務経歴書にも数値を盛り込みましょう。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめエージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアにおすすめの転職エージェント</h2>
          <div className="space-y-4">
            {[
              {
                name: "doda(IT特化)",
                reason: "業界最多級の求人数で40代向け求人も豊富。エージェントとサイトの両方が使え、自分のペースで転職活動を進められる。年収査定ツールで市場価値を把握できるのも強み。",
                best: "幅広い選択肢からじっくり選びたい40代エンジニア",
              },
              {
                name: "レバテックキャリア",
                reason: "年収800万以上の求人が半数を占めるハイクラス寄り。40代のマネージャー・アーキテクト向け求人に強く、技術に精通したアドバイザーが的確な提案をしてくれる。",
                best: "年収800万以上を目指す40代エンジニア",
              },
              {
                name: "マイナビIT AGENT",
                reason: "大手企業・メーカーの社内SE・情シス求人に強み。安定した環境で技術に向き合いたい40代に適している。非公開求人が全体の80%以上。",
                best: "大手企業で安定を求める40代エンジニア",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{agent.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">おすすめ: {agent.best}</p>
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
          <h2 className="text-xl font-bold mb-3">40代の経験を正当に評価してもらえる企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、あなたのマネジメント経験・技術力を正しく評価する企業を紹介してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
