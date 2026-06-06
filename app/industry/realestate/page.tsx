import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "不動産業界からPropTech転職【エンジニアガイド】",
  description:
    "不動産業界エンジニアからPropTech領域への転職方法を徹底解説。不動産の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "不動産業界の経験はPropTech転職で評価されますか？",
    a: "高く評価されます。不動産取引の商流、重説・契約プロセス、物件管理、仲介業務を理解するエンジニアはPropTech企業で非常に重宝されます。宅建資格を持つエンジニアは特に希少です。",
  },
  {
    q: "不動産業界からPropTech転職すると年収はどうなりますか？",
    a: "不動産系SEの平均年収は400〜550万円程度ですが、PropTech企業では550〜850万円レンジが一般的です。不動産AI査定やVR内見のテックリードでは800〜1,000万円の求人もあり、スキル次第で大幅な年収UPが見込めます。",
  },
  {
    q: "PropTech企業ではどんな技術が求められますか？",
    a: "フロントエンド（React/Next.js）、バックエンド（Python/Ruby/Go）が基本です。加えてAI/ML（不動産価格予測）、3D/VR技術（バーチャル内見）、GIS（地理情報）、ブロックチェーン（不動産トークン化）の知識があると差別化できます。",
  },
  {
    q: "不動産業界からPropTech転職で有利な資格はありますか？",
    a: "宅地建物取引士は最も有利な資格です。不動産の法規制や取引プロセスを正確に理解していることの証明になります。加えてAWS認定資格やPython系のデータ分析資格があると技術力もアピールできます。",
  },
  {
    q: "不動産業界から転職しやすいIT職種は何ですか？",
    a: "PropTechプロダクトエンジニア、不動産データアナリスト、VR内見エンジニア、不動産プラットフォームエンジニアが転職しやすいポジションです。SUUMO、LIFULL HOME'S、GA technologiesなどが採用を強化しています。",
  },
  {
    q: "不動産業界からPropTech転職に強いエージェントは？",
    a: "Geekly（PropTech系スタートアップの求人に強い）、レバテックキャリア（IT特化型で専門アドバイザー在籍）、ワークポート（異業種転職支援が充実）の3社がおすすめです。不動産×ITの掛け合わせをアピールしましょう。",
  },
];

export default function RealestatePage() {
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
        title="不動産業界からPropTech転職【エンジニアガイド】"
        description="不動産業界エンジニアからPropTech領域への転職方法を徹底解説。不動産の知識が活きるIT職種、年収アップの戦略、おすすめ転職エージェントを紹介します。"
        url="/industry/realestate/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "不動産業界からPropTech転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">不動産業界からPropTech転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 不動産の知識をPropTech領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">不動産業界は電子契約の義務化やAI査定の普及により、急速にデジタルシフトしています。物件管理、仲介業務、不動産投資のデジタル化を推進できるエンジニアの需要が高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、不動産業界エンジニアがPropTech領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">不動産エンジニアのPropTech転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">不動産DXの加速</h3>
              <p className="text-sm text-blue-700">電子契約の義務化、IT重説の普及、不動産IDの導入など、不動産業界のデジタル化が法制度面からも加速しています。レガシーなシステムをモダン化できるエンジニアの需要が急増しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI査定・ビッグデータ活用</h3>
              <p className="text-sm text-blue-700">AIによる不動産価格予測、賃料査定、投資分析など、データドリブンな不動産サービスが急増しています。不動産の評価ロジックを理解した上でAIモデルを構築できるエンジニアは極めて希少です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">VR内見・3Dモデリングの普及</h3>
              <p className="text-sm text-blue-700">コロナ禍をきっかけにVR内見が定着し、3Dスキャン技術（Matterport等）の活用が進んでいます。不動産×3D/VR技術のスキルを持つエンジニアの活躍の場が広がっています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">不動産経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["PropTechプロダクトエンジニア", "年収550〜850万円", "不動産プラットフォーム・SaaSの開発"],
                  ["不動産データサイエンティスト", "年収600〜900万円", "AI査定・価格予測モデルの開発"],
                  ["VR内見エンジニア", "年収500〜750万円", "3Dスキャン・VR技術を活用した内見システム"],
                  ["不動産テックPM", "年収600〜900万円", "不動産×IT製品の企画・開発マネジメント"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">不動産業界からPropTech転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Web開発・データ分析スキルを習得", desc: "Python、JavaScript（React/Next.js）、SQLの基礎を学ぶ。GIS（地理情報システム）やデータ可視化の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "不動産業界の経験を棚卸しする", desc: "基幹システム開発、物件管理、契約管理、顧客管理など携わった案件を整理。業務効率化の成果を定量的に準備する。" },
              { step: "3", title: "PropTech業界のトレンドをリサーチ", desc: "電子契約、AI査定、不動産クラウドファンディング、不動産トークン化などのトレンドを把握。自分の経験がどの領域で活きるかを明確にする。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（PropTech系スタートアップに強い）、レバテックキャリア（IT特化型）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">不動産の知識をPropTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">PropTech人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "金融業界からFinTech転職", href: "/industry/finance/" },
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
