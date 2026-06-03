import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代エンジニア転職の現実【厳しい？データで見る実態】",
  description:
    "40代エンジニアの転職は本当に厳しいのか？求人データ、年収推移、成功率を客観的に分析し、40代エンジニアが転職で成功するための具体的な戦略を解説します。",
};

const faqs = [
  {
    q: "40代エンジニアの転職は本当に厳しい？",
    a: "20代・30代と比べるとハードルは高くなりますが、「厳しくて無理」というほどではありません。IT人材の不足は深刻化しており、40代でも専門性の高いエンジニアは引く手あまたです。ただし求められるレベルが上がるため、戦略的な準備が必要です。",
  },
  {
    q: "40代で転職する際の適正な年収提示額は？",
    a: "現職の年収を維持するか、10〜20%アップが現実的な目標です。ただし大幅な職種転換やポジションダウンを伴う場合は現職維持が難しいケースもあります。転職エージェントに市場相場を確認した上で提示額を決めましょう。",
  },
  {
    q: "40代でマネジメント経験がないと厳しい？",
    a: "マネジメント経験がなくても、特定領域のスペシャリスト（セキュリティ、データベース、クラウドインフラなど）として活躍できます。近年はIC（Individual Contributor）キャリアを重視する企業が増えており、技術力だけで評価してもらえる環境も増えています。",
  },
  {
    q: "40代の転職活動期間はどのくらい？",
    a: "平均3〜6ヶ月です。30代と比べて1〜2ヶ月長くなる傾向があります。焦って条件を妥協するよりも、じっくりと自分に合った企業を見つけることが大切です。転職活動中も在職のまま進めることをおすすめします。",
  },
  {
    q: "40代でスタートアップに転職するのは現実的？",
    a: "現実的です。スタートアップはシニアエンジニアの経験と判断力を求めています。CTO候補、テクニカルアドバイザー、テックリードとして40代を積極的に採用する企業は増えています。ただし年収水準は大手と比べて低い場合があり、ストックオプションとのバランスを考慮しましょう。",
  },
  {
    q: "40代エンジニアの転職に強いエージェントは？",
    a: "ビズリーチ（ハイクラス求人に強い）、レバテックキャリア（IT特化でシニア求人多数）、JACリクルートメント（外資系・管理職に強い）の3社がおすすめです。40代はハイクラス向けエージェントとの相性が良いです。",
  },
];

export default function FortyRealityPage() {
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
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "40代エンジニア転職の現実" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          40代エンジニア転職の現実【厳しい？データで見る実態】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 40代エンジニア転職のリアルと成功戦略
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「40代のエンジニア転職は厳しい」という声をよく耳にします。確かに20代・30代と比較するとハードルは上がりますが、IT人材不足が深刻化する中で、40代エンジニアの需要は確実に存在します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、40代エンジニアの転職市場をデータで分析し、成功するための具体的な戦略を解説します。
          </p>
        </section>

        {/* データで見る実態 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データで見る40代エンジニア転職の実態</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">約15%</p>
                <p className="text-sm text-slate-600 mt-1">IT求人全体に占める40代OK求人の割合</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">700万〜900万</p>
                <p className="text-sm text-slate-600 mt-1">40代エンジニア転職の年収中央値</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4.2ヶ月</p>
                <p className="text-sm text-slate-600 mt-1">40代の平均転職活動期間</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            40代向け求人は数こそ少ないものの、1件あたりの年収水準は高い傾向にあります。「量より質」の転職活動が40代の特徴です。
          </p>
        </section>

        {/* 求められるスキル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアに求められるスキル</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術的な意思決定力</h3>
              <p className="text-sm text-blue-700">
                40代に求められるのは「コードが書ける」だけではありません。アーキテクチャ設計、技術選定、技術負債の解消戦略など、技術的な意思決定ができることが重要です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">組織への影響力</h3>
              <p className="text-sm text-blue-700">
                チームの生産性向上、後進の育成、開発プロセスの改善など、個人の成果だけでなく組織全体に良い影響を与えられることが40代に期待されます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビジネス視点</h3>
              <p className="text-sm text-blue-700">
                技術をビジネスの成果に結びつける視点が必要です。「この技術を導入することでコストが年間○○万円削減できる」「開発スピードが○○%向上し、リリースサイクルが短縮できる」といった説明ができると強いです。
              </p>
            </div>
          </div>
        </section>

        {/* 成功パターン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの転職成功パターン</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "テックリード/EMとして転職", desc: "5名以上のチームマネジメント経験がある場合、テックリードやEMとしてのポジションが狙えます。年収800万〜1,200万円の求人が中心です。" },
              { num: "2", title: "スペシャリストとして転職", desc: "セキュリティ、データベース、SREなど特定領域に深い専門性を持つ場合、年齢に関係なく高く評価されます。特にクラウドインフラの専門家は需要が高いです。" },
              { num: "3", title: "社内SE/DX推進として転職", desc: "非IT企業のDX推進、社内システム刷新のリーダーとして転職するパターン。IT以外の業界知識と技術力を掛け合わせられる40代に適しています。" },
              { num: "4", title: "フリーランスとして独立", desc: "正社員にこだわらず、フリーランスとして高単価案件を獲得するパターン。月単価80万〜120万円で、年収ベースでは正社員時代を大きく上回ることも可能です。" },
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

        {/* 避けるべき失敗 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代転職で避けるべき失敗</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">退職してから転職活動を始める</h3>
              <p className="text-sm text-red-700">
                40代の転職活動は3〜6ヶ月かかるのが一般的です。退職してからだと焦りが生まれ、条件を妥協しがちです。必ず在職中に転職活動を進めましょう。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">1社のエージェントだけに頼る</h3>
              <p className="text-sm text-red-700">
                40代向けの求人は数が限られるため、複数のエージェントに登録して求人の幅を広げることが重要です。最低3社は登録し、それぞれの得意分野を活かしましょう。
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
          <h2 className="text-xl font-bold mb-3">40代の転職を成功させるプロのサポート</h2>
          <p className="text-blue-100 text-sm mb-4">
            40代向けのハイクラス求人に強いエージェントに登録して、市場価値の確認から始めましょう。
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
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
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
