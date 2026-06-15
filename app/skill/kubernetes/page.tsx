import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Kubernetesエンジニアの転職ガイド｜年収・CKA資格・求人の攻め方【2026年】";
const PAGE_DESC =
  "Kubernetes/コンテナエンジニアの転職市場を2026年最新の公表データで解説。年代別の年収目安、CKA/CKAD/CKS認定の活かし方、求人の探し方、参入ルートを30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Kubernetes転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "CKA/CKAD/CKS資格の活かし方" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "learn", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Kubernetesエンジニアの年収はどのくらいですか？",
    a: "Kubernetes職種に限定した公表平均値は確認が難しいため、ここではレバテック公表の正社員SE年代別平均（30代約499万円・40代約618万円、2025年）を目安として用います。Kubernetesは多くの場合SRE/プラットフォーム/クラウド領域の一部として扱われ、これらの上流役割では年代別平均を上回るレンジも見られます。役割や担当範囲で幅が大きいため、参考値としてご覧ください。",
  },
  {
    q: "Kubernetesの需要は今後も続きますか？",
    a: "マイクロサービス化とクラウドネイティブ化の流れの中で、Kubernetesはコンテナオーケストレーションの中心的技術として広く使われています。EKS/GKE/AKSといったマネージドサービスの普及で導入のハードルは下がる一方、運用・最適化・トラブルシュートを担えるエンジニアの需要は続いています。",
  },
  {
    q: "CKA資格は転職に有利ですか？",
    a: "CKA（Certified Kubernetes Administrator）はCNCFとLinux Foundationが主催する実技試験で、コマンドラインで課題を解く形式です（合格ライン66%以上、有効期間2年、日本語受験可・公式情報）。実技ベースのため「触れる」ことの証明になり、書類段階でのアドバンテージになります。ただし資格だけでなく運用経験とセットで語れることが重要です。",
  },
  {
    q: "CKADやCKSとの違いは何ですか？",
    a: "CKADはKubernetes上でアプリを設計・構築・公開する開発者向け、CKSはセキュリティ特化です。CKSはCKA合格が受験の前提条件になっています（公式）。運用寄りならCKA、開発寄りならCKAD、セキュリティを深めるならCKA→CKSという順が一般的です。",
  },
  {
    q: "Kubernetesの求人はどんな企業に多いですか？",
    a: "クラウド系企業、メガベンチャー、SaaS企業、金融系IT企業などで、SRE/プラットフォームエンジニアの要件としてKubernetes経験が挙がるケースが増えています。マネージドKubernetes（EKS/GKE/AKS）の運用経験が問われることが多いです。",
  },
  {
    q: "Kubernetes未経験からどう学べばよいですか？",
    a: "まずDockerでコンテナの基礎を固め、次にMinikubeやkindでローカルクラスターを構築して操作に慣れます。Deployment/Service/Ingress/ConfigMapといった基本リソースを手で書けるようにし、CKAの学習範囲で体系化するのが効率的です。",
  },
  {
    q: "Kubernetesエンジニアにおすすめの転職サービスは？",
    a: "インフラ・DevOps案件に強いレバテックキャリア、ハイクラスSRE層を狙えるビズリーチ、クラウドネイティブ企業の求人を扱うGeeklyの併用が定番です（2026年6月時点・各社公表/二次情報）。",
  },
];

const salaryByAge = [
  ["20代", "約378万円", "コンテナ・基盤運用の経験を積む時期"],
  ["30代", "約499万円", "クラスター設計・運用自動化の中核層"],
  ["40代", "約618万円", "プラットフォーム/SREリードへの分岐点"],
  ["50代", "約685万円", "基盤戦略・組織設計領域"],
];

const certTable = [
  ["CKA", "Certified Kubernetes Administrator", "クラスター管理・運用。実技66%以上で合格。運用職でまず狙う"],
  ["CKAD", "Certified Kubernetes Application Developer", "アプリの設計・構築・公開。開発者寄りの役割向け"],
  ["CKS", "Certified Kubernetes Security Specialist", "セキュリティ特化。CKA合格が受験前提（67%以上で合格）"],
];

export default function KubernetesSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/kubernetes/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Kubernetes/コンテナエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Kubernetesエンジニアの転職ガイド｜年収・CKA資格・求人の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Kubernetes/コンテナスキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Kubernetesはコンテナオーケストレーションの中心技術として、クラウドネイティブな運用に広く使われています。本記事は求人数の比較ではなく、「Kubernetesスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "CNCF / Linux Foundation 認定資格 公式",
            "本サイト データシート（2026年6月）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Kubernetes転職市場の攻め方</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Kubernetesは単体スキルではなく<strong>SRE・プラットフォーム・クラウド領域の一部</strong>として評価されます。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>マネージドK8s（EKS/GKE/AKS）の運用・トラブル対応経験</strong>を具体的に語る</li>
              <li>② CKAで「触れる」ことを証明しつつ、<strong>運用設計の実績</strong>とセットで示す</li>
              <li>③ Helm・ArgoCD・Prometheus・Terraformと<strong>掛け合わせて</strong>基盤エンジニアとしての厚みを出す</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Kubernetes職種に限定した信頼できる公表平均年収は確認が難しいため、ここでは創作を避け、レバテック公表の正社員SE年代別平均年収を目安として用います。Kubernetesは多くの場合SRE/プラットフォーム/クラウド領域の一部として扱われ、これらの上流役割では下表の年代別平均を上回るレンジも見られます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代の位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map(([age, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: レバテック公表の年代別平均年収（2025年）。年収1,000万円以上の割合は30代で8.01%、40代で12.67%（同）。中長期では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しており、クラウドネイティブ人材の需給逼迫が背景にあります。数値は統計・職種定義により異なるため目安としてご覧ください。
          </p>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CKA/CKAD/CKS資格の活かし方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Kubernetesの認定はCNCFとLinux Foundationが主催し、いずれも<strong>実技（コマンドライン操作）形式</strong>です。日本語での受験が可能で、認定の有効期間は2年です（公式）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正式名称</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">位置づけ・要点</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([abbr, name, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{abbr}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: CNCF / Linux Foundation 公式（cncf.io、training.linuxfoundation.org、2026年6月時点）</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            実技試験のため、CKAは「手を動かせる」ことの裏付けになりやすい資格です。ただし本番運用の障害対応・容量設計・アップグレード経験を語れることが、書類・面接での決め手になります。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "入口層（コンテナ運用）", d: "Docker・基本的なKubernetesリソース（Deployment/Service/Ingress）の操作。マネージドK8sのデプロイ経験。" },
              { t: "中核層（運用設計・自動化）", d: "Helmによるパッケージ管理、ArgoCD/FluxでのGitOps、Prometheus+Grafanaの監視構築、Terraformでのクラスター構築。" },
              { t: "上流層（プラットフォーム/SRE）", d: "マルチクラスター設計、容量・コスト最適化、SLI/SLO、Internal Developer Platformの構築。CKS等のセキュリティ知識も評価対象。" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "SRE（Site Reliability Engineer）", note: "Kubernetes基盤の信頼性担保、オブザーバビリティ、インシデント対応の仕組み化" },
              { role: "プラットフォームエンジニア", note: "Internal Developer Platform構築、GitOps運用、開発者体験の改善" },
              { role: "クラウド/DevOpsアーキテクト", note: "Kubernetes導入支援、マルチクラウド基盤の設計" },
              { role: "セキュリティ特化（CKS方向）", note: "クラスターのセキュリティ設計、ポリシー適用、サプライチェーン対策" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/sre/" className="text-blue-600 hover:underline">SREへの転向ガイド</Link>、<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS転職ガイド</Link>（EKS運用との相性が高い）。
          </p>
        </section>

        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく使い分けの整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でインフラ・DevOps案件に強く、技術に明るいアドバイザー経由でSRE/プラットフォーム求人を探せます。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。SREリードやプラットフォーム責任者クラスのポジションを狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界特化。提案スピードに強みがあり、クラウドネイティブ企業の求人を扱います。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント複数利用のコツ</Link>を参考にしてください。
          </p>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "Dockerで基礎固め", d: "コンテナの作成・イメージ管理・ネットワークの基本を理解する。" },
              { n: "STEP 2", t: "ローカルクラスター構築", d: "Minikube/kindでクラスターを立て、Deployment/Service/Ingress/ConfigMapを手で書く。" },
              { n: "STEP 3", t: "CKAで体系化", d: "CKAの出題範囲に沿って運用知識を整理し、実技試験で『触れる』ことを証明する。" },
              { n: "STEP 4", t: "マネージドK8sで成果物", d: "EKS/GKE上に小さなサービスを構築し、Helm/監視/CI-CDまで含めて公開・説明できる状態にする。" },
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
            関連: <Link href="/career/support-to-infra/" className="text-blue-600 hover:underline">運用保守からインフラへの転向</Link>、<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のKubernetes転職では、<strong>「最新ツールを知っている」より「本番障害を収束させた経験」</strong>が評価されます。アップグレード時のリスク管理、容量設計、コスト最適化など、運用の修羅場をくぐった経験は若手と差別化できる強みです。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、1,000万円以上の割合が40代で12.67%（2025年）。Kubernetesを軸にSRE/プラットフォーム領域へ役割を広げると、高年収帯への接続が見えてきます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>もご覧ください。
            </p>
          </div>
        </section>

        <section id="learn" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Docker → ローカルK8s → マネージドK8s の順で実機に慣れる</li>
            <li>✓ CKAで運用知識を体系化（必要に応じCKAD/CKSへ）</li>
            <li>✓ Helm・ArgoCD・Prometheus/Grafanaを一通り触り、運用設計まで踏み込む</li>
            <li>✓ Terraformでクラスターをコード管理し、IaCスキルと接続する</li>
            <li>✓ 障害対応・容量設計の経験を「再現可能な学び」として言語化する</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学習習慣は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習</Link>、市場価値の把握は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>を参考に。
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
          <h2 className="text-xl font-bold mb-3">Kubernetesスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            DevOps/SRE求人に強いIT特化型エージェントで、年収アップの可能性を確認しましょう。
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
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
              { name: "AWS転職ガイド", href: "/skill/aws/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "SREへの転向ガイド", href: "/career/sre/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/10x/" className="text-blue-700 hover:underline">10X</a></li><li><a href="/company/andpad/" className="text-blue-700 hover:underline">ANDPAD</a></li><li><a href="/company/cyberagent/" className="text-blue-700 hover:underline">サイバーエージェント</a></li><li><a href="/company/dena/" className="text-blue-700 hover:underline">DeNA</a></li><li><a href="/company/google/" className="text-blue-700 hover:underline">Google Japan</a></li><li><a href="/company/ibm/" className="text-blue-700 hover:underline">日本IBM</a></li><li><a href="/company/jcb/" className="text-blue-700 hover:underline">JCB（ジェーシービー）</a></li><li><a href="/company/line-yahoo/" className="text-blue-700 hover:underline">LINEヤフー</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
