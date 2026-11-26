import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "データサイエンティストとは｜協会の定義・スキル845項目・デジタルスキル標準のロール・不足の日米独比較【2026年】";
const DESCRIPTION =
  "データサイエンティストとは何かを、データサイエンティスト協会の定義とスキルチェックリストver.6、IPAのデジタルスキル標準ver.2.0、職業分類で整理します。人材不足の日米独比較、DS検定と統計検定の合格率もまとめます。";
const URL = "/knowledge/data-scientist/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "データサイエンティストの定義" },
  { id: "skills", label: "必要なスキル（スキルチェックリストver.6）" },
  { id: "dss", label: "デジタルスキル標準でのロール" },
  { id: "shortage", label: "人材の不足（日本・米国・ドイツ）" },
  { id: "exam", label: "関連する検定と合格率" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "データサイエンティストとは何ですか？",
    a: "一般社団法人データサイエンティスト協会は、データサイエンティストを「データサイエンス力、データエンジニアリング力をベースにデータから価値を創出し、ビジネス課題に答えを出すプロフェッショナル」と定義しています。IPAのデジタルスキル標準では、データ解析やAIシステムの仕組みの設計・実装・運用を担う役割とされています。",
  },
  {
    q: "データサイエンティストに必要なスキルは何ですか？",
    a: "協会のスキルチェックリストver.6（2025年12月公開）は、価値創造・データサイエンス・データエンジニアリング・基盤・融合の5つのスキルセット群に、845項目のスキルを定めています。従来の「ビジネス力」は「価値創造力」に改められました。",
  },
  {
    q: "データサイエンティストとデータエンジニアの違いは何ですか？",
    a: "IPAのデジタルスキル標準ver.2.0（2026年4月公開）では、データサイエンティストの類型のロールはデータビジネスストラテジストとデータサイエンスプロフェッショナルの2つです。データエンジニアは、新しく設けられた「データマネジメント」の類型に移りました。分析して知見を出す役割と、データの基盤を整える役割が分けて整理されています。",
  },
  {
    q: "データサイエンティストは不足していますか？",
    a: "IPA「DX動向2025」では、データサイエンティストの「量」が不足している（大幅に不足＋やや不足）と答えた日本の企業は68.9％でした。米国（38.1％）やドイツ（51.9％）より高い割合です（当サイトが図から合計）。",
  },
  {
    q: "データサイエンティストに資格は必要ですか？",
    a: "必須の資格はありません。協会のDS検定リテラシーレベル（第13回の合格率は約49％）や、統計検定のデータサイエンス系（DS基礎・DS発展・DSエキスパート）などで、知識を客観的に示すことはできます。",
  },
];

const skillRows = [
  { area: "データサイエンス", n: 354, desc: "情報処理、人工知能、統計学などの情報科学系の知恵を理解し、使う力" },
  { area: "データエンジニアリング", n: 180, desc: "データサイエンスを意味のある形に使えるようにし、実装、運用できるようにする力" },
  { area: "価値創造（旧：ビジネス力）", n: 153, desc: "戦略立案者、ガバナンスリーダーとして変革を推進する力" },
  { area: "融合", n: 125, desc: "3つのスキルカテゴリを融合的に発揮し、AI開発やAI利活用を推進する力" },
  { area: "基盤", n: 33, desc: "次代を担うデータプロフェッショナルとして有すべき基礎的な力" },
];

const shortageRows = [
  { c: "日本（n=1,186）", slight: "18.5", big: "50.4", sum: "68.9" },
  { c: "米国（n=391）", slight: "28.1", big: "10.0", sum: "38.1" },
  { c: "ドイツ（n=366）", slight: "33.3", big: "18.6", sum: "51.9" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function DataScientistPage() {
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
          { name: "データサイエンティストとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データサイエンティストとは｜協会の定義・スキル845項目・デジタルスキル標準のロール・不足の日米独比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公的資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】データサイエンティストとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>データサイエンティストは、「データサイエンス力、データエンジニアリング力をベースにデータから価値を創出し、ビジネス課題に答えを出すプロフェッショナル」です（データサイエンティスト協会の定義）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・協会のスキルチェックリストver.6は、5つのスキルセット群に845項目を定めています</li>
              <li>・IPAのデジタルスキル標準ver.2.0では、ロールはデータビジネスストラテジストとデータサイエンスプロフェッショナルの2つです</li>
              <li>・「量」が不足していると答えた日本の企業は68.9％で、米国（38.1％）より高い割合です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、データサイエンティスト協会、IPA（デジタルスキル標準・DX動向2025）、労働政策研究・研修機構（厚生労働省編職業分類）、統計質保証推進協会、文部科学省、Stack Overflow Developer Survey 2025の公表資料をもとに、データサイエンティストの定義と現状を整理します。人材不足の日米独比較は、IPAの図の数値を当サイトが合計したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["データサイエンティスト協会 スキル定義委員会資料・スキルチェックリストver.6・DS検定結果", "IPA「デジタルスキル標準 DX推進スキル標準ver.2.0」「DX動向2025」", "JILPT「第5回改定 厚生労働省編職業分類」", "統計検定 過去の結果", "文部科学省 数理・データサイエンス・AI教育プログラム認定制度"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">データサイエンティストの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            公的な資料・団体による定義を並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>定義・位置づけ</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>データサイエンティスト協会</td><td className={td}>データサイエンス力、データエンジニアリング力をベースにデータから価値を創出し、ビジネス課題に答えを出すプロフェッショナル</td></tr>
                <tr><td className={td}>IPA デジタルスキル標準ver.2.0</td><td className={td}>DXの推進において、データを活用した業務変革や新規ビジネスの実現に向けて、データ解析やAIシステムに関する仕組みの設計・実装・運用を担う役割</td></tr>
                <tr><td className={td}>厚生労働省編職業分類（2022年）</td><td className={td}>小分類「011-99 他に分類されない技術の職業」の例示（大分類「研究・技術の職業」）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：データサイエンティスト協会 第12回シンポジウム スキル定義委員会資料（2025年11月25日）p.3、IPA「DX推進スキル標準ver.2.0」、JILPT「第5回改定 厚生労働省編職業分類」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職業分類では、データサイエンティストはソフトウェア開発などの「情報処理・通信技術者」ではなく、「研究・技術の職業」の中の技術の職業に例示されています。プログラムを書く仕事というより、データを使って課題に答える技術職として整理されていることがわかります。
          </p>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要なスキル（スキルチェックリストver.6）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            データサイエンティスト協会は、2025年12月4日にスキルチェックリストver.6を公開しました。項目数は650から845に増え、従来の3つのスキル（ビジネス力・データサイエンス力・データエンジニアリング力）は5つのスキルセット群に改められています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>スキルセット群</th>
                  <th className={`${th} text-right`}>項目数</th>
                  <th className={th}>協会の説明</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map((r) => (
                  <tr key={r.area}>
                    <td className={td}>{r.area}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                    <td className={td}>{r.desc}</td>
                  </tr>
                ))}
                <tr><td className={`${td} font-bold`}>合計</td><td className={`${td} text-right font-bold`}>845</td><td className={td}>レベル別では★238・★★345・★★★262、うち必須186</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：データサイエンティスト協会 スキル定義委員会資料（2025年11月25日）p.4・p.5・p.30・p.31、プレスリリース（2025年12月4日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            項目の42％（354項目）がデータサイエンス、21％（180項目）がデータエンジニアリングです（当サイト算出）。協会は「ビジネス力→価値創造力へ。DSは分析者から価値創造リーダーへ」と説明しており、分析の技術に加えて、分析の結果で事業を変える力が求められるようになっています。協会は、来年度のデータサイエンティスト検定の範囲をこの更新版にもとづいて改める予定としています。
          </p>
        </section>

        <section id="dss" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デジタルスキル標準でのロール</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAと経済産業省のデジタルスキル標準（DX推進スキル標準）は、2026年4月16日のver.2.0で類型が5つから6つになり、データサイエンティストのロールも変わりました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>ロール</th>
                  <th className={th}>ver.1.2（旧）</th>
                  <th className={th}>ver.2.0（2026年4月〜）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>データビジネスストラテジスト</td><td className={td}>データサイエンティスト</td><td className={td}>データサイエンティスト（事業戦略に沿ったデータ・AIの活用戦略を考え、実現を主導する）</td></tr>
                <tr><td className={td}>データサイエンスプロフェッショナル</td><td className={td}>データサイエンティスト</td><td className={td}>データサイエンティスト（データの処理や解析を通じて、有意義な知見を導出する）</td></tr>
                <tr><td className={td}>データエンジニア</td><td className={td}>データサイエンティスト</td><td className={td}>データマネジメント（新設の類型。データスチュワード・データアーキテクトと同じ類型）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「DX推進スキル標準ver.1.2」「DX推進スキル標準ver.2.0」。ver.2.0の6類型は、ビジネスアーキテクト・デザイナー・データサイエンティスト・データマネジメント・ソフトウェアエンジニア・サイバーセキュリティです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            求人で「データサイエンティスト」とある場合でも、分析が中心か、データ基盤の構築が中心かは職務内容によって異なります。応募の前に、職務内容がどのロールに近いかを確かめておくと、求められる経験を判断しやすくなります。
          </p>
        </section>

        <section id="shortage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">人材の不足（日本・米国・ドイツ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA「DX動向2025」の「人材類型別の『量』の確保状況（国別）」から、データサイエンティストの行を取り出し、不足の割合を当サイトが合計しました（DXに取り組む企業が対象、2024年度の調査）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>国</th>
                  <th className={`${th} text-right`}>やや不足している</th>
                  <th className={`${th} text-right`}>大幅に不足している</th>
                  <th className={`${th} text-right`}>不足の合計</th>
                </tr>
              </thead>
              <tbody>
                {shortageRows.map((r) => (
                  <tr key={r.c}>
                    <td className={td}>{r.c}</td>
                    <td className={`${td} text-right`}>{r.slight}％</td>
                    <td className={`${td} text-right`}>{r.big}％</td>
                    <td className={`${td} text-right font-bold`}>{r.sum}％</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「DX動向2025」データ集 p.92。「不足の合計」は当サイトが2つの割合を足したものです。日本は「わからない」14.9％、「自社には必要ない」12.6％でした。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            日本では半数（50.4％）の企業が「大幅に不足している」と答えており、米国（10.0％）の約5倍です（当サイト算出）。一方で、同じ報告書で「最も不足している人材」を1つ選ぶ問いでは、日本で最も多いのはビジネスアーキテクト（43.0％）で、データサイエンティストは18.8％でした（米国29.3％・ドイツ26.0％）。日本では、データサイエンティストに加えて、DXを全体として進める人材の不足がより強く意識されていることがわかります。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連する検定と合格率</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>検定</th>
                  <th className={th}>直近の結果</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>DS検定 リテラシーレベル（データサイエンティスト協会）</td><td className={td}>第13回（2026年6月）：受験者約2,220名・合格者1,083名・合格率約49％</td></tr>
                <tr><td className={td}>　同 第12回（2026年3月）</td><td className={td}>受験者約2,400名・合格者1,001名・合格率約42％</td></tr>
                <tr><td className={td}>統計検定 データサイエンス基礎</td><td className={td}>2025年の合格率66.2％</td></tr>
                <tr><td className={td}>統計検定 データサイエンス発展</td><td className={td}>2025年の合格率61.5％</td></tr>
                <tr><td className={td}>統計検定 データサイエンスエキスパート</td><td className={td}>2025年の合格率23.4％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：データサイエンティスト協会「DS検定 結果」、統計検定「過去の結果」。統計検定のデータサイエンス系は受験者数が公表されていません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            大学でも教育が広がっています。文部科学省の数理・データサイエンス・AI教育プログラム認定制度では、2026年8月時点でリテラシーレベル655件（653校）、応用基礎レベル421件（288校）が認定されています。今後は、学生のうちにデータサイエンスの基礎を学んだ人が増えるため、中途の転職では実務での成果がより重視されると考えられます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者の中でのデータサイエンティスト</h2>
          <p className="text-slate-600 leading-relaxed">
            Stack Overflow Developer Survey 2025（n=43,560）で、自分の職種をデータサイエンティストと答えた人は1.2％でした（データエンジニア1.7％、AI/MLエンジニア1.4％）。開発者向けの調査の中では少数派で、ソフトウェア開発とは別の専門職として見られていることがうかがえます。転職の進め方や年収は<Link href="/skill/data-scientist/" className="text-blue-600 hover:underline">データサイエンティスト転職の進め方</Link>、近い職種との違いは<Link href="/skill/data-analyst/" className="text-blue-600 hover:underline">データアナリストの転職ガイド</Link>や<Link href="/career/data-analyst-to-scientist/" className="text-blue-600 hover:underline">データアナリストからデータサイエンティストへ</Link>をご覧ください。
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
            <li>データサイエンティスト協会 第12回シンポジウム スキル定義委員会資料：https://www.datascientist.or.jp/common/docs/12thsymp_skill.pdf</li>
            <li>データサイエンティスト協会 プレスリリース（スキルチェックリストver.6）：https://www.datascientist.or.jp/news/n-pressrelease/post-4959/</li>
            <li>データサイエンティスト協会「DS検定 結果」：https://www.datascientist.or.jp/dscertification/results/</li>
            <li>IPA「デジタルスキル標準」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>IPA「DX推進スキル標準ver.1.2」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver1.2.pdf</li>
            <li>IPA「DX動向2025」：https://www.ipa.go.jp/digital/chousa/dx-trend/tbl5kb0000001mn2-att/dx-trend-2025.pdf</li>
            <li>IPA「DX動向2025」データ集：https://www.ipa.go.jp/digital/chousa/dx-trend/tbl5kb0000001mn2-att/dx-trend-data-collection-2025.pdf</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>統計検定「試験の種類」：https://www.toukei-kentei.jp/grade/</li>
            <li>統計検定「過去の結果」：https://www.toukei-kentei.jp/info/past_data</li>
            <li>文部科学省 数理・データサイエンス・AI教育プログラム認定制度：https://www.mext.go.jp/a_menu/koutou/suuri_datascience_ai/mext_00005.html</li>
            <li>Stack Overflow「2025 Developer Survey」Developers：https://survey.stackoverflow.co/2025/developers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "データサイエンティスト転職の進め方", href: "/skill/data-scientist/" },
              { name: "Pythonとは", href: "/knowledge/python/" },
              { name: "SQLの基礎", href: "/knowledge/sql-basics/" },
              { name: "DXとは", href: "/knowledge/dx/" },
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
