import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニアの燃え尽き症候群と転職判断｜休職と転職の見極め方";
const DESCRIPTION =
  "エンジニアの燃え尽き症候群（バーンアウト）のサインをセルフチェック。休職と転職の判断基準、「逃げの転職」の考え方を30代・40代向けに解説します。専門医・産業医への相談前提でまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/burnout/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "checklist", label: "燃え尽きセルフチェック" },
  { id: "signs", label: "見逃しやすい6つのサイン" },
  { id: "causes", label: "エンジニアが燃え尽きる原因" },
  { id: "rest-or-quit", label: "休む・休職・転職の判断フロー" },
  { id: "escape", label: "「逃げの転職」をどう考えるか" },
  { id: "next-env", label: "繰り返さない転職先の選び方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const signs = [
  { num: "1", title: "慢性的な疲労感", desc: "十分に睡眠を取っても疲れが取れない。週末も回復できず、月曜日がつらい状態が数週間続く。" },
  { num: "2", title: "仕事への無関心・冷笑", desc: "以前は興味があった技術やプロダクトに関心が持てない。「どうせ変わらない」という諦めが強くなる。" },
  { num: "3", title: "達成感の低下", desc: "何を成し遂げても満たされない。自分の仕事に意味を感じられず、有能感が下がる。" },
  { num: "4", title: "集中力・判断力の低下", desc: "以前なら半日で終わるタスクに丸一日かかる。ケアレスミスが増える。" },
  { num: "5", title: "身体のサイン", desc: "頭痛、胃腸の不調、不眠、動悸、肩こりなど身体に変化が出る。これは受診を検討すべき重要なサインです。" },
  { num: "6", title: "プライベートへの影響", desc: "趣味を楽しめない、家族との時間に集中できない、休日も仕事のことが頭から離れない。" },
];

const causes = [
  { cause: "長時間労働・恒常的な残業", example: "デスマーチ、納期に追われ続ける状態", action: "労働時間の記録、上司・人事への相談、環境の見直し" },
  { cause: "オンコール・障害対応の負荷", example: "深夜・休日の呼び出しが頻発し休めない", action: "ローテーションの是正を提案、運用体制の見直し" },
  { cause: "コントロール感の欠如", example: "裁量がなく、決定に関与できない", action: "担当範囲の調整、役割の再設計を相談" },
  { cause: "評価・報酬のミスマッチ", example: "成果や負荷が年収・評価に反映されない", action: "市場価値の確認、社内での交渉、転職活動" },
  { cause: "技術的な停滞", example: "レガシー保守のみで学びがない", action: "社内異動、新規プロジェクトへの参画提案" },
  { cause: "人間関係・心理的安全性の低さ", example: "上司やチームとの不和、相談しにくい空気", action: "人事への相談、部署異動の打診" },
];

const escapeChecks = [
  { label: "現職を辞めることで解決する問題と、しない問題を切り分けたか", positive: true },
  { label: "次の環境で「何をしたいか／何を避けたいか」を言語化したか", positive: true },
  { label: "同じ失敗を繰り返さないために、原因を具体化したか", positive: true },
  { label: "「とにかく今すぐ辞めたい」以外の判断材料があるか", positive: true },
];

const faqs = [
  {
    q: "燃え尽き症候群とうつ病の違いは何ですか？",
    a: "燃え尽き症候群（バーンアウト）は主に仕事・役割への慢性的ストレスに起因する状態として語られ、世界保健機関（WHO）のICD-11でも「職業上の現象」と位置づけられています（疾病そのものとは区別）。一方うつ病は生活全般に影響する医学的な疾患です。両者は重なることもあり、自己判断は危険です。症状が続く・身体に出ている場合は、心療内科・精神科などの専門医や産業医に必ず相談してください。本記事は医学的な診断を行うものではありません。",
  },
  {
    q: "燃え尽きのサインが出ています。まず何をすべきですか？",
    a: "まずは休息と受診の検討を最優先にしてください。不眠・頭痛・動悸などの身体症状がある場合は、転職の前に専門医・産業医への相談を。キャリア面の整理はその後で構いません。多くの企業には産業医や相談窓口があり、メンタル面の相談は人事評価に直結しないよう配慮されるのが一般的です。",
  },
  {
    q: "燃え尽きの状態で転職活動をしても良いですか？",
    a: "心身が疲弊した状態では面接でのパフォーマンスが下がり、判断力も鈍ります。可能なら少し回復してから動くのが理想です。難しい場合は、エージェントに登録だけして良い求人が出たら検討する、という負荷の低い進め方もあります。無理に短期で決め切ろうとしないことが、後悔を防ぎます。",
  },
  {
    q: "休職と転職、どちらを選ぶべきですか？",
    a: "一概には言えません。原因が一時的な繁忙や体調で、職場環境自体は悪くないなら休職で回復を図る選択が有効です。原因が長時間労働・評価制度・人間関係など個人では変えられない環境にあり、半年以上改善しないなら転職が現実的な選択になります。診断書が必要な休職は医師の判断が前提です。まず専門医・産業医に相談したうえで、キャリアの整理を進めてください。",
  },
  {
    q: "「逃げの転職」は悪いことですか？",
    a: "つらい環境から離れること自体は正当な自己防衛であり、否定すべきものではありません。問題は「何から逃げるか」だけで決めると、同じ不満を別の会社で繰り返しやすい点です。「逃げたい理由」を「次に向かいたい方向」に翻訳できれば、それは前向きな転職になります。",
  },
  {
    q: "燃え尽きを繰り返さない転職先の選び方は？",
    a: "残業の実態、オンコール体制、有給取得率、開発チームの裁量、上司のマネジメントスタイルを、面接や口コミサイト・エージェント経由で確認しましょう。求人票の「平均残業20時間」は平均値にすぎないため、配属予定チームの実態まで踏み込んで聞くことが重要です。",
  },
  {
    q: "40代でも燃え尽きからのキャリアチェンジは可能ですか？",
    a: "可能です。40代のエンジニアは設計・運用・チーム経験が厚く、SRE、テクニカルPM、技術顧問など経験を活かせる役割にシフトできます。重要なのは「何から逃げるか」ではなく「何に向かうか」を明確にすることです。",
  },
  {
    q: "メンタルの相談はどこにすればいいですか？",
    a: "身体・メンタルの不調は産業医・主治医・自治体や公的機関の相談窓口へ。キャリア面の相談はIT特化型の転職エージェントが利用できます。医療とキャリアは役割が異なるため、両方を切り分けて使うのがおすすめです。本記事はあくまで一般的な情報であり、診断・治療の代わりにはなりません。",
  },
];

export default function BurnoutPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/burnout/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "燃え尽き症候群と転職判断" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの燃え尽き症候群と転職判断｜休職と転職の見極め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | バーンアウトのセルフチェックと判断基準</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「コードを書くのが辛い」「月曜が来るのが憂鬱」「以前は楽しかった技術に興味が持てない」。こうした状態が続いているなら、それは燃え尽き症候群（バーンアウト）のサインかもしれません。本記事では、サインのセルフチェック、休職と転職の判断、そして「逃げの転職」をどう考えるかを、30代・40代の視点で整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["WHO ICD-11（バーンアウトの定義）", "厚生労働省 こころの耳", "経済産業省 IT人材需給に関する調査（2019年公表）"]}
        />

        {/* 重要注記 */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-10">
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>本記事は医学的な診断・治療を目的としたものではありません。</strong>
            不眠・頭痛・動悸・強い気分の落ち込みなどが続く場合は、自己判断せず、<strong>心療内科・精神科などの専門医、または職場の産業医・相談窓口に必ずご相談ください。</strong>
            公的な相談先として厚生労働省「こころの耳」などもあります。本ページのセルフチェックはあくまで気づきのきっかけであり、診断ではありません。
          </p>
        </div>

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：先に「休む・受診」、次に「環境を変えるか」を判断する</h2>
            <p className="text-sm text-blue-800 leading-relaxed mb-3">
              燃え尽きの対処は順番が大切です。<strong>(1)身体症状があるならまず受診・休息</strong> →
              <strong>(2)原因が「環境」か「一時的」かを切り分け</strong> →
              <strong>(3)環境が原因で半年以上改善しないなら転職を検討</strong>、という流れが安全です。
            </p>
            <p className="text-sm text-blue-800 leading-relaxed">
              疲弊した状態での即決は後悔の元。「逃げたい」を「次に向かいたい方向」に翻訳できてから動くことで、同じ失敗を繰り返さずに済みます。判断に迷う段階では、医療は専門医・産業医、キャリアはエージェントと、相談先を分けて使うのがおすすめです。
            </p>
          </div>
        </section>

        {/* セルフチェック */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">燃え尽きセルフチェック（10項目）</h2>
          <p className="text-sm text-slate-600 mb-4">
            直近2週間ほどを振り返り、当てはまる項目を数えてみてください。<strong>これは診断ではなく、専門家に相談すべきか気づくための目安</strong>です。多く当てはまる、または身体症状がある場合は、まず専門医・産業医への相談をおすすめします。
          </p>
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            {[
              "朝、起きても疲れが取れていないと感じる日が続く",
              "仕事のことを考えると気が重い・動悸がする",
              "以前は好きだった技術や開発に興味が持てない",
              "ささいなことでイライラしたり、無力感を覚える",
              "集中力が続かず、ミスや手戻りが増えた",
              "同僚やプロジェクトに対して冷笑的・投げやりになっている",
              "頭痛・胃腸の不調・不眠など身体に変化がある",
              "休日も仕事のことが頭から離れず、休んだ気がしない",
              "自分の仕事に意味や達成感を感じられない",
              "「とにかく逃げたい」と頻繁に考える",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 inline-block w-4 h-4 border-2 border-slate-300 rounded shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 当てはまる数の多さで重症度を断定することはできません。気になる場合は数の多寡にかかわらず専門家へ相談してください。
          </p>
        </section>

        {/* サイン */}
        <section id="signs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">見逃しやすい6つのサイン</h2>
          <div className="space-y-4">
            {signs.map((item, i) => (
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

        {/* 原因 */}
        <section id="causes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアが燃え尽きる主な原因と打ち手</h2>
          <p className="text-sm text-slate-600 mb-4">
            バーンアウトは「本人の頑張りが足りない」問題ではなく、多くは仕事の量・裁量・評価・人間関係といった<strong>環境要因</strong>が積み重なって起きます。原因を切り分けると、休めば回復するのか、環境を変えるべきなのかが見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">原因</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">まず試したい打ち手</th>
                </tr>
              </thead>
              <tbody>
                {causes.map((c, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{c.cause}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{c.example}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{c.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 判断フロー */}
        <section id="rest-or-quit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">休む・休職・転職の判断フロー</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">STEP 1. 身体症状があるか</h3>
              <p className="text-sm text-slate-600">不眠・頭痛・動悸・強い気分の落ち込みなどがある場合は、転職を考える前に<strong>専門医・産業医を受診</strong>。必要に応じて休養や休職の判断は医師に委ねます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">STEP 2. 原因は「一時的」か「環境」か</h3>
              <p className="text-sm text-slate-600">繁忙期や特定プロジェクト由来の一時的なものなら、休養・配置調整で回復する可能性が高い。長時間労働・評価制度・人間関係など<strong>構造的な要因</strong>なら、環境を変える方が根本解決に近づきます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">STEP 3. 社内で改善を試みたか</h3>
              <p className="text-sm text-slate-600">上司への相談、業務量の調整、部署異動の打診などを試す。これらを<strong>半年程度試しても改善しない</strong>なら、転職が現実的な選択肢になります。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">STEP 4. 回復してから転職活動を本格化</h3>
              <p className="text-sm text-slate-600">心身が落ち着いてから、または負荷の低い「登録だけ」の状態で情報収集を始める。疲弊したままの即決は避けます。</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-900">
              休職制度・傷病手当金・診断書の要否などは制度や医師の判断が関わります。利用を検討する場合は、勤務先の規程と<strong>主治医・産業医</strong>に必ず確認してください。
            </p>
          </div>
        </section>

        {/* 逃げの転職 */}
        <section id="escape" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「逃げの転職」をどう考えるか</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「逃げの転職は良くない」とよく言われますが、つらい環境から離れること自体は正当な自己防衛です。問題は、<strong>「逃げたい」だけで決めると、同じ不満を別の会社で繰り返しやすい</strong>こと。下のように「逃げたい理由」を「向かいたい方向」に翻訳できれば、それは前向きな転職になります。
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「とにかくこの残業地獄から逃げたい」</p>
              <p className="text-sm text-green-700">→ 「持続可能なペースで開発し、長く技術を磨ける環境に身を置きたい」</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「評価されないこの会社にいたくない」</p>
              <p className="text-sm text-green-700">→ 「成果が正当に評価され、フィードバックがある環境で働きたい」</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-sm text-red-700 font-medium mb-2">「レガシー保守だけの毎日から逃げたい」</p>
              <p className="text-sm text-green-700">→ 「設計・改善に裁量を持って取り組み、技術的に成長したい」</p>
            </div>
          </div>
          <h3 className="font-bold text-slate-800 mb-3">前向きな転職に変えるチェック</h3>
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            {escapeChecks.map((c, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 次の環境 */}
        <section id="next-env" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">繰り返さない転職先の選び方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 残業・オンコールの「実態」を聞く</h3>
              <p className="text-sm text-petrol-deep">求人票の平均値ではなく、配属予定チームの実際の残業・休日対応の頻度を、面接やエージェント経由で確認します。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 裁量とコントロール感を確認する</h3>
              <p className="text-sm text-petrol-deep">バーンアウトの一因は「自分で決められない」こと。意思決定にどこまで関われるか、設計や進め方の裁量があるかを確認しましょう。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. マネジメントと心理的安全性を見る</h3>
              <p className="text-sm text-petrol-deep">面接で会ったマネージャーの姿勢や1on1の有無は、入社後の働きやすさをよく反映します。「困ったとき相談できそうか」を直感でも判断材料に。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 第三者の客観情報を併用する</h3>
              <p className="text-sm text-petrol-deep">口コミサイトの傾向やエージェントが持つ内部情報を、自分の印象と突き合わせる。<Link href="/knowledge/regret/" className="text-petrol hover:underline">入社前チェックリスト</Link>も活用しましょう。</p>
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアならではの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は、プレイヤーとマネジメントの両方を期待され、家庭やローンなど守るものも増える時期です。だからこそ「辞めるか続けるか」を体力で押し切らず、<strong>持続可能性</strong>を軸に考える必要があります。
            </p>
            <p>
              一方で、この年代の経験は市場で確かな価値を持ちます。IT人材は中長期的に不足が見込まれ、経済産業省「IT人材需給に関する調査」（2019年公表）の試算では、2030年に最大約79万人のIT人材が不足するとされています。設計・運用・チームをまとめた経験は、SRE・テクニカルPM・EM・技術顧問など、より負荷をコントロールしやすい役割への移行に活きます。
            </p>
            <p>
              焦って「逃げ」だけで決めるより、回復したうえで「次にどう働きたいか」を描く方が、長い目で見て損をしません。<Link href="/knowledge/work-life-balance/" className="text-petrol hover:underline">ワークライフバランス重視の転職</Link>や<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">キャリアプラン設計</Link>も合わせて検討してみてください。
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
          <h2 className="text-xl font-bold mb-3">キャリアの整理はプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            体調面は専門医・産業医へ。キャリアの選択肢を整理したいときは、IT特化型エージェントなら「今すぐ転職しない」前提の相談も可能です。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "インポスター症候群と転職活動", href: "/knowledge/imposter-syndrome/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "転職のタイムライン", href: "/knowledge/timeline/" },
              { name: "オンボーディング成功法", href: "/knowledge/onboarding/" },
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
