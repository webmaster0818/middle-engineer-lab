import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "35歳エンジニア転職は限界？データで検証する突破法【2026年6月】",
  description:
    "「35歳エンジニア限界説」は本当か。厚労省SE平均年齢37.1歳や経産省のIT人材不足試算など実データで正面から検証し、35歳で変わること・変わらないこと、突破戦略、おすすめエージェント、FAQまで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：35歳限界説は当てはまらない" },
  { id: "myth", label: "「35歳限界説」をデータで検証" },
  { id: "company-needs", label: "企業が35歳に求めるもの" },
  { id: "change", label: "35歳で変わること・変わらないこと" },
  { id: "patterns", label: "成功パターンと失敗パターン" },
  { id: "strategy", label: "キャリア戦略（マネジメント vs スペシャリスト）" },
  { id: "agents", label: "35歳におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const marketRows: [string, string][] = [
  ["SE平均年齢", "37.1歳（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["SE平均年収（全年代）", "578.5万円（同上）"],
  ["30代エンジニア平均年収", "約499万円（レバテック公表の年代別平均年収・2025年）"],
  ["40代エンジニア平均年収", "約618万円（同上）"],
  ["年収1,000万円以上の割合", "30代8.01%／40代12.67%（レバテック公表・2025年）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const companyNeeds = [
  {
    title: "即戦力＋αの再現性",
    desc: "35歳には採用直後の戦力化に加え、設計判断やレビューを通じてチームの質を底上げできるかが問われます。",
  },
  {
    title: "リード・設計の経験",
    desc: "プレイヤー応募でも、技術選定の理由やアーキテクチャの知見を語れることが評価軸になります。コーディング力だけでは差別化が難しくなる年代です。",
  },
  {
    title: "巻き込み・育成",
    desc: "後輩育成やオンボーディング、チーム間の調整など、自分以外の生産性を上げた実績があると、ポジションの幅が広がります。",
  },
  {
    title: "学習姿勢と適応力",
    desc: "「過去の実績」だけでなく、直近で何を学び、どう新しい環境に適応したかを示せると、長期活躍への懸念を払拭できます。",
  },
];

const successPatterns = [
  "「技術 × ドメイン」「技術 × マネジメント」など掛け算で希少性を作っている",
  "ICパスとマネジメントパスのどちらで勝負するかを明確にしている",
  "10年以上のキャリアを一貫したストーリーとして語れている",
  "IT特化型と総合型を併用し、求人の数と質を両取りしている",
];

const failurePatterns = [
  "30代前半と同じ感覚で求人の「数」だけを追い、強みとのズレに気づかない",
  "「限界説」を真に受けて応募前から自己評価を下げてしまう",
  "経験豊富なのに職務経歴書が作業の羅列で、リード・設計の貢献が伝わらない",
  "1社のエージェントに依存し、相場観や比較材料を持てない",
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収600〜800万円台を狙う35歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）。リード・設計ポジションの提案を受けやすい。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    fit: "Web・ゲーム業界でスピード重視の35歳",
    reason:
      "IT/Web/ゲーム業界に専門特化。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。提案スピードに強みがあり、在職中でも進めやすい。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "ハイクラス・管理職を視野に入れる35歳",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。市場価値を客観的に把握しやすく、35歳以降のキャリアアップ志向と相性が良い。無料会員でも利用可能。",
  },
];

const faqs = [
  {
    q: "35歳エンジニアの転職限界説は本当ですか？",
    a: "結論として、35歳限界説は現在の市場には当てはまりません。厚労省 job tagではSEの平均年齢が37.1歳とされ、35歳は職種の中心層です。経産省が2019年に公表した最大約79万人のIT人材不足試算が示すように構造的な人材不足が続いており、経験者の需要は強い状況です。ただし、30代前半より「強みに合うポジションへの的確なアプローチ」が重要になるのは事実です。",
  },
  {
    q: "35歳で転職すると年収は下がりますか？",
    a: "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルへの転職なら維持〜アップが一般的です。レバテック公表では30代平均約499万円、40代平均約618万円と年代とともに上がる傾向があり、35歳は伸びしろのある位置にいます。一方、大きなキャリアチェンジを伴う場合は一時的に下がることもあります。",
  },
  {
    q: "35歳エンジニアは何社くらい応募すべき？",
    a: "本命を含めて10〜20社程度に絞り、並行して数社の選考を進めるのが一般的です。35歳は求人の「数」より「自分の強みと一致するか」が成否を分けるため、応募数を増やすこと自体を目的にせず、エージェントと優先順位を決めて比較できる複数内定を作ることを目標にしましょう。",
  },
  {
    q: "35歳でマネジメント経験がなくても転職できますか？",
    a: "可能です。近年はIndividual Contributor（IC）パスを整備する企業が増え、プレイヤーとして高い技術力を発揮するポジションの需要も高まっています。特定技術のスペシャリスト、アーキテクト、SRE、データエンジニアなどが狙い目です。マネジメントが必須というわけではありません。",
  },
  {
    q: "35歳から新しい技術分野に挑戦できますか？",
    a: "可能ですが、ゼロからのスタートより「これまでの経験を活かせる隣接領域への移行」が現実的です。バックエンド経験者がクラウドインフラへ、Web開発者がデータエンジニアリングへ、といった形であれば、過去の実績を土台に転換できます。完全な未経験分野はリスクとリターンを冷静に見極めましょう。",
  },
  {
    q: "35歳エンジニアに求められるスキルレベルは？",
    a: "即戦力としての技術力に加え、チームリード経験、技術選定の判断力、後輩育成の実績が評価されます。プレイヤー応募でも、単なるコーディング能力ではなく設計力やアーキテクチャの知見が見られます。10年以上のキャリアを一貫したストーリーとして語れることが、書類・面接の通過率を高めます。",
  },
  {
    q: "在職中と退職後、どちらで活動すべき？",
    a: "在職中の活動を推奨します。35歳は家庭やローンなど固定費が増える時期でもあり、収入を確保しながら焦らず複数内定を比較できる方が条件交渉でも有利です。求人ペースを保ちたい場合は、エージェントに在職中である旨を伝えてスケジュールを調整してもらいましょう。",
  },
  {
    q: "エージェントは複数使っても大丈夫ですか？",
    a: "問題ありません。エージェントごとに非公開求人や得意領域が異なるため、IT特化型と総合型・ハイクラス型を2〜3社併用するのが定石です。ただし同じ求人に複数経由で応募すると企業側で重複し心証を損なうため、応募先が重複しないよう自分で管理しましょう。",
  },
];

export default function Age35Page() {
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
        title="35歳エンジニア転職は限界？データで検証する突破法【2026年6月】"
        description="35歳限界説を公的統計とエージェント公表値で検証。35歳で変わること・変わらないこと、突破戦略、おすすめエージェント、進め方を解説。"
        url="/age/35/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "35歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          35歳エンジニア転職は限界？データで検証する突破法
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「35歳限界説」への正面回答と具体的な突破戦略
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「エンジニア35歳限界説」は長く語られてきました。本記事はこの説に正面から向き合い、公的統計とエージェントの公表値で実態を検証します。結論を先に言えば、限界説は現在の市場には当てはまりません。ただし、35歳を境に戦い方が変わるのは事実です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "doda「2024年度 決定年収レポート」（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：35歳限界説は、もはや当てはまらない</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              35歳は「限界」ではなく、キャリアの軸を選び直す転換点です。即戦力の技術力にリード・設計の経験を掛け合わせ、強みに合うポジションへ的確にアプローチすれば、年収アップを伴う転職も十分に狙えます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>厚労省 job tagではSEの平均年齢は37.1歳。35歳は職種の中心層で、年齢的に外れていない。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>経産省試算では2030年に最大約79万人のIT人材不足（2019年公表）で、経験者需要が続く。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 限界説の検証 */}
        <section id="myth" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「35歳限界説」をデータで検証する</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            限界説の根拠とされてきたのは、かつてのIT業界の若年層偏重や、35歳を超えると技術についていけないという思い込みでした。しかし、公的統計とエージェント公表値を並べると、その前提は崩れます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <tbody>
                {marketRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            まず、SEの平均年齢が37.1歳である点（厚労省 job tag）は決定的です。35歳が「限界」なら、職種の平均年齢がこの水準になることはありません。むしろ35歳は職種の真ん中に位置します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収面でも、レバテック公表値では30代平均約499万円・40代平均約618万円と年代とともに上昇し、1,000万円以上の割合も30代8.01%から40代12.67%へと増えます。35歳はその上昇カーブの途中にあり、経験を積み重ねるほど評価が上がる位置と言えます。限界どころか、専門性とリード経験を磨くほど価値が高まる年代なのです。
          </p>
        </section>

        {/* 企業が求めるもの */}
        <section id="company-needs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が35歳エンジニアに求めるもの</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            35歳には、即戦力であることに加えて「チームへの波及効果」が期待されます。次の4点を満たせているかが評価を分けます。
          </p>
          <div className="space-y-4">
            {companyNeeds.map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 変わること・変わらないこと */}
        <section id="change" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳を境に変わること・変わらないこと</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">変わらないこと</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "技術力がある人材への強い需要",
                  "IT人材不足という構造的な追い風",
                  "年収アップ転職が狙える可能性",
                  "エージェントの無料サポートを受けられること",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-700 mb-3">変わること</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "技術力だけでなくリード・設計力も問われる",
                  "求人の「数」より「強みとの一致」が重要になる",
                  "完全未経験分野へのキャリアチェンジは難度が上がる",
                  "実績を一貫したストーリーで語る必要性が増す",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0">!</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            年代の前後比較は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職ガイド</Link>と<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職は厳しい？</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 成功・失敗パターン */}
        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">成功パターンと失敗パターン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">突破できる人の共通点</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {successPatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">つまずきやすいパターン</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {failurePatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            実績の語り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>、年齢の不安については<Link href="/knowledge/age-discrimination/" className="text-blue-600 hover:underline">年齢と転職</Link>でも掘り下げています。
          </p>
        </section>

        {/* キャリア戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリア戦略：マネジメント vs スペシャリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            35歳は、この先の軸を「マネジメント」か「スペシャリスト」のどちらに置くかを明確にすべきタイミングです。どちらが上ということはなく、自分の志向と市場の需要が重なる方向を選ぶことが成功の鍵です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントパス</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームの生産性とメンバーの成長にコミットする道。エンジニアリングマネージャー（EM）やテックリードが該当します。採用・育成・調整の経験が評価され、年収レンジは上がりやすい一方、ハンズオンの比率は下がります。
              </p>
              <p className="text-xs text-blue-600">向いている人: チーム全体の成果に喜びを感じる／育成・調整が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリストパス（IC）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                技術を突き詰めるIndividual Contributorの道。アーキテクト、SRE、データエンジニア、セキュリティなどが該当します。ICパスを整備し、マネージャーと同水準の年収を用意する企業も増えています。
              </p>
              <p className="text-xs text-blue-600">向いている人: 技術そのものに没頭できる／深い専門性で勝負したい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">エンジニアのキャリアプラン</Link>、市場価値の測り方は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値を知る方法</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            35歳はIT特化型を軸に、ハイクラス型・総合型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-blue-600 hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">こんな35歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            年代別の比較は<Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代エージェント比較</Link>、ハイクラス志向なら<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "強みの掛け算を言語化", desc: "「技術 × ドメイン」「技術 × マネジメント」など、自分の希少性がどこにあるかを整理します。10年以上のキャリアを一貫したストーリーにまとめましょう。" },
              { step: "STEP 2", title: "進む軸の決定", desc: "マネジメントパスかスペシャリストパスか、どちらで勝負するかを決めます。軸が定まると応募ポジションと自己PRがぶれません。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "IT特化型・総合型・ハイクラス型を併用し、初回面談で希望と軸を共有。提案傾向から自分の市場価値を把握します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "リード・設計の貢献が伝わる職務経歴書に磨き、技術面接では判断の根拠や失敗からの学びを語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。承諾後は円満退職を進めます。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-blue-600 font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接対策ガイド</Link>を参照してください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">35歳は限界ではなく、キャリアの転換点</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、10年以上の経験を最大限に活かせるポジションを見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "40代エンジニアの転職は厳しい？", href: "/age/40s/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "年齢と転職（年齢の壁を考える）", href: "/knowledge/age-discrimination/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
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
