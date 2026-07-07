import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "インフラエンジニアの年収はいくら？【2026年】統計で443万〜889万円も差が出る理由を一次データで解明";
const PAGE_DESC =
  "インフラエンジニアの年収は、調べるサイトによって443万円〜889万円までバラバラです。本記事は令和7年賃金構造基本統計調査（2026年3月公表）の実額を軸に、求人票ベース・転職者ベース・公的統計の「なぜ差が出るか」を分解し、30代40代の実像と年収を上げる現実的なルートを解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/infra-engineer/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 統計比較表（全て2026-07-07検証済み・出典付き）
const statRows = [
  { src: "賃金構造基本統計調査（令和7年）", seg: "その他の情報処理・通信技術者（運用・保守等を含む区分）", val: "609.8万円", def: "在職者の実支給額（月給×12＋賞与）", note: "インフラ運用・保守の実像に最も近い公的値" },
  { src: "賃金構造基本統計調査（令和7年）", seg: "システムコンサルタント・設計者（上流設計中心）", val: "889.0万円", def: "同上", note: "基盤設計など上流に進んだ場合の水準" },
  { src: "厚労省 job tag「システムエンジニア（基盤システム）」", seg: "＝賃構「システムコンサルタント・設計者」を加工", val: "889万円", def: "公的統計の加工値", note: "「752.6万円」は令和6年版の旧掲載値" },
  { src: "doda 平均年収ランキング2025", seg: "サーバーエンジニア／ネットワークエンジニア", val: "469万円／455万円", def: "転職サイト登録者の申告年収（約60万件）", note: "転職市場に出る層（若手寄り）の現年収" },
  { src: "求人ボックス 給料ナビ（2026年6月）", seg: "インフラエンジニア（正社員）", val: "477万円", def: "掲載求人票の提示給与の中央値", note: "これから採用する人向けの提示額" },
  { src: "レバテックキャリア（2025年1月）", seg: "インフラエンジニア", val: "平均443万円", def: "同社掲載求人票ベース", note: "同上（未経験〜中堅求人を含む）" },
];

// 令和7年賃構・年齢階級別（年収換算・検証済み）
const ageRows = [
  { age: "30〜34歳", ops: "548.9万円", dev: "559.5万円", consul: "866.1万円" },
  { age: "35〜39歳", ops: "604.1万円", dev: "636.0万円", consul: "968.1万円" },
  { age: "40〜44歳", ops: "680.5万円", dev: "686.3万円", consul: "1,189.0万円" },
  { age: "45〜49歳", ops: "702.1万円", dev: "729.2万円", consul: "1,226.3万円" },
];

const reasons = [
  {
    t: "理由①: 「インフラエンジニア」に対応する統計区分が存在しない",
    d: "賃金構造基本統計調査に「インフラエンジニア」という職種はなく、運用・保守は「その他の情報処理・通信技術者」（609.8万円）、基盤設計の上流は「システムコンサルタント・設計者」（889.0万円）に分かれて集計されます。どちらを引くかで280万円変わります。",
  },
  {
    t: "理由②: 求人票ベース（443万〜477万円）は「これから払う提示額」",
    d: "求人ボックス（477万円）やレバテック（443万円）は掲載求人票の提示給与から算出しています。未経験〜中堅向けの求人が母集団の中心になるため、在職者全体の実支給より低く出るのが構造です。",
  },
  {
    t: "理由③: 転職サイト登録者ベース（455万〜469万円）は「転職市場に出る層の現年収」",
    d: "dodaのサーバーエンジニア469万円・ネットワークエンジニア455万円は、転職活動中の登録者約60万件の申告年収です。転職市場に出るのは若手が多く、年収が既に高い在職ベテランは母集団に入りにくいため、これも低めに出ます。",
  },
  {
    t: "理由④: 公的統計は「在職者全体の実支給（賞与込み）」",
    d: "賃金構造基本統計は在職者の「きまって支給する現金給与×12＋年間賞与」で、賞与とベテラン層を含むぶん高く出ます。なお同じ区分でも令和6年→令和7年で752.6万円→889.0万円と大きく動いており（平均年齢が41.4歳→38.3歳に変化＝標本変動の影響が濃厚）、単年の数値を絶対視しない姿勢も必要です。",
  },
];

const faqs = [
  {
    q: "インフラエンジニアの平均年収は結局いくらですか？",
    a: "「在職者の実像」に最も近いのは、令和7年賃金構造基本統計調査の『その他の情報処理・通信技術者』609.8万円（運用・保守等を含む区分・月給×12＋賞与）です。求人サイトの443万〜477万円は求人票の提示額、dodaの455万〜469万円は転職登録者の現年収で、いずれも母集団が若手寄りのため低く出ます。基盤設計の上流（システムコンサルタント・設計者区分）に進むと889.0万円が公的な平均です（いずれも2026年7月7日に一次資料で検証）。",
  },
  {
    q: "「インフラエンジニアの年収889万円（jobtag）」は本当ですか？",
    a: "厚労省job tagの「システムエンジニア（基盤システム）」に889万円の掲載があるのは事実です（令和7年賃金構造基本統計の加工値・2026年7月7日確認）。ただしこれは上流の「システムコンサルタント・設計者」区分の平均であり、運用・保守中心のインフラエンジニア全体の平均ではありません。他サイトに残る「752.6万円」は令和6年版の旧掲載値です。",
  },
  {
    q: "30代・40代のインフラエンジニアの年収はいくらですか？",
    a: "令和7年賃金構造基本統計（運用・保守を含む区分）では30代前半548.9万円・30代後半604.1万円・40代前半680.5万円・40代後半702.1万円です。上流設計の区分では40代前半で1,189.0万円と、同じ年代でも役割によって500万円以上の差がつきます。",
  },
  {
    q: "インフラエンジニアが年収を上げるにはどうすればいいですか？",
    a: "統計が示す最大の分水嶺は「運用・保守に留まるか、設計・上流に進むか」です（40代前半で680.5万円 vs 1,189.0万円）。実務ではクラウド（AWS/Azure）設計、IaC、SREへの越境が上流区分への現実的なルートです。ハローワーク統計でも有効求人倍率2.28倍と売り手市場のため、スキルの掛け算ができた時点で市場価値を確認する価値があります。",
  },
  {
    q: "経産省の「IT人材の給与調査」の数字は使えますか？",
    a: "経産省「IT関連産業の給与等に関する実態調査」は2017年（平成29年）実施の単発調査で、以降更新されていません（元ページも削除済み・国会図書館アーカイブで確認）。約9年前のデータのため、現在の年収相場の根拠としては推奨しません。本記事は2026年3月公表の令和7年賃金構造基本統計を使用しています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function InfraEngineerSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/infra-engineer/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/infra-engineer/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "インフラエンジニアの年収" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">インフラエンジニアの年収はいくら？統計で443万〜889万円も差が出る理由</h1>

        {/* 直答 */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <p className="text-sm leading-7 text-slate-700 mb-2">
            <strong>【直答】在職者の実像に最も近い公的値は609.8万円</strong>（令和7年賃金構造基本統計・運用/保守を含む区分・月給×12＋賞与）。求人サイトの「443万〜477万円」は求人票の提示額、「889万円」は基盤設計など上流区分の平均です。<strong>どの数字も嘘ではなく、測っている母集団が違うだけ</strong>——本記事でその構造を一次データで分解します。
          </p>
          <p className="text-xs text-slate-400">数値はすべて2026年7月7日に一次資料（e-Stat・厚労省job tag・各社公表ページ）で検証済み。</p>
        </div>

        <DataNote
          surveyedAt="2026年7月7日"
          sources={["令和7年賃金構造基本統計調査（e-Stat・2026年3月公表）", "厚生労働省 job tag", "doda平均年収ランキング2025", "求人ボックス給料ナビ", "レバテックキャリア"]}
        />

        {/* 統計比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要統計の比較——「インフラエンジニアの年収」6つの数字</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden min-w-[720px]">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-3 py-2.5">出典</th>
                  <th className="px-3 py-2.5">対象区分</th>
                  <th className="px-3 py-2.5">年収</th>
                  <th className="px-3 py-2.5">何を測った数字か</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2.5 align-top font-medium text-slate-700">{r.src}</td>
                    <td className="px-3 py-2.5 align-top text-slate-600">{r.seg}</td>
                    <td className="px-3 py-2.5 align-top font-bold text-slate-900 whitespace-nowrap">{r.val}</td>
                    <td className="px-3 py-2.5 align-top text-slate-600">{r.def}。{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* なぜ差が出るか */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ300万円以上も差が出るのか——4つの構造</h2>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.t}</h3>
                <p className="text-sm leading-7 text-slate-600">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年齢階級別 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の実額（令和7年賃金構造基本統計・年収換算）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden min-w-[560px]">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-3 py-2.5">年齢</th>
                  <th className="px-3 py-2.5">運用・保守等を含む区分</th>
                  <th className="px-3 py-2.5">開発（ソフトウェア作成者）</th>
                  <th className="px-3 py-2.5">上流設計（システムコンサル・設計者）</th>
                </tr>
              </thead>
              <tbody>
                {ageRows.map((r, i) => (
                  <tr key={r.age} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2.5 font-medium text-slate-700 whitespace-nowrap">{r.age}</td>
                    <td className="px-3 py-2.5">{r.ops}</td>
                    <td className="px-3 py-2.5">{r.dev}</td>
                    <td className="px-3 py-2.5 font-bold text-slate-900">{r.consul}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 令和7年賃金構造基本統計調査 職種別第5表（男女計・企業規模計・一般労働者）。年収換算＝きまって支給する現金給与額×12＋年間賞与その他特別給与額。2026年7月7日にe-Stat原本から算出。</p>
          <p className="text-sm leading-7 text-slate-600 mt-4">
            この表が示すミドル世代の分水嶺は明確です。<strong>40代前半で、運用・保守中心なら680.5万円、基盤の上流設計に進んでいれば1,189.0万円</strong>——同じ「インフラ出身」でも役割で500万円以上の差がつきます。実務でこの境界を越える定番ルートがクラウド設計（AWS/Azure）・IaC・SREへの越境です（<Link href="/salary/tech-stack-salary/" className="text-petrol-deep underline">技術スタック別年収</Link>・<Link href="/salary/skill-ranking/" className="text-petrol-deep underline">スキル別ランキング</Link>）。
          </p>
        </section>

        {/* ITSSレベル別 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルレベル別の分布（厚労省 job tag掲載・ITSSレベル別）</h2>
          <p className="text-sm leading-7 text-slate-600 mb-3">
            job tag（基盤システム）にはITSSレベル別の年収分布（第1〜第3四分位）も掲載されています: レベル1〜2で420万〜620万円、レベル3で450万〜700万円、レベル4で500万〜780万円、レベル5以上で600万〜950万円（厚労省2023年度委託調査・2026年7月7日確認）。<strong>レベル4（高度専門）以上に到達できるかが600万円台後半の壁を越える条件</strong>です。ハローワーク統計では有効求人倍率2.28倍（令和6年度）と、売り手市場が続いています。
          </p>
        </section>

        <TechgoCta
          heading="「運用から上流へ」の市場価値、いま何万円か確認しませんか"
          note="テックゴーは年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）・年収交渉成功率100%（2025年9月時点・公式公表）のIT特化エージェント。インフラ→クラウド設計・SREのキャリア相談も無料です。"
          buttonText="無料キャリア面談で市場価値を確認する（公式）"
        />

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-xl group">
                <summary className="cursor-pointer p-4 font-bold text-slate-800 text-sm flex justify-between items-center">
                  {f.q}
                  <span className="text-petrol-deep group-open:rotate-45 transition-transform text-lg shrink-0 ml-3">＋</span>
                </summary>
                <p className="px-4 pb-4 text-sm text-slate-600 leading-7">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 関連 */}
        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ページ</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/salary/project-manager/", label: "プロジェクトマネージャーの年収（891.5万円の正体）" },
              { href: "/salary/it-consultant/", label: "ITコンサルタントの年収（有報6社の実額）" },
              { href: "/salary/job-type-salary/", label: "IT職種別 年収ランキング（公表値準拠）" },
              { href: "/salary/age-salary/", label: "年代別エンジニア年収・転職難易度 早見表" },
              { href: "/salary/tech-stack-salary/", label: "技術スタック別 年収データ" },
              { href: "/knowledge/best-timing/", label: "転職のベストタイミングはいつ？" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-petrol-deep hover:bg-slate-50 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
