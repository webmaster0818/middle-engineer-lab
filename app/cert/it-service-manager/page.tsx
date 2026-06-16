import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ITサービスマネージャは転職に効くか｜運用管理の専門証明と年収【2026年】";
const PAGE_DESC =
  "IPAの高度国家試験・ITサービスマネージャ試験（SM）を、ITサービス運用・保守マネジメントの専門性証明という観点から30代・40代向けに解説。合格率、午前Ⅰ免除制度、年収の考え方（出典明記）まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SMは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度の活用" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "高度資格としての位置づけ" },
  { id: "middle", label: "30代・40代の価値＝運用マネジメントの証明" },
  { id: "steps", label: "取得3ステップ／次に狙う方向" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ITサービスマネージャは40代の転職で意味がありますか？",
    a: "意味があります。SMはIPAの高度試験（最高ランクのレベル4）で、ITサービスの安定運用・保守・インシデント対応のマネジメントスキルを国家資格として証明する試験です。すでに運用・保守やサービスマネジメントの実務経験がある30〜40代が、運用品質を統制できる人材であることを客観的に裏づける土台として機能します。ただし資格単体で年収が跳ねるわけではなく、運用マネジメントの実務経験との掛け算が前提です。",
  },
  {
    q: "SMの合格率はどのくらいですか？",
    a: "IPA公表（令和7年度春期）では14.7%です。例年14〜15%前後で推移する難関で、午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述、午後Ⅱの論述（小論文）という構成です。特に午後Ⅱの論述で、運用現場の課題と対応を論理的に書けるかが合否を分けます（IPA、調査時点2026年6月）。",
  },
  {
    q: "SMに合格すると何か免除がありますか？",
    a: "SM自体の合格による免除ではありませんが、SMを受ける際に午前Ⅰの免除制度が使えます。応用情報技術者試験の合格者、いずれかの高度試験・情報処理安全確保支援士試験の合格者、または高度試験・支援士試験の午前Ⅰで基準点以上を取った人は、その後2年間、午前Ⅰが免除されます。学習・受験の負担を下げる重要な制度です（IPA、調査時点2026年6月）。",
  },
  {
    q: "SMを取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。年収は運用・保守やサービスマネジメントの実務経験と役割で決まり、SMはそれを補強する位置づけと捉えるのが現実的です。当サイトでは出典の明確な保有者平均値を確認できないため、断定的な年収額の提示は避けています。公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を目安にしてください。",
  },
  {
    q: "SMとITILはどう違いますか？",
    a: "ITILはITサービスマネジメントの国際的なベストプラクティス（フレームワーク）で、SMはそれを含む運用マネジメント全般を扱うIPAの国家資格です。ITILが『考え方の共通言語』を学ぶ位置づけなのに対し、SMは『運用現場で課題に対処し統制できる力』を高度試験として証明します。両者は補完的に活かせます。",
  },
  {
    q: "2026年度から試験方式は変わりますか？",
    a: "IPAは高度試験を含む情報処理技術者試験のCBT（Computer Based Testing）化を進めており、SMも令和8年度（2026年度）からCBT方式への移行が予定されています。論述式の扱いを含め、受験を検討する際は最新の実施方式・日程をIPA公式（ipa.go.jp）で必ず確認してください。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分・レベル", "高度試験（スキルレベル4・最高ランク）"],
  ["受験料", "7,500円（消費税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ（記述）＋午後Ⅱ（論述）"],
  ["合格基準", "各区分で基準点（原則60点）以上／論述はランクA"],
  ["合格率", "令和7年度春期 14.7%（IPA公表）"],
  ["免除特典", "応用情報等の合格で午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function ITServiceManagerCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/it-service-manager/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "ITサービスマネージャ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITサービスマネージャは転職に効くか｜運用管理の専門証明と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度国家試験・SMの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ITサービスマネージャ試験（SM）は、IPAが主催する情報処理技術者試験の中でも<strong>最高ランク（スキルレベル4）の高度試験</strong>で、ITサービスの安定運用・保守・インシデント対応のマネジメントスキルを国家資格として証明する試験です。本記事は「SMを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『運用経験者のマネジメント証明』</strong>という性格を軸に、午前Ⅰ免除制度を含め、公開データと公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp／合格発表・試験区分ページ）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SMは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ITサービスマネージャは<strong>「運用経験者のマネジメント証明」</strong>です。基本情報やCCNAのような未経験入口資格とは性格が異なり、すでに運用・保守やサービスマネジメントの実務経験のあるミドルが<strong>運用品質を統制し、サービスを止めない人材であることを客観的に示す</strong>のに最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>運用・保守・サービス管理経験のある30〜40代</strong>：運用統制力を国家資格で証明できる</li>
              <li>② <strong>運用未経験のミドル</strong>：高度試験のため入口には不向き。まず応用情報や実務で土台を作るべき</li>
              <li>③ <strong>運用責任者・サービスマネージャ志望</strong>：管理職への移行の裏づけになる</li>
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
            出典: IPA 公式（ipa.go.jp、調査時点2026年6月）。合格率は令和7年度春期14.7%（IPA「令和7年度春期 合格発表」）。受験料は全試験区分共通で7,500円（消費税込）。午後Ⅱの論述（小論文）が最大の関門です。なお令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 午前Ⅰ免除 */}
        <section id="menjo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">午前Ⅰ免除制度の活用</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            高度試験の負担を下げる鍵が<strong>午前Ⅰ免除</strong>です。SMを受ける際、次のいずれかに該当すると午前Ⅰが2年間免除されます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>応用情報技術者試験</strong>に合格した（合格日から2年以内）</li>
              <li>・いずれかの<strong>高度試験・情報処理安全確保支援士試験</strong>に合格した（同2年以内）</li>
              <li>・高度試験・支援士試験の<strong>午前Ⅰで基準点以上</strong>を取った（同2年以内）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 公式（試験要綱、調査時点2026年6月）。免除は午前Ⅰのみで、午前Ⅱ・午後は免除されません。SMは午後Ⅱの論述に学習時間を集中させたい試験のため、午前Ⅰ免除の効果が大きくなります。詳しくは<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>のページも参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SMは高度資格ですが、<strong>資格そのものに固定の年収相場があるわけではありません</strong>。当サイトでは、母集団や算定方法が明示された信頼できる保有者平均値を確認できないため、断定的な年収額の提示は避けています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・年収は<strong>運用・保守・サービス管理の実務経験と役割</strong>で決まる</li>
              <li>・SMは<strong>運用マネジメント力を補強する材料</strong>であり、単体で年収を保証するものではない</li>
              <li>・公的な水準感の参考：給与所得者平均 約461万円（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分）。運用・SRE・サービスマネジメント職の年収は企業・役割で幅が大きいため、最新の相場は各エージェントの市場価値診断でご確認ください。基盤・運用方向の相場感は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "運用責任者・サービスマネージャ職への応募", d: "サービスを止めない統制力を国家資格で示せるため、運用管理ポジションの選考で加点される。" },
              { t: "運用品質・インシデント対応力の客観証明", d: "難関の論述試験を突破した事実が、現場の課題に体系的に対処できる力を裏づける。" },
              { t: "SRE・運用設計への展開", d: "可用性・SLA・継続的改善の知見が、運用設計やSRE領域への移行で評価される。" },
              { t: "資格手当・評価制度の対象", d: "高度試験を資格手当・報奨金の対象に設定する企業があり、社内評価の根拠になりやすい。" },
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
            SMが運用マネジメントの証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "ITサービスマネージャ／運用責任者", d: "サービスの可用性・品質を統制する立場。SMの体系がマネジメント判断の土台になる。" },
              { t: "SRE・運用設計エンジニア", d: "信頼性・SLA・継続的改善を担う領域で、運用マネジメントの体系的知見が評価される。" },
              { t: "インフラ／情シス運用リーダー", d: "運用チームを率いる立場への移行を、国家資格の信頼性が後押しする。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            基盤・運用方向は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>、上流・マネジメント方向は<Link href="/skill/pm/" className="text-petrol hover:underline">PM・マネジメント転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 高度資格としての位置づけ */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">高度資格としての位置づけ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SMは「入口資格」ではなく「運用マネジメントの証明資格」です。この前提を理解すると、入口資格（基本情報・CCNA・LPIC）とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">未経験入口資格（基本情報/CCNA）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">SM（運用経験者のマネジメント証明）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "未経験〜若手・異業種からの転職", "運用・保守・サービス管理経験のある中堅"],
                  ["狙い", "IT職への入口・基礎の証明", "運用統制力の客観証明・管理職への土台"],
                  ["効き方", "書類通過・間口を広げる", "運用責任者/SREへの配置・資格手当"],
                  ["難度", "基礎〜入門レベル（レベル1〜2）", "高度（レベル4）・午後Ⅱ論述が関門"],
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
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            活用の軸は3つです。第一に<strong>運用統制力の客観証明</strong>。SMは「サービスを止めずに改善し続ける力」を問う試験で、運用品質を語れる人材であることを国家資格で裏づけられます。第二に<strong>運用責任者・SREへの足がかり</strong>。可用性・SLA・継続的改善の素養を示す加点材料になります。第三に<strong>社内評価・資格手当</strong>。高度試験を評価対象とする企業では、昇給・評価の根拠になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。SMは合格率15%前後の難関で、特に午後Ⅱの論述には<strong>自分の運用経験を論理的に書く訓練が不可欠</strong>です。また取得しても単体で年収が跳ねる資格ではなく、効果が出るのは「運用マネジメントの実務 × 資格」の掛け算が成立したときです。逆に言えば、すでに運用現場の経験があり管理職を目指す30〜40代にとっては、投資する価値が明確な資格です。土台が不安なら、まず<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>を経由するのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝運用マネジメントの証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              SMは、基本情報・CCNA・LPICといった<strong>未経験の入口資格とは立ち位置が逆</strong>です。これらが「IT職に入るための入口」なのに対し、SMは<strong>「すでに運用現場にいる経験者が、サービスを統制できる人材であることを国家資格で示すための証明装置」</strong>として最も効きます。運用・保守の経験がある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。SMを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「運用マネジメントの実務経験 × 資格」の掛け算</strong>のとき。インシデント対応や継続的改善の経験と組み合わせて初めて、運用責任者やSREという形で結実します。さらに、応用情報の午前Ⅰ免除を使えば、高度試験への挑戦の負担を抑えられます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う方向</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "午前Ⅰ免除を確保", d: "応用情報合格などで午前Ⅰの2年間免除を取り、午後Ⅰ・午後Ⅱに学習を集中させる。" },
              { n: "STEP 2", t: "午後Ⅱの論述対策が本丸", d: "自分の運用経験を題材に、課題・対応・改善を論理的に書く論述パターンを反復する。" },
              { n: "STEP 3", t: "合格→運用責任者・SREへ展開", d: "国家資格の裏づけを職務経歴書・面接で活かし、運用管理・SRE職への移行につなげる。" },
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
            土台が不安なら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>から、基盤・運用の専門を広げるなら<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア</Link>、マネジメント転職の進め方は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント職への転職</Link>も有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">エンジニアの資格比較</Link>もご覧ください。
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
          <h2 className="text-xl font-bold mb-3">運用管理・SRE職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            SMを活かせる運用マネジメント・SRE・インフラ運用求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "情報処理安全確保支援士の転職価値", href: "/cert/security-specialist/" },
              { name: "エンジニアの資格比較", href: "/cert/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "PM・マネジメント転職ガイド", href: "/skill/pm/" },
              { name: "学び直し・リスキリング", href: "/knowledge/reskilling/" },
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
