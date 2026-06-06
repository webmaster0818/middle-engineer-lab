import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "データベースエンジニアの転職ガイド【SQL/DBA】年収・求人・将来性",
  description:
    "データベースエンジニア（DBA）の転職市場を徹底解説。平均年収500〜800万円、SQL/NoSQL需要の背景、データベースエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "データベースエンジニアの平均年収は？",
    a: "30代で500万〜800万円が相場です。Oracle/SQL Serverの大規模DB運用経験があれば600万〜850万円、データアーキテクトクラスでは900万〜1,100万円の求人もあります。クラウドDB（Aurora、BigQuery等）のスキルがあるとさらに高くなります。",
  },
  {
    q: "データベースエンジニアの需要は今後も続く？",
    a: "続きます。データ量の爆発的増加により、データベースの設計・運用・最適化ができるエンジニアの需要は高まっています。特にクラウドDB、データウェアハウス、リアルタイムデータ処理の領域で需要が拡大中です。",
  },
  {
    q: "RDBとNoSQLのどちらを学ぶべき？",
    a: "まずはRDB（PostgreSQL/MySQL）の基礎を固めることをおすすめします。SQL、正規化、インデックス設計、トランザクション管理は全てのDB技術の基礎です。その上でNoSQL（MongoDB、Redis、DynamoDB等）を用途に応じて学びましょう。",
  },
  {
    q: "DBAの求人はどんな企業が多い？",
    a: "金融機関、大手SIer、ECサイト運営企業、SaaS企業に多いです。特にOracle/SQL ServerのDBAは金融・製造業で安定した需要があり、PostgreSQL/MySQLはWeb系企業での需要が高いです。",
  },
  {
    q: "アプリケーションエンジニアからDBAに転向できる？",
    a: "転向可能です。アプリケーション開発でSQLやDB設計の経験があれば、DBA転向のハードルは低いです。パフォーマンスチューニング、バックアップ/リカバリ、レプリケーション設計など運用面の知識を追加で学びましょう。",
  },
  {
    q: "データベースエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（インフラ・DB案件に強い）、マイナビIT AGENT（SIer系企業のDBA求人が豊富）、ビズリーチ（ハイクラスデータエンジニア案件）の3社がおすすめです。Oracle Master等の資格も転職に有利です。",
  },
];

export default function SqlSkillPage() {
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
        title="データベースエンジニアの転職ガイド【SQL/DBA】年収・求人・将来性"
        description="データベースエンジニア（DBA）の転職市場を徹底解説。平均年収500〜800万円、SQL/NoSQL需要の背景、データベースエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/sql/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "データベースエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データベースエンジニアの転職ガイド【SQL/DBA】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | データベースエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            データベースエンジニア（DBA）は、企業のデータ基盤を設計・構築・運用する専門職です。ビッグデータ時代を迎え、データの管理・活用は企業の競争力に直結しており、DB専門人材の需要は年々高まっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、データベースエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500〜800万</p>
                <p className="text-sm text-slate-600 mt-1">30代DBエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+25%</p>
                <p className="text-sm text-slate-600 mt-1">クラウドDB求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.6倍</p>
                <p className="text-sm text-slate-600 mt-1">DB求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* DBが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースエンジニアの需要が高い理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ量の爆発的増加</h3>
              <p className="text-sm text-blue-700">
                IoT、SNS、EC取引などにより企業が扱うデータ量は年々増加しています。大規模データを効率的に管理・活用するためのDB設計・運用スキルを持つエンジニアは引く手あまたです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドDBへの移行需要</h3>
              <p className="text-sm text-blue-700">
                オンプレミスDBからAurora、Cloud SQL、Azure SQL Database等のクラウドDBへの移行プロジェクトが多数進行中です。マイグレーションの設計・実行ができるエンジニアの需要が急増しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データウェアハウス/データレイクの構築</h3>
              <p className="text-sm text-blue-700">
                BigQuery、Snowflake、Redshiftなどのデータウェアハウスを活用したデータ分析基盤の構築需要が拡大中です。DBエンジニアからデータエンジニアへのキャリアパスも広がっています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "DBA（データベース管理者）", range: "500万〜800万円", note: "DB設計・運用・パフォーマンスチューニング" },
              { role: "データエンジニア", range: "600万〜950万円", note: "データパイプライン構築、ETL/ELT設計" },
              { role: "データアーキテクト", range: "800万〜1,200万円", note: "データ基盤全体の設計、データガバナンス" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-blue-600 font-bold mb-1">{item.range}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 転職のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "SQLの実践力を証明する", desc: "複雑なJOIN、Window関数、CTE、実行計画の読み解き、インデックス設計など、SQLの実践力を示すポートフォリオを準備しましょう。LeetCode等のSQL問題で腕を磨くのも効果的です。" },
              { num: "2", title: "クラウドDB+IaCのスキルを掛け合わせる", desc: "Aurora、BigQuery、DynamoDBなどクラウドDBの経験に加え、TerraformでのDB環境構築自動化スキルがあると、モダンなインフラチームで重宝されます。" },
              { num: "3", title: "資格を取得する", desc: "Oracle Master Gold、AWS Database Specialty、Google Cloud Data Engineerなどの資格は転職で高く評価されます。特にOracle Masterは金融系企業での転職に非常に有利です。" },
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
          <h2 className="text-xl font-bold mb-3">データベースのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            DB/データエンジニアの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
