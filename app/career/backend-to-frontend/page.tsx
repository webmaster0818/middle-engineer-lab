import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "バックエンドからフロントエンドへの転職｜移行ステップとスキルギャップ";
const DESC =
  "バックエンドエンジニアからフロントエンドエンジニアへ移行する進め方を、スキルギャップ比較表・在職中の学習ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実も正直に紹介します。";
const URL = "/career/backend-to-frontend/";

export const metadata: Metadata = { title: TITLE, description: DESC };

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
  { axis: "プログラミング基礎", back: "◎ 設計・テスト・レビューの習慣", front: "○ 言語が異なっても基礎は流用できる", gap: "活用" },
  { axis: "モダンフレームワーク（React等）", back: "△ 触れる機会が限定的", front: "◎ React/Next.js等のSPA開発が中核", gap: "大" },
  { axis: "UI/UX・ブラウザ理解", back: "△ サーバー側中心で経験が薄い", front: "◎ レンダリング・アクセシビリティ・レスポンシブ", gap: "大" },
  { axis: "状態管理・非同期UI", back: "○ 非同期処理自体には慣れている", front: "◎ クライアント状態管理とUI更新の設計", gap: "中" },
  { axis: "API連携設計", back: "◎ API提供側として設計してきた", front: "○ 利用側として最適なデータ取得設計", gap: "活用" },
  { axis: "パフォーマンス最適化", back: "○ クエリ・サーバー側の最適化経験", front: "◎ バンドルサイズ・描画・Core Web Vitals", gap: "中" },
];

const buildSteps = [
  { title: "React/Next.jsを実務レベルにする", desc: "現在のフロント求人の中心はReact系です。コンポーネント設計、フック、状態管理、ルーティングを学び、TypeScriptで型安全に書けるようにします。バックエンドで培った設計力はコンポーネント分割にそのまま活きます。" },
  { title: "UI/UXとブラウザの基礎を埋める", desc: "セマンティックHTML、CSS（Flexbox/Grid）、レスポンシブ、アクセシビリティ（WAI-ARIA）など、サーバー側では手薄になりがちな領域を補強します。『見た目だけでなく使いやすさ』を語れると差がつきます。" },
  { title: "SPA／SSRアプリを作り切る", desc: "API連携・認証・状態管理・デプロイを含むフロントアプリを一から構築します。バックエンド経験を活かしてAPI設計まで自分で行えば、フルスタック寄りの強みとして見せられます。" },
  { title: "フロントのパフォーマンス最適化を学ぶ", desc: "バンドルサイズ削減、画像最適化、Core Web Vitals（LCP/INP/CLS）改善など、フロント特有の性能観点を押さえます。サーバー側の最適化経験と組み合わせると説得力が出ます。" },
];

const migrationSteps = [
  { phase: "0〜1ヶ月", title: "現在地の棚卸しと方向性決め", desc: "バックエンドで培った設計・API・テストの習慣を棚卸しします。純粋なフロント専任を目指すのか、フルスタック寄りで入るのかを決め、学習計画を立てます。" },
  { phase: "1〜4ヶ月", title: "React＋UIの個人開発", desc: "React/Next.jsでSPAまたはSSRアプリを1〜2本作り、GitHubに公開します。アクセシビリティやレスポンシブにも配慮し、READMEに設計意図を書くと評価されます。" },
  { phase: "4〜5ヶ月", title: "職務経歴書をフロント文脈へ", desc: "『APIを作った』から『ユーザー体験をどう設計し、どんなUI課題を解いたか』へ表現を転換します（後述のBefore/After参照）。" },
  { phase: "5ヶ月〜", title: "応募とフルスタック起点の交渉", desc: "バックエンド経験を活かせるフルスタック求人やフロント寄りの開発から入る選択肢があります。在職中に進め、条件を固めてから動きます。" },
];

const agents = [
  { name: "レバテックキャリア", point: "IT/Web特化で技術理解のあるアドバイザーが在籍。バックエンド経験を活かしたフロント／フルスタック求人を相談しやすい。", href: "/review/levtech/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。フロント求人のスカウトを通じて、自分の技術スタックの市場評価を客観的に把握できます。", href: "/review/bizreach-it/" },
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。Web系の求人が豊富で、職種転換を含む転職でも選択肢を確保しやすい。", href: "/review/recruit-it/" },
];

const faqs = [
  { q: "バックエンドからフロントエンドへの転職は難しい？", a: "同じ開発職内の移行なので、未経験職種への転換に比べれば難度は高くありません。プログラミング基礎と設計力が流用できるため、React等のモダンフレームワークとUI/UXの理解を埋めれば現実的に移行できます。" },
  { q: "なぜバックエンドからフロントに移るの？", a: "ユーザーに近い領域で成果を体感したい、プロダクトのUXに踏み込みたい、需要の高いReact系スキルを身につけたいといった動機があります。フルスタック志向で対応範囲を広げる目的の人も多いです。" },
  { q: "CSSやデザインのセンスは必須？", a: "フロントエンドエンジニアはデザイナーとは別職種で、デザインを一から作る必要はありません。ただしレイアウト・レスポンシブ・アクセシビリティの実装力は必要なので、CSS（Flexbox/Grid）の基礎は押さえます。" },
  { q: "バックエンド経験はフロントで評価される？", a: "評価されます。API設計を理解しているためデータ取得の設計が的確で、テスト・型・パフォーマンスの観点も持ち込めます。フルスタック寄りのチームでは特に重宝されます。" },
  { q: "年収は下がる？", a: "断定はできません。同じ開発職内の移行のため大きく下がるケースは少ないですが、フロント専任のジュニア相当で入ると一時的に下がる可能性もあります。フルスタック起点なら維持しやすく、提示額は書面で確認しましょう。" },
  { q: "30代・40代でも移行できる？", a: "可能です。バックエンドの実務経験という土台があるため未経験参入より有利です。ただし学習時間が限られやすいので、在職中にReact＋UIの成果物を1つ作っておくことが重要です。" },
  { q: "在職中と退職後、どちらで活動すべき？", a: "在職中を推奨します。学習を伴うため期間が長くなりやすく、収入を確保しながらフロントの成果物を作る方が、精神的にも条件交渉でも有利です。" },
];

const related = [
  { name: "フロントエンド→バックエンド転職", href: "/career/frontend-to-backend/" },
  { name: "バックエンド→フルスタック転職", href: "/career/backend-to-fullstack/" },
  { name: "Reactのスキルと転職ガイド", href: "/skill/react/" },
  { name: "フロントエンドのスキルと転職ガイド", href: "/skill/frontend/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
];

export default function BackendToFrontendPage() {
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
          { name: "バックエンド→フロントエンド転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          バックエンドからフロントエンドへの転職｜移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 設計力を活かしてユーザーに近い領域へ広げる
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「ユーザーに近い領域で成果を出したい」「需要の高いReact系スキルを身につけたい」という動機で、バックエンドからフロントエンドへ移る開発者がいます。同じ開発職内の移行のため、設計力やプログラミング基礎を流用しやすいのが特徴です。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を解説します。
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：設計力は流用できる。鍵はReactとUI/UX</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・プログラミング基礎と設計の習慣は流用できる。未経験職種への転換より難度は低い。</li>
              <li>・ギャップが大きいのは「モダンフレームワーク（React）」と「UI/UX・ブラウザ理解」。</li>
              <li>・職務経歴書は『APIを作った』から『ユーザー体験をどう設計したか』へ書き換える。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（バックエンド vs フロントエンド）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">バックエンド（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フロントエンド（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.back}</td>
                    <td className="px-4 py-3 text-slate-600">{row.front}</td>
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
            バックエンドの職務経歴書は「API・処理・DB」が中心になりがちですが、フロント選考では「ユーザー体験をどう設計し、どんなUI課題を解いたか」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（サーバー処理の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                業務システムのバックエンド開発を担当。REST APIの実装、DB設計、バッチ処理の作成を行った。パフォーマンス改善のためクエリの最適化を実施した。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（ユーザー体験と実装を主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                個人開発でReact/Next.jsを用いたSPAを構築し、API設計の知見を活かして無駄のないデータ取得とローディングUIを設計。アクセシビリティ（WAI-ARIA）とレスポンシブに配慮し、画像最適化とコード分割でLCPを改善。バックエンド経験を活かしBFF層も自作した。GitHubでコードを公開。
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
            同じ開発職内の移行のため、年収が大きく下がるケースは少ないものの、フロント専任のジュニア相当で入ると一時的に下がる可能性もあります。転職者全体では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）でIT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移し、約6割が年収アップを実現しています。提示額は採用ポジション・等級で決まるため、必ず書面で確認しましょう。
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
            30代・40代でフロントへ移る場合、バックエンドの実務経験という土台があるぶん、未経験からの参入より有利です。フルスタック志向のチームでは、API設計を理解したうえでUIを実装できる人材が重宝されるため、「対応範囲を広げる」方向で攻めると年齢のハンデを補えます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方で、若手より学習に充てられる時間が限られやすいのが現実です。React＋UIの成果物を在職中に1つ作り、職務経歴書で見せられるようにしておきましょう。年収の見通しは<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">フロントエンド転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">バックエンド経験を活かせるフロント／フルスタック求人をプロが提案します。</p>
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
