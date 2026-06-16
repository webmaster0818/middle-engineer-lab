import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ITストラテジストは転職に効くか｜IT戦略の最高峰資格と年収【2026年】";
const PAGE_DESC =
  "IPAの高度国家試験・ITストラテジスト試験（ST）を、IT戦略・経営の専門性証明という観点から30代・40代向けに解説。合格率、午前Ⅰ免除制度、年収の考え方（出典明記）まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：STは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度の活用" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "最高峰資格としての位置づけ" },
  { id: "middle", label: "30代・40代の価値＝経営×ITの証明" },
  { id: "steps", label: "取得3ステップ／次に狙う方向" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ITストラテジストは40代の転職で意味がありますか？",
    a: "意味があります。STはIPAの高度試験（最高ランクのレベル4）で、IT戦略の立案・経営とITの橋渡しスキルを国家資格として証明する、最難関クラスの試験です。すでに上流（企画・コンサル・PM）の実務経験がある30〜40代が、経営視点でITを語れる人材であることを客観的に裏づける土台として機能します。ただし資格単体で年収が跳ねるわけではなく、戦略・企画の実務経験との掛け算が前提です。",
  },
  {
    q: "STの合格率はどのくらいですか？",
    a: "IPA公表（令和7年度春期）では15.0%です。例年14〜15%前後で推移する最難関クラスで、午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述、午後Ⅱの論述（小論文）という構成です。特に午後Ⅱの論述で、経営戦略とITを結びつけて自分の経験を論理的に書けるかが合否を分けます（IPA、調査時点2026年6月）。",
  },
  {
    q: "STに合格すると何か免除がありますか？",
    a: "ST自体の合格による免除ではありませんが、STを受ける際に午前Ⅰの免除制度が使えます。応用情報技術者試験の合格者、いずれかの高度試験・情報処理安全確保支援士試験の合格者、または高度試験・支援士試験の午前Ⅰで基準点以上を取った人は、その後2年間、午前Ⅰが免除されます。最難関試験の学習負担を下げる重要な制度です（IPA、調査時点2026年6月）。",
  },
  {
    q: "STを取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。年収はIT戦略・企画・コンサルの実務経験と役割で決まり、STはそれを補強する位置づけと捉えるのが現実的です。当サイトでは出典の明確な保有者平均値を確認できないため、断定的な年収額の提示は避けています。公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を目安にしてください。",
  },
  {
    q: "STとプロジェクトマネージャ・PMPはどう違いますか？",
    a: "STは『何のためにITを使うか』という戦略・企画の上流を扱い、PM（プロジェクトマネージャ試験）やPMPは『決まったプロジェクトをどう完遂するか』という実行管理を扱います。経営に近い企画・コンサル志向ならST、プロジェクト運営の専門性を示したいならPM・PMPという棲み分けです。両者は補完関係にあります。",
  },
  {
    q: "2026年度から試験方式は変わりますか？",
    a: "IPAは高度試験を含む情報処理技術者試験のCBT（Computer Based Testing）化を進めており、STも令和8年度（2026年度）からCBT方式への移行が予定されています。論述式の扱いを含め、受験を検討する際は最新の実施方式・日程をIPA公式（ipa.go.jp）で必ず確認してください。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分・レベル", "高度試験（スキルレベル4・最高ランク）"],
  ["受験料", "7,500円（消費税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ（記述）＋午後Ⅱ（論述）"],
  ["合格基準", "各区分で基準点（原則60点）以上／論述はランクA"],
  ["合格率", "令和7年度春期 15.0%（IPA公表）"],
  ["免除特典", "応用情報等の合格で午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function ITStrategistCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/it-strategist/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "ITストラテジスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITストラテジストは転職に効くか｜IT戦略の最高峰資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度国家試験・STの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ITストラテジスト試験（ST）は、IPAが主催する情報処理技術者試験の中でも<strong>最高ランク（スキルレベル4）の高度試験</strong>で、経営戦略に基づくIT戦略・企画の立案スキルを国家資格として証明する、最難関クラスの試験です。本記事は「STを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『上流経験者の戦略証明』</strong>という性格を軸に、午前Ⅰ免除制度を含め、公開データと公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：STは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ITストラテジストは<strong>「上流経験者の戦略・経営証明」</strong>です。基本情報やCCNAのような未経験入口資格とは性格が異なり、すでに企画・コンサル・PMなど上流の実務経験のあるミドルが<strong>経営とITを橋渡しできる人材であることを客観的に示す</strong>のに最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>企画・コンサル・PM経験のある30〜40代</strong>：経営視点でITを語れる証明になる</li>
              <li>② <strong>上流未経験のミドル</strong>：最難関のため入口には不向き。まず応用情報や実務で土台を作るべき</li>
              <li>③ <strong>ITコンサル・CIO候補志望</strong>：戦略立案の素養を国家資格で裏づけられる</li>
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
            出典: IPA 公式（ipa.go.jp、調査時点2026年6月）。合格率は令和7年度春期15.0%（IPA「令和7年度春期 合格発表」）。受験料は全試験区分共通で7,500円（消費税込）。午後Ⅱの論述（小論文）が最大の関門です。なお令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 午前Ⅰ免除 */}
        <section id="menjo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">午前Ⅰ免除制度の活用</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            最難関試験の負担を下げる鍵が<strong>午前Ⅰ免除</strong>です。STを受ける際、次のいずれかに該当すると午前Ⅰが2年間免除されます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>応用情報技術者試験</strong>に合格した（合格日から2年以内）</li>
              <li>・いずれかの<strong>高度試験・情報処理安全確保支援士試験</strong>に合格した（同2年以内）</li>
              <li>・高度試験・支援士試験の<strong>午前Ⅰで基準点以上</strong>を取った（同2年以内）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 公式（試験要綱、調査時点2026年6月）。免除は午前Ⅰのみで、午前Ⅱ・午後は免除されません。STは午後Ⅱの論述に学習時間を集中させたい試験のため、午前Ⅰ免除の効果が特に大きくなります。詳しくは<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>のページも参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            STは最難関の高度資格ですが、<strong>資格そのものに固定の年収相場があるわけではありません</strong>。当サイトでは、母集団や算定方法が明示された信頼できる保有者平均値を確認できないため、断定的な年収額の提示は避けています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・年収は<strong>戦略・企画・コンサルの実務経験と役割</strong>で決まる</li>
              <li>・STは<strong>経営×ITの素養を補強する材料</strong>であり、単体で年収を保証するものではない</li>
              <li>・公的な水準感の参考：給与所得者平均 約461万円（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分）。ITコンサル・企画職の年収は企業・役割で幅が大きいため、最新の相場は各エージェントの市場価値診断でご確認ください。上流・マネジメント方向の相場感は<Link href="/skill/pm/" className="text-petrol hover:underline">PM・マネジメント転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "ITコンサル・企画ポジションへの応募", d: "経営戦略とITを結びつける素養を国家資格で示せるため、戦略・企画系の選考で加点される。" },
              { t: "経営×ITの視座の客観証明", d: "最難関の論述試験を突破した事実が、経営目線で物事を語れる人材であることを裏づける。" },
              { t: "CIO・IT部門責任者候補としての評価", d: "情報システム部門の上位職や、DX推進リーダーへの登用で信頼性の根拠になる。" },
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
            STが戦略・経営の証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "ITコンサルタント", d: "顧客の経営課題をITで解決する提案を担う。STの戦略立案の体系が提案力の土台になる。" },
              { t: "IT企画・DX推進担当", d: "事業部門と情報システムをつなぐ企画職。経営とITの橋渡し役として評価される。" },
              { t: "CIO・情報システム部門責任者候補", d: "IT投資の意思決定を担う上位職への移行を、国家資格の信頼性が後押しする。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            上流・マネジメント方向は<Link href="/skill/pm/" className="text-petrol hover:underline">PM・マネジメント転職ガイド</Link>、プロジェクト管理の専門資格は<Link href="/cert/pmp/" className="text-petrol hover:underline">PMP</Link>を参考にしてください。
          </p>
        </section>

        {/* 最高峰資格としての位置づけ */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最高峰資格としての位置づけ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            STは「入口資格」ではなく「戦略・経営の証明資格」です。この前提を理解すると、入口資格（基本情報・CCNA・LPIC）とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">未経験入口資格（基本情報/CCNA）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ST（上流経験者の戦略証明）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "未経験〜若手・異業種からの転職", "企画・コンサル・PM経験のある中堅"],
                  ["狙い", "IT職への入口・基礎の証明", "経営×ITの視座の客観証明"],
                  ["効き方", "書類通過・間口を広げる", "コンサル/企画/CIO候補への配置・資格手当"],
                  ["難度", "基礎〜入門レベル（レベル1〜2）", "最難関（レベル4）・午後Ⅱ論述が関門"],
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
            活用の軸は3つです。第一に<strong>経営×ITの視座の証明</strong>。STは「ITで何を実現するか」という戦略レベルの試験で、経営層と対話できる人材であることを国家資格で裏づけられます。第二に<strong>コンサル・企画・CIO候補への足がかり</strong>。戦略立案の素養を示す加点材料になります。第三に<strong>社内評価・資格手当</strong>。高度試験を評価対象とする企業では、昇給・評価の根拠になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。STは合格率15%前後の最難関で、特に午後Ⅱの論述には<strong>自分の上流経験を論理的に書く訓練が不可欠</strong>です。また取得しても単体で年収が跳ねる資格ではなく、効果が出るのは「戦略・企画の実務 × 資格」の掛け算が成立したときです。逆に言えば、すでに上流経験があり経営に近い役割を目指す30〜40代にとっては、投資する価値が明確な資格です。土台が不安なら、まず<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>を経由するのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝経営×ITの証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              STは、基本情報・CCNA・LPICといった<strong>未経験の入口資格とは立ち位置が逆</strong>です。これらが「IT職に入るための入口」なのに対し、STは<strong>「すでに上流にいる経験者が、経営とITを橋渡しできる人材であることを国家資格で示すための証明装置」</strong>として最も効きます。企画・コンサル・PM経験のある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。STを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「戦略・企画の実務経験 × 資格」の掛け算</strong>のとき。経営課題をITで解決した経験と組み合わせて初めて、コンサル職やCIO候補という形で結実します。さらに、応用情報の午前Ⅰ免除を使えば、最難関試験への挑戦の負担を抑えられます。
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
              { n: "STEP 2", t: "午後Ⅱの論述対策が本丸", d: "自分の上流経験を題材に、経営戦略とITを結びつける論述パターンを反復して書く。" },
              { n: "STEP 3", t: "合格→コンサル・CIO候補へ展開", d: "国家資格の裏づけを職務経歴書・面接で活かし、戦略・企画系ポジションへの移行につなげる。" },
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
            土台が不安なら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>から、プロジェクト管理の専門性を加えるなら<Link href="/cert/pmp/" className="text-petrol hover:underline">PMP</Link>、マネジメント転職の進め方は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント職への転職</Link>も有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">エンジニアの資格比較</Link>もご覧ください。
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
          <h2 className="text-xl font-bold mb-3">戦略・企画・コンサル職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            STを活かせるITコンサル・企画・DX推進求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "PMPの転職価値", href: "/cert/pmp/" },
              { name: "エンジニアの資格比較", href: "/cert/" },
              { name: "PM・マネジメント転職ガイド", href: "/skill/pm/" },
              { name: "マネジメント職への転職", href: "/knowledge/management/" },
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
