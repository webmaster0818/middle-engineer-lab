import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "TypeScriptとJavaScriptの違い｜型・実行のしかた・最新版7.0・Node.jsの対応を公式情報で比較【2026年】";
const DESCRIPTION =
  "TypeScriptはJavaScriptに型の構文を加えた上位互換の言語で、実行前に型を検査し、型を消してJavaScriptとして動かします。公式ドキュメントにもとづく違い、5.6〜7.1のリリース履歴、Node.jsの型除去の対応、利用率を整理します。";
const URL = "/knowledge/typescript-javascript/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "TypeScriptとJavaScriptの違い（比較表）" },
  { id: "releases", label: "TypeScriptのリリース履歴（5.6〜7.1）" },
  { id: "node", label: "Node.jsでTypeScriptをそのまま動かせるか" },
  { id: "usage", label: "開発者の利用率と評価（Stack Overflow調査）" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "TypeScriptとJavaScriptの一番大きな違いは何ですか？",
    a: "型を実行前に検査するかどうかです。TypeScriptの公式ドキュメントは、TypeScriptを「実行前に値の種類にもとづいてプログラムの誤りを検査する静的型チェッカー」と説明しています。型の検査が終わるとコンパイラは型を消してJavaScriptを出力するため、実行時の動作はJavaScriptと同じです。",
  },
  {
    q: "JavaScriptのコードはそのままTypeScriptとして使えますか？",
    a: "構文としては使えます。公式ドキュメントは「TypeScriptはJavaScriptのスーパーセットであり、JSの構文はそのままTSとして有効」としています。ただし、TypeScriptの型検査で誤りとして指摘される箇所が出ることはあります。",
  },
  {
    q: "TypeScriptの最新版はいくつですか？",
    a: "2026年11月25日時点の最新の安定版はTypeScript 7.0（2026年7月8日発表）で、7.1はベータ版です。7.0はGo言語で書き直したネイティブ版で、公式ブログはフルビルドが通常8〜12倍速くなるとしています。7.0にはプログラムから使うAPIが含まれないため、Vue・MDX・Astro・Svelteなどを使うプロジェクトは当面6.0を使う必要があると説明されています。",
  },
  {
    q: "Node.jsはTypeScriptのファイルを直接実行できますか？",
    a: "型の構文を取り除く方式で実行できます。Node.jsのドキュメントによると、この「型除去（type stripping）」はv23.6.0とv22.18.0から既定で有効になり、v25.2.0とv24.12.0で安定版になりました。ただし型の検査は行わず、enumや.tsxなど変換が必要な構文には対応していません。",
  },
  {
    q: "JavaScriptに型の構文が入る予定はありますか？",
    a: "TC39（JavaScriptの仕様を策定する委員会）に、実行時に無視される型の構文を加える提案（Type Annotations）がありますが、2026年11月25日時点でStage 1（検討段階）です。提案のREADMEには、文書が定期的に更新されていない旨の注記があります。",
  },
];

const releaseRows = [
  { v: "5.6", date: "2024年9月9日", note: "—" },
  { v: "5.7", date: "2024年11月22日", note: "—" },
  { v: "5.8", date: "2025年2月28日", note: "—" },
  { v: "5.9", date: "2025年8月1日", note: "—" },
  { v: "6.0", date: "2026年3月23日", note: "JavaScriptで書かれた従来の実装による最後のリリース。5.9と7.0の橋渡し" },
  { v: "7.0", date: "2026年7月8日", note: "Go言語によるネイティブ版。フルビルドは通常8〜12倍速い（公式）" },
  { v: "7.1（ベータ）", date: "2026年10月20日", note: "ベータ版" },
];

const nodeRows = [
  { item: "型除去の追加", value: "v22.6.0" },
  { item: "既定で有効", value: "v23.6.0・v22.18.0" },
  { item: "安定版（Stable）", value: "v25.2.0・v24.12.0" },
  { item: "型の検査", value: "行わない（型の構文を空白に置き換えるだけ）" },
  { item: "tsconfig.json", value: "読まない（paths などの設定は効かない）" },
  { item: "使えない構文", value: "enum宣言、実行時コードを含むnamespace、parameter properties など変換が必要なもの" },
  { item: ".tsx ファイル", value: "非対応" },
  { item: "import の書き方", value: "拡張子が必要（例：import './file.ts'）" },
];

export default function TypescriptJavascriptPage() {
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
          { name: "TypeScriptとJavaScriptの違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          TypeScriptとJavaScriptの違い｜型・実行のしかた・最新版7.0・Node.jsの対応を公式情報で比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】TypeScriptとJavaScriptの違い</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>TypeScriptは、JavaScriptに型の構文を加えた上位互換（スーパーセット）の言語です。実行前に型の誤りを検査し、検査が終わると型を消してJavaScriptとして動かします。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・公式サイトは「TypeScript is JavaScript with syntax for types.（型の構文を備えたJavaScript）」と定義しています</li>
              <li>・2026年11月25日時点の最新の安定版は7.0（2026年7月発表・Go言語によるネイティブ版）です</li>
              <li>・Stack Overflow Developer Survey 2025では、プロの開発者の48.8％がTypeScript、68.8％がJavaScriptを使っていました</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、TypeScriptの公式サイトとハンドブック、Microsoftの公式ブログ、Node.jsのドキュメント、ECMA-262、Stack Overflow Developer Survey 2025をもとに、二つの言語の違いを整理します。求人票で「TypeScript必須」と書かれている理由を理解するときや、学ぶ順番を考えるときの判断材料としてお使いください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["TypeScript公式サイト・ハンドブック", "Microsoft「TypeScript」公式ブログ（devblogs）", "Node.js「Modules: TypeScript」", "Ecma International「ECMA-262」", "Stack Overflow「2025 Developer Survey」Technology"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptとJavaScriptの違い（比較表）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">TypeScript</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">JavaScript</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">位置づけ</td><td className="border border-slate-200 px-3 py-2">JavaScriptのスーパーセット。JSの構文はそのままTSとして有効（公式ハンドブック）</td><td className="border border-slate-200 px-3 py-2">ECMA-262で定められた言語（最新は第17版・ECMAScript 2026、2026年6月）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">型の検査</td><td className="border border-slate-200 px-3 py-2">実行前に検査する静的型チェッカー</td><td className="border border-slate-200 px-3 py-2">型の誤りは実行して初めて分かる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">実行のしかた</td><td className="border border-slate-200 px-3 py-2">型を消してJavaScriptに変換してから実行。実行時の動作はJavaScriptと同じ</td><td className="border border-slate-200 px-3 py-2">ブラウザ・Node.js・Deno・Bunなどでそのまま実行</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">仕様・開発元</td><td className="border border-slate-200 px-3 py-2">Microsoftが開発（GitHub上で公開）</td><td className="border border-slate-200 px-3 py-2">Ecma InternationalのTC39が策定</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ライセンス</td><td className="border border-slate-200 px-3 py-2">Apache License 2.0</td><td className="border border-slate-200 px-3 py-2">仕様（ECMA-262）は無償で公開</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">版の出し方</td><td className="border border-slate-200 px-3 py-2">おおむね年に数回のマイナー版（下表）</td><td className="border border-slate-200 px-3 py-2">毎年6月に新しい版</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：TypeScript公式サイト、TypeScriptハンドブック「TypeScript for the New Programmer」、microsoft/TypeScript リポジトリのLICENSE、Ecma International「ECMA-262」。表の整理と日本語訳は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            公式ハンドブックは、コンパイル後のJavaScriptには型の情報が残らないと説明しています。つまり、TypeScriptの型は開発中の誤りを減らすための仕組みで、実行速度や実行時の動作を変えるものではありません。JavaScriptとJavaの違いは<Link href="/knowledge/java-javascript/" className="text-blue-600 hover:underline">JavaとJavaScriptの違い</Link>をご覧ください。
          </p>
        </section>

        <section id="releases" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptのリリース履歴（5.6〜7.1）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Microsoftの公式ブログの発表記事の公開日（UTC）をもとに、当サイトが一覧にしました。Microsoftは2025年3月11日に、TypeScriptのコンパイラをGo言語で書き直す計画（コードネーム「Corsa」）を発表しており、その成果が7.0です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式ブログでの発表日</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {releaseRows.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">TypeScript {r.v}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.date}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Microsoft「Announcing TypeScript 5.6」〜「Announcing TypeScript 7.1 Beta」、「A 10x Faster TypeScript」（いずれもdevblogs.microsoft.com/typescript）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            7.0の発表記事では、VS Codeのソースコードのビルドが6.0の125.7秒から7.0では10.6秒（11.9倍）になった実測例が示されています。一方で、7.0にはプログラムから使うAPIが含まれず、Vue・MDX・Astro・Svelteなどを使うプロジェクトは当面6.0を使う必要があるとされています。求人票や現場では6.0と7.0が併存する時期が続くとみられるため、使っているフレームワークとの組み合わせを確認するのが実務的です。
          </p>
        </section>

        <section id="node" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Node.jsでTypeScriptをそのまま動かせるか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Node.jsは、TypeScriptの型の構文を空白に置き換えて実行する「型除去（type stripping）」に対応しています。Node.jsのドキュメント（v26系）の変更履歴と制限事項を整理しました。
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
                {nodeRows.map((r) => (
                  <tr key={r.item}>
                    <td className="border border-slate-200 px-3 py-2">{r.item}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Node.js「Modules: TypeScript」（nodejs.org/api/typescript.html）。日本語の要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Node.jsが型を検査しないため、型の誤りを見つけるにはTypeScriptのコンパイラ（tsc）などによる検査が別に必要です。Node.jsでの開発経験を活かした転職は<Link href="/skill/nodejs/" className="text-blue-600 hover:underline">Node.jsエンジニアの転職ガイド</Link>でご説明しています。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の利用率と評価（Stack Overflow調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Survey 2025の「プログラミング・スクリプト・マークアップ言語」の結果です。「使い続けたい（Admired）」は過去1年に使った人のうち今後も使いたい人の割合、「使いたい（Desired）」は今後使いたい人の割合です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">利用率（全回答者 n=31,771）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">利用率（プロ n=24,759）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Admired</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Desired</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">JavaScript</td><td className="border border-slate-200 px-3 py-2 text-right">66.0％</td><td className="border border-slate-200 px-3 py-2 text-right">68.8％</td><td className="border border-slate-200 px-3 py-2 text-right">46.8％</td><td className="border border-slate-200 px-3 py-2 text-right">33.5％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">TypeScript</td><td className="border border-slate-200 px-3 py-2 text-right">43.6％</td><td className="border border-slate-200 px-3 py-2 text-right">48.8％</td><td className="border border-slate-200 px-3 py-2 text-right">58％</td><td className="border border-slate-200 px-3 py-2 text-right">31.9％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology。複数回答。世界の開発者を対象とした調査で、日本の求人数とは一致しません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            TypeScriptの利用率は、全回答者（43.6％）よりプロの開発者（48.8％）で5.2ポイント高く、JavaScriptの差（2.8ポイント）より大きくなっています（差は当サイト算出）。また、使った人が使い続けたいと答える割合（Admired）はTypeScriptのほうが約11ポイント高い結果でした。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            TypeScriptはJavaScriptの上位互換のため、TypeScriptの経験はJavaScriptの経験を含むものとして読まれます。職務経歴書には、言語名に加えて、TypeScriptのバージョン、型の設定（strictの有無など）、使ったフレームワーク（React・Next.js・NestJSなど）を書くと、経験の深さが伝わりやすくなります。年収や求人の探し方は<Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScriptエンジニアの転職ガイド</Link>、職種の違いは<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link>でご説明しています。
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
            <li>TypeScript公式サイト：https://www.typescriptlang.org/</li>
            <li>TypeScript Handbook「TypeScript for the New Programmer」：https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html</li>
            <li>Microsoft「A 10x Faster TypeScript」（2025年3月11日）：https://devblogs.microsoft.com/typescript/typescript-native-port/</li>
            <li>Microsoft「Announcing TypeScript 6.0」：https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/</li>
            <li>Microsoft「Announcing TypeScript 7.0」：https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/</li>
            <li>Microsoft「Announcing TypeScript 7.1 Beta」：https://devblogs.microsoft.com/typescript/announcing-typescript-7-1-beta/</li>
            <li>microsoft/TypeScript LICENSE：https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt</li>
            <li>Node.js「Modules: TypeScript」：https://nodejs.org/api/typescript.html</li>
            <li>TC39「proposal-type-annotations」：https://github.com/tc39/proposal-type-annotations</li>
            <li>Ecma International「ECMA-262」：https://ecma-international.org/publications-and-standards/standards/ecma-262/</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "JavaとJavaScriptの違い", href: "/knowledge/java-javascript/" },
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
              { name: "Node.jsエンジニアの転職ガイド", href: "/skill/nodejs/" },
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
