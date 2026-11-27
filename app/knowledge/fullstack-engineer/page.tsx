import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フルスタックエンジニアとは｜公的分類での扱い・開発者調査の割合推移・使う技術と業務【2026年】";
const DESCRIPTION =
  "フルスタックエンジニアとは、画面・サーバー・データベース・インフラまで幅広く担う開発者の呼び方で、公的な定義はありません。国の職業分類での扱い、開発者調査の割合推移、回答者が使う技術と担う業務（当サイト集計）を整理します。";
const URL = "/knowledge/fullstack-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "フルスタックエンジニアの定義と公的分類での扱い" },
  { id: "layers", label: "担う4つのレイヤーと代表的な技術" },
  { id: "trend", label: "開発者調査に見るフルスタックの割合の推移" },
  { id: "data", label: "フルスタック回答者が使う技術と担う業務（当サイト集計）" },
  { id: "demo", label: "1ファイルで4レイヤーを動かした例（当サイトでの実行）" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "フルスタックエンジニアとは簡単に言うと何ですか？",
    a: "画面（フロントエンド）、サーバー側の処理（バックエンド）、データベース、インフラ・運用といった、Webサービスを構成する複数の層を1人で幅広く担う開発者の呼び方です。総務省の日本標準職業分類や厚生労働省編職業分類に「フルスタック」という項目はなく、公的な定義はありません。",
  },
  {
    q: "フルスタックエンジニアはどのくらいいますか？",
    a: "日本国内の人数を示す公的な統計は、当サイトでは確認できていません。世界の開発者を対象としたStack Overflow Developer Survey 2026では、現在の職種として「Developer, full-stack」を選んだ人が27.3％（25,767人中7,042人）で、選択肢の中で最も多い回答でした。任意回答のWeb調査であり、労働市場全体の構成とは異なる可能性があります。",
  },
  {
    q: "フルスタックエンジニアはすべての技術に精通している必要がありますか？",
    a: "公的な基準はありません。当サイトが2026年調査の個票を集計したところ、フルスタック回答者のうちデータベースの利用経験があると答えた人でPostgreSQLを挙げた割合は60.3％で、バックエンド回答者（64.4％）と同程度でした。各層を一通り扱えることと、各層の専門職と同じ深さを持つことは別の話であり、求人では「どの層を主に担当し、どこまで自分で運用するか」を確認することをおすすめします。",
  },
  {
    q: "フルスタックエンジニアは何の言語を使っていますか？",
    a: "Stack Overflow Developer Survey 2026の個票を当サイトで集計すると、フルスタック回答者（言語の設問に回答した4,050人）の利用率はJavaScript 82.0％、HTML/CSS 76.0％、SQL 73.0％、TypeScript 63.1％、Python 49.1％の順でした。1人あたりの言語数の平均は6.58で、バックエンド回答者（5.49）やフロントエンド回答者（4.88）より多くなっています。",
  },
  {
    q: "フルスタックエンジニアとバックエンドエンジニアの違いは何ですか？",
    a: "最も大きな違いは画面側の技術の利用率です。2026年調査の当サイト集計では、HTML/CSSの利用率はフルスタック回答者が76.0％、バックエンド回答者が43.1％でした。一方、デプロイや本番環境の変更といった運用寄りの業務を担う割合は、両者でほぼ同じ水準でした。役割の違いは「フロントエンドとバックエンドの違い」もあわせてご覧ください。",
  },
];

const trendRows = [
  { year: "2021年", question: "現在の仕事に当てはまるものをすべて選択（複数回答）", n: "66,484人", fs: "49.47％（32,891人）" },
  { year: "2022年", question: "現在の仕事に当てはまるものをすべて選択（複数回答）", n: "61,302人", fs: "46.82％（28,701人）" },
  { year: "2023年", question: "最も多くの時間を費やしている仕事を1つ選択（単一回答）", n: "76,872人", fs: "33.48％（25,735人）" },
  { year: "2026年", question: "現在の役割、または過去1年で最も長く担った役割を1つ選択（単一回答）", n: "25,767人", fs: "27.3％（7,042人）" },
];

const techRows = [
  { item: "言語：JavaScript", fs: "82.0％", be: "52.0％", fe: "89.8％" },
  { item: "言語：HTML/CSS", fs: "76.0％", be: "43.1％", fe: "85.5％" },
  { item: "言語：SQL", fs: "73.0％", be: "65.2％", fe: "32.0％" },
  { item: "言語：TypeScript", fs: "63.1％", be: "38.4％", fe: "78.4％" },
  { item: "言語：Python", fs: "49.1％", be: "54.5％", fe: "29.3％" },
  { item: "言語の数（1人あたり平均）", fs: "6.58", be: "5.49", fe: "4.88" },
  { item: "Webフレームワーク：Node.js", fs: "53.2％", be: "32.4％", fe: "55.9％" },
  { item: "Webフレームワーク：React", fs: "49.6％", be: "31.7％", fe: "68.2％" },
  { item: "データベース：PostgreSQL", fs: "60.3％", be: "64.4％", fe: "51.4％" },
  { item: "開発基盤：Docker / Docker Compose", fs: "62.4％", be: "69.2％", fe: "45.9％" },
  { item: "開発基盤：AWS", fs: "43.8％", be: "48.7％", fe: "36.1％" },
];

const nRow = { fs: "言語4,050／FW3,729／DB3,945／基盤3,337", be: "言語1,820／FW1,397／DB1,892／基盤1,673", fe: "言語440／FW381／DB255／基盤294" };

const funcRows = [
  { item: "技術的な設計・アーキテクチャの判断", fs: "71.4％", be: "69.5％", fe: "55.9％" },
  { item: "ソフトウェアのデプロイ・リリース", fs: "67.8％", be: "62.7％", fe: "48.9％" },
  { item: "作業の計画・見積もり", fs: "66.5％", be: "63.8％", fe: "58.7％" },
  { item: "本番のコード・システム・インフラの変更", fs: "62.7％", be: "60.2％", fe: "38.8％" },
  { item: "テストの作成・保守", fs: "62.0％", be: "72.7％", fe: "54.0％" },
  { item: "障害・本番の問題の調査", fs: "58.5％", be: "59.9％", fe: "34.7％" },
  { item: "システム・ログ・メトリクスの監視", fs: "54.7％", be: "56.9％", fe: "25.2％" },
  { item: "担う業務の数（1人あたり平均）", fs: "10.10", be: "9.99", fe: "8.13" },
];

const demoCode = `import json, sqlite3
from http.server import HTTPServer, BaseHTTPRequestHandler

db = sqlite3.connect("todo.db")
db.execute("CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY, title TEXT)")
db.commit()

PAGE = b"""<!doctype html><meta charset="utf-8"><title>todo</title>
<ul id="list"></ul>
<script>
fetch('/api/todos').then(r => r.json()).then(rows => {
  for (const r of rows) {
    const li = document.createElement('li');
    li.textContent = r.title;
    document.getElementById('list').append(li);
  }
});
</script>"""

class Handler(BaseHTTPRequestHandler):
    def send(self, body, ctype, code=200):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/":
            self.send(PAGE, "text/html; charset=utf-8")
        elif self.path == "/api/todos":
            rows = [{"id": i, "title": t} for i, t in db.execute("SELECT id, title FROM todo")]
            self.send(json.dumps(rows, ensure_ascii=False).encode(), "application/json")
        else:
            self.send(b"not found", "text/plain", 404)

    def do_POST(self):
        length = int(self.headers["Content-Length"])
        title = json.loads(self.rfile.read(length))["title"]
        cur = db.execute("INSERT INTO todo (title) VALUES (?)", (title,))
        db.commit()
        self.send(json.dumps({"id": cur.lastrowid}).encode(), "application/json", 201)

HTTPServer(("127.0.0.1", 8765), Handler).serve_forever()`;

const demoOutput = `$ python3 app.py &
$ curl -s -X POST -H 'Content-Type: application/json' -d '{"title":"要件を確認する"}' http://127.0.0.1:8765/api/todos
{"id": 1}
$ curl -s -X POST -H 'Content-Type: application/json' -d '{"title":"画面を作る"}' http://127.0.0.1:8765/api/todos
{"id": 2}
$ curl -s http://127.0.0.1:8765/api/todos
[{"id": 1, "title": "要件を確認する"}, {"id": 2, "title": "画面を作る"}]
$ curl -s -o /dev/null -w "%{http_code} %{content_type}\\n" http://127.0.0.1:8765/
200 text/html; charset=utf-8
$ sqlite3 todo.db "SELECT * FROM todo;"
1|要件を確認する
2|画面を作る`;

export default function FullstackEngineerKnowledgePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const cell = "border border-slate-200 px-3 py-2";

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "フルスタックエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フルスタックエンジニアとは｜公的分類での扱い・開発者調査の割合推移・使う技術と業務
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】フルスタックエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>フルスタックエンジニアとは、画面（フロントエンド）・サーバー側の処理（バックエンド）・データベース・インフラや運用まで、Webサービスを構成する複数の層を1人で幅広く担う開発者の呼び方です。公的な定義はありません。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・総務省の日本標準職業分類、厚生労働省編職業分類（令和4年改定）のいずれにも「フルスタック」という項目はありません</li>
              <li>・IPAのデジタルスキル標準 ver.2.0は、小規模な企業では定義したすべてのロールを少数または1人のエンジニアが担うこともあると記載しています</li>
              <li>・Stack Overflow Developer Survey 2026では、職種として「フルスタック」を選んだ人が27.3％で最多でした</li>
              <li>・同調査の個票を当サイトで集計すると、フルスタック回答者の85.3％が画面側の言語・サーバー側の言語・データベース・クラウド等の基盤の4つすべてを使っていました</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、国内外の公的な職業分類とIPAのデジタルスキル標準をもとに、フルスタックエンジニアという呼び方がどこまで公的に裏づけられているかを確認します。そのうえで、Stack Overflow Developer Surveyの公式結果から割合の推移を整理し、2026年調査の公開個票データ（ODbLライセンス）を当サイトで集計して、フルスタック回答者が使う技術と担う業務をバックエンド・フロントエンドの回答者と比較しました。最後に、4つの層を1ファイルで動かす最小構成を当サイトのMacで実行した結果を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={[
            "総務省「日本標準職業分類」（平成21年12月告示）",
            "厚生労働省編職業分類（令和4年改定）",
            "IPA「デジタルスキル標準 ver.2.0 ソフトウェアエンジニア編」",
            "Stack Overflow Developer Survey 2021〜2026 公式結果・2026年個票データ",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタックエンジニアの定義と公的分類での扱い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「フルスタック」は、Webサービスを構成する技術の積み重ね（スタック）の全体を扱えることを表す業界の呼び方です。当サイトでは、国内外の公的な職業分類にこの語が載っているかを確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>資料</th>
                  <th className={`${cell} text-left`}>「フルスタック」の項目</th>
                  <th className={`${cell} text-left`}>最も近い項目（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>総務省「日本標準職業分類」（平成21年12月告示・現行）</td><td className={cell}>なし</td><td className={cell}>104 ソフトウェア作成者（仕様決定・設計・プログラミング）</td></tr>
                <tr><td className={cell}>厚生労働省編職業分類（令和4年改定）</td><td className={cell}>なし（全15大分類のページで語の掲載なし）</td><td className={cell}>009-01 ソフトウェア開発技術者（WEB・オープン系）。例示職業名に「Web系ソフトウェア開発技術者」「システムエンジニア（WEBサイト開発）」</td></tr>
                <tr><td className={cell}>米国労働省 O*NET OnLine</td><td className={cell}>「full stack developer」で検索しても該当する職業名なし</td><td className={cell}>15-1254.00 Web Developers（Webサイト・Webアプリ・アプリケーションのデータベース・画面の開発、サーバー側のコードの最適化、Webサイトの基盤の構築を含む）</td></tr>
                <tr><td className={cell}>IPA「デジタルスキル標準 ver.2.0」（2026年4月）</td><td className={cell}>なし</td><td className={cell}>ソフトウェアエンジニアの4ロール（フロントエンド、バックエンド、クラウドエンジニア/SRE、フィジカルコンピューティング）を1人で兼ねる状態</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：各資料を2026年11月27日に当サイトで確認。「最も近い項目」は公的な対応づけではなく、当サイトの整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            IPAのデジタルスキル標準 ver.2.0（ソフトウェアエンジニア編）は、ロールの検討にあたって約数十名以上のソフトウェアエンジニアチームを持つ企業を想定したうえで、「これより小規模な企業では、今回定義した全てのロールを少数または一人のソフトウェアエンジニアが担うこともあり」と記載しています。フルスタックという語は使われていませんが、本記事ではこの「複数のロールを1人で担う状態」をフルスタックエンジニアの実態に最も近い公的な記述と位置づけています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            このように、フルスタックエンジニアは資格や職業分類で定められた職種ではなく、担当範囲の広さを表す呼び方です。どの層をどこまで担えば「フルスタック」と呼ぶかは企業によって異なるため、求人を比較する際は肩書きではなく担当範囲の記載を確認することをおすすめします。
          </p>
        </section>

        <section id="layers" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">担う4つのレイヤーと代表的な技術</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フルスタックエンジニアが扱う範囲を4つの層に分け、厚生労働省編職業分類とIPAのデジタルスキル標準で対応する項目を当サイトで並べました。公的な分類では、各層が別々の職業・ロールとして扱われていることが分かります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>レイヤー</th>
                  <th className={`${cell} text-left`}>代表的な技術の例</th>
                  <th className={`${cell} text-left`}>厚生労働省編職業分類の例示職業名</th>
                  <th className={`${cell} text-left`}>デジタルスキル標準のロール</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>画面（フロントエンド）</td><td className={cell}>HTML、CSS、JavaScript、TypeScript、React</td><td className={cell}>HTMLコーダー、Webプログラマー（009-03 プログラマー）</td><td className={cell}>フロントエンドエンジニア（クライアントサイドの機能に責任を持つ）</td></tr>
                <tr><td className={cell}>サーバー（バックエンド）</td><td className={cell}>Node.js、Python、Java、C#、PHP</td><td className={cell}>Web系ソフトウェア開発技術者（009-01）</td><td className={cell}>バックエンドエンジニア（サーバサイドの機能に責任を持つ）</td></tr>
                <tr><td className={cell}>データベース</td><td className={cell}>SQL、PostgreSQL、MySQL、SQLite</td><td className={cell}>独立した項目は確認できず</td><td className={cell}>独立したロールなし（バックエンドなどに「データエンジニアリング」のスキルが必要とされる）</td></tr>
                <tr><td className={cell}>インフラ・運用</td><td className={cell}>Docker、AWS などのクラウド、監視</td><td className={cell}>サーバーエンジニア（構築・設定を行うもの）（010-06）、システム運用管理者（010-04）</td><td className={cell}>クラウドエンジニア/SRE（開発・運用環境の最適化と信頼性の向上に責任を持つ）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省編職業分類（令和4年改定）大分類02、IPA「デジタルスキル標準 ver.2.0 ソフトウェアエンジニア編」。レイヤーの区分と対応づけは当サイトによるものです。</p>
        </section>

        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者調査に見るフルスタックの割合の推移</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Surveyは、回答者に現在の職種（Developer type／Role）を尋ねています。各年の公式結果ページから「Developer, full-stack」の割合を当サイトで抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>調査年</th>
                  <th className={`${cell} text-left`}>設問の形式</th>
                  <th className={`${cell} text-right`}>回答数</th>
                  <th className={`${cell} text-right`}>フルスタックの割合</th>
                </tr>
              </thead>
              <tbody>
                {trendRows.map((r) => (
                  <tr key={r.year}>
                    <td className={cell}>{r.year}</td>
                    <td className={cell}>{r.question}</td>
                    <td className={`${cell} text-right`}>{r.n}</td>
                    <td className={`${cell} text-right`}>{r.fs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Stack Overflow「Developer Survey」2021・2022・2023・2026の公式結果（全回答者）。2024年（30.7％）・2025年（27％）の値と他の職種との比較は<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link>に掲載しています。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            2021年・2022年は「当てはまるものをすべて選ぶ」複数回答で、約半数がフルスタックを選んでいました。2023年からは「1つだけ選ぶ」単一回答に変わったため、2022年の46.82％から2023年の33.48％への低下は、設問の変更による影響が大きいと考えられます。単一回答になった2023年以降は33.48％から27.3％へ下がっていますが、2025年にはアーキテクトの選択肢が新設されるなど選択肢も変わっており、増減は参考値としてご覧ください。
          </p>
          <p className="text-slate-600 leading-relaxed">
            複数回答だった2022年の公式結果には、各職種の回答者が平均でいくつのほかの職種を選んだかも掲載されています。フルスタックの回答者（28,701人）が選んだほかの職種の数は平均3で、掲載された職種の中で最も少ない値でした（データベース管理者・プロダクトマネージャーは平均7）。フルスタックという回答そのものが、複数の層を兼ねていることを表すためと当サイトでは考えています。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタック回答者が使う技術と担う業務（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflowが公開している2026年調査の個票データ（30,903件）を当サイトでダウンロードし、職種（Role）の回答別に集計しました。職種に回答した25,767人のうちフルスタックが7,042人で、公式結果ページの数値と一致することを確認しています。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-3">使っている技術（過去1年に十分な開発経験があると回答した割合）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>項目</th>
                  <th className={`${cell} text-right`}>フルスタック</th>
                  <th className={`${cell} text-right`}>バックエンド</th>
                  <th className={`${cell} text-right`}>フロントエンド</th>
                </tr>
              </thead>
              <tbody>
                {techRows.map((r) => (
                  <tr key={r.item}>
                    <td className={cell}>{r.item}</td>
                    <td className={`${cell} text-right`}>{r.fs}</td>
                    <td className={`${cell} text-right`}>{r.be}</td>
                    <td className={`${cell} text-right`}>{r.fe}</td>
                  </tr>
                ))}
                <tr className="text-xs text-slate-500">
                  <td className={cell}>集計対象（各設問の回答者数）</td>
                  <td className={`${cell} text-right`}>{nRow.fs}</td>
                  <td className={`${cell} text-right`}>{nRow.be}</td>
                  <td className={`${cell} text-right`}>{nRow.fe}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Stack Overflow Developer Survey 2026 個票データ（survey_results_public.csv、ODbL 1.0）。列 Role で回答者を分け、LanguagesHaveWorkedWith・WebFrameworkHaveWorkedWith・DatabasesHaveWorkedWith・CloudPlatHaveWorkedWith のそれぞれに回答した人を分母として当サイトで算出しました。「開発基盤」は調査上「Cloud development」としてクラウド・コンテナ・パッケージ管理などをまとめて尋ねている設問です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            フルスタック回答者は、HTML/CSSやJavaScriptの利用率がフロントエンド回答者に近く、SQLの利用率（73.0％）はバックエンド回答者（65.2％）を上回っていました。一方、PostgreSQLやDocker、AWSの利用率はバックエンド回答者のほうがやや高く、サーバー側・基盤側の技術ではバックエンド専任者と同程度かやや低い水準です。1人あたりの言語数は6.58で、3つの職種の中で最も多くなりました。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            さらに、言語・データベース・開発基盤の3設問すべてに回答した人について、4つの層の技術をすべて使っている人の割合を算出しました。画面側の言語（HTML/CSS・JavaScript・TypeScriptのいずれか）、サーバー側の言語（Python・C#・Java・PHP・Go・Ruby・Kotlin・Rust・Elixir・Scalaのいずれか）、データベース（1つ以上）、クラウド・コンテナ等の基盤（AWS・Azure・Google Cloud・Docker・Kubernetes・Terraformなど29項目のいずれか）の4条件です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>職種</th>
                  <th className={`${cell} text-right`}>集計対象</th>
                  <th className={`${cell} text-right`}>4つの層すべてを使用</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>フルスタック</td><td className={`${cell} text-right`}>3,035人</td><td className={`${cell} text-right`}>85.3％（2,589人）</td></tr>
                <tr><td className={cell}>バックエンド</td><td className={`${cell} text-right`}>1,371人</td><td className={`${cell} text-right`}>65.9％（903人）</td></tr>
                <tr><td className={cell}>フロントエンド</td><td className={`${cell} text-right`}>184人</td><td className={`${cell} text-right`}>65.2％（120人）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：同上。層の区分と言語・基盤の振り分けは当サイトによるものです。JavaScript（Node.js）をサーバー側で使う人は「サーバー側の言語」に含めていないため、実際より低めに出る可能性があります。フロントエンドはデータベースの設問に回答した人が少なく、偏りがある可能性があります。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">担っている業務（2026年に新設された設問）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            2026年調査では、仕事の中で行っている業務を複数選ぶ設問（RoleFunctions）が加わりました。設計や運用に関わる主な項目を抜き出しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>業務</th>
                  <th className={`${cell} text-right`}>フルスタック（6,813人）</th>
                  <th className={`${cell} text-right`}>バックエンド（3,327人）</th>
                  <th className={`${cell} text-right`}>フロントエンド（898人）</th>
                </tr>
              </thead>
              <tbody>
                {funcRows.map((r) => (
                  <tr key={r.item}>
                    <td className={cell}>{r.item}</td>
                    <td className={`${cell} text-right`}>{r.fs}</td>
                    <td className={`${cell} text-right`}>{r.be}</td>
                    <td className={`${cell} text-right`}>{r.fe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：同上（列 RoleFunctions に回答した人が分母）。業務名は当サイトの訳です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            フルスタック回答者は、設計の判断（71.4％）やデプロイ（67.8％）を担う割合が3つの職種で最も高く、本番環境の変更・障害調査・監視ではバックエンド回答者とほぼ同じ水準でした。テストの作成・保守はバックエンド回答者（72.7％）のほうが高くなっています。参考として、国を「Japan」と回答し職種にも回答した人は146人で、そのうちフルスタックは33人（22.6％）でした。回答数が少ないため、日本の傾向を示す値としては扱えません。
          </p>
        </section>

        <section id="demo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1ファイルで4レイヤーを動かした例（当サイトでの実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フルスタックが扱う範囲を具体的に示すため、画面（HTMLとJavaScript）、サーバー（Pythonの標準モジュール http.server）、データベース（SQLite）を1つのファイルにまとめた最小構成を作り、2026年11月27日に当サイトのMac（macOS 26.5.2、Python 3.9.6、SQLite 3.51.0）で実行しました。追加のライブラリは使っていません。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs leading-5 rounded-lg p-4 overflow-x-auto mb-2"><code>{demoCode}</code></pre>
          <p className="text-xs text-slate-500 mb-4">app.py（43行）。当サイトで作成したコードです。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs leading-5 rounded-lg p-4 overflow-x-auto mb-2"><code>{demoOutput}</code></pre>
          <p className="text-xs text-slate-500 mb-4">当サイトのMacでの実行結果（コマンドと出力をそのまま掲載）。</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            POSTで送ったデータがSQLiteのファイルに保存され、APIのJSONと画面用のHTMLが同じサーバーから返ることを確認できました。この小さな例の中にも、各層の公式ドキュメントが注意を促している点が含まれています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>データベース：Pythonの公式ドキュメントは、文字列操作でSQLを組み立てるとSQLインジェクションの危険があるとして、プレースホルダ（上のコードの「?」）で値を渡す方法を示しています</li>
            <li>画面：MDNは、要素の文字列の設定に innerHTML を使うとXSS攻撃を受けるおそれがあるとして、textContent の利用を勧めています（上のコードは textContent を使用）</li>
            <li>サーバー：Pythonの公式ドキュメントは、http.server は基本的なセキュリティチェックしか実装しておらず本番環境での利用は推奨しないと明記しています</li>
            <li>インフラ：この例はローカル（127.0.0.1）で動かしただけで、公開するにはWebサーバーやクラウド、HTTPS、監視などの層が別に必要です</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            フルスタックエンジニアには、このように層をまたいで動くものを作る力に加え、各層の安全上の注意点を押さえておくことが求められると当サイトでは考えています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はフルスタックエンジニアという呼び方の定義と、公開データから分かる実態に絞ってご説明しました。役割の違いや転職の進め方は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>フロントエンド・バックエンドの役割と職種構成：<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link></li>
            <li>バックエンドからの移行手順と職務経歴書の書き方：<Link href="/career/backend-to-fullstack/" className="text-blue-600 hover:underline">バックエンド→フルスタックへの転身ガイド</Link></li>
            <li>画面側の転職市場：<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link></li>
            <li>サーバー側の技術：<Link href="/skill/nodejs/" className="text-blue-600 hover:underline">Node.jsエンジニアの転職ガイド</Link></li>
            <li>データベース：<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link></li>
            <li>インフラ・クラウド：<Link href="/knowledge/cloud-engineer/" className="text-blue-600 hover:underline">クラウドエンジニアとは</Link></li>
            <li>公的な職業分類でのIT職種一覧：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>総務省「日本標準職業分類」（現行版の案内）：https://www.soumu.go.jp/toukei_toukatsu/index/seido/shokgyou/index.htm</li>
            <li>総務省「日本標準職業分類」（中分類10 情報処理・通信技術者）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>厚生労働省編職業分類（令和4年改定）：https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary.html</li>
            <li>厚生労働省編職業分類 大分類02 研究・技術の職業：https://www.hellowork.mhlw.go.jp/info/mhlw_job_dictionary_02.html</li>
            <li>O*NET OnLine 15-1254.00 Web Developers：https://www.onetonline.org/link/summary/15-1254.00</li>
            <li>IPA「デジタルスキル標準」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>IPA「デジタルスキル標準 ver.2.0 分冊版 ソフトウェアエンジニア編」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/sep_dss-p_swe.pdf</li>
            <li>Stack Overflow「2021 Developer Survey」：https://survey.stackoverflow.co/2021/</li>
            <li>Stack Overflow「2022 Developer Survey」：https://survey.stackoverflow.co/2022/</li>
            <li>Stack Overflow「2023 Developer Survey」：https://survey.stackoverflow.co/2023/</li>
            <li>Stack Overflow「2026 Developer Survey」Role：https://survey.stackoverflow.co/2026/work/data/role</li>
            <li>Stack Overflow「2026 Developer Survey」個票データ：https://github.com/StackExchange/Survey/raw/refs/heads/main/packages/archive/2026/survey_results_public.csv</li>
            <li>Python公式ドキュメント http.server：https://docs.python.org/3/library/http.server.html</li>
            <li>Python公式ドキュメント sqlite3：https://docs.python.org/3/library/sqlite3.html</li>
            <li>MDN Web Docs「Node: textContent property」：https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent</li>
            <li>MDN Web Docs「フェッチ API」：https://developer.mozilla.org/ja/docs/Web/API/Fetch_API</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
              { name: "バックエンド→フルスタックへの転身ガイド", href: "/career/backend-to-fullstack/" },
              { name: "Webアプリの開発言語", href: "/knowledge/webapp-languages/" },
              { name: "クラウドエンジニアとは", href: "/knowledge/cloud-engineer/" },
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
