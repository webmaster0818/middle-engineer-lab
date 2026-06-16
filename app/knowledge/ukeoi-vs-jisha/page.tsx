import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "受託開発と自社開発の違い【どちらを選ぶか】";
const DESCRIPTION =
  "受託開発と自社開発の違いを、仕事の進め方・スキルの伸び方・年収・働き方の観点で中立に比較。どちらが優れているかではなく、自分に合うのはどちらかを判断するための軸を、30代・40代向けに実践的にまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：優劣ではなく相性で選ぶ" },
  { id: "definition", label: "受託開発・自社開発とは" },
  { id: "compare", label: "観点別の比較" },
  { id: "ukeoi", label: "受託開発のメリット・デメリット" },
  { id: "jisha", label: "自社開発のメリット・デメリット" },
  { id: "choose", label: "自分に合うのはどちらか" },
  { id: "midlife", label: "30代・40代での選び方" },
  { id: "faq", label: "よくある質問" },
];

const compareRows = [
  { axis: "仕事の対象", ukeoi: "クライアントの課題・要件に応える", jisha: "自社のプロダクト・事業を育てる" },
  { axis: "案件の多様性", ukeoi: "多様な業界・技術に触れやすい", jisha: "同一プロダクトを深く掘り下げる" },
  { axis: "スキルの伸び方", ukeoi: "幅広い経験・対応力が身につく", jisha: "特定領域・運用改善の深い知見が育つ" },
  { axis: "納期・進め方", ukeoi: "納期と要件が外部都合で決まりやすい", jisha: "ロードマップを自社で調整しやすい" },
  { axis: "プロダクト関与", ukeoi: "納品で関与が区切られることが多い", jisha: "企画から運用まで長く関与できる" },
  { axis: "年収傾向", ukeoi: "企業・契約形態で幅が大きい", jisha: "事業の成長性に左右されやすい" },
];

const ukeoiPros = [
  "多様な業界・技術スタックに触れられ、経験の幅が広がる",
  "要件定義から納品までの一連の流れを数多く経験できる",
  "顧客折衝・要件整理など、技術以外の力も鍛えられる",
  "案件ごとに区切りがあり、達成感を得やすい",
];
const ukeoiCons = [
  "納期・要件が外部都合に左右され、裁量が小さい場面がある",
  "納品で関与が終わり、運用やグロースに関わりにくいことがある",
  "多重下請け構造の下流では、上流工程の経験を積みにくい場合がある",
  "技術選定の自由度が案件に依存する",
];

const jishaPros = [
  "一つのプロダクトを企画から運用まで長く担当できる",
  "ユーザーの反応を見ながら継続的に改善する経験を積める",
  "技術選定やロードマップに関与しやすく、裁量が大きい場合がある",
  "事業の成長が自分の評価・報酬に反映されやすい",
];
const jishaCons = [
  "同一プロダクト中心で、触れる技術の幅が狭まることがある",
  "事業の成否が労働環境や報酬に直結しやすい",
  "『自社開発』を掲げていても実態は受託に近い企業もある",
  "プロダクトの方向性が合わないと、長く向き合うのが苦痛になり得る",
];

const faqs = [
  {
    q: "受託開発と自社開発はどちらがスキルアップに有利ですか？",
    a: "どちらが有利とは一概に言えず、伸びるスキルの方向が異なります。受託は多様な案件で幅広い対応力が身につきやすく、自社開発は同じプロダクトを深く掘り下げる中で運用改善やグロースの知見が育ちやすい傾向です。自分が幅を広げたいのか、特定領域を深めたいのかで選ぶのが現実的です。",
  },
  {
    q: "自社開発のほうが年収は高いですか？",
    a: "一概には言えません。年収は事業の成長性や企業規模、契約形態に大きく左右され、受託でも高年収の企業はありますし、自社開発でも事業が伸び悩めば報酬は伸びません。『自社開発だから高い』という思い込みで選ぶより、個別企業の待遇を確認することが大切です。",
  },
  {
    q: "自社開発は働き方が自由というのは本当ですか？",
    a: "企業によります。自社でロードマップを調整できる分、納期の融通が利きやすい面はありますが、事業フェーズによっては激務になることもあります。一方、受託でも働き方が整備された企業は多くあります。働き方は『受託か自社か』より、個別企業の制度や文化で判断すべきです。",
  },
  {
    q: "受託開発はキャリアにとって不利ですか？",
    a: "不利ではありません。受託で培う要件定義・顧客折衝・多様な技術経験は、どのキャリアでも通用する力です。下流工程に偏ると上流経験を積みにくいという課題はありますが、それは企業や立ち位置の問題です。受託で幅広い経験を積んでから自社開発へ移る人も多くいます。",
  },
  {
    q: "「自社開発」と求人に書いてあれば安心ですか？",
    a: "そうとは限りません。自社開発を掲げていても、実態は他社案件の受託に近い企業もあります。求人票の言葉だけで判断せず、自社プロダクトの有無、開発体制、技術選定の裁量などを面接で具体的に確認しましょう。エージェントに実態を聞くのも有効です。",
  },
  {
    q: "どちらを選ぶか決められないときはどうすればいいですか？",
    a: "まず自分が何を重視するか（幅か深さか、裁量か安定か、技術かプロダクトか）を言語化しましょう。そのうえで、受託・自社それぞれの企業を実際に見て、働き方や任される範囲を比較すると判断しやすくなります。形態のラベルより、個別企業の実態を見ることが失敗を防ぎます。",
  },
  {
    q: "30代・40代はどちらを選ぶべきですか？",
    a: "年齢で一律に決まるものではなく、これまでの経験とこの先のキャリア方針次第です。幅広い経験を活かして上流やマネジメントを目指すなら受託の延長も、特定プロダクトを深く担いたいなら自社開発も選択肢です。重要なのは、これまでの強みが活き、長く貢献できる環境かどうかを見極めることです。",
  },
];

export default function UkeoiVsJishaPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/ukeoi-vs-jisha/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "受託開発と自社開発の違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          受託開発と自社開発の違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | どちらが上ではなく、自分に合うのはどちらか
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアの転職先を考えるとき、「受託開発と自社開発、どちらがいいのか」と悩む人は多いはずです。ネットでは自社開発を持ち上げる声も目立ちますが、実際にはどちらが優れているという話ではなく、伸びるスキルや働き方の方向が違うだけです。本記事では、両者の違いを仕事の進め方・スキル・年収・働き方の観点で中立に比較し、自分に合うのはどちらかを見極める判断軸を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の動向資料（2025年）",
            "各IT転職エージェント公表の求人区分情報（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：優劣ではなく相性で選ぶ</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              結論として、<strong>受託開発と自社開発に絶対的な優劣はありません</strong>。受託は「幅広い経験と対応力」、自社開発は「特定プロダクトを深く育てる経験」が得やすいという、方向の違いがあるだけです。どちらが自分の志向と強みに合うかで選びましょう。
            </p>
            <p className="text-slate-700 leading-relaxed">
              注意したいのは、「自社開発＝優れている」という単純な図式に流されないことです。年収も働き方も、形態のラベルより個別企業の実態で決まります。求人票の言葉ではなく、任される範囲・開発体制・技術裁量・待遇を一社ずつ確認することが、後悔しない選択につながります。
            </p>
          </div>
        </section>

        {/* 定義 */}
        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受託開発・自社開発とは</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">受託開発</h3>
              <p className="text-sm text-slate-600 leading-relaxed">クライアントから依頼を受け、その要件に沿ってシステムやサービスを開発する形態です。多様な業界・技術に触れられ、要件定義から納品までの流れを数多く経験できます。納期や要件は外部都合で決まりやすい特徴があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">自社開発</h3>
              <p className="text-sm text-slate-600 leading-relaxed">自社のプロダクトやサービスを企画・開発・運用する形態です。一つのプロダクトに長く関わり、ユーザーの反応を見ながら継続的に改善できます。ロードマップを自社で調整しやすい一方、事業の成否が環境や報酬に直結しやすい面があります。</p>
            </div>
          </div>
        </section>

        {/* 比較表 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">観点別の比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            主要な観点で両者を並べると、違いが見えやすくなります。あくまで一般的な傾向であり、個別企業によって例外は多くあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="text-left px-4 py-3 font-bold border-b border-slate-200">観点</th>
                  <th className="text-left px-4 py-3 font-bold border-b border-slate-200">受託開発</th>
                  <th className="text-left px-4 py-3 font-bold border-b border-slate-200">自社開発</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-slate-700 align-top">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600 align-top">{row.ukeoi}</td>
                    <td className="px-4 py-3 text-slate-600 align-top">{row.jisha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 受託 メリデメ */}
        <section id="ukeoi" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受託開発のメリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="space-y-2">
                {ukeoiPros.map((p, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-green-700">
                    <span className="shrink-0">○</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {ukeoiCons.map((c, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-amber-700">
                    <span className="shrink-0">△</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 自社 メリデメ */}
        <section id="jisha" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自社開発のメリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="space-y-2">
                {jishaPros.map((p, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-green-700">
                    <span className="shrink-0">○</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {jishaCons.map((c, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-amber-700">
                    <span className="shrink-0">△</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 選び方 */}
        <section id="choose" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自分に合うのはどちらか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            次の問いに答えると、自分の志向がどちらに近いか見えてきます。どちらが正解ということはありません。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "幅を広げたいか、深さを掘りたいか", desc: "多様な技術・業界に触れたいなら受託寄り、一つのプロダクトを深く育てたいなら自社開発寄りです。" },
              { num: "2", title: "技術とプロダクトのどちらに惹かれるか", desc: "課題解決や技術そのものが好きなら受託も合い、プロダクトの成長に当事者として関わりたいなら自社開発が合います。" },
              { num: "3", title: "安定と変動のどちらを許容できるか", desc: "事業の成否に報酬が連動するのを許容できるなら自社開発、案件単位で区切られる働き方が合うなら受託です。" },
              { num: "4", title: "この先のキャリアでどう活かすか", desc: "上流・マネジメントを目指すか、特定領域のスペシャリストを目指すかで、得やすい経験の方向が変わります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            企業規模やフェーズの観点では
            <Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップと大手の違い</Link>
            、SESから抜ける視点は
            <Link href="/industry/ses-exit/" className="text-petrol hover:underline">SESからの転職</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代での選び方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：これまでの経験を起点に方向を決める</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は得意領域が固まりつつある年代です。受託で幅を広げてきたなら、その対応力を活かして上流やマネジメントへ進む道も、自社開発で特定領域を深める道もあります。ラベルで選ぶより、これまでの強みが活きる環境かで判断しましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：長く貢献できる実態かを見極める</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は、形態よりも「自分の経験が活き、腰を据えて貢献できるか」が重要です。自社開発を掲げていても実態が異なる企業もあるため、開発体制や任される範囲、事業の安定性を面接で具体的に確認し、ミスマッチを避けましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">企業の実態はプロに確認しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、求人票では分からない開発体制や任される範囲の実態まで教えてくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スタートアップと大手の違い", href: "/knowledge/startup-vs-enterprise/" },
              { name: "SESからの転職", href: "/industry/ses-exit/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "キャリアプランの立て方", href: "/knowledge/career-plan/" },
              { name: "転職の後悔を防ぐ方法", href: "/knowledge/regret/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
