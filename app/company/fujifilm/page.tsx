import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/fujifilm/" },
  title: "富士フイルムの年収は平均1124万円【2026年・有報】エンジニア転職とAI開発",
  description:
    "富士フイルムのエンジニア中途採用を有価証券報告書の一次情報で解説。平均年収1124万円(2025年3月期・HD単体全従業員平均)は全社員平均でエンジニア単独ではありません。医療画像AI・ヘルスケア、IT機能のHD一元化、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "salary-truth", label: "年収1124万円の正しい読み方" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術領域（公開情報の範囲）" },
  { id: "flow", label: "選考フローについて" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見た富士フイルム" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "富士フイルムホールディングス株式会社（証券コード4901・東証プライム）"],
  ["業種", "化学／医療機器・ヘルスケア／マテリアルズ／イメージング"],
  ["平均年収", "約1,124万円（2025年3月期・HD（持株会社）単体／全従業員平均・賞与含む）※エンジニア単独でない全社員平均"],
  ["平均年齢", "43.5歳（2025年3月期・HD単体）"],
  ["平均勤続年数", "17.5年（2025年3月期・HD単体）"],
  ["本社所在地", "東京都港区"],
  ["技術領域", "医療画像AI／ヘルスケア／マテリアルズ（2025年にグループのIT機能をHDへ一元化）"],
];

const faqs = [
  { q: "富士フイルムの平均年収1124万円はエンジニアの年収？", a: "いいえ。約1,124万円は2025年3月期の有価証券報告書に記載された、富士フイルムホールディングス（持株会社）単体の全従業員平均給与で、賞与を含みます。これは持株会社に在籍する全職種・全社員の平均であり、エンジニア職単独の平均ではありません。職種別・等級別の内訳は公式に開示されておらず、エンジニアとして入社した場合に必ずこの金額になるわけではない点に注意が必要です。" },
  { q: "富士フイルムはエンジニアの中途採用を行っている？", a: "富士フイルムグループは、医療画像AI・ヘルスケア・マテリアルズなどの領域でデジタル/ソフトウェア人材のキャリア採用を行っています。2025年にグループのIT機能を持株会社（HD）へ一元化しており、グループ横断のデジタル変革を担う人材ニーズがあります。募集職種・採用主体は時期や領域により異なるため、最新は公式採用情報をご確認ください。" },
  { q: "富士フイルムではどんなソフトウェア開発をしている？", a: "代表的なのは医療画像診断支援などの医療画像AI、ヘルスケア関連のシステム、マテリアルズ領域のデジタル技術です。写真フィルムで培った画像技術を、医療・ヘルスケアといったディープテック領域に展開している点が特徴です。具体的な使用言語・ツールは領域・募集により異なります。" },
  { q: "富士フイルムの開発言語は？", a: "医療画像系ではC++やPythonなどが想定されますが、富士フイルムは統一された技術スタック一覧を社外に体系公開していません。そのため当ガイドでは推測の言語一覧表は掲載していません。具体的な言語・フレームワークは、応募する領域・職種の各募集要項で確認する必要があります。" },
  { q: "2025年のIT機能のHD一元化とは？", a: "富士フイルムは2025年に、グループの情報システム・IT機能を持株会社（ホールディングス）へ一元化しました。これによりグループ横断でのデジタル基盤整備・DX推進が進めやすくなり、IT/デジタル人材の活躍領域が広がる方向にあります。採用の主体や配属がこの再編の影響を受ける場合があるため、応募時に確認が必要です。" },
  { q: "富士フイルムへの転職難易度は？", a: "医療画像AI・ヘルスケアといったディープテック領域では、画像処理・機械学習・医療ドメインの専門性が高く評価される一方、即戦力性が問われます。写真・印刷のイメージが強い会社ですが、実態は医療・ヘルスケア・マテリアルズを軸とする多角的な企業であり、自分の専門領域がどの事業とマッチするかの見極めが重要です。" },
  { q: "富士フイルムの選考フローは？", a: "富士フイルムは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容は募集領域・職種により変わります。当ガイドでは出典のない面接質問リストや等級別年収表は掲載していません。最新の選考内容は応募時に確認してください。" },
];

export default function FujifilmCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="富士フイルム エンジニア転職ガイド" description="富士フイルムへのエンジニア転職を有価証券報告書の一次情報で解説。平均年収1124万円(2025年3月期)はHD単体の全社員平均でエンジニア単独ではありません。医療画像AI・ヘルスケア、IT機能のHD一元化、30代40代の現実をまとめました。" url="/company/fujifilm/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "富士フイルム" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">富士フイルムへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          富士フイルムホールディングスへのエンジニア中途採用について、有価証券報告書の一次情報をもとに、転職難易度・年収・技術領域を中立にまとめました。写真フィルムのイメージを超え、<strong>医療画像AI・ヘルスケア・マテリアルズ</strong>を軸とするディープテック企業へと変貌した同社の実態と、「平均1,124万円」の正しい読み方を、ミドル層の視点で整理します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】富士フイルムの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 富士フイルムホールディングス（持株会社）単体の全従業員平均給与は約1,124万円です（2025年3月期 有価証券報告書、平均年齢43.5歳・賞与を含む全社員平均）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・約1,124万円は持株会社HD単体の全職種・全社員平均（2025年3月期 有報）。エンジニア職単独の平均ではありません。</li><li>・持株会社は本社機能・管理部門が中心のため平均が高めに出やすく、事業会社の従業員はこの平均に直接含まれません。</li><li>・職種別・等級別・事業会社別の年収レンジは非開示。応募する事業会社・職種の提示条件は求人票・エージェントで確認が必要です。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["富士フイルムホールディングス 有価証券報告書（2025年3月期）", "富士フイルム 公式採用情報", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（ディープテック領域の専門性重視）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>医療画像AI・ヘルスケア・マテリアルズ</strong>。写真技術を医療・ライフサイエンスに展開するディープテック企業。</li>
              <li>・年収は<strong>HD単体の全従業員平均で約1,124万円（2025年3月期・有報）</strong>。これは<strong>エンジニア単独でなく全社員平均</strong>。</li>
              <li>・2025年に<strong>グループのIT機能をHDへ一元化</strong>し、グループ横断のデジタル人材ニーズが拡大。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">「高年収」の看板だけで判断せず、自分の専門（画像処理/機械学習/医療ドメイン等）がどの事業とマッチするかを最優先に見極めることが重要です。</p>
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
          <p className="text-xs text-slate-500">出典：富士フイルムホールディングス「有価証券報告書」2025年3月期（提出会社＝持株会社HD単体の従業員データ）、IRBANK集計、富士フイルム公式採用情報。平均年収はHD単体の全従業員平均（賞与含む）で、職種別の内訳は非開示です。</p>
        </section>

        <section id="salary-truth" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収1124万円の正しい読み方（最重要）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-amber-900 font-bold mb-2">この数字は「エンジニアの年収」ではありません</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              富士フイルムの平均年収<strong>約1,124万円（2025年3月期・HD単体・全従業員平均・賞与含む）</strong>は、持株会社（富士フイルムホールディングス）に在籍する<strong>全職種・全社員の平均</strong>です。持株会社は本社機能・管理部門などが中心となるため、平均年収が高めに出やすい構造でもあります。これは<strong>エンジニア職単独の平均ではなく</strong>、エンジニアとして事業会社に入社した場合に必ずこの金額が得られるわけではない点を、強く認識しておく必要があります。
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>富士フイルムグループは持株会社制を採用しており、有報の提出会社はHD（持株会社）単体です。事業会社（富士フイルム株式会社など）の従業員はこの平均には直接含まれない点にも留意が必要です。職種別・等級別・事業会社別の年収レンジは公式に開示されていません。</p>
            <p>そのため当ガイドでは、<strong>出典のない等級別年収表は掲載していません</strong>。求職者として確認すべきは、有報の平均値ではなく、自分が応募する事業会社・職種における具体的な提示条件です。</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：富士フイルムホールディングス「有価証券報告書」2025年3月期、IRBANK集計。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">医療画像AI・ヘルスケアのディープテック</h3><p className="text-sm text-petrol-deep">写真フィルムで培った画像技術を、医療画像診断支援などの医療画像AI、ヘルスケア領域へ展開している点が大きな特徴です。R&D色が強く、画像処理・機械学習・医療ドメインの専門性が活きるディープテック領域が中核に置かれています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2025年のIT機能HD一元化</h3><p className="text-sm text-petrol-deep">2025年にグループのIT/情報システム機能を持株会社（HD）へ一元化しました。これによりグループ横断でのデジタル基盤整備・DX推進が進めやすくなり、IT/デジタル人材の活躍領域が広がる方向にあります。採用主体・配属はこの再編の影響を受ける場合があります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">多角化された事業ポートフォリオ</h3><p className="text-sm text-petrol-deep">富士フイルムはイメージング・ヘルスケア・マテリアルズなど多角的な事業を展開しています。「写真の会社」というイメージとは異なり、医療・ライフサイエンス・素材といった領域で技術者が活躍しており、自分の専門がどの事業に合うかの見極めが重要です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">富士フイルムは社外向けに統一された技術スタック一覧を体系公開していないため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報から確認できる技術領域は以下の通りです。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>医療画像AI</strong>：画像診断支援などの画像処理・機械学習領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ヘルスケア</strong>：医療・ライフサイエンス関連のシステム・ソフトウェア領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>マテリアルズ</strong>：素材領域のデジタル技術・データ活用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>医療画像系では一般にC++やPythonなどが想定されますが、<strong>公式の統一情報がないため断定はしません</strong>。具体的言語は各募集要項で確認してください。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：富士フイルム公式の事業・採用情報から確認できる技術領域に基づく記述。具体的な開発言語・内製ツールの統一一覧は公開されていないため、推測の言語表は掲載していません。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>富士フイルムは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集領域・職種により変動します。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、富士フイルムについて<strong>「大手としての安定性・福利厚生への評価が高い」「研究開発・技術への投資が手厚い」</strong>といった傾向の声が見られます。一方で、<strong>「大企業ゆえの意思決定の速度感」「事業・部署により文化や働き方に差がある」</strong>といった指摘も見られます。評価は事業会社・部署・職種・時期により大きく異なります。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た富士フイルム</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>HD単体の<strong>平均年齢は43.5歳、平均勤続年数17.5年</strong>（2025年3月期・有報）。ミドル〜シニア層が中核を占める落ち着いた組織で、30代・40代で中途入社しても年齢構成的に浮きにくい環境といえます。中途では即戦力としての専門性が問われる一方、R&D志向で腰を据えたキャリア形成がしやすい点が特徴です。</p>
            <p>30代・40代の画像処理・機械学習・医療ドメイン経験者にとって、富士フイルムは「<strong>医療画像AIというディープテックR&Dに長期で関われる</strong>」希少なフィールドです。ヘルスケアは社会的な需要が拡大する領域であり、専門性が長く活きる可能性があります。一方、看板の1,124万円はあくまでHD単体の全社員平均であり、配属される事業会社・職種での実際の提示条件を冷静に確認することが大切です。Webサービス中心のキャリアからの転身は、医療・素材ドメインの習得が前提になる点にも留意してください。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>、医療領域を志向するなら<Link href="/industry/healthcare/" className="text-petrol hover:underline">ヘルスケア業界の転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>画像処理・機械学習・医療ドメインの専門性を持つ即戦力</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>医療画像AI・ヘルスケアのディープテックR&Dに長期で関わりたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>大手の安定性・研究開発投資の手厚さを重視する</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>グループ横断のDX・デジタル基盤づくりに挑戦したい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>「平均1,124万円」を自分のエンジニア年収と捉えている</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>医療・素材などのディープなドメイン習得に関心が持てない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>スタートアップ的な意思決定スピードを最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>専門の実務経験がなく未経験参入を狙う</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">富士フイルム転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・AI・画像処理領域に強く、技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。大手・R&D系の専門職・高年収ポジションのスカウトが届きやすい。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・ヘルスケアの求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">富士フイルムへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">医療画像AI・ヘルスケア領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "AI・機械学習の転職ガイド", href: "/skill/ai-ml/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "日立製作所の転職ガイド", href: "/company/hitachi/" }, { name: "パナソニックの転職ガイド", href: "/company/panasonic/" }, { name: "ソニーグループの転職ガイド", href: "/company/sony/" }, { name: "ヘルスケア業界の転職", href: "/industry/healthcare/" }, { name: "製造業エンジニアの転職", href: "/industry/manufacturing/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
