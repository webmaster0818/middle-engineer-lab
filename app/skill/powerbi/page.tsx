import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Power BIエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Power BIスキルを持つエンジニアの転職市場を出典付きで解説。BI・データ可視化での用途、BIエンジニア・データアナリスト職種としての年収相場、求人の探し方、30代・40代の戦い方をミドル向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Power BIスキルの転職市場の攻め方" },
  { id: "market", label: "2. 年収・市場データ（出典付き）" },
  { id: "use", label: "3. Power BIの用途と求人傾向" },
  { id: "level", label: "4. 求められる経験レベルと求人要件" },
  { id: "career", label: "5. キャリアパスと関連技術" },
  { id: "find", label: "6. 求人の探し方・強いエージェント" },
  { id: "entry", label: "7. 経験浅めから参入するルート" },
  { id: "age", label: "8. 30代・40代エンジニアの視点" },
  { id: "learn", label: "9. スキルアップ・学習戦略" },
  { id: "faq", label: "10. よくある質問" },
];

const faqs = [
  {
    q: "Power BIを扱うエンジニアの年収相場はどのくらいですか？",
    a: "Power BI単体での平均年収を集計した公的な公表値は乏しいため、本記事では職種年収で代替します。求人ボックス「給料ナビ」（2026年6月時点）では、データアナリストの平均年収は約725万円（給与幅446〜1,245万円）です。BIエンジニアは複数の媒体で約700万円前後と報じられています。Power BIはBI・データ可視化で使われるため、BIエンジニア／データアナリストの年収レンジで評価されるのが実態です。",
  },
  {
    q: "Power BIはどんな場面で使われていますか？",
    a: "Microsoftが提供するBIツールとして、経営ダッシュボード、売上・在庫・KPIの可視化、社内レポーティングに使われます。Excelとの親和性が高く、Microsoft 365（Teams・SharePoint）やAzure、Microsoft Fabricと連携しやすいのが特徴です。Power Queryでのデータ整形、DAXによる計算式、Power BI Serviceでの社内共有まで含めて運用されます。",
  },
  {
    q: "Power BIの求人はどんな企業に多いですか？",
    a: "Microsoft製品を全社で使う大手企業・製造・金融・小売、社内のデータ可視化を内製する企業に多く見られます。Excel運用からの脱却やデータドリブン化を進める事業会社で需要があります。求人票では「Power BIダッシュボードの構築」「社内レポートの自動化」「経営指標の可視化」といった文脈で登場します。具体的な求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Power BI未経験でも転職は可能ですか？",
    a: "ExcelやSQLでの分析・レポーティングの実務経験があれば、Power BI未経験でもポテンシャル採用の対象になり得ます。Power BI Desktopは無料で使えるため、公開データを使ったダッシュボードをポートフォリオにすると基礎力を提示できます。ExcelのピボットやPower Queryの経験があると移行はスムーズで、「何を可視化し意思決定につなげたか」を語れると評価が上がります。",
  },
  {
    q: "Power BIと一緒に求められるスキルは何ですか？",
    a: "Excel、SQL、データ整形のPower Query、計算式のDAX、データソースのSQL Server・Azure Synapse・BigQuery、Microsoft 365・Azure・Microsoft Fabricの知識が頻出します。さらに、ビジネス課題を可視化要件に翻訳する力や、Tableauなど他のBIツール経験が掛け合わせとして強みになります。",
  },
  {
    q: "Power BIスキルの将来性はどうですか？",
    a: "MicrosoftエコシステムとExcelとの親和性から、日本企業での導入は底堅く、Microsoft Fabricの登場でデータ統合基盤としての位置づけも強まっています。一方、Tableauなど他のBIツールや生成AIによる分析支援との競合もあり、ツールの操作だけでなく「分析設計とビジネス課題への翻訳力」が問われる方向に進んでいます。SQL・DAX・データモデリングの理解が長期的な強みになります。",
  },
  {
    q: "Power BIエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でBIエンジニア・データアナリスト級の求人に出会いやすいビズリーチ、Web系企業の提案に強いGeeklyの併用が選択肢です。Power BIの求人はMicrosoft製品を使う事業会社の社内ポジションに多いため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

export default function PowerBISkillPage() {
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
      <ArticleJsonLd
        title="Power BIエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Power BIスキルを持つエンジニアの転職市場を出典付きで解説。BI・データ可視化での用途、BIエンジニア・データアナリスト職種としての年収相場、求人の探し方、30代・40代の戦い方をミドル向けに整理します。"
        url="/skill/powerbi/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Power BIエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Power BIエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Power BIスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Power BIは、Microsoftが提供するBI（ビジネスインテリジェンス）ツールです。Excelとの親和性が高く、Microsoft 365やAzure、Microsoft Fabricと連携しやすいのが特徴で、経営ダッシュボードから社内レポーティングまで幅広く使われます。求人ではBIエンジニア・データアナリストといった職種の文脈で評価されるのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Power BIスキルを軸にした転職の「攻め方」を、<strong>公表年収データ・用途と求人傾向・求められる経験レベル・関連技術・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」（データアナリスト）",
            "各種媒体が公表するBIエンジニアの年収相場（約700万円前後）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Power BIスキルの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Power BIは「Excelの延長から入れる」一方、評価はビジネス課題を可視化に翻訳する力で決まります。</strong>ツールを触れるだけでなく、何を可視化しどんな意思決定につなげたかが問われます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Power BI単体の公表年収は乏しいため、<strong>BIエンジニア／データアナリスト等の職種年収で代替</strong>して捉えるのが実態</li>
              <li>・Excel・SQLでの分析経験があれば、Power BI未経験でもポテンシャル採用の余地がある（移行ハードルは低め）</li>
              <li>・<strong>SQL・DAX・Microsoft Fabric</strong>との掛け合わせで市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・市場データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Power BI単体の平均年収を集計した公表値は乏しいため、ここでは関連する職種の公表年収で代替します。いずれも出典と時点を明示できる公開データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["データアナリストの平均年収", "約725万円（給与幅446〜1,245万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
                  ["BIエンジニアの年収相場", "約700万円前後", "各種媒体の公表値（2026年6月時点・媒体により幅あり）"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
                  ["IT人材不足の試算", "2030年に最大約79万人不足", "経産省 IT人材需給調査（2019年公表の試算）"],
                ].map(([label, value, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 align-top">
                      <span className="font-medium">{value}</span>
                      <br />
                      <span className="text-xs text-slate-500">{src}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ 上記はPower BI特化の数値ではなく、関連する職種の代替値です。BIエンジニアの相場は媒体によって定義・集計範囲が異なるため幅を持って捉えてください。求人ボックスの値は求人票の記載額を集計したもので、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値です。最新の情報はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 用途と求人傾向 */}
        <section id="use" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Power BIの用途と求人傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Power BIは「データ可視化」を軸に複数の用途を持ち、求人はBI・社内レポーティングの文脈で出ます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { use: "経営・KPIダッシュボード", note: "経営指標の可視化。意思決定支援の中核" },
              { use: "社内レポートの自動化", note: "Excel運用からの脱却・レポート自動化。事業会社で頻出" },
              { use: "Power Query・DAXによるデータ整形", note: "Power Queryでの整形、DAXでの計算式作成" },
              { use: "Power BI Serviceでの社内共有", note: "Microsoft 365・Teamsと連携した配信・共有" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.use}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "Excel・SQLでの分析・レポーティング実務／Power BIは自習レベル／基本的なダッシュボード作成", note: "未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "Power BIでのダッシュボード構築／Power Query・DAXによるデータモデリング／SQLでのデータ抽出", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "BI基盤の設計・運用／データソース・Microsoft Fabricの整備／組織のデータ活用推進・教育", note: "年収800万円前後を狙える層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパスと関連技術 */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスと関連技術</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Power BIはBIエンジニア・データアナリスト・アナリティクスエンジニアの方向に展開でき、掛け合わせるスキルで到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "BIエンジニア", note: "BIダッシュボードの設計・運用。データソース整備とセットで担う" },
              { role: "データアナリスト", note: "Power BIでの可視化＋分析。ビジネス課題への示唆出し" },
              { role: "アナリティクスエンジニア", note: "SQL・データモデリング＋BI。データ基盤とBIの橋渡し" },
              { role: "データ活用推進・社内コンサル", note: "可視化を通じた組織のデータドリブン化を推進" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            関連スキルは<Link href="/skill/sql/" className="text-petrol hover:underline">SQL</Link>・<Link href="/skill/data-analyst/" className="text-petrol hover:underline">データアナリスト</Link>・<Link href="/skill/tableau/" className="text-petrol hover:underline">Tableau</Link>のガイドもあわせてご覧ください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Power BIの求人はMicrosoft製品を使う事業会社の社内ポジションに多いため、特定の1社に絞るより複数チャネルを横断するのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。BI・データ分析職の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。BIエンジニア・データアナリスト級の求人やスカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Power BIを採用するWeb系・データ活用企業の求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからPower BIに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Excel・SQLの分析経験を土台にする", desc: "Excelのピボットやレポーティング、SQLでのデータ抽出の経験があれば、それを土台に「Power BIは未経験だがキャッチアップ可」とアピールできます。ExcelやPower Queryの経験があると移行はスムーズです。" },
              { num: "2", title: "Power BI Desktopで作品を作る", desc: "無料のPower BI Desktopで公開データを使ったダッシュボードを作り、ポートフォリオにします。Power Queryでのデータ整形やDAXでの計算式まで触れていると、単なる可視化以上の力を提示できます。" },
              { num: "3", title: "ビジネス課題への翻訳力を鍛える", desc: "実務やサンプルデータで『この指標を見ると何を判断できるか』を言語化する練習をします。Power BIは操作の習得より、課題を可視化要件に落とす力が問われるため、ここが差別化ポイントになります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>ビジネス理解が年齢の不利を相殺する。</strong>BI・可視化は、ツールの操作よりも「事業の何を測れば意思決定が進むか」を理解している人が強い領域です。30代・40代で事業や業務を深く理解しているなら、それがそのまま武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>「Power BI＋SQL／DAX」「Power BI＋過去のドメイン知識（製造・小売・金融など）」の掛け合わせがミドル層の強みです。可視化を業務知識と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>データ活用推進の経験も資産になる。</strong>Excel運用からの脱却を主導し、組織のデータドリブンな文化づくりを後押しした経験は、ハイクラス求人で評価されます。教育や推進の実績があれば、技術力とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① 可視化の基本とPower Query・DAXを学ぶ。</strong>Power BI Desktopで実際にダッシュボードを作りながら、Power Queryでのデータ整形とDAXでの計算式という二つの核を押さえるのが近道です。Microsoft公式のラーニング教材が充実しています。
            </p>
            <p>
              <strong>② SQLとデータモデリングを学ぶ。</strong>Power BIの裏にはデータソースがあります。SQLでデータを抽出し、スタースキーマなどのデータモデリングを理解すると、可視化の質と担当範囲が広がります。
            </p>
            <p>
              <strong>③ Microsoftエコシステムと分析設計を磨く。</strong>Azure・Microsoft Fabricとの連携や、「誰が見て何を判断するためのダッシュボードか」を起点にした分析設計は、ツールが変わっても通用します。データ統合と意思決定への翻訳力を意識しましょう。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Power BIのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            BI・可視化の求人は事業会社の社内ポジションに多いからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Tableauエンジニアの転職ガイド", href: "/skill/tableau/" },
              { name: "SQLエンジニアの転職ガイド", href: "/skill/sql/" },
              { name: "データアナリストの転職ガイド", href: "/skill/data-analyst/" },
              { name: "BigQueryエンジニアの転職ガイド", href: "/skill/bigquery/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
