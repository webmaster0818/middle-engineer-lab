import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Meta Japan エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "Meta（旧Facebook）Japanへのエンジニア転職を徹底解説。年収1200〜2500万円、業界最高水準の報酬、面接プロセスを現場目線でまとめました。",
};

const faqs = [
  {
    q: "Meta Japanのエンジニア年収が高い理由は？",
    a: "基本給に加えてRSU（株式報酬）の割合が大きいためです。特にE5（シニア）以上では年間1000万円超のRSUが付与されることもあり、総報酬は業界トップクラスです。",
  },
  {
    q: "Meta Japanの面接はどんな形式ですか？",
    a: "コーディング面接（2回）、システムデザイン面接（1回）、行動面接（1回）が一般的です。コーディングはLeetCode Medium〜Hard相当で、45分で2問解くペースが求められます。",
  },
  {
    q: "Meta Japanにはどんなチームがありますか？",
    a: "Instagram、WhatsApp、Reality Labs（メタバース）、AIリサーチなどのチームがあります。日本法人では特にAI/ML関連とインフラ系のポジションが多いです。",
  },
  {
    q: "Meta Japanで英語力はどの程度必要ですか？",
    a: "ほぼ全業務が英語で行われるため、ビジネスレベル以上の英語力が必須です。面接も全て英語で実施されます。",
  },
  {
    q: "Meta Japanのエンジニア文化の特徴は？",
    a: "「Move Fast」の文化が根付いており、スピーディーなリリースサイクルが特徴です。Bootcamp制度で入社後6週間の研修があり、配属チームを自分で選べます。",
  },
  {
    q: "Meta Japanへの転職で有利な経験は？",
    a: "大規模システムの開発経験、React/React Nativeの実務経験、ML/AI分野の研究・開発経験が特に有利です。OSS貢献も高く評価されます。",
  },
];

export default function MetaCompanyPage() {
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
      <ArticleJsonLd title="Meta Japan エンジニア転職ガイド" description="Meta Japanへのエンジニア転職を徹底解説。年収1200〜2500万円、業界最高水準の報酬、面接プロセスを現場目線でまとめました。" url="/company/meta/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Meta Japan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Meta Japan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 業界最高水準の報酬を誇るSNS・メタバース企業</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "Facebook Japan合同会社（Meta）"],
                ["業種", "SNS・メタバース・AI"],
                ["従業員数", "約500名（日本法人）"],
                ["平均年収", "1,200〜2,500万円（エンジニア職）"],
                ["本社所在地", "東京都港区"],
                ["技術スタック", "Hack(PHP) / Python / C++ / React / PyTorch / GraphQL"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">業界最高水準のRSU報酬</h3>
              <p className="text-sm text-blue-700">Metaは外資系IT企業の中でもRSU（株式報酬）の比率が高く、E5（シニア）以上では総報酬が2000万円を超えることも珍しくありません。年4回のベスティングで安定的にRSUが付与されます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Bootcamp制度で配属チームを選択</h3>
              <p className="text-sm text-blue-700">入社後6週間のBootcamp期間中に複数チームのプロジェクトを経験し、自分で配属先を選べるユニークな制度です。ミスマッチのリスクが低く、エンジニアの満足度が高いです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI・メタバース領域の最先端</h3>
              <p className="text-sm text-blue-700">LLaMA等のOSSモデル開発、Reality Labsでのメタバース開発など、最先端技術に触れられます。PyTorchの開発元でもあり、ML/AIエンジニアにとって魅力的な環境です。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Python / C++ / Java いずれかでの実務経験3年以上</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>アルゴリズム・データ構造の深い理解（LeetCode Medium〜Hard）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>大規模分散システムの設計・実装経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ビジネスレベル以上の英語力（全業務英語）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>React / React Native の実務経験（フロントエンド職の場合）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ML/AI分野の研究または実務経験（ML職の場合）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ（総報酬）</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "E3", "1,000〜1,400万円"],
                  ["ミドルエンジニア", "E4", "1,400〜1,900万円"],
                  ["シニアエンジニア", "E5", "1,900〜2,600万円"],
                  ["スタッフエンジニア", "E6", "2,600〜3,500万円"],
                  ["エンジニアリングマネージャー", "M1+", "2,200〜3,200万円"],
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Meta Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "Meta案件を扱うヘッドハンターが多数在籍。ハイクラス外資求人に特化。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で外資系エンジニア転職に強い。面接対策サポートが充実。" },
              { name: "リクルートダイレクトスカウト", href: "/review/recruit-it/", desc: "年収1000万超の外資系求人が豊富。スカウト型で効率的。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
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
          <h2 className="text-xl font-bold mb-3">Meta Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google Japan", href: "/company/google/" },
              { name: "Amazon Japan", href: "/company/amazon/" },
              { name: "Microsoft Japan", href: "/company/microsoft/" },
              { name: "Apple Japan", href: "/company/apple/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
