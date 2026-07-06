import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/paid-leave/" },
  title: "退職時の有給消化【時季変更権・買い取り・拒否への対処】",
  description:
    "退職時の有給消化を法律の観点から解説。年次有給休暇は労働者の権利であり、退職日を超えた時季変更権は行使できない点や、買い取りの原則と例外、消化拒否への対処を30代・40代エンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：退職時の有給は実質的に取得できるのが原則" },
  { id: "basics", label: "前提：年次有給休暇は労働者の権利" },
  { id: "change-right", label: "時季変更権は退職日を超えて行使できない" },
  { id: "buyout", label: "買い取りの原則と例外" },
  { id: "trouble", label: "トラブル別の対処（拒否・引き継ぎ・人手不足）" },
  { id: "schedule", label: "逆算スケジュールの立て方" },
  { id: "consult", label: "相談先（労基署など）" },
  { id: "middle", label: "30代・40代視点：残日数が多くなりがち" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const troubles = [
  {
    q: "「退職時の有給消化は認めない」と言われた",
    a: "年次有給休暇の取得は労働者の権利であり、退職時に消化を申し出ること自体は妨げられないのが原則です。会社の時季変更権も、退職日を超えて休暇をずらすことはできないため、退職時には実質的に拒否しにくいと考えられています（行政通達の考え方）。まずは就業規則と残日数を確認し、書面やメールなど記録に残る形で消化希望を伝えます。それでも一方的に拒否される場合は、自己判断で諦めず労働基準監督署など公的窓口に相談してください。",
  },
  {
    q: "「引き継ぎが終わっていないから」と止められた",
    a: "引き継ぎは円満退職のために重要ですが、引き継ぎの完了を有給消化の条件にできるかは別問題です。現実的な落とし所として、引き継ぎを前倒しで進め、最終出社日までに完了させたうえで有給消化に入る計画を早めに共有すると、対立を避けやすくなります。引き継ぎの進め方は引き継ぎドキュメントの記事を参考にしてください。",
  },
  {
    q: "「人手不足で困る」と情に訴えられた",
    a: "人員の手当ては基本的に会社側の課題です。情に訴えられても、退職日を超えて休暇をずらすことはできないため、消化の権利自体が消えるわけではありません。角を立てたくない場合は、消化日数の一部を引き継ぎに充てるなど歩み寄りの余地を示しつつ、最終出社日と消化開始日を明確に合意しておくと安心です。",
  },
  {
    q: "残日数が多く、退職日までに消化しきれない",
    a: "退職日を後ろにずらして消化期間を確保できないか、上司と相談するのが基本です。それが難しく休暇が消滅する場合、退職時に限って残日数を買い取る対応がとられることがありますが、買い取りは会社の義務ではありません。買い取りの有無や金額は会社の規程・合意によるため、就業規則を確認し、必要に応じて専門家に相談してください。",
  },
];

const schedule = [
  { period: "退職日から逆算", title: "残日数を確定", desc: "勤怠システムや給与明細で年次有給休暇の残日数を正確に把握します。付与日や時効（消滅）の扱いも確認。" },
  { period: "切り出し時", title: "消化希望を早めに共有", desc: "退職を切り出すタイミングで、最終出社日と有給消化の見通しを上司と相談しておくと調整がスムーズです。" },
  { period: "引き継ぎ期間", title: "引き継ぎを前倒し", desc: "有給消化に入る前に引き継ぎを完了させる計画を立てます。属人化の解消が消化交渉の追い風になります。" },
  { period: "最終出社後", title: "有給消化期間", desc: "引き継ぎ完了後、最終出社日の翌日から退職日までを有給消化に充てるのが一般的な流れです。" },
];

const faqs = [
  {
    q: "退職時に有給休暇はすべて消化できますか？",
    a: "年次有給休暇は労働者の権利であり、退職時にも取得できるのが原則です。会社には繁忙期などに休暇日を別の時季に変更する『時季変更権』がありますが、これは退職日を超えて休暇をずらすことはできないと考えられているため、退職時には実質的に消化を拒否しにくいとされています（行政通達の考え方）。ただし、残日数が退職日までの日数を上回ると物理的に消化しきれないことがあり、その場合は退職日の調整や買い取りの相談になります。具体的な取り扱いは就業規則と個別の事情によって異なるため、疑問がある場合は専門家や公的窓口に相談してください。",
  },
  {
    q: "会社は有給消化を拒否できますか？",
    a: "会社の時季変更権は、あくまで休暇を取る『時季』を変更するための権利であり、休暇そのものを与えない権利ではありません。退職時は変更先となる日が退職後にしか残らないため、時季変更権を有効に行使できず、実質的に消化を拒否することは難しいと考えられています。とはいえ、現場では『引き継ぎ』『人手不足』を理由に止められることがあります。記録に残る形で消化希望を伝え、それでも一方的に拒否される場合は労働基準監督署などに相談してください。なお、本記事は一般論であり、個別の事案については専門家への相談をおすすめします。",
  },
  {
    q: "有給休暇は買い取ってもらえますか？",
    a: "年次有給休暇の買い取りは、休暇の取得を妨げることになるため原則として認められていません。例外的に、退職時に消化しきれず消滅してしまう残日数について、会社が任意で買い取る対応がとられることがあります。ただしこれは会社の義務ではなく、買い取りの有無や金額は会社の規程・労使の合意によります。買い取りを前提にせず、まずは退職日までに消化できるよう調整するのが基本です。詳細は就業規則を確認し、必要に応じて専門家に相談してください。",
  },
  {
    q: "年5日の取得義務とは何ですか？",
    a: "労働基準法では、年次有給休暇が一定日数以上付与される労働者に対し、会社が年5日について確実に取得させる義務を負うとされています（年5日取得義務）。これは在職中の取得を促す制度であり、退職時の消化とは別の前提知識です。退職時には、この義務とは別に、残っている有給休暇を消化できるかが論点になります。自分の付与日数や取得状況は勤怠記録で確認してください。",
  },
  {
    q: "有給消化中に転職先で働き始めても良いですか？",
    a: "有給消化中はまだ前職に在籍している状態のため、二重就労にあたる可能性があり、就業規則で兼業・競業が制限されている場合はトラブルになり得ます。また、社会保険の切り替えのタイミングにも影響します。一般には、有給消化期間が終わり退職日を迎えてから次の会社で働き始めるのが無難です。入社日の調整も含め、個別の事情は会社の規程を確認し、必要に応じて専門家に相談してください。",
  },
  {
    q: "有給消化と引き継ぎはどちらを優先すべきですか？",
    a: "法律上、有給消化は労働者の権利ですが、円満退職のためには引き継ぎも重要です。実務的には『引き継ぎを前倒しで完了させ、その後に有給消化に入る』という順序で計画すると、権利を行使しつつ円満さも保てます。引き継ぎの完了を有給消化の条件にすることはできませんが、属人化を解消しておくこと自体が、消化の相談を進めやすくする現実的な手段になります。",
  },
];

export default function PaidLeavePage() {
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
        title="退職時の有給消化【時季変更権・買い取り・拒否への対処】"
        description="退職時の有給消化を法律の観点から解説。年次有給休暇は労働者の権利であり、退職日を超えた時季変更権は行使できない点や、買い取りの原則と例外、消化拒否への対処を30代・40代エンジニア向けに整理します。"
        url="/knowledge/paid-leave/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職時の有給消化" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          退職時の有給消化【時季変更権・買い取り・拒否への対処】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 時季変更権・買い取りの原則・消化拒否への対処
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            退職が決まると、残った有給休暇をどこまで消化できるかが気になります。「引き継ぎが終わらないと無理」「人手不足だから」と止められた、という相談は少なくありません。本記事では、退職時の有給消化を<strong>法律の観点</strong>から整理します。時季変更権の限界、買い取りの原則と例外、消化を拒否されたときの対処までをまとめました。退職の切り出し方は
            <Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>
            、退職後の保険・年金は
            <Link href="/knowledge/after-resignation-procedures/" className="text-petrol hover:underline">退職後の手続き</Link>
            を参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>本記事は一般的な制度の解説であり、法的助言ではありません。</strong>有給休暇の取り扱いは就業規則や個別の事情によって異なります。具体的なトラブルや判断は、労働基準監督署・弁護士・社会保険労務士などの専門家に必ずご相談ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["労働基準法（年次有給休暇に関する一般的な規定）", "年次有給休暇に関する行政通達の考え方"]} />

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

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：退職時の有給は実質的に取得できるのが原則</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・年次有給休暇は<strong>労働者の権利</strong>。退職時にも取得できるのが原則。</li>
              <li>・会社の<strong>時季変更権は退職日を超えて行使できない</strong>ため、退職時は実質的に拒否しにくい。</li>
              <li>・買い取りは原則違法。ただし<strong>退職時に消滅する残日数の買い取りは例外的に可</strong>（義務ではない）。</li>
              <li>・拒否されたら自己判断で諦めず、<strong>労働基準監督署</strong>など公的窓口に相談する。</li>
            </ul>
          </div>
        </section>

        <section id="basics" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">前提：年次有給休暇は労働者の権利</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年次有給休暇は、一定期間勤務した労働者に法律上当然に発生する権利です。取得には原則として理由を問われず、いつ取るか（時季）を指定するのは労働者側です（時季指定権）。会社が「許可」して与えるものではない、というのが出発点になります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、労働基準法では、年次有給休暇が一定日数以上付与される労働者について、会社が年5日を確実に取得させる義務を負うとされています（年5日取得義務）。これは在職中の取得を促す制度で、退職時の消化とは別の前提知識として押さえておきましょう。
          </p>
        </section>

        <section id="change-right" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">時季変更権は退職日を超えて行使できない</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            会社には、業務の正常な運営を妨げる場合に、休暇を取る「時季」を別の日に変更する権利（時季変更権）があります。ただしこれは、あくまで休暇を<strong>別の日にずらす</strong>権利であって、休暇そのものを与えない権利ではありません。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              退職する場合、変更先となる日は退職日より後にしか残っていません。退職後にはもう労働者ではないため、時季変更権を有効に行使できる「変更先の日」が存在しないことになります。このため、退職時の有給消化は時季変更権による拒否ができず、実質的に取得できると考えられています（行政通達の考え方）。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            これが、退職時の有給が「実質的に拒否されにくい」と言われる法的な理由です。ただし、残日数が退職日までの日数を超えていて物理的に消化しきれない場合は、別の論点（退職日の調整・買い取り）になります。
          </p>
        </section>

        <section id="buyout" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">買い取りの原則と例外</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">原則：買い取りは認められない</h3>
              <p className="text-sm text-slate-600">有給休暇を金銭で買い取ることを前提にすると、休暇の取得自体が妨げられてしまいます。そのため、在職中の有給を買い取って取得させない取り扱いは、原則として認められていません。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">例外：退職時に消滅する残日数</h3>
              <p className="text-sm text-slate-600">退職時に消化しきれず消滅してしまう残日数については、会社が任意で買い取る対応が例外的にとられることがあります。ただしこれは会社の義務ではなく、買い取りの有無・金額は規程や労使の合意によります。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            買い取りはあくまで例外であり、「買い取ってもらえるはず」という前提で計画するのは危険です。まずは退職日までに消化できるよう、退職日の調整も含めて早めに相談するのが基本です。
          </p>
        </section>

        <section id="trouble" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">トラブル別の対処（拒否・引き継ぎ・人手不足）</h2>
          <div className="space-y-4">
            {troubles.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="schedule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">逆算スケジュールの立て方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            有給消化を確実に行うコツは、退職日から逆算して早めに段取りを共有しておくことです。引き継ぎを前倒しで終わらせておけば、消化交渉も進めやすくなります。
          </p>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[110px] h-8 rounded-full bg-petrol text-white font-bold text-xs px-2 shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 全体の段取りは<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>、引き継ぎの作り方は<Link href="/knowledge/handover/" className="text-petrol hover:underline">引き継ぎドキュメントの作り方</Link>も参照。</p>
        </section>

        <section id="consult" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先（労基署など）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            消化を一方的に拒否される、買い取りや残日数の扱いでトラブルになる、といった場合は、自己判断で諦めず公的な窓口に相談してください。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>労働基準監督署</strong>：労働基準法に関する相談・申告の窓口。有給休暇の取り扱いについて相談できます。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>総合労働相談コーナー</strong>：各都道府県の労働局などに設けられた、労働問題全般の相談窓口。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>弁護士・社会保険労務士</strong>：個別の事案について具体的な助言や対応を依頼できます。</span></li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            ※ どの窓口が適切かは状況によります。緊急性や深刻度が高い場合は、早めに専門家へ相談してください。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：残日数が多くなりがち</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層は、在職年数が長いぶん有給の付与日数も多く、繁忙で消化しきれず残日数が積み上がっているケースが目立ちます。退職時にまとめて消化しようとすると、日数が大きく、調整の難易度も上がります。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">残日数が大きいほど早めの相談が効く</h3>
              <p className="text-sm text-slate-600">消化日数が多いと、退職日までに収まらないことがあります。退職を切り出す段階で残日数と消化計画を共有し、必要なら退職日自体を調整するのが現実的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">属人化の解消が消化の追い風になる</h3>
              <p className="text-sm text-slate-600">「あなたが抜けると回らない」状態だと、消化への抵抗が強くなりがちです。引き継ぎドキュメントを整え、属人化を解消しておくことが、結果的に有給消化をスムーズにします。引き止め交渉での揺らぎを防ぐ意味でも有効です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">次の入社日との重複に注意</h3>
              <p className="text-sm text-slate-600">有給消化中はまだ前職に在籍しています。次の会社の入社日と消化期間が重なると、二重就労や社会保険の切り替えで問題が生じ得ます。入社日は消化期間を踏まえて設定しましょう。年収条件の調整は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉テクニック</Link>も参考に。</p>
            </div>
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
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は一般的な制度の説明であり、個別の事案への助言ではありません。具体的なトラブルは、労働基準監督署・弁護士・社会保険労務士などの専門家にご相談ください。
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">退職スケジュールの相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            有給消化と入社日の調整に迷ったら、IT特化型エージェントに無料で相談できます。
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
              { name: "円満退職の交渉術", href: "/knowledge/smooth-resignation/" },
              { name: "退職後の手続き（健保・年金・失業給付）", href: "/knowledge/after-resignation-procedures/" },
              { name: "引き継ぎドキュメントの作り方", href: "/knowledge/handover/" },
              { name: "退職代行の選び方", href: "/knowledge/retirement-agency/" },
              { name: "退職の伝え方（切り出し方の例文集）", href: "/knowledge/resignation/" },
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
