import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "インポスター症候群を乗り越える転職活動｜実力の客観視と面接対策";
const DESCRIPTION =
  "エンジニアに多いインポスター症候群の正体と、実力を客観的に見える化する方法を解説。面接での自己評価の歪みを正すワークシートや言い換え例を、30代・40代向けに紹介します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/imposter-syndrome/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "what", label: "インポスター症候群とは" },
  { id: "types", label: "5つのタイプ（自己診断）" },
  { id: "objectify", label: "実力を客観視する4ステップ" },
  { id: "worksheet", label: "実績の棚卸しワークシート" },
  { id: "interview", label: "面接での自己評価の歪み対策" },
  { id: "reframe", label: "思考の言い換え例" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const types = [
  { type: "完璧主義者", feature: "100%でないと失敗と感じる", example: "コードレビューの指摘を全否定と受け取る" },
  { type: "スーパーヒーロー", feature: "人より多く働かないと価値がない", example: "常に残業し続けて燃え尽きる" },
  { type: "天才型", feature: "努力が必要＝才能がない", example: "新技術の習得に時間がかかると自信を失う" },
  { type: "ソリスト", feature: "助けを借りたら能力不足", example: "分からないことを同僚に聞けない" },
  { type: "エキスパート", feature: "全てを知らないと専門家ではない", example: "知らないFWがあると自分を素人だと感じる" },
];

const steps = [
  { num: "1", title: "成果を「事実」と「数値」で書き出す", desc: "「パフォーマンスを改善した」ではなく「レスポンスタイムを200ms→50msに短縮（75%削減）」「障害対応の平均復旧時間を半減」のように、解釈を排して事実だけを書きます。数字は感情に左右されません。" },
  { num: "2", title: "第三者からの評価を集める", desc: "1on1のコメント、コードレビューでの称賛、Slackで受けた感謝、社内表彰、顧客の声などを1か所にメモ。自己評価の歪みを「外部の証拠」で補正します。" },
  { num: "3", title: "「できること」と「これから学ぶこと」を分ける", desc: "知らない技術があるのは当然です。今できることのリストと、学習中・未経験のリストを物理的に分けると、過小評価が和らぎます。" },
  { num: "4", title: "市場のものさしを当てる", desc: "求人票の応募要件や年収レンジ、エージェントの客観評価に自分のスキルを照らすと、「思っていたより通用する」ことに気づけます。" },
];

const reframes = [
  { neg: "「10年もやってるのに○○もできない」", pos: "「10年で○○と△△と□□を実務で身につけた。新しい分野はこれから学べばいい」" },
  { neg: "「面接で技術力不足だと見抜かれそう」", pos: "「面接は互いのマッチングを確認する場。合わなければお互いにとって良い結果」" },
  { neg: "「周りのエンジニアの方が優秀」", pos: "「SNSは他人のハイライト。自分のスキルの組み合わせは他に真似できない」" },
  { neg: "「たまたま運が良かっただけ」", pos: "「再現性のある判断や工夫をしてきた。その意思決定こそ実力」" },
];

const interviewTips = [
  { title: "「自信がない」を「準備」で埋める", desc: "面接前に下で作る実績ワークシートを見返す。具体的な数値とエピソードが手元にあると、自己評価の揺れに引きずられにくくなります。" },
  { title: "謙遜しすぎて事実を削らない", desc: "「大したことはしていない」と言いがちな人ほど、成果を事実ベースで淡々と述べる練習を。誇張ではなく、起きたことを正確に伝えるのが目標です。" },
  { title: "知らないことは「学べる」と接続する", desc: "「その技術は未経験ですが、近い○○の経験があり、△△の方法でキャッチアップできます」と、過小評価ではなく現実的な見通しで答えます。" },
  { title: "STAR法で再現性を語る", desc: "Situation / Task / Action / Result の順で話すと、「運が良かった」ではなく「自分の判断で成果を出した」ことが伝わります。" },
];

const faqs = [
  {
    q: "インポスター症候群とは何ですか？",
    a: "自分の能力や実績を過小評価し、「自分は周囲より劣っている」「いつか実力がバレる」と感じる心理傾向を指す言葉です。1978年にClanceとImesが提唱した概念で、医学的な診断名（疾患）ではありません。能力の高い人ほど陥りやすいと語られることが多く、エンジニアのように常に新しい技術に触れる職種では生じやすいとされています。強い不安や落ち込みが続く場合は、専門家への相談も検討してください。",
  },
  {
    q: "自分の実力を客観的に把握するにはどうすればいいですか？",
    a: "成果を「事実」と「数値」で書き出すのが最も効果的です。『改善した』ではなく『レスポンスタイムを200ms→50msに短縮（75%削減）』のように定量化すると、主観を排除できます。あわせて1on1や同僚からのフィードバックなど第三者の評価を集め、求人票の応募要件や年収レンジと照らすと、自己評価のズレが見えてきます。",
  },
  {
    q: "面接で実力以上に自信なさげに見えてしまいます",
    a: "事前に「実績ワークシート」を作り、面接前に見返すのが効果的です。具体的な数値とエピソードが手元にあると、その場の不安に引きずられにくくなります。また、謙遜のつもりで成果を削ってしまう癖がある人は、『起きた事実を正確に述べる』練習をしておきましょう。誇張ではなく正確さが目標です。",
  },
  {
    q: "知らない技術について聞かれると頭が真っ白になります",
    a: "全てを知っている必要はありません。『その技術は未経験ですが、近い○○の経験があり、△△の方法でキャッチアップできます』と、現実的な見通しに接続して答えましょう。学習能力やキャッチアップの実績を示す方が、知識の網羅性を装うより評価されます。",
  },
  {
    q: "周りのエンジニアと比較してつらくなります",
    a: "SNSや勉強会での発信は他人の『ハイライト』であり、全体像ではありません。他人の強みと自分の弱みを比べるのは不公平です。比較するなら『自分の1年前』と。成長の差分を見る方が建設的で、自己評価も安定します。",
  },
  {
    q: "年齢が上がるほどインポスター症候群になりやすいですか？",
    a: "年齢そのものより、マネジメントや新領域など『新しい役割に挑戦する局面』で生じやすい傾向があります。30代後半〜40代でEMやアーキテクトに移る時に『経験年数の割にできない』と感じがちですが、移行初期に完璧である必要はありません。",
  },
  {
    q: "克服のために有効なサポートはありますか？",
    a: "転職エージェントのキャリアアドバイザーに客観的な市場価値を聞くのが効果的です。『あなたのスキルならこの年収レンジが妥当』と第三者から言われることで、自分の実力を現実的に認識し直せます。レバテックキャリアやGeeklyなど、今すぐの転職を前提としない相談も可能なサービスがあります。",
  },
  {
    q: "症状が強く、日常に支障が出ています",
    a: "インポスター症候群は診断名ではありませんが、強い不安・不眠・気分の落ち込みが続く場合は、その背景に別の要因があることもあります。無理に自力で抱え込まず、専門医・カウンセラー・産業医への相談を検討してください。本記事は一般的な情報であり、診断や治療の代わりにはなりません。",
  },
];

export default function ImposterSyndromePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/imposter-syndrome/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "インポスター症候群と転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インポスター症候群を乗り越える転職活動｜実力の客観視と面接対策
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 実力を正しく評価し、面接の歪みを正す</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「自分には転職できるほどのスキルがない」「面接で見抜かれるのが怖い」。こうした不安は、優秀なエンジニアほど抱きやすい<strong>インポスター症候群</strong>（実力を過小評価してしまう心理傾向）かもしれません。本記事では、実力を客観的に見える化する方法と、面接で自己評価の歪みに足を引っ張られないための具体策を、30代・40代の視点でまとめます。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["Clance & Imes (1978) インポスター現象の提唱"]}
        />

        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-10">
          <p className="text-sm text-amber-900 leading-relaxed">
            インポスター症候群は医学的な診断名ではなく、心理的な傾向を指す言葉です。<strong>強い不安・不眠・気分の落ち込みが続く場合は、専門医・カウンセラー・産業医への相談を検討してください。</strong>本記事は一般的な情報提供であり、診断・治療の代わりにはなりません。
          </p>
        </div>

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：不安は「事実・数値・第三者の声」で上書きする</h2>
            <p className="text-sm text-blue-800 leading-relaxed">
              インポスター症候群は気合いでは消えません。有効なのは、<strong>(1)成果を事実と数値で書き出す</strong>、<strong>(2)第三者の評価を集める</strong>、<strong>(3)市場のものさし（求人要件・年収レンジ・エージェント評価）に照らす</strong>こと。主観的な「自分はダメ」を、客観的な証拠で上書きしていきます。面接では「準備した実績ワークシート」を拠り所にすれば、その場の不安に引きずられにくくなります。
            </p>
          </div>
        </section>

        {/* what */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インポスター症候群とは</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              インポスター症候群（インポスター現象）は、客観的には十分な実力や実績があるのに、自分では「まぐれ」「いつかバレる」と感じてしまう心理傾向です。1978年に心理学者のClanceとImesが提唱しました。
            </p>
            <p>
              エンジニアは常に新しい言語・フレームワーク・ツールに触れ、「知らないこと」が可視化されやすい職種です。そのため「自分はまだ足りない」という感覚を持ちやすく、転職活動という<strong>自己評価が試される場面</strong>で症状が強く出ることがあります。まずは「これは多くの人が経験する傾向だ」と知ることが、最初の一歩になります。
            </p>
          </div>
        </section>

        {/* types */}
        <section id="types" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5つのタイプ（自己診断）</h2>
          <p className="text-sm text-slate-600 mb-4">自分がどのパターンで自己評価を下げやすいかを知ると、対策を立てやすくなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">タイプ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">思考の特徴</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">エンジニアでの例</th>
                </tr>
              </thead>
              <tbody>
                {types.map((t, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{t.type}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.feature}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* objectify */}
        <section id="objectify" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">実力を客観視する4ステップ</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* worksheet */}
        <section id="worksheet" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">実績の棚卸しワークシート</h2>
          <p className="text-sm text-slate-600 mb-4">直近3〜5件のプロジェクトについて、下の枠を埋めてみてください。「事実」と「数値」を意識するのがポイントです。</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">記入例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">課題・状況</td><td className="border border-slate-200 px-4 py-3 text-slate-600">APIのレスポンス遅延でユーザー離脱が発生</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">自分の役割・判断</td><td className="border border-slate-200 px-4 py-3 text-slate-600">N+1解消とキャッシュ設計を主導</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">具体的な行動</td><td className="border border-slate-200 px-4 py-3 text-slate-600">クエリ改善・Redis導入・負荷試験を実施</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">数値で見た結果</td><td className="border border-slate-200 px-4 py-3 text-slate-600">200ms→50ms（75%削減）、離脱率を改善</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">第三者の反応</td><td className="border border-slate-200 px-4 py-3 text-slate-600">1on1で改善を評価、社内勉強会で共有依頼</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-800"><strong>使い方：</strong>埋めた内容はそのまま<Link href="/knowledge/resume/" className="text-green-700 underline">職務経歴書</Link>や面接の回答に流用できます。面接直前に見返す「お守り」にもなります。</p>
          </div>
        </section>

        {/* interview */}
        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での自己評価の歪み対策</h2>
          <div className="space-y-4">
            {interviewTips.map((t, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {t.title}</h3>
                <p className="text-sm text-petrol-deep">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            面接の組み立て自体は<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）ガイド</Link>や<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策</Link>も参考になります。
          </p>
        </section>

        {/* reframe */}
        <section id="reframe" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">思考の言い換え例</h2>
          <div className="space-y-4">
            {reframes.map((r, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="text-sm text-red-700 font-medium mb-2">{r.neg}</p>
                <p className="text-sm text-green-700">→ {r.pos}</p>
              </div>
            ))}
          </div>
        </section>

        {/* midlife */}
        <section id="midlife" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアならではの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は「経験年数の割にできていない」という比較に陥りやすい時期です。マネジメントやアーキテクトなど新しい役割に移ると、慣れたコーディングと違って手探りになり、自己評価が下がりがちです。しかし<strong>役割移行の初期に不慣れなのは当然</strong>で、それは実力不足とは別物です。
            </p>
            <p>
              この年代の強みは、技術知識そのものよりも「設計判断・トラブル対応・チーム調整を、再現性をもって行ってきた経験」にあります。求人市場でもミドル層の経験は評価されやすく、客観的な市場価値を知ることが自己評価の補正に直結します。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>や<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析ガイド</Link>とあわせて、エージェントの客観評価も活用してみてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">客観的な市場価値を聞いてみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントのアドバイザーが、あなたのスキルを客観的に評価。第三者の視点が、自己評価の歪みを正す助けになります。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "行動面接（STAR法）ガイド", href: "/knowledge/behavioral/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
