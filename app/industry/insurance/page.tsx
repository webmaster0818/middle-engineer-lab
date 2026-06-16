import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "保険業界からインシュアテック転職ガイド｜30代40代";
const DESC =
  "保険系SE・保険業界エンジニアからインシュアテック（InsurTech）領域へ転職する現実的な方法を解説。活かせる保険ドメイン知識と埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：保険SEのインシュアテック転職は現実的か" },
  { id: "trend", label: "保険業界のIT化・採用動向" },
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
  ["保険ドメイン知識（引受・査定・保全・損害調査）", "そのまま強みになる", "保険業務プロセスを理解したプロダクト設計はインシュアテックで希少"],
  ["アクチュアリー・リスク評価の理解", "そのまま強みになる", "保険料率・与信・リスクモデリングの文脈を技術者として語れる人は少ない"],
  ["保険基幹システムの保守運用経験", "部分的に活かせる", "品質意識・業務理解は評価される一方、技術スタックの刷新が必要なことが多い"],
  ["データ分析・機械学習（SQL/Python）", "埋めるべきギャップ", "AI引受・不正検知・画像査定など求人で問われやすい領域"],
  ["モダンな開発（クラウド・API・アジャイル）", "埋めるべきギャップ", "ダイレクト保険・エンベデッド保険ではAPI設計やクラウド経験が問われやすい"],
];

const patterns = [
  ["インシュアテックプロダクトエンジニア", "保険SaaS・ダイレクト保険", "保険業務知識＋Web開発。ドメイン理解を武器に未経験技術を補う王道ルート"],
  ["保険データ・リスク分析エンジニア", "保険会社・インシュアテック", "SQL・Pythonでの引受/不正検知モデル。アクチュアリー知識が近い人に向く"],
  ["保険DX推進・社内SE", "生損保・共済・IT子会社", "基幹刷新やクラウド移行のPM。大規模PJ経験が活きる"],
  ["保険API・エンベデッド連携エンジニア", "EC・旅行×保険、SaaS", "他サービスに保険を組み込むAPI設計。連携・マイクロサービス志向の人に"],
];

const companyTypes = [
  ["インシュアテックスタートアップ", "少額短期保険・P2P・パラメトリック保険などの自社プロダクト。モダンな技術と裁量が魅力", "スピード感・少人数開発に適応できる人"],
  ["生損保のDX部門／IT子会社", "基幹刷新、AI引受、データ基盤。安定基盤で大規模案件に関われる", "大規模PJのマネジメントを志向する人"],
  ["ヘルスケア・テレマティクス×保険", "健康・運転データを活用した個別最適保険。IoT・リアルタイム分析が近い", "データ・IoT寄りの志向がある人"],
  ["保険特化SIer・コンサル", "保険会社向けの上流支援。業務理解とプロジェクト推進力が問われる", "顧客折衝・上流志向の人"],
];

const faqs = [
  {
    q: "保険業界の経験はインシュアテック転職で評価されますか？",
    a: "高く評価されやすい領域です。引受・査定・保全・損害調査といった保険業務プロセスを理解するエンジニアは、インシュアテック企業で希少です。特にアクチュアリーやリスク評価の文脈を技術者として語れる人材は限られるため、ドメイン知識を持つエンジニアは技術面の一部を入社後にキャッチアップする前提でも採用検討されることがあります。",
  },
  {
    q: "保険SEからインシュアテックに転職すると年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。インシュアテックは年収レンジに幅があり、保険ドメイン知識とモダンスキルを兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業・ポジションで大きく異なるため、複数社での比較がおすすめです。",
  },
  {
    q: "インシュアテックではどんな技術が求められますか？",
    a: "求人傾向としてはバックエンド（Java/Python/Go）、データ分析（SQL/Python）、API設計が基本になりやすいです。AI引受・不正検知のML、損害査定の画像認識などの知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "保険業界のDXは進んでいますか？",
    a: "ダイレクト保険、オンライン申込、AIによる引受・査定の自動化、テレマティクス保険など、デジタル化が進んでいるとされます（公開情報に基づく傾向）。レガシーな基幹システムの刷新ニーズも継続的なテーマです。本記事では確認できない市場規模の数値は記載していません。",
  },
  {
    q: "アクチュアリー知識がなくても転職できますか？",
    a: "可能性はあります。引受・査定・保全などの業務理解やシステム開発経験があれば、データ分析やML領域は入社後に伸ばす前提で評価されることもあります。アクチュアリー的な素養があると差別化はしやすくなりますが、必須というわけではありません。",
  },
  {
    q: "30代・40代でも保険からインシュアテックに転職できますか？",
    a: "保険ドメイン知識が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はデータ分析・モダン技術の習得、40代は業務理解とマネジメントの組み合わせで強みを示すと、ミドル層ならではの価値を打ち出しやすくなります。",
  },
  {
    q: "保険からインシュアテック転職に強いエージェントは？",
    a: "IT特化のレバテックキャリアは技術的なマッチングに強みがあり、ハイクラス志向ならスカウト型のビズリーチも選択肢です。保険・金融系IT求人を幅広く見たい場合はマイナビIT AGENTなども併用候補です。複数登録して比較するのが定石です。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "金融業界からフィンテック転職", href: "/industry/finance/" },
  { name: "不動産業界から不動産テック転職", href: "/industry/realestate/" },
  { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
  { name: "AI・機械学習エンジニア転職", href: "/skill/ai-ml/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "レバテックキャリアの評判", href: "/review/levtech/" },
];

export default function InsurancePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/insurance/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "保険業界からインシュアテック転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          保険業界からインシュアテック転職ガイド｜30代・40代SEの現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 保険の知識をインシュアテック領域で活かす方法</p>
        <p className="text-slate-600 leading-relaxed mb-4">
          AIによる引受・査定の自動化、テレマティクス保険、ダイレクト保険など、保険業界ではテクノロジー活用が進んでいます。引受・査定・保全といった保険業務を理解するエンジニアは、インシュアテック（InsurTech）企業がプロダクト開発で必要としながら社内に不足しがちな存在です。本記事では、保険系エンジニアがインシュアテック領域へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：保険SEのインシュアテック転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：保険ドメイン知識を持つエンジニアにとって、インシュアテック転職は十分現実的です。</span>
              ただし保険知識だけで完結するわけではなく、データ分析やモダン開発スキルとの掛け合わせが鍵になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・引受・査定・保全の業務理解はインシュアテックで希少価値が高い</li>
              <li>・一方でデータ分析・ML・API設計の実務経験は多くの求人で問われる</li>
              <li>・30代はデータ/技術習得、40代は業務理解＋マネジメントで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の保険経験がどの領域（引受・査定・損保・生保・ヘルスケア）で活きるか」を見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保険業界のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            保険業界では、AIによる引受・査定の自動化、損害査定への画像認識活用、テレマティクス保険やダイレクト保険の広がりなど、デジタル化が進んでいるとされます（公開情報に基づく傾向）。保険業務を理解したうえで技術を扱えるエンジニアの採用ニーズが見られます。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">AI引受・査定の自動化</h3>
              <p className="text-sm text-slate-600">
                AIアンダーライティングや不正請求検知、画像による損害査定などが進められています。保険の業務プロセスを理解したうえでAIモデルを設計できるエンジニアは希少です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。保険×ITのように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">エンベデッド保険・ダイレクト保険の広がり</h3>
              <p className="text-sm text-slate-600">
                ECや旅行予約に保険を組み込むエンベデッド保険や、オンライン完結のダイレクト保険が広がっており、API設計・マイクロサービスのスキルが活きる場面があります。
              </p>
            </div>
          </div>
        </section>

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
            見せ方のポイントは「強み（保険ドメイン知識）を主役に、ギャップ（データ・モダン技術）を補う」ことです。職務経歴書では携わった保険システムの規模・業務領域・効率化実績を具体化し、学習中の技術と合わせて伝えると説得力が増します。
          </p>
        </section>

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
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            未経験技術が多い場合は、いきなりプロダクト開発の中核を狙うより、保険DXや社内SE経由でモダン環境に慣れてからステップアップする道もあります。
          </p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            インシュアテック企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) 保険ドメイン知識を活かせる求人を選ぶ、(2) データ分析・モダンスキルで応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-petrol-deep">向いている人：{fit}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "保険経験を棚卸しする", desc: "携わった保険システムの領域（引受・査定・保全・損害調査など）、業務知識、効率化や処理時間短縮の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "データ分析（SQL/Python）、ML、API設計など、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くものを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "生保・損保・ヘルスケア・損害査定のうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
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

        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：保険ドメイン知識＋データ/技術の二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                保険業務を理解したうえでデータ分析やモダン開発に踏み込めると、純粋なエンジニアにも純粋な保険人材にも代えがたい価値になります。技術のキャッチアップに投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：業務理解とマネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                引受・査定の深い業務理解や大規模PJのマネジメントは、インシュアテック企業や保険DX支援で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、保険×ITという希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            保険×ITの転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。金融・保険系のIT求人も扱う。ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や上流ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "マイナビIT AGENT", desc: "書類添削・面接対策が手厚いとされる。保険・金融系IT求人を幅広く見たい場合の併用候補。", href: "/review/mynavi-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">保険の知識をインシュアテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
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
