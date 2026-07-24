import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/cybozu/" },
  title: "サイボウズの転職難易度と年収は？平均719万円【2026年・有報】働き方・技術スタック・エンジニア転職",
  description:
    "サイボウズのエンジニア中途採用を有価証券報告書・公式技術発信の一次情報で解説。平均年収は全従業員平均で719万円(2025年12月期・有報／687万円=2024年12月期)。平均年齢は35〜36歳台。kintone/Garoonの技術スタック(Java/Go/TypeScript/React)、多様な働き方、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公式発信）" },
  { id: "salary", label: "年収データ（要確認注記あり）" },
  { id: "flow", label: "選考フローについて" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たサイボウズ" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "サイボウズ株式会社（証券コード4776・東証プライム）"],
  ["業種", "情報・通信（グループウェア／業務改善プラットフォーム）"],
  ["主要プロダクト", "kintone（業務アプリ基盤）／Garoon（グループウェア）など"],
  ["平均年収", "687万円（2024年12月期）／719万円（2025年12月期）※全従業員平均・提出会社単体（後述の要確認注記参照）"],
  ["平均年齢", "おおむね35〜36歳台（提出会社単体）"],
  ["本社所在地", "東京都中央区"],
  ["技術スタック", "Java／Go／TypeScript・React（公式の技術公開ページ・Cybozu Inside Outで発信）"],
];

const faqs = [
  { q: "サイボウズの平均年収はいくら？", a: "有価証券報告書に基づく提出会社（サイボウズ株式会社単体）の全従業員平均給与は、2024年12月期で687万円、2025年12月期で719万円という値が確認されています(出典により年度の対応が混在しているため、最新の確定値は提出済みの最新有価証券報告書でのご確認をおすすめします)。いずれも賞与を含む全従業員（エンジニア以外も含む）平均で、職種別・等級別の内訳は公式には開示されていません。" },
  { q: "サイボウズではどんな技術が使われている？", a: "公式の技術情報公開ページや技術ブログ「Cybozu Inside Out」によると、kintoneやGaroonなどの開発でJava・Go・TypeScript・Reactなどが使われています。サイボウズは技術発信が活発で、社外向けに使用技術を比較的オープンにしている点が特徴です。具体的な構成はプロダクト・チームにより異なります。" },
  { q: "サイボウズはエンジニアの中途採用を行っている？", a: "はい。サイボウズはエンジニアのキャリア採用を継続的に行っています。kintone・Garoonといった長期運用される自社SaaSプロダクトの開発・刷新を担う人材を募集しています。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "サイボウズの働き方の特徴は？", a: "サイボウズは「多様な働き方」を掲げる企業として知られ、働き方の選択肢が広いことが特徴とされています。具体的な制度内容は時期により変わるため、応募時に最新の制度を確認することをおすすめします。当ガイドでは制度の細部を断定せず、傾向として紹介しています。" },
  { q: "サイボウズの技術スタックは古い？モダン？", a: "kintone・Garoonは長く運用されている自社SaaSであり、長寿プロダクトの継続的な刷新が大きなテーマです。JavaやGo、フロントエンドのTypeScript/Reactなどが使われ、既存資産を保ちながらモダン化を進めるフェーズの開発が想定されます。レガシーとモダンの両面に向き合えるエンジニアに親和性があります。" },
  { q: "サイボウズの選考フローは？", a: "サイボウズは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容は募集職種により変わります。当ガイドでは出典のない面接質問リストや等級別年収表は掲載していません。最新の選考内容は応募時に確認してください。" },
  { q: "サイボウズは30代・40代でも転職できる？", a: "提出会社単体の平均年齢はおおむね35〜36歳台とされ、ミドル層が一定数いる組織です。長期運用SaaSの刷新には、設計・運用の経験を積んだ30代・40代のエンジニアの知見が活きやすい面があります。年齢よりも、Java/Go/TypeScript等の実務スキルとプロダクト志向が評価の鍵になります。" },
];

export default function CybozuCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="サイボウズ エンジニア転職ガイド" description="サイボウズへのエンジニア転職を有価証券報告書・公式技術発信の一次情報で解説。kintone/Garoonの技術スタック(Java/Go/TypeScript/React)、多様な働き方、30代40代の現実をまとめました。" url="/company/cybozu/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "サイボウズ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">サイボウズへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          サイボウズ株式会社へのエンジニア中途採用について、有価証券報告書と公式の技術発信（Cybozu Inside Out等）の一次情報をもとに、転職難易度・年収・技術スタック・働き方を中立にまとめました。kintone・Garoonという長く愛される自社SaaSを、Java/Go/TypeScript/Reactで刷新し続ける開発組織と、多様な働き方の文化を、ミドル層の視点で整理します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】サイボウズの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: サイボウズ株式会社（単体）の全従業員平均給与は687万円（2024年12月期）／719万円（2025年12月期）です（有価証券報告書、賞与を含む全従業員平均）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・全従業員平均で687万円（2024年12月期）・719万円（2025年12月期）（提出会社単体 有報）。エンジニア単独の数字ではありません。</li><li>・平均年齢はおおむね35〜36歳台（提出会社単体）。年度の対応に出典差があるため両年度を併記しています。</li><li>・職種別・等級別の年収は非開示。確定値は最新の有価証券報告書での確認を推奨します。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["サイボウズ 有価証券報告書", "サイボウズ 公式技術情報公開ページ／技術ブログ Cybozu Inside Out", "サイボウズ 公式採用サイト", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中（自社SaaS刷新×多様な働き方）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>kintone・Garoon</strong>という長寿の自社SaaSを刷新・拡張する開発が中核。<strong>Java／Go／TypeScript・React</strong>を公式に公開。</li>
              <li>・<strong>多様な働き方</strong>を掲げる文化で知られ、ライフスタイルとの両立を重視するミドル層と相性が良い。</li>
              <li>・年収は<strong>全従業員平均で687万円（2024年12月期）／719万円（2025年12月期）</strong>（後述の要確認注記参照）。エンジニア単独でなく全社員平均。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">レガシーとモダンの両面に向き合える設計・運用力と、プロダクトへの長期的な向き合い方が評価されやすい環境です。</p>
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
          <p className="text-xs text-slate-500">出典：サイボウズ「有価証券報告書」（提出会社＝サイボウズ株式会社単体の従業員データ）、サイボウズ公式の技術情報公開ページ・技術ブログ「Cybozu Inside Out」、IRBANK集計。平均年収は全従業員平均（賞与含む）で、職種別の内訳は非開示です。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">長寿の自社SaaSを刷新し続ける開発</h3><p className="text-sm text-petrol-deep">kintone・Garoonは長く運用される自社プロダクトです。既存資産を保ちながら、アーキテクチャや技術スタックをモダン化し続けることが大きなテーマで、レガシーとモダンの両面に向き合うエンジニアリングが中核に置かれています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">活発な技術発信（オープンな文化）</h3><p className="text-sm text-petrol-deep">サイボウズは技術ブログ「Cybozu Inside Out」や技術情報公開ページを通じて、使用技術や開発の取り組みを社外に積極的に発信しています。応募前に開発の実態をある程度つかめる点は、ミドル層の転職判断にとって大きな利点です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">多様な働き方を掲げる文化</h3><p className="text-sm text-petrol-deep">サイボウズは「多様な働き方」を掲げる企業として知られています。働き方の選択肢が広いことが特徴とされ、ライフスタイルとの両立を重視するエンジニアに親和性があります（具体的な制度内容は時期により変わるため応募時に確認を）。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式発信）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はサイボウズの公式技術情報公開ページ・技術ブログ「Cybozu Inside Out」で発信されている情報に基づきます。サイボウズは使用技術を比較的オープンにしている数少ない企業です。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Java</strong>：kintone・Garoonなど自社SaaSのバックエンドで使用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go</strong>：新しいコンポーネント・基盤領域などで採用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>TypeScript・React</strong>：フロントエンド開発で使用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>具体的な構成・バージョン・周辺ツールはプロダクトやチームにより異なります。詳細は各募集要項・技術ブログをご確認ください。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：サイボウズ公式の技術情報公開ページ、技術ブログ「Cybozu Inside Out」。チーム・プロダクトごとの詳細構成は変動します。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（要確認注記あり）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-amber-900 font-bold mb-2">年度の対応に注意（要確認）</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              サイボウズの提出会社（単体）全従業員平均給与は、<strong>687万円（2024年12月期）</strong>と<strong>719万円（2025年12月期）</strong>という2つの値が確認されています。出典により年度の対応が混在しているため、当ガイドでは<strong>両年度を併記</strong>します。最新の確定値は、提出済みの<strong>最新の有価証券報告書</strong>でご確認ください。いずれも賞与を含む全従業員平均で、エンジニア単独の数字ではありません。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（提出会社単体・全従業員平均）</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年収</th></tr></thead>
              <tbody>
                <tr className="bg-white"><td className="px-4 py-3 text-slate-600 border-b border-slate-200">2024年12月期</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">687万円</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-3 text-slate-600 border-b border-slate-200">2025年12月期</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">719万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上記はいずれも<strong>提出会社（サイボウズ株式会社単体）の全従業員平均</strong>で、エンジニア以外も含みます。職種別・等級別の年収は公式に開示されていないため、当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：サイボウズ「有価証券報告書」、IRBANK集計。年度の対応に出典差があるため両年度併記とし、確定値は最新の有価証券報告書での確認を推奨します。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>サイボウズは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種や時期により変動します。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、サイボウズについて<strong>「働き方の自由度・柔軟性への評価が高い」「オープンな社風・情報共有の文化」</strong>といった傾向の声が見られます。一方で、<strong>「給与水準は突出して高いわけではない」「長期運用プロダクトゆえの技術的な負債との向き合い」</strong>といった指摘も見られます。評価は部署・職種・時期により異なります。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たサイボウズ</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢はおおむね35〜36歳台</strong>とされ、ミドル層が一定数いる組織です。長期運用される自社SaaSの刷新には、設計・運用・チーム開発の経験を積んだ30代・40代の知見が活きやすく、即戦力としての価値を発揮しやすい環境といえます。</p>
            <p>30代・40代のエンジニアにとって、サイボウズは「<strong>長寿SaaSの刷新に腰を据えて取り組める×働き方の自由度が高い</strong>」という組み合わせが魅力です。育児・介護などライフイベントとの両立を重視するミドル層にとって、多様な働き方の文化は大きな判断材料になります。一方で、年収は全社員平均で687〜719万円台と突出して高いわけではない点、長期運用プロダクト特有の技術的負債と向き合う必要がある点は、事前に理解しておきたいところです。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/skill/java/" className="text-petrol hover:underline">Javaエンジニアの転職</Link>、<Link href="/skill/go/" className="text-petrol hover:underline">Goエンジニアの転職</Link>、<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScriptエンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Java/Go/TypeScript/Reactでの自社SaaS開発経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>長寿プロダクトの刷新・モダン化に腰を据えて取り組みたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>多様な働き方・ライフイベントとの両立を重視する</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>オープンな技術発信・情報共有の文化を好む</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>年収の最大化を最優先したい（全社員平均は突出して高くない）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>レガシー資産との向き合いを避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>常に最新技術だけを触り続けたい志向が極端に強い</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>開発の実務経験がなく未経験参入を狙う</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サイボウズ転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化で自社開発SaaSの求人提案に強い。技術面接対策のサポートも。" }, { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界に特化。自社開発企業の求人提案に強み。提案スピードが速い。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。SaaS・自社開発の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">サイボウズへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">自社開発SaaSの求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "freeeの転職ガイド", href: "/company/freee/" }, { name: "マネーフォワードの転職ガイド", href: "/company/moneyforward/" }, { name: "SmartHRの転職ガイド", href: "/company/smarthr/" }, { name: "Javaエンジニアの転職", href: "/skill/java/" }, { name: "Goエンジニアの転職", href: "/skill/go/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
