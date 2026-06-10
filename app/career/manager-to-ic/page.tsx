import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "管理職→現場エンジニア復帰（IC）への転職ガイド【2026年版】",
  description:
    "マネージャーから個人貢献者（IC）として現場エンジニアに復帰するための現実性、技術キャッチアップの進め方、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：IC復帰の現実性と最大の課題" },
  { id: "gap", label: "管理職とICのスキルギャップ比較表" },
  { id: "build", label: "技術キャッチアップの進め方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がIC復帰を目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "最新の実装力・技術トレンド",
    mgr: "△ ブランクが生じ、現場感覚が鈍りやすい",
    ic: "◎ 最大のキャッチアップ対象。日々手を動かす前提",
  },
  {
    skill: "モダンな開発環境・ツール",
    mgr: "△ マネジメント期間に入れ替わっている可能性",
    ic: "◎ Git・CI/CD・コンテナ等の現行ツールに習熟が必要",
  },
  {
    skill: "設計・技術的意思決定",
    mgr: "○ マネジメントで判断軸は維持している場合が多い",
    ic: "◎ 実装に落とせるレベルの設計力が問われる",
  },
  {
    skill: "ピープルマネジメント",
    mgr: "◎ 評価・育成・採用の経験が豊富",
    ic: "○ ICでは必須ではないが、メンタリングで活きる",
  },
  {
    skill: "チーム視点・調整力",
    mgr: "◎ 全体最適とステークホルダー調整の蓄積",
    ic: "◎ 強みとして残る。テックリード兼務で評価されやすい",
  },
  {
    skill: "自走でのコードアウトプット",
    mgr: "△ 自分でデリバリーする量が減っていることが多い",
    ic: "◎ 一定量のコードを安定して出せることが前提",
  },
];

const buildSteps = [
  {
    title: "まず現行の開発環境に手を慣らす",
    desc: "マネジメント期間にGit運用、CI/CD、コンテナ、クラウドの標準が更新されている可能性があります。小さなアプリでも一気通貫で作り、PR・レビュー・デプロイまでの現行フローを自分の手で再現しておきます。ブランクの不安は、実際に手を動かすことで具体的な課題リストに変わります。",
  },
  {
    title: "担当領域の技術を実装レベルまで取り戻す",
    desc: "判断はできても実装に落とせない、という状態がICでは最も問われます。得意だった領域を一つ選び、設計だけでなく動くコードとして仕上げます。GitHubで公開できる形にしておくと、ブランクへの懸念を実物で打ち消せます。",
  },
  {
    title: "最新のトレンドをキャッチアップする",
    desc: "言語・フレームワークのバージョン更新、生成AIを活用した開発手法など、現場の前提が変わっている領域を把握します。マネジメントで培った『要点を素早く掴む力』はキャッチアップで強みになります。",
  },
  {
    title: "マネジメント経験を強みとして位置づける",
    desc: "IC復帰でもマネジメント経験は無駄になりません。設計判断、レビュー、若手メンタリング、ステークホルダー調整は、テックリード的に評価されます。『現場に戻るが、チームを引き上げられるIC』という立ち位置を言語化します。",
  },
  {
    title: "アウトプットの量と安定性を取り戻す",
    desc: "ICは一定量のコードを継続して出せることが前提です。個人開発やOSSへの小さな貢献を習慣にし、コミットの継続性で『手が動く状態』を示せるようにします。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "現行の開発フロー（Git・CI/CD・コンテナ・クラウド）を小さなアプリで一通り再現する",
      "得意領域を実装レベルまで取り戻し、GitHubに動くものを置く",
      "マネジメント経験のうち、技術判断・設計・メンタリングの実績を棚卸しする",
    ],
  },
  {
    phase: "技術力の証明づくり（3〜6ヶ月）",
    items: [
      "個人開発やOSS貢献でコミットを継続し、手が動く状態を可視化する",
      "最新トレンド（言語のバージョン更新・生成AI活用等）をキャッチアップする",
      "『ICだがチームを引き上げられる』という立ち位置を職務経歴書向けに整理する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、IC/テックリード求人の技術要件をすり合わせる",
      "ブランクへの懸念に対し、直近のコードアウトプットで答えられるよう準備する",
      "面接ではマネジメント経験をICの強みに変換して説明する",
    ],
  },
];

const faqs = [
  {
    q: "管理職から現場エンジニア（IC）への復帰は可能？",
    a: "可能です。ただし最大の課題は技術のキャッチアップです。マネジメント期間に実装の現場感覚や開発ツールの標準が更新されているため、直近のコードアウトプットで『今も手が動く』ことを示せるかが成否を分けます。マネジメント経験自体はテックリード的に評価されることが多く、無駄にはなりません。",
  },
  {
    q: "IC復帰の最大のハードルは何？",
    a: "技術キャッチアップです。判断はできても実装に落とせない状態が最も懸念されます。Git運用・CI/CD・コンテナ・クラウドなど現行の開発フローに手を慣らし、得意領域を動くコードとして仕上げ、GitHubで公開しておくことが有効です。",
  },
  {
    q: "IC復帰すると年収は下がる？",
    a: "ケースによります。管理職手当が外れる分、一時的に下がる可能性はあります。一方で、高度な専門性を持つICには管理職と同等以上のレンジを用意する企業もあります。提示は企業・スキルにより幅が大きいため、複数社で市場価値を確認するのが安全です。",
  },
  {
    q: "マネジメント経験はIC復帰でも評価される？",
    a: "評価されます。設計判断、技術的意思決定、レビュー、若手メンタリング、ステークホルダー調整は、テックリード的なICとして高く評価される要素です。『現場に戻るが、チームを引き上げられるIC』という立ち位置を打ち出すと差別化しやすくなります。",
  },
  {
    q: "ブランクがあると不利になる？",
    a: "懸念材料にはなりますが、直近のコードアウトプットで打ち消せます。個人開発やOSS貢献でコミットを継続し、現行ツールを使いこなしている事実を示すことが、ブランクへの最も説得力のある回答になります。",
  },
  {
    q: "なぜ管理職から現場に戻りたい人がいる？",
    a: "理由はさまざまですが、ものづくりへの志向が強い、評価・調整業務より技術的課題を解くことにやりがいを感じる、専門性を深めたい、といった動機がよく見られます。マネジメントとICのどちらが自分に合うかは適性の問題で、戻る選択は前向きなキャリア判断になり得ます。",
  },
  {
    q: "IC求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、ICやテックリード求人を扱っています。スカウト型のサービスを併用すると、専門性に対する市場価値を客観的に把握しながら進められます。",
  },
];

const related = [
  { name: "エンジニア→EMへのキャリアパス", href: "/career/engineer-to-em/" },
  { name: "テックリードへのキャリアパス", href: "/career/tech-lead/" },
  { name: "Reactスキルガイド", href: "/skill/react/" },
  { name: "マネジメント転職の知識", href: "/knowledge/management/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "40代の転職事情", href: "/age/40s/" },
];

export default function ManagerToIcPage() {
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
        title="管理職→現場エンジニア復帰（IC）への転職ガイド【2026年版】"
        description="マネージャーから個人貢献者（IC）として現場エンジニアに復帰するための現実性、技術キャッチアップの進め方、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/manager-to-ic/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "管理職→IC復帰ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          管理職→現場エンジニア復帰（IC）への転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 技術キャッチアップを乗り越え、マネジメント経験を強みに変える
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          管理職から個人貢献者（IC：Individual Contributor）として現場エンジニアに戻るキャリアは、近年めずらしくなくなってきました。ものづくりへの志向や専門性を深めたい動機から、マネジメントトラックを離れて技術に戻る選択です。一方で、最大の課題は技術のキャッチアップです。このページでは、IC復帰の現実性、技術を取り戻す進め方、マネジメント経験を強みに変える方法までを具体的に解説します。
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
                <a href={`#${item.id}`} className="text-blue-600 hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：IC復帰の現実性と最大の課題</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>管理職から現場エンジニア（IC）への復帰は可能ですが、最大の課題は技術のキャッチアップです。</strong>
              鍵になるのは、直近のコードアウトプットで「今も手が動く」ことを示せるかどうかです。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① ギャップになりやすいのは<strong>最新の実装力・モダンな開発ツール・自走でのコード量</strong></li>
              <li>② 一方で<strong>設計判断・技術的意思決定・メンタリング・調整力</strong>はそのまま強みとして残る</li>
              <li>③ 個人開発やOSSでコミットを継続し、ブランクへの懸念を実物で打ち消すことが成否を分ける</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">管理職とICのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ICに求められるスキルを、管理職としての典型的な状態と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。マネジメント経験で強い行と、ブランクで補強が必要な行の両方が見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">管理職（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ICで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.mgr}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術キャッチアップの進め方</h2>
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
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            技術領域の選び直しには
            <Link href="/skill/react/" className="text-blue-600 hover:underline">Reactスキルガイド</Link>
            などの各スキルガイドが参考になります。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IC復帰は、退職してから慌てて学び直すより、在職中に手を動かして実物を作りながら進めるほうが安全です。ブランクへの不安は、実際にコードを書くことで具体的な課題に変わり、対策が立てやすくなります。
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
            管理職の経歴は、そのままだと「現場から離れた人」に見えがちです。ポイントは、マネジメント経験を技術力とつなげ、「現場に戻れる根拠（直近のコード）」をセットで示すことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（マネジメント業務だけの記載になっている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                開発部門のマネージャーとして〇名のチームを統括。予算管理、メンバーの評価、採用、進捗管理を担当した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（技術判断と直近のアウトプットを示す例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                開発部門のマネージャーとして〇名のチームを統括しつつ、主要機能の技術選定・設計レビューを担当。直近1年は個人開発でTypeScript＋Next.jsのアプリを構築し、Git／CI/CD／コンテナの現行フローを実務水準で運用（GitHubで公開）。マネジメントで培ったレビュー力・設計判断を、現場でのテックリードとして活かすことを志向。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・マネジメント業務だけでなく、関与した技術判断・設計を明記する</li>
                <li>・直近のコードアウトプット（個人開発・OSS）で「今も手が動く」根拠を示す</li>
                <li>・マネジメント経験を『テックリードとして引き上げられるIC』の強みに変換する</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IC復帰時の年収は、管理職手当が外れる分だけ一時的に下がる可能性があります。基準として、レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。一方、高度な専門性を持つICには管理職と同等以上のレンジを用意する企業もあり、スキル次第で上下します。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。提示レンジは企業・専門性により幅が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。IC復帰時の年収は管理職手当の有無やスキル水準で変動するため、複数社での確認を推奨します。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IC復帰は技術要件のすり合わせが重要なため、技術理解のあるアドバイザーがいるIT特化型サービスが向いています。エージェント型と、専門性の市場価値を測れるスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。IC・テックリード求人を扱い、技術要件のすり合わせがしやすいサービスです。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。専門性の高いICにはハイレンジ求人もあり、経験を登録すると自分の市場価値を客観的に把握できます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い企業のIC求人を比較検討したい場合に有効です。",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がIC復帰を目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              ミドル層のIC復帰で最も問われるのは、技術のキャッチアップです。マネジメント期間が長いほど現場の標準は入れ替わっているため、まずは現行の開発フローに自分の手を慣らし、得意領域を動くコードとして取り戻すことが出発点になります。判断力は残っていても、実装に落とせる状態を実物で示すことが必要です。
            </p>
            <p>
              一方で、マネジメント経験は決して無駄になりません。設計判断、レビュー、若手の育成、ステークホルダー調整は、テックリード的なICとして高く評価されます。『現場に戻るが、チームを引き上げられるIC』という独自の立ち位置を打ち出せるのは、ミドル層ならではの強みです。
            </p>
            <p>
              年収の見通しは、
              <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>
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
          <h2 className="text-xl font-bold mb-3">IC復帰を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            技術に強いIT特化型エージェントが、あなたのマネジメント経験を活かせるIC/テックリード求人を提案します。
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
