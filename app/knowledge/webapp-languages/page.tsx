import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webアプリの開発言語｜主要7言語の利用率・最新版・フレームワーク比較【2026年】";
const DESCRIPTION =
  "Webアプリの開発言語は、画面側はHTML・CSS・JavaScript、サーバー側はPHP・Python・Ruby・Java・C#・JavaScript（Node.js）・Goなどから選びます。W3Techsの利用率、Stack Overflow調査、公式の最新安定版を1つの表にまとめました。";
const URL = "/knowledge/webapp-languages/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "structure", label: "Webアプリはどこで動く言語でできているか" },
  { id: "compare", label: "サーバー側7言語の比較表（当サイト集計）" },
  { id: "gap", label: "W3TechsとStack Overflow調査で順位が違う理由" },
  { id: "support", label: "公式のサポート期間の考え方" },
  { id: "local", label: "OSに入っている版は古いことがある（当サイト実行）" },
  { id: "choose", label: "目的別の選び方の目安" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Webアプリ開発で必ず使う言語は何ですか？",
    a: "ブラウザー側（クライアントサイド）はHTML・CSS・JavaScriptです。MDNは、クライアントサイドコードに使う言語をHTML・CSS・JavaScriptと説明しています。サーバー側は、PHP・Python・Ruby・C#・JavaScript（Node.js）などから用途に合わせて選びます。",
  },
  {
    q: "Webサイトで最も使われているサーバー側の言語は何ですか？",
    a: "W3Techsの調査（2026年11月26日時点）では、サーバー側の言語が判明しているWebサイトのうち67.9%がPHPを使っており、2位はJavaScriptの9.1%です。1つのサイトが複数の言語を使う場合もあるため、合計は100%になりません。",
  },
  {
    q: "開発者に多く使われている言語はどれですか？",
    a: "Stack Overflow Developer Survey 2025では、過去1年に多く使った言語としてJavaScriptが66%、Pythonが57.9%、TypeScriptが43.6%でした。Webサイトの利用率とは測っている対象が違うため、順位も異なります。",
  },
  {
    q: "JavaScriptだけでWebアプリは作れますか？",
    a: "作れます。MDNは、クライアントサイドとサーバーサイドでは使う言語が異なるが、JavaScriptは例外で両方に使われると説明しています。サーバー側ではNode.jsとExpressなどのフレームワークを組み合わせます。",
  },
  {
    q: "どのバージョンを使えばよいですか？",
    a: "各言語の公式がサポート中としている版を使うのが基本です。たとえばNode.jsの公式は、本番環境ではActive LTSかMaintenance LTSの版だけを使うよう案内しています。本記事の比較表に、2026年11月27日時点の公式の最新安定版を掲載しています。",
  },
];

const langRows = [
  {
    lang: "PHP",
    fw: "Laravel（8.9%）",
    version: "PHP 8.6（2026年11月19日リリース）",
    w3: "67.9%",
    so: "18.9%",
  },
  {
    lang: "JavaScript（Node.js）",
    fw: "Node.js（48.7%）、Express（19.9%）",
    version: "Node.js v26.13.1（最新LTS）",
    w3: "9.1%",
    so: "66%（TypeScriptは43.6%）",
  },
  {
    lang: "Ruby",
    fw: "Ruby on Rails（5.9%）",
    version: "Ruby 4.0.10",
    w3: "7.4%",
    so: "6.4%",
  },
  {
    lang: "Java",
    fw: "Spring Boot（14.7%）",
    version: "JDK 27（OpenJDK 27.0.1.1）",
    w3: "5.5%",
    so: "29.4%",
  },
  {
    lang: "C#",
    fw: "ASP.NET Core（19.7%）",
    version: ".NET 10（LTS・10.0.15）／.NET 11（STS・11.0.0）",
    w3: "4.1%（ASP.NETとして）",
    so: "27.8%",
  },
  {
    lang: "Python",
    fw: "FastAPI（14.8%）、Flask（14.4%）、Django（12.6%）",
    version: "Python 3.15.2（2026年10月25日リリース）",
    w3: "1.2%",
    so: "57.9%",
  },
  {
    lang: "Go",
    fw: "標準ライブラリのnet/httpパッケージ",
    version: "Go 1.27.4（2026年11月10日リリース）",
    w3: "0.1%未満",
    so: "16.4%",
  },
];

const supportRows = [
  { lang: "PHP", rule: "各ブランチは合計4年間サポートされ、その後はサポート終了（end of life）", now: "8.2〜8.6がサポート中。8.2のセキュリティサポートは2026年12月31日まで" },
  { lang: "Node.js", rule: "LTSは重大なバグ修正が通常合計30か月。Node.js 27からは年1回のリリースで、すべてのメジャー版がLTSに移行", now: "v26・v24・v22がLTS。v27はAlpha" },
  { lang: "Python", rule: "版ごとにサポート終了時期を公表", now: "3.15は2031年10月まで。3.10は2026年10月1日にサポート終了" },
  { lang: "Ruby", rule: "安定版・レガシーメンテナンス中・メンテナンス終了に区分して掲載", now: "安定版は4.0.10と3.4.13。3.3.14はまもなくEOL、3.2.11はメンテナンス終了" },
  { lang: "Go", rule: "各メジャー版は、新しいメジャー版が2つ出るまでサポート", now: "最新は1.27系（1.27.0は2026年8月19日リリース）" },
  { lang: "C#（.NET）", rule: "LTSとSTSの2種類。版ごとにサポート終了日を公表", now: ".NET 10・.NET 11とも2028年11月14日まで。.NET 9・.NET 8は2026年11月10日に終了" },
];

const localRows = [
  { name: "Python", local: "3.9.6（macOS同梱）", official: "3.15.2。一覧では3.10がすでにサポート終了" },
  { name: "Ruby", local: "2.6.10（macOS同梱）", official: "4.0.10。一覧では3.2.11がメンテナンス終了" },
  { name: "Node.js", local: "v25.8.0（作業端末に導入済み）", official: "v26.13.1（最新LTS）。v25は2026年3月31日でEOL" },
];

export default function WebappLanguagesPage() {
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
          { name: "Webアプリの開発言語" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webアプリの開発言語｜主要7言語の利用率・最新版・フレームワーク比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Webアプリの開発言語</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Webアプリは、ブラウザー側をHTML・CSS・JavaScriptで、サーバー側をPHP・Python・Ruby・Java・C#・JavaScript（Node.js）・Goなどの言語で作ります。サーバー側の言語は、既存サイトの保守ならPHP、新規のAPI開発ならPythonやJavaScriptが候補になりやすいのが現状の目安です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・MDNは、クライアントサイドの言語をHTML・CSS・JavaScriptとし、JavaScriptはサーバー側でも使われる例外と説明しています</li>
              <li>・W3Techs（2026年11月26日時点）では、サーバー側の言語が判明しているWebサイトの67.9%がPHPです</li>
              <li>・Stack Overflow Developer Survey 2025では、開発者の66%がJavaScript、57.9%がPythonを使っています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、MDN（Mozilla）の解説でWebアプリの構成を確認したうえで、サーバー側の主要7言語について、W3TechsのWebサイト利用率、Stack Overflow Developer Survey 2025の利用率、各言語の公式サイトに掲載された最新安定版を当サイトで1つの表にまとめます。あわせて、当サイトの作業端末で各言語のバージョンを確認した結果も掲載します。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["W3Techs「Usage statistics of server-side programming languages for websites」", "Stack Overflow Developer Survey 2025「Technology」", "MDN「サーバーサイドの概要」「サーバーサイドウェブフレームワーク」", "Python・Node.js・PHP・Ruby・Go・OpenJDK・.NETの各公式サイト"]}
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

        <section id="structure" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webアプリはどこで動く言語でできているか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            MDNの「サーバーサイドの概要」によると、動的なWebサイトを実現するコードの大部分はサーバー上で実行され、このコードを作ることを「サーバーサイドプログラミング」（バックエンドスクリプティング）と呼びます。一方、ブラウザーで動くコードはクライアントサイドコードと呼ばれ、ページの外観や動作を担います。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">使う言語</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">クライアントサイド（ブラウザー）</td><td className="border border-slate-200 px-3 py-2">画面の外観・操作、フォーム入力の検証など</td><td className="border border-slate-200 px-3 py-2">HTML、CSS、JavaScript</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">サーバーサイド</td><td className="border border-slate-200 px-3 py-2">リクエストに応じた内容の選択、データベースへの登録と取り出し、認証など</td><td className="border border-slate-200 px-3 py-2">PHP、Python、Ruby、C#、JavaScript（Node.js）など</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：MDN「サーバーサイドの概要」。表の整理は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            MDNは、サーバー側の開発ではWebフレームワークがよく使われ、Webアプリのサーバー側をフレームワークなしで開発することは考えにくいとも説明しています。そのため、言語を選ぶことは、実際には「どのフレームワークを使うか」を選ぶことでもあります。画面側とサーバー側の役割分担は<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link>でご説明しています。
          </p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サーバー側7言語の比較表（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            W3Techsのサーバー側言語の利用率で上位に入る言語と、Stack Overflow調査で利用者の多い言語から7つを選び、主なフレームワーク、公式の最新安定版、2つの調査の数値を並べました。フレームワークと言語の対応はMDNの「サーバーサイドウェブフレームワーク」の記載に、フレームワークの数値はStack Overflow調査の「Web frameworks and technologies」（全回答者）によります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主なフレームワーク（SO調査の利用率）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式の最新安定版</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">W3Techs Webサイト利用率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">SO調査 言語の利用率</th>
                </tr>
              </thead>
              <tbody>
                {langRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.fw}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.version}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.w3}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.so}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 当サイト集計。W3Techsは2026年11月26日時点で、サーバー側の言語が判明しているWebサイトに占める割合です（複数言語を使うサイトがあるため合計は100%になりません）。SO調査はStack Overflow Developer Survey 2025の全回答者の値で、言語は「過去1年に多く開発した言語」（回答31,771件）、フレームワークは「過去1年に多く開発したWebフレームワーク・技術」（回答23,678件）です。最新安定版は2026年11月27日に各公式サイトで確認しました。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            W3TechsではScalaも5.1%と上位に入っていますが、本表ではStack Overflow調査で利用者の多い言語を優先して7言語に絞りました。調査ごとに対象と質問が異なるため、数値は言語どうしの大まかな位置関係を見る目安としてご利用ください。
          </p>
        </section>

        <section id="gap" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">W3TechsとStack Overflow調査で順位が違う理由</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            比較表では、PHPはW3Techsで67.9%と突出している一方、Stack Overflow調査では18.9%にとどまります。反対にPythonは、W3Techsでは1.2%ですが、Stack Overflow調査では57.9%です。Goも、W3Techsでは0.1%未満の言語に分類されていますが、Stack Overflow調査では16.4%の開発者が使っています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            この差は、2つの調査が測っているものの違いによるものと当サイトでは考えています。W3TechsはWebサイトを対象とした調査で、サーバー側の言語が判明しているサイトだけが集計の対象です。Stack Overflow調査は開発者へのアンケートで、Webサイトに限らず、APIや社内システム、データ分析などで使った言語も含まれます。公開サイトの数で見るか、開発者の仕事の量で見るかで、結果が変わるといえます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお、W3Techsは2026年7月27日の記事で、JavaScriptがRubyを抜いてサーバー側言語の2位になったと伝えています。Stack Overflow調査では、Pythonの利用率が2024年から2025年にかけて7ポイント増え、Webフレームワークでは<Link href="/skill/python/" className="text-blue-600 hover:underline">Python</Link>のFastAPIが5ポイント増えたと説明されています。
          </p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公式のサポート期間の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Webアプリはインターネットに公開されるため、セキュリティ修正が提供される版を使うことが前提になります。各言語の公式サイトが公表しているサポートの考え方を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式のサポート方針（当サイト要約）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2026年11月27日時点の状況</th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.rule}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PHP「Supported Versions」、Node.js「Node.js Releases」、Python「Download Python」、Ruby「ダウンロード」、Go「Release History」、Microsoft「.NET and .NET Core Support Policy」。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Node.jsの公式は、本番環境ではActive LTSかMaintenance LTSの版だけを使うよう案内しています。転職先の案件で古い版が使われている場合は、サポート終了の時期とバージョンアップの計画を面接で確認しておくと、入社後の業務内容を想定しやすくなります。
          </p>
        </section>

        <section id="local" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">OSに入っている版は古いことがある（当サイト実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトの作業端末（macOS 26.5.2）で、各言語のバージョンを表示し、「Hello, Web」と出力するだけのプログラムを実行しました。いずれも出力は正常でしたが、OSに同梱されている版は公式の最新安定版よりかなり古いことが分かりました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">作業端末の版</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式の状況（2026年11月27日確認）</th>
                </tr>
              </thead>
              <tbody>
                {localRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.local}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.official}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイト実行（2026年11月27日）。python3 --version、ruby --version、node --version の表示結果です。端末の構成によって結果は異なります。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            学習や開発を始める際は、OSに入っている版をそのまま使わず、公式サイトや公式が案内するインストール方法でサポート中の版を導入することをおすすめします。
          </p>
        </section>

        <section id="choose" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目的別の選び方の目安</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ここまでの数値をもとに、当サイトで目的別の目安を整理しました。実際の選定では、チームの経験、既存システム、採用のしやすさなども考慮が必要です。
          </p>
          <ul className="text-slate-600 leading-relaxed space-y-2 mb-4">
            <li>・<strong>既存のWebサイトの保守・改修に関わりたい場合</strong>：W3Techsで67.9%を占める<Link href="/skill/php/" className="text-blue-600 hover:underline">PHP</Link>が中心になります。フレームワークは<Link href="/skill/laravel/" className="text-blue-600 hover:underline">Laravel</Link>が代表例です。</li>
            <li>・<strong>画面とサーバーを1つの言語でそろえたい場合</strong>：MDNが両方で使われると説明しているJavaScript（<Link href="/skill/nodejs/" className="text-blue-600 hover:underline">Node.js</Link>）が候補です。Stack Overflow調査ではTypeScriptも43.6%の開発者が使っています。</li>
            <li>・<strong>APIやデータ処理・AIと組み合わせたい場合</strong>：Stack Overflow調査がAI・データサイエンス・バックエンド開発の主要言語と説明し、利用も伸びている<Link href="/skill/python/" className="text-blue-600 hover:underline">Python</Link>（FastAPI・<Link href="/skill/django/" className="text-blue-600 hover:underline">Django</Link>）が候補です。</li>
            <li>・<strong>業務システムや大規模な開発に関わりたい場合</strong>：<Link href="/skill/java/" className="text-blue-600 hover:underline">Java</Link>（<Link href="/skill/spring/" className="text-blue-600 hover:underline">Spring Boot</Link>）や<Link href="/skill/csharp/" className="text-blue-600 hover:underline">C#</Link>（ASP.NET Core）が候補です。MDNは、Spring Bootの強みをクラウドを使う大規模アプリケーションの構築と説明しています。</li>
            <li>・<strong>同じコードを繰り返さない設計で作りたい場合</strong>：<Link href="/skill/ruby/" className="text-blue-600 hover:underline">Ruby</Link>（<Link href="/skill/rails/" className="text-blue-600 hover:underline">Ruby on Rails</Link>）が候補です。MDNは、RailsがDRY（同じコードを繰り返さない）やMVCといった設計パターンの使用を奨励していると説明しています。</li>
            <li>・<strong>標準ライブラリ中心で動かしたい場合</strong>：<Link href="/skill/go/" className="text-blue-600 hover:underline">Go</Link>は標準ライブラリにnet/httpパッケージを備えています。</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            Webサイトの作り方の全体像は<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link>、JavaScriptとTypeScriptの違いは<Link href="/knowledge/typescript-javascript/" className="text-blue-600 hover:underline">TypeScriptとJavaScriptの違い</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>W3Techs「Usage statistics of server-side programming languages for websites」：https://w3techs.com/technologies/overview/programming_language</li>
            <li>Stack Overflow「2025 Stack Overflow Developer Survey - Technology」：https://survey.stackoverflow.co/2025/technology</li>
            <li>MDN「サーバーサイドの概要」：https://developer.mozilla.org/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction</li>
            <li>MDN「サーバーサイドウェブフレームワーク」：https://developer.mozilla.org/ja/docs/Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks</li>
            <li>Python「Download Python」：https://www.python.org/downloads/</li>
            <li>Node.js「Node.js Releases」：https://nodejs.org/en/about/previous-releases</li>
            <li>PHP「Supported Versions」：https://www.php.net/supported-versions.php</li>
            <li>Ruby「ダウンロード」：https://www.ruby-lang.org/ja/downloads/</li>
            <li>Go「Release History」：https://go.dev/doc/devel/release</li>
            <li>OpenJDK「JDK Builds from Oracle」：https://jdk.java.net/</li>
            <li>OpenJDK「JDK 27 GA Release」：https://jdk.java.net/27/</li>
            <li>Microsoft「.NET and .NET Core Support Policy」：https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
              { name: "Webサイトの作り方", href: "/knowledge/website-howto/" },
              { name: "PHPの基礎", href: "/knowledge/php-basics/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "TypeScriptとJavaScriptの違い", href: "/knowledge/typescript-javascript/" },
              { name: "Node.jsエンジニアの転職ガイド", href: "/skill/nodejs/" },
              { name: "Go言語エンジニアの転職ガイド", href: "/skill/go/" },
              { name: "Rubyエンジニアの転職ガイド", href: "/skill/ruby/" },
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
