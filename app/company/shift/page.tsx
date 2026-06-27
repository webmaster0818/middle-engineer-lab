import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SHIFTの年収は平均684万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "株式会社SHIFT（3697）へのエンジニア転職を実データで解説。有価証券報告書の平均年収684万円（2025年8月期・全社員平均）、ソフトウェアテスト/品質保証(QA)中心の事業、未経験からの育成、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年8月期", "591万円"],
  ["2022年8月期", "604万円"],
  ["2023年8月期", "643万円"],
  ["2024年8月期", "669万円"],
  ["2025年8月期", "684万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社SHIFT（東証プライム・3697）"],
  ["事業領域", "ソフトウェアの品質保証（QA）・ソフトウェアテスト、ソフトウェア開発、ITコンサルティング"],
  ["平均年間給与", "684万円（2025年8月期 有価証券報告書・提出会社の全社員平均）"],
  ["平均年齢", "38.0歳（2025年8月期 有価証券報告書・提出会社）"],
  ["平均勤続年数", "3.2年（2025年8月期 有価証券報告書・提出会社）"],
  ["従業員数", "約6,201名（2025年8月期 有価証券報告書・提出会社単体）"],
  ["本社所在地", "東京都港区"],
  ["技術領域（公式採用情報）", "ソフトウェアテスト・品質保証（QA）、テスト自動化、ソフトウェア開発、DX・AI関連サービス"],
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
    q: "SHIFTの平均年収はいくらですか？",
    a: "2025年8月期の有価証券報告書によると、提出会社（株式会社SHIFT単体）の平均年間給与は684万円、平均年齢は38.0歳、平均勤続年数は3.2年です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は職務・等級・評価により異なります。SHIFTは年収が上昇傾向で、近年は毎期増加しています。",
  },
  {
    q: "SHIFTはどんな事業をしている会社ですか？",
    a: "SHIFTはソフトウェアの品質保証（QA）・ソフトウェアテストを軸に、ソフトウェア開発やITコンサルティングまで手がける東証プライム上場（証券コード3697）企業です。独自のテスト方法論と管理ツールで「開発とテストの分業化」を推進し、近年はソフトウェアテストから品質保証全体、さらに上流のコンサルティング・DX領域へ事業を拡大しています。",
  },
  {
    q: "SHIFTは未経験エンジニアでも採用されますか？",
    a: "SHIFTは品質保証（QA）エンジニアを中心に大規模な採用を継続しており、IT未経験・異業種からの応募も受け付けています。独自の採用試験（適性を測るテスト）と入社後の育成体制が特徴とされ、IT業界でのキャリアチェンジの入口になりやすい一方、職種・ポジションにより求められる経験は異なります。最新の応募条件は公式採用ページでご確認ください。",
  },
  {
    q: "SHIFTの技術領域・使用技術は？",
    a: "公式採用情報によると、ソフトウェアテスト・品質保証（QA）、テスト自動化、ソフトウェア開発、DX・AI関連サービスなどの領域で募集があります。品質保証エンジニアはテスト設計・テスト管理・設計書レビューなどを担い、開発系ポジションでは各種言語・フレームワークの実務経験が問われます。具体的な使用技術は募集ポジションにより異なります。",
  },
  {
    q: "SHIFTの働き方・評判は？",
    a: "OpenWork等の口コミプラットフォームでは、成長スピードや裁量、評価制度の明確さを評価する声が見られる一方、プロジェクトや繁忙期により業務負荷が変動するという意見もあります（2026年6月時点の口コミ傾向）。平均勤続年数が3.2年と比較的短い点は、急拡大企業の特性として理解しておくとよいでしょう。実態は部門・プロジェクトにより異なります。",
  },
  {
    q: "SHIFTへの転職難易度は高いですか？",
    a: "品質保証（QA）職は大規模採用が続いており、IT業界への入口としては挑戦しやすい部類です。一方で、テスト自動化・開発・上流コンサルなど専門性が高いポジションは実務経験が問われます。論理的思考力・几帳面さ・品質への当事者意識が評価されやすい傾向です。",
  },
  {
    q: "30代・40代でもSHIFTに転職できますか？",
    a: "提出会社の平均年齢は38.0歳とミドル層が中心で、30代・40代の中途採用は現実的です。前職のドメイン知識（金融・製造・流通など）や、テスト・品質管理・プロジェクトマネジメントの経験があると、上流工程やリーダー職で評価されやすい傾向です。",
  },
];

export default function ShiftCompanyPage() {
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
      <ArticleJsonLd title="SHIFT エンジニア転職ガイド" description="株式会社SHIFTへのエンジニア転職を実データで解説。有価証券報告書の平均年収684万円（2025年8月期・全社員平均）、ソフトウェアテスト/品質保証(QA)中心の事業、選考フロー、30代40代の現実までまとめました。" url="/company/shift/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "業界別 年収ランキング", href: "/salary/industry-salary/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "SHIFT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SHIFT エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ソフトウェアの品質保証（QA）を軸に急成長する東証プライム企業</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社SHIFTは、ソフトウェアの品質保証（QA）・ソフトウェアテストを中核に、ソフトウェア開発やITコンサルティングまで手がける東証プライム上場（証券コード3697）企業です。独自のテスト方法論と「開発とテストの分業化」を武器に急成長し、エンジニア・QA人材を大規模に採用してきました。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社SHIFT 有価証券報告書（2025年8月期）",
            "SHIFT公式 キャリア採用ページ（recruit.shiftinc.jp）",
            "SHIFT公式 サービス・会社情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              SHIFTは<strong>ソフトウェアの品質保証（QA）を事業の柱に据え、未経験採用から専門職まで幅広く受け入れる急成長企業</strong>です。品質・テストという専門領域でキャリアを築きたい人、IT業界への入口を探すミドルに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：品質保証・テスト・プロジェクト管理に関心があり、論理的思考と几帳面さで品質に向き合えるエンジニア</li>
              <li>● <strong>向いていない人</strong>：自社プロダクトを一から作り込む開発に専念したい人、安定・低変動な環境を最優先する人</li>
              <li>● <strong>30代・40代</strong>：平均年齢38.0歳。ドメイン知識・管理経験があれば上流・リーダー職で評価されやすい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢・平均勤続年数・従業員数は2025年8月期 有価証券報告書に基づく提出会社（株式会社SHIFT単体）の値。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">品質保証（QA）を専門領域として確立</h3>
              <p className="text-sm text-petrol-deep">SHIFTはソフトウェアテスト・品質保証（QA）を独立した専門領域として事業化し、独自のテスト方法論やテスト管理ツールで「開発とテストの分業化」を推進しています。開発の傍らで片手間に行われがちだったテストを専門職として確立しており、QAエンジニアとしてキャリアを積みたい人に独自の環境があります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">独自試験と育成による大規模採用</h3>
              <p className="text-sm text-petrol-deep">SHIFTは適性を測る独自の採用試験を用い、IT未経験・異業種からの人材も含めて大規模に採用・育成してきました。従業員数は提出会社単体で約6,201名（2025年8月期）に達し、IT業界への入口としても、専門職へのステップアップの場としても機能しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">テストから上流・DX・AIへ事業拡大</h3>
              <p className="text-sm text-petrol-deep">近年はソフトウェアテストから品質保証全体、さらに上流のコンサルティングやDX・AI関連サービスへ事業を拡大しています。テスト自動化や開発、上流工程の経験を積みたいエンジニアにとって、キャリアの幅を広げやすい環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SHIFTは公式キャリア採用ページ（2026年6月時点）で、品質保証を中心とした幅広い職種を募集しています。主な領域は以下の通りです。具体的な使用技術・必須スキルは募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>品質保証（QA）・ソフトウェアテスト</strong>：テスト設計・テスト管理・設計書レビュー、テスト戦略の立案</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>テスト自動化</strong>：自動テストの設計・実装、CI/CDへの組み込み</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ソフトウェア開発</strong>：各種言語・フレームワークでの設計・実装（ポジションにより使用技術は異なる）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ITコンサルティング・DX</strong>：上流工程の品質コンサル、DX推進支援</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI・先端領域</strong>：AIを活用した品質保証・サービス開発</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: SHIFT公式 キャリア採用ページ（2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるSHIFTは、有価証券報告書で提出会社（株式会社SHIFT単体）の平均年間給与を開示しています。<strong>2025年8月期は684万円（平均年齢38.0歳・全社員平均）</strong>で、近年は毎期上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社SHIFT 有価証券報告書（各年8月期）。いずれも技術職に限らない提出会社（単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は職務・等級・評価により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は提出会社単体の全社員平均であり、QA職・開発職・上流コンサルなど職種別の公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。SHIFTは成果に応じた評価制度を掲げており、提示額は職務・等級・評価により幅があります。個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SHIFTのキャリア採用ページで公開されている一般的な流れです。最新の内容は<a href="https://recruit.shiftinc.jp/career/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集ポジションの確認・応募（エントリー）</li>
            <li>書類選考・適性試験（職種により独自試験あり）</li>
            <li>面接（複数回。職種によりスキル確認を含む）</li>
            <li>内定・条件提示</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: SHIFT公式 キャリア採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>品質・テストへの当事者意識と、論理的に物事を分解・整理する力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>これまでの業務での課題解決経験、改善を主体的に進めた経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>変化の速い環境・成長企業のスピード感への適応力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ドメイン知識（金融・製造・流通等）やプロジェクトマネジメントの経験（上流・リーダー職）</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              SHIFTは提出会社の平均年齢38.0歳（2025年8月期・全社員平均）と、ミドル層が中心の組織です。品質保証（QA）という専門領域は前職のドメイン知識を活かしやすく、30代・40代のミドルエンジニアでも<strong>テスト・品質管理・プロジェクトマネジメントの経験があれば上流・リーダー職で評価されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。SHIFTの全社員平均（684万円）はこれを上回りますが、これは管理職・上位等級を含む全社平均であり、入社時の提示は職務・等級・評価次第です。30代・40代は「自分が当てはまる職務の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              品質保証は、開発経験を持つミドルが「作る側」から「品質を守る側」へキャリアを広げる選択肢にもなります。年代別の転職事情は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、年収戦略は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SHIFT転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。QA・テスト・開発系の求人にも対応し、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラス・管理職に強く、上流コンサル・リーダー職の求人に対応。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">SHIFTへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">QA・品質保証・IT転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SCSK エンジニア転職ガイド", href: "/company/scsk/" },
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "アクセンチュア エンジニア転職ガイド", href: "/company/accenture/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
            ].map((item, i) => (
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
