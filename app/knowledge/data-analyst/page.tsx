import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "データアナリストとは｜職業分類での位置・欧州ESCOのスキル比較・DSとの違い【2026年】";
const DESCRIPTION =
  "データアナリストとは、データを収集・整理・分析し、業務や経営の判断に使える形で示す職種です。公的な定義の有無、職業分類での位置、欧州ESCOのスキル比較（当サイト集計）、データサイエンティストとの違いを整理します。";
const URL = "/knowledge/data-analyst/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "データアナリストの定義（公的資料での扱い）" },
  { id: "classification", label: "日本の職業分類での位置" },
  { id: "literacy", label: "デジタルスキル標準との関係" },
  { id: "esco", label: "ESCOのスキル比較（当サイト集計）" },
  { id: "compare", label: "データサイエンティストとの違い" },
  { id: "data", label: "調査・検定のデータと当サイトでの集計例" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "データアナリストとは簡単に言うと何ですか？",
    a: "データを集めて整え、分析した結果をグラフやレポートなどで示し、業務や経営の判断に役立てる職種です。日本には公的な定義がないため、本記事では欧州委員会の職業分類ESCOの説明（事業目標に照らしてデータを取り込み・点検・整理・変換・検証・モデル化・解釈する）を参考にしています。",
  },
  {
    q: "データアナリストとデータサイエンティストの違いは何ですか？",
    a: "公的な線引きはありません。ESCOの説明を比べると、データアナリストはデータの整理・品質確保・解釈・報告に重点があり、データサイエンティストはデータから数理モデルを構築し、活用方法を提言することまで含まれています。両者の必須スキルを当サイトで照合したところ、データアナリスト28項目のうち16項目が共通でした。",
  },
  {
    q: "データアナリストは職業分類ではどこに入りますか？",
    a: "厚生労働省編職業分類（2022年改定）と総務省の日本標準職業分類（2009年告示）のいずれにも、「データアナリスト」という職業名は収録されていません（当サイトで本文を検索して確認）。厚生労働省編職業分類では、「収集した資料・情報を分析する仕事にもっぱら従事するもの」を「033-03 企画・調査事務員」に含めると記載しています。",
  },
  {
    q: "データアナリストに必要な資格はありますか？",
    a: "必須の資格や公的な認定資格はありません。統計の知識を示す検定として統計検定があり、2級は大学基礎課程レベルの統計学（記述統計・推定・仮説検定・回帰分析など）を範囲としています。CBT方式の2級の合格率は2025年が46.1％でした。",
  },
  {
    q: "IPAのデジタルスキル標準にデータアナリストのロールはありますか？",
    a: "デジタルスキル標準ver.2.0（147ページ）を当サイトで検索したところ、「データアナリスト」という語は0件でした。近い名称の「ビジネスアナリスト」はビジネスアーキテクトの類型に置かれたロールで、業務・組織・システムの分析と要求の整理を担う役割です。データ分析の基礎は、全てのビジネスパーソン向けのDXリテラシー標準に含まれています。",
  },
];

const definitionRows = [
  { src: "厚生労働省編職業分類（2022年改定・JILPT）", name: "職業名として収録なし", note: "分析業務は「033-03 企画・調査事務員」の説明に含まれる" },
  { src: "日本標準職業分類（総務省・2009年告示）", name: "職業名として収録なし", note: "近い項目はシステムコンサルタント・システム設計者など（中分類10）" },
  { src: "デジタルスキル標準ver.2.0（IPA・経済産業省）", name: "ロールとしての設定なし", note: "名称の近い「ビジネスアナリスト」はビジネスアーキテクト類型のロール" },
  { src: "ESCO（欧州委員会）", name: "data analyst（コード2511.2）", note: "ISCO-08の2511（システムアナリスト）の下位に位置づけ" },
  { src: "O*NET（米国労働省の職業情報）", name: "独立した職業なし", note: "近い職業は Business Intelligence Analysts（15-2051.01）で、Data Scientists（15-2051）の下位" },
];

const escoSummary = [
  { item: "ESCOコード", da: "2511.2", ds: "2511.3" },
  { item: "上位のISCO-08区分", da: "2511 Systems analysts", ds: "2511 Systems analysts" },
  { item: "必須スキル（essential）", da: "28項目", ds: "23項目" },
  { item: "任意スキル（optional）", da: "17項目", ds: "16項目" },
  { item: "必須スキルのうち両者に共通", da: "16項目", ds: "16項目" },
  { item: "必須スキルのうち一方だけ", da: "12項目", ds: "7項目" },
];

const daOnly = [
  "ビッグデータの分析（analyse big data）",
  "統計解析手法の適用（apply statistical analysis techniques）",
  "ビジネスインテリジェンス（business intelligence）",
  "データ品質の評価（data quality assessment）",
  "データ品質基準の定義（define data quality criteria）",
  "文書の種類（documentation types）",
  "情報の機密保持（information confidentiality）",
  "情報構造（information structure）",
  "ICTデータの統合（integrate ICT data）",
  "データの管理（manage data）",
  "データマイニングの実施（perform data mining）",
  "非構造化データ（unstructured data）",
];

const dsOnly = [
  "レコメンドシステムの構築（build recommender systems）",
  "データの視覚的な提示（deliver visual presentation of data）",
  "データベーススキーマの設計（design database scheme）",
  "データ処理アプリケーションの開発（develop data processing applications）",
  "データ収集システムの管理（manage data collection systems）",
  "オンライン分析処理・OLAP（online analytical processing）",
  "分析結果の報告（report analysis results）",
];

const literacyRows = [
  { item: "データを読む・説明する", content: "データの分析手法や結果の読み取り方を理解し、分析結果の意味合いを見抜いて、目的や受け取り手に応じて説明する方法を理解している", work: "集計結果の解釈、レポート・ダッシュボードでの報告" },
  { item: "データを扱う", content: "活用しやすいデータの入力や整備の手法、データ抽出・加工（クレンジング・集計等）やデータベース等の技術が欠かせない場面があることを理解している", work: "SQLなどによる抽出、データの整形・集計" },
  { item: "データによって判断する", content: "業務・事業の構造と分析の目的を理解して分析アプローチを知り、分析結果から改善のアクションを見出してその結果をモニタリングする手法を理解している", work: "分析の設計、施策の効果測定" },
];

const soRows = [
  { type: "Data or business analyst（データ／ビジネスアナリスト）", n: "388人", pct: "0.9％", median: "62,625ドル（n=219）" },
  { type: "Data scientist（データサイエンティスト）", n: "532人", pct: "1.2％", median: "82,910ドル（n=333）" },
  { type: "Data engineer（データエンジニア）", n: "747人", pct: "1.7％", median: "81,210ドル（n=483）" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function DataAnalystKnowledgePage() {
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
          { name: "データアナリストとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データアナリストとは｜職業分類での位置・欧州ESCOのスキル比較・DSとの違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】データアナリストとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>データアナリストとは、データを収集・整理・分析し、その結果をレポートやダッシュボードなどの形で示して、業務や経営の判断に役立てる職種です。日本には公的な定義がなく、本記事では欧州委員会の職業分類ESCOの説明を参考にしています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省編職業分類と日本標準職業分類のいずれにも「データアナリスト」という職業名はありません（当サイトで確認）</li>
              <li>・ESCOでは「data analyst」（2511.2）として、データサイエンティスト（2511.3）と同じISCO区分に置かれています</li>
              <li>・ESCOの必須スキルを照合すると、データアナリスト28項目のうち16項目がデータサイエンティストと共通でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「データアナリスト」は求人では広く使われている職種名ですが、日本の公的な職業分類やスキル標準には同じ名前の項目がありません。本記事では、厚生労働省編職業分類、総務省の日本標準職業分類と国際標準職業分類（ISCO-08）仮訳、IPAのデジタルスキル標準、欧州委員会のESCO、米国のO*NETを当サイトで確認し、データアナリストがどのように位置づけられているかを整理しました。あわせて、ESCOのスキル一覧を取得してデータサイエンティストと照合した結果と、統計検定の公表値を当サイトのPCで集計した結果を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "総務省「日本標準職業分類」「国際標準職業分類2008年改定版（仮訳）」", "IPA「デジタルスキル標準ver.2.0」", "欧州委員会 ESCO API", "O*NET OnLine", "Stack Overflow Developer Survey 2025", "統計検定「過去の受験データ」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">データアナリストの定義（公的資料での扱い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本と欧米の公的な職業分類・スキル標準で、「データアナリスト」がどのように扱われているかを当サイトで確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>「データアナリスト」の扱い</th>
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
          <p className="text-xs text-slate-500 mt-2">確認方法：各資料のPDFをテキストに変換して「データアナリスト」を検索したほか、ESCOはAPI、O*NETは職業検索で確認しました（2026年11月27日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            公的な職業名として定義しているのは、確認した範囲ではESCOだけでした。ESCOは、データアナリストを次のように説明しています（当サイト訳）。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm">
            データアナリストは、企業の事業目標に照らして、データの集まりを取り込み、点検し、整理（クレンジング）し、変換し、検証し、モデル化し、解釈する。データソースやデータの保管場所が、一貫性のある信頼できるデータを提供できるようにする。状況や手元のデータに応じてさまざまなアルゴリズムやITツールを使い、グラフ・チャート・ダッシュボードなどの可視化の形でレポートを作成することもある。
          </blockquote>
          <p className="text-slate-600 leading-relaxed mt-4">
            ESCOは別名として data warehousing analyst（データウェアハウス・アナリスト）なども挙げています。分析だけでなく、分析に使うデータの一貫性や信頼性を保つことまで役割に含めている点が特徴です。
          </p>
        </section>

        <section id="classification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本の職業分類での位置</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）には「データアナリスト」という職業名はありませんが、分析を中心とする仕事について次の記載があります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>大分類</th>
                  <th className={th}>分析に関わる記載・例示</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>033-03 企画・調査事務員</td><td className={td}>06 事務的職業</td><td className={td}>市場調査・統計調査などの企画と調査結果の分析の仕事に従事するもの。「収集した資料・情報を分析する仕事にもっぱら従事するものを含む」。例示にマーケター、マーケティングリサーチャー、Webマーケティング事務員など</td></tr>
                <tr><td className={td}>010-01 ITコンサルタント</td><td className={td}>02 研究・技術の職業</td><td className={td}>経営・業務環境の分析などにもとづいて課題を整理し、情報処理・通信技術を活用したシステムの提案などを行う。例示にシステムアナリスト</td></tr>
                <tr><td className={td}>010-99 その他の情報処理・通信技術者</td><td className={td}>02 研究・技術の職業</td><td className={td}>例示にデータエンジニア、ビッグデータエンジニアなど</td></tr>
                <tr><td className={td}>011-99 他に分類されない技術の職業</td><td className={td}>02 研究・技術の職業</td><td className={td}>例示にデータサイエンティスト</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年12月）の職業分類表・職業名索引。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            この分類に当てはめると、データの分析を主な仕事とするデータアナリストは、職務の内容によって「企画・調査事務員」（事務的職業）にも、ITコンサルタントなどの技術の職業にも分類されうると考えられます（当サイトの整理です）。データサイエンティストとデータエンジニアは職業名として例示されているのに対し、データアナリストは例示がないため、求人票の職種名だけでは仕事の範囲が判断しにくい職種と言えます。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            総務省の日本標準職業分類（2009年告示）にも同名の項目はありません。総務省が掲載している国際標準職業分類ISCO-08の仮訳では、ESCOがデータアナリストを置いている「2511 システムアナリスト」を、「顧客が必要とする情報技術・情報技術に関わる手順あるいは問題の研究・分析・評価を行い、既存あるいは今後導入する情報システムの改善に向けた提案・提言・計画を策定・実施するもの」と説明しています。
          </p>
        </section>

        <section id="literacy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デジタルスキル標準との関係</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAと経済産業省のデジタルスキル標準ver.2.0には「データアナリスト」のロールはありません（当サイトで検索した結果、0件）。データ分析の基礎は、全てのビジネスパーソンを対象とする「DXリテラシー標準」の「データ」の項目に含まれています。データアナリストの日常業務に対応させると、次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>DXリテラシー標準の項目</th>
                  <th className={th}>内容（IPAの記載の要約）</th>
                  <th className={th}>対応する分析業務（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                {literacyRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.content}</td>
                    <td className={td}>{r.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準ver.2.0」第Ⅱ部 第3章「項目の内容・学習項目例 – What（1/2）」p.22。右列は当サイトによる対応づけです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            DXリテラシー標準は全てのビジネスパーソン向けの標準であるため、データアナリストはこれらの項目を「理解している」水準にとどまらず、実務で継続して実行できる水準が求められると考えられます。なお、名称の近い「ビジネスアナリスト」は、ビジネスアーキテクトの類型に置かれたロールで、「プロダクト/プログラムにおける業務・組織・システムの分析を担い、要求の整理と実装担当者（エンジニア）への伝達を行う」役割です。データの分析を中心とする職種とは担う範囲が異なります。
          </p>
        </section>

        <section id="esco" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ESCOのスキル比較（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ESCOのAPIから、データアナリストとデータサイエンティストの職業情報を2026年11月27日に取得し、登録されているスキルを当サイトで照合しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>データアナリスト</th>
                  <th className={th}>データサイエンティスト</th>
                </tr>
              </thead>
              <tbody>
                {escoSummary.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.da}</td>
                    <td className={td}>{r.ds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（occupation：data analyst／data scientist）。共通・一方だけの件数は、必須スキル（hasEssentialSkill）の名称を当サイトが照合して数えたものです。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">データアナリストだけの必須スキル（12項目）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {daOnly.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">データサイエンティストだけの必須スキル（7項目）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {dsOnly.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">日本語名は当サイト訳です。括弧内がESCOの英語名です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            共通の16項目には、データクレンジング、統計、クエリ言語、データモデル、可視化の手法、データ品質の確保の実施などが含まれます。データアナリストに固有の項目は、データ品質の評価・基準の定義、データの統合・管理、ビジネスインテリジェンスなど、分析に使うデータを整えて業務に結びつける内容が中心です。データサイエンティストに固有の項目には、レコメンドシステムの構築やデータ処理アプリケーションの開発など、仕組みを作る内容が含まれます。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            一方で、「分析結果の報告」と「データの視覚的な提示」は、データサイエンティストでは必須、データアナリストでは任意スキルとして登録されていました。報告や可視化がデータアナリストの仕事ではないという意味ではなく、ESCOの登録上の区分である点にご注意ください。
          </p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データサイエンティストとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            定義の面から両者の違いを当サイトで整理しました。公的な線引きはないため、実際の求人では職務内容をご確認ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>観点</th>
                  <th className={th}>データアナリスト</th>
                  <th className={th}>データサイエンティスト</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>ESCOの説明の中心</td><td className={td}>事業目標に照らしてデータを整理・検証・解釈し、可視化したレポートを作成する。データの一貫性・信頼性を確保する</td><td className={td}>データから数理モデルを構築し、知見を専門家や非専門家に伝え、データの活用方法を提言する</td></tr>
                <tr><td className={td}>厚生労働省編職業分類</td><td className={td}>職業名の例示なし（分析業務は033-03の説明に含まれる）</td><td className={td}>011-99の例示として収録</td></tr>
                <tr><td className={td}>デジタルスキル標準ver.2.0</td><td className={td}>ロールなし</td><td className={td}>類型「データサイエンティスト」（2ロール）</td></tr>
                <tr><td className={td}>米国O*NET</td><td className={td}>近い職業はBusiness Intelligence Analysts（15-2051.01）</td><td className={td}>Data Scientists（15-2051.00）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ESCO、JILPT、IPA、O*NET OnLine。表のまとめ方は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            米国のO*NETでは、Business Intelligence Analystsは「データの保管場所への問い合わせ（クエリ）や定期レポートの作成によって、財務・市場に関する情報を作る」職業と説明され、統計上はData Scientistsの下位の職業として扱われています。賃金と雇用者数もData Scientistsとまとめて表示されており、データアナリストとデータサイエンティストを統計で切り分けることは米国でも難しいことがわかります。データサイエンティストの定義やスキル標準での扱いは、<Link href="/knowledge/data-scientist/" className="text-blue-600 hover:underline">データサイエンティストとは</Link>でご説明しています。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">調査・検定のデータと当サイトでの集計例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Survey 2025（開発者などを対象とした国際調査、回答者43,560人）で、現在の職種を尋ねた設問から、データ関連の3職種を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>回答した職種</th>
                  <th className={`${th} text-right`}>回答数</th>
                  <th className={`${th} text-right`}>割合</th>
                  <th className={`${th} text-right`}>年間報酬の中央値（全世界・米ドル）</th>
                </tr>
              </thead>
              <tbody>
                {soRows.map((r) => (
                  <tr key={r.type}>
                    <td className={td}>{r.type}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                    <td className={`${td} text-right`}>{r.pct}</td>
                    <td className={`${td} text-right`}>{r.median}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」（Developers：DevType／Work：CompTotal）。報酬は回答者の国をまたいだ中央値で、日本の水準を示すものではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            この調査の選択肢は「データまたはビジネスアナリスト」をまとめた1項目で、回答者の大半はソフトウェア開発者です。データアナリスト全体の人数や報酬を示すものではなく、開発者向け調査の中での位置を知る参考値としてご覧ください。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">当サイトでの集計例：統計検定の合格率</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            データアナリストの基本作業である「CSVを読み込んで要約統計量を出す」作業の例として、統計検定の公式サイトが公表しているCBT方式の合格率（2級は2016〜2025年、準1級は2021〜2025年）をCSVに書き写し、当サイトのPC（macOS・Python 3.9.6の標準ライブラリcsv・statistics）で集計しました。傾きは年と合格率の最小二乗法による回帰直線の傾きです。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6">
{`$ python3 -I agg.py toukei.csv
grade2: n=10 期間=2016-2025 平均=49.85 中央値=49.55 標準偏差=2.23 最小=46.1(2025) 最大=52.8(2019) 傾き=-0.52pt/年
grade_pre1: n=5 期間=2021-2025 平均=35.24 中央値=35.30 標準偏差=0.50 最小=34.7(2025) 最大=35.9(2022) 傾き=-0.06pt/年`}
          </pre>
          <p className="text-xs text-slate-500 mt-2">元データ：統計検定「過去の受験データ」CBT方式試験の各年の各検定種別の合格率（2026年11月27日確認）。grade2＝2級、grade_pre1＝準1級。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            2級の合格率は10年間の平均が49.85％で、2025年の46.1％は期間中で最も低い値でした。準1級は5年間で34.7〜35.9％と変動が小さく、標準偏差は0.50ポイントです。このように、平均だけでなく中央値・ばらつき・傾きを並べて示すことで、「下がっている」「横ばい」といった判断の根拠を数値で説明できます。2級の出題範囲は、記述統計、相関と単回帰、推定、仮説検定、カイ二乗検定、線形モデルなどで、データアナリストの実務で使う統計の基礎と重なります。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はデータアナリストという職種の定義と公的資料での扱いに絞ってご説明しました。転職の進め方やキャリアの具体的な情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>転職の進め方・必要なスキル・ポートフォリオ：<Link href="/skill/data-analyst/" className="text-blue-600 hover:underline">データアナリストの転職ガイド</Link></li>
            <li>データサイエンティストへの移行：<Link href="/career/data-analyst-to-scientist/" className="text-blue-600 hover:underline">データアナリストからデータサイエンティストへ</Link></li>
            <li>データサイエンティストの定義・スキル標準：<Link href="/knowledge/data-scientist/" className="text-blue-600 hover:underline">データサイエンティストとは</Link></li>
            <li>抽出・集計の基礎：<Link href="/knowledge/sql-basics/" className="text-blue-600 hover:underline">SQLの基礎</Link></li>
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
            <li>JILPT「第5回改定 厚生労働省編職業分類」（010・011-99・033-03、職業名索引）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>総務省 日本標準職業分類（国際標準職業分類の案内）：https://www.soumu.go.jp/toukei_toukatsu/index/seido/shokgyou/index.htm</li>
            <li>総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」（2511 システムアナリスト）：https://www.soumu.go.jp/main_content/000397967.pdf</li>
            <li>IPA「デジタルスキル標準ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
            <li>IPA「デジタルスキル標準」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>ESCO data analyst：http://data.europa.eu/esco/occupation/d3edb8f8-3a06-47a0-8fb9-9b212c006aa2</li>
            <li>ESCO data scientist：http://data.europa.eu/esco/occupation/258e46f9-0075-4a2e-adae-1ff0477e0f30</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/resource/occupation</li>
            <li>O*NET OnLine Business Intelligence Analysts（15-2051.01）：https://www.onetonline.org/link/summary/15-2051.01</li>
            <li>O*NET OnLine Data Scientists（15-2051.00）：https://www.onetonline.org/link/summary/15-2051.00</li>
            <li>Stack Overflow「2025 Developer Survey」Developers：https://survey.stackoverflow.co/2025/developers</li>
            <li>統計検定「過去の受験データ」：https://www.toukei-kentei.jp/info/past_data</li>
            <li>統計検定「統計検定２級」：https://www.toukei-kentei.jp/grade/grade2/</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "データサイエンティストとは", href: "/knowledge/data-scientist/" },
              { name: "データアナリストの転職ガイド", href: "/skill/data-analyst/" },
              { name: "データアナリストからデータサイエンティストへ", href: "/career/data-analyst-to-scientist/" },
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
