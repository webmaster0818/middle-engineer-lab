import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Geekly ワークポート 比較｜IT特化と総合型の違い",
  description:
    "Geekly（ギークリー）とワークポートを徹底比較。IT/Web/ゲーム特化のGeeklyと、全国対応の総合型ワークポート。求人数・年収・サポート・スピード・対象層を実データで解説し、30代40代エンジニアの選び方を示します。",
};

const faqs = [
  {
    q: "Geeklyとワークポートの最大の違いは？",
    a: "得意領域と対応エリアの違いです。GeeklyはIT/Web/ゲーム業界に特化し提案スピードに強みがある専門特化型エージェント。ワークポートは総合型ですがIT・ゲームが最も強く、全国47都道府県57拠点で未経験歓迎求人も含め幅広くカバーします。専門領域を深く攻めるならGeekly、幅広く全国で探すならワークポートです。",
  },
  {
    q: "未経験からIT転職するならどっち？",
    a: "ワークポートが向いています。ワークポートは未経験歓迎求人が豊富で、総合型ゆえに間口が広いのが特徴です。Geeklyは実務経験者への提案数が多いとされる一方、未経験向けの幅は限定的です。ただし「未経験」といっても年代やこれまでの職歴で状況が変わるため、両方に相談して比較するのが確実です。",
  },
  {
    q: "年収アップしやすいのはどっち？",
    a: "Geeklyは年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）を掲げています。ワークポートは統一された年収アップ率の公表値は確認できていません。経験を活かした年収アップを狙うならGeeklyの実績が参考になりますが、求人の総量はワークポートが多く、選択肢の広さから条件交渉のカードが増える面もあります。",
  },
  {
    q: "対応スピードはどっちが速い？",
    a: "どちらもスピードに定評があります。Geeklyは提案スピードが強みとされ、ワークポートも口コミでレスポンスの速さが評価されています。一概にどちらが上とは言えませんが、求人を素早く大量に見たいならワークポート、IT/Web領域で精度の高い提案を素早く受けたいならGeeklyという住み分けです。",
  },
  {
    q: "求人数が多いのはどっち？",
    a: "総量ではワークポートが多めです。ワークポートは公開求人11万件以上（うちIT関連3万件以上・公式LP/二次）。Geeklyは公開37,000件以上（2026年1月時点・二次集計）、非公開含め46,000件以上（2026年5月時点・二次）です。ただしGeeklyはIT/Web/ゲームに絞られているため、専門領域の密度はGeeklyが高い傾向です。",
  },
  {
    q: "30代エンジニアにはどっち？",
    a: "Web系・ゲーム業界を狙う30代経験者にはGeeklyの専門性が、全国で幅広く・地方も視野に入れる30代にはワークポートの拠点網が効きます。年収交渉を代行してほしいならGeekly、求人量と未経験含む幅を取るならワークポート。迷ったら両方登録が無難です。",
  },
  {
    q: "ワークポートはしつこい？退会できる？",
    a: "口コミプラットフォーム（axxis・イーデス等）では「連絡が多すぎる」という声が一定数見られます。連絡頻度や手段（電話/メール）の希望は最初に担当へ伝えると軽減できます。退会・利用停止は担当者やサポート窓口へ申し出れば手続きできます。Geekly側にも「連絡がしつこい」という声があるため、両社とも初回に連絡頻度を調整するのが快適に使うコツです。",
  },
  {
    q: "両方登録するメリットは？",
    a: "GeeklyのIT/Web特化の提案精度と、ワークポートの全国対応・大量求人を組み合わせられます。非公開求人の重複が少なく、登録するだけで選択肢が広がります。どちらも求職者は無料なのでリスクなく併用できます。",
  },
];

const comparison = [
  { item: "サービス形態", a: "IT/Web/ゲーム特化型エージェント", b: "総合型エージェント（IT・ゲームが最も強い）" },
  { item: "運営会社", a: "株式会社Geekly（2011年8月設立・渋谷区）", b: "株式会社ワークポート（2003年3月設立・従業員1,335名）" },
  { item: "公開求人数", a: "37,000件以上（2026年1月時点・二次集計）/非公開含め46,000件以上（2026年5月時点・二次）", b: "11万件以上（うちIT関連3万件以上・公式LP/二次）" },
  { item: "年収アップ実績", a: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）", b: "統一された公表値は確認不可" },
  { item: "得意領域", a: "IT/Web/ゲーム業界。提案スピード", b: "IT全般＋未経験歓迎。幅広い職種をカバー" },
  { item: "未経験対応", a: "実務経験者向けの提案が中心", b: "未経験歓迎求人も豊富" },
  { item: "対応エリア", a: "首都圏中心（二次情報）", b: "全国47都道府県57拠点" },
  { item: "対象年代", a: "20〜30代の経験者中心", b: "20代〜30代（幅広い)" },
  { item: "料金", a: "求職者無料", b: "求職者完全無料（公式）" },
];

const geeklyReviews = [
  { type: "good", text: "レスポンスが早く選考までスムーズだったという声" },
  { type: "good", text: "実務経験者への提案数が多いという評価" },
  { type: "bad", text: "連絡がしつこい、担当者の質にばらつきがあるという声" },
];

const workportReviews = [
  { type: "good", text: "紹介求人の量が多い、レスポンスが早いという声" },
  { type: "good", text: "未経験歓迎求人が豊富という評価" },
  { type: "bad", text: "連絡が多すぎる、希望と異なる求人紹介、担当の専門性にばらつきという声" },
];

const geeklyFor = [
  "Web系・ゲーム業界に特化して転職したい経験者",
  "年収交渉を専任アドバイザーに代行してほしい人",
  "IT/Web領域の非公開求人を質重視で見たい人",
  "提案スピードを重視する人",
  "首都圏でIT/Web転職を進める人",
];

const workportFor = [
  "未経験からIT業界にキャリアチェンジしたい人",
  "IT全般を幅広く、求人量を見て比較したい人",
  "地方在住で全国の拠点網を活かしたい人",
  "SIer・インフラ・テストなども視野に入れたい人",
  "とにかく多くの求人にスピーディに当たりたい人",
];

const relatedArticles = [
  { name: "Geekly（ギークリー）の評判・口コミ", href: "/review/geekly/" },
  { name: "ワークポートの評判・口コミ", href: "/review/workport/" },
  { name: "Geekly vs Green比較", href: "/compare/geekly-vs-green/" },
  { name: "ワークポート vs マイナビIT比較", href: "/compare/workport-vs-mynavi/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "未経験OKエージェント比較", href: "/compare/inexperienced/" },
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

export default function GeeklyVsWorkportPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Geekly ワークポート 比較｜IT特化と総合型の違い" description="GeeklyとワークポートをIT特化型と総合型の観点で徹底比較。求人数・年収・サポート・スピード・対象層を実データで解説します。" url="/compare/geekly-vs-workport/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Geekly vs ワークポート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Geekly（ギークリー）ワークポート 比較｜IT特化型と総合型、どっちを選ぶ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ IT/Web/ゲーム特化 vs 全国対応の総合型を比較</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">「Geekly ワークポート 比較」を調べる人の関心は、<strong>専門特化と幅広さのどちらを取るか</strong>に集約されます。GeeklyはIT/Web/ゲーム業界に絞った特化型エージェントで提案スピードと精度が強み。ワークポートは総合型ながらIT・ゲームが最も強く、全国47都道府県57拠点で未経験歓迎求人まで幅広くカバーします。本記事では求人数・年収・サポート・スピード・対象層を実データで整理し、あなたに合う使い方を示します。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["株式会社Geekly 公式会社概要", "株式会社ワークポート 公式", "Qiita Job Change", "morejob", "axxis", "イーデス"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-blue-800">IT/Web/ゲーム領域で経験を活かし、年収交渉まで任せたいならGeekly。</strong>特化型ゆえに提案の精度が高く、年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）という実績を掲げています。</p>
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-green-800">未経験を含めて幅広く、全国で求人量を見たいならワークポート。</strong>公開11万件以上（うちIT関連3万件以上）の総量と、全国57拠点の対応力が武器です。</p>
            <p className="text-slate-700 leading-relaxed"><strong>専門性と幅を両取りしたいなら併用が最適解。</strong>Geeklyで精度の高い提案を受けつつ、ワークポートで選択肢の量を確保する——非公開求人の重複が少なく、両方無料なので合わせて登録する価値があります。</p>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ワークポート</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は時期により変動が大きく、媒体経由の二次集計値を含みます。取得時点を併記しています。最新値は各公式サイトでご確認ください。</p>
        </section>

        <section id="detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別の徹底比較</h2>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">求人数・求人の幅</h3>
          <p className="text-slate-600 leading-relaxed mb-4">総量はワークポートが優勢です。公開求人11万件以上（うちIT関連3万件以上・公式LP/二次）と幅が広く、未経験歓迎求人やSIer・インフラ・テストなど職種の選択肢が豊富です。Geeklyは公開37,000件以上（2026年1月時点・二次集計）、非公開を含め46,000件以上（2026年5月時点・二次）ですが、IT/Web/ゲームに絞られているぶん専門領域の密度は高い傾向です。「量で広く当たる」ならワークポート、「IT/Webを深く」ならGeeklyです。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">年収・交渉</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Geeklyは年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）を掲げ、交渉を代行します。ワークポートは統一された年収アップ率の公表値が確認できないため断定はできませんが、求人総量が多いぶん条件の比較材料を集めやすい利点があります。年収を主目的にするなら、まずGeeklyの提案で相場感を掴むのが効率的です。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">サポート体制</h3>
          <p className="text-slate-600 leading-relaxed mb-4">両者ともエージェント型で、求人紹介・書類添削・面接対策・日程調整を担当が支援します。Geeklyはアドバイザーの提案数とスピードが評価される一方、ワークポートは「未経験歓迎の間口の広さ」と「担当が積極的に求人を出す」点が口コミで挙がります。なお両社とも担当者の質にばらつきがあるという声があり、合わない場合は担当変更を申し出るのが現実的です。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">スピード</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Geeklyは提案スピードが強み、ワークポートもレスポンスの速さが口コミで評価されています。どちらも初動は速い部類で、差は「IT/Web特化の精度（Geekly）か、量とエリアの広さ（ワークポート）か」に表れます。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">対象層・エリア</h3>
          <p className="text-slate-600 leading-relaxed">Geeklyは首都圏中心、ワークポートは全国47都道府県57拠点で地方にも対応します。地方在住者や、首都圏外でのIT転職を考えるミドル層にはワークポートの拠点網が有利です。エリアを軸にした比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>もあわせてご確認ください。</p>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-5">Qiita Job Change・morejob・axxis・イーデス等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載はしていません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Geeklyの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {geeklyReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-blue-600 font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 mb-3">ワークポートの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {workportReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-emerald-600 font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 口コミは個人の主観を含むため、傾向の参考として捉えてください。出典: Qiita Job Change・morejob・axxis・イーデス・2b-connect・転職アンテナ等。</p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Geeklyが向く人</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                {geeklyFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 mb-3">ワークポートが向く人</h3>
              <ul className="space-y-2 text-sm text-emerald-700">
                {workportFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="combine" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド：Aが向くケース / Bが向くケース / 併用パターン</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Geekly中心が向くケース", desc: "IT/Web/ゲーム領域の経験者で、提案精度と年収交渉代行を重視する人。首都圏で専門領域を深く攻めるならGeeklyを軸にします。" },
                { num: "2", title: "ワークポート中心が向くケース", desc: "未経験を含めて幅広く見たい人、地方在住者、求人量を比較したい人。全国の拠点網を活かすならワークポートを軸にします。" },
                { num: "3", title: "併用パターン（最も効率的）", desc: "Geeklyで精度の高いIT/Web提案と年収交渉を、ワークポートで求人量とエリアの広さを確保。非公開求人の重複が少なく、両方無料で選択肢が一気に広がります。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点：このペアをどう使い分けるか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">30代・40代のミドルエンジニアが「Geekly ワークポート 比較」を考えるとき、ポイントは<strong>「自分のキャリアが専門特化型に乗るか、幅広い総合型に乗るか」</strong>です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Web系やゲーム業界で実務を積んできたミドルなら、Geeklyの特化型提案が刺さりやすく、年収交渉の代行も効果的です。レバテック公表の年代別平均年収（2025年）では正社員SEは30代約499万円・40代約618万円とされ、ミドルは交渉レンジが大きいため、アップ実績を掲げるGeeklyの価値が相対的に高まります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">一方、SIerやインフラ、社内SEなど領域が幅広い人、あるいは地方在住のミドルには、全国57拠点・求人量11万件以上のワークポートが現実的です。40代になると首都圏一極の特化型だけでは選択肢が細る場合があり、エリアと職種の幅を確保できる総合型は安全網になります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">市場環境としては、経産省「IT人材需給に関する調査」（2019年公表の試算）で2030年に最大約79万人のIT人材不足が見込まれており、実務経験の厚いミドルの需要は底堅い見通しです。だからこそ、年代が上がるほど「特化型で深さ（Geekly）」と「総合型で幅・地方対応（ワークポート）」を併用し、求人の取りこぼしを防ぐのが合理的です。</p>
          <p className="text-slate-600 leading-relaxed">年代別の戦略は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>もあわせてご覧ください。</p>
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
          <p className="text-blue-100 text-sm mb-4">GeeklyのIT/Web特化の精度×ワークポートの全国対応・大量求人。両方無料で取りこぼしのない転職活動を。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
