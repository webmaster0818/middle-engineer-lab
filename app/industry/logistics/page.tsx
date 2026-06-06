import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "物流業界からLogiTech転職【エンジニアガイド】",
  description:
    "物流業界エンジニアからLogiTech・物流テック領域への転職方法を徹底解説。物流の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "物流業界の経験はLogiTech転職で評価されますか？",
    a: "非常に高く評価されます。WMS（倉庫管理システム）、TMS（輸配送管理）、在庫最適化、ラストマイル配送など物流オペレーションを理解するエンジニアは、物流テック企業で極めて希少な人材です。2024年問題への対応もあり需要が急増しています。",
  },
  {
    q: "物流業界からLogiTech転職すると年収はどうなりますか？",
    a: "物流系SEの平均年収は400〜550万円程度ですが、物流テック企業では550〜850万円レンジが一般的です。AIによる需要予測や自動配車アルゴリズムの開発ポジションでは800〜1,000万円の求人もあります。",
  },
  {
    q: "物流テック企業ではどんな技術が求められますか？",
    a: "バックエンド（Python/Java/Go）、データ分析（SQL/Python）、GIS（地理情報システム）が基本です。加えてAI/ML（需要予測・ルート最適化）、IoT（センサーデータ連携）、ロボティクス制御の知識があると差別化できます。",
  },
  {
    q: "物流業界からLogiTech転職で有利な資格はありますか？",
    a: "AWS認定資格（クラウドベースの物流プラットフォーム開発に有利）、統計検定（需要予測・在庫最適化）、物流技術管理士（物流ドメインの専門性証明）が挙げられます。技術スキル+物流ドメイン知識の掛け合わせが最も評価されます。",
  },
  {
    q: "物流業界から転職しやすいIT職種は何ですか？",
    a: "WMS/TMSエンジニア、物流データアナリスト、配車最適化エンジニア、サプライチェーンテックエンジニアが転職しやすいポジションです。自動倉庫・AMR（自律移動ロボット）関連の開発ポジションも増えています。",
  },
  {
    q: "物流業界からLogiTech転職に強いエージェントは？",
    a: "Geekly（テック系スタートアップの求人に強い）、レバテックキャリア（IT特化型で専門アドバイザー在籍）、ワークポート（異業種転職支援が充実）の3社がおすすめです。物流テック企業の求人は増加傾向にあります。",
  },
];

export default function LogisticsPage() {
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
        title="物流業界からLogiTech転職【エンジニアガイド】"
        description="物流業界エンジニアからLogiTech・物流テック領域への転職方法を徹底解説。物流の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。"
        url="/industry/logistics/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "物流業界からLogiTech転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          物流業界からLogiTech転職【エンジニアガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 物流の知識をLogiTech領域で活かす方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            2024年問題（ドライバーの時間外労働規制）やEC市場の拡大により、物流業界のDXが急加速しています。WMS、TMS、自動倉庫、ラストマイル配送の最適化など、物流の知識を持つエンジニアの需要は過去最高水準に達しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、物流業界エンジニアがLogiTech領域に転職するための具体的な方法、狙い目の職種、おすすめのエージェントを詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">物流エンジニアのLogiTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2024年問題によるDX加速</h3>
              <p className="text-sm text-blue-700">
                ドライバーの時間外労働規制により物流効率化が待ったなしの課題になっています。AIによる配車最適化、中継輸送、共同配送システムの開発需要が急増しており、物流の実務を理解するエンジニアが求められています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">自動倉庫・ロボティクスの導入拡大</h3>
              <p className="text-sm text-blue-700">
                AMR（自律移動ロボット）、AGV（無人搬送車）、自動ピッキングシステムなど、倉庫の自動化が急速に進んでいます。ロボティクス制御とWMS連携のスキルを持つエンジニアの需要が高まっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ラストマイル配送の最適化需要</h3>
              <p className="text-sm text-blue-700">
                即日配送・時間指定配送の需要増加に伴い、ルート最適化AI、リアルタイムトラッキング、宅配ロッカー連携など、ラストマイル配送のテクノロジー需要が拡大しています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">物流経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["WMS/TMSエンジニア", "年収500〜800万円", "倉庫管理・輸配送管理システムの開発"],
                  ["配車最適化エンジニア", "年収600〜900万円", "AIによるルート最適化・配車アルゴリズム開発"],
                  ["物流データアナリスト", "年収550〜850万円", "需要予測・在庫最適化・オペレーション分析"],
                  ["ロボティクスエンジニア", "年収600〜900万円", "自動倉庫・AMR制御システム開発"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">物流業界からLogiTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "データ分析・プログラミングスキルを習得", desc: "Python、SQL、GIS（地理情報）の基礎を学ぶ。最適化アルゴリズム（組合せ最適化、ルート最適化）の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "物流業界の経験を棚卸しする", desc: "WMS導入、配送ルート設計、在庫管理最適化など携わった案件を整理。配送効率改善率やコスト削減額など定量的な実績を準備する。" },
              { step: "3", title: "物流テック業界のトレンドをリサーチ", desc: "自動配車、ドローン配送、フィジカルインターネット、デジタルフォワーディングなどのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
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
          <h2 className="text-xl font-bold mb-3">物流の知識をLogiTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            物流テック人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
              { name: "小売・流通からECテック転職", href: "/industry/retail/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
