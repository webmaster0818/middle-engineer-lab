import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職のポートフォリオ作成ガイド【GitHub活用】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職で評価されるポートフォリオの作り方を解説。GitHubプロフィールの最適化、個人プロジェクトの選び方、30代・40代エンジニアならではのアピールポイントを紹介します。",
};

const faqs = [
  {
    q: "30代・40代エンジニアにもポートフォリオは必要ですか？",
    a: "必須ではありませんが、あると書類選考の通過率が大幅に上がります。特にSIerからWeb系への転職や、新しい技術領域への挑戦では、実際にコードが書けることの証明になります。職務経歴書だけでは伝わらない技術力をアピールする手段として有効です。",
  },
  {
    q: "ポートフォリオに載せるプロジェクトは何がいいですか？",
    a: "実用的なWebアプリケーション（タスク管理、ブログ、APIなど）が最も評価されます。重要なのは「数より質」。1〜2個の完成度の高いプロジェクトがあれば十分です。テストコード、CI/CD、READMEの充実度も評価ポイントになります。",
  },
  {
    q: "GitHubのプロフィールはどう整えるべきですか？",
    a: "プロフィールREADMEを作成し、得意技術・経験領域・連絡先を記載しましょう。ピン留めリポジトリには最も見てほしいプロジェクトを設定。コントリビューションの草（緑のグラフ）は定期的な活動の証明になるので、毎日少しでもコードを書くのがおすすめです。",
  },
  {
    q: "業務で作ったコードはポートフォリオに載せていいですか？",
    a: "業務コードをそのまま公開することは守秘義務違反になるため絶対に避けてください。ただし、業務で培った知見を活かして「類似の仕組み」を個人で作り直し、公開するのは問題ありません。社内ツールの汎用版を作るなどがよくあるパターンです。",
  },
  {
    q: "ポートフォリオ作成にどのくらいの期間がかかりますか？",
    a: "1つのプロジェクトであれば、平日夜と週末の作業で1〜2ヶ月が目安です。完璧を目指す必要はなく、基本機能の実装、テスト、デプロイ、READMEの整備ができていれば十分です。転職活動と並行して進めましょう。",
  },
  {
    q: "技術ブログもポートフォリオになりますか？",
    a: "なります。Zenn、Qiita、はてなブログなどで技術記事を発信していると、技術への理解度や言語化能力の証明になります。特に30代以上のエンジニアが技術記事を書いていると、ナレッジ共有やチーム貢献の姿勢として高く評価されます。",
  },
];

export default function PortfolioPage() {
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
          { name: "ポートフォリオ作成ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職のポートフォリオ作成ガイド【GitHub活用】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 転職で評価されるポートフォリオの作り方
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職において、ポートフォリオは「コードが書ける」ことの最も強力な証明になります。特にSIerからWeb系への転職や、新しい技術領域への挑戦では、職務経歴書以上に重要な役割を果たします。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが転職で評価されるポートフォリオの作り方、GitHubプロフィールの最適化方法、そして効率的な作成手順を解説します。
          </p>
        </section>

        {/* ポートフォリオで評価されるポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">採用担当がポートフォリオで見るポイント</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["コードの品質", "可読性、命名規則、適切な設計パターンの適用"],
                  ["テストコード", "ユニットテスト、統合テストの有無と品質"],
                  ["README", "プロジェクト概要、セットアップ手順、技術選定理由の記載"],
                  ["CI/CD", "GitHub Actionsなどの自動化パイプラインの構築"],
                  ["Git運用", "適切なコミットメッセージ、ブランチ戦略"],
                  ["デプロイ", "実際に動くURLがあるか（Vercel、Cloudflareなど）"],
                ].map(([item, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {item}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GitHub最適化 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GitHubプロフィールの最適化</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロフィールREADMEを作成する</h3>
              <p className="text-sm text-blue-700">
                GitHub上にユーザー名と同じリポジトリを作成し、README.mdを設置すると、プロフィールページに表示されます。得意技術、経験年数、興味のある分野、連絡先を簡潔に記載しましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ピン留めリポジトリを設定する</h3>
              <p className="text-sm text-blue-700">
                最大6つのリポジトリをピン留めできます。最も自信のあるプロジェクト、技術力が伝わるプロジェクトを選んで設定しましょう。各リポジトリの説明文（Description）も忘れずに記載してください。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">コントリビューションの草を育てる</h3>
              <p className="text-sm text-blue-700">
                緑色のコントリビューショングラフは、継続的な活動の証明になります。毎日のコミットが理想ですが、週に3〜4日の活動でも十分です。見せかけだけの空コミットは避け、実のある活動を心がけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめプロジェクト例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポートフォリオにおすすめのプロジェクト例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "フルスタックWebアプリ",
                stack: "Next.js + TypeScript + PostgreSQL",
                desc: "CRUD機能、認証、APIの実装を網羅。フロントエンドとバックエンドの両方の力を示せる。",
              },
              {
                title: "REST API / GraphQL API",
                stack: "Go or Node.js + Docker",
                desc: "設計力、テストコード、API仕様書（OpenAPI）の品質で技術力を示せる。",
              },
              {
                title: "CLI ツール / ライブラリ",
                stack: "Go or Rust or Python",
                desc: "日常的な問題を解決するツール。パッケージ公開まで行うと高評価。",
              },
              {
                title: "インフラ as Code",
                stack: "Terraform + AWS + GitHub Actions",
                desc: "インフラ・SRE志望なら必須。IaCのベストプラクティスを実践できていることを示せる。",
              },
            ].map((project, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{project.title}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{project.stack}</p>
                <p className="text-sm text-slate-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 作成ステップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポートフォリオ作成の5ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "テーマとスコープを決める", desc: "自分のアピールしたい技術領域に合ったプロジェクトを選ぶ。スコープは小さめに設定し、完成を最優先にする。" },
              { step: "2", title: "技術選定とアーキテクチャ設計", desc: "使用技術の選定理由をREADMEに明記。面接で「なぜこの技術を選んだか」を聞かれるので、理由を意識して選ぶ。" },
              { step: "3", title: "実装 + テスト", desc: "機能を段階的に実装し、各機能にテストコードを書く。テストカバレッジ70%以上が目安。" },
              { step: "4", title: "CI/CD + デプロイ", desc: "GitHub Actionsでテスト自動化。Vercel、Cloudflare Pages、Renderなど無料のホスティングでデプロイ。" },
              { step: "5", title: "READMEとドキュメント整備", desc: "プロジェクト概要、技術選定理由、セットアップ手順、アーキテクチャ図を記載。日本語+英語が理想。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代ならではのポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアのポートフォリオ戦略</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">設計力をアピールする</h3>
              <p className="text-sm text-slate-600">
                若手エンジニアとの差別化ポイントは「設計力」です。ディレクトリ構成、レイヤードアーキテクチャ、適切な抽象化など、コードの構造自体で経験値をアピールしましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">業務で培った知見を反映する</h3>
              <p className="text-sm text-slate-600">
                エラーハンドリング、ログ設計、セキュリティ対策、パフォーマンスチューニングなど、実務経験がないと意識しにくい観点をポートフォリオに反映することで、シニアエンジニアとしての実力が伝わります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">技術ブログと合わせてアピールする</h3>
              <p className="text-sm text-slate-600">
                ポートフォリオの技術選定理由や設計判断を技術ブログ記事として発信すると、技術力と言語化能力の両方をアピールできます。Zenn、Qiita、はてなブログなどで公開しましょう。
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
          <h2 className="text-xl font-bold mb-3">ポートフォリオと一緒に転職活動を始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、ポートフォリオのアドバイスや企業が求める技術レベルも教えてもらえます。
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
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "SESから脱出！転職成功ガイド", href: "/industry/ses-exit/" },
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
