import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "フリーランスvs正社員【40代エンジニアはどっちが得？】",
  description:
    "40代エンジニアはフリーランスと正社員どちらが得か？年収・手取り・安定性・自由度を徹底比較。フリーランス転向のメリット・デメリットと判断基準を解説します。",
};

const faqs = [
  {
    q: "フリーランスの方が年収は高くなる？",
    a: "額面では高くなるケースが多いです。40代のフリーランスエンジニアの月単価は70万〜120万円（年収840万〜1,440万円）。ただし社会保険料や経費を自己負担するため、手取りベースでは正社員年収の1.3〜1.5倍の額面が必要です。",
  },
  {
    q: "40代からフリーランスに転向しても仕事はある？",
    a: "あります。40代のシニアエンジニアはフリーランス市場でも需要が高いです。特にアーキテクチャ設計、テックリード、大規模システムのリファクタリングなど、経験が求められる案件では40代が重宝されます。",
  },
  {
    q: "フリーランスの案件が途切れるリスクは？",
    a: "ゼロではありませんが、IT業界は慢性的な人材不足のため、スキルがあれば案件が途切れることは少ないです。複数のフリーランスエージェントに登録し、案件終了の1〜2ヶ月前から次の案件を探し始めるのが安全です。",
  },
  {
    q: "フリーランスになると住宅ローンは組めなくなる？",
    a: "審査が厳しくなるのは事実です。フリーランスは安定収入の証明が難しいため、開業後2〜3年の実績が必要です。住宅購入を考えている場合は、正社員のうちにローンを組んでおくことをおすすめします。",
  },
  {
    q: "正社員に戻ることは可能？",
    a: "可能です。フリーランスから正社員に戻るエンジニアは少なくありません。フリーランス期間の経験は実務経験として評価されるため、むしろスキルの幅が広がった状態で正社員に復帰できます。",
  },
  {
    q: "フリーランスエンジニアにおすすめのエージェントは？",
    a: "レバテックフリーランス（案件数No.1）、ITプロパートナーズ（週3日案件あり）、Midworks（正社員並みの福利厚生）がおすすめです。正社員からの転向なら、まずレバテックキャリアで市場価値を確認してからの判断が安全です。",
  },
];

export default function FreelanceVsFulltimePage() {
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
        title="フリーランスvs正社員【40代エンジニアはどっちが得？】"
        description="40代エンジニアはフリーランスと正社員どちらが得か？年収・手取り・安定性・自由度を徹底比較。フリーランス転向のメリット・デメリットと判断基準を解説します。"
        url="/knowledge/freelance-vs-fulltime/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "フリーランスvs正社員" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランスvs正社員【40代エンジニアはどっちが得？】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 40代エンジニアの働き方比較ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            40代になると「このまま正社員を続けるか、フリーランスに転向するか」を考えるエンジニアが増えます。年収だけを見ればフリーランスが有利に見えますが、実際にはメリット・デメリットの両面があります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、年収・手取り・安定性・自由度の観点からフリーランスと正社員を徹底比較し、40代エンジニアの最適な判断基準を解説します。
          </p>
        </section>

        {/* 比較表 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスvs正社員 徹底比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">項目</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">フリーランス</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">正社員</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "年収（額面）", free: "840万〜1,440万円", full: "650万〜1,000万円" },
                  { item: "手取り目安", free: "額面の65〜75%", full: "額面の75〜80%" },
                  { item: "社会保険", free: "全額自己負担", full: "会社が半額負担" },
                  { item: "退職金", free: "なし（小規模企業共済で代替可）", full: "あり（企業による）" },
                  { item: "有給休暇", free: "なし（休み=収入減）", full: "年20日程度" },
                  { item: "案件選択の自由", free: "高い", full: "低い（異動リスク）" },
                  { item: "収入の安定性", free: "変動あり", full: "安定" },
                  { item: "スキルアップ", free: "自己責任", full: "研修制度あり" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.free}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* フリーランスのメリット */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代がフリーランスを選ぶメリット</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収の天井がない</h3>
              <p className="text-sm text-blue-700">
                正社員は昇給に上限がありますが、フリーランスは単価次第で収入が青天井です。高い専門性を持つ40代エンジニアなら、月単価100万円以上も珍しくありません。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">案件を選べる</h3>
              <p className="text-sm text-blue-700">
                やりたくない仕事や相性の悪いチームを避けることができます。40代になると「何をやるか」だけでなく「誰と働くか」も重要になるため、この自由度は大きなメリットです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">社内政治から解放される</h3>
              <p className="text-sm text-blue-700">
                評価制度、社内調整、出世競争など、正社員ならではのストレスから解放されます。純粋に技術で評価される環境を求める人にフリーランスは適しています。
              </p>
            </div>
          </div>
        </section>

        {/* 正社員のメリット */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代が正社員を選ぶメリット</h2>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">収入の安定性</h3>
              <p className="text-sm text-green-700">
                住宅ローン、子供の教育費など、40代は固定支出が多い時期です。毎月確実に給与が入る正社員の安定性は大きなメリットです。
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">福利厚生・退職金</h3>
              <p className="text-sm text-green-700">
                社会保険の会社負担、退職金、確定拠出年金、持株会、住宅補助など、正社員の福利厚生は額面年収に現れない大きな価値があります。年間100万〜200万円の差になることもあります。
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">組織的な成長機会</h3>
              <p className="text-sm text-green-700">
                チームビルディング、組織づくり、技術戦略の策定など、正社員でしか得られない経験があります。CTO、VPoEを目指す場合は正社員としてのマネジメント経験が不可欠です。
              </p>
            </div>
          </div>
        </section>

        {/* 判断基準 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスに向いている人・正社員に向いている人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">フリーランス向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>- 特定技術に深い専門性がある</li>
                <li>- 自己管理能力が高い</li>
                <li>- 住宅ローンを既に組んでいる</li>
                <li>- 営業や交渉が苦にならない</li>
                <li>- 技術に集中したい</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">正社員向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>- 安定収入が必要な家族構成</li>
                <li>- マネジメントに興味がある</li>
                <li>- 組織づくりに携わりたい</li>
                <li>- 福利厚生を重視する</li>
                <li>- CTO/VPoEを目指したい</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">まずは市場価値を把握することから始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランスと正社員、どちらが自分に合っているか迷ったら、まずは転職エージェントに相談して市場価値を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
