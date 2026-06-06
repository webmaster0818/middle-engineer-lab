import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職先でのオンボーディング成功法 | ミドルエンジニア転職ラボ",
  description:
    "転職先でのオンボーディングを成功させる方法を解説。30代・40代エンジニアが新しい職場で早期に信頼を獲得し、パフォーマンスを発揮するためのコツを紹介します。",
};

const faqs = [
  { q: "オンボーディング期間はどのくらいが目安ですか？", a: "一般的に1〜3ヶ月が目安です。最初の1ヶ月は環境のセットアップと社内ルールの理解、2〜3ヶ月目で小さなタスクから成果を出し始めるのが理想的です。完全に独り立ちするまでには3〜6ヶ月かかることが多いです。" },
  { q: "前職のやり方を新しい職場に持ち込んでも良いですか？", a: "最初の3ヶ月は「まず理解する」姿勢が重要です。前職のやり方が優れていても、いきなり変革を提案すると反感を買う可能性があります。信頼を築いた上で段階的に提案しましょう。" },
  { q: "分からないことを質問するのが恥ずかしいです", a: "30代・40代の転職者が「質問できない」のは最大のリスクです。経験年数に関わらず、新しい環境では分からないことがあって当然。むしろ積極的に質問する姿勢が好印象を与えます。" },
  { q: "既存メンバーと良好な関係を築くコツは？", a: "まずはコードレビューやペアプロで技術的な接点を作りましょう。ランチや雑談の場にも積極的に参加し、人となりを知ってもらうことが重要です。リモート環境ならバーチャルコーヒーチャットが有効です。" },
  { q: "成果を出すまでの焦りにどう対処すべきですか？", a: "最初の1ヶ月は「成果を出すこと」より「環境を理解すること」に集中しましょう。コードベースの理解、開発フローの把握、チームメンバーとの関係構築が先です。焦らず基盤を固めることが中期的な成果につながります。" },
  { q: "オンボーディングがうまくいかない場合はどうすべきですか？", a: "上司や人事に正直に相談しましょう。オンボーディングの改善は企業側にもメリットがあるため、前向きに対応してくれるはずです。それでも改善しない場合は、試用期間中の判断として転職エージェントに相談することも選択肢です。" },
];

export default function OnboardingPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="転職先でのオンボーディング成功法 | ミドルエンジニア転職ラボ" description="転職先でのオンボーディングを成功させる方法を解説。30代・40代エンジニアが新しい職場で早期に信頼を獲得し、パフォーマンスを発揮するためのコツを紹介します。" url="/knowledge/onboarding/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "オンボーディング成功法" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">転職先でのオンボーディング成功法</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 新しい職場で早期に活躍する方法</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">転職はゴールではなくスタートです。特に30代・40代のミドルエンジニアは「即戦力」を期待されるため、オンボーディング期間の過ごし方が非常に重要になります。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オンボーディング成功の5ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "初日〜1週目: 環境構築と挨拶", desc: "開発環境のセットアップ、社内ツールの把握、チームメンバーへの挨拶。自己紹介では前職の経験と今後の意気込みを簡潔に伝えましょう。" },
              { num: "2", title: "2〜3週目: コードベースの理解", desc: "既存のコードを読み、アーキテクチャ、命名規則、テスト方針を理解。分からない部分はメモして質問する習慣をつけましょう。" },
              { num: "3", title: "3〜4週目: 小さなタスクで成果を出す", desc: "バグ修正や小さな機能追加からスタート。最初のPRでチームのコードレビュー文化を体験し、チームのスタイルに合わせましょう。" },
              { num: "4", title: "2ヶ月目: 中規模タスクに挑戦", desc: "機能開発やリファクタリングなど、少し大きなタスクを担当。技術的な提案も少しずつ始めましょう。" },
              { num: "5", title: "3ヶ月目: 独り立ち", desc: "一人で設計・実装・レビューができる状態を目指す。チーム内での自分の役割を確立させましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オンボーディングで信頼を獲得する7つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 「まず聞く、次に理解する、最後に提案する」</h3><p className="text-sm text-blue-700">前職のやり方をすぐに持ち込むのではなく、まず現在の仕組みの背景を理解しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. ドキュメントを書く</h3><p className="text-sm text-blue-700">セットアップ手順、アーキテクチャの理解メモなどを書くと、次の新メンバーの助けになり、チームへの貢献として評価されます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 1on1を積極的に活用する</h3><p className="text-sm text-blue-700">上司との1on1で「今の自分の課題」「期待されていること」を確認しましょう。認識のズレを早期に修正できます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. コードレビューに積極的に参加する</h3><p className="text-sm text-blue-700">レビューを通じてチームのコーディングスタイルを学びつつ、建設的なフィードバックで信頼を獲得しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. Quick Winを見つける</h3><p className="text-sm text-blue-700">チームが困っている小さな問題を見つけて解決する。技術的負債の解消やCI/CDの改善など、すぐに成果が出るものがベストです。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">6. 謙虚さを持ちつつ存在感を示す</h3><p className="text-sm text-blue-700">「前の会社では〜」を連発しないこと。一方で、自分の経験を聞かれた場面では堂々と共有しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">7. チームの文化を尊重する</h3><p className="text-sm text-blue-700">スタンドアップの進め方、PRの書き方、コミュニケーションツールの使い方など、チームの文化に合わせましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転職後もキャリアの相談ができるエージェント</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントは転職後のフォローアップも充実。入社後の悩みも気軽に相談できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "スキルアップ戦略", href: "/knowledge/continuous-learning/" },
              { name: "試用期間中の転職", href: "/knowledge/probation/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
