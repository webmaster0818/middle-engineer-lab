import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/fujitsu/" },
  title: "富士通 エンジニア転職ガイド【2026年】年収・ジョブ型採用",
  description:
    "富士通へのエンジニア転職を解説。有報の平均年収(2025年3月期)、ジョブ型採用の特徴、公式採用ページの選考フロー、口コミ傾向、30代・40代の狙い目を出典付きでまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんな人向きか" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "tech", label: "技術スタック・領域" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basic: [string, string][] = [
  ["企業名", "富士通株式会社"],
  ["業種", "総合ITベンダー・SIer"],
  ["上場区分", "東証プライム上場"],
  ["平均年収", "929万円（2025年3月期 有価証券報告書・全社員平均、平均年齢43.1歳）"],
  ["従業員数", "連結で十数万名規模（公式IR）"],
  ["本社所在地", "東京都港区"],
  ["主要領域", "DX（Fujitsu Uvance）・クラウド・AI・セキュリティ・コンピューティング"],
];

const features = [
  {
    h: "ジョブ型人材マネジメントによる専門性重視",
    p: "富士通はジョブ型人材マネジメントを掲げ、新卒・キャリアの区分にこだわらず、必要な職務を担う人材を計画数を定めず通年でフレキシブルに採用する方針を公式に打ち出しています。専門性に応じた処遇設計が特徴です（公式プレスリリース）。",
  },
  {
    h: "Fujitsu Uvanceを軸にした事業変革",
    p: "DXブランド「Fujitsu Uvance」を中心に、コンサルティング・ビジネスアプリケーションに加え、AIやコンピューティングなどの最先端テクノロジー人材を重点的に獲得する方針です。従来のSIからの転換が進んでいます。",
  },
  {
    h: "管理職・リーダークラスのキャリア採用を強化",
    p: "公式採用方針では、ビジネス拡大やテクノロジー開発をリードできる優れた経験を持つ人材を、管理職やリーダークラスで採用強化するとしています。ミドル層の即戦力採用に積極的です。",
  },
];

const salaryRows: [string, string][] = [
  ["全社員平均年収（2025年3月期）", "929万円（平均年齢43.1歳）"],
  ["出典", "富士通株式会社 有価証券報告書（2025年3月期）に基づく公表値"],
];

const flow = [
  "エントリー（公式キャリア採用サイト／エージェント経由・通年募集）",
  "書類選考（応募ポジションの職務適合を確認）",
  "適性検査・Webテスト",
  "面接 複数回（一般に2〜3回。My Purpose=志向の言語化が重視される）",
  "オファー（条件提示）→ 内定",
];

const faqs = [
  {
    q: "富士通のエンジニア転職の難易度は？",
    a: "東証プライム上場の大手で人気が高く、転職メディアでは難易度は高めと評されることが多いです。ジョブ型採用のため、応募ポジションの専門性に合致した経験が重視されます。出典：talentsquare等の転職メディア解説。",
  },
  {
    q: "富士通の平均年収はいくら？",
    a: "2025年3月期の有価証券報告書に基づく公表値で全社員平均929万円（平均年齢43.1歳）です。これは全社員平均であり、エンジニア職個別の年収レンジを示すものではありません。ジョブ型のため職務・等級により幅があります。",
  },
  {
    q: "選考フローはどうなっている？",
    a: "公式採用情報・転職メディアによると、書類選考→適性検査→面接複数回（一般に2〜3回）→オファーという流れが一般的です。面接では入社後の貢献プラン（My Purpose）の言語化が重視されるとされています。",
  },
  {
    q: "富士通のDX推進はどう進んでいる？",
    a: "Fujitsu Uvanceブランドの下、DXコンサルティング、クラウドネイティブ開発、AI/データ活用を推進しています。従来のSI事業からモダン領域への転換が進行中です。",
  },
  {
    q: "技術的な強みは？",
    a: "スーパーコンピュータ「富岳」の開発実績、量子コンピュータ研究、5G/Beyond 5G、サイバーセキュリティなど、基礎研究から応用まで幅広い技術力を持つ数少ない国内企業です。",
  },
  {
    q: "ワークライフバランスは？",
    a: "OpenWork等の口コミプラットフォームでは、テレワークが可能で柔軟な働き方ができるとの声がある一方、労働環境はプロジェクトによる差が大きいとの指摘も見られます。",
  },
  {
    q: "SIerからWeb系も検討すべき？",
    a: "富士通は安定と基礎研究が強みですが、内製・モダン志向ならWeb系も比較対象です。違いは「SIerからWeb系への転職」の解説をご覧ください。",
  },
  {
    q: "どのエージェントを使うべき？",
    a: "大手ITベンダーの求人に強いdoda(IT)・マイナビIT AGENT、IT特化でDX/クラウド系に強いレバテックキャリアの併用が現実的です。",
  },
];

export default function FujitsuCompanyPage() {
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
      <ArticleJsonLd title="富士通 エンジニア転職ガイド" description="富士通へのエンジニア転職を解説。有報の平均年収(2025年3月期)、ジョブ型採用、選考フロー、口コミ傾向を出典付きでまとめました。" url="/company/fujitsu/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "富士通" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">富士通 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | DX推進と最先端コンピューティングの総合ITベンダー</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】富士通の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 富士通株式会社の平均年収は929万円です（2025年3月期 有価証券報告書・全社員平均、平均年齢43.1歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年収 929万円（2025年3月期 有報）。全社員平均で、エンジニア職個別の年収レンジを示すものではありません。</li><li>・ジョブ型人材マネジメントを採用しており、職務・等級により金額に幅があります。</li><li>・エンジニア職の実際の提示額は求人票（ジョブディスクリプション）・オファーで確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          富士通は、DXブランド「Fujitsu Uvance」を軸にSIからの事業変革を進める総合ITベンダーです。ジョブ型人材マネジメントによる通年採用が特徴。本記事では、有価証券報告書の平均年収、公式採用ページの選考フロー、口コミの傾向を出典付きで整理します。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["富士通株式会社 有価証券報告書（2025年3月期）", "富士通 キャリア採用情報／ジョブ型採用方針プレスリリース（公式）", "OpenWork等の口コミプラットフォーム", "厚生労働省 job tag", "経済産業省 IT人材需給調査（2019年公表）"]} />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんな人向きか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              <strong>結論：</strong>富士通は「ジョブ型で専門性を評価され、DX・先端コンピューティングに関わりたい」エンジニアに向く企業です。全社員平均929万円（2025年3月期 有報）と処遇は高水準。専門性に合致した経験があれば、年齢に関係なく評価されやすい制度設計です。
            </p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・<strong>向いている人</strong>：クラウド/AI/セキュリティ等の専門性を持つ人、上流〜PM経験者、ジョブ型で処遇されたい人</li>
              <li>・<strong>向いていない人</strong>：少人数で内製・モダン技術を高速に回したい人（<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>も検討）</li>
              <li>・<strong>難易度の目安</strong>：転職メディアでは難易度は高めと評されます。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basic.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年収は有価証券報告書（2025年3月期）に基づく全社員平均で、職種別の年収を示すものではありません。</p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{f.h}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{f.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・領域</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            富士通はジョブ型のため職務ごとに求められる技術が明確です。公式の採用方針・求人で示される代表的な領域は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>言語：Java / Python / C 等（業務系・基盤系で利用）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド：AWS / Azure（クラウドネイティブ開発）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>先端領域：AI／データ、セキュリティ、コンピューティング（富岳・量子等の研究）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ビジネス領域：Fujitsu Uvance（DXコンサル・ビジネスアプリ）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">※具体的な使用技術は各求人票（ジョブディスクリプション）が一次情報です。応募前にご確認ください。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {salaryRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            参考までに、IT職全体の市場水準としては、レバテックの2025年公表値で正社員SEの30代平均が約499万円、40代平均が約618万円とされています。富士通の全社員平均929万円はこれを上回りますが、管理職等を含む全社員平均です。ジョブ型のため、エンジニア職の実際の提示額は求人票（ジョブディスクリプション）・オファーで確認しましょう。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-sm text-slate-600 mb-4">公式採用情報・転職メディアの解説に基づく一般的な流れです（ポジションにより異なります）。</p>
          <ol className="space-y-3">
            {flow.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span className="text-sm text-slate-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            公開情報・口コミの傾向から、面接では次のような点が確認されやすいと考えられます（傾向の整理であり質問の断定ではありません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>応募ポジション（ジョブ）への専門性・適合度</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>入社後の貢献プラン・志向（My Purpose）の言語化</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>クラウド/AI/セキュリティ等の実務経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>チーム・顧客とのコミュニケーション力</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">※具体的な質問内容は時期・面接官・ポジションで変わります。実体験談の創作は行っていません。</p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、富士通について次のような傾向の声が見られます（原文の転載ではなく傾向の要約です）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-2">良い傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>・テレワークが可能で柔軟に働けるとの声</li>
                <li>・育児関連の制度・福利厚生が手厚いとの評価</li>
                <li>・大規模SIの経験を積める基盤がある</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li>・労働環境はプロジェクトによる差が大きい</li>
                <li>・評価制度や事業展望への課題を指摘する声</li>
                <li>・大企業ゆえの組織変革途上という指摘</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork等の口コミプラットフォームに見られる傾向の要約。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代のミドルエンジニアにとって富士通は、ジョブ型採用と「管理職・リーダークラスのキャリア採用強化」という方針が追い風です。特定領域（クラウド/AI/セキュリティ等）の専門性や上流・PM経験を持つ人は、年齢ではなく職務適合で評価されやすく、即戦力ポジションを狙いやすいと言えます。平均年齢43.1歳という有報の数字からも、ミドル層が中核の企業であることが分かります。
            </p>
            <p>
              一方、労働環境がプロジェクトによる差が大きいという口コミ傾向があるため、配属予定の領域・チームの働き方は面談で確認しましょう。年収（全社員平均929万円）は高水準ですが全社員平均なので、ジョブごとの提示額をオファーで必ず確認を。年代別の相場は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">富士通転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda(IT)", href: "/review/doda-it/", desc: "国内最大級の求人数。大手ITベンダーの各事業部門の求人を網羅。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手SIerへの転職支援に強く、書類添削・面接対策が手厚い。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でDX部門・クラウド系ポジションの提案に強み。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数併用のコツ</Link>を参照。</p>
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
          <h2 className="text-xl font-bold mb-3">富士通への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手ITベンダーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ の転職ガイド", href: "/company/ntt-data/" },
              { name: "ソニーグループの転職ガイド", href: "/company/sony/" },
              { name: "日立製作所 の転職ガイド", href: "/company/hitachi/" },
              { name: "野村総合研究所 の転職ガイド", href: "/company/nri/" },
              { name: "パナソニック の転職ガイド", href: "/company/panasonic/" },
              { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" },
              { name: "40代エンジニアの年収", href: "/knowledge/salary-40s/" },
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
