import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "バックエンド→フルスタックへの転身完全ガイド【2026年版】",
  description:
    "バックエンドエンジニアからフルスタックへ転身するための現実性、スキルギャップ比較、在職中の準備、職務経歴書のBefore/After例文を公表データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：バックエンド起点のフルスタック化は再現性が高い" },
  { id: "gap", label: "バックエンドとフルスタックのスキルギャップ比較表" },
  { id: "skills", label: "埋めるべきスキルの身につけ方" },
  { id: "steps", label: "在職中にできる移行ステップ" },
  { id: "resume", label: "職務経歴書の見せ方（Before/After例文）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代から見たフルスタック転身" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    area: "フロントエンド",
    back: "APIを返す側。画面実装はフロント担当に委譲",
    full: "React/Next.js等でUIを自分で実装できる",
    action: "TypeScript→Reactの順で個人開発で実装",
  },
  {
    area: "型・言語",
    back: "サーバーサイド言語（PHP/Java/Go等）に習熟",
    full: "TypeScriptでフロント・バックを横断",
    action: "TypeScriptを習得し型思考を画面側にも展開",
  },
  {
    area: "UI/UX設計",
    back: "画面仕様は受け取る側。デザインは範囲外",
    full: "レスポンシブ・状態管理・基本的なUX判断",
    action: "Tailwind CSSとコンポーネント設計を学ぶ",
  },
  {
    area: "インフラ/DevOps",
    back: "アプリ実装中心。基盤は別チームの現場も",
    full: "Docker・CI/CD・クラウドを自分で扱う",
    action: "自作アプリをCI/CDでデプロイする経験を作る",
  },
  {
    area: "全体設計",
    back: "サーバー側のドメイン設計に強い",
    full: "フロントからインフラまで一気通貫で設計",
    action: "個人開発でフロント〜インフラを横断構築",
  },
  {
    area: "強み（活かせる）",
    back: "API設計・DB設計・パフォーマンス・セキュリティ",
    full: "土台が堅いフルスタックは希少で高評価",
    action: "設計力を成果として職務経歴書に明記",
  },
];

const skillSteps = [
  {
    num: "1",
    title: "TypeScript（2〜4週間）",
    desc: "型安全なJavaScriptとして、フロント・バック双方で使えます。バックエンドの型思考を活かせるため、習得は比較的スムーズです。",
  },
  {
    num: "2",
    title: "React + Next.js（2〜3ヶ月）",
    desc: "コンポーネント設計、状態管理、レンダリング戦略（SSR/SSG/Server Components）を理解します。最新のApp Routerを前提に学びます。",
  },
  {
    num: "3",
    title: "CSS / Tailwind CSS（2〜4週間）",
    desc: "レスポンシブデザインとTailwind CSSの実践的な使い方を押さえます。デザインシステムやアクセシビリティの基礎も理解しておきます。",
  },
  {
    num: "4",
    title: "インフラ / DevOps（1〜2ヶ月）",
    desc: "Docker、CI/CD、クラウドの主要サービス、IaC（Terraform等）を学びます。バックエンド経験があるため習得しやすい領域です。",
  },
  {
    num: "5",
    title: "一気通貫の個人開発（1〜2ヶ月）",
    desc: "フロントからインフラまで一人で構築・デプロイするプロジェクトを完成させます。これがフルスタックとしての証明になります。",
  },
];

const moveSteps = [
  {
    phase: "1〜2ヶ月目",
    title: "フロント学習と現職での機会探し",
    desc: "TypeScript・Reactの学習を進めつつ、現職でフロント寄りのタスクに手を挙げます。実務でのフロント経験が最も強い実績になります。",
  },
  {
    phase: "2〜4ヶ月目",
    title: "フルスタック構成の個人開発",
    desc: "Next.js＋API＋DB＋デプロイまで一気通貫のアプリをGitHubで公開します。READMEに技術選定の理由を記載します。",
  },
  {
    phase: "4〜5ヶ月目",
    title: "職務経歴書をフルスタック向けに整理",
    desc: "バックエンドの設計実績を軸に、フロント・インフラの守備範囲を追記します（後述のBefore/After参照）。",
  },
  {
    phase: "5〜6ヶ月目",
    title: "スカウト・カジュアル面談で市場価値を確認",
    desc: "スカウト型サービスやカジュアル面談で、フルスタック人材としての評価を客観的に把握してから本選考に進みます。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。Web系・モダン技術の求人に強く、フルスタックを求める自社開発企業の案件も扱います。技術背景を理解したアドバイザーが在籍するとされます（出典：レバテック公式ガイド、転職メディア集計）。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    point:
      "ハイクラス・スカウト型。年収750万円以上をハイクラスと定義し、年収1,000万円以上求人が全体の約4割との二次情報もあります。フルスタックの市場価値を客観把握する用途に向きます。",
  },
  {
    name: "Green",
    href: "/review/green/",
    point:
      "成功報酬型の転職サイトで、IT/Webベンチャー・スタートアップに強み。技術選定から関わるフルスタック志向のポジションに出会いやすく、カジュアル面談で社風を確認できます。",
  },
];

const faqs = [
  {
    q: "フルスタックエンジニアに明確な定義はある？",
    a: "業界共通の厳密な定義はありませんが、一般にフロントエンド・バックエンド・インフラの3領域を実装できるエンジニアを指します。すべてを極める必要はなく、得意領域（この場合はバックエンド）を軸に、他領域も自走できる状態が現実的なゴールです。",
  },
  {
    q: "バックエンドからフルスタックになるのにどれくらいかかる？",
    a: "フロントエンドの基礎習得に数ヶ月、実務で使えるレベルに到達するにはさらに半年程度が一つの目安です。現職でフロント寄りの案件に積極的に関わることで、習得を大きく加速できます。期間は個人差が大きいため、目安として捉えてください。",
  },
  {
    q: "フルスタックの年収相場は？",
    a: "公表されたフルスタック専用の年収統計は限られます。参考として、厚生労働省 job tagのシステムエンジニア（受託開発）は平均年収578.5万円、レバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円・40代約618万円です。守備範囲の広さは年収交渉で有利に働きやすい要素です。",
  },
  {
    q: "フロントエンドの学習は何から始めるべき？",
    a: "まずTypeScriptを学び、次にReactの基礎、続いてNext.jsという順序が王道です。バックエンドの型思考が活きるため、型から入ると理解が早まります。CSSはTailwind CSSで実践的に身につけるのが効率的です。",
  },
  {
    q: "フルスタック人材の需要は今後も続く？",
    a: "スタートアップや中小・自社開発企業では、少人数で幅広く担えるフルスタックの需要が続く見通しです。大企業では専門特化が好まれる場面もありますが、技術選定やアーキテクチャ設計を担える人材は規模を問わず重宝されます。",
  },
  {
    q: "インフラ知識はどこまで必要？",
    a: "クラウドの主要サービス（コンピュート、ストレージ、DB、CDN）の理解と、Docker・CI/CDの構築経験があれば実務の入口としては十分です。IaC（Terraform等）まで扱えると、フルスタックとしての差別化につながります。",
  },
  {
    q: "在職中に進めるべき？退職してからの方がいい？",
    a: "在職中に進めることを推奨します。収入を確保したまま準備でき、年収交渉でも不利になりにくいためです。現職でフロント案件に関われるなら、それ自体が最良の実務経験になります。",
  },
];

export default function BackendToFullstackPage() {
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
      <ArticleJsonLd
        title="バックエンド→フルスタックへの転身完全ガイド【2026年版】"
        description="バックエンドエンジニアからフルスタックへ転身するための現実性、スキルギャップ比較、在職中の準備、職務経歴書のBefore/After例文を公表データに基づき解説します。"
        url="/career/backend-to-fullstack/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "バックエンド→フルスタック転身" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          バックエンド→フルスタックへの転身完全ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          バックエンドエンジニアがフルスタックへ転身すると、担えるポジションと年収交渉の幅が広がります。特にスタートアップや自社開発企業では、少人数でフロントからインフラまで担えるフルスタック人材の価値が高まっています。本記事では、この転身の現実性、スキルギャップ、在職中の準備、職務経歴書の書き方を、公表データに基づいて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "doda（パーソルキャリア）決定年収レポート2025年5月公表",
            "レバテック公表 年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            結論：バックエンド起点のフルスタック化は再現性が高い
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              バックエンドからのフルスタック転身は、再現性の高いキャリア戦略です。理由は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 既にAPI設計・DB設計・型思考の土台があり、TypeScript経由でフロントへ自然に展開できる。</li>
              <li>② インフラ/DevOpsはバックエンド経験者が習得しやすく、一気通貫の構築力に直結する。</li>
              <li>③ 守備範囲の広さは、特に少人数の自社開発・スタートアップで強く評価される。</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              鍵は「フロントを業務または個人開発で実際に実装した実績」を持つこと。学習しただけでなく、動くものを作った事実が評価を左右します。
            </p>
          </div>
        </section>

        {/* スキルギャップ比較表 */}
        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            バックエンドとフルスタックのスキルギャップ比較表
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職で持っている強みと、フルスタックで前提とされる範囲を並べると、伸ばすべき差分が明確になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">バックエンド（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フルスタック（求められる）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">埋め方</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.back}</td>
                    <td className="px-4 py-3 text-slate-600">{row.full}</td>
                    <td className="px-4 py-3 text-slate-600">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* スキルの身につけ方 */}
        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            埋めるべきスキルの身につけ方
          </h2>
          <div className="space-y-4">
            {skillSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            各技術の市場性は
            <Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScriptスキルガイド</Link>
            ・
            <Link href="/skill/react/" className="text-blue-600 hover:underline">Reactスキルガイド</Link>
            ・
            <Link href="/skill/aws/" className="text-blue-600 hover:underline">AWSスキルガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            在職中にできる移行ステップ
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職を活用しながら準備するのが最も効率的です。おおむね半年を想定したロードマップです。
          </p>
          <div className="space-y-4">
            {moveSteps.map((s, i) => (
              <div key={i} className="border-l-4 border-blue-500 bg-slate-50 rounded-r-lg p-5">
                <p className="text-xs font-bold text-blue-600 mb-1">{s.phase}</p>
                <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            ポートフォリオの作り込み方は
            <Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>
            を合わせて確認してください。
          </p>
        </section>

        {/* 職務経歴書 Before/After */}
        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            職務経歴書の見せ方（Before/After例文）
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            バックエンドの職務経歴書は「サーバー側だけの人」に見えがちです。フロント・インフラの守備範囲を加え、「一気通貫で作れる」ことを伝えます。以下は一般的な書き換えパターンです。
          </p>

          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-5 py-2 text-sm font-bold text-red-700">Before（バックエンド限定の書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「ECサイトのバックエンド開発を担当。PHPでAPIを実装し、MySQLのテーブル設計とクエリ改善を行った。」
              </div>
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">After（フルスタックで評価される書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「ECサイトのバックエンド設計・実装を主導。N+1クエリを解消し一覧APIの応答時間を◯%短縮。加えて管理画面の改修ではNext.js＋TypeScriptでフロントも担当し、Docker＋CI/CDでデプロイ自動化を整備。個人開発ではフロントからインフラまで一人で構築したSaaSをGitHubで公開。」
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="font-bold text-slate-700 text-sm mb-2">翻訳のポイント</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・バックエンドの設計・改善実績を「数値成果」とセットで核に据える（数値は実績の範囲で）</li>
              <li>・フロント・インフラの関与を1行ずつでも明記し、守備範囲の広さを示す</li>
              <li>・「一気通貫で構築した個人開発」を入れると、フルスタックの説得力が増す</li>
              <li>・誇張せず、検証可能な事実ベースで書く</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            詳しい書き方は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            フルスタック単独の公表統計は限られるため、公的・公表データを起点に幅で考えます。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li>
              ・厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収<strong>578.5万円</strong>・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。
            </li>
            <li>
              ・dodaの2024年度決定年収レポート（2025年5月公表）では、転職者の約6割が年収アップ。IT・通信の平均決定年収は2024年度<strong>486万円</strong>。
            </li>
            <li>
              ・レバテック公表の年代別平均年収（2025年）では、正社員SEで30代約<strong>499万円</strong>、40代約<strong>618万円</strong>。年収1,000万円以上の割合は30代8.01%・40代12.67%。
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            守備範囲の広さは交渉材料になりますが、結果は企業の評価基準次第です。複数社で市場価値を確認するのが安全です。
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
            も参考になります。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            おすすめの転職エージェント
          </h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-blue-700 hover:underline">
                    {agent.name}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代から見たフルスタック転身
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              ミドル層がフルスタックを目指す価値は、「広く浅く」ではなく「堅いバックエンドの土台＋全体を見渡せる視野」にあります。30代・40代の市場では、若手にはない設計判断やアーキテクチャの妥当性評価ができる人材が求められます。バックエンドの深さを保ったまま守備範囲を広げることが、年代に合った差別化です。
            </p>
            <p>
              注意したいのは、フロントを「触ったことがある」程度に留めないことです。年代が上がるほど、実際に動くものを作り切った経験が信頼につながります。40代では、フルスタックの実装力に加え、技術選定をリードしたり若手をレビューしたりする立ち回りまで示せると、ポジションの選択肢が一段広がります。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職事情</Link>
              ・
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">フルスタック転職を無料で相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントが、バックエンドの強みを活かせるフルスタックポジションを提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SIer SE→Web系開発者転職", href: "/career/se-to-web/" },
              { name: "TypeScriptスキルガイド", href: "/skill/typescript/" },
              { name: "Reactスキルガイド", href: "/skill/react/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ビズリーチの評判", href: "/review/bizreach-it/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
