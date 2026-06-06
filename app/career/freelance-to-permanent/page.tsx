import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "フリーランス→正社員に戻る転職ガイド【2026年版】",
  description:
    "フリーランスエンジニアから正社員に戻るための転職戦略、年収交渉、面接対策、フリーランス経験の活かし方を具体的に解説します。",
};

const faqs = [
  {
    q: "フリーランスから正社員に戻る理由で多いのは？",
    a: "「安定した収入が欲しい」「チーム開発がしたい」「福利厚生（社会保険・退職金）が欲しい」「営業活動が負担」「住宅ローンを組みたい」が上位です。",
  },
  {
    q: "フリーランス経験は正社員の面接で不利になる？",
    a: "いいえ、むしろ自走力や幅広い技術経験として評価されます。ただし「組織に合わせられるか」という懸念を持たれるため、チームワークやコミュニケーション力をアピールすることが重要です。",
  },
  {
    q: "年収はフリーランス時代より下がる？",
    a: "手取りベースでは下がることが多いです。ただし社会保険料の折半、有給休暇、退職金、住宅手当などを含めた実質報酬で比較すると、同等かそれ以上になるケースもあります。",
  },
  {
    q: "フリーランス期間はブランクとみなされる？",
    a: "正規の職歴として認められます。ただし案件の内容を具体的に説明できるよう、担当プロジェクトの概要、使用技術、成果をまとめておきましょう。",
  },
  {
    q: "正社員に戻るベストなタイミングは？",
    a: "現在の案件が区切りの良いタイミング、または次の案件が決まる前がベストです。フリーランスの場合、2〜3ヶ月前から転職活動を始めると空白期間なく移行できます。",
  },
  {
    q: "フリーランス→正社員の年収交渉のコツは？",
    a: "フリーランス時代の月単価を年収換算し、社会保険料や経費を考慮した「実質年収」で交渉しましょう。月80万円のフリーランスなら正社員換算で700〜750万円が妥当な交渉ラインです。",
  },
];

export default function FreelanceToPermanentPage() {
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
        title="フリーランス→正社員に戻る転職ガイド【2026年版】"
        description="フリーランスエンジニアから正社員に戻るための転職戦略、年収交渉、面接対策、フリーランス経験の活かし方を具体的に解説します。"
        url="/career/freelance-to-permanent/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "フリーランス→正社員転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランス→正社員に戻る転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | フリーランスから正社員へ戻る際の完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            フリーランスとして活動してきたエンジニアが正社員に戻るケースは珍しくありません。安定した収入、チーム開発の環境、福利厚生など、正社員ならではのメリットを求める方が増えています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員復帰の年収比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">正社員年収</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フリーランス経験の活用度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "テックリード", salary: "700〜1,000万円", diff: "★★★", use: "非常に高い" },
                  { pos: "シニアエンジニア", salary: "600〜850万円", diff: "★★☆", use: "高い" },
                  { pos: "フルスタック", salary: "550〜800万円", diff: "★★☆", use: "高い" },
                  { pos: "EM候補", salary: "700〜950万円", diff: "★★★", use: "中程度" },
                  { pos: "技術顧問（副業可）", salary: "500〜700万円+副業収入", diff: "★★☆", use: "非常に高い" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員復帰を成功させるポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "フリーランス経験を強みに変換する", desc: "複数プロジェクトの経験、技術選定の実績、クライアントワーク力を「組織に貢献できるスキル」として言語化しましょう。" },
              { num: "2", title: "チームワーク力をアピールする", desc: "フリーランス時代のチーム開発経験、コードレビュー、メンタリングなどの協業経験を具体的に示しましょう。" },
              { num: "3", title: "副業OKの企業を探す", desc: "完全に正社員に戻るのが不安な場合、副業OKの企業で段階的に移行するのも有効です。" },
              { num: "4", title: "年収交渉は実質報酬で比較する", desc: "フリーランス月単価×12ヶ月ではなく、社保・経費・有休を考慮した実質年収で交渉しましょう。" },
              { num: "5", title: "カルチャーフィットを重視する", desc: "自由度の高い環境から組織に入るため、フレックス制度やリモートワーク可能な企業を選ぶとギャップが少ないです。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職成功事例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">36歳 フリーランス4年 / React + Go + AWS</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">フリーランス収入</span>
                <span className="text-slate-600">月85万円（年間手取り約750万円）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">SaaS企業 テックリード（副業OK）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">800万円 + 副業収入（実質UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "フリーランス→正社員の転職実績が豊富。副業OK求人も多い。" },
              { name: "Findy", point: "技術力でマッチング。フリーランス経験を正しく評価してくれる企業が多い。" },
              { name: "Green", point: "カジュアル面談でカルチャーフィットを事前確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">正社員復帰を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランス経験を最大限に評価してくれる企業をプロが提案します。
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
              { name: "フリーランスvs正社員比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
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
