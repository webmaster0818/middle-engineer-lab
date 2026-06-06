import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニア→ITコンサルタントへの転職ガイド【年収UP実例】",
  description:
    "エンジニアからITコンサルタントへ転職するための必要スキル、年収変化、おすすめファーム、成功事例を解説します。",
};

const faqs = [
  {
    q: "エンジニアからITコンサルへ転職すると年収はどれくらい上がる？",
    a: "平均で100〜300万円アップします。大手ファーム（アクセンチュア、デロイト等）のマネージャー以上になると1,000万円超も珍しくありません。",
  },
  {
    q: "コーディングスキルはコンサルで活きる？",
    a: "技術力のあるコンサルタントは希少人材として重宝されます。クライアントに対して実現可能性を正確に判断できる点が強みです。テクニカルコンサルタントとして専門性を発揮できます。",
  },
  {
    q: "資料作成やプレゼンが苦手でも大丈夫？",
    a: "入社後にトレーニングを受けられますが、基本的なPowerPoint/Excel操作と論理的な文章力は事前に身につけておきましょう。ロジカルシンキングの書籍で基礎を学ぶことをおすすめします。",
  },
  {
    q: "エンジニア何年目からコンサルに転職できる？",
    a: "3〜5年の実務経験があれば十分です。設計や要件定義の上流工程経験があるとさらに有利です。大手ファームでもエンジニア経験3年以上で中途採用を行っています。",
  },
  {
    q: "激務は本当？",
    a: "プロジェクトによりますが、エンジニア時代より忙しくなるケースが多いです。ただし近年は働き方改革が進み、リモートワークやフレックスを導入するファームも増えています。",
  },
  {
    q: "どんなファームを選ぶべき？",
    a: "技術力を活かすなら、テクノロジー系ファーム（アクセンチュア、AWS ProServe、NTTデータ等）がおすすめです。戦略系ファームは求められるスキルセットが大きく異なるため、入念な準備が必要です。",
  },
];

export default function EngineerToConsultantPage() {
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
        title="エンジニア→ITコンサルタントへの転職ガイド【年収UP実例】"
        description="エンジニアからITコンサルタントへ転職するための必要スキル、年収変化、おすすめファーム、成功事例を解説します。"
        url="/career/engineer-to-consultant/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "エンジニア→ITコンサル転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア→ITコンサルタントへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | エンジニア経験を活かしてコンサルへ転身
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアからITコンサルタントへの転職は、年収アップと上流工程への関与を実現する有力なキャリアパスです。技術力を持つコンサルタントは市場価値が高く、ファームからの需要も増加しています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサル転職先の比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">難易度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">エンジニア経験の活用度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: "テクニカルコンサルタント", salary: "600〜900万円", diff: "★★☆", use: "非常に高い" },
                  { pos: "ITストラテジスト", salary: "700〜1,100万円", diff: "★★★", use: "高い" },
                  { pos: "DXコンサルタント", salary: "650〜1,000万円", diff: "★★★", use: "非常に高い" },
                  { pos: "マネージャー", salary: "900〜1,500万円", diff: "★★★", use: "中程度" },
                  { pos: "フリーランスコンサル", salary: "月100〜200万円", diff: "★★★", use: "高い" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサル転身に必要なスキル</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ロジカルシンキング", desc: "MECE、ピラミッドストラクチャー、仮説思考。コンサルの基本スキルです。書籍やケーススタディで鍛えましょう。" },
              { num: "2", title: "資料作成力（PowerPoint/Excel）", desc: "論点を明確にしたスライド作成、データ分析に基づくExcel資料。エンジニアのドキュメント力が土台になります。" },
              { num: "3", title: "クライアントコミュニケーション", desc: "技術を非エンジニアにわかりやすく説明する力。エンジニア時代のビジネスサイドとの折衝経験が活きます。" },
              { num: "4", title: "業界知識", desc: "金融、製造、小売など、志望する業界のビジネス構造と課題を理解しましょう。" },
              { num: "5", title: "ケース面接対策", desc: "大手ファームではケース面接があります。3〜6ヶ月の対策期間を見込みましょう。" },
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
                <span className="text-slate-600">33歳 バックエンドエンジニア5年 / Java + AWS</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">600万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職先</span>
                <span className="text-slate-600">Big4系ファーム テクニカルコンサルタント</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">転職後年収</span>
                <span className="text-slate-600 font-bold text-blue-600">800万円（+200万円UP）</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <div className="space-y-3">
            {[
              { name: "アクシスコンサルティング", point: "コンサル転職に特化。ケース面接対策のサポートが手厚い。" },
              { name: "ビズリーチ", point: "大手ファームのスカウトが届く。ハイクラスコンサル求人が豊富。" },
              { name: "レバテックキャリア", point: "テクニカルコンサルタント求人が充実。技術力を評価してくれる。" },
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
          <h2 className="text-xl font-bold mb-3">ITコンサル転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンジニア経験を活かせるコンサルポジションをプロが提案します。
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
              { name: "ITコンサル→エンジニア転職", href: "/career/consultant-to-engineer/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "外資系IT企業への転職", href: "/career/domestic-to-foreign/" },
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
