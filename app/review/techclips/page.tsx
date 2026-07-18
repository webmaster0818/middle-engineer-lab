import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "TechClipsエージェントの評判・口コミ｜30代40代エンジニア転職";
const DESCRIPTION =
  "TechClips（テッククリップス）エージェント（notari株式会社運営）の評判・口コミを30代40代エンジニア目線で検証。自社開発企業100%・年収500万円以上の求人、首都圏限定の対応、年収アップ実績、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/techclips/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/techclips/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "notari株式会社（2014年設立／アプリ開発も手がける）"],
  ["サービス種別", "正社員向け転職エージェント（ITエンジニア特化）"],
  ["対象", "ITエンジニア（実務経験者・正社員転職）"],
  ["紹介先の特徴", "紹介求人の100%が自社開発（自社サービス）企業という公式説明"],
  ["求人の年収", "求人の100%が年収500万円以上。500万〜2,000万円以上で絞り込み可（公式）"],
  ["年収アップ実績", "利用者の95%が年収アップという二次情報（時点・調査条件要確認）"],
  ["対応エリア", "首都圏限定（東京・神奈川・埼玉・千葉中心。東京求人が中心という声も）"],
  ["関連サービス", "AI年収提案型スカウト『TechClips ME』も提供"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "自社開発企業に絞って紹介してもらえる",
    body: "サクフリやQiita Job Change等の口コミ系では、紹介求人が自社開発（自社サービス）企業100%という点を評価する傾向の声が見られる。受託・SES中心のキャリアから自社開発へ移りたい人にとって、企業選別の手間が省ける点が支持されている。",
  },
  {
    title: "年収500万円以上の高年収求人に特化",
    body: "公式では求人の100%が年収500万円以上とされ、二次情報では利用者の95%が年収アップしたとされる。高年収・好条件に絞られているため、年収を上げたい経験者と相性が良いという傾向の声がある。",
  },
  {
    title: "現役エンジニア視点のサポート・自社開発のツール",
    body: "二次情報では、IT業界に詳しいコンサルタントから現場目線のアドバイスを受けられたという傾向の声がある。運営のnotari株式会社がアプリ開発も手がけており、サービスのツールが整っているという評価もある。",
  },
];

const badReviews = [
  {
    title: "対応エリアが首都圏に限られる",
    body: "対応エリアが首都圏（東京・神奈川・埼玉・千葉中心）に限られ、「今は東京の求人しかない」という利用者の声も見られる。地方在住・地方転職には向きにくい。",
    cope: "地方やフルリモートを希望する場合は、全国対応のdodaや、リモート求人も扱うレバテックキャリア（/review/levtech/）を併用すると選択肢が広がる。",
  },
  {
    title: "未経験・経験が浅いと紹介求人が限られる",
    body: "高年収・自社開発に特化しているため即戦力前提で、実務経験が浅い場合は紹介求人が限られたという傾向の声がある。「未経験お断り」と語られることもある。",
    cope: "実務経験が浅い場合は、未経験・第二新卒も扱う総合型エージェント（ワークポート等）で経験を積み、経験を整理してから利用するのが現実的。",
  },
  {
    title: "求人の総量は特化ゆえに絞られる",
    body: "自社開発100%・年収500万円以上という条件で絞っているため、求人の総量では総合型・IT特化大手に見劣りすると感じたという傾向の声がある。",
    cope: "求人数の網羅性を補うため、IT特化大手のレバテックキャリアやハイクラスのビズリーチを併用し、TechClipsは自社開発・高年収の軸として使い分けるとよい。",
  },
];

const fitYes = [
  "IT実務経験のある30代・40代エンジニア",
  "受託・SESから自社開発（自社サービス）企業へ移りたい",
  "年収500万円以上の高年収求人を狙いたい",
  "首都圏（東京・神奈川・埼玉・千葉）で働ける",
  "現役エンジニア視点のサポートを受けたい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "地方在住・地方転職を中心に探している",
  "受託・SIerも含め幅広い求人を比較したい",
  "フリーランス（業務委託）で単価を最大化したい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約1〜3分）",
    body: "公式サイトから経歴・希望条件を登録。自社開発企業への志向や、使いたい技術・希望年収を入力しておくと提案がスムーズ。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "現役エンジニア視点のコンサルタントと面談。自社開発で実現したいこと・希望年収・NG条件をすり合わせる。年収を上げたい軸を最初に明確に伝える。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募確認",
    body: "自社開発・年収500万円以上の求人の紹介を受ける。応募は自分の同意後に進めるよう明言し、応募先を都度確認する。",
  },
  {
    step: "STEP4",
    title: "書類添削・面接対策・選考",
    body: "職務経歴書の添削や面接対策を受けて選考へ。自社開発企業の選考傾向を踏まえ、技術経歴の見せ方を相談できる。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件の交渉をサポート。複数内定の比較や退職交渉の相談をして入社日を調整する。",
  },
];

const faqs = [
  {
    q: "TechClipsエージェントの運営会社はどこですか？",
    a: "2014年設立のnotari株式会社が運営しています。アプリ開発も手がける会社で、IT業界向けのWebメディアやスカウトサービス『TechClips ME』も提供しています。",
  },
  {
    q: "本当に自社開発企業だけを紹介してもらえますか？",
    a: "公式では紹介求人の100%が自社開発（自社サービス）企業とされています。受託・SES中心のキャリアから自社開発へ移りたい人にとって、企業選別の手間が省けるのが特徴です。最新の方針は公式サイトでご確認ください。",
  },
  {
    q: "年収はどのくらいの求人がありますか？",
    a: "公式では求人の100%が年収500万円以上とされ、500万〜2,000万円以上の範囲で絞り込めます。二次情報では利用者の95%が年収アップしたとされますが、上がり幅は個人の経験・スキル・ポジションによって異なります。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "対応エリアは首都圏（東京・神奈川・埼玉・千葉中心）に限られ、「今は東京の求人しかない」という利用者の声もあります。地方やフルリモートを希望する場合は、全国対応のdodaやリモート求人も扱うレバテックキャリア（/review/levtech/）の併用を検討してください。",
  },
  {
    q: "未経験でも使えますか？「未経験お断り」は本当ですか？",
    a: "高年収・自社開発に特化しているため即戦力前提で、実務経験が浅い場合は紹介求人が限られます。「未経験お断り」と語られるのはこのためです。経験が浅い方は、未経験・第二新卒も扱うワークポートなどで経験を積んでから利用するのが現実的です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・書類添削・面接対策・年収交渉まで費用はかかりません。費用は採用企業側が負担します。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。自社開発・高年収のTechClipsに、IT特化大手のレバテックキャリアや、ハイクラスのビズリーチ、全国対応のdodaを組み合わせる使い方があります。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT特化・全国）", href: "/review/levtech/" },
  { name: "ビズリーチ（ITハイクラス）の評判", href: "/review/bizreach-it/" },
  { name: "doda（総合型・全国対応）の評判", href: "/review/doda-it/" },
  { name: "IT転職エージェントの比較", href: "/compare/agents/" },
  { name: "正社員という働き方の基礎", href: "/employment/seishain/" },
  { name: "口コミ・評判レビュー一覧", href: "/review/" },
];

export default function TechClipsReview() {
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
          { name: "TechClips" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          TechClipsエージェントの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 自社開発100%・高年収特化の正社員転職エージェントを口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          TechClips（テッククリップス）エージェントは、notari株式会社が運営する<span className="font-bold">ITエンジニア特化の正社員転職エージェント</span>です。紹介求人の100%が自社開発（自社サービス）企業で、求人の100%が年収500万円以上という高年収特化が特徴です（対応は首都圏限定）。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "TechClips公式（notari株式会社）",
            "サクフリ",
            "Qiita Job Change",
            "複数転職系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：首都圏で、自社開発企業への高年収転職を狙う経験者向け</span>。一言でいえば「受託・SESから自社開発へ、年収を上げて移りたい首都圏のIT実務経験者」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・紹介求人の100%が自社開発企業。企業選別の手間が省ける。</li>
              <li>・求人の100%が年収500万円以上。利用者の95%が年収アップという二次情報。</li>
              <li>・一方で対応は首都圏限定・即戦力前提。地方や幅広い求人はdoda・レバテックキャリア併用が現実的。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
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
            ※運営会社・自社開発100%・年収500万円以上・対応エリアは公式情報、年収アップ率95%は二次情報（時点・調査条件要確認）です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TechClipsエージェントの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 自社開発企業100%に特化</h3>
              <p className="text-sm text-petrol-deep">
                紹介求人の100%が自社開発（自社サービス）企業という公式説明があります。受託・SES中心のキャリアから自社開発へ移りたい人にとって、企業を一から選別する手間が省けるのが最大の特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 年収500万円以上の高年収特化</h3>
              <p className="text-sm text-petrol-deep">
                求人の100%が年収500万円以上で、500万〜2,000万円以上の範囲で絞り込めます。二次情報では利用者の95%が年収アップしたとされ、年収を上げたい経験者と相性が良い指標です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 現役エンジニア視点のサポート</h3>
              <p className="text-sm text-petrol-deep">
                IT業界に詳しいコンサルタントから現場目線のアドバイスを受けられたという傾向の声があります。技術スタックや開発文化の話が通じやすく、自社開発企業の選考対策を相談しやすい点が評価されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 自社開発のサービス基盤</h3>
              <p className="text-sm text-petrol-deep">
                運営のnotari株式会社がアプリ開発も手がけており、サービスのツールが整っているという評価があります。AI年収提案型スカウト『TechClips ME』も提供しており、スカウト経由での出会いも狙えます。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載・スコア転載ではありません）。
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

        {/* 悪い評判 */}
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
            TechClipsの「求人の100%が年収500万円以上」を活かすには、自分の年代の相場を知っておくことが大切です。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。提案された求人や交渉額の妥当性を判断する目安にしてください。
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
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳で、ミドル層が市場のボリュームゾーンです。求人が全て500万円以上のTechClipsは、相場の中位以上で自社開発に移りたい層の選択肢になります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag、TechClipsの年収アップ実績（二次）。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別の使い方を整理します。TechClipsは自社開発100%・高年収特化のため、受託・SESから自社開発へキャリアチェンジしたい30代・40代と相性が良いエージェントです（首都圏前提）。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              自社開発への転身と年収アップの両方を狙いやすい年代です。本命の特化エージェントとして使い、面談では「自社開発で実現したいこと」と「上げたい年収」を明確にすると提案の精度が上がります。求人数を補うため、IT特化大手のレバテックキャリアと併用するのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              自社開発企業はカルチャーフィットや年齢構成を重視することもあるため、マネジメント・アーキテクト・技術選定などミドルならではの強みを前面に出すのが有効です。求人の幅を確保するために、ハイクラスのビズリーチや全国対応のdodaを併用すると選択肢が広がります。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。首都圏限定という制約は踏まえつつ、年収交渉では市場価値を冷静に確認することが大切です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            TechClipsは自社開発100%・高年収・首都圏が強みです。求人数の網羅性や全国対応、受託・SIerも含めた比較を補うなら、IT特化大手・総合型・ハイクラスの併用が有効です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリア（IT特化・全国）の評判 →
            </Link>
            <Link href="/review/bizreach-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ（ITハイクラス）の評判 →
            </Link>
            <Link href="/review/doda-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              doda（総合型・全国対応）の評判 →
            </Link>
            <Link href="/compare/agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              IT転職エージェントの比較 →
            </Link>
          </div>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判・悪い評判の傾向」は、以下の口コミ・評判メディアの公開情報を参照し、傾向として要約したものです（原文・スコアの転載は行っていません）。最終確認日：2026年7月17日。
          </p>
          <ul className="space-y-2 text-sm">
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://sakufuri.jp/media/techclips/"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                TechClipsエージェントの口コミ・評判（サクフリ）
              </a>
            </li>
            <li className="border border-slate-200 rounded-lg px-4 py-3">
              <a
                href="https://jobs.qiita.com/tech-clips/"
                rel="nofollow noopener"
                target="_blank"
                className="text-petrol hover:underline font-medium"
              >
                TechClipsエージェントの評判・口コミ（Qiita Job Change）
              </a>
            </li>
          </ul>
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
          <h2 className="text-xl font-bold mb-3">TechClipsエージェントに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            自社開発企業への高年収転職を、エンジニア視点のエージェントに相談してみませんか？
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
