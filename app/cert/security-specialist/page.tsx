import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "情報処理安全確保支援士は転職に有利？年収・合格率・維持費【2026年】";
const PAGE_DESC =
  "情報処理安全確保支援士（登録セキスペ）は30代・40代の転職で有利か。IPAの合格率、経産省データの年収、登録維持費まで正直に解説。『実務×国家資格』でセキュリティ人材としての信頼性を高める活かし方をまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：実務がある経験者に効く国家資格" },
  { id: "overview", label: "試験概要・合格率" },
  { id: "cost", label: "登録維持費（正直に）" },
  { id: "salary", label: "保有者の年収相場" },
  { id: "scene", label: "転職で評価される場面" },
  { id: "jobs", label: "求人で求められる要件" },
  { id: "kakezan", label: "30-40代の価値＝実務×国家資格" },
  { id: "steps", label: "取得3ステップ・併取得資格" },
  { id: "demerit", label: "デメリット・限界" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "情報処理安全確保支援士は30代・40代の転職で有利ですか？",
    a: "セキュリティの実務（運用・監査・脆弱性対応など）がある経験者には有利に働きやすい資格です。サイバー攻撃の増加で需要が拡大しており、経済産業省管轄のIPAが認定する国家資格として信頼性の裏づけになります。経済産業省は『2030年までに登録者5万人』を目標に掲げています。ただし、未経験者が資格だけで転職するのは難しく、運用・設計などの実務とセットで初めて評価される点は正直にお伝えします。",
  },
  {
    q: "合格率はどのくらいですか？難しいですか？",
    a: "IPA公表の令和7年度実施結果では、2025年秋期の合格率は22.3%、2025年春期は19.0%でした。午前Ⅰ・午前Ⅱの多肢選択に加え、午後の記述式で各60点以上が必要な難関区分です。応用情報技術者の合格者は午前Ⅰが2年間免除される制度があるため、応用情報→支援士というステップを踏む人が多いです。なお2026年度からCBT方式への移行が予定されています（IPA公表）。",
  },
  {
    q: "登録の維持費はどのくらいかかりますか？",
    a: "正直にお伝えすると、合格後に『登録セキスペ』として名乗るには登録と継続的な維持費が必要です。初回登録に約20,000円、加えて3年間で最低でも約11.5万円〜の費用がかかるのが目安です（毎年のオンライン講習が約2万円×3回＋3年に1回の実践講習／特定講習が5〜16万円）。試験合格だけなら維持費は不要ですが、『登録セキスペ』を名乗るには維持費が前提になります。金額は変更され得るため最新はIPAでご確認ください。",
  },
  {
    q: "資格を取ると独占業務はできますか？",
    a: "現時点では、情報処理安全確保支援士は『名称独占』資格であり、特定の業務を独占的に行える『業務独占』はまだありません。つまり『登録セキスペ』という名称を名乗れる権利が中心で、弁護士のように資格者でないと行えない法定業務があるわけではありません。価値は名称による信頼性と、試験で証明される体系的知識にあります。",
  },
  {
    q: "応用情報と支援士はどちらを先に取るべきですか？",
    a: "経験が浅い、または高度試験が初めての場合は、まず応用情報技術者でIT全般と基礎的なセキュリティを固めるのが現実的です。応用情報に合格すると、支援士など高度試験の午前Ⅰが2年間免除されるため、その期間内に支援士へ挑むのが効率的なルートです。すでにセキュリティ実務が長い人は、直接支援士を狙っても構いません。",
  },
];

export default function CertSecuritySpecialistPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/security-specialist/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エンジニア資格と転職", href: "/cert/" },
          { name: "情報処理安全確保支援士" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          情報処理安全確保支援士は転職に有利？年収・合格率・維持費【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA・経産省データで30代・40代の活用を解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          情報処理安全確保支援士（通称・登録セキスペ）は、経済産業省管轄のIPA（情報処理推進機構）が認定する、サイバーセキュリティ分野で唯一の国家資格です。本記事は「30代・40代の転職でこの資格は効くのか」という情報意図に絞り、<strong>合格率・年収・登録維持費</strong>を一次データで示し、「実務×国家資格」での活かし方を、維持費というデメリットも正直に含めて解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 情報処理技術者試験／支援士試験 令和7年度実施結果【公的データ】",
            "経済産業省 IT関連産業の給与等に関する実態調査【公的データ】",
            "IPA 登録セキスペ 登録・更新制度（維持費）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：実務がある経験者に効く国家資格</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              情報処理安全確保支援士は当サイトの分類で<strong>「経験者加点資格」</strong>です。サイバー攻撃の増加でセキュリティ人材の需要は拡大しており、<strong>運用・監査などの実務に国家資格を掛け合わせることで信頼性が一段上がります</strong>。一方、未経験者が資格単体で転職するのは難しく、維持費もかかる点は正直にお伝えします。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 経産省管轄IPAの国家資格＝<strong>信頼性の裏づけ</strong>になる</li>
              <li>② 経産省は<strong>「2030年までに登録者5万人」</strong>を目標に掲げ需要は政策面でも後押し</li>
              <li>③ ただし<strong>登録維持費（3年で約11.5万円〜）</strong>がかかり、独占業務はまだ無い</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            セキュリティ人材の需要は構造的に伸びています。クラウド利用の拡大、ランサムウェアやサプライチェーン攻撃の増加、個人情報保護やガバナンス要件の強化などにより、企業は「守る人材」を確保せざるを得ない状況にあります。こうした追い風のなかで、<strong>国の制度として位置づけられた唯一のセキュリティ国家資格</strong>である情報処理安全確保支援士は、経験者にとって信頼性を示す有力な手段になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            ただし、勘違いしてはいけないのは「資格があれば未経験でもセキュリティ職に転職できる」という発想です。セキュリティは事故が許されない領域であり、採用側は実務でのインシデント対応・運用・設計の経験をまず重視します。支援士はその経験の上に乗せて初めて価値が増幅されます。本記事はこの前提を一貫させたうえで、年収・維持費・活かし方を解説します。
          </p>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要・合格率</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["主催", "IPA（情報処理推進機構・経済産業省管轄）"],
                  ["受験料", "7,500円"],
                  ["試験形式", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後（記述式）／各60点以上で合格"],
                  ["合格率", "2025年秋期 22.3% / 2025年春期 19.0%（IPA令和7年度）"],
                  ["免除制度", "応用情報技術者の合格者は午前Ⅰが2年間免除"],
                  ["今後", "2026年度よりCBT方式へ移行予定"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium w-40 align-top">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 令和7年度 情報処理技術者試験・情報処理安全確保支援士試験 実施結果（2026年6月時点）。CBT移行の詳細・日程はIPA公式でご確認ください。
          </p>
        </section>

        {/* 維持費 */}
        <section id="cost" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録維持費（正直に）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700 space-y-3">
            <p>
              この資格を語るうえで欠かせないのが<strong>登録維持費</strong>です。試験に合格しただけでは「登録セキスペ」を名乗れず、登録と継続的な講習が必要になります。
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>初回登録: 約20,000円</li>
              <li>毎年のオンライン講習: 約2万円 ×3年</li>
              <li>3年に1回の実践講習／特定講習: 約5〜16万円</li>
              <li><strong>3年間の合計: 最低でも約11.5万円〜</strong></li>
            </ul>
            <p>
              さらに、現状は<strong>「名称独占」資格であり、独占業務はまだありません</strong>。「登録セキスペ」という名称を名乗れる信頼性が主な価値です。維持費を払い続ける価値があるかは、セキュリティ職としてのキャリア継続意思とセットで判断するのが賢明です。試験合格の実績自体は維持費なしでも職務経歴に書けます。
            </p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: IPA 登録セキスペ 登録・更新制度（2026年6月時点）。金額・制度は改定され得るため、登録前に必ずIPA公式で最新の費用をご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            権威データとして、経済産業省のIT関連産業の給与等に関する実態調査では、ITスペシャリスト（データベース・ネットワーク・セキュリティ等）の平均年収は<strong>758.2万円</strong>とされ、スキルレベル6・7の高度人材では1,000万円超も報告されています。これは支援士単体ではなく、高度なセキュリティ・基盤領域の人材像の水準としてご覧ください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ITスペシャリスト平均（経産省）", "758.2万円（DB/NW/セキュリティ等を含む・公的データ）"],
                  ["高スキルレベル（レベル6/7）", "1,000万円超の報告あり（公的データ）"],
                  ["市場の参考レンジ", "約600〜1,300万円（Midworks等の参考値・レンジ広く断定回避）"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            出典: 経済産業省 IT関連産業の給与等に関する実態調査（ITスペシャリスト平均・公的データ）。市場レンジは転職メディア集計の参考値で、母集団・定義により幅が大きいため目安としてご覧ください。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            年収レンジが約600〜1,300万円と非常に広いのは、「セキュリティ職」と一口に言っても役割の幅が大きいためです。ログ監視中心の運用ポジションと、全社のセキュリティ戦略を設計するアーキテクト／コンサルポジションでは、求められるスキルも年収も大きく異なります。支援士はどの層でも知識の裏づけになりますが、<strong>高年収帯に届くかどうかは「資格＋どこまで上流・難度の高い実務を担えるか」</strong>で決まります。資格はレンジの下限を底上げする効果は期待できても、上限を引き上げるのは実務の深さです。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scene" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される場面</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            支援士が効くのは、共通して「信頼性の説明が求められる場面」です。セキュリティ職は社内外の関係者に対し「なぜこの対策で十分なのか」を説明する責任を負うため、国家資格による知識の裏づけが交渉や提案の場で効いてきます。
          </p>
          <div className="space-y-3">
            {[
              { t: "セキュリティ運用・監視（SOC/CSIRT）", d: "インシデント対応・脆弱性管理の実務に、国家資格で体系知識を裏づけられる。" },
              { t: "セキュリティ監査・コンサル", d: "監査・アセスメント業務で、第三者への信頼性の説明材料として効く。" },
              { t: "公共・金融など信頼性重視の業界", d: "提案・調達要件で有資格者が評価される場面があり、組織側の信頼確保にもつながる。" },
              { t: "社内セキュリティ責任者（情報システム部門）", d: "事業会社の情報システム・セキュリティ統括ポジションで、知識の網羅性を示せる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人要件 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人で求められる要件</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            セキュリティ求人の頻出要件の傾向です（特定企業の数値ではなく、求人票の傾向に基づく整理）。
          </p>
          <div className="space-y-3">
            {[
              { t: "セキュリティ運用層", d: "ログ監視・インシデント一次対応・脆弱性スキャン運用。支援士が歓迎要件になりやすい。" },
              { t: "セキュリティ設計・監査層", d: "セキュリティ設計、リスクアセスメント、監査対応。支援士＋実務が応募要件になることがある。" },
              { t: "CISO/セキュリティ統括層", d: "全社のセキュリティ戦略・ガバナンス。資格より経営層との折衝・実績が中心。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            ※ リアルタイムの求人件数は変動が大きいため当サイトでは断定しません。最新は各エージェントの保有求人でご確認ください。
          </p>
        </section>

        {/* 掛け算 */}
        <section id="kakezan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30-40代の価値＝実務×国家資格</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層でこの資格が効くのは、<strong>運用・設計・監査といった実務の信頼性を、国家資格で客観的に補強できる</strong>からです。「インフラ運用やネットワークの実務×支援士」「監査経験×支援士」のように、既にある経験に掛け合わせると説得力が増します。
            </p>
            <p>
              逆に、セキュリティ実務がほぼない状態で資格だけ取っても、ミドルの中途採用では即戦力性が見えにくく評価が限定的です。<strong>資格は実務の信頼性を底上げする道具</strong>と捉えるのがミドルの正解です。
            </p>
            <p>
              ミドルならではの強みとして、「複数の現場を見てきた経験の幅」があります。インフラ・ネットワーク・アプリ開発など複数領域を渡ってきた人は、セキュリティを「点」ではなく「システム全体の中の一要素」として捉えられます。攻撃者は最も弱いところを突くため、全体を俯瞰できる視点は若手にはない武器です。<strong>その俯瞰力に支援士の体系知識を重ねると、運用担当を超えて設計・監査・統括ポジションへ進む道筋が見えてきます</strong>。
            </p>
            <p>
              職種側の市場感は<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>、隣接領域は<Link href="/skill/network/" className="text-petrol hover:underline">ネットワークエンジニア転職ガイド</Link>・<Link href="/career/devsecops/" className="text-petrol hover:underline">DevSecOpsキャリア</Link>も参考になります。
            </p>
          </div>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ・併取得資格</h2>
          <div className="space-y-3 mb-4">
            {[
              { n: "STEP 1", t: "応用情報で土台＋午前Ⅰ免除", d: "高度試験が初めてなら応用情報技術者に合格し、午前Ⅰの2年免除を確保する。" },
              { n: "STEP 2", t: "午後記述の対策", d: "支援士の山場は午後の記述式。実務に近い事例問題を繰り返し、設計・対応の言語化を鍛える。" },
              { n: "STEP 3", t: "合格後の登録判断", d: "『登録セキスペ』を名乗るかは維持費（3年約11.5万円〜）と継続意思を踏まえて判断する。" },
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
            併取得におすすめなのは、土台となる<Link href="/cert/" className="text-petrol hover:underline">応用情報技術者（資格一覧参照）</Link>と、クラウドセキュリティ領域を広げる<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>です。オンプレ＋クラウド双方のセキュリティを語れると市場価値が広がります。
          </p>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリット・限界</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>① <strong>登録維持費が継続的にかかる。</strong>「登録セキスペ」を名乗るには3年で約11.5万円〜の費用負担があります。</p>
            <p>② <strong>独占業務がまだ無い。</strong>名称独占にとどまり、資格者しかできない法定業務はありません。</p>
            <p>③ <strong>難易度が高い。</strong>午後の記述式が壁で、合格率は2割前後（IPA令和7年度）の難関です。</p>
            <p>④ <strong>実務なしでは評価が限定的。</strong>ミドルの転職では、資格より運用・設計・監査の実務経験が見られます。</p>
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
          <h2 className="text-xl font-bold mb-3">セキュリティ×国家資格を活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたの実務と資格がどう評価されるか、IT特化型エージェントで確認しましょう。
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
              { name: "エンジニア資格と転職（資格一覧）", href: "/cert/" },
              { name: "PMP資格と転職", href: "/cert/pmp/" },
              { name: "AWS認定資格と転職", href: "/cert/aws/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "DevSecOpsキャリア", href: "/career/devsecops/" },
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
