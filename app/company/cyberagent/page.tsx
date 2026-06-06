import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "サイバーエージェント エンジニア転職ガイド【2026年版】年収・技術・選考",
  description:
    "サイバーエージェントへのエンジニア転職を実データで解説。有価証券報告書の平均年収913.8万円（2025年9月期・全社員平均）、ABEMA等の技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年9月期", "771.1万円"],
  ["2022年9月期", "817.0万円"],
  ["2023年9月期", "806.0万円"],
  ["2024年9月期", "882.2万円"],
  ["2025年9月期", "913.8万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社サイバーエージェント（東証プライム・4751）"],
  ["事業領域", "インターネット広告・メディア（ABEMA）・ゲーム・AI"],
  ["平均年間給与", "913.8万円（2025年9月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "33.8歳（2025年9月期 有価証券報告書）"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック（公開情報）", "Go / Python / TypeScript / React / Kubernetes（GKE）/ Google Cloud"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公開情報ベース）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "サイバーエージェントの中途採用エンジニアの選考フローは？",
    a: "公式採用ページや転職エージェント経由での応募後、書類選考、カジュアル面談、複数回の面接という流れが一般的です。応募職種に応じて適性検査（Web検査）が課される場合があります。詳細・最新の選考内容は公式中途採用ページをご確認ください。",
  },
  {
    q: "サイバーエージェントの平均年収はいくらですか？",
    a: "2025年9月期の有価証券報告書によると、全社員平均の平均年間給与は913.8万円、平均年齢は33.8歳です。これは技術職に限らないグループ単体の全社員平均値であり、エンジニア個人の年収はグレード・職種により異なります。",
  },
  {
    q: "サイバーエージェントの技術スタックは？",
    a: "公式技術ブログ「CyberAgent Developers Blog」では、ABEMAのバックエンドがGoとGoogle Kubernetes Engine（GKE）で構成され、レコメンドシステムがPython中心からGoへ移行した事例などが公開されています。Amebaのフロントエンドや各事業でTypeScript・Reactも用いられています。",
  },
  {
    q: "サイバーエージェントの残業や働き方の評判は？",
    a: "OpenWorkやエンゲージ会社の評判などの口コミプラットフォームでは、実力主義で裁量が大きい一方、部署によって残業時間に差があるという傾向の声が見られます。配属チームによって働き方が変わる点は事前確認が推奨されます（2026年6月時点の口コミ傾向）。",
  },
  {
    q: "サイバーエージェントへの転職難易度は高いですか？",
    a: "転職市場での人気が高く、Web系メガベンチャーの中でも応募が集まりやすい企業です。実務でのプロダクト開発経験や技術的アウトプットが評価されやすく、特定言語の実務経験と自走力が問われる傾向があります。",
  },
  {
    q: "30代・40代でもサイバーエージェントに転職できますか？",
    a: "年齢そのものよりも、担えるロール（リード・マネジメント・専門領域）と直近の技術アウトプットが重視される傾向です。30代以降は『何を任せられるか』を職務経歴書で具体化することが鍵になります。",
  },
  {
    q: "サイバーエージェントへの転職で有利な経験は？",
    a: "Go・Python・TypeScriptいずれかの実務経験に加え、大規模Webサービス・動画配信・広告技術・機械学習・クラウドネイティブ（Kubernetes）いずれかの経験があると評価されやすい傾向です（公開技術情報・求人傾向ベース）。",
  },
  {
    q: "未経験からサイバーエージェントのエンジニアになれますか？",
    a: "中途採用は実務経験者中心です。未経験・経験浅めの場合は、まず実務経験を積める環境やポートフォリオ整備が現実的です。30代以降の経験浅めの転職については関連記事も参考にしてください。",
  },
];

export default function CyberagentCompanyPage() {
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
      <ArticleJsonLd title="サイバーエージェント エンジニア転職ガイド" description="サイバーエージェントへのエンジニア転職を実データで解説。有価証券報告書の平均年収913.8万円（2025年9月期・全社員平均）、ABEMA等の技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/cyberagent/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "サイバーエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">サイバーエージェント エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ABEMA・広告・AI・ゲームの総合テックカンパニー</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          サイバーエージェントは、インターネット広告・メディア（ABEMA）・ゲーム・AIを軸とする東証プライム上場（証券コード4751）のテックカンパニーです。本ページでは、有価証券報告書・公式採用ページ・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "サイバーエージェント 有価証券報告書（2025年9月期）",
            "サイバーエージェント公式 採用ページ",
            "CyberAgent Developers Blog",
            "OpenWork / エンゲージ 会社の評判（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              サイバーエージェントは<strong>Web系メガベンチャーの中でも人気・応募が集まりやすく、実務経験と技術アウトプットが評価される実力主義の環境</strong>です。難易度は相応に高めですが、年齢よりも「任せられるロール」と直近のアウトプットが見られます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Go/Python/TypeScriptの実務経験があり、大規模サービス・新規プロダクトで裁量を持って動きたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：明確な指示のもとで安定的に働きたい人、部署差のある働き方を許容しづらい人</li>
              <li>● <strong>30代・40代</strong>：リード/マネジメントや専門領域（配信・広告・ML・クラウド）の経験を活かせるかが鍵</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年9月期 有価証券報告書に基づく全社員平均値。技術スタックは公式技術ブログ等の公開情報。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">実力主義・若手にも裁量を与える文化</h3>
              <p className="text-sm text-blue-700">「21世紀を代表する会社を創る」をビジョンに掲げ、成果・スキル・役割の大きさに応じて評価される実力主義の文化があります。OpenWork等の口コミでも、早期にリード・マネジメントへ抜擢される事例が語られる傾向です（2026年6月時点の口コミ傾向）。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多彩な事業ドメインとキャリアの幅</h3>
              <p className="text-sm text-blue-700">ABEMA（動画配信）、インターネット広告、ゲーム、AI領域など事業ドメインが広く、エンジニアのキャリアパスが多様です。グループ内での異動・新規事業立ち上げの機会もあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術発信・OSS文化</h3>
              <p className="text-sm text-blue-700">公式技術ブログ「CyberAgent Developers Blog」や技術カンファレンスでの発信が活発で、技術ブランディングに注力しています。技術的アウトプット（ブログ・登壇・OSS）が評価につながりやすい環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式技術ブログ「CyberAgent Developers Blog」で公開されている事例ベースの主な技術要素です。事業・プロダクトごとに採用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：ABEMAのマイクロサービスはほぼGoで実装。レコメンドはPython中心からGoへ移行した事例が公開されています。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>インフラ</strong>：Google Kubernetes Engine（GKE）/ Kubernetes でマイクロサービスを運用。自社基盤（CyCloud）はKubernetes・OpenStack等のOSSで構成。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：AmebaのフロントエンドではReact・TypeScriptを採用した事例が公開されています。</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>AI/生成AI</strong>：AI Coding Agentを開発プロセスに取り込む取り組みや、Kubernetes・ArgoCD・Redis・PostgreSQLを用いたクラウドネイティブ構成の事例が公開されています。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: CyberAgent Developers Blog（公開記事）。記載は公開事例に基づく要約であり、全社・全プロダクトの構成を示すものではありません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるサイバーエージェントは、有価証券報告書で全社員平均の平均年間給与を開示しています。<strong>2025年9月期は913.8万円（平均年齢33.8歳・全社員平均）</strong>で、近年は上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（全社員平均）</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([year, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{year}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: サイバーエージェント 有価証券報告書（各年9月期）。いずれも技術職に限らない<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収はグレード・職種・成果により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">エンジニア職に限定した提示年収レンジは、公式に確認できる一次情報が乏しいため本ページでは断定を避けています。実際の提示レンジは募集ポジション・グレードにより幅があるため、転職エージェント経由で個別の求人ごとに確認することを推奨します。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            中途採用の選考は、公式採用ページまたは転職エージェント経由での応募からスタートします。公開情報をもとにした一般的な流れは以下の通りです。最新の選考内容は<a href="https://www.cyberagent.co.jp/careers/midcareer/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式中途採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>エントリー（公式採用ページ／エージェント経由）</li>
            <li>書類選考（職務経歴書・レジュメ。職種により適性検査を併用する場合あり）</li>
            <li>カジュアル面談（エンジニア職で実施される場合あり）</li>
            <li>面接（複数回。技術・カルチャー両面を確認）</li>
            <li>オファー</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: サイバーエージェント公式採用ページおよび公開された選考情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報や口コミプラットフォームの傾向から、面接で確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>実務での開発経験と、担ってきたロール・裁量の具体性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術選定や設計上の意思決定を自分の言葉で説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>事業・プロダクトへの当事者意識とカルチャーフィット</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術的アウトプット（ブログ・登壇・OSS・個人開発）の有無</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              サイバーエージェントは平均年齢33.8歳（2025年9月期・全社員平均）と比較的若い組織です。30代・40代のミドルエンジニアが転職する場合、<strong>「同世代と並ぶ実装者」ではなく「リード・専門性・マネジメントで価値を出せるか」</strong>が問われやすくなります。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。サイバーエージェントの全社員平均（913.8万円）はこれを大きく上回りますが、これはグレード上位層・高成果層を含む全社平均であり、入社時の提示はポジション・グレード次第です。30代・40代は「今のグレードでいくらか」を個別求人で確認するのが現実的です。
            </p>
            <p>
              また、配属部署によって働き方・残業に差があるという口コミ傾向があるため、面談時にチームの開発スタイルやオンコール体制を確認しておくと安心です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて確認してください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サイバーエージェント転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが速く実務経験者への提案数が多い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。直接応募・カジュアル面談中心。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">サイバーエージェントへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ エンジニア転職ガイド", href: "/company/mercari/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
              { name: "LINEヤフー エンジニア転職ガイド", href: "/company/line-yahoo/" },
              { name: "楽天グループ エンジニア転職ガイド", href: "/company/rakuten/" },
              { name: "技術面接の対策", href: "/knowledge/tech-interview/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
