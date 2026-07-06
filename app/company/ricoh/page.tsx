import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/ricoh/" },
  title: "リコーの年収は平均860万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "リコーへのエンジニア転職を実データで解説。有価証券報告書の平均年収860万円（2025年3月期・全社員平均）、複合機からデジタルサービスへの転換に伴うソフトウェア・クラウド・AIの募集職種、選考フロー、30代40代の現実までまとめました。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "802万円"],
  ["2022年3月期", "810万円"],
  ["2023年3月期", "831万円"],
  ["2024年3月期", "848万円"],
  ["2025年3月期", "860万円"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社リコー（東証プライム・7752）"],
  ["事業領域", "デジタルサービス（複合機・プリンター、ITサービス、業務プロセス変革支援）等"],
  ["平均年間給与", "860万円（2025年3月期 有価証券報告書・提出会社の全社員平均）"],
  ["平均年齢", "45.4歳（2025年3月期 有価証券報告書・提出会社）"],
  ["本社所在地", "東京都大田区"],
  ["技術領域（公式採用情報）", "組込み／アプリケーション開発、クラウド基盤、データ分析・AI、Web/アプリ、セキュリティ"],
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
    q: "リコーのエンジニア選考フローは？",
    a: "公式キャリア採用ページによると、原則「募集要項の確認・応募」「書類選考」「適性検査」「面接（複数回）」「リファレンス確認」「内定」という流れです。職種・時期により選考回数や内容は変動します。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "リコーの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社（株式会社リコー単体）の平均年間給与は860万円、平均年齢は45.4歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・役割により異なります。",
  },
  {
    q: "リコーはどんな技術領域でエンジニアを募集していますか？",
    a: "公式採用情報によると、複合機・プリンター向けの組込みソフトウェア開発、クラウドサービス基盤、データ分析・AIによる情報活用、Web/アプリ、業務アプリケーション、セキュリティなど、複合機メーカーからデジタルサービス企業への転換に沿った幅広い領域で募集があります。配属領域により使用技術は異なります。",
  },
  {
    q: "リコーは複合機メーカーですがソフトウェアエンジニアの需要はありますか？",
    a: "リコーは複合機・プリンターの会社からデジタルサービスの会社への構造転換を進めており、デジタルサービス技術本部などでソフトウェア・クラウド・データ/AI人材を強化しています。ハードウェアに閉じない、SaaS・クラウド・データ活用領域のエンジニア需要が高まっています。",
  },
  {
    q: "リコーの働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、大企業らしい制度の整備や在宅勤務などの柔軟な働き方を評価する声がある一方、事業転換期ゆえのスピード感や組織風土に関する意見も見られます（2026年6月時点の口コミ傾向）。実態は部門により異なります。",
  },
  {
    q: "リコーへの転職難易度は高いですか？",
    a: "大企業として安定性が高く、デジタル人材を積極採用しているため、該当領域の実務経験があれば挑戦の余地は十分にあります。一方で平均年齢が高め（45.4歳）で組織が大きいため、即戦力としての専門性とチームでの推進力が問われます。",
  },
  {
    q: "30代・40代でもリコーに転職できますか？",
    a: "提出会社の平均年齢は45.4歳と相対的に高く、ミドル層の中途採用も現実的です。組込み・クラウド・データ/AIなど自身の専門領域の実績と、大規模組織でのプロジェクト推進経験があると評価されやすい傾向です。",
  },
];

export default function RicohCompanyPage() {
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
      <ArticleJsonLd title="リコー エンジニア転職ガイド" description="リコーへのエンジニア転職を実データで解説。有価証券報告書の平均年収860万円（2025年3月期・全社員平均）、複合機からデジタルサービスへの転換に伴うソフトウェア・クラウド・AIの募集職種、選考フロー、30代40代の現実までまとめました。" url="/company/ricoh/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "組込みの転職ガイド", href: "/skill/embedded/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "リコー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リコー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 複合機メーカーからデジタルサービス企業へ転換する大手のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          リコーは、複合機・プリンターを源流に、ITサービスや業務プロセス変革支援を含む「デジタルサービスの会社」への構造転換を進める東証プライム上場（証券コード7752）の電機・精密大手です。本ページでは、有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "リコー 有価証券報告書（2025年3月期）",
            "リコー公式 採用ページ（キャリア採用・職種紹介）",
            "リコーグループ各社の採用情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              リコーは<strong>ハードウェア（複合機・画像）の強みを土台に、クラウド・データ・AIによるデジタルサービスへ事業を移行している大手メーカー</strong>です。組込みからSaaS・クラウドまで幅広い技術領域があり、安定基盤の中で「製造業のソフトウェア化」に関わりたいエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：組込み／クラウド／データ・AIの実務経験があり、大企業の事業変革を内側から推進したいエンジニア</li>
              <li>● <strong>向いていない人</strong>：スタートアップ的な裁量・スピードと、年功色の薄いフラットな環境を最優先する人</li>
              <li>● <strong>30代・40代</strong>：平均年齢45.4歳と高めで、専門性と推進力があればミドル中途の枠は現実的</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書に基づく提出会社（株式会社リコー単体）の全社員平均値。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">複合機からデジタルサービスへの構造転換</h3>
              <p className="text-sm text-petrol-deep">リコーは複合機・プリンターの会社から「デジタルサービスの会社」への転換を掲げ、デジタルサービス技術本部などでソフトウェア・クラウド・データ/AI人材を強化しています。ハードウェアに閉じないSaaS・クラウド領域の採用が拡大しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">組込みから業務アプリ・データ活用まで幅広い領域</h3>
              <p className="text-sm text-petrol-deep">複合機向けの組込みファームウェア開発から、クラウドサービス基盤、業務アプリケーション、データ分析・AIによる情報活用まで、レイヤーの異なる技術職が公式採用情報で募集されています（配属により使用技術は異なります）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">大手の安定基盤と制度</h3>
              <p className="text-sm text-petrol-deep">グローバルに展開する電機・精密大手として安定した事業基盤を持ち、在宅勤務など柔軟な働き方の制度も整備されています（口コミ傾向）。事業変革期ならではの推進力を求められる場面もあります。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            リコーは公式採用情報（職種紹介・キャリア採用ページ、2026年6月時点）で、デジタルサービスを支える技術職を募集しています。主な領域は以下の通りです。具体的な使用技術は配属プロダクト・募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>組込みソフトウェア</strong>：複合機・プリンター等の組込みファームウェア開発（C/C++、RTOS等）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>アプリケーション／クラウド</strong>：クラウドサービス基盤、業務アプリケーション、Web/アプリ開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ・AI</strong>：データ分析・AIによる情報活用、デジタル技術の社会実装</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>IT基盤・セキュリティ</strong>：グループIT基盤の構築・運用、セキュリティ</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>企画・PM</strong>：IT企画／プロジェクトマネジメント、サービス企画</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: リコー公式 採用ページ（職種紹介・キャリア採用、2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業であるリコーは、有価証券報告書で提出会社（株式会社リコー単体）の平均年間給与を開示しています。<strong>2025年3月期は860万円（平均年齢45.4歳・全社員平均）</strong>で、近年は緩やかな上昇傾向にあります。
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
          <p className="text-xs text-slate-400 mb-4">出典: リコー 有価証券報告書（各年3月期）。いずれも技術職に限らない提出会社（単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・役割により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は提出会社単体の全社員平均であり、エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            リコーのキャリア採用ページで公開されている一般的な流れです。最新の内容は<a href="https://jp.ricoh.com/jobs/recruit/careers" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集要項の確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>適性検査</li>
            <li>面接（複数回）</li>
            <li>リファレンス確認</li>
            <li>内定</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: リコー公式 キャリア採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>募集領域（組込み／クラウド／データ・AI等）における実務経験と専門性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模組織・複数部門との協働でプロジェクトを進める推進力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>デジタルサービスへの事業転換に共感し、変化に前向きな姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>製造業のソフトウェア化・ハードとソフトの橋渡しへの理解</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              リコーは提出会社の平均年齢45.4歳（2025年3月期・全社員平均）と、メーカーらしく年齢層が高めです。そのため30代・40代のミドルエンジニアにとって、年齢自体がハンデになりにくく、<strong>組込み・クラウド・データ/AIといった専門領域の実績があればむしろ即戦力として歓迎されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。リコーの全社員平均（860万円）はこれを上回りますが、これは管理職・上位等級を含む全社平均であり、入社時の提示は等級・役割次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              複合機・画像という製造業の強みと、クラウド・データ活用というソフトウェアの世界の橋渡しができる人材は希少です。<Link href="/industry/manufacturing/" className="text-petrol hover:underline">製造業のエンジニア転職</Link>や<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リコー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。大手メーカーのデジタル職求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・外資・ハイクラスに強く、メーカーの管理職・専門職求人に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
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
          <h2 className="text-xl font-bold mb-3">リコーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーのデジタル職転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "キヤノン エンジニア転職ガイド", href: "/company/canon/" },
              { name: "富士フイルム エンジニア転職ガイド", href: "/company/fujifilm/" },
              { name: "パナソニック エンジニア転職ガイド", href: "/company/panasonic/" },
              { name: "製造業のエンジニア転職", href: "/industry/manufacturing/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
