import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Rustエンジニアの転職ガイド【高年収】年収・求人・将来性",
  description:
    "Rustエンジニアの転職市場を徹底解説。平均年収600〜1000万円、システムプログラミング需要の背景、Rustエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Rustエンジニアの平均年収は？",
    a: "30代で600万〜1,000万円が相場です。Rustはエンジニア言語の中でも年収水準が高く、特にシステムプログラミングやブロックチェーン領域では1,000万円超の求人も珍しくありません。",
  },
  {
    q: "Rustの需要は今後も続く？",
    a: "続くと予想されます。LinuxカーネルがRustを正式サポートし、Microsoft、Google、AWSなど大手テック企業がRustを積極採用しています。メモリ安全性が求められるセキュリティ分野やインフラ領域での需要が拡大中です。",
  },
  {
    q: "C/C++からRustへの転向は難しい？",
    a: "C/C++経験者であれば、所有権・借用・ライフタイムの概念に慣れるのに1〜3ヶ月かかりますが、メモリ管理の基礎知識があるため習得は比較的スムーズです。Rustのコンパイラが厳密なエラーチェックを行うため、安全なコードを書く習慣が自然と身につきます。",
  },
  {
    q: "Rustの求人はどんな企業が多い？",
    a: "インフラ企業（Cloudflare、Fastly等）、ブロックチェーン企業、セキュリティ企業、ゲームエンジン開発企業に多いです。日本ではWeb3系スタートアップやクラウドインフラ企業でRust求人が増加しています。",
  },
  {
    q: "Rust未経験でも転職は可能？",
    a: "C/C++、Go、Haskellなどシステムプログラミングやメモリ管理の知識がある言語の経験があれば、Rust未経験でもポテンシャル採用されるケースがあります。個人でRustプロジェクトをGitHubに公開しておくことが重要です。",
  },
  {
    q: "Rustエンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（インフラ・低レイヤー案件に強い）、ビズリーチ（ハイクラスRust案件）、Geekly（スタートアップのRust求人）の3社がおすすめです。Rust特化の求人は数が限られるため、複数エージェントの併用が効果的です。",
  },
];

export default function RustSkillPage() {
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
        title="Rustエンジニアの転職ガイド【高年収】年収・求人・将来性"
        description="Rustエンジニアの転職市場を徹底解説。平均年収600〜1000万円、システムプログラミング需要の背景、Rustエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/rust/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Rustエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Rustエンジニアの転職ガイド【高年収】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Rustエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Rustはメモリ安全性と高パフォーマンスを両立するシステムプログラミング言語として、LinuxカーネルやWebブラウザエンジン、クラウドインフラなど高信頼性が求められる領域で採用が急増しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Rustエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Rustエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">600〜1,000万</p>
                <p className="text-sm text-slate-600 mt-1">30代Rustエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+60%</p>
                <p className="text-sm text-slate-600 mt-1">Rust求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">4.5倍</p>
                <p className="text-sm text-slate-600 mt-1">Rust求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rustが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Rustの需要が急増している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">メモリ安全性への要求の高まり</h3>
              <p className="text-sm text-blue-700">
                C/C++のメモリ関連バグはセキュリティ脆弱性の70%を占めると言われています。Rustの所有権システムはコンパイル時にメモリ安全性を保証し、セキュリティクリティカルな開発でRustが選ばれる理由になっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大手テック企業の公式採用</h3>
              <p className="text-sm text-blue-700">
                LinuxカーネルがRustを第2言語として採用、MicrosoftがWindows開発にRustを導入、AWSがFirecrackerをRustで開発するなど、大手テック企業のRust採用が加速しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Web3・ブロックチェーン領域での標準言語化</h3>
              <p className="text-sm text-blue-700">
                Solana、Polkadot、NEARなど主要ブロックチェーンプラットフォームがRustで開発されています。スマートコントラクト開発でもRustが標準的に使われており、Web3領域の成長とともにRustエンジニアの需要が伸びています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Rustエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "システムプログラマー", range: "650万〜1,000万円", note: "OS、ミドルウェア、ランタイム開発" },
              { role: "インフラ/クラウドエンジニア", range: "700万〜1,100万円", note: "クラウドネイティブツール、ネットワーク基盤開発" },
              { role: "ブロックチェーンエンジニア", range: "800万〜1,300万円", note: "スマートコントラクト、プロトコル開発" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Rustエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "OSSへのコントリビューションが最大のアピール", desc: "Rustコミュニティは活発で、OSSプロジェクトも豊富です。crates.ioでライブラリを公開したり、既存OSSにPRを送ることが、Rustスキルを証明する最も効果的な方法です。" },
              { num: "2", title: "所有権・ライフタイムの深い理解を示す", desc: "面接ではRust固有の所有権、借用、ライフタイムの理解度が問われます。unsafe Rustの適切な使い方やトレイトの設計パターンなど、言語の深い理解を示すことが差別化のポイントです。" },
              { num: "3", title: "特定ドメインの専門性を掛け合わせる", desc: "Rust+インフラ、Rust+セキュリティ、Rust+ブロックチェーンなど、ドメイン知識を掛け合わせることで希少人材となり、年収1,000万円以上が狙えます。" },
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
          <h2 className="text-xl font-bold mb-3">Rustのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Rustの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Go言語エンジニアの転職ガイド", href: "/skill/go/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
