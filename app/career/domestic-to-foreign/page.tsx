import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "日系→外資系IT企業への転職ガイド【年収・英語力・選考対策】",
  description:
    "日系企業から外資系IT企業への転職方法を解説。必要な英語力、年収変化、選考プロセス、GAFA・外資SaaS企業への転職成功事例を紹介します。",
};

const faqs = [
  {
    q: "外資系IT企業に必要な英語力は？",
    a: "TOEIC 800点以上、または日常的な英語での技術ディスカッションができるレベルが目安です。ただしポジションによって求められるレベルは異なり、日本チーム配属なら英語面接がない場合もあります。",
  },
  {
    q: "外資系IT企業の年収相場は？",
    a: "日系と比較して30〜80%高い傾向です。シニアエンジニアで800〜1,500万円、スタッフエンジニアで1,200〜2,000万円、マネージャーで1,500〜2,500万円が相場です。RSU（株式報酬）を含むと総報酬はさらに上がります。",
  },
  {
    q: "外資系はすぐクビになる？",
    a: "PIP（業績改善プログラム）の制度がありますが、普通にパフォーマンスを発揮していれば問題ありません。日本の労働法が適用されるため、簡単に解雇はできません。ただしレイオフ（整理解雇）のリスクは日系より高いです。",
  },
  {
    q: "コーディング面接の対策方法は？",
    a: "LeetCodeで200〜300問解くのが基本です。Medium難易度を中心に、データ構造（配列、ハッシュ、木、グラフ）とアルゴリズム（二分探索、DFS/BFS、DP）を網羅しましょう。3〜6ヶ月の準備期間が必要です。",
  },
  {
    q: "システムデザイン面接とは？",
    a: "大規模システムの設計力を問う面接です。URL短縮サービス、チャットアプリ、SNSフィードなどの設計を45分程度で議論します。「System Design Interview」の書籍で対策しましょう。",
  },
  {
    q: "外資系IT企業の働き方は？",
    a: "成果主義のため、働く時間や場所の自由度は高いです。フルリモートやフレックスが一般的。一方で、成果を出すプレッシャーは日系より強く、自律的に仕事を進める力が求められます。",
  },
];

export default function DomesticToForeignPage() {
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
        title="日系→外資系IT企業への転職ガイド【年収・英語力・選考対策】"
        description="日系企業から外資系IT企業への転職方法を解説。必要な英語力、年収変化、選考プロセス、GAFA・外資SaaS企業への転職成功事例を紹介します。"
        url="/career/domestic-to-foreign/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "日系→外資系IT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          日系→外資系IT企業への転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 外資系ITへの転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系IT企業への転職は、年収の大幅アップとグローバルな開発環境を手に入れるチャンスです。GAFA/GAFAM だけでなく、外資SaaS企業やスタートアップの日本法人も選択肢として広がっています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">外資系ITポジション比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安（TC）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">英語力</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "SDE（ソフトウェア開発）", salary: "800〜1,500万円", diff: "★★★", eng: "TOEIC 800+推奨" },
                  { pos: "スタッフエンジニア", salary: "1,200〜2,500万円", diff: "★★★", eng: "ビジネスレベル必須" },
                  { pos: "SRE/DevOps", salary: "900〜1,600万円", diff: "★★★", eng: "TOEIC 750+推奨" },
                  { pos: "外資SaaS セールスエンジニア", salary: "800〜1,500万円+インセンティブ", diff: "★★☆", eng: "ビジネスレベル" },
                  { pos: "EM（エンジニアリングマネージャー）", salary: "1,500〜2,500万円", diff: "★★★", eng: "ビジネスレベル必須" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.diff}</td>
                    <td className="px-4 py-3 text-slate-600">{row.eng}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">外資系IT転職の準備ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "英語力の強化（3〜12ヶ月）", desc: "オンライン英会話で毎日25分の練習。技術英語のリーディングとライティングも並行して鍛えましょう。" },
              { num: "2", title: "コーディング面接対策（3〜6ヶ月）", desc: "LeetCodeでMedium問題を中心に200問以上。データ構造とアルゴリズムの基礎を固めましょう。" },
              { num: "3", title: "システムデザイン面接対策（1〜3ヶ月）", desc: "大規模システムの設計パターンを学習。実務でのアーキテクチャ設計経験を言語化しましょう。" },
              { num: "4", title: "行動面接対策（1〜2ヶ月）", desc: "STAR法（Situation, Task, Action, Result）で過去の経験を整理。リーダーシッププリンシプルに沿ったエピソードを準備。" },
              { num: "5", title: "リファラル獲得", desc: "外資系IT企業の社員とのネットワーキングが重要。LinkedInのプロフィールを英語で充実させましょう。" },
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
                <span className="text-slate-600">32歳 日系メガベンチャー4年 / Go + AWS</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">700万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">準備期間</span>
                <span className="text-slate-600">6ヶ月（LeetCode 250問 + 英語面接対策）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">外資系SaaS企業 シニアSDE</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">1,200万円（TC / +500万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "ロバート・ウォルターズ", point: "外資系IT専門。英語面接の対策サポートが充実。" },
              { name: "エンワールド・ジャパン", point: "外資系・グローバル企業に特化。年収交渉力が高い。" },
              { name: "ビズリーチ", point: "外資系企業からの直接スカウトが届く。ハイクラス求人に強い。" },
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
          <h2 className="text-xl font-bold mb-3">外資系IT転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資系IT企業への転職に強いエージェントが選考対策からサポートします。
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
              { name: "英語を活かすエンジニア転職", href: "/purpose/english/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "エンジニア→ITコンサル転職", href: "/career/engineer-to-consultant/" },
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
