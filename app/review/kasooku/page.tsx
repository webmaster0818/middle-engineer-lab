import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "カソーク（Kasooku）の評判・口コミは？怪しくない？【2026年7月】副業から転職の仕組みを検証";
const DESCRIPTION =
  "カソーク（Kasooku）の評判・口コミは？怪しい？に直答。上場ユナイテッドグループ運営という実態、副業・複業から相性を見て転職につなげる仕組み、エンジニア案件の有無、料金無料の理由、口コミが少ない点の正直な評価まで出典付きで解説します（2026年7月確認）。";
const URL = "/review/kasooku/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "fukugyo", label: "副業・複業エンジニアの働き方と注意点" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "他サービスとの使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "カソーク株式会社（ユナイテッド株式会社グループ／2022年末にドゥーファより事業譲受）"],
  ["サービス種別", "副業・複業・転職マッチングプラットフォーム"],
  ["対象職種", "セールス・事業開発・マーケター・人事・エンジニア等（エンジニアはサーバーサイド/フロント/インフラ/UI・UX等）"],
  ["登録者数", "プロ人材18,000人超（二次情報・時点要確認）"],
  ["稼働形態", "オンライン中心。副業・複業から転職採用への移行にも対応"],
  ["対応エリア", "オンライン主体（リモート可）"],
  ["料金", "個人（働く側）は無料・仲介手数料なし"],
  ["備考", "もとは営業・セールス副業に特化。エンジニア・デザイナー等へ領域を拡大"],
];

const goodReviews = [
  {
    title: "副業・複業から始めて転職にもつなげられる",
    body: "副業人材ドットコムやパラレルキャリア系メディアの紹介では、副業・複業として関わった後に正社員採用へ移行できる導線がある点が特徴として挙げられている。いきなり転職せず、まず副業で相性を確かめてから本格的にジョインしたい人と相性が良いという傾向の声が見られる。",
  },
  {
    title: "オンライン完結で在職中でも始めやすい",
    body: "公式・紹介メディアでは、登録から契約までオンラインで完結でき、稼働もオンライン中心であると説明されている。本業を持つ在職中のエンジニアでも、平日夜や週末に副業として関わりやすい設計という傾向の評価が見られる。",
  },
  {
    title: "個人側は無料・スタートアップ案件が中心",
    body: "個人（働く側）は無料で仲介手数料がかからないと説明されている。スタートアップ企業が案件を出していることが多く、成長フェーズの企業に副業から関われる点が紹介メディアで評価されている。",
  },
];

const badReviews = [
  {
    title: "口コミ・評判の蓄積がまだ少ない",
    body: "複数の紹介メディアで「評判や口コミはまだほとんどない」と明記されている。サービスの歴史や事業譲渡の経緯もあり、利用者の生の声が他大手ほど豊富ではない。",
    cope: "口コミ数が少ないサービスは、公式の案件内容・契約条件を自分の目で確認するのが基本。登録して実際の案件を見てから判断し、不安があれば実績豊富な他サービスと併用して比較軸を持つとよい。",
  },
  {
    title: "エンジニア案件の比率が高いとは限らない",
    body: "もともと営業・セールスの副業に特化したサービスから派生しており、紹介メディアの集計例ではセールス・事業開発職が最多で、エンジニア案件の比率が高いとは限らないという指摘がある。",
    cope: "登録時にエンジニア（サーバーサイド／フロント／インフラ等）で職種を絞って案件量を確認する。エンジニア専門の副業・フリーランス案件を厚く探したい場合は、ITプロパートナーズやフリーランススタートを併用すると選択肢が広がる。",
  },
  {
    title: "副業は本業との両立・契約条件の確認が必要",
    body: "副業・複業特有の論点として、本業の就業規則（副業可否）、稼働時間の確保、報酬・契約形態（準委任等）の確認が必要という点が紹介メディアで触れられている。",
    cope: "本業の副業規定を事前に確認し、稼働時間と報酬・契約形態を書面で明確にする。確定申告など税務面も含め、無理のない稼働範囲で始めるのが安全。",
  },
];

const fitYes = [
  "本業を持ちながら副業・複業でスキルを活かしたい30代・40代",
  "いきなり転職せず副業で企業との相性を確かめたい",
  "スタートアップ・成長企業に関わってみたい",
  "オンライン完結・リモートで稼働したい",
  "将来的に転職や独立も視野に入れている",
];

const fitNo = [
  "本業の就業規則で副業が認められていない",
  "エンジニア常駐・フルタイムの案件を中心に探したい",
  "豊富な口コミ・実績データを見てから決めたい（→大手特化サービス）",
  "高単価のフリーランス本業案件を最大化したい（→フリーランスエージェント）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（プロフィール作成）",
    body: "公式サイトから経歴・スキル・希望する関わり方（副業／複業／転職）を登録。エンジニアの場合は技術スタックを入力しておくとマッチングが進みやすい。",
  },
  {
    step: "STEP2",
    title: "案件閲覧・スカウト受信",
    body: "掲載案件を閲覧したり、企業からのスカウトを受け取る。副業・複業前提か、転職前提かを確認しながら気になる案件を選ぶ。",
  },
  {
    step: "STEP3",
    title: "オンライン面談・条件すり合わせ",
    body: "企業とオンラインで面談し、稼働時間・報酬・契約形態（準委任等）をすり合わせる。本業との両立を前提に無理のない稼働範囲を共有する。",
  },
  {
    step: "STEP4",
    title: "契約・副業/複業スタート",
    body: "条件合意後に契約を締結し、オンライン中心で稼働を開始。副業として相性を確かめながら関わる。",
  },
  {
    step: "STEP5",
    title: "継続・転職への移行検討",
    body: "相性が良ければ稼働を継続。企業・本人双方が希望すれば、副業から正社員採用への移行を検討する導線もある。",
  },
];

const faqs = [
  {
    q: "カソーク（Kasooku）はどんな会社が運営していますか？",
    a: "東証上場のユナイテッド株式会社グループの「カソーク株式会社」が運営しています。もとは株式会社ドゥーファが運営していたサービスで、2022年末にユナイテッド側へ事業譲渡されました。現在は副業・複業を中心としたデジタル人材と成長企業のマッチングに取り組んでいます。",
  },
  {
    q: "エンジニアの案件はありますか？",
    a: "あります。サーバーサイド開発・フロントエンド・インフラ・UI/UXデザインなどの職種に対応しています。ただし、もとは営業・セールスの副業に特化したサービスから派生しており、紹介メディアの集計ではセールス・事業開発職が最多というデータもあります。エンジニア案件の量は登録時に職種で絞って確認するのが確実です。",
  },
  {
    q: "副業・複業だけでなく転職もできますか？",
    a: "副業・複業から正社員採用への移行に対応しているのが特徴です。まず副業で企業との相性を確かめ、双方が希望すれば転職へ移行する、という使い方ができます。いきなり転職するより慎重に進めたい人に向いています。",
  },
  {
    q: "料金はかかりますか？",
    a: "個人（働く側）は無料で、仲介手数料はかからないと説明されています。費用は案件を出す企業側が負担する仕組みです。",
  },
  {
    q: "在職中・本業がある状態でも使えますか？",
    a: "オンライン完結・オンライン稼働中心のため、在職中でも副業・複業として関わりやすい設計です。ただし本業の就業規則で副業が認められているかを必ず事前に確認し、稼働時間と報酬・契約形態を明確にしてから始めてください。",
  },
  {
    q: "口コミが少ないのはなぜですか？信頼できますか？",
    a: "複数の紹介メディアで「評判・口コミはまだ少ない」と明記されています。事業譲渡の経緯やサービスの性質上、利用者の生の声が大手ほど蓄積されていないためです。判断材料が少ない分、公式の案件内容・契約条件を自分で確認し、必要に応じて他サービスと併用するのが安全です。",
  },
  {
    q: "30代・40代のエンジニアでも使えますか？",
    a: "年齢で一律に対象外とする記載は確認できず、スキルを持つ社会人の副業・複業を想定したサービスです。むしろ実務経験のある30代・40代は、副業から成長企業に関わる使い方と相性が良いといえます。ただしエンジニア案件の量は登録して確認するのが確実です。",
  },
];

const related = [
  { name: "ITプロパートナーズの評判（週2-3日・副業）", href: "/review/itpropartners/" },
  { name: "フリーランススタートの評判（案件検索）", href: "/review/freelance-start/" },
  { name: "Wantedlyの評判（カジュアル接点）", href: "/review/wantedly/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "フリーランス（業務委託）という働き方", href: "/employment/freelance/" },
  { name: "業務委託の基礎知識", href: "/employment/contractor/" },
];

export default function KasookuReview() {
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
          { name: "カソーク" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カソーク（Kasooku）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 副業・複業から転職にもつながるマッチングを口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          カソーク（Kasooku）は、<span className="font-bold">副業・複業・転職をつなぐマッチングプラットフォーム</span>です。本記事では評判・口コミを紹介メディアの傾向と公開情報に基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。なお、本サービスはフリーランスの本業案件を最大化するエージェントというより、<span className="font-bold">副業・複業から相性を確かめて転職にもつなげられる</span>点が特徴です。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "カソーク公式サイト",
            "ユナイテッド／ドゥーファ プレスリリース（PR TIMES）",
            "副業人材ドットコム",
            "パラレルキャリア系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：副業・複業から始めて、相性を見ながら転職も視野に入れたい人向け</span>。一言でいえば「本業を持ちつつスキルを活かし、成長企業に副業から関わってみたい30代・40代」向けのマッチングサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・運営はユナイテッドグループのカソーク株式会社。副業・複業から転職採用への移行に対応。</li>
              <li>・個人は無料・オンライン完結で在職中でも始めやすい。スタートアップ案件が中心。</li>
              <li>・一方で口コミの蓄積が少なく、エンジニア案件の比率は要確認。職種を絞って確認を。</li>
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
            ※運営会社・事業譲渡はプレスリリース、職種・料金は公式情報、登録者数は二次情報（時点要確認）です。案件の構成・量は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カソークの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 副業・複業から転職へつなげられる導線</h3>
              <p className="text-sm text-petrol-deep">
                副業・複業として企業に関わった後、双方が希望すれば正社員採用へ移行できる導線があるのが最大の特徴です。いきなり転職せず、まず副業で企業文化や仕事内容との相性を確かめたい人に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. オンライン完結で在職中でも始めやすい</h3>
              <p className="text-sm text-petrol-deep">
                登録から契約・稼働までオンライン中心で完結します。本業を持つ在職中のエンジニアでも、無理のない範囲で副業・複業として関わりやすい設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 個人は無料・スタートアップ案件が中心</h3>
              <p className="text-sm text-petrol-deep">
                個人（働く側）は無料で仲介手数料がかかりません。成長フェーズのスタートアップ企業が案件を出していることが多く、新しい技術や事業に副業から関わりやすいのも魅力です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 上場グループ運営の安心感</h3>
              <p className="text-sm text-petrol-deep">
                東証上場のユナイテッド株式会社グループ（カソーク株式会社）が運営しており、人材マッチングをコア事業に据えています。運営母体の事業基盤がはっきりしている点は、新興サービスを選ぶ際の安心材料になります。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は紹介メディア・公開情報上の傾向をまとめたものです（原文転載ではありません）。口コミ蓄積はまだ少なめである点に留意してください。
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
            公平性のため、ネガティブな傾向・注意点と、それぞれへの現実的な対処法もまとめます。
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

        {/* 副業・複業の働き方 */}
        <section id="fukugyo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業・複業エンジニアの働き方と注意点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              カソークは「副業・複業」を起点にしたサービスのため、いきなりフリーランス独立する場合とは前提が異なります。本業を持ったまま、追加でスキルを活かして関わる働き方です。これは収入源を分散しながらキャリアの選択肢を広げられる一方、本業との両立という固有の論点があります。
            </p>
            <p>
              特に確認すべきは、①本業の就業規則で副業が認められているか、②確保できる稼働時間（平日夜・週末など）、③契約形態（多くは準委任などの業務委託）と報酬・支払い条件、の3点です。これらを曖昧にしたまま始めると、本業に支障が出たり、報酬トラブルにつながることがあります。
            </p>
            <p>
              また副業収入は確定申告が必要になる場合があります。働き方の基礎は当サイトの
              <Link href="/employment/freelance/" className="text-petrol hover:underline">フリーランス（業務委託）という働き方</Link>
              や
              <Link href="/employment/contractor/" className="text-petrol hover:underline">業務委託の基礎知識</Link>
              で整理しています。副業から相性を確かめ、将来的に転職や独立も視野に入れる、という段階的なキャリア設計と相性の良いサービスです。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。カソークは「副業から始めて相性を見極める」設計のため、リスクを抑えてキャリアの選択肢を広げたい30代・40代と構造的に相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              本業のスキルを活かしつつ、成長企業に副業から関わって新しい技術領域や事業フェーズを経験できる年代です。将来の転職・独立に向けた実績作りや人脈形成として使うと効果的です。本業の副業規定だけは必ず確認しましょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              マネジメントやアーキテクト経験を、副業として成長企業に提供する使い方が向いています。いきなり転職するリスクを取らず、副業で相性を確かめてから動けるのは、守るものが増える40代にとって合理的です。ただしエンジニアのフルタイム求人を本格的に探すなら、特化型の転職エージェントを別途併用するのが堅実です。
            </p>
            <p>
              副業・複業はあくまで本業との両立が前提です。本業の転職そのものを進めたい場合は、当サイトの
              <Link href="/review/" className="text-petrol hover:underline">レビュー一覧</Link>
              から特化型エージェントもあわせて検討してください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から参画までの流れ（5ステップ）</h2>
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

        {/* 他サービス比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            副業・複業から始めたいのか、エンジニアの本業フリーランス案件を厚く探したいのかで、選ぶサービスは変わります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["カソーク（本記事）", "副業・複業から始め、相性を見て転職も視野に入れたい人。"],
                  ["ITプロパートナーズ", "週2〜3日・副業からエンジニアとして独立準備したい人。"],
                  ["フリーランススタート", "案件を横断検索して相場・選択肢を広く把握したい人。"],
                  ["Wantedly", "カジュアルに企業と接点を持ちたい人。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700">
                      {row[0]}
                    </td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/itpropartners/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ITプロパートナーズ（週2-3日）の評判 →
            </Link>
            <Link href="/review/freelance-start/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランススタート（案件検索）の評判 →
            </Link>
            <Link href="/review/wantedly/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Wantedly（カジュアル接点）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
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
          <h2 className="text-xl font-bold mb-3">カソークに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料登録で、副業・複業から関われるエンジニア案件を確認してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で登録する
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
