import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "キヤノン エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "キヤノンへのエンジニア転職を実データで解説。有価証券報告書の平均年収865.7万円（2024年12月期・全社員平均）、組込み・画像処理・AI・ディープラーニングの募集職種、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2020年12月期", "769万円"],
  ["2021年12月期", "807万円"],
  ["2022年12月期", "822万円"],
  ["2023年12月期", "847万円"],
  ["2024年12月期", "865.7万円"],
];

const basicData: [string, string][] = [
  ["企業名", "キヤノン株式会社（東証プライム・7751）"],
  ["事業領域", "プリンティング（複合機・プリンター）、イメージング（カメラ）、メディカル、インダストリアル（半導体・FPD露光装置）等"],
  ["平均年間給与", "865.7万円（2024年12月期 有価証券報告書・提出会社の全社員平均）"],
  ["平均年齢", "44.2歳（2024年12月期 有価証券報告書・提出会社）"],
  ["本社所在地", "東京都大田区"],
  ["技術領域（公式採用情報）", "組込みソフトウェア、AI・画像処理（ディープラーニング）、3D技術、制御・通信、システム開発"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術領域・募集職種（公式採用情報ベース）"],
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
    q: "キヤノンのエンジニア選考フローは？",
    a: "公式キャリア採用（採用管理システム）経由での「応募」「書類選考」「面接（複数回）」「内定」が一般的な流れです。職種・時期により選考回数や適性検査の有無は変動します。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "キヤノンの平均年収はいくらですか？",
    a: "2024年12月期の有価証券報告書によると、提出会社（キヤノン株式会社単体）の平均年間給与は約865.7万円、平均年齢は44.2歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・職務により異なります。",
  },
  {
    q: "キヤノンはどんな技術領域でエンジニアを募集していますか？",
    a: "公式採用情報によると、複合機・プリンター・カメラ等の組込みソフトウェア（ファームウェア）開発、AI・画像処理（ディープラーニング・データマイニング・パターン認識）、高画質化・3D技術、制御・通信などの領域で募集があります。配属領域により使用技術は異なります。",
  },
  {
    q: "キヤノンの組込みエンジニアにはどんなスキルが必要ですか？",
    a: "公式求人によると、マイコン・リアルタイムOS（RTOS）を用いた組込みソフトウェア開発経験や、C・C++による製品開発の実務経験が求められる傾向です。AI・画像処理職では、ディープラーニング／機械学習／パターン認識の開発経験やPythonのスキルが重視されます。",
  },
  {
    q: "キヤノンの働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、大手メーカーらしい安定性・福利厚生を評価する声がある一方、伝統的な企業文化やものづくり中心の組織風土に関する意見も見られます（2026年6月時点の口コミ傾向）。実態は事業・部門により異なります。",
  },
  {
    q: "キヤノンへの転職難易度は高いですか？",
    a: "光学・画像・組込みといったキヤノンの中核技術領域は専門性が高く、該当分野の実務経験が重視されます。即戦力としての技術力と、製品開発の上流から下流まで関わる姿勢が問われるため、領域が合致すれば挑戦の余地は十分にあります。",
  },
  {
    q: "30代・40代でもキヤノンに転職できますか？",
    a: "提出会社の平均年齢は44.2歳と高めで、ミドル層の中途採用も現実的です。組込み・画像処理・AIなど自身の専門領域の実績と、ハードウェアと連携した製品開発の経験があると評価されやすい傾向です。",
  },
];

export default function CanonCompanyPage() {
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
      <ArticleJsonLd title="キヤノン エンジニア転職ガイド" description="キヤノンへのエンジニア転職を実データで解説。有価証券報告書の平均年収865.7万円（2024年12月期・全社員平均）、組込み・画像処理・AI・ディープラーニングの募集職種、選考フロー、30代40代の現実までまとめました。" url="/company/canon/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "キヤノン" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">キヤノン エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 光学・画像・組込みを中核とする精密大手のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          キヤノンは、複合機・プリンター、カメラ、メディカル、半導体露光装置などを手がける東証プライム上場（証券コード7751）の精密・電機大手です。光学・画像処理・組込みを中核技術とし、近年はAI（ディープラーニング）を製品に取り込む動きを強めています。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "キヤノン 有価証券報告書（2024年12月期）",
            "キヤノン公式 採用ページ（キャリア採用・職種別求人）",
            "キヤノングループ各社の採用情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              キヤノンは<strong>光学・画像・組込みという中核技術を持ち、そこにAI（ディープラーニング）・画像処理を掛け合わせて製品化する精密大手</strong>です。ハードウェアと密結合したソフトウェア開発や、画像系AIの実装に関わりたいエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：組込み（C/C++・RTOS）や画像処理・ディープラーニングの実務経験があり、ものづくりの最終製品に技術を載せたいエンジニア</li>
              <li>● <strong>向いていない人</strong>：Web系の最新フレームワークで内製SaaSを高速に回す働き方を最優先する人</li>
              <li>● <strong>30代・40代</strong>：平均年齢44.2歳と高めで、専門性があればミドル中途の枠は現実的</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2024年12月期 有価証券報告書に基づく提出会社（キヤノン株式会社単体）の全社員平均値。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">光学・画像・組込みの中核技術</h3>
              <p className="text-sm text-blue-700">複合機・カメラ・半導体露光装置など、ハードウェアと密結合したソフトウェア開発が中心です。マイコン・RTOSを用いた組込みファームウェア開発が製品の品質を支えており、C/C++での製品開発経験が評価されます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">画像系AI・ディープラーニングの実装</h3>
              <p className="text-sm text-blue-700">公式の「AI・画像処理技術開発」職では、映像/画像/ドキュメントに関するAI技術（ディープラーニング、強化学習、データマイニング）、高画質化技術、3D技術などの開発が募集されています。画像処理とAIを掛け合わせた実装力が強みになります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大手メーカーの安定基盤</h3>
              <p className="text-sm text-blue-700">グローバルに展開する精密・電機大手として安定した事業基盤と福利厚生を持ちます。製品開発の上流から下流まで幅広く携われる一方、伝統的なものづくり文化の中での開発スタイルが基本です（口コミ傾向）。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            キヤノンは公式採用情報（キャリア採用・職種別求人ページ、2026年6月時点）で、製品を支える技術職を募集しています。主な領域は以下の通りです。具体的な使用技術・必須スキルは募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>組込みソフトウェア</strong>：複合機・プリンター・カメラ等の組込みファームウェア開発（C/C++、マイコン、RTOS）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>AI・画像処理</strong>：ディープラーニング・強化学習・データマイニング・パターン認識、高画質化技術（Python等）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>3D・メディカル技術</strong>：イメージング・メディカル製品向け3D技術開発</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>制御・通信</strong>：制御ソフト、組込みネットワーク／セキュリティ、デバイスドライバー</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>システム開発</strong>：グループのITソリューション・業務システム開発（グループ会社）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: キヤノン公式 採用ページ（職種別求人・キャリア採用、2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるキヤノンは、有価証券報告書で提出会社（キヤノン株式会社単体）の平均年間給与を開示しています。<strong>2024年12月期は約865.7万円（平均年齢44.2歳・全社員平均）</strong>で、近年は上昇傾向にあります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（提出会社・全社員平均）</th>
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
          <p className="text-xs text-slate-400 mb-4">出典: キヤノン 有価証券報告書（各年12月期）。いずれも技術職に限らない提出会社（単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・職務により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は提出会社単体の全社員平均であり、エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            キヤノンのキャリア採用ページ・採用管理システムで公開されている一般的な流れです。最新の内容は<a href="https://hrmos.co/pages/canon/jobs" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集要項の確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>面接（複数回。職種により技術面接を含む）</li>
            <li>適性検査（職種・時期による）</li>
            <li>内定</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: キヤノン公式 キャリア採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>組込み（C/C++・RTOS）や画像処理・AIなど募集領域における実務経験と専門性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>製品開発の上流から下流まで関わる姿勢、品質への意識</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>ハードウェアと連携したソフトウェア開発・制約条件下での設計力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>チームでの協働姿勢とものづくりへの理解</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              キヤノンは提出会社の平均年齢44.2歳（2024年12月期・全社員平均）と、精密大手らしく年齢層が高めです。そのため30代・40代のミドルエンジニアにとって、年齢自体がハンデになりにくく、<strong>組込み・画像処理・AIといった専門領域の実績があればむしろ即戦力として歓迎されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。キヤノンの全社員平均（約865.7万円）はこれを上回りますが、これは管理職・上位等級を含む全社平均であり、入社時の提示は等級・職務次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              光学・画像という製造業の強みと、AI・ディープラーニングというソフトウェアの世界を橋渡しできる人材は希少です。<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業のエンジニア転職</Link>や<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>、<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キヤノン転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。組込み・画像系の専門職求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・外資・ハイクラスに強く、メーカーの専門職・管理職求人に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
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
          <h2 className="text-xl font-bold mb-3">キヤノンへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーの組込み・画像系転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "リコー エンジニア転職ガイド", href: "/company/ricoh/" },
              { name: "富士フイルム エンジニア転職ガイド", href: "/company/fujifilm/" },
              { name: "ソニー エンジニア転職ガイド", href: "/company/sony/" },
              { name: "製造業のエンジニア転職", href: "/industry/manufacturing/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
