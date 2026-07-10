import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/probation/" },
  title: "試用期間とは【制度の仕組み・注意点・期間中の転職】",
  description:
    "試用期間の一般的な制度の仕組み、期間中の解雇・退職の考え方、注意点を解説。30代・40代エンジニアが試用期間中に転職を検討する際のポイントも紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：試用期間も通常の労働契約。過度に怖がらない" },
  { id: "what", label: "試用期間とは（制度の一般論）" },
  { id: "points", label: "試用期間でよくある誤解と注意点" },
  { id: "leave", label: "試用期間中に辞めるべきか判断する基準" },
  { id: "career", label: "短期離職を次の転職でどう説明するか" },
  { id: "scripts", label: "退職理由の伝え方 例文（Before/After）" },
  { id: "checklist", label: "試用期間中の転職を進めるチェックリスト" },
  { id: "middle", label: "30代・40代視点：短期離職のリカバリー戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const leaveCriteria = [
  { num: "1", title: "入社前の説明と実態に大きなギャップ", desc: "「Reactで開発」と聞いて入社したのにレガシーなjQuery保守ばかり、など技術面のミスマッチは自助努力では改善しにくいです。" },
  { num: "2", title: "ハラスメントや明らかに違法な労働環境", desc: "パワハラ、長時間労働の強要、残業代の未払いなどは我慢する理由がありません。証拠を残しつつ、必要なら公的窓口に相談を。" },
  { num: "3", title: "一定期間を過ぎても環境に馴染めない", desc: "人間関係や企業文化の不適合は時間で和らぐこともありますが、改善の兆しが全く見えないなら見切りも選択肢です。" },
  { num: "4", title: "心身の健康に影響が出ている", desc: "不眠・食欲不振・慢性的な体調不良が続くなら、健康を最優先に判断してください。回復には時間がかかります。" },
  { num: "5", title: "成長機会がなくキャリアが停滞する確信", desc: "学びがなく市場価値が下がり続ける環境なら、早い判断が傷を浅くします。時間が経つほど次の選択肢は狭まりがちです。" },
];

const checklist = [
  "在職中に次の内定を確保してから退職する（ブランクを作らない）",
  "退職理由を前向きな表現に整理しておく",
  "短期離職の経緯を一貫したストーリーで説明できるようにする",
  "前々職までの実績をアピール材料の中心に据える",
  "エージェントに試用期間中であることを正直に共有する",
  "就業規則の退職手続き・通知期間を確認する",
];

const faqs = [
  {
    q: "試用期間とは何ですか？",
    a: "試用期間とは、本採用の前に、企業が新しく入った人の適性や勤務態度などを見極めるために設ける期間を指す一般的な呼び方です。期間の長さは会社によって異なり、3ヶ月や6ヶ月とされることが多いとされます。重要なのは、試用期間中であっても通常の労働契約が成立しているという点で、労働者としての基本的な保護は適用されるのが一般的な考え方です。具体的な扱いは就業規則や雇用契約書で定められるため、自分の条件を確認してください。",
  },
  {
    q: "試用期間中でも退職できますか？",
    a: "一般論として、試用期間中であっても退職は可能です。期間の定めのない雇用契約であれば、通常の退職と同様の考え方が適用されると解されています。ただし、就業規則に退職の申し出時期に関する定めがある場合はそれを確認し、引き継ぎの観点からも早めに伝えるのが実務的です。法的な取り扱いに不安がある場合は、自己判断せず専門家や労働相談窓口に相談してください。",
  },
  {
    q: "試用期間中は簡単に解雇されるのですか？",
    a: "『試用期間中だから自由に解雇できる』というのは誤解で、一般的には、試用期間中であっても解雇には合理的な理由と社会通念上の相当性が求められると解されています。一方で、本採用後よりは解約の留保が認められやすいと説明されることもあり、判断は個別の事情によります。解雇に関する具体的なトラブルは、必ず弁護士や労働相談窓口など専門家に相談してください。",
  },
  {
    q: "試用期間中に辞めたことは職歴に書くべきですか？",
    a: "在籍期間や状況によりますが、社会保険の加入記録などから在籍の事実が後で分かる可能性があるため、隠すよりも一貫した説明を用意するほうが安全とされます。書くか書かないかの細かな判断は状況次第ですが、面接で問われた際に経緯を前向きに説明できる準備をしておくことが最も重要です。職務経歴書での見せ方は職務経歴書の書き方も参考にしてください。",
  },
  {
    q: "試用期間中の退職は次の転職で不利になりますか？",
    a: "1回であれば、合理的な理由を一貫して説明できれば大きなマイナスにはなりにくいとされます。『入社前に聞いていた業務内容や技術スタックが実態と大きく異なった』など、誰が聞いても納得できる経緯であれば理解は得られやすいです。むしろ問題視されやすいのは、説明が曖昧だったり、短期離職を繰り返していたりするケースです。次の会社では長く貢献したい意思を具体的に示しましょう。",
  },
  {
    q: "試用期間中の退職理由はどう説明すればよいですか？",
    a: "『想像と違った』という不満の表現ではなく、『◯◯に携われると聞いていたが実態は△△だった。自分のキャリアプランに合う環境で◯◯に取り組みたい』のように、事実＋前向きな志向に変換して伝えるのがコツです。会社批判に聞こえる表現は避けます。本記事の『退職理由の伝え方 例文』にBefore/Afterを掲載しているので活用してください。",
  },
  {
    q: "試用期間中の転職をエージェントに相談できますか？",
    a: "できます。エージェントは試用期間中・短期離職の事例も扱っており、退職理由の整理や面接での見せ方をサポートしてくれます。試用期間中であることを隠す必要はなく、むしろ正直に共有したほうが、状況に合った求人や対策を提案してもらいやすくなります。在職中に活動して次を決めてから動く、という進め方も相談できます。",
  },
  {
    q: "試用期間が終わると何が変わりますか？",
    a: "一般的には、試用期間の満了をもって本採用に移行し、企業側が留保していた解約権が外れる、と説明されます。ただし、待遇や評価の扱いがどう変わるかは会社の制度によって異なります。自分の条件で試用期間後にどう扱いが変わるのか不明な場合は、雇用契約書や就業規則を確認し、人事に問い合わせると確実です。",
  },
];

export default function ProbationPage() {
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
        title="試用期間とは【制度の仕組み・注意点・期間中の転職】"
        description="試用期間の一般的な制度の仕組み、期間中の解雇・退職の考え方、注意点を解説。30代・40代エンジニアが試用期間中に転職を検討する際のポイントも紹介します。"
        url="/knowledge/probation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "試用期間" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          試用期間とは【制度の仕組み・注意点・期間中の転職】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 制度の一般論と試用期間中の転職の進め方
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】試用期間中でも解雇や退職はどうなる？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 試用期間も通常の労働契約で、労働者としての基本的な保護は適用されます。過度に怖がる必要はありません。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・「試用期間だから自由に解雇できる」は誤解。解雇には合理的な理由が求められると解される</li><li>・期間中の退職も可能だが、就業規則を確認し在職中に次を決めてから動くのが安全</li><li>・個別の法的判断は専門家に相談すること（本記事は一般論の整理）</li></ul>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            「入社してみたら想像と違った」「技術スタックが面接の説明と異なる」。試用期間中にこうした不安を感じるエンジニアは少なくありません。本記事では、試用期間という制度の一般的な仕組みと注意点を整理したうえで、試用期間中に転職を検討する場合の判断基準と進め方を解説します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：試用期間も通常の労働契約。過度に怖がらない</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・試用期間中でも<strong>労働者としての基本的な保護は適用される</strong>のが一般的な考え方。</li>
              <li>・「試用期間だから自由に解雇できる」は<strong>誤解</strong>。解雇には合理的な理由が求められると解される。</li>
              <li>・期間中の退職も可能だが、就業規則を確認し<strong>在職中に次を決めてから</strong>動くのが安全。</li>
              <li>・<strong>個別の法的判断は専門家に相談</strong>すること。本記事は一般論の整理です。</li>
            </ul>
          </div>
        </section>

        {/* とは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間とは（制度の一般論）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            試用期間は、本採用の前に企業が適性・能力・勤務態度などを見極めるために設ける期間を指す一般的な呼び方です。長さは会社により異なり、3ヶ月や6ヶ月とされることが多いとされます。法律に「試用期間」という固有の章があるわけではなく、就業規則や雇用契約で内容が定められるのが通常です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-3 text-sm">押さえておきたい一般的なポイント</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>・試用期間中も労働契約は成立しており、賃金・労働時間などの基本的なルールは適用される。</li>
              <li>・本採用に向けて、企業側に解約権が留保されていると説明されることがある（その分、本採用後より解約が認められやすいと解される場面もある）。</li>
              <li>・期間の長さ・延長の可否・本採用の判断基準は、就業規則や契約書で確認できる。</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 本セクションは一般的な制度の説明であり、法的助言ではありません。自分の契約内容や個別の事案については、雇用契約書・就業規則を確認のうえ、必要に応じて専門家にご相談ください。
          </p>
        </section>

        {/* 誤解と注意点 */}
        <section id="points" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間でよくある誤解と注意点</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">誤解：試用期間中は自由に解雇できる →</strong> 一般には、試用期間中でも解雇には合理的な理由と相当性が必要と解されています。「試用期間だから」を理由にした安易な解雇が常に有効とは限りません。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">誤解：試用期間中は退職できない →</strong> 期間の定めのない雇用なら、通常の退職と同様に申し出が可能と解されています。ただし就業規則の手続きは確認しましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">注意：労働条件が本採用後と異なる場合がある →</strong> 試用期間中の賃金などが異なる旨が契約で定められていることがあります。入社前に条件を確認しておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">注意：在籍記録は残る →</strong> 社会保険の加入記録などから在籍の事実が後で確認される可能性があります。経歴は隠すより、説明できるよう整理しておくのが安全です。</p>
            </div>
          </div>
        </section>

        {/* 辞めるべきか */}
        <section id="leave" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間中に辞めるべきか判断する基準</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「合わないから辞める」は短期離職を増やすリスクがあります。一方で、明らかなミスマッチや健康への影響を我慢し続けるのも得策ではありません。以下の基準で冷静に判断しましょう。
          </p>
          <div className="space-y-4">
            {leaveCriteria.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 説明 */}
        <section id="career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">短期離職を次の転職でどう説明するか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            試用期間中の退職は「説明の仕方」で印象が大きく変わります。ポイントは、(1) 誰が聞いても納得できる客観的な事実を起点にすること、(2) 不満ではなく次にやりたいことに着地させること、(3) 同じ失敗を繰り返さない再発防止策を示すことです。転職回数が多い場合の見せ方は
            <Link href="/knowledge/job-hopping/" className="text-petrol hover:underline">転職回数が多い場合の対策</Link>
            も参考になります。
          </p>
        </section>

        {/* 例文 */}
        <section id="scripts" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職理由の伝え方 例文（Before/After）</h2>
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">① 技術スタックのミスマッチ</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 mb-2"><strong>Before:</strong>「面接の説明と全然違って、レガシーな環境で嫌になってしまって……」</p>
              <p className="text-sm text-slate-600 bg-petrol-soft rounded p-3"><strong>After:</strong>「入社前は◯◯（モダンなスタック）での開発と伺っていましたが、実際は△△の保守が中心でした。自分が伸ばしたい◯◯のスキルを活かせる環境で長く貢献したいと考え、転職を決めました。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">② 役割・業務範囲の相違</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 mb-2"><strong>Before:</strong>「開発がやりたかったのに雑用ばかりで、聞いていた話と違いました」</p>
              <p className="text-sm text-slate-600 bg-petrol-soft rounded p-3"><strong>After:</strong>「設計・実装に主体的に携われると理解して入社しましたが、実際の役割は想定と異なりました。次は◯◯領域で開発の中核を担い、成果を出していきたいと考えています。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">③ 再発防止を添える一文</h3>
              <p className="text-sm text-slate-600 bg-petrol-soft rounded p-3">「前回はミスマッチを防ぎきれなかった反省から、今回は◯◯（技術スタック・役割・チーム体制）を具体的に確認したうえで応募しています。御社では長期的に貢献したいと考えています。」</p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試用期間中の転職を進めるチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-petrol font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：短期離職のリカバリー戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代の短期離職は、20代より慎重な対応が求められます。即戦力採用が前提のため「なぜすぐ辞めたのか」を厳しく見られる一方、これまでの実績が厚いため、見せ方次第で十分リカバリーできます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">実績の重心を「前々職まで」に置く</h3>
              <p className="text-sm text-slate-600">直近の短期在籍は経緯を簡潔に説明し、アピールの中心は積み上げてきたキャリア全体に置きます。これまでの成果を整理する方法は<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析の進め方</Link>を参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">次こそミスマッチを防ぐ「確認力」を示す</h3>
              <p className="text-sm text-slate-600">前回のミスマッチを踏まえ、技術スタック・役割・体制を具体的に確認していると伝えると、再発防止への姿勢が評価されます。年齢を理由にした不安はあっても、慎重さは強みに変えられます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">在職中に動いてブランクを作らない</h3>
              <p className="text-sm text-slate-600">ミドル層はブランクが長引くほど不利になりやすいため、可能な限り在職中に次を決めてから退職します。在職中の進め方は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>を参照してください。</p>
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
          <h2 className="text-xl font-bold mb-3">試用期間中でも相談できます</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントは試用期間中・短期離職の相談にも対応。退職理由の整理や求人紹介をサポートします。
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
            {[
              { name: "転職回数が多い場合の対策", href: "/knowledge/job-hopping/" },
              { name: "退職の伝え方ガイド", href: "/knowledge/resignation/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "転職を後悔しないチェックリスト", href: "/knowledge/regret/" },
              { name: "転職スケジュール（在職中の進め方）", href: "/knowledge/timeline/" },
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
