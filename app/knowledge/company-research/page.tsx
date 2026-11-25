import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "企業分析のやり方｜有価証券報告書の読む場所と公的データベース5つの使い分け【転職者向け・2026年】";
const DESCRIPTION =
  "転職先の企業分析は、有価証券報告書と国の公的データベースで事実を確かめるのが確実です。開示府令の様式にもとづく有報の読む場所（2026年3月期から従業員の状況の位置が変更）、EDINET・しょくばらぼ・女性の活躍推進企業データベース・gBizINFOの使い分けを整理します。";
const URL = "/knowledge/company-research/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "steps", label: "企業分析の進め方（4ステップ）" },
  { id: "yuho", label: "有価証券報告書の読む場所" },
  { id: "employee", label: "従業員の状況で分かること" },
  { id: "database", label: "公的データベース5つの使い分け" },
  { id: "career", label: "分析結果を選考に活かすには" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "企業分析では何から調べればよいですか？",
    a: "上場企業であれば、金融庁のEDINETで有価証券報告書を開き、「事業の内容」「経営方針、経営環境及び対処すべき課題等」「事業等のリスク」「従業員の状況」の順に読むと、事業・方針・リスク・働く人の数字をひととおり確認できます。非上場企業は、しょくばらぼや女性の活躍推進企業データベースなど、企業が国のサイトに公表した職場情報が手がかりになります。",
  },
  {
    q: "有価証券報告書の「従業員の状況」はどこに載っていますか？",
    a: "決算期によって位置が異なります。2026年2月の開示府令の改正で、「従業員の状況」は「第1 企業の概況」から「第4 提出会社の状況」の「5 従業員の状況等」に移り、2026年3月31日以後に終了する事業年度の報告書から適用されています。それより前の事業年度の報告書では「第1 企業の概況」の5番目にあります。",
  },
  {
    q: "有価証券報告書の平均年間給与はエンジニアの年収と同じですか？",
    a: "同じではありません。開示府令の記載上の注意では、提出会社の従業員全体の平均年齢・平均勤続年数・平均年間給与（賞与を含む）を記載することとされており、職種別の値ではありません。持株会社の場合は持株会社自体の従業員の値ですが、別に最大人員会社の値の記載も求められています。",
  },
  {
    q: "非上場企業はどうやって調べればよいですか？",
    a: "厚生労働省の「しょくばらぼ」で残業時間や有給休暇の取得率などの職場情報を、「女性の活躍推進企業データベース」で女性管理職比率や男女の賃金の差異などを確認できます。経済産業省の「gBizINFO」では、法人番号にもとづいて補助金・調達・届出認定などの情報を確認できます。いずれも企業が公表した範囲の情報で、掲載がない企業もあります。",
  },
];

const yuhoRows = [
  { section: "第1【企業の概況】1 主要な経営指標等の推移", check: "売上高・利益・従業員数の5年分の推移", point: "伸びているか、利益が安定しているか" },
  { section: "第1【企業の概況】3 事業の内容", check: "事業の種類と、グループ会社の役割", point: "応募先がグループのどこに当たるか" },
  { section: "第2【事業の状況】1 経営方針、経営環境及び対処すべき課題等", check: "会社が重視している方針と課題", point: "自分の経験がどの課題に役立つか" },
  { section: "第2【事業の状況】2 サステナビリティに関する考え方及び取組", check: "人的資本に関する方針と指標・目標", point: "人材育成・社内環境整備の方針と数値目標" },
  { section: "第2【事業の状況】3 事業等のリスク", check: "経営者が認識している主要なリスク", point: "システム障害・情報セキュリティ・人材確保がどう書かれているか" },
  { section: "第2【事業の状況】6 研究開発活動", check: "研究開発の内容と費用", point: "技術への投資の大きさ" },
  { section: "第4【提出会社の状況】5 従業員の状況等（2026年3月期以後）", check: "人材戦略、給与の決定方針、従業員数・平均年齢・平均勤続年数・平均年間給与", point: "次の節で詳しくご説明します" },
];

const dbRows = [
  { name: "EDINET", owner: "金融庁", target: "有価証券報告書などを提出する企業", data: "有価証券報告書・半期報告書・臨時報告書・大量保有報告書など", note: "有価証券報告書は10年分を閲覧可能。APIの利用にはAPIキーが必要" },
  { name: "しょくばらぼ（職場情報総合サイト）", owner: "厚生労働省", target: "職場情報を公表した企業", data: "残業時間・有給休暇の取得率・平均年齢・採用状況・女性の活躍・両立支援・能力開発など", note: "「離職率」という項目はなく、新卒者等や中途採用者の定着状況で確認" },
  { name: "女性の活躍推進企業データベース", owner: "厚生労働省", target: "女性活躍推進法にもとづき情報を公表した企業", data: "女性管理職比率・男女の賃金の差異・男女別の育児休業取得率・平均残業時間・有給休暇の取得率など", note: "企業が自ら公表したデータをオープンデータとして公開" },
  { name: "法人番号公表サイト", owner: "国税庁", target: "法人番号を指定された法人", data: "商号・所在地・法人番号と、その変更履歴", note: "社名変更や本店移転の履歴の確認に使えます" },
  { name: "gBizINFO", owner: "経済産業省", target: "政府が保有する法人データ", data: "財務・決算・特許・届出認定・補助金・調達・表彰・職場情報", note: "法人番号にもとづき各省庁の情報をまとめて表示" },
];

export default function CompanyResearchPage() {
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
          { name: "企業分析のやり方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          企業分析のやり方｜有価証券報告書の読む場所と公的データベース5つの使い分け
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 法令・公的資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】転職者の企業分析のやり方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>上場企業は有価証券報告書（EDINETで無料閲覧）で、事業・経営方針・リスク・従業員の数字を確認します。非上場企業は、厚生労働省のしょくばらぼや女性の活躍推進企業データベースなど、企業が国のサイトに公表した職場情報で確認します。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・東京証券取引所の上場会社は2026年10月末時点で3,884社です（日本取引所グループ）</li>
              <li>・2026年3月31日以後に終了する事業年度の有価証券報告書から、「従業員の状況」は「第4 提出会社の状況」に移りました</li>
              <li>・有価証券報告書の平均年間給与は全従業員の平均で、エンジニア職だけの値ではありません</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、有価証券報告書の様式を定める「企業内容等の開示に関する内閣府令」（開示府令）と金融庁の公表資料、EDINETの概要書、厚生労働省・国税庁・経済産業省のデータベースの説明をもとに、転職するエンジニアが応募先を調べる手順を整理します。口コミサイトの評判とは別に、企業自身が公表した事実を確かめる方法です。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["企業内容等の開示に関する内閣府令 第二号様式・第三号様式（e-Gov法令検索）", "金融庁「企業内容等の開示に関する内閣府令」等の改正の公表（2023年1月31日・2026年2月20日）", "金融庁「EDINET概要書」「EDINET API仕様書」", "厚生労働省「しょくばらぼ」「女性の活躍推進企業データベース」", "国税庁「法人番号公表サイト」、経済産業省「gBizINFO」", "日本取引所グループ「上場会社数・上場株式数」"]}
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

        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業分析の進め方（4ステップ）</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600 leading-relaxed">
            <li><strong>法人を特定する</strong>：国税庁の法人番号公表サイトで、正式な商号・所在地・法人番号を確認します。グループ会社が多い企業では、応募先がどの法人かを最初に確かめておくと、以降の調査で取り違えを防げます。</li>
            <li><strong>上場か非上場かで資料を選ぶ</strong>：上場企業や、社債などを発行して有価証券報告書を提出している企業はEDINETで報告書を開きます。提出していない企業は、次の節の公的データベースを使います。</li>
            <li><strong>事業・方針・リスクを読む</strong>：有価証券報告書の「事業の内容」「経営方針、経営環境及び対処すべき課題等」「事業等のリスク」で、会社が何で稼ぎ、何を課題と考えているかを確認します。</li>
            <li><strong>働く人の数字を確かめる</strong>：「従業員の状況」の平均年齢・平均勤続年数・平均年間給与と、しょくばらぼ等の残業時間・有給休暇の取得率を確認し、求人票や面接で聞いた内容と照らし合わせます。</li>
          </ol>
          <p className="text-xs text-slate-500 mt-3">手順の整理は当サイトによるものです。</p>
        </section>

        <section id="yuho" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">有価証券報告書の読む場所</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            有価証券報告書の見出しは、開示府令の第三号様式で決められています。転職者の企業分析で特に読みたい箇所を、現行の様式の見出しどおりに抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">見出し（第三号様式）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">分かること</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">転職者が見るポイント</th>
                </tr>
              </thead>
              <tbody>
                {yuhoRows.map((r) => (
                  <tr key={r.section}>
                    <td className="border border-slate-200 px-3 py-2">{r.section}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.check}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：企業内容等の開示に関する内閣府令 第三号様式（e-Gov法令検索・令和8年10月5日施行版）。「分かること」「転職者が見るポイント」は当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            第三号様式の記載上の注意では、「経営方針」から「経営者による分析」までと「従業員の状況等」に将来に関する事項を書く場合、将来に関する事項であることや判断の基準日、前提を記載することとされています。計画や目標の数字を読むときは、あわせて前提も確認すると、実現の見込みを判断しやすくなります。
          </p>
        </section>

        <section id="employee" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">従業員の状況で分かること</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            開示府令の第二号様式の記載上の注意（第三号様式はこれに準じて記載）で、「従業員の状況」に記載が求められている主な項目と、記載が始まった時期を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">適用</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">従業員数</td><td className="border border-slate-200 px-3 py-2">連結会社の従業員数（セグメント別）と提出会社の従業員数。臨時従業員は外書き</td><td className="border border-slate-200 px-3 py-2">従来から</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">平均年齢・平均勤続年数・平均年間給与</td><td className="border border-slate-200 px-3 py-2">提出会社の従業員の平均。平均年間給与は賞与を含む。持株会社は最大人員会社の値も記載</td><td className="border border-slate-200 px-3 py-2">従来から</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">女性管理職比率・男性の育児休業取得率・男女の賃金の差異</td><td className="border border-slate-200 px-3 py-2">女性活躍推進法などにもとづき公表している場合に記載</td><td className="border border-slate-200 px-3 py-2">2023年3月31日以後に終了する事業年度から</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">人材戦略に関する基本方針等</td><td className="border border-slate-200 px-3 py-2">経営方針・経営戦略に関連付けた人材戦略、従業員の給与等の決定に関する方針</td><td className="border border-slate-200 px-3 py-2">2026年3月31日以後に終了する事業年度から</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">平均年間給与の対前事業年度増減率</td><td className="border border-slate-200 px-3 py-2">提出会社の従業員の平均給与が前年からどれだけ増減したか</td><td className="border border-slate-200 px-3 py-2">2026年3月31日以後に終了する事業年度から</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：企業内容等の開示に関する内閣府令 第二号様式 記載上の注意（58－2）（58－3）・第三号様式 記載上の注意（39－3）、金融庁「「企業内容等の開示に関する内閣府令」等の一部改正（案）に対するパブリックコメントの結果等の公表について」（2023年1月31日）、同「「企業内容等の開示に関する内閣府令及び特定有価証券の内容等の開示に関する内閣府令の一部を改正する内閣府令」等の公布及びパブリックコメントの結果について」（2026年2月20日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            2026年3月期以後の報告書では、平均年間給与の前年からの増減率が載るため、賃上げの実績を数字で確認できます。平均年間給与は全従業員の平均で、平均年齢や職種構成の影響を受けるため、同じ企業の数年分を並べて見ることをおすすめします。当サイトでは、有価証券報告書の値を決算期つきで<Link href="/salary/company-ranking/" className="text-blue-600 hover:underline">IT企業の平均年収ランキング</Link>にまとめています。
          </p>
        </section>

        <section id="database" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公的データベース5つの使い分け</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            企業分析に使える国のデータベースを、各サイトの公式の説明にもとづいて当サイトが比較しました。いずれも無料で利用できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">データベース</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">運営</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">対象</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な掲載情報</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">補足</th>
                </tr>
              </thead>
              <tbody>
                {dbRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.owner}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.target}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.data}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：金融庁「EDINET概要書」「EDINET API仕様書（Version 2）」、厚生労働省「しょくばらぼ」サイト説明・出典一覧、厚生労働省「女性の活躍推進企業データベース」、国税庁「法人番号公表サイト」、経済産業省「gBizINFO」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            厚生労働省は、女性活躍推進法にもとづく情報を有価証券報告書だけで公表しても同法の義務を果たしたことにはならず、女性の活躍推進企業データベースへの掲載が最も適切だと案内しています。そのため、上場企業でも有価証券報告書とデータベースの両方に情報が載っていることがあり、残業時間や有給休暇の取得率はデータベースで補えます。なお、若者雇用促進法にもとづく職場情報（青少年雇用情報）の提供は新卒者等の募集が対象で、中途採用は対象外です。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">分析結果を選考に活かすには</h2>
          <p className="text-slate-600 leading-relaxed">
            有価証券報告書の「対処すべき課題」や「事業等のリスク」に書かれた内容と、自分の経験を結びつけると、志望動機に具体性が出ます。また、平均残業時間や平均勤続年数が求人票の説明と大きく異なる場合は、面接の逆質問で配属部署の実態を確認するのが実務的です。求人票の読み方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>、逆質問は<Link href="/knowledge/reverse-questions/" className="text-blue-600 hover:underline">面接の逆質問</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>e-Gov法令検索「企業内容等の開示に関する内閣府令」（昭和48年大蔵省令第5号）：https://laws.e-gov.go.jp/law/348M50000040005</li>
            <li>金融庁「「企業内容等の開示に関する内閣府令」等の一部改正（案）に対するパブリックコメントの結果等の公表について」（2023年1月31日）：https://www.fsa.go.jp/news/r4/sonota/20230131/20230131.html</li>
            <li>金融庁「「企業内容等の開示に関する内閣府令及び特定有価証券の内容等の開示に関する内閣府令の一部を改正する内閣府令」等の公布及びパブリックコメントの結果について」（2026年2月20日）：https://www.fsa.go.jp/news/r7/shouken/20260220/20260220.html</li>
            <li>金融庁「EDINET」：https://disclosure2.edinet-fsa.go.jp/</li>
            <li>金融庁「EDINET 操作ガイド・概要書・API仕様書」：https://disclosure2dl.edinet-fsa.go.jp/guide/static/disclosure/WZEK0110.html</li>
            <li>厚生労働省「しょくばらぼ」：https://shokuba.mhlw.go.jp/</li>
            <li>厚生労働省「女性の活躍推進企業データベース」：https://positive-ryouritsu.mhlw.go.jp/positivedb/index.html</li>
            <li>厚生労働省「女性活躍推進法特集ページ」：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000091025.html</li>
            <li>厚生労働省「若者雇用促進法」：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000097679.html</li>
            <li>国税庁「法人番号公表サイト」：https://www.houjin-bangou.nta.go.jp/</li>
            <li>経済産業省「gBizINFO」：https://info.gbiz.go.jp/</li>
            <li>日本取引所グループ「上場会社数・上場株式数」：https://www.jpx.co.jp/listing/co/index.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "求人票の見方", href: "/knowledge/job-posting/" },
              { name: "IT企業の平均年収ランキング", href: "/salary/company-ranking/" },
              { name: "面接の逆質問", href: "/knowledge/reverse-questions/" },
              { name: "企業別の転職ガイド一覧", href: "/company/" },
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
