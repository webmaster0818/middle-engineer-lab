import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/40s-agents/" },
  title: "40代エンジニアの転職エージェントおすすめ比較【2026年8月】",
  description:
    "40代エンジニアにおすすめのIT転職エージェントを2026年6月時点のデータで比較。40代の平均年収約618万円などの公表値、マネジメント経験の活かし方、年齢ハードルへの向き合い方まで解説します。",
};

const agents = [
  {
    rank: 1,
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    type: "ハイクラス",
    company: "株式会社ビズリーチ（ビジョナルグループ・東証プライム上場）",
    jobs: "登録者282万人・登録ヘッドハンター9,700人以上（2025年4月時点・二次）",
    area: "全国",
    field: "ハイクラス・管理職・外資",
    salaryUp: "年収1,000万円以上求人が全体の約4割（二次）。ハイクラス定義は年収750万円以上（二次）",
    point:
      "スカウト型でハイクラス・管理職に強い。40代はマネジメント経験を職務経歴に登録しておくことで、CTO/VPoE/EM/部長級などのスカウトを受けやすい。市場価値を客観的に把握する用途にも向く。",
    target: "40代全般・管理職/年収アップ狙い",
  },
  {
    rank: 2,
    name: "レバテックキャリア",
    href: "/review/levtech/",
    type: "IT特化型",
    company: "レバテック株式会社（レバレジーズグループ）",
    jobs: "約5万件超（2026年5〜6月時点・複数転職メディア集計）",
    area: "首都圏中心（二次情報）",
    field: "IT/Web全般・高年収求人",
    salaryUp: "内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）",
    point:
      "技術を理解したアドバイザーが付くIT特化型。40代のシニアエンジニア・テックリード層の専門性を言語化しやすく、能動的に求人を探す軸として機能する。高年収求人比率が高い。",
    target: "40代全般・技術専門性を活かす",
  },
  {
    rank: 3,
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    type: "総合型",
    company: "株式会社リクルート",
    jobs: "IT公開110,840件／非公開101,680件（2026年5月22日時点・二次集計）",
    area: "全国",
    field: "大手SIer・メーカー・管理職",
    salaryUp: "統一された公式アップ率は未確認（断定しない）",
    point:
      "国内最大級の求人数と非公開求人で、40代の選択肢を最大化できる。SIer・メーカー系の管理職やCIO/情シス部門の求人も探しやすい。サポート期間は原則3か月とされる点に留意。",
    target: "40代全般・求人量重視",
  },
  {
    rank: 4,
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    type: "総合型",
    company: "パーソルキャリア株式会社（1989年設立）",
    jobs: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）",
    area: "全国",
    field: "IT全般・事業会社",
    salaryUp: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万円（2023年度）→486万円（2024年度）",
    point:
      "求人量が多く全国対応で、事業会社のCIO/情シス部長ポジションも探せる。検索＋エージェント＋スカウトのハイブリッド型で、自分のペースでも進めやすい。",
    target: "40代全般・全国/事業会社志望",
  },
  {
    rank: 5,
    name: "type転職エージェントIT",
    href: "/review/type-agent/",
    type: "IT特化型",
    company: "株式会社キャリアデザインセンター",
    jobs: "IT公開求人約4,200件（2025年8月時点・二次）",
    area: "首都圏（一都三県）中心",
    field: "首都圏IT/Web・年収交渉",
    salaryUp: "年収アップ希望者の約71%が増収、ITエンジニアは平均増額124万円（2021年10月〜2022年9月の自社調査）。定着率97.4%",
    point:
      "首都圏のIT/Webに強く、年収交渉に注力する点が特徴。求人エリアは絞られるが、一都三県在住で年収交渉を重視する40代に向く。実績の計測期間が2021〜2022年と古い点は留意。",
    target: "首都圏在住・年収交渉重視",
  },
];

const checklistFit = [
  "チームリーダー/マネージャー/PMなど人やプロジェクトを動かした実績がある",
  "アーキテクチャ設計・技術選定など、再現性のある専門性を説明できる",
  "現職の年収・役割に頭打ち感があり、マネジメント側で評価されたい",
  "年齢で書類落ちが続いており、非公開求人やスカウト経由を試したい",
  "腰を据えて3〜6か月の長期戦で転職活動に取り組める",
];

const checklistNotFit = [
  "マネジメントも先端技術の実務も棚卸しできておらず、強みが曖昧",
  "年収だけを基準にしており、役割・働き方の条件が定まっていない",
  "短期で必ず決めたい一方、希望条件を一切下げる余地がない",
];

const reviews = [
  {
    service: "ビズリーチ",
    good: "「高年収求人が豊富」「スカウトでキャリアアップできた」「市場価値を客観的に把握できる」という声が見られる。",
    bad: "一方で「スカウトの質にばらつき」「経歴次第でスカウトが来ない」「有料プラン前提との不満」も指摘される。",
    src: "ミライトーチ／morejob／talentsquare等の口コミプラットフォーム",
  },
  {
    service: "レバテックキャリア",
    good: "「書類添削・面接対策が丁寧」「LINEで連絡が完結」「高年収求人が多い」といった評価がある。",
    bad: "「未経験者は紹介されにくい」「初回面談後の連絡が遅い場合」「希望と異なる求人提案の例」も見られる。",
    src: "OUTSIDEMAGAZINE／Qiita Job Change／イーデス等",
  },
  {
    service: "リクルートエージェントIT",
    good: "「圧倒的な求人数」「非公開求人が充実」「書類添削・面接対策が丁寧」という声がある。",
    bad: "「対応が事務的との声」「連絡頻度が高い」「サポート期間が3か月で短い」も挙がる。",
    src: "Qiita Job Change等",
  },
];

const faqs = [
  {
    q: "40代エンジニアの転職は本当に難しい？",
    a: "30代より求人ポジションが絞られるのは事実で、書類段階のハードルは上がります。ただし不可能ではありません。40代はマネジメント経験やアーキテクチャ設計などの専門性が評価される年代であり、ハイクラス型のビズリーチやIT特化型のレバテックキャリアなど、40代の実績を正しく評価しやすいサービスを使い分けることで道は開けます。年齢ハードルそのものへの向き合い方は「年齢の壁との向き合い方」も参考にしてください。",
  },
  {
    q: "40代エンジニアの平均年収はどのくらい？",
    a: "レバテック公表の年代別平均年収（2025年）では、正社員SEの40代は約618万円です。30代の約499万円から上がり、年収1,000万円以上の割合も30代8.01%に対し40代は12.67%と高くなります。役割（マネジメント/スペシャリスト）や企業規模で差が大きい点は前提として押さえてください。",
  },
  {
    q: "40代の転職で年収は上がる？",
    a: "上がる可能性は十分あります。doda「決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、40代でも管理職・高専門性ポジションでは年収1,000万円以上が視野に入ります。鍵は、マネジメント実績や技術選定の判断などを職務経歴書で具体的な成果として示せるかどうかです。",
  },
  {
    q: "マネジメント経験はどう活かせばいい？",
    a: "「何人のチームを率い、どんな課題をどう解決し、どんな成果を出したか」を定量で示すのが基本です。採用側はEM/テックリード/PMとしての再現性を見ています。プレイングマネージャー的に技術もマネジメントも担ってきた40代は、その両面を整理して伝えると評価につながりやすくなります。詳しくは「マネジメント経験の伝え方」を参照してください。",
  },
  {
    q: "40代で求められるスキルは？",
    a: "技術力に加え、チームマネジメント、プロジェクト管理、ステークホルダー調整、技術選定・アーキテクチャ設計などが重視されます。EM/テックリード/CTO的な役割を担えるか、または特定領域で深い専門性を発揮できるかが評価ポイントです。",
  },
  {
    q: "何社くらいのエージェントに登録すべき？",
    a: "40代は3〜4社の併用がおすすめです。スカウト型（ビズリーチ）で受動的にオファーを受けつつ、IT特化型（レバテックキャリア）で能動的に探し、総合型（リクルートエージェントIT・doda）で求人量を補完する構成が現実的です。複数社の使い分けは「複数エージェントの使い分け」も参考になります。",
  },
  {
    q: "スカウトが来ないときはどうすればいい？",
    a: "口コミでも「経歴次第でスカウトが来ない」という指摘があります。職務経歴を最新化し、マネジメント規模・担当技術・成果を具体的に記載することでスカウト数は変わります。受動的なスカウト型だけに頼らず、IT特化型・総合型で能動的に応募する両面作戦が有効です。",
  },
  {
    q: "フリーランスという選択肢はどうか？",
    a: "40代のフリーランスエンジニアという選択肢もあります。ただし安定性や福利厚生の面で正社員と異なるため、両方を比較したうえで判断するのが安全です。当サイトの「正社員 vs フリーランス」の整理も参考にしてください。なお具体的な単価相場は変動が大きいため、エージェント面談で最新の提示を確認することをおすすめします。",
  },
];

export default function FortiesAgentsPage() {
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
        title="40代エンジニアの転職エージェントおすすめ比較【2026年8月】"
        description="40代エンジニアにおすすめのIT転職エージェントを2026年6月時点のデータで比較。平均年収やマネジメント経験の活かし方、年齢ハードルへの向き合い方を解説します。"
        url="/compare/40s-agents/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "40代エンジニアの転職エージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">40代エンジニアの転職エージェントおすすめ比較【2026年8月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 40代エンジニア向けに5社を厳選比較</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-3">
            40代のIT転職は「専門性×マネジメント×非公開求人」が軸になります。30代に比べてポジションは絞られますが、技術力とマネジメント経験を正しく評価する企業に出会えれば、年収アップも管理職転身も十分に狙えます。本記事は2026年6月時点の公開情報・公表値をもとに、40代に合うエージェントと戦略を整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "パーソルキャリア（doda）決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表の試算）",
            "各社公式サイト・複数転職メディア集計",
          ]}
        />

        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <h2 className="text-lg font-bold text-blue-900 mb-2 not-prose">結論：40代はスカウト型＋IT特化型＋総合型の3軸併用</h2>
            <ul className="text-sm text-blue-900 leading-relaxed space-y-1 list-disc pl-5">
              <li>マネジメント経験があるなら<strong>ビズリーチ</strong>を軸に。年収1,000万円以上求人が全体の約4割（二次）で、管理職スカウトを受けやすい。</li>
              <li>技術専門性を活かすなら<strong>レバテックキャリア</strong>で能動的に探し、<strong>リクルートエージェントIT</strong>で求人量を補完。</li>
              <li>40代の平均年収は約618万円、年収1,000万円以上の割合は12.67%（レバテック公表・2025年）。年齢ハードルは「実績の定量化」で乗り越える。</li>
            </ul>
          </div>
        </section>

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-petrol-deep">
            <li><a href="#ranking" className="hover:underline">40代向けエージェントおすすめランキング</a></li>
            <li><a href="#detail" className="hover:underline">各エージェントの詳細</a></li>
            <li><a href="#market" className="hover:underline">40代エンジニアの転職市場・年収データ</a></li>
            <li><a href="#hurdle" className="hover:underline">40代の年齢ハードルへの正面回答</a></li>
            <li><a href="#management" className="hover:underline">マネジメント経験の活かし方</a></li>
            <li><a href="#choose" className="hover:underline">40代の転職エージェントの選び方</a></li>
            <li><a href="#reviews" className="hover:underline">口コミ・評判の傾向</a></li>
            <li><a href="#checklist" className="hover:underline">向いている人/向いていない人</a></li>
            <li><a href="#viewpoint" className="hover:underline">30代・40代視点での考え方</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        <section id="ranking" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代向けエージェントおすすめランキング</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            以下は2026年6月時点の公開情報をもとにした比較です。求人数は媒体経由の二次集計値を含み変動が大きいため、最新値は各公式サイトでご確認ください。順位は40代の利用シーン（管理職/専門職の評価・非公開求人・年収帯）への適合度で整理しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">求人/規模（時点）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">対応エリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">料金</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-bold text-petrol">{a.rank}位</td>
                    <td className="px-3 py-3 border border-slate-200 font-medium"><Link href={a.href} className="text-petrol-deep hover:underline">{a.name}</Link></td>
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-petrol-soft text-petrol-deep" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{a.jobs}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{a.area}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">求職者無料</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績値は2026年6月時点の公開情報・各社公表値・複数転職メディアの集計に基づきます。公式値と二次情報を区別して記載しています。type転職の実績は計測期間（2021年10月〜2022年9月）を併記しています。</p>
        </section>

        <section id="detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800">{a.rank}位. <Link href={a.href} className="text-petrol-deep hover:underline">{a.name}</Link></h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-petrol-soft text-petrol-deep" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{a.point}</p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
                  <div><dt className="inline font-medium text-slate-500">運営会社: </dt><dd className="inline">{a.company}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">得意領域: </dt><dd className="inline">{a.field}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">求人/規模: </dt><dd className="inline">{a.jobs}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">対応エリア: </dt><dd className="inline">{a.area}</dd></div>
                  <div className="sm:col-span-2"><dt className="inline font-medium text-slate-500">年収アップ実績: </dt><dd className="inline">{a.salaryUp}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">おすすめ層: </dt><dd className="inline">{a.target}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">料金: </dt><dd className="inline">求職者無料{a.name === "ビズリーチ" ? "（有料プランあり：Web決済5,478円/月・2022年11月改定・二次）" : ""}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの転職市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            40代の戦略は、市場データを正しく踏まえることから始まります。以下はいずれも時点と出典を明記した公的統計・公表値です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">年代別の平均年収（レバテック公表・2025年）</h3>
            <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>正社員SE 30代：約499万円</li>
              <li>正社員SE <strong>40代：約618万円</strong>／50代：約685万円</li>
              <li>年収1,000万円以上の割合：30代 8.01%／<strong>40代 12.67%</strong></li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典: レバテック公表の年代別平均年収（2025年）。平均値・割合であり、役割や企業規模で差があります。</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">転職による年収の動き（doda公表）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              パーソルキャリア「決定年収レポート」（2025年5月公表）によると、転職者の約6割が年収アップを実現し、IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へ上昇しています。40代でも、管理職・高専門性ポジションでは平均を大きく上回る決定年収が見込めます。
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">IT人材の需給（経産省）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。需要が続く構造のなかで、マネジメントや高度な専門性を持つ40代は、即戦力として一定の需要が見込めます。
            </p>
          </div>
        </section>

        <section id="hurdle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代の年齢ハードルへの正面回答</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            「40代だと書類で落とされるのでは」という不安は当然です。実際、求人ポジションが30代より絞られるのは事実で、特に公開求人の書類選考では年齢で機械的に絞られるケースもあります。ここで重要なのは、ハードルの存在を認めたうえで、それを下げる打ち手を取ることです。
          </p>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">打ち手1：非公開求人・スカウト経由を増やす</h3>
              <p>公開求人で年齢フィルターにかかりやすいなら、ビズリーチのスカウト型や、リクルートエージェントITの非公開求人を活用します。スカウトは企業側が経歴を見たうえで声をかけるため、年齢の壁を越えやすい入口になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">打ち手2：「年齢の対価」を実績で示す</h3>
              <p>40代に企業が期待するのは、若手にはない判断力と再現性です。マネジメント規模、トラブル対応、技術選定の意思決定などを定量で書類に落とし込めば、年齢はマイナスではなく強みに転じます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">打ち手3：長期戦の前提で構える</h3>
              <p>40代はポジションが限定的なため、活動が長引くこともあります。スカウト型に登録して待ちつつ、IT特化型で能動的に探す両面作戦で、機会の取りこぼしを防ぎます。年齢ハードルの実態は<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">年齢の壁との向き合い方</Link>でも詳しく扱っています。</p>
            </div>
          </div>
        </section>

        <section id="management" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マネジメント経験の活かし方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            40代の最大の武器はマネジメント経験です。ただし「管理職をやっていました」だけでは伝わりません。採用側はEM/テックリード/PMとしての再現性を見ているため、次の要素を職務経歴書と面接で具体化します。
          </p>
          <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5 mb-3">
            <li><strong>規模</strong>：率いたチーム人数、プロジェクト予算・期間、関与した組織の範囲</li>
            <li><strong>課題と打ち手</strong>：どんな課題を、どんな技術・組織判断で解決したか</li>
            <li><strong>成果</strong>：リリース、品質・障害率、開発生産性、メンバー育成などの定量結果</li>
            <li><strong>技術との両立</strong>：プレイングマネージャーとして担った設計・技術選定の判断</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            こうした整理は、ビズリーチの職務経歴登録にもそのまま活きます。書き方の具体例は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント経験の伝え方</Link>と<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の作り方</Link>を参照してください。
          </p>
        </section>

        <section id="choose" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代の転職エージェントの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">1. スカウト型で非公開の入口を確保する</h3>
              <p>ビズリーチのようなスカウト型は、企業側から経歴を見て声がかかるため、年齢で機械的に絞られにくい入口になります。まず登録して職務経歴を充実させておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">2. IT特化型で専門性を能動的に売り込む</h3>
              <p>レバテックキャリアなどIT特化型は、技術を理解したアドバイザーが専門性を言語化してくれます。受け身のスカウトと併せ、能動的に探す軸として使います。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">3. 総合型で求人量を補完する</h3>
              <p>リクルートエージェントITやdodaは求人量・非公開求人が豊富で全国対応。SIer・メーカー・事業会社の管理職まで選択肢を広げられます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">4. メリット・デメリットを両面で見る</h3>
              <p>スカウト型は経歴次第でスカウトが来ないこともあり、総合型は連絡が多くサポート期間が短い傾向があります。複数社を併用し、相性の良い担当を見極めることが40代では特に重要です。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            以下は口コミプラットフォームに見られる評判の傾向を要約したものです（原文の転載ではありません）。良い点と気になる点を両面で把握してください。
          </p>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.service}</h3>
                <p className="text-sm text-green-800 mb-1"><span className="font-medium">良い傾向: </span>{r.good}</p>
                <p className="text-sm text-amber-800 mb-2"><span className="font-medium">気になる傾向: </span>{r.bad}</p>
                <p className="text-xs text-slate-400">出典: {r.src}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人/向いていない人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">40代のエージェント活用が向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {checklistFit.map((c, i) => (<li key={i} className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span>{c}</span></li>))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3">先に準備が必要な人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {checklistNotFit.map((c, i) => (<li key={i} className="flex gap-2"><span className="text-slate-400 font-bold">−</span><span>{c}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="viewpoint" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点での考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            当サイトはミドルエンジニアの転職に特化しています。40代は、30代までに積み上げた専門性とマネジメント経験を「換金」する年代です。レバテック公表値では40代の平均年収が約618万円、年収1,000万円以上の割合が12.67%と、30代（8.01%）よりハイクラス到達率が上がります。一方でポジションは管理職・高専門職に偏るため、自分の強みがどちらに寄っているかの自己認識が成否を分けます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            まだ30代後半の方は、40代で評価される実績を逆算して今のうちに積むのが得策です。<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代の転職エージェント比較</Link>や<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代転職のリアル</Link>も合わせてご覧ください。
          </p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">40代のIT転職は戦略で決まる</h2>
          <p className="text-blue-100 text-sm mb-4">経験と実績が最も評価される40代。スカウト型・IT特化型・総合型を組み合わせ、年齢ハードルを実績で乗り越えましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの転職エージェント比較", href: "/compare/30s-agents/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "ビズリーチ vs レバテック比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "40代転職のリアル", href: "/knowledge/40s-reality/" },
              { name: "40代の年収のリアル", href: "/knowledge/salary-40s/" },
              { name: "マネジメント経験の伝え方", href: "/knowledge/management/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
