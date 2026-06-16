import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "BigQueryエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "BigQueryスキルを持つエンジニアの転職市場を出典付きで解説。データウェアハウスでの用途、データエンジニア・アナリスト職種としての年収相場、求人の探し方、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：BigQueryスキルの転職市場の攻め方" },
  { id: "market", label: "2. 年収・市場データ（出典付き）" },
  { id: "use", label: "3. BigQueryの用途と求人傾向" },
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
    q: "BigQueryを扱うエンジニアの年収相場はどのくらいですか？",
    a: "BigQuery単体での平均年収を集計した公的な公表値は乏しいため、本記事では職種年収で代替します。求人ボックス「給料ナビ」（2026年6月時点）では、データアナリストの平均年収は約725万円（給与幅446〜1,245万円）、データベースエンジニア関連は453万円（給与幅394〜1,021万円）です。BigQueryはデータウェアハウス・分析基盤で使われるため、データエンジニア／データアナリストの年収レンジで評価されるのが実態です。",
  },
  {
    q: "BigQueryはどんな場面で使われていますか？",
    a: "Google Cloudのフルマネージドなデータウェアハウスとして、大量データの集計・分析、ダッシュボード（Looker Studio等）のデータソース、データレイク兼DWHとして使われます。標準SQLで操作でき、サーバー管理が不要なため、データ分析基盤として広く採用されています。近年はBigQuery ML（SQLで機械学習）やストリーミング挿入による準リアルタイム分析の用途もあります。",
  },
  {
    q: "BigQueryの求人はどんな企業に多いですか？",
    a: "Google Cloudを採用するWeb系・SaaS・広告・小売・ゲーム企業、データドリブンな意思決定を進める企業、分析基盤を内製する企業に多く見られます。求人票では「BigQueryを使ったデータ基盤の構築運用」「分析基盤の整備」「マーケティングデータの統合」といった文脈で登場します。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "BigQuery未経験でも転職は可能ですか？",
    a: "SQLでの分析・集計の実務経験があれば、BigQuery未経験でもポテンシャル採用の対象になり得ます。BigQueryは無料枠があり、公開データセットを使って手を動かせます。標準SQLでの集計やパーティション・クラスタリングによるコスト最適化を試した実績を示すと基礎力を提示できます。SQLが使えれば移行のハードルは比較的低い技術です。",
  },
  {
    q: "BigQueryと一緒に求められるスキルは何ですか？",
    a: "標準SQL、Python、ワークフロー管理のAirflow（Cloud Composer）、データ転送のDataflow・Fivetran、BIのLooker Studio・Tableau・Power BI、データ変換のdbtなどが頻出します。Google Cloud全般（GCS、Pub/Sub、IAM）の知識や、マーケティングデータ統合の経験が掛け合わせとして強みになります。",
  },
  {
    q: "BigQueryスキルの将来性はどうですか？",
    a: "クラウドDWHの需要は企業のデータ活用の高まりとともに底堅く、BigQueryはGoogle Cloudの中核サービスとして安定した採用があります。サーバーレスでスケールしやすい特性から、データ分析基盤の標準的な選択肢の一つです。一方でSQLが書ければ操作できる手軽さゆえ、差別化にはコスト最適化・データモデリング・パイプライン設計といった「基盤を回す力」が問われます。",
  },
  {
    q: "BigQueryエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でデータ基盤・アナリティクスエンジニア級の求人に出会いやすいビズリーチ、Web系企業の提案に強いGeeklyの併用が選択肢です。BigQueryを軸にした求人はGoogle Cloud採用企業に集まるため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

export default function BigQuerySkillPage() {
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
        title="BigQueryエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="BigQueryスキルを持つエンジニアの転職市場を出典付きで解説。データウェアハウスでの用途、データエンジニア・アナリスト職種としての年収相場、求人の探し方、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/bigquery/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "BigQueryエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          BigQueryエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | BigQueryスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            BigQueryは、Google Cloudのフルマネージドなデータウェアハウスです。サーバー管理が不要で、標準SQLによって大量データを高速に集計・分析できます。分析基盤・ダッシュボードのデータソース・マーケティングデータの統合などで広く使われ、求人ではデータエンジニア・データアナリストといった職種の文脈で評価されるのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、BigQueryスキルを軸にした転職の「攻め方」を、<strong>公表年収データ・用途と求人傾向・求められる経験レベル・関連技術・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」（データアナリスト／データベースエンジニア）",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：BigQueryスキルの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>BigQueryは「SQLが書ければ入口に立てる」一方、差別化は基盤を回す力で決まります。</strong>操作の手軽さゆえ、コスト最適化・データモデリング・パイプライン設計の経験が評価の分かれ目です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・BigQuery単体の公表年収は乏しいため、<strong>データエンジニア／データアナリスト等の職種年収で代替</strong>して捉えるのが実態</li>
              <li>・SQLでの分析経験があれば、BigQuery未経験でもポテンシャル採用の余地がある（移行ハードルは低め）</li>
              <li>・<strong>Google Cloud・dbt・BIツール</strong>との掛け合わせで市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・市場データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            BigQuery単体の平均年収を集計した公表値は乏しいため、ここでは関連する職種の公表年収で代替します。いずれも出典と時点を明示できる公開データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["データアナリストの平均年収", "約725万円（給与幅446〜1,245万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
                  ["データベースエンジニア関連の平均年収", "453万円（給与幅394〜1,021万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
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
            ※ 上記はBigQuery特化の数値ではなく、関連する職種の代替値です。求人ボックスの値は求人票の記載額を集計したもので、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値です。BigQueryを扱う求人はデータエンジニア・データアナリストなど職種によって年収幅が大きいため、エージェントで最新の保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 用途と求人傾向 */}
        <section id="use" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">BigQueryの用途と求人傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            BigQueryは「データウェアハウス」を軸に複数の用途を持ち、求人はデータ基盤整備・分析の文脈で出ます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { use: "データウェアハウス・分析基盤", note: "大量データの集計・分析。標準SQLでスケールする中核基盤" },
              { use: "BIダッシュボードのデータソース", note: "Looker Studio・Tableau・Power BIの裏側。可視化と連携" },
              { use: "マーケティングデータ統合", note: "GA4・広告データの統合分析。Web系・広告領域で頻出" },
              { use: "BigQuery ML・準リアルタイム分析", note: "SQLでの機械学習、ストリーミング挿入による分析" },
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
              { tier: "入口（ポテンシャル）", req: "SQLでの分析・集計の実務2〜3年／BigQueryは自習レベル／基本的なクエリ", note: "未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "BigQueryでのデータ基盤運用／パーティション・クラスタリングによるコスト最適化／dbt・Airflowでのパイプライン", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "分析基盤のアーキテクチャ設計／データモデリング／コストガバナンス／チームのデータ活用推進", note: "年収800万円以上が狙える層" },
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
            BigQueryはデータエンジニア・アナリティクスエンジニア・データアナリストの方向に展開でき、掛け合わせるスキルで到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "データエンジニア", note: "DWH・パイプラインの設計運用。Google Cloud・Airflow・dbtとの掛け合わせ" },
              { role: "アナリティクスエンジニア", note: "dbtでのデータモデリング。BIチームとデータ基盤の橋渡し" },
              { role: "データアナリスト", note: "BigQuery×BIツールでの分析・可視化。意思決定支援" },
              { role: "データプラットフォームエンジニア", note: "分析基盤のアーキテクチャ設計とコストガバナンス" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            関連スキルは<Link href="/skill/sql/" className="text-petrol hover:underline">SQL</Link>・<Link href="/skill/gcp/" className="text-petrol hover:underline">Google Cloud（GCP）</Link>・<Link href="/skill/data-analyst/" className="text-petrol hover:underline">データアナリスト</Link>のガイドもあわせてご覧ください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            BigQueryを軸にした求人はGoogle Cloud採用企業に集まるため、特定の1社に絞るより複数チャネルを横断するのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。データ基盤・分析職の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。データ基盤・アナリティクスエンジニア級の求人やスカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。BigQueryを採用するWeb系・広告・データ活用企業の求人を探したい場合の選択肢になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからBigQueryに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "SQLの分析経験を土台にする", desc: "SQLでの集計・分析経験があれば、それを土台に「BigQueryは未経験だがキャッチアップ可」とアピールできます。BigQueryは標準SQLで操作できるため、SQLが書ければ移行ハードルは比較的低めです。" },
              { num: "2", title: "無料枠と公開データセットで手を動かす", desc: "BigQueryの無料枠と公開データセットを使い、集計クエリやパーティション・クラスタリングによるスキャン量削減を試した内容をまとめます。クエリのコストをどう抑えたかを言語化すると、実務での評価ポイントになります。" },
              { num: "3", title: "BIツール・dbtと組み合わせる", desc: "Looker StudioやTableauでBigQueryをデータソースにしたダッシュボードを作り、dbtでデータモデリングを試すと、分析基盤を一気通貫で語れる経験になります。" },
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
              <strong>「基盤を回す力」が年齢の不利を相殺する。</strong>BigQueryはSQLで操作できる手軽さゆえ、入口は広い一方、コスト最適化・データモデリング・運用設計の知見は経験に依存します。30代・40代で分析基盤を運用してきたなら、それが武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>「BigQuery＋Google Cloud」「BigQuery＋過去のドメイン知識（小売・広告など）」の掛け合わせがミドル層の強みです。データ分析を業務知識と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>データ活用の推進経験も資産になる。</strong>分析基盤を整備し、組織のデータドリブンな意思決定を後押しした経験は、ハイクラス求人で評価されます。データ活用推進やチーム育成の実績があれば、技術力とセットで提示しましょう。
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
              <strong>① 標準SQLとコスト構造から学ぶ。</strong>BigQueryは標準SQLで操作しますが、課金はスキャンしたデータ量で決まります。パーティション・クラスタリング・必要な列だけ取得するといったコスト意識を、無料枠で手を動かしながら身につけるのが近道です。
            </p>
            <p>
              <strong>② パイプラインとデータモデリングを学ぶ。</strong>BigQuery単体ではなく、Airflow（Cloud Composer）でのスケジューリング、dbtでのデータモデリングまで触ると、データエンジニア／アナリティクスエンジニアとして語れる経験になります。
            </p>
            <p>
              <strong>③ Google Cloudとガバナンスを掛け合わせる。</strong>GCS・Pub/Sub・IAMなどGoogle Cloud全般や、コストガバナンス・アクセス制御まで理解すると、データプラットフォーム領域の求人に手が届きます。
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
          <h2 className="text-xl font-bold mb-3">BigQueryのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            データ基盤・分析の求人はGoogle Cloud採用企業に集まるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "SQLエンジニアの転職ガイド", href: "/skill/sql/" },
              { name: "Google Cloud（GCP）エンジニアの転職ガイド", href: "/skill/gcp/" },
              { name: "データエンジニア／データアナリストの転職ガイド", href: "/skill/data-analyst/" },
              { name: "Tableauエンジニアの転職ガイド", href: "/skill/tableau/" },
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
