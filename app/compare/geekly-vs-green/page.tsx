import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Geekly vs Green【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "GeeklyとGreenを8項目で徹底比較。エージェント型vs求人サイト型の違い、求人数、マッチング精度、使い勝手を解説し、エンジニアに最適なサービス選びを支援します。",
};

const faqs = [
  { q: "GeeklyとGreenの最大の違いは？", a: "Geeklyは専任アドバイザーが付くエージェント型、Greenは自分で求人を探す求人サイト型です。手厚いサポートが欲しいならGeekly、自分のペースで転職したいならGreenが向いています。" },
  { q: "年収UPしやすいのはどっち？", a: "年収交渉をプロが代行するGeekly（平均年収UP額76万円）の方が年収UPしやすい傾向があります。Greenは自分で交渉する必要がありますが、カジュアル面談で事前に年収レンジを確認できる利点があります。" },
  { q: "Web系エンジニアにはどっち？", a: "どちらもWeb系に強いですが、Geeklyはゲーム業界も含むIT全般、Greenは特にスタートアップやベンチャー企業の求人が充実しています。メガベンチャーならGeekly、スタートアップならGreenがおすすめです。" },
  { q: "カジュアル面談とは？", a: "Greenの特徴的な機能で、正式な選考前に企業と気軽に話せる仕組みです。企業の雰囲気やチーム体制を事前に確認でき、ミスマッチを防げます。通常の面接より格段にハードルが低いです。" },
  { q: "転職活動にかかる期間は？", a: "Geeklyは平均2〜3週間とスピーディ。Greenは自分のペースで進めるため1〜3ヶ月が目安です。急いで転職したいならGeekly、じっくり探したいならGreenが適しています。" },
  { q: "両方使っても大丈夫？", a: "もちろん大丈夫です。Geeklyで年収交渉をプロに任せつつ、Greenで自分でも企業を探すという併用パターンが最も効率的です。" },
];

const comparison = [
  { item: "サービスタイプ", a: "エージェント型（専任アドバイザー）", b: "求人サイト型（自分で応募）" },
  { item: "求人数", a: "約20,000件", b: "約30,000件" },
  { item: "年収UP実績", a: "平均年収UP額76万円", b: "非公開" },
  { item: "得意分野", a: "Web系、ゲーム業界、メガベンチャー", b: "スタートアップ、ベンチャー、Web系" },
  { item: "カジュアル面談", a: "エージェント経由で調整", b: "企業に直接申し込み可能" },
  { item: "年収交渉", a: "アドバイザーが代行", b: "自分で交渉" },
  { item: "内定までの期間", a: "平均2〜3週間", b: "平均1〜3ヶ月" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function GeeklyVsGreenPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Geekly vs Green【徹底比較】どっちを選ぶべき？" description="GeeklyとGreenを8項目で徹底比較。エージェント型vs求人サイト型の違いを解説します。" url="/compare/geekly-vs-green/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Geekly vs Green" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Geekly vs Green【徹底比較】どっちを選ぶべき？</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | エージェント型 vs 求人サイト型を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">GeeklyとGreenは「エージェント型」と「求人サイト型」という異なるアプローチでIT転職を支援するサービスです。どちらもWeb系・IT業界に強いですが、サービスの使い方が大きく異なります。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、8つの比較項目を通じて両社の違いを明らかにし、あなたに最適なサービスの選び方を解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Green</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geeklyの強み</h3>
              <p className="text-sm text-blue-700">専任アドバイザーによるマッチング精度の高さ。年収交渉を代行してくれるため、平均76万円の年収UPを実現。スピーディな転職が可能。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Greenの強み</h3>
              <p className="text-sm text-slate-600">自分のペースで転職活動を進められる。カジュアル面談で企業と気軽に話せる。スタートアップやベンチャー企業の求人が特に充実。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはGeekly</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- プロに年収交渉を任せて年収UPしたい人</li>
              <li>- スピーディに転職を決めたい人</li>
              <li>- メガベンチャーやゲーム業界を志望する人</li>
              <li>- 書類添削・面接対策もサポートしてほしい人</li>
              <li>- マッチング精度の高さを重視する人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはGreen</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- 自分のペースでじっくり転職活動したい人</li>
              <li>- カジュアル面談で企業の雰囲気を確かめたい人</li>
              <li>- スタートアップ・ベンチャー企業で働きたい人</li>
              <li>- エージェントに急かされたくない人</li>
              <li>- 複数の企業と並行してカジュアルに話したい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "エージェント×セルフサーチの併用", desc: "Geeklyでプロのマッチングを受けつつ、Greenで自分でも企業を探す。最も効率的な転職活動パターンです。" },
                { num: "2", title: "カジュアル面談で企業を見極め", desc: "Greenのカジュアル面談で企業の雰囲気を掴み、Geeklyの年収交渉力で条件を引き上げる使い分けが有効です。" },
                { num: "3", title: "異なる求人にアクセス", desc: "Geeklyの非公開求人とGreenの公開求人は重複が少なく、両方使うことで選択肢が大幅に広がります。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">Geeklyのプロサポート×Greenのカジュアル面談。両方無料で、最強の転職活動を実現しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
