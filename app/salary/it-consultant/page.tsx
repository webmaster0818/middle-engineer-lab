import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ITコンサルタントの年収はいくら？【2026年】上場6社の有報実額と公的統計を突き合わせて解説";
const PAGE_DESC =
  "ITコンサルタントの年収を、上場コンサル6社の有価証券報告書の実額（ベイカレント1,331万円・NRI1,332万円・電通総研1,125万円ほか）と、令和7年賃金構造基本統計の889万円で突き合わせて解説。転職サイトの600万円台がなぜ低く出るのか、母集団の違いまで一次データで整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/it-consultant/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 上場ITコンサル各社の有報平均年間給与（提出会社=単体ベース・2026-07-07検証）
const companyRows = [
  { name: "野村総合研究所（NRI）", code: "4307", term: "2026年3月期", salary: "約1,332万円", age: "39.7歳", emp: "7,982名", note: "単体7,982名と母集団が大きく、コンサル＋SIの総合。数値の代表性が高い" },
  { name: "ベイカレント", code: "6532", term: "2026年2月期", salary: "約1,331万円", age: "31.3歳", emp: "866名", note: "平均31.3歳でこの水準。ただし持株会社化で単体母集団が縮小（要注記）" },
  { name: "電通総研", code: "4812", term: "2025年12月期", salary: "約1,125万円", age: "39.9歳", emp: "2,492名", note: "旧・電通国際情報サービス。コンサル＋システム開発" },
  { name: "シンプレクスHD", code: "4373", term: "2026年3月期", salary: "約938万円", age: "33.6歳", emp: "146名", note: "金融領域に強い。持株会社単体146名の値" },
  { name: "フューチャー", code: "4722", term: "2025年12月期", salary: "約794万円", age: "36.5歳", emp: "377名", note: "ITコンサル＋SI。単体377名。公的統計並みの水準" },
  { name: "SHIFT", code: "3697", term: "2025年8月期", salary: "約684万円", age: "約38歳", emp: "6,201名", note: "ソフトウェアテスト起点。母集団が大きく公的統計並み〜やや下" },
];

const statRows = [
  { src: "賃金構造基本統計調査（令和7年）", seg: "システムコンサルタント・設計者", val: "約889万円", def: "在職者の実支給（月給×12＋賞与）・平均38.3歳", note: "厚労省job tag「ITコンサルタント」889万円もこの区分の値" },
  { src: "doda 職種図鑑2025", seg: "ITコンサルタント（アプリ）", val: "約612.5万円", def: "転職サイト登録者の申告年収（約60万件）", note: "転職市場に出る層の現年収。低めに出る" },
  { src: "レバテックキャリア", seg: "ITコンサルタント", val: "約532万円", def: "掲載求人票ベースの可能性（集計定義非公開）", note: "採用側の提示額。中堅向け中心" },
  { src: "レバテックフリーランス", seg: "ITコンサルタント（案件）", val: "約1,000万円", def: "フリーランス案件単価×12（稼働5日/月想定）", note: "会社員年収とは性質が全く異なる" },
];

const ageRows = [
  { age: "30〜34歳", val: "約866万円" },
  { age: "35〜39歳", val: "約968万円" },
  { age: "40〜44歳", val: "約1,189万円" },
];

const reasons = [
  {
    t: "事実①: 上場コンサル大手の有報実額は1,100万〜1,330万円台",
    d: "各社の有価証券報告書（提出会社＝単体）の平均年間給与では、野村総研約1,332万円・ベイカレント約1,331万円・電通総研約1,125万円と、公的統計（889万円）を大きく上回ります。ベイカレントは平均31.3歳でこの水準に達している点が特筆されます。",
  },
  {
    t: "事実②: ただし『単体母集団』の値であることに注意",
    d: "ベイカレント・シンプレクス・フューチャーは持株会社化しており、有報の平均年間給与は連結全体ではなく単体（本体）の母集団の値です。ベイカレントは2024年に単体4,321名→593名へ社員を移管しており、単体の平均は少数精鋭の水準を映しています。連結全体の平均とは異なる点を理解しましょう。",
  },
  {
    t: "事実③: 公的統計の『ITコンサルタント』は889万円（令和7年）",
    d: "厚労省job tag「ITコンサルタント」889万円は、賃金構造基本統計の『システムコンサルタント・設計者』区分（平均38.3歳）の値です。ただし令和5年版685万円→令和7年版889万円と平均年齢−3.5歳・年収+約30%の急変があり、年版をまたいだ単純比較は避けるのが安全です（分類・母集団見直しの可能性）。",
  },
  {
    t: "事実④: 転職サイトの600万円台は『登録者の現年収』で低く出る",
    d: "doda約612.5万円・レバテックキャリア約532万円は、転職活動中の登録者や求人票がベースで、若手・これから採用する層に偏るため公的統計より低く出ます。一方レバテックフリーランスの約1,000万円は案件単価×12で、会社員年収とは性質が全く異なります。数値は必ず『何を測ったか』とセットで見る必要があります。",
  },
];

const faqs = [
  {
    q: "ITコンサルタントの平均年収は結局いくらですか？",
    a: "見る母集団で変わります。公的統計（令和7年賃金構造基本統計の『システムコンサルタント・設計者』＝厚労省job tagの『ITコンサルタント』）では約889万円（平均38.3歳）。上場コンサル大手の有報実額では野村総研約1,332万円・ベイカレント約1,331万円・電通総研約1,125万円と公的統計を上回ります。一方、転職サイトの登録者ベースはdoda約612.5万円と低めです（いずれも2026年7月7日に一次資料で検証）。",
  },
  {
    q: "ITコンサルで一番年収が高い会社はどこですか？",
    a: "当サイトが有価証券報告書で確認した上場6社では、野村総合研究所（約1,332万円・2026年3月期）とベイカレント（約1,331万円・2026年2月期）がほぼ並んでトップです。ただしこれは提出会社（単体）の平均で、持株会社化した企業は単体の母集団が小さい点に注意が必要です。SHIFT約684万円・フューチャー約794万円のように公的統計並みの企業もあり、社名だけで判断せず母集団と決算期を確認しましょう。",
  },
  {
    q: "未経験からITコンサルに転職すると年収は上がりますか？",
    a: "転職市場に出る層の現年収（doda約612.5万円）と、大手コンサルの在籍者平均（1,100万円超）には差があります。これは入社時点の提示額と、昇進・評価を経た在籍者平均の違いです。ITコンサルは成果・等級によって年収レンジが広く、上位等級・マネージャー級に上がるほど公的統計や有報平均に近づきます。まず自分の想定提示レンジをエージェントで把握するのが現実的です。",
  },
  {
    q: "アビームコンサルティングの年収は有報で分かりますか？",
    a: "アビームコンサルティングは非上場（NEC子会社）で単独の有価証券報告書がないため、正式な平均年間給与は確認できません。ネット上の『約750〜757万円』は口コミ・転職サイトの推計値であり、有報の公表値ではない点に注意してください。本記事は有報が公表されている上場6社のみを実額として扱っています。",
  },
  {
    q: "40代のITコンサルの年収はいくらですか？",
    a: "令和7年賃金構造基本統計（システムコンサルタント・設計者）では40〜44歳で約1,189万円です。上場コンサル大手の在籍者平均（1,100万円超）ともおおむね整合します。ITコンサルは年齢よりも等級・案件責任で年収が決まる職種のため、マネージャー級以上に上がれるかが1,000万円超の分かれ目になります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ItConsultantSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/it-consultant/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/it-consultant/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "ITコンサルタントの年収" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ITコンサルタントの年収はいくら？——上場6社の有報実額と公的統計の突き合わせ</h1>

        {/* 直答 */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <p className="text-sm leading-7 text-slate-700 mb-2">
            <strong>【直答】公的統計では約889万円</strong>（令和7年賃金構造基本統計・平均38.3歳）。一方、<strong>上場コンサル大手の有報実額は野村総研1,332万円・ベイカレント1,331万円・電通総研1,125万円</strong>と公的統計を上回ります。転職サイトの登録者ベース（doda約612.5万円）が低いのは、これから転職する若手が母集団だから。<strong>どの数字も測っている集団が違うだけ</strong>で、本記事で有報の実額と公的統計を突き合わせて整理します。
          </p>
          <p className="text-xs text-slate-400">数値はすべて2026年7月7日に一次資料（各社有価証券報告書・e-Stat・厚労省job tag・PR TIMES）で検証済み。</p>
        </div>

        <DataNote
          surveyedAt="2026年7月7日"
          sources={["上場ITコンサル各社の有価証券報告書", "令和7年賃金構造基本統計調査（e-Stat）", "厚生労働省 job tag", "doda職種図鑑2025", "レバテック"]}
        />

        {/* 有報実額(核) */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上場ITコンサル6社の有報実額（提出会社＝単体・決算期明記）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden min-w-[760px]">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-3 py-2.5">会社（証券コード）</th>
                  <th className="px-3 py-2.5">決算期</th>
                  <th className="px-3 py-2.5">平均年間給与</th>
                  <th className="px-3 py-2.5">平均年齢</th>
                  <th className="px-3 py-2.5">単体従業員</th>
                </tr>
              </thead>
              <tbody>
                {companyRows.map((r) => (
                  <tr key={r.code} className="border-t border-slate-100 align-top">
                    <td className="px-3 py-2.5 font-medium text-slate-700 whitespace-nowrap">{r.name}<span className="text-slate-400 text-xs ml-1">({r.code})</span></td>
                    <td className="px-3 py-2.5 whitespace-nowrap">{r.term}</td>
                    <td className="px-3 py-2.5 font-bold text-slate-900">{r.salary}</td>
                    <td className="px-3 py-2.5">{r.age}</td>
                    <td className="px-3 py-2.5">{r.emp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 各社の有価証券報告書「従業員の状況」記載の平均年間給与（提出会社＝単体）。2026年7月7日確認。持株会社化した企業（ベイカレント・シンプレクス・フューチャー）は単体の母集団が小さい点に留意。アビームコンサルティングは非上場（NEC子会社）で単独有報がなく年収は確認不可のため本表から除外。</p>
        </section>

        {/* 各社の特徴 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の読み解き（社名だけで判断しないために）</h2>
          <div className="space-y-3">
            {companyRows.map((r) => (
              <div key={r.code} className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="font-bold text-slate-800 text-sm mb-1">{r.name} <span className="text-petrol-deep">{r.salary}</span><span className="text-xs text-slate-400 ml-1">（{r.term}）</span></p>
                <p className="text-sm text-slate-600 leading-7">{r.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 公的統計・転職サイトとの対比 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公的統計・転職サイトとの対比（数字が違う理由）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden min-w-[720px]">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-3 py-2.5">出典</th>
                  <th className="px-3 py-2.5">対象</th>
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
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.t}</h3>
                <p className="text-sm leading-7 text-slate-600">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年齢別 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢階級別（令和7年賃金構造基本統計・年収換算）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden max-w-md">
              <thead>
                <tr className="bg-slate-800 text-white text-left">
                  <th className="px-4 py-2.5">年齢</th>
                  <th className="px-4 py-2.5">年収（システムコンサルタント・設計者）</th>
                </tr>
              </thead>
              <tbody>
                {ageRows.map((r, i) => (
                  <tr key={r.age} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-4 py-2.5 font-medium text-slate-700">{r.age}</td>
                    <td className="px-4 py-2.5 font-bold text-slate-900">{r.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: 令和7年賃金構造基本統計調査 職種別第5表（男女計・企業規模計・一般労働者）。2026年7月7日にe-Stat原本から算出。※令和5年版685万円からの急変があり年版をまたぐ比較は不可。</p>
          <p className="text-sm leading-7 text-slate-600 mt-4">
            ITコンサルは年齢よりも<strong>等級・案件責任で年収が決まる</strong>職種です。40代前半で約1,189万円（公的統計）・在籍者平均1,100万円超（有報大手）に届くのは、マネージャー級以上に上がった層。エンジニアからのルートは、業務理解×提案力を武器に上流（要件定義・PMO）へ移ることです（<Link href="/salary/project-manager/" className="text-petrol-deep underline">PMの年収</Link>・<Link href="/salary/infra-engineer/" className="text-petrol-deep underline">インフラの年収</Link>）。
          </p>
        </section>

        <TechgoCta
          heading="コンサルへの市場価値、いま何万円か確認しませんか"
          note="テックゴーは年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）・年収交渉成功率100%（2025年9月時点・公式公表）のIT特化エージェント。エンジニア→ITコンサルのキャリア相談も無料です。"
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
              { href: "/salary/infra-engineer/", label: "インフラエンジニアの年収（統計差の解明）" },
              { href: "/salary/job-type-salary/", label: "IT職種別 年収ランキング（公表値準拠）" },
              { href: "/salary/age-salary/", label: "年代別エンジニア年収・転職難易度 早見表" },
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
