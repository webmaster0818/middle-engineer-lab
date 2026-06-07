import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "サポート→インフラエンジニアへの転職完全ガイド【2026年版】",
  description:
    "ヘルプデスク・ITサポートからインフラエンジニアへ転職するための現実性、スキルギャップ比較、資格、在職中の準備、職務経歴書のBefore/After例文を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：サポート経験はインフラ転職の好スタート地点" },
  { id: "gap", label: "サポートとインフラエンジニアのスキルギャップ比較表" },
  { id: "skills", label: "埋めるべきスキル・資格の身につけ方" },
  { id: "steps", label: "在職中にできる移行ステップ" },
  { id: "resume", label: "職務経歴書の見せ方（Before/After例文）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代から見たサポート→インフラ転身" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    area: "OS / サーバー",
    sup: "Windows/Active Directoryの運用・問い合わせ対応",
    infra: "Linuxサーバーの構築・運用ができる",
    action: "LinuxとLPIC/LinuC Level 1の基礎を固める",
  },
  {
    area: "ネットワーク",
    sup: "接続トラブルの一次対応・切り分け",
    infra: "設計・構築まで踏み込む（TCP/IP・DNS・FW）",
    action: "ネットワーク基礎とCCNA相当の知識を学ぶ",
  },
  {
    area: "クラウド",
    sup: "クラウドサービスの利用者サポートが中心",
    infra: "AWS/GCP等を自分で設計・構築する",
    action: "AWS SAAを取得し実際に構築経験を作る",
  },
  {
    area: "自動化 / IaC",
    sup: "手作業の運用が中心",
    infra: "Terraform/Ansibleでインフラをコード化",
    action: "Bash/PythonとIaCの基礎を学ぶ",
  },
  {
    area: "監視 / 運用",
    sup: "障害の受付・エスカレーションに強い",
    infra: "監視設計・運用自動化まで担う",
    action: "監視ツールの設計・運用に触れる",
  },
  {
    area: "強み（活かせる）",
    sup: "障害対応の場慣れ・利用者目線・切り分け力",
    infra: "運用を理解したインフラ設計者は重宝される",
    action: "障害対応・AD管理の実績を具体的に明記",
  },
];

const skillSteps = [
  {
    num: "1",
    title: "Linux基礎（1〜2ヶ月）",
    desc: "コマンドライン操作、ファイルシステム、プロセス管理、パーミッションを習得します。LPIC/LinuC Level 1の取得を目標にすると体系的に学べます。",
  },
  {
    num: "2",
    title: "ネットワーク基礎（1ヶ月）",
    desc: "TCP/IP、DNS、HTTP、ファイアウォール、VPNの仕組みを理解します。サポートで障害対応の経験があれば、基礎の土台は固まっているはずです。",
  },
  {
    num: "3",
    title: "クラウド（AWS/GCP）（2〜3ヶ月）",
    desc: "EC2、VPC、S3、RDS、IAM等の主要サービスを実際に構築してみます。AWS SAA（ソリューションアーキテクト アソシエイト）の取得が求人応募に直結します。",
  },
  {
    num: "4",
    title: "IaC・自動化（1〜2ヶ月）",
    desc: "Terraform、Ansibleでインフラをコード化する技術を学びます。Bash/Python程度のスクリプティングも合わせて身につけます。",
  },
  {
    num: "5",
    title: "監視・運用（1ヶ月）",
    desc: "監視ツールの設計・運用を学びます。サポートで培った障害対応の感覚が、監視設計やアラート整理で活きる領域です。",
  },
];

const moveSteps = [
  {
    phase: "1〜2ヶ月目",
    title: "現職での業務棚卸しと学習開始",
    desc: "AD管理、ネットワーク障害対応、監視ツール運用など、インフラ寄りの業務を棚卸しします。並行してLinux学習を開始します。",
  },
  {
    phase: "2〜4ヶ月目",
    title: "資格取得とクラウド構築練習",
    desc: "LPIC/LinuC Level 1、続いてAWS SAAの取得を目指します。学習と並行して、自分のアカウントで簡単な構成を実際に構築します。",
  },
  {
    phase: "4〜5ヶ月目",
    title: "職務経歴書をインフラ視点で翻訳",
    desc: "サポート業務を「インフラの運用・構築に通じる経験」として書き換えます（後述のBefore/After参照）。",
  },
  {
    phase: "5〜6ヶ月目",
    title: "MSP・インフラ運用求人へ応募",
    desc: "まずはMSPやインフラ運用ポジションから狙うと、サポート経験を活かしつつ構築側へステップアップしやすくなります。",
  },
];

const agents = [
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    point:
      "20〜30代若手層に強く、書類添削・面接対策が手厚いと評されます。資格取得後のキャリアチェンジ相談先として使いやすいエージェントです。",
  },
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。クラウド・インフラ系の求人を扱い、技術背景を理解したアドバイザーが在籍するとされます（出典：レバテック公式ガイド、転職メディア集計）。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "国内最大級の求人数を持つハイブリッド型。IT・通信エンジニア求人を幅広く扱い、大手SIerからMSPまでカバーします。求人量を重視する場合の軸になります。",
  },
];

const faqs = [
  {
    q: "ヘルプデスク/サポートからインフラエンジニアへの転職は現実的？",
    a: "現実的です。サポートで培ったネットワークやOSの知識、障害対応の経験はインフラの基礎そのものです。資格（LPIC/LinuC、AWS SAA等）を取得すれば、完全な未経験扱いを避けやすくなります。まずはMSPや運用ポジションから入るとスムーズです。",
  },
  {
    q: "インフラエンジニアに必要な資格は？",
    a: "まずLPIC Level 1またはLinuC Level 1でLinuxの基礎を固め、次にAWS SAA（ソリューションアーキテクト アソシエイト）でクラウドの裏付けを作るのが王道です。ネットワーク寄りを目指すならCCNAも有効です。資格は実構築経験とセットで効果を発揮します。",
  },
  {
    q: "年収はどれくらい変わる？",
    a: "公表されたサポート職・インフラ職の統一統計は限られます。参考として、厚生労働省 job tagのシステムエンジニア（受託開発）は平均年収578.5万円、レバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円・40代約618万円です。クラウドスキルを積むほど上振れしやすい領域です。",
  },
  {
    q: "クラウドとオンプレ、どちらから学ぶべき？",
    a: "求人数・年収レンジの観点からクラウド（AWS/GCP/Azure）を優先するのが2026年時点では合理的です。ただしオンプレの基礎知識があるとクラウドの理解が深まるため、サポートで触れてきた範囲は無駄になりません。",
  },
  {
    q: "プログラミングスキルは必要？",
    a: "必須ではありませんが、Bash/Python程度のスクリプティングができると大きく有利です。Terraform・AnsibleなどのIaCを扱うためにも、コードを読み書きできる力は今後ますます重要になります。",
  },
  {
    q: "30代・40代でもインフラへ移れる？",
    a: "可能性は十分あります。インフラ領域は運用経験の価値が高く、障害対応やAD管理などサポートで積んだ経験がそのまま評価されやすいためです。資格と実構築経験を揃えれば、年代が上がっても受け皿は見つかりやすい分野です。",
  },
  {
    q: "在職中に進めるべき？",
    a: "推奨します。在職中なら収入を保ったまま資格取得と構築練習ができ、現職のインフラ寄り業務をそのまま実績に変えられます。資格・構築経験が整ってから応募する方が、評価も交渉も有利になります。",
  },
];

export default function SupportToInfraPage() {
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
      <ArticleJsonLd
        title="サポート→インフラエンジニアへの転職完全ガイド【2026年版】"
        description="ヘルプデスク・ITサポートからインフラエンジニアへ転職するための現実性、スキルギャップ比較、資格、在職中の準備、職務経歴書のBefore/After例文を解説します。"
        url="/career/support-to-infra/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "サポート→インフラエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          サポート→インフラエンジニアへの転職完全ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ヘルプデスクやITサポートの経験は、インフラエンジニアへの転職において強力な土台になります。日常的にネットワーク・サーバー・OSに触れ、障害対応をこなしてきた経験は、インフラエンジニアの基礎スキルそのものだからです。本記事では、この職種転換の現実性、スキルギャップ、必要な資格、在職中の準備、職務経歴書の書き方を、公的データに基づいて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "レバテック公表 年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            結論：サポート経験はインフラ転職の好スタート地点
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              サポートからインフラエンジニアへの転身は、現実性の高いキャリアパスです。理由は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① ネットワーク・OS知識と障害対応経験が、インフラの基礎としてそのまま活きる。</li>
              <li>② LPIC/LinuC・AWS SAAなど資格で実力を裏付けやすく、未経験扱いを避けやすい。</li>
              <li>③ IT人材は構造的不足が続く見通しで（経産省2019年公表試算では2030年に最大約79万人不足）、インフラ・クラウドの受け皿は広い。</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              鍵は、資格学習だけで終わらせず「自分で構築した経験」を作ること。まずはMSPや運用ポジションから入り、構築側へステップアップする道筋が現実的です。
            </p>
          </div>
        </section>

        {/* スキルギャップ比較表 */}
        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            サポートとインフラエンジニアのスキルギャップ比較表
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職で身についている強みと、インフラエンジニアで前提とされる範囲を並べると、埋めるべき差分が明確になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">サポート（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">インフラ（求められる）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">埋め方</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.sup}</td>
                    <td className="px-4 py-3 text-slate-600">{row.infra}</td>
                    <td className="px-4 py-3 text-slate-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* スキルの身につけ方 */}
        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            埋めるべきスキル・資格の身につけ方
          </h2>
          <div className="space-y-4">
            {skillSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            各領域の市場性は
            <Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラスキルガイド</Link>
            ・
            <Link href="/skill/aws/" className="text-blue-600 hover:underline">AWSスキルガイド</Link>
            ・
            <Link href="/skill/network/" className="text-blue-600 hover:underline">ネットワークスキルガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            在職中にできる移行ステップ
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職を活かしながら準備するのが最も効率的です。おおむね半年を想定したロードマップです。
          </p>
          <div className="space-y-4">
            {moveSteps.map((s, i) => (
              <div key={i} className="border-l-4 border-blue-500 bg-slate-50 rounded-r-lg p-5">
                <p className="text-xs font-bold text-blue-600 mb-1">{s.phase}</p>
                <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 職務経歴書 Before/After */}
        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            職務経歴書の見せ方（Before/After例文）
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            サポートの職務経歴書は「問い合わせ対応をした人」に見えがちです。インフラの運用・構築に通じる経験として翻訳し、資格と実構築の裏付けを添えます。以下は一般的な書き換えパターンです。
          </p>

          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-5 py-2 text-sm font-bold text-red-700">Before（サポート業務中心の書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「社内ヘルプデスクとして、PCやネットワークの問い合わせ対応を担当。アカウント管理や障害の一次対応を行った。」
              </div>
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">After（インフラ職で評価される書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「社内インフラの運用・一次対応を担当。Active Directoryでのユーザー/権限管理を運用し、ネットワーク障害では切り分け手順を整理して復旧時間を短縮。監視アラートの棚卸しで誤検知を削減。学習面ではLPIC Level 1・AWS SAAを取得し、個人アカウントでVPC＋EC2＋RDSの構成をTerraformで構築。」
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="font-bold text-slate-700 text-sm mb-2">翻訳のポイント</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・「対応した」→「何を改善し、復旧時間・誤検知をどれだけ減らせたか」を添える（数値は実績の範囲で）</li>
              <li>・AD管理・障害切り分け・監視運用など、インフラに直結する業務を具体名で書く</li>
              <li>・取得資格と「自分で構築した経験」を1行入れ、運用だけでなく構築意欲も示す</li>
              <li>・誇張せず、検証可能な事実ベースで書く</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            詳しい書き方は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            サポート職・インフラ職の統一統計は限られるため、公的・公表データを起点に幅で考えます。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li>
              ・厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収<strong>578.5万円</strong>・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。IT職の一つの参考値です。
            </li>
            <li>
              ・レバテック公表の年代別平均年収（2025年）では、正社員SEで30代約<strong>499万円</strong>、40代約<strong>618万円</strong>。年収1,000万円以上の割合は30代8.01%・40代12.67%。
            </li>
            <li>
              ・経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算では、2030年に最大約<strong>79万人</strong>のIT人材不足。インフラ・クラウド人材の需要は底堅い見通しです。
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            クラウドやIaCのスキルを積むほど上振れしやすい領域です。
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
            も参考になります。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            おすすめの転職エージェント
          </h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-blue-700 hover:underline">
                    {agent.name}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代から見たサポート→インフラ転身
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              インフラ領域は、ミドル層のキャリアチェンジと相性が良い分野です。理由は、運用経験そのものに価値があるからです。障害対応の場慣れ、利用者目線、切り分け力は、若手が短期間で身につけにくい資産で、年代が上がるほど信頼につながります。サポートで積んだ経験は、インフラ転職において「捨てる前職」ではなく「土台」です。
            </p>
            <p>
              一方で、運用の受け身姿勢のまま留まると、構築・設計を担うポジションには届きにくくなります。だからこそ、資格と「自分で構築した経験」をセットで示すことが重要です。40代の場合は、運用フローの改善やチームの一次対応体制づくりといったリード経験まで添えると、評価されるポジションの幅が広がります。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職事情</Link>
              ・
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>
              も合わせてご覧ください。
            </p>
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
          <h2 className="text-xl font-bold mb-3">インフラエンジニアへの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            サポート経験を活かせるインフラ・クラウドポジションを、IT特化型エージェントが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "インフラスキルガイド", href: "/skill/infrastructure/" },
              { name: "AWSスキルガイド", href: "/skill/aws/" },
              { name: "SRE転職ガイド", href: "/career/sre/" },
              { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "30代の年収相場", href: "/knowledge/salary-30s/" },
              { name: "マイナビIT AGENTの評判", href: "/review/mynavi-it/" },
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
