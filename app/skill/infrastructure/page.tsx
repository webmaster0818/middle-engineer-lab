import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "インフラエンジニアの転職ガイド｜年収・資格・クラウド転向の攻め方【2026年】";
const PAGE_DESC =
  "インフラエンジニアの転職市場を2026年最新の公表データで解説。レバテック公表の平均年収、クラウド/SRE転向のルート、おすすめの資格、求人の探し方を30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/infrastructure/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：インフラ転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "評価される資格" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "オンプレからクラウドへの転向ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "learn", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "インフラエンジニアの平均年収はどのくらいですか？",
    a: "レバテックキャリアの公表統計では、インフラエンジニアの平均年収は443万円・中央値450万円です（2025年1月時点・career.levtech.jp保有求人ベース）。同統計のエンジニア全体平均（約504万円）よりやや低めですが、クラウドアーキテクトやSREなど上流役割では年代別平均（40代約618万円・2025年）を上回るレンジも見られます。役割や担当領域で幅が大きいため目安としてご覧ください。",
  },
  {
    q: "オンプレミスからクラウドに転向できますか？",
    a: "十分可能です。ネットワーク・OS・セキュリティの基礎はクラウドでもそのまま活きます。AWS Solutions Architect AssociateやAzure Administrator Associateなどの資格取得から始め、個人で小規模なクラウド環境を構築するのが現実的なルートです。",
  },
  {
    q: "SREとインフラエンジニアの違いは何ですか？",
    a: "インフラエンジニアはインフラの構築・運用が中心、SREはサービスの信頼性（可用性・レイテンシ・エラー率）をソフトウェアエンジニアリングで改善する役割です。SREはGo/Pythonなどのコーディング能力やSLI/SLO設計のスキルも求められます。",
  },
  {
    q: "AWS/Azure/GCP、どれを学ぶべきですか？",
    a: "日本国内の求人数はAWSが最多とされ、次いでAzure、GCPの順です。まずはAWSを学び、余裕があればAzureも押さえるのがおすすめです。GCPはデータ分析・AI分野で強い需要があります。設計思想を一つ深く理解すれば、他クラウドへの横展開も容易になります。",
  },
  {
    q: "インフラエンジニアにおすすめの資格は？",
    a: "AWS Solutions Architect Associate/Professional、Azure Administrator Associate、Google Cloud Professional Cloud Architectが転職市場で評価されます。基礎力の証明としてはLinuC/LPICも有効です。資格は学習内容を実務に紐づけて語れることが重要です。",
  },
  {
    q: "40代のインフラエンジニアでも転職できますか？",
    a: "インフラ領域は経験がものを言う分野のため、ミドル層でも需要は安定しています。レバテック公表の正社員SE年代別平均は40代約618万円、年収1,000万円以上の割合は40代で12.67%（2025年）。クラウド移行のリード、セキュリティ設計、大規模インフラの設計経験があると評価されやすいです。",
  },
];

const salaryTable = [
  ["インフラエンジニア（レバテック公表）", "平均443万円・中央値450万円", "2025年1月時点・career.levtech.jp保有求人"],
  ["正社員SE 30代（レバテック公表）", "約499万円", "2025年・年代別平均"],
  ["正社員SE 40代（レバテック公表）", "約618万円", "2025年・年代別平均"],
  ["年収1,000万円以上の割合", "30代8.01% / 40代12.67%", "2025年・レバテック公表"],
];

const certTable = [
  ["クラウド（AWS）", "Solutions Architect Associate/Professional", "国内求人数が最多。まず狙う中心"],
  ["クラウド（Azure）", "Azure Administrator Associate など", "金融・大手・官公庁で評価されやすい"],
  ["クラウド（GCP）", "Professional Cloud Architect", "データ分析・AI領域で需要"],
  ["基礎（Linux）", "LinuC / LPIC", "OS・運用の基礎力を示す"],
];

export default function InfrastructureSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/infrastructure/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "インフラエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インフラエンジニアの転職ガイド｜年収・資格・クラウド転向の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | クラウド時代のインフラエンジニアのキャリアを30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          クラウド移行（リフト&シフト/リアーキテクチャ）の流れの中で、インフラエンジニアに求められるスキルはオンプレ運用からクラウドネイティブな構築・運用へとシフトしています。本記事は求人数の比較ではなく、「インフラスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア 職種別平均年収統計（2025年1月時点）",
            "レバテック公表 年代別平均年収（2025年）",
            "各クラウド認定 公式",
            "本サイト データシート（2026年6月）",
          ]}
        />

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

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：インフラ転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              インフラエンジニアの転職は、<strong>「オンプレ運用」から「クラウド設計・自動化・信頼性」へ役割を上げて見せられるか</strong>で年収が変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① クラウド（まずAWS）を軸に、<strong>設計・移行の実績</strong>を言語化する</li>
              <li>② IaC（Terraform）・コンテナ（Kubernetes）で<strong>自動化スキル</strong>を上乗せする</li>
              <li>③ SRE/プラットフォーム領域へ<strong>役割を拡張</strong>し、上流の年収帯に接続する</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            レバテックキャリアの公表統計では、インフラエンジニアの平均年収は<strong>443万円・中央値450万円</strong>です（2025年1月時点・career.levtech.jp保有求人ベース）。これはエンジニア全体平均（同統計で約504万円）よりやや低めですが、クラウドアーキテクトやSREなど上流役割では年代別平均を上回るレンジも見られます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">指標</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">時点・出典</th>
                </tr>
              </thead>
              <tbody>
                {salaryTable.map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            数値は統計・職種定義により異なるため目安としてご覧ください。中長期では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しており、クラウド人材の需給逼迫が背景にあります。
          </p>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価される資格</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            インフラ転職で評価されやすいのはクラウド系資格です。国内求人数の観点ではAWSが中心になります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">領域</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">代表的な資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職での位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([area, name, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{area}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">出典: AWS Certification 公式ほか各クラウド認定公式（2026年6月時点）。AWS認定は基礎・アソシエイト・プロフェッショナル・専門知識の4区分。</p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "運用・構築層", d: "サーバー/ネットワーク/OSの構築・運用、監視、障害対応。オンプレ経験はクラウド移行で活きる。" },
              { t: "クラウド設計層", d: "AWS/Azure上での冗長化設計、IaC（Terraform/CloudFormation）、コンテナ（Docker/Kubernetes）。年収帯が一段上がる。" },
              { t: "アーキテクト/SRE層", d: "マルチクラウド設計、SLI/SLO、コスト最適化、セキュリティガバナンス。Professional認定やコーディング力が後押し。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト</h3>
              <p className="text-sm text-petrol-deep">
                AWS/Azure/GCP上のアーキテクチャ設計を担う方向。マルチクラウド戦略、コスト最適化、セキュリティ設計など全体最適の視点が求められます。AWS SAPなどの上位資格が武器になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE（Site Reliability Engineer）</h3>
              <p className="text-sm text-petrol-deep">
                サービスの信頼性をソフトウェアエンジニアリングで改善する方向。SLI/SLO設計、オブザーバビリティ、自動化を担います。Go/Pythonのコーディング力が必要です。
                <Link href="/career/sre/" className="text-petrol-deep underline ml-1">SRE転向ガイド</Link>も参考に。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プラットフォームエンジニア</h3>
              <p className="text-sm text-petrol-deep">
                開発者の生産性を最大化する内部プラットフォームの構築を担う方向。Kubernetes基盤、CI/CD、開発者ポータルの設計・運用を行います。
              </p>
            </div>
          </div>
        </section>

        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく使い分けの整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。クラウドインフラ・SRE求人が豊富で、自社開発企業のインフラ求人も多く扱います。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数（IT公開求人110,840件・2026年5月22日時点・二次集計）。大手・金融のクラウド移行案件まで幅広く見られます。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。クラウドアーキテクトやSREリード層を狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>、選び方は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">転職エージェントの選び方</Link>を参考に。
          </p>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オンプレからクラウドへの転向ルート</h2>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "土台の棚卸し", d: "ネットワーク・Linux・セキュリティの経験を整理。クラウドでもそのまま価値になる。" },
              { n: "STEP 2", t: "SAA取得＋ハンズオン", d: "AWS Solutions Architect Associateを取得し、無料利用枠でVPC/EC2/S3/IAMの小構成を自作する。" },
              { n: "STEP 3", t: "IaC・コンテナで自動化", d: "Terraformで構成をコード化、Dockerでコンテナ化。手作業から自動化への移行を体験する。" },
              { n: "STEP 4", t: "移行ストーリーで応募", d: "前職のオンプレ運用経験を『移行プロジェクトで活きる経験』として職務経歴書に落とし込む。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/support-to-infra/" className="text-petrol hover:underline">運用保守からインフラへの転向</Link>、<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のインフラ転職では、<strong>経験の蓄積がそのまま強みになる</strong>のがこの領域の特徴です。障害対応・移行プロジェクトのリード・セキュリティ設計といった経験は、若手では代替しにくい価値になります。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、1,000万円以上の割合が40代で12.67%（2025年）。一方で「特定企業のレガシー運用に最適化されすぎた経験」は横展開しにくいため、クラウド・IaCという汎用スキルへ寄せておくのが転職市場での保険になります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="learn" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ クラウド（まずAWS）を軸に、SAA → 実務 → Professional の順で積む</li>
            <li>✓ IaC（Terraform）を習得し、手作業からコード管理へ移行する</li>
            <li>✓ コンテナ（Docker/Kubernetes）とCI/CDで自動化スキルを上乗せ</li>
            <li>✓ SRE方向ならGo/Pythonとオブザーバビリティを学ぶ</li>
            <li>✓ 学んだことは小さな成果物にして可視化する</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学習習慣は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習</Link>、市場価値の把握は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>を参考に。
          </p>
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
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">インフラスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            クラウド・SRE求人に強いIT特化型エージェントで、あなたのスキルの市場価値を確認しましょう。
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
              { name: "AWS転職ガイド", href: "/skill/aws/" },
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "SREへの転向ガイド", href: "/career/sre/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/classmethod/" className="text-petrol-deep hover:underline">クラスメソッド</a></li><li><a href="/company/future/" className="text-petrol-deep hover:underline">フューチャー（Future）</a></li><li><a href="/company/gmo-pepabo/" className="text-petrol-deep hover:underline">GMOペパボ</a></li><li><a href="/company/monotaro/" className="text-petrol-deep hover:underline">MonotaRO（モノタロウ）</a></li><li><a href="/company/nec/" className="text-petrol-deep hover:underline">NEC</a></li><li><a href="/company/sakura-internet/" className="text-petrol-deep hover:underline">さくらインターネット</a></li><li><a href="/company/sbi/" className="text-petrol-deep hover:underline">SBIホールディングス</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
