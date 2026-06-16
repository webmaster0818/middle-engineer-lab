import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "退職理由の伝え方【面接・退職時の本音と建前】例文付き";
const DESCRIPTION =
  "退職理由を面接と現職それぞれにどう伝えるかを、本音と建前の整理・前向きな言い換え・そのまま使える例文で解説。30代・40代エンジニアが円満退職と転職成功を両立させるための伝え方をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：相手で使い分ける" },
  { id: "two-scenes", label: "面接と現職で目的が違う" },
  { id: "honne-tatemae", label: "本音を建前に変換する考え方" },
  { id: "interview", label: "面接での退職理由：例文" },
  { id: "current", label: "現職への退職理由：例文" },
  { id: "ng", label: "やってはいけないNG表現" },
  { id: "midlife", label: "30代・40代が気をつける点" },
  { id: "faq", label: "よくある質問" },
];

const honneList = [
  {
    honne: "給与が低い・上がらない",
    tatemae:
      "成果に応じた評価制度のもとで、より高い専門性を発揮できる環境に挑戦したい。前向きなキャリアアップとして表現する。",
  },
  {
    honne: "人間関係・上司への不満",
    tatemae:
      "チームでの協働やフラットな開発文化のなかで力を発揮したい。個人攻撃ではなく、求める働き方として語る。",
  },
  {
    honne: "残業が多い・激務",
    tatemae:
      "持続的に高い生産性を保てる開発体制で、長く貢献したい。労働環境そのものではなく、生産性の観点に言い換える。",
  },
  {
    honne: "技術が古い・成長できない",
    tatemae:
      "新しい技術スタックやクラウド領域に本格的に取り組み、技術者として成長を続けたい。学習意欲として表現する。",
  },
  {
    honne: "会社の将来性が不安",
    tatemae:
      "成長フェーズの事業で、自分のスキルがより大きなインパクトを生む環境に身を置きたい。",
  },
];

const interviewExamples = [
  {
    scene: "キャリアアップを軸にする",
    text: "「現職では○○の運用・改善を担当してきましたが、今後はクラウド基盤の設計からより主体的に関わり、技術の幅を広げたいと考え転職を決めました。」",
  },
  {
    scene: "専門性を深めたい",
    text: "「これまで幅広く担当してきた一方で、今後は○○領域に専門性を集中させたいと考えています。御社の○○への取り組みに強く惹かれ、応募しました。」",
  },
  {
    scene: "事業フェーズへの関心",
    text: "「安定した環境で経験を積めましたが、より成長フェーズの事業で、自分のスキルが直接プロダクトに反映される環境に挑戦したいと考えています。」",
  },
  {
    scene: "マネジメントから現場回帰（40代）",
    text: "「管理業務の比重が高まり、現場の技術から離れていました。今後は技術力を軸に手を動かしながら、これまでのマネジメント経験も活かしたいと考えています。」",
  },
];

const currentExamples = [
  {
    scene: "上司に最初に伝える（口頭）",
    text: "「お時間をいただきありがとうございます。私事で恐縮ですが、かねてより考えていたキャリアの方向性を実現するため、退職を決意いたしました。○月末をもって退職させていただきたく、ご相談させていただきます。」",
  },
  {
    scene: "理由を深掘りされたとき",
    text: "「○○の領域に本格的に取り組みたいという思いが強くなり、社外で挑戦することを決めました。これまでご指導いただいたことには本当に感謝しております。」",
  },
  {
    scene: "引き止め（カウンターオファー）を受けたとき",
    text: "「ありがたいお言葉をいただき恐縮です。ただ、今回は熟慮の末の決断ですので、変わらず退職の意思でお願いできればと思います。引き継ぎは責任を持って進めます。」",
  },
];

const ngActions = [
  {
    title: "前職・現職の批判を並べる",
    desc: "「上司が無能で」「評価制度がおかしくて」といった不満の羅列は、面接官に『この人はうちでも同じ不満を言う』と思わせます。事実は事実として、表現は前向きに整えます。",
  },
  {
    title: "建前と本音が矛盾する説明をする",
    desc: "「成長したい」と言いながら志望動機が待遇面ばかり、という矛盾は見抜かれます。退職理由・志望動機・自己PRが一本の線でつながるように整えましょう。",
  },
  {
    title: "現職にだけ過度に取り繕う",
    desc: "現職に対して嘘の理由（家庭の事情など）を作ると、引き継ぎ中に綻びが出ることがあります。詳細を語りすぎず、前向きな理由を簡潔に伝えるのが無難です。",
  },
  {
    title: "退職理由を聞かれて言葉に詰まる",
    desc: "面接で最も聞かれる質問の一つです。準備不足は計画性のなさと受け取られます。声に出して話せるレベルまで言語化しておきましょう。",
  },
];

const faqs = [
  {
    q: "退職理由は面接と現職で変えてもいいのですか？",
    a: "目的が違うため、伝える内容を相手に合わせて整えるのは問題ありません。面接では「次の環境で何を実現したいか」という前向きな動機を、現職では「円満に送り出してもらうための簡潔で角の立たない理由」を伝えます。どちらも嘘をつく必要はなく、本音のうち相手に伝わりやすい側面を選んで表現するイメージです。",
  },
  {
    q: "本当の退職理由が「人間関係」や「給与」でも正直に言うべきですか？",
    a: "面接ではそのまま伝えるのは避け、前向きな言葉に変換するのが一般的です。たとえば給与なら『成果に応じた評価のもとで力を発揮したい』、人間関係なら『協働しやすい開発文化のなかで貢献したい』のように、不満ではなく「次の環境に求めるもの」として語ります。嘘ではなく、同じ事実の前向きな側面を表現するのがポイントです。",
  },
  {
    q: "退職理由を会社に詳しく説明する義務はありますか？",
    a: "法的な説明義務はありません。期間の定めのない雇用契約では、労働者はいつでも退職の申し入れができ、民法第627条により申し入れから2週間の経過で雇用契約は終了します（厚生労働省も同様の説明をしています）。理由を詳細に話すかは本人の自由で、『一身上の都合』だけでも退職届としては成立します。ただし円満退職のためには、角の立たない前向きな理由を簡潔に伝えるのが現実的です。",
  },
  {
    q: "退職届に書く理由は何が適切ですか？",
    a: "自己都合退職の場合、退職届の理由は『一身上の都合により』と記載するのが一般的で、これで十分です。具体的な理由を書く必要はありません。会社都合（退職勧奨やリストラ等）の場合は失業給付に関わるため安易に「自己都合」と書かず、事実に即した記載にしましょう。詳しくは退職の進め方ガイドも参照してください。",
  },
  {
    q: "面接で「すぐ辞めるのでは」と思われない退職理由の伝え方は？",
    a: "退職理由・志望動機・キャリアプランを一貫させることが最も効果的です。『現職では実現できないが、御社でなら実現できること』を具体的に結びつけると、不満からの逃避ではなく目的のある転職だと伝わります。短期離職が続いている場合は、各回の理由に一貫した軸（専門性の追求など）があることを示しましょう。",
  },
  {
    q: "引き止めにあったとき、退職理由をどう答えればいいですか？",
    a: "感謝を伝えつつ、決意が固いことを簡潔に示します。理由を細かく議論すると説得の糸口を与えてしまうため、『熟慮の末の決断』として深掘りを避けるのが有効です。条件提示（カウンターオファー）への向き合い方は、別記事で詳しく解説しています。",
  },
  {
    q: "現職に転職先の社名を聞かれたら答えるべきですか？",
    a: "答える義務はありません。『内定先の意向もあり、社名はお伝えを控えさせてください』と丁寧に断って問題ありません。同業他社への転職で詮索される場合もありますが、競業避止義務がない限り転職自体は自由です。無用なトラブルを避けるため、転職先の詳細は最小限にとどめるのが無難です。",
  },
];

export default function ResignationReasonPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/resignation-reason/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職理由の伝え方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          退職理由の伝え方【面接・退職時の本音と建前】例文付き
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 円満退職と転職成功を両立させる伝え方
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          退職理由は、転職活動で最も多く問われる質問の一つでありながら、現職にどう伝えるかでも悩みやすいテーマです。本音をそのまま口にすると角が立ち、取り繕いすぎると矛盾が生じます。本記事では、面接と現職という二つの場面で目的の違いを整理し、本音を前向きに言い換える考え方と、そのまま使える例文を解説します。嘘をつくのではなく、事実の伝え方を整えるのがポイントです。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省「労働契約の終了に関するルール」",
            "民法第627条（期間の定めのない雇用の解約の申入れ）",
          ]}
        />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：相手で使い分ける</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              退職理由の伝え方は、<strong>「面接では前向きな動機」「現職では簡潔で角の立たない理由」</strong>と相手に合わせて整えるのが基本です。どちらも嘘をつく必要はなく、本音のうち相手に伝わりやすい側面を選んで表現します。
            </p>
            <p className="text-slate-700 leading-relaxed">
              法的には、退職理由を会社に詳しく説明する義務はありません。期間の定めのない雇用なら、民法第627条により退職の申し入れから2週間で雇用契約は終了します。だからこそ、現職には深く語りすぎず、面接では志望動機と一本の線でつながる前向きな理由を語ることが、円満退職と転職成功の両立につながります。
            </p>
          </div>
        </section>

        {/* 面接と現職 */}
        <section id="two-scenes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接と現職で目的が違う</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職理由を語る場面は大きく二つあり、それぞれ目的がまったく異なります。混同すると、面接では後ろ向きに、現職では言い過ぎて気まずくなりがちです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">面接での退職理由</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                目的は「採用したいと思わせること」。不満からの逃避ではなく、次の環境で何を実現したいかという前向きな動機として語ります。志望動機・キャリアプランと一貫させることが重要です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">現職への退職理由</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                目的は「円満に送り出してもらうこと」。詳細を語る義務はなく、角の立たない前向きな理由を簡潔に伝えます。引き継ぎへの協力姿勢をあわせて示すと、関係を保ったまま退職できます。
              </p>
            </div>
          </div>
        </section>

        {/* 本音建前 */}
        <section id="honne-tatemae" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">本音を建前に変換する考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「建前」とは嘘ではなく、同じ事実の前向きな側面に光を当てる作業です。本音にある不満は、たいてい「次の環境に求めるもの」に変換できます。
          </p>
          <div className="space-y-3">
            {honneList.map((h, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">本音：{h.honne}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{h.tatemae}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 面接例文 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での退職理由：例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            場面別の例文です。○○には自分の経験・領域を入れ、志望動機と矛盾しないよう調整してください。
          </p>
          <div className="space-y-4">
            {interviewExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 現職例文 */}
        <section id="current" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職への退職理由：例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職には、まず直属の上司に口頭で伝えるのが基本です。理由は簡潔に、感謝と引き継ぎへの姿勢をあわせて示しましょう。
          </p>
          <div className="space-y-4">
            {currentExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            退職を切り出す時期や進め方の全体像は
            <Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の進め方ガイド</Link>
            、円満退職のコツは
            <Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の進め方</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG表現</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が気をつける点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：一貫したキャリアの軸を見せる</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は実務の厚みがある一方、転職回数が増えやすい年代でもあります。各転職の退職理由に「専門性を深める」「裁量を広げる」といった一貫した軸があれば、計画的なキャリア形成として評価されます。場当たり的な転職に見えないよう、過去の理由も一本の線でつなげて語りましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：現職への配慮を厚くする</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は責任ある立場にあることが多く、退職の影響が大きいため、現職への伝え方は特に丁寧にします。十分な引き継ぎ期間を見込み、後任への配慮を示すことで円満に送り出してもらえます。面接では、役職そのものより「役職に依存しない専門性」を退職理由・志望動機の軸に据えると説得力が増します。
              </p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">退職理由の整理もエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、面接で伝わる退職理由の言語化も無料でサポートしてくれます。
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
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "円満退職の進め方", href: "/knowledge/smooth-resignation/" },
              { name: "退職後の手続き", href: "/knowledge/after-resignation-procedures/" },
              { name: "引き止め（カウンターオファー）への対応", href: "/knowledge/counter-offer/" },
              { name: "引き継ぎの進め方", href: "/knowledge/handover/" },
              { name: "30代の転職", href: "/age/30s/" },
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
