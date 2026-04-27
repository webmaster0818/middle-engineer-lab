import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SIerからWeb系に転職するには【完全ガイド】| ミドルエンジニア転職ラボ",
  description:
    "SIerからWeb系自社開発企業への転職を徹底解説。必要なスキル、年収変動、転職準備のステップ、おすすめエージェントまで、SIer出身者のキャリアチェンジを完全サポートします。",
};

const faqs = [
  {
    q: "SIerからWeb系に転職すると年収は下がりますか？",
    a: "必ずしも下がるわけではありません。大手SIerからスタートアップへの転職では一時的に下がることもありますが、メガベンチャーやSaaS企業であればSIer時代と同等以上の年収が見込めます。レバテックキャリア経由の場合、SIerからWeb系への転職でも約60%が年収UPを実現しています。",
  },
  {
    q: "SIer経験は何年あればWeb系に転職できますか？",
    a: "一般的に3年以上の開発経験があれば転職可能です。ただし、SIerでの経験内容が重要で、実際にコードを書いていた経験があるかどうかがポイントです。プロジェクト管理のみの経験の場合は、個人開発やポートフォリオの準備が必要になります。",
  },
  {
    q: "SIerとWeb系で最も大きな違いは何ですか？",
    a: "開発スタイルの違いが最大です。SIerはウォーターフォール型で上流から下流へ分業するのに対し、Web系はアジャイル開発で企画〜デプロイまでチームで一貫して行います。また、技術選定の自由度、リリースサイクルの速さ、エンジニアの裁量もWeb系の方が大きい傾向にあります。",
  },
  {
    q: "Web系転職のために何を学ぶべきですか？",
    a: "最低限、Git/GitHub、モダンなWebフレームワーク（React、Next.jsなど）、クラウドサービス（AWS/GCP）、CI/CDの基礎知識は必要です。加えて、個人開発でポートフォリオを作成し、GitHubで公開しておくと書類選考の通過率が大幅に上がります。",
  },
  {
    q: "30代後半でもSIerからWeb系に転職できますか？",
    a: "可能ですが、30代前半と比較するとハードルは上がります。30代後半の場合は、テックリードやアーキテクトとしてのポジションを狙うか、SIerでの業界知識を活かせるDX推進ポジションがおすすめです。IT特化型エージェントに相談すれば、あなたの経験に合った求人を紹介してもらえます。",
  },
  {
    q: "SIerからWeb系転職に強いエージェントは？",
    a: "レバテックキャリアはWeb系自社開発企業との強いパイプラインがあり、SIerからの転職実績が豊富です。Geeklyも書類選考通過率が業界平均の3.4倍と高く、SIer出身者の転職に強いエージェントです。2社以上に登録して比較検討するのがおすすめです。",
  },
];

export default function SierToWebPage() {
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
          { name: "業界別ガイド" },
          { name: "SIerからWeb系への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SIerからWeb系に転職するには【完全ガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | SIer→Web系キャリアチェンジの全工程を解説
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerで培った技術力や業務知識は、Web系企業でも十分に活かせます。近年はDX推進の流れもあり、SIer出身エンジニアを積極的に採用するWeb系企業が増えています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、SIerからWeb系への転職を成功させるための具体的なステップ、必要なスキル、年収の変動、おすすめのエージェントまで詳しく解説します。
          </p>
        </section>

        {/* SIer vs Web系 比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIerとWeb系の違い</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">項目</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">SIer</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">Web系</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["開発手法", "ウォーターフォール中心", "アジャイル / スクラム"],
                  ["技術選定", "顧客・社内標準に依存", "チーム / エンジニア裁量"],
                  ["リリース", "数ヶ月〜年単位", "週次〜デイリー"],
                  ["スキルの幅", "特定技術に深く", "フルスタック傾向"],
                  ["働き方", "客先常駐が多い", "自社オフィス / リモート"],
                  ["年収帯", "400〜800万円", "450〜1000万円"],
                ].map(([item, sier, web], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-700 border-b border-slate-200">{item}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{sier}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 転職準備ステップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIerからWeb系への転職準備5ステップ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Step 1: モダン技術のキャッチアップ</h3>
              <p className="text-sm text-blue-700">
                Git/GitHub、Docker、CI/CD、モダンフレームワーク（React/Vue/Next.js）、クラウド（AWS/GCP）の基礎を学びましょう。Udemyやドキュメントで独学可能です。実務でJava/C#を使っていた方は、TypeScriptへの移行が比較的スムーズです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Step 2: 個人開発でポートフォリオを作成</h3>
              <p className="text-sm text-blue-700">
                学んだ技術を使って実際にWebアプリケーションを作り、GitHubで公開しましょう。「コードが書けるSIerエンジニア」であることを証明するのが目的です。READMEの充実、テストコードの記述、CI/CDの設定まで行えると高評価です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Step 3: SIer経験の棚卸しと再定義</h3>
              <p className="text-sm text-blue-700">
                SIerでの経験をWeb系企業の文脈で再定義しましょう。「要件定義」→「プロダクト仕様策定」、「基本設計」→「アーキテクチャ設計」、「品質管理」→「テスト戦略策定」のように翻訳することで、経験の価値を正しく伝えられます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Step 4: IT特化型エージェントに登録</h3>
              <p className="text-sm text-blue-700">
                レバテックキャリアやGeeklyなど、Web系企業との強いパイプラインを持つエージェントに登録しましょう。SIerからの転職支援実績が豊富なアドバイザーが、あなたの経験を活かせる求人を提案してくれます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Step 5: カルチャーフィットを確認する</h3>
              <p className="text-sm text-blue-700">
                Web系企業はカルチャーを重視します。面接では技術力だけでなく、「なぜWeb系に行きたいのか」「どんな開発チームで働きたいのか」を明確に伝えましょう。カジュアル面談を活用して企業文化を事前に確認することも大切です。
              </p>
            </div>
          </div>
        </section>

        {/* SIer経験が活きるポジション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIer経験が特に活きるWeb系ポジション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "バックエンドエンジニア", desc: "Java/C#の経験がそのまま活きる。Go/TypeScriptへの転向も容易。" },
              { title: "SRE / インフラエンジニア", desc: "基盤設計の経験がクラウドインフラ構築で評価される。" },
              { title: "テックリード", desc: "設計力・プロジェクト推進力が武器に。35歳以上におすすめ。" },
              { title: "DX推進エンジニア", desc: "業務知識 x 技術力で、事業会社のDXを推進する。" },
            ].map((pos, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{pos.title}</h3>
                <p className="text-sm text-slate-600">{pos.desc}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">SIerからWeb系への転職、プロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、SIer出身者のキャリアチェンジ支援実績が豊富です。
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
              { name: "SESから脱出！転職成功ガイド", href: "/industry/ses-exit/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
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
