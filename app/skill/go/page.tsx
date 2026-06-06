import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Go言語エンジニアの転職ガイド【需要急増中】年収・求人・将来性",
  description:
    "Go言語エンジニアの転職市場を徹底解説。平均年収650〜950万円、マイクロサービス需要急増の背景、Goエンジニアのキャリアパス、おすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Go言語エンジニアの平均年収は？",
    a: "30代で650万〜950万円が相場です。Goはバックエンド言語の中でもトップクラスの年収水準を誇ります。マイクロサービスやクラウドインフラの経験を掛け合わせると、1,000万円超も狙えます。",
  },
  {
    q: "Go言語の需要は今後も続く？",
    a: "続くと予想されます。Kubernetes、Docker、TerraformなどクラウドネイティブのコアツールがGoで開発されており、マイクロサービスアーキテクチャの普及とともにGoエンジニアの需要は拡大しています。",
  },
  {
    q: "Java/PHPからGoへの転向は難しい？",
    a: "Goは言語仕様がシンプルなため、他言語の経験があれば2〜3ヶ月で基礎は習得できます。ただしGoの設計思想（エラーハンドリング、goroutine、interfaceの使い方）に慣れるには実務経験が必要です。",
  },
  {
    q: "Go言語の求人はどんな企業が多い？",
    a: "メガベンチャー（メルカリ、サイバーエージェント等）、SaaS企業、フィンテック企業、インフラ系企業に多いです。マイクロサービス化を進める企業がGoを採用するケースが増えています。",
  },
  {
    q: "Go言語未経験でも転職は可能？",
    a: "Java、Python、C++など静的型付け言語の実務経験があれば、Go未経験でも採用されるケースがあります。ポテンシャル採用を行う企業も多いので、個人でGoのプロジェクトを作りGitHubに公開しておくと有利です。",
  },
  {
    q: "Go言語エンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（Go求人の専門性が高い）、ビズリーチ（ハイクラスGo案件）、Geekly（Web系スタートアップのGo求人）の3社がおすすめです。Go言語に精通したアドバイザーがいるエージェントを選びましょう。",
  },
];

export default function GoSkillPage() {
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
        title="Go言語エンジニアの転職ガイド【需要急増中】年収・求人・将来性"
        description="Go言語エンジニアの転職市場を徹底解説。平均年収650〜950万円、マイクロサービス需要急増の背景、Goエンジニアのキャリアパス、おすすめ転職エージェントを紹介します。"
        url="/skill/go/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Go言語エンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Go言語エンジニアの転職ガイド【需要急増中】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | Go言語エンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Go言語はGoogleが開発した言語で、そのシンプルさ、高いパフォーマンス、優れた並行処理機能から、マイクロサービスやクラウドインフラ領域で採用が急増しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Go言語エンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Go言語エンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">650〜950万</p>
                <p className="text-sm text-slate-600 mt-1">30代Go言語エンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+45%</p>
                <p className="text-sm text-slate-600 mt-1">Go言語求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.2倍</p>
                <p className="text-sm text-slate-600 mt-1">Go求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Goが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Go言語の需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マイクロサービスとの相性が抜群</h3>
              <p className="text-sm text-blue-700">
                Goは軽量なバイナリを生成でき、コンテナ環境との相性が極めて良いです。Docker、Kubernetesとの組み合わせでマイクロサービスを構築する企業が増えており、Goエンジニアの需要を押し上げています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">高いパフォーマンス</h3>
              <p className="text-sm text-blue-700">
                GoはC言語に迫るパフォーマンスを持ちながら、Pythonのような書きやすさを兼ね備えています。大規模トラフィックを処理するAPIサーバー、リアルタイム処理基盤など、パフォーマンスが求められる領域で採用されています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドネイティブのデファクトスタンダード</h3>
              <p className="text-sm text-blue-700">
                Kubernetes、Docker、Terraform、Prometheus、etcdなど、クラウドインフラの主要ツールがGoで開発されています。クラウドネイティブ領域で働くなら、Goの知識は必須と言えます。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Go言語エンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", range: "650万〜900万円", note: "GoでのAPI開発、マイクロサービス構築が中心" },
              { role: "SRE/プラットフォームエンジニア", range: "750万〜1,100万円", note: "Go+Kubernetes+Terraformのスキルセット" },
              { role: "テックリード/アーキテクト", range: "900万〜1,200万円", note: "Go基盤のシステム設計+チームリード" },
              { role: "フリーランス（Go案件）", range: "月80万〜130万円", note: "マイクロサービス、API開発案件が豊富" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Go言語エンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "GitHubにGoプロジェクトを公開する", desc: "REST APIサーバー、CLIツール、Kubernetesオペレーターなど、Goで書いたプロジェクトをGitHubに公開しましょう。テストの充実度、ドキュメントの質もチェックされます。" },
              { num: "2", title: "Goの設計思想を理解する", desc: "goroutineとchannelを使った並行処理、interface設計、エラーハンドリングパターンなど、Go独自の設計思想を深く理解していることが差別化のポイントです。" },
              { num: "3", title: "クラウドインフラの知識を掛け合わせる", desc: "Go+AWS/GCP+Kubernetes+Terraformのスキルセットは最強です。Goだけでなくインフラの知識も持つことで、年収800万〜1,000万円以上が狙えます。" },
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
          <h2 className="text-xl font-bold mb-3">Go言語のスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Go言語の求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "データサイエンティストの転職ガイド", href: "/skill/data-scientist/" },
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
