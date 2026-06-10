import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "EC・eコマース業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "ECプラットフォーム・ネットショップ・モールを扱うeコマース業界へエンジニア転職する方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：EC業界への転職は現実的か" },
  { id: "trend", label: "EC・eコマース業界の概要・採用動向" },
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
  ["Webアプリ・フロントエンド開発の経験", "そのまま強みになる", "購入体験やUIの改善はECの売上に直結するため、Web開発力が中核で評価される"],
  ["決済・在庫・受発注など業務システムの経験", "そのまま強みになる", "ECは決済・在庫・物流連携など業務ロジックが多く、業務システム経験が活きる"],
  ["小売・流通の業務知識", "部分的に活かせる", "商品・在庫・物流の理解は要件定義で武器になるが、Web技術の刷新は別途必要"],
  ["大規模トラフィック・高可用性の設計", "埋めるべきギャップ", "セール時のアクセス集中に耐える設計やSRE的な知見が問われやすい"],
  ["データ活用・パーソナライズ", "埋めるべきギャップ", "レコメンドや分析、A/Bテストなど、データで体験を改善する手法への適応が必要"],
];

const patterns = [
  ["フロントエンド・プロダクトエンジニア", "ECモール・自社EC・D2C", "購入体験やUIの改善で売上に貢献。Web開発力を武器にする王道ルート"],
  ["バックエンドエンジニア", "ECプラットフォーム・基盤", "決済・在庫・受発注・物流連携。業務システム経験者に向く"],
  ["SRE・プラットフォームエンジニア", "大規模EC・モール", "セール時の高トラフィックを支える。インフラ/クラウド経験が活きる"],
  ["データエンジニア・分析", "EC全般", "購買データの分析、レコメンド、A/Bテスト。データ志向の人に向く"],
];

const companyTypes = [
  ["ECモール・マーケットプレイス", "多数の店舗・出品者を抱える大規模プラットフォーム。高トラフィックとスケールが特徴", "大規模・高可用性に挑戦したい人"],
  ["ネットショップ作成・EC基盤", "個人や中小事業者がECを始める基盤を提供。プロダクトの裾野が広い", "プロダクトで多くの事業者を支えたい人"],
  ["自社EC・D2Cブランド", "自社商品をオンラインで販売。ブランド体験とデータ活用が重要", "ブランドや体験づくりに関心がある人"],
  ["フリマ・CtoCサービス", "個人間取引のプラットフォーム。決済・不正対策・マッチングが要", "CtoCならではの課題に取り組みたい人"],
];

const faqs = [
  {
    q: "Web開発の経験はEC業界で評価されますか？",
    a: "評価されやすい領域です。購入体験やUIの改善はECの売上に直結するため、フロントエンドやWebアプリの開発経験は中核で活きます。加えて決済・在庫・物流連携などの業務ロジックを扱った経験があると、バックエンド寄りのポジションでも強みになります。",
  },
  {
    q: "小売・流通の業務経験はEC転職で活きますか？",
    a: "活きる場面があります。商品・在庫・物流・受発注といった業務の理解は、ECの要件定義で武器になります。ただしWeb技術が中心になるため、フロントエンドやクラウドなどの技術はキャッチアップが前提です。業務知識×Web技術の掛け合わせを示せると差別化につながります。",
  },
  {
    q: "大規模トラフィックの経験がなくても転職できますか？",
    a: "可能性はあります。すべてのEC企業が同じ規模ではなく、ネットショップ基盤やD2C、中小規模のECなど、まず標準的なWeb開発力が求められる場面も多いです。そこで経験を積みながら、高可用性やSREの知見を後から深める道もあります。",
  },
  {
    q: "EC業界への転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。EC企業でも年収レンジは幅広く、Web技術力やデータ活用、大規模システムの経験を兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業・ポジションで大きく異なるため、複数社で比較してください。",
  },
  {
    q: "ECではどんな技術が求められますか？",
    a: "求人傾向としてはフロント（React/TypeScript/Vue）、バックエンド（Java/PHP/Ruby/Go/Node.jsなど）、クラウド（AWS/GCP）、決済・在庫などの業務ロジックが基本になりやすいです。大規模ECではSRE・パフォーマンス、データ活用ではレコメンドや分析の知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "代表的なEC関連企業にはどんなところがありますか？",
    a: "総合ECモールの楽天、ネットショップ作成のBASEやSTORES、ファッションECのZOZO、フリマのメルカリなどが、eコマースを手がける上場企業・有力企業の例として挙げられます。各社の特徴は企業ページもあわせて確認してください。",
  },
  {
    q: "30代・40代でもEC業界に転職できますか？",
    a: "Web開発経験や業務知識、データ活用の経験が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はモダン技術やデータ活用の習得、40代はマネジメントや業務知識など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
];

const related = [
  { name: "小売業界へのエンジニア転職", href: "/industry/retail/" },
  { name: "楽天の転職難易度・評判", href: "/company/rakuten/" },
  { name: "BASEの転職難易度・評判", href: "/company/base/" },
  { name: "STORESの転職難易度・評判", href: "/company/stores/" },
  { name: "ZOZOの転職難易度・評判", href: "/company/zozo/" },
  { name: "メルカリの転職難易度・評判", href: "/company/mercari/" },
];

export default function EcommercePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/ecommerce/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "EC・eコマース業界へのエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          EC・eコマース業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Web開発や業務知識をeコマース領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          ECモール、ネットショップ作成サービス、D2Cブランド、フリマアプリまで、eコマースの形は多様化しています。購入体験のUI改善から、決済・在庫・物流連携、セール時の高トラフィック対応、購買データの活用まで、エンジニアが関わる領域は幅広く、Web開発や業務システムの経験を活かしやすい分野です。本記事では、エンジニアがEC・eコマース業界へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
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
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：EC業界への転職は現実的か</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：Web開発経験や業務システムの経験を持つエンジニアにとって、EC転職は十分現実的です。</span>
              購入体験の改善や業務ロジックの実装は、ECの売上に直結する重要な領域です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Web開発と決済・在庫・物流などの業務ロジックの経験が活きる</li>
              <li>・一方で高トラフィック対応やデータ活用は多くの求人で問われる</li>
              <li>・30代は技術＋データ活用の習得、40代はマネジメント＋業務知識で勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の経験がどの領域（モール・EC基盤・D2C・CtoC）で活きるか」を見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EC・eコマース業界の概要・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            EC業界では、大規模モール、ネットショップ作成サービス、D2Cブランド、フリマ・CtoCサービスなど、幅広い形態でサービスが展開されています。購入体験の改善、決済・在庫・物流の連携、セール時のトラフィック対応、購買データを使ったパーソナライズなど、多様な技術課題があり、エンジニアの採用ニーズが見られます（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">売上に直結する開発</h3>
              <p className="text-sm text-slate-600">
                購入導線やページ表示速度の改善が、そのまま売上に影響しやすいのがECの特徴です。ユーザー体験を数字で改善できるエンジニアは、EC企業で重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。Web技術×業務知識のように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">高トラフィックとデータ活用</h3>
              <p className="text-sm text-slate-600">
                大規模ECではセール時のアクセス集中に耐える設計が、データ活用領域ではレコメンドや分析が重要です。SREやデータ基盤の経験を持つエンジニアは、これらの領域で経験を活かせる場面があります。
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
                    <td className="px-4 py-3 text-blue-600 font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「強み（Web開発・業務ロジック）を主役に、ギャップ（高可用性・データ活用）を補う」という見せ方です。職務経歴書では携わったサービスの規模・改善した指標（コンバージョンや表示速度など）を具体化し、学習中の技術と合わせて伝えると説得力が増します。
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
            大規模システムの経験が浅い場合は、いきなりモールの基盤を狙うより、EC基盤やD2C・中小規模のECでWeb開発に慣れてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            EC企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
                    <td className="px-4 py-3 text-blue-600 font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) Web開発・業務知識が活きる求人を選ぶ、(2) 高可用性やデータ活用で応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-blue-600 hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            EC領域には、大規模モール、EC基盤、自社EC・D2C、フリマ・CtoCなど特徴の異なる企業があります。代表的な企業の例として、総合ECの楽天、ネットショップ作成のBASEやSTORES、ファッションECのZOZO、フリマのメルカリなどが挙げられます（実在企業の例）。各社の詳細は企業ページもご覧ください。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-blue-700">向いている人：{fit}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { name: "楽天", href: "/company/rakuten/" },
              { name: "BASE", href: "/company/base/" },
              { name: "STORES", href: "/company/stores/" },
              { name: "ZOZO", href: "/company/zozo/" },
              { name: "メルカリ", href: "/company/mercari/" },
            ].map((c, i) => (
              <Link key={i} href={c.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
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
              { step: "1", title: "経験を棚卸しする", desc: "携わったサービスの種類（Webアプリ・業務システムなど）、扱った業務（決済・在庫・物流など）、改善した指標を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "クラウド（AWS/GCP）・パフォーマンス・データ活用など、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くものを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "モール・EC基盤・D2C・CtoCのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "IT特化のレバテックキャリアと、ハイクラス志向ならビズリーチなどに登録。求人と担当者を比較し、市場価値を客観的に把握する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
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
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術＋データ活用の二刀流を作る</h3>
              <p className="text-sm text-blue-700">
                Web開発に加えて、購買データを使った改善やパフォーマンスチューニングを身につけると、純粋な実装者に代えがたい価値になります。技術とデータ活用の両方に投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントと業務知識を軸に</h3>
              <p className="text-sm text-blue-700">
                開発チームのマネジメント経験や、小売・流通の深い業務理解は、EC企業で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-blue-700">
                若手と同じ土俵で最新技術だけを競うのではなく、業務知識やマネジメント×Web技術という希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-blue-700 underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            EC業界の転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。大規模モールからD2C・スタートアップまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors">
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
          <h2 className="text-xl font-bold mb-3">Web開発と業務知識をeコマースで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
