import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ITコンサルタントとは｜IPAの人材像・ITストラテジスト試験の統計・職種別の賃金【2026年】";
const DESCRIPTION =
  "ITコンサルタントとは、企業の経営戦略にもとづいてITを活用した事業改革や情報システム戦略を策定・提案・推進する専門職です。IPAのITストラテジスト試験が示す対象者像と役割、令和4〜7年度の応募者数・合格率、賃金構造基本統計調査の職種別賃金を一次情報で整理します。";
const URL = "/knowledge/it-consultant/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "ITコンサルタントの定義" },
  { id: "role", label: "業務と役割（IPAの人材像）" },
  { id: "exam", label: "ITストラテジスト試験の統計" },
  { id: "wage", label: "職種別の賃金（賃金構造基本統計調査）" },
  { id: "difference", label: "SE・PMとの違い" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "ITコンサルタントとは簡単に言うと何をする仕事ですか？",
    a: "企業の経営課題を出発点に、ITを使ってどのように事業や業務を変えるかを考え、情報システム戦略やシステム化計画を策定・提案し、その実行を推進する仕事です。IPAはITストラテジスト試験を「CIOやCTO、ITコンサルタントを目指す方に最適」な試験と位置づけています。",
  },
  {
    q: "ITコンサルタントに必要な資格はありますか？",
    a: "業務に必須の資格はありません。関連する国家試験としてIPAのITストラテジスト試験があり、令和7年度春期は受験者5,586人に対して合格者836人、合格率15.0％でした。資格がなくても実務経験で評価されることは多いため、取得は知識の証明手段の一つとお考えください。",
  },
  {
    q: "ITコンサルタントの年収はどのくらいですか？",
    a: "ITコンサルタントだけを切り出した公的統計はありません。近い職種として、令和7年賃金構造基本統計調査の「システムコンサルタント・設計者」は、年収目安が約889万円（当サイト算出・平均年齢38.3歳）でした。企業別の実額は「ITコンサルタントの年収」のページで有価証券報告書をもとに整理しています。",
  },
  {
    q: "エンジニアからITコンサルタントに転職できますか？",
    a: "要件定義や業務分析、プロジェクト管理の経験は、ITコンサルタントの業務と重なる部分があります。一方で、経営層への提案や事業戦略の策定といった役割が求められるため、担当した工程と成果を具体的に説明できるよう準備することが重要です。進め方は「エンジニアからITコンサルへの転職」でご説明しています。",
  },
  {
    q: "ITストラテジスト試験は今後も受けられますか？",
    a: "IPAによると、2026年度はCBT方式により前期に実施し、現行の試験制度は2026年度の実施をもって終了し、2027年度から新試験制度に移行する予定です。受験を検討している方は、IPAの「試験制度の見直しについて」で最新情報をご確認ください。",
  },
];

export default function ItConsultantPage() {
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
          { name: "ITコンサルタントとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITコンサルタントとは｜IPAの人材像・ITストラテジスト試験の統計・職種別の賃金
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公的資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ITコンサルタントとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>ITコンサルタントとは、企業の経営戦略にもとづいて、ITを活用した事業改革・業務改革の基本戦略や情報システム戦略を策定・提案・推進する専門職です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・IPAはITストラテジスト試験を「CIOやCTO、ITコンサルタントを目指す方に最適」な試験と位置づけています</li>
              <li>・ITストラテジスト試験の令和7年度春期は、受験者5,586人・合格者836人・合格率15.0％でした</li>
              <li>・近い職種「システムコンサルタント・設計者」の年収目安は約889万円です（令和7年賃金構造基本統計調査から当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、ITコンサルタントの仕事を、IPA（情報処理推進機構）がITストラテジスト試験で示している対象者像と業務・役割にもとづいて説明します。あわせて、同試験の応募者数・合格率の推移と、賃金構造基本統計調査の職種別賃金を掲載します。ITコンサルタントという職種名だけを対象にした公的統計はないため、各数値の対象範囲を記載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["IPA「ITストラテジスト試験」試験区分ページ", "IPA「統計情報（応用情報技術者試験、高度試験、情報処理安全確保支援士試験）」推移表（令和7年度）", "厚生労働省「令和7年賃金構造基本統計調査」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサルタントの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ITコンサルタントは法令で定められた職業名ではなく、企業ごとに担当範囲が異なります。共通する考え方として参考になるのが、IPAのITストラテジスト試験の対象者像です。IPAは対象者像を「高度IT人材として確立した専門分野をもち、企業の経営戦略に基づいて、ビジネスモデルや企業活動における特定のプロセスについて、情報技術（IT）を活用して事業を改革・高度化・最適化するための基本戦略を策定・提案・推進する者」と定めています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            同じページでIPAは、この試験を「ビジネスを成功に導くCIOやCTO、ITコンサルタントを目指す方に最適」と説明しています。つまり、ITコンサルタントは「システムを作る人」というより、「経営とITを結びつけ、何をどの順番で変えるかを決めて推進する人」と理解すると実態に近いといえます。
          </p>
        </section>

        <section id="role" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業務と役割（IPAの人材像）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAはITストラテジストの業務と役割として、次の4つを挙げています（要約は当サイト）。ITコンサルタントの求人票に書かれる「戦略策定」「構想策定」「PMO」などの業務は、おおむねこのいずれかに当たります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">IPAが示す役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">求人票での呼ばれ方の例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">経営戦略の実現に向けた、ITを活用した事業戦略の策定と評価</td><td className="border border-slate-200 px-3 py-2">IT戦略策定・DX戦略立案</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">事業戦略の実現に向けた情報システム戦略と全体システム化計画の策定と評価</td><td className="border border-slate-200 px-3 py-2">システム化構想・ITグランドデザイン</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">個別システム化構想・計画の策定と評価</td><td className="border border-slate-200 px-3 py-2">要件定義支援・RFP作成・ベンダー選定</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">複数の個別案件からなる改革プログラムの実行管理</td><td className="border border-slate-200 px-3 py-2">PMO・プログラムマネジメント</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ITストラテジスト試験」2．業務と役割。右列は求人票でよく使われる表現を当サイトで対応づけたもので、IPAの資料に記載されたものではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            PMOの位置づけや必要な資格は<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link>、DX戦略の定義は<Link href="/knowledge/dx/" className="text-blue-600 hover:underline">DXとは</Link>でご説明しています。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITストラテジスト試験の統計</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの統計情報（推移表）から、ITストラテジスト試験（春期）の令和4〜7年度の値を抜き出しました。応募者数は4年連続で増えています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度（春期）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">応募者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">受験者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格率</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">令和7年度</td><td className="border border-slate-200 px-3 py-2 text-right">7,889人</td><td className="border border-slate-200 px-3 py-2 text-right">5,586人</td><td className="border border-slate-200 px-3 py-2 text-right">836人</td><td className="border border-slate-200 px-3 py-2 text-right">15.0％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">令和6年度</td><td className="border border-slate-200 px-3 py-2 text-right">7,486人</td><td className="border border-slate-200 px-3 py-2 text-right">5,327人</td><td className="border border-slate-200 px-3 py-2 text-right">842人</td><td className="border border-slate-200 px-3 py-2 text-right">15.8％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">令和5年度</td><td className="border border-slate-200 px-3 py-2 text-right">7,040人</td><td className="border border-slate-200 px-3 py-2 text-right">4,972人</td><td className="border border-slate-200 px-3 py-2 text-right">769人</td><td className="border border-slate-200 px-3 py-2 text-right">15.5％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">令和4年度</td><td className="border border-slate-200 px-3 py-2 text-right">6,378人</td><td className="border border-slate-200 px-3 py-2 text-right">4,450人</td><td className="border border-slate-200 px-3 py-2 text-right">660人</td><td className="border border-slate-200 px-3 py-2 text-right">14.8％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「統計情報（応用情報技術者試験、高度試験、情報処理安全確保支援士試験）」推移表（令和7年度・春期 全国）。合格率は合格者数÷受験者数（IPA記載値）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            試験は科目A-1（多肢選択式30問・50分）、科目A-2（多肢選択式25問・40分）、科目B-1（記述式・3問中2問解答・90分）、科目B-2（論述式・2問中1問解答・120分）で構成されています。2026年度はCBT方式により前期に実施し、2027年度から新試験制度に移行する予定です。資格としての評価や学習方法は<Link href="/cert/it-strategist/" className="text-blue-600 hover:underline">ITストラテジストは転職に効くか</Link>をご覧ください。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種別の賃金（賃金構造基本統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査では、ITコンサルタントは単独の職種として集計されていません。近い職種として「システムコンサルタント・設計者」と、比較のために「ソフトウェア作成者」の値を掲載します（令和7年・産業計・企業規模10人以上・男女計）。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">きまって支給する現金給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間賞与等</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント・設計者</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">54.21万円</td><td className="border border-slate-200 px-3 py-2 text-right">238.52万円</td><td className="border border-slate-200 px-3 py-2 text-right">約889万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td><td className="border border-slate-200 px-3 py-2 text-right">39.08万円</td><td className="border border-slate-200 px-3 py-2 text-right">109.51万円</td><td className="border border-slate-200 px-3 py-2 text-right">約578万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat）。「システムコンサルタント・設計者」にはシステム設計者も含まれるため、ITコンサルタントだけの値ではありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            上場しているコンサルティング会社・SIerの平均年間給与（有価証券報告書の実額）は、<Link href="/salary/it-consultant/" className="text-blue-600 hover:underline">ITコンサルタントの年収</Link>で比較しています。
          </p>
        </section>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SE・PMとの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な問い</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な成果物</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">ITコンサルタント</td><td className="border border-slate-200 px-3 py-2">経営課題に対して、ITで何をどの順番で変えるか</td><td className="border border-slate-200 px-3 py-2">IT戦略・システム化構想・投資計画・ロードマップ</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">PM（プロジェクトマネージャ）</td><td className="border border-slate-200 px-3 py-2">決まった目的のシステムを、予算・期限内にどう完成させるか</td><td className="border border-slate-200 px-3 py-2">プロジェクト計画・進捗管理・リスク管理</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">SE（システムエンジニア）</td><td className="border border-slate-200 px-3 py-2">要件を満たすシステムをどう設計・構築するか</td><td className="border border-slate-200 px-3 py-2">要件定義書・設計書・システム</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイトが職種の違いを整理したものです。実際の担当範囲は企業・案件ごとに異なります。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            エンジニアからITコンサルタントへの移り方は<Link href="/career/engineer-to-consultant/" className="text-blue-600 hover:underline">エンジニアからITコンサルへの転職</Link>、コンサル業界に強い転職エージェントは<Link href="/compare/consulting-agents/" className="text-blue-600 hover:underline">ITコンサル転職に強いエージェント</Link>でご紹介しています。
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
            <li>IPA「ITストラテジスト試験」：https://www.ipa.go.jp/shiken/kubun/st.html</li>
            <li>IPA「統計情報（応用情報技術者試験、高度試験、情報処理安全確保支援士試験）」推移表（令和7年度）：https://www.ipa.go.jp/shiken/reports/toukei.html</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITコンサルタントの年収", href: "/salary/it-consultant/" },
              { name: "エンジニアからITコンサルへの転職", href: "/career/engineer-to-consultant/" },
              { name: "ITストラテジストは転職に効くか", href: "/cert/it-strategist/" },
              { name: "PMOとは", href: "/knowledge/pmo/" },
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
