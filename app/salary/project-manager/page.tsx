import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "プロジェクトマネージャーの年収はいくら？【2026年】「891.5万円」が9年前のデータである件と最新統計の実像";
const PAGE_DESC =
  "ITプロジェクトマネージャー（PM）の年収を最新データで検証。多くのサイトが引用する「891.5万円」は2017年公表（2016年度調査）の9年前の数値です。本記事はdoda2025年版（707万円・40代855万円）、令和7年賃金構造基本統計、ITSSレベル別分布を一次資料で確認し、PMの年収の実像と上げ方を解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/project-manager/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const statRows = [
  { src: "doda 平均年収ランキング2025", seg: "プロジェクトマネジャー（技術系IT/通信で1位）", val: "707万円", def: "転職サイト登録者約60万人の申告年収（2024年9月〜2025年8月）", note: "現役PM層の現年収に最も近い最新値" },
  { src: "求人ボックス 給料ナビ（2026年6月）", seg: "プロジェクトマネージャー", val: "687万円", def: "掲載求人票の給与水準の中央値", note: "採用側の提示額。全体幅は380万〜1,282万円" },
  { src: "レバテックキャリア（2025年1月）", seg: "PM（正社員・掲載求人2,251件）", val: "平均568万円", def: "同社掲載求人票ベース", note: "中堅向け求人を含むため低めに出る" },
  { src: "レバテックフリーランス", seg: "フリーランスPM（案件351件）", val: "平均960万円", def: "月額単価×12（2022年5月〜2024年5月）", note: "40代1,027万円・独立時の参考値" },
  { src: "賃金構造基本統計調査（令和7年）", seg: "システムコンサルタント・設計者（PMを内包する区分）", val: "889.0万円", def: "在職者の実支給（月給×12＋賞与）", note: "PM専用区分は存在しない（下で詳述）" },
  { src: "経産省 IT人材給与実態調査（2017年公表）", seg: "プロジェクトマネージャ", val: "891.5万円", def: "IPAの個人アンケート（2016年度・約5,000名）の申告平均", note: "9年前の単発調査。元ページは削除済み" },
];

const dodaAge = [
  { age: "20代", val: "517万円" },
  { age: "30代", val: "705万円" },
  { age: "40代", val: "855万円" },
  { age: "50代以上", val: "867万円" },
];

const reasons = [
  {
    t: "事実①: 多くのサイトの「891.5万円」は9年前のデータ",
    d: "検索上位の複数記事が引用する「PMの平均年収891.5万円」は、経産省「IT関連産業の給与等に関する実態調査」（2017年8月公表）の数値で、実態はIPAが2016年度に実施した個人アンケート約5,000名の申告平均です。経産省の元ページは既に削除されており（当サイトは国立国会図書館アーカイブで原典を確認）、9年前の単発調査を現在の相場として使うのは不適切です。",
  },
  {
    t: "事実②: 公的統計に「プロジェクトマネージャー」という区分は存在しない",
    d: "令和7年賃金構造基本統計調査の職種一覧を全行確認しましたが、PM専用の区分はありません。厚労省の職種早見表には「情報処理プロジェクトマネージャー→システムコンサルタント・設計者（1101）」と明記されており、公的なPMの年収は上流職全体を含む889.0万円（令和7年・平均38.3歳）に内包されています。厚労省jobtagの「プロジェクトマネージャ（IT）889万円」も、この1101区分の値をそのまま表示したものです（ページ内データで確認）。",
  },
  {
    t: "事実③: 最新の現役PM層の申告値は707万円（doda2025）",
    d: "現時点で最も新しく母集団の大きい値は、doda平均年収ランキング2025のプロジェクトマネジャー707万円（登録者約60万人・2025年12月発表）。技術系（IT/通信）の職種で1位です。求人票ベース（568万〜687万円）が低く出るのは、これから採用する中堅向け提示額だからで、矛盾ではありません。",
  },
  {
    t: "事実④: PMは「年齢とともに年収が伸び続ける」数少ないIT職種",
    d: "dodaの年代別では20代517万→30代705万→40代855万→50代以上867万円と、40代以降も伸びが続きます。マネジメント経験は年齢がプラスに働く資産であり、ミドル世代の転職市場で最も高く売れるスキルの一つです。フリーランスPMなら平均960万円（40代1,027万円）という選択肢もあります。",
  },
];

const faqs = [
  {
    q: "プロジェクトマネージャーの平均年収は結局いくらですか？",
    a: "現役PM層の実像に最も近い最新値は、doda平均年収ランキング2025の707万円（登録者約60万人の申告・2025年12月発表）です。年代別では30代705万円・40代855万円。よく引用される「891.5万円」は2016年度実施（2017年公表）の経産省・IPA調査で9年前の数値、公的な賃金構造基本統計にはPM専用区分がなく上流職全体で889.0万円（令和7年）です（いずれも2026年7月7日に一次資料で検証）。",
  },
  {
    q: "「PMの年収891.5万円」という数字は今も使えますか？",
    a: "推奨しません。出典の経産省「IT関連産業の給与等に関する実態調査」は2017年公表（調査は2016年度）の単発調査で以降更新されておらず、経産省の元ページも削除済みです（当サイトは国立国会図書館アーカイブで原典PDFを確認）。約9年前のIT人材約5,000名の申告平均であり、現在の相場の根拠にはdoda2025年版（707万円）等の最新データを使うべきです。",
  },
  {
    q: "40代のPMの年収はいくらですか？",
    a: "doda2025年版でPMの40代は855万円（50代以上は867万円）です。ITSSレベル別の分布（厚労省jobtag掲載・2023年度委託調査）では、レベル4で675万〜950万円、レベル5以上で700万〜1,100万円が中位レンジです。大規模案件の完遂実績・ピープルマネジメント・予算責任の3点が揃うと上限側に寄ります。",
  },
  {
    q: "PMになると年収は上がりますか？",
    a: "統計上は明確に上がります。dodaではPM707万円に対し技術系（IT/通信）全体は469万円で、238万円の差があります。またPMは年代とともに年収が伸び続ける（40代855万円）数少ない職種で、マネジメント経験が年齢をプラスに変えます。エンジニアからのキャリアパスとしては、リーダー経験→小規模案件PM→大規模/複数案件PMが定番ルートです。",
  },
  {
    q: "フリーランスPMの年収はいくらですか？",
    a: "レバテックフリーランスの公表値では、PM案件351件の平均で960万円（月額単価×12・2022年5月〜2024年5月）、40代は1,027万円です。ただし単価×12の値には賞与・保険・稼働空白は含まれないため、会社員の年収と単純比較はできません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ProjectManagerSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/project-manager/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/project-manager/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "プロジェクトマネージャーの年収" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">プロジェクトマネージャーの年収はいくら？——「891.5万円」が9年前のデータである件</h1>

        {/* 直答 */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <p className="text-sm leading-7 text-slate-700 mb-2">
            <strong>【直答】現役PM層の最新の実像は707万円</strong>（doda平均年収ランキング2025・登録者約60万人）。<strong>40代は855万円</strong>で、技術系（IT/通信）の職種1位です。ネットに多い「891.5万円」は<strong>2016年度調査（9年前）の数値で、元ページは削除済み</strong>——本記事は原典（国会図書館アーカイブ）と最新統計の両方を確認した上で、PMの年収の実像を解説します。
          </p>
          <p className="text-xs text-slate-400">数値はすべて2026年7月7日に一次資料（doda公表・e-Stat・厚労省job tag・WARPアーカイブ原典PDF）で検証済み。</p>
        </div>

        <DataNote
          surveyedAt="2026年7月7日"
          sources={["doda平均年収ランキング2025（2025年12月発表）", "令和7年賃金構造基本統計調査（e-Stat）", "厚生労働省 job tag", "レバテックキャリア/フリーランス", "経産省2017年調査（国会図書館アーカイブ原典）"]}
        />

        {/* 統計比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要統計の比較——「PMの年収」6つの数字と、それぞれの正体</h2>
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

        {/* 4つの事実 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">検証でわかった4つの事実</h2>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.t}</h3>
                <p className="text-sm leading-7 text-slate-600">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年代別 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代別のPM年収（doda 2025年版・登録者申告ベース）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden max-w-md">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-4 py-2.5">年代</th>
                  <th className="px-4 py-2.5">平均年収</th>
                </tr>
              </thead>
              <tbody>
                {dodaAge.map((r, i) => (
                  <tr key={r.age} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-2.5 font-medium text-slate-700">{r.age}</td>
                    <td className="px-4 py-2.5 font-bold text-slate-900">{r.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: doda平均年収ランキング2025（2024年9月〜2025年8月登録の正社員約60万人・2025年12月1日発表）。2026年7月7日確認。</p>
          <p className="text-sm leading-7 text-slate-600 mt-4">
            30代→40代で<strong>+150万円</strong>と、多くのIT職種が頭打ちになる年代でも伸び続けるのがPMの特徴です。ITSSレベル別分布（厚労省jobtag掲載）でもレベル4で675万〜950万円・レベル5以上で700万〜1,100万円と、<strong>マネジメントの守備範囲が広がるほど上限が開く</strong>構造が確認できます。エンジニアからの現実的なルートは、リーダー経験→小規模PM→大規模・複数案件PMです（<Link href="/salary/age-salary/" className="text-petrol-deep underline">年代別年収・難易度</Link>・<Link href="/salary/infra-engineer/" className="text-petrol-deep underline">インフラエンジニアの年収</Link>）。
          </p>
        </section>

        <TechgoCta
          heading="PM経験は、ミドルの転職市場で最も高く売れるスキルです"
          note="テックゴーは年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）・年収交渉成功率100%（2025年9月時点・公式公表）のIT特化エージェント。マネジメント経験の市場価値を無料面談で確認できます。"
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
              { href: "/salary/infra-engineer/", label: "インフラエンジニアの年収（統計差の解明）" },
              { href: "/salary/job-type-salary/", label: "IT職種別 年収ランキング（公表値準拠）" },
              { href: "/salary/age-salary/", label: "年代別エンジニア年収・転職難易度 早見表" },
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
