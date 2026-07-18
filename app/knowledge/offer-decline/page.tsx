import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "内定辞退の伝え方【メール例文・電話の話し方】";
const DESCRIPTION =
  "内定辞退はメール・電話どちらで伝えるべきか、いつまでに連絡するか、承諾後でも辞退できるのかを解説。そのまま使える辞退メールの例文と電話のトークスクリプト付き。30代・40代エンジニアが角を立てずに辞退するための実務をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/offer-decline/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：早く・誠実に・簡潔に" },
  { id: "method", label: "メールと電話の使い分け" },
  { id: "timing", label: "いつまでに伝えるべきか" },
  { id: "mail-examples", label: "辞退メールの例文" },
  { id: "phone-script", label: "電話のトークスクリプト" },
  { id: "after-accept", label: "承諾後の辞退の伝え方" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "faq", label: "よくある質問" },
];

const mailExamples = [
  {
    scene: "基本形（承諾前）",
    text: "件名：内定辞退のご連絡（氏名）｜本文：「○○株式会社 採用ご担当者様 お世話になっております、○○○○と申します。先日は内定のご連絡をいただき、誠にありがとうございました。慎重に検討を重ねました結果、誠に勝手ながら今回の内定を辞退させていただきたく、ご連絡いたしました。貴重なお時間を割いて選考いただいたにもかかわらず、このようなお返事となり申し訳ございません。末筆ながら、貴社のますますのご発展を心よりお祈り申し上げます。」",
  },
  {
    scene: "理由を簡潔に添える",
    text: "「複数社を比較し検討いたしました結果、自身のキャリアの方向性を踏まえ、他社への入社を決断いたしました。最後までご丁寧にご対応いただき、心より感謝しております。」",
  },
  {
    scene: "エージェント経由の辞退",
    text: "「○○エージェント ○○様 お世話になっております。慎重に検討した結果、○○株式会社の内定を辞退したいと考えております。ご尽力いただいたにもかかわらず申し訳ございません。企業様へのご連絡をお願いできますでしょうか。」",
  },
];

const phoneScript = [
  {
    step: "名乗りと用件",
    text: "「お世話になっております。先日内定のご連絡をいただきました○○○○です。採用ご担当の○○様はいらっしゃいますでしょうか。」",
  },
  {
    step: "辞退の意思を伝える",
    text: "「この度は内定をいただき、誠にありがとうございました。慎重に検討した結果、誠に申し訳ないのですが、今回の内定を辞退させていただきたくご連絡いたしました。」",
  },
  {
    step: "理由を簡潔に（聞かれたら）",
    text: "「自身のキャリアを総合的に考え、他社への入社を決断いたしました。御社には大変丁寧にご対応いただき、心より感謝しております。」",
  },
  {
    step: "お詫びと締め",
    text: "「お忙しい中、お時間を割いていただいたにもかかわらず、このようなお返事となり申し訳ございません。御社の今後のご発展をお祈りしております。」",
  },
];

const ngActions = [
  {
    title: "連絡せず音信不通にする（バックレ）",
    desc: "最もやってはいけない行為です。企業は採用準備を進めており、無断辞退は大きな迷惑をかけます。エージェント経由なら今後の利用にも影響します。必ず連絡しましょう。",
  },
  {
    title: "辞退を先延ばしにする",
    desc: "気まずさから連絡を遅らせると、企業の機会損失が広がります。辞退を決めたら、できるだけ早く伝えるのが誠実です。",
  },
  {
    title: "嘘の理由を作り込む",
    desc: "細かい嘘は矛盾の元です。詳細を語る義務はないので、『キャリアを総合的に検討した結果』程度の簡潔な理由で十分です。",
  },
  {
    title: "高圧的・投げやりな態度を取る",
    desc: "辞退する企業とも、業界内でどこかで縁がつながる可能性があります。最後まで丁寧な対応を心がけましょう。",
  },
];

const faqs = [
  {
    q: "内定辞退はメールと電話のどちらで伝えるべきですか？",
    a: "状況によります。承諾前の段階で、まだ余裕がある場合はメールでも失礼にはあたりません。一方、入社直前や、すでに承諾の意思を伝えた後の辞退は、まず電話で謝意とお詫びを伝え、その後にメールで記録を残すのが丁寧です。エージェント経由の場合は、エージェントに連絡すれば企業への連絡を代行してくれます。いずれの場合も、放置せず必ず連絡することが最も重要です。",
  },
  {
    q: "内定辞退はいつまでに伝えればいいですか？",
    a: "辞退を決めた時点で、できるだけ早く伝えるのが原則です。企業は内定者の入社を前提に採用計画を組むため、連絡が遅れるほど機会損失が広がります。法的には、期間の定めのない雇用契約は民法第627条により申し入れから2週間で解約できますが、これはあくまで下限の話で、現実には決断後すぐに連絡するのがマナーです。",
  },
  {
    q: "内定を承諾した後でも辞退できますか？",
    a: "辞退できます。内定承諾後（内定承諾書にサインした後）でも、入社日前であれば、労働者側からの辞退は法的に可能です。退職や入社辞退の自由は労働者に保障されており、入社を強制されることはありません。ただし、承諾後の辞退は企業の採用計画に大きな影響を与えるため、電話で誠実にお詫びを伝えるなど、より丁寧な対応が求められます。",
  },
  {
    q: "内定辞退で損害賠償を請求されることはありますか？",
    a: "通常はありません。労働者には退職・入社辞退の自由があり、誠実に辞退する限り賠償責任を問われるのは極めて例外的です。賠償が問題になり得るのは、入社を確約させて他候補を断らせた直後に合理的理由なく翻すなど、信義則に著しく反する特殊なケースに限られます。一般的なタイミングでの辞退で賠償を心配する必要はほぼありませんが、誠実な連絡は欠かさないようにしましょう。",
  },
  {
    q: "辞退の理由は正直に言うべきですか？",
    a: "詳細を伝える義務はありません。『他社への入社を決めた』『キャリアの方向性を総合的に検討した結果』といった簡潔な理由で十分です。年収や社風など本音の不満をそのまま伝える必要はなく、角の立たない表現にとどめるのが無難です。辞退先の企業とも業界内で再び縁がつながる可能性があるため、最後まで丁寧に対応しましょう。",
  },
  {
    q: "辞退するとエージェントとの関係が悪くなりませんか？",
    a: "誠実に対応すれば問題ありません。エージェントは内定辞退も想定の範囲内で動いています。むしろ、無断辞退や連絡の遅延の方が信頼を損ねます。辞退の意思が固まったら早めにエージェントへ共有し、理由を簡潔に伝えれば、企業への連絡を代行してくれます。今後も同じエージェントを利用する可能性を考え、誠実な対応を心がけましょう。",
  },
  {
    q: "辞退した後にお詫びの品などは必要ですか？",
    a: "基本的に不要です。内定辞退は採用活動における通常の事象であり、品物を贈る習慣はありません。むしろ過剰な対応は相手に気を遣わせます。電話やメールで誠意あるお詫びと感謝を丁寧に伝えれば、それで十分です。",
  },
];

export default function OfferDeclinePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/offer-decline/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "内定辞退の伝え方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          内定辞退の伝え方【メール例文・電話の話し方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 角を立てずに誠実に辞退するために
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】内定辞退はどう伝える？音信不通（バックレ）でもいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>結論: 辞退を決めたら「できるだけ早く・誠実に・簡潔に」連絡し、音信不通（バックレ）だけは絶対に避けるのが鉄則です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・承諾前で余裕があればメールでも失礼にはならないが、入社直前や承諾後はまず電話でお詫びし、後からメールで記録を残すのが丁寧。</li>
              <li>・辞退を決めたらできるだけ早く伝える。連絡が遅れるほど企業の採用機会の損失が広がる。</li>
              <li>・内定承諾後でも入社日前なら辞退は法的に可能で、通常は損害賠償の心配もない。</li>
              <li>・理由は「キャリアを総合的に検討した結果」程度で十分で、詳細を語る義務はない。</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          複数社から内定をもらえば、必ずどこかを辞退することになります。とはいえ、お世話になった企業への辞退連絡は気が重いものです。本記事では、メールと電話の使い分け、連絡のタイミング、そのまま使える辞退メールの例文と電話のトークスクリプト、承諾後の辞退の伝え方までを解説します。最も大切なのは、放置せず、早く・誠実に・簡潔に伝えることです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：早く・誠実に・簡潔に</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              内定辞退の基本は、<strong>辞退を決めたら「できるだけ早く」「誠実に」「理由は簡潔に」伝える</strong>こと。承諾前ならメールでも構いませんが、入社直前や承諾後はまず電話でお詫びするのが丁寧です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              法的には、内定承諾後であっても入社日前なら辞退は可能で、通常は損害賠償の心配もありません。だからこそ、最もやってはいけないのは「連絡せず音信不通にすること」です。お世話になった感謝とお詫びを丁寧に伝えれば、角を立てずに辞退できます。
            </p>
          </div>
        </section>

        {/* メールと電話 */}
        <section id="method" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メールと電話の使い分け</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">メールが向く場面</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                承諾前で、まだ時間的余裕がある場合。記録が残り、相手の時間も奪いません。営業時間外でも送れるのも利点です。ただし、送りっぱなしにせず、相手から確認の返信が来るかは気にかけましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">電話が向く場面</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                入社直前や、すでに承諾の意思を伝えた後。誠意が伝わりやすく、企業も状況をすぐ把握できます。電話でお詫びした後、内容をメールで残しておくとより丁寧です。エージェント経由なら、まずエージェントに連絡します。
              </p>
            </div>
          </div>
        </section>

        {/* タイミング */}
        <section id="timing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">いつまでに伝えるべきか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            辞退を決めた時点で、できるだけ早く伝えるのが原則です。連絡が遅れるほど、企業の採用機会の損失が広がります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            法的な下限として、期間の定めのない雇用契約は民法第627条により申し入れから2週間で解約できます。ただしこれは最低限のルールであり、現実には決断後すぐの連絡がマナーです。承諾期限の延長を相談している段階で辞退が固まった場合も、期限を待たず早めに伝えましょう。期限延長の頼み方は
            <Link href="/knowledge/offer-deadline/" className="text-petrol hover:underline">内定承諾の期限と延長</Link>
            を参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed">
            連絡のタイミングで一つ意識したいのは、企業側の動きです。内定を出した企業は、入社手続きの準備、配属先の調整、場合によっては他候補者への不採用通知まで進めています。辞退の連絡が早いほど、企業は他の候補者へ素早く切り替えられ、双方にとっての損失が小さく済みます。逆に、入社直前まで引き延ばすと、企業の業務計画に穴が空き、強い不信感を残してしまいます。気が重い連絡ほど先延ばしにしたくなりますが、「早く伝えることが最大の誠意」という意識で臨むのが、結果として最も角の立たない辞退につながります。
          </p>
        </section>

        {/* メール例文 */}
        <section id="mail-examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">辞退メールの例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            件名は「内定辞退のご連絡（氏名）」のように用件と氏名を明記します。本文は感謝→辞退の意思→お詫び→結びの順が基本です。
          </p>
          <div className="space-y-4">
            {mailExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 電話スクリプト */}
        <section id="phone-script" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">電話のトークスクリプト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            電話は、相手の営業時間内で、落ち着いて話せる環境からかけます。次の流れを意識すると、緊張していてもスムーズに伝えられます。
          </p>
          <div className="space-y-4">
            {phoneScript.map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.step}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 承諾後の辞退 */}
        <section id="after-accept" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">承諾後の辞退の伝え方</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              内定承諾書にサインした後でも、入社日前であれば辞退は法的に可能です。ただし、承諾後の辞退は企業の採用計画に大きな影響を与えるため、まず電話で直接お詫びを伝え、その後メールで記録を残すのが誠実な対応です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              理由を細かく説明する義務はありませんが、『一度承諾しておきながら』という点へのお詫びは丁寧に伝えましょう。承諾そのものを慎重に行えば、こうした事態は避けられます。承諾期限の考え方は
              <Link href="/knowledge/offer-deadline/" className="text-petrol hover:underline">内定承諾の期限と延長</Link>
              で詳しく解説しています。
            </p>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">辞退連絡もエージェントが代行</h2>
          <p className="text-blue-100 text-sm mb-4">
            エージェント経由なら、言いにくい辞退の連絡も代行してもらえます。複数内定の比較から任せられます。
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
              { name: "内定承諾の期限と延長", href: "/knowledge/offer-deadline/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "引き止め（カウンターオファー）への対応", href: "/knowledge/counter-offer/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "30代の転職", href: "/age/30s/" },
              { name: "テックゴーの無料キャリア面談とは", href: "/review/techgo-consultation/" },
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
