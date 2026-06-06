import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "女性エンジニアの転職【30代40代・両立と企業の見極め方】",
  description:
    "女性エンジニアが30代・40代で転職を成功させる方法。ライフイベントとの両立、産育休実績・女性管理職の確認方法、面接で聞いてよいこと・例文を具体的に解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：見極めるべきは「制度の有無」より「使われ方」" },
  { id: "life-event", label: "ライフイベントとキャリアの両立をどう設計するか" },
  { id: "company-check", label: "企業の見極め方（産育休実績・女性管理職の確認方法）" },
  { id: "interview-q", label: "面接で聞いてよいこと・聞き方の例文" },
  { id: "ng-question", label: "違法・不適切な質問への対処" },
  { id: "salary", label: "年収・市場データで見る女性エンジニアの立ち位置" },
  { id: "checklist", label: "向いている企業・避けたい企業チェックリスト" },
  { id: "mid-career", label: "30代・40代女性エンジニアの独自視点" },
  { id: "faq", label: "よくある質問" },
];

const lifeStages = [
  { stage: "30代前半（出産前・育児前）", point: "裁量と専門性を伸ばす時期。年収レンジの基準を作っておく", check: "評価制度の透明性／昇給の実績／産育休取得後の復帰ポジション" },
  { stage: "30代後半（妊娠・育児期）", point: "成果評価かつ柔軟な働き方ができる環境へ。フルタイム前提の文化を避ける", check: "時短勤務の実例／フルリモート可否／子の看護休暇の取得実績" },
  { stage: "40代（育児が一段落〜並走）", point: "マネジメントまたは専門職トラックで年収を再加速させる時期", check: "女性管理職の有無／管理職登用の年齢分布／評価者バイアスの有無" },
];

const interviewQuestions = [
  { q: "御社のエンジニア職で、産休・育休を取得して復帰された方はいらっしゃいますか。差し支えなければ人数や復帰後の働き方を教えてください。", intent: "実績の有無を「数」で確認する。0人なら制度はあっても運用されていない可能性。" },
  { q: "育休からの復帰後、どのようなポジション・職務で働かれているケースが多いですか。", intent: "復帰後に補佐的な役割へ固定されていないか（マミートラック化）を確認。" },
  { q: "時短勤務やフルリモートで働いているエンジニアの方は、評価や昇給で不利にならない仕組みになっていますか。", intent: "成果評価か、稼働時間評価かを見極める。" },
  { q: "技術職で管理職になられている女性の方はいらっしゃいますか。", intent: "ロールモデルとキャリアパスの有無を確認。" },
  { q: "急な子どもの発熱などで稼働できない日が出た場合、チームではどのようにカバーし合っていますか。", intent: "制度ではなく現場の運用・空気感を確認する。" },
];

const faqs = [
  { q: "女性エンジニアは30代・40代で転職に不利になりますか？", a: "年齢そのものより、求めるスキルと経験が合致しているかで判断されます。IT人材は不足が続くと見込まれており（経済産業省「IT人材需給に関する調査」2019年公表の試算では2030年に最大約79万人の不足）、即戦力となる経験者の需要は高い状態です。ライフイベントを理由に応募を躊躇する必要はありませんが、働き方の条件は事前にエージェントへ明確に伝えておきましょう。" },
  { q: "出産・育児のブランクは転職で不利になりますか？", a: "1〜2年程度のブランクは、多くのIT企業で大きな不利にはなりにくいのが実情です。ブランク中に技術のキャッチアップ（学習、個人開発、OSS貢献など）を続けていたことを示せると、学習意欲のアピールになります。職務経歴書では空白期間の理由を簡潔に記し、復帰後に貢献できる根拠を具体的に書くことが重要です。" },
  { q: "時短勤務でもエンジニアとして転職できますか？", a: "可能です。フルリモートやフレックスと組み合わせれば、時短でも成果を出しやすい環境は増えています。ただし「制度がある」ことと「実際に使われ評価で不利にならない」ことは別です。面接で時短勤務者の実例と、その人たちの評価・昇給の扱いを必ず確認しましょう。" },
  { q: "面接で産休・育休の実績を聞いても失礼になりませんか？", a: "失礼にはあたりません。「長く働きたいので確認したい」という前向きな文脈で聞けば、むしろ計画性のある印象を与えます。聞き方は本ページの例文を参考にしてください。逆に企業側があなたに結婚・出産の予定を質問するのは、就職差別につながる不適切な質問とされています。" },
  { q: "女性が働きやすいIT企業はどう探せばよいですか？", a: "求人票だけでなく、OpenWorkなどの口コミ、企業のサステナビリティ報告書やダイバーシティ関連の開示、有価証券報告書の女性管理職比率などの一次情報を併せて確認します。転職エージェント経由なら、求人票に出ない残業実態や育休取得状況を教えてもらえる場合があります。" },
  { q: "女性特化型エージェントとIT特化型エージェントはどちらを使うべきですか？", a: "併用が有効です。IT特化型（レバテックキャリア、Geeklyなど）で技術にマッチした求人の幅を確保しつつ、女性のキャリア支援に知見のあるエージェントで働き方の相談をする、という使い分けが現実的です。複数社の使い分けは別記事も参考にしてください。" },
  { q: "時短だと年収が下がるのが心配です。", a: "所定労働時間が短くなる分の減額は一般的ですが、職務や成果が変わらないのに過度に低く見積もられる必要はありません。市場価値を複数のエージェントで把握したうえで、フルタイム換算での妥当な水準かを基準に交渉しましょう。" },
];

export default function WomanEngineerPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="女性エンジニアの転職【30代40代・両立と企業の見極め方】" description="女性エンジニアが30代・40代で転職を成功させる方法。ライフイベントとの両立、産育休実績・女性管理職の確認方法、面接で聞いてよいこと・例文を具体的に解説します。" url="/knowledge/woman-engineer/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "女性エンジニアの転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">女性エンジニアの転職【30代・40代】ライフイベントとの両立と企業の見極め方</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | ライフイベントとキャリアを両立する転職戦略</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">女性エンジニアの30代・40代の転職では、「技術力をどう評価してもらうか」と「ライフイベントと両立できる環境をどう見極めるか」の二つを同時に進める必要があります。本記事では、産育休実績や女性管理職の確認方法、面接で聞いてよいことの具体的な例文、避けたい企業の見分け方まで、実務で使える形でまとめます。30代・40代のミドルエンジニアの視点に特化した内容です。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["経済産業省「IT人材需給に関する調査」（2019年公表）", "厚生労働省 job tag", "各社有価証券報告書・公式開示"]} />

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：見極めるべきは「制度の有無」より「使われ方」</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">育休制度・時短制度・リモート制度は、いまや多くのIT企業が「制度としては」持っています。差がつくのは<strong>その制度が実際に使われ、使った人が評価・昇給で不利になっていないか</strong>です。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. 制度の有無ではなく「直近の取得実績の人数」と「復帰後のポジション」を確認する</li>
              <li>2. 女性管理職の有無は、有価証券報告書の女性管理職比率（上場企業）で客観的に確認できる</li>
              <li>3. 面接で聞いてよい。むしろ「長く働きたいから確認したい」という前向きな姿勢として伝わる</li>
            </ul>
          </div>
        </section>

        <section id="life-event" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ライフイベントとキャリアの両立をどう設計するか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">転職は「今の働き方」だけでなく「3〜5年後のライフステージ」を見据えて判断するのがミドル世代のコツです。今フルタイムで働けても、数年後に育児や家族の介護が重なる可能性があります。下表はライフステージごとに見るべきポイントの整理です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ライフステージ</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">転職時の重点</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認すべきこと</th></tr></thead>
              <tbody>
                {lifeStages.map((s, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.stage}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.point}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">特に意識したいのが、育休復帰後に責任の軽い補助的業務に固定される「マミートラック」を避けることです。復帰後も技術の第一線・意思決定に関わり続けられるかは、転職先選びの段階で見極めておきたいポイントです。働き方全般の考え方は<Link href="/knowledge/work-life-balance/" className="text-blue-600 hover:underline">ワークライフバランス重視の転職</Link>も参考になります。</p>
        </section>

        <section id="company-check" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業の見極め方（産育休実績・女性管理職の確認方法）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「女性が働きやすい」という抽象的な評判ではなく、確認可能な一次情報・客観データで判断します。具体的な確認手段は次のとおりです。</p>

          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 女性管理職比率（上場企業は有価証券報告書で確認可能）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">上場企業は有価証券報告書や統合報告書で女性管理職比率を開示している場合があります。技術職に限った数字でなくても、組織全体の傾向を客観的に把握できます。比率が低い企業が即NGというわけではありませんが、「技術職の女性管理職がいるか」は面接で別途確認しましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. 産休・育休の取得実績と復帰率</h3>
              <p className="text-sm text-slate-600 leading-relaxed">「くるみん」「えるぼし」などの認定取得や、自社のサステナビリティ・人的資本開示で育休取得率・復帰率を公表している企業があります。男性の育休取得率が高い企業は、育児への理解が組織に浸透している傾向のシグナルになります。数字は公式開示・採用ページの記載を一次情報として確認してください。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. 口コミプラットフォームでの傾向確認</h3>
              <p className="text-sm text-slate-600 leading-relaxed">OpenWork・転職会議などでは、制度の運用実態や育児中社員の働き方に関する声が見られます。個別の投稿を鵜呑みにせず、複数の投稿に共通する傾向として読み取るのが安全です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">4. エージェント経由の内部情報</h3>
              <p className="text-sm text-slate-600 leading-relaxed">残業実態、時短勤務者の有無、復帰後の配属傾向など、求人票に載らない情報をエージェントが把握している場合があります。<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">初回面談</Link>の段階で「育児と両立しているエンジニアが実際にいる職場か」を遠慮なく相談しましょう。</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4 text-sm text-amber-800">認定制度・公的支援制度の詳細や最新の要件は、厚生労働省など公式情報を必ずご確認ください。本記事は一般的な確認方法の説明にとどめています。</div>
        </section>

        <section id="interview-q" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で聞いてよいこと・聞き方の例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「聞きづらい」と感じる質問ほど、入社後のミスマッチを防ぐ重要な情報です。下記は前向きな文脈で聞ける例文と、その質問の意図です。逆質問の時間や、人事・現場メンバーとのカジュアル面談で活用してください。</p>
          <div className="space-y-4">
            {interviewQuestions.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <p className="text-slate-800 font-medium mb-2">「{item.q}」</p>
                <p className="text-sm text-slate-500"><span className="font-bold text-slate-600">意図：</span>{item.intent}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">いずれも「長期的に貢献したいので確認させてください」と前置きすると、計画性のある候補者として好印象です。面接全般の準備は<Link href="/knowledge/behavioral/" className="text-blue-600 hover:underline">行動面接（STAR法）対策</Link>も参考にしてください。</p>
        </section>

        <section id="ng-question" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違法・不適切な質問への対処</h2>
          <p className="text-slate-600 leading-relaxed mb-4">採用選考では、本人の適性・能力に関係のない事項を質問することは就職差別につながる不適切な行為とされています。結婚・出産の予定や、家庭環境を理由に採否を判断することは公正な採用選考の観点から問題があります。具体的な該当範囲や最新の指針は厚生労働省の公式情報をご確認ください。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <p className="font-bold text-slate-700 mb-2 text-sm">不適切な質問を受けたときの対処の考え方</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・「業務との関連でお伺いされていますか」と確認し、回答するかは自分で判断してよい</li>
              <li>・無理に答える義務はない。回答を避けてもよい</li>
              <li>・こうした質問が出ること自体が、入社後の働きやすさを判断する材料になる</li>
              <li>・エージェント経由なら、担当者から企業側へ配慮を依頼してもらえる場合がある</li>
            </ul>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・市場データで見る女性エンジニアの立ち位置</h2>
          <p className="text-slate-600 leading-relaxed mb-4">IT人材は不足が続くと見込まれており、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人の不足が示されています。経験者の需要が高い市況は、ライフイベントを抱える人にとっても交渉余地を生みます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">職種の平均像として、厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳とされています（令和7年賃金構造基本統計調査ベース）。これは男女合算・全国の参考値であり、個々の年収は経験・スキル・地域で大きく変わります。自分の市場価値は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>を参考に、複数のエージェントで客観的に確認しましょう。</p>
          <p className="text-slate-600 leading-relaxed">時短勤務の場合でも、職務・成果が変わらないなら過度に低い提示を受け入れる必要はありません。年収交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>でも解説しています。</p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている企業・避けたい企業チェックリスト</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">✓ 候補にしてよい企業</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>✓ 直近で育休を取得し復帰したエンジニアが複数いる</li>
                <li>✓ 技術職の女性管理職、または管理職トラックにいる女性がいる</li>
                <li>✓ 成果ベースの評価制度で、稼働時間ではなくアウトプットで評価される</li>
                <li>✓ フルリモート・フレックスが「制度」でなく「日常」として運用されている</li>
                <li>✓ 男性の育休取得実績がある</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-3">✕ 慎重に判断したい企業</h3>
              <ul className="space-y-2 text-sm text-red-900">
                <li>✕ 制度はあるが「取得実績は確認できない」と濁される</li>
                <li>✕ 復帰後は補助業務が中心、という前提で話が進む</li>
                <li>✕ 面接で結婚・出産の予定を立ち入って質問してくる</li>
                <li>✕ 評価が長時間労働・フルタイム前提の文化</li>
                <li>✕ 女性社員が極端に少なく、理由の説明も曖昧</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代女性エンジニアの独自視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">30代・40代のミドル世代は、若手と違い「即戦力としての専門性」と「ライフイベントとの両立条件」を両立して交渉できる強みがあります。一方で、年齢を理由に応募を自粛してしまうケースも見られます。次の3点を意識すると、選択肢を狭めずに進められます。</p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">経験を「マネジメント耐性」として翻訳する</h3><p className="text-sm text-blue-700">育児や家族の事情で培った段取り力・優先順位付けは、チームリードやプロジェクト管理に活きるスキルとして言語化できます。<Link href="/knowledge/management/" className="text-blue-700 underline">マネジメントへの転向</Link>も視野に入ります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">条件は「妥協」ではなく「設計」として伝える</h3><p className="text-sm text-blue-700">時短・リモートは「お願い」ではなく、成果を出すための働き方として提示すると交渉が前向きに進みます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">在職中に動き、内定を得てから判断する</h3><p className="text-sm text-blue-700">生活基盤を持つミドル世代は、在職中の転職活動でリスクを抑えるのが鉄則です。<Link href="/knowledge/timeline/" className="text-blue-700 underline">転職活動のスケジュール</Link>も参考にしてください。</p></div>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">女性エンジニアの転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、働き方の条件を伝えたうえで、技術にマッチした求人を紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "家族持ちエンジニアの転職戦略", href: "/knowledge/family/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
