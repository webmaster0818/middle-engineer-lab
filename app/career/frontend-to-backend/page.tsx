import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フロントエンドからバックエンドへの転職｜移行ステップとスキルギャップ";
const DESC =
  "フロントエンドエンジニアからバックエンドエンジニアへ移行する進め方を、スキルギャップ比較表・在職中の学習ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実も正直に紹介します。";
const URL = "/career/frontend-to-backend/";

export const metadata: Metadata = { alternates: { canonical: "/career/frontend-to-backend/" }, title: TITLE, description: DESC };

const toc = [
  { id: "conclusion", label: "結論：現実性と攻め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  { axis: "プログラミング基礎", front: "◎ JavaScript/TypeScriptで開発", back: "○ 言語は異なっても基礎は流用できる", gap: "活用" },
  { axis: "API設計・実装", front: "△ 利用側（fetch）が中心", back: "◎ REST/GraphQL APIを設計・実装する", gap: "大" },
  { axis: "データベース設計", front: "△ 触れる機会が限定的", back: "◎ スキーマ設計・正規化・SQL最適化が中核", gap: "大" },
  { axis: "サーバー・インフラ理解", front: "△ デプロイ先として利用する程度", back: "○ 実行環境・スケーリングの理解が必要", gap: "中" },
  { axis: "非同期・並行処理", front: "○ Promise/async は日常的に使用", back: "◎ 排他制御・トランザクション設計まで", gap: "中" },
  { axis: "セキュリティ", front: "○ XSS/CSRFなどフロント観点", back: "◎ 認証認可・SQLインジェクション対策まで", gap: "中" },
];

const buildSteps = [
  { title: "バックエンド言語を1つ実務レベルにする", desc: "Go・Python・Node.js（TypeScript）など需要の高い言語を1つ選びます。フロントでTypeScriptを使ってきたなら、Node.js/NestJSは学習コストを抑えやすく、既存資産を活かして移行できます。" },
  { title: "REST/GraphQL APIを設計して作り切る", desc: "認証・CRUD・バリデーション・エラーハンドリングを備えたAPIを一から実装します。フロントで『使う側』だったAPIを『作る側』として設計した経験が、移行の説得力になります。" },
  { title: "データベース設計とSQLを身につける", desc: "リレーショナルDBのスキーマ設計、正規化、インデックス、N+1問題の回避までを実務水準で学びます。バックエンド転職で最も問われやすい領域なので、ER図を引いて設計意図を語れるようにします。" },
  { title: "実行環境とデプロイを理解する", desc: "Docker、環境変数管理、ログ・監視、CI/CDなど、サーバーサイドの運用に必要な周辺知識を押さえます。アプリを公開し『動かし続ける』経験を持つと評価されます。" },
];

const migrationSteps = [
  { phase: "0〜1ヶ月", title: "現在地の棚卸しと言語選定", desc: "フロントで扱ってきた技術（TypeScript、API連携、状態管理）を棚卸しし、活かせる部分を確認します。学習コストを抑えるならNode.js系、市場の広さを取るならGo/Pythonと、方向性を決めます。" },
  { phase: "1〜4ヶ月", title: "API＋DBの個人開発", desc: "認証付きのAPIサーバーとDB設計を含むアプリを1〜2本作り、GitHubに公開します。READMEに設計意図（スキーマ・API仕様）を書くと、コードと考え方の両方を見てもらえます。" },
  { phase: "4〜5ヶ月", title: "職務経歴書をバックエンド文脈へ", desc: "『画面を作った』から『データとAPIをどう設計し、どんな非機能要件を満たしたか』へ表現を転換します（後述のBefore/After参照）。" },
  { phase: "5ヶ月〜", title: "応募とフルスタック起点の交渉", desc: "現職がフロント中心でも、フルスタック求人やバックエンド寄りの開発から入る選択肢があります。在職中に進め、ポジションと年収条件を固めてから動きます。" },
];

const agents = [
  { name: "レバテックキャリア", point: "IT/Web特化で技術理解のあるアドバイザーが在籍。フロント経験を活かしつつバックエンド／フルスタック寄りの求人を相談しやすい。", href: "/review/levtech/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。バックエンド求人のスカウトを通じて、自分の技術スタックの市場評価を客観的に把握できます。", href: "/review/bizreach-it/" },
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。Web系からSIerまで幅広く、職種転換を含む転職でも選択肢を確保しやすい。", href: "/review/recruit-it/" },
];

const faqs = [
  { q: "フロントエンドからバックエンドへの転職は難しい？", a: "同じ開発職内の移行なので、未経験職種への転換に比べれば難度は高くありません。プログラミング基礎が流用できるため、API設計・DB設計・サーバー理解という不足分を埋めれば現実的に移行できます。" },
  { q: "どのバックエンド言語を選ぶべき？", a: "フロントでTypeScriptを使ってきたならNode.js/NestJSが学習コストを抑えやすく、移行しやすい選択です。市場の広さや高年収を狙うならGoやPythonも有力です。1つを実務レベルまで深めるのが先決です。" },
  { q: "データベースの知識はどこまで必要？", a: "リレーショナルDBのスキーマ設計、正規化、SQL、インデックス、N+1問題の回避は最低限求められます。バックエンド選考で最も問われやすい領域なので、ER図を引いて設計意図を説明できる水準を目指します。" },
  { q: "フロント経験はバックエンドで評価される？", a: "評価されます。API設計時にフロントの使い勝手を想像できる点、型を意識した開発習慣、UI/UXとデータの橋渡しができる点は、フルスタック志向のチームで重宝されます。" },
  { q: "年収は上がる？", a: "断定はできません。同じ開発職内の移行のため大きく下がるケースは少なく、対応範囲が広がることで市場価値が上がる傾向はありますが、提示額は採用ポジション・等級で決まります。書面で確認しましょう。" },
  { q: "30代・40代でも移行できる？", a: "可能です。フロントの実務経験という土台があるため、未経験からの参入より有利です。ただし若手より学習に充てられる時間が限られやすいので、在職中にAPI＋DBの成果物を1つ作っておくことが重要です。" },
  { q: "在職中と退職後、どちらで活動すべき？", a: "在職中を推奨します。学習を伴うため期間が長くなりやすく、収入を確保しながらバックエンドの成果物を作る方が、精神的にも条件交渉でも有利です。" },
];

const related = [
  { name: "バックエンド→フロントエンド転職", href: "/career/backend-to-frontend/" },
  { name: "バックエンド→フルスタック転職", href: "/career/backend-to-fullstack/" },
  { name: "フロントエンドのスキルと転職ガイド", href: "/skill/frontend/" },
  { name: "SQLスキルと転職ガイド", href: "/skill/sql/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
];

export default function FrontendToBackendPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "フロントエンド→バックエンド転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フロントエンドからバックエンドへの転職｜移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | フロントの実務経験を活かしてサーバーサイドへ広げる
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「データやロジックの中身を扱いたい」「対応範囲を広げて市場価値を上げたい」という動機で、フロントエンドからバックエンドへ移る開発者がいます。同じ開発職内の移行のため、プログラミング基礎を流用しやすいのが特徴です。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（システムエンジニア・Webサイト開発）",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：同じ開発職内なので現実的。鍵はAPIとDB設計</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・プログラミング基礎は流用できる。未経験職種への転換より難度は低い。</li>
              <li>・ギャップが大きいのは「API設計」と「データベース設計」。ここを成果物で示すのが鍵。</li>
              <li>・職務経歴書は『画面を作った』から『データとAPIをどう設計したか』へ書き換える。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（フロントエンド vs バックエンド）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フロントエンド（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">バックエンド（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.front}</td>
                    <td className="px-4 py-3 text-slate-600">{row.back}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
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
            学習を伴うため期間が長くなりやすい転職です。在職中に少しずつ進める前提で、目安スケジュールを示します。
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
            フロントの職務経歴書は「画面・UI」が中心になりがちですが、バックエンド選考では「データとAPIをどう設計し、どんな非機能要件を満たしたか」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（画面実装の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                ECサイトのフロントエンド開発を担当。React/TypeScriptで商品一覧・カート画面を実装し、APIからデータを取得して表示。レスポンシブ対応とパフォーマンス改善を実施した。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（API・DB設計を主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                ECサイト開発で、個人開発として商品・在庫・注文のスキーマを設計し、Node.js/NestJSで認証付きのREST APIを実装・デプロイ。N+1問題をインデックスとクエリ最適化で解消し、フロント経験を活かしてAPIのレスポンス設計を利用側目線で最適化した。GitHubでコードを公開。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※技術・数値は実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>と<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            フロント／バックエンドを分けた公的な平均年収統計は確認できないため、ミドル層全体の客観データを基準に考えます。厚生労働省 job tag のシステムエンジニア（Webサイト開発）の平均年収は550.9万円・平均年齢38.4歳（令和7年賃金構造基本統計調査ベース）です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            同じ開発職内の移行のため、年収が大きく下がるケースは少なく、対応範囲が広がることで市場価値が上がる傾向があります。転職者全体では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）でIT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移し、約6割が年収アップを実現しています。提示額は採用ポジション・等級で決まるため、必ず書面で確認しましょう。
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
            30代・40代でバックエンドへ移る場合、フロントの実務経験という土台があるぶん、未経験からの参入より有利です。フルスタック志向のチームでは、UIとデータの両方を理解している人材が重宝されるため、「対応範囲を広げる」方向で攻めると年齢のハンデを補えます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方で、若手より学習に充てられる時間が限られやすいのが現実です。API＋DB設計の成果物を在職中に1つ作り、職務経歴書で見せられるようにしておきましょう。年収の見通しは<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">バックエンド転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">フロント経験を活かせるバックエンド／フルスタック求人をプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
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
