import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "日本IBMへのエンジニア転職｜年収・技術領域・選考の現実【2026年版】",
  description:
    "日本IBMのエンジニア中途採用を公式情報・公開情報の範囲で解説。バンド制等級、Red Hat/IBM Cloud/watsonx等の技術領域、コンサル・アーキ志向の30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術領域（公開情報）" },
  { id: "salary", label: "年収データの考え方" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見た日本IBM" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "日本アイ・ビー・エム株式会社（非上場・米IBMの日本法人）"],
  ["業種", "ITコンサルティング／クラウド・AI／システムインテグレーション"],
  ["平均年収", "公式の全社員平均は非公開。集計サイトに約912〜920万円の記載があるが、これは口コミ集計の参考値であり公式値ではない"],
  ["等級制度", "バンド制（職務等級）。先端領域（AI・クラウド）は高バンド傾向"],
  ["技術領域", "Red Hat OpenShift／IBM Cloud／watsonx／Java／Python など（担当案件・プロジェクトに依存）"],
  ["特徴", "ITコンサル・アーキテクト志向のミドルに向く。外資系のグローバル基盤"],
];

const faqs = [
  { q: "日本IBMの平均年収はいくら？", a: "日本IBMは非上場（米IBMの日本法人）のため、上場企業のように有価証券報告書で開示される公式の全従業員平均年収は公表されていません。OpenMoney等の年収集計サイトに約912〜920万円といった数値が掲載されることがありますが、これらは口コミをもとにした集計の参考値であり、公式値ではありません。母数や算定方法が不明なため、当ガイドでは具体額の断定は控えています。実額はバンド（等級）・職務・経験により個人差が大きく、選考過程で確認するのが確実です。" },
  { q: "日本IBMの等級・年収の仕組みは？", a: "日本IBMはバンド制（職務等級）を採用しており、職務の難易度・責任に応じてバンドが決まる仕組みが一般に知られています。AI・クラウドなどの先端領域は高バンドになりやすい傾向があるとされますが、当ガイドではバンドごとの具体的な年収表は公式に確認できないため掲載していません（数値の創作も行いません）。" },
  { q: "日本IBMで扱う技術は？", a: "日本IBMが扱う技術領域としては、Red Hat OpenShift・IBM Cloud・watsonx（AI基盤）、開発言語としてJavaやPythonなどが挙げられます。ただし日本IBMはコンサル・SIの比重が大きく、使用技術は担当する案件・プロジェクトに大きく依存します。全社で統一された固定スタックというより、プロジェクトごとに最適な技術が選ばれる点が特徴です。" },
  { q: "日本IBMはどんなエンジニアに向く？", a: "顧客課題を技術で解決するITコンサルタント・アーキテクト志向のエンジニアに向きます。要件定義・アーキテクチャ設計・クラウド移行・AI活用など、上流から関わりたいミドル層と親和性が高い一方、特定プロダクトの内製開発に専念したい志向とはやや異なります。グローバルなナレッジ基盤と先端領域（AI/クラウド）に触れたい人に適しています。" },
  { q: "日本IBMの選考フローは？", a: "日本IBMは職種・部門が多岐にわたり、選考ステップ（面接回数・課題の有無など）の詳細は公式に網羅的には公開されていません。当ガイドでは公式に確認できない選考詳細を創作して掲載することはしません。一般的には書類選考・複数回の面接などが想定されますが、正確な流れは公式採用ページや担当エージェントでご確認ください。" },
  { q: "日本IBMの面接で聞かれることは？", a: "日本IBMは具体的な面接質問リストを公式に公開していないため、当ガイドでは創作した質問例の掲載は行いません。コンサル・アーキ志向の組織であることから、課題解決力・上流設計の経験・クラウドやAIの知見などが評価されやすいと一般的に考えられますが、これは推測です。" },
  { q: "日本IBMは40代でも転職できる？", a: "日本IBMはコンサル・アーキテクト・プロジェクトマネジメントなど経験の蓄積が活きる職務が多く、上流経験やドメイン知識を持つ40代にとっては経験を評価されやすい環境といえます。ただし求められる役割・バンドは募集により異なるため、自分の経験がどのポジションに合うかの見極めが重要です。" },
  { q: "日本IBMはリモートワークできる？", a: "勤務形態は職種・プロジェクト・時期により異なります。当ガイドの調査時点では制度の詳細を公式の一次情報として確定できなかったため、最新の勤務条件は各募集要項や選考過程で必ず確認してください。" },
];

export default function IbmCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="日本IBM エンジニア転職ガイド" description="日本IBMへのエンジニア転職を公開情報の範囲で解説。バンド制等級、Red Hat/IBM Cloud/watsonx等の技術領域、コンサル・アーキ志向の現実をまとめました。" url="/company/ibm/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "日本IBM" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">日本IBMへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          日本アイ・ビー・エム株式会社（米IBMの日本法人）へのエンジニア中途採用について、公式・公開情報の範囲で、転職難易度・年収の考え方・技術領域・働き方を中立にまとめました。Red Hat・IBM Cloud・watsonxといったグローバル基盤を背景に、ITコンサル・アーキテクトとして上流から関われる外資系の代表格です。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["日本IBM 公式採用ページ", "OpenMoney（年収集計・公式値ではない参考値）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（コンサル・アーキ志向の経験者）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>顧客課題を技術で解決するITコンサル／アーキテクト</strong>。Red Hat OpenShift・IBM Cloud・watsonx・Java/Python などを案件に応じて扱う。</li>
              <li>・等級は<strong>バンド制（職務等級）</strong>で、AI・クラウドなどの先端領域は高バンド傾向とされる。上流経験を持つミドルに向く。</li>
              <li>・<strong>非上場のため公式の平均年収は非公開</strong>。集計値（約912〜920万円）は公式値ではない参考値として扱い、実額は選考過程で確認するのが現実的。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、単一プロダクトの内製開発に専念したい人や、コンサル・SI特有の顧客折衝・上流工程に関心が薄い人はミスマッチが起きやすい点に注意が必要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
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
          <p className="text-xs text-slate-500">出典：日本IBM公式採用ページ、技術領域は公開情報。平均年収はOpenMoney等の年収集計サイトの記載（約912〜920万円）に基づきますが、これは口コミ集計の参考値で公式値ではありません。日本IBMは非上場のため、上場企業の有価証券報告書のような公式の全従業員平均年収は公表されていません。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ITコンサル・アーキテクト志向</h3><p className="text-sm text-blue-700">日本IBMはコンサルティング・システムインテグレーションの比重が大きく、顧客の課題を技術で解決する役割が中核です。要件定義・アーキテクチャ設計・クラウド移行・AI活用など、上流から関わりたいエンジニアに向いています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">バンド制（職務等級）</h3><p className="text-sm text-blue-700">日本IBMは職務の難易度・責任に応じて等級が決まるバンド制を採用していることが一般に知られています。AI・クラウドなどの先端領域は高バンドになりやすい傾向があるとされますが、当ガイドではバンドごとの年収表は公式に確認できないため掲載していません。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">グローバル基盤と先端領域</h3><p className="text-sm text-blue-700">Red Hat（OpenShift）、IBM Cloud、watsonx（AI基盤）など、グローバルで展開される製品・技術に触れられる点が外資系ならではの特徴です。先端領域に挑戦したいミドルにとって、ナレッジとプロダクト基盤の厚みは魅力になります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下は公開情報の範囲で確認できる技術領域です。日本IBMはコンサル・SIの比重が大きく、使用技術は担当案件・プロジェクトに依存するため、全社で統一された固定スタックの一覧は提示しません（推測でのスタック追加・固定化は行いません）。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Red Hat OpenShift</strong>：コンテナ／クラウドネイティブ基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>IBM Cloud</strong>：クラウドプラットフォーム</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>watsonx</strong>：AI／生成AIの基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Java／Python</strong>：開発言語（案件・プロジェクトに依存）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：公開情報。具体的な使用技術は案件により大きく異なります。関連するスキル解説は<Link href="/skill/java/" className="text-blue-600 hover:underline">Java</Link>・<Link href="/skill/python/" className="text-blue-600 hover:underline">Python</Link>・<Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetes</Link>・<Link href="/skill/ai-ml/" className="text-blue-600 hover:underline">AI／機械学習</Link>のページも参照してください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データの考え方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            日本IBMは<strong>非上場（米IBMの日本法人）</strong>のため、上場企業の有価証券報告書で開示される「全従業員平均年収」のような公式の平均値は公表されていません。OpenMoney等の集計サイトに<strong>約912〜920万円</strong>という記載が見られますが、これは口コミをもとにした<strong>集計の参考値であり公式値ではありません</strong>。母数・算定方法が不明なため、当ガイドでは具体額の断定や、バンド別の年収表（創作）は行いません。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            等級はバンド制で、先端領域（AI・クラウド）や上流の役割は高バンド傾向とされますが、実額は職務・経験・バンドにより個人差が大きいのが実情です。ミドル層は提示の内訳とバンドの位置づけを、選考過程やエージェントを通じて確認するのが現実的です。年代別の相場は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>もあわせてご覧ください。
          </p>
          <p className="text-xs text-slate-500">出典：OpenMoney等の年収集計（参考値）。公式の平均年収が存在しないため、ここでは断定的な金額は記載していません。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            日本IBMは職種・部門が多岐にわたり、<strong>職種ごとの選考ステップ（面接回数・課題の有無など）の詳細は公式に網羅的には公開されていません</strong>。当ガイドでは、公式に確認できない選考詳細を創作して掲載することはしません。一般的な中途採用では書類選考・複数回の面接などが想定されますが、日本IBMの正確なフローは公式採用ページや担当エージェントでご確認ください。
          </p>
          <p className="text-xs text-slate-500">出典：日本IBM公式採用ページ。フローは職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベースの一般化）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。創作した質問例は掲載せず、コンサル・アーキ志向という組織特性から評価されやすいと一般に考えられるポイントのみを挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>顧客課題を構造化し、技術で解決する課題解決力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>アーキテクチャ設計・クラウド移行など上流工程の経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>クラウド（OpenShift／IBM Cloud）・AI（watsonx）領域の知見</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>チーム・顧客を巻き込むコミュニケーション、グローバル環境への適応</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、日本IBMについて<strong>「先端領域・グローバルなナレッジに触れられる」「自律的に働ける裁量がある」「外資系らしい評価・キャリアの透明性」</strong>といった声が見られる一方、<strong>「組織再編やプロジェクトによる変動が大きい」「成果・専門性が問われ、受け身では評価されにくい」</strong>といった指摘も見られます。自律的にキャリアを築ける人ほど活躍しやすい傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た日本IBM</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のミドルエンジニアにとって、日本IBMは<strong>「上流・アーキテクチャ経験を活かせる」「先端領域（AI/クラウド）に外資系の基盤で挑戦できる」</strong>という点で魅力的な選択肢です。コンサル・SIで培った要件定義・設計・PMの経験は、そのままバンド（等級）の評価につながりやすいドメインです。</p>
            <p>一方で、組織再編やプロジェクト変動が大きく、受け身では評価されにくい外資系特有の文化があります。単一プロダクトの内製開発に専念したい志向とは方向性が異なる点にも注意が必要です。年収は公式平均が存在しないため、バンドの位置づけと提示内訳を冷静に見極めることが重要です。</p>
            <p>転職活動では、ミドル層の市場価値整理とキャリアの言語化が鍵になります。<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>、<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>ITコンサル・アーキテクトとして上流から関わりたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>クラウド（OpenShift/IBM Cloud）・AI（watsonx）に挑戦したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>要件定義・設計・PMの経験を等級評価につなげたいミドル</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>自律的にキャリアを築ける外資系の文化に合う</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>単一プロダクトの内製開発だけに専念したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>顧客折衝・上流工程への関心が薄い</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>固定的な環境・指示待ちのスタイルを好む</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>組織再編・プロジェクト変動の大きさを避けたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサル・外資系転職市場と日本IBMの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。特にクラウド・AI・上流設計を担える人材の需要は構造的に高く、日本IBMのようなグローバル基盤を持つコンサル・SIは、上流志向のミドルにとって有力な選択肢です。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、コンサル・アーキの上流ポジションはこれを上回るケースもありますが、日本IBMは非上場で公式平均が存在しないため、ここでは断定を避けます。</p>
            <p>つまり日本IBMは「上流・先端領域の経験を、外資系のバンド制で評価する」企業といえます。一方で公式の年収情報が限られるため、バンドの位置づけと提示内容の見極め、複数社比較が転職成功の鍵になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本IBM転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資系・コンサルの上位ポジションに出会いやすい。" }, { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・クラウド/AI求人に強く、技術面の整理を支援。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。大手・外資の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">日本IBMへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資系・ITコンサルに強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/bizreach-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "アクセンチュアの転職ガイド", href: "/company/accenture/" }, { name: "AI／機械学習エンジニアの転職", href: "/skill/ai-ml/" }, { name: "Kubernetesエンジニアの転職", href: "/skill/kubernetes/" }, { name: "PMの転職ガイド", href: "/skill/pm/" }, { name: "40代の年収相場", href: "/knowledge/salary-40s/" }, { name: "市場価値の把握", href: "/knowledge/market-value/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
