import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "契約社員エンジニアと無期転換5年ルール｜『無期転換≠正社員』の注意点",
  description:
    "契約社員エンジニアの制度を正確に解説。通算5年超で使える無期転換ルール（5年ルール）の仕組みと、見落とされがちな『無期転換＝正社員ではない』という最重要ポイント、契約期間の上限まで厚労省ベースで整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：『無期転換』を正しく理解することが勝ち筋" },
  { id: "what", label: "契約社員とは（有期労働契約の基礎）" },
  { id: "rule5", label: "無期転換ルール（5年ルール）の正確な仕組み" },
  { id: "trap", label: "最重要：『無期転換＝正社員』ではない" },
  { id: "limit", label: "契約期間の上限（原則1回3年）" },
  { id: "merit", label: "契約社員のメリット・デメリット" },
  { id: "strategy", label: "正社員を目指すための現実的な戦略" },
  { id: "middle", label: "30代・40代が契約社員を選ぶときの視点" },
  { id: "faq", label: "よくある質問" },
];

const meritList = [
  "正社員と同じく労働者として社会保険・雇用保険・労災・有給の対象になる（業務委託と異なり保護がある）",
  "正社員より採用ハードルが下がる場合があり、ブランクや経験の浅さがあっても入り口になりやすい",
  "特定のプロジェクト・スキルを軸に専門性を活かして働ける",
  "実績を示せば正社員登用・無期転換という次のステップにつなげられる",
];

const demeritList = [
  "契約期間に定めがあり、更新されない（雇止め）リスクがある",
  "賞与・退職金・各種手当が正社員より少ない、または対象外のことがある",
  "無期転換しても待遇が据え置かれやすく、自動的に正社員待遇になるわけではない",
  "昇給・昇格の機会が正社員より限られる場合がある",
];

const ruleSteps = [
  { num: "1", title: "有期労働契約を結ぶ", desc: "期間の定めのある労働契約（契約社員）として就業を開始します。" },
  { num: "2", title: "契約更新で通算5年を超える", desc: "同一の使用者との間で有期労働契約が反復更新され、通算の契約期間が5年を超えると、無期転換の申込権が発生します。" },
  { num: "3", title: "労働者が無期転換を申し込む", desc: "申込権が発生した労働者が無期転換を申し込むと、使用者は断れません（申込時点の有期契約が満了する翌日から無期労働契約に転換）。" },
  { num: "4", title: "無期労働契約に転換", desc: "期間の定めのない労働契約になります。ただし、転換するのは『契約期間』であって、給与などの労働条件は原則として従前のまま据え置かれます。" },
];

const faqs = [
  {
    q: "無期転換ルール（5年ルール）とは何ですか？",
    a: "同一の使用者との間で有期労働契約が反復更新され、通算契約期間が5年を超えた場合、労働者の申込みにより、期間の定めのない労働契約（無期労働契約）に転換できる制度です（労働契約法に基づく。出典：厚生労働省）。申込みがあれば使用者は断れません。契約社員として働くエンジニアが安定を得る重要な仕組みですが、後述の通り『正社員になる』こととは異なります。",
  },
  {
    q: "無期転換すれば正社員になれるのですか？",
    a: "いいえ、ここが最も誤解されやすい点です。無期転換で変わるのは『期間の定めがなくなる』ことだけで、給与・賞与・退職金などの待遇は原則として有期時代のまま据え置かれるのが一般的です。多くの企業では『無期契約社員』という区分が用意され、正社員とは別の処遇のままになります。むしろ無期契約社員という安定区分ができたことで、企業側が正社員登用を進めにくくなる可能性もあります（出典：doda・各専門サイトの解説）。",
  },
  {
    q: "契約社員の契約期間に上限はありますか？",
    a: "有期労働契約の1回あたりの契約期間は、原則として上限3年です（高度な専門知識を持つ人や満60歳以上の人など、一定の場合は上限5年）。この期間内で更新を繰り返し、通算5年を超えると無期転換の申込権が発生します（出典：厚生労働省）。",
  },
  {
    q: "無期転換と正社員登用はどちらを狙うべきですか？",
    a: "安定（期間の定めの解消）だけが目的なら無期転換で足りますが、待遇の改善まで望むなら正社員登用を目指す必要があります。無期転換は『据え置きの安定』、正社員登用は『処遇を含めた正社員化』と整理できます。入社時から正社員登用の実績・条件を確認し、実績を示して登用を勝ち取る戦略が、待遇面では有利です。",
  },
  {
    q: "契約社員から転職して正社員になる方が早いですか？",
    a: "ケースによります。現職での正社員登用が見込みづらい、または無期転換しても待遇が変わらない場合は、エンジニアとしての実務経験を武器に正社員求人へ転職する方が、待遇改善の近道になることがあります。まず転職エージェントで正社員としての市場価値（提示年収レンジ）を把握し、現職に残る場合と比較して判断するのが現実的です。",
  },
  {
    q: "無期転換の申込権が発生しても申し込まないとどうなりますか？",
    a: "申込みは労働者の権利であり、行使しなければ有期契約のままです。申込権は発生した後も、有期契約が更新されるたびに行使でき、権利が消滅するわけではありません（雇止めの有効性など個別の論点は別途あります）。安定を望むなら、要件を満たした段階で申し込むのが基本です。具体的な権利関係は労働局・専門家にご確認ください。",
  },
  {
    q: "契約社員エンジニアは転職市場で不利ですか？",
    a: "雇用形態そのものより、実務経験・スキル・実績が評価されます。契約社員として積んだ開発経験は正社員転職でも実務経験としてカウントされるのが一般的です。職務経歴書で担当領域・技術・成果を具体的に示せば、雇用形態を理由に不利になることは限定的です。",
  },
];

export default function ContractEmployeePage() {
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
        title="契約社員エンジニアと無期転換5年ルール｜『無期転換≠正社員』の注意点"
        description="契約社員エンジニアの制度を正確に解説。無期転換ルール（5年ルール）の仕組みと、『無期転換＝正社員ではない』という最重要ポイント、契約期間の上限まで厚労省ベースで整理。"
        url="/employment/contract-employee/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド", href: "/employment/" },
          { name: "契約社員" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          契約社員エンジニアと無期転換5年ルール｜「無期転換≠正社員」の注意点
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 厚労省ベースで無期転換ルールを正確に解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          契約社員（有期労働契約）として働くエンジニアにとって、最大の関心事は「安定して働き続けられるか」「正社員になれるか」でしょう。その鍵となるのが<strong>無期転換ルール（通称・5年ルール）</strong>です。本記事では、このルールの正確な仕組みを厚生労働省の情報に基づいて解説し、そのうえで最も見落とされがちな<strong>「無期転換は正社員になることとは違う」</strong>という重要な事実を明確にします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省（労働契約法 無期転換ルール）",
            "doda・各専門サイトの無期転換に関する解説",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：無期転換は「期間の安定」、正社員化は「待遇の改善」</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              通算5年を超えた有期契約は、労働者の申込みで無期労働契約に転換できます。しかし<strong>無期転換で変わるのは「期間の定めがなくなる」ことだけ</strong>で、給与・賞与・退職金などの待遇は原則そのまま据え置かれます。「無期転換＝正社員」と誤解すると、待遇改善を期待して肩透かしを食らいます。安定だけなら無期転換、待遇改善まで望むなら正社員登用または転職を狙うのが正しい整理です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>通算5年超＋労働者の申込み＝無期転換（使用者は断れない／出典：厚労省）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>無期転換≠正社員。待遇は据え置きが一般的で、「無期契約社員」という別区分になることも。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>待遇改善を望むなら、正社員登用または正社員転職を別途狙う必要がある。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 契約社員とは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">契約社員とは（有期労働契約の基礎）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            契約社員は、<strong>期間の定めのある労働契約（有期労働契約）</strong>を結んで働く労働者です。正社員（無期労働契約）と同じく「労働者」であり、社会保険・雇用保険・労災・労働法の保護を受ける点は変わりません。違いは「契約に期間の定めがあるか」という一点です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            社会保険・税・労災といった制度面は正社員とほぼ同じで、業務委託（事業主扱い）とは性質が大きく異なります。4形態の横断比較は<Link href="/employment/" className="text-blue-600 hover:underline">エンジニアの雇用形態の違い</Link>で確認できます。
          </p>
        </section>

        {/* 5年ルール */}
        <section id="rule5" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">無期転換ルール（5年ルール）の正確な仕組み</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            無期転換ルールは労働契約法に基づく制度です。流れは次の4ステップで整理できます（出典：厚生労働省）。
          </p>
          <div className="space-y-4">
            {ruleSteps.map((s, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{s.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 「クーリング期間」（契約の空白期間が一定以上あると通算がリセットされる）など細かい要件があります。個別の判断は厚生労働省・労働局・専門家にご確認ください。
          </p>
        </section>

        {/* 最重要：無期転換≠正社員 */}
        <section id="trap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最重要：「無期転換＝正社員」ではない</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-5">
            <p className="text-amber-900 leading-relaxed text-sm">
              無期転換でも待遇が自動的に正社員並みになるわけではありません。<strong>転換されるのは「契約期間の定め」だけ</strong>で、給与・賞与・退職金・手当などの労働条件は、別段の定めがない限り従前のまま引き継がれるのが一般的です。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            多くの企業では、無期転換した人を「<strong>無期契約社員</strong>」という独自の区分で扱います。これは「期間の定めのない契約社員」という位置づけで、正社員とは別の処遇体系のままです。つまり「クビになりにくくはなったが、給与や役割は変わらない」という状態が生じ得ます。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            さらに注意すべきは、<strong>無期契約社員という安定区分ができることで、企業側が正社員への登用をむしろ進めにくくなる可能性がある</strong>という点です。「無期で雇用は安定したのだから、正社員にする必要性が薄れる」という力学が働き得ます（出典：doda・各専門サイトの解説）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-2">無期転換で得られるもの</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span>雇止めの不安からの解放（期間の定めがなくなる）</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>長期就業の見通しが立つ</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-2">無期転換では得られないもの</h3>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-red-500">×</span>給与・賞与・退職金などの待遇改善（原則据え置き）</li>
                <li className="flex gap-2"><span className="text-red-500">×</span>正社員区分・正社員としての処遇への自動移行</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 契約期間の上限 */}
        <section id="limit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">契約期間の上限（原則1回3年）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            有期労働契約の1回あたりの契約期間は、<strong>原則として上限3年</strong>です。ただし、高度な専門的知識等を有する人や満60歳以上の人など、一定の場合は上限が5年になります（出典：厚生労働省）。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            この期間内で更新を繰り返し、通算5年を超えた時点で無期転換の申込権が発生する、という関係です。「1回の契約期間の上限（原則3年）」と「無期転換に必要な通算期間（5年超）」は別の概念なので、混同しないよう注意しましょう。
          </p>
          <p className="text-slate-600 leading-relaxed">
            たとえば「1年契約を毎年更新」している場合、6回目の更新で通算が5年を超えるため、その契約期間中に無期転換の申込権が生じます。「3年契約を1回更新」した場合は、2回目の契約期間中（通算3年超〜6年）に5年を超える時点で申込権が発生します。契約の刻み方によって申込権が生まれるタイミングが変わるため、自分の契約がいつ5年を超えるのかを把握しておくことが大切です。
          </p>
        </section>

        {/* メリデメ */}
        <section id="merit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">契約社員のメリット・デメリット</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            契約社員は「正社員より不利」と一括りにされがちですが、業務委託（事業主扱い）と比べれば労働者としての保護があり、入り口としての利点もあります。両面を冷静に整理しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {meritList.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{m}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {demeritList.map((m, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">×</span>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            なお、同一企業内で正社員と契約社員の間に不合理な待遇差を設けることは、パートタイム・有期雇用労働法（同一労働同一賃金）により制限されています。職務内容・責任が同じなのに待遇に説明のつかない差がある場合は、会社に説明を求められる権利があります。気になる場合は労働局や専門家に相談すると、自分の状況を客観的に確認できます。
          </p>
        </section>

        {/* 戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員を目指すための現実的な戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            「安定」だけでなく「待遇改善」まで望むなら、無期転換を待つだけでは不十分です。次の3つの選択肢を比較して進めましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">① 現職での正社員登用を狙う</h3>
              <p className="text-sm text-slate-600 leading-relaxed">入社時・契約更新時に正社員登用制度の有無と実績、登用の条件（評価・試験・推薦など）を確認します。実績を数値で示し、登用を勝ち取る道です。ただし制度はあっても実績が少ない企業もあるため、実態の確認が重要です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">② 無期転換で安定を確保しつつ転職活動</h3>
              <p className="text-sm text-slate-600 leading-relaxed">無期転換で雇用の安定を得たうえで、より良い条件の正社員求人を探す方法です。安定を背景に焦らず活動できます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">③ 実務経験を武器に正社員へ転職</h3>
              <p className="text-sm text-slate-600 leading-relaxed">契約社員として積んだ開発経験は実務経験として評価されます。待遇改善が現職で見込めないなら、転職が最短ルートになることも。まずは転職エージェントで正社員としての市場価値を把握しましょう。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            正社員転職に向けた実績の言語化は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>、市場価値の確認は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>を参考にしてください。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が契約社員を選ぶときの視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：正社員化の出口を最初に確認する</h3>
              <p className="text-sm text-blue-700">30代で契約社員を選ぶなら、入社時点で正社員登用制度の有無と実績を確認しておくことが重要です。「制度はあるが登用実績はほぼない」というケースもあるため、口頭の説明だけでなく実績ベースで確認しましょう。30代はキャリアの方向が固まる時期で、ここで待遇の据え置きが長期化すると、生涯年収に与える影響が大きくなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：安定だけでなく待遇改善の道を残す</h3>
              <p className="text-sm text-blue-700">40代で無期転換を迎える場合、「雇用は安定したが待遇は据え置き」という状態に陥りやすい点に注意が必要です。40代の実務経験は転職市場で評価されるため、現職での正社員化が見込みづらいなら、経験を武器に正社員求人へ動く選択肢を早めに検討しておくと、後悔の少ない判断ができます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ライフイベントと社会的信用</h3>
              <p className="text-sm text-blue-700">契約社員は労働者として社会保険に加入できる一方、住宅ローンなどの審査では「期間の定めのある契約」が安定性の面で見られることがあります。無期転換すると期間の定めがなくなるため、この点では有利に働く場合があります。ライフイベントの予定と契約形態のタイミングを合わせて考えると安心です。</p>
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
          <h2 className="text-xl font-bold mb-3">待遇改善まで望むなら、市場価値の把握から</h2>
          <p className="text-blue-100 text-sm mb-4">
            無期転換は安定をもたらしますが、待遇は据え置かれがちです。正社員としての提示年収を知り、現職に残る場合と比較しましょう。
          </p>
          <Link href="/compare/agents/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            IT転職エージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エンジニアの雇用形態の違い", href: "/employment/" },
              { name: "業務委託エンジニアの実態", href: "/employment/contractor/" },
              { name: "派遣から正社員になる道", href: "/employment/dispatch/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
