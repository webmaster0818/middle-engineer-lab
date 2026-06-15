import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "GCPエンジニアの転職完全ガイド｜年収・認定資格・AWSとの違い【2026年】";
const PAGE_DESC =
  "GCP（Google Cloud）エンジニアの転職を2026年最新データで解説。AWS/Azureとの3クラウド比較、Google Cloud認定体系、BigQuery・Vertex AIというデータ/ML親和性の強み、年収相場の出典付き整理を30代・40代向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "結論：GCPはAWSと何が違うのか" },
  { id: "market", label: "市場・年収データ" },
  { id: "compare", label: "AWS/Azure/GCP 3クラウド比較" },
  { id: "strength", label: "GCPの強み（データ・ML親和性）" },
  { id: "cert", label: "Google Cloud認定資格の体系" },
  { id: "work", label: "仕事内容と求められるレベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "entry", label: "未経験・経験浅めからのロードマップ" },
  { id: "middle", label: "30代・40代の視点とデメリット" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "GCPエンジニアとAWSエンジニアの違いは何ですか？",
    a: "扱うクラウド基盤が異なるだけでなく、求人ボリュームと得意領域が違います。国内の求人数はAWSが最多で、GCPは3番手というのが実情です（媒体により差あり）。一方でGCPはBigQueryやVertex AIなどデータ分析・機械学習基盤の評価が高く、データ活用・ML案件との親和性が強みです。まずクラウド全般を学ぶなら求人数の多いAWSが効率的で、データ/ML志向ならGCPを軸にする、という選び方になります。詳しくは",
    aLink: { href: "/skill/aws/", label: "AWSエンジニア転職ガイド" },
    aTail: "も合わせてご覧ください。",
  },
  {
    q: "GCPエンジニアの平均年収はどのくらいですか？",
    a: "求人ボックス給料ナビの「GCPエンジニア」平均月給は約66.4万円で、単純換算すると年約797万円です（2026年6月時点・動的に変動する集計値）。ただしこれは募集条件が整った求人を含むため高めに出やすい数値です。媒体推定では正社員700〜1,300万円、フリーランス平均約1,300万円という幅のある値も示されています（各社推定・幅あり）。単一の数値を鵜呑みにせず、役割・経験で大きく変わる前提でご覧ください。",
  },
  {
    q: "Google Cloud認定資格は転職で評価されますか？",
    a: "Associate Cloud Engineerが入口、Professional Cloud Architectが上位というのが基本ルートです（Google Cloud公式の認定体系）。dodaではGCP認定保有者向けに「900万円〜」を掲げる特集求人も見られます（2026年6月時点・媒体特集）。ただし資格単体より、認定学習で得た設計知識を実プロジェクトでどう使ったかを語れるかが評価の分かれ目です。",
  },
  {
    q: "GCPの求人数はどのくらいありますか？",
    a: "Forkwellでは「GCP」関連案件が304件確認できます（2026年6月時点・変動）。AWSと比べると母数は小さいですが、データ基盤・ML領域に強い案件が集まりやすい傾向です。求人数だけで判断せず、自分が狙う領域（データ/ML/インフラ）と案件の中身が合うかで見極めるのが現実的です。",
  },
  {
    q: "BigQueryやVertex AIの経験がないとGCP転職は難しいですか？",
    a: "必須ではありませんが、GCPを選ぶなら最大の差別化要素になります。GCE/GKE/Cloud Runといったコンピュート系だけでなく、BigQueryでの分析やVertex AIでのML基盤運用を小規模でも触れておくと、AWSエンジニアとの違いを面接で語れます。データ志向なら",
    aLink: { href: "/skill/data-scientist/", label: "データサイエンティスト転職ガイド" },
    aTail: "への接続も視野に入ります。",
  },
  {
    q: "40代でもGCPエンジニアへ転職できますか？",
    a: "上流の設計・運用経験があれば可能です。レバテック公表の正社員SE年代別平均は40代約618万円、年収1,000万円以上の割合は40代で12.67%（2025年）と、ミドル層でも高年収帯が一定数あります。GCPはIaC（Terraform）やKubernetes（GKE）との組み合わせで価値が上がるため、それらの経験を棚卸しして示すのが鍵です。",
  },
  {
    q: "GCPだけ学べば十分ですか？AWSも必要ですか？",
    a: "国内求人数はAWSが多いため、キャリアの安定性を考えるとAWSの基礎も押さえておくと安心です。クラウドは設計思想が共通する部分が多く、GCPを一つ深く理解すればAWS/Azureへの横展開も比較的容易です。GCPを軸にしつつ、必要に応じて2つ目を足すのが現実的です。",
  },
];

const salaryByAge = [
  ["20代", "約378万円", "クラウド構築・運用の経験を積む時期"],
  ["30代", "約499万円", "設計・データ基盤を任される中核層"],
  ["40代", "約618万円", "アーキテクト・データ基盤リードへの分岐点"],
  ["50代", "約685万円", "全体設計・ガバナンス領域"],
];

const cloudCompare = [
  ["国内求人数の体感", "最多（1番手）", "2番手（エンタープライズ強）", "3番手（正直な現状）"],
  ["特に強い領域", "総合力・幅広い案件", "M365/業務系/エンタープライズ統合", "BigQuery/Vertex AIのデータ・ML"],
  ["入口の認定資格", "Cloud Practitioner / SAA", "AZ-900 / AZ-104", "Associate Cloud Engineer"],
  ["上位の認定資格", "Solutions Architect Professional", "AZ-305", "Professional Cloud Architect"],
  ["こんな人に向く", "まず幅広く・求人数重視", "大手SIer/金融/業務系志向", "データ活用・ML志向"],
];

const certTable = [
  ["基礎（Foundational）", "Cloud Digital Leader", "ビジネス含むクラウド全体像。任意の入口"],
  ["アソシエイト（Associate）", "Associate Cloud Engineer", "実務の入口資格。転職でまず狙う層"],
  ["プロフェッショナル（Professional）", "Professional Cloud Architect / Professional Data Engineer など", "設計・データ基盤の上流。GCPらしさが出る区分"],
];

export default function GcpSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/gcp/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "GCPエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          GCPエンジニアの転職完全ガイド｜年収・認定資格・AWSとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | GCP（Google Cloud）スキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          GCP（Google Cloud Platform）は、国内クラウド市場ではAWS・Azureに次ぐ3番手というのが正直な現状です。それでも、BigQueryやVertex AIに代表されるデータ分析・機械学習基盤の評価は高く、「データ活用やMLと近いクラウド」として独自のポジションを持ちます。本記事は、すでに公開している
          <Link href="/skill/aws/" className="text-blue-600 hover:underline">AWSエンジニア転職ガイド</Link>
          と検索意図を分け、「<strong>GCPをAWSとどう差別化して転職市場で価値化するか</strong>」に絞って整理します。Azureについては
          <Link href="/skill/azure/" className="text-blue-600 hover:underline">Azureエンジニア転職ガイド</Link>
          を参照してください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2026年6月時点・動的集計）",
            "Forkwell 案件数（2026年6月時点）",
            "doda GCP特集（2026年6月時点）",
            "レバテック公表 年代別平均年収（2025年）",
            "Google Cloud 認定資格 公式",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：GCPはAWSと何が違うのか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。GCP転職を成功させる軸は、<strong>「AWSの代替」ではなく「データ・MLに強いクラウド」として自分を位置づけること</strong>です。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 求人数で劣る現実を踏まえ、<strong>BigQuery/Vertex AIのデータ・ML親和性</strong>を武器にする（AWSページとの最大の差）</li>
              <li>② 認定は<strong>Associate Cloud Engineer → Professional Cloud Architect</strong>を軸に、学習内容を実務へ紐づけて語る</li>
              <li>③ GKE（Kubernetes）・Terraform（IaC）を掛け合わせ、インフラ×データの両面で価値を上げる</li>
            </ul>
            <p className="text-xs text-slate-600 mt-3">
              「まず幅広い求人で経験を積みたい」方は
              <Link href="/skill/aws/" className="text-blue-700 underline">AWS</Link>、
              「エンタープライズ・業務系」志向なら
              <Link href="/skill/azure/" className="text-blue-700 underline ml-0">Azure</Link>
              が向きます。
            </p>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            求人ボックス給料ナビの「GCPエンジニア」平均月給は<strong>約66.4万円（単純換算で年約797万円）</strong>です（2026年6月時点・動的に変動する集計値）。これは募集条件が整った求人を含むため高めに出やすい数値で、断定的な「相場」として扱うべきではありません。媒体推定では正社員700〜1,300万円、フリーランス平均約1,300万円という幅のある値も示されています（各社推定・幅あり）。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            より安定した年代別の水準感は、レバテックが公表する正社員SEの年代別平均年収（権威データ寄りの参考値）が役立ちます。
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
            出典: レバテック公表の年代別平均年収（2025年）。年収1,000万円以上の割合は30代で8.01%、40代で12.67%（同）。GCP固有の専用統計は媒体間で差が大きいため、上記の求人ボックス値は「2026年6月時点・参考区分」、媒体推定は「各社推定・幅あり」としてご覧ください。市場の中長期トレンドは、経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しています。
          </p>
        </section>

        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWS/Azure/GCP 3クラウド比較</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            3大クラウドの違いを、転職目線で整理します。GCPは求人数では3番手という現実を正直に踏まえつつ、得意領域で選ぶのが賢い使い分けです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">AWS</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Azure</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">GCP</th>
                </tr>
              </thead>
              <tbody>
                {cloudCompare.map(([k, a, az, g], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{az}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            求人数の体感は媒体・時点により差があり、断定はできません。各クラウドの詳細は
            <Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>・
            <Link href="/skill/azure/" className="text-blue-600 hover:underline">Azure</Link>
            の各ガイドをご覧ください。
          </p>
        </section>

        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GCPの強み（データ・ML親和性）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GCPを選ぶ最大の理由は、データ分析・機械学習基盤との親和性です。これはAWSページでは前面に出ない、GCPならではの差別化ポイントです。
          </p>
          <div className="space-y-3">
            {[
              { t: "BigQuery（データウェアハウス）", d: "サーバーレスで大規模データを高速にSQL分析できる基盤。データエンジニアリングやBIの中核として案件需要が根強い。" },
              { t: "Vertex AI（ML基盤）", d: "機械学習モデルの学習・デプロイ・運用を統合するMLOps基盤。MLや生成AI活用の案件で評価されやすい。" },
              { t: "GKE（Google Kubernetes Engine）", d: "Kubernetesの本家に近い運用体験。コンテナ・SRE志向と相性がよく、IaCと掛け合わせると市場価値が上がる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            データ志向を深めるなら
            <Link href="/skill/data-scientist/" className="text-blue-600 hover:underline">データサイエンティスト転職ガイド</Link>、
            コンテナ運用を強化するなら
            <Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetes転職ガイド</Link>、
            IaCは
            <Link href="/skill/terraform/" className="text-blue-600 hover:underline">Terraform転職ガイド</Link>
            が接続先になります。
          </p>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Google Cloud認定資格の体系</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Google Cloudの認定は、基礎・アソシエイト・プロフェッショナルの区分で整理されています。転職でまず狙うのはAssociate Cloud Engineer、上流を狙うならProfessional Cloud Architectが王道です。
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
          <p className="text-xs text-slate-500 mb-3">出典: Google Cloud 認定資格 公式（cloud.google.com/certification、2026年6月時点）。dodaではGCP認定保有者向けに「900万円〜」を掲げる特集求人も見られます（2026年6月時点・媒体特集）。</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            資格は「持っているか」より「学習内容を実務で使えるか」で評価されます。Professional Cloud Architectの学習で得た設計知識を、実際の構成・コスト最適化にどう適用したかを語れると、書類・面接の両方で効きます。
          </p>
        </section>

        <section id="work" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕事内容と求められるレベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GCP求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "実務1〜3年層（構築・運用）", d: "GCE/Cloud Storage/VPC/IAMの基本構成、Cloud Monitoringでの監視、簡単な障害対応。Associate Cloud Engineerが歓迎要件になりやすい。" },
              { t: "実務3〜6年層（設計・データ基盤）", d: "GKEの運用、Terraformによる構成管理、BigQueryでのデータ基盤構築、CI/CD（Cloud Build）。年収帯が一段上がる中核ゾーン。" },
              { t: "実務6年以上層（アーキテクト・データ基盤リード）", d: "全体アーキテクチャ設計、Vertex AIを含むML基盤、コスト最適化、セキュリティ設計。Professional認定が後押しになる。" },
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
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ基盤エンジニア路線</h3>
              <p className="text-sm text-blue-700">
                BigQueryを中心にデータ基盤を設計・運用する方向。データ活用案件で評価されやすく、
                <Link href="/skill/data-scientist/" className="text-blue-700 underline ml-1">データサイエンティスト</Link>
                や
                <Link href="/skill/sql/" className="text-blue-700 underline ml-0">SQL</Link>
                のスキルと接続します。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                GCP上のシステム全体設計を担う方向。Professional Cloud Architect認定と大規模設計経験が武器になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE / プラットフォーム路線</h3>
              <p className="text-sm text-blue-700">
                GKEを中心に信頼性とスケーラビリティを担保する方向。
                <Link href="/career/sre/" className="text-blue-700 underline ml-1">SREへの転向ガイド</Link>
                も参考になります。
              </p>
            </div>
          </div>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・経験浅めからのロードマップ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GCP実務が浅い、あるいは他クラウド・オンプレ中心だった方の現実的な道筋です。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "土台の棚卸し", d: "ネットワーク・Linux・SQLの基礎経験を整理。これらはGCPでもそのまま価値になる。" },
              { n: "STEP 2", t: "Associate取得＋無料枠で構築", d: "Associate Cloud Engineerを取得し、無料利用枠でGCE/Cloud Storage/IAMの小構成を自作する。" },
              { n: "STEP 3", t: "データ・MLで差別化", d: "BigQueryで公開データセットを分析し、Vertex AIで簡単なモデルを動かす。AWSとの差を作る。" },
              { n: "STEP 4", t: "成果物化して応募", d: "構成をTerraformでコード化しGitHubに公開。設計意図をREADMEで説明できる状態にする。" },
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
              ミドル層のGCP転職では、<strong>「自分で全部作れる」より「データ活用や移行をチームで進められる」</strong>ことが評価軸になります。手を動かす力に加え、要件整理・コスト判断・データ活用の企画力が差を生みます。
            </p>
            <p>
              <strong>デメリット・注意点も正直に書きます。</strong>GCPは国内求人数がAWSより少ないため、「GCPしか触れない」状態だと選択肢が狭まりやすいのが現実です。求人の地理的偏在（都市部・自社開発企業に集中しがち）もあり、地方・リモート前提だと案件が限られる場合があります。AWSの基礎も押さえ、データ/MLという強みで差別化する二段構えが安全です。
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
          <h2 className="text-xl font-bold mb-3">GCPスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            データ・ML案件に強いIT特化型エージェントで、あなたのGCPスキルの市場価値を確認しましょう。
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
              { name: "Azureエンジニア転職ガイド", href: "/skill/azure/" },
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/10x/" className="text-blue-700 hover:underline">10X</a></li><li><a href="/company/colopl/" className="text-blue-700 hover:underline">コロプラ</a></li><li><a href="/company/cyberagent/" className="text-blue-700 hover:underline">サイバーエージェント</a></li><li><a href="/company/dmm/" className="text-blue-700 hover:underline">DMM.com</a></li><li><a href="/company/hitachi/" className="text-blue-700 hover:underline">日立製作所</a></li><li><a href="/company/jcb/" className="text-blue-700 hover:underline">JCB（ジェーシービー）</a></li><li><a href="/company/kddi/" className="text-blue-700 hover:underline">KDDI</a></li><li><a href="/company/layerx/" className="text-blue-700 hover:underline">LayerX</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
