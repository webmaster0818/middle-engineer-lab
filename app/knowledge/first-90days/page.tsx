import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "入社後90日の過ごし方【30/60/90日プランと信頼構築】",
  description:
    "転職後の最初の90日間で信頼を構築し早期に成果を出すための30/60/90日プランを解説。30代・40代エンジニアが新しい職場で立ち上がるロードマップを紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：最初の90日は「信頼の貯金」を作る期間" },
  { id: "why", label: "なぜ最初の90日が重要なのか" },
  { id: "roadmap", label: "30/60/90日プラン ロードマップ" },
  { id: "phase", label: "各フェーズで意識すべきこと" },
  { id: "trust", label: "信頼を構築する具体アクション" },
  { id: "win", label: "早期の成果（クイックウィン）の出し方" },
  { id: "ng", label: "90日間で避けるべきNG行動" },
  { id: "middle", label: "30代・40代視点：即戦力プレッシャーとの付き合い方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const roadmap = [
  { span: "1〜30日", theme: "理解する（Learn）", action: "コードベース把握、開発環境構築、関係者と1on1、ドメイン知識の吸収", goal: "環境への適応と関係づくりの土台" },
  { span: "31〜60日", theme: "貢献する（Contribute）", action: "小〜中規模タスクの完了、コードレビュー参加、改善提案を1つ以上", goal: "最初の目に見える成果を出す" },
  { span: "61〜90日", theme: "自走する（Lead）", action: "機能の設計から実装まで独力で担当、技術的提案、新メンバー支援", goal: "独り立ちと信頼の確立" },
];

const trust = [
  { title: "期待値を先にすり合わせる", body: "入社初週に上司と1on1を持ち、「30日後・60日後・90日後に何ができていれば良いか」を言語化して合意します。期待値が曖昧なまま走ると、頑張りが評価につながりません。" },
  { title: "約束を小さく守り続ける", body: "「明日までに調べます」を確実に守る。小さな約束の積み重ねが『この人は任せられる』という信頼に直結します。大きな成果より先に、信頼の土台を作ります。" },
  { title: "わからないことを早く聞く", body: "中途入社は遠慮して抱え込みがちですが、序盤の質問は歓迎されます。『◯◯まで調べた上で、△△が分かりません』と調査の跡を見せて聞くと印象が良くなります。" },
  { title: "チームの「なぜ」を尊重する", body: "現状の非効率に見える部分も、背景や制約があることが多いもの。批判の前に『なぜこうなっているか』を理解する姿勢が、受け入れられる近道です。" },
];

const ngActions = [
  { title: "前職の話ばかりする", body: "「前の会社では〜」を連発すると距離を置かれます。比較するなら学びの形で。基本は聞かれたときだけ答えます。" },
  { title: "いきなり大きな変革を提案する", body: "問題点が見えても、まず背景を理解する。改善提案は小さく始め、信頼が貯まってから大きなものへ。" },
  { title: "一人で抱え込む", body: "質問せず悩むとチームとの距離が広がります。詰まったら早めに共有し、巻き込む姿勢を見せましょう。" },
  { title: "最初から完璧を目指す", body: "最初のPRは完璧でなくて構いません。フィードバックを受けて素早く直す姿勢が評価されます。" },
  { title: "関係構築の機会を避ける", body: "ランチや雑談、チームイベントは人間関係の近道です。最初の90日が最も効果的な時期です。" },
];

const faqs = [
  {
    q: "転職後の最初の90日間で最も重要なことは何ですか？",
    a: "『信頼の貯金』を作ることです。最初の90日で周囲から信頼される行動を積み重ねると、その後の働きやすさや評価が大きく変わります。具体的には、期待値のすり合わせ、約束を守ること、早めの質問、チームの背景を尊重する姿勢の4つが土台になります。大きな成果を焦るより、まず信頼される人になることを優先すると、結果的に成果も出しやすくなります。",
  },
  {
    q: "即戦力として期待されるプレッシャーにどう対処すればよいですか？",
    a: "最初の1ヶ月は『理解する期間』と割り切り、上司と期待値を明確にすり合わせるのが有効です。30代・40代の中途入社は即戦力を期待されがちですが、コードベースやドメイン知識のキャッチアップには一定の時間がかかるのが普通です。『いつまでに何ができていれば良いか』を合意しておけば、過度な自己プレッシャーを避けつつ、着実に成果へ向かえます。",
  },
  {
    q: "30/60/90日プランはどう作ればよいですか？",
    a: "上司と相談しながら、30日・60日・90日それぞれにマイルストーンを置くのが基本です。一般的な目安は、30日＝環境・コードベースの理解と関係づくり、60日＝小〜中規模タスクの完了と最初の成果、90日＝機能開発を独力で進められる状態、です。職種やチームによって適切なゴールは異なるため、必ず上司と認識を合わせ、定期的に進捗を振り返って調整しましょう。",
  },
  {
    q: "技術スタックが違う場合のキャッチアップ方法は？",
    a: "まずチームの先輩にキャッチアップ計画を相談するのが近道です。公式ドキュメントの通読、既存コードの読解、ペアプログラミングでの学習が効果的とされます。最初の数ヶ月は業務時間外の自主学習が必要になる場合もありますが、無理のない範囲で。新しいスタックでも、これまで培った設計力・問題解決力は十分に活きます。継続学習の進め方は継続的なスキルアップの記事も参考にしてください。",
  },
  {
    q: "早期に成果を出すにはどうすればよいですか？",
    a: "大きな機能より、確実に終わる『クイックウィン』から着手するのが定石です。ドキュメントの不備の修正、小さなバグ修正、開発環境の改善、オンボーディング手順の整備などは、短期間で完了でき、周囲にも価値が伝わりやすい領域です。小さな成果を早めに積み重ねて存在感を示してから、徐々に大きなタスクへ広げていくと、信頼構築と成果の両立がしやすくなります。",
  },
  {
    q: "前職と文化が違いすぎて戸惑います。どうすればよいですか？",
    a: "文化の違いは『批判の対象』ではなく『学びの対象』と捉えるのがコツです。前職を基準に良し悪しを判断すると、無意識に否定的な発言が増え、チームとの溝が生まれます。まずは新しい文化の良い面を見つけ、なぜその進め方になっているのかを理解しましょう。多くの場合、数ヶ月で慣れます。どうしても合わない点があれば、関係ができてから上司に相談すると建設的です。",
  },
  {
    q: "90日を過ぎても馴染めない場合はどうすればよいですか？",
    a: "まずは上司や人事に状況を率直に相談しましょう。期待値のずれや業務の進め方は、対話で解消できることが少なくありません。それでも改善が見込めず、健康やキャリアへの悪影響が続く場合は、次の選択肢を検討するのも一つです。ただし短期離職は次の転職に影響しうるため慎重に。試用期間中の判断については試用期間の記事も参考にしてください。",
  },
  {
    q: "オンボーディングが整っていない会社ではどうすればよいですか？",
    a: "受け身で待つより、自分から動いて情報を取りにいく姿勢が立ち上がりを早めます。誰に何を聞けばよいかを早めに把握し、自分用のキャッチアップメモを作り、不足しているドキュメントは自分で整備していきます。整備した内容は後続メンバーの役にも立つため、それ自体が早期の成果になります。受け入れ側の改善余地に気づいたら、批判ではなく提案の形で共有しましょう。",
  },
];

export default function First90DaysPage() {
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
        title="入社後90日の過ごし方【30/60/90日プランと信頼構築】"
        description="転職後の最初の90日間で信頼を構築し早期に成果を出すための30/60/90日プランを解説。30代・40代エンジニアが新しい職場で立ち上がるロードマップを紹介します。"
        url="/knowledge/first-90days/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "入社後90日" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          入社後90日の過ごし方【30/60/90日プランと信頼構築】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 最初の90日で信頼を築き早期に成果を出す方法
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            「最初の90日で転職の成否が決まる」と言われるほど、入社直後の立ち上がりは重要です。本記事では、30代・40代のミドルエンジニアが新しい職場で信頼を獲得し、早期に成果を出すための30/60/90日プランを、具体的なアクションとともに解説します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：最初の90日は「信頼の貯金」を作る期間</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・大きな成果を焦るより、<strong>期待値のすり合わせと小さな約束を守る</strong>ことを優先する。</li>
              <li>・<strong>30日＝理解、60日＝貢献、90日＝自走</strong>のリズムで段階的に立ち上がる。</li>
              <li>・成果は<strong>クイックウィン</strong>から。短期で終わる改善を早めに重ねて存在感を出す。</li>
              <li>・前職比較・いきなりの大改革・抱え込みは<strong>NG行動</strong>。背景理解を先に。</li>
            </ul>
          </div>
        </section>

        {/* なぜ重要 */}
        <section id="why" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ最初の90日が重要なのか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            入社直後は、周囲があなたの仕事ぶりを最も注意深く観察している時期です。ここで「信頼できる人」という第一印象を作れると、その後の仕事の任され方やコミュニケーションが格段にスムーズになります。逆に序盤で躓くと、印象を覆すのに何倍もの時間と労力がかかります。だからこそ、最初の90日は短距離走ではなく、信頼という資産を積み立てる期間と捉えるのが得策です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお、入社後の早期適応は、受け入れ側のオンボーディングの質にも左右されます。会社の受け入れ体制を活かしつつ、自分からも動く姿勢が大切です。受け入れ側の視点は
            <Link href="/knowledge/onboarding/" className="text-blue-600 hover:underline">オンボーディング成功法</Link>
            も参考にしてください。
          </p>
        </section>

        {/* ロードマップ */}
        <section id="roadmap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30/60/90日プラン ロードマップ</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">期間</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">テーマ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体的なアクション</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ゴール</th>
                </tr>
              </thead>
              <tbody>
                {roadmap.map((r, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.span}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.theme}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.action}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 目安です。職種・チーム・既存ドキュメントの整備状況によって適切なゴールは変わります。必ず上司と認識を合わせてください。</p>
        </section>

        {/* フェーズ */}
        <section id="phase" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各フェーズで意識すべきこと</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">第1フェーズ（1〜30日）</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・主要メンバーと1on1を実施</li>
                <li>・開発環境を完全にセットアップ</li>
                <li>・アーキテクチャを自分で図にしてみる</li>
                <li>・気づいた改善点をメモに残す</li>
                <li>・小さくても最初のPRを出す</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">第2フェーズ（31〜60日）</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>・小〜中規模の機能開発を完了</li>
                <li>・コードレビューで建設的に関与</li>
                <li>・ドキュメント整備に貢献</li>
                <li>・改善提案を1つ以上行う</li>
                <li>・上司と中間振り返りを実施</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-3">第3フェーズ（61〜90日）</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>・機能を設計から実装まで独力で担当</li>
                <li>・チームの意思決定に参加</li>
                <li>・新メンバーをサポートする側へ</li>
                <li>・3ヶ月の振り返りと次の目標設定</li>
                <li>・自分の強みを活かした貢献を確立</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 信頼構築 */}
        <section id="trust" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">信頼を構築する具体アクション</h2>
          <div className="space-y-4">
            {trust.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* クイックウィン */}
        <section id="win" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">早期の成果（クイックウィン）の出し方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            早期に成果を出すには、大きな機能に挑む前に「短期間で確実に終わり、価値が伝わりやすい」タスクを選ぶのが定石です。次のような領域は、入社直後でも貢献しやすいクイックウィンです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>READMEやセットアップ手順の不備を修正し、次の入社者が困らない状態にする</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>放置されていた小さなバグや警告を1〜2件解消する</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>ローカル開発環境やCIの軽微な改善（ビルド時間短縮など）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>暗黙知になっている運用手順をドキュメント化する</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-0.5">✓</span><span>コードレビューで丁寧なフィードバックを返し、チームに貢献する</span></li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            ポイントは、成果を「自分のため」ではなく「チームのため」の形で出すこと。周囲の負担を減らす貢献は、信頼構築と相性が良く、早期の評価につながります。
          </p>
        </section>

        {/* NG行動 */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">90日間で避けるべきNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {item.title}</h3>
                <p className="text-sm text-blue-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：即戦力プレッシャーとの付き合い方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の中途入社は「即戦力」を強く期待されます。その期待を力に変えつつ、空回りを避けるには、年齢相応の立ち回りが効きます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「すぐ成果」より「正しい立ち上がり」を交渉する</h3>
              <p className="text-sm text-slate-600">即戦力期待が強いほど、入社初週の期待値すり合わせが重要です。キャッチアップに必要な時間を率直に共有し、現実的なマイルストーンを合意しておくと、後の評価のずれを防げます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">年下の上司・メンバーへの敬意を行動で示す</h3>
              <p className="text-sm text-slate-600">ミドル層では、上司やリードが年下というケースが珍しくありません。経験を盾にせず、相手の判断や進め方を尊重する姿勢が、スムーズな受け入れにつながります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">蓄積した「設計力・調整力」を早めに見せる</h3>
              <p className="text-sm text-slate-600">技術スタックが新しくても、設計判断・トレードオフの整理・関係者調整といったミドルの強みはすぐに活きます。コードレビューや設計議論で価値を示すと、立ち上がりの遅さを補えます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">合わないと感じても90日は様子を見る</h3>
              <p className="text-sm text-slate-600">序盤の違和感は環境への不慣れが原因のことも多いものです。短期離職はミドルほど影響が大きいため、まず上司に相談しつつ様子を見ます。それでも難しい場合の判断は<Link href="/knowledge/probation/" className="text-blue-600 hover:underline">試用期間の記事</Link>を参考に。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">入社後の悩みも相談できます</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントは入社後のフォローも充実。立ち上がりの不安があれば気軽に相談できます。
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
              { name: "オンボーディング成功法", href: "/knowledge/onboarding/" },
              { name: "試用期間（制度と期間中の転職）", href: "/knowledge/probation/" },
              { name: "継続的なスキルアップ戦略", href: "/knowledge/continuous-learning/" },
              { name: "転職を後悔しないチェックリスト", href: "/knowledge/regret/" },
              { name: "退職の伝え方ガイド", href: "/knowledge/resignation/" },
              { name: "転職スケジュール（在職中の進め方）", href: "/knowledge/timeline/" },
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
