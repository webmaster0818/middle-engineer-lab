import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "退職後の手続き【健康保険・年金・失業給付の期限と進め方】",
  description:
    "エンジニアの退職後に必要な手続きを期限つきで整理。健康保険3択（任意継続・国保・扶養）の比較、年金切り替え、雇用保険（失業給付）の流れと2025年4月の給付制限変更まで30代・40代向けに解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：退職後3手続きは期限が短い。先に動く" },
  { id: "overview", label: "退職後にやる3つの手続き（期限つき一覧）" },
  { id: "pattern", label: "あなたのケースで何が必要か（パターン別）" },
  { id: "health", label: "健康保険の3択を比較（任意継続・国保・扶養）" },
  { id: "pension", label: "年金の切り替え" },
  { id: "unemployment", label: "雇用保険（失業給付）の流れ" },
  { id: "checklist", label: "持ち物・受け取り書類チェックリスト" },
  { id: "middle", label: "30代・40代視点：扶養家族と空白期間" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const overview = [
  { name: "健康保険", deadline: "任意継続は退職翌日から20日以内 ／ 国保は14日以内", where: "協会けんぽ等・市区町村", note: "任意継続・国保・家族の扶養の3択。期限が最も短いので最優先で決めます。" },
  { name: "年金", deadline: "退職日の翌日から14日以内", where: "市区町村", note: "厚生年金から国民年金（第1号）への切り替え。配偶者の扶養に入る場合は別手続き。" },
  { name: "雇用保険（失業給付）", deadline: "離職票が届き次第すみやかに", where: "ハローワーク", note: "求職申込→7日間の待期→（自己都合は）給付制限を経て受給。受給には求職活動が前提。" },
];

const faqs = [
  {
    q: "健康保険は任意継続と国保のどちらが得ですか？",
    a: "一概には言えず、保険料と扶養家族の有無で変わります。任意継続は、退職前に加入していた健康保険を退職後も続ける制度で、協会けんぽの場合は退職翌日から20日以内の申請が必要・最長2年間加入でき、保険料は原則として全額自己負担になります（在職中は会社と折半だったため負担感が増えます）。国民健康保険（国保）は市区町村が運営し、退職日の翌日から14日以内の届出が原則で、保険料は前年所得をベースに計算されます。会社都合や特定理由など非自発的な失業の場合、国保には保険料の軽減措置が設けられていることがあります。扶養家族が多い場合は、人数で保険料が変わらない任意継続が有利になりやすい一方、前年所得が低い場合は国保が安くなることもあります。どちらが得かは市区町村の窓口や加入していた健康保険の窓口で試算してから決めてください。具体的な金額や個別事情の判断は専門家にご相談ください。",
  },
  {
    q: "任意継続はいつまでに申請すればいいですか？",
    a: "協会けんぽの場合、任意継続の申請期限は退職日の翌日から20日以内です。この期限を過ぎると原則として任意継続を選べなくなるため、退職前から検討しておくことをおすすめします。加入できる期間は最長2年間で、保険料は原則として全額自己負担です。なお、加入していた健康保険組合によって細部の取り扱いが異なる場合があるため、自分の保険者の窓口で必ず確認してください。",
  },
  {
    q: "自己都合で辞めると失業給付はいつからもらえますか？",
    a: "雇用保険の基本手当（いわゆる失業給付）は、ハローワークで求職の申込みをした後、7日間の待期期間があります。自己都合退職の場合は、待期に加えて『給付制限期間』が設けられています。2025年4月以降に離職した場合、自己都合退職の給付制限は原則2ヶ月から1ヶ月に短縮されました（厚生労働省 令和6年雇用保険法改正・令和7年4月施行）。ただし、5年間のうちに3回以上自己都合で離職した場合などは3ヶ月となるケースがあります。また、離職期間中に一定の教育訓練を受けた場合に給付制限が解除される取り扱いもあります。受給には求職活動を行うことが前提です。自分が対象になる期間や条件は、必ずハローワークで確認してください。",
  },
  {
    q: "失業給付を受けながら転職活動はできますか？",
    a: "失業給付（基本手当）は、働く意思と能力があり、求職活動をしているのに就職できない状態の人に支給されるものです。したがって転職活動と両立すること自体が前提です。受給期間中は、決められた認定日にハローワークへ行き、求職活動の実績を報告する必要があります。なお、すでに次の転職先が決まっている場合や、開業準備に専念する場合などは受給できないことがあります。詳しい受給要件や手続きはハローワークで確認してください。ハローワークの使い方や職業訓練については、関連記事も参考にしてください。",
  },
  {
    q: "退職後に空白期間ができると不利になりますか？",
    a: "短期間の空白そのものが直ちに評価を下げるわけではありません。多くの場合、面接では空白期間に何をしていたか（学習・資格取得・家庭の事情の整理など）を前向きに説明できるかが見られます。一方で、健康保険・年金・雇用保険の手続きは空白期間中こそ漏れやすいため、期限を守って確実に進めることが大切です。手続きを放置すると保険料の未納や受給の遅れにつながることがあります。",
  },
  {
    q: "離職票が届かないと失業給付の手続きはできませんか？",
    a: "失業給付の手続きには、原則として会社から交付される離職票が必要です。離職票は退職後、会社がハローワークに手続きをしたうえで本人に郵送されるのが一般的で、退職直後すぐには届かないことがあります。一定期間を過ぎても届かない場合は、まず会社に発行状況を確認し、それでも進まない場合はハローワークに相談してください。離職票が届くまでの間に、健康保険・年金の切り替えなど期限の短い手続きを先に済ませておくと安心です。",
  },
];

export default function AfterResignationProceduresPage() {
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
        title="退職後の手続き【健康保険・年金・失業給付の期限と進め方】"
        description="エンジニアの退職後に必要な手続きを期限つきで整理。健康保険3択（任意継続・国保・扶養）の比較、年金切り替え、雇用保険（失業給付）の流れと2025年4月の給付制限変更まで30代・40代向けに解説します。"
        url="/knowledge/after-resignation-procedures/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職後の手続き" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          退職後の手続き【健康保険・年金・失業給付の期限と進め方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 健康保険3択・年金切り替え・失業給付の流れ
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            退職が決まったら、次に待っているのが社会保険まわりの手続きです。エンジニアの場合、転職先への入社まで空白期間が空くこともあり、その間の健康保険・年金・雇用保険（失業給付）を自分で手続きする必要があります。これらは<strong>期限が短いものが多く、放置すると保険料の未納や受給の遅れにつながります</strong>。本記事では、退職後にやるべき3つの手続きを期限つきで整理します。退職を切り出す前段階は
            <Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>
            、有給の扱いは
            <Link href="/knowledge/paid-leave/" className="text-petrol hover:underline">有給消化の法律論</Link>
            を参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>本記事は一般的な制度の解説であり、法的・税務的な助言ではありません。</strong>制度の数値や期限は改正される場合があります。個別の事情やご自身が対象になるかの判断は、市区町村・ハローワーク・年金事務所・社会保険労務士などの専門窓口に必ずご確認ください。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["協会けんぽ（任意継続）", "ハローワーク 雇用保険", "厚生労働省 令和6年雇用保険法改正（令和7年4月施行）"]}
        />

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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：退職後3手続きは期限が短い。先に動く</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>健康保険</strong>：任意継続は退職翌日から<strong>20日以内</strong>、国保は<strong>14日以内</strong>。最優先で決める。</li>
              <li>・<strong>年金</strong>：厚生年金→国民年金の切り替えは原則<strong>14日以内</strong>。</li>
              <li>・<strong>失業給付</strong>：離職票が届き次第ハローワークへ。自己都合の給付制限は<strong>2025年4月以降の離職で原則1ヶ月</strong>に短縮。</li>
              <li>・転職先に間を空けず入社する場合は、新しい会社で社会保険に加入するため一部手続きは不要。</li>
            </ul>
          </div>
        </section>

        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職後にやる3つの手続き（期限つき一覧）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="text-left px-4 py-3 border-b border-slate-200">手続き</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">期限</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">窓口</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {overview.map((o, i) => (
                  <tr key={i} className="align-top">
                    <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">{o.name}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{o.deadline}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{o.where}</td>
                    <td className="px-4 py-3 border-b border-slate-100 text-slate-600">{o.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 期限・取り扱いは制度改正や保険者によって異なる場合があります。最新情報は各窓口で確認してください。</p>
        </section>

        <section id="pattern" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">あなたのケースで何が必要か（パターン別）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            必要な手続きは「次の会社まで間が空くかどうか」で大きく変わります。自分がどのパターンに当てはまるか、先に確認しておくと無駄な手続きを避けられます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">A：退職日の翌日に次の会社へ入社（ブランクなし）</h3>
              <p className="text-sm text-slate-600">健康保険・厚生年金は新しい会社で加入手続きが行われるため、自分での健保・年金の切り替えは基本的に不要です。失業給付も受給できません。退職前の会社から受け取る源泉徴収票・年金関係の書類を、新しい会社に提出する準備だけしておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">B：数日〜1ヶ月程度の短い空白がある</h3>
              <p className="text-sm text-slate-600">空白期間中の健康保険（任意継続・国保・扶養のいずれか）と、必要に応じて国民年金の切り替えが発生します。期間が短くても無保険期間を作らないことが大切です。失業給付は、短期間ですぐ就職する場合は対象外になることが多いため、ハローワークで確認してください。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">C：次が未定で、しばらく転職活動をする</h3>
              <p className="text-sm text-slate-600">健康保険・国民年金の切り替えに加え、雇用保険の失業給付の手続きが選択肢になります。期限の短い健保（任意継続20日以内／国保14日以内）・年金（14日以内）を先に済ませ、離職票が届いたらハローワークへ。3つの手続きすべてが関わるパターンです。</p>
            </div>
          </div>
        </section>

        <section id="health" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">健康保険の3択を比較（任意継続・国保・扶養）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職後の健康保険は、大きく3つの選択肢があります。どれが有利かは保険料と扶養家族の有無で変わるため、退職前から比較しておくと安心です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="text-left px-4 py-3 border-b border-slate-200">選択肢</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">期限・期間</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">保険料の考え方</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">任意継続</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">退職翌日から20日以内に申請／最長2年間（協会けんぽの場合）</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">原則として全額自己負担（在職中は会社と折半）。扶養家族が増えても保険料は変わらない傾向。</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">扶養家族が多い人、前年所得が比較的高い人。</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">国民健康保険</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">退職日の翌日から14日以内に届出（市区町村）</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">前年所得をベースに計算。非自発的失業の場合、軽減措置が設けられていることがある。</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">前年所得が低い人、会社都合等で軽減対象になる人。</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-800">家族の扶養に入る</td>
                  <td className="px-4 py-3 text-slate-600">扶養に入る側の保険者の手続きによる</td>
                  <td className="px-4 py-3 text-slate-600">本人の保険料負担は原則なし。ただし収入要件などの条件あり。</td>
                  <td className="px-4 py-3 text-slate-600">配偶者等が健康保険に加入していて、収入要件を満たす人。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 任意継続の細部（期限・保険料）は加入していた健康保険組合によって異なる場合があります。国保の軽減や扶養の収入要件は自治体・保険者で確認してください。どれが得かは必ず窓口で試算を。
          </p>
        </section>

        <section id="pension" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年金の切り替え</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            会社員のときは厚生年金に加入していますが、退職して間が空く場合は、国民年金（第1号被保険者）への切り替え手続きが必要です。手続きは原則として退職日の翌日から14日以内に、住んでいる市区町村で行います。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>転職先にすぐ入社する場合は、新しい会社で厚生年金に加入するため、自分での切り替えは不要なことが多い。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>配偶者の扶養（第3号被保険者）に入る場合は、配偶者の勤務先を通じた別の手続きになる。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>保険料の納付が難しい場合、免除・納付猶予の制度がある。該当しそうな場合は窓口で相談を。</span></li>
          </ul>
        </section>

        <section id="unemployment" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">雇用保険（失業給付）の流れ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            次の転職先が決まっていない場合は、雇用保険の基本手当（失業給付）の対象になることがあります。受給には「働く意思と能力があり、求職活動をしている」ことが前提です。大まかな流れは次のとおりです。
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">1</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">離職票を受け取る</h3>
                <p className="text-sm text-slate-600">退職後、会社の手続きを経て離職票が郵送されます。届くまで時間がかかることがあるため、健康保険・年金の手続きを先に進めておきます。</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">2</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">ハローワークで求職申込み</h3>
                <p className="text-sm text-slate-600">離職票・本人確認書類などを持参して求職の申込みを行い、受給資格の確認を受けます。</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">3</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">7日間の待期</h3>
                <p className="text-sm text-slate-600">求職申込み後、7日間の待期期間があります。この期間は誰でも共通で、給付は発生しません。</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">4</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">給付制限（自己都合の場合）</h3>
                <p className="text-sm text-slate-600">自己都合退職では、待期の後に給付制限期間があります。<strong>2025年4月以降の離職では原則2ヶ月から1ヶ月に短縮</strong>されました。ただし5年間に3回以上自己都合で離職した場合などは3ヶ月になることがあります。会社都合等の場合は給付制限がないのが原則です。</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">5</span>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">認定日ごとに受給</h3>
                <p className="text-sm text-slate-600">決められた認定日にハローワークへ行き、求職活動の実績を報告すると、基本手当が支給されます。一定の教育訓練を受けた場合に給付制限が解除される取り扱いもあります。</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 受給日数・金額・条件は離職理由や被保険者期間によって異なります。自分が対象になる内容は必ずハローワークで確認してください。職業訓練との併用などは、ハローワークの活用に関する記事や窓口の案内も参考に。
          </p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">持ち物・受け取り書類チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">退職時に会社から受け取るもの</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "離職票（失業給付の手続きに必要）",
                  "雇用保険被保険者証",
                  "源泉徴収票（年末調整・確定申告に必要）",
                  "年金手帳または基礎年金番号がわかるもの",
                  "退職証明書（必要に応じて）",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">手続き窓口へ持参するもの（例）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "本人確認書類（マイナンバーカード・運転免許証など）",
                  "退職日のわかる書類（離職票・退職証明書など）",
                  "印鑑（窓口により必要な場合）",
                  "保険料の口座振替に使う通帳・キャッシュカード",
                  "扶養に入る場合は収入を証明する書類",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 必要書類は窓口・自治体・保険者によって異なります。事前に各窓口で確認してください。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：扶養家族と空白期間</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代の退職後手続きは、独身時代より複雑になりがちです。配偶者や子どもの扶養、住宅ローン、前年所得の高さなどが、健康保険の選択や保険料に直結するためです。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">扶養家族がいると任意継続が有利になりやすい</h3>
              <p className="text-sm text-slate-600">任意継続は扶養家族が増えても保険料が変わらない傾向があるため、家族を扶養している場合は国保より有利になりやすいです。ただし前年所得が低ければ国保が安いこともあり、必ず両方を試算しましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">前年所得が高いと国保が割高になりやすい</h3>
              <p className="text-sm text-slate-600">ミドル層は前年の年収が高いことが多く、前年所得ベースの国保が割高になるケースがあります。この場合、保険料が前年所得に直結しない任意継続のほうが負担を抑えられることがあります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">空白期間は手続き漏れに注意</h3>
              <p className="text-sm text-slate-600">じっくり転職活動をする場合、空白期間中こそ保険・年金の手続きが漏れがちです。期限の短い健康保険・年金を先に確実に処理し、失業給付は離職票到着後に進めるのが安全です。転職活動全体の段取りは<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>も参考に。</p>
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
            ※ 上記は一般的な制度の説明であり、個別の事案への助言ではありません。ご自身が対象になる条件や金額は、市区町村・ハローワーク・年金事務所・社会保険労務士などの専門窓口でご確認ください。
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">次の転職先選びはお早めに</h2>
          <p className="text-blue-100 text-sm mb-4">
            空白期間を短くしたいなら、退職前からIT特化型エージェントに相談しておくのが安全です。
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
              { name: "退職の伝え方（切り出し方の例文集）", href: "/knowledge/resignation/" },
              { name: "有給消化の法律論", href: "/knowledge/paid-leave/" },
              { name: "引き継ぎドキュメントの作り方", href: "/knowledge/handover/" },
              { name: "退職代行の選び方", href: "/knowledge/retirement-agency/" },
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
