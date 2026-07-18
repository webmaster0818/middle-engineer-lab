import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/review/green/" },
  title: "Greenの転職評判は？エージェントとの違いを徹底解説",
  description:
    "Green（グリーン）の評判をエンジニア目線で検証。エージェントではなく直接応募型転職サイトである違い、カジュアル面談、口コミの傾向、30代40代の使い分け戦略を出典付きで解説。",
};

const toc = [
  { id: "summary", label: "結論：Greenはこんな人向け" },
  { id: "vs-agent", label: "Greenはエージェントではない：違いを理解する" },
  { id: "basic", label: "基本データ（2026年6月時点）" },
  { id: "strength", label: "Greenの特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向" },
  { id: "measure", label: "デメリットへの対処法" },
  { id: "strategy", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社アトラエ（東証プライム上場・2003年10月設立／二次情報）"],
  ["サービス形態", "成功報酬型の転職サイト（ダイレクトリクルーティング）。エージェントの仲介サポートはなし"],
  ["掲載企業・求人", "掲載企業9,000社以上／求人15,000件以上（媒体により30,000件以上とも・幅あり）"],
  ["登録者", "120万人超（二次情報・幅あり）"],
  ["対応エリア", "全国（東京中心）"],
  ["得意領域", "IT/Webベンチャー・スタートアップ・メガベンチャー"],
  ["特徴的な機能", "「気になる」機能、カジュアル面談、企業との直接やり取り"],
  ["料金", "求職者完全無料（企業側が掲載・成功報酬を負担）"],
];

const strengths = [
  {
    title: "企業と直接やり取りできるダイレクトリクルーティング",
    body: "Greenの根幹は、エージェントを介さず企業と直接やり取りできる点です。求職者は自分で求人を検索し、応募・スカウト・面談まで企業と直接コミュニケーションを取ります。間に担当者が入らないぶん、企業の温度感がダイレクトに伝わり、自分のペースで活動を進められます。一方で、書類添削・面接対策・年収交渉といったエージェントの仲介サポートは付かないため、その役割は自分で担うことになります。",
  },
  {
    title: "「気になる」機能で双方の温度感を確認できる",
    body: "正式応募の前に企業へ「気になる」を送れる機能があります。企業側も「気になる」を返すことができ、双方が興味を示してからカジュアル面談・選考へ進める仕組みです。いきなり応募するハードルを下げ、マッチング度の高い企業と効率的に出会える設計になっています。",
  },
  {
    title: "カジュアル面談文化でミスマッチを防げる",
    body: "選考を前提としない「カジュアル面談」が根付いており、開発環境・チーム体制・社風を事前に質問できます。みん評等の口コミプラットフォームでも、このカジュアル面談がGreenの評価ポイントとして挙げられる傾向があります。入社後のミスマッチを減らしたいエンジニアにとって実利的な仕組みです。",
  },
  {
    title: "IT/Webベンチャー・スタートアップ求人に強い",
    body: "IT/Web業界に特化しており、ベンチャー・スタートアップ・メガベンチャーの求人が中心です。モダンな技術スタックや柔軟な働き方を打ち出す企業が多く、Web系のキャリアを志向するエンジニアと相性が良い一方、SIerや製造業、地方求人は手薄になりやすい傾向があります。",
  },
];

const goodReviews = [
  {
    point: "企業と直接やり取りでき、スピードが速い",
    detail:
      "エージェントを介さないぶん、やり取りが速いという声が見られます。自分のペースでスピーディーに動きたい人に向く傾向です。",
  },
  {
    point: "ベンチャー・Web系求人が豊富",
    detail:
      "IT/Webベンチャーやスタートアップの求人の多さを評価する声があります。モダンな開発環境を求める層に支持される傾向です。",
  },
  {
    point: "カジュアル面談が好評",
    detail:
      "選考前に社風や開発体制を知れるカジュアル面談が評価されています。ミスマッチを避けたい人にとっての利点として挙げられています。",
  },
];

const badReviews = [
  {
    point: "地方求人が少ない",
    detail:
      "東京・Web系企業に求人が偏る傾向があり、地方求人の少なさが指摘されています。地方在住者は総合型エージェントとの併用が現実的です。",
  },
  {
    point: "内定につながりにくいという声",
    detail:
      "応募から内定までを自力で進める必要があるため、選考対策や段取りが甘いと通過率が伸びにくいという声が見られます。準備の質が結果を左右します。",
  },
  {
    point: "エージェントの支援がない",
    detail:
      "書類添削・面接対策・年収交渉といった仲介サポートが無い点が、サポートを求める人には不満として挙げられます。これは欠点というより設計上の特性です。",
  },
];

const faqs = [
  {
    q: "Greenはエージェントですか？転職サイトですか？",
    a: "Greenは転職エージェントではなく、企業と直接やり取りする「ダイレクトリクルーティング型の転職サイト」です。担当アドバイザーはつかず、求人検索・応募・面談・条件交渉を自分で進めます。書類添削や面接対策などの仲介サポートが必要な場合は、エージェントとの併用が現実的です。",
  },
  {
    q: "Greenの利用は無料ですか？",
    a: "はい、求職者は完全無料です。企業側が掲載料・成功報酬を負担するビジネスモデルのため、利用者に費用は発生しません。",
  },
  {
    q: "エージェントとの違いは何ですか？",
    a: "最大の違いは「間に担当者が入るかどうか」です。エージェントは求人紹介・書類添削・面接対策・年収交渉を代行してくれますが、Greenはこれらを自分で行う代わりに、企業と直接やり取りでき、自分のペースで進められます。スピードと自由度を取るならGreen、伴走サポートを取るならエージェント、という整理になります。",
  },
  {
    q: "「気になる」機能とは何ですか？",
    a: "正式応募の前に企業へ気軽に興味を示せる機能です。「気になる」を送ると企業に通知が届き、企業も興味があればカジュアル面談などの打診が来ます。双方の温度感を確認してから選考に進める仕組みです。",
  },
  {
    q: "カジュアル面談とは何ですか？",
    a: "選考を前提としない情報交換の場です。開発環境・チーム体制・社風などを気軽に質問でき、入社後のミスマッチを防げます。Greenでは多くの企業がカジュアル面談に対応している傾向があります。",
  },
  {
    q: "どんな企業の求人が多いですか？",
    a: "IT/Webベンチャー、スタートアップ、メガベンチャーの求人が中心です。IT/Web業界特化のため、SIerや製造業、地方の求人は少なめになる傾向があります。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "利用は可能です。ただしベンチャー・スタートアップ中心のため、若手〜30代前半に最もフィットしやすい傾向があります。30代後半〜40代は、マネジメント・特定技術など専門性を打ち出せる求人を中心に探し、エージェントと併用すると選択肢を補えます。",
  },
  {
    q: "エージェントと併用してもよいですか？",
    a: "おすすめの進め方です。Greenで自分の興味のある企業をカジュアル面談で探りつつ、エージェントから年収交渉や非公開求人の提案を受ける組み合わせで、直接応募とサポートの両方の利点を取れます。",
  },
  {
    q: "退会・利用停止はできますか？",
    a: "アカウント設定や問い合わせ窓口から退会できます。スカウト通知が多いだけであれば、退会前に通知設定や公開範囲を調整する方法もあります。",
  },
];

const relatedArticles = [
  { name: "Geekly vs Green 比較", href: "/compare/geekly-vs-green/" },
  { name: "Green vs Wantedly 比較（直応募2サービスの違い）", href: "/compare/green-vs-wantedly/" },
  { name: "直接応募型サービスの使い方", href: "/knowledge/direct-apply/" },
  { name: "スカウト型転職の活用法", href: "/knowledge/scout/" },
  { name: "スタートアップ vs 大手の選び方", href: "/knowledge/startup-vs-enterprise/" },
  { name: "レバテックキャリアの評判", href: "/review/levtech/" },
  { name: "30代エンジニアにおすすめのエージェント", href: "/compare/30s-agents/" },
];

export default function GreenReview() {
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
        title="Greenの転職評判は？エージェントとの違いを徹底解説"
        description="Green（グリーン）の評判をエンジニア目線で検証。エージェントではなく直接応募型転職サイトである違い、カジュアル面談、口コミの傾向、30代40代の使い分け戦略を出典付きで解説。"
        url="/review/green/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "Green" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Greenの転職評判は？エージェントとの違いを徹底解説
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 直接応募型転職サイトの仕組みと口コミ傾向を出典付きで検証</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Green（グリーン）は、株式会社アトラエが運営するIT/Web業界特化の転職サービスです。ここで最初に押さえておきたい最重要ポイントは、<span className="font-bold">Greenは転職エージェントではなく、企業と直接やり取りする「ダイレクトリクルーティング型の転職サイト」</span>だということ。担当アドバイザーがつくエージェントとは仕組みも使い方も大きく異なります。本記事では、この「エージェントとの違い」を軸に、Greenの特徴・口コミ傾向・30代40代の使い分け戦略を、出典を明示しながら解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["株式会社アトラエ（二次情報）", "みん評", "axxis", "HonNe", "minhyo"]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：Greenはこんな人向け</h2>
            <p className="text-sm text-blue-900 mb-4 leading-relaxed">
              <span className="font-bold">総合評価：自分で動けるWeb系エンジニアに強い「直接応募型」転職サイト。</span>
              一言でいえば、<span className="font-bold">「IT/Webベンチャーを自分のペースで探したい人」「カジュアル面談で社風を確かめたい人」「エージェントの介入なしに企業と直接話したい人」</span>に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li className="flex gap-2"><span className="shrink-0 font-bold">①</span>エージェントではなく直接応募型。担当者の仲介サポートは無い代わりに自由度とスピードが高い</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">②</span>「気になる」機能とカジュアル面談で、社風や開発体制を事前に確認できる</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">③</span>ベンチャー・Web系中心。地方・SIer・40代向け求人は手薄なため、エージェント併用が前提に向く</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* エージェントとの違い */}
        <section id="vs-agent" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Greenはエージェントではない：違いを理解する</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Greenを正しく使うために、まず「転職エージェント」と「直接応募型転職サイト（ダイレクトリクルーティング）」の違いを理解しましょう。この違いを知らずに「サポートしてくれない」と感じてしまうのは、仕組みのミスマッチです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-bold text-slate-700 border-b border-slate-200">比較項目</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-700 border-b border-slate-200">Green（直接応募型）</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-700 border-b border-slate-200">転職エージェント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["やり取りの相手", "企業と直接", "担当アドバイザー経由"],
                  ["求人探し", "自分で検索・スカウト受信", "担当者が紹介"],
                  ["書類添削・面接対策", "自分で行う", "担当者がサポート"],
                  ["年収・条件交渉", "自分で行う", "担当者が代行"],
                  ["進め方", "自分のペース・スピード重視", "担当者と二人三脚"],
                  ["向く人", "自走できる人・社風重視の人", "サポートを受けたい人"],
                ].map(([a, b, c], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">{a}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            つまりGreenは、エージェントの「伴走サポート」が無い代わりに、「自由度」と「企業との距離の近さ」を提供するサービスです。サポートが欲しい場面では、<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>などのIT特化エージェントを併用するのが、最も現実的な使い方になります。直接応募型の活用法は<Link href="/knowledge/direct-apply/" className="text-petrol hover:underline">直接応募型サービスの使い方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※掲載企業数・求人数・登録者数は媒体により幅があり、二次情報を含みます。最新値は公式サイトでご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Greenの特徴・強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-blue-900 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            みん評等の口コミプラットフォームでは、主に次のような傾向の声が見られます（個別の体験談ではなく傾向の要約です）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2"><span className="text-green-600">+</span>{r.point}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            一方で、axxis・HonNe等の口コミプラットフォームでは次のような不満の傾向も見られます。公平性のため、デメリットも具体的に確認しておきましょう。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><span className="text-red-500">-</span>{r.point}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対処法 */}
        <section id="measure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリットへの対処法</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「サポートが無い」への対処</p>
              <p>書類添削・面接対策・年収交渉は、IT特化エージェントを併用してカバーします。Greenで気になる企業を直接探しつつ、選考対策や交渉はエージェントに任せる二刀流が効果的です。</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「内定につながりにくい」への対処</p>
              <p>直接応募は段取りと準備が結果を左右します。カジュアル面談で得た情報を志望動機に反映し、ポートフォリオや職務経歴を企業ごとに最適化することで通過率を高められます。</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「地方・SIer求人が少ない」への対処</p>
              <p>地方在住や非Web系を志向する場合は、全国展開の総合型エージェントと併用しましょう。Greenはあくまで「Web系・ベンチャーの直接応募チャネル」と位置づけるのが現実的です。</p>
            </div>
          </div>
        </section>

        {/* 30代40代戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの活用戦略</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              当サイト（ミドルエンジニア転職ラボ）は30代・40代エンジニアの読者を想定しています。ベンチャー・Web系中心というGreenの性質上、年代によって「使いどころ」が変わります。
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">30代：社風を見極める「直接チャネル」として活用</h3>
              <p>
                30代はWeb系・スタートアップへの転換余地がまだ大きい年代です。Greenのカジュアル面談を使い、給与水準だけでなく開発体制・裁量・働き方を直接確認できるのは大きな利点です。参考までに、レバテック公表の年代別平均年収（2025年）では正社員SEの30代は約499万円、年収1,000万円以上の割合は8.01%とされています。ベンチャーは年収の振れ幅が大きいため、カジュアル面談で報酬レンジを早めに確認し、エージェント経由の交渉材料とするのが賢い使い方です。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">40代：専門性を打ち出し、サポートはエージェントで補う</h3>
              <p>
                40代はベンチャー求人の母数が30代より絞られます。レバテック公表値（2025年）では正社員SEの40代平均年収は約618万円、1,000万円以上の割合は12.67%とされ、経験者としての市場価値は高い年代です。Greenを使うなら、マネジメント経験や特定技術など専門性を明確に打ち出し、企業と直接対話して相性を測るのが有効です。ただし年収交渉や選考対策は自走が前提のため、エージェント併用でサポート面を補うことを強く推奨します。<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>もあわせてご覧ください。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">市場背景：直接応募が機能しやすいIT人材不足</h3>
              <p>
                経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。人材を直接採りたい企業ほどダイレクトリクルーティングに積極的で、Greenのような直接応募型はこの流れに乗りやすいチャネルです。自分から動けるミドル層にとって、企業と直接つながれる利点は大きいといえます。
              </p>
            </div>
          </div>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "IT/Webベンチャーを自分のペースで探したい",
                  "カジュアル面談で社風・開発体制を確かめたい",
                  "エージェントの介入なく企業と直接話したい",
                  "書類添削や面接対策を自分でこなせる",
                  "モダンな技術・柔軟な働き方を重視する",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "書類添削・面接対策の伴走サポートが欲しい",
                  "年収交渉を代行してほしい",
                  "地方・SIer・製造業の求人を中心に探したい",
                  "ベンチャーより大手・安定を最優先したい",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-3">
            {[
              ["無料登録・プロフィール作成", "公式サイトから登録し、職務経歴やスキルを入力します。企業はこのプロフィールを見てスカウトを送るため、内容の充実度が反応率を左右します。"],
              ["求人検索・「気になる」送信", "自分で求人を検索し、興味のある企業に「気になる」を送ります。企業からのスカウトを受け取ることもできます。"],
              ["カジュアル面談", "選考前にカジュアル面談で社風・開発体制・条件感を確認します。ここで得た情報が、後の志望動機や交渉の材料になります。"],
              ["応募・選考", "相性が良ければ正式応募し、選考に進みます。書類・面接対策は自分で準備するか、エージェント併用でカバーします。"],
              ["内定・条件確認・入社", "内定後は条件を自分で確認・交渉し、入社日を調整します。交渉に不安があればエージェントの併用が有効です。"],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed mb-4">
            <p><span className="font-bold">Greenが向くケース：</span>Web系ベンチャーを自分のペースで探したい、カジュアル面談で社風を確かめたい、企業と直接やり取りしたい。</p>
            <p><span className="font-bold">エージェントが向くケース：</span>書類添削・面接対策・年収交渉のサポートが欲しい、地方やSIerも含めて幅広く紹介してほしい。</p>
            <p><span className="font-bold">併用パターン：</span>Greenで気になる企業を直接探しつつ、<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>などのエージェントで非公開求人の提案や交渉サポートを受ける二刀流が、直接応募とサポートの両取りになります。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Geekly vs Green", href: "/compare/geekly-vs-green/" },
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "paiza転職の評判", href: "/review/paiza/" },
              { name: "ビズリーチの評判（スカウト型）", href: "/review/bizreach-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の口コミ傾向は、Green自体のレビューではなく、第三者の口コミ・評判メディアに掲載された声を参照して傾向を要約したものです（原文・スコアの転載ではありません）。最新の内容は各リンク先でご確認ください。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5 bg-slate-50">
            <li className="flex items-start gap-2">
              <span className="text-petrol shrink-0">›</span>
              <a href="https://minhyo.jp/green-japan" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">
                みん評：Green（グリーン）の口コミ・評判
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-petrol shrink-0">›</span>
              <a href="https://axxis.co.jp/magazine/55798" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">
                axxis（すべらない転職）：Greenの口コミ・評判調査
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-petrol shrink-0">›</span>
              <a href="https://exidea.co.jp/blog/job/job-change/green/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">
                HonNe（ホンネ）：Green（グリーン）の評判・口コミと求人の特徴
              </a>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">
            ※各リンク先の実在は2026年7月時点で確認しています。外部サイトの内容・URLは予告なく変更される場合があります。掲載企業数・求人数などの数値は最新を公式サイトでご確認ください。
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
          <h2 className="text-xl font-bold mb-3">Greenに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">まずは「気になる」を送って、カジュアルに企業との出会いを始めてみませんか？</p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">無料登録して求人を見る</a>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((item, i) => (
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
