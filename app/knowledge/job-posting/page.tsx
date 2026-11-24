import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "求人票の見方｜法令で決まった明示事項11項目と労働条件通知書との違い【2026年】";
const DESCRIPTION =
  "求人票の見方を、職業安定法施行規則が定める明示事項11項目にもとづいて整理します。2024年4月に追加された「業務・就業場所の変更の範囲」、固定残業代の書き方、労働条件通知書（労働基準法施行規則第5条）との違いを一次情報で解説します。";
const URL = "/knowledge/job-posting/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "rule", label: "求人票に書かなければならない事項（法令）" },
  { id: "items", label: "明示事項11項目と見るポイント" },
  { id: "2024", label: "2024年4月に追加された3項目" },
  { id: "overtime", label: "固定残業代・裁量労働制の書き方" },
  { id: "contract", label: "労働条件通知書との違い" },
  { id: "it", label: "ITエンジニアの求人で確認したい点" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "求人票には何が書かれていなければならないのですか？",
    a: "職業安定法第5条の3と職業安定法施行規則第4条の2第3項により、業務の内容（変更の範囲を含む）、契約期間、試用期間、就業場所（変更の範囲を含む）、始業・終業時刻と時間外労働の有無・休憩・休日、賃金の額、社会保険・労働保険の適用、募集者の氏名または名称、受動喫煙防止措置などを明示することが定められています。有期契約の更新基準は有期労働契約の場合、派遣労働者として雇用する旨は派遣の場合に限って必要です。",
  },
  {
    q: "求人票に書かれた条件と、内定後に示された条件が違う場合はどうなりますか？",
    a: "職業安定法第5条の3第3項により、当初明示した労働条件を変更する場合、求人者は労働契約を締結しようとする相手方に変更内容を明示しなければなりません。厚生労働省のリーフレットでは、この明示は速やかに行うよう求めています。労働契約を結ぶ際には、労働基準法に基づく労働条件通知書などで最終的な条件を確認し、求人票と異なる点は入社前に質問することをおすすめします。",
  },
  {
    q: "「詳細は面談時にお伝えします」と書かれた求人は問題ありませんか？",
    a: "厚生労働省のリーフレットでは、求人広告のスペースが足りないなどやむを得ない場合には、そのように付記したうえで労働条件の一部を別のタイミングで明示することも可能としています。ただし、原則として面接など求職者と最初に接触する時点までに、すべての労働条件を明示する必要があるとされています。",
  },
  {
    q: "「就業場所の変更の範囲」とは何ですか？",
    a: "雇入れ直後の就業場所だけでなく、将来の配置転換など今後の見込みも含めた、労働契約の期間中に変更があり得る範囲のことです。2024年4月1日から明示事項に追加されました。転勤の可能性を判断する材料になるため、「本社および全国の支社」のように書かれているかどうかを確認するとよいでしょう。",
  },
  {
    q: "固定残業代の求人ではどこを見ればよいですか？",
    a: "厚生労働省のリーフレットの記載例では、(1)固定残業代を除いた基本給の額、(2)何時間分の時間外手当としていくら支給するか、(3)その時間を超える時間外労働の割増賃金を追加で支給する旨、の3点を書くこととされています。この3点がそろっているかどうかが確認のポイントです。",
  },
];

export default function JobPostingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const cell = "border border-slate-200 px-3 py-2";

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "求人票の見方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          求人票の見方｜法令で決まった明示事項11項目と労働条件通知書との違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 法令・公的資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】求人票はどこを見ればよいか</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>求人票に書くべき事項は、職業安定法施行規則第4条の2第3項で11項目が定められています。まずはこの11項目がそろっているかを確認し、そのうえで業務と就業場所の「変更の範囲」、賃金の内訳（固定残業代の有無）、時間外労働の有無を重点的に見ることをおすすめします。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・2024年4月1日から「業務の変更の範囲」「就業場所の変更の範囲」「有期契約の更新基準」の3項目が追加されました</li>
              <li>・固定残業代がある場合は、基本給・固定残業の時間数と金額・超過分の追加支給の3点が書かれているかを確認します</li>
              <li>・求人票は募集段階の明示（職業安定法）で、入社時には労働条件通知書（労働基準法）で改めて条件が示されます</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、e-Gov法令検索で公開されている職業安定法・同施行規則・労働基準法施行規則の条文と、厚生労働省のリーフレットをもとに、求人票の読み方を整理します。明示事項の数え方と、求人票と労働条件通知書の項目の対応表は、条文をもとに当サイトが作成したものです。個別の労働条件が適法かどうかの判断が必要な場合は、労働局や専門家にご相談ください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["職業安定法 第5条の3・第5条の4（e-Gov法令検索）", "職業安定法施行規則 第4条の2（e-Gov法令検索）", "労働基準法施行規則 第5条（e-Gov法令検索）", "厚生労働省「令和６年４月より、募集時等に明示すべき事項が追加されます」"]}
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

        <section id="rule" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人票に書かなければならない事項（法令）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業安定法第5条の3第1項は、ハローワーク・職業紹介事業者・労働者の募集を行う者などに対し、求職者に「従事すべき業務の内容及び賃金、労働時間その他の労働条件」を明示することを義務づけています。転職エージェント経由の求人、企業の採用ページ、求人広告のいずれにもこの規定が関係します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            また、同法第5条の4は、求人情報について「虚偽の表示又は誤解を生じさせる表示をしてはならない」と定め、募集を行う者には情報を「正確かつ最新の内容に保たなければならない」としています。厚生労働省のリーフレットでは、募集広告に掲載時点を明示するなどの対応が例として挙げられています。
          </p>
        </section>

        <section id="items" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">明示事項11項目と見るポイント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業安定法施行規則第4条の2第3項に列挙された事項を、号ごとに並べました。号の数は第1号から第9号に枝番号（第2号の2・第2号の3）を加えた11項目です。「見るポイント」は当サイトの整理です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>号</th>
                  <th className={`${cell} text-left`}>明示事項（条文の要旨）</th>
                  <th className={`${cell} text-left`}>見るポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>1</td><td className={cell}>従事すべき業務の内容（変更の範囲を含む）</td><td className={cell}>担当工程・使用技術まで書かれているか。変更の範囲がどこまで広いか</td></tr>
                <tr><td className={cell}>2</td><td className={cell}>労働契約の期間</td><td className={cell}>正社員（期間の定めなし）か、契約社員（期間の定めあり）か</td></tr>
                <tr><td className={cell}>2の2</td><td className={cell}>試みの使用期間（試用期間）</td><td className={cell}>期間の長さと、試用期間中に賃金などの条件が変わるか</td></tr>
                <tr><td className={cell}>2の3</td><td className={cell}>有期労働契約を更新する場合の基準（通算期間・更新回数の上限を含む）</td><td className={cell}>有期契約のみ。更新の判断基準と上限の有無</td></tr>
                <tr><td className={cell}>3</td><td className={cell}>就業の場所（変更の範囲を含む）</td><td className={cell}>転勤・客先常駐の可能性。リモートワークの扱い</td></tr>
                <tr><td className={cell}>4</td><td className={cell}>始業・終業の時刻、所定労働時間を超える労働の有無、休憩時間、休日</td><td className={cell}>時間外労働の有無と月平均の目安。裁量労働制の記載</td></tr>
                <tr><td className={cell}>5</td><td className={cell}>賃金の額（臨時の賃金・賞与などを除く）</td><td className={cell}>基本給と手当の内訳。固定残業代の有無</td></tr>
                <tr><td className={cell}>6</td><td className={cell}>健康保険・厚生年金・労災保険・雇用保険の適用</td><td className={cell}>4つの保険がすべて適用されるか</td></tr>
                <tr><td className={cell}>7</td><td className={cell}>労働者を雇用しようとする者の氏名または名称</td><td className={cell}>実際に雇用契約を結ぶ会社名（グループ会社・子会社との違い）</td></tr>
                <tr><td className={cell}>8</td><td className={cell}>派遣労働者として雇用しようとする旨</td><td className={cell}>派遣の場合のみ。「雇用形態：派遣労働者」などの記載</td></tr>
                <tr><td className={cell}>9</td><td className={cell}>就業の場所における受動喫煙を防止するための措置</td><td className={cell}>屋内禁煙・喫煙室設置など</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：職業安定法施行規則第4条の2第3項（e-Gov法令検索・2026年10月1日施行時点の条文）。条文の要旨と「見るポイント」は当サイトがまとめたものです。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            賞与（ボーナス）は第5号の「賃金の額」から除かれているため、求人票に記載がない場合もあります。年収で比較したい場合は、賞与の支給実績を面接やエージェントに確認するとよいでしょう。年収の比べ方は<Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">複数オファーの比較方法</Link>でご説明しています。
          </p>
        </section>

        <section id="2024" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2024年4月に追加された3項目</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業安定法施行規則の改正（令和5年厚生労働省令第89号）により、2024年4月1日から次の3項目が明示事項に加わりました。厚生労働省は、「変更の範囲」を雇入れ直後にとどまらず将来の配置転換など今後の見込みも含めた、労働契約の期間中における変更の範囲と説明しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>追加された項目</th>
                  <th className={`${cell} text-left`}>厚生労働省リーフレットの記載例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>従事すべき業務の変更の範囲</td><td className={cell}>（雇入れ直後）法人営業 （変更の範囲）製造業務を除く当社業務全般</td></tr>
                <tr><td className={cell}>就業場所の変更の範囲</td><td className={cell}>（雇入れ直後）大阪支社 （変更の範囲）本社および全国の支社、営業所</td></tr>
                <tr><td className={cell}>有期労働契約を更新する場合の基準</td><td className={cell}>契約の更新 有（契約期間満了時の業務量、勤務成績により判断） 通算契約期間は4年を上限とする</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            転勤を避けたい方は、就業場所の変更の範囲を確認することで、求人の段階である程度判断できるようになりました。転勤のない求人の探し方は<Link href="/purpose/no-relocation/" className="text-blue-600 hover:underline">転勤なしのエンジニア求人の見極め方</Link>をご覧ください。
          </p>
        </section>

        <section id="overtime" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">固定残業代・裁量労働制の書き方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省のリーフレットでは、時間外労働の有無にかかわらず一定の手当を支給する制度（いわゆる固定残業代）を採用する場合、賃金欄に次の3点を記載する例を示しています。
          </p>
          <ol className="list-decimal pl-6 text-slate-600 leading-relaxed space-y-1 mb-4">
            <li>基本給の額（固定残業代の手当を除く額）</li>
            <li>手当の名称と、何時間分の時間外手当としていくら支給するか</li>
            <li>その時間を超える時間外労働の割増賃金は追加で支給する旨</li>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            また、裁量労働制を採用している場合は、「企画業務型裁量労働制により、●時間働いたものとみなされます」のような記載が必要とされています。月給の額が高く見えても、固定残業代を含んだ額かどうかで基本給は大きく変わるため、内訳を必ず確認してください。
          </p>
        </section>

        <section id="contract" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">労働条件通知書との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票は募集の段階で職業安定法にもとづいて示されるものです。一方、労働契約を結ぶ際には、労働基準法第15条と同法施行規則第5条にもとづき、使用者が労働条件を明示します（一般に労働条件通知書や雇用契約書の形で示されます）。両者の主な項目を、条文をもとに当サイトで対応させました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>項目</th>
                  <th className={`${cell} text-left`}>求人票（職安則4条の2第3項）</th>
                  <th className={`${cell} text-left`}>労働条件通知書（労基則5条1項）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>業務・就業場所（変更の範囲を含む）</td><td className={cell}>○</td><td className={cell}>○（書面で明示）</td></tr>
                <tr><td className={cell}>契約期間・更新基準</td><td className={cell}>○</td><td className={cell}>○（書面で明示）</td></tr>
                <tr><td className={cell}>試用期間</td><td className={cell}>○</td><td className={cell}>（列挙なし）</td></tr>
                <tr><td className={cell}>始業・終業、時間外労働の有無、休憩、休日</td><td className={cell}>○</td><td className={cell}>○（休暇・交替制も含む・書面で明示）</td></tr>
                <tr><td className={cell}>賃金</td><td className={cell}>賃金の額</td><td className={cell}>決定・計算・支払の方法、締切・支払時期、昇給（昇給以外は書面で明示）</td></tr>
                <tr><td className={cell}>退職（解雇の事由を含む）</td><td className={cell}>（列挙なし）</td><td className={cell}>○（書面で明示）</td></tr>
                <tr><td className={cell}>退職手当・賞与</td><td className={cell}>（列挙なし）</td><td className={cell}>定めがある場合に明示</td></tr>
                <tr><td className={cell}>社会保険・労働保険の適用</td><td className={cell}>○</td><td className={cell}>（列挙なし）</td></tr>
                <tr><td className={cell}>受動喫煙防止措置</td><td className={cell}>○</td><td className={cell}>（列挙なし）</td></tr>
                <tr><td className={cell}>休職・表彰と制裁・安全衛生など</td><td className={cell}>（列挙なし）</td><td className={cell}>定めがある場合に明示</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：職業安定法施行規則第4条の2第3項、労働基準法施行規則第5条第1項・第3項（e-Gov法令検索）。「書面で明示」は、労基則第5条第3項が書面の交付による明示を求める事項（第1号〜第4号、昇給を除く）を示します。労働者が希望した場合は電子メール等によることもできます。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            退職に関する事項や退職金の有無は求人票の必須項目に含まれていないため、内定後に労働条件通知書で確認することになります。内定を承諾する前に確認したい項目は<Link href="/knowledge/offer-deadline/" className="text-blue-600 hover:underline">内定承諾の期限</Link>もあわせてご覧ください。
          </p>
        </section>

        <section id="it" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITエンジニアの求人で確認したい点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            法令の明示事項をふまえ、ITエンジニアの求人で特に確認しておきたい点を当サイトで整理しました。
          </p>
          <ul className="text-slate-600 leading-relaxed space-y-2 mb-4">
            <li>・<strong>就業場所の変更の範囲</strong>：「顧客先」「当社が指定する場所」と書かれている場合は、客先常駐の可能性があります。SESの働き方は<Link href="/employment/ses/" className="text-blue-600 hover:underline">SESエンジニアの実態</Link>をご覧ください。</li>
            <li>・<strong>業務の内容</strong>：開発言語や担当工程（要件定義・設計・開発・運用）が書かれているか。変更の範囲が「当社業務全般」の場合は、配属先を面接で確認します。</li>
            <li>・<strong>雇用主の名称</strong>：エージェント経由の求人では、実際に雇用契約を結ぶ会社（親会社か子会社か）を確認します。</li>
            <li>・<strong>派遣の旨</strong>：派遣労働者として雇用する場合はその旨の明示が必要です。正社員の求人と見分けるポイントになります。</li>
            <li>・<strong>時間外労働と固定残業代</strong>：時間外労働の有無、固定残業代の時間数と超過分の扱いを確認します。</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            求人票だけで判断がつかない点は、面接の逆質問で確認できます。質問の例は<Link href="/knowledge/reverse-questions/" className="text-blue-600 hover:underline">逆質問の考え方</Link>でご紹介しています。
          </p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>職業安定法（昭和22年法律第141号）第5条の3・第5条の4（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322AC0000000141</li>
            <li>職業安定法施行規則（昭和22年労働省令第12号）第4条の2（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322M40002000012</li>
            <li>労働基準法施行規則（昭和22年厚生省令第23号）第5条（e-Gov法令検索）：https://laws.e-gov.go.jp/law/322M40000100023</li>
            <li>厚生労働省「令和６年４月より、募集時等に明示すべき事項が追加されます」：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/haken-shoukai/r0604anteisokukaisei1.html</li>
            <li>厚生労働省リーフレット「求人企業の皆さま 募集時などに明示すべき労働条件が追加されます！」：https://www.mhlw.go.jp/content/001114110.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "複数オファーの比較方法", href: "/knowledge/offer-compare/" },
              { name: "内定承諾の期限", href: "/knowledge/offer-deadline/" },
              { name: "逆質問の考え方", href: "/knowledge/reverse-questions/" },
              { name: "SESエンジニアの実態", href: "/employment/ses/" },
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
