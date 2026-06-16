import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "官公庁・公共系SEから民間IT転職ガイド｜30代40代";
const DESC =
  "官公庁・公共系SEから民間IT企業・GovTech・セキュリティ領域へ転職する現実的な方法を解説。活かせる公共系の経験と埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：公共系SEの民間IT転職は現実的か" },
  { id: "trend", label: "行政・公共のIT化と民間IT採用動向" },
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
  ["セキュリティ要件への対応経験（政府基準群・ISMAP等）", "そのまま強みになる", "厳格なセキュリティ環境での開発経験は民間でも評価されやすい"],
  ["大規模PJのマネジメント・ステークホルダー調整", "そのまま強みになる", "数億〜数十億円規模の調整力はエンタープライズSaaS・コンサルで活きる"],
  ["要件定義・設計（ウォーターフォール）", "部分的に活かせる", "上流スキルは強みだが、アジャイル/DevOpsへの適応が課題になりやすい"],
  ["モダンな開発（クラウド・コンテナ・CI/CD）", "埋めるべきギャップ", "AWS/Azure/GCP・Docker/Kubernetesの実務経験が問われやすい"],
  ["自社プロダクト開発・継続的デリバリーの進め方", "埋めるべきギャップ", "受託・下請け中心だった場合、プロダクト志向への切り替えが必要"],
];

const patterns = [
  ["GovTech・行政DXエンジニア", "GovTechスタートアップ・SIer", "公共システムの仕様・調達理解が直接活きる王道ルート"],
  ["セキュリティエンジニア", "事業会社・セキュリティ企業", "政府基準への準拠経験を武器に。需要が高いとされる領域"],
  ["SaaSプロダクト開発・社内SE", "事業会社・SaaS企業", "下請け構造から脱却し自社プロダクトに関わる。技術刷新が前提"],
  ["DX・PMOコンサル", "ファーム・SIer上流", "大規模PJのマネジメント力を活かす。上流志向の人に向く"],
];

const companyTypes = [
  ["GovTechスタートアップ", "行政手続きのデジタル化、自治体向けSaaSなどの自社プロダクト。公共の知識が直接活きる", "公共理解を武器にプロダクトに関わりたい人"],
  ["事業会社のIT部門・SaaS企業", "自社サービスの設計・開発。下請け構造から抜け出したい人の主要な受け皿", "プロダクト志向で技術を磨きたい人"],
  ["セキュリティ企業・SOC", "脆弱性診断、セキュリティ設計、監視運用。厳格な環境の経験が活きる", "セキュリティ専門性を伸ばしたい人"],
  ["DXコンサル・SIer上流", "大企業・官公庁のDX戦略策定・推進。マネジメントと顧客折衝が問われる", "上流・コンサル志向の人"],
];

const faqs = [
  {
    q: "官公庁系SEの経験は民間IT転職で評価されますか？",
    a: "評価されることがあります。特に厳格なセキュリティ要件下での開発経験、大規模プロジェクトのマネジメント、法規制・調達への対応力は民間でも通用するスキルです。GovTech領域では公共システムの仕様や調達プロセスの理解が直接活きる一方、モダンな開発スタックは入社後にキャッチアップする前提になることもあります。",
  },
  {
    q: "官公庁系SEから民間IT転職すると年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。民間IT・SaaS企業は年収レンジに幅があり、セキュリティやマネジメントなど希少性の高いスキルを持つほど高い水準を狙いやすくなります。実際の提示額は企業・ポジションで大きく異なるため、複数社での比較がおすすめです。",
  },
  {
    q: "ウォーターフォール開発しか経験がなくても転職できますか？",
    a: "可能性はあります。要件定義・設計の上流スキルは大規模案件で求められます。アジャイルやDevOpsの基礎を学び、個人開発やOSS貢献で実践しておくと、民間IT企業への適応をアピールしやすくなります。",
  },
  {
    q: "多重下請け構造から抜け出すにはどうすればいいですか？",
    a: "自社プロダクトを持つSaaS企業や事業会社のIT部門への転職が有効な選択肢です。クラウド・セキュリティ・データ分析など特定領域で専門性を磨き、エージェントに「自社開発企業」を希望条件として明確に伝えるとミスマッチを減らせます。",
  },
  {
    q: "資格は転職に有利になりますか？",
    a: "情報処理安全確保支援士はセキュリティ領域で評価されることがあります。プロジェクトマネージャ試験はPM職、AWS認定はクラウド移行案件で技術力の裏付けになりやすいです。ただし資格そのものより、実務での再現性を語れるかが重視されます。",
  },
  {
    q: "30代・40代でも官公庁から民間ITに転職できますか？",
    a: "セキュリティやマネジメントなど公共系で培った経験が武器になりやすいため、年齢だけが理由で不利になるとは限りません。30代はモダン技術の習得、40代はマネジメント＋専門性の組み合わせで強みを示すと、ミドル層ならではの価値を打ち出しやすくなります。",
  },
  {
    q: "官公庁系SEから民間IT転職に強いエージェントは？",
    a: "求人数の多いリクルートエージェントIT、IT特化で自社開発企業の求人を扱うレバテックキャリアなどが候補です。ハイクラス志向ならスカウト型のビズリーチも選択肢です。複数登録して比較するのが定石です。",
  },
  {
    q: "未出典の市場規模や求人倍率は記載していますか？",
    a: "本記事では確認できない市場規模・求人倍率・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
  { name: "金融業界からフィンテック転職", href: "/industry/finance/" },
  { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
  { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
  { name: "リクルートエージェントITの評判", href: "/review/recruit-it/" },
];

export default function GovernmentPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/government/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }, { name: "官公庁・公共系SEから民間IT転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          官公庁・公共系SEから民間IT転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 公共系SEのスキルを民間IT企業で活かす方法</p>
        <p className="text-slate-600 leading-relaxed mb-4">
          デジタル庁の設立やガバメントクラウドの推進により、行政のIT近代化が進んでいます。一方で、多重下請け構造や技術的制約に限界を感じ、民間IT企業への転職を検討する公共系SEは少なくありません。厳格なセキュリティ要件下での開発経験や大規模プロジェクトのマネジメントは、民間でも通用しやすい強みです。本記事では、官公庁・公共系SEが民間IT企業へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：公共系SEの民間IT転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：セキュリティやマネジメントの経験を持つ公共系SEにとって、民間IT転職は十分現実的です。</span>
              ただし受託・下請け中心の進め方から、モダン開発やプロダクト志向への切り替えが鍵になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・セキュリティ要件対応や大規模PJのマネジメントは民間でも評価されやすい</li>
              <li>・一方でクラウド・コンテナ・アジャイルの実務経験は多くの求人で問われる</li>
              <li>・30代は技術習得、40代はマネジメント＋専門性の組み合わせで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の経験がどの領域（GovTech・セキュリティ・SaaS・コンサル）で活きるか」を見極め、不足する技術や働き方を補う計画を立てるのが近道です。
          </p>
        </section>

        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">行政・公共のIT化と民間IT採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            行政分野では、デジタル庁主導のガバメントクラウド移行やマイナンバー関連の取り組みなど、IT近代化が進んでいるとされます（公開情報に基づく傾向）。公共システムの仕様や調達プロセスを理解するエンジニアは、GovTech企業やセキュリティ領域で経験を活かせる場面があります。市場規模や求人倍率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">セキュリティ経験の希少性</h3>
              <p className="text-sm text-slate-600">
                官公庁システムで培った政府統一基準群やISMAPへの準拠経験は、民間でも評価されやすいスキルです。セキュリティ人材は不足が指摘される領域とされ、専門性を打ち出しやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。公共×ITやセキュリティのように専門性を持つ人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">大規模PJ経験の市場価値</h3>
              <p className="text-sm text-slate-600">
                数億〜数十億円規模のシステム開発で培ったプロジェクトマネジメントやステークホルダー調整は、エンタープライズ向けSaaS企業やDXコンサルで評価されやすい強みです。
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
            見せ方のポイントは「強み（セキュリティ・マネジメント）を主役に、ギャップ（モダン技術・プロダクト志向）を補う」ことです。職務経歴書では携わったプロジェクトの規模・セキュリティ要件・法規制対応を具体化し、学習中の技術と合わせて伝えると説得力が増します。
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
            モダン環境の経験が少ない場合は、いきなりプロダクト開発の中核を狙うより、GovTechや社内SE経由で慣れてからステップアップする道もあります。
          </p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            民間IT・SaaS企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) セキュリティ・マネジメントなど希少性を活かせる求人を選ぶ、(2) モダンスキルで応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
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
              { step: "1", title: "公共系の経験を棚卸しする", desc: "携わったプロジェクトの規模（金額・期間・体制）、セキュリティ要件、法規制対応の実績を整理する。PMO経験やステークホルダー調整も数値化する。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "クラウド（AWS/Azure/GCP）、コンテナ（Docker/Kubernetes）、CI/CDなど、求人で問われやすい技術を学習。Java経験があればSpring Bootなどモダンフレームワークへ広げる。" },
              { step: "3", title: "民間の働き方を理解する", desc: "アジャイル・DevOps・スクラムの基礎を学び、個人開発やOSS貢献で実践しておくと面接で説得力が増す。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "求人数の多いリクルートエージェントITと、自社開発に強いレバテックキャリアなどに登録。「自社開発企業」を希望条件として明確に伝える。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：技術刷新とプロダクト志向への切り替え</h3>
              <p className="text-sm text-petrol-deep">
                公共系で培った基礎の上にクラウド・コンテナなどモダン技術を重ねられると、純粋な若手エンジニアにはない厚みになります。技術のキャッチアップに投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントと専門性を軸に</h3>
              <p className="text-sm text-petrol-deep">
                大規模PJのマネジメントやセキュリティの専門性は、エンタープライズSaaSやDXコンサルで評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、公共×ITやセキュリティという希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            公共系からの転職では、求人数の多い総合型とIT特化型を併用し、自社開発企業を比較するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。大手からスタートアップまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。自社開発企業の求人も扱う。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。マネジメントやセキュリティの専門性で上流ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
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
          <h2 className="text-xl font-bold mb-3">公共系SEのスキルを民間IT企業で活かそう</h2>
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
