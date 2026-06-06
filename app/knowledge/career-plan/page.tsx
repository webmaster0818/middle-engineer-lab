import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニアのキャリアプラン設計【5年/10年計画】| ミドルエンジニア転職ラボ",
  description:
    "30代・40代エンジニアのキャリアプラン設計方法を解説。スペシャリスト・マネジメント・CTO・独立の4つのキャリアパスと、5年・10年計画の立て方を紹介します。",
};

const faqs = [
  {
    q: "30代後半からキャリアプランを見直すのは遅いですか？",
    a: "まったく遅くありません。30代後半は実務経験が豊富で、方向転換もしやすい時期です。むしろ経験に基づいた現実的なプランを立てられる最適なタイミングです。40代前半までに新しい方向性で実績を積めば、キャリアの選択肢は十分確保できます。",
  },
  {
    q: "スペシャリストとマネジメント、どちらが年収が高いですか？",
    a: "一般的にはマネジメントの方が年収が高い傾向にありますが、技術力が突出したスペシャリストは同等以上の年収を得られます。メガベンチャーや外資系ITでは「IC（Individual Contributor）」の上級職で年収1,500万円以上も可能です。",
  },
  {
    q: "キャリアプランは面接でどう答えればいいですか？",
    a: "「3年後にテックリード、5年後にEM」のように具体的なマイルストーンを示しましょう。その上で「御社の○○の環境でそれが実現できる」と志望動機に繋げると説得力が増します。抽象的な回答は避けてください。",
  },
  {
    q: "技術の変化が速くて長期計画が立てられません",
    a: "技術は変わっても「設計力」「問題解決力」「チーム開発力」などの基盤スキルは不変です。具体的な技術名ではなく「大規模分散システムの設計」のようにカテゴリで計画を立てると、技術変化にも対応できます。",
  },
  {
    q: "フリーランスへの転向はキャリアプランとして有効ですか？",
    a: "経験10年以上で得意分野が明確なエンジニアにとって有効な選択です。正社員と比べて年収1.3〜1.5倍が期待できます。ただし安定性やキャリアの継続性を考慮し、十分な準備期間（半年〜1年）を設けることをおすすめします。",
  },
  {
    q: "キャリアプランの相談は誰にすべきですか？",
    a: "IT特化型の転職エージェントが最適です。業界の動向や年収相場を踏まえた客観的なアドバイスを受けられます。レバテックキャリアでは「今すぐ転職しない」相談も歓迎しており、中長期のキャリア相談が可能です。",
  },
];

export default function CareerPlanPage() {
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
        title="エンジニアのキャリアプラン設計【5年/10年計画】| ミドルエンジニア転職ラボ"
        description="30代・40代エンジニアのキャリアプラン設計方法を解説。スペシャリスト・マネジメント・CTO・独立の4つのキャリアパスと、5年・10年計画の立て方を紹介します。"
        url="/knowledge/career-plan/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "キャリアプラン設計" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアのキャリアプラン設計【5年/10年計画】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 4つのキャリアパスと計画の立て方
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代のエンジニアにとって、キャリアプランの設計は避けて通れない課題です。「このまま開発を続けるか」「マネジメントに進むか」「独立するか」など、選択肢は多岐にわたります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、4つの主要キャリアパスと具体的な5年・10年計画の立て方を解説します。
          </p>
        </section>

        {/* 4つのキャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアの4つのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">1. テクニカルスペシャリスト</h3>
              <p className="text-sm text-blue-700 mb-2">技術を極め、設計やアーキテクトとして活躍するパス。</p>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>・シニアエンジニア → リードエンジニア → アーキテクト</li>
                <li>・年収目安: 800〜1,500万円</li>
                <li>・向いている人: 技術的な深掘りが好き</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">2. エンジニアリングマネージャー</h3>
              <p className="text-sm text-green-700 mb-2">チームを率い、組織の技術力を底上げするパス。</p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>・テックリード → EM → VPoE</li>
                <li>・年収目安: 900〜1,800万円</li>
                <li>・向いている人: 人の成長に興味がある</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-3">3. CTO / 技術経営</h3>
              <p className="text-sm text-orange-700 mb-2">技術とビジネスの橋渡し役として経営に参画するパス。</p>
              <ul className="text-sm text-orange-600 space-y-1">
                <li>・EM → CTO / 技術顧問</li>
                <li>・年収目安: 1,200〜2,500万円+</li>
                <li>・向いている人: ビジネス視点を持ちたい</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <h3 className="font-bold text-purple-800 mb-3">4. フリーランス / 起業</h3>
              <p className="text-sm text-purple-700 mb-2">独立して自分のスキルを直接市場に提供するパス。</p>
              <ul className="text-sm text-purple-600 space-y-1">
                <li>・フリーランス → 法人化 → 自社プロダクト</li>
                <li>・年収目安: 800〜2,000万円+</li>
                <li>・向いている人: 自律的に動ける</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5年計画の例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5年キャリアプランの具体例（35歳・バックエンドエンジニア）</h2>
          <div className="space-y-4">
            {[
              { num: "1年目", title: "テックリードに昇進", desc: "3〜5名チームのテックリードとして技術選定・設計・コードレビューを担当。マネジメントの基礎を学ぶ。" },
              { num: "2年目", title: "アーキテクチャ設計力を強化", desc: "マイクロサービスアーキテクチャの設計・導入を主導。AWS/GCPの上級資格を取得。" },
              { num: "3年目", title: "マネジメントか専門性の分岐点", desc: "EM方向に進むならピープルマネジメントを開始。スペシャリスト方向なら登壇やOSS活動で外部発信。" },
              { num: "4年目", title: "リーダーシップの確立", desc: "EMなら10名以上のチームをマネジメント。スペシャリストならアーキテクトとしてシステム全体の設計を担当。" },
              { num: "5年目", title: "次のステージへ", desc: "VPoEやCTOへの道を視野に入れた活動。または独立・起業の準備。業界内での認知度を確立。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-12 h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
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

        {/* キャリアプラン設計のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアプラン設計で大切な5つのこと</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 「正解」を探さない</h3>
              <p className="text-sm text-blue-700">キャリアに唯一の正解はありません。自分の価値観に基づいて選択し、定期的に見直すことが重要です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 基盤スキルを軸にする</h3>
              <p className="text-sm text-blue-700">特定の技術ではなく「設計力」「問題解決力」「コミュニケーション力」を軸にすると技術トレンドの変化にも強くなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 1年ごとにマイルストーンを設定する</h3>
              <p className="text-sm text-blue-700">「5年後にCTO」は遠すぎて具体性がありません。1年ごとに達成可能な目標を設定し、定期的に振り返りましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 市場の需要と照らし合わせる</h3>
              <p className="text-sm text-blue-700">やりたいことだけでなく、市場の需要も考慮しましょう。転職エージェントに相談して最新の市場動向を把握することが有効です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. プランBを用意する</h3>
              <p className="text-sm text-blue-700">1つのパスに固執せず、状況変化に応じてピボットできるよう複数のオプションを持っておきましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">キャリアプランをプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントのキャリアアドバイザーが、あなたの経験に基づいた最適なキャリアプランを提案してくれます。
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
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "マネジメントキャリアの始め方", href: "/knowledge/management/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
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
