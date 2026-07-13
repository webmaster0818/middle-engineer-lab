import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/accenture/" },
  title: "アクセンチュア エンジニア転職ガイド【2026年】選考・年収",
  description:
    "アクセンチュアへのエンジニア転職を解説。テクノロジー部門の採用領域、公式採用ページの選考フロー、口コミ傾向、30代・40代の狙い目を出典付きで整理。日本法人は有報なしのため年収は公式情報・口コミ集計値で説明します。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんな人向きか" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "採用領域・技術スタック" },
  { id: "salary", label: "年収データ（注意点あり）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basic: [string, string][] = [
  ["企業名", "アクセンチュア株式会社（日本法人）"],
  ["業種", "テクノロジーコンサルティング・ITサービス"],
  ["上場区分", "日本法人は非上場（米Accenture plcはニューヨーク証券取引所上場）"],
  ["平均年収", "有価証券報告書なし（後述：公式情報・口コミ集計値で説明）"],
  ["グローバル規模", "世界70万人超の組織（公式採用ページの記載に基づく）"],
  ["本社所在地（日本）", "東京都港区"],
  ["主要採用領域", "テクノロジー／ソフトウェアエンジニアリング／クラウド／データ&AI／SAP／Salesforce／セキュリティ"],
];

const features = [
  {
    h: "大規模DXプロジェクトに上流から参画",
    p: "日本の大手企業のDX推進を多数支援し、戦略立案からシステム構築・運用まで一気通貫で関わるのが特徴です。技術力に加えてビジネス視点が身につき、数十億〜数百億円規模のプロジェクトも珍しくありません。",
  },
  {
    h: "テクノロジー部門を独立した職種群として募集",
    p: "公式採用ページでは、テクノロジー／ソフトウェアエンジニアリング／クラウド／AI・データサイエンス／SAP／Salesforce／セキュリティ／フロントエンジニアなどを明確に職種領域として整理。エンジニア職は戦略コンサル職とは別フローで募集されます。",
  },
  {
    h: "グローバル規模の研修・キャリアパス",
    p: "世界70万人超の組織で、グローバル共通の研修プログラムが充実。海外プロジェクトやオフィス間の異動の機会もあり、国際的なキャリアを築きやすい環境です（公式採用ページの記載に基づく）。",
  },
];

const flow = [
  "Web応募（公式採用ページ／エージェント経由）",
  "書類選考",
  "面接 2〜3回（エンジニア職は能力・経験・人柄を確認。戦略系はケース面接あり）",
  "オファー面談（職位・年俸・入社時期など条件提示）",
  "内定 → 入社",
];

const faqs = [
  {
    q: "アクセンチュアのエンジニア面接にケース面接はある？",
    a: "公式採用ブログ・転職メディアによると、ケース面接の有無は職種に依存します。戦略コンサル系ではケース面接が実施される一方、エンジニア職（ソリューション・ネットワーク・SAP等）では実施されないケースが多いとされています。出典：アクセンチュア公式採用ブログ、tenshoku-base等の転職メディア。",
  },
  {
    q: "アクセンチュアの平均年収はいくら？",
    a: "日本法人は非上場で有価証券報告書がないため、公的な全社員平均年収は確認できません。口コミプラットフォーム集計値では平均年収が高水準とされますが、これは出典・対象が異なる参考値です。実際の提示額はオファー面談で示される職位別の年俸で確認するのが確実です。",
  },
  {
    q: "選考フローはどうなっている？",
    a: "公式採用情報・転職メディアによると、Web応募→書類選考→面接2〜3回→オファー面談→入社という流れが一般的です。最終面接後、1週間程度でオファー連絡が来ることが多いとされています。",
  },
  {
    q: "テクノロジー部門とは？",
    a: "システム開発・インフラ構築・クラウド・データ&AI・パッケージ導入（SAP/Salesforce）などを担う領域です。Strategy & Consulting部門と協働してDXプロジェクトを推進します。",
  },
  {
    q: "研修制度は？",
    a: "口コミプラットフォームでは、入社後の研修やグローバル共通プログラム、資格取得支援が充実しているとの声が多く見られます。20代の成長環境への評価が高い傾向があります。",
  },
  {
    q: "ワークライフバランスは改善された？",
    a: "働き方改革「Project PRIDE」（2015年開始）の取り組みにより労働時間が改善されたとされる一方、口コミでは「プロジェクトによる」「体力次第」という声も見られます。配属プロジェクト次第という傾向です。",
  },
  {
    q: "SIer・事業会社からの転職でも通用する？",
    a: "クラウド/DXの実務経験や業界ドメイン知識があれば十分に評価されます。SIerからの転職を考える人は「SIerからWeb系への転職」の整理も比較材料になります。",
  },
  {
    q: "どのエージェントを使うべき？",
    a: "コンサル・ハイクラス求人に強いビズリーチ、IT特化のレバテックキャリア、求人網羅性の高いdoda(IT)の併用が現実的です。",
  },
];

export default function AccentureCompanyPage() {
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
      <ArticleJsonLd title="アクセンチュア エンジニア転職ガイド" description="アクセンチュアへのエンジニア転職を解説。テクノロジー部門の採用領域、選考フロー、口コミ傾向を出典付きでまとめました。" url="/company/accenture/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "salesforceの転職ガイド", href: "/skill/salesforce/" }, { name: "SAPの転職ガイド", href: "/skill/sap/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "アクセンチュア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">アクセンチュア エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 世界最大級のテクノロジーコンサルティング企業</p>
        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】アクセンチュアの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: アクセンチュア日本法人は非上場で有価証券報告書がなく、公的な全社員平均年収は公表されていません。口コミ集計値では高水準とされますが、出典・対象が異なる参考値です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・日本法人は非上場・有報なしのため公式平均年収は確認できません（米Accenture plcはニューヨーク証券取引所上場）。</li><li>・職位（アナリスト／コンサルタント／マネージャー等）に応じた年俸制で、提示額はオファー面談で確認するのが確実です。</li><li>・参考としてIT職全般はレバテック2025年公表で30代約499万円・40代約618万円。アクセンチュア固有の値ではありません。</li></ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          アクセンチュアは、戦略立案からシステム構築・運用まで一気通貫で支援する世界最大級のテクノロジーコンサルティング企業です。本記事では、公式採用ページの採用領域・選考フロー、口コミの傾向を出典付きで整理します。日本法人は非上場で有価証券報告書がないため、年収は公的平均値ではなく公式情報・口コミ集計値で説明します。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["アクセンチュア公式採用ページ（accenture.com/jp-ja/careers）", "アクセンチュア公式採用ブログ", "OpenWork等の口コミプラットフォーム", "厚生労働省 job tag", "経済産業省 IT人材需給調査（2019年公表）"]} />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんな人向きか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              <strong>結論：</strong>アクセンチュアは「テクノロジー×コンサルの市場価値」を一気に高めたいエンジニアに向く企業です。エンジニア職は戦略系と別フローで募集され、ケース面接が課されないケースが多い一方、能力・経験・人柄を深く見られます。
            </p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・<strong>向いている人</strong>：クラウド/DXの実務経験者、業界ドメインを持つエンジニア、成長環境と国際性を求める人</li>
              <li>・<strong>向いていない人</strong>：腰を据えて一つのプロダクトを内製で長く育てたい人（<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>も検討）</li>
              <li>・<strong>難易度の目安</strong>：転職メディアでは中〜やや高めと評されます（職種により差）。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basic.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※日本法人は非上場のため有価証券報告書による平均年収の公表はありません。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{f.h}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{f.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">採用領域・技術スタック</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用ページ（採用領域ページ）で示されているテクノロジー系の職種・領域は以下の通りです。具体的な使用技術はポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ソフトウェアエンジニアリング／フロントエンジニア</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド（業界横断のクラウド変革支援）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>AI／データサイエンス</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>SAP／Salesforce（パッケージ導入・CRM）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>セキュリティ／テクノロジープラットフォーム</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">※出典：アクセンチュア公式「採用職種・領域」ページ。各求人票の記載が一次情報です。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（注意点あり）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              アクセンチュア日本法人は<strong>非上場</strong>のため、有価証券報告書による全社員平均年収の公表はありません。当サイトでは公的な平均年収を断定しません。口コミプラットフォーム集計値では高水準とされますが出典・対象が異なる参考値であり、実際の提示額は<strong>オファー面談で示される職位別の年俸</strong>で確認してください。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            参考までに、IT職全体の市場水準としてはレバテックの2025年公表値で正社員SEの30代平均が約499万円、40代平均が約618万円とされています。アクセンチュアは職位（アナリスト／コンサルタント／マネージャー等）に応じた年俸制で、提示は応募ポジション・経験により大きく異なります。未出典の等級別年収表は本ページでは掲載していません。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-sm text-slate-600 mb-4">公式採用情報・転職メディアの解説に基づく一般的な流れです（職種により異なります）。</p>
          <ol className="space-y-3">
            {flow.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-slate-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            公式採用ブログ・口コミの傾向から、面接では次のような点が確認されやすいと考えられます（傾向の整理であり質問の断定ではありません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>これまでの技術経験と、入社後の具体的な貢献イメージ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>論理的に考え、相手に分かりやすく伝える力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>クラウド/DXプロジェクト推進の実績</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>変化への適応力・成長意欲（カルチャーフィット）</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">※エンジニア職ではケース面接が課されないケースが多いとされます。質問内容は時期・面接官・ポジションで変わります。</p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、アクセンチュアについて次のような傾向の声が見られます（原文の転載ではなく傾向の要約です）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-2">良い傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>・20代の成長環境への評価が高い</li>
                <li>・研修・資格支援などスキルアップ機会が豊富</li>
                <li>・働き方改革（Project PRIDE）で労働時間が改善との声</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li>・繁忙度はプロジェクト次第・体力次第との声</li>
                <li>・キャッチアップの負荷が高いとの指摘</li>
                <li>・事業・組織変化が速く合う合わないが分かれる</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork等の口コミプラットフォームに見られる傾向の要約。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代のミドルエンジニアにとってアクセンチュアは、クラウド/DXの実務経験や業界ドメインを「テクノロジー×コンサル」の市場価値に転換できる場です。アクセンチュア出身という経歴は、その後の転職市場でも評価されやすいのがミドル層にとっての大きな魅力です。マネジメント志向ならマネージャー以上のポジションでの採用強化の動きも追い風になります。
            </p>
            <p>
              一方で、キャッチアップ負荷や繁忙度はプロジェクト次第という声があるため、体力・働き方の許容範囲を見極めることが重要です。年収は職位別の年俸で提示されるため、オファー面談で具体額を必ず確認しましょう。年代別の相場感は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アクセンチュア転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "コンサル・ハイクラス求人に強いスカウト型。アクセンチュア案件のヘッドハンターが多い。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でコンサル×エンジニアポジションの提案に強み。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "求人網羅性が高く、各部門の求人を幅広く保有。初めての転職にも。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数併用のコツ</Link>を参照。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">アクセンチュアへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">コンサル×テクノロジーの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "野村総合研究所 の転職ガイド", href: "/company/nri/" },
              { name: "NTTデータ の転職ガイド", href: "/company/ntt-data/" },
              { name: "富士通 の転職ガイド", href: "/company/fujitsu/" },
              { name: "Google Japan の転職ガイド", href: "/company/google/" },
              { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" },
              { name: "40代エンジニアの年収", href: "/knowledge/salary-40s/" },
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
