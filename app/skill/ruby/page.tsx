import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Ruby on Railsエンジニアの転職ガイド【スタートアップ】年収・求人・将来性",
  description:
    "Ruby on Railsエンジニアの転職市場を徹底解説。平均年収500〜750万円、スタートアップでの需要、Railsエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Ruby on Railsエンジニアの平均年収は？",
    a: "30代で500万〜750万円が相場です。スタートアップのCTO/VPoEクラスでは800万〜1,200万円、フリーランスでは月単価70万〜100万円の案件が中心です。Rails+React/Vue.jsのフルスタックエンジニアは特に高単価です。",
  },
  {
    q: "Ruby on Railsの需要は今後も続く？",
    a: "スタートアップやWebサービス企業では引き続き高い需要があります。プロトタイプの高速開発、MVPの構築にRailsは最適であり、Shopify、GitHub、Airbnbなど大手サービスもRailsで稼働しています。ただし新規採用はPython/Goに押される傾向もあります。",
  },
  {
    q: "Railsから他の言語に転向すべき？",
    a: "Rails自体の需要は安定していますが、Go言語やTypeScriptを掛け合わせることでキャリアの選択肢が広がります。Railsで培ったWeb開発の設計力は他言語でも活きるため、完全転向よりもスキルの幅を広げる戦略がおすすめです。",
  },
  {
    q: "Railsの求人はどんな企業が多い？",
    a: "スタートアップ（シード〜シリーズB）、自社サービス企業、メガベンチャー（クックパッド、freee等）に多いです。BtoB SaaS企業でもRailsを採用しているケースが多く、安定した求人があります。",
  },
  {
    q: "Rails未経験でも転職は可能？",
    a: "PHP（Laravel）やPython（Django）などWeb系フレームワークの経験があれば、Rails未経験でも転職可能です。Railsの思想（Convention over Configuration）を理解し、個人でRailsアプリを作ってデプロイすると評価されます。",
  },
  {
    q: "Railsエンジニアにおすすめの転職エージェントは？",
    a: "Geekly（スタートアップのRails求人が豊富）、レバテックキャリア（Web系企業の求人に強い）、Green（自社サービス企業中心）の3社がおすすめです。Railsに精通したアドバイザーがいるエージェントを選びましょう。",
  },
];

export default function RubySkillPage() {
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
        title="Ruby on Railsエンジニアの転職ガイド【スタートアップ】年収・求人・将来性"
        description="Ruby on Railsエンジニアの転職市場を徹底解説。平均年収500〜750万円、スタートアップでの需要、Railsエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/ruby/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Ruby on Railsエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Ruby on Railsエンジニアの転職ガイド【スタートアップ】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Ruby on Railsエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Ruby on Railsは高速なWebアプリケーション開発を可能にするフレームワークとして、スタートアップや自社サービス企業で広く採用されています。「設定より規約」の思想により、少人数チームでも効率的にプロダクトを開発できます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Railsエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Ruby on Railsエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500〜750万</p>
                <p className="text-sm text-slate-600 mt-1">30代Railsエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+8%</p>
                <p className="text-sm text-slate-600 mt-1">Rails求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.5倍</p>
                <p className="text-sm text-slate-600 mt-1">Rails求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Railsが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Railsの需要が安定している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">スタートアップのMVP開発に最適</h3>
              <p className="text-sm text-blue-700">
                Railsの高い生産性により、最小限のリソースで素早くプロダクトをリリースできます。スタートアップの初期開発でRailsが選ばれ続けている理由です。Hotwire/Turboの登場でフロントエンド開発も効率化されました。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大規模サービスでの実績</h3>
              <p className="text-sm text-blue-700">
                Shopify、GitHub、Airbnb、Cookpad、freeeなど、数億ユーザー規模のサービスがRailsで稼働しています。スケーラビリティの実績があり、エンタープライズでの採用も進んでいます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">成熟したエコシステム</h3>
              <p className="text-sm text-blue-700">
                RubyGemsによる豊富なライブラリ、RSpecによるテスト文化、Active Recordによる効率的なDB操作など、20年以上の歴史で成熟したエコシステムがRailsの強みです。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Railsエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", range: "500万〜750万円", note: "Rails API開発、DB設計、パフォーマンス最適化" },
              { role: "フルスタックエンジニア", range: "600万〜850万円", note: "Rails+React/Vue.jsでのフルスタック開発" },
              { role: "CTO/VPoE（スタートアップ）", range: "800万〜1,200万円", note: "技術戦略策定、チームビルディング" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Railsエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "RailsアプリをHeroku/Renderにデプロイする", desc: "ポートフォリオとして、認証・CRUD・API連携を含むRailsアプリを作り、実際にデプロイしましょう。RSpecでテストを書き、CI/CDも構築するとさらに評価されます。" },
              { num: "2", title: "フロントエンド技術を掛け合わせる", desc: "Rails+Hotwire/Turboによるモダンなフロントエンド開発、またはRails API+React/Vue.jsのSPA構成の経験があると、フルスタックとして高い市場価値を得られます。" },
              { num: "3", title: "パフォーマンスチューニングの知識をつける", desc: "N+1問題の解決、クエリ最適化、キャッシュ戦略、Sidekiqによる非同期処理など、Railsアプリのパフォーマンスチューニング知識は面接で高く評価されます。" },
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
          <h2 className="text-xl font-bold mb-3">Ruby on Railsのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Railsの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "PHPエンジニア転職ガイド", href: "/skill/php/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
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
