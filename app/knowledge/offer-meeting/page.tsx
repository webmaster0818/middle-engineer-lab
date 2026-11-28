import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "オファー面談で聞くこと｜法律で明示が必要な労働条件にもとづく確認リスト【2026年】";
const DESCRIPTION =
  "オファー面談で聞くことを、労働基準法施行規則第5条の明示事項14項目に対応させた確認表で整理します。変更の範囲・テレワーク、賃金の内訳、求人票からの変更の確かめ方、採用内定の法的性質を条文と判例で解説します。";
const URL = "/knowledge/offer-meeting/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "position", label: "オファー面談の位置づけ（内定後・承諾前）" },
  { id: "naitei", label: "承諾前に確認する理由（採用内定の法的性質）" },
  { id: "checklist", label: "労基則第5条の14項目と聞くこと（当サイトの確認表）" },
  { id: "scope", label: "変更の範囲とテレワークの聞き方" },
  { id: "wage", label: "賃金の内訳の確かめ方（モデル労働条件通知書の10項目）" },
  { id: "change", label: "求人票から条件が変わった場合の確認" },
  { id: "examples", label: "問いかけの作例（当サイトの作例）" },
  { id: "after", label: "面談後の書面確認と承諾までの流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "オファー面談では何を聞けばよいですか？",
    a: "労働契約を結ぶ際に会社が明示しなければならない労働条件（労働基準法施行規則第5条第1項の14項目）を基準に、提示された条件で不明な点を確認することをおすすめします。特に、配属先と業務の変更の範囲、就業場所（テレワークを含む）、適用される労働時間制度、賃金の内訳（基本給・手当・固定残業代・賞与）、試用期間中の条件は、入社後の働き方に直接かかわるため優先度が高い項目です（当サイトの整理）。",
  },
  {
    q: "オファー面談は法律で決まった手続きですか？",
    a: "いいえ。当サイトで労働基準法、同法施行規則、職業安定法、同法施行規則、労働契約法の本文（e-Gov法令API）を検索したところ、「オファー面談」「面談」という語はいずれにも含まれていませんでした。オファー面談は企業が任意に設ける場で、法令上の義務は、労働契約の締結に際して労働条件を明示すること（労働基準法第15条）などにあります。",
  },
  {
    q: "内定を承諾する前に条件を確認したほうがよいのはなぜですか？",
    a: "最高裁判所の昭和54年7月20日判決は、事案の事実関係のもとで、採用内定通知と誓約書の提出によって、就労の始期と解約権を留保した労働契約が成立したと判断しています。内定の法的性質は事案ごとに判断されますが、承諾の時点で契約が成立していると評価される可能性があるため、条件の確認は承諾前に済ませておくことが目安になります。",
  },
  {
    q: "オファー面談で口頭で聞いた条件は、書面でももらえますか？",
    a: "労働基準法施行規則第5条第3項・第4項により、契約期間、就業場所と業務（変更の範囲を含む）、労働時間・休日、賃金（昇給を除く）、退職に関する事項などは、書面の交付（労働者が希望すれば電子メール等）で明示しなければならないとされています。口頭で聞いた内容が労働条件通知書に反映されているかを、承諾前に照らし合わせることをおすすめします。",
  },
  {
    q: "求人票と提示された条件が違う場合はどうすればよいですか？",
    a: "職業安定法第5条の3第3項により、求人票などで当初示した労働条件を変更・特定・削除・追加する場合、会社はその内容を明示しなければなりません。厚生労働省の指針では、当初の明示と変更内容を対照できる書面の交付が望ましいとされ、変更の理由を質問された場合には適切に説明することとされています。オファー面談で変更点と理由を確認できます。",
  },
];

const checklistRows = [
  { no: "第1号", item: "労働契約の期間", method: "書面", ask: "期間の定めのない契約か。有期で開始する場合はその期間" },
  { no: "第1号の2", item: "有期契約を更新する場合の基準（更新上限を含む）", method: "書面（有期で更新があり得る場合のみ）", ask: "更新の判断基準、通算期間・更新回数の上限の有無" },
  { no: "第1号の3", item: "就業の場所・従事すべき業務（変更の範囲を含む）", method: "書面", ask: "配属予定の部署・担当業務、将来の配置転換・在籍型出向の範囲、テレワークの扱い" },
  { no: "第2号", item: "始業・終業の時刻、所定外労働の有無、休憩、休日、休暇、交替制", method: "書面", ask: "適用される労働時間制度（固定時間・フレックスタイム制・裁量労働制など）、所定外労働の有無、休日の決め方" },
  { no: "第3号", item: "賃金の決定・計算・支払の方法、締切・支払の時期、昇給", method: "書面（昇給は書面以外も可）", ask: "提示額の内訳（基本給・諸手当・固定残業代）、昇給の時期と決め方" },
  { no: "第4号", item: "退職に関する事項（解雇の事由を含む）", method: "書面", ask: "自己都合退職の届出期限、定年制の有無" },
  { no: "第4号の2", item: "退職手当", method: "定めがある場合に明示", ask: "退職金制度の有無、適用される範囲と算定方法" },
  { no: "第5号", item: "臨時の賃金・賞与・最低賃金額など", method: "定めがある場合に明示", ask: "賞与の有無と支給時期、提示年収に賞与の見込みが含まれるか" },
  { no: "第6号", item: "労働者に負担させる食費・作業用品など", method: "定めがある場合に明示", ask: "業務用PC・機器、在宅勤務にかかる費用の負担の有無" },
  { no: "第7号", item: "安全及び衛生", method: "定めがある場合に明示", ask: "健康診断など安全衛生に関する定め" },
  { no: "第8号", item: "職業訓練", method: "定めがある場合に明示", ask: "入社後の研修や教育訓練に関する定め" },
  { no: "第9号", item: "災害補償・業務外の傷病扶助", method: "定めがある場合に明示", ask: "業務外の病気・けがの際の扶助制度" },
  { no: "第10号", item: "表彰及び制裁", method: "定めがある場合に明示", ask: "表彰・懲戒の定めを確認できる場所（就業規則）" },
  { no: "第11号", item: "休職", method: "定めがある場合に明示", ask: "休職制度の有無と期間" },
];

const extraRows = [
  { item: "試用期間（期間と期間中の条件）", basis: "職業安定法施行規則第4条の2第3項第2号の2（募集時の明示事項）。同条第6項により、試用期間中と終了後で条件が異なる場合はそれぞれを示すこととされています", ask: "試用期間の長さと、期間中の賃金・業務が本採用後と異なるか" },
  { item: "社会保険・労働保険の適用", basis: "職業安定法施行規則第4条の2第3項第6号。モデル労働条件通知書の「その他」欄にも記載欄があります", ask: "健康保険・厚生年金・雇用保険の適用" },
  { item: "就業規則を確認できる場所や方法", basis: "モデル労働条件通知書に欄があります（労働基準法第106条の周知義務に対応した施行通達の改正によるもので、労基則の改正によるものではないとされています）", ask: "入社前に就業規則を閲覧できるか、どこで確認できるか" },
  { item: "入社日", basis: "法令の明示事項ではありません（当サイトの整理）", ask: "入社日の候補と、現職の退職手続きとの調整の余地" },
];

const wageRows = [
  { no: "1", name: "基本賃金（月給・日給・時間給・出来高給など）", point: "提示年収のうち、毎月固定で支払われる額" },
  { no: "2", name: "諸手当の額又は計算方法", point: "固定残業代が含まれる場合は、何時間分でいくらか" },
  { no: "3", name: "所定時間外・休日・深夜労働の割増賃金率", point: "月60時間以内・60時間超、法定休日・法定外休日、深夜の各率" },
  { no: "4", name: "賃金締切日", point: "初回の給与の対象期間" },
  { no: "5", name: "賃金支払日", point: "入社月の給与がいつ支払われるか" },
  { no: "6", name: "賃金の支払方法", point: "口座振込など" },
  { no: "7", name: "労使協定に基づく賃金支払時の控除", point: "社員持株会・財形などの控除の有無" },
  { no: "8", name: "昇給（有・無、時期・金額等）", point: "評価の時期と昇給の決め方" },
  { no: "9", name: "賞与（有・無、時期・金額等）", point: "提示年収に含まれる賞与が確定額か見込み額か" },
  { no: "10", name: "退職金（有・無、時期・金額等）", point: "制度の有無と勤続年数の条件" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function OfferMeetingKnowledgePage() {
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
          { name: "オファー面談で聞くこと" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          オファー面談で聞くこと｜法律で明示が必要な労働条件にもとづく確認リスト
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 法令・公的資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】オファー面談で聞くこと</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>オファー面談では、労働契約を結ぶ際に会社が明示しなければならない労働条件（労働基準法施行規則第5条第1項の14項目）のうち、提示内容で不明な点を、内定を承諾する前に確認することをおすすめします。優先度が高いのは、業務と就業場所の「変更の範囲」（テレワークを含む）、労働時間制度、賃金の内訳、試用期間中の条件です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・14項目のうち6項目は書面（希望すれば電子メール等）での明示が必要で、8項目は会社に定めがある場合に明示が必要な項目です（条文にもとづく当サイト集計）</li>
              <li>・求人票から条件が変わる場合、会社は変更内容を明示する必要があり、厚生労働省の指針は当初の内容と対照できる書面を望ましい方法としています</li>
              <li>・最高裁判所の判例では、採用内定の時点で労働契約が成立したと判断された事案があるため、確認は承諾前に行うことが目安です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          オファー面談は、内定の通知後に、企業が提示する労働条件を説明し、応募者の質問に答える場として設けられることがあります。本記事では、エンジニアの中途転職で内定を受けてから承諾するまでの間に何を確認するかに絞り、e-Gov法令APIで取得した労働基準法・同法施行規則・職業安定法・同法施行規則・労働契約法の条文、厚生労働省の施行通達・Q&A・指針、最高裁判所の判決文をもとに整理しました。条文の各号と面談で確認する内容の対応表は、当サイトが作成したものです。求人票の段階で示される明示事項は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>でご説明しています。個別の契約の判断は、労働基準監督署などの公的な相談窓口や専門家にご相談ください。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["労働基準法 第15条（e-Gov法令API）", "労働基準法施行規則 第5条（e-Gov法令API）", "職業安定法 第5条の3・同法施行規則 第4条の2（e-Gov法令API）", "労働契約法 第4条・第6条（e-Gov法令API）", "厚生労働省 施行通達（基発1012第2号）・Q&A・リーフレット", "厚生労働省 職業安定法に基づく指針（平成11年労働省告示第141号）", "最高裁判所 昭和54年7月20日判決"]}
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

        <section id="position" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファー面談の位置づけ（内定後・承諾前）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトで、労働基準法、労働基準法施行規則、職業安定法、職業安定法施行規則、労働契約法の本文（2026年11月28日にe-Gov法令APIで取得）を検索したところ、「オファー面談」「面談」という語はいずれにも含まれていませんでした。厚生労働省の職業安定法に基づく指針にも「面談」の語はありませんでした。オファー面談は企業が任意に設ける場であり、開催の有無や形式は企業によって異なります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            一方で、労働条件の明示は法令上の義務です。労働基準法第15条第1項は、使用者は「労働契約の締結に際し、労働者に対して賃金、労働時間その他の労働条件を明示しなければならない」と定めています。また、労働契約法第4条は、使用者は提示する労働条件と労働契約の内容について「労働者の理解を深めるようにするものとする」とし、労働者と使用者は契約の内容について「できる限り書面により確認するものとする」と定めています。オファー面談は、この明示と理解の確認を行う機会として活用できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>段階</th>
                  <th className={th}>主な根拠</th>
                  <th className={th}>扱う記事</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>募集・求人票</td><td className={td}>職業安定法第5条の3第1項、同法施行規則第4条の2第3項</td><td className={td}><Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link></td></tr>
                <tr><td className={td}>内定後・承諾前（オファー面談）</td><td className={td}>職業安定法第5条の3第3項（変更明示）、労働基準法第15条第1項、同法施行規則第5条</td><td className={td}>本記事</td></tr>
                <tr><td className={td}>承諾の判断・回答</td><td className={td}>法令の定めなし（企業が示す回答期限）</td><td className={td}><Link href="/knowledge/offer-deadline/" className="text-blue-600 hover:underline">内定承諾の期限と延長</Link>・<Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">複数内定の比較方法</Link></td></tr>
                <tr><td className={td}>入社前・入社後</td><td className={td}>試用期間は通常の労働契約の一部</td><td className={td}><Link href="/knowledge/pre-onboarding/" className="text-blue-600 hover:underline">入社前の準備</Link>・<Link href="/knowledge/probation/" className="text-blue-600 hover:underline">試用期間</Link></td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：各法令（e-Gov法令API、2026年11月28日取得）。段階の分け方は当サイトによる整理です。</p>
        </section>

        <section id="naitei" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">承諾前に確認する理由（採用内定の法的性質）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            採用内定の法的性質については、最高裁判所の昭和54年7月20日判決（一般に「大日本印刷事件」と呼ばれる事案）がよく参照されます。判決は、採用内定の実態は多様で「一義的に論断することは困難」であり、「当該企業の当該年度における採用内定の事実関係に即してこれを検討する必要がある」としたうえで、その事案について次のように判断しました。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm mb-4">
            上告人からの募集（申込みの誘引）に対し、被上告人が応募したのは、労働契約の申込みであり、これに対する上告人からの採用内定通知は、右申込みに対する承諾であつて、被上告人の本件誓約書の提出とあいまつて、これにより、被上告人と上告人との間に、被上告人の就労の始期を昭和四四年大学卒業直後とし、それまでの間、本件誓約書記載の五項目の採用内定取消事由に基づく解約権を留保した労働契約が成立したと解するのを相当とした原審の判断は正当であつて（後略）
          </blockquote>
          <p className="text-xs text-slate-500 mb-4">出典：最高裁判所 昭和54年7月20日判決 判決文（裁判所ウェブサイト 裁判例検索）。</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            同判決は、採用内定の取消事由は「採用内定当時知ることができず、また知ることが期待できないような事実」であって、取り消すことが「客観的に合理的と認められ社会通念上相当として是認することができるものに限られる」としています。また、採用内定者の地位は「一定の試用期間を付して雇用関係に入つた者の試用期間中の地位と基本的には異なるところはない」と述べています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            この事案は大学の新規卒業予定者に関するもので、中途採用の内定にそのまま当てはまるとは限りません。ただし、労働契約法第6条は、労働契約は労働者と使用者が合意することによって成立すると定めています。承諾の意思表示や承諾書の提出によって契約が成立したと評価される可能性があるため、労働条件の確認は承諾前に済ませておくことが目安になります（当サイトの整理）。承諾後の辞退については<Link href="/knowledge/offer-decline/" className="text-blue-600 hover:underline">内定辞退の伝え方</Link>をご覧ください。
          </p>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">労基則第5条の14項目と聞くこと（当サイトの確認表）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            労働基準法施行規則第5条第1項は、労働契約の締結に際して明示しなければならない労働条件を、第1号から第11号までに枝番号（第1号の2、第1号の3、第4号の2）を加えた14項目で定めています。このうち、第3項・第4項で書面の交付（労働者が希望した場合は電子メール等も可）による明示が必要とされるのは第1号から第4号まで（昇給を除く）の6項目です。第4号の2から第11号までの8項目は、会社がその定めをしない場合は明示の対象外とされています。各項目について、オファー面談で確認する内容を当サイトで対応させました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>号</th>
                  <th className={th}>明示事項（条文の要旨）</th>
                  <th className={th}>明示の方法</th>
                  <th className={th}>オファー面談で確認する内容（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                {checklistRows.map((r) => (
                  <tr key={r.no}>
                    <td className={td}>{r.no}</td>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.method}</td>
                    <td className={td}>{r.ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：労働基準法施行規則第5条第1項・第3項・第4項（e-Gov法令API、2026年4月1日施行の改正を反映した版、2026年11月28日取得）。号の数（14項目）と書面・定めがある場合の区分（6項目・8項目）は条文をもとにした当サイト集計、右列は当サイトによる対応づけです。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            期間の定めのない正社員の契約では第1号の2（更新の基準）は対象外となるため、書面で示される項目は実質的に5項目です。なお、同条第2項は、使用者は明示しなければならない労働条件を「事実と異なるものとしてはならない」と定めています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            労基則第5条には含まれないものの、オファー面談で確認しておきたい項目は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>根拠・扱い</th>
                  <th className={th}>確認する内容</th>
                </tr>
              </thead>
              <tbody>
                {extraRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.basis}</td>
                    <td className={td}>{r.ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：職業安定法施行規則第4条の2（e-Gov法令API）、厚生労働省「令和５年改正労働基準法施行規則等に係る労働条件明示等に関するＱ＆Ａ」5-1、施行通達（基発1012第2号）別添のモデル労働条件通知書。試用期間の制度は<Link href="/knowledge/probation/" className="text-blue-600 hover:underline">試用期間の解説</Link>をご覧ください。</p>
        </section>

        <section id="scope" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">変更の範囲とテレワークの聞き方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            2024年4月1日以降に締結する労働契約では、雇入れ直後の就業場所と業務に加えて、それらの「変更の範囲」の明示が必要になりました（労基則第5条第1項第1号の3）。求人票での書き方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>で扱っているため、ここでは労働契約の段階での解釈のうち、オファー面談で確認する際に役立つ点をご説明します。厚生労働省の施行通達（令和5年10月12日 基発1012第2号）は、次のように示しています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>「就業の場所及び従事すべき業務」には、配置転換や在籍型出向が命じられた場合の出向先の場所と業務が含まれます。臨時的な他部門への応援業務、出張、研修など一時的な変更先は含まれません</li>
            <li>「変更の範囲」とは、今後の見込みも含め、その労働契約の期間中における変更の範囲をいいます</li>
            <li>テレワークを行うことが通常想定されている場合は、テレワークを行う場所が就業の場所の変更の範囲に含まれます。通常想定されていない場合、一時的にテレワークを行う場所は含まれません</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            エンジニアの転職では、リモート勤務を前提に応募するケースがあります。通達の考え方によると、テレワークが通常想定されているかどうかで就業場所の記載が変わるため、オファー面談で「在宅勤務は就業場所として労働条件通知書に記載されるか」を確認しておくと、入社後の認識の違いを防ぎやすくなります（当サイトの整理）。また、業務の変更の範囲が「会社の定める業務」のように広く書かれている場合は、開発職から他の職種への異動があり得るかを聞いておくことが目安です。リモート勤務の求人の探し方は<Link href="/knowledge/remote-work/" className="text-blue-600 hover:underline">リモートワーク求人の探し方</Link>をご覧ください。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賃金の内訳の確かめ方（モデル労働条件通知書の10項目）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            オファー面談では「年収○万円」と総額で提示されることがあります。厚生労働省が施行通達の別添として示しているモデル労働条件通知書（一般労働者用；常用、有期雇用型）の「賃金」欄には、次の10項目が並んでいます。提示された年収を、この10項目に分けて確認すると、内訳の不明点が見つけやすくなります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>欄の番号</th>
                  <th className={th}>モデル労働条件通知書の項目</th>
                  <th className={th}>面談で確認する点（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.no}>
                    <td className={td}>{r.no}</td>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「労働基準法施行規則及び労働時間等の設定の改善に関する特別措置法施行規則の一部を改正する省令等の施行等について」（令和5年10月12日 基発1012第2号）別添1。右列は当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            労基則第5条では、賞与（第5号）と退職手当（第4号の2）は、会社に定めがある場合に明示する項目で、書面での明示が義務づけられた項目には含まれていません。モデル労働条件通知書では、昇給・賞与・退職金はいずれも「有（時期、金額等）・無」で記載する形式です。提示年収に賞与の見込み額が含まれている場合は、その算定の前提を確認しておくことが目安です。金額の交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉ガイド</Link>でご説明しています。
          </p>
        </section>

        <section id="change" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人票から条件が変わった場合の確認</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業安定法第5条の3第3項は、求人票などで明示した労働条件を変更する場合などに、労働契約を締結しようとする相手方へ変更内容を明示することを求めています。職業安定法施行規則第4条の2第1項は、変更のほか、当初の明示の範囲内で条件を「特定する場合」、明示した条件を「削除する場合」、条件を「追加する場合」も対象としています。たとえば、求人票で上限と下限の幅で示されていた年収が、提示額として1つの金額に決まることは、範囲内での特定に当たると考えられます（当サイトの整理）。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省の指針（平成11年労働省告示第141号）第三の二は、この変更等の明示について次のように定めています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>明示の方法は、当初の明示と変更内容等を「対照することができる書面を交付すること」が望ましく、労働条件通知書で変更内容等に下線を引く・着色する・注記する方法も可能です。一部を削除する場合は、削除される前の内容も併せて記載することとされています</li>
            <li>条件の調整が終わった後、労働契約を締結するかどうか考える時間が確保されるよう、可能な限り速やかに明示することとされています</li>
            <li>変更・特定・削除・追加の理由について質問された場合は、適切に説明することとされています</li>
            <li>当初の明示は「そのまま労働契約の内容となることが期待されているもの」であり、安易に変更・削除・追加してはならないとされています</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            オファー面談では、求人票と提示条件を並べて、違う箇所とその理由を確認することができます。変更点が多い場合は、対照できる書面での提示を依頼するのも1つの方法です（当サイトの整理）。
          </p>
        </section>

        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">問いかけの作例（当サイトの作例）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            確認表の内容を、オファー面談で使える問いかけの形にした当サイトの作例です。実際の面談記録や特定の企業とのやり取りではありません。面接の段階での質問は<Link href="/knowledge/reverse-questions/" className="text-blue-600 hover:underline">面接の逆質問</Link>で扱っています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>対応する項目</th>
                  <th className={th}>問いかけの作例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>業務・変更の範囲（第1号の3）</td><td className={td}>「配属予定のチームと、入社後に担当する業務を教えていただけますでしょうか。あわせて、業務の変更の範囲として、開発職以外への異動の可能性があるかを確認させてください。」</td></tr>
                <tr><td className={td}>就業場所・テレワーク（第1号の3）</td><td className={td}>「在宅勤務を通常の勤務形態として想定されている場合、労働条件通知書の就業場所には自宅が記載されますでしょうか。出社の頻度の目安もお伺いできますでしょうか。」</td></tr>
                <tr><td className={td}>労働時間（第2号）</td><td className={td}>「適用される労働時間制度と、フレックスタイム制の場合のコアタイムを教えてください。障害対応やオンコールの当番がある場合は、その頻度と扱いもお伺いしたいです。」</td></tr>
                <tr><td className={td}>賃金の内訳（第3号）</td><td className={td}>「ご提示いただいた年収の内訳として、基本給、手当、固定残業代の時間数と金額、賞与の見込み額をそれぞれお教えいただけますでしょうか。」</td></tr>
                <tr><td className={td}>試用期間</td><td className={td}>「試用期間の長さと、期間中の賃金や業務が本採用後と異なるかを確認させてください。」</td></tr>
                <tr><td className={td}>求人票からの変更（職業安定法第5条の3第3項）</td><td className={td}>「求人票の記載から変わった点がありましたら、その内容と理由をお教えください。可能であれば、当初の内容と比べられる形の書面でいただけますと幸いです。」</td></tr>
                <tr><td className={td}>書面の受け取り（労基則第5条第4項）</td><td className={td}>「労働条件通知書は、承諾のご回答の前に拝見できますでしょうか。電子メールでの受け取りを希望いたします。」</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">すべて当サイトの作例です。企業や面談の形式によって、聞き方や順序を調整してください。</p>
        </section>

        <section id="after" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談後の書面確認と承諾までの流れ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            労基則第5条第4項は、書面で明示すべき事項の明示方法を書面の交付とし、労働者が希望した場合はファクシミリや電子メール等（記録を出力して書面を作成できるものに限る）によることもできるとしています。オファー面談で口頭で聞いた内容が、交付された労働条件通知書に反映されているかを照らし合わせることをおすすめします。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            労働基準法第15条第2項は、明示された労働条件が「事実と相違する場合においては、労働者は、即時に労働契約を解除することができる」と定めています。同条第3項は、就業のために住居を変更した労働者が契約解除の日から14日以内に帰郷する場合、使用者は必要な旅費を負担しなければならないとしています。転居を伴う転職では、明示された条件を書面で残しておくことが、こうした規定を使う際の前提になります（当サイトの整理）。
          </p>
          <ol className="list-decimal pl-6 text-slate-600 leading-7">
            <li>オファー面談で不明点を確認する（本記事の確認表）</li>
            <li>労働条件通知書を受け取り、面談の内容と照らし合わせる</li>
            <li>回答期限までに比較・検討する（<Link href="/knowledge/offer-deadline/" className="text-blue-600 hover:underline">内定承諾の期限と延長</Link>・<Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">複数内定の比較方法</Link>）</li>
            <li>承諾し、現職の退職手続きを進める（引き止めへの対応は<Link href="/knowledge/counter-offer/" className="text-blue-600 hover:underline">カウンターオファーへの対応</Link>）</li>
            <li>入社前の書類・手続きを準備する（<Link href="/knowledge/pre-onboarding/" className="text-blue-600 hover:underline">入社前の準備チェックリスト</Link>）</li>
          </ol>
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
            <li>労働基準法（昭和22年法律第49号）第15条（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322AC0000000049</li>
            <li>労働基準法施行規則（昭和22年厚生省令第23号）第5条（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322M40000100023</li>
            <li>職業安定法（昭和22年法律第141号）第5条の3（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322AC0000000141</li>
            <li>職業安定法施行規則（昭和22年労働省令第12号）第4条の2（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322M40002000012</li>
            <li>労働契約法（平成19年法律第128号）第4条・第6条（e-Gov法令検索）：https://laws.e-gov.go.jp/law/419AC0000000128</li>
            <li>e-Gov法令API（条文の取得に使用）：https://laws.e-gov.go.jp/api/2/law_data/</li>
            <li>厚生労働省「令和６年４月から労働条件明示のルールが改正されます」：https://www.mhlw.go.jp/stf/newpage_32105.html</li>
            <li>厚生労働省リーフレット「2024年４月から労働条件明示のルールが変わりました」：https://www.mhlw.go.jp/content/11200000/001298245.pdf</li>
            <li>厚生労働省「令和５年改正労働基準法施行規則等に係る労働条件明示等に関するＱ＆Ａ」：https://www.mhlw.go.jp/content/11200000/001156119.pdf</li>
            <li>厚生労働省 施行通達（令和5年10月12日 基発1012第2号、別添1 モデル労働条件通知書を含む）：https://www.mhlw.go.jp/content/11200000/001156120.pdf</li>
            <li>厚生労働省リーフレット「求職者の皆さま 企業から受ける労働条件明示のルールが変わります！」：https://www.mhlw.go.jp/content/001114112.pdf</li>
            <li>厚生労働省「職業紹介事業者、求人者、労働者の募集を行う者、募集受託者、募集情報等提供事業を行う者、労働者供給事業者、労働者供給を受けようとする者等がその責務等に関して適切に対処するための指針」（平成11年労働省告示第141号）：https://www.mhlw.go.jp/web/t_doc?dataId=00005680&dataType=0&pageNo=1</li>
            <li>最高裁判所 昭和54年7月20日判決（裁判例検索）：https://www.courts.go.jp/app/hanrei_jp/detail2?id=52138</li>
            <li>同 判決文（PDF）：https://www.courts.go.jp/assets/hanrei/hanrei-pdf-52138.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "求人票の見方", href: "/knowledge/job-posting/" },
              { name: "内定承諾の期限と延長", href: "/knowledge/offer-deadline/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "カウンターオファーへの対応", href: "/knowledge/counter-offer/" },
              { name: "入社前の準備チェックリスト", href: "/knowledge/pre-onboarding/" },
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
