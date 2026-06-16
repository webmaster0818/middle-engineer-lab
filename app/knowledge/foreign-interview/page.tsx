import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "外資系IT企業の面接対策【選考フロー・想定問答】";
const DESCRIPTION =
  "外資系IT企業の面接対策を、選考フローの特徴・コーディング/システムデザイン/行動面接の準備・想定問答・英語面接への備えまで実践的に解説。30代40代エンジニアが外資転職で評価されるための準備をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：外資系面接の攻略方針" },
  { id: "flow", label: "外資系IT企業の選考フロー" },
  { id: "rounds", label: "面接ラウンド別の対策" },
  { id: "behavioral", label: "行動面接（カルチャーフィット）対策" },
  { id: "qa", label: "想定問答の例" },
  { id: "midlife", label: "30代・40代が外資で評価されるには" },
  { id: "ng", label: "外資系面接でのNG行動" },
  { id: "faq", label: "よくある質問" },
];

const flowSteps = [
  { num: "1", title: "書類選考・リクルータースクリーニング", desc: "英文レジュメや職務経歴書を確認。社内リクルーターやエージェントとの軽い面談で、経歴・志望・英語力をすり合わせます。" },
  { num: "2", title: "テクニカルスクリーニング", desc: "オンラインのコーディングテストや、エンジニアとの電話／ビデオ面接で技術力を確認します。アルゴリズムや実装力が問われます。" },
  { num: "3", title: "オンサイト／バーチャルオンサイト", desc: "複数ラウンドを連続実施。コーディング、システムデザイン、行動面接などを各回で評価します。外資系の本丸です。" },
  { num: "4", title: "最終調整・オファー", desc: "採用判定の後、リクルーターやエージェント経由で条件交渉。年収・株式報酬・サインオンなどを総合的にすり合わせます。" },
];

const rounds = [
  {
    title: "コーディング面接",
    desc: "アルゴリズムとデータ構造を問う問題が中心。考える過程を声に出し（think aloud）、計算量を意識しながら解くのが評価ポイントです。いきなり書き始めず、前提確認→方針説明→実装→テストの順で進めます。",
  },
  {
    title: "システムデザイン面接",
    desc: "大規模システムの設計力を問います。要件の明確化、コンポーネント分割、スケーラビリティやトレードオフの説明が求められます。経験豊富なミドル層が差をつけやすいラウンドです。",
  },
  {
    title: "行動面接（Behavioral）",
    desc: "過去の経験から人物像とカルチャーフィットを見ます。STAR（状況・課題・行動・結果）でエピソードを構造化し、企業のバリューに沿った具体例を準備します。",
  },
  {
    title: "リーダーシップ／専門ディープダイブ",
    desc: "職位が上がるほど、リーダーシップや専門領域の深掘りが増えます。意思決定の理由、関係者の巻き込み、失敗からの学びを語れるようにしておきます。",
  },
];

const qaExamples = [
  {
    q: "Tell me about yourself.（自己紹介してください）",
    a: "現在の役割、得意領域、直近の代表的な成果を1〜2分で簡潔に。職務経歴を時系列で全部話すのではなく、応募ポジションに関連する経験を選んで構成します。",
  },
  {
    q: "Tell me about a challenging project you led.（困難だったプロジェクトについて）",
    a: "STARで構造化。状況と課題を簡潔に説明し、自分が取った具体的な行動と、定量的な結果まで語ります。チームをどう巻き込んだかも重要です。",
  },
  {
    q: "Tell me about a time you disagreed with a teammate.（意見が対立したとき）",
    a: "対立そのものより、どう建設的に合意形成したかを示します。相手の主張を理解し、データや事実で議論を前に進めた経験が好まれます。",
  },
  {
    q: "Why do you want to join us?（なぜ当社か）",
    a: "プロダクト・技術・カルチャーへの具体的な関心を示します。企業のバリューや事業に触れ、自分の経験がどう貢献できるかまで接続すると説得力が増します。",
  },
  {
    q: "Tell me about a failure and what you learned.（失敗とそこからの学び）",
    a: "失敗を隠さず、原因の分析と、その後どう改善したかをセットで語ります。再発防止の仕組み化まで話せると、成熟したエンジニアとして評価されます。",
  },
];

const ngActions = [
  { title: "黙って解き始める", desc: "コーディング面接で前提確認も説明もなく実装に入るのは減点。思考プロセスを共有しながら進めるのが外資の評価軸です。" },
  { title: "成果を主語『私たち』で曖昧にする", desc: "チームの成果は大切ですが、自分が具体的に何をしたかを『I』で明確に語らないと、貢献が伝わりません。" },
  { title: "カルチャー研究を怠る", desc: "外資系はバリューやリーダーシップ原則を重視します。それを踏まえないエピソード選びは響きません。" },
  { title: "英語の準備を後回しにする", desc: "技術力が高くても、英語で意図が伝わらないと評価されません。想定問答を声に出して練習しておきます。" },
  { title: "逆質問を用意しない", desc: "外資系でも逆質問は重視されます。チーム・技術・成長機会について具体的な質問を準備しましょう。" },
];

const faqs = [
  {
    q: "外資系IT企業の面接は日本企業と何が違いますか？",
    a: "選考が複数ラウンド構成で、コーディングやシステムデザインといった技術面接の比重が大きいのが特徴です。また、行動面接で企業のバリューやリーダーシップ原則に沿った具体的なエピソードを深掘りされます。年功序列より実力・成果が重視され、自分の貢献を『I』で明確に語ることが求められます。",
  },
  {
    q: "外資系の面接は必ず英語ですか？",
    a: "ポジションやチーム構成によります。日本オフィス・日本市場向けのチームでは日本語中心のこともありますが、海外チームと連携する役割やグローバル職では英語面接が一般的です。求人票や事前のリクルーター面談で言語を確認し、英語の可能性がある場合は想定問答を準備しておきましょう。",
  },
  {
    q: "コーディング面接ではどんな問題が出ますか？",
    a: "アルゴリズムとデータ構造を扱う問題が中心です。配列・文字列・木・グラフ・動的計画法などの典型問題を、計算量を意識して解けるようにしておきます。重要なのは正解だけでなく、前提確認・方針説明・テストまでの進め方と、考える過程を声に出して共有することです。",
  },
  {
    q: "システムデザイン面接の準備はどうすればいいですか？",
    a: "要件の明確化から始め、コンポーネント分割、データの流れ、スケーラビリティ、トレードオフの説明という流れを練習します。経験豊富なミドル層は、実務での設計判断を具体例として語れる強みがあります。正解は一つではないため、選択の理由を論理的に説明できることが評価につながります。",
  },
  {
    q: "30代・40代でも外資系IT企業に転職できますか？",
    a: "可能です。外資系は年齢より実力・成果を重視するため、設計力・リーダーシップ・専門性を示せれば年代は不利になりにくいです。むしろシステムデザインやリーダーシップを問うラウンドでは、経験の厚みが武器になります。英語と技術面接の準備を整え、自分の貢献を具体的に語れるようにしておきましょう。",
  },
  {
    q: "行動面接のエピソードはいくつ用意すべきですか？",
    a: "リーダーシップ、対立の解決、失敗からの学び、困難な課題の達成など、テーマ別に5〜8個用意しておくと安心です。各エピソードはSTARで構造化し、応募先のバリューに紐づけられるようにしておきます。1つのエピソードを複数の質問に応用できるよう、汎用性を持たせるのもコツです。",
  },
  {
    q: "外資系の選考対策はエージェントに頼れますか？",
    a: "外資系・ハイクラスに強いエージェントなら、選考フローの傾向、過去の面接形式、求められる人物像などの情報を提供してくれます。英文レジュメの添削や条件交渉の代行も期待できます。外資転職は情報戦の側面が強いため、専門性の高いエージェントを併用すると準備の精度が上がります。",
  },
];

export default function ForeignInterviewPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/foreign-interview/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "外資系IT企業の面接対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          外資系IT企業の面接対策【選考フロー・想定問答】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 選考フローと各ラウンドの準備を実践解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          外資系IT企業の面接は、日本企業とは選考の構造も評価軸も大きく異なります。複数ラウンドの技術面接、バリューに沿った行動面接、そして実力・成果を重視する文化への理解が欠かせません。本記事では、選考フローの全体像、ラウンド別の対策、想定問答、ミドル層が評価されるための準備まで、実践的に解説します。
        </p>

        <DataNote surveyedAt="2026年6月" />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：外資系面接の攻略方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              外資系IT企業の面接は、<strong>「技術面接（コーディング・システムデザイン）」と「行動面接（バリュー）」の両輪</strong>で評価されます。技術力に加え、自分の貢献を『I』で明確に語り、企業のバリューに沿ったエピソードを準備することが鍵です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              選考は複数ラウンド構成で、思考プロセスを声に出して共有する姿勢が重視されます。実力・成果を重んじる文化のため、年齢より「何ができるか」が問われます。英語面接の可能性も見据え、想定問答を声に出して準備しておきましょう。
            </p>
          </div>
        </section>

        {/* 選考フロー */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">外資系IT企業の選考フロー</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            企業や職位によって差はありますが、外資系IT企業の選考は概ね次の流れで進みます。
          </p>
          <div className="space-y-4">
            {flowSteps.map((item, i) => (
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
        </section>

        {/* ラウンド別 */}
        <section id="rounds" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接ラウンド別の対策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            オンサイト面接は複数ラウンドで構成されます。それぞれ評価軸が異なるため、ラウンドごとに準備しましょう。
          </p>
          <div className="space-y-4">
            {rounds.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            各ラウンドの詳細は
            <Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>
            ・
            <Link href="/knowledge/system-design/" className="text-petrol hover:underline">システムデザイン面接</Link>
            も合わせてご覧ください。
          </p>
        </section>

        {/* 行動面接 */}
        <section id="behavioral" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">行動面接（カルチャーフィット）対策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系は企業ごとに明文化されたバリューやリーダーシップ原則を持つことが多く、行動面接ではそれに沿った具体例が問われます。次の準備が有効です。
          </p>
          <ul className="space-y-3">
            {[
              "応募先のバリュー・リーダーシップ原則を事前に読み込み、自分の経験と紐づけておく。",
              "エピソードはSTAR（状況・課題・行動・結果）で構造化し、結果は可能な限り定量化する。",
              "成果は『私たち』ではなく『私』を主語に、自分の貢献を明確に語る。",
              "リーダーシップ・対立解決・失敗からの学びなど、テーマ別に複数のエピソードを準備する。",
              "深掘り質問（なぜそうしたか、他の選択肢は）を想定し、判断の理由を説明できるようにする。",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 items-start border border-slate-200 rounded-lg p-4">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span className="text-sm text-slate-600 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            STARの組み立て方は
            <Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接対策ガイド</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 想定問答 */}
        <section id="qa" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">想定問答の例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系の行動面接でよく問われる質問と、回答を組み立てるポイントです。
          </p>
          <div className="space-y-4">
            {qaExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.q}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ミドル */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が外資で評価されるには</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">設計力・専門性で差をつける</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                システムデザインや専門ディープダイブのラウンドは、実務経験の厚いミドル層が力を発揮できる場です。実際に下した設計判断とその理由を、具体例として語れるよう整理しておきましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リーダーシップを成果で示す</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                外資系は職位が上がるほどリーダーシップを重視します。チームをどう巻き込み、どんな成果を出したかを、バリューに沿ったエピソードで語れると評価が高まります。年齢ではなく実績で勝負しましょう。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            英語面接が想定される場合は
            <Link href="/knowledge/english-interview/" className="text-petrol hover:underline">英語面接の準備</Link>
            も合わせて対策してください。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">外資系面接でのNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">外資転職はハイクラス特化エージェントへ</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資・グローバル求人に強いエージェントなら、選考傾向や英文レジュメ対策まで支援してくれます。
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
              { name: "英語面接の準備", href: "/knowledge/english-interview/" },
              { name: "システムデザイン面接", href: "/knowledge/system-design/" },
              { name: "行動面接（ビヘイビア）対策", href: "/knowledge/behavioral/" },
              { name: "海外で働くエンジニア転職", href: "/knowledge/overseas/" },
              { name: "面接の逆質問", href: "/knowledge/reverse-questions/" },
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
