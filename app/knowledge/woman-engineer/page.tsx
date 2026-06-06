import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "女性エンジニアの転職ガイド【30代・40代】| ミドルエンジニア転職ラボ",
  description:
    "女性エンジニアの転職を成功させるための完全ガイド。ライフイベントとキャリアの両立、女性が働きやすいIT企業の見つけ方、年収アップの方法を解説します。",
};

const faqs = [
  { q: "女性エンジニアの転職市場は有利ですか？", a: "はい。IT業界はダイバーシティ推進に力を入れており、女性エンジニアの採用に積極的な企業が増えています。特にメガベンチャーや外資系IT企業は女性エンジニア比率の向上を目指しており、女性向けの採用イベントや制度が充実しています。" },
  { q: "出産・育児のブランクは転職に不利ですか？", a: "1〜2年のブランクであれば大きな不利にはなりません。ブランク期間中に技術のキャッチアップ（オンライン学習、個人プロジェクト等）をしていたことをアピールすればプラスの印象を与えられます。" },
  { q: "時短勤務でもエンジニアとして転職できますか？", a: "はい。時短勤務OKの企業は増えています。特にリモートワーク + フレックスの企業なら、時短勤務でも成果を出しやすい環境が整っています。エージェントに「時短勤務希望」と伝えましょう。" },
  { q: "女性エンジニアの年収は男性より低いですか？", a: "同じスキル・経験であれば年収差は縮小傾向にあります。ただし管理職比率の低さが平均年収に影響している面はあります。年収を上げるにはマネジメント経験を積むか、専門性を極めることが有効です。" },
  { q: "育休後に復帰しやすいIT企業の特徴は？", a: "育休取得実績（男女とも）、時短勤務制度、リモートワーク制度、育児手当、病児保育補助などが充実している企業を選びましょう。OpenWorkやエージェント経由で実態を確認できます。" },
  { q: "女性エンジニア向けの転職サポートはありますか？", a: "type女性の転職Agent、doda Woman Career等の女性特化型エージェントがあります。IT特化型エージェントと併用して、女性が活躍しているIT企業を効率的に探しましょう。" },
];

export default function WomanEngineerPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="女性エンジニアの転職ガイド【30代・40代】| ミドルエンジニア転職ラボ" description="女性エンジニアの転職を成功させるための完全ガイド。ライフイベントとキャリアの両立、女性が働きやすいIT企業の見つけ方、年収アップの方法を解説します。" url="/knowledge/woman-engineer/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "女性エンジニアの転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">女性エンジニアの転職ガイド【30代・40代】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ライフイベントとキャリアを両立する転職戦略</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">女性エンジニアの転職市場は年々拡大しています。IT業界のダイバーシティ推進により、女性が活躍できる環境は着実に整ってきました。ライフイベントとキャリアの両立を支援する制度も充実しています。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ライフステージ別・転職のポイント</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ライフステージ</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">転職のポイント</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認すべき制度</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">30代前半（出産前）</td><td className="border border-slate-200 px-4 py-3 text-slate-600">キャリアアップに集中できる時期</td><td className="border border-slate-200 px-4 py-3 text-slate-600">育休制度、産前産後休暇</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">30代後半（育児中）</td><td className="border border-slate-200 px-4 py-3 text-slate-600">WLBと成長を両立できる企業選び</td><td className="border border-slate-200 px-4 py-3 text-slate-600">時短勤務、リモート、フレックス</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">40代（育児落ち着き）</td><td className="border border-slate-200 px-4 py-3 text-slate-600">マネジメントや専門性で年収アップ</td><td className="border border-slate-200 px-4 py-3 text-slate-600">昇進制度、評価の透明性</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">女性エンジニアが転職で成功するための5つの戦略</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ライフプランを見据えた企業選び", desc: "今だけでなく5年後の自分のライフステージを想像して企業を選びましょう。育休実績、時短制度、復帰支援が充実しているかを確認。" },
              { num: "2", title: "技術力で評価される環境を選ぶ", desc: "成果ベースの評価制度がある企業なら、時短勤務でもフルタイムと同等の評価を受けられます。" },
              { num: "3", title: "ロールモデルがいる企業を選ぶ", desc: "女性エンジニアの管理職がいる企業は、女性のキャリアアップに理解があるシグナルです。面接で聞いてみましょう。" },
              { num: "4", title: "リモートワーク・フレックスを条件にする", desc: "子育てとの両立にはリモートワークとフレックスが不可欠。これらが制度として定着している企業を選びましょう。" },
              { num: "5", title: "年収交渉を遠慮しない", desc: "「女性だから」「時短だから」と年収を低く見積もる必要はありません。スキルに見合った年収を堂々と交渉しましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">女性が活躍しやすいIT企業の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 女性エンジニア比率が20%以上</h3><p className="text-sm text-blue-700">IT業界平均は約15%。20%以上の企業はダイバーシティに積極的に取り組んでいる証拠です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. 男性の育休取得実績がある</h3><p className="text-sm text-blue-700">男性の育休取得が進んでいる企業は、子育てへの理解が組織全体に浸透しています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 女性管理職が在籍している</h3><p className="text-sm text-blue-700">技術職の女性管理職がいれば、キャリアパスのロールモデルが見えます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 柔軟な働き方の制度が整っている</h3><p className="text-sm text-blue-700">リモート、フレックス、時短勤務、看護休暇など、制度が「ある」だけでなく「使われている」ことが重要です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. ハラスメント対策が明確</h3><p className="text-sm text-blue-700">相談窓口の設置、定期的な研修の実施など、ハラスメント対策が形骸化していない企業を選びましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">女性エンジニアの転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、女性が活躍しやすい企業の求人を紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "家庭持ちエンジニアの転職戦略", href: "/knowledge/family/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
