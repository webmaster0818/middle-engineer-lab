import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "システム監査技術者は転職に効くか｜監査・統制の証明と年収【2026年】";
const PAGE_DESC =
  "IPAの高度試験・システム監査技術者試験（AU）を、監査・内部統制・IT統制の実務者が独立的評価の素養を証明する観点から30代・40代向けに解説。合格率、午前Ⅰ免除、論述試験、年収の考え方まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：システム監査技術者は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度のメリット" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "middle", label: "30代・40代の価値＝監査・統制経験の証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "システム監査技術者は40代の転職で意味がありますか？",
    a: "監査・内部統制・IT統制・リスク管理の実務がある経験者には意味があります。システム監査技術者試験はIPAの高度試験で、情報システムを独立的・客観的に評価し改善を提言する素養を国家資格として示せます。午後Ⅱの論述で自身の監査・統制経験を論じる必要があり、構造的にミドル向けの試験です。すでに監査・統制・品質管理に携わる30〜40代が、監査やガバナンス領域で専門性を証明する加点材料になります。ただし資格単体で年収が跳ねるわけではなく、実務経験との掛け算が前提です。",
  },
  {
    q: "システム監査技術者の合格率はどのくらいですか？",
    a: "IPA公表（令和7年度秋期）では、受験者2,245人・合格者362人で合格率16.1%でした。受験者数は高度試験の中でも少なめですが、難関区分です。午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述に加え、午後Ⅱは『論述（小論文）』で、監査計画・実施・報告の観点から論じる形式が合否を分けます（IPA、2026年6月時点）。",
  },
  {
    q: "システム監査技術者に合格すると何か免除がありますか？",
    a: "高度試験の合格者は、その後2年間、ほかの高度試験および情報処理安全確保支援士試験の『午前Ⅰ』が免除されます。応用情報技術者の合格でも同様に午前Ⅰが2年間免除されます。複数の高度資格を狙う場合、この免除は学習・受験の負担を大きく減らすメリットになります（IPA、2026年6月時点）。",
  },
  {
    q: "システム監査技術者はどんな職種で評価されますか？",
    a: "IT監査人、内部監査部門、情報システム監査、IT統制・ガバナンス担当、品質保証（QA）、リスク管理などで評価されやすい資格です。会計監査法人のIT監査部門や、上場企業の内部統制（J-SOX対応）の現場でも、独立的にシステムを評価できる素養の裏づけとして役立つ場面があります。需要は限定的ですが、その分専門性で差別化しやすい領域です。",
  },
  {
    q: "システム監査技術者を取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。IPA高度試験の保有者に限定した公的な年収統計は乏しく、当サイトでは具体的な平均額を断定しません。年収は実務経験・役割・所属組織で決まり、AUはそれを補強する位置づけと捉えるのが現実的です。参考として、給与所得者全体の平均は国税庁『民間給与実態統計調査』で461万円（令和6年分）です。",
  },
  {
    q: "受験料はいくらですか？CBTになりますか？",
    a: "受験料は7,500円（税込）です。システム監査技術者試験は秋期（10月）に実施されてきましたが、令和8年度（2026年度）からCBT方式への移行が予定されています。出題形式（多肢選択・記述・論述）や出題範囲そのものに大きな変更はない見込みですが、最新の実施方式は受験前にIPA公式でご確認ください（IPA、2026年6月時点）。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分", "高度試験（システム監査・IT統制領域の区分）"],
  ["受験料", "7,500円（税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ（記述）＋午後Ⅱ（論述）"],
  ["合格基準", "各区分で60点以上（午後Ⅱは論述評価）"],
  ["合格率", "令和7年度秋期 16.1%（受験2,245人・合格362人／IPA）"],
  ["実施時期", "秋期（10月）。令和8年度よりCBT移行予定"],
  ["免除特典", "合格後、他の高度試験・支援士の午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function SystemAuditorCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/system-auditor/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "システム監査技術者" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          システム監査技術者は転職に効くか｜監査・統制の証明と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度試験・システム監査技術者の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          システム監査技術者試験（AU）は、IPAが主催する高度試験のうちシステム監査・IT統制領域に位置づけられる国家資格です。本記事は「システム監査技術者を取れば転職で有利になるか」という疑問に対し、<strong>監査・内部統制の実務者が独立的・客観的な評価の素養を証明する『経験者の加点資格』</strong>という性格を軸に、論述試験の特徴や午前Ⅰ免除のメリット、活きる領域を含め、IPA公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：システム監査技術者は誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              システム監査技術者は<strong>「監査・内部統制の実務者が独立的評価の素養を証明する加点資格」</strong>です。午後Ⅱの論述で自身の監査・統制経験を論じる必要があるため、<strong>構造的に実務経験のあるミドルを想定した試験</strong>です。すでに監査・統制・品質保証に携わる30〜40代が、IT監査・ガバナンス領域で専門性を証明する土台として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>監査・統制・QAの実務がある30〜40代</strong>：独立的評価の素養の客観証明として加点される</li>
              <li>② <strong>未経験のミドル</strong>：論述で監査の実体験が問われ、入口には不向き。まず応用情報や統制実務を積むべき</li>
              <li>③ <strong>ガバナンス・コンサル志向</strong>：合格すれば午前Ⅰ免除で他の高度区分への近道にもなる</li>
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
            出典: IPA 公式（ipa.go.jp、令和7年度秋期実施結果、2026年6月時点）。合格率16.1%は受験者2,245人・合格者362人に基づく公表値。午後Ⅱの論述（小論文）が最大の関門で、監査計画・実施・報告の観点から自身の経験を題意に沿って論じる必要があります。令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
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
            出典: IPA「午前Ⅰ試験免除」（ipa.go.jp、2026年6月時点）。免除期間は合格・基準点取得から2年間です。AUは午後Ⅱの論述対策に時間がかかるため、午前Ⅰ免除で午前の負担を減らせる意義は大きく、応用情報→AUというステップを踏む人もいます。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            システム監査技術者合格者に限定した公的な年収統計は乏しく、当サイトでは<strong>具体的な平均額を断定しません</strong>。監査・統制という専門領域の特性上、年収は所属組織（監査法人・事業会社の内部監査など）や役割の影響が大きく、資格が年収を直接押し上げたとは断定できません。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・IPA高度試験の保有者別年収：<strong>公的統計が乏しく公表値は限定的</strong></li>
              <li>・実態：<strong>年収は監査・統制の実務経験・役割・所属組織で決まり、資格は補強材</strong></li>
              <li>・参考：給与所得者全体の平均は<strong>461万円</strong>（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分・給与所得者平均461万円）。AU単独の年収は信頼できる公的データが乏しいため、当サイトでは断定を避け、監査・統制の実務経験との掛け算で評価する立場を取ります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "IT監査・内部監査職への応募", d: "情報システムを独立的・客観的に評価する素養を国家資格で裏づけ、監査部門の求人で加点される。" },
              { t: "IT統制・ガバナンス担当への配置", d: "J-SOX対応や内部統制の評価・改善を担う立場で、体系的な監査知識が信頼の根拠になる。" },
              { t: "資格手当・評価制度の対象", d: "高度試験を資格手当・報奨金や昇進要件に設定する企業があり、社内評価の根拠になりやすい。" },
              { t: "コンサル・品質保証への布石", d: "監査・統制の視点は、ITコンサルや品質保証（QA）の領域でも独自の強みとして評価される。" },
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
            システム監査技術者が監査・統制の素養の証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "IT監査人／システム監査担当", d: "情報システムを独立的に評価し改善を提言する役割。論述で問われた監査素養がそのまま実務に直結する。" },
              { t: "内部監査・IT統制（J-SOX）担当", d: "上場企業の内部統制評価を担う立場。体系的な監査知識が統制の信頼性を支える。" },
              { t: "品質保証（QA）・リスク管理", d: "プロセスやシステムの妥当性を客観的に評価する領域へ、監査の視点を土台に広げられる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            品質・テスト方向は<Link href="/skill/qa/" className="text-petrol hover:underline">QA・テストエンジニア転職ガイド</Link>、セキュリティ方向は<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝監査・統制経験の証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              システム監査技術者は、<strong>構造的にミドル向け</strong>の資格です。午後Ⅱの論述で自身の監査・統制経験を論じる必要があるため、実体験のない人には突破が難しく、<strong>「すでに監査・統制・品質管理を経験した人が、その視点を国家資格で客観化するための装置」</strong>として最も効きます。需要は限定的ですが、その分専門性で差別化しやすい領域でもあります。
            </p>
            <p>
              一方で過度な期待は禁物です。AUを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「監査・統制の実務経験 × 資格」の掛け算</strong>のとき。担当した監査・内部統制の実績と組み合わせて初めて、IT監査やガバナンスのポジション、資格手当という形で結実します。さらに、午前Ⅰ免除を使えば他の高度区分にも挑みやすくなり、上流・専門の評価軸を広げられます。
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
              { n: "STEP 1", t: "午前Ⅱで監査知識を網羅", d: "システム監査・内部統制・関連法規の用語と体系を過去問演習で固める。応用情報合格者は午前Ⅰ免除を活用できる。" },
              { n: "STEP 2", t: "午後Ⅱの論述対策が本丸", d: "自身の監査・統制経験を題意に沿って論じる練習を反復。監査計画・実施・報告の流れで論述ネタを整理する。" },
              { n: "STEP 3", t: "合格→午前Ⅰ免除で上位へ", d: "合格後2年間の午前Ⅰ免除を活かし、情報処理安全確保支援士など他の高度資格に挑戦する。" },
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
            前段の基礎が不安なら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>から、セキュリティと組み合わせるなら<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>、学び直しの全体像は<Link href="/knowledge/reskilling/" className="text-petrol hover:underline">エンジニアのリスキリング</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">監査・ガバナンス職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            システム監査技術者を活かせるIT監査・内部統制の求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "情報処理安全確保支援士と転職", href: "/cert/security-specialist/" },
              { name: "プロジェクトマネージャ試験(IPA)と転職", href: "/cert/project-manager/" },
              { name: "QA・テストエンジニア転職ガイド", href: "/skill/qa/" },
              { name: "エンジニアのリスキリング", href: "/knowledge/reskilling/" },
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
