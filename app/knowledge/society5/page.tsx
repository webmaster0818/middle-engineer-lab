import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Society 5.0とは｜内閣府の定義と、第5期〜第7期基本計画での位置づけ・研究開発投資の目標と実績【2026年】";
const DESCRIPTION =
  "Society 5.0とは、サイバー空間とフィジカル空間を高度に融合させたシステムにより、経済発展と社会的課題の解決を両立する人間中心の社会です。内閣府の定義、第5期・第6期・第7期の科学技術・イノベーション基本計画での位置づけ、研究開発投資の目標と実績を一次情報で整理します。";
const URL = "/knowledge/society5/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Society 5.0の定義" },
  { id: "plans", label: "基本計画ごとの位置づけ（第5期〜第7期）" },
  { id: "investment", label: "研究開発投資の目標と実績" },
  { id: "policy", label: "Society 5.0に関連する主な政策" },
  { id: "career", label: "転職・キャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Society 5.0とは簡単に言うと何ですか？",
    a: "日本が目指す未来社会の姿として、政府の科学技術基本計画で示された概念です。狩猟社会（1.0）・農耕社会（2.0）・工業社会（3.0）・情報社会（4.0）に続く5番目の社会で、内閣府は「サイバー空間とフィジカル空間を高度に融合させたシステムにより、経済発展と社会的課題の解決を両立する人間中心の社会」と説明しています。",
  },
  {
    q: "Society 5.0はいつ誰が提唱したのですか？",
    a: "2016年1月22日に閣議決定された「第5期科学技術基本計画」で初めて提唱されました。",
  },
  {
    q: "Society 5.0は今も政府の目標ですか？",
    a: "2026年3月27日に閣議決定された第7期科学技術・イノベーション基本計画では、目指すべき国の姿を「従来の Society 5.0 を念頭に置きつつ、過去5年間の変化も踏まえ」て定義し直しています。当サイトで本文PDFのテキストを数えたところ、「Society 5.0」の記載は第6期の本文で72か所、第7期の本文で1か所でした。概念は引き継がれていますが、第7期では「強い経済」や「豊かで安全・安心な社会」といった表現が中心になっています。",
  },
  {
    q: "Society 5.0とDXの違いは何ですか？",
    a: "Society 5.0は国が目指す社会全体の姿を示す概念で、DX（デジタルトランスフォーメーション）は企業や組織がデジタル技術を使って事業や組織を変革する取組を指す言葉として使われています。DXの定義は当サイトの「DXとは」で、経済産業省の資料にもとづいて整理しています。",
  },
  {
    q: "Society 5.0の実現に向けた研究開発投資の目標はいくらですか？",
    a: "第6期基本計画（2021〜2025年度）では、政府の研究開発投資30兆円、官民合わせて120兆円が目標とされました。第7期基本計画では、実績は政府43.6兆円（基金を含む）、官民は2024年度までの合計で86.3兆円と整理され、第7期の目標は政府60兆円、官民180兆円とされています。",
  },
];

export default function Society5Page() {
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
          { name: "Society 5.0とは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Society 5.0とは｜内閣府の定義と、第5期〜第7期基本計画での位置づけ・研究開発投資の目標と実績
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公的資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Society 5.0とは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Society 5.0とは、サイバー空間とフィジカル空間を高度に融合させたシステムにより、経済発展と社会的課題の解決を両立する人間中心の社会です。2016年の第5期科学技術基本計画で、日本が目指す未来社会の姿として初めて提唱されました。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・狩猟社会（1.0）、農耕社会（2.0）、工業社会（3.0）、情報社会（4.0）に続く5番目の社会と位置づけられています</li>
              <li>・第6期基本計画では、官民の研究開発投資120兆円の目標に対し、2024年度までの合計は86.3兆円でした</li>
              <li>・2026年3月の第7期基本計画は「従来の Society 5.0 を念頭に置きつつ」目指す社会を定義し直しています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、内閣府のSociety 5.0の解説ページと、第5期・第6期・第7期の基本計画（本文・概要）をもとに、Society 5.0の定義と政策上の位置づけを整理します。各計画の本文での「Society 5.0」の記載数は、当サイトが本文PDFのテキストを数えた値です。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["内閣府「Society 5.0」", "内閣府「第6期科学技術・イノベーション基本計画」本文・概要", "内閣府「第7期科学技術・イノベーション基本計画」本文・概要"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Society 5.0の定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            内閣府はSociety 5.0を「我が国が目指すべき未来社会の姿であり、狩猟社会（Society 1.0）、農耕社会（Society 2.0）、工業社会（Society 3.0）、情報社会（Society 4.0）に続く新たな社会」と説明しています。第5期科学技術基本計画（平成28年1月22日閣議決定）で、「サイバー空間とフィジカル空間を高度に融合させたシステムにより、経済発展と社会的課題の解決を両立する人間中心の社会」として初めて提唱されました。
          </p>
          <p className="text-slate-600 leading-relaxed">
            実現の鍵として、内閣府は「サイバー空間とフィジカル空間の融合」という手段と、「人間中心の社会」という価値観の2つを挙げています。サイバー空間に社会のあらゆる要素をデジタルツインとして構築し、制度やビジネス、都市・地域の設計を見直したうえでフィジカル空間に反映していく、という考え方です。
          </p>
        </section>

        <section id="plans" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本計画ごとの位置づけ（第5期〜第7期）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">計画</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">閣議決定</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Society 5.0の扱い</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">本文での記載数（当サイト集計）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">第5期科学技術基本計画</td><td className="border border-slate-200 px-3 py-2">2016年1月22日</td><td className="border border-slate-200 px-3 py-2">初めて提唱</td><td className="border border-slate-200 px-3 py-2 text-right">—</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第6期科学技術・イノベーション基本計画</td><td className="border border-slate-200 px-3 py-2">2021年3月26日</td><td className="border border-slate-200 px-3 py-2">未来社会像を「持続可能性と強靭性を備え、国民の安全と安心を確保するとともに、一人ひとりが多様な幸せ（well-being）を実現できる社会」と表現</td><td className="border border-slate-200 px-3 py-2 text-right">72か所</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">第7期科学技術・イノベーション基本計画</td><td className="border border-slate-200 px-3 py-2">2026年3月27日</td><td className="border border-slate-200 px-3 py-2">「従来の Society 5.0 を念頭に置きつつ」、「強い経済」と「豊かで安全・安心な社会」などを目指すべき未来社会として定義</td><td className="border border-slate-200 px-3 py-2 text-right">1か所</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：内閣府「Society 5.0」、第6期・第7期基本計画の本文。記載数は、内閣府が公開する本文PDFをテキスト化し、改行と空白を除いて「Society5.0」の出現回数を数えた当サイトの集計です（第5期は未集計）。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            第7期基本計画は、知の基盤としての「科学の再興」、技術領域の戦略的重点化、科学技術と国家安全保障との連携など6つの柱を掲げています。Society 5.0という言葉の登場回数は大きく減りましたが、内閣府のSociety 5.0の解説ページは引き続き公開されています。
          </p>
        </section>

        <section id="investment" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">研究開発投資の目標と実績</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">第6期の目標（5年間）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">第6期の実績</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">第7期の目標</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">政府の研究開発投資</td><td className="border border-slate-200 px-3 py-2 text-right">30兆円</td><td className="border border-slate-200 px-3 py-2 text-right">43.6兆円（予算措置・基金を含む）</td><td className="border border-slate-200 px-3 py-2 text-right">60兆円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">官民合わせた研究開発投資</td><td className="border border-slate-200 px-3 py-2 text-right">120兆円</td><td className="border border-slate-200 px-3 py-2 text-right">86.3兆円（2021〜2024年度の合計）</td><td className="border border-slate-200 px-3 py-2 text-right">180兆円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：第6期基本計画 概要、第7期基本計画 本文・概要。第6期の政府実績には、基金として計上され第7期の期間中に執行されるものを含みます。第7期の政府目標60兆円は、従前の考え方にもとづく45兆円に多様な財源や政策ツールを加えた目標とされています。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            第7期基本計画の本文では、官民の研究開発投資は第6期の期間中に4年連続で過去最高を更新したものの、5年間で120兆円という目標は大幅に下回っていると記載されています。また、概要では2023年の官民研究開発投資額を20.4兆円とし、「米中の1/4以下」と説明しています。
          </p>
        </section>

        <section id="policy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Society 5.0に関連する主な政策</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">政策</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内閣府の説明の要旨</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">戦略的イノベーション創造プログラム（SIP）</td><td className="border border-slate-200 px-3 py-2">府省連携が不可欠な研究開発を、産学官連携により基礎研究から社会実装まで一気通貫で推進する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">研究開発とSociety 5.0との橋渡しプログラム（BRIDGE）</td><td className="border border-slate-200 px-3 py-2">SIPや各省庁の研究開発の成果を、社会課題の解決や新事業の創出に橋渡しする</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ムーンショット型研究開発制度</td><td className="border border-slate-200 px-3 py-2">困難だが実現すれば大きなインパクトが期待される社会課題に、野心的な目標を掲げて挑戦する。複数の目標がSociety 5.0を背景に設定されている</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">スマートシティ</td><td className="border border-slate-200 px-3 py-2">Society 5.0の先行的な実現の場として、関係府省が各都市・地域の取組を支援する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">総合知・教育・人材育成</td><td className="border border-slate-200 px-3 py-2">人文・社会科学を含む「総合知」の活用と、探究的な活動を通じた人材育成を進める</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：内閣府「Society 5.0」（2026年11月24日確認）を当サイトで要約。</p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            Society 5.0は、企業の採用ページや官公庁・自治体の案件の説明で使われることがある言葉です。IoT・AI・データ活用など、サイバー空間とフィジカル空間をつなぐ技術に関わる仕事を考える際の背景知識として役立ちます。関連する用語は<Link href="/knowledge/dx/" className="text-blue-600 hover:underline">DXとは</Link>・<Link href="/knowledge/iot/" className="text-blue-600 hover:underline">IoTとは</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月24日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>内閣府「Society 5.0」：https://www8.cao.go.jp/cstp/society5_0/</li>
            <li>内閣府「第6期科学技術・イノベーション基本計画」：https://www8.cao.go.jp/cstp/kihonkeikaku/index6.html（本文 6honbun.pdf・概要 6gaiyo.pdf）</li>
            <li>内閣府「第7期科学技術・イノベーション基本計画」：https://www8.cao.go.jp/cstp/kihonkeikaku/index7.html（本文 7honbun.pdf・概要 7gaiyo.pdf）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "DXとは", href: "/knowledge/dx/" },
              { name: "IoTとは", href: "/knowledge/iot/" },
              { name: "アジャイル開発とは", href: "/knowledge/agile/" },
              { name: "生成AI時代に生き残るエンジニアのスキル", href: "/knowledge/generative-ai-era/" },
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
