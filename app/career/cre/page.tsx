import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "CRE転職ガイド｜サポート・バックエンドからの移行ステップと職務経歴書",
  description:
    "テクニカルサポート／バックエンド／SREからCRE（カスタマーリライアビリティエンジニア）へ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：CRE転職の現実性" },
  { id: "gap", label: "現職とのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がCREを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "プログラミング（Python/Go等）",
    support: "△ スクリプト程度",
    backend: "◎ 日常的に開発",
    cre: "◎ 自動化ツール・API連携を自力で実装",
  },
  {
    skill: "顧客コミュニケーション",
    support: "◎ 日々の顧客対応が主業務",
    backend: "△ 社内中心で機会が少ない",
    cre: "◎ 技術課題を顧客に翻訳して提案",
  },
  {
    skill: "プロダクト・アーキテクチャ理解",
    support: "○ 機能面の理解はある",
    backend: "◎ 内部構造まで把握",
    cre: "◎ 制約まで理解し最適解を提示",
  },
  {
    skill: "データ分析（SQL/BI）",
    support: "△ 限定的",
    backend: "○ 業務で利用",
    cre: "◎ 利用データから能動的に改善提案",
  },
  {
    skill: "SRE基礎（SLI/SLO・監視）",
    support: "△ 概念レベル",
    backend: "○ 計装の経験",
    cre: "○ SLAとSLOの橋渡しができる",
  },
  {
    skill: "課題の構造化・ドキュメント化",
    support: "○ 問い合わせ対応で訓練",
    backend: "○ 設計文書の作成経験",
    cre: "◎ 顧客課題を仕組み改善に落とす",
  },
];

const buildSteps = [
  {
    title: "プログラミングで「課題を仕組みで解く」経験を積む",
    desc: "Python/Go/TypeScriptで、問い合わせ対応や運用の繰り返し作業を自動化するツールを作ります。CREは個別対応で終わらせず、再発しない仕組みに変える職種なので、コードで課題を解いた経験が評価されます。",
  },
  {
    title: "プロダクトのアーキテクチャと制約を深く理解する",
    desc: "自社プロダクトの構造・APIの仕様・性能やコストの制約を、顧客に説明できるレベルで把握します。『なぜその挙動になるのか』を技術的に説明できることがCREの信頼につながります。",
  },
  {
    title: "データ分析で能動的に改善提案する習慣をつける",
    desc: "SQLやBIツールで顧客の利用データを分析し、問題が起きる前に改善を提案する経験を積みます。受け身の対応から、プロアクティブな信頼性向上へと役割を広げる準備になります。",
  },
  {
    title: "SREの基礎（SLI/SLO・監視）に触れる",
    desc: "顧客向けのSLAと社内のSLOを橋渡しするため、SLI/SLO・監視・障害対応の基礎を学びます。SREほどの深さは不要でも、信頼性の共通言語を持っていることが重要です。",
  },
  {
    title: "技術課題を顧客の言葉に翻訳する力を磨く",
    desc: "技術的な制約や原因を、非エンジニアの顧客にも伝わる言葉で説明し、合意形成する力を鍛えます。サポート経験者の強みを、CREの中核スキルとして言語化しておきます。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "問い合わせの中で繰り返し発生する課題を分類し、根本原因をプロダクト側で潰す提案を1件作る",
      "対応の効率化ツール（FAQ自動応答、ログ集約等）を簡単なスクリプトで自作する",
      "顧客の利用データを分析し、改善につながる気づきをドキュメント化する",
    ],
  },
  {
    phase: "スキル証明づくり（3〜6ヶ月）",
    items: [
      "Python/Go等で作った自動化ツール・データ分析スクリプトをGitHubで公開する",
      "プロダクトの仕組みを説明したドキュメントや、顧客課題→改善提案の事例をまとめる",
      "SLI/SLO・監視の基礎を学び、信頼性の共通言語を扱えるようにする",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "SaaS・テック企業に強いエージェントやカジュアル面談型サービスに登録する",
      "職務経歴書を『問い合わせ対応の量』から『信頼性をどう改善したか』に書き換える",
      "面接に向け、顧客課題を技術で解決した具体例を、原因→対応→再発防止で整理する",
    ],
  },
];

const faqs = [
  {
    q: "CREとSREの違いは？",
    a: "SREはシステムの信頼性に焦点を当てますが、CREは顧客体験の信頼性に焦点を当てます。CREは顧客の技術的課題の解決、プロダクト改善への橋渡し、技術サポートの高度化が主な役割で、顧客との接点が大きい点が違いです。",
  },
  {
    q: "テクニカルサポートからCREへの転職は可能？",
    a: "可能です。顧客対応の経験はそのまま強みになります。不足しがちなのはプログラミングとデータ分析、プロダクトの内部理解なので、繰り返し課題を自動化したツールを作り、ポートフォリオ化すると移行しやすくなります。",
  },
  {
    q: "バックエンドエンジニアからCREへは行ける？",
    a: "行けます。技術力は十分なため、不足しがちな顧客コミュニケーションの経験を、社内外への技術説明や提案の実績として示すのがポイントです。技術と対人の両方を持つ人材としてアピールできます。",
  },
  {
    q: "CREに必要な技術スキルは？",
    a: "プログラミング（Python/Go等）、クラウド（AWS/GCP）、データ分析（SQL/BI）、API設計の基礎が必要です。加えて、技術課題を顧客に翻訳する力と、プロダクトを深く理解する力が求められます。",
  },
  {
    q: "CREポジションがある企業は？",
    a: "Google（CREの発祥）をはじめ、SaaS企業を中心にCREポジションの設置が増えています。プロダクトの信頼性が事業の継続率に直結するサブスクリプション型のサービスで需要が高い傾向です。",
  },
  {
    q: "カスタマーサポートとCREの違いは？",
    a: "カスタマーサポートは既知の問題対応が中心ですが、CREは技術的な課題解決に加え、プロダクトの信頼性向上の仕組みづくりまで担います。個別対応で終わらせず、再発しない仕組みに変えるエンジニアリングスキルが必須です。",
  },
  {
    q: "30代・40代からのCRE転職は不利？",
    a: "CREは顧客折衝とプロダクト理解の両方が問われる職種で、ミドル層の対人経験とドメイン知識が活きやすい領域です。年齢より、課題を仕組みで解決した実績と、技術を顧客の言葉に翻訳できる力が重視されます。",
  },
  {
    q: "CREの求人はどのエージェントで探せばいい？",
    a: "SaaS・テック企業に強いレバテックキャリアや、カジュアル面談で社風を確認できるGreenが向いています。CREはまだ求人数が限られるため、スカウト型も併用して幅広く探すと見つかりやすくなります。",
  },
];

const related = [
  { name: "SRE転職ガイド", href: "/career/sre/" },
  { name: "DevSecOps転職ガイド", href: "/career/devsecops/" },
  { name: "Pythonスキルと転職ガイド", href: "/skill/python/" },
  { name: "SQLスキルと転職ガイド", href: "/skill/sql/" },
  { name: "サポート・運用からインフラへの転職", href: "/career/support-to-infra/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

export default function CrePage() {
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
        title="CRE転職ガイド｜サポート・バックエンドからの移行ステップと職務経歴書"
        description="テクニカルサポート／バックエンド／SREからCRE（カスタマーリライアビリティエンジニア）へ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。"
        url="/career/cre/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "CRE転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CRE転職ガイド｜サポート・バックエンドからの移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 顧客対応とエンジニアリングを「信頼性を高める力」に翻訳して転職する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          CRE（Customer Reliability Engineering）はGoogleが提唱した比較的新しい職種で、顧客体験の信頼性を技術で高める役割です。SaaS企業を中心に求人が増えており、テクニカルサポート・バックエンド・SREの経験者が、現職の強みを活かして移れるキャリアパスです。このページでは、現職とのスキルギャップ、在職中の移行ステップ、職務経歴書での見せ方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CRE転職の現実性</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>テクニカルサポート・バックエンド・SREの経験があれば、CRE転職は現実的です。</strong>
              ただし求人数がまだ限られるため、「顧客課題を技術で解決した実績」を明確に示すことが重要です。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① サポート出身なら<strong>プログラミング・データ分析</strong>、バックエンド出身なら<strong>顧客コミュニケーション</strong>がギャップになりやすい</li>
              <li>② 個別対応で終わらせず「再発しない仕組み」に変えた経験を1つ作る</li>
              <li>③ 技術と対人の両方を持つ人材は希少で、ミドル層の対人経験が活きやすい</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職とのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CREに求められるスキルを、テクニカルサポート・バックエンドエンジニアの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。出発点によって埋めるべきギャップが異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">サポート出身</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">バックエンド出身</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">CREで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.support}</td>
                    <td className="px-4 py-3 text-slate-600">{row.backend}</td>
                    <td className="px-4 py-3 text-slate-600">{row.cre}</td>
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
            CREへの移行は、今の顧客対応や開発業務の中で「課題を仕組みで解いた実績」を作りながら進めるのが効率的です。受け身の対応から、プロアクティブな信頼性向上へと役割を広げた経験が、職務経歴書の核になります。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            サポートや開発の経歴は、書き方次第でCRE適性が伝わります。ポイントは「対応した件数」ではなく「顧客の信頼性をどう改善したか／何を仕組み化したか」を主語にすることです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（問い合わせ対応の量だけの例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                SaaSプロダクトのテクニカルサポートを担当。顧客からの技術的な問い合わせに対応し、月間〇〇件のチケットを処理。エスカレーションが必要な場合は開発チームへ連携した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（顧客の信頼性改善を主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                SaaSプロダクトのテクニカルサポートとして、顧客の技術課題の解決に加え、再発防止の仕組み化を主導。問い合わせデータをSQLで分析し、上位を占める課題の根本原因を特定して開発チームに改善提案。FAQの自動応答ツールをPythonで内製し、定型問い合わせの対応工数を削減。設定ミスが起きやすい箇所はオンボーディング手順とドキュメントを改訂し、同種の問い合わせ件数を低減した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「対応した／連携した」→「根本原因を特定し仕組みで解決した」と能動的に変換</li>
                <li>・データ分析・自動化ツール・ドキュメント改訂など、エンジニアリング要素を示す</li>
                <li>・問い合わせ件数の低減・対応工数の削減など、出せる範囲で成果を添える</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CRE単独の公的な平均年収統計は確認できないため、ミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。CREは技術と顧客折衝の両方を担える希少なポジションのため、サポート職からの移行では年収アップを狙える可能性があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へ上昇し、転職者の約6割が年収アップを実現しています。CREは求人数が限られ企業ごとの差も大きいため、複数社の提示を比較してレンジ感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）／doda「決定年収レポート」（2025年5月公表）。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CRE求人はSaaS・テック企業に集中しているため、その領域に強いサービスと、社風を確かめられるカジュアル面談型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で、SaaS企業の求人やCRE/SRE系のポジションを扱います。新しい職種への転職でも、技術に詳しいアドバイザーに相談できます。",
              },
              {
                name: "Green",
                point:
                  "IT/Webベンチャー・スタートアップに強い成功報酬型の転職サイト。カジュアル面談で社風を確認しやすく、CREを置くSaaS企業との接点を作れます。",
              },
              {
                name: "ビズリーチ",
                point:
                  "スカウト型で市場価値を客観把握できます。経歴を登録しておくと、CRE/カスタマー領域のハイレンジ求人のスカウトが届く可能性があります。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がCREを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              CREは、顧客と向き合い、相手の状況を踏まえて落としどころを作る力が問われる職種です。ミドル層が積み重ねた対人折衝やドメイン知識、社内外を巻き込む調整力は、若手にはない強みとして評価されます。
            </p>
            <p>
              一方で差がつきやすいのは「課題を自分のコードで仕組みに変える力」です。サポート中心のキャリアだった場合は、繰り返し課題を自動化したツールやデータ分析の成果を在職中に1つ作り、職務経歴書で示せるようにしておきましょう。
            </p>
            <p>
              年収交渉の前提として、
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              や
              <Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の測り方</Link>
              を押さえておくと、提示レンジが妥当かを判断しやすくなります。
            </p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">CRE転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            CREポジションに強いIT特化型エージェントが、あなたの経験に合う求人を提案します。
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
