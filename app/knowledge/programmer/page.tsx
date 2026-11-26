import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プログラマーとは｜公的な定義・仕事の範囲・使う言語・賃金を一次情報で整理【2026年】";
const DESCRIPTION =
  "プログラマーとは、設計書にもとづいてプログラムを作成し、テストや保守用の文書作成までを担う職種です。総務省・厚生労働省の職業分類の定義、SEとの違い、企業規模別の賃金（当サイト算出）、書く→実行の流れを整理します。";
const URL = "/knowledge/programmer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "プログラマーの定義（2つの公的な職業分類）" },
  { id: "scope", label: "プログラマーの仕事の範囲とSEとの違い" },
  { id: "languages", label: "プログラマーが使う言語" },
  { id: "run", label: "「書く→実行する」の流れ（当サイトでの実行結果）" },
  { id: "data", label: "賃金と基本情報技術者試験の数値（当サイト集計）" },
  { id: "related", label: "転職・言語・資格の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "プログラマーとは簡単に言うと何ですか？",
    a: "ソフトウェアの設計書にもとづいてプログラムを作成し、作成したプログラムのテストや、保守に必要な文書の作成を行う職種です。厚生労働省編職業分類（2022年改定）では小分類「009-03 プログラマー」として、このように説明されています。",
  },
  {
    q: "プログラマーとSE（システムエンジニア）の違いは何ですか？",
    a: "厚生労働省編職業分類では、要件定義や設計書・仕様書の作成を担う「ソフトウェア開発技術者」（SEを含む）と、ソースコードを記述する「プログラマー」が別の小分類になっています。ただし、実際の職場では1人が設計とプログラミングを兼ねることも多く、分担は企業によって異なります。SEの仕事内容は当サイトの「SEの仕事内容」でご説明しています。",
  },
  {
    q: "プログラマーの年収はどれくらいですか？",
    a: "公的統計にプログラマーだけの区分はありません。プログラマーを含む「ソフトウェア作成者」の令和7年賃金構造基本統計調査の値から、当サイトで年収目安を約578万円（企業規模10人以上・男女計）と算出しました。企業規模1,000人以上では約641万円、10〜99人では約518万円です。SEに当たる仕事をする人も含む値である点にご注意ください。",
  },
  {
    q: "プログラマーになるのに資格は必要ですか？",
    a: "プログラマーとして働くために必須の資格はありません。基礎知識を示す国家試験としては、IPAの基本情報技術者試験があり、IPAは対象者像を「ITを活用したサービス、製品、システム及びソフトウェアを作る人材に必要な基本的知識・技能をもち、実践的な活用能力を身に付けた者」としています。令和7年度の合格率は38.3％でした。",
  },
  {
    q: "プログラマーはどのプログラミング言語を使いますか？",
    a: "使う言語を定めた公的な基準はなく、作るソフトウェアの分野によって異なります。厚生労働省編職業分類の例示にも、Webプログラマー、コンピュータゲームプログラマー、NC工作機械プログラマーなど分野の異なる職業名が並んでいます。言語ごとの利用状況は当サイトの「プログラミング言語の人気ランキング」で公開調査を比較しています。",
  },
];

const wageRows = [
  { size: "企業規模計（10人以上）", age: "37.1歳", hours: "159＋12時間", monthly: "39.08万円", bonus: "109.51万円", annual: "約578万円" },
  { size: "1,000人以上", age: "37.6歳", hours: "154＋16時間", monthly: "41.86万円", bonus: "138.59万円", annual: "約641万円" },
  { size: "100〜999人", age: "36.2歳", hours: "164＋12時間", monthly: "38.33万円", bonus: "95.03万円", annual: "約555万円" },
  { size: "10〜99人", age: "37.3歳", hours: "162＋6時間", monthly: "36.06万円", bonus: "85.51万円", annual: "約518万円" },
];

const sexRows = [
  { sex: "男", age: "38.0歳", monthly: "40.29万円", bonus: "114.54万円", annual: "約598万円" },
  { sex: "女", age: "33.6歳", monthly: "34.70万円", bonus: "91.21万円", annual: "約508万円" },
];

const feRows = [
  { year: "令和3年度（2021年度）", applicants: "97,577人", examinees: "85,428人", passers: "34,734人", rate: "40.7％" },
  { year: "令和4年度（2022年度）", applicants: "117,624人", examinees: "101,620人", passers: "38,033人", rate: "37.4％" },
  { year: "令和5年度（2023年度）", applicants: "140,774人", examinees: "121,611人", passers: "57,278人", rate: "47.1％" },
  { year: "令和6年度（2024年度）", applicants: "157,259人", examinees: "133,732人", passers: "54,501人", rate: "40.8％" },
  { year: "令和7年度（2025年度）", applicants: "172,217人", examinees: "147,186人", passers: "56,370人", rate: "38.3％" },
];

const cCode = `#include <stdio.h>
int main(void) {
    long sum = 0;
    for (long i = 1; i <= 100000000; i++) sum += i;
    printf("Hello, programmer! sum=%ld\\n", sum);
    return 0;
}`;

const pyCode = `total = 0
for i in range(1, 100_000_001):
    total += i
print(f"Hello, programmer! sum={total}")`;

const errorOutput = `bad.c:4:51: error: expected ';' after expression
    4 |     for (long i = 1; i <= 100000000; i++) sum += i
      |                                                   ^
      |                                                   ;
1 error generated.`;

export default function ProgrammerKnowledgePage() {
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
          { name: "プログラマーとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プログラマーとは｜公的な定義・仕事の範囲・使う言語・賃金を一次情報で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】プログラマーとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>プログラマーとは、ソフトウェアの設計書にもとづいてプログラムを作成し、作成したプログラムのテストや、保守に必要な文書の作成を行う職種です（厚生労働省編職業分類「009-03 プログラマー」の説明による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・総務省の日本標準職業分類では、プログラマーは小分類104「ソフトウェア作成者」に含まれます</li>
              <li>・SE（ソフトウェア開発技術者）との違いは、要件定義・設計書の作成を担うか、ソースコードの記述を担うかです。ただし職場によって分担は異なります</li>
              <li>・プログラマーを含むソフトウェア作成者の年収目安は約578万円です（令和7年賃金構造基本統計調査から当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、総務省の日本標準職業分類と厚生労働省編職業分類（2022年改定、JILPT発行）の説明をもとに、プログラマーとはどのような職種か、どこまでが仕事の範囲かをご説明します。あわせて、令和7年賃金構造基本統計調査の企業規模別・男女別の値と、IPA基本情報技術者試験の推移を当サイトで表にまとめ、プログラムを「書く→実行する」流れを当サイトのMacで実際に試した結果も掲載します。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["総務省「日本標準職業分類」", "JILPT「第5回改定 厚生労働省編職業分類 職業分類表」", "厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表", "IPA 基本情報技術者試験・統計情報（推移表）"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">プログラマーの定義（2つの公的な職業分類）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プログラマーの公的な説明は、総務省が定める「日本標準職業分類」と、職業安定機関（ハローワーク）などの職業紹介業務で使う実務用の分類として作られた「厚生労働省編職業分類」の2つにあります。両者は分類の細かさが異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プログラマーが入る項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">説明（原文の要点）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">総務省「日本標準職業分類」</td><td className="border border-slate-200 px-3 py-2">中分類10 情報処理・通信技術者／小分類104 ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2">「ソフトウェア作成（基本ソフトウェア及びアプリケーションソフトウェア双方の開発を含む。）のための仕様決定、設計及びプログラミングの仕事に従事するもの」</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">厚生労働省編職業分類（2022年改定）</td><td className="border border-slate-200 px-3 py-2">中分類009 情報処理・通信技術者（ソフトウェア開発）／小分類009-03 プログラマー</td><td className="border border-slate-200 px-3 py-2">「ソフトウェアの設計書にもとづくプログラムの作成、作成したプログラムのテスト、プログラムの保守に必要な文書の作成などの仕事に従事するもの」</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「日本標準職業分類」小分類104、JILPT「第5回改定 厚生労働省編職業分類 職業分類表」（2022年12月発行）小分類009-03。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            日本標準職業分類の小分類104には、例示としてテクニカルスペシャリスト、プログラマー、ゲームプログラマー、CGプログラマー、社内システムエンジニア、クリエータ（情報通信産業に関するもの）が挙げられています。こちらは仕様決定や設計まで含む広い項目で、プログラマーと、個々のソフトウェアを設計するエンジニアが同じ項目に入ります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方、厚生労働省編職業分類は2022年の第5回改定で小分類を見直し、「ソフトウェア開発技術者（WEB・オープン系）」「ソフトウェア開発技術者（組込・制御系）」「プログラマー」を別々の小分類として設けました。009-03 プログラマーの例示職業名は、コーダー（プログラミング）、コンピュータゲームプログラマー、産業用ロボットティーチング技術者、ソフトウェアプログラマー、HTMLコーダー、NC工作機械プログラマー、Webアプリケーションプログラマー、Webプログラマーです。
          </p>
        </section>

        <section id="scope" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プログラマーの仕事の範囲とSEとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の中分類009に含まれる小分類の説明を並べると、プログラマーの仕事の範囲と、隣り合う職種との境目が分かります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">小分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な仕事（当サイト要約）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プログラマーとの境目</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">009-01 ソフトウェア開発技術者（WEB・オープン系）</td><td className="border border-slate-200 px-3 py-2">要件定義、基本設計書・詳細設計書・仕様書の作成。例示にシステムエンジニア（業務用システム）など</td><td className="border border-slate-200 px-3 py-2" rowSpan={2}>「プログラミング言語を使用してコンピュータプログラムのソースコードを記述する仕事」はプログラマーに分類すると注記されています</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">009-02 ソフトウェア開発技術者（組込・制御系）</td><td className="border border-slate-200 px-3 py-2">機器に組み込むマイコン用ソフトウェアの要件定義・設計書・仕様書の作成</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2 font-medium">009-03 プログラマー</td><td className="border border-slate-200 px-3 py-2 font-medium">設計書にもとづくプログラムの作成、テスト、保守用文書の作成</td><td className="border border-slate-200 px-3 py-2 font-medium">－</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">009-99 その他（テストエンジニアなど）</td><td className="border border-slate-200 px-3 py-2">プログラムの検査、誤り・欠陥の修正、ソフトウェアの日本語化など</td><td className="border border-slate-200 px-3 py-2">「バグを修正する仕事」はテストエンジニアに分類すると注記されています</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」中分類009。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            分類上は「設計書を作るのがSE（ソフトウェア開発技術者）、設計書にもとづいてソースコードを書くのがプログラマー、バグの修正を専門に担うのがテストエンジニア」と整理されています。システム全体の構成を企画する仕事は、日本標準職業分類ではさらに上流の小分類102「システム設計者」（例示：システムアーキテクトなど）に分かれ、同分類の102の説明でもプログラマーは104に分類すると明記されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ただし、これは職業を分類するための区分です。実際の職場では、プログラマーが詳細設計や自分の書いたコードの不具合修正まで担うことも多く、肩書きと担当範囲は一致しないことがあります。求人を比較する際は、肩書きよりも「どの工程を担当するか」を確認することをおすすめします。SEの工程ごとの作業は<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SEの仕事内容</Link>で扱っているため、本記事では繰り返しません。
          </p>
        </section>

        <section id="languages" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プログラマーが使う言語</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プログラマーが使う言語を定めた公的な基準はありません。厚生労働省編職業分類の例示職業名を見ても、Web、ゲーム、産業用ロボット、NC工作機械と分野が幅広く、作るものによって使う言語が変わります。次の表は、例示職業名の分野ごとに、よく使われる言語の例を当サイトで整理したものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分野（職業分類の例示職業名）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">作るものの例</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">使われることの多い言語の例（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">Web（Webプログラマー、Webアプリケーションプログラマー、HTMLコーダー）</td><td className="border border-slate-200 px-3 py-2">Webサイト、Webアプリケーション</td><td className="border border-slate-200 px-3 py-2">HTML・CSS（画面の記述）、JavaScript・TypeScript、PHP、Python、Ruby、Java など</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">業務システム（ソフトウェアプログラマー）</td><td className="border border-slate-200 px-3 py-2">社内の基幹システム、業務アプリケーション</td><td className="border border-slate-200 px-3 py-2">Java、C#、COBOL など</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ゲーム（コンピュータゲームプログラマー）</td><td className="border border-slate-200 px-3 py-2">家庭用・スマートフォン向けゲーム</td><td className="border border-slate-200 px-3 py-2">C++、C# など</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">機械・機器（産業用ロボットティーチング技術者、NC工作機械プログラマー）</td><td className="border border-slate-200 px-3 py-2">ロボットや工作機械の動作</td><td className="border border-slate-200 px-3 py-2">機器メーカーごとの専用言語、C など</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 分野の列は厚生労働省編職業分類の例示職業名です。言語の列は公的な定義がないため当サイトの整理であり、実際の採用言語は企業・案件によって異なります。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            言語ごとの利用率を示す公的統計はなく、民間・開発者コミュニティの公開調査があります。複数の調査の比較は<Link href="/knowledge/popular-languages/" className="text-blue-600 hover:underline">プログラミング言語の人気ランキング</Link>、個別の言語は<Link href="/knowledge/c-language/" className="text-blue-600 hover:underline">C言語とは</Link>・<Link href="/knowledge/python/" className="text-blue-600 hover:underline">Pythonとは</Link>でご説明しています。
          </p>
        </section>

        <section id="run" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「書く→実行する」の流れ（当サイトでの実行結果）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プログラマーの仕事の中心である「ソースコードを書いて動かす」流れを示すため、当サイトのMac（Apple M4、macOS 26.5.2）で、1から1億までの整数の合計を求める同じ処理をC言語とPythonで書き、2026年11月27日に実行しました。
          </p>
          <p className="text-sm font-bold text-slate-700 mb-2">C言語のソースコード（hello.c、7行）</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto mb-4"><code>{cCode}</code></pre>
          <p className="text-sm font-bold text-slate-700 mb-2">Pythonのソースコード（hello.py、4行）</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto mb-4"><code>{pyCode}</code></pre>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">C言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Python</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">使ったツール</td><td className="border border-slate-200 px-3 py-2">Apple clang 17.0.0（最適化なし -O0）</td><td className="border border-slate-200 px-3 py-2">Python 3.9.6（macOS付属）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">実行までの手順</td><td className="border border-slate-200 px-3 py-2">① clang でコンパイルし実行ファイルを作る（0.24秒）→ ② 実行ファイルを実行</td><td className="border border-slate-200 px-3 py-2">python3 hello.py で直接実行（コンパイル操作は不要）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">出力</td><td className="border border-slate-200 px-3 py-2" colSpan={2}>Hello, programmer! sum=5000000050000000（両方とも同じ）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">実行時間（3回の中央値）</td><td className="border border-slate-200 px-3 py-2">0.04秒（3回：0.45／0.04／0.04秒）</td><td className="border border-slate-200 px-3 py-2">3.80秒（3回：3.75／3.80／3.84秒）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">計測方法：/usr/bin/time -p の real（経過時間）。C言語の1回目は初回起動のため長くなっています。数値は当サイトの環境での一例で、機種・設定・処理内容によって大きく変わります。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            同じ処理でも、C言語はソースコードを事前に機械語へ翻訳（コンパイル）してから実行し、Pythonはインタプリタが実行時に読み進めます。この例ではC言語のほうが短時間で終わりましたが、Pythonは行数が少なく、コンパイルの手間もありません。どの言語を選ぶかは、処理速度・書きやすさ・既存のシステムとの相性などを踏まえて決めることになります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-2">
            また、C言語のソースコードから「;」（セミコロン）を1つ削除してコンパイルすると、次のエラーが表示され、実行ファイルは作られませんでした。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto mb-4"><code>{errorOutput}</code></pre>
          <p className="text-slate-600 leading-relaxed">
            エラーには行番号（4行目）と、不足している記号の位置が示されます。プログラマーは「書く→コンパイル・実行する→エラーや結果を確かめて直す」を繰り返してプログラムを完成させ、職業分類の説明にあるとおり、その後にテストと保守用の文書の作成を行います。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賃金と基本情報技術者試験の数値（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査にはプログラマーだけの区分がなく、プログラマーは「ソフトウェア作成者」に含まれて集計されています。令和7年調査（産業計・男女計）の企業規模別の値を当サイトで抜き出しました。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">企業規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月の労働時間（所定内＋超過）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">きまって支給する現金給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間賞与等</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.size}>
                    <td className="border border-slate-200 px-3 py-2">{r.size}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.age}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.hours}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.monthly}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.bonus}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat、xlsx）。千円単位の値を万円に換算しています。年収目安は残業代を含む月額をもとにした当サイトの概算です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            企業規模1,000人以上と10〜99人では、年収目安に約123万円の差があり、その差の多くは年間賞与等（約53万円の差）と月額給与（約5.8万円×12か月の差）によるものです（当サイト算出）。男女別の値は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">性別（企業規模10人以上）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">きまって支給する現金給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間賞与等</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                {sexRows.map((r) => (
                  <tr key={r.sex}>
                    <td className="border border-slate-200 px-3 py-2">{r.sex}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.age}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.monthly}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.bonus}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：同上。男女で平均年齢が4.4歳異なるため、差のすべてが性別によるものではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            なお、「ソフトウェア作成者」には仕様決定や設計を担う人も含まれるため、設計書にもとづいてプログラムを作成する人だけの賃金を示すものではありません。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAは「ITエンジニアとしてキャリアをスタートするには、まず基本情報技術者試験から受験することをお勧めします」としています。同試験の対象者像は「ITを活用したサービス、製品、システム及びソフトウェアを作る人材に必要な基本的知識・技能をもち、実践的な活用能力を身に付けた者」で、期待する技術水準の1つには「上位者の方針を理解し、自らプログラムを作成できる」が挙げられています。IPAの推移表から直近5年度の数値を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">応募者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">受験者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格率</th>
                </tr>
              </thead>
              <tbody>
                {feRows.map((r) => (
                  <tr key={r.year}>
                    <td className="border border-slate-200 px-3 py-2">{r.year}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.applicants}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.examinees}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.passers}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「推移表」（01_suiihyo_r07.xlsx、年度 全国）。CBT方式による応募者数・受験者数・合格者数を含む年度合計です。合格率は合格者数÷受験者数でIPAが算出した値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            応募者数は令和3年度の97,577人から令和7年度の172,217人へ約1.76倍になりました（当サイト算出）。合格率は37.4〜47.1％の範囲で推移しています。基本情報技術者試験は現在CBT方式で随時実施されています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・言語・資格の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はプログラマーという職種の定義・仕事の範囲・使う言語に絞ってご説明しました。キャリアや周辺職種の具体的な情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>SEの工程ごとの作業と賃金：<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SE（システムエンジニア）の仕事内容</Link></li>
            <li>プログラマーからSEへの進み方：<Link href="/career/pg-to-se/" className="text-blue-600 hover:underline">プログラマー（PG）→システムエンジニア（SE）転職ガイド</Link></li>
            <li>ITエンジニアの職種全体：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
            <li>言語の利用状況：<Link href="/knowledge/popular-languages/" className="text-blue-600 hover:underline">プログラミング言語の人気ランキング</Link></li>
            <li>国家試験の転職での評価：<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者は転職に効くか</Link></li>
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
            <li>総務省「日本標準職業分類」（中分類10 情報処理・通信技術者／小分類102・104）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>JILPT「職業分類表 改定の経緯とその内容：第5回改定厚生労働省編職業分類」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/index.html</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業分類表」全文（中分類009、小分類009-01〜009-99）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>IPA 基本情報技術者試験（対象者像・業務と役割・期待する技術水準）：https://www.ipa.go.jp/shiken/kubun/fe.html</li>
            <li>IPA 統計情報 推移表（令和7年度）：https://www.ipa.go.jp/shiken/reports/h5f8pg00000037bj-att/01_suiihyo_r07.xlsx</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SE（システムエンジニア）の仕事内容", href: "/knowledge/se/" },
              { name: "プログラマー→SE転職ガイド", href: "/career/pg-to-se/" },
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
              { name: "プログラミング言語の人気ランキング", href: "/knowledge/popular-languages/" },
              { name: "C言語とは", href: "/knowledge/c-language/" },
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
