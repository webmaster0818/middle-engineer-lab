import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/consultant-to-engineer/" },
  title: "ITコンサルからエンジニアへの転職｜進め方とスキルギャップ",
  description:
    "ITコンサルタントからエンジニアへの転職活動の進め方を、スキルギャップ比較表・学習ロードマップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実的なルートも紹介します。",
};

const TITLE = "ITコンサルからエンジニアへの転職｜進め方とスキルギャップ";
const DESC =
  "ITコンサルタントからエンジニアへの転職活動の進め方を、スキルギャップ比較表・学習ロードマップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実的なルートも紹介します。";
const URL = "/career/consultant-to-engineer/";

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
  {
    axis: "成果物",
    consultant: "提案資料・分析レポート・実行計画",
    engineer: "動くコード・設計・運用されるシステム",
    gap: "大",
  },
  {
    axis: "評価される軸",
    consultant: "課題定義・論点整理・合意形成",
    engineer: "実装品質・技術選定・コードレビュー",
    gap: "大",
  },
  {
    axis: "日常の作業",
    consultant: "ヒアリング・資料化・会議ファシリ",
    engineer: "コーディング・テスト・障害対応",
    gap: "大",
  },
  {
    axis: "ドキュメント",
    consultant: "ストーリー型スライド",
    engineer: "設計書・ADR・READMEとコード",
    gap: "中",
  },
  {
    axis: "そのまま活きる力",
    consultant: "要件定義・PM・折衝・論理的思考",
    engineer: "PdM・テックリード寄りで高評価",
    gap: "活用",
  },
  {
    axis: "埋めるべき力",
    consultant: "実装経験・技術的な引き出し",
    engineer: "最低限の自走できる開発スキルが必須",
    gap: "大",
  },
];

const buildSteps = [
  {
    title: "言語を1つ実務レベルまで習得する",
    desc: "TypeScriptやGoなど需要の高い言語を1つ選び、文法だけでなくテスト・エラーハンドリング・非同期処理まで扱えるようにします。コンサルで鍛えた論理的思考は学習効率に直結します。",
  },
  {
    title: "Webアプリを一から作り切る",
    desc: "認証・CRUD・DB連携・デプロイまでを含む小規模アプリを通しで構築します。『動くものを公開した』経験が、未経験職種への転職で最も説得力のある証拠になります。",
  },
  {
    title: "設計力をコードに落とす練習をする",
    desc: "コンサルで培った構造化・抽象化の力は、ドメイン駆動設計やレイヤー分割と相性が良いです。要件をモジュール境界に翻訳する練習で、設計面の強みを言語化できるようにします。",
  },
  {
    title: "チーム開発の文脈に慣れる",
    desc: "GitでのPRレビュー、Issue管理、CIなどチーム開発の作法をOSS貢献や個人プロジェクトで体験します。実装単独より『開発プロセスを回せる』点が現場で評価されます。",
  },
];

const migrationSteps = [
  {
    phase: "0〜1ヶ月",
    title: "ゴール設定と現在地の把握",
    desc: "純粋な開発者を目指すのか、PdM・テックリードなど上流寄りで入るのかを決めます。技術コンサル出身なら実装経験を棚卸し、戦略系出身なら学習期間を長めに見積もります。",
  },
  {
    phase: "1〜4ヶ月",
    title: "学習とポートフォリオ制作",
    desc: "言語習得と並行し、公開できるアプリを1〜2本作ります。GitHubに履歴を残し、READMEに設計意図を書くと、選考でコードと考え方の両方を見てもらえます。",
  },
  {
    phase: "4〜5ヶ月",
    title: "職務経歴書を開発文脈へ書き換え",
    desc: "『資料を作った』ではなく『システム要件をどう定義し、技術的にどう実現したか』へ表現を転換します（後述のBefore/After参照）。",
  },
  {
    phase: "5ヶ月〜",
    title: "コーディングテスト対策と応募",
    desc: "選考でコーディングテストやシステムデザイン面接が課されることが多いため対策します。在職中に進め、ポジションと年収条件が固まってから退職交渉に入ります。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    point:
      "IT/Web特化。技術力を評価する求人が多く、コンサル出身でPdM・テックリード寄りを狙う際の主力にしやすい。書類添削や面接対策が丁寧との声がQiitaJobChange等で見られます。",
    href: "/review/levtech/",
  },
  {
    name: "ビズリーチ",
    point:
      "ハイクラス・スカウト型。テックリードやEMといった年収を維持しやすいポジションのスカウトが届きやすく、市場価値の把握にも使えます。",
    href: "/review/bizreach-it/",
  },
  {
    name: "リクルートエージェント（IT）",
    point:
      "国内最大級の求人数。大手からスタートアップまで網羅し、未経験要素のある転職でも選択肢を広く確保できます（IT公開求人110,840件・2026年5月22日時点・二次集計）。",
    href: "/review/recruit-it/",
  },
];

const faqs = [
  {
    q: "コンサル経験はエンジニア転職で評価される？",
    a: "評価されます。要件定義力・プロジェクト推進・折衝・論理的思考は開発現場でも重要で、特にPdMやテックリード寄りのポジションで強みになります。ただし最低限の実装力は別途必要です。",
  },
  {
    q: "プログラミングはどれくらいできれば応募できる？",
    a: "目安は、1つの言語で小〜中規模のWebアプリを一から作り、デプロイまで自走できるレベルです。公開できる成果物があると、未経験要素を補えます。",
  },
  {
    q: "年収は下がる？",
    a: "ポジション次第で断定はできません。純粋な開発者ポジションでは一時的に下がる可能性がある一方、テックリード・EMなどで採用されれば維持・上振れも可能です。提示は書面で確認しましょう。",
  },
  {
    q: "戦略系コンサル出身でもエンジニアになれる？",
    a: "可能ですが、技術コンサル出身より学習期間を長く見積もる必要があります。実装経験がほぼない場合、半年〜1年の学習とポートフォリオ制作を経てから応募するのが現実的です。",
  },
  {
    q: "最短ルートはどれくらい？",
    a: "技術コンサルで実装経験がある場合は数ヶ月で応募可能なケースもあります。実装経験が薄い場合は学習に半年以上を見込み、焦らず成果物を作る方が結果的に近道です。",
  },
  {
    q: "ポートフォリオは必要？",
    a: "未経験要素がある転職では強く推奨します。コードの書き方・設計の考え方・継続的に手を動かせる姿勢を一度に示せます。詳しくは関連記事のポートフォリオガイドを参照してください。",
  },
  {
    q: "在職中と退職後、どちらで活動すべき？",
    a: "在職中の活動を推奨します。学習と並行するため期間が長くなりやすく、収入を確保しながら成果物を作る方が精神的にも条件交渉でも有利です。",
  },
  {
    q: "コーディングテストが不安。対策は？",
    a: "基本的なアルゴリズムと、普段使う言語での実装速度を上げる練習が中心です。コンサルで培った論点整理力は、問題の要件分解にそのまま活きます。",
  },
];

const related = [
  { name: "エンジニア→ITコンサル転職", href: "/career/engineer-to-consultant/" },
  { name: "テックリードを目指すキャリアガイド", href: "/career/tech-lead/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
  { name: "年収アップを狙うエンジニアの戦略", href: "/purpose/salary-up/" },
];

export default function ConsultantToEngineerPage() {
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
          { name: "ITコンサル→エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITコンサルからエンジニアへの転職｜活動の進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | コンサル経験を活かしてエンジニアへキャリアチェンジする転職活動ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「もっと手を動かしたい」「技術を深掘りしたい」という動機で、ITコンサルタントからエンジニアへ転職する人がいます。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を具体的に解説します。
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
              結論：上流寄りポジションなら強い。最低限の実装力は必須
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・要件定義力・推進力・折衝力はPdM／テックリード寄りで高評価。コンサル経験は武器になる。</li>
              <li>・ギャップが大きいのは「実装経験」。1言語でアプリを作り切る学習とポートフォリオが鍵。</li>
              <li>・職務経歴書は『資料を作った』から『システムをどう定義し実現したか』へ書き換える。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（ITコンサル vs エンジニア）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まずは現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。これにより学習と職務経歴書づくりの優先順位が決まります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ITコンサル（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">エンジニア（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.consultant}</td>
                    <td className="px-4 py-3 text-slate-600">{row.engineer}</td>
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
            コンサルの職務経歴書は「資料・提案・推進」が中心になりがちですが、エンジニア選考では「システムをどう定義し、技術でどう実現したか」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（提案・推進の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                製造業クライアントの基幹システム刷新プロジェクトに参画。要件定義の取りまとめと進捗管理を担当し、ベンダー選定の提案資料を作成。経営層への報告を実施。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（要件→技術実現＋自走した開発成果）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                基幹システム刷新で業務要件をデータモデルとAPI仕様へ落とし込み、PoCとしてTypeScript/Next.jsで在庫照会機能を自作・デプロイ。要件定義の経験を活かしモジュール境界を設計し、ベンダーと技術的な実現性を合意形成した。個人開発でCRUDアプリを公開（GitHub）。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※数値・技術は実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>と<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            コンサル業界は報酬水準が高いため、純粋な開発者ポジションへ移ると一時的に下がる可能性があります。一方で、テックリードやEMなどの上流寄りポジションで採用されれば維持・上振れも見込めます。相場の基準として、厚生労働省 job tag のシステムエンジニア（受託開発）の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            転職者全体の傾向では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）で転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）と推移しています。年収は「どのポジション・等級で採用されるか」で大きく変わるため、提示額は必ず書面で確認しましょう。
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
            30代・40代でエンジニアへ移る場合、ゼロから純粋な開発者を目指すよりも、コンサルで培った要件定義・推進・折衝の経験を土台に、PdMやテックリード寄りのポジションから入る方が現実的です。実装力は「自走できる」ことを成果物で示せれば、年齢のハンデを補えます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の見通しとして、レバテックが公表する年代別平均年収（2025年）では正社員SEが30代約499万円・40代約618万円、年収1,000万円以上の割合が30代8.01%・40代12.67%（career.levtech.jp/freelance.levtech.jpガイド記事）です。上流寄りポジションを選べばこのレンジの上側も狙えるため、目先の額面だけでなく技術を深められる環境かどうかも含めて判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">エンジニア転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            コンサル経験を活かせるエンジニアポジションをプロが提案します。
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
