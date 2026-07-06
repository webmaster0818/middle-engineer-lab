import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "プロジェクトマネージャ試験(IPA)は転職に効くか｜PM経験の証明と年収【2026年】";
const PAGE_DESC =
  "IPAの高度試験・プロジェクトマネージャ試験（PM）を、PM経験者の上流マネジメント証明という観点から30代・40代向けに解説。合格率、午前Ⅰ免除、論述試験、PMP との違い、年収の考え方まで限界も含めて整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/project-manager/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：PM試験は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度のメリット" },
  { id: "pmp", label: "PMP との違い・使い分け" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "middle", label: "30代・40代の価値＝マネジメント経験の証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "プロジェクトマネージャ試験は40代の転職で意味がありますか？",
    a: "プロジェクト管理・推進の実務がある経験者には意味があります。IPAのプロジェクトマネージャ試験は高度試験で、計画立案・進捗/品質/コスト管理・ステークホルダ調整といった上流マネジメントの素養を国家資格として客観的に示せます。実際、令和7年度秋期の合格者平均年齢は38.1歳とIPAが公表しており、実務経験を持つミドルが中心の試験です。ただし資格単体で年収が跳ねるわけではなく、PM実務との掛け算が前提です。",
  },
  {
    q: "PM試験の合格率はどのくらいですか？",
    a: "IPA公表（令和7年度秋期）では、受験者8,511人・合格者1,219人で合格率14.3%でした。高度試験の中でも合格率が低めの難関区分です。午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述に加え、午後Ⅱは『論述（小論文）』で、自身のプロジェクト管理経験を論じる形式が合否を分けます（IPA、2026年6月時点）。",
  },
  {
    q: "PM試験に合格すると何か免除がありますか？",
    a: "高度試験の合格者は、その後2年間、ほかの高度試験および情報処理安全確保支援士試験の『午前Ⅰ』が免除されます。応用情報技術者の合格でも同様に午前Ⅰが2年間免除されます。複数の高度資格を狙う場合、この免除は学習・受験の負担を大きく減らすメリットになります（IPA、2026年6月時点）。",
  },
  {
    q: "PMPとIPAのプロジェクトマネージャ試験はどちらが良いですか？",
    a: "目的が異なるため一概には比べられません。IPAのPM試験は国家資格で受験料7,500円・有効期限なし、午後Ⅱの論述で日本のプロジェクト管理の素養を示せます。一方PMP（PMI）はグローバル標準の認定で受験資格にPM実務時間が求められ、3年ごとの更新（PDU取得）が必要です。国内・公共系ではIPAのPM試験、外資・グローバル案件ではPMPが評価されやすい傾向です。",
  },
  {
    q: "PM試験を取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。IPA高度試験の保有者に限定した公的な年収統計は乏しく、当サイトでは具体的な平均額を断定しません。年収は実務経験・役割・案件規模で決まり、PM試験はそれを補強する位置づけと捉えるのが現実的です。参考として、給与所得者全体の平均は国税庁『民間給与実態統計調査』で461万円（令和6年分）です。",
  },
  {
    q: "受験料はいくらですか？CBTになりますか？",
    a: "受験料は7,500円（税込）です。プロジェクトマネージャ試験は秋期（10月）に実施されてきましたが、令和8年度（2026年度）からCBT方式への移行が予定されています。出題範囲や問う知識・技能に大きな変更はない見込みですが、最新の実施方式は受験前にIPA公式でご確認ください（IPA、2026年6月時点）。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分", "高度試験（プロジェクトマネジメント領域の最上位区分）"],
  ["受験料", "7,500円（税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ（記述）＋午後Ⅱ（論述）"],
  ["合格基準", "各区分で60点以上（午後Ⅱは論述評価）"],
  ["合格率", "令和7年度秋期 14.3%（受験8,511人・合格1,219人／IPA）"],
  ["合格者平均年齢", "38.1歳（令和7年度秋期／IPA）"],
  ["実施時期", "秋期（10月）。令和8年度よりCBT移行予定"],
  ["免除特典", "合格後、他の高度試験・支援士の午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function ProjectManagerCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/project-manager/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "プロジェクトマネージャ試験(IPA)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プロジェクトマネージャ試験(IPA)は転職に効くか｜PM経験の証明と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度試験・プロジェクトマネージャ試験の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          プロジェクトマネージャ試験（PM）は、IPAが主催する高度試験のうちプロジェクトマネジメント領域の最上位に位置づけられる国家資格です。本記事は「PM試験を取れば転職で有利になるか」という疑問に対し、<strong>PM経験者が上流マネジメントの素養を客観的に証明する『経験者の加点資格』</strong>という性格を軸に、論述試験の特徴やPMPとの使い分け、午前Ⅰ免除のメリットを含め、IPA公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp）令和7年度実施結果",
            "国税庁 民間給与実態統計調査（令和6年分）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
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
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PM試験は誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              プロジェクトマネージャ試験は<strong>「PM経験者の上流マネジメントを証明する加点資格」</strong>です。午後Ⅱの論述で自身のプロジェクト管理経験を論じる必要があるため、<strong>そもそも実務経験のあるミドルを想定した構造</strong>になっています（合格者平均年齢38.1歳）。すでにリーダー・PMを経験した30〜40代に最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>PM・リーダー経験のある30〜40代</strong>：マネジメント素養の客観証明として加点される</li>
              <li>② <strong>未経験のミドル</strong>：論述で実体験が問われ、入口には不向き。まず応用情報や実務経験を積むべき</li>
              <li>③ <strong>PMP併取得・上流志向</strong>：国内・公共系はPM試験、グローバルはPMPと使い分けられる</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格率）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 公式（ipa.go.jp、令和7年度秋期実施結果、2026年6月時点）。合格率14.3%は受験者8,511人・合格者1,219人に基づく公表値。午後Ⅱの論述（小論文）が最大の関門で、自身のプロジェクト管理経験を題意に沿って論じる必要があります。令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 午前I免除 */}
        <section id="menjo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">午前Ⅰ免除制度のメリット</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            高度試験には共通の「午前Ⅰ免除制度」があり、これを理解すると学習計画が立てやすくなります。次のいずれかを満たすと、その後<strong>2年間、高度試験・情報処理安全確保支援士試験の午前Ⅰが免除</strong>されます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>応用情報技術者試験</strong>に合格する</li>
              <li>・いずれかの<strong>高度試験または支援士試験に合格</strong>する</li>
              <li>・高度試験・支援士試験の<strong>午前Ⅰで基準点以上</strong>を取る</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA「午前Ⅰ試験免除」（ipa.go.jp、2026年6月時点）。免除期間は合格・基準点取得から2年間です。PM試験は午後Ⅱの論述対策に時間がかかるため、午前Ⅰ免除で午前の負担を減らせる意義は大きいといえます。
          </p>
        </section>

        {/* PMP比較 */}
        <section id="pmp" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMP との違い・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PMを目指す人が必ず比較するのがPMP（PMI）です。どちらが上ということではなく、<strong>狙う領域で使い分ける</strong>のが正解です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto mb-3">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">PM試験（IPA・国家資格）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">PMP（PMI・ベンダー認定）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["性質", "国家資格", "国際的なベンダー認定"],
                  ["受験料", "7,500円", "PMI会員/非会員で異なる（高め）"],
                  ["有効期限", "なし", "3年ごとの更新（PDU取得が必要）"],
                  ["特徴", "午後Ⅱの論述で実体験を論じる", "受験資格にPM実務時間が必要"],
                  ["評価されやすい場", "国内・公共系・SIer", "外資・グローバル案件"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            両方の比較や受験資格の詳細は<Link href="/cert/pmp/" className="text-petrol hover:underline">PMP資格と転職</Link>のページも参考にしてください。国内SIerや公共系のPM職を狙うならIPAのPM試験、外資・グローバル案件を視野に入れるならPMPが効きやすい傾向です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            IPAのプロジェクトマネージャ試験合格者に限定した公的な年収統計は乏しく、当サイトでは<strong>具体的な平均額を断定しません</strong>。民間メディアには年収目安を示すものもありますが、母集団や因果が明示されない参考値であり、資格が年収を押し上げたとは断定できません。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・IPA高度試験の保有者別年収：<strong>公的統計が乏しく公表値は限定的</strong></li>
              <li>・実態：<strong>年収はPM実務経験・案件規模・役割で決まり、資格は補強材</strong></li>
              <li>・参考：給与所得者全体の平均は<strong>461万円</strong>（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分・給与所得者平均461万円）。PM試験単独の年収は信頼できる公的データが乏しいため、当サイトでは断定を避け、PM実務経験との掛け算で評価する立場を取ります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "PM・PMO職への応募", d: "計画立案・進捗/品質/コスト管理・リスク管理の素養を国家資格で裏づけ、PM求人で加点される。" },
              { t: "マネジメント経験の客観証明", d: "論述で問われる試験性質上、実体験の裏づけがある証明となり、属人的なPM経験を伝わる形にできる。" },
              { t: "資格手当・評価制度の対象", d: "高度試験を資格手当・報奨金や昇進要件に設定する企業があり、社内評価の根拠になりやすい。" },
              { t: "上流コンサル・公共系案件への布石", d: "国内SIerや公共系の上流案件で、国家資格としての信頼性が評価される場面がある。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PM試験がマネジメント素養の証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "プロジェクトマネージャ（PM）", d: "計画から完了までを統括する役割。論述で問われた管理素養がそのまま実務に直結する。" },
              { t: "PMO・プロジェクトリーダー", d: "複数案件の管理支援やチーム統率を担う立場。マネジメント知識の体系化が信頼につながる。" },
              { t: "ITコンサル・上流SE", d: "顧客の要件定義からプロジェクト推進までを担う上流職へ、国家資格の裏づけを土台に広げられる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            マネジメント方向は<Link href="/skill/pm/" className="text-petrol hover:underline">PM（プロジェクトマネージャー）転職ガイド</Link>、キャリアの考え方は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメントへのキャリア</Link>を参考にしてください。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝マネジメント経験の証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              プロジェクトマネージャ試験は、<strong>構造的にミドル向け</strong>の資格です。午後Ⅱの論述で自身のプロジェクト管理経験を論じる必要があるため、実体験のない人には突破が難しく、合格者の平均年齢は38.1歳（令和7年度秋期）。つまり<strong>「すでにPM・リーダーを経験した人が、その経験を国家資格で客観化するための装置」</strong>として最も効きます。
            </p>
            <p>
              一方で過度な期待は禁物です。PM試験を取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「PM実務経験 × 資格」の掛け算</strong>のとき。担当した案件の規模・役割と組み合わせて初めて、上流PMポジションや資格手当という形で結実します。グローバル案件を視野に入れるなら、午前Ⅰ免除やこの経験を土台にPMPへ広げるのも有効です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "午前Ⅱで管理知識を網羅", d: "プロジェクトマネジメント分野の用語・体系を過去問演習で固める。応用情報合格者は午前Ⅰ免除を活用できる。" },
              { n: "STEP 2", t: "午後Ⅱの論述対策が本丸", d: "自身のプロジェクト経験を題意に沿って論じる練習を反復。事前に論述ネタを整理しておくのが鍵。" },
              { n: "STEP 3", t: "合格→PMP併取得・上位へ", d: "合格後2年間の午前Ⅰ免除を活かしつつ、グローバル志向ならPMP併取得で評価の幅を広げる。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            前段の基礎が不安なら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>から、グローバル志向なら<Link href="/cert/pmp/" className="text-petrol hover:underline">PMP</Link>、上流設計を深めるなら<Link href="/cert/system-architect/" className="text-petrol hover:underline">システムアーキテクト</Link>との組み合わせも有効です。
          </p>
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
          <h2 className="text-xl font-bold mb-3">PM・上流職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            PM試験を活かせるプロジェクトマネージャ・PMO求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "PMP資格と転職｜価値・年収", href: "/cert/pmp/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "システムアーキテクトの転職価値", href: "/cert/system-architect/" },
              { name: "PM（プロジェクトマネージャー）転職ガイド", href: "/skill/pm/" },
              { name: "マネジメントへのキャリア", href: "/knowledge/management/" },
              { name: "資格で選ぶ転職（資格ハブ）", href: "/cert/" },
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
