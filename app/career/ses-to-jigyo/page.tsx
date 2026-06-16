import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SES→自社開発エンジニアへの転職ガイド【2026年版】",
  description:
    "SES（客先常駐）から自社開発企業へ転職するための現実性、選考で問われるポートフォリオ・主体性、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：人気だが選考の壁がある" },
  { id: "gap", label: "SESと自社開発のスキルギャップ比較表" },
  { id: "build", label: "選考で問われる力の身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がSES脱出を目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "主体的な技術選定・意思決定",
    ses: "△ 客先の指示・既存スタックに従うことが多い",
    jigyo: "◎ なぜその技術を選ぶかを自分で判断する場面が多い",
  },
  {
    skill: "プロダクト・事業視点",
    ses: "△ 案件単位の作業に閉じがち",
    jigyo: "◎ KPIやユーザー価値を意識した開発が前提",
  },
  {
    skill: "ポートフォリオ・公開実績",
    ses: "△ 守秘義務で成果を外部に出しにくい",
    jigyo: "◎ GitHub等で技術力を示せると選考で有利",
  },
  {
    skill: "モダンな開発プロセス",
    ses: "○ 現場により差が大きい（古い現場も）",
    jigyo: "◎ Git/PRレビュー・CI/CD・アジャイルが標準",
  },
  {
    skill: "幅広い現場経験",
    ses: "◎ 複数案件・複数業界の経験は強みになり得る",
    jigyo: "○ 適応力・対応力として評価される",
  },
  {
    skill: "コミュニケーション・適応力",
    ses: "◎ 客先で立ち回る経験が豊富",
    jigyo: "○ チーム開発での協働力として活きる",
  },
];

const buildSteps = [
  {
    title: "公開できるポートフォリオを作る",
    desc: "SESは守秘義務で業務成果を外に出しにくく、選考で技術力を示す材料が不足しがちです。だからこそ、個人開発のアプリをGitHubで公開し、READMEに技術選定の理由や設計の工夫を書くことが効きます。フロント・バック・デプロイまで一気通貫で動くものがあると、自走力の証明になります。",
  },
  {
    title: "主体性を語れる経験を作る",
    desc: "自社開発の選考では『指示されたから作った』ではなく『なぜ作るか／どう改善するかを自分で考えた』姿勢が問われます。現場でも、改善提案、技術調査の主導、レビュー文化の導入など、自分起点の動きを1つ作っておきます。",
  },
  {
    title: "モダンな開発フローに習熟する",
    desc: "Git/PRレビュー、CI/CD、コンテナ、アジャイルなど、自社開発で標準とされるフローに慣れます。SESの現場で古い開発スタイルしか経験していない場合は、個人開発で現行フローを自分の手で再現しておきます。",
  },
  {
    title: "得意領域の技術を深掘りする",
    desc: "幅広い案件経験は強みですが、薄く広くに見えるリスクもあります。得意な言語・フレームワークを一つ選び、実装に落とせる深さまで掘り下げて『これができる』と言える軸を作ります。",
  },
  {
    title: "現場経験を価値として言語化する",
    desc: "複数業界・複数現場での適応力や、要件のばらつきに対応してきた経験は、SESならではの強みです。これを『どんな環境でもキャッチアップして成果を出せる』という形で言語化しておきます。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "個人開発のアプリをGitHubで公開し、READMEに技術選定理由と設計意図を書く",
      "現場で改善提案や技術調査を1つ主導し、主体性のエピソードを作る",
      "守秘義務に触れない範囲で、担当領域・規模・工夫を棚卸しする",
    ],
  },
  {
    phase: "スキルと実績づくり（3〜6ヶ月）",
    items: [
      "得意な言語・フレームワークを実装レベルまで深掘りし、技術の軸を作る",
      "Git/PRレビュー・CI/CD・コンテナなど現行フローを個人開発で再現する",
      "複数現場での適応力を『どんな環境でも成果を出せる』強みとして整理する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、自社開発企業の選考傾向をすり合わせる",
      "ポートフォリオを軸に、技術選定の理由を自分の言葉で説明できるよう準備する",
      "面接では『指示されたから』ではなく『自分で考えて動いた』エピソードを準備する",
    ],
  },
];

const faqs = [
  {
    q: "SESから自社開発への転職は人気だけど難しい？",
    a: "人気のルートですが、選考では主体性とポートフォリオが問われやすく、相応の準備が必要です。SESは守秘義務で業務成果を外に出しにくいため、個人開発をGitHubで公開し、技術選定の理由を自分の言葉で語れる状態を作ることが、選考突破の鍵になります。",
  },
  {
    q: "なぜSESから自社開発に移りたい人が多い？",
    a: "自社のプロダクトに長期的に関わりたい、技術選定や改善に主体的に関与したい、客先常駐ではなく一つのチームで腰を据えて開発したい、といった動機がよく見られます。事業視点での開発経験を積みたい人にとって、自社開発は魅力的な選択肢です。",
  },
  {
    q: "ポートフォリオは必須？",
    a: "実質的に必須に近いです。SESは守秘義務で業務での成果を外部に示しにくいため、個人開発のアプリをGitHubで公開し、READMEに設計意図や技術選定の理由を書いておくことで、技術力と自走力を客観的に証明できます。",
  },
  {
    q: "選考で最も問われるのは何？",
    a: "主体性です。『指示されたから作った』ではなく『なぜ作るか・どう改善するかを自分で考えた』姿勢が重視されます。現場での改善提案や技術調査の主導など、自分起点の動きをエピソードとして準備しておくと評価されやすくなります。",
  },
  {
    q: "SESの経験は自社開発で評価される？",
    a: "評価される要素があります。複数業界・複数現場での適応力、要件のばらつきへの対応力、キャッチアップの速さは、SESならではの強みです。これを『どんな環境でも成果を出せる』という形で言語化できると、現場経験が価値に変わります。",
  },
  {
    q: "SESから自社開発に移ると年収は上がる？",
    a: "上がるとは限りません。dodaの決定年収レポート（2025年5月公表）ではIT・通信の転職者の約6割が年収アップとされますが、未経験に近い技術領域へ移る場合は横ばい〜一時的な減少もあり得ます。スキルの市場性次第で上下するため、複数社で確認するのが安全です。",
  },
  {
    q: "自社開発求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、自社開発求人を扱っています。カジュアル面談から始められるサービスを併用すると、在職中に開発文化や技術スタックの相性を確認しながら進められます。",
  },
];

const related = [
  { name: "SES脱出の業界研究", href: "/industry/ses-exit/" },
  { name: "Reactスキルガイド", href: "/skill/react/" },
  { name: "Goスキルガイド", href: "/skill/go/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "30代の転職事情", href: "/age/30s/" },
  { name: "キャリアパス一覧", href: "/career/" },
];

export default function SesToJigyoPage() {
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
        title="SES→自社開発エンジニアへの転職ガイド【2026年版】"
        description="SES（客先常駐）から自社開発企業へ転職するための現実性、選考で問われるポートフォリオ・主体性、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/ses-to-jigyo/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SES→自社開発転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SES→自社開発エンジニアへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ポートフォリオと主体性で選考の壁を越える
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          SES（客先常駐）から自社開発企業への転職は、エンジニアのキャリアパスの中でも人気の高いルートです。自社プロダクトに腰を据えて関わりたい、技術選定や改善に主体的に関与したいという動機から、多くの人が目指します。一方で、自社開発の選考ではポートフォリオと主体性が問われやすく、相応の準備が必要です。このページでは、現実性、選考で問われる力、在職中の準備、職務経歴書の書き方までを具体的に解説します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：人気だが選考の壁がある</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>SESから自社開発への転職は人気のルートですが、選考ではポートフォリオと主体性が問われます。</strong>
              鍵になるのは、守秘義務で外に出せない業務成果の代わりに、公開できる技術力の証明を用意できるかどうかです。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① SESは守秘義務で<strong>業務成果を示しにくい</strong>ため、個人開発のポートフォリオが実質必須に近い</li>
              <li>② 選考では<strong>『なぜ作るか・どう改善するか』を自分で考えた主体性</strong>が重視される</li>
              <li>③ 一方で<strong>複数現場での適応力・キャッチアップの速さ</strong>はSESならではの強みになる</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SESと自社開発のスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自社開発で求められるものを、SESの典型的な状況と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。現場差が大きいため、自分の経験に当てはめて読み替えてください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要な要素</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SES（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">自社開発で求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ses}</td>
                    <td className="px-4 py-3 text-slate-600">{row.jigyo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考で問われる力の身につけ方</h2>
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
            技術の軸選びには
            <Link href="/skill/react/" className="text-petrol hover:underline">Reactスキルガイド</Link>
            や
            <Link href="/skill/go/" className="text-petrol hover:underline">Goスキルガイド</Link>
            が参考になります。SES脱出の全体像は
            <Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES脱出の業界研究</Link>
            も合わせてご覧ください。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自社開発への移行は、在職中にポートフォリオと主体性のエピソードを積み上げながら進めるのが効率的です。退職してから慌てて作るより、現場での動きと並行して証明材料を整える方が、選考での説得力が増します。
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
            SESの職務経歴書は、案件の羅列になると「言われた作業をした人」に見えがちです。ポイントは、守秘義務に触れない範囲で担当領域と工夫を具体化し、主体性とポートフォリオをセットで示すことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（案件の羅列になっている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                金融系システムの開発案件にて、Javaでの実装とテストを担当。別の案件では、保守運用を担当した。客先の指示に従って作業を進めた。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（主体性とポートフォリオを示す例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                複数業界（金融・小売等）のシステム開発に従事し、異なる技術スタックへ短期間でキャッチアップして成果を出してきた。直近の案件では、手作業のデプロイ手順をチームに提案してCI/CDの一部自動化を主導。並行して個人開発でGo＋Next.jsのWebアプリを構築し、技術選定の理由をREADMEに記載してGitHubで公開（自走での設計・実装・デプロイを証明）。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・複数現場の経験を『適応力・キャッチアップ力』という強みに変換する</li>
                <li>・改善提案や自動化など、自分起点の動き（主体性）を具体的に書く</li>
                <li>・守秘義務で示せない業務成果の代わりに、公開ポートフォリオで技術力を証明する</li>
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
            SESから自社開発への移行で年収が必ず上がるとは限りません。基準として、レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。SESでは多重下請け構造の影響で還元される単価が下がるケースもあり、自社開発への移行で改善する場合もあれば、未経験に近い領域では一時的に下がる場合もあります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。提示レンジはスキルの市場性で幅が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。SES・自社開発それぞれの年収はスキルや企業により幅が大きいため、複数社での確認を推奨します。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自社開発求人は技術文化のマッチが重要なため、技術理解のあるアドバイザーがいるIT特化型サービスが向いています。カジュアル面談から始められるサービスを併用すると、在職中に相性を確認しながら進められます。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。自社開発・モダン技術の求人に強みがあり、ポートフォリオを軸にした相談がしやすいサービスです。",
              },
              {
                name: "Green",
                point:
                  "成功報酬型の転職サイトで、IT/Webベンチャー・自社開発企業に強み。カジュアル面談から始められるため、在職中の情報収集に向きます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い自社開発企業を比較検討したい場合に有効です。",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がSES脱出を目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              ミドル層のSES脱出で問われるのは、年齢より「自走できる技術力と主体性」を実物で示せるかです。若手と同じ土俵でポテンシャルを競うより、複数現場で培った適応力・キャッチアップ力を強みに、得意領域の深さと公開ポートフォリオで実力を裏づけることが効きます。
            </p>
            <p>
              一方で、SESの経験が薄く広くに見えてしまうと、自社開発の選考では不利になりがちです。だからこそ、得意な技術を一つ実装レベルまで深掘りし、『これができる』と言える軸を作っておくことが重要です。改善提案や自動化など、自分起点で動いたエピソードも準備しておきましょう。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職事情</Link>
              、年収の見通しは
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              も合わせて確認してください。
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
          <h2 className="text-xl font-bold mb-3">自社開発への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            自社開発に強いIT特化型エージェントが、あなたの経験とポートフォリオに合う企業を提案します。
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
