import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "海外から日本IT企業に帰国転職 | ミドルエンジニア転職ラボ",
  description:
    "海外在住エンジニアが日本のIT企業に帰国転職する方法を解説。海外経験の活かし方、年収交渉、リモート面接対策を30代・40代向けに紹介します。",
};

const faqs = [
  { q: "海外経験は日本の転職市場で評価されますか？", a: "はい、高く評価されます。特に英語力、多文化環境での開発経験、グローバルスタンダードの開発手法の知識は、外資系日本法人やグローバル展開を目指す日系企業で重宝されます。" },
  { q: "海外から日本のエージェントに登録できますか？", a: "はい、オンラインで登録・面談が可能です。レバテックキャリアやGeeklyはオンライン面談に対応しており、海外からの帰国転職支援の実績もあります。" },
  { q: "年収は海外と比べて下がりますか？", a: "米国やシンガポールと比較すると年収は下がる傾向がありますが、生活コストを考慮すると実質的な生活水準は大きく変わらない場合も多いです。外資系日本法人なら比較的高い年収を維持できます。" },
  { q: "帰国のタイミングはいつがベストですか？", a: "内定が確定してから帰国するのがベストです。オンライン面接で内定まで進めるケースが多いため、渡航前に全ての選考を完了させましょう。" },
  { q: "海外での職歴は日本の職務経歴書にどう書けばいいですか？", a: "通常の職歴と同様に記載しますが、海外特有の成果（グローバルチームでの協業、英語での技術文書作成など）をアピールポイントとして明記しましょう。" },
  { q: "帰国後のオンボーディングで気をつけるべきことは？", a: "日本のビジネス文化（報連相、コンセンサス文化）への再適応が必要です。海外の直接的なコミュニケーションスタイルから、日本式に切り替える意識を持ちましょう。" },
];

export default function ReturnJapanPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="海外から日本IT企業に帰国転職 | ミドルエンジニア転職ラボ" description="海外在住エンジニアが日本のIT企業に帰国転職する方法を解説。海外経験の活かし方、年収交渉、リモート面接対策を30代・40代向けに紹介します。" url="/knowledge/return-japan/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "帰国転職ガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">海外から日本IT企業に帰国転職</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 海外経験を最大限活かす帰国転職戦略</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">家族の事情、キャリアの方向転換、日本の技術コミュニティへの貢献など、海外から日本への帰国転職を考えるエンジニアが増えています。海外経験は日本の転職市場で大きな武器になります。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">帰国転職の5ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "帰国の3〜6ヶ月前にエージェント登録", desc: "IT特化型エージェントにオンラインで登録。帰国時期と希望条件を伝え、求人情報の収集を開始。" },
              { num: "2", title: "日本の転職市場をリサーチ", desc: "日本のIT業界の年収相場、技術トレンド、働き方の変化を把握。エージェントから最新情報を得ましょう。" },
              { num: "3", title: "職務経歴書を日本向けに最適化", desc: "海外での実績を日本の採用担当者に伝わるように記載。グローバルチームでの成果、英語でのコミュニケーション力をアピール。" },
              { num: "4", title: "オンラインで選考を進める", desc: "多くの企業がオンライン面接に対応。時差を考慮したスケジュール調整をエージェントに依頼しましょう。" },
              { num: "5", title: "内定確定後に帰国準備", desc: "内定が確定してから帰国日を決定。住居探し、転入届、健康保険の手続きなどを計画的に進めます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外経験が活きるポジション</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ポジション</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">活かせる経験</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収目安</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">外資系日本法人のシニアエンジニア</td><td className="border border-slate-200 px-4 py-3 text-slate-600">英語力、グローバル開発経験</td><td className="border border-slate-200 px-4 py-3 text-slate-600">800〜1,500万</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">日系グローバル企業のテックリード</td><td className="border border-slate-200 px-4 py-3 text-slate-600">海外拠点との橋渡し</td><td className="border border-slate-200 px-4 py-3 text-slate-600">700〜1,200万</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">スタートアップのCTO/VPoE</td><td className="border border-slate-200 px-4 py-3 text-slate-600">海外のベストプラクティス導入</td><td className="border border-slate-200 px-4 py-3 text-slate-600">900〜1,800万</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">帰国転職で注意すべきポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 年収の「見せかけ」に注意</h3><p className="text-sm text-blue-700">日本の年収には賞与が含まれることが多く、月給ベースでは海外より大きく下がる場合があります。年間総額で比較しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. 日本のビジネス文化への再適応</h3><p className="text-sm text-blue-700">報連相やコンセンサス文化に戸惑うかもしれません。海外の効率的な手法を活かしつつ、日本の文化にも配慮する柔軟性が求められます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 税金・社会保険の手続き</h3><p className="text-sm text-blue-700">帰国後の確定申告、住民税、健康保険の手続きは複雑です。税理士に相談することをおすすめします。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 海外経験を「強み」として伝える</h3><p className="text-sm text-blue-700">「海外にいたから日本の市場を知らない」ではなく「海外のベストプラクティスを日本に持ち込める」とポジティブにアピールしましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. 家族のケアも忘れずに</h3><p className="text-sm text-blue-700">配偶者のキャリア、子供の学校など家族の事情も含めて計画的に進めましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">帰国転職のサポートはエージェントに</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントならオンラインで相談可能。海外からの帰国転職を手厚くサポートします。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "海外IT企業への転職ガイド", href: "/knowledge/overseas/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
