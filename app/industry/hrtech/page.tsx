import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "HR Tech業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "人事労務・採用・タレントマネジメントを扱うHR Tech業界へエンジニア転職する方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：HR Tech業界への転職は現実的か" },
  { id: "trend", label: "HR Tech業界の概要・採用動向" },
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
  ["業務システム・基幹システムの開発経験", "そのまま強みになる", "勤怠・給与・人事マスタなど複雑なデータモデルを扱う力はHR Techの中核で評価される"],
  ["SaaS・マルチテナント設計の知見", "そのまま強みになる", "多数の企業が同じ基盤を使うSaaSでは、テナント分離や権限設計の経験が直結する"],
  ["人事・労務・採用業務のドメイン知識", "部分的に活かせる", "労働法規や人事制度の理解は要件定義で武器になるが、技術スタックの刷新は別途必要"],
  ["モダンな開発（クラウド・API・CI/CD）", "埋めるべきギャップ", "AWS/GCP・REST/GraphQL API・コンテナの実務経験が問われやすい"],
  ["プロダクト志向・継続的デリバリー", "埋めるべきギャップ", "受託・SES中心だった場合、自社プロダクトの改善サイクルへの適応が課題になりやすい"],
];

const patterns = [
  ["プロダクトエンジニア（HR SaaS）", "人事労務・採用・タレマネSaaS", "業務理解＋Web開発。複雑な人事業務をプロダクトに落とす力が武器になる王道ルート"],
  ["バックエンドエンジニア", "勤怠・給与計算・人事基盤", "正確性が求められる計算ロジックやデータ整合性。基幹系経験者に向く"],
  ["データエンジニア・分析", "ピープルアナリティクス領域", "SQL・Pythonで人事データを扱う。タレントマネジメントやエンゲージメント分析で需要"],
  ["社内SE・コーポレートエンジニア", "事業会社の人事・情シス", "HRシステムの導入・連携。業務知識を活かしつつモダン環境に慣れる入口にもなる"],
];

const companyTypes = [
  ["人事労務SaaS", "労務手続き・勤怠・給与計算などを自動化する自社プロダクト。複雑な法令対応とプロダクト改善が魅力", "正確性とドメイン理解を両立したい人"],
  ["採用・タレントマネジメントSaaS", "採用管理、人材データベース、評価・配置の最適化。データ活用の余地が大きい", "データやプロダクト設計に関心がある人"],
  ["人事基幹システム・大手ベンダー", "大企業向けの人事給与システム。安定基盤で大規模案件に関われる", "大規模PJのマネジメントを志向する人"],
  ["事業会社の人事DX・社内SE", "自社の人事システム刷新やHRデータ統合。業務に近い立場で改善を進める", "業務に深く入り込んで改善したい人"],
];

const faqs = [
  {
    q: "業務システムの開発経験はHR Tech転職で評価されますか？",
    a: "評価されやすい領域です。勤怠・給与・人事マスタといった複雑なデータモデルや、正確性が求められる計算ロジックを扱った経験は、HR Techのプロダクト開発で直接活きます。マルチテナントSaaSの設計知見があればさらに強みになります。一方で、技術スタックがレガシーな場合はクラウドやモダン開発のキャッチアップが前提になります。",
  },
  {
    q: "人事・労務の業務知識がなくても転職できますか？",
    a: "可能性はあります。ドメイン知識は入社後にキャッチアップできる範囲も多く、まずはWeb開発やSaaS開発の技術力が問われます。ただし労務手続きや人事制度の理解があると要件定義で差がつくため、応募する領域の業務を事前に学んでおくと有利になります。",
  },
  {
    q: "HR Tech転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。HR Techでも年収レンジは幅広く、モダンスキルとドメイン理解を兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業・ポジションで大きく異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "HR Techではどんな技術が求められますか？",
    a: "求人傾向としてはバックエンド（Ruby/Java/Go/PHPなど）、API設計、クラウド（AWS/GCP）、SaaSのマルチテナント設計が基本になりやすいです。人事データの分析（SQL/Python）の知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "代表的なHR Tech企業にはどんなところがありますか？",
    a: "労務・人事領域のSmartHR、タレントマネジメントのカオナビ、バックオフィス全般を扱うfreeeやマネーフォワードなどが、人事・労務領域を扱う上場企業・有力企業の例として挙げられます。各社の特徴は企業ページもあわせて確認してください。",
  },
  {
    q: "30代・40代でもHR Techに転職できますか？",
    a: "業務システムやSaaSの開発経験が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はモダン技術の習得、40代はマネジメントや業務知識など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "SaaS業界へのエンジニア転職", href: "/industry/saas-industry/" },
  { name: "SmartHRの転職難易度・評判", href: "/company/smarthr/" },
  { name: "カオナビの転職難易度・評判", href: "/company/kaonavi/" },
  { name: "freeeの転職難易度・評判", href: "/company/freee/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "レバテックキャリアの評判", href: "/review/levtech/" },
];

export default function HrTechPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/hrtech/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "HR Tech業界へのエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          HR Tech業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 業務システムやSaaSの経験をHR Tech領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          人事・労務・採用・タレントマネジメントといった人事領域の業務をクラウドで支えるのがHR Tech（HR テック）です。勤怠・給与・人事マスタなど複雑なデータと法令対応を扱うため、業務システムやSaaSの開発経験を持つエンジニアが活躍しやすい領域です。本記事では、エンジニアがHR Tech業界へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：HR Tech業界への転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：業務システムやSaaSの開発経験を持つエンジニアにとって、HR Tech転職は十分現実的です。</span>
              人事業務の複雑さを正確にプロダクトへ落とし込める人材は、HR Tech各社が継続的に求めています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・勤怠・給与・人事マスタなど複雑なデータモデルを扱う力が活きる</li>
              <li>・一方でクラウド・API・プロダクト開発の進め方は多くの求人で問われる</li>
              <li>・30代は技術習得、40代はマネジメント＋業務知識の組み合わせで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の経験がどの領域（労務・採用・タレントマネジメント）で活きるか」を見極め、不足する技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">HR Tech業界の概要・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            HR Techは、人事労務手続きの電子化、勤怠・給与計算の自動化、採用管理、人材データの活用（ピープルアナリティクス）など、人事領域全般をクラウドで支える分野です。法改正への継続的な対応や、企業ごとに異なる人事制度を扱う必要があるため、業務理解とプロダクト開発を両立できるエンジニアの採用ニーズが見られます（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">複雑な業務ロジックの希少性</h3>
              <p className="text-sm text-slate-600">
                給与計算・勤怠・社会保険手続きなど、正確性と法令対応が求められるロジックを実装できるエンジニアは多くありません。業務理解を伴うプロダクト開発ができる人材は、HR Tech企業で重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。業務知識×ITのように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">データ活用領域の広がり</h3>
              <p className="text-sm text-slate-600">
                採用・評価・配置・エンゲージメントなど、人事データを活用する領域が広がっています。SQLやPythonでデータを扱える人は、ピープルアナリティクス系のポジションで経験を活かせる場面があります。
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
            ポイントは「強み（業務理解・データモデリング）を主役に、ギャップ（モダン技術・プロダクト志向）を補う」という見せ方です。職務経歴書では携わったシステムの規模・扱った業務領域・品質への取り組みを具体化し、学習中の技術と合わせて伝えると説得力が増します。
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
            未経験技術が多い場合は、いきなりプロダクト開発の中核を狙うより、社内SEや人事DX経由でモダン環境とHR業務に慣れてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            HR Tech企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
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
            年収を上げる現実的な手段は、(1) 業務理解を活かせる求人を選ぶ、(2) モダンスキルで応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            HR Tech領域には、労務・採用・タレントマネジメントなど扱う業務によって特徴の異なる企業があります。代表的な企業タイプとして、人事労務のSmartHR、タレントマネジメントのカオナビ、バックオフィス全般のfreeeやマネーフォワードなどが挙げられます（実在企業の例）。各社の詳細は企業ページもご覧ください。
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
              { name: "カオナビ", href: "/company/kaonavi/" },
              { name: "freee", href: "/company/freee/" },
              { name: "マネーフォワード", href: "/company/moneyforward/" },
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
              { step: "1", title: "経験を棚卸しする", desc: "携わったシステムの領域（業務系・基幹系・SaaSなど）、扱ったデータモデル、品質・性能改善の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "クラウド（AWS/GCP）・API設計・SaaSのマルチテナント設計など、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くものを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "労務・採用・タレントマネジメント・分析のうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
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
              <h3 className="font-bold text-blue-800 mb-2">30代：業務理解＋技術の二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                人事業務を理解したうえでモダン開発に踏み込めると、純粋なWebエンジニアにも純粋な人事担当にも代えがたい価値になります。技術のキャッチアップに投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントとドメインを軸に</h3>
              <p className="text-sm text-petrol-deep">
                大規模な業務システムのマネジメント経験や、人事・労務の深い理解は、HR Tech企業や人事DX支援で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、業務知識×ITという希少性で差別化するのがミドル層の定石です。
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
            HR TechのようなSaaS領域の転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。HR Techから事業会社まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
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
          <h2 className="text-xl font-bold mb-3">業務理解とSaaS開発の経験をHR Techで活かそう</h2>
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
