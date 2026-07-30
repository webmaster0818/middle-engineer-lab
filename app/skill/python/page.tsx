import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/python/" },
  title: "Pythonエンジニアの転職ガイド｜AI・データ分析の年収と将来性",
  description:
    "Pythonエンジニアの転職市場をAI・データ分析の観点から出典付きで解説。求人ボックスやレバテックの公表年収、Web系からAI/MLへの転向、求人の探し方、30代・40代の戦い方を整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Pythonエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Pythonの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Pythonエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. Web系・未経験からAI/MLへ進むルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Pythonエンジニアの平均年収はどのくらいですか？",
    a: "言語単独の公的平均値は公表が限られますが、求人ボックス「給料ナビ」では正社員のAIエンジニアの平均年収が約571万円、ソフトウェアエンジニアが約511万円と試算されています（掲載求人からの独自集計値）。年代別では、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）が参考になります。Web系かAI/MLかで分布が大きく変わるため、レンジで捉えるのが現実的です。",
  },
  {
    q: "PythonのAI/ML分野の将来性はどうですか？",
    a: "PythonはAI・機械学習・データサイエンス領域で事実上の標準となっており、業務自動化スクリプトやWeb開発まで用途が広いことが需要を支えています。経産省の試算（2019年公表）では2030年に最大約79万人のIT人材不足が見込まれており、AI/ML人材はその中でも不足感の強い領域です。生成AIの普及により、LLM活用やRAG構築の需要も広がっています。",
  },
  {
    q: "Web系PythonからAI/MLに転向できますか？",
    a: "可能です。Django/FastAPIなどのWeb開発経験に加え、NumPy/Pandas/scikit-learnといったデータ分析ライブラリの習得、統計の基礎、そして実データを扱った成果物があると転向しやすくなります。Kaggleでの実績や、業務データを使った分析・モデリングの経験は評価対象になります。",
  },
  {
    q: "データサイエンティストとMLエンジニアの違いは？",
    a: "データサイエンティストはデータ分析・可視化・ビジネスインサイトの抽出が中心で、MLエンジニアはモデルの開発・最適化・本番環境へのデプロイ（MLOps）が中心です。求人票でも求められるスキルセットが分かれており、自分の強みがビジネス寄りか実装・運用寄りかで応募先を選ぶと精度が上がります。",
  },
  {
    q: "40代のPythonエンジニアの転職は厳しいですか？",
    a: "AI/MLやデータ基盤の領域は人材不足が続いており、40代でも需要があります。特にMLOps、データ基盤設計、AI活用の企画・推進ができるシニア層は重宝されます。一方で「Python＝なんでもできる」と漠然と打ち出すと埋もれるため、得意領域（分析／基盤／LLM活用など）を明確にすることが重要です。",
  },
  {
    q: "Pythonエンジニアにおすすめの転職エージェントは？",
    a: "AI/ML関連求人を技術理解のあるアドバイザーが扱うレバテックキャリア、CDOやデータ責任者クラスのハイクラス求人に出会いやすいビズリーチ、金融・製造などの大手データ分析ポジションに強いリクルートエージェントITの併用が選択肢です。複数登録して保有求人を比較するのが現実的です。",
  },
  {
    q: "Pythonは独学でも転職で通用しますか？",
    a: "独学でも、実データを使った成果物（分析レポート・予測モデル・データパイプライン等）をGitHub等で示せれば評価につながります。ただし業務では再現性・運用・データ品質が重視されるため、チュートリアルの写経だけでなく「自分で課題設定して最後まで作った」経験を一つ持っておくと強いです。",
  },
];

export default function PythonSkillPage() {
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
        title="Pythonエンジニアの転職ガイド｜AI・データ分析の年収と将来性"
        description="Pythonエンジニアの転職市場をAI・データ分析の観点から出典付きで解説。求人ボックスやレバテックの公表年収、Web系からAI/MLへの転向、求人の探し方、30代・40代の戦い方を整理します。"
        url="/skill/python/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Pythonエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Pythonエンジニアの転職ガイド｜AI・データ分析の年収と将来性
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 | AI/ML時代のPythonエンジニア転職をミドル層向けに解説
        </p>

        {/* 直答box (柱3/skill転職意図) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Pythonエンジニアへの転職は？AI・データ分析でどう戦う</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: PythonはWeb（Django/FastAPI）からAI・データ分析まで応用範囲が広く、転職の入り口が多い言語です。年収を伸ばす鍵はAI/ML・データ基盤への展開です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
            <li>・<strong>難易度</strong>：Web系Pythonの実務経験があれば転職機会は多い。AI/ML領域は専門性で差がつく。</li>
            <li>・<strong>未経験／転向</strong>：Django/FastAPIでバックエンド実績→NumPy/Pandas/scikit-learn＋統計→データパイプライン/MLOpsの順で橋渡し。</li>
            <li>・<strong>年代別</strong>：レバテック公表のSE年収で30代約499万円・40代約618万円が目安（Python特化ではなくSE全般の参考値）。</li>
            <li>・<strong>進め方</strong>：Web・データ双方に強いエージェントを併用し、求人票で使用領域（Web/データ/ML）と年収を確認。</li>
          </ul>
        </div>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            PythonはAI・機械学習・データサイエンスの事実上の標準言語であり、Web開発（Django/FastAPI）や業務自動化まで用途が広いことから、安定した需要を持つ言語です。一方で「Pythonができる」だけでは差別化が難しく、どの領域で勝負するかの設計が転職成否を分けます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>公表年収データ・求められる経験レベル・求人の探し方・Web系からAI/MLへの転向ルート</strong>を、30代・40代の視点を交えて整理します。
          </p>
                  <p className="text-sm mt-3 text-slate-600">言語別の年収比較は<Link href="/salary/skill-ranking/" className="text-petrol underline font-semibold">プログラミング言語別 年収ランキング</Link>、企業別の有報年収は<Link href="/salary/company-ranking/" className="text-petrol underline font-semibold">IT企業年収ランキング</Link>をご覧ください。</p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Pythonエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Pythonは需要が広い分、領域を絞らないと埋もれます。</strong>「Web系」「データサイエンス」「AI/ML・MLOps」のどこで戦うかを定め、それに沿った成果物と職務経歴で打ち出すのが攻め方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・AI/ML・データ領域は人材不足が強く、求人ボックスではAIエンジニア平均<strong>約571万円</strong>と他職種より高め</li>
              <li>・Web系Python（Django/FastAPI）からAI/MLへは、統計・分析ライブラリの習得で<strong>転向の橋渡し</strong>が可能</li>
              <li>・40代でもMLOps・データ基盤・AI活用推進など<strong>上流・運用の専門性</strong>があれば需要がある</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Python単独の公的平均年収は公表が限られるため、ここでは職種別・年代別の公表データを出典と時点付きで使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["AIエンジニアの平均年収（正社員）", "約571万円", "求人ボックス 給料ナビ（掲載求人からの独自試算）"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（同上）"],
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
            ※ 求人ボックスの値は掲載求人からの試算で、職種ラベルベースのためPython専任の数値ではありません。レバテックの年代別平均はSE全般の値です。AI/MLエンジニアやデータサイエンティストは求人ごとの年収幅が大きいため、具体的なレンジはエージェントで確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Python求人は領域ごとに求められるスキルが大きく異なります。代表的な3領域の要件傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "Web系（Django/FastAPI）", req: "Python実務2〜3年／REST API・DB設計／クラウド（AWS等）／フロントとの連携", note: "Webエンジニアからの近道" },
              { tier: "データサイエンス", req: "統計・分析の基礎／Pandas・scikit-learn／可視化／ビジネス課題への翻訳力", note: "分析・企画寄りの強みが活きる" },
              { tier: "AI/ML・MLOps", req: "PyTorch・TensorFlow／モデル運用・データパイプライン／LLM・RAG活用", note: "不足感が強く高年収が狙える" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Pythonエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI/機械学習エンジニア</h3>
              <p className="text-sm text-petrol-deep">
                機械学習モデルの開発・学習・最適化を担当。PyTorch/TensorFlow、scikit-learn、LangChainなどを使い、プロダクトにAI機能を組み込みます。LLM活用やRAG構築のスキルが特に評価される領域です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データサイエンティスト</h3>
              <p className="text-sm text-petrol-deep">
                データ分析・統計モデリング・ビジネスインサイトの抽出を担当。Pandas/NumPy/可視化ツールを使い、経営判断につながる分析を行います。ビジネス理解力が成果を左右します。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLOps／データ基盤エンジニア</h3>
              <p className="text-sm text-petrol-deep">
                MLモデルの本番運用、データパイプラインの構築・運用を担当。MLflow・Airflow・BigQuery等を扱い、基盤を安定運用します。インフラスキルとPythonの両方が求められます。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの年収レンジは企業・時期で変動するため断定を避けています。面談時にエージェントへ確認してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">AI/ML関連のPython求人が豊富で、技術に精通したアドバイザーがデータサイエンス領域にも対応します。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">CDO／データ責任者クラスのハイクラス求人やスカウトに出会いやすく、年収750万円以上を狙う層に向きます。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（求人数最大級）</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数で、金融・製造などの大手データ分析ポジションが見つかりやすいのが強みです。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web系・未経験からAI/MLへ進むルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Web系Pythonの実務を土台にする", desc: "Django/FastAPIでのバックエンド経験は、データを扱う基礎として強い土台になります。まずはここでPythonの実務実績を作り、API設計・DB・クラウドの経験を語れる状態にしましょう。" },
              { num: "2", title: "統計と分析ライブラリで橋渡しする", desc: "NumPy/Pandas/scikit-learnと統計の基礎を学び、実データで分析・モデリングの成果物を一つ作ります。Kaggleや業務データを題材にすると、面接で具体的に語れます。" },
              { num: "3", title: "運用・基盤の経験で差別化する", desc: "モデルを作るだけでなく、データパイプラインや本番運用（MLOps）まで経験すると、競合の少ない領域で評価されます。インフラ経験があるミドル層は特にここで強みを出せます。" },
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
              <strong>「広く浅く」を避けて領域を定める。</strong>Pythonは用途が広い分、ミドル層が漠然と「Pythonエンジニア」と名乗ると埋もれがちです。これまでのドメイン知識（金融・製造・ヘルスケア等）とPythonを結びつけ、「その業界のデータが分かるPython人材」として打ち出すのが30代・40代の勝ち筋です。
            </p>
            <p>
              <strong>上流・運用の経験が評価される。</strong>MLOps・データ基盤設計・AI活用の企画推進は、若手では担いにくい領域です。マネジメントや要件定義の経験があるなら、実装力とセットで提示すると年齢が強みに変わります。
            </p>
            <p>
              <strong>学び直しのハードルは下がっている。</strong>生成AIの活用で学習効率は上がっており、業務外でも実データを使った成果物を作りやすくなりました。「学び続けている証拠」を一つ持っておくことが、年齢への懸念を払拭します。
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
              <strong>① 課題設定から始める。</strong>チュートリアルの写経ではなく、自分で解きたい課題を一つ決めて最後まで作り切ることが、面接で語れる経験になります。データ収集・前処理・モデリング・評価まで通すと実務感覚が身につきます。
            </p>
            <p>
              <strong>② 再現性と品質を意識する。</strong>業務ではデータ品質・再現性・運用が重視されます。ノートブックで終わらせず、スクリプト化・テスト・環境管理（poetry/uv等）まで整えると、実務レベルのアピールになります。
            </p>
            <p>
              <strong>③ LLM活用を一段深く理解する。</strong>生成AIを「使う」だけでなく、RAGやエージェント構成、評価の仕方まで踏み込むと、需要の高い領域で差別化できます。
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
          <h2 className="text-xl font-bold mb-3">Pythonエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            AI/ML時代のPythonスキルがどう評価されるか、IT特化型エージェントで保有求人を比較してみましょう。
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
              { name: "AI/MLエンジニアの転職ガイド", href: "/skill/ai-ml/" },
              { name: "データサイエンティストの転職ガイド", href: "/skill/data-scientist/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/amazon/" className="text-petrol-deep hover:underline">Amazon／AWS Japan</a></li><li><a href="/company/apple/" className="text-petrol-deep hover:underline">Apple Japan</a></li><li><a href="/company/cyberagent/" className="text-petrol-deep hover:underline">サイバーエージェント</a></li><li><a href="/company/dena/" className="text-petrol-deep hover:underline">DeNA</a></li><li><a href="/company/fujitsu/" className="text-petrol-deep hover:underline">富士通</a></li><li><a href="/company/gmo-internet/" className="text-petrol-deep hover:underline">GMOインターネットグループ</a></li><li><a href="/company/gree/" className="text-petrol-deep hover:underline">グリー（GREE）</a></li><li><a href="/company/ibm/" className="text-petrol-deep hover:underline">日本IBM</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
