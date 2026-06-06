import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "転職回数が多いエンジニアの見せ方【職務経歴書の例文集】",
  description:
    "転職回数が多いエンジニア向けに、職務経歴書での見せ方と一貫性の語り方を例文つきで解説。キャリアサマリーのBefore/After、面接での離職理由の伝え方、回数別の対策を実践的にまとめました。",
};

const TITLE = "転職回数が多いエンジニアの見せ方【職務経歴書の例文集】";
const DESC =
  "転職回数が多いエンジニア向けに、職務経歴書での見せ方と一貫性の語り方を例文つきで解説。キャリアサマリーのBefore/After、面接での離職理由の伝え方、回数別の対策を実践的にまとめました。";

const toc = [
  { id: "conclusion", label: "結論：回数より『一貫性』で勝負する" },
  { id: "honne", label: "企業が本当に見ているポイント" },
  { id: "summary", label: "キャリアサマリーのBefore/After" },
  { id: "thread", label: "一貫性の語り方（3つの軸）" },
  { id: "reason", label: "離職理由の言い換え例文集" },
  { id: "format", label: "職務経歴書の構成テクニック" },
  { id: "bycount", label: "回数別の面接対策" },
  { id: "mid", label: "30代・40代視点：回数の意味が変わる" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "エンジニアの転職回数は何回まで許容されますか？",
    a: "明確な上限はありませんが、IT業界は他業界より転職が一般的で、回数だけでマイナス評価になることは比較的少ないです。重要なのは回数より『1社あたりの在籍期間』と『キャリアの一貫性』です。短期離職（1年未満）が連続している場合は、面接で前向きな説明を準備しましょう。",
  },
  {
    q: "転職回数が多いと書類で落とされやすいですか？",
    a: "企業によります。大手SIerや金融系など安定志向の強い企業は回数を重視する傾向がありますが、Web系企業やスタートアップはスキルと実績を重視するため、回数だけで落とすケースは少なめです。エージェント経由で応募すると、推薦文で回数の懸念を補ってもらえるため通過率を上げやすくなります。",
  },
  {
    q: "短期離職があると致命的ですか？",
    a: "1社だけの短期離職なら大きな問題になりにくいです。ただし2社以上連続で1年未満だと『定着しない人』と見られるリスクがあります。その場合は、直近で2年以上の在籍実績を作る、または短期離職の理由を事実ベースで前向きに説明できるよう準備することが重要です。",
  },
  {
    q: "転職回数が多い人はどう自己PRすればいいですか？",
    a: "各社の経験を貫く『一貫したテーマ』を示すのが鉄則です。『バックエンドの技術を段階的に深めてきた』『フロントからインフラまで領域を広げてきた』など、転職がキャリアの成長につながっていることを、各社の具体的な成果（数値）とともに語りましょう。",
  },
  {
    q: "職務経歴書で古い職歴はどう扱えばいいですか？",
    a: "5年以上前や短期間の在籍は概要だけにとどめ、直近2〜3社を厚く書きます。冒頭にキャリアサマリーを置いて全体の一貫性を先に示すと、読み手が個々の転職を『場当たり』と捉えにくくなります。",
  },
  {
    q: "転職回数が多い人に向くエージェントはありますか？",
    a: "IT特化型エージェントは、エンジニアの転職回数に理解があり、回数をカバーする職務経歴書の書き方や面接対策をアドバイスしてくれます。1社に絞らず複数併用し、回数に寛容な求人を持つエージェントを見つけるのが有効です。",
  },
  {
    q: "次こそ長く働くために、会社選びで何を確認すべきですか？",
    a: "技術スタック、開発文化、評価制度、リモート可否、年収の伸びしろを事前に確認しましょう。エージェント経由なら企業の内部情報（離職率・チーム構成など）を聞ける場合があります。ミスマッチを減らすことが、結果的に転職回数を増やさない最善策です。",
  },
];

export default function JobHoppingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/knowledge/job-hopping/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職回数が多いエンジニアの見せ方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 転職回数が多い場合の職務経歴書と面接対策</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          転職回数が多いことを不安に感じるエンジニアは少なくありません。しかしIT業界では、回数そのものよりも「何を経験し、何ができるようになったか」「キャリアに一貫性があるか」が重視されます。本記事では、転職回数が多くても評価される職務経歴書の見せ方と、一貫性の語り方を、Before/Afterの例文つきで具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["厚生労働省 job tag", "IT転職エージェント各社の公開情報"]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：回数より『一貫性』で勝負する</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              転職回数が多い場合の正攻法は、「回数を隠す」ことではなく「<strong>各社の経験を貫く一貫したテーマを示し、転職を成長のストーリーに変える</strong>」ことです。職務経歴書の冒頭で一貫性を宣言し、各社の成果を数値で裏づければ、回数の印象は大きく変わります。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・企業が見るのは『回数』より『1社の在籍期間』と『キャリアの一貫性』</li>
              <li>・冒頭のキャリアサマリーで一貫したテーマを先に示す</li>
              <li>・離職理由は事実ベースで前向きに言い換える（嘘はつかない）</li>
            </ul>
          </div>
        </section>

        {/* 本音 */}
        <section id="honne" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が本当に見ているポイント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            採用側は「回数」という数字そのものに反応しているわけではありません。回数の裏にある次の3点を気にしています。ここを満たせば、回数は問題になりにくくなります。
          </p>
          <div className="space-y-4">
            {[
              { t: "1社あたりの在籍期間", d: "2〜3年以上の在籍が複数あれば安心材料になる。逆に全社1年未満だと『すぐ辞める人』と見られやすい。直近に長めの在籍があると印象が変わる。" },
              { t: "転職理由の一貫性", d: "『技術を深めるため』『より大規模な開発に携わるため』など方向性が一貫していれば、回数はむしろ成長意欲の表れと受け取られる。場当たり的に見えないことが重要。" },
              { t: "スキルの積み上がり", d: "転職のたびに担当範囲・責任・技術レベルが上がっていれば、回数は『成長の証』になる。各社での成果を数値で示せると説得力が増す。" },
            ].map((x, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* サマリー Before/After */}
        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアサマリーのBefore/After</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職務経歴書の冒頭に3〜5行の「キャリアサマリー」を置き、一貫性を先に提示します。同じ経歴でも、書き方で印象は大きく変わります。
          </p>
          <div className="space-y-5">
            <div className="border border-red-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">Before（回数が悪目立ちする例）</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「これまで5社で勤務してきました。さまざまな開発に携わり、幅広い経験を積みました。今回もスキルアップを目指して転職を希望しています。」
              </p>
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">After（一貫性が伝わる例）</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「一貫してWebバックエンドを軸に、Java→Kotlin→Goと技術を深化させてきました。受託でスピードと品質の両立を、自社開発でプロダクト思考を、直近のSaaS企業ではチーム6名のテックリードとしてマイクロサービス設計と後輩育成を経験。『高トラフィックなプロダクトを支える設計力』を強みとして、その専門性を活かせる環境を希望しています。」
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              ポイントは、各社を「点」で並べず「一本の線」でつなぐこと。冒頭で線を見せておくと、読み手はその後の個別の職歴を『場当たり』ではなく『計画的なステップ』として読みます。
            </p>
          </div>
        </section>

        {/* 一貫性の軸 */}
        <section id="thread" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">一貫性の語り方（3つの軸）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「一貫性」と言われても、何を軸にすればいいか迷うものです。代表的な3つの軸から、自分の経歴に合うものを選びましょう。複数を組み合わせても構いません。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1.5">軸①：技術の深化</h3>
              <p className="text-sm text-slate-600 leading-relaxed">「同じ領域（例：バックエンド）を、より難しい課題・大きな規模で扱えるように深めてきた」という軸。言い換え例：「Java→Goと言語を変えながら、一貫して高負荷システムの設計に取り組んできました」。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1.5">軸②：領域の拡張</h3>
              <p className="text-sm text-slate-600 leading-relaxed">「フロント→バック→インフラと領域を広げ、全体を見られるエンジニアになってきた」という軸。言い換え例：「プロダクトを一気通貫で見られる人材になるため、意図的に担当領域を広げてきました」。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1.5">軸③：役割の発展</h3>
              <p className="text-sm text-slate-600 leading-relaxed">「メンバー→リード→マネジメントと、技術に加えてチームへの責任を広げてきた」という軸。言い換え例：「個人の成果だけでなくチームの成果に責任を持つ役割へと、段階的にステップアップしてきました」。</p>
            </div>
          </div>
        </section>

        {/* 離職理由 */}
        <section id="reason" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">離職理由の言い換え例文集</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            面接では各社の離職理由を聞かれます。ネガティブな本音を、事実を曲げずに前向きに言い換えるのがコツです（嘘はNG）。よくあるパターンの言い換え例を挙げます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">本音（言わない方が良い）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">言い換え例（前向き・事実ベース）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ng: "給料が安かった", ok: "成果に応じた評価制度のある環境で、より責任ある仕事に挑戦したいと考えました" },
                  { ng: "上司と合わなかった", ok: "より裁量を持って意思決定に関われる開発体制に魅力を感じ、環境を変える決断をしました" },
                  { ng: "残業が多くてつらかった", ok: "持続的に成果を出し続けられる開発プロセスのある環境で、長期的に貢献したいと考えました" },
                  { ng: "古い技術ばかりで飽きた", ok: "モダンな技術スタックでプロダクト開発に携わり、技術者として成長し続けたいと考えました" },
                  { ng: "会社が倒産・事業縮小した", ok: "事業状況の変化により、自分の専門性をより活かせる環境を探すことにしました（事実をそのまま簡潔に）" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-500">{r.ng}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700">{r.ok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              注意：言い換えはあくまで「事実の前向きな表現」です。経歴詐称や、確認すれば分かる嘘は信頼を一気に失います。倒産・会社都合など正当な理由はそのまま簡潔に伝えて問題ありません。
            </p>
          </div>
        </section>

        {/* 構成テクニック */}
        <section id="format" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書の構成テクニック</h2>
          <div className="space-y-4">
            {[
              { t: "冒頭にキャリアサマリーを置く", d: "時系列の職歴の前に、3〜5行で全体像と一貫したテーマを宣言する。読み手の第一印象を『一貫性』で固定できる。" },
              { t: "直近を厚く、古い職歴は圧縮する", d: "5年以上前や短期在籍は概要のみ。直近2〜3社を詳細に書く。古い経歴を長々と書くと現在のスキルが伝わりにくい。" },
              { t: "成果を数値で示す", d: "『レスポンスタイム50%改善』『テストカバレッジ80%達成』など、各社の成果を数値化。転職のたびに成長している証拠になる。" },
              { t: "スキル要約を別枠で立てる", d: "言語・FW・クラウド・役割を一覧化した『スキル要約』を設け、複数社で積み上げた技術を一目で見せる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            基本フォーマットや書き方の詳細は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>を参照してください。
          </p>
        </section>

        {/* 回数別 */}
        <section id="bycount" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">回数別の面接対策</h2>
          <div className="space-y-4">
            {[
              { count: "3回", advice: "IT業界では一般的な回数。特別な対策は不要だが、各社での成長ストーリーを整理しておくと安心。一貫性を語れれば十分プラス。" },
              { count: "4〜5回", advice: "30代後半〜40代なら違和感のない範囲。一貫したテーマ（技術深化・領域拡張・役割発展のいずれか）を明確に説明できるよう準備する。" },
              { count: "6回以上", advice: "直近の在籍が2年以上あること、今後のビジョンが明確であることが鍵。『次の転職を最後にしたい』理由を、その会社の環境と結びつけて語る。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[60px] h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.count}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{item.advice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：回数の意味が変わる</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代：回数より『伸び』を見せる</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代は転職のたびにスキルと年収が伸びているかが問われます。回数があっても右肩上がりのストーリーを描ければ、むしろ成長意欲として評価されます。年収の伸びは<Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収相場</Link>も参考に。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代：『腰を据えられるか』が焦点</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代は回数が多いと『また辞めるのでは』という定着懸念が強まりがちです。直近の在籍を長めにし、応募先で長く貢献する具体的な理由を語ることが重要。40代の動き方は<Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代エンジニア転職のリアル</Link>で深掘りしています。
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
          <h2 className="text-xl font-bold mb-3">転職回数が多くても、見せ方で変わる</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、回数をカバーする職務経歴書の書き方から面接対策、推薦文での補強まで無料でサポートしてくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
              { name: "30代未経験からのIT転職", href: "/knowledge/inexperienced-30s/" },
              { name: "面接でよく聞かれる質問", href: "/knowledge/behavioral/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
