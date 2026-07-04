import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "業界別 IT・テック企業の年収ランキング【2026年・有報準拠】半導体/電機/通信/ゲーム/Web系を比較";
const PAGE_DESC =
  "IT・テック企業43社の有価証券報告書の平均年収を、半導体・電子部品／総合電機・精密／通信／自動車／ゲーム・エンタメ／Web・ネット・SaaSの業界別に分類して比較。どの業界が稼げるか、業界ごとの代表企業と平均年収を出典付き（有報）で一覧化したエンジニア向けの年収データベースです。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

type Co = { name: string; slug: string; salary: number };
type Industry = { key: string; name: string; avg: number; note: string; companies: Co[] };

// 有報の平均年間給与（全従業員平均）を業界で分類。各社の数値・決算期は企業別ランキング参照。
const industries: Industry[] = [
  {
    key: "semicon", name: "半導体・電子部品・計測機器", avg: 1086,
    note: "FA・センサー・半導体製造装置・電子部品など。利益率が高く平均年齢も高めで、有報平均は全業界トップ水準。",
    companies: [
      { name: "キーエンス", slug: "keyence", salary: 2039 },
      { name: "東京エレクトロン", slug: "tokyo-electron", salary: 1354 },
      { name: "オムロン", slug: "omron", salary: 820 },
      { name: "ルネサスエレクトロニクス", slug: "renesas", salary: 809 },
      { name: "村田製作所", slug: "murata", salary: 803 },
      { name: "京セラ", slug: "kyocera", salary: 693 },
    ],
  },
  {
    key: "electronics", name: "総合電機・精密メーカー", avg: 997,
    note: "ソニー・日立など総合電機/精密。組込み・制御・研究開発の比重が大きく、安定して高水準。",
    companies: [
      { name: "富士フイルム", slug: "fujifilm", salary: 1124 },
      { name: "ソニーグループ", slug: "sony", salary: 1118 },
      { name: "NEC", slug: "nec", salary: 963 },
      { name: "日立製作所", slug: "hitachi", salary: 961 },
      { name: "パナソニック", slug: "panasonic", salary: 956 },
      { name: "リコー", slug: "ricoh", salary: 860 },
    ],
  },
  {
    key: "telecom", name: "通信キャリア", avg: 979,
    note: "NTT・KDDI・ソフトバンク。インフラ・大規模システムの安定基盤で高水準。",
    companies: [
      { name: "NTT（日本電信電話）", slug: "ntt", salary: 1069 },
      { name: "KDDI", slug: "kddi", salary: 1018 },
      { name: "ソフトバンク", slug: "softbank", salary: 849 },
    ],
  },
  {
    key: "auto", name: "自動車・車載", avg: 923,
    note: "車載ソフト・制御の需要が拡大。大手は平均年齢が高く有報平均も高め。",
    companies: [
      { name: "トヨタ自動車", slug: "toyota", salary: 983 },
      { name: "デンソー", slug: "denso", salary: 863 },
    ],
  },
  {
    key: "game", name: "ゲーム・エンタメ", avg: 884,
    note: "ゲーム・出版・エンタメ。ヒット次第で変動はあるが、大手は高水準を維持。",
    companies: [
      { name: "バンダイナムコ", slug: "bandai-namco", salary: 1216 },
      { name: "任天堂", slug: "nintendo", salary: 966 },
      { name: "カプコン", slug: "capcom", salary: 918 },
      { name: "KADOKAWA", slug: "kadokawa", salary: 885 },
      { name: "グリー（GREE）", slug: "gree", salary: 865 },
      { name: "MIXI（ミクシィ）", slug: "mixi", salary: 791 },
      { name: "ガンホー", slug: "gungho", salary: 750 },
      { name: "コロプラ", slug: "colopl", salary: 681 },
    ],
  },
  {
    key: "web", name: "Web・ネット・SaaS", avg: 796,
    note: "メガベンチャー〜SaaSスタートアップ。有報は全社平均かつ平均年齢が若いため数値は中位に出るが、エンジニアの提示レンジ上限は高い傾向。",
    companies: [
      { name: "メルカリ", slug: "mercari", salary: 1176 },
      { name: "リクルート", slug: "recruit", salary: 1145 },
      { name: "プレイド", slug: "plaid", salary: 939 },
      { name: "LINEヤフー", slug: "line-yahoo", salary: 884 },
      { name: "ビジョナル/ビズリーチ", slug: "visional", salary: 861 },
      { name: "楽天グループ", slug: "rakuten", salary: 820 },
      { name: "Sansan", slug: "sansan", salary: 780 },
      { name: "note（ノート）", slug: "note", salary: 763 },
      { name: "ラクスル（RAKSUL）", slug: "raksul", salary: 742 },
      { name: "マネーフォワード", slug: "moneyforward", salary: 723 },
      { name: "BASE", slug: "base", salary: 700 },
      { name: "GMOインターネットグループ", slug: "gmo-internet", salary: 693 },
      { name: "カオナビ", slug: "kaonavi", salary: 690 },
      { name: "freee", slug: "freee", salary: 688 },
      { name: "ウォンテッドリー（Wantedly）", slug: "wantedly-inc", salary: 681 },
      { name: "ZOZO", slug: "zozo", salary: 656 },
      { name: "タイミー（Timee）", slug: "timee", salary: 594 },
    ],
  },
];

const faqs = [
  {
    q: "IT・テックでどの業界が一番年収が高いですか？",
    a: "当サイト掲載企業の有価証券報告書（平均年間給与）を業界別に集計すると、半導体・電子部品・計測機器が約1,086万円で最も高く、次いで総合電機・精密（約997万円）、通信キャリア（約979万円）が続きます。利益率が高く平均年齢も高めの製造・インフラ系が、有報平均では上位に出る傾向です。",
  },
  {
    q: "Web・SaaS系は年収が低いのですか？",
    a: "有報の平均（約796万円）では中位に見えますが、これは全社平均かつ平均年齢が若いことが大きく影響しています。メルカリ1,176万円・リクルート1,145万円のように高水準の企業もあり、エンジニア職の提示年収レンジ上限はむしろ高い傾向です。平均額だけでなく、職種別・スキル別のレンジも併せて見るのが実務的です。",
  },
  {
    q: "この業界別年収はエンジニアの年収ですか？",
    a: "いいえ。各社の有価証券報告書に記載された『平均年間給与（全従業員平均）』を業界で分類したものです。管理部門・工場勤務者なども含むため、エンジニア職そのものの平均ではありません。エンジニアの提示レンジは各企業ガイドや職種別年収ページをご覧ください。",
  },
];

export default function IndustrySalaryPage() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/industry-salary/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2024/2025",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/industry-salary/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "業界別 年収ランキング" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">業界別 IT・テック企業の年収ランキング【2026年・有報準拠】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          「どの業界が稼げるのか」を、当サイト掲載のIT・テック企業43社の<strong>有価証券報告書（平均年間給与）を業界別に分類</strong>して比較しました。半導体・電機・通信・自動車・ゲーム・Web/SaaSの<strong>業界ごとの平均年収と代表企業</strong>を、出典が明確な有報の公表値だけで一覧化しています。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["各社 有価証券報告書（平均年間給与・全従業員平均）を業界別に集計"]} />
        <p className="text-xs text-slate-500 mb-8">※有報の平均年間給与は全従業員平均（管理部門・工場勤務者等を含む）であり、エンジニア職単体の平均ではありません。業界平均は当サイト掲載企業の単純平均で、業界全体の平均ではない点にご注意ください。</p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">業界別 平均年収ランキング（有報・掲載企業平均）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">順位</th>
                  <th className="p-2 border-b-2 border-slate-300">業界</th>
                  <th className="p-2 border-b-2 border-slate-300">平均年収（掲載企業）</th>
                  <th className="p-2 border-b-2 border-slate-300">社数</th>
                </tr>
              </thead>
              <tbody>
                {industries.map((ind, i) => (
                  <tr key={ind.key} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="p-2 font-bold text-slate-500">{i + 1}</td>
                    <td className="p-2 font-medium"><a href={`#${ind.key}`} className="text-petrol hover:underline">{ind.name}</a></td>
                    <td className="p-2 font-bold text-slate-900">約{ind.avg.toLocaleString()}万円</td>
                    <td className="p-2 text-slate-600">{ind.companies.length}社</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：各社有価証券報告書の平均年間給与（全従業員平均）。決算期は企業別ランキングに併記。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">業界別の内訳</h2>
          {industries.map((ind) => (
            <div key={ind.key} id={ind.key} className="mb-8 scroll-mt-20">
              <h3 className="text-lg font-bold text-slate-800 mb-1">{ind.name}（平均 約{ind.avg.toLocaleString()}万円）</h3>
              <p className="text-sm text-slate-600 mb-3">{ind.note}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {ind.companies.map((c) => (
                      <tr key={c.slug} className="border-b border-slate-100">
                        <td className="p-2">
                          <Link href={`/company/${c.slug}/`} className="text-petrol-deep hover:underline">{c.name}</Link>
                        </td>
                        <td className="p-2 text-right font-bold text-slate-900 whitespace-nowrap">{c.salary.toLocaleString()}万円</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">業界選びの読み方（3つのポイント）</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>有報平均は「製造・インフラ系」が上位に出やすい</strong>：利益率と平均年齢の高さが効くため、半導体・電機・通信が上位。安定して高年収を狙うならこの領域。</li>
            <li><strong>Web・SaaSは平均より「レンジ上限」で見る</strong>：平均年齢が若く有報平均は中位だが、エンジニアの提示レンジ上限は高い。スキル次第で大きく伸ばせる。</li>
            <li><strong>同じ業界でも企業差が大きい</strong>：例えば半導体ではキーエンス2,039万と他社で開きが大きい。業界の傾向＋個社の数値の両方を見るのが実務的です。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連データ・ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業別 年収ランキング43社</Link>
            <Link href="/salary/job-type-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">職種別 年収ランキング</Link>
            <Link href="/salary/tech-stack-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">技術スタック×企業年収</Link>
            <Link href="/salary/age-salary/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">年代別 年収・転職難易度</Link>
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
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">狙う業界の想定年収を確認しよう</h2>
          <p className="text-blue-100 text-sm mb-4">業界・企業・職種でレンジは大きく変わります。IT特化エージェントに相談して、自分のスキルで狙える業界と年収を把握しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
        {/* 一次データ相互リンク（2026-07-04 リンク完全性の是正） */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">当サイトの一次データ集（あわせて読む）</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5">
            <li><Link href="/salary/tech-stack-salary/" className="text-petrol-deep hover:underline">技術スタック×企業年収の相関データ【有報43社】</Link></li>
            <li><Link href="/cert/compare/" className="text-petrol-deep hover:underline">IT資格の受験料・合格率 比較一覧【32資格】</Link></li>
            <li><Link href="/salary/age-salary/" className="text-petrol-deep hover:underline">年代別エンジニア年収・転職難易度 早見表</Link></li>
            <li><Link href="/salary/job-type-salary/" className="text-petrol-deep hover:underline">職種別エンジニア年収ランキング</Link></li>
            <li><Link href="/cert/salary/" className="text-petrol-deep hover:underline">資格別の想定年収・資格手当データ</Link></li>
            <li><Link href="/knowledge/retirement-allowance/" className="text-petrol-deep hover:underline">転職すると退職金はどうなる？（手続き解説）</Link></li>
          </ul>
        </section>

      </article>
    </>
  );
}
