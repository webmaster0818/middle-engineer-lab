import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Swift/iOSエンジニアの転職ガイド【モバイル】年収・求人・将来性",
  description:
    "Swift/iOSエンジニアの転職市場を徹底解説。平均年収550〜850万円、モバイル開発需要の背景、iOSエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Swift/iOSエンジニアの平均年収は？",
    a: "30代で550万〜850万円が相場です。SwiftUIを使いこなせるシニアiOSエンジニアは800万〜1,000万円、テックリードクラスでは1,000万円超も狙えます。フリーランスでは月単価80万〜120万円が中心です。",
  },
  {
    q: "Swift/iOSの需要は今後も続く？",
    a: "続きます。iPhoneのシェアは日本で約65%と圧倒的で、BtoC向けモバイルアプリのiOS対応は必須です。Apple Vision ProによるvisionOS開発やSwiftUIの進化により、Swiftエンジニアの活躍領域は広がっています。",
  },
  {
    q: "Objective-CからSwiftへの移行は難しい？",
    a: "Swift自体の習得は比較的容易ですが、SwiftUIやCombine、async/awaitなどモダンなSwift開発パターンの習得には2〜3ヶ月が必要です。既存のObjective-CコードベースをSwiftに移行するスキルは市場価値が高いです。",
  },
  {
    q: "iOSの求人はどんな企業が多い？",
    a: "メガベンチャー（LINE、メルカリ等）、BtoCアプリ企業、フィンテック企業、ヘルスケアアプリ企業に多いです。自社サービスを持つ企業でのiOS専任エンジニアの需要が特に高いです。",
  },
  {
    q: "AndroidからiOSへの転向は可能？",
    a: "モバイル開発の基礎知識（UI設計、ライフサイクル、API連携等）は共通するため、転向は十分可能です。SwiftUIとJetpack Composeは設計思想が似ているため、Android経験者はSwiftUI習得がスムーズです。",
  },
  {
    q: "iOSエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（モバイル案件に特化したアドバイザー在籍）、Geekly（スタートアップのiOS求人が豊富）、ビズリーチ（ハイクラスiOS案件）の3社がおすすめです。ポートフォリオアプリの準備も重要です。",
  },
];

export default function SwiftSkillPage() {
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
        title="Swift/iOSエンジニアの転職ガイド【モバイル】年収・求人・将来性"
        description="Swift/iOSエンジニアの転職市場を徹底解説。平均年収550〜850万円、モバイル開発需要の背景、iOSエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/swift/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Swift/iOSエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Swift/iOSエンジニアの転職ガイド【モバイル】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Swift/iOSエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            SwiftはAppleが開発したプログラミング言語で、iOS、macOS、watchOS、visionOSアプリの開発に使われています。SwiftUIの登場により開発効率が大幅に向上し、Apple Vision Proの発売でvisionOS開発という新たな領域も生まれています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Swift/iOSエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOSエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">550〜850万</p>
                <p className="text-sm text-slate-600 mt-1">30代iOSエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+20%</p>
                <p className="text-sm text-slate-600 mt-1">iOS求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.0倍</p>
                <p className="text-sm text-slate-600 mt-1">iOS求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Swiftが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOSエンジニアの需要が高い理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">日本のiPhoneシェアが圧倒的</h3>
              <p className="text-sm text-blue-700">
                日本のスマートフォン市場でiPhoneのシェアは約65%と世界的にも突出して高く、BtoC向けモバイルアプリ開発ではiOS版の優先開発が求められます。iOSエンジニアの需要は安定的に高い水準を維持しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SwiftUIによるモダン開発</h3>
              <p className="text-sm text-blue-700">
                SwiftUIは宣言的UIフレームワークとして年々進化しており、iOS、macOS、watchOS、visionOSを統一的に開発できます。SwiftUIを使いこなせるエンジニアは高い市場価値を持っています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">visionOS（Apple Vision Pro）の登場</h3>
              <p className="text-sm text-blue-700">
                Apple Vision Proの発売により、空間コンピューティング（visionOS）アプリの開発需要が新たに生まれています。Swift+RealityKitのスキルを持つエンジニアは先行者利益を得られる可能性があります。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOSエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "iOSエンジニア", range: "550万〜850万円", note: "SwiftUI/UIKitでのiOSアプリ開発" },
              { role: "モバイルテックリード", range: "800万〜1,100万円", note: "iOS/Androidチームのリード、アーキテクチャ設計" },
              { role: "フリーランスiOSエンジニア", range: "月80万〜120万円", note: "自社サービス企業でのiOS開発案件" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOSエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "App Storeにアプリを公開する", desc: "個人開発のアプリをApp Storeに公開していることが最大のアピールポイントです。SwiftUI、Core Data、CloudKitなどの活用度やUIデザインの質もチェックされます。" },
              { num: "2", title: "SwiftUIとUIKitの両方を理解する", desc: "新規開発ではSwiftUIが主流ですが、既存アプリの保守ではUIKitの知識が必要です。両方を理解し、段階的な移行ができるスキルが求められます。" },
              { num: "3", title: "アーキテクチャ設計力をアピールする", desc: "MVVM、Clean Architecture、The Composable Architectureなど、iOSアプリのアーキテクチャパターンを理解し、プロジェクトに適した設計を選択できることが差別化のポイントです。" },
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
          <h2 className="text-xl font-bold mb-3">Swift/iOSのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            iOSの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Kotlinエンジニア転職ガイド", href: "/skill/kotlin/" },
              { name: "Flutter転職ガイド", href: "/skill/flutter/" },
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
