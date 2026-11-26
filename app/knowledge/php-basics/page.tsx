import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "PHPの基礎｜変数・配列・if・foreach・関数の書き方と、8.2〜8.6のサポート期限・利用状況【2026年】";
const DESCRIPTION =
  "PHPの基本の書き方（変数・配列・条件分岐・繰り返し・関数・strict_types）を公式マニュアルにもとづいて解説します。8.2〜8.6のサポート期限、Webサイトでのバージョン別の利用割合、開発者調査の利用率も整理します。";
const URL = "/knowledge/php-basics/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "PHPとは（公式マニュアルの定義）" },
  { id: "syntax", label: "基本の書き方5つ" },
  { id: "types", label: "型宣言とstrict_types" },
  { id: "versions", label: "バージョンとサポート期限" },
  { id: "usage", label: "利用状況（Webサイト・開発者調査）" },
  { id: "start", label: "手元で動かす方法" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "PHPとは何ですか？",
    a: "公式マニュアルは、PHPを「広く使われているオープンソースの汎用スクリプト言語」で、「特に Web 開発に適しており、HTML に埋め込むことができます」と説明しています。名前は「PHP: Hypertext Preprocessor」を再帰的に略したものです。コードはサーバーで実行され、その結果がブラウザに送られます。",
  },
  {
    q: "PHPの最新版はいくつですか？",
    a: "2026年11月26日時点の最新版は8.6.0（2026年11月19日公開）です。公式のサポート表では、8.4・8.5・8.6が通常のサポート中、8.2と8.3はセキュリティ修正のみの期間です。8.2のセキュリティ修正は2026年12月31日で終わります。",
  },
  {
    q: "PHPの変数はどう書きますか？",
    a: "公式マニュアルのとおり、ドル記号（$）の後に変数名を続けて書きます（例：$name）。変数名は大文字と小文字を区別し、先頭は英字かアンダースコアです。$this は特別な変数で、代入はできません。",
  },
  {
    q: "PHPはまだ使われていますか？",
    a: "W3Techsの集計（2026年11月26日確認）では、サーバー側の言語がわかるWebサイトの67.9％がPHPを使っています。Stack Overflow Developer Survey 2025では、過去1年にPHPで開発した人は全回答者の18.85％でした。新しい言語と比べて話題になることは少ないものの、Webサイトでの利用は今も多い言語です。",
  },
  {
    q: "php -S のサーバーは本番で使えますか？",
    a: "使えません。公式マニュアルは、組み込みWebサーバーは開発を支援するためのもので、公開ネットワーク上で使ってはいけないと説明しています。シングルスレッドの1プロセスで動くため、本番ではApacheやNginx＋PHP-FPMなどを使います。",
  },
];

const versionRows = [
  { v: "8.1", first: "2021年11月25日", active: "—", security: "2025年12月31日", latest: "8.1.34", status: "サポート終了" },
  { v: "8.2", first: "2022年12月8日", active: "2024年12月31日", security: "2026年12月31日", latest: "8.2.36", status: "セキュリティ修正のみ" },
  { v: "8.3", first: "2023年11月23日", active: "2025年12月31日", security: "2027年12月31日", latest: "8.3.37", status: "セキュリティ修正のみ" },
  { v: "8.4", first: "2024年11月21日", active: "2026年12月31日", security: "2028年12月31日", latest: "8.4.28", status: "通常のサポート" },
  { v: "8.5", first: "2025年11月20日", active: "2027年12月31日", security: "2029年12月31日", latest: "8.5.13", status: "通常のサポート" },
  { v: "8.6", first: "2026年11月19日", active: "2028年12月31日", security: "2030年12月31日", latest: "8.6.0", status: "通常のサポート" },
];

const w3Rows = [
  { v: "8.3", pct: "35.8％", note: "セキュリティ修正のみ" },
  { v: "8.2", pct: "24.7％", note: "セキュリティ修正のみ（2026年12月31日まで）" },
  { v: "8.4", pct: "13.7％", note: "通常のサポート" },
  { v: "8.1", pct: "12.2％", note: "サポート終了" },
  { v: "8.5", pct: "8.9％", note: "通常のサポート" },
  { v: "8.0", pct: "4.7％", note: "サポート終了" },
  { v: "8.6", pct: "0.1％未満", note: "通常のサポート" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function PhpBasicsPage() {
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
          { name: "PHPの基礎" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PHPの基礎｜変数・配列・if・foreach・関数の書き方と、8.2〜8.6のサポート期限・利用状況
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】PHPの基礎</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>PHPは、Web開発に適したオープンソースの汎用スクリプト言語です。変数は「$」で始め、配列は「[]」、条件分岐は「if」、繰り返しは「foreach」、関数は「function」で書きます（公式マニュアル）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・2026年11月26日時点の最新版は8.6.0（2026年11月19日公開）です</li>
              <li>・8.2のセキュリティ修正は2026年12月31日で終わります</li>
              <li>・サーバー側の言語がわかるWebサイトの67.9％がPHPを使っています（W3Techs）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、PHP公式サイト（php.net）の日本語マニュアルとサポート表、W3Techsの利用統計、Stack Overflow Developer Survey 2025をもとに、PHPの基本の書き方と現在の状況を整理します。PHPのバージョン別の利用割合とサポート状況の対応は、当サイトが2つの資料を突き合わせて作成しました。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["PHP公式マニュアル（日本語版）", "php.net「Supported Versions」「Unsupported Branches」", "W3Techs「Usage statistics of PHP」", "Stack Overflow「2025 Developer Survey」Technology"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPとは（公式マニュアルの定義）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公式マニュアルの「PHP とはなんでしょう?」は、PHPを次のように説明しています。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-700 text-sm leading-7 mb-4">
            PHP (PHP: Hypertext Preprocessor を再帰的に略したものです) は、広く使われているオープンソースの汎用スクリプト言語です。PHP は、特に Web 開発に適しており、HTML に埋め込むことができます。
          </blockquote>
          <p className="text-slate-600 leading-relaxed">
            同じページでは、コードはサーバーで実行され、その結果がクライアント（ブラウザ）に送られると説明されています。主な用途は、Webページを生成するサーバーサイドのスクリプトと、コマンドラインで動かすスクリプトの2つです。
          </p>
        </section>

        <section id="syntax" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本の書き方5つ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公式マニュアルの各ページに書かれている決まりを、当サイトが1つの表にまとめました。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>書き方</th>
                  <th className={th}>公式マニュアルに書かれている決まり</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>変数</td><td className={td}><code>$name</code></td><td className={td}>ドル記号の後に変数名。大文字と小文字を区別し、先頭は英字かアンダースコア。$this には代入できない</td></tr>
                <tr><td className={td}>配列</td><td className={td}><code>[&apos;a&apos; =&gt; 1]</code></td><td className={td}>PHPの配列は「順番付けられたマップ」。キーはintかstring。array() の代わりに [] と書ける</td></tr>
                <tr><td className={td}>条件分岐</td><td className={td}><code>if (式) {"{ … }"}</code></td><td className={td}>C言語に似た構文。式がtrueと評価されたときに実行する</td></tr>
                <tr><td className={td}>繰り返し</td><td className={td}><code>foreach ($arr as $k =&gt; $v)</code></td><td className={td}>配列とオブジェクトを反復処理する。値だけ（as $value）とキーつき（as $key =&gt; $value）の2つの形がある</td></tr>
                <tr><td className={td}>関数</td><td className={td}><code>function f($x) {"{ … }"}</code></td><td className={td}>functionキーワード・関数名・パラメータのリスト・本体で定義する。PHP 8.0.0以降はパラメータの末尾にカンマを付けられる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-2">5つを組み合わせた例です。社員の配列から、年収が600万円以上の人だけを表示します。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`<?php
declare(strict_types=1);

function formatSalary(int $man): string
{
    return number_format($man) . "万円";
}

$members = [
    "社員A" => 520,
    "社員B" => 640,
    "社員C" => 710,
];

foreach ($members as $name => $salary) {
    if ($salary >= 600) {
        echo $name . "：" . formatSalary($salary) . PHP_EOL;
    }
}`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">金額は書き方を示すための例で、統計ではありません。このコードでは「社員B：640万円」「社員C：710万円」の2行が表示されます。</p>
        </section>

        <section id="types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">型宣言とstrict_types</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            上の例の1行目にある <code>declare(strict_types=1);</code> は、型の扱いを厳密にする設定です。公式マニュアル（型宣言）の説明を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>モード</th>
                  <th className={th}>型が合わない値を渡したとき</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>デフォルト（coerciveモード）</td><td className={td}>可能であれば、宣言された型に自動で変換する（例：文字列の &quot;640&quot; をintに変換）</td></tr>
                <tr><td className={td}>strictモード（strict_types=1）</td><td className={td}>型宣言に正確に対応する値だけを受け入れ、それ以外はTypeErrorを投げる。例外はintをfloatに渡す場合だけ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            マニュアルによると、厳密な型付けはスカラー型（int・float・string・bool）の宣言にだけ適用されます。チーム開発では、意図しない型の変換によるバグを防ぐため、strict_typesを使うことがあります（採用するかどうかはプロジェクトの規約によります）。
          </p>
        </section>

        <section id="versions" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">バージョンとサポート期限</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            php.netのサポート表・サポート終了ブランチの一覧・リリース履歴をもとに、当サイトが一覧にしました。PHPは毎年11月ごろに新しいバージョンが出ており、通常のサポート（バグ修正）が約2年、その後のセキュリティ修正が約2年です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>ブランチ</th>
                  <th className={th}>初回リリース</th>
                  <th className={th}>通常のサポート</th>
                  <th className={th}>セキュリティ修正</th>
                  <th className={th}>最新の版</th>
                  <th className={th}>11月26日の状況</th>
                </tr>
              </thead>
              <tbody>
                {versionRows.map((r) => (
                  <tr key={r.v}>
                    <td className={td}>{r.v}</td>
                    <td className={td}>{r.first}</td>
                    <td className={td}>{r.active}</td>
                    <td className={td}>{r.security}</td>
                    <td className={td}>{r.latest}</td>
                    <td className={td}>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：php.net「Supported Versions」「Unsupported Branches」、リリース履歴（8.2.36〜8.6.0はいずれも2026年11月19日公開、8.1.34は2025年12月18日公開）。確認日2026年11月26日。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            8.6.0では、部分適用（Partial Function Application）、readonlyプロパティの既定値、clamp()関数などが追加されたと公式に発表されています。これから学ぶ場合は、通常のサポート期間中の8.4以降を使うと、学習中にサポートが終わる心配がありません。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用状況（Webサイト・開発者調査）</h2>
          <h3 className="font-bold text-slate-800 mb-2">Webサイトで使われているPHP 8のバージョン</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            W3Techsによると、サーバー側の言語がわかるWebサイトの67.9％がPHPを使っており、そのうち69.1％がバージョン8です。PHP 8のバージョン別の割合に、上の表のサポート状況を当サイトが並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>バージョン</th>
                  <th className={`${th} text-right`}>PHP 8のサイトに占める割合</th>
                  <th className={th}>サポート状況（php.net）</th>
                </tr>
              </thead>
              <tbody>
                {w3Rows.map((r) => (
                  <tr key={r.v}>
                    <td className={td}>{r.v}</td>
                    <td className={`${td} text-right`}>{r.pct}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：W3Techs「Usage statistics of PHP Version 8」（2026年11月26日確認）、php.net「Supported Versions」。W3Techsは同社が調べたWebサイトの集計で、日本のサイトだけの数値ではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            サポートが終わった8.0と8.1を足すと、PHP 8のサイトの16.9％になります。2026年12月31日には8.2（24.7％）のセキュリティ修正も終わるため、2027年1月時点で今のままなら、PHP 8のサイトの41.6％がサポート外のバージョンで動くことになります（いずれも当サイト算出）。PHPの求人では、新規開発だけでなく、こうしたバージョンアップの作業も多いと考えられます。
          </p>
          <h3 className="font-bold text-slate-800 mb-2">開発者調査での利用率</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={`${th} text-right`}>全回答者</th>
                  <th className={`${th} text-right`}>プロの開発者</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>PHP（言語）</td><td className={`${td} text-right`}>18.85％（n=31,771）</td><td className={`${td} text-right`}>19.06％（n=24,759）</td></tr>
                <tr><td className={td}>Laravel（Webフレームワーク）</td><td className={`${td} text-right`}>8.89％（n=23,678）</td><td className={`${td} text-right`}>9.27％（n=19,460）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（過去1年に開発で使ったもの・複数回答）。世界の開発者を対象とした調査です。</p>
        </section>

        <section id="start" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">手元で動かす方法</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>方法</th>
                  <th className={th}>使い方</th>
                  <th className={th}>注意点（公式の記載）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>コマンドラインで実行</td><td className={td}><code>php sample.php</code></td><td className={td}>PHPを導入した環境で、ファイルをそのまま実行できる</td></tr>
                <tr><td className={td}>組み込みWebサーバー</td><td className={td}><code>php -S localhost:8000</code></td><td className={td}>開発の支援用。公開ネットワーク上で使ってはいけない。シングルスレッドの1プロセスで動く</td></tr>
                <tr><td className={td}>Dockerのphpイメージ</td><td className={td}><code>php:8.4-cli</code> など</td><td className={td}>Docker公式イメージで、保守はDocker Community（PHPの開発チームではない）。cli・apache・fpmの種類がある</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PHP公式マニュアル「ビルトインウェブサーバー」、Docker Hub「php」。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            PHPの求人では、言語の基礎に加えて、LaravelなどのフレームワークやSQLの経験が見られることが多くあります。職務経歴書には、扱ったPHPのバージョンと、バージョンアップの経験があれば書いておくと、保守の案件で評価されやすくなります。PHPエンジニアの年収や求人の傾向は<Link href="/skill/php/" className="text-blue-600 hover:underline">PHPエンジニアの転職ガイド</Link>、SQLの書き方は<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link>をご覧ください。
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
            <li>PHPマニュアル「PHP とはなんでしょう?」：https://www.php.net/manual/ja/introduction.php</li>
            <li>PHPマニュアル「変数の基本」：https://www.php.net/manual/ja/language.variables.basics.php</li>
            <li>PHPマニュアル「配列」：https://www.php.net/manual/ja/language.types.array.php</li>
            <li>PHPマニュアル「if」：https://www.php.net/manual/ja/control-structures.if.php</li>
            <li>PHPマニュアル「foreach」：https://www.php.net/manual/ja/control-structures.foreach.php</li>
            <li>PHPマニュアル「ユーザー定義関数」：https://www.php.net/manual/ja/functions.user-defined.php</li>
            <li>PHPマニュアル「型宣言」：https://www.php.net/manual/ja/language.types.declarations.php</li>
            <li>PHPマニュアル「ビルトインウェブサーバー」：https://www.php.net/manual/ja/features.commandline.webserver.php</li>
            <li>php.net「Supported Versions」：https://www.php.net/supported-versions.php</li>
            <li>php.net「Unsupported Branches」：https://www.php.net/eol.php</li>
            <li>php.net リリース履歴：https://www.php.net/releases/</li>
            <li>W3Techs「Usage statistics of server-side programming languages」：https://w3techs.com/technologies/overview/programming_language</li>
            <li>W3Techs「Usage statistics of PHP Version 8」：https://w3techs.com/technologies/details/pl-php/8</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
            <li>Docker Hub「php」：https://hub.docker.com/_/php</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "PHPエンジニアの転職ガイド", href: "/skill/php/" },
              { name: "Laravelエンジニアの転職ガイド", href: "/skill/laravel/" },
              { name: "SQLの基礎", href: "/knowledge/sql-basics/" },
              { name: "Webサイトの作り方", href: "/knowledge/website-howto/" },
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
