import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "テックゴーの無料キャリア面談とは？流れ・準備・断り方【2026年】";
const DESCRIPTION =
  "テックゴー（TechGo）の無料キャリア面談を徹底解説。本当に無料なのか（公式FAQの根拠）、申し込みから面談までの流れ、オンライン面談の形式・時間帯、事前準備、転職を決めていない場合の利用可否、断り方まで出典付きでまとめます。";
const URL = "/review/techgo-consultation/";
const OFFICIAL_URL = "https://tech-go.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/techgo-consultation/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論：テックゴーのキャリア面談は完全無料" },
  { id: "basic", label: "無料キャリア面談の基本データ" },
  { id: "why-free", label: "なぜ無料なのか（費用の仕組み）" },
  { id: "flow", label: "申し込みから面談までの流れ" },
  { id: "content", label: "面談で話すこと・聞かれること" },
  { id: "prep", label: "面談前の準備（やっておくと精度が上がる）" },
  { id: "questions", label: "面談で使える質問例10選" },
  { id: "undecided", label: "転職を決めていなくても利用できる？" },
  { id: "after", label: "面談後の流れ（利用を続ける場合）" },
  { id: "decline", label: "断り方・利用をやめたい場合" },
  { id: "worry", label: "面談にまつわる不安への正直な回答" },
  { id: "compare", label: "他サービスの無料面談との使い分け" },
  { id: "middle", label: "30代・40代が面談で確認すべきこと" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["料金", "完全無料（登録〜キャリアカウンセリング〜求人紹介〜面接対策〜条件交渉〜入社後フォローまで。公式FAQ明記）"],
  ["面談形式", "オンライン中心（Zoom・Google Meetなど。公式FAQ）。自宅から参加可能"],
  ["実施時間帯", "平日のほか、平日夜間・土曜も実施（公式FAQ。日曜・対面の可否は明記なし）"],
  ["所要時間", "公式の明記なし。一般的な転職エージェントの初回面談は30分〜1時間程度が目安"],
  ["対象", "ITエンジニア経験者中心（SE・PG・社内SE・Web系・インフラ・データ/AI・PM/PL・QA）"],
  ["転職意向", "固まっていない段階の相談も可（公式FAQ明記）"],
  ["申し込み", "公式サイトのフォームから（公式は「最短60秒」と案内）"],
  ["運営", "株式会社MyVision（有料職業紹介 13-ユ-314719）"],
];

const flowSteps = [
  {
    step: "STEP1",
    title: "公式サイトから申し込み",
    body: "公式サイトの無料相談フォームから登録します（公式は「最短60秒」と案内）。経験職種や希望勤務地などの基本情報を入力します。",
  },
  {
    step: "STEP2",
    title: "日程調整の連絡",
    body: "登録後、日程調整の連絡が来ます。在職中の場合はこの段階で平日夜間・土曜など希望の時間帯を伝えましょう。日曜や対面を希望する場合の可否もここで確認できます。",
  },
  {
    step: "STEP3",
    title: "オンラインで無料キャリア面談",
    body: "ZoomやGoogle Meetなどのオンラインで、キャリアアドバイザーと面談します。経歴・希望条件・転職希望時期のヒアリングをもとに、転職プランや紹介可能な求人の方向性をすり合わせます。",
  },
  {
    step: "STEP4",
    title: "求人紹介へ（希望する場合）",
    body: "面談内容をもとに、非公開求人を含む求人の紹介を受けられます。この時点で転職活動を本格化するかどうかは自分で選べます。",
  },
];

const prepItems = [
  {
    title: "職務経歴の要点整理（完璧な職務経歴書は不要）",
    body: "面談時点で完成した職務経歴書は必須ではありませんが、「担当してきたシステム・使用技術・役割（規模感）」を口頭で説明できるよう整理しておくと、紹介求人の精度が上がります。関わったプロジェクトを時系列で3〜5行ずつメモしておくだけでも十分です。",
  },
  {
    title: "希望条件とNG条件の言語化",
    body: "希望年収・働き方（リモート希望の有無）・勤務地・やりたくない仕事（NG条件）を事前に決めておきましょう。特にNG条件を先に伝えておくと、ミスマッチな求人紹介を減らせます。",
  },
  {
    title: "転職希望時期の目安",
    body: "「すぐにでも」「半年以内」「良い求人があれば」のどれに当たるかを伝えられるようにしておきます。テックゴーの公式FAQでは転職期間の目安は平均1〜3ヶ月程度とされているため、逆算して動く時期を相談できます。",
  },
  {
    title: "面談で確認したい質問リスト",
    body: "「自分の経歴だと想定年収レンジはどのくらいか」「同年代・同職種の転職事例はあるか」「紹介求人はどんな企業が中心か」など、聞きたいことを先にメモしておくと、限られた面談時間で市場価値の情報を最大限持ち帰れます。",
  },
];

const faqs = [
  {
    q: "テックゴーのキャリア面談は本当に無料ですか？後から費用を請求されませんか？",
    a: "無料です。公式FAQに「サービスは、完全無料でご利用いただけます。ご登録から、キャリアカウンセリング、求人紹介、面接対策、条件交渉、入社までのフォローアップまで」と明記されています。費用は採用企業側が支払う紹介手数料で賄われる仕組みのため、求職者に請求が発生することはありません。",
  },
  {
    q: "面談は土日や夜間でも受けられますか？",
    a: "公式FAQは「平日夜間や土曜日も面談を実施しています」と明記しています。日曜については記載がないため、希望する場合は日程調整の際に確認してください。",
  },
  {
    q: "面談の所要時間はどのくらいですか？",
    a: "公式サイトに所要時間の明記はありません。一般的な転職エージェントの初回面談は30分〜1時間程度が目安のため、余裕を持って1時間ほど確保しておくと安心です。正確な時間は日程調整の連絡時に確認できます。",
  },
  {
    q: "オンライン面談の服装やカメラは？",
    a: "公式に指定の記載はありません。一般的なエージェント面談では服装は自由（私服で問題なし）で、相互理解のためカメラはオンにするのが望ましいとされています。気になる場合は日程調整時に確認しておくと確実です。",
  },
  {
    q: "転職するか決めていなくても面談だけ受けていいですか？",
    a: "問題ありません。公式FAQに、転職の意向が固まっていない段階での相談も可能と明記されています。現在の市場価値や想定年収レンジを知る目的での利用も、エージェント面談の一般的な使い方です。",
  },
  {
    q: "面談後に断りたくなったら、どうすればいいですか？",
    a: "担当アドバイザーにメール等で「転職活動を一旦停止したい」旨を伝えれば大丈夫です。利用停止・退会の具体的な手順は公式サイトに明記がないため、連絡の際に案内してもらってください。個人情報の削除を希望する場合も、その旨を併せて伝えられます。",
  },
  {
    q: "地方在住でもキャリア面談を受けられますか？",
    a: "受けられます。面談はZoom・Google Meetなどのオンラインが中心のため、居住地を問わず参加できます。公式の求人検索も47都道府県すべての勤務地軸で提供されています。希望勤務地の求人がどの程度あるかは、面談時に確認してください。",
  },
  {
    q: "面談は1回だけですか？何度も相談できますか？",
    a: "キャリア面談の回数制限は公式に記載がありません。なお選考段階については、公式が「模擬面接を何度も実施」と明記しており、応募後の面接対策には繰り返し付き合ってもらえる設計です。初回面談後も、状況が変わったタイミングで担当者に相談できます。",
  },
  {
    q: "申し込み後、どのくらいで連絡が来ますか？",
    a: "公式サイトに具体的な日数の明記はありません。登録後に日程調整の連絡が来る流れのため、数日経っても連絡がない場合は迷惑メールフォルダを確認のうえ、再度問い合わせるのが確実です。",
  },
];

const related = [
  { name: "テックゴーの評判・特徴・実績数値の検証", href: "/review/techgo/" },
  { name: "レバテックキャリアの評判（IT特化大手）", href: "/review/levtech/" },
  { name: "転職ドラフトの評判（市場価値を金額で確認）", href: "/review/tenshoku-draft/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
  { name: "職務経歴書の書き方（エンジニア向け）", href: "/knowledge/resume/" },
];

export default function TechgoConsultation() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "テックゴーの無料キャリア面談" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テックゴーの無料キャリア面談とは？流れ・準備・断り方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 ｜ 公式FAQ・サービスページの記載をもとに面談の実務を解説
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          テックゴー（TechGo・株式会社MyVision運営）のキャリア面談は無料なのか、申し込むと何が起きるのか——。本記事では、テックゴーの無料キャリア面談について「本当に無料である根拠」「申し込みから面談までの流れ」「事前準備」「転職を決めていない場合の利用可否」「断り方」まで、公式サイトの記載を出典として実務目線で解説します。公式に記載のない事項は「明記なし」と正直に区別します。
        </p>
        <DataNote
          surveyedAt="2026年7月"
          sources={[
            "テックゴー公式サイト（サービス概要・FAQ・利用の流れ）",
            "株式会社MyVision 会社情報",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              結論：テックゴーのキャリア面談は完全無料。転職未確定でも利用できる
            </h2>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>
                ・<span className="font-bold">料金は完全無料</span>
                。公式FAQが「ご登録から、キャリアカウンセリング、求人紹介、面接対策、条件交渉、入社までのフォローアップまで」無料と明記。
              </li>
              <li>
                ・面談は<span className="font-bold">オンライン中心（Zoom・Google Meet等）で、平日夜間・土曜も実施</span>
                （公式FAQ）。在職中でも受けやすい。
              </li>
              <li>
                ・<span className="font-bold">転職の意向が固まっていない段階の相談も可</span>
                と公式FAQに明記。市場価値の確認目的でも使える。
              </li>
              <li>・断る場合は担当者に連絡すればよく、面談を受けたら転職しなければならない義務はない。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            テックゴー無料キャリア面談の基本データ（2026年7月時点）
          </h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※「公式FAQ」等の注記がある項目はテックゴー公式サイトの記載（2026年7月2日確認）に基づきます。所要時間・服装など公式に明記のない項目は一般的な目安として記載しています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* なぜ無料か */}
        <section id="why-free" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ無料なのか（費用の仕組み）</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              テックゴーの公式FAQは「サービスの利用に費用は発生しますか？」という質問に対し、
              <span className="font-bold text-slate-700">
                「サービスは、完全無料でご利用いただけます。ご登録から、キャリアカウンセリング、求人紹介、面接対策、条件交渉、入社までのフォローアップまで」
              </span>
              と回答しています。キャリア面談だけでなく、その後の選考対策や年収交渉まで一貫して無料です。
            </p>
            <p>
              無料で成り立つのは、転職エージェントが「採用が決まった企業から紹介手数料を受け取る」ビジネスモデルだからです。テックゴーの運営元・株式会社MyVisionは厚生労働省の許可を受けた有料職業紹介事業者（許可番号 13-ユ-314719）で、費用を負担するのは求職者ではなく採用企業側です。「無料」を理由に警戒する必要はなく、これは業界共通の仕組みです。
            </p>
            <p>
              注意点があるとすれば、エージェントは「転職が決まると企業から報酬を得る」構造上、転職を後押しする方向のバイアスが働き得ることです。これはテックゴーに限らず全エージェント共通のため、判断は自分軸で行い、複数サービスの提案を比較するのが健全な使い方です。
            </p>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">申し込みから面談までの流れ</h2>
          <div className="space-y-3">
            {flowSteps.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            なお、テックゴーは面談（キャリア相談）を起点に求人紹介へ進む設計のため、面談を受けずにメールだけで求人リストを受け取る、といった使い方は想定されていません。まず面談で条件をすり合わせるのが利用の前提です。
          </p>
        </section>

        {/* 面談内容 */}
        <section id="content" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談で話すこと・聞かれること</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              公式の利用の流れ（STEP1 キャリア相談）によれば、面談ではキャリアアドバイザーが
              <span className="font-bold text-slate-700">経歴・希望条件・転職希望時期</span>
              などをヒアリングし、一人ひとりに合った転職プランをすり合わせます。具体的には次のような内容が中心になります（一般的なエージェント面談の定番項目を含みます）。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>これまでの経歴・担当システム・使用技術（規模・役割を含む）</li>
              <li>転職理由と、転職で実現したいこと（年収・働き方・技術・キャリアパス）</li>
              <li>希望条件（年収・勤務地・リモート可否）とNG条件</li>
              <li>転職希望時期（すぐ動くか、情報収集段階か）</li>
              <li>その場での相談：想定年収レンジ、紹介可能な求人の方向性</li>
            </ul>
            <p>
              面談は「審査」ではなく条件のすり合わせの場です。取り繕うより、NG条件や不安（ブランク・年齢・技術の古さなど）を正直に伝えたほうが、後の求人紹介の精度が上がります。
            </p>
          </div>
        </section>

        {/* 準備 */}
        <section id="prep" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            面談前の準備（必須ではないが、やっておくと精度が上がる）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            事前準備なしでも面談は受けられますが、次の4点を整理しておくと、限られた時間で得られる情報量が大きく変わります。
          </p>
          <div className="space-y-4">
            {prepItems.map((p, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  {i + 1}. {p.title}
                </h3>
                <p className="text-sm text-petrol-deep">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            職務経歴の整理には
            <Link href="/knowledge/resume/" className="text-petrol-deep underline hover:no-underline">
              エンジニア向け職務経歴書の書き方
            </Link>
            も参考になります。面談後に本格的な書類作成へ進む場合の土台になります。
          </p>
        </section>

        {/* 質問例 */}
        <section id="questions" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            面談で使える質問例10選（コピーして使えます）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            無料キャリア面談は「聞かれる場」であると同時に「聞く場」です。目的別に、そのまま使える質問例をまとめました。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">市場価値を知る</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600">
                <li>私の経歴だと、想定年収レンジはどのくらいですか？根拠となる事例はありますか？</li>
                <li>いま転職市場で、私のスキルセットの需要は上がっていますか？下がっていますか？</li>
                <li>年収を上げるために、この先1年で足すべきスキル・経験は何ですか？</li>
              </ol>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">求人・サービスの実力を見極める</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600" start={4}>
                <li>私に紹介できる求人は何件くらいで、どんな企業が中心ですか？</li>
                <li>独占選考ルートや面接確約求人（公式サイト記載）は、私の経歴でも対象になりますか？</li>
                <li>同年代・同職種で、最近の転職成功事例を教えてください。</li>
                <li>年収交渉はどの段階で、どのように進めてもらえますか？</li>
              </ol>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">進め方をすり合わせる</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600" start={8}>
                <li>私の希望時期だと、いつまでに何をすべきですか？（公式FAQの目安は平均1〜3ヶ月）</li>
                <li>連絡はメール中心・この時間帯でお願いしたいのですが、可能ですか？</li>
                <li>模擬面接は応募先ごとに何度でもお願いできますか？</li>
              </ol>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            特に4〜7の回答が具体的か（事例・件数ベースで答えられるか）は、担当アドバイザーの力量と、このエージェントが自分に合うかを見極める最良の材料になります。
          </p>
        </section>

        {/* 転職未確定 */}
        <section id="undecided" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            転職を決めていなくても利用できる？（情報収集目的の面談）
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              <span className="font-bold text-slate-700">利用できます。</span>
              テックゴーの公式FAQには、転職の意向が固まっていない段階での相談も可能である旨が明記されています。「今の年収は市場相場と比べてどうか」「自分の経歴で狙える求人レンジはどこか」を確認する目的の面談は、エージェントの一般的な使われ方のひとつです。
            </p>
            <p>
              特に30代・40代は、転職するかどうかの判断材料として「動かなかった場合との比較」が重要になります。無料キャリア面談で市場価値の見立てを得てから、当サイトの
              <Link href="/salary/age-salary/" className="text-petrol-deep underline hover:no-underline">
                年代別年収データ
              </Link>
              と突き合わせると、判断の精度が上がります。
            </p>
            <p>
              ただし前述のとおり、エージェントには転職を後押しする構造的なバイアスがあります。「まだ決めていない」ことを面談の冒頭で正直に伝えたうえで利用するのが、お互いにとって誠実な使い方です。
            </p>
          </div>
        </section>

        {/* 面談後 */}
        <section id="after" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談後の流れ（利用を続ける場合）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            面談後に転職活動を進める場合、公式の流れでは「求人紹介・応募先選定（応募手続き代行）→選考対策（模擬面接を何度も実施）→内定獲得・条件交渉→入社」と進みます。公式FAQによれば転職期間の目安は平均1〜3ヶ月程度です。公表実績（年収アップ平均138万円※2025年6〜7月の内定承諾者平均、年収交渉成功率100%※2025年9月時点）を含むサービス全体の評価は、
            <Link href="/review/techgo/" className="text-petrol-deep underline hover:no-underline">
              テックゴーの評判・特徴の検証記事
            </Link>
            にまとめています。
          </p>
        </section>

        {/* 断り方 */}
        <section id="decline" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断り方・利用をやめたい場合</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              面談を受けた後に「今回は動かない」と決めた場合、
              <span className="font-bold text-slate-700">
                担当アドバイザーにメール等で転職活動を停止したい旨を伝えれば問題ありません
              </span>
              。面談を受けたからといって求人に応募する義務はなく、断ったことで費用が発生することもありません（サービス自体が完全無料のため）。
            </p>
            <p>
              伝え方の例：「現職で続けることにしたため、転職活動を一旦停止します。求人のご紹介も停止をお願いします。」——理由を詳しく説明する必要はなく、この程度で十分です。時期を改めて再開したい場合はその旨を添えておくと、再利用がスムーズです。
            </p>
            <p>
              なお、退会（登録解除）や個人情報削除の具体的な手順は公式サイトに明記が見当たらないため（2026年7月確認）、完全な退会を希望する場合は担当者への連絡時に案内してもらってください。個人情報の取り扱いは公式サイトのプライバシーポリシーに基づきます。
            </p>
          </div>
        </section>

        {/* 不安への回答 */}
        <section id="worry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談にまつわる不安への正直な回答</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">「しつこく連絡が来ないか心配」</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                テックゴーの連絡頻度について公式の記載はなく、口コミの蓄積も少ないため断定できません。一般的なエージェント共通の対処法として、面談時に「希望する連絡手段（メール中心など）」と「連絡してよい時間帯」を先に伝えておくと、行き違いを大きく減らせます。転職活動を止めたくなった場合の連絡方法は前項のとおりです。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">「経歴に自信がない・ブランクがある」</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                面談は選考ではないため、経歴を良く見せる必要はありません。むしろブランクや技術の古さを正直に伝えたほうが、現実的に狙える求人レンジの見立てが正確になります。仮に紹介できる求人が少ないと言われた場合、それ自体が「市場からの現在地のフィードバック」として持ち帰る価値のある情報です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">「面談を受けたら応募しないといけない気がする」</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                応募の義務はありません。公式FAQも転職意向が固まっていない段階の相談を認めています。面談後の求人紹介に対して「今回は見送ります」と伝えるのは、エージェント利用として普通のやり取りです。判断を急かされたと感じたら、その場で即答せず持ち帰って構いません。
              </p>
            </div>
          </div>
        </section>

        {/* 使い分け */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスの無料面談との使い分け</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              「まず市場価値を知りたい」という目的なら、アプローチの異なるサービスを組み合わせると見立ての精度が上がります。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold text-slate-700">テックゴーの無料キャリア面談：</span>
                アドバイザーとの対話型。経歴の棚卸しを手伝ってもらいながら、狙える求人レンジと転職プランの見立てを得る。平日夜間・土曜のオンラインで受けられる手軽さが利点。
              </li>
              <li>
                <span className="font-bold text-slate-700">
                  <Link href="/review/levtech/" className="underline hover:no-underline">レバテックキャリア</Link>
                  など大手IT特化の面談：
                </span>
                求人量と企業情報の蓄積が多く、見立てのセカンドオピニオンとして有効。テックゴーの提案と比較することで、担当者の質も相対評価できる。
              </li>
              <li>
                <span className="font-bold text-slate-700">
                  <Link href="/review/tenshoku-draft/" className="underline hover:no-underline">転職ドラフト</Link>
                  のような入札型：
                </span>
                面談ではなくレジュメに対して企業が年収提示つきで指名する形式。「対話の見立て」ではなく「実際の提示額」で市場価値を確認したい人向けで、面談型と補完関係にある。
              </li>
            </ul>
            <p>
              いずれも無料のため、目的（伴走してほしいのか、相場だけ知りたいのか）に合わせて2〜3個を組み合わせるのが、時間対効果の高い進め方です。
            </p>
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが面談で確認すべきこと（当サイトの視点）
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              テックゴーの公表実績は20代平均+120万円・30代平均+160万円と、20〜30代の実績が前面に出ています。30代後半〜40代のミドルエンジニアが無料キャリア面談を受ける場合は、次の3点を面談中に具体的に確認することをおすすめします。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold text-slate-700">同年代の支援実績：</span>
                「40代（または自分の年齢）で、自分と近い経歴の転職事例はあるか」。事例ベースで答えられるかどうかで、その年代への対応力が見えます。
              </li>
              <li>
                <span className="font-bold text-slate-700">紹介求人のレンジ：</span>
                「自分の経歴で紹介できる求人は、年収レンジ・ポジション（プレイヤー／リーダー／管理職）でどのあたりか」。求人1万件以上（公式）の中身が自分に合うかは、ここで判断できます。
              </li>
              <li>
                <span className="font-bold text-slate-700">ITコンサルという選択肢：</span>
                運営のMyVisionグループはITコンサル転職に強みがあります。マネジメント経験のあるミドルは「エンジニアからITコンサルへの転身だと選択肢はどう変わるか」を聞くと、このエージェントならではの情報を引き出せます。
              </li>
            </ul>
            <p>
              面談で得た見立てに納得感がなければ、
              <Link href="/review/levtech/" className="text-petrol-deep underline hover:no-underline">
                レバテックキャリア
              </Link>
              など他のIT特化エージェントの面談も受けて、複数の見立てを比較するのが堅実です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問（テックゴーのキャリア面談）</h2>
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
          <h2 className="text-xl font-bold mb-3">テックゴーの無料キャリア面談を予約する</h2>
          <p className="text-blue-100 text-sm mb-4">
            完全無料・オンライン中心・平日夜間や土曜も実施。転職を決めていない段階の相談も公式FAQで明記されています。
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料キャリア面談を申し込む
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
