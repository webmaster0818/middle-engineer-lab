import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニアの職務経歴書の書き方【テンプレート付き】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職で書類選考を突破する職務経歴書の書き方を徹底解説。30代・40代エンジニア向けのテンプレートと、技術力を正しく伝えるコツを紹介します。",
};

const faqs = [
  {
    q: "職務経歴書の適切な長さは？",
    a: "A4で2〜3枚が適切です。10年以上の経歴がある30代後半〜40代の場合でも、最大4枚を目安にしましょう。直近3〜5年の経験を厚く、それ以前は概要のみの構成が読みやすいです。",
  },
  {
    q: "使用技術の書き方にコツはありますか？",
    a: "「経験年数・習熟度・プロジェクトでの使用規模」をセットで書くのがポイントです。例：「TypeScript（3年 / 業務レベル / 月間10万PVのWebアプリ開発で使用）」。単にスキル名を羅列するだけでは技術力が伝わりません。",
  },
  {
    q: "プロジェクト経験はどのように書くべきですか？",
    a: "各プロジェクトについて「期間、チーム規模、自分の役割、使用技術、成果（数値）」を記載します。成果は「レスポンスタイムを40%改善」「テストカバレッジを80%に向上」のように必ず数値で表現しましょう。",
  },
  {
    q: "転職回数が多い場合、職務経歴書はどう書くべきですか？",
    a: "各社での在籍期間が短い場合は、「キャリアの一貫したテーマ」を冒頭のサマリーで示すことが重要です。例：「一貫してバックエンド開発に携わり、Java→Kotlin→Goと技術の幅を広げてきました」のように、転職の理由にストーリー性を持たせましょう。",
  },
  {
    q: "GitHubやポートフォリオは記載すべきですか？",
    a: "必ず記載しましょう。特にWeb系企業はGitHubのアクティビティやコードの品質を重視します。OSS活動、個人開発プロジェクト、技術ブログのURLも記載することで、書類選考の通過率が大幅に上がります。",
  },
  {
    q: "職務経歴書の添削はどこで受けられますか？",
    a: "IT特化型転職エージェントに登録すれば、無料で職務経歴書の添削を受けられます。レバテックキャリアやGeeklyのアドバイザーはエンジニアの職務経歴書に精通しており、企業に刺さるポイントを具体的にアドバイスしてくれます。",
  },
];

export default function ResumePage() {
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
          { name: "転職ナレッジ" },
          { name: "職務経歴書の書き方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの職務経歴書の書き方【テンプレート付き】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 書類選考突破率を上げる職務経歴書のコツ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職では、職務経歴書が最初の関門です。技術力を正しく伝え、書類選考を突破するためには、エンジニアならではの書き方のコツがあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが書類選考を確実に突破するための職務経歴書の書き方を、テンプレートと具体例を交えて解説します。
          </p>
        </section>

        {/* 基本構成 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア職務経歴書の基本構成</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "職務要約（サマリー）", desc: "3〜5行でキャリアの概要を簡潔にまとめる。得意分野、経験年数、実績のハイライトを含める。採用担当が最初に読む部分。" },
              { num: "2", title: "技術スキル一覧", desc: "言語、フレームワーク、インフラ、ツールをカテゴリ別に整理。経験年数と習熟度を併記する。" },
              { num: "3", title: "職務経歴（直近から逆時系列）", desc: "各社の概要、在籍期間、担当プロジェクト、自分の役割、使用技術、具体的な成果を記載。" },
              { num: "4", title: "自己PR", desc: "技術面の強み、マネジメント経験、ビジネス貢献を3つ程度に絞ってアピール。" },
              { num: "5", title: "保有資格・OSS活動・GitHub", desc: "関連する資格、OSS貢献、個人プロジェクト、技術ブログのURLを記載。" },
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

        {/* テンプレート例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務要約のテンプレートと記載例</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-slate-700 mb-3 text-sm">良い例（30代バックエンドエンジニア）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Webアプリケーション開発に8年間従事。直近5年はTypeScript/Node.jsを中心としたバックエンド開発をリードし、月間100万PVのECサイトのAPI設計・実装を担当。チーム（5名）のテックリードとして技術選定・コードレビュー・新メンバーの育成を担当し、リリースサイクルを月次からWeeklyに短縮。AWS上のインフラ設計・運用にも携わり、サーバーコストを年間30%削減した実績があります。
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-700 mb-3 text-sm">悪い例（避けるべき書き方）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Web開発の経験があります。JavaScriptやPythonが使えます。チームでの開発経験もあります。コミュニケーション能力が高く、チームワークを大切にしています。新しい技術の習得にも意欲的です。
            </p>
            <p className="text-xs text-red-600 mt-2">
              → 具体性がなく、経験年数・プロジェクト規模・成果が不明。どの企業にも同じ内容を送っている印象を与えてしまう。
            </p>
          </div>
        </section>

        {/* プロジェクト経験の書き方 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロジェクト経験の効果的な書き方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">期間</span>
                <span className="text-slate-600">2024年4月〜2025年12月（1年9ヶ月）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">プロジェクト</span>
                <span className="text-slate-600">BtoB SaaSプラットフォームのバックエンドリニューアル</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">チーム規模</span>
                <span className="text-slate-600">8名（エンジニア5名、デザイナー1名、PM2名）</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">役割</span>
                <span className="text-slate-600">テックリード / バックエンド設計・実装</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">使用技術</span>
                <span className="text-slate-600">Go, gRPC, PostgreSQL, Redis, AWS (ECS, RDS, ElastiCache), Terraform, GitHub Actions</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <span className="font-medium text-slate-700">成果</span>
                <span className="text-slate-600">APIレスポンスタイムを平均200ms→50msに改善（75%削減）。モノリスからマイクロサービスへの段階的移行を設計・推進し、デプロイ頻度を月1回→週3回に向上。</span>
              </div>
            </div>
          </div>
        </section>

        {/* 差がつくポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">書類選考で差がつく5つのポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 成果を必ず数値で表現する</h3>
              <p className="text-sm text-blue-700">
                「パフォーマンスを改善」ではなく「レスポンスタイムを75%改善」。「売上に貢献」ではなく「CVR15%向上で月間売上200万円増加」。数値があるだけで説得力が格段に上がります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 技術選定の理由を書く</h3>
              <p className="text-sm text-blue-700">
                「Goを使用」だけでなく「高い並行処理性能とシンプルなエラーハンドリングのためにGoを選定」と理由を添える。技術的な判断力が伝わります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 直近の経験を厚く書く</h3>
              <p className="text-sm text-blue-700">
                5年前以上の経験は概要のみで十分。直近2〜3年のプロジェクトを詳細に書くことで、現在の技術力レベルが正確に伝わります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 応募企業に合わせてカスタマイズする</h3>
              <p className="text-sm text-blue-700">
                応募企業の技術スタックや求めるスキルに合わせて、強調するポイントを微調整しましょう。1つの職務経歴書を全企業に使い回すのは避けるべきです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. GitHub / ポートフォリオURLを記載する</h3>
              <p className="text-sm text-blue-700">
                コードの品質を直接確認できるGitHubや、成果物を見られるポートフォリオのURLは必ず記載しましょう。書類だけでは伝わらない技術力をアピールできます。
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
          <h2 className="text-xl font-bold mb-3">職務経歴書のプロ添削を無料で受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、エンジニアの職務経歴書に精通したアドバイザーが無料で添削してくれます。
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
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
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
