import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "志望動機の作り方｜企業が転職者を採用する理由の公的調査と組み立ての手順【2026年】";
const DESCRIPTION =
  "志望動機の作り方を、厚生労働省「令和7年転職者実態調査」の事業所と転職者の回答をもとにご説明します。企業が転職者を採用した理由、情報通信業の転職者が勤め先を選んだ理由（当サイト集計）、材料の集め方、構成の手順を整理します。";
const URL = "/knowledge/motivation-letter/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "employer", label: "企業が転職者の採用で見ていること（公的調査）" },
  { id: "applicant", label: "転職者が勤め先を選んだ理由（当サイト集計）" },
  { id: "materials", label: "志望動機の材料を集める" },
  { id: "structure", label: "志望動機の組み立て手順（4つの要素）" },
  { id: "sample", label: "当サイトの作例（エンジニアの中途転職）" },
  { id: "ng", label: "避けたい書き方と、書かなくてよい事項" },
  { id: "related", label: "転職理由・自己PR・書類の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "志望動機はどのような順番で組み立てればよいですか？",
    a: "当サイトでは、①応募先の事業と募集職種で惹かれた点、②その仕事に活かせる自分の経験・技能、③入社後に担いたい役割と貢献、④その先のキャリアの方向、の順で組み立てることをおすすめしています。厚生労働省「令和7年転職者実態調査」では、専門的・技術的な仕事で転職者を採用した事業所の64.1％が「経験を活かし即戦力になるから」を採用理由に挙げており、②と③を具体的に書くことが特に重要と考えられます。",
  },
  {
    q: "志望動機と転職理由・自己PRの違いは何ですか？",
    a: "転職理由は「なぜ今の勤め先を離れるのか」、自己PRは「自分は何ができるのか」、志望動機は「なぜこの会社・この仕事を選ぶのか」を説明するものです。志望動機の中で自己PRの内容（活かせる経験）に触れることはありますが、軸は応募先の事業や仕事に置きます。転職理由の整理は転職理由の整理と伝え方の記事で、自己PRは自己PRの書き方の記事でご説明しています。",
  },
  {
    q: "給与や働き方の条件を志望動機に書いてもよいですか？",
    a: "条件を重視すること自体は珍しくありません。令和7年転職者実態調査では、転職者が現在の勤め先を選んだ理由（3つまでの複数回答）として「労働条件（賃金以外）がよいから」が23.1％、「賃金が高いから」が18.8％でした。ただし、事業所が転職者を採用する理由は経験や専門知識が中心であるため、志望動機の中心は仕事の内容と貢献に置き、条件の希望は履歴書の本人希望記入欄や面接の確認の場面で伝えることが目安です。",
  },
  {
    q: "同じ志望動機を複数の企業に使い回してもよいですか？",
    a: "自分の経験・技能の部分（要素②）は共通して使えますが、応募先の事業や募集職種に触れる部分（要素①③）は企業ごとに書き分けることをおすすめします。令和7年転職者実態調査では、情報通信業の事業所の64.1％が転職者の採用で「既存事業の拡大・強化」を重視しており、応募先がどの事業のために人を採るのかを踏まえた内容のほうが、採用の目的と結びつきやすいと考えられます。",
  },
  {
    q: "家族のことや尊敬する人物を志望動機に書く必要はありますか？",
    a: "書く必要はありません。厚生労働省「公正な採用選考の基本」は、家族に関すること、尊敬する人物、人生観・生活信条、愛読書などを、適性・能力に関係のない事項として、応募用紙への記入や面接での質問によって把握することは就職差別につながるおそれがあるとしています。志望動機は、募集職種の仕事に関係する内容でまとめれば十分です。",
  },
];

const purposeRows = [
  { item: "既存事業の拡大・強化", all: "39.5", ict: "64.1", big: "69.5" },
  { item: "人員構成の歪みの是正", all: "48.3", ict: "42.7", big: "57.0" },
  { item: "組織の活性化", all: "31.7", ict: "39.8", big: "49.8" },
  { item: "新規事業分野への進出", all: "4.3", ict: "13.5", big: "29.8" },
  { item: "新技術の導入・開発", all: "1.3", ict: "4.4", big: "25.3" },
  { item: "その他", all: "16.9", ict: "5.7", big: "12.0" },
  { item: "特に意識しなかった", all: "9.0", ict: "5.5", big: "2.7" },
];

const hireReasonRows = [
  { item: "経験を活かし即戦力になるから", r2025: "64.1", r2020: "66.1" },
  { item: "専門知識・能力があるから", r2025: "51.2", r2020: "52.7" },
  { item: "離職者の補充のため", r2025: "44.3", r2020: "44.6" },
  { item: "職場への適応力があるから", r2025: "27.6", r2020: "26.7" },
  { item: "新卒者の採用が困難なため", r2025: "11.6", r2020: "10.3" },
  { item: "その他", r2025: "4.8", r2020: "4.9" },
  { item: "幅広い人脈を期待できるから", r2025: "3.1", r2020: "3.9" },
  { item: "親会社・関連会社からの要請のため", r2025: "1.0", r2020: "1.9" },
];

const choiceRows = [
  { item: "仕事の内容・職種に満足がいくから", all: "40.2", ict: "50.4", tech: "41.2", diff: "+10.2" },
  { item: "自分の技能・能力が活かせるから", all: "38.4", ict: "45.0", tech: "43.4", diff: "+6.6" },
  { item: "キャリアアップできるから", all: "16.6", ict: "34.6", tech: "20.8", diff: "+18.0" },
  { item: "労働条件（賃金以外）がよいから", all: "23.1", ict: "24.9", tech: "23.9", diff: "+1.8" },
  { item: "賃金が高いから", all: "18.8", ict: "23.7", tech: "20.6", diff: "+4.9" },
  { item: "会社に将来性があるから", all: "8.4", ict: "16.9", tech: "6.8", diff: "+8.5" },
  { item: "会社の規模・知名度のため", all: "7.1", ict: "10.5", tech: "3.9", diff: "+3.4" },
  { item: "前の会社の紹介", all: "3.0", ict: "9.1", tech: "3.1", diff: "+6.1" },
  { item: "その他", all: "13.6", ict: "7.0", tech: "13.3", diff: "-6.6" },
  { item: "転勤が少ない、通勤が便利だから", all: "17.1", ict: "5.2", tech: "11.7", diff: "-11.9" },
  { item: "安全や衛生等の職場環境がよいから", all: "5.9", ict: "4.8", tech: "5.9", diff: "-1.1" },
  { item: "地元だから（Uターンを含む）", all: "11.7", ict: "3.7", tech: "12.2", diff: "-8.0" },
  { item: "育児や介護・看護と両立できるから", all: "7.0", ict: "3.5", tech: "7.3", diff: "-3.5" },
];

const firstRows = [
  { item: "仕事の内容・職種に満足がいくから", all: "16.5", ict: "21.3", tech: "13.7" },
  { item: "キャリアアップできるから", all: "6.4", ict: "18.3", tech: "9.5" },
  { item: "自分の技能・能力が活かせるから", all: "17.7", ict: "15.1", tech: "19.5" },
  { item: "賃金が高いから", all: "11.5", ict: "13.6", tech: "12.7" },
  { item: "労働条件（賃金以外）がよいから", all: "10.7", ict: "8.1", tech: "9.8" },
];

const materialRows = [
  { part: "応募先が人を採る目的", where: "求人票の仕事内容・募集背景、企業の採用ページ、上場企業は有価証券報告書の「事業の内容」「経営方針、経営環境及び対処すべき課題等」", note: "どの事業を拡大・強化するための採用かを読み取ります" },
  { part: "募集職種で求められる経験・技能", where: "求人票の必須・歓迎要件、使用技術、担当工程", note: "自分の経験と重なる項目に印を付けます" },
  { part: "自分の経験・技能", where: "職務経歴書、担当したシステム・工程・成果の記録", note: "応募先の要件と重なるものを2〜3件に絞ります" },
  { part: "大事にしたい価値観・今後の方向", where: "ジョブ・カード「キャリア・プランシート」の各欄", note: "仕事に関係する内容に限って使います" },
];

const jobcardRows = [
  { field: "価値観、興味、関心事項等", hint: "大事にしたい価値観、興味・関心を持っていることなどを記入", use: "要素①：応募先の事業・仕事のどこに惹かれたか" },
  { field: "強み等", hint: "自分の強み、弱みを克服するために努力していることなどを記入", use: "要素②：活かせる経験・技能" },
  { field: "将来取り組みたい仕事や働き方等", hint: "今後やってみたい仕事（職種）や働き方、仕事で達成したいことなどを記入", use: "要素③④：入社後の役割とキャリアの方向" },
  { field: "これから取り組むこと等", hint: "今後向上・習得すべき職業能力や、その方法などを記入", use: "要素④：不足を補う学習の計画（必要な場合）" },
];

const structureRows = [
  { no: "①", part: "応募先の事業・仕事で惹かれた点", content: "応募先の事業や募集職種の内容のうち、自分が取り組みたい点を具体的に示す", basis: "転職者が勤め先を選んだ理由で最も多いのは「仕事の内容・職種に満足がいくから」（40.2％、情報通信業50.4％）" },
  { no: "②", part: "活かせる経験・技能", content: "応募先の要件と重なる経験を、担当工程・規模・成果とともに示す", basis: "専門的・技術的な仕事の採用理由は「経験を活かし即戦力になるから」64.1％、「専門知識・能力があるから」51.2％" },
  { no: "③", part: "入社後に担いたい役割と貢献", content: "②の経験を、応募先のどの事業・課題に使うかを示す", basis: "情報通信業の事業所の64.1％が転職者の採用で「既存事業の拡大・強化」を重視" },
  { no: "④", part: "その先のキャリアの方向", content: "応募先で経験を積んだ後に目指す役割を、応募先の事業と矛盾しない形で示す", basis: "情報通信業の転職者の34.6％が「キャリアアップできるから」を選んだ理由に挙げている（全体16.6％）" },
];

const ngRows = [
  { ng: "どの会社にも当てはまる内容", why: "応募先の事業や募集職種に触れていないと、採用の目的（事業の拡大・強化など）との結びつきが伝わりにくくなります", fix: "求人票や有価証券報告書で読み取った事業・課題を1つ挙げ、自分の経験と結びつけます" },
  { ng: "「学ばせていただきたい」が中心の内容", why: "専門的・技術的な仕事の採用理由は即戦力・専門知識が上位です。学ぶ姿勢だけでは貢献の内容が伝わりにくくなります", fix: "先に活かせる経験と貢献を示し、学習は不足を補う計画として添えます" },
  { ng: "条件だけを理由にした内容", why: "条件は転職者が勤め先を選ぶ理由の一つですが、志望動機の中心が条件だと、仕事への関心が伝わりにくくなります", fix: "条件の希望は本人希望記入欄や面接での確認の場面で伝えます" },
  { ng: "転職理由と食い違う内容", why: "「設計から関わりたい」で辞めるのに、志望動機が運用中心の仕事への関心だと、一貫性が問われます", fix: "転職理由で挙げた「次に実現したいこと」を、志望動機の要素①③につなげます" },
  { ng: "現在・前の勤め先の批判", why: "応募先を選ぶ理由ではなく、前職を離れる理由の説明になってしまいます", fix: "批判ではなく、応募先で取り組みたいことに置き換えます" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function MotivationLetterKnowledgePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "志望動機の作り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          志望動機の作り方｜企業が転職者を採用する理由の公的調査と組み立ての手順
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】志望動機の作り方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>志望動機は、「応募先がその人を採る理由」と「自分がその会社を選ぶ理由」が重なる部分を、具体的な経験とともに示すものです。当サイトでは、①応募先の事業・仕事で惹かれた点、②活かせる経験・技能、③入社後の貢献、④その先のキャリアの方向、の4つの要素で組み立てることをおすすめしています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省「令和7年転職者実態調査」では、専門的・技術的な仕事で転職者を採用した事業所の64.1％が「経験を活かし即戦力になるから」、51.2％が「専門知識・能力があるから」を採用理由に挙げています</li>
              <li>・情報通信業の事業所の64.1％は、転職者の採用で「既存事業の拡大・強化」を重視しています（全産業は39.5％）</li>
              <li>・情報通信業の転職者が勤め先を選んだ理由は「仕事の内容・職種に満足がいくから」50.4％が最多で、「キャリアアップできるから」は34.6％と全産業（16.6％）の約2.1倍でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、エンジニアの中途転職を想定し、志望動機の組み立て方をご説明します。企業側が転職者の採用で何を重視しているかは、厚生労働省が2026年9月に公表した「令和7年転職者実態調査」の事業所調査の結果で確認しました。あわせて、同調査の個人調査の統計表（e-Stat）から、情報通信業と専門的・技術的な仕事の転職者が現在の勤め先を選んだ理由を取り出し、全体と比較した表を当サイトで作成しています。材料の集め方には、厚生労働省のジョブ・カード（キャリア・プランシート）の項目を使っています。
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          転職理由（なぜ今の勤め先を離れるか）の整理は<Link href="/knowledge/motivation/" className="text-blue-600 hover:underline">転職理由の整理と伝え方</Link>で、自己PR（何ができるか）の書き方は<Link href="/knowledge/self-pr/" className="text-blue-600 hover:underline">自己PRの書き方・例文</Link>で扱っています。本記事は「なぜこの会社・この仕事か」の組み立てに絞っています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["厚生労働省「令和7年転職者実態調査の概況」（2026年9月25日公表）", "e-Stat 令和7年転職者実態調査（個人票）第29表・第30表", "厚生労働省「公正な採用選考の基本」", "職業安定法（e-Gov法令API）", "厚生労働省 マイジョブ・カード「ジョブ・カード様式」", "厚生労働省履歴書様式例"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="employer" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が転職者の採用で見ていること（公的調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「令和7年転職者実態調査」は、厚生労働省が転職者を受け入れた事業所と転職者本人の両方を対象に行った調査です。事業所調査は9,154事業所、個人調査は7,310人の有効回答を集計しています（2025年10月1日現在の状況）。ここでいう転職者は、2024年10月1日から2025年9月30日までに雇用された一般労働者のうち、雇用される前の1年間に他企業に雇用された経験のある人を指します。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">転職者の採用に当たり重視した事項（事業所の割合・複数回答）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            事業所が「どのような目的で転職者を採用したか」を尋ねた設問です。全産業では「人員構成の歪みの是正」が最も多い一方、情報通信業では「既存事業の拡大・強化」が64.1％で最も多く、全産業より24.6ポイント高くなっていました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>重視した事項</th>
                  <th className={`${th} text-right`}>全産業</th>
                  <th className={`${th} text-right`}>情報通信業</th>
                  <th className={`${th} text-right`}>事業所規模1,000人以上</th>
                </tr>
              </thead>
              <tbody>
                {purposeRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={`${td} text-right`}>{r.all}％</td>
                    <td className={`${td} text-right`}>{r.ict}％</td>
                    <td className={`${td} text-right`}>{r.big}％</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年転職者実態調査の概況」表3（転職者の採用に当たり重視した事項についての回答があった事業所＝100とした割合）。並べ替えは当サイトによるものです。</p>

          <h3 className="font-bold text-slate-800 mb-2 mt-8">専門的・技術的な仕事で転職者を採用した理由（3つまでの複数回答）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ調査では、職種ごとに転職者を採用した理由も尋ねています。プログラマーやシステムエンジニアが含まれる「専門的・技術的な仕事」では、「経験を活かし即戦力になるから」と「専門知識・能力があるから」が上位2項目で、2020年の前回調査から大きな変化はありませんでした。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>採用した理由</th>
                  <th className={`${th} text-right`}>2025年調査</th>
                  <th className={`${th} text-right`}>2020年調査</th>
                </tr>
              </thead>
              <tbody>
                {hireReasonRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={`${td} text-right`}>{r.r2025}％</td>
                    <td className={`${td} text-right`}>{r.r2020}％</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年転職者実態調査の概況」表4（職種：専門的・技術的な仕事。該当する職種で転職者を採用した事業所＝100とした割合）。この職種区分には、プログラマー・システムエンジニアのほか、医師、看護師、教員、デザイナーなども含まれます。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            事業所規模1,000人以上に限ると、「専門知識・能力があるから」は86.1％、「経験を活かし即戦力になるから」は86.2％でした。また、転職者の賃金を決める際に考慮した要素として「これまでの経験・能力・知識」を挙げた事業所は全産業で59.2％、情報通信業では81.3％です。これらの結果から、エンジニアの中途採用では、応募先の事業を前に進めるために、どの経験をすぐに使えるかが重く見られていると考えられます。志望動機でも、関心や意欲に加えて、活かせる経験と入社後の貢献を具体的に示すことが重要です。
          </p>
        </section>

        <section id="applicant" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職者が勤め先を選んだ理由（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            志望動機は「自分がその会社を選んだ理由」でもあります。当サイトでは、e-Statに掲載された令和7年転職者実態調査（個人票）第29表を取得し、全産業・情報通信業・専門的・技術的な仕事（現在の勤め先での職種）の3区分で、現在の勤め先を選んだ理由を並べました。右端の列は、情報通信業と全産業の差です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>現在の勤め先を選んだ理由</th>
                  <th className={`${th} text-right`}>全産業</th>
                  <th className={`${th} text-right`}>情報通信業</th>
                  <th className={`${th} text-right`}>専門的・技術的な仕事</th>
                  <th className={`${th} text-right`}>情報通信業−全産業</th>
                </tr>
              </thead>
              <tbody>
                {choiceRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={`${td} text-right`}>{r.all}％</td>
                    <td className={`${td} text-right`}>{r.ict}％</td>
                    <td className={`${td} text-right`}>{r.tech}％</td>
                    <td className={`${td} text-right`}>{r.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：e-Stat 令和7年転職者実態調査（個人票）第29表「現在の勤め先を選んだ理由別転職者割合」構成比1（全転職者＝100、3つまでの複数回答）。情報通信業の割合の高い順に並べ、差（ポイント）を当サイトで算出しました（2026年11月28日取得）。情報通信業にはエンジニア以外の職種の転職者も含まれます。</p>

          <h3 className="font-bold text-slate-800 mb-2 mt-8">選んだ一番の理由（上位5項目）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>一番の理由</th>
                  <th className={`${th} text-right`}>全産業</th>
                  <th className={`${th} text-right`}>情報通信業</th>
                  <th className={`${th} text-right`}>専門的・技術的な仕事</th>
                </tr>
              </thead>
              <tbody>
                {firstRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={`${td} text-right`}>{r.all}％</td>
                    <td className={`${td} text-right`}>{r.ict}％</td>
                    <td className={`${td} text-right`}>{r.tech}％</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：e-Stat 令和7年転職者実態調査（個人票）第30表「現在の勤め先を選んだ一番の理由別転職者割合」構成比1。情報通信業の割合の高い順に5項目を当サイトで抜き出しました。</p>

          <p className="text-slate-600 leading-relaxed mt-4">
            情報通信業の転職者は、全産業と比べて「キャリアアップできるから」（+18.0ポイント）、「仕事の内容・職種に満足がいくから」（+10.2ポイント）、「会社に将来性があるから」（+8.5ポイント）を挙げる割合が高く、「転勤が少ない、通勤が便利だから」（-11.9ポイント）や「地元だから」（-8.0ポイント）は低くなっていました。一番の理由でも、情報通信業では「キャリアアップできるから」が18.3％で、全産業（6.4％）の約2.9倍です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            前の節の事業所側の結果と並べると、企業側は「経験・専門知識をすぐに使えること」を、転職者側は「仕事の内容」「技能を活かせること」「キャリアアップ」を重く見ていることになります。当サイトでは、この重なりである「自分の技能を、応募先のこの仕事で使い、その先の役割につなげる」という筋を、志望動機の中心に置くことをおすすめしています。なお、これは転職者全体の回答の傾向であり、個々の企業の選考基準を示すものではありません。
          </p>
        </section>

        <section id="materials" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">志望動機の材料を集める</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            志望動機を書き始める前に、応募先側の材料と自分側の材料をそろえます。当サイトでは次の4種類に分けて集めることをおすすめしています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>集める材料</th>
                  <th className={th}>主な情報源</th>
                  <th className={th}>使い方</th>
                </tr>
              </thead>
              <tbody>
                {materialRows.map((r) => (
                  <tr key={r.part}>
                    <td className={td}>{r.part}</td>
                    <td className={td}>{r.where}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">材料の分類と使い方は当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            応募先の材料のうち、求人票の項目の読み方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>で、有価証券報告書のどこを読めば事業と課題が分かるかは<Link href="/knowledge/company-research/" className="text-blue-600 hover:underline">企業分析のやり方</Link>でご説明しています。自分の経験の棚卸しは<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>の手順が使えます。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">ジョブ・カードの「キャリア・プランシート」を使う</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省のジョブ・カードは、キャリア・プランシート、職務経歴シート、職業能力証明シートからなる様式です。就業経験がある方用のキャリア・プランシート（様式1-1）には、次の4つの記入欄があります。各欄の内容は、志望動機の要素にそのまま対応させることができます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>様式1-1の記入欄</th>
                  <th className={th}>様式に書かれた記入内容</th>
                  <th className={th}>志望動機での使い方（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                {jobcardRows.map((r) => (
                  <tr key={r.field}>
                    <td className={td}>{r.field}</td>
                    <td className={td}>{r.hint}</td>
                    <td className={td}>{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省 マイジョブ・カード「ジョブ・カード様式のダウンロード」様式1-1 キャリア・プランシート（就業経験がある方用）。右列は当サイトによる対応づけです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            価値観や興味の欄には私生活に関する内容を書くこともできますが、志望動機に使うのは仕事に関係する内容だけで足ります。自分の価値観の洗い出しは<Link href="/knowledge/self-analysis/" className="text-blue-600 hover:underline">自己分析のやり方</Link>、数年後の方向の整理は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">エンジニアのキャリアプラン設計</Link>もあわせてご覧ください。
          </p>
        </section>

        <section id="structure" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">志望動機の組み立て手順（4つの要素）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            集めた材料を、次の4つの要素の順に並べます。根拠の列は、前の節までの公的調査の結果のうち、その要素を置く理由に当たるものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>順</th>
                  <th className={th}>要素</th>
                  <th className={th}>書く内容</th>
                  <th className={th}>この要素を置く根拠（令和7年転職者実態調査）</th>
                </tr>
              </thead>
              <tbody>
                {structureRows.map((r) => (
                  <tr key={r.no}>
                    <td className={td}>{r.no}</td>
                    <td className={td}>{r.part}</td>
                    <td className={td}>{r.content}</td>
                    <td className={td}>{r.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">要素の分け方と順序は当サイトによる整理です。根拠の数値は前の節の表の出典と同じです。</p>
          <ol className="list-decimal pl-6 text-slate-600 leading-7 mt-4 space-y-2">
            <li><strong>要素②から書き出します。</strong>応募先の必須・歓迎要件と重なる自分の経験を2〜3件選び、担当した工程、システムの規模、成果を1文ずつにします。</li>
            <li><strong>要素①を応募先に合わせて書きます。</strong>求人票や有価証券報告書から読み取った事業・課題のうち、自分が取り組みたいものを1つ選び、なぜ惹かれたかを要素②の経験と関連づけて書きます。</li>
            <li><strong>要素③で①と②をつなげます。</strong>「②の経験を、①の事業のどの場面で使うか」を書きます。担当したい工程や役割まで書くと、入社後の姿が伝わりやすくなります。</li>
            <li><strong>要素④を1文添えます。</strong>応募先で経験を積んだ後に目指す役割を書きます。応募先の事業や組織の方向と矛盾しないことを確認します。</li>
            <li><strong>転職理由と照らし合わせます。</strong>転職理由で挙げた「次に実現したいこと」と、要素①③の内容が食い違っていないかを確認します。</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mt-4">
            厚生労働省履歴書様式例では、志望動機は「志望の動機、特技、好きな学科、アピールポイントなど」という1つの欄に書く形式です。書類では要素①〜③を中心に短くまとめ、面接では要素②の経験を具体的な事例で補足できるように準備しておくことが目安です。面接の最後に逆質問の機会がある場合は、要素③で書いた役割について確認すると、志望動機と一貫した質問になります（<Link href="/knowledge/reverse-questions/" className="text-blue-600 hover:underline">面接の逆質問</Link>）。
          </p>
        </section>

        <section id="sample" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">当サイトの作例（エンジニアの中途転職）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            4つの要素の並べ方を示すため、当サイトで作成した例文です。特定の人物の実例ではありません。応募先は「A社」とし、経験の内容は架空の設定です。そのまま使わず、ご自身の経験と応募先の情報に置き換えてご利用ください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
            <p className="text-xs text-slate-500 mb-2">当サイトの作例：受託開発のバックエンドエンジニアが、自社サービスを運営する企業に応募する場合</p>
            <p className="text-sm text-slate-700 leading-7">
              <span className="font-bold">①</span>貴社の求人票で、会員向けサービスの利用者増加に合わせて決済まわりの機能を拡充する計画を拝見し、自社サービスとして長く改善を続ける開発に携わりたいと考え、応募いたしました。
              <span className="font-bold">②</span>現職では受託開発で、決済機能を含む業務システムのバックエンドを担当し、要件定義から設計・実装・リリース後の保守までを担ってきました。
              <span className="font-bold">③</span>入社後は、この決済機能の設計と保守の経験を活かし、拡充を予定されている機能の設計と実装を担当したいと考えております。
              <span className="font-bold">④</span>将来的には、サービスの改善を技術面から提案できる立場として、チームの設計方針づくりにも貢献したいと考えております。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            作例では、①で応募先の事業の計画（求人票で確認できる事実）に触れ、②で応募先の要件と重なる経験だけを挙げ、③で②の経験を①の事業のどこで使うかを書いています。数値で示せる成果（担当した機能の数、処理件数、障害の削減など）がある場合は、②に加えると具体性が増します。数値の示し方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>の成果の数値化の節をご覧ください。
          </p>
        </section>

        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けたい書き方と、書かなくてよい事項</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>避けたい書き方</th>
                  <th className={th}>理由</th>
                  <th className={th}>書き換えの方向</th>
                </tr>
              </thead>
              <tbody>
                {ngRows.map((r) => (
                  <tr key={r.ng}>
                    <td className={td}>{r.ng}</td>
                    <td className={td}>{r.why}</td>
                    <td className={td}>{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">表は当サイトによる整理です。理由の列の調査結果は、前の節の令和7年転職者実態調査によります。</p>

          <h3 className="font-bold text-slate-800 mb-2 mt-8">公正な採用選考と志望動機</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省「公正な採用選考の基本」は、採用選考を「応募者の基本的人権を尊重すること」と「応募者の適性・能力に基づいた基準により行うこと」の2点を基本として行うよう求めています。そのうえで、次のような適性・能力に関係のない事項を、応募用紙への記入や面接での質問、作文の題材とすることなどによって把握することは、就職差別につながるおそれがあるとしています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>本人に責任のない事項：本籍・出生地、家族に関すること（職業、続柄、健康、病歴、地位、学歴、収入、資産など）、住宅状況、生活環境・家庭環境など</li>
            <li>本来自由であるべき事項：宗教、支持政党、人生観・生活信条、尊敬する人物、思想、労働組合・社会運動、購読新聞・雑誌・愛読書など</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、職業安定法第5条の5は、求人者や労働者の募集を行う者などに対し、求職者の個人情報を、業務の目的の達成に必要な範囲内で、目的を明らかにして収集するよう定めています。志望動機に家族の事情や尊敬する人物、愛読書などを書く必要はなく、募集職種の仕事に関係する内容でまとめれば十分です。面接でこうした事項を尋ねられ、答えに迷う場合は、仕事に関係する内容に絞って答えることもできます。
          </p>
          <p className="text-xs text-slate-500">出典：厚生労働省「公正な採用選考の基本」、職業安定法第5条の5（e-Gov法令API、2026年4月1日施行時点の条文）。</p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職理由・自己PR・書類の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事は志望動機の組み立てに絞ってご説明しました。応募書類と面接の準備に関わる内容は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>なぜ今の勤め先を離れるのか：<Link href="/knowledge/motivation/" className="text-blue-600 hover:underline">転職理由の整理と伝え方</Link></li>
            <li>自分は何ができるのか：<Link href="/knowledge/self-pr/" className="text-blue-600 hover:underline">自己PRの書き方・例文</Link></li>
            <li>経験の棚卸しと書類の書き方：<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link></li>
            <li>応募先の事業と課題の調べ方：<Link href="/knowledge/company-research/" className="text-blue-600 hover:underline">企業分析のやり方</Link>・<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link></li>
            <li>面接の最後に確認すること：<Link href="/knowledge/reverse-questions/" className="text-blue-600 hover:underline">面接の逆質問</Link></li>
          </ul>
        </section>

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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月28日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>厚生労働省「令和7年転職者実態調査の概況」：https://www.mhlw.go.jp/toukei/list/6-18c-r07.html</li>
            <li>同 調査の概要（調査対象数・有効回答数、転職者の定義、職種分類表）：https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-gaiyo.pdf</li>
            <li>同 転職者の採用状況（表3 重視した事項、表4 採用した理由、表5 賃金決定の要素）：https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-1-02.pdf</li>
            <li>同 転職について（表13-1・表13-2 現在の勤め先を選んだ理由）：https://www.mhlw.go.jp/toukei/list/dl/6-18c-r07-2-03.pdf</li>
            <li>e-Stat 令和7年転職者実態調査（個人票）第29表 現在の勤め先を選んだ理由別転職者割合：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040505239</li>
            <li>e-Stat 令和7年転職者実態調査（個人票）第30表 現在の勤め先を選んだ一番の理由別転職者割合：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040505240</li>
            <li>厚生労働省「公正な採用選考の基本」：https://www.mhlw.go.jp/www2/topics/topics/saiyo/saiyo1.htm</li>
            <li>職業安定法（昭和22年法律第141号）第5条の5（e-Gov法令API）：https://laws.e-gov.go.jp/law/322AC0000000141</li>
            <li>厚生労働省 マイジョブ・カード「ジョブ・カード様式のダウンロード」：https://www.job-card.mhlw.go.jp/guidance/download_blank</li>
            <li>厚生労働省履歴書様式例（A4版）：https://www.mhlw.go.jp/content/11600000/05.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "転職理由の整理と伝え方", href: "/knowledge/motivation/" },
              { name: "自己PRの書き方・例文", href: "/knowledge/self-pr/" },
              { name: "企業分析のやり方", href: "/knowledge/company-research/" },
              { name: "面接の逆質問", href: "/knowledge/reverse-questions/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
