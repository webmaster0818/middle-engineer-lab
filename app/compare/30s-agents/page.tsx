import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "30代エンジニアの転職エージェントおすすめ比較【2026年6月】",
  description:
    "30代エンジニアにおすすめのIT転職エージェントを2026年6月時点のデータで比較。レバテックの年代別平均年収（30代約499万円）など公的・公表値をもとに、選び方・口コミ傾向・併用パターンを解説します。",
};

const agents = [
  {
    rank: 1,
    name: "レバテックキャリア",
    href: "/review/levtech/",
    type: "IT特化型",
    company: "レバテック株式会社（レバレジーズグループ）",
    jobs: "約5万件超（2026年5〜6月時点・複数転職メディア集計）",
    area: "首都圏中心（二次情報）",
    field: "IT/Web全般・高年収求人",
    salaryUp: "内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）",
    point:
      "IT/Web特化で、利用者の約80%が20〜30代という年代層が30代の中心とぴったり合う。高年収求人の比率が高く、技術を理解したアドバイザーが付くため、スキルを正しく評価してもらいやすい。",
    target: "30代全般・年収アップ狙い",
  },
  {
    rank: 2,
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    type: "IT特化型",
    company: "株式会社Geekly（2011年8月設立・渋谷区）",
    jobs: "公開37,000件以上（2026年1月時点）／非公開含め46,000件以上（2026年5月時点・二次集計）",
    area: "首都圏中心",
    field: "IT/Web/ゲーム業界",
    salaryUp: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）",
    point:
      "IT/Web/ゲーム業界に専門特化し、提案スピードが速い。実務経験者への提案数が多いと評価されており、Web系で年収を伸ばしたい30代と相性が良い。",
    target: "30代前半〜中盤・Web/ゲーム志望",
  },
  {
    rank: 3,
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    type: "総合型",
    company: "パーソルキャリア株式会社（1989年設立）",
    jobs: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）",
    area: "全国",
    field: "IT全般・キャリアチェンジ",
    salaryUp: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万円（2023年度）→486万円（2024年度）",
    point:
      "国内最大級の求人数で、検索＋エージェント＋スカウトのハイブリッド型。全国対応のため地方在住の30代や、業種を広げて探したい人の受け皿になる。",
    target: "30代全般・全国/幅広く探したい",
  },
  {
    rank: 4,
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    type: "IT特化型",
    company: "株式会社マイナビ",
    jobs: "公式総数は非公表（断定しない）",
    area: "全国",
    field: "若手〜30代IT",
    salaryUp: "転職後定着率97.5%・年収アップ率73.7%（二次情報／転職メディア集計）",
    point:
      "20〜30代の若手層に強く、書類添削・面接対策が手厚い。初めての転職や、サポートを重視したい30代前半に向く。",
    target: "30代前半・初めての転職",
  },
  {
    rank: 5,
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    type: "総合型",
    company: "株式会社リクルート",
    jobs: "IT公開110,840件／非公開101,680件（2026年5月22日時点・二次集計）",
    area: "全国",
    field: "大手〜スタートアップ網羅",
    salaryUp: "統一された公式アップ率は未確認（断定しない）",
    point:
      "国内最大級の求人数と非公開求人の豊富さが強み。選択肢を最大化したい30代の併用先として優秀。サポート期間は原則3か月とされる点に留意。",
    target: "30代全般・求人量重視",
  },
];

const checklistFit = [
  "現職での年収・評価に頭打ち感があり、市場価値を確かめたい",
  "クラウド・AI・データなど需要の高い領域の実務経験がある",
  "30代前半で、スペシャリストかマネジメントか方向性を固めたい",
  "リーダー・サブリーダー経験があり、役割を一段引き上げたい",
  "今すぐではなくても、半年〜1年内の転職を視野に情報収集したい",
];

const checklistNotFit = [
  "現職に強い不満がなく、転職の目的が言語化できていない",
  "IT実務経験がほぼなく、30代後半で未経験職種を目指している",
  "年収だけを基準にしており、業務内容・キャリアの軸が定まっていない",
];

const reviews = [
  {
    service: "レバテックキャリア",
    good: "「書類添削・面接対策が丁寧」「LINEで連絡が完結して楽」「高年収求人が多い」といった声が見られる。",
    bad: "一方で「未経験者は紹介されにくい」「初回面談後の連絡が遅い場合がある」「希望と異なる求人を提案された」という指摘もある。",
    src: "OUTSIDEMAGAZINE／Qiita Job Change／イーデス等の口コミプラットフォーム",
  },
  {
    service: "Geekly",
    good: "「レスポンスが早い」「選考までスムーズ」「実務経験者への提案数が多い」という評価がある。",
    bad: "「連絡がしつこい」「担当者の質にばらつき」「勝手に応募されたとの報告例」も見られる。",
    src: "2b-connect／転職アンテナ／Qiita Job Change等",
  },
  {
    service: "doda ITエンジニア",
    good: "「求人量が多い」「好条件求人が多い」「2名体制でサポートされた」といった声がある。",
    bad: "「求人・連絡が多すぎる」「アドバイザーの質にばらつき」「IT専門性がやや低いとの声」も挙がる。",
    src: "studio-tale／best-w／freeconsul／HonNe等",
  },
];

const faqs = [
  {
    q: "30代エンジニアの転職エージェントは何社登録すべき？",
    a: "IT特化型2社＋総合型1社の計3社前後を目安にするのが現実的です。専門性の高い提案（レバテックキャリア・Geekly等）と、求人量・全国対応（doda・リクルートエージェントIT等）を組み合わせることで、提案の偏りを抑えながら比較ができます。複数社の併用については「複数エージェントの使い分け」も参考にしてください。",
  },
  {
    q: "30代エンジニアの平均年収はどのくらい？",
    a: "レバテックが公表する年代別平均年収（2025年）では、正社員SEの30代は約499万円です。20代の約378万円から大きく上がる年代で、40代では約618万円とさらに伸びます。あくまで平均値であり、領域・役割・企業規模で差が出る点には注意してください。",
  },
  {
    q: "30代でも年収1,000万円は狙える？",
    a: "可能性はあります。レバテックの公表値（2025年）では、正社員SEで年収1,000万円以上の割合は30代で8.01%、40代で12.67%とされています。30代では割合が限られるため、クラウド・AI等の需要領域の実務や、リーダー/マネジメント経験を職務経歴書で具体的に示すことが近道になります。",
  },
  {
    q: "30代前半と後半で転職戦略は変わる？",
    a: "変わります。30代前半はスペシャリストとマネジメントの両方に道があり、求人の幅が広い時期です。30代後半はリーダー・マネージャー経験など「再現性のある実績」がより重視されます。後半ほどポジションが絞られるため、早めに情報収集と棚卸しを始めるのが有利です。",
  },
  {
    q: "IT業界未経験でも30代で転職できる？",
    a: "30代前半までは現実的な選択肢があります。全国対応で求人量の多いdodaや、未経験歓迎求人も扱うワークポートなどが受け皿になりやすいです。ただし年齢が上がるほど難易度は上がるため、早期の行動と、これまでの職務で培った業務知識の言語化が重要です。",
  },
  {
    q: "エージェントに登録を断られることはある？",
    a: "紹介できる求人がないと判断された場合、面談に進めない・案件を紹介されないことはあります。これは個人の否定ではなく、その時点での求人と希望条件のミスマッチが主因です。IT特化型と総合型を併用し、希望条件を現実的に調整することで、紹介につながりやすくなります。",
  },
  {
    q: "連絡がしつこいと感じたらどうすればいい？",
    a: "口コミでも連絡頻度に関する指摘は複数のサービスで見られます。希望連絡手段（メール/LINE/電話）と頻度、転職希望時期を最初に伝えることで、過度な連絡は抑えられます。レバテックキャリアのようにLINEで連絡が完結するサービスを選ぶのも一つの方法です。",
  },
  {
    q: "エージェントの退会・利用停止はできる？",
    a: "各サービスとも、担当者へのメールやマイページから退会・利用停止の手続きが可能です。複数社に登録して合わなかった場合でも、いつでも利用を終了できます。手続き方法はサービスごとに異なるため、各公式サイトの案内を確認してください。",
  },
];

export default function ThirtiesAgentsPage() {
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
        title="30代エンジニアの転職エージェントおすすめ比較【2026年6月】"
        description="30代エンジニアにおすすめのIT転職エージェントを2026年6月時点のデータで比較。年代別平均年収などの公表値をもとに選び方・口コミ傾向を解説します。"
        url="/compare/30s-agents/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "30代エンジニアの転職エージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">30代エンジニアの転職エージェントおすすめ比較【2026年6月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 30代エンジニア向けに5社を厳選比較</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-3">
            30代はITエンジニアのキャリアで最も伸びしろの大きい時期です。スキルと実務経験が揃い、スペシャリストとマネジメントの両方の道を選べる一方、後半になるほど求人が絞られていきます。本記事は、2026年6月時点の公開情報・公表値をもとに、30代に合う転職エージェントを比較します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式ガイド",
            "パーソルキャリア（doda）決定年収レポート（2025年5月公表）",
            "レバテック公表 年代別平均年収（2025年）",
            "各社公式サイト・複数転職メディア集計",
          ]}
        />

        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <h2 className="text-lg font-bold text-blue-900 mb-2 not-prose">結論：30代はIT特化型2社＋総合型1社の併用が基本</h2>
            <ul className="text-sm text-blue-900 leading-relaxed space-y-1 list-disc pl-5">
              <li>年収アップを狙うなら<strong>レバテックキャリア</strong>を軸に。利用者の約80%が20〜30代で年代層が合い、高年収求人比率が高い。</li>
              <li>Web/ゲーム志望や提案スピード重視なら<strong>Geekly</strong>を追加。求人量と全国対応の保険として<strong>doda</strong>を併用。</li>
              <li>30代の平均年収は約499万円（レバテック公表・2025年）。年収1,000万円以上の割合は30代で8.01%。需要領域の実務やリーダー経験を職務経歴書で具体化することが鍵。</li>
            </ul>
          </div>
        </section>

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-petrol-deep">
            <li><a href="#ranking" className="hover:underline">30代向けエージェントおすすめランキング</a></li>
            <li><a href="#detail" className="hover:underline">各エージェントの詳細</a></li>
            <li><a href="#market" className="hover:underline">30代エンジニアの転職市場・年収データ</a></li>
            <li><a href="#choose" className="hover:underline">30代の転職エージェントの選び方</a></li>
            <li><a href="#reviews" className="hover:underline">口コミ・評判の傾向</a></li>
            <li><a href="#combo" className="hover:underline">おすすめの併用パターン</a></li>
            <li><a href="#checklist" className="hover:underline">向いている人/向いていない人</a></li>
            <li><a href="#viewpoint" className="hover:underline">30代・40代視点での考え方</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        <section id="ranking" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代向けエージェントおすすめランキング</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            以下は2026年6月時点の公開情報をもとにした比較です。求人数は時期により変動が大きく、媒体経由の二次集計値を含むため、最新値は各公式サイトでご確認ください。順位は30代の利用シーン（年代層・年収帯・サポート）への適合度を重視して整理しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数（時点）</th>
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
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績値は2026年6月時点の公開情報・各社公表値・複数転職メディアの集計に基づきます。公式値と二次情報を区別して記載しています。</p>
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
                  <div><dt className="inline font-medium text-slate-500">求人数: </dt><dd className="inline">{a.jobs}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">対応エリア: </dt><dd className="inline">{a.area}</dd></div>
                  <div className="sm:col-span-2"><dt className="inline font-medium text-slate-500">年収アップ実績: </dt><dd className="inline">{a.salaryUp}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">おすすめ層: </dt><dd className="inline">{a.target}</dd></div>
                  <div><dt className="inline font-medium text-slate-500">料金: </dt><dd className="inline">求職者無料</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代エンジニアの転職市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代の戦略を立てるには、まず市場の数字を押さえることが大切です。以下は公的統計・公表値に基づくデータで、いずれも時点と出典を明記しています。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">年代別の平均年収（レバテック公表・2025年）</h3>
            <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5">
              <li>正社員SE 20代：約378万円</li>
              <li>正社員SE <strong>30代：約499万円</strong></li>
              <li>正社員SE 40代：約618万円／50代：約685万円</li>
              <li>年収1,000万円以上の割合：<strong>30代 8.01%</strong>／40代 12.67%</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">出典: レバテック公表の年代別平均年収（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）。平均値・割合であり、領域や役割で差があります。</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">転職による年収の動き（doda公表）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              パーソルキャリア「決定年収レポート」（2025年5月公表）によると、転職者の約6割が年収アップを実現し、IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へと上昇しています。30代は実務とリーダー経験が評価されやすく、年収アップのチャンスが大きい年代です。
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-700 mb-2 text-sm">IT人材の需給（経産省）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。需要構造として、実務経験のある30代エンジニアは引き続き売り手市場が続くと考えられます。なお、職種別年収の細目（job tagのプログラマー値等）は信頼性に疑義がある値があるため、本記事では平均年収はレバテック・doda公表値を中心に扱っています。
            </p>
          </div>
        </section>

        <section id="choose" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代の転職エージェントの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">1. IT特化型を軸にする</h3>
              <p>30代は専門性が評価される年代です。技術を理解したアドバイザーが付くIT特化型（レバテックキャリア・Geekly）を軸にすると、スキルの言語化や年収交渉で有利になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">2. 総合型で求人量・エリアを補完する</h3>
              <p>doda・リクルートエージェントITは求人量が多く全国対応です。特化型でカバーしきれない業種・地域を補完でき、地方在住の30代にも有効です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">3. メリット・デメリットを両面で見る</h3>
              <p>求人量が多いサービスは連絡が多くなりがちで、特化型は未経験者には紹介が限られる傾向があります。複数社に登録し、提案の質と頻度を比較して相性の良い担当を見極めるのが現実的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-bold text-slate-800 mb-1">4. キャリアの方向性を先に決める</h3>
              <p>スペシャリストかマネジメントかで、見るべき求人もアピールすべき実績も変わります。<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">キャリアプランの立て方</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>も合わせて検討してください。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            以下は口コミプラットフォームに見られる評判の傾向を要約したものです（原文の転載ではありません）。良い点・気になる点を両面で把握し、登録前の参考にしてください。
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

        <section id="combo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの併用パターン</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代前半（選択肢を広げたい）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">レバテックキャリア ＋ Geekly ＋ doda。IT特化型2社で専門性の高い提案を受けつつ、総合型で求人量とエリアを補完する構成です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代後半（年収・役割を一段上げたい）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">レバテックキャリア ＋ Geekly ＋ <Link href="/compare/highclass/" className="underline">ハイクラス系</Link>。リーダー・マネジメント経験を活かせるポジションを、特化型とハイクラス両面で探します。</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人/向いていない人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">エージェント活用が向いている人</h3>
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
            当サイトはミドルエンジニアの転職に特化しています。30代の動き方は、その先の40代のキャリアを大きく左右します。レバテック公表値で40代の平均年収が約618万円、年収1,000万円以上の割合が12.67%（30代は8.01%）と、40代でさらに伸びる構造がある一方、40代はポジションがマネジメント中心に絞られていきます。
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            つまり30代のうちに「技術の専門性」と「人・プロジェクトを動かした実績」のどちらか、できれば両方を積み上げておくことが、40代の選択肢を広げます。30代後半に差しかかったら、<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代の転職エージェント比較</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収の現実</Link>にも目を通し、長期視点で動くことをおすすめします。
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
          <h2 className="text-xl font-bold mb-3">30代は情報収集から始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">スキルと経験が揃う30代は、選択肢が最も広い年代。まずはIT特化型を中心に複数登録し、提案を比較するところから始めましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの転職エージェント比較", href: "/compare/40s-agents/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "レバテック vs Geekly 比較", href: "/compare/levtech-vs-geekly/" },
              { name: "年収UPに強いエージェントランキング", href: "/compare/salary-ranking/" },
              { name: "30代の年収のリアル", href: "/knowledge/salary-30s/" },
              { name: "複数エージェントの使い分け", href: "/knowledge/multiple-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
