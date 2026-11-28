import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ロジカルシンキングとは｜意味と公的なスキル定義での位置づけ・エンジニアの使い方【2026年】";
const DESCRIPTION =
  "ロジカルシンキング（論理的思考）を、経済産業省の社会人基礎力、IPAのデジタルスキル標準と情報処理技術者試験のシラバス、データサイエンティスト協会のスキルチェックリストで確認し、関連項目を当サイトで横断集計しました。エンジニア業務での使い方も掲載します。";
const URL = "/knowledge/logical-thinking/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "ロジカルシンキングの意味（公的資料での扱い）" },
  { id: "frameworks", label: "公的なスキル定義での位置づけ" },
  { id: "cross", label: "4つの資料の横断表（当サイト集計）" },
  { id: "exam", label: "情報処理技術者試験での扱い（当サイト集計）" },
  { id: "engineer", label: "エンジニアの業務への当てはめ（当サイトの作例）" },
  { id: "related", label: "上流工程・面接・職種の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "ロジカルシンキングとは簡単に言うと何ですか？",
    a: "一般に「論理的思考」と訳され、物事を筋道立てて考え、結論と根拠を説明できるようにする考え方を指します。当サイトが確認した公的資料には「ロジカルシンキング」そのものの定義はありませんでした。本記事では、データサイエンティスト協会のスキルチェックリストver.6の「論理的思考」（MECE・構造化能力・言語化能力）と、IPAのデジタルスキル標準ver.2.0の「批判的思考」の定義を手がかりに、「情報を鵜呑みにせずに評価し、抜け漏れや重複なく構造化し、意味合いを言葉で説明する考え方」と整理しています（当サイトの整理）。",
  },
  {
    q: "ロジカルシンキングに公的な定義はありますか？",
    a: "当サイトが確認した範囲（経済産業省の社会人基礎力、IPAのデジタルスキル標準ver.2.0、情報処理技術者試験の試験要綱とシラバス13区分）では、定義はありませんでした。基本情報技術者試験と応用情報技術者試験のシラバスでは、行動科学の「用語例」として名称が挙がっています。応用情報技術者試験の科目Bの出題範囲には「戦略立案・コンサルティングの技法に関すること」の例として記載されています。",
  },
  {
    q: "社会人基礎力ではロジカルシンキングはどこに当たりますか？",
    a: "社会人基礎力の本文には「論理」という語は使われていません（当サイトで経済産業省のページとPDFを検索）。内容が近いのは、3つの能力のうち「考え抜く力（シンキング）」で、課題発見力（現状を分析し目的や課題を明らかにする力）、計画力（課題の解決に向けたプロセスを明らかにし準備する力）、創造力（新しい価値を生み出す力）の3つの能力要素で構成されています。対応づけは当サイトによるものです。",
  },
  {
    q: "情報処理技術者試験でロジカルシンキングは出題範囲に入っていますか？",
    a: "IPAのシラバスを当サイトで検索したところ、「ロジカルシンキング」の語があったのは基本情報技術者試験（Ver.9.2）と応用情報技術者試験（Ver.7.2）の2区分で、いずれも行動科学の用語例でした。試験要綱（Ver.5.6）では、応用情報技術者試験の科目Bの出題範囲に記載があります。ITパスポート試験のシラバス（Ver.6.5）には「ロジカルシンキング」の語はありませんが、「論理的な記述」の項目と演繹推論・帰納推論の用語例があります。",
  },
  {
    q: "データサイエンティスト協会のスキルチェックリストで論理的思考は何項目ありますか？",
    a: "スキルチェックリストver.6（2025年12月公開・全845項目）では、全データプロフェッショナルに共通する「基盤」33項目のうち、スキルカテゴリ「論理的思考」が7項目です。内訳はMECEが3項目、構造化能力が2項目、言語化能力が2項目で、そのうち4項目が必須スキルに指定されています（当サイトでExcelを集計し、同じファイルの集計シートと一致することを確認）。",
  },
];

const metiRows = [
  { el: "課題発見力", def: "現状を分析し目的や課題を明らかにする力" },
  { el: "計画力", def: "課題の解決に向けたプロセスを明らかにし準備する力" },
  { el: "創造力", def: "新しい価値を生み出す力" },
];

const dsaRows = [
  { sub: "MECE", level: "★", must: "〇", text: "データや事象の重複に気づくことができる" },
  { sub: "MECE", level: "★★", must: "", text: "初見の課題やテーマに対して、検討の抜け漏れや重複をなくすことができる" },
  { sub: "MECE", level: "★★★", must: "", text: "前例のない課題やテーマであっても、他の事象からの類推などを活用し、検討の抜け漏れや重複をなくすことができる" },
  { sub: "構造化能力", level: "★", must: "〇", text: "与えられた分析課題に対し、初動として様々な情報を収集し、大まかな構造を把握することの重要性を理解している" },
  { sub: "構造化能力", level: "★★", must: "〇", text: "様々なデータや事象を、階層やグルーピングによって、適切に構造化できる" },
  { sub: "言語化能力", level: "★", must: "〇", text: "対象となる事象が通常見受けられる場合において、分析結果の意味合いを正しく言語化できる" },
  { sub: "言語化能力", level: "★★", must: "", text: "対象となる事象が通常見受けられない場合においても、分析結果の意味合いを既知の表現を組み合わせ、言語化できる" },
];

const dssRoleRows = [
  { item: "要求の分析とマネジメント", fe: "b", be: "c", sre: "c", pc: "c" },
  { item: "仮説検証・学習サイクル設計", fe: "c", be: "c", sre: "c", pc: "c" },
  { item: "ビジネスモデリングとコラボレーション（概念・情報を構造化・抽象化し、因果関係を整理する）", fe: "c", be: "d", sre: "d", pc: "d" },
  { item: "批判的思考（パーソナルスキル）", fe: "z", be: "z", sre: "z", pc: "z" },
];

const crossRows = [
  {
    src: "経済産業省「社会人基礎力」（2006年提唱）",
    where: "3つの能力のうち「考え抜く力（シンキング）」",
    count: "能力要素3（課題発見力・計画力・創造力）／全12",
    note: "「論理」の語は本文に0件",
  },
  {
    src: "IPA デジタルスキル標準 ver.2.0 共通スキルリスト",
    where: "パーソナルスキル＞コンセプチュアルスキル＞「批判的思考」",
    count: "スキル項目1／全67、学習項目「批判的思考・論理的思考」「システム思考」の2／全347",
    note: "全17ロールで重要度「z」（役割や状況に応じた実践力が必要）",
  },
  {
    src: "データサイエンティスト協会 スキルチェックリスト ver.6",
    where: "基盤＞スキルカテゴリ「論理的思考」",
    count: "7項目／基盤33・全845（必須4）",
    note: "MECE3・構造化能力2・言語化能力2",
  },
  {
    src: "IPA 情報処理技術者試験 シラバス（13区分）",
    where: "基本情報・応用情報の「行動科学」の用語例",
    count: "「ロジカルシンキング」の記載は2区分",
    note: "応用情報は試験要綱の科目B出題範囲にも記載",
  },
];

const examRows = [
  { exam: "ITパスポート試験", ver: "シラバスVer.6.5・試験要綱Ver.5.6", text: "試験要綱の期待する技術水準に「システム的な考え方や論理的な思考力（プログラミング的思考力など）」。シラバスの基礎理論に「(4) 論理的な記述：自然言語の文を，記号を用いて論理的に表現できること」（用語例：述語論理，演繹推論，帰納推論）、データサイエンスの項目に「帰納的推論の重要性，及び利点と欠点」" },
  { exam: "基本情報技術者試験", ver: "シラバスVer.9.2", text: "行動科学の用語例に「ロジカルシンキング，垂直思考，水平思考，仮説思考，ブレーンストーミング」。述語論理の項目に「演繹推論と帰納推論の違いを理解する」" },
  { exam: "応用情報技術者試験", ver: "シラバスVer.7.2・試験要綱Ver.5.6", text: "行動科学の用語例に「ロジカルシンキング，垂直思考，水平思考，仮説思考」など。試験要綱の科目Bの出題範囲に「戦略立案・コンサルティングの技法に関すること：ロジカルシンキング，プレゼンテーション技法，バランススコアカード・SWOT 分析 など」" },
  { exam: "システムアーキテクト試験", ver: "シラバスVer.5.2", text: "4-3「対象業務のシステム課題の定義」の要求される知識に「問題発見及び問題解決技法に関する知識」「仮説の構築及び検証に関する知識」" },
  { exam: "プロジェクトマネージャ試験", ver: "シラバスVer.7.1", text: "3-5「品質保証の遂行」の要求される技能に「品質要求事項の未達の原因をステークホルダに論理的に説明する能力」" },
  { exam: "ネットワークスペシャリスト試験", ver: "シラバスVer.4.1", text: "4-3「保守計画の作成」の要求される技能に「データを理解し，目的に沿って関係者に論理性をもって説明する能力」" },
  { exam: "エンベデッドシステムスペシャリスト試験", ver: "シラバスVer.5.1", text: "7-3「全体性能の予測など，実現可能性の検証とデザインレビュー」の要求される技能に「論理的に指摘する能力」「代替案を提示する能力」" },
  { exam: "システム監査技術者試験", ver: "試験要綱Ver.5.6", text: "期待する技術水準に「監査結果を監査証拠に基づいて論理的に報告書にまとめ，有益で説得力のある改善提案を行い，フォローアップを行うことができる」" },
];

const workRows = [
  {
    task: "障害の原因切り分け",
    basis: "MECE（DS協会）、批判的思考（DSS）、品質要求事項の未達の原因をステークホルダに論理的に説明する能力（PM試験シラバス）",
    how: "原因の候補をアプリケーション・データベース・ネットワーク・外部サービスのように重複なく分け、ログや監視の値で1つずつ確かめて除外します。「再起動したら直った」という報告は事実の1つとして扱い、それだけで原因と判断しないようにします。",
  },
  {
    task: "要件定義",
    basis: "課題発見力（社会人基礎力）、構造化能力（DS協会）、仮説の構築及び検証に関する知識（SA試験シラバス）",
    how: "依頼された機能をそのまま書き写すのではなく、現状の業務と困りごとを整理して「何を解決するためのシステムか」を先に文章にします。要望は目的ごとに階層化し、目的につながらない要望は確認事項として残します。",
  },
  {
    task: "設計レビュー",
    basis: "言語化能力（DS協会）、論理的に指摘する能力・代替案を提示する能力（ES試験シラバス）",
    how: "指摘は「事実（設計書のどこに何が書かれているか）→影響（何が起きうるか）→提案（代替案）」の順に書き、好みの問題と要件上の問題を分けて伝えます。",
  },
];

const incidentSample = `【障害切り分けメモの作例（当サイト作成・架空のシステム）】
事象：注文画面の応答が10秒以上かかる（9:05以降）
確認済みの事実：
  - アプリケーションサーバーのCPU使用率は平常時と同程度
  - データベースの遅いクエリのログに、9:03以降 注文テーブルへの検索が増加
  - 9:00に注文テーブルへの列追加をリリース
候補と判定：
  1. アプリケーションの処理 → CPU・エラー率が平常のため優先度低
  2. データベース        → 遅いクエリが事象の開始時刻と一致。調査を継続
  3. ネットワーク         → 他の画面は平常のため優先度低
  4. 外部サービス         → 注文画面は外部APIを呼ばないため対象外
次の確認：9:00のリリース内容と、該当クエリの実行計画`;

const reviewSample = `【設計レビュー指摘の作例（当サイト作成）】
事実：基本設計書 4.2 の注文一覧APIは、件数の上限を定めていません。
影響：注文が多い利用者の場合、1回の応答が大きくなり、応答時間の要件（2秒以内）を満たせないおそれがあります。
提案：1回あたりの件数を100件までとし、ページ送りのパラメータを追加する案をご検討ください。`;

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function LogicalThinkingKnowledgePage() {
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
          { name: "ロジカルシンキングとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ロジカルシンキングとは｜意味と公的なスキル定義での位置づけ・エンジニアの使い方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ロジカルシンキングとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>ロジカルシンキングとは、一般に「論理的思考」と訳され、物事を筋道立てて考え、結論と根拠を説明できるようにする考え方です。当サイトが確認した公的資料に用語そのものの定義はなく、本記事では公的なスキル定義の記述をもとに「情報を鵜呑みにせずに評価し、抜け漏れや重複なく構造化し、意味合いを言葉で説明する考え方」と整理しています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・データサイエンティスト協会のスキルチェックリストver.6では、全員に共通する「基盤」33項目のうち7項目が「論理的思考」（MECE・構造化能力・言語化能力）です（当サイト集計）</li>
              <li>・IPAのデジタルスキル標準ver.2.0では「批判的思考」がパーソナルスキルの1項目で、学習項目に「批判的思考・論理的思考」が挙がっています</li>
              <li>・情報処理技術者試験では、基本情報・応用情報のシラバスに用語として記載があり、上位の区分では「論理的に説明する能力」「論理的に指摘する能力」が技能として挙がっています（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「ロジカルシンキング」は研修や求人で広く使われる言葉ですが、意味の範囲は資料によって異なります。本記事では、経済産業省の社会人基礎力、IPA（独立行政法人情報処理推進機構）のデジタルスキル標準と情報処理技術者試験の試験要綱・シラバス、データサイエンティスト協会のスキルチェックリストを当サイトで取得し、論理的な思考に関わる項目がどこにどう書かれているかを横断して整理しました。あわせて、障害の原因切り分け・要件定義・設計レビューに当てはめた作例を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["経済産業省「社会人基礎力」「人生100年時代の社会人基礎力」", "IPA「デジタルスキル標準 ver.2.0」共通スキルリスト（Excel）", "IPA「試験要綱 Ver.5.6」・各試験区分のシラバス", "データサイエンティスト協会「スキルチェックリスト ver.6」（Excel）"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ロジカルシンキングの意味（公的資料での扱い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトが確認した公的資料のうち、「ロジカルシンキング」という語が出てくるのは、IPAの基本情報技術者試験・応用情報技術者試験のシラバスと、試験要綱の応用情報技術者試験の出題範囲です。いずれも用語や技法の例として名称が挙がっているだけで、意味の説明はありません。経済産業省の社会人基礎力は、ページ本文と解説PDFに「論理」という語自体が使われていませんでした。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            一方で、論理的な思考の中身を具体的な行動として書いている資料はあります。データサイエンティスト協会のスキルチェックリストver.6は「論理的思考」を、MECE（抜け漏れや重複をなくす）、構造化能力（階層やグルーピングで構造化する）、言語化能力（分析結果の意味合いを言語化する）の3つに分けています。IPAのデジタルスキル標準ver.2.0は「批判的思考」を「得られた情報を鵜呑みにせずに評価し、信頼できる情報を基に合理的なプロセスを経て思考を行うスキル」と定義し、その学習項目に「批判的思考・論理的思考」を置いています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、これらの記述を合わせて、ロジカルシンキングを「情報を鵜呑みにせずに評価し、抜け漏れや重複なく構造化し、意味合いを言葉で説明する考え方」と整理しています。これは当サイトの整理であり、公的な定義ではありません。なお、演繹推論と帰納推論は、ITパスポート試験・基本情報技術者試験・応用情報技術者試験のシラバスに用語として挙がっています（基本情報・応用情報では「演繹推論と帰納推論の違いを理解する」）。シラバスには両者の説明文がないため、本記事では定義を掲載していません。
          </p>
        </section>

        <section id="frameworks" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公的なスキル定義での位置づけ</h2>

          <h3 className="font-bold text-slate-800 mb-2">経済産業省「社会人基礎力」：考え抜く力</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            社会人基礎力は、「前に踏み出す力」「考え抜く力」「チームで働く力」の3つの能力（12の能力要素）から構成され、「職場や地域社会で多様な人々と仕事をしていくために必要な基礎的な力」として経済産業省が2006年に提唱したものです。平成29年度の研究会を経て、「人生100年時代の社会人基礎力」として新たに定義されています。ロジカルシンキングに内容が近いのは「考え抜く力（シンキング）」で、「疑問を持ち、考え抜く力」と説明され、次の3つの能力要素で構成されています（対応づけは当サイトによるものです）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>能力要素</th>
                  <th className={th}>経済産業省の説明</th>
                </tr>
              </thead>
              <tbody>
                {metiRows.map((r) => (
                  <tr key={r.el}>
                    <td className={td}>{r.el}</td>
                    <td className={td}>{r.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2 mb-8">出典：経済産業省「社会人基礎力」、同「人生100年時代の社会人基礎力」（PDF）。2026年11月28日確認。</p>

          <h3 className="font-bold text-slate-800 mb-2">IPA「デジタルスキル標準 ver.2.0」：批判的思考</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            デジタルスキル標準（DSS）は、DXリテラシー標準とDX推進スキル標準で構成されるIPAの標準です。DX推進スキル標準の共通スキルリスト（ver.2.0・Excel版）を当サイトで集計したところ、スキル項目は5カテゴリー・67項目（ビジネス変革28、データ整備・活用14、テクノロジー13、セキュリティ6、パーソナルスキル6）、学習項目は347項目でした。論理的な思考に直接関わるのは、パーソナルスキルのコンセプチュアルスキルに含まれる「批判的思考」で、学習項目は「批判的思考・論理的思考」と「システム思考」の2つです。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            パーソナルスキルの6項目は、17のロールすべてで重要度が「z（役割や状況に応じた実践力が必要）」とされ、ロールによる差はつけられていません。参考として、ソフトウェアエンジニアの類型の4ロールについて、論理的な思考と関わりの深い項目の重要度を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>スキル項目</th>
                  <th className={th}>フロントエンドエンジニア</th>
                  <th className={th}>バックエンドエンジニア</th>
                  <th className={th}>クラウドエンジニア／SRE</th>
                  <th className={th}>フィジカルコンピューティングエンジニア</th>
                </tr>
              </thead>
              <tbody>
                {dssRoleRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.fe}</td>
                    <td className={td}>{r.be}</td>
                    <td className={td}>{r.sre}</td>
                    <td className={td}>{r.pc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2 mb-8">出典：IPA「デジタルスキル標準 ver.2.0（共通スキルリストExcel版）」スキルマッピング・スキル項目一覧・学習項目一覧。重要度の凡例は、a：高い実践力と専門性が必要、b：一定の実践力と専門性が必要、c：説明可能なレベルで理解が必要、d：位置づけや関連性の理解が必要、z：役割や状況に応じた実践力が必要。項目の選定と件数の集計は当サイトによるものです。</p>

          <h3 className="font-bold text-slate-800 mb-2">データサイエンティスト協会「スキルチェックリスト ver.6」：論理的思考</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            スキルチェックリストver.6（2025年12月公開）は全845項目で、ver.6から全データプロフェッショナルの共通土台として「基盤」が新設されました。基盤33項目のうち「論理的思考」は7項目で、データ理解（10項目）、行動規範（8項目）に次いで多いカテゴリです。★は見習い、★★は独り立ち、★★★は棟梁のレベルを示し、必須スキルは「満たしていなければそのレベルをクリアできない」項目です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>サブカテゴリ</th>
                  <th className={th}>レベル</th>
                  <th className={th}>必須</th>
                  <th className={th}>チェック項目</th>
                </tr>
              </thead>
              <tbody>
                {dsaRows.map((r) => (
                  <tr key={r.text}>
                    <td className={td}>{r.sub}</td>
                    <td className={td}>{r.level}</td>
                    <td className={td}>{r.must}</td>
                    <td className={td}>{r.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：データサイエンティスト協会「データサイエンティスト スキルチェックリスト ver.6」（Excel、基盤シート・集計シート・チェックリスト説明シート）。2026年11月28日に当サイトで取得し、件数を集計しました。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            見習いレベル（★）の必須項目は、重複に気づくこと、情報を集めて大まかな構造を把握することの重要性を理解していること、通常の事象について分析結果の意味合いを言語化できることです。独り立ちレベル（★★）では、初見の課題で抜け漏れや重複をなくすことや、階層やグルーピングで構造化することが求められています。データサイエンティストのスキル全体は<Link href="/knowledge/data-scientist/" className="text-blue-600 hover:underline">データサイエンティストとは</Link>でご説明しています。
          </p>
        </section>

        <section id="cross" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4つの資料の横断表（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            上記の資料で、論理的な思考に関わる項目がどこに置かれ、全体のうちどれだけを占めるかを1つの表にまとめました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>該当する位置</th>
                  <th className={th}>項目数</th>
                  <th className={th}>補足</th>
                </tr>
              </thead>
              <tbody>
                {crossRows.map((r) => (
                  <tr key={r.src}>
                    <td className={td}>{r.src}</td>
                    <td className={td}>{r.where}</td>
                    <td className={td}>{r.count}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">集計方法：各資料のPDFをテキストに変換、Excelをシートごとに読み込み、「論理」「仮説」「思考」などの語を検索して該当箇所を確認しました（2026年11月28日、当サイト実施）。社会人基礎力の該当位置は、内容にもとづく当サイトの対応づけです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            4つの資料を比べると、ロジカルシンキングを独立した能力として細かく書いているのはデータサイエンティスト協会のスキルチェックリストだけで、社会人基礎力とデジタルスキル標準は、より広い「考え抜く力」「批判的思考」の中に含める形になっています。試験のシラバスでは、用語として知っていることよりも、上位の区分で「原因を論理的に説明する」「論理的に指摘する」といった実務の技能として書かれている点が特徴です。資料によって範囲が異なるため、研修や求人で「ロジカルシンキング」とある場合は、どの行動を指しているかを確認することをおすすめします。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">情報処理技術者試験での扱い（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAが公開している試験要綱（Ver.5.6）と13区分のシラバスを取得し、「ロジカルシンキング」「論理的」「論理性」「仮説」の語を検索しました。データ構造や回路の用語（論理データモデル、論理演算など）を除き、考え方や技能として書かれている箇所は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>試験区分</th>
                  <th className={th}>資料</th>
                  <th className={th}>記載内容（抜粋）</th>
                </tr>
              </thead>
              <tbody>
                {examRows.map((r) => (
                  <tr key={r.exam}>
                    <td className={td}>{r.exam}</td>
                    <td className={td}>{r.ver}</td>
                    <td className={td}>{r.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「試験要綱 Ver.5.6」、各試験区分のシラバス（2026年11月28日に試験要綱・シラバスのページから取得）。情報セキュリティマネジメント、ITストラテジスト、データベーススペシャリスト、ITサービスマネージャ、システム監査技術者（シラバス）、情報処理安全確保支援士の各シラバスには、上記の意味での記載はありませんでした。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            「ロジカルシンキング」の語が出てくるのは13区分のうち基本情報技術者試験と応用情報技術者試験の2区分で、いずれも用語例です。一方、システムアーキテクト・プロジェクトマネージャ・ネットワークスペシャリスト・エンベデッドシステムスペシャリストの各シラバスでは、課題の定義、品質問題の原因説明、保守計画の説明、デザインレビューといった具体的な作業の中で、論理的に説明・指摘する技能が求められています。試験の内容は<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者試験</Link>・<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者試験</Link>・<Link href="/cert/system-architect/" className="text-blue-600 hover:underline">システムアーキテクト試験</Link>の各ページでご説明しています。
          </p>
        </section>

        <section id="engineer" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアの業務への当てはめ（当サイトの作例）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            上記の資料に書かれた能力を、エンジニアの代表的な3つの業務に当てはめた例です。対応づけと進め方は当サイトによる作例で、特定の企業の手順を示すものではありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>業務</th>
                  <th className={th}>関係する公的なスキルの記述</th>
                  <th className={th}>進め方の例（当サイトの作例）</th>
                </tr>
              </thead>
              <tbody>
                {workRows.map((r) => (
                  <tr key={r.task}>
                    <td className={td}>{r.task}</td>
                    <td className={td}>{r.basis}</td>
                    <td className={td}>{r.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-slate-800 mt-8 mb-2">作例1：障害の原因切り分けメモ</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            原因の候補を重複なく並べ（MECE）、確認した事実と判定を分けて書くことで、ほかの担当者も同じ根拠で判断を確かめられます。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6 whitespace-pre-wrap">{incidentSample}</pre>
          <p className="text-xs text-slate-500 mt-2">当サイトが作成した架空の例です。時刻・数値・システム構成は実在のものではありません。</p>

          <h3 className="font-bold text-slate-800 mt-8 mb-2">作例2：設計レビューの指摘文</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンベデッドシステムスペシャリスト試験のシラバスがデザインレビューで挙げる「論理的に指摘する能力」「代替案を提示する能力」を、指摘文の型にした例です。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6 whitespace-pre-wrap">{reviewSample}</pre>
          <p className="text-xs text-slate-500 mt-2">当サイトが作成した架空の例です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            要件定義での課題の整理は<Link href="/knowledge/upstream/" className="text-blue-600 hover:underline">上流工程とは</Link>で、設計の考え方は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>で扱っています。転職の面接で、過去の障害対応や設計判断を「事実→判断→結果」の順に説明する場面でも、同じ組み立てが使えます。面接での伝え方は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接対策</Link>をご覧ください。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上流工程・面接・職種の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はロジカルシンキングの意味と、公的なスキル定義での位置づけに絞ってご説明しました。関連するテーマは次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>要件定義・基本設計の範囲と責任：<Link href="/knowledge/upstream/" className="text-blue-600 hover:underline">上流工程とは</Link></li>
            <li>SEの工程ごとの作業：<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SE（システムエンジニア）の仕事内容</Link></li>
            <li>スキルチェックリスト全体とデジタルスキル標準のロール：<Link href="/knowledge/data-scientist/" className="text-blue-600 hover:underline">データサイエンティストとは</Link></li>
            <li>デジタルスキル標準とDX人材：<Link href="/knowledge/dx/" className="text-blue-600 hover:underline">DXとは</Link></li>
            <li>面接での説明の組み立て：<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接対策</Link>・<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link></li>
            <li>試験の概要：<Link href="/cert/it-passport/" className="text-blue-600 hover:underline">ITパスポート試験</Link>・<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者試験</Link>・<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者試験</Link></li>
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
            <li>経済産業省「社会人基礎力」：https://www.meti.go.jp/policy/kisoryoku/index.html</li>
            <li>経済産業省「人生100年時代の社会人基礎力」（PDF）：https://www.meti.go.jp/policy/economy/jinzai/Ecforthe100-yearlife.pdf</li>
            <li>IPA「デジタルスキル標準」資料ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>IPA「デジタルスキル標準 ver.2.0（共通スキルリストExcel版）」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss-p_ver2.0_skilllist.xlsx</li>
            <li>IPA「試験要綱・シラバスについて」：https://www.ipa.go.jp/shiken/syllabus/gaiyou.html</li>
            <li>IPA「試験要綱 Ver.5.6」：https://www.ipa.go.jp/shiken/syllabus/rcu1hd00000141gq-att/youkou_ver5_6.pdf</li>
            <li>IPA「ITパスポート試験」シラバス Ver.6.5：https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kn1-att/syllabus_ip_ver6_5.pdf</li>
            <li>IPA「基本情報技術者試験」シラバス Ver.9.2：https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kpe-att/syllabus_fe_ver9_2.pdf</li>
            <li>IPA「応用情報技術者試験」シラバス Ver.7.2：https://www.ipa.go.jp/shiken/syllabus/omgdg50000005kq5-att/syllabus_ap_ver7_2.pdf</li>
            <li>IPA「システムアーキテクト試験」シラバス Ver.5.2：https://www.ipa.go.jp/shiken/syllabus/nq6ept00000014gx-att/syllabus_sa_ver5_2.pdf</li>
            <li>IPA「プロジェクトマネージャ試験」シラバス Ver.7.1：https://www.ipa.go.jp/shiken/syllabus/nq6ept00000014gb-att/syllabus_pm_ver7_1.pdf</li>
            <li>IPA「ネットワークスペシャリスト試験」シラバス Ver.4.1：https://www.ipa.go.jp/shiken/syllabus/nq6ept00000014fp-att/syllabus_nw_ver4_1.pdf</li>
            <li>IPA「エンベデッドシステムスペシャリスト試験」シラバス Ver.5.1：https://www.ipa.go.jp/shiken/syllabus/nq6ept00000014cn-att/syllabus_es_ver5_1.pdf</li>
            <li>データサイエンティスト協会「2025年度版『データサイエンティスト スキルチェックリストver.6』を発表」：https://www.datascientist.or.jp/news/n-pressrelease/post-4959/</li>
            <li>データサイエンティスト協会「スキルチェックリスト ver.6」（Excel）：https://www.datascientist.or.jp/common/docs/skillcheck_ver6.00.xlsx</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "上流工程とは", href: "/knowledge/upstream/" },
              { name: "SE（システムエンジニア）の仕事内容", href: "/knowledge/se/" },
              { name: "データサイエンティストとは", href: "/knowledge/data-scientist/" },
              { name: "技術面接対策", href: "/knowledge/tech-interview/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "応用情報技術者試験", href: "/cert/applied-info/" },
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
