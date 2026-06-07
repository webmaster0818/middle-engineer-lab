import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "日系→外資系IT企業への転職ガイド｜英語要件と選考の違い",
  description:
    "日系から外資系IT企業へ移行するためのスキルギャップ、英語要件、コーディング・システムデザイン面接など選考プロセスの違い、職務経歴書の見せ方を30代・40代視点で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：選考対策と英語の準備期間を見込めば現実的" },
  { id: "selection", label: "日系と外資系の選考プロセスの違い" },
  { id: "gap", label: "日系経験とのスキルギャップ比較表" },
  { id: "english", label: "求められる英語力の目安" },
  { id: "fit", label: "外資系ITが向いている人／向いていない人" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中にできる準備）" },
  { id: "resume", label: "職務経歴書（レジュメ）での見せ方（Before/After）" },
  { id: "companies", label: "代表的な外資系IT企業" },
  { id: "salary", label: "年収の考え方" },
  { id: "agent", label: "活用したい転職サービス" },
  { id: "middle", label: "30代・40代が外資系ITを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const selectionRows = [
  { phase: "書類", jp: "職務経歴書（日本語）。在籍年数・役職を重視", fg: "英文レジュメ（1〜2枚）。成果を数値で簡潔に。リファラルが有利" },
  { phase: "技術選考", jp: "経歴ベースの技術質問・課題が中心", fg: "コーディング面接（アルゴリズム）が標準。複数回課されることも" },
  { phase: "設計選考", jp: "実務経験のヒアリング中心", fg: "システムデザイン面接で大規模設計の議論を求められる" },
  { phase: "人物評価", jp: "志望動機・協調性・カルチャー", fg: "行動面接（過去の行動を深掘り）。STAR法での回答が定石" },
  { phase: "言語", jp: "原則日本語", fg: "ポジションにより英語面接。日本チーム配属なら日本語のみの場合も" },
  { phase: "評価軸", jp: "ポテンシャル・在籍前提の長期育成も加味", fg: "成果主義。役割（ジョブ）に対する即戦力性を重視" },
];

const gapRows = [
  { area: "アルゴリズム実装力", jp: "実務では問われないことが多い", fg: "コーディング面接で必須。日常的な対策が要る", gap: "大" },
  { area: "システムデザイン", jp: "実務経験として保有", fg: "面接で言語化・議論する力が別途必要", gap: "中" },
  { area: "英語コミュニケーション", jp: "不要なことが多い", fg: "ポジションによりビジネスレベル必須", gap: "大〜中" },
  { area: "成果の数値化", jp: "プロセス・役割で語りがち", fg: "インパクトを数値で示すレジュメ文化", gap: "中" },
  { area: "自律的な働き方", jp: "指示・調整を重視", fg: "自分でスコープを定義し成果を出す自走力", gap: "中" },
  { area: "技術力そのもの", jp: "日系で十分な実装経験あり", fg: "土台は通用する。見せ方の翻訳が中心", gap: "小" },
];

const englishRows = [
  { level: "日本チーム配属（国内SaaS日本法人など）", req: "面接は日本語のみのケースもあり。ドキュメント読解レベルの英語" },
  { level: "グローバルチームと協働するSDE", req: "ビジネスレベルの読み書き＋会議での英語ディスカッション" },
  { level: "マネージャー・スタッフ級", req: "英語での交渉・プレゼンができるビジネスレベルが前提になりやすい" },
];

const skills = [
  { num: "1", title: "コーディング面接対策", desc: "アルゴリズムとデータ構造（配列・ハッシュ・木・グラフ、二分探索、DFS/BFS、動的計画法）を、オンラインジャッジで反復します。日系実務では使わない筋肉のため、本番の数ヶ月前から計画的に積み上げるのが現実的です。" },
  { num: "2", title: "システムデザインの言語化", desc: "実務での設計経験を、面接で議論できる形に言語化します。スケーラビリティ、キャッシュ、データ分割、可用性などの観点で『なぜその設計にしたか』を説明できるよう整理しておきます。" },
  { num: "3", title: "英語のアウトプット", desc: "リーディング（技術記事・ドキュメント）に加え、スピーキングとライティングを鍛えます。技術的な内容を英語で説明する練習が、面接でも実務でも直接効きます。" },
  { num: "4", title: "行動面接（STAR法）の準備", desc: "過去の経験を Situation・Task・Action・Result の型で整理します。リーダーシップや困難の克服など、企業が重視する観点ごとにエピソードを用意しておきます。" },
  { num: "5", title: "英文レジュメとリファラル", desc: "英文レジュメは成果を数値で簡潔に。あわせて、外資系IT企業に在籍する知人やコミュニティ経由のリファラル（社員紹介）ルートを確保しておくと、書類通過率が大きく変わります。" },
];

const steps = [
  { num: "1", title: "ターゲット企業と必要英語レベルの特定", desc: "外資系ITと一括りにせず、日本チーム中心か・グローバル協働かで必要な英語レベルが変わります。まず狙う企業・ポジションを絞り、求められる選考形式と英語要件を把握します。" },
  { num: "2", title: "英語の底上げを先行スタート", desc: "英語は成果が出るまで時間がかかるため、最初に着手します。技術英語のリーディングと、会議想定のスピーキングを並行して継続します。" },
  { num: "3", title: "コーディング面接を計画的に対策", desc: "日々の積み上げが効く領域です。難易度を段階的に上げ、時間制限つきで本番形式の練習を重ねます。" },
  { num: "4", title: "システムデザイン・行動面接の準備", desc: "実務経験の言語化と、STAR法でのエピソード整理を進めます。模擬面接で英語アウトプットと同時に鍛えると効率的です。" },
  { num: "5", title: "リファラル・スカウト経由で応募", desc: "リファラルや外資特化エージェント・スカウト経由は、書類段階の通過率に直結します。在職中からネットワーキングとスカウト登録を進めておきます。" },
];

const faqs = [
  {
    q: "外資系IT企業に必要な英語力は？",
    a: "ポジションによって大きく異なります。日本チーム配属で顧客・チームが日本中心なら面接が日本語のみのケースもありますが、グローバルチームと協働するエンジニアやマネージャー級では、英語での技術ディスカッション・交渉ができるビジネスレベルが前提になりやすいです。まず志望ポジションの実態を確認することが重要です。",
  },
  {
    q: "コーディング面接の対策方法は？",
    a: "アルゴリズムとデータ構造の反復演習が基本です。配列・ハッシュ・木・グラフといったデータ構造と、二分探索・DFS/BFS・動的計画法などのアルゴリズムを、時間制限つきで本番形式の練習に落とし込みます。日系実務では使わない領域のため、本番の数ヶ月前から計画的に積み上げるのが現実的です。",
  },
  {
    q: "システムデザイン面接とは？",
    a: "大規模システムの設計力を問う面接です。実在サービスを題材に、スケーラビリティ・可用性・データ分割・キャッシュなどの観点で設計を議論します。実務での設計経験を『なぜその判断をしたか』まで言語化できるよう整理しておくことが対策になります。詳しくはシステムデザイン面接の解説記事も参照してください。",
  },
  {
    q: "外資系はすぐ解雇される？",
    a: "日本法人での雇用には日本の労働法が適用されるため、簡単な解雇はできません。一方で本社方針によるレイオフ（整理解雇）の影響を受ける可能性は日系より相対的に高いと言われます。成果主義の文化であることは事実ですが、過度に不安視するより、成果を出し続けられる環境かを面談で見極めることが大切です。",
  },
  {
    q: "日系の経歴は外資系で評価される？",
    a: "技術力そのものは通用します。ポイントは見せ方の翻訳で、日系で語りがちな『役割・プロセス』ではなく、成果を数値（インパクト）で示すレジュメ文化に合わせることです。日系での大規模開発や運用経験は、システムデザイン面接で強みになります。",
  },
  {
    q: "外資系IT企業の働き方は？",
    a: "一般に成果主義で、リモートやフレックスなど働き方の自由度が高い傾向があります。その分、自分でスコープを定義し成果を出す自走力が求められます。日系の指示・調整中心の働き方からのギャップを理解し、面談で実態を確認しておくと入社後のミスマッチを避けられます。",
  },
  {
    q: "外資系ITへの転職でおすすめのサービスは？",
    a: "外資・グローバル企業に強い専門エージェントと、外資系からの直接スカウトが届くハイクラススカウトサービスの併用が現実的です。ビズリーチは年収750万円以上をハイクラスと定義し外資・管理職に強いとされます。求人は時期で変動するため各公式サイトで最新を確認してください。",
  },
];

export default function DomesticToForeignPage() {
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
      <ArticleJsonLd
        title="日系→外資系IT企業への転職ガイド｜英語要件と選考の違い"
        description="日系から外資系IT企業へ移行するためのスキルギャップ、英語要件、コーディング・システムデザイン面接など選考プロセスの違い、職務経歴書の見せ方を30代・40代視点で解説します。"
        url="/career/domestic-to-foreign/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "日系→外資系IT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          日系→外資系IT企業への転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 英語要件と選考の違いを押さえる
        </p>

        <p className="text-slate-600 leading-relaxed mb-6">
          外資系IT企業への転職は、日系とは選考プロセスそのものが異なります。コーディング面接・システムデザイン面接・行動面接（英語の場合あり）という独自の選考に対応できれば、ミドル層でも十分に現実的な選択肢です。本記事では、日系経験とのスキルギャップ、英語要件、選考の違い、レジュメの見せ方を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ビズリーチ公式（ハイクラス定義 年収750万円以上・外資/管理職に強い）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：選考対策と英語の準備期間を見込めば現実的</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-2">
              日系での技術力は外資でも通用します。ボトルネックは<strong>選考形式の違い（コーディング面接・システムデザイン・行動面接）</strong>と<strong>英語要件</strong>の2点で、ここを計画的に準備できれば30代・40代でも狙えます。
            </p>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>英語は成果が出るまで時間がかかるため最優先で着手する</li>
              <li>日本チーム配属なら英語面接がない求人もあり、英語ハードルは可変</li>
              <li>リファラル（社員紹介）が書類通過率を大きく左右する</li>
            </ul>
          </div>
        </section>

        <section id="selection" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日系と外資系の選考プロセスの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系IT転職で最初に押さえるべきは、選考の構造が日系と根本的に異なる点です。技術力があっても選考形式に慣れていないと通過しにくいため、違いを理解したうえで対策します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フェーズ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">日系の傾向</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">外資系の傾向</th>
                </tr>
              </thead>
              <tbody>
                {selectionRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.phase}</td>
                    <td className="px-4 py-3 text-slate-600">{row.jp}</td>
                    <td className="px-4 py-3 text-slate-600">{row.fg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            各面接の具体的な対策は
            <Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>、
            <Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システムデザイン面接</Link>、
            <Link href="/knowledge/behavioral/" className="text-blue-600 hover:underline">行動面接（ビヘイビア面接）</Link>を参照してください。
          </p>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日系経験とのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日系での経験を起点に、外資系で追加的に求められる要素を整理すると、対策の優先順位が見えてきます。技術力の土台は通用するため、ギャップが大きいのは「アルゴリズム実装力」と「英語」に集約されます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">日系での状態</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">外資系で必要なこと</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.jp}</td>
                    <td className="px-4 py-3 text-slate-600">{row.fg}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="english" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる英語力の目安</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「外資系＝高い英語力が必須」と一括りにするのは誤解です。配属チームと役割によって必要レベルは大きく変わります。まず志望ポジションの実態を確認しましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジションのタイプ</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">英語要件の目安</th>
                </tr>
              </thead>
              <tbody>
                {englishRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.level}</td>
                    <td className="px-4 py-3 text-slate-600">{row.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            英語を軸にしたキャリア設計は
            <Link href="/purpose/english/" className="text-blue-600 hover:underline">英語を活かすエンジニア転職</Link>もあわせてご覧ください。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">外資系ITが向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "成果で評価される環境で、自律的に仕事を進めたい",
                  "コーディング面接・英語学習に数ヶ月単位で投資できる",
                  "技術力を市場価値（総報酬）に直結させたい",
                  "グローバルなチーム・プロダクトに関わりたい",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <p className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "アルゴリズム面接や英語学習に時間を割けない事情がある",
                  "指示・調整中心の働き方の方が力を発揮できる",
                  "長期の雇用安定をレイオフリスクより強く優先したい",
                  "成果を数値で示すレジュメ文化に抵抗がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">−</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {skills.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
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

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-sm shrink-0">
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

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書（レジュメ）での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系のレジュメは「役割」ではなく「成果のインパクト」を数値で示すのが基本です。日系の職務経歴書をそのまま英訳するのではなく、成果ベースに書き換えます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-red-200 bg-red-50 rounded-lg p-5">
              <p className="font-bold text-red-700 text-sm mb-2">Before（日系的な役割の記述）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「ECサイトのバックエンド開発チームに所属し、APIの設計・実装・運用を担当。チームでの開発に従事した。」
              </p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-2">After（成果インパクトで示す）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「ECのバックエンドAPIをリアーキテクトし、ピーク時のレスポンスを改善（p95を一定基準まで短縮）。負荷分散の設計を主導し、セール時の障害を解消。設計判断の理由を含めてドキュメント化し、チームに展開。」
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            ※数値は自身の実績に基づき正確に記載してください。職務経歴書の基本構成は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>を参照。
          </p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的な外資系IT企業</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            各社の採用傾向・技術スタック・選考フローは企業ページで個別に解説しています。応募前に各社の実態を確認しておくと選考対策の精度が上がります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google（グーグル）の転職難易度・年収", href: "/company/google/" },
              { name: "Amazon（アマゾン）の転職難易度・年収", href: "/company/amazon/" },
              { name: "Microsoft（マイクロソフト）の転職", href: "/company/microsoft/" },
              { name: "Meta（メタ）の転職難易度・年収", href: "/company/meta/" },
              { name: "Apple（アップル）の転職", href: "/company/apple/" },
              { name: "メルカリの転職（グローバル開発環境）", href: "/company/mercari/" },
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

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系IT企業の総報酬（TC＝Total Compensation）は、基本給に加えてRSU（株式報酬）やボーナスで構成されることが多く、額面の幅が大きいのが特徴です。提示額を比較する際は、基本給だけでなく株式報酬の付与条件・ベスティング期間まで含めて評価する必要があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            国内市場の水準の参考として、レバテック公表の正社員SEの年代別平均年収は30代約499万円・40代約618万円、年収1,000万円以上の割合は30代8.01%・40代12.67%です（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）。外資系のシニア以上のポジションは、ビズリーチがハイクラスと定義する年収750万円以上（2026年6月時点・二次情報）の帯に入ることが多くなります。具体的なレンジは各企業ページと公式求人で確認してください。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            年収アップ全般の戦略は
            <Link href="/purpose/salary-up/" className="text-blue-600 hover:underline">年収UPしたいエンジニアの戦略</Link>、
            交渉の進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>を参照してください。
          </p>
        </section>

        <section id="agent" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活用したい転職サービス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系IT求人は、リファラル・スカウト・外資特化エージェント経由が中心です。複数を併用して接点を増やすのが現実的です。
          </p>
          <div className="space-y-3">
            {[
              { name: "ビズリーチ", point: "ハイクラス・スカウト型。年収750万円以上をハイクラスと定義し、外資・管理職に強いとされる。外資系企業やヘッドハンターからの直接スカウトが届きやすい（2026年6月時点・二次情報）。" },
              { name: "レバテックキャリア", point: "IT/Web特化で高年収求人比率が高い（600万円以上が公開求人の約8割との二次情報）。外資系SaaSの日本法人など技術志向の求人を探しやすい（2026年6月時点）。" },
              { name: "リクルートエージェントIT", point: "国内最大級の求人数。外資系日本法人の求人も含め、母数を広げて比較したい場合の併用先として有効（2026年6月時点）。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が外資系ITを目指すなら</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            外資系は成果主義のため、年齢より「即戦力としてのスキルと実績」が評価されます。日系での大規模開発・運用経験は、システムデザイン面接でむしろ強みになります。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "ボトルネックになりやすいのは英語とコーディング面接。仕事を続けながら数ヶ月単位で計画的に準備する",
              "英語面接がない日本チーム配属の求人から入り、社内でグローバルポジションへ広げるルートも現実的",
              "日系の運用・大規模設計の経験はシステムデザイン面接で差別化できる資産になる",
              "リファラルが選考を左右する。コミュニティやLinkedInで在職中から接点を作っておく",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">外資系IT転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資系IT企業への転職に強いサービスが、選考対策からサポートします。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "英語を活かすエンジニア転職", href: "/purpose/english/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システムデザイン面接", href: "/knowledge/system-design/" },
              { name: "行動面接（ビヘイビア面接）", href: "/knowledge/behavioral/" },
              { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
