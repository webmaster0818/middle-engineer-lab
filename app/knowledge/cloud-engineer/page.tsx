import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "クラウドエンジニアとは｜NISTの定義・責任共有モデル・3社の認定資格数を一次情報で整理【2026年】";
const DESCRIPTION =
  "クラウドエンジニアとは、クラウドサービス上でシステムの設計・構築・運用を担う技術者の呼び方で、公的な職業分類に独立した項目はありません。NISTの定義、責任共有モデル、企業のクラウド利用率、3社の認定資格数（当サイト集計）を整理します。";
const URL = "/knowledge/cloud-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "クラウドエンジニアの定義と公的分類での扱い" },
  { id: "nist", label: "クラウドとは：NISTの定義（5つの特徴・3つのサービスモデル・4つの実装モデル）" },
  { id: "work", label: "クラウド特有の業務：責任共有モデルとIaC" },
  { id: "usage", label: "企業のクラウド利用率の推移とガバメントクラウド" },
  { id: "certs", label: "AWS・Azure・Google Cloudの認定資格数（当サイト集計）" },
  { id: "related", label: "インフラエンジニア・SRE・転職情報との違い" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "クラウドエンジニアとは簡単に言うと何ですか？",
    a: "AWS・Microsoft Azure・Google Cloudなどのクラウドサービスを使って、システムの基盤（サーバー、ネットワーク、ストレージなど）を設計・構築・運用する技術者の呼び方です。総務省の日本標準職業分類と厚生労働省編職業分類（令和4年改定）には「クラウドエンジニア」という項目や例示職業名がなく、公的な定義はありません。本記事の説明は当サイトの整理です。",
  },
  {
    q: "クラウドエンジニアとインフラエンジニアの違いは何ですか？",
    a: "どちらもシステムの基盤を扱う点は共通しています。クラウドエンジニアは、物理的な機器の調達・設置をクラウド事業者に任せ、クラウド上の設定やコード（IaC）による構築、クラウド事業者と利用者の責任分担（責任共有モデル）を前提にした設計・運用を担う点が特徴です。公的な区分ではないため、求人ごとに担当範囲を確認することをおすすめします。",
  },
  {
    q: "クラウドエンジニアに必要な資格はありますか？",
    a: "働くために必須の資格はありません。知識を示す手段として、各クラウド事業者が公式の認定資格を設けています。当サイトが2026年11月27日に各社の公式ページで数えたところ、AWSは13件（ベータ試験1件を含む）、Microsoft Learnで製品「Azure」に絞り込んだ認定は25件、Google Cloudは15件でした。",
  },
  {
    q: "日本の企業はどのくらいクラウドを使っていますか？",
    a: "総務省「令和7年通信利用動向調査」によると、常用雇用者100人以上の企業のうち、クラウドサービスを一部でも利用している企業の割合は83.5％、全社的に利用している企業は60.0％でした。令和3年の70.4％・42.7％から、いずれも増加しています。",
  },
  {
    q: "IaaS・PaaS・SaaSの違いは何ですか？",
    a: "NIST（米国国立標準技術研究所）の定義では、利用者が管理できる範囲が異なります。IaaSは利用者がOS・ストレージ・アプリケーションを管理し、PaaSは利用者が自分のアプリケーションを配置して管理し、SaaSは事業者のアプリケーションを利用者が使う形で、基盤やOSは利用者が管理しません。",
  },
];

const usageRows = [
  { year: "令和3年", n: "2,391", all: "42.7％", part: "27.7％", total: "70.4％" },
  { year: "令和4年", n: "2,425", all: "44.9％", part: "27.3％", total: "72.2％" },
  { year: "令和5年", n: "2,636", all: "50.6％", part: "27.1％", total: "77.7％" },
  { year: "令和6年", n: "2,323", all: "53.1％", part: "27.6％", total: "80.6％" },
  { year: "令和7年", n: "2,486", all: "60.0％", part: "23.5％", total: "83.5％" },
];

const certRows = [
  { vendor: "AWS", levels: "Foundational 2件／Associate 5件／Professional 3件／Specialty 2件／Business 1件（ベータ）", total: "13件", note: "Advanced Networking - Specialtyは2026年12月31日に終了予定と表示" },
  { vendor: "Microsoft Azure", levels: "Fundamentals 5件／Associate 14件／Expert 4件（うちベータ1件）／Specialty 2件", total: "25件", note: "Microsoft Learnで製品「Azure」・種類「Certification」に絞り込んだ件数（Microsoft 365名義の1件を含む）" },
  { vendor: "Google Cloud", levels: "Foundational 2件／Associate 3件／Professional 10件", total: "15件", note: "Associateに「Google Workspace Administrator」を含む" },
];

export default function CloudEngineerKnowledgePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "クラウドエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          クラウドエンジニアとは｜NISTの定義・責任共有モデル・3社の認定資格数を一次情報で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】クラウドエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>クラウドエンジニアとは、AWS・Microsoft Azure・Google Cloudなどのクラウドサービスを使って、システムの基盤を設計・構築・運用する技術者の呼び方です。総務省の日本標準職業分類と厚生労働省編職業分類には独立した項目がなく、公的な定義はありません（当サイトの整理です）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・クラウドそのものは、NIST SP 800-145が「5つの特徴・3つのサービスモデル・4つの実装モデル」で定義しています</li>
              <li>・オンプレミスのインフラとの違いは、責任共有モデルにもとづく役割分担と、設定ファイルで基盤を管理するIaCが前提になる点です</li>
              <li>・クラウドサービスを一部でも利用している企業は83.5％（総務省「令和7年通信利用動向調査」、常用雇用者100人以上の企業）でした</li>
              <li>・AWS・Azure・Google Cloudの公式認定資格は、当サイトの集計で合計53件でした（2026年11月27日確認）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、NIST（米国国立標準技術研究所）によるクラウドの定義、AWSの責任共有モデル、総務省とデジタル庁の公表資料をもとに、クラウドエンジニアとはどのような仕事かをご説明します。あわせて、AWS・Microsoft Azure・Google Cloudの公式ページに掲載されている認定資格を、当サイトでレベル別に数えて1つの表にまとめました。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={[
            "NIST SP 800-145",
            "総務省「日本標準職業分類」",
            "厚生労働省編職業分類（令和4年改定）",
            "総務省「令和7年通信利用動向調査」",
            "デジタル庁「ガバメントクラウド」",
            "AWS Shared Responsibility Model",
            "AWS・Microsoft Learn・Google Cloudの認定資格ページ",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウドエンジニアの定義と公的分類での扱い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「クラウドエンジニア」は求人や企業の職種名として広く使われていますが、公的な職業分類には独立した項目がありません。当サイトでは、次の2つの分類で「クラウド」を含む項目名・例示職業名がないことを確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">「クラウド」を含む項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">近い項目（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">総務省「日本標準職業分類」（説明及び内容例示）</td><td className="border border-slate-200 px-3 py-2">なし</td><td className="border border-slate-200 px-3 py-2">102 システム設計者、105 システム運用管理者（例示に「サーバー管理者」）、106 通信ネットワーク技術者</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">厚生労働省編職業分類（令和4年改定）大分類02</td><td className="border border-slate-200 px-3 py-2">なし</td><td className="border border-slate-200 px-3 py-2">010-02 ITシステム設計技術者（例示に「システムエンジニア（基盤システム）」）、010-04 ITシステム運用管理者、010-06 通信ネットワーク技術者（例示に「サーバー構築技術者」）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「日本標準職業分類 説明及び内容例示」中分類10、ハローワークインターネットサービス「厚生労働省編職業分類（令和4年改定）」大分類02。2026年11月27日に文書内を「クラウド」で検索して確認しました。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            公的な定義がないため、本記事では「クラウドサービス上でシステムの基盤を設計・構築・運用する技術者」を当サイトの整理としてクラウドエンジニアと呼びます。実際の求人では、基盤の構築が中心のもの、運用や監視が中心のもの、アプリケーション開発と兼ねるものなど、担当範囲に幅があります。
          </p>
        </section>

        <section id="nist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウドとは：NISTの定義（5つの特徴・3つのサービスモデル・4つの実装モデル）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            クラウドの定義として広く参照されているのが、NISTが2011年9月に公表した「SP 800-145 The NIST Definition of Cloud Computing」です。クラウドコンピューティングを「構成可能なコンピューティング資源（ネットワーク、サーバー、ストレージ、アプリケーション、サービスなど）の共有プールに、どこからでも、簡便に、必要に応じてネットワーク経由でアクセスでき、最小限の管理労力またはサービス事業者とのやり取りで迅速に提供・解放できるモデル」と定義し、5つの特徴、3つのサービスモデル、4つの実装モデルで構成されるとしています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">NISTの記載（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2" rowSpan={5}>5つの特徴</td><td className="border border-slate-200 px-3 py-2">オンデマンド・セルフサービス</td><td className="border border-slate-200 px-3 py-2">利用者が事業者とのやり取りなしに、必要な資源を自動で確保できる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">幅広いネットワークアクセス</td><td className="border border-slate-200 px-3 py-2">標準的な仕組みでネットワーク経由で利用でき、さまざまな端末から使える</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">リソースの共用</td><td className="border border-slate-200 px-3 py-2">事業者の資源をマルチテナントで共有し、需要に応じて動的に割り当てる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">スピーディな拡張性</td><td className="border border-slate-200 px-3 py-2">需要に応じて迅速に拡大・縮小でき、場合によっては自動で行われる</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">サービスが計測可能</td><td className="border border-slate-200 px-3 py-2">資源の利用量を計測・監視・報告でき、事業者と利用者の双方に透明性がある</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2" rowSpan={3}>3つのサービスモデル</td><td className="border border-slate-200 px-3 py-2">SaaS</td><td className="border border-slate-200 px-3 py-2">事業者のアプリケーションを利用する。基盤・OS・ストレージは利用者が管理しない</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">PaaS</td><td className="border border-slate-200 px-3 py-2">利用者が作成・取得したアプリケーションを配置する。基盤・OSは管理せず、アプリケーションを管理する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">IaaS</td><td className="border border-slate-200 px-3 py-2">処理能力・ストレージ・ネットワークなどを確保し、OSやアプリケーションを利用者が管理する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2" rowSpan={4}>4つの実装モデル</td><td className="border border-slate-200 px-3 py-2">プライベートクラウド</td><td className="border border-slate-200 px-3 py-2">単一の組織が専有する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">コミュニティクラウド</td><td className="border border-slate-200 px-3 py-2">目的やセキュリティ要件などを共有する組織群が専有する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">パブリッククラウド</td><td className="border border-slate-200 px-3 py-2">一般に公開され、クラウド事業者の施設に存在する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ハイブリッドクラウド</td><td className="border border-slate-200 px-3 py-2">2つ以上の異なるクラウドを、データやアプリケーションを移せる技術で結び付けたもの</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：NIST SP 800-145（2011年9月）。日本語の項目名と要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            クラウドエンジニアの担当範囲は、どのサービスモデルを使うかで変わります。IaaSではOSの更新やミドルウェアの設定まで利用者側の仕事になり、PaaSやSaaSでは利用者が管理する範囲が狭くなります。次の章でご説明する責任共有モデルも、この区分を前提にしています。
          </p>
        </section>

        <section id="work" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウド特有の業務：責任共有モデルとIaC</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            サーバーやネットワークの設計・構築・運用という工程そのものは、オンプレミスのインフラと共通です（工程ごとの仕事内容は<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link>でご説明しています）。ここでは、クラウドならではの考え方として、責任共有モデルとIaCの2つに絞ってご説明します。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-3">責任共有モデル（Shared Responsibility Model）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            AWSは、セキュリティとコンプライアンスをAWSと利用者の共有責任とし、AWSの責任を「クラウドのセキュリティ（Security of the Cloud）」、利用者の責任を「クラウドにおけるセキュリティ（Security in the Cloud）」と区別しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">責任の主体</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">AWSの記載（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">AWS（クラウドのセキュリティ）</td><td className="border border-slate-200 px-3 py-2">AWSのサービスを動かすインフラ（ハードウェア、ソフトウェア、ネットワーク、施設）を保護する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">利用者：Amazon EC2（IaaS）の場合</td><td className="border border-slate-200 px-3 py-2">ゲストOSの管理（更新・セキュリティパッチを含む）、利用者が導入したアプリケーション、セキュリティグループ（ファイアウォール）の設定</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">利用者：Amazon S3・DynamoDBなど抽象化されたサービスの場合</td><td className="border border-slate-200 px-3 py-2">インフラ・OS・プラットフォームはAWSが運用し、利用者はデータの管理（暗号化の選択を含む）、資産の分類、IAMによる適切な権限設定を担う</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：AWS「Shared Responsibility Model」。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            AWSは、利用者の責任は選ぶサービスによって変わるとしています。クラウドエンジニアの仕事には、利用するサービスごとに「どこまでが自社の責任か」を整理し、OSの更新、アクセス権限、通信の制御、データの暗号化などの設定を漏れなく行うことが含まれます。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-3">IaC（Infrastructure as Code）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            HashiCorpはTerraformの公式チュートリアルで、IaCツールを「画面操作ではなく設定ファイルでインフラを管理するもの」と説明し、バージョン管理・再利用・共有ができるリソース定義によって、インフラを安全で一貫した、再現可能な方法で構築・変更・管理できるとしています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            クラウドでは、NISTの定義にある「オンデマンド・セルフサービス」によって、サーバーやネットワークをAPI経由ですぐに作成・削除できます。そのため、手作業の設定ではなく、コードで構成を定義してレビューや変更履歴の管理を行う進め方が広く取られています。Terraformの転職市場での扱いは<Link href="/skill/terraform/" className="text-blue-600 hover:underline">Terraform/IaCエンジニアの転職ガイド</Link>でご説明しています。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業のクラウド利用率の推移とガバメントクラウド</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省「令和7年通信利用動向調査」（2026年5月29日公表）の企業編から、クラウドサービスの利用状況の推移を当サイトで抜き出しました。対象は公務を除く産業に属する常用雇用者100人以上の企業で、調査時点は令和7年8月末です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">調査年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">回答企業数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全社的に利用</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">一部の事業所・部門で利用</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">利用している（計）</th>
                </tr>
              </thead>
              <tbody>
                {usageRows.map((r) => (
                  <tr key={r.year}>
                    <td className="border border-slate-200 px-3 py-2">{r.year}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.n}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.all}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.part}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「令和7年通信利用動向調査の結果」図表4-1 クラウドサービスの利用状況の推移。「利用している（計）」は同図表に記載された値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            クラウドサービスを一部でも利用している企業の割合は、令和3年の70.4％から令和7年の83.5％へ13.1ポイント、全社的に利用している企業は42.7％から60.0％へ17.3ポイント増えました（当サイト算出）。同調査では、利用しているサービスの内容は「ファイル保管・データ共有」（73.3％）が最も多く、「システム開発、webサイト構築」は17.6％でした。クラウドを使う企業は増えていますが、利用の中心は既製のサービス（SaaS）であり、クラウドエンジニアが基盤を設計・構築する場面はその一部と考えられます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            行政でもクラウドの利用が進んでいます。デジタル庁は、政府共通のクラウドサービスの利用環境として「ガバメントクラウド」を整備しており、2026年3月27日に公表した令和8年度募集分の対象クラウドサービスとして、Amazon Web Services、Google Cloud、Microsoft Azure、Oracle Cloud Infrastructure、さくらのクラウドの5つを選定しています。さくらのクラウドについては、すべての技術要件を満たしたことを確認し、2026年3月27日以降に本番環境の提供が可能になったと公表しています。
          </p>
        </section>

        <section id="certs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWS・Azure・Google Cloudの認定資格数（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            クラウドエンジニアに必須の資格はありませんが、各クラウド事業者は公式の認定資格を設けています。当サイトでは2026年11月27日に各社の公式ページを開き、掲載されている認定をレベル区分ごとに数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">クラウド</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">レベル区分と件数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合計</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {certRows.map((r) => (
                  <tr key={r.vendor}>
                    <td className="border border-slate-200 px-3 py-2">{r.vendor}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.levels}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.total}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">集計方法：AWS「AWS Certification」、Microsoft Learn「資格情報の参照」（製品＝Azure、種類＝Certification で絞り込み、25 results と表示）、Google Cloud「Certification」の各ページに掲載された認定名を、ページ上のレベル区分ごとに当サイトで数えました（2026年11月27日確認）。認定は追加・終了が頻繁にあるため、受験前に公式ページをご確認ください。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            3社とも、入門（Foundational／Fundamentals）から上位（Professional／Expert）までの段階を設けています。AWSは入門とAssociateのあとにProfessionalとSpecialtyを置き、Microsoftは役割ごとのAssociateが14件と最も多く、Google CloudはProfessionalが10件で全体の3分の2を占めます（当サイト集計）。3社とも、生成AIやエージェントに関する認定が並んでいる点も共通しています。各社の資格の選び方は、<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>・<Link href="/skill/azure/" className="text-blue-600 hover:underline">Azure</Link>・<Link href="/skill/gcp/" className="text-blue-600 hover:underline">GCP</Link>の転職ガイドでご説明しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インフラエンジニア・SRE・転職情報との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はクラウドエンジニアという職種の定義と、クラウドの仕組みに絞ってご説明しました。近いテーマの記事とは、次のように扱う内容を分けています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>インフラの工程と職業分類・賃金：<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link></li>
            <li>信頼性を高める運用の考え方（SLO・エラーバジェット）：<Link href="/knowledge/sre/" className="text-blue-600 hover:underline">SREとは</Link></li>
            <li>開発と運用の連携（DORAの指標）：<Link href="/knowledge/devops/" className="text-blue-600 hover:underline">DevOpsとは</Link></li>
            <li>クラウド別の転職ガイド：<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>／<Link href="/skill/azure/" className="text-blue-600 hover:underline">Azure</Link>／<Link href="/skill/gcp/" className="text-blue-600 hover:underline">GCP</Link></li>
            <li>関連技術の転職ガイド：<Link href="/skill/terraform/" className="text-blue-600 hover:underline">Terraform/IaC</Link>／<Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetes</Link>／<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア（クラウド転向を含む）</Link></li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">※ /skill/ 配下の記事は、年収・資格・求人の進め方など転職に関する情報を扱っています。</p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>NIST SP 800-145 The NIST Definition of Cloud Computing（2011年9月）：https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月統計基準設定）：https://www.soumu.go.jp/toukei_toukatsu/index/seido/shokgyou/21index.htm</li>
            <li>総務省「日本標準職業分類 説明及び内容例示」：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>ハローワークインターネットサービス「厚生労働省編職業分類（令和4年改定）」大分類02 研究・技術の職業：https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary_02.html</li>
            <li>総務省「通信利用動向調査」報道発表資料一覧：https://www.soumu.go.jp/johotsusintokei/statistics/statistics05a.html</li>
            <li>総務省「令和7年通信利用動向調査の結果」（2026年5月29日公表）：https://www.soumu.go.jp/johotsusintokei/statistics/data/260529_1.pdf</li>
            <li>デジタル庁「ガバメントクラウド」：https://www.digital.go.jp/policies/gov_cloud</li>
            <li>デジタル庁「令和8年度募集分ガバメントクラウド対象クラウドサービス」：https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/d6b5753c-c4eb-4ee6-92d0-21b3fa945a82/8bcd22f0/20260327_policies_gov_cloud_outline_01.pdf</li>
            <li>AWS「Shared Responsibility Model」：https://aws.amazon.com/compliance/shared-responsibility-model/</li>
            <li>HashiCorp「What is Infrastructure as Code with Terraform?」：https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code</li>
            <li>AWS「AWS Certification」：https://aws.amazon.com/certification/</li>
            <li>Microsoft Learn「資格情報の参照」（製品＝Azure、種類＝Certification）：https://learn.microsoft.com/en-us/credentials/browse/?products=azure&amp;credential_types=certification</li>
            <li>Google Cloud「Certification」：https://cloud.google.com/learn/certification</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "インフラエンジニアの仕事内容", href: "/knowledge/infra-engineer/" },
              { name: "SREとは", href: "/knowledge/sre/" },
              { name: "DevOpsとは", href: "/knowledge/devops/" },
              { name: "AWSエンジニアの転職ガイド", href: "/skill/aws/" },
              { name: "Azureエンジニアの転職ガイド", href: "/skill/azure/" },
              { name: "GCPエンジニアの転職ガイド", href: "/skill/gcp/" },
              { name: "Terraform/IaCエンジニアの転職ガイド", href: "/skill/terraform/" },
              { name: "Kubernetesエンジニアの転職ガイド", href: "/skill/kubernetes/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
