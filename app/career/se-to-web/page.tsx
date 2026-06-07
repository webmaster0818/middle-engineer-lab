import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SIer SE→Web系開発者への転職完全ガイド【2026年版】",
  description:
    "SIerのSEからWeb系開発者へ転職するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：SE→Web系は30代でも十分現実的" },
  { id: "gap", label: "SIer SEとWeb系開発者のスキルギャップ比較表" },
  { id: "skills", label: "埋めるべきスキルの身につけ方" },
  { id: "steps", label: "在職中にできる移行ステップ" },
  { id: "resume", label: "職務経歴書の見せ方（Before/After例文）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代から見たSE→Web系転職" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    area: "開発言語",
    sier: "Java / C# / COBOL等を業務指示ベースで使用",
    web: "Go / Ruby / Python / TypeScript等を自走して選定・利用",
    action: "モダン言語を1つ深く習得し個人開発で実践",
  },
  {
    area: "バージョン管理",
    sier: "SVN中心、または共有フォルダ運用の現場も",
    web: "Git / GitHub前提。PR・コードレビュー文化",
    action: "Gitのブランチ運用とPRの作法に慣れる",
  },
  {
    area: "開発プロセス",
    sier: "ウォーターフォール、工程分業（設計/実装/テスト）",
    web: "アジャイル／スクラム、機能単位で一気通貫",
    action: "スクラムの基本用語と進め方を学ぶ",
  },
  {
    area: "インフラ",
    sier: "オンプレ中心、構築は基盤チーム担当が多い",
    web: "クラウド（AWS/GCP）前提、開発者が自分でデプロイ",
    action: "Docker・クラウドの基本サービスでデプロイ経験を作る",
  },
  {
    area: "プロダクト関与",
    sier: "顧客要件の実現が中心。仕様は与えられる側",
    web: "事業KPIを意識し仕様にも関与",
    action: "なぜ作るかを意識した個人開発・ブログ発信",
  },
  {
    area: "強み（活かせる）",
    sier: "要件定義・設計・大規模PJ管理・ドキュメント力",
    web: "同左は希少。設計力のある開発者は重宝される",
    action: "設計経験を具体的成果として言語化",
  },
];

const skillSteps = [
  {
    num: "1",
    title: "Git / GitHub（1〜2週間）",
    desc: "ブランチ運用、プルリクエスト、コードレビューの流れに慣れます。Web系では日常業務の前提となるため最優先で固めます。",
  },
  {
    num: "2",
    title: "モダン言語の習得（1〜3ヶ月）",
    desc: "Go・Ruby・Python・TypeScriptから1つを選び、文法だけでなく標準的なプロジェクト構成まで踏み込みます。Java経験者はGoへの移行が比較的スムーズです。",
  },
  {
    num: "3",
    title: "Webフレームワーク（1〜2ヶ月）",
    desc: "選んだ言語のメジャーフレームワーク（Next.js・Rails・Django・Gin等）でCRUDとREST APIを一通り実装できる状態を目指します。",
  },
  {
    num: "4",
    title: "Docker / コンテナ（2〜4週間）",
    desc: "コンテナの概念、Dockerfile、docker composeでの開発環境構築を理解します。SIerの基盤経験があると理解が速い領域です。",
  },
  {
    num: "5",
    title: "クラウド基礎とデプロイ（1〜2ヶ月）",
    desc: "AWS/GCPの基本サービスを理解し、自作アプリを実際にデプロイして公開URLを持つところまで到達します。",
  },
];

const moveSteps = [
  {
    phase: "1〜2ヶ月目",
    title: "現職での棚卸しと学習開始",
    desc: "担当した設計・要件定義・PJ管理の成果を箇条書きで棚卸しします。並行してGitとモダン言語の学習を開始します。",
  },
  {
    phase: "2〜4ヶ月目",
    title: "個人開発でポートフォリオ着手",
    desc: "小さくてもよいので、フロント・バック・デプロイまで一気通貫で動くアプリをGitHubで公開します。READMEに設計意図を書きます。",
  },
  {
    phase: "4〜5ヶ月目",
    title: "職務経歴書をWeb系向けに翻訳",
    desc: "SIer用語をWeb系で評価される表現に書き換えます（後述のBefore/After参照）。エージェント面談で第三者視点の添削を受けます。",
  },
  {
    phase: "5〜6ヶ月目",
    title: "応募・カジュアル面談",
    desc: "在職中のままカジュアル面談で情報収集し、技術スタックや開発文化が合う企業を見極めてから本選考に進みます。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。利用者の約8割が20〜30代で、Web系・モダン技術の求人に強み。技術背景を理解したアドバイザーが在籍するとされます（出典：レバテック公式ガイド、転職メディア集計）。",
  },
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    point:
      "20〜30代若手層に強く、書類添削・面接対策が手厚いと評されます。初めての異領域転職のサポート役として併用しやすいエージェントです。",
  },
  {
    name: "Green",
    href: "/review/green/",
    point:
      "成功報酬型の転職サイトで、IT/Webベンチャー・スタートアップに強み。カジュアル面談から始められるため、在職中の情報収集に向きます。",
  },
];

const faqs = [
  {
    q: "SIerのSEからWeb系への転職は30代・40代でも可能？",
    a: "可能です。設計・要件定義・大規模プロジェクト管理の経験はWeb系でも希少価値があり、ミドル層では特に評価されます。ただし30代後半以降はモダン技術の実装力を個人開発などで具体的に示すことが重要になります。求人の中心が若手寄りになる傾向はあるため、強みの言語化で差をつけます。",
  },
  {
    q: "Web系に転職すると年収は下がる？",
    a: "一概には言えません。dodaの2024年度決定年収レポート（2025年5月公表）ではIT・通信の転職者の約6割が年収アップとされ、IT・通信の平均決定年収は2024年度で486万円でした。一方、未経験に近い領域へ移る場合は一時的に下がるケースもあります。スキルの市場性次第で上下するため、複数社で市場価値を確認するのが安全です。",
  },
  {
    q: "SIer経験はWeb系で評価される？",
    a: "要件定義力、設計力、ドキュメント力、プロジェクト管理スキルは高く評価されます。一方で、特定のレガシー言語のみの経験だと追加のスキル習得が前提になります。評価される強みと、埋めるべきギャップを分けて整理することが大切です。",
  },
  {
    q: "Web系転職に最低限必要なスキルは？",
    a: "Git操作、サーバーサイド言語1つ（Go/Ruby/Python等）、SQL、REST APIの理解、HTML/CSS/JavaScriptの基礎が目安です。加えてDocker・クラウドへのデプロイ経験があると、書類段階での評価が上がりやすくなります。",
  },
  {
    q: "ポートフォリオは必須？",
    a: "実装経験が業務で示しにくい場合は実質必須です。GitHubで個人開発を公開し、READMEに設計意図やこだわった点を書きます。SIerでの設計経験者は、技術ブログで設計の考え方を発信するのも有効です。",
  },
  {
    q: "在職中に転職活動を進めても大丈夫？",
    a: "むしろ推奨されます。在職中であれば焦らず企業を選べ、年収交渉でも足元を見られにくくなります。カジュアル面談を活用すれば、現職を続けながら開発文化や技術スタックの相性を確認できます。",
  },
  {
    q: "エージェントは複数登録すべき？",
    a: "1〜2社の併用が現実的です。IT特化型1社に、若手サポートが手厚い総合寄り1社を組み合わせると、求人の幅と添削の質の両方を得やすくなります。連絡過多が負担なら主軸を1社に絞る運用でも構いません。",
  },
];

export default function SeToWebPage() {
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
        title="SIer SE→Web系開発者への転職完全ガイド【2026年版】"
        description="SIerのSEからWeb系開発者へ転職するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/se-to-web/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SIer SE→Web系開発者転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SIer SE→Web系開発者への転職完全ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          SIerのSEからWeb系開発者へのキャリアチェンジは、ミドルエンジニアのキャリアパスの中でも人気の高いルートです。モダンな技術スタック、アジャイル開発、自社サービスへの関与など、SIerでは得にくい経験を積めます。本記事では、この職種転換の現実性、スキルギャップ、在職中の準備、職務経歴書の書き方までを、公的データに基づいて整理します。
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
            結論：SE→Web系は30代でも十分現実的
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              SIer SEからWeb系開発者への転職は、30代でも現実的です。理由は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 設計・要件定義・大規模PJ管理の経験はWeb系で希少価値があり、ミドル層の強みになる。</li>
              <li>② 埋めるべきギャップ（Git・モダン言語・クラウド・アジャイル）は学習領域が明確で、独学で到達可能。</li>
              <li>③ IT人材は構造的な不足が続く見通しで（経産省2019年公表試算では2030年に最大約79万人不足）、経験者の受け皿は広い。</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              一方で、レガシー言語のみの経験だとモダン技術の実装力を別途示す必要があります。在職中に個人開発でポートフォリオを用意することが成否を分けます。
            </p>
          </div>
        </section>

        {/* スキルギャップ比較表 */}
        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            SIer SEとWeb系開発者のスキルギャップ比較表
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職で身についているものと、Web系で前提とされるものを並べると、埋めるべき差分が明確になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SIer SE（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">Web系開発者（求められる）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">埋め方</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.sier}</td>
                    <td className="px-4 py-3 text-slate-600">{row.web}</td>
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
            言語選びに迷う場合は
            <Link href="/skill/go/" className="text-blue-600 hover:underline">Goスキルガイド</Link>
            や
            <Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScriptスキルガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            在職中にできる移行ステップ
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            退職してから動くより、在職中に準備を進める方が金銭面・交渉面で有利です。おおむね半年を想定したロードマップです。
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
            、コーディング試験の対策は
            <Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>
            も合わせて確認してください。
          </p>
        </section>

        {/* 職務経歴書 Before/After */}
        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            職務経歴書の見せ方（Before/After例文）
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            SIerの職務経歴書はそのままだと「工程の一部を担当した人」に見えがちです。Web系で評価される「自走力」「設計力」「成果」が伝わる表現に翻訳します。以下は一般的な書き換えパターンです。
          </p>

          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-5 py-2 text-sm font-bold text-red-700">Before（SIer的な書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「金融系基幹システムの開発プロジェクトに参画。詳細設計書をもとに、Javaで割り当てられたモジュールの実装と単体テストを担当した。」
              </div>
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700">After（Web系で評価される書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「金融系基幹システム（同時利用者◯名規模）の開発に、要件定義から携わる。担当機能では処理の重複を見直し、バッチ処理時間を◯%短縮。チーム内のレビュー観点を整理し、手戻り削減に貢献。GitHubで個人開発したGo製APIではDocker＋AWSへのデプロイまで一人で構築。」
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="font-bold text-slate-700 text-sm mb-2">翻訳のポイント</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・「担当した」→「何を改善し、どんな数値成果が出たか」を必ず添える（数値は実績に基づく範囲で）</li>
              <li>・与えられた工程だけでなく、上流（要件定義・設計）への関与を明記する</li>
              <li>・モダン技術の実務／個人開発を1行でも入れ、学習姿勢と自走力を示す</li>
              <li>・誇張は禁物。事実ベースで、検証できる形で書く</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            年収の見通しは、公的・公表データを起点に考えると過度な期待・不安を避けられます。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li>
              ・厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収<strong>578.5万円</strong>・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。
            </li>
            <li>
              ・dodaの2024年度決定年収レポート（2025年5月公表）では、転職者の約6割が年収アップ。IT・通信の平均決定年収は2023年度469万円→2024年度<strong>486万円</strong>。
            </li>
            <li>
              ・レバテック公表の年代別平均年収（2025年）では、正社員SEで30代約<strong>499万円</strong>、40代約<strong>618万円</strong>。年収1,000万円以上の割合は30代8.01%・40代12.67%。
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            未経験に近い領域へ移る初年度は横ばい〜一時的な減少もあり得ますが、モダン技術の実務を積めば回復・上昇の余地は大きい領域です。
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
            30代・40代から見たSE→Web系転職
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              ミドル層がこのルートで成功する鍵は、「若手と同じ土俵で実装力を競わない」ことです。Web系企業がSIer出身のミドルに期待するのは、純粋なコーディング速度ではなく、要件を整理し、設計の妥当性を判断し、若手をレビューできる力です。SIerで培った上流工程の経験は、ここで初めて差別化要因になります。
            </p>
            <p>
              一方で、モダン技術にまったく触れていないと「学習意欲が止まっている人」と受け取られるリスクがあります。だからこそ、年代が上がるほど「小さくても動くものを自分で作った」という事実が効きます。40代の場合は、開発に加えてチームリードやプロジェクト推進まで担える前提でアピールすると、ポジションの選択肢が広がります。
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
          <h2 className="text-xl font-bold mb-3">Web系転職のプロに無料で相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントが、あなたのSE経験を最大限に活かせるWeb系企業を提案します。
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
              { name: "バックエンド→フルスタック転身", href: "/career/backend-to-fullstack/" },
              { name: "フロントエンドスキルガイド", href: "/skill/frontend/" },
              { name: "Reactスキルガイド", href: "/skill/react/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
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
