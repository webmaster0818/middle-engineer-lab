import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ITエンジニアの種類一覧｜厚生労働省の職業分類11職種と仕事内容・賃金・対応するIPA試験【2026年】";
const DESCRIPTION =
  "ITエンジニアの種類を、厚生労働省編職業分類の「情報処理・通信技術者」11の小分類にもとづいて一覧にしました。各職種の仕事内容と職業名の例示、賃金構造基本統計調査の職種別賃金、対応するIPA試験を公的資料で整理します。";
const URL = "/knowledge/it-engineer-types/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "list", label: "ITエンジニアの種類一覧（職業分類の11職種）" },
  { id: "detail", label: "職種ごとの仕事内容" },
  { id: "wage", label: "職種別の賃金（賃金構造基本統計調査）" },
  { id: "exam", label: "職種と対応するIPA試験" },
  { id: "choose", label: "転職で職種を選ぶときの考え方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "ITエンジニアには何種類ありますか？",
    a: "決まった数はありませんが、公的な分類として厚生労働省編職業分類（2022年改定）があります。同分類は「情報処理・通信技術者」を、ソフトウェア開発を行う4つの小分類（009）と、ソフトウェア開発以外の7つの小分類（010）の合計11に分けています（それぞれ「その他」を1つずつ含みます）。",
  },
  {
    q: "インフラエンジニアは職業分類のどこに入りますか？",
    a: "「インフラエンジニア」という職業名は分類表にありません。仕事の内容により、サーバーやネットワークの構築を担う場合は「010-06 通信ネットワーク技術者」（例示にサーバーエンジニア（構築・設定を行うもの）、ネットワークエンジニア）、運用・監視・保守を担う場合は「010-04 ITシステム運用管理者」（例示にサーバー管理者、ネットワーク管理者）に分類されます。",
  },
  {
    q: "SEとプログラマーは別の職種ですか？",
    a: "職業分類では別の小分類です。要件定義や設計書の作成を行うSEは「009-01 ソフトウェア開発技術者（WEB・オープン系）」など、設計書にもとづいてプログラムを作成するプログラマーは「009-03 プログラマー」に分類されます。実際の職場では両方を兼ねることも多くあります。",
  },
  {
    q: "AIエンジニアやデータエンジニアはどの分類ですか？",
    a: "「010-99 その他の情報処理・通信技術者（ソフトウェア開発を除く）」の例示に、AIエンジニア、データエンジニア、ビッグデータエンジニアが挙げられています。",
  },
  {
    q: "職種によって年収はどのくらい違いますか？",
    a: "賃金構造基本統計調査は職種を3つにまとめて集計しています。令和7年調査の年収目安（当サイト算出）は、システムコンサルタント・設計者が約889万円、その他の情報処理・通信技術者が約610万円、ソフトウェア作成者が約578万円です。個別の職種ごとの公的な賃金統計はありません。",
  },
];

type Row = { code: string; name: string; group: string; examples: string };
const rows: Row[] = [
  { code: "009-01", name: "ソフトウェア開発技術者（WEB・オープン系）", group: "開発", examples: "システムエンジニア（WEBサイト開発）、システムエンジニア（業務用システム）、モバイルアプリケーション開発技術者" },
  { code: "009-02", name: "ソフトウェア開発技術者（組込・制御系）", group: "開発", examples: "組込系ソフトウェア開発技術者、システムエンジニア（組込、IoT）、ファームウェア開発技術者" },
  { code: "009-03", name: "プログラマー", group: "開発", examples: "Webプログラマー、Webアプリケーションプログラマー、コンピュータゲームプログラマー、HTMLコーダー" },
  { code: "009-99", name: "その他（ソフトウェア開発）", group: "開発", examples: "テストエンジニア、ソフトウェアテスト技術者、ローカライズ技術者、ソフトウェア開発技術者（汎用機器系）" },
  { code: "010-01", name: "ITコンサルタント", group: "企画・設計", examples: "システムアナリスト、システムコンサルタント、ERPパッケージコンサルタント、情報セキュリティコンサルタント" },
  { code: "010-02", name: "ITシステム設計技術者", group: "企画・設計", examples: "システムアーキテクト、ITアーキテクト、ソフトウェアアーキテクト、システムエンジニア（基盤システム）" },
  { code: "010-03", name: "ITプロジェクトマネージャ", group: "管理", examples: "プロジェクトマネージャ（システム開発）、プロジェクトマネージャ（IT）" },
  { code: "010-04", name: "ITシステム運用管理者", group: "インフラ・運用", examples: "サーバー管理者、ネットワーク管理者、システム運用管理者、情報セキュリティ技術者、社内システムエンジニア（主にシステムの運用に従事するもの）" },
  { code: "010-05", name: "ITヘルプデスク", group: "インフラ・運用", examples: "社内ヘルプデスク、社内サポートデスク" },
  { code: "010-06", name: "通信ネットワーク技術者", group: "インフラ・運用", examples: "ネットワークエンジニア、サーバーエンジニア（構築・設定を行うもの）、サーバー構築技術者" },
  { code: "010-99", name: "その他（ソフトウェア開発を除く）", group: "その他", examples: "AIエンジニア、データエンジニア、ビッグデータエンジニア、セキュリティエンジニア（脆弱性診断）、情報システム監査技術者" },
];

const examRows = [
  { job: "ITコンサルタント（010-01）", exam: "ITストラテジスト試験" },
  { job: "ITシステム設計技術者（010-02）", exam: "システムアーキテクト試験" },
  { job: "ITプロジェクトマネージャ（010-03）", exam: "プロジェクトマネージャ試験" },
  { job: "ITシステム運用管理者（010-04）", exam: "ITサービスマネージャ試験、情報処理安全確保支援士試験" },
  { job: "通信ネットワーク技術者（010-06）", exam: "ネットワークスペシャリスト試験" },
  { job: "ソフトウェア開発技術者（組込・制御系）（009-02）", exam: "エンベデッドシステムスペシャリスト試験" },
  { job: "データエンジニアなど（010-99）", exam: "データベーススペシャリスト試験" },
  { job: "情報システム監査技術者（010-99）", exam: "システム監査技術者試験" },
  { job: "開発職全般（009-01・009-03 など）", exam: "基本情報技術者試験、応用情報技術者試験" },
];

export default function ItEngineerTypesPage() {
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
          { name: "ITエンジニアの種類" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITエンジニアの種類一覧｜厚生労働省の職業分類11職種と仕事内容・賃金・対応するIPA試験
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公的資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ITエンジニアの種類</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>厚生労働省編職業分類（2022年改定）は、ITエンジニアにあたる「情報処理・通信技術者」を、ソフトウェア開発の4職種と、それ以外の7職種の合計11に分けています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・開発：WEB・オープン系の開発技術者（SE）、組込・制御系の開発技術者、プログラマー、テストエンジニアなど</li>
              <li>・開発以外：ITコンサルタント、ITシステム設計技術者、ITプロジェクトマネージャ、ITシステム運用管理者、ITヘルプデスク、通信ネットワーク技術者、AIエンジニアなど</li>
              <li>・令和7年賃金構造基本統計調査の年収目安は、職種のまとまりにより約578万〜約889万円です（当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          求人票の職種名は「インフラエンジニア」「Webエンジニア」など企業ごとに異なり、同じ名前でも担当範囲が違うことがあります。本記事では、職業を整理する公的な基準である厚生労働省編職業分類（労働政策研究・研修機構の改定資料）を軸に、ITエンジニアの種類を一覧にしました。あわせて、令和7年賃金構造基本統計調査の職種別賃金と、IPA（情報処理推進機構）の試験区分との対応を掲載します。職種と試験の対応表は、当サイトが各資料の定義を照らし合わせて作成したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年）", "厚生労働省「令和7年賃金構造基本統計調査」", "IPA「試験区分一覧」・各試験区分ページ"]}
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

        <section id="list" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITエンジニアの種類一覧（職業分類の11職種）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の中分類「009 情報処理・通信技術者（ソフトウェア開発）」と「010 情報処理・通信技術者（ソフトウェア開発を除く）」に属する小分類です。「区分」の列は、読みやすさのために当サイトが付けたまとまりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">番号</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">小分類（職種）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">職業名の例示（抜粋）</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.code}>
                    <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{r.code}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{r.group}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年 第5回改定）。例示は分類表の「○」欄からの抜粋です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            11職種のうち、例示に「システムエンジニア」を含むものは009-01・009-02・010-02の3つ、「サーバー」を含むものは010-04（サーバー管理者）と010-06（サーバーエンジニア・サーバー構築技術者）の2つです（当サイト集計）。求人票の「SE」「インフラエンジニア」は、複数の小分類にまたがる呼び方だといえます。
          </p>
        </section>

        <section id="detail" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種ごとの仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">分類表の定義を要約しました（要約は当サイトによるものです）。</p>
          <ul className="space-y-3 text-sm text-slate-700 leading-7">
            <li><strong>ソフトウェア開発技術者（WEB・オープン系）</strong>：ウェブ系・オープン系のソフトウェアを作成するため、要件定義、基本設計書・詳細設計書・仕様書の作成などを行います。詳しくは<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SEの仕事内容</Link>をご覧ください。</li>
            <li><strong>ソフトウェア開発技術者（組込・制御系）</strong>：機械器具に組み込まれ、その動作を制御するマイクロコントローラのソフトウェアを開発します。</li>
            <li><strong>プログラマー</strong>：設計書にもとづくプログラムの作成、テスト、保守に必要な文書の作成を行います。</li>
            <li><strong>その他（ソフトウェア開発）</strong>：プログラムの検査と誤りの修正、外国製ソフトウェアの日本語化、汎用コンピュータ用ソフトウェアの保守などを行います。</li>
            <li><strong>ITコンサルタント</strong>：経営・業務環境の分析にもとづいて課題を整理し、ITを活用したシステムを提案します。詳しくは<Link href="/knowledge/it-consultant/" className="text-blue-600 hover:underline">ITコンサルタントとは</Link>をご覧ください。</li>
            <li><strong>ITシステム設計技術者</strong>：ハードウェア・ソフトウェア・ネットワークで構成されるシステム全体の基本構造を企画・設計します。システム導入の企画・監督を含みます。</li>
            <li><strong>ITプロジェクトマネージャ</strong>：システム開発プロジェクトの責任者として、実行計画の作成、予算・要員・進捗・品質の管理を行います。プロジェクトリーダーやPMO事務員は別の分類です（<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link>）。</li>
            <li><strong>ITシステム運用管理者</strong>：構築されたシステムとネットワークの運用・監視・維持・管理・安全性確保・保守を行います。</li>
            <li><strong>ITヘルプデスク</strong>：社内に常駐するなどして、システムやIT機器の操作の問い合わせ対応、コンピュータの設定、障害時の対応を行います。</li>
            <li><strong>通信ネットワーク技術者</strong>：データ通信のネットワークシステムを構築するため、要件定義、設計書の作成、ネットワーク機器・サーバーの設置・設定、試験を行います。詳しくは<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link>をご覧ください。</li>
            <li><strong>その他（ソフトウェア開発を除く）</strong>：上記に含まれない情報処理・通信技術の仕事で、AIエンジニアやデータエンジニア、脆弱性診断を行うセキュリティエンジニアなどが含まれます。</li>
          </ul>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種別の賃金（賃金構造基本統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査は、ITエンジニアを3つの職種にまとめて集計しています。令和7年調査（産業計・企業規模10人以上・男女計）の値です。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">統計上の職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主に対応する職業分類（当サイトの整理）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント・設計者</td><td className="border border-slate-200 px-3 py-2">ITコンサルタント、ITシステム設計技術者、ITプロジェクトマネージャ</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">約889万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2">ソフトウェア開発技術者、プログラマー</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td><td className="border border-slate-200 px-3 py-2 text-right">約578万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">その他の情報処理・通信技術者</td><td className="border border-slate-200 px-3 py-2">ITシステム運用管理者、通信ネットワーク技術者、ITヘルプデスクなど</td><td className="border border-slate-200 px-3 py-2 text-right">42.2歳</td><td className="border border-slate-200 px-3 py-2 text-right">約610万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat）。年収目安は残業代を含む月額をもとにした当サイトの概算です。統計上の職種と職業分類の対応は当サイトの整理で、統計の正式な対応表ではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            企画・設計を担うシステムコンサルタント・設計者と、ソフトウェア作成者の年収目安の差は約311万円です。職種ごとの年収の比較は<Link href="/salary/job-type-salary/" className="text-blue-600 hover:underline">ITエンジニア職種別 年収ランキング</Link>でご説明しています。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種と対応するIPA試験</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの情報処理技術者試験・情報処理安全確保支援士試験は13区分です（IPA「試験区分一覧」）。各試験区分ページの対象者像と、職業分類の定義を照らし合わせて、当サイトが対応を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種（職業分類）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">対応するIPA試験</th>
                </tr>
              </thead>
              <tbody>
                {examRows.map((r) => (
                  <tr key={r.job}>
                    <td className="border border-slate-200 px-3 py-2">{r.job}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.exam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「試験区分一覧」・各試験区分ページ、労働政策研究・研修機構「厚生労働省編職業分類」。対応は当サイトの整理で、IPAが定めたものではありません。ITパスポート試験・情報セキュリティマネジメント試験はIT利用者向けのため表から除いています。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            資格は応募の必須条件ではないことが多いものの、未経験の職種へ移るときに知識を示す材料になります。資格ごとの転職での評価は<Link href="/cert/" className="text-blue-600 hover:underline">資格ガイド一覧</Link>をご覧ください。
          </p>
        </section>

        <section id="choose" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で職種を選ぶときの考え方</h2>
          <p className="text-slate-600 leading-relaxed">
            求人票の職種名だけで判断せず、仕事内容の欄に書かれた工程（要件定義・設計・構築・運用など）を見て、上の11職種のどれに近いかを確かめると、入社後の仕事とのずれを減らせます。たとえば「インフラエンジニア」の求人でも、構築が中心なら通信ネットワーク技術者、監視・保守が中心ならITシステム運用管理者に近い仕事です。求人票の読み方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>、開発の工程の違いは<Link href="/knowledge/upstream/" className="text-blue-600 hover:underline">上流工程とは</Link>でご説明しています。
          </p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月26日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>IPA「試験区分一覧」：https://www.ipa.go.jp/shiken/kubun/index.html</li>
            <li>IPA「ネットワークスペシャリスト試験」：https://www.ipa.go.jp/shiken/kubun/nw.html</li>
            <li>IPA「情報処理安全確保支援士試験」：https://www.ipa.go.jp/shiken/kubun/sc.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SE（システムエンジニア）の仕事内容", href: "/knowledge/se/" },
              { name: "インフラエンジニアの仕事内容", href: "/knowledge/infra-engineer/" },
              { name: "ITエンジニア職種別 年収ランキング", href: "/salary/job-type-salary/" },
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
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
