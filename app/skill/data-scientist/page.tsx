import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "データサイエンティスト転職の攻め方｜年収・未経験ルート【2026年】",
  description:
    "データサイエンティストの転職市場を2026年6月時点の公的データで整理。厚労省job tagの平均年収611.9万円、求められる経験レベル、求人の探し方、エンジニアからの転向・未経験参入ルートまで実務目線で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：データサイエンティスト転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方（強いサービス）" },
  { id: "entry", label: "未経験・経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const skillTable = [
  { cat: "プログラミング", must: "Python, SQL", plus: "R, Scala" },
  { cat: "統計・数学", must: "記述/推測統計、検定の基礎", plus: "ベイズ統計、因果推論" },
  { cat: "機械学習", must: "scikit-learn、基本アルゴリズム", plus: "深層学習（PyTorch/TensorFlow）" },
  { cat: "データ基盤", must: "BigQuery or Redshift", plus: "Spark, Airflow, dbt" },
  { cat: "可視化", must: "Matplotlib, BIツール", plus: "Looker, Streamlit" },
  { cat: "ビジネス", must: "課題定義力、説明力", plus: "ドメイン知識（金融、EC等）" },
];

const faqs = [
  {
    q: "データサイエンティストの平均年収は？",
    a: "厚生労働省 job tagの「データサイエンティスト」職業区分では平均年収611.9万円・平均年齢43.9歳（令和7年賃金構造基本統計調査の結果を加工）と公表されています。年代別の目安としては、レバテック公表の正社員SE年収（2025年）で20代約378万円・30代約499万円・40代約618万円が参考になります。外資系ITやAIスタートアップなど、データ活用が事業の中核の企業ではこれより高い水準も見られます。",
  },
  {
    q: "未経験からデータサイエンティストになれる？",
    a: "可能ですが、一定の準備期間が必要です。統計の基礎、Python、SQL、機械学習の入門を順に固め、公開データでの分析プロジェクトをポートフォリオにまとめるのが王道です。いきなりDS職を狙うより、データアナリストやBI担当からスタートして段階的に寄せていくルートのほうが現実的なケースが多いです。",
  },
  {
    q: "エンジニアからデータサイエンティストへの転向は有利？",
    a: "有利に働きやすいです。非エンジニア出身者はプログラミングや再現性のある分析環境構築が弱点になりがちですが、エンジニアなら効率的なデータ処理・パイプライン構築・本番実装まで一貫してこなせます。とくにモデルの本番運用（MLOps）まで担える人は希少で評価されやすい傾向です。",
  },
  {
    q: "データサイエンティストとMLエンジニアの違いは？",
    a: "データサイエンティストはデータ分析・可視化・ビジネスインサイトの抽出が中心、MLエンジニアはモデルの設計・開発・本番デプロイが中心です。境界は企業によって曖昧で、実際には両方の要素を求められることも多くあります。求人票の業務内容で『分析中心か実装中心か』を見極めるのが大切です。",
  },
  {
    q: "どの資格を取るべき？",
    a: "統計検定、G検定（JDLA）、クラウドのMachine Learning認定などが学習の体系化に役立ちます。ただし採用時に最も見られるのは資格よりKaggleの実績やポートフォリオ、業務での分析成果です。資格は学習のペースメーカーと書類選考の目印、と位置づけるのが現実的です。",
  },
  {
    q: "データサイエンティストの転職に強いエージェントは？",
    a: "IT/Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、大手企業のデータ活用求人を幅広く扱うリクルートエージェントITが候補です。スキルを数値で示したい人にはスキルチェック型のpaiza転職も向いています。",
  },
  {
    q: "データアナリストとの違いと、どちらから入るべき？",
    a: "データアナリストはBI・レポーティング・施策の効果検証など『今あるデータから示唆を出す』比重が高く、データサイエンティストは予測モデルの構築まで踏み込む比重が高い、というのが一般的な切り分けです。未経験寄りの人はアナリストから入って実績を積み、DSへ寄せていくと無理がありません。",
  },
];

export default function DataScientistPage() {
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
        title="データサイエンティスト転職の攻め方｜年収・未経験ルート【2026年】"
        description="データサイエンティストの転職市場を2026年6月時点の公的データで整理。厚労省job tagの平均年収611.9万円、求められる経験レベル、求人の探し方、エンジニアからの転向・未経験参入ルートまで実務目線で解説します。"
        url="/skill/data-scientist/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "データサイエンティスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データサイエンティスト転職の攻め方｜年収・未経験ルート【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | データサイエンティストの転職市場を公的データと年代別データで整理
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag「データサイエンティスト」（令和7年賃金構造基本統計調査の結果を加工）",
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
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：データサイエンティスト転職の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              データサイエンティストは人気職種ゆえに志望者が多く、<strong>「分析できます」だけでは差がつきにくい</strong>のが実情です。攻め方は、自分の強みが『分析の深さ』なのか『実装・運用の確かさ』なのかを定め、それに合う企業へ寄せること。要点は3つです。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li>① <strong>ビジネス課題→分析→示唆→施策反映</strong>まで一気通貫で語れる事例を1つは用意する（分析だけで終わらせない）。</li>
              <li>② エンジニア出身なら<strong>「本番で動かせる」実装力・MLOps</strong>を前面に出し、純分析職の志望者と土俵をずらす。</li>
              <li>③ いきなりDS職に固執せず、<strong>データアナリスト等の隣接職を踏み台</strong>にする選択肢も持っておく。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            厚生労働省 job tagの「データサイエンティスト」職業区分では、<strong>平均年収611.9万円・平均年齢43.9歳</strong>と公表されています（令和7年賃金構造基本統計調査の結果を加工して作成）。国内の給与所得者全体の平均と比べると高めの水準で、データ活用人材への需要の高さを反映していると読めます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年代別の目安としては、レバテックが公表する正社員SEの年代別平均年収（2025年）が参考になります。データ活用が事業の中核を担う企業では、これより上振れするケースもあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代でのDS領域の役割イメージ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20代", "約378万円", "データ抽出・前処理・基本的な分析の担当"],
                  ["30代", "約499万円", "分析設計〜示唆出しを一人称で回すDS"],
                  ["40代", "約618万円", "分析チームのリード・経営課題への提言"],
                  ["50代", "約685万円", "データ組織のマネジメント・戦略立案"],
                ].map(([age, salary, role], i) => (
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
            ※出典：厚生労働省 job tag「データサイエンティスト」（令和7年賃金構造基本統計調査の結果を加工）、レバテック公表 年代別平均年収（2025年）。役割イメージは求人要件の一般的傾向に基づく目安で、個別企業の提示額を保証するものではありません。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（必要スキルの傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            求人によって「分析寄り」「エンジニアリング寄り」の比重が変わります。下表は多くの求人で共通して見られる必須スキルと、評価が上がる加点スキルの整理です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">カテゴリ</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">必須レベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">あると有利</th>
                </tr>
              </thead>
              <tbody>
                {skillTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.cat}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.must}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            実務では「高度なモデルを作る力」より「課題を分析可能な問いに落とし込み、結果を意思決定者に伝える力」が効く場面が多くあります。技術と説明力の両輪で見せられると強いです。
          </p>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">分析スペシャリスト路線</h3>
              <p className="text-sm text-blue-700">
                高度な分析・モデリングを深めるスペシャリスト。因果推論や実験設計、ドメイン特化の分析力を武器にします。事業の意思決定に効く示唆を出し続けられるかが価値の源泉です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">MLエンジニア / データエンジニア路線</h3>
              <p className="text-sm text-blue-700">
                モデルや分析を本番で動かす実装・基盤側へ寄せる路線。ソフトウェアエンジニアリングの経験が活き、エンジニア出身者が強みを出しやすいルートです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ組織のマネジメント路線</h3>
              <p className="text-sm text-blue-700">
                分析チームのリードやデータ組織の責任者へ。技術・ビジネス・組織づくりの橋渡しが求められ、30代後半〜40代で経験を活かしやすい方向です。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どのサービスが強いか）</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT特化エージェント）</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化で高年収求人比率が高く、データサイエンス・ML領域の専門ポジションを扱う。技術理解のあるアドバイザーに相談しやすいのが利点です。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">年収750万円以上のハイクラス帯に強く、外資系やデータ活用に力を入れる企業のスカウトが届きやすい。市場価値を測る用途でも有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（国内最大級）</h3>
              <p className="text-sm text-slate-600 mb-2">圧倒的な求人数と非公開求人が強み。大手企業のデータ活用ポジションを含め、幅広い選択肢から探したい人に向きます。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの複数併用ガイド</Link>、各社比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント比較</Link>もどうぞ。
          </p>
        </section>

        {/* 未経験・経験浅めからの参入ルート */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・経験浅めからの参入ルート</h2>
          <div className="space-y-3">
            {[
              { period: "1〜3ヶ月", title: "基礎を固める", desc: "Pythonの基礎、SQL、記述/推測統計を学習。手を動かして小さな分析を回せる状態を目指します。" },
              { period: "4〜6ヶ月", title: "機械学習入門", desc: "scikit-learnで回帰・分類・クラスタリングを実践。Kaggleの入門コンペで一連の流れに慣れます。" },
              { period: "7〜9ヶ月", title: "実プロジェクト", desc: "公開データで課題定義から示唆出しまで通したプロジェクトを実施し、GitHub・ブログで公開してポートフォリオ化します。" },
              { period: "10〜12ヶ月", title: "転職活動", desc: "DS求人に応募。未経験寄りならデータアナリストから入って実績を積み、段階的にDSへ寄せるのが現実的です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
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
              job tagのデータサイエンティスト区分の平均年齢が<strong>43.9歳</strong>であることからも分かるように、この職種は若手限定ではなく、経験を積んだ層が一定の比率を占めます。30代・40代のエンジニアが持つ<strong>ドメイン知識・課題定義力・本番実装の経験</strong>は、純粋な分析スキル以上に評価されることがあります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              一方で、未経験から「分析専任のジュニアDS」を狙うと、統計・数理に強い若手や新卒と競合しやすくなります。30代・40代は<strong>既存の開発・運用経験が複利で効くMLOps・データ基盤・分析チームのリード</strong>に照準を合わせると勝率が上がります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              年代別の市場感は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職事情</Link>、年収の考え方は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収相場</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3">
            {[
              { t: "土台：統計＋Python＋SQL", d: "高度なアルゴリズムの前に、統計の基礎とデータ操作（Python・SQL）を確実に。実務の8割はここで動きます。" },
              { t: "実装：課題ドリブンの成果物を1本", d: "『この課題を、このデータで、こう分析して、こう改善した』と言える事例を作る。技術より物語の一貫性が効きます。" },
              { t: "強み：エンジニア経験を武器化", d: "再現性のある分析環境、パイプライン、本番実装まで見せられると、純分析職の志望者と差別化できます。" },
              { t: "証明：資格は補助線", d: "統計検定・G検定などは学習の体系化に有効。ただし主役はポートフォリオと業務成果と割り切るのが現実的です。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            成果物の作り方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>、学習の続け方は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">エンジニアの継続学習</Link>も参考になります。
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
          <h2 className="text-xl font-bold mb-3">データサイエンスの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            AI/ML領域に強いIT特化型エージェントに登録して、データサイエンティストのキャリアを相談しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
              { name: "データベースエンジニア転職ガイド", href: "/skill/sql/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
