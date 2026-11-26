import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プロダクトマネージャーとは｜IPAの定義・プロダクトオーナーやPMとの違い・必要スキル集計【2026年】";
const DESCRIPTION =
  "プロダクトマネージャー（PdM）とは、特定の製品・サービスの責任者として企画から継続的な改善までを担い、成果に責任を持つ役割です。IPAの定義、プロダクトオーナーやPMとの違い、必要スキルの当サイト集計を整理します。";
const URL = "/knowledge/product-manager/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "プロダクトマネージャーの定義" },
  { id: "role", label: "プロダクトマネージャーの主な業務" },
  { id: "skills", label: "求められるスキルの比較（当サイト集計）" },
  { id: "po", label: "プロダクトオーナーとの違い" },
  { id: "project", label: "プロジェクトマネージャーとの違いと職業分類での扱い" },
  { id: "survey", label: "海外の開発者調査に見るプロダクトマネージャー" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "プロダクトマネージャーとは簡単に言うと何ですか？",
    a: "特定の製品・サービス（プロダクト）の責任者として、企画から構築、リリース後の継続的な改善や事業の拡大までチームを運営し、成果に責任を持つ役割です。IPAの「デジタルスキル標準 ver.2.0」（2026年4月）では、DXを推進する人材のうち「ビジネスアーキテクト」類型のロールの一つとして定義されています。",
  },
  {
    q: "プロダクトマネージャーとプロダクトオーナーの違いは何ですか？",
    a: "両者の違いを定めた公的な定義はありません。プロダクトオーナーはスクラムガイド（2020年版）で定められたスクラムチーム内の責任で、プロダクトの価値の最大化とプロダクトバックログの管理に責任を持ちます。プロダクトマネージャーは開発の進め方を問わない職務の呼び方で、ビジョンやロードマップの策定、KPIの設定、社内外の関係者との調整まで含めて説明されることが多い、というのが当サイトの整理です。1人が両方を兼ねる職場もあります。",
  },
  {
    q: "プロダクトマネージャーとプロジェクトマネージャーの違いは何ですか？",
    a: "総務省の日本標準職業分類では、プロジェクトマネージャーは「システム開発プロジェクトの責任者」として予算や要求品質に責任を持つ職業と説明されています。一方、IPAのデジタルスキル標準では、プロダクトマネージャーは期限のあるプロジェクトではなく、特定のプロダクトのライフサイクル全体に責任を持つ役割と定義されています。対象が「プロジェクト」か「プロダクト」かが主な違いです。",
  },
  {
    q: "プロダクトマネージャーは公的な職業分類にありますか？",
    a: "当サイトで確認した範囲では、総務省の日本標準職業分類と、厚生労働省編職業分類（第5回改定、2022年）の職業名索引（約18,700の職業名を採録）のいずれにも「プロダクトマネージャー」という項目・職業名はありませんでした。新商品の企画などの仕事は、厚生労働省編職業分類では「033-03 企画・調査事務員」（例示に商品企画事務員・商品開発部員など）に含まれています。",
  },
  {
    q: "プロダクトマネージャーになるのに資格は必要ですか？",
    a: "プロダクトマネージャーとして働くために必須の国家資格はありません。IPAのデジタルスキル標準では、プロダクトビジョン・ロードマップ策定、プロダクト成果指標の設計と運用、仮説検証、マーケティング、チーム開発など13のスキル項目で「高い実践力と専門性が必要」とされています。資格よりも、これらに関する実務経験を具体的に説明できることが重要になると考えられます。",
  },
];

const dutyRows = [
  "プロダクトビジョンを定め、その実現に向けたロードマップを策定する。",
  "プロダクトの要求事項を定義し、取組みの優先順位を決定する。",
  "チーム体制、コスト、スケジュールを管理する。",
  "目的の実現に向けて、デザイナーやソフトウェアエンジニアに加え、顧客、営業、経営層などのステークホルダーと調整する。",
  "成果責任をKPIで具体化し、達成に向けて検証と改善を継続的に行う。",
];

const levelRows = [
  { role: "ビジネスアーキテクト", a: 8, b: 26, c: 13, d: 14, z: 6 },
  { role: "ビジネスアナリスト", a: 11, b: 25, c: 14, d: 11, z: 6 },
  { role: "プロダクトマネージャー", a: 13, b: 25, c: 14, d: 9, z: 6 },
];

const aSkillRows = [
  { skill: "ビジネス環境と経営戦略の理解", sub: "戦略の理解とアーキテクチャ設計", pdm: "a", ba: "a", ban: "a" },
  { skill: "プロダクトビジョン／ロードマップ策定", sub: "プロダクトのマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "プロダクト成果指標の設計と運用", sub: "プロダクトのマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "プロダクトスコープと優先順位のマネジメント", sub: "プロダクトのマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "仮説検証・学習サイクル設計", sub: "プロダクトのマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "マーケティング", sub: "プロダクトのマネジメント", pdm: "a", ba: "c", ban: "b" },
  { skill: "技術的制約・アーキテクチャを踏まえたプロダクト判断", sub: "プロダクトのマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "プロダクトライフサイクルマネジメント", sub: "変革活動のマネジメント", pdm: "a", ba: "b", ban: "b" },
  { skill: "プログラム／プロジェクトマネジメント", sub: "変革活動のマネジメント", pdm: "a", ba: "b", ban: "a" },
  { skill: "ビジネスモデリングとコラボレーション", sub: "変革活動のマネジメント", pdm: "a", ba: "a", ban: "a" },
  { skill: "顧客・ユーザー/ステークホルダー理解", sub: "デザイン", pdm: "a", ba: "a", ban: "a" },
  { skill: "価値発見・定義", sub: "デザイン", pdm: "a", ba: "b", ban: "b" },
  { skill: "チーム開発", sub: "ソフトウェア開発（テクノロジー）", pdm: "a", ba: "d", ban: "b" },
];

const devTypeRows = [
  { type: "Developer, full-stack（フルスタック開発者・参考）", n: "11,919人", pct: "26.96％", salary: "72,509ドル（n=7,320）" },
  { type: "Engineering manager（エンジニアリングマネージャー）", n: "1,077人", pct: "2.44％", salary: "130,000ドル（n=726）" },
  { type: "Data or business analyst（データ・ビジネスアナリスト）", n: "388人", pct: "0.88％", salary: "62,625ドル（n=219）" },
  { type: "Project manager（プロジェクトマネージャー）", n: "296人", pct: "0.67％", salary: "68,924ドル（n=157）" },
  { type: "Product manager（プロダクトマネージャー）", n: "201人", pct: "0.45％", salary: "100,000ドル（n=115）" },
  { type: "UX, Research Ops or UI design professional（UX・UI）", n: "121人", pct: "0.27％", salary: "60,000ドル（n=53）" },
];

export default function ProductManagerKnowledgePage() {
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
          { name: "プロダクトマネージャーとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プロダクトマネージャーとは｜IPAの定義・プロダクトオーナーやPMとの違い・必要スキル集計
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】プロダクトマネージャーとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>プロダクトマネージャー（PdM）とは、特定のプロダクト（製品・サービス）の責任者として、企画から構築、その後の継続的な改善や事業の拡大までライフサイクルを通じてチームを運営し、明確な成果責任を持つ役割です（IPA「デジタルスキル標準 ver.2.0」の定義による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・主な業務は、ビジョンとロードマップの策定、要求の定義と優先順位の決定、チーム体制・コスト・スケジュールの管理、関係者との調整、KPIによる検証と改善です</li>
              <li>・プロジェクトマネージャーは期限のある「プロジェクト」、プロダクトマネージャーは継続する「プロダクト」に責任を持つ点が主な違いです</li>
              <li>・総務省・厚生労働省の職業分類には「プロダクトマネージャー」という項目はありません（当サイト確認）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、IPA（情報処理推進機構）の「デジタルスキル標準 ver.2.0」とスクラムガイド（2020年版）をもとに、プロダクトマネージャーとはどのような役割かをご説明します。あわせて、デジタルスキル標準のスキルマッピング（Excel）を当サイトで集計し、近いロールと求められるスキルの水準を比較しました。なお、本記事ではプロジェクトマネージャー（PM）と区別するため、プロダクトマネージャーをPdMと表記します。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["IPA「デジタルスキル標準 ver.2.0」（2026年4月）", "IPA「DX推進スキル標準 共通スキルリスト ver.2.0」", "スクラムガイド 2020年版（日本語版）", "総務省「日本標準職業分類」", "JILPT「第5回改定 厚生労働省編職業分類」", "Stack Overflow Developer Survey 2025"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロダクトマネージャーの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAが2026年4月に公開した「デジタルスキル標準 ver.2.0」のうち「DX推進スキル標準（DSS-P）」では、DXを推進する人材を6つの類型（ビジネスアーキテクト、デザイナー、データサイエンティスト、データマネジメント、ソフトウェアエンジニア、サイバーセキュリティ）に区分しています。プロダクトマネージャーは、このうち「ビジネスアーキテクト」類型のロールの一つです。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            同標準では、プロダクトマネージャーの担うべき責務を「特定のプロダクト（製品・サービス）の責任者として企画から構築、その後の継続的改善やビジネスの拡大などライフサイクルでチームの運営を担う。また、明確な成果責任を持つ」と定めています。ここでいうプロダクトは「デジタル技術を活用した製品・サービス」で、社内向けの取組みも含むと注記されています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            活躍する場面としては「新たにプロダクト（製品・サービス）を立ち上げる際に、適切に意思決定や関係者との調整を図りつつ、プロダクト・サービスを成長させたいとき」が挙げられています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            改訂履歴によると、プロダクトマネージャーの定義は2024年7月のver.1.2で追加されました。理由として「日本企業のうち特にデジタルサービスを提供する企業において、ビジネスアーキテクトと類似性がある職種としてプロダクトマネージャーが一般的になりつつある」ことが記載されています。ver.2.0では、ビジネスアーキテクト類型のロールが「ビジネスアーキテクト」「ビジネスアナリスト」「プロダクトマネージャー」の3つに見直されました。
          </p>
        </section>

        <section id="role" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロダクトマネージャーの主な業務</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            デジタルスキル標準 ver.2.0は、プロダクトマネージャーの主な業務として次の5つを挙げています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">No.</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な業務（原文）</th>
                </tr>
              </thead>
              <tbody>
                {dutyRows.map((d, i) => (
                  <tr key={i}>
                    <td className="border border-slate-200 px-3 py-2">{i + 1}</td>
                    <td className="border border-slate-200 px-3 py-2">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準 ver.2.0」第Ⅲ部第3章「ビジネスアーキテクトのロール｜担うべき責務・主な業務・スキル（3/3）」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同標準の補足資料では、同じ類型の3ロールを「変革の階層」と「決定権・裁量権の有無」で区別しています。プロダクトマネージャーは任命されたプロダクトやプログラムに対する決定権・裁量権を持ち、責任範囲が明確であるとされています。これに対し、ビジネスアナリストは基本的に最終決定権や裁量権を持たず実行責任が中心、ビジネスアーキテクトはアーキテクチャの全体設計を行うものの決定権は経営に帰属すると説明されています。また、3つの役割を全て設置する必要はなく、兼務してもかまわないとも記載されています。
          </p>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキルの比較（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAが公開している「DX推進スキル標準 共通スキルリスト ver.2.0」（Excel）のスキルマッピングシートには、67のスキル項目ごとに、各ロールに求められる重要度がa〜d・zで記載されています。当サイトでは、このシートからビジネスアーキテクト類型の3ロールの重要度を抜き出し、件数を数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ロール</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">a 高い実践力と専門性</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">b 一定の実践力と専門性</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">c 説明可能なレベルで理解</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">d 位置づけ・関連性の理解</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">z 役割や状況に応じて</th>
                </tr>
              </thead>
              <tbody>
                {levelRows.map((r) => (
                  <tr key={r.role}>
                    <td className="border border-slate-200 px-3 py-2">{r.role}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.a}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.b}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.c}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.d}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.z}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「dss-p_ver2.0_skilllist.xlsx」の「共通スキルリスト　スキルマッピング」シート（67項目）。件数は当サイトが2026年11月27日に集計したものです。zはパーソナルスキル6項目に付けられています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            重要度aの項目数は、プロダクトマネージャーが13件で3ロールの中で最も多くなりました。プロダクトマネージャーに重要度aが付いている13項目と、同じ類型の他の2ロールの重要度は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">スキル項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">サブカテゴリー</th>
                  <th className="border border-slate-200 px-3 py-2 text-center">プロダクトマネージャー</th>
                  <th className="border border-slate-200 px-3 py-2 text-center">ビジネスアーキテクト</th>
                  <th className="border border-slate-200 px-3 py-2 text-center">ビジネスアナリスト</th>
                </tr>
              </thead>
              <tbody>
                {aSkillRows.map((r) => (
                  <tr key={r.skill}>
                    <td className="border border-slate-200 px-3 py-2">{r.skill}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.sub}</td>
                    <td className="border border-slate-200 px-3 py-2 text-center">{r.pdm}</td>
                    <td className="border border-slate-200 px-3 py-2 text-center">{r.ba}</td>
                    <td className="border border-slate-200 px-3 py-2 text-center">{r.ban}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：同上。抽出・並べ替えは当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            13項目のうち9項目はビジネスアナリストでも重要度aで、プロダクトのマネジメントに関するスキルは両ロールで共通して高い水準が求められています。プロダクトマネージャーだけが重要度aとなっているのは「マーケティング」「プロダクトライフサイクルマネジメント」「価値発見・定義」「チーム開発」の4項目でした（当サイト集計）。市場への提供と収益化、リリース後の運用・成長、開発チームの運営まで責任を持つという定義に対応した結果と考えられます。
          </p>
        </section>

        <section id="po" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロダクトオーナーとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            スクラムガイド（2020年版、日本語版）では、プロダクトオーナーは「スクラムチームから生み出されるプロダクトの価値を最大化することの結果に責任を持つ」とされ、効果的なプロダクトバックログ管理の例として、プロダクトゴールの策定と伝達、プロダクトバックログアイテムの作成と伝達、並び替え、透明性の確保が挙げられています。また、プロダクトオーナーは「1人の人間であり、委員会ではない」と定められています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            なお、同ガイドの日本語版本文には「プロダクトマネージャー」という語は出てきません（当サイトで全文を検索して確認）。プロダクトマネージャーとプロダクトオーナーの関係を定めた公的な定義はないため、次の表は当サイトの整理です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プロダクトマネージャー</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プロダクトオーナー</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">根拠とした資料</td><td className="border border-slate-200 px-3 py-2">IPA デジタルスキル標準 ver.2.0</td><td className="border border-slate-200 px-3 py-2">スクラムガイド 2020年版</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">位置づけ</td><td className="border border-slate-200 px-3 py-2">DXを推進する人材のロール（開発手法を問わない）</td><td className="border border-slate-200 px-3 py-2">スクラムチーム内の責任（スクラムを採用する場合）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">責任の対象</td><td className="border border-slate-200 px-3 py-2">プロダクトのライフサイクル全体と成果（KPI）</td><td className="border border-slate-200 px-3 py-2">プロダクトの価値の最大化とプロダクトバックログ管理</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">記載されている主な業務</td><td className="border border-slate-200 px-3 py-2">ビジョン・ロードマップ策定、要求定義と優先順位、体制・コスト・スケジュール管理、関係者調整、KPIによる検証</td><td className="border border-slate-200 px-3 py-2">プロダクトゴールの策定、バックログアイテムの作成・並び替え、バックログの透明性の確保</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">人数・兼務</td><td className="border border-slate-200 px-3 py-2">他のロールとの兼務も可とされている</td><td className="border border-slate-200 px-3 py-2">1人（委員会ではない）。作業は委任できるが最終責任は本人</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準 ver.2.0」、スクラムガイド2020年版（日本語版）。比較の観点と要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            スクラムを採用している職場では、プロダクトマネージャーがプロダクトオーナーを兼ねる場合もあれば、別の人が担う場合もあります。求人を比較する際は、肩書きよりも、ロードマップやKPIの決定権を持つのか、バックログの優先順位付けが中心なのかを確認することをおすすめします。スクラムの役割全体は<Link href="/knowledge/agile/" className="text-blue-600 hover:underline">アジャイル開発とは</Link>でご説明しています。
          </p>
        </section>

        <section id="project" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロジェクトマネージャーとの違いと職業分類での扱い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プロジェクトマネージャーは、総務省の日本標準職業分類に小分類103「情報処理プロジェクトマネージャ」として掲載されており、「システム開発プロジェクトの責任者としてプロジェクト計画を作成し、必要となる要員や資源を確保し、予算、要求品質等について責任を持ち、プロジェクト全体を管理する仕事」と説明されています。厚生労働省編職業分類（第5回改定）でも「010-03 ITプロジェクトマネージャ」という項目があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            一方、当サイトで両分類のPDFを全文検索したところ、「プロダクトマネージャー」という項目・職業名はいずれにもありませんでした。厚生労働省編職業分類の職業名索引（約18,700の職業名を採録）でも同様です。新商品の企画などの仕事は、厚生労働省編職業分類では「033-03 企画・調査事務員」に含まれ、例示職業名に商品企画事務員、商品開発部員、Webプランナーなどが挙げられています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プロダクトマネージャー</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">プロジェクトマネージャー</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">責任の対象</td><td className="border border-slate-200 px-3 py-2">特定のプロダクト（製品・サービス）</td><td className="border border-slate-200 px-3 py-2">システム開発プロジェクト</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">期間</td><td className="border border-slate-200 px-3 py-2">企画から改善・拡大までのライフサイクル</td><td className="border border-slate-200 px-3 py-2">プロジェクトの計画から終了まで</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">主に問われる成果</td><td className="border border-slate-200 px-3 py-2">KPIで具体化した成果</td><td className="border border-slate-200 px-3 py-2">予算・要求品質などの達成</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">日本標準職業分類</td><td className="border border-slate-200 px-3 py-2">項目なし</td><td className="border border-slate-200 px-3 py-2">103 情報処理プロジェクトマネージャ</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">厚生労働省編職業分類</td><td className="border border-slate-200 px-3 py-2">職業名なし（近い仕事は033-03 企画・調査事務員）</td><td className="border border-slate-200 px-3 py-2">010-03 ITプロジェクトマネージャ</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準 ver.2.0」、総務省「日本標準職業分類」、JILPT「第5回改定 厚生労働省編職業分類 職業分類表」「同 職業名索引」。比較は当サイトの整理です。職業名索引に載っていないことは、その仕事がどの分類にも当たらないという意味ではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            なお、デジタルスキル標準ではプロダクトマネージャーの主な業務に「チーム体制、コスト、スケジュールを管理する」ことも含まれ、スキル項目「プログラム／プロジェクトマネジメント」の重要度もaです。プロジェクトマネジメントはプロダクトマネージャーにも求められる能力の一つと位置づけられています。プロジェクトマネージャーの詳しい定義は<Link href="/knowledge/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャーとは</Link>をご覧ください。
          </p>
        </section>

        <section id="survey" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外の開発者調査に見るプロダクトマネージャー</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本国内でプロダクトマネージャーの人数を示す公的な統計は、当サイトでは確認できていません。参考として、開発者向けQ&Aサイトを運営するStack Overflowの「Developer Survey 2025」では、現在の職種を尋ねる設問（Developer type、回答者43,560人）に「Product manager」の選択肢があります。当サイトで調査ページの集計データから近い職種を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種（調査の選択肢）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">回答者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">割合</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間報酬の中央値（米ドル）</th>
                </tr>
              </thead>
              <tbody>
                {devTypeRows.map((r) => (
                  <tr key={r.type}>
                    <td className="border border-slate-200 px-3 py-2">{r.type}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.n}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.pct}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.salary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Stack Overflow「2025 Developer Survey」の調査ページに含まれる集計データ（DevType：回答者43,560人、年間報酬CompTotal：回答者23,928人）。割合は調査データの値を小数第2位まで表示しています（調査ページのグラフではProduct managerは0.4％と表示）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            Product managerと回答した人は201人（0.45％）で、Project manager（296人）より少ない結果でした。年間報酬の中央値は100,000ドル（115人）で、Project manager（68,924ドル）を上回っています。ただし、この調査は開発者コミュニティへの任意回答で世界各国の回答を合算したものであり、回答者数も少ないため、日本のプロダクトマネージャーの人数構成や年収水準を示すものではない点にご注意ください。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はプロダクトマネージャーという役割の定義と、近い役割との違いに絞ってご説明しました。転職市場やキャリアの具体的な情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>PM・PdM・PMOの転職市場：<Link href="/skill/pm/" className="text-blue-600 hover:underline">PMの転職市場ガイド</Link></li>
            <li>プロジェクトマネージャーの定義とIPA試験：<Link href="/knowledge/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャーとは</Link></li>
            <li>組織横断のプロジェクト支援：<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link></li>
            <li>スクラムの役割とタイムボックス：<Link href="/knowledge/agile/" className="text-blue-600 hover:underline">アジャイル開発とは</Link></li>
            <li>デザイナー類型（UX/UIデザイナー）に近い職種：<Link href="/knowledge/uiux/" className="text-blue-600 hover:underline">UI/UXエンジニアへの転身ガイド</Link></li>
            <li>マネジメント職の先のキャリア：<Link href="/career/pm-to-cto/" className="text-blue-600 hover:underline">PM→CTO/VPoEへのキャリアパス</Link></li>
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
            <li>IPA「デジタルスキル標準 ver.2.0」（2026年4月、ロール一覧・ビジネスアーキテクトのロール・補足資料・改訂履歴）：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
            <li>IPA「DX推進スキル標準 共通スキルリスト ver.2.0」（スキルマッピング）：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss-p_ver2.0_skilllist.xlsx</li>
            <li>IPA「DX推進スキル標準（DSS-P）概要」：https://www.ipa.go.jp/jinzai/skill-standard/dss/about_dss-p.html</li>
            <li>IPA「デジタルスキル標準 資料ダウンロード」：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>Ken Schwaber &amp; Jeff Sutherland「スクラムガイド」2020年11月（日本語版）：https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Japanese.pdf</li>
            <li>総務省「日本標準職業分類」（小分類103 情報処理プロジェクトマネージャ）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業名索引」：https://www.jil.go.jp/institute/seika/shokugyo/sakuin/documents/sakuin05.pdf</li>
            <li>Stack Overflow「2025 Developer Survey」Developers：https://survey.stackoverflow.co/2025/developers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "プロジェクトマネージャーとは", href: "/knowledge/project-manager/" },
              { name: "PMの転職市場ガイド", href: "/skill/pm/" },
              { name: "アジャイル開発とは", href: "/knowledge/agile/" },
              { name: "PMOとは", href: "/knowledge/pmo/" },
              { name: "UI/UXエンジニアへの転身ガイド", href: "/knowledge/uiux/" },
              { name: "PM→CTO/VPoEへのキャリアパス", href: "/career/pm-to-cto/" },
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
