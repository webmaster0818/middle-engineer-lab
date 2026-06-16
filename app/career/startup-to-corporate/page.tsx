import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "スタートアップから大企業への転職｜進め方とスキルギャップ",
  description:
    "スタートアップエンジニアから大企業への転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。短期在籍の説明や30代40代の進め方も紹介します。",
};

const TITLE = "スタートアップから大企業への転職｜進め方とスキルギャップ";
const DESC =
  "スタートアップエンジニアから大企業への転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。短期在籍の説明や30代40代の進め方も紹介します。";
const URL = "/career/startup-to-corporate/";

const toc = [
  { id: "conclusion", label: "結論：現実性と進め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "大企業選考に向けた準備" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    axis: "選考プロセス",
    startup: "カジュアル面談中心・短期で完結",
    corp: "複数回面接・コーディングテスト・適性検査",
    gap: "大",
  },
  {
    axis: "評価される軸",
    startup: "スピード・当事者性・幅広さ",
    corp: "再現性・大規模での品質・協調性",
    gap: "中",
  },
  {
    axis: "ドキュメント文化",
    startup: "最小限・口頭中心",
    corp: "設計書・規程・レビュー文化が前提",
    gap: "中",
  },
  {
    axis: "意思決定",
    startup: "現場裁量が大きい",
    corp: "承認プロセスがあり合議的",
    gap: "大",
  },
  {
    axis: "そのまま活きる力",
    startup: "0→1構築・自走力・横断的な技術経験",
    corp: "DX推進・新規事業部門で重宝される",
    gap: "活用",
  },
  {
    axis: "埋めるべき力",
    startup: "属人的な進め方",
    corp: "規程・大規模運用に沿う再現性ある設計",
    gap: "中",
  },
];

const buildSteps = [
  {
    title: "成果を定量的に整理する",
    desc: "大企業の面接官はデータに基づく評価を好みます。『ユーザー数』『改善率』『コスト削減』など、自分の貢献を数字で語れるよう棚卸しします。属人的な達成も、再現可能な手順として説明できると評価が高まります。",
  },
  {
    title: "大企業型の選考に慣れる",
    desc: "コーディングテスト・システムデザイン面接・行動面接（STAR法）への対策をします。スタートアップのカジュアルな選考と作法が異なるため、STAR（状況・課題・行動・結果）の型で経験を整理しておきます。",
  },
  {
    title: "短期在籍・複数社経験を前向きに整理する",
    desc: "在籍が短い場合は『密度の濃い経験を積んだ』ことを成果とともに語れるよう準備します。転職理由は事業都合や挑戦の文脈で一貫性を持たせ、ネガティブに映らない説明を用意します。",
  },
  {
    title: "再現性のある設計・運用を言語化する",
    desc: "大企業は規程や大規模運用に沿った再現性を重視します。スタートアップで属人的に進めた部分を、ドキュメントや標準化の観点でどう整えられるかを語れると、適応力をアピールできます。",
  },
];

const migrationSteps = [
  {
    phase: "0〜1ヶ月",
    title: "狙う部門と役割を決める",
    desc: "DX推進室・新規事業部・社内のプロダクト部門など、スタートアップのカルチャーに近い部門を狙うとギャップを抑えられます。テックリード/EM/シニアなど、経験に見合う役割を定めます。",
  },
  {
    phase: "1〜2ヶ月",
    title: "成果の棚卸しとSTAR整理",
    desc: "これまでの成果を定量化し、行動面接で語れるようSTAR法で整理します。短期在籍がある場合は、その期間に何を成し遂げたかを核に据えます。",
  },
  {
    phase: "2〜3ヶ月",
    title: "職務経歴書を再現性・規模文脈へ書き換え",
    desc: "『何でもやった』ではなく『どんな課題を、再現可能な形でどう解決したか』へ表現を整えます（後述のBefore/After参照）。エージェントに添削を依頼します。",
  },
  {
    phase: "3ヶ月〜",
    title: "テスト対策と並行して応募",
    desc: "大企業の非公開求人はエージェント経由が多いため、複数社に登録して選択肢を広げます。コーディングテストやシステムデザイン面接の対策を進めつつ、在職中に活動します。",
  },
];

const agents = [
  {
    name: "リクルートエージェント（IT）",
    point:
      "国内最大級の求人数。大手企業のDX推進・新規事業部門の非公開求人が豊富で、大企業転職の主力にしやすい（IT公開求人110,840件／非公開101,680件・2026年5月22日時点・二次集計）。",
    href: "/review/recruit-it/",
  },
  {
    name: "ビズリーチ",
    point:
      "ハイクラス・スカウト型。年収750万円以上の大企業ポジションのスカウトが届きやすく、市場価値の把握にも使えます（二次情報）。",
    href: "/review/bizreach-it/",
  },
  {
    name: "レバテックキャリア",
    point:
      "IT/Web特化。技術力を評価する求人に強く、大手Web企業のテックリード求人なども扱います。書類添削や面接対策が丁寧との声がQiitaJobChange等で見られます。",
    href: "/review/levtech/",
  },
];

const faqs = [
  {
    q: "スタートアップから大企業への転職は不利？",
    a: "不利とは限りません。0→1構築や自走力、横断的な技術経験は大企業のDX推進・新規事業部門で歓迎されます。鍵は、属人的な成果を再現性のある形で語れるかどうかです。",
  },
  {
    q: "年収は上がる？",
    a: "個社の提示次第で断定はできません。給与テーブルが明確な大企業では基本給が上がるケースもありますが、スタートアップでSOを持っていた場合は長期リターンとの比較が必要です。提示は書面で確認しましょう。",
  },
  {
    q: "大企業のスピード感に耐えられる？",
    a: "意思決定の遅さや承認プロセスの多さに戸惑う声が多いのは事実です。DX推進室・新規事業部など、比較的スピードを保てる部門を選ぶとギャップを軽減できます。",
  },
  {
    q: "短期在籍をどう説明すればいい？",
    a: "『短期間でも密度の濃い経験を積めた』ことを、具体的な成果とともに前向きに伝えます。転職理由に一貫性を持たせ、挑戦や事業都合の文脈で語ると説得力が増します。",
  },
  {
    q: "どの部門がスタートアップ出身者に向いている？",
    a: "DX推進室・新規事業部・社内プロダクト部門などが、カルチャーが近く経験を活かしやすい傾向があります。既存事業の保守運用中心の部門はギャップが大きくなりがちです。",
  },
  {
    q: "コーディングテストや適性検査が不安。",
    a: "大企業では選考にコーディングテストや適性検査が入ることが多いです。基本的なアルゴリズムと、行動面接のSTAR法整理を事前に対策しておけば落ち着いて臨めます。",
  },
  {
    q: "在職中と退職後、どちらで活動すべき？",
    a: "在職中の活動を推奨します。大企業の選考は回数が多く期間が長くなりやすいため、収入を確保しながら複数社を比較する方が条件面でも有利です。",
  },
  {
    q: "合わなかった場合、またスタートアップに戻れる？",
    a: "戻る選択肢はあります。大企業で得た大規模運用・品質管理の知見は、成長フェーズのスタートアップで重宝されます。詳しくは関連記事の大企業→スタートアップ転職を参照してください。",
  },
];

const related = [
  { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
  { name: "スタートアップと大企業どちらを選ぶ", href: "/knowledge/startup-vs-enterprise/" },
  { name: "大企業のITポジションを目指す", href: "/purpose/daikigyo/" },
  { name: "行動面接（STAR法）対策", href: "/knowledge/behavioral/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
  { name: "年収アップを狙うエンジニアの戦略", href: "/purpose/salary-up/" },
];

export default function StartupToCorporatePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "スタートアップ→大企業転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スタートアップから大企業への転職｜活動の進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | スタートアップ経験を活かして大企業へ移る転職活動ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          安定した報酬体系や大規模プロジェクトへの参画を求めて、スタートアップから大企業へ転職するケースがあります。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の準備ステップ・職務経歴書の書き換え例を解説します。どちらを選ぶべきかの比較は<Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップと大企業どちらを選ぶ</Link>を参照してください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（システムエンジニア・受託開発）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
            "リクルートエージェント（二次集計）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              結論：0→1経験は武器。再現性とSTAR整理が選考突破の鍵
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・自走力・横断経験はDX推進や新規事業部門で歓迎される。カルチャーが近い部門を狙う。</li>
              <li>・ギャップは選考プロセスと意思決定スピード。STAR法整理とテスト対策で備える。</li>
              <li>・属人的な成果を『再現性のある形』に翻訳して職務経歴書・面接で語るのが突破口。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（スタートアップ vs 大企業）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動の出発点は、現職とのギャップの可視化です。「そのまま活きる力」と「埋めるべき力」を切り分けると、準備と職務経歴書の方向性が定まります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">スタートアップ（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">大企業（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.startup}</td>
                    <td className="px-4 py-3 text-slate-600">{row.corp}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大企業選考に向けた準備</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            大企業の選考は回数が多く期間が長くなりやすいため、在職中に進めるのが安全です。目安スケジュールを示します。
          </p>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-white bg-slate-700 rounded px-2 py-1">{s.phase}</span>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            スタートアップの職務経歴書は「何でもやった」という幅の広さが先に立ちがちです。大企業選考では「どんな課題を、再現可能な形でどう解決したか」を成果とともに語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（幅広さの羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                スタートアップにてフロントからインフラまで幅広く担当。少人数チームで開発・運用を兼任し、必要に応じてあらゆる業務に対応した。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（課題→打ち手→定量成果＋再現性）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                急成長に伴う負荷増大という課題に対し、ボトルネックを分析のうえキャッシュ戦略とインフラ構成を再設計し、レスポンスとコストを改善。0→1のサービス立ち上げを技術選定から主導した。属人化していた運用を手順化・ドキュメント化し、再現性のある形で他メンバーに展開した。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※数値・成果はご自身の実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>と<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）対策</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            大企業は給与テーブルが明確なため、提示額の見通しが立てやすいのが特徴です。基本給が上がるケースもありますが、スタートアップでストックオプションを保有していた場合は、長期的なリターンとの比較が必要です。相場の基準として、厚生労働省 job tag のシステムエンジニア（受託開発）の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            転職者全体の傾向では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）で転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）と推移しています。年収は採用ポジションと等級で決まるため、提示は必ず書面で確認し、福利厚生や昇給カーブも含めて総合判断しましょう。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動で使うエージェント</h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-petrol-deep hover:underline">{agent.name}</Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midage" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            30代・40代で大企業へ移る場合、スタートアップで培った0→1の構築力やマネジメント経験が、DX推進や新規事業部門で評価されます。少人数チームでのマネジメント（1on1・採用・メンタリング）も、規模は小さくても再現性のある形で語れれば大きな強みになります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の見通しとして、レバテックが公表する年代別平均年収（2025年）では正社員SEが30代約499万円・40代約618万円、年収1,000万円以上の割合が30代8.01%・40代12.67%（career.levtech.jp/freelance.levtech.jpガイド記事）です。大企業は等級で年収が決まるため、どの等級で迎えられるかを確認し、安定性と昇給の見通しを含めて判断しましょう。
          </p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">大企業への転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            スタートアップ経験を最大限に評価してくれる大企業ポジションをプロが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
