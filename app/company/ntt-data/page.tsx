import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "NTTデータ エンジニア転職ガイド【2026年】年収・選考フロー",
  description:
    "NTTデータへのエンジニア転職を解説。有報の平均年収(2025年3月期)、国内最大級SIerの採用特徴、公式採用ページの選考フロー、口コミ傾向、30代・40代の狙い目を出典付きでまとめました。",
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
  ["企業名", "株式会社NTTデータグループ"],
  ["業種", "システムインテグレーション・ITサービス"],
  ["上場区分", "東証プライム上場（NTTグループ）"],
  ["平均年収", "923万円（2025年3月期 有価証券報告書・全社員平均、平均年齢39.7歳）"],
  ["連結売上収益", "約4兆6,387億円（2025年3月期）"],
  ["本社所在地", "東京都江東区"],
  ["主要顧客領域", "金融・公共・通信・法人（社会インフラ系）"],
];

const features = [
  {
    h: "社会インフラを支える大規模プロジェクト",
    p: "金融（銀行・証券・保険）、公共（官公庁・自治体）、通信など、社会インフラを支えるミッションクリティカルなシステム開発が中心です。数十億〜数百億円規模のプロジェクトも珍しくありません。",
  },
  {
    h: "キャリア採用を注力施策として拡大",
    p: "NTTデータはキャリア採用を継続的に強化しており、転職メディアの解説では採用者に占めるキャリア採用の比率が高まっているとされています。SE・PM職、コンサル職、R&D職など幅広い職種カテゴリで募集しています（公式 経験者採用情報）。",
  },
  {
    h: "クラウド・データ領域の専門職の整備",
    p: "「ITスペシャリスト（クラウド）」「アプリケーションスペシャリスト（データサイエンス領域）」など、専門領域ごとの職種・キャリアパスが用意され、従来のSIに加えてクラウドネイティブ開発やデータ基盤構築の比重が増えています。",
  },
];

const salaryRows: [string, string][] = [
  ["全社員平均年収（2025年3月期）", "923万円（平均年齢39.7歳）"],
  ["出典", "NTTデータグループ 有価証券報告書（2025年3月期）に基づく公表値"],
];

const flow = [
  "エントリー（公式 経験者採用サイト／エージェント経由）",
  "書類選考",
  "一次面接（原則オンライン）",
  "適性試験・最終面接（最終は原則対面の例あり）",
  "オファー（条件提示）→ 内定",
];

const faqs = [
  {
    q: "NTTデータのエンジニア転職の難易度は？",
    a: "国内最大級のSIerで人気が高く、転職メディアでは難易度は高めと評されることが多いです。大規模SIやPMO/PM経験、金融・公共・通信のドメイン知識、クラウド資格などがあると有利です。出典：talentsquare等の転職メディア解説。",
  },
  {
    q: "NTTデータの平均年収はいくら？",
    a: "2025年3月期の有価証券報告書に基づく公表値で全社員平均923万円（平均年齢39.7歳）です。これは全社員平均であり、エンジニア職個別の年収レンジを示すものではありません。",
  },
  {
    q: "選考フローはどうなっている？",
    a: "公式採用情報・転職メディアによると、書類選考→一次面接（オンライン）→適性試験・最終面接→オファーという流れが一般的です。グループ会社により詳細は異なります。",
  },
  {
    q: "SIerだがモダンな開発もできる？",
    a: "近年はクラウドネイティブ開発・データ分析基盤・DXの比重が増えており、クラウド専門職も整備されています。ただし配属プロジェクトにより技術領域は大きく異なります。",
  },
  {
    q: "福利厚生は？",
    a: "口コミプラットフォームではNTTグループならではの福利厚生の充実を評価する声が多く見られます。テレワーク・フレックス・短時間勤務など多様な働き方の制度が整っているとされています。",
  },
  {
    q: "残業やワークライフバランスは？",
    a: "OpenWork等の口コミプラットフォームでは、ワークライフバランスを評価する声がある一方、プロジェクトによっては仕事量が多いとの声も見られ、配属次第という傾向です。",
  },
  {
    q: "SIerからWeb系も検討すべき？",
    a: "安定と大規模案件はNTTデータの強みですが、内製・モダン志向ならWeb系も比較対象になります。違いは「SIerからWeb系への転職」の解説をご覧ください。",
  },
  {
    q: "どのエージェントを使うべき？",
    a: "大手SIerの取引実績が豊富なマイナビIT AGENT・doda(IT)、IT特化でDX/クラウド系に強いレバテックキャリアの併用が現実的です。",
  },
];

export default function NttDataCompanyPage() {
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
      <ArticleJsonLd title="NTTデータ エンジニア転職ガイド" description="NTTデータへのエンジニア転職を解説。有報の平均年収(2025年3月期)、選考フロー、口コミ傾向を出典付きでまとめました。" url="/company/ntt-data/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "NTTデータ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">NTTデータ エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 国内最大級SIer・グローバルITサービス企業</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          NTTデータは、金融・公共・通信といった社会インフラを支える国内最大級のSIerです。本記事では、有価証券報告書の平均年収、公式採用ページの選考フロー、口コミの傾向を出典付きで整理し、30代・40代エンジニアが転職を判断する材料をまとめます。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["NTTデータグループ 有価証券報告書（2025年3月期）", "NTTデータ 経験者採用情報（公式）", "OpenWork等の口コミプラットフォーム", "厚生労働省 job tag", "経済産業省 IT人材需給調査（2019年公表）"]} />

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
              <strong>結論：</strong>NTTデータは「社会インフラ級の大規模案件」と「安定した処遇（全社員平均923万円／2025年3月期 有報）」を両立したいエンジニアに向く企業です。人気が高く難易度は高めですが、キャリア採用は注力施策として拡大しています。
            </p>
            <ul className="space-y-1.5 text-sm text-slate-600">
              <li>・<strong>向いている人</strong>：大規模SI／PMO・PM経験者、金融・公共・通信のドメイン経験者、安定基盤で長期的にキャリアを築きたい人</li>
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
            NTTデータは案件・グループ会社により技術スタックが大きく異なります。公式採用情報・職種紹介で示される代表的な領域は以下の通りです。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>言語：Java を中心とするエンタープライズ開発、データ処理系</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド：AWS / Azure / Google Cloud（マネージドサービス活用）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>データ基盤：ビッグデータ処理（例：AWS EMR、Google Cloud Dataproc 等）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>専門職：ITスペシャリスト（クラウド）、データサイエンス領域</li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">※具体的な使用技術は各求人票・職種紹介が一次情報です。応募前にご確認ください。</p>
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
            参考までに、IT職全体の市場水準としては、レバテックの2025年公表値で正社員SEの30代平均が約499万円、40代平均が約618万円とされています。NTTデータの全社員平均923万円はこれを上回りますが、管理職等を含む全社員平均である点に注意してください。エンジニア職の実際の提示額は求人票・オファー面談で確認しましょう。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-sm text-slate-600 mb-4">公式採用情報・転職メディアの解説に基づく一般的な流れです（グループ会社・職種により異なります）。</p>
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
            公開情報・口コミの傾向から、面接では次のような点が確認されやすいと考えられます（傾向の整理であり、質問内容の断定ではありません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>大規模プロジェクトでの役割・推進経験の具体性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>PMO/PMやマネジメントの素養</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>金融・公共・通信などのドメイン理解</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>チーム・顧客とのコミュニケーション力</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">※具体的な質問内容は時期・面接官・ポジションで変わります。実体験談の創作は行っていません。</p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、NTTデータについて次のような傾向の声が見られます（原文の転載ではなく傾向の要約です）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-2">良い傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>・福利厚生が非常に充実しているとの評価</li>
                <li>・優秀な社員が多く学べる環境という声</li>
                <li>・テレワーク等の多様な働き方の制度が整う</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる傾向の声</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li>・プロジェクトによっては仕事量が多い</li>
                <li>・成長機会は配属・案件により個人差</li>
                <li>・大企業ゆえの調整・手続きの多さの指摘</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork等の口コミプラットフォームに見られる傾向の要約。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代のミドルエンジニアにとってNTTデータは、これまでの大規模SI・PMO/PM・ドメイン経験を活かしやすく、安定基盤で長期的にキャリアを築ける選択肢です。キャリア採用が注力施策として拡大しているため、即戦力としての中途市場価値を評価してもらいやすい時期と言えます。
            </p>
            <p>
              一方、コードを書き続ける現場志向の人には、規模が大きい分マネジメント・調整業務の比重が上がる点が合うか確認が必要です。年収の絶対額（全社員平均923万円）は高水準ですが全社員平均なので、自分の等級・提示額はオファー面談で必ず確認しましょう。年代別の相場は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">NTTデータ転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手SIerの求人が充実。書類添削・面接対策が手厚いと評判。" },
              { name: "doda(IT)", href: "/review/doda-it/", desc: "国内最大級の求人数。NTTグループ各社の求人を幅広く網羅。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でSIerのDX部門・クラウド系ポジションの提案に強み。" },
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
          <h2 className="text-xl font-bold mb-3">NTTデータへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手SIerへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/mynavi-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "富士通 の転職ガイド", href: "/company/fujitsu/" },
              { name: "日立製作所 の転職ガイド", href: "/company/hitachi/" },
              { name: "野村総合研究所 の転職ガイド", href: "/company/nri/" },
              { name: "アクセンチュア の転職ガイド", href: "/company/accenture/" },
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
