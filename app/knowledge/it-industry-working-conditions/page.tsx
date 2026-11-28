import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "IT業界はブラックか｜労働時間・残業・離職率を公的統計で他業種と比べる【2026年】";
const DESCRIPTION =
  "IT業界（情報通信業）の労働時間・残業・離職率・有給取得率を、厚生労働省の3つの統計で16産業と比べ、当サイトで順位を集計しました。過労死等防止対策白書のIT産業調査の結果と、応募先を見分けるための公的な材料もご説明します。";
const URL = "/knowledge/it-industry-working-conditions/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "compare", label: "16産業の中での情報通信業の順位（当サイト集計）" },
  { id: "hours", label: "労働時間と残業（毎月勤労統計調査）" },
  { id: "turnover", label: "離職率と入職率（雇用動向調査）" },
  { id: "leave", label: "年次有給休暇の取得率（就労条件総合調査）" },
  { id: "hakusho", label: "過労死等防止対策白書のIT産業の調査結果" },
  { id: "check", label: "応募先を見分けるための公的な材料" },
  { id: "related", label: "働き方・転職の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "IT業界はブラックな業界なのですか？",
    a: "公的統計からは、業界全体をブラックと判断する根拠は見当たりません。ただし、残業は多い側です。毎月勤労統計調査（2025年分確報）では、情報通信業の一般労働者の総実労働時間は月160.5時間で調査産業計と同じでしたが、所定外労働時間は月16.5時間と調査産業計（13.2時間）より長く、16産業中3番目でした（当サイト集計）。一方、離職率と年次有給休暇の取得率は全体平均と同程度か、それより良い水準です。働き方は企業ごとの差が大きいため、応募先ごとに確認することをおすすめします。",
  },
  {
    q: "IT業界の残業時間は月何時間くらいですか？",
    a: "毎月勤労統計調査（2025年分確報、事業所規模5人以上）では、情報通信業の所定外労働時間は、パートタイム労働者を含む就業形態計で月15.8時間、一般労働者で月16.5時間でした。調査産業計はそれぞれ月9.8時間・13.2時間です。統計上の平均値であり、個々の企業や職場の残業時間を示すものではありません。",
  },
  {
    q: "IT業界の離職率は高いですか？",
    a: "雇用動向調査（令和7年）では、情報通信業の離職率は10.4％で、産業計（13.7％）を下回りました。一般労働者に限ると10.0％で、産業計は11.4％です。入職率は13.6％と離職率を3.2ポイント上回っており、人の出入りでは入職が多い状態です。",
  },
  {
    q: "IT業界でなぜ残業が生じるのですか？",
    a: "令和8年版過労死等防止対策白書に掲載されたIT産業の労働者へのウェブ調査（令和7年11月実施）では、所定外労働が生じる理由として「業務量が多いため」が61.1％で最も多く、「人員が不足しているため」38.1％、「仕事の繁閑の差が大きいため」28.2％が続きました。「顧客からの不規則な要望に対応する必要があるため（予期せぬ仕様変更等）」は20.4％、「顧客の提示する納期が短いため」は16.4％でした（複数回答）。",
  },
  {
    q: "ブラック企業を避けるには、どこを確認すればよいですか？",
    a: "当サイトでは、公的な情報で確かめられる項目から確認することをおすすめしています。具体的には、厚生労働省の職場情報総合サイト「しょくばらぼ」での残業時間・有給休暇取得率の公表状況、ユースエール認定の有無、厚生労働省「労働基準関係法令違反に係る公表事案」への掲載の有無です。あわせて、求人票や労働条件通知書で固定残業代や36協定の内容を確認してください。",
  },
];

const compareRows = [
  { item: "総実労働時間（月・一般労働者）", it: "160.5時間", all: "160.5時間", rank: "16産業中9位（長い順）", src: "毎月勤労統計調査 2025年分確報" },
  { item: "所定外労働時間（月・一般労働者）", it: "16.5時間", all: "13.2時間", rank: "16産業中3位（長い順）", src: "毎月勤労統計調査 2025年分確報" },
  { item: "所定外労働時間（月・就業形態計）", it: "15.8時間", all: "9.8時間", rank: "16産業中3位（長い順）", src: "毎月勤労統計調査 2025年分確報" },
  { item: "離職率（計）", it: "10.4％", all: "13.7％", rank: "16産業中9位（高い順）", src: "雇用動向調査 令和7年" },
  { item: "離職率（一般労働者）", it: "10.0％", all: "11.4％", rank: "16産業中6位（高い順・同率2産業）", src: "雇用動向調査 令和7年" },
  { item: "入職超過率（計）", it: "3.2ポイント", all: "1.0ポイント", rank: "16産業中2位（高い順）", src: "雇用動向調査 令和7年" },
  { item: "年次有給休暇の取得率", it: "66.9％", all: "66.9％", rank: "16産業中7位（高い順）", src: "就労条件総合調査 令和7年" },
];

const hoursRows = [
  { ind: "運輸業，郵便業", total: "175.3", over: "24.1" },
  { ind: "電気・ガス業", total: "156.9", over: "16.9" },
  { ind: "情報通信業", total: "160.5", over: "16.5", it: true },
  { ind: "飲食サービス業等", total: "172.6", over: "15.6" },
  { ind: "教育，学習支援業", total: "157.2", over: "14.8" },
  { ind: "製造業", total: "162.3", over: "14.7" },
  { ind: "金融業，保険業", total: "151.0", over: "13.6" },
  { ind: "調査産業計", total: "160.5", over: "13.2", all: true },
  { ind: "医療，福祉", total: "153.6", over: "6.7" },
];

export default function ItIndustryWorkingConditionsPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "IT業界の労働時間・離職率" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          IT業界はブラックか｜労働時間・残業・離職率を公的統計で他業種と比べる
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】IT業界はブラックか</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>厚生労働省の公的統計で比べると、IT業界（情報通信業）は残業がやや多いものの、労働時間・離職率・有給休暇の取得率は全産業の平均と同程度か、それより良い水準です。業界全体をブラックと判断する根拠は、当サイトの確認範囲では見当たりません。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・一般労働者の総実労働時間は月160.5時間で、調査産業計と同じです。所定外労働時間（残業）は月16.5時間で、調査産業計（13.2時間）を上回り、16産業中3番目に長い水準でした（毎月勤労統計調査 2025年分、当サイト集計）</li>
              <li>・離職率は10.4％で、産業計の13.7％を下回りました（雇用動向調査 令和7年）。年次有給休暇の取得率は66.9％で、全体平均と同じです（就労条件総合調査 令和7年）</li>
              <li>・一方で、精神障害に係る労災請求のうち自殺（未遂を含む）の事案は、雇用者100万人当たりで情報通信業が6.3件と業種別で最も多くなっています（令和8年版過労死等防止対策白書）。平均値の裏で、負荷が集中する職場があることには注意が必要です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「IT業界はブラック」という評価は、個別の体験談をもとに語られることが多い一方、業界全体を他業種と同じ基準で比べた情報は多くありません。本記事では、厚生労働省が公表している毎月勤労統計調査・雇用動向調査・就労条件総合調査の産業別の表から情報通信業の値を取り出し、16産業の中での順位を当サイトで集計しました。あわせて、過労死等防止対策白書のIT産業の調査結果と、応募先の企業を見分けるために使える公的な情報をご説明します。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」第2表", "厚生労働省「令和7年 雇用動向調査結果の概要」表4-2", "厚生労働省「令和7年就労条件総合調査 結果の概況」第5表", "厚生労働省「令和8年版過労死等防止対策白書」第1章", "厚生労働省「労働基準関係法令違反に係る公表事案」（令和8年10月30日掲載）"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">16産業の中での情報通信業の順位（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            3つの統計はいずれも、日本標準産業分類の大分類にもとづく16産業の値を掲載しています。当サイトでは、各表から情報通信業と全体（調査産業計・産業計・調査計）の値を取り出し、16産業の中での順位を数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">情報通信業</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">全体</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">16産業中の順位（当サイト集計）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.item}>
                    <td className="border border-slate-200 px-3 py-2">{r.item}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.it}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.all}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.rank}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">算出方法：各調査の公表PDFをpdftotextでテキスト化し、産業別の表に掲載された16産業の値を並べて、情報通信業より値が大きい産業の数に1を足して順位としました（2026年11月28日、当サイト実施）。毎月勤労統計調査は事業所規模5人以上、雇用動向調査は常用労働者5人以上の事業所が対象です。統計ごとに調査対象・調査時期が異なるため、順位は目安としてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            7項目のうち、全体より不利な値は残業（所定外労働時間）の2項目でした。労働時間の総量、離職率、有給休暇の取得率は、全体と同程度か全体より良い値です。「長時間労働の業界」というよりも、「所定労働時間は短めで、その分を残業で働く傾向がある業界」と読むのが統計に沿った見方です（当サイトの整理）。
          </p>
        </section>

        <section id="hours" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">労働時間と残業（毎月勤労統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            毎月勤労統計調査の2025（令和7）年分結果確報（第2表 月間実労働時間及び出勤日数）から、一般労働者（パートタイム労働者を除く）の値を、所定外労働時間の長い順に抜粋しました。数値は1人当たりの月間の平均です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">産業（一般労働者）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">総実労働時間（月）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">所定外労働時間（月）</th>
                </tr>
              </thead>
              <tbody>
                {hoursRows.map((r) => (
                  <tr key={r.ind} className={r.it ? "bg-petrol-soft font-medium" : r.all ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-3 py-2">{r.ind}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.total}時間</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.over}時間</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」第2表（事業所規模5人以上）。16産業のうち9産業を抜粋し、所定外労働時間の長い順に並べています（調査産業計は比較のため挿入）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            情報通信業の一般労働者は、総実労働時間が月160.5時間で調査産業計と同じですが、所定内労働時間は月144.0時間と調査産業計（147.3時間）より短く、所定外労働時間は月16.5時間と3.3時間長くなっています。月16.5時間を12か月分に換算すると年198時間で、労働基準法第36条が定める時間外労働の原則の上限（1か月45時間・1年360時間）の範囲内に収まる水準です（当サイトの換算。所定外労働時間には法定内の残業も含まれるため、法定時間外労働と同じではありません）。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお、パートタイム労働者を含む就業形態計では、情報通信業の総実労働時間は月156.9時間で、調査産業計（135.1時間）を大きく上回ります。これは、パートタイム労働者の比率が低い産業ほど平均の労働時間が長く出るためと考えられます。正社員として働く場合の比較には、一般労働者の値を使うことをおすすめします。
          </p>
        </section>

        <section id="turnover" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">離職率と入職率（雇用動向調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            令和7（2025）年 雇用動向調査の表4-2「産業、就業形態別入職率・離職率・入職超過率」から、情報通信業と産業計の値を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">入職率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">離職率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">入職超過率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-petrol-soft font-medium"><td className="border border-slate-200 px-3 py-2">情報通信業（計）</td><td className="border border-slate-200 px-3 py-2 text-right">13.6％</td><td className="border border-slate-200 px-3 py-2 text-right">10.4％</td><td className="border border-slate-200 px-3 py-2 text-right">3.2ポイント</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">産業計（計）</td><td className="border border-slate-200 px-3 py-2 text-right">14.7％</td><td className="border border-slate-200 px-3 py-2 text-right">13.7％</td><td className="border border-slate-200 px-3 py-2 text-right">1.0ポイント</td></tr>
                <tr className="bg-petrol-soft font-medium"><td className="border border-slate-200 px-3 py-2">情報通信業（一般労働者）</td><td className="border border-slate-200 px-3 py-2 text-right">13.1％</td><td className="border border-slate-200 px-3 py-2 text-right">10.0％</td><td className="border border-slate-200 px-3 py-2 text-right">3.1ポイント</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">産業計（一般労働者）</td><td className="border border-slate-200 px-3 py-2 text-right">12.0％</td><td className="border border-slate-200 px-3 py-2 text-right">11.4％</td><td className="border border-slate-200 px-3 py-2 text-right">0.6ポイント</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年 雇用動向調査結果の概要」表4-2（常用労働者5人以上の事業所、約15,000事業所を抽出）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            情報通信業の離職率は、計・一般労働者のいずれでも産業計を下回りました。入職率から離職率を引いた入職超過率は計で3.2ポイントあり、宿泊業，飲食サービス業（4.1ポイント）に次いで16産業中2番目の高さでした（当サイト集計）。統計上は、人が辞めていく業界というよりも、入ってくる人が多い業界といえます。ただし、離職率は事業所単位の平均であり、企業ごとの定着状況は個別に確認する必要があります。
          </p>
        </section>

        <section id="leave" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年次有給休暇の取得率（就労条件総合調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            令和7年就労条件総合調査の第5表「労働者1人平均年次有給休暇の取得状況」では、令和6（2024）年1年間の状況が集計されています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均付与日数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均取得日数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均取得率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-petrol-soft font-medium"><td className="border border-slate-200 px-3 py-2">情報通信業</td><td className="border border-slate-200 px-3 py-2 text-right">18.9日</td><td className="border border-slate-200 px-3 py-2 text-right">12.7日</td><td className="border border-slate-200 px-3 py-2 text-right">66.9％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">令和7年調査計</td><td className="border border-slate-200 px-3 py-2 text-right">18.1日</td><td className="border border-slate-200 px-3 py-2 text-right">12.1日</td><td className="border border-slate-200 px-3 py-2 text-right">66.9％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">電気・ガス・熱供給・水道業（最も高い）</td><td className="border border-slate-200 px-3 py-2 text-right">19.5日</td><td className="border border-slate-200 px-3 py-2 text-right">14.7日</td><td className="border border-slate-200 px-3 py-2 text-right">75.2％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">宿泊業，飲食サービス業（最も低い）</td><td className="border border-slate-200 px-3 py-2 text-right">15.9日</td><td className="border border-slate-200 px-3 py-2 text-right">8.0日</td><td className="border border-slate-200 px-3 py-2 text-right">50.7％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年就労条件総合調査 結果の概況」第5表。付与日数は繰越日数を除きます。取得率は取得日数計÷付与日数計×100です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            情報通信業の取得率は66.9％で、調査計と同じ値でした。付与日数・取得日数はいずれも調査計を上回っています。16産業の中では7番目で、中位の水準です（当サイト集計）。
          </p>
        </section>

        <section id="hakusho" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">過労死等防止対策白書のIT産業の調査結果</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            過労死等防止対策白書では、長時間労働の実態があるとの指摘がある業種の一つとして「IT産業」（情報通信業のうち中分類「情報サービス業」）を取り上げ、継続して調査・分析しています。令和8年版の第1章から、IT産業に関する主な結果をご紹介します。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-3">IT産業の労働者へのウェブ調査（令和7年11月実施）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            調査会社のモニターに登録しているIT産業の労働者1,442人（管理的職業103人・専門的・技術的職業1,030人・事務的職業309人）を対象に、令和7年11月11日から13日に実施されたウェブ調査です。国勢調査の情報サービス業の性・年齢構成に合わせて集計値が補正されています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>過去1か月の1週間当たりの実労働時間が60時間以上の割合は、全体で2.4％でした。職種別では管理的職業が7.5％、役職別では課長・課長代理相当が7.9％と高く、請負階層別では最終下請が3.6％と最も高くなっています。</li>
            <li>所定外労働が生じる理由（複数回答）は、「業務量が多いため」61.1％、「人員が不足しているため」38.1％、「仕事の繁閑の差が大きいため」28.2％の順でした。「顧客からの不規則な要望に対応する必要があるため（予期せぬ仕様変更等）」20.4％、「顧客の提示する納期が短いため」16.4％など、取引先に起因する理由も挙がっています。</li>
            <li>ハラスメントを受けた経験は、パワーハラスメント14.1％、カスタマーハラスメント6.9％、セクシュアルハラスメント3.6％でした。</li>
          </ul>
          <h3 className="text-lg font-bold text-slate-800 mb-3">全業種の就業者調査・労災の統計との比較</h3>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>全業種の就業者21,123人を対象とした調査では、パワーハラスメントを受けた経験は全体19.3％に対し、情報通信業（962人）は12.1％でした。うつ傾向・不安（K6）で「重度のうつ・不安障害の疑い」「うつ・不安障害の疑い」を合わせた割合は、全体27.9％に対し、情報通信業は25.8％でした。</li>
            <li>令和7年度の精神障害に係る労災請求のうち、自殺（未遂を含む）の事案を雇用者100万人当たりで見ると、情報通信業が6.3件と最も多く、建設業の5.1件が続きました。</li>
            <li>業種の中分類で見た令和7年度の精神障害の労災請求件数では、情報サービス業が181件で5番目に多くなっています。</li>
          </ul>
          <p className="text-xs text-slate-500 mb-4">出典：厚生労働省「令和8年版過労死等防止対策白書」第1章（第1-3-2-10図・第1-3-2-13図・第1-3-2-38図〜第1-3-2-43図、第1-2-1-43図、第1-2-1-47表）。アンケート調査の資料出所は、労働安全衛生総合研究所社会労働衛生研究グループ「令和７年度過労死等に関する実態把握のための労働・社会面の調査研究」です。</p>
          <p className="text-slate-600 leading-relaxed">
            白書の結果からは、平均的な労働時間やハラスメントの経験率は全体より低い一方で、管理職や最終下請の立場の人、顧客都合の業務量の変動を受けやすい職場に負荷が集中しやすいことがうかがえます。業界の平均値だけで判断せず、自分が就く役職や、案件の受注構造（元請か下請か）を確認することが大切です。下請構造の詳しい説明は、当サイトの<Link href="/employment/ses/" className="text-blue-600 hover:underline">SESエンジニアの実態</Link>をご覧ください。
          </p>
        </section>

        <section id="check" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">応募先を見分けるための公的な材料</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            業界の統計は全体の傾向を示すものであり、個々の企業の働き方は分かりません。応募先の企業については、次の公的な情報で確認できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">確認する材料</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">分かること</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">しょくばらぼ（厚生労働省の職場情報総合サイト）</td><td className="border border-slate-200 px-3 py-2">企業が公表した残業時間、有給休暇の取得率などの職場情報</td><td className="border border-slate-200 px-3 py-2">企業が自ら公表した範囲の情報で、掲載がない企業もあります</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ユースエール認定（若者雇用促進法にもとづく厚生労働大臣の認定）</td><td className="border border-slate-200 px-3 py-2">直近3事業年度の新卒者等の離職率20％以下、正社員の月平均所定外労働時間20時間以下かつ月60時間以上の法定時間外労働をした正社員がいない、有給休暇の取得率平均70％以上または平均10日以上などの要件を満たした企業</td><td className="border border-slate-200 px-3 py-2">対象は常時雇用する労働者300人以下の中小企業で、若者向けの正社員募集を行っていることが前提です</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">労働基準関係法令違反に係る公表事案（厚生労働省）</td><td className="border border-slate-200 px-3 py-2">労働基準関係法令違反で送検され、各労働局が公表した企業・事業場の名称、違反法条、事案の概要</td><td className="border border-slate-200 px-3 py-2">一覧に載るのは直近1年間の公表分で、掲載がないことは違反がないことを意味しません</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">求人票・労働条件通知書</td><td className="border border-slate-200 px-3 py-2">所定労働時間、時間外労働の有無、固定残業代の時間数と金額、休日</td><td className="border border-slate-200 px-3 py-2">内定時に書面で受け取り、求人票との違いを確認します</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「ユースエール認定制度」、厚生労働省「しょくばらぼ」、厚生労働省「長時間労働削減に向けた取組」掲載の公表事案（いずれも2026年11月28日確認）。</p>

          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">公表事案の一覧の内容（当サイト集計）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトでは、厚生労働省が令和8年10月30日に掲載した「労働基準関係法令違反に係る公表事案（令和7年10月1日〜令和8年9月30日公表分）」のPDF（66ページ）をテキスト化し、内容を数えました。掲載は406件で、いずれも「その他参考事項」欄に送検日が記載されていました（うち2件は不起訴、1件は有罪確定と追記）。一覧には「企業・事業場名称」「所在地」「公表日」「違反法条」「事案概要」「その他参考事項」の欄があり、業種の欄はありません。そのため、情報通信業の件数は数えられませんでした。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            違反法条の欄に記載された条文の数を法律ごとに数えると、労働安全衛生法が305か所、最低賃金法が66か所、労働基準法が45か所、労働者派遣法が3か所でした。労働基準法のうち、労働時間を定める第32条は19か所、時間外・休日労働を定める第36条は7か所、賃金の支払を定める第24条は11か所でした。1件に複数の条文が書かれている場合があるため、件数ではなく記載か所の数です（当サイト集計・目安）。
          </p>
          <p className="text-slate-600 leading-relaxed">
            応募先の確認には、PDFを開いて企業名で検索する方法が使えます。求人票の読み方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>で、しょくばらぼや有価証券報告書の使い方は<Link href="/knowledge/company-research/" className="text-blue-600 hover:underline">企業分析のやり方</Link>で詳しくご説明しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方・転職の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事は、IT業界全体の働き方を公的統計で他業種と比べることに絞ってご説明しました。個別の企業選びや働き方の見直しは、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>残業の少ない企業への転職の進め方：<Link href="/purpose/no-overtime/" className="text-blue-600 hover:underline">残業少なめIT企業の見極め方</Link></li>
            <li>働き方を重視した企業の見極め方と面接での質問：<Link href="/knowledge/work-life-balance/" className="text-blue-600 hover:underline">ワークライフバランス重視のIT転職</Link></li>
            <li>客先常駐・多重下請の働き方：<Link href="/employment/ses/" className="text-blue-600 hover:underline">SESエンジニアの実態</Link>／<Link href="/industry/ses-exit/" className="text-blue-600 hover:underline">SESから脱出する方法</Link></li>
            <li>心身の負荷が続いている場合の休職と転職の判断：<Link href="/knowledge/burnout/" className="text-blue-600 hover:underline">エンジニアの燃え尽き症候群と転職判断</Link></li>
            <li>求人票で確認する項目：<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link></li>
          </ul>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月28日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>厚生労働省「毎月勤労統計調査 2025（令和7）年分結果確報」：https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r07/25cr/25cr.html</li>
            <li>同 結果確報PDF（第2表 月間実労働時間及び出勤日数）：https://www.mhlw.go.jp/toukei/itiran/roudou/monthly/r07/25cr/dl/pdf25cr.pdf</li>
            <li>厚生労働省「令和7年 雇用動向調査結果の概要」：https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/index.html</li>
            <li>同 産業別の入職と離職（表4-2）：https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/26-2/dl/kekka_gaiyo-02.pdf</li>
            <li>厚生労働省「令和7年就労条件総合調査 結果の概況」：https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/index.html</li>
            <li>同 結果の概要（第5表 年次有給休暇の取得状況）：https://www.mhlw.go.jp/toukei/itiran/roudou/jikan/syurou/25/dl/gaiyou01.pdf</li>
            <li>厚生労働省「令和8年版過労死等防止対策白書」：https://www.mhlw.go.jp/stf/wp/hakusyo/karoushi/26/index.html</li>
            <li>同 第1章：https://www.mhlw.go.jp/content/11200000/001758976.pdf</li>
            <li>厚生労働省「長時間労働削減に向けた取組」：https://www.mhlw.go.jp/kinkyu/151106.html</li>
            <li>厚生労働省「労働基準関係法令違反に係る公表事案（令和7年10月1日〜令和8年9月30日公表分）」：https://www.mhlw.go.jp/content/001725374.pdf</li>
            <li>厚生労働省「ユースエール認定制度」：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000100266.html</li>
            <li>厚生労働省「しょくばらぼ（職場情報総合サイト）」：https://shokuba.mhlw.go.jp/</li>
            <li>e-Gov法令検索「労働基準法」第36条：https://laws.e-gov.go.jp/law/322AC0000000049</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "残業少なめIT企業の見極め方", href: "/purpose/no-overtime/" },
              { name: "ワークライフバランス重視のIT転職", href: "/knowledge/work-life-balance/" },
              { name: "企業分析のやり方", href: "/knowledge/company-research/" },
              { name: "エンジニアの燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
            ].map((item, i) => (
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
