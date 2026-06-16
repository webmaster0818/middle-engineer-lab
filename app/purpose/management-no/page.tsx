import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "マネジメントしたくないエンジニアの転職【IC キャリア完全ガイド】",
  description:
    "マネジメントをせずに技術で勝負したいエンジニア向けのキャリアパスを解説。ICトラック、スタッフエンジニア、年収、おすすめ企業を紹介します。",
};

const faqs = [
  {
    q: "マネジメントしないと年収は上がらない？",
    a: "いいえ、IC（Individual Contributor）トラックを設けている企業では、スタッフエンジニアやプリンシパルエンジニアとして年収1,000万円以上も可能です。特にメガベンチャーや外資系はICの年収レンジが高いです。",
  },
  {
    q: "ICトラックがある企業の見分け方は？",
    a: "求人情報で「スタッフエンジニア」「プリンシパルエンジニア」「テクニカルフェロー」のポジションがあるか、エンジニアのキャリアラダー（等級制度）が公開されているかを確認しましょう。",
  },
  {
    q: "マネジメントを断ると評価が下がる？",
    a: "ICトラックが整備されていない企業では下がる可能性があります。転職の際は「ICとしてのキャリアパスが明確な企業」を選びましょう。面接でキャリアラダーについて質問するのが有効です。",
  },
  {
    q: "ICトラックのシニアレベル以上はどんな仕事？",
    a: "技術的な意思決定、アーキテクチャ設計、社内の技術標準化、難易度の高い技術課題の解決、メンタリング（管理ではなく技術指導）が主な役割です。チーム横断で技術的な影響力を発揮します。",
  },
  {
    q: "35歳以降もICで働ける？",
    a: "はい、外資系やメガベンチャーでは40代、50代のICが普通にいます。日系でもICトラックを整備する企業が増えています。スキルを磨き続ける限り、年齢制限はありません。",
  },
  {
    q: "ICとテックリードの違いは？",
    a: "テックリードはチームの技術方針を決め、メンバーのコードレビューやメンタリングを行うため、マネジメント的な要素が30〜50%含まれます。純粋なICはマネジメント要素が0〜10%です。",
  },
];

export default function ManagementNoPage() {
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
      <ArticleJsonLd title="マネジメントしたくないエンジニアの転職【ICキャリア完全ガイド】" description="マネジメントをせずに技術で勝負したいエンジニア向けのキャリアパスを解説。ICトラック、スタッフエンジニア、年収、おすすめ企業を紹介します。" url="/purpose/management-no/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "目的別ガイド", href: "/purpose/" }, { name: "マネジメントしたくないエンジニアの転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">マネジメントしたくないエンジニアの転職</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ICキャリアで技術を極める方法</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- コードを書き続けたい。管理業務は避けたい</li>
              <li>- 技術力で年収を上げたい</li>
              <li>- 「30代以降はマネジメント」という風潮に疑問がある</li>
              <li>- スタッフエンジニアやプリンシパルエンジニアを目指したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ICトラックの年収比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">レベル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">年収目安</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">マネジメント比率</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">影響範囲</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "シニアエンジニア", salary: "600〜900万円", mgmt: "0〜10%", scope: "チーム内" },
                  { level: "スタッフエンジニア", salary: "900〜1,500万円", mgmt: "5〜15%", scope: "チーム横断" },
                  { level: "プリンシパルエンジニア", salary: "1,200〜2,000万円", mgmt: "5〜15%", scope: "部門横断" },
                  { level: "ディスティングイッシュトEng", salary: "1,500〜2,500万円", mgmt: "0〜10%", scope: "全社" },
                  { level: "テクニカルフェロー", salary: "2,000万円〜", mgmt: "0〜10%", scope: "業界" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.level}</td>
                    <td className="px-4 py-3 text-slate-600">{row.salary}</td>
                    <td className="px-4 py-3 text-slate-600">{row.mgmt}</td>
                    <td className="px-4 py-3 text-slate-600">{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ICキャリアを実現する方法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ICトラックがある企業を選ぶ", desc: "キャリアラダーが公開されている企業、スタッフエンジニアの求人がある企業を選びましょう。面接でICトラックの詳細を確認してください。" },
              { num: "2", title: "技術的な専門性を深める", desc: "一つの領域（バックエンド、SRE、ML等）で深い専門性を持つことが、ICとしての市場価値を高めます。" },
              { num: "3", title: "技術的な影響力を発揮する", desc: "社内の技術標準策定、アーキテクチャ決定、OSS活動、技術ブログ等で影響力を広げましょう。" },
              { num: "4", title: "外資系・メガベンチャーを視野に入れる", desc: "外資系IT企業やメガベンチャーはICトラックが確立されており、高い年収が期待できます。" },
              { num: "5", title: "メンタリング（管理ではなく指導）を行う", desc: "ICでも後輩の技術指導は求められます。管理ではなく技術的なメンタリングスキルを磨きましょう。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用法</h2>
          <div className="space-y-3">
            {[
              { name: "Findy", point: "スキル偏差値でマッチング。IC向けのハイクラス求人が多い。" },
              { name: "レバテックキャリア", point: "技術力を正しく評価してくれる企業の紹介に強い。" },
              { name: "転職ドラフト", point: "年収付きで指名が届く。ICとしての市場価値を確認できる。" },
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
          <h2 className="text-xl font-bold mb-3">ICキャリアの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">マネジメントなしで技術を極められるポジションをプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "技術力を伸ばせる企業の選び方", href: "/purpose/growth/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
