import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Terraform/IaCエンジニアの転職ガイド｜年収・認定資格・求人の攻め方【2026年】";
const PAGE_DESC =
  "Terraform/IaCエンジニアの転職市場を2026年最新の公表データで解説。年代別の年収目安、HashiCorp認定資格の活かし方、求人の探し方、参入ルートを30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Terraform転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "HashiCorp認定資格の活かし方" },
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
    q: "Terraform/IaCエンジニアの年収はどのくらいですか？",
    a: "Terraform職種に限定した公表平均値は確認が難しいため、ここではレバテック公表の正社員SE年代別平均（30代約499万円・40代約618万円、2025年）を目安として用います。Terraformは通常クラウドインフラ/SRE/DevOps領域の一部として扱われ、これらの上流役割では年代別平均を上回るレンジも見られます。役割や担当範囲で幅が大きいため参考値としてご覧ください。",
  },
  {
    q: "Terraformの需要は今後も続きますか？",
    a: "クラウドインフラのコード化（IaC）は業界の標準的なプラクティスになりつつあり、TerraformはマルチクラウドIaCの代表的ツールです。OpenTofuの登場で選択肢は広がりましたが、HCLによる宣言的なインフラ管理のスキル自体は引き続き需要があります。",
  },
  {
    q: "HashiCorpのTerraform認定資格は有利ですか？",
    a: "Terraform Associate（003）は基礎スキルを示す入口の資格として広く受験されています。さらに2024年9月にはラボ形式（4時間・実機操作）のTerraform Authoring and Operations Professionalが登場し、実務レベルの設計・運用力を示せるようになりました（HashiCorp公式）。資格は書類段階の後押しになりますが、実際のモジュール設計・運用経験とセットで語ることが重要です。",
  },
  {
    q: "Terraform以外のIaCツールも学ぶべきですか？",
    a: "まずTerraformを深く学ぶのが効率的です。その上で、AWS専用ならCDK、プログラミング言語でIaCを書くならPulumi、構成管理ならAnsible、といった具合に用途に応じて2つ目を押さえると幅が広がります。",
  },
  {
    q: "Terraformの求人はどんな企業に多いですか？",
    a: "クラウドネイティブ企業、SaaS企業、クラウド移行を進めるSIer、金融系IT企業などで、DevOps/SREチームの必須スキルとしてTerraformが挙げられるケースが増えています。",
  },
  {
    q: "インフラ未経験でもTerraformから始められますか？",
    a: "基本的にはクラウドインフラ（AWS/GCP/Azure）の基礎理解が前提です。まずAWSの基本サービス（VPC/EC2/S3/IAM）を理解した上でTerraformに進むのが効率的です。クラウドの実務経験が1年程度あれば、Terraformの習得は段階的に進められます。",
  },
  {
    q: "Terraformエンジニアにおすすめの転職サービスは？",
    a: "インフラ・DevOps案件に強いレバテックキャリア、ハイクラスSRE層を狙えるビズリーチ、クラウドネイティブ企業の求人を扱うGeeklyの併用が定番です（2026年6月時点・各社公表/二次情報）。",
  },
];

const salaryByAge = [
  ["20代", "約378万円", "IaC・クラウド構築の経験を積む時期"],
  ["30代", "約499万円", "モジュール設計・自動化の中核層"],
  ["40代", "約618万円", "IaCアーキテクト/SREリードへの分岐点"],
  ["50代", "約685万円", "基盤標準化・ガバナンス領域"],
];

const certTable = [
  ["Terraform Associate（003）", "選択式中心", "基礎スキルの証明。転職でまず狙う入口の資格"],
  ["Terraform Authoring and Operations Professional", "ラボ形式・4時間・実機操作", "2024年9月リリース。実務レベルの設計・運用力を示す上位資格"],
];

export default function TerraformSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/terraform/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Terraform/IaCエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Terraform/IaCエンジニアの転職ガイド｜年収・認定資格・求人の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Terraform/IaCスキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Terraformはインフラをコードで管理（IaC）するための代表的ツールとして、AWS/GCP/Azureなどマルチクラウド環境で広く使われています。本記事は求人数の比較ではなく、「Terraform/IaCスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "HashiCorp Certifications 公式",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Terraform転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Terraformは単体スキルではなく<strong>クラウドインフラ/SRE/DevOps領域の一部</strong>として評価されます。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>再利用可能なモジュール設計・state管理・CI/CD統合</strong>の実績を語る</li>
              <li>② Associate→Professionalで「基礎」と「実務設計力」を段階的に示す</li>
              <li>③ AWS/GCP・Kubernetes・GitOpsと<strong>掛け合わせて</strong>基盤エンジニアとしての厚みを出す</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Terraform職種に限定した信頼できる公表平均年収は確認が難しいため、ここでは創作を避け、レバテック公表の正社員SE年代別平均年収を目安として用います。Terraformは通常クラウドインフラ/SRE/DevOps領域の一部として扱われ、これらの上流役割では下表の年代別平均を上回るレンジも見られます。
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
            出典: レバテック公表の年代別平均年収（2025年）。年収1,000万円以上の割合は30代で8.01%、40代で12.67%（同）。中長期では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しています。数値は統計・職種定義により異なるため目安としてご覧ください。
          </p>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">HashiCorp認定資格の活かし方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            HashiCorpのTerraform認定は、基礎を示すAssociateと、実務力を示すProfessionalの2系統に整理できます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">形式</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([name, fmt, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{fmt}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: HashiCorp Certifications 公式（developer.hashicorp.com/certifications、2026年6月時点）</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Professionalはラボ形式で実機操作が求められるため、「Terraformで実際に作って運用できる」ことの裏付けになります。資格学習で得たモジュール設計・state運用の知識を、実プロジェクトでどう適用したかを語れると評価が高まります。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "入口層（IaC基礎）", d: "Terraformの基本構文、provider/resource/variableの理解、単一クラウドでの小規模構築。Associate保有が歓迎されやすい。" },
              { t: "中核層（設計・自動化）", d: "再利用可能なモジュール設計、state管理（リモートバックエンド）、CI/CDへの組み込み、Pull Requestベースのインフラ変更フロー。" },
              { t: "上流層（アーキテクト）", d: "マルチクラウド/マルチアカウント設計、ポリシー適用（Sentinel/OPA）、組織横断のIaC標準化。Professional認定が後押しになる。" },
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
              { role: "クラウドインフラエンジニア", note: "Terraform+AWS/GCPでのインフラ構築・運用" },
              { role: "SRE/プラットフォームエンジニア", note: "Terraform+Kubernetes+CI/CDの統合基盤構築" },
              { role: "IaCアーキテクト/コンサルタント", note: "IaC戦略策定、マルチクラウド設計、標準化推進" },
              { role: "DevOpsリード", note: "チームのIaC運用フロー設計、レビュー文化の醸成" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/sre/" className="text-petrol hover:underline">SREへの転向ガイド</Link>、<Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes転職ガイド</Link>。
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
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でインフラ・DevOps案件に強く、IaCを要件に含むSRE/クラウド求人を探せます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。IaCアーキテクトやSREリード層を狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界特化。提案スピードに強みがあり、クラウドネイティブ企業の求人を扱います。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>を参考にしてください。
          </p>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "クラウド基礎を固める", d: "AWSの基本サービス（VPC/EC2/S3/IAM）をコンソールで一通り触り、構成を理解する。" },
              { n: "STEP 2", t: "Terraformでコード化", d: "手作業で作った構成をTerraformで再現。provider/resource/variable/outputの基本を押さえる。" },
              { n: "STEP 3", t: "Associate取得＋モジュール化", d: "Terraform Associateで基礎を体系化し、再利用可能なモジュールに分割して設計力を示す。" },
              { n: "STEP 4", t: "CI/CD統合で成果物に", d: "GitHub Actions等でplan/applyを自動化し、Pull Requestベースの変更フローをGitHubで公開する。" },
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
              ミドル層のTerraform転職では、<strong>「ツールを使える」より「チームのIaC運用を設計・定着させた」</strong>経験が評価されます。モジュールの命名規約、state分割の方針、レビュー文化の整備など、組織にスケールする運用を作った経験は若手と差別化できます。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、1,000万円以上の割合が40代で12.67%（2025年）。Terraformを軸にSRE/IaCアーキテクト領域へ役割を広げると、高年収帯への接続が見えてきます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>もご覧ください。
            </p>
          </div>
        </section>

        <section id="learn" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ クラウド基礎 → Terraformコード化 → モジュール設計 の順で積む</li>
            <li>✓ Associateで基礎を固め、実務後にProfessional（ラボ形式）で設計力を示す</li>
            <li>✓ state管理（リモートバックエンド）とCI/CD統合を実プロジェクトで経験する</li>
            <li>✓ Kubernetes/GitOpsと組み合わせ、基盤エンジニアとして厚みを出す</li>
            <li>✓ 作ったモジュールはGitHub/Registryで公開し、設計意図を説明できる状態にする</li>
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
          <h2 className="text-xl font-bold mb-3">Terraform/IaCスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            インフラ自動化の求人に強いIT特化型エージェントで、年収アップの可能性を確認しましょう。
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
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "AWS転職ガイド", href: "/skill/aws/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
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
    </>
  );
}
