import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "JavaとJavaScriptの違い｜仕様・型・実行環境・サポート期限・利用率を一次情報で比較【2026年】";
const DESCRIPTION =
  "JavaとJavaScriptは名前が似ていますが、構文・意味・用途が大きく異なる別の言語です。言語仕様にもとづく型と実行の違い、Java SEのLTSとサポート期限、ECMAScriptの版の履歴、Stack Overflow調査2025の利用率を一次情報で比較します。";
const URL = "/knowledge/java-javascript/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "JavaとJavaScriptの違い（比較表）" },
  { id: "java", label: "Javaのバージョンとサポート期限" },
  { id: "javascript", label: "JavaScript（ECMAScript）の版の履歴" },
  { id: "usage", label: "開発者の利用率（Stack Overflow調査）" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "JavaとJavaScriptは関係がありますか？",
    a: "名前は似ていますが、別の言語です。MDN（Mozilla）は「JavaScriptをJavaと混同しないでください。JavaScriptは『インタープリタ型のJava』ではありません」とし、両者は構文・意味・用途が大きく異なると説明しています。なお、JavaとJavaScriptはいずれも米国などにおけるOracleの商標または登録商標です。",
  },
  {
    q: "JavaとJavaScriptの一番大きな違いは何ですか？",
    a: "型の扱いと実行のしかたです。Javaの言語仕様は「強く静的に型付けされた言語」とし、通常はコンパイル時に機械に依存しないバイトコードへ変換して実行します。JavaScriptはMDNで「軽量なインタープリタ型（またはJITコンパイル型）」「動的な言語」と説明され、主にWebブラウザやNode.jsなどの環境で動きます。",
  },
  {
    q: "Javaの今の最新版はどれですか？",
    a: "Oracleのサポートロードマップによると、2026年11月25日時点ではJava SE 25（2025年9月リリース）が最新のLTS（長期サポート版）で、Premier Supportは2030年9月までです。Java SE 26（2026年3月）と27（2026年9月）は非LTSで、次のLTSは2027年9月予定のJava SE 29です。",
  },
  {
    q: "JavaScriptの最新の仕様は何ですか？",
    a: "Ecma Internationalが公開しているECMA-262の第17版（ECMAScript 2026）です。ECMA-262は第6版（2015年6月）以降、毎年6月に新しい版が公開されています。",
  },
  {
    q: "転職に有利なのはJavaとJavaScriptのどちらですか？",
    a: "どちらが有利かは、目指す職種で決まります。業務システムや大規模なバックエンドを担うならJava、Webのフロントエンドを担うならJavaScript（TypeScript）が中心になります。年収や求人の見方は、それぞれ「Javaエンジニアの転職ガイド」「TypeScriptエンジニアの転職ガイド」「フロントエンドエンジニア転職ガイド」でご説明しています。",
  },
];

const javaRows = [
  { v: "Java SE 8（LTS）", ga: "2014年3月", premier: "2022年3月", extended: "2030年12月" },
  { v: "Java SE 11（LTS）", ga: "2018年9月", premier: "2023年9月", extended: "2032年1月" },
  { v: "Java SE 17（LTS）", ga: "2021年9月", premier: "2026年9月", extended: "2029年9月" },
  { v: "Java SE 21（LTS）", ga: "2023年9月", premier: "2028年9月", extended: "2031年9月" },
  { v: "Java SE 25（LTS）", ga: "2025年9月", premier: "2030年9月", extended: "2033年9月" },
  { v: "Java SE 26（非LTS）", ga: "2026年3月", premier: "2026年9月", extended: "なし" },
  { v: "Java SE 27（非LTS・予定）", ga: "2026年9月", premier: "2027年3月", extended: "なし" },
  { v: "Java SE 29（LTS・予定）", ga: "2027年9月", premier: "2032年9月", extended: "2035年9月" },
];

const usageRows = [
  { lang: "JavaScript", all: "66.0％", pro: "68.8％" },
  { lang: "TypeScript", all: "43.6％", pro: "48.8％" },
  { lang: "Java", all: "29.4％", pro: "29.6％" },
];

export default function JavaJavascriptPage() {
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
          { name: "JavaとJavaScriptの違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          JavaとJavaScriptの違い｜仕様・型・実行環境・サポート期限・利用率を一次情報で比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】JavaとJavaScriptの違い</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>JavaとJavaScriptは名前が似ているだけの別の言語です。Javaは強く静的に型付けされ、バイトコードにコンパイルして動かす汎用言語、JavaScriptは主にWebブラウザやNode.jsで動く動的な言語です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・MDNは「JavaScriptは『インタープリタ型のJava』ではない」と明記しています</li>
              <li>・仕様は、JavaがOracleのJava言語仕様（JLS）、JavaScriptがEcma InternationalのECMA-262（最新は第17版・ECMAScript 2026）です</li>
              <li>・Stack Overflow Developer Survey 2025では、過去1年に使った言語としてJavaScriptが全回答者の66.0％、Javaが29.4％でした</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Javaの言語仕様（JLS）、JavaScriptの仕様（ECMA-262）とMDNの解説、Oracleのサポートロードマップ、Stack Overflow Developer Survey 2025をもとに、二つの言語の違いを比較します。転職で求人票を読むときや、学ぶ言語を選ぶときの判断材料としてお使いください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["Oracle「The Java Language Specification, Java SE 25 Edition」第1章", "Oracle「Oracle Java SE Support Roadmap」", "Ecma International「ECMA-262」", "MDN「JavaScript」", "Stack Overflow「2025 Developer Survey」Technology"]}
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

        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JavaとJavaScriptの違い（比較表）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Java</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">JavaScript</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">仕様</td><td className="border border-slate-200 px-3 py-2">Java言語仕様（JLS）。Java SE 25版が公開されています</td><td className="border border-slate-200 px-3 py-2">ECMA-262（ECMAScript）。Ecma InternationalのTC39が策定し、最新は第17版（ECMAScript 2026）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">型</td><td className="border border-slate-200 px-3 py-2">強く静的に型付けされた言語（JLS）</td><td className="border border-slate-200 px-3 py-2">動的な言語（MDN）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">実行のしかた</td><td className="border border-slate-200 px-3 py-2">通常はコンパイル時に機械に依存しないバイトコードへ変換し、実行時にクラスを読み込んで実行（JLS）</td><td className="border border-slate-200 px-3 py-2">軽量なインタープリタ型、またはJITコンパイル型（MDN）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">言語の特徴</td><td className="border border-slate-200 px-3 py-2">汎用・並行・クラスベース・オブジェクト指向（JLS）</td><td className="border border-slate-200 px-3 py-2">プロトタイプベース・ガベージコレクション・第一級関数。命令型・関数型・オブジェクト指向に対応（MDN）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">主な実行環境</td><td className="border border-slate-200 px-3 py-2">Java仮想マシン（JVM）</td><td className="border border-slate-200 px-3 py-2">Webブラウザ。Node.jsなどブラウザ以外の環境でも使われます（MDN）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">版の出し方</td><td className="border border-slate-200 px-3 py-2">3月と9月の年2回。LTSは2年ごと（Oracleロードマップ）</td><td className="border border-slate-200 px-3 py-2">毎年6月に新しい版（第6版・2015年以降）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Oracle「The Java Language Specification, Java SE 25 Edition」第1章、MDN「JavaScript」、Ecma International「ECMA-262」、Oracle「Oracle Java SE Support Roadmap」。表の整理と日本語訳は当サイトによるものです。</p>
        </section>

        <section id="java" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaのバージョンとサポート期限</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            OracleのサポートロードマップからLTS（長期サポート版）と、最近の非LTS版を抜き出しました。業務システムでは、LTS版を長く使い続けることが多いため、求人票に書かれたバージョンを見ると、その現場のシステムの新しさの目安になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">リリース（GA）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Premier Support終了</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Extended Support終了</th>
                </tr>
              </thead>
              <tbody>
                {javaRows.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">{r.v}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.ga}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.premier}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.extended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Oracle「Oracle Java SE Support Roadmap」。Oracle製品としてのサポート期限で、OpenJDKの他ディストリビューションの期限とは異なります。予定の日付は変更される場合があります。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Java SE 17のPremier Supportは2026年9月に終了しています（Extended Supportは2029年9月まで）。Javaエンジニアとしての年収や求人の動向は<Link href="/skill/java/" className="text-blue-600 hover:underline">Javaエンジニアの転職ガイド</Link>、Oracle認定資格は<Link href="/cert/oracle-java-silver/" className="text-blue-600 hover:underline">Oracle Java Silver</Link>をご覧ください。
          </p>
        </section>

        <section id="javascript" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JavaScript（ECMAScript）の版の履歴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            JavaScriptの言語仕様は、Ecma InternationalのECMA-262として公開されています。Ecmaのページによると、最新は第17版（ECMAScript 2026）で、第6版（2015年6月）からは毎年6月に新しい版が出ています。なお、第4版は番号が予約されたものの発行されていません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">版</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公開</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">通称</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">第1版</td><td className="border border-slate-200 px-3 py-2">1997年6月</td><td className="border border-slate-200 px-3 py-2">—</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第5.1版</td><td className="border border-slate-200 px-3 py-2">2011年6月</td><td className="border border-slate-200 px-3 py-2">ES5.1</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第6版</td><td className="border border-slate-200 px-3 py-2">2015年6月</td><td className="border border-slate-200 px-3 py-2">ES2015（ES6）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第7版〜第16版</td><td className="border border-slate-200 px-3 py-2">2016年6月〜2025年6月（毎年）</td><td className="border border-slate-200 px-3 py-2">ES2016〜ES2025</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第17版（最新）</td><td className="border border-slate-200 px-3 py-2">2026年</td><td className="border border-slate-200 px-3 py-2">ECMAScript 2026</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Ecma International「ECMA-262」（版の一覧）。通称の「ES2015」などは、各版が定める「ECMAScript 2015」などの略称です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            求人票では、JavaScriptに静的な型を加えたTypeScriptが条件に書かれていることもあります。フロントエンドの転職は<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link>、TypeScriptは<Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScriptエンジニアの転職ガイド</Link>でご説明しています。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の利用率（Stack Overflow調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Survey 2025の「過去1年に本格的な開発で使った言語」の回答割合です。世界の開発者を対象とした調査で、日本の求人数とは一致しません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全回答者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">プロの開発者</th>
                </tr>
              </thead>
              <tbody>
                {usageRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.all}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（Programming, scripting, and markup languages）。複数回答のため合計は100％になりません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            JavaScriptはJavaの約2.2倍の回答者が使っていますが、Javaも全回答者の約3割が使っており、どちらも広く使われている言語です（倍率は当サイト算出）。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            主な用途は、Javaがバックエンドや業務システムの開発（Spring Frameworkなど）、JavaScriptがWebのフロントエンド（React・Vue.jsなど）やNode.jsによるサーバーサイドの開発です。職務経歴書には、言語名だけでなく、バージョン、フレームワーク、担当した工程を書くと、どの程度の経験かが伝わりやすくなります。書き方は<Link href="/knowledge/skill-sheet/" className="text-blue-600 hover:underline">スキルシートの書き方</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Oracle「The Java Language Specification, Java SE 25 Edition」Chapter 1：https://docs.oracle.com/javase/specs/jls/se25/html/jls-1.html</li>
            <li>Oracle「Oracle Java SE Support Roadmap」：https://www.oracle.com/java/technologies/java-se-support-roadmap.html</li>
            <li>Ecma International「ECMA-262」：https://ecma-international.org/publications-and-standards/standards/ecma-262/</li>
            <li>MDN「JavaScript」：https://developer.mozilla.org/en-US/docs/Web/JavaScript</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Javaエンジニアの転職ガイド", href: "/skill/java/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "Swiftとは", href: "/knowledge/swift/" },
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
