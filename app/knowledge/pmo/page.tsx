import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "PMOとは｜PMBOKの定義・PMとの違い・IPA試験とPMPの要件比較【2026年】";
const DESCRIPTION =
  "PMO（Project Management Office）とは、プロジェクトに関連したガバナンス・プロセスを標準化し、資源・方法論・ツールの共有を促進するマネジメント構造です。PMBOKガイドの定義、PMとの役割の違い、IPAプロジェクトマネージャ試験とPMP資格の要件を公式情報で比較します。";
const URL = "/knowledge/pmo/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "PMOの定義" },
  { id: "role", label: "PMOの主な業務" },
  { id: "pm", label: "PMとPMOの違い" },
  { id: "cert", label: "IPA試験とPMPの要件比較" },
  { id: "career", label: "30代・40代のキャリアとPMO" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "PMOとは簡単に言うと何ですか？",
    a: "組織の中でプロジェクトの進め方を標準化し、複数のプロジェクトを横断的に支援・管理する部門や仕組みです。PMBOKガイド第6版では「プロジェクトに関連したガバナンス・プロセスを標準化し、資源、方法論、ツールおよび技法の共有を促進するマネジメント構造」と定義されています（PMI日本支部の資料による）。",
  },
  {
    q: "PMOとPM（プロジェクトマネージャー）の違いは何ですか？",
    a: "PMは個別のプロジェクトの目的達成に責任を負い、計画・要員・予算・品質を管理します。PMOは組織全体の視点から、プロジェクト管理の標準化、進捗・課題の把握、ツールや教育の整備などを通じてPMとプロジェクトを支援します。PMOの権限は組織によって異なり、支援中心の形から、プロジェクトを直接管理する形まであります。",
  },
  {
    q: "PMOに資格は必要ですか？",
    a: "PMOの業務に必須の資格はありません。プロジェクトマネジメントの知識を示す資格としては、IPAのプロジェクトマネージャ試験（国家試験）や、PMIのPMP資格があります。PMPは受験に学歴に応じたプロジェクトマネジメント経験（2〜5年）と35時間の研修（または有効なCAPM資格）が求められます。",
  },
  {
    q: "IPAのプロジェクトマネージャ試験は今後どうなりますか？",
    a: "IPAは、現行の試験制度を2026年度の試験実施をもって終了し、2027年度から新試験制度に移行する予定と公表しています。2026年度はCBT方式で後期に実施されます。受験を検討する際は、IPAの公式ページで最新情報をご確認ください。",
  },
  {
    q: "PMOの経験は転職でどのように評価されますか？",
    a: "評価のされ方は求人によって異なります。複数プロジェクトの進捗管理、報告の仕組みづくり、品質・リスク管理の標準化などの経験は、PMやITコンサルタント、事業会社のIT部門の求人で説明しやすい実績です。事務的な資料作成が中心だった場合は、判断や改善に関わった範囲を具体的に整理しておくことが重要です。",
  },
];

export default function PmoPage() {
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
          { name: "PMOとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PMOとは｜PMBOKの定義・PMとの違い・IPA試験とPMPの要件比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式情報の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】PMOとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>PMO（Project Management Office）とは、プロジェクトに関連したガバナンス・プロセスを標準化し、資源・方法論・ツールおよび技法の共有を促進するマネジメント構造です（PMBOKガイド第6版の定義）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・PMが個別プロジェクトに責任を負うのに対し、PMOは組織横断でプロジェクトを支援・管理します</li>
              <li>・PMOの権限は、支援中心の形からプロジェクトを直接管理する形まで、組織によって異なります</li>
              <li>・関連資格のPMPは、学士以上で3年のプロジェクトマネジメント経験と35時間の研修が受験要件です（PMI公式）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、PMOの定義をPMI（プロジェクトマネジメント協会）の資料にもとづいて説明し、PMとの役割の違いを整理します。あわせて、プロジェクトマネジメントの知識を示す代表的な資格であるIPAのプロジェクトマネージャ試験とPMIのPMP資格について、公式情報を当サイトで同じ項目にそろえて比較します。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["PMI日本支部「世界のPMO動向」（2025年6月）", "PMI Learning Library", "PMI「PMP Certification」", "IPA プロジェクトマネージャ試験"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMOの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMI日本支部の講演資料「世界のPMO動向」（2025年6月）では、PMBOKガイド第6版（2017年）におけるPMOの定義として「プロジェクトに関連したガバナンス・プロセスを標準化し、資源、方法論、ツールおよび技法の共有を促進するマネジメント構造」を紹介しています。同資料によると、PMBOKガイド第7版（2021年）では付属文書X3の5ページにわたり、PMOの形態や持つべき特性が記述されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            PMIの論文（PMI Learning Library）が引用するPMBOKガイド第5版の定義では、PMOの責任範囲は「プロジェクトマネジメントの支援の提供」から「1つ以上のプロジェクトの直接的なマネジメント」まで幅があるとされています。
          </p>
          <p className="text-xs text-slate-500 mt-2">※ PMBOKガイドの本文は会員向けのため、本記事ではPMI・PMI日本支部の公開資料による引用を掲載しています。</p>
        </section>

        <section id="role" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMOの主な業務</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA/SECの資料（2005年）は、PMOを「自組織のプロジェクトを横断的・長期的に支援する部門」と説明し、主な活動として次の4つを挙げています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>プロジェクトマネジメントのスキルの教育</li>
            <li>ツールの導入・整備・改善</li>
            <li>プロジェクトの実績データの収集・分析</li>
            <li>プロセスの標準化</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            実際の求人では、これに加えて進捗・課題・リスクの集約と経営層への報告、会議体の運営、ベンダー管理などがPMOの業務として募集されることがあります。業務範囲は企業やプロジェクトによって大きく異なるため、求人票の業務内容と権限の範囲を確認することが重要です。
          </p>
        </section>

        <section id="pm" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMとPMOの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">PM（プロジェクトマネージャー）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">PMO</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">対象</td><td className="border border-slate-200 px-3 py-2">個別のプロジェクト</td><td className="border border-slate-200 px-3 py-2">組織内の複数のプロジェクト</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">責任</td><td className="border border-slate-200 px-3 py-2">プロジェクトの目的の達成（計画・要員・予算・品質）</td><td className="border border-slate-200 px-3 py-2">プロジェクト管理の標準化と支援（組織によっては直接管理）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">関わる期間</td><td className="border border-slate-200 px-3 py-2">プロジェクトの開始から終了まで</td><td className="border border-slate-200 px-3 py-2">横断的・長期的</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 総務省の日本標準職業分類は、情報処理プロジェクトマネージャを「システム開発プロジェクトの責任者としてプロジェクト計画を作成し、必要となる要員や資源を確保し、予算、要求品質等について責任を持ち、プロジェクト全体を管理する仕事」と説明しています。PMO欄はIPA/SECおよびPMI資料にもとづく当サイトの整理です。</p>
        </section>

        <section id="cert" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IPA試験とPMPの要件比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プロジェクトマネジメントの知識を示す代表的な資格について、各公式ページの記載を当サイトで同じ項目にそろえました（2026年11月24日確認）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">IPA プロジェクトマネージャ試験</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">PMI PMP</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">種類</td><td className="border border-slate-200 px-3 py-2">国家試験（情報処理技術者試験の高度試験）</td><td className="border border-slate-200 px-3 py-2">PMIの国際資格</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">対象者・受験要件</td><td className="border border-slate-200 px-3 py-2">対象者像：組織の戦略の実現に寄与することを目的とするシステム開発プロジェクトにおいて、プロジェクトマネジメント業務を単独で又はチームの一員として担う者</td><td className="border border-slate-200 px-3 py-2">高卒等は5年、準学士・専門学校は4年、学士以上は3年、PMI GAC認定課程の学位は2年のプロジェクトマネジメント経験。加えて35時間の研修または有効なCAPM資格</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">試験の形式</td><td className="border border-slate-200 px-3 py-2">2026年度はCBT方式で後期に実施</td><td className="border border-slate-200 px-3 py-2">180問・240分</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">受験料</td><td className="border border-slate-200 px-3 py-2">IPA公式ページでご確認ください</td><td className="border border-slate-200 px-3 py-2">PMI会員 $405、一般 $655</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">今後の変更</td><td className="border border-slate-200 px-3 py-2">現行制度は2026年度で終了し、2027年度から新試験制度に移行する予定</td><td className="border border-slate-200 px-3 py-2">2026年12月以降、講師付きの研修はPMI認定トレーニングパートナー等が提供するものに限られる</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代のキャリアとPMO</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMOは、開発の実務経験を持つエンジニアが、プロジェクト管理や組織横断の業務へ役割を広げる際の選択肢の一つです。SIerやITコンサルティング会社では、顧客企業のPMOを支援する案件も募集されています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>開発・リーダー経験がある場合：技術的なリスクの見極めや見積もりの妥当性確認ができる点を伝える</li>
            <li>PMを目指す場合：複数プロジェクトの比較から得た管理の型を、自らのプロジェクト運営に生かせる点を伝える</li>
            <li>事業会社のIT部門を目指す場合：ベンダー管理や社内調整の経験を具体的に示す</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            PMへのキャリアの進め方は<Link href="/career/se-to-pm/" className="text-blue-600 hover:underline">SEからPMへのキャリアチェンジ</Link>、コンサルティング領域への転職は<Link href="/career/engineer-to-consultant/" className="text-blue-600 hover:underline">エンジニアからITコンサルへの転職</Link>をご覧ください。
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
            <li>PMI日本支部「世界のPMO動向」（2025年6月24日）：https://www.pmi-japan.org/wp-content/uploads/2025/07/02_Global-PMO-Trends.pdf</li>
            <li>PMI Learning Library「PMO evolution」：https://www.pmi.org/learning/library/pmo-evolution-9645</li>
            <li>PMI「Project Management Professional (PMP)」：https://www.pmi.org/certifications/project-management-pmp</li>
            <li>IPA プロジェクトマネージャ試験：https://www.ipa.go.jp/shiken/kubun/pm.html</li>
            <li>IPA/SEC「組込みソフトウェア開発におけるプロジェクトマネジメント導入の勧め」（2005年）：https://www.ipa.go.jp/archive/publish/qv6pgp0000000wz3-att/000005105.pdf</li>
            <li>総務省「日本標準職業分類」：https://www.soumu.go.jp/main_content/000661290.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SEからPMへのキャリアチェンジ", href: "/career/se-to-pm/" },
              { name: "エンジニアからITコンサルへの転職", href: "/career/engineer-to-consultant/" },
              { name: "SIerとは", href: "/knowledge/sier/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
