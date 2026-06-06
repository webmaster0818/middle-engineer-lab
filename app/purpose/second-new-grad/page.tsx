import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "第二新卒エンジニアの転職戦略【1〜3年目の最適な動き方】",
  description:
    "第二新卒（入社1〜3年目）のエンジニア向け転職戦略を解説。転職すべきタイミング、年収変化、おすすめ企業、面接対策を紹介します。",
};

const faqs = [
  {
    q: "第二新卒の定義は？",
    a: "一般的に新卒入社後1〜3年目の社会人を指します。エンジニアの場合、実務経験1〜3年で転職を考える層です。「未経験」ではないが「即戦力」でもないポテンシャル採用の対象です。",
  },
  {
    q: "入社1年で転職するのは早すぎる？",
    a: "ケースバイケースです。明確な理由（技術的な成長が見込めない、パワハラ等）があれば1年でも問題ありません。ただし「なぜ1年で転職するのか」を面接で論理的に説明できる準備が必要です。",
  },
  {
    q: "第二新卒の年収相場は？",
    a: "経験1年で350〜450万円、2年で400〜500万円、3年で450〜550万円が相場です。スキル次第では3年目でも600万円以上のオファーを受けるケースもあります。",
  },
  {
    q: "第二新卒で転職すると年収は上がる？",
    a: "初めての転職で50〜100万円アップするケースが多いです。特にSIer→Web系、SES→自社開発への転職では年収が上がりやすい傾向があります。",
  },
  {
    q: "第二新卒はポテンシャル採用される？",
    a: "はい、第二新卒はポテンシャル採用（経験より成長意欲を重視）で採用されるケースが多いです。技術力よりも学習意欲、コミュニケーション力、チームへの適応力が評価されます。",
  },
  {
    q: "第二新卒の転職で失敗しないコツは？",
    a: "「なぜ転職するのか」「次の会社で何を実現したいか」を明確にすることです。単に「今の会社が嫌だから」ではなく、キャリアのビジョンを持って転職活動をしましょう。",
  },
];

export default function SecondNewGradPage() {
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
      <ArticleJsonLd title="第二新卒エンジニアの転職戦略【1〜3年目の最適な動き方】" description="第二新卒（入社1〜3年目）のエンジニア向け転職戦略を解説。転職すべきタイミング、年収変化、おすすめ企業、面接対策を紹介します。" url="/purpose/second-new-grad/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "第二新卒エンジニアの転職戦略" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">第二新卒エンジニアの転職戦略</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 入社1〜3年目の最適な転職戦略</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 入社1〜3年目で今の環境に不満がある</li>
              <li>- SES/受託から自社開発に行きたい</li>
              <li>- モダンな技術を使える環境に移りたい</li>
              <li>- 年収をもっと上げたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別の年収比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">経験年数</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収相場</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">採用タイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">転職UP幅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { exp: "1年目", salary: "350〜450万円", type: "ポテンシャル採用", up: "+30〜80万円" },
                  { exp: "2年目", salary: "400〜500万円", type: "ポテンシャル＋経験", up: "+50〜100万円" },
                  { exp: "3年目", salary: "450〜600万円", type: "経験者採用", up: "+50〜150万円" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.exp}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600 font-medium text-blue-600">{row.up}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">第二新卒の転職成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "転職理由をポジティブに言語化する", desc: "「もっと技術力を伸ばしたい」「プロダクト開発に携わりたい」など、前向きな動機を準備しましょう。ネガティブな理由は裏返して伝えること。" },
              { num: "2", title: "ポートフォリオを用意する", desc: "経験が浅い分、個人開発やGitHubの活動で技術力をアピールしましょう。学習意欲の証明になります。" },
              { num: "3", title: "第二新卒歓迎の企業を狙う", desc: "多くの企業が第二新卒枠を設けています。ポテンシャル採用で入社し、社内で成長するルートも有効です。" },
              { num: "4", title: "3年目まで待つべきかの判断基準", desc: "現職で成長できているなら3年まで待つのも一手。成長が止まっていると感じるなら早めの転職が有利です。" },
              { num: "5", title: "複数エージェントに相談する", desc: "第二新卒の転職は情報戦です。3社以上のエージェントに相談して、市場の反応を確認しましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
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
              { name: "マイナビITエージェント", point: "第二新卒向けの求人が豊富。20代エンジニアの転職サポートに強い。" },
              { name: "レバテックキャリア", point: "技術力を正しく評価。第二新卒でもスキルに応じた高年収求人を紹介。" },
              { name: "Green", point: "カジュアル面談で企業文化を確認できる。第二新卒歓迎企業が多い。" },
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
          <h2 className="text-xl font-bold mb-3">第二新卒の転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">第二新卒エンジニア専門のアドバイザーがキャリアプランを提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SE→Web系エンジニア転職", href: "/career/se-to-web/" },
              { name: "自社開発企業への転職ガイド", href: "/purpose/jigyoukaihatsu/" },
              { name: "技術力を伸ばせる企業の選び方", href: "/purpose/growth/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
