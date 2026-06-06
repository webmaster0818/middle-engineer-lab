import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Flutterエンジニアの転職ガイド【クロスプラットフォーム】年収・求人・将来性",
  description:
    "Flutterエンジニアの転職市場を徹底解説。平均年収500〜800万円、クロスプラットフォーム開発の需要、Flutterエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Flutterエンジニアの平均年収は？",
    a: "30代で500万〜800万円が相場です。iOS/Android両方を1人で開発できるため、モバイルチームのコスト効率化に貢献でき、企業からの評価が高いです。シニアクラスでは850万〜1,000万円も狙えます。",
  },
  {
    q: "Flutterの需要は今後も続く？",
    a: "拡大傾向です。GoogleがFlutterの開発に注力しており、モバイル・Web・デスクトップのマルチプラットフォーム対応が進んでいます。スタートアップを中心に開発効率を重視する企業がFlutterを選択するケースが増えています。",
  },
  {
    q: "React NativeとFlutterはどちらが有利？",
    a: "求人数ではReact Nativeがやや多いですが、Flutterは成長率が高く、パフォーマンスやUI品質でも優位性があります。Dart言語の習得が必要ですが、TypeScript経験者であれば比較的スムーズに移行できます。",
  },
  {
    q: "Flutterの求人はどんな企業が多い？",
    a: "スタートアップ（MVP開発）、BtoCアプリ企業、フィンテック企業に多いです。少人数でiOS/Android両対応のアプリを効率的に開発したい企業がFlutterを採用しています。",
  },
  {
    q: "ネイティブ開発経験がなくてもFlutterで転職できる？",
    a: "転職可能です。FlutterはWidget単位でUIを構築するため、ネイティブのUIKit/Jetpack Composeの知識がなくても開発できます。ただし、ネイティブ連携（プラットフォームチャネル）の知識があるとさらに評価されます。",
  },
  {
    q: "Flutterエンジニアにおすすめの転職エージェントは？",
    a: "Geekly（スタートアップのFlutter求人が豊富）、レバテックキャリア（モバイル案件全般に強い）、ビズリーチ（ハイクラスモバイル案件）の3社がおすすめです。Flutterのポートフォリオアプリを準備しましょう。",
  },
];

export default function FlutterSkillPage() {
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
        title="Flutterエンジニアの転職ガイド【クロスプラットフォーム】年収・求人・将来性"
        description="Flutterエンジニアの転職市場を徹底解説。平均年収500〜800万円、クロスプラットフォーム開発の需要、Flutterエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/flutter/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Flutterエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Flutterエンジニアの転職ガイド【クロスプラットフォーム】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Flutterエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            FlutterはGoogleが開発したクロスプラットフォームフレームワークで、1つのコードベースからiOS、Android、Web、デスクトップアプリを構築できます。開発効率とUI品質の高さから、スタートアップから大企業まで採用が広がっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Flutterエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutterエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500〜800万</p>
                <p className="text-sm text-slate-600 mt-1">30代Flutterエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+55%</p>
                <p className="text-sm text-slate-600 mt-1">Flutter求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3.5倍</p>
                <p className="text-sm text-slate-600 mt-1">Flutter求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flutterが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutterの需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">開発コストの大幅削減</h3>
              <p className="text-sm text-blue-700">
                iOS/Android別々に開発するとコストが2倍ですが、Flutterなら1つのコードベースで両プラットフォームに対応できます。スタートアップや限られたリソースで効率的にアプリを開発したい企業にFlutterが選ばれています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ネイティブ級のパフォーマンス</h3>
              <p className="text-sm text-blue-700">
                FlutterはSkia/Impellerレンダリングエンジンにより、ネイティブアプリに匹敵するパフォーマンスとスムーズなアニメーションを実現します。UIのカスタマイズ性も高く、ブランド独自のデザインを忠実に再現できます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マルチプラットフォーム対応の拡大</h3>
              <p className="text-sm text-blue-700">
                Flutter 3以降、iOS/Androidに加えてWeb、Windows、macOS、Linuxにも対応しました。1つのコードベースで6プラットフォームをカバーできるため、企業のマルチプラットフォーム戦略に最適です。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutterエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Flutterモバイルエンジニア", range: "500万〜800万円", note: "iOS/Android両対応のアプリ開発" },
              { role: "モバイルテックリード", range: "750万〜1,000万円", note: "Flutter導入推進、アーキテクチャ設計" },
              { role: "フリーランス（Flutter案件）", range: "月75万〜110万円", note: "スタートアップのMVP開発、BtoCアプリ開発" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutterエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "FlutterアプリをApp Store/Google Playに公開する", desc: "実際にストアに公開されたFlutterアプリがあることが最大のアピールです。Riverpod/BLoCによる状態管理、APIの連携、プッシュ通知の実装など実務レベルの機能を含めましょう。" },
              { num: "2", title: "Dart言語の深い理解を示す", desc: "isolate、Stream、非同期処理、ジェネリクスなど、Dart言語の特性を深く理解していることが面接で評価されます。pub.devでパッケージを公開するのも有効です。" },
              { num: "3", title: "ネイティブ連携の知識を持つ", desc: "プラットフォームチャネルによるネイティブコードとの連携、カメラ・GPS・Bluetoothなどのデバイス機能へのアクセスなど、ネイティブ連携の経験があると市場価値が高まります。" },
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
          <h2 className="text-xl font-bold mb-3">Flutterのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Flutterの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Swift/iOS転職ガイド", href: "/skill/swift/" },
              { name: "Kotlin転職ガイド", href: "/skill/kotlin/" },
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
