import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "doda ITの評判・口コミ｜30代40代エンジニアの本音レビュー";
const DESCRIPTION =
  "doda（IT・エンジニア）の評判・口コミを30代40代エンジニア目線で検証。求人数や年収アップ実績、求人・連絡が多すぎる・専門性といった不安、スカウトの減らし方や退会方法までデータと出典付きで解説します。";
const URL = "/review/doda-it/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/doda-it/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "パーソルキャリア株式会社（1989年設立／従業員7,048名）"],
  ["求人数", "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）"],
  ["対応エリア", "全国"],
  ["得意領域", "総合型（検索＋エージェント＋スカウトのハイブリッド）"],
  [
    "年収アップ実績",
    "転職者の約6割が年収アップ。IT・通信の平均決定年収469万円(2023年度)→486万円(2024年度)（2025年5月公表）",
  ],
  ["特徴", "国内最大級の求人数。自分で探しつつエージェント提案も受けられる"],
  ["サポート", "求人紹介・書類添削・面接対策・スカウト（求職者無料）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "求人量が多く選択肢が広い",
    body: "studio-taleやbest-w等の口コミプラットフォームでは、紹介される求人・検索できる求人の量が多く、選択肢が広がったという傾向の声が見られる。dodaは国内最大級の求人数を強みとしており、幅広く見たい人と相性が良い。",
  },
  {
    title: "好条件・希望に合う求人が見つかりやすい",
    body: "best-w等では、求人母数が大きいぶん好条件の求人に出会いやすかったという傾向の声が見られる。検索とエージェント提案を併用できるため、自分のペースで条件を比較しやすい点が評価されている。",
  },
  {
    title: "2名体制でサポートを受けられる場合がある",
    body: "studio-tale等では、キャリアアドバイザーと採用プロジェクト担当の2名体制でサポートを受けられたという傾向の声が見られる（案件・時期による）。求人紹介と企業情報の両面から支援を受けられる点がメリットとされている。",
  },
];

const badReviews = [
  {
    title: "求人・連絡が多すぎると感じる",
    body: "freeconsulやHonNe等では、紹介求人やスカウト・連絡が多く、さばききれないと感じたという傾向の声が見られる。求人数が多いことの裏返しといえる。",
    cope: "マイページの通知設定でスカウトの頻度・条件を絞る。担当者に希望条件（年収下限・職種・勤務地・IT特化のみ等）を明確に伝え、紹介の母数を絞ってもらうと負担が減る。",
  },
  {
    title: "アドバイザーの質にばらつきがある",
    body: "口コミプラットフォームでは、総合型ゆえに担当者によって対応や提案の的確さに差があったという傾向の声が見られる。",
    cope: "相性が合わないと感じたら担当者の変更を申し出る。IT専門性の高い相談はレバテックなどIT特化エージェントを併用して補うのが現実的。",
  },
  {
    title: "IT専門性がやや低いとの声",
    body: "freeconsul等では、IT特化エージェントと比べると技術的な踏み込みが浅いと感じたという傾向の声が見られる。総合型ならではの特性。",
    cope: "技術の深い相談はIT特化のレバテックキャリアやGeeklyを併用。dodaは求人数・全国対応・スカウトの広さを活かす役割と割り切ると使い分けやすい。",
  },
];

const fitYes = [
  "幅広い求人を比較して選択肢を増やしたい",
  "全国（地方含む）の求人を探している",
  "自分で検索しつつエージェント提案も受けたい",
  "40代で年齢を理由に幅広く求人を見たい",
  "スカウトで思わぬ好条件にも出会いたい",
];

const fitNo = [
  "IT技術に深く踏み込んだ相談を最優先したい",
  "連絡・スカウトが多いのが苦手",
  "求人を絞り込んでピンポイントに紹介してほしい",
  "ゲーム業界など特定領域だけを狙いたい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約5分）",
    body: "公式サイトから経歴・希望条件を登録。エージェントサービスと転職サイト（自分で検索）の両方を同時に利用できる。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "担当アドバイザーと面談。希望条件・年収・NG条件をすり合わせる。母数が大きいため、ここで条件を絞るほど紹介の精度が上がる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・検索・スカウト",
    body: "エージェント提案を受けつつ、自分でも求人を検索。企業からのスカウトも届く。通知設定で受け取る量を調整できる。",
  },
  {
    step: "STEP4",
    title: "書類添削・面接対策・選考",
    body: "職務経歴書の添削や面接対策を受けて選考へ。年収査定など無料ツールで市場価値の目安を確認できる。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件交渉をサポート。複数内定の比較や退職交渉の相談をして入社日を調整する。",
  },
];

const faqs = [
  {
    q: "doda（IT・エンジニア）とは何ですか？",
    a: "dodaの中でIT・エンジニア求人を扱うサービスです。パーソルキャリアが運営する国内最大級の総合型サービスで、IT・通信エンジニア求人は5万件超（2026年2月時点・二次経由）。検索・エージェント・スカウトをまとめて使えるのが特徴です。",
  },
  {
    q: "求人や連絡が多すぎるという評判は本当ですか？減らせますか？",
    a: "求人数が多いぶん、紹介やスカウトが多いと感じたという声は口コミに見られます。マイページの通知設定でスカウトの頻度や条件を絞れるほか、担当者に希望条件を明確に伝えて紹介の母数を絞ってもらうことで負担を減らせます。",
  },
  {
    q: "スカウトメールを減らす方法は？",
    a: "マイページの通知設定で、スカウトの頻度や受け取る条件（年収下限・職種・IT特化のみ等）を細かく設定できます。条件を絞ることで、関連度の高いスカウトだけを受け取れます。",
  },
  {
    q: "退会・解約の方法は？",
    a: "dodaのマイページから退会手続きができます。担当アドバイザーがついている場合は退会の意向を伝えておくとスムーズです。退会すると登録情報やスカウトは停止されます。最新の手順は公式サイトでご確認ください。",
  },
  {
    q: "40代エンジニアでも求人はありますか？断られませんか？",
    a: "dodaは全国対応・国内最大級の求人数で、年齢で一律に紹介を絞らない総合型です。マネジメントやアーキテクト経験がある40代は、経験を活かせるポジションの選択肢を広く確保しやすい傾向です。",
  },
  {
    q: "IT専門性はレバテックなどと比べてどうですか？",
    a: "総合型のため、IT特化エージェントと比べると技術的な踏み込みが浅いと感じたという声もあります。技術の深い相談はレバテックキャリアやGeeklyを併用し、dodaは求人数・全国対応・スカウトの広さを活かす使い分けがおすすめです。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。エージェントサービスも転職サイトサービスも、求人紹介・書類添削・面接対策まですべて無料で利用できます。",
  },
  {
    q: "年収はどのくらい上がりますか？",
    a: "パーソルキャリアの「決定年収レポート」（2025年5月公表）では、転職者の約6割が年収アップ。IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）に上昇しています。実際の上がり幅は個人差があります。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。求人数・全国対応のdodaに、IT特化のレバテックキャリアやGeeklyを組み合わせると、量と専門性の両方をカバーできます。",
  },
];

const related = [
  { name: "レバテックとdodaを比較", href: "/compare/levtech-vs-doda/" },
  { name: "dodaとマイナビITを比較", href: "/compare/doda-vs-mynavi/" },
  { name: "リクルートとdodaを比較", href: "/compare/recruit-vs-doda/" },
  { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function DodaItReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "doda(IT特化)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          doda(IT特化)の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 国内最大級の総合型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          doda（IT・エンジニア）はパーソルキャリアが運営する国内最大級の総合型転職サービスで、検索・エージェント・スカウトをまとめて使えるのが特徴です。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公表データに基づいて、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "doda（パーソルキャリア）公式",
            "決定年収レポート（2025年5月公表）",
            "studio-tale",
            "best-w",
            "freeconsul",
            "HonNe",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：求人数と全国対応で選択肢を最大化したい人向け</span>。一言でいえば「幅広い求人を比較したい、全国の求人を探したい、自分でも検索しながら進めたいエンジニア」に向いた総合型サービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・国内最大級の求人数。IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）。全国対応。</li>
              <li>・転職者の約6割が年収アップ、IT・通信の平均決定年収486万円(2024年度・2025年5月公表)。</li>
              <li>・一方で求人・連絡が多い、IT専門性は特化型に劣るという声もあり、併用で補うのが定石。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※運営会社・対応エリアは公式情報、求人数は二次経由（2026年2月時点）、年収実績はパーソルキャリア「決定年収レポート」（2025年5月公表）の値です。求人数は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">doda(IT特化)の特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 国内最大級の求人数で選択肢が広い</h3>
              <p className="text-sm text-petrol-deep">
                総合型として国内最大級の求人数を誇り、IT・通信エンジニア求人は5万件超（2026年2月時点・二次経由）。SIer、自社開発、社内SEなど幅広いタイプのIT求人を比較できます。母数が大きいため、好条件求人に出会いやすいという声につながっています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 検索＋エージェント＋スカウトのハイブリッド</h3>
              <p className="text-sm text-petrol-deep">
                転職サイト（自分で検索）とエージェント（担当者つき）を同時に利用でき、さらに企業からのスカウトも届きます。自分のペースで探しつつプロの提案も受けられる柔軟性が、dodaの大きな差別化要素です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 全国対応と年収アップ実績</h3>
              <p className="text-sm text-petrol-deep">
                対応エリアは全国で、地方求人も探しやすいのが利点です。「決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）と公表されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 年収査定など無料ツールが充実</h3>
              <p className="text-sm text-petrol-deep">
                年収査定をはじめ、市場価値の目安を確認できる無料ツールが用意されています。転職活動の方向性を決める材料として、30代・40代の市場価値チェックにも役立ちます。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載ではありません）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 text-sm">◎ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判と対処法 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、ネガティブな傾向の声と、それぞれへの現実的な対処法もまとめます。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-red-600 mb-2 text-sm">△ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-bold">対処法：</span>
                    {r.cope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 年収相場データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの年収相場データ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            dodaの「決定年収レポート」（2025年5月公表）では、IT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と上昇しています。自分の年代の相場を把握しておくと、提案やスカウトの妥当性を判断しやすくなります。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["20代", "約378万円"],
                  ["30代", "約499万円"],
                  ["40代", "約618万円"],
                  ["50代", "約685万円"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。dodaは転職者の約6割が年収アップという実績があり、求人母数の大きさを活かして相場以上の求人にも網を張れるのが強みです。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：パーソルキャリア「決定年収レポート」（2025年5月公表）、レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別の使い方を整理します。dodaの強みは求人数と全国対応・スカウトの広さ。IT専門性で勝負するより、「選択肢を最大化する土台」として使うのがミドル層には効果的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              IT特化エージェント（レバテックやGeekly）を本命にしつつ、dodaを併用して求人の母数とスカウトの幅を確保する使い方が効率的です。年収査定ツールで市場価値の目安を把握し、特化エージェントの提案と突き合わせると判断がぶれにくくなります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              dodaの真価が出やすい年代です。年齢で一律に絞らない総合型のため、IT特化型で求人が細りやすい40代でも選択肢を広く確保できます。マネジメント・アーキテクト経験を軸に、全国・地方やスカウト経由の思わぬ好条件にも網を張れます。求人・連絡の多さは通知設定と条件提示でコントロールしましょう。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層の需要は底堅いと考えられます。dodaで母数を確保し、特化エージェントで専門性を補う二段構えが、30代・40代には現実的な戦略です。
            </p>
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            向いている人／向いていない人チェックリスト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの流れ（5ステップ）</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            dodaは求人数・全国対応・スカウトの広さが強みです。IT技術の深い相談やゲームなど特定領域は特化型が得意なため、併用で補うのが定石です。具体的な比較は以下の記事で解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/compare/levtech-vs-doda/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテック vs doda の比較 →
            </Link>
            <Link href="/compare/doda-vs-mynavi/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              doda vs マイナビIT の比較 →
            </Link>
            <Link href="/compare/recruit-vs-doda/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              リクルート vs doda の比較 →
            </Link>
            <Link href="/compare/40s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              40代エンジニア向けエージェント比較 →
            </Link>
          </div>
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判／悪い評判の傾向」は、以下の口コミ・評判メディアで公開されているdoda（デューダ）の情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各リンクは2026年7月17日時点で実在を確認しています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="https://studio-tale.co.jp/career-stories/guide/doda-review-and-features/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">studio-tale（dodaの評判・特徴の解説ページ）</a>
            </li>
            <li>
              <a href="https://www.best-w.com/reputations/10" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">ベストワーク（dodaエージェントサービスの口コミページ）</a>
            </li>
            <li>
              <a href="https://freeconsul.co.jp/cs/doda/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">freeconsul（dodaの評判・口コミページ）</a>
            </li>
            <li>
              <a href="https://exidea.co.jp/blog/job/tenshoku-site-agent/doda/" target="_blank" rel="nofollow noopener" className="text-petrol-deep underline hover:text-petrol">HonNe（ホンネ）（dodaの評判・口コミページ）</a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">doda(IT特化)に無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            40代エンジニアの転職も、dodaなら豊富な求人から選択肢を広げられます。
          </p>
          <a href="https://doda.jp/engineer/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料カウンセリングを予約する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
