import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プログラミング言語の人気ランキング｜3つの公開調査を当サイトで横断比較【2026年】";
const DESCRIPTION =
  "プログラミング言語の人気を、Stack Overflow開発者調査2025・TIOBE指数2026年11月・GitHub Octoverse 2026の3つで比較します。測り方の違いと、3つの上位10位に入った回数（当サイト集計）を整理します。";
const URL = "/knowledge/popular-languages/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "cross", label: "3つのランキングの横断比較（当サイト集計）" },
  { id: "methods", label: "ランキングごとの測り方の違い" },
  { id: "stackoverflow", label: "Stack Overflow Developer Survey 2025" },
  { id: "tiobe", label: "TIOBE指数（2026年11月）" },
  { id: "octoverse", label: "GitHub Octoverse 2026" },
  { id: "ieee", label: "参考：IEEE Spectrumのランキング" },
  { id: "reading", label: "ランキングの読み方と注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "いま最も人気のあるプログラミング言語は何ですか？",
    a: "どの調査を見るかで1位が変わります。Stack Overflow Developer Survey 2025ではJavaScript（全回答者の66％）、TIOBE指数2026年11月ではPython（20.86％）、GitHub Octoverse 2026ではTypeScript（月間コントリビューター数）が1位です。当サイトで3つの上位10位を集計したところ、Python・JavaScript・Java・C#・C++の5言語が3つすべてに入っていました。",
  },
  {
    q: "Pythonはどのくらい人気がありますか？",
    a: "TIOBE指数2026年11月で1位（20.86％）、GitHub Octoverse 2026で2位、Stack Overflow Developer Survey 2025で4位（全回答者の57.9％）です。Stack Overflowは、Pythonの利用率が2024年から2025年に7ポイント上がったと説明しています。3つの順位の合計が最も小さく、当サイトの集計では最も安定して上位に入っている言語です。",
  },
  {
    q: "TypeScriptはGitHubで1位なのに、TIOBE指数では低いのはなぜですか？",
    a: "測っているものが違うためと考えられます。GitHub Octoverseはリポジトリでの活動（プッシュ・プルリクエストなど）に参加したアカウント数を、TIOBE指数はGoogle・Amazon・Wikipedia・Bingのほか20以上のウェブサイトでの検索結果をもとに算出しています。TypeScriptはTIOBE指数2026年11月で41位（0.26％）ですが、Stack Overflow Developer Survey 2025では全回答者の43.6％が使っており、調査の方法によって順位が大きく変わる例です。",
  },
  {
    q: "Rustは人気がありますか？",
    a: "使い続けたいと答えた人の割合（Admired）では、Stack Overflow Developer Survey 2025でRustが72.4％と最も高い言語でした。一方、過去1年に使った人の割合は全回答者の14.8％（14位）、TIOBE指数2026年11月では11位で、2026年11月の発表でGoに抜かれて上位10位から外れています。GitHub Octoverse 2026では、上位の言語の中で伸び率が最も高く、1年で倍増したと報告されています。",
  },
  {
    q: "人気のある言語と年収が高い言語は同じですか？",
    a: "同じとは限りません。本記事のランキングは利用者数や検索量などの「人気」を測ったもので、年収とは別の指標です。言語別の年収の公表データは「プログラマーの年収ランキング」で整理しています。",
  },
];

type CrossRow = {
  lang: string;
  so: string;
  tiobe: string;
  octo: string;
  count: number;
  avg: string;
};

const crossRows: CrossRow[] = [
  { lang: "Python", so: "4位", tiobe: "1位", octo: "2位", count: 3, avg: "2.5" },
  { lang: "JavaScript", so: "1位", tiobe: "6位", octo: "3位", count: 3, avg: "3.5" },
  { lang: "Java", so: "7位", tiobe: "3位", octo: "上位10に含む", count: 3, avg: "5.0" },
  { lang: "C++", so: "9位", tiobe: "4位", octo: "上位10に含む", count: 3, avg: "6.5" },
  { lang: "C#", so: "8位", tiobe: "5位", octo: "上位10に含む", count: 3, avg: "6.5" },
  { lang: "SQL", so: "3位", tiobe: "8位", octo: "—", count: 2, avg: "5.5" },
  { lang: "Go", so: "13位", tiobe: "10位", octo: "上位10に含む", count: 2, avg: "11.5" },
  { lang: "TypeScript", so: "6位", tiobe: "41位", octo: "1位", count: 2, avg: "23.5" },
  { lang: "Bash/Shell", so: "5位", tiobe: "50位以内に無し", octo: "上位10に含む（Shell）", count: 2, avg: "—" },
  { lang: "C", so: "11位", tiobe: "2位", octo: "—", count: 1, avg: "6.5" },
  { lang: "PHP", so: "12位", tiobe: "12位", octo: "上位10に含む", count: 1, avg: "12.0" },
  { lang: "R", so: "21位", tiobe: "7位", octo: "—", count: 1, avg: "14.0" },
  { lang: "Visual Basic", so: "23位（.Net）", tiobe: "9位", octo: "—", count: 1, avg: "16.0" },
  { lang: "HTML/CSS", so: "2位", tiobe: "対象外", octo: "—", count: 1, avg: "—" },
  { lang: "PowerShell", so: "10位", tiobe: "50位以内に無し", octo: "—", count: 1, avg: "—" },
  { lang: "HCL", so: "選択肢に無し", tiobe: "50位以内に無し", octo: "上位10に含む", count: 1, avg: "—" },
  { lang: "Rust", so: "14位", tiobe: "11位", octo: "—", count: 0, avg: "12.5" },
  { lang: "Swift", so: "20位", tiobe: "18位", octo: "—", count: 0, avg: "19.0" },
  { lang: "Kotlin", so: "15位", tiobe: "33位", octo: "—", count: 0, avg: "24.0" },
];

const soRows = [
  { lang: "JavaScript", all: "66％", pro: "68.8％", desired: "33.5％", admired: "46.8％" },
  { lang: "HTML/CSS", all: "61.9％", pro: "63％", desired: "33.8％", admired: "52.1％" },
  { lang: "SQL", all: "58.6％", pro: "61.3％", desired: "35.6％", admired: "56.4％" },
  { lang: "Python", all: "57.9％", pro: "54.8％", desired: "39.3％", admired: "56.4％" },
  { lang: "Bash/Shell", all: "48.7％", pro: "48.8％", desired: "27.4％", admired: "52.8％" },
  { lang: "TypeScript", all: "43.6％", pro: "48.8％", desired: "31.9％", admired: "58％" },
  { lang: "Java", all: "29.4％", pro: "29.6％", desired: "15.8％", admired: "41.8％" },
  { lang: "C#", all: "27.8％", pro: "29.9％", desired: "19.4％", admired: "55.8％" },
  { lang: "C++", all: "23.5％", pro: "21.8％", desired: "16.7％", admired: "46.6％" },
  { lang: "PowerShell", all: "23.2％", pro: "23.1％", desired: "9.6％", admired: "35.4％" },
];

const tiobeRows = [
  { rank: "1", prev: "1", lang: "Python", rating: "20.86％", change: "−2.51" },
  { rank: "2", prev: "2", lang: "C", rating: "11.48％", change: "+1.80" },
  { rank: "3", prev: "4", lang: "Java", rating: "8.89％", change: "+0.34" },
  { rank: "4", prev: "3", lang: "C++", rating: "8.35％", change: "−0.60" },
  { rank: "5", prev: "5", lang: "C#", rating: "3.39％", change: "−4.26" },
  { rank: "6", prev: "6", lang: "JavaScript", rating: "2.42％", change: "−1.00" },
  { rank: "7", prev: "12", lang: "R", rating: "2.27％", change: "+0.60" },
  { rank: "8", prev: "10", lang: "SQL", rating: "1.91％", change: "+0.11" },
  { rank: "9", prev: "7", lang: "Visual Basic", rating: "1.88％", change: "−1.43" },
  { rank: "10", prev: "11", lang: "Go", rating: "1.69％", change: "−0.03" },
];

export default function PopularProgrammingLanguagesPage() {
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
          { name: "プログラミング言語の人気ランキング" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プログラミング言語の人気ランキング｜3つの公開調査を当サイトで横断比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】いま人気のプログラミング言語</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>主要な3つの公開ランキングの上位10位をすべて満たすのは、Python・JavaScript・Java・C#・C++の5言語です（当サイト集計）。中でもPythonは3つとも4位以内に入っており、最も安定して上位にある言語です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・Stack Overflow Developer Survey 2025（開発者アンケート）の1位はJavaScriptで、全回答者の66％が過去1年に使っていました</li>
              <li>・TIOBE指数2026年11月（検索エンジンでの言及量）の1位はPythonで、レーティングは20.86％です</li>
              <li>・GitHub Octoverse 2026（GitHub上の活動量）の1位はTypeScriptで、Python・JavaScriptが続きます</li>
              <li>・1位が調査ごとに違うのは、測っているものが違うためです。順位は「どの場面でよく使われているか」の目安としてご覧ください</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、方法の異なる3つの公開ランキング（Stack Overflow Developer Survey 2025、TIOBE指数2026年11月、GitHub Octoverse 2026）を発表元のページで確認し、言語ごとの順位を当サイトで1つの表にまとめました。あわせて、それぞれの測り方の違いと、順位を読むときの注意点をご説明します。言語別の年収は扱わず、<Link href="/salary/skill-ranking/" className="text-blue-600 hover:underline">プログラマーの年収ランキング</Link>で整理しています。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["Stack Overflow「2025 Developer Survey」Technology", "TIOBE Index（2026年11月）", "GitHub Blog「Octoverse 2026」", "IEEE Spectrum「The Top Programming Languages 2025」"]}
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

        <section id="cross" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3つのランキングの横断比較（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            3つのランキングのいずれかで上位10位に入った言語と、参考としてRust・Swift・Kotlinについて、各ランキングでの順位を並べました。「上位10入りの回数」は3つのうち何回上位10位に入ったか、「2調査の平均順位」はStack OverflowとTIOBEの順位の平均で、どちらも当サイトで算出した値です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Stack Overflow 2025（全回答者）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">TIOBE 2026年11月</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Octoverse 2026</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">上位10入りの回数（3調査中）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2調査の平均順位</th>
                </tr>
              </thead>
              <tbody>
                {crossRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.so}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.tiobe}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.octo}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.count}回</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 当サイト集計。Stack Overflowの順位は「Programming, scripting, and markup languages」の全回答者の利用率の順で、HTML/CSSなどのマークアップ言語を含みます。Octoverse 2026は1〜3位のみ本文で順位が示されており、4〜10位の言語（C#・Java・Shell・PHP・Go・HCL・C++）は予測の対象とされた「平均月間参加数の上位10言語」として名前が挙がっていますが、2026年9月時点の順位は明記されていないため「上位10に含む」と表記しています。Stack Overflowの「Bash/Shell」とOctoverseの「Shell」、Stack Overflowの「Visual Basic (.Net)」とTIOBEの「Visual Basic」は、当サイトで同じ言語として対応させました。「—」は上位10位に入っていないことを示します。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            3つすべてで上位10位に入ったのは、Python・JavaScript・Java・C++・C#の5言語です。2調査の平均順位ではPython（2.5位）とJavaScript（3.5位）が上位にあり、一般的に「人気の言語」と言われる言語と重なります。一方、TypeScript（GitHubで1位・TIOBEで41位）やC（TIOBEで2位・Stack Overflowで11位）のように、調査によって順位が大きく分かれる言語もあります。
          </p>
        </section>

        <section id="methods" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ランキングごとの測り方の違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ランキング</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">測っているもの</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">対象・時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">読むときの注意点（当サイトの見解）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">Stack Overflow Developer Survey 2025</td><td className="border border-slate-200 px-3 py-2">過去1年に本格的な開発で使った言語（アンケート・複数回答）</td><td className="border border-slate-200 px-3 py-2">言語の設問の回答者31,771人（うちプロの開発者24,759人）</td><td className="border border-slate-200 px-3 py-2">Stack Overflowの利用者に偏る可能性があります。HTML/CSS・SQL・Bash/Shellなども同じ設問に含まれます</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">TIOBE指数</td><td className="border border-slate-200 px-3 py-2">Google・Amazon・Wikipedia・Bingのほか20以上のウェブサイトでの検索結果をもとにした、技術者数・講座・ベンダー数の指標</td><td className="border border-slate-200 px-3 py-2">毎月更新（本記事は2026年11月）</td><td className="border border-slate-200 px-3 py-2">TIOBE自身が「最良の言語や、最も多くのコードが書かれた言語を示すものではない」と説明しています</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">GitHub Octoverse 2026</td><td className="border border-slate-200 px-3 py-2">リポジトリの主要言語ごとの月間コントリビューター数（プッシュ・プルリクエスト・Issue・レビュー・コメントに参加したアカウント）</td><td className="border border-slate-200 px-3 py-2">2025年9月〜2026年9月のGitHub上の活動</td><td className="border border-slate-200 px-3 py-2">GitHubで管理されるプロジェクトが対象です。1つのアカウントが複数の言語に数えられることがあります</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：各ランキングの発表ページ（出典一覧を参照）。注意点の欄は当サイトによるまとめです。</p>
        </section>

        <section id="stackoverflow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Stack Overflow Developer Survey 2025</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「過去1年に本格的な開発で使った言語」を尋ねた設問の上位10言語です。「Desired」は今後1年で使いたいと答えた人の割合、「Admired」は過去1年に使った人のうち今後も使い続けたいと答えた人の割合です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全回答者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">プロの開発者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Desired</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">Admired</th>
                </tr>
              </thead>
              <tbody>
                {soRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.all}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.pro}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.desired}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.admired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」Technology（Programming, scripting, and markup languages／Admired and Desired）。全回答者 n=31,771、プロの開発者 n=24,759。複数回答のため合計は100％になりません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Stack Overflowは、Pythonの利用率が2024年から2025年に7ポイント上がり、AI・データサイエンス・バックエンド開発で使われていることの表れだと説明しています。Admiredが最も高かったのはRust（72.4％）で、上位10言語の中ではTypeScript（58％）、Python・SQL（いずれも56.4％）が高い値でした。プロの開発者に絞ると、TypeScriptの利用率は全回答者より5.2ポイント高くなります（差は当サイト算出）。
          </p>
        </section>

        <section id="tiobe" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TIOBE指数（2026年11月）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-right">2026年11月</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2025年11月</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">言語</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">レーティング</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">前年差（ポイント）</th>
                </tr>
              </thead>
              <tbody>
                {tiobeRows.map((r) => (
                  <tr key={r.lang}>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.rank}位</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.prev}位</td>
                    <td className="border border-slate-200 px-3 py-2">{r.lang}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.rating}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：TIOBE Index（2026年11月）。前年差はTIOBEの表の「Change」欄の値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            TIOBEの2026年11月の発表では、RustがGoに抜かれて上位10位から外れ、Visual Basicが2つ順位を下げてRとSQLが上位10位に入ったと説明されています。また、Flutterの普及を背景に、Dartが初めて上位20位（20位）に入ったと紹介されています。11位以下ではRust（11位）、PHP（12位）、Swift（18位）、Kotlin（33位）、TypeScript（41位）となっています。
          </p>
        </section>

        <section id="octoverse" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GitHub Octoverse 2026</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHubの年次レポートOctoverse 2026（2026年10月28日公開）によると、コントリビューター数で見たGitHub上の言語の順位は、2025年に続いてTypeScriptが1位、Pythonが2位、JavaScriptが3位でした。2025年9月から2026年9月の1年間で、月間コントリビューターはTypeScriptが362万人、Pythonが323万人、JavaScriptが182万人増え、上位10言語の中で最も大きな増加でした。
          </p>
          <p className="text-slate-600 leading-relaxed">
            伸び率では、上位の言語の中でRustが最も高く、1年で倍増しています。GitHubの予測では、2027年9月の月間コントリビューターはTypeScriptが1,307万人、Pythonが1,256万人、JavaScriptが742万人で、ほかの上位10言語（C#・Java・Shell・PHP・Go・HCL・C++）は212万〜88万人の範囲と見込まれています。予測は直近の傾向を延ばしたもので、確定値ではありません。
          </p>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub Blog「Octoverse 2026」（2026年11月6日更新）。万人単位への換算は当サイトによるものです。</p>
        </section>

        <section id="ieee" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参考：IEEE Spectrumのランキング</h2>
          <p className="text-slate-600 leading-relaxed">
            米国の技術者団体IEEEの雑誌IEEE Spectrumも、Google検索の量、Stack Exchangeの質問数、研究論文での言及、GitHubの活動などを組み合わせたランキングを毎年発表しています。2025年版（2025年9月23日公開）では、IEEE会員の関心で重みづけした既定のランキングでPythonが引き続き1位、JavaScriptは前年の3位から6位に下がりました。求人で求められるスキルだけを見た「Jobs」のランキングでも、Pythonが前年の2位から1位に上がっています。上位10位の全体は記事中の表示から確認できなかったため、本記事の横断比較には含めていません。
          </p>
        </section>

        <section id="reading" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ランキングの読み方と注意点</h2>
          <ul className="text-slate-600 leading-relaxed space-y-2">
            <li>・<strong>1位の違いは測り方の違いです。</strong>アンケートは「使っている人の数」、TIOBE指数は「ウェブ上での言及量」、Octoverseは「GitHub上で活動している人の数」を測っています。どれか1つが正しいというより、見ている場面が異なると考えるのが妥当です。</li>
            <li>・<strong>Webに関わる言語はアンケートとGitHubで高く出やすい傾向があります。</strong>JavaScript・TypeScript・HTML/CSSはStack OverflowやOctoverseで上位ですが、TIOBE指数ではJavaScriptが6位、TypeScriptが41位です。</li>
            <li>・<strong>CやC++は検索ベースの指数で高く出ています。</strong>TIOBE指数ではCが2位、C++が4位ですが、Stack OverflowではCが11位（全回答者の22％）です。組み込みなど、GitHubやStack Overflowの利用者層とは異なる分野で使われていることが影響している可能性があります。</li>
            <li>・<strong>AIの普及で指標そのものが変わりつつあります。</strong>IEEE Spectrumは、開発者がStack Exchangeで質問する代わりにAIアシスタントに尋ねるようになり、公開の場での関心の表れが減っていると指摘しています。Octoverse 2026も、AIのエージェントが言語を選ぶ影響が出てきている可能性に触れています。</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            転職や学習の言語を選ぶ際は、人気の順位だけでなく、志望する職種や業界で求められている言語かどうかもあわせてご確認ください。各言語の詳細は、<Link href="/knowledge/python/" className="text-blue-600 hover:underline">Pythonとは</Link>、<Link href="/knowledge/java-javascript/" className="text-blue-600 hover:underline">JavaとJavaScriptの違い</Link>、<Link href="/knowledge/typescript-javascript/" className="text-blue-600 hover:underline">TypeScriptとJavaScriptの違い</Link>、<Link href="/knowledge/c-language/" className="text-blue-600 hover:underline">C言語とは</Link>、<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link>、<Link href="/knowledge/swift/" className="text-blue-600 hover:underline">Swiftとは</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Stack Overflow「2025 Developer Survey」Technology：https://survey.stackoverflow.co/2025/technology</li>
            <li>TIOBE Index（2026年11月）：https://www.tiobe.com/tiobe-index/</li>
            <li>GitHub Blog「Octoverse 2026」：https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/</li>
            <li>IEEE Spectrum「The Top Programming Languages 2025」：https://spectrum.ieee.org/top-programming-languages-2025</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "プログラマーの年収ランキング（言語別）", href: "/salary/skill-ranking/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "JavaとJavaScriptの違い", href: "/knowledge/java-javascript/" },
              { name: "TypeScriptとJavaScriptの違い", href: "/knowledge/typescript-javascript/" },
              { name: "C言語とは", href: "/knowledge/c-language/" },
              { name: "SQLの基礎", href: "/knowledge/sql-basics/" },
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
