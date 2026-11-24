import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "アジャイル開発とは｜アジャイル宣言の4つの価値・スクラムの役割とタイムボックス・契約の考え方【2026年】";
const DESCRIPTION =
  "アジャイル開発とは、動くソフトウェアを短い間隔で繰り返し提供し、変化に対応しながら開発を進める手法の総称です。アジャイルソフトウェア開発宣言の4つの価値と12の原則、スクラムガイド2020の役割・イベントの時間枠、IPAのモデル契約（準委任が前提）を一次情報で整理します。";
const URL = "/knowledge/agile/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "アジャイル開発の定義" },
  { id: "values", label: "アジャイル宣言の4つの価値" },
  { id: "principles", label: "12の原則" },
  { id: "scrum", label: "スクラムの役割とタイムボックス" },
  { id: "waterfall", label: "ウォーターフォール開発との違いと契約" },
  { id: "career", label: "転職・キャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const principles = [
  "顧客満足を最優先し、価値のあるソフトウェアを早く継続的に提供します。",
  "要求の変更はたとえ開発の後期であっても歓迎します。変化を味方につけることによって、お客様の競争力を引き上げます。",
  "動くソフトウェアを、2-3週間から2-3ヶ月というできるだけ短い時間間隔でリリースします。",
  "ビジネス側の人と開発者は、プロジェクトを通して日々一緒に働かなければなりません。",
  "意欲に満ちた人々を集めてプロジェクトを構成します。環境と支援を与え仕事が無事終わるまで彼らを信頼します。",
  "情報を伝えるもっとも効率的で効果的な方法はフェイス・トゥ・フェイスで話をすることです。",
  "動くソフトウェアこそが進捗の最も重要な尺度です。",
  "アジャイル・プロセスは持続可能な開発を促進します。一定のペースを継続的に維持できるようにしなければなりません。",
  "技術的卓越性と優れた設計に対する不断の注意が機敏さを高めます。",
  "シンプルさ（ムダなく作れる量を最大限にすること）が本質です。",
  "最良のアーキテクチャ・要求・設計は、自己組織的なチームから生み出されます。",
  "チームがもっと効率を高めることができるかを定期的に振り返り、それに基づいて自分たちのやり方を最適に調整します。",
];

const faqs = [
  {
    q: "アジャイル開発とは簡単に言うと何ですか？",
    a: "動くソフトウェアを短い間隔で繰り返しリリースし、顧客の反応や要求の変化を取り入れながら開発を進める手法の総称です。2001年に公開された「アジャイルソフトウェア開発宣言」の4つの価値と12の原則が、考え方の土台になっています。",
  },
  {
    q: "アジャイルとスクラムの違いは何ですか？",
    a: "アジャイルは価値観や原則を指す総称で、スクラムはそれを実践するための具体的なフレームワークの一つです。スクラムガイド（2020年版）では、スクラムマスター1人・プロダクトオーナー1人・複数人の開発者からなる通常10人以下のチームが、1か月以内の決まった長さのスプリントを繰り返すと定められています。",
  },
  {
    q: "アジャイル開発では計画やドキュメントを作らないのですか？",
    a: "作らないわけではありません。アジャイル宣言は「左記のことがら（プロセスやツール、包括的なドキュメント、契約交渉、計画に従うこと）に価値があることを認めながらも、右記のことがらにより価値をおく」としています。計画やドキュメントの価値を否定するものではなく、優先順位を示したものです。",
  },
  {
    q: "アジャイル開発を外部に委託する場合、どのような契約になりますか？",
    a: "IPAが公開している「情報システム・モデル取引・契約書（アジャイル開発版）」は、成果物の完成に対価を払う請負契約ではなく、ベンダ企業が専門家として業務を遂行すること自体に対価を払う準委任契約を前提としています。なお、この版はアジャイル開発の手法としてスクラムを採用しています。",
  },
  {
    q: "アジャイル開発の経験は転職で評価されますか？",
    a: "求人票に「アジャイル（スクラム）での開発経験」を歓迎条件として記載する企業はあります。評価のされ方は企業ごとに異なるため、スプリントの長さ、担当した役割（開発者・スクラムマスターなど）、振り返りで改善した内容などを具体的に説明できるよう整理しておくことをおすすめします。",
  },
];

export default function AgilePage() {
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
          { name: "アジャイル開発とは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          アジャイル開発とは｜アジャイル宣言の4つの価値・スクラムの役割とタイムボックス・契約の考え方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】アジャイル開発とは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>アジャイル開発とは、動くソフトウェアを短い間隔で繰り返し提供し、要求の変化に対応しながら開発を進める手法の総称です。2001年の「アジャイルソフトウェア開発宣言」が考え方の土台になっています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・宣言は「個人と対話」「動くソフトウェア」「顧客との協調」「変化への対応」の4つの価値を掲げています</li>
              <li>・代表的な手法のスクラムでは、1か月以内のスプリントを繰り返し、チームは通常10人以下とされています</li>
              <li>・IPAのアジャイル開発版モデル契約は、請負ではなく準委任契約を前提としています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、アジャイルソフトウェア開発宣言（日本語版）、スクラムの公式ガイドである「スクラムガイド」2020年版、IPAの「情報システム・モデル取引・契約書（アジャイル開発版）」をもとに、アジャイル開発の考え方と進め方を整理します。スクラムのイベントの時間枠は、当サイトで1つの表にまとめました。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["アジャイルソフトウェア開発宣言（日本語版）", "Ken Schwaber・Jeff Sutherland「スクラムガイド（2020年11月）」日本語版", "IPA「情報システム・モデル取引・契約書（アジャイル開発版）」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">アジャイル開発の定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「アジャイル（agile）」は「俊敏な」という意味の英語です。アジャイル開発は特定の一つの手法を指す言葉ではなく、2001年にKent Beck氏、Martin Fowler氏、Ken Schwaber氏、Jeff Sutherland氏ら17名が公開した「アジャイルソフトウェア開発宣言」の価値と原則に沿った開発手法の総称として使われています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            IPAは、アジャイル開発版モデル契約の公開ページで、アジャイル開発を「技術的実現性やビジネス成否が不確実な状況でも迅速に開発を行い、運用時の技術評価結果や顧客の反応に基づいて素早く改善を繰り返す」仮説検証型の開発と位置づけ、DXの推進に有効であると説明しています。
          </p>
        </section>

        <section id="values" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アジャイル宣言の4つの価値</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">より価値をおくもの（右記）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">価値を認めたうえで優先度を下げるもの（左記）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">個人と対話</td><td className="border border-slate-200 px-3 py-2">プロセスやツール</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">動くソフトウェア</td><td className="border border-slate-200 px-3 py-2">包括的なドキュメント</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">顧客との協調</td><td className="border border-slate-200 px-3 py-2">契約交渉</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">変化への対応</td><td className="border border-slate-200 px-3 py-2">計画に従うこと</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：アジャイルソフトウェア開発宣言（日本語訳：平鍋健児氏）。宣言の表記は「〇〇よりも△△を、価値とする」の形です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            宣言は「左記のことがらに価値があることを認めながらも、私たちは右記のことがらにより価値をおく」と結ばれています。ドキュメントや計画を不要とするものではない点に注意が必要です。
          </p>
        </section>

        <section id="principles" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">12の原則</h2>
          <p className="text-slate-600 leading-relaxed mb-4">宣言の背後にある原則として、次の12項目が公開されています（日本語版より引用）。</p>
          <ol className="list-decimal pl-6 text-sm text-slate-700 leading-7 space-y-1">
            {principles.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：「アジャイル宣言の背後にある原則」日本語版（agilemanifesto.org）。</p>
        </section>

        <section id="scrum" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スクラムの役割とタイムボックス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            スクラムはアジャイル開発の代表的なフレームワークです。スクラムガイド（2020年版）では、スクラムチームはスクラムマスター1人、プロダクトオーナー1人、複数人の開発者で構成され、通常は10人以下とされています。プロダクトオーナーは委員会ではなく1人の人間であり、スプリントを中止する権限もプロダクトオーナーだけが持ちます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">イベント</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">時間枠（スプリントが1か月の場合）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">スプリント</td><td className="border border-slate-200 px-3 py-2">1か月以内の決まった長さ</td><td className="border border-slate-200 px-3 py-2">他のすべてのイベントを含む開発の単位。前のスプリントが終わるとすぐに次が始まる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">スプリントプランニング</td><td className="border border-slate-200 px-3 py-2">最大8時間</td><td className="border border-slate-200 px-3 py-2">スプリントで行う作業を計画する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">デイリースクラム</td><td className="border border-slate-200 px-3 py-2">15分（毎日）</td><td className="border border-slate-200 px-3 py-2">開発者がスプリントゴールに向けた進捗を検査し、計画を調整する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">スプリントレビュー</td><td className="border border-slate-200 px-3 py-2">最大4時間</td><td className="border border-slate-200 px-3 py-2">成果を関係者と確認し、今後の方向性を話し合う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">スプリントレトロスペクティブ</td><td className="border border-slate-200 px-3 py-2">最大3時間</td><td className="border border-slate-200 px-3 py-2">チームのやり方を振り返り、改善策を決める。これでスプリントが終了する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：スクラムガイド（2020年11月）日本語版の記載を当サイトで表に整理。スプリントが短い場合、各イベントの時間も短くすることが多いとされています。</p>
        </section>

        <section id="waterfall" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウォーターフォール開発との違いと契約</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAのアジャイル開発版モデル契約の説明では、ウォーターフォール開発は「開発対象全体の要件や仕様を確定してから開発を行う」手法であるのに対し、アジャイル開発はプロセスの中で機能の追加・変更や優先順位の変更、先行リリース部分の改善などに柔軟に対応できる手法とされています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">ウォーターフォール開発</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">アジャイル開発</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">要件・仕様</td><td className="border border-slate-200 px-3 py-2">開発前に全体を確定する</td><td className="border border-slate-200 px-3 py-2">開発の途中で追加・変更・優先順位の見直しができる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">外部委託の契約（IPAモデル契約）</td><td className="border border-slate-200 px-3 py-2">（アジャイル開発版の対象外）</td><td className="border border-slate-200 px-3 py-2">準委任契約が前提</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">発注者の関わり方</td><td className="border border-slate-200 px-3 py-2">（IPAの説明では比較の記載なし）</td><td className="border border-slate-200 px-3 py-2">プロダクトの方向性と内容を決めるため、主体的・積極的な関与が必要</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「情報システム・モデル取引・契約書（アジャイル開発版）」公開ページ（2026年11月24日確認）の説明を当サイトで整理。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            IPAは、アジャイル開発で偽装請負を指摘されるリスクについて、厚生労働省が「37号告示に関する疑義応答集（第3集）」を公開していることも紹介しています。受託企業でアジャイル案件に参加する場合は、契約形態と指揮命令の関係も確認しておくとよいでしょう。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            SIerでウォーターフォール開発を中心に経験してきた方が、Web系・自社開発企業へ移る際には、アジャイル開発の進め方への理解を問われることがあります。キャリアの選択肢は<Link href="/industry/sier-to-web/" className="text-blue-600 hover:underline">SIerからWeb系に転職するには</Link>、プロジェクト管理の役割は<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link>でご説明しています。
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
            <li>アジャイルソフトウェア開発宣言（日本語版）：https://agilemanifesto.org/iso/ja/manifesto.html</li>
            <li>アジャイル宣言の背後にある原則（日本語版）：https://agilemanifesto.org/iso/ja/principles.html</li>
            <li>スクラムガイド（2020年11月）日本語版：https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf</li>
            <li>IPA「情報システム・モデル取引・契約書（アジャイル開発版）」：https://www.ipa.go.jp/digital/model/agile20200331.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "PMOとは", href: "/knowledge/pmo/" },
              { name: "SIerとは", href: "/knowledge/sier/" },
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
