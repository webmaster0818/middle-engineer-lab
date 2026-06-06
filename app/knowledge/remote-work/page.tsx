import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "リモートワーク求人の探し方【エンジニア転職】完全ガイド | ミドルエンジニア転職ラボ",
  description:
    "エンジニア向けリモートワーク求人の探し方を徹底解説。フルリモートとハイブリッドの比較、リモート求人が多い企業タイプ、エージェントでの探し方、面接対策まで完全ガイド。",
};

const faqs = [
  {
    q: "フルリモートのエンジニア求人はどのくらいある？",
    a: "2026年時点でIT業界のフルリモート求人は全体の約25%です。特にWeb系企業、SaaS企業、自社サービス開発企業で多く、バックエンド・インフラエンジニアはフルリモート率が高い傾向にあります。",
  },
  {
    q: "フルリモートだと年収は下がる？",
    a: "基本的にフルリモートだからといって年収が下がることはありません。ただし地方在住で地方企業に勤める場合は、東京水準より低くなる傾向があります。東京のフルリモート企業に応募すれば、東京水準の年収でリモートワークが可能です。",
  },
  {
    q: "リモートワークの面接はどう対策すべき？",
    a: "自己管理能力、コミュニケーション能力（テキストベース）、成果物ベースの報告スキルをアピールしましょう。過去のリモートワーク経験や、非同期コミュニケーションの工夫を具体的に伝えると評価が高まります。",
  },
  {
    q: "フルリモートで地方移住は可能？",
    a: "可能です。東京のフルリモート企業に勤めながら、福岡、大阪、沖縄などに移住するエンジニアが増えています。ただし月1回程度の出社や、チーム合宿への参加を求められるケースもあるため、事前に確認しましょう。",
  },
  {
    q: "リモート求人に強いエージェントは？",
    a: "レバテックキャリア（フルリモート求人の絞り込みが可能）、Geekly（Web系のリモート求人が豊富）がおすすめです。登録時に「フルリモート希望」と伝えれば、条件に合った求人を優先的に紹介してもらえます。",
  },
  {
    q: "リモートワークで注意すべき点は？",
    a: "孤独感やコミュニケーション不足に注意が必要です。定期的な1on1、バーチャルオフィスツールの活用、コワーキングスペースの利用などで対策しましょう。また、自宅の作業環境（デスク、椅子、ネット回線）の整備も重要です。",
  },
];

const comparison = [
  { item: "通勤", full: "なし", hybrid: "週1〜3日出社" },
  { item: "年収水準", full: "東京水準を維持可能", hybrid: "東京水準" },
  { item: "対人コミュニケーション", full: "オンライン中心", hybrid: "対面＋オンライン" },
  { item: "地方移住", full: "可能", hybrid: "通勤圏内に限定" },
  { item: "求人数", full: "約25%", hybrid: "約35%" },
  { item: "企業タイプ", full: "Web系・SaaS・自社開発", hybrid: "大手IT・メガベンチャー" },
  { item: "自己管理の必要性", full: "非常に高い", hybrid: "高い" },
  { item: "キャリアアップ", full: "成果物で評価", hybrid: "対面での関係構築も可" },
];

export default function RemoteWorkPage() {
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
        title="リモートワーク求人の探し方【エンジニア転職】完全ガイド"
        description="エンジニア向けリモートワーク求人の探し方を徹底解説。フルリモートとハイブリッドの比較、リモート求人が多い企業タイプ、面接対策まで完全ガイド。"
        url="/knowledge/remote-work/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "リモートワーク求人の探し方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リモートワーク求人の探し方【エンジニア転職】完全ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | エンジニアのリモートワーク転職ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            リモートワークはエンジニアの働き方として定着しました。しかし、フルリモートの求人を効率的に見つけるには、コツがあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、リモートワーク求人の現状、フルリモートとハイブリッドの比較、求人の見つけ方、面接対策を30代・40代エンジニア向けに解説します。
          </p>
        </section>

        {/* リモート求人の現状 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモートワーク求人の現状（2026年）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約25%</p>
              <p className="text-sm text-blue-600">フルリモート求人率</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約35%</p>
              <p className="text-sm text-blue-600">ハイブリッド求人率</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約40%</p>
              <p className="text-sm text-blue-600">フル出社求人率</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              コロナ禍をきっかけに普及したリモートワークは、2026年も定着しています。IT業界全体ではフルリモートが約25%、ハイブリッドが約35%で、合わせて約60%の求人がリモートに対応しています。特にWeb系企業、SaaS企業、スタートアップではフルリモート率が高い傾向です。一方、SIerや金融系ではセキュリティ要件から出社を求めるケースが多くあります。
            </p>
          </div>
        </section>

        {/* 比較テーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモート vs ハイブリッド 比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">フルリモート</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ハイブリッド</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.full}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* リモート求人が多い企業タイプ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人が多い企業タイプ</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">SaaS企業</h3>
              <p className="text-sm text-slate-600">フルリモート率が最も高い企業タイプ。プロダクト開発がオンラインで完結するため、リモートとの相性が抜群。SmartHR、freee、Sansanなど。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Web系自社サービス</h3>
              <p className="text-sm text-slate-600">メルカリ、サイバーエージェント、DeNAなど大手もハイブリッドを採用。スタートアップはフルリモートが多い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">受託開発（モダン系）</h3>
              <p className="text-sm text-slate-600">アジャイル開発を取り入れたモダンな受託企業はリモート対応が進んでいる。クライアントワークのため完全フルリモートは限定的。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">外資系IT企業</h3>
              <p className="text-sm text-slate-600">グローバルでリモートワーク文化が根付いている。年収水準も高く、英語力があれば好条件のフルリモート求人に出会える。</p>
            </div>
          </div>
        </section>

        {/* エージェントでの探し方 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントでのリモート求人の探し方</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "登録時に「フルリモート希望」を明記", desc: "エージェント登録時のアンケートや面談で、リモートワークの希望条件を具体的に伝えましょう。「フルリモート」「週1出社まで」「地方在住」など条件を明確にすることで、マッチする求人を優先的に紹介してもらえます。" },
              { num: "2", title: "IT特化型エージェントを選ぶ", desc: "レバテックキャリアやGeeklyなどIT特化型エージェントは、リモート可否の情報を正確に把握しています。総合型では「リモート可」と書いてあっても実態は週3出社、ということもあります。" },
              { num: "3", title: "非公開求人をチェック", desc: "フルリモートの好条件求人は非公開になっていることが多いです。エージェントに登録することで、求人サイトには掲載されていないリモート求人にアクセスできます。" },
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

        {/* 面接対策 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモートワーク求人の面接対策</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">自己管理能力をアピール</h3>
              <p className="text-sm text-blue-700">
                リモートワークでは自己管理能力が最重要です。過去にリモートワークで成果を出した経験、タスク管理の方法、集中力を維持する工夫を具体的に伝えましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">テキストコミュニケーション力を示す</h3>
              <p className="text-sm text-blue-700">
                Slack、GitHub、ドキュメンテーションなどテキストベースのコミュニケーション経験をアピール。非同期コミュニケーションでチームに貢献した具体例を準備しましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">成果物ベースの実績を準備</h3>
              <p className="text-sm text-blue-700">
                リモート環境では「プロセス」ではなく「成果物」で評価されます。過去の具体的な成果を数値で示せるように準備しておきましょう。
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
          <h2 className="text-xl font-bold mb-3">リモートワーク求人を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、フルリモート・ハイブリッドの好条件求人を優先的に紹介してもらえます。
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
              { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
              { name: "スタートアップvs大企業", href: "/knowledge/startup-vs-enterprise/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
