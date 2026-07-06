import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "行動面接（STAR法）の対策【回答例文と頻出質問カテゴリ】";
const DESCRIPTION =
  "行動面接（Behavioral Interview）の対策をSTAR法で徹底解説。頻出質問カテゴリ、一般化した回答例文、NG回答を30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/behavioral/" },
  title: TITLE,
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "STAR法とは何ですか？",
    a: "Situation（状況）、Task（課題）、Action（行動）、Result（結果）の頭文字を取ったフレームワークです。過去の経験を構造的に伝えることで、面接官に分かりやすく、説得力のある回答ができます。エピソードを思いついた順に話すより、この型に沿う方が伝わります。",
  },
  {
    q: "行動面接はどのような企業で行われますか？",
    a: "外資系IT企業（Amazon、Google、Meta等）では必ずと言ってよいほど行われ、日系でもメガベンチャーを中心に導入が進んでいます。特にAmazonはLeadership Principlesに基づく行動面接が知られています。日系の経験者採用でも『過去にどう動いたか』を問う質問は一般的です。",
  },
  {
    q: "エピソードは何個くらい用意すべきですか？",
    a: "8〜10個用意しておけば、ほとんどの質問に対応できます。『困難を乗り越えた経験』『チームを率いた経験』『失敗から学んだ経験』『対立を解消した経験』など、異なるテーマのエピソードをバランスよく準備しましょう。1つのエピソードを複数の質問に使い回せるよう整理すると効率的です。",
  },
  {
    q: "失敗体験を正直に話しても大丈夫ですか？",
    a: "むしろ正直に話すべきです。面接官が知りたいのは『失敗からどう学び、どう改善したか』です。失敗を隠したり、責任を他人に転嫁する回答は大きなマイナスになります。失敗→原因分析→改善行動→その後の成果、の流れで語れば、自己認識力と成長性をアピールできます。",
  },
  {
    q: "技術面接と行動面接、どちらの比重が高いですか？",
    a: "企業や職種によって大きく異なります。外資系IT企業では行動面接が独立した選考ラウンドとして設けられることが多く、日系でもマネジメント要素のあるポジションほど比重が上がる傾向があります。どちらも対策が必要と考え、両方を準備しておくのが安全です。",
  },
  {
    q: "行動面接の練習方法はありますか？",
    a: "STAR法で回答を書き出し、声に出して2〜3分で話せるか確認するのが基本です。鏡の前や友人相手に練習したり、転職エージェントのキャリアアドバイザーに模擬面接を依頼すると、プロからのフィードバックがもらえます。録音して聞き返すと、話の長さや主語の使い方の癖に気づけます。",
  },
  {
    q: "30代・40代の行動面接で意識すべきことは？",
    a: "リーダーシップ・育成・対立解消・意思決定など、経験を重ねたからこそ語れるテーマに重点を置きましょう。若手のように『頑張った話』ではなく、『チームや組織にどう影響を与えたか』を語れると、ミドル世代の評価につながります。",
  },
  {
    q: "エンジニアなのに技術以外を聞かれる意味は？",
    a: "技術力が同等の候補者が複数いるとき、最終的な合否を分けるのは協働力や問題解決の姿勢だからです。特にチームで開発する以上、対立への対処やコミュニケーションは技術と同じくらい重要視されます。技術面接とは別の準備として捉えましょう。",
  },
];

const sections = [
  { id: "conclusion", label: "結論：STAR法で型を固める" },
  { id: "star", label: "STAR法の使い方（例文付き）" },
  { id: "categories", label: "頻出質問カテゴリ" },
  { id: "examples", label: "カテゴリ別 回答例文（サンプル）" },
  { id: "ng", label: "避けるべきNG回答" },
  { id: "prep", label: "エピソード準備シート" },
  { id: "age", label: "30代・40代の行動面接視点" },
  { id: "faq", label: "よくある質問" },
];

const star = [
  { num: "S", title: "Situation（状況）", desc: "いつ・どこで・どんな状況だったかを簡潔に。", sample: "「前職であるWebサービスを運用していた際、繁忙期に向けてパフォーマンス改善が急務になっていました」" },
  { num: "T", title: "Task（課題）", desc: "自分に課された役割や目標を明確に。", sample: "「私はチームのリードとして、限られた期間内に主要画面の表示速度を改善する責任を負っていました」" },
  { num: "A", title: "Action（行動）", desc: "自分が取った行動を『私』を主語に具体的に。", sample: "「まず計測でボトルネックがDBクエリにあると特定し、インデックス設計の見直しとN+1の解消を私が主導して進めました」" },
  { num: "R", title: "Result（結果）", desc: "結果をできれば数値で。学びも添える。", sample: "「主要画面の表示が体感で大きく改善し、繁忙期を障害なく乗り切れました。計測を起点にする重要性を学びました」" },
];

const categories = [
  { name: "リーダーシップ", q: "チームを率いて困難を乗り越えた経験は？", eval: "主体性・巻き込み力" },
  { name: "困難の克服", q: "最も困難だったプロジェクトと、どう対処したか？", eval: "問題解決力・粘り強さ" },
  { name: "対立の解消", q: "チーム内で意見が対立した時、どうしたか？", eval: "コミュニケーション力・調整力" },
  { name: "失敗からの学び", q: "大きな失敗の経験と、そこから何を学んだか？", eval: "自己認識・成長性" },
  { name: "技術的判断", q: "情報が不十分な中で重要な技術決定をした経験は？", eval: "判断力・リスク管理" },
  { name: "育成・メンタリング", q: "後輩やメンバーの成長を支援した経験は？", eval: "育成力・影響力（ミドル重視）" },
];

const examples = [
  {
    cat: "対立の解消",
    q: "チーム内で技術選定の意見が対立した時、どう対処しましたか？",
    answer: "「新機能の基盤技術で、メンバー間で2案に意見が割れていました（S）。リードとして期日までに合意形成する必要がありました（T）。私は感情論を避けるため、両案を評価軸（学習コスト・運用実績・拡張性）で表に整理し、小さな検証を1日で実施して事実ベースで比較できる場を作りました（A）。結果、チームが納得して一方の案に決まり、その後の手戻りもありませんでした。対立は事実と基準で解くべきだと学びました（R）」",
  },
  {
    cat: "失敗からの学び",
    q: "大きな失敗をした経験と、そこから学んだことを教えてください。",
    answer: "「リリース前のテストが不十分で、本番で不具合を出してしまいました（S）。私は早期収束と再発防止の両方に責任がありました（T）。まず影響範囲を切り分けて暫定対応し、その後チームでふりかえりを主導して、原因をプロセスの欠落として特定。自動テストとレビュー観点を整備しました（A）。以降、同種の不具合は発生しなくなりました。個人を責めるより仕組みを直す方が効果的だと学びました（R）」",
  },
  {
    cat: "リーダーシップ",
    q: "チームを率いて困難な状況を乗り越えた経験を教えてください。",
    answer: "「人員が限られる中で大きな改修を任されました（S）。私はリードとして、納期と品質を両立させる責任がありました（T）。優先度を絞ってスコープを段階分割し、メンバーの得意領域に合わせてタスクを再配分。毎日の短い同期で詰まりを早期に解消しました（A）。結果、段階リリースで予定どおり改修を完了でき、メンバーの負荷も平準化できました。任せ方と優先順位づけの重要性を学びました（R）」",
  },
];

const ngList = [
  { t: "「私たちは〜しました」と主語をぼかす", d: "面接官はあなた個人の行動を知りたい。『チームで』ではなく『私がリードして』『私が提案して』と自分の行動を明確にする。" },
  { t: "結果を数値や事実で示さない", d: "『改善しました』だけでは弱い。『繁忙期を障害なく乗り切れた』『手戻りがなくなった』など、結果を具体的に語る。" },
  { t: "仮定の話で答える", d: "『もし〜なら〜する』は行動面接ではNG。過去に実際に起きた具体的なエピソードで答える。" },
  { t: "失敗を他人のせいにする", d: "『PMの要件が甘かったので』のような責任転嫁は印象を大きく下げる。自分が何を学び改善したかに焦点を当てる。" },
  { t: "回答が長すぎる", d: "1エピソードは2〜3分で完結させる。要点を絞り、面接官が深掘りする余地を残す。" },
  { t: "盛りすぎ・抽象的すぎる", d: "誇張は深掘りで矛盾が露呈する。等身大の具体エピソードの方が、結果的に高く評価される。" },
];

export default function BehavioralPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/behavioral/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "行動面接（STAR法）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          行動面接（STAR法）の対策【回答例文と頻出質問カテゴリ】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | STAR法・頻出カテゴリ・回答例文・NG回答
        </p>

        <DataNote surveyedAt="2026年6月" sources={["Qiita Job Change 等の口コミ", "各社採用情報（公開情報）"]} />

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            行動面接（Behavioral Interview）は、過去の行動から将来のパフォーマンスを予測する面接手法です。技術力が同等の候補者の中で合否を分けるのは、しばしばこの協働力・問題解決の姿勢です。30代・40代にとっては、豊富な実務経験を武器にできる場でもあります。本記事では、STAR法の使い方、頻出質問カテゴリ、一般化した回答例文、NG回答をまとめます。
          </p>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：STAR法で型を固め、主語を「私」にする</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・回答は<strong>STAR法</strong>（状況→課題→行動→結果）で構造化する。思いつき順は伝わらない。</li>
              <li>・主語を<strong>「私」</strong>にし、チームの成果と自分の貢献を区別する。これが最重要。</li>
              <li>・テーマ別に<strong>8〜10個のエピソード</strong>を事前に準備し、複数の質問へ使い回せるよう整理する。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-petrol hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* STAR */}
        <section id="star" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">STAR法の使い方（例文付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            各要素に何を入れるかと、一般化した文例を示します。実際にはあなた自身の経験に置き換えてください。
          </p>
          <div className="space-y-4">
            {star.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">{item.desc}</p>
                  <p className="text-sm text-slate-500 bg-slate-50 rounded p-3">例文: {item.sample}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* カテゴリ */}
        <section id="categories" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出質問カテゴリ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">カテゴリ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">質問例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">評価ポイント</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{c.name}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{c.q}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{c.eval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 回答例文 */}
        <section id="examples" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カテゴリ別 回答例文（サンプル）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下はSTAR法に沿った回答の例です。いずれも特定の実体験ではなく、一般化したサンプル回答です。具体的な状況・数値はあなた自身の経験に置き換えてください。
          </p>
          <div className="space-y-5">
            {examples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <span className="inline-block bg-petrol-soft text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2">{e.cat}</span>
                <h3 className="font-bold text-slate-800 mb-2">Q. {e.q}</h3>
                <p className="text-sm text-slate-600 bg-green-50 rounded p-4 leading-relaxed">{e.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けるべきNG回答</h2>
          <div className="space-y-4">
            {ngList.map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-100 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{i + 1}. {n.t}</h3>
                <p className="text-sm text-red-700">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 準備シート */}
        <section id="prep" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エピソード準備シート</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            面接前に、テーマごとに次の項目を1枚ずつ埋めておくと、本番でどの質問が来ても落ち着いて答えられます。
          </p>
          <ul className="space-y-2">
            {[
              "テーマ（リーダーシップ／失敗／対立／判断 など）を1つ決める",
              "S: いつ・どこで・どんな状況だったか（2〜3文）",
              "T: 自分に課されていた役割・目標は何か",
              "A: 『私』が取った具体的な行動を3つ程度",
              "R: 結果（できれば事実・数値）と、そこから得た学び",
              "想定追い質問（『なぜそうした？』『他の選択肢は？』）への答えも一言用意",
            ].map((c, i) => (
              <li key={i} className="flex gap-3 items-start bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 30代40代視点 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の行動面接視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代の行動面接では、若手と同じ『頑張った話』ではなく、<strong>チームや組織にどう影響を与えたか</strong>が問われます。リーダーシップ・育成・対立解消・意思決定など、経験を重ねたからこそ語れるテーマを軸にしましょう。『自分が手を動かした』だけでなく『人を動かした・仕組みを変えた』エピソードが評価されます。
            </p>
            <p>
              一方で注意したいのが、<strong>武勇伝になりすぎない</strong>ことです。過去の成功を誇るより、失敗からの学びや、若手との協働を素直に語る方が好印象です。年下の上司や若いチームに入る可能性も踏まえ、柔軟さと謙虚さが伝わる回答を意識しましょう。
            </p>
            <p>
              準備としては、キャリア全体から『人や組織に影響を与えた場面』を5〜6個棚卸しし、STAR法で言語化しておくこと。これは<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析</Link>とも直結し、志望動機づくりにも流用できます。
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
          <h2 className="text-xl font-bold mb-3">面接対策のプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接傾向に合わせた行動面接の対策をサポートしてくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "志望動機の作り方", href: "/knowledge/motivation/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
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
