import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "iPhoneアプリの作り方｜開発から公開までの5ステップ・無料でできる範囲・TestFlightと審査の公式の数値【2026年】";
const DESCRIPTION =
  "iPhoneアプリを作って公開するまでの5ステップを、Appleの公式情報で解説します。必要なMacとXcode、無料のApple Accountでできる範囲、TestFlightの上限、2026年の提出要件、審査の所要時間、iOS 26の普及率を整理します。";
const URL = "/knowledge/iphone-app/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "steps", label: "開発から公開までの5ステップ" },
  { id: "need", label: "必要なもの" },
  { id: "free", label: "無料でできる範囲と有料登録" },
  { id: "testflight", label: "TestFlightでのテスト" },
  { id: "submit", label: "App Storeへの提出要件と審査" },
  { id: "ios", label: "iOSの普及率（対象バージョンの決め方）" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "iPhoneアプリを作るには何が必要ですか？",
    a: "Apple M1以降のチップを搭載したMacと、無料の開発ツールXcodeが必要です。2026年11月26日時点の最新版Xcode 27.2は、macOS Tahoe 26.6以降で動きます。XcodeはMac専用のため、Windowsのパソコンだけでは公式の開発環境を使えません。",
  },
  {
    q: "iPhoneアプリは無料で作れますか？",
    a: "作ることと、自分のiPhoneで動かすことは無料のApple Accountでできます。ただし無料のアカウント（Personal Team）では、登録したデバイスとアプリIDが7日後に期限切れになります。App Storeでの公開やTestFlightでの配布には、Apple Developer Program（年間99米ドル。日本のApp Storeでの表示は12,800円）への登録が必要です。",
  },
  {
    q: "App Storeの審査にはどのくらいかかりますか？",
    a: "Appleは、App Reviewは24時間体制で、通常は提出の50％以上を24時間以内、90％を48時間以内に審査していると説明しています。",
  },
  {
    q: "2026年にApp Storeに提出するときの条件はありますか？",
    a: "2026年4月28日から、App Store Connectにアップロードするアプリは、Xcode 26以降とiOS 26などのSDKでビルドする必要があります。また2026年9月9日から、iOS・iPadOSのアプリは対象をiOS 13以降にする必要があります。",
  },
  {
    q: "Macがなくてもアプリを作れますか？",
    a: "iPadをお持ちの場合は、Appleの「Swift Playground」でアプリを作ることができます。Appleは、完成したアプリをiPadまたはMacのSwift Playgroundから直接App Store Connectに提出できると説明しています。",
  },
];

const stepRows = [
  { step: "1. 準備", what: "MacにXcodeを入れ、Apple Accountでサインインする", cost: "無料" },
  { step: "2. 開発", what: "SwiftとSwiftUIで画面と動作を作り、シミュレータで動かす", cost: "無料" },
  { step: "3. 実機テスト", what: "自分のiPhoneをつないで動かす（無料のアカウントは7日ごとに入れ直し）", cost: "無料" },
  { step: "4. ベータテスト", what: "TestFlightで、ほかの人に試してもらう", cost: "Developer Programが必要" },
  { step: "5. 公開", what: "App Store Connectから提出し、審査を経て公開する", cost: "Developer Programが必要" },
];

const iosRows = [
  { group: "直近4年に発売されたiPhone", v26: "86％", v18: "11％", older: "3％" },
  { group: "すべてのiPhone", v26: "79％", v18: "14％", older: "7％" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function IphoneAppPage() {
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
          { name: "iPhoneアプリの作り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          iPhoneアプリの作り方｜開発から公開までの5ステップ・無料でできる範囲・TestFlightと審査の公式の数値
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】iPhoneアプリの作り方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>MacにXcode（無料）を入れ、Swiftでアプリを作り、自分のiPhoneで動かすところまでは無料でできます。ほかの人に配る（TestFlight・App Store）には、Apple Developer Program（年間99米ドル）への登録が必要です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・最新版のXcode 27.2は、Apple M1以降のMacとmacOS Tahoe 26.6以降が必要です</li>
              <li>・TestFlightの外部テスターは最大10,000人、ビルドは最大90日間テストできます</li>
              <li>・審査は、提出の50％以上が24時間以内、90％が48時間以内に終わるとAppleは説明しています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Apple Developerサイト（Xcodeの動作要件・アカウントの比較・TestFlight・提出要件・App Review・App Storeの普及率）、AppleのSwift Playgroundのページ、Stack Overflow Developer Survey 2025をもとに、iPhoneアプリを作って公開するまでに必要な情報を整理します。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["Apple Developer「Xcode」システム要件", "Apple Developer「デベロッパアカウントについて」「TestFlightの概要」", "Apple Developer「Upcoming Requirements」「App Review」「App Store」", "Apple「Swift Playground」", "Stack Overflow「2025 Developer Survey」"]}
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

        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発から公開までの5ステップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Appleの公式情報をもとに、当サイトが開発から公開までの流れと、費用がかかる段階を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>ステップ</th>
                  <th className={th}>すること</th>
                  <th className={th}>費用</th>
                </tr>
              </thead>
              <tbody>
                {stepRows.map((r) => (
                  <tr key={r.step}>
                    <td className={td}>{r.step}</td>
                    <td className={td}>{r.what}</td>
                    <td className={td}>{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            Mac App StoreのXcodeの説明には、「Appleのデバイスでアプリをテスト・実行するには無料のApple Accountだけで足り、App Storeに提出するにはApple Developer Programのメンバーである必要がある」という趣旨が書かれています。学習とお試しは無料で始め、公開する段階で登録を検討する順番で問題ありません。
          </p>
        </section>

        <section id="need" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要なもの</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>内容（2026年11月26日時点）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>Mac</td><td className={td}>Apple M1以降のチップを搭載したMac（IntelのMacでは最新のXcodeを使えない）</td></tr>
                <tr><td className={td}>macOS</td><td className={td}>macOS Tahoe 26.6以降（Xcode 27.2の要件）</td></tr>
                <tr><td className={td}>Xcode</td><td className={td}>27.2（Mac App Storeで無料・3.1GB・Macのみ対応）。iOS 15〜27を対象にアプリを作れる</td></tr>
                <tr><td className={td}>言語</td><td className={td}>Swift（Xcode 27.2のコンパイラはSwift 6.4）</td></tr>
                <tr><td className={td}>iPhone</td><td className={td}>シミュレータでも動かせるが、カメラなどの確認には実機があるとよい</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「Xcode」システム要件、Mac App Store「Xcode」。「iPhone」の行は当サイトの補足です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Appleの公式ページに「Windowsでは開発できない」という書き方はありませんが、XcodeはMac App Storeで「Macのみ対応」とされており、Appleの公式の開発環境を使うにはMacが必要です。Macを持っていない場合は、iPadのSwift Playgroundで始める方法があります（よくある質問を参照）。
          </p>
        </section>

        <section id="free" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">無料でできる範囲と有料登録</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>無料のApple Account（Personal Team）</th>
                  <th className={th}>Apple Developer Program</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>費用</td><td className={td}>無料</td><td className={td}>年間99米ドル（日本のApp Storeの表示は12,800円）</td></tr>
                <tr><td className={td}>実機でのテスト</td><td className={td}>できる（デバイス3台・アプリID10個まで、7日後に期限切れ。1台に最大3アプリ）</td><td className={td}>できる</td></tr>
                <tr><td className={td}>使える機能</td><td className={td}>App Groups・HealthKit・HomeKit・マップなど一部</td><td className={td}>プッシュ通知・Appleでサインイン・App内課金・iCloudなども使える</td></tr>
                <tr><td className={td}>TestFlight・App Store Connect</td><td className={td}>使えない</td><td className={td}>使える</td></tr>
                <tr><td className={td}>アプリの配布</td><td className={td}>できない</td><td className={td}>App Storeで公開できる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「デベロッパアカウントについて」「Supported capabilities (iOS)」「プログラムへの登録」、App Store「Apple Developer」（App内課金の表示、2026年11月26日確認）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            作りたいアプリでプッシュ通知やApp内課金を使う場合は、無料のアカウントでは試せません。作るアプリの機能を先に決め、どの段階で登録が必要になるかを確かめておくと、費用の時期を判断しやすくなります。
          </p>
        </section>

        <section id="testflight" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TestFlightでのテスト</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>上限・決まり</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>内部テスター</td><td className={td}>最大100人（App Store Connectのアカウントを持つチームのメンバー）</td></tr>
                <tr><td className={td}>外部テスター</td><td className={td}>最大10,000人（最初のビルドは審査が必要な場合がある）</td></tr>
                <tr><td className={td}>ビルドの有効期間</td><td className={td}>最大90日間。90日後はテスターが使えなくなる</td></tr>
                <tr><td className={td}>共有できるビルド</td><td className={td}>最大100ビルド</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「TestFlightの概要」「TestFlight」。</p>
        </section>

        <section id="submit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">App Storeへの提出要件と審査</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>開始日</th>
                  <th className={th}>要件</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>2026年1月31日</td><td className={td}>改定された年齢制限の質問に回答する</td></tr>
                <tr><td className={td}>2026年4月28日</td><td className={td}>Xcode 26以降、iOS 26などのSDKでビルドしたアプリだけをアップロードできる</td></tr>
                <tr><td className={td}>2026年9月9日</td><td className={td}>iOS・iPadOSのアプリは、対象をiOS 13以降にする</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「Upcoming Requirements」（2026年11月26日時点で、これより先の日付の新しい要件は掲載されていません）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            審査について、Appleは「App Reviewは24時間体制で、通常は提出の50％以上を24時間以内、90％を48時間以内に審査している」と説明しています。審査で却下された場合は、指摘に対応して再提出するため、公開日を決める際は数日の余裕を見込んでおくと安心です。
          </p>
        </section>

        <section id="ios" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">iOSの普及率（対象バージョンの決め方）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            アプリが対応する最低のiOSのバージョンを決める際の材料として、Appleが公開しているiPhoneのiOSのバージョン別の割合です（2026年6月7日にApp Storeで取引した端末で測定）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>対象</th>
                  <th className={`${th} text-right`}>iOS 26</th>
                  <th className={`${th} text-right`}>iOS 18</th>
                  <th className={`${th} text-right`}>それ以前</th>
                </tr>
              </thead>
              <tbody>
                {iosRows.map((r) => (
                  <tr key={r.group}>
                    <td className={td}>{r.group}</td>
                    <td className={`${td} text-right`}>{r.v26}</td>
                    <td className={`${td} text-right`}>{r.v18}</td>
                    <td className={`${td} text-right`}>{r.older}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Apple Developer「App Store」（iOS and iPadOS usage）。2026年11月26日時点で、これが最新の測定値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            iOS 18以降に対応すれば、すべてのiPhoneの93％をカバーできます（当サイト算出）。新しいiOSでしか使えない機能を使う場合は、残りの7％を対象外にしてよいかを考えて決めます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の中でのSwift</h2>
          <p className="text-slate-600 leading-relaxed">
            Stack Overflow Developer Survey 2025では、過去1年にSwiftで開発した人は全回答者の5.41％（n=31,771）、プロの開発者の5.70％（n=24,759）でした。Swiftを使った人のうち51.9％が今後も使い続けたいと答えています。Xcodeを使っている人は全回答者の10.02％（n=26,143）でした。iOSアプリの開発者は全体の中では少数で、Swiftの実務経験は専門性として見られます。Swiftの言語の概要は<Link href="/knowledge/swift/" className="text-blue-600 hover:underline">Swiftとは</Link>、Macアプリについては<Link href="/knowledge/mac-app-dev/" className="text-blue-600 hover:underline">Macアプリ開発の始め方</Link>、iOSエンジニアの転職は<Link href="/skill/swift/" className="text-blue-600 hover:underline">Swiftエンジニアの転職ガイド</Link>や<Link href="/skill/flutter/" className="text-blue-600 hover:underline">Flutterエンジニアの転職ガイド</Link>をご覧ください。
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
            <li>Mac App Store「Xcode」：https://apps.apple.com/jp/app/xcode/id497799835?mt=12</li>
            <li>Apple Developer「デベロッパアカウントについて」：https://developer.apple.com/jp/help/account/basics/about-your-developer-account</li>
            <li>Apple Developer「Supported capabilities (iOS)」：https://developer.apple.com/help/account/reference/supported-capabilities-ios</li>
            <li>Apple Developer「プログラムへの登録」：https://developer.apple.com/jp/programs/enroll/</li>
            <li>App Store「Apple Developer」（App内課金の表示）：https://apps.apple.com/jp/app/apple-developer/id640199958</li>
            <li>Apple Developer「TestFlightの概要」：https://developer.apple.com/jp/help/app-store-connect/test-a-beta-version/testflight-overview</li>
            <li>Apple Developer「TestFlight」：https://developer.apple.com/testflight/</li>
            <li>Apple Developer「Upcoming Requirements」：https://developer.apple.com/news/upcoming-requirements/</li>
            <li>Apple Developer「App Review」：https://developer.apple.com/distribute/app-review/</li>
            <li>Apple Developer「App Store」（iOS and iPadOS usage）：https://developer.apple.com/support/app-store/</li>
            <li>Apple「Swift Playgrounds」：https://www.apple.com/jp/swift/playgrounds/</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Swiftとは", href: "/knowledge/swift/" },
              { name: "Macアプリ開発の始め方", href: "/knowledge/mac-app-dev/" },
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
