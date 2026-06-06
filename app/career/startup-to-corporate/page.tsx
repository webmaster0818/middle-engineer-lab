import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "スタートアップ→大企業転職ガイド【安定とキャリアを両立】",
  description:
    "スタートアップから大企業への転職を成功させるための戦略、年収変化、面接対策、スタートアップ経験の活かし方を解説します。",
};

const faqs = [
  {
    q: "スタートアップから大企業への転職は難しい？",
    a: "むしろ歓迎される傾向にあります。スタートアップで培った自走力、幅広い技術経験、スピード感は大企業のDX推進やイノベーション部門で高く評価されます。",
  },
  {
    q: "年収は上がる？",
    a: "基本給は上がるケースが多いです。大企業は給与テーブルが明確で、スタートアップ時代より100〜200万円アップするケースも珍しくありません。ただしSOがなくなる分、長期的なリターンは一概に比較できません。",
  },
  {
    q: "大企業のスピード感に耐えられる？",
    a: "最も多い不満はここです。意思決定の遅さ、承認プロセスの多さに戸惑う人が多いです。DX推進室やイノベーション部門、社内スタートアップ的な部署を選ぶとギャップを軽減できます。",
  },
  {
    q: "スタートアップ経験をどうアピールする？",
    a: "「不確実な状況での意思決定力」「限られたリソースでの成果創出」「ゼロからのシステム構築経験」を具体的な数字とともにアピールしましょう。",
  },
  {
    q: "大企業のどの部門がスタートアップ出身者に向いている？",
    a: "DX推進室、新規事業部、CVC（コーポレートベンチャーキャピタル）、テックラボなどが向いています。既存事業の保守運用部門は避けた方が無難です。",
  },
  {
    q: "面接でスタートアップの短期在籍をどう説明する？",
    a: "「短期間でも密度の濃い経験を積めた」と前向きに伝えましょう。具体的な成果（売上向上、ユーザー数増加、技術的な改善指標等）を示すことで短期在籍のマイナスを打ち消せます。",
  },
];

export default function StartupToCorporatePage() {
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
        title="スタートアップ→大企業転職ガイド【安定とキャリアを両立】"
        description="スタートアップから大企業への転職を成功させるための戦略、年収変化、面接対策、スタートアップ経験の活かし方を解説します。"
        url="/career/startup-to-corporate/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "スタートアップ→大企業転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スタートアップ→大企業転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | スタートアップ経験を活かして大企業へ転職する方法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            スタートアップで培った経験を活かして大企業へ転職するケースが増えています。安定した報酬体系、充実した福利厚生、大規模プロジェクトへの参画機会が魅力です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業転職先の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "DX推進エンジニア", salary: "600〜900万円", diff: "★★☆", feat: "スタートアップ経験が直結" },
                  { pos: "新規事業開発", salary: "650〜1,000万円", diff: "★★★", feat: "0→1の経験が活きる" },
                  { pos: "テックリード", salary: "700〜1,100万円", diff: "★★★", feat: "技術選定・設計力を評価" },
                  { pos: "シニアエンジニア", salary: "600〜850万円", diff: "★★☆", feat: "幅広い経験を活かせる" },
                  { pos: "EM（エンジニアリングマネージャー）", salary: "750〜1,200万円", diff: "★★★", feat: "組織づくりの経験が活きる" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.feat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業転職を成功させるポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "成果を数字で語る", desc: "「ユーザー数を3倍に」「レスポンスタイムを50%改善」など定量的な成果をまとめましょう。大企業の面接官はデータドリブンな評価を好みます。" },
              { num: "2", title: "DX推進・新規事業部門を狙う", desc: "スタートアップのカルチャーに近い部門を選ぶことで、カルチャーギャップを最小化できます。" },
              { num: "3", title: "マネジメント経験をアピール", desc: "少人数チームでもマネジメント経験があれば大きな強みです。1on1、採用面接、メンタリングなどの経験を具体的に。" },
              { num: "4", title: "大企業の選考プロセスに慣れる", desc: "コーディングテスト、システムデザイン面接、行動面接（STAR法）の対策をしっかりしましょう。" },
              { num: "5", title: "複数エージェントを活用する", desc: "大企業求人はエージェント経由の非公開求人が多いです。3社以上に登録して比較しましょう。" },
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
                <span className="text-slate-600">32歳 スタートアップ2社経験 / フルスタック4年</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">620万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">大手EC企業 DX推進部 テックリード</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">820万円（+200万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "リクルートエージェント（IT）", point: "大手企業の非公開求人数No.1。DX推進・新規事業部門の求人が豊富。" },
              { name: "レバテックキャリア", point: "技術力を正しく評価してくれる。大手Web企業のテックリード求人が多い。" },
              { name: "ビズリーチ", point: "ハイクラス求人に特化。年収800万円以上の大企業ポジションが豊富。" },
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
          <h2 className="text-xl font-bold mb-3">大企業への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            スタートアップ経験を最大限に評価してくれる大企業ポジションをプロが提案します。
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
              { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
              { name: "大企業ITポジションガイド", href: "/purpose/daikigyo/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
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
