import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "paiza転職｜コーディングテストで実力アピールする転職サービス",
  description:
    "paiza転職を30代・40代エンジニア目線で徹底レビュー。スキルランク制、コーディングテストで書類選考免除、エンジニア特化の転職サービスの実力を口コミで検証します。",
};

const reviews = [
  {
    label: "30代前半 / バックエンドエンジニア",
    stars: 5,
    date: "2025年2月",
    text: "コーディングテストでSランクを取得したところ、書類選考なしで面接に進める企業が10社以上ありました。学歴や職歴に自信がなくても、実力で勝負できるのがpaizaの魅力です。最終的にSaaS企業に年収120万UPで転職しました。",
  },
  {
    label: "30代後半 / サーバーサイドエンジニア",
    stars: 4,
    date: "2025年1月",
    text: "Aランクでの転職活動でしたが、十分な求人がありました。コーディングテストの結果がそのまま企業に共有されるので、技術力を証明する手間が省けます。ただ、コーディングテストの問題が競プロ寄りで、実務スキルとは少しずれる部分もあります。",
  },
  {
    label: "30代前半 / Pythonエンジニア",
    stars: 4,
    date: "2024年12月",
    text: "Python/機械学習の経験を活かして、AI系スタートアップに転職しました。paizaのスキルランクがあると、企業側も技術力を信頼してくれるので面接がスムーズに進みます。求人はWeb系・スタートアップが中心です。",
  },
  {
    label: "40代前半 / Javaエンジニア",
    stars: 3,
    date: "2024年10月",
    text: "40代でもスキルランクが高ければ求人はあります。ただ、全体的に若手エンジニア向けの求人が多い印象です。PM・マネジメント職の求人は少ないので、40代で技術職を続けたい方向けのサービスだと思います。",
  },
];

const faqs = [
  {
    q: "paiza転職の利用は無料ですか？",
    a: "はい、求職者は完全無料で利用できます。コーディングテストの受験、求人への応募、企業とのやりとりすべて無料です。",
  },
  {
    q: "スキルランクとは何ですか？",
    a: "paiza独自のコーディングテストの結果に基づくランクです。S/A/B/C/D/Eの6段階があり、ランクが高いほど応募できる求人が増え、書類選考免除の企業も増えます。",
  },
  {
    q: "コーディングテストの内容は？",
    a: "アルゴリズム・データ構造を中心としたプログラミング問題です。Python、Java、Ruby、PHP、JavaScript、C++など多数の言語に対応しています。制限時間内に正確なコードを書くことが求められます。",
  },
  {
    q: "書類選考免除とは？",
    a: "一定以上のスキルランク（S/A/Bなど、企業によって異なる）を持っていると、職務経歴書による書類選考をスキップして直接面接に進めるシステムです。技術力で勝負したいエンジニアに有利です。",
  },
  {
    q: "どんな企業の求人がありますか？",
    a: "Web系企業、SaaS企業、スタートアップが中心です。メガベンチャーや上場企業の求人もあります。SIer系の求人は少なめです。",
  },
  {
    q: "他の転職サービスと併用すべきですか？",
    a: "おすすめです。paiza転職（技術力で勝負）+ レバテックキャリア（エージェントサポート）の組み合わせで、技術力と交渉力の両面をカバーできます。",
  },
];

export default function PaizaReview() {
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
          { name: "レビュー", href: "/#ranking" },
          { name: "paiza転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          paiza転職｜コーディングテストで実力アピールする転職サービス
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2025年4月 | スキルランク制で技術力を可視化するエンジニア転職を徹底検証
        </p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "paiza株式会社"],
                ["求人数", "5,000件以上"],
                ["対応エリア", "全国（東京中心・リモート求人あり）"],
                ["得意分野", "Web系・SaaS・スタートアップ"],
                ["年収帯", "年収400万〜800万が中心"],
                ["対象年代", "20代後半〜30代（技術力重視）"],
                ["料金", "完全無料"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                    {label}
                  </th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">paiza転職の強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">コーディングテストで実力を証明</h3>
              <p className="text-sm text-blue-700">
                paiza独自のコーディングテストでスキルランクを取得し、そのランクを企業にアピールできます。学歴や職歴ではなく、純粋な技術力で評価されるため、実力はあるが経歴に自信がないエンジニアに最適です。テスト結果は複数企業に使い回せるので効率的です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スキルランクで書類選考免除</h3>
              <p className="text-sm text-blue-700">
                S/A/Bランクなど一定以上のスキルランクを持つと、書類選考なしで直接面接に進める企業が多数あります。通常の転職活動では書類で落とされがちなケースでも、技術力で突破できるのがpaizaの大きな強みです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エンジニアの年収UP実績</h3>
              <p className="text-sm text-blue-700">
                paiza経由の転職では、スキルランクに見合った年収提示を受けやすく、年収UPの実績が豊富です。企業側もスキルランクを参考に年収を決定するため、技術力を正当に評価してもらえる仕組みが整っています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  技術力で評価される公平な仕組み
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  書類選考免除で効率的
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  コーディングテスト結果の使い回し可
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 shrink-0">+</span>
                  年収UP実績が豊富
                </li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  競プロ寄りの問題で実務と乖離あり
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  求人数は大手に比べて少ない
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 shrink-0">-</span>
                  40代・マネジメント職向け求人は少なめ
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用者の口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-slate-700">{review.label}</span>
                  <span className="text-yellow-500 text-sm">
                    {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                  </span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
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
          <h2 className="text-xl font-bold mb-3">paiza転職に無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            コーディングテストであなたのスキルランクを確認してみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料登録してテストを受ける
          </a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "Green", href: "/review/green/" },
              { name: "ビズリーチ(IT)", href: "/review/bizreach-it/" },
              { name: "Geekly", href: "/review/geekly/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の詳細レビュー →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
