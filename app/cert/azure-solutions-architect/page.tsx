import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Azure Solutions Architect Expert（AZ-305）は転職に効くか｜上流クラウドの実力証明【2026年】";
const PAGE_DESC =
  "MicrosoftのAzure Solutions Architect Expert（AZ-305）を、30代・40代の経験者向けに解説。受験料・試験形式・前提資格・有効期限、上流／基盤設計職での評価、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/azure-solutions-architect/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Azureアーキはどんな経験者に効くか" },
  { id: "overview", label: "試験概要（受験料・形式・前提・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "加点資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝設計経験の客観証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AZ-305は40代の転職で意味がありますか？",
    a: "意味があります。Azure Solutions Architect Expert（AZ-305）はMicrosoftのロールベース認定の中でも上位（Expert）に位置づけられ、ID・ガバナンス・監視・データストレージ・事業継続・インフラ設計といった上流の設計力を問う試験です。すでにインフラ・基盤・クラウド移行の実務がある30〜40代にとって、その設計経験を客観的に裏づける加点資格として機能します。ただし資格単体で評価が決まるわけではなく、Azureの実プロジェクト経験とセットで効く点が前提です。",
  },
  {
    q: "AZ-305を受けるのに前提資格は必要ですか？",
    a: "必要です。Azure Solutions Architect Expertの認定を得るには、前提として『Azure Administrator Associate（AZ-104）』の認定が求められ、その上でAZ-305試験に合格する必要があります（Microsoft Learn、2026年6月時点）。つまり運用・管理の基礎（AZ-104）を押さえたうえで、設計（AZ-305）に進む二段構えです。",
  },
  {
    q: "Azureの認定資格に有効期限はありますか？",
    a: "あります。Microsoftのロールベース認定資格は取得後に有効期限があり、更新しないと失効します。更新はMicrosoft Learn上の無料オンライン評価に合格することで行え、費用はかかりません。常に最新のクラウド技術にキャッチアップしている証明にもなる仕組みです（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AZ-305の合格率はどのくらいですか？",
    a: "Microsoftは認定試験の合格率を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。合格基準は1000点満点中700点以上で、設問は選択式・ドラッグ＆ドロップ・ケーススタディなどで構成されます（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AWS認定とAzure、どちらを取るべきですか？",
    a: "現職や応募先で使われているクラウドに合わせるのが最も効率的です。Azureは大企業・官公庁やMicrosoft 365を基盤とする組織で採用が多く、AZ-305はそうした環境での上流設計に効きます。一方、Web系・スタートアップではAWSのシェアが高い傾向です。どちらが上というより『行きたい現場で使われているか』で選ぶのが現実的です。AWS側は当サイトのAWS認定ガイドも参照してください。",
  },
  {
    q: "未経験からAZ-305を狙うのは有効ですか？",
    a: "おすすめしません。AZ-305は前提としてAZ-104が必要で、内容も設計判断を問う上位試験です。クラウド未経験のミドルがいきなり狙うと費用対効果が低くなります。まずはAzureの基礎（AZ-900など）や運用（AZ-104）から段階的に積み上げ、実務経験と並行して設計に進むのが堅実です。",
  },
];

const overviewTable = [
  ["主催", "Microsoft"],
  ["試験番号", "AZ-305（Designing Microsoft Azure Infrastructure Solutions）"],
  ["レベル", "Expert（エキスパート・上位）"],
  ["前提資格", "Azure Administrator Associate（AZ-104）の認定が必要"],
  ["受験料", "国・地域により変動（米国は165 USD・税別／2026年6月時点）"],
  ["試験形式", "選択式・ドラッグ＆ドロップ・ケーススタディ"],
  ["合格基準", "1000点満点中700点以上"],
  ["合格率", "非公表（Microsoftは公表していない）"],
  ["有効期限", "あり（Microsoft Learnの無料更新評価で更新可能）"],
];

export default function AzureArchitectCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/azure-solutions-architect/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Azure Solutions Architect Expert" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Azure Solutions Architect Expert（AZ-305）は転職に効くか｜上流クラウドの実力証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | MicrosoftのAzure上流設計認定の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Azure Solutions Architect Expert（試験AZ-305）は、Microsoftのロールベース認定の中でも<strong>Expert（上位）に位置づけられる、Azure上流設計の認定</strong>です。本記事は「AZ-305を取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『経験者の加点資格』</strong>という観点から、上流・基盤設計職での評価、前提資格や有効期限の仕組みを公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Microsoft Learn 公式（learn.microsoft.com）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Azureアーキはどんな経験者に効くか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              AZ-305は<strong>「クラウド設計経験者の加点資格」</strong>です。入口資格とは性格が異なり、すでにインフラ・基盤・移行の実務があるミドルが<strong>上流（アーキテクチャ設計）へ役割を広げる土台</strong>として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>Azure実務のある30〜40代</strong>：設計経験を客観的に証明し、上流職で加点される</li>
              <li>② <strong>クラウド未経験のミドル</strong>：前提のAZ-104が必要で入口には不向き。基礎から段階的に</li>
              <li>③ <strong>大企業・官公庁・MS基盤の現場志望</strong>：Azure採用が多く、設計力の証明が効きやすい</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・前提・有効期限）</h2>
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
            出典: Microsoft Learn 公式（learn.microsoft.com、2026年6月時点）。受験料は試験を実施する国・地域により異なり、米国では165 USD（税別）です。日本円での正確な金額は登録前にPearson VUE等の試験プロバイダーで必ずご確認ください。合格率はMicrosoftが公表しておらず、当サイトでは創作しません。本認定はAzure Administrator Associate（AZ-104）を前提とし、取得後は有効期限があり、Microsoft Learnの無料更新評価で更新できます。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AZ-305保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。一般にクラウドアーキテクト・基盤設計職は単価が高い領域とされますが、それは資格ではなく<strong>設計・移行の実務経験と役割</strong>によって決まります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・クラウドアーキテクト職は高単価傾向（<strong>実務・役割が主因</strong>）</li>
              <li>・AZ-305は<strong>設計力の客観的な裏づけ</strong>として機能する加点材</li>
              <li>・実態：<strong>年収はAzureプロジェクト経験 × 資格の掛け算</strong>で決まる</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            注記: 資格保有を理由とする年収アップを当サイトは保証しません。公的な水準感の目安として、国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。クラウド単価はプロジェクト・役割で大きく変動します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "クラウド移行・基盤刷新プロジェクト", d: "オンプレからAzureへの移行設計やハイブリッド構成の提案で、設計判断の素養を示す土台になる。" },
              { t: "上流（アーキテクト・設計リード）への配置", d: "ID・ガバナンス・事業継続まで含めた全体設計力を、Expert認定が客観的に裏づける。" },
              { t: "大企業・官公庁・MS基盤の案件", d: "Microsoft 365やAzureを基盤とする組織で、Azure設計の信頼性として評価されやすい。" },
              { t: "提案・要件定義フェーズの担当", d: "利害関係者へのアドバイスやビジネス要件の設計への翻訳という、上流の役割への適性を示す。" },
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
            AZ-305が土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドアーキテクト（Azure）", d: "Azure上のクラウド・ハイブリッド構成を設計する上流職。AZ-305がそのまま職務に直結する。" },
              { t: "インフラ／基盤エンジニア（クラウド寄り）", d: "オンプレ経験を活かしつつ、クラウド移行・基盤設計に役割を広げる際の裏づけになる。" },
              { t: "プリセールス・ITコンサル寄り", d: "要件をAzure設計へ翻訳する力が、提案・コンサル領域で評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Azureそのものの市場感は<Link href="/skill/azure/" className="text-petrol hover:underline">Azureエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 加点資格としての活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">加点資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AZ-305は「入口資格」ではなく「上流の加点資格」です。この前提を理解すると、未経験向けの基礎資格とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">基礎・入口資格（AZ-900/AZ-104）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">AZ-305（上流の加点資格）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "クラウド入門〜運用担当", "設計経験のある中堅エンジニア"],
                  ["狙い", "基礎知識・運用力の証明", "アーキテクチャ設計力の客観証明"],
                  ["効き方", "間口を広げる・運用職への入口", "上流（設計・アーキ）への配置・信頼性"],
                  ["難度", "基礎〜アソシエイト", "エキスパート（前提資格あり）"],
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
            活用戦略は3つに整理できます。第一に<strong>上流への足がかり</strong>。運用・構築の経験者が、設計・アーキテクトへ役割を広げたい局面で説得力を持ちます。第二に<strong>クラウド移行案件への適性証明</strong>。事業継続・ガバナンスまで含めた全体設計の素養を示せます。第三に<strong>最新技術へのキャッチアップ証明</strong>。有効期限と無料更新の仕組みにより、常に現行のAzure知識を保っていることを示せます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。AZ-305は前提資格（AZ-104）が必要で<strong>学習コストが大きく、実務がないと取得後も活かしきれません</strong>。効果が出るのは「Azureプロジェクト経験 × 資格」が成立したときです。また有効期限があるため、取りっぱなしでは失効します。逆に言えば、すでにクラウド・基盤の現場経験があり上流を目指す30〜40代にとっては、投資する価値が明確な資格です。基礎が不安なら、まず<Link href="/skill/azure/" className="text-petrol hover:underline">Azure</Link>の運用経験を積んでから臨むのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝設計経験の客観証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              AZ-305は、基礎資格とは立ち位置が逆です。基礎資格が「クラウドに入るための入口」なのに対し、AZ-305は<strong>「すでに現場にいる経験者が、上流の設計へ役割を上げるための加点装置」</strong>として最も効きます。インフラ・移行・基盤の実務がある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。AZ-305を取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。クラウド移行や基盤設計の実績と組み合わせて初めて、アーキテクト職や高単価案件という形で結実します。さらに有効期限と無料更新の仕組みは、学び続ける姿勢の証明にもなります。
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
              { n: "STEP 1", t: "前提のAZ-104で運用基礎を固める", d: "Azure Administrator Associate（AZ-104）を取得し、運用・管理の土台を作る。AZ-305の前提条件でもある。" },
              { n: "STEP 2", t: "AZ-305で設計4領域を網羅", d: "ID/ガバナンス/監視、データストレージ、事業継続、インフラの4領域を、ケーススタディ形式に慣れながら対策する。" },
              { n: "STEP 3", t: "合格→実務で設計に関与し更新", d: "合格後は実プロジェクトで設計に関与し、有効期限前に無料更新評価で資格を維持する。" },
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
            他クラウドと比較するなら<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>や<Link href="/cert/gcp-pca/" className="text-petrol hover:underline">Google Cloud Professional Cloud Architect</Link>、上流・マネジメント方向は<Link href="/cert/pmp/" className="text-petrol hover:underline">PMP</Link>との組み合わせも有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
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
          <h2 className="text-xl font-bold mb-3">クラウド上流・設計職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            AZ-305を活かせるクラウドアーキテクト・基盤設計求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Azureエンジニア転職ガイド", href: "/skill/azure/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "GCP Professional Cloud Architect", href: "/cert/gcp-pca/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "PMP（プロジェクトマネジメント）", href: "/cert/pmp/" },
              { name: "資格で選ぶ転職ハブ", href: "/cert/" },
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
