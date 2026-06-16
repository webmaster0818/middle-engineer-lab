import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "30代エンジニアの年収相場【2026年データで解説】";
const DESCRIPTION =
  "30代ITエンジニアの年収相場を公的統計と転職エージェント公表値で解説。レバテック公表の30代平均約499万円・年収1,000万円以上8.01%などを時点付きで紹介し、年収アップの戦略とチェックリストをまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：30代の年収相場と上げ方" },
  { id: "data", label: "30代エンジニアの年収データ（出典付き）" },
  { id: "factors", label: "30代の年収を左右する4つの要因" },
  { id: "strategy", label: "30代で年収を上げる5つの戦略" },
  { id: "checklist", label: "年収アップに動くべき人チェックリスト" },
  { id: "negotiation", label: "30代の年収交渉のコツ" },
  { id: "midlife", label: "30代という年代の独自事情" },
  { id: "faq", label: "よくある質問" },
];

const salaryData = [
  { age: "20代", salary: "約378万円", note: "経験を積みながら市場価値を高める時期" },
  { age: "30代", salary: "約499万円", note: "キャリアの分岐点。専門性かマネジメントかで差が広がる" },
  { age: "40代", salary: "約618万円", note: "役職・専門性が反映され、最も差が開く年代" },
  { age: "50代", salary: "約685万円", note: "管理職・高度専門職が牽引" },
];

const factors = [
  {
    title: "専門領域とスキルの希少性",
    desc: "需要に対して供給が少ないスキル領域ほど高い評価を受けやすい傾向があります。クラウド基盤、SRE、データ基盤、セキュリティなどは求人側のニーズが高く、年収交渉の材料になります。",
  },
  {
    title: "マネジメント経験の有無",
    desc: "チームリードやエンジニアリングマネージャーの経験は、30代の年収を押し上げる代表的な要素です。技術力に加えて「人とプロジェクトを動かせる」評価が加わると、提示レンジが一段上がりやすくなります。",
  },
  {
    title: "業界・事業フェーズ",
    desc: "同じ職種でも、SIer・Web系自社開発・スタートアップ・外資系で報酬構造は大きく異なります。基本給が高い企業もあれば、ストックオプションなどインセンティブ比率が高い企業もあります。",
  },
  {
    title: "成果を数値で説明できるか",
    desc: "「改善した」ではなく「レスポンスタイムを40%短縮した」のように、定量的に成果を語れるかどうかが評価額に直結します。30代は実績で語れる材料が増える時期です。",
  },
];

const strategies = [
  {
    num: "1",
    title: "需要の高い技術・領域に軸足を移す",
    desc: "現在の技術スタックの求人需要が頭打ちなら、クラウドネイティブ（コンテナ・IaC）やデータ・セキュリティなど需要の伸びている領域へスキルをずらすことを検討します。資格や実務での小さな実績を積み上げると、次の転職での提示レンジが変わります。",
  },
  {
    num: "2",
    title: "マネジメントまたはスペシャリストの軸を決める",
    desc: "30代は「技術を深めるスペシャリスト」か「チームを動かすマネジメント」かを意識的に選ぶ時期です。どちらでも年収は伸ばせますが、中途半端な『なんでも屋』のまま年齢を重ねると評価されにくくなります。",
  },
  {
    num: "3",
    title: "市場価値を定期的に棚卸しする",
    desc: "転職する・しないに関わらず、IT特化型の転職エージェントに登録して現在の想定年収レンジを把握しておきます。自分のスキルが今いくらで評価されるかを知ることが、社内昇給・転職どちらの判断材料にもなります。",
  },
  {
    num: "4",
    title: "副業・OSS・登壇で実績を可視化する",
    desc: "業務外での開発実績やGitHubの活動、技術登壇は、面接で技術力を裏づける材料になります。30代は実務経験が厚くなる一方で『社外から見える実績』が乏しい人も多く、ここが差別化点になります。",
  },
  {
    num: "5",
    title: "転職と昇進を両天秤にかける",
    desc: "社内昇給は年数%にとどまることが多い一方、転職では条件次第でより大きな変動が起きます。まず転職市場での評価を把握したうえで、現職に残るか動くかを判断するのが合理的です。",
  },
];

const checklist = [
  "3年以上、額面年収がほとんど上がっていない",
  "現職の年収テーブルの上限が見えてきた",
  "自分の市場価値を一度も客観的に確認したことがない",
  "需要の高いスキルを持っているのに評価に反映されていない",
  "マネジメントかスペシャリストか、キャリアの軸が定まっていない",
  "残業や責任に対して報酬が見合っていないと感じる",
];

const faqs = [
  {
    q: "30代エンジニアの平均年収はいくらですか？",
    a: "レバテックが公表する2025年の年代別平均年収では、正社員のシステムエンジニア等で30代は約499万円です（career.levtech.jp / freelance.levtech.jpガイド記事・2025年）。参考として、厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）と公表されています。実際の金額は職種・スキル・企業によって幅があります。",
  },
  {
    q: "30代で年収1,000万円を超える人はどのくらいいますか？",
    a: "レバテック公表（2025年）では、年収1,000万円以上の割合は30代で8.01%とされています。割合としては多数派ではありませんが、テックリードやマネジメント、需要の高い専門領域などで到達している人がいることを示す数値です。",
  },
  {
    q: "年収を上げるには転職と昇進どちらが有効ですか？",
    a: "一概には言えませんが、社内昇給は年率数%にとどまるケースが多く、転職では条件次第でより大きく動くことがあります。まずIT特化型エージェントで現在の市場価値を把握し、現職に残った場合の昇給見込みと比較して判断するのがおすすめです。",
  },
  {
    q: "30代後半でも年収アップ転職はできますか？",
    a: "可能です。30代後半は実務経験が厚くなる一方で、即戦力としての期待も高まります。マネジメント経験や特定領域の専門性など『この人ならではの強み』を整理し、成果を数値で説明できるよう準備することが鍵になります。",
  },
  {
    q: "年収交渉は自分でやるべきですか、エージェントに任せるべきですか？",
    a: "エージェント経由での転職なら、年収交渉を任せるのが現実的です。エージェントは企業の予算感を把握しており、候補者が直接言いにくい条件もすり合わせてくれます。直接応募の場合は自分で交渉する必要があります。詳しくは年収交渉の記事を参照してください。",
  },
  {
    q: "IT人材の需要は今後も続きますか？",
    a: "経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算では、2030年に最大約79万人のIT人材不足が見込まれています。あくまで2019年公表の試算ですが、中長期的にエンジニア需要が底堅いことを示す材料として参照されています。",
  },
  {
    q: "未経験から30代でエンジニアになっても年収は上がりますか？",
    a: "実務経験を積み、需要の高いスキルを身につければ年収を伸ばす余地はあります。ただし最初の数年は経験者と比べて評価が抑えられがちです。30代未経験からの転職戦略は専用の記事で解説しています。",
  },
];

export default function Salary30sPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/salary-30s/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "30代エンジニアの年収相場" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30代エンジニアの年収相場【2026年データで解説】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 公的統計・エージェント公表値でみる30代の年収
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          30代はエンジニアとしてのキャリアの分岐点です。専門性を深めるか、マネジメントに進むか、事業会社へ移るか。選んだ道によって、その後の年収カーブは大きく変わります。本記事では、公的統計と転職エージェントの公表値をもとに、30代エンジニアの年収相場と、相場より上を目指すための具体策を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "厚生労働省 job tag システムエンジニア（受託開発）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：30代の年収相場と上げ方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              レバテックが公表する2025年の年代別平均年収では、正社員エンジニアの<strong>30代は約499万円</strong>。年収1,000万円以上の割合は<strong>30代で8.01%</strong>とされています。公的統計でも、厚生労働省 job tagの「システムエンジニア（受託開発）」は平均年収<strong>578.5万円・平均年齢37.1歳</strong>です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              相場より上を狙うなら、(1) 需要の高い技術・領域に軸足を移す、(2) マネジメントかスペシャリストの軸を決める、(3) 転職エージェントで市場価値を定期的に確認する、の3点が効果的です。社内昇給だけに頼らず、転職市場での評価を一度把握してから判断しましょう。
            </p>
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアの年収データ（出典付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックが公表する2025年の年代別平均年収（正社員・システムエンジニア等）は以下の通りです。年代が上がるにつれて平均が上昇し、個人差も大きくなっていく傾向が読み取れます。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">平均年収</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">傾向</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr key={i} className={row.age === "30代" ? "bg-petrol-soft" : "hover:bg-slate-50"}>
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.age}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-petrol">{row.salary}</td>
                    <td className="px-4 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ レバテック公表の年代別平均年収（2025年・career.levtech.jp / freelance.levtech.jpガイド記事）。年収1,000万円以上の割合は30代8.01%・40代12.67%と公表されています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">公的統計での裏づけ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              厚生労働省 job tagの「システムエンジニア（受託開発）」は、平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）と公表されています。平均年齢が30代後半であることから、30代エンジニアの実勢に近い参考値として活用できます。なお、IT人材の需要は経済産業省の試算（2019年3月公表）で2030年に最大約79万人不足とされており、中長期的に底堅いと見られています。
            </p>
          </div>
        </section>

        {/* 要因 */}
        <section id="factors" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代の年収を左右する4つの要因</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ「30代エンジニア」でも年収には大きな差があります。その差を生む主な要因は次の4つです。自分がどの要因で評価されているか／いないかを把握すると、打ち手が見えてきます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {factors.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 戦略 */}
        <section id="strategy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代で年収を上げる5つの戦略</h2>
          <div className="space-y-4">
            {strategies.map((item, i) => (
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自分の市場価値を把握するうえでは、
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>
            や、複数社を比較する
            <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェントの併用</Link>
            も参考になります。
          </p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップに動くべき人チェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            以下に3つ以上当てはまる場合、まずは市場価値の棚卸しから始めることをおすすめします。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 交渉 */}
        <section id="negotiation" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代の年収交渉のコツ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代は実績が積み上がり、交渉の根拠を示しやすい年代です。交渉で意識したいポイントを整理します。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">希望額は「レンジ」で伝える</h3>
              <p className="text-sm text-slate-600">「650万〜700万円」のように幅で伝えると、最低ラインを示しつつ交渉の余地を残せます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">根拠は「市場相場」と「成果」で固める</h3>
              <p className="text-sm text-slate-600">エージェントに確認した市場相場と、定量的な実績の2点をそろえると説得力が増します。前職年収だけを根拠にしないのがコツです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">タイミングは内定提示前後</h3>
              <p className="text-sm text-slate-600">企業が「採用したい」と判断した段階での交渉が最も通りやすくなります。一次面接の段階で年収の話を前面に出すのは避けましょう。</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            具体的な伝え方やNG例は
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の記事</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 30代視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代という年代の独自事情</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「年収の伸びしろ」が最も大きい年代</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                レバテック公表値で30代平均約499万円→40代約618万円と、30代から40代にかけて平均が大きく伸びています。これは30代でどの軸（専門性／マネジメント）を選び、どんな実績を積むかが、40代の年収に直結することを示しています。30代は『次の10年の土台を作る』年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ライフイベントと年収のバランス</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は結婚・育児・住宅購入などライフイベントが重なりやすく、年収だけでなくリモートワークや残業時間などの労働条件も重要になります。年収の額面だけで転職先を決めず、総合的なパッケージで判断する視点が求められます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「未経験扱い」が通用しにくくなる</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代後半になると、即戦力としての期待が高まります。何でもこなせる『便利屋』ではなく、特定領域で頼られる存在になっているかどうかが、年収レンジを分けます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">あなたの市場価値を無料で診断しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、現在のスキルに見合った年収レンジを無料で教えてもらえます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "複数エージェントの併用ガイド", href: "/knowledge/multiple-agents/" },
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
