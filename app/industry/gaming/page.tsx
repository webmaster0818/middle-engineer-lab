import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ゲーム業界エンジニア転職ガイド【2026年版】",
  description:
    "ゲーム業界エンジニアの転職市場を徹底解説。Unity/Unreal Engine、サーバーサイド、XR開発など、ゲームエンジニアのキャリアパスと年収アップ戦略を紹介します。",
};

const faqs = [
  {
    q: "ゲーム業界エンジニアの平均年収は？",
    a: "30代で450〜750万円が相場です。大手ゲーム会社（任天堂、ソニー、カプコン等）のシニアエンジニアは700〜1,000万円、テクニカルディレクターは1,000万円超も狙えます。ソーシャルゲーム系よりコンシューマー系の方が年収が高い傾向です。",
  },
  {
    q: "ゲーム業界からWeb系に転職できる？",
    a: "転職可能です。ゲーム開発で培ったC#/C++のスキル、サーバーサイド（Go/Python）のスキル、大規模トラフィック処理の経験はWeb系企業でも高く評価されます。特にリアルタイム通信やパフォーマンスチューニングの知識は希少です。",
  },
  {
    q: "ゲーム業界の働き方は改善されている？",
    a: "以前のような長時間残業は改善傾向にあります。大手ゲーム会社を中心にワークライフバランスを重視する企業が増えており、リモートワークやフレックスタイム制の導入も進んでいます。ただし、リリース前の繁忙期は残業が発生することもあります。",
  },
  {
    q: "ゲーム業界未経験でも転職できる？",
    a: "可能ですが、Unity/Unreal Engineでの個人開発作品が必須です。ポートフォリオとしてゲームを完成させ、itch.ioやApp Storeに公開しましょう。Web系のバックエンドエンジニアはゲームサーバー開発への転職がしやすいです。",
  },
  {
    q: "ゲーム業界で需要が高いスキルは？",
    a: "Unity（C#）、Unreal Engine（C++）は基本です。加えてサーバーサイド（Go/Node.js）、リアルタイム通信（WebSocket/gRPC）、シェーダープログラミング、AI/ML（NPCの行動AI）のスキルが求められます。",
  },
  {
    q: "ゲーム業界に強い転職エージェントは？",
    a: "シリコンスタジオエージェント（ゲーム業界特化）、Geekly（ゲーム・エンタメ企業の求人豊富）、レバテックキャリア（IT全般+ゲーム案件）の3社がおすすめです。ポートフォリオ作品の準備が転職成功の鍵です。",
  },
];

export default function GamingPage() {
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
        title="ゲーム業界エンジニア転職ガイド【2026年版】"
        description="ゲーム業界エンジニアの転職市場を徹底解説。Unity/Unreal Engine、サーバーサイド、XR開発など、ゲームエンジニアのキャリアパスと年収アップ戦略を紹介します。"
        url="/industry/gaming/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "ゲーム業界エンジニア転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ゲーム業界エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ゲーム業界のエンジニア転職市場を徹底分析</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">ゲーム業界はモバイルゲーム、コンシューマーゲーム、XR/メタバースと多様な領域で成長を続けています。技術的な要求水準が高く、リアルタイム処理、3Dグラフィックス、大規模インフラなど高度なスキルが求められます。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、ゲーム業界エンジニアの転職市場、キャリアパス、年収アップの戦略を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム業界エンジニアの転職が活発な理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">グローバル展開の加速</h3>
              <p className="text-sm text-blue-700">日本のゲーム企業がグローバル市場への展開を強化しており、多言語対応、グローバルサーバー運用、海外プラットフォーム連携のスキルを持つエンジニアの需要が高まっています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">XR/メタバース市場の成長</h3>
              <p className="text-sm text-blue-700">Meta Quest、Apple Vision Proの普及により、VR/ARゲームやメタバースコンテンツの開発需要が拡大中です。Unity/Unreal Engine+XRのスキルセットを持つエンジニアは希少で高い市場価値があります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI技術のゲーム活用</h3>
              <p className="text-sm text-blue-700">生成AIによるコンテンツ自動生成、NPC行動AI、プロシージャル生成など、AIのゲーム活用が本格化しています。AI/MLの知識を持つゲームエンジニアは異業種からの転職組も含めて引く手あまたです。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム業界の主要エンジニアポジション</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["クライアントエンジニア", "年収450〜750万円", "Unity/UEでのゲームクライアント開発"],
                  ["サーバーエンジニア", "年収500〜850万円", "Go/Pythonでのゲームサーバー・API開発"],
                  ["テクニカルアーティスト", "年収500〜800万円", "シェーダー・エフェクト・パイプライン開発"],
                  ["XRエンジニア", "年収550〜850万円", "VR/AR/MRゲーム・コンテンツ開発"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム業界転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ポートフォリオ作品を完成させる", desc: "Unity/Unreal Engineで実際にプレイできるゲームを開発する。完成度、コード品質、パフォーマンス最適化がチェックされる。" },
              { step: "2", title: "得意分野を明確にする", desc: "クライアント（描画・UI・物理）、サーバー（インフラ・API）、TA（シェーダー・エフェクト）のいずれかに特化する。" },
              { step: "3", title: "業界のトレンドを把握する", desc: "GDC講演、CEDEC資料、技術ブログから最新のゲーム技術トレンドを学ぶ。面接で技術的な議論ができることが重要。" },
              { step: "4", title: "ゲーム業界特化のエージェントに登録", desc: "シリコンスタジオエージェント（ゲーム特化）、Geekly（エンタメ系）に登録。ポートフォリオの添削もしてもらえる。" },
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
          <h2 className="text-xl font-bold mb-3">ゲーム業界でキャリアアップを目指そう</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム・エンタメ業界に精通したエージェントに相談して、年収アップの可能性を探りましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Unity転職ガイド", href: "/skill/unity/" },
              { name: "C#/.NET転職ガイド", href: "/skill/csharp/" },
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
