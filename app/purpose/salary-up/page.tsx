import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/salary-up/" },
  title: "年収UPしたいエンジニアの転職戦略【100万円以上UP実例】",
  description:
    "エンジニアが転職で年収100万円以上アップを実現するための戦略を解説。年収が上がるスキル、企業タイプ、交渉術、成功事例を紹介します。",
};

const faqs = [
  {
    q: "エンジニアの転職で年収100万円UPは現実的？",
    a: "はい、十分現実的です。IT特化型エージェント経由の転職者の約40%が100万円以上の年収アップを実現しています。特にクラウド、Go/Rust、AI/MLのスキルを持つエンジニアは高確率でアップします。",
  },
  {
    q: "年収が上がりやすいスキルは？",
    a: "2026年現在、Go、Rust、TypeScript、Kubernetes、Terraform、AI/ML（Python+PyTorch）が年収プレミアムのあるスキルです。特にGo+AWSの組み合わせは需要が高いです。",
  },
  {
    q: "年収を上げるには転職が必須？",
    a: "社内昇進でも可能ですが、転職の方が年収アップ幅は大きい傾向です。特に3年以上同じ会社にいて年収が停滞している場合、転職で市場相場に合わせることで大幅アップが見込めます。",
  },
  {
    q: "年収交渉のコツは？",
    a: "複数社から同時にオファーを受けること、市場相場のデータを根拠に交渉すること、エージェントの交渉力を活用することの3つが重要です。",
  },
  {
    q: "外資系に行けば年収は上がる？",
    a: "日系と比較して30〜80%高い傾向があります。ただし成果主義が厳しく、レイオフのリスクもあるため、総合的に判断しましょう。英語力があるなら有力な選択肢です。",
  },
  {
    q: "フリーランスと正社員、どちらが年収高い？",
    a: "手取りベースではフリーランスの方が高くなるケースが多いです。ただし社会保険料の全額自己負担、有給休暇なし、退職金なしを考慮すると実質的には大きな差がないことも。安定性も含めて判断しましょう。",
  },
];

export default function SalaryUpPage() {
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
        title="年収UPしたいエンジニアの転職戦略【100万円以上UP実例】"
        description="エンジニアが転職で年収100万円以上アップを実現するための戦略を解説。年収が上がるスキル、企業タイプ、交渉術、成功事例を紹介します。"
        url="/purpose/salary-up/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "年収UPしたいエンジニアの転職戦略" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収UPしたいエンジニアの転職戦略
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 年収100万円以上UPを目指す転職ガイド
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 現在の年収が市場相場より低いと感じている</li>
              <li>- 3年以上同じ会社で年収が停滞している</li>
              <li>- スキルアップしたのに評価が年収に反映されない</li>
              <li>- 年収600万円の壁、800万円の壁を突破したい</li>
              <li>- 将来的に年収1,000万円を達成したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキル別の年収レンジ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収レンジ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">需要</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収UP幅</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { skill: "Go + AWS", salary: "600〜1,000万円", demand: "非常に高い", up: "+100〜200万円" },
                  { skill: "TypeScript + React", salary: "500〜850万円", demand: "高い", up: "+50〜150万円" },
                  { skill: "Kubernetes + Terraform", salary: "600〜950万円", demand: "非常に高い", up: "+100〜200万円" },
                  { skill: "Python + AI/ML", salary: "600〜1,200万円", demand: "非常に高い", up: "+150〜300万円" },
                  { skill: "Rust", salary: "650〜1,100万円", demand: "高い", up: "+100〜250万円" },
                  { skill: "Java（Spring Boot）", salary: "500〜800万円", demand: "安定", up: "+50〜100万円" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.demand}</td>
                    <td className="px-4 py-3 text-slate-600 font-medium text-petrol">{row.up}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収UPの具体的な方法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "市場価値の高いスキルを習得する", desc: "Go、Kubernetes、AI/MLなど年収プレミアムのあるスキルを習得しましょう。3〜6ヶ月の投資で年収100万円以上のリターンが見込めます。" },
              { num: "2", title: "複数のオファーを同時に獲得する", desc: "3社以上から同時にオファーを受けることで、年収交渉力が格段に上がります。エージェント3社に登録して並行で進めましょう。" },
              { num: "3", title: "年収レンジの高い企業を狙う", desc: "外資系IT、メガベンチャー、FinTech、AI系企業は年収レンジが高いです。同じスキルでも企業タイプで100〜300万円の差がつきます。" },
              { num: "4", title: "エージェントの年収交渉力を活用する", desc: "年収交渉はプロに任せましょう。エージェントは企業の予算を把握しており、個人では引き出せない金額を交渉してくれます。" },
              { num: "5", title: "副業でスキルと収入の両方を得る", desc: "副業で年収+100〜300万円の上乗せが可能です。副業実績は転職時のスキル証明にもなり、次の転職での年収UPにつながります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめ企業タイプ</h2>
          <div className="space-y-3">
            {[
              { type: "外資系IT企業", point: "日系の1.3〜1.8倍の年収。RSU（株式報酬）で総報酬はさらに高くなる。英語力が必要。" },
              { type: "メガベンチャー", point: "技術力を正しく評価する給与テーブル。年収700〜1,200万円のレンジが中心。" },
              { type: "FinTech企業", point: "金融×テックの希少スキルが求められ、年収レンジが高い。Go+クラウドの需要大。" },
              { type: "AI/MLスタートアップ", point: "AI人材の需要が供給を大幅に上回っており、年収プレミアムが大きい。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "IT特化型No.1。年収交渉力が高く、100万円以上UPの実績が豊富。" },
              { name: "ビズリーチ", point: "ハイクラス求人に特化。年収800万円以上のスカウトが届く。" },
              { name: "転職ドラフト", point: "企業から年収付きで指名が届く。自分の市場価値を客観的に確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">年収UPの第一歩を踏み出そう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントが年収100万円以上UPを実現するプランを無料で提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "外資系IT企業への転職", href: "/career/domestic-to-foreign/" },
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
