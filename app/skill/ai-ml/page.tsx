import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/ai-ml/" },
  title: "AI・機械学習エンジニア転職の攻め方｜年収・求人の探し方【2026年】",
  description:
    "AI・機械学習エンジニアの転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、求められる経験レベル、求人の探し方、30代・40代の参入ルートまで実務目線で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：AI・MLエンジニア転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方（強いサービス）" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const salaryByAge = [
  ["20代", "約378万円", "実装担当・データ前処理〜モデル試作の補助"],
  ["30代", "約499万円", "モデル設計〜本番化を一人称で回すMLエンジニア"],
  ["40代", "約618万円", "MLチームのリード・AI活用の意思決定に関与"],
  ["50代", "約685万円", "技術責任者・AI戦略/組織づくり"],
];

const faqs = [
  {
    q: "AI・機械学習エンジニアの平均年収は？",
    a: "厚生労働省 job tagの「AIエンジニア」職業区分では平均年収約609.8万円・平均年齢42.2歳（令和7年賃金構造基本統計調査の結果を加工）と公表されています。ただしこれはIT職種を広くまとめた統計区分の参考値です。年代別の実感に近い水準としては、レバテック公表の正社員SE年収（2025年）で20代約378万円・30代約499万円・40代約618万円が一つの目安になります。AIスキルが評価される企業ではこれより上振れするケースもあります。",
  },
  {
    q: "AI・機械学習エンジニアの将来性は？",
    a: "生成AI（LLM）の普及で、AIを業務に組み込む企業は全産業に広がっています。経済産業省「IT人材需給に関する調査」（2019年3月公表）では2030年に最大約79万人のIT人材不足が試算されており、AI・データ系はその中でも需要が高い領域とされています。需要は当面続く見通しですが、具体的な不足人数や倍率を断定するのは避けたほうが無難です。",
  },
  {
    q: "AI・機械学習エンジニアの転職で有利なスキルは？",
    a: "Python（NumPy/pandas/PyTorch・TensorFlow）の実務経験、データパイプライン構築、MLOps（学習〜デプロイ〜監視の自動化）の経験が中核です。近年はLLM活用（RAG・プロンプト設計・ファインチューニング）の実装経験を求める求人が増えています。統計・線形代数の基礎と、論文や公式ドキュメントを読み解く力もプラスに働きます。",
  },
  {
    q: "バックエンドエンジニアからAI・MLへの転向は可能ですか？",
    a: "可能です。Pythonでの開発経験やAPI・インフラの知識はMLOpsやデータエンジニアリング領域でそのまま活きます。まずは既存業務にデータ処理やモデル推論のAPI化といった形でAI要素を取り込み、社内実績を作ってから転職するルートが現実的です。",
  },
  {
    q: "AI・機械学習エンジニアにおすすめの転職エージェントは？",
    a: "IT/Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型で外資系テックやAIスタートアップの求人が集まるビズリーチ、Web系企業のAI活用ポジションに強いGeeklyの併用が候補です。スキルを数値で示したい人はスキルチェック型のpaiza転職も選択肢になります。",
  },
  {
    q: "40代のAI・機械学習エンジニアでも転職できますか？",
    a: "可能性は十分あります。レバテック公表（2025年）の年代別では40代の正社員SE平均は約618万円で、AIプロジェクトのマネジメントやビジネスサイドとの折衝経験を持つ層は評価されやすい傾向です。実装力だけで若手と勝負するより、課題定義・プロジェクト推進・チーム育成まで含めて見せるのが有効です。",
  },
  {
    q: "資格は転職に必要ですか？",
    a: "必須ではありませんが、学習の体系化と書類選考での目印になります。JDLAのG検定・E資格、統計検定、クラウド系のMachine Learning認定などが代表例です。ただし採用側が最も見るのは「何をどう作り、どんな成果につながったか」です。Kaggleやポートフォリオ、業務での改善実績のほうが評価に直結します。",
  },
];

export default function AiMlSkillPage() {
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
        title="AI・機械学習エンジニア転職の攻め方｜年収・求人の探し方【2026年】"
        description="AI・機械学習エンジニアの転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、求められる経験レベル、求人の探し方、30代・40代の参入ルートまで実務目線で解説します。"
        url="/skill/ai-ml/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "AI・機械学習エンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AI・機械学習エンジニア転職の攻め方｜年収・求人の探し方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AI・機械学習エンジニアの転職市場を公的データと年代別データで整理
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag「AIエンジニア」（令和7年賃金構造基本統計調査の結果を加工）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AI・MLエンジニア転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              AI・機械学習領域は「求人DBに大量の検索結果が並ぶ職種」ではなく、<strong>企業ごとに求める実装フェーズが大きく異なる職種</strong>です。だからこそ、求人サイトを眺めるより「自分の実装範囲（試作なのか本番運用なのか）を言語化し、それに合う企業へ狙い撃ちする」ほうが成功率が上がります。攻め方は次の3点です。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li>① <strong>「モデルを作れる」だけでなく「本番で動かし、改善した」実績</strong>を中心に経歴を組む（MLOps・データ基盤の経験が差別化になる）。</li>
              <li>② LLM活用（RAG・エージェント・評価設計）の<strong>具体的な実装経験</strong>を1つは持っておく。2026年現在、求人要件に最も入りやすいテーマ。</li>
              <li>③ IT特化エージェント（レバテックキャリア等）とハイクラススカウト（ビズリーチ）を<strong>併用</strong>し、非公開のAI専任ポジションを拾う。</li>
            </ul>
          </div>
                  <p className="text-sm mt-3 text-slate-600">言語別の年収比較は<Link href="/salary/skill-ranking/" className="text-petrol underline font-semibold">プログラミング言語別 年収ランキング</Link>、企業別の有報年収は<Link href="/salary/company-ranking/" className="text-petrol underline font-semibold">IT企業年収ランキング</Link>をご覧ください。</p>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公的データを見るときの注意点として、厚生労働省 job tagのIT系職業区分は複数の職種で同一の統計値が表示される傾向があり、職種固有の精密値として扱うには注意が必要です。job tagの「AIエンジニア」職業区分では<strong>平均年収約609.8万円・平均年齢42.2歳</strong>（令和7年賃金構造基本統計調査の結果を加工）と公表されていますが、これは情報処理・通信技術者を広くまとめた区分の参考値と捉えるのが安全です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年代別の実感に近い目安としては、レバテックが公表する正社員SEの年代別平均年収（2025年）が参考になります。AIスキルが直接評価される企業では、これより上振れするケースもあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代でのAI・ML領域の役割イメージ</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map(([age, salary, role], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※年収は出典：厚生労働省 job tag「AIエンジニア」（令和7年賃金構造基本統計調査の結果を加工）、レバテック公表 年代別平均年収（2025年）。職種の役割イメージは求人要件の一般的傾向をもとにした目安で、個別企業の提示額を保証するものではありません。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AI・ML求人は「研究寄り」と「プロダクト実装寄り」で求められるものが大きく分かれます。30代・40代の転職では、研究色の強いリサーチ職よりも、既存の開発経験を活かせる<strong>実装・運用寄りのポジション</strong>のほうが入り口として現実的です。
          </p>
          <div className="space-y-3">
            {[
              { t: "土台として求められやすい", d: "Pythonでのデータ処理（pandas/NumPy）、SQL、Git・CI/CD、クラウド（AWS/GCP/Azureいずれか）の基本。既存のバックエンド/インフラ経験はそのまま評価対象になります。" },
              { t: "AI・MLの中核として見られる", d: "教師あり学習の一連の流れ（前処理→特徴量設計→学習→評価）を一人称で回せること。scikit-learn・PyTorch/TensorFlowのいずれかでの実装経験。" },
              { t: "差別化になる", d: "MLOps（MLflow・SageMaker・Kubeflow等での運用自動化）、データ基盤（BigQuery/Snowflake・dbt・Airflow）、LLM活用（RAG・評価・コスト最適化）の実装実績。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLエンジニア / MLOps路線</h3>
              <p className="text-sm text-petrol-deep">
                機械学習モデルを本番で安定稼働させる基盤を作る役割。モデルのデプロイ・監視・再学習パイプライン構築が中心で、ソフトウェアエンジニアリングの経験が強く活きます。バックエンド/インフラ出身者が最も入りやすいルートです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">LLMアプリケーション開発路線</h3>
              <p className="text-sm text-petrol-deep">
                生成AIを組み込んだ機能・プロダクトを設計・実装する役割。RAG構成、プロンプト・評価設計、コストとレイテンシの最適化が求められます。2026年現在、未経験職種からの参入余地が比較的大きいテーマです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リサーチ / AI事業責任者路線</h3>
              <p className="text-sm text-petrol-deep">
                最先端研究の応用を担うリサーチ職や、AI活用の方針を決めるリード・責任者へ。論文読解・実装力、あるいは技術とビジネスの橋渡し力が問われます。30代後半〜40代では、後者のマネジメント寄りに強みを出す人が多い領域です。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どのサービスが強いか）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AI・ML求人は専門性が高く、非公開で動くことも多いため、特化型エージェントとスカウト型を組み合わせるのが定石です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT特化エージェント）</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化で高年収求人比率が高く（600万円以上が公開求人の約8割との二次情報）、AI/MLやMLOpsの専門ポジションを扱う。技術理解のあるアドバイザーに相談しやすいのが利点です。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">年収750万円以上のハイクラス帯に強く、外資系テックやAIスタートアップのスカウトが届きやすい。市場価値を客観的に測る用途でも有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（IT/Web/ゲーム特化）</h3>
              <p className="text-sm text-slate-600 mb-2">提案スピードが速く、SaaS・メガベンチャーのAI活用ポジションに強い。実務経験者への提案数が多いとの評判が見られます。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの複数併用ガイド</Link>、各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント比較</Link>も参考にしてください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「AI・ML未経験だがエンジニア経験はある」という人向けの、無理のない順序です。いきなりリサーチ職を狙うより、隣接領域から橋を架けるのが堅実です。
          </p>
          <div className="space-y-3">
            {[
              { n: "1", t: "現職にAI要素を持ち込む", d: "既存業務でデータ前処理の自動化、推論APIの組み込み、LLMを使った社内ツール作成など、小さくても実務でAIに触れた実績を作る。これが職務経歴書の核になります。" },
              { n: "2", t: "隣接職種を踏み台にする", d: "データエンジニア／MLOps／LLMアプリ開発など、既存スキルの延長で入れる職種から入り、社内でモデル側へ寄せていく。データアナリスト→DSという段階移行も現実的です。" },
              { n: "3", t: "成果物を外に出す", d: "Kaggle参加、GitHubでの公開、技術ブログでの再現実装など、第三者が検証できる形でアウトプットする。30代以降は『学習中』より『作った』を見せるのが効きます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                  <p className="text-sm text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              30代・40代がAI・ML領域を狙うときの最大の武器は、若手にはない<strong>「課題定義」と「本番運用」の経験</strong>です。最新モデルの実装速度では若手に分があっても、ビジネス課題をAIで解ける形に落とし込み、運用に乗せて改善し続けられる人は希少です。レバテック公表（2025年）でも年収は年代とともに上がる傾向（30代約499万円→40代約618万円）で、経験の積み上げが評価される領域といえます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              一方で注意したいのは、「研究色の濃いリサーチサイエンティスト職」を未経験から狙うと、専門特化の若手・修士博士層と正面衝突しやすい点です。30代・40代は<strong>MLOps・データ基盤・LLMアプリ開発・AIプロジェクトのリード</strong>といった、既存経験が複利で効くポジションに照準を合わせると勝率が上がります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              年代別の市場感は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職事情</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3">
            {[
              { t: "土台：Python＋数理＋クラウド", d: "Pythonでのデータ処理を手に馴染ませ、統計・線形代数の基礎を最小限押さえる。クラウド（AWS/GCP/Azure）のどれか一つで学習〜推論を回せるようにしておくと求人の幅が広がります。" },
              { t: "実装：再現できる成果物を1〜2本", d: "公開データセットで前処理から評価まで通したプロジェクトをGitHubに置く。『何の課題を、どんな手法で、どこまで改善したか』をREADMEで説明できる状態が理想です。" },
              { t: "旬：LLM活用を1テーマ深掘り", d: "RAGの構築、評価指標の設計、コスト/レイテンシ最適化など、2026年の求人で求められやすいテーマを一つ実装まで持っていく。面接での具体例に直結します。" },
              { t: "証明：資格は学習のペースメーカーに", d: "G検定・E資格（JDLA）、統計検定、クラウドのML認定は学習の体系化に有効。ただし採用判断の主役は成果物。資格は補助線と割り切るのが現実的です。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学び続ける習慣づくりは<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの継続学習</Link>、成果物の作り方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>も参考になります。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">AI・機械学習エンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントとハイクラススカウトを併用して、AI・MLスキルの今の評価を確かめましょう。
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
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "データベースエンジニア転職ガイド", href: "/skill/sql/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/canon/" className="text-petrol-deep hover:underline">キヤノン</a></li><li><a href="/company/fujifilm/" className="text-petrol-deep hover:underline">富士フイルム</a></li><li><a href="/company/ibm/" className="text-petrol-deep hover:underline">日本IBM</a></li><li><a href="/company/nec/" className="text-petrol-deep hover:underline">NEC</a></li><li><a href="/company/omron/" className="text-petrol-deep hover:underline">オムロン</a></li><li><a href="/company/preferred-networks/" className="text-petrol-deep hover:underline">Preferred Networks（PFN）</a></li><li><a href="/company/smartnews/" className="text-petrol-deep hover:underline">SmartNews</a></li><li><a href="/company/softbank/" className="text-petrol-deep hover:underline">ソフトバンク</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
