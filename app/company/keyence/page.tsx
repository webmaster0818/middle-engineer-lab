import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/keyence/" },
  title: "キーエンスの年収は平均2039万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "キーエンスのエンジニア中途採用を有価証券報告書の一次情報で解説。平均年収2039万円(2025年3月期・全従業員平均)は営業を含む全社員平均でエンジニア単独ではありません。難易度・職種・30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "salary-truth", label: "年収2039万円の正しい読み方" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術領域（公開情報の範囲）" },
  { id: "flow", label: "選考フローについて" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たキーエンス" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社キーエンス（証券コード6861・東証プライム）"],
  ["業種", "電気機器（FAセンサ・測定器・画像処理機器の開発／販売）"],
  ["平均年収", "2,039万円（2025年3月期・提出会社単体／全従業員平均・賞与含む）※営業含む全社員平均"],
  ["平均年齢", "34.8歳（2025年3月期・提出会社単体）"],
  ["従業員数", "2,614名（2025年3月期・提出会社単体）"],
  ["本社所在地", "大阪市東淀川区"],
  ["技術領域", "FAセンサ・画像処理・計測機器の組込／アルゴリズム開発（統一された技術スタック一覧は非公開）"],
];

const faqs = [
  { q: "キーエンスの平均年収2039万円はエンジニアの年収？", a: "いいえ。2,039万円は2025年3月期の有価証券報告書に記載された提出会社（株式会社キーエンス単体）の全従業員平均給与で、賞与を含みます。キーエンスは営業（コンサルティングセールス）の比率が高い会社であり、この平均は営業職など全職種を含んだ全社員平均です。エンジニア職単独の平均年収ではなく、職種別・等級別の内訳は公式に開示されていません。" },
  { q: "キーエンスの年収はなぜそんなに高い？", a: "高い営業利益率（おおむね50%前後）を背景に、業績連動の賞与比率が非常に大きい給与構造であることが主因とされています。固定給に加えて四半期ごとの業績連動賞与が大きく、これが全社員平均で2,000万円超(4年連続)という水準を押し上げています。ただしこれは全従業員平均であり、個人の年収は等級・年次・業績により大きく異なります。" },
  { q: "キーエンスはエンジニアの中途採用を行っている？", a: "キーエンスは商品開発（ソフトウェア・ハードウェア）職などのキャリア採用を実施することがあります。ただし新卒採用が中心で中途採用枠は限定的とされ、募集の有無・職種は時期により変動します。最新の募集は必ず公式採用サイトでご確認ください。" },
  { q: "キーエンスのエンジニアはどんな開発をしている？", a: "FA（ファクトリーオートメーション）向けのセンサ、画像処理システム、測定器・顕微鏡などの自社商品の開発が中心です。組込ソフトウェアや画像処理アルゴリズムの領域が想定されますが、使用言語やフレームワークの統一一覧は公式に公開されていません。Webサービス系の開発を主業務とする会社ではない点に留意が必要です。" },
  { q: "キーエンスへの転職は激務？", a: "口コミプラットフォームでは「成果へのコミットが強く、業務の密度・スピードが高い」という傾向の声が見られます。一方で年収の高さと若い平均年齢(34.8歳)が特徴です。評価や働き方の実感は部署・職種・時期により大きく異なるため、選考過程で具体的な業務内容と評価制度を確認することをおすすめします。" },
  { q: "キーエンスでWeb系・モダン開発のキャリアは積める？", a: "キーエンスの中核はFA機器・計測機器という自社ハードウェア商品の開発です。Webサービスやクラウドネイティブなモダン開発を主軸にキャリアを伸ばしたいエンジニアにとっては、業務内容がミスマッチになりやすい点に注意が必要です。組込・画像処理・計測といった領域に専門性や関心がある人に向いています。" },
  { q: "キーエンスの選考フローは？", a: "キーエンスは中途採用の詳細な選考フローを公式に体系的には公開していません。一般的には書類選考と複数回の面接が想定されますが、具体的な回数・内容は募集職種や時期で変わります。当ガイドでは推測の面接質問リストや等級別年収表は、出典がないため掲載していません。" },
];

export default function KeyenceCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="キーエンス エンジニア転職ガイド" description="キーエンスへのエンジニア転職を有価証券報告書の一次情報で解説。平均年収2039万円(2025年3月期)は営業を含む全社員平均でエンジニア単独ではありません。難易度・職種・30代40代の現実をまとめました。" url="/company/keyence/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "キーエンス" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">キーエンスへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社キーエンスへのエンジニア中途採用について、有価証券報告書の一次情報をもとに、転職難易度・年収・職種・働き方を中立にまとめました。「平均年収2,000万円超」で知られる一方、その数字は<strong>営業を含む全社員平均でエンジニア単独ではない</strong>こと、業務の中核がFA機器・計測機器という自社ハードウェアの開発である点を、ミドル層の視点で正しく整理します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】キーエンスの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: キーエンスの平均年収は2,039万円です（2025年3月期 有価証券報告書・提出会社単体の全従業員平均・賞与含む、平均年齢34.8歳）。ただしこれは営業を含む全社員平均で、エンジニア単独の数値ではありません。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年収 2,039万円（2025年3月期 有報・賞与含む・4年連続で2,000万円超）。営業（コンサルティングセールス）を含む全職種・全社員の平均です。</li><li>・高水準の背景は高い営業利益率を原資とした業績連動賞与の比重の大きさとされ、個人の年収は等級・年次・業績で大きく異なります。</li><li>・職種別・等級別の年収内訳は公式に非開示。エンジニアとして入社した場合に必ずこの金額が得られるわけではなく、応募職種の具体的な提示条件の確認が必要です。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["キーエンス 有価証券報告書（2025年3月期）", "キーエンス 公式採用サイト", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（新卒中心・中途枠は限定的）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・年収は<strong>全従業員平均2,039万円（2025年3月期・有報）</strong>と国内トップ級。ただしこれは営業を含む全社員平均で、<strong>エンジニア単独の数字ではない</strong>。</li>
              <li>・業務の中核は<strong>FAセンサ・画像処理・計測機器の組込／アルゴリズム開発</strong>。Webモダン開発を志向する人にはミスマッチが起きやすい。</li>
              <li>・新卒採用が中心で、エンジニアの中途枠は時期により限定的。組込・画像処理・計測の専門性を持つ即戦力に向く。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">「高年収」という看板だけで判断せず、自分の専門領域（組込/画像/計測）と業務内容が合うかを最優先に見極めることが重要です。</p>
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
          <p className="text-xs text-slate-500">出典：キーエンス「有価証券報告書」2025年3月期（提出会社＝株式会社キーエンス単体の従業員データ）、IRBANK集計、キーエンス公式採用サイト。平均年収は全従業員平均（賞与含む）で、職種別の内訳は非開示です。</p>
        </section>

        <section id="salary-truth" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収2039万円の正しい読み方（最重要）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-amber-900 font-bold mb-2">この数字は「エンジニアの年収」ではありません</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              キーエンスの平均年収<strong>2,039万円（2025年3月期・提出会社単体・全従業員平均・賞与含む）</strong>は、4年連続で2,000万円を超えた国内トップ級の水準です。しかし、この数値は<strong>営業（コンサルティングセールス）を含む全職種・全社員の平均</strong>であり、エンジニア職単独の平均ではありません。キーエンスは営業比率が高い会社であるため、エンジニアとして入社した場合に必ずこの金額が得られるわけではない点を、強く認識しておく必要があります。
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>高水準の背景は、高い営業利益率を原資とした<strong>業績連動賞与の比重の大きさ</strong>にあるとされています。固定給に加え、四半期ごとの業績連動賞与が大きいため、年収は等級・年次・業績によって個人差が大きくなります。</p>
            <p>キーエンスは職種別・等級別の年収レンジを公式に開示していません。そのため、当ガイドでは<strong>出典のない等級別年収表は掲載していません</strong>。求職者として確認すべきは、有報の平均値ではなく、自分が応募する職種における具体的な提示条件です。</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：キーエンス「有価証券報告書」2025年3月期、IRBANK集計。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">FA・計測のディープな自社商品開発</h3><p className="text-sm text-petrol-deep">キーエンスのエンジニアリングの中核は、FAセンサ・画像処理システム・測定器・顕微鏡といった自社商品の開発です。市場のニーズを先回りした商品企画と、それを実現する組込・アルゴリズム技術が結びついている点が特徴です。Webサービス開発を主業務とする会社ではありません。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">新卒中心・中途枠は限定的</h3><p className="text-sm text-petrol-deep">採用は新卒が中心で、エンジニアの中途（キャリア）採用枠は時期により限定的とされています。募集職種・有無は変動するため、最新情報は公式採用サイトで確認する必要があります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">若い平均年齢と高い処理密度</h3><p className="text-sm text-petrol-deep">提出会社単体の平均年齢は34.8歳（2025年3月期・有報）と、大手メーカーとしては若い構成です。成果やスピードへのコミットが強い文化とされ、業務密度が高い傾向が口コミで指摘されています。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">キーエンスは、社外向けに統一された技術スタック一覧や開発言語の公式リストを公開していません。そのため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報から確実に言えるのは、以下の技術領域です。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>組込ソフトウェア開発</strong>：FAセンサ・計測器などの自社商品に搭載される制御ソフトウェアの領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>画像処理アルゴリズム</strong>：画像処理システム・外観検査などのコア技術領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>計測・センシング</strong>：測定器・顕微鏡などの計測技術と連動するソフトウェア領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>これらの領域では組込で一般的なC/C++などが想定されますが、<strong>公式の確認情報がないため断定はしません</strong>。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：キーエンス公式の商品・採用情報から確認できる技術領域に基づく記述。具体的な開発言語・内製ツールは公式に公開されていないため、推測の言語一覧表は掲載していません。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>キーエンスは中途採用の詳細な選考フローを公式に体系的には公開していません。一般に書類選考と複数回の面接が想定されますが、具体的な回数・内容・所要期間は募集職種や時期により変動します。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、キーエンスについて<strong>「年収水準が非常に高い」「成果へのコミットが強く、業務のスピード・密度が高い」</strong>といった傾向の声が見られます。一方で、<strong>「業務の負荷が高い」「営業色の強い文化」</strong>といった指摘も見られます。評価や働き方の実感は部署・職種・時期によって大きく異なります。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たキーエンス</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は34.8歳</strong>（2025年3月期・有報）と、大手メーカーの中では若い組織です。30代後半〜40代で中途入社する場合、年齢構成的にはミドル〜ややシニア寄りの立ち位置になり、即戦力としての専門性が一層強く問われると考えられます。</p>
            <p>30代・40代のエンジニアにとって、キーエンスは「<strong>高待遇だが組込・画像・計測に特化</strong>」という性格を持ちます。これらの領域に深い経験がある人にはキャリアの専門性が活きます。一方、Webサービス・クラウドのモダン開発を軸にしたい人にとっては、業務内容のミスマッチが起きやすい点に注意が必要です。年収面でも、看板の2,039万円は全社員平均であり、エンジニア職としての実際の提示条件を冷静に確認することが大切です。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>、組込領域を志向するなら<Link href="/skill/embedded/" className="text-petrol hover:underline">組込エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>組込・画像処理・計測の専門性を持つ即戦力エンジニア</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>自社ハードウェア商品の開発に深く関わりたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>成果主義・高密度の業務スタイルで高い報酬を目指したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>FA・センシングという市場の将来性に魅力を感じる</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>Webサービス・クラウドのモダン開発を主軸にしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>「平均2,039万円」を自分のエンジニア年収と捉えている</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>業務密度よりワークライフバランスを最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>組込・画像・計測の実務経験がなく未経験参入を狙う</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キーエンス転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・組込領域に強く、高年収求人比率が高い。技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。大手メーカーの専門職・高年収ポジションのスカウトが届きやすい。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・大手の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">キーエンスへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メーカー・組込領域の高年収求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "デンソーの転職ガイド", href: "/company/denso/" }, { name: "トヨタ自動車の転職ガイド", href: "/company/toyota/" }, { name: "パナソニックの転職ガイド", href: "/company/panasonic/" }, { name: "組込エンジニアの転職", href: "/skill/embedded/" }, { name: "製造業エンジニアの転職", href: "/industry/manufacturing/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
