import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "テックリード転職ガイド｜シニアエンジニアからの移行ステップと職務経歴書",
  description:
    "シニアエンジニアからテックリードへステップアップする方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：テックリード転職の現実性" },
  { id: "gap", label: "現職とのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がテックリードを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "個人の実装力",
    senior: "◎ 高い実装力が前提",
    lead: "◎ 前提として維持しつつ範囲を広げる",
  },
  {
    skill: "アーキテクチャ設計",
    senior: "○ 担当領域の設計",
    lead: "◎ システム全体の設計判断と技術的負債の管理",
  },
  {
    skill: "コードレビュー",
    senior: "○ バグ検出が中心",
    lead: "◎ 設計改善・チームの技術底上げにつなげる",
  },
  {
    skill: "技術選定・意思決定",
    senior: "△ 担当範囲での選定",
    lead: "◎ 事業要件とチームスキルを踏まえた判断",
  },
  {
    skill: "メンタリング・育成",
    senior: "△ 必要に応じて",
    lead: "◎ 1on1・ペアプロ・勉強会で継続的に支援",
  },
  {
    skill: "ステークホルダー折衝",
    senior: "△ エンジニア内に閉じがち",
    lead: "◎ PdM・ビジネスとの技術的な合意形成",
  },
];

const buildSteps = [
  {
    title: "担当領域を超えてシステム全体の設計に関わる",
    desc: "自分のタスクだけでなく、システム全体のアーキテクチャ・技術的負債・スケーラビリティに目を向けます。設計レビューに参加し、『なぜこの構成か』を全体最適の観点で語れるようにすることがテックリードの第一歩です。",
  },
  {
    title: "コードレビューを「育成の場」に変える",
    desc: "バグ指摘で終わらせず、設計の改善・可読性の向上・チームの技術レベル向上につながる建設的なフィードバックを心がけます。レビューを通じてチーム全体の品質を底上げした経験が、テックリードの実績になります。",
  },
  {
    title: "技術選定を「事業×チーム」の視点で判断する",
    desc: "フレームワークやインフラの選定を、技術的な好みだけでなく、チームのスキルセットと事業要件を踏まえて判断します。意思決定の理由を文書化し、後から検証できる形にしておくことが信頼につながります。",
  },
  {
    title: "メンタリングで人を動かす経験を積む",
    desc: "ジュニア・ミドルエンジニアの1on1、ペアプログラミング、勉強会のファシリテーションを担い、人の成長を支援します。『自分が速い』から『チームが速くなる』への意識の転換が問われます。",
  },
  {
    title: "ステークホルダーとの技術的な合意形成を担う",
    desc: "PdM・デザイナー・ビジネスサイドと、技術的制約をビジネス言語で説明して合意を作る経験を積みます。技術と事業の橋渡しができることが、テックリードの市場価値を高めます。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "担当外の設計レビューに参加し、システム全体の設計判断に関与する",
      "コードレビューで設計改善や育成につながるフィードバックを意識的に行う",
      "ジュニアの1on1やペアプロを買って出て、育成実績を作る",
    ],
  },
  {
    phase: "リード経験づくり（3〜6ヶ月）",
    items: [
      "小さな機能・チームで技術選定や設計の意思決定を主導し、根拠を文書化する",
      "技術的負債の改善や品質向上の取り組みを起案し、チームを巻き込んで進める",
      "PdMやビジネスサイドとの技術合意の場に同席し、説明役を担う",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントやスカウト型サービスに登録し、テックリード求人の要件をすり合わせる",
      "職務経歴書を『個人の成果』から『チームの成果をどう引き上げたか』に書き換える",
      "面接に向け、技術的な意思決定の事例を『背景→判断→結果』で説明できるよう整理する",
    ],
  },
];

const faqs = [
  {
    q: "テックリードとシニアエンジニアの違いは？",
    a: "シニアエンジニアは個人の技術力がメインですが、テックリードはチームの技術方針決定、コードレビュー、メンタリング、アーキテクチャ設計など『チームの技術レベルを引き上げる』役割を担います。自分が速いだけでなく、チームを速くすることが評価軸です。",
  },
  {
    q: "シニアエンジニアからテックリードへの移行は何が必要？",
    a: "実装力に加えて、システム全体の設計判断、育成・メンタリング、技術選定の意思決定、ステークホルダーとの合意形成が必要になります。在職中に小さなチームや機能でリードを経験し、根拠ある意思決定を文書化しておくと移行しやすくなります。",
  },
  {
    q: "テックリードはコードを書く時間はある？",
    a: "チームサイズによりますが、コーディングの時間を一定確保できるのが理想です。大きなチームではコードレビューとアーキテクチャ設計の比重が高まります。応募時に、その企業でのコーディング比率や役割の期待値を確認しておくとミスマッチを防げます。",
  },
  {
    q: "テックリードからのキャリアパスは？",
    a: "EM（エンジニアリングマネージャー）へのマネジメントトラック、スタッフ・プリンシパルエンジニアへのICトラック、CTO/VPoEへの経営トラックの3つが主なパスです。マネジメントに完全移行したくない人にとって、技術を続けながらリードできる中間ポジションとして人気があります。",
  },
  {
    q: "テックリードに必要なソフトスキルは？",
    a: "コードレビュー力、メンタリング力、技術的な意思決定力、ステークホルダーとのコミュニケーション力、ドキュメンテーション力が重要です。技術だけでなく、人を動かし合意を作るスキルが問われます。",
  },
  {
    q: "テックリードは何年くらいの経験で就ける？",
    a: "エンジニア経験を5〜8年ほど積んでから就くケースが多い傾向です。ただし年数より、技術力とリーダーシップの実績が重視されます。リードの経験がなくても、在職中にチームを巻き込んだ取り組みの実績を作れば挑戦できます。",
  },
  {
    q: "マネジメントはしたくないがテックリードは目指せる？",
    a: "目指せます。テックリードは技術的なリーダーシップが中核で、人事評価などの管理業務が主のEMとは役割が異なります。コードを書き続けながらチームを技術で導きたい人に向いたポジションです。",
  },
  {
    q: "テックリードの求人はどのエージェントで探せばいい？",
    a: "技術理解のあるアドバイザーがいるレバテックキャリアや、スカウトで市場価値を測れるビズリーチが向いています。年収帯が高いため、複数社で提示を比較してレンジ感を把握するのがおすすめです。",
  },
];

const related = [
  { name: "PM→CTO/VPoEキャリアパス", href: "/career/pm-to-cto/" },
  { name: "マネジメントしたくない人の転職", href: "/purpose/management-no/" },
  { name: "年収UPしたいエンジニアの戦略", href: "/purpose/salary-up/" },
  { name: "システム設計力の身につけ方", href: "/knowledge/system-design/" },
  { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

export default function TechLeadPage() {
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
        title="テックリード転職ガイド｜シニアエンジニアからの移行ステップと職務経歴書"
        description="シニアエンジニアからテックリードへステップアップする方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。"
        url="/career/tech-lead/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "テックリード転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テックリード転職ガイド｜シニアエンジニアからの移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 個人の成果を「チームを引き上げる力」に翻訳して転職する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          テックリードは、技術力とリーダーシップを兼ね備えたエンジニアのキャリアパスです。「コードを書きながらチームを導く」役割は、マネジメントに完全に移行したくないエンジニアにとって魅力的な選択肢です。シニアエンジニアの実装力を土台に、設計判断・育成・意思決定へと役割を広げることで到達できます。このページでは、現職とのスキルギャップ、在職中の移行ステップ、職務経歴書での見せ方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：テックリード転職の現実性</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>シニアエンジニアの実装力があれば、テックリードへの移行は十分に現実的です。</strong>
              分かれ目は「個人の成果」だけでなく「チームの成果をどう引き上げたか」を示せるかどうかです。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① 実装力は前提として、<strong>設計判断・意思決定・育成・折衝</strong>がギャップになりやすい</li>
              <li>② 在職中に小さなチームや機能でリードを経験し、根拠ある意思決定を文書化する</li>
              <li>③ 技術を続けながらチームを導けるポジションで、マネジメント完全移行を避けたい人に向く</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職とのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            テックリードに求められるスキルを、シニアエンジニアの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。実装力はそのまま活き、設計・育成・折衝の範囲を広げることが移行の鍵になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">シニアエンジニア</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">テックリードで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.senior}</td>
                    <td className="px-4 py-3 text-slate-600">{row.lead}</td>
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
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {i + 1}
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
          <p className="text-slate-600 leading-relaxed mb-4">
            テックリードへの移行は、肩書きを待つより、今のチームで「リードの動き」を先取りして実績を作るのが近道です。役職がなくても、設計判断や育成、技術合意の場で主体的に動いた経験が、職務経歴書の核になります。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 shrink-0">✓</span>
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
            シニアエンジニアの経歴は、書き方次第でテックリード適性が伝わります。ポイントは「自分が作ったもの」ではなく「チームの成果をどう引き上げたか／どんな技術判断を主導したか」を主語にすることです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（個人の実装成果だけの例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                バックエンドエンジニアとして、新規機能の設計・実装を担当。Go・AWSを用いてAPIを開発し、パフォーマンス改善やバグ修正を行った。コードレビューにも参加した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（チームを引き上げた実績を主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                バックエンドチーム（〇名）の技術リードとして、新規機能の設計・実装に加え、システム全体のアーキテクチャ方針を策定。フレームワーク／インフラの技術選定を、事業要件とチームのスキルセットを踏まえて判断し、判断理由を設計ドキュメントとして残した。コードレビューでは設計改善と可読性向上の観点を重視し、レビュー基準をチームで標準化。ジュニア2名のメンタリング（1on1・ペアプロ）を担い、独力で機能をリリースできる水準まで育成。PdMとは技術的制約をビジネス言語で説明して優先度を合意した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「実装した／参加した」→「方針を策定し・判断を主導した」とリードの動詞に変換</li>
                <li>・技術選定の根拠・レビュー基準の標準化・育成・折衝など、チームへの貢献を具体化</li>
                <li>・チーム人数・育成人数・合意形成の場面など、出せる範囲で規模感を添える</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            テックリード単独の公的な平均年収統計は確認できないため、ミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。テックリードは実装力に加えチームを牽引する責任を担うため、提示レンジはこれより上を狙えるケースが多くなります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じレバテックの公表値では、年収1,000万円以上の割合は30代で8.01%、40代で12.67%とされています。テックリードはこの上位レンジに届きうるポジションです。doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）でも、転職者の約6割が年収アップを実現しており、責任範囲の広がりを年収交渉の根拠にできます。企業ごとの幅が大きいため、複数社の提示を比較することをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収・年収1,000万円以上割合（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）／doda「決定年収レポート」（2025年5月公表）。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            テックリード求人は技術力とリーダーシップの両面が評価されるため、技術理解のあるアドバイザーがいるサービスと、ハイレンジ求人のスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で高年収求人の比率が高く、技術に詳しいアドバイザーが在籍。技術力とリードの実績を正しく評価してもらいやすい環境です。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。年収750万円以上の定義でハイレンジ求人が中心。テックリード・スタッフエンジニア級の市場価値を客観把握できます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数。検索・エージェント・スカウトのハイブリッド型で、幅広い企業のリードポジションを比較検討できます。",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がテックリードを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              テックリードは、技術の蓄積とチームを動かす経験の両方が問われる職種で、ミドル層の経験がそのまま強みになります。複数のプロジェクトで設計判断を重ね、後輩を育ててきた実績は、若手にはない説得力を持ちます。
            </p>
            <p>
              一方で評価されにくいのが「個人の成果に閉じた実績の書き方」です。優れた実装をしてきても、それがチームの成果につながった形で語れないと、リード適性が伝わりません。在職中に育成や技術選定をリードした経験を、職務経歴書で『チームをどう引き上げたか』として示せるようにしておきましょう。
            </p>
            <p>
              マネジメントへ完全移行したくない場合は
              <Link href="/purpose/management-no/" className="text-blue-600 hover:underline">マネジメントしたくない人の転職</Link>
              、その先のキャリアを考えるなら
              <Link href="/career/pm-to-cto/" className="text-blue-600 hover:underline">CTO/VPoEへのキャリアパス</Link>
              も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">テックリード転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            テックリードポジションに強いIT特化型エージェントが、あなたの実績に合う求人を提案します。
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
            {related.map((item, i) => (
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
