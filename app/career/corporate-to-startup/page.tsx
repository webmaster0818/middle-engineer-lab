import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/corporate-to-startup/" },
  title: "大企業からスタートアップへの転職｜進め方とスキルギャップ",
  description:
    "大企業エンジニアからスタートアップへの転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。SO確認の注意点や30代40代の進め方も紹介します。",
};

const TITLE = "大企業からスタートアップへの転職｜進め方とスキルギャップ";
const DESC =
  "大企業エンジニアからスタートアップへの転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。SO確認の注意点や30代40代の進め方も紹介します。";
const URL = "/career/corporate-to-startup/";

const toc = [
  { id: "conclusion", label: "結論：現実性と進め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "求められる動き方への適応" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収・報酬の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    axis: "役割の範囲",
    corp: "専門領域が明確に分業されている",
    startup: "領域横断で何でも担当（フルスタック傾向）",
    gap: "大",
  },
  {
    axis: "意思決定",
    corp: "承認プロセスが多く合議的",
    startup: "現場裁量が大きくスピード重視",
    gap: "大",
  },
  {
    axis: "ドキュメント文化",
    corp: "詳細な設計書・規程が整備",
    startup: "最小限。口頭・コードで進む場面が多い",
    gap: "中",
  },
  {
    axis: "技術スタック",
    corp: "既存資産・レガシー中心の場合も",
    startup: "モダン構成・内製・自由度が高い",
    gap: "中",
  },
  {
    axis: "そのまま活きる力",
    corp: "大規模設計・運用・セキュリティ・品質管理",
    startup: "成長フェーズで重宝される",
    gap: "活用",
  },
  {
    axis: "埋めるべき力",
    corp: "整った環境前提の進め方",
    startup: "自走力・不確実性への耐性が必須",
    gap: "大",
  },
];

const buildSteps = [
  {
    title: "『指示待ち』から『課題発見』へ動き方を変える",
    desc: "スタートアップでは仕様が固まっていない中で動く場面が多くなります。現職でも、明確な指示がないタスクを自分で定義して進める経験を意識的に積むと適応がスムーズです。",
  },
  {
    title: "担当領域を広げて『一人で回せる範囲』を増やす",
    desc: "フロント・バック・インフラ・CIなど、隣接領域に手を伸ばしておきます。少人数の現場では領域を跨いで動ける人材が重宝されるため、横断経験そのものが武器になります。",
  },
  {
    title: "モダンな技術スタックに触れておく",
    desc: "業務で使えない場合は個人開発でクラウド・コンテナ・モダンフレームワークに触れ、選定の理由を語れるようにします。レガシー前提の進め方しか知らない状態を避けます。",
  },
  {
    title: "事業視点で技術を語る練習をする",
    desc: "スタートアップの面接では『その技術が事業にどう効くか』が問われます。コスト・スピード・スケールの観点から技術選定を説明できると、カルチャーフィットの面でも評価されます。",
  },
];

const migrationSteps = [
  {
    phase: "0〜1ヶ月",
    title: "狙うフェーズと役割を決める",
    desc: "シード〜アーリーは裁量が大きい反面リスクも高く、シリーズB以降は事業の方向性が固まり相対的に安定します。自分のリスク許容度に合うフェーズと、テックリード/EM等の役割を定めます。",
  },
  {
    phase: "1〜2ヶ月",
    title: "カジュアル面談で現場を知る",
    desc: "本選考の前にカジュアル面談を活用し、開発プロセス・意思決定スピード・働き方を現場エンジニアに直接確認します。GreenやFindyなどダイレクト型は社風把握に向きます。",
  },
  {
    phase: "2〜3ヶ月",
    title: "職務経歴書を成果・自走文脈へ書き換え",
    desc: "大企業の役割記述を、成果と当事者性が伝わる表現に書き換えます（後述のBefore/After参照）。横断経験や改善の主導をアピールします。",
  },
  {
    phase: "3ヶ月〜",
    title: "オファー条件とSOを精査して決定",
    desc: "基本給だけでなくストックオプションの付与条件・行使価格・ベスティングを書面で確認します。大企業側の退職金・企業年金・持株会の精算条件も整理し、総合的に判断します。",
  },
];

const agents = [
  {
    name: "ビズリーチ",
    point:
      "ハイクラス・スカウト型。シリーズB以降のスタートアップやSO付きポジションのスカウトが届きやすく、市場価値の客観把握にも使えます（年収750万円以上をハイクラスと定義・二次情報）。",
    href: "/review/bizreach-it/",
  },
  {
    name: "Green",
    point:
      "成功報酬型の転職サイト（ダイレクトリクルーティング）。IT/Webベンチャー・スタートアップに強く、カジュアル面談で社風を把握しやすい一方、エージェント型の仲介サポートはありません。",
    href: "/review/green/",
  },
  {
    name: "paiza転職",
    point:
      "スキルチェックのランクで実力を評価し、スカウトにつなげるタイプ。学歴や経歴の壁が低く、実装力を示してスタートアップから声をかけてもらいたい場合に向きます。",
    href: "/review/paiza/",
  },
];

const faqs = [
  {
    q: "大企業からスタートアップへの転職は難しい？",
    a: "大規模設計・運用・セキュリティ・品質管理の経験は成長フェーズのスタートアップで重宝されます。難しさは技術力より、自走力やスピードへの適応にある場合が多いです。",
  },
  {
    q: "年収は下がる？",
    a: "個社の提示次第で断定はできません。基本給が下がる代わりにストックオプションが付くケースや、シリーズB以降で基本給も大企業並みのケースもあります。提示は内訳まで書面で確認しましょう。",
  },
  {
    q: "ストックオプションはどう確認すればいい？",
    a: "付与割合・行使価格・行使条件・ベスティングスケジュールを必ず書面で確認します。口頭の約束は当てになりません。価値は将来の企業価値次第である点も前提に判断します。",
  },
  {
    q: "どのフェーズのスタートアップがいい？",
    a: "リスク許容度によります。一般に、初めての場合は事業の方向性が固まりつつあるシリーズB前後が裁量と安定のバランスを取りやすいとされます。資金調達状況を面接で確認しましょう。",
  },
  {
    q: "カルチャーギャップに馴染むコツは？",
    a: "意思決定の速さ・ドキュメントより口頭・マルチタスクの多さに戸惑いやすいです。入社前のカジュアル面談で現場の進め方を具体的に確認し、ギャップを事前に把握しておくことが有効です。",
  },
  {
    q: "スタートアップに向かない人の特徴は？",
    a: "明確な指示がないと動きにくい人、専門領域以外に手を出したくない人、安定を最優先する人には負担が大きい傾向があります。自走力や不確実性への耐性が問われます。",
  },
  {
    q: "在職中と退職後、どちらで活動すべき？",
    a: "在職中の活動を推奨します。スタートアップ選考はスピードが速い一方、条件交渉やSOの精査に時間をかけたいため、収入を確保しながら冷静に判断できる状態が望ましいです。",
  },
  {
    q: "合わなかった場合、大企業に戻れる？",
    a: "戻る選択肢はあります。スタートアップで得た自走力や横断経験は、大企業のDX推進・新規事業部門で評価されます。詳しくは関連記事のスタートアップ→大企業転職を参照してください。",
  },
];

const related = [
  { name: "スタートアップ→大企業転職", href: "/career/startup-to-corporate/" },
  { name: "スタートアップと大企業どちらを選ぶ", href: "/knowledge/startup-vs-enterprise/" },
  { name: "PM→CTO/VPoEキャリアパス", href: "/career/pm-to-cto/" },
  { name: "テックリードを目指すキャリアガイド", href: "/career/tech-lead/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
  { name: "年収アップを狙うエンジニアの戦略", href: "/purpose/salary-up/" },
];

export default function CorporateToStartupPage() {
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
          { name: "大企業→スタートアップ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          大企業からスタートアップへの転職｜活動の進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 大手の経験を活かしてスタートアップへ移る転職活動ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          大企業からスタートアップへの転職は、裁量の大きさや技術的な挑戦を求めるミドル層にとって有力な選択肢です。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の準備ステップ・職務経歴書の書き換え例を解説します。どちらを選ぶべきかの比較は<Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップと大企業どちらを選ぶ</Link>を参照してください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
            "ビズリーチ会社概要（二次情報含む）",
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
              結論：大規模経験は武器。問われるのは自走力とスピードへの適応
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・設計・運用・セキュリティ・品質管理の経験は成長フェーズのスタートアップで重宝される。</li>
              <li>・ギャップが大きいのは「役割の範囲」と「意思決定スピード」。横断的に自走できる動き方への転換が鍵。</li>
              <li>・年収は基本給とSOの内訳で総合判断。SO条件は必ず書面で確認する。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（大企業 vs スタートアップ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動の出発点は、現職とのギャップの可視化です。「そのまま活きる力」と「埋めるべき力」を切り分けると、準備と職務経歴書の方向性が定まります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">大企業（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">スタートアップ（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.corp}</td>
                    <td className="px-4 py-3 text-slate-600">{row.startup}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる動き方への適応</h2>
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
            スタートアップ選考はスピードが速い反面、SOや条件の精査に時間をかけたいため、在職中に情報収集を進めるのが安全です。目安スケジュールを示します。
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
            大企業の職務経歴書は、組織の一員としての役割記述になりがちです。スタートアップ選考では「当事者として何を主導し、どんな成果を出したか」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（組織内の役割記述）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                大手SIerにて基幹システムの開発に従事。チームの一員として設計・実装・テスト工程を担当。品質管理プロセスに沿って開発を進めた。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（主導した課題・横断的な動き・成果）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                基幹システムの障害多発という課題に対し、原因分析から再発防止策の設計までを主導。インフラ・アプリ両面に踏み込み、監視とデプロイ手順を整備して運用負荷を低減。大規模環境での品質・セキュリティ設計の知見を、少人数チームでも一人で回せる形に再構成できる点を強みとする。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※数値・成果はご自身の実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・報酬の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            スタートアップの報酬は「基本給＋ストックオプション（SO）」で構成されることが多く、額面の比較だけでは判断できません。基本給が下がる代わりにSOが付くケースもあれば、シリーズB以降で基本給も大企業並みのケースもあります。SOは将来の企業価値次第で価値が変動するため、行使条件まで含めて冷静に評価しましょう。
          </p>
          <p className="text-slate-600 leading-relaxed">
            市場全体の追い風として、経済産業省「IT人材需給に関する調査」（2019年公表）では2030年に最大約79万人のIT人材不足が試算されており、エンジニア需要は構造的に高い状態が続いています。転職者全体の傾向では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）で転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）と推移しています。
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
            30代・40代でスタートアップへ移る場合、若手にはない「大規模環境での設計・運用・品質管理」をそのまま強みにできます。成長フェーズのスタートアップは、組織や仕組みを整える経験を持つミドル層を求めることが多く、即戦力として迎えられやすい一方、整った環境前提の進め方からは脱却が必要です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の見通しとして、レバテックが公表する年代別平均年収（2025年）では正社員SEが30代約499万円・40代約618万円、年収1,000万円以上の割合が30代8.01%・40代12.67%（career.levtech.jp/freelance.levtech.jpガイド記事）です。スタートアップではこのレンジから外れる提示も多いため、基本給・SO・将来性を総合し、生活設計と照らして判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">スタートアップ転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            大企業経験を最大限に活かせるスタートアップをプロが提案します。
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
