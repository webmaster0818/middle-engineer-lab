import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Swiftとは｜公式の定義・特徴・対応プラットフォームとリリース履歴【2026年】";
const DESCRIPTION =
  "Swift（スウィフト）とは、Appleが開発しオープンソースで公開されている汎用プログラミング言語です。Swift.org とApple公式の説明にもとづく特徴、対応プラットフォーム、Apache 2.0ライセンス、Swift 5.7〜6.4のリリース日一覧を一次情報で整理します。";
const URL = "/knowledge/swift/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Swiftの定義（公式の説明）" },
  { id: "feature", label: "Swiftの主な特徴" },
  { id: "platform", label: "対応プラットフォーム" },
  { id: "release", label: "リリース履歴（5.7〜6.4）" },
  { id: "career", label: "転職・キャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const releases = [
  { v: "6.4", first: "2026-09-15", latest: "6.4.3（2026-11-20）" },
  { v: "6.3", first: "2026-03-27", latest: "6.3.3（2026-06-30）" },
  { v: "6.2", first: "2025-09-17", latest: "6.2.4（2026-02-27）" },
  { v: "6.1", first: "2025-04-01", latest: "6.1.3（2025-09-08）" },
  { v: "6.0", first: "2024-09-17", latest: "6.0.3（2024-12-13）" },
  { v: "5.10", first: "2024-03-05", latest: "5.10.1（2024-06-06）" },
  { v: "5.9", first: "2023-09-18", latest: "5.9.2（2023-12-11）" },
  { v: "5.8", first: "2023-03-30", latest: "5.8.1（2023-06-01）" },
  { v: "5.7", first: "2022-09-12", latest: "5.7.3（2023-01-19）" },
];

const faqs = [
  {
    q: "Swiftとは簡単に言うと何ですか？",
    a: "Swiftは、Appleが開発した汎用プログラミング言語です。Apple公式では「すべてのAppleプラットフォーム向けの、パワフルで直感的なプログラミング言語」と説明され、Swift.org ではシステムプログラミングからモバイル・デスクトップアプリ、クラウドサービスまで使える汎用言語とされています。",
  },
  {
    q: "SwiftはiPhoneアプリ専用の言語ですか？",
    a: "iPhone・Macなど Apple プラットフォームのアプリ開発で広く使われていますが、専用ではありません。Swift.org によると、Linux・Windows向けのツールチェーンが提供されているほか、Android向けのSDK、WebAssembly向けのSDK、マイコン向けの Embedded Swift も用意されています。",
  },
  {
    q: "Swiftはオープンソースですか？",
    a: "はい。Swift.org によると、2015年12月3日にSwiftの言語・ライブラリ・デバッガ・パッケージマネージャーが、Runtime Library Exception 付きの Apache 2.0 ライセンスで公開されました。ソースコードはGitHubで公開され、誰でもバグ報告やプルリクエストを送ることができます。",
  },
  {
    q: "Swiftの新しいバージョンはどのくらいの頻度で出ますか？",
    a: "GitHubで公開されているリリース（2026年11月24日確認）を当サイトで整理したところ、5.7以降は毎年3〜4月ごろと9月ごろの年2回、マイナーバージョンが公開されています。各マイナーバージョンには、その後いくつかの修正版（例：6.4.1〜6.4.3）が出ています。",
  },
  {
    q: "Swiftエンジニアの年収や求人の探し方を知りたいです。",
    a: "年収データや求人の探し方は、当サイトの「Swift/iOSエンジニアの転職ガイド」で出典を明記して整理しています。本記事では言語そのものの定義と公式情報を扱います。",
  },
];

export default function SwiftPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "Swiftとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Swiftとは｜公式の定義・特徴・対応プラットフォームとリリース履歴
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式情報の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Swiftとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Swift（スウィフト）とは、Appleが開発し、オープンソースで公開されている汎用プログラミング言語です。iPhone・MacなどAppleプラットフォームのアプリ開発で使われるほか、Linux・Windowsでも利用できます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・2015年12月3日に、Runtime Library Exception 付きの Apache 2.0 ライセンスでオープンソース化されました</li>
              <li>・2026年11月24日時点の最新版は Swift 6.4.3（GitHubでの公開日 2026年11月20日）です</li>
              <li>・5.7以降は、年2回（3〜4月ごろと9月ごろ）マイナーバージョンが公開されています（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Swift.org とApple Developer の公式説明をもとにSwiftの定義と特徴を整理し、GitHubで公開されているリリース情報から、Swift 5.7〜6.4の初回リリース日と最新の修正版を一覧にまとめます。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["Swift.org「About Swift」", "Apple Developer「Swift」", "GitHub swiftlang/swift Releases"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swiftの定義（公式の説明）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Swift.org の「About Swift」では、Swiftを「初心者にも取り組みやすく、熟練者にとっても強力な汎用プログラミング言語」と説明し、速さ・モダンさ・安全性を特徴に挙げています。用途として、システムプログラミングからモバイル・デスクトップアプリ、クラウドサービスまでを想定しているとされています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            Apple Developer の「Swift」のページでは、Swiftを「すべてのAppleプラットフォーム向けの、パワフルで直感的なプログラミング言語」と紹介しています。簡潔で表現力のある文法と、設計段階から安全性を考慮した仕組みが特徴とされています。
          </p>
        </section>

        <section id="feature" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swiftの主な特徴</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">特徴</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式の説明の要旨</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">安全性</td><td className="border border-slate-200 px-3 py-2">変数は使用前に必ず初期化され、配列や整数のオーバーフローが検査される。メモリは自動で管理される</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">nilの扱い（オプショナル）</td><td className="border border-slate-200 px-3 py-2">標準ではオブジェクトがnilにならず、nilを扱う場合は「?」で明示するオプショナルの仕組みを使う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">型推論とモジュール</td><td className="border border-slate-200 px-3 py-2">型推論によりコードが簡潔になり、モジュールによってヘッダーファイルが不要になる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">性能</td><td className="border border-slate-200 px-3 py-2">C系の言語と同等の、予測可能で安定した性能を持つとされる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">主な言語機能</td><td className="border border-slate-200 px-3 py-2">クロージャ、タプルと複数の戻り値、ジェネリクス、プロトコル、エラー処理、map・filterなどの関数型パターン</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Swift.org「About Swift」を当サイトで要約・翻訳。</p>
        </section>

        <section id="platform" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対応プラットフォーム</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">プラットフォーム</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Swift.org の説明の要旨</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">Appleプラットフォーム</td><td className="border border-slate-200 px-3 py-2">Objective-Cのランタイムを含み、UIKit・AppKitなどのフレームワークを利用できる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Linux</td><td className="border border-slate-200 px-3 py-2">静的リンクの実行ファイルを作成でき、他のプラットフォームからLinux向けにクロスコンパイルもできる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Windows</td><td className="border border-slate-200 px-3 py-2">ツールチェーン・標準ライブラリ・デバッガ（LLDB）などのビルドが提供されている</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Android</td><td className="border border-slate-200 px-3 py-2">公式のSwift SDK for Androidで、macOS・Linuxから Android 向けにクロスコンパイルできる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">WebAssembly</td><td className="border border-slate-200 px-3 py-2">Swift SDK for WebAssemblyで、ブラウザなどで動くWasmモジュールを作成できる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">組込み機器</td><td className="border border-slate-200 px-3 py-2">Embedded Swiftにより、マイコン向けの小さなバイナリを作成できる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Swift.org「About Swift」（2026年11月24日確認）を当サイトで要約。</p>
        </section>

        <section id="release" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リリース履歴（5.7〜6.4）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHubの swiftlang/swift リポジトリで公開されている正式リリース（RELEASE タグ）を、当サイトでマイナーバージョンごとに整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">初回リリース（GitHub公開日）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">最新の修正版（公開日）</th>
                </tr>
              </thead>
              <tbody>
                {releases.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">Swift {r.v}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.first}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.latest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：GitHub swiftlang/swift Releases（2026年11月24日取得・当サイト集計）。日付はGitHub上の公開日で、Xcodeなどに同梱されて提供が始まった日とは異なる場合があります。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            2024年9月公開のSwift 6.0からメジャーバージョンが6になりました。業務アプリでは、使っているSwiftのバージョンや、5系から6系への移行の状況によって求められる知識が変わるため、応募先の開発環境は面接で確認しておくことをおすすめします。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            Swiftの求人は、iOS・iPadOS・macOS向けのアプリ開発が中心です。Swiftエンジニアの年収データや求人の探し方は<Link href="/skill/swift/" className="text-blue-600 hover:underline">Swift/iOSエンジニアの転職ガイド</Link>、言語別の年収比較は<Link href="/salary/skill-ranking/" className="text-blue-600 hover:underline">プログラマーの年収ランキング</Link>でご説明しています。
          </p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月24日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Swift.org「About Swift」：https://www.swift.org/about/</li>
            <li>Apple Developer「Swift」：https://developer.apple.com/swift/</li>
            <li>GitHub swiftlang/swift Releases：https://github.com/swiftlang/swift/releases</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Swift/iOSエンジニアの転職ガイド", href: "/skill/swift/" },
              { name: "プログラマーの年収ランキング", href: "/salary/skill-ranking/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "OSSとは", href: "/knowledge/oss/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
