import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "農業からAgriTech転職【エンジニアガイド】",
  description:
    "農業エンジニアからAgriTech領域への転職方法を徹底解説。農業の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "農業の経験はAgriTech転職で評価されますか？",
    a: "高く評価されます。栽培管理、農業機械、土壌・気象データ、流通・販売チャネルの知識を持つエンジニアはAgriTech企業で非常に貴重です。現場の課題を理解した上でテクノロジーを設計できるエンジニアは希少です。",
  },
  {
    q: "農業からAgriTech転職すると年収はどうなりますか？",
    a: "農業系SEの平均年収は350〜500万円程度ですが、AgriTech企業では500〜800万円レンジが一般的です。スマート農業プラットフォームのリードエンジニアやAI画像認識エンジニアでは750〜950万円の求人もあります。",
  },
  {
    q: "AgriTech企業ではどんな技術が求められますか？",
    a: "IoT（センサーデータ収集）、データ分析（Python/SQL）、画像認識（TensorFlow/PyTorch）が基本です。加えてドローン制御、衛星画像解析、ロボティクス、ブロックチェーン（食品トレーサビリティ）の知識があると差別化できます。",
  },
  {
    q: "AgriTech市場は成長していますか？",
    a: "急成長しています。スマート農業の市場規模は年率15%以上で拡大しており、政府の「みどりの食料システム戦略」もAgriTechの普及を後押ししています。農業の高齢化・人手不足を技術で解決する需要は今後も拡大します。",
  },
  {
    q: "農業から転職しやすいIT職種は何ですか？",
    a: "スマート農業プラットフォームエンジニア、農業IoTエンジニア、農業データサイエンティスト、食品トレーサビリティエンジニアが転職しやすいポジションです。ファームノート、AGRI SMILE等が採用を強化しています。",
  },
  {
    q: "農業からAgriTech転職に強いエージェントは？",
    a: "Geekly（テック系スタートアップの求人に強い）、レバテックキャリア（IT特化型で幅広い求人）、ワークポート（異業種転職支援が充実）の3社がおすすめです。農業×ITの掛け合わせは非常にユニークなアピールポイントです。",
  },
];

export default function AgriculturePage() {
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
      <ArticleJsonLd title="農業からAgriTech転職【エンジニアガイド】" description="農業エンジニアからAgriTech領域への転職方法を徹底解説。農業の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。" url="/industry/agriculture/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "農業からAgriTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">農業からAgriTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 農業の知識をAgriTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">農業の高齢化・人手不足を背景に、スマート農業（AgriTech）の導入が急速に進んでいます。IoTセンサー、ドローン、AI画像認識、ロボティクスなどの技術で農業を効率化するエンジニアの需要が高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、農業関連エンジニアがAgriTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">農業エンジニアのAgriTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">農業の高齢化・人手不足の深刻化</h3>
              <p className="text-sm text-blue-700">農業従事者の平均年齢は68歳を超え、人手不足は深刻化しています。自動収穫ロボット、ドローン防除、AI による病害虫診断など、技術で労働力不足を補うAgriTechの需要が急拡大しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スマート農業の政策的推進</h3>
              <p className="text-sm text-blue-700">政府の「みどりの食料システム戦略」やスマート農業推進政策により、AgriTech企業への投資・補助金が増加しています。データ駆動型農業、環境負荷低減技術の開発が国策レベルで推進されています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">フードテック・トレーサビリティの需要</h3>
              <p className="text-sm text-blue-700">食の安全・安心への関心の高まりから、ブロックチェーンを活用した食品トレーサビリティ、フードロス削減AI、植物工場の自動制御など、農業×テクノロジーの融合領域が拡大しています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">農業経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スマート農業エンジニア", "年収500〜750万円", "農業IoTプラットフォームの開発"],
                  ["農業データサイエンティスト", "年収550〜800万円", "生育予測・収量予測・気象データ分析"],
                  ["ドローン/ロボティクスエンジニア", "年収550〜850万円", "農業用ドローン・自動収穫ロボット開発"],
                  ["食品トレーサビリティエンジニア", "年収500〜750万円", "ブロックチェーンによるサプライチェーン管理"],
                ].map(([title, salary, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">{title}</th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-b border-slate-200 whitespace-nowrap">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">農業からAgriTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "IoT・データ分析スキルを習得", desc: "Python、SQL、IoTプラットフォーム（AWS IoT/Azure IoT）の基礎を学ぶ。画像認識（OpenCV/TensorFlow）の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "農業の経験を棚卸しする", desc: "栽培管理システム、農機連携、出荷管理、JA連携など携わった案件を整理。収量改善率やコスト削減額など定量的な実績を準備する。" },
              { step: "3", title: "AgriTech業界のトレンドをリサーチ", desc: "データ駆動型農業、植物工場、精密農業、AgriFood（食品×テック）のトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（テック系スタートアップに強い）、レバテックキャリア（IT特化型）に登録して市場価値を確認する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">農業の知識をAgriTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">AgriTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
              { name: "組込みエンジニア転職ガイド", href: "/skill/embedded/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
