import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWS認定ソリューションアーキテクト プロフェッショナル(SAP)は転職に効くか【2026年】";
const PAGE_DESC =
  "AWS認定ソリューションアーキテクト – プロフェッショナル（SAP-C02）を、上流・アーキテクト職での評価という観点から30代・40代向けに解説。受験料・試験形式・合格スコア・有効期限・出題範囲を公式情報で整理し、難関上位資格としての価値と限界をまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SAPは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格基準）" },
  { id: "scope", label: "出題範囲（4分野）" },
  { id: "value", label: "30代・40代経験者にとっての価値" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "steps", label: "取得3ステップ／前提となる資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "SAPは40代の転職で意味がありますか？",
    a: "意味があります。SAP（AWS認定ソリューションアーキテクト – プロフェッショナル）は上位の難関資格で、上流・アーキテクト職で評価されやすい性格を持ちます。複雑なマルチアカウント・マルチリージョン環境の設計判断が問われるため、設計・移行の実務を積んだ30〜40代が専門性を一段引き上げる装置として機能します。資格単体ではなく、設計実務との掛け算が前提です。",
  },
  {
    q: "SAPの受験料はいくらですか？",
    a: "AWS公式（aws.amazon.com/jp）の表示では300 USD（日本での受験料はプロフェッショナルレベルで40,000円が目安。いずれも税別、2026年6月時点）です。アソシエイトの倍の料金水準で、為替や改定で変動するため、最新は必ずAWS公式でご確認ください。",
  },
  {
    q: "SAPの試験形式と合格スコアを教えてください。",
    a: "SAP-C02は75問（択一選択／複数選択）、試験時間180分です。スコアは100〜1,000のスケールスコアで報告され、合格に必要な最小スコアは750です。アソシエイト（720）より高い合格基準が設定されており、問題量・難度ともにアソシエイトを大きく上回ります（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAPの合格率はどのくらいですか？",
    a: "AWSは合格率を公表していません。クラウド資格全般で各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。一般にプロフェッショナルはAWS認定の中でも最難関クラスとされ、相応の実務経験と学習時間が必要です（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAPに有効期限はありますか？",
    a: "あります。AWS認定は取得日から3年間有効で、再認定（更新）が必要です。プロフェッショナルも例外ではなく、技術更新の速いクラウド領域で知識の鮮度を保つ仕組みです（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAAを取らずに直接SAPを受けられますか？",
    a: "受けられます。現在のAWS認定はアソシエイトの保有が前提条件ではないため、SAAを取得していなくてもSAPに挑戦できます。ただしSAPは設計の幅と深さを問う難関資格のため、アソシエイトレベルの知識と設計実務を踏まえてから臨むのが現実的です。",
  },
];

const overviewTable = [
  ["主催", "Amazon Web Services（AWS）"],
  ["試験コード", "SAP-C02"],
  ["受験料", "300 USD（日本での受験料 40,000円目安・いずれも税別）"],
  ["試験形式", "75問（択一選択／複数選択）"],
  ["試験時間", "180分"],
  ["合格基準", "100〜1,000のスケールスコアで750以上"],
  ["合格率", "AWSは合格率を公表していない"],
  ["有効期限", "3年（再認定が必要）"],
];

export default function CertAwsSapPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/aws-sap/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "AWS認定SAP" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWS認定ソリューションアーキテクト – プロフェッショナル（SAP）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWS認定SAP（SAP-C02）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWS認定ソリューションアーキテクト – プロフェッショナル（SAP-C02）は、複雑な要件をAWS上の最適なアーキテクチャへ落とし込む力を問う、AWS認定の上位（プロフェッショナル）資格です。本記事は「SAPを取れば転職で有利になるか」という疑問に対し、<strong>上流・アーキテクト職で評価される難関上位資格</strong>という性格を軸に、公式情報（受験料・形式・合格基準・有効期限・出題範囲）をもとに整理します。資格単体では年収が跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "AWS Certification 公式（aws.amazon.com/jp・SAP-C02 試験概要）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SAPは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              SAPは<strong>上流・アーキテクト職で評価される難関上位資格</strong>です。最も効くのは<strong>「設計・移行の実務 × プロフェッショナル認定」</strong>の掛け算で、複雑な環境の設計判断を任される立場で価値が出ます。入門資格ではなく、専門性を一段引き上げるための資格です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>設計・移行の実務がある30〜40代</strong>：アーキテクト・上流ポジションで強く加点される</li>
              <li>② <strong>クラウド初学者</strong>：難度が高く入口には不向き。まずアソシエイト（SAA）で土台を作るべき</li>
              <li>③ <strong>有効期限3年</strong>：プロフェッショナルも再認定が必要で、取りっぱなしにできない</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格基準）</h2>
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
            出典: AWS Certification 公式（aws.amazon.com/jp、2026年6月時点）。受験料300 USD（日本でのプロフェッショナル受験料は40,000円が目安）、75問・180分、合格はスケールスコア750以上、有効期限3年。AWSは合格率を公表していません。料金・条件は改定されることがあるため、最新は必ずAWS公式でご確認ください。
          </p>
        </section>

        {/* 出題範囲 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出題範囲（4分野）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SAP-C02は、AWS公式の試験ガイドで次の4分野から出題されます。アソシエイトより広く深く、組織全体を見据えた設計・移行・最適化の判断が問われます。
          </p>
          <div className="space-y-3">
            {[
              { t: "複雑な組織に対応するソリューションの設計", d: "マルチアカウント・マルチリージョン環境やネットワーク接続、ガバナンスを踏まえた設計。" },
              { t: "新しいソリューションのための設計", d: "要件に対し、コスト・性能・セキュリティを最適化した新規アーキテクチャの設計。" },
              { t: "既存ソリューションの継続的な改善", d: "稼働中システムの可用性・性能・運用・コストを継続的に改善する設計判断。" },
              { t: "ワークロードの移行とモダナイゼーションの加速", d: "オンプレや既存環境のAWSへの移行戦略と、モダン化（リファクタリング等）の設計。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: AWS Certification 公式 試験ガイド（SAP-C02、2026年6月時点）。各分野の具体的な配点・対象サービスは公式の試験ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              クラウド移行が大規模化・複雑化するなか、組織全体のアーキテクチャを設計できる人材は希少です。SAPは、<strong>設計・移行で積み上げてきた実務経験を「プロフェッショナルレベルの設計判断」として証明する</strong>装置になります。マルチアカウント設計やコスト最適化、移行戦略といった上流の判断は、実務経験のある30〜40代の得意領域でもあります。
            </p>
            <p>
              一方で過度な期待は禁物です。SAPは<strong>難関ではあるものの、それ単体で年収が跳ねる資格ではありません</strong>。価値が出るのは<strong>「設計・移行実務 × プロフェッショナル認定」の掛け算</strong>のとき。アーキテクト・上流ポジションへの配置や、より複雑な案件のアサインという形で結実します。逆に言えば、すでに設計実務があり上流を目指すミドルにとっては、投資する価値が明確な資格です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職種としての全体像は<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWSエンジニア転職ガイド</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "アーキテクト・上流ポジションへの応募", d: "複雑な設計判断を担えることの証明として、アーキテクト求人で強く加点される。" },
              { t: "大規模クラウド移行案件のリード", d: "マルチアカウント・移行戦略の設計力を示し、移行プロジェクトの中核を担える。" },
              { t: "技術選定・レビューの責任者", d: "コスト・性能・セキュリティのトレードオフを判断する立場での信頼性が高まる。" },
              { t: "コンサル・SIの提案力強化", d: "顧客の複雑な要件をAWS構成へ落とし込む提案フェーズでの説得力につながる。" },
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
            SAPが土台として活きる代表的な進路です（一般的な整理。求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "ソリューションアーキテクト", d: "顧客・組織の要件をAWS構成へ落とし込む中核職。プロフェッショナルの設計力が直接活きる。" },
              { t: "クラウド移行アーキテクト", d: "大規模移行の戦略・設計をリード。マルチアカウント・モダナイゼーションの知見が評価される。" },
              { t: "テックリード／プリセールス", d: "技術選定や提案の責任者として、設計の幅と深さが説得力の源泉になる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自動化・基盤運用の方向は<Link href="/skill/devops/" className="text-blue-600 hover:underline">DevOpsエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／前提となる資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "アソシエイトの知識を固める", d: "前提条件ではないが、SAAレベルの設計知識を土台にしてから臨むのが現実的。" },
              { n: "STEP 2", t: "複雑設計・移行を深掘り", d: "マルチアカウント、移行戦略、コスト最適化など、上流の設計判断を体系的に学ぶ。" },
              { n: "STEP 3", t: "合格→アーキテクト職へ", d: "合格後はアーキテクト・移行リードの実務で深め、専門分野の認定へ横展開する。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-blue-600 shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            土台が不安なら<Link href="/cert/aws-saa/" className="text-blue-600 hover:underline">AWS認定SAA（アソシエイト）</Link>から、開発寄りなら<Link href="/cert/aws-dva/" className="text-blue-600 hover:underline">AWS認定DVA</Link>、運用寄りなら<Link href="/cert/aws-soa/" className="text-blue-600 hover:underline">AWS認定SOA</Link>も併せて検討してください。
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
          <h2 className="text-xl font-bold mb-3">アーキテクト・上流職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            SAPを活かせるアーキテクト・移行リード求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "AWS認定SAA（アソシエイト）", href: "/cert/aws-saa/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "AWS認定DVA（デベロッパー）", href: "/cert/aws-dva/" },
              { name: "AWS認定SOA（SysOps）", href: "/cert/aws-soa/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
