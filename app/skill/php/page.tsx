import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "PHPエンジニアの転職ガイド【Laravel/WordPress】年収・求人・将来性",
  description:
    "PHPエンジニアの転職市場を徹底解説。平均年収400〜650万円、Laravel需要の拡大、PHPエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "PHPエンジニアの平均年収は？",
    a: "30代で400万〜650万円が相場です。Laravel等モダンフレームワークを使いこなせるエンジニアは600万〜750万円、テックリードクラスでは800万円超も狙えます。WordPress案件のみの場合は400万〜500万円が中心です。",
  },
  {
    q: "PHPの需要は今後も続く？",
    a: "続きます。Webサイトの約77%がPHPで動いており、WordPress、Laravel、EC-CUBEなど広く使われています。新規開発ではLaravel案件が増加中で、レガシーシステムのモダナイゼーション案件も豊富です。",
  },
  {
    q: "PHPから他の言語に転向すべき？",
    a: "必ずしも転向する必要はありません。LaravelでのモダンPHP開発スキルがあれば十分に市場価値があります。ただし、TypeScript（Next.js）やGo言語を掛け合わせると選択肢が広がり、年収アップにもつながります。",
  },
  {
    q: "PHPの求人はどんな企業が多い？",
    a: "Web制作会社、ECサイト運営企業、SaaS企業、受託開発企業に多いです。特にLaravel案件はスタートアップからエンタープライズまで幅広く、WordPress案件はメディア・コーポレートサイト制作で根強い需要があります。",
  },
  {
    q: "レガシーPHPの経験しかなくても転職できる？",
    a: "転職可能です。ただし、Laravelなどモダンフレームワークの知識を学んでおくことが重要です。CakePHPやSymfonyの経験があれば、Laravelへの移行は比較的容易です。個人でLaravelアプリを作りポートフォリオにしましょう。",
  },
  {
    q: "PHPエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（PHP求人数が圧倒的に多い）、ワークポート（Web系企業の求人に強い）、Geekly（スタートアップのLaravel案件）の3社がおすすめです。PHP経験を活かした年収アップをサポートしてくれます。",
  },
];

export default function PhpSkillPage() {
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
        title="PHPエンジニアの転職ガイド【Laravel/WordPress】年収・求人・将来性"
        description="PHPエンジニアの転職市場を徹底解説。平均年収400〜650万円、Laravel需要の拡大、PHPエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/php/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "PHPエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PHPエンジニアの転職ガイド【Laravel/WordPress】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | PHPエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            PHPはWebの約77%で使用されている最も普及したサーバーサイド言語です。Laravel、WordPress、EC-CUBEなど豊富なエコシステムを持ち、Web開発の現場で引き続き高い需要があります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、PHPエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">400〜650万</p>
                <p className="text-sm text-slate-600 mt-1">30代PHPエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+12%</p>
                <p className="text-sm text-slate-600 mt-1">Laravel求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.1倍</p>
                <p className="text-sm text-slate-600 mt-1">PHP求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* PHPが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPエンジニアの需要が安定している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Laravelエコシステムの成熟</h3>
              <p className="text-sm text-blue-700">
                LaravelはPHPフレームワークの中でも圧倒的なシェアを持ち、エコシステムが非常に充実しています。Laravel Forge、Vapor、Novaなどの公式ツールにより、モダンな開発体験が実現されています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">WordPress・EC-CUBEの根強い需要</h3>
              <p className="text-sm text-blue-700">
                WordPressは世界のWebサイトの43%で使われており、企業サイト・メディアサイトの構築・運用で安定した需要があります。EC-CUBEもECサイト構築で広く使われ、カスタマイズ需要が絶えません。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レガシーシステムのモダナイゼーション</h3>
              <p className="text-sm text-blue-700">
                古いPHPシステム（CakePHP 2系、独自フレームワーク等）をLaravelやモダンPHP 8.x系に移行するプロジェクトが多数発生しています。レガシーPHPとモダンPHPの両方を理解するエンジニアの市場価値が高まっています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Laravelエンジニア", range: "500万〜750万円", note: "Laravel+Vue.js/ReactでのWebアプリ開発" },
              { role: "WordPress開発者", range: "400万〜600万円", note: "テーマ・プラグイン開発、サイト構築" },
              { role: "テックリード", range: "700万〜900万円", note: "PHPチームのリード、アーキテクチャ設計" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Laravelの実践スキルを身につける", desc: "Eloquent ORM、Queue、Event、Policy、Livewire/Inertiaなど、Laravelの機能を実務レベルで使いこなせることが重要です。ポートフォリオアプリをLaravelで作りましょう。" },
              { num: "2", title: "フロントエンド技術を掛け合わせる", desc: "PHP+Vue.js、PHP+React（Inertia.js）、PHP+TypeScriptの組み合わせができると、フルスタックとして年収アップが見込めます。" },
              { num: "3", title: "PHP 8.x系のモダン機能を理解する", desc: "Enum、Fiber、名前付き引数、Union型など、PHP 8系の新機能を理解し活用できることで、モダンなPHP開発者としてアピールできます。" },
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
          <h2 className="text-xl font-bold mb-3">PHPのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            PHPの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Ruby on Rails転職ガイド", href: "/skill/ruby/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
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
