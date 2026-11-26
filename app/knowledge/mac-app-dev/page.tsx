import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Macアプリ開発の始め方｜Xcode 27.2の動作要件・3つの配布方法・無料でできる範囲を公式情報で整理【2026年】";
const DESCRIPTION =
  "Macアプリ開発に必要なもの（Xcodeと動作するmacOS）、SwiftUI・AppKit・Mac Catalystの違い、Mac App Store・Developer ID・自分のMacだけの3つの配布方法、無料のApple Accountでできる範囲を、Appleの公式情報で整理します。";
const URL = "/knowledge/mac-app-dev/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "need", label: "必要なもの（Xcodeと動作要件）" },
  { id: "framework", label: "SwiftUI・AppKit・Mac Catalystの違い" },
  { id: "distribution", label: "3つの配布方法" },
  { id: "free", label: "無料のApple Accountでできる範囲" },
  { id: "store", label: "Mac App Storeの追加要件" },
  { id: "check", label: "当サイトの検証用Macで確かめたこと" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Macアプリ開発には何が必要ですか？",
    a: "Apple Silicon（M1以降）のMacと、無料の開発ツールXcodeが必要です。2026年11月26日時点の最新版Xcode 27.2は、macOS Tahoe 26.6以降が動作の条件です。Appleは、Xcodeをダウンロードすればメンバーシップの登録なしで開発と自分のデバイスでのテストができると説明しています。",
  },
  {
    q: "Macアプリを配布するのにお金はかかりますか？",
    a: "Mac App Storeでの配布と、Mac App Store以外でのDeveloper IDによる配布（公証つき）は、どちらもApple Developer Program（年間99米ドル。日本のApp Storeでの表示は12,800円）への登録が必要です。自分のMacで動かすだけなら登録は要りません。",
  },
  {
    q: "SwiftUIとAppKitはどちらを使えばよいですか？",
    a: "SwiftUIはすべてのAppleプラットフォーム共通で画面を宣言的に書くフレームワーク、AppKitはmacOS専用の従来からのフレームワークです。Appleは、AppKitのビューをSwiftUIの中に置くことも、その逆もできると説明しています。新しく作る場合はSwiftUIから始め、SwiftUIでできない部分をAppKitで補う方法があります。",
  },
  {
    q: "公証（notarization）とは何ですか？",
    a: "Developer IDで署名したソフトウェアをAppleが自動でスキャンし、セキュリティのチェックを行う仕組みです。macOS 10.15以降、2019年6月1日以降に作られDeveloper IDで配布されるソフトウェアは公証が必要です。Mac App Storeで配布するアプリには不要で、公証はApp Reviewとは別のものです。",
  },
  {
    q: "IntelのMacで開発できますか？",
    a: "最新のXcodeはできません。Mac App StoreのXcodeの掲載情報には「macOS 26.6以降とApple M1以降のチップを搭載したMacが必要です」と書かれています（2026年11月26日確認）。",
  },
];

const frameworkRows = [
  { name: "SwiftUI", what: "すべてのAppleプラットフォームで、画面と動作を宣言的に書く", mac: "macOS 10.15以降", fit: "新しく作るアプリ・iPhone版と画面の書き方をそろえたい場合" },
  { name: "AppKit", what: "macOSアプリの、イベント駆動のグラフィカルな画面を作って管理する", mac: "macOS専用", fit: "メニューやウィンドウを細かく制御したい場合・既存のMacアプリ" },
  { name: "Mac Catalyst", what: "iPadアプリをもとに、Macで動く版を作る", mac: "iPadアプリが前提", fit: "iPadアプリがすでにある場合（使えるAppKitのAPIは一部）" },
];

const distRows = [
  { way: "Mac App Store", program: "必要", check: "App Review（審査）", note: "サンドボックス化などガイドライン2.4.5の追加要件あり。アップデートもMac App Storeで配信" },
  { way: "Developer ID（App Store以外）", program: "必要（証明書を作れるのはAccount Holder）", check: "公証（自動のセキュリティチェック）", note: "自社サイトなどで配布。GatekeeperがDeveloper ID証明書を確認する" },
  { way: "自分のMacで動かすだけ", program: "不要", check: "なし", note: "Xcodeからビルドして実行。他の人への配布はできない" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function MacAppDevPage() {
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
          { name: "Macアプリ開発の始め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Macアプリ開発の始め方｜Xcode 27.2の動作要件・3つの配布方法・無料でできる範囲を公式情報で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Macアプリ開発の始め方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Apple Silicon（M1以降）のMacに無料のXcodeを入れれば、登録なしで開発と自分のMacでの実行ができます。他の人に配布するときは、Mac App StoreでもApp Store以外でも、Apple Developer Program（年間99米ドル）への登録が必要です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・最新版のXcode 27.2（2026年10月29日公開）は、macOS Tahoe 26.6以降が必要です</li>
              <li>・画面の作り方はSwiftUI・AppKit・Mac Catalystの3つがあります</li>
              <li>・App Store以外で配布するときは、Developer IDの署名とAppleの公証が必要です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Apple Developerサイト（Xcodeの動作要件・メンバーシップの比較・Developer ID・App Store Reviewガイドライン）、swift.org、Stack Overflow Developer Survey 2025をもとに、Macアプリ開発を始めるときに必要な情報を整理します。あわせて、当サイトの検証用のMacで、Xcodeを入れていない状態で何ができるかを確かめました。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["Apple Developer「Xcode」システム要件・リリース情報", "Apple Developer「デベロッパアカウントについて」「Developer ID」", "App Store Reviewガイドライン（2026年10月16日更新）", "swift.org", "Stack Overflow「2025 Developer Survey」"]}
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

        <section id="need" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要なもの（Xcodeと動作要件）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>内容（2026年11月26日時点）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>開発ツール</td><td className={td}>Xcode 27.2（2026年10月29日公開）。Mac App Storeで無料。サイズは3.1GB</td></tr>
                <tr><td className={td}>必要なmacOS</td><td className={td}>macOS Tahoe 26.6以降（Xcode 27・27.1・27.2とも同じ）</td></tr>
                <tr><td className={td}>必要なMac</td><td className={td}>Apple M1以降のチップを搭載したMac（Mac App Storeの掲載情報）</td></tr>
                <tr><td className={td}>言語</td><td className={td}>Swift（Xcode 27.2のコンパイラはSwift 6.4。swift.orgの最新版は6.4.3、2026年11月19日）</td></tr>
                <tr><td className={td}>対応できるmacOS</td><td className={td}>Xcode 27.2で作るアプリは、macOS 12〜27を対象にできる</td></tr>
                <tr><td className={td}>次の版</td><td className={td}>Xcode 27.3はベータ版（beta 2、2026年11月16日）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「Xcode」システム要件・Releases、Mac App Store「Xcode」、swift.org。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Appleのメンバーシップの説明には「Mac App StoreからXcodeをダウンロードするだけで、Appleプラットフォーム向けのアプリを開発し、個人用デバイスでテストを行えるようになります。メンバーシップの登録は不要です」と書かれています。費用がかかるのは、他の人に配布する段階からです。
          </p>
        </section>

        <section id="framework" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SwiftUI・AppKit・Mac Catalystの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Appleの公式ドキュメントの説明をもとに、当サイトが向いている場面を加えて整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>フレームワーク</th>
                  <th className={th}>公式の説明（要約）</th>
                  <th className={th}>Macでの対応</th>
                  <th className={th}>向いている場面</th>
                </tr>
              </thead>
              <tbody>
                {frameworkRows.map((r) => (
                  <tr key={r.name}>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.what}</td>
                    <td className={td}>{r.mac}</td>
                    <td className={td}>{r.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer Documentation「SwiftUI」「AppKit」「Mac Catalyst」。「向いている場面」は当サイトの整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            AppKitのドキュメントには、AppKitのビューやビューコントローラをSwiftUIのビューの中に置くことも、その逆もできると書かれています。どちらか1つに決めなくても、組み合わせて使えます。
          </p>
        </section>

        <section id="distribution" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3つの配布方法</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            iPhoneアプリはApp Storeでの配布が基本ですが、MacアプリはApp Store以外でも配布できます。Appleの説明をもとに、当サイトが3つの方法を比べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>配布方法</th>
                  <th className={th}>Developer Program</th>
                  <th className={th}>Appleのチェック</th>
                  <th className={th}>主な決まり</th>
                </tr>
              </thead>
              <tbody>
                {distRows.map((r) => (
                  <tr key={r.way}>
                    <td className={td}>{r.way}</td>
                    <td className={td}>{r.program}</td>
                    <td className={td}>{r.check}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「Apple Developer Program」「Developer ID」、Apple Developer Documentation「Notarizing macOS software before distribution」、App Store Reviewガイドライン2.4.5。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Appleのドキュメントによると、macOS 10.15以降、2019年6月1日以降に作られDeveloper IDで配布されるソフトウェアは、すべて公証が必要です。公証はApp Reviewとは別のもので、Mac App Storeで配布するアプリには必要ありません。公証の提出にはnotarytoolを使い、2023年11月1日からはaltoolやXcode 13以前からの提出は受け付けられていません。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Apple Developer Programの登録料は年間99米ドル（Enterprise Programは299米ドル）で、Appleは価格が地域によって異なり、登録手続きの際に現地通貨で表示されると説明しています。日本のApp Storeの「Apple Developer」アプリでは、App内課金として12,800円と表示されていました（2026年11月26日確認）。
          </p>
        </section>

        <section id="free" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">無料のApple Accountでできる範囲</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>無料の登録でできること</th>
                  <th className={th}>Developer Programの登録が必要なこと</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>XcodeとOSのベータ版</td><td className={td}>コードレベルのサポート</td></tr>
                <tr><td className={td}>Xcodeを使ったデバイスでのテスト</td><td className={td}>Certificates, Identifiers &amp; Profiles</td></tr>
                <tr><td className={td}>デベロッパフォーラム</td><td className={td}>Macソフトウェアの公証</td></tr>
                <tr><td className={td}>フィードバックアシスタント</td><td className={td}>App Store Connect・TestFlight・Xcode Cloud</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「デベロッパアカウントについて」の比較表。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じページによると、無料のアカウント（Xcodeでは「Personal Team」と表示）では、アプリIDは10個まで登録でき、7日後に期限切れになります。デバイスは3台まで登録でき、こちらも7日後に期限切れになります。デバイス1台につき最大3つのアプリをインストールできます。学習やお試しには十分ですが、長く使うアプリを配るには登録が必要です。
          </p>
        </section>

        <section id="store" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Mac App Storeの追加要件</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            App Store Reviewガイドラインの2.4.5は、Mac App Storeで配布するアプリに次の追加要件を定めています（2026年10月16日更新版。日本語の要約は当サイトによるものです）。
          </p>
          <ol className="list-decimal pl-6 text-sm text-slate-700 leading-7 space-y-1">
            <li>適切にサンドボックス化し、macOSのファイルシステムのドキュメントに従う</li>
            <li>Xcodeの技術でパッケージ化し、他社製のインストーラを使わない</li>
            <li>ユーザーの同意なしに、起動時やログイン時に自動で起動しない</li>
            <li>追加のコードやカーネル拡張（KEXT）などをダウンロードしない</li>
            <li>root権限への昇格やsetuid属性を使わない</li>
            <li>ライセンス画面・ライセンスキー・独自のコピー防止を表示・実装しない</li>
            <li>アップデートの配信にはMac App Storeを使う</li>
            <li>現在のOSで動き、Javaなどの非推奨の技術を使わない</li>
            <li>すべての言語を1つのアプリバンドルに含める</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mt-4">
            サンドボックスの制約で実現できない機能（システム全体を操作するユーティリティなど）は、Developer IDでの配布を選ぶ判断材料になります。
          </p>
        </section>

        <section id="check" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">当サイトの検証用Macで確かめたこと</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトの検証用のMac（Apple Silicon、macOS 26.5.2、Xcodeは未導入でCommand Line Toolsのみ）で、2026年11月26日に次のとおり確かめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>確かめたこと</th>
                  <th className={th}>結果</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}><code>swift --version</code></td><td className={td}>Apple Swift version 6.2.4（Command Line Toolsに含まれる版）</td></tr>
                <tr><td className={td}><code>swift hello.swift</code>（3行の配列を表示）</td><td className={td}>実行できた</td></tr>
                <tr><td className={td}><code>xcodebuild -version</code></td><td className={td}>「tool &apos;xcodebuild&apos; requires Xcode」と表示され、実行できなかった</td></tr>
                <tr><td className={td}>最新のXcode 27.2の要件との比較</td><td className={td}>要件はmacOS 26.6以降のため、このMac（26.5.2）はmacOSの更新が先に必要</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Command Line ToolsだけでもSwiftの文法の学習やコマンドラインのツール作りはできますが、画面のあるMacアプリのビルドにはXcodeが必要です。また、Xcodeの最新版はmacOSの比較的新しい版を求めるため、手持ちのMacのmacOSのバージョンを先に確認しておくと、導入でつまずきにくくなります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の中でのmacOSとSwift</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={`${th} text-right`}>割合</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>仕事で主に使うOSがmacOS（n=31,569）</td><td className={`${td} text-right`}>32.9％（個人利用は32.7％）</td></tr>
                <tr><td className={td}>過去1年にSwiftで開発した（全回答者 n=31,771）</td><td className={`${td} text-right`}>5.4％</td></tr>
                <tr><td className={td}>過去1年にSwiftで開発した（プロの開発者 n=24,759）</td><td className={`${td} text-right`}>5.7％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（世界の開発者が対象・複数回答）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            開発者の約3人に1人がmacOSで仕事をしている一方、Swiftで開発した人は5％台です（当サイトの読み取り）。Macを使う開発者は多くても、Macアプリを作る人は限られており、Swiftの経験は求人の中では専門性として見られます。Swiftの言語の概要は<Link href="/knowledge/swift/" className="text-blue-600 hover:underline">Swiftとは</Link>、iPhoneアプリの作り方は<Link href="/knowledge/iphone-app/" className="text-blue-600 hover:underline">iPhoneアプリの作り方</Link>、iOSエンジニアの転職は<Link href="/skill/swift/" className="text-blue-600 hover:underline">Swiftエンジニアの転職ガイド</Link>をご覧ください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月26日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Apple Developer「Xcode」システム要件：https://developer.apple.com/support/xcode/</li>
            <li>Apple Developer「Releases」：https://developer.apple.com/news/releases/</li>
            <li>Mac App Store「Xcode」：https://apps.apple.com/jp/app/xcode/id497799835?mt=12</li>
            <li>Apple Developer「デベロッパアカウントについて」：https://developer.apple.com/jp/help/account/basics/about-your-developer-account</li>
            <li>Apple Developer「プログラムの概要」：https://developer.apple.com/jp/help/account/membership/programs-overview/</li>
            <li>Apple Developer「プログラムへの登録」：https://developer.apple.com/jp/help/account/membership/program-enrollment/</li>
            <li>Apple Developer Program：https://developer.apple.com/jp/programs/</li>
            <li>App Store「Apple Developer」（App内課金の表示）：https://apps.apple.com/jp/app/apple-developer/id640199958</li>
            <li>Apple Developer「Developer ID」：https://developer.apple.com/jp/developer-id/</li>
            <li>Notarizing macOS software before distribution：https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution</li>
            <li>SwiftUI：https://developer.apple.com/documentation/swiftui</li>
            <li>AppKit：https://developer.apple.com/documentation/appkit</li>
            <li>Mac Catalyst：https://developer.apple.com/documentation/uikit/mac-catalyst</li>
            <li>App Store Reviewガイドライン：https://developer.apple.com/jp/app-store/review/guidelines/</li>
            <li>swift.org Install：https://www.swift.org/install/</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Swiftとは", href: "/knowledge/swift/" },
              { name: "iPhoneアプリの作り方", href: "/knowledge/iphone-app/" },
              { name: "Swiftエンジニアの転職ガイド", href: "/skill/swift/" },
              { name: "GitHub入門", href: "/knowledge/github-intro/" },
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
