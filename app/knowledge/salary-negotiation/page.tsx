import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニア転職の年収交渉テクニック【100万円UPの実例】",
  description:
    "エンジニア転職で年収100万円アップを実現する交渉テクニックを解説。交渉のタイミング、伝え方、NGワード、エージェント活用法を具体例とともに紹介します。",
};

const faqs = [
  {
    q: "年収交渉はいつ切り出すべき？",
    a: "最終面接後〜内定提示時がベストタイミングです。一次面接で年収の話をすると「お金にしか興味がない」と思われるリスクがあります。企業が「この人を採用したい」と思った段階で交渉するのが最も効果的です。",
  },
  {
    q: "年収交渉で伝えるべき根拠は？",
    a: "「市場相場」「自分のスキルの希少性」「他社のオファー額」の3つが有効な根拠です。転職エージェントに市場相場を確認し、客観的なデータに基づいた交渉をしましょう。",
  },
  {
    q: "年収交渉はエージェントに任せた方がいい？",
    a: "はい、エージェント経由の方が成功率が高いです。エージェントは年収交渉のプロであり、企業との関係を維持しながら効果的に交渉してくれます。自分で直接交渉するよりも、気まずさなく希望を伝えられます。",
  },
  {
    q: "年収交渉で失敗するとどうなる？",
    a: "常識的な範囲の交渉であれば、内定が取り消されることはまずありません。ただし現実離れした金額（現年収の2倍など）を要求すると、印象が悪くなります。10〜20%アップを目安に交渉しましょう。",
  },
  {
    q: "前職の年収を聞かれたらどう答える？",
    a: "正直に答えましょう。嘘をつくと、源泉徴収票の提出時にバレるリスクがあります。前職年収が低い場合は「前職では○○の理由で低く抑えられていましたが、市場相場では○○万円が妥当と考えています」と市場相場に話をずらすのがポイントです。",
  },
  {
    q: "年収以外に交渉すべきポイントは？",
    a: "リモートワーク制度、フレックスタイム、副業可否、ストックオプション、書籍購入費、カンファレンス参加費など、年収以外の条件も交渉対象です。年収の上乗せが難しい場合、これらの条件で補完することも有効です。",
  },
];

export default function SalaryNegotiationPage() {
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
        title="エンジニア転職の年収交渉テクニック【100万円UPの実例】"
        description="エンジニア転職で年収100万円アップを実現する交渉テクニックを解説。交渉のタイミング、伝え方、NGワード、エージェント活用法を具体例とともに紹介します。"
        url="/knowledge/salary-negotiation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "年収交渉テクニック" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の年収交渉テクニック【100万円UPの実例】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 年収交渉で損しないための実践ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニア転職で年収交渉をしないのは損です。転職エージェントの調査によると、年収交渉をした人の約65%が希望額に近い金額で合意に至っています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、年収100万円アップを実現した実例をもとに、エンジニアのための年収交渉テクニックを解説します。
          </p>
        </section>

        {/* 年収100万UPの実例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収100万円UPの交渉実例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロフィール</span>
                <span className="text-slate-600">34歳バックエンドエンジニア / Go + AWS経験4年</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">前職年収</span>
                <span className="text-slate-600">600万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">希望年収</span>
                <span className="text-slate-600">700万〜750万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">初回提示額</span>
                <span className="text-slate-600">650万円</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">最終合意額</span>
                <span className="text-slate-600 font-bold text-blue-600">720万円（+120万円UP）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">交渉ポイント</span>
                <span className="text-slate-600">Go言語+AWS経験の市場相場を提示。他社からの700万円オファーを交渉材料として活用。エージェントが企業と直接交渉。</span>
              </div>
            </div>
          </div>
        </section>

        {/* 交渉テクニック */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収交渉の5つのテクニック</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "市場相場を事前に調べる", desc: "転職エージェントに自分のスキルセットの市場相場を確認しましょう。「Go言語3年+AWS経験」「TypeScript5年+チームリード経験」など、具体的な条件での相場を把握しておくことが交渉の基盤です。" },
              { num: "2", title: "希望額は「レンジ」で伝える", desc: "「700万円」とピンポイントで伝えるより「700万〜750万円」とレンジで伝えましょう。企業側に交渉の余地を残しつつ、最低ラインを明示できます。" },
              { num: "3", title: "複数のオファーを持つ", desc: "複数の企業から同時にオファーを受けることで、交渉力が格段に上がります。「他社から○○万円のオファーをいただいている」は最も強力な交渉材料です。" },
              { num: "4", title: "年収の根拠を「成果」で示す", desc: "「前職でレスポンスタイムを75%改善した」「テストカバレッジ80%を達成した」など、具体的な成果を年収交渉の根拠として示しましょう。" },
              { num: "5", title: "エージェントの交渉力を活用する", desc: "年収交渉はエージェントに任せるのが最も効率的です。エージェントは企業の年収テーブルや予算を把握しており、最大限の年収を引き出すノウハウを持っています。" },
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

        {/* NGワード */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収交渉で避けるべきNGワード</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「生活が苦しいので上げてほしい」</h3>
              <p className="text-sm text-red-700">個人的な事情は交渉の根拠になりません。企業が求めるのは「あなたの市場価値に見合った報酬」です。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「前職では○○万円もらっていたので」</h3>
              <p className="text-sm text-red-700">前職の年収は参考値にすぎません。市場相場と自分のスキルに基づいた交渉をしましょう。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">「御社の提示額では低すぎます」</h3>
              <p className="text-sm text-red-700">否定的な表現は避けましょう。「ありがたいオファーですが、市場相場を考慮して○○万円を希望します」とポジティブに伝えましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">年収交渉のプロに無料で任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントの年収交渉力を活用して、最大限の年収アップを実現しましょう。
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
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
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
