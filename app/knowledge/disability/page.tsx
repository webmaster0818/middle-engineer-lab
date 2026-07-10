import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/disability/" },
  title: "障害のあるエンジニアの転職【一般雇用と障害者雇用】",
  description:
    "障害のあるエンジニアの転職を解説。一般雇用と障害者雇用の違い、合理的配慮の一般知識、障害を開示するタイミングの考え方を整理。制度詳細は専門機関への相談を案内します。",
};

const toc = [
  { id: "conclusion", label: "結論：制度より「自分に必要な配慮」から逆算する" },
  { id: "two-routes", label: "一般雇用と障害者雇用の違い（比較表）" },
  { id: "reasonable", label: "合理的配慮とは（一般的な知識）" },
  { id: "disclosure", label: "開示するか・するならいつか（タイミング）" },
  { id: "disclosure-example", label: "配慮の伝え方の例文" },
  { id: "checklist", label: "転職活動の進め方チェックリスト" },
  { id: "mid-career", label: "30代・40代の障害のあるエンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const routeCompare = [
  { item: "応募できる求人", general: "一般の求人すべて", disability: "障害者雇用枠の求人" },
  { item: "障害の開示", general: "任意（開示しない選択も可）", disability: "前提として開示する" },
  { item: "合理的配慮", general: "申し出により事業者が検討（法的義務の対象）", disability: "前提として配慮を織り込みやすい" },
  { item: "職務・キャリア", general: "他の社員と同じ前提が基本", disability: "求人により幅がある（要確認）" },
  { item: "向くケース", general: "配慮が限定的で、スキルで一般枠と競える", disability: "継続的・明確な配慮が必要" },
];

const reasonableExamples = [
  "在宅勤務・フルリモートの許可",
  "通院のための時間調整・フレックスの適用",
  "テキスト/チャット中心のコミュニケーション",
  "静かな作業環境、休憩の取り方の配慮",
  "支援機器・開発環境（スクリーンリーダー、モニター等）の整備",
];

const faqs = [
  { q: "一般雇用と障害者雇用、どちらで応募すべきですか？", a: "必要な配慮の「量と継続性」で考えるのが分かりやすいです。配慮が限定的でスキルで競えるなら一般雇用、継続的・明確な配慮が前提なら障害者雇用枠が候補になります。両方に応募して選択肢を広げる進め方も可能です。どちらが適切かは状況により異なるため、障害者就業・生活支援センターやハローワークの専門窓口など専門機関への相談をおすすめします。" },
  { q: "障害者手帳がないと障害者雇用枠には応募できませんか？", a: "障害者雇用枠は原則として手帳を前提とする運用が一般的ですが、要件は制度・自治体・企業によって異なります。最新の正確な要件は、ハローワークや障害者就業・生活支援センターなどの公式・専門機関でご確認ください。本記事は一般的な説明にとどめています。" },
  { q: "障害は開示すべきですか？", a: "合理的配慮が必要な場合は、必要な範囲で開示する方が入社後のミスマッチを防げます。一般雇用では開示は任意で、開示しない選択もできます。一方、配慮を受けたいのに開示しないと、配慮の前提が整わないことがあります。開示の範囲・タイミングは自分でコントロールできます。" },
  { q: "開示するタイミングはいつがよいですか？", a: "一般的には、選考が進み合理的配慮の具体的な相談が必要になる段階（最終面接前後や内定前後）で伝えるケースが多く見られます。早く伝えるほど配慮の調整がしやすい一方、伝える範囲は自分で選べます。正解は一つではないため、専門機関やエージェントに相談しながら決めるとよいでしょう。" },
  { q: "合理的配慮はどのように求めればよいですか？", a: "「何に困るか」ではなく「どうすれば働けるか」を具体的に伝えるのがコツです。例：『週1回の通院のため◯曜午後に2時間の休みが必要』『聴覚に配慮が必要なため、口頭よりチャットでの連絡を希望』。具体的なほど企業も対応を検討しやすくなります。なお合理的配慮の提供は事業者の法的義務に関わる事項であり、詳細は公式情報をご確認ください。" },
  { q: "IT・エンジニア職は障害のある人に向いていますか？", a: "リモートワーク、フレックス、成果ベースの評価、テキスト中心のコミュニケーションといったIT職の特性は、配慮を受けながら働く土台として機能しやすい面があります。ただし企業や職場によって運用は大きく異なるため、個別に確認が必要です。" },
  { q: "障害者雇用だと年収やキャリアの幅は狭くなりますか？", a: "求人によって幅があります。エンジニア職では一般枠と同等の条件で採用されるケースもあれば、職務が限定される求人もあります。求人ごとに職務内容・評価・昇給の扱いを確認することが重要です。市場価値の考え方は関連記事も参考にしてください。" },
  { q: "どこに相談すればよいですか？", a: "ハローワークの専門援助部門、障害者就業・生活支援センター、地域障害者職業センター、就労移行支援事業所などが公的な相談先です。転職では、障害者雇用に対応したエージェントとIT特化型エージェントの併用も選択肢になります。制度の詳細・最新情報は必ず公式・専門機関でご確認ください。" },
];

export default function DisabilityPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="障害のあるエンジニアの転職【一般雇用と障害者雇用】" description="障害のあるエンジニアの転職を解説。一般雇用と障害者雇用の違い、合理的配慮の一般知識、障害を開示するタイミングの考え方を整理。制度詳細は専門機関への相談を案内します。" url="/knowledge/disability/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "障害のあるエンジニアの転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">障害のあるエンジニアの転職【一般雇用と障害者雇用・合理的配慮・開示のタイミング】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 雇用区分・配慮・開示の一般知識</p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】一般雇用と障害者雇用、どちらで転職を進めるべき？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 制度名から選ぶのではなく、自分に必要な配慮の量と継続性から逆算して選ぶと判断しやすくなります。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・配慮が限定的でスキルで競えるなら一般雇用、継続的・明確な配慮が前提なら障害者雇用枠が候補</li><li>・障害の開示は範囲もタイミングも自分でコントロールできる</li><li>・制度の要件・最新情報はハローワークや支援センターなど専門機関に確認するのが前提</li></ul>
          </div>
        </section>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">障害のあるエンジニアの転職では、「一般雇用と障害者雇用のどちらで進めるか」「合理的配慮をどう求めるか」「障害をいつ開示するか」が大きな論点になります。本記事はこれらを一般的な知識として整理するものです。具体的な制度の要件や個別の判断は、状況によって異なります。</p>
        </section>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-5 mb-6 text-sm text-amber-900 leading-relaxed">
          <p className="font-bold mb-1">本記事の位置づけ（必ずお読みください）</p>
          <p>本記事は障害者雇用・支援制度の<strong>一般的な説明</strong>にとどめています。制度の要件・対象範囲・最新情報は変わることがあります。ハローワークの専門援助部門、障害者就業・生活支援センター、地域障害者職業センターなどの<strong>公式情報・専門機関に必ずご確認ください</strong>。法的な扱いについても公的機関の最新情報を優先してください。</p>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["厚生労働省 job tag", "経済産業省「IT人材需給に関する調査」（2019年公表）"]} />

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：制度より「自分に必要な配慮」から逆算する</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">どの雇用区分を選ぶかは、制度の名前から入るのではなく、<strong>自分が働き続けるために何の配慮が・どの程度・継続的に必要か</strong>から逆算すると判断しやすくなります。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. 必要な配慮が限定的でスキルで競えるなら一般雇用も有力</li>
              <li>2. 継続的・明確な配慮が前提なら障害者雇用枠が候補</li>
              <li>3. 開示の範囲とタイミングは自分でコントロールできる</li>
              <li>4. 制度の要件・最新情報は専門機関に確認するのが前提</li>
            </ul>
          </div>
        </section>

        <section id="two-routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">一般雇用と障害者雇用の違い（比較表）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">両者は対立する選択肢というより、状況に応じて使い分け・併用できるものです。下表は一般的な傾向の整理であり、実際の運用は求人・企業によって異なります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">項目</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">一般雇用</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">障害者雇用</th></tr></thead>
              <tbody>
                {routeCompare.map((r, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{r.item}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.general}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.disability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">なお「どちらが有利・不利」と一律には言えません。自分の配慮ニーズとキャリア希望の両面で、求人ごとに見極めることが重要です。</p>
        </section>

        <section id="reasonable" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">合理的配慮とは（一般的な知識）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">合理的配慮とは、障害のある人が他の人と同じように働けるよう、過重な負担にならない範囲で事業者が行う調整・配慮を指す一般的な考え方です。事業者には合理的配慮の提供に関する法的な義務が定められていますが、具体的な範囲や「過重な負担」の判断は個別の事情によります。詳細・最新の法的扱いは公式情報をご確認ください。</p>
          <p className="text-slate-600 leading-relaxed mb-3">IT・エンジニア職で想定される配慮の例（一般論）：</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-700">{reasonableExamples.map((e, i) => (<li key={i}>・{e}</li>))}</ul>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">リモートワークやテキスト中心の働き方が浸透しているIT職は、こうした配慮を組み込みやすい土台がある領域といえます。ただし運用は企業ごとに大きく異なるため、個別に確認してください。働き方の選択肢は<Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワーク転職ガイド</Link>も参考になります。</p>
        </section>

        <section id="disclosure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開示するか・するならいつか（タイミング）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">障害を開示するかどうか、どの範囲で・いつ伝えるかは、本人が選べる事項です。一般的な考え方を整理します。</p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">開示のメリット</h3>
              <p className="text-sm text-slate-600 leading-relaxed">必要な配慮を前提に選考・受け入れ準備を進めてもらえる。入社後のミスマッチや「言い出せないストレス」を避けられる。配慮を織り込んだ働き方を最初から設計できる。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">非開示（一般雇用）の選択</h3>
              <p className="text-sm text-slate-600 leading-relaxed">配慮の必要が限定的なら、開示せず一般の候補者として選考を受けることもできます。ただし配慮を受けたいのに開示しないと、その前提が整わない点に注意が必要です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">タイミングの一般的な目安</h3>
              <p className="text-sm text-slate-600 leading-relaxed">合理的配慮の具体的な相談が必要になる段階（選考後半〜内定前後）で伝えるケースが多く見られます。早いほど調整余地が大きい一方、伝える相手・範囲は自分で選べます。一律の正解はないため、専門機関やエージェントに相談しながら方針を決めるのが安全です。</p>
            </div>
          </div>
        </section>

        <section id="disclosure-example" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">配慮の伝え方の例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「困りごと」ではなく「こうすれば力を発揮できる」という形で、具体的に伝えるのがポイントです。下記は一般的な言い回しの例です（内容はご自身の状況に合わせて調整してください）。</p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-red-500 mb-1">✕ 伝わりにくい例</p>
              <p className="text-sm text-slate-600 mb-3">「体調に波があるので、いろいろ配慮してほしいです。」</p>
              <p className="text-xs font-bold text-green-600 mb-1">✓ 伝わりやすい例</p>
              <p className="text-sm text-slate-700">「定期通院のため月◯回、◯曜午後に2時間ほど時間をいただけると安定して勤務できます。フレックスまたは中抜けが可能であれば、業務に支障なく働けます。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-green-600 mb-1">✓ コミュニケーション面の配慮を伝える例</p>
              <p className="text-sm text-slate-700">「聴覚に配慮が必要なため、口頭中心の会議よりチャットやドキュメントでの連携が得意です。設計・実装の議論はテキストで残していただけると、より正確に貢献できます。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-green-600 mb-1">✓ 内定前後で書面確認を依頼する例</p>
              <p className="text-sm text-slate-700">「ご相談した配慮内容（在宅勤務中心・通院日の時間調整）について、入社後の認識を合わせたいので、可能であれば条件として書面に記載いただけますでしょうか。」</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方チェックリスト</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>☑ 自分に必要な配慮を「具体的な行動レベル」で書き出した（頻度・時間・方法）</li>
              <li>☑ 一般雇用／障害者雇用のどちらで進めるか、配慮ニーズから検討した</li>
              <li>☑ 開示の範囲とタイミングの方針を決めた（専門機関にも相談した）</li>
              <li>☑ ハローワーク専門窓口・支援センター等、公的な相談先を把握した</li>
              <li>☑ 障害者雇用に対応したエージェントとIT特化型エージェントの併用を検討した</li>
              <li>☑ ポートフォリオ・GitHub等でスキルを客観的に示せる状態にした</li>
              <li>☑ 内定前に配慮内容を書面で確認する段取りを決めた</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">スキルの可視化は、雇用区分にかかわらず評価の土台になります。<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>や<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>も役立ちます。</p>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の障害のあるエンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">30代・40代のミドルエンジニアは、これまでの実務経験そのものが強い武器になります。市況としても経験者の需要は高く、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が示されています。職種の参考値として、厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）とされています。</p>
          <p className="text-slate-600 leading-relaxed">配慮を必要とすることと、市場価値が高いことは両立します。スキルで評価される土台を整えつつ、必要な配慮を具体的に伝えることが、長く働ける職場選びの近道です。年齢の論点は<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">年齢と転職</Link>、市場価値の把握は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたに合った転職サポートを探す</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントでスキルに合う求人を探しつつ、制度の詳細は専門機関に確認するのが安心です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
