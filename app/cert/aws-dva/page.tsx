import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWS認定デベロッパー アソシエイト(DVA)は転職に効くか【2026年】";
const PAGE_DESC =
  "AWS認定デベロッパー – アソシエイト（DVA-C02）を、開発者の加点資格という観点から30代・40代向けに解説。受験料・試験形式・合格スコア・有効期限・出題範囲を公式情報で整理し、アプリ開発×クラウドの掛け算で効く理由と限界をまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：DVAは誰に効く資格か" },
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
    q: "DVAは40代の転職で意味がありますか？",
    a: "意味があります。DVA（AWS認定デベロッパー – アソシエイト）は、アプリケーション開発者がAWS上での開発・デプロイ・運用の知識を体系的に示す『開発者の加点資格』です。サーバーレスやコンテナを使ったクラウドネイティブ開発が広がるなか、開発実務を持つ30〜40代が『クラウドで動くものを作れる』ことを証明する装置になります。資格単体ではなく、開発実務との掛け算が前提です。",
  },
  {
    q: "DVAの受験料はいくらですか？",
    a: "AWS公式（aws.amazon.com/jp）の表示では150 USD（日本での受験料は20,000円。いずれも税別、2026年6月時点）です。アソシエイトレベルの料金で、SAA・SOAと同水準。為替や改定で変動するため、最新は必ずAWS公式でご確認ください。",
  },
  {
    q: "DVAの試験形式と合格スコアを教えてください。",
    a: "DVA-C02は65問（択一選択／複数選択）、試験時間130分です。スコアは100〜1,000のスケールスコアで報告され、合格に必要な最小スコアは720です。SAAと同じアソシエイトレベルの形式ですが、設計より開発・デプロイ・運用に寄った出題が特徴です（AWS公式、2026年6月時点）。",
  },
  {
    q: "DVAの合格率はどのくらいですか？",
    a: "AWSは合格率を公表していません。クラウド資格全般で各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。難易度の目安としては、SAAと同じアソシエイトレベルで、開発実務がある人ほど取り組みやすい傾向があります（AWS公式、2026年6月時点）。",
  },
  {
    q: "DVAに有効期限はありますか？",
    a: "あります。AWS認定は取得日から3年間有効で、再認定（更新）が必要です。技術更新が速いクラウド領域で知識の鮮度を保つ仕組みであり、取りっぱなしにはできない点はデメリットでもあります（AWS公式、2026年6月時点）。",
  },
  {
    q: "DVAとSAA、開発者はどちらを取るべきですか？",
    a: "開発を主務とするならDVAが直接効きます。DVAはLambdaやAPI Gateway、DynamoDBなどを使った開発・デプロイ・トラブルシューティングに寄った内容で、コードを書く立場の証明になります。一方、設計全般の土台を広く押さえたいならSAAも有効です。開発実務がある人はDVAから入り、必要に応じてSAAへ広げるのが効率的です。",
  },
];

const overviewTable = [
  ["主催", "Amazon Web Services（AWS）"],
  ["試験コード", "DVA-C02"],
  ["受験料", "150 USD（日本での受験料 20,000円・いずれも税別）"],
  ["試験形式", "65問（択一選択／複数選択）"],
  ["試験時間", "130分"],
  ["合格基準", "100〜1,000のスケールスコアで720以上"],
  ["合格率", "AWSは合格率を公表していない"],
  ["有効期限", "3年（再認定が必要）"],
];

export default function CertAwsDvaPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/aws-dva/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "AWS認定DVA" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWS認定デベロッパー – アソシエイト（DVA）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWS認定DVA（DVA-C02）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWS認定デベロッパー – アソシエイト（DVA-C02）は、AWS上でアプリケーションを開発・デプロイ・運用する力を問う、アソシエイトレベルの認定です。本記事は「DVAを取れば転職で有利になるか」という疑問に対し、<strong>『開発者の加点資格』</strong>という性格を軸に、公式情報（受験料・形式・合格基準・有効期限・出題範囲）をもとに整理します。資格単体では年収が跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "AWS Certification 公式（aws.amazon.com/jp・DVA-C02 試験概要）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：DVAは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              DVAは<strong>「開発者の加点資格」</strong>です。最も効くのは<strong>「アプリ開発の実務 × AWSでの開発・デプロイの証明」</strong>という掛け算で、クラウドネイティブ開発に関わる立場で価値が出ます。資格単体で年収が上がる発想は禁物です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>開発実務のある30〜40代</strong>：クラウドで動くものを作れることを証明し、開発職で加点される</li>
              <li>② <strong>開発未経験のミドル</strong>：資格だけで開発実務は埋めにくい。成果物とセットが必要</li>
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
            DVA-C02は、AWS公式の試験ガイドで次の4分野から出題されます。設計よりも、実際にコードを書いてAWS上にデプロイし、運用する観点が中心です。
          </p>
          <div className="space-y-3">
            {[
              { t: "AWSのサービスによる開発", d: "Lambda・API Gateway・DynamoDBなどを用いたアプリケーション開発とイベント駆動の実装。" },
              { t: "セキュリティ", d: "IAM・認証認可、暗号化、機密情報の管理など、アプリのセキュアな実装。" },
              { t: "デプロイ", d: "CI/CDやデプロイ戦略、コンテナ・サーバーレスのデプロイ手法。" },
              { t: "トラブルシューティングと最適化", d: "ログ・モニタリングによる障害切り分けと、パフォーマンス・コストの最適化。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: AWS Certification 公式 試験ガイド（DVA-C02、2026年6月時点）。各分野の具体的な配点・対象サービスは公式の試験ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              サーバーレスやコンテナを前提としたクラウドネイティブ開発が一般化するなか、DVAは<strong>これまでのアプリ開発経験を「AWS上で動くものを作れる」証明に翻訳する</strong>道具になります。オンプレやモノリスの開発経験を持つ30〜40代が、クラウド前提の開発・デプロイの作法を体系的に押さえ直すうえでも有効です。
            </p>
            <p>
              一方で過度な期待は禁物です。DVAは<strong>『AWSでの開発の基礎を体系的に理解している』ことの証明</strong>であって、現場での即戦力性そのものを保証するものではありません。価値が出るのは<strong>「開発実務 × 資格」の掛け算</strong>のとき。実際に動くアプリを作り、デプロイした経験と組み合わせて初めて、開発ポジションで結実します。
            </p>
            <p>
              加えて、DVAで問われるデプロイやトラブルシューティングの知識は、開発と運用の境界をまたぐ場面でそのまま役立ちます。CI/CDパイプラインを整え、ログとモニタリングで障害を切り分け、コストとパフォーマンスを意識して実装を改善する。こうした一連の流れを理解している開発者は、チームのなかで設計から運用までを見渡せる存在として重宝されます。30〜40代がこれまで現場で培ってきた「壊れにくいものを作る」という感覚は、クラウドネイティブ開発でも確実に強みになります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職種としての全体像は<Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "クラウドネイティブ開発への配置", d: "サーバーレス・コンテナ開発の案件で、AWS開発の作法を理解した開発者として加点される。" },
              { t: "AWS開発スキルの客観証明", d: "Lambda・API Gateway等を使った開発・デプロイの知識を、応募時に客観的に示せる。" },
              { t: "資格手当・評価制度の対象", d: "AWS認定を手当・評価の対象とする企業が多く、社内評価の根拠になりやすい。" },
              { t: "DevOps・上位資格への布石", d: "デプロイ・運用の知識を土台に、DevOpsや専門分野の認定へ広げやすい。" },
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
            DVAが土台として活きる代表的な進路です（一般的な整理。求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドアプリケーション開発者", d: "AWS上で動くアプリを設計・実装する。サーバーレス・コンテナ開発の知識が直接活きる。" },
              { t: "バックエンドエンジニア（クラウド寄り）", d: "API・データストア・イベント駆動の実装で、AWSサービスの理解が要件を満たす土台になる。" },
              { t: "DevOps／プラットフォームエンジニア候補", d: "デプロイ・CI/CDの知識を入口に、運用自動化の領域へ広げていける。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自動化・運用方向は<Link href="/skill/devops/" className="text-petrol hover:underline">DevOpsエンジニア転職ガイド</Link>、設計全般は<Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "公式試験ガイドで範囲を把握", d: "開発・セキュリティ・デプロイ・トラブルシュートの4分野と対象サービスを公式ガイドで確認する。" },
              { n: "STEP 2", t: "無料利用枠で開発ハンズオン", d: "LambdaやDynamoDB、API Gatewayで小さなアプリを作り、デプロイまで手を動かす。" },
              { n: "STEP 3", t: "合格→実務／上位資格へ", d: "合格後はクラウド開発の実務で深め、DevOpsや専門分野の認定へ横展開する。" },
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
            設計を広げるなら<Link href="/cert/aws-saa/" className="text-petrol hover:underline">AWS認定SAA</Link>、運用寄りなら<Link href="/cert/aws-soa/" className="text-petrol hover:underline">AWS認定SOA</Link>、上流を目指すなら<Link href="/cert/aws-sap/" className="text-petrol hover:underline">AWS認定SAP（プロフェッショナル）</Link>へ。
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
          <h2 className="text-xl font-bold mb-3">クラウド開発職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            DVAを活かせるクラウド開発・サーバーレス案件を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "AWS認定SAA（アソシエイト）", href: "/cert/aws-saa/" },
              { name: "AWS認定SOA（SysOps）", href: "/cert/aws-soa/" },
              { name: "AWS認定SAP（プロフェッショナル）", href: "/cert/aws-sap/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
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
