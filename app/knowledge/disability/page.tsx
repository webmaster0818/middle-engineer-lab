import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "障がいのあるエンジニアの転職支援 | ミドルエンジニア転職ラボ",
  description:
    "障がいのあるエンジニアが転職を成功させるための支援制度、合理的配慮の求め方、おすすめの転職サービスを解説。IT業界の障がい者雇用の実態も紹介します。",
};

const faqs = [
  { q: "障がい者手帳を持っていると転職で不利になりますか？", a: "むしろ有利になるケースが多いです。大手IT企業は法定雇用率の達成を目指しており、障がい者手帳を持つエンジニアは積極的に採用されています。スキルがあれば健常者と同じ条件で働ける企業も増えています。" },
  { q: "障がいを開示して転職活動すべきですか？", a: "合理的配慮が必要な場合は開示をおすすめします。リモートワークや通院のための時間調整など、事前に伝えておくことで入社後のミスマッチを防げます。障がい者雇用枠と一般枠の両方に応募する戦略も有効です。" },
  { q: "IT業界は障がい者に働きやすい環境ですか？", a: "はい。リモートワーク、フレックス制度、成果ベースの評価など、IT業界は障がいのある方にとって働きやすい環境が整っている業界の一つです。特にWeb系企業はバリアフリーな働き方に理解があります。" },
  { q: "障がい者雇用枠の年収は低いですか？", a: "企業によりますが、IT人材の需要が高いため、スキルに見合った年収が提示されるケースが増えています。特にエンジニア職は一般枠と同等の年収で採用されることも多いです。" },
  { q: "合理的配慮はどのように求めればいいですか？", a: "面接時または内定承諾時に具体的に伝えましょう。「週1回の通院のため○曜日午後に休みが必要」「聴覚障がいのためチャットでのコミュニケーションを希望」など具体的な内容を伝えると企業も対応しやすいです。" },
  { q: "障がい者向けの転職エージェントはありますか？", a: "atGP、dodaチャレンジ、ランスタッドなど障がい者雇用に特化したエージェントがあります。IT特化型エージェントと併用することで、より多くの選択肢を確保できます。" },
];

export default function DisabilityPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="障がいのあるエンジニアの転職支援 | ミドルエンジニア転職ラボ" description="障がいのあるエンジニアが転職を成功させるための支援制度、合理的配慮の求め方、おすすめの転職サービスを解説。IT業界の障がい者雇用の実態も紹介します。" url="/knowledge/disability/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "障がいのあるエンジニアの転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">障がいのあるエンジニアの転職支援</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 支援制度と合理的配慮の活用法</p>

        <section className="mb-10"><p className="text-slate-600 leading-relaxed mb-4">IT業界はリモートワークや成果ベースの評価が浸透しており、障がいのあるエンジニアにとって働きやすい環境が整っています。適切な支援制度を活用することで、スキルに見合ったキャリアを築くことが可能です。</p></section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動のステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "自分に必要な合理的配慮を整理する", desc: "通院頻度、物理的なバリアフリー、コミュニケーション方法の配慮など、自分が必要としている配慮を具体的にリストアップしましょう。" },
              { num: "2", title: "障がい者雇用枠と一般枠の両方を検討する", desc: "スキルが十分であれば一般枠でも応募可能。障がい者雇用枠は合理的配慮を受けやすいメリットがあります。両方に応募するのが効果的です。" },
              { num: "3", title: "専門エージェントとIT特化型エージェントを併用する", desc: "atGP等の障がい者雇用専門エージェントと、レバテックキャリア等のIT特化型エージェントの両方に登録しましょう。" },
              { num: "4", title: "面接で合理的配慮について話し合う", desc: "面接では障がいについて正直に伝え、必要な配慮を具体的に相談しましょう。対応してくれる企業は入社後も働きやすい環境を提供してくれます。" },
              { num: "5", title: "内定条件に合理的配慮を含めて確認する", desc: "内定承諾前に、配慮内容が条件に含まれているか書面で確認。口約束ではなく正式な合意を得ましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT企業で受けられる合理的配慮の例</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">障がいの種類</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">配慮の例</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">IT業界の対応状況</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">身体障がい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">フルリモートワーク、バリアフリーオフィス</td><td className="border border-slate-200 px-4 py-3 text-slate-600">対応企業が多い</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">聴覚障がい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">チャットベースのコミュニケーション</td><td className="border border-slate-200 px-4 py-3 text-slate-600">IT業界は元々テキストベース</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">視覚障がい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">スクリーンリーダー対応、大画面モニター</td><td className="border border-slate-200 px-4 py-3 text-slate-600">開発環境の調整で対応可</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">精神障がい・発達障がい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">静かな作業環境、フレックス、通院配慮</td><td className="border border-slate-200 px-4 py-3 text-slate-600">理解のある企業が増加中</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職を成功させるポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. スキルで勝負する</h3><p className="text-sm text-blue-700">障がいの有無に関わらず、技術力が評価基準です。ポートフォリオやGitHubで実力を示しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. リモートワークを最大限活用する</h3><p className="text-sm text-blue-700">通勤の負担がなくなるだけで大きく働きやすくなります。フルリモート求人を積極的に探しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 必要な配慮は具体的に伝える</h3><p className="text-sm text-blue-700">抽象的ではなく「週1回の通院のため水曜午後に2時間の休みが必要」のように具体的に伝えましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. 支援制度を積極的に活用する</h3><p className="text-sm text-blue-700">就労移行支援、障がい者雇用促進法に基づく支援、助成金制度など、活用できる制度は多いです。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. 入社後も継続的にコミュニケーションする</h3><p className="text-sm text-blue-700">入社後も上司や人事と定期的に配慮の状況を確認しましょう。必要に応じて調整を依頼することが長く働くコツです。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたに合った転職サポートを受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントならスキルに見合った求人を紹介。障がい者雇用専門エージェントとの併用がおすすめです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
