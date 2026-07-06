import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "AI業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "機械学習・生成AI（LLM）を扱うAI業界へエンジニア転職する方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、30代40代の現実的な進め方を公的データで整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/ai-industry/" },
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：AI業界への転職は現実的か" },
  { id: "trend", label: "AI業界の概要・採用動向" },
  { id: "skill-gap", label: "活かせるスキルと埋めるべきギャップ" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "salary", label: "年収の考え方" },
  { id: "company-types", label: "主な企業タイプと例" },
  { id: "steps", label: "転職の進め方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "agents", label: "相談先エージェント" },
  { id: "faq", label: "よくある質問" },
];

const skillGap = [
  ["Pythonでの開発・データ処理経験", "そのまま強みになる", "機械学習・生成AIの実装はPython中心。データ処理やパイプライン構築の経験が活きる"],
  ["バックエンド・API・クラウドの実務", "そのまま強みになる", "モデルを本番運用するMLOpsやLLMアプリ開発では、堅実なエンジニアリング力が問われる"],
  ["データ分析・統計の素地", "部分的に活かせる", "SQLや統計の理解は前処理・評価で活きるが、最新のモデルや手法は別途学習が必要"],
  ["機械学習・深層学習の理論と実装", "埋めるべきギャップ", "学習・評価・チューニングの体系的理解。研究寄りの職種ほど深く問われやすい"],
  ["生成AI（LLM）の応用設計", "埋めるべきギャップ", "RAG・プロンプト設計・評価・ガードレールなどLLMアプリ特有の設計知見が問われる"],
];

const patterns = [
  ["機械学習エンジニア", "AI開発企業・事業会社のAI部門", "モデルの開発・運用。Python＋ML理論。データ処理経験から踏み込む王道ルート"],
  ["LLM・生成AIアプリエンジニア", "AIスタートアップ・SaaS", "RAGやエージェントなどLLM応用の実装。Web/バックエンド経験者が参入しやすい"],
  ["MLOps・AIプラットフォーム", "成長期のAI企業・大手", "学習基盤・推論基盤・パイプライン構築。インフラ/クラウド経験が活きる"],
  ["データサイエンティスト", "事業会社・コンサル・AI企業", "課題定義から分析・モデリングまで。統計・分析の素地がある人に向く"],
];

const companyTypes = [
  ["AI開発・研究志向の企業", "独自モデルや研究開発に強みを持つ。高度な理論と実装力が問われる", "研究寄りに深く取り組みたい人"],
  ["AIプロダクト・SaaS企業", "AIを組み込んだプロダクトを提供。実装力とプロダクト志向の両立が求められる", "プロダクトでAIを活かしたい人"],
  ["生成AI活用のスタートアップ", "LLMを使ったアプリやエージェントを開発。スピードと裁量が魅力", "新しい領域に挑戦したい人"],
  ["事業会社のAI・DX部門", "自社業務にAIを適用。ドメイン知識とAIの掛け合わせが活きる", "業務課題をAIで解きたい人"],
];

const faqs = [
  {
    q: "Web開発やバックエンドの経験はAI業界で評価されますか？",
    a: "評価されやすくなっています。とくに生成AI（LLM）を使ったアプリ開発やMLOpsでは、モデルを本番で安定運用する堅実なエンジニアリング力が重要です。Python・API・クラウドの実務経験があれば、LLMアプリエンジニアやMLOpsの入口に立ちやすく、そこから機械学習の知識を深める道もあります。",
  },
  {
    q: "機械学習の研究経験がなくても転職できますか？",
    a: "領域によっては可能性があります。研究寄りの職種は理論と実装の深い理解が問われますが、LLMを応用したアプリ開発やMLOps、データ基盤の領域は、ソフトウェアエンジニアリングの素地から参入しやすい傾向があります。RAGやプロンプト設計、評価の実装など、手を動かした成果物を示せると有利です。",
  },
  {
    q: "生成AI（LLM）領域はどんなスキルが求められますか？",
    a: "求人傾向としてはPython、API・バックエンド開発、クラウド、そしてRAG・プロンプト設計・評価・ガードレールといったLLMアプリ特有の設計知見が問われやすいです。出力の品質評価や安全性への配慮も重要になります。具体的な要件は企業ごとに異なるため、求人票で確認してください。詳しくは生成AIスキルのガイドも参考にしてください。",
  },
  {
    q: "AI業界への転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。AI領域は職種や専門性によって年収レンジが幅広く、研究寄りの高度人材やMLOpsなど希少なスキルほど高い水準を狙いやすい傾向があります。実際の提示額は企業・スキルで大きく異なるため、複数社で比較してください。",
  },
  {
    q: "代表的なAI関連企業にはどんなところがありますか？",
    a: "深層学習に強みを持つPreferred Networks、医療AIのUbieなどが、AI・機械学習を中核に据える企業の例として挙げられます。加えて、大手IT企業やSaaS各社もAI・生成AIの活用を進めており、AIに関わる職種は幅広い企業に広がっています。各社の特徴は企業ページもあわせて確認してください。",
  },
  {
    q: "30代・40代でもAI業界に転職できますか？",
    a: "ソフトウェアエンジニアリングやドメイン知識が活きる領域が広がっているため、年齢だけが理由で不利になるとは限りません。30代は機械学習・生成AIの習得、40代はマネジメントや業務適用の企画力など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "AI・機械学習エンジニア転職ガイド（スキル）", href: "/skill/ai-ml/" },
  { name: "生成AIエンジニア転職ガイド（スキル）", href: "/skill/generative-ai/" },
  { name: "データサイエンティスト転職ガイド（スキル）", href: "/skill/data-scientist/" },
  { name: "Preferred Networksの転職難易度・評判", href: "/company/preferred-networks/" },
  { name: "Ubieの転職難易度・評判", href: "/company/ubie/" },
  { name: "生成AI時代のエンジニアキャリア", href: "/knowledge/generative-ai-era/" },
];

export default function AiIndustryPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/ai-industry/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "AI業界へのエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AI業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ソフトウェア開発の経験をAI・生成AI領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          機械学習に加えて生成AI（LLM）の活用が広がり、AIに関わる職種は研究開発から、AIを組み込んだプロダクト開発、業務への適用まで多様化しています。研究者だけの世界ではなくなり、ソフトウェアエンジニアリングの素地を持つ人材が、LLMアプリ開発やMLOpsを通じて参入しやすくなっています。本記事では、エンジニアがAI業界へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AI業界への転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：ソフトウェア開発の経験を持つエンジニアにとって、AI転職は以前より現実的になっています。</span>
              生成AIの普及で、研究者でなくてもAIを「使って作る」職種が増えたためです。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Python・API・クラウドの実務はLLMアプリ開発やMLOpsで活きる</li>
              <li>・一方で機械学習の理論やLLM応用設計は職種により深く問われる</li>
              <li>・30代は専門知識の習得、40代は業務適用とマネジメントで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「研究寄りか応用寄りか」「どの領域（ML・LLMアプリ・MLOps・分析）で活きるか」を見極め、不足する知識を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AI業界の概要・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            AI業界では、独自モデルの研究開発、AIを組み込んだプロダクト開発、生成AIを活用したアプリやエージェントの開発、事業会社での業務適用まで、関わり方が多様化しています。とくに生成AIの普及により、ソフトウェアエンジニアリングの力でAIを実用化する職種のニーズが見られます（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「使って作る」人材の需要</h3>
              <p className="text-sm text-slate-600">
                高度な研究人材は希少ですが、生成AIを応用してプロダクトに実装し、品質・安全性を担保できるエンジニアの需要も広がっています。ソフトウェア開発の素地を持つ人材は、この領域で経験を活かせる場面があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。AIのように専門性が問われる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">MLOps・基盤の重要性</h3>
              <p className="text-sm text-slate-600">
                モデルを継続的に学習・評価・運用するMLOpsや、推論基盤の構築は実用化に欠かせません。インフラ・クラウドの経験を持つエンジニアは、AI基盤の領域で経験を活かせる場面があります。
              </p>
            </div>
          </div>
        </section>

        {/* スキルギャップ */}
        <section id="skill-gap" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキルと埋めるべきギャップ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">スキル・経験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 whitespace-nowrap">転職での扱い</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">補足</th>
                </tr>
              </thead>
              <tbody>
                {skillGap.map(([s, j, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「強み（エンジニアリング力）を主役に、ギャップ（ML理論・LLM応用設計）を補う」という見せ方です。職務経歴書では携わったシステムの規模や運用実績を具体化し、学習中の領域や作ったLLMアプリ・モデルの成果物と合わせて伝えると説得力が増します。
          </p>
        </section>

        {/* 転職パターン */}
        <section id="patterns" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">職種</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">主な企業タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">向いている人・特徴</th>
                </tr>
              </thead>
              <tbody>
                {patterns.map(([r, c, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top whitespace-nowrap">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            研究寄りの経験が浅い場合は、いきなりモデル研究を狙うより、LLMアプリ開発やMLOps経由でAIプロダクトに関わり、知識を深めてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            AI関連企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代 平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SE 40代 平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（30代）", "8.01%", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（40代）", "12.67%", "レバテック公表（2025年）"],
                  ["IT・通信の平均決定年収", "486万円（2024年度）", "doda 決定年収レポート（2025年5月公表）"],
                ].map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{k}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) エンジニアリング力が活きる求人を選ぶ、(2) ML・LLMの専門性で応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            AI領域には、研究志向の企業、AIプロダクト企業、生成AIスタートアップ、事業会社のAI部門など立場の異なる選択肢があります。代表的な企業の例として、深層学習に強みを持つPreferred Networks、医療AIのUbieなどが挙げられます（実在企業の例）。職種・技術領域の詳細は
            <Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習スキルのガイド</Link>
            や
            <Link href="/skill/generative-ai/" className="text-petrol hover:underline">生成AIスキルのガイド</Link>
            もご覧ください。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-petrol-deep">向いている人：{fit}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { name: "Preferred Networks", href: "/company/preferred-networks/" },
              { name: "Ubie", href: "/company/ubie/" },
            ].map((c, i) => (
              <Link key={i} href={c.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {c.name}の転職情報 →
              </Link>
            ))}
          </div>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "携わった開発の領域（Python・データ処理・バックエンド・インフラ）、扱ったデータや運用の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足する知識を補う計画を立てる", desc: "機械学習の基礎やLLM応用（RAG・プロンプト設計・評価）など、目指す職種で問われやすい領域を3〜6ヶ月で学習。手を動かした成果物を作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "ML・LLMアプリ・MLOps・データ分析のうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "IT特化のレバテックキャリアと、ハイクラス志向ならビズリーチなどに登録。求人と担当者を比較し、市場価値を客観的に把握する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：エンジニアリング＋AIの二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                開発力に加えて機械学習や生成AIの知識を積めると、純粋な実装者にも純粋な研究者にも代えがたい価値になります。AIの専門知識の習得に投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：業務適用とマネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                業務課題をAIで解く企画力や、プロジェクトのマネジメント経験は、事業会社のAI部門やAIプロダクト企業で評価されやすい強みです。最先端の研究だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新研究だけを競うのではなく、開発力や業務理解×AIという希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/generative-ai-era/" className="text-petrol-deep underline">生成AI時代のエンジニアキャリア</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            AI業界の転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。AI企業から事業会社のAI部門まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
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
          <h2 className="text-xl font-bold mb-3">開発の経験をAI・生成AIで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
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
