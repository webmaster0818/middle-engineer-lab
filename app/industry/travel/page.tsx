import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "旅行業界からTravelTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ",
  description:
    "旅行業界エンジニアからTravelTech領域への転職方法を徹底解説。旅行の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "旅行業界の経験はTravelTech転職で評価されますか？",
    a: "高く評価されます。予約システム（GDS/CRS）、在庫管理、ダイナミックプライシング、旅行商品の造成プロセスを理解するエンジニアはTravelTech企業で希少人材です。特にOTA（Online Travel Agency）の業務知識は大きなアドバンテージです。",
  },
  {
    q: "旅行業界からTravelTech転職すると年収はどうなりますか？",
    a: "旅行系SEの平均年収は380〜520万円程度ですが、TravelTech企業では500〜800万円レンジが一般的です。ダイナミックプライシングAIやレコメンドエンジンの開発ポジションでは800〜1,000万円の求人もあります。",
  },
  {
    q: "TravelTech企業ではどんな技術が求められますか？",
    a: "バックエンド（Python/Java/Go）、フロントエンド（React/Next.js）、データ分析（SQL/Python）が基本です。加えてAPI連携（GDS/OTA間連携）、ML（ダイナミックプライシング・レコメンド）、多言語対応の知識があると差別化できます。",
  },
  {
    q: "コロナ後の旅行業界の回復状況は？",
    a: "インバウンド需要は2024年にコロナ前の水準を超え、2026年現在も成長が続いています。特にインバウンド向けの予約プラットフォーム、多言語対応、キャッシュレス決済連携のエンジニア需要が急増しています。",
  },
  {
    q: "旅行業界から転職しやすいIT職種は何ですか？",
    a: "TravelTechプロダクトエンジニア、予約システムエンジニア、ダイナミックプライシングエンジニア、トラベルデータアナリストが転職しやすいポジションです。一休、じゃらん、Booking.com等が積極採用中です。",
  },
  {
    q: "旅行業界からTravelTech転職に強いエージェントは？",
    a: "Geekly（Web系サービス企業の求人豊富）、レバテックキャリア（IT特化型で幅広い求人）、ワークポート（異業種からの転職支援が充実）の3社がおすすめです。旅行業界の知見をアピールしましょう。",
  },
];

export default function TravelPage() {
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
      <ArticleJsonLd title="旅行業界からTravelTech転職【エンジニアガイド】| ミドルエンジニア転職ラボ" description="旅行業界エンジニアからTravelTech領域への転職方法を徹底解説。旅行の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。" url="/industry/travel/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "旅行業界からTravelTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">旅行業界からTravelTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 旅行の知識をTravelTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">インバウンド需要の回復と旅行DXの加速により、TravelTech市場は活況を呈しています。予約プラットフォーム、ダイナミックプライシング、多言語対応など、旅行業界の知識を持つエンジニアの需要は高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、旅行業界エンジニアがTravelTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">旅行エンジニアのTravelTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">インバウンド需要の爆発的回復</h3>
              <p className="text-sm text-blue-700">訪日外国人旅行者数は過去最高水準を更新し続けており、多言語対応の予約システム、キャッシュレス決済連携、インバウンド向けコンテンツプラットフォームの開発需要が急増しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI活用による旅行体験の革新</h3>
              <p className="text-sm text-blue-700">AIによる旅行プランの自動生成、ダイナミックプライシング、パーソナライズドレコメンドなど、AI技術の旅行業界への活用が本格化しています。旅行の文脈を理解した上でAIを活用できるエンジニアの価値が高まっています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OTA・メタサーチの競争激化</h3>
              <p className="text-sm text-blue-700">OTA（Online Travel Agency）やメタサーチ間の競争が激化しており、UX改善、検索最適化、コンバージョン率向上のための開発投資が増大しています。旅行業界の商流を理解するエンジニアが求められています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">旅行経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["TravelTechプロダクトエンジニア", "年収500〜800万円", "予約プラットフォーム・OTAの開発"],
                  ["ダイナミックプライシングエンジニア", "年収600〜900万円", "AIによる価格最適化アルゴリズム開発"],
                  ["トラベルデータアナリスト", "年収550〜800万円", "需要予測・顧客行動分析・収益最適化"],
                  ["インバウンドテックエンジニア", "年収500〜750万円", "多言語対応・決済連携・インバウンド向けサービス"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">旅行業界からTravelTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Web開発・データ分析スキルを習得", desc: "Python、JavaScript（React/Next.js）、SQLの基礎を学ぶ。API連携（REST/GraphQL）やGDS/CRS連携の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "旅行業界の経験を棚卸しする", desc: "予約システム開発・運用、在庫管理、CRM、旅行商品の造成プロセスなど携わった案件を整理。予約数改善やコンバージョン率向上など定量的な実績を準備する。" },
              { step: "3", title: "TravelTech業界のトレンドをリサーチ", desc: "AI旅行プランナー、ダイナミックパッケージ、NDC（New Distribution Capability）、サステナブルツーリズムなどのトレンドを把握する。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（Web系サービス企業に強い）、レバテックキャリア（IT特化型）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">旅行の知識をTravelTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">TravelTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "小売・流通からECテック転職", href: "/industry/retail/" },
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
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
