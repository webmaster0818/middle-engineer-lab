import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PM(プロジェクトマネージャー)の転職ガイド【40代でも需要あり】",
  description:
    "PM(プロジェクトマネージャー)の転職市場を徹底解説。平均年収700-1000万円、40代でも需要あり、PdM転向、マネジメント経験の活かし方、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "PMの平均年収は？",
    a: "30代で700万〜900万円、40代で800万〜1,000万円が目安です。大手企業やコンサルのPMは1,000万〜1,500万円に達することもあります。PdM（プロダクトマネージャー）はさらに高く、800万〜1,300万円が相場です。",
  },
  {
    q: "40代のPMでも転職できますか？",
    a: "十分可能です。PM職は経験とマネジメントスキルが重視されるため、年齢による不利は少ない職種です。大規模プロジェクトの管理経験、複数チームの統括経験がある40代PMは非常に需要が高いです。",
  },
  {
    q: "PMとPdMの違いは？",
    a: "PM（プロジェクトマネージャー）はプロジェクトの進行管理・リソース管理・スケジュール管理が中心。PdM（プロダクトマネージャー）はプロダクトの戦略・ロードマップ策定・ユーザー価値最大化が中心です。PdMの方が年収が高い傾向です。",
  },
  {
    q: "エンジニアからPMに転向すべき？",
    a: "技術的バックグラウンドを持つPMは市場で非常に高く評価されます。開発チームとの円滑なコミュニケーション、技術的判断ができるPMは希少で、年収も高い傾向です。30代中盤でのPM転向が最も多いパターンです。",
  },
  {
    q: "PMにおすすめの資格は？",
    a: "PMP（Project Management Professional）が最も評価されます。IPAのプロジェクトマネージャ試験、Scrum Master認定資格も有効です。ただし、実務経験の方が資格より重視される傾向があります。",
  },
  {
    q: "PMにおすすめの転職エージェントは？",
    a: "リクルートエージェントIT（PM求人数最多）、ビズリーチ（ハイクラスPM求人）、レバテックキャリア（IT特化PM求人）の3社がおすすめです。PMは年収帯が高いため、ビズリーチとの相性が特に良いです。",
  },
];

export default function PmSkillPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別ガイド", href: "/#skill" },
          { name: "PM(プロジェクトマネージャー)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PM(プロジェクトマネージャー)の転職ガイド【40代でも需要あり】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 年齢問わず需要が高いPM職の転職市場を徹底解説
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMの転職市場【2026年最新】</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["求人数の傾向", "安定〜増加（DX推進で需要拡大）"],
                  ["平均年収（30代）", "700万〜900万円"],
                  ["平均年収（40代）", "800万〜1,000万円"],
                  ["平均年収（PdM）", "800万〜1,300万円"],
                  ["注目のトレンド", "アジャイルPM / PdM転向 / DX推進PM"],
                  ["強い業界", "IT / コンサル / 金融 / 製造業DX"],
                  ["リモートワーク", "55〜65%の求人でリモート可"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            PM（プロジェクトマネージャー）の需要は2026年も高水準を維持しています。DX推進プロジェクトの増加、アジャイル開発の普及により、技術的バックグラウンドを持つPMの価値がさらに高まっています。特に40代のPMは「大規模プロジェクト経験」「ステークホルダーマネジメント」「リスク管理」のスキルが高く評価され、年齢を問わず転職市場で引く手あまたの状況です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">PdM（プロダクトマネージャー）への転向</h3>
              <p className="text-sm text-blue-700">
                プロジェクト管理からプロダクト戦略へ。ユーザーリサーチ、ロードマップ策定、KPI設計を担い、プロダクトの成長を牽引します。年収800万〜1,300万円。SaaS企業・メガベンチャーで特に需要が高く、PM経験者のキャリアアップとして人気のルートです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">開発部門マネージャー / VPoE</h3>
              <p className="text-sm text-blue-700">
                複数チーム・プロジェクトの統括、組織マネジメント、技術戦略の策定を担当。年収900万〜1,500万円。PM経験で培ったプロジェクト管理力と、組織運営のスキルが求められます。40代のキャリアの集大成として目指す方が多いポジションです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">DX推進コンサルタント</h3>
              <p className="text-sm text-blue-700">
                企業のDX推進をリードするコンサルタント。業界知識、IT知識、プロジェクト管理力を活かし、クライアント企業のデジタル変革を支援します。年収800万〜1,200万円。大手コンサルファームやSIerで需要が高いポジションです。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数・年代別の年収目安</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代・役職</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">求められるスキル</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["30代前半 / PL", "600万〜750万円", "チーム管理、スケジュール管理"],
                  ["30代後半 / PM", "700万〜900万円", "プロジェクト統括、リスク管理"],
                  ["40代前半 / シニアPM", "800万〜1,050万円", "大規模PJ経験、ステークホルダー管理"],
                  ["40代後半 / PMO・部門長", "900万〜1,200万円", "組織運営、経営層との折衝"],
                ].map(([role, salary, skill], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{role}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マネジメント経験の活かし方</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">職務経歴書でのアピールポイント</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">1.</span>
                  プロジェクト規模（予算、チーム人数、期間）を具体的な数字で記載
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">2.</span>
                  成果を定量的に示す（納期遵守率、コスト削減率、品質改善率）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">3.</span>
                  困難なプロジェクトのリカバリ経験（炎上案件の立て直し等）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">4.</span>
                  ステークホルダーとの調整実績（経営層への報告、顧客折衝）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 shrink-0">5.</span>
                  アジャイル/スクラム開発の実践経験
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">PM/PdMのハイクラス求人が充実。年収800万以上のスカウトが多く、40代PMのキャリアアップに最適。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">PM求人数が業界最多級。大手企業・コンサルのPMポジションが豊富で、40代の転職実績も多数。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT特化のPM求人。Web系・SaaS企業のPM/PdMポジションが豊富で、技術的バックグラウンドを持つPMに強い。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
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
          <h2 className="text-xl font-bold mb-3">PMの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのマネジメント経験が今の市場でどう評価されるか、プロに相談してみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のスキル別ガイドも見る</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Javaエンジニア", href: "/skill/java/" },
              { name: "Pythonエンジニア", href: "/skill/python/" },
              { name: "フロントエンドエンジニア", href: "/skill/frontend/" },
              { name: "インフラエンジニア", href: "/skill/infrastructure/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
