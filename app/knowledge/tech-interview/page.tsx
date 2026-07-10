import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニア転職の技術面接対策【質問テーマと回答の組み立て方】";
const DESCRIPTION =
  "エンジニア転職の技術面接でよく問われるテーマ領域、回答の組み立て方、逆質問例を徹底解説。30代・40代が経験を強みに変える面接対策をテンプレ付きで紹介します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/tech-interview/" },
  title: TITLE,
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "技術面接ではどんなテーマが問われますか？",
    a: "大きく分けて(1)言語・フレームワーク・設計パターンなど技術知識を確認する質問、(2)過去のプロジェクト経験を深掘りする質問、(3)コーディングテスト・ライブコーディング、(4)システム設計の議論の4領域です。企業によって比重は異なりますが、30代以上は(2)の経験深掘りと(4)の設計の比重が大きくなる傾向があります。",
  },
  {
    q: "技術知識の質問にはどう答えればいいですか？",
    a: "用語の暗記を答えるのではなく「定義→実務でどう使ったか→トレードオフ」の3点セットで答えるのが基本です。たとえば『楽観ロックと悲観ロックの違いは？』なら、定義を述べたうえで自分のプロジェクトでどちらをなぜ選んだかまで話すと、知識だけでなく判断力も示せます。",
  },
  {
    q: "過去のプロジェクトの深掘りで意識することは？",
    a: "課題の背景→自分が取った具体的なアクション→結果と学びの流れで、主語を『私』にして話すことです。チーム全体の成果ではなく、自分が何を判断し何を実装したかを明確にしましょう。技術選定の理由を必ず説明できるよう準備しておくと、ほぼどの深掘りにも対応できます。",
  },
  {
    q: "実装の細部を忘れてしまった古いプロジェクトはどう話せばいいですか？",
    a: "細かい数値やAPI名は無理に思い出さず、設計判断と学びにフォーカスして話せば問題ありません。『当時の正確な数値は記憶が曖昧ですが、課題は〜で、〜という方針で解決しました』と正直に前置きしたうえで本質を語る方が、曖昧な記憶を断定するより信頼されます。",
  },
  {
    q: "知らない技術について聞かれたらどうすればいいですか？",
    a: "知ったかぶりは最も評価を下げます。『使った経験はありませんが、近い〜の経験から、おそらく〜という仕組みだと推測します』のように、知らないことを認めつつ既知の知識から推論する姿勢を見せましょう。学習姿勢と論理的思考の両方を示せます。",
  },
  {
    q: "逆質問は何を聞けばいいですか？",
    a: "開発プロセス（コードレビュー・CI/CD・テスト文化）、技術的負債への向き合い方、チーム構成と自分に期待される役割、技術選定の意思決定プロセスなどがおすすめです。給与・休日だけの質問は熱意が伝わりにくいので、技術や働き方の解像度を上げる質問を1〜2個は用意しましょう。",
  },
  {
    q: "オンライン面接で気をつけるポイントは？",
    a: "安定したネット回線、静かな環境、顔が明るく映る照明を準備しましょう。カメラ目線を意識し、画面共有でのコーディングに備えてIDEやエディタの表示設定を事前に確認します。音声トラブルを避けるため有線イヤホンやヘッドセットの使用がおすすめです。",
  },
  {
    q: "30代・40代の技術面接で特に重視されることは？",
    a: "若手と同じアルゴリズム力よりも、技術選定の判断力、チームへの技術的影響、障害対応や品質改善の実績が重視されます。『なぜその技術を選んだか』『どうチームを巻き込んだか』を語れることが、経験者ならではの評価ポイントになります。",
  },
];

const sections = [
  { id: "conclusion", label: "結論：何を準備すべきか" },
  { id: "themes", label: "よく問われる4つのテーマ領域" },
  { id: "structure", label: "回答の組み立て方フレームワーク" },
  { id: "questions", label: "頻出質問と回答の型（テンプレ）" },
  { id: "reverse", label: "逆質問の例文" },
  { id: "schedule", label: "対策スケジュール（2ヶ月）" },
  { id: "checklist", label: "面接前日・当日チェックリスト" },
  { id: "age", label: "30代・40代の技術面接視点" },
  { id: "faq", label: "よくある質問" },
];

const themes = [
  {
    title: "1. 技術知識の確認",
    color: "blue",
    desc: "言語・フレームワーク・データベース・設計パターンなどの理解度を問う。暗記ではなく実務での使いどころとトレードオフまで説明できるかが見られる。",
    examples: "例: トランザクション分離レベルの違い、REST/gRPCの使い分け、インデックス設計、非同期処理の考え方、テスト戦略",
  },
  {
    title: "2. プロジェクト経験の深掘り",
    color: "blue",
    desc: "職務経歴書に書いた経験を起点に、判断の根拠を掘り下げる。30代・40代では最も比重が大きくなりやすい領域。",
    examples: "例: 技術選定の理由、設計上のトレードオフ、パフォーマンス改善の経験、障害対応の経験、レガシー改善の進め方",
  },
  {
    title: "3. コーディングテスト / ライブコーディング",
    color: "blue",
    desc: "アルゴリズム問題をその場で実装する形式。経験者採用ではEasy〜Medium中心で、コードの可読性や思考プロセスの説明も評価対象。",
    examples: "例: 配列操作、文字列処理、ハッシュマップ、二分探索、スタック/キュー、木構造の探索",
  },
  {
    title: "4. システム設計の議論",
    color: "blue",
    desc: "大規模システムの設計を議論する形式。要件確認→概算→ハイレベル設計→トレードオフ検討の流れで進む。シニアポジションで重視される。",
    examples: "例: URL短縮サービス、ニュースフィード、チャットシステム、ECサイトの設計（詳細は別記事参照）",
  },
];

const answerQuestions = [
  {
    q: "あなたの強みとなる技術領域は何ですか？",
    bad: "「フロントもバックも、インフラもひと通りできます」と広く浅く答える",
    good: "「バックエンド、特に高トラフィックなAPIの設計と性能改善が強みです。前職では〜という負荷課題に対し〜という方針で対応し、レスポンスを改善しました」",
    point: "得意領域を1〜2つに絞り、具体的なプロジェクトと打ち手をセットで語る。『何でもできます』は専門性が薄く見える。",
  },
  {
    q: "直近で最も技術的に難しかった課題は？",
    bad: "「いろいろ大変でしたが、なんとか乗り切りました」と抽象的に終える",
    good: "「課題は〜でした（背景）。原因を〜と特定し（分析）、〜という方針で実装しました（行動）。結果〜が改善し、〜を学びました（結果と学び）」",
    point: "背景→分析→行動→結果＆学びの順で。数値は覚えている範囲で。曖昧なら『正確な値は記憶が曖昧』と前置きする。",
  },
  {
    q: "なぜその技術を選んだのですか？",
    bad: "「チームで使っていたからです」「流行っていたからです」と外部理由だけで答える",
    good: "「候補は〜と〜でした。要件として〜が重要だったため、学習コストより運用実績を優先し〜を選びました。代わりに〜という制約は受け入れました」",
    point: "比較した選択肢・選定基準・受け入れたトレードオフの3点を語ると判断力が伝わる。経験者の最重要評価ポイント。",
  },
  {
    q: "なぜ当社を志望しましたか？",
    bad: "「技術力が高い会社だと思ったからです」と誰にでも言える内容で答える",
    good: "「御社の技術ブログで読んだ〜の取り組みに共感しました。私の〜の経験が、御社が進める〜に直接活かせると考えています」",
    point: "事前に技術ブログ・プロダクト・採用ページを調べ、具体的な共感点と自分の経験の接続を述べる。",
  },
  {
    q: "5年後のキャリアビジョンを教えてください",
    bad: "「まだ具体的には考えていません」と方向性を示せない",
    good: "「テックリードとして設計と若手育成の両方に責任を持ちたいです。御社の〜な環境であれば、〜の経験を活かしながらその方向に成長できると考えています」",
    point: "テックリード・アーキテクト・EMなど方向性を示し、その企業でどう実現するかと結びつける。",
  },
];

const reverseQuestions = [
  "コードレビューやテストはどのような文化・プロセスで運用されていますか？",
  "技術的負債に対して、普段どのように優先順位をつけて向き合っていますか？",
  "技術選定は誰がどのように意思決定していますか。現場の裁量はどの程度ありますか？",
  "入社して最初の3ヶ月で、私に最も期待される成果は何でしょうか？",
  "チーム構成と、私が想定されているポジションの役割を教えてください。",
  "今、開発チームが抱えている一番大きな技術的課題は何ですか？",
];

const schedule = [
  { period: "1〜2週目", title: "基礎固め", desc: "データ構造・アルゴリズムの復習。職務経歴の棚卸しを行い、各プロジェクトの『技術選定理由・課題・打ち手・結果』を1枚にまとめる。" },
  { period: "3〜4週目", title: "応用と調査", desc: "コーディングのMedium問題に着手。志望企業の技術ブログ・採用ページを読み、逆質問と志望動機の素材を集める。" },
  { period: "5〜6週目", title: "実践練習", desc: "模擬面接（友人やエージェント）。プロジェクト深掘りへの回答を声に出して練習。システム設計の典型問題も触れる。" },
  { period: "7〜8週目", title: "仕上げ", desc: "苦手分野の重点復習。企業ごとの面接傾向を整理。回線・照明・IDE設定など環境の最終確認。" },
];

const dayChecklist = [
  "職務経歴書・ポートフォリオのURLを手元に開いておく",
  "志望動機と逆質問を1〜2個ずつ最終確認する",
  "オンラインの場合: 回線・カメラ・マイク・画面共有を事前テスト",
  "静かで明るい環境を確保し、背景を整える",
  "水を用意し、開始10分前には着席する",
  "主要プロジェクトの『選定理由・課題・打ち手・結果』をもう一度声に出す",
];

export default function TechInterviewPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/tech-interview/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "技術面接対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の技術面接対策【質問テーマと回答の組み立て方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | よく問われるテーマ領域・回答の型・逆質問例
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エンジニアの技術面接、何を準備すればいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 技術知識・プロジェクト経験の深掘り・コーディング・システム設計の4領域に備え、経験を「なぜそう判断したか」まで語れるようにするのが軸です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・技術知識は「定義→実務での使い方→トレードオフ」の3点セットで答える</li><li>・プロジェクトは主語を「私」にし、課題→行動→結果と学びの流れで語る</li><li>・30代・40代は技術選定の判断力やチームへの影響、障害対応の実績が重視される</li></ul>
          </div>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["厚生労働省 job tag", "レバテック公表データ"]} />

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職面接は、一般的な面接と違い「技術力を直接確認するプロセス」が含まれます。コーディング、システム設計、技術ディスカッションなど、事前準備の質が内定率を大きく左右します。本記事では、よく問われるテーマ領域と回答の組み立て方を、文例・逆質問・チェックリスト付きで解説します。
          </p>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：30代・40代は「判断の言語化」が最重要</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・問われるのは大きく4領域（技術知識・経験深掘り・コーディング・システム設計）。経験者は<strong>経験深掘りと設計</strong>の比重が高い。</li>
              <li>・回答は「定義／背景 → 自分の判断と行動 → 結果と学び」の型で組み立てると、知識だけでなく判断力を示せる。</li>
              <li>・<strong>逆質問</strong>は技術文化・期待役割を1〜2個用意。これが志望度と思考の解像度を伝える。</li>
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

        {/* テーマ領域 */}
        <section id="themes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よく問われる4つのテーマ領域</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            技術面接で問われる内容は、企業や職種で表現は違っても、おおむね次の4領域に整理できます。どの領域に比重があるかは、求人の役割（メンバー／リード／アーキテクト）によって変わります。
          </p>
          <div className="space-y-4">
            {themes.map((t, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{t.title}</h3>
                <p className="text-sm text-petrol-deep mb-3">{t.desc}</p>
                <div className="bg-white rounded p-3">
                  <p className="text-xs text-slate-600">{t.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 組み立て方 */}
        <section id="structure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">回答の組み立て方フレームワーク</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            技術質問でも経験の深掘りでも、共通して使える型があります。思いついた順に話すのではなく、次の流れに沿うと面接官が理解しやすくなります。
          </p>
          <div className="space-y-3">
            {[
              { n: "1", t: "結論・定義から話す", d: "まず聞かれたことへの結論（または用語の定義）を一文で述べる。前置きを長くしない。" },
              { n: "2", t: "背景・選択肢を示す", d: "なぜその論点が生じたか、どんな選択肢があったかを簡潔に補足する。" },
              { n: "3", t: "自分の判断と行動を語る", d: "主語を『私』にして、何をどう判断し実装したかを具体的に。チームの成果と自分の貢献を区別する。" },
              { n: "4", t: "結果と学びで締める", d: "結果（できれば数値）と、その経験から得た学びを述べる。学びは次の挑戦への意欲につながる。" },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.t}</h3>
                  <p className="text-sm text-slate-600">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※行動面接（過去の行動を問う質問）では、これを発展させたSTAR法が有効です。詳しくは<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）のガイド</Link>を参照してください。
          </p>
        </section>

        {/* 頻出質問テンプレ */}
        <section id="questions" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出質問と回答の型（テンプレ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下はよく問われる質問への回答例です。具体的な企業・数値はあなた自身の経験に置き換えてください（いずれも一般化したサンプル回答です）。
          </p>
          <div className="space-y-5">
            {answerQuestions.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3">Q. {item.q}</h3>
                <div className="space-y-2 text-sm">
                  <p className="bg-red-50 text-red-800 rounded p-3"><span className="font-bold">NG例: </span>{item.bad}</p>
                  <p className="bg-green-50 text-green-800 rounded p-3"><span className="font-bold">回答例: </span>{item.good}</p>
                  <p className="text-slate-600"><span className="font-bold text-slate-700">ポイント: </span>{item.point}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 逆質問 */}
        <section id="reverse" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">逆質問の例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            「何か質問はありますか？」は意欲と思考の解像度を測る質問でもあります。技術文化や期待役割に踏み込む質問を1〜2個用意しましょう。そのまま使える例文を挙げます。
          </p>
          <ul className="space-y-2">
            {reverseQuestions.map((q, i) => (
              <li key={i} className="flex gap-3 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">Q{i + 1}</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">給与・休日のみの質問は熱意が伝わりにくいため、条件面は内定後やエージェント経由で確認するのが無難です。</p>
        </section>

        {/* スケジュール */}
        <section id="schedule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術面接対策のスケジュール（2ヶ月プラン）</h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="bg-petrol-soft text-blue-800 text-xs font-bold px-3 py-1 rounded-full shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接前日・当日チェックリスト</h2>
          <ul className="space-y-2">
            {dayChecklist.map((c, i) => (
              <li key={i} className="flex gap-3 items-start bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 30代40代視点 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の技術面接視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代の技術面接は、若手と同じ土俵で戦う必要はありません。アルゴリズムの瞬発力よりも、<strong>技術選定の判断力・チームへの影響・品質や運用の実績</strong>が評価されます。レバテックの公表データでは、正社員SEの平均年収は30代で約499万円、40代で約618万円（2025年）とされ、経験に応じた処遇が前提となっています。
            </p>
            <p>
              一方で「マネジメントしかしていない」「特定の古い技術しか触っていない」と見られると不利になります。面接では、最近キャッチアップした技術や、コードに今も触れている事実を一言添えると、現役感を示せます。
            </p>
            <p>
              また、過去の細部を完璧に覚えている必要はありません。記憶が曖昧な数値を断定するより、<strong>設計判断と学びを正確に語る</strong>方が信頼されます。経験の棚卸し（どの案件で何を判断したか）を事前に整理しておくことが、ミドル世代の最大の準備です。
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
          <h2 className="text-xl font-bold mb-3">面接対策もエージェントがサポート</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接傾向や技術質問のシミュレーションまでサポートしてくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
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
