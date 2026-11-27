import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webエンジニアとは｜公的な分類・IPAのロール・扱うWeb標準13件を一次情報で整理【2026年】";
const DESCRIPTION =
  "Webエンジニアとは、Webサイトやアプリを作る技術者の呼び方で、公的な定義はありません。職業分類での位置、IPAのロール、扱うWeb標準13件の一覧、当サイトでのHTTP取得結果を整理します。";
const URL = "/knowledge/web-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Webエンジニアの定義（公的な職業分類での位置）" },
  { id: "role", label: "IPAデジタルスキル標準で見る役割" },
  { id: "standards", label: "Webエンジニアが扱う標準の一覧（当サイト整理）" },
  { id: "run", label: "HTTPの通信を確かめる（当サイトでの実行結果）" },
  { id: "related", label: "転職・言語・職種の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Webエンジニアとは簡単に言うと何ですか？",
    a: "Webサイトや、ブラウザから使うWebアプリケーションの画面・サーバー側の仕組みを設計・開発する技術者を指す呼び方です。公的な定義はありません。厚生労働省編職業分類（2022年改定）では、設計を担う人は「009-01 ソフトウェア開発技術者（WEB・オープン系）」、ソースコードを書く人は「009-03 プログラマー」（例示にWebプログラマー）に分類されます。",
  },
  {
    q: "WebエンジニアとWebプログラマーの違いは何ですか？",
    a: "求人では同じ意味で使われることもあり、企業によって異なります。厚生労働省編職業分類では、要件定義や設計書の作成を担う人は009-01、設計書にもとづいてプログラムを作成する人は009-03 プログラマー（例示にWebプログラマー）と区別されています。Webエンジニアという職業名は同分類の例示にはありません（当サイトで全文を検索して確認）。",
  },
  {
    q: "WebエンジニアとWebデザイナーの違いは何ですか？",
    a: "厚生労働省編職業分類では、Webデザイナーは「017-01 ウェブデザイナー」で、サイトの構成や文字・配置・配色などの視覚的要素をデザインする仕事とされています。同じ項目の注記で、Webプログラマー・HTMLコーダーは009-03に分類すると明記されており、見た目のデザインとプログラムの作成は別の職業として扱われています。",
  },
  {
    q: "Webエンジニアはどのような技術を学べばよいですか？",
    a: "IPAのデジタルスキル標準ver.2.0は、ソフトウェアエンジニアの学習項目例として「Webアプリケーション基本技術」にHTML/CSS、JavaScript、REST、WebSocket、SPA、CMSを挙げています。あわせて、Webの土台となる標準（HTTPはIETFのRFC 9110など、HTMLはWHATWGのHTML Standard）の存在を知っておくと、仕組みを理解しやすくなります。",
  },
  {
    q: "Webエンジニアの年収はどのくらいですか？",
    a: "公的な賃金統計に「Webエンジニア」という区分はありません。賃金構造基本統計調査の職種別の値は、当サイトの「ITエンジニアの種類一覧」と「プログラマーとは」でご紹介しています。企業ごとの求人条件は担当範囲によって大きく異なるため、求人票で業務内容とあわせてご確認ください。",
  },
];

const classRows = [
  { code: "009-01", name: "ソフトウェア開発技術者（WEB・オープン系）", web: "Web系ソフトウェア開発技術者、システムエンジニア（WEBサイト開発）", work: "要件定義、基本設計書・詳細設計書・仕様書の作成などの開発" },
  { code: "009-03", name: "プログラマー", web: "Webプログラマー、Webアプリケーションプログラマー、HTMLコーダー", work: "設計書にもとづくプログラムの作成・テスト、保守に必要な文書の作成" },
  { code: "017-01", name: "ウェブデザイナー", web: "Webデザイナー、Webクリエイター、ホームページデザイナー", work: "サイト・ページの構成、文字・配置・配色などの視覚的要素のデザイン" },
  { code: "020-99", name: "他に分類されない法務・経営・文化芸術等の専門的職業", web: "Webディレクター、Webプロデューサー", work: "ウェブサイト制作の予算・要員・進捗・品質の管理、企画など" },
];

const dssRows = [
  { role: "フロントエンドエンジニア", duty: "ソフトウェアの機能のうち、主にインターフェース（クライアントサイド）の機能の実現に主たる責任を持つ" },
  { role: "バックエンドエンジニア", duty: "ソフトウェアの機能のうち、主にサーバサイドの機能の実現に主たる責任を持つ" },
  { role: "クラウドエンジニア/SRE", duty: "ソフトウェアの開発・運用環境の最適化と信頼性の向上に責任を持つ" },
  { role: "フィジカルコンピューティングエンジニア", duty: "現実世界（物理領域）のデジタル化を担い、デバイスを含めたソフトウェア機能の実現に責任を持つ" },
];

const standardRows = [
  { area: "HTTP（共通の意味）", name: "RFC 9110 HTTP Semantics", org: "IETF", ver: "2022年6月・Internet Standard", use: "メソッド（GET・HEAD・POSTなど）とステータスコードの意味" },
  { area: "HTTP/1.1", name: "RFC 9112 HTTP/1.1", org: "IETF", ver: "2022年6月・Internet Standard", use: "テキスト形式でのメッセージのやり取り" },
  { area: "HTTP/2", name: "RFC 9113 HTTP/2", org: "IETF", ver: "2022年6月・Proposed Standard", use: "1つの接続での複数のやり取りの並行処理、ヘッダー圧縮" },
  { area: "HTTP/3", name: "RFC 9114 HTTP/3", org: "IETF", ver: "2022年6月・Proposed Standard", use: "QUIC上でのHTTP" },
  { area: "暗号化通信", name: "RFC 9846 TLS 1.3", org: "IETF", ver: "2026年7月・Proposed Standard（RFC 8446を置き換え）", use: "HTTPSの暗号化" },
  { area: "URI", name: "RFC 3986 URI Generic Syntax", org: "IETF", ver: "2005年1月・Internet Standard", use: "URIの構文" },
  { area: "HTML", name: "HTML Standard", org: "WHATWG", ver: "Living Standard（最終更新 2026年11月27日）", use: "ページの構造の記述" },
  { area: "DOM", name: "DOM Standard", org: "WHATWG", ver: "Living Standard（最終更新 2026年11月25日）", use: "JavaScriptからページを操作する仕組み" },
  { area: "通信API", name: "Fetch Standard", org: "WHATWG", ver: "Living Standard（最終更新 2026年11月20日）", use: "ブラウザからのリクエストとfetch()" },
  { area: "URL", name: "URL Standard", org: "WHATWG", ver: "Living Standard（最終更新 2026年11月19日）", use: "ブラウザでのURLの解釈" },
  { area: "CSS", name: "CSS Snapshot 2026", org: "W3C", ver: "Group Note（2026年6月22日）", use: "現時点のCSSを構成する仕様の一覧" },
  { area: "JavaScript", name: "ECMA-262（ECMAScript 2026）", org: "Ecma International", ver: "第17版・2026年6月", use: "JavaScriptの言語仕様" },
  { area: "アクセシビリティ", name: "WCAG 2.2", org: "W3C", ver: "W3C Recommendation（2024年12月12日）", use: "障害のある方を含めて使えるWebコンテンツの基準" },
];

const curlRows = [
  { site: "www.rfc-editor.org", ver: "HTTP/2", server: "cloudflare", h3: "あり" },
  { site: "www.w3.org", ver: "HTTP/2", server: "cloudflare", h3: "あり" },
  { site: "developer.mozilla.org", ver: "HTTP/2", server: "Google Frontend", h3: "なし" },
  { site: "ecma-international.org", ver: "HTTP/2", server: "Apache", h3: "なし" },
  { site: "www.ipa.go.jp", ver: "HTTP/2", server: "Apache", h3: "なし" },
  { site: "html.spec.whatwg.org", ver: "HTTP/1.1", server: "nginx/1.10.3", h3: "なし" },
  { site: "www.jil.go.jp", ver: "HTTP/1.1", server: "nginx", h3: "なし" },
];

export default function WebEngineerKnowledgePage() {
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
          { name: "Webエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webエンジニアとは｜公的な分類・IPAのロール・扱うWeb標準13件を一次情報で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Webエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Webエンジニアとは、Webサイトやブラウザから使うWebアプリケーションの画面側・サーバー側の仕組みを設計・開発する技術者の呼び方です。公的な定義はなく、担当範囲は企業によって異なります。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省編職業分類（2022年改定）では、設計を担う人は「009-01 ソフトウェア開発技術者（WEB・オープン系）」、コードを書く人は「009-03 プログラマー」に入ります。「Webエンジニア」という職業名は例示にありません</li>
              <li>・IPAのデジタルスキル標準ver.2.0は、ソフトウェアエンジニアをフロントエンド・バックエンド・クラウド/SRE・フィジカルコンピューティングの4ロールに分けています</li>
              <li>・仕事の土台はHTTP（IETF）、HTML・DOM（WHATWG）、CSS・WCAG（W3C）、JavaScript（Ecma）などの標準です。当サイトでは13件を一覧にしました</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、厚生労働省編職業分類とIPA（情報処理推進機構）のデジタルスキル標準をもとに、Webエンジニアとはどのような仕事かをご説明します。あわせて、Webエンジニアが日々扱う標準を策定団体の公式ページで確認して一覧にし、当サイトのMacで実際にHTTPのレスポンスを取得した結果を掲載しました。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類 職業分類表」", "IPA「デジタルスキル標準ver.2.0（ソフトウェアエンジニア編）」", "IETF RFC 9110・9112・9113・9114・9846・3986", "WHATWG・W3C・Ecma Internationalの各仕様", "当サイトでのcurl・Python http.serverの実行結果"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webエンジニアの定義（公的な職業分類での位置）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「Webエンジニア」は求人や業界で広く使われる呼び方ですが、公的な定義はありません。当サイトで、労働政策研究・研修機構（JILPT）が公開している第5回改定 厚生労働省編職業分類の職業分類表（全522ページ）の本文を検索したところ、「Webエンジニア」「ウェブエンジニア」「フロントエンド」「バックエンド」「フルスタック」はいずれも0件でした。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            一方、「Web」「WEB」「ウェブ」を含む職業名は例示として複数載っています。このうち、Webサイト・Webアプリケーションの制作に関わるものを当サイトで小分類ごとに整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">小分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">例示にあるWeb関連の職業名</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">仕事の内容（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                {classRows.map((r) => (
                  <tr key={r.code}>
                    <td className="border border-slate-200 px-3 py-2">{r.code} {r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.web}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」中分類009・017・020。要約は当サイトによるものです。このほか、Webプランナー・Webマーケティング事務員（033-03 企画・調査事務員）、Webショップ店長（036-04 インターネット応接等事務員）も例示されていますが、事務の職業のため表から除いています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            同分類の「017-01 ウェブデザイナー」には、Webプログラマー・HTMLコーダーは009-03に、Webディレクター・Webプロデューサーは020-99に分類するという注記があります。つまり公的な分類では、Webサイトの制作は「設計（009-01）」「コードの作成（009-03）」「デザイン（017-01）」「制作の管理（020-99）」に分かれており、求人でいうWebエンジニアは主に前の2つに当たると当サイトでは整理しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ITエンジニア全体の11の小分類と仕事内容は<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link>で、009-01と009-03の違いは<Link href="/knowledge/programmer/" className="text-blue-600 hover:underline">プログラマーとは</Link>でご説明しています。
          </p>
        </section>

        <section id="role" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IPAデジタルスキル標準で見る役割</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAが2026年4月16日に公開したデジタルスキル標準ver.2.0では、人材類型「ソフトウェアエンジニア」を、得意とする領域に応じて4つのロールに分けています。IPAは、このうちフロントエンド・バックエンド・クラウドエンジニア/SREの3つは「一般的な求人市場等で用いられている表現を意識したもの」と説明しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ロール</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">担うべき責務（IPAの記載）</th>
                </tr>
              </thead>
              <tbody>
                {dssRows.map((r) => (
                  <tr key={r.role}>
                    <td className="border border-slate-200 px-3 py-2">{r.role}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.duty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準ver.2.0（分冊版：DX推進スキル標準 ソフトウェアエンジニア編）」ロール一覧。各責務の冒頭の「デジタル技術を活用したサービスを提供するための」は省略しています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            同じ資料の学習項目例では、Webに関わる項目として次の3つが挙げられています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li><strong>Webアプリケーション基本技術</strong>：HTML/CSS、JavaScript、REST、WebSocket、SPA、CMS</li>
            <li><strong>フロントエンドシステム開発</strong>：UI設計、レスポンシブデザイン、モックアップ開発、フロントエンドフレームワーク、PWA、検索最適化/SEO</li>
            <li><strong>バックエンドシステム開発</strong>：データベース設計、オブジェクトストレージ、NoSQL、バックエンドフレームワーク、キャッシュ、負荷分散、認証認可</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            IPAは、これらのロールを数十名以上のソフトウェアエンジニアチームを持つ企業を想定して定義したとし、より小規模な企業では少数または1人がすべてのロールを担うこともあると記載しています。求人の「Webエンジニア」がどのロールを指すかは、業務内容の欄で確かめる必要があります。画面側とサーバー側の違いや開発者調査での職種の構成は<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link>をご覧ください。
          </p>
        </section>

        <section id="standards" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webエンジニアが扱う標準の一覧（当サイト整理）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Webの技術は、特定の企業ではなく標準化団体が公開している仕様にもとづいて動いています。当サイトでは、Webエンジニアの仕事に直接関わる代表的な標準13件を選び、2026年11月27日に各団体の公式ページで版・日付・位置づけを確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分野</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">標準</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">策定団体</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">確認できた版・日付</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">仕事との関係（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                {standardRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.area}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.org}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.ver}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：RFC Editor（各RFCのメタデータ）、WHATWG・W3C・Ecma Internationalの各仕様ページ。13件の選定と「仕事との関係」の欄は当サイトの整理で、公的な一覧ではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            策定団体ごとに数えると、IETFが6件、WHATWGが4件、W3Cが2件、Ecma Internationalが1件です（当サイト集計）。通信の決まり（HTTP・TLS）はIETFのRFC、ブラウザでの表示と操作（HTML・DOM・Fetch）はWHATWGの「Living Standard」という分担になっています。WHATWGの4件は、いずれも確認日までの9日間（2026年11月19日〜27日）に更新されており、版番号ではなく随時更新される形式であることが分かります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            なお、TLS 1.3は2026年7月にRFC 9846が発行され、2018年のRFC 8446を置き換えています。URLについては、IETFのRFC 3986とWHATWGのURL Standardの2つの仕様があります。HTMLの標準がWHATWGに一本化された経緯は<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link>でご紹介しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            RFC 9110では、たとえばHEADメソッドを「GETと同一だが、サーバーはレスポンスで本文を送ってはならない」ものと定め、リンクの確認や更新日時の確認によく使われると説明しています。次の章では、このHEADメソッドを使って実際の通信を確かめます。
          </p>
        </section>

        <section id="run" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">HTTPの通信を確かめる（当サイトでの実行結果）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトでは2026年11月27日に、macOS 26.5.2・curl 8.7.1のMacで、表に載せた標準化団体と公的機関のサイトへ <code>curl -sI</code>（HEADリクエスト。User-Agentは「Mozilla/5.0」を指定）を送り、レスポンスの先頭行とヘッダーを確認しました。curlの既定の設定で接続した結果です。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto mb-4">{`$ curl -sI -A "Mozilla/5.0" https://www.rfc-editor.org/
HTTP/2 200
content-type: text/html;charset=utf-8
cache-control: public, max-age=600, stale-while-revalidate=600
server: cloudflare
alt-svc: h3=":443"; ma=86400
（主な行を抜粋）`}</pre>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">サイト</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">応答したHTTPの版</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">serverヘッダー</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">alt-svcでのHTTP/3の案内</th>
                </tr>
              </thead>
              <tbody>
                {curlRows.map((r) => (
                  <tr key={r.site}>
                    <td className="border border-slate-200 px-3 py-2">{r.site}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.ver}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.server}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.h3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">当サイトでの実行結果（2026年11月27日）。各サイトの設定は変更されることがあり、利用するクライアントや経路によって結果が異なる場合があります。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            7サイト中5サイトがHTTP/2で応答し、2サイトはHTTP/1.1でした。HTTP/3を使えることを示す <code>alt-svc: h3</code> ヘッダーを返したのは2サイトです（当サイト集計）。HTML Standardを公開しているWHATWGのサイトがHTTP/1.1で応答していたように、標準の新しさとサーバーの設定は別のものです。Webエンジニアの仕事には、こうしたレスポンスヘッダーを読んで、キャッシュ（cache-control）やHTTPS強制（strict-transport-security）の設定を確かめることも含まれます。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            次に、同じMacで、/usr/bin/python3（Python 3.9.6）の標準ライブラリ <code>http.server</code> を起動し、1枚のHTMLファイルを返すサーバーを手元で動かしました。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto mb-4">{`$ python3 -I -m http.server 8765 --bind 127.0.0.1
$ curl -sI http://127.0.0.1:8765/index.html
HTTP/1.0 200 OK
Server: SimpleHTTP/0.6 Python/3.9.6
Date: Fri, 27 Nov 2026 12:38:32 GMT
Content-type: text/html
Content-Length: 49
Last-Modified: Fri, 27 Nov 2026 12:38:31 GMT

$ curl -si http://127.0.0.1:8765/nothing.html
HTTP/1.0 404 File not found
（先頭行のみ抜粋）

（サーバー側のログ）
127.0.0.1 - - [27/Nov/2026 21:38:32] "HEAD /index.html HTTP/1.1" 200 -
127.0.0.1 - - [27/Nov/2026 21:38:32] code 404, message File not found
127.0.0.1 - - [27/Nov/2026 21:38:32] "GET /nothing.html HTTP/1.1" 404 -`}</pre>
          <p className="text-slate-600 leading-relaxed mb-4">
            curlはHTTP/1.1で要求しましたが、サーバーはHTTP/1.0で応答しました。Pythonの公式ドキュメントは、<code>protocol_version</code> の既定値が後方互換のため「HTTP/1.0」であると説明しています。存在しないファイルには、RFC 9110が定めるステータスコード404が返りました。
          </p>
          <p className="text-slate-600 leading-relaxed">
            同ドキュメントは「http.serverは本番環境での利用は推奨しない（基本的なセキュリティチェックしか実装していない）」と警告しています。手元での動作確認には便利ですが、公開するサービスには、Webサーバーやフレームワークを使うのが前提になります。サーバー側で使う言語とフレームワークの比較は<Link href="/knowledge/webapp-languages/" className="text-blue-600 hover:underline">Webアプリの開発言語</Link>で扱っています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・言語・職種の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はWebエンジニアという呼び方の定義と、仕事の土台になる標準・仕組みに絞ってご説明しました。開発者調査の数値や言語の利用率、転職の進め方は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>画面側とサーバー側の違い・開発者調査の職種構成：<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link></li>
            <li>サーバー側の言語の利用率と選び方：<Link href="/knowledge/webapp-languages/" className="text-blue-600 hover:underline">Webアプリの開発言語</Link></li>
            <li>サイトを公開するまでの手順：<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link></li>
            <li>フロントエンドの転職市場（求人・年収）：<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link></li>
            <li>サーバー側の言語別の転職ガイド：<Link href="/skill/php/" className="text-blue-600 hover:underline">PHP</Link>・<Link href="/skill/nodejs/" className="text-blue-600 hover:underline">Node.js</Link>・<Link href="/skill/python/" className="text-blue-600 hover:underline">Python</Link></li>
            <li>担当領域を広げる転職：<Link href="/career/frontend-to-backend/" className="text-blue-600 hover:underline">フロントエンドからバックエンドへの転職</Link></li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">※ /skill/ 配下の記事は転職ガイドとして求人・年収を中心に扱っており、本記事（定義と仕組み）とは目的が異なります。</p>
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
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業分類表」（中分類009・017・020・033・036）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>IPA「デジタルスキル標準」：https://www.ipa.go.jp/jinzai/skill-standard/dss/index.html</li>
            <li>IPA「デジタルスキル標準ver.2.0（分冊版：DX推進スキル標準 ソフトウェアエンジニア編）」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/sep_dss-p_swe.pdf</li>
            <li>IETF RFC 9110「HTTP Semantics」：https://www.rfc-editor.org/rfc/rfc9110</li>
            <li>IETF RFC 9112「HTTP/1.1」：https://www.rfc-editor.org/rfc/rfc9112</li>
            <li>IETF RFC 9113「HTTP/2」：https://www.rfc-editor.org/rfc/rfc9113</li>
            <li>IETF RFC 9114「HTTP/3」：https://www.rfc-editor.org/rfc/rfc9114</li>
            <li>IETF RFC 9846「The Transport Layer Security (TLS) Protocol Version 1.3」：https://www.rfc-editor.org/rfc/rfc9846</li>
            <li>IETF RFC 8446（RFC 9846により置き換え）：https://www.rfc-editor.org/rfc/rfc8446</li>
            <li>IETF RFC 3986「Uniform Resource Identifier (URI): Generic Syntax」：https://www.rfc-editor.org/rfc/rfc3986</li>
            <li>WHATWG「HTML Standard」：https://html.spec.whatwg.org/multipage/</li>
            <li>WHATWG「DOM Standard」：https://dom.spec.whatwg.org/</li>
            <li>WHATWG「Fetch Standard」：https://fetch.spec.whatwg.org/</li>
            <li>WHATWG「URL Standard」：https://url.spec.whatwg.org/</li>
            <li>W3C「CSS Snapshot 2026」：https://www.w3.org/TR/CSS/</li>
            <li>W3C「Web Content Accessibility Guidelines (WCAG) 2.2」：https://www.w3.org/TR/WCAG22/</li>
            <li>Ecma International「ECMA-262」：https://ecma-international.org/publications-and-standards/standards/ecma-262/</li>
            <li>Python「http.server — HTTP servers」：https://docs.python.org/3/library/http.server.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
              { name: "Webアプリの開発言語", href: "/knowledge/webapp-languages/" },
              { name: "プログラマーとは", href: "/knowledge/programmer/" },
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
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
