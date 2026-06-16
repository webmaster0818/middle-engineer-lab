import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Geeklyの評判・口コミ｜30代40代エンジニアの本音レビュー";
const DESCRIPTION =
  "Geekly（ギークリー）の評判・口コミを30代40代エンジニア目線で検証。求人数や年収アップ実績、レスポンスの速さ、しつこい・勝手に応募といった不安、退会方法までデータと出典付きで解説します。";
const URL = "/review/geekly/";

export const metadata: Metadata = {
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
  ["運営会社", "株式会社Geekly（2011年8月設立／渋谷区／代表 奥山貴広）"],
  [
    "求人数",
    "公開37,000件以上（2026年1月時点）、非公開含め46,000件以上（2026年5月時点・二次集計）",
  ],
  ["対応エリア", "首都圏中心（フルリモート求人あり）"],
  ["得意領域", "IT・Web・ゲーム業界専門特化"],
  [
    "年収アップ実績",
    "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）",
  ],
  ["特徴", "提案スピードが強み。希望職種への定着率97%（二次）"],
  ["サポート", "書類添削・面接対策・年収交渉（求職者無料）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "レスポンスが早い・提案がスピーディ",
    body: "2b-connectや転職アンテナ等の口コミプラットフォームでは、連絡や求人提案のレスポンスが早く、在職中でもテンポよく進められたという傾向の声が見られる。Geeklyは提案スピードを強みに掲げており、急いで動きたい人と相性が良い。",
  },
  {
    title: "選考までスムーズに進む",
    body: "転職アンテナ等では、書類提出から選考までの段取りがスムーズだったという傾向の声が見られる。日程調整や企業とのやり取りの代行がスピード感につながっているとの感想が確認できる。",
  },
  {
    title: "実務経験者への提案数が多い",
    body: "2b-connect等では、IT・Web・ゲームの実務経験者に対して紹介求人数が多かったという傾向の声が見られる。専門特化ゆえにマッチする求人にアクセスしやすい点が評価されている。",
  },
];

const badReviews = [
  {
    title: "連絡がしつこいと感じることがある",
    body: "Qiita Job Change等では、連絡頻度が高く、しつこいと感じたという傾向の声が一部見られる。スピード重視の裏返しといえる。",
    cope: "初回に連絡手段・頻度・時間帯の希望を明確に伝えておく。応募の意思決定ペースも共有しておくと、過度な催促を避けやすい。",
  },
  {
    title: "担当者の質にばらつきがある",
    body: "口コミプラットフォームでは、担当者によって提案の的確さや対応に差があったという傾向の声が見られる。",
    cope: "相性が合わないと感じたら担当者の変更を申し出るのは一般的な対応。複数社を併用して比較軸を持つと、合う担当者を見極めやすい。",
  },
  {
    title: "勝手に応募されたという報告例がある",
    body: "Qiita Job Change等では、確認が不十分なまま応募が進んだと感じたという報告例が見られる。認識合わせが甘いと起きやすい。",
    cope: "「応募は必ず自分の同意後に」と最初に明言する。応募先リストを都度書面（チャット）で確認し、記録を残しておくと安心。",
  },
];

const fitYes = [
  "IT・Web・ゲーム業界の実務経験がある",
  "ゲーム・エンタメ業界への転職を考えている",
  "在職中でスピーディに転職を進めたい",
  "首都圏勤務またはフルリモート求人を希望",
  "20代後半〜30代で経験を年収に反映させたい",
];

const fitNo = [
  "IT・Web・ゲーム以外の業界を探している",
  "地方の対面サポートを最優先したい",
  "自分のペースでゆっくり進めたい（連絡頻度が気になる）",
  "40代でハイクラス・管理職求人を中心に探したい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約1〜3分）",
    body: "公式サイトから経歴・希望条件を登録。IT・Web・ゲームの実務経験を入力しておくと提案がスムーズ。",
  },
  {
    step: "STEP2",
    title: "ヒアリング・面談",
    body: "担当者と希望条件・年収・NG条件をすり合わせ。スピード提案が強みのため、希望の方向性を最初に固めておくと無駄が少ない。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募確認",
    body: "条件に合う求人の紹介を受ける。応募は自分の同意後に進めるよう明言し、応募先を都度確認する。",
  },
  {
    step: "STEP4",
    title: "書類添削・面接対策・選考",
    body: "職務経歴書の添削や面接対策を受けて選考へ。専門特化ゆえに技術経歴の見せ方も相談しやすい。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件の交渉をサポート。複数内定の比較や退職交渉の相談をして入社日を調整。",
  },
];

const faqs = [
  {
    q: "Geeklyは断られることがありますか？未経験でも使えますか？",
    a: "IT・Web・ゲーム業界に専門特化しているため、実務経験者が主な対象です。未経験・異業種からの場合は紹介求人が限られることがあります。実務経験が浅い方は、未経験歓迎求人も扱うワークポートなどの併用を検討してください。",
  },
  {
    q: "連絡がしつこいという評判は本当ですか？",
    a: "口コミでは提案スピードが速いという評価がある一方、連絡頻度が高くしつこいと感じたという声も一部あります。気になる場合は、初回に連絡手段・頻度・時間帯の希望を伝えておくと調整してもらえます。",
  },
  {
    q: "勝手に応募されることはありますか？",
    a: "勝手に応募が進んだと感じたという報告例が口コミに見られます。トラブルを避けるため、「応募は必ず自分の同意後に進めてほしい」と最初に伝え、応募先を都度確認・記録しておくことをおすすめします。",
  },
  {
    q: "退会・解約の方法は？",
    a: "担当者へ退会の意向を伝えるか、公式サイトの問い合わせ窓口から退会手続きを依頼します。転職が決まった場合や活動を中断する場合も連絡しておくと、求人紹介の連絡が止まります。最新の手順は公式サイトでご確認ください。",
  },
  {
    q: "年収アップ率81%・平均76万円アップは本当ですか？",
    a: "年収アップ率約81%・平均上昇額約76万円は2025年9月時点の二次情報として公表されている数値です。実際の上がり幅は個人の経験・スキル・応募ポジションによって異なります。",
  },
  {
    q: "ゲーム業界に強いというのは本当ですか？",
    a: "GeeklyはIT・Web・ゲーム業界に専門特化しており、ゲーム・エンタメ領域の求人を扱う点が特徴です。希望職種への定着率97%という二次情報もあります。エンジン経験など専門スキルを評価してもらいやすい傾向です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・書類添削・面接対策・年収交渉まで費用はかかりません。費用は採用企業側が負担します。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "首都圏中心ですが、フルリモート求人も扱われているため、リモート前提なら地方在住でも利用できる可能性があります。対面の地方サポートを重視する場合は全国対応のdodaなどの併用を検討してください。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。スピードと専門性のGeeklyに、求人数の多い総合型のdodaや、高年収IT特化のレバテックキャリアを組み合わせる使い方があります。",
  },
];

const related = [
  { name: "Geeklyとレバテックを比較", href: "/compare/levtech-vs-geekly/" },
  { name: "GeeklyとGreenを比較", href: "/compare/geekly-vs-green/" },
  { name: "Geeklyとワークポートを比較", href: "/compare/geekly-vs-workport/" },
  { name: "提案スピードで選ぶエージェント比較", href: "/compare/speed/" },
  { name: "ゲーム業界への転職ガイド", href: "/industry/gaming/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function GeeklyReview() {
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
          { name: "レビュー", href: "/#ranking" },
          { name: "Geekly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Geeklyの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT・Web・ゲーム特化エージェントの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Geekly（ギークリー）はIT・Web・ゲーム業界に専門特化した転職エージェントです。本記事では「評判・口コミ」を口コミプラットフォームの傾向と、公表されている数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社Geekly公式会社概要",
            "2b-connect",
            "転職アンテナ",
            "Qiita Job Change",
            "二次集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：スピード提案とゲーム・Web特化が強み</span>。一言でいえば「IT・Web・ゲームの実務経験があり、在職中にテンポよく転職を進めたい20代後半〜30代エンジニア」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT・Web・ゲーム専門特化。提案スピードが強みで選考までスムーズという声が多い。</li>
              <li>・年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）。</li>
              <li>・一方で連絡頻度の高さや担当者のばらつきの指摘もあり、認識合わせが鍵。</li>
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
            ※会社概要は公式情報、求人数・年収アップ実績・定着率は二次集計値（時点併記）です。求人数は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Geeklyの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. IT・Web・ゲーム業界への専門特化</h3>
              <p className="text-sm text-petrol-deep">
                IT・Web・ゲーム業界に専門特化しており、公開求人37,000件以上（2026年1月時点）、非公開含め46,000件以上（2026年5月時点・二次集計）。特にゲーム・エンタメ領域の求人を扱う点が他社との差別化要素です。希望職種への定着率97%という二次情報もあります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 提案スピードが速い</h3>
              <p className="text-sm text-petrol-deep">
                Geeklyは提案スピードを強みに掲げており、口コミでもレスポンスが早く選考までスムーズという傾向の声が見られます。在職中で時間が限られる30代・40代でも、効率よく活動を進めやすいのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 経験者への提案数と年収アップ実績</h3>
              <p className="text-sm text-petrol-deep">
                実務経験者への提案数が多いという傾向の声があり、年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）という数値も公表されています。経験を年収に反映させたいエンジニアと相性が良い指標です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 専門特化ゆえの書類・面接サポート</h3>
              <p className="text-sm text-petrol-deep">
                業界特化のため、技術スタックやプロジェクト経験の見せ方など、職務経歴書・面接の相談がしやすいのも利点です。選考までの段取りがスムーズという声につながっています。
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
            Geeklyの年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）という数値を活かすには、自分の年代の相場を知っておくことが大切です。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。提案された求人や交渉額の妥当性を判断する目安にしてください。
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
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）で、ミドル層が市場のボリュームゾーンです。Geeklyの平均上昇額76万円は、相場の1〜2段階上を狙える水準感の参考になります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag、Geekly年収アップ実績（二次・2025年9月時点）。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別の使い方を整理します。Geeklyはスピードと専門特化が武器のため、在職中で時間の限られるミドル層と構造的に相性が良いエージェントです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              提案数・スピードの恩恵を最も受けやすい年代です。本命の特化エージェントとして使い、面談では「上げたい年収」と「使いたい技術・行きたい領域（Web／ゲーム等）」を明確にすると、スピード提案の精度が上がります。応募の同意プロセスだけは最初に握っておきましょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              専門スキルの評価は受けやすい一方、Geeklyの中心層は20代〜30代である点は踏まえる必要があります。マネジメントやアーキテクト経験など40代ならではの強みを前面に出しつつ、ハイクラス・管理職求人の幅を確保するために、ビズリーチや40代実績の豊富なdodaを併用するのが堅実です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。スピード重視のGeeklyで動きつつ、年収交渉では市場価値を冷静に確認することが大切です。
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
            Geeklyはスピード・IT/Web/ゲーム特化・首都圏寄りが強みです。求人数の網羅性や全国対応、40代の幅を補うなら総合型やハイクラス型の併用が有効です。具体的な比較は以下の記事で解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/compare/levtech-vs-geekly/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテック vs Geekly の比較 →
            </Link>
            <Link href="/compare/geekly-vs-green/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Geekly vs Green の比較 →
            </Link>
            <Link href="/compare/geekly-vs-workport/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Geekly vs ワークポート の比較 →
            </Link>
            <Link href="/compare/speed/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              提案スピードで選ぶエージェント比較 →
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Geeklyに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ゲーム・Web業界への転職は、業界特化のGeeklyに相談しませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
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
