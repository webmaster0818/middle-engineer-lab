import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Perlとは｜公式の定義・特徴・最新版5.44とサポート期限・利用率を一次情報で解説【2026年】";
const DESCRIPTION =
  "Perl（パール）は、テキスト処理を得意とする汎用プログラミング言語です。公式ドキュメントにもとづく定義と特徴、1.000から5.44までの主なリリース、公式のサポート期限、Stack Overflow調査の利用率、当サイトで動かしたサンプルコードを整理します。";
const URL = "/knowledge/perl/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Perlの定義と特徴" },
  { id: "history", label: "主なリリースとサポート期限" },
  { id: "sample", label: "サンプルコード（当サイトで実行）" },
  { id: "usage", label: "開発者の利用率（Stack Overflow調査）" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Perlとは何ですか？",
    a: "公式ドキュメント（perlintro）は、Perlを「もともとテキスト処理のために開発され、現在はシステム管理、Web開発、ネットワークプログラミング、GUI開発など幅広い用途に使われる汎用プログラミング言語」と説明しています。開発者はLarry Wall氏で、最初の版（1.000）は1987年12月18日に公開されました。",
  },
  {
    q: "Perlの最新版はいくつですか？",
    a: "2026年11月26日時点の最新の安定版は5.44.0（2026年7月15日公開）です。公式のポリシー（perlpolicy）では、5.44系と5.42系がフルサポート、5.40系がセキュリティ修正のみの対象で、それより古い安定版はサポート終了とされています。",
  },
  {
    q: "PerlとPERLのどちらが正しい表記ですか？",
    a: "公式FAQ（perlfaq1）によると、言語名は「Perl」（Pだけ大文字）で、実行するプログラム（インタプリタ）の名前は小文字の「perl」です。Perlは略語ではないため「PERL」とは書かないよう案内されています。",
  },
  {
    q: "Perlはまだ使われていますか？",
    a: "Stack Overflow Developer Survey 2025では、過去1年にPerlで開発した人は全回答者の3.8％、プロの開発者の3.4％でした。新規開発で選ばれる機会は多くありませんが、公式サイトによるとCPANには4万2,000を超えるモジュールが公開されており、開発も続いています。既存システムの保守やサーバー管理の場面で使われることがあります。",
  },
  {
    q: "MacにはPerlが入っていますか？",
    a: "公式のダウンロードページは、macOSにはPerlが含まれているものの最新版とは限らないと説明しています。当サイトの検証用のMacで perl -v を実行したところ、表示されたのは5.34.1でした。5.34系は公式のサポート対象外のため、新しく使う場合は最新版を別に導入する方法も検討してください。",
  },
];

const releaseRows = [
  { v: "1.000", date: "1987年12月18日", note: "最初の版" },
  { v: "5.000", date: "1994年10月17日", note: "Perl 5の最初の版" },
  { v: "5.40.0", date: "2024年6月9日", note: "セキュリティ修正のみ" },
  { v: "5.42.0", date: "2025年7月3日", note: "フルサポート（1つ前の安定版）" },
  { v: "5.44.0", date: "2026年7月15日", note: "フルサポート（現在の安定版）" },
];

export default function PerlPage() {
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
          { name: "Perlとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Perlとは｜公式の定義・特徴・最新版5.44とサポート期限・利用率を一次情報で解説
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Perlとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Perl（パール）は、テキスト処理のために開発され、現在はシステム管理・Web開発・ネットワークプログラミングなどに使われる汎用プログラミング言語です（公式ドキュメント perlintro）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・Larry Wall氏が開発し、最初の版は1987年12月に公開されました</li>
              <li>・2026年11月26日時点の最新の安定版は5.44.0（2026年7月公開）です</li>
              <li>・Stack Overflow Developer Survey 2025の利用率は全回答者の3.8％です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Perlの公式サイト（perl.org）と公式ドキュメント（perldoc）の perlintro・perlfaq1・perlhist・perlpolicy、Stack Overflow Developer Survey 2025をもとに、Perlの定義と現在の状況を整理します。サンプルコードは当サイトの検証用のMacで実行し、出力を確認したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["Perl公式サイト（perl.org）", "perldoc「perlintro」「perlfaq1」「perlhist」「perlpolicy」", "Stack Overflow「2025 Developer Survey」Technology"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Perlの定義と特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            perlintroは、Perlは「美しさ（小さく、洗練され、最小限であること）」より「実用性（使いやすく、効率的で、完全であること）」を重視した言語だと説明しています。公式資料に書かれている主な特徴を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">得意な処理</td><td className="border border-slate-200 px-3 py-2">テキスト処理（正規表現の組み込みサポート）、ファイル操作、プロセス操作</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">書き方</td><td className="border border-slate-200 px-3 py-2">手続き型とオブジェクト指向の両方に対応</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">影響を受けた言語</td><td className="border border-slate-200 px-3 py-2">主にC言語、ほかにsed・awk・Unixシェルなど（perlfaq1）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">モジュール</td><td className="border border-slate-200 px-3 py-2">CPANに4万2,000を超えるオープンソースの配布物（perl.org）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">対応環境</td><td className="border border-slate-200 px-3 py-2">100を超えるプラットフォーム。Linux・macOSには標準で含まれることが多く、WindowsはStrawberry Perlなどを導入（perl.org）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">標語</td><td className="border border-slate-200 px-3 py-2">「やり方は一つではない（There&apos;s more than one way to do it）」（perlfaq1）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">関連言語</td><td className="border border-slate-200 px-3 py-2">Raku（旧称 Perl 6）は、Perlの置き換えではなく、Perlファミリーの別の言語（perl.org）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：perldoc「perlintro」「perlfaq1」、Perl公式サイト（トップページ・Download）。日本語の要約は当サイトによるものです。</p>
        </section>

        <section id="history" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主なリリースとサポート期限</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            perlhist（リリースの記録）とperlpolicy（サポート方針）をもとに、当サイトが一覧にしました。Perl 5では、バージョンの2つ目の数字が偶数のものが安定版、奇数のものが開発版です（perlhistの記録で5.41・5.43などが開発版として記載）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公開日</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">備考・サポート状況</th>
                </tr>
              </thead>
              <tbody>
                {releaseRows.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">{r.v}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.date}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：perldoc「perlhist」「perlpolicy」（MAINTENANCE AND SUPPORT）。5.40系より古い安定版はサポート終了（End of life）です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            直近の安定版は、2024年6月・2025年7月・2026年7月とおおむね1年に1回公開されています。サポートは直近2つの安定版がフルサポート、その1つ前がセキュリティ修正のみのため、1つの安定版がサポートされる期間はおよそ3年です（当サイトの整理）。なお、perlpolicyは、Perlは企業ではなくコミュニティが開発しており、サポートの約束は個人の協力に支えられていると説明しています。
          </p>
        </section>

        <section id="sample" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サンプルコード（当サイトで実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Perlが得意とするテキスト処理の例として、アクセスログからHTTPステータスコードの件数を数えるスクリプトです。正規表現で3桁の数字を取り出し、ハッシュ（連想配列）で数えています。当サイトの検証用のMac（perl 5.34.1）で実行しました。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`use strict;
use warnings;

my %count;
while (my $line = <DATA>) {
    if ($line =~ /\\s(\\d{3})\\s/) {
        $count{$1}++;
    }
}
for my $code (sort keys %count) {
    print "$code: $count{$code}件\\n";
}
__DATA__
2026-11-26 02:00:01 200 /index.html
2026-11-26 02:00:05 404 /old-page
2026-11-26 02:00:09 200 /about
2026-11-26 02:00:12 500 /api
2026-11-26 02:00:15 200 /index.html`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-2">実行結果：</p>
          <pre className="bg-slate-100 text-slate-800 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`200: 3件
404: 1件
500: 1件`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4">
            perlintroは、スクリプトの先頭に <code>use strict;</code> と <code>use warnings;</code> を書くことを勧めています。Perlは既定では書き方に寛容なため、コードによくある問題をperlに検出させるための設定です。strictで検出された問題はその場で実行が止まり、warningsは警告を出したうえで実行を続けます。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の利用率（Stack Overflow調査）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全回答者（n=31,771）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">プロの開発者（n=24,759）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">Perl</td><td className="border border-slate-200 px-3 py-2 text-right">3.8％</td><td className="border border-slate-200 px-3 py-2 text-right">3.4％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">（参考）Bash/Shell</td><td className="border border-slate-200 px-3 py-2 text-right">48.7％</td><td className="border border-slate-200 px-3 py-2 text-right">48.8％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（過去1年に開発で使った言語・複数回答）。世界の開発者を対象とした調査で、日本の求人数とは一致しません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Perlと同じくサーバー上の作業の自動化に使われるBash/Shellと比べると、Perlの利用率は10分の1以下です（当サイト算出）。新しく学ぶ言語としての優先度は高くありませんが、古くから動いているシステムでは今もPerlのスクリプトが使われていることがあります。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            Perlの経験は、既存システムの保守・移行の案件や、サーバー管理の自動化の経験として評価されることがあります。職務経歴書には、Perlで作ったもの（バッチ処理・ログ集計・CGIなど）と規模に加えて、Pythonなど他の言語への移行に関わった経験があれば書いておくと、言語を問わず通用する力として伝わります。Pythonの概要は<Link href="/knowledge/python/" className="text-blue-600 hover:underline">Pythonとは</Link>、言語別の年収は<Link href="/salary/skill-ranking/" className="text-blue-600 hover:underline">プログラミング言語別の年収ランキング</Link>をご覧ください。
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
            <li>Perl公式サイト：https://www.perl.org/</li>
            <li>Perl Download：https://www.perl.org/get.html</li>
            <li>perldoc「perlintro」：https://perldoc.perl.org/perlintro</li>
            <li>perldoc「perlfaq1」：https://perldoc.perl.org/perlfaq1</li>
            <li>perldoc「perlhist」：https://perldoc.perl.org/perlhist</li>
            <li>perldoc「perlpolicy」：https://perldoc.perl.org/perlpolicy</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "C言語とは", href: "/knowledge/c-language/" },
              { name: "プログラミング言語別の年収ランキング", href: "/salary/skill-ranking/" },
              { name: "Linuxエンジニアの転職ガイド", href: "/skill/linux/" },
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
