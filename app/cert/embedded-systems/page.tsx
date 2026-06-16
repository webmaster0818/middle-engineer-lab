import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "エンベデッドシステムスペシャリストは転職に効くか｜組込みの専門証明と年収【2026年】";
const PAGE_DESC =
  "IPAの高度国家試験・エンベデッドシステムスペシャリスト試験（ES）を、組込み・IoTエンジニアの専門性証明という観点から30代・40代向けに解説。合格率、午前Ⅰ免除制度、年収の考え方（出典明記）まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：ESは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度の活用" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "高度資格としての位置づけ" },
  { id: "middle", label: "30代・40代の価値＝専門性の客観証明" },
  { id: "steps", label: "取得3ステップ／次に狙う方向" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "エンベデッドシステムスペシャリストは40代の転職で意味がありますか？",
    a: "意味があります。ESはIPAの高度試験（最高ランクのレベル4）で、組込み・IoT領域の設計開発スキルを国家資格として証明できます。すでに組込み開発の実務経験がある30〜40代が、専門性を客観的に裏づけ、上流（要件定義・アーキテクチャ設計）やリーダー職へ役割を広げる土台として機能します。ただし資格単体で年収が跳ねるわけではなく、組込み開発の実務経験との掛け算が前提です。",
  },
  {
    q: "ESの合格率はどのくらいですか？",
    a: "IPA公表（令和7年度秋期）では15.3%です。例年16〜19%前後で推移する難関で、午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述、午後Ⅱの記述という構成です。特に午後の組込み特有の設計問題が合否を分けます（IPA、調査時点2026年6月）。",
  },
  {
    q: "ESに合格すると何か免除がありますか？",
    a: "ES自体の合格による免除ではありませんが、ESを受ける際に午前Ⅰの免除制度が使えます。応用情報技術者試験の合格者、いずれかの高度試験・情報処理安全確保支援士試験の合格者、または高度試験・支援士試験の午前Ⅰで基準点以上を取った人は、その後2年間、午前Ⅰが免除されます。学習・受験の負担を大きく減らせる制度です（IPA、調査時点2026年6月）。",
  },
  {
    q: "ESを取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。年収は組込み開発の実務経験・役割・業界（自動車・産業機器・家電など）で決まり、ESはそれを補強する位置づけと捉えるのが現実的です。当サイトでは出典の明確な保有者平均値を確認できないため、断定的な年収額の提示は避けています。公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を目安にしてください。",
  },
  {
    q: "ESと応用情報はどちらを優先すべきですか？",
    a: "組込み実務経験があり高度試験に挑む準備があるならES、まず土台を固めたいなら応用情報という整理です。応用情報は中位の加点資格で、合格すればESの午前Ⅰが2年間免除されます。応用情報→ESという順で進めば、学習負担を抑えながら高度資格に到達できます。",
  },
  {
    q: "2026年度から試験方式は変わりますか？",
    a: "IPAは高度試験を含む情報処理技術者試験のCBT（Computer Based Testing）化を進めており、ESも令和8年度（2026年度）からCBT方式への移行が予定されています。受験を検討する際は、最新の実施方式・日程をIPA公式（ipa.go.jp）で必ず確認してください。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分・レベル", "高度試験（スキルレベル4・最高ランク）"],
  ["受験料", "7,500円（消費税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ・午後Ⅱ（記述式）"],
  ["合格基準", "各区分で基準点（原則60点）以上"],
  ["合格率", "令和7年度秋期 15.3%（IPA公表）"],
  ["免除特典", "応用情報等の合格で午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function EmbeddedSystemsCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/embedded-systems/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "エンベデッドシステムスペシャリスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンベデッドシステムスペシャリストは転職に効くか｜組込みの専門証明と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度国家試験・ESの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンベデッドシステムスペシャリスト試験（ES）は、IPAが主催する情報処理技術者試験の中でも<strong>最高ランク（スキルレベル4）の高度試験</strong>で、組込みシステム・IoT分野の設計開発スキルを国家資格として証明する試験です。本記事は「ESを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『経験者の専門性証明』</strong>という性格を軸に、午前Ⅰ免除制度を含め、公開データと公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ESは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              エンベデッドシステムスペシャリストは<strong>「組込み経験者の専門性証明」</strong>です。基本情報やCCNAのような未経験入口資格とは性格が異なり、すでに組込み開発の実務経験のあるミドルが<strong>上流（アーキテクチャ設計・要件定義）やリーダー職へ役割を広げる土台</strong>として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>組込み・IoT実務経験のある30〜40代</strong>：専門性を国家資格で客観証明できる</li>
              <li>② <strong>組込み未経験のミドル</strong>：高度試験のため入口には不向き。まず応用情報で土台を作るべき</li>
              <li>③ <strong>上流・リーダー志望</strong>：設計判断やマネジメントの素養を示す加点材料になる</li>
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
            出典: IPA 公式（ipa.go.jp、調査時点2026年6月）。合格率は令和7年度秋期15.3%（IPA「令和7年度秋期 合格発表」）。受験料は全試験区分共通で7,500円（消費税込）。午後Ⅰ・午後Ⅱの記述式が合否を分けやすい試験です。なお令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 午前Ⅰ免除 */}
        <section id="menjo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">午前Ⅰ免除制度の活用</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            高度試験の負担を下げる鍵が<strong>午前Ⅰ免除</strong>です。ESを受ける際、次のいずれかに該当すると午前Ⅰが2年間免除されます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>応用情報技術者試験</strong>に合格した（合格日から2年以内）</li>
              <li>・いずれかの<strong>高度試験・情報処理安全確保支援士試験</strong>に合格した（同2年以内）</li>
              <li>・高度試験・支援士試験の<strong>午前Ⅰで基準点以上</strong>を取った（同2年以内）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 公式（試験要綱、調査時点2026年6月）。免除は午前Ⅰのみで、午前Ⅱ・午後は免除されません。応用情報からステップアップする場合、この免除を活かすと学習・受験の負担を大きく減らせます。詳しくは<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>のページも参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ESは高度資格ですが、<strong>資格そのものに固定の年収相場があるわけではありません</strong>。当サイトでは、母集団や算定方法が明示された信頼できる保有者平均値を確認できないため、断定的な年収額の提示は避けています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・年収は<strong>組込み実務経験・役割・業界</strong>（自動車/産業機器/家電/医療機器等）で決まる</li>
              <li>・ESは<strong>専門性を補強する材料</strong>であり、単体で年収を保証するものではない</li>
              <li>・公的な水準感の参考：給与所得者平均 約461万円（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分）。組込み領域の年収は業界・製品によって幅が大きいため、最新の相場は各エージェントの市場価値診断でご確認ください。職種別の相場感は<Link href="/skill/embedded/" className="text-petrol hover:underline">組込みエンジニア転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "組込み上流（要件定義・アーキ設計）への配置", d: "ハードとソフトを横断する設計判断の素養を示す土台として、上流ポジション応募で加点される。" },
              { t: "専門性・学習意欲の客観証明", d: "最高ランクの国家資格を実務と両立して取得した事実が、組込み領域の深い知識と継続学習を裏づける。" },
              { t: "資格手当・評価制度の対象", d: "高度試験を資格手当・報奨金の対象に設定する企業があり、社内評価の根拠になりやすい。" },
              { t: "リーダー・技術責任者への布石", d: "設計レビューや若手指導を担う立場への移行で、技術力の客観的裏づけになる。" },
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
            ESが専門性の証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "組込みソフトウェアエンジニア（上流寄り）", d: "マイコン・RTOS・ファームウェアの設計を担う。ESの体系的知識が設計判断の土台になる。" },
              { t: "IoT・エッジデバイス開発", d: "センサーや通信を含むIoT機器の開発で、ハード/ソフト横断の知見が評価される。" },
              { t: "組込みリーダー／技術責任者候補", d: "設計レビューやチーム指導を担う立場への移行を、国家資格の信頼性が後押しする。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            組込み・IoT方向は<Link href="/skill/embedded/" className="text-petrol hover:underline">組込みエンジニア転職ガイド</Link>、基盤・インフラ方向は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 高度資格としての位置づけ */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">高度資格としての位置づけ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ESは「入口資格」ではなく「専門性の証明資格」です。この前提を理解すると、入口資格（基本情報・CCNA・LPIC）とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">未経験入口資格（基本情報/CCNA）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ES（組込み経験者の専門証明）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "未経験〜若手・異業種からの転職", "組込み実務経験のある中堅エンジニア"],
                  ["狙い", "IT職への入口・基礎の証明", "専門性の客観証明・上流への土台"],
                  ["効き方", "書類通過・間口を広げる", "設計/リーダーへの配置・資格手当"],
                  ["難度", "基礎〜入門レベル（レベル1〜2）", "高度（レベル4）・午後記述が関門"],
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
            活用の軸は3つです。第一に<strong>専門性の客観証明</strong>。組込み領域は実務スキルが見えにくく、最高ランクの国家資格は「この人は組込みの体系を理解している」という強い裏づけになります。第二に<strong>上流・リーダーへの足がかり</strong>。アーキテクチャ設計や若手指導を担う立場への移行で加点されます。第三に<strong>社内評価・資格手当</strong>。高度試験を評価対象とする企業では、昇給・評価の根拠になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。ESは合格率15%台の難関で、<strong>相応の学習時間が必要</strong>です。また取得しても単体で年収が跳ねる資格ではなく、効果が出るのは「組込み実務 × 資格」の掛け算が成立したときです。逆に言えば、すでに組込み現場の経験があり専門性を客観的に示したい30〜40代にとっては、投資する価値が明確な資格です。基礎や中位の土台が不安なら、まず<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>を経由するのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝専門性の客観証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ESは、基本情報・CCNA・LPICといった<strong>未経験の入口資格とは立ち位置が逆</strong>です。これらが「IT職に入るための入口」なのに対し、ESは<strong>「すでに組込み現場にいる経験者が、専門性を国家資格で示し、上流へ役割を上げるための証明装置」</strong>として最も効きます。組込み実務のある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。ESを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「組込み実務経験 × 資格」の掛け算</strong>のとき。設計・開発経験と組み合わせて初めて、上流ポジションや資格手当という形で結実します。さらに、応用情報の午前Ⅰ免除を使えば、高度試験への挑戦の負担を抑えられます。
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
              { n: "STEP 1", t: "午前Ⅰ免除を確保", d: "応用情報合格などで午前Ⅰの2年間免除を取り、午前Ⅱ・午後に学習を集中させる。" },
              { n: "STEP 2", t: "午後の組込み設計対策が本丸", d: "ハード/ソフト横断の設計問題、リアルタイム制御の記述パターンを過去問で反復する。" },
              { n: "STEP 3", t: "合格→上流・リーダーへ展開", d: "国家資格の裏づけを職務経歴書・面接で活かし、設計・リーダー職への移行につなげる。" },
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
            中位の土台が不安なら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>から、専門を広げるなら<Link href="/skill/embedded/" className="text-petrol hover:underline">組込みエンジニア</Link>・<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ領域</Link>の知見と組み合わせるのも有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">エンジニアの資格比較</Link>もご覧ください。
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
          <h2 className="text-xl font-bold mb-3">組込み・上流職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ESを活かせる組込み・IoT・設計求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "組込みエンジニア転職ガイド", href: "/skill/embedded/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
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
