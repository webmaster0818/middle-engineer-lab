import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Pythonとは｜公式の定義・特徴・バージョンごとのサポート期限一覧【2026年】";
const DESCRIPTION =
  "Python（パイソン）とは、インタープリタ型・オブジェクト指向の高水準プログラミング言語です。python.org の公式説明にもとづく特徴、PSFライセンス、3.11〜3.15の初回リリース日とサポート終了予定の一覧を一次情報で整理します。";
const URL = "/knowledge/python/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Pythonの定義（公式の説明）" },
  { id: "feature", label: "Pythonの主な特徴" },
  { id: "version", label: "バージョンごとのサポート期限" },
  { id: "license", label: "ライセンスと運営団体" },
  { id: "career", label: "転職・キャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const versions = [
  { v: "3.15", status: "バグ修正（bugfix）", first: "2026-10-09", eol: "2031-10" },
  { v: "3.14", status: "バグ修正（bugfix）", first: "2025-10-07", eol: "2030-10" },
  { v: "3.13", status: "セキュリティ修正のみ（security）", first: "2024-10-07", eol: "2029-10" },
  { v: "3.12", status: "セキュリティ修正のみ（security）", first: "2023-10-02", eol: "2028-10" },
  { v: "3.11", status: "セキュリティ修正のみ（security）", first: "2022-10-24", eol: "2027-10" },
  { v: "3.10", status: "サポート終了（end-of-life）", first: "2021-10-04", eol: "2026-10-01" },
  { v: "3.9", status: "サポート終了（end-of-life）", first: "2020-10-05", eol: "2025-10-31" },
];

const faqs = [
  {
    q: "Pythonとは簡単に言うと何ですか？",
    a: "Pythonは、インタープリタ型・対話型・オブジェクト指向のプログラミング言語です。python.org の公式FAQでは、モジュール・例外・動的型付け・高水準の動的データ型・クラスを備え、オブジェクト指向に加えて手続き型や関数型のプログラミングにも対応すると説明されています。",
  },
  {
    q: "Pythonは無料で使えますか？",
    a: "はい。python.org の説明では、Pythonのインタープリタと標準ライブラリは主要なプラットフォーム向けにソース・バイナリの形で無償で提供され、自由に再配布できます。著作権表示を残すなどPSFライセンスの条件を守れば、商用利用や、Pythonを組み込んだ製品の販売も可能とされています。",
  },
  {
    q: "今から使うならどのバージョンを選べばよいですか？",
    a: "Python開発者ガイドの「Status of Python versions」（2026年11月24日確認）では、3.14と3.15がバグ修正の段階、3.11〜3.13がセキュリティ修正のみの段階で、3.10は2026年10月1日にサポートが終了しています。新しく始める場合や業務で長く使う場合は、サポート終了までの期間が長いバージョンを選ぶのが一般的です。利用するライブラリやクラウドサービスの対応状況もあわせてご確認ください。",
  },
  {
    q: "Pythonの利用者は何人くらいいますか？",
    a: "公式FAQでは「おそらく数百万人」としつつ、無償で配布され多くの経路で入手できるため正確な人数を数えるのは難しいと説明されています。当サイトでも利用者数を示す公的な統計は確認できていません。",
  },
  {
    q: "Pythonエンジニアの年収や転職市場はどうなっていますか？",
    a: "年収や求人の傾向は、当サイトの「Pythonエンジニアの転職ガイド」で出典を明記して整理しています。本記事では言語そのものの定義と公式情報を扱います。",
  },
];

export default function PythonPage() {
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
          { name: "Pythonとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Pythonとは｜公式の定義・特徴・バージョンごとのサポート期限一覧
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式情報の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Pythonとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Python（パイソン）とは、インタープリタ型・オブジェクト指向の高水準プログラミング言語です。読みやすい文法と豊富な標準ライブラリを特徴とし、無償で利用・再配布できます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・運営団体は非営利法人のPython Software Foundation（PSF）で、PSFライセンスのもと商用利用も可能です</li>
              <li>・2026年11月24日時点でサポート中のバージョンは3.11〜3.15の5つです（Python開発者ガイド）</li>
              <li>・3.10は2026年10月1日にサポートが終了しました。3.11のサポート終了予定は2027年10月です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、python.org の公式説明をもとにPythonの定義と特徴を整理し、Python開発者ガイドに掲載されているバージョンごとの初回リリース日とサポート終了予定を一覧にまとめます。求人票でPythonの経験を求められたときに、どのバージョンを前提にしているかを確認する際の参考にしてください。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["python.org「What is Python? Executive Summary」", "Python Documentation「General Python FAQ」", "Python Developer's Guide「Status of Python versions」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonの定義（公式の説明）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            python.org の「What is Python? Executive Summary」では、Pythonを「動的なセマンティクスを持つ、インタープリタ型・オブジェクト指向の高水準プログラミング言語」と説明しています。組み込みの高水準データ構造と動的型付け・動的バインディングにより、短期間でのアプリケーション開発や、既存の部品をつなぐスクリプト言語（グルー言語）としての利用に向いているとされています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            公式ドキュメントの「General Python FAQ」でも、Pythonはインタープリタ型・対話型・オブジェクト指向の言語であり、オブジェクト指向に加えて手続き型・関数型のプログラミングにも対応すると説明されています。また、Linux・macOSを含む多くのUnix系OSとWindowsで動作し、C・C++で拡張できる点も挙げられています。
          </p>
        </section>

        <section id="feature" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonの主な特徴</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">特徴</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式の説明の要旨</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">読みやすい文法</td><td className="border border-slate-200 px-3 py-2">文法が簡潔で学びやすく、読みやすさを重視しているため、プログラムの保守にかかるコストを下げられる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">コンパイル不要</td><td className="border border-slate-200 px-3 py-2">コンパイルの手順がないため、編集・テスト・デバッグの繰り返しが速い</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">モジュールとパッケージ</td><td className="border border-slate-200 px-3 py-2">モジュール・パッケージの仕組みにより、プログラムの部品化とコードの再利用がしやすい</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">例外による安全なエラー処理</td><td className="border border-slate-200 px-3 py-2">バグや不正な入力でセグメンテーション違反を起こさず、例外を発生させてスタックトレースを表示する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">無償・再配布可能</td><td className="border border-slate-200 px-3 py-2">インタープリタと標準ライブラリは主要なプラットフォーム向けに無償で提供され、自由に再配布できる</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：python.org「What is Python? Executive Summary」を当サイトで要約・翻訳。</p>
        </section>

        <section id="version" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">バージョンごとのサポート期限</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            下の表のとおり、Python 3.9以降は毎年10月前後に新しいバージョン（3.x）が公開されています。各バージョンには「バグ修正」「セキュリティ修正のみ」「サポート終了」の段階があります。Python開発者ガイドの掲載内容を、当サイトで直近7バージョン分の表にまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">状態（2026年11月24日時点）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">初回リリース</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">サポート終了（予定）</th>
                </tr>
              </thead>
              <tbody>
                {versions.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">Python {r.v}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.status}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.first}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.eol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Python Developer&apos;s Guide「Status of Python versions」（2026年11月24日確認）。サポート中のバージョンのサポート終了月は予定で、変更される場合があります。開発中の3.16は2027年10月6日に初回リリースの予定です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            表のとおり、各バージョンは初回リリースからおおむね5年でサポートが終了します。業務システムで古いバージョンが使われている場合、移行作業そのものが求人の業務内容になっていることもあります。応募先で使っているバージョンや移行の予定は、面接で確認しておくと入社後のギャップを減らせます。
          </p>
        </section>

        <section id="license" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ライセンスと運営団体</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pythonの著作権は、独立した非営利団体のPython Software Foundation（PSF）が保有しています（バージョン2.1以降）。公式FAQによると、著作権表示を残し、Pythonについて作成する文書にもその表示を載せれば、ソースコードを自由に扱うことができ、商用利用や、Pythonを組み込んだ製品の販売も可能です。なお、Pythonのロゴは商標登録されており、使い方によっては許可が必要です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            公式FAQには、作者のGuido van Rossum氏がCWI（オランダの研究機関）でABC言語の実装に携わった経験がPythonの多くの特徴の起源になったという経緯も記載されています。インデントで文のまとまりを表す書き方は、その一例とされています。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            Pythonは、Webアプリケーションのサーバー側、データ分析、機械学習、業務の自動化など幅広い用途で使われています。用途によって求められるライブラリや経験が大きく異なるため、求人票では「Pythonの経験」だけでなく、使っているフレームワークや担当する領域まで確認することが大切です。Pythonエンジニアの年収データや求人の探し方は<Link href="/skill/python/" className="text-blue-600 hover:underline">Pythonエンジニアの転職ガイド</Link>、言語別の年収比較は<Link href="/salary/skill-ranking/" className="text-blue-600 hover:underline">プログラマーの年収ランキング</Link>でご説明しています。
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
            <li>python.org「What is Python? Executive Summary」：https://www.python.org/doc/essays/blurb/</li>
            <li>Python Documentation「General Python FAQ」：https://docs.python.org/3/faq/general.html</li>
            <li>Python Developer&apos;s Guide「Status of Python versions」：https://devguide.python.org/versions/</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "プログラマーの年収ランキング", href: "/salary/skill-ranking/" },
              { name: "OSSとは", href: "/knowledge/oss/" },
              { name: "DXとは", href: "/knowledge/dx/" },
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
