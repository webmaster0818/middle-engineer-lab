import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "副業しながら転職活動【エンジニアの両立ガイド】| ミドルエンジニア転職ラボ",
  description:
    "エンジニアが副業と転職活動を両立する方法を徹底解説。副業のメリット、スケジュール例、副業の種類と収入、会社への伝え方、注意点を30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "副業しながら転職活動はできる？",
    a: "可能です。むしろ副業で得た実績やスキルは転職活動で大きなアピールポイントになります。ただし、現職の就業規則で副業が禁止されていないか確認が必要です。2026年時点で副業を容認している企業は約65%に達しています。",
  },
  {
    q: "副業で得た経験は職務経歴書に書ける？",
    a: "書けます。副業でのプロジェクト経験、使用技術、成果は本業と同様に記載可能です。特に本業では使わない技術スタック（例：本業はJava、副業はReact）を書くことでスキルの幅広さをアピールできます。",
  },
  {
    q: "副業の収入はどのくらい？",
    a: "エンジニアの副業収入は月5〜30万円が相場です。技術ブログやOSS活動は収入面より実績面でのメリットが大きく、受託開発やスポットCTO/技術顧問は月20〜50万円の高単価が期待できます。",
  },
  {
    q: "副業が転職先にバレるリスクは？",
    a: "確定申告を適切に行い、住民税を「自分で納付（普通徴収）」にすれば、現職にバレるリスクは低いです。ただしSNSでの発信や、競合他社での副業は避けましょう。転職先には面接で正直に伝えることをおすすめします。",
  },
  {
    q: "副業と転職活動の時間配分は？",
    a: "平日夜1〜2時間を副業、土曜を転職活動（書類作成・面接対策）に充てるのが一般的です。副業は自分のペースで調整可能なものを選び、転職活動の面接スケジュールを最優先にしましょう。",
  },
  {
    q: "転職後も副業を続けられる？",
    a: "転職先の就業規則を確認しましょう。IT企業の約65%が副業を容認していますが、競合への副業は禁止されているケースがほとんどです。面接時に「副業を続けたい」と伝え、入社前に条件を確認するのがベストです。",
  },
];

const sideProjects = [
  { type: "技術ブログ執筆", income: "月0〜5万円", difficulty: "低", merit: "技術力のアウトプット、執筆スキル向上、SEOで長期収益" },
  { type: "OSS活動・個人開発", income: "月0〜3万円", difficulty: "低〜中", merit: "GitHub実績、技術力証明、コミュニティでの評価" },
  { type: "プログラミング講師", income: "月5〜15万円", difficulty: "中", merit: "教える力、コミュニケーション力、安定収入" },
  { type: "受託開発（個人）", income: "月10〜30万円", difficulty: "中〜高", merit: "実務経験の幅、クライアントワーク経験、高収入" },
  { type: "技術顧問・スポットCTO", income: "月20〜50万円", difficulty: "高", merit: "マネジメント経験、高単価、短時間で高収入" },
  { type: "Udemy等の教材販売", income: "月3〜20万円", difficulty: "中", merit: "不労所得化、ブランディング、教育スキル" },
];

export default function SideProjectPage() {
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
        title="副業しながら転職活動【エンジニアの両立ガイド】"
        description="エンジニアが副業と転職活動を両立する方法を徹底解説。副業のメリット、スケジュール例、副業の種類と収入を紹介します。"
        url="/knowledge/side-project/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "副業しながら転職活動" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          副業しながら転職活動【エンジニアの両立ガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 副業×転職活動の両立ノウハウ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            副業はエンジニアの転職活動において大きな武器になります。副業で得た実績・スキル・ポートフォリオは、書類選考や面接で強力なアピールポイントになります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、副業と転職活動を両立するためのスケジュール例、副業の種類と収入、会社への伝え方、注意点を30代・40代エンジニア向けに解説します。
          </p>
        </section>

        {/* メリット */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業×転職のメリット</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "スキルの幅が広がる", desc: "本業では使わない技術スタックを副業で経験できる。例：本業Java → 副業React/TypeScript。スキルの掛け合わせで市場価値が大幅にUP。" },
              { num: "2", title: "実績・ポートフォリオが増える", desc: "副業での開発成果物やGitHub実績は、職務経歴書に記載可能。本業だけでは得られない実績が転職活動で差別化ポイントになる。" },
              { num: "3", title: "収入のリスクヘッジ", desc: "転職活動中も副業収入があることで、焦って妥協した転職をせずに済む。精神的な余裕が良い意思決定につながる。" },
              { num: "4", title: "転職先の見極めに活用", desc: "副業先の企業にそのまま正社員として転職するケースも。「お試し入社」のように企業文化を事前に体験できる。" },
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

        {/* スケジュール例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業×転職活動のスケジュール例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="font-medium text-slate-700">平日（日中）</span>
                <span className="text-slate-600">本業に集中。昼休みにエージェントとのメッセージ確認・返信。</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="font-medium text-slate-700">平日（夜）</span>
                <span className="text-slate-600">20:00〜22:00 副業作業（1日2時間程度）。週3〜4日ペース。</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="font-medium text-slate-700">土曜日</span>
                <span className="text-slate-600">午前：職務経歴書の更新、面接対策。午後：企業研究、カジュアル面談。</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <span className="font-medium text-slate-700">日曜日</span>
                <span className="text-slate-600">完全オフ、または副業のまとまった作業。リフレッシュも大切。</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 面接日程が入った場合は副業を調整し、面接を最優先にしましょう。</p>
          </div>
        </section>

        {/* 副業の種類と収入テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業の種類と収入</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">副業タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">月収目安</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">難易度</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">転職でのメリット</th>
                </tr>
              </thead>
              <tbody>
                {sideProjects.map((project, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{project.type}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{project.income}</td>
                    <td className="px-3 py-3 border border-slate-200">{project.difficulty}</td>
                    <td className="px-3 py-3 border border-slate-200">{project.merit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 会社への伝え方 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">会社への伝え方と注意点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">現職への副業の伝え方</h3>
              <p className="text-sm text-blue-700">
                就業規則で副業が許可されている場合は、上司に報告しましょう。「スキルアップのため」「本業に支障のない範囲で」と伝えるのがポイント。競合他社での副業は避け、本業との利益相反がないことを明確にしましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">転職先への伝え方</h3>
              <p className="text-sm text-blue-700">
                面接で「副業をしている」ことは正直に伝えましょう。副業で得たスキルや実績をアピールすることで、プラスの印象を与えられます。入社後も副業を続けたい場合は、内定前に条件を確認しておくことが重要です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-3">注意すべきポイント</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>- 競合他社での副業は絶対に避ける</li>
                <li>- 本業の機密情報を副業で使わない</li>
                <li>- 確定申告を忘れない（年20万円以上の副業収入）</li>
                <li>- 住民税は「自分で納付」を選択</li>
                <li>- 健康管理を怠らない（過労に注意）</li>
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
          <h2 className="text-xl font-bold mb-3">副業の実績を活かして転職しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、副業経験を評価してくれる企業を優先的に紹介してもらえます。
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
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
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
