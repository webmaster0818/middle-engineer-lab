import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/workport-vs-mynavi/" },
  title: "ワークポート マイナビIT 比較｜量と全国対応 vs 手厚いサポート",
  description:
    "ワークポートとマイナビIT AGENTを徹底比較。全国対応・求人量のワークポートと、書類添削・面接対策が手厚いマイナビIT。求人数・サポート・スピード・対象層を実データで整理し、30代40代エンジニアの選び方を解説します。",
};

const faqs = [
  {
    q: "ワークポートとマイナビIT AGENTの最大の違いは？",
    a: "求人の幅・全国対応か、サポートの手厚さかという軸の違いです。ワークポートは総合型で全国47都道府県57拠点、未経験歓迎を含む求人量が強み。マイナビIT AGENTは20〜30代若手層に強く、書類添削・面接対策が手厚い点が特徴です。量と全国網ならワークポート、丁寧なサポートならマイナビIT AGENTです。",
  },
  {
    q: "未経験からIT転職するならどっち？",
    a: "求人量で見るとワークポートが未経験歓迎求人が豊富です。マイナビIT AGENTは未経験者への書類添削・面接対策が手厚く、準備に時間をかけたい人向き。どちらも一長一短のため、「量を当たりたいならワークポート」「準備を丁寧にしたいならマイナビ」で選ぶと良いでしょう。",
  },
  {
    q: "対応スピードはどっちが速い？",
    a: "ワークポートは口コミでレスポンスの速さが評価されており、初動が速い傾向です。マイナビIT AGENTは丁寧なヒアリングを重視するため、その分時間をかける場合があります。急いで多くの求人に当たりたいならワークポート、じっくり準備したいならマイナビという住み分けです。",
  },
  {
    q: "求人の質はどっちが高い？",
    a: "一概には言えません。マイナビIT AGENTはIT特化型で求人が安定し、担当がIT業界に詳しいという評価があります。ワークポートは総合型で量が多いぶん、求人の幅が広く選択肢が増えます。「厳選された求人を丁寧に」ならマイナビ、「数多く比較したい」ならワークポートです。",
  },
  {
    q: "30代前半・ミドル層にはどっち？",
    a: "マイナビIT AGENTは20〜30代の若手層に強みがあり、初めての転職や手厚い支援を求める30代前半に向きます。ワークポートは全国対応で求人量が多く、地方在住や幅広く探したい30代以降に現実的です。年代が上がるほど両方に当たって比較するのが安全です。",
  },
  {
    q: "マイナビIT AGENTのデメリットは？",
    a: "口コミプラットフォーム（axxis等）では、(1)連絡が多い、(2)紹介求人数が少ない場合がある、(3)ハイクラス・地方求人が手薄という声が見られます。若手・首都圏には強い一方、ハイクラス志向や地方在住のミドルには物足りない可能性があるため、ワークポートや他のハイクラス系と併用する選択肢があります。",
  },
  {
    q: "しつこい？退会はできる？",
    a: "両社とも口コミで「連絡が多い」という声が一定数あります（ワークポートはaxxis・イーデス等、マイナビはaxxis等）。連絡頻度や手段の希望は初回に担当へ伝えると軽減できます。退会・利用停止は担当者やサポート窓口へ申し出れば手続き可能です。",
  },
  {
    q: "両方登録すべき？",
    a: "おすすめです。ワークポートで求人量と全国の選択肢を確保しつつ、マイナビIT AGENTの手厚い書類・面接対策で内定の質を高める使い分けが効果的です。どちらも求職者は無料なのでリスクなく併用できます。",
  },
];

const comparison = [
  { item: "サービス形態", a: "総合型エージェント（IT・ゲームが最も強い）", b: "IT特化型エージェント（マイナビIT AGENT）" },
  { item: "運営会社", a: "株式会社ワークポート（2003年3月設立・従業員1,335名）", b: "株式会社マイナビ" },
  { item: "公開求人数", a: "11万件以上（うちIT関連3万件以上・公式LP/二次）", b: "総数の公式値は確認不可" },
  { item: "実績", a: "統一された公表値は確認不可", b: "転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）" },
  { item: "得意領域", a: "IT全般＋未経験歓迎。幅広い職種", b: "Web系・SIer・社内SE。20〜30代若手に強い" },
  { item: "サポート", a: "スピード・求人量重視", b: "書類添削・面接対策が手厚い" },
  { item: "未経験対応", a: "未経験歓迎求人が豊富", b: "未経験者への丁寧なサポート" },
  { item: "対応エリア", a: "全国47都道府県57拠点", b: "全国（主要都市に拠点）。地方は手薄との声" },
  { item: "対象年代", a: "20代〜30代（幅広い）", b: "20代〜30代前半中心" },
  { item: "料金", a: "求職者完全無料（公式）", b: "求職者無料" },
];

const workportReviews = [
  { type: "good", text: "紹介求人の量が多い、レスポンスが早いという声" },
  { type: "good", text: "未経験歓迎求人が豊富という評価" },
  { type: "bad", text: "連絡が多すぎる、希望と異なる求人紹介、担当の専門性にばらつきという声" },
];

const mynaviReviews = [
  { type: "good", text: "サポートが手厚い、担当がIT業界に詳しいという声" },
  { type: "good", text: "初めての転職でも安心できたという評価" },
  { type: "bad", text: "連絡が多い、紹介求人が少ない場合、ハイクラス・地方求人が手薄という声" },
];

const workportFor = [
  "とにかく早く・多くの求人に当たりたい人",
  "未経験からIT業界にキャリアチェンジしたい人",
  "IT全般を幅広く比較検討したい人",
  "地方在住で全国の拠点網を活かしたい人",
  "SIer・インフラ・テストなど職種を広く見たい人",
];

const mynaviFor = [
  "転職初心者で手厚いサポートが欲しい人",
  "書類添削・面接対策をじっくり受けたい人",
  "IT特化の専門的なアドバイスが欲しい人",
  "厳選された求人を丁寧に紹介してほしい人",
  "20代〜30代前半で初めてのIT転職の人",
];

const relatedArticles = [
  { name: "ワークポートの評判・口コミ", href: "/review/workport/" },
  { name: "マイナビIT AGENTの評判・口コミ", href: "/review/mynavi-it/" },
  { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
  { name: "doda vs マイナビIT比較", href: "/compare/doda-vs-mynavi/" },
  { name: "未経験OKエージェント比較", href: "/compare/inexperienced/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "detail", label: "項目別の徹底比較" },
  { id: "reviews", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combine", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

export default function WorkportVsMynaviPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ワークポート マイナビIT 比較｜量と全国対応 vs 手厚いサポート" description="ワークポートとマイナビIT AGENTを徹底比較。求人量・全国対応とサポートの手厚さを軸に、求人数・スピード・対象層を実データで解説します。" url="/compare/workport-vs-mynavi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ワークポート vs マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ワークポート マイナビIT 比較｜求人量・全国対応 vs 手厚いサポート、どっちを選ぶ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 総合型のワークポート vs IT特化のマイナビIT AGENTを比較</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">「ワークポート マイナビIT 比較」で迷う人の判断軸は、<strong>求人の量・全国対応を取るか、サポートの手厚さを取るか</strong>です。ワークポートは総合型で全国47都道府県57拠点、未経験歓迎を含む豊富な求人量が強み。マイナビIT AGENTはIT特化で20〜30代若手層に強く、書類添削・面接対策が手厚いのが特徴です。本記事では求人数・サポート・スピード・対象層を実データで整理します。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["株式会社ワークポート 公式", "マイナビIT AGENT（株式会社マイナビ）関連情報", "Qiita Job Change", "OUTSIDEMAGAZINE", "axxis", "イーデス"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-blue-800">求人量と全国対応、スピードを重視するならワークポート。</strong>公開11万件以上（うちIT関連3万件以上）の総量と全国57拠点で、未経験歓迎を含め幅広く当たれます。地方在住者にも現実的です。</p>
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-emerald-800">手厚い書類添削・面接対策を受けたいならマイナビIT AGENT。</strong>20〜30代若手層に強く、転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）という数値も参考になります。初めての転職に向いています。</p>
            <p className="text-slate-700 leading-relaxed"><strong>量とサポートを両取りしたいなら併用が最適解。</strong>ワークポートで選択肢を確保し、マイナビの手厚い対策で内定の質を高める——両方無料なので合わせて使う価値があります。</p>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ワークポート</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は時期により変動し、媒体経由の二次集計値を含みます。取得時点を併記しています。マイナビの定着率・年収アップ率は転職メディア集計の二次情報です。最新値は各公式サイトでご確認ください。</p>
        </section>

        <section id="detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別の徹底比較</h2>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">求人数・求人の幅</h3>
          <p className="text-slate-600 leading-relaxed mb-4">ワークポートは公開求人11万件以上（うちIT関連3万件以上・公式LP/二次）と総量が大きく、未経験歓迎やSIer・インフラ・テストなど幅広い職種をカバーします。マイナビIT AGENTは総数の公式値が確認できませんが、IT特化型として求人の質と業界知見が評価されます。「量で広く当たる」ならワークポート、「IT特化で厳選」ならマイナビという住み分けです。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">年収・実績</h3>
          <p className="text-slate-600 leading-relaxed mb-4">マイナビIT AGENTは転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）という数値が参照されます。ワークポートは統一された公表値が確認できないため断定はできませんが、求人量が多いぶん条件比較の材料を集めやすい利点があります。年収アップ率の数値を重視するならマイナビの公表値が一つの目安になります。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">サポート体制</h3>
          <p className="text-slate-600 leading-relaxed mb-4">ここが両者の分かれ目です。マイナビIT AGENTは書類添削・面接対策が手厚く、担当がIT業界に詳しいという評価があり、初めての転職でも安心という声が口コミで見られます。ワークポートはスピードと求人量を重視するスタイルで、積極的に求人を提案する一方、担当の専門性にばらつきがあるという声もあります。丁寧な伴走を求めるならマイナビが向きます。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">スピード</h3>
          <p className="text-slate-600 leading-relaxed mb-4">ワークポートは口コミでレスポンスの速さが評価され、初動が速い傾向です。マイナビIT AGENTは丁寧なヒアリングを重視するため時間をかける場合があります。「早く動きたい」ならワークポート、「準備を整えてから」ならマイナビです。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">対象層・エリア</h3>
          <p className="text-slate-600 leading-relaxed">マイナビIT AGENTは20〜30代の若手層に強く、ハイクラス・地方求人は手薄との声があります。ワークポートは全国47都道府県57拠点で地方にも対応するため、地方在住者や幅広い年代には現実的です。エリアと年代の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント10社比較</Link>もあわせてご確認ください。</p>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-5">Qiita Job Change・OUTSIDEMAGAZINE・morejob・axxis・イーデス等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載はしていません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 mb-3">ワークポートの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {workportReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-emerald-600 font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">マイナビIT AGENTの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {mynaviReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-petrol font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 口コミは個人の主観を含むため、傾向の参考として捉えてください。出典: Qiita Job Change・OUTSIDEMAGAZINE・morejob・axxis・イーデス等。</p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-emerald-50 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 mb-3">ワークポートが向く人</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                {workportFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">マイナビIT AGENTが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                {mynaviFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="combine" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド：Aが向くケース / Bが向くケース / 併用パターン</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "ワークポート中心が向くケース", desc: "求人量・全国対応・スピードを重視する人。未経験を含めて幅広く当たりたい人、地方在住者はワークポートを軸にします。" },
                { num: "2", title: "マイナビIT AGENT中心が向くケース", desc: "初めての転職で手厚い書類・面接対策を受けたい20〜30代前半。IT特化の業界知見を重視するならマイナビを軸にします。" },
                { num: "3", title: "併用パターン（最も効率的）", desc: "ワークポートで求人量と全国の選択肢を確保し、マイナビの手厚い対策で内定の質を高める。役割が補完的で、両方無料のため取りこぼしを減らせます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点：このペアをどう使い分けるか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「ワークポート マイナビIT 比較」を30代・40代のミドルエンジニアの目線で見ると、注意点があります。マイナビIT AGENTは20〜30代若手層に強みがある一方、口コミではハイクラス・地方求人が手薄との声があります。<strong>40代やハイクラス志向のミドルは、マイナビ単独だと選択肢が細る可能性</strong>があり、求人量と全国対応を持つワークポートで母数を確保するのが現実的です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">年収面では、レバテック公表の年代別平均年収（2025年）で正社員SEは30代約499万円・40代約618万円。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。ミドルは年収レンジが広いため、マイナビの年収アップ率73.7%（二次情報・転職メディア集計）のような数値を一つの参考にしつつ、ワークポートで複数オファーを比較して交渉材料を増やすのが有効です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">市場面では、経産省「IT人材需給に関する調査」（2019年公表の試算）で2030年に最大約79万人のIT人材不足が見込まれており、実務経験の厚いミドルの需要は底堅い見通しです。ただし年代が上がるほど「若手向けの手厚いサポート（マイナビ）」だけでなく「幅広い母数と地方対応（ワークポート）」を確保しておくほうが、取りこぼしを防げます。</p>
          <p className="text-slate-600 leading-relaxed">なお、40代でハイクラス・年収アップを本気で狙うなら、当ペアに加えてハイクラス特化サービスの検討も選択肢です。年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>もあわせてご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">ワークポートの求人量・全国対応×マイナビの手厚いサポート。両方無料で、量と質を両立しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
