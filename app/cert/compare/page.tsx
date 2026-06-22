import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "IT資格 比較一覧【2026年・32資格】受験料・合格率・難易度を公式データで横断比較";
const PAGE_DESC =
  "IPA国家試験からAWS・Azure・GCP・Cisco・LPIC・CISSPまで、IT系32資格の受験料と合格率（公式公表値）を一覧で横断比較。エンジニア転職で資格を選ぶときに、難易度とコストを一目で比べられる独自データです。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 各資格ページの公式データ（受験料・合格率）を集約。合格率非公表の資格は「非公表」と明記し創作しない。2026年6月時点。
type Cert = { name: string; slug: string; cat: string; fee: string; rate: string };
const certs: Cert[] = [
  { name: "ITパスポート", slug: "it-passport", cat: "国家(IPA)", fee: "7,500円", rate: "令和7年度 48.6%" },
  { name: "基本情報技術者", slug: "basic-info", cat: "国家(IPA)", fee: "7,500円", rate: "新制度平均 約47.1%" },
  { name: "情報セキュリティマネジメント", slug: "info-sec-management", cat: "国家(IPA)", fee: "7,500円", rate: "近年7割前後（R5:72.6%）" },
  { name: "応用情報技術者", slug: "applied-info", cat: "国家(IPA)", fee: "7,500円", rate: "2025秋24.5%／春22.1%" },
  { name: "ネットワークスペシャリスト", slug: "network-specialist", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度春 17.8%" },
  { name: "データベーススペシャリスト", slug: "database-specialist", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度秋 18.4%" },
  { name: "情報処理安全確保支援士", slug: "security-specialist", cat: "国家(IPA高度)", fee: "7,500円", rate: "2025秋22.3%／春19.0%" },
  { name: "プロジェクトマネージャ", slug: "project-manager", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度秋 14.3%" },
  { name: "システムアーキテクト", slug: "system-architect", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度春 15.5%" },
  { name: "システム監査技術者", slug: "system-auditor", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度秋 16.1%" },
  { name: "エンベデッドシステムスペシャリスト", slug: "embedded-systems", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度秋 15.3%" },
  { name: "ITストラテジスト", slug: "it-strategist", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度春 15.0%" },
  { name: "ITサービスマネージャ", slug: "it-service-manager", cat: "国家(IPA高度)", fee: "7,500円", rate: "令和7年度春 14.7%" },
  { name: "AWS認定 SAA", slug: "aws-saa", cat: "クラウド(AWS)", fee: "150 USD（約20,000円）", rate: "非公表" },
  { name: "AWS認定 SAP", slug: "aws-sap", cat: "クラウド(AWS)", fee: "300 USD（約40,000円）", rate: "非公表" },
  { name: "AWS認定 DVA", slug: "aws-dva", cat: "クラウド(AWS)", fee: "150 USD（約20,000円）", rate: "非公表" },
  { name: "AWS認定 SOA", slug: "aws-soa", cat: "クラウド(AWS)", fee: "150 USD（約20,000円）", rate: "非公表" },
  { name: "Azure Fundamentals (AZ-900)", slug: "azure-fundamentals", cat: "クラウド(Azure)", fee: "99 USD（為替変動）", rate: "非公表" },
  { name: "Azure Administrator (AZ-104)", slug: "azure-administrator", cat: "クラウド(Azure)", fee: "165 USD目安", rate: "非公表" },
  { name: "Azure Solutions Architect (AZ-305)", slug: "azure-solutions-architect", cat: "クラウド(Azure)", fee: "165 USD目安", rate: "非公表" },
  { name: "Google Cloud ACE", slug: "gcp-ace", cat: "クラウド(GCP)", fee: "125 USD", rate: "非公表" },
  { name: "Google Cloud PCA", slug: "gcp-pca", cat: "クラウド(GCP)", fee: "200 USD", rate: "非公表" },
  { name: "CCNA", slug: "ccna", cat: "ベンダー(Cisco)", fee: "300 USD（約43,000〜47,000円）", rate: "非公表" },
  { name: "CCNP", slug: "ccnp", cat: "ベンダー(Cisco)", fee: "コア400 USD＋", rate: "非公表" },
  { name: "LPIC", slug: "lpic", cat: "ベンダー(LPI)", fee: "各16,500円（Lv1は2試験計33,000円）", rate: "合格ライン500/800点" },
  { name: "LinuC", slug: "linuc", cat: "ベンダー(LPI-Japan)", fee: "各16,500円", rate: "非公表" },
  { name: "Oracle Java Silver", slug: "oracle-java-silver", cat: "ベンダー(Oracle)", fee: "41,773円", rate: "非公表" },
  { name: "Oracle Java Gold", slug: "oracle-java-gold", cat: "ベンダー(Oracle)", fee: "41,773円", rate: "非公表" },
  { name: "CKA (Kubernetes)", slug: "cka", cat: "ベンダー(CNCF)", fee: "445 USD", rate: "非公表" },
  { name: "Terraform Associate", slug: "terraform-associate", cat: "ベンダー(HashiCorp)", fee: "70.50 USD", rate: "非公表" },
  { name: "CISSP", slug: "cissp", cat: "セキュリティ(ISC2)", fee: "749 USD（別途年会費）", rate: "非公表" },
  { name: "G検定", slug: "g-kentei", cat: "AI(JDLA)", fee: "一般13,200円／学生5,500円", rate: "2026第3回 82.4%" },
];

const cats = ["国家(IPA)", "国家(IPA高度)", "クラウド(AWS)", "クラウド(Azure)", "クラウド(GCP)", "ベンダー(Cisco)", "ベンダー(LPI)", "ベンダー(LPI-Japan)", "ベンダー(Oracle)", "ベンダー(CNCF)", "ベンダー(HashiCorp)", "セキュリティ(ISC2)", "AI(JDLA)"];

export default function CertComparePage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/cert/compare/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/compare/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "資格で選ぶ転職", href: "/cert/" }, { name: "資格比較一覧" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">IT資格 比較一覧【受験料・合格率・難易度】32資格</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          IPAの国家試験から、AWS・Azure・GCPのクラウド、Cisco・LPIC・Oracle・CISSPまで、IT系32資格の<strong>受験料</strong>と<strong>合格率</strong>を公式データで横断比較しました。エンジニア転職で資格を選ぶとき、「難易度（合格率）」と「コスト（受験料）」を一目で比べられます。合格率を公表していない資格は<strong>「非公表」</strong>と明記し、推測値は載せていません。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["IPA 各試験の合格発表（合格率）", "各認定団体（AWS/Microsoft/Google/Cisco/LPI/Oracle/ISC2/JDLA等）公式の受験料"]} />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜USD建て資格の円換算は為替で変動します。受験料・合格率は改定されるため、申込前に各公式で最新をご確認ください。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受験料・合格率 一覧（32資格）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">資格</th>
                  <th className="border border-slate-200 p-2 text-left">区分</th>
                  <th className="border border-slate-200 p-2 text-left">受験料</th>
                  <th className="border border-slate-200 p-2 text-left">合格率（公式）</th>
                </tr>
              </thead>
              <tbody>
                {certs.map((c) => (
                  <tr key={c.slug}>
                    <td className="border border-slate-200 p-2 font-bold whitespace-nowrap"><Link href={`/cert/${c.slug}/`} className="text-petrol hover:underline">{c.name}</Link></td>
                    <td className="border border-slate-200 p-2 text-xs">{c.cat}</td>
                    <td className="border border-slate-200 p-2 text-xs">{c.fee}</td>
                    <td className="border border-slate-200 p-2 text-xs">{c.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格選びのポイント（30・40代の転職視点）</h2>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5">
            <li><strong>合格率＝難易度の目安</strong>：IPA高度試験（PM・支援士・各スペシャリスト）は合格率14〜18%と難関で、経験者の専門性証明に向きます。基本情報・ITパスポートは40〜48%で、異業種からの入口に。</li>
            <li><strong>受験料はIPA国家試験が割安</strong>：IPAはどれも7,500円と低コスト。一方クラウド・外資ベンダー（CISSP 749USD、CKA 445USD、Oracle Java 約41,773円）は高めで、合格率も非公表が多いです。</li>
            <li><strong>「非公表」は実力試験</strong>：AWS・Azure・GCP・Cisco上位などは合格率非公表ですが、実務に直結し転職市場での評価が高い資格群です。合格率の数字がない＝難易度不明ではなく、スコア型で実力が問われると捉えましょう。</li>
            <li><strong>年代別の選び方</strong>：30・40代は「今の実務に直結し、即戦力を裏づける資格」（クラウド系・高度試験）が費用対効果大。未経験分野への参入は基本情報・CCNA・LPICが入口になります。各資格の詳細ページで年収傾向・活かし方を確認してください。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">区分から資格ガイドを探す</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/cert/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">資格ガイド一覧（全35）</Link>
            <Link href="/salary/tech-stack-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">技術スタック×企業年収データ</Link>
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業年収ランキング</Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">資格を活かせる転職先を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">取得した資格・実務経験が評価される求人を、IT特化エージェントに無料相談して紹介してもらいましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
      </article>
    </>
  );
}
