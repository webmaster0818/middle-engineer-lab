import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SaaS業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "BtoB SaaS・バーティカルSaaS企業へエンジニア転職する方法を解説。活かせるスキルと埋めるギャップ、マルチテナント設計、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/saas-industry/" },
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SaaS業界への転職は現実的か" },
  { id: "trend", label: "SaaS業界の概要・採用動向" },
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
  ["Webアプリケーション開発の実務経験", "そのまま強みになる", "サーバーサイド＋フロントの開発経験はSaaSプロダクト開発の中核で評価される"],
  ["特定業界・業務のドメイン知識", "そのまま強みになる", "バーティカルSaaSでは現場業務を理解した要件定義ができる人材が希少で価値が高い"],
  ["受託・SES中心のシステム開発経験", "部分的に活かせる", "設計・実装力は活きるが、プロダクト改善サイクルやデータ活用への適応が課題"],
  ["マルチテナント・SaaS基盤の設計", "埋めるべきギャップ", "テナント分離・権限設計・課金・SLAなどSaaS特有の設計知見が問われやすい"],
  ["プロダクト志向・グロース思考", "埋めるべきギャップ", "指標を見て改善を回す姿勢や、カスタマーサクセスと連携する動き方への適応が必要"],
];

const patterns = [
  ["プロダクトエンジニア", "BtoB SaaS全般", "Web開発＋プロダクト志向。機能開発と改善を主体的に担う王道ルート"],
  ["バックエンドエンジニア", "SaaS基盤・課金・API", "マルチテナント設計やAPI公開を担う。基盤系の経験者に向く"],
  ["バーティカルSaaSのドメインエンジニア", "建設・医療・物流など特化型SaaS", "業界知識＋開発。現場を理解した人材が希少で評価されやすい"],
  ["SRE・プラットフォームエンジニア", "成長期のSaaS企業", "可用性・スケーラビリティを支える。インフラ・クラウド経験者に需要"],
];

const companyTypes = [
  ["ホリゾンタルSaaS", "業種を問わず使える汎用SaaS（人事・会計・営業支援など）。利用社数が多く基盤の堅牢性が問われる", "汎用的なプロダクトをスケールさせたい人"],
  ["バーティカルSaaS", "特定業界に特化したSaaS（建設・医療・小売など）。業界知識が武器になる", "特定業界のドメインに強みを持ちたい人"],
  ["コンパウンド・マルチプロダクトSaaS", "複数プロダクトを連携させて提供。基盤やデータ統合の設計が重要", "プロダクト横断の設計に関心がある人"],
  ["成長期スタートアップ", "プロダクトマーケットフィットを追う段階。裁量が大きく成長機会が多い", "スピード感と裁量を求める人"],
];

const faqs = [
  {
    q: "Web開発経験があればSaaS業界に転職できますか？",
    a: "可能性は高い領域です。サーバーサイドとフロントの開発経験はSaaSプロダクト開発で直接活きます。ただしマルチテナント設計や課金・権限などSaaS特有の知見、指標を見て改善を回すプロダクト志向が問われることが多いため、面接ではこれらへの理解や学習意欲を示せると有利です。",
  },
  {
    q: "受託・SESからSaaSの自社開発に移れますか？",
    a: "移っている人は多くいます。設計・実装力はそのまま活きますが、プロダクトの継続的改善やデータ活用、カスタマーサクセスとの連携といった働き方への適応が課題になりやすいです。個人開発やOSS、技術ブログなどで「プロダクトを良くする視点」を示すと評価につながります。",
  },
  {
    q: "バーティカルSaaSとホリゾンタルSaaSはどちらが転職しやすいですか？",
    a: "一概には言えません。特定業界の実務経験がある人はバーティカルSaaSで業界知識が武器になります。汎用的な技術力やスケーラビリティの経験がある人はホリゾンタルSaaSで活きやすいです。自分の経験がどちらに近いかで選ぶのが現実的です。",
  },
  {
    q: "SaaS転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。SaaS企業でも年収レンジは幅広く、技術力とドメイン理解を兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業フェーズやポジションで大きく異なるため、複数社で比較してください。",
  },
  {
    q: "SaaSではどんな技術が求められますか？",
    a: "求人傾向としてはバックエンド（Ruby/Java/Go/PHP/Node.jsなど）、フロント（React/TypeScript/Vue）、クラウド（AWS/GCP）、API設計、マルチテナント設計が基本になりやすいです。SREやデータ基盤の知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "代表的なSaaS企業にはどんなところがありますか？",
    a: "人事労務のSmartHR、名刺・営業のSansan、バックオフィスのfreeeやマネーフォワード、グループウェアのサイボウズなどが、BtoB SaaSを手がける上場企業・有力企業の例として挙げられます。各社の特徴は企業ページもあわせて確認してください。",
  },
  {
    q: "30代・40代でもSaaSに転職できますか？",
    a: "Web開発経験やドメイン知識が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はモダン技術とプロダクト志向の習得、40代はマネジメントや業界知識など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
];

const related = [
  { name: "HR Tech業界へのエンジニア転職", href: "/industry/hrtech/" },
  { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
  { name: "SmartHRの転職難易度・評判", href: "/company/smarthr/" },
  { name: "Sansanの転職難易度・評判", href: "/company/sansan/" },
  { name: "サイボウズの転職難易度・評判", href: "/company/cybozu/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function SaasIndustryPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/saas-industry/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "SaaS業界へのエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SaaS業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Web開発やドメイン知識をSaaS領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          ソフトウェアをサブスクリプションで提供するSaaS（Software as a Service）は、人事・会計・営業支援などの汎用領域から、建設・医療・小売といった業界特化領域まで広がっています。継続的にプロダクトを改善し、多数の企業が同じ基盤を使うマルチテナント設計が特徴です。本記事では、エンジニアがSaaS業界へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SaaS業界への転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：Web開発経験やドメイン知識を持つエンジニアにとって、SaaS転職は十分現実的です。</span>
              ただし「Web開発ができれば十分」ではなく、SaaS特有の設計とプロダクト志向との掛け合わせが鍵になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Web開発と特定業界のドメイン知識はSaaSで価値が高い</li>
              <li>・一方でマルチテナント設計やプロダクト改善の進め方は多くの求人で問われる</li>
              <li>・30代は技術＋プロダクト志向、40代はマネジメント＋業界知識で勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の経験がホリゾンタル（汎用）とバーティカル（業界特化）のどちらに活きるか」を見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SaaS業界の概要・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            SaaS業界では、バックオフィス効率化や業界特化型の業務支援など、幅広い領域でクラウドサービスが普及しています。一度作って終わりではなく、継続的に機能を改善し続けるプロダクト開発が中心で、利用社数の増加に耐えるマルチテナント設計やデータ活用が重視されます。こうした背景から、プロダクト志向を持つエンジニアの採用ニーズが見られます（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">プロダクト志向の希少性</h3>
              <p className="text-sm text-slate-600">
                指標を見て改善を回し、ユーザーの課題から逆算して機能を設計できるエンジニアは多くありません。受託中心のキャリアからこの視点を身につけた人材は、SaaS企業で重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。Web開発×ドメイン知識のように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">バーティカルSaaSの広がり</h3>
              <p className="text-sm text-slate-600">
                建設・医療・物流・小売など、業界特化型のSaaSが広がっています。その業界の実務経験を持つエンジニアは、現場を理解した要件定義ができる希少な人材として経験を活かせる場面があります。
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
            ポイントは「強み（Web開発・ドメイン知識）を主役に、ギャップ（SaaS設計・プロダクト志向）を補う」という見せ方です。職務経歴書では携わったサービスの規模・改善実績・扱った業務領域を具体化し、学習中の技術と合わせて伝えると説得力が増します。
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
            プロダクト開発の経験が浅い場合は、いきなり中核機能を狙うより、SREや社内SE経由でSaaSの運用・基盤に慣れてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            SaaS企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) 自分の強みが活きる求人を選ぶ、(2) SaaS設計やプロダクト志向で応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            SaaS領域には、汎用型（ホリゾンタル）と業界特化型（バーティカル）など特徴の異なる企業があります。代表的な企業の例として、人事労務のSmartHR、名刺・営業のSansan、バックオフィスのfreeeやマネーフォワード、グループウェアのサイボウズなどが挙げられます（実在企業の例）。各社の詳細は企業ページもご覧ください。
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
              { name: "SmartHR", href: "/company/smarthr/" },
              { name: "Sansan", href: "/company/sansan/" },
              { name: "freee", href: "/company/freee/" },
              { name: "サイボウズ", href: "/company/cybozu/" },
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
              { step: "1", title: "経験を棚卸しする", desc: "携わったサービスの種類（Webアプリ・業務システムなど）、扱った業界・業務、改善や性能向上の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "マルチテナント設計・API設計・クラウド（AWS/GCP）など、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くプロダクトを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "ホリゾンタル（汎用）かバーティカル（業界特化）か、自分の経験が最も活きる方向に絞ってターゲット企業を選定する。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：技術＋プロダクト志向の二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                Web開発に加えて、指標を見て改善を回すプロダクト志向を身につけると、純粋な実装者に代えがたい価値になります。技術とプロダクト視点の両方に投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントと業界知識を軸に</h3>
              <p className="text-sm text-petrol-deep">
                開発チームのマネジメント経験や、特定業界の深い理解は、SaaS企業（とくにバーティカルSaaS）で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、業界知識やマネジメントという希少性で差別化するのがミドル層の定石です。
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
            SaaS業界の転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。汎用SaaSから業界特化SaaSまで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
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
          <h2 className="text-xl font-bold mb-3">Web開発とドメイン知識をSaaSで活かそう</h2>
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
