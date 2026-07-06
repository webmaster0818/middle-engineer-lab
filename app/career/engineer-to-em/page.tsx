import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/engineer-to-em/" },
  title: "エンジニア→エンジニアリングマネージャー（EM）転職ガイド【2026年版】",
  description:
    "現場エンジニアからエンジニアリングマネージャー（EM）へ移行するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：EMはミドルの王道キャリア" },
  { id: "gap", label: "エンジニアとEMのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がEMを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "技術的な深い実装力",
    eng: "◎ 自分で手を動かして価値を出す",
    em: "○ 判断の土台として必要（コーディング比率は低下）",
  },
  {
    skill: "ピープルマネジメント（1on1・評価）",
    eng: "△ 後輩指導の延長で経験する程度",
    em: "◎ メンバーの育成・評価・目標設定が中核業務",
  },
  {
    skill: "採用・チームビルディング",
    eng: "△ 面接官として一部関与する場合あり",
    em: "◎ 採用計画・面接設計・オンボーディングを主導",
  },
  {
    skill: "技術戦略・意思決定",
    eng: "○ 担当領域の技術選定",
    em: "◎ チーム/組織横断の技術方針とトレードオフ判断",
  },
  {
    skill: "ステークホルダー調整",
    eng: "△ 自チーム内のコミュニケーション中心",
    em: "◎ PdM・経営・他部署との調整が日常",
  },
  {
    skill: "プロジェクト・進捗管理",
    eng: "○ 自分のタスク管理",
    em: "◎ チーム全体のデリバリーと健全性に責任を持つ",
  },
];

const buildSteps = [
  {
    title: "1on1とメンタリングを実務で経験する",
    desc: "EMの中核はピープルマネジメントです。現職で後輩のメンターを引き受け、定期的な1on1を実際に運用してみます。傾聴・フィードバック・目標設定の進め方を、書籍（『エンジニアリングマネージャーのしごと』等）と照らし合わせながら言語化しておくと、面接での具体性が増します。",
  },
  {
    title: "チームの課題解決をリードする",
    desc: "技術的負債の解消、開発プロセスの改善、レビュー文化の整備など、個人の成果ではなくチームの成果に効く取り組みを1つ主導します。『チームのアウトプットをどう最大化したか』はEMの評価軸そのものです。",
  },
  {
    title: "見積もり・進捗管理の仕組みを作る",
    desc: "スプリント運営、見積もり精度の改善、ボトルネックの可視化など、デリバリーを安定させる仕組みづくりに関わります。属人的な進行から、再現性のある進行への移行を経験しておきます。",
  },
  {
    title: "採用・評価のプロセスに関与する",
    desc: "面接官、技術課題の設計、オンボーディング資料の整備などに手を挙げます。採用と評価はEMの責任範囲で、現場目線での関与経験があると移行後の立ち上がりが早くなります。",
  },
  {
    title: "技術と組織の両面で発信する",
    desc: "技術選定の意思決定や、チーム運営の工夫を社内外で言語化して発信します。マネジメントは『判断とその理由を説明できること』が重要で、発信の習慣は面接でそのまま活きます。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "後輩のメンター・1on1を引き受け、ピープルマネジメントの実体験を作る",
      "チームの開発プロセスやレビュー文化の改善提案を1件起案し、リードする",
      "課題→施策→チームへの効果の構造で、マネジメント素材をメモに残す",
    ],
  },
  {
    phase: "マネジメント実績づくり（3〜6ヶ月）",
    items: [
      "小さくてもリーダー・テックリードの役割を担い、チーム成果に責任を持つ経験を積む",
      "採用面接や評価プロセスに関与し、人と組織の視点を養う",
      "技術選定や運用改善の意思決定理由を、第三者に説明できる形で整理する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、EM求人の役割定義（ピープル寄りか技術寄りか）をすり合わせる",
      "職務経歴書を『個人の成果』から『チームの成果をどう引き出したか』に書き換える",
      "面接では1on1・評価・採用・技術判断のエピソードを準備し、再現性を示す",
    ],
  },
];

const faqs = [
  {
    q: "エンジニアリングマネージャー（EM）とテックリードの違いは？",
    a: "テックリードは技術的な意思決定とコードの品質に主な責任を持ち、手を動かす比率も高めです。EMはそれに加えて、メンバーの評価・育成・採用・チームの健全性まで責任範囲が広がります。組織によって境界は異なり、両者を兼務するケースもあります。",
  },
  {
    q: "EMになるとコーディングはしなくなる？",
    a: "完全にゼロになるとは限りませんが、コーディングに使える時間は大きく減るのが一般的です。技術判断の土台として実装力は活き続けますが、主業務は1on1・採用・調整・進捗管理に移ります。手を動かし続けたい場合は、テックリードやスタッフエンジニアなどの専門職トラックも選択肢になります。",
  },
  {
    q: "EMへの移行はミドル層に向いている？",
    a: "実務経験と現場感覚が活きるため、30代・40代の王道キャリアの一つです。チームを率いた経験、技術的な意思決定の蓄積、ステークホルダー調整の場数が、そのままEMの強みになります。年齢より、チームの成果を引き出した具体的な実績が重視されます。",
  },
  {
    q: "マネジメント未経験でもEMになれる？",
    a: "いきなりEMは難しめですが、現職でリーダー・メンター・テックリードなどの役割を経験し、ピープルマネジメントの実績を作ってから移行するのが現実的です。後輩の1on1や採用面接への関与など、小さな実体験を積み重ねることが選考での説得力につながります。",
  },
  {
    q: "EMに必要なスキルは何？",
    a: "ピープルマネジメント（1on1・評価・育成）、採用、進捗・デリバリー管理、技術戦略の意思決定、ステークホルダー調整が中心です。技術力は判断の土台として必要ですが、最新実装力を競うより、チームのアウトプットを最大化する力が問われます。",
  },
  {
    q: "EMになって後悔する人もいる？",
    a: "コーディングから離れることへのギャップや、評価・採用といった人に関わる業務の難しさで、現場志向の人が合わないと感じることはあります。マネジメントが向くかは適性によるため、移行前に1on1やリードの役割を試し、自分の志向を確認しておくと安心です。",
  },
  {
    q: "EMの求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、マネジメント求人も扱っています。ハイクラス向けのスカウト型サービスを併用すると、EMポジションの市場価値を客観的に把握しながら進められます。",
  },
];

const related = [
  { name: "PM・マネジメントスキルガイド", href: "/skill/pm/" },
  { name: "マネジメント転職の知識", href: "/knowledge/management/" },
  { name: "テックリードへのキャリアパス", href: "/career/tech-lead/" },
  { name: "PM→CTOへのキャリアパス", href: "/career/pm-to-cto/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "30代の転職事情", href: "/age/30s/" },
];

export default function EngineerToEmPage() {
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
        title="エンジニア→エンジニアリングマネージャー（EM）転職ガイド【2026年版】"
        description="現場エンジニアからエンジニアリングマネージャー（EM）へ移行するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/engineer-to-em/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "エンジニア→EM転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア→エンジニアリングマネージャー（EM）転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 個人の成果を「チームの成果を引き出す力」に翻訳して移行する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアリングマネージャー（EM）は、技術の理解を土台に、チームの成果を最大化する責任を担う職種です。1on1・評価・採用・進捗管理・技術戦略までを扱うため、現場経験を積んできたミドルエンジニアにとっては、これまでの蓄積を活かしやすいキャリアパスです。このページでは、現場エンジニアとのスキルギャップ、在職中にできる移行ステップ、職務経歴書での見せ方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：EMはミドルの王道キャリア</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>現場エンジニアからEMへの移行は、30代・40代の王道キャリアパスの一つです。</strong>
              実務経験と現場感覚がそのまま判断の土台になるため、ミドル層の蓄積が活きやすい移行です。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① 技術力は前提として活き続けるが、評価軸は<strong>「個人の成果」から「チームの成果」へ</strong>変わる</li>
              <li>② ギャップになりやすいのは<strong>ピープルマネジメント・採用・ステークホルダー調整</strong></li>
              <li>③ 在職中に1on1やリードの役割を経験し、チームの成果を引き出した実績を作ることが成否を分ける</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアとEMのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            EMに求められるスキルを、現場エンジニアの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。どの行に補強が必要かで、移行に向けて埋めるべきギャップが見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">現場エンジニア</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">EMで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.eng}</td>
                    <td className="px-4 py-3 text-slate-600">{row.em}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            マネジメントの体系的な知識は
            <Link href="/skill/pm/" className="text-petrol hover:underline">PM・マネジメントスキルガイド</Link>
            、移行の心構えは
            <Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント転職の知識</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            EMへの移行は、今のチームの中で実績を作りながら進めるのが効率的です。退職してから学ぶより、現職のチーム課題を題材に「人と組織の成果を引き出した経験」を積み上げるほうが、職務経歴書に書ける材料が増えます。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現場エンジニアの経歴は、書き方次第でEM適性が大きく伝わります。ポイントは「自分が何を実装したか」ではなく「チームの成果をどう引き出したか／人をどう育てたか」を、定量と再現性の視点で書くことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（個人の実装成果の羅列になっている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Webサービスの開発を担当。新機能の設計・実装・テストを行い、リリースした。後輩のコードレビューも担当した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（チームの成果と育成を主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                〇名規模の開発チームでテックリードを担当。新機能開発をリードしつつ、レビュー観点を整理しチームの手戻りを削減。メンバー〇名と隔週の1on1を運用し、目標設定とフィードバックを通じて1名のジュニアからミドルへの成長を支援。採用面接にも参加し、技術課題の設計を担当した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「実装した」→「チームの成果をどう引き出したか」に主語を移す</li>
                <li>・1on1・育成・採用など、ピープルマネジメントの実体験を具体的に書く</li>
                <li>・チーム規模・手戻り削減・育成成果など、出せる範囲で定量を添える（数値は実績に合わせて記載）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            EM単独の公的な平均年収統計は確認できないため、ここではミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。EMはマネジメント責任が加わるポジションで、一般にこのレンジの上側〜それ以上を狙える傾向があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。EMの具体的な提示レンジは企業規模やチーム規模で幅が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。EM職単独の公的統計は確認できないため、ミドル層全体の公表値を基準としています。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            EM求人はマネジメント要件とポジション定義が企業ごとに異なるため、役割をすり合わせられるIT特化型サービスが向いています。エージェント型とハイクラス向けスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。利用者の約8割が20〜30代で、高年収求人の比率が高いと公表されており、EM・マネジメント系ポジションの相談に向きます。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。年収750万円以上の定義でハイレンジ求人が中心。経験を登録するとEM求人のスカウトで市場価値を客観的に把握できます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い企業のEM/マネジメント求人を比較検討したい場合に有効です。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がEMを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              EMは、開発の難所を知り、チームで物事を進める難しさを体感しているほど判断の質が上がる職種です。ミドル層が積み重ねてきた「技術的な意思決定の経験」「現場の機微の理解」「ステークホルダーとの調整」は、そのままEMの強みになります。実務経験が活きるため、年齢を理由に諦める必要はありません。
            </p>
            <p>
              一方で、現場志向が強い人は、コーディングから離れることにギャップを感じる場合があります。移行前に、現職で1on1やテックリードの役割を試し、人と組織に関わる仕事が自分に向くかを確認しておきましょう。専門職トラック（テックリード・スタッフエンジニア）という選択肢もあります。
            </p>
            <p>
              年収交渉の前提として、
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
              を把握しておくと、提示レンジが妥当かを判断しやすくなります。
            </p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">EM転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            マネジメントポジションに強いIT特化型エージェントが、あなたの現場経験に合う求人を提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
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
