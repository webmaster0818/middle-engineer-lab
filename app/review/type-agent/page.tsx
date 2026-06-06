import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "type転職エージェントIT 評判｜首都圏特化の実力を検証",
  description:
    "type転職エージェントITの評判を首都圏特化の強みと実績データ(2021-2022年計測)を軸に検証。良い評判・悪い評判の傾向、デメリット対処法、30代・40代の使い方戦略を2026年6月時点でレビューします。",
};

const TITLE = "type転職エージェントIT 評判｜首都圏特化の実力を検証";
const DESCRIPTION =
  "type転職エージェントITの評判を首都圏特化の強みと実績データ(2021-2022年計測)を軸に検証。良い評判・悪い評判の傾向、デメリット対処法、30代・40代の使い方戦略を2026年6月時点でレビューします。";

// H2見出しの目次（アンカー）
const toc = [
  { id: "summary", label: "結論サマリ：どんな人向けか" },
  { id: "basic", label: "基本データ（2026年6月時点）" },
  { id: "strength", label: "type転職エージェントITの特徴・強み" },
  { id: "results", label: "実績データの読み方（計測期間2021-2022）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの使い方戦略" },
  { id: "checklist", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他サービスとの比較・併用" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

// 基本データ表（datasheet 2026年6月準拠）
const basicData: [string, string][] = [
  ["運営会社", "株式会社キャリアデザインセンター（1993年設立・二次情報／公式）"],
  ["IT公開求人数", "約4,200件（2025年8月時点・二次情報）"],
  ["対応エリア", "首都圏（一都三県：東京・神奈川・千葉・埼玉）中心"],
  ["得意領域", "首都圏のIT/Web業界。年収交渉・面接対策に注力"],
  ["年収アップ実績", "年収アップ希望者の約71%が増収・平均増額92万円／ITエンジニアは124万円（2021年10月〜2022年9月の自社調査）"],
  ["定着率", "97.4%（自社公表値）"],
  ["料金", "求職者完全無料"],
];

// 良い評判（datasheet：job.or.jp / R&G 等の傾向要約）
const goodReviews = [
  {
    head: "担当者が親身で丁寧",
    body: "job.or.jpやR&G等の口コミプラットフォームでは、担当アドバイザーの対応が親身で丁寧という傾向の声が見られる。一人ひとりのキャリアに寄り添う支援を評価する声が中心。",
  },
  {
    head: "ミスマッチが少なく定着率が高い",
    body: "求人数の多さより精度を重視した提案で、入社後のミスマッチが少ないという傾向の声が見られる。定着率97.4%（自社公表値）という数値とも整合する評価。",
  },
  {
    head: "首都圏の非公開求人が豊富",
    body: "一都三県のIT/Web企業との結びつきが強く、首都圏の非公開求人・独自求人が豊富という傾向の声が見られる。",
  },
];

// 悪い評判（datasheet：OUTSIDEMAGAZINE 等の傾向要約）
const badReviews = [
  {
    head: "地方求人が少ない",
    body: "首都圏特化のため、一都三県以外の地方求人がほとんどないという声が、OUTSIDEMAGAZINE等の口コミプラットフォームで見られる。",
    cope: "地方やUターン・Iターンを検討する場合は、全国対応の大手エージェントと併用して母集団を確保するのが現実的。首都圏で探すと割り切れば強みになる。",
  },
  {
    head: "未経験向けの求人が少ない",
    body: "IT実務経験者向けの求人が中心で、未経験者向けの求人は少ないという傾向の声が見られる。",
    cope: "完全未経験の場合は、未経験歓迎求人の多いサービスや研修付きの導線を検討する。実務経験があれば十分に強みを活かせる。",
  },
  {
    head: "担当者との相性に左右される",
    body: "担当アドバイザーとの相性で体験が変わるという声が見られる。これは仲介型エージェント全般に共通する傾向でもある。",
    cope: "相性が合わないと感じたら担当変更を申し出る、または複数エージェントを併用して比較するのが有効。遠慮せず希望を明確に伝えることが満足度を高める。",
  },
];

const faqs = [
  {
    q: "type転職エージェントITの評判は実際どうですか？",
    a: "job.or.jp・R&G等の口コミプラットフォームでは「担当者が親身で丁寧」「ミスマッチが少なく定着率が高い」「首都圏の非公開求人が豊富」といった良い評判の傾向が見られます。一方でOUTSIDEMAGAZINE等では「地方求人が少ない」「未経験向けが少ない」「担当者との相性に左右される」といった声も見られます（2026年6月時点）。",
  },
  {
    q: "type転職エージェントITの実績データはどの時点のものですか？",
    a: "年収アップ希望者の約71%が増収、平均増額92万円・ITエンジニアは124万円という実績は、2021年10月〜2022年9月の自社調査に基づく数値です。計測期間がやや古いため、最新の状況とは差がある可能性があります。あわせて定着率97.4%が公表されています。利用時は最新の公式情報もご確認ください。",
  },
  {
    q: "type転職エージェントITの対応エリアは？",
    a: "東京・神奈川・千葉・埼玉の一都三県（首都圏）が中心です。首都圏以外の求人は少ないため、地方転職を希望する場合は全国対応のエージェントとの併用をおすすめします。",
  },
  {
    q: "type転職エージェントITの運営会社は？",
    a: "株式会社キャリアデザインセンター（1993年設立・二次情報）が運営しています。転職サイト「type」や「女の転職type」なども運営する人材サービス企業です。",
  },
  {
    q: "type転職エージェントITの登録は無料ですか？",
    a: "はい、完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料でサポートを受けられます。",
  },
  {
    q: "IT未経験でも使えますか？",
    a: "IT業界での実務経験がある方が中心の対象です。datasheetの傾向でも未経験向け求人は少ないとされるため、完全未経験の方は未経験歓迎求人の多いサービスや研修付きの導線を検討するとよいでしょう。",
  },
  {
    q: "type転職サイトとtype転職エージェントの違いは？",
    a: "type転職サイトは自分で求人を探して応募する転職サイト、type転職エージェントは担当アドバイザーが求人を紹介し、書類添削・面接対策・年収交渉を支援するエージェントサービスです。エージェントは非公開求人にアクセスでき、交渉も代行してくれます。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "利用可能です。首都圏のIT/Web実務経験者を支援しており、年収交渉や面接対策の手厚さはミドル層と相性が良いです。ただし求人エリアが一都三県中心、ハイクラス求人がやや少なめという特性があるため、ハイクラス志向の場合はスカウト型サービスとの併用が現実的です。",
  },
  {
    q: "断られる・しつこいといったことはありますか？",
    a: "実務経験や希望条件によっては紹介できる求人が限られる場合がありますが、首都圏IT経験者であれば紹介を受けやすい傾向です。連絡頻度が気になる場合は、希望する連絡手段やペースを最初に伝えておくとコントロールしやすくなります。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "可能です。type転職エージェントIT（首都圏特化・丁寧な支援）と、IT特化で求人量の多いレバテックキャリアなどを併用すると、首都圏のIT求人を網羅的にカバーできます。",
  },
];

const relatedPosts: { name: string; href: string }[] = [
  { name: "自分に合う転職サービスの選び方", href: "/knowledge/how-to-choose/" },
  { name: "複数エージェントの併用術", href: "/knowledge/multiple-agents/" },
  { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
  { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
];

export default function TypeAgentReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/review/type-agent/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "レビュー", href: "/#ranking" },
          { name: "type転職エージェントIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 首都圏（一都三県）特化のIT転職エージェントを、実績データと評判の傾向から30代・40代目線で検証
        </p>
        <p className="text-slate-700 leading-relaxed mb-2">
          type転職エージェントITは、株式会社キャリアデザインセンターが運営する、首都圏（一都三県）のIT/Web業界に特化した転職エージェントです。
          本記事では「type転職エージェントIT 評判」の検索意図に答えるため、首都圏特化という強みと、計測期間が2021年10月〜2022年9月の実績データの読み方を軸に、
          良い評判・悪い評判の傾向、デメリットの対処法、30代・40代エンジニアの使い方戦略までを整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社キャリアデザインセンター公式・自社調査（実績は2021年10月〜2022年9月計測）",
            "type転職エージェントITに関する二次情報集計",
            "job.or.jp",
            "R&G",
            "OUTSIDEMAGAZINE",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-blue-700 list-decimal list-inside">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論サマリ */}
        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論サマリ：どんな人向けか</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3 text-lg">
              結論：「首都圏でIT転職する実務経験者」に向く、丁寧支援型エージェント
            </p>
            <p className="text-sm text-blue-900 leading-relaxed mb-4">
              type転職エージェントITは、一都三県のIT/Web企業に絞って、年収交渉や面接対策まで丁寧に支援してくれるエージェントです。
              求人数の多さよりマッチング精度を重視する設計で、入社後のミスマッチを抑えたい首都圏在住・勤務希望のエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・<span className="font-medium">向いている</span>：首都圏でIT転職したい実務経験者、丁寧な支援と年収交渉を求める人</li>
              <li>・<span className="font-medium">注意</span>：地方求人が少なく、未経験向け求人も限定的。担当者との相性で体験が変わる</li>
              <li>・<span className="font-medium">おすすめの使い方</span>：求人量の多いIT特化エージェントと併用し、首都圏求人を網羅する</li>
            </ul>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {[
              ["総合評価", "★★★★☆", "首都圏IT経験者に強い"],
              ["支援の手厚さ", "★★★★☆", "丁寧なカウンセリング"],
              ["エリアの広さ", "★★★☆☆", "一都三県中心"],
            ].map(([k, v, note], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="text-xs text-slate-500 mb-1">{k}</p>
                <p className="text-yellow-500 text-lg">{v}</p>
                <p className="text-xs text-slate-500 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
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
          <p className="text-xs text-slate-400 mt-3">
            ※ 求人数は時期により変動が大きく、媒体経由の二次集計値です。実績データは2021年10月〜2022年9月の自社調査に基づきます。最新値は公式サイトでご確認ください。
          </p>
        </section>

        {/* 特徴・強み */}
        <section id="strength" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            type転職エージェントITの特徴・強み
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 首都圏（一都三県）のIT/Web企業への情報力</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                東京・神奈川・千葉・埼玉の首都圏に特化することで、エリア内のIT/Web企業との結びつきを深めています。
                対応エリアを絞っているぶん、首都圏の非公開求人・独自求人が豊富という傾向の声が口コミで見られ、地域に密着した提案が期待できます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 年収交渉に注力するエージェント</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                datasheetでも「年収交渉に注力」が強みとして挙げられています。年収アップ希望者の約71%が増収、平均増額92万円・ITエンジニアは124万円という自社調査の実績（計測期間2021年10月〜2022年9月）があり、
                条件交渉を任せたいエンジニアと相性が良いサービスです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 面接対策が手厚く、ミスマッチが少ない</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                面接対策の手厚さが強みで、求人数より精度を重視した提案によりミスマッチが少ないという傾向の声が見られます。
                定着率97.4%（自社公表値）という数値も、入社後の納得度の高さを裏づける指標として参考になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 老舗キャリアデザインセンターの運営基盤</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                転職サイト「type」などを運営する株式会社キャリアデザインセンター（1993年設立・二次情報）が運営。
                長年の人材サービス運営で培った企業との関係性が、首都圏IT求人の質に表れています。
              </p>
            </div>
          </div>
        </section>

        {/* 実績データの読み方 */}
        <section id="results" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            実績データの読み方（計測期間2021-2022）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-5">
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">重要な前提：</span>
              type転職エージェントITの年収アップ実績は、<span className="font-bold">2021年10月〜2022年9月の自社調査</span>に基づく数値です。
              計測期間がやや古いため、現在の市場や最新の支援実績とは差がある可能性があります。数値はこの計測期間を踏まえて読むことが大切です。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-2 text-left font-medium">指標</th>
                  <th className="px-4 py-2 text-left font-medium">数値</th>
                  <th className="px-4 py-2 text-left font-medium">計測期間・出典</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["年収アップ希望者の増収率", "約71%", "2021年10月〜2022年9月・自社調査"],
                  ["平均増額（全体）", "92万円", "2021年10月〜2022年9月・自社調査"],
                  ["ITエンジニアの平均増額", "124万円", "2021年10月〜2022年9月・自社調査"],
                  ["定着率", "97.4%", "自社公表値"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-t border-slate-200">{row[0]}</td>
                    <td className="px-4 py-3 font-bold text-blue-700 border-t border-slate-200">{row[1]}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700 leading-relaxed">
            参考として、転職市場全体では、doda（パーソルキャリア）2024年度 決定年収レポート（2025年5月公表）で、IT・通信の平均決定年収が469万円（2023年度）から486万円（2024年度）へ上昇しています。
            type転職の数値は特定期間の自社調査である点を踏まえ、こうした公的・公表データと併せて相場感を掴むのがおすすめです。
            年代別の相場は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収相場</Link>もあわせてご確認ください。
          </p>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            job.or.jpやR&G等の口コミプラットフォームで見られる、type転職エージェントITの良い評判の傾向を要約します（個別の口コミ原文ではなく傾向のまとめです）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 flex items-start gap-2">
                  <span className="shrink-0">+</span>
                  {r.head}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判と対処法 */}
        <section id="bad" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公平性のため、OUTSIDEMAGAZINE等の口コミプラットフォームで見られる悪い評判の傾向と、その具体的な対処法も整理します。
          </p>
          <div className="space-y-5">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="border-l-4 border-red-300 p-5">
                  <h3 className="font-bold text-red-700 mb-2 flex items-start gap-2">
                    <span className="shrink-0">-</span>
                    {r.head}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-800">対処法：</span>
                      {r.cope}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代戦略 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの使い方戦略
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ミドルエンジニア転職ラボの視点で、30代・40代がtype転職エージェントITをどう位置づけるべきかを整理します。
            首都圏特化・丁寧支援・年収交渉という特性は、ライフステージが固まりやすいミドル層と相性が良い一方、エリアとハイクラス求人の制約を理解した使い分けが重要です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代エンジニア：年収交渉と精度の高い提案を活かす</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代は実務経験を武器に年収アップを狙いやすい年代です。年収交渉に注力するtype転職エージェントITの特性は、
                首都圏で腰を据えて働きたい30代と噛み合います。相場感は<Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収相場</Link>、
                交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>を参考に、増額の根拠を準備して臨むと効果的です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代エンジニア：ミスマッチ回避と定着重視に向く</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代は入社後のミスマッチが転職全体の成否を大きく左右します。精度重視の提案と定着率97.4%（自社公表値）という特性は、
                「次で長く働きたい」40代の志向に合います。ただしハイクラス・管理職求人の母数は限られるため、スカウト型のハイクラスサービスとの併用が現実的です。
                40代の実態は<Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代エンジニア転職のリアル</Link>もご覧ください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">市場全体の追い風を踏まえる</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。
                首都圏のIT求人需要は底堅く、年収交渉に強いtype転職エージェントITはこの追い風を交渉力に変えやすいサービスです。
                自分の立ち位置は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">エンジニアの市場価値の測り方</Link>で確認しておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "首都圏（一都三県）でIT転職をしたい",
                  "IT/Web業界の実務経験がある",
                  "年収交渉を任せたい・条件にこだわりたい",
                  "求人量より提案の精度・ミスマッチ回避を重視する",
                  "丁寧なカウンセリング・面接対策を受けたい",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "地方・全国の幅広いエリアで探したい",
                  "IT完全未経験で求人紹介を受けたい",
                  "とにかく求人数・選択肢の多さを最優先する",
                  "外資・年収1,000万円超のハイクラス中心に探したい",
                  "自分のペースで自走したくスカウト型を好む",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5ステップ */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-4">
            {[
              ["無料登録・申し込み", "公式サイトから無料登録します。経歴・希望条件（勤務地は首都圏中心）・年収希望などを入力します。"],
              ["キャリアカウンセリング", "担当アドバイザーと面談し、経験・志向・希望条件をすり合わせます。首都圏IT企業の内部情報を踏まえた提案の土台になります。"],
              ["求人紹介・応募", "首都圏の公開・非公開求人から、精度重視で提案を受けます。気になる求人に書類添削を受けたうえで応募します。"],
              ["面接対策・面接", "手厚い面接対策を受けてから面接に臨みます。企業ごとの傾向を踏まえた準備でミスマッチを抑えます。"],
              ["内定・年収交渉・入社", "内定後は年収交渉をアドバイザーが支援。条件に納得して入社へ進みます。"],
            ].map(([head, body], i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-800 mb-1">{head}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-600 mt-4">
            初回面談の準備は<Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">エージェント初回面談の進め方</Link>、
            職務経歴書は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書の書き方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 比較・併用 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスとの比較・併用</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            type転職エージェントITは首都圏特化のため、エリアや求人量を補う併用で弱点をカバーできます。タイプ別の比較は以下が参考になります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { name: "30代におすすめのエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代におすすめのエージェント比較", href: "/compare/40s-agents/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "リモート求人に強いエージェント比較", href: "/compare/remote-agents/" },
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
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-bold text-amber-900 mb-2">おすすめの併用パターン</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-medium">type転職エージェントIT（首都圏特化・丁寧支援・年収交渉）</span> +{" "}
              <Link href="/review/levtech/" className="text-blue-700 underline">レバテックキャリア</Link>
              （IT特化で求人量が多い）の組み合わせがおすすめです。
              首都圏のIT求人を、精度の高い提案と豊富な母集団の両面からカバーできます。ハイクラス志向なら
              <Link href="/review/bizreach-it/" className="text-blue-700 underline">ビズリーチ(IT)</Link>
              のスカウト型との併用も有効です。併用のコツは
              <Link href="/knowledge/multiple-agents/" className="text-blue-700 underline">複数エージェントの併用術</Link>を参照してください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-bold mb-3">type転職エージェントITに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            首都圏でのIT転職をお考えなら、まずは無料カウンセリングから始めてみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            無料カウンセリングを予約する
          </a>
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

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedPosts.map((item, i) => (
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
