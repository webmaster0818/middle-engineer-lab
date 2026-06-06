import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エネルギー業界からCleanTech転職【エンジニアガイド】",
  description:
    "エネルギー業界エンジニアからCleanTech・GreenTech領域への転職方法を徹底解説。エネルギーの知識が活きるIT職種、年収アップの戦略を紹介します。",
};

const faqs = [
  {
    q: "エネルギー業界の経験はCleanTech転職で評価されますか？",
    a: "非常に高く評価されます。電力系統、スマートグリッド、SCADA、再生可能エネルギーの知識を持つエンジニアはCleanTech企業で極めて希少な人材です。特にエネルギーマネジメントシステム（EMS）の実務経験は大きなアドバンテージです。",
  },
  {
    q: "エネルギー業界からCleanTech転職すると年収はどうなりますか？",
    a: "エネルギー系SEの平均年収は450〜600万円程度ですが、CleanTech企業では550〜900万円レンジが一般的です。EV充電インフラやVPP（仮想発電所）のリードエンジニアでは850〜1,100万円の求人もあります。",
  },
  {
    q: "CleanTech企業ではどんな技術が求められますか？",
    a: "IoT（センサーデータ収集・制御）、データ分析（Python/SQL）、クラウド（AWS/GCP）が基本です。加えてエッジコンピューティング、時系列データ処理、最適化アルゴリズム（電力需給最適化）の知識があると差別化できます。",
  },
  {
    q: "カーボンニュートラルの流れでエンジニア需要は増える？",
    a: "確実に増えます。2050年カーボンニュートラル目標に向けて、再エネ導入、EV充電インフラ、蓄電池制御、排出量算定（GHGプロトコル）、カーボンクレジット管理など、CleanTechのエンジニア需要は爆発的に拡大しています。",
  },
  {
    q: "エネルギー業界から転職しやすいIT職種は何ですか？",
    a: "EMS（エネルギーマネジメント）エンジニア、スマートグリッドエンジニア、EV充電インフラエンジニア、カーボンテックエンジニアが転職しやすいポジションです。ENECHANGE、Shizen Energy等が積極採用中です。",
  },
  {
    q: "エネルギー業界からCleanTech転職に強いエージェントは？",
    a: "レバテックキャリア（IT特化型で幅広い求人）、ビズリーチ（CleanTechのハイクラス案件）、Geekly（スタートアップの求人豊富）の3社がおすすめです。エネルギー×ITの掛け合わせをアピールしましょう。",
  },
];

export default function EnergyPage() {
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
      <ArticleJsonLd title="エネルギー業界からCleanTech転職【エンジニアガイド】" description="エネルギー業界エンジニアからCleanTech・GreenTech領域への転職方法を徹底解説。エネルギーの知識が活きるIT職種、年収アップの戦略を紹介します。" url="/industry/energy/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "エネルギー業界からCleanTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エネルギー業界からCleanTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | エネルギーの知識をCleanTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">カーボンニュートラル目標に向けたエネルギー転換が世界的に加速しています。再生可能エネルギー、EV充電インフラ、スマートグリッドなど、エネルギー分野のDXを推進できるエンジニアの需要が急増しています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、エネルギー業界エンジニアがCleanTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エネルギーエンジニアのCleanTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">カーボンニュートラル政策の推進</h3>
              <p className="text-sm text-blue-700">2050年カーボンニュートラル目標に向けて、再エネ導入、省エネ、排出量削減のためのテクノロジー投資が急増しています。GHGプロトコルに基づく排出量算定・報告システムの開発需要も高まっています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">EV充電インフラの整備加速</h3>
              <p className="text-sm text-blue-700">EV普及に伴い、充電ステーションの設置・管理、スマートチャージング（電力需給に応じた充電制御）、V2G（Vehicle-to-Grid）の技術開発需要が急増しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">VPP・分散型エネルギーの普及</h3>
              <p className="text-sm text-blue-700">太陽光発電＋蓄電池を束ねたVPP（仮想発電所）、P2P電力取引、デマンドレスポンスなど、分散型エネルギーリソースの管理・最適化システムの開発需要が拡大しています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エネルギー経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["EMSエンジニア", "年収550〜850万円", "エネルギーマネジメントシステムの開発"],
                  ["スマートグリッドエンジニア", "年収600〜900万円", "電力系統の制御・最適化システム開発"],
                  ["EV充電インフラエンジニア", "年収550〜800万円", "充電ステーション管理・スマートチャージング"],
                  ["カーボンテックエンジニア", "年収500〜800万円", "GHG排出量算定・カーボンクレジット管理"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">エネルギー業界からCleanTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "IoT・データ分析スキルを習得", desc: "Python、SQL、時系列データ分析の基礎を学ぶ。IoTプラットフォーム（AWS IoT/Azure IoT）や最適化アルゴリズムの知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "エネルギー業界の経験を棚卸しする", desc: "SCADA運用、電力系統管理、再エネ設備の監視制御など携わった案件を整理。エネルギー効率改善率やコスト削減額など定量的な実績を準備する。" },
              { step: "3", title: "CleanTech業界のトレンドをリサーチ", desc: "VPP、デマンドレスポンス、カーボンクレジット、水素エネルギー、ペロブスカイト太陽電池などのトレンドを把握する。" },
              { step: "4", title: "転職エージェントに登録", desc: "レバテックキャリア（IT特化型）、ビズリーチ（CleanTechハイクラス案件）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">エネルギーの知識をCleanTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">CleanTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
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
