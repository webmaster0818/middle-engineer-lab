import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "内定承諾の期限と延長の頼み方【メール例文付き】";
const DESCRIPTION =
  "内定承諾の期限はどれくらいが一般的か、延長は頼めるのかを解説。そのまま使える延長依頼メールの例文、複数社の選考を待ってもらう伝え方、承諾後の辞退の可否まで、30代・40代エンジニアが後悔しない判断をするための実務をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/offer-deadline/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：延長は頼める" },
  { id: "general", label: "内定承諾期限の一般的な目安" },
  { id: "can-extend", label: "延長は頼んでいいのか" },
  { id: "how-to-ask", label: "延長を頼むときの3つのコツ" },
  { id: "examples", label: "延長依頼メールの例文" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "after", label: "承諾後でも辞退はできる" },
  { id: "faq", label: "よくある質問" },
];

const tips = [
  {
    title: "早めに、誠実に相談する",
    desc: "期限ぎりぎりに連絡するより、提示を受けた段階で見通しを伝える方が印象が良くなります。志望度の高さをあわせて示しましょう。",
  },
  {
    title: "具体的な希望日を示す",
    desc: "「もう少し待ってほしい」では企業が予定を立てられません。「○月○日まで」と具体的な日付を提示すると合意を得やすくなります。",
  },
  {
    title: "理由は簡潔に、嘘をつかない",
    desc: "「他社の選考結果を待っている」「家族と相談している」など、正直で簡潔な理由が信頼につながります。詳細な社名までは言う必要はありません。",
  },
];

const examples = [
  {
    scene: "1〜2週間の延長を依頼する",
    text: "「この度は内定のご連絡をいただき、誠にありがとうございます。御社で働くことを前向きに考えておりますが、人生の大きな決断のため、家族とも相談したうえで慎重に検討させていただきたく存じます。誠に恐れ入りますが、ご返答の期限を○月○日まで延長していただくことは可能でしょうか。ご検討のほど、よろしくお願いいたします。」",
  },
  {
    scene: "他社の選考結果を待ちたい",
    text: "「内定のご連絡をいただき、ありがとうございます。御社を強く志望しておりますが、現在もう一社の選考が最終段階にあり、納得して決断するためにも結果を確認したうえでお返事したく存じます。誠に勝手なお願いで恐縮ですが、○月○日までご猶予をいただけませんでしょうか。」",
  },
  {
    scene: "在職中で熟慮の時間がほしい",
    text: "「貴重なオファーをいただき、心より感謝申し上げます。現職の引き継ぎや今後のキャリアを踏まえ、責任を持って判断したいと考えております。恐れ入りますが、○月○日までお時間を頂戴できますと幸いです。前向きに検討を進めておりますので、何卒よろしくお願いいたします。」",
  },
];

const ngActions = [
  {
    title: "無断で期限を過ぎる",
    desc: "連絡なしの期限超過は、内定取り消しの正当な理由になり得ます。検討が間に合わない場合は、必ず期限前に延長を相談しましょう。",
  },
  {
    title: "曖昧な理由で何度も延長する",
    desc: "理由を変えながら延長を繰り返すと、志望度を疑われます。延長依頼は原則一度、具体的な期日を示して行うのが誠実です。",
  },
  {
    title: "返事を保留したまま音信不通になる",
    desc: "迷っていても、定期的な連絡を絶やさないことが信頼維持の基本です。辞退する場合も、決まり次第すぐに伝えるのがマナーです。",
  },
  {
    title: "口頭で承諾してから安易に覆す",
    desc: "口頭の承諾でも企業は採用準備を進めます。承諾後の辞退は法的には可能ですが、信頼を損ねるため、承諾自体を慎重に行いましょう。",
  },
];

const faqs = [
  {
    q: "内定承諾の期限はどれくらいが一般的ですか？",
    a: "企業によって異なりますが、内定通知から1週間程度を求められることが多く、長くても2週間前後が一般的な目安です。中途採用は欠員補充など急ぎの事情があることも多く、新卒より短い傾向があります。提示された期限が短いと感じたら、後述の方法で延長を相談しましょう。なお、これらは慣行上の目安であり、法律で定められた日数ではありません。",
  },
  {
    q: "内定承諾の期限延長はお願いしてもいいのですか？",
    a: "問題ありません。人生に関わる重要な決断であり、企業側も慎重に検討してほしいと考えているのが通常です。ポイントは『早めに』『具体的な希望日を添えて』『誠実な理由で』相談すること。志望度の高さをあわせて伝えれば、印象を損ねずに延長してもらえるケースが多くあります。ただし企業の事情で応じられない場合もあるため、その際は限られた期間で判断する覚悟も必要です。",
  },
  {
    q: "他社の選考を待ってもらうことはできますか？",
    a: "正直に伝えれば応じてもらえることが多いです。『御社を強く志望しているが、納得して決めるためにもう一社の結果を確認したい』と前向きな姿勢とセットで伝えるのがコツです。同時に、待ってもらっている他社の選考を急いでもらえないか、エージェント経由で調整するのも有効です。複数内定を比較する観点は別記事で解説しています。",
  },
  {
    q: "口頭やメールで内定承諾した後でも辞退できますか？",
    a: "辞退できます。内定（始期付・解約権留保付労働契約）であっても、入社日前であれば、労働者側からの辞退は法的に可能です。期間の定めのない雇用契約は、民法第627条により申し入れから2週間で解約できると解されています。ただし、承諾後の辞退は企業の採用計画に大きな影響を与え、信頼を損ねます。損害賠償が問題になるのは極めて例外的なケースですが、辞退の判断は承諾前に済ませるのが基本です。",
  },
  {
    q: "内定承諾書にサインしたら辞退できなくなりますか？",
    a: "内定承諾書にサインしても、入社を法的に強制されるわけではありません。承諾書は入社意思の確認が目的で、これにより退職の自由が失われることはありません。とはいえ、承諾書提出後の辞退は企業への影響が大きいため、サインは本当に入社する意思が固まってから行いましょう。誓約事項に違約金条項などがあれば、サイン前に内容を必ず確認してください。",
  },
  {
    q: "延長を頼んだら印象が悪くなりませんか？",
    a: "誠実な伝え方であれば、まず悪化しません。むしろ重要な決断を慎重に検討する姿勢は、社会人として自然なものです。印象を損ねるのは『無断の期限超過』『曖昧な理由での複数回の延長』『連絡が途絶えること』です。一度だけ、具体的な期日と前向きな志望度を添えて相談すれば、ほとんどの企業は理解を示してくれます。",
  },
  {
    q: "承諾を急かされて即答を求められたらどうすればいいですか？",
    a: "その場での即答は避け、『前向きに検討しているので、◯日だけお時間をいただけますか』と冷静に切り返しましょう。過度に承諾を急がせる企業は、候補者に比較検討の余地を与えたくない事情がある場合もあります。焦って決めると入社後の後悔につながりやすいため、最低限の検討時間は確保するのが賢明です。",
  },
];

export default function OfferDeadlinePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/offer-deadline/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "内定承諾の期限と延長" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          内定承諾の期限と延長の頼み方【メール例文付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 後悔しない決断のための時間の確保
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          内定をもらったとき、承諾期限が思ったより短く焦った経験はないでしょうか。他社の選考を待ちたい、家族と相談したい——そんなとき、承諾期限は誠実に頼めば延長してもらえることがほとんどです。本記事では、承諾期限の一般的な目安、延長を頼むコツ、そのまま使えるメール例文、そして承諾後の辞退の可否まで、後悔しない判断のための実務を解説します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：延長は頼める</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              内定承諾の期限は<strong>通知から1週間前後（長くても2週間程度）が一般的</strong>な目安です。短いと感じても、<strong>「早めに」「具体的な希望日を添えて」「誠実な理由で」相談すれば、延長してもらえることがほとんど</strong>です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              重要な決断を慎重に行うのは当然のことで、誠実に相談すれば印象は損ねません。一方で、無断の期限超過や音信不通は信頼を失う原因になります。承諾は本当に入社する意思が固まってから行い、迷っている間は連絡を絶やさないことが、後悔しない転職の基本です。
            </p>
          </div>
        </section>

        {/* 一般的な目安 */}
        <section id="general" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">内定承諾期限の一般的な目安</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            承諾期限は法律で決まっているものではなく、企業の慣行によります。中途採用では次のような傾向があります。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">目安：通知から1週間前後</h3>
              <p className="text-sm text-slate-600">中途採用で最も多いレンジ。欠員補充など急ぎの採用では、これより短いこともあります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">長くて2週間程度</h3>
              <p className="text-sm text-slate-600">候補者の検討に配慮する企業や、入社まで余裕がある場合の目安。これ以上は延長交渉が前提になりやすいです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">エージェント経由なら相談しやすい</h3>
              <p className="text-sm text-slate-600">期限の調整はエージェントが間に入ってくれます。直接言いにくい延長依頼も代行してもらえます。</p>
            </div>
          </div>
        </section>

        {/* 延長してよいか */}
        <section id="can-extend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">延長は頼んでいいのか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            結論として、延長の相談は問題ありません。むしろ重要な決断を慎重に検討する姿勢は自然なものです。企業側も、入社後に後悔されるより、納得して決めてほしいと考えているのが通常です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ただし、企業の採用スケジュールの都合で延長に応じられない場合もあります。その際は限られた期間で判断する必要があるため、内定が出そうな段階から、他社の選考状況を整理し、判断基準を先に決めておくことが大切です。判断軸の作り方は
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">複数内定の比較方法</Link>
            を参考にしてください。
          </p>
        </section>

        {/* 頼み方のコツ */}
        <section id="how-to-ask" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">延長を頼むときの3つのコツ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tips.map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 例文 */}
        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">延長依頼メールの例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            状況別の例文です。○月○日は具体的な日付に置き換え、志望度の高さを必ず添えてください。エージェント経由の場合は、エージェント宛てに同様の内容を伝えれば調整してもらえます。
          </p>
          <div className="space-y-4">
            {examples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
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

        {/* 承諾後の辞退 */}
        <section id="after" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">承諾後でも辞退はできる</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              内定を承諾した後でも、入社日前であれば辞退は法的に可能です。内定は「始期付・解約権留保付労働契約」と解されますが、労働者側からは、期間の定めのない雇用契約として民法第627条により申し入れから2週間で解約できます。内定承諾書へのサインも、入社を強制するものではありません。
            </p>
            <p className="text-slate-700 leading-relaxed">
              ただし、承諾後の辞退は企業の採用計画に大きな影響を与え、信頼を損ねます。だからこそ、承諾は本当に入社する意思が固まってから行うべきです。やむを得ず辞退する場合の伝え方は
              <Link href="/knowledge/offer-decline/" className="text-petrol hover:underline">内定辞退の伝え方</Link>
              で解説しています。
            </p>
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
          <h2 className="text-xl font-bold mb-3">期限の調整もエージェントにお任せ</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、承諾期限の延長交渉も候補者に代わって進めてくれます。
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
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "内定辞退の伝え方", href: "/knowledge/offer-decline/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "引き止め（カウンターオファー）への対応", href: "/knowledge/counter-offer/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "40代の転職", href: "/age/40s/" },
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
