import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プロジェクトマネージャーとは｜役割・PL/SE/PMOとの違い・PM試験合格率の推移【2026年】";
const DESCRIPTION =
  "プロジェクトマネージャー（PM）とは、プロジェクトの責任者として計画を作り、要員・予算・品質に責任を持って全体を管理する職種です。総務省の職業分類とIPA試験の「業務と役割」、PL・SE・PMOとの違い、PM試験の合格率と国内PMP資格者数の推移（当サイト集計）を整理します。";
const URL = "/knowledge/project-manager/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "プロジェクトマネージャーの定義" },
  { id: "role", label: "プロジェクトマネージャーの業務と役割" },
  { id: "compare", label: "PL・SE・PMOとの違い" },
  { id: "data", label: "PM試験とPMP資格者数の推移（当サイト集計）" },
  { id: "related", label: "転職・年収・資格の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "プロジェクトマネージャーとは簡単に言うと何ですか？",
    a: "プロジェクトの責任者として、計画を作り、必要な人員や資源を確保し、予算や品質に責任を持ってプロジェクト全体を管理する職種です。総務省の日本標準職業分類では、IT分野のプロジェクトマネージャーは「情報処理プロジェクトマネージャ」（小分類103）として、専門的・技術的職業従事者の中に位置づけられています。",
  },
  {
    q: "プロジェクトマネージャー（PM）とプロジェクトリーダー（PL）の違いは何ですか？",
    a: "PLは公的な職業分類に独立した項目がなく、意味は企業によって異なります。一般には、PMがプロジェクト全体の計画・予算・品質に責任を持つのに対し、PLは開発チームや担当工程の取りまとめを担う役割として使われることが多い呼び方です。求人を比較する際は、肩書きではなく予算や要員計画への関与の範囲を確認することをおすすめします。",
  },
  {
    q: "プロジェクトマネージャーとPMOの違いは何ですか？",
    a: "PMは個別のプロジェクトの目的の実現に責任を負います。PMOは組織の中でプロジェクトの進め方を標準化し、複数のプロジェクトを横断的に支援・管理する部門や仕組みです。詳しくは当サイトの「PMOとは」でご説明しています。",
  },
  {
    q: "プロジェクトマネージャーになるのに資格は必要ですか？",
    a: "PMとして働くために必須の資格はありません。知識や経験を示す代表的な資格には、IPAのプロジェクトマネージャ試験（国家試験）とPMIのPMP資格があります。IPAの試験は令和7年度秋期の合格率が14.3％でした。なお、IPAは2027年度から新試験制度に移行する予定と公表しています。",
  },
  {
    q: "プロジェクトマネージャーは何歳くらいの人が多いですか？",
    a: "職種全体の年齢構成を示す公的な統計は、当サイトでは確認できていません。参考として、IPAのプロジェクトマネージャ試験では、令和7年度秋期の受験者の平均年齢が40.6歳、合格者の平均年齢が37.7歳でした。試験の受験者に限った数値のため、職種全体の実態とは異なる可能性があります。",
  },
];

const examRows = [
  { year: "令和4年度秋期（2022年）", applicants: "11,745人", examinees: "7,382人", passers: "1,042人", rate: "14.1％", age: "38.0歳" },
  { year: "令和5年度秋期（2023年）", applicants: "12,197人", examinees: "7,888人", passers: "1,066人", rate: "13.5％", age: "38.1歳" },
  { year: "令和6年度秋期（2024年）", applicants: "13,481人", examinees: "8,627人", passers: "1,195人", rate: "13.9％", age: "37.9歳" },
  { year: "令和7年度秋期（2025年）", applicants: "13,540人", examinees: "8,511人", passers: "1,219人", rate: "14.3％", age: "37.7歳" },
];

const pmpRows = [
  { year: "2022年末", japan: "42,463人", world: "1,284,829人" },
  { year: "2023年末", japan: "45,058人", world: "1,448,971人" },
  { year: "2024年末", japan: "48,404人", world: "1,570,438人" },
  { year: "2025年末", japan: "53,132人", world: "1,657,410人" },
];

export default function ProjectManagerKnowledgePage() {
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
          { name: "プロジェクトマネージャーとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プロジェクトマネージャーとは｜役割・PL/SE/PMOとの違い・PM試験合格率の推移
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】プロジェクトマネージャーとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>プロジェクトマネージャー（PM）とは、プロジェクトの責任者として計画を作成し、必要な要員や資源を確保し、予算・要求品質などに責任を持ってプロジェクト全体を管理する職種です（総務省「日本標準職業分類」の説明による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・IPAは、計画の作成、チームの編成、リスクへの対応、ステークホルダとのコミュニケーション、計画と実績の評価をPMの役割として挙げています</li>
              <li>・PLやSEとの違いは「プロジェクト全体の計画・予算・品質に責任を持つかどうか」です。PLの意味は企業によって異なります</li>
              <li>・IPAのプロジェクトマネージャ試験の合格率は、令和4〜7年度の秋期で13.5〜14.3％でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、総務省の日本標準職業分類とIPA（情報処理推進機構）のプロジェクトマネージャ試験の「対象者像」「業務と役割」をもとに、プロジェクトマネージャーとはどのような職種かをご説明します。あわせて、IPAの統計資料とPMI日本支部の年次報告書から、試験の合格率とPMP資格者数の推移を当サイトで1つの表にまとめました。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["総務省「日本標準職業分類」", "IPA プロジェクトマネージャ試験", "IPA 情報処理技術者試験 統計情報（推移表・平均年齢）", "PMI日本支部 2025年度アニュアルレポート"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロジェクトマネージャーの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省の日本標準職業分類では、IT分野のプロジェクトマネージャーは小分類103「情報処理プロジェクトマネージャ」に当たり、「システム開発プロジェクトの責任者としてプロジェクト計画を作成し、必要となる要員や資源を確保し、予算、要求品質等について責任を持ち、プロジェクト全体を管理する仕事に従事するもの」と説明されています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            この小分類は、大分類B「専門的・技術的職業従事者」の中分類10「情報処理・通信技術者」に含まれます。課長・部長などの「管理的職業従事者」（大分類A）とは別の分類であり、PMは役職ではなく、情報処理の専門知識をもとにプロジェクトを管理する技術的な職業として扱われています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            IPAのプロジェクトマネージャ試験では、対象者像を「高度IT人材として確立した専門分野をもち、組織の戦略の実現に寄与することを目的とするシステム開発プロジェクトにおいて、プロジェクトの目的の実現に向けて責任をもってプロジェクトマネジメント業務を単独で又はチームの一員として担う者」としています。
          </p>
          <p className="text-xs text-slate-500 mt-2">※ 建設・製造などIT以外の分野にもプロジェクトマネージャーという呼び方はありますが、本記事ではIT分野のPMについてご説明します。</p>
        </section>

        <section id="role" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロジェクトマネージャーの業務と役割</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAは、プロジェクトマネージャ試験の「業務と役割」として、プロジェクトの目的を実現するために次の役割を主導的に果たし、下位者を指導することを挙げています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">IPAの記載（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">計画</td><td className="border border-slate-200 px-3 py-2">個別システム化構想・計画にもとづいてプロジェクト計画を作成し、プロジェクトの目標とライフサイクルを設定する。必要に応じて構想・計画の策定も支援する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">チームの編成</td><td className="border border-slate-200 px-3 py-2">必要なメンバーや資源を確保してチームを編成し、目的を共有する。メンバーの成長とチームの自律的なマネジメントに向けた改善を進める</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">問題・リスクへの対応</td><td className="border border-slate-200 px-3 py-2">問題に対策を講じ、将来見込まれるリスクや不確かさに早期に対応して、変化に適応する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ステークホルダとの関係</td><td className="border border-slate-200 px-3 py-2">ステークホルダと適切にコミュニケーションを取り、ニーズを満たすとともに共創関係を構築・維持する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">評価と改善</td><td className="border border-slate-200 px-3 py-2">フェーズの区切りや終了時に計画と実績を分析・評価し、その後のマネジメントやほかのプロジェクトに生かす</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「プロジェクトマネージャ試験」の「2．業務と役割」。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じページの「期待する技術水準」では、ライフサイクルと開発アプローチの選択、マネジメントプロセスの修整（テーラリング）ができることも求められています。ウォーターフォール型かアジャイル型かを含め、プロジェクトに合った進め方を選ぶことがPMの仕事に含まれるという考え方です。
          </p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PL・SE・PMOとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本標準職業分類の中分類10「情報処理・通信技術者」の説明をもとに、PMと近い職種の違いを当サイトで整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種・役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">日本標準職業分類での扱い</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な責任（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">プロジェクトマネージャー（PM）</td><td className="border border-slate-200 px-3 py-2">103 情報処理プロジェクトマネージャ</td><td className="border border-slate-200 px-3 py-2">プロジェクトの責任者として計画を作り、要員・資源を確保し、予算・要求品質に責任を持つ</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">システムエンジニア（設計）</td><td className="border border-slate-200 px-3 py-2">102 システム設計者（システムアーキテクトなど）</td><td className="border border-slate-200 px-3 py-2">ハードウェア・ソフトウェアを含むシステム全体の構成を企画する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">プログラマー・開発担当</td><td className="border border-slate-200 px-3 py-2">104 ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2">ソフトウェアの仕様決定・設計・プログラミングを行う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント</td><td className="border border-slate-200 px-3 py-2">101 システムコンサルタント</td><td className="border border-slate-200 px-3 py-2">顧客の業務を分析し、情報システムを策定して提言する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">プロジェクトリーダー（PL）</td><td className="border border-slate-200 px-3 py-2">独立した項目なし</td><td className="border border-slate-200 px-3 py-2">企業により異なる。開発チームや担当工程の取りまとめを指すことが多い</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">PMO</td><td className="border border-slate-200 px-3 py-2">独立した項目なし（部門・仕組みの名称）</td><td className="border border-slate-200 px-3 py-2">組織内の複数のプロジェクトを横断的に支援・管理する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「日本標準職業分類」中分類10。PL・PMOの欄は公的な定義がないため、当サイトの整理です。PMOの定義は<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link>をご覧ください。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            日本標準職業分類では、システム設計者の説明に「個々のソフトウェアの開発の仕事に従事するもの」は別の小分類に分類されると書かれており、PM・設計・開発は担う範囲で区別されています。実際の職場では、1人がPMと設計を兼ねることもあるため、肩書きよりも「予算や要員計画に責任を持つか」で役割を見分けると分かりやすくなります。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PM試験とPMP資格者数の推移（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの統計情報（推移表・平均年齢）から、プロジェクトマネージャ試験の直近4回の数値を当サイトで抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">実施回</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">応募者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">受験者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格者の平均年齢</th>
                </tr>
              </thead>
              <tbody>
                {examRows.map((r) => (
                  <tr key={r.year}>
                    <td className="border border-slate-200 px-3 py-2">{r.year}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.applicants}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.examinees}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.passers}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「推移表」（01_suiihyo_r07.xlsx、秋期 全国）および「平均年齢」（heikin_nenrei.pdf）。合格率は合格者数÷受験者数でIPAが算出した値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            応募者数は令和4年度秋期の11,745人から令和7年度秋期の13,540人へ約15％増えた一方、合格率は13.5〜14.3％の範囲でほぼ横ばいです（当サイト算出）。合格者の平均年齢は4回とも37〜38歳台で、受験者の平均年齢（令和7年度秋期は40.6歳）より低くなっています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            国際資格のPMP（Project Management Professional）については、PMI日本支部の年次報告書に各年12月末時点の資格保有者数が掲載されています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">日本国内のPMP資格保有者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全世界のPMP資格保有者</th>
                </tr>
              </thead>
              <tbody>
                {pmpRows.map((r) => (
                  <tr key={r.year}>
                    <td className="border border-slate-200 px-3 py-2">{r.year}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.japan}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.world}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PMI日本支部「2025年度アニュアルレポート」〔参考〕PMI関連資格保有者数の推移（各年12月末現在）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            日本国内のPMP資格保有者は2022年末から2025年末の3年間で約1.25倍（10,669人増）になりました（当サイト算出）。同報告書では、2025年にPMBOKガイドが改定され第8版が発行されたことも紹介されています。資格者数の増加は資格への関心の高まりを示すものですが、PMとして働く人の数そのものを示すものではない点にご注意ください。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・年収・資格の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はPMという職種の定義に絞ってご説明しました。転職や資格の具体的な情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>転職市場と求められる経験：<Link href="/skill/pm/" className="text-blue-600 hover:underline">プロジェクトマネージャーの転職市場ガイド</Link></li>
            <li>SEからPMへの進み方：<Link href="/career/se-to-pm/" className="text-blue-600 hover:underline">SEからPMへのキャリアチェンジ</Link></li>
            <li>年収の目安：<Link href="/salary/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャーの年収</Link></li>
            <li>国家試験：<Link href="/cert/project-manager/" className="text-blue-600 hover:underline">IPAプロジェクトマネージャ試験</Link></li>
            <li>国際資格：<Link href="/cert/pmp/" className="text-blue-600 hover:underline">PMP資格</Link></li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">※ IPAは「Society 5.0時代のデジタル人材育成に関する検討会 報告書」（2025年5月）を踏まえ、2027年度から新試験制度に移行する予定と公表しています。2026年度のプロジェクトマネージャ試験はCBT方式により後期に実施されます。</p>
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
            <li>総務省「日本標準職業分類」（中分類10 情報処理・通信技術者／小分類101〜104）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>IPA プロジェクトマネージャ試験（対象者像・業務と役割・期待する技術水準・実施方式）：https://www.ipa.go.jp/shiken/kubun/pm.html</li>
            <li>IPA 試験制度の見直しについて：https://www.ipa.go.jp/shiken/minaoshi/index.html</li>
            <li>IPA 統計情報 推移表（令和7年度）：https://www.ipa.go.jp/shiken/reports/h5f8pg00000037bj-att/01_suiihyo_r07.xlsx</li>
            <li>IPA 統計情報 平均年齢：https://www.ipa.go.jp/shiken/reports/hjuojm000000lkls-att/heikin_nenrei.pdf</li>
            <li>PMI日本支部「2025年度アニュアルレポート」：https://www.pmi-japan.org/wp-content/uploads/2026/03/PMIJ_annual_REP2025_single-page.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "PMOとは", href: "/knowledge/pmo/" },
              { name: "プロジェクトマネージャーの転職市場ガイド", href: "/skill/pm/" },
              { name: "SEからPMへのキャリアチェンジ", href: "/career/se-to-pm/" },
              { name: "IPAプロジェクトマネージャ試験", href: "/cert/project-manager/" },
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
