import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "テスター/QA→開発者への転職完全ガイド【2026年版】",
  description:
    "QA・テストエンジニアから開発者へ転職するための現実性、スキルギャップ比較、在職中の準備、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：テスト経験を武器にした開発転身は十分可能" },
  { id: "gap", label: "テスター/QAと開発者のスキルギャップ比較表" },
  { id: "skills", label: "埋めるべきスキルの身につけ方" },
  { id: "steps", label: "在職中にできる移行ステップ" },
  { id: "resume", label: "職務経歴書の見せ方（Before/After例文）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代から見たテスター→開発転身" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    area: "プログラミング",
    qa: "テストスクリプトや手順の作成が中心",
    dev: "アプリケーションコードを設計・実装できる",
    action: "Python/TypeScript等を1つ習得し個人開発で実践",
  },
  {
    area: "テスト自動化",
    qa: "Selenium/Cypress/Playwright等の利用経験",
    dev: "そのまま実装力・CI/CD理解の証明になる",
    action: "自動化経験を開発スキルとして言語化",
  },
  {
    area: "設計",
    qa: "テスト設計・観点表の作成に強い",
    dev: "機能設計・データ設計を自分で行う",
    action: "CRUDアプリ設計とDB設計を学ぶ",
  },
  {
    area: "バージョン管理",
    qa: "テスト資産の管理にGitを使う現場も",
    dev: "PR・コードレビュー文化が前提",
    action: "ブランチ運用とPRの作法に慣れる",
  },
  {
    area: "品質視点",
    qa: "バグ再現・原因追求・境界値の感度が高い",
    dev: "TDDやテスト容易な設計に直結する強み",
    action: "テストコードが充実した開発実績を作る",
  },
  {
    area: "強み（活かせる）",
    qa: "品質保証の知識・再現手順の言語化力",
    dev: "壊れにくいコードを書ける開発者は希少",
    action: "品質視点を開発の付加価値として明記",
  },
];

const skillSteps = [
  {
    num: "1",
    title: "プログラミング基礎（2〜3ヶ月）",
    desc: "PythonまたはTypeScriptから始めます。変数・関数・クラス・非同期処理を、写経でなく自分で書ける状態を目指します。テスト自動化の経験があれば入りやすい領域です。",
  },
  {
    num: "2",
    title: "Webフレームワーク（1〜2ヶ月）",
    desc: "Django/Flask（Python）またはNext.js（TypeScript）で、CRUDアプリを一通り作れるレベルを目指します。",
  },
  {
    num: "3",
    title: "データベース（2〜4週間）",
    desc: "SQLの基本操作、テーブル設計、ORMの使い方を学びます。テスト経験者はデータ整合性の重要性を理解しているため、設計の勘所をつかみやすいです。",
  },
  {
    num: "4",
    title: "Git / チーム開発（2〜4週間）",
    desc: "ブランチ運用、プルリクエスト、コードレビューの流れを学びます。OSSへの小さな貢献も実績になります。",
  },
  {
    num: "5",
    title: "テスト充実のポートフォリオ（1〜2ヶ月）",
    desc: "自動テストやTDDで開発したアプリをGitHubで公開します。テスト経験者ならではの「壊れにくい設計」を強みとして示せます。",
  },
];

const moveSteps = [
  {
    phase: "1〜2ヶ月目",
    title: "現職での自動化拡大と学習開始",
    desc: "現職でテスト自動化やCI/CDに関わる範囲を広げます。これは実装力の証明そのものです。並行して言語学習を開始します。",
  },
  {
    phase: "2〜4ヶ月目",
    title: "開発ポートフォリオ着手",
    desc: "テストコードが充実したCRUDアプリをGitHubで公開します。READMEに品質面の工夫を書くと、テスター出身の強みが伝わります。",
  },
  {
    phase: "4〜5ヶ月目",
    title: "職務経歴書を開発職向けに翻訳",
    desc: "テスト業務を「コードを書いた経験・品質を担保した実績」として書き換えます（後述のBefore/After参照）。",
  },
  {
    phase: "5〜6ヶ月目",
    title: "SET/開発職の求人へ応募",
    desc: "まずはテスト経験を直接活かせるSET（Software Engineer in Test）系から狙うと、ギャップを抑えて開発職へ移行しやすくなります。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。SET・QA自動化や開発職の求人を扱い、技術背景を理解したアドバイザーが在籍するとされます（出典：レバテック公式ガイド、転職メディア集計）。キャリアチェンジの相談先として有力です。",
  },
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    point:
      "20〜30代若手層に強く、書類添削・面接対策が手厚いと評されます。開発職への挑戦時にポートフォリオの見せ方を相談しやすいエージェントです。",
  },
  {
    name: "paiza転職",
    href: "/review/paiza/",
    point:
      "スキルチェック（プログラミングテスト）のランクで実力を評価し、高ランクなら書類選考免除もある仕組み。経歴より実装力で勝負したいテスター出身者と相性が良いサービスです（個別仲介サポートはなし）。",
  },
];

const faqs = [
  {
    q: "テスター/QAから開発者への転職は難しい？",
    a: "不可能ではありません。テストで培った品質意識やバグの原因追求力は開発でも重宝されます。ただしプログラミングスキルの習得は必須で、独学やスクールで数ヶ月の学習が前提になります。まずSET系から入ると移行のハードルを下げられます。",
  },
  {
    q: "テスター経験は開発職で評価される？",
    a: "テスト設計力、品質保証の知識、バグの再現手順を明確に言語化する力は開発現場で評価されます。特にTDDやテスト容易性を重視するチームでは、テスト経験者の視点が活きます。評価される強みと、埋めるべきギャップを分けて整理しましょう。",
  },
  {
    q: "テスト自動化の経験があれば有利？",
    a: "有利です。Selenium・Cypress・Playwright等の自動化経験は、そのままプログラミングスキルの証明になります。自動化からSET（Software Engineer in Test）への転身は、開発職への現実的な入口になります。",
  },
  {
    q: "開発言語は何から学ぶべき？",
    a: "Pythonが入りやすい選択肢です。テスト自動化でも使え、Web開発（Django/Flask）にも展開できます。Web系を目指すならTypeScript＋Reactも有力です。まず1つを深く習得することを優先します。",
  },
  {
    q: "30代・40代でも開発職へ移れる？",
    a: "30代前半までが最も動きやすいのは事実ですが、テスト自動化やCI/CDの経験があれば、その後の年代でも可能性はあります。SET系のポジションは品質と開発の両方を求めるため、テスター出身のミドル層が強みを発揮しやすい領域です。",
  },
  {
    q: "ポートフォリオは必要？",
    a: "開発実務が示しにくい場合は実質必須です。テストコードが充実したアプリをGitHubで公開し、品質面の工夫をREADMEに書くと、テスター出身ならではの差別化になります。",
  },
  {
    q: "在職中に進めるべき？",
    a: "推奨します。在職中なら収入を保ったまま準備でき、現職で自動化やCI/CDの範囲を広げること自体が実績になります。焦って退職せず、ポートフォリオが整ってから応募する方が安全です。",
  },
];

export default function TesterToDeveloperPage() {
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
        title="テスター/QA→開発者への転職完全ガイド【2026年版】"
        description="QA・テストエンジニアから開発者へ転職するための現実性、スキルギャップ比較、在職中の準備、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/tester-to-developer/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "テスター/QA→開発者転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テスター/QA→開発者への転職完全ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          テストエンジニア・QAから開発者への転職は、テストで培った品質意識を武器にできるキャリアチェンジです。近年はSET（Software Engineer in Test）というポジションも一般化し、品質と開発をつなぐ役割の選択肢が広がっています。本記事では、この職種転換の現実性、スキルギャップ、在職中の準備、職務経歴書の書き方を、公的データに基づいて整理します。
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
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            結論：テスト経験を武器にした開発転身は十分可能
          </h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              テスター/QAから開発者への転身は、戦略次第で十分に実現できます。理由は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① テスト自動化の経験は、そのまま実装力・CI/CD理解の証明として評価される。</li>
              <li>② 品質視点・バグ再現力は、TDDやテスト容易な設計を重視するチームで希少な強みになる。</li>
              <li>③ SET（Software Engineer in Test）という入口があり、ギャップを抑えて開発職へ移行できる。</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              鍵は、プログラミングを「読める」だけでなく「設計して書ける」状態まで引き上げ、テストコードが充実したポートフォリオで品質強みを可視化することです。
            </p>
          </div>
        </section>

        {/* スキルギャップ比較表 */}
        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            テスター/QAと開発者のスキルギャップ比較表
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職で持っている強みと、開発職で前提とされる範囲を並べると、埋めるべき差分が明確になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">テスター/QA（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">開発者（求められる）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">埋め方</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.qa}</td>
                    <td className="px-4 py-3 text-slate-600">{row.dev}</td>
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
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
            言語選びは
            <Link href="/skill/python/" className="text-petrol hover:underline">Pythonスキルガイド</Link>
            や
            <Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScriptスキルガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            在職中にできる移行ステップ
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            現職を活かしながら準備するのが最も効率的です。おおむね半年を想定したロードマップです。
          </p>
          <div className="space-y-4">
            {moveSteps.map((s, i) => (
              <div key={i} className="border-l-4 border-blue-500 bg-slate-50 rounded-r-lg p-5">
                <p className="text-xs font-bold text-petrol mb-1">{s.phase}</p>
                <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            ポートフォリオの作り込み方は
            <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>
            、選考対策は
            <Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>
            も確認してください。
          </p>
        </section>

        {/* 職務経歴書 Before/After */}
        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            職務経歴書の見せ方（Before/After例文）
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            テスターの職務経歴書は「手順を実行した人」に見えがちです。コードを書いた経験と品質への貢献を前面に出し、開発職で評価される形に翻訳します。以下は一般的な書き換えパターンです。
          </p>

          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-5 py-2 text-sm font-bold text-red-700">Before（テスト業務中心の書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「Webサービスのテスト業務を担当。テスト設計書を作成し、手動テストの実施と不具合の起票を行った。」
              </div>
            </div>
            <div className="border border-[var(--line)] rounded-lg overflow-hidden">
              <div className="bg-petrol-soft px-5 py-2 text-sm font-bold text-petrol-deep">After（開発職で評価される書き方）</div>
              <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                「Webサービスの品質保証を担当。回帰テストをPlaywright（TypeScript）で自動化し、テスト工数を◯%削減。CI上で自動テストが走る仕組みを整備し、リリース前の不具合検知率を改善。個人開発ではテストコードを整備したCRUDアプリをGitHubで公開し、TDDで実装。」
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="font-bold text-slate-700 text-sm mb-2">翻訳のポイント</p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・「テストした」→「自動化のコードを書き、どんな数値成果が出たか」を添える（数値は実績の範囲で）</li>
              <li>・使った言語・ツール（Playwright/TypeScript等）を明記し、実装力を可視化する</li>
              <li>・品質視点を「開発の付加価値」として位置づける（壊れにくい設計に貢献できる）</li>
              <li>・誇張せず、検証可能な事実ベースで書く</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            詳しい書き方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            テスター・開発職それぞれの公表統計は限られるため、公的・公表データを起点に幅で考えます。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li>
              ・厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収<strong>578.5万円</strong>・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。開発職の一つの参考値です。
            </li>
            <li>
              ・dodaの2024年度決定年収レポート（2025年5月公表）では、転職者の約6割が年収アップ。IT・通信の平均決定年収は2024年度<strong>486万円</strong>。
            </li>
            <li>
              ・レバテック公表の年代別平均年収（2025年）では、正社員SEで30代約<strong>499万円</strong>、40代約<strong>618万円</strong>。
            </li>
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            未経験寄りの開発職へ移る初年度は横ばいの可能性もありますが、スキルを積めば上昇余地は大きい領域です。
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
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
                  <Link href={agent.href} className="text-petrol-deep hover:underline">
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
            30代・40代から見たテスター→開発転身
          </h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              ミドル層がこの転身を成功させる鍵は、「未経験の開発者」として若手と競わないことです。テスト自動化やCI/CDの経験、品質を担保してきた実績は、年代が上がるほど説得力を増します。とくにSET系のポジションは、開発スキルと品質視点の両方を求めるため、テスター出身のミドルが強みを活かしやすい領域です。
            </p>
            <p>
              一方で、プログラミングを実務レベルで示せないと、年代相応の即戦力性が伝わりにくくなります。だからこそ、自動化のコードや個人開発という「自分が書いた成果物」が重要です。40代の場合は、品質プロセスの設計やチームの底上げといったリード経験まで添えると、評価されるポジションが広がります。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職事情</Link>
              ・
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>
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
          <h2 className="text-xl font-bold mb-3">開発エンジニアへの転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            テスト経験を活かせる開発・SETポジションを、IT特化型エージェントが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
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
              { name: "Pythonスキルガイド", href: "/skill/python/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "paiza転職の評判", href: "/review/paiza/" },
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
