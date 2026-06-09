import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Azureエンジニアの転職完全ガイド｜年収・資格・AWSとの違い【2026年】";
const PAGE_DESC =
  "Azure（Microsoft Azure）エンジニアの転職を2026年最新データで解説。AWS以外を選ぶ理由（エンタープライズ・M365統合）、MS認定（AZ-900→AZ-104→AZ-305）、採用が活発な業界、C#/.NET親和性、SES脱出ルートを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "結論：AzureをAWSではなく選ぶ理由" },
  { id: "market", label: "市場・年収データ" },
  { id: "industry", label: "採用が活発な業界（AWSと客層が違う）" },
  { id: "cert", label: "Microsoft認定資格（AZ系）の体系" },
  { id: "skill", label: "求められるスキルとC#/.NET親和" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスとSES脱出" },
  { id: "entry", label: "未経験・経験浅めからのロードマップ" },
  { id: "middle", label: "30代・40代の視点とデメリット" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AzureエンジニアとAWSエンジニアの違いは何ですか？",
    a: "技術基盤の違いに加え、活躍する業界・客層が異なります。AWSはWeb系・スタートアップから大手まで幅広い一方、AzureはMicrosoft 365（M365）やActive Directoryと統合したエンタープライズ・業務系システムで採用が活発です。大手SIer・コンサル・金融・製造業のIoT・公共系など、AWSとは客層が違う領域に強いのが特徴です。C#/.NETとの親和性も高く、業務系出身のエンジニアと相性が良いです。AWS側は",
    aLink: { href: "/skill/aws/", label: "AWSエンジニア転職ガイド" },
    aTail: "を合わせてご覧ください。",
  },
  {
    q: "Azureエンジニアの平均年収はどのくらいですか？",
    a: "Azure専用の給料統計は確認できないため、近接区分の参考値を示します。求人ボックス給料ナビではソフトウェアエンジニア約511万円、システムエンジニア約516万円、ITエンジニア約478万円です（2026年6月時点・動的に変動）。クラウド系は条件が整った求人が多く、これらより上振れしやすい傾向です。媒体推定では600〜1,400万円、フリーランス平均約928万円という幅のある値も示されています（各社推定・幅あり）。単一の数値で断定せず、役割・業界で変わる前提でご覧ください。",
  },
  {
    q: "Azureの求人数はどのくらいありますか？",
    a: "Azureの求人数は媒体によって大きく差が出るため、特定の件数で断定するのは避けるべきです（媒体により幅があります）。傾向としては、エンタープライズ・業務系の比率が高く、大手SIerやコンサル経由の案件が目立ちます。求人数だけでなく、自分が狙う業界（金融・製造・公共など）と案件の中身が合うかで見極めるのが現実的です。",
  },
  {
    q: "Microsoft認定資格（AZ系）は転職で有利ですか？",
    a: "AZ-900（基礎）→ AZ-104（運用・管理）→ AZ-305（設計）が王道ルートです（Microsoft Learn公式の認定体系）。エンタープライズ案件では資格を要件・歓迎条件に挙げる企業が比較的多く、書類段階の通過に効きやすいです。ただし資格単体より、学習で得た知識を実務でどう使ったかを語れるかが評価の分かれ目です。",
  },
  {
    q: "C#/.NETの経験はAzure転職で活きますか？",
    a: "強く活きます。AzureはMicrosoftエコシステムとの統合が強みで、C#/.NETでの業務系開発経験者はクラウド移行・刷新案件で重宝されます。業務系SE・SIer出身でC#経験がある方は、AzureとAZ認定を足すことで市場価値を上げやすいです。C#のキャリアは",
    aLink: { href: "/skill/csharp/", label: "C#エンジニア転職ガイド" },
    aTail: "も参考になります。",
  },
  {
    q: "SES・客先常駐からAzureエンジニアで脱出できますか？",
    a: "現実的なルートの一つです。AZ-104などの認定取得と、Azure上での小規模な構築・移行の実績づくりをセットにすると、自社開発や上流の設計・移行案件に移りやすくなります。前職の業務系・インフラ運用経験は「移行プロジェクトで活きる経験」として語れます。インフラ全般は",
    aLink: { href: "/skill/infrastructure/", label: "インフラエンジニア転職ガイド" },
    aTail: "も接続先です。",
  },
  {
    q: "40代でもAzureエンジニアへ転職できますか？",
    a: "上流の設計・運用・移行経験があれば十分に可能です。レバテック公表の正社員SE年代別平均は40代約618万円、年収1,000万円以上の割合は40代で12.67%（2025年）と、ミドル層でも高年収帯が一定数あります。Azureはエンタープライズ案件が多く、業務理解とマネジメント要素が評価されやすいため、ミドルの経験が活きやすい領域です。",
  },
];

const salaryRef = [
  ["ソフトウェアエンジニア", "約511万円", "クラウド系はここから上振れしやすい"],
  ["システムエンジニア（SE）", "約516万円", "業務系SE出身のAzure転職の目安帯"],
  ["ITエンジニア", "約478万円", "幅広い職種を含む参考値"],
];

const certTable = [
  ["基礎（Fundamentals）", "AZ-900（Azure Fundamentals）", "クラウド全体像の理解。学習の入口"],
  ["アソシエイト（Associate）", "AZ-104（Azure Administrator）", "運用・管理の実務想定。転職でまず狙う層"],
  ["エキスパート（Expert）", "AZ-305（Azure Solutions Architect Expert）", "設計の上流。エンタープライズ案件で評価"],
];

export default function AzureSkillPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? `（${faq.aLink.label}）${faq.aTail ?? ""}` : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/azure/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Azureエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Azureエンジニアの転職完全ガイド｜年収・資格・AWSとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Azure（Microsoft Azure）スキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Azure（Microsoft Azure）は売り手市場が続くクラウドですが、その価値はAWSとは違う場所にあります。Microsoft 365やActive Directoryと統合したエンタープライズ・業務系システム、大手SIer・コンサル・金融・製造IoT・公共といった「AWSとは客層の違う領域」で採用が活発です。本記事は、すでに公開している
          <Link href="/skill/aws/" className="text-blue-600 hover:underline">AWSエンジニア転職ガイド</Link>
          と検索意図を分け、「<strong>AWSではなくAzureを選ぶ理由</strong>」に焦点を当てて整理します。GCPとの比較は
          <Link href="/skill/gcp/" className="text-blue-600 hover:underline">GCPエンジニア転職ガイド</Link>
          をご覧ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2026年6月時点・動的集計・近接区分）",
            "Microsoft Learn 認定資格 公式",
            "レバテック公表 年代別平均年収（2025年）",
            "各社推定（媒体二次情報・幅あり）",
          ]}
        />

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

        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AzureをAWSではなく選ぶ理由</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。Azure転職の核心は、<strong>「AWSの代替」ではなく「エンタープライズ・業務系に強いクラウド」として自分を位置づけること</strong>です。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>M365・Active Directory・業務系統合</strong>という、AWSとは違う土俵で価値を出す</li>
              <li>② 認定は<strong>AZ-900 → AZ-104 → AZ-305</strong>を軸に、学習内容を実務へ紐づけて語る</li>
              <li>③ <strong>C#/.NET経験</strong>がある業務系SE・SIer出身なら、Azureを足して市場価値を上げる</li>
            </ul>
            <p className="text-xs text-slate-600 mt-3">
              「Web系・幅広い求人」を狙うなら
              <Link href="/skill/aws/" className="text-blue-700 underline">AWS</Link>、
              「データ・ML志向」なら
              <Link href="/skill/gcp/" className="text-blue-700 underline ml-0">GCP</Link>
              が向きます。
            </p>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azure専用の給料統計は確認できないため、近接区分の参考値を示します。求人ボックス給料ナビの値は次のとおりです（2026年6月時点・動的に変動する集計値）。クラウド系は条件が整った求人が多く、これらより<strong>上振れしやすい</strong>点に留意してください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">近接区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Azure転職での見方</th>
                </tr>
              </thead>
              <tbody>
                {salaryRef.map(([k, v, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            媒体推定では600〜1,400万円、フリーランス平均約928万円という幅のある値も示されています（各社推定・幅あり）。単一の数値を「相場」と断定するのは避け、役割・業界で大きく変わる前提でご覧ください。より安定した年代別の水準感は、レバテック公表の正社員SE年代別平均年収（参考値）が役立ちます。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 求人ボックス給料ナビ（2026年6月時点・動的集計・近接区分の参考値）、レバテック公表の年代別平均年収（2025年／30代約499万円・40代約618万円、年収1,000万円以上の割合は40代で12.67%）。市場の中長期トレンドは、経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しています。
          </p>
        </section>

        <section id="industry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">採用が活発な業界（AWSと客層が違う）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azure案件が集まりやすいのは、Microsoft製品との統合ニーズが強い領域です。ここがAWSと最も差が出るポイントです。
          </p>
          <div className="space-y-3">
            {[
              { t: "大手SIer・コンサル", d: "基幹システムのクラウド移行・刷新でAzureを採用するケースが多い。上流の設計・PM経験が活きる。" },
              { t: "金融", d: "セキュリティ・ガバナンス要件が厳しく、Microsoftとの契約関係から Azure採用が進む領域。" },
              { t: "製造業（IoT）", d: "工場・設備のデータ収集・分析でAzure IoT/データ基盤を使う案件が増加。" },
              { t: "公共・自治体系", d: "M365導入と一体でAzureを採用する流れがあり、業務系の安定案件が多い。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Microsoft認定資格（AZ系）の体系</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azureの認定は、基礎・アソシエイト・エキスパートの区分で整理されています。転職でまず狙うのはAZ-104、上流を狙うならAZ-305が王道です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">代表的な資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職での位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([cat, name, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: Microsoft Learn 認定資格 公式（learn.microsoft.com/certifications、2026年6月時点）</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            エンタープライズ案件では資格を歓迎条件に挙げる企業が比較的多く、書類段階の通過に効きやすいです。とはいえ、AZ-305の学習で得た設計知識を実際の移行・刷新にどう適用したかを語れることが、最終的な評価を決めます。
          </p>
        </section>

        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキルとC#/.NET親和</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azureは仮想マシン・ネットワーク・ストレージといった基盤に加え、Microsoftエコシステムとの統合スキルが評価されます。特にC#/.NETでの業務系開発経験は強い武器です。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Azure VM / VNet / Storage / Entra ID（旧Azure AD）の基本構成</li>
            <li>✓ App Service / Azure Functions など .NETアプリのデプロイ・運用</li>
            <li>✓ Azure DevOps / GitHub Actions によるCI/CD</li>
            <li>✓ IaC（Bicep / ARM / Terraform）での構成管理</li>
            <li>✓ M365 / Entra ID との認証・ガバナンス統合</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            C#の市場価値は
            <Link href="/skill/csharp/" className="text-blue-600 hover:underline">C#エンジニア転職ガイド</Link>、
            インフラ基礎は
            <Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>
            が参考になります。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azure求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "実務1〜3年層（構築・運用）", d: "VM/VNet/Storage/Entra IDの基本構成、Azure Monitorでの監視、簡単な障害対応。AZ-104が歓迎要件になりやすい。" },
              { t: "実務3〜6年層（設計・移行）", d: "App Service/Functions、Azure DevOps、IaC（Bicep/Terraform）、基幹システムのクラウド移行。年収帯が一段上がる中核ゾーン。" },
              { t: "実務6年以上層（アーキテクト）", d: "全体アーキテクチャ設計、ガバナンス・セキュリティ、M365統合、コスト最適化。AZ-305が後押しになる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスとSES脱出</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                Azure上のエンタープライズ全体設計を担う方向。AZ-305と大規模移行経験が武器になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SES・客先常駐からの脱出路線</h3>
              <p className="text-sm text-blue-700">
                AZ認定＋小規模な構築・移行実績をセットにし、自社開発や上流設計へ移る道。前職の業務系・運用経験は移行案件で活きます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ・ガバナンス特化路線</h3>
              <p className="text-sm text-blue-700">
                金融・公共向けにEntra ID設計やコンプライアンス対応を担う方向。
                <Link href="/career/devsecops/" className="text-blue-700 underline ml-1">DevSecOpsキャリア</Link>
                も関連します。
              </p>
            </div>
          </div>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・経験浅めからのロードマップ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Azure実務が浅い、あるいは業務系・オンプレ中心だった方の現実的な道筋です。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "土台の棚卸し", d: "ネットワーク・Windows Server・C#/.NETなどの経験を整理。Azureでそのまま価値になる。" },
              { n: "STEP 2", t: "AZ-900 → AZ-104", d: "基礎のAZ-900で全体像をつかみ、AZ-104で運用・管理の実務知識を固める。" },
              { n: "STEP 3", t: "無料枠で構築＆移行体験", d: "Azure無料枠でVM/App Serviceを構築し、簡単な.NETアプリを移行・デプロイする。" },
              { n: "STEP 4", t: "移行ストーリーで応募", d: "前職の業務系・運用経験を『クラウド移行で活きる経験』として職務経歴書に落とし込む。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/support-to-infra/" className="text-blue-600 hover:underline">運用保守からインフラ・クラウドへの転向</Link>、<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">エンジニアのポートフォリオの作り方</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点とデメリット</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のAzure転職では、業務理解とマネジメント要素が評価されやすく、<strong>業務系SE・SIer出身の経験がそのまま強みになる</strong>のが特徴です。AWSより「現場の業務をわかっている人」が求められる傾向があります。
            </p>
            <p>
              <strong>デメリット・注意点も正直に書きます。</strong>Azureはエンタープライズ・受託寄りの案件が多く、Web系スタートアップのようなモダンな開発文化を求める人には合わない場合があります。レガシー移行案件に偏ると、汎用的なクラウド設計スキルが伸びにくいリスクもあります。AWS/GCPの基礎も押さえ、「特定ベンダーに閉じすぎない」ことが転職市場での保険になります。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、年収1,000万円以上の割合が40代で12.67%（2025年）と、ミドルでも高年収帯は一定数存在します。年代別の市場感は
              <Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、
              年収交渉は
              <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-blue-600 hover:underline">{faq.aLink.label}</Link>
                      {faq.aTail}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Azureスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンタープライズ・業務系クラウド案件に強いIT特化型エージェントで、あなたのAzureスキルの市場価値を確認しましょう。
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
              { name: "GCPエンジニア転職ガイド", href: "/skill/gcp/" },
              { name: "C#エンジニア転職ガイド", href: "/skill/csharp/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "DevSecOpsキャリア", href: "/career/devsecops/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
