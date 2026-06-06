import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "放送・メディアからデジタルメディア転職【エンジニアガイド】",
  description:
    "放送・メディア業界エンジニアからデジタルメディア領域への転職方法を徹底解説。メディアの知識が活きるIT職種、年収アップの戦略を紹介します。",
};

const faqs = [
  {
    q: "放送・メディアの経験はデジタルメディア転職で評価されますか？",
    a: "高く評価されます。動画配信の技術（エンコード、CDN、DRM）、コンテンツ管理システム、広告挿入（SSAI/CSAI）の知識を持つエンジニアはデジタルメディア企業で希少人材です。放送基準や著作権管理の理解も大きなアドバンテージです。",
  },
  {
    q: "放送業界からデジタルメディア転職すると年収はどうなりますか？",
    a: "放送系SEの平均年収は400〜600万円程度ですが、デジタルメディア企業では550〜900万円レンジが一般的です。動画配信プラットフォームのリードエンジニアやレコメンドAIのシニアエンジニアでは850〜1,100万円の求人もあります。",
  },
  {
    q: "デジタルメディア企業ではどんな技術が求められますか？",
    a: "動画配信技術（HLS/DASH、FFmpeg、CDN）、バックエンド（Go/Python/Java）、フロントエンド（React/Next.js）が基本です。加えてML（レコメンド・コンテンツ分析）、リアルタイム処理（ライブストリーミング）の知識があると差別化できます。",
  },
  {
    q: "テレビ局のエンジニアからの転職先はどこが多い？",
    a: "動画配信プラットフォーム（Netflix、TVer、ABEMA等）、動画テック企業、デジタル広告プラットフォーム、メディアテック系スタートアップへの転職が多いです。放送技術の知識を活かしたOTT（Over-The-Top）サービスの開発ポジションが増えています。",
  },
  {
    q: "放送業界から転職しやすいIT職種は何ですか？",
    a: "動画配信エンジニア、メディアプラットフォームエンジニア、コンテンツレコメンドエンジニア、広告テックエンジニア（動画広告）が転職しやすいポジションです。TVer、ABEMA、U-NEXT等が積極採用中です。",
  },
  {
    q: "放送業界からデジタルメディア転職に強いエージェントは？",
    a: "Geekly（メディア・エンタメ企業の求人豊富）、レバテックキャリア（IT特化型で幅広い求人）、ビズリーチ（ハイクラスメディアテック案件）の3社がおすすめです。動画配信技術の経験をアピールしましょう。",
  },
];

export default function MediaPage() {
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
      <ArticleJsonLd title="放送・メディアからデジタルメディア転職【エンジニアガイド】" description="放送・メディア業界エンジニアからデジタルメディア領域への転職方法を徹底解説。メディアの知識が活きるIT職種、年収アップの戦略を紹介します。" url="/industry/media/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "放送・メディアからデジタルメディア転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">放送・メディアからデジタルメディア転職【エンジニアガイド】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | メディアの知識をデジタルメディア領域で活かす方法</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">テレビ放送のデジタルシフト、動画配信プラットフォームの成長、CTV（Connected TV）広告の拡大により、放送・メディア業界のDXが加速しています。動画配信技術やコンテンツ管理の知識を持つエンジニアの需要が高まっています。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、放送・メディア業界エンジニアがデジタルメディア領域に転職するための具体的な方法を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メディアエンジニアのデジタルメディア転職が注目される理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OTT/動画配信の急成長</h3>
              <p className="text-sm text-blue-700">Netflix、Amazon Prime Video、TVer、ABEMAなど動画配信サービスの利用者数は増加の一途をたどっています。コンテンツ配信インフラ、トランスコーディング、DRM、CDN最適化のスキルを持つエンジニアの需要が急増しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">CTV広告市場の拡大</h3>
              <p className="text-sm text-blue-700">テレビ視聴のデジタル化に伴い、CTV（Connected TV）広告市場が急成長しています。プログラマティックCTV広告、SSAI（サーバーサイド広告挿入）、視聴データ分析の技術開発需要が拡大しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AIによるコンテンツレコメンド・制作支援</h3>
              <p className="text-sm text-blue-700">AIによるコンテンツレコメンド、自動字幕生成、ハイライト自動生成、メタデータ自動付与など、AIのメディア活用が本格化しています。コンテンツの文脈を理解した上でAIを活用できるエンジニアの価値が高まっています。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メディア経験が活きるIT職種</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["動画配信エンジニア", "年収550〜900万円", "HLS/DASH配信、トランスコード、CDN最適化"],
                  ["メディアプラットフォームエンジニア", "年収550〜850万円", "CMS・配信管理プラットフォームの開発"],
                  ["コンテンツレコメンドエンジニア", "年収600〜950万円", "ML/AIによるパーソナライズドレコメンド"],
                  ["CTV広告エンジニア", "年収550〜850万円", "SSAI/CSAI、プログラマティック広告配信"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">放送業界からデジタルメディア転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "動画配信技術・Web開発スキルを習得", desc: "FFmpeg、HLS/DASH、CDN（CloudFront/Fastly）の基礎を学ぶ。バックエンド（Go/Python）やフロントエンド（React/Next.js）の知識も有効。3〜6ヶ月が目安。" },
              { step: "2", title: "放送・メディアの経験を棚卸しする", desc: "放送システム開発、MAM（Media Asset Management）、字幕システム、送出システムなど携わった案件を整理。配信安定性改善やコスト削減の実績を準備する。" },
              { step: "3", title: "デジタルメディア業界のトレンドをリサーチ", desc: "FAST（無料広告付き配信）、CTV広告、ライブコマース、ショート動画プラットフォームなどのトレンドを把握する。" },
              { step: "4", title: "転職エージェントに登録", desc: "Geekly（メディア・エンタメ企業に強い）、レバテックキャリア（IT特化型）に登録して市場価値を確認する。" },
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
          <h2 className="text-xl font-bold mb-3">メディアの知識をデジタルメディアで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">デジタルメディア人材の需要は急増中。まずはIT特化型エージェントに相談して、あなたの市場価値を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "広告からAdTech転職", href: "/industry/advertising/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
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
