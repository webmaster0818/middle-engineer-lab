import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニアからマネジメントへ【管理職転身ガイド】| ミドルエンジニア転職ラボ",
  description:
    "エンジニアからマネジメント職への転身を徹底解説。EM・VPoE・CTOのキャリアパス、必要スキル、年収比較、適性チェックを30代・40代エンジニア向けにガイドします。",
};

const faqs = [
  {
    q: "エンジニアからマネジメントに転身すべきタイミングは？",
    a: "一般的には30代前半〜中盤がベストタイミングです。技術力が十分に身についた上で、チームリードやメンター経験を積んでいれば、EMへの転身がスムーズです。40代からの転身も可能ですが、早めにマネジメント経験を積んでおくと有利です。",
  },
  {
    q: "マネジメント職に転身すると技術力は落ちる？",
    a: "コードを書く時間は確実に減りますが、技術力の維持は本人の努力次第です。多くのEMは週1〜2日のコーディング時間を確保したり、コードレビューを通じて技術に触れ続けています。技術を完全に離れたい場合はPdM、離れたくない場合はテックリードが選択肢になります。",
  },
  {
    q: "EMとテックリードの違いは？",
    a: "EMはピープルマネジメント（1on1、評価、採用、チームビルディング）が中心。テックリードは技術的意思決定（設計、アーキテクチャ、技術選定）が中心です。両方を兼務するケースもありますが、企業規模が大きいほど分離される傾向があります。",
  },
  {
    q: "マネジメント職の年収はエンジニアより高い？",
    a: "一般的にはマネジメント職の方が高い傾向です。EMで700〜1,000万円、VPoEで1,000〜1,500万円、CTOで1,200〜2,000万円以上が目安です。ただし、シニアICやプリンシパルエンジニアとして技術を極める道でも同等以上の年収は可能です。",
  },
  {
    q: "マネジメント未経験でもEM職に応募できる？",
    a: "チームリードやメンター経験があれば応募可能です。3〜5人のチームを率いた経験、1on1の実施経験、採用面接の参加経験など、部分的なマネジメント経験をアピールしましょう。エージェントを通じて「EM候補」ポジションを探すのもおすすめです。",
  },
  {
    q: "マネジメント職への転職にはどのエージェントがおすすめ？",
    a: "レバテックキャリア（EM/VPoE求人あり）、ビズリーチ（CTO/VPoEのハイクラス求人）がおすすめです。マネジメント職は非公開求人が多いため、エージェントの活用が必須です。",
  },
];

const careerPaths = [
  { role: "EM（Engineering Manager）", salary: "700〜1,000万円", focus: "ピープルマネジメント、チームビルディング、1on1、評価", entry: "テックリードやシニアエンジニアから" },
  { role: "VPoE（VP of Engineering）", salary: "1,000〜1,500万円", focus: "エンジニアリング組織全体のマネジメント、採用戦略、技術戦略", entry: "EM経験3年以上から" },
  { role: "CTO（Chief Technology Officer）", salary: "1,200〜2,000万円+", focus: "技術ビジョン、経営参画、技術投資判断、対外発信", entry: "VPoE経験またはスタートアップCTO経験から" },
  { role: "PdM（Product Manager）", salary: "700〜1,200万円", focus: "プロダクト戦略、ロードマップ、KPI管理、ステークホルダー調整", entry: "エンジニア＋ビジネス理解から" },
];

export default function ManagementPage() {
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
        title="エンジニアからマネジメントへ【管理職転身ガイド】"
        description="エンジニアからマネジメント職への転身を徹底解説。EM・VPoE・CTOのキャリアパス、必要スキル、年収比較を紹介します。"
        url="/knowledge/management/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "マネジメント転身ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアからマネジメントへ【管理職転身ガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | EM・VPoE・CTOへのキャリアパス
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代のエンジニアにとって、マネジメント職への転身は大きなキャリアの分岐点です。「技術を続けるか、マネジメントに進むか」は多くのエンジニアが悩むテーマです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、マネジメント転身の適性チェック、EM/VPoE/CTOのキャリアパス、必要スキル、年収比較を詳しく解説します。
          </p>
        </section>

        {/* 適性チェック */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マネジメント転身の適性チェック</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 mb-4">以下に3つ以上当てはまる場合、マネジメント職への適性が高い可能性があります。</p>
            <div className="space-y-3">
              {[
                "メンバーの成長を見ることにやりがいを感じる",
                "技術的な課題よりも、チームの課題解決に興味がある",
                "1on1やコードレビューで的確なフィードバックができる",
                "プロジェクト全体を俯瞰して計画を立てるのが得意",
                "採用面接に参加して人を見極めるのが好き",
                "社内外のステークホルダーとの調整が苦にならない",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* キャリアパスと年収比較テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EM / VPoE / CTOのキャリアパスと年収</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">役職</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収レンジ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な業務</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">なり方</th>
                </tr>
              </thead>
              <tbody>
                {careerPaths.map((path, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{path.role}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{path.salary}</td>
                    <td className="px-3 py-3 border border-slate-200">{path.focus}</td>
                    <td className="px-3 py-3 border border-slate-200">{path.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 年収は2026年6月時点の概算。企業規模・業界により異なります。</p>
        </section>

        {/* 必要スキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マネジメント職に必要なスキル</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ピープルマネジメント</h3>
              <p className="text-sm text-blue-700">
                1on1の実施、目標設定（OKR/MBO）、評価・フィードバック、キャリア面談、コンフリクト解決。メンバーのモチベーション管理と成長支援が最重要。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロジェクトマネジメント</h3>
              <p className="text-sm text-blue-700">
                見積もり、スケジュール管理、リスク管理、ステークホルダーへの報告。アジャイル/スクラムの実践経験は必須。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">採用・組織設計</h3>
              <p className="text-sm text-blue-700">
                求人票作成、面接設計、オンボーディング、チーム構成の最適化。特にEMは採用への関与が大きい。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術的意思決定力</h3>
              <p className="text-sm text-blue-700">
                アーキテクチャ選定、技術的負債の優先順位判断、Make or Buy判断。マネジメント職でも技術力は必要。
              </p>
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
          <h2 className="text-xl font-bold mb-3">マネジメント職のキャリアを相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、EM/VPoE/CTOの求人を含むマネジメント職のキャリア相談が無料で受けられます。
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
              { name: "エンジニア転職の年齢差別", href: "/knowledge/age-discrimination/" },
              { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
              { name: "年収交渉の完全ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
