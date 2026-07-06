import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "年代別エンジニア年収・転職難易度 早見表【30代・40代・50代】2026年";
const PAGE_DESC =
  "ITエンジニアの年代別の平均年収（公表値）と、転職難易度・狙える年収レンジ・年代ごとの戦い方を1つの早見表で比較。30代・40代・50代のミドルエンジニアが、自分の年齢で何を武器に転職すべきかがわかります。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/age-salary/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 平均年収はレバテック公表の年代別平均（参考値）。転職難易度・レンジは公的統計と市場傾向にもとづく当サイトの整理。
type Row = { age: string; avg: string; difficulty: string; range: string; point: string; link?: string };
const rows: Row[] = [
  { age: "全年代（IT/Web）", avg: "約578.5万円", difficulty: "—", range: "—", point: "市場全体の基準値。これより上を狙えるかは経験・スキル次第。", link: undefined },
  { age: "30代", avg: "約499万円〜", difficulty: "易〜中（最も転職しやすい）", range: "500〜800万円", point: "即戦力＋伸びしろの両方を評価される最も動きやすい年代。マネジメント or 専門性の方向性を固めるとレンジ上限を狙える。", link: "/age/30s/" },
  { age: "40代", avg: "約618万円〜", difficulty: "中〜難（即戦力・実績必須）", range: "600〜1,000万円", point: "ポテンシャル採用は減り、実績・マネジメント・専門性が問われる。現スキルが活きる企業を選ぶと年齢のハードルが下がる。", link: "/age/40s/" },
  { age: "50代", avg: "約711万円（50代以上平均）", difficulty: "難（高度専門・管理職に限定）", range: "700〜1,200万円＋", point: "求人は絞られるが、高度専門・CTO/EM・特定ドメインの実績があれば高年収。人脈・リファラルの比重が上がる。", link: "/age/50s/" },
];

const points = [
  { t: "30代は「最も転職しやすい年代」", d: "即戦力と将来性の両方を評価されるため求人の選択肢が最多。年収アップ転職もしやすい時期です。マネジメントに進むか専門性を深めるかの方向性をこの時期に固めると、40代以降のレンジが変わります。" },
  { t: "40代は「現スキルが活きる企業」を選ぶ", d: "ポテンシャル採用が減るぶん、使用技術・ドメイン経験が現職と近い企業ほど即戦力評価され、年齢のハードルが下がります。技術スタックから転職先を逆引きするのが効率的です。" },
  { t: "50代は専門性・マネジメント・人脈", d: "求人数は絞られますが、高度専門職やEM/CTO級、特定業界の深い実績があれば高年収が狙えます。リファラル（紹介）経由の比重が上がる年代です。" },
  { t: "年収の絶対額より「自分の市場価値」を測る", d: "上の平均はあくまで年代の中央的な参考値です。同年代でも企業・職種・スキルでレンジは大きく変わります。まずエージェントで自分の想定年収レンジを把握するのが近道です。" },
];

const faqs = [
  { q: "エンジニアの年代別の平均年収はいくらですか？", a: "レバテック公表の年代別平均では、30代が約499万円〜、40代が約618万円〜、50代以上が約711万円が参考値です（IT/Web全年代は約578.5万円）。ただし企業・職種・スキルでレンジは大きく変わり、同年代でも1,000万円超の層もいます。" },
  { q: "40代エンジニアの転職は難しいですか？", a: "30代に比べるとポテンシャル採用が減るため難易度は上がりますが、現在の技術スタック・ドメイン経験・マネジメント実績が活きる企業を選べば即戦力として評価され、年齢のハードルは下がります。求人数の多い大手エージェントと、専門性を活かせる特化型の併用が有効です。" },
  { q: "何歳まで転職できますか？", a: "年齢上限の明確な線はありません。30代が最も動きやすく、40代・50代は「実績・専門性・マネジメント」で評価される度合いが上がります。50代でも高度専門職やEM/CTO級、特定ドメインの実績があれば高年収の転職は十分可能です。" },
];

export default function AgeSalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/age-salary/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2026",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/age-salary/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "年代別年収・難易度" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">年代別 エンジニア年収・転職難易度 早見表【30代・40代・50代】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          ITエンジニアの<strong>年代別の平均年収（公表値）</strong>と、<strong>転職難易度・狙える年収レンジ・年代ごとの戦い方</strong>を1つの早見表にまとめました。「自分の年齢で、何を武器にどのレンジを狙えるか」を、ミドル（30代・40代・50代）の視点で整理しています。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["レバテック公表 年代別平均年収", "厚生労働省 job tag", "doda 決定年収レポート"]} />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年7月｜平均年収は公表値の参考レンジです。同年代でも企業・職種・スキルでレンジは大きく変わります。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代別 年収・転職難易度 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">年代</th>
                  <th className="border border-slate-200 p-2 text-left">平均年収（参考）</th>
                  <th className="border border-slate-200 p-2 text-left">転職難易度</th>
                  <th className="border border-slate-200 p-2 text-left">狙える年収レンジ</th>
                  <th className="border border-slate-200 p-2 text-left">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.age}>
                    <td className="border border-slate-200 p-2 font-bold whitespace-nowrap">{r.link ? <Link href={r.link} className="text-petrol hover:underline">{r.age}</Link> : r.age}</td>
                    <td className="border border-slate-200 p-2 whitespace-nowrap">{r.avg}</td>
                    <td className="border border-slate-200 p-2 text-xs">{r.difficulty}</td>
                    <td className="border border-slate-200 p-2 whitespace-nowrap">{r.range}</td>
                    <td className="border border-slate-200 p-2 text-xs">{r.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：レバテック公表の年代別平均年収、厚労省 job tag、doda 決定年収レポート（2026年6月時点）。転職難易度・レンジは公的統計と市場傾向にもとづく当サイトの整理で、断定ではありません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢階級別の推定年収（厚労省・令和7年賃金構造基本統計調査）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公的統計で最も新しい年齢別データです（2026年3月公表・e-Statの原表から当サイトが集計）。<strong>推定年収＝きまって支給する現金給与額×12＋年間賞与</strong>（一般労働者・企業規模計・男女計）。残業代込みの平均値のため、中央値の体感より高めに出る点に注意してください。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">年齢階級</th>
                  <th className="border border-slate-200 p-2 text-left">ソフトウェア作成者<br /><span className="font-normal text-xs">（プログラマー・SE 81.8万人）</span></th>
                  <th className="border border-slate-200 p-2 text-left">システムコンサル・設計者<br /><span className="font-normal text-xs">（17.4万人）</span></th>
                  <th className="border border-slate-200 p-2 text-left">全産業平均</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20-24歳", "363.0万円", "476.6万円", "361.4万円"],
                  ["25-29歳", "484.7万円", "641.6万円", "448.2万円"],
                  ["30-34歳", "559.5万円", "866.1万円", "507.3万円"],
                  ["35-39歳", "636.0万円", "968.1万円", "556.7万円"],
                  ["40-44歳", "686.3万円", "1,189.0万円", "594.7万円"],
                  ["45-49歳", "729.2万円", "1,226.3万円", "613.6万円"],
                  ["50-54歳", "722.4万円", "1,103.7万円", "633.9万円"],
                  ["55-59歳", "719.5万円", "1,163.8万円", "641.4万円"],
                  ["全年齢", "578.5万円", "889.0万円", "545.6万円"],
                ].map((row, i) => (
                  <tr key={i} className={i === 8 ? "bg-slate-50 font-bold" : ""}>
                    {row.map((cell, j) => (
                      <td key={j} className="border border-slate-200 p-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="text-xs text-slate-400 space-y-1 leading-relaxed mb-3">
            <li>・出典: 厚生労働省「令和7年賃金構造基本統計調査」職種別第5表（e-Stat・2026年3月24日公開）より当サイト推計。</li>
            <li>・エンジニア（ソフトウェア作成者）は全年齢で全産業平均を上回り、<strong className="text-slate-600">45-49歳では＋115.6万円</strong>と年齢が上がるほど差が拡大します。「35歳限界説」を公的データは支持していません。</li>
            <li>・上流（システムコンサルタント・設計者）へ職種転換すると40代で推定1,100万円超と、同年齢のソフトウェア作成者より約500万円高い水準です。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代別の戦い方（ミドルエンジニア視点）</h2>
          <div className="space-y-4">
            {points.map((p, i) => (
              <div key={p.t} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{i + 1}. {p.t}</h3>
                <p className="text-sm text-slate-600">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-lg p-4">
                <summary className="font-medium text-slate-800 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連データ・ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/age/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">年齢別 転職ガイド（33〜50代）</Link>
            <Link href="/salary/job-type-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">職種別 年収ランキング</Link>
            <Link href="/salary/tech-stack-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">技術スタック×企業年収</Link>
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業年収ランキング</Link>
            <Link href="/cert/compare/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">IT資格 比較一覧</Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">あなたの年代での想定年収を把握しよう</h2>
          <p className="text-blue-100 text-sm mb-4">同年代でも企業・スキルでレンジは大きく変わります。IT特化エージェントに無料相談して、自分の市場価値と狙える年収を把握しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
        {/* 一次データ相互リンク（2026-07-04 リンク完全性の是正） */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">当サイトの一次データ集（あわせて読む）</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5">
            <li><Link href="/salary/tech-stack-salary/" className="text-petrol-deep hover:underline">技術スタック×企業年収の相関データ【有報43社】</Link></li>
            <li><Link href="/cert/compare/" className="text-petrol-deep hover:underline">IT資格の受験料・合格率 比較一覧【32資格】</Link></li>
            <li><Link href="/salary/job-type-salary/" className="text-petrol-deep hover:underline">職種別エンジニア年収ランキング</Link></li>
            <li><Link href="/cert/salary/" className="text-petrol-deep hover:underline">資格別の想定年収・資格手当データ</Link></li>
            <li><Link href="/knowledge/retirement-allowance/" className="text-petrol-deep hover:underline">転職すると退職金はどうなる？（手続き解説）</Link></li>
            <li><Link href="/salary/industry-salary/" className="text-petrol-deep hover:underline">業界別エンジニア年収ランキング【有報】</Link></li>
          </ul>
        </section>

      </article>
    </>
  );
}
