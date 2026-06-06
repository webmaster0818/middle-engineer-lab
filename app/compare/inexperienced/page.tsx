import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニア未経験向け転職エージェント比較【2026年6月】",
  description:
    "未経験からITエンジニアを目指す人向けに、ワークポート・dodaなど未経験歓迎求人に強い転職エージェントを比較。経験者特化型で断られるケースや30代・40代の現実も正直に解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：未経験はワークポートとdodaが軸" },
  { id: "table", label: "未経験向けエージェント比較表" },
  { id: "details", label: "各サービスの特徴と注意点" },
  { id: "select", label: "未経験ならではの選び方" },
  { id: "reviews", label: "口コミの傾向（出典付き）" },
  { id: "checklist", label: "向いている人・向いていない人" },
  { id: "age", label: "30代・40代の未経験ITは現実どうか" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

type Agent = {
  rank: number;
  name: string;
  company: string;
  jobs: string;
  area: string;
  field: string;
  result: string;
  support: string;
  fee: string;
  href: string;
  point: string;
};

const agents: Agent[] = [
  {
    rank: 1,
    name: "ワークポート",
    company: "株式会社ワークポート（2003年設立）",
    jobs: "公開11万件以上・うちIT関連3万件以上（公式LP/二次・2026年6月時点）",
    area: "全国47都道府県57拠点",
    field: "総合型でIT・ゲームが最も強い／未経験歓迎求人が豊富",
    result: "個別の年収アップ率は公表値なし（断定回避）",
    support: "レスポンスが速くスピード重視。専任の転職コンシェルジュ",
    fee: "求職者完全無料",
    href: "/review/workport/",
    point:
      "未経験歓迎求人の数と全国拠点が強み。提案スピードが速いため、まず動き出したい未経験者の起点に向く。",
  },
  {
    rank: 2,
    name: "doda（ITエンジニア）",
    company: "パーソルキャリア株式会社（1989年設立）",
    jobs: "IT・通信エンジニア求人5万件超（二次経由・2026年2月時点）",
    area: "全国",
    field: "国内最大級。検索＋エージェント＋スカウトのハイブリッド型",
    result: "転職者の約6割が年収アップ（2024年度・決定年収レポート公表値）",
    support: "求人量が多く自分でも検索可能。2名体制サポートの場合あり",
    fee: "求職者無料",
    href: "/review/doda-it/",
    point:
      "求人の母数が大きく、未経験可の枠も含めて自分で検索しながら相談できる。地方在住者の選択肢も広い。",
  },
  {
    rank: 3,
    name: "マイナビIT AGENT",
    company: "株式会社マイナビ",
    jobs: "総数の公式値は確認不可（断定しない）",
    area: "全国（首都圏に強み）",
    field: "20〜30代若手層に強い。書類添削・面接対策が手厚い",
    result: "年収アップ率73.7%・定着率97.5%（転職メディア集計・二次）",
    support: "初めての転職でも安心の手厚いサポート",
    fee: "求職者無料",
    href: "/review/mynavi-it/",
    point:
      "サポートの手厚さが評判。20〜30代前半で「初めての転職を丁寧に進めたい」未経験者と相性が良い。",
  },
  {
    rank: 4,
    name: "リクルートエージェント（IT）",
    company: "株式会社リクルート",
    jobs: "IT公開110,840件／非公開101,680件（二次集計・2026年5月22日時点）",
    area: "全国",
    field: "国内最大級の求人数。大手〜スタートアップまで網羅",
    result: "統一された公式アップ率は未確認（断定しない）",
    support: "書類添削・面接対策が丁寧。サポート期間は3か月",
    fee: "求職者無料",
    href: "/review/recruit-it/",
    point:
      "圧倒的な求人数で、未経験可の事務系IT職や大手の研修付きポジションも拾いやすい。母数重視の併用先に。",
  },
  {
    rank: 5,
    name: "type転職エージェント（IT）",
    company: "株式会社キャリアデザインセンター（1993年設立）",
    jobs: "IT公開求人約4,200件（二次・2025年8月時点）",
    area: "首都圏（一都三県）中心",
    field: "首都圏IT/Webに強い。年収交渉と面接対策に注力",
    result: "年収アップ希望者の約71%が増収（2021年10月〜2022年9月の自社調査）",
    support: "担当が親身でミスマッチが少ない。定着率97.4%",
    fee: "求職者無料",
    href: "/review/type-agent/",
    point:
      "一都三県で腰を据えて未経験転職したい人向け。地方求人は手薄なため対象エリアを確認のうえ利用したい。",
  },
];

const goodPoints = [
  { agent: "ワークポート", text: "「未経験歓迎求人が豊富」「紹介求人の量が多い」「レスポンスが早い」という声", src: "Qiita Job Change・morejob等" },
  { agent: "doda", text: "「求人量が多い」「好条件求人が多い」「2名体制サポートの場合がある」という声", src: "studio-tale・best-w等" },
  { agent: "マイナビIT AGENT", text: "「サポートが手厚い」「担当がIT業界に詳しい」「初めての転職でも安心」という声", src: "Qiita Job Change・OUTSIDEMAGAZINE等" },
];

const badPoints = [
  { agent: "ワークポート", text: "「連絡が多すぎる」「希望と異なる求人を紹介される」「担当の専門性にばらつき」という指摘", src: "axxis・イーデス等" },
  { agent: "doda", text: "「求人・連絡が多すぎる」「アドバイザーの質にばらつき」「IT専門性がやや低い」という声", src: "freeconsul・HonNe等" },
  { agent: "経験者特化型（レバテック等）", text: "「未経験者は紹介されにくい」「未経験では断られる場合がある」という指摘", src: "OUTSIDEMAGAZINE・Qiita Job Change等" },
];

const fitYes = [
  "20代〜30代前半で、これからITスキルを身につけていきたい",
  "未経験歓迎・研修付き求人をできるだけ多く比較したい",
  "全国どこからでも応募できる選択肢が欲しい",
  "書類や面接の準備を手厚くサポートしてほしい",
  "インフラ・テスト・ヘルプデスクなど入りやすい職種から始めたい",
];

const fitNo = [
  "すでに実務経験があり、専門性で高年収を狙いたい（経験者特化型が向く）",
  "連絡頻度が多いとストレスに感じ、最低限のやり取りで進めたい",
  "首都圏以外で、地方の選択肢を最優先したい（type等エリア限定型は不向きな場合）",
];

const faqs = [
  { q: "未経験からITエンジニアに転職できる？", a: "可能性はあります。経済産業省「IT人材需給に関する調査」（2019年3月公表）では2030年に最大約79万人のIT人材不足が試算されており、未経験歓迎求人やポテンシャル採用の枠は存在します。ただし全員が必ず転職できるわけではなく、年齢・学習状況・職種選びで難易度は変わります。" },
  { q: "未経験だと転職エージェントに断られることはある？", a: "あります。特にレバテックキャリアのような経験者・高年収特化型のエージェントでは、口コミプラットフォーム（OUTSIDEMAGAZINE・Qiita Job Change等）で『未経験者は紹介されにくい』という声が見られます。未経験ならワークポートやdodaなど未経験歓迎求人を多く扱うサービスを軸にするのが現実的です。" },
  { q: "未経験で狙いやすい職種は？", a: "一般的にインフラエンジニア、テストエンジニア、ヘルプデスク／社内SE補佐などが入りやすいとされます。資格（CCNA等）や論理的思考力、コミュニケーション力で差別化しやすい領域です。希望職種はエージェント登録時に伝えて求人を絞り込みましょう。" },
  { q: "プログラミングスクールに通う必要はある？", a: "必須ではありません。無料教材（Progate、paizaラーニング等）で基礎に触れてから相談する人もいます。スクールはお金がかかるため、費用対効果を冷静に判断し、まずは無料の範囲で基礎学習＋エージェント相談を並行するのがおすすめです。" },
  { q: "未経験エージェントは何社登録すべき？", a: "2〜3社が目安です。ワークポートとdodaを軸に、サポート重視ならマイナビIT AGENT、母数重視ならリクルートエージェントを足す形が無理なく管理できます。" },
  { q: "連絡がしつこいと聞くが大丈夫？", a: "ワークポート・dodaともに口コミでは『連絡が多すぎる』という指摘が見られます。希望の連絡手段（メール中心、連絡は週◯回など）を最初に伝えておくと、やり取りの負担を減らせます。" },
  { q: "30代・40代の未経験でも遅くない？", a: "30代前半までは未経験歓迎求人の対象になりやすい一方、年齢が上がるほど難易度は上がる傾向です。30代後半以降はIT営業・PMO補佐などITに近い職種から入る、または現職の業務知識を活かせる領域を狙うなど、戦略を変えるのが現実的です。" },
  { q: "退会・登録解除はできる？", a: "各社とも申し出れば退会・利用停止が可能です。連絡が合わないと感じたら、担当者変更を申し出る選択肢もあります。複数登録した場合は、使わないサービスを整理すると連絡過多を防げます。" },
];

const related = [
  { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
  { name: "ワークポート vs マイナビIT比較", href: "/compare/workport-vs-mynavi/" },
  { name: "ワークポートの評判・口コミ", href: "/review/workport/" },
  { name: "dodaの評判・口コミ", href: "/review/doda-it/" },
  { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

export default function InexperiencedPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="エンジニア未経験向け転職エージェント比較【2026年6月】" description="未経験からITエンジニアを目指す人向けに、ワークポート・dodaなど未経験歓迎求人に強い転職エージェントを比較します。" url="/compare/inexperienced/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "未経験向けエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エンジニア未経験向け転職エージェント比較【2026年6月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 未経験からのIT転職に強いエージェントを正直に比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「エンジニア未経験でも転職エージェントは使えるのか」「むしろ断られるのでは」——この記事は、未経験からITエンジニアを目指す人が最初に押さえるべきエージェント選びを、誇張せずに整理したものです。結論を先に示し、各社の求人数・対応エリア・口コミの傾向を出典付きで比較します。</p>

        <DataNote surveyedAt="2026年6月" sources={["各サービス公式サイト・LP", "doda 2024年度 決定年収レポート（2025年5月公表）", "経済産業省 IT人材需給に関する調査（2019年3月公表）", "Qiita Job Change・みん評等の口コミプラットフォーム"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：未経験はワークポートとdodaを軸に2〜3社</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">未経験からのIT転職なら、未経験歓迎求人が豊富な<strong>ワークポート</strong>と、求人母数が大きい<strong>doda</strong>を軸に登録するのが現実的です。</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>① ワークポート：未経験歓迎求人が豊富で、全国47都道府県57拠点・提案スピードが速い（公式）</li>
              <li>② doda：IT・通信求人5万件超（二次・2026年2月時点）で、自分でも検索しながら相談できる</li>
              <li>③ レバテック等の経験者特化型は、未経験では紹介されにくい・断られる場合があるため軸にはしない</li>
            </ul>
          </div>
        </section>

        <section id="table" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験向けエージェント比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[820px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">運営会社</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数（時点）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">対応エリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">実績</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">料金</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium"><Link href={a.href} className="text-blue-600 hover:underline">{a.name}</Link></td>
                    <td className="px-3 py-3 border border-slate-200">{a.company}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.jobs}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.area}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.field}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.result}</td>
                    <td className="px-3 py-3 border border-slate-200">{a.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※求人数は時期により変動が大きく、二次集計値を含みます。取得時点を併記しています。最新値は各公式サイトでご確認ください。</p>
        </section>

        <section id="details" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各サービスの特徴と注意点</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.rank}. {a.name}</h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{a.point}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span>運営会社: {a.company}</span>
                  <span>対応エリア: {a.area}</span>
                  <span>得意領域: {a.field}</span>
                  <span>サポート: {a.support}</span>
                  <span>実績: {a.result}</span>
                  <span>料金: {a.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="select" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験ならではの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 「未経験歓迎」を扱う総合型を軸にする</h3>
              <p>経験者・高年収に特化したエージェントは、未経験だと紹介できる求人が少なく断られる場合があります。まずはワークポートやdodaのように未経験歓迎求人や母数の大きいサービスを軸に据えましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. 入りやすい職種から逆算する</h3>
              <p>インフラ・テスト・ヘルプデスクなど入りやすい職種を希望として伝えると、紹介求人がかみ合いやすくなります。最初から人気の高いWebアプリ開発に絞ると、未経験では選択肢が狭くなりがちです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. サポートの手厚さと連絡頻度を見極める</h3>
              <p>初めての転職ならマイナビIT AGENTのようにサポートが手厚いと評判のサービスが安心です。一方、口コミでは各社とも『連絡が多すぎる』という声があるため、希望の連絡手段・頻度を最初に伝えておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">4. 併用パターン</h3>
              <p>「ワークポート（未経験求人）＋doda（母数と自己検索）」を基本に、丁寧さ重視ならマイナビIT AGENT、とにかく数を見たいならリクルートエージェントを足す、という併用が無理なく回せます。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">※口コミプラットフォームに見られる傾向の要約です。原文転載ではなく、当サイトが傾向をまとめています。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">良い評判の傾向</h3>
              <div className="space-y-3">
                {goodPoints.map((p, i) => (
                  <div key={i} className="border border-emerald-200 bg-emerald-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">気になる評判の傾向</h3>
              <div className="space-y-3">
                {badPoints.map((p, i) => (
                  <div key={i} className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span><span>{t}</span></li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-500 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-slate-400 font-bold">×</span><span>{t}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="age" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の未経験ITは現実どうか</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>当サイトの読者には30代・40代のミドル層が多いため、未経験ITの「現実」も正直に共有します。経済産業省の2019年公表の試算では2030年に最大約79万人のIT人材不足が見込まれており、業界全体としては門戸が広がる方向です。一方で、未経験歓迎求人の多くはポテンシャル採用として20代〜30代前半を想定していることが多く、年齢が上がるほど難易度は上がる傾向があります。</p>
            <p>30代後半以降の未経験者は、「ITそのものの未経験」ではなく「ITに近い経験」を作る発想が現実的です。たとえば現職の業務知識を活かせる社内SE・IT営業・PMO補佐などから入り、実務経験を積んでから本格的なエンジニア職を目指すルートがあります。これは遠回りに見えて、年齢に対する企業の懸念（即戦力性・マネジメント適性）を埋める動きになります。</p>
            <p>年収面では、未経験入社の初年度は相場より下がるケースが一般的です。参考として、doda「2024年度 決定年収レポート」（2025年5月公表）ではIT・通信の平均決定年収が486万円（2024年度）と公表されていますが、これは未経験初年度ではなく業界平均である点に注意してください。30代・40代は「いったん年収が下がっても数年で戻せる職種か」をエージェントに確認しながら進めるのが安全です。詳しくは<Link href="/compare/30s-agents/" className="text-blue-600 hover:underline">30代向け比較</Link>・<Link href="/compare/40s-agents/" className="text-blue-600 hover:underline">40代向け比較</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-4">
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
          <h2 className="text-xl font-bold mb-3">未経験からのIT転職、まずは2〜3社の比較から</h2>
          <p className="text-blue-100 text-sm mb-4">未経験歓迎求人に強いワークポート・dodaを軸に、無理のない社数で動き出しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
