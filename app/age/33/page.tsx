import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/age/33/" },
  title: "33歳エンジニアの転職｜まだ間に合う最後の伸びしろ世代の戦略【2026年6月】",
  description:
    "33歳エンジニアの転職市場を実データで解説。SE平均年齢37.1歳・30代平均年収約499万円などの公表値をもとに、33歳ならではの「ポテンシャルと即戦力のはざま」の立ち位置、軸の決め方、年収の考え方、おすすめエージェント、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：33歳はポテンシャルと即戦力を両取りできる位置" },
  { id: "position", label: "33歳という年齢の立ち位置" },
  { id: "market", label: "33歳エンジニアの市場データ" },
  { id: "strength", label: "33歳の強みと弱み" },
  { id: "jobs", label: "33歳が狙うべき求人" },
  { id: "salary", label: "33歳の年収の考え方" },
  { id: "strategy", label: "キャリアの軸を決める（残り2年の使い方）" },
  { id: "agents", label: "33歳におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const marketRows: [string, string][] = [
  ["SE平均年齢", "37.1歳（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["30代エンジニア平均年収", "約499万円（レバテック公表の年代別平均年収・2025年）"],
  ["40代エンジニア平均年収", "約618万円（同上）"],
  ["年収1,000万円以上の割合", "30代8.01%／40代12.67%（レバテック公表・2025年）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const strengths = [
  "10年前後の実務経験で即戦力性を示しつつ、年齢的にはまだポテンシャル採用の対象にも入る「両取り」ができる",
  "新しい技術スタックへの吸収力が高く、未経験寄りの隣接領域へ移っても伸びしろを評価されやすい",
  "リーダー経験が浅くても、これから役割を広げる前提で迎え入れる企業が多い",
  "家庭やローンの固定費がまだ重くなり切る前で、年収より将来性で会社を選ぶ自由度が残っている",
];

const weaknesses = [
  "「35歳まで」を一区切りにする求人がまだ存在し、ポテンシャル採用の窓は徐々に狭まり始めている",
  "20代と同じ伸びしろだけでは差別化しにくく、何らかの専門領域や実績の言語化が求められ始める",
  "経験が中途半端だと「30代前半の割に語れる実績が薄い」と見られるリスクがある",
];

const jobs = [
  {
    title: "事業会社の自社開発ポジション",
    desc: "受託・SIerから事業会社の内製開発チームへ移る代表的なタイミングです。33歳なら設計や運用の実務を任せつつ、これからリードへ育てる前提で採用されやすく、年収・働き方ともに改善しやすい狙い目です。",
  },
  {
    title: "モダンな技術スタックへの乗り換え",
    desc: "クラウド（AWS/GCP）、コンテナ、TypeScript、Goなど、現職で触れていない技術へ移る最後の好機です。33歳は学習意欲と既存経験の両方を評価され、隣接領域への移行が現実的に通ります。",
  },
  {
    title: "リード手前のシニアエンジニア枠",
    desc: "プレイヤーとして高い技術力を発揮しつつ、レビューや設計判断、後輩のサポートを担う枠。マネジメント未経験でも、これから役割を広げる前提でフィットします。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "事業会社・モダン技術へ移りたい33歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）。技術に精通したアドバイザーが、33歳の伸びしろを活かせる自社開発ポジションを提案してくれます。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    fit: "Web・ゲーム業界でスピード重視の33歳",
    reason:
      "IT/Web/ゲーム業界に専門特化。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。提案スピードに強みがあり、在職中でも効率よく進められます。",
  },
  {
    name: "doda（IT・通信エンジニア）",
    href: "/review/doda-it/",
    fit: "幅広い求人から選択肢を比べたい33歳",
    reason:
      "国内最大級の求人数で、検索・エージェント・スカウトを併用できるハイブリッド型。母数が大きいため、まだ方向を絞り切れていない33歳が相場観をつかむのに向きます。転職者の約6割が年収アップ、IT・通信の平均決定年収は486万円（2024年度・doda公表値）。",
  },
];

const faqs = [
  {
    q: "33歳エンジニアの転職はまだ間に合いますか？",
    a: "十分に間に合います。厚労省 job tagではSEの平均年齢が37.1歳で、33歳は職種の中心よりやや若い位置です。一部に「35歳まで」を区切りとする求人は残るものの、33歳はポテンシャル採用と即戦力採用の両方の対象になれる恵まれた年齢です。経産省試算では2030年に最大約79万人のIT人材不足とされ、経験者の需要も続いています。",
  },
  {
    q: "33歳と35歳で、転職市場での扱いは変わりますか？",
    a: "大きな断絶はありませんが、33歳はポテンシャル採用の窓がまだ開いている点が違いです。35歳はリード・設計力がより明確に問われ始める一方、33歳は「これから育てる前提」での採用余地が残ります。モダン技術への乗り換えや事業会社への移行を考えているなら、35歳になる前の今が動きやすいタイミングと言えます。",
  },
  {
    q: "33歳で未経験の技術分野に挑戦できますか？",
    a: "可能です。33歳はゼロからの完全未経験より「これまでの経験を活かせる隣接領域への移行」が現実的かつ評価されやすい年齢です。バックエンド経験者がクラウドインフラへ、Web開発者がデータエンジニアリングへ、といった形なら過去の実績を土台に転換できます。35歳以降より移行の自由度が高い点が33歳の強みです。",
  },
  {
    q: "33歳でマネジメント経験がなくても大丈夫ですか？",
    a: "問題ありません。33歳でマネジメント未経験は珍しくなく、リード手前のシニアエンジニア枠やIndividual Contributor（IC）パスの需要も高まっています。むしろ、この先マネジメントとスペシャリストのどちらに進むかを決める良い時期です。今の段階で軸を意識しておくと、35歳以降の選択肢が広がります。",
  },
  {
    q: "33歳で転職すると年収は上がりますか？",
    a: "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルなら維持〜アップが一般的です。レバテック公表では30代平均約499万円、40代平均約618万円と年代とともに上がる傾向があり、33歳はその上昇カーブの入り口です。受託から事業会社への移行で年収・働き方ともに改善するケースも多く見られます。",
  },
  {
    q: "33歳エンジニアは何社くらい応募すべき？",
    a: "本命を含めて10〜20社程度を目安に、並行して数社の選考を進めるのが一般的です。33歳は求人の母数が比較的多い年代なので、数を追うより「自分の伸ばしたい方向と一致するか」を基準に選びましょう。エージェントと優先順位を決め、複数内定を比較できる状態を作ることを目標にします。",
  },
  {
    q: "在職中と退職後、どちらで活動すべきですか？",
    a: "在職中の活動を推奨します。33歳は収入を確保しながら焦らず複数内定を比較できる方が、条件交渉でも有利です。求人ペースを保ちたい場合は、エージェントに在職中である旨を伝えてスケジュールを調整してもらいましょう。",
  },
];

export default function Age33Page() {
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
        title="33歳エンジニアの転職｜まだ間に合う最後の伸びしろ世代の戦略【2026年6月】"
        description="33歳エンジニアの立ち位置を公的統計とエージェント公表値で解説。ポテンシャルと即戦力の両取り、狙うべき求人、年収の考え方、おすすめエージェントまで。"
        url="/age/33/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "33歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          33歳エンジニアの転職｜まだ間に合う最後の伸びしろ世代の戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ポテンシャルと即戦力の「はざま」をどう使うか
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          33歳は、エンジニアのキャリアにおいて特殊な立ち位置にあります。10年前後の実務経験で即戦力性を示せる一方、年齢的にはまだポテンシャル採用の対象にも入る——この「両取り」ができる数年間の入り口が33歳です。本記事では、33歳という年齢ならではの強みと弱みを実データで整理し、35歳になる前のこのタイミングをどう活かすかを具体的に解説します。
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
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：33歳は伸びしろと即戦力を両取りできる位置にいる</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              33歳は「もう遅い」年齢ではありません。むしろ、即戦力としての実績とポテンシャル採用の余地が重なる、選択肢が最も広い数年間の入り口です。事業会社への移行やモダン技術への乗り換えなど、35歳以降は難度が上がる動きを、今なら有利な条件で実現できます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>厚労省 job tagではSEの平均年齢は37.1歳。33歳は中心よりやや若く、ポテンシャル採用の窓がまだ開いている。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>レバテック公表では30代平均約499万円。33歳は年収上昇カーブの入り口にいる。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 立ち位置 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳という年齢の立ち位置</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            33歳は、20代の「ポテンシャル中心」と35歳以降の「即戦力・リード中心」のちょうど移行点にあります。実務経験はおおむね10年前後となり、設計や運用を任せられる即戦力性が備わる一方、年齢的にはまだ「これから育てる前提」での採用余地が残っています。この二面性こそが33歳の最大の特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            重要なのは、この「両取りできる窓」が永遠には続かないことです。一部の求人では「35歳まで」を一区切りにしており、ポテンシャル採用の余地は34歳、35歳と進むにつれて徐々に狭まります。33歳は、その窓が十分に開いている最後の数年間の入り口だと捉えると、動き方の優先順位が見えてきます。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            前後の年代との比較は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職ガイド</Link>や<Link href="/age/35/" className="text-petrol hover:underline">35歳エンジニアの転職は限界？</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で33歳の現実を確認します。出典と時点を明記しています。
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
          <p className="text-slate-600 leading-relaxed">
            レバテック公表の年代別平均年収では、30代平均約499万円に対し40代は約618万円。33歳はこの上昇カーブの入り口にあり、今後の伸びしろが大きい位置です。なお、ここで示すのは年代単位の公表値であり、33歳「ピンポイント」の平均年収を断定する公的データは存在しません。あくまで30代全体の傾向として参照してください。
          </p>
        </section>

        {/* 強みと弱み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳の強みと弱み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">33歳の強み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {strengths.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-700 mb-3">33歳が意識すべき弱み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {weaknesses.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0">!</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            自分の市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値を知る方法</Link>、実績の語り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>を参考にしてください。
          </p>
        </section>

        {/* 狙うべき求人 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳が狙うべき求人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            33歳は「両取りの窓」が開いているうちに、35歳以降は難度が上がる動きを取りに行くのが定石です。代表的な狙い目は次の3つです。
          </p>
          <div className="space-y-4">
            {jobs.map((item, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳の年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            33歳の年収は、レバテック公表の30代平均約499万円を一つの目安にできます。ただしこれは年代全体の公表値であり、スキルセットや業界、現職の水準によって大きく振れます。33歳の段階では、目先の年収だけでなく「この先の伸びしろ」を重視した判断が報われやすいのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルなら維持〜アップが一般的です。一方で、受託から事業会社への移行や新しい技術領域への挑戦では、一時的に横ばいでも数年後のレンジが大きく変わるケースがあります。33歳はその投資が回収しやすい年齢です。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収レンジ別の狙い方は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収のリアル</Link>、年収交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* キャリアの軸 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアの軸を決める（35歳までの残り2年の使い方）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            33歳は、この先の軸を「マネジメント」か「スペシャリスト」のどちらに置くかを意識し始める良い時期です。今すぐ確定する必要はありませんが、35歳になる前に方向性の仮説を持っておくと、応募ポジションと自己PRがぶれません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントの種をまく</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームリードやレビュー、後輩のオンボーディングなど、現職で「自分以外の生産性を上げる経験」を意識的に積みます。33歳でこの実績を作っておくと、35歳以降のEM・テックリード候補として一段強くなれます。
              </p>
              <p className="text-xs text-petrol">向いている人: チーム全体の成果に喜びを感じる／育成・調整が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">専門性を深める（IC）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                アーキテクト、SRE、データエンジニア、セキュリティなど、突き詰める領域を定めます。33歳なら新領域への移行余地もあり、専門性を確立してからのIndividual Contributorパスを描きやすい時期です。
              </p>
              <p className="text-xs text-petrol">向いている人: 技術そのものに没頭できる／深い専門性で勝負したい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">エンジニアのキャリアプラン</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">33歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            33歳はIT特化型を軸に、求人量を確保できる総合型を併用するのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-petrol hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-petrol font-medium">こんな33歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            年代別の比較は<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代エージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "この転職で得たいものを定義", desc: "年収か、技術環境か、働き方か。33歳は伸びしろを投資できる年齢なので、目先の条件と数年後のキャリア価値のどちらを優先するかを言語化します。" },
              { step: "STEP 2", title: "軸の仮説を立てる", desc: "マネジメントとスペシャリストのどちらに重心を置くか、現時点の仮説を持ちます。確定でなくてよく、応募ポジションの絞り込みに使います。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "IT特化型と総合型を併用し、初回面談で希望と軸を共有。提案傾向から自分の市場価値を客観的に把握します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "実績とこれから伸ばしたい方向の両方が伝わる職務経歴書に磨き、技術面接では判断の根拠や直近の学習を語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方・成長環境で比較し、必要なら条件交渉をエージェント経由で行います。承諾後は円満退職を進めます。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-petrol font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策ガイド</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">33歳は、選択肢が最も広い数年間の入り口</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、伸びしろを最大限に活かせる環境を見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
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
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "自分の市場価値を知る方法", href: "/knowledge/market-value/" },
              { name: "30代の年収のリアル", href: "/knowledge/salary-30s/" },
              { name: "30代エージェント比較", href: "/compare/30s-agents/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
