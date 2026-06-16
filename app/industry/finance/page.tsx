import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "金融業界からフィンテック転職ガイド｜30代40代SEの戦略";
const DESC =
  "金融SE・銀行系SEからフィンテック・決済・暗号資産領域へ転職する現実的な方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：金融SEのフィンテック転職は現実的か" },
  { id: "trend", label: "金融業界のIT化・採用動向" },
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
  ["金融ドメイン知識（銀行法・資金決済法・割販法）", "そのまま強みになる", "規制を踏まえた要件定義・コンプライアンス設計はフィンテック企業が最も求める領域"],
  ["リスク管理・与信・コンプライアンス実務", "そのまま強みになる", "不正検知・与信モデル・KYCなどプロダクト設計に直結する"],
  ["勘定系・基幹システムの保守運用経験", "部分的に活かせる", "ミッションクリティカルな品質意識は評価される一方、技術スタックの刷新は必要"],
  ["モダンな開発（クラウド・API・CI/CD）", "埋めるべきギャップ", "AWS/GCP・REST/GraphQL API・コンテナの実務経験が問われやすい"],
  ["アジャイル・プロダクト開発の進め方", "埋めるべきギャップ", "ウォーターフォール中心だった場合、スクラムや継続的デリバリーへの適応が課題"],
];

const patterns = [
  ["フィンテックエンジニア", "決済・融資・資産運用SaaS", "金融業務知識＋Web開発。ドメイン理解を武器に未経験技術を補う王道ルート"],
  ["金融データ・リスク分析エンジニア", "銀行・証券・フィンテック", "SQL・Pythonでの与信/不正検知モデル。アナリスト経験者に向く"],
  ["金融DX推進・社内SE", "メガバンク・地銀・生損保", "レガシー刷新やクラウド移行のPM。大規模PJ経験が活きる"],
  ["コンサル（金融DX）", "ファーム・SIer上流", "規制対応とシステム両面を語れる人材は上流支援で重宝される"],
];

const companyTypes = [
  ["フィンテックスタートアップ", "決済・BNPL・家計簿・資産運用などの自社プロダクト。モダンな技術と裁量が魅力", "スピード感・少人数開発に適応できる人"],
  ["メガバンク・地銀のDX部門／IT子会社", "勘定系刷新、API基盤、クラウド移行。安定基盤で大規模案件に関われる", "大規模PJのマネジメントを志向する人"],
  ["証券・資産運用×IT", "トレーディング、ロボアドバイザー、データ基盤。金融工学やデータ分析が近い", "数理・データ寄りの志向がある人"],
  ["金融特化SIer・コンサル", "金融機関向けの上流支援。規制対応とプロジェクト推進力が問われる", "顧客折衝・上流志向の人"],
];

const faqs = [
  {
    q: "金融業界の経験はフィンテック転職で評価されますか？",
    a: "高く評価されやすい領域です。銀行法・資金決済法などの規制知識、リスク管理やコンプライアンスの実務経験は、フィンテック企業がプロダクト開発で必要とする一方、社内に不足しがちなスキルです。ドメイン知識を持つエンジニアは、技術面の一部を入社後にキャッチアップする前提でも採用検討されるケースがあります。",
  },
  {
    q: "金融SEからフィンテックに転職すると年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。フィンテックでは年収レンジに幅があり、モダンスキルとドメイン知識を兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業・ポジション・スキルで大きく異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "銀行のレガシーシステム経験しかなくても転職できますか？",
    a: "可能性はあります。COBOL・メインフレームの保守経験は金融機関のモダナイゼーション案件で評価されることがあります。並行してクラウドやAPI開発の基礎を学び、ミッションクリティカルな品質意識を言語化できると、金融DX系のポジションで強みを出しやすくなります。",
  },
  {
    q: "フィンテックではどんな技術が求められますか？",
    a: "求人傾向としてはバックエンド（Java/Python/Go）、API設計、クラウド（AWS/GCP）、セキュリティが基本になりやすいです。データ分析（SQL/Python）やML（与信・不正検知）の知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "資格は転職に有利になりますか？",
    a: "AWS認定や情報処理安全確保支援士は技術力の客観的な裏付けとして役立つことがあります。FPや証券アナリストなど金融系の資格を持っていれば、金融×ITの掛け合わせをアピールしやすくなります。ただし資格そのものより、実務での再現性を語れるかが重視されます。",
  },
  {
    q: "30代・40代でも金融からフィンテックに転職できますか？",
    a: "ドメイン知識が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はモダン技術の習得、40代はマネジメントや規制対応など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "金融からフィンテック転職に強いエージェントは？",
    a: "IT特化のレバテックキャリアは技術的なマッチングに強みがあり、ハイクラス志向ならスカウト型のビズリーチも選択肢です。1社に絞らず複数登録して求人と担当者を比較するのが定石です。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "保険業界からインシュアテック転職", href: "/industry/insurance/" },
  { name: "不動産業界から不動産テック転職", href: "/industry/realestate/" },
  { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
  { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "レバテックキャリアの評判", href: "/review/levtech/" },
];

export default function FinancePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/finance/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "金融業界からフィンテック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          金融業界からフィンテック転職ガイド｜30代・40代SEの現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 金融の専門知識をフィンテック領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          キャッシュレス決済やオープンAPIの広がりにより、金融とITの境界は溶けつつあります。銀行・証券・保険で培った規制知識やリスク管理の実務は、フィンテック企業がプロダクト開発で必要としながら社内に不足しがちな領域です。本記事では、金融系エンジニアがフィンテック・決済・暗号資産領域へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：金融SEのフィンテック転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：金融ドメイン知識を持つエンジニアにとって、フィンテック転職は十分現実的です。</span>
              ただし「金融知識があれば技術は不問」ではなく、モダン開発スキルとの掛け合わせが鍵になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・規制・リスク・コンプライアンスの理解はフィンテックで希少価値が高い</li>
              <li>・一方でクラウド・API・アジャイルの実務経験は多くの求人で問われる</li>
              <li>・30代は技術習得、40代はマネジメント＋規制対応の組み合わせで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の金融経験がどの領域（決済・融資・資産運用・保険）で活きるか」を見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">金融業界のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            金融業界では、キャッシュレス決済の普及、オープンAPIの進展、メガバンクのシステム刷新などを背景に、デジタル化が進んでいます。決済・融資・資産運用といった各領域でサービス開発が活発化しており、金融業務を理解するエンジニアの採用ニーズが見られます（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">規制知識の希少性</h3>
              <p className="text-sm text-slate-600">
                銀行法・資金決済法・割販法などを踏まえた設計ができるエンジニアは多くありません。コンプライアンスを織り込んだプロダクト開発ができる人材は、フィンテック企業で重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。金融×ITのように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レガシー刷新の継続</h3>
              <p className="text-sm text-slate-600">
                金融機関のレガシーシステム刷新やクラウド移行は継続的なテーマです。勘定系・基幹システムの経験者は、モダナイゼーション案件で経験を活かせる場面があります。
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
            ポイントは「強み（ドメイン知識）を主役に、ギャップ（モダン技術）を補う」という見せ方です。職務経歴書では携わった金融システムの規模・規制要件・移行実績を具体化し、学習中の技術と合わせて伝えると説得力が増します。
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
            未経験技術が多い場合は、いきなりプロダクト開発の中核を狙うより、金融DXや社内SE経由でモダン環境に慣れてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フィンテック企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) ドメイン知識を活かせる求人を選ぶ、(2) モダンスキルで応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
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

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "金融経験を棚卸しする", desc: "携わった金融システムの領域（決済・融資・勘定系など）、規制要件、移行・効率化の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "クラウド（AWS/GCP）・API設計・アジャイルなど、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くものを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "決済・融資・資産運用・保険のうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：ドメイン知識＋技術の二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                金融業務を理解したうえでモダン開発に踏み込めると、純粋なWebエンジニアにも純粋な金融人材にも代えがたい価値になります。技術のキャッチアップに投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：規制対応とマネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                大規模PJのマネジメントや規制対応の実績は、フィンテック企業や金融DX支援で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、金融×ITという希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            金融×ITの転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。金融DXから事業会社まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
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
          <h2 className="text-xl font-bold mb-3">金融の専門知識をフィンテックで活かそう</h2>
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
