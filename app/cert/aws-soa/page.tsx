import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWS認定SysOpsアドミニストレーター アソシエイト(SOA)は転職に効くか【2026年】";
const PAGE_DESC =
  "AWS認定SysOpsアドミニストレーター – アソシエイト（SOA）を、運用者の加点資格という観点から30代・40代向けに解説。受験料・試験形式・合格スコア・有効期限・出題範囲を公式情報で整理。2025年9月にCloudOps Engineer（SOA-C03）へ名称・内容が更新された経緯も含めてまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/aws-soa/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SOAは誰に効く資格か" },
  { id: "transition", label: "重要：CloudOps Engineerへの名称・内容変更" },
  { id: "overview", label: "試験概要（受験料・形式・合格基準）" },
  { id: "scope", label: "出題範囲（運用中心）" },
  { id: "value", label: "30代・40代経験者にとっての価値" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "SOAは40代の転職で意味がありますか？",
    a: "意味があります。SOA（AWS認定SysOpsアドミニストレーター – アソシエイト）は、AWS上のシステムの運用・監視・自動化の知識を体系的に示す『運用者の加点資格』です。オンプレの運用・監視・障害対応の実務を持つ30〜40代が、クラウド運用の作法に翻訳して示すことで、SRE・運用ポジションで加点されます。資格単体ではなく、運用実務との掛け算が前提です。",
  },
  {
    q: "SOAはCloudOps Engineerに変わったと聞きました。今も有効ですか？",
    a: "有効です。AWSは2025年9月30日に、本資格の新試験を『AWS認定CloudOpsエンジニア – アソシエイト（SOA-C03）』として更新しました。旧名称のSysOpsアドミニストレーター（SOA-C02）の最終受験日は2025年9月29日です。すでにSysOps版を取得済みの人は再受験不要で、取得日から3年間有効です。これから受験する場合は後継のCloudOps版（SOA-C03）が対象になります（AWS公式、2026年6月時点）。",
  },
  {
    q: "SOAの受験料はいくらですか？",
    a: "AWS公式（aws.amazon.com/jp）の表示では150 USD（日本での受験料は20,000円。いずれも税別、2026年6月時点）です。アソシエイトレベルの料金で、SAA・DVAと同水準。為替や改定で変動するため、最新は必ずAWS公式でご確認ください。",
  },
  {
    q: "SOAの試験形式と合格スコアを教えてください。",
    a: "アソシエイトレベルで、65問（択一選択／複数選択）・130分が基本です。スコアは100〜1,000のスケールスコアで報告され、合格に必要な最小スコアは720です。後継のCloudOps（SOA-C03）ではコンテナが範囲に加わり、マルチアカウント・マルチリージョンや自動化・IaCの比重が高まっています。最新の形式は公式試験ガイドでご確認ください（AWS公式、2026年6月時点）。",
  },
  {
    q: "SOAの合格率はどのくらいですか？",
    a: "AWSは合格率を公表していません。クラウド資格全般で各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。運用・監視・自動化の実務がある人ほど取り組みやすい傾向があります（AWS公式、2026年6月時点）。",
  },
  {
    q: "SOAに有効期限はありますか？",
    a: "あります。AWS認定は取得日から3年間有効で、再認定（更新）が必要です。SysOps版を取得済みの場合も、その取得日から3年間有効という扱いです（AWS公式、2026年6月時点）。",
  },
];

const overviewTable = [
  ["主催", "Amazon Web Services（AWS）"],
  ["試験コード", "SOA-C02（後継: CloudOps SOA-C03、2025年9月30日〜）"],
  ["受験料", "150 USD（日本での受験料 20,000円・いずれも税別）"],
  ["試験形式", "65問（択一選択／複数選択）"],
  ["試験時間", "130分"],
  ["合格基準", "100〜1,000のスケールスコアで720以上"],
  ["合格率", "AWSは合格率を公表していない"],
  ["有効期限", "3年（再認定が必要）"],
];

export default function CertAwsSoaPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/aws-soa/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "AWS認定SOA" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWS認定SysOpsアドミニストレーター – アソシエイト（SOA）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWS認定SOA（後継CloudOps）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWS認定SysOpsアドミニストレーター – アソシエイト（SOA）は、AWS上のシステムを運用・監視・自動化する力を問う、アソシエイトレベルの認定です。本記事は「SOAを取れば転職で有利になるか」という疑問に対し、<strong>『運用者の加点資格』</strong>という性格を軸に、公式情報（受験料・形式・合格基準・有効期限・出題範囲）と、<strong>2025年9月のCloudOps Engineerへの更新</strong>を踏まえて整理します。資格単体では年収が跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "AWS Certification 公式（aws.amazon.com/jp・SOA-C02／CloudOps SOA-C03）",
            "AWS Training and Certification Blog（試験更新・名称変更の告知）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SOAは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              SOAは<strong>「運用者の加点資格」</strong>です。最も効くのは<strong>「オンプレ運用・監視・障害対応の実務 × AWS運用の証明」</strong>という掛け算で、SRE・運用・基盤保守の立場で価値が出ます。資格単体で年収が上がる発想は禁物です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>運用・監視の実務がある30〜40代</strong>：クラウド運用の作法を証明し、SRE・運用職で加点される</li>
              <li>② <strong>運用未経験のミドル</strong>：資格だけで運用実務は埋めにくい。手を動かした経験とセットが必要</li>
              <li>③ <strong>有効期限3年</strong>：再認定が必要で、取りっぱなしにはできない</li>
            </ul>
          </div>
        </section>

        {/* 移行注意 */}
        <section id="transition" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">重要：CloudOps Engineerへの名称・内容変更</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              AWSは2025年に本資格を更新しました。<strong>旧名称「SysOpsアドミニストレーター – アソシエイト（SOA-C02）」の最終受験日は2025年9月29日</strong>、<strong>後継の「CloudOpsエンジニア – アソシエイト（SOA-C03）」の受験開始は2025年9月30日</strong>です。これから受験する場合は、後継のCloudOps版が対象になります。
            </p>
            <p>
              主な変更点として、<strong>コンテナが出題範囲に追加</strong>され、マルチアカウント・マルチリージョン構成、自動化・IaC（Infrastructure as Code）の比重が高まっています。なお名称変更が適用されるのはSOA-C03の合格者のみで、すでにSysOps版を保有している人に遡及されることはなく、<strong>取得済みの認定は取得日から3年間そのまま有効</strong>です。
            </p>
            <p className="text-xs text-slate-500">
              出典: AWS Training and Certification Blog／AWS Certification 公式（2026年6月時点）。最新の試験コード・範囲は必ずAWS公式でご確認ください。
            </p>
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
            出典: AWS Certification 公式（aws.amazon.com/jp、2026年6月時点）。受験料150 USD（日本20,000円）、アソシエイトレベルで65問・130分、合格はスケールスコア720以上、有効期限3年。AWSは合格率を公表していません。後継のCloudOps（SOA-C03）の最新の形式・範囲は公式試験ガイドでご確認ください。
          </p>
        </section>

        {/* 出題範囲 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出題範囲（運用中心）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SOA／CloudOpsは、設計より「運用」に軸足を置いた認定です。AWS公式の試験ガイドでは、おおむね次のような運用テーマから出題されます（後継SOA-C03ではコンテナや自動化の比重が増しています）。
          </p>
          <div className="space-y-3">
            {[
              { t: "モニタリング・ロギング・修復", d: "CloudWatch等による監視・ログ分析と、検知から自動修復までの運用設計。" },
              { t: "信頼性とビジネス継続性", d: "可用性確保、バックアップ・復旧、スケーリングによるサービス継続。" },
              { t: "デプロイ・プロビジョニング・自動化", d: "IaCやデプロイ自動化による、再現性のあるリソース構築と運用。" },
              { t: "セキュリティとコンプライアンス／ネットワークとコンテンツ配信", d: "アクセス制御・暗号化・ネットワーク運用、コスト・性能の最適化。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: AWS Certification 公式 試験ガイド（SOA-C02／CloudOps SOA-C03、2026年6月時点）。各分野の具体的な配点・対象サービスは公式の試験ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              クラウド運用の自動化・監視はSRE文化の広がりとともに重要度を増しており、運用を任せられる人材の需要は高止まりしています。SOA／CloudOpsは、<strong>オンプレで培った運用・監視・障害対応の経験を「クラウド運用の言語」に翻訳して示す</strong>道具になります。障害を未然に防ぎ、復旧を設計できる視点は、運用経験のある30〜40代の強みです。
            </p>
            <p>
              一方で過度な期待は禁物です。SOAは<strong>『AWS運用の基礎を体系的に理解している』ことの証明</strong>であって、現場での即戦力性そのものを保証するものではありません。価値が出るのは<strong>「運用実務 × 資格」の掛け算</strong>のとき。実際に監視・自動化・障害対応を回した経験と組み合わせて初めて、運用・SREポジションで結実します。
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
              { t: "クラウド運用・SREへの配置", d: "監視・自動修復・障害対応の知識を示し、運用を任せられる人材として加点される。" },
              { t: "AWS運用スキルの客観証明", d: "CloudWatch・自動化・IaCの運用知識を、応募時に客観的に示せる。" },
              { t: "資格手当・評価制度の対象", d: "AWS認定を手当・評価の対象とする企業が多く、社内評価の根拠になりやすい。" },
              { t: "DevOps・上位資格への布石", d: "運用自動化の知識を土台に、DevOpsや専門分野の認定へ広げやすい。" },
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
            SOA／CloudOpsが土台として活きる代表的な進路です（一般的な整理。求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウド運用エンジニア", d: "AWS上のシステムの監視・運用・障害対応を担う。運用設計の知識が直接活きる。" },
              { t: "SRE（サイトリライアビリティエンジニア）候補", d: "信頼性・自動化の視点が、SRE文化のチームで評価される土台になる。" },
              { t: "インフラ／プラットフォームエンジニア", d: "IaC・デプロイ自動化の知識を入口に、基盤運用の領域を広げていける。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自動化・運用方向は<Link href="/skill/devops/" className="text-petrol hover:underline">DevOpsエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">クラウド運用・SRE職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            SOA／CloudOpsを活かせる運用・SRE求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "AWS認定DVA（デベロッパー）", href: "/cert/aws-dva/" },
              { name: "AWS認定SAP（プロフェッショナル）", href: "/cert/aws-sap/" },
              { name: "DevOpsエンジニア転職ガイド", href: "/skill/devops/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
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
