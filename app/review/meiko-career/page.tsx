import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "明光キャリアパートナーズの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "明光キャリアパートナーズ（STRATEGY CAREER）の評判・特徴を30代40代ミドルエンジニア目線で検証。東証プライム明光ネットワークジャパンのグループ会社という信頼背景、有料職業紹介の許可番号、M&A・コンサル・エンジニアなど複数領域の実態、料金、向く人・向かない人を出典付きで正直に解説します。";
const URL = "/review/meiko-career/";
const OFFICIAL_URL = "https://meiko-career.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/meiko-career/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年7月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "気になる評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "評判・口コミの参照元" },
];

const basicData: [string, string][] = [
  ["サービス名", "明光キャリアパートナーズ（エンジニア領域は「STRATEGY CAREER」ブランド）"],
  ["運営会社", "株式会社明光キャリアパートナーズ（2022年9月設立／資本金5,000万円）"],
  ["親会社", "明光ネットワークジャパン（東証プライム上場・明光義塾を運営）のグループ会社"],
  ["代表者", "中川 拓哉（公式・会社概要）"],
  ["所在地", "東京都千代田区麹町5-4 JPR麹町ビル3階"],
  ["許可番号", "有料職業紹介 13-ユ-314857（公式）"],
  ["事業内容", "有料職業紹介／労働者派遣／登録支援機関（特定技能外国人支援）"],
  ["対応領域", "M&A・コンサルティングファーム・ファンド等のハイキャリア＋エンジニア転職＋教育業界＋外国籍人材（IT専業ではない複数領域併営）"],
  ["対応エリア", "首都圏中心（東京・大阪などが軸。地方求人は限定的という二次情報）"],
  ["料金", "求職者は無料（成功報酬型＝採用確定時に企業が費用を負担。有料職業紹介は職業安定法により求職者からの手数料徴収が原則禁止）"],
];

const goodReviews = [
  {
    title: "面接対策が具体的（過去質問傾向・面接官の特徴まで）",
    body: "口コミメディア（タレントスクエア等）の紹介では、応募先ごとの過去の質問傾向や面接官の特徴を踏まえた面接対策が具体的だったという文脈の声が見られる。担当の専門性を評価する傾向がある。",
  },
  {
    title: "書類添削が応募先に合わせた書き換えレベル",
    body: "各口コミメディアの紹介では、汎用的な添削にとどまらず、応募先に合わせて職務経歴書を書き換えるレベルで踏み込んでもらえたという傾向の声が確認できる。",
  },
  {
    title: "M&A・コンサル等のハイキャリア求人を扱う",
    body: "公式および各メディアの紹介では、M&A仲介・コンサルティングファーム・ファンドなど、高年収帯のハイキャリア求人を扱う点が強みとして挙げられている（年収帯・実績数は個別に要確認）。",
  },
];

const badReviews = [
  {
    title: "設立が新しく実績・口コミの蓄積が少ない",
    body: "運営会社は2022年9月設立と比較的新しく、定着率や紹介実績数などの統計データは公式に多くない。独立系口コミプラットフォーム上の声の蓄積も、老舗の大手と比べると限定的な傾向がある。",
    cope: "判断材料が少ない場合は、面談時に自分の希望領域の求人数・支援実績を直接確認するとよい。ハイクラス実績が豊富なJACリクルートメントやビズリーチと併用し、比較する前提で使うと判断しやすい。",
  },
  {
    title: "M&A・教育などに強く、IT専業ではない（求人が限定的な場合）",
    body: "同社はM&A・コンサル・ファンド、教育業界、外国籍人材など複数領域を併営しており、純粋なIT専業エージェントではない。希望職種によっては紹介求人が限定的になる可能性がある。",
    cope: "IT・Web系の求人網羅性を重視するなら、IT特化のレバテックキャリアやdoda ITなどを本命に据え、明光キャリアパートナーズはハイキャリア枠の選択肢を広げる併用先として使うのが現実的。",
  },
  {
    title: "求人が首都圏中心で地方は限定的",
    body: "求人が東京・大阪などに集中しており、地方での転職を希望する場合は選択肢が限られる可能性がある、という傾向の指摘が各メディアで見られる。",
    cope: "地方在住・地方勤務希望の場合は、面談前に居住地・希望勤務地（リモート希望を含む）を伝え、紹介可能な求人があるかを確認しておくと行き違いを防げる。全国対応の総合型との併用も検討したい。",
  },
];

const fitYes = [
  "M&A・コンサル・ファンド等のハイキャリアも視野に入れたい経験者",
  "応募先に合わせた具体的な面接対策・書類添削を受けたい",
  "東証プライム上場グループの運営という背景を重視したい",
  "首都圏（東京・大阪）勤務またはリモート求人を希望している",
  "複数エージェントを併用して選択肢を比較したい",
];

const fitNo = [
  "IT・Web求人の網羅性・求人量を最優先したい",
  "豊富な口コミ実績・長い運営歴の蓄積を重視したい",
  "地方の対面サポートを最優先したい（求人が首都圏中心）",
  "M&A・コンサル・ファンドやエンジニア以外の職種で、幅広い一般求人から選びたい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料相談・申し込み",
    body: "公式サイトの相談フォームから申し込み。在職中でも申し込みでき、情報収集目的の相談も可能。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "担当者と面談し、これまでの経験・希望条件・NG条件をすり合わせる。希望領域（M&A/コンサル/エンジニア等）を具体的に伝えるほど後の提案精度が上がる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・選考対策",
    body: "条件に合う求人の紹介を受け、応募先に合わせた書類添削・面接対策のサポートを受けながら応募する。",
  },
  {
    step: "STEP4",
    title: "内定・入社",
    body: "選考・日程調整を経て内定。条件確認や入社日調整のサポートを受けて完了。",
  },
];

const faqs = [
  {
    q: "明光キャリアパートナーズはどんな会社が運営していますか？",
    a: "株式会社明光キャリアパートナーズ（2022年9月設立・資本金5,000万円・東京都千代田区麹町）が運営しています。明光義塾で知られる東証プライム上場・明光ネットワークジャパンのグループ会社です。有料職業紹介事業許可番号は13-ユ-314857です。",
  },
  {
    q: "料金はかかりますか？求職者は無料ですか？",
    a: "求職者は無料で利用できます。転職エージェント（有料職業紹介）は、採用が決まった際に企業側が成功報酬を支払うビジネスモデルで、職業安定法により求職者から手数料を徴収することは原則禁止されています。明光キャリアパートナーズも有料職業紹介事業許可（13-ユ-314857）を持つ人材紹介サービスのため、求職者は費用負担なく利用できます。",
  },
  {
    q: "エンジニア転職に使えますか？IT専業のエージェントですか？",
    a: "エンジニア領域は「STRATEGY CAREER」ブランドで支援しています。ただし同社はM&A・コンサル・ファンド、教育業界、外国籍人材など複数領域を併営しており、IT専業ではありません。IT・Web求人の網羅性を重視する場合は、IT特化のレバテックキャリアなどと併用するのが現実的です。",
  },
  {
    q: "「内定率が業界平均の8倍」は本当ですか？",
    a: "「内定率 業界平均の8倍＝40%以上」は同社の自社公称値です。第三者による検証値ではないため、保証・断定ではなく参考値として捉えてください。実際の結果は個人の経験・応募ポジションによって異なります。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "求人は東京・大阪など首都圏中心で、地方求人は限定的という二次情報があります。地方在住の方は面談前に対応可否（リモート求人を含む）を確認することをおすすめします。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。一般に2〜3社の併用が推奨されています。ハイクラス実績が豊富なJACリクルートメントやビズリーチ、IT特化のレバテックキャリアなどと組み合わせると、求人の幅と比較材料が増えます。",
  },
];

const related = [
  { name: "JACリクルートメントの評判（ハイクラス両面型）", href: "/review/jac-recruitment/" },
  { name: "ビズリーチの評判（ハイクラススカウト）", href: "/review/bizreach-it/" },
  { name: "アクシスコンサルティングの評判（コンサル特化）", href: "/review/axis-consulting/" },
  { name: "レバテックキャリアの評判（IT特化）", href: "/review/levtech/" },
  { name: "ハイクラス転職の比較", href: "/compare/highclass/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
];

export default function MeikoCareerReview() {
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
          { name: "明光キャリアパートナーズ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          明光キャリアパートナーズの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 ｜ 明光義塾グループの転職支援サービスを公式一次情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          明光キャリアパートナーズは、明光義塾で知られる東証プライム上場・明光ネットワークジャパンのグループ会社である株式会社明光キャリアパートナーズが運営する転職支援サービスです（エンジニア領域は「STRATEGY CAREER」ブランド）。本記事では公式の会社情報と各口コミメディアの紹介をもとに、30代・40代ミドルエンジニアの視点で特徴・料金・向き不向きを整理します。架空の体験談や独自の星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年7月"
          sources={[
            "明光キャリアパートナーズ公式サイト（会社概要）",
            "タレントスクエア",
            "エン ライトハウス（カイシャの評判）",
            "tleon",
            "OpenWork",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：ハイキャリア（M&A・コンサル等）も視野に、手厚い選考対策を受けたい経験者向け</span>。一言でいえば「東証プライム上場グループの運営という安心感のもとで、応募先に合わせた具体的な面接・書類対策を受けたい人」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・親会社は東証プライム上場の明光ネットワークジャパン（明光義塾）。有料職業紹介許可 13-ユ-314857。</li>
              <li>・M&A・コンサル・ファンド等のハイキャリア＋エンジニア（STRATEGY CAREER）＋教育＋外国籍の複数領域を併営。IT専業ではない。</li>
              <li>・「内定率 業界平均の8倍＝40%以上」は自社公称。求職者は無料（成功報酬型・企業が費用負担）。IT求人の網羅性重視ならIT特化との併用が前提。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年7月時点）</h2>
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
            ※会社情報・許可番号は公式の会社概要に基づきます（2026年7月17日確認）。対応エリアなど一部は公式に明記が見当たらず「要確認」としています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">明光キャリアパートナーズの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 東証プライム上場グループという信頼背景</h3>
              <p className="text-sm text-petrol-deep">
                運営会社は、明光義塾で知られる東証プライム上場・明光ネットワークジャパンのグループ会社です。有料職業紹介事業の許可番号は13-ユ-314857。設立は2022年9月と新しいものの、上場企業グループの体制で運営されている点は信頼シグナルのひとつといえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 応募先に合わせた具体的な選考対策</h3>
              <p className="text-sm text-petrol-deep">
                各口コミメディアの紹介では、過去の質問傾向や面接官の特徴を踏まえた面接対策、応募先に合わせて書き換えるレベルの書類添削など、選考支援が具体的という傾向の声が見られます。担当の専門性を評価する文脈が確認できます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ハイキャリア〜エンジニアまで複数領域に対応</h3>
              <p className="text-sm text-petrol-deep">
                M&A・コンサルティングファーム・ファンド等のハイキャリアを軸に、エンジニア転職（STRATEGY CAREER）、教育業界、外国籍人材まで複数領域を扱います。ハイキャリアも視野に入れて相談したい経験者にとっては選択肢を広げやすい一方、IT専業ではない点は理解しておく必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は公式情報および各口コミメディアの紹介を傾向としてまとめたものです（原文転載ではありません）。
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

        {/* 気になる評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">気になる評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、留意点と現実的な対処法もまとめます。
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

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の視点
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。明光キャリアパートナーズはM&A・コンサル等のハイキャリアを軸に、エンジニア（STRATEGY CAREER）・教育・外国籍まで幅広く扱う複数領域型のサービスです。純粋なIT専業ではないため、「IT求人の網羅性」よりも「選考対策の手厚さ」や「ハイキャリアの選択肢」を求める場合に相性が良いといえます。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              経験を年収に反映させやすい年代です。本命はIT特化のレバテックキャリアなどに置きつつ、コンサル・M&A・DX人材などキャリアの幅を広げたい場合の相談先として併用すると、選択肢と比較材料が増えます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              マネジメント経験やドメイン知識を活かしてハイキャリアを狙うなら、ハイクラス実績が豊富なJACリクルートメントやビズリーチを軸に据えつつ、明光キャリアパートナーズを併用先として活用し、応募先に合わせた選考対策を受けるという使い方が現実的です。
            </p>
            <p>
              なお「内定率 業界平均の8倍＝40%以上」は同社の自社公称値であり、第三者検証値ではありません。数字は保証ではなく参考として捉え、面談で自分の希望領域の求人数・実績を直接確認するのがおすすめです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用の流れ</h2>
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
          <h2 className="text-xl font-bold mb-3">明光キャリアパートナーズに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料相談で、ハイキャリアも含めた選択肢を確認してみませんか？
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料相談する
          </a>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            明光キャリアパートナーズ（運営会社は2022年9月設立）は比較的新しいサービスで、独立系口コミプラットフォーム上の声は本文のとおり蓄積が限定的なため、本記事は個別スコアや原文の断定引用を行っていません。評判の傾向は、公式サイトの公表情報（サービス概要・会社概要）と各口コミメディアの明光キャリアパートナーズ該当ページを参照し、傾向として要約したものです。各リンクの最終確認日：2026年7月17日。
          </p>
          <ul className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
            <li className="px-4 py-3 text-sm">
              <a href="https://meiko-career.jp/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                明光キャリアパートナーズ公式サイト（サービス概要・会社概要）
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://talentsquare.co.jp/career/meiko-career-partners-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                タレントスクエア｜明光キャリアパートナーズの評判・口コミ
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://en-hyouban.com/company/10201915956/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                エン ライトハウス（カイシャの評判）｜明光キャリアパートナーズ
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://tleon.co.jp/media/meiko-career-reviews/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                tleon｜明光キャリアパートナーズの評判・口コミ
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://www.openwork.jp/company.php?m_id=a0CIh000002R4Ef" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                OpenWork｜株式会社明光キャリアパートナーズ 社員クチコミ
              </a>
            </li>
          </ul>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
