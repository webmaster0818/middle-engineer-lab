import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "データベースエンジニアとは｜仕事内容・設計から運用までの工程・DBAとの違い【2026年】";
const DESCRIPTION =
  "データベースエンジニアとは、データベースの設計・構築・運用を担う技術職です。国際標準職業分類の定義、日本の職業分類での位置、工程ごとの仕事内容、DBAとの違いを一次情報で整理し、欧州ESCOのスキル照合とSQLiteでのインデックス実測（当サイト）を掲載します。";
const URL = "/knowledge/database-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "データベースエンジニアの定義（公的資料での扱い）" },
  { id: "classification", label: "日本の職業分類での位置" },
  { id: "process", label: "仕事内容：企画から運用・保守までの工程" },
  { id: "dba", label: "DBA（データベース管理者）との違い" },
  { id: "esco", label: "ESCOの4職業のスキル照合（当サイト集計）" },
  { id: "run", label: "設計と性能の例（当サイトでの実行結果）" },
  { id: "data", label: "調査・ランキングのデータ" },
  { id: "related", label: "転職・資格・SQLの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "データベースエンジニアとは簡単に言うと何ですか？",
    a: "情報システムで使うデータベースを設計・構築し、運用・保守する技術職です。日本の公的な職業分類には「データベースエンジニア」という職業名がないため、本記事では国際標準職業分類（ISCO-08）の「2521 データベース設計者・管理者」の定義（総務省仮訳）を参考にしています。",
  },
  {
    q: "データベースエンジニアとDBAの違いは何ですか？",
    a: "公的な線引きはありません。欧州委員会の職業分類ESCOでは、同じISCO区分（2521）の下に、データベース管理者（DBA）・データベース設計者・データベース開発者・データベース統合担当者の4職業が置かれています。DBAは、性能の維持、セキュリティ、バックアップなど稼働中のデータベースの管理が中心です。日本の求人でいう「データベースエンジニア」は、これらの複数の役割をまとめた職種名として使われることがあります。",
  },
  {
    q: "データベースエンジニアは日本の職業分類ではどこに入りますか？",
    a: "厚生労働省編職業分類（2022年改定）と総務省の日本標準職業分類（2009年告示）のいずれにも、「データベースエンジニア」「データベース管理者」という職業名は収録されていません（当サイトで本文を検索して確認）。厚生労働省編職業分類の説明に当てはめると、主に従事する仕事によって「010-02 ITシステム設計技術者」や「010-04 ITシステム運用管理者」などに分類されると考えられます（当サイトの整理）。",
  },
  {
    q: "データベースエンジニアの仕事にはどのような工程がありますか？",
    a: "IPAのデータベーススペシャリスト試験は、業務を「データ資源及びデータベースを企画・要件定義・開発・運用・保守する業務」としています。具体的には、利用者の要求の分析、概念データモデルの作成、テーブルや物理構造の設計、データベース管理システムの構築と試験、性能の維持、バックアップとリカバリ、アクセス権限などの安全管理が含まれます。",
  },
  {
    q: "インデックスを作ると検索はどれくらい速くなりますか？",
    a: "データの件数や条件によって大きく異なります。当サイトのPC（Apple M4・SQLite 3.51.0・メモリ上のデータベース）で100万行の表を顧客IDで検索したところ、1回あたりの中央値はインデックスなしで約18ミリ秒、ありで約0.007ミリ秒でした。一方で、1万行の追加にかかる時間はインデックスありのほうが長くなりました。参考値としてご覧ください。",
  },
];

const definitionRows = [
  { src: "国際標準職業分類 ISCO-08（総務省仮訳）", name: "2521 データベース設計者・管理者", note: "職業の例：データ管理者、データベース管理者、データベースアナリスト、データベースアーキテクト" },
  { src: "厚生労働省編職業分類（2022年改定・JILPT）", name: "職業名として収録なし", note: "IT関連の小分類（009・010）の説明・例示に「データベース」の語なし" },
  { src: "日本標準職業分類（総務省・2009年告示）", name: "職業名として収録なし", note: "近い項目はシステム設計者（102）、システム運用管理者（105）など" },
  { src: "IPA データベーススペシャリスト試験", name: "試験の対象者像として記載", note: "データ資源及びデータベースを企画・要件定義・開発・運用・保守する業務に従事する者" },
  { src: "ESCO（欧州委員会）", name: "4職業（2521.1〜2521.4）", note: "database administrator／database designer／database developer／database integrator" },
  { src: "O*NET（米国労働省の職業情報）", name: "2職業", note: "Database Administrators（15-1242.00）、Database Architects（15-1243.00）" },
];

const processRows = [
  { step: "企画・要件定義", work: "データベースに対する要求の分析、扱うデータ資源の整理、製品・技術の選定", basis: "IPA：要求を分析し、効率性・信頼性・安全性を考慮した企画・要件定義を行う／ISCO：管理ツールの選定・適用に関する研究・助言" },
  { step: "設計（概念・論理）", work: "業務のデータを整理した概念データモデルの作成、テーブル・データ構造・命名規則の設計", basis: "IPA：利用者の要求にもとづいて正確な概念データモデルを作成できる／ISCO：データ構造・テーブル・辞書・命名規則の設計・開発" },
  { step: "設計（物理）", work: "格納方式・インデックス・容量など、性能を左右する物理構造の設計", basis: "ESCO（DBA）：define database physical structure／O*NET（Architects）：データパーティション、関数ベースのインデックスなどの設計" },
  { step: "構築・試験", work: "データベース管理システムの導入と設定、データの移行、変更内容の試験", basis: "ISCO：データベース管理システムの設計・構築・変更・統合・実行・試験／ESCO（設計者）：migrate existing data" },
  { step: "運用・保守", work: "性能の監視と改善、バックアップとリカバリ、アクセス権限の管理、ソフトウェアの更新", basis: "ISCO：バックアップ・リカバリ手順・安全管理・整合性管理といった運用及び予防保守／O*NET（DBA）：利用者ごとのアクセス権限の設定、性能向上のための更新の計画・導入" },
];

const escoSummary = [
  { name: "database administrator（データベース管理者）", code: "2521.1", ess: "25項目", opt: "28項目", only: "11項目" },
  { name: "database designer（データベース設計者）", code: "2521.2", ess: "27項目", opt: "68項目", only: "17項目" },
  { name: "database developer（データベース開発者）", code: "2521.3", ess: "18項目", opt: "80項目", only: "6項目" },
  { name: "database integrator（データベース統合担当者）", code: "2521.4", ess: "16項目", opt: "42項目", only: "9項目" },
];

const dbaOnly = [
  "ICTシステムの管理（administer ICT system）",
  "会社の方針の適用（apply company policies）",
  "データモデル（data models）",
  "データベースの物理構造の定義（define database physical structure）",
  "バックアップ仕様の設計（design database backup specifications）",
  "分散コンピューティング（distributed computing）",
  "データベース性能の維持（maintain database performance）",
  "データベースのセキュリティの維持（maintain database security）",
  "ICTのトラブルシューティング（perform ICT troubleshooting）",
  "システムバックアップのベストプラクティス（system backup best practice）",
  "スクリプト言語の使用（use scripting programming）",
];

const designerOnlyPick = [
  "業務要件の分析（analyse business requirements）",
  "業務プロセスのモデリング（business process modelling）",
  "技術要件の定義（define technical requirements）",
  "ソフトウェア設計の作成（create software design）",
  "既存データの移行（migrate existing data）",
  "自動移行手段の開発（develop automated migration methods）",
  "データ交換の標準の管理（manage standards for data exchange）",
  "システム開発ライフサイクル（systems development life-cycle）",
];

const onetRows = [
  { item: "職業の説明（要約・当サイト訳）", dba: "データベースの管理・試験・導入、変更の調整、性能・容量・拡張性の問題の調査と解決。セキュリティ対策の計画・実施を担うこともある", arch: "企業のデータベース・データウェアハウスの戦略の設計、運用・プログラミング・クエリ・セキュリティの標準の策定、大規模なリレーショナルデータベースの設計・構築" },
  { item: "報告された職名の例（抜粋）", dba: "Database Administrator (DBA)、Database Engineer、Database Analyst", arch: "Database Architect、Database Developer、Data Architect、Data Engineer" },
  { item: "雇用者数（2025年）", dba: "75,000人", arch: "69,500人" },
  { item: "賃金の中央値（2025年・年額）", dba: "104,620ドル", arch: "139,500ドル" },
  { item: "雇用の伸びの見通し（2025〜2035年）", dba: "Little or no change（ほぼ横ばい）", arch: "Much faster than average（7％以上）" },
];

const dbeRows = [
  { rank: "1", name: "Oracle", model: "Relational", score: "1,096.15" },
  { rank: "2", name: "MySQL", model: "Relational", score: "823.23" },
  { rank: "3", name: "Microsoft SQL Server", model: "Relational", score: "693.53" },
  { rank: "4", name: "PostgreSQL", model: "Relational", score: "689.69" },
  { rank: "5", name: "MongoDB", model: "Document", score: "366.14" },
  { rank: "6", name: "Snowflake", model: "Relational", score: "218.29" },
  { rank: "7", name: "Databricks", model: "Multi-model", score: "176.76" },
  { rank: "8", name: "Redis", model: "Key-value", score: "163.29" },
  { rank: "9", name: "IBM Db2", model: "Relational", score: "102.10" },
  { rank: "10", name: "Apache Cassandra", model: "Wide column", score: "98.41" },
];

const indexCode = `CREATE TABLE orders(id INTEGER PRIMARY KEY, customer_id INTEGER, amount INTEGER, ordered_at TEXT);
-- 100万行を投入（customer_id は 1〜100,000 の乱数）
SELECT COUNT(*), SUM(amount) FROM orders WHERE customer_id = ?;   -- 100通りのIDで実行し中央値を測定
CREATE INDEX idx_orders_customer ON orders(customer_id);           -- 作成後に同じ検索を再測定`;

const indexOutput = `$ python3 -I idx.py
python 3.9.6 sqlite 3.51.0 macOS-26.5.2-arm64-arm-64bit arm64
rows 1000000
PLAN before: [(3, 0, 216, 'SCAN orders')]
median ms before: 17.980
create index ms: 213
PLAN after: [(4, 0, 61, 'SEARCH orders USING INDEX idx_orders_customer (customer_id=?)')]
median ms after: 0.007
insert 10000 with index ms: 16.2
insert 10000 without index ms: 6.2`;

const normOutput = `$ python3 -I norm.py
flat: [('顧客A', '03-0000-0009'), ('顧客A', '03-0000-0001')]
normalized updated rows: 1
normalized: [('顧客A', '03-0000-0009')]`;

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function DatabaseEngineerKnowledgePage() {
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
          { name: "データベースエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データベースエンジニアとは｜仕事内容・設計から運用までの工程・DBAとの違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】データベースエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>データベースエンジニアとは、情報システムで使うデータベースを企画・設計・構築し、稼働後の性能・安全性・バックアップを管理する技術職です。日本の公的な職業分類には同じ名前の職業がなく、本記事では国際標準職業分類の「データベース設計者・管理者」の定義を参考にしています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・仕事は「企画・要件定義→設計（概念・論理・物理）→構築・試験→運用・保守」の工程に分けて整理できます（IPAの試験区分の記載にもとづく当サイトの整理）</li>
              <li>・DBA（データベース管理者）は、そのうち稼働中のデータベースの性能・セキュリティ・バックアップを中心に担う役割です</li>
              <li>・欧州ESCOの関連4職業の必須スキルを照合すると、4職業すべてに共通する項目は3項目にとどまりました（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「データベースエンジニア」は求人で広く使われている職種名ですが、日本の公的な職業分類には同じ名前の項目がありません。本記事では、総務省が掲載している国際標準職業分類（ISCO-08）の仮訳、厚生労働省編職業分類、日本標準職業分類、IPAのデータベーススペシャリスト試験の対象者像、欧州委員会のESCO、米国のO*NETを当サイトで確認し、職種の定義と仕事内容を整理しました。あわせて、ESCOの関連4職業のスキル一覧を取得して照合した結果と、当サイトのPCでSQLiteを使って正規化とインデックスの効果を確かめた結果を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["総務省「国際標準職業分類2008年改定版（仮訳）」", "JILPT「第5回改定 厚生労働省編職業分類」", "総務省「日本標準職業分類」", "IPA「データベーススペシャリスト試験」", "欧州委員会 ESCO API", "O*NET OnLine", "Stack Overflow Developer Survey 2025", "DB-Engines Ranking（2026年11月）"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースエンジニアの定義（公的資料での扱い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本と海外の公的な職業分類・試験制度で、データベースを専門とする職業がどのように扱われているかを当サイトで確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>データベース専門の職業の扱い</th>
                  <th className={th}>補足</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((r) => (
                  <tr key={r.src}>
                    <td className={td}>{r.src}</td>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">確認方法：各資料のPDFをテキストに変換して「データベース」を検索したほか、ESCOはAPI、O*NETは職業ページ、IPAは試験区分のページで確認しました（2026年11月28日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            職務の内容まで定義しているのは国際標準職業分類です。総務省の仮訳では、「2521 データベース設計者・管理者」を次のように説明しています。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm">
            データベース設計者・管理者には、データベースの最適な動作及び安全に関わる設計・開発・管理・保守・サポートを行うものが分類される。職務には次のものが含まれる。（ａ）情報システムプロジェクトのデータベースアーキテクチャ・データ構造・テーブル・辞書及び命名規則の設計・開発（ｂ）データベース管理システムの設計・構築・変更・統合・実行・試験（ｃ）データベース管理ツールの選定・適用・実行に関する研究・助言（ｄ）データ管理方針・ドキュメンテーション・基準・モデルの策定・実行（ｅ）データベースアクセス・データベース利用・データバックアップ及びデータリカバリに関わる方針・手順の策定（ｆ）バックアップ・リカバリ手順・安全管理・整合性管理といった運用及び予防保守の遂行
          </blockquote>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」2521。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じ仮訳では、システムアドミニストレーターとネットワーク管理者を「2522」、ウェブサイト管理者を「3514」に分けています。サーバーやネットワーク全体の管理とは別に、データベースの設計と管理を1つの職業のまとまりとして扱っている点が特徴です。サーバーやネットワークを含む基盤の仕事は、<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link>でご説明しています。
          </p>
        </section>

        <section id="classification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本の職業分類での位置</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）の本文を当サイトで検索したところ、「データベース」という語は特許調査に関する1か所だけで、IT関連の小分類（009 ソフトウェア開発技術者、010 情報処理・通信技術者）の説明と例示には含まれていませんでした。データベースエンジニアの仕事は、主に従事する内容によって次の小分類に分かれると考えられます（当サイトの整理です）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>小分類</th>
                  <th className={th}>職業分類の説明（要約）</th>
                  <th className={th}>対応するデータベースの仕事（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>010-02 ITシステム設計技術者</td><td className={td}>ハードウェア・ソフトウェア・ネットワークなどで構成されるシステムについて、全体の基本構造を企画・設計する</td><td className={td}>データベースの方式の選定、全体のデータ構造の設計</td></tr>
                <tr><td className={td}>010-04 ITシステム運用管理者</td><td className={td}>構築されたシステム及びネットワークの運用・監視・維持・管理・安全性確保・保守を行う。例示にサーバー管理者、システム管理者など</td><td className={td}>稼働中のデータベースの監視、バックアップ、権限管理</td></tr>
                <tr><td className={td}>009-01 ソフトウェア開発技術者（WEB・オープン系）</td><td className={td}>要件定義、基本設計書・詳細設計書・仕様書の作成などの開発の仕事を行う</td><td className={td}>アプリケーション開発の一部としてのテーブル設計</td></tr>
                <tr><td className={td}>010-99 その他の情報処理・通信技術者</td><td className={td}>010-01〜010-06に含まれない技術的な仕事。例示にデータエンジニア、ビッグデータエンジニアなど</td><td className={td}>分析基盤・データウェアハウスの構築</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年12月）。右列は当サイトによる対応づけです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            総務省の日本標準職業分類（2009年告示）にも「データベース」を含む職業名はなく、近い項目はシステム設計者（102）、ソフトウェア作成者（104）、システム運用管理者（105）です。日本の職業分類では、データベースの仕事は「設計」「開発」「運用」のそれぞれの職業に含まれる形になっており、求人票の職種名だけでは担当する工程を判断しにくい点にご注意ください。大量データの分析基盤については<Link href="/knowledge/big-data/" className="text-blue-600 hover:underline">ビッグデータとは</Link>で扱っています。
          </p>
        </section>

        <section id="process" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕事内容：企画から運用・保守までの工程</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAのデータベーススペシャリスト試験は、対象となる人の業務を「データ資源及びデータベースを企画・要件定義・開発・運用・保守する業務」としています。この区分に沿って、各資料の記載を工程ごとに整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>工程</th>
                  <th className={th}>主な作業</th>
                  <th className={th}>根拠となる記載</th>
                </tr>
              </thead>
              <tbody>
                {processRows.map((r) => (
                  <tr key={r.step}>
                    <td className={td}>{r.step}</td>
                    <td className={td}>{r.work}</td>
                    <td className={td}>{r.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「データベーススペシャリスト試験」（対象者像・業務と役割・期待する技術水準）、総務省 ISCO-08仮訳 2521、ESCO、O*NET OnLine。工程の分け方と「主な作業」の列は当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            IPAは、期待する技術水準として「データモデリング技法を理解し、利用者の要求に基づいてデータ分析を行い、正確な概念データモデルを作成できる」ことや、「データベース管理システムの特性を理解し、情報セキュリティも考慮し、高品質なデータベースの企画、要件定義、開発、運用、保守ができる」ことを挙げています。また、役割として「データ管理者として、情報システム全体のデータ資源を管理する」ことと、「個別システム開発の企画・要件定義・開発・運用・保守において、データベース関連の技術支援を行う」ことを挙げています。個々のシステムのデータベースを作るだけでなく、組織全体のデータを管理し、他の開発チームを技術面で支援することまでが役割に含まれています。試験の概要や難易度は<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリストの解説</Link>をご覧ください。
          </p>
        </section>

        <section id="dba" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DBA（データベース管理者）との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DBAはDatabase Administratorの略で、ESCOではdatabase administratorの別名として「DBA」が登録されています。ESCOは、ISCO-08の2521の下にデータベース関連の職業を4つ置いており、それぞれの説明は次のとおりです（当サイト訳）。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li><strong>データベース管理者（2521.1）</strong>：データベースの試験・導入・管理を行う。データベース管理システムの専門知識を使い、データベースを守るセキュリティ対策を計画・調整・実施する。スクリプトや設定ファイルを使って、利用者の必要に合わせてデータベースを調整する</li>
            <li><strong>データベース設計者（2521.2）</strong>：データベースの論理構造、処理、情報の流れを定める。データの取得に役立つデータモデルとデータベースを設計する（別名にdata architect、database architect）</li>
            <li><strong>データベース開発者（2521.3）</strong>：データベース管理システムの専門知識にもとづいて、データベースの変更をプログラムし、実装し、調整する</li>
            <li><strong>データベース統合担当者（2521.4）</strong>：異なるデータベースの間の統合を行い、統合を維持して相互運用性を確保する</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            米国のO*NETでは、データベース関連の職業がDatabase Administrators（15-1242.00）とDatabase Architects（15-1243.00）の2つに分かれています。「Database Engineer」はDatabase Administratorsで報告された職名の例に、「Database Developer」はDatabase Architectsの例に含まれていました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>Database Administrators</th>
                  <th className={th}>Database Architects</th>
                </tr>
              </thead>
              <tbody>
                {onetRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.dba}</td>
                    <td className={td}>{r.arch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：O*NET OnLine（15-1242.00／15-1243.00、2026年11月28日確認）。賃金・雇用者数は米国の値で、日本の水準を示すものではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            以上から、DBAは稼働中のデータベースの性能・セキュリティ・バックアップの管理を中心とする役割で、設計者（アーキテクト）は要件にもとづく構造の設計を中心とする役割と整理できます。日本の求人でいう「データベースエンジニア」は、これらを1人または1つのチームで兼ねる職種名として使われることがあります。応募の際は、求人票で担当する工程（設計中心か運用中心か）をご確認ください。
          </p>
        </section>

        <section id="esco" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ESCOの4職業のスキル照合（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ESCOのAPIから4職業の情報を2026年11月28日に取得し、登録されている必須スキル（hasEssentialSkill）の名称を当サイトで照合しました。「固有の必須スキル」は、他の3職業のいずれの必須スキルにも含まれない項目の数です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>職業</th>
                  <th className={th}>ESCOコード</th>
                  <th className={`${th} text-right`}>必須スキル</th>
                  <th className={`${th} text-right`}>任意スキル</th>
                  <th className={`${th} text-right`}>固有の必須スキル</th>
                </tr>
              </thead>
              <tbody>
                {escoSummary.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.code}</td>
                    <td className={`${td} text-right`}>{r.ess}</td>
                    <td className={`${td} text-right`}>{r.opt}</td>
                    <td className={`${td} text-right`}>{r.only}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（occupation：database administrator／database designer／database developer／database integrator）。照合と件数の集計は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            4職業の必須スキルを合わせると、重複を除いて60項目でした。このうち4職業すべてに共通するのは、データベース管理システム（database management systems）、クエリ言語（query languages）、RDFのクエリ言語（resource description framework query language）の3項目だけです。2職業ずつの組み合わせでは、データベース管理者とデータベース開発者の共通項目が10項目で最も多く、バックアップの実施、データモデルの作成、データ品質の評価、データベース資源の調整などが重なっていました。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">データベース管理者だけの必須スキル（11項目）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {dbaOnly.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">データベース設計者だけの必須スキル（17項目から8項目を抜粋）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {designerOnlyPick.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">日本語名は当サイト訳です。括弧内がESCOの英語名です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            データベース管理者に固有の項目は、性能とセキュリティの維持、バックアップ、物理構造の定義、トラブルシューティングなど、稼働中のシステムを守る内容が中心です。データベース設計者に固有の項目は、業務要件の分析、業務プロセスのモデリング、既存データの移行など、システムを作る前後の工程に関わる内容が中心でした。同じ「データベースの専門職」でも、担当する工程によって求められるスキルの重なりは限られることがわかります。なお、これはESCOの登録上の区分であり、各職業の実際の業務範囲を限定するものではありません。
          </p>
        </section>

        <section id="run" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">設計と性能の例（当サイトでの実行結果）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            設計と運用の工程で扱う内容の例として、当サイトのPC（Apple M4・macOS 26.5.2・Python 3.9.6 標準ライブラリのsqlite3・SQLite 3.51.0）で2つの例を実行しました。データベースはメモリ上に作成しています。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">例1：正規化の有無と更新の結果</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            注文ごとに顧客の電話番号を持つ表（正規化前）と、顧客を別の表に分けた表（正規化後）を作り、顧客Aの電話番号を変更しました。正規化前の表では、顧客Aの注文3行のうち1行だけを更新した場合を想定しています。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6">{normOutput}</pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            正規化前の表では、同じ顧客Aに新旧2つの電話番号が残りました。正規化後は顧客の表の1行を更新するだけで、すべての注文から新しい番号を参照できます。同じ情報を1か所で管理するようにテーブルを分けることが、論理設計で行う正規化の目的の1つです。テストデータの顧客名と電話番号は実在しない値です。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">例2：インデックスの有無と検索時間</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            100万行の注文テーブルを作り、顧客IDを条件にした集計を100通りのIDで実行して、1回あたりの時間の中央値を測りました。続いて顧客IDにインデックスを作成し、同じ検索を測定しています。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6">{indexCode}</pre>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6 mt-3">{indexOutput}</pre>
          <p className="text-xs text-slate-500 mt-2">2026年11月28日に当サイトで3回実行した結果のうち1回目です。3回の範囲は、検索の中央値がインデックスなし17.98〜18.31ミリ秒・あり0.007ミリ秒、インデックス作成205〜213ミリ秒、1万行の追加がインデックスあり14.7〜16.2ミリ秒・なし6.2〜6.4ミリ秒でした。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            EXPLAIN QUERY PLANの出力は、インデックス作成前が「SCAN orders」（全行を読む）、作成後が「SEARCH orders USING INDEX」（インデックスで対象行を探す）に変わりました。検索時間の中央値は約18ミリ秒から約0.007ミリ秒に短くなっています。一方で、1万行を追加する時間はインデックスありのほうが長く、インデックスは検索を速くする代わりに書き込みの負担を増やします。どの列にインデックスを作るかを、検索と更新の頻度を踏まえて判断することが、物理設計と運用での性能管理の一例です。なお、追加時間の比較はインデックスを削除する前後で続けて測ったもので、条件を厳密にそろえた測定ではありません。値は当サイトの環境での参考値で、データ量や製品によって結果は異なります。SQLの書き方は<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link>でご説明しています。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">調査・ランキングのデータ</h2>
          <h3 className="font-bold text-slate-800 mb-2">Stack Overflow Developer Survey 2025</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            開発者などを対象とした国際調査で、現在の職種を尋ねた設問（回答者43,560人）では、「Database administrator or engineer（データベース管理者またはエンジニア）」の回答は177人（0.4％）でした。年間報酬の中央値は85,168.5ドル（n=106・全世界・米ドル）です。職種別の「プロとしての経験年数の平均」は18.3年（n=103）で、33区分のうち7番目に長く、データエンジニア（12.1年）やバックエンド開発者（12.7年）を上回りました。
          </p>
          <p className="text-xs text-slate-500 mb-6">出典：Stack Overflow「2025 Developer Survey」Developers（DevType／CompTotal／Salary and Experience by Developer Type）。回答者の大半はソフトウェア開発者で、報酬は国をまたいだ中央値のため、日本の水準を示すものではありません。経験年数が長いことは、この調査の回答者の傾向であり、職種に就くための条件ではありません。</p>

          <h3 className="font-bold text-slate-800 mb-2">DB-Engines Ranking（2026年11月）の上位10製品</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            DB-Engines Rankingは、検索エンジンでの言及数、Google Trends、Q&Aサイトでの議論、求人での言及、LinkedInのプロフィールなどを組み合わせて、データベース製品の人気度をスコア化したものです。2026年11月の掲載は442製品でした。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>順位</th>
                  <th className={th}>製品</th>
                  <th className={th}>主なデータモデル</th>
                  <th className={`${th} text-right`}>スコア</th>
                </tr>
              </thead>
              <tbody>
                {dbeRows.map((r) => (
                  <tr key={r.rank}>
                    <td className={td}>{r.rank}</td>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.model}</td>
                    <td className={`${td} text-right`}>{r.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：DB-Engines「DB-Engines Ranking」（2026年11月、2026年11月28日確認）、同「Method of calculating the scores」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            上位20製品の主なデータモデルを当サイトで数えると、リレーショナル（Relational）が12製品で、上位20製品のスコア合計（5,110.49）の79.1％を占めていました。ドキュメント型（MongoDB）、キーバリュー型（Redis）、ワイドカラム型（Cassandra）なども上位に入っています。リレーショナルデータベースの設計・運用が中心になりつつ、用途によって他の方式も扱う場面があると考えられます。このランキングは人気度の指標であり、利用者数や国内の求人数を示すものではありません。開発者が実際に使っているデータベースの割合は<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link>に、製品別の情報は<Link href="/skill/postgresql/" className="text-blue-600 hover:underline">PostgreSQL</Link>・<Link href="/skill/mysql/" className="text-blue-600 hover:underline">MySQL</Link>の各ページに掲載しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・資格・SQLの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はデータベースエンジニアという職種の定義と仕事内容に絞ってご説明しました。転職の進め方や資格、SQLの具体的な書き方は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>転職の進め方・年収・将来性：<Link href="/skill/sql/" className="text-blue-600 hover:underline">データベースエンジニア転職の進め方</Link></li>
            <li>国家資格：<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリストの解説</Link></li>
            <li>SQLの書き方：<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link></li>
            <li>製品別のスキル：<Link href="/skill/postgresql/" className="text-blue-600 hover:underline">PostgreSQL</Link>・<Link href="/skill/mysql/" className="text-blue-600 hover:underline">MySQL</Link></li>
            <li>隣接する職種：<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link>・<Link href="/knowledge/big-data/" className="text-blue-600 hover:underline">ビッグデータとは</Link></li>
          </ul>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月28日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」（2521 データベース設計者・管理者）：https://www.soumu.go.jp/main_content/000397967.pdf</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類」（009・010）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>IPA「データベーススペシャリスト試験」：https://www.ipa.go.jp/shiken/kubun/db.html</li>
            <li>ESCO database administrator：http://data.europa.eu/esco/occupation/8c57af09-719c-42b3-be40-6ed4946236cc</li>
            <li>ESCO database designer：http://data.europa.eu/esco/occupation/8d9ec84d-cf2d-4179-87bc-335cda54a427</li>
            <li>ESCO database developer：http://data.europa.eu/esco/occupation/b11e1742-5e28-4270-b081-b0193d85ee7d</li>
            <li>ESCO database integrator：http://data.europa.eu/esco/occupation/3d190639-90f8-4402-b1b3-a104a17e0d67</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/resource/occupation</li>
            <li>O*NET OnLine Database Administrators（15-1242.00）：https://www.onetonline.org/link/summary/15-1242.00</li>
            <li>O*NET OnLine Database Architects（15-1243.00）：https://www.onetonline.org/link/summary/15-1243.00</li>
            <li>Stack Overflow「2025 Developer Survey」Developers：https://survey.stackoverflow.co/2025/developers</li>
            <li>DB-Engines Ranking：https://db-engines.com/en/ranking</li>
            <li>DB-Engines「Method of calculating the scores」：https://db-engines.com/en/ranking_definition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "データベースエンジニア転職の進め方", href: "/skill/sql/" },
              { name: "データベーススペシャリストの解説", href: "/cert/database-specialist/" },
              { name: "SQLの基礎", href: "/knowledge/sql-basics/" },
              { name: "インフラエンジニアの仕事内容", href: "/knowledge/infra-engineer/" },
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
