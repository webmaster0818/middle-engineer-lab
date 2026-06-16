import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "データアナリストからデータサイエンティストへの転職｜移行ステップ";
const DESC =
  "データアナリストからデータサイエンティストへ移行する進め方を、スキルギャップ比較表・在職中の学習ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実も正直に紹介します。";
const URL = "/career/data-analyst-to-scientist/";

export const metadata: Metadata = { title: TITLE, description: DESC };

const toc = [
  { id: "conclusion", label: "結論：現実性と攻め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  { axis: "SQL・データ抽出", analyst: "◎ 集計・可視化の主業務", scientist: "○ 前提スキルとして活きる", gap: "活用" },
  { axis: "ビジネス課題の理解", analyst: "◎ 指標設計・示唆出しが得意", scientist: "◎ 課題を予測問題に翻訳する力に直結", gap: "活用" },
  { axis: "統計・数理", analyst: "○ 記述統計・基本的な検定", scientist: "◎ 推測統計・確率モデルの理解が必要", gap: "中" },
  { axis: "機械学習", analyst: "△ 触れる機会が限定的", scientist: "◎ モデル構築・評価・改善が中核", gap: "大" },
  { axis: "Python（分析〜実装）", analyst: "○ pandas等での集計は経験あり", scientist: "◎ scikit-learn等でのモデリングまで", gap: "中" },
  { axis: "実験設計・評価", analyst: "○ A/Bテストの集計経験", scientist: "◎ 検証設計とモデル評価指標の理解", gap: "中" },
];

const buildSteps = [
  { title: "統計・数理の土台を固める", desc: "推測統計、確率分布、回帰、仮説検定などをアナリストの実務知識の上に積み増します。記述統計どまりだった部分を、モデルの前提を説明できる水準まで引き上げます。" },
  { title: "Pythonで機械学習を実装する", desc: "scikit-learnで回帰・分類・クラスタリングを一通り実装し、前処理・特徴量設計・交差検証・評価指標（精度/再現率/AUC等）まで扱えるようにします。pandasの集計経験はそのまま土台になります。" },
  { title: "業務課題をモデルで解いてみる", desc: "現職で扱うデータを題材に、離反予測・需要予測など『示唆出し』から一歩進んだ予測モデルを試作します。ビジネス理解という強みを活かし、課題設定から評価までを通しで経験します。" },
  { title: "再現可能な分析・MLOpsの基礎", desc: "Notebookだけでなく、コードのバージョン管理、パイプライン化、モデルの再現性を意識します。分析を『一度きり』から『運用できる形』に近づけると、サイエンティストとしての評価が上がります。" },
];

const migrationSteps = [
  { phase: "0〜1ヶ月", title: "現在地の棚卸しと学習計画", desc: "アナリストとして培ったSQL・ビジネス理解・可視化を棚卸しし、統計と機械学習の不足分を特定します。目指すのが分析寄りのDSか、ML実装寄りのDSかで学習比重を決めます。" },
  { phase: "1〜5ヶ月", title: "統計・MLの学習とモデル制作", desc: "統計の学び直しと並行し、実データで予測モデルを1〜2本作ってGitHubに公開します。Kaggle等のコンペで評価指標を意識した取り組みを経験するのも有効です。" },
  { phase: "5〜6ヶ月", title: "職務経歴書をDS文脈へ", desc: "『集計して可視化した』から『課題を予測問題に定義し、モデルで成果につなげた』へ表現を転換します（後述のBefore/After参照）。" },
  { phase: "6ヶ月〜", title: "応募と社内異動の検討", desc: "在職中にデータ分析チームから機械学習案件へ関わる社内異動も有力な選択肢です。外部応募と並行し、ポジションと条件を固めてから動きます。" },
];

const agents = [
  { name: "レバテックキャリア", point: "IT/Web特化で技術理解のあるアドバイザーが在籍。データ分析・機械学習系の求人要件をすり合わせやすい。", href: "/review/levtech/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。データサイエンティスト求人のスカウトを通じて、自分のスキルセットの市場評価を把握できます。", href: "/review/bizreach-it/" },
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。事業会社からコンサルまでデータ職の求人が幅広く、選択肢を確保しやすい。", href: "/review/recruit-it/" },
];

const faqs = [
  { q: "データアナリストからデータサイエンティストへの転職は可能？", a: "アナリストはSQL・ビジネス理解・可視化という土台を持つため、有力な出発点です。不足しがちなのは統計・機械学習・モデリングなので、Pythonでの予測モデル構築をポートフォリオ化すると移行しやすくなります。" },
  { q: "アナリストとサイエンティストの違いは？", a: "アナリストは過去〜現在のデータを集計・可視化して示唆を出すのが中心です。サイエンティストはそれに加え、機械学習・統計モデルで予測や最適化を行い、課題を数理問題として解く点が異なります。境界は企業により幅があります。" },
  { q: "数学・統計はどこまで必要？", a: "推測統計、確率分布、回帰、仮説検定、評価指標の理解は最低限求められます。研究職レベルの数学が常に必要なわけではありませんが、モデルの前提と限界を説明できる水準は必要です。" },
  { q: "機械学習の経験がなくても応募できる？", a: "ジュニアなDSポジションや、分析寄りのDSであれば、アナリスト経験＋自作モデルのポートフォリオで挑戦できる場合があります。求人によって求める機械学習の深さが大きく異なるため、要件を見極めることが重要です。" },
  { q: "ビジネス理解はサイエンティストでも活きる？", a: "強く活きます。課題をモデルで解ける形に翻訳する力、結果を意思決定につなげる力は、技術力と同じくらい重視されます。アナリスト出身の大きな強みです。" },
  { q: "30代・40代からでも目指せる？", a: "可能です。データ職はビジネス理解とドメイン知識が重視され、ミドル層の経験が活きやすい領域です。ただし統計・機械学習という新しい学習が必要なため、在職中に予測モデルの成果物を作っておくことが重要です。" },
  { q: "社内異動と転職、どちらがよい？", a: "現職にデータ／機械学習チームがあるなら、社内で機械学習案件に関わってから動く方がリスクが低い場合があります。在職中に実績を作りつつ、外部の求人と条件を比較するのがおすすめです。" },
];

const related = [
  { name: "データアナリストのスキルと転職ガイド", href: "/skill/data-analyst/" },
  { name: "データサイエンティストのスキルと転職ガイド", href: "/skill/data-scientist/" },
  { name: "Pythonのスキルと転職ガイド", href: "/skill/python/" },
  { name: "SQLスキルと転職ガイド", href: "/skill/sql/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
];

export default function DataAnalystToScientistPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "データアナリスト→データサイエンティスト転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データアナリストからデータサイエンティストへの転職｜移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ビジネス理解とSQLの土台を活かして機械学習側へ広げる
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「示唆出しの先にある予測・最適化に踏み込みたい」「機械学習を武器にしたい」という動機で、データアナリストからデータサイエンティストへ移る人がいます。SQLとビジネス理解という土台を活かせる一方、統計・機械学習という新しい学習が必要です。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（データサイエンティスト）",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：土台は強い。鍵は統計と機械学習の証明</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・SQL・ビジネス理解・可視化はそのまま活きる。課題をモデルに翻訳する力に直結する。</li>
              <li>・ギャップが大きいのは「機械学習」と「統計・数理」。自作の予測モデルが決め手になる。</li>
              <li>・職務経歴書は『集計・可視化した』から『課題を予測問題に定義し成果につなげた』へ書き換える。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（データアナリスト vs データサイエンティスト）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">データアナリスト（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">データサイエンティスト（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.analyst}</td>
                    <td className="px-4 py-3 text-slate-600">{row.scientist}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            統計・機械学習の学習を伴うため期間が長くなりやすい転職です。在職中に少しずつ進める前提で、目安スケジュールを示します。
          </p>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-white bg-slate-700 rounded px-2 py-1">{s.phase}</span>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            アナリストの職務経歴書は「集計・可視化・レポート」が中心になりがちですが、DS選考では「課題をどう予測問題に定義し、モデルで成果につなげたか」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（集計・可視化の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                サービスの利用データをSQLで集計し、ダッシュボードを作成。KPIの推移を可視化し、定例会議で報告。施策のA/Bテスト結果を集計してレポートにまとめた。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（課題定義とモデルを主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                利用データの分析から離反リスクの高いユーザー群を特定する課題を設定し、個人開発としてPythonで離反予測モデルを構築（前処理・特徴量設計・交差検証・評価指標まで実施）。ビジネス理解を活かして説明可能な特徴量を選定し、示唆を施策提案に接続した。GitHubでコードを公開。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※データ・数値は実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>と<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            相場の基準として、厚生労働省 job tag のデータサイエンティストの平均年収は546.7万円・平均年齢38.5歳（令和7年賃金構造基本統計調査ベース）です。アナリストからDSへ専門性を高めることで、より高いレンジを狙える可能性がありますが、提示額は採用ポジション・等級で決まります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            転職者全体では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）でIT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移し、約6割が年収アップを実現しています。機械学習スキルの希少性は高い一方、求人によって求める深さの幅が大きいため、複数社のオファーを比較して市場感をつかみましょう。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動で使うエージェント</h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-petrol-deep hover:underline">{agent.name}</Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midage" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            30代・40代でDSへ移る場合、アナリストとして培ったビジネス理解とドメイン知識が大きな武器になります。データ職は「課題を解いて意思決定につなげる力」が重視されるため、若手の技術力一辺倒とは違う価値を出せます。技術は自作モデルで補えば、年齢のハンデを埋められます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方で、統計・機械学習という新しい学習を時間が限られる中で進める必要があります。現職にデータ／機械学習チームがあるなら社内で機械学習案件に関わるルートも有力です。年収の見通しは<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">データサイエンティスト転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">アナリスト経験を活かせるデータサイエンス求人をプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
