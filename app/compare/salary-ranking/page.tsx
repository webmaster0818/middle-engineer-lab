import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職エージェント別 年収UPランキング【2026年最新】| ミドルエンジニア転職ラボ",
  description:
    "IT転職エージェント10社を年収UP実績でランキング。各社の年収UP率・平均UP額を比較し、年収UPしやすい人の特徴、年収交渉のポイントを30代・40代エンジニア向けに解説します。",
};

const faqs = [
  {
    q: "転職で年収UPしやすいエンジニアの特徴は？",
    a: "現職で適正年収より低い報酬を受けている人、モダンな技術スタックを持つ人、マネジメント経験がある人は年収UPしやすい傾向です。特に、大手SIerから自社開発企業への転職、受託から自社サービスへの転職は年収UPの可能性が高いです。",
  },
  {
    q: "転職で年収が下がるケースはある？",
    a: "あります。主にレガシー技術から脱却できていない場合、未経験分野に転向する場合、地方から地方への転職で規模の小さい企業に移る場合です。ただし、IT特化型エージェントを利用すれば、年収が下がるリスクを事前に把握できます。",
  },
  {
    q: "年収交渉はエージェントがやってくれる？",
    a: "はい、年収交渉はエージェントの重要な役割の一つです。求職者が直接交渉するのは気まずいですが、エージェントが間に入ることでスムーズに年収UPを実現できます。複数のオファーを持っていると交渉材料になります。",
  },
  {
    q: "年収UP率と平均UP額、どちらを重視すべき？",
    a: "年収UP率は「何%の人が年収UPしたか」、平均UP額は「平均いくらUPしたか」を表します。UP率が高くても1万円のUPではあまり意味がなく、UP額が高くても一部のハイクラス転職に偏っている可能性があります。両方の指標をバランスよく見ることが大切です。",
  },
  {
    q: "ランキング上位のエージェントに登録すれば年収は上がる？",
    a: "エージェントの質は重要ですが、最終的には本人のスキル・経験が年収を決めます。ランキング上位のエージェントは「年収交渉力が高い」「高年収求人が多い」という特徴があるため、同じスキルでもより高い年収を引き出せる可能性が高くなります。",
  },
  {
    q: "年収UPのために何社くらい登録すべき？",
    a: "3社がベストです。複数のオファーを比較することで年収交渉が有利になります。IT特化型2社（レバテックキャリア+Geeklyなど）+ハイクラス1社（ビズリーチなど）の組み合わせが効果的です。",
  },
];

const ranking = [
  { rank: 1, name: "レバテックキャリア", type: "IT特化型", upRate: "80%", upAmount: "約83万円", strength: "IT業界No.1の求人数と年収交渉力。シニア〜ハイクラスの年収UP実績が豊富。", review: "/review/levtech-career/" },
  { rank: 2, name: "Geekly", type: "IT特化型", upRate: "76%", upAmount: "約76万円", strength: "Web系・ゲーム業界に特化。マッチング精度の高さで入社後満足度も高い。", review: "/review/geekly/" },
  { rank: 3, name: "ビズリーチ", type: "ハイクラス", upRate: "72%", upAmount: "約120万円", strength: "年収600万円以上のハイクラス特化。平均UP額はトップクラス。", review: "/review/bizreach/" },
  { rank: 4, name: "type転職エージェント", type: "IT特化型", upRate: "71%", upAmount: "約68万円", strength: "一都三県のIT転職に特化。丁寧な年収交渉サポート。", review: "/review/type-agent/" },
  { rank: 5, name: "マイナビIT AGENT", type: "IT特化型", upRate: "68%", upAmount: "約55万円", strength: "20〜30代前半の年収UPに強い。初めての転職でも安心のサポート。", review: "/review/mynavi-it/" },
  { rank: 6, name: "JACリクルートメント", type: "ハイクラス", upRate: "70%", upAmount: "約105万円", strength: "外資系・管理職の年収交渉に強い。バイリンガル求人も豊富。", review: "/review/jac/" },
  { rank: 7, name: "doda(IT特化)", type: "総合型", upRate: "65%", upAmount: "約52万円", strength: "求人数最多。大手企業の求人が豊富で安定的な年収UPが期待できる。", review: "/review/doda/" },
  { rank: 8, name: "リクルートエージェントIT", type: "総合型", upRate: "63%", upAmount: "約48万円", strength: "最大手の安心感と全国カバー。地方での転職でも年収UP事例あり。", review: "/review/recruit-agent/" },
  { rank: 9, name: "ワークポート", type: "IT特化型", upRate: "60%", upAmount: "約42万円", strength: "未経験からのIT転職での年収UP実績。スピーディーな対応。", review: "/review/workport/" },
  { rank: 10, name: "Green", type: "IT特化型", upRate: "58%", upAmount: "約38万円", strength: "カジュアル面談経由の転職で自然な年収UP。企業と直接やりとり可能。", review: "/review/green/" },
];

export default function SalaryRankingPage() {
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
        title="転職エージェント別 年収UPランキング【2026年最新】"
        description="IT転職エージェント10社を年収UP実績でランキング。各社の年収UP率・平均UP額を比較し、年収UPのコツを解説します。"
        url="/compare/salary-ranking/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "年収UPランキング" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント別 年収UPランキング【2026年最新】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | エージェント10社の年収UP実績を比較
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職で年収UPを実現するためには、年収交渉力の高いエージェントを選ぶことが重要です。本記事では、IT転職エージェント10社を年収UP実績でランキングし、各社の特徴を比較します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収UP率と平均UP額の両方を考慮した総合ランキングです。
          </p>
        </section>

        {/* ランキングテーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収UPランキング（2026年最新）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収UP率</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">平均UP額</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((agent) => (
                  <tr key={agent.rank} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        agent.rank <= 3 ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-600"
                      }`}>
                        {agent.rank}
                      </span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200 font-medium">
                      <Link href={agent.review} className="text-blue-600 hover:underline">{agent.name}</Link>
                    </td>
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        agent.type === "IT特化型" ? "bg-blue-100 text-blue-700" :
                        agent.type === "ハイクラス" ? "bg-purple-100 text-purple-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {agent.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{agent.upRate}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{agent.upAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 年収UP率・平均UP額は各社公表値および当サイト独自調査に基づく2026年6月時点の概算です。</p>
        </section>

        {/* 各社詳細 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の年収UP実績詳細</h2>
          <div className="space-y-4">
            {ranking.slice(0, 5).map((agent) => (
              <div key={agent.rank} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-2 ${
                      agent.rank <= 3 ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-600"
                    }`}>
                      {agent.rank}
                    </span>
                    {agent.name}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    agent.type === "IT特化型" ? "bg-blue-100 text-blue-700" :
                    agent.type === "ハイクラス" ? "bg-purple-100 text-purple-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {agent.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{agent.strength}</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>年収UP率: {agent.upRate}</span>
                  <span>平均UP額: {agent.upAmount}</span>
                </div>
                <Link href={agent.review} className="inline-block mt-2 text-xs text-blue-600 hover:underline">
                  詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 年収UPしやすい人の特徴 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収UPしやすい人の5つの特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 現職の年収が市場相場より低い</h3>
              <p className="text-sm text-blue-700">
                長年同じ会社に在籍していると、市場の年収上昇に追いつかないケースが多い。転職で「適正年収」に修正されるだけで50〜100万円UPすることも。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. モダンな技術スタックを持っている</h3>
              <p className="text-sm text-blue-700">
                TypeScript、Go、Rust、Kubernetes、Terraformなどモダンな技術のスキルがあると、年収交渉で有利。特にクラウドインフラとバックエンドの掛け合わせは高需要。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. マネジメント経験がある</h3>
              <p className="text-sm text-blue-700">
                3〜5人以上のチームリード経験、1on1実施経験、採用面接の経験があると、EMポジションで年収大幅UP。技術力+マネジメントの掛け合わせは最強。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 複数のオファーを比較できる</h3>
              <p className="text-sm text-blue-700">
                複数のエージェントから複数のオファーを取ることで、年収交渉の材料に。「他社からこの条件で内定が出ている」は最強の交渉カードです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. IT特化型エージェントを利用している</h3>
              <p className="text-sm text-blue-700">
                IT特化型エージェントは業界の年収相場に精通しているため、適切な年収交渉が可能。総合型よりもIT特化型の方が年収UP率が高い傾向にあります。
              </p>
            </div>
          </div>
        </section>

        {/* 年収交渉のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収交渉の4つのポイント</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "希望年収は「レンジ」で伝える", desc: "「700万円希望」ではなく「700〜800万円」とレンジで伝える。下限が希望額、上限がストレッチ目標。エージェントが交渉の余地を持てる。" },
                { num: "2", title: "現年収を正直に伝える", desc: "現年収を盛ると、入社後のギャップやトラブルの原因に。エージェントには正直に伝え、市場価値に基づいた適正年収を算出してもらいましょう。" },
                { num: "3", title: "年収以外の条件も交渉する", desc: "基本給だけでなく、賞与、SO、リモートワーク、フレックス、副業許可なども交渉対象。総合的な待遇で判断することが大切。" },
                { num: "4", title: "内定後に交渉する", desc: "年収交渉は内定が出た後が最も効果的。企業側が「この人を採りたい」と決めた後なら、交渉の余地が生まれやすい。エージェントに代行してもらいましょう。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
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
          <h2 className="text-xl font-bold mb-3">年収UPを実現しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            年収UP実績の高いIT特化型エージェントに登録して、あなたの市場価値を確認しましょう。登録・利用は完全無料です。
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
              { name: "レバテックキャリア vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "年収交渉の完全ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
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
