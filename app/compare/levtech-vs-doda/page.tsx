import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "レバテックキャリア vs doda IT【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "レバテックキャリアとdoda ITを8項目で徹底比較。IT特化型vs総合型の違い、求人数、年収UP実績、サポート体制を解説し、30代・40代エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "レバテックキャリアとdoda ITの最大の違いは？", a: "レバテックキャリアはIT業界特化型、dodaは総合型エージェントのIT部門です。IT特化型のレバテックは技術理解が深く年収交渉に強い一方、dodaは圧倒的な求人数と異業種への転職にも対応できる幅広さが魅力です。" },
  { q: "求人数はどちらが多い？", a: "dodaの方が圧倒的に多く約200,000件（全体）です。ただしIT求人に限定するとレバテックキャリアの約25,000件と質で勝負。非公開のIT特化求人はレバテックの方が充実しています。" },
  { q: "年収UPしやすいのはどっち？", a: "IT経験者の年収UPにはレバテックキャリア（年収UP率80%）が有利です。dodaは未経験からITへのキャリアチェンジで年収UPを実現するケースが多い傾向です。" },
  { q: "30代エンジニアにはどっち？", a: "IT経験豊富な30代にはレバテックキャリアがおすすめ。IT以外の業界も視野に入れたい場合や、初めての転職活動ならdodaの幅広さが安心です。迷ったら両方登録が最善です。" },
  { q: "40代エンジニアにはどっち？", a: "40代にはレバテックキャリアが断然おすすめ。シニアエンジニアやEM/CTOポジションの求人が豊富です。dodaは40代のIT求人が相対的に少ない傾向です。" },
  { q: "両方登録するメリットは？", a: "IT特化型（レバテック）で高年収の専門求人を、総合型（doda）で幅広い選択肢を確保できます。両方無料なので、リスクなく選択肢を最大化できます。" },
];

const comparison = [
  { item: "求人数", a: "約25,000件（IT特化）", b: "約200,000件（全体）" },
  { item: "年収UP実績", a: "年収UP率80%", b: "転職者満足度No.1" },
  { item: "得意分野", a: "IT業界全般に深い専門性", b: "IT含む全業種を幅広くカバー" },
  { item: "対象年代", a: "30代〜40代全般", b: "全年代" },
  { item: "アドバイザーの質", a: "IT業界出身者が多い", b: "業界知識は標準的" },
  { item: "対応エリア", a: "全国（主要4都市に拠点）", b: "全国（全国に拠点）" },
  { item: "内定までの期間", a: "平均3〜4週間", b: "平均4〜8週間" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function LevtechVsDodaPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="レバテックキャリア vs doda IT【徹底比較】どっちを選ぶべき？" description="レバテックキャリアとdoda ITを8項目で徹底比較。IT特化型vs総合型の違いを解説します。" url="/compare/levtech-vs-doda/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "レバテックキャリア vs doda IT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">レバテックキャリア vs doda IT【徹底比較】どっちを選ぶべき？</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | IT特化型 vs 総合型を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">IT特化型エージェントの代表格・レバテックキャリアと、総合型エージェント最大手のdoda。タイプの異なる2社をどう使い分けるべきか、8つの比較項目で明確にします。</p>
          <p className="text-slate-600 leading-relaxed">結論から言えば、IT経験者はレバテックキャリアをメインに、dodaをサブで登録するのが最も効率的です。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">doda IT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリアの強み</h3>
              <p className="text-sm text-blue-700">IT業界への深い専門性。技術トレンドを理解したアドバイザーが年収交渉から技術面接対策まで支援。年収UP率80%の実績が裏付け。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">doda ITの強み</h3>
              <p className="text-sm text-slate-600">圧倒的な求人数。IT業界だけでなく、ITコンサルや事業会社のDX部門など、幅広い選択肢を提供。転職サイト機能も併用可能。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはレバテックキャリア</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- IT経験3年以上で年収UPを狙いたい人</li>
              <li>- 技術面を理解したアドバイザーに相談したい人</li>
              <li>- 30代〜40代のミドル・シニアエンジニア</li>
              <li>- EM/CTO/VPoEなどの管理職を目指す人</li>
              <li>- IT業界内でのキャリアアップに集中したい人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはdoda IT</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- IT以外の業界も含めて幅広く検討したい人</li>
              <li>- 初めての転職で多くの選択肢を見たい人</li>
              <li>- 事業会社のDX部門・社内SEを志望する人</li>
              <li>- 転職サイト機能も使って自分で求人を探したい人</li>
              <li>- 大手企業の安心感を求める人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "専門性×幅広さの掛け合わせ", desc: "レバテックでIT特化の深い求人を、dodaで幅広い選択肢を確保。両軸で転職活動を進められます。" },
                { num: "2", title: "非公開求人の重複がほぼない", desc: "IT特化型と総合型では保有する非公開求人が大きく異なるため、2社登録で選択肢が倍増します。" },
                { num: "3", title: "年収交渉を有利に進められる", desc: "複数のオファーがあると年収交渉で強い立場に。IT特化型の年収相場の知見も交渉材料になります。" },
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
          <p className="text-blue-100 text-sm mb-4">IT特化型のレバテック×総合型のdoda。両方無料で、非公開求人の幅を最大化しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "doda vs マイナビIT比較", href: "/compare/doda-vs-mynavi/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "年収UPランキング", href: "/compare/salary-ranking/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
