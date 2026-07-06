import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/elasticsearch/" },
  title: "Elasticsearchエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Elasticsearchスキルを持つエンジニアの転職市場を出典付きで解説。検索・ログ分析基盤での用途、データエンジニア職種としての年収相場、求人の探し方、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Elasticsearchスキルの転職市場の攻め方" },
  { id: "market", label: "2. 年収・市場データ（出典付き）" },
  { id: "use", label: "3. Elasticsearchの用途と求人傾向" },
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
    q: "Elasticsearchを扱うエンジニアの年収相場はどのくらいですか？",
    a: "Elasticsearch単体での平均年収を集計した公的な公表値は乏しいため、本記事では職種年収で代替します。求人ボックス「給料ナビ」（2026年6月時点）では、データベースエンジニア関連の平均年収は453万円（給与幅394〜1,021万円）、データアナリストは約725万円（給与幅446〜1,245万円）です。Elasticsearchは検索・ログ分析基盤の構築運用で使われるため、データエンジニア／バックエンド／SRE職種の年収レンジで評価されるのが実態です。",
  },
  {
    q: "Elasticsearchはどんな場面で使われていますか？",
    a: "全文検索エンジンとして、ECサイトの商品検索、アプリ内検索、サイト内検索に使われるほか、Kibana・Logstash・Beatsと組み合わせたELKスタックでログ分析・監視・可観測性（オブザーバビリティ）基盤としても広く使われます。近年はベクトル検索によるセマンティック検索や、RAG（検索拡張生成）のバックエンドとしての採用も増えています。",
  },
  {
    q: "Elasticsearchの求人はどんな企業に多いですか？",
    a: "大量データの検索やログ集約を必要とするWeb系・SaaS・EC企業、SRE／オブザーバビリティを内製する企業に多く見られます。求人票では「検索基盤の設計運用」「ELKによるログ基盤構築」「ベクトル検索の実装」といった文脈で登場します。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Elasticsearch未経験でも転職は可能ですか？",
    a: "バックエンドやインフラの実務経験があれば、Elasticsearch未経験でもポテンシャル採用の対象になり得ます。ローカルやDockerでクラスタを構築し、インデックス設計・クエリDSL・アナライザの調整を試した実績をGitHubやブログで示すと、学習意欲と基礎力を提示できます。検索の精度改善やシャード設計など、運用の勘所を語れると評価が上がります。",
  },
  {
    q: "Elasticsearchと一緒に求められるスキルは何ですか？",
    a: "ELKスタックのKibana・Logstash、データ収集のBeats・Fluentd、コンテナ運用のDocker・Kubernetes、クラウドのAWS（OpenSearch含む）・GCPなどが頻出します。検索精度を扱うなら自然言語処理や形態素解析の知識、ログ基盤ならSRE的な監視・アラート設計の知識が掛け合わせとして強みになります。",
  },
  {
    q: "Elasticsearchスキルの将来性はどうですか？",
    a: "検索とログ分析はサービス規模が大きくなるほど必要性が増す領域で、ベクトル検索・セマンティック検索・RAG基盤としての用途拡大もあり、需要は底堅いと考えられます。ただしマネージドサービス（AWS OpenSearch等）の普及で「構築よりチューニング・運用設計」が問われる傾向があり、精度改善や大規模運用の経験が差別化要因になります。",
  },
  {
    q: "Elasticsearchエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でデータ基盤・SRE級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Elasticsearchを軸にした求人は母数が限られるため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

export default function ElasticsearchSkillPage() {
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
        title="Elasticsearchエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Elasticsearchスキルを持つエンジニアの転職市場を出典付きで解説。検索・ログ分析基盤での用途、データエンジニア職種としての年収相場、求人の探し方、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/elasticsearch/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Elasticsearchエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Elasticsearchエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Elasticsearchスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Elasticsearchは、全文検索とログ分析を高速に実現する分散型の検索・分析エンジンです。ECサイトの商品検索からELKスタックによるログ基盤、近年はベクトル検索によるセマンティック検索やRAG（検索拡張生成）のバックエンドまで、用途が広がっています。求人ではデータエンジニア・バックエンド・SREといった職種の文脈で評価されるのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Elasticsearchスキルを軸にした転職の「攻め方」を、<strong>公表年収データ・用途と求人傾向・求められる経験レベル・関連技術・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」（データベースエンジニア／データアナリスト）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Elasticsearchスキルの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Elasticsearchは「単体スキル」ではなく「検索・ログ基盤の構築運用力」として評価されます。</strong>言語そのものより、何を解決した経験があるか（検索精度・大規模ログ・可観測性）が問われます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Elasticsearch単体の公表年収は乏しいため、<strong>データエンジニア／データアナリスト等の職種年収で代替</strong>して捉えるのが実態</li>
              <li>・バックエンド・インフラ経験があれば、Elasticsearch未経験でもポテンシャル採用の余地がある</li>
              <li>・<strong>クラウド・Kubernetes・ベクトル検索</strong>との掛け合わせで市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・市場データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Elasticsearch単体の平均年収を集計した公表値は乏しいため、ここでは関連する職種の公表年収で代替します。いずれも出典と時点を明示できる公開データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["データベースエンジニア関連の平均年収", "453万円（給与幅394〜1,021万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
                  ["データアナリストの平均年収", "約725万円（給与幅446〜1,245万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
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
            ※ 上記はElasticsearch特化の数値ではなく、関連する職種の代替値です。求人ボックスの値は求人票の記載額を集計したもので、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値です。Elasticsearchを扱う求人は検索基盤・ログ基盤・データエンジニアなど職種によって年収幅が大きいため、エージェントで最新の保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 用途と求人傾向 */}
        <section id="use" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Elasticsearchの用途と求人傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Elasticsearchは「検索」と「ログ分析」の二つの大きな用途を持ち、求人もこのどちらか（または両方）の文脈で出ます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { use: "全文検索・サイト内検索", note: "EC商品検索、アプリ内検索。アナライザ・スコアリング設計が問われる" },
              { use: "ログ分析・可観測性（ELK）", note: "Kibana・Logstash・Beatsと組み合わせたログ基盤・監視。SRE領域と重なる" },
              { use: "ベクトル検索・セマンティック検索", note: "埋め込みベクトルによる意味検索。RAG基盤としての採用が増加" },
              { use: "大規模データの集計・分析", note: "Aggregationによるリアルタイム集計。ダッシュボード用途" },
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
              { tier: "入口（ポテンシャル）", req: "バックエンドまたはインフラの実務2〜3年／Elasticsearchは自習レベル／基本的なクエリDSL", note: "未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "検索基盤またはELKログ基盤の構築運用／インデックス・シャード設計／チューニング経験", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模クラスタの設計・運用／検索精度の継続改善／ベクトル検索やRAG基盤の設計", note: "年収800万円以上が狙える層" },
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
            Elasticsearchはバックエンド・データエンジニア・SREのいずれの方向にも展開でき、掛け合わせるスキルで到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "データエンジニア", note: "検索・ログ基盤の構築運用。SQL・Python・クラウドとの掛け合わせ" },
              { role: "SRE／オブザーバビリティエンジニア", note: "ELKによる監視・ログ基盤。Kubernetes・可観測性ツールと連携" },
              { role: "検索基盤エンジニア", note: "検索精度の改善・ランキング設計。自然言語処理の知識が活きる" },
              { role: "バックエンドエンジニア", note: "アプリ内検索の実装。API設計とElasticsearch運用の両立" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            関連スキルは<Link href="/skill/sql/" className="text-petrol hover:underline">SQL</Link>・<Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>・<Link href="/skill/data-analyst/" className="text-petrol hover:underline">データアナリスト</Link>のガイドもあわせてご覧ください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Elasticsearchを軸にした求人は母数が限られるため、特定の1社に絞るより複数チャネルを横断するのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。検索基盤・データ基盤の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。データ基盤・SRE級の求人やスカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Elasticsearchを採用するWeb系企業の求人を探したい場合の選択肢になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからElasticsearchに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "バックエンド・インフラ経験を土台にする", desc: "API開発やインフラ運用の経験があれば、それを土台に「Elasticsearchは未経験だがキャッチアップ可」とアピールできます。検索やログという課題に対する理解があると説得力が増します。" },
              { num: "2", title: "ローカル・Dockerでクラスタを構築して公開する", desc: "Docker ComposeでElasticsearch＋Kibanaを立て、インデックス設計・クエリDSL・アナライザ調整・Aggregationを試した内容をGitHubやブログで公開します。検索精度をどう改善したかを言語化すると評価につながります。" },
              { num: "3", title: "ELKによるログ基盤を題材にする", desc: "自作アプリのログをLogstash／BeatsでElasticsearchに集約し、Kibanaで可視化する小さな基盤を作ると、ログ分析・可観測性の文脈で語れる経験になります。" },
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
              <strong>「運用と改善」の経験が年齢の不利を相殺する。</strong>Elasticsearchはマネージドサービスの普及で構築のハードルが下がった一方、大規模運用やチューニング・精度改善の知見は人に依存します。30代・40代で実運用を経験しているなら、それがそのまま武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>「Elasticsearch＋クラウド」「Elasticsearch＋過去のドメイン知識（EC・金融など）」の掛け合わせがミドル層の強みです。検索や分析という課題を業務知識と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>基盤の意思決定経験も資産になる。</strong>検索基盤・ログ基盤の技術選定やコスト最適化を主導した経験は、ハイクラス求人で評価されます。マネジメントや技術選定の実績があれば、技術力とセットで提示しましょう。
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
              <strong>① 公式ドキュメントとクエリDSLから学ぶ。</strong>Elasticsearchは公式ドキュメントが充実しています。インデックスのマッピング、アナライザ、クエリDSL、Aggregationという基礎を、実際にデータを入れて手を動かしながら理解するのが近道です。
            </p>
            <p>
              <strong>② ELKスタック全体を触る。</strong>Elasticsearch単体ではなく、Kibanaでの可視化、Logstash／Beatsでのデータ収集まで一通り触ると、検索とログ分析の両方の文脈で語れるようになります。
            </p>
            <p>
              <strong>③ クラウドと運用設計を掛け合わせる。</strong>AWS OpenSearchやElastic CloudなどマネージドサービスとKubernetes運用を組み合わせると、SRE／データ基盤領域の求人に手が届きます。シャード設計や性能チューニングの実践経験が差別化要因です。
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
          <h2 className="text-xl font-bold mb-3">Elasticsearchのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            検索・データ基盤の求人は母数が限られるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "データエンジニア／データアナリストの転職ガイド", href: "/skill/data-analyst/" },
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
