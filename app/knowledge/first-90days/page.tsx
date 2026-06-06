import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職後90日間の過ごし方【信頼構築】| ミドルエンジニア転職ラボ",
  description:
    "転職後の最初の90日間で信頼を構築し成果を出すための具体的な行動計画を解説。30代・40代エンジニアが新しい職場で成功するためのロードマップを紹介します。",
};

const faqs = [
  { q: "転職後、最初の90日間で最も重要なことは？", a: "「信頼の貯金」を作ることです。最初の90日で周囲から信頼される行動を積み重ねると、その後のキャリアが格段にスムーズになります。逆にここで躓くと取り戻すのに何倍もの時間がかかります。" },
  { q: "即戦力として期待されるプレッシャーにどう対処すべきですか？", a: "30代・40代の中途入社は即戦力を期待されがちですが、最初の1ヶ月は「理解する期間」と割り切りましょう。上司と期待値を事前にすり合わせ、3ヶ月後のゴールを明確にすることが重要です。" },
  { q: "前職と文化が違いすぎて戸惑います", a: "違いは「学び」です。前職の文化を基準に批判するのではなく、新しい文化の良い面を見つけましょう。3ヶ月もすれば慣れます。どうしても合わない場合は上司に相談してみましょう。" },
  { q: "技術スタックが違う場合のキャッチアップ方法は？", a: "まずチームの先輩にキャッチアップ計画を相談しましょう。公式ドキュメントの読み込み、既存コードの読解、ペアプロでの学習が効果的です。業務時間外の自主学習も最初の3ヶ月は必要になる場合があります。" },
  { q: "90日間の目標設定はどうすべきですか？", a: "上司と「30日後、60日後、90日後」のマイルストーンを設定しましょう。30日：環境理解、60日：小〜中規模タスクの完了、90日：独力で機能開発ができるレベルが一般的な目標です。" },
  { q: "90日間を過ぎても馴染めない場合はどうすべきですか？", a: "まず上司や人事に相談しましょう。それでも改善しない場合は、転職エージェントに相談して次の選択肢を検討することも視野に入れてください。ただし短期離職はキャリアに影響するため慎重に判断しましょう。" },
];

export default function First90DaysPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="転職後90日間の過ごし方【信頼構築】| ミドルエンジニア転職ラボ" description="転職後の最初の90日間で信頼を構築し成果を出すための具体的な行動計画を解説。30代・40代エンジニアが新しい職場で成功するためのロードマップを紹介します。" url="/knowledge/first-90days/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "転職後90日間" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">転職後90日間の過ごし方【信頼構築】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 最初の90日で新しい職場を味方にする方法</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">「最初の90日間で転職の成否が決まる」と言われるほど、入社直後の行動は重要です。30代・40代のミドルエンジニアが即戦力として信頼を獲得するための具体的なロードマップを紹介します。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">90日間ロードマップ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">期間</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">テーマ</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体的なアクション</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ゴール</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">1〜30日</td><td className="border border-slate-200 px-4 py-3 text-slate-600">理解する</td><td className="border border-slate-200 px-4 py-3 text-slate-600">コードベースの把握、チームの文化を学ぶ、1on1の実施</td><td className="border border-slate-200 px-4 py-3 text-slate-600">環境への適応</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">31〜60日</td><td className="border border-slate-200 px-4 py-3 text-slate-600">貢献する</td><td className="border border-slate-200 px-4 py-3 text-slate-600">中規模タスクの完了、コードレビュー参加、改善提案</td><td className="border border-slate-200 px-4 py-3 text-slate-600">最初の成果を出す</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">61〜90日</td><td className="border border-slate-200 px-4 py-3 text-slate-600">リードする</td><td className="border border-slate-200 px-4 py-3 text-slate-600">機能の設計・実装、技術的な提案、チームへの貢献</td><td className="border border-slate-200 px-4 py-3 text-slate-600">独り立ち・信頼の確立</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各フェーズで意識すべきこと</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">第1フェーズ（1〜30日）</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・全メンバーとの1on1を実施</li>
                <li>・開発環境の完全セットアップ</li>
                <li>・アーキテクチャ図を自分で描く</li>
                <li>・オンボーディングの改善点をメモ</li>
                <li>・最初のPRを出す</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">第2フェーズ（31〜60日）</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>・中規模の機能開発を完了</li>
                <li>・コードレビューで建設的な指摘</li>
                <li>・チームのドキュメント整備に貢献</li>
                <li>・技術的な改善提案を1つ以上する</li>
                <li>・上司と中間振り返りを実施</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-3">第3フェーズ（61〜90日）</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>・機能の設計から実装まで独力で担当</li>
                <li>・チームの意思決定に参加</li>
                <li>・新しいメンバーのサポート</li>
                <li>・3ヶ月の振り返りと次の目標設定</li>
                <li>・自分の強みを活かした貢献を確立</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">90日間で避けるべきNG行動</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. 前職の話ばかりする</h3><p className="text-sm text-blue-700">「前の会社では〜」を連発すると、チームメンバーから距離を置かれます。聞かれた場合のみ答えましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. いきなり大きな変革を提案する</h3><p className="text-sm text-blue-700">現状の問題点が見えても、まず「なぜそうなっているか」を理解する。3ヶ月後に段階的に提案するのが正解です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 一人で抱え込む</h3><p className="text-sm text-blue-700">分からないことを質問せず一人で悩むと、チームとの距離が広がります。積極的にコミュニケーションを取りましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 最初から完璧を目指す</h3><p className="text-sm text-blue-700">最初のPRは完璧でなくて良いです。フィードバックを受けて学ぶ姿勢が評価されます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. チームイベントを断る</h3><p className="text-sm text-blue-700">ランチ、飲み会、チームイベントには可能な限り参加しましょう。人間関係の構築は最初の90日が最も効果的です。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転職後のキャリア相談もエージェントに</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントは転職後のフォローも充実。入社後の悩みがあれば気軽に相談できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "オンボーディング成功法", href: "/knowledge/onboarding/" },
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
