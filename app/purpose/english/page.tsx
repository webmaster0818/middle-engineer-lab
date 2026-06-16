import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "英語を活かすエンジニア転職【外資・グローバル企業の年収】",
  description:
    "英語力を活かせるエンジニア転職先を解説。外資系IT、グローバル企業、海外リモートの年収相場、必要な英語力レベル、転職成功事例を紹介します。",
};

const faqs = [
  {
    q: "エンジニアに必要な英語力のレベルは？",
    a: "外資系IT企業ではTOEIC 800点以上が目安です。ただし面接は英語で技術ディスカッションを行うため、スコアよりも実践的な英語力が重要です。技術ドキュメントの読み書きと英語ミーティングへの参加ができるレベルを目指しましょう。",
  },
  {
    q: "英語ができるとどれくらい年収が上がる？",
    a: "同じスキルレベルでも英語ができるエンジニアは年収が30〜80%高くなる傾向です。外資系ITのシニアエンジニアで1,000〜1,500万円、日系グローバル企業でも700〜1,000万円が相場です。",
  },
  {
    q: "英語力をつけるにはどう学習すべき？",
    a: "オンライン英会話（毎日25分）+ 英語の技術ドキュメント読解 + 英語のポッドキャスト/YouTubeが効率的です。6ヶ月〜1年の継続でビジネスレベルに到達できます。",
  },
  {
    q: "海外リモートワークは可能？",
    a: "可能です。GitLab、Automattic、Stripe等はグローバルリモートを採用しています。日本法人がなくてもコントラクターとして働けるケースも。税務・ビザの確認が必要です。",
  },
  {
    q: "英語面接の対策方法は？",
    a: "STAR法で過去の経験を英語で語る練習、技術用語の英語表現の習得、模擬面接（オンライン英会話のビジネスコース）が有効です。事前に想定質問と回答を用意しておきましょう。",
  },
  {
    q: "TOEIC何点から外資系に応募できる？",
    a: "最低でも700点、推奨は800点以上です。ただしTOEICスコアよりも実際のコミュニケーション能力が重視されます。スコアが低くても実務で英語を使った経験があればアピールできます。",
  },
];

export default function EnglishPage() {
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
      <ArticleJsonLd title="英語を活かすエンジニア転職【外資・グローバル企業の年収】" description="英語力を活かせるエンジニア転職先を解説。外資系IT、グローバル企業、海外リモートの年収相場、必要な英語力レベル、転職成功事例を紹介します。" url="/purpose/english/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "英語を活かすエンジニア転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">英語を活かすエンジニア転職</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 英語力×エンジニアスキルで年収を最大化</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- TOEIC 700点以上で英語力を活かしたい</li>
              <li>- 外資系IT企業で高年収を目指したい</li>
              <li>- グローバルチームで働く経験を積みたい</li>
              <li>- 将来的に海外勤務や海外リモートワークをしたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">英語力レベル別の年収比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">英語力レベル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収レンジ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">応募可能企業</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収UP幅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "TOEIC 600〜700", salary: "500〜700万円", target: "日系グローバル（英語使用少）", up: "+0〜50万円" },
                  { level: "TOEIC 700〜800", salary: "600〜900万円", target: "日系グローバル・外資系一部", up: "+50〜150万円" },
                  { level: "TOEIC 800〜900", salary: "700〜1,200万円", target: "外資系IT・海外チーム", up: "+100〜300万円" },
                  { level: "TOEIC 900+/ネイティブ", salary: "900〜2,000万円", target: "GAFAM・海外リモート", up: "+200〜500万円" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.level}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.target}</td>
                    <td className="px-4 py-3 text-slate-600 font-medium text-petrol">{row.up}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">英語×エンジニアの転職戦略</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "LinkedInプロフィールを英語で充実させる", desc: "外資系のリクルーターはLinkedInで人材を探します。英語のプロフィール、スキル、経歴を充実させましょう。" },
              { num: "2", title: "英語でのアウトプットを増やす", desc: "英語の技術ブログ、英語でのOSSコントリビューション、海外カンファレンスでの登壇が強力なアピール材料になります。" },
              { num: "3", title: "外資系特化のエージェントを活用", desc: "ロバート・ウォルターズ、エンワールド、ヘイズなど外資系に強いエージェントに登録しましょう。" },
              { num: "4", title: "コーディング面接を英語で練習", desc: "LeetCodeの問題を英語で解く、mock interviewを英語で受けるなど、英語での技術面接に慣れましょう。" },
              { num: "5", title: "英語力の証明を用意する", desc: "TOEICスコア、英語での業務経験、英語のプレゼン資料など、英語力を客観的に証明する材料を準備しましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "ロバート・ウォルターズ", point: "外資系IT専門。英語面接対策も充実。バイリンガルのアドバイザーが在籍。" },
              { name: "エンワールド・ジャパン", point: "外資系・グローバル企業に特化。年収交渉力が高い。" },
              { name: "ビズリーチ", point: "外資系からの直接スカウトが届く。ハイクラス求人が豊富。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600">{agent.point}</p>
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
          <h2 className="text-xl font-bold mb-3">英語力を活かす転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">外資系・グローバル企業への転職をプロがサポートします。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "日系→外資系IT転職ガイド", href: "/career/domestic-to-foreign/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
