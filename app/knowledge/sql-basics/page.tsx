import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SQLの基礎｜SELECT・INSERT・UPDATE・DELETEの書き方を実行結果つきで解説・規格とDBの利用率【2026年】";
const DESCRIPTION =
  "SQLは、リレーショナルデータベースのデータを操作する言語です。基本の4つの命令を、当サイトで実際に実行した結果つきで解説します。国際規格SQL:2023とPostgreSQLの準拠状況、PostgreSQLのサポート期限、データベースの利用率も公式情報で整理します。";
const URL = "/knowledge/sql-basics/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "SQLとは（規格と命令の種類）" },
  { id: "basics", label: "基本の4命令（当サイトで実行）" },
  { id: "aggregate", label: "集計（GROUP BY）" },
  { id: "dbms", label: "データベースの利用率とPostgreSQLのサポート期限" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "SQLとは何ですか？",
    a: "リレーショナルデータベースに対して、データの検索・追加・更新・削除やテーブルの定義を行うための言語です。国際規格（ISO/IEC 9075）として定められており、最新版はSQL:2023です。PostgreSQL・MySQL・SQLiteなど多くのデータベースで使えます。",
  },
  {
    q: "SQLの基礎として最初に覚える命令は何ですか？",
    a: "データを操作するSELECT（検索）、INSERT（追加）、UPDATE（更新）、DELETE（削除）の4つです。テーブルを作るCREATE TABLEとあわせて覚えると、簡単なデータベースを一通り扱えるようになります。本記事ではこれらを実際に実行した結果つきで解説しています。",
  },
  {
    q: "SQLはデータベースの種類によって違いますか？",
    a: "基本の命令は共通ですが、細かな文法や使える機能はデータベースごとに異なります。PostgreSQLの公式ドキュメントは、SQL:2023のCore（必須機能）177項目のうち少なくとも170項目に準拠しているとしたうえで、執筆時点でCoreに完全に準拠したと主張するデータベース管理システムはないと説明しています。",
  },
  {
    q: "どのデータベースがよく使われていますか？",
    a: "Stack Overflow Developer Survey 2025（全回答者 n=26,083）では、PostgreSQLが55.6％で最も多く、MySQL 40.5％、SQLite 37.5％、Microsoft SQL Server 30.1％が続きました。",
  },
  {
    q: "UPDATEやDELETEでWHEREを書き忘れるとどうなりますか？",
    a: "テーブルのすべての行が更新・削除されます。本番のデータを操作する前に、同じWHERE条件でSELECTを実行して対象の行を確かめると、誤操作を防ぎやすくなります。",
  },
];

const cmdRows = [
  { kind: "データの操作", cmd: "SELECT・INSERT・UPDATE・DELETE", use: "データの検索・追加・更新・削除" },
  { kind: "定義", cmd: "CREATE TABLE・ALTER TABLE・DROP TABLE など", use: "テーブルなどの作成・変更・削除" },
  { kind: "権限", cmd: "GRANT・REVOKE", use: "利用者ごとの操作の許可・取り消し" },
  { kind: "トランザクション", cmd: "BEGIN・COMMIT・ROLLBACK", use: "複数の操作をまとめて確定・取り消し" },
];

const dbRows = [
  { db: "PostgreSQL", v: "55.6％" },
  { db: "MySQL", v: "40.5％" },
  { db: "SQLite", v: "37.5％" },
  { db: "Microsoft SQL Server", v: "30.1％" },
  { db: "Oracle", v: "10.6％" },
];

const pgRows = [
  { v: "19", first: "2026年11月19日", final: "2031年11月19日" },
  { v: "18", first: "2025年9月25日", final: "2030年11月14日" },
  { v: "17", first: "2024年9月26日", final: "2029年11月8日" },
  { v: "16", first: "2023年9月14日", final: "2028年11月9日" },
  { v: "15", first: "2022年10月13日", final: "2027年11月11日" },
];

export default function SqlBasicsPage() {
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
          { name: "SQLの基礎" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SQLの基礎｜SELECT・INSERT・UPDATE・DELETEの書き方を実行結果つきで解説・規格とDBの利用率
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】SQLの基礎</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>SQLは、リレーショナルデータベースのデータを操作する言語です。基礎として、SELECT（検索）・INSERT（追加）・UPDATE（更新）・DELETE（削除）の4つの命令から覚えるのが一般的です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・国際規格ISO/IEC 9075として定められ、最新版はSQL:2023です</li>
              <li>・Stack Overflow Developer Survey 2025では、全回答者の58.6％が過去1年にSQLを使っていました</li>
              <li>・本記事の例はすべて当サイトでSQLite 3.51.0を使って実行し、結果を確かめています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          SQLは、開発職だけでなく、データ分析やインフラの運用でも使われる基本的な技術です。本記事では、PostgreSQLの公式ドキュメント、Stack Overflow Developer Survey 2025をもとにSQLの位置づけを整理し、基本の命令を短い例で解説します。例で使うテーブルとデータは説明のために当サイトが作ったもので、実在の人物や企業のデータではありません。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["PostgreSQL Documentation 19「SQL Conformance」「SQL Commands」", "PostgreSQL「Versioning Policy」", "Stack Overflow「2025 Developer Survey」Technology"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">SQLとは（規格と命令の種類）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PostgreSQLの公式ドキュメント「SQL Conformance」によると、SQLの規格は SQL-92、SQL:1999、SQL:2003、SQL:2006、SQL:2008、SQL:2011、SQL:2016 と改訂され、最新版はSQL:2023です。新しい版は前の版を置き換えるため、古い版への準拠をうたっても公式な意味はないとされています。SQLの命令は、用途によって次のように分けて説明されることが多くあります（分類は当サイトの整理）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">種類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な命令</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">用途</th>
                </tr>
              </thead>
              <tbody>
                {cmdRows.map((r) => (
                  <tr key={r.kind}>
                    <td className="border border-slate-200 px-3 py-2">{r.kind}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.cmd}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PostgreSQL Documentation 19「SQL Conformance」「SQL Commands」。PostgreSQLのSQLコマンドの一覧には185の項目が掲載されています（2026年11月26日、当サイト集計）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            命令の数は多いものの、日常の業務で最もよく使うのはデータの操作の4つです。次の章から、この4つを順に実行していきます。
          </p>
        </section>

        <section id="basics" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本の4命令（当サイトで実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず、エンジニアの名前・職種・経験年数を入れるテーブルを作り、4行のデータを追加します（CREATE TABLE と INSERT）。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`CREATE TABLE engineers (
  id INTEGER PRIMARY KEY,
  name TEXT,
  job TEXT,
  years INTEGER
);

INSERT INTO engineers (name, job, years) VALUES
  ('A', 'インフラ', 8),
  ('B', 'Web', 3),
  ('C', 'インフラ', 12),
  ('D', 'データ', 5);`}</code></pre>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">SELECT：条件に合う行を取り出す</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            職種が「インフラ」の人の名前と経験年数を、経験年数の多い順に取り出します。WHEREで条件を、ORDER BYで並び順を指定します（DESCは大きい順）。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`SELECT name, years
FROM engineers
WHERE job = 'インフラ'
ORDER BY years DESC;`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-2">実行結果：</p>
          <pre className="bg-slate-100 text-slate-800 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`C|12
A|8`}</code></pre>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">UPDATE：既存の行を書き換える</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Bさんの経験年数を4に更新します。WHEREで対象の行を必ず絞り込みます。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`UPDATE engineers SET years = 4 WHERE name = 'B';`}</code></pre>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">DELETE：行を削除する</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Dさんの行を削除し、残りの行数を数えます。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`DELETE FROM engineers WHERE name = 'D';
SELECT COUNT(*) FROM engineers;`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-2">実行結果：</p>
          <pre className="bg-slate-100 text-slate-800 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`3`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4">
            UPDATEとDELETEは、WHEREを書き忘れるとすべての行が対象になります。実行の前に同じ条件でSELECTを行い、対象の行を確かめる習慣をつけておくと安全です。実行結果の表示形式（「|」区切り）はSQLiteのコマンドラインツールの既定によるもので、データベースや使うツールによって見え方は異なります。
          </p>
        </section>

        <section id="aggregate" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">集計（GROUP BY）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SQLは、行を取り出すだけでなく集計もできます。UPDATE・DELETEを行う前の4行のデータについて、職種ごとの人数と平均の経験年数を出す例です。GROUP BYでまとめる列を指定し、COUNT（件数）やAVG（平均）などの集計関数を使います。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`SELECT job, COUNT(*) AS 人数, AVG(years) AS 平均年数
FROM engineers
GROUP BY job
ORDER BY 人数 DESC, job;`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4 mb-2">実行結果：</p>
          <pre className="bg-slate-100 text-slate-800 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`インフラ|2|10.0
Web|1|3.0
データ|1|5.0`}</code></pre>
          <p className="text-slate-600 leading-relaxed mt-4">
            人数が同じ行は、2つ目の並び替え条件（job）の順に並びます。文字列の並び順はデータベースの設定によって変わることがあるため、順番が重要な場合は並び替えの条件を明示しておくと確実です。
          </p>
        </section>

        <section id="dbms" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データベースの利用率とPostgreSQLのサポート期限</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Survey 2025で、過去1年に使ったデータベースの上位です。SQL自体の利用率は、全回答者で58.6％、プロの開発者で61.3％でした。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">データベース</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">利用率（全回答者 n=26,083）</th>
                </tr>
              </thead>
              <tbody>
                {dbRows.map((r) => (
                  <tr key={r.db}>
                    <td className="border border-slate-200 px-3 py-2">{r.db}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（Databases・複数回答）。世界の開発者を対象とした調査で、日本の求人数とは一致しません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            最も利用率の高いPostgreSQLは、おおむね年に1回メジャーバージョンを公開し、各バージョンを初回リリースから5年間サポートしています。2026年11月26日時点でサポート中のバージョンです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">バージョン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">初回リリース</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">最終リリース（サポート終了）予定</th>
                </tr>
              </thead>
              <tbody>
                {pgRows.map((r) => (
                  <tr key={r.v}>
                    <td className="border border-slate-200 px-3 py-2">PostgreSQL {r.v}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.first}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PostgreSQL「Versioning Policy」。PostgreSQL 14は2026年11月12日に最終リリースを迎え、サポートが終了しています。</p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            SQLは多くの求人で「歓迎」や「必須」の条件に挙がる技術です。職務経歴書には「SQLが書ける」とだけ書くのではなく、使ったデータベースの種類、扱ったデータの規模、集計や性能改善（インデックスの設計など）の経験を具体的に書くと、実力が伝わりやすくなります。データベースを専門にする転職は<Link href="/skill/sql/" className="text-blue-600 hover:underline">データベースエンジニアの転職ガイド</Link>、製品別は<Link href="/skill/postgresql/" className="text-blue-600 hover:underline">PostgreSQL</Link>・<Link href="/skill/mysql/" className="text-blue-600 hover:underline">MySQL</Link>の各ガイド、資格は<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリストの解説</Link>をご覧ください。
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
            <li>PostgreSQL Documentation「Appendix D. SQL Conformance」：https://www.postgresql.org/docs/current/features.html</li>
            <li>PostgreSQL Documentation「SQL Commands」：https://www.postgresql.org/docs/current/sql-commands.html</li>
            <li>PostgreSQL Documentation「2.1. Introduction」（SQLチュートリアル）：https://www.postgresql.org/docs/current/tutorial-sql-intro.html</li>
            <li>PostgreSQL「Versioning Policy」：https://www.postgresql.org/support/versioning/</li>
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "データベースエンジニアの転職ガイド", href: "/skill/sql/" },
              { name: "PostgreSQLエンジニアの転職ガイド", href: "/skill/postgresql/" },
              { name: "データベーススペシャリストの解説", href: "/cert/database-specialist/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
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
