import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職回数が多い場合の対策【エンジニア転職】";
const DESCRIPTION =
  "転職回数が多いエンジニアが選考で不利にならないための対策を、職務経歴書のまとめ方・退職理由の伝え方・面接での回答の型まで実践的に解説。30代・40代が一貫性と再現性を示すための準備をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：転職回数が多いときの基本方針" },
  { id: "what-matters", label: "企業が回数で見ている3点" },
  { id: "story", label: "一貫性を作る軸の整理" },
  { id: "reasons", label: "退職理由の伝え方" },
  { id: "resume", label: "職務経歴書でのまとめ方" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "midlife", label: "30代・40代で特に注意する点" },
  { id: "faq", label: "よくある質問" },
];

const whatMatters = [
  {
    title: "キャリアの一貫性",
    desc: "会社は変わっても、専門領域やスキルの方向性に一本の軸が通っているかが見られます。軸があれば回数の多さは説明可能です。",
  },
  {
    title: "退職理由の納得感",
    desc: "各転職の理由が前向きで筋が通っているか。ネガティブな理由の繰り返しは、再現性（また辞めるのでは）の懸念を生みます。",
  },
  {
    title: "定着・継続の見通し",
    desc: "今回は長く働く意思があるか。これまでと違って腰を据えられる理由を、具体的に説明できるかが評価の分かれ目です。",
  },
];

const reasons = [
  {
    scene: "スキルアップを軸にする",
    text: "「いずれの転職も、○○（領域）の専門性を高めるための選択でした。前職では△△を経験でき、次は□□に挑戦することでさらに専門性を深めたいと考えています。」",
  },
  {
    scene: "事業・組織都合だった",
    text: "「事業縮小（組織再編）により担当領域がなくなったため、専門性を活かせる環境を選びました。自分の意思だけでなく、環境変化が背景にあった点もご説明できます。」",
  },
  {
    scene: "前向きな挑戦だった",
    text: "「より裁量の大きい開発に関わりたいという思いから転職しました。結果として○○の経験を積めましたが、腰を据えて深めたい段階に来ていると感じています。」",
  },
  {
    scene: "短期離職があった",
    text: "「○○という事情で短期での退職となりましたが、その経験から環境選びの軸を見直しました。今回は事前に○○を確認し、長く貢献できると判断しています。」",
  },
];

const ngActions = [
  {
    title: "退職理由を毎回他責にする",
    desc: "「上司が」「会社が」と他責の理由が並ぶと、環境が変われば同じことを繰り返すと受け取られます。事実を述べつつ、自分の選択軸に焦点を当てます。",
  },
  {
    title: "回数を隠す・経歴を偽る",
    desc: "短期の在籍を省略したり期間を偽ったりすると、社会保険記録などとの矛盾で発覚します。正直に書いたうえで説明で補うのが正攻法です。",
  },
  {
    title: "一貫性のない説明をする",
    desc: "転職ごとに軸がバラバラだと、行き当たりばったりに見えます。後付けでも構わないので、複数の経験を貫く共通テーマを言語化しておきます。",
  },
  {
    title: "今回も同じ動機で語る",
    desc: "「今回もスキルアップのため」だけだと、また数年で辞める印象を与えます。今回は定着したい理由を、これまでとの違いとともに示しましょう。",
  },
];

const faqs = [
  {
    q: "転職回数は何回から多いと見なされますか？",
    a: "明確な基準はありませんが、20代で3回以上、30代以降で在籍年数が平均2年を下回るあたりから理由を問われやすくなります。ただし、回数そのものより「各転職に納得感があるか」「キャリアに一貫性があるか」が重視されます。回数が多くても説明の筋が通っていれば、過度に不利にはなりません。",
  },
  {
    q: "短期離職が複数あると致命的ですか？",
    a: "致命的とは限りませんが、定着性への懸念が強まるのは事実です。短期離職には事業都合・組織再編・健康など正当な理由がある場合も多く、それを誠実に説明し、今回は長く働ける理由を具体的に示せれば挽回できます。回数や期間を隠すのは逆効果です。",
  },
  {
    q: "職務経歴書で転職回数の多さを和らげる方法はありますか？",
    a: "時系列の羅列ではなく、冒頭にキャリアサマリーを置き、一貫した専門性や得意領域を先に示すのが有効です。各社の記載は「何を担当し、何を成したか」に絞り、在籍期間の短さに視線が集中しないよう構成します。在籍期間の偽りは厳禁です。",
  },
  {
    q: "退職理由が毎回違っても問題ありませんか？",
    a: "理由が異なること自体は問題ありません。重要なのは、それぞれが納得できる理由であり、全体として一本の軸（例: 特定領域の専門性追求）が通っていることです。バラバラに見える場合は、複数の経験を貫く共通テーマを後付けでも言語化しておきましょう。",
  },
  {
    q: "面接で「また辞めるのでは」と聞かれたらどう答えますか？",
    a: "懸念を否定するのではなく、これまでとの違いを具体的に示します。「過去は○○を軸に動いてきましたが、現在は□□の段階に来ており、御社の△△に腰を据えて取り組みたい」と、今回定着したい根拠を事実ベースで語ると説得力が出ます。",
  },
  {
    q: "30代・40代で転職回数が多いと厳しいですか？",
    a: "年齢が上がるほど、回数の多さに対する説明の納得感と定着の見通しが厳しく問われます。一方で、各社で積んだ経験の幅や専門性の深さが強みになる場合もあります。一貫した軸と即戦力性を示し、今回は長期就業する意思を明確に伝えることが重要です。",
  },
  {
    q: "転職回数が多いとエージェントに敬遠されますか？",
    a: "敬遠されるより、むしろ説明の仕方や回数に寛容な求人の紹介でサポートしてくれます。回数の背景を最初に共有しておくと、エージェントが企業に補足説明をしてくれることもあります。隠さず相談するのが得策です。",
  },
];

export default function JobChangeCountPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/job-change-count/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職回数が多い場合の対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職回数が多い場合の対策
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 一貫性と定着性を示すための準備
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職回数が多いと、「選考で不利になるのでは」と不安になる人は少なくありません。しかし企業が見ているのは回数の数字そのものではなく、「キャリアに一貫性があるか」「今回は長く働けるか」です。本記事では、企業が回数で見ているポイント、一貫性を作る軸の整理、退職理由の伝え方、職務経歴書でのまとめ方まで、回数の多さを不利にしないための対策を実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 雇用動向調査（2024年）",
            "各IT転職エージェント公表の選考実務情報（2025年）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職回数が多いときの基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              転職回数が多いときの基本は、<strong>「キャリアを貫く一本の軸を言語化し」「各退職理由を前向きに整理し」「今回は定着したい根拠を具体的に示す」</strong>こと。回数を隠すのではなく、ストーリーで納得感を作るのが鉄則です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              企業が懸念するのは「また同じ理由で辞めるのではないか」という再現性です。逆に言えば、これまでと今回の違いを具体的に説明でき、専門性に一貫性があれば、回数の多さは「経験の幅」というプラスにも転じます。数字に振り回されず、説明の準備で勝負しましょう。
            </p>
          </div>
        </section>

        {/* 企業が見る3点 */}
        <section id="what-matters" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が回数で見ている3点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            採用側は回数の数字だけで判断するわけではありません。次の3つの観点で「採用しても定着するか」を確認しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whatMatters.map((m, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 一貫性 */}
        <section id="story" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">一貫性を作る軸の整理</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            複数の転職を貫く「一本の軸」を見つけることが、回数対策の核心です。次のステップで自分の軸を言語化しましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "各社で何をしたかを書き出す", desc: "担当領域・使った技術・成した成果を会社ごとに棚卸しします。" },
              { num: "2", title: "共通するテーマを探す", desc: "「特定領域の専門性」「特定の課題解決」など、複数社にまたがる共通項を見つけます。" },
              { num: "3", title: "軸を一文で言語化する", desc: "「○○の専門性を一貫して高めてきた」と一文で言える状態にします。後付けでも構いません。" },
              { num: "4", title: "今回の応募と接続する", desc: "その軸が応募先でどう活き、なぜ定着したいのかをつなげて語れるようにします。" },
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
            軸の整理には
            <Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析の進め方</Link>
            と
            <Link href="/knowledge/career-plan/" className="text-petrol hover:underline">キャリアプランの立て方</Link>
            も役立ちます。
          </p>
        </section>

        {/* 退職理由 */}
        <section id="reasons" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職理由の伝え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            各転職の理由を前向きに整理した例文です。自分の状況に合わせて調整してください（○○は記入例）。
          </p>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{r.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 職務経歴書 */}
        <section id="resume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書でのまとめ方</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 冒頭にキャリアサマリーを置く</h3>
              <p className="text-sm text-slate-600">時系列の羅列の前に、一貫した専門性・得意領域を3〜5行でまとめ、軸を先に印象づけます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 各社は成果ベースで簡潔に</h3>
              <p className="text-sm text-slate-600">「何を担当し、何を成したか」に絞って記載し、在籍期間の短さに視線が集中しない構成にします。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 事業都合の退職は明記する</h3>
              <p className="text-sm text-slate-600">事業縮小・組織再編など自分の意思以外の退職は、その旨を一行添えると定着性の懸念を和らげられます。</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            書類全体の作り方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代で特に注意する点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：経験の幅を強みに変える</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は複数社の経験が「幅広い対応力」に転じる年代です。回数の多さを謝るのではなく、各社で得た技術・視点を一貫した軸でまとめ、即戦力としての引き出しの多さをアピールしましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：定着の見通しを具体的に示す</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は年齢が上がるほど、回数の多さに対する説明の納得感と長期就業の見通しが厳しく問われます。家庭やキャリアの状況が安定し、腰を据えて貢献したい理由を、これまでとの違いとともに事実ベースで伝えることが信頼につながります。
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
          <h2 className="text-xl font-bold mb-3">回数の見せ方はプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントは、職務経歴書のまとめ方や企業への補足説明で、回数の多さをカバーしてくれます。
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
              { name: "転職を繰り返す人の判断軸", href: "/knowledge/job-hopping/" },
              { name: "ブランクの説明方法", href: "/knowledge/career-gap/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "キャリアプランの立て方", href: "/knowledge/career-plan/" },
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
