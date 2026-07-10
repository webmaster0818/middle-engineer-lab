import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "自己PRの書き方・例文【エンジニア転職／Before After付き】";
const DESCRIPTION =
  "エンジニア転職の自己PRを、構成テンプレート・Before/After例文・職種別の例文・NG例まで実践的に解説。30代40代が経験を強みに変え、書類選考と面接で通用する自己PRを作るための手順をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/self-pr/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：自己PRの基本構成" },
  { id: "framework", label: "自己PRを作る4ステップ" },
  { id: "beforeafter", label: "Before/Afterで見る改善例" },
  { id: "examples", label: "職種別の自己PR例文" },
  { id: "midlife", label: "30代・40代の自己PRの作り方" },
  { id: "ng", label: "避けるべきNG表現" },
  { id: "interview", label: "面接での自己PRの伝え方" },
  { id: "faq", label: "よくある質問" },
];

const steps = [
  {
    num: "1",
    title: "結論（強み）を一文で示す",
    desc: "「私の強みは○○です」と冒頭で言い切ります。読み手は最初の一文で要点をつかむため、ここがぼやけると全体が弱くなります。",
  },
  {
    num: "2",
    title: "根拠となる経験・実績を挙げる",
    desc: "強みを裏づける具体的なエピソードを示します。どんな課題に対し、何をして、どんな結果が出たかをセットで語ります。",
  },
  {
    num: "3",
    title: "成果を数値・事実で補強する",
    desc: "「処理時間を短縮」より「処理時間を40%短縮」のように、可能な範囲で定量化します。数値が出せない場合は、規模・体制・期間など事実で補います。",
  },
  {
    num: "4",
    title: "応募先での再現性を示す",
    desc: "「この強みを御社の○○でも活かせます」と、入社後の貢献に接続します。求人内容に合わせて締めることで、説得力が増します。",
  },
];

const beforeAfter = [
  {
    label: "抽象的 → 具体的",
    before: "コミュニケーション能力が高く、チームで協力して開発を進めることができます。",
    after: "私の強みは、職種をまたいだ調整力です。前職ではフロントとバックエンド、デザイナー間で仕様の認識ずれが頻発していたため、私が主導して仕様確認のフローを整備しました。結果、手戻りによる差し戻しが減り、リリースの遅延が大きく改善しました。",
  },
  {
    label: "作業説明 → 成果説明",
    before: "サーバーの監視や障害対応を担当していました。日々の運用業務を着実にこなしてきました。",
    after: "私の強みは、障害を未然に防ぐ仕組みづくりです。頻発していたアラートを分析し、根本原因に対応する監視ルールと自動復旧スクリプトを整備しました。これにより、夜間の手動対応が大幅に減り、チーム全体の負荷を下げられました。",
  },
  {
    label: "受け身 → 主体性",
    before: "上司の指示に従って、与えられたタスクを期日内に完了させてきました。",
    after: "私の強みは、課題を自ら見つけて改善する主体性です。レビュー待ちでタスクが滞留している状況に気づき、レビュー観点のチェックリストとペアレビューの仕組みを提案・導入しました。レビューのリードタイムが短縮され、チームの開発速度が上がりました。",
  },
];

const jobExamples = [
  {
    job: "Webアプリケーションエンジニア",
    text: "私の強みは、ユーザー影響を基準に優先順位を判断する実装力です。前職のSaaS開発では、機能追加の要望が多数ある中で、利用ログを分析して影響の大きい改善から着手する進め方を定着させました。結果、限られた工数でも満足度に直結する改善を優先でき、解約率の改善に貢献しました。この優先順位づけの視点は、御社のプロダクト開発でも活かせると考えています。",
  },
  {
    job: "インフラ／SREエンジニア",
    text: "私の強みは、運用負荷を下げる自動化です。手作業中心だったデプロイとインフラ構築を、CI/CDとIaCで標準化しました。リリース作業の所要時間を短縮し、人的ミスによる障害も減らせました。属人化していた運用をドキュメントとコードに落とし込んだ経験は、御社の運用基盤の安定化にも貢献できると考えています。",
  },
  {
    job: "エンジニアリングマネージャー候補",
    text: "私の強みは、メンバーの成長と成果を両立させるチーム運営です。リーダーとして、1on1とふりかえりの運用を整え、各メンバーの目標を業務に結びつけました。チームの離職を抑えながら、開発のアウトプットも安定して伸ばせました。プレイヤーとしての実装経験も継続しているため、現場感を保ったマネジメントが御社でも実践できると考えています。",
  },
];

const ngExpressions = [
  {
    title: "強みが複数で焦点がぼやける",
    desc: "「コミュニケーション力も技術力も向上心もあります」と並べると印象に残りません。最も伝えたい強みを1つに絞り、深く語ります。",
  },
  {
    title: "抽象的な形容詞だけで終わる",
    desc: "「真面目」「責任感が強い」だけでは伝わりません。それを示す具体的なエピソードと結果をセットにします。",
  },
  {
    title: "事実と異なる誇張・創作",
    desc: "盛った実績は面接の深掘りで矛盾が露呈します。等身大の事実を、見せ方を工夫して伝えるのが正攻法です。",
  },
  {
    title: "応募先と無関係な強みを語る",
    desc: "求人が求める人物像とずれた強みは響きません。募集要項を読み込み、求められる要素に合わせて強みを選びます。",
  },
  {
    title: "謙遜しすぎる・自信がなさそう",
    desc: "「まだ未熟ですが」と前置きしすぎると弱く見えます。事実は事実として、堂々と言い切る姿勢が大切です。",
  },
];

const faqs = [
  {
    q: "自己PRと職務経歴書の自己PR欄は何が違いますか？",
    a: "本質的には同じく「強みを根拠とともに示す」ものですが、職務経歴書の自己PR欄は文章量が限られるため、最も伝えたい強み1つに絞って簡潔にまとめます。職務経歴書全体の実績と矛盾しないよう、一貫したストーリーで書くことが重要です。詳しくは職務経歴書の書き方ガイドも参考にしてください。",
  },
  {
    q: "数値で語れる実績がない場合はどうすればいいですか？",
    a: "数値が出せない場合は、規模・体制・期間・役割といった事実で補強します。「5名のチームで」「半年かけて」「自分が主導して」といった具体性があれば、説得力は十分に出せます。また、定量化できなくても「手戻りが減った」「属人化を解消した」など、改善の方向性を具体的に示すことが大切です。",
  },
  {
    q: "自己PRはどのくらいの長さが適切ですか？",
    a: "職務経歴書の自己PR欄なら200〜300字程度、面接で口頭で話す場合は1分（300〜400字）が目安です。長すぎると要点がぼやけるため、結論・根拠・成果・再現性の4要素を簡潔に組み立てましょう。応募書類と面接で内容を一致させておくと、一貫性のある印象を与えられます。",
  },
  {
    q: "複数の応募先で同じ自己PRを使い回してもいいですか？",
    a: "ベースは共通でも、締めの「応募先での再現性」の部分は企業ごとに調整することを推奨します。求人が求める人物像に合わせて強みを選び、「御社の○○で活かせる」と接続するだけで、響き方が大きく変わります。手間はかかりますが、書類通過率に直結する部分です。",
  },
  {
    q: "30代・40代の自己PRで意識すべきことは？",
    a: "ミドル層は「経験の幅」と「課題解決の実績」を軸にすると強みが伝わります。長年の経験から得た判断力、チームを巻き込んだ改善、後進育成などは若手にはない武器です。ただし「昔こうだった」と過去の話に終始せず、その経験が応募先で今どう活きるかまで語ることが重要です。",
  },
  {
    q: "技術力をアピールしたい場合、どう書けばいいですか？",
    a: "技術名を並べるだけでなく、その技術で「何を解決したか」をセットで語ります。「Reactが使えます」より「Reactでパフォーマンス課題のあった画面を再設計し、表示速度を改善した」のように、技術を成果に結びつけると説得力が出ます。保有スキルの一覧はスキルシートや職務経歴書に任せ、自己PRでは1つの強みを深掘りしましょう。",
  },
  {
    q: "ブランクや転職回数が多いことは自己PRでカバーできますか？",
    a: "自己PRは強みを示す場なので、無理にマイナス要素の説明を盛り込む必要はありません。ブランクや転職理由は別の欄や面接で誠実に説明し、自己PRでは一貫して強みと貢献に集中させます。多様な経験を「適応力」や「幅広い技術への対応力」として前向きに言い換えるのは有効です。",
  },
];

export default function SelfPrPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/self-pr/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "自己PRの書き方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          自己PRの書き方・例文【エンジニア転職／Before After付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 経験を強みに変える書き方を例文で解説
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エンジニアの自己PRはどう書けばいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 「結論（強み）→根拠（経験）→成果（数値・事実）→再現性（応募先での貢献）」の順で組み立て、強みは1つに絞るのが鉄則です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・抽象的な形容詞ではなく、具体的なエピソードと結果で裏づける</li><li>・作業内容の羅列ではなく「課題に対して何をして、どう改善したか」を成果ベースで語る</li><li>・30代・40代は判断力・育成・巻き込み力を、応募先で今どう活きるかまで接続する</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          自己PRは、書類選考と面接の両方で評価を左右する重要な要素です。とはいえ「強みが思いつかない」「作業内容の羅列になってしまう」と悩む人は少なくありません。本記事では、自己PRを組み立てる4ステップ、Before/Afterで見る改善例、職種別の例文、ミドル層ならではの作り方、避けるべきNG表現まで、そのまま使える形で解説します。
        </p>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：自己PRの基本構成</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              通る自己PRは、<strong>「結論（強み）→ 根拠（経験）→ 成果（数値・事実）→ 再現性（応募先での貢献）」</strong>の順で組み立てます。強みは1つに絞り、抽象的な形容詞ではなく具体的なエピソードと結果で裏づけるのが鉄則です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              特に重要なのは、作業内容の羅列ではなく「課題に対して何をして、どう改善したか」という成果ベースで語ること。そして最後に応募先での再現性を示すことで、採用側は入社後の活躍をイメージできます。事実を誠実に、見せ方を工夫して伝えましょう。
            </p>
          </div>
        </section>

        {/* 4ステップ */}
        <section id="framework" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己PRを作る4ステップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            次の4ステップで組み立てれば、誰でも一貫性のある自己PRが作れます。
          </p>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            強みが言語化できないときは
            <Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析のやり方</Link>
            から始めると整理しやすくなります。
          </p>
        </section>

        {/* Before/After */}
        <section id="beforeafter" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Before/Afterで見る改善例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            よくある弱い自己PRを、4ステップに沿って改善した例です。違いを見比べてみてください。
          </p>
          <div className="space-y-6">
            {beforeAfter.map((b, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{b.label}</div>
                <div className="p-5 space-y-3">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs font-bold text-red-700 mb-1">Before（弱い例）</p>
                    <p className="text-sm text-red-700 leading-relaxed">{b.before}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-bold text-green-700 mb-1">After（改善例）</p>
                    <p className="text-sm text-green-800 leading-relaxed">{b.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 職種別例文 */}
        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種別の自己PR例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職種ごとの例文です。自分の経験に合わせて、エピソードと成果を差し替えて使ってください。
          </p>
          <div className="space-y-4">
            {jobExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.job}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ミドル */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の自己PRの作り方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：実績の厚みを定量的に語る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は実務経験が充実し、定量的な成果を語りやすい年代です。担当した開発の規模、改善した数値、リードした取り組みを軸に、「課題発見から解決まで自走できる」点を示すと強みが伝わります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：判断力・育成・巻き込み力を前面に</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は、技術力に加えて「経験に裏打ちされた判断力」「チームを巻き込む力」「後進の育成」が武器になります。ただし過去の自慢話に終始せず、その経験が応募先で今どう活きるかまで接続することが重要です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の転職戦略は
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>
            も合わせてご覧ください。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けるべきNG表現</h2>
          <div className="space-y-4">
            {ngExpressions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 面接 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での自己PRの伝え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            口頭で話す自己PRは、書類と一貫させつつ、1分程度（300〜400字）にまとめるのが基本です。次の点を意識しましょう。
          </p>
          <ul className="space-y-3">
            {[
              "冒頭で「私の強みは○○です」と言い切り、結論から話す。",
              "暗記した文章を一字一句読み上げるのではなく、要点を押さえて自然に話す。",
              "深掘り質問を想定し、エピソードの背景や具体的な行動をすぐ補足できるようにしておく。",
              "応募先の求人内容に触れ、「御社の○○で活かせる」と締める。",
              "話す速度・表情・視線も評価対象。落ち着いて、自信を持って伝える。",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 items-start border border-slate-200 rounded-lg p-4">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span className="text-sm text-slate-600 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">書類添削はエージェントに頼ろう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、自己PRや職務経歴書を企業目線で添削してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "スキルシートの書き方", href: "/knowledge/skill-sheet/" },
              { name: "自己分析のやり方", href: "/knowledge/self-analysis/" },
              { name: "面接の逆質問", href: "/knowledge/reverse-questions/" },
              { name: "30代エンジニアの転職", href: "/age/30s/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
