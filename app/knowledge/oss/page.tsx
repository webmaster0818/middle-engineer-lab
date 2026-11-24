import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "OSSとは｜オープンソースの定義10項目と、OSIのライセンス一覧126件の分類【2026年】";
const DESCRIPTION =
  "OSS（オープンソースソフトウェア）とは、ソースコードが公開され、利用・改変・再配布が認められたソフトウェアです。Open Source Initiative（OSI）の「オープンソースの定義」10項目と、OSIのライセンス一覧（126件）を当サイトで分類した結果、代表的なライセンスを一次情報で整理します。";
const URL = "/knowledge/oss/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "OSSの定義" },
  { id: "osd", label: "オープンソースの定義（OSD）10項目" },
  { id: "licenses", label: "OSIのライセンス一覧の分類（当サイト集計）" },
  { id: "popular", label: "広く使われている主なライセンス" },
  { id: "career", label: "転職・キャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const osd = [
  { name: "自由な再頒布", desc: "複数のソフトウェアをまとめて販売・配布する際に、その一部として販売・無償配布することを制限せず、使用料を求めない" },
  { name: "ソースコード", desc: "ソースコードを含み、コンパイル済みの形と同様にソースコードでの配布を認める。意図的に難読化したコードは認めない" },
  { name: "派生物", desc: "改変と派生物の作成を認め、元のソフトウェアと同じ条件で配布することを認める" },
  { name: "作者のソースコードの完全性", desc: "ビルド時に適用するパッチファイルの配布を認める場合に限り、改変したソースコードの配布を制限できる" },
  { name: "個人・団体に対する差別の禁止", desc: "特定の個人や団体を差別しない" },
  { name: "利用分野に対する差別の禁止", desc: "商用利用や遺伝子研究など、特定の分野での利用を制限しない" },
  { name: "ライセンスの分配", desc: "再頒布を受けた人が、追加のライセンス契約を結ばなくても同じ権利を持つ" },
  { name: "特定製品に限定しない", desc: "特定のソフトウェア配布物の一部であることを権利の条件にしない" },
  { name: "他のソフトウェアを制限しない", desc: "一緒に配布される他のソフトウェアもオープンソースであることを求めるなどの制限をしない" },
  { name: "技術的な中立", desc: "特定の技術やインターフェースの形式を前提とした条項を設けない" },
];

const categories = [
  { key: "non-reusable", ja: "特定の組織向けで再利用を想定しないもの", n: 25 },
  { key: "superseded", ja: "新しい版に置き換えられたもの", n: 20 },
  { key: "special-purpose", ja: "特定の用途向けのもの", n: 15 },
  { key: "uncategorized", ja: "分類なし", n: 14 },
  { key: "redundant-with-more-popular", ja: "より普及したライセンスと内容が重複するもの", n: 12 },
  { key: "popular-strong-community", ja: "広く使われ、強いコミュニティを持つもの", n: 12 },
  { key: "other-miscellaneous", ja: "その他", n: 11 },
  { key: "international", ja: "特定の国・言語向けのもの", n: 7 },
  { key: "voluntarily-retired", ja: "作成者が自主的に廃止したもの", n: 5 },
  { key: "legacy", ja: "過去に承認された旧来のもの", n: 4 },
];

const faqs = [
  {
    q: "OSSとは簡単に言うと何ですか？",
    a: "ソースコードが公開され、誰でも利用・改変・再配布できるソフトウェアです。OSI（Open Source Initiative）は、ソースコードを見られるだけではオープンソースとはいえず、配布条件が「オープンソースの定義（OSD）」の10項目を満たす必要があるとしています。",
  },
  {
    q: "OSSは商用で使ってもよいのですか？",
    a: "OSDの6番目の項目「利用分野に対する差別の禁止」により、オープンソースのライセンスは商用利用など特定の分野での利用を制限できません。ただし、著作権表示の保持や、改変したソースコードの公開など、ライセンスごとに守るべき条件があります。利用前に各ライセンスの条文をご確認ください。",
  },
  {
    q: "OSIが承認したライセンスはいくつありますか？",
    a: "OSIが公開しているライセンス一覧のAPI（2026年11月24日取得）には126件が登録されていました。このうち、OSIが「広く使われ、強いコミュニティを持つ」と分類しているものは12件です。新しい版に置き換えられたものや、自主的に廃止されたものも含む件数です。",
  },
  {
    q: "フリーソフトとOSSの違いは何ですか？",
    a: "無料で使えるソフトウェアでも、ソースコードが公開されていない場合や、改変・再配布が認められていない場合はOSDを満たしません。反対に、OSDは販売を禁止していないため、有償で提供されるOSSもあります。「無料かどうか」ではなく、配布条件で判断する点が異なります。",
  },
  {
    q: "OSSへの貢献は転職で評価されますか？",
    a: "公開されたコードやレビューのやり取りは、応募先が技術力を確認する材料になり得ます。貢献の始め方は当サイトの「OSS貢献の始め方」で、プルリクエスト以外も含めて整理しています。",
  },
];

export default function OssPage() {
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
          { name: "OSSとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          OSSとは｜オープンソースの定義10項目と、OSIのライセンス一覧126件の分類
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式情報の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】OSSとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>OSS（オープンソースソフトウェア）とは、ソースコードが公開され、利用・改変・再配布が認められたソフトウェアです。OSIの「オープンソースの定義」10項目を満たすライセンスで配布されます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・OSIは「ソースコードにアクセスできるだけではオープンソースとはいえない」としています</li>
              <li>・OSIのライセンス一覧には126件が登録され、うち12件が「広く使われ、強いコミュニティを持つ」に分類されています（当サイト集計）</li>
              <li>・商用利用は制限できませんが、著作権表示の保持など、ライセンスごとの条件があります</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、OSIが公開している「The Open Source Definition（オープンソースの定義）」をもとにOSSの条件を整理し、OSIのライセンス一覧（API）を当サイトで取得・集計した結果をあわせて掲載します。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["Open Source Initiative「The Open Source Definition」", "Open Source Initiative ライセンス一覧API（https://opensource.org/api/licenses）"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">OSSの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            OSSは「Open Source Software」の略です。オープンソースの定義を管理する非営利団体のOSI（Open Source Initiative）は、「オープンソースとは、ソースコードにアクセスできることだけを意味するのではない」とし、オープンソースソフトウェアの配布条件は次の10項目の基準を満たさなければならないと定めています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            この定義（The Open Source Definition）の現行版は1.9（最終更新2007年3月22日）で、もともとはDebianの「フリーソフトウェアガイドライン（DFSG）」から作られたと説明されています。
          </p>
        </section>

        <section id="osd" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オープンソースの定義（OSD）10項目</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">No.</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容の要旨</th>
                </tr>
              </thead>
              <tbody>
                {osd.map((o, i) => (
                  <tr key={o.name}>
                    <td className="border border-slate-200 px-3 py-2">{i + 1}</td>
                    <td className="border border-slate-200 px-3 py-2">{o.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{o.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Open Source Initiative「The Open Source Definition」（Version 1.9）を当サイトで要約・翻訳。正確な内容は原文をご確認ください。</p>
        </section>

        <section id="licenses" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">OSIのライセンス一覧の分類（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            OSIは、定義を満たすと判断したライセンスを一覧で公開しています。2026年11月24日にOSIのライセンス一覧API（https://opensource.org/api/licenses）から取得したところ、126件が登録されていました。各ライセンスにOSIが付けている分類キーワードを、当サイトで件数順に集計しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">OSIの分類キーワード</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">意味（当サイト訳）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">件数</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.key}>
                    <td className="border border-slate-200 px-3 py-2">{c.key}</td>
                    <td className="border border-slate-200 px-3 py-2">{c.ja}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{c.n}件</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Open Source Initiative ライセンス一覧API（2026年11月24日取得・当サイト集計）。分類キーワードは123件に1つずつ、1件に2つ付いており、2件（CMU License・ICU License）には付いていないため、表の件数の合計（125件）は登録数と一致しません。
          </p>
        </section>

        <section id="popular" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広く使われている主なライセンス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            OSIが「広く使われ、強いコミュニティを持つ（popular-strong-community）」に分類している12件は次のとおりです。
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 mb-4">
            {[
              "The MIT License（MIT）",
              "Apache License, Version 2.0（Apache-2.0）",
              "The 2-Clause BSD License（BSD-2-Clause）",
              "The 3-Clause BSD License（BSD-3-Clause）",
              "GNU General Public License version 2（GPL-2.0）",
              "GNU General Public License version 3（GPL-3.0）",
              "GNU Library General Public License version 2",
              "GNU Lesser General Public License version 2.1（LGPL-2.1）",
              "GNU Lesser General Public License version 3（LGPL-3.0）",
              "Mozilla Public License 2.0（MPL-2.0）",
              "Eclipse Public License version 2.0（EPL-2.0）",
              "Common Development and Distribution License 1.0",
            ].map((l) => (
              <li key={l} className="border border-slate-200 rounded px-3 py-2">{l}</li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed">
            なお、ライセンスの条件はそれぞれ異なります。たとえばGPLのように、派生物を配布する際に同じライセンスでソースコードを公開することを求めるものもあれば、MITライセンスのように著作権表示と許諾表示の保持を主な条件とするものもあります。業務で使う場合は、各ライセンスの条文と社内の利用ルールをご確認ください。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            多くの開発現場ではOSSのライブラリやフレームワークを組み合わせてシステムを作るため、ライセンスの基本を理解しておくことは実務でも役立ちます。OSSへの貢献を通じて技術力を示す方法は<Link href="/knowledge/oss-contribution/" className="text-blue-600 hover:underline">OSS貢献の始め方</Link>、GitHubでの見せ方は<Link href="/knowledge/github-showcase/" className="text-blue-600 hover:underline">GitHubの見せ方</Link>でご説明しています。
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
            <li>Open Source Initiative「The Open Source Definition」：https://opensource.org/osd</li>
            <li>Open Source Initiative「Licenses」：https://opensource.org/licenses</li>
            <li>Open Source Initiative ライセンス一覧API：https://opensource.org/api/licenses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "OSS貢献の始め方", href: "/knowledge/oss-contribution/" },
              { name: "GitHubの見せ方", href: "/knowledge/github-showcase/" },
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
