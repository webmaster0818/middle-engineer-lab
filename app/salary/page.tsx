import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニアが年収を上げる転職｜ITSSレベル×年収の地図と到達ロードマップ";
const DESCRIPTION =
  "ITエンジニアが年収を上げるための「金額→必要スキルレベル・役職・職種」の対応地図を、経産省ITSSレベル別平均年収やdoda発表値など出典付きで整理。経験年数別ロードマップと600万・800万・1000万への到達条件を解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/salary/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収は「金額→スキルレベル・役職」の地図で見る" },
  { id: "itss-map", label: "ITSSレベル×年収の地図（経産省データ）" },
  { id: "roadmap", label: "経験年数別 年収ロードマップ" },
  { id: "methods", label: "年収を上げる4つの手段と上げ幅" },
  { id: "summary", label: "年収帯到達条件サマリ（600万・800万・1000万）" },
  { id: "midlife", label: "30〜40代ミドルが年収地図を使うときの視点" },
  { id: "faq", label: "よくある質問" },
];

const itssData = [
  { level: "L1", salary: "437.8万円", role: "新人・エントリー。指示のもとタスクを遂行" },
  { level: "L2", salary: "499.2万円", role: "一定領域を独力で完遂。担当工程を任される" },
  { level: "L3", salary: "576.0万円", role: "応用・改善ができる。小規模リーダー" },
  { level: "L4", salary: "726.1万円", role: "高度専門・プロのレベル。設計や指導を主導" },
  { level: "L5", salary: "937.8万円", role: "社内をリードするハイレベル専門家・管理者" },
  { level: "L6・7", salary: "1,129.9万円", role: "国内で著名・世界で通用するトップ層" },
];

const roadmap = [
  {
    span: "1年目",
    band: "350〜450万円前後",
    itss: "L1（437.8万円が目安）",
    focus:
      "実装・運用の基礎を固める時期。年収より「任される範囲」を広げることが将来の伸びを決めます。",
  },
  {
    span: "2〜4年目",
    band: "450〜550万円前後",
    itss: "L2〜L3（499.2万〜576.0万円）",
    focus:
      "担当工程を独力で完遂できる段階。設計・レビュー・後輩フォローの経験が、次の年収帯への材料になります。",
  },
  {
    span: "5〜7年目",
    band: "550〜750万円前後",
    itss: "L3後半〜L4（576.0万〜726.1万円）",
    focus:
      "DB・API・アーキ設計やリーダー経験が評価され始める層。600万円・場合により800万円が射程に入ります。",
  },
  {
    span: "8年目以上",
    band: "700万円〜（上限は職種・商流で分散）",
    itss: "L4〜L6（726.1万〜1,129.9万円）",
    focus:
      "マネジメントかスペシャリストの軸が報酬を決める層。800万〜1000万円帯は職種と企業の給与テーブルの選択が鍵になります。",
  },
];

const methods = [
  {
    title: "社内昇給・昇格",
    range: "目安：年数万〜数十万円／回",
    desc: "リスクは低い一方、企業の給与テーブルが上限を決めるため伸びは緩やかになりがちです。等級制度の上限を確認しておくと、頭打ちの時期を見極められます。",
  },
  {
    title: "転職",
    range: "目安：数十万〜100万円超のジャンプも",
    desc: "現職の給与テーブルをリセットできるのが最大の利点。ただし一気に大幅増を狙うと選考で警戒されやすく、段階的なアップが現実的です。横並び比較は別記事に整理しています。",
  },
  {
    title: "フリーランス・業務委託",
    range: "目安：単価ベースで額面は上がりやすい",
    desc: "額面は上がりやすい一方、社会保険・税の自己負担で手取りは目減りします。損得は働き方比較の記事で構造的に解説しています。",
  },
  {
    title: "副業・技術顧問",
    range: "目安：スポットで月数万〜",
    desc: "本業の年収に上限を感じる場合の分散策。30〜40代の実務経験はアドバイザリーと相性が良い場合があります。",
  },
];

const bandSummary = [
  {
    band: "500万円",
    href: "/salary/500man/",
    itss: "ITSS L3前半（576.0万円のやや下）",
    condition: "2〜3年の実務で開発工程を一通り独力で回せる",
    jobs: "Web系開発・社内SE・SESからの脱出層",
  },
  {
    band: "600万円",
    href: "/salary/600man/",
    itss: "ITSS L3後半〜L4手前（576.0万円のやや上）",
    condition: "3年以上の実務＋DB/API/アーキ設計と小規模リーダー経験",
    jobs: "プリセールス・PM・ITコンサルの入口層",
  },
  {
    band: "700万円",
    href: "/salary/700man/",
    itss: "ITSS L4前後（726.1万円付近）",
    condition: "設計〜リーダー経験と特定領域の専門性",
    jobs: "リードエンジニア・PM入口・クラウド/インフラ",
  },
  {
    band: "800万円",
    href: "/salary/800man/",
    itss: "ITSS L4〜L5の間（726.1万〜937.8万円）",
    condition: "高度専門または指導者層。技術＋マネジメント＋提案力",
    jobs: "PM・ITコンサル・クラウド・セキュリティ・プリセールス",
  },
  {
    band: "900万円",
    href: "/salary/900man/",
    itss: "ITSS L5相当（937.8万円付近）",
    condition: "高度専門＋マネジメント、または希少スキル",
    jobs: "EM・テックリード・スペシャリスト・ITコンサル",
  },
  {
    band: "1000万円",
    href: "/salary/1000man/",
    itss: "ITSS L6相当（1,129.9万円）",
    condition: "ハイクラス転職／EM・PM／希少スペシャリストの3ルート",
    jobs: "外資IT・自社プロダクト・プライムSIerのEM/PM・SaaS/ML/アーキ",
  },
  {
    band: "1200万円",
    href: "/salary/1200man/",
    itss: "ITSS L6超（1,129.9万円を上回る層）",
    condition: "外資・上場メガベンチャー・管理職・トップスペシャリスト",
    jobs: "外資IT・自社プロダクトのEM/Staff・高単価PM",
  },
  {
    band: "1500万円",
    href: "/salary/1500man/",
    itss: "国内平均を大きく超える限られた層",
    condition: "外資の上位等級・VP/部長クラス・希少専門（株式報酬含む）",
    jobs: "外資IT上位・CTO候補・トップスペシャリスト",
  },
  {
    band: "2000万円",
    href: "/salary/2000man/",
    itss: "例外的水準（総報酬・株式報酬込みが前提）",
    condition: "外資トップ等級・経営層・著名スペシャリスト",
    jobs: "外資IT最上位・CTO/VPoE・著名スペシャリスト",
  },
];

const faqs = [
  {
    q: "年収を上げるなら転職と社内昇進、どちらが効果的ですか？",
    a: "短期的なジャンプ幅では転職が有利な場合が多いです。社内昇給は企業の給与テーブルが上限を決めるため伸びが緩やかになりがちで、転職はその給与テーブル自体をリセットできるからです。ただし一気に大幅増を狙うと選考で警戒されやすく、段階的なアップが現実的です。リスクの低さでは社内昇進が勝るため、現職の等級上限を確認したうえで判断するのがおすすめです。横並びの比較は年収UPランキングの記事に整理しています。",
  },
  {
    q: "年収を上げる転職は何年目が最適ですか？",
    a: "目安としては、担当工程を独力で完遂できるようになる2〜4年目以降、設計やリーダー経験が付き始める5〜7年目が動きやすい時期です。ITSSレベルで言えばL2〜L3に達し、年収帯を一段引き上げる材料が揃うためです。ただし年齢ではなく「任せられる範囲」が評価軸なので、経験の棚卸しができていれば30代・40代でも十分に狙えます。",
  },
  {
    q: "エンジニアの年収はいくらまで上がりますか？",
    a: "経済産業省のITSSスキル標準レベル別の平均年収では、最上位のレベル6・7で1,129.9万円が示されています（経産省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。実際の上限は技術力だけでなく、職種・役職、そして商流（下請け階層）や企業の給与テーブルにも左右されます。1000万円帯の構造は専用ページで詳しく解説しています。",
  },
  {
    q: "ITSSレベルとは何ですか？",
    a: "ITSS（ITスキル標準）は、IT関連の職種ごとにスキルを7段階のレベルで定義した、経済産業省・IPAが整備した指標です。L1がエントリー、L4が高度専門（プロ）、L6・7が国内外で著名なトップ層にあたります。本記事ではこのレベル別の平均年収を「金額→必要スキルレベル」の地図として使っています。",
  },
  {
    q: "年収帯ごとの必要スキルや職種を知りたいです。",
    a: "本記事末尾の到達条件サマリから、600万円・800万円・1000万円それぞれの専用ページに進めます。各ページで「その金額に必要なITSSレベル・役職・職種・求人傾向」を出典付きで整理しています。年代別の相場や汎用的な年収UP戦略は、30代・40代の年収記事や年収UPの目的別ガイドにまとめています。",
  },
];

export default function SalaryTopPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/salary/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年収帯別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアが年収を上げる転職｜ITSSレベル×年収の地図と到達ロードマップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 公的データでみる「金額→必要スキル・役職・職種」の対応地図
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「エンジニアとして年収を上げたい」と考えたとき、最初に必要なのは精神論ではなく<strong>地図</strong>です。目標の金額に対して、どのスキルレベル・役職・職種が必要なのか。本記事では、経済産業省のITSSスキル標準レベル別平均年収を出発点に、経験年数別の年収ロードマップと、600万円・800万円・1000万円という年収帯への到達条件を出典付きで整理します。具体的な必要スキル・求人傾向は各年収帯の専用ページへ案内します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省 IT関連産業の給与等に関する実態調査（IPA ITSSレベル準拠）",
            "doda 平均年収ランキング2025（パーソルキャリア 2025/12/1発表）",
            "厚生労働省 job tag",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収は「金額→スキルレベル・役職」の地図で見る</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              エンジニアの年収は、漠然と「頑張れば上がる」ものではなく、<strong>到達したい金額ごとに必要なスキルレベル・役職・職種がほぼ決まっています</strong>。経済産業省のITSSスキル標準レベル別平均年収では、L3で576.0万円、L4で726.1万円、L5で937.8万円、L6・7で1,129.9万円が示されています（経産省 IT関連産業の給与等に関する実態調査・IPA ITSSレベル準拠／原典の調査年版は要確認）。
            </p>
            <p className="text-slate-700 leading-relaxed">
              つまり「600万円が欲しい＝L3後半〜L4手前の力＋設計・リーダー経験」「800万円＝L4〜L5の高度専門／指導者層」「1000万円＝L6相当の希少ポジション」と読み替えられます。年収を上げる手段（社内昇給・転職・フリーランス・副業）はこの地図の上で選ぶと、自分に必要な打ち手が明確になります。
            </p>
          </div>
        </section>

        {/* ITSS地図 */}
        <section id="itss-map" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITSSレベル×年収の地図（経産省データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず、年収を考える土台となる「スキルレベルと年収の対応」を確認します。下表は経済産業省「IT関連産業の給与等に関する実態調査」のITSSスキル標準レベル別 平均年収です。金額は権威データ（公的調査）ですが、原典の調査年版は要確認のため、レベル間の相対関係を読む地図として活用してください。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベル</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">役割の目安</th>
                </tr>
              </thead>
              <tbody>
                {itssData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">{row.level}</td>
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典：経済産業省「IT関連産業の給与等に関する実態調査」ITSSスキル標準レベル別 平均年収（IPA ITSSレベル準拠）。原典の調査年版は要最終確認のため、絶対額より各レベル間の差を地図として参照してください。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">職種別の相場も併せて確認</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              職種視点では、doda平均年収ランキング2025（パーソルキャリア 2025/12/1発表・約60万人・2024年9月〜2025年8月）で、技術系（IT/通信）の平均は469万円、ITコンサルタント505万円、システムインテグレータ481万円などが公表されています。正社員全体の429万円より高く、IT職全体が相対的に高水準であることがわかります。レベルと職種、どちらの軸でも年収帯の意味が変わる点が重要です。
            </p>
          </div>
        </section>

        {/* ロードマップ */}
        <section id="roadmap" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験年数別 年収ロードマップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ITSSレベルは経験年数とゆるやかに対応します。下のロードマップは、ITSSレベル別平均年収を軸に「何年目で、どのレベルに達し、どの年収帯が射程に入るか」を整理したものです。年収レンジは目安であり、職種・企業・商流で大きく分散する点に注意してください。
          </p>
          <div className="space-y-4">
            {roadmap.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-petrol text-white font-bold text-sm">
                    {r.span}
                  </span>
                  <span className="font-bold text-slate-800">{r.band}</span>
                  <span className="text-xs text-slate-500">{r.itss}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{r.focus}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別のより詳しい相場は、
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収相場</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収相場</Link>
            をご覧ください。
          </p>
        </section>

        {/* 手段 */}
        <section id="methods" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収を上げる4つの手段と上げ幅</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収を上げる手段は大きく4つです。それぞれ上げ幅とリスクが異なるため、ITSSレベルの地図の上で「自分の現在地から、どの手段が効くか」を選びます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methods.map((m, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{m.title}</h3>
                <p className="text-xs text-petrol font-medium mb-2">{m.range}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            手段ごとの深掘りは、
            <Link href="/purpose/salary-up/" className="text-petrol hover:underline">年収アップを目指す転職ガイド</Link>
            、横並び比較は
            <Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収アップに強いエージェント比較</Link>
            、働き方の損得は
            <Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員</Link>
            に整理しています。
          </p>
        </section>

        {/* サマリ */}
        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収帯到達条件サマリ（600万・800万・1000万）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ここが本記事のハブです。代表的な3つの年収帯について「必要なITSSレベル・条件・狙える職種」をまとめました。各行から、その金額の必要スキルと求人傾向を出典付きで掘り下げた専用ページに進めます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">年収帯</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ITSSレベルの目安</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">主な到達条件</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">狙える職種</th>
                </tr>
              </thead>
              <tbody>
                {bandSummary.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">
                      <Link href={b.href} className="hover:underline">{b.band}</Link>
                    </td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{b.itss}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{b.condition}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{b.jobs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {bandSummary.map((b, i) => (
              <Link
                key={i}
                href={b.href}
                className="block border border-slate-200 rounded-lg px-4 py-4 text-center font-bold text-slate-700 hover:bg-petrol-soft hover:border-petrol transition-colors"
              >
                年収{b.band}の必要スキルを見る →
              </Link>
            ))}
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30〜40代ミドルが年収地図を使うときの視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年齢ではなく「ITSSレベル×軸」で交渉する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30〜40代の転職では、年齢そのものより「どのレベルの仕事を任せられるか」が評価されます。ITSSレベルの地図を使い、自分の到達レベルと希望年収帯を結びつけて語れると、希望と提示のズレを減らせます。年代別の現実は
                <Link href="/age/40s/" className="text-petrol-deep underline">40代エンジニア転職</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「一気に大幅増」より段階的アップ</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                ミドル層が現年収から一気に飛び抜けた金額を希望すると、選考で警戒されやすくなります。地図上で1段ずつ（例：L3→L4相当へ）上げる設計のほうが、800万・1000万帯への到達確率は高まります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">天井は技術力だけでは決まらない</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                同じスキルレベルでも、職種・役職、そして商流や企業の給与テーブルによって到達できる上限は変わります。特に高年収帯ほどこの構造の影響が大きく、1000万円帯の専用ページで詳しく解説しています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたの「年収地図の現在地」を無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化エージェントに登録して、いまのスキルでどの年収帯が射程かを客観的に確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
      <TechgoCta
        heading="年収データを見たら、次は自分の市場価値"
        note="テックゴーは年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）を公表するミドル向けIT特化エージェント。無料面談で相場観を確認できます。"
        buttonText="無料キャリア面談を予約する（公式）"
      />

          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "IT企業の平均年収ランキング57社【有報準拠】", href: "/salary/company-ranking/" },
              { name: "外資ITエンジニア年収ランキング【levels.fyi実測】", href: "/salary/gaishi-ranking/" },
              { name: "プログラミング言語別の平均年収ランキング【出典付き】", href: "/salary/skill-ranking/" },
              { name: "年収500万円エンジニアの必要スキル", href: "/salary/500man/" },
              { name: "年収600万円エンジニアの必要スキル", href: "/salary/600man/" },
              { name: "年収700万円エンジニアの必要スキル", href: "/salary/700man/" },
              { name: "年収800万円エンジニアの必要スキル", href: "/salary/800man/" },
              { name: "年収900万円エンジニアの必要スキル", href: "/salary/900man/" },
              { name: "年収1000万円エンジニアの必要スキル", href: "/salary/1000man/" },
              { name: "年収1200万円エンジニアの必要スキル", href: "/salary/1200man/" },
              { name: "年収1500万円エンジニアの必要スキル", href: "/salary/1500man/" },
              { name: "年収2000万円エンジニアの必要スキル", href: "/salary/2000man/" },
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "年収アップに強いエージェント比較", href: "/compare/salary-ranking/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
