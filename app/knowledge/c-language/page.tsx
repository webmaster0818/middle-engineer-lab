import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "C言語とは｜成り立ち・規格の版（C89〜C23）・コンパイラの既定・利用率を一次情報で解説【2026年】";
const DESCRIPTION =
  "C言語は、1970年代初めにUnixを実装するために生まれたプログラミング言語です。開発者の論文にもとづく成り立ち、国際規格ISO/IEC 9899の版の一覧、GCC 15の既定がC23になった変更、当サイトで確かめたコンパイラの既定、利用率を整理します。";
const URL = "/knowledge/c-language/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "C言語の成り立ちと特徴" },
  { id: "standards", label: "規格の版（C89〜C23・C2y）" },
  { id: "compiler", label: "コンパイラの既定の版（当サイトで確認）" },
  { id: "sample", label: "サンプルコード（当サイトで実行）" },
  { id: "usage", label: "開発者の利用率（Stack Overflow調査）" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "C言語とは何ですか？",
    a: "1970年代初めに、誕生したばかりのUnixオペレーティングシステムを実装するための言語としてベル研究所で作られたプログラミング言語です。開発者のDennis Ritchie氏の論文「The Development of the C Language」によると、C言語は1969〜1973年にUnixの開発と並行して生まれ、1973年夏にはUnixのカーネルをC言語で書き直せるまでになりました。",
  },
  {
    q: "C言語の最新の規格はどれですか？",
    a: "2026年11月26日時点の最新の規格はC23（ISO/IEC 9899:2024）です。規格を担当するISO/IEC JTC1/SC22/WG14の公式サイトによると、C23は2024年にISOとIECで採択されました。次の版は「C2y」の名前で作業が進んでおり、2026年10月25日付の草案（N3998）が公開されています。",
  },
  {
    q: "C言語とC++は同じものですか？",
    a: "別の言語です。C++はC言語をもとに作られた言語で、規格もC言語（ISO/IEC 9899）とは別に定められています。C++の転職での評価は当サイトのC++エンジニアの転職ガイドでご説明しています。",
  },
  {
    q: "C言語は今も使われていますか？",
    a: "使われています。Linuxカーネルの公式ドキュメントは、カーネルがC言語で書かれ、通常はGCCで -std=gnu11 を指定してコンパイルされると説明しています。Stack Overflow Developer Survey 2025では、過去1年にC言語で開発した人は全回答者の22％、プロの開発者の19.1％でした。",
  },
  {
    q: "C言語の規格書は無料で読めますか？",
    a: "正式な規格書はISOから購入する形で、WG14は各国の標準化団体に問い合わせるよう案内しています。一方、WG14の公式サイトでは、各版に近い草案（C23に近いものはN3220）が公開されています。",
  },
];

const stdRows = [
  { name: "C89", doc: "ANSI X3.159-1989", note: "米国規格。ANSI X3J11委員会が1983年から作業" },
  { name: "C90", doc: "ISO/IEC 9899:1990", note: "C89を国際規格として採用" },
  { name: "C95", doc: "ISO/IEC 9899:1990/Amd 1:1995", note: "追補" },
  { name: "C99", doc: "ISO/IEC 9899:1999", note: "草案 N1256" },
  { name: "C11", doc: "ISO/IEC 9899:2011", note: "草案 N1570" },
  { name: "C17", doc: "ISO/IEC 9899:2018", note: "草案 N2310" },
  { name: "C23", doc: "ISO/IEC 9899:2024", note: "現行規格。草案 N3220" },
  { name: "C2y", doc: "未発行", note: "作業中。草案 N3998（2026年10月25日）" },
];

export default function CLanguagePage() {
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
          { name: "C言語とは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          C言語とは｜成り立ち・規格の版（C89〜C23）・コンパイラの既定・利用率を一次情報で解説
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】C言語とは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>C言語は、1970年代初めにUnixを実装するための言語としてベル研究所で生まれたプログラミング言語です。現在の国際規格はC23（ISO/IEC 9899:2024）です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・OSや組込み機器など、ハードウェアに近いソフトウェアの開発で使われています（LinuxカーネルもC言語）</li>
              <li>・GCC 15から、C言語をコンパイルするときの既定の版がC17系からC23系に変わりました</li>
              <li>・Stack Overflow Developer Survey 2025の利用率は全回答者の22％です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、開発者のDennis Ritchie氏の論文、規格を担当するISO/IEC JTC1/SC22/WG14の公式サイト、GCCの公式の変更履歴、Linuxカーネルの公式ドキュメント、Stack Overflow Developer Survey 2025をもとに、C言語を整理します。コンパイラの既定の版とサンプルコードは、当サイトの検証用のMacで確かめたものです。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["Dennis M. Ritchie「The Development of the C Language」", "ISO/IEC JTC1/SC22/WG14 公式サイト", "GCC「GCC 15 Release Series Changes」", "The Linux Kernel documentation「Programming Language」", "Stack Overflow「2025 Developer Survey」Technology"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">C言語の成り立ちと特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Ritchie氏の論文（1993年の第2回プログラミング言語の歴史会議で発表）によると、C言語は型のない言語BCPLとその後継のBから発展し、型の仕組みを備えるようになりました。論文に書かれた主な出来事を年表にしました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時期</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出来事</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">1969〜1973年</td><td className="border border-slate-200 px-3 py-2">Unixの初期の開発と並行してC言語が生まれる。最も創造的な時期は1972年</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">1973年夏</td><td className="border border-slate-200 px-3 py-2">PDP-11用のUnixカーネルをC言語で書き直す</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">1978年</td><td className="border border-slate-200 px-3 py-2">Kernighan氏とRitchie氏が『The C Programming Language』（通称K&amp;R）を出版。正式な規格ができるまで言語の参照資料になる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">1983年</td><td className="border border-slate-200 px-3 py-2">ANSIがX3J11委員会を設置し、規格づくりを開始</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">1989年末</td><td className="border border-slate-200 px-3 py-2">X3J11が規格（ANSI X3.159-1989）をまとめ、のちにISO/IEC 9899-1990として採用される</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Dennis M. Ritchie「The Development of the C Language」（Bell Labs/Lucent Technologies、著者による電子版）。日本語の要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            OSを書くために作られた経緯から、C言語はメモリやハードウェアを直接扱える点が特徴です。その分、メモリの管理はプログラマーに任されており、誤るとセキュリティ上の問題につながることがあります。
          </p>
        </section>

        <section id="standards" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">規格の版（C89〜C23・C2y）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            WG14の公式サイト「Project status and milestones」に掲載された版の一覧です。草案は、正式な規格書に内容が近い公開文書です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">通称</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">規格番号</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {stdRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.doc}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ISO/IEC JTC1/SC22/WG14「Project status and milestones」（2026年11月9日更新版）・トップページ。C89・X3J11の経緯はRitchie氏の論文による。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            WG14は規格の改訂のほか、関数の末尾呼び出しとconstexpr関数、スコープを抜けるときの後始末を行う「defer」の仕組みなどについて技術仕様（TS）の作業を進めています。
          </p>
        </section>

        <section id="compiler" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コンパイラの既定の版（当サイトで確認）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            コンパイラは、オプションで版を指定しないときに使う「既定の版」を持っています。GCCの公式の変更履歴によると、GCC 15では既定が -std=gnu17 から -std=gnu23 に変わりました。当サイトでは、検証用のMacに入っているApple clang 17.0.0で、規格の版を表す定数 <code>__STDC_VERSION__</code> の値を出力して確かめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">コンパイラ・指定</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">__STDC_VERSION__</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">意味</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">根拠</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">GCC 15（指定なし）</td><td className="border border-slate-200 px-3 py-2">202311L</td><td className="border border-slate-200 px-3 py-2">C23（GNU拡張つき）</td><td className="border border-slate-200 px-3 py-2">GCC公式の変更履歴</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Apple clang 17.0.0（指定なし）</td><td className="border border-slate-200 px-3 py-2">201710</td><td className="border border-slate-200 px-3 py-2">C17</td><td className="border border-slate-200 px-3 py-2">当サイトで実行</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Apple clang 17.0.0（-std=c23）</td><td className="border border-slate-200 px-3 py-2">202311</td><td className="border border-slate-200 px-3 py-2">C23</td><td className="border border-slate-200 px-3 py-2">当サイトで実行</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Linuxカーネル</td><td className="border border-slate-200 px-3 py-2">—</td><td className="border border-slate-200 px-3 py-2">通常 -std=gnu11 でコンパイル</td><td className="border border-slate-200 px-3 py-2">カーネル公式ドキュメント</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GCC「GCC 15 Release Series Changes」、The Linux Kernel documentation「Programming Language」。Apple clangの値は当サイトの検証環境（2026年11月26日）での出力です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じソースコードでも、コンパイラやバージョンによって既定の版が違うため、使える機能や警告の出方が変わることがあります。GCCの変更履歴も、古い版を前提にしたコードは -std= を指定するよう案内しています。求人票で「C言語の経験」と書かれている場合は、扱う規格の版やコンパイラを面接で確認すると、仕事の内容をつかみやすくなります。
          </p>
        </section>

        <section id="sample" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サンプルコード（当サイトで実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            配列に入れた3つの点数の合計と平均を出す例です。Apple clang 17.0.0で警告をすべて表示する -Wall を付けてコンパイルし、警告なしで実行できることを確かめました。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`#include <stdio.h>

int main(void) {
    int scores[] = {72, 85, 90};
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += scores[i];
    }
    printf("合計: %d, 平均: %.1f\\n", sum, sum / 3.0);
    return 0;
}`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-2">実行結果：</p>
          <pre className="bg-slate-100 text-slate-800 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`合計: 247, 平均: 82.3`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4">
            <code>sum / 3.0</code> のように一方を小数にしているのは、整数どうしの割り算では小数点以下が切り捨てられるためです（<code>sum / 3</code> は82になります）。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の利用率（Stack Overflow調査）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">回答者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">C言語の利用率</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">全回答者（n=31,771）</td><td className="border border-slate-200 px-3 py-2 text-right">22％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">プロの開発者（n=24,759）</td><td className="border border-slate-200 px-3 py-2 text-right">19.1％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">プログラミングを学習中の人</td><td className="border border-slate-200 px-3 py-2 text-right">48％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（過去1年に開発で使った言語・複数回答）。世界の開発者を対象とした調査で、日本の求人数とは一致しません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            学習中の人の利用率（48％）は、プロの開発者（19.1％）の2倍以上です（当サイト算出）。C言語は、仕事で使う言語であると同時に、プログラミングやコンピュータの仕組みを学ぶ言語としても広く使われていることが分かります。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            C言語の経験が特に求められるのは、組込み・制御系のソフトウェア開発です。厚生労働省編職業分類でも、機械器具に組み込まれたマイクロコントローラのソフトウェアを作る仕事は「ソフトウェア開発技術者（組込・制御系）」として独立しています。職務経歴書には、対象の機器、マイコンやOSの種類、使った規格の版やコンパイラを書くと経験の中身が伝わりやすくなります。組込みの転職は<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込みエンジニアの転職ガイド</Link>、C++は<Link href="/skill/cpp/" className="text-blue-600 hover:underline">C++エンジニアの転職ガイド</Link>でご説明しています。
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
            <li>Dennis M. Ritchie「The Development of the C Language」：https://www.bell-labs.com/usr/dmr/www/chist.html</li>
            <li>ISO/IEC JTC1/SC22/WG14 公式サイト：https://www.open-std.org/jtc1/sc22/wg14/</li>
            <li>WG14「Project status and milestones」：https://www.open-std.org/jtc1/sc22/wg14/www/projects</li>
            <li>GCC「GCC 15 Release Series Changes, New Features, and Fixes」：https://gcc.gnu.org/gcc-15/changes.html</li>
            <li>The Linux Kernel documentation「Programming Language」：https://docs.kernel.org/process/programming-language.html</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "組込みエンジニアの転職ガイド", href: "/skill/embedded/" },
              { name: "C++エンジニアの転職ガイド", href: "/skill/cpp/" },
              { name: "Perlとは", href: "/knowledge/perl/" },
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
