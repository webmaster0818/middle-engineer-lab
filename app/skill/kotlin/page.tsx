import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Kotlinエンジニアの転職ガイド【Android+サーバーサイド】年収・求人・将来性",
  description:
    "Kotlinエンジニアの転職市場を徹底解説。平均年収550〜800万円、Android開発からサーバーサイドまで、Kotlinエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Kotlinエンジニアの平均年収は？",
    a: "30代で550万〜800万円が相場です。Androidアプリ開発では550万〜750万円、サーバーサイドKotlin（Spring Boot等）では600万〜850万円が目安です。フルスタックで対応できるエンジニアは900万円超も狙えます。",
  },
  {
    q: "KotlinはAndroid以外でも需要がある？",
    a: "あります。サーバーサイドKotlin（Spring Boot + Kotlin）の採用企業が増加しており、Webバックエンド領域でも需要が拡大中です。Kotlin Multiplatformによるクロスプラットフォーム開発も注目されています。",
  },
  {
    q: "JavaからKotlinへの転向は難しい？",
    a: "Java経験者にとってKotlinの習得は比較的容易です。KotlinはJVMベースでJavaとの互換性が高く、1〜2ヶ月で基礎は習得できます。null安全、拡張関数、コルーチンなどKotlin固有の機能に慣れることがポイントです。",
  },
  {
    q: "Kotlinの求人はどんな企業が多い？",
    a: "メガベンチャー（LINE、PayPay等）、モバイルアプリ開発会社、SaaS企業に多いです。GoogleがAndroidの推奨言語としてKotlinを採用したことで、ほぼすべてのAndroid開発企業がKotlinエンジニアを求めています。",
  },
  {
    q: "Kotlin未経験でも転職は可能？",
    a: "Java、Scalaなど他のJVM言語の実務経験があれば、Kotlin未経験でも採用されるケースは多いです。個人でKotlinのアプリやAPIサーバーを作りGitHubに公開しておくと、選考で有利になります。",
  },
  {
    q: "Kotlinエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（モバイル案件に強い）、Geekly（Web系スタートアップのKotlin求人）、ビズリーチ（ハイクラスKotlin案件）の3社がおすすめです。Android開発経験を活かした転職をサポートしてくれます。",
  },
];

export default function KotlinSkillPage() {
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
        title="Kotlinエンジニアの転職ガイド【Android+サーバーサイド】年収・求人・将来性"
        description="Kotlinエンジニアの転職市場を徹底解説。平均年収550〜800万円、Android開発からサーバーサイドまで、Kotlinエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/kotlin/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Kotlinエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Kotlinエンジニアの転職ガイド【Android+サーバーサイド】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Kotlinエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            KotlinはGoogleがAndroid開発の推奨言語として公式採用した言語で、そのモダンな文法、null安全性、Javaとの完全な互換性から、モバイルアプリからサーバーサイドまで幅広い領域で採用が進んでいます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Kotlinエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kotlinエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">550〜800万</p>
                <p className="text-sm text-slate-600 mt-1">30代Kotlinエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+35%</p>
                <p className="text-sm text-slate-600 mt-1">Kotlin求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.8倍</p>
                <p className="text-sm text-slate-600 mt-1">Kotlin求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kotlinが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kotlinの需要が拡大している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Android開発の標準言語</h3>
              <p className="text-sm text-blue-700">
                GoogleがKotlinをAndroid開発の推奨言語に指定し、新規プロジェクトのほとんどがKotlinで開発されています。Jetpack ComposeによるモダンUI開発もKotlin前提で設計されています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">サーバーサイドでの採用拡大</h3>
              <p className="text-sm text-blue-700">
                Spring BootがKotlinを公式サポートしたことで、サーバーサイドKotlinの採用企業が急増しています。Javaの冗長な記述をKotlinで簡潔に書けるため、開発生産性が大幅に向上します。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Kotlin Multiplatformの台頭</h3>
              <p className="text-sm text-blue-700">
                Kotlin Multiplatformにより、iOS・Android・Web・デスクトップで共通のビジネスロジックを共有できます。クロスプラットフォーム開発の新たな選択肢として注目を集めています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kotlinエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Androidエンジニア", range: "550万〜800万円", note: "Jetpack Compose+Kotlinでのモダンアプリ開発" },
              { role: "サーバーサイドエンジニア", range: "600万〜850万円", note: "Spring Boot+KotlinでのAPI/マイクロサービス開発" },
              { role: "テックリード/アーキテクト", range: "800万〜1,100万円", note: "Kotlin基盤のシステム設計+チームリード" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kotlinエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "GitHubにKotlinプロジェクトを公開する", desc: "AndroidアプリやSpring Bootで作ったAPIサーバーなど、Kotlinで書いたプロジェクトをGitHubに公開しましょう。Coroutine、Flowの活用度もチェックされます。" },
              { num: "2", title: "Jetpack Composeを習得する", desc: "Android開発ではJetpack Composeが主流になりつつあります。宣言的UIの設計パターンを理解し、実践的なアプリを作れることが大きなアドバンテージです。" },
              { num: "3", title: "サーバーサイドKotlinの経験を積む", desc: "Android+サーバーサイドの両方をKotlinで対応できるフルスタックエンジニアは市場価値が高く、年収800万円以上が狙えます。" },
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
          <h2 className="text-xl font-bold mb-3">Kotlinのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Kotlinの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "Swift/iOS転職ガイド", href: "/skill/swift/" },
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
