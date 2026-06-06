import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ワークライフバランス重視のIT転職｜見極め方と残業実態の調べ方",
  description:
    "ワークライフバランス重視のIT転職を解説。WLBが良い企業の見極め方、面接での質問例、口コミサイトを使った残業実態の調べ方を30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "ワークライフバランスを重視すると年収は下がりますか？",
    a: "必ずしも下がりません。リモートやフレックスを導入しつつ高い給与水準を維持している企業も存在します。レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円で、WLBと年収は勤務制度ではなく企業の給与テーブルとポジションで決まります。WLBと年収のどちらを優先するかの順位を決め、その条件で求人を比較しましょう。",
  },
  {
    q: "求人票に「残業月20時間」と書いてあるのは信用できますか？",
    a: "求人票の残業時間は全社平均や目安であることが多く、配属チームやプロジェクトの繁忙状況で大きく異なります。数字をそのまま信用せず、OpenWork等の口コミサイトで実態の傾向を確認したり、エージェント経由で配属予定部署の残業状況を聞いたりして裏取りするのが確実です。",
  },
  {
    q: "残業の実態はどうやって調べればいいですか？",
    a: "口コミサイト（OpenWork・ライトハウス等）の残業・休日出勤に関する社員の声、求人票の固定残業（みなし残業）の時間数、面接での具体的な質問、エージェントが持つ内部情報、の4つを突き合わせて判断します。1つの情報源に依存せず、複数を照合することがポイントです。",
  },
  {
    q: "固定残業（みなし残業）が付いている求人は避けるべき？",
    a: "一概に避ける必要はありませんが、固定残業の時間数は要チェックです。例えば「固定残業45時間分を含む」とあれば、その時間まで残業が前提という見方もできます。固定残業の時間数と、超過分が別途支給されるかを確認しましょう。",
  },
  {
    q: "子育て中でも転職は可能ですか？",
    a: "十分可能です。むしろ子育てへの理解がある企業を選ぶ良い機会です。フレックスタイム、時短勤務、リモートワークなどの制度が実際に使われているかを、エージェントや面接で確認しましょう。制度の有無だけでなく「利用実績があるか」が重要です。",
  },
  {
    q: "WLB重視の転職で後悔するケースはありますか？",
    a: "「楽さ」だけを基準にすると、技術的なチャレンジが少なく市場価値が伸び悩むリスクがあります。WLBと技術的成長の両方を満たせるかという視点で選ぶと後悔しにくくなります。後悔を避けるチェック観点は転職を後悔しないためのチェックリストも参考にしてください。",
  },
  {
    q: "WLB重視の企業を効率的に探すには？",
    a: "IT特化型の転職エージェントに「リモート可」「残業少なめ」「フレックスあり」など条件を具体的に伝えると効率的です。非公開求人にもWLB重視の求人があります。リモート希望ならリモート対応に強いエージェント比較も活用しましょう。",
  },
];

const checkPoints = [
  { num: "1", title: "残業時間の実態", desc: "求人票の残業時間は全社平均や目安。配属予定チームの残業状況を、面接やエージェント経由で確認しましょう。固定残業（みなし残業）の時間数と超過分の扱いも要チェックです。" },
  { num: "2", title: "リモートワークの運用実態", desc: "「リモート可」でも実際の利用頻度はさまざま。制度の有無ではなく「現に使われているか」「配属チームの実出社頻度」を確認します。" },
  { num: "3", title: "フレックスタイムの中身", desc: "コアタイムの時間帯、スーパーフレックス（コアタイムなし）の有無を確認。育児・介護と両立する場合は特に重要です。" },
  { num: "4", title: "有給・休暇の取得しやすさ", desc: "制度として有給があっても、取得しやすい雰囲気かは別問題。口コミサイトの「休みの取りやすさ」に関する声を確認しましょう。" },
  { num: "5", title: "オンコール・休日対応", desc: "SRE・インフラ職はオンコール（障害対応の待機）の頻度・時間帯・手当が生活に直結します。ローテーションの実態を確認しましょう。" },
];

const reviewSites = [
  { name: "OpenWork（オープンワーク）", point: "現職・元社員のクチコミが多く、残業時間や有給取得のスコアが見やすい。回答数が多い企業ほど信頼度が高まる。" },
  { name: "ライトハウス（旧カイシャの評判）", point: "残業・休日出勤、ワークライフバランスのカテゴリ別評価が見られる。en転職と連携した口コミが豊富。" },
  { name: "転職会議", point: "職種別の年収・残業に関する投稿が多い。エンジニア職に絞った声を探しやすい。" },
];

const interviewQuestions = [
  {
    cat: "残業・繁忙の実態",
    qs: [
      "配属予定チームの直近の平均残業時間はどのくらいでしょうか？",
      "繁忙期はいつ頃で、その時期の残業はどの程度になりますか？",
      "直近で炎上したプロジェクトや、長時間労働が続いた時期はありましたか？",
    ],
  },
  {
    cat: "休暇・働き方",
    qs: [
      "有給休暇は実際にどのくらい取得されていますか。連続での取得実績はありますか？",
      "リモート・フレックスは配属チームで実際にどのように運用されていますか？",
    ],
  },
  {
    cat: "オンコール・緊急対応",
    qs: [
      "障害対応やオンコールの当番はどのくらいの頻度で回ってきますか。手当はありますか？",
      "休日や深夜の対応が発生した場合、代休などの仕組みはありますか？",
    ],
  },
];

export default function WorkLifeBalancePage() {
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
        title="ワークライフバランス重視のIT転職｜見極め方と残業実態の調べ方"
        description="WLBが良い企業の見極め方、面接での質問例、口コミサイトを使った残業実態の調べ方を30代・40代エンジニア向けに解説します。"
        url="/knowledge/work-life-balance/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "ワークライフバランス重視の転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワークライフバランス重視のIT転職｜見極め方と残業実態の調べ方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | WLB重視で働ける企業の見極め方
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["レバテック公表の年代別平均年収（2025年）"]}
        />

        {/* 結論ファースト */}
        <section className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：求人票の残業時間を鵜呑みにせず、口コミ・面接・エージェントの3点で裏取りする</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              WLB重視の転職で失敗しないコツは、<strong>求人票の「残業月20時間」を信じきらず、口コミサイトの傾向・面接での具体質問・エージェントの内部情報の3つで実態を照合すること</strong>です。求人票の数字は全社平均や目安であることが多く、配属チームによって体感は大きく変わります。
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              また「楽さ」だけを基準にすると技術的な成長が止まるリスクがあるため、WLBと成長の両立という視点で企業を選びましょう。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm text-blue-700">
            <li><a href="#points" className="hover:underline">企業のWLBを見極める5つのポイント</a></li>
            <li><a href="#zangyo" className="hover:underline">残業実態の調べ方（口コミサイトの使い方）</a></li>
            <li><a href="#interview" className="hover:underline">面接での質問例</a></li>
            <li><a href="#balance" className="hover:underline">WLBとキャリア成長を両立させるコツ</a></li>
            <li><a href="#middle" className="hover:underline">30代・40代視点でのWLB転職</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        {/* 見極めポイント */}
        <section id="points" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業のWLBを見極める5つのポイント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            WLBの良し悪しは、制度の有無だけでなく「制度が実際に使われているか」で決まります。以下の5点を軸に確認しましょう。
          </p>
          <div className="space-y-4">
            {checkPoints.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 残業実態の調べ方 */}
        <section id="zangyo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">残業実態の調べ方（口コミサイトの使い方）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            残業の実態は、1つの情報源だけでは正確に掴めません。以下の4つの情報源を突き合わせて判断するのがおすすめです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
            <ol className="space-y-3 text-sm text-slate-700 list-decimal pl-5">
              <li><strong>口コミサイト</strong>：残業・休日出勤に関する社員の声の傾向を確認する</li>
              <li><strong>求人票の固定残業</strong>：みなし残業の時間数を確認する（時間数が大きいほど残業前提の可能性）</li>
              <li><strong>面接での質問</strong>：配属予定チームの繁忙期や直近の残業状況を具体的に聞く</li>
              <li><strong>エージェントの内部情報</strong>：求人票に載らない部署単位の実態を確認する</li>
            </ol>
          </div>
          <h3 className="font-bold text-slate-800 mb-3">主な口コミサイトと使い方</h3>
          <div className="space-y-3 mb-4">
            {reviewSites.map((site, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h4 className="font-bold text-slate-800 mb-1">{site.name}</h4>
                <p className="text-sm text-slate-600">{site.point}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-2">口コミサイトを読むときの注意点</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>- 投稿時期を確認する。古い口コミは制度・体制が変わっている可能性がある</li>
              <li>- 退職者は不満を書きやすい傾向があるため、極端な評価は割り引いて読む</li>
              <li>- 投稿数が少ない企業はサンプルが偏るため、傾向として参考程度に留める</li>
              <li>- 「全社平均」と「自分が入る部署」は別物。最終的には面接・エージェントで裏取りする</li>
            </ul>
          </div>
        </section>

        {/* 面接での質問例 */}
        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での質問例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            残業や休暇の実態は、面接で踏み込んで聞いてこそ分かります。そのまま使える質問例を場面別にまとめました。
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
          <p className="text-xs text-slate-500 mt-3">※ ネガティブに受け取られないよう「入社後の働き方を具体的にイメージしたい」という文脈で聞くのがコツです。</p>
        </section>

        {/* 両立のコツ */}
        <section id="balance" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">WLBとキャリア成長を両立させるコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 「楽な環境」と「効率的な環境」を区別する</h3>
              <p className="text-sm text-blue-700">WLBが良い ≠ 仕事が楽。開発プロセスが整い効率的に働ける環境なら、労働時間を抑えつつ成果を出せます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 浮いた時間を自己投資に回す</h3>
              <p className="text-sm text-blue-700">残業が減った分を技術学習や副業に充てれば、市場価値を維持・向上できます。副業との両立は<Link href="/knowledge/side-project/" className="text-blue-600 hover:underline">副業しながら転職活動</Link>を参照。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. モダンな技術スタックの環境を選ぶ</h3>
              <p className="text-sm text-blue-700">開発効率の高い環境は、結果的に残業も少なくなりやすい傾向があります。レガシーで非効率な環境ほど無理な残業が発生しがちです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. エージェントの内部情報を使い倒す</h3>
              <p className="text-sm text-blue-700">エージェントは求人企業の働き方の実態を把握していることがあります。求人票に載らない情報を引き出しましょう。複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの複数併用ガイド</Link>へ。</p>
            </div>
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点でのWLB転職</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：育児期と成長期が重なる時期</h3>
              <p className="text-sm text-blue-700">保育園の送迎や急な発熱対応など、時間の融通が必要になる世代。フレックス・リモートの「実利用率」を重視しつつ、技術的な成長機会も確保できる企業を選ぶと、長期的に後悔が少なくなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：健康・介護・マネジメント負荷への配慮</h3>
              <p className="text-sm text-blue-700">体力面や親の介護、チームマネジメントの負荷が重なりやすい世代。オンコールや休日対応の頻度、マネジメント職の労働実態を具体的に確認したい。年収とWLBの優先順位を明確にしておくと判断がぶれません。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収とのバランス</h3>
              <p className="text-sm text-blue-700">レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円。WLBを取りつつこの水準を維持できる企業も存在します。「WLBか年収か」の二者択一ではなく、両者の優先順位を決めて比較しましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">WLB重視の求人をプロに探してもらおう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、リモート可・残業少なめの非公開求人を実態とあわせて紹介してもらえます。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            IT転職エージェント比較を見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
              { name: "リモート対応に強いエージェント比較", href: "/compare/remote-agents/" },
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
              { name: "家庭持ちエンジニアの転職戦略", href: "/knowledge/family/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "副業しながら転職活動", href: "/knowledge/side-project/" },
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
