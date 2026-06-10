import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWS認定ソリューションアーキテクト アソシエイト(SAA)は転職に効くか【2026年】";
const PAGE_DESC =
  "AWS認定ソリューションアーキテクト – アソシエイト（SAA-C03）を、経験者の加点資格という観点から30代・40代向けに解説。受験料・試験形式・合格スコア・有効期限・出題範囲を公式情報で整理し、クラウド移行需要のなかで実務とセットで効く理由と限界をまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SAAは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格基準）" },
  { id: "scope", label: "出題範囲（4分野）" },
  { id: "value", label: "30代・40代経験者にとっての価値" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "SAAは40代の転職で意味がありますか？",
    a: "意味があります。SAA（AWS認定ソリューションアーキテクト – アソシエイト）は、未経験の入口資格というより『経験者の加点資格』として機能します。オンプレ・インフラ・ネットワークの実務を持つ30〜40代が、クラウド移行需要のなかで実務とセットで示すことで、設計フェーズの担い手として加点されます。資格単体で年収が跳ねるわけではなく、実務経験との掛け算が前提です。",
  },
  {
    q: "SAAの受験料はいくらですか？",
    a: "AWS公式（aws.amazon.com/jp）の表示では150 USD（日本での受験料は20,000円。いずれも税別、2026年6月時点）です。アソシエイトレベルの料金で、為替や改定で変動するため、最新は必ずAWS公式でご確認ください。",
  },
  {
    q: "SAAの試験形式と合格スコアを教えてください。",
    a: "SAA-C03は65問（択一選択／複数選択）、試験時間130分です。スコアは100〜1,000のスケールスコアで報告され、合格に必要な最小スコアは720です。スケールスコアのため『720問正解』という意味ではない点に注意してください（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAAの合格率はどのくらいですか？",
    a: "AWSは合格率を公表していません。クラウド資格全般で各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。難易度の目安としては、AWS推奨で実務1年程度を想定したアソシエイトレベルと案内されています（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAAに有効期限はありますか？",
    a: "あります。AWS認定は取得日から3年間有効で、再認定（更新）が必要です。技術更新が速いクラウド領域で知識の鮮度を保つ仕組みとも言えますが、取りっぱなしにできない点はデメリットでもあります（AWS公式、2026年6月時点）。",
  },
  {
    q: "SAAとSAP（プロフェッショナル）はどちらを狙うべきですか？",
    a: "まずはSAAから入るのが定番です。SAAはアソシエイトレベルで、クラウド設計の基礎を体系的に示す位置づけ。上流・アーキテクト職で評価されるSAP（プロフェッショナル）は、より広く深い設計判断が問われる上位資格です。実務でAWS設計に関わる経験を積みながら、段階的にSAP → と進むのが現実的です。",
  },
];

const overviewTable = [
  ["主催", "Amazon Web Services（AWS）"],
  ["試験コード", "SAA-C03"],
  ["受験料", "150 USD（日本での受験料 20,000円・いずれも税別）"],
  ["試験形式", "65問（択一選択／複数選択）"],
  ["試験時間", "130分"],
  ["合格基準", "100〜1,000のスケールスコアで720以上"],
  ["合格率", "AWSは合格率を公表していない"],
  ["有効期限", "3年（再認定が必要）"],
];

export default function CertAwsSaaPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/aws-saa/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "AWS認定SAA" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWS認定ソリューションアーキテクト – アソシエイト（SAA）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWS認定SAA（SAA-C03）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWS認定ソリューションアーキテクト – アソシエイト（SAA-C03）は、AWS上でコスト効率と安全性、復元力を備えたシステムを設計する力を問う、アソシエイトレベルの認定です。本記事は「SAAを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『経験者の加点資格』</strong>という性格を軸に、公式情報（受験料・形式・合格基準・有効期限・出題範囲）をもとに整理します。資格単体では年収が跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "AWS Certification 公式（aws.amazon.com/jp・SAA-C03 試験概要）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SAAは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              SAAは<strong>「経験者の加点資格」</strong>です。クラウド移行需要が続くなか、最も効くのは<strong>「オンプレ・インフラの実務 × AWS設計の証明」</strong>という掛け算で、実務2〜3年とセットで価値が出ます。資格単体で年収が上がる発想は禁物です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>オンプレ／インフラ経験のある30〜40代</strong>：クラウド移行案件で設計の担い手として加点される</li>
              <li>② <strong>完全未経験のミドル</strong>：資格だけで実務未経験は埋めにくい。手を動かした成果物とセットが必要</li>
              <li>③ <strong>有効期限3年</strong>：再認定が必要で、取りっぱなしにはできない</li>
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
            出典: AWS Certification 公式（aws.amazon.com/jp、2026年6月時点）。受験料150 USD（日本20,000円）、65問・130分、合格はスケールスコア720以上、有効期限3年。AWSは合格率を公表していません。料金・条件は改定されることがあるため、最新は必ずAWS公式でご確認ください。
          </p>
        </section>

        {/* 出題範囲 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出題範囲（4分野）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SAA-C03は、AWS公式の試験ガイドで次の4分野から出題されます。設計の観点が中心で、運用や開発というより「どう組み合わせて設計するか」を問う構成です。
          </p>
          <div className="space-y-3">
            {[
              { t: "セキュアなアーキテクチャの設計", d: "認証・認可、ネットワーク・データの保護など、安全性を担保する設計判断。" },
              { t: "弾力性に優れた（復元力のある）アーキテクチャの設計", d: "可用性・耐障害性を確保し、障害時にも継続できる構成の設計。" },
              { t: "高パフォーマンスなアーキテクチャの設計", d: "スケーラブルで高性能なコンピューティング・ストレージ・ネットワークの選定。" },
              { t: "コストを最適化したアーキテクチャの設計", d: "要件を満たしつつコストを抑える、サービス選定とサイジングの最適化。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: AWS Certification 公式 試験ガイド（SAA-C03、2026年6月時点）。各分野の具体的な配点・対象サービスは公式の試験ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              企業のクラウド移行は今も続いており、AWS設計を担える人材の需要は高止まりしています。SAAはその文脈で、<strong>オンプレやインフラ、ネットワーク、Linuxで積み上げてきた経験を「クラウド設計の言語」に翻訳して示す道具</strong>になります。オンプレの事情を理解したうえで移行を設計できる人材は、クラウドしか知らない若手にはない強みを持ちます。
            </p>
            <p>
              一方で過度な期待は禁物です。SAAは<strong>『クラウドの基礎を体系的に理解している』ことの証明</strong>であって、現場での即戦力性そのものを保証するものではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。設計・運用経験と組み合わせて初めて、クラウド移行案件や設計ポジションという形で結実します。
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
              { t: "オンプレ→クラウド移行案件への配置", d: "移行の設計フェーズで、オンプレ事情を理解した設計者として加点される。" },
              { t: "クラウド設計スキルの客観証明", d: "AWS設計の基礎を体系的に理解していることを、応募時に客観的に示せる。" },
              { t: "資格手当・評価制度の対象", d: "AWS認定を手当・評価の対象とする企業が多く、社内評価の根拠になりやすい。" },
              { t: "上位資格・専門領域への布石", d: "SAAを土台に、プロフェッショナルや専門分野の認定へ進む足がかりになる。" },
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
            SAAが土台として活きる代表的な進路です（一般的な整理。求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドインフラエンジニア", d: "AWS上の基盤設計・構築を担う。SAAの設計知識が要件定義から構成設計までの土台になる。" },
              { t: "クラウド移行担当（SE）", d: "オンプレからの移行を設計・推進。現行環境の理解とAWS設計の両輪が評価される。" },
              { t: "ソリューションアーキテクト候補", d: "顧客要件をAWS構成へ落とし込む役割。SAAは入口の証明で、実務で深掘りしていく。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            インフラの土台は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>、自動化方向は<Link href="/skill/devops/" className="text-blue-600 hover:underline">DevOpsエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "公式試験ガイドで範囲を把握", d: "4分野（安全性・復元力・高パフォーマンス・コスト最適化）の対象サービスを公式ガイドで確認する。" },
              { n: "STEP 2", t: "無料利用枠でハンズオン", d: "VPC・EC2・S3・IAMなど主要サービスを実際に触り、設計判断を手を動かして理解する。" },
              { n: "STEP 3", t: "合格→実務／上位資格へ", d: "合格後はクラウド移行・設計の実務で深め、プロフェッショナル（SAP）など上位へ進む。" },
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
            次の一手は上位の<Link href="/cert/aws-sap/" className="text-blue-600 hover:underline">AWS認定SAP（プロフェッショナル）</Link>、開発寄りなら<Link href="/cert/aws-dva/" className="text-blue-600 hover:underline">AWS認定DVA</Link>、運用寄りなら<Link href="/cert/aws-soa/" className="text-blue-600 hover:underline">AWS認定SOA</Link>。Linuxの土台が不安なら<Link href="/cert/lpic/" className="text-blue-600 hover:underline">LPIC／LinuC</Link>との組み合わせも有効です。
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
          <h2 className="text-xl font-bold mb-3">クラウド設計・移行案件への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            SAAを活かせるクラウド移行・設計求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "AWS認定SAP（プロフェッショナル）", href: "/cert/aws-sap/" },
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
