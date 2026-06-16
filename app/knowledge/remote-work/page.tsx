import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "リモートワーク求人の探し方｜エンジニア転職の見極めポイント",
  description:
    "エンジニア向けリモートワーク求人の探し方を解説。フルリモートとハイブリッドの違い、求人票での見極めポイント、面接での確認事項、求人票の落とし穴まで30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "フルリモートとハイブリッドはどちらを選ぶべき？",
    a: "生活設計とキャリアの優先順位で決まります。地方移住や通勤負担の解消が最優先ならフルリモート、対面での関係構築やオフィスでの相談のしやすさを残したいならハイブリッドが向きます。まずは自分が「週に何日まで出社を許容できるか」を数値で決め、その条件で求人を絞り込むと判断しやすくなります。",
  },
  {
    q: "求人票に「リモート可」と書いてあれば在宅で働ける？",
    a: "必ずしもそうとは限りません。「リモート可」は会社として制度がある、という意味で、実際の出社頻度は配属チームやプロジェクト、入社後の期間で変わります。求人票の表記だけで判断せず、面接やエージェント経由で「配属予定チームの直近の実出社頻度」を確認することが重要です。",
  },
  {
    q: "フルリモートだと年収は下がる？",
    a: "勤務形態そのものが年収を直接決めるわけではありません。ただし地方在住で地方企業に勤める場合は、地域の給与水準の影響を受けることがあります。レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円で、東京の企業にフルリモートで勤める形なら、居住地に関わらずその企業の給与テーブルが基準になります。",
  },
  {
    q: "リモート求人に強いエージェントは？",
    a: "IT/Web特化型のエージェントはリモート可否の実態を把握していることが多く、相性が良い傾向です。当サイトではリモート希望者向けに各社を比較した記事も用意しています。登録時に「フルリモート希望」「週1出社まで」など条件を具体的に伝えると、マッチする求人を優先的に紹介してもらえます。",
  },
  {
    q: "フルリモートで地方移住は可能？",
    a: "勤務先がフルリモートを正式制度として運用していれば可能です。ただし「月1回の出社」「四半期に一度のチーム合宿」などオフラインの集まりを求められるケースもあるため、移住前に出社・集合の頻度と交通費負担の扱いを必ず確認しましょう。",
  },
  {
    q: "リモートワークの面接ではどんな点を見られる？",
    a: "自己管理能力、テキストベースの非同期コミュニケーション力、成果を言語化して報告する力が重視される傾向があります。過去のリモート経験や、Slack・ドキュメントでチームに貢献した具体例を準備しておくと評価されやすくなります。",
  },
  {
    q: "入社後にフルリモートが廃止されることはある？",
    a: "あり得ます。勤務形態の方針は経営判断で変わることがあるため、内定承諾前に「リモート勤務は就業規則・労働条件通知書に明記されるか」を確認しておくと安心です。口頭の約束だけでなく、書面での条件を確かめましょう。",
  },
];

const comparison = [
  { item: "出社頻度", full: "原則なし（または月1回程度の集合）", hybrid: "週1〜3日出社が一般的" },
  { item: "対人コミュニケーション", full: "オンライン・非同期中心", hybrid: "対面＋オンラインの併用" },
  { item: "居住地の自由度", full: "高い（地方移住も視野）", hybrid: "通勤圏内に限定されやすい" },
  { item: "自己管理の必要性", full: "非常に高い", hybrid: "高い" },
  { item: "オンボーディング", full: "オンライン中心で工夫が必要", hybrid: "対面で相談しやすい" },
  { item: "向く職種傾向", full: "バックエンド・インフラ・SRE等", hybrid: "対面要素のある職種も含め幅広い" },
  { item: "評価のされ方", full: "成果物ベースになりやすい", hybrid: "プロセスも見えやすい" },
];

const checkItems = [
  "求人票の「リモート可」だけで判断せず、配属チームの実出社頻度を確認している",
  "出社が必要になるケース（顧客対応・障害対応・キックオフ等）の頻度を把握している",
  "リモート手当・通信費・在宅環境補助の有無を確認している",
  "勤務形態が労働条件通知書など書面に明記されるか確認している",
  "チームの主要なコミュニケーション手段（Slack/会議体）と稼働時間帯を把握している",
  "オンボーディング（入社後の立ち上がり支援）がリモート前提で整備されているか確認している",
];

const interviewQuestions = [
  {
    cat: "出社頻度の実態",
    qs: [
      "配属予定のチームでは、直近3か月で平均してどのくらいの頻度で出社されていますか？",
      "出社が必要になるのは、どのような場面（障害対応・顧客訪問・キックオフ等）でしょうか？",
    ],
  },
  {
    cat: "コミュニケーション設計",
    qs: [
      "チーム内の主なコミュニケーションは同期（会議）と非同期（チャット・ドキュメント）のどちらが中心ですか？",
      "メンバーの稼働時間帯にばらつきはありますか。コアタイムの設定はありますか？",
    ],
  },
  {
    cat: "オンボーディング・評価",
    qs: [
      "リモート入社者のオンボーディングはどのような流れで進みますか？",
      "リモート環境での評価は、何を基準に行われていますか？",
    ],
  },
  {
    cat: "制度の継続性",
    qs: [
      "現在のリモート方針は今後も継続される見込みでしょうか。直近で見直しの予定はありますか？",
      "リモート勤務は就業規則や労働条件通知書に明記されますか？",
    ],
  },
];

export default function RemoteWorkPage() {
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
        title="リモートワーク求人の探し方｜エンジニア転職の見極めポイント"
        description="エンジニア向けリモートワーク求人の探し方を解説。フルリモートとハイブリッドの違い、求人票での見極めポイント、面接での確認事項を30代・40代向けに紹介します。"
        url="/knowledge/remote-work/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "リモートワーク求人の探し方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リモートワーク求人の探し方｜エンジニア転職の見極めポイント
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | エンジニアのリモートワーク転職ガイド
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 結論ファースト */}
        <section className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：求人票の「リモート可」を鵜呑みにせず、配属チームの実態を確認する</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              エンジニアのリモート求人は「フルリモート」「ハイブリッド」「リモート可（実態は出社中心）」が混在しています。失敗を避ける鍵は、<strong>求人票の表記だけで判断せず、面接やエージェント経由で「配属予定チームの直近の実出社頻度」を確認すること</strong>です。
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              地方移住や通勤負担の解消が目的ならフルリモート、対面の関係構築を残したいならハイブリッドを軸に探すのが基本方針です。なお、求人件数は媒体・時期で大きく変動するため、本記事では具体的な件数や割合の断定は避けています。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm text-petrol-deep">
            <li><a href="#diff" className="hover:underline">フルリモートとハイブリッドの違い</a></li>
            <li><a href="#types" className="hover:underline">リモート求人が出やすい企業タイプ</a></li>
            <li><a href="#spot" className="hover:underline">求人票での見極めポイントと落とし穴</a></li>
            <li><a href="#find" className="hover:underline">リモート求人の効率的な探し方</a></li>
            <li><a href="#interview" className="hover:underline">面接での確認事項（質問例文）</a></li>
            <li><a href="#checklist" className="hover:underline">入社前チェックリスト</a></li>
            <li><a href="#middle" className="hover:underline">30代・40代視点でのリモート転職</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        {/* フルリモートとハイブリッドの違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルリモートとハイブリッドの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「リモートワーク」とひとことで言っても、その中身は大きく分かれます。同じ「リモート」でも、フルリモートとハイブリッドでは生活設計も求められるスキルも変わるため、まずは両者の違いを整理しておきましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">フルリモート</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">ハイブリッド</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.full}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 上表は一般的な傾向であり、企業・チームにより異なります。出社頻度の具体値は応募先で確認してください。</p>
          <div className="mt-5 space-y-3">
            <p className="text-slate-600 leading-relaxed">
              <strong>フルリモート</strong>は出社を原則必要としない働き方です。居住地の自由度が高く、地方移住や通勤時間の解消といったメリットがある一方、対面での相談機会が減るため、自己管理能力とテキストベースのコミュニケーション力がより強く求められます。
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>ハイブリッド</strong>は週に数日の出社を組み合わせる働き方です。対面でのオンボーディングや雑談からの情報共有といったメリットを残せる反面、通勤圏内に居住地が制約される点には注意が必要です。「週何日出社か」「出社日は固定か自由か」は企業ごとに大きく異なります。
            </p>
          </div>
        </section>

        {/* 企業タイプ */}
        <section id="types" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人が出やすい企業タイプ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リモート対応のしやすさは事業特性に左右されます。「どのタイプの企業がリモートに前向きか」を知っておくと、求人探しの当たりをつけやすくなります。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">SaaS・自社プロダクト企業</h3>
              <p className="text-sm text-slate-600">プロダクト開発がオンラインで完結しやすく、リモートと相性が良い傾向。開発プロセスがドキュメント化されている企業はリモートでも立ち上がりやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Web系ベンチャー・メガベンチャー</h3>
              <p className="text-sm text-slate-600">フルリモートからハイブリッドまで幅広い。同じ社内でもチームによって方針が異なることがあるため、配属先単位での確認が重要。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">外資系IT企業</h3>
              <p className="text-sm text-slate-600">グローバルでリモート文化が根付いている企業が多い。一方で「週◯日出社」を全社方針として明確に定める企業も増えているため、最新の方針を確認する。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">SIer・金融系・公共系</h3>
              <p className="text-sm text-slate-600">セキュリティ要件や常駐前提の案件があり、出社頻度が高めになりやすい。ただし社内開発部門やモダン化を進める部署ではリモート対応が進むケースもある。</p>
            </div>
          </div>
        </section>

        {/* 求人票での見極め */}
        <section id="spot" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人票での見極めポイントと落とし穴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票の「リモート」表記には複数のパターンがあります。表記のニュアンスを読み解き、実態とのギャップを埋める質問につなげることが大切です。
          </p>
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2">落とし穴1：「リモート可」=「フルリモート」ではない</h3>
              <p className="text-sm text-amber-900">「リモート可」は制度の存在を示すだけで、実態は出社中心ということもあります。フルリモートを希望するなら「原則出社不要か」を明確に確認しましょう。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2">落とし穴2：「リモート中心」の「中心」が曖昧</h3>
              <p className="text-sm text-amber-900">週1出社も週3出社も「リモート中心」と表現されることがあります。具体的な日数に置き換えて確認することが重要です。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2">落とし穴3：入社直後だけ出社、のケース</h3>
              <p className="text-sm text-amber-900">オンボーディング期間は出社必須で、その後リモート移行という運用もあります。「立ち上がり期間の出社条件」も合わせて確認しましょう。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-900 mb-2">落とし穴4：チーム単位で方針が違う</h3>
              <p className="text-sm text-amber-900">全社では「リモート可」でも、配属されるチームは出社中心ということがあります。必ず「配属予定チームの実態」を聞きましょう。</p>
            </div>
          </div>
        </section>

        {/* 探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート求人の効率的な探し方</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "条件を数値で言語化する", desc: "「フルリモート」「週1出社まで」「四半期に一度の集合まで許容」など、許容できる出社頻度を数値で決めてから探すと、求人の取捨選択が早くなります。" },
              { num: "2", title: "IT/Web特化型エージェントを使う", desc: "IT特化型のエージェントはリモート可否の実態を把握していることが多く、求人票に書かれない出社頻度の情報も提供してもらえる傾向があります。リモート希望者向けのエージェント比較も参考にしてください。" },
              { num: "3", title: "非公開求人にもアクセスする", desc: "好条件のリモート求人は非公開で扱われることがあります。複数のエージェントに登録しておくと、出会える求人の幅が広がります。" },
              { num: "4", title: "登録面談でリモート希望を最優先条件として伝える", desc: "希望条件は遠慮せず明確に。優先順位の高い順に伝えることで、ミスマッチな求人紹介を減らせます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            リモート求人に強いエージェントの比較は<Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモートワーク対応に強い転職エージェント比較</Link>でまとめています。複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの複数併用ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 面接での確認事項 */}
        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での確認事項（質問例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リモートの実態を見極めるには、面接やカジュアル面談での質問が有効です。そのまま使える質問例を場面別にまとめました。
          </p>
          <div className="space-y-4">
            {interviewQuestions.map((block, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3">{block.cat}</h3>
                <ul className="space-y-2">
                  {block.qs.map((q, j) => (
                    <li key={j} className="text-sm text-slate-600 bg-slate-50 rounded px-3 py-2">「{q}」</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 質問は角が立たないよう「働き方のイメージを掴みたい」という前向きな文脈で聞くと回答を得やすくなります。</p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社前チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {checkItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点でのリモート転職</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：家庭との両立と成長機会のバランス</h3>
              <p className="text-sm text-petrol-deep">育児や家事との両立でリモートの恩恵が大きい世代。一方で、リモート中心だと立ち上がりや社内人脈づくりに工夫が要るため、オンボーディング体制が整っているかを重視したい。技術的な成長機会と両立できるかも確認ポイント。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメント・チームビルディングとの両立</h3>
              <p className="text-sm text-petrol-deep">テックリードやマネジメント職を担う場合、リモート前提でのチーム運営経験が評価されやすい。逆に、メンバー育成や1on1を対面で重視する組織ではハイブリッドが選ばれることもある。自分の役割とチームの方針が噛み合うかを見極めたい。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収水準の考え方</h3>
              <p className="text-sm text-petrol-deep">レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円。勤務形態よりも、企業の給与テーブルとポジションで年収は決まります。リモートだから下がる、と決めつけず、各社の提示条件で比較しましょう。年収交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉ガイド</Link>を参照。</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">出典: レバテック公表の年代別平均年収（2025年・正社員SE）。数値は時点により変動します。</p>
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
          <h2 className="text-xl font-bold mb-3">リモートワーク求人を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、フルリモート・ハイブリッドの実態を踏まえた求人を紹介してもらえます。
          </p>
          <Link
            href="/compare/remote-agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            リモート対応に強いエージェント比較を見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "リモート対応に強いエージェント比較", href: "/compare/remote-agents/" },
              { name: "リモート求人が多いエリア（リモート）", href: "/area/remote/" },
              { name: "ワークライフバランス重視のIT転職", href: "/knowledge/work-life-balance/" },
              { name: "スタートアップvs大企業", href: "/knowledge/startup-vs-enterprise/" },
              { name: "家庭持ちエンジニアの転職戦略", href: "/knowledge/family/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
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
