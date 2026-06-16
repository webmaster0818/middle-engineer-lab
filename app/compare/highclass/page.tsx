import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアのハイクラス転職おすすめ比較【2026年6月】",
  description:
    "エンジニアのハイクラス転職に強いサービスを2026年6月時点のデータで比較。ビズリーチを中心に年収750万円以上の定義、スカウトを増やす職務経歴書のコツ、レバテック・リクルートITの使い分けを解説します。",
};

const agents = [
  {
    rank: 1,
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    type: "ハイクラス",
    company: "株式会社ビズリーチ（ビジョナルグループ・東証プライム上場）",
    scale: "登録者282万人・ヘッドハンター9,700人以上・導入企業41,800社以上（累計・2025年4月時点・二次）",
    salary: "ハイクラス定義は年収750万円以上（二次）／年収1,000万円以上求人が全体の約4割（二次）",
    area: "全国",
    point:
      "ハイクラス転職の中心となるスカウト型。CTO/VPoE/EM・外資系・管理職に強く、経歴を登録しておくとヘッドハンターや企業から直接スカウトが届く。市場価値を客観的に測る用途にも適する。",
  },
  {
    rank: 2,
    name: "レバテックキャリア",
    href: "/review/levtech/",
    type: "IT特化型",
    company: "レバテック株式会社（レバレジーズグループ）",
    scale: "約5万件超（2026年5〜6月時点・複数転職メディア集計）。600万円以上が公開求人の約8割との二次情報",
    salary: "内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）",
    area: "首都圏中心（二次情報）",
    point:
      "IT特化型で高年収求人比率が高い。技術を理解したアドバイザーが付き、年収交渉やスキルの言語化に強い。スカウト型と併用し、能動的に求人を探す軸として機能する。",
  },
  {
    rank: 3,
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    type: "総合型",
    company: "株式会社リクルート",
    scale: "IT公開110,840件／非公開101,680件（2026年5月22日時点・二次集計）",
    salary: "ハイクラス帯の非公開求人を多数保有。統一された公式アップ率は未確認（断定しない）",
    area: "全国",
    point:
      "国内最大級の求人数と非公開求人で、ハイクラス帯の選択肢を広げられる。大手SIer・メーカー・事業会社の管理職まで網羅。サポート期間は原則3か月とされる点に留意。",
  },
  {
    rank: 4,
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    type: "総合型",
    company: "パーソルキャリア株式会社（1989年設立）",
    scale: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）",
    salary: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万円（2023年度）→486万円（2024年度）",
    area: "全国",
    point:
      "求人量が多く全国対応で、事業会社のCIO/情シス部長などのハイクラス求人も探せる。検索＋エージェント＋スカウトのハイブリッド型で自分のペースでも進めやすい。",
  },
  {
    rank: 5,
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    type: "IT特化型",
    company: "株式会社Geekly（2011年8月設立・渋谷区）",
    scale: "公開37,000件以上（2026年1月時点）／非公開含め46,000件以上（2026年5月時点・二次集計）",
    salary: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）",
    area: "首都圏中心",
    point:
      "Web系・メガベンチャーに強く、VPoE/テックリードなどのハイクラス求人が見つかりやすい。提案スピードが速く、実務経験者への提案数が多いと評価される。",
  },
];

const resumeTips = [
  {
    title: "希望年収と現年収を正確に登録する",
    body: "ビズリーチはスカウトを送る企業側が年収帯で絞り込むため、現年収・希望年収を空欄にするとマッチング対象から外れやすくなります。ハイクラス（年収750万円以上）を狙うなら、根拠ある希望年収を明記しましょう。",
  },
  {
    title: "成果を数値で書く",
    body: "「Webサービスの開発を担当」ではなく「月間◯万UUのサービスで、レスポンスを◯%改善」のように、規模と成果を数値化します。ヘッドハンターは定量実績で候補者を検索・評価します。",
  },
  {
    title: "マネジメント・技術選定の意思決定を書く",
    body: "ハイクラス求人はCTO/VPoE/EM・テックリード級が中心です。率いたチーム規模、採用・育成、アーキテクチャや技術スタックの選定理由など「意思決定の経験」を盛り込むとスカウトの質が上がります。",
  },
  {
    title: "キーワードを具体的に入れる",
    body: "クラウド（AWS/GCP等）、コンテナ、CI/CD、特定言語・フレームワークなど、検索されやすい技術キーワードを職務経歴に散りばめます。企業は技術名で候補者を探すため、語の有無で露出が変わります。",
  },
  {
    title: "経歴を定期的に最新化する",
    body: "更新日時が新しい候補者ほどアクティブとみなされ、スカウトが届きやすくなります。直近の案件・成果を反映し、月1回程度は見直すのがおすすめです。",
  },
];

const checklistFit = [
  "現年収が一定水準にあり、年収750万円以上のレンジを狙いたい",
  "CTO/VPoE/EM/テックリードなど、技術＋マネジメントの役割を担える",
  "アーキテクチャ設計・技術選定など、意思決定の実績を説明できる",
  "外資系IT・メガベンチャー・事業会社のハイクラス求人に関心がある",
  "受け身のスカウトと能動的な応募を、3〜6か月かけて並行できる",
];

const checklistNotFit = [
  "実務・マネジメントの実績がまだ薄く、ハイクラス帯の要件に届いていない",
  "希望年収だけが先行し、提供できる価値を言語化できていない",
  "短期で必ず決めたいが、ポジションの限定性を許容できない",
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
    q: "エンジニアのハイクラス転職の年収基準は？",
    a: "明確な公的基準はありませんが、ビズリーチではハイクラスを年収750万円以上と定義しています（二次情報）。CTO/VPoE/EMなどの経営・管理層や外資系ITでは、年収1,000万円以上のポジションも珍しくありません。まずは自分の現年収と希望年収を起点に、狙えるレンジを把握するのが出発点です。",
  },
  {
    q: "ハイクラス転職はビズリーチだけで十分？",
    a: "ビズリーチを中心に据えつつ、IT特化型のレバテックキャリアと総合型のリクルートエージェントITを併用するのが基本です。スカウト型は受け身で待つ性質があり、経歴次第でスカウトが来ないこともあります。能動的に探せるエージェント型を組み合わせることで、機会の取りこぼしを防げます。",
  },
  {
    q: "スカウトを増やす職務経歴書のコツは？",
    a: "(1)現年収・希望年収を正確に登録、(2)成果を数値で記載、(3)マネジメントや技術選定など意思決定の経験を明記、(4)クラウド等の技術キーワードを具体的に入れる、(5)経歴を定期的に最新化する、の5点が効果的です。ヘッドハンターは年収帯・技術名・更新日時で候補者を検索するため、これらの有無で露出が変わります。",
  },
  {
    q: "ハイクラス転職で求められるスキルは？",
    a: "技術力に加えて、アーキテクチャ設計、技術選定、チームビルディング、ステークホルダーマネジメント、事業理解が重視されます。プレイヤーとしての強さだけでなく、組織やプロダクトを動かす再現性のある実績を示せるかが評価の分かれ目です。",
  },
  {
    q: "30代・40代でハイクラス帯は狙える？",
    a: "狙えます。レバテック公表の年代別データ（2025年）では、年収1,000万円以上の割合は30代で8.01%、40代で12.67%です。30代は需要領域の実務やリーダー経験を、40代はマネジメント実績を軸にすると到達しやすくなります。各年代の戦略は30代・40代向けの比較ページも参考にしてください。",
  },
  {
    q: "ビズリーチの有料プランは必要？",
    a: "無料会員でも利用できますが、一部の機能・求人は有料プラン向けです。有料プランはWeb決済で5,478円/月（2022年11月改定・二次情報）とされます。まずは無料で登録してスカウトの届き方を見極め、必要に応じて検討するのが現実的です。最新の料金は公式サイトでご確認ください。",
  },
  {
    q: "スカウトが来ないときはどうすればいい？",
    a: "経歴の登録内容が薄い、年収・希望条件が未入力、更新が止まっている、などが主因です。職務経歴を数値で具体化し、技術キーワードを補い、定期的に最新化することでスカウト数は変わります。並行してレバテックキャリア等で能動的に応募し、両面で機会を作りましょう。",
  },
  {
    q: "ハイクラス転職の活動期間はどのくらい？",
    a: "ポジションが限定的なため、一般に長期戦になりやすい領域です。スカウト型に登録して待ちつつ、エージェント型で能動的に探す両面作戦で、腰を据えて取り組むのが基本戦略です。希望条件に優先順位を付けておくと、判断がぶれにくくなります。",
  },
];

export default function HighclassPage() {
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
        title="エンジニアのハイクラス転職おすすめ比較【2026年6月】"
        description="エンジニアのハイクラス転職に強いサービスを2026年6月時点のデータで比較。年収750万円以上の定義やスカウトを増やす職務経歴書のコツを解説します。"
        url="/compare/highclass/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "エンジニアのハイクラス転職比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エンジニアのハイクラス転職おすすめ比較【2026年6月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | ハイクラスIT転職に強いサービスを5社厳選</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-3">
            エンジニアのハイクラス転職では、通常の応募とは異なるアプローチが必要です。CTO/VPoE/EMなどの管理職や高年収ポジションは非公開で募集されることが多く、スカウト型サービスを使わないと出会えない求人が大半を占めます。本記事は2026年6月時点の公開情報・公表値をもとに、ビズリーチを中心としたハイクラス転職の進め方を整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ビズリーチ公式会社概要・規模（2025年4月時点・二次）",
            "レバテック公表 年代別平均年収（2025年）",
            "パーソルキャリア（doda）決定年収レポート（2025年5月公表）",
            "各社公式サイト・複数転職メディア集計",
          ]}
        />

        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <h2 className="text-lg font-bold text-blue-900 mb-2 not-prose">結論：ハイクラスはビズリーチ中心＋レバテック/リクルートITの併用</h2>
            <ul className="text-sm text-blue-900 leading-relaxed space-y-1 list-disc pl-5">
              <li>軸は<strong>ビズリーチ</strong>。ハイクラス定義は年収750万円以上で、年収1,000万円以上求人が全体の約4割（二次）。経歴を登録して直接スカウトを受ける。</li>
              <li>能動的に探す軸として<strong>レバテックキャリア</strong>（高年収求人比率が高い）、求人量補完に<strong>リクルートエージェントIT</strong>を併用。</li>
              <li>スカウトの数と質は職務経歴書で決まる。年収・成果の数値化、意思決定の実績、技術キーワード、定期更新が鍵。</li>
            </ul>
          </div>
        </section>

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-petrol-deep">
            <li><a href="#ranking" className="hover:underline">ハイクラス向けサービスおすすめランキング</a></li>
            <li><a href="#detail" className="hover:underline">各サービスの詳細</a></li>
            <li><a href="#definition" className="hover:underline">ハイクラス転職とは（年収750万円以上の定義）</a></li>
            <li><a href="#resume" className="hover:underline">スカウトを増やす職務経歴書のコツ</a></li>
            <li><a href="#choose" className="hover:underline">ハイクラス転職サービスの選び方</a></li>
            <li><a href="#reviews" className="hover:underline">口コミ・評判の傾向</a></li>
            <li><a href="#checklist" className="hover:underline">向いている人/向いていない人</a></li>
            <li><a href="#viewpoint" className="hover:underline">30代・40代視点での考え方</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        <section id="ranking" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハイクラス向けサービスおすすめランキング</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            以下は2026年6月時点の公開情報をもとにした比較です。求人数・規模は媒体経由の二次集計値を含み変動が大きいため、最新値は各公式サイトでご確認ください。順位はハイクラス帯（年収750万円以上・管理職/高専門職）への適合度で整理しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[780px]">
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
                    <td className="px-3 py-3 border border-slate-200 text-xs">{a.scale}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{a.area}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{a.name === "ビズリーチ" ? "無料会員あり（有料プランあり）" : "求職者無料"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・実績値は2026年6月時点の公開情報・各社公表値・複数転職メディアの集計に基づきます。公式値と二次情報を区別して記載しています。ビズリーチの有料プランはWeb決済5,478円/月（2022年11月改定・二次）。</p>
        </section>

        <section id="detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各サービスの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800">{a.rank}位. <Link href={a.href} className="text-petrol-deep hover:underline">{a.name}</Link></h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-petrol-soft text-petrol-deep" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{a.point}</p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
                  <div className="sm:col-span-2"><dt className="inline font-medium text-slate-500">運営会社: </dt><dd className="inline">{a.company}</dd></div>
                  <div className="sm:col-span-2"><dt className="inline font-medium text-slate-500">求人/規模: </dt><dd className="inline">{a.scale}</dd></div>
                  <div className="sm:col-span-2"><dt className="inline font-medium text-slate-500">年収/実績: </dt><dd className="inline">{a.salary}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">対応エリア: </dt><dd className="inline">{a.area}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">料金: </dt><dd className="inline">{a.name === "ビズリーチ" ? "無料会員あり・有料プランあり" : "求職者無料"}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section id="definition" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハイクラス転職とは（年収750万円以上の定義）</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            「ハイクラス転職」に厳密な公的定義はありませんが、目安として広く使われるのが年収750万円以上のラインです。ビズリーチはハイクラスを年収750万円以上と位置づけており（二次情報）、同サービスでは年収1,000万円以上の求人が全体の約4割を占めるとされます（二次情報）。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">年代別の到達率（レバテック公表・2025年）</h3>
            <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>正社員SE 30代の平均年収：約499万円／40代：約618万円／50代：約685万円</li>
              <li>年収1,000万円以上の割合：30代 8.01%／40代 12.67%</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典: レバテック公表の年代別平均年収（2025年）。平均値・割合であり、役割や企業規模で差があります。</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            つまりハイクラス帯（750万円以上、さらに1,000万円以上）は、年代が上がるほど到達率が高まる一方、依然として上位の層に位置します。ここに届くには、CTO/VPoE/EM・テックリードなどの役割や、特定領域での深い専門性が要件になります。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>から始め、現在地と目標年収のギャップを確認しましょう。
          </p>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やす職務経歴書のコツ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ハイクラス転職、特にビズリーチのようなスカウト型では、職務経歴書（プロフィール）の質がスカウトの数と年収帯を左右します。口コミでも「経歴次第でスカウトが来ない」という指摘があるとおり、登録内容の作り込みが成否を分けます。
          </p>
          <div className="space-y-3">
            {resumeTips.map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{i + 1}. {t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            書き方の基本は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の作り方</Link>、スカウトの仕組みは<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトを活かすコツ</Link>でも詳しく解説しています。
          </p>
        </section>

        <section id="choose" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハイクラス転職サービスの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">1. スカウト型を軸にする</h3>
              <p>ハイクラス求人は非公開が多く、企業・ヘッドハンターから声がかかるスカウト型（ビズリーチ）が入口になります。まず経歴を登録し、スカウトの届き方を見ます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">2. IT特化型で能動的に探す</h3>
              <p>レバテックキャリアは高年収求人比率が高く、技術を理解したアドバイザーが年収交渉を支援します。受け身のスカウトと併せ、自分から探す軸を持ちます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">3. 総合型で求人量を補完する</h3>
              <p>リクルートエージェントITやdodaは求人量・非公開求人が豊富で全国対応。事業会社のCIO/情シス部長などへ選択肢を広げられます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">4. メリット・デメリットを両面で見る</h3>
              <p>スカウト型は経歴次第でスカウトが来ない・有料前提との不満があり、総合型は連絡が多くサポート期間が短い傾向があります。3〜4社を併用し、相性の良い経路を見極めます。</p>
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
              <h3 className="font-bold text-green-800 mb-3">ハイクラス転職が向いている人</h3>
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
            当サイトはミドルエンジニアの転職に特化しています。ハイクラス帯は30代・40代にとって現実的な目標です。レバテック公表値では年収1,000万円以上の割合が30代で8.01%、40代で12.67%。30代は需要領域の実務とリーダー経験を、40代はマネジメント実績を軸にすると到達しやすくなります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年代別の具体的な進め方は<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代の転職エージェント比較</Link>と<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代の転職エージェント比較</Link>で詳しく扱っています。ハイクラスは長期戦になりやすいため、早めにビズリーチへ経歴を登録し、スカウトの反応を見ながら戦略を調整するのがおすすめです。
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
          <h2 className="text-xl font-bold mb-3">ハイクラス転職は経歴登録から始まる</h2>
          <p className="text-blue-100 text-sm mb-4">年収750万円以上のポジションは非公開が多数。まずはビズリーチに経歴を登録し、スカウトの反応を見ながら戦略を組み立てましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの転職エージェント比較", href: "/compare/40s-agents/" },
              { name: "30代エンジニアの転職エージェント比較", href: "/compare/30s-agents/" },
              { name: "ビズリーチ vs レバテック比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "年収UPに強いエージェントランキング", href: "/compare/salary-ranking/" },
              { name: "スカウトを活かすコツ", href: "/knowledge/scout/" },
              { name: "職務経歴書の作り方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
