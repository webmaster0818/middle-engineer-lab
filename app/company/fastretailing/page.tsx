import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/fastretailing/" },
  title: "ファーストリテイリングの年収とITエンジニア転職の現実【2026年】",
  description:
    "ユニクロを擁するファーストリテイリングのエンジニア中途採用を有価証券報告書・公式採用の一次情報で解説。平均年収約1,251万円(2025年8月期)の留意点、情報製造小売業のEC/SCM変革、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術領域（公開情報の範囲）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たファストリ" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ファーストリテイリング（証券コード9983・東証プライム）"],
  ["業種", "「情報製造小売業」アパレル製造小売（ユニクロ／GU等）"],
  ["平均年収", "約1,251万円（2025年8月期・提出会社単体／全従業員平均・賞与含む）※店舗社員含む全社員平均"],
  ["平均年齢", "38.5歳（2025年8月期・提出会社単体）"],
  ["IT領域", "EC・サプライチェーン（SCM）・店舗システムのデジタル化／クラウド基盤"],
  ["公式年収レンジ例", "システム開発・クラウド基盤などの職種で580〜1,300万円のレンジ提示例あり"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "約1,251万円"],
  ["平均年齢", "38.5歳"],
  ["対象年度", "2025年8月期（有価証券報告書）"],
  ["集計範囲", "店舗社員を含む全社員平均（エンジニア単独でない）"],
  ["IT職の公式レンジ例", "システム開発・クラウド基盤等で580〜1,300万円の提示例"],
];

const faqs = [
  { q: "ファーストリテイリングはエンジニアの中途採用を行っている？", a: "はい。ファーストリテイリングは「情報製造小売業」への変革を掲げ、EC・サプライチェーン・店舗システムなどのデジタル領域でエンジニア・IT人材の中途採用を継続的に行っています。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "ファーストリテイリングの平均年収はいくら？", a: "2025年8月期の有価証券報告書によると、提出会社（株式会社ファーストリテイリング単体）の平均年間給与は約1,251万円、平均年齢38.5歳です。ただしこれは賞与を含む全従業員の平均で、店舗社員を含む全社員平均であり、エンジニア単独の年収ではない点に強く留意する必要があります。職種別・等級別の内訳は公式に開示されていません。" },
  { q: "ファーストリテイリングのIT・エンジニア職の年収レンジは？", a: "ファーストリテイリングの公式採用では、システム開発・クラウド基盤などの職種で580〜1,300万円といったレンジが提示される例が確認できます。なお、転職集計サイトでITエンジニア約1,072万円とする値も見られますが、これは公式値ではない参考値です。当ガイドでは公式レンジ例を優先しています。" },
  { q: "ファーストリテイリングで使われている技術スタックは？", a: "ファーストリテイリングは具体的な使用言語・フレームワークを一覧で大々的に公開している企業ではありません。EC・サプライチェーン・店舗システムのデジタル化やクラウド基盤の構築が中心領域であることは公開されていますが、具体的な言語表は創作せず、応募する職種の募集要項で確認することをおすすめします。" },
  { q: "ファーストリテイリングの選考フローは？", a: "ファーストリテイリングは中途採用の詳細な選考フローを公式に網羅的には公開していません。一般的には書類選考→複数回の面接→内定という流れが想定されますが、回数・形式は職種・時期により異なります。創作した固定フローは掲載していないため、最新は公式採用ページや担当エージェントでご確認ください。" },
  { q: "「情報製造小売業」とはどういう意味？", a: "ファーストリテイリングが掲げる事業ビジョンで、商品の企画・生産・物流・販売をデジタルでつなぎ、顧客の需要と供給をリアルタイムに最適化する小売モデルを指します。ECとサプライチェーン、店舗システムを横断するデジタル変革（DX）が中核にあり、エンジニアはこの変革をリードする役割を担います。" },
  { q: "ファーストリテイリングへの転職で有利な経験は？", a: "EC・大規模Webサービス、サプライチェーン・在庫・物流システム、店舗・POS系システム、クラウド基盤の構築・運用といった領域の経験が親和性が高いと考えられます。グローバル展開を前提とした大規模システムの設計経験や、ビジネスサイドと連携してDXを推進した経験も評価されやすい傾向があります。" },
  { q: "ファーストリテイリングのエンジニア転職は未経験でも可能？", a: "中途採用は即戦力の経験者採用が基本です。各募集要項に必須スキルが明示されており、完全未経験からの参入は現実的ではありません。まずはEC・SCM・クラウドなどの実務経験を積むのが一般的な道筋です。" },
];

export default function FastRetailingCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ファーストリテイリング エンジニア転職ガイド" description="ファーストリテイリング（ユニクロ）へのエンジニア転職を有価証券報告書・公式採用の一次情報で解説。平均年収約1,251万円(2025年8月期)の留意点、情報製造小売業のDXをまとめました。" url="/company/fastretailing/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ファーストリテイリング" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ファーストリテイリング（ユニクロ）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社ファーストリテイリングへのエンジニア中途採用について、有価証券報告書と公式採用ページの一次情報をもとに、転職難易度・年収・技術領域・選考の実態を中立にまとめました。ユニクロ・GUを擁し「情報製造小売業」への変革を掲げる同社は、EC・サプライチェーン・店舗システムのデジタル化をリードできる希少な事業会社です。年収の見方には重要な留意点があるため、30代・40代が押さえるべき現実を解説します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ファーストリテイリングの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 有価証券報告書（2025年8月期・提出会社単体）の平均年間給与は約1,251万円ですが、これは店舗社員を含む全社員平均です。IT職は公式採用で580〜1,300万円のレンジ提示例が確認できます。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・有報の平均年収 約1,251万円（2025年8月期・提出会社単体／全従業員平均・賞与含む、平均年齢38.5歳）</li><li>・システム開発・クラウド基盤などのIT職は公式採用で580〜1,300万円のレンジ提示例</li><li>・平均1,251万円は店舗社員を含む全社員平均でありエンジニア単独の年収ではない点に強く留意</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["ファーストリテイリング 有価証券報告書（2025年8月期）", "ファーストリテイリング 公式採用サイト", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（事業会社のDXをリードできる経験者向け）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>「情報製造小売業」への変革</strong>。EC・サプライチェーン・店舗システムを横断するデジタル変革をビジネスとともにリードできる人に向く。</li>
              <li>・有報の平均年収は約1,251万円（2025年8月期・単体）だが、これは<strong>店舗社員を含む全社員平均</strong>でありエンジニア単独ではない点に強く留意。IT職は公式に<strong>580〜1,300万円</strong>のレンジ提示例。</li>
              <li>・グローバル展開を前提とした<strong>大規模システム</strong>に関われる。ベンダー任せでなく事業会社の内側でDXを推進したい人に魅力。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、純粋な技術特化で最新スタックの探求のみを望む人や、平均1,251万円をそのままエンジニアの想定年収と捉えてしまう人は、実態とのギャップに注意が必要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：ファーストリテイリング「有価証券報告書」2025年8月期（提出会社＝株式会社ファーストリテイリング単体の従業員データ）、IRBANK集計、ファーストリテイリング公式採用サイト。平均年収は店舗社員を含む全社員平均です。最新値は各IR資料・採用ページをご確認ください。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">「情報製造小売業」への変革をリード</h3><p className="text-sm text-petrol-deep">商品の企画・生産・物流・販売をデジタルでつなぎ、需要と供給をリアルタイムに最適化する小売モデルへの変革を掲げています。エンジニアはこの変革の中核を担い、ベンダー任せではなく事業会社の内側からDXを推進する立場になります。ビジネスと技術の両面に向き合える人に適した環境です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">EC・SCM・店舗システムの大規模領域</h3><p className="text-sm text-petrol-deep">グローバルに展開するユニクロ・GUの規模感で、EC、サプライチェーン（在庫・物流）、店舗・POSシステムといった広い領域を扱います。大規模かつ多国展開を前提としたシステムに関われる点は、事業会社のスケールならではの魅力です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">グローバル環境</h3><p className="text-sm text-petrol-deep">世界規模で事業を展開しているため、システムもグローバル前提で設計・運用されます。国を跨いだプロジェクトや多拠点連携の経験が活きる場面が多く、グローバルなキャリアを志向するエンジニアに適しています。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">ファーストリテイリングは、具体的な使用言語・フレームワークを一覧で大々的に公開している企業ではありません。確認できない言語表は創作せず、公開されている技術「領域」のみを示します。具体的なスタックは応募職種の募集要項でご確認ください。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>EC・大規模Webサービス</strong>：オンラインストアの開発・運用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サプライチェーン（SCM）</strong>：在庫・物流・需給最適化システム</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>店舗システム</strong>：POS・店舗オペレーションのデジタル化</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド基盤</strong>：上記を支えるインフラ・データ基盤</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ファーストリテイリング 公式採用サイトの職種・領域説明。具体的な言語・フレームワークは公式に一覧公開されていないため、本ガイドでは創作せず領域のみ記載しています。小売・流通のIT変革については<Link href="/industry/retail/" className="text-petrol hover:underline">小売・流通業界の転職</Link>もあわせてご覧ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容（2025年8月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はファーストリテイリングの<strong>有価証券報告書（2025年8月期）</strong>に記載された提出会社単体の数値です。ここで最も重要なのは、<strong>この約1,251万円は店舗社員を含む全社員平均</strong>であり、エンジニア単独の年収ではないという点です。エンジニアの想定年収としては、公式採用で確認できる<strong>システム開発・クラウド基盤などの580〜1,300万円</strong>のレンジ例の方が実態に近い参考値になります。なお転職集計サイトでITエンジニア約1,072万円とする値もありますが、これは公式値ではない参考値です。当ガイドでは推測の等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：ファーストリテイリング「有価証券報告書」2025年8月期、IRBANK集計、公式採用サイトの職種別レンジ例。年代別の相場感は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>を参照してください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">ファーストリテイリングは中途採用の詳細な選考フローを公式に網羅的には公開していません。創作した固定フローは掲載せず、一般的な大手事業会社の中途採用で想定される大枠のみを示します。</p>
          <ol className="space-y-3">
            {[
              ["STEP 1", "書類選考", "公式採用ページまたはエージェント経由で応募。職務経歴・実績を確認。"],
              ["STEP 2", "面接（複数回）", "技術面・ビジネス理解・カルチャーフィットを含む複数回が想定される。回数・形式は職種・時期で変動。"],
              ["STEP 3", "内定", "条件提示。具体的な選考期間は公式に明示されていない。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">注：上記は一般的な想定であり、ファーストリテイリング固有の確定フローではありません。最新は公式採用ページ・担当エージェントでご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開情報と口コミプラットフォームの傾向から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>EC・SCM・店舗・クラウドなど該当領域の大規模システム経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>ビジネスサイドと連携してDXを推進する当事者意識</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>グローバル・多拠点を前提としたシステム設計への理解</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>スピードと変化に向き合うカルチャーへの適応力</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、ファーストリテイリングについて<strong>「事業のスケールが大きくグローバルに挑戦できる」「成長機会が多く裁量を持てる」「成果が評価される実力主義」</strong>といった声が見られる一方、<strong>「変化のスピードが速く業務量・プレッシャーが大きい」「スピード感に適応できるかで評価が分かれる」</strong>といった指摘も見られます。挑戦と成長を重視する文化である一方、その強度を許容できるかが定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たファーストリテイリング</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のエンジニアにとって、ファーストリテイリングの「事業会社の内側からEC・SCM・店舗のDXをリードする」役割は、ミドル層の経験が最も活きるフィールドです。技術だけでなくビジネスと組織を動かす力が求められるため、複数のプロジェクトや部門連携を経験してきたミドルの総合力が直接価値になります。グローバル規模の大規模システムに関われる機会は、事業会社では希少です。</p>
            <p>年収の見方には特に注意が必要です。有報の平均約1,251万円は<strong>店舗社員を含む全社員平均</strong>であり、これをそのままエンジニアの想定年収と捉えると実態とずれます。IT職としては公式の580〜1,300万円のレンジ例を基準に、自分の経験に対する提示を個別に確認・交渉することが重要です。また、変化のスピードが速い文化のため、生活基盤が固まった40代では働き方の強度を事前に見極めることをおすすめします。</p>
            <p>転職活動では、ミドル層の市場価値・年収交渉の観点も押さえておきたいところです。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>や<Link href="/industry/retail/" className="text-petrol hover:underline">小売・流通業界の転職</Link>、<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>EC・SCM・店舗・クラウドの大規模システム経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>事業会社の内側からDXをリードしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>グローバル・大規模なビジネスに挑戦したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>技術とビジネスの両面で価値を出せる</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>純粋な技術探求・最新スタックのみを志向する</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>変化のスピードや業務強度を避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>平均1,251万円をエンジニア想定年収と誤解している</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>ビジネス・組織への関与を負担に感じる</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ファーストリテイリング転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス向けスカウト型。事業会社のDX・上位ポジションに出会いやすい。" }, { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収求人に強い。EC・基盤系の求人提案と面接対策が受けられる。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。大手事業会社のIT求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ファーストリテイリングへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手事業会社のDX・IT求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "トヨタ自動車の転職ガイド", href: "/company/toyota/" }, { name: "ソニーグループの転職ガイド", href: "/company/sony/" }, { name: "日立製作所の転職ガイド", href: "/company/hitachi/" }, { name: "パナソニックの転職ガイド", href: "/company/panasonic/" }, { name: "小売・流通業界の転職", href: "/industry/retail/" }, { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" }, { name: "ZOZOの転職ガイド", href: "/company/zozo/" }, { name: "楽天グループの転職ガイド", href: "/company/rakuten/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }, { name: "市場価値の把握", href: "/knowledge/market-value/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
