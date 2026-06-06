import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Google Japan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Google Japanへのエンジニア転職を徹底解説。年収1200〜2000万円、技術スタック、面接プロセス、求められるスキルを現場目線でまとめました。",
};

const faqs = [
  {
    q: "Google Japanのエンジニア中途採用は何が重視されますか？",
    a: "コーディング面接（LeetCode Hard相当）、システムデザイン面接、行動面接の3つが重視されます。特にアルゴリズムとデータ構造の深い理解が必須です。",
  },
  {
    q: "Google Japanの面接は英語ですか？",
    a: "基本的に英語で行われます。技術面接はすべて英語で、行動面接も英語が推奨されます。日本語のみの面接は原則ありません。",
  },
  {
    q: "Google Japanの平均年収はどのくらいですか？",
    a: "エンジニア職の場合、L3（ジュニア）で約1200万円、L5（シニア）で約1800〜2000万円、L6以上で2500万円超が目安です。RSU（株式報酬）込みの総報酬です。",
  },
  {
    q: "Google Japanに転職するのにおすすめの転職エージェントは？",
    a: "外資系IT企業に強いレバテックキャリア、ビズリーチ経由のヘッドハンター、またはLinkedIn経由の直接応募が一般的です。リクルートダイレクトスカウトも有効です。",
  },
  {
    q: "Google Japanのワークライフバランスはどうですか？",
    a: "非常に良好です。フレックスタイム制で、リモートワークも柔軟に対応。有給消化率も高く、20%ルール（業務時間の20%を自由なプロジェクトに充てる）も健在です。",
  },
  {
    q: "未経験からGoogle Japanに転職できますか？",
    a: "IT業界未経験からの直接転職は非常に困難です。まずは国内IT企業で3〜5年の実務経験を積み、アルゴリズム力を鍛えてから挑戦するのが現実的です。",
  },
];

export default function GoogleCompanyPage() {
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
        title="Google Japan エンジニア転職ガイド"
        description="Google Japanへのエンジニア転職を徹底解説。年収1200〜2000万円、技術スタック、面接プロセス、求められるスキルを現場目線でまとめました。"
        url="/company/google/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド", href: "/company/" },
          { name: "Google Japan" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Google Japan エンジニア転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 年収1200〜2000万円レンジの外資系トップ企業
        </p>

        {/* 企業概要テーブル */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "Google合同会社（Google Japan）"],
                ["業種", "インターネット・テクノロジー"],
                ["従業員数", "約2,000名（日本法人）"],
                ["平均年収", "1,200〜2,000万円（エンジニア職）"],
                ["本社所在地", "東京都渋谷区"],
                ["技術スタック", "Go / Python / Java / C++ / Kubernetes / GCP / TensorFlow"],
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

        {/* エンジニア採用の特徴 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">世界最高水準のコーディング面接</h3>
              <p className="text-sm text-blue-700">
                Google の面接は4〜5回のテクニカルインタビューで構成されます。LeetCode Hard相当のアルゴリズム問題、大規模システムの設計問題が出題され、ホワイトボードコーディングが求められます。準備期間として最低3〜6ヶ月は見ておきましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Googleyness（グーグリネス）評価</h3>
              <p className="text-sm text-blue-700">
                技術力だけでなく、Googleのカルチャーにフィットするかを「Googleyness」として評価します。曖昧な状況での判断力、チームへの貢献姿勢、知的好奇心などが問われる行動面接があります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">RSU（株式報酬）による高い総報酬</h3>
              <p className="text-sm text-blue-700">
                基本給に加えてRSU（制限付き株式ユニット）が付与されます。Alphabet株の値動きにより総報酬が大きく変わりますが、L5以上では年間数百万〜1000万円超のRSUが期待できます。
              </p>
            </div>
          </div>
        </section>

        {/* 求められるスキル・経験 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アルゴリズム・データ構造の深い理解（LeetCode Medium〜Hard）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Go / Python / Java / C++ いずれかの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模分散システムの設計・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ビジネスレベルの英語力（面接・業務ともに英語）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>コンピュータサイエンスの学位（推奨、必須ではない）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>OSS貢献やテックブログなどのアウトプット実績</li>
            </ul>
          </div>
        </section>

        {/* 年収レンジテーブル */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ（総報酬）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "L3", "1,000〜1,300万円"],
                  ["ミドルエンジニア", "L4", "1,300〜1,700万円"],
                  ["シニアエンジニア", "L5", "1,700〜2,200万円"],
                  ["スタッフエンジニア", "L6", "2,200〜3,000万円"],
                  ["エンジニアリングマネージャー", "L6+", "2,500〜3,500万円"],
                ].map(([pos, level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* おすすめ転職エージェント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Google Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で外資系求人にも強い。技術面接対策のサポートが充実。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス求人に特化。Google Japan案件を扱うヘッドハンターが多数在籍。" },
              { name: "リクルートダイレクトスカウト", href: "/review/recruit-it/", desc: "外資系企業の求人が豊富。年収1000万超の案件を直接スカウト。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
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
          <h2 className="text-xl font-bold mb-3">Google Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資IT企業への転職に強いエージェントに無料相談してみませんか？
          </p>
          <Link
            href="/review/levtech/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントを見る
          </Link>
        </section>

        {/* 関連企業ガイド */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Amazon Japan", href: "/company/amazon/" },
              { name: "Microsoft Japan", href: "/company/microsoft/" },
              { name: "Meta Japan", href: "/company/meta/" },
              { name: "Apple Japan", href: "/company/apple/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
