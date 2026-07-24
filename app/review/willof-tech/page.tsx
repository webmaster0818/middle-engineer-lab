import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ウィルオブテックの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "ウィルオブテック（WILLOF TECH）の評判・口コミを30代40代エンジニア目線で検証。専属2名体制のサポート、非公開求人約7割、年収UP実績、未経験は不利という正直な点、退会方法までデータと出典付きで解説します。";
const URL = "/review/willof-tech/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/willof-tech/" },
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
  ["運営会社", "株式会社ウィルオブ・ワーク（東証プライム上場ウィルグループ〔6089〕のグループ会社）"],
  ["サービス種別", "ITエンジニア特化の正社員転職エージェント"],
  ["対応エリア", "首都圏中心（リモート求人あり）"],
  ["得意領域", "ITエンジニアの転職（経験者向け）"],
  ["サポート体制", "専属2名体制（キャリアアドバイザー＋アドバイザーの分業型）"],
  ["非公開求人", "保有求人の約7割が非公開（二次情報）"],
  ["年収UP実績", "IT業界経験者の年収UP成功率75.5%（二次情報）"],
  ["年収水準", "年収600万円以上の求人が8割以上（二次情報）"],
  ["満足度・定着", "転職支援進行満足度89%・長期活躍率97%（公式表記）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "専属2名体制で丁寧なサポートが受けられる",
    body: "talentsquareやキャリアアップステージ等の口コミ系では、キャリアアドバイザーとアドバイザーの2名がつく分業体制により、求人提案と選考対策の両面で丁寧なサポートを受けられたという傾向の声が見られる。公式でも転職支援進行満足度89%と表記されている。",
  },
  {
    title: "年収アップの提案・交渉に強い",
    body: "OUTSIDEMAGAZINEやIT転職コラム等では、年収600万円以上の求人が中心で、年収アップを狙った提案・交渉が得意という傾向の声が見られる。二次情報ではIT業界経験者の年収UP成功率75.5%という数値も挙げられている。",
  },
  {
    title: "非公開求人が多く質の高い提案が受けやすい",
    body: "保有求人の約7割が非公開という二次情報があり、口コミでも一般の求人サイトでは見られない求人を紹介してもらえたという傾向の声が見られる。経験者の専門性に合った提案を受けやすい点が評価されている。",
  },
];

const badReviews = [
  {
    title: "未経験者には向かない",
    body: "複数の口コミ系メディアで、未経験者でも応募可能な求人は全体のごく一部（二次情報では約4.3%）にとどまり、未経験・異業種からの転職には向かないという指摘が見られる。経験者特化ゆえの傾向である。",
    cope: "実務経験が浅い・未経験の場合は、未経験歓迎求人も扱うワークポートなどの併用が現実的。経験者であれば、専門性を前面に出すことで本サービスの強みを活かせる。",
  },
  {
    title: "大手総合型と比べると求人数は限られる",
    body: "IT特化かつ非公開中心のため、dodaやリクルートのような大手総合型と比べると総求人数は限られるという傾向の声が見られる。網羅性を最優先する人には物足りない場合がある。",
    cope: "求人数の網羅性を補うなら、総合型のdodaやリクルートエージェントを併用する。ウィルオブテックは「質の高い提案・年収交渉」、総合型は「量」と役割分担すると効率的。",
  },
  {
    title: "担当者との相性・連絡頻度が気になる場合がある",
    body: "口コミでは、丁寧なサポートが評価される一方で、担当者との相性や連絡頻度が合わないと感じたという声も一部見られる。手厚さの裏返しといえる。",
    cope: "初回に連絡手段・頻度・時間帯の希望を伝えておく。相性が合わない場合は担当変更を申し出るのは一般的な対応。複数社併用で比較軸を持つと見極めやすい。",
  },
];

const fitYes = [
  "ITエンジニアの実務経験がある30代・40代",
  "年収アップを狙って転職したい経験者",
  "専属2名体制の丁寧なサポートを受けたい",
  "非公開求人を含めた質の高い提案を受けたい",
  "首都圏勤務またはリモート求人を希望",
];

const fitNo = [
  "IT実務未経験・異業種からの転職を考えている",
  "とにかく多くの求人を一度に見たい（→大手総合型）",
  "地方の対面サポートを最優先したい",
  "フリーランス・業務委託で働きたい（→フリーランスエージェント）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約1〜3分）",
    body: "公式サイトから経歴・希望条件を登録。ITエンジニアの実務経験・技術スタックを入力しておくと提案がスムーズ。",
  },
  {
    step: "STEP2",
    title: "ヒアリング・面談（2名体制）",
    body: "キャリアアドバイザーと面談し、希望条件・年収・NG条件をすり合わせ。希望者はキャリア面談時に適性検査を受けられる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・応募確認",
    body: "非公開求人を含む提案を受ける。応募は自分の同意後に進めるよう明言し、応募先を都度確認する。",
  },
  {
    step: "STEP4",
    title: "書類添削・面接対策・選考",
    body: "専属体制で職務経歴書の添削や面接対策を受けて選考へ。技術経歴の見せ方も相談しやすい。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件の交渉をサポート。複数内定の比較や退職交渉の相談をして入社日を調整。",
  },
];

const faqs = [
  {
    q: "ウィルオブテックはどんな会社が運営していますか？",
    a: "東証プライム上場のウィルグループ（6089）のグループ会社、株式会社ウィルオブ・ワークが運営しています。人材サービスを20年以上手がけてきた企業で、ITエンジニアの転職に特化した「ウィルオブテック」を提供しています。",
  },
  {
    q: "未経験でも使えますか？",
    a: "経験者向けのサービスです。二次情報では未経験者でも応募可能な求人は全体の約4.3%にとどまるとされ、未経験・異業種からの転職には向きません。実務経験が浅い方は、未経験歓迎求人も扱うワークポートなどの併用を検討してください。",
  },
  {
    q: "「やばい」「評判が悪い」という噂は本当ですか？",
    a: "口コミでは専属2名体制の丁寧なサポートや年収アップ提案が評価される一方、未経験には向かない・大手より求人数が限られる・担当との相性という指摘もあります。総じて評判は良好な傾向ですが、経験者向けである点を理解して使うことが大切です。",
  },
  {
    q: "専属2名体制とは何ですか？",
    a: "キャリアアドバイザーとアドバイザーの2名がつく分業型のサポート体制を指す表現です。求人提案と選考対策を分担することで、丁寧なサポートにつながっているとされています。",
  },
  {
    q: "年収UP成功率75.5%は本当ですか？",
    a: "IT業界経験者の年収UP成功率75.5%は二次情報として挙げられている数値です。年収600万円以上の求人が8割以上という二次情報もあります。実際の上がり幅は個人の経験・スキル・応募ポジションによって異なります。",
  },
  {
    q: "退会・解約の方法は？",
    a: "担当者へ退会の意向を伝えるか、公式サイトの問い合わせ窓口から退会手続きを依頼します。転職が決まった場合や活動を中断する場合も連絡しておくと、求人紹介の連絡が止まります。最新の手順は公式サイトでご確認ください。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・書類添削・面接対策・年収交渉まで費用はかかりません。費用は採用企業側が負担します。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能で、一般に2〜3社の併用が推奨されています。質の高い提案・年収交渉のウィルオブテックに、求人数の多い総合型のdodaや、高年収IT特化のレバテックキャリアを組み合わせる使い方があります。",
  },
];

const related = [
  { name: "Geeklyの評判（IT/Web/ゲーム特化）", href: "/review/geekly/" },
  { name: "レバテックキャリアの評判（IT特化）", href: "/review/levtech/" },
  { name: "ワークポートの評判（未経験も）", href: "/review/workport/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
  { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
  { name: "テックゴーの評判（IT特化・経験者向け）", href: "/review/techgo/" },
  { name: "正社員という働き方", href: "/employment/seishain/" },
];

export default function WillofTechReview() {
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
          { name: "ウィルオブテック" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ウィルオブテックの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 専属2名体制のIT特化エージェントの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ウィルオブテック（WILLOF TECH）は、ITエンジニアの転職に特化した<span className="font-bold">正社員転職エージェント</span>です。運営は東証プライム上場ウィルグループのグループ会社、株式会社ウィルオブ・ワーク。本記事では評判・口コミを口コミプラットフォームの傾向と、公表・二次の数値に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ウィルオブテック公式サイト",
            "ウィルグループ（東証プライム上場企業）情報",
            "talentsquare",
            "OUTSIDEMAGAZINE",
            "二次集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：専属2名体制の丁寧なサポートで、年収アップを狙う経験者向け</span>。一言でいえば「ITエンジニアの実務経験があり、手厚いサポートで年収を上げたい30代・40代」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・専属2名体制で支援。転職支援進行満足度89%・長期活躍率97%（公式表記）。</li>
              <li>・非公開求人約7割・年収600万円以上が8割以上・年収UP成功率75.5%（二次情報）。</li>
              <li>・一方で未経験には不向き（応募可は約4.3%）、大手より求人数は限られる点に注意。</li>
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
            ※運営会社・満足度・長期活躍率は公式情報、非公開求人割合・年収UP成功率・年収水準・未経験割合は二次集計値です。求人数・実績は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウィルオブテックの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 専属2名体制の手厚いサポート</h3>
              <p className="text-sm text-petrol-deep">
                キャリアアドバイザーとアドバイザーの2名がつく分業型の体制が最大の特徴です。求人提案と選考対策を分担することで丁寧なサポートにつながり、転職支援進行満足度89%（公式表記）という数値に表れています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 年収アップに強い求人ラインナップ</h3>
              <p className="text-sm text-petrol-deep">
                年収600万円以上の求人が8割以上、IT業界経験者の年収UP成功率75.5%という二次情報があります。年収アップを軸に動きたい30代・40代経験者と相性が良い構造です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 非公開求人が約7割</h3>
              <p className="text-sm text-petrol-deep">
                保有求人の約7割が非公開という二次情報があり、一般の求人サイトでは出会えない求人を提案してもらえる可能性があります。経験者の専門性に合った質の高い提案を受けやすい点が利点です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 上場グループ運営・長期活躍率の高さ</h3>
              <p className="text-sm text-petrol-deep">
                東証プライム上場ウィルグループのグループ会社が運営しており、長期活躍率97%（公式表記）という定着面の数値も掲げています。入社後のミスマッチを抑えたい人に向いています。
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
            ウィルオブテックは年収600万円以上の求人が8割以上・年収UP成功率75.5%（二次情報）と、年収アップに強みがあります。これを活かすには自分の年代の相場を知っておくことが大切です。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。提案された求人や交渉額の妥当性を判断する目安にしてください。
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
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）で、ミドル層が市場のボリュームゾーンです。年収600万円以上が8割という求人構成は、30代・40代経験者が相場の1段階上を狙う際の参考になります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag、ウィルオブテックの年収水準・年収UP成功率（二次情報）。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別の使い方を整理します。ウィルオブテックは専属2名体制と年収アップ提案が武器のため、経験を年収に反映させたいミドル層と構造的に相性が良いエージェントです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              専属体制の手厚いサポートで、年収アップを狙った転職を進めやすい年代です。本命の特化エージェントとして使い、面談では「上げたい年収」と「使いたい技術・行きたい領域」を明確にすると提案の精度が上がります。応募の同意プロセスだけは最初に握っておきましょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              非公開求人と年収交渉力を活かしやすい一方、求人数は大手総合型に劣ります。マネジメントやアーキテクト経験など40代ならではの強みを前面に出しつつ、ハイクラス・管理職求人の幅を確保するために、ビズリーチや40代実績の豊富なdodaを併用するのが堅実です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。手厚いウィルオブテックで丁寧に進めつつ、年収交渉では市場価値を冷静に確認することが大切です。
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
            ウィルオブテックは専属2名体制・年収アップ・非公開求人が強みです。求人数の網羅性や全国対応、ハイクラスの幅を補うなら総合型やハイクラス型の併用が有効です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリア（IT特化）の評判 →
            </Link>
            <Link href="/review/geekly/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Geekly（IT/Web/ゲーム）の評判 →
            </Link>
            <Link href="/review/workport/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ワークポート（未経験も）の評判 →
            </Link>
            <Link href="/compare/agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              IT転職エージェント比較 →
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
            本記事の「良い評判／悪い評判」の傾向は、以下の口コミ・評判メディアで公開されている情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各ページは2026年7月に確認しています。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://talentsquare.co.jp/career/willof-techcareer-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">talentsquare（タレントスクエア）</a>
              <span className="text-slate-500"> ：ウィルオブテックキャリアの評判・口コミ解説</span>
            </li>
            <li>
              <a href="https://tenshoku.asiro.co.jp/engineer/63290/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">キャリアアップステージ</a>
              <span className="text-slate-500"> ：ウィルオブテックの評判・口コミ解説</span>
            </li>
            <li>
              <a href="https://outside.no-limit.careers/will-of-tech-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">OUTSIDEMAGAZINE</a>
              <span className="text-slate-500"> ：ウィルオブテックの評判・年収UP実績の解説</span>
            </li>
            <li>
              <a href="https://engineer-shukatu.jp/tensyoku/willoftech-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">IT転職コラム</a>
              <span className="text-slate-500"> ：ウィルオブテックキャリアの評判（独自取材）</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">※外部サイトの内容・URLは変更される場合があります（最終確認：2026年7月）。数値は各サイトの記載時点のものです。</p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ウィルオブテックに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            経験を年収に反映させたいなら、専属2名体制のウィルオブテックに相談しませんか？
          </p>
          <a href="https://willof.jp/techcareer/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
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
